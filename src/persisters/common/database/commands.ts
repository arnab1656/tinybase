import {
  ALTER_TABLE,
  DELETE_FROM,
  QuerySchema,
  SELECT_STAR_FROM,
  TABLE,
  Upsert,
  WHERE,
  escapeColumnNames,
  escapeId,
  getPlaceholders,
} from './common.ts';
import type {
  CellOrUndefined,
  Table,
  ValueOrUndefined,
} from '../../../@types/store/index.d.ts';
import {IdSet2, setAdd, setNew} from '../../../common/set.ts';
import {
  arrayFilter,
  arrayIsEmpty,
  arrayJoin,
  arrayMap,
  arrayPush,
} from '../../../common/array.ts';
import {collClear, collDel, collHas, collValues} from '../../../common/coll.ts';
import {isUndefined, promiseAll} from '../../../common/other.ts';
import {mapEnsure, mapGet, mapNew, mapSet} from '../../../common/map.ts';
import {
  objDel,
  objIds,
  objIsEmpty,
  objMap,
  objNew,
  objToArray,
  objValues,
} from '../../../common/obj.ts';
import {COMMA} from '../../../common/strings.ts';
import type {DatabaseExecuteCommand} from '../../../@types/persisters/index.d.ts';
import type {Id} from '../../../@types/common/index.d.ts';

export type Schema = IdSet2;

export const getCommandFunctions = (
  databaseExecuteCommand: DatabaseExecuteCommand,
  managedTableNames: string[],
  querySchema: QuerySchema,
  onIgnoredError: ((error: any) => void) | undefined,
  columnType: string,
  upsert: Upsert = defaultUpsert,
  encode?: (cellOrValue: any) => string | number,
  decode?: (field: string | number) => any,
): [
  refreshSchema: () => Promise<void>,
  loadTable: (tableName: string, rowIdColumnName: string) => Promise<Table>,
  saveTable: (
    tableName: string,
    rowIdColumnName: string,
    content:
      | {
          [contentId: Id]:
            | {[contentSubId: Id]: CellOrUndefined | ValueOrUndefined}
            | undefined;
        }
      | undefined,
    deleteEmptyColumns: boolean,
    deleteEmptyTable: boolean,
    partial?: boolean,
  ) => Promise<void>,
  transaction: <Return>(actions: () => Promise<Return>) => Promise<Return>,
] => {
  const schemaMap: Schema = mapNew();

  const canSelect = (tableName: string, rowIdColumnName: string): boolean =>
    collHas(mapGet(schemaMap, tableName), rowIdColumnName);

  const refreshSchema = async (): Promise<void> => {
    collClear(schemaMap);
    arrayMap(
      await querySchema(databaseExecuteCommand, managedTableNames),
      ({tn, cn}) => setAdd(mapEnsure(schemaMap, tn, setNew<Id>), cn),
    );
  };

  const loadTable = async (
    tableName: string,
    rowIdColumnName: string,
  ): Promise<Table> =>
    canSelect(tableName, rowIdColumnName)
      ? objNew(
          arrayFilter(
            arrayMap(
              await databaseExecuteCommand(
                SELECT_STAR_FROM + escapeId(tableName),
              ),
              (row) => [
                row[rowIdColumnName],
                decode
                  ? objMap(objDel(row, rowIdColumnName), decode)
                  : objDel(row, rowIdColumnName),
              ],
            ),
            ([rowId, row]) => !isUndefined(rowId) && !objIsEmpty(row),
          ),
        )
      : {};

  const saveTable = async (
    tableName: string,
    rowIdColumnName: string,
    content:
      | {
          [contentId: Id]:
            | {[contentSubId: Id]: CellOrUndefined | ValueOrUndefined}
            | undefined;
        }
      | undefined,
    deleteEmptyColumns: boolean,
    deleteEmptyTable: boolean,
    partial = false,
  ): Promise<void> => {
    const targetColumnNameSet = setNew<string>();
    objToArray(content ?? {}, (contentRow) =>
      arrayMap(objIds(contentRow ?? {}), (cellOrValueId) =>
        setAdd(targetColumnNameSet, cellOrValueId),
      ),
    );
    const targetColumnNames = collValues(targetColumnNameSet);

    // Delete the table
    if (
      !partial &&
      deleteEmptyTable &&
      arrayIsEmpty(targetColumnNames) &&
      collHas(schemaMap, tableName)
    ) {
      await databaseExecuteCommand('DROP ' + TABLE + escapeId(tableName));
      mapSet(schemaMap, tableName);
      return;
    }

    const currentColumnNames = mapGet(schemaMap, tableName);
    const unaccountedColumnNames = setNew(collValues(currentColumnNames));
    if (!arrayIsEmpty(targetColumnNames)) {
      if (!collHas(schemaMap, tableName)) {
        // Create the table
        await databaseExecuteCommand(
          'CREATE ' +
            TABLE +
            escapeId(tableName) +
            `(${escapeId(rowIdColumnName)}${columnType} PRIMARY KEY${arrayJoin(
              arrayMap(
                targetColumnNames,
                (targetColumnName) =>
                  COMMA + escapeId(targetColumnName) + columnType,
              ),
            )});`,
        );
        mapSet(
          schemaMap,
          tableName,
          setNew([rowIdColumnName, ...targetColumnNames]),
        );
      } else {
        // Add columns
        await promiseAll(
          arrayMap(
            [rowIdColumnName, ...targetColumnNames],
            async (targetColumnName, index) => {
              if (!collDel(unaccountedColumnNames, targetColumnName)) {
                await databaseExecuteCommand(
                  ALTER_TABLE +
                    escapeId(tableName) +
                    'ADD' +
                    escapeId(targetColumnName) +
                    columnType,
                );
                if (index == 0) {
                  await databaseExecuteCommand(
                    'CREATE UNIQUE INDEX pk ON ' +
                      escapeId(tableName) +
                      `(${escapeId(rowIdColumnName)})`,
                  );
                }
                setAdd(currentColumnNames, targetColumnName);
              }
            },
          ),
        );
      }
    }
    // Remove columns
    await promiseAll([
      ...(!partial && deleteEmptyColumns
        ? arrayMap(
            collValues(unaccountedColumnNames),
            async (unaccountedColumnName) => {
              if (unaccountedColumnName != rowIdColumnName) {
                await databaseExecuteCommand(
                  ALTER_TABLE +
                    escapeId(tableName) +
                    'DROP' +
                    escapeId(unaccountedColumnName),
                );
                collDel(currentColumnNames, unaccountedColumnName);
              }
            },
          )
        : []),
    ]);

    if (partial) {
      if (isUndefined(content)) {
        // Delete all rows (partial)
        await databaseExecuteCommand(
          DELETE_FROM + escapeId(tableName) + WHERE + ' true',
        );
      } else {
        await promiseAll(
          objToArray(content, async (row, rowId) => {
            if (isUndefined(row)) {
              // Delete row (partial)
              await databaseExecuteCommand(
                DELETE_FROM +
                  escapeId(tableName) +
                  WHERE +
                  escapeId(rowIdColumnName) +
                  '=$1',
                [rowId],
              );
            } else if (!arrayIsEmpty(targetColumnNames)) {
              // Upsert row (partial)
              await upsert(
                databaseExecuteCommand,
                tableName,
                rowIdColumnName,
                objIds(row),
                {
                  [rowId]: encode
                    ? arrayMap(objValues(row), encode)
                    : objValues(row),
                },
                targetColumnNames,
              );
            }
          }),
        );
      }
    } else {
      if (!arrayIsEmpty(targetColumnNames)) {
        const changingColumnNames = arrayFilter(
          collValues(mapGet(schemaMap, tableName)),
          (changingColumnName) => changingColumnName != rowIdColumnName,
        );
        const rows: {[id: string]: any[]} = {};
        const deleteRowIds: string[] = [];
        objToArray(content ?? {}, (row, rowId) => {
          rows[rowId] = arrayMap(changingColumnNames, (cellId) =>
            encode ? encode(row?.[cellId]) : row?.[cellId],
          );
          arrayPush(deleteRowIds, rowId);
        });
        // Upsert row
        await upsert(
          databaseExecuteCommand,
          tableName,
          rowIdColumnName,
          changingColumnNames,
          rows,
          targetColumnNames,
        );
        // Delete rows
        await databaseExecuteCommand(
          DELETE_FROM +
            escapeId(tableName) +
            WHERE +
            escapeId(rowIdColumnName) +
            `NOT IN(${getPlaceholders(deleteRowIds)})`,
          deleteRowIds,
        );
      } else if (collHas(schemaMap, tableName)) {
        // Delete all rows
        await databaseExecuteCommand(
          DELETE_FROM + escapeId(tableName) + WHERE + ' true',
        );
      }
    }
  };

  const transaction = async <Return>(
    actions: () => Promise<Return>,
  ): Promise<Return> => {
    let result;
    await databaseExecuteCommand('BEGIN');
    try {
      result = await actions();
    } catch (error) {
      onIgnoredError?.(error);
    }
    await databaseExecuteCommand('END');
    return result as Return;
  };

  return [refreshSchema, loadTable, saveTable, transaction];
};

const defaultUpsert: Upsert = async (
  executeCommand: DatabaseExecuteCommand,
  tableName: string,
  rowIdColumnName: string,
  changingColumnNames: string[],
  rows: {[id: string]: any[]},
) => {
  const offset = [1];
  await executeCommand(
    'INSERT INTO' +
      escapeId(tableName) +
      escapeColumnNames(rowIdColumnName, ...changingColumnNames) +
      'VALUES' +
      arrayJoin(
        objToArray(
          rows,
          (params: any[]) =>
            '($' + offset[0]++ + ',' + getPlaceholders(params, offset) + ')',
        ),
        COMMA,
      ) +
      'ON CONFLICT(' +
      escapeId(rowIdColumnName) +
      ')DO UPDATE SET' +
      arrayJoin(
        arrayMap(
          changingColumnNames,
          (columnName) =>
            escapeId(columnName) + '=excluded.' + escapeId(columnName),
        ),
        COMMA,
      ),
    objToArray(rows, (params: any[], id: string) => [
      id,
      ...arrayMap(params, (param) => param ?? null),
    ]).flat(),
  );
};

import {Hash, Stamp, Time} from '../types/mergeable-store';
import {IdMap, mapEnsure, mapNew, mapToObj} from '../common/map';
import {IdObj, objForEach, objNew} from '../common/obj';
import {EMPTY_STRING} from '../common/strings';
import {Id} from '../types/common';
import {getHash} from './hash';
import {jsonString} from '../common/json';

export type HashStamp<Thing> = [hash: Hash, time: Time, thing: Thing];

export const stampNew = <Thing>(time: Time, thing?: Thing): Stamp<Thing> => [
  time,
  thing as Thing,
];

export const hashIdAndHash = (id: Id, hash: Hash) => getHash(id + ':' + hash);

export const hashStampNewLeaf = <Leaf>(
  time: Time,
  thing?: Leaf,
): HashStamp<Leaf> => {
  return [getHash(jsonString(thing ?? null) + ':' + time), time, thing as Leaf];
};

export const updateHashStamp = (
  stamp: HashStamp<unknown>,
  hash: Hash,
  time: Time,
) => {
  stamp[0] = hash >>> 0;
  stamp[1] = time;
};

export const stampNewObj = <Thing>(time: Time): Stamp<IdObj<Thing>> =>
  stampNew(time, objNew<Thing>());

export const hashStampNewMap = <Thing>(
  time = EMPTY_STRING,
): HashStamp<IdMap<Thing>> => [0, time, mapNew<Id, Thing>()];

export const cloneHashStampToStamp = <Value>([
  ,
  time,
  value,
]: HashStamp<Value>): Stamp<Value> => [time, value];

export const hashStampToStamp = <From, To = From>(
  [, time, value]: HashStamp<From>,
  mapper: (value: From, time: Time) => To,
): Stamp<To> => [time, mapper(value, time)];

export const hashStampMapToStampObj = <From, To = From>(
  hashStampMap: HashStamp<IdMap<From>>,
  mapper: (mapValue: From) => To,
): Stamp<IdObj<To>> =>
  hashStampToStamp(hashStampMap, (map) => mapToObj(map, mapper));

export const mergeStampsIntoHashStamps = <NewThing, Thing>(
  stamps: IdObj<Stamp<NewThing>>,
  hashStamps: IdMap<HashStamp<Thing>>,
  changes: any,
  merge: (newThing: NewThing, thing: Thing, changes: any) => void,
): void =>
  objForEach(stamps, (stamp, thingId) =>
    mergeStampIntoHashStamp(
      stamp,
      mapEnsure<Id, any>(hashStamps, thingId, hashStampNewMap),
      (changes[thingId] = objNew()),
      merge,
    ),
  );

export const mergeStampIntoHashStamp = <NewThing, Thing>(
  [newTime, newThing]: Stamp<NewThing>,
  hashStamp: HashStamp<Thing>,
  changes: any,
  merge: (newThing: NewThing, thing: Thing, changes: any) => void,
): void => {
  if (newTime > hashStamp[1]) {
    hashStamp[1] = newTime;
  }
  merge(newThing, hashStamp[2], changes);
};

export const mergeLeafStampsIntoHashStamps = <Leaf>(
  stamps: IdObj<Stamp<Leaf | undefined>>,
  hashStamps: IdMap<HashStamp<Leaf | undefined>>,
  changes: any,
): void =>
  objForEach(stamps, ([newTime, newLeaf], leafId) => {
    const hashStamp = mapEnsure<Id, any>(hashStamps, leafId, hashStampNewMap);
    if (newTime > hashStamp[1]) {
      hashStamp[1] = newTime;
      hashStamp[2] = changes[leafId] = newLeaf;
    }
  });

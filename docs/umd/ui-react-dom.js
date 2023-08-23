var e,t;e=this,t=function(e,t,l){"use strict";const a=e=>typeof e,n=a(""),o=a(!0),r=a(0),s="Value",i="currentTarget",d="value",u=isFinite,m=e=>null==e,{PureComponent:c,Fragment:h,createElement:b,useCallback:g,useLayoutEffect:p,useRef:f,useState:w}=t,I=(e,...t)=>m(e)?{}:e(...t),C=(e,t)=>e.map(t),y=Object,k=(e=[])=>y.fromEntries(e),v=(e,t)=>C(y.entries(e),(([e,l])=>t(l,e))),x="tinybaseStoreInspector",R="M20 80l5-15l40-40l10 10l-40 40l-15 5m5-15l10 10",T='content:url("',S=T+"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' stroke-width='4' stroke='white' fill='none'>",N='</svg>")',V=T+"data:image/svg+xml,%3csvg viewBox='0 0 680 680' xmlns='http://www.w3.org/2000/svg' style='width:680px%3bheight:680px'%3e %3cpath stroke='white' stroke-width='80' fill='none' d='M340 617a84 241 90 11.01 0zM131 475a94 254 70 10428-124 114 286 70 01-428 124zm0-140a94 254 70 10428-124 114 286 70 01-428 124zm-12-127a94 254 70 00306 38 90 260 90 01-306-38zm221 3a74 241 90 11.01 0z' /%3e %3cpath fill='%23d81b60' d='M131 475a94 254 70 10428-124 114 286 70 01-428 124zm0-140a94 254 70 10428-124 114 286 70 01-428 124z' /%3e %3cpath d='M249 619a94 240 90 00308-128 114 289 70 01-308 128zM119 208a94 254 70 00306 38 90 260 90 01-306-38zm221 3a74 241 90 11.01 0z' /%3e%3c/svg%3e\")",z=C([[20,20,20,60],[20,20,60,20],[20,60,60,20],[60,20,20,60],[30,30,40,40]],(([e,t,l,a])=>S+`<rect x='20' y='20' width='60' height='60' fill='grey'/><rect x='${e}' y='${t}' width='${l}' height='${a}' fill='white'/>`+N)),$=S+"<path d='M20 20l60 60M20 80l60-60' />"+N,M=S+`<path d='${R}' />`+N,q=S+`<path d='${R}M20 20l60 60' />`+N,B="*::-webkit-scrollbar";((e,t="")=>{e.join(t)})(v({"":"all:initial;font-family:sans-serif;font-size:0.75rem;position:fixed;z-index:999999","*":"all:revert","*::before":"all:revert","*::after":"all:revert",[B]:"width:0.5rem;height:0.5rem;",[B+"-track"]:"background:#111",[B+"-thumb"]:"background:#999;border:1px solid #111",[B+"-thumb:hover"]:"background:#fff",[B+"-corner"]:"background:#111",img:"width:1rem;height:1rem;background:#111;border:0;vertical-align:text-bottom",">img":"padding:0.25rem;bottom:0;right:0;position:fixed;"+V,...k(C(["bottom:0;left:0","top:0;right:0"],((e,t)=>[`>img[data-position='${t}']`,e]))),main:"display:flex;flex-direction:column;background:#111d;color:#fff;position:fixed;",...k(C(["bottom:0;left:0;width:35vw;height:100vh","top:0;right:0;width:100vw;height:30vh","bottom:0;left:0;width:100vw;height:30vh","top:0;right:0;width:35vw;height:100vh","top:0;right:0;width:100vw;height:100vh"],((e,t)=>[`main[data-position='${t}']`,e]))),header:"display:flex;padding:0.25rem;background:#000;align-items:center","header>img:nth-of-type(1)":V,"header>img:nth-of-type(6)":$,...k(C(z,((e,t)=>[`header>img[data-id='${t}']`,e]))),"header>span":"flex:1;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;margin-left:0.25rem",article:"padding:0.25rem 0.25rem 0.25rem 0.5rem;overflow:auto;flex:1",details:"margin-left:0.75rem;width:fit-content;","details img":"display:none","details[open]>summary img":"display:unset;background:none;margin-left:0.25rem","details[open]>summary img.edit":M,"details[open]>summary img.done":q,summary:"margin-left:-0.75rem;line-height:1.25rem;user-select:none;width:fit-content",table:"border-collapse:collapse;table-layout:fixed;margin-bottom:0.5rem","table input":"background:#111;color:unset;padding:0 0.25rem;border:0;font-size:unset;vertical-align:top;margin:0",'table input[type="number"]':"width:4rem","table tbody button":"font-size:0;background:#fff;border-radius:50%;margin:0 0.125rem 0 0;width:0.85rem;color:#111","table button:first-letter":"font-size:0.75rem",thead:"background:#222","th:nth-of-type(1)":"min-width:2rem;","th.sorted":"background:#000","table caption":"text-align:left;white-space:nowrap;line-height:1.25rem",button:"width:1.5rem;border:none;background:none;color:#fff;padding:0","button[disabled]":"color:#777","button.next":"margin-right:0.5rem",[`th,#${x} td`]:"overflow:hidden;text-overflow:ellipsis;padding:0.25rem 0.5rem;max-width:12rem;white-space:nowrap;border-width:1px 0;border-style:solid;border-color:#777;text-align:left","span.warn":"margin:0.25rem;color:#d81b60"},((e,t)=>e?`#${x} ${t}{${e}}`:"")));const H=(e,t,l,a)=>e==n?t:e==r?l:a,{useCallback:O,useMemo:F,useState:E}=t,P="editable",j=(e,t)=>C(l.useTableCellIds(e,t),(t=>e+"."+t)),A=(e,t,l)=>{const a=O(e,t);return l?a:void 0},L=(...e)=>F((()=>e),e),U=(e,t)=>F((()=>({store:e,tableId:t})),[e,t]),D=(e,t)=>F((()=>({queries:e,queryId:t})),[e,t]),G=(e,t=!1,l,a=0,n,o,r,s)=>{const[[i,d,u],m]=E([e,t,a]),c=O((e=>{m(e),s?.(e)}),[s]),h=A((e=>c([e,e==i&&!d,u])),[c,i,d,u],l),g=O((e=>c([i,d,e])),[c,i,d]),p=!0===r?_:r;return[[i,d,u],h,F((()=>!1===r?null:b(p,{offset:u,limit:n,total:o,onChange:g})),[r,p,u,n,o,g])]},J=(e,t,l)=>F((()=>{const o=t??e;return k(v(Array.isArray(o)?k(C(o,(e=>[e,e]))):o,((e,t)=>{return[t,{label:t,component:l,...(o=e,a(o)==n?{label:e}:e)}];var o})))}),[t,l,e]),K=({className:e,headerRow:t,idColumn:l,params:[a,n,o,r,s,i]})=>b("table",{className:e},i?b("caption",null,i):null,!1===t?null:b("thead",null,b("tr",null,!1===l?null:b(Q,{sort:r??[],label:"Id",onClick:s}),v(a,(({label:e},t)=>b(Q,{key:t,cellId:t,label:e,sort:r??[],onClick:s}))))),b("tbody",null,C(o,(e=>b("tr",{key:e},!1===l?null:b("th",null,e),v(a,(({component:t,getComponentProps:l},a)=>b("td",{key:a},b(t,{...I(l,e,a),...n,rowId:e,cellId:a}))))))))),Q=({cellId:e,sort:[t,l],label:a=e??"",onClick:n})=>b("th",{onClick:A((()=>n?.(e)),[n,e],n),className:m(l)||t!=e?void 0:`sorted ${l?"de":"a"}scending`},m(l)||t!=e?null:(l?"↓":"↑")+" ",a),W=({localRowId:e,params:[a,n,o,r,s,i,d]})=>{const u=l.useRemoteRowId(s,e,i);return b("tr",null,!1===a?null:b(t.Fragment,null,b("th",null,e),b("th",null,u)),v(n,(({component:t,getComponentProps:l},a)=>{const[n,s]=a.split(".",2),i=n===o?e:n===r?u:null;return m(i)?null:b("td",{key:a},b(t,{...I(l,i,s),store:d,tableId:n,rowId:i,cellId:s}))})))},X=({thing:e,onThingChange:t,className:l,hasSchema:s})=>{const[m,c]=E(),[h,g]=E(),[p,f]=E(),[w,I]=E(),[C,y]=E();h!==e&&(c((e=>{const t=a(e);return(e=>e==n||e==o)(t)||t==r&&u(e)?t:void 0})(e)),g(e),f(e+""),I(Number(e)||0),y(!!e));const k=O(((e,l)=>{l(e),g(e),t(e)}),[t]);return b("div",{className:l},b("button",{className:m,onClick:O((()=>{if(!s?.()){const e=H(m,r,o,n),l=H(e,p,w,C);c(e),g(l),t(l)}}),[s,t,p,w,C,m])},m),H(m,b("input",{key:m,value:p,onChange:O((e=>k(e[i][d]+"",f)),[k])}),b("input",{key:m,type:"number",value:w,onChange:O((e=>k(Number(e[i][d]||0),I)),[k])}),b("input",{key:m,type:"checkbox",checked:C,onChange:O((e=>k(!!e[i].checked,y)),[k])})))},Y=({tableId:e,rowId:t,cellId:a,store:n,className:o})=>b(X,{thing:l.useCell(e,t,a,n),onThingChange:l.useSetCellCallback(e,t,a,(e=>e),[],n),className:o??P+"Cell",hasSchema:l.useStoreOrStoreById(n)?.hasTablesSchema}),Z=({valueId:e,store:t,className:a})=>b(X,{thing:l.useValue(e,t),onThingChange:l.useSetValueCallback(e,(e=>e),[],t),className:a??P+s,hasSchema:l.useStoreOrStoreById(t)?.hasValuesSchema}),_=({onChange:e,total:l,offset:a=0,limit:n=l,singular:o="row",plural:r=o+"s"})=>{(a>l||a<0)&&(a=0,e(0));const s=A((()=>e(a-n)),[e,a,n],a>0),i=A((()=>e(a+n)),[e,a,n],a+n<l);return b(t.Fragment,null,l>n&&b(t.Fragment,null,b("button",{className:"previous",disabled:0==a,onClick:s},"←"),b("button",{className:"next",disabled:a+n>=l,onClick:i},"→"),a+1," to ",Math.min(l,a+n)," of "),l," ",1!=l?r:o)},ee=e=>new Map(e);ee(),ee(),e.EditableCellView=Y,e.EditableValueView=Z,e.RelationshipInHtmlTable=({relationshipId:e,relationships:a,editable:n,customCells:o,className:r,headerRow:s,idColumn:i=!0})=>{const[d,u,m,c]=((e,t)=>[e,e?.getStore(),e?.getLocalTableId(t),e?.getRemoteTableId(t)])(l.useRelationshipsOrRelationshipsById(a),e),h=J([...j(m,u),...j(c,u)],o,n?Y:l.CellView),g=L(i,h,m,c,e,d,u);return b("table",{className:r},!1===s?null:b("thead",null,b("tr",null,!1===i?null:b(t.Fragment,null,b("th",null,m,".Id"),b("th",null,c,".Id")),v(h,(({label:e},t)=>b("th",{key:t},e))))),b("tbody",null,C(l.useRowIds(m,u),(e=>b(W,{key:e,localRowId:e,params:g})))))},e.ResultSortedTableInHtmlTable=({queryId:e,cellId:t,descending:a,offset:n,limit:o,queries:r,sortOnClick:s,paginator:i=!1,customCells:d,onChange:u,...m})=>{const[c,h,g]=G(t,a,s,n,o,l.useResultRowCount(e,r),i,u);return b(K,{...m,params:L(J(l.useResultTableCellIds(e,r),d,l.ResultCellView),D(r,e),l.useResultSortedRowIds(e,...c,o,r),c,h,g)})},e.ResultTableInHtmlTable=({queryId:e,queries:t,customCells:a,...n})=>b(K,{...n,params:L(J(l.useResultTableCellIds(e,t),a,l.ResultCellView),D(t,e),l.useResultRowIds(e,t))}),e.SliceInHtmlTable=({indexId:e,sliceId:t,indexes:a,editable:n,customCells:o,...r})=>{const[s,i,d]=((e,t)=>[e,e?.getStore(),e?.getTableId(t)])(l.useIndexesOrIndexesById(a),e);return b(K,{...r,params:L(J(l.useTableCellIds(d,i),o,n?Y:l.CellView),U(i,d),l.useSliceRowIds(e,t,s))})},e.SortedTableInHtmlTable=({tableId:e,cellId:t,descending:a,offset:n,limit:o,store:r,editable:s,sortOnClick:i,paginator:d=!1,onChange:u,customCells:m,...c})=>{const[h,g,p]=G(t,a,i,n,o,l.useRowCount(e,r),d,u);return b(K,{...c,params:L(J(l.useTableCellIds(e,r),m,s?Y:l.CellView),U(r,e),l.useSortedRowIds(e,...h,o,r),h,g,p)})},e.SortedTablePaginator=_,e.StoreInspector=e=>null,e.TableInHtmlTable=({tableId:e,store:t,editable:a,customCells:n,...o})=>b(K,{...o,params:L(J(l.useTableCellIds(e,t),n,a?Y:l.CellView),U(t,e),l.useRowIds(e,t))}),e.ValuesInHtmlTable=({store:e,editable:t=!1,valueComponent:a=(t?Z:l.ValueView),getValueComponentProps:n,className:o,headerRow:r,idColumn:i})=>b("table",{className:o},!1===r?null:b("thead",null,b("tr",null,!1===i?null:b("th",null,"Id"),b("th",null,s))),b("tbody",null,C(l.useValueIds(e),(t=>b("tr",{key:t},!1===i?null:b("th",null,t),b("td",null,b(a,{...I(n,t),valueId:t,store:e})))))))},"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react"),require("./ui-react")):"function"==typeof define&&define.amd?define(["exports","react","./ui-react"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).TinyBaseUiReactDom={},e.React,e.TinyBaseUiReact);

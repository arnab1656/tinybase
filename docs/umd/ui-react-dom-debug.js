var e,t;e=this,t=function(e,t,s){"use strict";const l=e=>typeof e,a="",n=l(a),o=l(!0),r=l(0),i=l(l),d="type",u="default",c="Ids",h="Table",m=h+"s",b=h+c,g="Row",p=g+"Count",I=g+c,f="Cell",w=f+c,y="Value",C=y+"s",v=y+c,k="currentTarget",T="value",S=e=>a+e,x=Math.floor,V=isFinite,R=(e,t)=>e instanceof t,q=e=>null==e,N=(e,t,s)=>q(e)?s?.():t(e),L=e=>e==n||e==o,M=e=>l(e)==i,E=e=>Array.isArray(e),z=(e,t,s)=>e.slice(t,s),$=e=>e.length,{PureComponent:O,Fragment:A,createElement:F,useCallback:J,useLayoutEffect:P,useRef:B,useState:H}=t,D=(e,...t)=>q(e)?{}:e(...t),Q=(e,t)=>e.forEach(t),j=(e,t)=>e.map(t),W=e=>0==$(e),U=(e,...t)=>e.push(...t),G=e=>e.shift(),K=Object,X=K.keys,Y=K.isFrozen,Z=K.freeze,_=e=>R(e,K)&&e.constructor==K,ee=(e=[])=>K.fromEntries(e),te=(e,t)=>!q(((e,t)=>N(e,(e=>e[t])))(e,t)),se=(e,t)=>(delete e[t],e),le=(e,t)=>j(K.entries(e),(([e,s])=>t(s,e))),ae=e=>_(e)&&0==(e=>$(X(e)))(e),ne=e=>JSON.stringify(e,((e,t)=>R(t,Map)?K.fromEntries([...t]):t)),oe=JSON.parse,re="tinybaseStoreInspector",ie="TinyBase Store Inspector",de=["left","top","bottom","right","full"],ue="state",ce="sort",he="open",me="position",be=he,ge="editable",pe=(...e)=>ne(e),Ie=(e,t)=>j(e.sort(),t),fe=(e,t)=>[!!s.useCell(ue,e,ge,t),J((s=>{t.setCell(ue,e,ge,(e=>!e)),s.preventDefault()}),[t,e])],we="M20 80l5-15l40-40l10 10l-40 40l-15 5m5-15l10 10",ye='content:url("',Ce=ye+"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' stroke-width='4' stroke='white' fill='none'>",ve='</svg>")',ke=ye+"data:image/svg+xml,%3csvg viewBox='0 0 680 680' xmlns='http://www.w3.org/2000/svg' style='width:680px%3bheight:680px'%3e %3cpath stroke='white' stroke-width='80' fill='none' d='M340 617a84 241 90 11.01 0zM131 475a94 254 70 10428-124 114 286 70 01-428 124zm0-140a94 254 70 10428-124 114 286 70 01-428 124zm-12-127a94 254 70 00306 38 90 260 90 01-306-38zm221 3a74 241 90 11.01 0z' /%3e %3cpath fill='%23d81b60' d='M131 475a94 254 70 10428-124 114 286 70 01-428 124zm0-140a94 254 70 10428-124 114 286 70 01-428 124z' /%3e %3cpath d='M249 619a94 240 90 00308-128 114 289 70 01-308 128zM119 208a94 254 70 00306 38 90 260 90 01-306-38zm221 3a74 241 90 11.01 0z' /%3e%3c/svg%3e\")",Te=j([[20,20,20,60],[20,20,60,20],[20,60,60,20],[60,20,20,60],[30,30,40,40]],(([e,t,s,l])=>Ce+`<rect x='20' y='20' width='60' height='60' fill='grey'/><rect x='${e}' y='${t}' width='${s}' height='${l}' fill='white'/>`+ve)),Se=Ce+"<path d='M20 20l60 60M20 80l60-60' />"+ve,xe=Ce+`<path d='${we}' />`+ve,Ve=Ce+`<path d='${we}M20 20l60 60' />`+ve,Re="*::-webkit-scrollbar",qe=`#${re}{\n  all:initial;font-family:sans-serif;font-size:0.75rem;position:fixed;z-index:999999;\n  ${((e,t="")=>e.join(t))(le({"*":"all:revert","*::before":"all:revert","*::after":"all:revert",[Re]:"width:0.5rem;height:0.5rem;",[Re+"-track"]:"background:#111",[Re+"-thumb"]:"background:#999;border:1px solid #111",[Re+"-thumb:hover"]:"background:#fff",[Re+"-corner"]:"background:#111",img:"width:1rem;height:1rem;background:#111;border:0;vertical-align:text-bottom",">img":"padding:0.25rem;bottom:0;right:0;position:fixed;"+ke,...ee(j(["bottom:0;left:0","top:0;right:0"],((e,t)=>[`>img[data-position='${t}']`,e]))),main:"display:flex;flex-direction:column;background:#111d;color:#fff;position:fixed;",...ee(j(["bottom:0;left:0;width:35vw;height:100vh","top:0;right:0;width:100vw;height:30vh","bottom:0;left:0;width:100vw;height:30vh","top:0;right:0;width:35vw;height:100vh","top:0;right:0;width:100vw;height:100vh"],((e,t)=>[`main[data-position='${t}']`,e]))),header:"display:flex;padding:0.25rem;background:#000;align-items:center","header>img:nth-of-type(1)":ke,"header>img:nth-of-type(6)":Se,...ee(j(Te,((e,t)=>[`header>img[data-id='${t}']`,e]))),"header>span":"flex:1;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;margin-left:0.25rem",article:"padding:0.25rem 0.25rem 0.25rem 0.5rem;overflow:auto;flex:1",details:"margin-left:0.75rem;width:fit-content;","details img":"display:none","details[open]>summary img":"display:unset;background:none;margin-left:0.25rem","details[open]>summary img.edit":xe,"details[open]>summary img.done":Ve,summary:"margin-left:-0.75rem;line-height:1.25rem;user-select:none;width:fit-content",table:"border-collapse:collapse;table-layout:fixed;margin-bottom:0.5rem","table input":"background:#111;color:unset;padding:0 0.25rem;border:0;font-size:unset;vertical-align:top;margin:0",'table input[type="number"]':"width:4rem","table tbody button":"font-size:0;background:#fff;border-radius:50%;margin:0 0.125rem 0 0;width:0.85rem;color:#111","table button:first-letter":"font-size:0.75rem",thead:"background:#222","th:nth-of-type(1)":"min-width:2rem;","th.sorted":"background:#000","table caption":"text-align:left;white-space:nowrap;line-height:1.25rem",button:"width:1.5rem;border:none;background:none;color:#fff;padding:0","button[disabled]":"color:#777","button.next":"margin-right:0.5rem","th,td":"overflow:hidden;text-overflow:ellipsis;padding:0.25rem 0.5rem;max-width:12rem;white-space:nowrap;border-width:1px 0;border-style:solid;border-color:#777;text-align:left","span.warn":"margin:0.25rem;color:#d81b60"},((e,t)=>e?`& ${t}{${e}}`:"")))}`,Ne=({s:e})=>{const t=s.useValue(me,e)??1,l=s.useSetValueCallback(be,(()=>!0),[],e);return s.useValue(be,e)?null:F("img",{onClick:l,title:ie,"data-position":t})},Le=({uniqueId:e,summary:t,editable:l,handleEditable:a,children:n,s:o})=>{const r=!!s.useCell(ue,e,he,o),i=s.useSetCellCallback(ue,e,he,(e=>e[k].open),[],o);return F("details",{open:r,onToggle:i},F("summary",null,t,a?F("img",{onClick:a,className:l?"done":"edit"}):null),n)},Me=e=>{const t=l(e);return L(t)||t==r&&V(e)?t:void 0},Ee=(e,t,s,l,a)=>q(a)?e.delCell(t,s,l,!0):e.setCell(t,s,l,a),ze=(e,t,s)=>q(s)?e.delValue(t):e.setValue(t,s),$e=(e,t,s,l)=>e==n?t:e==r?s:l,{useCallback:Oe,useMemo:Ae,useState:Fe}=t,Je="editable",Pe=(e,t)=>j(s.useTableCellIds(e,t),(t=>e+"."+t)),Be=(e,t,s)=>{const l=Oe(e,t);return s?l:void 0},He=(...e)=>Ae((()=>e),e),De=(e,t)=>Ae((()=>({store:e,tableId:t})),[e,t]),Qe=(e,t)=>Ae((()=>({queries:e,queryId:t})),[e,t]),je=(e,t=!1,s,l=0,a,n,o,r)=>{const[[i,d,u],c]=Fe([e,t,l]),h=Oe((e=>{c(e),r?.(e)}),[r]),m=Be((e=>h([e,e==i&&!d,u])),[h,i,d,u],s),b=Oe((e=>h([i,d,e])),[h,i,d]),g=!0===o?at:o;return[[i,d,u],m,Ae((()=>!1===o?null:F(g,{offset:u,limit:a,total:n,onChange:b})),[o,g,u,a,n,b])]},We=(e,t,s)=>Ae((()=>{const a=t??e;return ee(le(E(a)?ee(j(a,(e=>[e,e]))):a,((e,t)=>{return[t,{label:t,component:s,...(a=e,l(a)==n?{label:e}:e)}];var a})))}),[t,s,e]),Ue=({className:e,headerRow:t,idColumn:s,params:[l,a,n,o,r,i]})=>F("table",{className:e},i?F("caption",null,i):null,!1===t?null:F("thead",null,F("tr",null,!1===s?null:F(Ge,{sort:o??[],label:"Id",onClick:r}),le(l,(({label:e},t)=>F(Ge,{key:t,cellId:t,label:e,sort:o??[],onClick:r}))))),F("tbody",null,j(n,(e=>F("tr",{key:e},!1===s?null:F("th",null,e),le(l,(({component:t,getComponentProps:s},l)=>F("td",{key:l},F(t,{...D(s,e,l),...a,rowId:e,cellId:l}))))))))),Ge=({cellId:e,sort:[t,s],label:l=e??a,onClick:n})=>F("th",{onClick:Be((()=>n?.(e)),[n,e],n),className:q(s)||t!=e?void 0:`sorted ${s?"de":"a"}scending`},q(s)||t!=e?null:(s?"↓":"↑")+" ",l),Ke=({localRowId:e,params:[l,a,n,o,r,i,d]})=>{const u=s.useRemoteRowId(r,e,i);return F("tr",null,!1===l?null:F(t.Fragment,null,F("th",null,e),F("th",null,u)),le(a,(({component:t,getComponentProps:s},l)=>{const[a,r]=l.split(".",2),i=a===n?e:a===o?u:null;return q(i)?null:F("td",{key:l},F(t,{...D(s,i,r),store:d,tableId:a,rowId:i,cellId:r}))})))},Xe=({thing:e,onThingChange:t,className:s,hasSchema:l,showType:a=!0})=>{const[i,d]=Fe(),[u,c]=Fe(),[h,m]=Fe(),[b,g]=Fe(),[p,I]=Fe();u!==e&&(d(Me(e)),c(e),m(e+""),g(Number(e)||0),I(!!e));const f=Oe(((e,s)=>{s(e),c(e),t(e)}),[t]),w=Oe((()=>{if(!l?.()){const e=$e(i,r,o,n),s=$e(e,h,b,p);d(e),c(s),t(s)}}),[l,t,h,b,p,i]);return F("div",{className:s},a?F("button",{className:i,onClick:w},i):null,$e(i,F("input",{key:i,value:h,onChange:Oe((e=>f(e[k][T]+"",m)),[f])}),F("input",{key:i,type:"number",value:b,onChange:Oe((e=>f(Number(e[k][T]||0),g)),[f])}),F("input",{key:i,type:"checkbox",checked:p,onChange:Oe((e=>f(!!e[k].checked,I)),[f])})))},Ye=({tableId:e,cellId:t,descending:l,offset:a,limit:n,store:o,editable:r,sortOnClick:i,paginator:d=!1,onChange:u,customCells:c,...h})=>{const[m,b,g]=je(t,l,i,a,n,s.useRowCount(e,o),d,u);return F(Ue,{...h,params:He(We(s.useTableCellIds(e,o),c,r?st:s.CellView),De(o,e),s.useSortedRowIds(e,...m,n,o),m,b,g)})},Ze=({store:e,editable:t=!1,valueComponent:l=(t?lt:s.ValueView),getValueComponentProps:a,className:n,headerRow:o,idColumn:r})=>F("table",{className:n},!1===o?null:F("thead",null,F("tr",null,!1===r?null:F("th",null,"Id"),F("th",null,y))),F("tbody",null,j(s.useValueIds(e),(t=>F("tr",{key:t},!1===r?null:F("th",null,t),F("td",null,F(l,{...D(a,t),valueId:t,store:e}))))))),_e=({indexId:e,sliceId:t,indexes:l,editable:a,customCells:n,...o})=>{const[r,i,d]=((e,t)=>[e,e?.getStore(),e?.getTableId(t)])(s.useIndexesOrIndexesById(l),e);return F(Ue,{...o,params:He(We(s.useTableCellIds(d,i),n,a?st:s.CellView),De(i,d),s.useSliceRowIds(e,t,r))})},et=({relationshipId:e,relationships:l,editable:a,customCells:n,className:o,headerRow:r,idColumn:i=!0})=>{const[d,u,c,h]=((e,t)=>[e,e?.getStore(),e?.getLocalTableId(t),e?.getRemoteTableId(t)])(s.useRelationshipsOrRelationshipsById(l),e),m=We([...Pe(c,u),...Pe(h,u)],n,a?st:s.CellView),b=He(i,m,c,h,e,d,u);return F("table",{className:o},!1===r?null:F("thead",null,F("tr",null,!1===i?null:F(t.Fragment,null,F("th",null,c,".Id"),F("th",null,h,".Id")),le(m,(({label:e},t)=>F("th",{key:t},e))))),F("tbody",null,j(s.useRowIds(c,u),(e=>F(Ke,{key:e,localRowId:e,params:b})))))},tt=({queryId:e,cellId:t,descending:l,offset:a,limit:n,queries:o,sortOnClick:r,paginator:i=!1,customCells:d,onChange:u,...c})=>{const[h,m,b]=je(t,l,r,a,n,s.useResultRowCount(e,o),i,u);return F(Ue,{...c,params:He(We(s.useResultTableCellIds(e,o),d,s.ResultCellView),Qe(o,e),s.useResultSortedRowIds(e,...h,n,o),h,m,b)})},st=({tableId:e,rowId:t,cellId:l,store:a,className:n,showType:o})=>F(Xe,{thing:s.useCell(e,t,l,a),onThingChange:s.useSetCellCallback(e,t,l,(e=>e),[],a),className:n??Je+f,showType:o,hasSchema:s.useStoreOrStoreById(a)?.hasTablesSchema}),lt=({valueId:e,store:t,className:l,showType:a})=>F(Xe,{thing:s.useValue(e,t),onThingChange:s.useSetValueCallback(e,(e=>e),[],t),className:l??Je+y,showType:a,hasSchema:s.useStoreOrStoreById(t)?.hasValuesSchema}),at=({onChange:e,total:s,offset:l=0,limit:a=s,singular:n="row",plural:o=n+"s"})=>{(l>s||l<0)&&(l=0,e(0));const r=Be((()=>e(l-a)),[e,l,a],l>0),i=Be((()=>e(l+a)),[e,l,a],l+a<s);return F(t.Fragment,null,s>a&&F(t.Fragment,null,F("button",{className:"previous",disabled:0==l,onClick:r},"←"),F("button",{className:"next",disabled:l+a>=s,onClick:i},"→"),l+1," to ",Math.min(s,l+a)," of "),s," ",1!=s?o:n)},nt=({indexes:e,indexesId:t,indexId:l,s:a})=>F(Le,{uniqueId:pe("i",t,l),summary:"Index: "+l,s:a},j(s.useSliceIds(l,e),(s=>F(ot,{indexes:e,indexesId:t,indexId:l,sliceId:s,s:a,key:s})))),ot=({indexes:e,indexesId:t,indexId:s,sliceId:l,s:a})=>{const n=pe("i",t,s,l),[o,r]=fe(n,a);return F(Le,{uniqueId:n,summary:"Slice: "+l,editable:o,handleEditable:r,s:a},F(_e,{sliceId:l,indexId:s,indexes:e,editable:o}))},rt=({indexesId:e,s:t})=>{const l=s.useIndexes(e),a=s.useIndexIds(l);return q(l)?null:F(Le,{uniqueId:pe("i",e),summary:"Indexes: "+(e??u),s:t},W(a)?"No indexes defined":Ie(a,(s=>F(nt,{indexes:l,indexesId:e,indexId:s,s:t,key:s}))))},it=({metrics:e,metricId:t})=>F("tr",null,F("th",null,t),F("td",null,e?.getTableId(t)),F("td",null,s.useMetric(t,e))),dt=({metricsId:e,s:t})=>{const l=s.useMetrics(e),a=s.useMetricIds(l);return q(l)?null:F(Le,{uniqueId:pe("m",e),summary:"Metrics: "+(e??u),s:t},W(a)?"No metrics defined":F("table",null,F("thead",null,F("th",null,"Metric Id"),F("th",null,"Table Id"),F("th",null,"Metric")),F("tbody",null,j(a,(e=>F(it,{metrics:l,metricId:e,key:e}))))))},ut=({queries:e,queriesId:t,queryId:l,s:a})=>{const n=pe("q",t,l),[o,r,i]=oe(s.useCell(ue,n,ce,a)??"[]"),d=s.useSetCellCallback(ue,n,ce,ne,[],a);return F(Le,{uniqueId:n,summary:"Query: "+l,s:a},F(tt,{queryId:l,queries:e,cellId:o,descending:r,offset:i,limit:10,paginator:!0,sortOnClick:!0,onChange:d}))},ct=({queriesId:e,s:t})=>{const l=s.useQueries(e),a=s.useQueryIds(l);return q(l)?null:F(Le,{uniqueId:pe("q",e),summary:"Queries: "+(e??u),s:t},W(a)?"No queries defined":Ie(a,(s=>F(ut,{queries:l,queriesId:e,queryId:s,s:t,key:s}))))},ht=({relationships:e,relationshipsId:t,relationshipId:s,s:l})=>{const a=pe("r",t,s),[n,o]=fe(a,l);return F(Le,{uniqueId:a,summary:"Relationship: "+s,editable:n,handleEditable:o,s:l},F(et,{relationshipId:s,relationships:e,editable:n}))},mt=({relationshipsId:e,s:t})=>{const l=s.useRelationships(e),a=s.useRelationshipIds(l);return q(l)?null:F(Le,{uniqueId:pe("r",e),summary:"Relationships: "+(e??u),s:t},W(a)?"No relationships defined":Ie(a,(s=>F(ht,{relationships:l,relationshipsId:e,relationshipId:s,s:t,key:s}))))},bt=({tableId:e,store:t,storeId:l,s:a})=>{const n=pe("t",l,e),[o,r,i]=oe(s.useCell(ue,n,ce,a)??"[]"),d=s.useSetCellCallback(ue,n,ce,ne,[],a),[u,c]=fe(n,a);return F(Le,{uniqueId:n,summary:h+": "+e,editable:u,handleEditable:c,s:a},F(Ye,{tableId:e,store:t,cellId:o,descending:r,offset:i,limit:10,paginator:!0,sortOnClick:!0,onChange:d,editable:u}))},gt=({store:e,storeId:t,s:l})=>{const a=pe("v",t),[n,o]=fe(a,l);return W(s.useValueIds(e))?null:F(Le,{uniqueId:a,summary:C,editable:n,handleEditable:o,s:l},F(Ze,{store:e,editable:n}))},pt=({storeId:e,s:t})=>{const l=s.useStore(e),a=s.useTableIds(l);return q(l)?null:F(Le,{uniqueId:pe("s",e),summary:"Store: "+(e??u),s:t},F(gt,{storeId:e,store:l,s:t}),Ie(a,(s=>F(bt,{store:l,storeId:e,tableId:s,s:t,key:s}))))},It=({s:e})=>{const t=B(null),l=B(0),[a,n]=H(!1),{scrollLeft:o,scrollTop:r}=s.useValues(e);P((()=>{const e=t.current;if(e&&!a){const t=new MutationObserver((()=>{e.scrollWidth>=x(o)+e.clientWidth&&e.scrollHeight>=x(r)+e.clientHeight&&e.scrollTo(o,r)}));return t.observe(e,{childList:!0,subtree:!0}),()=>t.disconnect()}}),[a,o,r]);const i=J((t=>{const{scrollLeft:s,scrollTop:a}=t[k];cancelIdleCallback(l.current),l.current=requestIdleCallback((()=>{n(!0),e.setPartialValues({scrollLeft:s,scrollTop:a})}))}),[e]),d=s.useStore(),u=s.useStoreIds(),c=s.useMetrics(),h=s.useMetricsIds(),m=s.useIndexes(),b=s.useIndexesIds(),g=s.useRelationships(),p=s.useRelationshipsIds(),I=s.useQueries(),f=s.useQueriesIds();return q(d)&&W(u)&&q(c)&&W(h)&&q(m)&&W(b)&&q(g)&&W(p)&&q(I)&&W(f)?F("span",{className:"warn"},"There are no Stores or other objects to inspect. Make sure you placed the StoreInspector inside a Provider component."):F("article",{ref:t,onScroll:i},F(pt,{s:e}),j(u,(t=>F(pt,{storeId:t,s:e,key:t}))),F(dt,{s:e}),j(h,(t=>F(dt,{metricsId:t,s:e,key:t}))),F(rt,{s:e}),j(b,(t=>F(rt,{indexesId:t,s:e,key:t}))),F(mt,{s:e}),j(p,(t=>F(mt,{relationshipsId:t,s:e,key:t}))),F(ct,{s:e}),j(f,(t=>F(ct,{queriesId:t,s:e,key:t}))))};class ft extends O{constructor(e){super(e),this.componentDidCatch=(e,t)=>console.error(e,t.componentStack),this.state={e:0}}static{this.getDerivedStateFromError=()=>({e:1})}render(){return this.state.e?F("span",{className:"warn"},"Inspector error: please see console for details."):this.props.children}}const wt=({s:e})=>{const t=s.useValue(me,e)??1,l=s.useSetValueCallback(be,(()=>!1),[],e),a=s.useSetValueCallback(me,(e=>Number(e[k].dataset.id)),[],e);return F("header",null,F("img",{title:ie}),F("span",null,ie),j(de,((e,s)=>s==t?null:F("img",{onClick:a,"data-id":s,title:"Dock to "+e,key:s}))),F("img",{onClick:l,title:"Close"}))},yt=({s:e})=>{const t=s.useValue(me,e)??1;return s.useValue(be,e)?F("main",{"data-position":t},F(wt,{s:e}),F(ft,null,F(It,{s:e}))):null},Ct=e=>t=>{return s=(t,s)=>t+e(s),Rt(t).reduce(s,0);var s},vt=e=>e?.size??0,kt=Ct(vt),Tt=Ct(kt),St=Ct(Tt),xt=(e,t)=>e?.has(t)??!1,Vt=e=>q(e)||0==vt(e),Rt=e=>[...e?.values()??[]],qt=e=>e.clear(),Nt=(e,t)=>e?.forEach(t),Lt=(e,t)=>e?.delete(t),Mt=e=>new Map(e),Et=e=>[...e?.keys()??[]],zt=(e,t)=>e?.get(t),$t=(e,t)=>Nt(e,((e,s)=>t(s,e))),Ot=(e,t,s)=>q(s)?(Lt(e,t),e):e?.set(t,s),At=(e,t,s)=>(xt(e,t)||Ot(e,t,s()),zt(e,t)),Ft=(e,t,s,l=Ot)=>(le(t,((t,l)=>s(e,l,t))),$t(e,(s=>te(t,s)?0:l(e,s))),e),Jt=(e,t,s)=>{const l={};return Nt(e,((e,a)=>{const n=t?t(e,a):e;!s?.(n,e)&&(l[a]=n)})),l},Pt=(e,t,s)=>Jt(e,(e=>Jt(e,t,s)),ae),Bt=(e,t,s)=>Jt(e,(e=>Pt(e,t,s)),ae),Ht=(e,t)=>{const s=Mt();return Nt(e,((e,l)=>s.set(l,t?.(e)??e))),s},Dt=e=>Ht(e,Ht),Qt=e=>Ht(e,Dt),jt=(e,t,s,l,a=0)=>N((s?At:zt)(e,t[a],a>$(t)-2?s:Mt),(n=>{if(a>$(t)-2)return l?.(n)&&Ot(e,t[a]),n;const o=jt(n,t,s,l,a+1);return Vt(n)&&Ot(e,t[a]),o})),Wt=Mt(),Ut=Mt(),Gt="storage",Kt=globalThis.window,Xt=e=>new Set(E(e)||q(e)?e:[e]),Yt=(e,t)=>e?.add(t),Zt=/^\d+$/,_t=()=>{const e=[];let t=0;return[s=>(s?G(e):null)??a+t++,t=>{Zt.test(t)&&$(e)<1e3&&U(e,t)}]},es=e=>[e,e],ts=(e,t=kt)=>t(e[0])+t(e[1]),ss=()=>[Mt(),Mt()],ls=e=>[...e],as=([e,t])=>e===t,ns=(e,t,s)=>q(e)||!_(e)||ae(e)||Y(e)?(s?.(),!1):(le(e,((s,l)=>{t(s,l)||se(e,l)})),!ae(e)),os=(e,t,s)=>Ot(e,t,zt(e,t)==-s?void 0:s),rs=()=>{let e,t,s=!1,l=!1,n=0;const o=Mt(),i=Mt(),c=Mt(),k=Mt(),T=Mt(),x=Mt(),V=Mt(),R=Mt(),E=Mt(),O=Mt(),A=Mt(),F=Mt(),J=Mt(),P=Mt(),B=Xt(),H=Mt(),D=Mt(),W=Mt(),G=Mt(),K=ss(),X=ss(),Y=ss(),_=ss(),ee=ss(),re=ss(),ie=ss(),de=ss(),ue=ss(),ce=ss(),he=ss(),me=ss(),be=ss(),ge=ss(),pe=ss(),Ie=Mt(),fe=ss(),[we,ye,Ce,ve]=(e=>{let t;const[s,l]=_t(),n=Mt();return[(e,l,o,r=[],i=(()=>[]))=>{t??=ws;const d=s(1);return Ot(n,d,[e,l,o,r,i]),Yt(jt(l,o??[a],Xt),d),d},(e,s,...l)=>Q(((e,t=[a])=>{const s=[],l=(e,a)=>a==$(t)?U(s,e):null===t[a]?Nt(e,(e=>l(e,a+1))):Q([t[a],null],(t=>l(zt(e,t),a+1)));return l(e,0),s})(e,s),(e=>Nt(e,(e=>zt(n,e)[0](t,...s??[],...l))))),e=>N(zt(n,e),(([,t,s])=>(jt(t,s??[a],void 0,(t=>(Lt(t,e),Vt(t)?1:0))),Ot(n,e),l(e),s))),e=>N(zt(n,e),(([e,,s=[],l,a])=>{const n=(...o)=>{const r=$(o);r==$(s)?e(t,...o,...a(o)):q(s[r])?Q(l[r]?.(...o)??[],(e=>n(...o,e))):n(...o,s[r])};n()}))]})(),ke=e=>{if(!ns(e,((e,t)=>[d,u].includes(t))))return!1;const t=e[d];return!(!L(t)&&t!=r||(Me(e[u])!=t&&se(e,u),0))},Te=(t,s)=>(!e||xt(A,s)||lt(s))&&ns(t,((e,t)=>Se(s,t,e)),(()=>lt(s))),Se=(e,t,s,l)=>ns(l?s:qe(s,e,t),((l,a)=>N(xe(e,t,a,l),(e=>(s[a]=e,!0)),(()=>!1))),(()=>lt(e,t))),xe=(t,s,l,a)=>e?N(zt(zt(A,t),l),(e=>Me(a)!=e[d]?lt(t,s,l,a,e[u]):a),(()=>lt(t,s,l,a))):q(Me(a))?lt(t,s,l,a):a,Ve=(e,t)=>ns(t?e:Ne(e),((t,s)=>N(Re(s,t),(t=>(e[s]=t,!0)),(()=>!1))),(()=>at())),Re=(e,s)=>t?N(zt(J,e),(t=>Me(s)!=t[d]?at(e,s,t[u]):s),(()=>at(e,s))):q(Me(s))?at(e,s):s,qe=(e,t,s)=>(N(zt(F,t),(([l,a])=>{Nt(l,((t,s)=>{te(e,s)||(e[s]=t)})),Nt(a,(l=>{te(e,l)||lt(t,s,l)}))})),e),Ne=e=>(t&&(Nt(P,((t,s)=>{te(e,s)||(e[s]=t)})),Nt(B,(t=>{te(e,t)||at(t)}))),e),Le=e=>Ft(A,e,((e,t,s)=>{const l=Mt(),a=Xt();Ft(At(A,t,Mt),s,((e,t,s)=>{Ot(e,t,s),N(s[u],(e=>Ot(l,t,e)),(()=>Yt(a,t)))})),Ot(F,t,[l,a])}),((e,t)=>{Ot(A,t),Ot(F,t)})),$e=e=>Ft(J,e,((e,t,s)=>{Ot(J,t,s),N(s[u],(e=>Ot(P,t,e)),(()=>Yt(B,t)))}),((e,t)=>{Ot(J,t),Ot(P,t),Lt(B,t)})),Oe=e=>ae(e)?us():Gt(e),Ae=e=>Ft(W,e,((e,t,s)=>Fe(t,s)),((e,t)=>Ue(t))),Fe=(e,t)=>Ft(At(W,e,(()=>(Ye(e,1),Ot(H,e,_t()),Ot(D,e,Mt()),Mt()))),t,((t,s,l)=>Je(e,t,s,l)),((t,s)=>Ge(e,t,s))),Je=(e,t,s,l,a)=>Ft(At(t,s,(()=>(Ze(e,s,1),Mt()))),l,((t,l,a)=>Pe(e,s,t,l,a)),((l,n)=>Ke(e,t,s,l,n,a))),Pe=(e,t,s,l,a)=>{xt(s,l)||_e(e,t,l,1);const n=zt(s,l);a!==n&&(et(e,t,l,n,a),Ot(s,l,a))},Be=(e,t,s,l,a)=>N(zt(t,s),(t=>Pe(e,s,t,l,a)),(()=>Je(e,t,s,qe({[l]:a},e,s)))),He=e=>ae(e)?ms():Kt(e),De=e=>Ft(G,e,((e,t,s)=>Qe(t,s)),((e,t)=>Xe(t))),Qe=(e,t)=>{xt(G,e)||tt(e,1);const s=zt(G,e);t!==s&&(st(e,s,t),Ot(G,e,t))},je=(e,t)=>{const[s]=zt(H,e),l=s(t);return xt(zt(W,e),l)?je(e,t):l},We=e=>zt(W,e)??Fe(e,{}),Ue=e=>Fe(e,{}),Ge=(e,t,s)=>{const[,l]=zt(H,e);l(s),Je(e,t,s,{},!0)},Ke=(e,t,s,l,a,n)=>{const o=zt(zt(F,e)?.[0],a);if(!q(o)&&!n)return Pe(e,s,l,a,o);const r=t=>{et(e,s,t,zt(l,t)),_e(e,s,t,-1),Ot(l,t)};q(o)?r(a):$t(l,r),Vt(l)&&(Ze(e,s,-1),Vt(Ot(t,s))&&(Ye(e,-1),Ot(W,e),Ot(H,e),Ot(D,e)))},Xe=e=>{const t=zt(P,e);if(!q(t))return Qe(e,t);st(e,zt(G,e)),tt(e,-1),Ot(G,e)},Ye=(e,t)=>os(o,e,t),Ze=(e,t,s)=>os(At(k,e,Mt),t,s)&&Ot(c,e,At(c,e,(()=>0))+s),_e=(e,t,s,l)=>{const a=zt(D,e),n=zt(a,s)??0;(0==n&&1==l||1==n&&-1==l)&&os(At(i,e,Mt),s,l),Ot(a,s,n!=-l?n+l:null),os(At(At(T,e,Mt),t,Mt),s,l)},et=(e,t,s,l,a)=>At(At(At(x,e,Mt),t,Mt),s,(()=>[l,0]))[1]=a,tt=(e,t)=>os(V,e,t),st=(e,t,s)=>At(R,e,(()=>[t,0]))[1]=s,lt=(e,t,s,l,a)=>(U(At(At(At(E,e,Mt),t,Mt),s,(()=>[])),l),a),at=(e,t,s)=>(U(At(O,e,(()=>[])),t),s),nt=(e,t,s)=>N(zt(zt(zt(x,e),t),s),(([e,t])=>[!0,e,t]),(()=>[!1,...es(Ct(e,t,s))])),ot=e=>N(zt(R,e),(([e,t])=>[!0,e,t]),(()=>[!1,...es(Ut(e))])),rt=e=>Vt(E)||Vt(he[e])?0:Nt(e?Qt(E):E,((t,s)=>Nt(t,((t,l)=>Nt(t,((t,a)=>ye(he[e],[s,l,a],t))))))),it=e=>Vt(O)||Vt(me[e])?0:Nt(e?Ht(O):O,((t,s)=>ye(me[e],[s],t))),dt=(e,t,s)=>{if(!Vt(t))return ye(e,s,(()=>Jt(t))),1},ut=e=>{const t=Vt(ie[e]),s=Vt(ue[e])&&Vt(_[e])&&Vt(ee[e])&&Vt(re[e])&&t&&Vt(X[e]),l=Vt(ce[e])&&Vt(de[e])&&Vt(Y[e])&&Vt(K[e]);if(!s||!l){const a=e?[Ht(o),Dt(i),Ht(c),Dt(k),Qt(T),Qt(x)]:[o,i,c,k,T,x];if(!s){dt(X[e],a[0]),Nt(a[1],((t,s)=>dt(_[e],t,[s]))),Nt(a[2],((t,s)=>{0!=t&&ye(ee[e],[s],It(s))}));const s=Xt();Nt(a[3],((l,a)=>{dt(re[e],l,[a])&&!t&&(ye(ie[e],[a,null]),Yt(s,a))})),t||Nt(a[5],((t,l)=>{if(!xt(s,l)){const s=Xt();Nt(t,(e=>Nt(e,(([t,l],a)=>l!==t?Yt(s,a):Lt(e,a))))),Nt(s,(t=>ye(ie[e],[l,t])))}})),Nt(a[4],((t,s)=>Nt(t,((t,l)=>dt(ue[e],t,[s,l])))))}if(!l){let t;Nt(a[5],((s,l)=>{let a;Nt(s,((s,n)=>{let o;Nt(s,(([s,r],i)=>{r!==s&&(ye(ce[e],[l,n,i],r,s,nt),t=a=o=1)})),o&&ye(de[e],[l,n],nt)})),a&&ye(Y[e],[l],nt)})),t&&ye(K[e],void 0,nt)}}},ct=e=>{const t=Vt(ge[e]),s=Vt(pe[e])&&Vt(be[e]);if(!t||!s){const l=e?[Ht(V),Ht(R)]:[V,R];if(t||dt(ge[e],l[0]),!s){let t;Nt(l[1],(([s,l],a)=>{l!==s&&(ye(pe[e],[a],l,s,ot),t=1)})),t&&ye(be[e],void 0,ot)}}},ht=(e,...t)=>(ps((()=>e(...j(t,S)))),ws),mt=()=>[Jt(x,((e,t)=>-1===zt(o,t)?null:Jt(e,((e,s)=>-1===zt(zt(k,t),s)?null:Jt(e,(([,e])=>e??null),((e,t)=>as(t)))),ae)),ae),Jt(R,(([,e])=>e??null),((e,t)=>as(t)))],bt=()=>({cellsTouched:s,valuesTouched:l,changedCells:Bt(x,ls,as),invalidCells:Bt(E),changedValues:Jt(R,ls,as),invalidValues:Jt(O),changedTableIds:Jt(o),changedRowIds:Pt(k),changedCellIds:Bt(T),changedValueIds:Jt(V)}),gt=()=>Bt(W),pt=()=>Et(W),It=e=>vt(zt(W,S(e))),ft=e=>Et(zt(W,S(e))),wt=(e,t,s,l=0,a)=>{return j(z((o=zt(W,S(e)),r=(e,s)=>[q(t)?s:zt(e,S(t)),s],n=([e],[t])=>((e??0)<(t??0)?-1:1)*(s?-1:1),j([...o?.entries()??[]],(([e,t])=>r(t,e))).sort(n)),l,q(a)?a:l+a),(([,e])=>e));var n,o,r},yt=(e,t)=>Et(zt(zt(W,S(e)),S(t))),Ct=(e,t,s)=>zt(zt(zt(W,S(e)),S(t)),S(s)),Rt=()=>Jt(G),Wt=()=>Et(G),Ut=e=>zt(G,S(e)),Gt=e=>ht((()=>(e=>ns(e,Te,lt))(e)?Ae(e):0)),Kt=e=>ht((()=>Ve(e)?De(e):0)),Zt=e=>{try{Oe(oe(e))}catch{}return ws},is=t=>ht((()=>{if((e=ns(t,(e=>ns(e,ke))))&&(Le(t),!Vt(W))){const e=gt();us(),Gt(e)}})),ds=e=>ht((()=>{if(t=(e=>ns(e,ke))(e)){const s=Rt();gs(),ms(),t=!0,$e(e),Kt(s)}})),us=()=>ht((()=>Ae({}))),cs=e=>ht((e=>xt(W,e)?Ue(e):0),e),hs=(e,t)=>ht(((e,t)=>N(zt(W,e),(s=>xt(s,t)?Ge(e,s,t):0))),e,t),ms=()=>ht((()=>De({}))),bs=()=>ht((()=>{Le({}),e=!1})),gs=()=>ht((()=>{$e({}),t=!1})),ps=(e,t)=>{if(-1!=n){Is();const s=e();return fs(t),s}},Is=()=>(-1!=n&&n++,1==n&&ye(Ie,void 0,mt,bt),ws),fs=e=>(n>0&&(n--,0==n&&(s=!Vt(x),l=!Vt(R),n=1,rt(1),s&&ut(1),it(1),l&&ct(1),e?.(mt,bt)&&(Nt(x,((e,t)=>Nt(e,((e,s)=>Nt(e,(([e],l)=>Ee(ws,t,s,l,e))))))),Nt(R,(([e],t)=>ze(ws,t,e))),s=l=!1),ye(fe[0],void 0,mt,bt),n=-1,rt(0),s&&ut(0),it(0),l&&ct(0),ye(fe[1],void 0,mt,bt),n=0,s=l=!1,Q([o,i,c,k,T,x,E,V,R,O],qt))),ws),ws={getContent:()=>[gt(),Rt()],getTables:gt,getTableIds:pt,getTable:e=>Pt(zt(W,S(e))),getTableCellIds:e=>Et(zt(D,S(e))),getRowCount:It,getRowIds:ft,getSortedRowIds:wt,getRow:(e,t)=>Jt(zt(zt(W,S(e)),S(t))),getCellIds:yt,getCell:Ct,getValues:Rt,getValueIds:Wt,getValue:Ut,hasTables:()=>!Vt(W),hasTable:e=>xt(W,S(e)),hasTableCell:(e,t)=>xt(zt(D,S(e)),S(t)),hasRow:(e,t)=>xt(zt(W,S(e)),S(t)),hasCell:(e,t,s)=>xt(zt(zt(W,S(e)),S(t)),S(s)),hasValues:()=>!Vt(G),hasValue:e=>xt(G,S(e)),getTablesJson:()=>ne(W),getValuesJson:()=>ne(G),getJson:()=>ne([W,G]),getTablesSchemaJson:()=>ne(A),getValuesSchemaJson:()=>ne(J),getSchemaJson:()=>ne([A,J]),hasTablesSchema:()=>e,hasValuesSchema:()=>t,setContent:([e,t])=>ht((()=>{(ae(e)?us:Gt)(e),(ae(t)?ms:Kt)(t)})),setTables:Gt,setTable:(e,t)=>ht((e=>Te(t,e)?Fe(e,t):0),e),setRow:(e,t,s)=>ht(((e,t)=>Se(e,t,s)?Je(e,We(e),t,s):0),e,t),addRow:(e,t,s=!0)=>ps((()=>{let l;return Se(e,l,t)&&(e=S(e),Je(e,We(e),l=je(e,s?1:0),t)),l})),setPartialRow:(e,t,s)=>ht(((e,t)=>{if(Se(e,t,s,1)){const l=We(e);le(s,((s,a)=>Be(e,l,t,a,s)))}}),e,t),setCell:(e,t,s,l)=>ht(((e,t,s)=>N(xe(e,t,s,M(l)?l(Ct(e,t,s)):l),(l=>Be(e,We(e),t,s,l)))),e,t,s),setValues:Kt,setPartialValues:e=>ht((()=>Ve(e,1)?le(e,((e,t)=>Qe(t,e))):0)),setValue:(e,t)=>ht((e=>N(Re(e,M(t)?t(Ut(e)):t),(t=>Qe(e,t)))),e),setTransactionChanges:e=>ht((()=>{le(e[0],((e,t)=>q(e)?cs(t):le(e,((e,s)=>q(e)?hs(t,s):le(e,((e,l)=>Ee(ws,t,s,l,e))))))),le(e[1],((e,t)=>ze(ws,t,e)))})),setTablesJson:Zt,setValuesJson:e=>{try{He(oe(e))}catch{}return ws},setJson:e=>ht((()=>{try{const[t,s]=oe(e);Oe(t),He(s)}catch{Zt(e)}})),setTablesSchema:is,setValuesSchema:ds,setSchema:(e,t)=>ht((()=>{is(e),ds(t)})),delTables:us,delTable:cs,delRow:hs,delCell:(e,t,s,l)=>ht(((e,t,s)=>N(zt(W,e),(a=>N(zt(a,t),(n=>xt(n,s)?Ke(e,a,t,n,s,l):0))))),e,t,s),delValues:ms,delValue:e=>ht((e=>xt(G,e)?Xe(e):0),e),delTablesSchema:bs,delValuesSchema:gs,delSchema:()=>ht((()=>{bs(),gs()})),transaction:ps,startTransaction:Is,finishTransaction:fs,forEachTable:e=>Nt(W,((t,s)=>e(s,(e=>Nt(t,((t,s)=>e(s,(e=>$t(t,e))))))))),forEachTableCell:(e,t)=>$t(zt(D,S(e)),t),forEachRow:(e,t)=>Nt(zt(W,S(e)),((e,s)=>t(s,(t=>$t(e,t))))),forEachCell:(e,t,s)=>$t(zt(zt(W,S(e)),S(t)),s),forEachValue:e=>$t(G,e),addSortedRowIdsListener:(e,t,s,l,a,n,o)=>{let r=wt(e,t,s,l,a);return we((()=>{const o=wt(e,t,s,l,a);var i,d,u;d=r,$(i=o)===$(d)&&(u=(e,t)=>d[t]===e,i.every(u))||(r=o,n(ws,e,t,s,l,a,r))}),ie[o?1:0],[e,t],[pt])},addStartTransactionListener:e=>we(e,Ie),addWillFinishTransactionListener:e=>we(e,fe[0]),addDidFinishTransactionListener:e=>we(e,fe[1]),callListener:e=>(ve(e),ws),delListener:e=>(Ce(e),ws),getListenerStats:()=>({tables:ts(K),tableIds:ts(X),tableCellIds:ts(_),table:ts(Y),rowCount:ts(ee),rowIds:ts(re),sortedRowIds:ts(ie),row:ts(de,Tt),cellIds:ts(ue,Tt),cell:ts(ce,St),invalidCell:ts(he,St),values:ts(be),valueIds:ts(ge),value:ts(pe),invalidValue:ts(me),transaction:kt(Ie)+ts(fe)}),createStore:rs,addListener:we,callListeners:ye};return le({[m]:[0,K],[b]:[0,X],[h]:[1,Y,[pt]],[h+w]:[1,_,[pt]],[p]:[1,ee,[pt]],[I]:[1,re,[pt]],[g]:[2,de,[pt,ft]],[w]:[2,ue,[pt,ft]],[f]:[3,ce,[pt,ft,yt],e=>es(Ct(...e))],InvalidCell:[3,he],[C]:[0,be],[v]:[0,ge],[y]:[1,pe,[Wt],e=>es(Ut(e[0]))],InvalidValue:[1,me]},(([e,t,s,l],a)=>{ws["add"+a+"Listener"]=(...a)=>we(a[e],t[a[e+1]?1:0],e>0?z(a,0,e):void 0,s,l)})),Z(ws)},is=({position:e="right",open:t=!1})=>{const l=s.useCreateStore(rs),a=de.indexOf(e);return s.useCreatePersister(l,(e=>{return((e,t,s,l)=>((e,t,s,l,a,n,o=[])=>{let r,i,d,u=0,c=0,h=0,m=0;At(Wt,o,(()=>0)),At(Ut,o,(()=>[]));const b=async e=>(2!=u&&(u=1,c++,await g.schedule((async()=>{await e(),u=0}))),g),g={load:async(s,l)=>await b((async()=>{try{e.setContent(await t())}catch{e.setContent([s,l])}})),startAutoLoad:async(s={},a={})=>(g.stopAutoLoad(),await g.load(s,a),m=1,d=l((async(s,l)=>{if(l){const t=l();await b((async()=>e.setTransactionChanges(t)))}else await b((async()=>{try{e.setContent(s?.()??await t())}catch(e){n?.(e)}}))})),g),stopAutoLoad:()=>(m&&(a(d),d=void 0,m=0),g),save:async t=>(1!=u&&(u=2,h++,await g.schedule((async()=>{try{await s(e.getContent,t)}catch(e){n?.(e)}u=0}))),g),startAutoSave:async()=>(await g.stopAutoSave().save(),r=e.addDidFinishTransactionListener(((e,t)=>{const[s,l]=t();ae(s)&&ae(l)||g.save((()=>[s,l]))})),g),stopAutoSave:()=>(N(r,e.delListener),g),schedule:async(...e)=>(U(zt(Ut,o),...e),await(async()=>{if(!zt(Wt,o)){for(Ot(Wt,o,1);!q(i=G(zt(Ut,o)));)try{await i()}catch(e){n?.(e)}Ot(Wt,o,0)}})(),g),getStore:()=>e,destroy:()=>g.stopAutoLoad().stopAutoSave(),getStats:()=>({loads:c,saves:h})};return Z(g)})(e,(async()=>oe(s.getItem(t))),(async e=>s.setItem(t,ne(e()))),(e=>{const l=l=>{l.storageArea===s&&l.key===t&&e((()=>oe(l.newValue)))};return Kt.addEventListener(Gt,l),l}),(e=>Kt.removeEventListener(Gt,e)),l))(e,re,sessionStorage,t);var t}),void 0,(async e=>{await e.load(void 0,{position:-1==a?1:a,open:!!t}),await e.startAutoSave()})),F(A,null,F("aside",{id:re},F(Ne,{s:l}),F(yt,{s:l})),F("style",null,qe))};e.EditableCellView=st,e.EditableValueView=lt,e.RelationshipInHtmlTable=et,e.ResultSortedTableInHtmlTable=tt,e.ResultTableInHtmlTable=({queryId:e,queries:t,customCells:l,...a})=>F(Ue,{...a,params:He(We(s.useResultTableCellIds(e,t),l,s.ResultCellView),Qe(t,e),s.useResultRowIds(e,t))}),e.SliceInHtmlTable=_e,e.SortedTableInHtmlTable=Ye,e.SortedTablePaginator=at,e.StoreInspector=e=>F(is,{...e}),e.TableInHtmlTable=({tableId:e,store:t,editable:l,customCells:a,...n})=>F(Ue,{...n,params:He(We(s.useTableCellIds(e,t),a,l?st:s.CellView),De(t,e),s.useRowIds(e,t))}),e.ValuesInHtmlTable=Ze},"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react"),require("./ui-react")):"function"==typeof define&&define.amd?define(["exports","react","./ui-react"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).TinyBaseUiReactDomDebug={},e.React,e.TinyBaseUiReact);

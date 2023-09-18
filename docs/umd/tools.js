var e,t;e=this,t=function(e){"use strict";const t=e=>typeof e,l="tinybase",a="",n=",",o=t(a),d=t(!0),s=t(0),r="type",I="default",c="Listener",$="get",i="add",u="Ids",p="Table",b=p+"s",C=p+u,h="Row",m=h+u,g="Sorted"+h+u,f="Cell",w=f+u,y="Value",T=y+"s",v=y+u,V=Promise,x=isFinite,R=(e,t)=>e instanceof t,k=e=>null==e,S=e=>e==o||e==d,P=e=>t(e)==o,A=e=>Array.isArray(e),E=(e,t,l)=>e.slice(t,l),D=async e=>V.all(e),O=e=>{const l=t(e);return S(l)||l==s&&x(e)?l:void 0},N=(e,t)=>e.every(t),G=(e,t)=>e.sort(t),L=(e,t)=>e.forEach(t),j=(e,t=a)=>e.join(t),M=(e,t)=>e.map(t),J=e=>e.length,z=(e,t)=>e.filter(t),W=(e,...t)=>e.push(...t),B=e=>e.pop(),F=(e,...t)=>e.unshift(...t),U=e=>e.shift(),_=Object,Z=_.keys,H=_.freeze,Q=e=>R(e,_)&&e.constructor==_,q=(e,t)=>M(_.entries(e),(([e,l])=>t(l,e))),K=e=>J(Z(e)),X=e=>Q(e)&&0==K(e),Y=(e,t)=>e?.has(t)??!1,ee=e=>[...e?.values()??[]],te=(e,t)=>e?.forEach(t),le=(e,t)=>e?.delete(t),ae=e=>new Map(e),ne=(e,t)=>e?.get(t),oe=(e,t)=>te(e,((e,l)=>t(l,e))),de=(e,t)=>M([...e?.entries()??[]],(([e,l])=>t(l,e))),se=(e,t,l)=>k(l)?(le(e,t),e):e?.set(t,l),re=(e,t,l)=>(Y(e,t)||se(e,t,l()),ne(e,t)),Ie=e=>e.toUpperCase(),ce=e=>e.toLowerCase(),$e="a ",ie="A function for",ue=", and registers a listener so that any changes to that result will cause a re-render",pe="Callback",be="Del",Ce="Deps",he=Ce+"?: React.DependencyList",me="doRollback?: DoRollback",ge="actions: () => Return, "+me,fe="export",we="Id",ye="Invalid",Te="Json",ve=ce(c),Ve="?: ",xe=" | undefined",Re="NonNullable",ke="Partial",Se="Props",Pe="Provider",Ae=`Registers a ${ve} that will be called`,Ee="Represents",De="rowId: "+we,Oe="Schema",Ne="Set",Ge=", descending?: boolean, offset?: number, limit?: number",Le="[]",je="the Store",Me="Transaction",Je=Me+"Changes",ze=ce(Me),We="Execute a "+ze+" to make multiple mutations",Be="Explicitly starts a "+ze,Fe="Explicitly finishes a "+ze,Ue="the end of the "+ze,_e="void",Ze=" => "+_e,He="WhenSet",Qe=" when setting it",qe=$e+"string serialization of",Ke=" ",Xe="Gets a callback that can ",Ye="the ",et=" the schema for",tt=(e=0,t=0)=>`the ${gt[e]}content of`+(t?Ke+je:a),lt=(e=0,t,l=0)=>Ct[t]+Ke+tt(e,1)+(l?" when setting it":a),at=(e,t=0)=>Ee+` a Row when ${t?"s":"g"}etting ${tt()} the '${e}' `+p,nt=(e,t,l=0)=>`Gets ${l?"sorted, paginated":"the"} Ids of the ${e}s in `+t,ot=(e,t)=>`Calls a function for each ${e} in `+t,dt=e=>"The props passed to a component that renders "+e,st=e=>"A function that takes "+e,rt=(e,t=0)=>ie+" listening to changes to "+mt[e]+" in "+mt[t],It=(e,t,l=0)=>Ae+" whenever "+mt[e]+" in "+mt[t]+" change"+(l?a:"s"),ct=e=>`the '${e}' `+p,$t=e=>"the specified Row in "+ct(e),it=(e,t=0)=>Ct[t]+` ${tt()} `+ct(e),ut=(e,t=0)=>Ct[t]+` ${tt()} `+$t(e),pt=(e,t,l=0)=>Ct[l]+` the '${t}' Cell for `+$t(e),bt=(e,t=0)=>Ct[t]+` the '${e}' Value`,Ct=["Gets","Checks existence of","Sets","Deletes","Sets part of",Ee,"Gets "+qe,"Sets "+qe,Ae+" whenever",Xe+"set",Xe+"add",Xe+"set part of",Xe+"delete","Renders","Gets "+qe+et,"Sets"+et,"Deletes"+et],ht=[$,"has","set","del","set","forEach",i,a],mt=[je,b,Ye+p+Ke+u,$e+p,Ye+h+Ke+u,$e+h,Ye+f+Ke+u,$e+f,"invalid Cell changes",T,Ye+y+Ke+u,$e+y,"invalid Value changes",Ye+"sorted "+h+Ke+u,Ye+f+Ke+u+" anywhere",Ye+"number of Rows"],gt=[a,"tabular ","keyed value "],ft=e=>new Set(A(e)||k(e)?e:[e]),wt=(e,t)=>e?.add(t),yt=/[^A-Za-z]+/,Tt=/[^A-Za-z0-9]+/,vt=/^( *)\/\*\* *(.*?) *\*\/$/gm,Vt=e=>e.includes(n),xt=(e,t,l,a=1)=>{const n=`${t}${1==a?"":a}`;return Y(e,n)?xt(e,t,l,a+1):(se(e,n,l),n)},Rt=e=>e.replace(vt,((e,t,l)=>{const a=77-kt(t);return`${t}/**\n${l.replace(RegExp(`([^\\n]{1,${a}})(\\s|$)`,"g"),t+" * $1\n")}${t} */`})),kt=e=>e.length,St=e=>e.flat(1e3),Pt=(e,t=0)=>j(M(e.split(Tt),((e,l)=>(l>0||t?Ie:ce)(E(e,0,1))+E(e,1)))),At=e=>Ie(j((e&&!yt.test(e[0])?e:" "+e).split(Tt),"_")),Et=e=>`/** ${e}. */`,Dt=(...e)=>j(z(e,(e=>e)),", "),Ot=(...e)=>"{"+j(e,"; ")+"}",Nt=(...e)=>Ot(...M(e,(e=>"readonly "+e))),Gt=()=>{const e=[ae(),ae(),ae(),ae()],t=ae(),l=ae(),n=e=>{const t=e.indexOf(" as ");return-1!=t?E(e,t+4):e};return[(...e)=>j(St(e),"\n"),(t,l,...a)=>L(a,(a=>L([0,1],(n=>(t??n)==n?wt(re(e[n],l,ft),a):0)))),(e,l,n,o=a,d=1)=>xt(t,e,[l,n,o,d]),(e,t,a)=>xt(l,e,A(a)?[`(${t}) => {`,a,"}"]:[`(${t}) => ${a}`]),(e,t)=>ne(l,e)===t?e:xt(l,e,t),(t=0)=>M([...G(de(e[t],((e,t)=>`import {${j(G(ee(e),((e,t)=>n(e)>n(t)?1:-1)),", ")}} from '${t}';`)),((e,t)=>Vt(e)!=Vt(t)?Vt(e)?-1:1:e>t?1:-1)),a],(e=>e.replace("{React}","React"))),()=>de(t,(([e,t,l,n],o)=>[Et(t),`${n?fe+" ":a}type ${o}${l} = ${e};`,a])),()=>de(l,((e,t)=>(e=A(e)?e:[e],W(e,B(e)+";"),[`const ${t} = ${U(e)}`,e,a])))]},Lt=e=>{const t=new WeakMap;return l=>(t.has(l)||t.set(l,e(l)),t.get(l))},jt=(e,t,l)=>[t=>q(e,((e,a)=>t(a,Pt(a,1),l(At(a),`'${a}'`)))),(t,a)=>q(e[t],((e,t)=>a(t,e[r],e[I],l(At(t),`'${t}'`),Pt(t,1)))),e=>q(t,((t,a)=>e(a,t[r],t[I],l(At(a),`'${a}'`),Pt(a,1))))],Mt=(e,t,l,n)=>[(n,o)=>{const d=n+": "+o,s=e(b,Ot(...t((e=>`'${e}'?: {[rowId: Id]: `+Ot(...l(e,((e,t,l)=>`'${e}'${k(l)?"?":a}: ${t}`)))+"}"))),lt(1,5)),r=e(b+He,Ot(...t((e=>`'${e}'?: {[rowId: Id]: `+Ot(...l(e,((e,t)=>`'${e}'?: ${t}`)))+"}"))),lt(1,5,1)),I=e(p+we,"keyof "+s,"A "+p+" Id in "+je),$=`<TId extends ${I}>`,i=e(p,Re+`<${s}[TId]>`,"A "+p+" in "+je,$),u=e(p+He,Re+`<${r}[TId]>`,"A "+p+" in "+je+Qe,$),y=e(h,i+"<TId>[Id]","A "+h+" in a "+p,$),T=e(h+He,u+"<TId>[Id]","A "+h+" in a "+p+Qe,$),v=e(f+we,`Extract<keyof ${y}<TId>, Id>`,"A "+f+" Id in a "+h,$),V=e(f,Re+`<${s}[TId]>[Id][CId]`,"A "+f+" in a "+h,`<TId extends ${I}, CId extends ${v}<TId>>`),x=e("CellIdCellArray",`CId extends ${v}<TId> ? [cellId: CId, cell: ${V}<TId, CId>] : never`,f+" Ids and types in a "+h,`<TId extends ${I}, CId = ${v}<TId>>`,0),R=e(f+pe,`(...[cellId, cell]: ${x}<TId>)`+Ze,st($e+f+" Id, and "+f),$),S=e(h+pe,"(rowId: Id, forEachCell: (cellCallback: CellCallback<TId>) "+Ze+") "+Ze,st($e+h+" Id, and a "+f+" iterator"),$),P=e(p+f+pe,`(cellId: ${v}<TId>, count: number) `+Ze,st($e+f+" Id, and count of how many times it appears"),$),A=e("TableIdForEachRowArray",`TId extends ${I} ? [tableId: TId, forEachRow: (rowCallback: ${S}<TId>)${Ze}] : never`,p+" Ids and callback types",`<TId = ${I}>`,0),E=e(p+pe,`(...[tableId, forEachRow]: ${A})`+Ze,st($e+p+" Id, and a "+h+" iterator"),a),D=e("TableIdRowIdCellIdArray",`TId extends ${I} ? [tableId: TId, rowId: Id, cellId: ${v}<TId>] : never`,"Ids for GetCellChange",`<TId = ${I}>`,0),O=e("GetCellChange",`(...[tableId, rowId, cellId]: ${D}) => CellChange`,ie+" returning information about any Cell's changes during a "+ze),N=e(b+c,`(${d}, getCellChange: ${O}${xe})`+Ze,rt(1)),G=e(C+c,`(${d})`+Ze,rt(2)),L=e(p+c,`(${d}, tableId: ${I}, getCellChange: ${O}${xe})`+Ze,rt(3)),j=e(p+w+c,`(${d}, tableId: ${I})`+Ze,rt(14,3)),M=e(h+"Count"+c,`(${d}, tableId: ${I})`+Ze,rt(15,3)),J=e(m+c,`(${d}, tableId: ${I})`+Ze,rt(4,3)),z=e(g+c,"("+Dt(d,"tableId: "+I,"cellId: Id"+xe,"descending: boolean","offset: number","limit: number"+xe,"sortedRowIds: Ids")+")"+Ze,rt(13,3)),W=e(h+c,"("+Dt(""+d,"tableId: "+I,De,`getCellChange: ${O}${xe}`)+")"+Ze,rt(5,3)),B=e(w+c,"("+Dt(""+d,"tableId: "+I,De)+")"+Ze,rt(6,5)),F=e("CellListenerArgsArrayInner",`CId extends ${v}<TId> ? [${d}, tableId: TId, ${De}, cellId: CId, newCell: ${V}<TId, CId> ${xe}, oldCell: ${V}<TId, CId> ${xe}, getCellChange: ${O} ${xe}] : never`,"Cell args for CellListener",`<TId extends ${I}, CId = ${v}<TId>>`,0),U=e("CellListenerArgsArrayOuter",`TId extends ${I} ? `+F+"<TId> : never","Table args for CellListener",`<TId = ${I}>`,0);return[s,r,I,i,u,y,T,v,V,R,S,P,E,N,G,L,j,M,J,z,W,B,e(f+c,`(...[${n}, tableId, rowId, cellId, newCell, oldCell, getCellChange]: ${U})`+Ze,rt(7,5)),e(ye+f+c,`(${d}, tableId: Id, ${De}, cellId: Id, invalidCells: any[])`+Ze,rt(8))]},(t,l)=>{const o=t+": "+l,d=e(T,Ot(...n(((e,t,l)=>`'${e}'${k(l)?"?":a}: ${t}`))),lt(2,5)),s=e(T+He,Ot(...n(((e,t)=>`'${e}'?: ${t}`))),lt(2,5,1)),r=e(y+we,"keyof "+d,"A "+y+" Id in "+je),I=e(y,Re+`<${d}[VId]>`,"A "+y+" Id in "+je,`<VId extends ${r}>`),$=e("ValueIdValueArray",`VId extends ${r} ? [valueId: VId, value: ${I}<VId>] : never`,y+" Ids and types in "+je,`<VId = ${r}>`,0),i=e(y+pe,`(...[valueId, value]: ${$})`+Ze,st($e+y+" Id, and "+y)),u=e("GetValueChange",`(valueId: ${r}) => ValueChange`,ie+" returning information about any Value's changes during a "+ze),p=e(T+c,`(${o}, getValueChange: ${u}${xe})`+Ze,rt(9)),b=e(v+c,`(${o})`+Ze,rt(10)),C=e("ValueListenerArgsArray",`VId extends ${r} ? [${o}, valueId: VId, newValue: ${I}<VId> ${xe}, oldValue: ${I}<VId> ${xe}, getValueChange: ${u} ${xe}] : never`,"Value args for ValueListener",`<VId = ${r}>`,0);return[d,s,r,I,i,p,b,e(y+c,`(...[${t}, valueId, newValue, oldValue, getValueChange]: `+C+")"+Ze,rt(11)),e(ye+y+c,`(${o}, valueId: Id, invalidValues: any[])`+Ze,rt(12))]},(t,l)=>e(Me+c,`(${t}: ${l}, getTransactionChanges: GetTransactionChanges, getTransactionLog: GetTransactionLog)`+Ze,ie+" listening to the completion of a "+ze)],Jt=(e,t=a,l=a)=>`store.${e}(${t})`+(l?" as "+l:a),zt=(e,t=a)=>`fluent(() => ${Jt(e,t)})`,Wt=(e,t=a,l=a)=>`store.${e}(${t?t+", ":a}proxy(listener)${l?", "+l:a})`,Bt=(e,t,n)=>{const[o,s,$,V,x,R,S,A]=Gt(),[E,D,O]=jt(e,t,x),[N,G,M]=Mt($,E,D,O),J=ae(),z=(e=0)=>de(J,(([t,l,n,o,d],s)=>{const r=e?[s+`: ${d}(${t}): ${l} => ${n},`]:[s+d+`(${t}): ${l};`];return e||F(r,Et(o)),W(r,a),r})),B=(e,t,l,n,o,d=a)=>xt(J,e,[t,l,n,o,d]),U=(e,t,l,n,o,d=a,s=a,r=a)=>B(ht[e]+t+(4==e?ke:a)+l,d,n,(n==H?zt:Jt)(ht[e]+(4==e?ke:a)+l,s,e?void 0:n),o,r),_=(e,t,l,n=a,o=a,d=1,s=a)=>B(i+e+c,(n?n+", ":a)+ve+": "+t+(d?", mutator?: boolean":a),we,Wt(i+e+c,o,d?"mutator":a),l,s),Z=`./${Pt(n)}.d`,H=Pt(n,1),Q=Pt(H),q=[],K=ae();let Y=[],te=[];if(s(1,Z,H,`create${H} as create${H}Decl`),X(e))s(null,l,b);else{s(0,l,"CellChange"),s(null,l,u);const[e,t,n,o,c,i,y,T,v,V,R,S,A,O,G,M,J,z,B,F,X,te,le,oe]=N(Q,H),de=ae();E(((e,t)=>{const l=`<'${e}'>`,a=[$(t+p,o+l,Ee+` the '${e}' `+p),$(t+p+He,c+l,Ee+` the '${e}' `+p+Qe),$(t+h,i+l,at(e)),$(t+h+He,y+l,at(e,1)),$(t+f+we,T+l,`A Cell Id for the '${e}' `+p),$(t+f+pe,V+l,st(`a Cell Id and value from a Row in the '${e}' `+p)),$(t+h+pe,R+l,st(`a Row Id from the '${e}' Table, and a Cell iterator`)),$(t+p+f+pe,S+l,st(`a Cell Id from anywhere in the '${e}' Table, and a count of how many times it appears`))];se(de,e,a),s(1,Z,...a)})),s(1,Z,e,t,n,T,A,O,G,M,J,z,B,F,X,te,le,oe),Y=[e,t,n,T,O,G,M,J,z,B,F,X,te,le,de],L([[e],[d],[H,"tables: "+t,"tables"],[H]],(([e,t,l],n)=>U(n,a,b,e,lt(1,n),t,l))),U(0,a,C,n+Le,nt(p,je)),U(5,a,p,_e,ot(p,je),"tableCallback: "+A,"tableCallback as any"),E(((e,t,l)=>{const[n,o,s,r,I,c,$,i]=ne(de,e);L([[n],[d],[H,"table: "+o,", table"],[H]],(([n,o,d=a],s)=>U(s,t,p,n,it(e,s),o,l+d))),U(0,t,p+w,u,nt(f,"the whole of "+ct(e)),a,l),U(5,t,p+f,_e,ot(p+f,"the whole of "+ct(e)),"tableCellCallback: "+i,l+", tableCellCallback as any"),U(0,t,h+"Count","number","Gets the number of Rows in the "+ct(e),a,l),U(0,t,m,u,nt(h,ct(e)),a,l),U(0,t,g,u,nt(h,ct(e),1),"cellId?: "+I+Ge,l+", cellId, descending, offset, limit"),U(5,t,h,_e,ot(h,ct(e)),"rowCallback: "+$,l+", rowCallback as any"),L([[s],[d],[H,", row: "+r,", row"],[H],[H,", partialRow: "+r,", partialRow"]],(([n,o=a,d=a],s)=>U(s,t,h,n,ut(e,s),De+o,l+", rowId"+d))),U(6,t,h,we+xe,"Add a new Row to "+ct(e),"row: "+r+", reuseIds?: boolean",l+", row, reuseIds"),U(0,t,w,I+Le,nt(f,$t(e)),De,l+", rowId"),U(5,t,f,_e,ot(f,$t(e)),De+", cellCallback: "+c,l+", rowId, cellCallback as any"),D(e,((n,o,s,r,I)=>{const c="Map"+Pt(o,1);se(K,o,c);const $=o+(k(s)?xe:a);L([[$],[d],[H,`, cell: ${o} | `+c,", cell as any"],[H]],(([o,d=a,s=a],c)=>U(c,t+I,f,o,pt(e,n,c),De+d,l+", rowId, "+r+s))),U(1,t+I,p+f,d,Ct[1]+` the '${n}' Cell anywhere in `+ct(e),a,l+", "+r)}))})),U(0,a,b+Te,Te,lt(1,6)),U(2,a,b+Te,H,lt(1,7),"tablesJson: "+Te,"tables"+Te),_(b,O,lt(1,8)+" changes"),_(C,G,It(2,0,1)),_(p,M,It(3,0),`tableId: ${n} | null`,"tableId"),_(p+w,J,It(14,3,1),`tableId: ${n} | null`,"tableId"),_(h+"Count",z,It(15,3),`tableId: ${n} | null`,"tableId"),_(m,B,It(4,3,1),`tableId: ${n} | null`,"tableId"),_(g,F,It(13,3,1),Dt("tableId: TId",`cellId: ${T}<TId>`+xe,"descending: boolean","offset: number","limit: number"+xe),Dt("tableId","cellId","descending","offset","limit"),1,"<TId extends TableId>"),_(h,X,It(5,3),`tableId: ${n} | null, rowId: IdOrNull`,"tableId, rowId"),_(w,te,It(6,5,1),`tableId: ${n} | null, rowId: IdOrNull`,"tableId, rowId"),_(f,le,It(7,5),`tableId: ${n} | null, rowId: IdOrNull, cellId: ${j(E((e=>ne(de,e)?.[4]??a))," | ")} | null`,"tableId, rowId, cellId"),_(ye+f,oe,Ae+" whenever an invalid Cell change was attempted","tableId: IdOrNull, rowId: IdOrNull, cellId: IdOrNull","tableId, rowId, cellId"),s(1,Z,...ee(K)),W(q,".set"+b+Oe+"({",St(E(((e,t,l)=>[`[${l}]: {`,...D(e,((e,t,l,n)=>`[${n}]: {[${x(At(r),`'${r}'`)}]: ${x(At(t),`'${t}'`)}${k(l)?a:`, [${x(At(I),`'${I}'`)}]: `+(P(l)?x(At(l),`'${l}'`):l)}},`)),"},"]))),"})")}if(X(t))s(null,l,T);else{const[e,t,n,o,c,$,i,u,p]=G(Q,H);s(1,Z,e,t,n,c,$,i,u,p),te=[e,t,n,$,i,u],L([[e],[d],[H,"values: "+t,"values"],[H],[H,"partialValues: "+t,"partialValues"]],(([e,t,l],n)=>U(n,a,T,e,lt(2,n),t,l))),U(0,a,v,n+Le,nt(y,je)),U(5,a,y,"void",ot(y,je),"valueCallback: "+c,"valueCallback as any"),O(((e,t,l,n,o)=>{const s="Map"+Pt(t,1);se(K,t,s),L([[t],[d],[H,`value: ${t} | `+s,", value as any"],[H]],(([t,l,d=a],s)=>U(s,o,y,t,bt(e,s),l,n+d)))})),U(0,a,T+Te,Te,lt(2,6)),U(2,a,T+Te,H,lt(2,7),"valuesJson: "+Te,"values"+Te),_(T,$,lt(2,8)+" changes"),_(v,i,It(10,0,1)),_(y,u,It(11,0),`valueId: ${n} | null`,"valueId"),_(ye+y,p,Ae+" whenever an invalid Value change was attempted","valueId: IdOrNull","valueId"),s(1,Z,...ee(K)),s(0,l,"ValueChange"),W(q,".set"+T+Oe+"({",O(((e,t,l,n)=>[`[${n}]: {[${x(At(r),`'${r}'`)}]: ${x(At(t),`'${t}'`)}${k(l)?a:`, [${x(At(I),`'${I}'`)}]: `+(P(l)?x(At(l),`'${l}'`):l)}},`])),"})")}U(0,a,"Content",`[${b}, ${T}]`,lt(0,0)),U(2,a,"Content",H,lt(0,2),`[tables, values]: [${b}, ${T}]`,"[tables, values]"),U(2,a,Je,H,`Applies a set of ${Je} to the Store`,"transactionChanges: "+Je,"transactionChanges"),oe(K,((e,t)=>$(t,`(cell: ${e}${xe}) => `+e,`Takes a ${e} Cell value and returns another`))),s(null,l,"DoRollback",we,"IdOrNull",Te,"Store",Je),s(0,l,"Get"+Je,"GetTransactionLog"),U(0,a,Te,Te,lt(0,6)),U(2,a,Te,H,lt(0,7),"tablesAndValuesJson: "+Te,"tablesAndValuesJson"),U(7,a,ze,"Return",We,ge,"actions, doRollback","<Return>"),U(7,a,"start"+Me,H,Be),U(7,a,"finish"+Me,H,Fe,me,"doRollback");const le=M(Q,H);return _("Start"+Me,le,Ae+" just before the start of the "+ze,a,a,0),_("WillFinish"+Me,le,Ae+" just before "+Ue,a,a,0),_("DidFinish"+Me,le,Ae+" just after "+Ue,a,a,0),U(7,a,"call"+c,H,"Manually provoke a listener to be called","listenerId: Id","listenerId"),U(3,a,c,H,"Remove a listener that was previously added to "+je,"listenerId: Id","listenerId"),B("getStore",a,"Store","store",Ct[0]+" the underlying Store object"),s(1,l,"createStore"),s(1,Z,H,`create${H} as create${H}Decl`,le),x("store",["createStore()",...q]),V("fluent","actions: () => Store",["actions();",`return ${Q};`]),V("proxy","listener: any",`(_: Store, ...params: any[]) => listener(${Q}, ...params)`),x(Q,["{",...z(1),"}"]),[o(...R(0),...S(),fe+" interface "+H+" {",...z(0),"}",a,Et(`Creates a ${H} object`),fe+" function create"+H+"(): "+H+";"),o(...R(1),fe+" const create"+H+": typeof create"+H+"Decl = () => {",...A(),`return Object.freeze(${Q});`,"};"),Y,te]},Ft=e=>$+e,Ut=e=>Dt(Ft(e),Ft(e)+Ce),_t="debugIds?: boolean",Zt="debugIds={debugIds}",Ht="then"+he,Qt="Parameter",qt=": (parameter: "+Qt+", store: Store) => ",Kt="const contextValue = useContext(Context);",Xt=", based on a parameter",Yt=": ",el="<"+Qt+",>",tl=Qt+"ized"+pe+"<"+Qt+">",ll="rowId",al="rowId={rowId}",nl=", separator, debugIds",ol="separator?: ReactElement | string",dl="then?: (store: Store",sl=Dt(dl+")"+Ze,Ht),rl="then, then"+Ce,Il=ll+Yt+we,cl="View",$l=(e,...t)=>Dt(...t,ve+": "+e,ve+he,"mutator?: boolean"),il=(...e)=>Dt(...e,ve,ve+Ce,"mutator"),ul=(e,t,n,o,d)=>{const[s,r,I,$,i,V,x,R]=Gt(),[S,P,A]=jt(e,t,i),E=`./${Pt(n)}.d`,D=`./${Pt(n)}-ui-react.d`,O="tinybase/ui-react",N=Pt(n,1),G=Pt(N),L=N+"Or"+N+we,M=G+"Or"+N+we,J=G+`={${G}}`,z=ae(),B=(e,t,l,n,o,d=a)=>(r(1,D,e+" as "+e+"Decl"),xt(z,e,[t,l,n,o,d])),U=(e,t,l,n,o,d=a)=>B("use"+e,t,l,n,o,d),_=(e,t,l,n,o=a,d=a,s=a,I=a,c=a)=>(r(1,O,`use${t} as use${t}Core`),U(e,Dt(o,K,I),l,ee+`(${M}, use${t}Core, [`+(d||a)+(c?"], ["+c:a)+"]);",n,s)),Z=(e,t,l,a)=>B(e,t,1,l,a),H=(e=0)=>de(z,(([t,l,n,o,d],s)=>{const r=e?[fe+` const ${s}: typeof ${s}Decl = ${d}(${t}): ${1==l?"any":l} =>`,n]:[fe+` function ${s}${d}(${t}): ${1==l?"ComponentReturnType":l};`];return e||F(r,Et(o)),W(r,a),r}));r(null,l,we,"Store",pe,Qt+"ized"+pe),r(0,O,"ComponentReturnType"),r(1,O,"useCellIds"),r(null,O,"ExtraProps"),r(0,E,N);const Q=I(L,N+" | "+we,`Used when you need to refer to a ${N} in a React hook or component`),q=I(Pe+Se,Nt(G+Ve+N,G+`ById?: {[${G}Id: Id]: ${N}}`),`Used with the ${Pe} component, so that a `+N+" can be passed into the context of an application");r(0,"react","ReactElement","ComponentType"),r(1,"react","React"),r(1,D,Q,q);const K=M+Ve+Q;i("{createContext, useContext, useMemo}","React"),i("Context",`createContext<[${N}?, {[${G}Id: Id]: ${N}}?]>([])`),U("Create"+N,`create: () => ${N}, create`+he,N,"\n// eslint-disable-next-line react-hooks/exhaustive-deps\nuseMemo(create, createDeps)",`Create a ${N} within a React application with convenient memoization`);const Y=U(N,"id?: Id",N+xe,["{",Kt,"return id == null ? contextValue[0] : contextValue[1]?.[id];","}"],`Get a reference to a ${N} from within a ${Pe} component context`),ee=$("useHook",M+`: ${Q} | undefined, hook: (...params: any[]) => any, preParams: any[], postParams: any[] = []`,[`const ${G} = ${Y}(${M} as Id);`,`return hook(...preParams, ((${M} == null || typeof ${M} == 'string')`,`? ${G} : ${M})?.getStore(), ...postParams)`]),te=$("getProps","getProps: ((id: any) => ExtraProps) | undefined, id: Id","(getProps == null) ? ({} as ExtraProps) : getProps(id)"),le=$("wrap",Dt("children: any","separator?: any","encloseWithId?: boolean","id?: Id"),["const separated = separator==null || !Array.isArray(children)"," ? children"," : children.map((child, c) => (c > 0 ? [separator, child] : child));","return encloseWithId ? [id, ':{', separated, '}'] : separated;"]),oe=$("useCustomOrDefaultCellIds",Dt("customCellIds: Ids | undefined","tableId: Id","rowId: Id",`${M}?: ${Q} | undefined`),[`const defaultCellIds = ${ee}(${M}, useCellIds, [tableId, rowId]);`,"return customCellIds ?? defaultCellIds;"]),se=i("NullComponent","() => null");if(!X(e)){const[e,t,n,d,s,i,y,T,v,V,x,R,A,O,L]=o;r(null,E,e,t,n,s,i,y,T,v,V,x,R,A,O),r(0,E,d),r(1,E,N),r(null,l,u,"IdOrNull");const M=$("tableView",`{${G}, rowComponent, getRowComponentProps, customCellIds`+nl+"}: any, rowIds: Ids, tableId: Id, defaultRowComponent: React.ComponentType<any>",["const Row = rowComponent ?? defaultRowComponent;",`return ${le}(rowIds.map((rowId) => (`,"<Row","{..."+te+"(getRowComponentProps, rowId)}","key={rowId}","tableId={tableId}",al,"customCellIds={customCellIds}",J,Zt,"/>","))",nl,", tableId,",");"]),z=$("getDefaultTableComponent","tableId: Id",j(S(((e,t,l)=>`tableId == ${l} ? ${t}TableView : `)))+se),W=$("getDefaultCellComponent","tableId: Id, cellId: Id",j(S(((e,t,l)=>`tableId == ${l} ? ${j(P(e,((e,l,a,n,o)=>`cellId == ${n} ? `+t+o+"CellView : ")))+se} : `)))+se);_(b,b,e,lt(1,0)+ue);const B=_(C,C,n+Le,nt(p,je)+ue);_(Ne+b+pe,Ne+b+pe,tl,lt(1,9)+Xt,Dt(Ft(b)+qt+t,Ft(b)+he),Ut(b),el,Dt(dl,`tables: ${t})`+Ze,Ht),rl),_(be+b+pe,be+b+pe,pe,lt(1,12),a,a,a,sl,rl);const F=I(f+Se,Nt("tableId?: TId","rowId: Id","cellId?: CId",G+Ve+N,_t),dt($e+f),`<TId extends ${n}, CId extends ${d}<TId>>`),U=I(h+Se,Nt("tableId?: TId","rowId: Id",G+Ve+N,"cellComponents?: {readonly [CId in "+d+`<TId>]?: ComponentType<${F}<TId, CId>>;}`,`getCellComponentProps?: (cellId: ${d}<TId>) => ExtraProps`,`customCellIds?: ${d}<TId>[]`,ol,_t),dt($e+h),`<TId extends ${n}>`),H=I(p+Se,Nt("tableId?: TId",G+Ve+N,`rowComponent?: ComponentType<${U}<TId>>`,"getRowComponentProps?: (rowId: Id) => ExtraProps","customCellIds?: CellId<TId>[]",ol,_t),dt($e+p),`<TId extends ${n}>`),Q=I("Sorted"+p+Se,Nt("tableId?: TId","cellId?: "+d+"<TId>","descending?: boolean","offset?: number","limit?: number",G+Ve+N,`rowComponent?: ComponentType<${U}<TId>>`,"getRowComponentProps?: (rowId: Id) => ExtraProps","customCellIds?: CellId<TId>[]",ol,_t),dt($e+"sorted "+p),`<TId extends ${n}>`),q=I(b+Se,Nt(G+Ve+N,"tableComponents?: {readonly [TId in "+n+`]?: ComponentType<${H}<TId>>;}`,`getTableComponentProps?: (tableId: ${n}) => ExtraProps`,ol,_t),dt(tt(1,1)));r(1,D,q,H,Q,U,F),Z(b+cl,"{"+G+", tableComponents, getTableComponentProps"+nl+"}: "+q,[le+`(${B}(${G}).map((tableId) => {`,"const Table = (tableComponents?.[tableId] ?? "+z+"(tableId)) as React.ComponentType<TableProps<typeof tableId>>;","return <Table",`{...${te}(getTableComponentProps, tableId)}`,"tableId={tableId}","key={tableId}",J,Zt,"/>;","}), separator)"],lt(1,13)+ue),S(((e,t,l)=>{const[n,o,d,s,I]=ne(L,e);r(null,E,n,o,d,s,I),_(t+p,p,n,it(e)+ue,a,l),_(t+p+w,p+w,u,nt(f,"the whole of "+ct(e))+ue,a,l);const c=_(t+m,m,u,nt(h,ct(e))+ue,a,l),$=_(t+g,g,u,nt(h,ct(e),1)+ue,"cellId?: "+I+", descending?: boolean, offset?: number, limit?: number",l+", cellId, descending, offset, limit");_(t+h,h,d,ut(e)+ue,Il,Dt(l,ll)),_(t+w,w,I+Le,nt(f,$t(e))+ue,Il,Dt(l,ll)),_(Ne+t+p+pe,Ne+p+pe,tl,it(e,9)+Xt,Dt(Ft(p)+qt+o,Ft(p)+he),Dt(l,Ut(p)),el,Dt(dl,`table: ${o})`+Ze,Ht),rl),_(be+t+p+pe,be+p+pe,pe,it(e,12),a,l,a,sl,rl),_(Ne+t+h+pe,Ne+h+pe,tl,ut(e,9)+Xt,Dt(Il,Ft(h)+qt+s,Ft(h)+he),Dt(l,ll,Ut(h)),el,Dt(dl,`row: ${s})`+Ze,Ht),rl),_("Add"+t+h+pe,"Add"+h+pe,tl,ut(e,10)+Xt,Dt(Ft(h)+qt+s,Ft(h)+he),Dt(l,Ut(h)),el,"then?: ("+Dt(Il+xe,"store: Store","row: "+s+")"+Ze,"then"+he)+", reuseRowIds?: boolean",rl+", reuseRowIds"),_(Ne+t+ke+h+pe,Ne+ke+h+pe,tl,ut(e,11)+Xt,Dt(Il,Ft(ke+h)+qt+s,Ft(ke+h)+he),Dt(l,ll,Ut(ke+h)),el,Dt(dl,`partialRow: ${s})`+Ze,Ht),rl),_(be+t+h+pe,be+h+pe,pe,ut(e,12),Il,Dt(l,ll),a,sl,rl);const i=Z(t+h+cl,"{rowId, "+G+", cellComponents, getCellComponentProps, customCellIds"+nl+`}: ${U}<'${e}'>`,[le+`(${oe}(customCellIds, `+l+`, rowId, ${G}).map((cellId: ${I}) => {`,"const Cell = (cellComponents?.[cellId] ?? "+W+`(${l}, cellId)) as React.ComponentType<CellProps<typeof `+l+", typeof cellId>>;","return <Cell",`{...${te}(getCellComponentProps, cellId)} `,"key={cellId}",`tableId={${l}}`,al,"cellId={cellId}",J,Zt,"/>;","})"+nl+", rowId)"],ut(e,13)+ue);Z(t+"Sorted"+p+cl,"{cellId, descending, offset, limit, ...props}: "+Q+`<'${e}'>`,M+"(props, "+$+`(cellId, descending, offset, limit, props.${G}), ${l}, ${i});`,it(e,13)+", sorted"+ue),Z(t+p+cl,`props: ${H}<'${e}'>`,M+"(props, "+c+`(props.${G}), ${l}, ${i});`,it(e,13)+ue),P(e,((n,o,d,s,I)=>{const c="Map"+Pt(o,1);r(0,E,c),r(1,E,c);const $=_(t+I+f,f,o+(k(d)?xe:a),pt(e,n)+ue,Il,Dt(l,ll,s));_(Ne+t+I+f+pe,Ne+f+pe,tl,pt(e,n,9)+Xt,Dt(Il,Ft(f)+qt+o+" | "+c,Ft(f)+he),Dt(l,ll,s,Ut(f)),el,Dt(dl,`cell: ${o} | ${c})`+Ze,Ht),rl),_(be+t+I+f+pe,be+f+pe,pe,pt(e,n,12),Dt(Il,"forceDel?: boolean"),Dt(l,ll,s,"forceDel"),a,sl,rl),Z(t+I+f+cl,`{rowId, ${G}, debugIds}: `+F+`<'${e}', '${n}'>`,[le+`('' + ${$}(rowId, `+G+`) ?? '', undefined, debugIds, ${s})`],pt(e,n,13)+ue)}))}));const K=j(S((e=>ne(L,e)?.[4]??a))," | ");_(b+c,b+c,_e,lt(1,8)+" changes",$l(s),il()),_(C+c,C+c,_e,It(2,0,1),$l(i),il()),_(p+c,p+c,_e,It(3,0),$l(y,`tableId: ${n} | null`),il("tableId")),_(p+w+c,p+w+c,_e,It(14,3,1),$l(T,`tableId: ${n} | null`),il("tableId")),_(m+c,m+c,_e,It(4,3,1),$l(V,`tableId: ${n} | null`),il("tableId")),_(g+c,g+c,_e,It(13,3,1),$l(x,`tableId: ${n} | null`,"cellId: "+K+xe,"descending: boolean","offset: number","limit: number"+xe),il("tableId","cellId","descending","offset","limit")),_(h+c,h+c,_e,It(5,3),$l(R,`tableId: ${n} | null`,ll+": IdOrNull"),il("tableId",ll)),_(w+c,w+c,_e,It(6,5,1),$l(A,`tableId: ${n} | null`,ll+": IdOrNull"),il("tableId",ll)),_(f+c,f+c,_e,It(7,5),$l(O,`tableId: ${n} | null`,ll+": IdOrNull",`cellId: ${K} | null`),il("tableId",ll,"cellId"))}if(!X(t)){const[e,t,l,n,o,s]=d;r(null,E,...d),r(1,E,N);const i=$("getDefaultValueComponent","valueId: Id",j(A(((e,t,l,a,n)=>`valueId == ${a} ? `+n+"ValueView : ")))+se);_(T,T,e,lt(2,0)+ue);const u=_(v,v,l+Le,nt(y,je)+ue);_(Ne+T+pe,Ne+T+pe,tl,lt(2,9)+Xt,Dt(Ft(T)+qt+t,Ft(T)+he),Ut(T),el,Dt(dl,`values: ${t})`+Ze,Ht),rl),_(Ne+ke+T+pe,Ne+ke+T+pe,tl,lt(2,11)+Xt,Dt(Ft(ke+T)+qt+t,Ft(ke+T)+he),Ut(ke+T),el,Dt(dl,`partialValues: ${t})`+Ze,Ht),rl),_(be+T+pe,be+T+pe,pe,lt(2,12),a,a,a,sl,rl);const p=I(y+Se,Nt("valueId?: VId",G+Ve+N,_t),dt("a Value"),`<VId extends ${l}>`),b=I(T+Se,Nt(G+Ve+N,"valueComponents?: {readonly [VId in "+l+`]?: ComponentType<${p}<VId>>;}`,`getValueComponentProps?: (valueId: ${l}) => ExtraProps`,ol,_t),dt(tt(2,1)));r(1,D,b,p),Z(T+cl,"{"+G+", valueComponents, getValueComponentProps"+nl+"}: "+b,[le+`(${u}(${G}).map((valueId) => {`,"const Value = valueComponents?.[valueId] ?? "+i+"(valueId);","return <Value",`{...${te}(getValueComponentProps, valueId)}`,"key={valueId}",J,Zt,"/>;","}), separator)"],lt(2,13)+ue),A(((e,t,l,n,o)=>{const d="Map"+Pt(t,1);r(0,E,d),r(1,E,d);const s=_(o+y,y,t,bt(e)+ue,a,n);_(Ne+o+y+pe,Ne+y+pe,tl,bt(e,9)+Xt,Dt(Ft(y)+qt+t+" | "+d,Ft(y)+he),Dt(n,Ut(y)),el,Dt(dl,`value: ${t} | ${d})`+Ze,Ht),rl),_(be+o+y+pe,be+y+pe,pe,bt(e,12),a,n,a,sl,rl),Z(o+y+cl,`{${G}, debugIds}: ${p}<'${e}'>`,[le+`('' + ${s}(`+G+`) ?? '', undefined, debugIds, ${n})`],bt(e,13)+ue)})),_(T+c,T+c,_e,lt(2,8)+" changes",$l(n),il()),_(v+c,v+c,_e,It(10,0,1),$l(o),il()),_(y+c,y+c,_e,It(11,0),$l(s,`valueId: ${l} | null`),il("valueId"))}return Z(Pe,`{${G}, ${G}ById, children}: `+q+" & {children: React.ReactNode}",["{",Kt,"return (","<Context."+Pe,"value={useMemo(",`() => [${G} ?? contextValue[0], {...contextValue[1], ...${G}ById}],`,`[${G}, ${G}ById, contextValue],`,")}>","{children}",`</Context.${Pe}>`,");","}"],"Wraps part of an application in a context that provides default objects to be used by hooks and components within"),[s(...V(0),...x(),...H(0)),s(...V(1),...R(),...H(1))]},pl=(e,t,l)=>{if(X(e)&&X(t))return[a,a,a,a];const[n,o,d,s]=Bt(e,t,l);return[n,o,...ul(e,t,l,d,s)]},bl=JSON.parse,Cl="prettier/",hl=Cl+"plugins/",ml={parser:"typescript",singleQuote:!0,trailingComma:"all",bracketSpacing:!1,jsdocSingleLineComment:!1},gl=Lt((e=>{const t=()=>{const t=bl(e.getTablesSchemaJson());return!X(t)||N(e.getTableIds(),(l=>{const a=e.getRowIds(l),n=ae();if(N(a,(t=>N(e.getCellIds(l,t),(a=>{const o=e.getCell(l,t,a),d=re(n,a,(()=>[O(o),ae(),[0],0])),[s,r,[I]]=d,c=re(r,o,(()=>0))+1;return c>I&&(d[2]=[c,o]),se(r,o,c),d[3]++,s==O(o)})))))return t[l]={},te(n,(([e,,[,n],o],d)=>{t[l][d]={[r]:e,...o==J(a)?{[I]:n}:{}}})),1}))?t:{}},l=()=>{const t=bl(e.getValuesSchemaJson());return X(t)&&e.forEachValue(((e,l)=>{t[e]={[r]:O(l)}})),t},a=e=>pl(t(),l(),e),n=async e=>{const t=["d.ts","ts","d.ts","tsx"],l=[];let n;try{n=(await import(Cl+"standalone")).format,W(l,await import(hl+"estree"),await import(hl+"typescript"))}catch(e){n=async e=>e}return await D(M(a(e),(async(e,a)=>Rt(await n(e,{...ml,plugins:l,filepath:"_."+t[a]})))))};return H({getStoreStats:t=>{let l=0,a=0,n=0;const o={};return e.forEachTable(((e,d)=>{l++;let s=0,r=0;const I={};d(((e,l)=>{s++;let a=0;l((()=>a++)),r+=a,t&&(I[e]={rowCells:a})})),a+=s,n+=r,t&&(o[e]={tableRows:s,tableCells:r,rows:I})})),{totalTables:l,totalRows:a,totalCells:n,totalValues:J(e.getValueIds()),jsonLength:kt(e.getJson()),...t?{detail:{tables:o}}:{}}},getStoreTablesSchema:t,getStoreValuesSchema:l,getStoreApi:a,getPrettyStoreApi:n,getStore:()=>e})}));e.createTools=gl},"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).TinyBaseTools={});

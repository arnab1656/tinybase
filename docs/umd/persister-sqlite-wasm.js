var a,t;a=this,t=function(a){"use strict";const t=a=>typeof a,e="tinybase",s=",",n=t(""),i=(a,t)=>a.repeat(t),o=Promise,c=setInterval,r=clearInterval,l=(a,t)=>a instanceof t,y=a=>null==a,w=(a,t,e)=>y(a)?e?.():t(a),u=a=>t(a)==n,d=(a,t,e)=>a.slice(t,e),E=a=>a.length,p=async a=>o.all(a),f=(a,t="")=>a.join(t),m=(a,t)=>a.map(t),T=a=>0==E(a),v=(a,t)=>a.filter(t),h=(a,...t)=>a.push(...t),A=(a,t)=>a?.has(t)??!1,L=a=>[...a?.values()??[]],R=(a,t)=>a?.delete(t),N=Object,O=N.keys,S=N.freeze,b=(a=[])=>N.fromEntries(a),C=(...a)=>N.assign({},...a),D=(a,t)=>m(N.entries(a),(([a,e])=>t(e,a))),g=a=>N.values(a),I=a=>E(O(a)),_=a=>(a=>l(a,N)&&a.constructor==N)(a)&&0==I(a),M=a=>new Map(a),F=a=>[...a?.keys()??[]],$=(a,t)=>a?.get(t),P=(a,t)=>m([...a?.entries()??[]],(([a,e])=>t(e,a))),B=(a,t,e)=>y(e)?(R(a,t),a):a?.set(t,e),W=(a,t,e)=>(A(a,t)||B(a,t,e()),$(a,t)),j=(a,t,e,s=B)=>(D(t,((t,s)=>e(a,s,t))),((a,t)=>{((a,t)=>{a?.forEach(t)})(a,((a,e)=>t(e)))})(a,(e=>((a,t)=>!y(((a,t)=>w(a,(a=>a[t])))(a,t)))(t,e)?0:s(a,e))),a),x=a=>new Set(Array.isArray(a)||y(a)?a:[a]),k=(a,t)=>a?.add(t),q="_",H="_id",J=a=>`"${a.replace(/"/g,'""')}"`,U="FROM pragma_table_",V="WHERE",Y=(a,t,e)=>{const n=M();return[async()=>j(n,b(await p(m(await a("SELECT name "+U+"list WHERE schema='main'AND type='table'AND name IN("+G(t)+")",t),(async({name:t})=>[t,b(m(await a("SELECT name,type "+U+"info(?)",[t]),(({name:a,type:t})=>[a,t])))])))),((a,t,e)=>B(n,t,j(W(n,t,M),e,((a,t,e)=>{e!=$(a,t)&&B(a,t,e)}),((a,t)=>B(a,t))))),((a,t)=>B(n,t))),async(t,e)=>((a,t)=>!y($($(n,a),t)))(t,e)?b(v(m(await a("SELECT*FROM"+J(t)),(a=>{return[a[e],(t={...a},s=e,delete t[s],t)];var t,s})),(([a,t])=>!y(a)&&!_(t)))):{},async(t,e,i,o,c,r=!1)=>{const l=x();D(i??{},(a=>m(O(a??{}),(a=>k(l,a)))));const w=L(l);if(!r&&c&&T(w)&&A(n,t))return await a("DROP TABLE"+J(t)),void B(n,t);if(T(w)||A(n,t)){const s=$(n,t),i=x(F(s));await p([...m(w,(async e=>{R(i,e)||(await a(`ALTER TABLE${J(t)}ADD${J(e)}`),B(s,e,""))})),...!r&&o?m(L(i),(async n=>{n!=e&&(await a(`ALTER TABLE${J(t)}DROP${J(n)}`),B(s,n))})):[]])}else await a(`CREATE TABLE${J(t)}(${J(e)} PRIMARY KEY ON CONFLICT REPLACE${f(m(w,(a=>s+J(a))))});`),B(n,t,M([[e,""],...m(w,(a=>[a,""]))]));if(r)y(i)?await a("DELETE FROM"+J(t)+"WHERE 1"):await p(D(i,(async(s,n)=>{y(s)?await a("DELETE FROM"+J(t)+V+J(e)+"=?",[n]):T(w)||await z(a,t,e,O(s),[n,...g(s)])})));else if(T(w))A(n,t)&&await a("DELETE FROM"+J(t)+"WHERE 1");else{const s=v(F($(n,t)),(a=>a!=e)),o=[],c=[];D(i??{},((a,t)=>{h(o,t,...m(s,(t=>a?.[t]))),h(c,t)})),await z(a,t,e,s,o),await a("DELETE FROM"+J(t)+V+J(e)+"NOT IN("+G(c)+")",c)}},async t=>{let s;await a("BEGIN");try{s=await t()}catch(a){e?.(a)}return await a("END"),s}]},z=async(a,t,e,n,o)=>await a("INSERT INTO"+J(t)+"("+J(e)+f(m(n,(a=>s+J(a))))+")VALUES"+d(i(`,(?${i(",?",E(n))})`,E(o)/(E(n)+1)),1)+"ON CONFLICT("+J(e)+")DO UPDATE SET"+f(m(n,(a=>J(a)+"=excluded."+J(a))),s),o),G=a=>f(m(a,(()=>"?")),s),K=JSON.parse,Q=M(),X=M(),Z=(a,t,e,s,n,i,[o,c]=[],r=[])=>{let l,u,d,E=0,p=0;W(Q,r,(()=>0)),W(X,r,(()=>[]));const f=async a=>(2!=E&&(E=1,await m.schedule((async()=>{await a(),E=0}))),m),m={load:async(e,s)=>await f((async()=>{try{a.setContent(await t())}catch{a.setContent([e,s])}})),startAutoLoad:async(e={},n={})=>(m.stopAutoLoad(),await m.load(e,n),p=1,d=s((async(e,s)=>{if(s){const t=s();await f((async()=>a.setTransactionChanges(t)))}else await f((async()=>{try{a.setContent(e?.()??await t())}catch(a){i?.(a)}}))})),m),stopAutoLoad:()=>(p&&(n(d),d=void 0,p=0),m),save:async t=>(1!=E&&(E=2,await m.schedule((async()=>{try{await e(a.getContent,t)}catch(a){i?.(a)}E=0}))),m),startAutoSave:async()=>(await m.stopAutoSave().save(),l=a.addDidFinishTransactionListener(((a,t)=>{const[e,s]=t();_(e)&&_(s)||m.save((()=>[e,s]))})),m),stopAutoSave:()=>(w(l,a.delListener),l=void 0,m),schedule:async(...a)=>(h($(X,r),...a),await(async()=>{if(!$(Q,r)){for(B(Q,r,1);!y((a=$(X,r),u=a.shift()));)try{await u()}catch(a){i?.(a)}B(Q,r,0)}var a})(),m),getStore:()=>a,destroy:()=>m.stopAutoLoad().stopAutoSave(),getStats:()=>({})};return o&&(m[o]=()=>c),S(m)},aa="store",ta=(a,t,e,s,n,[i],o,c)=>{const[r,y,w,u]=Y(t,o,n);return Z(a,(async()=>await u((async()=>(await r(),K((await y(i,H))[q]?.[aa]??"null"))))),(async a=>await u((async()=>{var t;await r(),await w(i,H,{[q]:{[aa]:(t=a()??null,JSON.stringify(t,((a,t)=>l(t,Map)?N.fromEntries([...t]):t)))}},!0,!0)}))),e,s,n,["getDb",c],c)},ea=(a,t,e,s,n,[i,o,[c,r,l]],w,u)=>{const[d,E,f,m]=Y(t,w,n),T=async(a,t)=>await p(P(o,(async([e,s,n,i],o)=>{const c=a[o];t&&void 0===c||await f(e,s,c,n,i,t)}))),h=async(a,t)=>r?await f(l,H,{[q]:a},!0,!0,t):null;return Z(a,(async()=>await m((async()=>{await d();const a=await(async()=>b(v(await p(P(i,(async([a,t],e)=>[a,await E(e,t)]))),(a=>!_(a[1])))))(),t=await(async()=>c?(await E(l,H))[q]:{})();return _(a)&&y(t)?void 0:[a,t]}))),(async(a,t)=>await m((async()=>{if(await d(),y(t)){const[t,e]=a();await T(t),await h(e)}else{const[a,e]=t();await T(a,!0),await h(e,!0)}}))),e,s,n,["getDb",u],u)},sa="json",na="autoLoadIntervalSeconds",ia="rowIdColumnName",oa="tableId",ca="tableName",ra={mode:sa,[na]:1},la={load:0,save:0,[ca]:e+"_values"},ya=(a,t,e,s)=>{const n=M();return D(a,((a,i)=>{const o=d(g(C(t,u(a)?{[e]:a}:a)),0,I(t));y(o[0])||s(i,o[0])||B(n,i,o)})),n},wa="pragma ",ua="data_version",da="schema_version",Ea=(a,t,s,n,i,o,l,y)=>{let w,E;const[p,f,m,T]=(a=>{const t=(a=>C(ra,u(a)?{storeTableName:a}:a??{}))(a),s=t[na];if(t.mode==sa){const{storeTableName:a=e}=t;return[1,s,[a],x(a)]}const{tables:{load:n={},save:i={}}={},values:o={}}=t,c=d(g(C(la,o)),0,I(la)),r=c[2],l=x(r);return[0,s,[ya(n,{[oa]:null,[ia]:H},oa,(a=>k(l,a)&&a==r)),ya(i,{[ca]:null,[ia]:H,deleteEmptyColumns:0,deleteEmptyTable:0},ca,((a,t)=>k(l,t)&&t==r)),c],l]})(t);return(p?ta:ea)(a,o?async(a,t)=>(o(a,t),await s(a,t)):s,(a=>[c((async()=>{try{const t=(await s(wa+ua))[0][ua],e=(await s(wa+da))[0][da];t==(w??=t)&&e==(E??=e)||(a(),w=t,E=e)}catch{}}),1e3*f),n((t=>T.has(t)?a():0))]),(([a,t])=>{r(a),w=E=null,i(t)}),l,m,L(T),y)};a.createSqliteWasmPersister=(a,t,e,s,n,i)=>Ea(a,s,(async(a,t=[])=>e.exec(a,{bind:t,rowMode:"object",returnValue:"resultRows"}).map((a=>({...a})))),(a=>t.capi.sqlite3_update_hook(e,((t,e,s,n)=>a(n)),0)),(()=>t.capi.sqlite3_update_hook(e,(()=>0),0)),n,i,e)},"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((a="undefined"!=typeof globalThis?globalThis:a||self).TinyBasePersisterSqliteWasm={});

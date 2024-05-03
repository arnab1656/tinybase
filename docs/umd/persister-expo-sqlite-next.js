var a,t;a=this,t=function(a,t){"use strict";const e=a=>typeof a,n="tinybase",s="",i=",",o=e(s),r=(a,t)=>a.repeat(t),c=Promise,l=clearInterval,y=a=>null==a,w=(a,t,e)=>y(a)?e?.():t(a),d=a=>e(a)==o,u=a=>Array.isArray(a),p=(a,t,e)=>a.slice(t,e),E=a=>a.length,f=async a=>c.all(a),g=(a,t="")=>a.join(t),m=(a,t)=>a.map(t),v=a=>0==E(a),T=(a,t)=>a.filter(t),A=(a,...t)=>a.push(...t),C=(a,t)=>a?.has(t)??!1,N=a=>[...a?.values()??[]],h=(a,t)=>a?.delete(t),O=Object,b=a=>O.getPrototypeOf(a),L=O.entries,R=O.keys,S=O.freeze,D=(a=[])=>O.fromEntries(a),x=(...a)=>O.assign({},...a),I=(a,t)=>t in a,M=(a,t)=>m(L(a),(([a,e])=>t(e,a))),P=a=>O.values(a),$=a=>E(R(a)),_=a=>(a=>!y(a)&&w(b(a),(a=>a==O.prototype||y(b(a))),(()=>!0)))(a)&&0==$(a),F=a=>new Map(a),q=a=>[...a?.keys()??[]],j=(a,t)=>a?.get(t),B=(a,t)=>m([...a?.entries()??[]],(([a,e])=>t(e,a))),H=(a,t,e)=>y(e)?(h(a,t),a):a?.set(t,e),J=(a,t,e,n)=>(C(a,t)||H(a,t,e()),j(a,t)),Y=(a,t,e,n=H)=>(M(t,((t,n)=>e(a,n,t))),((a,t)=>{((a,t)=>{a?.forEach(t)})(a,((a,e)=>t(e)))})(a,(e=>I(t,e)?0:n(a,e))),a),k="_",G="_id",U=a=>`"${a.replace(/"/g,'""')}"`,W="SELECT",z=a=>new Set(u(a)||y(a)?a:[a]),K=(a,t)=>a?.add(t),V="TABLE",Q="ALTER "+V,X="DELETE FROM",Z=W+"*FROM",aa="FROM pragma_table_",ta="WHERE",ea=(a,t,e,n)=>{const o=F();return[async()=>Y(o,D(await f(m(await a("SELECT name "+aa+"list WHERE schema='main'AND(type='table'OR type='view')AND name IN("+sa(t)+")ORDER BY name",t),(async({name:t})=>[t,D(m(await a(W+" name,type "+aa+"info(?)",[t]),(({name:a,type:t})=>[a,t])))])))),((a,t,e)=>H(o,t,Y(J(o,t,F),e,((a,t,e)=>{e!=j(a,t)&&H(a,t,e)}),((a,t)=>H(a,t))))),((a,t)=>H(o,t))),async(t,e)=>((a,t)=>!y(j(j(o,a),t)))(t,e)?D(T(m(await a(Z+U(t)),(a=>{return[a[e],(t={...a},n=e,delete t[n],t)];var t,n})),(([a,t])=>!y(a)&&!_(t)))):{},async(t,e,r,c,l,w=!1)=>{const d=z();M(r??{},(a=>m(R(a??{}),(a=>K(d,a)))));const u=N(d);if(!w&&l&&v(u)&&C(o,t))return await a("DROP "+V+U(t)),void H(o,t);if(v(u)||C(o,t)){const n=j(o,t),i=z(q(n));await f([...m(u,(async e=>{h(i,e)||(await a(Q+U(t)+"ADD"+U(e)),H(n,e,s))})),...!w&&c?m(N(i),(async s=>{s!=e&&(await a(Q+U(t)+"DROP"+U(s)),H(n,s))})):[]])}else await a("CREATE "+V+U(t)+"("+U(e)+` PRIMARY KEY ON CONFLICT REPLACE${g(m(u,(a=>i+U(a))))});`),H(o,t,F([[e,s],...m(u,(a=>[a,s]))]));if(w)y(r)?await a(X+U(t)+ta+" 1"):await f(M(r,(async(s,i)=>{y(s)?await a(X+U(t)+ta+U(e)+"=?",[i]):v(u)||await na(a,t,e,R(s),[i,...P(s)],n)})));else if(v(u))C(o,t)&&await a(X+U(t)+ta+" 1");else{const s=T(q(j(o,t)),(a=>a!=e)),i=[],c=[];M(r??{},((a,t)=>{A(i,t,...m(s,(t=>a?.[t]))),A(c,t)})),await na(a,t,e,s,i,n),await a(X+U(t)+ta+U(e)+"NOT IN("+sa(c)+")",c)}},async t=>{let n;await a("BEGIN");try{n=await t()}catch(a){e?.(a)}return await a("END"),n}]},na=async(a,t,e,n,o,c=!0)=>await a("INSERT "+(c?s:"OR REPLACE ")+"INTO"+U(t)+"("+U(e)+g(m(n,(a=>i+U(a))))+")VALUES"+p(r(`,(?${r(",?",E(n))})`,E(o)/(E(n)+1)),1)+(c?"ON CONFLICT("+U(e)+")DO UPDATE SET"+g(m(n,(a=>U(a)+"=excluded."+U(a))),i):s),m(o,(a=>a??null))),sa=a=>g(m(a,(()=>"?")),i),ia=JSON.parse,oa=F(),ra=F(),ca=(a,t,e,n,s,i,o,r={},c=[])=>{let l,d,p,E=0;J(oa,c,(()=>0)),J(ra,c,(()=>[]));const[f,g,m,v,T]=((a=1,t)=>a>1&&"merge"in t?[1,t.getMergeableContent,t.getTransactionMergeableChanges,([[a],[t]])=>!_(a)||!_(t),t.setDefaultContent]:2!=a?[0,t.getContent,t.getTransactionChanges,([a,t])=>!_(a)||!_(t),t.setContent]:0)(o,a),C=t=>{(f&&u(t?.[0])?1===t?.[2]?a.applyMergeableChanges:a.setMergeableContent:1===t?.[2]?a.applyChanges:a.setContent)(t)},N=async a=>(2!=E&&(E=1,await L((async()=>{try{C(await t())}catch(t){i?.(t),a&&T(a)}E=0}))),R),h=()=>(d&&(s(d),d=void 0),R),O=async a=>(1!=E&&(E=2,await L((async()=>{try{await e(g,a)}catch(a){i?.(a)}E=0}))),R),b=()=>(w(p,a.delListener),p=void 0,R),L=async(...a)=>(A(j(ra,c),...a),await(async()=>{if(!j(oa,c)){for(H(oa,c,1);!y((a=j(ra,c),l=a.shift()));)try{await l()}catch(a){i?.(a)}H(oa,c,0)}var a})(),R),R={load:N,startAutoLoad:async a=>(await h().load(a),d=n((async(a,t)=>{t||a?2!=E&&(E=1,C(t??a),E=0):await N()})),R),stopAutoLoad:h,isAutoLoading:()=>!y(d),save:O,startAutoSave:async()=>(await b().save(),p=a.addDidFinishTransactionListener((()=>{const a=m();v(a)&&O(a)})),R),stopAutoSave:b,isAutoSaving:()=>!y(p),schedule:L,getStore:()=>a,destroy:()=>h().stopAutoSave(),getStats:()=>({}),...r};return S(R)},la="store",ya=(a,t,e,n,s,[i],o,r,c,l)=>{const[y,w,d,u]=ea(t,o,s,l);return ca(a,(async()=>await u((async()=>(await y(),ia((await w(i,G))[k]?.[la]??"null"))))),(async a=>await u((async()=>{var t;await y(),await d(i,G,{[k]:{[la]:(t=a()??null,JSON.stringify(t,((a,t)=>t instanceof Map?O.fromEntries([...t]):t)))}},!0,!0)}))),e,n,s,1,{[c]:()=>r},r)},wa=(a,t,e,n,s,[i,o,[r,c,l]],w,d,u,p)=>{const[E,g,m,v]=ea(t,w,s,p),A=async(a,t)=>await f(B(o,(async([e,n,s,i],o)=>{t&&!I(a,o)||await m(e,n,a[o],s,i,t)}))),C=async(a,t)=>c?await m(l,G,{[k]:a},!0,!0,t):null;return ca(a,(async()=>await v((async()=>{await E();const a=await(async()=>D(T(await f(B(i,(async([a,t],e)=>[a,await g(e,t)]))),(a=>!_(a[1])))))(),t=await(async()=>r?(await g(l,G))[k]:{})();return _(a)&&y(t)?void 0:[a,t]}))),(async(a,t)=>await v((async()=>{if(await E(),y(t)){const[t,e]=a();await A(t),await C(e)}else await A(t[0],!0),await C(t[1],!0)}))),e,n,s,1,{[u]:()=>d},d)},da="json",ua="autoLoadIntervalSeconds",pa="storeTableName",Ea="rowIdColumnName",fa="tableId",ga="tableName",ma="deleteEmptyColumns",va="deleteEmptyTable",Ta={mode:da,[ua]:1},Aa={load:0,save:0,[ga]:n+"_values"},Ca=(a,t,e,n)=>{const s=F();return M(a,((a,i)=>{const o=p(P(x(t,d(a)?{[e]:a}:a)),0,$(t));y(o[0])||n(i,o[0])||H(s,i,o)})),s},Na="pragma_",ha="data_version",Oa="schema_version",ba=(a,t,e,s,i,o,r,c,y="getDb",w)=>{let u,E,f;const[g,m,v,T]=(a=>{const t=(a=>x(Ta,d(a)?{[pa]:a}:a??{}))(a),e=t[ua];if(t.mode==da){const{storeTableName:a=n}=t;return[1,e,[a],z(a)]}const{tables:{load:s={},save:i={}}={},values:o={}}=t,r=p(P(x(Aa,o)),0,$(Aa)),c=r[2],l=z(c);return[0,e,[Ca(s,{[fa]:null,[Ea]:G},fa,(a=>K(l,a)&&a==c)),Ca(i,{[ga]:null,[Ea]:G,[ma]:0,[va]:0},ga,((a,t)=>K(l,t)&&t==c)),r],l]})(t);return(g?ya:wa)(a,o?async(a,t)=>(o(a,t),await e(a,t)):e,(a=>{return[(t=async()=>{try{const[{d:t,s:n,c:s}]=await e(`SELECT ${ha} d,${Oa} s,TOTAL_CHANGES() c FROM ${Na}${ha} JOIN ${Na}${Oa}`);t==(u??=t)&&n==(E??=n)&&s==(f??=s)||(a(),u=t,E=n)}catch{}},n=m,t(),setInterval(t,1e3*n)),s((t=>T.has(t)?a():0))];var t,n}),(([a,t])=>{l(a),u=E=f=null,i(t)}),r,v,N(T),c,y,w)};a.createExpoSqliteNextPersister=(a,e,n,s,i)=>ba(a,n,(async(a,t=[])=>await e.getAllAsync(a,t)),(a=>t.addDatabaseChangeListener((({tableName:t})=>a(t)))),(a=>a.remove()),s,i,e)},"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("expo-sqlite/next")):"function"==typeof define&&define.amd?define(["exports","expo-sqlite/next"],t):t((a="undefined"!=typeof globalThis?globalThis:a||self).TinyBasePersisterExpoSqliteNext={},a["expo-sqlite/next"]);

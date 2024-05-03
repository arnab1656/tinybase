var a,t;a=this,t=function(a){"use strict";const t=a=>typeof a,e="tinybase",n="",s=",",i=t(n),o=(a,t)=>a.repeat(t),r=Promise,c=clearInterval,l=a=>null==a,y=(a,t,e)=>l(a)?e?.():t(a),w=a=>t(a)==i,u=a=>Array.isArray(a),d=(a,t,e)=>a.slice(t,e),p=a=>a.length,E=async a=>r.all(a),f=(a,t="")=>a.join(t),m=(a,t)=>a.map(t),g=a=>0==p(a),v=(a,t)=>a.filter(t),T=(a,...t)=>a.push(...t),h=(a,t)=>a?.has(t)??!1,C=a=>[...a?.values()??[]],A=(a,t)=>a?.delete(t),O=Object,N=a=>O.getPrototypeOf(a),b=O.entries,R=O.keys,S=O.freeze,L=(a=[])=>O.fromEntries(a),D=(...a)=>O.assign({},...a),I=(a,t)=>t in a,_=(a,t)=>m(b(a),(([a,e])=>t(e,a))),M=a=>O.values(a),P=a=>p(R(a)),$=a=>(a=>!l(a)&&y(N(a),(a=>a==O.prototype||l(N(a))),(()=>!0)))(a)&&0==P(a),F=a=>new Map(a),j=a=>[...a?.keys()??[]],x=(a,t)=>a?.get(t),k=(a,t)=>m([...a?.entries()??[]],(([a,e])=>t(e,a))),q=(a,t,e)=>l(e)?(A(a,t),a):a?.set(t,e),B=(a,t,e,n)=>(h(a,t)||q(a,t,e()),x(a,t)),W=(a,t,e,n=q)=>(_(t,((t,n)=>e(a,n,t))),((a,t)=>{((a,t)=>{a?.forEach(t)})(a,((a,e)=>t(e)))})(a,(e=>I(t,e)?0:n(a,e))),a),H="_",J="_id",Y=a=>`"${a.replace(/"/g,'""')}"`,G="SELECT",U=a=>new Set(u(a)||l(a)?a:[a]),V=(a,t)=>a?.add(t),z="TABLE",K="ALTER "+z,Q="DELETE FROM",X=G+"*FROM",Z="FROM pragma_table_",aa="WHERE",ta=(a,t,e,i)=>{const o=F();return[async()=>W(o,L(await E(m(await a("SELECT name "+Z+"list WHERE schema='main'AND(type='table'OR type='view')AND name IN("+na(t)+")ORDER BY name",t),(async({name:t})=>[t,L(m(await a(G+" name,type "+Z+"info(?)",[t]),(({name:a,type:t})=>[a,t])))])))),((a,t,e)=>q(o,t,W(B(o,t,F),e,((a,t,e)=>{e!=x(a,t)&&q(a,t,e)}),((a,t)=>q(a,t))))),((a,t)=>q(o,t))),async(t,e)=>((a,t)=>!l(x(x(o,a),t)))(t,e)?L(v(m(await a(X+Y(t)),(a=>{return[a[e],(t={...a},n=e,delete t[n],t)];var t,n})),(([a,t])=>!l(a)&&!$(t)))):{},async(t,e,r,c,y,w=!1)=>{const u=U();_(r??{},(a=>m(R(a??{}),(a=>V(u,a)))));const d=C(u);if(!w&&y&&g(d)&&h(o,t))return await a("DROP "+z+Y(t)),void q(o,t);if(g(d)||h(o,t)){const s=x(o,t),i=U(j(s));await E([...m(d,(async e=>{A(i,e)||(await a(K+Y(t)+"ADD"+Y(e)),q(s,e,n))})),...!w&&c?m(C(i),(async n=>{n!=e&&(await a(K+Y(t)+"DROP"+Y(n)),q(s,n))})):[]])}else await a("CREATE "+z+Y(t)+"("+Y(e)+` PRIMARY KEY ON CONFLICT REPLACE${f(m(d,(a=>s+Y(a))))});`),q(o,t,F([[e,n],...m(d,(a=>[a,n]))]));if(w)l(r)?await a(Q+Y(t)+aa+" 1"):await E(_(r,(async(n,s)=>{l(n)?await a(Q+Y(t)+aa+Y(e)+"=?",[s]):g(d)||await ea(a,t,e,R(n),[s,...M(n)],i)})));else if(g(d))h(o,t)&&await a(Q+Y(t)+aa+" 1");else{const n=v(j(x(o,t)),(a=>a!=e)),s=[],c=[];_(r??{},((a,t)=>{T(s,t,...m(n,(t=>a?.[t]))),T(c,t)})),await ea(a,t,e,n,s,i),await a(Q+Y(t)+aa+Y(e)+"NOT IN("+na(c)+")",c)}},async t=>{let n;await a("BEGIN");try{n=await t()}catch(a){e?.(a)}return await a("END"),n}]},ea=async(a,t,e,i,r,c=!0)=>await a("INSERT "+(c?n:"OR REPLACE ")+"INTO"+Y(t)+"("+Y(e)+f(m(i,(a=>s+Y(a))))+")VALUES"+d(o(`,(?${o(",?",p(i))})`,p(r)/(p(i)+1)),1)+(c?"ON CONFLICT("+Y(e)+")DO UPDATE SET"+f(m(i,(a=>Y(a)+"=excluded."+Y(a))),s):n),m(r,(a=>a??null))),na=a=>f(m(a,(()=>"?")),s),sa=JSON.parse,ia=F(),oa=F(),ra=(a,t,e,n,s,i,o,r={},c=[])=>{let w,d,p,E=0;B(ia,c,(()=>0)),B(oa,c,(()=>[]));const[f,m,g,v,h]=((a=1,t)=>a>1&&"merge"in t?[1,t.getMergeableContent,t.getTransactionMergeableChanges,([[a],[t]])=>!$(a)||!$(t),t.setDefaultContent]:2!=a?[0,t.getContent,t.getTransactionChanges,([a,t])=>!$(a)||!$(t),t.setContent]:0)(o,a),C=t=>{(f&&u(t?.[0])?1===t?.[2]?a.applyMergeableChanges:a.setMergeableContent:1===t?.[2]?a.applyChanges:a.setContent)(t)},A=async a=>(2!=E&&(E=1,await R((async()=>{try{C(await t())}catch(t){i?.(t),a&&h(a)}E=0}))),L),O=()=>(d&&(s(d),d=void 0),L),N=async a=>(1!=E&&(E=2,await R((async()=>{try{await e(m,a)}catch(a){i?.(a)}E=0}))),L),b=()=>(y(p,a.delListener),p=void 0,L),R=async(...a)=>(T(x(oa,c),...a),await(async()=>{if(!x(ia,c)){for(q(ia,c,1);!l((a=x(oa,c),w=a.shift()));)try{await w()}catch(a){i?.(a)}q(ia,c,0)}var a})(),L),L={load:A,startAutoLoad:async a=>(await O().load(a),d=n((async(a,t)=>{t||a?2!=E&&(E=1,C(t??a),E=0):await A()})),L),stopAutoLoad:O,isAutoLoading:()=>!l(d),save:N,startAutoSave:async()=>(await b().save(),p=a.addDidFinishTransactionListener((()=>{const a=g();v(a)&&N(a)})),L),stopAutoSave:b,isAutoSaving:()=>!l(p),schedule:R,getStore:()=>a,destroy:()=>O().stopAutoSave(),getStats:()=>({}),...r};return S(L)},ca="store",la=(a,t,e,n,s,[i],o,r,c,l)=>{const[y,w,u,d]=ta(t,o,s,l);return ra(a,(async()=>await d((async()=>(await y(),sa((await w(i,J))[H]?.[ca]??"null"))))),(async a=>await d((async()=>{var t;await y(),await u(i,J,{[H]:{[ca]:(t=a()??null,JSON.stringify(t,((a,t)=>t instanceof Map?O.fromEntries([...t]):t)))}},!0,!0)}))),e,n,s,1,{[c]:()=>r},r)},ya=(a,t,e,n,s,[i,o,[r,c,y]],w,u,d,p)=>{const[f,m,g,T]=ta(t,w,s,p),h=async(a,t)=>await E(k(o,(async([e,n,s,i],o)=>{t&&!I(a,o)||await g(e,n,a[o],s,i,t)}))),C=async(a,t)=>c?await g(y,J,{[H]:a},!0,!0,t):null;return ra(a,(async()=>await T((async()=>{await f();const a=await(async()=>L(v(await E(k(i,(async([a,t],e)=>[a,await m(e,t)]))),(a=>!$(a[1])))))(),t=await(async()=>r?(await m(y,J))[H]:{})();return $(a)&&l(t)?void 0:[a,t]}))),(async(a,t)=>await T((async()=>{if(await f(),l(t)){const[t,e]=a();await h(t),await C(e)}else await h(t[0],!0),await C(t[1],!0)}))),e,n,s,1,{[d]:()=>u},u)},wa="json",ua="autoLoadIntervalSeconds",da="storeTableName",pa="rowIdColumnName",Ea="tableId",fa="tableName",ma="deleteEmptyColumns",ga="deleteEmptyTable",va={mode:wa,[ua]:1},Ta={load:0,save:0,[fa]:e+"_values"},ha=(a,t,e,n)=>{const s=F();return _(a,((a,i)=>{const o=d(M(D(t,w(a)?{[e]:a}:a)),0,P(t));l(o[0])||n(i,o[0])||q(s,i,o)})),s},Ca="pragma_",Aa="data_version",Oa="schema_version",Na=(a,t,n,s,i,o,r,l,y="getDb",u)=>{let p,E,f;const[m,g,v,T]=(a=>{const t=(a=>D(va,w(a)?{[da]:a}:a??{}))(a),n=t[ua];if(t.mode==wa){const{storeTableName:a=e}=t;return[1,n,[a],U(a)]}const{tables:{load:s={},save:i={}}={},values:o={}}=t,r=d(M(D(Ta,o)),0,P(Ta)),c=r[2],l=U(c);return[0,n,[ha(s,{[Ea]:null,[pa]:J},Ea,(a=>V(l,a)&&a==c)),ha(i,{[fa]:null,[pa]:J,[ma]:0,[ga]:0},fa,((a,t)=>V(l,t)&&t==c)),r],l]})(t);return(m?la:ya)(a,o?async(a,t)=>(o(a,t),await n(a,t)):n,(a=>{return[(t=async()=>{try{const[{d:t,s:e,c:s}]=await n(`SELECT ${Aa} d,${Oa} s,TOTAL_CHANGES() c FROM ${Ca}${Aa} JOIN ${Ca}${Oa}`);t==(p??=t)&&e==(E??=e)&&s==(f??=s)||(a(),p=t,E=e)}catch{}},e=g,t(),setInterval(t,1e3*e)),s((t=>T.has(t)?a():0))];var t,e}),(([a,t])=>{c(a),p=E=f=null,i(t)}),r,v,C(T),l,y,u)};a.createSqliteWasmPersister=(a,t,e,n,s,i)=>Na(a,n,(async(a,t=[])=>e.exec(a,{bind:t,rowMode:"object",returnValue:"resultRows"}).map((a=>({...a})))),(a=>t.capi.sqlite3_update_hook(e,((t,e,n,s)=>a(s)),0)),(()=>t.capi.sqlite3_update_hook(e,(()=>0),0)),s,i,e)},"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((a="undefined"!=typeof globalThis?globalThis:a||self).TinyBasePersisterSqliteWasm={});

var t,e;t=this,e=function(t){"use strict";const e=t=>null==t,a=(t,a,n)=>e(t)?n?.():a(t),n=Object,s=t=>n.getPrototypeOf(t),o=n.entries,r=n.keys,i=n.freeze,c=(t,e)=>a(t,(t=>t[e])),d=(t,e)=>e in t,y=(t,e)=>(delete t[e],t),u=(t,e)=>((t,e)=>t.map(e))(o(t),(([t,a])=>e(a,t))),l=t=>r(t).length,g=t=>(t=>!e(t)&&a(s(t),(t=>t==n.prototype||e(s(t))),(()=>!0)))(t)&&0==l(t),p=t=>new Map(t),h=(t,e)=>t?.get(e),v=(t,a,n)=>{return e(n)?(s=t,o=a,s?.delete(o),t):t?.set(a,n);var s,o},f=(t,e,a,n)=>{var s,o;return s=t,o=e,s?.has(o)||v(t,e,a()),h(t,e)},w=p(),A=p(),L=(t,e)=>[t[e].t,t[e].v],b=(t,a,n,s)=>{const o=e(a)?t:((t,e,a)=>(d(t,e)||(t[e]={}),t[e]))(t,a);let r;return u(n,((t,e)=>{s(o,e,t)&&(r=1)})),u(o,((t,e)=>{d(n,e)||(y(o,e),r=1)})),!e(a)&&g(o)&&y(t,a),r};t.createAutomergePersister=(t,n,s="tinybase",o)=>(n.change((t=>t[s]={})),((t,n,s,o,r,c,d,y={},u=[])=>{let l,p,L,b=0;f(w,u,(()=>0)),f(A,u,(()=>[]));const[C,S,m,T,x]=((t,e)=>[0,e.getContent,e.getTransactionChanges,([t,e])=>!g(t)||!g(e),e.setContent])(0,t),M=async t=>(2!=b&&(b=1,await j.schedule((async()=>{await t(),b=0}))),j),P=e=>{var a;(C&&(a=e?.[0],Array.isArray(a))?1===e?.[2]?t.applyMergeableChanges:t.setMergeableContent:1===e?.[2]?t.applyChanges:t.setContent)(e)},j={load:async t=>await M((async()=>{try{P(await n())}catch(e){c?.(e),t&&x(t)}})),startAutoLoad:async t=>(await j.stopAutoLoad().load(t),p=o((async(t,e)=>{const a=e?.();await M((async()=>{try{P(a??t?.()??await n())}catch(t){c?.(t)}}))})),j),stopAutoLoad:()=>(p&&(r(p),p=void 0),j),isAutoLoading:()=>!e(p),save:async t=>(1!=b&&(b=2,await j.schedule((async()=>{try{await s(S,t)}catch(t){c?.(t)}b=0}))),j),startAutoSave:async()=>(await j.stopAutoSave().save(),L=t.addDidFinishTransactionListener((()=>{const t=m();T(t)&&j.save((()=>t))})),j),stopAutoSave:()=>(a(L,t.delListener),L=void 0,j),isAutoSaving:()=>!e(L),schedule:async(...t)=>(((t,...e)=>{t.push(...e)})(h(A,u),...t),await(async()=>{if(!h(w,u)){for(v(w,u,1);!e((t=h(A,u),l=t.shift()));)try{await l()}catch(t){c?.(t)}v(w,u,0)}var t})(),j),getStore:()=>t,destroy:()=>j.stopAutoLoad().stopAutoSave(),getStats:()=>({}),...y};return i(j)})(t,(async()=>{const t=await n.doc();return 2==l(t[s])?L(t,s):void 0}),(async(t,o)=>n.change((n=>((t,n,s,o)=>{((t,e)=>{g(t[e])&&(t[e]={t:{},v:{}})})(t,n);const[r,i]=L(t,n),d=()=>{l=1};let l=1;if(a(o?.(),(([t,n])=>{l=0,u(t,((t,n)=>l?0:e(t)?y(r,n):a(r[n],(n=>u(t,((t,s)=>l?0:e(t)?y(n,s):a(c(n,s),(a=>u(t,((t,n)=>e(t)?y(a,n):a[n]=t))),d)))),d))),u(n,((t,a)=>l?0:e(t)?y(i,a):i[a]=t))})),l){const[t,e]=s();b(r,void 0,t,((t,e,a)=>b(r,e,a,((t,e,a)=>b(t,e,a,((t,e,a)=>{if(c(t,e)!==a)return t[e]=a,1})))))),b(i,void 0,e,((t,e,a)=>{c(i,e)!==a&&(i[e]=a)}))}})(n,s,t,o)))),(t=>{const e=({doc:e})=>t((()=>L(e,s)));return n.on("change",e),e}),(t=>{n.removeListener("change",t)}),o,0,{getDocHandle:()=>n}))},"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).TinyBasePersisterAutomerge={});

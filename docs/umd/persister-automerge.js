var e,t;e=this,t=function(e){"use strict";const t=e=>null==e,a=(e,a,n)=>t(e)?n?.():a(e),n=Object,s=e=>n.getPrototypeOf(e),o=n.entries,r=n.keys,i=n.freeze,c=(e,t)=>a(e,(e=>e[t])),d=(e,t)=>t in e,g=(e,t)=>(delete e[t],e),y=(e,t)=>((e,t)=>e.map(t))(o(e),(([e,a])=>t(a,e))),l=e=>r(e).length,u=e=>(e=>!t(e)&&a(s(e),(e=>e==n.prototype||t(s(e))),(()=>!0)))(e)&&0==l(e),f=e=>new Map(e),h=(e,t)=>e?.get(t),p=(e,a,n)=>{return t(n)?(s=e,o=a,s?.delete(o),e):e?.set(a,n);var s,o},v=(e,t,a,n)=>{var s,o;return s=e,o=t,s?.has(o)||p(e,t,a()),h(e,t)},w=f(),A=f(),C=(e,t)=>[e[t].t,e[t].v],b=(e,a,n,s)=>{const o=t(a)?e:((e,t,a)=>(d(e,t)||(e[t]={}),e[t]))(e,a);let r;return y(n,((e,t)=>{s(o,t,e)&&(r=1)})),y(o,((e,t)=>{d(n,t)||(g(o,t),r=1)})),!t(a)&&u(o)&&g(e,a),r};e.createAutomergePersister=(e,n,s="tinybase",o)=>(n.change((e=>e[s]={})),((e,n,s,o,r,c,d,g={},y=[])=>{let l,f,C,b=0;v(w,y,(()=>0)),v(A,y,(()=>[]));const[m,L,S,T,M]=((e=1,t)=>e>1&&"merge"in t?[1,t.getMergeableContent,t.getTransactionMergeableChanges,([[e],[t]])=>!u(e)||!u(t),t.setDefaultContent]:2!=e?[0,t.getContent,t.getTransactionChanges,([e,t])=>!u(e)||!u(t),t.setContent]:0)(d,e),x=t=>{var a;(m&&(a=t?.[0],Array.isArray(a))?1===t?.[2]?e.applyMergeableChanges:e.setMergeableContent:1===t?.[2]?e.applyChanges:e.setContent)(t)},D=async e=>(2!=b&&(b=1,await k((async()=>{try{x(await n())}catch(t){c?.(t),e&&M(e)}b=0}))),z),P=()=>(f&&(r(f),f=void 0),z),j=async e=>(1!=b&&(b=2,await k((async()=>{try{await s(L,e)}catch(e){c?.(e)}b=0}))),z),O=()=>(a(C,e.delListener),C=void 0,z),k=async(...e)=>(((e,...t)=>{e.push(...t)})(h(A,y),...e),await(async()=>{if(!h(w,y)){for(p(w,y,1);!t((e=h(A,y),l=e.shift()));)try{await l()}catch(e){c?.(e)}p(w,y,0)}var e})(),z),z={load:D,startAutoLoad:async e=>(await P().load(e),f=o((async(e,t)=>{t||e?2!=b&&(b=1,x(t??e),b=0):await D()})),z),stopAutoLoad:P,isAutoLoading:()=>!t(f),save:j,startAutoSave:async()=>(await O().save(),C=e.addDidFinishTransactionListener((()=>{const e=S();T(e)&&j(e)})),z),stopAutoSave:O,isAutoSaving:()=>!t(C),schedule:k,getStore:()=>e,destroy:()=>P().stopAutoSave(),getStats:()=>({}),...g};return i(z)})(e,(async()=>{const e=await n.doc();return 2==l(e[s])?C(e,s):void 0}),(async(e,o)=>n.change((n=>((e,n,s,o)=>{((e,t)=>{u(e[t])&&(e[t]={t:{},v:{}})})(e,n);const[r,i]=C(e,n),d=()=>{l=1};let l=1;if(a(o,(([e,n])=>{l=0,y(e,((e,n)=>l?0:t(e)?g(r,n):a(r[n],(n=>y(e,((e,s)=>l?0:t(e)?g(n,s):a(c(n,s),(a=>y(e,((e,n)=>t(e)?g(a,n):a[n]=e))),d)))),d))),y(n,((e,a)=>l?0:t(e)?g(i,a):i[a]=e))})),l){const[e,t]=s();b(r,void 0,e,((e,t,a)=>b(r,t,a,((e,t,a)=>b(e,t,a,((e,t,a)=>{if(c(e,t)!==a)return e[t]=a,1})))))),b(i,void 0,t,((e,t,a)=>{c(i,t)!==a&&(i[t]=a)}))}})(n,s,e,o)))),(e=>{const t=({doc:t})=>e(C(t,s));return n.on("change",t),t}),(e=>{n.removeListener("change",e)}),o,1,{getDocHandle:()=>n}))},"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).TinyBasePersisterAutomerge={});

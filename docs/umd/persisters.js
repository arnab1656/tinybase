var e,t;e=this,t=function(e){"use strict";const t=e=>null==e,a=(e,a,s)=>t(e)?s?.():a(e),s=Object,n=e=>s.getPrototypeOf(e),o=s.keys,r=s.freeze,i=e=>(e=>!t(e)&&a(n(e),(e=>e==s.prototype||t(n(e))),(()=>!0)))(e)&&0==(e=>o(e).length)(e),c=e=>new Map(e),y=(e,t)=>e?.get(t),d=(e,a,s)=>{return t(s)?(n=e,o=a,n?.delete(o),e):e?.set(a,s);var n,o},g=(e,t,a,s)=>{var n,o;return n=e,o=t,n?.has(o)||d(e,t,a()),y(e,t)},l=c(),u=c();e.createCustomPersister=(e,s,n,o,c,p,f,h={},v=[])=>{let C,w,A,b=0;g(l,v,(()=>0)),g(u,v,(()=>[]));const[S,T,L,M,m]=((e=1,t)=>e>1&&"merge"in t?[1,t.getMergeableContent,t.getTransactionMergeableChanges,([[e],[t]])=>!i(e)||!i(t),t.setDefaultContent]:2!=e?[0,t.getContent,t.getTransactionChanges,([e,t])=>!i(e)||!i(t),t.setContent]:0)(f,e),x=t=>{var a;(S&&(a=t?.[0],Array.isArray(a))?1===t?.[2]?e.applyMergeableChanges:e.setMergeableContent:1===t?.[2]?e.applyChanges:e.setContent)(t)},P=async e=>(2!=b&&(b=1,await k((async()=>{try{x(await s())}catch(t){p?.(t),e&&m(e)}b=0}))),z),j=()=>(w&&(c(w),w=void 0),z),D=async e=>(1!=b&&(b=2,await k((async()=>{try{await n(T,e)}catch(e){p?.(e)}b=0}))),z),O=()=>(a(A,e.delListener),A=void 0,z),k=async(...e)=>(((e,...t)=>{e.push(...t)})(y(u,v),...e),await(async()=>{if(!y(l,v)){for(d(l,v,1);!t((e=y(u,v),C=e.shift()));)try{await C()}catch(e){p?.(e)}d(l,v,0)}var e})(),z),z={load:P,startAutoLoad:async e=>(await j().load(e),w=o((async(e,t)=>{t||e?2!=b&&(b=1,x(t??e),b=0):await P()})),z),stopAutoLoad:j,isAutoLoading:()=>!t(w),save:D,startAutoSave:async()=>(await O().save(),A=e.addDidFinishTransactionListener((()=>{const e=L();M(e)&&D(e)})),z),stopAutoSave:O,isAutoSaving:()=>!t(A),schedule:k,getStore:()=>e,destroy:()=>j().stopAutoSave(),getStats:()=>({}),...h};return r(z)}},"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).TinyBasePersisters={});

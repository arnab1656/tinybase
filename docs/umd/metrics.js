var e,t;e=this,t=function(e){"use strict";const t=e=>typeof e,n="",r=t(n),s=t(t),i=Math.max,o=Math.min,a=isFinite,c=e=>null==e,d=(e,t,n)=>c(e)?n?.():t(e),l=e=>Array.isArray(e),u=e=>e.length,f=()=>{},h=(e,t)=>e.forEach(t),v=e=>M(e,((e,t)=>e+t),0),M=(e,t,n)=>e.reduce(t,n),g=(e,...t)=>e.push(...t),p=Object.freeze,y=e=>e?.size??0,m=(e,t)=>e?.has(t)??!1,L=e=>c(e)||0==y(e),b=e=>[...e?.values()??[]],w=e=>e.clear(),T=(e,t)=>e?.forEach(t),x=(e,t)=>e?.delete(t),I=e=>new Map(e),E=(e,t)=>e?.get(t),R=(e,t)=>T(e,((e,n)=>t(n,e))),S=(e,t,n)=>c(n)?(x(e,t),e):e?.set(t,n),j=(e,t,n)=>(m(e,t)||S(e,t,n()),E(e,t)),k=(e,t,n,r,s=0)=>d((n?j:E)(e,t[s],s>u(t)-2?n:I),(i=>{if(s>u(t)-2)return r?.(i)&&S(e,t[s]),i;const o=k(i,t,n,r,s+1);return L(i)&&S(e,t[s]),o})),z=I([["avg",[(e,t)=>v(e)/t,(e,t,n)=>e+(t-e)/(n+1),(e,t,n)=>e+(e-t)/(n-1),(e,t,n,r)=>e+(t-n)/r]],["max",[e=>i(...e),(e,t)=>i(t,e),(e,t)=>t==e?void 0:e,(e,t,n)=>n==e?void 0:i(t,e)]],["min",[e=>o(...e),(e,t)=>o(t,e),(e,t)=>t==e?void 0:e,(e,t,n)=>n==e?void 0:o(t,e)]],["sum",[e=>v(e),(e,t)=>e+t,(e,t)=>e-t,(e,t,n)=>e-n+t]]]),A=e=>new Set(l(e)||c(e)?e:[e]),D=(e,t)=>e?.add(t),N=/^\d+$/,B=((e,i)=>{const o=new WeakMap;return e=>(o.has(e)||o.set(e,(e=>{const i=I(),[o,v,M]=(e=>{let t;const[r,s]=(()=>{const e=[];let t=0;return[r=>(r?e.shift():null)??n+t++,t=>{N.test(t)&&u(e)<1e3&&g(e,t)}]})(),i=I();return[(e,s,o,a=[],c=(()=>[]))=>{t??=P;const d=r(1);return S(i,d,[e,s,o,a,c]),D(k(s,o??[n],A),d),d},(e,r,...s)=>h(((e,t=[n])=>{const r=[],s=(e,n)=>n==u(t)?g(r,e):null===t[n]?T(e,(e=>s(e,n+1))):h([t[n],null],(t=>s(E(e,t),n+1)));return s(e,0),r})(e,r),(e=>T(e,(e=>E(i,e)[0](t,...r??[],...s))))),e=>d(E(i,e),(([,t,r])=>(k(t,r??[n],void 0,(t=>(x(t,e),L(t)?1:0))),S(i,e),s(e),r))),e=>d(E(i,e),(([e,,n=[],r,s])=>{const i=(...o)=>{const a=u(o);a==u(n)?e(t,...o,...s(o)):c(n[a])?h(r[a]?.(...o)??[],(e=>i(...o,e))):i(...o,n[a])};i()}))]})(),[B,C,F,O,W,$,q,,G,H,J,K]=((e,t,r,s,i)=>{const o=e.hasRow,a=I(),f=I(),v=I(),M=I(),g=I(),p=I(),y=(t,n,...r)=>{const s=j(p,t,A);return h(r,(t=>D(s,t)&&n&&e.callListener(t))),r},k=(t,...n)=>d(E(p,t),(r=>{h(0==u(n)?b(r):n,(t=>{e.delListener(t),x(r,t)})),L(r)&&S(p,t)})),z=(e,n)=>{S(a,e,n),m(f,e)||(S(f,e,t()),S(M,e,I()),S(g,e,I()),i(v))},N=e=>{S(a,e),S(f,e),S(M,e),S(g,e),k(e),i(v)};return[()=>e,()=>{return e=a,[...e?.keys()??[]];var e},e=>R(f,e),e=>m(f,e),e=>E(a,e),e=>E(f,e),(e,t)=>S(f,e,t),z,(t,r,s,i,a)=>{z(t,r);const d=I(),f=I(),v=E(M,t),p=E(g,t),L=t=>{const s=n=>e.getCell(r,t,n),h=E(v,t),M=o(r,t)?(g=i(s,t),isNaN(g)||c(g)||!0===g||!1===g||g===n?void 0:1*g):void 0;var g,y,m,L;if(h===M||l(h)&&l(M)&&(m=M,u(y=h)===u(m)&&(L=(e,t)=>m[t]===e,y.every(L)))||S(d,t,[h,M]),!c(a)){const e=E(p,t),n=o(r,t)?a(s,t):void 0;e!=n&&S(f,t,n)}},b=e=>{s((()=>{T(d,(([,e],t)=>S(v,t,e))),T(f,((e,t)=>S(p,t,e)))}),d,f,v,p,e),w(d),w(f)};R(v,L),e.hasTable(r)&&h(e.getRowIds(r),(e=>{m(v,e)||L(e)})),b(!0),k(t),y(t,0,e.addRowListener(r,null,((e,t,n)=>L(n))),e.addTableListener(r,(()=>b())))},N,e=>s(e,v),()=>R(p,N),y,k]})(e,f,0,o,v),P={setMetricDefinition:(e,n,o,d,l,u,f)=>{const h=t(o)==s?[o,l,u,f]:E(z,o)??E(z,"sum");return G(e,n,((t,n,r,s,o,d)=>{const l=$(e),u=y(s);d||=c(l),t();let f=((e,t,n,r,s,i=!1)=>{if(L(n))return;const[o,a,d,l]=s;return i||=c(e),T(r,(([n,r])=>{i||(e=c(n)?a?.(e,r,t++):c(r)?d?.(e,n,t--):l?.(e,r,n,t),i||=c(e))})),i?o(b(n),y(n)):e})(l,u,s,n,h,d);a(f)||(f=void 0),f!=l&&(q(e,f),v(i,[e],f,l))}),t(M=d)==r?e=>e(M):M??(()=>1)),P;var M},delMetricDefinition:e=>(H(e),P),getStore:B,getMetricIds:C,forEachMetric:F,hasMetric:O,getTableId:W,getMetric:$,addMetricIdsListener:J,addMetricListener:(e,t)=>o(t,i,[e]),delListener:e=>(M(e),P),destroy:K,getListenerStats:()=>({})};return p(P)})(e)),o.get(e))})();e.createMetrics=B},"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).TinyBaseMetrics={});

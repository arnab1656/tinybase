var e,t;e=this,t=function(e){"use strict";const t=e=>typeof e,s="",n=t(s),a=t(!0),o=t(0),r=t(t),l="type",i="default",c="Listener",d="Result",u="add",g="Has",h="Ids",f="Table",b=f+"s",w=f+h,C="Row",L=C+"Count",p=C+h,y="Sorted"+C+h,v="Cell",T=v+h,S="Value",R=S+"s",I=S+h,M=e=>s+e,m=(e,t)=>e.startsWith(t),V=(e,t)=>e.endsWith(t),D=Promise,E=Math.max,H=Math.min,A=isFinite,k=e=>null==e,x=(e,t,s)=>k(e)?s?.():t(e),J=e=>e==n||e==a,F=e=>t(e)==n,Q=e=>t(e)==r,z=e=>Array.isArray(e),N=(e,t,s)=>e.slice(t,s),P=e=>e.length,O=()=>{},W=(e,t)=>e.includes(t),j=(e,t)=>e.every(t),B=(e,t)=>P(e)===P(t)&&j(e,((e,s)=>t[s]===e)),U=(e,t)=>j(e,((s,n)=>0==n||t(e[n-1],s)<=0)),$=(e,t)=>e.sort(t),_=(e,t)=>e.forEach(t),q=(e,t)=>e.map(t),G=e=>X(e,((e,t)=>e+t),0),K=e=>0==P(e),X=(e,t,s)=>e.reduce(t,s),Y=(e,...t)=>e.push(...t),Z=e=>e.pop(),ee=e=>e.shift(),te=Object,se=e=>te.getPrototypeOf(e),ne=te.entries,ae=te.isFrozen,oe=e=>!k(e)&&x(se(e),(e=>e==te.prototype||k(se(e))),(()=>!0)),re=te.keys,le=te.freeze,ie=(e=[])=>te.fromEntries(e),ce=(e,t)=>t in e,de=(e,t)=>(delete e[t],e),ue=(e,t)=>_(ne(e),(([e,s])=>t(s,e))),ge=(e,t)=>q(ne(e),(([e,s])=>t(s,e))),he=e=>oe(e)&&0==(e=>P(re(e)))(e),fe=(e,t,s)=>(ce(e,t)||(e[t]=s()),e[t]),be=(e,t,s,n=0)=>k(e)||!oe(e)||!n&&he(e)||ae(e)?(s?.(),!1):(ge(e,((s,n)=>{t(s,n)||de(e,n)})),!!n||!he(e)),we=e=>e?.size??0,Ce=(e,t)=>e?.has(t)??!1,Le=e=>k(e)||0==we(e),pe=e=>[...e?.values()??[]],ye=e=>e.clear(),ve=(e,t)=>e?.forEach(t),Te=(e,t)=>e?.delete(t),Se=e=>new Map(e),Re=e=>[...e?.keys()??[]],Ie=(e,t)=>e?.get(t),Me=(e,t)=>ve(e,((e,s)=>t(s,e))),me=(e,t,s)=>k(s)?(Te(e,t),e):e?.set(t,s),Ve=(e,t,s,n)=>(Ce(e,t)?n?.(Ie(e,t)):me(e,t,s()),Ie(e,t)),De=(e,t,s,n=me)=>(ge(t,((t,n)=>s(e,n,t))),Me(e,(s=>ce(t,s)?0:n(e,s))),e),Ee=(e,t,s,n)=>{const a={};return ve(e,((e,o)=>{if(!s?.(e,o)){const s=t?t(e,o):e;!n?.(s)&&(a[o]=s)}})),a},He=(e,t,s)=>Ee(e,(e=>Ee(e,t,s)),Le,he),Ae=(e,t,s)=>Ee(e,(e=>He(e,t,s)),Le,he),ke=(e,t)=>{const s=Se();return ve(e,((e,n)=>s.set(n,t?.(e)??e))),s},xe=e=>ke(e,ke),Je=e=>ke(e,xe),Fe=(e,t,s,n,a=0)=>x((s?Ve:Ie)(e,t[a],a>P(t)-2?s:Se),(o=>{if(a>P(t)-2)return n?.(o)&&me(e,t[a]),o;const r=Fe(o,t,s,n,a+1);return Le(o)&&me(e,t[a]),r})),Qe=e=>{const s=t(e);return J(s)||s==o&&A(e)?s:void 0},ze=e=>k(e)||!k(Qe(e)),Ne=(e,t,s,n,a)=>k(a)?e.delCell(t,s,n,!0):e.setCell(t,s,n,a),Pe=(e,t,s)=>k(s)?e.delValue(t):e.setValue(t,s),Oe=e=>new Set(z(e)||k(e)?e:[e]),We=(e,t)=>e?.add(t),je=(e,t,s,n,a)=>{const o=e.hasRow,r=Se(),l=Se(),i=Se(),c=Se(),d=Se(),u=Se(),g=(t,s,...n)=>{const a=Ve(u,t,Oe);return _(n,(t=>We(a,t)&&s&&e.callListener(t))),n},h=(t,...s)=>x(Ie(u,t),(n=>{_(K(s)?pe(n):s,(t=>{e.delListener(t),Te(n,t)})),Le(n)&&me(u,t)})),f=(e,s)=>{me(r,e,s),Ce(l,e)||(me(l,e,t()),me(c,e,Se()),me(d,e,Se()),a(i))},b=e=>{me(r,e),me(l,e),me(c,e),me(d,e),h(e),a(i)};return[()=>e,()=>Re(r),e=>Me(l,e),e=>Ce(l,e),e=>Ie(r,e),e=>Ie(l,e),(e,t)=>me(l,e,t),f,(t,n,a,r,l)=>{f(t,n);const i=Se(),u=Se(),b=Ie(c,t),w=Ie(d,t),C=t=>{const a=s=>e.getCell(n,t,s),c=Ie(b,t),d=o(n,t)?s(r(a,t)):void 0;if(c===d||z(c)&&z(d)&&B(c,d)||me(i,t,[c,d]),!k(l)){const e=Ie(w,t),s=o(n,t)?l(a,t):void 0;e!=s&&me(u,t,s)}},L=e=>{a((()=>{ve(i,(([,e],t)=>me(b,t,e))),ve(u,((e,t)=>me(w,t,e)))}),i,u,b,w,e),ye(i),ye(u)};Me(b,C),e.hasTable(n)&&_(e.getRowIds(n),(e=>{Ce(b,e)||C(e)})),L(!0),h(t),g(t,0,e.addRowListener(n,null,((e,t,s)=>C(s))),e.addTableListener(n,(()=>L())))},b,e=>n(e,i),()=>Me(u,b),g,h]},Be=(e,t)=>F(e)?t=>t(e):e??(()=>t??s),Ue=(e,t)=>{const s=new WeakMap;return n=>{s.has(n)||s.set(n,e(n));const a=s.get(n);return t?.(a),a}},$e=/^\d+$/,_e=()=>{const e=[];let t=0;return[n=>(n?ee(e):null)??s+t++,t=>{$e.test(t)&&P(e)<1e3&&Y(e,t)}]},qe=e=>{let t;const[n,a]=_e(),o=Se();return[(a,r,l,i=[],c=(()=>[]))=>{t??=e();const d=n(1);return me(o,d,[a,r,l,i,c]),We(Fe(r,l??[s],Oe),d),d},(e,n,...a)=>_(((e,t=[s])=>{const n=[],a=(e,s)=>s==P(t)?Y(n,e):null===t[s]?ve(e,(e=>a(e,s+1))):_([t[s],null],(t=>a(Ie(e,t),s+1)));return a(e,0),n})(e,n),(e=>ve(e,(e=>Ie(o,e)[0](t,...n??[],...a))))),e=>x(Ie(o,e),(([,t,n])=>(Fe(t,n??[s],void 0,(t=>(Te(t,e),Le(t)?1:0))),me(o,e),a(e),n))),e=>x(Ie(o,e),(([e,,s=[],n,a])=>{const o=(...r)=>{const l=P(r);l==P(s)?e(t,...r,...a(r)):k(s[l])?_(n[l]?.(...r)??[],(e=>o(...r,e))):o(...r,s[l])};o()}))]},Ge=Ue((e=>{let t,n,a,o=100,r=Se(),l=Se(),i=1;const c=Se(),d=Se(),[u,g,h]=qe((()=>J)),f=Se(),b=Se(),w=[],C=[],L=(t,s)=>{i=0,e.transaction((()=>{const[n,a]=Ie(f,s);ve(n,((s,n)=>ve(s,((s,a)=>ve(s,((s,o)=>Ne(e,n,a,o,s[t]))))))),ve(a,((s,n)=>Pe(e,n,s[t])))})),i=1},p=e=>{me(f,e),me(b,e),g(d,[e])},y=(e,t)=>_(((e,t)=>e.splice(0,t))(e,t??P(e)),p),v=()=>y(w,P(w)-o),T=()=>x(t,(()=>{Y(w,t),v(),y(C),t=void 0,a=1})),S=()=>{t=Z(w),a=1};let R,I;const M=(e=s)=>(k(t)&&(t=s+n++,me(f,t,[r,l]),H(t,e),r=Se(),l=Se(),a=1),t),m=()=>{K(w)||(((e,...t)=>{e.unshift(...t)})(C,M()),L(0,t),t=Z(w),a=1)},V=()=>{K(C)||(Y(w,t),t=ee(C),L(1,t),a=1)},D=()=>{a&&(g(c),a=0)},E=e=>{const t=M(e);return D(),t},H=(e,t)=>(A(e)&&Ie(b,e)!==t&&(me(b,e,t),g(d,[e])),J),A=e=>Ce(f,e),J={setSize:e=>(o=e,v(),J),addCheckpoint:E,setCheckpoint:H,getStore:()=>e,getCheckpointIds:()=>[[...w],t,[...C]],forEachCheckpoint:e=>Me(b,e),hasCheckpoint:A,getCheckpoint:e=>Ie(b,e),goBackward:()=>(m(),D(),J),goForward:()=>(V(),D(),J),goTo:e=>{const s=W(w,e)?m:W(C,e)?V:null;for(;!k(s)&&e!=t;)s();return D(),J},addCheckpointIdsListener:e=>u(e,c),addCheckpointListener:(e,t)=>u(t,d,[e]),delListener:e=>(h(e),J),clear:()=>(y(w),y(C),k(t)||p(t),t=void 0,n=0,E(),J),clearForward:()=>(K(C)||(y(C),g(c)),J),destroy:()=>{e.delListener(R),e.delListener(I)},getListenerStats:()=>({}),_registerListeners:()=>{R=e.addCellListener(null,null,null,((e,t,s,n,a,o)=>{if(i){T();const e=Ve(r,t,Se),l=Ve(e,s,Se),i=Ve(l,n,(()=>[o,void 0]));i[1]=a,i[0]===a&&Le(me(l,n))&&Le(me(e,s))&&Le(me(r,t))&&S(),D()}})),I=e.addValueListener(null,((e,t,s,n)=>{if(i){T();const e=Ve(l,t,(()=>[n,void 0]));e[1]=s,e[0]===s&&Le(me(l,t))&&S(),D()}}))}};return le(J.clear())}),(e=>e._registerListeners())),Ke="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".split(s),Xe=Se(q(Ke,((e,t)=>[e,t]))),Ye=e=>Ke[63&e],Ze=(e,t)=>Ie(Xe,e[t])??0,et=(e,t)=>(e??0)<(t??0)?-1:1,tt=(e=16)=>X(crypto.getRandomValues(new Uint8Array(e)),((e,t)=>e+Ye(t)),""),st=Ue((e=>{const t=Se(),n=Se(),[a,o,r]=qe((()=>p)),[l,i,c,d,u,g,h,,f,b,w,C]=je(e,Se,(e=>k(e)?s:z(e)?q(e,M):M(e)),a,o),L=(t,s,n)=>{const a=u(t);ve(n,((t,n)=>s(n,(s=>ve(t,(t=>s(t,(s=>e.forEachCell(a,t,s)))))))))},p={setIndexDefinition:(e,s,a,r,l,i=et)=>{const c=k(l)?void 0:([e],[t])=>l(e,t);return f(e,s,((s,a,l,d,u,f)=>{let b=0;const w=Oe(),C=Oe(),L=g(e);if(ve(a,(([e,t],s)=>{const n=Oe(e),a=Oe(t);ve(n,(e=>Te(a,e)?Te(n,e):0)),ve(n,(e=>{We(w,e),x(Ie(L,e),(t=>{Te(t,s),Le(t)&&(me(L,e),b=1)}))})),ve(a,(e=>{We(w,e),Ce(L,e)||(me(L,e,Oe()),b=1),We(Ie(L,e),s),k(r)||We(C,e)}))})),s(),Le(u)||(f?Me(L,(e=>We(C,e))):Me(l,(e=>x(Ie(d,e),(e=>We(C,e))))),ve(C,(e=>{const t=(t,s)=>i(Ie(u,t),Ie(u,s),e),s=[...Ie(L,e)];U(s,t)||(me(L,e,Oe($(s,t))),We(w,e))}))),(b||f)&&!k(c)){const t=[...L];U(t,c)||(h(e,Se($(t,c))),b=1)}b&&o(t,[e]),ve(w,(t=>o(n,[e,t])))}),Be(a),x(r,Be)),p},delIndexDefinition:e=>(b(e),p),getStore:l,getIndexIds:i,forEachIndex:e=>c(((t,s)=>e(t,(e=>L(t,e,s))))),forEachSlice:(e,t)=>L(e,t,g(e)),hasIndex:d,hasSlice:(e,t)=>Ce(g(e),t),getTableId:u,getSliceIds:e=>Re(g(e)),getSliceRowIds:(e,t)=>pe(Ie(g(e),t)),addIndexIdsListener:w,addSliceIdsListener:(e,s)=>a(s,t,[e]),addSliceRowIdsListener:(e,t,s)=>a(s,n,[e,t]),delListener:e=>(r(e),p),destroy:C,getListenerStats:()=>({})};return le(p)})),nt=Se([["avg",[(e,t)=>G(e)/t,(e,t,s)=>e+(t-e)/(s+1),(e,t,s)=>e+(e-t)/(s-1),(e,t,s,n)=>e+(t-s)/n]],["max",[e=>E(...e),(e,t)=>E(t,e),(e,t)=>t==e?void 0:e,(e,t,s)=>s==e?void 0:E(t,e)]],["min",[e=>H(...e),(e,t)=>H(t,e),(e,t)=>t==e?void 0:e,(e,t,s)=>s==e?void 0:H(t,e)]],["sum",[e=>G(e),(e,t)=>e+t,(e,t)=>e-t,(e,t,s)=>e-s+t]]]),at=(e,t,s,n,a,o=!1)=>{if(Le(s))return;const[r,l,i,c]=a;return o||=k(e),ve(n,(([s,n])=>{o||(e=k(s)?l?.(e,n,t++):k(n)?i?.(e,s,t--):c?.(e,n,s,t),o||=k(e))})),o?r(pe(s),we(s)):e},ot=Ue((e=>{const t=Se(),[n,a,o]=qe((()=>C)),[r,l,i,c,d,u,g,,h,f,b,w]=je(e,O,(e=>isNaN(e)||k(e)||!0===e||!1===e||e===s?void 0:1*e),n,a),C={setMetricDefinition:(e,s,n,o,r,l,i)=>{const c=Q(n)?[n,r,l,i]:Ie(nt,n)??Ie(nt,"sum");return h(e,s,((s,n,o,r,l,i)=>{const d=u(e),h=we(r);i||=k(d),s();let f=at(d,h,r,n,c,i);A(f)||(f=void 0),f!=d&&(g(e,f),a(t,[e],f,d))}),Be(o,1)),C},delMetricDefinition:e=>(f(e),C),getStore:r,getMetricIds:l,forEachMetric:i,hasMetric:c,getTableId:d,getMetric:u,addMetricIdsListener:b,addMetricListener:(e,s)=>n(s,t,[e]),delListener:e=>(o(e),C),destroy:w,getListenerStats:()=>({})};return le(C)})),rt=Se(),lt=Se(),it=(e,t,s,n,a,o,r,l={},i=[])=>{let c,d,u,g=0;Ve(rt,i,(()=>0)),Ve(lt,i,(()=>[]));const[h,f,b,w,C]=((e=1,t)=>e>1&&"merge"in t?[1,t.getMergeableContent,t.getTransactionMergeableChanges,([[e],[t]])=>!he(e)||!he(t),t.setDefaultContent]:2!=e?[0,t.getContent,t.getTransactionChanges,([e,t])=>!he(e)||!he(t),t.setContent]:0)(r,e),L=t=>{(h&&z(t?.[0])?1===t?.[2]?e.applyMergeableChanges:e.setMergeableContent:1===t?.[2]?e.applyChanges:e.setContent)(t)},p=async e=>(2!=g&&(g=1,await S((async()=>{try{L(await t())}catch(t){o?.(t),e&&C(e)}g=0}))),R),y=()=>(d&&(a(d),d=void 0),R),v=async e=>(1!=g&&(g=2,await S((async()=>{try{await s(f,e)}catch(e){o?.(e)}g=0}))),R),T=()=>(x(u,e.delListener),u=void 0,R),S=async(...e)=>(Y(Ie(lt,i),...e),await(async()=>{if(!Ie(rt,i)){for(me(rt,i,1);!k(c=ee(Ie(lt,i)));)try{await c()}catch(e){o?.(e)}me(rt,i,0)}})(),R),R={load:p,startAutoLoad:async e=>(await y().load(e),d=n((async(e,t)=>{t||e?2!=g&&(g=1,L(t??e),g=0):await p()})),R),stopAutoLoad:y,isAutoLoading:()=>!k(d),save:v,startAutoSave:async()=>(await T().save(),u=e.addDidFinishTransactionListener((()=>{const e=b();w(e)&&v(e)})),R),stopAutoSave:T,isAutoSaving:()=>!k(u),schedule:S,getStore:()=>e,destroy:()=>y().stopAutoSave(),getStats:()=>({}),...l};return le(R)},ct=new globalThis.TextEncoder,dt=e=>{let t=2166136261;return _(ct.encode(e),(e=>{t^=e,t+=(t<<1)+(t<<4)+(t<<7)+(t<<8)+(t<<24)})),t>>>0},ut=([e,t,s])=>[e,t,s],gt=([e,t])=>ht(e,t),ht=(e,t)=>t?[e,t]:[e],ft=e=>e[2],bt=(e,t)=>dt(e+":"+t),wt=(e,t)=>t>e?(e?dt(e):0)^dt(t):0,Ct=(e,t)=>((e??"")>(t??"")?e:t)??"",Lt=(e,t,s)=>{e[2]=t>>>0,s>e[1]&&(e[1]=s)},pt=(e=s)=>ht(ie(),e),yt=(e=s)=>[Se(),e,0],vt=([e,t,s],n=ut)=>[Ee(e,n),t,s],Tt=([e,t],s=gt)=>ht(Ee(e,s),t),St=(e,s)=>z(e)&&3==P(e)&&F(e[1])&&t(e[2])==o&&A(e[2])&&s(e[0]),Rt=Ue((e=>{const t=e.createStore,n=t(),a=t(),o=Se(),{addListener:r,callListeners:l,delListener:i}=a,[g,h,b,w,S,,,R,,I,M,m,V,D]=je(e,(()=>!0),O,r,l),E=(e,t,...s)=>_(s,(s=>We(Ve(Ve(o,t,Se),e,Oe),s))),H=e=>{x(Ie(o,e),(e=>{Me(e,((e,t)=>ve(t,(t=>e.delListener(t))))),ye(e)})),_([a,n],(t=>t.delTable(e)))},A=(e,t,s)=>E(t,e,t.addStartTransactionListener(s.startTransaction),t.addDidFinishTransactionListener((()=>s.finishTransaction()))),J={setQueryDefinition:(t,o,r)=>{R(t,o),H(t);const l=[],i=[[null,[o,null,null,[],Se()]]],c=[],d=[],u=[];r({select:(e,t)=>{const n=Q(e)?[P(l)+s,e]:[k(t)?e:t,s=>s(e,t)];return Y(l,n),{as:e=>n[0]=e}},join:(e,t,s)=>{const n=k(s)||Q(t)?null:t,a=k(n)?t:s,o=[e,[e,n,Q(a)?a:e=>e(a),[],Se()]];return Y(i,o),{as:e=>o[0]=e}},where:(e,t,s)=>Y(c,Q(e)?e:k(s)?s=>s(e)===t:n=>n(e,t)===s),group:(e,t,s,n,a)=>{const o=[e,[e,Q(t)?[t,s,n,a]:Ie(nt,t)??[(e,t)=>t]]];return Y(d,o),{as:e=>o[0]=e}},having:(e,t)=>Y(u,Q(e)?e:s=>s(e)===t)});const g=Se(l);if(Le(g))return J;const h=Se(i);Me(h,((e,[,t])=>x(Ie(h,t),(({3:t})=>k(e)?0:Y(t,e)))));const f=Se(d);let b=n;if(Le(f)&&K(u))b=a;else{A(t,b,a);const e=Se();Me(f,((t,[s,n])=>We(Ve(e,s,Oe),[t,n])));const s=Oe();Me(g,(t=>Ce(e,t)?0:We(s,t)));const n=Se(),o=(s,n,o,r)=>x(s,(([l,i,c,d])=>{Me(n,((t,[s])=>{const n=Ve(l,t,Se),a=Ie(n,o),i=r?void 0:s;if(a!==i){const s=Oe([[a,i]]),r=we(n);me(n,o,i),ve(Ie(e,t),(([e,t])=>{const a=at(d[e],r,n,s,t);d[e]=k(Qe(a))?null:a}))}})),Le(i)||!j(u,(e=>e((e=>d[e]))))?a.delRow(t,c):k(c)?s[2]=a.addRow(t,d):a.setRow(t,c,d)}));E(b,t,b.addRowListener(t,null,((a,r,l,i)=>{const c=[],d=[],u=Se(),g=b.hasRow(t,l);let h=!g;ve(s,(e=>{const[s,n,a]=i(t,l,e);Y(c,n),Y(d,a),h||=s})),Me(e,(e=>{const[s,,n]=i(t,l,e);(h||s)&&me(u,e,[n])})),h&&o(Fe(n,c,void 0,(([,e])=>(Te(e,l),Le(e)))),u,l,1),g&&o(Fe(n,d,(()=>{const e={};return ve(s,(s=>e[s]=b.getCell(t,l,s))),[Se(),Oe(),void 0,e]}),(([,e])=>{We(e,l)})),u,l)})))}A(t,e,b);const w=(s,n,a,r)=>{const l=t=>e.getCell(n,a,t);_(r,(n=>{const[a,,o,r,i]=Ie(h,n),c=o?.(l,s),[d,u]=Ie(i,s)??[];c!=d&&(k(u)||D(t,u),me(i,s,k(c)?null:[c,...V(t,1,e.addRowListener(a,c,(()=>w(s,a,c,r))))]))})),(s=>{const n=(t,n)=>e.getCell(...k(n)?[o,s,t]:t===o?[o,s,n]:[Ie(h,t)?.[0],Ie(Ie(h,t)?.[4],s)?.[0],n]);b.transaction((()=>j(c,(e=>e(n)))?Me(g,((e,a)=>Ne(b,t,s,e,a(n,s)))):b.delRow(t,s)))})(s)},{3:C}=Ie(h,null);return b.transaction((()=>V(t,1,e.addRowListener(o,null,((s,n,a)=>{e.hasRow(o,a)?w(a,o,a,C):(b.delRow(t,a),ve(h,(({4:e})=>x(Ie(e,a),(([,s])=>{D(t,s),me(e,a)})))))}))))),J},delQueryDefinition:e=>(H(e),I(e),J),getStore:g,getQueryIds:h,forEachQuery:b,hasQuery:w,getTableId:S,addQueryIdsListener:e=>M((()=>e(J))),delListener:e=>(i(e),J),destroy:m,getListenerStats:()=>{const{tables:e,tableIds:t,transaction:s,...n}=a.getListenerStats();return n}};return ge({[f]:[1,1],[f+T]:[0,1],[L]:[0,1],[p]:[0,1],[y]:[0,5],[C]:[1,2],[T]:[0,2],[v]:[1,3]},(([e,t],s)=>{_(e?["get","has","forEach"]:["get"],(e=>J[e+d+s]=(...t)=>a[e+s](...t))),J[u+d+s+c]=(...e)=>a[u+s+c](...N(e,0,t),((s,...n)=>e[t](J,...n)),!0)})),le(J)})),It=Ue((e=>{const t=Se(),n=Se(),a=Se(),o=Se(),[r,l,i]=qe((()=>T)),[c,d,u,g,h,f,,,b,w,C,L]=je(e,(()=>[Se(),Se(),Se(),Se()]),(e=>k(e)?void 0:e+s),r,l),p=(e,t,s)=>x(f(e),(([n,,a])=>{if(!Ce(a,t)){const o=Oe();if(h(e)!=v(e))We(o,t);else{let e=t;for(;!k(e)&&!Ce(o,e);)We(o,e),e=Ie(n,e)}if(s)return o;me(a,t,o)}return Ie(a,t)})),y=(e,t)=>x(f(e),(([,,e])=>me(e,t))),v=e=>Ie(t,e),T={setRelationshipDefinition:(e,s,r,i)=>(me(t,e,r),b(e,s,((t,s)=>{const r=Oe(),i=Oe(),c=Oe(),[d,u]=f(e);ve(s,(([t,s],n)=>{k(t)||(We(i,t),x(Ie(u,t),(e=>{Te(e,n),Le(e)&&me(u,t)}))),k(s)||(We(i,s),Ce(u,s)||me(u,s,Oe()),We(Ie(u,s),n)),We(r,n),me(d,n,s),Me(Ie(o,e),(t=>{Ce(p(e,t),n)&&We(c,t)}))})),t(),ve(r,(t=>l(n,[e,t]))),ve(i,(t=>l(a,[e,t]))),ve(c,(t=>{y(e,t),l(o,[e,t])}))}),Be(i)),T),delRelationshipDefinition:e=>(me(t,e),w(e),T),getStore:c,getRelationshipIds:d,forEachRelationship:t=>u((s=>t(s,(t=>e.forEachRow(h(s),t))))),hasRelationship:g,getLocalTableId:h,getRemoteTableId:v,getRemoteRowId:(e,t)=>Ie(f(e)?.[0],t),getLocalRowIds:(e,t)=>pe(Ie(f(e)?.[1],t)),getLinkedRowIds:(e,t)=>k(f(e))?[t]:pe(p(e,t,!0)),addRelationshipIdsListener:C,addRemoteRowIdListener:(e,t,s)=>r(s,n,[e,t]),addLocalRowIdsListener:(e,t,s)=>r(s,a,[e,t]),addLinkedRowIdsListener:(e,t,s)=>(p(e,t),r(s,o,[e,t])),delListener:e=>(y(...i(e)??[]),T),destroy:L,getListenerStats:()=>({})};return le(T)})),Mt=e=>[e,e],mt=()=>[Se(),Se()],Vt=e=>[...e],Dt=([e,t])=>e===t,Et=e=>JSON.stringify(e,((e,t)=>t instanceof Map?te.fromEntries([...t]):t)),Ht=JSON.parse,At=(e,t,s)=>me(e,t,Ie(e,t)==-s?void 0:s),kt=()=>{let e,t,s=!1,n=!1,a=0,r=[];const d=Se(),h=Se(),y=Se(),m=Se(),V=Se(),D=Se(),E=Se(),H=Se(),A=Se(),F=Se(),z=Se(),P=Se(),O=Se(),j=Se(),U=Oe(),G=Se(),K=Se(),X=Se(),Z=Se(),ee=mt(),te=mt(),se=mt(),ne=mt(),ae=mt(),oe=mt(),re=mt(),ie=mt(),ue=mt(),fe=mt(),pe=mt(),Fe=mt(),ze=mt(),je=mt(),Be=mt(),Ue=mt(),$e=mt(),Ge=mt(),Ke=mt(),Xe=mt(),Ye=mt(),Ze=mt(),tt=Se(),st=mt(),[nt,at,ot,rt]=qe((()=>xs)),lt=e=>{if(!be(e,((e,t)=>W([l,i],t))))return!1;const t=e[l];return!(!J(t)&&t!=o||(Qe(e[i])!=t&&de(e,i),0))},it=(t,s)=>(!e||Ce(z,s)||$t(s))&&be(t,((e,t)=>ct(s,t,e)),(()=>$t(s))),ct=(e,t,s,n)=>be(n?s:ht(s,e,t),((n,a)=>x(dt(e,t,a,n),(e=>(s[a]=e,!0)),(()=>!1))),(()=>$t(e,t))),dt=(t,s,n,a)=>e?x(Ie(Ie(z,t),n),(e=>Qe(a)!=e[l]?$t(t,s,n,a,e[i]):a),(()=>$t(t,s,n,a))):k(Qe(a))?$t(t,s,n,a):a,ut=(e,t)=>be(t?e:ft(e),((t,s)=>x(gt(s,t),(t=>(e[s]=t,!0)),(()=>!1))),(()=>_t())),gt=(e,s)=>t?x(Ie(O,e),(t=>Qe(s)!=t[l]?_t(e,s,t[i]):s),(()=>_t(e,s))):k(Qe(s))?_t(e,s):s,ht=(e,t,s)=>(x(Ie(P,t),(([n,a])=>{ve(n,((t,s)=>{ce(e,s)||(e[s]=t)})),ve(a,(n=>{ce(e,n)||$t(t,s,n)}))})),e),ft=e=>(t&&(ve(j,((t,s)=>{ce(e,s)||(e[s]=t)})),ve(U,(t=>{ce(e,t)||_t(t)}))),e),bt=e=>De(z,e,((e,t,s)=>{const n=Se(),a=Oe();De(Ve(z,t,Se),s,((e,t,s)=>{me(e,t,s),x(s[i],(e=>me(n,t,e)),(()=>We(a,t)))})),me(P,t,[n,a])}),((e,t)=>{me(z,t),me(P,t)})),wt=e=>De(O,e,((e,t,s)=>{me(O,t,s),x(s[i],(e=>me(j,t,e)),(()=>We(U,t)))}),((e,t)=>{me(O,t),me(j,t),Te(U,t)})),Ct=e=>he(e)?Is():ys(e),Lt=e=>De(X,e,((e,t,s)=>pt(t,s)),((e,t)=>Ft(t))),pt=(e,t)=>De(Ve(X,e,(()=>(Pt(e,1),me(G,e,_e()),me(K,e,Se()),Se()))),t,((t,s,n)=>yt(e,t,s,n)),((t,s)=>Qt(e,t,s))),yt=(e,t,s,n,a)=>De(Ve(t,s,(()=>(Ot(e,s,1),Se()))),n,((t,n,a)=>vt(e,s,t,n,a)),((n,o)=>zt(e,t,s,n,o,a))),vt=(e,t,s,n,a)=>{Ce(s,n)||Wt(e,t,n,1);const o=Ie(s,n);a!==o&&(jt(e,t,n,o,a),me(s,n,a))},Tt=(e,t,s,n,a)=>x(Ie(t,s),(t=>vt(e,s,t,n,a)),(()=>yt(e,t,s,ht({[n]:a},e,s)))),St=e=>he(e)?Vs():vs(e),Rt=e=>De(Z,e,((e,t,s)=>It(t,s)),((e,t)=>Nt(t))),It=(e,t)=>{Ce(Z,e)||Bt(e,1);const s=Ie(Z,e);t!==s&&(Ut(e,s,t),me(Z,e,t))},xt=(e,t)=>{const[s]=Ie(G,e),n=s(t);return Ce(Ie(X,e),n)?xt(e,t):n},Jt=e=>Ie(X,e)??pt(e,{}),Ft=e=>pt(e,{}),Qt=(e,t,s)=>{const[,n]=Ie(G,e);n(s),yt(e,t,s,{},!0)},zt=(e,t,s,n,a,o)=>{const r=Ie(Ie(P,e)?.[0],a);if(!k(r)&&!o)return vt(e,s,n,a,r);const l=t=>{jt(e,s,t,Ie(n,t)),Wt(e,s,t,-1),me(n,t)};k(r)?l(a):Me(n,l),Le(n)&&(Ot(e,s,-1),Le(me(t,s))&&(Pt(e,-1),me(X,e),me(G,e),me(K,e)))},Nt=e=>{const t=Ie(j,e);if(!k(t))return It(e,t);Ut(e,Ie(Z,e)),Bt(e,-1),me(Z,e)},Pt=(e,t)=>At(d,e,t),Ot=(e,t,s)=>At(Ve(m,e,Se),t,s)&&me(y,e,Ve(y,e,(()=>0))+s),Wt=(e,t,s,n)=>{const a=Ie(K,e),o=Ie(a,s)??0;(0==o&&1==n||1==o&&-1==n)&&At(Ve(h,e,Se),s,n),me(a,s,o!=-n?o+n:null),At(Ve(Ve(V,e,Se),t,Se),s,n)},jt=(e,t,s,n,a)=>{Ve(Ve(Ve(D,e,Se),t,Se),s,(()=>[n,0]))[1]=a,r[3]?.(e,t,s,a)},Bt=(e,t)=>At(E,e,t),Ut=(e,t,s)=>{Ve(H,e,(()=>[t,0]))[1]=s,r[4]?.(e,s)},$t=(e,t,s,n,a)=>(Y(Ve(Ve(Ve(A,e,Se),t,Se),s,(()=>[])),n),a),_t=(e,t,s)=>(Y(Ve(F,e,(()=>[])),t),s),qt=(e,t,s)=>x(Ie(Ie(Ie(D,e),t),s),(([e,t])=>[!0,e,t]),(()=>[!1,...Mt(cs(e,t,s))])),Gt=e=>x(Ie(H,e),(([e,t])=>[!0,e,t]),(()=>[!1,...Mt(gs(e))])),Kt=e=>Le(A)||Le(Ue[e])?0:ve(e?Je(A):A,((t,s)=>ve(t,((t,n)=>ve(t,((t,a)=>at(Ue[e],[s,n,a],t))))))),Xt=e=>Le(F)||Le($e[e])?0:ve(e?ke(F):F,((t,s)=>at($e[e],[s],t))),Yt=(e,t,s,n)=>{if(!Le(e))return at(t,n,(()=>Ee(e))),Me(e,((e,t)=>at(s,[...n??[],e],1==t))),1},Zt=e=>{const t=hs();t!=s&&at(ee[e],void 0,t);const n=Le(fe[e]),a=Le(ze[e])&&Le(je[e])&&Le(ue[e])&&Le(pe[e])&&Le(oe[e])&&Le(re[e])&&Le(ie[e])&&n&&Le(se[e])&&Le(ne[e]),o=Le(Be[e])&&Le(Fe[e])&&Le(ae[e])&&Le(te[e]);if(!a||!o){const t=e?[ke(d),xe(h),ke(y),xe(m),Je(V),Je(D)]:[d,h,y,m,V,D];if(!a){Yt(t[0],se[e],ne[e]),ve(t[1],((t,s)=>Yt(t,oe[e],re[e],[s]))),ve(t[2],((t,s)=>{0!=t&&at(ie[e],[s],os(s))}));const s=Oe();ve(t[3],((t,a)=>{Yt(t,ue[e],pe[e],[a])&&!n&&(at(fe[e],[a,null]),We(s,a))})),n||ve(t[5],((t,n)=>{if(!Ce(s,n)){const s=Oe();ve(t,(e=>ve(e,(([t,n],a)=>n!==t?We(s,a):Te(e,a))))),ve(s,(t=>at(fe[e],[n,t])))}})),ve(t[4],((t,s)=>ve(t,((t,n)=>Yt(t,ze[e],je[e],[s,n])))))}if(!o){let s;ve(t[5],((t,n)=>{let a;ve(t,((t,o)=>{let r;ve(t,(([t,l],i)=>{l!==t&&(at(Be[e],[n,o,i],l,t,qt),s=a=r=1)})),r&&at(Fe[e],[n,o],qt)})),a&&at(ae[e],[n],qt)})),s&&at(te[e],void 0,qt)}}},es=e=>{const t=Ls();t!=n&&at(Ge[e],void 0,t);const s=Le(Xe[e])&&Le(Ye[e]),a=Le(Ze[e])&&Le(Ke[e]);if(!s||!a){const t=e?[ke(E),ke(H)]:[E,H];if(s||Yt(t[0],Xe[e],Ye[e]),!a){let s;ve(t[1],(([t,n],a)=>{n!==t&&(at(Ze[e],[a],n,t,Gt),s=1)})),s&&at(Ke[e],void 0,Gt)}}},ts=(e,...t)=>(Hs((()=>e(...q(t,M)))),xs),ss=()=>Ae(X),ns=()=>Re(X),as=e=>Re(Ie(K,M(e))),os=e=>we(Ie(X,M(e))),rs=e=>Re(Ie(X,M(e))),ls=(e,t,s,n=0,a)=>{return q(N($((o=Ie(X,M(e)),r=(e,s)=>[k(t)?s:Ie(e,M(t)),s],q([...o?.entries()??[]],(([e,t])=>r(t,e)))),(([e],[t])=>et(e,t)*(s?-1:1))),n,k(a)?a:n+a),(([,e])=>e));var o,r},is=(e,t)=>Re(Ie(Ie(X,M(e)),M(t))),cs=(e,t,s)=>Ie(Ie(Ie(X,M(e)),M(t)),M(s)),ds=()=>Ee(Z),us=()=>Re(Z),gs=e=>Ie(Z,M(e)),hs=()=>!Le(X),fs=e=>Ce(X,M(e)),bs=(e,t)=>Ce(Ie(K,M(e)),M(t)),ws=(e,t)=>Ce(Ie(X,M(e)),M(t)),Cs=(e,t,s)=>Ce(Ie(Ie(X,M(e)),M(t)),M(s)),Ls=()=>!Le(Z),ps=e=>Ce(Z,M(e)),ys=e=>ts((()=>(e=>be(e,it,$t))(e)?Lt(e):0)),vs=e=>ts((()=>ut(e)?Rt(e):0)),Ts=e=>{try{Ct(Ht(e))}catch{}return xs},Ss=t=>ts((()=>{if((e=be(t,(e=>be(e,lt))))&&(bt(t),!Le(X))){const e=ss();Is(),ys(e)}})),Rs=e=>ts((()=>{if(t=(e=>be(e,lt))(e)){const s=ds();Es(),Vs(),t=!0,wt(e),vs(s)}})),Is=()=>ts((()=>Lt({}))),Ms=e=>ts((e=>Ce(X,e)?Ft(e):0),e),ms=(e,t)=>ts(((e,t)=>x(Ie(X,e),(s=>Ce(s,t)?Qt(e,s,t):0))),e,t),Vs=()=>ts((()=>Rt({}))),Ds=()=>ts((()=>{bt({}),e=!1})),Es=()=>ts((()=>{wt({}),t=!1})),Hs=(e,t)=>{if(-1!=a){As();const s=e();return ks(t),s}},As=()=>(-1!=a&&a++,1==a&&(r[0]?.(),at(tt)),xs),ks=e=>(a>0&&(a--,0==a&&(a=1,Kt(1),Le(D)||Zt(1),Xt(1),Le(H)||es(1),e?.(xs)&&(ve(D,((e,t)=>ve(e,((e,s)=>ve(e,(([e],n)=>Ne(xs,t,s,n,e))))))),ye(D),ve(H,(([e],t)=>Pe(xs,t,e))),ye(H)),at(st[0],void 0),a=-1,Kt(0),Le(D)||Zt(0),Xt(0),Le(H)||es(0),r[1]?.(),at(st[1],void 0),r[2]?.(),a=0,s=hs(),n=Ls(),_([d,h,y,m,V,D,A,E,H,F],ye))),xs),xs={getContent:()=>[ss(),ds()],getTables:ss,getTableIds:ns,getTable:e=>He(Ie(X,M(e))),getTableCellIds:as,getRowCount:os,getRowIds:rs,getSortedRowIds:ls,getRow:(e,t)=>Ee(Ie(Ie(X,M(e)),M(t))),getCellIds:is,getCell:cs,getValues:ds,getValueIds:us,getValue:gs,hasTables:hs,hasTable:fs,hasTableCell:bs,hasRow:ws,hasCell:Cs,hasValues:Ls,hasValue:ps,getTablesJson:()=>Et(X),getValuesJson:()=>Et(Z),getJson:()=>Et([X,Z]),getTablesSchemaJson:()=>Et(z),getValuesSchemaJson:()=>Et(O),getSchemaJson:()=>Et([z,O]),hasTablesSchema:()=>e,hasValuesSchema:()=>t,setContent:([e,t])=>ts((()=>{(he(e)?Is:ys)(e),(he(t)?Vs:vs)(t)})),setTables:ys,setTable:(e,t)=>ts((e=>it(t,e)?pt(e,t):0),e),setRow:(e,t,s)=>ts(((e,t)=>ct(e,t,s)?yt(e,Jt(e),t,s):0),e,t),addRow:(e,t,s=!0)=>Hs((()=>{let n;return ct(e,n,t)&&(e=M(e),yt(e,Jt(e),n=xt(e,s?1:0),t)),n})),setPartialRow:(e,t,s)=>ts(((e,t)=>{if(ct(e,t,s,1)){const n=Jt(e);ge(s,((s,a)=>Tt(e,n,t,a,s)))}}),e,t),setCell:(e,t,s,n)=>ts(((e,t,s)=>x(dt(e,t,s,Q(n)?n(cs(e,t,s)):n),(n=>Tt(e,Jt(e),t,s,n)))),e,t,s),setValues:vs,setPartialValues:e=>ts((()=>ut(e,1)?ge(e,((e,t)=>It(t,e))):0)),setValue:(e,t)=>ts((e=>x(gt(e,Q(t)?t(gs(e)):t),(t=>It(e,t)))),e),applyChanges:e=>ts((()=>{ge(e[0],((e,t)=>k(e)?Ms(t):ge(e,((e,s)=>k(e)?ms(t,s):ge(e,((e,n)=>Ne(xs,t,s,n,e))))))),ge(e[1],((e,t)=>Pe(xs,t,e)))})),setTablesJson:Ts,setValuesJson:e=>{try{St(Ht(e))}catch{}return xs},setJson:e=>ts((()=>{try{const[t,s]=Ht(e);Ct(t),St(s)}catch{Ts(e)}})),setTablesSchema:Ss,setValuesSchema:Rs,setSchema:(e,t)=>ts((()=>{Ss(e),Rs(t)})),delTables:Is,delTable:Ms,delRow:ms,delCell:(e,t,s,n)=>ts(((e,t,s)=>x(Ie(X,e),(a=>x(Ie(a,t),(o=>Ce(o,s)?zt(e,a,t,o,s,n):0))))),e,t,s),delValues:Vs,delValue:e=>ts((e=>Ce(Z,e)?Nt(e):0),e),delTablesSchema:Ds,delValuesSchema:Es,delSchema:()=>ts((()=>{Ds(),Es()})),transaction:Hs,startTransaction:As,getTransactionChanges:()=>[Ee(D,((e,t)=>-1===Ie(d,t)?void 0:Ee(e,((e,s)=>-1===Ie(Ie(m,t),s)?void 0:Ee(e,(([,e])=>e),(e=>Dt(e)))),Le,he)),Le,he),Ee(H,(([,e])=>e),(e=>Dt(e))),1],getTransactionLog:()=>[!Le(D),!Le(H),Ae(D,Vt,Dt),Ae(A),Ee(H,Vt,Dt),Ee(F),Ee(d),He(m),Ae(V),Ee(E)],finishTransaction:ks,forEachTable:e=>ve(X,((t,s)=>e(s,(e=>ve(t,((t,s)=>e(s,(e=>Me(t,e))))))))),forEachTableCell:(e,t)=>Me(Ie(K,M(e)),t),forEachRow:(e,t)=>ve(Ie(X,M(e)),((e,s)=>t(s,(t=>Me(e,t))))),forEachCell:(e,t,s)=>Me(Ie(Ie(X,M(e)),M(t)),s),forEachValue:e=>Me(Z,e),addSortedRowIdsListener:(e,t,s,n,a,o,r)=>{let l=ls(e,t,s,n,a);return nt((()=>{const r=ls(e,t,s,n,a);B(r,l)||(l=r,o(xs,e,t,s,n,a,l))}),fe[r?1:0],[e,t],[ns])},addStartTransactionListener:e=>nt(e,tt),addWillFinishTransactionListener:e=>nt(e,st[0]),addDidFinishTransactionListener:e=>nt(e,st[1]),callListener:e=>(rt(e),xs),delListener:e=>(ot(e),xs),getListenerStats:()=>({}),createStore:kt,addListener:nt,callListeners:at,setInternalListeners:(e,t,s,n,a)=>r=[e,t,s,n,a]};return ge({[g+b]:[0,ee,[],()=>[hs()]],[b]:[0,te],[w]:[0,se],[g+f]:[1,ne,[ns],e=>[fs(...e)]],[f]:[1,ae,[ns]],[f+T]:[1,oe,[ns]],[g+f+v]:[2,re,[ns,as],e=>[bs(...e)]],[L]:[1,ie,[ns]],[p]:[1,ue,[ns]],[g+C]:[2,pe,[ns,rs],e=>[ws(...e)]],[C]:[2,Fe,[ns,rs]],[T]:[2,ze,[ns,rs]],[g+v]:[3,je,[ns,rs,is],e=>[Cs(...e)]],[v]:[3,Be,[ns,rs,is],e=>Mt(cs(...e))],InvalidCell:[3,Ue],[g+R]:[0,Ge,[],()=>[Ls()]],[R]:[0,Ke],[I]:[0,Xe],[g+S]:[1,Ye,[us],e=>[ps(...e)]],[S]:[1,Ze,[us],e=>Mt(gs(e[0]))],InvalidValue:[1,$e]},(([e,t,s,n],a)=>{xs[u+a+c]=(...a)=>nt(a[e],t[a[e+1]?1:0],e>0?N(a,0,e):void 0,s,n)})),le(xs)},xt=2**36,Jt=2**30,Ft=2**24,Qt=2**18,zt=4096,Nt={HasTable:1,Table:1,TableCellIds:1,HasTableCell:2,RowCount:1,RowIds:1,SortedRowIds:5,HasRow:2,Row:2,CellIds:2,HasCell:3,Cell:3,HasValue:1,Value:1,InvalidCell:3,InvalidValue:1},Pt=(e=s)=>[yt(e),yt(e)];e.createCheckpoints=Ge,e.createCustomPersister=it,e.createCustomSynchronizer=(e,t,n,a,o,r,l={})=>{let i;const c=Se();n(((s,n,a,o)=>{0==a?x(Ie(c,n),(([e,t])=>k(e)||e==s?t(o,s):0)):2==a&&h.isAutoLoading()?g(s,o).then((e=>{i?.(void 0,e)})):3==a&&h.isAutoLoading()?i?.(void 0,o):x(1==a&&h.isAutoSaving()?e.getMergeableContentHashes():4==a?e.getMergeableTableDiff(o):5==a?e.getMergeableRowDiff(o):6==a?e.getMergeableCellDiff(o):7==a?e.getMergeableValueDiff(o):void 0,(e=>{t(s,n,0,e)}))}));const d=async(e,n,a=s)=>new D(((s,r)=>{const l=tt(),i=setTimeout((()=>{Te(c,l),r(`No response from ${e??"anyone"} to '${n}'`)}),1e3*o);me(c,l,[e,(e,t)=>{clearTimeout(i),Te(c,l),s([e,t])}]),t(e,l,n,a)})),u=(e,[t,s])=>{ue(t,(([t,s],n)=>{const a=fe(e[0],n,pt);ue(t,(([e,t],s)=>{const n=fe(a[0],s,pt);ue(e,(([e,t],s)=>n[0][s]=ht(e,t))),n[1]=Ct(n[1],t)})),a[1]=Ct(a[1],s)})),e[1]=Ct(e[1],s)},g=async(t=null,s)=>{k(s)&&([s,t]=await d(t,1));const[n,a]=s,[o,r]=e.getMergeableContentHashes();let l=pt();if(o!=n){const[s,n]=(await d(t,4,e.getMergeableTableHashes()))[0];if(l=s,!he(n)){const[s,a]=(await d(t,5,e.getMergeableRowHashes(n)))[0];if(u(l,s),!he(a)){const s=(await d(t,6,e.getMergeableCellHashes(a)))[0];u(l,s)}}}return[l,r==a?pt():(await d(t,7,e.getMergeableValuesHashes()))[0],1]},h=it(e,(async()=>{const e=await g();return he(e[0][0])&&he(e[1][0])?void 0:e}),(async(s,n)=>{n?t(null,null,3,n):t(null,null,2,e.getMergeableContentHashes())}),(e=>i=e),(()=>i=void 0),r,2,{startSync:async e=>await(await h.startAutoLoad(e)).startAutoSave(),stopSync:()=>h.stopAutoLoad().stopAutoSave(),destroy:()=>(a(),h.stopSync()),getSynchronizerStats:()=>({}),...l});return h},e.createIndexes=st,e.createMergeableStore=e=>{let t=1,n=Pt(),a=0;const o=Se(),r=Oe(),[l,i]=(e=>{let t=0,s=-1;const n=x(e,(e=>{const t=dt(e);return Ye(t/Ft)+Ye(t/Qt)+Ye(t/zt)+Ye(t/64)+Ye(t)}),(()=>tt(5))),a=e=>{const n=t,[a,o]=k(e)||""==e?[0,0]:[Ze(r=e,0)*xt+Ze(r,1)*Jt+Ze(r,2)*Ft+Ze(r,3)*Qt+Ze(r,4)*zt+64*Ze(r,5)+Ze(r,6),Ze(r,7)*Qt+Ze(r,8)*zt+64*Ze(r,9)+Ze(r,10)];var r;t=E(n,a,Date.now()),s=t==n?t==a?E(s,o):s:t==a?o:-1};return[()=>{return a(),o=++s,Ye((e=t)/xt)+Ye(e/Jt)+Ye(e/Ft)+Ye(e/Qt)+Ye(e/zt)+Ye(e/64)+Ye(e)+Ye(o/Qt)+Ye(o/zt)+Ye(o/64)+Ye(o)+n;var e,o},a]})(e),c=kt(),d=e=>{const s=t;return t=0,e(),t=s,b},u=(e,t=0)=>{const a={},o={},[[r,l=s,c=0],d]=e,[u,h]=n,[f,b,w]=u;let C=t?c:w,L=l;ue(r,(([e,n=s,o=0],r)=>{const l=Ve(f,r,yt),[i,c,d]=l;let u=t?o:d,h=n;ue(e,((e,s)=>{const[n,o,l]=g(e,Ve(i,s,yt),fe(fe(a,r,ie),s,ie),t);u^=t?0:(o?bt(s,o):0)^bt(s,l),h=Ct(h,n)})),u^=t?0:wt(c,n),Lt(l,u,n),C^=t?0:(d?bt(r,d):0)^bt(r,l[2]),L=Ct(L,h)})),C^=t?0:wt(b,l),Lt(u,C,l);const[p]=g(d,h,o,t);return i(Ct(L,p)),[a,o,1]},g=(e,t,n,a)=>{const[o,r=s,l=0]=e,[i,c,d]=t;let u=r,g=a?l:d;return ue(o,(([e,t,o=0],r)=>{const l=Ve(i,r,(()=>[void 0,s,0])),[,c,d]=l;(!c||t>c)&&(Lt(l,a?o:dt(Et(e??null)+":"+t),t),l[0]=e,n[r]=e,g^=a?0:bt(r,d)^bt(r,l[2]),u=Ct(u,t))})),g^=a?0:wt(c,r),Lt(t,g,r),[u,d,t[2]]},h=()=>[vt(n[0],(e=>vt(e,(e=>vt(e))))),vt(n[1])],f=e=>d((()=>c.applyChanges(u(e)))),b={getMergeableContent:h,getMergeableContentHashes:()=>[n[0][2],n[1][2]],getMergeableTableHashes:()=>Ee(n[0][0],ft),getMergeableTableDiff:e=>{const t=pt(n[0][1]),s={};return Me(n[0][0],((n,[a,o,r])=>ce(e,n)?r!=e[n]?s[n]=r:0:t[0][n]=Tt([a,o],(e=>Tt(e))))),[t,s]},getMergeableRowHashes:e=>{const t={};return ue(e,((e,s)=>x(Ie(n[0][0],s),(([n,,a])=>a!=e?Me(n,((e,[,,n])=>fe(t,s,ie)[e]=n)):0)))),t},getMergeableRowDiff:e=>{const t=pt(n[0][1]),s={};return ue(e,((e,a)=>Me(Ie(n[0][0],a)?.[0],((n,[o,r,l])=>ce(e,n)?l!==e[n]?fe(s,a,ie)[n]=l:0:fe(t[0],a,pt)[0][n]=Tt([o,r]))))),[t,s]},getMergeableCellHashes:e=>{const t={};return ue(e,((e,s)=>x(Ie(n[0][0],s),(([n])=>ue(e,((e,a)=>x(Ie(n,a),(([n,,o])=>o!==e?Me(n,((e,[,,n])=>fe(fe(t,s,ie),a,ie)[e]=n)):0)))))))),t},getMergeableCellDiff:e=>{const[[t,s]]=n,a={};return ue(e,((e,s)=>ue(e,((e,n)=>x(Ie(t,s),(([t,o])=>x(Ie(t,n),(([t,r])=>Me(t,((t,[l,i,c])=>c!==e[t]?fe(fe(a,s,(()=>pt(o)))[0],n,(()=>pt(r)))[0][t]=[l,i]:0)))))))))),ht(a,s)},getMergeableValuesHashes:()=>Ee(n[1][0],ft),getMergeableValueDiff:e=>{const[,[t,s]]=n,a=Ee(t,gt,(([,,t],s)=>t==e?.[s]));return ht(a,s)},setMergeableContent:e=>d((()=>(e=>z(e)&&2==P(e)&&St(e[0],(e=>be(e,(e=>St(e,(e=>be(e,(e=>St(e,(e=>be(e,(e=>St(e,ze)),void 0,1)))),void 0,1)))),void 0,1)))&&St(e[1],(e=>be(e,(e=>St(e,ze)),void 0,1))))(e)?c.transaction((()=>{c.delTables().delValues(),n=Pt(),c.applyChanges(u(e,1))})):0)),setDefaultContent:e=>(c.transaction((()=>{a=1,c.setContent(e),a=0})),b),getTransactionMergeableChanges:()=>{const[[e,t],[s,a]]=n,l={};ve(o,((t,s)=>x(Ie(e,s),(([e,n])=>{const a={};ve(t,((t,s)=>x(Ie(e,s),(([e,n])=>{const o={};ve(t,(t=>{x(Ie(e,t),(([e,s])=>o[t]=ht(e,s)))})),a[s]=ht(o,n)})))),l[s]=ht(a,n)}))));const i={};return ve(r,(e=>x(Ie(s,e),(([t,s])=>i[e]=ht(t,s))))),[ht(l,t),ht(i,a),1]},applyMergeableChanges:f,merge:e=>{const t=h(),s=e.getMergeableContent();return e.applyMergeableChanges(t),f(s)}};return c.setInternalListeners((()=>{}),(()=>{}),(()=>{ye(o),ye(r)}),((e,n,r,i)=>{We(Ve(Ve(o,e,Se),n,Oe),r),t&&u([[{[e]:[{[n]:[{[r]:[i,a?s:l()]}]}]}],[{}],1])}),((e,n)=>{We(r,e),t&&u([[{}],[{[e]:[n,a?s:l()]}],1])})),ge(c,((e,t)=>b[t]=m(t,"set")||m(t,"del")||m(t,"apply")||V(t,"Transaction")||"callListener"==t?(...t)=>(e(...t),b):m(t,"add")&&V(t,"Listener")?(...s)=>{const n=Nt[N(t,3,-8)]??0,a=s[n];return s[n]=(e,...t)=>a(b,...t),e(...s)}:e)),le(b)},e.createMetrics=ot,e.createQueries=Rt,e.createRelationships=It,e.createStore=kt,e.defaultSorter=et,e.getUniqueId=tt},"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).TinyBase={});

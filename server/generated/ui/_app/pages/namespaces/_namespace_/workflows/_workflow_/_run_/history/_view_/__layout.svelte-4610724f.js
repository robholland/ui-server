import{S as ge,i as he,s as we,P as ke,aT as ye,e as k,t as q,k as F,w as W,c as y,a as I,h as B,d as f,m as N,x as L,b as w,U as ce,g as V,L as $,y as M,j as se,q as j,o as H,B as R,I as Ee,F as Ie,G as De,l as ue,T as Ae,K as Ve,H as Ce,n as me,a1 as Se,at as Pe,p as $e,M as Te,N as je,O as He}from"../../../../../../../../chunks/vendor-79e2f0e4.js";import{i as Ge,a as Fe,g as _e}from"../../../../../../../../chunks/index-d9d5b9dc.js";import{p as be}from"../../../../../../../../chunks/stores-b30435f0.js";import{E as Ne}from"../../../../../../../../chunks/empty-state-712c1dfa.js";import{P as Oe}from"../../../../../../../../chunks/pagination-90b44b94.js";import{F as We}from"../../../../../../../../chunks/filter-select-4f0e6f6a.js";import{O as J}from"../../../../../../../../chunks/select-ec02925a.js";import"../../../../../../../../chunks/data-converter-config-a7413031.js";import"../../../../../../../../chunks/atob-5f9d7101.js";import"../../../../../../../../chunks/format-date-239453d0.js";import"../../../../../../../../chunks/navigation-093db9e2.js";import"../../../../../../../../chunks/singletons-a6a7384f.js";function Le(a){let e,t,l,r=a[0].id+"",n,i,c,v,g,p=a[0].name+"",b,P,C,A,s,o,D=a[0].timestamp+"",h,U,S;return s=new ke({props:{icon:ye,class:"inline"}}),{c(){e=k("a"),t=k("article"),l=k("p"),n=q(r),i=F(),c=k("div"),v=k("h2"),g=k("span"),b=q(p),C=F(),A=k("p"),W(s.$$.fragment),o=F(),h=q(D),this.h()},l(_){e=y(_,"A",{href:!0,"sveltekit:noscroll":!0,class:!0});var E=I(e);t=y(E,"ARTICLE",{class:!0});var G=I(t);l=y(G,"P",{class:!0});var X=I(l);n=B(X,r),X.forEach(f),i=N(G),c=y(G,"DIV",{class:!0});var z=I(c);v=y(z,"H2",{class:!0});var K=I(v);g=y(K,"SPAN",{class:!0});var Q=I(g);b=B(Q,p),Q.forEach(f),K.forEach(f),C=N(z),A=y(z,"P",{class:!0});var d=I(A);L(s.$$.fragment,d),o=N(d),h=B(d,D),d.forEach(f),z.forEach(f),G.forEach(f),E.forEach(f),this.h()},h(){w(l,"class","w-5 text-center text-gray-500"),w(g,"class",P="label "+a[0].classification+" font-semibold svelte-74j1yw"),w(v,"class","mb-2"),w(A,"class","text-sm"),w(c,"class","w-full"),w(t,"class","flex gap-4 items-center p-4 w-full"),w(e,"href",U=a[0].id+a[1].url.search),w(e,"sveltekit:noscroll",""),w(e,"class","flex border-b-2 border-gray-300 w-full items-center hover:bg-gray-50 svelte-74j1yw"),ce(e,"active",a[2](a[1].params.eventId))},m(_,E){V(_,e,E),$(e,t),$(t,l),$(l,n),$(t,i),$(t,c),$(c,v),$(v,g),$(g,b),$(c,C),$(c,A),M(s,A,null),$(A,o),$(A,h),S=!0},p(_,[E]){(!S||E&1)&&r!==(r=_[0].id+"")&&se(n,r),(!S||E&1)&&p!==(p=_[0].name+"")&&se(b,p),(!S||E&1&&P!==(P="label "+_[0].classification+" font-semibold svelte-74j1yw"))&&w(g,"class",P),(!S||E&1)&&D!==(D=_[0].timestamp+"")&&se(h,D),(!S||E&3&&U!==(U=_[0].id+_[1].url.search))&&w(e,"href",U),E&6&&ce(e,"active",_[2](_[1].params.eventId))},i(_){S||(j(s.$$.fragment,_),S=!0)},o(_){H(s.$$.fragment,_),S=!1},d(_){_&&f(e),R(s)}}}function Me(a,e,t){let l;Ee(a,be,i=>t(1,l=i));let{event:r}=e;const n=i=>{if(Ge(r))return r.id===i;if(Fe(r))return r.eventIds.has(i)};return a.$$set=i=>{"event"in i&&t(0,r=i.event)},[r,l,n]}class Re extends ge{constructor(e){super();he(this,e,Me,Le,we,{event:0})}}function pe(a,e,t){const l=a.slice();return l[8]=e[t],l}function qe(a){let e;return{c(){e=q("All")},l(t){e=B(t,"All")},m(t,l){V(t,e,l)},d(t){t&&f(e)}}}function Be(a){let e;return{c(){e=q("Activity")},l(t){e=B(t,"Activity")},m(t,l){V(t,e,l)},d(t){t&&f(e)}}}function Ke(a){let e;return{c(){e=q("Command")},l(t){e=B(t,"Command")},m(t,l){V(t,e,l)},d(t){t&&f(e)}}}function Ue(a){let e;return{c(){e=q("Signal")},l(t){e=B(t,"Signal")},m(t,l){V(t,e,l)},d(t){t&&f(e)}}}function ze(a){let e;return{c(){e=q("Timer")},l(t){e=B(t,"Timer")},m(t,l){V(t,e,l)},d(t){t&&f(e)}}}function Je(a){let e;return{c(){e=q("Child Workflow")},l(t){e=B(t,"Child Workflow")},m(t,l){V(t,e,l)},d(t){t&&f(e)}}}function Qe(a){let e;return{c(){e=q("Workflow")},l(t){e=B(t,"Workflow")},m(t,l){V(t,e,l)},d(t){t&&f(e)}}}function Xe(a){let e,t,l,r,n,i,c,v,g,p,b,P,C,A;return e=new J({props:{value:void 0,$$slots:{default:[qe]},$$scope:{ctx:a}}}),l=new J({props:{value:"activity",$$slots:{default:[Be]},$$scope:{ctx:a}}}),n=new J({props:{value:"command",$$slots:{default:[Ke]},$$scope:{ctx:a}}}),c=new J({props:{value:"signal",$$slots:{default:[Ue]},$$scope:{ctx:a}}}),g=new J({props:{value:"timer",$$slots:{default:[ze]},$$scope:{ctx:a}}}),b=new J({props:{value:"child-workflow",$$slots:{default:[Je]},$$scope:{ctx:a}}}),C=new J({props:{value:"workflow",$$slots:{default:[Qe]},$$scope:{ctx:a}}}),{c(){W(e.$$.fragment),t=F(),W(l.$$.fragment),r=F(),W(n.$$.fragment),i=F(),W(c.$$.fragment),v=F(),W(g.$$.fragment),p=F(),W(b.$$.fragment),P=F(),W(C.$$.fragment)},l(s){L(e.$$.fragment,s),t=N(s),L(l.$$.fragment,s),r=N(s),L(n.$$.fragment,s),i=N(s),L(c.$$.fragment,s),v=N(s),L(g.$$.fragment,s),p=N(s),L(b.$$.fragment,s),P=N(s),L(C.$$.fragment,s)},m(s,o){M(e,s,o),V(s,t,o),M(l,s,o),V(s,r,o),M(n,s,o),V(s,i,o),M(c,s,o),V(s,v,o),M(g,s,o),V(s,p,o),M(b,s,o),V(s,P,o),M(C,s,o),A=!0},p(s,o){const D={};o&32&&(D.$$scope={dirty:o,ctx:s}),e.$set(D);const h={};o&32&&(h.$$scope={dirty:o,ctx:s}),l.$set(h);const U={};o&32&&(U.$$scope={dirty:o,ctx:s}),n.$set(U);const S={};o&32&&(S.$$scope={dirty:o,ctx:s}),c.$set(S);const _={};o&32&&(_.$$scope={dirty:o,ctx:s}),g.$set(_);const E={};o&32&&(E.$$scope={dirty:o,ctx:s}),b.$set(E);const G={};o&32&&(G.$$scope={dirty:o,ctx:s}),C.$set(G)},i(s){A||(j(e.$$.fragment,s),j(l.$$.fragment,s),j(n.$$.fragment,s),j(c.$$.fragment,s),j(g.$$.fragment,s),j(b.$$.fragment,s),j(C.$$.fragment,s),A=!0)},o(s){H(e.$$.fragment,s),H(l.$$.fragment,s),H(n.$$.fragment,s),H(c.$$.fragment,s),H(g.$$.fragment,s),H(b.$$.fragment,s),H(C.$$.fragment,s),A=!1},d(s){R(e,s),s&&f(t),R(l,s),s&&f(r),R(n,s),s&&f(i),R(c,s),s&&f(v),R(g,s),s&&f(p),R(b,s),s&&f(P),R(C,s)}}}function ve(a){let e,t,l,r;return t=new Ne({props:{title:"No Events Match",content:"There are no events that match your filters. Adjust your filters to see your events."}}),{c(){e=k("div"),W(t.$$.fragment),l=F(),this.h()},l(n){e=y(n,"DIV",{class:!0});var i=I(e);L(t.$$.fragment,i),l=N(i),i.forEach(f),this.h()},h(){w(e,"class","p-2")},m(n,i){V(n,e,i),M(t,e,null),$(e,l),r=!0},p:Ae,i(n){r||(j(t.$$.fragment,n),r=!0)},o(n){H(t.$$.fragment,n),r=!1},d(n){n&&f(e),R(t)}}}function de(a,e){let t,l,r;return l=new Re({props:{event:e[8]}}),{key:a,first:null,c(){t=ue(),W(l.$$.fragment),this.h()},l(n){t=ue(),L(l.$$.fragment,n),this.h()},h(){this.first=t},m(n,i){V(n,t,i),M(l,n,i),r=!0},p(n,i){e=n;const c={};i&128&&(c.event=e[8]),l.$set(c)},i(n){r||(j(l.$$.fragment,n),r=!0)},o(n){H(l.$$.fragment,n),r=!1},d(n){n&&f(t),R(l,n)}}}function Ye(a){let e,t,l,r,n,i,c,v,g,p,b,P,C,A,s,o,D,h=[],U=new Map,S,_,E,G;function X(u){a[4](u)}let z={parameter:"category",$$slots:{default:[Xe]},$$scope:{ctx:a}};a[0]!==void 0&&(z.value=a[0]),v=new We({props:z}),Ie.push(()=>De(v,"value",X));let K=a[7];const Q=u=>u[8].id;for(let u=0;u<K.length;u+=1){let m=pe(a,K,u),T=Q(m);U.set(T,h[u]=de(T,m))}let d=null;K.length||(d=ve());const x=a[3].default,O=Ve(x,a,a[5],null);return{c(){e=k("section"),t=k("div"),l=k("header"),r=k("h3"),n=q("Summary"),i=F(),c=k("div"),W(v.$$.fragment),p=F(),b=k("header"),P=k("h3"),C=q("Details"),A=F(),s=k("div"),o=k("div"),D=k("div");for(let u=0;u<h.length;u+=1)h[u].c();d&&d.c(),S=F(),_=k("div"),E=k("div"),O&&O.c(),this.h()},l(u){e=y(u,"SECTION",{class:!0});var m=I(e);t=y(m,"DIV",{class:!0});var T=I(t);l=y(T,"HEADER",{class:!0});var Y=I(l);r=y(Y,"H3",{});var le=I(r);n=B(le,"Summary"),le.forEach(f),i=N(Y),c=y(Y,"DIV",{class:!0});var ae=I(c);L(v.$$.fragment,ae),ae.forEach(f),Y.forEach(f),p=N(T),b=y(T,"HEADER",{class:!0});var ne=I(b);P=y(ne,"H3",{});var re=I(P);C=B(re,"Details"),re.forEach(f),ne.forEach(f),T.forEach(f),A=N(m),s=y(m,"DIV",{class:!0});var Z=I(s);o=y(Z,"DIV",{class:!0});var oe=I(o);D=y(oe,"DIV",{class:!0});var ee=I(D);for(let te=0;te<h.length;te+=1)h[te].l(ee);d&&d.l(ee),ee.forEach(f),oe.forEach(f),S=N(Z),_=y(Z,"DIV",{class:!0});var ie=I(_);E=y(ie,"DIV",{class:!0});var fe=I(E);O&&O.l(fe),fe.forEach(f),ie.forEach(f),Z.forEach(f),m.forEach(f),this.h()},h(){w(c,"class","flex items-center gap-4"),w(l,"class","table-header border-r-2 rounded-tl-lg w-1/3 svelte-8ovwki"),w(b,"class","table-header rounded-tr-lg w-2/3 svelte-8ovwki"),w(t,"class","flex w-full"),w(D,"class","rounded-bl-lg overflow-y-scroll h-full"),w(o,"class","flex flex-col w-1/3 border-r-2 border-gray-300 rounded-bl-lg"),w(E,"class","overflow-y-scroll overflow-x-hidden rounded-br-lg px-4 w-full py-4"),w(_,"class","flex flex-col w-2/3"),w(s,"class","flex"),w(e,"class","flex flex-col border-2 border-gray-300 rounded-lg w-full mb-6")},m(u,m){V(u,e,m),$(e,t),$(t,l),$(l,r),$(r,n),$(l,i),$(l,c),M(v,c,null),$(t,p),$(t,b),$(b,P),$(P,C),$(e,A),$(e,s),$(s,o),$(o,D);for(let T=0;T<h.length;T+=1)h[T].m(D,null);d&&d.m(D,null),$(s,S),$(s,_),$(_,E),O&&O.m(E,null),G=!0},p(u,m){const T={};m&32&&(T.$$scope={dirty:m,ctx:u}),!g&&m&1&&(g=!0,T.value=u[0],Ce(()=>g=!1)),v.$set(T),m&128&&(K=u[7],me(),h=Se(h,m,Q,1,u,K,U,D,Pe,de,null,pe),$e(),!K.length&&d?d.p(u,m):K.length?d&&(me(),H(d,1,1,()=>{d=null}),$e()):(d=ve(),d.c(),j(d,1),d.m(D,null))),O&&O.p&&(!G||m&32)&&Te(O,x,u,u[5],G?He(x,u[5],m,null):je(u[5]),null)},i(u){if(!G){j(v.$$.fragment,u);for(let m=0;m<K.length;m+=1)j(h[m]);j(O,u),G=!0}},o(u){H(v.$$.fragment,u);for(let m=0;m<h.length;m+=1)H(h[m]);H(O,u),G=!1},d(u){u&&f(e),R(v);for(let m=0;m<h.length;m+=1)h[m].d();d&&d.d(),O&&O.d(u)}}}function Ze(a){let e,t;return e=new Oe({props:{items:a[1],startingIndex:a[2],$$slots:{default:[Ye,({visibleItems:l})=>({7:l}),({visibleItems:l})=>l?128:0]},$$scope:{ctx:a}}}),{c(){W(e.$$.fragment)},l(l){L(e.$$.fragment,l)},m(l,r){M(e,l,r),t=!0},p(l,[r]){const n={};r&2&&(n.items=l[1]),r&161&&(n.$$scope={dirty:r,ctx:l}),e.$set(n)},i(l){t||(j(e.$$.fragment,l),t=!0)},o(l){H(e.$$.fragment,l),t=!1},d(l){R(e,l)}}}const mt=async function({stuff:a,url:e,params:t}){const l=e.searchParams.get("category"),r=["summary","compact","json"],n=_e(a.events,l),i=_e(a.eventGroups,l);let c;return t.view==="summary"&&(c=n),t.view==="compact"&&(c=i),r.includes(t.view)?{props:{items:c,category:l},stuff:{matchingEvents:n,matchingEventGroups:i}}:{status:404}};function xe(a,e,t){let l;Ee(a,be,p=>t(6,l=p));let{$$slots:r={},$$scope:n}=e,{items:i}=e,{category:c}=e;const v=i.findIndex(({id:p})=>l.params.eventId===p);function g(p){c=p,t(0,c)}return a.$$set=p=>{"items"in p&&t(1,i=p.items),"category"in p&&t(0,c=p.category),"$$scope"in p&&t(5,n=p.$$scope)},[c,i,v,r,g,n]}class $t extends ge{constructor(e){super();he(this,e,xe,Ze,we,{items:1,category:0})}}export{$t as default,mt as load};
import{S as E,i as I,s as C,W as R,X as U,e as y,w as $,c as x,a as ee,x as m,d as p,b as te,g as d,y as _,Y as ne,q as u,o as c,B as g,N as F,l as w,n as L,p as T,Z as re,t as k,h as b,j as se,E as ae,I as V,J as X,K as Y,L as Z,k as q,m as B}from"./index-2d5c3a3e.js";import{p as O}from"./stores-045372f2.js";import{a as v,b as W,c as H}from"./route-for-f75b1f87.js";import{N,A as z,H as le}from"./error-fb10b511.js";import{N as oe}from"./navigation-header-3167ca74.js";import{g as fe}from"./navigation-3f1ea447.js";import{S as ue,O as G}from"./select-535b59d2.js";function D(l,t,n){const e=l.slice();return e[9]=t[n],e}function ce(l){let t,n,e=l[2],s=[];for(let a=0;a<e.length;a+=1)s[a]=J(D(l,e,a));const r=a=>c(s[a],1,1,()=>{s[a]=null});return{c(){for(let a=0;a<s.length;a+=1)s[a].c();t=w()},l(a){for(let f=0;f<s.length;f+=1)s[f].l(a);t=w()},m(a,f){for(let o=0;o<s.length;o+=1)s[o].m(a,f);d(a,t,f),n=!0},p(a,f){if(f&4){e=a[2];let o;for(o=0;o<e.length;o+=1){const i=D(a,e,o);s[o]?(s[o].p(i,f),u(s[o],1)):(s[o]=J(i),s[o].c(),u(s[o],1),s[o].m(t.parentNode,t))}for(L(),o=e.length;o<s.length;o+=1)r(o);T()}},i(a){if(!n){for(let f=0;f<e.length;f+=1)u(s[f]);n=!0}},o(a){s=s.filter(Boolean);for(let f=0;f<s.length;f+=1)c(s[f]);n=!1},d(a){re(s,a),a&&p(t)}}}function ie(l){let t,n;return t=new G({props:{value:l[0],$$slots:{default:[me]},$$scope:{ctx:l}}}),{c(){$(t.$$.fragment)},l(e){m(t.$$.fragment,e)},m(e,s){_(t,e,s),n=!0},p(e,s){const r={};s&1&&(r.value=e[0]),s&4097&&(r.$$scope={dirty:s,ctx:e}),t.$set(r)},i(e){n||(u(t.$$.fragment,e),n=!0)},o(e){c(t.$$.fragment,e),n=!1},d(e){g(t,e)}}}function $e(l){let t=l[9]+"",n;return{c(){n=k(t)},l(e){n=b(e,t)},m(e,s){d(e,n,s)},p:ae,d(e){e&&p(n)}}}function J(l){let t,n;return t=new G({props:{value:l[9],$$slots:{default:[$e]},$$scope:{ctx:l}}}),{c(){$(t.$$.fragment)},l(e){m(t.$$.fragment,e)},m(e,s){_(t,e,s),n=!0},p(e,s){const r={};s&4096&&(r.$$scope={dirty:s,ctx:e}),t.$set(r)},i(e){n||(u(t.$$.fragment,e),n=!0)},o(e){c(t.$$.fragment,e),n=!1},d(e){g(t,e)}}}function me(l){let t;return{c(){t=k(l[0])},l(n){t=b(n,l[0])},m(n,e){d(n,t,e)},p(n,e){e&1&&se(t,n[0])},d(n){n&&p(t)}}}function pe(l){let t,n,e,s;const r=[ie,ce],a=[];function f(o,i){return o[1]?0:1}return t=f(l),n=a[t]=r[t](l),{c(){n.c(),e=w()},l(o){n.l(o),e=w()},m(o,i){a[t].m(o,i),d(o,e,i),s=!0},p(o,i){n.p(o,i)},i(o){s||(u(n),s=!0)},o(o){c(n),s=!1},d(o){a[t].d(o),o&&p(e)}}}function _e(l){let t,n,e,s;function r(f){l[4](f)}let a={dark:!0,id:"namespace-select",class:"namespace-select",$$slots:{default:[pe]},$$scope:{ctx:l}};return l[0]!==void 0&&(a.value=l[0]),n=new ue({props:a}),R.push(()=>U(n,"value",r)),n.$on("change",l[3]),{c(){t=y("div"),$(n.$$.fragment),this.h()},l(f){t=x(f,"DIV",{class:!0});var o=ee(t);m(n.$$.fragment,o),o.forEach(p),this.h()},h(){te(t,"class","w-full")},m(f,o){d(f,t,o),_(n,t,null),s=!0},p(f,[o]){const i={};o&4097&&(i.$$scope={dirty:o,ctx:f}),!e&&o&1&&(e=!0,i.value=f[0],ne(()=>e=!1)),n.$set(i)},i(f){s||(u(n.$$.fragment,f),s=!0)},o(f){c(n.$$.fragment,f),s=!1},d(f){f&&p(t),g(n)}}}function ge(l,t,n){let e;F(l,O,h=>n(7,e=h));var s,r;const{showTemporalSystemNamespace:a}=e.stuff.settings,{isCloud:f}=e.stuff.settings.runtimeEnvironment;let o=e.params.namespace||((r=(s=e.stuff)===null||s===void 0?void 0:s.settings)===null||r===void 0?void 0:r.defaultNamespace),i=(e.stuff.namespaces||[]).map(h=>{var A;return(A=h==null?void 0:h.namespaceInfo)===null||A===void 0?void 0:A.name}).filter(h=>a||h!=="temporal-system");const S=h=>{const j=h.target.value;j&&fe(v({namespace:j}))};function Q(h){o=h,n(0,o)}return[o,f,i,S,Q]}class M extends E{constructor(t){super(),I(this,t,ge,_e,C,{})}}const de=l=>({}),K=l=>({});function he(l){let t;const n=l[2].default,e=V(n,l,l[1],null);return{c(){e&&e.c()},l(s){e&&e.l(s)},m(s,r){e&&e.m(s,r),t=!0},p(s,r){e&&e.p&&(!t||r&2)&&X(e,n,s,s[1],t?Z(n,s[1],r,null):Y(s[1]),null)},i(s){t||(u(e,s),t=!0)},o(s){c(e,s),t=!1},d(s){e&&e.d(s)}}}function ve(l){let t;const n=l[2].fallback,e=V(n,l,l[1],K);return{c(){e&&e.c()},l(s){e&&e.l(s)},m(s,r){e&&e.m(s,r),t=!0},p(s,r){e&&e.p&&(!t||r&2)&&X(e,n,s,s[1],t?Z(n,s[1],r,de):Y(s[1]),K)},i(s){t||(u(e,s),t=!0)},o(s){c(e,s),t=!1},d(s){e&&e.d(s)}}}function ke(l){let t,n,e,s;const r=[ve,he],a=[];function f(o,i){return o[0].stuff.settings.runtimeEnvironment.isCloud?0:1}return t=f(l),n=a[t]=r[t](l),{c(){n.c(),e=w()},l(o){n.l(o),e=w()},m(o,i){a[t].m(o,i),d(o,e,i),s=!0},p(o,[i]){let S=t;t=f(o),t===S?a[t].p(o,i):(L(),c(a[S],1,1,()=>{a[S]=null}),T(),n=a[t],n?n.p(o,i):(n=a[t]=r[t](o),n.c()),u(n,1),n.m(e.parentNode,e))},i(o){s||(u(n),s=!0)},o(o){c(n),s=!1},d(o){a[t].d(o),o&&p(e)}}}function be(l,t,n){let e;F(l,O,a=>n(0,e=a));let{$$slots:s={},$$scope:r}=t;return l.$$set=a=>{"$$scope"in a&&n(1,r=a.$$scope)},[e,r,s]}class P extends E{constructor(t){super(),I(this,t,be,ke,C,{})}}function we(l){let t,n;return t=new M({}),{c(){$(t.$$.fragment)},l(e){m(t.$$.fragment,e)},m(e,s){_(t,e,s),n=!0},i(e){n||(u(t.$$.fragment,e),n=!0)},o(e){c(t.$$.fragment,e),n=!1},d(e){g(t,e)}}}function Ne(l){let t;return{c(){t=k("Workflows")},l(n){t=b(n,"Workflows")},m(n,e){d(n,t,e)},d(n){n&&p(t)}}}function Se(l){let t;return{c(){t=k("Settings")},l(n){t=b(n,"Settings")},m(n,e){d(n,t,e)},d(n){n&&p(t)}}}function Ae(l){let t;return{c(){t=k("Archival")},l(n){t=b(n,"Archival")},m(n,e){d(n,t,e)},d(n){n&&p(t)}}}function We(l){let t,n,e,s;return t=new N({props:{href:W({namespace:l[1]}),$$slots:{default:[Se]},$$scope:{ctx:l}}}),e=new N({props:{href:H({namespace:l[1]}),$$slots:{default:[Ae]},$$scope:{ctx:l}}}),{c(){$(t.$$.fragment),n=q(),$(e.$$.fragment)},l(r){m(t.$$.fragment,r),n=B(r),m(e.$$.fragment,r)},m(r,a){_(t,r,a),d(r,n,a),_(e,r,a),s=!0},p(r,a){const f={};a&2&&(f.href=W({namespace:r[1]})),a&32&&(f.$$scope={dirty:a,ctx:r}),t.$set(f);const o={};a&2&&(o.href=H({namespace:r[1]})),a&32&&(o.$$scope={dirty:a,ctx:r}),e.$set(o)},i(r){s||(u(t.$$.fragment,r),u(e.$$.fragment,r),s=!0)},o(r){c(t.$$.fragment,r),c(e.$$.fragment,r),s=!1},d(r){g(t,r),r&&p(n),g(e,r)}}}function He(l){let t,n,e,s;return t=new N({props:{href:v({namespace:l[1]}),$$slots:{default:[Ne]},$$scope:{ctx:l}}}),e=new P({props:{$$slots:{default:[We]},$$scope:{ctx:l}}}),{c(){$(t.$$.fragment),n=q(),$(e.$$.fragment)},l(r){m(t.$$.fragment,r),n=B(r),m(e.$$.fragment,r)},m(r,a){_(t,r,a),d(r,n,a),_(e,r,a),s=!0},p(r,a){const f={};a&2&&(f.href=v({namespace:r[1]})),a&32&&(f.$$scope={dirty:a,ctx:r}),t.$set(f);const o={};a&34&&(o.$$scope={dirty:a,ctx:r}),e.$set(o)},i(r){s||(u(t.$$.fragment,r),u(e.$$.fragment,r),s=!0)},o(r){c(t.$$.fragment,r),c(e.$$.fragment,r),s=!1},d(r){g(t,r),r&&p(n),g(e,r)}}}function Ee(l){let t,n;return t=new z({props:{user:l[0]}}),{c(){$(t.$$.fragment)},l(e){m(t.$$.fragment,e)},m(e,s){_(t,e,s),n=!0},p(e,s){const r={};s&1&&(r.user=e[0]),t.$set(r)},i(e){n||(u(t.$$.fragment,e),n=!0)},o(e){c(t.$$.fragment,e),n=!1},d(e){g(t,e)}}}function Ie(l){let t,n;return t=new oe({props:{href:v({namespace:l[1]}),$$slots:{user:[Ee],links:[He],logo:[we]},$$scope:{ctx:l}}}),{c(){$(t.$$.fragment)},l(e){m(t.$$.fragment,e)},m(e,s){_(t,e,s),n=!0},p(e,[s]){const r={};s&2&&(r.href=v({namespace:e[1]})),s&35&&(r.$$scope={dirty:s,ctx:e}),t.$set(r)},i(e){n||(u(t.$$.fragment,e),n=!0)},o(e){c(t.$$.fragment,e),n=!1},d(e){g(t,e)}}}function Ce(l,t,n){let e,s;F(l,O,o=>n(4,s=o));var r,a;let{user:f}=t;return l.$$set=o=>{"user"in o&&n(0,f=o.user)},l.$$.update=()=>{l.$$.dirty&28&&n(1,e=s.params.namespace||(n(3,a=n(2,r=s.stuff)===null||r===void 0?void 0:r.settings)===null||a===void 0?void 0:a.defaultNamespace))},[f,e,r,a,s]}class Me extends E{constructor(t){super(),I(this,t,Ce,Ie,C,{user:0})}}function Fe(l){let t,n;return t=new M({}),{c(){$(t.$$.fragment)},l(e){m(t.$$.fragment,e)},m(e,s){_(t,e,s),n=!0},i(e){n||(u(t.$$.fragment,e),n=!0)},o(e){c(t.$$.fragment,e),n=!1},d(e){g(t,e)}}}function qe(l){let t;return{c(){t=k("Workflows")},l(n){t=b(n,"Workflows")},m(n,e){d(n,t,e)},d(n){n&&p(t)}}}function Be(l){let t;return{c(){t=k("Settings")},l(n){t=b(n,"Settings")},m(n,e){d(n,t,e)},d(n){n&&p(t)}}}function Oe(l){let t;return{c(){t=k("Archival")},l(n){t=b(n,"Archival")},m(n,e){d(n,t,e)},d(n){n&&p(t)}}}function je(l){let t,n,e,s;return t=new N({props:{href:W({namespace:l[1]}),$$slots:{default:[Be]},$$scope:{ctx:l}}}),e=new N({props:{href:H({namespace:l[1]}),$$slots:{default:[Oe]},$$scope:{ctx:l}}}),{c(){$(t.$$.fragment),n=q(),$(e.$$.fragment)},l(r){m(t.$$.fragment,r),n=B(r),m(e.$$.fragment,r)},m(r,a){_(t,r,a),d(r,n,a),_(e,r,a),s=!0},p(r,a){const f={};a&2&&(f.href=W({namespace:r[1]})),a&32&&(f.$$scope={dirty:a,ctx:r}),t.$set(f);const o={};a&2&&(o.href=H({namespace:r[1]})),a&32&&(o.$$scope={dirty:a,ctx:r}),e.$set(o)},i(r){s||(u(t.$$.fragment,r),u(e.$$.fragment,r),s=!0)},o(r){c(t.$$.fragment,r),c(e.$$.fragment,r),s=!1},d(r){g(t,r),r&&p(n),g(e,r)}}}function De(l){let t,n,e,s;return t=new N({props:{href:v({namespace:l[1]}),$$slots:{default:[qe]},$$scope:{ctx:l}}}),e=new P({props:{$$slots:{default:[je]},$$scope:{ctx:l}}}),{c(){$(t.$$.fragment),n=q(),$(e.$$.fragment)},l(r){m(t.$$.fragment,r),n=B(r),m(e.$$.fragment,r)},m(r,a){_(t,r,a),d(r,n,a),_(e,r,a),s=!0},p(r,a){const f={};a&2&&(f.href=v({namespace:r[1]})),a&32&&(f.$$scope={dirty:a,ctx:r}),t.$set(f);const o={};a&34&&(o.$$scope={dirty:a,ctx:r}),e.$set(o)},i(r){s||(u(t.$$.fragment,r),u(e.$$.fragment,r),s=!0)},o(r){c(t.$$.fragment,r),c(e.$$.fragment,r),s=!1},d(r){g(t,r),r&&p(n),g(e,r)}}}function Je(l){let t,n;return t=new z({props:{user:l[0]}}),{c(){$(t.$$.fragment)},l(e){m(t.$$.fragment,e)},m(e,s){_(t,e,s),n=!0},p(e,s){const r={};s&1&&(r.user=e[0]),t.$set(r)},i(e){n||(u(t.$$.fragment,e),n=!0)},o(e){c(t.$$.fragment,e),n=!1},d(e){g(t,e)}}}function Ke(l){let t,n;return t=new le({props:{href:v({namespace:l[1]}),$$slots:{user:[Je],links:[De],action:[Fe]},$$scope:{ctx:l}}}),{c(){$(t.$$.fragment)},l(e){m(t.$$.fragment,e)},m(e,s){_(t,e,s),n=!0},p(e,[s]){const r={};s&2&&(r.href=v({namespace:e[1]})),s&35&&(r.$$scope={dirty:s,ctx:e}),t.$set(r)},i(e){n||(u(t.$$.fragment,e),n=!0)},o(e){c(t.$$.fragment,e),n=!1},d(e){g(t,e)}}}function Le(l,t,n){let e,s;F(l,O,o=>n(4,s=o));var r,a;let{user:f}=t;return l.$$set=o=>{"user"in o&&n(0,f=o.user)},l.$$.update=()=>{l.$$.dirty&28&&n(1,e=s.params.namespace||(n(3,a=n(2,r=s.stuff)===null||r===void 0?void 0:r.settings)===null||a===void 0?void 0:a.defaultNamespace))},[f,e,r,a,s]}class Pe extends E{constructor(t){super(),I(this,t,Le,Ke,C,{user:0})}}export{Me as H,Pe as a};

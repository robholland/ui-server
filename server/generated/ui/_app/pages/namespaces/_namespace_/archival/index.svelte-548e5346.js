import{S as O,i as Q,s as X,l as R,g as w,o as v,p as L,q as h,d as k,n as j,e as H,t as D,k as T,w as A,c as P,a as I,h as N,m as C,x as F,L as E,y as S,B as W,b as V,F as Y,G as Z,ak as U,H as x,al as ee,T as y,aS as te}from"../../../../chunks/vendor-d2aeeaa0.js";import{b as K}from"../../../../chunks/workflow-status-348719ec.js";import{W as le,a as ae,b as re,c as ie}from"../../../../chunks/_workflows-loading-7660ea94.js";import{E as oe}from"../../../../chunks/empty-state-1d846d5d.js";import{C as M}from"../../../../chunks/code-block-5241c910.js";import"../../../../chunks/route-for-api-5ed9fa42.js";import"../../../../chunks/navigation-093db9e2.js";import"../../../../chunks/singletons-a6a7384f.js";import"../../../../chunks/notifications-454ac6a7.js";import"../../../../chunks/is-network-error-ac7c8caf.js";import"../../../../chunks/format-date-b97731ae.js";import"../../../../chunks/namespace-7a531208.js";import"../../../../chunks/stores-4e423f57.js";import"../../../../chunks/route-for-f402e023.js";import"../../../../chunks/select-b96bf743.js";import"../../../../chunks/filter-select-d7f1339c.js";function z(o){o[8]=o[9].workflows}function ne(o){let e,l,t,a,n,r,f,i,m,p,b,u,s,_,g;f=new M({props:{content:"tctl --namespace default namespace update --has enabled",language:"text"}});let d=!o[1]&&J();return{c(){e=H("h2"),l=D("This namespace is currently not enabled for archival."),t=T(),a=H("p"),n=D("Run this command to enable Archival for Event Histories:"),r=T(),A(f.$$.fragment),i=T(),d&&d.c(),m=T(),p=H("p"),b=D("For more details please check out "),u=H("a"),s=D("Archival Docs"),_=D("."),this.h()},l(c){e=P(c,"H2",{class:!0});var $=I(e);l=N($,"This namespace is currently not enabled for archival."),$.forEach(k),t=C(c),a=P(c,"P",{});var B=I(a);n=N(B,"Run this command to enable Archival for Event Histories:"),B.forEach(k),r=C(c),F(f.$$.fragment,c),i=C(c),d&&d.l(c),m=C(c),p=P(c,"P",{});var q=I(p);b=N(q,"For more details please check out "),u=P(q,"A",{class:!0,href:!0,target:!0});var G=I(u);s=N(G,"Archival Docs"),G.forEach(k),_=N(q,"."),q.forEach(k),this.h()},h(){V(e,"class","text-2xl"),V(u,"class","text-blue-700 underline"),V(u,"href","https://docs.temporal.io/docs/server/archive-data/"),V(u,"target","_blank")},m(c,$){w(c,e,$),E(e,l),w(c,t,$),w(c,a,$),E(a,n),w(c,r,$),S(f,c,$),w(c,i,$),d&&d.m(c,$),w(c,m,$),w(c,p,$),E(p,b),E(p,u),E(u,s),E(p,_),g=!0},p(c,$){c[1]?d&&(j(),v(d,1,1,()=>{d=null}),L()):d?$&2&&h(d,1):(d=J(),d.c(),h(d,1),d.m(m.parentNode,m))},i(c){g||(h(f.$$.fragment,c),h(d),g=!0)},o(c){v(f.$$.fragment,c),v(d),g=!1},d(c){c&&k(e),c&&k(t),c&&k(a),c&&k(r),W(f,c),c&&k(i),d&&d.d(c),c&&k(m),c&&k(p)}}}function se(o){let e,l,t,a,n,r,f,i,m;function p(s){o[7](s)}let b={};o[2]!==void 0&&(b.timeFormat=o[2]),a=new le({props:b}),Y.push(()=>Z(a,"timeFormat",p));let u={ctx:o,current:null,token:null,hasCatch:!1,pending:be,then:fe,catch:ce,value:9,blocks:[,,,]};return U(i=o[3],u),{c(){e=H("h2"),l=D("Archived Workflows"),t=T(),A(a.$$.fragment),r=T(),f=R(),u.block.c(),this.h()},l(s){e=P(s,"H2",{class:!0});var _=I(e);l=N(_,"Archived Workflows"),_.forEach(k),t=C(s),F(a.$$.fragment,s),r=C(s),f=R(),u.block.l(s),this.h()},h(){V(e,"class","text-2xl")},m(s,_){w(s,e,_),E(e,l),w(s,t,_),S(a,s,_),w(s,r,_),w(s,f,_),u.block.m(s,u.anchor=_),u.mount=()=>f.parentNode,u.anchor=f,m=!0},p(s,_){o=s;const g={};!n&&_&4&&(n=!0,g.timeFormat=o[2],x(()=>n=!1)),a.$set(g),u.ctx=o,_&8&&i!==(i=o[3])&&U(i,u)||ee(u,o,_)},i(s){m||(h(a.$$.fragment,s),h(u.block),m=!0)},o(s){v(a.$$.fragment,s);for(let _=0;_<3;_+=1){const g=u.blocks[_];v(g)}m=!1},d(s){s&&k(e),s&&k(t),W(a,s),s&&k(r),s&&k(f),u.block.d(s),u.token=null,u=null}}}function J(o){let e,l,t,a,n;return a=new M({props:{content:"tctl --namespace default namespace update -vas enabled",language:"text"}}),{c(){e=H("p"),l=D("To enable Visibility Archival:"),t=T(),A(a.$$.fragment)},l(r){e=P(r,"P",{});var f=I(e);l=N(f,"To enable Visibility Archival:"),f.forEach(k),t=C(r),F(a.$$.fragment,r)},m(r,f){w(r,e,f),E(e,l),w(r,t,f),S(a,r,f),n=!0},i(r){n||(h(a.$$.fragment,r),n=!0)},o(r){v(a.$$.fragment,r),n=!1},d(r){r&&k(e),r&&k(t),W(a,r)}}}function ce(o){return{c:y,l:y,m:y,p:y,i:y,o:y,d:y}}function fe(o){z(o);let e,l,t,a;const n=[ue,me],r=[];function f(i,m){return i[8].length?0:1}return e=f(o),l=r[e]=n[e](o),{c(){l.c(),t=R()},l(i){l.l(i),t=R()},m(i,m){r[e].m(i,m),w(i,t,m),a=!0},p(i,m){z(i);let p=e;e=f(i),e===p?r[e].p(i,m):(j(),v(r[p],1,1,()=>{r[p]=null}),L(),l=r[e],l?l.p(i,m):(l=r[e]=n[e](i),l.c()),h(l,1),l.m(t.parentNode,t))},i(i){a||(h(l),a=!0)},o(i){v(l),a=!1},d(i){r[e].d(i),i&&k(t)}}}function me(o){let e,l;return e=new oe({props:{title:"No Workflows Found",content:"If you have filters applied, try adjusting them."}}),{c(){A(e.$$.fragment)},l(t){F(e.$$.fragment,t)},m(t,a){S(e,t,a),l=!0},p:y,i(t){l||(h(e.$$.fragment,t),l=!0)},o(t){v(e.$$.fragment,t),l=!1},d(t){W(e,t)}}}function ue(o){let e,l;return e=new re({props:{$$slots:{default:[pe]},$$scope:{ctx:o}}}),{c(){A(e.$$.fragment)},l(t){F(e.$$.fragment,t)},m(t,a){S(e,t,a),l=!0},p(t,a){const n={};a&2060&&(n.$$scope={dirty:a,ctx:t}),e.$set(n)},i(t){l||(h(e.$$.fragment,t),l=!0)},o(t){v(e.$$.fragment,t),l=!1},d(t){W(e,t)}}}function _e(o){let e,l;return e=new ie({props:{workflow:o[10],timeFormat:o[2]}}),{c(){A(e.$$.fragment)},l(t){F(e.$$.fragment,t)},m(t,a){S(e,t,a),l=!0},p(t,a){const n={};a&1024&&(n.workflow=t[10]),a&4&&(n.timeFormat=t[2]),e.$set(n)},i(t){l||(h(e.$$.fragment,t),l=!0)},o(t){v(e.$$.fragment,t),l=!1},d(t){W(e,t)}}}function pe(o){let e,l;return e=new te({props:{items:o[8],$$slots:{default:[_e,({item:t})=>({10:t}),({item:t})=>t?1024:0]},$$scope:{ctx:o}}}),{c(){A(e.$$.fragment)},l(t){F(e.$$.fragment,t)},m(t,a){S(e,t,a),l=!0},p(t,a){const n={};a&8&&(n.items=t[8]),a&3076&&(n.$$scope={dirty:a,ctx:t}),e.$set(n)},i(t){l||(h(e.$$.fragment,t),l=!0)},o(t){v(e.$$.fragment,t),l=!1},d(t){W(e,t)}}}function be(o){let e,l;return e=new ae({}),{c(){A(e.$$.fragment)},l(t){F(e.$$.fragment,t)},m(t,a){S(e,t,a),l=!0},p:y,i(t){l||(h(e.$$.fragment,t),l=!0)},o(t){v(e.$$.fragment,t),l=!1},d(t){W(e,t)}}}function ke(o){let e,l,t,a;const n=[se,ne],r=[];function f(i,m){return i[0]?0:1}return e=f(o),l=r[e]=n[e](o),{c(){l.c(),t=R()},l(i){l.l(i),t=R()},m(i,m){r[e].m(i,m),w(i,t,m),a=!0},p(i,[m]){let p=e;e=f(i),e===p?r[e].p(i,m):(j(),v(r[p],1,1,()=>{r[p]=null}),L(),l=r[e],l?l.p(i,m):(l=r[e]=n[e](i),l.c()),h(l,1),l.m(t.parentNode,t))},i(i){a||(h(l),a=!0)},o(i){v(l),a=!1},d(i){r[e].d(i),i&&k(t)}}}const Pe=async function({params:o,url:e,stuff:l}){var t,a;const{searchParams:n}=e;n.has("time-range")||n.set("time-range","24 hours");const r=o.namespace,f=n.get("workflow-id"),i=n.get("workflow-type"),m=n.get("time-range"),p=n.get("status"),b={workflowId:f,workflowType:i,closeTime:m,executionStatus:p},s=l.namespaces.find(c=>c.namespaceInfo.name===r),_=((t=s==null?void 0:s.config)===null||t===void 0?void 0:t.historyArchivalState)==="Enabled",g=((a=s==null?void 0:s.config)===null||a===void 0?void 0:a.visibilityArchivalState)==="Enabled";return{props:{initialData:_?await K(r,b,fetch):Promise.resolve(null),namespace:r,parameters:b,archivalEnabled:_,visibilityArchivalEnabled:g}}};function de(o,e,l){let{namespace:t}=e,{initialData:a}=e,{parameters:n}=e,{archivalEnabled:r=!1}=e,{visibilityArchivalEnabled:f=!1}=e,i="UTC",m=a;function p(b){i=b,l(2,i)}return o.$$set=b=>{"namespace"in b&&l(4,t=b.namespace),"initialData"in b&&l(5,a=b.initialData),"parameters"in b&&l(6,n=b.parameters),"archivalEnabled"in b&&l(0,r=b.archivalEnabled),"visibilityArchivalEnabled"in b&&l(1,f=b.visibilityArchivalEnabled)},o.$$.update=()=>{o.$$.dirty&81&&r&&l(3,m=K(t,n))},[r,f,i,m,t,a,n,p]}class Ie extends O{constructor(e){super();Q(this,e,de,ke,X,{namespace:4,initialData:5,parameters:6,archivalEnabled:0,visibilityArchivalEnabled:1})}}export{Ie as default,Pe as load};
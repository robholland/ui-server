import{S as D,i as H,s as P,aS as T,e as u,k as w,t as I,w as V,c as f,a as $,d as n,m as C,h as q,x as W,V as G,b as o,g as y,L as m,y as M,q as N,o as R,B as U,I as j}from"../../chunks/vendor-ff19c65d.js";import{f as z}from"../../chunks/settings-service-a5229b45.js";import{g as F}from"../../chunks/get-login-url-4f746c99.js";import{B as J}from"../../chunks/button-fcd14ccb.js";import{p as K}from"../../chunks/stores-4aa32d62.js";import{g as Q}from"../../chunks/navigation-093db9e2.js";import"../../chunks/route-for-api-41dce74a.js";import"../../chunks/notifications-089fbae0.js";import"../../chunks/is-network-error-ac7c8caf.js";import"../../chunks/singletons-a6a7384f.js";function X(c){let t;return{c(){t=I("Continue to SSO")},l(s){t=q(s,"Continue to SSO")},m(s,r){y(s,t,r)},d(s){s&&n(t)}}}function Y(c){let t,s,r,p,g,a,h,S,E,d,k,L,_,i,b;return i=new J({props:{classes:"",login:!0,icon:T,$$slots:{default:[X]},$$scope:{ctx:c}}}),i.$on("click",c[2]),{c(){t=u("header"),s=u("a"),r=u("img"),g=w(),a=u("section"),h=u("h1"),S=I("Welcome back."),E=w(),d=u("p"),k=I("Lets get you signed in."),L=w(),_=u("div"),V(i.$$.fragment),this.h()},l(e){t=f(e,"HEADER",{class:!0});var l=$(t);s=f(l,"A",{href:!0,class:!0});var v=$(s);r=f(v,"IMG",{src:!0,alt:!0,class:!0}),v.forEach(n),l.forEach(n),g=C(e),a=f(e,"SECTION",{class:!0});var x=$(a);h=f(x,"H1",{class:!0});var B=$(h);S=q(B,"Welcome back."),B.forEach(n),E=C(x),d=f(x,"P",{class:!0});var O=$(d);k=q(O,"Lets get you signed in."),O.forEach(n),L=C(x),_=f(x,"DIV",{class:!0});var A=$(_);W(i.$$.fragment,A),A.forEach(n),x.forEach(n),this.h()},h(){G(r.src,p="/logo.svg")||o(r,"src",p),o(r,"alt","Temporal Logo"),o(r,"class","max-h-8"),o(s,"href","/"),o(s,"class","flex my-4 max-h-8"),o(t,"class","grid grid-rows-1 grid-cols-12 px-10 items-center bg-gray-900 shadow-lg gap-6"),o(h,"class","text-8xl font-semibold"),o(d,"class","my-7"),o(_,"class","mx-auto"),o(a,"class","text-center my-[20vh]")},m(e,l){y(e,t,l),m(t,s),m(s,r),y(e,g,l),y(e,a,l),m(a,h),m(h,S),m(a,E),m(a,d),m(d,k),m(a,L),m(a,_),M(i,_,null),b=!0},p(e,[l]){const v={};l&8&&(v.$$scope={dirty:l,ctx:e}),i.$set(v)},i(e){b||(N(i.$$.fragment,e),b=!0)},o(e){R(i.$$.fragment,e),b=!1},d(e){e&&n(t),e&&n(g),e&&n(a),U(i)}}}const mt=async function({url:c}){const t=await z({url:c});return t.auth.enabled?{props:{settings:t},stuff:{settings:t}}:{status:404}};function Z(c,t,s){let r;j(c,K,a=>s(1,r=a));let{settings:p}=t;const g=()=>{Q(F(p,r.url.searchParams))};return c.$$set=a=>{"settings"in a&&s(0,p=a.settings)},[p,r,g]}class ut extends D{constructor(t){super();H(this,t,Z,Y,P,{settings:0})}}export{ut as default,mt as load};

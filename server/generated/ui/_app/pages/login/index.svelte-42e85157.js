import{S as D,i as H,s as P,aS as T,e as u,k as w,t as I,w as V,c as f,a as $,d as n,m as C,h as q,x as W,V as G,b as r,g as y,L as m,y as M,q as N,o as R,B as U,I as j}from"../../chunks/vendor-ff19c65d.js";import{f as z}from"../../chunks/settings-service-a5229b45.js";import{g as F}from"../../chunks/get-login-url-4f746c99.js";import{B as J}from"../../chunks/button-fcd14ccb.js";import{p as K}from"../../chunks/stores-4aa32d62.js";import{g as Q}from"../../chunks/navigation-093db9e2.js";import"../../chunks/route-for-api-41dce74a.js";import"../../chunks/notifications-089fbae0.js";import"../../chunks/is-network-error-ac7c8caf.js";import"../../chunks/singletons-a6a7384f.js";function X(c){let t;return{c(){t=I("Continue to SSO")},l(s){t=q(s,"Continue to SSO")},m(s,o){y(s,t,o)},d(s){s&&n(t)}}}function Y(c){let t,s,o,p,g,a,h,E,S,d,L,k,_,i,b;return i=new J({props:{classes:"",login:!0,icon:T,$$slots:{default:[X]},$$scope:{ctx:c}}}),i.$on("click",c[2]),{c(){t=u("header"),s=u("a"),o=u("img"),g=w(),a=u("section"),h=u("h1"),E=I("Welcome back."),S=w(),d=u("p"),L=I("Lets get you signed in."),k=w(),_=u("div"),V(i.$$.fragment),this.h()},l(e){t=f(e,"HEADER",{class:!0});var l=$(t);s=f(l,"A",{href:!0,class:!0});var v=$(s);o=f(v,"IMG",{src:!0,alt:!0,class:!0}),v.forEach(n),l.forEach(n),g=C(e),a=f(e,"SECTION",{class:!0});var x=$(a);h=f(x,"H1",{class:!0});var B=$(h);E=q(B,"Welcome back."),B.forEach(n),S=C(x),d=f(x,"P",{class:!0});var O=$(d);L=q(O,"Lets get you signed in."),O.forEach(n),k=C(x),_=f(x,"DIV",{class:!0});var A=$(_);W(i.$$.fragment,A),A.forEach(n),x.forEach(n),this.h()},h(){G(o.src,p="/logo.svg")||r(o,"src",p),r(o,"alt","Temporal Logo"),r(o,"class","max-h-8"),r(s,"href","/"),r(s,"class","flex my-4 max-h-8"),r(t,"class","grid grid-rows-1 grid-cols-12 px-10 items-center bg-gray-900 shadow-lg gap-6"),r(h,"class","text-8xl font-semibold"),r(d,"class","my-7"),r(_,"class","mx-auto"),r(a,"class","text-center my-[20vh]")},m(e,l){y(e,t,l),m(t,s),m(s,o),y(e,g,l),y(e,a,l),m(a,h),m(h,E),m(a,S),m(a,d),m(d,L),m(a,k),m(a,_),M(i,_,null),b=!0},p(e,[l]){const v={};l&8&&(v.$$scope={dirty:l,ctx:e}),i.$set(v)},i(e){b||(N(i.$$.fragment,e),b=!0)},o(e){R(i.$$.fragment,e),b=!1},d(e){e&&n(t),e&&n(g),e&&n(a),U(i)}}}const mt=async function({url:c}){const t=await z({url:c});return t.auth.enabled?{props:{settings:t},stuff:{settings:t}}:{status:404}};function Z(c,t,s){let o;j(c,K,a=>s(1,o=a));let{settings:p}=t;const g=()=>{Q(F(p,o.url.searchParams))};return c.$$set=a=>{"settings"in a&&s(0,p=a.settings)},[p,o,g]}class ut extends D{constructor(t){super();H(this,t,Z,Y,P,{settings:0})}}export{ut as default,mt as load};

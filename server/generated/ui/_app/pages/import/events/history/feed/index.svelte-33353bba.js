import{S as u,i as c,s as f,w as g,x as _,y,q as l,o as E,B as d,N as s}from"../../../../../chunks/index-6f949d33.js";import{p as v}from"../../../../../chunks/stores-e4f64366.js";import{i as h,a as b}from"../../../../../chunks/import-events-85ab41f6.js";import{E as q}from"../../../../../chunks/event-summary-a29fd54f.js";import"../../../../../chunks/index-8e6fc7ce.js";import"../../../../../chunks/event-view-e934a955.js";import"../../../../../chunks/persist-store-aa0162b2.js";import"../../../../../chunks/pagination-9810f3e5.js";import"../../../../../chunks/index.es-2106a8ff.js";import"../../../../../chunks/navigation-3f1ea447.js";import"../../../../../chunks/singletons-d1fb5791.js";import"../../../../../chunks/select-f4e16218.js";import"../../../../../chunks/index-de28377f.js";import"../../../../../chunks/get-event-categorization-20095c1b.js";import"../../../../../chunks/time-format-c563ff6c.js";import"../../../../../chunks/index-8821dfb5.js";import"../../../../../chunks/format-date-4b1bc9ef.js";import"../../../../../chunks/get-single-attribute-for-event-9ffd10ea.js";import"../../../../../chunks/format-camel-case-abb2903d.js";import"../../../../../chunks/route-for-9a2d1abe.js";import"../../../../../chunks/code-block-bab2ec39.js";import"../../../../../chunks/link-d366f910.js";import"../../../../../chunks/copyable-800bc2cf.js";import"../../../../../chunks/empty-state-aa8c1a48.js";function w(o){let r,e;return r=new q({props:{items:o[0],groups:o[1]}}),{c(){g(r.$$.fragment)},l(t){_(r.$$.fragment,t)},m(t,p){y(r,t,p),e=!0},p(t,[p]){const i={};p&1&&(i.items=t[0]),p&2&&(i.groups=t[1]),r.$set(i)},i(t){e||(l(r.$$.fragment,t),e=!0)},o(t){E(r.$$.fragment,t),e=!1},d(t){d(r,t)}}}function G(o,r,e){let t,p,i,n,a;return s(o,h,m=>e(3,i=m)),s(o,v,m=>e(4,n=m)),s(o,b,m=>e(1,a=m)),o.$$.update=()=>{o.$$.dirty&16&&e(2,t=n.url.searchParams.get("category")),o.$$.dirty&12&&e(0,p=i.filter(m=>t?m.category===t:m))},[p,a,t,i,n]}class V extends u{constructor(r){super(),c(this,r,G,w,f,{})}}export{V as default};
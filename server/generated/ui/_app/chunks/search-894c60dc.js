import{S as _e,i as ve,s as pe,I as qe,e as w,t as z,k as D,c as b,a as k,h as y,d,m as S,b as f,a0 as fe,g as ae,M as r,aq as de,J as Ce,K as je,L as Fe,q as Q,o as x,N as le,w as re,x as oe,y as ne,j as $,B as ie,E as Ne,T as De,ap as Pe,n as Ae,p as Le,G as Be,V as Se}from"./index-b54af4f8.js";import{f as Z,g as Ve}from"./format-date-4b1bc9ef.js";import{k as Me}from"./route-for-6c8ee7a8.js";import{w as we}from"./index-4543480f.js";import{W as Oe}from"./workflow-status-bc25fa25.js";import{T as ze}from"./tooltip-37dea950.js";import{F as Re,v as Ue}from"./index.es-49fdf6ab.js";import{B as Ge}from"./button-dc4029e3.js";const ce=we(0),me=we(0),he=we(0);function He(t){let e,l,a,s,n,i,m,E,g,u,o,A,c,v,h,j,q,L,B,G,C,M,O,X,H,N,R;const U=t[4].default,W=qe(U,t,t[3],null);return{c(){e=w("section"),l=w("div"),a=w("div"),s=w("div"),n=z("Status"),i=D(),m=w("div"),E=z("Workflow ID"),u=D(),o=w("div"),A=z("Type"),v=D(),h=w("div"),j=z("Start"),q=D(),L=w("div"),B=z("End"),G=D(),C=w("div"),M=w("div"),O=z("Summary"),H=D(),N=w("div"),W&&W.c(),this.h()},l(I){e=b(I,"SECTION",{class:!0});var T=k(e);l=b(T,"DIV",{class:!0});var Y=k(l);a=b(Y,"DIV",{class:!0});var V=k(a);s=b(V,"DIV",{class:!0});var ee=k(s);n=y(ee,"Status"),ee.forEach(d),i=S(V),m=b(V,"DIV",{class:!0});var F=k(m);E=y(F,"Workflow ID"),F.forEach(d),u=S(V),o=b(V,"DIV",{class:!0});var _=k(o);A=y(_,"Type"),_.forEach(d),v=S(V),h=b(V,"DIV",{class:!0});var p=k(h);j=y(p,"Start"),p.forEach(d),q=S(V),L=b(V,"DIV",{class:!0});var J=k(L);B=y(J,"End"),J.forEach(d),V.forEach(d),Y.forEach(d),G=S(T),C=b(T,"DIV",{class:!0});var K=k(C);M=b(K,"DIV",{class:!0});var P=k(M);O=y(P,"Summary"),P.forEach(d),K.forEach(d),H=S(T),N=b(T,"DIV",{class:!0});var se=k(N);W&&W.l(se),se.forEach(d),T.forEach(d),this.h()},h(){f(s,"class","table-header table-cell rounded-tl-md w-28 svelte-qjwazb"),f(m,"class","table-header table-cell md:w-60 xl:w-auto svelte-qjwazb"),fe(()=>t[5].call(m)),f(o,"class","table-header table-cell md:w-60 xl:w-80 svelte-qjwazb"),fe(()=>t[6].call(o)),f(h,"class","table-header hidden xl:table-cell xl:w-64 text-sm xl:text-base svelte-qjwazb"),f(L,"class","table-header rounded-tr-md hidden xl:table-cell xl:w-64 svelte-qjwazb"),f(a,"class","md:table-row hidden"),f(l,"class","table-header-row md:table-header-group svelte-qjwazb"),f(M,"class","p-2 border-b rounded-t-md"),f(C,"class","table-header-row md:hidden svelte-qjwazb"),fe(()=>t[7].call(C)),f(N,"class","overflow-y-auto md:table-row-group"),f(e,"class","workflow-table svelte-qjwazb")},m(I,T){ae(I,e,T),r(e,l),r(l,a),r(a,s),r(s,n),r(a,i),r(a,m),r(m,E),g=de(m,t[5].bind(m)),r(a,u),r(a,o),r(o,A),c=de(o,t[6].bind(o)),r(a,v),r(a,h),r(h,j),r(a,q),r(a,L),r(L,B),r(e,G),r(e,C),r(C,M),r(M,O),X=de(C,t[7].bind(C)),r(e,H),r(e,N),W&&W.m(N,null),R=!0},p(I,[T]){W&&W.p&&(!R||T&8)&&Ce(W,U,I,I[3],R?Fe(U,I[3],T,null):je(I[3]),null)},i(I){R||(Q(W,I),R=!0)},o(I){x(W,I),R=!1},d(I){I&&d(e),g(),c(),X(),W&&W.d(I)}}}function Je(t,e,l){let a,s,n;le(t,ce,o=>l(0,a=o)),le(t,me,o=>l(1,s=o)),le(t,he,o=>l(2,n=o));let{$$slots:i={},$$scope:m}=e;function E(){a=this.offsetWidth,ce.set(a)}function g(){s=this.offsetWidth,me.set(s)}function u(){n=this.offsetWidth,he.set(n)}return t.$$set=o=>{"$$scope"in o&&l(3,m=o.$$scope)},[a,s,n,m,i,E,g,u]}class ut extends _e{constructor(e){super(),ve(this,e,Je,He,pe,{})}}const ue=(t,e)=>{if(t.length*8.15>e){const l=Math.floor(e/8.15)-4;return l>0?`${t.slice(0,l)}...`:"..."}return t};function Ke(t){let e,l=ue(t[0].id,t[3]||t[4])+"",a;return{c(){e=w("span"),a=z(l),this.h()},l(s){e=b(s,"SPAN",{class:!0});var n=k(e);a=y(n,l),n.forEach(d),this.h()},h(){f(e,"class","table-link svelte-3g2au0")},m(s,n){ae(s,e,n),r(e,a)},p(s,n){n&25&&l!==(l=ue(s[0].id,s[3]||s[4])+"")&&$(a,l)},d(s){s&&d(e)}}}function Qe(t){let e,l=ue(t[0].name,t[5]||t[4])+"",a;return{c(){e=w("span"),a=z(l),this.h()},l(s){e=b(s,"SPAN",{class:!0});var n=k(e);a=y(n,l),n.forEach(d),this.h()},h(){f(e,"class","table-link svelte-3g2au0")},m(s,n){ae(s,e,n),r(e,a)},p(s,n){n&49&&l!==(l=ue(s[0].name,s[5]||s[4])+"")&&$(a,l)},d(s){s&&d(e)}}}function Xe(t){let e,l,a,s,n,i,m,E,g,u=Z(t[0].startTime,t[1])+"",o,A,c,v,h,j,q,L,B,G=Z(t[0].endTime,t[1])+"",C,M,O,X,H=Z(t[0].startTime,t[1])+"",N,R,U,W,I,T,Y,V=Z(t[0].endTime,t[1])+"",ee,F;return s=new Oe({props:{status:t[0].status,delay:Ve(t[0].startTime)}}),m=new ze({props:{bottom:!0,copyable:!0,text:t[0].id,$$slots:{default:[Ke]},$$scope:{ctx:t}}}),q=new ze({props:{bottom:!0,copyable:!0,text:t[0].name,$$slots:{default:[Qe]},$$scope:{ctx:t}}}),{c(){e=w("a"),l=w("div"),a=w("div"),re(s.$$.fragment),n=D(),i=w("div"),re(m.$$.fragment),E=D(),g=w("p"),o=z(u),A=D(),c=w("div"),v=w("h3"),h=z("Workflow Name:"),j=D(),re(q.$$.fragment),L=D(),B=w("p"),C=z(G),M=D(),O=w("div"),X=w("p"),N=z(H),R=D(),U=w("span"),W=z("-"),I=D(),T=w("div"),Y=w("p"),ee=z(V),this.h()},l(_){e=b(_,"A",{href:!0,class:!0});var p=k(e);l=b(p,"DIV",{class:!0});var J=k(l);a=b(J,"DIV",{});var K=k(a);oe(s.$$.fragment,K),K.forEach(d),J.forEach(d),n=S(p),i=b(p,"DIV",{class:!0});var P=k(i);oe(m.$$.fragment,P),E=S(P),g=b(P,"P",{class:!0});var se=k(g);o=y(se,u),se.forEach(d),P.forEach(d),A=S(p),c=b(p,"DIV",{class:!0});var te=k(c);v=b(te,"H3",{class:!0});var be=k(v);h=y(be,"Workflow Name:"),be.forEach(d),j=S(te),oe(q.$$.fragment,te),L=S(te),B=b(te,"P",{class:!0});var ge=k(B);C=y(ge,G),ge.forEach(d),te.forEach(d),M=S(p),O=b(p,"DIV",{class:!0});var ke=k(O);X=b(ke,"P",{});var Ee=k(X);N=y(Ee,H),Ee.forEach(d),ke.forEach(d),R=S(p),U=b(p,"SPAN",{class:!0});var Ie=k(U);W=y(Ie,"-"),Ie.forEach(d),I=S(p),T=b(p,"DIV",{class:!0});var Te=k(T);Y=b(Te,"P",{});var We=k(Y);ee=y(We,V),We.forEach(d),Te.forEach(d),p.forEach(d),this.h()},h(){f(l,"class","cell svelte-3g2au0"),f(g,"class","time-cell-inline svelte-3g2au0"),f(i,"class","cell overflow-cell links font-medium md:font-normal svelte-3g2au0"),f(v,"class","md:hidden"),f(B,"class","time-cell-inline svelte-3g2au0"),f(c,"class","cell links font-medium md:font-normal flex gap-2 svelte-3g2au0"),f(O,"class","time-cell font-normal svelte-3g2au0"),f(U,"class","md:hidden"),f(T,"class","time-cell font-medium md:font-normal svelte-3g2au0"),f(e,"href",t[2]),f(e,"class","row group svelte-3g2au0")},m(_,p){ae(_,e,p),r(e,l),r(l,a),ne(s,a,null),r(e,n),r(e,i),ne(m,i,null),r(i,E),r(i,g),r(g,o),r(e,A),r(e,c),r(c,v),r(v,h),r(c,j),ne(q,c,null),r(c,L),r(c,B),r(B,C),r(e,M),r(e,O),r(O,X),r(X,N),r(e,R),r(e,U),r(U,W),r(e,I),r(e,T),r(T,Y),r(Y,ee),F=!0},p(_,[p]){const J={};p&1&&(J.status=_[0].status),p&1&&(J.delay=Ve(_[0].startTime)),s.$set(J);const K={};p&1&&(K.text=_[0].id),p&153&&(K.$$scope={dirty:p,ctx:_}),m.$set(K),(!F||p&3)&&u!==(u=Z(_[0].startTime,_[1])+"")&&$(o,u);const P={};p&1&&(P.text=_[0].name),p&177&&(P.$$scope={dirty:p,ctx:_}),q.$set(P),(!F||p&3)&&G!==(G=Z(_[0].endTime,_[1])+"")&&$(C,G),(!F||p&3)&&H!==(H=Z(_[0].startTime,_[1])+"")&&$(N,H),(!F||p&3)&&V!==(V=Z(_[0].endTime,_[1])+"")&&$(ee,V),(!F||p&4)&&f(e,"href",_[2])},i(_){F||(Q(s.$$.fragment,_),Q(m.$$.fragment,_),Q(q.$$.fragment,_),F=!0)},o(_){x(s.$$.fragment,_),x(m.$$.fragment,_),x(q.$$.fragment,_),F=!1},d(_){_&&d(e),ie(s),ie(m),ie(q)}}}function Ye(t,e,l){let a,s,n,i;le(t,ce,u=>l(3,s=u)),le(t,he,u=>l(4,n=u)),le(t,me,u=>l(5,i=u));let{namespace:m}=e,{workflow:E}=e,{timeFormat:g}=e;return t.$$set=u=>{"namespace"in u&&l(6,m=u.namespace),"workflow"in u&&l(0,E=u.workflow),"timeFormat"in u&&l(1,g=u.timeFormat)},t.$$.update=()=>{t.$$.dirty&65&&l(2,a=Me({namespace:m,workflow:E.id,run:E.runId}))},[E,g,a,s,n,i,m]}class ft extends _e{constructor(e){super(),ve(this,e,Ye,Xe,pe,{namespace:6,workflow:0,timeFormat:1})}}var dt=Ze;function Ze(t,e,l,a){var s,n,i;return function(){if(i=this,n=Array.prototype.slice.call(arguments),s&&(l||a))return;if(!l)return g(),s=setTimeout(E,e),s;s=setTimeout(g,e),t.apply(i,n);function E(){g(),t.apply(i,n)}function g(){clearTimeout(s),s=null}}}function ye(t){let e,l;return e=new Re({props:{icon:Ue,scale:.9,color:"gray",class:"flex items-center ml-4"}}),{c(){re(e.$$.fragment)},l(a){oe(e.$$.fragment,a)},m(a,s){ne(e,a,s),l=!0},p:Ne,i(a){l||(Q(e.$$.fragment,a),l=!0)},o(a){x(e.$$.fragment,a),l=!1},d(a){ie(e,a)}}}function $e(t){let e;return{c(){e=z(t[2])},l(l){e=y(l,t[2])},m(l,a){ae(l,e,a)},p(l,a){a&4&&$(e,l[2])},d(l){l&&d(e)}}}function xe(t){let e,l,a,s,n,i,m,E,g,u,o,A,c=t[4]&&ye();return g=new Ge({props:{class:"m-2",$$slots:{default:[$e]},$$scope:{ctx:t}}}),{c(){e=w("form"),c&&c.c(),l=D(),a=w("label"),s=z(t[2]),n=D(),i=w("input"),m=D(),E=w("div"),re(g.$$.fragment),this.h()},l(v){e=b(v,"FORM",{class:!0});var h=k(e);c&&c.l(h),l=S(h),a=b(h,"LABEL",{for:!0,class:!0});var j=k(a);s=y(j,t[2]),j.forEach(d),n=S(h),i=b(h,"INPUT",{id:!0,type:!0,class:!0,name:!0,placeholder:!0}),m=S(h),E=b(h,"DIV",{});var q=k(E);oe(g.$$.fragment,q),q.forEach(d),h.forEach(d),this.h()},h(){f(a,"for",t[5]),f(a,"class","hidden"),f(i,"id",t[5]),f(i,"type","text"),f(i,"class","w-full px-4 focus:outline-none rounded-l-lg"),f(i,"name",t[3]),i.value=t[1],f(i,"placeholder",t[0]),f(e,"class","flex items-center relative rounded-lg border-2 focus-within:border-blue-700 transition-colors")},m(v,h){ae(v,e,h),c&&c.m(e,null),r(e,l),r(e,a),r(a,s),r(e,n),r(e,i),r(e,m),r(e,E),ne(g,E,null),u=!0,o||(A=[De(i,"input",t[7]),De(e,"submit",Pe(t[6]))],o=!0)},p(v,[h]){v[4]?c?(c.p(v,h),h&16&&Q(c,1)):(c=ye(),c.c(),Q(c,1),c.m(e,l)):c&&(Ae(),x(c,1,1,()=>{c=null}),Le()),(!u||h&4)&&$(s,v[2]),(!u||h&32)&&f(a,"for",v[5]),(!u||h&32)&&f(i,"id",v[5]),(!u||h&8)&&f(i,"name",v[3]),(!u||h&2&&i.value!==v[1])&&(i.value=v[1]),(!u||h&1)&&f(i,"placeholder",v[0]);const j={};h&260&&(j.$$scope={dirty:h,ctx:v}),g.$set(j)},i(v){u||(Q(c),Q(g.$$.fragment,v),u=!0)},o(v){x(c),x(g.$$.fragment,v),u=!1},d(v){v&&d(e),c&&c.d(),ie(g),o=!1,Be(A)}}}function et(t,e,l){let{placeholder:a=""}=e,{value:s=""}=e,{label:n="Search"}=e,{name:i="query"}=e,{icon:m=!1}=e,{id:E=`${n.toLocaleUpperCase()}-input`}=e;function g(o){Se.call(this,t,o)}function u(o){Se.call(this,t,o)}return t.$$set=o=>{"placeholder"in o&&l(0,a=o.placeholder),"value"in o&&l(1,s=o.value),"label"in o&&l(2,n=o.label),"name"in o&&l(3,i=o.name),"icon"in o&&l(4,m=o.icon),"id"in o&&l(5,E=o.id)},[a,s,n,i,m,E,g,u]}class ct extends _e{constructor(e){super(),ve(this,e,et,xe,pe,{placeholder:0,value:1,label:2,name:3,icon:4,id:5})}}export{ct as S,ut as W,ft as a,dt as j};

const r=e=>{const t=e.indexOf("?");return t>-1?e.slice(0,t):e},a=(e,t)=>{const s=r(e).split("/"),o=r(t).split("/");for(let n=0;n<s.length;n++){const c=s[n],i=o[n];if(c!==i)return!1}return!0};export{a as p};
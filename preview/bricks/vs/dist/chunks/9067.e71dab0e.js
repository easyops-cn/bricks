(()=>{"use strict";var e,r,t,n,o,s,a,i,c,l,f,u,p,h,d,g,v,y,m,b={1448:(e,r,t)=>{const n={hit:"Hint",hint:"Hint",info:"Info",warn:"Warning",error:"Error"};self.addEventListener("message",(async e=>{const r=await async function(e){let{id:r,source:o,links:s,markers:a}=e;const{parseDocument:i,visit:c}=await t.e(8708).then(t.bind(t,8708)),{preevaluate:l,isEvaluable:f}=await t.e(522).then(t.t.bind(t,522,23)),u=[],p=[],h=(e,r)=>(t,o)=>{if(null!=s&&s.includes(t.name)){const r=o[o.length-1];if("MemberExpression"===(null==r?void 0:r.node.type)&&"object"===r.key){const t=r.node;t.computed||"Identifier"!==t.property.type||e.push(t)}}const i=null==a?void 0:a.find((e=>e.token===t.name));null!=i&&i.message&&r.push({node:t,message:i.message,severity:n[i.level??"warn"]??"Warning",code:i.code})};try{c(i(o,{keepSourceTokens:!0,version:"1.2"}),{Scalar(e,r){if("key"!==e&&"string"==typeof r.value)switch(r.type){case"PLAIN":case"BLOCK_LITERAL":case"BLOCK_FOLDED":{const e=r.srcToken;if(f(e.source)){const r=e.source.match(/^\s*<%[~=]?\s|\s%>\s*$/g);let t;if("block-scalar"===e.type){const n=e.props[e.props.length-1];t=n.offset+n.source.length+r[0].length}else t=e.offset+r[0].length;try{const r=[],n=[];l(e.source,{withParent:!0,hooks:{beforeVisitGlobal:h(r,n)}});for(const e of r)p.push({start:e.start+t,end:e.end+t,options:{inlineClassName:"highlight"}});for(const e of n)u.push({start:e.node.start+t,end:e.node.end+t,message:e.message,severity:e.severity,code:e.code})}catch(e){if(e instanceof SyntaxError){const r=e.pos+t;u.push({start:r,end:r+1,message:e.message,severity:"Error"})}else console.error("unknown expression parse error:",e)}}break}case"QUOTE_SINGLE":case"QUOTE_DOUBLE":if(f(r.value)){const e=r.value.match(/^\s*<%[~=]?\s|\s%>\s*$/g),t=r.srcToken,n=function(e,r){const t=[];let n=0;for(;n<e.length-1;)("QUOTE_SINGLE"===r?"'"===e[n]&&"'"===e[n+1]:"\\"===e[n])?(t.push(n-t.length),n+=2):n++;return t}(t.source.slice(1,-1),r.type),o=(r,o)=>{const s=r+e[0].length;let a=0,i=!1;n.length>0&&(a=n.findIndex((e=>e>=s)),-1===a?a=n.length:n[a]===s&&(i=!0));const c=t.offset+1+s+a;return{start:c,end:c+o+(i?1:0)}};try{const e=[],t=[];l(r.value,{withParent:!0,hooks:{beforeVisitGlobal:h(e,t)}});for(const r of e)p.push({start:o(r.start,0).start,end:o(r.end,0).end,options:{inlineClassName:"highlight"}});for(const e of t)u.push({start:o(e.node.start,0).start,end:o(e.node.end,0).end,message:e.message,severity:e.severity,code:e.code})}catch(e){if(e instanceof SyntaxError){const{pos:r}=e;u.push({...o(r,1),message:e.message,severity:"Error"})}else console.error("unknown expression parse error:",e)}}}}})}catch(e){console.error("visit yaml doc failed:",e)}return{id:r,lintMarkers:u,lintDecorations:p}}(e.data);self.postMessage(r)}))}},k={};function w(e){var r=k[e];if(void 0!==r)return r.exports;var t=k[e]={exports:{}};return b[e](t,t.exports,w),t.exports}w.m=b,w.c=k,r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,w.t=function(t,n){if(1&n&&(t=this(t)),8&n)return t;if("object"==typeof t&&t){if(4&n&&t.__esModule)return t;if(16&n&&"function"==typeof t.then)return t}var o=Object.create(null);w.r(o);var s={};e=e||[null,r({}),r([]),r(r)];for(var a=2&n&&t;"object"==typeof a&&!~e.indexOf(a);a=r(a))Object.getOwnPropertyNames(a).forEach((e=>s[e]=()=>t[e]));return s.default=()=>t,w.d(o,s),o},w.d=(e,r)=>{for(var t in r)w.o(r,t)&&!w.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},w.f={},w.e=e=>Promise.all(Object.keys(w.f).reduce(((r,t)=>(w.f[t](e,r),r)),[])),w.u=e=>"chunks/"+e+"."+{522:"3220f423",1122:"bed5d079",3340:"93f726d1",6773:"71114839",8708:"2bfa0e5e"}[e]+".js",w.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),w.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),w.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{w.S={};var e={},r={};w.I=(t,n)=>{n||(n=[]);var o=r[t];if(o||(o=r[t]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[t])return e[t];w.o(w.S,t)||(w.S[t]={}),w.S[t];var s=[];return e[t]=s.length?Promise.all(s).then((()=>e[t]=1)):1}}})(),(()=>{var e;w.g.importScripts&&(e=w.g.location+"");var r=w.g.document;if(!e&&r&&(r.currentScript&&"SCRIPT"===r.currentScript.tagName.toUpperCase()&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");if(t.length)for(var n=t.length-1;n>-1&&(!e||!/^http(s?):/.test(e));)e=t[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),w.p=e+"../"})(),t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},n=(e,r)=>{e=t(e),r=t(r);for(var n=0;;){if(n>=e.length)return n<r.length&&"u"!=(typeof r[n])[0];var o=e[n],s=(typeof o)[0];if(n>=r.length)return"u"==s;var a=r[n],i=(typeof a)[0];if(s!=i)return"o"==s&&"n"==i||"s"==i||"u"==s;if("o"!=s&&"u"!=s&&o!=a)return o<a;n++}},o=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var n=1,s=1;s<e.length;s++)n--,t+="u"==(typeof(i=e[s]))[0]?"-":(n>0?".":"")+(n=2,i);return t}var a=[];for(s=1;s<e.length;s++){var i=e[s];a.push(0===i?"not("+c()+")":1===i?"("+c()+" || "+c()+")":2===i?a.pop()+" "+a.pop():o(i))}return c();function c(){return a.pop().replace(/^\((.+)\)$/,"$1")}},s=(e,r)=>{if(0 in e){r=t(r);var n=e[0],o=n<0;o&&(n=-n-1);for(var a=0,i=1,c=!0;;i++,a++){var l,f,u=i<e.length?(typeof e[i])[0]:"";if(a>=r.length||"o"==(f=(typeof(l=r[a]))[0]))return!c||("u"==u?i>n&&!o:""==u!=o);if("u"==f){if(!c||"u"!=u)return!1}else if(c)if(u==f)if(i<=n){if(l!=e[i])return!1}else{if(o?l>e[i]:l<e[i])return!1;l!=e[i]&&(c=!1)}else if("s"!=u&&"n"!=u){if(o||i<=n)return!1;c=!1,i--}else{if(i<=n||f<u!=o)return!1;c=!1}else"s"!=u&&"n"!=u&&(c=!1,i--)}}var p=[],h=p.pop.bind(p);for(a=1;a<e.length;a++){var d=e[a];p.push(1==d?h()|h():2==d?h()&h():d?s(d,r):!h())}return!!h()},a=(e,r)=>e&&w.o(e,r),i=e=>(e.loaded=1,e.get()),c=e=>Object.keys(e).reduce(((r,t)=>(e[t].eager&&(r[t]=e[t]),r)),{}),l=(e,r,t)=>{var o=t?c(e[r]):e[r];return Object.keys(o).reduce(((e,r)=>!e||!o[e].loaded&&n(e,r)?r:e),0)},f=(e,r,t,n)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+o(n)+")",u=e=>{throw new Error(e)},p=e=>{"undefined"!=typeof console&&console.warn&&console.warn(e)},h=(e,r,t)=>t?t():((e,r)=>u("Shared module "+r+" doesn't exist in shared scope "+e))(e,r),d=(e=>function(r,t,n,o,s){var a=w.I(r);return a&&a.then&&!n?a.then(e.bind(e,r,w.S[r],t,!1,o,s)):e(r,w.S[r],t,n,o,s)})(((e,r,t,n,o,c)=>{if(!a(r,t))return h(e,t,c);var u=l(r,t,n);return s(o,u)||p(f(r,t,u,o)),i(r[t][u])})),g={},v={522:()=>d("default","@next-core/cook",!1,[1,2,5,2],(()=>Promise.all([w.e(1122),w.e(3340)]).then((()=>()=>w(1122))))),3340:()=>d("default","@babel/parser",!1,[1,7,25,6],(()=>w.e(6773).then((()=>()=>w(6773)))))},y={522:[522],3340:[3340]},m={},w.f.consumes=(e,r)=>{w.o(y,e)&&y[e].forEach((e=>{if(w.o(g,e))return r.push(g[e]);if(!m[e]){var t=r=>{g[e]=0,w.m[e]=t=>{delete w.c[e],t.exports=r()}};m[e]=!0;var n=r=>{delete g[e],w.m[e]=t=>{throw delete w.c[e],r}};try{var o=v[e]();o.then?r.push(g[e]=o.then(t).catch(n)):t(o)}catch(e){n(e)}}}))},(()=>{var e={9067:1};w.f.i=(r,t)=>{e[r]||/^(3340|522)$/.test(r)||importScripts(w.p+w.u(r))};var r=globalThis.webpackChunk_next_bricks_vs=globalThis.webpackChunk_next_bricks_vs||[],t=r.push.bind(r);r.push=r=>{var[n,o,s]=r;for(var a in o)w.o(o,a)&&(w.m[a]=o[a]);for(s&&s(w);n.length;)e[n.pop()]=1;t(r)}})(),w(1448)})();
//# sourceMappingURL=9067.e71dab0e.js.map
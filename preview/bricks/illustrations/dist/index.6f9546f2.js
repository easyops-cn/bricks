(()=>{"use strict";var e,r,t,n,o,i,a,l,u,s,f,c,d,p,h,v={4372:(e,r,t)=>{var n={"./get-illustration":()=>Promise.all([t.e(107),t.e(410)]).then((()=>()=>t(3828))),"./translate-illustration-config":()=>Promise.all([t.e(107),t.e(410)]).then((()=>()=>t(3828))),"./get-illustrations-by-category":()=>Promise.all([t.e(107),t.e(988)]).then((()=>()=>t(8857)))},o=(e,r)=>(t.R=r,r=t.o(n,e)?n[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),i=(e,r)=>{if(t.S){var n="default",o=t.S[n];if(o&&o!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[n]=e,t.I(n,r)}};t.d(r,{get:()=>o,init:()=>i})}},g={};function b(e){var r=g[e];if(void 0!==r)return r.exports;var t=g[e]={exports:{}};return v[e](t,t.exports,b),t.exports}b.m=v,b.c=g,b.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return b.d(r,{a:r}),r},b.d=(e,r)=>{for(var t in r)b.o(r,t)&&!b.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},b.f={},b.e=e=>Promise.all(Object.keys(b.f).reduce(((r,t)=>(b.f[t](e,r),r)),[])),b.u=e=>"chunks/"+({410:"get-illustration",988:"get-illustrations-by-category"}[e]||e)+"."+{107:"f15a1731",110:"aa998bc6",410:"f397b2aa",988:"770d3059"}[e]+".js",b.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),b.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="@next-bricks/illustrations:",b.l=(t,n,o,i)=>{if(e[t])e[t].push(n);else{var a,l;if(void 0!==o)for(var u=document.getElementsByTagName("script"),s=0;s<u.length;s++){var f=u[s];if(f.getAttribute("src")==t||f.getAttribute("data-webpack")==r+o){a=f;break}}a||(l=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,b.nc&&a.setAttribute("nonce",b.nc),a.setAttribute("data-webpack",r+o),a.src=t),e[t]=[n];var c=(r,n)=>{a.onerror=a.onload=null,clearTimeout(d);var o=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((e=>e(n))),r)return r(n)},d=setTimeout(c.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=c.bind(null,a.onerror),a.onload=c.bind(null,a.onload),l&&document.head.appendChild(a)}},b.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{b.S={};var e={},r={};b.I=(t,n)=>{n||(n=[]);var o=r[t];if(o||(o=r[t]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[t])return e[t];b.o(b.S,t)||(b.S[t]={});var i=b.S[t],a="@next-bricks/illustrations",l=[];return"default"===t&&((e,r,t,n)=>{var o=i[e]=i[e]||{},l=o[r];(!l||!l.loaded&&(1!=!l.eager?n:a>l.from))&&(o[r]={get:()=>b.e(110).then((()=>()=>b(7110))),from:a,eager:!1})})("@next-core/utils/general","1.6.2"),e[t]=l.length?Promise.all(l).then((()=>e[t]=1)):1}}})(),(()=>{var e;b.g.importScripts&&(e=b.g.location+"");var r=b.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");if(t.length)for(var n=t.length-1;n>-1&&!e;)e=t[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),b.p=e})(),t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},n=(e,r)=>{e=t(e),r=t(r);for(var n=0;;){if(n>=e.length)return n<r.length&&"u"!=(typeof r[n])[0];var o=e[n],i=(typeof o)[0];if(n>=r.length)return"u"==i;var a=r[n],l=(typeof a)[0];if(i!=l)return"o"==i&&"n"==l||"s"==l||"u"==i;if("o"!=i&&"u"!=i&&o!=a)return o<a;n++}},o=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var n=1,i=1;i<e.length;i++)n--,t+="u"==(typeof(l=e[i]))[0]?"-":(n>0?".":"")+(n=2,l);return t}var a=[];for(i=1;i<e.length;i++){var l=e[i];a.push(0===l?"not("+u()+")":1===l?"("+u()+" || "+u()+")":2===l?a.pop()+" "+a.pop():o(l))}return u();function u(){return a.pop().replace(/^\((.+)\)$/,"$1")}},i=(e,r)=>{if(0 in e){r=t(r);var n=e[0],o=n<0;o&&(n=-n-1);for(var a=0,l=1,u=!0;;l++,a++){var s,f,c=l<e.length?(typeof e[l])[0]:"";if(a>=r.length||"o"==(f=(typeof(s=r[a]))[0]))return!u||("u"==c?l>n&&!o:""==c!=o);if("u"==f){if(!u||"u"!=c)return!1}else if(u)if(c==f)if(l<=n){if(s!=e[l])return!1}else{if(o?s>e[l]:s<e[l])return!1;s!=e[l]&&(u=!1)}else if("s"!=c&&"n"!=c){if(o||l<=n)return!1;u=!1,l--}else{if(l<=n||f<c!=o)return!1;u=!1}else"s"!=c&&"n"!=c&&(u=!1,l--)}}var d=[],p=d.pop.bind(d);for(a=1;a<e.length;a++){var h=e[a];d.push(1==h?p()|p():2==h?p()&p():h?i(h,r):!p())}return!!p()},a=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&n(e,r)?r:e),0)},l=(e,r,t,n)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+o(n)+")",u=(e,r,t,n)=>{var o=a(e,t);return i(n,o)||s(l(e,t,o,n)),f(e[t][o])},s=e=>{"undefined"!=typeof console&&console.warn&&console.warn(e)},f=e=>(e.loaded=1,e.get()),c=(e=>function(r,t,n,o){var i=b.I(r);return i&&i.then?i.then(e.bind(e,r,b.S[r],t,n,o)):e(0,b.S[r],t,n,o)})(((e,r,t,n,o)=>r&&b.o(r,t)?u(r,0,t,n):o())),d={},p={6107:()=>c("default","@next-core/utils/general",[1,1,6,2],(()=>b.e(110).then((()=>()=>b(7110)))))},h={107:[6107]},b.f.consumes=(e,r)=>{b.o(h,e)&&h[e].forEach((e=>{if(b.o(d,e))return r.push(d[e]);var t=r=>{d[e]=0,b.m[e]=t=>{delete b.c[e],t.exports=r()}},n=r=>{delete d[e],b.m[e]=t=>{throw delete b.c[e],r}};try{var o=p[e]();o.then?r.push(d[e]=o.then(t).catch(n)):t(o)}catch(e){n(e)}}))},(()=>{var e={697:0};b.f.j=(r,t)=>{var n=b.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(107!=r){var o=new Promise(((t,o)=>n=e[r]=[t,o]));t.push(n[2]=o);var i=b.p+b.u(r),a=new Error;b.l(i,(t=>{if(b.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;a.message="Loading chunk "+r+" failed.\n("+o+": "+i+")",a.name="ChunkLoadError",a.type=o,a.request=i,n[1](a)}}),"chunk-"+r,r)}else e[r]=0};var r=(r,t)=>{var n,o,[i,a,l]=t,u=0;if(i.some((r=>0!==e[r]))){for(n in a)b.o(a,n)&&(b.m[n]=a[n]);l&&l(b)}for(r&&r(t);u<i.length;u++)o=i[u],b.o(e,o)&&e[o]&&e[o][0](),e[o]=0},t=self.webpackChunk_next_bricks_illustrations=self.webpackChunk_next_bricks_illustrations||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var m=b(4372);window["bricks/illustrations"]=m})();
//# sourceMappingURL=index.6f9546f2.js.map
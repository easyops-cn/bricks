(()=>{var e,r,t,n,o,a,i,l,u,s,c,f,d,h,p,m,v,b,g,y,x,w,k,P,S={7934:(e,r,t)=>{Promise.all([t.e(447),t.e(769),t.e(300),t.e(260),t.e(681),t.e(849)]).then(t.bind(t,3849))}},j={};function _(e){var r=j[e];if(void 0!==r)return r.exports;var t=j[e]={id:e,loaded:!1,exports:{}};return S[e].call(t.exports,t,t.exports,_),t.loaded=!0,t.exports}_.m=S,_.c=j,_.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return _.d(r,{a:r}),r},_.d=(e,r)=>{for(var t in r)_.o(r,t)&&!_.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},_.f={},_.e=e=>Promise.all(Object.keys(_.f).reduce(((r,t)=>(_.f[t](e,r),r)),[])),_.u=e=>"chunks/"+e+"."+{41:"545ff4cb",45:"de77c5d8",52:"7acde0c6",97:"26a37057",144:"d1383a54",171:"ac892661",176:"bf22ba68",181:"9db00287",250:"89e2ea6f",260:"9ab70629",300:"5ab377be",426:"eab72972",435:"60f79aef",447:"c3c5c5cb",460:"7ecc4b8a",542:"791793d0",552:"3696188a",681:"8f687bb1",726:"b0cd19d6",769:"d22de524",780:"9bb772c7",795:"133ca4a9",849:"b12d5a60",871:"b5df231a",889:"616b3f68"}[e]+".js",_.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),_.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="@next-bricks/recent-history:",_.l=(t,n,o,a)=>{if(e[t])e[t].push(n);else{var i,l;if(void 0!==o)for(var u=document.getElementsByTagName("script"),s=0;s<u.length;s++){var c=u[s];if(c.getAttribute("src")==t||c.getAttribute("data-webpack")==r+o){i=c;break}}i||(l=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,_.nc&&i.setAttribute("nonce",_.nc),i.setAttribute("data-webpack",r+o),i.src=t),e[t]=[n];var f=(r,n)=>{i.onerror=i.onload=null,clearTimeout(d);var o=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(n))),r)return r(n)},d=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),l&&document.head.appendChild(i)}},_.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},_.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{_.S={};var e={},r={};_.I=(t,n)=>{n||(n=[]);var o=r[t];if(o||(o=r[t]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[t])return e[t];_.o(_.S,t)||(_.S[t]={});var a=_.S[t],i="@next-bricks/recent-history",l=(e,r,t,n)=>{var o=a[e]=a[e]||{},l=o[r];(!l||!l.loaded&&(!n!=!l.eager?n:i>l.from))&&(o[r]={get:t,from:i,eager:!!n})},u=[];return"default"===t&&(l("@next-core/element","1.2.13",(()=>_.e(45).then((()=>()=>_(1045))))),l("@next-core/i18n/react","1.0.69",(()=>Promise.all([_.e(181),_.e(97)]).then((()=>()=>_(8097))))),l("@next-core/i18n","1.0.69",(()=>Promise.all([_.e(460),_.e(181),_.e(552)]).then((()=>()=>_(5552))))),l("@next-core/react-element","1.0.32",(()=>Promise.all([_.e(769),_.e(300),_.e(435),_.e(176)]).then((()=>()=>_(2795))))),l("@next-core/theme","1.5.4",(()=>Promise.all([_.e(889),_.e(52)]).then((()=>()=>_(1889))))),l("@next-core/utils/general","1.7.27",(()=>_.e(871).then((()=>()=>_(871))))),l("i18next-browser-languagedetector","7.2.1",(()=>_.e(726).then((()=>()=>_(726))))),l("i18next","22.5.1",(()=>_.e(542).then((()=>()=>_(9542))))),l("lodash","4.17.21",(()=>_.e(250).then((()=>()=>_(5250))))),l("react-dom","0.0.0-experimental-ee8509801-20230117",(()=>Promise.all([_.e(144),_.e(769)]).then((()=>()=>_(3144))))),l("react-i18next","12.3.1",(()=>Promise.all([_.e(780),_.e(769)]).then((()=>()=>_(9780))))),l("react","0.0.0-experimental-ee8509801-20230117",(()=>_.e(41).then((()=>()=>_(4041)))))),e[t]=u.length?Promise.all(u).then((()=>e[t]=1)):1}}})(),(()=>{var e;_.g.importScripts&&(e=_.g.location+"");var r=_.g.document;if(!e&&r&&(r.currentScript&&"SCRIPT"===r.currentScript.tagName.toUpperCase()&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");if(t.length)for(var n=t.length-1;n>-1&&(!e||!/^http(s?):/.test(e));)e=t[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),_.p=e+"../"})(),t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},n=(e,r)=>{e=t(e),r=t(r);for(var n=0;;){if(n>=e.length)return n<r.length&&"u"!=(typeof r[n])[0];var o=e[n],a=(typeof o)[0];if(n>=r.length)return"u"==a;var i=r[n],l=(typeof i)[0];if(a!=l)return"o"==a&&"n"==l||"s"==l||"u"==a;if("o"!=a&&"u"!=a&&o!=i)return o<i;n++}},o=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var n=1,a=1;a<e.length;a++)n--,t+="u"==(typeof(l=e[a]))[0]?"-":(n>0?".":"")+(n=2,l);return t}var i=[];for(a=1;a<e.length;a++){var l=e[a];i.push(0===l?"not("+u()+")":1===l?"("+u()+" || "+u()+")":2===l?i.pop()+" "+i.pop():o(l))}return u();function u(){return i.pop().replace(/^\((.+)\)$/,"$1")}},a=(e,r)=>{if(0 in e){r=t(r);var n=e[0],o=n<0;o&&(n=-n-1);for(var i=0,l=1,u=!0;;l++,i++){var s,c,f=l<e.length?(typeof e[l])[0]:"";if(i>=r.length||"o"==(c=(typeof(s=r[i]))[0]))return!u||("u"==f?l>n&&!o:""==f!=o);if("u"==c){if(!u||"u"!=f)return!1}else if(u)if(f==c)if(l<=n){if(s!=e[l])return!1}else{if(o?s>e[l]:s<e[l])return!1;s!=e[l]&&(u=!1)}else if("s"!=f&&"n"!=f){if(o||l<=n)return!1;u=!1,l--}else{if(l<=n||c<f!=o)return!1;u=!1}else"s"!=f&&"n"!=f&&(u=!1,l--)}}var d=[],h=d.pop.bind(d);for(i=1;i<e.length;i++){var p=e[i];d.push(1==p?h()|h():2==p?h()&h():p?a(p,r):!h())}return!!h()},i=(e,r)=>e&&_.o(e,r),l=e=>(e.loaded=1,e.get()),u=e=>Object.keys(e).reduce(((r,t)=>(e[t].eager&&(r[t]=e[t]),r)),{}),s=(e,r,t,o)=>{var i=o?u(e[r]):e[r];return(r=Object.keys(i).reduce(((e,r)=>!a(t,r)||e&&!n(e,r)?e:r),0))&&i[r]},c=(e,r,t)=>{var o=t?u(e[r]):e[r];return Object.keys(o).reduce(((e,r)=>!e||!o[e].loaded&&n(e,r)?r:e),0)},f=(e,r,t,n)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+o(n)+")",d=(e,r,t,n,a)=>{var i=e[t];return"No satisfying version ("+o(n)+")"+(a?" for eager consumption":"")+" of shared module "+t+" found in shared scope "+r+".\nAvailable versions: "+Object.keys(i).map((e=>e+" from "+i[e].from)).join(", ")},h=e=>{throw new Error(e)},p=e=>{"undefined"!=typeof console&&console.warn&&console.warn(e)},v=(e,r,t)=>t?t():((e,r)=>h("Shared module "+r+" doesn't exist in shared scope "+e))(e,r),b=(m=e=>function(r,t,n,o,a){var i=_.I(r);return i&&i.then&&!n?i.then(e.bind(e,r,_.S[r],t,!1,o,a)):e(r,_.S[r],t,n,o,a)})(((e,r,t,n,o,a)=>{if(!i(r,t))return v(e,t,a);var u=s(r,t,o,n);return u?l(u):a?a():void h(d(r,e,t,o,n))})),g=m(((e,r,t,n,o)=>{if(!i(r,t))return v(e,t,o);var a=c(r,t,n);return l(r[t][a])})),y=m(((e,r,t,n,o,u)=>{if(!i(r,t))return v(e,t,u);var s=c(r,t,n);return a(o,s)||p(f(r,t,s,o)),l(r[t][s])})),x={},w={8769:()=>b("default","react",!1,[6,0,0,0,,"experimental-ee8509801-20230117"],(()=>_.e(41).then((()=>()=>_(4041))))),300:()=>b("default","@next-core/element",!1,[1,1,2,13],(()=>_.e(426).then((()=>()=>_(1045))))),2445:()=>g("default","lodash",!1,(()=>_.e(250).then((()=>()=>_(5250))))),4295:()=>b("default","@next-core/react-element",!1,[1,1,0,32],(()=>Promise.all([_.e(435),_.e(795)]).then((()=>()=>_(2795))))),6477:()=>y("default","@next-core/theme",!1,[1,1,5,4],(()=>_.e(889).then((()=>()=>_(1889))))),7896:()=>y("default","@next-core/i18n/react",!1,[1,1,0,69],(()=>Promise.all([_.e(181),_.e(97)]).then((()=>()=>_(8097))))),2681:()=>g("default","@next-core/utils/general",!1,(()=>_.e(871).then((()=>()=>_(871))))),6181:()=>y("default","@next-core/i18n",!1,[1,1,0,69],(()=>Promise.all([_.e(460),_.e(171)]).then((()=>()=>_(5552))))),7825:()=>y("default","react-i18next",!1,[1,12,3,1],(()=>Promise.all([_.e(780),_.e(769)]).then((()=>()=>_(9780))))),2350:()=>y("default","i18next",!1,[1,22,5,1],(()=>_.e(542).then((()=>()=>_(9542))))),3078:()=>y("default","@next-core/utils/general",!1,[1,1,7,27],(()=>_.e(871).then((()=>()=>_(871))))),7072:()=>y("default","i18next-browser-languagedetector",!1,[1,7,2,1],(()=>_.e(726).then((()=>()=>_(726))))),9435:()=>b("default","react-dom",!1,[6,0,0,0,,"experimental-ee8509801-20230117"],(()=>_.e(144).then((()=>()=>_(3144)))))},k={97:[7825],181:[6181],260:[2445,4295,6477,7896],300:[300],435:[9435],460:[2350,3078,7072],681:[2681],769:[8769]},P={},_.f.consumes=(e,r)=>{_.o(k,e)&&k[e].forEach((e=>{if(_.o(x,e))return r.push(x[e]);if(!P[e]){var t=r=>{x[e]=0,_.m[e]=t=>{delete _.c[e],t.exports=r()}};P[e]=!0;var n=r=>{delete x[e],_.m[e]=t=>{throw delete _.c[e],r}};try{var o=w[e]();o.then?r.push(x[e]=o.then(t).catch(n)):t(o)}catch(e){n(e)}}}))},(()=>{var e={792:0};_.f.j=(r,t)=>{var n=_.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(/^([16]81|(26|30|46)0|435|769)$/.test(r))e[r]=0;else{var o=new Promise(((t,o)=>n=e[r]=[t,o]));t.push(n[2]=o);var a=_.p+_.u(r),i=new Error;_.l(a,(t=>{if(_.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,n[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{var n,o,[a,i,l]=t,u=0;if(a.some((r=>0!==e[r]))){for(n in i)_.o(i,n)&&(_.m[n]=i[n]);l&&l(_)}for(r&&r(t);u<a.length;u++)o=a[u],_.o(e,o)&&e[o]&&e[o][0](),e[o]=0},t=globalThis.webpackChunk_next_bricks_recent_history=globalThis.webpackChunk_next_bricks_recent_history||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),_.nc=void 0,_(7934)})();
//# sourceMappingURL=main.2175e39e.js.map
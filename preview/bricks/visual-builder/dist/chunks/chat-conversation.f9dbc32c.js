/*! For license information please see chat-conversation.f9dbc32c.js.LICENSE.txt */
(globalThis.webpackChunk_next_bricks_visual_builder=globalThis.webpackChunk_next_bricks_visual_builder||[]).push([[3555,2052],{7035:(e,t,n)=>{"use strict";n.d(t,{V:()=>l});var r=n(8769),o=n.n(r),s=n(3373),a=n.n(s),i=n(7384);const c=(0,n(4295).wrapBrick)("eo-avatar");function l(e){let{message:t}=e;const n=(0,r.useMemo)((()=>{const e=[];if("assistant"===t.role){const n=/(?:^|\n)```(easy_cmd_\S+)\n([\s\S]*?)\n```(?:$|\n)/gm;let r,o=0;for(;r=n.exec(t.content);){const[s,a,i]=r,c=r.index,l=t.content.slice(o,c).trim();l.length>0&&e.push({type:"markdown",content:l}),e.push({type:"command",command:a,content:i.trim(),raw:s}),o=n.lastIndex}const s=t.content.slice(o).trim();s.length>0&&e.push({type:"markdown",content:s})}else e.push({type:"plain",content:t.content});return e}),[t.content,t.role]),s=(0,r.useRef)(null);return(0,r.useEffect)((()=>{const e=s.current;e&&setTimeout((()=>{const n=e.parentElement.querySelectorAll(".texting");for(const e of n)e.classList.remove("texting");if(!t.partial)return;let r=e;for(;r;){const e=r.lastChild;if((null==e?void 0:e.nodeType)!==Node.ELEMENT_NODE||"DETAILS"===(null==e?void 0:e.tagName)&&!e.open){var o;if((null==e?void 0:e.nodeType)!==Node.TEXT_NODE||0!==e.textContent.trim().length||(null===(o=e.previousSibling)||void 0===o?void 0:o.nodeType)!==Node.ELEMENT_NODE)break;r=e.previousSibling}else r=e}r.classList.add("texting")}),1)}),[t.partial,t.content]),o().createElement("div",{className:a()("message",{failed:t.failed})},o().createElement("div",{className:"avatar"},o().createElement(c,{icon:{lib:"easyops",icon:"assistant"===t.role?"robot":"account"},size:"small",className:`role-${t.role}`})),o().createElement("div",{className:"main"},o().createElement("div",{className:"label"},"assistant"===t.role?"Assistant":"You"),o().createElement("div",{className:"content",ref:s},n.map(((e,t)=>o().createElement(u,{key:t,chunk:e}))))))}function u(e){let{chunk:t}=e;return o().createElement(o().Fragment,null,"markdown"===t.type?o().createElement("div",{className:"markdown"},o().createElement(i.N,{content:t.content})):"command"===t.type?o().createElement(o().Fragment,null,o().createElement("details",{className:"command"},o().createElement("summary",null,"```",t.command),o().createElement("pre",null,o().createElement("code",null,t.content)))):o().createElement("div",{className:"plain"},t.content))}},4705:(e,t,n)=>{"use strict";n.r(t),n.d(t,{ChatConversation:()=>_,ChatConversationComponent:()=>$});var r,o=n(4635),s=n(918),a=n(6902),i=n(5536),c=n(6121),l=n(829),u=n(2740),d=n(8769),f=n.n(d),p=n(300),m=n(4295),h=(n(6477),n(7035)),g=n(7236);let v,y,b,w,A,E,k,x,N;const{defineElement:S,property:T,event:j}=(0,p.createDecorators)();let _;var C=new WeakMap,B=new WeakMap,O=new WeakMap,M=new WeakSet,L=new WeakMap;class P extends m.ReactNextElement{constructor(){super(...arguments),(0,o.A)(this,M),(0,s.A)(this,C,y(this)),(0,s.A)(this,B,(b(this),w(this))),(0,s.A)(this,O,(A(this),E(this))),(0,s.A)(this,L,(N(this),e=>{(0,i.A)(M,this,k).emit(e)}))}get messages(){return(0,l.A)(C,this)}set messages(e){(0,c.A)(C,this,e)}get errorBoundary(){return(0,l.A)(B,this)}set errorBoundary(e){(0,c.A)(B,this,e)}render(){return f().createElement($,{host:this,messages:this.messages,errorBoundary:this.errorBoundary,onStoryboardUpdate:(0,l.A)(L,this)})}}function $(e){let{messages:t,host:n,errorBoundary:r,onStoryboardUpdate:o}=e;const s=(0,d.useMemo)((()=>/(?:^|\n)```easy_cmd_vb_block_(page|storyboard)\n([\s\S]*?)\n```(?:$|\n)/gm),[]),a=(0,d.useRef)(new Map),[i,c]=(0,d.useState)([]),l=(0,d.useRef)(!1);(0,d.useEffect)((()=>{for(const e of t??[]){if("assistant"!==e.role)continue;let t;s.lastIndex=a.current.get(e.key)??0;const n=[];let r=!1;for(;t=s.exec(e.content);){a.current.set(e.key,s.lastIndex);const[,o,i]=t;try{const e=JSON.parse(i);"page"===o?(r=!0,n.push(...e)):n.push({...e,type:"item"})}catch(e){console.error("parse storyboard failed:",e)}}r?c(n):n.length>0&&c((e=>[...e,...n]))}}),[s,t]);const[u,p]=(0,d.useState)([]);(0,d.useEffect)((()=>{const e=[],t=new Map;for(const n of i)"block"===n.type?e.push(n):n.storyboard&&t.set(n.uuid,n.storyboard);e.sort(((e,t)=>e.seq-t.seq));const n={brick:"eo-content-layout",children:[]},o={brick:"eo-main-view",children:[{brick:"eo-page-title",slot:"pageTitle",properties:{pageTitle:"测试页面"}}]};let s=!1;for(const a of e)if("全局操作区"===a.name)for(const e of a.children){const n=t.get(e);n&&(o.children.push({...n,properties:{...n.properties,slot:void 0},errorBoundary:r,slot:"toolbar",iid:`item:${e}`,meta:{type:"item",uuid:e,block:{uuid:a.uuid,name:a.name}}}),s=!0)}else{const e=t.get(a.uuid);if(e){const o={...e,children:[],errorBoundary:r,iid:`block:${a.uuid}`,meta:{type:"block",uuid:a.uuid,name:a.name}};s=!0,n.children.push(o);for(const e of a.children){const n=t.get(e);n&&o.children.push({...n,errorBoundary:r,iid:`item:${e}`,meta:{type:"item",uuid:e}})}}else if(!a.hasContainer)for(const e of a.children){const o=t.get(e);o&&(n.children.push({...o,errorBoundary:r,iid:`item:${e}`,meta:{type:"item",uuid:e}}),s=!0)}}o.children.push(n),p((e=>s?[o]:0===e.length?e:[]))}),[i,r]),(0,d.useEffect)((()=>{null==o||o(u)}),[o,u]);const m=(0,d.useMemo)((()=>{let e=n;for(;e;){const t=getComputedStyle(e,null).getPropertyValue("overflow-y");if("auto"===t||"scroll"===t)return e;if(e.parentNode instanceof ShadowRoot)e=e.parentNode.host;else{if(!(e.parentNode instanceof Element))break;e=e.parentNode}}return document.scrollingElement||document.documentElement}),[n]);return(0,d.useEffect)((()=>{l.current||setTimeout((()=>{m.scrollTo(0,m.scrollHeight)}),1)}),[t,m]),(0,d.useEffect)((()=>{const e=()=>{l.current=m.scrollTop+m.clientHeight+6<m.scrollHeight};return m.addEventListener("scroll",e),()=>{m.removeEventListener("scroll",e)}}),[m]),f().createElement(f().Fragment,null,null==t?void 0:t.map(((e,t)=>f().createElement(h.V,{key:e.key??`index-${t}`,message:e}))))}r=P,({e:[y,b,w,A,E,k,x,N],c:[_,v]}=(0,u.A)(r,[S("visual-builder.chat-conversation",{styleTexts:[g.A]})],[[T({attribute:!1}),1,"messages"],[T({type:Boolean}),1,"errorBoundary"],[j({type:"storyboard.update"}),1,"storyboardUpdate",e=>(0,l.A)(O,e),(e,t)=>(0,c.A)(O,e,t)]],0,(e=>L.has((0,a.A)(e))),m.ReactNextElement)),v()},7236:(e,t,n)=>{"use strict";n.d(t,{A:()=>l});var r=n(6758),o=n.n(r),s=n(935),a=n.n(s),i=n(6131),c=a()(o());c.i(i.A),c.push([e.id,':host{display:block}:host([hidden]){display:none}*{box-sizing:border-box}.message{display:flex;gap:8px}.main{flex:1;min-width:0}.label{font-weight:bold;line-height:28px}.message:not(:last-child){margin-bottom:2em}.invisible-dots{opacity:0}.failed .content{color:var(--color-error)}.command:not(:first-child){margin-top:1em}.command:not(:last-child){margin-bottom:1em}pre{white-space:pre-wrap;background-color:var(--palette-gray-3);border-radius:6px;padding:1em}.markdown > :first-child{margin-top:0}.markdown > :last-child{margin-bottom:0}.avatar{align-self:flex-start;display:flex;align-items:center;justify-content:center}.texting::after{content:"   ";animation:texting 2s infinite;white-space:pre}@keyframes texting{0%{content:"   "}25%{content:".  "}50%{content:".. "}75%{content:"..."}100%{content:"   "}}pre[class*="language-"]{overflow:visible}pre[class*="language-"],\ncode[class*="language-"]{white-space:pre-wrap}eo-avatar.role-assistant::part(avatar-icon){background-color:var(--palette-blue-5)}.content{word-wrap:break-word}.plain{white-space:pre-wrap}',""]);const l=c.toString()},6131:(e,t,n)=>{"use strict";n.d(t,{A:()=>l});var r=n(6758),o=n.n(r),s=n(935),a=n.n(s),i=n(7745),c=a()(o());c.i(i.A),c.push([e.id,"",""]);const l=c.toString()},935:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,s){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(a[c]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);r&&a[u[0]]||(void 0!==s&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=s),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),t.push(u))}},t}},6758:e=>{"use strict";e.exports=function(e){return e[1]}},3373:(e,t)=>{var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=a(e,s(n)))}return e}function s(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return o.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)r.call(e,n)&&e[n]&&(t=a(t,n));return t}function a(e,t){return t?e?e+" "+t:e+t:e}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},2740:(e,t,n)=>{"use strict";n.d(t,{A:()=>i});var r=n(7545),o=n(6902);function s(e,t,n){"symbol"==(0,r.A)(t)&&(t=(t=t.description)?"["+t+"]":"");try{Object.defineProperty(e,"name",{configurable:!0,value:n?n+" "+t:t})}catch(e){}return e}var a=n(1369);function i(e,t,n,i,c,l){var u,d,f,p,m,h,g,v=Symbol.metadata||Symbol.for("Symbol.metadata"),y=Object.defineProperty,b=Object.create,w=[b(null),b(null)],A=t.length;function E(t,n,r){return function(o,s){n&&(s=o,o=e);for(var a=0;a<t.length;a++)s=t[a].apply(o,r?[s]:[]);return r?s:o}}function k(e,t,n,r){if("function"!=typeof e&&(r||void 0!==e))throw new TypeError(t+" must "+(n||"be")+" a function"+(r?"":" or undefined"));return e}function x(e,t,n,o,a,i,c,l,f,p,m){function h(e){if(!m(e))throw new TypeError("Attempted to access private element on non-instance")}var g=[].concat(t[0]),v=t[3],b=!c,A=1===a,x=3===a,N=4===a,S=2===a;function T(t,n,r){return function(o,s){return n&&(s=o,o=e),r&&r(o),j[t].call(o,s)}}if(!b){var j={},_=[],C=x?"get":N||A?"set":"value";if(f?(p||A?j={get:s((function(){return v(this)}),o,"get"),set:function(e){t[4](this,e)}}:j[C]=v,p||s(j[C],o,S?"":C)):p||(j=Object.getOwnPropertyDescriptor(e,o)),!p&&!f){if((d=w[+l][o])&&7!=(d^a))throw Error("Decorating two elements with the same name ("+j[C].name+") is not supported yet");w[+l][o]=a<3?1:a}}for(var B=e,O=g.length-1;O>=0;O-=n?2:1){var M=k(g[O],"A decorator","be",!0),L=n?g[O-1]:void 0,P={},$={kind:["field","accessor","method","getter","setter","class"][a],name:o,metadata:u,addInitializer:function(e,t){if(e.v)throw Error("attempted to call addInitializer after decoration was finished");k(t,"An initializer","be",!0),i.push(t)}.bind(null,P)};if(b)d=M.call(L,B,$),P.v=1,k(d,"class decorators","return")&&(B=d);else if($.static=l,$.private=f,d=$.access={has:f?m.bind():function(e){return o in e}},N||(d.get=f?S?function(e){return h(e),j.value}:T("get",0,h):function(e){return e[o]}),S||x||(d.set=f?T("set",0,h):function(e,t){e[o]=t}),B=M.call(L,A?{get:j.get,set:j.set}:j[C],$),P.v=1,A){if("object"==(0,r.A)(B)&&B)(d=k(B.get,"accessor.get"))&&(j.get=d),(d=k(B.set,"accessor.set"))&&(j.set=d),(d=k(B.init,"accessor.init"))&&_.unshift(d);else if(void 0!==B)throw new TypeError("accessor decorators must return an object with get, set, or init properties or undefined")}else k(B,(p?"field":"method")+" decorators","return")&&(p?_.unshift(B):j[C]=B)}return a<2&&c.push(E(_,l,1),E(i,l,0)),p||b||(f?A?c.splice(-1,0,T("get",l),T("set",l)):c.push(S?j[C]:k.call.bind(j[C])):y(e,o,j)),B}function N(e){return y(e,v,{configurable:!0,enumerable:!0,value:u})}return void 0!==l&&(u=l[v]),u=b(null==u?null:u),m=[],h=function(e){e&&m.push(E(e))},g=function(t,r){for(var s=0;s<n.length;s++){var i=n[s],l=i[1],u=7&l;if((8&l)==t&&!u==r){var d=i[2],h=!!i[3],g=16&l;x(t?e:e.prototype,i,g,h?"#"+d:(0,a.A)(d),u,u<2?[]:t?p=p||[]:f=f||[],m,!!t,h,r,t&&h?function(t){return(0,o.A)(t)===e}:c)}}},g(8,0),g(0,0),g(8,1),g(0,1),h(f),h(p),d=m,A||N(e),{e:d,get c(){var n=[];return A&&[N(e=x(e,[t],i,e.name,5,n)),E(n,1)]}}}},2559:(e,t,n)=>{"use strict";function r(e,t,n){if("function"==typeof e?e===t:e.has(t))return arguments.length<3?t:n;throw new TypeError("Private element is not present on this object")}n.d(t,{A:()=>r})},6902:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var r=n(7545);function o(e){if(Object(e)!==e)throw TypeError("right-hand side of 'in' should be an object, got "+(null!==e?(0,r.A)(e):"null"));return e}},2016:(e,t,n)=>{"use strict";function r(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}n.d(t,{A:()=>r})},829:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var r=n(2559);function o(e,t){return e.get((0,r.A)(e,t))}},918:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var r=n(2016);function o(e,t,n){(0,r.A)(e,t),t.set(e,n)}},6121:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var r=n(2559);function o(e,t,n){return e.set((0,r.A)(e,t),n),n}},5536:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var r=n(2559);function o(e,t,n){return n((0,r.A)(e,t))}},4635:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var r=n(2016);function o(e,t){(0,r.A)(e,t),t.add(e)}},1369:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var r=n(7545);function o(e){var t=function(e,t){if("object"!=(0,r.A)(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!=(0,r.A)(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==(0,r.A)(t)?t:t+""}},7545:(e,t,n)=>{"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}n.d(t,{A:()=>r})},7384:(e,t,n)=>{"use strict";n.d(t,{N:()=>d});var r=n(8769),o=n(1085),s=n(3091),a=n(7447),i=n(3640),c=n(4360),l=n(1250);const u={Fragment:o.Fragment,jsx:o.jsx,jsxs:o.jsxs};function d(e){let{content:t}=e;const[n,o]=(0,r.useState)(null);return(0,r.useEffect)((()=>{let e=!1;return(0,s.l)().use(a.A).use(i.A).use([l.N]).use(c.A,u).process(t).then((t=>{e||o(t.result)})).catch((t=>{e||(console.error("Convert markdown failed:",t),o(null))})),()=>{e=!0}}),[t]),n}},1250:(e,t,n)=>{"use strict";n.d(t,{N:()=>a});var r=n(3544),o=n(4650),s=n(9830);function a(){function e(e,t,n){if(!n||"pre"!==n.tagName||"code"!==e.tagName)return;const r=function(e){const t=e.properties.className||[];for(const e of t)if("language-"===e.slice(0,9))return e.slice(9).toLowerCase();return null}(e);if(null===r)return;let a;try{n.properties.className=(n.properties.className||[]).concat("language-"+r),a=s.L.highlight((0,o.d)(e),r)}catch{return}e.children=a.children}return t=>{(0,r.YR)(t,"element",e)}}}}]);
//# sourceMappingURL=chat-conversation.f9dbc32c.js.map
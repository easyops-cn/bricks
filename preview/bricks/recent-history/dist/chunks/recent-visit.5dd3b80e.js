"use strict";(globalThis.webpackChunk_next_bricks_recent_history=globalThis.webpackChunk_next_bricks_recent_history||[]).push([[72,52],{7268:(e,t,r)=>{r.d(t,{I:()=>s,K:()=>n,NS:()=>i});let n=function(e){return e.RECENT_VISIT="RECENT_VISIT",e}({});const i="bricks/recent-history/recent-visit",s={en:{RECENT_VISIT:"Recent visits"},zh:{RECENT_VISIT:"最近访问"}}},4458:(e,t,r)=>{r.r(t),r.d(t,{RecentVisit:()=>_,RecentVisitComponent:()=>z});var n,i=r(918),s=r(6121),a=r(829),o=r(2714),c=r(8769),l=r.n(c),u=r(300),h=r(4295),p=r(7896),f=r(7268),d=(r(6477),r(609)),m=r(8675),v=r(2445);let g,y,A,b,w,E,k,S,I;(0,p.initializeReactI18n)(f.NS,f.I);const{defineElement:T,property:x}=(0,u.createDecorators)(),N=(0,h.wrapBrick)("eo-link"),R=(0,h.wrapBrick)("eo-tag");let _;var j=new WeakMap,C=new WeakMap,W=new WeakMap,K=new WeakMap;class M extends h.ReactNextElement{constructor(){super(...arguments),(0,i.A)(this,j,y(this)),(0,i.A)(this,C,(A(this),b(this))),(0,i.A)(this,W,(w(this),E(this))),(0,i.A)(this,K,(k(this),S(this))),I(this)}get namespace(){return(0,a.A)(j,this)}set namespace(e){(0,s.A)(j,this,e)}get capacity(){return(0,a.A)(C,this)}set capacity(e){(0,s.A)(C,this,e)}get compareKeys(){return(0,a.A)(W,this)}set compareKeys(e){(0,s.A)(W,this,e)}get urlTemplate(){return(0,a.A)(K,this)}set urlTemplate(e){(0,s.A)(K,this,e)}render(){return l().createElement(z,{namespace:this.namespace,capacity:this.capacity,compareKeys:this.compareKeys,urlTemplate:this.urlTemplate})}}n=M,({e:[y,A,b,w,E,k,S,I],c:[_,g]}=(0,o.A)(n,[T("recent-history.recent-visit",{styleTexts:[d.A]})],[[x(),1,"namespace"],[x({type:Number}),1,"capacity"],[x({attribute:!1}),1,"compareKeys"],[x(),1,"urlTemplate"]],0,void 0,h.ReactNextElement)),g();const O=(e,t)=>null==e?void 0:e.replace(/{{(.*?)}}/g,((e,r)=>(0,v.get)(t,r)));function z(e){const{namespace:t,capacity:r,compareKeys:n,urlTemplate:i}=e,{t:s}=(0,p.useTranslation)(f.NS),[a,o]=(0,c.useState)([]),u=()=>{const e=new m.s(t,r).getAll();if(Array.isArray(n)){const t=new Set(n);o(e.filter((e=>t.has(e.key))))}else o(e)};return(0,c.useEffect)((()=>{u()}),[r,n,t]),(0,c.useEffect)((()=>{const e=e=>{e.detail.namespace===t&&u()};return window.addEventListener("recent-history-change",e),()=>{window.removeEventListener("recent-history-change",e)}}),[]),a.length?l().createElement("div",{className:"recent-visit-wrapper"},l().createElement("span",{className:"recent-visit-label"},s(f.K.RECENT_VISIT)+": "),a.map((e=>l().createElement(N,{key:e.key,url:O(i,e)},l().createElement(R,{outline:!0,tagStyle:{borderRadius:"9999px",color:"var(--antd-text-color)",background:"var(--tag-blue-background)",outlineColor:"var(--tag-blue-border-color)"}},e.name))))):null}},8675:(e,t,r)=>{r.d(t,{s:()=>v});var n=r(4635),i=r(918),s=r(2559),a=r(829),o=r(6121),c=r(4612),l=r(4322);const u=new c.G(localStorage);var h=new WeakMap,p=new WeakMap,f=new WeakMap,d=new WeakMap,m=new WeakSet;class v{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;(0,n.A)(this,m),(0,i.A)(this,h,void 0),(0,i.A)(this,p,void 0),(0,i.A)(this,f,void 0),(0,i.A)(this,d,void 0),(0,o.A)(h,this,e),(0,o.A)(p,this,`recent-history-${e}`),(0,o.A)(f,this,t),u.getItem((0,a.A)(p,this))||u.setItem((0,a.A)(p,this),[]);const r=u.getItem((0,a.A)(p,this));(0,o.A)(d,this,new l.LRUCacheWithDelete((0,a.A)(f,this))),r.reverse().forEach((e=>{(0,a.A)(d,this).set(e.key,e)}))}set(e){(0,a.A)(d,this).set(e.key,e),(0,s.A)(m,this,g).call(this)}get(e){const t=(0,a.A)(d,this).get(e);return(0,s.A)(m,this,g).call(this),t}getAll(){return[...(0,a.A)(d,this).values()]}peek(e){return(0,a.A)(d,this).peek(e)}has(e){return(0,a.A)(d,this).has(e)}delete(e){const t=(0,a.A)(d,this).delete(e);return(0,s.A)(m,this,g).call(this),t}remove(e){const t=(0,a.A)(d,this).remove(e);return(0,s.A)(m,this,g).call(this),t}clear(){(0,a.A)(d,this).clear(),(0,s.A)(m,this,g).call(this)}}function g(){const e=[...(0,a.A)(d,this).values()];u.setItem((0,a.A)(p,this),e),window.dispatchEvent(new CustomEvent("recent-history-change",{detail:{namespace:(0,a.A)(h,this),list:e}}))}},609:(e,t,r)=>{r.d(t,{A:()=>o});var n=r(6758),i=r.n(n),s=r(935),a=r.n(s)()(i());a.push([e.id,":host{display:block}:host([hidden]){display:none}*,\n*::before,\n*::after{box-sizing:border-box}.recent-visit-wrapper{display:flex;flex-wrap:wrap;align-items:center;gap:5px}.recent-visit-label{font-size:12px;margin-right:5px}",""]);const o=a.toString()},935:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,i,s){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(n)for(var o=0;o<this.length;o++){var c=this[o][0];null!=c&&(a[c]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);n&&a[u[0]]||(void 0!==s&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=s),r&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=r):u[2]=r),i&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=i):u[4]="".concat(i)),t.push(u))}},t}},6758:e=>{e.exports=function(e){return e[1]}},2714:(e,t,r)=>{r.d(t,{A:()=>o});var n=r(7545),i=r(6902),s=r(8449),a=r(1369);function o(e,t,r,o,c,l){var u,h,p,f,d,m,v,g=Symbol.metadata||Symbol.for("Symbol.metadata"),y=Object.defineProperty,A=Object.create,b=[A(null),A(null)],w=t.length;function E(t,r,n){return function(i,s){r&&(s=i,i=e);for(var a=0;a<t.length;a++)s=t[a].apply(i,n?[s]:[]);return n?s:i}}function k(e,t,r,n){if("function"!=typeof e&&(n||void 0!==e))throw new TypeError(t+" must "+(r||"be")+" a function"+(n?"":" or undefined"));return e}function S(e,t,r,i,a,o,c,l,p,f,d){function m(e){if(!d(e))throw new TypeError("Attempted to access private element on non-instance")}var v=[].concat(t[0]),g=t[3],A=!c,w=1===a,S=3===a,I=4===a,T=2===a;function x(t,r,n){return function(i,s){return r&&(s=i,i=e),n&&n(i),N[t].call(i,s)}}if(!A){var N={},R=[],_=S?"get":I||w?"set":"value";if(p?(f||w?N={get:(0,s.A)((function(){return g(this)}),i,"get"),set:function(e){t[4](this,e)}}:N[_]=g,f||(0,s.A)(N[_],i,T?"":_)):f||(N=Object.getOwnPropertyDescriptor(e,i)),!f&&!p){if((h=b[+l][i])&&7!=(h^a))throw Error("Decorating two elements with the same name ("+N[_].name+") is not supported yet");b[+l][i]=a<3?1:a}}for(var j=e,C=v.length-1;C>=0;C-=r?2:1){var W=k(v[C],"A decorator","be",!0),K=r?v[C-1]:void 0,M={},O={kind:["field","accessor","method","getter","setter","class"][a],name:i,metadata:u,addInitializer:function(e,t){if(e.v)throw Error("attempted to call addInitializer after decoration was finished");k(t,"An initializer","be",!0),o.push(t)}.bind(null,M)};if(A)h=W.call(K,j,O),M.v=1,k(h,"class decorators","return")&&(j=h);else if(O.static=l,O.private=p,h=O.access={has:p?d.bind():function(e){return i in e}},I||(h.get=p?T?function(e){return m(e),N.value}:x("get",0,m):function(e){return e[i]}),T||S||(h.set=p?x("set",0,m):function(e,t){e[i]=t}),j=W.call(K,w?{get:N.get,set:N.set}:N[_],O),M.v=1,w){if("object"==(0,n.A)(j)&&j)(h=k(j.get,"accessor.get"))&&(N.get=h),(h=k(j.set,"accessor.set"))&&(N.set=h),(h=k(j.init,"accessor.init"))&&R.unshift(h);else if(void 0!==j)throw new TypeError("accessor decorators must return an object with get, set, or init properties or undefined")}else k(j,(f?"field":"method")+" decorators","return")&&(f?R.unshift(j):N[_]=j)}return a<2&&c.push(E(R,l,1),E(o,l,0)),f||A||(p?w?c.splice(-1,0,x("get",l),x("set",l)):c.push(T?N[_]:k.call.bind(N[_])):y(e,i,N)),j}function I(e){return y(e,g,{configurable:!0,enumerable:!0,value:u})}return void 0!==l&&(u=l[g]),u=A(null==u?null:u),d=[],m=function(e){e&&d.push(E(e))},v=function(t,n){for(var s=0;s<r.length;s++){var o=r[s],l=o[1],u=7&l;if((8&l)==t&&!u==n){var h=o[2],m=!!o[3],v=16&l;S(t?e:e.prototype,o,v,m?"#"+h:(0,a.A)(h),u,u<2?[]:t?f=f||[]:p=p||[],d,!!t,m,n,t&&m?function(t){return(0,i.A)(t)===e}:c)}}},v(8,0),v(0,0),v(8,1),v(0,1),m(p),m(f),h=d,w||I(e),{e:h,get c(){var r=[];return w&&[I(e=S(e,[t],o,e.name,5,r)),E(r,1)]}}}},6902:(e,t,r)=>{r.d(t,{A:()=>i});var n=r(7545);function i(e){if(Object(e)!==e)throw TypeError("right-hand side of 'in' should be an object, got "+(null!==e?(0,n.A)(e):"null"));return e}},8449:(e,t,r)=>{r.d(t,{A:()=>i});var n=r(7545);function i(e,t,r){"symbol"==(0,n.A)(t)&&(t=(t=t.description)?"["+t+"]":"");try{Object.defineProperty(e,"name",{configurable:!0,value:r?r+" "+t:t})}catch(e){}return e}},1369:(e,t,r)=>{r.d(t,{A:()=>i});var n=r(7545);function i(e){var t=function(e,t){if("object"!=(0,n.A)(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,"string");if("object"!=(0,n.A)(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==(0,n.A)(t)?t:t+""}},7545:(e,t,r)=>{function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}r.d(t,{A:()=>n})},4612:(e,t,r)=>{r.d(t,{G:()=>n});class n{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"brick-next-";this.storage=e,this.prefix=t}setItem(e,t){this.storage.setItem(this.prefix+e,JSON.stringify(t))}getItem(e){return JSON.parse(this.storage.getItem(this.prefix+e))}removeItem(e){return this.storage.removeItem(this.prefix+e)}clear(){return this.storage.clear()}}}}]);
//# sourceMappingURL=recent-visit.5dd3b80e.js.map
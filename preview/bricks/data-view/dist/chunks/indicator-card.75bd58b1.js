/*! For license information please see indicator-card.75bd58b1.js.LICENSE.txt */
(globalThis.webpackChunk_next_bricks_data_view=globalThis.webpackChunk_next_bricks_data_view||[]).push([[7905,2052],{56631:(e,t,r)=>{"use strict";r.r(t),r.d(t,{IndicatorCard:()=>E,IndicatorCardComponent:()=>N});var n,o=r(70918),i=r(86121),a=r(70829),c=r(62740),s=r(18769),l=r.n(s),u=r(10300),f=r(24295),p=(r(44291),r(59028)),d=r(53373),h=r.n(d),g=r(264);let m,v,b,w,x;const{defineElement:y,property:A}=(0,u.createDecorators)();let E;var S=new WeakMap,k=new WeakMap;class j extends f.ReactNextElement{constructor(){super(...arguments),(0,o.A)(this,S,v(this,"column")),(0,o.A)(this,k,(b(this),w(this,[]))),x(this)}get layout(){return(0,a.A)(S,this)}set layout(e){(0,i.A)(S,this,e)}get datasource(){return(0,a.A)(k,this)}set datasource(e){(0,i.A)(k,this,e)}render(){return l().createElement(N,{datasource:this.datasource,layout:this.layout})}}function N(e){let{datasource:t,layout:r}=e;const n=(0,s.useMemo)((()=>t.map(((e,t)=>l().createElement("div",{key:t,className:h()("col-wrapper flex flex-col")},l().createElement("div",{className:"col-value"},e.value),l().createElement("div",{className:"col-desc"},e.desc),l().createElement("div",{className:"col-unit"},e.unit))))),[t]),o=(0,s.useMemo)((()=>t.map(((e,t)=>l().createElement("div",{key:t,className:"row-wrapper flex flex-row"},l().createElement("div",{className:"row-left"},l().createElement("img",{src:g})),l().createElement("div",{className:"row-right flex flex-col"},l().createElement("div",{className:"row-desc"},e.desc),l().createElement("div",{className:"row-value"}," ",e.value)))))),[t]);return l().createElement("div",{className:h()("container flex flex-row ",{townhouse:"column-townhouse"===r||"row-townhouse"===r})},r.includes("row")?o:n)}n=j,({e:[v,b,w,x],c:[E,m]}=(0,c.A)(n,[y("data-view.indicator-card",{styleTexts:[p.A]})],[[A({attribute:!1}),1,"layout"],[A({attribute:!1}),1,"datasource"]],0,void 0,f.ReactNextElement)),m()},59028:(e,t,r)=>{"use strict";r.d(t,{A:()=>m});var n=r(36758),o=r.n(n),i=r(40935),a=r.n(i),c=r(20062),s=r.n(c),l=new URL(r(47670),r.b),u=new URL(r(90408),r.b),f=new URL(r(54652),r.b),p=a()(o()),d=s()(l),h=s()(u),g=s()(f);p.push([e.id,`:host{display:inline-block}:host([hidden]){display:none}.container{gap:8px}.flex{display:flex}.flex-row{flex-direction:row}.flex-col{flex-direction:column}.col-wrapper{padding:9px 21px 7px;text-align:center;background:url(${d}) center bottom repeat-x rgba(28,58,117,0.2);border-top:1px solid;border-image:radial-gradient(circle,rgb(0,149,255),rgba(0,149,255,0)) 2 /1 /0 stretch}.townhouse{gap:0}.townhouse .col-wrapper{background:none;padding:9px 25px 7px}:is(.townhouse .col-wrapper):not(:last-child){border-right:1px solid;border-image:url(${h}) 2 /1 /0 stretch;background:none}:is(.townhouse .col-wrapper):last-child{border:none}.townhouse .row-wrapper{background:none;padding:10px 18px}.col-value{font-size:20px;font-weight:bold;color:#0bf9fe;line-height:24px}.col-desc{font-size:12px;font-weight:400;color:rgba(255,255,255,1);line-height:18px}.col-unit{font-size:10px;font-weight:400;color:rgba(255,255,255,0.65);line-height:14px}.row-left img{width:100%;position:relative;top:-7px}.row-right{text-align:left}.row-wrapper{padding:10px 14px;gap:11px;background:url(${g}) center bottom repeat-x rgba(28,58,117,0.2)}.row-desc{font-size:14px;font-weight:500;color:#ffffff;line-height:9px;color:rgba(255,255,255,0.8)}.row-value{font-size:24px;font-weight:900;color:#ffffff;line-height:28px;padding-top:8px}`,""]);const m=p.toString()},40935:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(n)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);n&&a[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),r&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=r):u[2]=r),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),t.push(u))}},t}},20062:e=>{"use strict";e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},36758:e=>{"use strict";e.exports=function(e){return e[1]}},264:(e,t,r)=>{"use strict";e.exports=r.p+"images/7eb52148.png"},54652:(e,t,r)=>{"use strict";e.exports=r.p+"images/f09bd924.png"},90408:(e,t,r)=>{"use strict";e.exports=r.p+"images/51ee190a.png"},47670:(e,t,r)=>{"use strict";e.exports=r.p+"images/f3d13abf.png"},53373:(e,t)=>{var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e="",t=0;t<arguments.length;t++){var r=arguments[t];r&&(e=a(e,i(r)))}return e}function i(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return o.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var r in e)n.call(e,r)&&e[r]&&(t=a(t,r));return t}function a(e,t){return t?e?e+" "+t:e+t:e}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},62740:(e,t,r)=>{"use strict";r.d(t,{A:()=>c});var n=r(17545),o=r(26902);function i(e,t,r){"symbol"==(0,n.A)(t)&&(t=(t=t.description)?"["+t+"]":"");try{Object.defineProperty(e,"name",{configurable:!0,value:r?r+" "+t:t})}catch(e){}return e}var a=r(11369);function c(e,t,r,c,s,l){var u,f,p,d,h,g,m,v=Symbol.metadata||Symbol.for("Symbol.metadata"),b=Object.defineProperty,w=Object.create,x=[w(null),w(null)],y=t.length;function A(t,r,n){return function(o,i){r&&(i=o,o=e);for(var a=0;a<t.length;a++)i=t[a].apply(o,n?[i]:[]);return n?i:o}}function E(e,t,r,n){if("function"!=typeof e&&(n||void 0!==e))throw new TypeError(t+" must "+(r||"be")+" a function"+(n?"":" or undefined"));return e}function S(e,t,r,o,a,c,s,l,p,d,h){function g(e){if(!h(e))throw new TypeError("Attempted to access private element on non-instance")}var m=[].concat(t[0]),v=t[3],w=!s,y=1===a,S=3===a,k=4===a,j=2===a;function N(t,r,n){return function(o,i){return r&&(i=o,o=e),n&&n(o),T[t].call(o,i)}}if(!w){var T={},_=[],z=S?"get":k||y?"set":"value";if(p?(d||y?T={get:i((function(){return v(this)}),o,"get"),set:function(e){t[4](this,e)}}:T[z]=v,d||i(T[z],o,j?"":z)):d||(T=Object.getOwnPropertyDescriptor(e,o)),!d&&!p){if((f=x[+l][o])&&7!=(f^a))throw Error("Decorating two elements with the same name ("+T[z].name+") is not supported yet");x[+l][o]=a<3?1:a}}for(var O=e,P=m.length-1;P>=0;P-=r?2:1){var C=E(m[P],"A decorator","be",!0),M=r?m[P-1]:void 0,R={},I={kind:["field","accessor","method","getter","setter","class"][a],name:o,metadata:u,addInitializer:function(e,t){if(e.v)throw Error("attempted to call addInitializer after decoration was finished");E(t,"An initializer","be",!0),c.push(t)}.bind(null,R)};if(w)f=C.call(M,O,I),R.v=1,E(f,"class decorators","return")&&(O=f);else if(I.static=l,I.private=p,f=I.access={has:p?h.bind():function(e){return o in e}},k||(f.get=p?j?function(e){return g(e),T.value}:N("get",0,g):function(e){return e[o]}),j||S||(f.set=p?N("set",0,g):function(e,t){e[o]=t}),O=C.call(M,y?{get:T.get,set:T.set}:T[z],I),R.v=1,y){if("object"==(0,n.A)(O)&&O)(f=E(O.get,"accessor.get"))&&(T.get=f),(f=E(O.set,"accessor.set"))&&(T.set=f),(f=E(O.init,"accessor.init"))&&_.unshift(f);else if(void 0!==O)throw new TypeError("accessor decorators must return an object with get, set, or init properties or undefined")}else E(O,(d?"field":"method")+" decorators","return")&&(d?_.unshift(O):T[z]=O)}return a<2&&s.push(A(_,l,1),A(c,l,0)),d||w||(p?y?s.splice(-1,0,N("get",l),N("set",l)):s.push(j?T[z]:E.call.bind(T[z])):b(e,o,T)),O}function k(e){return b(e,v,{configurable:!0,enumerable:!0,value:u})}return void 0!==l&&(u=l[v]),u=w(null==u?null:u),h=[],g=function(e){e&&h.push(A(e))},m=function(t,n){for(var i=0;i<r.length;i++){var c=r[i],l=c[1],u=7&l;if((8&l)==t&&!u==n){var f=c[2],g=!!c[3],m=16&l;S(t?e:e.prototype,c,m,g?"#"+f:(0,a.A)(f),u,u<2?[]:t?d=d||[]:p=p||[],h,!!t,g,n,t&&g?function(t){return(0,o.A)(t)===e}:s)}}},m(8,0),m(0,0),m(8,1),m(0,1),g(p),g(d),f=h,y||k(e),{e:f,get c(){var r=[];return y&&[k(e=S(e,[t],c,e.name,5,r)),A(r,1)]}}}},12559:(e,t,r)=>{"use strict";function n(e,t,r){if("function"==typeof e?e===t:e.has(t))return arguments.length<3?t:r;throw new TypeError("Private element is not present on this object")}r.d(t,{A:()=>n})},26902:(e,t,r)=>{"use strict";r.d(t,{A:()=>o});var n=r(17545);function o(e){if(Object(e)!==e)throw TypeError("right-hand side of 'in' should be an object, got "+(null!==e?(0,n.A)(e):"null"));return e}},72016:(e,t,r)=>{"use strict";function n(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}r.d(t,{A:()=>n})},70829:(e,t,r)=>{"use strict";r.d(t,{A:()=>o});var n=r(12559);function o(e,t){return e.get((0,n.A)(e,t))}},70918:(e,t,r)=>{"use strict";r.d(t,{A:()=>o});var n=r(72016);function o(e,t,r){(0,n.A)(e,t),t.set(e,r)}},86121:(e,t,r)=>{"use strict";r.d(t,{A:()=>o});var n=r(12559);function o(e,t,r){return e.set((0,n.A)(e,t),r),r}},11369:(e,t,r)=>{"use strict";r.d(t,{A:()=>o});var n=r(17545);function o(e){var t=function(e,t){if("object"!=(0,n.A)(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!=(0,n.A)(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==(0,n.A)(t)?t:t+""}},17545:(e,t,r)=>{"use strict";function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}r.d(t,{A:()=>n})}}]);
//# sourceMappingURL=indicator-card.75bd58b1.js.map
/*! For license information please see home-redirect.4ef22efa.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_next_bricks_basic=globalThis.webpackChunk_next_bricks_basic||[]).push([[1023,2052],{8351:(t,e,r)=>{r.r(e),r.d(e,{HomeRedirect:()=>g});var n,o=r(918),i=r(6121),a=r(829),c=r(2740),s=r(300),u=r(8638),l=r(2308);let f,p,d,h,v;const{defineElement:m,property:y}=(0,s.createDecorators)();let g;var b=new WeakMap,A=new WeakMap;class w extends s.NextElement{constructor(){super(...arguments),(0,o.A)(this,b,p(this)),(0,o.A)(this,A,(d(this),h(this))),v(this)}get appId(){return(0,a.A)(b,this)}set appId(t){(0,i.A)(b,this,t)}get redirectUrl(){return(0,a.A)(A,this)}set redirectUrl(t){(0,i.A)(A,this,t)}async _render(){if(!this.isConnected||!this.appId&&!this.redirectUrl)return;let t=this.redirectUrl;if(!t)try{var e;const r=await(0,u.k)({query:{appId:this.appId,installStatus:{$ne:"running"}},fields:["appId","homepage","installStatus"]});null!==(e=r.list)&&void 0!==e&&e.length&&(t=r.list[0].homepage)}catch(t){return void console.error("Search micro app '%s' for redirect failed:",this.appId,t)}t?location.replace(t.replace(/^\/*/,"")):console.error("Redirect target not found, appId:",this.appId)}}n=w,({e:[p,d,h,v],c:[g,f]}=(0,c.A)(n,[m("basic.home-redirect",{styleTexts:[l.A]})],[[y(),1,"appId"],[y(),1,"redirectUrl"]],0,void 0,s.NextElement)),f()},2308:(t,e,r)=>{r.d(e,{A:()=>c});var n=r(6758),o=r.n(n),i=r(935),a=r.n(i)()(o());a.push([t.id,":host{display:none}",""]);const c=a.toString()},935:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r="",n=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),n&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=t(e),n&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(t,r,n,o,i){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(n)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var u=0;u<t.length;u++){var l=[].concat(t[u]);n&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},6758:t=>{t.exports=function(t){return t[1]}},2740:(t,e,r)=>{r.d(e,{A:()=>c});var n=r(7545),o=r(6902);function i(t,e,r){"symbol"==(0,n.A)(e)&&(e=(e=e.description)?"["+e+"]":"");try{Object.defineProperty(t,"name",{configurable:!0,value:r?r+" "+e:e})}catch(t){}return t}var a=r(1369);function c(t,e,r,c,s,u){var l,f,p,d,h,v,m,y=Symbol.metadata||Symbol.for("Symbol.metadata"),g=Object.defineProperty,b=Object.create,A=[b(null),b(null)],w=e.length;function S(e,r,n){return function(o,i){r&&(i=o,o=t);for(var a=0;a<e.length;a++)i=e[a].apply(o,n?[i]:[]);return n?i:o}}function j(t,e,r,n){if("function"!=typeof t&&(n||void 0!==t))throw new TypeError(e+" must "+(r||"be")+" a function"+(n?"":" or undefined"));return t}function E(t,e,r,o,a,c,s,u,p,d,h){function v(t){if(!h(t))throw new TypeError("Attempted to access private element on non-instance")}var m=[].concat(e[0]),y=e[3],b=!s,w=1===a,E=3===a,I=4===a,k=2===a;function _(e,r,n){return function(o,i){return r&&(i=o,o=t),n&&n(o),T[e].call(o,i)}}if(!b){var T={},x=[],P=E?"get":I||w?"set":"value";if(p?(d||w?T={get:i((function(){return y(this)}),o,"get"),set:function(t){e[4](this,t)}}:T[P]=y,d||i(T[P],o,k?"":P)):d||(T=Object.getOwnPropertyDescriptor(t,o)),!d&&!p){if((f=A[+u][o])&&7!=(f^a))throw Error("Decorating two elements with the same name ("+T[P].name+") is not supported yet");A[+u][o]=a<3?1:a}}for(var O=t,U=m.length-1;U>=0;U-=r?2:1){var z=j(m[U],"A decorator","be",!0),C=r?m[U-1]:void 0,D={},M={kind:["field","accessor","method","getter","setter","class"][a],name:o,metadata:l,addInitializer:function(t,e){if(t.v)throw Error("attempted to call addInitializer after decoration was finished");j(e,"An initializer","be",!0),c.push(e)}.bind(null,D)};if(b)f=z.call(C,O,M),D.v=1,j(f,"class decorators","return")&&(O=f);else if(M.static=u,M.private=p,f=M.access={has:p?h.bind():function(t){return o in t}},I||(f.get=p?k?function(t){return v(t),T.value}:_("get",0,v):function(t){return t[o]}),k||E||(f.set=p?_("set",0,v):function(t,e){t[o]=e}),O=z.call(C,w?{get:T.get,set:T.set}:T[P],M),D.v=1,w){if("object"==(0,n.A)(O)&&O)(f=j(O.get,"accessor.get"))&&(T.get=f),(f=j(O.set,"accessor.set"))&&(T.set=f),(f=j(O.init,"accessor.init"))&&x.unshift(f);else if(void 0!==O)throw new TypeError("accessor decorators must return an object with get, set, or init properties or undefined")}else j(O,(d?"field":"method")+" decorators","return")&&(d?x.unshift(O):T[P]=O)}return a<2&&s.push(S(x,u,1),S(c,u,0)),d||b||(p?w?s.splice(-1,0,_("get",u),_("set",u)):s.push(k?T[P]:j.call.bind(T[P])):g(t,o,T)),O}function I(t){return g(t,y,{configurable:!0,enumerable:!0,value:l})}return void 0!==u&&(l=u[y]),l=b(null==l?null:l),h=[],v=function(t){t&&h.push(S(t))},m=function(e,n){for(var i=0;i<r.length;i++){var c=r[i],u=c[1],l=7&u;if((8&u)==e&&!l==n){var f=c[2],v=!!c[3],m=16&u;E(e?t:t.prototype,c,m,v?"#"+f:(0,a.A)(f),l,l<2?[]:e?d=d||[]:p=p||[],h,!!e,v,n,e&&v?function(e){return(0,o.A)(e)===t}:s)}}},m(8,0),m(0,0),m(8,1),m(0,1),v(p),v(d),f=h,w||I(t),{e:f,get c(){var r=[];return w&&[I(t=E(t,[e],c,t.name,5,r)),S(r,1)]}}}},2559:(t,e,r)=>{function n(t,e,r){if("function"==typeof t?t===e:t.has(e))return arguments.length<3?e:r;throw new TypeError("Private element is not present on this object")}r.d(e,{A:()=>n})},6330:(t,e,r)=>{function n(t,e,r,n,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void r(t)}c.done?e(s):Promise.resolve(s).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,s,"next",t)}function s(t){n(a,o,i,c,s,"throw",t)}c(void 0)}))}}r.d(e,{A:()=>o})},6902:(t,e,r)=>{r.d(e,{A:()=>o});var n=r(7545);function o(t){if(Object(t)!==t)throw TypeError("right-hand side of 'in' should be an object, got "+(null!==t?(0,n.A)(t):"null"));return t}},2016:(t,e,r)=>{function n(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}r.d(e,{A:()=>n})},829:(t,e,r)=>{r.d(e,{A:()=>o});var n=r(2559);function o(t,e){return t.get((0,n.A)(t,e))}},918:(t,e,r)=>{r.d(e,{A:()=>o});var n=r(2016);function o(t,e,r){(0,n.A)(t,e),e.set(t,r)}},6121:(t,e,r)=>{r.d(e,{A:()=>o});var n=r(2559);function o(t,e,r){return t.set((0,n.A)(t,e),r),r}},1369:(t,e,r)=>{r.d(e,{A:()=>o});var n=r(7545);function o(t){var e=function(t,e){if("object"!=(0,n.A)(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!=(0,n.A)(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==(0,n.A)(e)?e:e+""}},7545:(t,e,r)=>{function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}r.d(e,{A:()=>n})},8638:(t,e,r)=>{r.d(e,{k:()=>i});var n=r(6330),o=r(108),i=function(){var t=(0,n.A)((function*(t,e){return(yield o.http.post("api/gateway/micro_app_standalone.runtime.SearchMicroAppStandalone/api/v1/micro_app_standalone/search",t,e)).data}));return function(e,r){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=home-redirect.4ef22efa.js.map
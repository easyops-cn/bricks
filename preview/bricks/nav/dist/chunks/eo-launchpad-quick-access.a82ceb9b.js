/*! For license information please see eo-launchpad-quick-access.a82ceb9b.js.LICENSE.txt */
(globalThis.webpackChunk_next_bricks_nav=globalThis.webpackChunk_next_bricks_nav||[]).push([[8533,1369,2052],{8356:(e,t,n)=>{"use strict";n.d(t,{P:()=>o,z:()=>i});var r=n(8769),a=n.n(r);const i=a().createContext({}),o=()=>a().useContext(i)},8839:(e,t,n)=>{"use strict";n.d(t,{F:()=>d,r:()=>p});var r=n(9575),a=n(8769),i=n.n(a),o=n(1030),c=n(3373),s=n.n(c),l=n(9393),u=n(8356);function p(e){let{name:t,items:n}=e;return i().createElement("li",{className:"menu-group"},i().createElement("div",{className:"menu-group-label"},t),i().createElement("ul",{className:"menu"},n.map((e=>"dir"===e.type?i().createElement(f,{key:`${e.type}-${e.id}`,name:e.name,items:e.items}):i().createElement(m,{key:`${e.type}-${e.id}`,item:e})))))}function m(e){var t;let{item:n}=e;const{loadingFavorites:c,readonly:p,pushRecentVisit:m,toggleStar:d,isStarred:f}=(0,u.P)(),v=(0,a.useMemo)((()=>f(n)),[f,n]),h=(0,a.useCallback)((()=>{d(n)}),[n,d]),y=(0,a.useCallback)((()=>{m(n)}),[n,m]);return i().createElement("li",{className:s()("menu-item",{starred:v,"can-star":!c})},i().createElement(l.EM,(0,r.A)({onClick:y},"app"===n.type?{url:n.url}:{href:n.url,target:"_blank"}),i().createElement(l.Bj,(0,r.A)({className:"menu-icon",lib:"easyops",icon:"micro-app-center"},null!==(t=n.menuIcon)&&void 0!==t&&t.lib&&n.menuIcon.icon?(0,o.pick)(n.menuIcon,["lib","icon","theme","category","prefix"]):null)),i().createElement("span",{className:"menu-item-label"},n.name)),!p&&i().createElement(l.Bj,{lib:"fa",prefix:v?"fas":"far",icon:"star",className:"menu-item-star",title:v?"取消收藏":"收藏",onClick:h}))}function d(e){var t;let{item:n,target:c}=e;const{readonly:s,pushRecentVisit:p,toggleStar:m}=(0,u.P)(),d=(0,a.useCallback)((()=>{"link"!==n.type&&p(n)}),[n,p]),f=(0,a.useCallback)((()=>{m(n)}),[n,m]);return i().createElement("li",{className:"sidebar-menu-item"},i().createElement(l.EM,(0,r.A)({onClick:d},"app"===n.type?{url:n.url,target:c}:{href:n.url,target:"_blank"}),i().createElement(l.Bj,(0,r.A)({className:"sidebar-menu-icon",lib:"easyops",icon:"micro-app-center"},null!==(t=n.menuIcon)&&void 0!==t&&t.lib&&n.menuIcon.icon?(0,o.pick)(n.menuIcon,["lib","icon","theme","category","prefix"]):null)),i().createElement("span",{className:"menu-item-label"},n.name)),!s&&i().createElement(l.Bj,{lib:"fa",icon:"xmark",className:"menu-item-remove",onClick:f}))}function f(e){let{name:t,items:n}=e;const{searching:r}=(0,u.P)(),[o,c]=(0,a.useState)(!1),[p,d]=(0,a.useState)(!1),f=(0,a.useCallback)((()=>{r?d((e=>!e)):c((e=>!e))}),[r]);(0,a.useEffect)((()=>{d(!0)}),[r]);const v=r?p:o;return i().createElement("li",{className:"menu-item folder"},i().createElement(l.EM,{onClick:f},i().createElement(l.Bj,{lib:"fa",prefix:"far",icon:"folder-open",className:"menu-icon"}),i().createElement("span",{className:"menu-item-label"},t),i().createElement(l.Bj,{lib:"antd",icon:v?"up":"down",className:"menu-item-toggle"})),i().createElement("ul",{className:s()("sub-menu",{expanded:v})},n.map((e=>i().createElement(m,{key:`${e.type}-${e.id}`,item:e})))))}},6300:(e,t,n)=>{"use strict";n.r(t),n.d(t,{EoLaunchpadQuickAccess:()=>E,EoLaunchpadQuickAccessComponent:()=>S});var r,a=n(918),i=n(6121),o=n(829),c=n(2740),s=n(8769),l=n.n(s),u=n(300),p=n(4295),m=(n(6477),n(8119)),d=n(2133),f=n(8356),v=n(8839);let h,y,b,g,A;const{defineElement:w,property:k}=(0,u.createDecorators)();let E;var j=new WeakMap,x=new WeakMap;class O extends p.ReactNextElement{constructor(){super(...arguments),(0,a.A)(this,j,y(this)),(0,a.A)(this,x,(b(this),g(this))),A(this)}get readonly(){return(0,o.A)(j,this)}set readonly(e){(0,i.A)(j,this,e)}get target(){return(0,o.A)(x,this)}set target(e){(0,i.A)(x,this,e)}render(){return l().createElement(S,{readonly:this.readonly,target:this.target})}}function S(e){let{readonly:t,target:n}=e;const{favorites:r,loadingFavorites:a,pushRecentVisit:i,toggleStar:o,isStarred:c}=(0,d.sZ)(!0);return l().createElement(f.z.Provider,{value:{searching:!1,loadingFavorites:a,readonly:t,pushRecentVisit:i,toggleStar:o,isStarred:c}},l().createElement("ul",{className:"quick-access-list"},r.map(((e,t)=>l().createElement(v.F,{key:t,target:n,item:e})))))}r=O,({e:[y,b,g,A],c:[E,h]}=(0,c.A)(r,[w("eo-launchpad-quick-access",{styleTexts:[m.A]})],[[k({type:Boolean}),1,"readonly"],[k({attribute:!1}),1,"target"]],0,void 0,p.ReactNextElement)),h()},8119:(e,t,n)=>{"use strict";n.d(t,{A:()=>c});var r=n(6758),a=n.n(r),i=n(935),o=n.n(i)()(a());o.push([e.id,":host{display:block}:host([hidden]){display:none}.quick-access-list{display:grid;gap:14px;grid-template-columns:repeat(2,1fr);list-style:none;margin:0;padding:0}.sidebar-menu-item{display:flex;align-items:center;justify-content:space-between;overflow:hidden}.sidebar-menu-item > eo-link{display:block;min-width:0}.sidebar-menu-item > eo-link::part(link){display:flex;align-items:center;height:20px;gap:8px;color:var(--color-header-text)}.sidebar-menu-icon{color:var(--left-sidebar-item-collapsed-icon-color)}.menu-item-label{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.menu-item-remove{color:var(--color-secondary-text);cursor:pointer}.sidebar-menu-item:not(:hover) .menu-item-remove{display:none}.menu-item-remove:hover{color:var(--color-normal-text)}.menu-item-remove:active{color:var(--color-strong-text)}.sidebar-menu-item > eo-link:hover::part(link),\n.sidebar-menu-item > eo-link:hover .sidebar-menu-icon{color:var(--color-brand-hover)}@supports not (inset: 0){.sidebar-menu-item,\n  .sidebar-menu-item > eo-link::part(link){gap:0}.sidebar-menu-icon{margin-right:8px}}",""]);const c=o.toString()},935:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,i){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(o[s]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);r&&o[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),a&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=a):u[4]="".concat(a)),t.push(u))}},t}},6758:e=>{"use strict";e.exports=function(e){return e[1]}},3373:(e,t)=>{var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=o(e,i(n)))}return e}function i(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return a.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)r.call(e,n)&&e[n]&&(t=o(t,n));return t}function o(e,t){return t?e?e+" "+t:e+t:e}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},2740:(e,t,n)=>{"use strict";n.d(t,{A:()=>c});var r=n(7545),a=n(6902);function i(e,t,n){"symbol"==(0,r.A)(t)&&(t=(t=t.description)?"["+t+"]":"");try{Object.defineProperty(e,"name",{configurable:!0,value:n?n+" "+t:t})}catch(e){}return e}var o=n(1369);function c(e,t,n,c,s,l){var u,p,m,d,f,v,h,y=Symbol.metadata||Symbol.for("Symbol.metadata"),b=Object.defineProperty,g=Object.create,A=[g(null),g(null)],w=t.length;function k(t,n,r){return function(a,i){n&&(i=a,a=e);for(var o=0;o<t.length;o++)i=t[o].apply(a,r?[i]:[]);return r?i:a}}function E(e,t,n,r){if("function"!=typeof e&&(r||void 0!==e))throw new TypeError(t+" must "+(n||"be")+" a function"+(r?"":" or undefined"));return e}function j(e,t,n,a,o,c,s,l,m,d,f){function v(e){if(!f(e))throw new TypeError("Attempted to access private element on non-instance")}var h=[].concat(t[0]),y=t[3],g=!s,w=1===o,j=3===o,x=4===o,O=2===o;function S(t,n,r){return function(a,i){return n&&(i=a,a=e),r&&r(a),P[t].call(a,i)}}if(!g){var P={},C=[],N=j?"get":x||w?"set":"value";if(m?(d||w?P={get:i((function(){return y(this)}),a,"get"),set:function(e){t[4](this,e)}}:P[N]=y,d||i(P[N],a,O?"":N)):d||(P=Object.getOwnPropertyDescriptor(e,a)),!d&&!m){if((p=A[+l][a])&&7!=(p^o))throw Error("Decorating two elements with the same name ("+P[N].name+") is not supported yet");A[+l][a]=o<3?1:o}}for(var _=e,T=h.length-1;T>=0;T-=n?2:1){var I=E(h[T],"A decorator","be",!0),D=n?h[T-1]:void 0,V={},B={kind:["field","accessor","method","getter","setter","class"][o],name:a,metadata:u,addInitializer:function(e,t){if(e.v)throw Error("attempted to call addInitializer after decoration was finished");E(t,"An initializer","be",!0),c.push(t)}.bind(null,V)};if(g)p=I.call(D,_,B),V.v=1,E(p,"class decorators","return")&&(_=p);else if(B.static=l,B.private=m,p=B.access={has:m?f.bind():function(e){return a in e}},x||(p.get=m?O?function(e){return v(e),P.value}:S("get",0,v):function(e){return e[a]}),O||j||(p.set=m?S("set",0,v):function(e,t){e[a]=t}),_=I.call(D,w?{get:P.get,set:P.set}:P[N],B),V.v=1,w){if("object"==(0,r.A)(_)&&_)(p=E(_.get,"accessor.get"))&&(P.get=p),(p=E(_.set,"accessor.set"))&&(P.set=p),(p=E(_.init,"accessor.init"))&&C.unshift(p);else if(void 0!==_)throw new TypeError("accessor decorators must return an object with get, set, or init properties or undefined")}else E(_,(d?"field":"method")+" decorators","return")&&(d?C.unshift(_):P[N]=_)}return o<2&&s.push(k(C,l,1),k(c,l,0)),d||g||(m?w?s.splice(-1,0,S("get",l),S("set",l)):s.push(O?P[N]:E.call.bind(P[N])):b(e,a,P)),_}function x(e){return b(e,y,{configurable:!0,enumerable:!0,value:u})}return void 0!==l&&(u=l[y]),u=g(null==u?null:u),f=[],v=function(e){e&&f.push(k(e))},h=function(t,r){for(var i=0;i<n.length;i++){var c=n[i],l=c[1],u=7&l;if((8&l)==t&&!u==r){var p=c[2],v=!!c[3],h=16&l;j(t?e:e.prototype,c,h,v?"#"+p:(0,o.A)(p),u,u<2?[]:t?d=d||[]:m=m||[],f,!!t,v,r,t&&v?function(t){return(0,a.A)(t)===e}:s)}}},h(8,0),h(0,0),h(8,1),h(0,1),v(m),v(d),p=f,w||x(e),{e:p,get c(){var n=[];return w&&[x(e=j(e,[t],c,e.name,5,n)),k(n,1)]}}}},2559:(e,t,n)=>{"use strict";function r(e,t,n){if("function"==typeof e?e===t:e.has(t))return arguments.length<3?t:n;throw new TypeError("Private element is not present on this object")}n.d(t,{A:()=>r})},6330:(e,t,n)=>{"use strict";function r(e,t,n,r,a,i,o){try{var c=e[i](o),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,a)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(a,i){var o=e.apply(t,n);function c(e){r(o,a,i,c,s,"next",e)}function s(e){r(o,a,i,c,s,"throw",e)}c(void 0)}))}}n.d(t,{A:()=>a})},6902:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});var r=n(7545);function a(e){if(Object(e)!==e)throw TypeError("right-hand side of 'in' should be an object, got "+(null!==e?(0,r.A)(e):"null"));return e}},2016:(e,t,n)=>{"use strict";function r(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}n.d(t,{A:()=>r})},829:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});var r=n(2559);function a(e,t){return e.get((0,r.A)(e,t))}},918:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});var r=n(2016);function a(e,t,n){(0,r.A)(e,t),t.set(e,n)}},6121:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});var r=n(2559);function a(e,t,n){return e.set((0,r.A)(e,t),n),n}},4586:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});var r=n(1369);function a(e,t,n){return(t=(0,r.A)(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},9575:(e,t,n)=>{"use strict";function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(this,arguments)}n.d(t,{A:()=>r})},9740:(e,t,n)=>{"use strict";n.d(t,{A:()=>i});var r=n(4586);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){(0,r.A)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},1369:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});var r=n(7545);function a(e){var t=function(e,t){if("object"!=(0,r.A)(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,"string");if("object"!=(0,r.A)(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==(0,r.A)(t)?t:t+""}},7545:(e,t,n)=>{"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}n.d(t,{A:()=>r})},8406:(e,t,n)=>{"use strict";n.d(t,{y:()=>i});var r=n(6330),a=n(3496),i=function(){var e=(0,r.A)((function*(e,t,n){return(yield a.http.post("api/gateway/cmdb.instance.PostSearchV3/v3/object/".concat(e,"/instance/_search"),t,n)).data}));return function(t,n,r){return e.apply(this,arguments)}}()},3346:(e,t,n)=>{"use strict";n.d(t,{i:()=>o});var r=n(9740),a=n(6330),i=n(3496),o=function(){var e=(0,a.A)((function*(e,t){return(yield i.http.get("api/gateway/micro_app_standalone.launchpad.GetLaunchpadInfo/api/v1/micro_app_standalone/launchpad_info",(0,r.A)((0,r.A)({},t),{},{params:e}))).data}));return function(t,n){return e.apply(this,arguments)}}()},2824:(e,t,n)=>{"use strict";n.d(t,{k:()=>i});var r=n(6330),a=n(6730),i=function(){var e=(0,r.A)((function*(e,t){return(yield a.http.post("api/gateway/user_service.launchpad.CreateCollectionV2/api/v2/launchpad/collection",e,t)).data}));return function(t,n){return e.apply(this,arguments)}}()},2887:(e,t,n)=>{"use strict";n.d(t,{r:()=>a});var r=n(6730),a=(e,t)=>r.http.delete("api/gateway/user_service.launchpad.DeleteCollectionV2/api/v2/launchpad/collection/".concat(e),t)},7296:(e,t,n)=>{"use strict";n.d(t,{K:()=>o});var r=n(9740),a=n(6330),i=n(6730),o=function(){var e=(0,a.A)((function*(e,t){return(yield i.http.get("api/gateway/user_service.launchpad.ListCollectionV2/api/v2/launchpad/collection",(0,r.A)((0,r.A)({},t),{},{params:e}))).data}));return function(t,n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=eo-launchpad-quick-access.a82ceb9b.js.map
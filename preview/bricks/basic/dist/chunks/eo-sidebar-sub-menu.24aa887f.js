/*! For license information please see eo-sidebar-sub-menu.24aa887f.js.LICENSE.txt */
(self.webpackChunk_next_bricks_basic=self.webpackChunk_next_bricks_basic||[]).push([[1168,5628],{6106:(e,t,n)=>{"use strict";n.r(t),n.d(t,{EoSidebarSubMenu:()=>s,EoSidebarSubMenuComponent:()=>O});var r,i,a,o,c,u,s,l=n(3395),m=n(381),d=n(687),p=n(2604),f=n(8657),v=n.n(f),h=n(5366),g=n(4511),y=n(5062),b=(n(8161),n(7993)),x=n(7432),k=n(2779),w=n.n(k),E=(0,g.wrapBrick)("eo-icon"),S=(0,g.wrapBrick)("eo-menu"),Z=(0,g.wrapBrick)("eo-menu-group"),A=(0,g.wrapBrick)("eo-menu-item-sub-menu"),j=(0,g.wrapBrick)("eo-menu-item"),P=(0,g.wrapBrick)("eo-link"),{defineElement:N,property:T}=(0,h.createDecorators)();i=N("eo-sidebar-sub-menu",{styleTexts:[x.Z]}),a=T({attribute:!1});var z=new WeakMap;class I extends g.ReactNextElement{constructor(){super(...arguments),(0,l.Z)(this,z,{writable:!0,value:(c(this),o(this))})}get menu(){return(0,d.Z)(this,z)}set menu(e){(0,m.Z)(this,z,e)}render(){return v().createElement(O,{menu:this.menu})}}function O(e){var{menu:t}=e,n=(0,y.getHistory)(),[r,i]=(0,f.useState)(n.location),{pathname:a,search:o}=r,[c,u]=(0,f.useState)([]),[s,l]=(0,f.useState)([]),m=(0,f.useCallback)((()=>{var e,{selectedKeys:n,openedKeys:r}=(0,b.OZ)(null!==(e=null==t?void 0:t.menuItems)&&void 0!==e?e:[],a,o,"");u(n),l(r)}),[null==t?void 0:t.menuItems,a,o]);(0,f.useEffect)((()=>{var e=n.listen((e=>{i(e)}));return m(),e}),[n,m]);var d=(0,f.useCallback)((e=>{var t;return 16*((null===(t=e.key)||void 0===t||null===(t=t.split("."))||void 0===t?void 0:t.length)-1)}),[]);function p(e){return(0,b.cl)(e)?(e=>{var t;if((null===(t=e.items)||void 0===t?void 0:t.length)>0)return v().createElement(A,{className:"menu-sub-item",icon:e.icon,titleStyle:{paddingLeft:d(e)},collapsed:!s.includes(e.key)},v().createElement("span",{slot:"title"},e.title),e.items.map((e=>v().createElement(v().Fragment,{key:e.key},p(e)))))})(e):(0,b.ty)(e)?(e=>{var t;if((null===(t=e.items)||void 0===t?void 0:t.length)>0)return v().createElement(Z,null,v().createElement("span",{slot:"title"},e.title),e.items.map((e=>v().createElement(v().Fragment,{key:e.key},p(e)))))})(e):(e=>v().createElement(j,{className:"menu-item",style:{paddingLeft:d(e)||16},icon:e.icon,active:!!e.key&&c.includes(e.key)},v().createElement(P,{className:"menu-item-link",url:e.to,href:e.href,title:e.text,target:e.target},v().createElement("span",{className:w()("menu-item-text",{"item-has-icon":e.icon})},e.text))))(e)}return v().createElement(S,{className:"menu-container",mode:"vertical"},(null==t?void 0:t.title)&&v().createElement("div",{className:"header"},(null==t?void 0:t.icon)&&v().createElement(E,null==t?void 0:t.icon),v().createElement("span",{className:"title"},null==t?void 0:t.title)),v().createElement("div",{className:"content"},null==t?void 0:t.menuItems.map((e=>v().createElement(v().Fragment,{key:e.key},p(e))))))}u=I,({e:[o,c],c:[s,r]}=(0,p.Z)(u,[[a,1,"menu"]],[i],0,void 0,g.ReactNextElement)),r()},2779:(e,t)=>{var n;!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)){if(n.length){var o=i.apply(null,n);o&&e.push(o)}}else if("object"===a){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var c in n)r.call(n,c)&&n[c]&&e.push(c)}}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(n=function(){return i}.apply(t,[]))||(e.exports=n)}()},7432:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(9601),i=n.n(r),a=n(2609),o=n.n(a)()(i());o.push([e.id,":host{display:block}:host([hidden]){display:none}.menu-container{box-sizing:border-box;background:var(--sidebar-bg);border:1px solid var(--stroke-color-default);border-width:0 1px 0 0;border-radius:0px;padding:20px 0px;height:100%}.menu-container .header{display:flex;gap:10px;align-items:center;font-size:16px;padding:0 24px 16px 24px;line-height:26px;color:var(--color-header-text)}.menu-container .header .title{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;word-wrap:break-word}.menu-container .content{padding:0 12px}.menu-container .menu-item,\n  .menu-container .menu-sub-item::part(sub-menu-item-title){margin:0;padding-right:16px;height:40px;line-height:40px;border-radius:4px;margin-bottom:4px}.menu-container .menu-item-link{width:100%;color:var(--color-secondary-text)}.menu-container .menu-item-text,\n  .menu-container .menu-group-text,\n  .menu-container .menu-item-link{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.menu-container .menu-item-text{display:block;box-sizing:border-box;color:var(--antd-text-color)}.menu-container .menu-item:hover{background:var(--sub-menu-brick-item-hover-bg);color:var(--antd-link-color)}.menu-container .menu-item:hover .menu-item-text{color:var(--antd-link-color)}.menu-container .menu-sub-item::part(sub-menu-item-title):hover{color:var(--antd-link-color)}.menu-container .menu-item-text.item-has-icon{margin-left:10px}.menu-container .menu-item[active]{background-color:var(--app-submenu-active-bg)}.menu-container .menu-item[active] .menu-item-text{color:var(--antd-link-color)}",""]);const c=o.toString()},2609:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,i,a){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(r)for(var c=0;c<this.length;c++){var u=this[c][0];null!=u&&(o[u]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&o[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),t.push(l))}},t}},9601:e=>{"use strict";e.exports=function(e){return e[1]}},2604:(e,t,n)=>{"use strict";n.d(t,{Z:()=>v});var r=n(6522),i=n(1815);function a(e,t){return function(n){(function(e,t){if(e.v)throw new Error("attempted to call addInitializer after decoration was finished")})(t),u(n,"An initializer"),e.push(n)}}function o(e,t){if(!e(t))throw new TypeError("Attempted to access private element on non-instance")}function c(e,t,n,r,i,c,u,s,l,m){var d;switch(c){case 1:d="accessor";break;case 2:d="method";break;case 3:d="getter";break;case 4:d="setter";break;default:d="field"}var p,f,v={kind:d,name:s?"#"+n:n,static:u,private:s},h={v:!1};if(0!==c&&(v.addInitializer=a(i,h)),s||0!==c&&2!==c)if(2===c)p=function(e){return o(m,e),r.value};else{var g=0===c||1===c;(g||3===c)&&(p=s?function(e){return o(m,e),r.get.call(e)}:function(e){return r.get.call(e)}),(g||4===c)&&(f=s?function(e,t){o(m,e),r.set.call(e,t)}:function(e,t){r.set.call(e,t)})}else p=function(e){return e[n]},0===c&&(f=function(e,t){e[n]=t});var y=s?m.bind():function(e){return n in e};v.access=p&&f?{get:p,set:f,has:y}:p?{get:p,has:y}:{set:f,has:y};try{return e.call(t,l,v)}finally{h.v=!0}}function u(e,t){if("function"!=typeof e)throw new TypeError(t+" must be a function")}function s(e,t){var n=(0,r.Z)(t);if(1===e){if("object"!==n||null===t)throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0");void 0!==t.get&&u(t.get,"accessor.get"),void 0!==t.set&&u(t.set,"accessor.set"),void 0!==t.init&&u(t.init,"accessor.init")}else if("function"!==n)throw new TypeError((0===e?"field":5===e?"class":"method")+" decorators must return a function or void 0")}function l(e){return function(){return e(this)}}function m(e){return function(t){e(this,t)}}function d(e,t,n,r,i,a,o,u,d,p){var f,v,h,g,y,b,x=n[0];r||Array.isArray(x)||(x=[x]),u?f=0===a||1===a?{get:l(n[3]),set:m(n[4])}:3===a?{get:n[3]}:4===a?{set:n[3]}:{value:n[3]}:0!==a&&(f=Object.getOwnPropertyDescriptor(t,i)),1===a?h={get:f.get,set:f.set}:2===a?h=f.value:3===a?h=f.get:4===a&&(h=f.set);for(var k=r?2:1,w=x.length-1;w>=0;w-=k){var E;void 0!==(g=c(x[w],r?x[w-1]:void 0,i,f,d,a,o,u,h,p))&&(s(a,g),0===a?E=g:1===a?(E=g.init,y=g.get||h.get,b=g.set||h.set,h={get:y,set:b}):h=g,void 0!==E&&(void 0===v?v=E:"function"==typeof v?v=[v,E]:v.push(E)))}if(0===a||1===a){if(void 0===v)v=function(e,t){return t};else if("function"!=typeof v){var S=v;v=function(e,t){for(var n=t,r=S.length-1;r>=0;r--)n=S[r].call(e,n);return n}}else{var Z=v;v=function(e,t){return Z.call(e,t)}}e.push(v)}0!==a&&(1===a?(f.get=h.get,f.set=h.set):2===a?f.value=h:3===a?f.get=h:4===a&&(f.set=h),u?1===a?(e.push((function(e,t){return h.get.call(e,t)})),e.push((function(e,t){return h.set.call(e,t)}))):2===a?e.push(h):e.push((function(e,t){return h.call(e,t)})):Object.defineProperty(t,i,f))}function p(e,t,n){for(var r,a,o,c=[],u=new Map,s=new Map,l=0;l<t.length;l++){var m=t[l];if(Array.isArray(m)){var p,v,h=m[1],g=m[2],y=m.length>3,b=16&h,x=!!(8&h),k=n;if(h&=7,x?(p=e,0!==h&&(v=a=a||[]),y&&!o&&(o=function(t){return(0,i.Z)(t)===e}),k=o):(p=e.prototype,0!==h&&(v=r=r||[])),0!==h&&!y){var w=x?s:u,E=w.get(g)||0;if(!0===E||3===E&&4!==h||4===E&&3!==h)throw new Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: "+g);w.set(g,!(!E&&h>2)||h)}d(c,p,m,b,g,h,x,y,v,k)}}return f(c,r),f(c,a),c}function f(e,t){t&&e.push((function(e){for(var n=0;n<t.length;n++)t[n].call(e);return e}))}function v(e,t,n,r,i){return{e:p(e,t,i),get c(){return function(e,t,n){if(t.length){for(var r=[],i=e,o=e.name,c=n?2:1,u=t.length-1;u>=0;u-=c){var l={v:!1};try{var m=t[u].call(n?t[u-1]:void 0,i,{kind:"class",name:o,addInitializer:a(r,l)})}finally{l.v=!0}void 0!==m&&(s(5,m),i=m)}return[i,function(){for(var e=0;e<r.length;e++)r[e].call(i)}]}}(e,n,r)}}}},1815:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(6522);function i(e){if(Object(e)!==e)throw TypeError("right-hand side of 'in' should be an object, got "+(null!==e?(0,r.Z)(e):"null"));return e}},5863:(e,t,n)=>{"use strict";function r(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}n.d(t,{Z:()=>r})},175:(e,t,n)=>{"use strict";function r(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}n.d(t,{Z:()=>r})},687:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(175);function i(e,t){return function(e,t){return t.get?t.get.call(e):t.value}(e,(0,r.Z)(e,t,"get"))}},3395:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(5863);function i(e,t,n){(0,r.Z)(e,t),t.set(e,n)}},381:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(175);function i(e,t,n){return function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}(e,(0,r.Z)(e,t,"set"),n),n}},6522:(e,t,n)=>{"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}n.d(t,{Z:()=>r})},7993:(e,t,n)=>{"use strict";n.d(t,{OZ:()=>c,cl:()=>o,ty:()=>a});var r=n(8353),i=n(5062);function a(e){return"group"===e.type}function o(e,t){return Boolean("subMenu"===e.type||t&&"group"===e.type)}function c(e,t,n,s){var l=[],m=[],d=0;return e.forEach((e=>{if(e.key=""===s?"".concat(d):"".concat(s,".").concat(d),a(e)||o(e)){var p=c(e.items,t,n,e.key);l.push(...p.selectedKeys),(p.selectedKeys.length||e.defaultExpanded)&&m.push(e.key),m.push(...p.openedKeys)}else(function(e,t,n){if(!e.to)return!1;var a="object"==typeof e.to?e.to:(0,r.parsePath)(e.to),o=a.pathname.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),c=!!(0,i.matchPath)(t,{path:o,exact:e.exact});if(!c&&Array.isArray(e.activeIncludes))for(var s of e.activeIncludes){var l,m=void 0,d=s.includes("?");if(d&&(m=(0,r.parsePath)(s)),(c=!!(0,i.matchPath)(t,{path:d?m.pathname:s,exact:!0}))&&null!==(l=m)&&void 0!==l&&l.search&&(c=u(n,m.search)),c)break}if(c&&Array.isArray(e.activeExcludes))for(var p of e.activeExcludes)if(!(c=!(0,i.matchPath)(t,{path:p,exact:!0})))break;return c&&e.activeMatchSearch&&(c=u(n,a.search)),c})(e,t,n)&&l.push(String(e.key));d+=1})),l.length&&""!==s&&m.push(s),{selectedKeys:l,openedKeys:m}}function u(e,t){var n=new URLSearchParams(e),r=new URLSearchParams(t);for(var[i,a]of r.entries())if(n.get(i)!==a)return!1;return!0}}}]);
//# sourceMappingURL=eo-sidebar-sub-menu.24aa887f.js.map
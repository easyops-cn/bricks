"use strict";(self.webpackChunk_next_bricks_data_view=self.webpackChunk_next_bricks_data_view||[]).push([[4537,5628],{5912:(e,t,r)=>{r.r(t),r.d(t,{GraphLayoutGrid:()=>f,GraphLayoutGridComponent:()=>C});var a,n,o,i,l,c,s,u,p,g,b,h,f,d=r(3395),v=r(381),y=r(687),w=r(2604),m=r(8657),x=r.n(m),Z=r(4511),k=r(5366),z=r(1043),E=r(4177),{defineElement:S,property:T}=(0,k.createDecorators)(),N=(0,Z.wrapBrick)("data-view.graph-node"),j=(0,Z.wrapBrick)("data-view.graph-text");n=S("data-view.graph-layout-grid",{styleTexts:[z.Z,E.Z]}),o=T({type:Number}),l=T({type:Number}),s=T({type:Boolean}),p=T({attribute:!1});var A=new WeakMap,R=new WeakMap,_=new WeakMap,M=new WeakMap;class Y extends Z.ReactNextElement{constructor(){super(...arguments),(0,d.Z)(this,A,{writable:!0,value:(b(this),i(this))}),(0,d.Z)(this,R,{writable:!0,value:c(this)}),(0,d.Z)(this,_,{writable:!0,value:u(this)}),(0,d.Z)(this,M,{writable:!0,value:g(this)})}get columns(){return(0,y.Z)(this,A)}set columns(e){(0,v.Z)(this,A,e)}get rows(){return(0,y.Z)(this,R)}set rows(e){(0,v.Z)(this,R,e)}get isReverse(){return(0,y.Z)(this,_)}set isReverse(e){(0,v.Z)(this,_,e)}get dataSource(){return(0,y.Z)(this,M)}set dataSource(e){(0,v.Z)(this,M,e)}render(){return x().createElement(C,{rows:this.rows,columns:this.columns,isReverse:this.isReverse,dataSource:this.dataSource})}}function C(e){var{rows:t,columns:r,isReverse:a,dataSource:n}=e,o=(0,m.useMemo)((()=>{for(var e=[],o=1;o<=t;o++)for(var i=1;i<=r;i++)if(a&&(o%2==1&&i%2==1||o%2==0&&i%2==0)||!a&&(o%2==1&&i%2==0||o%2==0&&i%2==1)){var l=null==n?void 0:n[e.length];e.push(x().createElement("div",{key:"".concat(o,"-").concat(i),className:"item",style:{gridArea:"".concat(o," / ").concat(i%r||r," /").concat(o," / ").concat(i%r||r)}},l&&x().createElement(x().Fragment,null,x().createElement(j,{text:l.text,value:l.value,className:"text"}),x().createElement(N,{url:l.url,className:"node"}))))}return e}),[t,r,a,n]);return x().createElement("div",{className:"container",style:{gridTemplateColumns:"repeat(".concat(r,", 1fr)")}},o)}h=Y,({e:[i,c,u,g,b],c:[f,a]}=(0,w.Z)(h,[[o,1,"columns"],[l,1,"rows"],[s,1,"isReverse"],[p,1,"dataSource"]],[n],0,void 0,Z.ReactNextElement)),a()},1043:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(9601),n=r.n(a),o=r(2609),i=r.n(o)()(n());i.push([e.id,":host{--palette-rgba-white-1:rgba(255,255,255,10%);--palette-rgba-white-2:rgba(255,255,255,20%);--palette-rgba-white-3:rgba(255,255,255,30%);--palette-rgba-white-4:rgba(255,255,255,40%);--palette-rgba-white-5:rgba(255,255,255,50%);--palette-rgba-white-6:rgba(255,255,255,60%);--palette-rgba-white-7:rgba(255,255,255,70%);--palette-rgba-white-8:rgba(255,255,255,80%);--palette-rgba-white-9:rgba(255,255,255,90%);--palette-rgba-white-10:rgba(255,255,255,100%);--palette-rgba-gray-1:rgba(0,0,0,10%);--palette-rgba-gray-2:rgba(0,0,0,20%);--palette-rgba-gray-3:rgba(0,0,0,30%);--palette-rgba-gray-4:rgba(0,0,0,40%);--palette-rgba-gray-5:rgba(0,0,0,50%);--palette-rgba-gray-6:rgba(0,0,0,60%);--palette-rgba-gray-7:rgba(0,0,0,70%);--palette-rgba-gray-8:rgba(0,0,0,80%);--palette-rgba-gray-9:rgba(0,0,0,90%);--palette-rgba-gray-10:rgba(0,0,0,100%);--palette-rgba-blue-gray-2:rgba(101,106,134,20%);--palette-rgba-blue-gray-3:rgba(101,106,134,30%);--palette-rgba-blue-gray-8:rgba(101,106,134,80%);--palette-tech-blue-4-channel:67,127,255;--palette-tech-blue-4:rgb(var(--palette-tech-blue-4-channel));--palette-tech-blue-6-channel:51,102,255;--palette-tech-blue-6:rgb(var(--palette-tech-blue-6-channel));--palette-tech-blue-8-channel:40,69,159;--palette-tech-blue-8:rgb(var(--palette-tech-blue-8-channel));--palette-sea-green-4-channel:131,245,225;--palette-sea-green-4:rgb(var(--palette-sea-green-4-channel));--palette-green-6-channel:81,235,73;--palette-green-6:rgb(var(--palette-green-6-channel));--palette-green-2:rgba(var(--palette-green-6-channel),20%);--palette-lotus-pink-7-channel:204,0,102;--palette-lotus-pink-7:rgb(var(--palette-lotus-pink-7-channel));--palette-red-6-channel:242,39,39;--palette-red-6:rgb(var(--palette-red-6-channel));--palette-red-2:rgba(var(--palette-red-6-channel),20%);--color-fill-global-bg:#0f1014;--color-fill-bg-container-1:var(--palette-rgba-white-1);--color-fill-bg-container-2:var(--palette-rgba-blue-gray-2);--color-fill-bg-container-3:var(--palette-rgba-blue-gray-8);--color-fill-bg-base-1:var(--palette-rgba-blue-gray-2);--color-fill-bg-base-2:rgba(15,16,20,0%);--color-fill-bg-base-3:rgba(0,0,0,20%);--color-fill-bg-base-4:rgba(40,46,58,100%);--color-fill-bg-base-5:rgba(19,25,47,80%);--color-fill-bg-base-6:var(--palette-rgba-blue-gray-3);--color-brand:var(--palette-tech-blue-6);--color-brand-hover:var(--palette-tech-blue-4);--color-brand-active:var(--palette-tech-blue-8);--color-contrast-1:var(--palette-sea-green-4);--color-error:var(--palette-red-6);--color-error-bg:var(--palette-red-2);--color-success:var(--palette-green-6);--color-success-bg:var(--palette-green-2);--color-header-text-big:var(--palette-rgba-white-10);--color-header-text:var(--palette-rgba-white-10);--color-normal-text:var(--palette-rgba-white-10);--color-strong-text:var(--palette-rgba-white-9);--color-auxiliary-text:var(--palette-rgba-white-8);--color-secondary-text:var(--palette-rgba-white-6);--color-disabled-text:var(--palette-rgba-white-4);--color-border-divider-line:var(--palette-rgba-white-1);--color-text-divider-line-1:var(--palette-rgba-white-2);--color-text-divider-line-2:var(--palette-rgba-white-2);--small-border-radius:2px;--medius-border-radius:5px;--larger-border-radius:12px;--container-border-radius:9999px;--no-border-radius:0px;--mask-bg:var(--palette-rgba-gray-7);--title-font-size-larger:30px;--title-font-size-strong:22px;--title-font-size:18px;--normal-font-size:14px;--auxiliary-font-size:16px;--auxiliary-font-size-small:12px;--overview-data-font-size:34px;--statistics-data-font-size:28px;--normal-data-font-size-larger:20px;--normal-data-font-size:16px;--chart-legend-font-size:12px;--chart-tooltips-font-size-1:12px;--chart-tooltips-font-size-2:12px;--chart-axis-x-font-size:12px;--chart-axis-x-font-size-larger:14px;--chart-axis-y-font-size:12px;--chart-axis-y-font-size-larger:14px;--font-weight-600:600;--font-weight-500:500;--font-weight-400:400;--text-shadow:0px 1px 4px #2863ee;--border-width-base:1px;--border-width-double-base:2px;--border-width-tribble-base:3px;--punctate-width-base:1px;--paragraph-width-base:1px;--button-text-color:#40d0db}",""]);const l=i.toString()},4177:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(9601),n=r.n(a),o=r(2609),i=r.n(o)()(n());i.push([e.id,"*{width:100%;height:100%}.container{display:grid}.item{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:10px}.node{animation:animateNode 0.8s linear 0.4s forwards;transform:translateY(30px) scale(1.1)}.text{animation:animateText 0.4s cubic-bezier(0.215,0.61,0.355,1) 1s forwards;opacity:0}@keyframes animateNode{0%{transform:translateY(30px) scale(1.1)}50%{transform:translateY(0px) scale(1.1)}100%{transform:translateY(0px) scale(1)}}@keyframes animateText{0%{transform:translateY(22px);opacity:0}100%{transform:translateY(0);opacity:1}}",""]);const l=i.toString()},2609:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",a=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),a&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),a&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,a,n,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(a)for(var l=0;l<this.length;l++){var c=this[l][0];null!=c&&(i[c]=!0)}for(var s=0;s<e.length;s++){var u=[].concat(e[s]);a&&i[u[0]]||(void 0!==o&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=o),r&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=r):u[2]=r),n&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=n):u[4]="".concat(n)),t.push(u))}},t}},9601:e=>{e.exports=function(e){return e[1]}},2604:(e,t,r)=>{r.d(t,{Z:()=>f});var a=r(6522),n=r(1815);function o(e,t){return function(r){(function(e,t){if(e.v)throw new Error("attempted to call addInitializer after decoration was finished")})(t),c(r,"An initializer"),e.push(r)}}function i(e,t){if(!e(t))throw new TypeError("Attempted to access private element on non-instance")}function l(e,t,r,a,n,l,c,s,u,p){var g;switch(l){case 1:g="accessor";break;case 2:g="method";break;case 3:g="getter";break;case 4:g="setter";break;default:g="field"}var b,h,f={kind:g,name:s?"#"+r:r,static:c,private:s},d={v:!1};if(0!==l&&(f.addInitializer=o(n,d)),s||0!==l&&2!==l)if(2===l)b=function(e){return i(p,e),a.value};else{var v=0===l||1===l;(v||3===l)&&(b=s?function(e){return i(p,e),a.get.call(e)}:function(e){return a.get.call(e)}),(v||4===l)&&(h=s?function(e,t){i(p,e),a.set.call(e,t)}:function(e,t){a.set.call(e,t)})}else b=function(e){return e[r]},0===l&&(h=function(e,t){e[r]=t});var y=s?p.bind():function(e){return r in e};f.access=b&&h?{get:b,set:h,has:y}:b?{get:b,has:y}:{set:h,has:y};try{return e.call(t,u,f)}finally{d.v=!0}}function c(e,t){if("function"!=typeof e)throw new TypeError(t+" must be a function")}function s(e,t){var r=(0,a.Z)(t);if(1===e){if("object"!==r||null===t)throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0");void 0!==t.get&&c(t.get,"accessor.get"),void 0!==t.set&&c(t.set,"accessor.set"),void 0!==t.init&&c(t.init,"accessor.init")}else if("function"!==r)throw new TypeError((0===e?"field":5===e?"class":"method")+" decorators must return a function or void 0")}function u(e){return function(){return e(this)}}function p(e){return function(t){e(this,t)}}function g(e,t,r,a,n,o,i,c,g,b){var h,f,d,v,y,w,m=r[0];a||Array.isArray(m)||(m=[m]),c?h=0===o||1===o?{get:u(r[3]),set:p(r[4])}:3===o?{get:r[3]}:4===o?{set:r[3]}:{value:r[3]}:0!==o&&(h=Object.getOwnPropertyDescriptor(t,n)),1===o?d={get:h.get,set:h.set}:2===o?d=h.value:3===o?d=h.get:4===o&&(d=h.set);for(var x=a?2:1,Z=m.length-1;Z>=0;Z-=x){var k;void 0!==(v=l(m[Z],a?m[Z-1]:void 0,n,h,g,o,i,c,d,b))&&(s(o,v),0===o?k=v:1===o?(k=v.init,y=v.get||d.get,w=v.set||d.set,d={get:y,set:w}):d=v,void 0!==k&&(void 0===f?f=k:"function"==typeof f?f=[f,k]:f.push(k)))}if(0===o||1===o){if(void 0===f)f=function(e,t){return t};else if("function"!=typeof f){var z=f;f=function(e,t){for(var r=t,a=z.length-1;a>=0;a--)r=z[a].call(e,r);return r}}else{var E=f;f=function(e,t){return E.call(e,t)}}e.push(f)}0!==o&&(1===o?(h.get=d.get,h.set=d.set):2===o?h.value=d:3===o?h.get=d:4===o&&(h.set=d),c?1===o?(e.push((function(e,t){return d.get.call(e,t)})),e.push((function(e,t){return d.set.call(e,t)}))):2===o?e.push(d):e.push((function(e,t){return d.call(e,t)})):Object.defineProperty(t,n,h))}function b(e,t,r){for(var a,o,i,l=[],c=new Map,s=new Map,u=0;u<t.length;u++){var p=t[u];if(Array.isArray(p)){var b,f,d=p[1],v=p[2],y=p.length>3,w=16&d,m=!!(8&d),x=r;if(d&=7,m?(b=e,0!==d&&(f=o=o||[]),y&&!i&&(i=function(t){return(0,n.Z)(t)===e}),x=i):(b=e.prototype,0!==d&&(f=a=a||[])),0!==d&&!y){var Z=m?s:c,k=Z.get(v)||0;if(!0===k||3===k&&4!==d||4===k&&3!==d)throw new Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: "+v);Z.set(v,!(!k&&d>2)||d)}g(l,b,p,w,v,d,m,y,f,x)}}return h(l,a),h(l,o),l}function h(e,t){t&&e.push((function(e){for(var r=0;r<t.length;r++)t[r].call(e);return e}))}function f(e,t,r,a,n){return{e:b(e,t,n),get c(){return function(e,t,r){if(t.length){for(var a=[],n=e,i=e.name,l=r?2:1,c=t.length-1;c>=0;c-=l){var u={v:!1};try{var p=t[c].call(r?t[c-1]:void 0,n,{kind:"class",name:i,addInitializer:o(a,u)})}finally{u.v=!0}void 0!==p&&(s(5,p),n=p)}return[n,function(){for(var e=0;e<a.length;e++)a[e].call(n)}]}}(e,r,a)}}}},1815:(e,t,r)=>{r.d(t,{Z:()=>n});var a=r(6522);function n(e){if(Object(e)!==e)throw TypeError("right-hand side of 'in' should be an object, got "+(null!==e?(0,a.Z)(e):"null"));return e}},5863:(e,t,r)=>{function a(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}r.d(t,{Z:()=>a})},175:(e,t,r)=>{function a(e,t,r){if(!t.has(e))throw new TypeError("attempted to "+r+" private field on non-instance");return t.get(e)}r.d(t,{Z:()=>a})},687:(e,t,r)=>{r.d(t,{Z:()=>n});var a=r(175);function n(e,t){return function(e,t){return t.get?t.get.call(e):t.value}(e,(0,a.Z)(e,t,"get"))}},3395:(e,t,r)=>{r.d(t,{Z:()=>n});var a=r(5863);function n(e,t,r){(0,a.Z)(e,t),t.set(e,r)}},381:(e,t,r)=>{r.d(t,{Z:()=>n});var a=r(175);function n(e,t,r){return function(e,t,r){if(t.set)t.set.call(e,r);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=r}}(e,(0,a.Z)(e,t,"set"),r),r}},6522:(e,t,r)=>{function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}r.d(t,{Z:()=>a})}}]);
//# sourceMappingURL=graph-layout-grid.ae9fa2db.js.map
"use strict";(globalThis.webpackChunk_next_bricks_data_view=globalThis.webpackChunk_next_bricks_data_view||[]).push([[5737,2052],{56893:(e,t,r)=>{r.r(t),r.d(t,{GraphLayoutGrid:()=>j,GraphLayoutGridComponent:()=>O});var a,n=r(70918),o=r(86121),i=r(70829),l=r(62740),s=r(18769),c=r.n(s),p=r(24295),u=r(10300),g=r(79935),b=r(74536);let h,d,f,v,m,y,w,x,A;const{defineElement:z,property:k}=(0,u.createDecorators)(),S=(0,p.wrapBrick)("data-view.graph-node"),E=(0,p.wrapBrick)("data-view.graph-text");let j;var T=new WeakMap,N=new WeakMap,R=new WeakMap,_=new WeakMap;class $ extends p.ReactNextElement{constructor(){super(...arguments),(0,n.A)(this,T,d(this)),(0,n.A)(this,N,(f(this),v(this))),(0,n.A)(this,R,(m(this),y(this))),(0,n.A)(this,_,(w(this),x(this))),A(this)}get columns(){return(0,i.A)(T,this)}set columns(e){(0,o.A)(T,this,e)}get rows(){return(0,i.A)(N,this)}set rows(e){(0,o.A)(N,this,e)}get isReverse(){return(0,i.A)(R,this)}set isReverse(e){(0,o.A)(R,this,e)}get dataSource(){return(0,i.A)(_,this)}set dataSource(e){(0,o.A)(_,this,e)}render(){return c().createElement(O,{rows:this.rows,columns:this.columns,isReverse:this.isReverse,dataSource:this.dataSource})}}function O(e){const{rows:t,columns:r,isReverse:a,dataSource:n}=e,o=(0,s.useMemo)((()=>{const e=[];for(let o=1;o<=t;o++)for(let t=1;t<=r;t++)if(a&&(o%2==1&&t%2==1||o%2==0&&t%2==0)||!a&&(o%2==1&&t%2==0||o%2==0&&t%2==1)){const a=null==n?void 0:n[e.length];e.push(c().createElement("div",{key:`${o}-${t}`,className:"item",style:{gridArea:`${o} / ${t%r||r} /${o} / ${t%r||r}`}},a&&c().createElement(c().Fragment,null,c().createElement(E,{text:a.text,value:a.value,className:"text"}),c().createElement(S,{url:a.url,className:"node"}))))}return e}),[t,r,a,n]);return c().createElement("div",{className:"container",style:{gridTemplateColumns:`repeat(${r}, 1fr)`}},o)}a=$,({e:[d,f,v,m,y,w,x,A],c:[j,h]}=(0,l.A)(a,[z("data-view.graph-layout-grid",{styleTexts:[g.A,b.A]})],[[k({type:Number}),1,"columns"],[k({type:Number}),1,"rows"],[k({type:Boolean}),1,"isReverse"],[k({attribute:!1}),1,"dataSource"]],0,void 0,p.ReactNextElement)),h()},79935:(e,t,r)=>{r.d(t,{A:()=>l});var a=r(36758),n=r.n(a),o=r(40935),i=r.n(o)()(n());i.push([e.id,":host{--palette-rgba-white-1:rgba(255,255,255,10%);--palette-rgba-white-2:rgba(255,255,255,20%);--palette-rgba-white-3:rgba(255,255,255,30%);--palette-rgba-white-4:rgba(255,255,255,40%);--palette-rgba-white-5:rgba(255,255,255,50%);--palette-rgba-white-6:rgba(255,255,255,60%);--palette-rgba-white-7:rgba(255,255,255,70%);--palette-rgba-white-8:rgba(255,255,255,80%);--palette-rgba-white-9:rgba(255,255,255,90%);--palette-rgba-white-10:rgba(255,255,255,100%);--palette-rgba-gray-1:rgba(0,0,0,10%);--palette-rgba-gray-2:rgba(0,0,0,20%);--palette-rgba-gray-3:rgba(0,0,0,30%);--palette-rgba-gray-4:rgba(0,0,0,40%);--palette-rgba-gray-5:rgba(0,0,0,50%);--palette-rgba-gray-6:rgba(0,0,0,60%);--palette-rgba-gray-7:rgba(0,0,0,70%);--palette-rgba-gray-8:rgba(0,0,0,80%);--palette-rgba-gray-9:rgba(0,0,0,90%);--palette-rgba-gray-10:rgba(0,0,0,100%);--palette-rgba-blue-gray-2:rgba(101,106,134,20%);--palette-rgba-blue-gray-3:rgba(101,106,134,30%);--palette-rgba-blue-gray-8:rgba(101,106,134,80%);--palette-tech-blue-4-channel:67,127,255;--palette-tech-blue-4:rgb(var(--palette-tech-blue-4-channel));--palette-tech-blue-6-channel:51,102,255;--palette-tech-blue-6:rgb(var(--palette-tech-blue-6-channel));--palette-tech-blue-8-channel:40,69,159;--palette-tech-blue-8:rgb(var(--palette-tech-blue-8-channel));--palette-sea-green-4-channel:131,245,225;--palette-sea-green-4:rgb(var(--palette-sea-green-4-channel));--palette-green-6-channel:81,235,73;--palette-green-6:rgb(var(--palette-green-6-channel));--palette-green-2:rgba(var(--palette-green-6-channel),20%);--palette-lotus-pink-7-channel:204,0,102;--palette-lotus-pink-7:rgb(var(--palette-lotus-pink-7-channel));--palette-red-6-channel:242,39,39;--palette-red-6:rgb(var(--palette-red-6-channel));--palette-red-2:rgba(var(--palette-red-6-channel),20%);--color-fill-global-bg:#0f1014;--color-fill-bg-container-1:var(--palette-rgba-white-1);--color-fill-bg-container-2:var(--palette-rgba-blue-gray-2);--color-fill-bg-container-3:var(--palette-rgba-blue-gray-8);--color-fill-bg-base-1:var(--palette-rgba-blue-gray-2);--color-fill-bg-base-2:rgba(15,16,20,0%);--color-fill-bg-base-3:rgba(0,0,0,20%);--color-fill-bg-base-4:rgba(40,46,58,100%);--color-fill-bg-base-5:rgba(19,25,47,80%);--color-fill-bg-base-6:var(--palette-rgba-blue-gray-3);--color-brand:var(--palette-tech-blue-6);--color-brand-hover:var(--palette-tech-blue-4);--color-brand-active:var(--palette-tech-blue-8);--color-contrast-1:var(--palette-sea-green-4);--color-error:var(--palette-red-6);--color-error-bg:var(--palette-red-2);--color-success:var(--palette-green-6);--color-success-bg:var(--palette-green-2);--color-header-text-big:var(--palette-rgba-white-10);--color-header-text:var(--palette-rgba-white-10);--color-normal-text:var(--palette-rgba-white-10);--color-strong-text:var(--palette-rgba-white-9);--color-auxiliary-text:var(--palette-rgba-white-8);--color-secondary-text:var(--palette-rgba-white-6);--color-disabled-text:var(--palette-rgba-white-4);--color-border-divider-line:var(--palette-rgba-white-1);--color-text-divider-line-1:var(--palette-rgba-white-2);--color-text-divider-line-2:var(--palette-rgba-white-2);--small-border-radius:2px;--medius-border-radius:5px;--larger-border-radius:12px;--container-border-radius:9999px;--no-border-radius:0px;--mask-bg:var(--palette-rgba-gray-7);--title-font-size-larger:30px;--title-font-size-strong:22px;--title-font-size:18px;--normal-font-size:14px;--auxiliary-font-size:16px;--auxiliary-font-size-small:12px;--overview-data-font-size:34px;--statistics-data-font-size:28px;--normal-data-font-size-larger:20px;--normal-data-font-size:16px;--chart-legend-font-size:12px;--chart-tooltips-font-size-1:12px;--chart-tooltips-font-size-2:12px;--chart-axis-x-font-size:12px;--chart-axis-x-font-size-larger:14px;--chart-axis-y-font-size:12px;--chart-axis-y-font-size-larger:14px;--font-weight-600:600;--font-weight-500:500;--font-weight-400:400;--text-shadow:0px 1px 4px #2863ee;--border-width-base:1px;--border-width-double-base:2px;--border-width-tribble-base:3px;--punctate-width-base:1px;--paragraph-width-base:1px;--button-text-color:#40d0db}",""]);const l=i.toString()},74536:(e,t,r)=>{r.d(t,{A:()=>l});var a=r(36758),n=r.n(a),o=r(40935),i=r.n(o)()(n());i.push([e.id,"*{width:100%;height:100%}.container{display:grid}.item{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:10px}.node{animation:animateNode 0.8s linear 0.4s forwards;transform:translateY(30px) scale(1.1)}.text{animation:animateText 0.4s cubic-bezier(0.215,0.61,0.355,1) 1s forwards;opacity:0}@keyframes animateNode{0%{transform:translateY(30px) scale(1.1)}50%{transform:translateY(0px) scale(1.1)}100%{transform:translateY(0px) scale(1)}}@keyframes animateText{0%{transform:translateY(22px);opacity:0}100%{transform:translateY(0);opacity:1}}",""]);const l=i.toString()},40935:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",a=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),a&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),a&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,a,n,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(a)for(var l=0;l<this.length;l++){var s=this[l][0];null!=s&&(i[s]=!0)}for(var c=0;c<e.length;c++){var p=[].concat(e[c]);a&&i[p[0]]||(void 0!==o&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=o),r&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=r):p[2]=r),n&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=n):p[4]="".concat(n)),t.push(p))}},t}},36758:e=>{e.exports=function(e){return e[1]}},62740:(e,t,r)=>{r.d(t,{A:()=>l});var a=r(17545),n=r(26902);function o(e,t,r){"symbol"==(0,a.A)(t)&&(t=(t=t.description)?"["+t+"]":"");try{Object.defineProperty(e,"name",{configurable:!0,value:r?r+" "+t:t})}catch(e){}return e}var i=r(11369);function l(e,t,r,l,s,c){var p,u,g,b,h,d,f,v=Symbol.metadata||Symbol.for("Symbol.metadata"),m=Object.defineProperty,y=Object.create,w=[y(null),y(null)],x=t.length;function A(t,r,a){return function(n,o){r&&(o=n,n=e);for(var i=0;i<t.length;i++)o=t[i].apply(n,a?[o]:[]);return a?o:n}}function z(e,t,r,a){if("function"!=typeof e&&(a||void 0!==e))throw new TypeError(t+" must "+(r||"be")+" a function"+(a?"":" or undefined"));return e}function k(e,t,r,n,i,l,s,c,g,b,h){function d(e){if(!h(e))throw new TypeError("Attempted to access private element on non-instance")}var f=[].concat(t[0]),v=t[3],y=!s,x=1===i,k=3===i,S=4===i,E=2===i;function j(t,r,a){return function(n,o){return r&&(o=n,n=e),a&&a(n),T[t].call(n,o)}}if(!y){var T={},N=[],R=k?"get":S||x?"set":"value";if(g?(b||x?T={get:o((function(){return v(this)}),n,"get"),set:function(e){t[4](this,e)}}:T[R]=v,b||o(T[R],n,E?"":R)):b||(T=Object.getOwnPropertyDescriptor(e,n)),!b&&!g){if((u=w[+c][n])&&7!=(u^i))throw Error("Decorating two elements with the same name ("+T[R].name+") is not supported yet");w[+c][n]=i<3?1:i}}for(var _=e,$=f.length-1;$>=0;$-=r?2:1){var O=z(f[$],"A decorator","be",!0),P=r?f[$-1]:void 0,Y={},C={kind:["field","accessor","method","getter","setter","class"][i],name:n,metadata:p,addInitializer:function(e,t){if(e.v)throw Error("attempted to call addInitializer after decoration was finished");z(t,"An initializer","be",!0),l.push(t)}.bind(null,Y)};if(y)u=O.call(P,_,C),Y.v=1,z(u,"class decorators","return")&&(_=u);else if(C.static=c,C.private=g,u=C.access={has:g?h.bind():function(e){return n in e}},S||(u.get=g?E?function(e){return d(e),T.value}:j("get",0,d):function(e){return e[n]}),E||k||(u.set=g?j("set",0,d):function(e,t){e[n]=t}),_=O.call(P,x?{get:T.get,set:T.set}:T[R],C),Y.v=1,x){if("object"==(0,a.A)(_)&&_)(u=z(_.get,"accessor.get"))&&(T.get=u),(u=z(_.set,"accessor.set"))&&(T.set=u),(u=z(_.init,"accessor.init"))&&N.unshift(u);else if(void 0!==_)throw new TypeError("accessor decorators must return an object with get, set, or init properties or undefined")}else z(_,(b?"field":"method")+" decorators","return")&&(b?N.unshift(_):T[R]=_)}return i<2&&s.push(A(N,c,1),A(l,c,0)),b||y||(g?x?s.splice(-1,0,j("get",c),j("set",c)):s.push(E?T[R]:z.call.bind(T[R])):m(e,n,T)),_}function S(e){return m(e,v,{configurable:!0,enumerable:!0,value:p})}return void 0!==c&&(p=c[v]),p=y(null==p?null:p),h=[],d=function(e){e&&h.push(A(e))},f=function(t,a){for(var o=0;o<r.length;o++){var l=r[o],c=l[1],p=7&c;if((8&c)==t&&!p==a){var u=l[2],d=!!l[3],f=16&c;k(t?e:e.prototype,l,f,d?"#"+u:(0,i.A)(u),p,p<2?[]:t?b=b||[]:g=g||[],h,!!t,d,a,t&&d?function(t){return(0,n.A)(t)===e}:s)}}},f(8,0),f(0,0),f(8,1),f(0,1),d(g),d(b),u=h,x||S(e),{e:u,get c(){var r=[];return x&&[S(e=k(e,[t],l,e.name,5,r)),A(r,1)]}}}},12559:(e,t,r)=>{function a(e,t,r){if("function"==typeof e?e===t:e.has(t))return arguments.length<3?t:r;throw new TypeError("Private element is not present on this object")}r.d(t,{A:()=>a})},26902:(e,t,r)=>{r.d(t,{A:()=>n});var a=r(17545);function n(e){if(Object(e)!==e)throw TypeError("right-hand side of 'in' should be an object, got "+(null!==e?(0,a.A)(e):"null"));return e}},72016:(e,t,r)=>{function a(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}r.d(t,{A:()=>a})},70829:(e,t,r)=>{r.d(t,{A:()=>n});var a=r(12559);function n(e,t){return e.get((0,a.A)(e,t))}},70918:(e,t,r)=>{r.d(t,{A:()=>n});var a=r(72016);function n(e,t,r){(0,a.A)(e,t),t.set(e,r)}},86121:(e,t,r)=>{r.d(t,{A:()=>n});var a=r(12559);function n(e,t,r){return e.set((0,a.A)(e,t),r),r}},11369:(e,t,r)=>{r.d(t,{A:()=>n});var a=r(17545);function n(e){var t=function(e,t){if("object"!=(0,a.A)(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=(0,a.A)(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==(0,a.A)(t)?t:t+""}},17545:(e,t,r)=>{function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}r.d(t,{A:()=>a})}}]);
//# sourceMappingURL=graph-layout-grid.1a62c049.js.map
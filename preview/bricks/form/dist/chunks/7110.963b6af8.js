"use strict";(self.webpackChunk_next_bricks_form=self.webpackChunk_next_bricks_form||[]).push([[7110],{7110:(e,r,t)=>{function n(e){return class extends HTMLElement{get $$typeof(){return"provider"}resolve(){return e(...arguments)}}}function o(e){var r=Object.getOwnPropertyNames(e);for(var t of r){var n=e[t];n&&"object"==typeof n&&o(n)}return Object.freeze(e)}function s(e,r){return Object.prototype.hasOwnProperty.call(e,r)}function a(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)}t.r(r),t.d(r,{JsonStorage:()=>i,createProviderClass:()=>n,deepFreeze:()=>o,hasOwnProperty:()=>s,isObject:()=>a,unwrapProvider:()=>u});class i{constructor(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"brick-next-";this.storage=e,this.prefix=r}setItem(e,r){this.storage.setItem(this.prefix+e,JSON.stringify(r))}getItem(e){var r;return JSON.parse(null!==(r=this.storage.getItem(this.prefix+e))&&void 0!==r?r:"null")}removeItem(e){return this.storage.removeItem(this.prefix+e)}clear(){return this.storage.clear()}}var c=new Map;function u(e){return function(){for(var r=arguments.length,t=new Array(r),n=0;n<r;n++)t[n]=arguments[n];var o=function(e){var r=c.get(e);return r||(r=document.createElement(e),c.set(e,r),r)}(e);return o.resolve(...t)}}}}]);
//# sourceMappingURL=7110.963b6af8.js.map
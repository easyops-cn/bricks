"use strict";(globalThis.webpackChunk_next_bricks_form_platform=globalThis.webpackChunk_next_bricks_form_platform||[]).push([[3426],{4586:(t,e,n)=>{n.d(e,{A:()=>i});var r=n(1369);function i(t,e,n){return(e=(0,r.A)(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},1369:(t,e,n)=>{n.d(e,{A:()=>i});var r=n(7545);function i(t){var e=function(t,e){if("object"!=(0,r.A)(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!=(0,r.A)(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==(0,r.A)(e)?e:e+""}},7545:(t,e,n)=>{function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}n.d(e,{A:()=>r})},1045:(t,e,n)=>{n.r(e),n.d(e,{NextElement:()=>v,createDecorators:()=>a,supportsAdoptingStyleSheets:()=>A});const r=Symbol.for("attributeHasBeenSet"),i=Symbol.for("markAttributeHasBeenSet"),o=Symbol.for("stopAttributeChangedCallback"),s={attribute:!0,type:String,converter:{toAttribute:(t,e)=>e===Boolean?t?"":null:t,fromAttribute(t,e){switch(e){case Boolean:return null!==t&&"false"!==t;case Number:return null===t?null:Number(t)}return t}},render:!0,hasChanged:(t,e)=>e!==t&&(e==e||t==t)};function a(){const t=new Map,e=new Set,n=new Set,a=new Set;return{defineElement:function(r){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(o,s)=>{let{kind:d,name:c,addInitializer:h}=s;h((function(){const s=Object.getPrototypeOf(this);if(l(this,"observedAttributes",u(s.observedAttributes??[],t.keys())),l(this,"__attributeReflections",new Map([...s.__attributeReflections??[],...t])),l(this,"styleTexts",i.styleTexts),l(this,"shadowOptions",!1!==i.shadowOptions?{mode:"open",...i.shadowOptions}:null),l(this,"__tagName",r),l(this,"_dev_only_definedProperties",u(s._dev_only_definedProperties??[],e)),l(this,"_dev_only_definedMethods",u(s._dev_only_definedMethods??[],n)),l(this,"_dev_only_definedEvents",u(s._dev_only_definedEvents??[],a)),customElements.define(r,this),Array.isArray(i.alias))for(const t of i.alias){const e=class extends o{};l(e,"__tagName",t),customElements.define(t,e)}}))}},property:function(n){return function(a,l){let{get:u,set:d}=a,{kind:c,name:h,static:f,private:b}=l;e.add(h);const p=Object.assign({},s,n),m=function(t,e){const n=e.attribute;return!1===n?void 0:"string"==typeof n?n:t.replace(/[A-Z]/g,(t=>`-${t.toLowerCase()}`))}(h,p);return void 0!==m&&t.set(m,{...p,property:h}),{get(){return void 0!==m&&this[r](m)?p.converter.fromAttribute(this.getAttribute(m),p.type):u.call(this)},set(t){const e=u.call(this);if(d.call(this,t),p.hasChanged(t,e)){if(void 0!==m){const e=p.converter.toAttribute(t,p.type);this[o](!0),null==e?this.removeAttribute(m):this.setAttribute(m,e),this[i](m),this[o](!1)}p.render&&this._requestRender()}},init(t){if(void 0!==m&&p.hasChanged(t,void 0)){const e=p.converter.toAttribute(t,p.type);null!=e&&requestAnimationFrame((()=>{this[r](m)||(this[o](!0),this.setAttribute(m,e),this[o](!1))}))}return t}}}},method:function(t){return function(e,r){let{kind:i,name:o,static:s,private:a,addInitializer:l}=r;null!=t&&t.bound&&l((function(){this[o]=this[o].bind(this)})),n.add(o)}},event:function(t){return function(e,n){let{get:r}=e,{kind:i,name:o,static:s,private:l}=n;const{type:u,...d}=t;return a.add(u),{get(){return r.call(this)},set(){throw new Error("Decorated events are readonly")},init(t){return Object.freeze({emit:t=>this.dispatchEvent(new CustomEvent(u,{...d,detail:t}))})}}}}}}function l(t,e,n){Object.defineProperty(t,e,{get:()=>n,configurable:!0})}function u(t,e){const n=new Set(t);for(const t of e)n.add(t);return[...n]}new Set(["prefix"]);var d=n(918),c=n(4586),h=n(829),f=n(6121),b=new WeakMap,p=new WeakMap,m=new WeakMap,y=new WeakMap;class v extends HTMLElement{constructor(){super(...arguments),(0,d.A)(this,b,!1),(0,d.A)(this,p,!1),(0,d.A)(this,m,!1),(0,d.A)(this,y,new Set)}_markConnectedCallbackCalled(){(0,f.A)(p,this,!0)}connectedCallback(){this._markConnectedCallbackCalled(),this._render()}[r](t){return(0,h.A)(y,this).has(t)}[i](t){(0,h.A)(y,this).add(t)}[o](t){(0,f.A)(m,this,t)}attributeChangedCallback(t,e,n){if((0,h.A)(y,this).add(t),!(0,h.A)(m,this)&&e!==n){const e=this.constructor.__attributeReflections.get(t),r=e.converter.fromAttribute(n,e.type);this[e.property]=r}}_requestRender(){this.isConnected&&(0,h.A)(p,this)&&!(0,h.A)(b,this)&&((0,f.A)(b,this,!0),Promise.resolve().then((()=>{(0,f.A)(b,this,!1),this._render()})))}}let _;function A(){return void 0===_&&(_=!!(window.ShadowRoot&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype)),_}(0,c.A)(v,"styleTexts",void 0),(0,c.A)(v,"shadowOptions",void 0),(0,c.A)(v,"__attributeReflections",void 0),(0,c.A)(v,"__tagName",void 0)}}]);
//# sourceMappingURL=3426.21c50f9e.js.map
/*! For license information please see eo-image.f6a4e982.js.LICENSE.txt */
(globalThis.webpackChunk_next_bricks_basic=globalThis.webpackChunk_next_bricks_basic||[]).push([[247,2052],{97:(e,t,r)=>{"use strict";r.r(t),r.d(t,{lockBodyScroll:()=>s});var n=r(2681);r(8280);const i=new Set;function s(e,t){if(t){if(i.add(e),!document.body.classList.contains("disable-scroll")){const e=function(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}();document.body.classList.add("disable-scroll"),document.body.style.setProperty("--body-scroll-lock-size",`${e}px`)}}else i.delete(e),0===i.size&&(document.body.classList.remove("disable-scroll"),document.body.style.removeProperty("--body-scroll-lock-size"))}customElements.define("basic.lock-body-scroll",(0,n.createProviderClass)(s))},1472:(e,t,r)=>{"use strict";r.r(t),r.d(t,{Image:()=>z});var n,i=r(4635),s=r(918),o=r(4586),a=r(6902),c=r(5536),u=r(6121),l=r(829),d=r(2740),h=r(8769),p=r.n(h),f=r(300),v=r(4295),m=r(3939),y=r(8743),g=(r(6477),r(3946));let b,w,A,x,k,L,C,M,S,P,E,I,T,_;const{defineElement:R,property:W,method:N,event:j}=(0,f.createDecorators)();let z;var O=new WeakMap,B=new WeakMap,D=new WeakMap,F=new WeakMap,H=new WeakMap,U=new WeakSet,q=new WeakMap;class J extends v.ReactNextElement{constructor(){super(...arguments),(0,i.A)(this,U),(0,o.A)(this,"_ImageListRef",(b(this),(0,h.createRef)())),(0,s.A)(this,O,A(this)),(0,s.A)(this,B,(x(this),k(this))),(0,s.A)(this,D,(L(this),C(this))),(0,s.A)(this,F,(M(this),S(this))),(0,s.A)(this,H,(P(this),E(this))),(0,s.A)(this,q,(_(this),e=>{(0,c.A)(U,this,I).emit(e)}))}get imgList(){return(0,l.A)(O,this)}set imgList(e){(0,u.A)(O,this,e)}get width(){return(0,l.A)(B,this)}set width(e){(0,u.A)(B,this,e)}get height(){return(0,l.A)(D,this)}set height(e){(0,u.A)(D,this,e)}get onlyPreview(){return(0,l.A)(F,this)}set onlyPreview(e){(0,u.A)(F,this,e)}open(e){var t;null===(t=this._ImageListRef.current)||void 0===t||t.openPreview(e)}close(){var e;null===(e=this._ImageListRef.current)||void 0===e||e.closePreview()}render(){return p().createElement(g.e,{ref:this._ImageListRef,imgList:this.imgList,width:this.width,height:this.height,onlyPreview:this.onlyPreview,onVisibleChange:(0,l.A)(q,this)})}}n=J,({e:[A,x,k,L,C,M,S,P,E,I,T,_,b],c:[z,w]}=(0,d.A)(n,[R("eo-image",{styleTexts:[m.A,y.A],alias:["basic.general-image"]})],[[W({attribute:!1}),1,"imgList"],[W(),1,"width"],[W(),1,"height"],[W({type:Boolean}),1,"onlyPreview"],[N(),2,"open"],[N(),2,"close"],[j({type:"visibleChange"}),1,"visibleChange",e=>(0,l.A)(H,e),(e,t)=>(0,u.A)(H,e,t)]],0,(e=>q.has((0,a.A)(e))),v.ReactNextElement)),w()},935:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,i,s){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(n)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(o[c]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);n&&o[l[0]]||(void 0!==s&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=s),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),t.push(l))}},t}},6758:e=>{"use strict";e.exports=function(e){return e[1]}},2591:e=>{"use strict";var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var s={},o=[],a=0;a<e.length;a++){var c=e[a],u=n.base?c[0]+n.base:c[0],l=s[u]||0,d="".concat(u," ").concat(l);s[u]=l+1;var h=r(d),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==h)t[h].references++,t[h].updater(p);else{var f=i(p,n);n.byIndex=a,t.splice(a,0,{identifier:d,updater:f,references:1})}o.push(d)}return o}function i(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,i){var s=n(e=e||[],i=i||{});return function(e){e=e||[];for(var o=0;o<s.length;o++){var a=r(s[o]);t[a].references--}for(var c=n(e,i),u=0;u<s.length;u++){var l=r(s[u]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}s=c}}},8128:e=>{"use strict";var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},3051:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},855:(e,t,r)=>{"use strict";e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},1740:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var i=void 0!==r.layer;i&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,i&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var s=r.sourceMap;s&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},3656:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},3373:(e,t)=>{var r;!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var e="",t=0;t<arguments.length;t++){var r=arguments[t];r&&(e=o(e,s(r)))}return e}function s(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return i.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var r in e)n.call(e,r)&&e[r]&&(t=o(t,r));return t}function o(e,t){return t?e?e+" "+t:e+t:e}e.exports?(i.default=i,e.exports=i):void 0===(r=function(){return i}.apply(t,[]))||(e.exports=r)}()}}]);
//# sourceMappingURL=eo-image.f6a4e982.js.map
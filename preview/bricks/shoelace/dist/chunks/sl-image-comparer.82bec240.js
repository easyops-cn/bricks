/*! For license information please see sl-image-comparer.82bec240.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_next_bricks_shoelace=globalThis.webpackChunk_next_bricks_shoelace||[]).push([[3270],{3589:(e,t,i)=>{i.r(t),i(3563),i(7901)},7901:(e,t,i)=>{i(8258),i(4804);var r=i(7719);function n(e){document.documentElement.classList["dark"===e||"dark-v2"===e?"add":"remove"]("sl-theme-dark")}i(7422),(0,r.j)(i.p),n(document.documentElement.dataset.theme),window.addEventListener("theme.change",(e=>{n(e.detail)}))},9832:(e,t,i)=>{i.d(t,{A:()=>l});var r=i(6758),n=i.n(r),o=i(935),s=i.n(o)()(n());s.push([e.id,":root,\n.sl-theme-dark{--sl-z-index-drawer:1000;--sl-z-index-dialog:1000;--sl-z-index-dropdown:1050;--sl-z-index-toast:1060;--sl-z-index-tooltip:1070}.sl-toast-stack{width:100%;left:0;right:auto;overflow:initial;pointer-events:none}.sl-toast-stack > sl-alert{pointer-events:all}",""]);const l=s},7422:(e,t,i)=>{var r=i(2591),n=i.n(r),o=i(1740),s=i.n(o),l=i(8128),a=i.n(l),c=i(855),d=i.n(c),h=i(3051),u=i.n(h),v=i(3656),g=i.n(v),p=i(9832),m={};m.styleTagTransform=g(),m.setAttributes=d(),m.insert=a().bind(null,"head"),m.domAPI=s(),m.insertStyleElement=u(),n()(p.A,m),p.A&&p.A.locals&&p.A.locals},5258:(e,t,i)=>{i.d(t,{XC:()=>c,c2:()=>h});const r=new Set,n=new MutationObserver(d),o=new Map;let s,l=document.documentElement.dir||"ltr",a=document.documentElement.lang||navigator.language;function c(...e){e.map((e=>{const t=e.$code.toLowerCase();o.has(t)?o.set(t,Object.assign(Object.assign({},o.get(t)),e)):o.set(t,e),s||(s=e)})),d()}function d(){l=document.documentElement.dir||"ltr",a=document.documentElement.lang||navigator.language,[...r.keys()].map((e=>{"function"==typeof e.requestUpdate&&e.requestUpdate()}))}n.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});class h{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){r.add(this.host)}hostDisconnected(){r.delete(this.host)}dir(){return`${this.host.dir||l}`.toLowerCase()}lang(){return`${this.host.lang||a}`.toLowerCase()}getTranslationData(e){var t,i;const r=new Intl.Locale(e.replace(/_/g,"-")),n=null==r?void 0:r.language.toLowerCase(),s=null!==(i=null===(t=null==r?void 0:r.region)||void 0===t?void 0:t.toLowerCase())&&void 0!==i?i:"";return{locale:r,language:n,region:s,primary:o.get(`${n}-${s}`),secondary:o.get(n)}}exists(e,t){var i;const{primary:r,secondary:n}=this.getTranslationData(null!==(i=t.lang)&&void 0!==i?i:this.lang());return t=Object.assign({includeFallback:!1},t),!!(r&&r[e]||n&&n[e]||t.includeFallback&&s&&s[e])}term(e,...t){const{primary:i,secondary:r}=this.getTranslationData(this.lang());let n;if(i&&i[e])n=i[e];else if(r&&r[e])n=r[e];else{if(!s||!s[e])return console.error(`No translation found for: ${String(e)}`),String(e);n=s[e]}return"function"==typeof n?n(...t):n}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(e,t)}}},5752:(e,t,i)=>{i.d(t,{w:()=>n});var r=i(1320);function n(e,t){const i=(0,r.IA)({waitUntilFirstUpdate:!1},t);return(t,r)=>{const{update:n}=t,o=Array.isArray(e)?e:[e];t.update=function(e){o.forEach((t=>{const n=t;if(e.has(n)){const t=e.get(n),o=this[n];t!==o&&(i.waitUntilFirstUpdate&&!this.hasUpdated||this[r](t,o))}})),n.call(this,e)}}}},8326:(e,t,i)=>{i.d(t,{g:()=>n});var r={caret:'\n    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n      <polyline points="6 9 12 15 18 9"></polyline>\n    </svg>\n  ',check:'\n    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">\n        <g stroke="currentColor">\n          <g transform="translate(3.428571, 3.428571)">\n            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>\n            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>\n          </g>\n        </g>\n      </g>\n    </svg>\n  ',"chevron-down":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>\n    </svg>\n  ',"chevron-left":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>\n    </svg>\n  ',"chevron-right":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>\n    </svg>\n  ',copy:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>\n    </svg>\n  ',eye:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">\n      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>\n      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>\n    </svg>\n  ',"eye-slash":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">\n      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>\n      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>\n      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>\n    </svg>\n  ',eyedropper:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">\n      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>\n    </svg>\n  ',"grip-vertical":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">\n      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>\n    </svg>\n  ',indeterminate:'\n    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">\n        <g stroke="currentColor" stroke-width="2">\n          <g transform="translate(2.285714, 6.857143)">\n            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>\n          </g>\n        </g>\n      </g>\n    </svg>\n  ',"person-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">\n      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>\n    </svg>\n  ',"play-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">\n      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>\n    </svg>\n  ',"pause-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">\n      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>\n    </svg>\n  ',radio:'\n    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <g fill="currentColor">\n          <circle cx="8" cy="8" r="3.42857143"></circle>\n        </g>\n      </g>\n    </svg>\n  ',"star-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">\n      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>\n    </svg>\n  ',"x-lg":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">\n      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>\n    </svg>\n  ',"x-circle-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">\n      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>\n    </svg>\n  '},n={name:"system",resolver:e=>e in r?`data:image/svg+xml,${encodeURIComponent(r[e])}`:""}},4319:(e,t,i)=>{function r(e,t){function i(i){const r=e.getBoundingClientRect(),n=e.ownerDocument.defaultView,o=r.left+n.scrollX,s=r.top+n.scrollY,l=i.pageX-o,a=i.pageY-s;(null==t?void 0:t.onMove)&&t.onMove(l,a)}document.addEventListener("pointermove",i,{passive:!0}),document.addEventListener("pointerup",(function e(){document.removeEventListener("pointermove",i),document.removeEventListener("pointerup",e),(null==t?void 0:t.onStop)&&t.onStop()})),(null==t?void 0:t.initialEvent)instanceof PointerEvent&&i(t.initialEvent)}i.d(t,{$:()=>r})},9162:(e,t,i)=>{function r(e,t,i){return r=e<t?t:e>i?i:e,Object.is(r,-0)?0:r;var r}i.d(t,{q:()=>r})},4812:(e,t,i)=>{i.d(t,{B:()=>m});var r,n=i(2089),o=i(4415),s=i(5752),l=i(7324),a=i(8004),c=i(1320),d=i(5024),h=i(3348),u=i(8146),v=Symbol(),g=Symbol(),p=new Map,m=class extends a.f{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(e,t){var i;let n;if(null==t?void 0:t.spriteSheet){this.svg=d.qy`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,await this.updateComplete;const i=this.shadowRoot.querySelector("[part='svg']");return"function"==typeof t.mutator&&t.mutator(i),this.svg}try{if(n=await fetch(e,{mode:"cors"}),!n.ok)return 410===n.status?v:g}catch(e){return g}try{const e=document.createElement("div");e.innerHTML=await n.text();const t=e.firstElementChild;if("svg"!==(null==(i=null==t?void 0:t.tagName)?void 0:i.toLowerCase()))return v;r||(r=new DOMParser);const o=r.parseFromString(t.outerHTML,"text/html").body.querySelector("svg");return o?(o.part.add("svg"),document.adoptNode(o)):v}catch(e){return v}}connectedCallback(){super.connectedCallback(),(0,o.pA)(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),(0,o.cl)(this)}getIconSource(){const e=(0,o.Hh)(this.library);return this.name&&e?{url:e.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){"string"==typeof this.label&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var e;const{url:t,fromLibrary:i}=this.getIconSource(),r=i?(0,o.Hh)(this.library):void 0;if(!t)return void(this.svg=null);let n=p.get(t);if(n||(n=this.resolveIcon(t,r),p.set(t,n)),!this.initialRender)return;const s=await n;if(s===g&&p.delete(t),t===this.getIconSource().url)if((0,h.qb)(s))this.svg=s;else switch(s){case g:case v:this.svg=null,this.emit("sl-error");break;default:this.svg=s.cloneNode(!0),null==(e=null==r?void 0:r.mutator)||e.call(r,this.svg),this.emit("sl-load")}}render(){return this.svg}};m.styles=[l.$,n.L],(0,c.Cc)([(0,u.wk)()],m.prototype,"svg",2),(0,c.Cc)([(0,u.MZ)({reflect:!0})],m.prototype,"name",2),(0,c.Cc)([(0,u.MZ)()],m.prototype,"src",2),(0,c.Cc)([(0,u.MZ)()],m.prototype,"label",2),(0,c.Cc)([(0,u.MZ)({reflect:!0})],m.prototype,"library",2),(0,c.Cc)([(0,s.w)("label")],m.prototype,"handleLabelChange",1),(0,c.Cc)([(0,s.w)(["name","src","library"])],m.prototype,"setIcon",1)},3280:(e,t,i)=>{i.d(t,{k:()=>n});var r={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>0===e?"No options selected":1===e?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};(0,i(5258).XC)(r);var n=r},4637:(e,t,i)=>{i.d(t,{q:()=>n});var r=i(2558),n={name:"default",resolver:e=>(0,r.D)(`assets/icons/${e}.svg`)}},2089:(e,t,i)=>{i.d(t,{L:()=>r});var r=i(5024).AH`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`},7324:(e,t,i)=>{i.d(t,{$:()=>r});var r=i(5024).AH`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`},333:(e,t,i)=>{i.d(t,{c:()=>o});var r=i(3280),n=i(5258),o=class extends n.c2{};(0,n.XC)(r.k)},4415:(e,t,i)=>{i.d(t,{Hh:()=>c,cl:()=>a,pA:()=>l});var r=i(4637),n=i(8326),o=[r.q,n.g],s=[];function l(e){s.push(e)}function a(e){s=s.filter((t=>t!==e))}function c(e){return o.find((t=>t.name===e))}},3563:(e,t,i)=>{var r=i(5024),n=r.AH`
  :host {
    --divider-width: 2px;
    --handle-size: 2.5rem;

    display: inline-block;
    position: relative;
  }

  .image-comparer {
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
  }

  .image-comparer__before,
  .image-comparer__after {
    display: block;
    pointer-events: none;
  }

  .image-comparer__before::slotted(img),
  .image-comparer__after::slotted(img),
  .image-comparer__before::slotted(svg),
  .image-comparer__after::slotted(svg) {
    display: block;
    max-width: 100% !important;
    height: auto;
  }

  .image-comparer__after {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .image-comparer__divider {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    width: var(--divider-width);
    height: 100%;
    background-color: var(--sl-color-neutral-0);
    translate: calc(var(--divider-width) / -2);
    cursor: ew-resize;
  }

  .image-comparer__handle {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: calc(50% - (var(--handle-size) / 2));
    width: var(--handle-size);
    height: var(--handle-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: var(--sl-border-radius-circle);
    font-size: calc(var(--handle-size) * 0.5);
    color: var(--sl-color-neutral-700);
    cursor: inherit;
    z-index: 10;
  }

  .image-comparer__handle:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`,o=i(4319),s=i(9162),l=i(333),a=i(4812),c=i(5752),d=i(7324),h=i(8004),u=i(1320),v=i(3788),g=i(8146),p=i(8981),m=class extends h.f{constructor(){super(...arguments),this.localize=new l.c(this),this.position=50}handleDrag(e){const{width:t}=this.base.getBoundingClientRect(),i="rtl"===this.localize.dir();e.preventDefault(),(0,o.$)(this.base,{onMove:e=>{this.position=parseFloat((0,s.q)(e/t*100,0,100).toFixed(2)),i&&(this.position=100-this.position)},initialEvent:e})}handleKeyDown(e){const t="ltr"===this.localize.dir(),i="rtl"===this.localize.dir();if(["ArrowLeft","ArrowRight","Home","End"].includes(e.key)){const r=e.shiftKey?10:1;let n=this.position;e.preventDefault(),(t&&"ArrowLeft"===e.key||i&&"ArrowRight"===e.key)&&(n-=r),(t&&"ArrowRight"===e.key||i&&"ArrowLeft"===e.key)&&(n+=r),"Home"===e.key&&(n=0),"End"===e.key&&(n=100),n=(0,s.q)(n,0,100),this.position=n}}handlePositionChange(){this.emit("sl-change")}render(){const e="rtl"===this.localize.dir();return r.qy`
      <div
        part="base"
        id="image-comparer"
        class=${(0,v.H)({"image-comparer":!0,"image-comparer--rtl":e})}
        @keydown=${this.handleKeyDown}
      >
        <div class="image-comparer__image">
          <div part="before" class="image-comparer__before">
            <slot name="before"></slot>
          </div>

          <div
            part="after"
            class="image-comparer__after"
            style=${(0,p.W)({clipPath:e?`inset(0 0 0 ${100-this.position}%)`:`inset(0 ${100-this.position}% 0 0)`})}
          >
            <slot name="after"></slot>
          </div>
        </div>

        <div
          part="divider"
          class="image-comparer__divider"
          style=${(0,p.W)({left:e?100-this.position+"%":`${this.position}%`})}
          @mousedown=${this.handleDrag}
          @touchstart=${this.handleDrag}
        >
          <div
            part="handle"
            class="image-comparer__handle"
            role="scrollbar"
            aria-valuenow=${this.position}
            aria-valuemin="0"
            aria-valuemax="100"
            aria-controls="image-comparer"
            tabindex="0"
          >
            <slot name="handle">
              <sl-icon library="system" name="grip-vertical"></sl-icon>
            </slot>
          </div>
        </div>
      </div>
    `}};m.styles=[d.$,n],m.scopedElement={"sl-icon":a.B},(0,u.Cc)([(0,g.P)(".image-comparer")],m.prototype,"base",2),(0,u.Cc)([(0,g.P)(".image-comparer__handle")],m.prototype,"handle",2),(0,u.Cc)([(0,g.MZ)({type:Number,reflect:!0})],m.prototype,"position",2),(0,u.Cc)([(0,c.w)("position",{waitUntilFirstUpdate:!0})],m.prototype,"handlePositionChange",1),m.define("sl-image-comparer"),i(3280),i(2089),i(4415),i(4637),i(8326)},3348:(e,t,i)=>{i.d(t,{Rt:()=>s,mY:()=>a,qb:()=>o});var r=i(4716);const{D:n}=r.ge,o=(e,t)=>void 0===t?void 0!==(null==e?void 0:e._$litType$):(null==e?void 0:e._$litType$)===t,s=e=>void 0===e.strings,l={},a=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l;return e._$AH=t}},5128:(e,t,i)=>{i.d(t,{OA:()=>r,WL:()=>o,u$:()=>n});const r={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},n=e=>function(){for(var t=arguments.length,i=new Array(t),r=0;r<t;r++)i[r]=arguments[r];return{_$litDirective$:e,values:i}};class o{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}},3788:(e,t,i)=>{i.d(t,{H:()=>o});var r=i(4716),n=i(5128);const o=(0,n.u$)(class extends n.WL{constructor(e){var t;if(super(e),e.type!==n.OA.ATTRIBUTE||"class"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,t){let[i]=t;if(void 0===this.it){this.it=new Set,void 0!==e.strings&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in i){var n;i[e]&&(null===(n=this.st)||void 0===n||!n.has(e))&&this.it.add(e)}return this.render(i)}const o=e.element.classList;for(const e of this.it)e in i||(o.remove(e),this.it.delete(e));for(const e in i){var s;const t=!!i[e];t===this.it.has(e)||(null===(s=this.st)||void 0===s?void 0:s.has(e))||(t?(o.add(e),this.it.add(e)):(o.remove(e),this.it.delete(e)))}return r.c0}})},8981:(e,t,i)=>{i.d(t,{W:()=>l});var r=i(4716),n=i(5128);const o="important",s=" !"+o,l=(0,n.u$)(class extends n.WL{constructor(e){var t;if(super(e),e.type!==n.OA.ATTRIBUTE||"style"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce(((t,i)=>{const r=e[i];return null==r?t:t+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`}),"")}update(e,t){let[i]=t;const{style:n}=e.element;if(void 0===this.ut)return this.ut=new Set(Object.keys(i)),this.render(i);for(const e of this.ut)null==i[e]&&(this.ut.delete(e),e.includes("-")?n.removeProperty(e):n[e]=null);for(const e in i){const t=i[e];if(null!=t){this.ut.add(e);const i="string"==typeof t&&t.endsWith(s);e.includes("-")||i?n.setProperty(e,i?t.slice(0,-11):t,i?o:""):n[e]=t}}return r.c0}})}}]);
//# sourceMappingURL=sl-image-comparer.82bec240.js.map
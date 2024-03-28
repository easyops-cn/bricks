/*! For license information please see sl-image-comparer.8d7d8db2.js.LICENSE.txt */
"use strict";(self.webpackChunk_next_bricks_shoelace=self.webpackChunk_next_bricks_shoelace||[]).push([[3270],{3589:(e,t,r)=>{r.r(t),r(1426),r(7901)},7901:(e,t,r)=>{r(8258),r(4804);var i=r(7719);function n(e){document.documentElement.classList["dark"===e||"dark-v2"===e?"add":"remove"]("sl-theme-dark")}r(7422),(0,i.j)(r.p),n(document.documentElement.dataset.theme),window.addEventListener("theme.change",(e=>{n(e.detail)}))},9832:(e,t,r)=>{r.d(t,{A:()=>a});var i=r(6758),n=r.n(i),o=r(935),s=r.n(o)()(n());s.push([e.id,":root,\n.sl-theme-dark{--sl-z-index-drawer:1000;--sl-z-index-dialog:1000;--sl-z-index-dropdown:1050;--sl-z-index-toast:1001;--sl-z-index-tooltip:1070}.sl-toast-stack{width:100%;left:0;right:auto;overflow:initial;pointer-events:none}.sl-toast-stack > sl-alert{pointer-events:all}",""]);const a=s},7422:(e,t,r)=>{var i=r(2591),n=r.n(i),o=r(1740),s=r.n(o),a=r(8128),l=r.n(a),c=r(855),d=r.n(c),h=r(3051),v=r.n(h),u=r(3656),g=r.n(u),p=r(9832),m={};m.styleTagTransform=g(),m.setAttributes=d(),m.insert=l().bind(null,"head"),m.domAPI=s(),m.insertStyleElement=v(),n()(p.A,m),p.A&&p.A.locals&&p.A.locals},5258:(e,t,r)=>{r.d(t,{XC:()=>c,c2:()=>h});const i=new Set,n=new MutationObserver(d),o=new Map;let s,a=document.documentElement.dir||"ltr",l=document.documentElement.lang||navigator.language;function c(...e){e.map((e=>{const t=e.$code.toLowerCase();o.has(t)?o.set(t,Object.assign(Object.assign({},o.get(t)),e)):o.set(t,e),s||(s=e)})),d()}function d(){a=document.documentElement.dir||"ltr",l=document.documentElement.lang||navigator.language,[...i.keys()].map((e=>{"function"==typeof e.requestUpdate&&e.requestUpdate()}))}n.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});class h{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){i.add(this.host)}hostDisconnected(){i.delete(this.host)}dir(){return`${this.host.dir||a}`.toLowerCase()}lang(){return`${this.host.lang||l}`.toLowerCase()}getTranslationData(e){var t,r;const i=new Intl.Locale(e.replace(/_/g,"-")),n=null==i?void 0:i.language.toLowerCase(),s=null!==(r=null===(t=null==i?void 0:i.region)||void 0===t?void 0:t.toLowerCase())&&void 0!==r?r:"";return{locale:i,language:n,region:s,primary:o.get(`${n}-${s}`),secondary:o.get(n)}}exists(e,t){var r;const{primary:i,secondary:n}=this.getTranslationData(null!==(r=t.lang)&&void 0!==r?r:this.lang());return t=Object.assign({includeFallback:!1},t),!!(i&&i[e]||n&&n[e]||t.includeFallback&&s&&s[e])}term(e,...t){const{primary:r,secondary:i}=this.getTranslationData(this.lang());let n;if(r&&r[e])n=r[e];else if(i&&i[e])n=i[e];else{if(!s||!s[e])return console.error(`No translation found for: ${String(e)}`),String(e);n=s[e]}return"function"==typeof n?n(...t):n}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,r){return new Intl.RelativeTimeFormat(this.lang(),r).format(e,t)}}},8326:(e,t,r)=>{r.d(t,{g:()=>n});var i={caret:'\n    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n      <polyline points="6 9 12 15 18 9"></polyline>\n    </svg>\n  ',check:'\n    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">\n        <g stroke="currentColor">\n          <g transform="translate(3.428571, 3.428571)">\n            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>\n            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>\n          </g>\n        </g>\n      </g>\n    </svg>\n  ',"chevron-down":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>\n    </svg>\n  ',"chevron-left":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>\n    </svg>\n  ',"chevron-right":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>\n    </svg>\n  ',copy:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>\n    </svg>\n  ',eye:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">\n      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>\n      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>\n    </svg>\n  ',"eye-slash":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">\n      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>\n      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>\n      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>\n    </svg>\n  ',eyedropper:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">\n      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>\n    </svg>\n  ',"grip-vertical":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">\n      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>\n    </svg>\n  ',indeterminate:'\n    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">\n        <g stroke="currentColor" stroke-width="2">\n          <g transform="translate(2.285714, 6.857143)">\n            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>\n          </g>\n        </g>\n      </g>\n    </svg>\n  ',"person-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">\n      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>\n    </svg>\n  ',"play-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">\n      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>\n    </svg>\n  ',"pause-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">\n      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>\n    </svg>\n  ',radio:'\n    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <g fill="currentColor">\n          <circle cx="8" cy="8" r="3.42857143"></circle>\n        </g>\n      </g>\n    </svg>\n  ',"star-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">\n      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>\n    </svg>\n  ',"x-lg":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">\n      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>\n    </svg>\n  ',"x-circle-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">\n      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>\n    </svg>\n  '},n={name:"system",resolver:e=>e in i?`data:image/svg+xml,${encodeURIComponent(i[e])}`:""}},7352:(e,t,r)=>{r.d(t,{B:()=>p});var i,n=r(7464),o=r(4415),s=r(5794),a=r(7489),l=r(7012),c=r(5024),d=r(3348),h=r(2489),v=Symbol(),u=Symbol(),g=new Map,p=class extends a.f{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(e,t){var r;let n;if(null==t?void 0:t.spriteSheet)return c.qy`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`;try{if(n=await fetch(e,{mode:"cors"}),!n.ok)return 410===n.status?v:u}catch(e){return u}try{const e=document.createElement("div");e.innerHTML=await n.text();const t=e.firstElementChild;if("svg"!==(null==(r=null==t?void 0:t.tagName)?void 0:r.toLowerCase()))return v;i||(i=new DOMParser);const o=i.parseFromString(t.outerHTML,"text/html").body.querySelector("svg");return o?(o.part.add("svg"),document.adoptNode(o)):v}catch(e){return v}}connectedCallback(){super.connectedCallback(),(0,o.pA)(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),(0,o.cl)(this)}getIconSource(){const e=(0,o.Hh)(this.library);return this.name&&e?{url:e.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){"string"==typeof this.label&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var e;const{url:t,fromLibrary:r}=this.getIconSource(),i=r?(0,o.Hh)(this.library):void 0;if(!t)return void(this.svg=null);let n=g.get(t);if(n||(n=this.resolveIcon(t,i),g.set(t,n)),!this.initialRender)return;const s=await n;if(s===u&&g.delete(t),t===this.getIconSource().url)if((0,d.qb)(s))this.svg=s;else switch(s){case u:case v:this.svg=null,this.emit("sl-error");break;default:this.svg=s.cloneNode(!0),null==(e=null==i?void 0:i.mutator)||e.call(i,this.svg),this.emit("sl-load")}}render(){return this.svg}};p.styles=n.L,(0,l.Cc)([(0,h.wk)()],p.prototype,"svg",2),(0,l.Cc)([(0,h.MZ)({reflect:!0})],p.prototype,"name",2),(0,l.Cc)([(0,h.MZ)()],p.prototype,"src",2),(0,l.Cc)([(0,h.MZ)()],p.prototype,"label",2),(0,l.Cc)([(0,h.MZ)({reflect:!0})],p.prototype,"library",2),(0,l.Cc)([(0,s.w)("label")],p.prototype,"handleLabelChange",1),(0,l.Cc)([(0,s.w)(["name","src","library"])],p.prototype,"setIcon",1)},4319:(e,t,r)=>{function i(e,t){function r(r){const i=e.getBoundingClientRect(),n=e.ownerDocument.defaultView,o=i.left+n.scrollX,s=i.top+n.scrollY,a=r.pageX-o,l=r.pageY-s;(null==t?void 0:t.onMove)&&t.onMove(a,l)}document.addEventListener("pointermove",r,{passive:!0}),document.addEventListener("pointerup",(function e(){document.removeEventListener("pointermove",r),document.removeEventListener("pointerup",e),(null==t?void 0:t.onStop)&&t.onStop()})),(null==t?void 0:t.initialEvent)instanceof PointerEvent&&r(t.initialEvent)}r.d(t,{$:()=>i})},9162:(e,t,r)=>{function i(e,t,r){return i=e<t?t:e>r?r:e,Object.is(i,-0)?0:i;var i}r.d(t,{q:()=>i})},7464:(e,t,r)=>{r.d(t,{L:()=>n});var i=r(7324),n=r(5024).AH`
  ${i.$}

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
`},3280:(e,t,r)=>{r.d(t,{k:()=>n});var i={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>0===e?"No options selected":1===e?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};(0,r(5258).XC)(i);var n=i},4637:(e,t,r)=>{r.d(t,{q:()=>n});var i=r(2558),n={name:"default",resolver:e=>(0,i.D)(`assets/icons/${e}.svg`)}},5794:(e,t,r)=>{r.d(t,{w:()=>n});var i=r(7012);function n(e,t){const r=(0,i.IA)({waitUntilFirstUpdate:!1},t);return(t,i)=>{const{update:n}=t,o=Array.isArray(e)?e:[e];t.update=function(e){o.forEach((t=>{const n=t;if(e.has(n)){const t=e.get(n),o=this[n];t!==o&&(r.waitUntilFirstUpdate&&!this.hasUpdated||this[i](t,o))}})),n.call(this,e)}}}},7324:(e,t,r)=>{r.d(t,{$:()=>i});var i=r(5024).AH`
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
`},333:(e,t,r)=>{r.d(t,{c:()=>o});var i=r(3280),n=r(5258),o=class extends n.c2{};(0,n.XC)(i.k)},4415:(e,t,r)=>{r.d(t,{Hh:()=>c,cl:()=>l,pA:()=>a});var i=r(4637),n=r(8326),o=[i.q,n.g],s=[];function a(e){s.push(e)}function l(e){s=s.filter((t=>t!==e))}function c(e){return o.find((t=>t.name===e))}},1426:(e,t,r)=>{var i=r(7324),n=r(5024),o=n.AH`
  ${i.$}

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
`,s=r(4319),a=r(9162),l=r(333),c=r(7352),d=r(5794),h=r(7489),v=r(7012),u=r(3788),g=r(2489),p=r(8981),m=class extends h.f{constructor(){super(...arguments),this.localize=new l.c(this),this.position=50}handleDrag(e){const{width:t}=this.base.getBoundingClientRect(),r="rtl"===this.localize.dir();e.preventDefault(),(0,s.$)(this.base,{onMove:e=>{this.position=parseFloat((0,a.q)(e/t*100,0,100).toFixed(2)),r&&(this.position=100-this.position)},initialEvent:e})}handleKeyDown(e){const t="ltr"===this.localize.dir(),r="rtl"===this.localize.dir();if(["ArrowLeft","ArrowRight","Home","End"].includes(e.key)){const i=e.shiftKey?10:1;let n=this.position;e.preventDefault(),(t&&"ArrowLeft"===e.key||r&&"ArrowRight"===e.key)&&(n-=i),(t&&"ArrowRight"===e.key||r&&"ArrowLeft"===e.key)&&(n+=i),"Home"===e.key&&(n=0),"End"===e.key&&(n=100),n=(0,a.q)(n,0,100),this.position=n}}handlePositionChange(){this.emit("sl-change")}render(){const e="rtl"===this.localize.dir();return n.qy`
      <div
        part="base"
        id="image-comparer"
        class=${(0,u.H)({"image-comparer":!0,"image-comparer--rtl":e})}
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
    `}};m.styles=o,m.scopedElement={"sl-icon":c.B},(0,v.Cc)([(0,g.P)(".image-comparer")],m.prototype,"base",2),(0,v.Cc)([(0,g.P)(".image-comparer__handle")],m.prototype,"handle",2),(0,v.Cc)([(0,g.MZ)({type:Number,reflect:!0})],m.prototype,"position",2),(0,v.Cc)([(0,d.w)("position",{waitUntilFirstUpdate:!0})],m.prototype,"handlePositionChange",1),m.define("sl-image-comparer"),r(3280),r(7464),r(4415),r(4637),r(8326)},3348:(e,t,r)=>{r.d(t,{Rt:()=>s,mY:()=>l,qb:()=>o});var i=r(4716),{D:n}=i.ge,o=(e,t)=>void 0===t?void 0!==(null==e?void 0:e._$litType$):(null==e?void 0:e._$litType$)===t,s=e=>void 0===e.strings,a={},l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a;return e._$AH=t}},5128:(e,t,r)=>{r.d(t,{OA:()=>i,WL:()=>o,u$:()=>n});var i={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},n=e=>function(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return{_$litDirective$:e,values:r}};class o{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}},3788:(e,t,r)=>{r.d(t,{H:()=>o});var i=r(4716),n=r(5128),o=(0,n.u$)(class extends n.WL{constructor(e){var t;if(super(e),e.type!==n.OA.ATTRIBUTE||"class"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,t){var[r]=t;if(void 0===this.it){for(var n in this.it=new Set,void 0!==e.strings&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e)))),r){var o;r[n]&&(null===(o=this.st)||void 0===o||!o.has(n))&&this.it.add(n)}return this.render(r)}var s=e.element.classList;for(var a of this.it)a in r||(s.remove(a),this.it.delete(a));for(var l in r){var c,d=!!r[l];d===this.it.has(l)||(null===(c=this.st)||void 0===c?void 0:c.has(l))||(d?(s.add(l),this.it.add(l)):(s.remove(l),this.it.delete(l)))}return i.c0}})},8981:(e,t,r)=>{r.d(t,{W:()=>a});var i=r(4716),n=r(5128),o="important",s=" !"+o,a=(0,n.u$)(class extends n.WL{constructor(e){var t;if(super(e),e.type!==n.OA.ATTRIBUTE||"style"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce(((t,r)=>{var i=e[r];return null==i?t:t+"".concat(r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase(),":").concat(i,";")}),"")}update(e,t){var[r]=t,{style:n}=e.element;if(void 0===this.ut)return this.ut=new Set(Object.keys(r)),this.render(r);for(var a of this.ut)null==r[a]&&(this.ut.delete(a),a.includes("-")?n.removeProperty(a):n[a]=null);for(var l in r){var c=r[l];if(null!=c){this.ut.add(l);var d="string"==typeof c&&c.endsWith(s);l.includes("-")||d?n.setProperty(l,d?c.slice(0,-11):c,d?o:""):n[l]=c}}return i.c0}})}}]);
//# sourceMappingURL=sl-image-comparer.8d7d8db2.js.map
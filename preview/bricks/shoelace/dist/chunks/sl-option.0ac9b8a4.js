/*! For license information please see sl-option.0ac9b8a4.js.LICENSE.txt */
"use strict";(self.webpackChunk_next_bricks_shoelace=self.webpackChunk_next_bricks_shoelace||[]).push([[7500],{487:(e,t,n)=>{n.r(t),n(6638),n(7901)},7901:(e,t,n)=>{n(8258),n(4804);var s=n(7719);function l(e){document.documentElement.classList["dark"===e||"dark-v2"===e?"add":"remove"]("sl-theme-dark")}n(7422),(0,s.j)(n.p),l(document.documentElement.dataset.theme),window.addEventListener("theme.change",(e=>{l(e.detail)}))},9832:(e,t,n)=>{n.d(t,{A:()=>o});var s=n(6758),l=n.n(s),i=n(935),r=n.n(i)()(l());r.push([e.id,":root,\n.sl-theme-dark{--sl-z-index-drawer:1000;--sl-z-index-dialog:1000;--sl-z-index-dropdown:1050;--sl-z-index-toast:1001;--sl-z-index-tooltip:1070}.sl-toast-stack{width:100%;left:0;right:auto;overflow:initial;pointer-events:none}.sl-toast-stack > sl-alert{pointer-events:all}",""]);const o=r},7422:(e,t,n)=>{var s=n(2591),l=n.n(s),i=n(1740),r=n.n(i),o=n(8128),a=n.n(o),c=n(855),d=n.n(c),h=n(3051),u=n.n(h),v=n(3656),p=n.n(v),g=n(9832),m={};m.styleTagTransform=p(),m.setAttributes=d(),m.insert=a().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=u(),l()(g.A,m),g.A&&g.A.locals&&g.A.locals},5258:(e,t,n)=>{n.d(t,{XC:()=>c,c2:()=>h});const s=new Set,l=new MutationObserver(d),i=new Map;let r,o=document.documentElement.dir||"ltr",a=document.documentElement.lang||navigator.language;function c(...e){e.map((e=>{const t=e.$code.toLowerCase();i.has(t)?i.set(t,Object.assign(Object.assign({},i.get(t)),e)):i.set(t,e),r||(r=e)})),d()}function d(){o=document.documentElement.dir||"ltr",a=document.documentElement.lang||navigator.language,[...s.keys()].map((e=>{"function"==typeof e.requestUpdate&&e.requestUpdate()}))}l.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});class h{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){s.add(this.host)}hostDisconnected(){s.delete(this.host)}dir(){return`${this.host.dir||o}`.toLowerCase()}lang(){return`${this.host.lang||a}`.toLowerCase()}getTranslationData(e){var t,n;const s=new Intl.Locale(e.replace(/_/g,"-")),l=null==s?void 0:s.language.toLowerCase(),r=null!==(n=null===(t=null==s?void 0:s.region)||void 0===t?void 0:t.toLowerCase())&&void 0!==n?n:"";return{locale:s,language:l,region:r,primary:i.get(`${l}-${r}`),secondary:i.get(l)}}exists(e,t){var n;const{primary:s,secondary:l}=this.getTranslationData(null!==(n=t.lang)&&void 0!==n?n:this.lang());return t=Object.assign({includeFallback:!1},t),!!(s&&s[e]||l&&l[e]||t.includeFallback&&r&&r[e])}term(e,...t){const{primary:n,secondary:s}=this.getTranslationData(this.lang());let l;if(n&&n[e])l=n[e];else if(s&&s[e])l=s[e];else{if(!r||!r[e])return console.error(`No translation found for: ${String(e)}`),String(e);l=r[e]}return"function"==typeof l?l(...t):l}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,n){return new Intl.RelativeTimeFormat(this.lang(),n).format(e,t)}}},8326:(e,t,n)=>{n.d(t,{g:()=>l});var s={caret:'\n    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n      <polyline points="6 9 12 15 18 9"></polyline>\n    </svg>\n  ',check:'\n    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">\n        <g stroke="currentColor">\n          <g transform="translate(3.428571, 3.428571)">\n            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>\n            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>\n          </g>\n        </g>\n      </g>\n    </svg>\n  ',"chevron-down":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>\n    </svg>\n  ',"chevron-left":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>\n    </svg>\n  ',"chevron-right":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>\n    </svg>\n  ',copy:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>\n    </svg>\n  ',eye:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">\n      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>\n      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>\n    </svg>\n  ',"eye-slash":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">\n      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>\n      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>\n      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>\n    </svg>\n  ',eyedropper:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">\n      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>\n    </svg>\n  ',"grip-vertical":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">\n      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>\n    </svg>\n  ',indeterminate:'\n    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">\n        <g stroke="currentColor" stroke-width="2">\n          <g transform="translate(2.285714, 6.857143)">\n            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>\n          </g>\n        </g>\n      </g>\n    </svg>\n  ',"person-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">\n      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>\n    </svg>\n  ',"play-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">\n      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>\n    </svg>\n  ',"pause-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">\n      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>\n    </svg>\n  ',radio:'\n    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <g fill="currentColor">\n          <circle cx="8" cy="8" r="3.42857143"></circle>\n        </g>\n      </g>\n    </svg>\n  ',"star-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">\n      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>\n    </svg>\n  ',"x-lg":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">\n      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>\n    </svg>\n  ',"x-circle-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">\n      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>\n    </svg>\n  '},l={name:"system",resolver:e=>e in s?`data:image/svg+xml,${encodeURIComponent(s[e])}`:""}},7352:(e,t,n)=>{n.d(t,{B:()=>g});var s,l=n(7464),i=n(4415),r=n(5794),o=n(7489),a=n(7012),c=n(5024),d=n(3348),h=n(2489),u=Symbol(),v=Symbol(),p=new Map,g=class extends o.f{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(e,t){var n;let l;if(null==t?void 0:t.spriteSheet)return c.qy`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`;try{if(l=await fetch(e,{mode:"cors"}),!l.ok)return 410===l.status?u:v}catch(e){return v}try{const e=document.createElement("div");e.innerHTML=await l.text();const t=e.firstElementChild;if("svg"!==(null==(n=null==t?void 0:t.tagName)?void 0:n.toLowerCase()))return u;s||(s=new DOMParser);const i=s.parseFromString(t.outerHTML,"text/html").body.querySelector("svg");return i?(i.part.add("svg"),document.adoptNode(i)):u}catch(e){return u}}connectedCallback(){super.connectedCallback(),(0,i.pA)(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),(0,i.cl)(this)}getIconSource(){const e=(0,i.Hh)(this.library);return this.name&&e?{url:e.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){"string"==typeof this.label&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var e;const{url:t,fromLibrary:n}=this.getIconSource(),s=n?(0,i.Hh)(this.library):void 0;if(!t)return void(this.svg=null);let l=p.get(t);if(l||(l=this.resolveIcon(t,s),p.set(t,l)),!this.initialRender)return;const r=await l;if(r===v&&p.delete(t),t===this.getIconSource().url)if((0,d.qb)(r))this.svg=r;else switch(r){case v:case u:this.svg=null,this.emit("sl-error");break;default:this.svg=r.cloneNode(!0),null==(e=null==s?void 0:s.mutator)||e.call(s,this.svg),this.emit("sl-load")}}render(){return this.svg}};g.styles=l.L,(0,a.Cc)([(0,h.wk)()],g.prototype,"svg",2),(0,a.Cc)([(0,h.MZ)({reflect:!0})],g.prototype,"name",2),(0,a.Cc)([(0,h.MZ)()],g.prototype,"src",2),(0,a.Cc)([(0,h.MZ)()],g.prototype,"label",2),(0,a.Cc)([(0,h.MZ)({reflect:!0})],g.prototype,"library",2),(0,a.Cc)([(0,r.w)("label")],g.prototype,"handleLabelChange",1),(0,a.Cc)([(0,r.w)(["name","src","library"])],g.prototype,"setIcon",1)},7464:(e,t,n)=>{n.d(t,{L:()=>l});var s=n(7324),l=n(5024).AH`
  ${s.$}

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
`},3280:(e,t,n)=>{n.d(t,{k:()=>l});var s={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>0===e?"No options selected":1===e?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};(0,n(5258).XC)(s);var l=s},4637:(e,t,n)=>{n.d(t,{q:()=>l});var s=n(2558),l={name:"default",resolver:e=>(0,s.D)(`assets/icons/${e}.svg`)}},5794:(e,t,n)=>{n.d(t,{w:()=>l});var s=n(7012);function l(e,t){const n=(0,s.IA)({waitUntilFirstUpdate:!1},t);return(t,s)=>{const{update:l}=t,i=Array.isArray(e)?e:[e];t.update=function(e){i.forEach((t=>{const l=t;if(e.has(l)){const t=e.get(l),i=this[l];t!==i&&(n.waitUntilFirstUpdate&&!this.hasUpdated||this[s](t,i))}})),l.call(this,e)}}}},7324:(e,t,n)=>{n.d(t,{$:()=>s});var s=n(5024).AH`
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
`},333:(e,t,n)=>{n.d(t,{c:()=>i});var s=n(3280),l=n(5258),i=class extends l.c2{};(0,l.XC)(s.k)},4415:(e,t,n)=>{n.d(t,{Hh:()=>c,cl:()=>a,pA:()=>o});var s=n(4637),l=n(8326),i=[s.q,l.g],r=[];function o(e){r.push(e)}function a(e){r=r.filter((t=>t!==e))}function c(e){return i.find((t=>t.name===e))}},6638:(e,t,n)=>{var s=n(7324),l=n(5024),i=l.AH`
  ${s.$}

  :host {
    display: block;
    user-select: none;
    -webkit-user-select: none;
  }

  :host(:focus) {
    outline: none;
  }

  .option {
    position: relative;
    display: flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-x-small) var(--sl-spacing-medium) var(--sl-spacing-x-small) var(--sl-spacing-x-small);
    transition: var(--sl-transition-fast) fill;
    cursor: pointer;
  }

  .option--hover:not(.option--current):not(.option--disabled) {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  .option--current,
  .option--current.option--disabled {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .option--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .option__label {
    flex: 1 1 auto;
    display: inline-block;
    line-height: var(--sl-line-height-dense);
  }

  .option .option__check {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    padding-inline-end: var(--sl-spacing-2x-small);
  }

  .option--selected .option__check {
    visibility: visible;
  }

  .option__prefix,
  .option__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .option__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .option__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .option {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`,r=n(333),o=n(7352),a=n(5794),c=n(7489),d=n(7012),h=n(3788),u=n(2489),v=class extends c.f{constructor(){super(...arguments),this.localize=new r.c(this),this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){const e=this.getTextLabel();void 0!==this.cachedTextLabel?e!==this.cachedTextLabel&&(this.cachedTextLabel=e,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1})):this.cachedTextLabel=e}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){"string"!=typeof this.value&&(this.value=String(this.value)),this.value.includes(" ")&&(console.error("Option values cannot include a space. All spaces have been replaced with underscores.",this),this.value=this.value.replace(/ /g,"_"))}getTextLabel(){var e;return(null!=(e=this.textContent)?e:"").trim()}render(){return l.qy`
      <div
        part="base"
        class=${(0,h.H)({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};v.styles=i,v.dependencies={"sl-icon":o.B},(0,d.Cc)([(0,u.P)(".option__label")],v.prototype,"defaultSlot",2),(0,d.Cc)([(0,u.wk)()],v.prototype,"current",2),(0,d.Cc)([(0,u.wk)()],v.prototype,"selected",2),(0,d.Cc)([(0,u.wk)()],v.prototype,"hasHover",2),(0,d.Cc)([(0,u.MZ)({reflect:!0})],v.prototype,"value",2),(0,d.Cc)([(0,u.MZ)({type:Boolean,reflect:!0})],v.prototype,"disabled",2),(0,d.Cc)([(0,a.w)("disabled")],v.prototype,"handleDisabledChange",1),(0,d.Cc)([(0,a.w)("selected")],v.prototype,"handleSelectedChange",1),(0,d.Cc)([(0,a.w)("value")],v.prototype,"handleValueChange",1),v.define("sl-option"),n(3280),n(7464),n(4415),n(4637),n(8326)},3348:(e,t,n)=>{n.d(t,{Rt:()=>r,mY:()=>a,qb:()=>i});var s=n(4716),{D:l}=s.ge,i=(e,t)=>void 0===t?void 0!==(null==e?void 0:e._$litType$):(null==e?void 0:e._$litType$)===t,r=e=>void 0===e.strings,o={},a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o;return e._$AH=t}},5128:(e,t,n)=>{n.d(t,{OA:()=>s,WL:()=>i,u$:()=>l});var s={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},l=e=>function(){for(var t=arguments.length,n=new Array(t),s=0;s<t;s++)n[s]=arguments[s];return{_$litDirective$:e,values:n}};class i{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}},3788:(e,t,n)=>{n.d(t,{H:()=>i});var s=n(4716),l=n(5128),i=(0,l.u$)(class extends l.WL{constructor(e){var t;if(super(e),e.type!==l.OA.ATTRIBUTE||"class"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,t){var[n]=t;if(void 0===this.it){for(var l in this.it=new Set,void 0!==e.strings&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e)))),n){var i;n[l]&&(null===(i=this.st)||void 0===i||!i.has(l))&&this.it.add(l)}return this.render(n)}var r=e.element.classList;for(var o of this.it)o in n||(r.remove(o),this.it.delete(o));for(var a in n){var c,d=!!n[a];d===this.it.has(a)||(null===(c=this.st)||void 0===c?void 0:c.has(a))||(d?(r.add(a),this.it.add(a)):(r.remove(a),this.it.delete(a)))}return s.c0}})}}]);
//# sourceMappingURL=sl-option.0ac9b8a4.js.map
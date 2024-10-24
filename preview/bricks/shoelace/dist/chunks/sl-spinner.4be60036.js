"use strict";(globalThis.webpackChunk_next_bricks_shoelace=globalThis.webpackChunk_next_bricks_shoelace||[]).push([[642],{3985:(e,t,r)=>{r.r(t),r(704),r(7901)},7901:(e,t,r)=>{r(8258),r(4804);var o=r(7719);function n(e){document.documentElement.classList["dark"===e||"dark-v2"===e?"add":"remove"]("sl-theme-dark")}r(7422),(0,o.j)(r.p),n(document.documentElement.dataset.theme),window.addEventListener("theme.change",(e=>{n(e.detail)}))},9832:(e,t,r)=>{r.d(t,{A:()=>i});var o=r(6758),n=r.n(o),a=r(935),s=r.n(a)()(n());s.push([e.id,":root,\n.sl-theme-dark{--sl-z-index-drawer:1000;--sl-z-index-dialog:1000;--sl-z-index-dropdown:1050;--sl-z-index-toast:1060;--sl-z-index-tooltip:1070}.sl-toast-stack{width:100%;left:0;right:auto;overflow:initial;pointer-events:none}.sl-toast-stack > sl-alert{pointer-events:all}",""]);const i=s},7422:(e,t,r)=>{var o=r(2591),n=r.n(o),a=r(1740),s=r.n(a),i=r(8128),l=r.n(i),d=r(855),c=r.n(d),m=r(3051),u=r.n(m),h=r(3656),g=r.n(h),p=r(9832),v={};v.styleTagTransform=g(),v.setAttributes=c(),v.insert=l().bind(null,"head"),v.domAPI=s(),v.insertStyleElement=u(),n()(p.A,v),p.A&&p.A.locals&&p.A.locals},5258:(e,t,r)=>{r.d(t,{XC:()=>d,c2:()=>m});const o=new Set,n=new MutationObserver(c),a=new Map;let s,i=document.documentElement.dir||"ltr",l=document.documentElement.lang||navigator.language;function d(...e){e.map((e=>{const t=e.$code.toLowerCase();a.has(t)?a.set(t,Object.assign(Object.assign({},a.get(t)),e)):a.set(t,e),s||(s=e)})),c()}function c(){i=document.documentElement.dir||"ltr",l=document.documentElement.lang||navigator.language,[...o.keys()].map((e=>{"function"==typeof e.requestUpdate&&e.requestUpdate()}))}n.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});class m{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){o.add(this.host)}hostDisconnected(){o.delete(this.host)}dir(){return`${this.host.dir||i}`.toLowerCase()}lang(){return`${this.host.lang||l}`.toLowerCase()}getTranslationData(e){var t,r;const o=new Intl.Locale(e.replace(/_/g,"-")),n=null==o?void 0:o.language.toLowerCase(),s=null!==(r=null===(t=null==o?void 0:o.region)||void 0===t?void 0:t.toLowerCase())&&void 0!==r?r:"";return{locale:o,language:n,region:s,primary:a.get(`${n}-${s}`),secondary:a.get(n)}}exists(e,t){var r;const{primary:o,secondary:n}=this.getTranslationData(null!==(r=t.lang)&&void 0!==r?r:this.lang());return t=Object.assign({includeFallback:!1},t),!!(o&&o[e]||n&&n[e]||t.includeFallback&&s&&s[e])}term(e,...t){const{primary:r,secondary:o}=this.getTranslationData(this.lang());let n;if(r&&r[e])n=r[e];else if(o&&o[e])n=o[e];else{if(!s||!s[e])return console.error(`No translation found for: ${String(e)}`),String(e);n=s[e]}return"function"==typeof n?n(...t):n}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,r){return new Intl.RelativeTimeFormat(this.lang(),r).format(e,t)}}},875:(e,t,r)=>{r.d(t,{$:()=>o});var o=r(5024).AH`
  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
    flex: none;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.05em, 3em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.05em, 3em;
    }
  }
`},9675:(e,t,r)=>{r.d(t,{p:()=>l});var o=r(875),n=r(333),a=r(7324),s=r(8004),i=r(5024),l=class extends s.f{constructor(){super(...arguments),this.localize=new n.c(this)}render(){return i.qy`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};l.styles=[a.$,o.$]},3280:(e,t,r)=>{r.d(t,{k:()=>n});var o={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>0===e?"No options selected":1===e?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};(0,r(5258).XC)(o);var n=o},7324:(e,t,r)=>{r.d(t,{$:()=>o});var o=r(5024).AH`
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
`},333:(e,t,r)=>{r.d(t,{c:()=>a});var o=r(3280),n=r(5258),a=class extends n.c2{};(0,n.XC)(o.k)},704:(e,t,r)=>{r(9675).p.define("sl-spinner"),r(875),r(333),r(3280),r(7324),r(8004),r(1320)}}]);
//# sourceMappingURL=sl-spinner.4be60036.js.map
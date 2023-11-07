"use strict";(self.webpackChunk_next_bricks_shoelace=self.webpackChunk_next_bricks_shoelace||[]).push([[2955],{1629:(e,t,r)=>{r.r(t),r(6409),r(6771)},6771:(e,t,r)=>{r(2969),r(3467);var o=r(4124);function n(e){document.documentElement.classList["dark"===e||"dark-v2"===e?"add":"remove"]("sl-theme-dark")}r(1744),(0,o.t)(r.p),n(document.documentElement.dataset.theme),window.addEventListener("theme.change",(e=>{n(e.detail)}))},738:(e,t,r)=>{r.d(t,{Z:()=>i});var o=r(9601),n=r.n(o),s=r(2609),a=r.n(s)()(n());a.push([e.id,":root,\n.sl-theme-dark{--sl-z-index-drawer:1000;--sl-z-index-dialog:1000;--sl-z-index-dropdown:1050;--sl-z-index-toast:1000;--sl-z-index-tooltip:1070}.sl-toast-stack{width:100%;left:0;right:auto;overflow:initial;pointer-events:none}.sl-toast-stack > sl-alert{pointer-events:all}",""]);const i=a},1744:(e,t,r)=>{var o=r(6062),n=r.n(o),s=r(4036),a=r.n(s),i=r(6793),l=r.n(i),d=r(7892),c=r.n(d),m=r(1173),u=r.n(m),h=r(2464),g=r.n(h),p=r(738),v={};v.styleTagTransform=g(),v.setAttributes=c(),v.insert=l().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=u(),n()(p.Z,v),p.Z&&p.Z.locals&&p.Z.locals},8179:(e,t,r)=>{r.d(t,{P5:()=>d,Ve:()=>m});const o=new Set,n=new MutationObserver(c),s=new Map;let a,i=document.documentElement.dir||"ltr",l=document.documentElement.lang||navigator.language;function d(...e){e.map((e=>{const t=e.$code.toLowerCase();s.has(t)?s.set(t,Object.assign(Object.assign({},s.get(t)),e)):s.set(t,e),a||(a=e)})),c()}function c(){i=document.documentElement.dir||"ltr",l=document.documentElement.lang||navigator.language,[...o.keys()].map((e=>{"function"==typeof e.requestUpdate&&e.requestUpdate()}))}n.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});class m{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){o.add(this.host)}hostDisconnected(){o.delete(this.host)}dir(){return`${this.host.dir||i}`.toLowerCase()}lang(){return`${this.host.lang||l}`.toLowerCase()}getTranslationData(e){var t,r;const o=new Intl.Locale(e),n=null==o?void 0:o.language.toLowerCase(),a=null!==(r=null===(t=null==o?void 0:o.region)||void 0===t?void 0:t.toLowerCase())&&void 0!==r?r:"";return{locale:o,language:n,region:a,primary:s.get(`${n}-${a}`),secondary:s.get(n)}}exists(e,t){var r;const{primary:o,secondary:n}=this.getTranslationData(null!==(r=t.lang)&&void 0!==r?r:this.lang());return t=Object.assign({includeFallback:!1},t),!!(o&&o[e]||n&&n[e]||t.includeFallback&&a&&a[e])}term(e,...t){const{primary:r,secondary:o}=this.getTranslationData(this.lang());let n;if(r&&r[e])n=r[e];else if(o&&o[e])n=o[e];else{if(!a||!a[e])return console.error(`No translation found for: ${String(e)}`),String(e);n=a[e]}return"function"==typeof n?n(...t):n}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,r){return new Intl.RelativeTimeFormat(this.lang(),r).format(e,t)}}},3385:(e,t,r)=>{r.d(t,{V:()=>n});var o=r(8179),n=class extends o.Ve{}},3222:(e,t,r)=>{r.d(t,{A:()=>i});var o=r(6396),n=r(3385),s=r(1465),a=r(8427),i=class extends s.P{constructor(){super(...arguments),this.localize=new n.V(this)}render(){return a.dy`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};i.styles=o.D},6396:(e,t,r)=>{r.d(t,{D:()=>n});var o=r(9710),n=r(8427).iv`
  ${o.N}

  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
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
      stroke-dasharray: 0.01em, 2.75em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.01em, 2.75em;
    }
  }
`},8513:(e,t,r)=>{(0,r(8179).P5)({$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>0===e?"No options selected":1===e?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"})},9710:(e,t,r)=>{r.d(t,{N:()=>o});var o=r(8427).iv`
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
`},6409:(e,t,r)=>{r(3222).A.define("sl-spinner"),r(6396),r(3385),r(8513),r(1465),r(9710),r(7979)}}]);
//# sourceMappingURL=sl-spinner.5da1a88a.js.map
"use strict";(globalThis.webpackChunk_next_bricks_shoelace=globalThis.webpackChunk_next_bricks_shoelace||[]).push([[6997],{7308:(e,t,r)=>{r.r(t),r(6698),r(7901)},7901:(e,t,r)=>{r(8258),r(4804);var a=r(7719);function o(e){document.documentElement.classList["dark"===e||"dark-v2"===e?"add":"remove"]("sl-theme-dark")}r(7422),(0,a.j)(r.p),o(document.documentElement.dataset.theme),window.addEventListener("theme.change",(e=>{o(e.detail)}))},9832:(e,t,r)=>{r.d(t,{A:()=>n});var a=r(6758),o=r.n(a),s=r(935),i=r.n(s)()(o());i.push([e.id,":root,\n.sl-theme-dark{--sl-z-index-drawer:1000;--sl-z-index-dialog:1000;--sl-z-index-dropdown:1050;--sl-z-index-toast:1060;--sl-z-index-tooltip:1070}.sl-toast-stack{width:100%;left:0;right:auto;overflow:initial;pointer-events:none}.sl-toast-stack > sl-alert{pointer-events:all}",""]);const n=i},7422:(e,t,r)=>{var a=r(2591),o=r.n(a),s=r(1740),i=r.n(s),n=r(8128),l=r.n(n),c=r(855),d=r.n(c),u=r(3051),g=r.n(u),h=r(3656),p=r.n(h),m=r(9832),v={};v.styleTagTransform=p(),v.setAttributes=d(),v.insert=l().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=g(),o()(m.A,v),m.A&&m.A.locals&&m.A.locals},5258:(e,t,r)=>{r.d(t,{XC:()=>c,c2:()=>u});const a=new Set,o=new MutationObserver(d),s=new Map;let i,n=document.documentElement.dir||"ltr",l=document.documentElement.lang||navigator.language;function c(...e){e.map((e=>{const t=e.$code.toLowerCase();s.has(t)?s.set(t,Object.assign(Object.assign({},s.get(t)),e)):s.set(t,e),i||(i=e)})),d()}function d(){n=document.documentElement.dir||"ltr",l=document.documentElement.lang||navigator.language,[...a.keys()].map((e=>{"function"==typeof e.requestUpdate&&e.requestUpdate()}))}o.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});class u{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){a.add(this.host)}hostDisconnected(){a.delete(this.host)}dir(){return`${this.host.dir||n}`.toLowerCase()}lang(){return`${this.host.lang||l}`.toLowerCase()}getTranslationData(e){var t,r;const a=new Intl.Locale(e.replace(/_/g,"-")),o=null==a?void 0:a.language.toLowerCase(),i=null!==(r=null===(t=null==a?void 0:a.region)||void 0===t?void 0:t.toLowerCase())&&void 0!==r?r:"";return{locale:a,language:o,region:i,primary:s.get(`${o}-${i}`),secondary:s.get(o)}}exists(e,t){var r;const{primary:a,secondary:o}=this.getTranslationData(null!==(r=t.lang)&&void 0!==r?r:this.lang());return t=Object.assign({includeFallback:!1},t),!!(a&&a[e]||o&&o[e]||t.includeFallback&&i&&i[e])}term(e,...t){const{primary:r,secondary:a}=this.getTranslationData(this.lang());let o;if(r&&r[e])o=r[e];else if(a&&a[e])o=a[e];else{if(!i||!i[e])return console.error(`No translation found for: ${String(e)}`),String(e);o=i[e]}return"function"==typeof o?o(...t):o}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,r){return new Intl.RelativeTimeFormat(this.lang(),r).format(e,t)}}},3280:(e,t,r)=>{r.d(t,{k:()=>o});var a={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>0===e?"No options selected":1===e?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};(0,r(5258).XC)(a);var o=a},7324:(e,t,r)=>{r.d(t,{$:()=>a});var a=r(5024).AH`
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
`},333:(e,t,r)=>{r.d(t,{c:()=>s});var a=r(3280),o=r(5258),s=class extends o.c2{};(0,o.XC)(a.k)},6698:(e,t,r)=>{var a=r(5024),o=a.AH`
  :host {
    --size: 128px;
    --track-width: 4px;
    --track-color: var(--sl-color-neutral-200);
    --indicator-width: var(--track-width);
    --indicator-color: var(--sl-color-primary-600);
    --indicator-transition-duration: 0.35s;

    display: inline-flex;
  }

  .progress-ring {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .progress-ring__image {
    width: var(--size);
    height: var(--size);
    rotate: -90deg;
    transform-origin: 50% 50%;
  }

  .progress-ring__track,
  .progress-ring__indicator {
    --radius: calc(var(--size) / 2 - max(var(--track-width), var(--indicator-width)) * 0.5);
    --circumference: calc(var(--radius) * 2 * 3.141592654);

    fill: none;
    r: var(--radius);
    cx: calc(var(--size) / 2);
    cy: calc(var(--size) / 2);
  }

  .progress-ring__track {
    stroke: var(--track-color);
    stroke-width: var(--track-width);
  }

  .progress-ring__indicator {
    stroke: var(--indicator-color);
    stroke-width: var(--indicator-width);
    stroke-linecap: round;
    transition-property: stroke-dashoffset;
    transition-duration: var(--indicator-transition-duration);
    stroke-dasharray: var(--circumference) var(--circumference);
    stroke-dashoffset: calc(var(--circumference) - var(--percentage) * var(--circumference));
  }

  .progress-ring__label {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    user-select: none;
    -webkit-user-select: none;
  }
`,s=r(333),i=r(7324),n=r(8004),l=r(1320),c=r(8146),d=class extends n.f{constructor(){super(...arguments),this.localize=new s.c(this),this.value=0,this.label=""}updated(e){if(super.updated(e),e.has("value")){const e=parseFloat(getComputedStyle(this.indicator).getPropertyValue("r")),t=2*Math.PI*e,r=t-this.value/100*t;this.indicatorOffset=`${r}px`}}render(){return a.qy`
      <div
        part="base"
        class="progress-ring"
        role="progressbar"
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-describedby="label"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${this.value}"
        style="--percentage: ${this.value/100}"
      >
        <svg class="progress-ring__image">
          <circle class="progress-ring__track"></circle>
          <circle class="progress-ring__indicator" style="stroke-dashoffset: ${this.indicatorOffset}"></circle>
        </svg>

        <slot id="label" part="label" class="progress-ring__label"></slot>
      </div>
    `}};d.styles=[i.$,o],(0,l.Cc)([(0,c.P)(".progress-ring__indicator")],d.prototype,"indicator",2),(0,l.Cc)([(0,c.wk)()],d.prototype,"indicatorOffset",2),(0,l.Cc)([(0,c.MZ)({type:Number,reflect:!0})],d.prototype,"value",2),(0,l.Cc)([(0,c.MZ)()],d.prototype,"label",2),d.define("sl-progress-ring"),r(3280)}}]);
//# sourceMappingURL=sl-progress-ring.9b525190.js.map
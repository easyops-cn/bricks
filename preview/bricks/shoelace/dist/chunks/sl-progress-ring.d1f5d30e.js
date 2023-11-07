"use strict";(self.webpackChunk_next_bricks_shoelace=self.webpackChunk_next_bricks_shoelace||[]).push([[2282],{4328:(e,t,r)=>{r.r(t),r(5208),r(6771)},6771:(e,t,r)=>{r(2969),r(3467);var o=r(4124);function a(e){document.documentElement.classList["dark"===e||"dark-v2"===e?"add":"remove"]("sl-theme-dark")}r(1744),(0,o.t)(r.p),a(document.documentElement.dataset.theme),window.addEventListener("theme.change",(e=>{a(e.detail)}))},738:(e,t,r)=>{r.d(t,{Z:()=>n});var o=r(9601),a=r.n(o),s=r(2609),i=r.n(s)()(a());i.push([e.id,":root,\n.sl-theme-dark{--sl-z-index-drawer:1000;--sl-z-index-dialog:1000;--sl-z-index-dropdown:1050;--sl-z-index-toast:1000;--sl-z-index-tooltip:1070}.sl-toast-stack{width:100%;left:0;right:auto;overflow:initial;pointer-events:none}.sl-toast-stack > sl-alert{pointer-events:all}",""]);const n=i},1744:(e,t,r)=>{var o=r(6062),a=r.n(o),s=r(4036),i=r.n(s),n=r(6793),l=r.n(n),c=r(7892),d=r.n(c),u=r(1173),g=r.n(u),h=r(2464),p=r.n(h),m=r(738),v={};v.styleTagTransform=p(),v.setAttributes=d(),v.insert=l().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=g(),a()(m.Z,v),m.Z&&m.Z.locals&&m.Z.locals},8179:(e,t,r)=>{r.d(t,{P5:()=>c,Ve:()=>u});const o=new Set,a=new MutationObserver(d),s=new Map;let i,n=document.documentElement.dir||"ltr",l=document.documentElement.lang||navigator.language;function c(...e){e.map((e=>{const t=e.$code.toLowerCase();s.has(t)?s.set(t,Object.assign(Object.assign({},s.get(t)),e)):s.set(t,e),i||(i=e)})),d()}function d(){n=document.documentElement.dir||"ltr",l=document.documentElement.lang||navigator.language,[...o.keys()].map((e=>{"function"==typeof e.requestUpdate&&e.requestUpdate()}))}a.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});class u{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){o.add(this.host)}hostDisconnected(){o.delete(this.host)}dir(){return`${this.host.dir||n}`.toLowerCase()}lang(){return`${this.host.lang||l}`.toLowerCase()}getTranslationData(e){var t,r;const o=new Intl.Locale(e),a=null==o?void 0:o.language.toLowerCase(),i=null!==(r=null===(t=null==o?void 0:o.region)||void 0===t?void 0:t.toLowerCase())&&void 0!==r?r:"";return{locale:o,language:a,region:i,primary:s.get(`${a}-${i}`),secondary:s.get(a)}}exists(e,t){var r;const{primary:o,secondary:a}=this.getTranslationData(null!==(r=t.lang)&&void 0!==r?r:this.lang());return t=Object.assign({includeFallback:!1},t),!!(o&&o[e]||a&&a[e]||t.includeFallback&&i&&i[e])}term(e,...t){const{primary:r,secondary:o}=this.getTranslationData(this.lang());let a;if(r&&r[e])a=r[e];else if(o&&o[e])a=o[e];else{if(!i||!i[e])return console.error(`No translation found for: ${String(e)}`),String(e);a=i[e]}return"function"==typeof a?a(...t):a}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,r){return new Intl.RelativeTimeFormat(this.lang(),r).format(e,t)}}},3385:(e,t,r)=>{r.d(t,{V:()=>a});var o=r(8179),a=class extends o.Ve{}},8513:(e,t,r)=>{(0,r(8179).P5)({$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>0===e?"No options selected":1===e?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"})},9710:(e,t,r)=>{r.d(t,{N:()=>o});var o=r(8427).iv`
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
`},5208:(e,t,r)=>{var o=r(9710),a=r(8427),s=a.iv`
  ${o.N}

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
  }
`,i=r(3385),n=r(1465),l=r(7979),c=r(9900),d=class extends n.P{constructor(){super(...arguments),this.localize=new i.V(this),this.value=0,this.label=""}updated(e){if(super.updated(e),e.has("value")){const e=parseFloat(getComputedStyle(this.indicator).getPropertyValue("r")),t=2*Math.PI*e,r=t-this.value/100*t;this.indicatorOffset=`${r}px`}}render(){return a.dy`
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
    `}};d.styles=s,(0,l.u2)([(0,c.IO)(".progress-ring__indicator")],d.prototype,"indicator",2),(0,l.u2)([(0,c.SB)()],d.prototype,"indicatorOffset",2),(0,l.u2)([(0,c.Cb)({type:Number,reflect:!0})],d.prototype,"value",2),(0,l.u2)([(0,c.Cb)()],d.prototype,"label",2),d.define("sl-progress-ring"),r(8513)}}]);
//# sourceMappingURL=sl-progress-ring.d1f5d30e.js.map
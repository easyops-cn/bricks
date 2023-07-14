"use strict";(self.webpackChunk_next_bricks_shoelace=self.webpackChunk_next_bricks_shoelace||[]).push([[2955],{1641:(e,t,r)=>{r.r(t),r(4082),r(5517)},5517:(e,t,r)=>{r(2969),r(3467);var n=r(4124);function o(e){document.documentElement.classList["dark"===e||"dark-v2"===e?"add":"remove"]("sl-theme-dark")}r(1744),(0,n.t)(r.p),o(document.documentElement.dataset.theme),window.addEventListener("theme.change",(e=>{o(e.detail)}))},738:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(9601),o=r.n(n),s=r(2609),a=r.n(s)()(o());a.push([e.id,":root,\n.sl-theme-dark{--sl-z-index-drawer:1000;--sl-z-index-dialog:1000;--sl-z-index-dropdown:1050;--sl-z-index-toast:1000;--sl-z-index-tooltip:1070}.sl-toast-stack{width:100%;left:0;right:auto;overflow:initial;pointer-events:none}.sl-toast-stack > sl-alert{pointer-events:all}",""]);const i=a},1744:(e,t,r)=>{var n=r(6062),o=r.n(n),s=r(4036),a=r.n(s),i=r(6793),l=r.n(i),d=r(7892),c=r.n(d),m=r(1173),u=r.n(m),h=r(2464),g=r.n(h),p=r(738),v={};v.styleTagTransform=g(),v.setAttributes=c(),v.insert=l().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=u(),o()(p.Z,v),p.Z&&p.Z.locals&&p.Z.locals},4082:(e,t,r)=>{var n=r(7979),o=r(3030),s=r(8427),a=r(1321),i=r(5166),l=r(1452),d=s.iv`
  ${l.Z}

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
`;let c=class extends i.Z{constructor(){super(...arguments),this.localize=new a.V(this)}render(){return s.dy`
      <svg part="base" class="spinner" role="progressbar" aria-valuetext=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};c.styles=d,c=(0,n.u2)([(0,o.Mo)("sl-spinner")],c)},1452:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r(8427).iv`
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
`},1321:(e,t,r)=>{r.d(t,{V:()=>m}),r(7979);const n=new Set,o=new MutationObserver(d),s=new Map;let a,i=document.documentElement.dir||"ltr",l=document.documentElement.lang||navigator.language;function d(){i=document.documentElement.dir||"ltr",l=document.documentElement.lang||navigator.language,[...n.keys()].map((e=>{"function"==typeof e.requestUpdate&&e.requestUpdate()}))}o.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});class c{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){n.add(this.host)}hostDisconnected(){n.delete(this.host)}dir(){return`${this.host.dir||i}`.toLowerCase()}lang(){return`${this.host.lang||l}`.toLowerCase()}getTranslationData(e){var t,r;const n=new Intl.Locale(e),o=null==n?void 0:n.language.toLowerCase(),a=null!==(r=null===(t=null==n?void 0:n.region)||void 0===t?void 0:t.toLowerCase())&&void 0!==r?r:"";return{locale:n,language:o,region:a,primary:s.get(`${o}-${a}`),secondary:s.get(o)}}exists(e,t){var r;const{primary:n,secondary:o}=this.getTranslationData(null!==(r=t.lang)&&void 0!==r?r:this.lang());return t=Object.assign({includeFallback:!1},t),!!(n&&n[e]||o&&o[e]||t.includeFallback&&a&&a[e])}term(e,...t){const{primary:r,secondary:n}=this.getTranslationData(this.lang());let o;if(r&&r[e])o=r[e];else if(n&&n[e])o=n[e];else{if(!a||!a[e])return console.error(`No translation found for: ${String(e)}`),String(e);o=a[e]}return"function"==typeof o?o(...t):o}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,r){return new Intl.RelativeTimeFormat(this.lang(),r).format(e,t)}}!function(...e){e.map((e=>{const t=e.$code.toLowerCase();s.has(t)?s.set(t,Object.assign(Object.assign({},s.get(t)),e)):s.set(t,e),a||(a=e)})),d()}({$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copy:"Copy",currentValue:"Current value",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>0===e?"No options selected":1===e?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"});class m extends c{}}}]);
//# sourceMappingURL=sl-spinner.f1176338.js.map
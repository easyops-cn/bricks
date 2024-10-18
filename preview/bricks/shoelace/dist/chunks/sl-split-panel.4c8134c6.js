/*! For license information please see sl-split-panel.4c8134c6.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_next_bricks_shoelace=globalThis.webpackChunk_next_bricks_shoelace||[]).push([[4824],{1011:(e,t,i)=>{i.r(t),i(8848),i(7901)},7901:(e,t,i)=>{i(8258),i(4804);var s=i(7719);function o(e){document.documentElement.classList["dark"===e||"dark-v2"===e?"add":"remove"]("sl-theme-dark")}i(7422),(0,s.j)(i.p),o(document.documentElement.dataset.theme),window.addEventListener("theme.change",(e=>{o(e.detail)}))},9832:(e,t,i)=>{i.d(t,{A:()=>a});var s=i(6758),o=i.n(s),r=i(935),n=i.n(r)()(o());n.push([e.id,":root,\n.sl-theme-dark{--sl-z-index-drawer:1000;--sl-z-index-dialog:1000;--sl-z-index-dropdown:1050;--sl-z-index-toast:1060;--sl-z-index-tooltip:1070}.sl-toast-stack{width:100%;left:0;right:auto;overflow:initial;pointer-events:none}.sl-toast-stack > sl-alert{pointer-events:all}",""]);const a=n},7422:(e,t,i)=>{var s=i(2591),o=i.n(s),r=i(1740),n=i.n(r),a=i(8128),l=i.n(a),d=i(855),c=i.n(d),h=i(3051),p=i.n(h),v=i(3656),u=i.n(v),m=i(9832),g={};g.styleTagTransform=u(),g.setAttributes=c(),g.insert=l().bind(null,"head"),g.domAPI=n(),g.insertStyleElement=p(),o()(m.A,g),m.A&&m.A.locals&&m.A.locals},5258:(e,t,i)=>{i.d(t,{XC:()=>d,c2:()=>h});const s=new Set,o=new MutationObserver(c),r=new Map;let n,a=document.documentElement.dir||"ltr",l=document.documentElement.lang||navigator.language;function d(...e){e.map((e=>{const t=e.$code.toLowerCase();r.has(t)?r.set(t,Object.assign(Object.assign({},r.get(t)),e)):r.set(t,e),n||(n=e)})),c()}function c(){a=document.documentElement.dir||"ltr",l=document.documentElement.lang||navigator.language,[...s.keys()].map((e=>{"function"==typeof e.requestUpdate&&e.requestUpdate()}))}o.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});class h{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){s.add(this.host)}hostDisconnected(){s.delete(this.host)}dir(){return`${this.host.dir||a}`.toLowerCase()}lang(){return`${this.host.lang||l}`.toLowerCase()}getTranslationData(e){var t,i;const s=new Intl.Locale(e.replace(/_/g,"-")),o=null==s?void 0:s.language.toLowerCase(),n=null!==(i=null===(t=null==s?void 0:s.region)||void 0===t?void 0:t.toLowerCase())&&void 0!==i?i:"";return{locale:s,language:o,region:n,primary:r.get(`${o}-${n}`),secondary:r.get(o)}}exists(e,t){var i;const{primary:s,secondary:o}=this.getTranslationData(null!==(i=t.lang)&&void 0!==i?i:this.lang());return t=Object.assign({includeFallback:!1},t),!!(s&&s[e]||o&&o[e]||t.includeFallback&&n&&n[e])}term(e,...t){const{primary:i,secondary:s}=this.getTranslationData(this.lang());let o;if(i&&i[e])o=i[e];else if(s&&s[e])o=s[e];else{if(!n||!n[e])return console.error(`No translation found for: ${String(e)}`),String(e);o=n[e]}return"function"==typeof o?o(...t):o}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(e,t)}}},5752:(e,t,i)=>{i.d(t,{w:()=>o});var s=i(1320);function o(e,t){const i=(0,s.IA)({waitUntilFirstUpdate:!1},t);return(t,s)=>{const{update:o}=t,r=Array.isArray(e)?e:[e];t.update=function(e){r.forEach((t=>{const o=t;if(e.has(o)){const t=e.get(o),r=this[o];t!==r&&(i.waitUntilFirstUpdate&&!this.hasUpdated||this[s](t,r))}})),o.call(this,e)}}}},4319:(e,t,i)=>{function s(e,t){function i(i){const s=e.getBoundingClientRect(),o=e.ownerDocument.defaultView,r=s.left+o.scrollX,n=s.top+o.scrollY,a=i.pageX-r,l=i.pageY-n;(null==t?void 0:t.onMove)&&t.onMove(a,l)}document.addEventListener("pointermove",i,{passive:!0}),document.addEventListener("pointerup",(function e(){document.removeEventListener("pointermove",i),document.removeEventListener("pointerup",e),(null==t?void 0:t.onStop)&&t.onStop()})),(null==t?void 0:t.initialEvent)instanceof PointerEvent&&i(t.initialEvent)}i.d(t,{$:()=>s})},9162:(e,t,i)=>{function s(e,t,i){return s=e<t?t:e>i?i:e,Object.is(s,-0)?0:s;var s}i.d(t,{q:()=>s})},3280:(e,t,i)=>{i.d(t,{k:()=>o});var s={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>0===e?"No options selected":1===e?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};(0,i(5258).XC)(s);var o=s},7324:(e,t,i)=>{i.d(t,{$:()=>s});var s=i(5024).AH`
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
`},333:(e,t,i)=>{i.d(t,{c:()=>r});var s=i(3280),o=i(5258),r=class extends o.c2{};(0,o.XC)(s.k)},8848:(e,t,i)=>{var s=i(5024),o=s.AH`
  :host {
    --divider-width: 4px;
    --divider-hit-area: 12px;
    --min: 0%;
    --max: 100%;

    display: grid;
  }

  .start,
  .end {
    overflow: hidden;
  }

  .divider {
    flex: 0 0 var(--divider-width);
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    background-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-900);
    z-index: 1;
  }

  .divider:focus {
    outline: none;
  }

  :host(:not([disabled])) .divider:focus-visible {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  :host([disabled]) .divider {
    cursor: not-allowed;
  }

  /* Horizontal */
  :host(:not([vertical], [disabled])) .divider {
    cursor: col-resize;
  }

  :host(:not([vertical])) .divider::after {
    display: flex;
    content: '';
    position: absolute;
    height: 100%;
    left: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    width: var(--divider-hit-area);
  }

  /* Vertical */
  :host([vertical]) {
    flex-direction: column;
  }

  :host([vertical]:not([disabled])) .divider {
    cursor: row-resize;
  }

  :host([vertical]) .divider::after {
    content: '';
    position: absolute;
    width: 100%;
    top: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    height: var(--divider-hit-area);
  }

  @media (forced-colors: active) {
    .divider {
      outline: solid 1px transparent;
    }
  }
`,r=i(4319),n=i(9162),a=i(333),l=i(5752),d=i(7324),c=i(8004),h=i(1320),p=i(996),v=i(8146),u=class extends c.f{constructor(){super(...arguments),this.localize=new a.c(this),this.position=50,this.vertical=!1,this.disabled=!1,this.snapThreshold=12}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver((e=>this.handleResize(e))),this.updateComplete.then((()=>this.resizeObserver.observe(this))),this.detectSize(),this.cachedPositionInPixels=this.percentageToPixels(this.position)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this)}detectSize(){const{width:e,height:t}=this.getBoundingClientRect();this.size=this.vertical?t:e}percentageToPixels(e){return this.size*(e/100)}pixelsToPercentage(e){return e/this.size*100}handleDrag(e){const t="rtl"===this.localize.dir();this.disabled||(e.cancelable&&e.preventDefault(),(0,r.$)(this,{onMove:(e,i)=>{let s=this.vertical?i:e;"end"===this.primary&&(s=this.size-s),this.snap&&this.snap.split(" ").forEach((e=>{let i;i=e.endsWith("%")?this.size*(parseFloat(e)/100):parseFloat(e),t&&!this.vertical&&(i=this.size-i),s>=i-this.snapThreshold&&s<=i+this.snapThreshold&&(s=i)})),this.position=(0,n.q)(this.pixelsToPercentage(s),0,100)},initialEvent:e}))}handleKeyDown(e){if(!this.disabled&&["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key)){let t=this.position;const i=(e.shiftKey?10:1)*("end"===this.primary?-1:1);e.preventDefault(),("ArrowLeft"===e.key&&!this.vertical||"ArrowUp"===e.key&&this.vertical)&&(t-=i),("ArrowRight"===e.key&&!this.vertical||"ArrowDown"===e.key&&this.vertical)&&(t+=i),"Home"===e.key&&(t="end"===this.primary?100:0),"End"===e.key&&(t="end"===this.primary?0:100),this.position=(0,n.q)(t,0,100)}}handleResize(e){const{width:t,height:i}=e[0].contentRect;this.size=this.vertical?i:t,(isNaN(this.cachedPositionInPixels)||this.position===1/0)&&(this.cachedPositionInPixels=Number(this.getAttribute("position-in-pixels")),this.positionInPixels=Number(this.getAttribute("position-in-pixels")),this.position=this.pixelsToPercentage(this.positionInPixels)),this.primary&&(this.position=this.pixelsToPercentage(this.cachedPositionInPixels))}handlePositionChange(){this.cachedPositionInPixels=this.percentageToPixels(this.position),this.positionInPixels=this.percentageToPixels(this.position),this.emit("sl-reposition")}handlePositionInPixelsChange(){this.position=this.pixelsToPercentage(this.positionInPixels)}handleVerticalChange(){this.detectSize()}render(){const e=this.vertical?"gridTemplateRows":"gridTemplateColumns",t=this.vertical?"gridTemplateColumns":"gridTemplateRows",i="rtl"===this.localize.dir(),o=`\n      clamp(\n        0%,\n        clamp(\n          var(--min),\n          ${this.position}% - var(--divider-width) / 2,\n          var(--max)\n        ),\n        calc(100% - var(--divider-width))\n      )\n    `,r="auto";return"end"===this.primary?i&&!this.vertical?this.style[e]=`${o} var(--divider-width) ${r}`:this.style[e]=`${r} var(--divider-width) ${o}`:i&&!this.vertical?this.style[e]=`${r} var(--divider-width) ${o}`:this.style[e]=`${o} var(--divider-width) ${r}`,this.style[t]="",s.qy`
      <slot name="start" part="panel start" class="start"></slot>

      <div
        part="divider"
        class="divider"
        tabindex=${(0,p.J)(this.disabled?void 0:"0")}
        role="separator"
        aria-valuenow=${this.position}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label=${this.localize.term("resize")}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleDrag}
        @touchstart=${this.handleDrag}
      >
        <slot name="divider"></slot>
      </div>

      <slot name="end" part="panel end" class="end"></slot>
    `}};u.styles=[d.$,o],(0,h.Cc)([(0,v.P)(".divider")],u.prototype,"divider",2),(0,h.Cc)([(0,v.MZ)({type:Number,reflect:!0})],u.prototype,"position",2),(0,h.Cc)([(0,v.MZ)({attribute:"position-in-pixels",type:Number})],u.prototype,"positionInPixels",2),(0,h.Cc)([(0,v.MZ)({type:Boolean,reflect:!0})],u.prototype,"vertical",2),(0,h.Cc)([(0,v.MZ)({type:Boolean,reflect:!0})],u.prototype,"disabled",2),(0,h.Cc)([(0,v.MZ)()],u.prototype,"primary",2),(0,h.Cc)([(0,v.MZ)()],u.prototype,"snap",2),(0,h.Cc)([(0,v.MZ)({type:Number,attribute:"snap-threshold"})],u.prototype,"snapThreshold",2),(0,h.Cc)([(0,l.w)("position")],u.prototype,"handlePositionChange",1),(0,h.Cc)([(0,l.w)("positionInPixels")],u.prototype,"handlePositionInPixelsChange",1),(0,h.Cc)([(0,l.w)("vertical")],u.prototype,"handleVerticalChange",1),u.define("sl-split-panel"),i(3280)},996:(e,t,i)=>{i.d(t,{J:()=>o});var s=i(4716);const o=e=>e??s.s6}}]);
//# sourceMappingURL=sl-split-panel.4c8134c6.js.map
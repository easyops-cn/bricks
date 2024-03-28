"use strict";(self.webpackChunk_next_bricks_shoelace=self.webpackChunk_next_bricks_shoelace||[]).push([[4824],{1011:(e,t,i)=>{i.r(t),i(562),i(7901)},7901:(e,t,i)=>{i(8258),i(4804);var o=i(7719);function s(e){document.documentElement.classList["dark"===e||"dark-v2"===e?"add":"remove"]("sl-theme-dark")}i(7422),(0,o.j)(i.p),s(document.documentElement.dataset.theme),window.addEventListener("theme.change",(e=>{s(e.detail)}))},9832:(e,t,i)=>{i.d(t,{A:()=>a});var o=i(6758),s=i.n(o),r=i(935),n=i.n(r)()(s());n.push([e.id,":root,\n.sl-theme-dark{--sl-z-index-drawer:1000;--sl-z-index-dialog:1000;--sl-z-index-dropdown:1050;--sl-z-index-toast:1001;--sl-z-index-tooltip:1070}.sl-toast-stack{width:100%;left:0;right:auto;overflow:initial;pointer-events:none}.sl-toast-stack > sl-alert{pointer-events:all}",""]);const a=n},7422:(e,t,i)=>{var o=i(2591),s=i.n(o),r=i(1740),n=i.n(r),a=i(8128),l=i.n(a),d=i(855),c=i.n(d),h=i(3051),p=i.n(h),v=i(3656),u=i.n(v),m=i(9832),g={};g.styleTagTransform=u(),g.setAttributes=c(),g.insert=l().bind(null,"head"),g.domAPI=n(),g.insertStyleElement=p(),s()(m.A,g),m.A&&m.A.locals&&m.A.locals},5258:(e,t,i)=>{i.d(t,{XC:()=>d,c2:()=>h});const o=new Set,s=new MutationObserver(c),r=new Map;let n,a=document.documentElement.dir||"ltr",l=document.documentElement.lang||navigator.language;function d(...e){e.map((e=>{const t=e.$code.toLowerCase();r.has(t)?r.set(t,Object.assign(Object.assign({},r.get(t)),e)):r.set(t,e),n||(n=e)})),c()}function c(){a=document.documentElement.dir||"ltr",l=document.documentElement.lang||navigator.language,[...o.keys()].map((e=>{"function"==typeof e.requestUpdate&&e.requestUpdate()}))}s.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});class h{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){o.add(this.host)}hostDisconnected(){o.delete(this.host)}dir(){return`${this.host.dir||a}`.toLowerCase()}lang(){return`${this.host.lang||l}`.toLowerCase()}getTranslationData(e){var t,i;const o=new Intl.Locale(e.replace(/_/g,"-")),s=null==o?void 0:o.language.toLowerCase(),n=null!==(i=null===(t=null==o?void 0:o.region)||void 0===t?void 0:t.toLowerCase())&&void 0!==i?i:"";return{locale:o,language:s,region:n,primary:r.get(`${s}-${n}`),secondary:r.get(s)}}exists(e,t){var i;const{primary:o,secondary:s}=this.getTranslationData(null!==(i=t.lang)&&void 0!==i?i:this.lang());return t=Object.assign({includeFallback:!1},t),!!(o&&o[e]||s&&s[e]||t.includeFallback&&n&&n[e])}term(e,...t){const{primary:i,secondary:o}=this.getTranslationData(this.lang());let s;if(i&&i[e])s=i[e];else if(o&&o[e])s=o[e];else{if(!n||!n[e])return console.error(`No translation found for: ${String(e)}`),String(e);s=n[e]}return"function"==typeof s?s(...t):s}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(e,t)}}},4319:(e,t,i)=>{function o(e,t){function i(i){const o=e.getBoundingClientRect(),s=e.ownerDocument.defaultView,r=o.left+s.scrollX,n=o.top+s.scrollY,a=i.pageX-r,l=i.pageY-n;(null==t?void 0:t.onMove)&&t.onMove(a,l)}document.addEventListener("pointermove",i,{passive:!0}),document.addEventListener("pointerup",(function e(){document.removeEventListener("pointermove",i),document.removeEventListener("pointerup",e),(null==t?void 0:t.onStop)&&t.onStop()})),(null==t?void 0:t.initialEvent)instanceof PointerEvent&&i(t.initialEvent)}i.d(t,{$:()=>o})},9162:(e,t,i)=>{function o(e,t,i){return o=e<t?t:e>i?i:e,Object.is(o,-0)?0:o;var o}i.d(t,{q:()=>o})},3280:(e,t,i)=>{i.d(t,{k:()=>s});var o={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>0===e?"No options selected":1===e?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};(0,i(5258).XC)(o);var s=o},5794:(e,t,i)=>{i.d(t,{w:()=>s});var o=i(7012);function s(e,t){const i=(0,o.IA)({waitUntilFirstUpdate:!1},t);return(t,o)=>{const{update:s}=t,r=Array.isArray(e)?e:[e];t.update=function(e){r.forEach((t=>{const s=t;if(e.has(s)){const t=e.get(s),r=this[s];t!==r&&(i.waitUntilFirstUpdate&&!this.hasUpdated||this[o](t,r))}})),s.call(this,e)}}}},7324:(e,t,i)=>{i.d(t,{$:()=>o});var o=i(5024).AH`
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
`},333:(e,t,i)=>{i.d(t,{c:()=>r});var o=i(3280),s=i(5258),r=class extends s.c2{};(0,s.XC)(o.k)},562:(e,t,i)=>{var o=i(7324),s=i(5024),r=s.AH`
  ${o.$}

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
`,n=i(4319),a=i(9162),l=i(333),d=i(5794),c=i(7489),h=i(7012),p=i(996),v=i(2489),u=class extends c.f{constructor(){super(...arguments),this.localize=new l.c(this),this.position=50,this.vertical=!1,this.disabled=!1,this.snapThreshold=12}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver((e=>this.handleResize(e))),this.updateComplete.then((()=>this.resizeObserver.observe(this))),this.detectSize(),this.cachedPositionInPixels=this.percentageToPixels(this.position)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this)}detectSize(){const{width:e,height:t}=this.getBoundingClientRect();this.size=this.vertical?t:e}percentageToPixels(e){return this.size*(e/100)}pixelsToPercentage(e){return e/this.size*100}handleDrag(e){const t="rtl"===this.localize.dir();this.disabled||(e.cancelable&&e.preventDefault(),(0,n.$)(this,{onMove:(e,i)=>{let o=this.vertical?i:e;"end"===this.primary&&(o=this.size-o),this.snap&&this.snap.split(" ").forEach((e=>{let i;i=e.endsWith("%")?this.size*(parseFloat(e)/100):parseFloat(e),t&&!this.vertical&&(i=this.size-i),o>=i-this.snapThreshold&&o<=i+this.snapThreshold&&(o=i)})),this.position=(0,a.q)(this.pixelsToPercentage(o),0,100)},initialEvent:e}))}handleKeyDown(e){if(!this.disabled&&["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key)){let t=this.position;const i=(e.shiftKey?10:1)*("end"===this.primary?-1:1);e.preventDefault(),("ArrowLeft"===e.key&&!this.vertical||"ArrowUp"===e.key&&this.vertical)&&(t-=i),("ArrowRight"===e.key&&!this.vertical||"ArrowDown"===e.key&&this.vertical)&&(t+=i),"Home"===e.key&&(t="end"===this.primary?100:0),"End"===e.key&&(t="end"===this.primary?0:100),this.position=(0,a.q)(t,0,100)}}handleResize(e){const{width:t,height:i}=e[0].contentRect;this.size=this.vertical?i:t,this.primary&&(this.position=this.pixelsToPercentage(this.cachedPositionInPixels))}handlePositionChange(){this.cachedPositionInPixels=this.percentageToPixels(this.position),this.positionInPixels=this.percentageToPixels(this.position),this.emit("sl-reposition")}handlePositionInPixelsChange(){this.position=this.pixelsToPercentage(this.positionInPixels)}handleVerticalChange(){this.detectSize()}render(){const e=this.vertical?"gridTemplateRows":"gridTemplateColumns",t=this.vertical?"gridTemplateColumns":"gridTemplateRows",i="rtl"===this.localize.dir(),o=`\n      clamp(\n        0%,\n        clamp(\n          var(--min),\n          ${this.position}% - var(--divider-width) / 2,\n          var(--max)\n        ),\n        calc(100% - var(--divider-width))\n      )\n    `,r="auto";return"end"===this.primary?i&&!this.vertical?this.style[e]=`${o} var(--divider-width) ${r}`:this.style[e]=`${r} var(--divider-width) ${o}`:i&&!this.vertical?this.style[e]=`${r} var(--divider-width) ${o}`:this.style[e]=`${o} var(--divider-width) ${r}`,this.style[t]="",s.qy`
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
    `}};u.styles=r,(0,h.Cc)([(0,v.P)(".divider")],u.prototype,"divider",2),(0,h.Cc)([(0,v.MZ)({type:Number,reflect:!0})],u.prototype,"position",2),(0,h.Cc)([(0,v.MZ)({attribute:"position-in-pixels",type:Number})],u.prototype,"positionInPixels",2),(0,h.Cc)([(0,v.MZ)({type:Boolean,reflect:!0})],u.prototype,"vertical",2),(0,h.Cc)([(0,v.MZ)({type:Boolean,reflect:!0})],u.prototype,"disabled",2),(0,h.Cc)([(0,v.MZ)()],u.prototype,"primary",2),(0,h.Cc)([(0,v.MZ)()],u.prototype,"snap",2),(0,h.Cc)([(0,v.MZ)({type:Number,attribute:"snap-threshold"})],u.prototype,"snapThreshold",2),(0,h.Cc)([(0,d.w)("position")],u.prototype,"handlePositionChange",1),(0,h.Cc)([(0,d.w)("positionInPixels")],u.prototype,"handlePositionInPixelsChange",1),(0,h.Cc)([(0,d.w)("vertical")],u.prototype,"handleVerticalChange",1),u.define("sl-split-panel"),i(3280)},996:(e,t,i)=>{i.d(t,{J:()=>s});var o=i(4716),s=e=>null!=e?e:o.s6}}]);
//# sourceMappingURL=sl-split-panel.b9c2e867.js.map
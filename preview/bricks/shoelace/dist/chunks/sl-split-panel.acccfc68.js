/*! For license information please see sl-split-panel.acccfc68.js.LICENSE.txt */
"use strict";(self.webpackChunk_next_bricks_shoelace=self.webpackChunk_next_bricks_shoelace||[]).push([[3845],{7019:(e,t,i)=>{i.r(t),i(1953),i(5517)},5517:(e,t,i)=>{i(2969),i(3467);var o=i(4124);function s(e){document.documentElement.classList["dark"===e||"dark-v2"===e?"add":"remove"]("sl-theme-dark")}i(1744),(0,o.t)(i.p),s(document.documentElement.dataset.theme),window.addEventListener("theme.change",(e=>{s(e.detail)}))},738:(e,t,i)=>{i.d(t,{Z:()=>a});var o=i(9601),s=i.n(o),n=i(2609),r=i.n(n)()(s());r.push([e.id,":root,\n.sl-theme-dark{--sl-z-index-drawer:1000;--sl-z-index-dialog:1000;--sl-z-index-dropdown:1050;--sl-z-index-toast:1000;--sl-z-index-tooltip:1070}.sl-toast-stack{width:100%;left:0;right:auto;overflow:initial;pointer-events:none}.sl-toast-stack > sl-alert{pointer-events:all}",""]);const a=r},1744:(e,t,i)=>{var o=i(6062),s=i.n(o),n=i(4036),r=i.n(n),a=i(6793),l=i.n(a),d=i(7892),c=i.n(d),h=i(1173),p=i.n(h),u=i(2464),v=i.n(u),m=i(738),g={};g.styleTagTransform=v(),g.setAttributes=c(),g.insert=l().bind(null,"head"),g.domAPI=r(),g.insertStyleElement=p(),s()(m.Z,g),m.Z&&m.Z.locals&&m.Z.locals},1953:(e,t,i)=>{var o=i(7979),s=i(3409),n=i(3030),r=i(8383),a=i(8427),l=i(2747),d=i(1321),c=i(3005),h=i(5166),p=i(1452),u=a.iv`
  ${p.Z}

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
`;let v=class extends h.Z{constructor(){super(...arguments),this.localize=new d.V(this),this.position=50,this.vertical=!1,this.disabled=!1,this.snapThreshold=12}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver((e=>this.handleResize(e))),this.updateComplete.then((()=>this.resizeObserver.observe(this))),this.detectSize(),this.cachedPositionInPixels=this.percentageToPixels(this.position)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this)}detectSize(){const{width:e,height:t}=this.getBoundingClientRect();this.size=this.vertical?t:e}percentageToPixels(e){return this.size*(e/100)}pixelsToPercentage(e){return e/this.size*100}handleDrag(e){const t="rtl"===this.localize.dir();this.disabled||(e.cancelable&&e.preventDefault(),(0,r.o)(this,{onMove:(e,i)=>{let o=this.vertical?i:e;"end"===this.primary&&(o=this.size-o),this.snap&&this.snap.split(" ").forEach((e=>{let i;i=e.endsWith("%")?this.size*(parseFloat(e)/100):parseFloat(e),t&&!this.vertical&&(i=this.size-i),o>=i-this.snapThreshold&&o<=i+this.snapThreshold&&(o=i)})),this.position=(0,s.u)(this.pixelsToPercentage(o),0,100)},initialEvent:e}))}handleKeyDown(e){if(!this.disabled&&["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key)){let t=this.position;const i=(e.shiftKey?10:1)*("end"===this.primary?-1:1);e.preventDefault(),("ArrowLeft"===e.key&&!this.vertical||"ArrowUp"===e.key&&this.vertical)&&(t-=i),("ArrowRight"===e.key&&!this.vertical||"ArrowDown"===e.key&&this.vertical)&&(t+=i),"Home"===e.key&&(t="end"===this.primary?100:0),"End"===e.key&&(t="end"===this.primary?0:100),this.position=(0,s.u)(t,0,100)}}handleResize(e){const{width:t,height:i}=e[0].contentRect;this.size=this.vertical?i:t,this.primary&&(this.position=this.pixelsToPercentage(this.cachedPositionInPixels))}handlePositionChange(){this.cachedPositionInPixels=this.percentageToPixels(this.position),this.positionInPixels=this.percentageToPixels(this.position),this.emit("sl-reposition")}handlePositionInPixelsChange(){this.position=this.pixelsToPercentage(this.positionInPixels)}handleVerticalChange(){this.detectSize()}render(){const e=this.vertical?"gridTemplateRows":"gridTemplateColumns",t=this.vertical?"gridTemplateColumns":"gridTemplateRows",i="rtl"===this.localize.dir(),o=`\n      clamp(\n        0%,\n        clamp(\n          var(--min),\n          ${this.position}% - var(--divider-width) / 2,\n          var(--max)\n        ),\n        calc(100% - var(--divider-width))\n      )\n    `,s="auto";return"end"===this.primary?i&&!this.vertical?this.style[e]=`${o} var(--divider-width) ${s}`:this.style[e]=`${s} var(--divider-width) ${o}`:i&&!this.vertical?this.style[e]=`${s} var(--divider-width) ${o}`:this.style[e]=`${o} var(--divider-width) ${s}`,this.style[t]="",a.dy`
      <slot name="start" part="panel start" class="start"></slot>

      <div
        part="divider"
        class="divider"
        tabindex=${(0,l.o)(this.disabled?void 0:"0")}
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
    `}};v.styles=u,(0,o.u2)([(0,n.IO)(".divider")],v.prototype,"divider",2),(0,o.u2)([(0,n.Cb)({type:Number,reflect:!0})],v.prototype,"position",2),(0,o.u2)([(0,n.Cb)({attribute:"position-in-pixels",type:Number})],v.prototype,"positionInPixels",2),(0,o.u2)([(0,n.Cb)({type:Boolean,reflect:!0})],v.prototype,"vertical",2),(0,o.u2)([(0,n.Cb)({type:Boolean,reflect:!0})],v.prototype,"disabled",2),(0,o.u2)([(0,n.Cb)()],v.prototype,"primary",2),(0,o.u2)([(0,n.Cb)()],v.prototype,"snap",2),(0,o.u2)([(0,n.Cb)({type:Number,attribute:"snap-threshold"})],v.prototype,"snapThreshold",2),(0,o.u2)([(0,c.Y)("position")],v.prototype,"handlePositionChange",1),(0,o.u2)([(0,c.Y)("positionInPixels")],v.prototype,"handlePositionInPixelsChange",1),(0,o.u2)([(0,c.Y)("vertical")],v.prototype,"handleVerticalChange",1),v=(0,o.u2)([(0,n.Mo)("sl-split-panel")],v)},8383:(e,t,i)=>{function o(e,t){function i(i){const o=e.getBoundingClientRect(),s=e.ownerDocument.defaultView,n=o.left+s.pageXOffset,r=o.top+s.pageYOffset,a=i.pageX-n,l=i.pageY-r;(null==t?void 0:t.onMove)&&t.onMove(a,l)}document.addEventListener("pointermove",i,{passive:!0}),document.addEventListener("pointerup",(function e(){document.removeEventListener("pointermove",i),document.removeEventListener("pointerup",e),(null==t?void 0:t.onStop)&&t.onStop()})),(null==t?void 0:t.initialEvent)instanceof PointerEvent&&i(t.initialEvent)}i.d(t,{o:()=>o})},3409:(e,t,i)=>{function o(e,t,i){return o=e<t?t:e>i?i:e,Object.is(o,-0)?0:o;var o}i.d(t,{u:()=>o})},3005:(e,t,i)=>{function o(e,t){const i=Object.assign({waitUntilFirstUpdate:!1},t);return(t,o)=>{const{update:s}=t,n=Array.isArray(e)?e:[e];t.update=function(e){n.forEach((t=>{const s=t;if(e.has(s)){const t=e.get(s),n=this[s];t!==n&&(i.waitUntilFirstUpdate&&!this.hasUpdated||this[o](t,n))}})),s.call(this,e)}}}i.d(t,{Y:()=>o})},1452:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i(8427).iv`
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
`},1321:(e,t,i)=>{i.d(t,{V:()=>h}),i(7979);const o=new Set,s=new MutationObserver(d),n=new Map;let r,a=document.documentElement.dir||"ltr",l=document.documentElement.lang||navigator.language;function d(){a=document.documentElement.dir||"ltr",l=document.documentElement.lang||navigator.language,[...o.keys()].map((e=>{"function"==typeof e.requestUpdate&&e.requestUpdate()}))}s.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});class c{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){o.add(this.host)}hostDisconnected(){o.delete(this.host)}dir(){return`${this.host.dir||a}`.toLowerCase()}lang(){return`${this.host.lang||l}`.toLowerCase()}getTranslationData(e){var t,i;const o=new Intl.Locale(e),s=null==o?void 0:o.language.toLowerCase(),r=null!==(i=null===(t=null==o?void 0:o.region)||void 0===t?void 0:t.toLowerCase())&&void 0!==i?i:"";return{locale:o,language:s,region:r,primary:n.get(`${s}-${r}`),secondary:n.get(s)}}exists(e,t){var i;const{primary:o,secondary:s}=this.getTranslationData(null!==(i=t.lang)&&void 0!==i?i:this.lang());return t=Object.assign({includeFallback:!1},t),!!(o&&o[e]||s&&s[e]||t.includeFallback&&r&&r[e])}term(e,...t){const{primary:i,secondary:o}=this.getTranslationData(this.lang());let s;if(i&&i[e])s=i[e];else if(o&&o[e])s=o[e];else{if(!r||!r[e])return console.error(`No translation found for: ${String(e)}`),String(e);s=r[e]}return"function"==typeof s?s(...t):s}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(e,t)}}!function(...e){e.map((e=>{const t=e.$code.toLowerCase();n.has(t)?n.set(t,Object.assign(Object.assign({},n.get(t)),e)):n.set(t,e),r||(r=e)})),d()}({$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copy:"Copy",currentValue:"Current value",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>0===e?"No options selected":1===e?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"});class h extends c{}},2747:(e,t,i)=>{i.d(t,{o:()=>s});var o=i(3311);const s=e=>null!=e?e:o.Ld}}]);
//# sourceMappingURL=sl-split-panel.acccfc68.js.map
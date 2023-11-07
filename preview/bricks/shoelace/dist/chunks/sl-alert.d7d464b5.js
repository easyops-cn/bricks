"use strict";(self.webpackChunk_next_bricks_shoelace=self.webpackChunk_next_bricks_shoelace||[]).push([[9774],{8438:(e,t,o)=>{o.r(t),o(3303),o(6771)},6771:(e,t,o)=>{o(2969),o(3467);var r=o(4124);function s(e){document.documentElement.classList["dark"===e||"dark-v2"===e?"add":"remove"]("sl-theme-dark")}o(1744),(0,r.t)(o.p),s(document.documentElement.dataset.theme),window.addEventListener("theme.change",(e=>{s(e.detail)}))},738:(e,t,o)=>{o.d(t,{Z:()=>i});var r=o(9601),s=o.n(r),a=o(2609),n=o.n(a)()(s());n.push([e.id,":root,\n.sl-theme-dark{--sl-z-index-drawer:1000;--sl-z-index-dialog:1000;--sl-z-index-dropdown:1050;--sl-z-index-toast:1000;--sl-z-index-tooltip:1070}.sl-toast-stack{width:100%;left:0;right:auto;overflow:initial;pointer-events:none}.sl-toast-stack > sl-alert{pointer-events:all}",""]);const i=n},1744:(e,t,o)=>{var r=o(6062),s=o.n(r),a=o(4036),n=o.n(a),i=o(6793),l=o.n(i),d=o(7892),c=o.n(d),h=o(1173),u=o.n(h),m=o(2464),p=o.n(m),g=o(738),f={};f.styleTagTransform=p(),f.setAttributes=c(),f.insert=l().bind(null,"head"),f.domAPI=n(),f.insertStyleElement=u(),s()(g.Z,f),g.Z&&g.Z.locals&&g.Z.locals},8179:(e,t,o)=>{o.d(t,{P5:()=>d,Ve:()=>h});const r=new Set,s=new MutationObserver(c),a=new Map;let n,i=document.documentElement.dir||"ltr",l=document.documentElement.lang||navigator.language;function d(...e){e.map((e=>{const t=e.$code.toLowerCase();a.has(t)?a.set(t,Object.assign(Object.assign({},a.get(t)),e)):a.set(t,e),n||(n=e)})),c()}function c(){i=document.documentElement.dir||"ltr",l=document.documentElement.lang||navigator.language,[...r.keys()].map((e=>{"function"==typeof e.requestUpdate&&e.requestUpdate()}))}s.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});class h{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){r.add(this.host)}hostDisconnected(){r.delete(this.host)}dir(){return`${this.host.dir||i}`.toLowerCase()}lang(){return`${this.host.lang||l}`.toLowerCase()}getTranslationData(e){var t,o;const r=new Intl.Locale(e),s=null==r?void 0:r.language.toLowerCase(),n=null!==(o=null===(t=null==r?void 0:r.region)||void 0===t?void 0:t.toLowerCase())&&void 0!==o?o:"";return{locale:r,language:s,region:n,primary:a.get(`${s}-${n}`),secondary:a.get(s)}}exists(e,t){var o;const{primary:r,secondary:s}=this.getTranslationData(null!==(o=t.lang)&&void 0!==o?o:this.lang());return t=Object.assign({includeFallback:!1},t),!!(r&&r[e]||s&&s[e]||t.includeFallback&&n&&n[e])}term(e,...t){const{primary:o,secondary:r}=this.getTranslationData(this.lang());let s;if(o&&o[e])s=o[e];else if(r&&r[e])s=r[e];else{if(!n||!n[e])return console.error(`No translation found for: ${String(e)}`),String(e);s=n[e]}return"function"==typeof s?s(...t):s}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(e,t)}}},3385:(e,t,o)=>{o.d(t,{V:()=>s});var r=o(8179),s=class extends r.Ve{}},4867:(e,t,o)=>{function r(e,t){return new Promise((o=>{e.addEventListener(t,(function r(s){s.target===e&&(e.removeEventListener(t,r),o())}))}))}o.d(t,{m:()=>r})},8513:(e,t,o)=>{(0,o(8179).P5)({$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>0===e?"No options selected":1===e?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"})},6167:(e,t,o)=>{o.d(t,{F:()=>s,r:()=>r});var r=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=e=>{const t=e.target;(this.slotNames.includes("[default]")&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some((e=>{if(e.nodeType===e.TEXT_NODE&&""!==e.textContent.trim())return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if("sl-visually-hidden"===t.tagName.toLowerCase())return!1;if(!t.hasAttribute("slot"))return!0}return!1}))}hasNamedSlot(e){return null!==this.host.querySelector(`:scope > [slot="${e}"]`)}test(e){return"[default]"===e?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};function s(e){if(!e)return"";const t=e.assignedNodes({flatten:!0});let o="";return[...t].forEach((e=>{e.nodeType===Node.TEXT_NODE&&(o+=e.textContent)})),o}},391:(e,t,o)=>{o.d(t,{O8:()=>i,jx:()=>n}),o(7979);var r=new Map,s=new WeakMap;function a(e,t){return"rtl"===t.toLowerCase()?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function n(e,t){r.set(e,function(e){return null!=e?e:{keyframes:[],options:{duration:0}}}(t))}function i(e,t,o){const n=s.get(e);if(null==n?void 0:n[t])return a(n[t],o.dir);const i=r.get(t);return i?a(i,o.dir):{keyframes:[],options:{duration:0}}}},6895:(e,t,o)=>{o.d(t,{GH:()=>l,RA:()=>a,U_:()=>i,nk:()=>n,nv:()=>s});var r=o(7979);function s(e,t,o){return new Promise((s=>{if((null==o?void 0:o.duration)===1/0)throw new Error("Promise-based animations must be finite.");const a=e.animate(t,(0,r.EZ)((0,r.ih)({},o),{duration:n()?0:o.duration}));a.addEventListener("cancel",s,{once:!0}),a.addEventListener("finish",s,{once:!0})}))}function a(e){return(e=e.toString().toLowerCase()).indexOf("ms")>-1?parseFloat(e):e.indexOf("s")>-1?1e3*parseFloat(e):parseFloat(e)}function n(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function i(e){return Promise.all(e.getAnimations().map((e=>new Promise((t=>{const o=requestAnimationFrame(t);e.addEventListener("cancel",(()=>o),{once:!0}),e.addEventListener("finish",(()=>o),{once:!0}),e.cancel()})))))}function l(e,t){return e.map((e=>(0,r.EZ)((0,r.ih)({},e),{height:"auto"===e.height?`${t}px`:e.height})))}},3303:(e,t,o)=>{var r=o(7482),s=o(391),a=o(4867),n=o(6895),i=o(3385),l=o(6167),d=o(9710),c=o(8427),h=c.iv`
  ${d.N}

  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-top-width: calc(var(--sl-panel-border-width) * 3);
    border-radius: var(--sl-border-radius-medium);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-normal);
    line-height: 1.6;
    color: var(--sl-color-neutral-700);
    margin: inherit;
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-large);
    padding-inline-start: var(--sl-spacing-large);
  }

  .alert--primary {
    border-top-color: var(--sl-color-primary-600);
  }

  .alert--primary .alert__icon {
    color: var(--sl-color-primary-600);
  }

  .alert--success {
    border-top-color: var(--sl-color-success-600);
  }

  .alert--success .alert__icon {
    color: var(--sl-color-success-600);
  }

  .alert--neutral {
    border-top-color: var(--sl-color-neutral-600);
  }

  .alert--neutral .alert__icon {
    color: var(--sl-color-neutral-600);
  }

  .alert--warning {
    border-top-color: var(--sl-color-warning-600);
  }

  .alert--warning .alert__icon {
    color: var(--sl-color-warning-600);
  }

  .alert--danger {
    border-top-color: var(--sl-color-danger-600);
  }

  .alert--danger .alert__icon {
    color: var(--sl-color-danger-600);
  }

  .alert__message {
    flex: 1 1 auto;
    display: block;
    padding: var(--sl-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
    padding-inline-end: var(--sl-spacing-medium);
  }
`,u=o(4703),m=o(1465),p=o(7979),g=o(9832),f=o(9900),v=Object.assign(document.createElement("div"),{className:"sl-toast-stack"}),b=class extends m.P{constructor(){super(...arguments),this.hasSlotController=new l.r(this,"icon","suffix"),this.localize=new i.V(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){clearTimeout(this.autoHideTimeout),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout((()=>this.hide()),this.duration))}handleCloseClick(){this.hide()}handleMouseMove(){this.restartAutoHide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await(0,n.U_)(this.base),this.base.hidden=!1;const{keyframes:e,options:t}=(0,s.O8)(this,"alert.show",{dir:this.localize.dir()});await(0,n.nv)(this.base,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),await(0,n.U_)(this.base);const{keyframes:e,options:t}=(0,s.O8)(this,"alert.hide",{dir:this.localize.dir()});await(0,n.nv)(this.base,e,t),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,(0,a.m)(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,(0,a.m)(this,"sl-after-hide")}async toast(){return new Promise((e=>{null===v.parentElement&&document.body.append(v),v.appendChild(this),requestAnimationFrame((()=>{this.clientWidth,this.show()})),this.addEventListener("sl-after-hide",(()=>{v.removeChild(this),e(),null===v.querySelector("sl-alert")&&v.remove()}),{once:!0})}))}render(){return c.dy`
      <div
        part="base"
        class=${(0,g.$)({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":"primary"===this.variant,"alert--success":"success"===this.variant,"alert--neutral":"neutral"===this.variant,"alert--warning":"warning"===this.variant,"alert--danger":"danger"===this.variant})}
        role="alert"
        aria-hidden=${this.open?"false":"true"}
        @mousemove=${this.handleMouseMove}
      >
        <div part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </div>

        <div part="message" class="alert__message" aria-live="polite">
          <slot></slot>
        </div>

        ${this.closable?c.dy`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                @click=${this.handleCloseClick}
              ></sl-icon-button>
            `:""}
      </div>
    `}};b.styles=h,b.dependencies={"sl-icon-button":r.U},(0,p.u2)([(0,f.IO)('[part~="base"]')],b.prototype,"base",2),(0,p.u2)([(0,f.Cb)({type:Boolean,reflect:!0})],b.prototype,"open",2),(0,p.u2)([(0,f.Cb)({type:Boolean,reflect:!0})],b.prototype,"closable",2),(0,p.u2)([(0,f.Cb)({reflect:!0})],b.prototype,"variant",2),(0,p.u2)([(0,f.Cb)({type:Number})],b.prototype,"duration",2),(0,p.u2)([(0,u.Y)("open",{waitUntilFirstUpdate:!0})],b.prototype,"handleOpenChange",1),(0,p.u2)([(0,u.Y)("duration")],b.prototype,"handleDurationChange",1),(0,s.jx)("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}}),(0,s.jx)("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}}),b.define("sl-alert"),o(335),o(8513),o(6877),o(5249),o(836),o(9699),o(1793)}}]);
//# sourceMappingURL=sl-alert.d7d464b5.js.map
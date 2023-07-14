"use strict";(self.webpackChunk_next_bricks_shoelace=self.webpackChunk_next_bricks_shoelace||[]).push([[9774],{8435:(e,t,o)=>{o.r(t),o(6749),o(5517)},5517:(e,t,o)=>{o(2969),o(3467);var s=o(4124);function r(e){document.documentElement.classList["dark"===e||"dark-v2"===e?"add":"remove"]("sl-theme-dark")}o(1744),(0,s.t)(o.p),r(document.documentElement.dataset.theme),window.addEventListener("theme.change",(e=>{r(e.detail)}))},738:(e,t,o)=>{o.d(t,{Z:()=>i});var s=o(9601),r=o.n(s),a=o(2609),n=o.n(a)()(r());n.push([e.id,":root,\n.sl-theme-dark{--sl-z-index-drawer:1000;--sl-z-index-dialog:1000;--sl-z-index-dropdown:1050;--sl-z-index-toast:1000;--sl-z-index-tooltip:1070}.sl-toast-stack{width:100%;left:0;right:auto;overflow:initial;pointer-events:none}.sl-toast-stack > sl-alert{pointer-events:all}",""]);const i=n},1744:(e,t,o)=>{var s=o(6062),r=o.n(s),a=o(4036),n=o.n(a),i=o(6793),l=o.n(i),d=o(7892),c=o.n(d),h=o(1173),u=o.n(h),m=o(2464),p=o.n(m),g=o(738),f={};f.styleTagTransform=p(),f.setAttributes=c(),f.insert=l().bind(null,"head"),f.domAPI=n(),f.insertStyleElement=u(),r()(g.Z,f),g.Z&&g.Z.locals&&g.Z.locals},6749:(e,t,o)=>{var s=o(7979),r=(o(9026),o(2868)),a=o(9832),n=o(3030),i=o(4573),l=o(962),d=o(8427),c=o(1321),h=o(7173),u=o(3005),m=o(5166),p=o(1452),g=d.iv`
  ${p.Z}

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
`;const f=Object.assign(document.createElement("div"),{className:"sl-toast-stack"});let v=class extends m.Z{constructor(){super(...arguments),this.hasSlotController=new l.rc(this,"icon","suffix"),this.localize=new c.V(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){clearTimeout(this.autoHideTimeout),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout((()=>this.hide()),this.duration))}handleCloseClick(){this.hide()}handleMouseMove(){this.restartAutoHide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await(0,r.U_)(this.base),this.base.hidden=!1;const{keyframes:e,options:t}=(0,i.O8)(this,"alert.show",{dir:this.localize.dir()});await(0,r.nv)(this.base,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),await(0,r.U_)(this.base);const{keyframes:e,options:t}=(0,i.O8)(this,"alert.hide",{dir:this.localize.dir()});await(0,r.nv)(this.base,e,t),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,(0,h.m)(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,(0,h.m)(this,"sl-after-hide")}async toast(){return new Promise((e=>{null===f.parentElement&&document.body.append(f),f.appendChild(this),requestAnimationFrame((()=>{this.clientWidth,this.show()})),this.addEventListener("sl-after-hide",(()=>{f.removeChild(this),e(),null===f.querySelector("sl-alert")&&f.remove()}),{once:!0})}))}render(){return d.dy`
      <div
        part="base"
        class=${(0,a.$)({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":"primary"===this.variant,"alert--success":"success"===this.variant,"alert--neutral":"neutral"===this.variant,"alert--warning":"warning"===this.variant,"alert--danger":"danger"===this.variant})}
        role="alert"
        aria-hidden=${this.open?"false":"true"}
        @mousemove=${this.handleMouseMove}
      >
        <slot name="icon" part="icon" class="alert__icon"></slot>

        <slot part="message" class="alert__message" aria-live="polite"></slot>

        ${this.closable?d.dy`
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
    `}};v.styles=g,(0,s.u2)([(0,n.IO)('[part~="base"]')],v.prototype,"base",2),(0,s.u2)([(0,n.Cb)({type:Boolean,reflect:!0})],v.prototype,"open",2),(0,s.u2)([(0,n.Cb)({type:Boolean,reflect:!0})],v.prototype,"closable",2),(0,s.u2)([(0,n.Cb)({reflect:!0})],v.prototype,"variant",2),(0,s.u2)([(0,n.Cb)({type:Number})],v.prototype,"duration",2),(0,s.u2)([(0,u.Y)("open",{waitUntilFirstUpdate:!0})],v.prototype,"handleOpenChange",1),(0,s.u2)([(0,u.Y)("duration")],v.prototype,"handleDurationChange",1),v=(0,s.u2)([(0,n.Mo)("sl-alert")],v),(0,i.jx)("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}}),(0,i.jx)("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}})},2868:(e,t,o)=>{function s(e,t,o){return new Promise((s=>{if((null==o?void 0:o.duration)===1/0)throw new Error("Promise-based animations must be finite.");const r=e.animate(t,Object.assign(Object.assign({},o),{duration:a()?0:o.duration}));r.addEventListener("cancel",s,{once:!0}),r.addEventListener("finish",s,{once:!0})}))}function r(e){return(e=e.toString().toLowerCase()).indexOf("ms")>-1?parseFloat(e):e.indexOf("s")>-1?1e3*parseFloat(e):parseFloat(e)}function a(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function n(e){return Promise.all(e.getAnimations().map((e=>new Promise((t=>{const o=requestAnimationFrame(t);e.addEventListener("cancel",(()=>o),{once:!0}),e.addEventListener("finish",(()=>o),{once:!0}),e.cancel()})))))}function i(e,t){return e.map((e=>Object.assign(Object.assign({},e),{height:"auto"===e.height?`${t}px`:e.height})))}o.d(t,{GH:()=>i,RA:()=>r,U_:()=>n,nk:()=>a,nv:()=>s})},7173:(e,t,o)=>{function s(e,t){return new Promise((o=>{e.addEventListener(t,(function s(r){r.target===e&&(e.removeEventListener(t,s),o())}))}))}o.d(t,{m:()=>s})},962:(e,t,o)=>{o.d(t,{FB:()=>r,rc:()=>s});class s{constructor(e,...t){this.slotNames=[],(this.host=e).addController(this),this.slotNames=t,this.handleSlotChange=this.handleSlotChange.bind(this)}hasDefaultSlot(){return[...this.host.childNodes].some((e=>{if(e.nodeType===e.TEXT_NODE&&""!==e.textContent.trim())return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if("sl-visually-hidden"===t.tagName.toLowerCase())return!1;if(!t.hasAttribute("slot"))return!0}return!1}))}hasNamedSlot(e){return null!==this.host.querySelector(`:scope > [slot="${e}"]`)}test(e){return"[default]"===e?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}handleSlotChange(e){const t=e.target;(this.slotNames.includes("[default]")&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()}}function r(e){if(!e)return"";const t=e.assignedNodes({flatten:!0});let o="";return[...t].forEach((e=>{e.nodeType===Node.TEXT_NODE&&(o+=e.textContent)})),o}},4573:(e,t,o)=>{o.d(t,{O8:()=>i,jx:()=>n}),o(7979);const s=new Map,r=new WeakMap;function a(e,t){return"rtl"===t.toLowerCase()?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function n(e,t){s.set(e,function(e){return null!=e?e:{keyframes:[],options:{duration:0}}}(t))}function i(e,t,o){const n=r.get(e);if(null==n?void 0:n[t])return a(n[t],o.dir);const i=s.get(t);return i?a(i,o.dir):{keyframes:[],options:{duration:0}}}},1321:(e,t,o)=>{o.d(t,{V:()=>h}),o(7979);const s=new Set,r=new MutationObserver(d),a=new Map;let n,i=document.documentElement.dir||"ltr",l=document.documentElement.lang||navigator.language;function d(){i=document.documentElement.dir||"ltr",l=document.documentElement.lang||navigator.language,[...s.keys()].map((e=>{"function"==typeof e.requestUpdate&&e.requestUpdate()}))}r.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});class c{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){s.add(this.host)}hostDisconnected(){s.delete(this.host)}dir(){return`${this.host.dir||i}`.toLowerCase()}lang(){return`${this.host.lang||l}`.toLowerCase()}getTranslationData(e){var t,o;const s=new Intl.Locale(e),r=null==s?void 0:s.language.toLowerCase(),n=null!==(o=null===(t=null==s?void 0:s.region)||void 0===t?void 0:t.toLowerCase())&&void 0!==o?o:"";return{locale:s,language:r,region:n,primary:a.get(`${r}-${n}`),secondary:a.get(r)}}exists(e,t){var o;const{primary:s,secondary:r}=this.getTranslationData(null!==(o=t.lang)&&void 0!==o?o:this.lang());return t=Object.assign({includeFallback:!1},t),!!(s&&s[e]||r&&r[e]||t.includeFallback&&n&&n[e])}term(e,...t){const{primary:o,secondary:s}=this.getTranslationData(this.lang());let r;if(o&&o[e])r=o[e];else if(s&&s[e])r=s[e];else{if(!n||!n[e])return console.error(`No translation found for: ${String(e)}`),String(e);r=n[e]}return"function"==typeof r?r(...t):r}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(e,t)}}!function(...e){e.map((e=>{const t=e.$code.toLowerCase();a.has(t)?a.set(t,Object.assign(Object.assign({},a.get(t)),e)):a.set(t,e),n||(n=e)})),d()}({$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copy:"Copy",currentValue:"Current value",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>0===e?"No options selected":1===e?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"});class h extends c{}}}]);
//# sourceMappingURL=sl-alert.17cafc35.js.map
/*! For license information please see sl-alert.265c9442.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_next_bricks_shoelace=globalThis.webpackChunk_next_bricks_shoelace||[]).push([[4603],{3182:(e,t,r)=>{r.r(t),r(3205),r(7901)},7901:(e,t,r)=>{r(8258),r(4804);var s=r(7719);function o(e){document.documentElement.classList["dark"===e||"dark-v2"===e?"add":"remove"]("sl-theme-dark")}r(7422),(0,s.j)(r.p),o(document.documentElement.dataset.theme),window.addEventListener("theme.change",(e=>{o(e.detail)}))},9832:(e,t,r)=>{r.d(t,{A:()=>i});var s=r(6758),o=r.n(s),n=r(935),a=r.n(n)()(o());a.push([e.id,":root,\n.sl-theme-dark{--sl-z-index-drawer:1000;--sl-z-index-dialog:1000;--sl-z-index-dropdown:1050;--sl-z-index-toast:1060;--sl-z-index-tooltip:1070}.sl-toast-stack{width:100%;left:0;right:auto;overflow:initial;pointer-events:none}.sl-toast-stack > sl-alert{pointer-events:all}",""]);const i=a},7422:(e,t,r)=>{var s=r(2591),o=r.n(s),n=r(1740),a=r.n(n),i=r(8128),l=r.n(i),d=r(855),c=r.n(d),h=r(3051),u=r.n(h),m=r(3656),p=r.n(m),g=r(9832),v={};v.styleTagTransform=p(),v.setAttributes=c(),v.insert=l().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=u(),o()(g.A,v),g.A&&g.A.locals&&g.A.locals},5258:(e,t,r)=>{r.d(t,{XC:()=>d,c2:()=>h});const s=new Set,o=new MutationObserver(c),n=new Map;let a,i=document.documentElement.dir||"ltr",l=document.documentElement.lang||navigator.language;function d(...e){e.map((e=>{const t=e.$code.toLowerCase();n.has(t)?n.set(t,Object.assign(Object.assign({},n.get(t)),e)):n.set(t,e),a||(a=e)})),c()}function c(){i=document.documentElement.dir||"ltr",l=document.documentElement.lang||navigator.language,[...s.keys()].map((e=>{"function"==typeof e.requestUpdate&&e.requestUpdate()}))}o.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});class h{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){s.add(this.host)}hostDisconnected(){s.delete(this.host)}dir(){return`${this.host.dir||i}`.toLowerCase()}lang(){return`${this.host.lang||l}`.toLowerCase()}getTranslationData(e){var t,r;const s=new Intl.Locale(e.replace(/_/g,"-")),o=null==s?void 0:s.language.toLowerCase(),a=null!==(r=null===(t=null==s?void 0:s.region)||void 0===t?void 0:t.toLowerCase())&&void 0!==r?r:"";return{locale:s,language:o,region:a,primary:n.get(`${o}-${a}`),secondary:n.get(o)}}exists(e,t){var r;const{primary:s,secondary:o}=this.getTranslationData(null!==(r=t.lang)&&void 0!==r?r:this.lang());return t=Object.assign({includeFallback:!1},t),!!(s&&s[e]||o&&o[e]||t.includeFallback&&a&&a[e])}term(e,...t){const{primary:r,secondary:s}=this.getTranslationData(this.lang());let o;if(r&&r[e])o=r[e];else if(s&&s[e])o=s[e];else{if(!a||!a[e])return console.error(`No translation found for: ${String(e)}`),String(e);o=a[e]}return"function"==typeof o?o(...t):o}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,r){return new Intl.RelativeTimeFormat(this.lang(),r).format(e,t)}}},5752:(e,t,r)=>{r.d(t,{w:()=>o});var s=r(1320);function o(e,t){const r=(0,s.IA)({waitUntilFirstUpdate:!1},t);return(t,s)=>{const{update:o}=t,n=Array.isArray(e)?e:[e];t.update=function(e){n.forEach((t=>{const o=t;if(e.has(o)){const t=e.get(o),n=this[o];t!==n&&(r.waitUntilFirstUpdate&&!this.hasUpdated||this[s](t,n))}})),o.call(this,e)}}}},1060:(e,t,r)=>{function s(e,t){return new Promise((r=>{e.addEventListener(t,(function s(o){o.target===e&&(e.removeEventListener(t,s),r())}))}))}r.d(t,{l:()=>s})},6292:(e,t,r)=>{r.d(t,{Ee:()=>a,RB:()=>i}),r(1320);var s=new Map,o=new WeakMap;function n(e,t){return"rtl"===t.toLowerCase()?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function a(e,t){s.set(e,function(e){return null!=e?e:{keyframes:[],options:{duration:0}}}(t))}function i(e,t,r){const a=o.get(e);if(null==a?void 0:a[t])return n(a[t],r.dir);const i=s.get(t);return i?n(i,r.dir):{keyframes:[],options:{duration:0}}}},6482:(e,t,r)=>{r.d(t,{E9:()=>n,Ey:()=>i,Oe:()=>a,dc:()=>l,jd:()=>o});var s=r(1320);function o(e,t,r){return new Promise((o=>{if((null==r?void 0:r.duration)===1/0)throw new Error("Promise-based animations must be finite.");const n=e.animate(t,(0,s.ko)((0,s.IA)({},r),{duration:a()?0:r.duration}));n.addEventListener("cancel",o,{once:!0}),n.addEventListener("finish",o,{once:!0})}))}function n(e){return(e=e.toString().toLowerCase()).indexOf("ms")>-1?parseFloat(e):e.indexOf("s")>-1?1e3*parseFloat(e):parseFloat(e)}function a(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function i(e){return Promise.all(e.getAnimations().map((e=>new Promise((t=>{e.cancel(),requestAnimationFrame(t)})))))}function l(e,t){return e.map((e=>(0,s.ko)((0,s.IA)({},e),{height:"auto"===e.height?`${t}px`:e.height})))}},3280:(e,t,r)=>{r.d(t,{k:()=>o});var s={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>0===e?"No options selected":1===e?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};(0,r(5258).XC)(s);var o=s},4101:(e,t,r)=>{r.d(t,{X:()=>s,r:()=>o});var s=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=e=>{const t=e.target;(this.slotNames.includes("[default]")&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some((e=>{if(e.nodeType===e.TEXT_NODE&&""!==e.textContent.trim())return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if("sl-visually-hidden"===t.tagName.toLowerCase())return!1;if(!t.hasAttribute("slot"))return!0}return!1}))}hasNamedSlot(e){return null!==this.host.querySelector(`:scope > [slot="${e}"]`)}test(e){return"[default]"===e?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};function o(e){if(!e)return"";const t=e.assignedNodes({flatten:!0});let r="";return[...t].forEach((e=>{e.nodeType===Node.TEXT_NODE&&(r+=e.textContent)})),r}},7324:(e,t,r)=>{r.d(t,{$:()=>s});var s=r(5024).AH`
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
`},333:(e,t,r)=>{r.d(t,{c:()=>n});var s=r(3280),o=r(5258),n=class extends o.c2{};(0,o.XC)(s.k)},3205:(e,t,r)=>{var s=r(2484),o=r(6292),n=r(1060),a=r(6482),i=r(333),l=r(5752),d=r(4101),c=r(5024),h=c.AH`
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
`,u=r(7324),m=r(8004),p=r(1320),g=r(3788),v=r(8146),f=Object.assign(document.createElement("div"),{className:"sl-toast-stack"}),b=class extends m.f{constructor(){super(...arguments),this.hasSlotController=new d.X(this,"icon","suffix"),this.localize=new i.c(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){clearTimeout(this.autoHideTimeout),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout((()=>this.hide()),this.duration))}handleCloseClick(){this.hide()}handleMouseMove(){this.restartAutoHide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await(0,a.Ey)(this.base),this.base.hidden=!1;const{keyframes:e,options:t}=(0,o.RB)(this,"alert.show",{dir:this.localize.dir()});await(0,a.jd)(this.base,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),await(0,a.Ey)(this.base);const{keyframes:e,options:t}=(0,o.RB)(this,"alert.hide",{dir:this.localize.dir()});await(0,a.jd)(this.base,e,t),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,(0,n.l)(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,(0,n.l)(this,"sl-after-hide")}async toast(){return new Promise((e=>{null===f.parentElement&&document.body.append(f),f.appendChild(this),requestAnimationFrame((()=>{this.clientWidth,this.show()})),this.addEventListener("sl-after-hide",(()=>{f.removeChild(this),e(),null===f.querySelector("sl-alert")&&f.remove()}),{once:!0})}))}render(){return c.qy`
      <div
        part="base"
        class=${(0,g.H)({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":"primary"===this.variant,"alert--success":"success"===this.variant,"alert--neutral":"neutral"===this.variant,"alert--warning":"warning"===this.variant,"alert--danger":"danger"===this.variant})}
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

        ${this.closable?c.qy`
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
    `}};b.styles=[u.$,h],b.dependencies={"sl-icon-button":s.h},(0,p.Cc)([(0,v.P)('[part~="base"]')],b.prototype,"base",2),(0,p.Cc)([(0,v.MZ)({type:Boolean,reflect:!0})],b.prototype,"open",2),(0,p.Cc)([(0,v.MZ)({type:Boolean,reflect:!0})],b.prototype,"closable",2),(0,p.Cc)([(0,v.MZ)({reflect:!0})],b.prototype,"variant",2),(0,p.Cc)([(0,v.MZ)({type:Number})],b.prototype,"duration",2),(0,p.Cc)([(0,l.w)("open",{waitUntilFirstUpdate:!0})],b.prototype,"handleOpenChange",1),(0,p.Cc)([(0,l.w)("duration")],b.prototype,"handleDurationChange",1),(0,o.Ee)("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}}),(0,o.Ee)("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}}),b.define("sl-alert"),r(3750),r(3280),r(4812),r(2089),r(4415),r(4637),r(8326)},3348:(e,t,r)=>{r.d(t,{Rt:()=>a,mY:()=>l,qb:()=>n});var s=r(4716);const{D:o}=s.ge,n=(e,t)=>void 0===t?void 0!==(null==e?void 0:e._$litType$):(null==e?void 0:e._$litType$)===t,a=e=>void 0===e.strings,i={},l=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i;return e._$AH=t}},5128:(e,t,r)=>{r.d(t,{OA:()=>s,WL:()=>n,u$:()=>o});const s={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},o=e=>function(){for(var t=arguments.length,r=new Array(t),s=0;s<t;s++)r[s]=arguments[s];return{_$litDirective$:e,values:r}};class n{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}},3788:(e,t,r)=>{r.d(t,{H:()=>n});var s=r(4716),o=r(5128);const n=(0,o.u$)(class extends o.WL{constructor(e){var t;if(super(e),e.type!==o.OA.ATTRIBUTE||"class"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,t){let[r]=t;if(void 0===this.it){this.it=new Set,void 0!==e.strings&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in r){var o;r[e]&&(null===(o=this.st)||void 0===o||!o.has(e))&&this.it.add(e)}return this.render(r)}const n=e.element.classList;for(const e of this.it)e in r||(n.remove(e),this.it.delete(e));for(const e in r){var a;const t=!!r[e];t===this.it.has(e)||(null===(a=this.st)||void 0===a?void 0:a.has(e))||(t?(n.add(e),this.it.add(e)):(n.remove(e),this.it.delete(e)))}return s.c0}})},996:(e,t,r)=>{r.d(t,{J:()=>o});var s=r(4716);const o=e=>e??s.s6}}]);
//# sourceMappingURL=sl-alert.265c9442.js.map
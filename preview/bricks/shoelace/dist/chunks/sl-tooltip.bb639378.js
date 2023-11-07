/*! For license information please see sl-tooltip.bb639378.js.LICENSE.txt */
"use strict";(self.webpackChunk_next_bricks_shoelace=self.webpackChunk_next_bricks_shoelace||[]).push([[7443],{4894:(t,e,o)=>{o.r(e),o(7680),o(6771)},6771:(t,e,o)=>{o(2969),o(3467);var i=o(4124);function s(t){document.documentElement.classList["dark"===t||"dark-v2"===t?"add":"remove"]("sl-theme-dark")}o(1744),(0,i.t)(o.p),s(document.documentElement.dataset.theme),window.addEventListener("theme.change",(t=>{s(t.detail)}))},738:(t,e,o)=>{o.d(e,{Z:()=>a});var i=o(9601),s=o.n(i),n=o(2609),r=o.n(n)()(s());r.push([t.id,":root,\n.sl-theme-dark{--sl-z-index-drawer:1000;--sl-z-index-dialog:1000;--sl-z-index-dropdown:1050;--sl-z-index-toast:1000;--sl-z-index-tooltip:1070}.sl-toast-stack{width:100%;left:0;right:auto;overflow:initial;pointer-events:none}.sl-toast-stack > sl-alert{pointer-events:all}",""]);const a=r},1744:(t,e,o)=>{var i=o(6062),s=o.n(i),n=o(4036),r=o.n(n),a=o(6793),l=o.n(a),d=o(7892),h=o.n(d),p=o(1173),c=o.n(p),u=o(2464),m=o.n(u),g=o(738),f={};f.styleTagTransform=m(),f.setAttributes=h(),f.insert=l().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=c(),s()(g.Z,f),g.Z&&g.Z.locals&&g.Z.locals},8179:(t,e,o)=>{o.d(e,{P5:()=>d,Ve:()=>p});const i=new Set,s=new MutationObserver(h),n=new Map;let r,a=document.documentElement.dir||"ltr",l=document.documentElement.lang||navigator.language;function d(...t){t.map((t=>{const e=t.$code.toLowerCase();n.has(e)?n.set(e,Object.assign(Object.assign({},n.get(e)),t)):n.set(e,t),r||(r=t)})),h()}function h(){a=document.documentElement.dir||"ltr",l=document.documentElement.lang||navigator.language,[...i.keys()].map((t=>{"function"==typeof t.requestUpdate&&t.requestUpdate()}))}s.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});class p{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){i.add(this.host)}hostDisconnected(){i.delete(this.host)}dir(){return`${this.host.dir||a}`.toLowerCase()}lang(){return`${this.host.lang||l}`.toLowerCase()}getTranslationData(t){var e,o;const i=new Intl.Locale(t),s=null==i?void 0:i.language.toLowerCase(),r=null!==(o=null===(e=null==i?void 0:i.region)||void 0===e?void 0:e.toLowerCase())&&void 0!==o?o:"";return{locale:i,language:s,region:r,primary:n.get(`${s}-${r}`),secondary:n.get(s)}}exists(t,e){var o;const{primary:i,secondary:s}=this.getTranslationData(null!==(o=e.lang)&&void 0!==o?o:this.lang());return e=Object.assign({includeFallback:!1},e),!!(i&&i[t]||s&&s[t]||e.includeFallback&&r&&r[t])}term(t,...e){const{primary:o,secondary:i}=this.getTranslationData(this.lang());let s;if(o&&o[t])s=o[t];else if(i&&i[t])s=i[t];else{if(!r||!r[t])return console.error(`No translation found for: ${String(t)}`),String(t);s=r[t]}return"function"==typeof s?s(...e):s}date(t,e){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),e).format(t)}number(t,e){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),e).format(t)}relativeTime(t,e,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(t,e)}}},3385:(t,e,o)=>{o.d(e,{V:()=>s});var i=o(8179),s=class extends i.Ve{}},4867:(t,e,o)=>{function i(t,e){return new Promise((o=>{t.addEventListener(e,(function i(s){s.target===t&&(t.removeEventListener(e,i),o())}))}))}o.d(e,{m:()=>i})},4703:(t,e,o)=>{o.d(e,{Y:()=>s});var i=o(7979);function s(t,e){const o=(0,i.ih)({waitUntilFirstUpdate:!1},e);return(e,i)=>{const{update:s}=e,n=Array.isArray(t)?t:[t];e.update=function(t){n.forEach((e=>{const s=e;if(t.has(s)){const e=t.get(s),n=this[s];e!==n&&(o.waitUntilFirstUpdate&&!this.hasUpdated||this[i](e,n))}})),s.call(this,t)}}}},8513:(t,e,o)=>{(0,o(8179).P5)({$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>0===t?"No options selected":1===t?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format"})},391:(t,e,o)=>{o.d(e,{O8:()=>a,jx:()=>r}),o(7979);var i=new Map,s=new WeakMap;function n(t,e){return"rtl"===e.toLowerCase()?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function r(t,e){i.set(t,function(t){return null!=t?t:{keyframes:[],options:{duration:0}}}(e))}function a(t,e,o){const r=s.get(t);if(null==r?void 0:r[e])return n(r[e],o.dir);const a=i.get(e);return a?n(a,o.dir):{keyframes:[],options:{duration:0}}}},9710:(t,e,o)=>{o.d(e,{N:()=>i});var i=o(8427).iv`
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
`},6895:(t,e,o)=>{o.d(e,{GH:()=>l,RA:()=>n,U_:()=>a,nk:()=>r,nv:()=>s});var i=o(7979);function s(t,e,o){return new Promise((s=>{if((null==o?void 0:o.duration)===1/0)throw new Error("Promise-based animations must be finite.");const n=t.animate(e,(0,i.EZ)((0,i.ih)({},o),{duration:r()?0:o.duration}));n.addEventListener("cancel",s,{once:!0}),n.addEventListener("finish",s,{once:!0})}))}function n(t){return(t=t.toString().toLowerCase()).indexOf("ms")>-1?parseFloat(t):t.indexOf("s")>-1?1e3*parseFloat(t):parseFloat(t)}function r(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function a(t){return Promise.all(t.getAnimations().map((t=>new Promise((e=>{const o=requestAnimationFrame(e);t.addEventListener("cancel",(()=>o),{once:!0}),t.addEventListener("finish",(()=>o),{once:!0}),t.cancel()})))))}function l(t,e){return t.map((t=>(0,i.EZ)((0,i.ih)({},t),{height:"auto"===t.height?`${e}px`:t.height})))}},7680:(t,e,o)=>{var i=o(9710),s=o(8427),n=s.iv`
  ${i.N}

  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    pointer-events: none;
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
    user-select: none;
  }
`,r=o(9493),a=o(391),l=o(4867),d=o(6895),h=o(3385),p=o(4703),c=o(1465),u=o(7979),m=o(9832),g=o(9900),f=class extends c.P{constructor(){super(),this.localize=new h.V(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleKeyDown=t=>{this.open&&"Escape"===t.key&&(t.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const t=(0,d.RA)(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout((()=>this.show()),t)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const t=(0,d.RA)(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout((()=>this.hide()),t)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("keydown",this.handleKeyDown),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}connectedCallback(){super.connectedCallback()}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(t){return this.trigger.split(" ").includes(t)}async handleOpenChange(){if(this.open){if(this.disabled)return;this.emit("sl-show"),await(0,d.U_)(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:t,options:e}=(0,a.O8)(this,"tooltip.show",{dir:this.localize.dir()});await(0,d.nv)(this.popup.popup,t,e),this.emit("sl-after-show")}else{this.emit("sl-hide"),await(0,d.U_)(this.body);const{keyframes:t,options:e}=(0,a.O8)(this,"tooltip.hide",{dir:this.localize.dir()});await(0,d.nv)(this.popup.popup,t,e),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,(0,l.m)(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,(0,l.m)(this,"sl-after-hide")}render(){return s.dy`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${(0,m.$)({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
      >
        ${""}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${""}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open?"polite":"off"}>
          <slot name="content">${this.content}</slot>
        </div>
      </sl-popup>
    `}};f.styles=n,f.dependencies={"sl-popup":r.l},(0,u.u2)([(0,g.IO)("slot:not([name])")],f.prototype,"defaultSlot",2),(0,u.u2)([(0,g.IO)(".tooltip__body")],f.prototype,"body",2),(0,u.u2)([(0,g.IO)("sl-popup")],f.prototype,"popup",2),(0,u.u2)([(0,g.Cb)()],f.prototype,"content",2),(0,u.u2)([(0,g.Cb)()],f.prototype,"placement",2),(0,u.u2)([(0,g.Cb)({type:Boolean,reflect:!0})],f.prototype,"disabled",2),(0,u.u2)([(0,g.Cb)({type:Number})],f.prototype,"distance",2),(0,u.u2)([(0,g.Cb)({type:Boolean,reflect:!0})],f.prototype,"open",2),(0,u.u2)([(0,g.Cb)({type:Number})],f.prototype,"skidding",2),(0,u.u2)([(0,g.Cb)()],f.prototype,"trigger",2),(0,u.u2)([(0,g.Cb)({type:Boolean})],f.prototype,"hoist",2),(0,u.u2)([(0,p.Y)("open",{waitUntilFirstUpdate:!0})],f.prototype,"handleOpenChange",1),(0,u.u2)([(0,p.Y)(["content","distance","hoist","placement","skidding"])],f.prototype,"handleOptionsChange",1),(0,u.u2)([(0,p.Y)("disabled")],f.prototype,"handleDisabledChange",1),(0,a.jx)("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}}),(0,a.jx)("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}}),f.define("sl-tooltip"),o(4476),o(8513)},7514:(t,e,o)=>{o.d(e,{XM:()=>s,Xe:()=>n,pX:()=>i});const i={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},s=t=>(...e)=>({_$litDirective$:t,values:e});class n{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,o){this._$Ct=t,this._$AM=e,this._$Ci=o}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},9832:(t,e,o)=>{o.d(e,{$:()=>n});var i=o(3311),s=o(7514);const n=(0,s.XM)(class extends s.Xe{constructor(t){var e;if(super(t),t.type!==s.pX.ATTRIBUTE||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){var o,s;if(void 0===this.it){this.it=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!(null===(o=this.nt)||void 0===o?void 0:o.has(t))&&this.it.add(t);return this.render(e)}const n=t.element.classList;this.it.forEach((t=>{t in e||(n.remove(t),this.it.delete(t))}));for(const t in e){const o=!!e[t];o===this.it.has(t)||(null===(s=this.nt)||void 0===s?void 0:s.has(t))||(o?(n.add(t),this.it.add(t)):(n.remove(t),this.it.delete(t)))}return i.Jb}})}}]);
//# sourceMappingURL=sl-tooltip.bb639378.js.map
/*! For license information please see sl-tooltip.591e5e90.js.LICENSE.txt */
"use strict";(self.webpackChunk_next_bricks_shoelace=self.webpackChunk_next_bricks_shoelace||[]).push([[624],{4107:(t,e,o)=>{o.r(e),o(628),o(7901)},7901:(t,e,o)=>{o(8258),o(4804);var i=o(7719);function s(t){document.documentElement.classList["dark"===t||"dark-v2"===t?"add":"remove"]("sl-theme-dark")}o(7422),(0,i.j)(o.p),s(document.documentElement.dataset.theme),window.addEventListener("theme.change",(t=>{s(t.detail)}))},9832:(t,e,o)=>{o.d(e,{A:()=>a});var i=o(6758),s=o.n(i),n=o(935),r=o.n(n)()(s());r.push([t.id,":root,\n.sl-theme-dark{--sl-z-index-drawer:1000;--sl-z-index-dialog:1000;--sl-z-index-dropdown:1050;--sl-z-index-toast:1001;--sl-z-index-tooltip:1070}.sl-toast-stack{width:100%;left:0;right:auto;overflow:initial;pointer-events:none}.sl-toast-stack > sl-alert{pointer-events:all}",""]);const a=r},7422:(t,e,o)=>{var i=o(2591),s=o.n(i),n=o(1740),r=o.n(n),a=o(8128),l=o.n(a),d=o(855),h=o.n(d),p=o(3051),c=o.n(p),u=o(3656),m=o.n(u),g=o(9832),f={};f.styleTagTransform=m(),f.setAttributes=h(),f.insert=l().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=c(),s()(g.A,f),g.A&&g.A.locals&&g.A.locals},5258:(t,e,o)=>{o.d(e,{XC:()=>d,c2:()=>p});const i=new Set,s=new MutationObserver(h),n=new Map;let r,a=document.documentElement.dir||"ltr",l=document.documentElement.lang||navigator.language;function d(...t){t.map((t=>{const e=t.$code.toLowerCase();n.has(e)?n.set(e,Object.assign(Object.assign({},n.get(e)),t)):n.set(e,t),r||(r=t)})),h()}function h(){a=document.documentElement.dir||"ltr",l=document.documentElement.lang||navigator.language,[...i.keys()].map((t=>{"function"==typeof t.requestUpdate&&t.requestUpdate()}))}s.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});class p{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){i.add(this.host)}hostDisconnected(){i.delete(this.host)}dir(){return`${this.host.dir||a}`.toLowerCase()}lang(){return`${this.host.lang||l}`.toLowerCase()}getTranslationData(t){var e,o;const i=new Intl.Locale(t.replace(/_/g,"-")),s=null==i?void 0:i.language.toLowerCase(),r=null!==(o=null===(e=null==i?void 0:i.region)||void 0===e?void 0:e.toLowerCase())&&void 0!==o?o:"";return{locale:i,language:s,region:r,primary:n.get(`${s}-${r}`),secondary:n.get(s)}}exists(t,e){var o;const{primary:i,secondary:s}=this.getTranslationData(null!==(o=e.lang)&&void 0!==o?o:this.lang());return e=Object.assign({includeFallback:!1},e),!!(i&&i[t]||s&&s[t]||e.includeFallback&&r&&r[t])}term(t,...e){const{primary:o,secondary:i}=this.getTranslationData(this.lang());let s;if(o&&o[t])s=o[t];else if(i&&i[t])s=i[t];else{if(!r||!r[t])return console.error(`No translation found for: ${String(t)}`),String(t);s=r[t]}return"function"==typeof s?s(...e):s}date(t,e){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),e).format(t)}number(t,e){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),e).format(t)}relativeTime(t,e,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(t,e)}}},1060:(t,e,o)=>{function i(t,e){return new Promise((o=>{t.addEventListener(e,(function i(s){s.target===t&&(t.removeEventListener(e,i),o())}))}))}o.d(e,{l:()=>i})},9281:(t,e,o)=>{o.d(e,{Ee:()=>r,RB:()=>a}),o(7012);var i=new Map,s=new WeakMap;function n(t,e){return"rtl"===e.toLowerCase()?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function r(t,e){i.set(t,function(t){return null!=t?t:{keyframes:[],options:{duration:0}}}(e))}function a(t,e,o){const r=s.get(t);if(null==r?void 0:r[e])return n(r[e],o.dir);const a=i.get(e);return a?n(a,o.dir):{keyframes:[],options:{duration:0}}}},5226:(t,e,o)=>{o.d(e,{E9:()=>n,Ey:()=>a,Oe:()=>r,dc:()=>l,jd:()=>s});var i=o(7012);function s(t,e,o){return new Promise((s=>{if((null==o?void 0:o.duration)===1/0)throw new Error("Promise-based animations must be finite.");const n=t.animate(e,(0,i.ko)((0,i.IA)({},o),{duration:r()?0:o.duration}));n.addEventListener("cancel",s,{once:!0}),n.addEventListener("finish",s,{once:!0})}))}function n(t){return(t=t.toString().toLowerCase()).indexOf("ms")>-1?parseFloat(t):t.indexOf("s")>-1?1e3*parseFloat(t):parseFloat(t)}function r(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function a(t){return Promise.all(t.getAnimations().map((t=>new Promise((e=>{const o=requestAnimationFrame(e);t.addEventListener("cancel",(()=>o),{once:!0}),t.addEventListener("finish",(()=>o),{once:!0}),t.cancel()})))))}function l(t,e){return t.map((t=>(0,i.ko)((0,i.IA)({},t),{height:"auto"===t.height?`${e}px`:t.height})))}},3280:(t,e,o)=>{o.d(e,{k:()=>s});var i={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>0===t?"No options selected":1===t?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format"};(0,o(5258).XC)(i);var s=i},5794:(t,e,o)=>{o.d(e,{w:()=>s});var i=o(7012);function s(t,e){const o=(0,i.IA)({waitUntilFirstUpdate:!1},e);return(e,i)=>{const{update:s}=e,n=Array.isArray(t)?t:[t];e.update=function(t){n.forEach((e=>{const s=e;if(t.has(s)){const e=t.get(s),n=this[s];e!==n&&(o.waitUntilFirstUpdate&&!this.hasUpdated||this[i](e,n))}})),s.call(this,t)}}}},7324:(t,e,o)=>{o.d(e,{$:()=>i});var i=o(5024).AH`
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
`},333:(t,e,o)=>{o.d(e,{c:()=>n});var i=o(3280),s=o(5258),n=class extends s.c2{};(0,s.XC)(i.k)},628:(t,e,o)=>{var i=o(7324),s=o(5024),n=s.AH`
  ${i.$}

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
    -webkit-user-select: none;
  }
`,r=o(8538),a=o(9281),l=o(1060),d=o(5226),h=o(333),p=o(5794),c=o(7489),u=o(7012),m=o(3788),g=o(2489),f=class extends c.f{constructor(){super(),this.localize=new h.c(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleKeyDown=t=>{this.open&&!this.disabled&&"Escape"===t.key&&(t.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const t=(0,d.E9)(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout((()=>this.show()),t)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const t=(0,d.E9)(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout((()=>this.hide()),t)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("keydown",this.handleKeyDown),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}connectedCallback(){super.connectedCallback()}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(t){return this.trigger.split(" ").includes(t)}async handleOpenChange(){if(this.open){if(this.disabled)return;this.emit("sl-show"),await(0,d.Ey)(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:t,options:e}=(0,a.RB)(this,"tooltip.show",{dir:this.localize.dir()});await(0,d.jd)(this.popup.popup,t,e),this.emit("sl-after-show")}else{this.emit("sl-hide"),await(0,d.Ey)(this.body);const{keyframes:t,options:e}=(0,a.RB)(this,"tooltip.hide",{dir:this.localize.dir()});await(0,d.jd)(this.popup.popup,t,e),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,(0,l.l)(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,(0,l.l)(this,"sl-after-hide")}render(){return s.qy`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${(0,m.H)({tooltip:!0,"tooltip--open":this.open})}
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
    `}};f.styles=n,f.dependencies={"sl-popup":r.m},(0,u.Cc)([(0,g.P)("slot:not([name])")],f.prototype,"defaultSlot",2),(0,u.Cc)([(0,g.P)(".tooltip__body")],f.prototype,"body",2),(0,u.Cc)([(0,g.P)("sl-popup")],f.prototype,"popup",2),(0,u.Cc)([(0,g.MZ)()],f.prototype,"content",2),(0,u.Cc)([(0,g.MZ)()],f.prototype,"placement",2),(0,u.Cc)([(0,g.MZ)({type:Boolean,reflect:!0})],f.prototype,"disabled",2),(0,u.Cc)([(0,g.MZ)({type:Number})],f.prototype,"distance",2),(0,u.Cc)([(0,g.MZ)({type:Boolean,reflect:!0})],f.prototype,"open",2),(0,u.Cc)([(0,g.MZ)({type:Number})],f.prototype,"skidding",2),(0,u.Cc)([(0,g.MZ)()],f.prototype,"trigger",2),(0,u.Cc)([(0,g.MZ)({type:Boolean})],f.prototype,"hoist",2),(0,u.Cc)([(0,p.w)("open",{waitUntilFirstUpdate:!0})],f.prototype,"handleOpenChange",1),(0,u.Cc)([(0,p.w)(["content","distance","hoist","placement","skidding"])],f.prototype,"handleOptionsChange",1),(0,u.Cc)([(0,p.w)("disabled")],f.prototype,"handleDisabledChange",1),(0,a.Ee)("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}}),(0,a.Ee)("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}}),f.define("sl-tooltip"),o(60),o(3280)},5128:(t,e,o)=>{o.d(e,{OA:()=>i,WL:()=>n,u$:()=>s});var i={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},s=t=>function(){for(var e=arguments.length,o=new Array(e),i=0;i<e;i++)o[i]=arguments[i];return{_$litDirective$:t,values:o}};class n{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,o){this._$Ct=t,this._$AM=e,this._$Ci=o}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},3788:(t,e,o)=>{o.d(e,{H:()=>n});var i=o(4716),s=o(5128),n=(0,s.u$)(class extends s.WL{constructor(t){var e;if(super(t),t.type!==s.OA.ATTRIBUTE||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,e){var[o]=e;if(void 0===this.it){for(var s in this.it=new Set,void 0!==t.strings&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t)))),o){var n;o[s]&&(null===(n=this.st)||void 0===n||!n.has(s))&&this.it.add(s)}return this.render(o)}var r=t.element.classList;for(var a of this.it)a in o||(r.remove(a),this.it.delete(a));for(var l in o){var d,h=!!o[l];h===this.it.has(l)||(null===(d=this.st)||void 0===d?void 0:d.has(l))||(h?(r.add(l),this.it.add(l)):(r.remove(l),this.it.delete(l)))}return i.c0}})}}]);
//# sourceMappingURL=sl-tooltip.591e5e90.js.map
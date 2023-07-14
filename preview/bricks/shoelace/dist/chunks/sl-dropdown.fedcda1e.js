/*! For license information please see sl-dropdown.fedcda1e.js.LICENSE.txt */
"use strict";(self.webpackChunk_next_bricks_shoelace=self.webpackChunk_next_bricks_shoelace||[]).push([[600],{4495:(e,t,n)=>{n.r(t),n(4822),n(5517)},5517:(e,t,n)=>{n(2969),n(3467);var o=n(4124);function i(e){document.documentElement.classList["dark"===e||"dark-v2"===e?"add":"remove"]("sl-theme-dark")}n(1744),(0,o.t)(n.p),i(document.documentElement.dataset.theme),window.addEventListener("theme.change",(e=>{i(e.detail)}))},738:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(9601),i=n.n(o),s=n(2609),r=n.n(s)()(i());r.push([e.id,":root,\n.sl-theme-dark{--sl-z-index-drawer:1000;--sl-z-index-dialog:1000;--sl-z-index-dropdown:1050;--sl-z-index-toast:1000;--sl-z-index-tooltip:1070}.sl-toast-stack{width:100%;left:0;right:auto;overflow:initial;pointer-events:none}.sl-toast-stack > sl-alert{pointer-events:all}",""]);const a=r},1744:(e,t,n)=>{var o=n(6062),i=n.n(o),s=n(4036),r=n.n(s),a=n(6793),l=n.n(a),d=n(7892),h=n.n(d),c=n(1173),p=n.n(c),u=n(2464),m=n.n(u),g=n(738),f={};f.styleTagTransform=m(),f.setAttributes=h(),f.insert=l().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=p(),i()(g.Z,f),g.Z&&g.Z.locals&&g.Z.locals},4822:(e,t,n)=>{var o=n(7979),i=(n(2613),n(2868)),s=n(9832),r=n(3030),a=n(4573),l=n(1818),d=n(8427),h=n(1321),c=n(7173),p=n(3005),u=n(5166),m=n(1452),g=d.iv`
  ${m.Z}

  :host {
    display: inline-block;
  }

  .dropdown::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .dropdown[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .dropdown[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .dropdown[data-current-placement^='left']::part(popup) {
    transform-origin: right;
  }

  .dropdown[data-current-placement^='right']::part(popup) {
    transform-origin: left;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__panel {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    border-radius: var(--sl-border-radius-medium);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    display: block;
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`;let f=class extends u.Z{constructor(){super(...arguments),this.localize=new h.V(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.handleKeyDown=e=>{this.open&&"Escape"===e.key&&(e.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=e=>{var t;if("Escape"===e.key&&this.open)return e.stopPropagation(),this.focusOnTrigger(),void this.hide();if("Tab"===e.key){if(this.open&&"sl-menu-item"===(null==(t=document.activeElement)?void 0:t.tagName.toLowerCase()))return e.preventDefault(),this.hide(),void this.focusOnTrigger();setTimeout((()=>{var e,t,n;const o=(null==(e=this.containingElement)?void 0:e.getRootNode())instanceof ShadowRoot?null==(n=null==(t=document.activeElement)?void 0:t.shadowRoot)?void 0:n.activeElement:document.activeElement;this.containingElement&&(null==o?void 0:o.closest(this.containingElement.tagName.toLowerCase()))===this.containingElement||this.hide()}))}},this.handleDocumentMouseDown=e=>{const t=e.composedPath();this.containingElement&&!t.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=e=>{const t=e.target;this.stayOpenOnSelect||"sl-menu"!==t.tagName.toLowerCase()||(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const e=this.trigger.assignedElements({flatten:!0})[0];"function"==typeof(null==e?void 0:e.focus)&&e.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find((e=>"sl-menu"===e.tagName.toLowerCase()))}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}handleTriggerKeyDown(e){if([" ","Enter"].includes(e.key))return e.preventDefault(),void this.handleTriggerClick();const t=this.getMenu();if(t){const n=t.getAllItems(),o=n[0],i=n[n.length-1];["ArrowDown","ArrowUp","Home","End"].includes(e.key)&&(e.preventDefault(),this.open||this.show(),n.length>0&&this.updateComplete.then((()=>{"ArrowDown"!==e.key&&"Home"!==e.key||(t.setCurrentItem(o),o.focus()),"ArrowUp"!==e.key&&"End"!==e.key||(t.setCurrentItem(i),i.focus())})))}}handleTriggerKeyUp(e){" "===e.key&&e.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const e=this.trigger.assignedElements({flatten:!0}).find((e=>(0,l.C)(e).start));let t;if(e){switch(e.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":t=e.button;break;default:t=e}t.setAttribute("aria-haspopup","true"),t.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,(0,c.m)(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,(0,c.m)(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){this.panel.addEventListener("sl-select",this.handlePanelSelect),this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown)}async handleOpenChange(){if(this.disabled)this.open=!1;else if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await(0,i.U_)(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:e,options:t}=(0,a.O8)(this,"dropdown.show",{dir:this.localize.dir()});await(0,i.nv)(this.popup.popup,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await(0,i.U_)(this);const{keyframes:e,options:t}=(0,a.O8)(this,"dropdown.hide",{dir:this.localize.dir()});await(0,i.nv)(this.popup.popup,e,t),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return d.dy`
      <sl-popup
        part="base"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        class=${(0,s.$)({dropdown:!0,"dropdown--open":this.open})}
      >
        <slot
          name="trigger"
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
          @slotchange=${this.handleTriggerSlotChange}
        ></slot>

        <slot
          part="panel"
          class="dropdown__panel"
          aria-hidden=${this.open?"false":"true"}
          aria-labelledby="dropdown"
        ></slot>
      </sl-popup>
    `}};f.styles=g,(0,o.u2)([(0,r.IO)(".dropdown")],f.prototype,"popup",2),(0,o.u2)([(0,r.IO)(".dropdown__trigger")],f.prototype,"trigger",2),(0,o.u2)([(0,r.IO)(".dropdown__panel")],f.prototype,"panel",2),(0,o.u2)([(0,r.Cb)({type:Boolean,reflect:!0})],f.prototype,"open",2),(0,o.u2)([(0,r.Cb)({reflect:!0})],f.prototype,"placement",2),(0,o.u2)([(0,r.Cb)({type:Boolean,reflect:!0})],f.prototype,"disabled",2),(0,o.u2)([(0,r.Cb)({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],f.prototype,"stayOpenOnSelect",2),(0,o.u2)([(0,r.Cb)({attribute:!1})],f.prototype,"containingElement",2),(0,o.u2)([(0,r.Cb)({type:Number})],f.prototype,"distance",2),(0,o.u2)([(0,r.Cb)({type:Number})],f.prototype,"skidding",2),(0,o.u2)([(0,r.Cb)({type:Boolean})],f.prototype,"hoist",2),(0,o.u2)([(0,p.Y)("open",{waitUntilFirstUpdate:!0})],f.prototype,"handleOpenChange",1),f=(0,o.u2)([(0,r.Mo)("sl-dropdown")],f),(0,a.jx)("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}}),(0,a.jx)("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}})},2868:(e,t,n)=>{function o(e,t,n){return new Promise((o=>{if((null==n?void 0:n.duration)===1/0)throw new Error("Promise-based animations must be finite.");const i=e.animate(t,Object.assign(Object.assign({},n),{duration:s()?0:n.duration}));i.addEventListener("cancel",o,{once:!0}),i.addEventListener("finish",o,{once:!0})}))}function i(e){return(e=e.toString().toLowerCase()).indexOf("ms")>-1?parseFloat(e):e.indexOf("s")>-1?1e3*parseFloat(e):parseFloat(e)}function s(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function r(e){return Promise.all(e.getAnimations().map((e=>new Promise((t=>{const n=requestAnimationFrame(t);e.addEventListener("cancel",(()=>n),{once:!0}),e.addEventListener("finish",(()=>n),{once:!0}),e.cancel()})))))}function a(e,t){return e.map((e=>Object.assign(Object.assign({},e),{height:"auto"===e.height?`${t}px`:e.height})))}n.d(t,{GH:()=>a,RA:()=>i,U_:()=>r,nk:()=>s,nv:()=>o})},7173:(e,t,n)=>{function o(e,t){return new Promise((n=>{e.addEventListener(t,(function o(i){i.target===e&&(e.removeEventListener(t,o),n())}))}))}n.d(t,{m:()=>o})},1818:(e,t,n)=>{function o(e){const t=e.tagName.toLowerCase();return"-1"!==e.getAttribute("tabindex")&&!e.hasAttribute("disabled")&&(!e.hasAttribute("aria-disabled")||"false"===e.getAttribute("aria-disabled"))&&!("input"===t&&"radio"===e.getAttribute("type")&&!e.hasAttribute("checked"))&&null!==e.offsetParent&&"hidden"!==window.getComputedStyle(e).visibility&&(!("audio"!==t&&"video"!==t||!e.hasAttribute("controls"))||!!e.hasAttribute("tabindex")||!(!e.hasAttribute("contenteditable")||"false"===e.getAttribute("contenteditable"))||["button","input","select","textarea","a","audio","video","summary"].includes(t))}function i(e){var t,n;const i=[];return function e(t){t instanceof HTMLElement&&(i.push(t),null!==t.shadowRoot&&"open"===t.shadowRoot.mode&&e(t.shadowRoot)),[...t.children].forEach((t=>e(t)))}(e),{start:null!==(t=i.find((e=>o(e))))&&void 0!==t?t:null,end:null!==(n=i.reverse().find((e=>o(e))))&&void 0!==n?n:null}}n.d(t,{C:()=>i})},3005:(e,t,n)=>{function o(e,t){const n=Object.assign({waitUntilFirstUpdate:!1},t);return(t,o)=>{const{update:i}=t,s=Array.isArray(e)?e:[e];t.update=function(e){s.forEach((t=>{const i=t;if(e.has(i)){const t=e.get(i),s=this[i];t!==s&&(n.waitUntilFirstUpdate&&!this.hasUpdated||this[o](t,s))}})),i.call(this,e)}}}n.d(t,{Y:()=>o})},1452:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n(8427).iv`
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
`},4573:(e,t,n)=>{n.d(t,{O8:()=>a,jx:()=>r}),n(7979);const o=new Map,i=new WeakMap;function s(e,t){return"rtl"===t.toLowerCase()?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function r(e,t){o.set(e,function(e){return null!=e?e:{keyframes:[],options:{duration:0}}}(t))}function a(e,t,n){const r=i.get(e);if(null==r?void 0:r[t])return s(r[t],n.dir);const a=o.get(t);return a?s(a,n.dir):{keyframes:[],options:{duration:0}}}},1321:(e,t,n)=>{n.d(t,{V:()=>c}),n(7979);const o=new Set,i=new MutationObserver(d),s=new Map;let r,a=document.documentElement.dir||"ltr",l=document.documentElement.lang||navigator.language;function d(){a=document.documentElement.dir||"ltr",l=document.documentElement.lang||navigator.language,[...o.keys()].map((e=>{"function"==typeof e.requestUpdate&&e.requestUpdate()}))}i.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});class h{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){o.add(this.host)}hostDisconnected(){o.delete(this.host)}dir(){return`${this.host.dir||a}`.toLowerCase()}lang(){return`${this.host.lang||l}`.toLowerCase()}getTranslationData(e){var t,n;const o=new Intl.Locale(e),i=null==o?void 0:o.language.toLowerCase(),r=null!==(n=null===(t=null==o?void 0:o.region)||void 0===t?void 0:t.toLowerCase())&&void 0!==n?n:"";return{locale:o,language:i,region:r,primary:s.get(`${i}-${r}`),secondary:s.get(i)}}exists(e,t){var n;const{primary:o,secondary:i}=this.getTranslationData(null!==(n=t.lang)&&void 0!==n?n:this.lang());return t=Object.assign({includeFallback:!1},t),!!(o&&o[e]||i&&i[e]||t.includeFallback&&r&&r[e])}term(e,...t){const{primary:n,secondary:o}=this.getTranslationData(this.lang());let i;if(n&&n[e])i=n[e];else if(o&&o[e])i=o[e];else{if(!r||!r[e])return console.error(`No translation found for: ${String(e)}`),String(e);i=r[e]}return"function"==typeof i?i(...t):i}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,n){return new Intl.RelativeTimeFormat(this.lang(),n).format(e,t)}}!function(...e){e.map((e=>{const t=e.$code.toLowerCase();s.has(t)?s.set(t,Object.assign(Object.assign({},s.get(t)),e)):s.set(t,e),r||(r=e)})),d()}({$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copy:"Copy",currentValue:"Current value",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>0===e?"No options selected":1===e?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"});class c extends h{}},7514:(e,t,n)=>{n.d(t,{XM:()=>i,Xe:()=>s,pX:()=>o});const o={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},i=e=>(...t)=>({_$litDirective$:e,values:t});class s{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}},9832:(e,t,n)=>{n.d(t,{$:()=>s});var o=n(3311),i=n(7514);const s=(0,i.XM)(class extends i.Xe{constructor(e){var t;if(super(e),e.type!==i.pX.ATTRIBUTE||"class"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){var n,i;if(void 0===this.it){this.it=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!(null===(n=this.nt)||void 0===n?void 0:n.has(e))&&this.it.add(e);return this.render(t)}const s=e.element.classList;this.it.forEach((e=>{e in t||(s.remove(e),this.it.delete(e))}));for(const e in t){const n=!!t[e];n===this.it.has(e)||(null===(i=this.nt)||void 0===i?void 0:i.has(e))||(n?(s.add(e),this.it.add(e)):(s.remove(e),this.it.delete(e)))}return o.Jb}})}}]);
//# sourceMappingURL=sl-dropdown.fedcda1e.js.map
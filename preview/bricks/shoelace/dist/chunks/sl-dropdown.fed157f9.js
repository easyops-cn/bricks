/*! For license information please see sl-dropdown.fed157f9.js.LICENSE.txt */
"use strict";(self.webpackChunk_next_bricks_shoelace=self.webpackChunk_next_bricks_shoelace||[]).push([[5656],{2699:(e,t,n)=>{n.r(t),n(5257),n(7901)},7901:(e,t,n)=>{n(8258),n(4804);var o=n(7719);function i(e){document.documentElement.classList["dark"===e||"dark-v2"===e?"add":"remove"]("sl-theme-dark")}n(7422),(0,o.j)(n.p),i(document.documentElement.dataset.theme),window.addEventListener("theme.change",(e=>{i(e.detail)}))},9832:(e,t,n)=>{n.d(t,{A:()=>a});var o=n(6758),i=n.n(o),s=n(935),r=n.n(s)()(i());r.push([e.id,":root,\n.sl-theme-dark{--sl-z-index-drawer:1000;--sl-z-index-dialog:1000;--sl-z-index-dropdown:1050;--sl-z-index-toast:1001;--sl-z-index-tooltip:1070}.sl-toast-stack{width:100%;left:0;right:auto;overflow:initial;pointer-events:none}.sl-toast-stack > sl-alert{pointer-events:all}",""]);const a=r},7422:(e,t,n)=>{var o=n(2591),i=n.n(o),s=n(1740),r=n.n(s),a=n(8128),l=n.n(a),d=n(855),c=n.n(d),h=n(3051),p=n.n(h),u=n(3656),m=n.n(u),g=n(9832),f={};f.styleTagTransform=m(),f.setAttributes=c(),f.insert=l().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=p(),i()(g.A,f),g.A&&g.A.locals&&g.A.locals},5258:(e,t,n)=>{n.d(t,{XC:()=>d,c2:()=>h});const o=new Set,i=new MutationObserver(c),s=new Map;let r,a=document.documentElement.dir||"ltr",l=document.documentElement.lang||navigator.language;function d(...e){e.map((e=>{const t=e.$code.toLowerCase();s.has(t)?s.set(t,Object.assign(Object.assign({},s.get(t)),e)):s.set(t,e),r||(r=e)})),c()}function c(){a=document.documentElement.dir||"ltr",l=document.documentElement.lang||navigator.language,[...o.keys()].map((e=>{"function"==typeof e.requestUpdate&&e.requestUpdate()}))}i.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});class h{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){o.add(this.host)}hostDisconnected(){o.delete(this.host)}dir(){return`${this.host.dir||a}`.toLowerCase()}lang(){return`${this.host.lang||l}`.toLowerCase()}getTranslationData(e){var t,n;const o=new Intl.Locale(e.replace(/_/g,"-")),i=null==o?void 0:o.language.toLowerCase(),r=null!==(n=null===(t=null==o?void 0:o.region)||void 0===t?void 0:t.toLowerCase())&&void 0!==n?n:"";return{locale:o,language:i,region:r,primary:s.get(`${i}-${r}`),secondary:s.get(i)}}exists(e,t){var n;const{primary:o,secondary:i}=this.getTranslationData(null!==(n=t.lang)&&void 0!==n?n:this.lang());return t=Object.assign({includeFallback:!1},t),!!(o&&o[e]||i&&i[e]||t.includeFallback&&r&&r[e])}term(e,...t){const{primary:n,secondary:o}=this.getTranslationData(this.lang());let i;if(n&&n[e])i=n[e];else if(o&&o[e])i=o[e];else{if(!r||!r[e])return console.error(`No translation found for: ${String(e)}`),String(e);i=r[e]}return"function"==typeof i?i(...t):i}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,n){return new Intl.RelativeTimeFormat(this.lang(),n).format(e,t)}}},1060:(e,t,n)=>{function o(e,t){return new Promise((n=>{e.addEventListener(t,(function o(i){i.target===e&&(e.removeEventListener(t,o),n())}))}))}n.d(t,{l:()=>o})},9281:(e,t,n)=>{n.d(t,{Ee:()=>r,RB:()=>a}),n(7012);var o=new Map,i=new WeakMap;function s(e,t){return"rtl"===t.toLowerCase()?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function r(e,t){o.set(e,function(e){return null!=e?e:{keyframes:[],options:{duration:0}}}(t))}function a(e,t,n){const r=i.get(e);if(null==r?void 0:r[t])return s(r[t],n.dir);const a=o.get(t);return a?s(a,n.dir):{keyframes:[],options:{duration:0}}}},5226:(e,t,n)=>{n.d(t,{E9:()=>s,Ey:()=>a,Oe:()=>r,dc:()=>l,jd:()=>i});var o=n(7012);function i(e,t,n){return new Promise((i=>{if((null==n?void 0:n.duration)===1/0)throw new Error("Promise-based animations must be finite.");const s=e.animate(t,(0,o.ko)((0,o.IA)({},n),{duration:r()?0:n.duration}));s.addEventListener("cancel",i,{once:!0}),s.addEventListener("finish",i,{once:!0})}))}function s(e){return(e=e.toString().toLowerCase()).indexOf("ms")>-1?parseFloat(e):e.indexOf("s")>-1?1e3*parseFloat(e):parseFloat(e)}function r(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function a(e){return Promise.all(e.getAnimations().map((e=>new Promise((t=>{const n=requestAnimationFrame(t);e.addEventListener("cancel",(()=>n),{once:!0}),e.addEventListener("finish",(()=>n),{once:!0}),e.cancel()})))))}function l(e,t){return e.map((e=>(0,o.ko)((0,o.IA)({},e),{height:"auto"===e.height?`${t}px`:e.height})))}},3280:(e,t,n)=>{n.d(t,{k:()=>i});var o={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>0===e?"No options selected":1===e?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};(0,n(5258).XC)(o);var i=o},9230:(e,t,n)=>{n.d(t,{H:()=>i});var o=n(7324),i=n(5024).AH`
  ${o.$}

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
`},7371:(e,t,n)=>{n.d(t,{n:()=>f});var o=n(9230),i=n(8822),s=n(8538),r=n(9281),a=n(1060),l=n(5226),d=n(333),c=n(5794),h=n(7489),p=n(7012),u=n(3788),m=n(5024),g=n(2489),f=class extends h.f{constructor(){super(...arguments),this.localize=new d.c(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.handleKeyDown=e=>{this.open&&"Escape"===e.key&&(e.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=e=>{var t;if("Escape"===e.key&&this.open)return e.stopPropagation(),this.focusOnTrigger(),void this.hide();if("Tab"===e.key){if(this.open&&"sl-menu-item"===(null==(t=document.activeElement)?void 0:t.tagName.toLowerCase()))return e.preventDefault(),this.hide(),void this.focusOnTrigger();setTimeout((()=>{var e,t,n;const o=(null==(e=this.containingElement)?void 0:e.getRootNode())instanceof ShadowRoot?null==(n=null==(t=document.activeElement)?void 0:t.shadowRoot)?void 0:n.activeElement:document.activeElement;this.containingElement&&(null==o?void 0:o.closest(this.containingElement.tagName.toLowerCase()))===this.containingElement||this.hide()}))}},this.handleDocumentMouseDown=e=>{const t=e.composedPath();this.containingElement&&!t.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=e=>{const t=e.target;this.stayOpenOnSelect||"sl-menu"!==t.tagName.toLowerCase()||(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const e=this.trigger.assignedElements({flatten:!0})[0];"function"==typeof(null==e?void 0:e.focus)&&e.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find((e=>"sl-menu"===e.tagName.toLowerCase()))}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(e){if([" ","Enter"].includes(e.key))return e.preventDefault(),void this.handleTriggerClick();const t=this.getMenu();if(t){const n=t.getAllItems(),o=n[0],i=n[n.length-1];["ArrowDown","ArrowUp","Home","End"].includes(e.key)&&(e.preventDefault(),this.open||(this.show(),await this.updateComplete),n.length>0&&this.updateComplete.then((()=>{"ArrowDown"!==e.key&&"Home"!==e.key||(t.setCurrentItem(o),o.focus()),"ArrowUp"!==e.key&&"End"!==e.key||(t.setCurrentItem(i),i.focus())})))}}handleTriggerKeyUp(e){" "===e.key&&e.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const e=this.trigger.assignedElements({flatten:!0}).find((e=>(0,i.w)(e).start));let t;if(e){switch(e.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":t=e.button;break;default:t=e}t.setAttribute("aria-haspopup","true"),t.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,(0,a.l)(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,(0,a.l)(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){this.panel.addEventListener("sl-select",this.handlePanelSelect),this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown)}async handleOpenChange(){if(this.disabled)this.open=!1;else if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await(0,l.Ey)(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:e,options:t}=(0,r.RB)(this,"dropdown.show",{dir:this.localize.dir()});await(0,l.jd)(this.popup.popup,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await(0,l.Ey)(this);const{keyframes:e,options:t}=(0,r.RB)(this,"dropdown.hide",{dir:this.localize.dir()});await(0,l.jd)(this.popup.popup,e,t),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return m.qy`
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
        class=${(0,u.H)({dropdown:!0,"dropdown--open":this.open})}
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

        <div aria-hidden=${this.open?"false":"true"} aria-labelledby="dropdown">
          <slot part="panel" class="dropdown__panel"></slot>
        </div>
      </sl-popup>
    `}};f.styles=o.H,f.dependencies={"sl-popup":s.m},(0,p.Cc)([(0,g.P)(".dropdown")],f.prototype,"popup",2),(0,p.Cc)([(0,g.P)(".dropdown__trigger")],f.prototype,"trigger",2),(0,p.Cc)([(0,g.P)(".dropdown__panel")],f.prototype,"panel",2),(0,p.Cc)([(0,g.MZ)({type:Boolean,reflect:!0})],f.prototype,"open",2),(0,p.Cc)([(0,g.MZ)({reflect:!0})],f.prototype,"placement",2),(0,p.Cc)([(0,g.MZ)({type:Boolean,reflect:!0})],f.prototype,"disabled",2),(0,p.Cc)([(0,g.MZ)({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],f.prototype,"stayOpenOnSelect",2),(0,p.Cc)([(0,g.MZ)({attribute:!1})],f.prototype,"containingElement",2),(0,p.Cc)([(0,g.MZ)({type:Number})],f.prototype,"distance",2),(0,p.Cc)([(0,g.MZ)({type:Number})],f.prototype,"skidding",2),(0,p.Cc)([(0,g.MZ)({type:Boolean})],f.prototype,"hoist",2),(0,p.Cc)([(0,c.w)("open",{waitUntilFirstUpdate:!0})],f.prototype,"handleOpenChange",1),(0,r.Ee)("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}}),(0,r.Ee)("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}})},5794:(e,t,n)=>{n.d(t,{w:()=>i});var o=n(7012);function i(e,t){const n=(0,o.IA)({waitUntilFirstUpdate:!1},t);return(t,o)=>{const{update:i}=t,s=Array.isArray(e)?e:[e];t.update=function(e){s.forEach((t=>{const i=t;if(e.has(i)){const t=e.get(i),s=this[i];t!==s&&(n.waitUntilFirstUpdate&&!this.hasUpdated||this[o](t,s))}})),i.call(this,e)}}}},7324:(e,t,n)=>{n.d(t,{$:()=>o});var o=n(5024).AH`
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
`},333:(e,t,n)=>{n.d(t,{c:()=>s});var o=n(3280),i=n(5258),s=class extends i.c2{};(0,i.XC)(o.k)},8822:(e,t,n)=>{function o(e){var t,n;const o=i(e);return{start:null!=(t=o[0])?t:null,end:null!=(n=o[o.length-1])?n:null}}function i(e){const t=[];return function n(o){if(o instanceof Element){if(o.hasAttribute("inert"))return;!t.includes(o)&&function(e){const t=e.tagName.toLowerCase();return"-1"!==e.getAttribute("tabindex")&&!e.hasAttribute("disabled")&&!("input"===t&&"radio"===e.getAttribute("type")&&!e.hasAttribute("checked"))&&(n=e,!!Boolean(n.offsetParent||n.offsetWidth||n.offsetHeight||n.getClientRects().length)&&"hidden"!==window.getComputedStyle(e).visibility&&(!("audio"!==t&&"video"!==t||!e.hasAttribute("controls"))||!!e.hasAttribute("tabindex")||!(!e.hasAttribute("contenteditable")||"false"===e.getAttribute("contenteditable"))||["button","input","select","textarea","a","audio","video","summary"].includes(t)));var n}(o)&&t.push(o),o instanceof HTMLSlotElement&&(null==(i=o.getRootNode({composed:!0}))?void 0:i.host)!==e&&o.assignedElements({flatten:!0}).forEach((e=>{n(e)})),null!==o.shadowRoot&&"open"===o.shadowRoot.mode&&n(o.shadowRoot)}var i;[...o.children].forEach((e=>n(e)))}(e),t.sort(((e,t)=>{const n=Number(e.getAttribute("tabindex"))||0;return(Number(t.getAttribute("tabindex"))||0)-n}))}n.d(t,{J:()=>i,w:()=>o})},5257:(e,t,n)=>{n(7371).n.define("sl-dropdown"),n(9230),n(8538),n(60),n(9281),n(5226),n(333),n(3280),n(5794),n(7489),n(7324),n(7012)},5128:(e,t,n)=>{n.d(t,{OA:()=>o,WL:()=>s,u$:()=>i});var o={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},i=e=>function(){for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return{_$litDirective$:e,values:n}};class s{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}},3788:(e,t,n)=>{n.d(t,{H:()=>s});var o=n(4716),i=n(5128),s=(0,i.u$)(class extends i.WL{constructor(e){var t;if(super(e),e.type!==i.OA.ATTRIBUTE||"class"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,t){var[n]=t;if(void 0===this.it){for(var i in this.it=new Set,void 0!==e.strings&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e)))),n){var s;n[i]&&(null===(s=this.st)||void 0===s||!s.has(i))&&this.it.add(i)}return this.render(n)}var r=e.element.classList;for(var a of this.it)a in n||(r.remove(a),this.it.delete(a));for(var l in n){var d,c=!!n[l];c===this.it.has(l)||(null===(d=this.st)||void 0===d?void 0:d.has(l))||(c?(r.add(l),this.it.add(l)):(r.remove(l),this.it.delete(l)))}return o.c0}})}}]);
//# sourceMappingURL=sl-dropdown.fed157f9.js.map
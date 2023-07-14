"use strict";(self.webpackChunk_next_bricks_shoelace=self.webpackChunk_next_bricks_shoelace||[]).push([[4259],{8223:(e,t,o)=>{o.r(t),o(1069),o(5517)},5517:(e,t,o)=>{o(2969),o(3467);var i=o(4124);function n(e){document.documentElement.classList["dark"===e||"dark-v2"===e?"add":"remove"]("sl-theme-dark")}o(1744),(0,i.t)(o.p),n(document.documentElement.dataset.theme),window.addEventListener("theme.change",(e=>{n(e.detail)}))},738:(e,t,o)=>{o.d(t,{Z:()=>l});var i=o(9601),n=o.n(i),s=o(2609),a=o.n(s)()(n());a.push([e.id,":root,\n.sl-theme-dark{--sl-z-index-drawer:1000;--sl-z-index-dialog:1000;--sl-z-index-dropdown:1050;--sl-z-index-toast:1000;--sl-z-index-tooltip:1070}.sl-toast-stack{width:100%;left:0;right:auto;overflow:initial;pointer-events:none}.sl-toast-stack > sl-alert{pointer-events:all}",""]);const l=a},1744:(e,t,o)=>{var i=o(6062),n=o.n(i),s=o(4036),a=o.n(s),l=o(6793),r=o.n(l),d=o(7892),c=o.n(d),h=o(1173),u=o.n(h),p=o(2464),g=o.n(p),m=o(738),f={};f.styleTagTransform=g(),f.setAttributes=c(),f.insert=r().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=u(),n()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals},1069:(e,t,o)=>{var i=o(7979),n=(o(9026),o(2868)),s=o(9832),a=o(3030),l=o(4573),r=o(962),d=o(8427),c=o(2747),h=o(1321),u=o(2421),p=o(7173),g=o(3005),m=o(4666),f=o(5166),v=o(1452),y=d.iv`
  ${v.Z}

  :host {
    --width: 31rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--sl-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--sl-spacing-2x-large));
    max-height: calc(100% - var(--sl-spacing-2x-large));
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .dialog__header-actions sl-icon-button,
  .dialog__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .dialog__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(sl-button:not(:first-of-type)) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
  }

  @media (forced-colors: active) {
    .dialog__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`;let b=class extends f.Z{constructor(){super(...arguments),this.hasSlotController=new r.rc(this,"footer"),this.localize=new h.V(this),this.modal=new m.Z(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=e=>{this.open&&"Escape"===e.key&&(e.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),(0,u.M4)(this))}disconnectedCallback(){super.disconnectedCallback(),(0,u.gG)(this)}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const e=(0,l.O8)(this,"dialog.denyClose",{dir:this.localize.dir()});(0,n.nv)(this.panel,e.keyframes,e.options)}else this.hide()}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),(0,u.M4)(this);const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([(0,n.U_)(this.dialog),(0,n.U_)(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame((()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")}));const t=(0,l.O8)(this,"dialog.show",{dir:this.localize.dir()}),o=(0,l.O8)(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([(0,n.nv)(this.panel,t.keyframes,t.options),(0,n.nv)(this.overlay,o.keyframes,o.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([(0,n.U_)(this.dialog),(0,n.U_)(this.overlay)]);const e=(0,l.O8)(this,"dialog.hide",{dir:this.localize.dir()}),t=(0,l.O8)(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([(0,n.nv)(this.overlay,t.keyframes,t.options).then((()=>{this.overlay.hidden=!0})),(0,n.nv)(this.panel,e.keyframes,e.options).then((()=>{this.panel.hidden=!0}))]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,(0,u.gG)(this);const o=this.originalTrigger;"function"==typeof(null==o?void 0:o.focus)&&setTimeout((()=>o.focus())),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,(0,p.m)(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,(0,p.m)(this,"sl-after-hide")}render(){return d.dy`
      <div
        part="base"
        class=${(0,s.$)({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${(0,c.o)(this.noHeader?this.label:void 0)}
          aria-labelledby=${(0,c.o)(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":d.dy`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:String.fromCharCode(65279)} </slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="dialog__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click="${()=>this.requestClose("close-button")}"
                    ></sl-icon-button>
                  </div>
                </header>
              `}

          <slot part="body" class="dialog__body"></slot>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};b.styles=y,(0,i.u2)([(0,a.IO)(".dialog")],b.prototype,"dialog",2),(0,i.u2)([(0,a.IO)(".dialog__panel")],b.prototype,"panel",2),(0,i.u2)([(0,a.IO)(".dialog__overlay")],b.prototype,"overlay",2),(0,i.u2)([(0,a.Cb)({type:Boolean,reflect:!0})],b.prototype,"open",2),(0,i.u2)([(0,a.Cb)({reflect:!0})],b.prototype,"label",2),(0,i.u2)([(0,a.Cb)({attribute:"no-header",type:Boolean,reflect:!0})],b.prototype,"noHeader",2),(0,i.u2)([(0,g.Y)("open",{waitUntilFirstUpdate:!0})],b.prototype,"handleOpenChange",1),b=(0,i.u2)([(0,a.Mo)("sl-dialog")],b),(0,l.jx)("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}}),(0,l.jx)("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}}),(0,l.jx)("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}}),(0,l.jx)("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}}),(0,l.jx)("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}})},2868:(e,t,o)=>{function i(e,t,o){return new Promise((i=>{if((null==o?void 0:o.duration)===1/0)throw new Error("Promise-based animations must be finite.");const n=e.animate(t,Object.assign(Object.assign({},o),{duration:s()?0:o.duration}));n.addEventListener("cancel",i,{once:!0}),n.addEventListener("finish",i,{once:!0})}))}function n(e){return(e=e.toString().toLowerCase()).indexOf("ms")>-1?parseFloat(e):e.indexOf("s")>-1?1e3*parseFloat(e):parseFloat(e)}function s(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function a(e){return Promise.all(e.getAnimations().map((e=>new Promise((t=>{const o=requestAnimationFrame(t);e.addEventListener("cancel",(()=>o),{once:!0}),e.addEventListener("finish",(()=>o),{once:!0}),e.cancel()})))))}function l(e,t){return e.map((e=>Object.assign(Object.assign({},e),{height:"auto"===e.height?`${t}px`:e.height})))}o.d(t,{GH:()=>l,RA:()=>n,U_:()=>a,nk:()=>s,nv:()=>i})},7173:(e,t,o)=>{function i(e,t){return new Promise((o=>{e.addEventListener(t,(function i(n){n.target===e&&(e.removeEventListener(t,i),o())}))}))}o.d(t,{m:()=>i})},4666:(e,t,o)=>{o.d(t,{Z:()=>s});var i=o(1818);let n=[];class s{constructor(e){this.tabDirection="forward",this.element=e,this.handleFocusIn=this.handleFocusIn.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleKeyUp=this.handleKeyUp.bind(this)}activate(){n.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){n=n.filter((e=>e!==this.element)),document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return n[n.length-1]===this.element}checkFocus(){if(this.isActive()&&!this.element.matches(":focus-within")){const{start:e,end:t}=(0,i.C)(this.element),o="forward"===this.tabDirection?e:t;"function"==typeof(null==o?void 0:o.focus)&&o.focus({preventScroll:!0})}}handleFocusIn(){this.checkFocus()}handleKeyDown(e){"Tab"===e.key&&e.shiftKey&&(this.tabDirection="backward",requestAnimationFrame((()=>this.checkFocus())))}handleKeyUp(){this.tabDirection="forward"}}},2421:(e,t,o)=>{o.d(t,{M4:()=>n,zT:()=>a,gG:()=>s});const i=new Set;function n(e){if(i.add(e),!document.body.classList.contains("sl-scroll-lock")){const e=function(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}();document.body.classList.add("sl-scroll-lock"),document.body.style.setProperty("--sl-scroll-lock-size",`${e}px`)}}function s(e){i.delete(e),0===i.size&&(document.body.classList.remove("sl-scroll-lock"),document.body.style.removeProperty("--sl-scroll-lock-size"))}function a(e,t,o="vertical",i="smooth"){const n=function(e,t){return{top:Math.round(e.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(e.getBoundingClientRect().left-t.getBoundingClientRect().left)}}(e,t),s=n.top+t.scrollTop,a=n.left+t.scrollLeft,l=t.scrollLeft,r=t.scrollLeft+t.offsetWidth,d=t.scrollTop,c=t.scrollTop+t.offsetHeight;"horizontal"!==o&&"both"!==o||(a<l?t.scrollTo({left:a,behavior:i}):a+e.clientWidth>r&&t.scrollTo({left:a-t.offsetWidth+e.clientWidth,behavior:i})),"vertical"!==o&&"both"!==o||(s<d?t.scrollTo({top:s,behavior:i}):s+e.clientHeight>c&&t.scrollTo({top:s-t.offsetHeight+e.clientHeight,behavior:i}))}},962:(e,t,o)=>{o.d(t,{FB:()=>n,rc:()=>i});class i{constructor(e,...t){this.slotNames=[],(this.host=e).addController(this),this.slotNames=t,this.handleSlotChange=this.handleSlotChange.bind(this)}hasDefaultSlot(){return[...this.host.childNodes].some((e=>{if(e.nodeType===e.TEXT_NODE&&""!==e.textContent.trim())return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if("sl-visually-hidden"===t.tagName.toLowerCase())return!1;if(!t.hasAttribute("slot"))return!0}return!1}))}hasNamedSlot(e){return null!==this.host.querySelector(`:scope > [slot="${e}"]`)}test(e){return"[default]"===e?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}handleSlotChange(e){const t=e.target;(this.slotNames.includes("[default]")&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()}}function n(e){if(!e)return"";const t=e.assignedNodes({flatten:!0});let o="";return[...t].forEach((e=>{e.nodeType===Node.TEXT_NODE&&(o+=e.textContent)})),o}},1818:(e,t,o)=>{function i(e){const t=e.tagName.toLowerCase();return"-1"!==e.getAttribute("tabindex")&&!e.hasAttribute("disabled")&&(!e.hasAttribute("aria-disabled")||"false"===e.getAttribute("aria-disabled"))&&!("input"===t&&"radio"===e.getAttribute("type")&&!e.hasAttribute("checked"))&&null!==e.offsetParent&&"hidden"!==window.getComputedStyle(e).visibility&&(!("audio"!==t&&"video"!==t||!e.hasAttribute("controls"))||!!e.hasAttribute("tabindex")||!(!e.hasAttribute("contenteditable")||"false"===e.getAttribute("contenteditable"))||["button","input","select","textarea","a","audio","video","summary"].includes(t))}function n(e){var t,o;const n=[];return function e(t){t instanceof HTMLElement&&(n.push(t),null!==t.shadowRoot&&"open"===t.shadowRoot.mode&&e(t.shadowRoot)),[...t.children].forEach((t=>e(t)))}(e),{start:null!==(t=n.find((e=>i(e))))&&void 0!==t?t:null,end:null!==(o=n.reverse().find((e=>i(e))))&&void 0!==o?o:null}}o.d(t,{C:()=>n})},4573:(e,t,o)=>{o.d(t,{O8:()=>l,jx:()=>a}),o(7979);const i=new Map,n=new WeakMap;function s(e,t){return"rtl"===t.toLowerCase()?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function a(e,t){i.set(e,function(e){return null!=e?e:{keyframes:[],options:{duration:0}}}(t))}function l(e,t,o){const a=n.get(e);if(null==a?void 0:a[t])return s(a[t],o.dir);const l=i.get(t);return l?s(l,o.dir):{keyframes:[],options:{duration:0}}}},1321:(e,t,o)=>{o.d(t,{V:()=>h}),o(7979);const i=new Set,n=new MutationObserver(d),s=new Map;let a,l=document.documentElement.dir||"ltr",r=document.documentElement.lang||navigator.language;function d(){l=document.documentElement.dir||"ltr",r=document.documentElement.lang||navigator.language,[...i.keys()].map((e=>{"function"==typeof e.requestUpdate&&e.requestUpdate()}))}n.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});class c{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){i.add(this.host)}hostDisconnected(){i.delete(this.host)}dir(){return`${this.host.dir||l}`.toLowerCase()}lang(){return`${this.host.lang||r}`.toLowerCase()}getTranslationData(e){var t,o;const i=new Intl.Locale(e),n=null==i?void 0:i.language.toLowerCase(),a=null!==(o=null===(t=null==i?void 0:i.region)||void 0===t?void 0:t.toLowerCase())&&void 0!==o?o:"";return{locale:i,language:n,region:a,primary:s.get(`${n}-${a}`),secondary:s.get(n)}}exists(e,t){var o;const{primary:i,secondary:n}=this.getTranslationData(null!==(o=t.lang)&&void 0!==o?o:this.lang());return t=Object.assign({includeFallback:!1},t),!!(i&&i[e]||n&&n[e]||t.includeFallback&&a&&a[e])}term(e,...t){const{primary:o,secondary:i}=this.getTranslationData(this.lang());let n;if(o&&o[e])n=o[e];else if(i&&i[e])n=i[e];else{if(!a||!a[e])return console.error(`No translation found for: ${String(e)}`),String(e);n=a[e]}return"function"==typeof n?n(...t):n}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(e,t)}}!function(...e){e.map((e=>{const t=e.$code.toLowerCase();s.has(t)?s.set(t,Object.assign(Object.assign({},s.get(t)),e)):s.set(t,e),a||(a=e)})),d()}({$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copy:"Copy",currentValue:"Current value",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>0===e?"No options selected":1===e?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"});class h extends c{}}}]);
//# sourceMappingURL=sl-dialog.4e93913a.js.map
"use strict";(self.webpackChunk_next_bricks_shoelace=self.webpackChunk_next_bricks_shoelace||[]).push([[4259],{6210:(e,t,o)=>{o.r(t),o(7259),o(6771)},6771:(e,t,o)=>{o(2969),o(3467);var n=o(4124);function i(e){document.documentElement.classList["dark"===e||"dark-v2"===e?"add":"remove"]("sl-theme-dark")}o(1744),(0,n.t)(o.p),i(document.documentElement.dataset.theme),window.addEventListener("theme.change",(e=>{i(e.detail)}))},738:(e,t,o)=>{o.d(t,{Z:()=>l});var n=o(9601),i=o.n(n),s=o(2609),a=o.n(s)()(i());a.push([e.id,":root,\n.sl-theme-dark{--sl-z-index-drawer:1000;--sl-z-index-dialog:1000;--sl-z-index-dropdown:1050;--sl-z-index-toast:1000;--sl-z-index-tooltip:1070}.sl-toast-stack{width:100%;left:0;right:auto;overflow:initial;pointer-events:none}.sl-toast-stack > sl-alert{pointer-events:all}",""]);const l=a},1744:(e,t,o)=>{var n=o(6062),i=o.n(n),s=o(4036),a=o.n(s),l=o(6793),r=o.n(l),d=o(7892),c=o.n(d),h=o(1173),u=o.n(h),p=o(2464),f=o.n(p),m=o(738),g={};g.styleTagTransform=f(),g.setAttributes=c(),g.insert=r().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=u(),i()(m.Z,g),m.Z&&m.Z.locals&&m.Z.locals},8179:(e,t,o)=>{o.d(t,{P5:()=>d,Ve:()=>h});const n=new Set,i=new MutationObserver(c),s=new Map;let a,l=document.documentElement.dir||"ltr",r=document.documentElement.lang||navigator.language;function d(...e){e.map((e=>{const t=e.$code.toLowerCase();s.has(t)?s.set(t,Object.assign(Object.assign({},s.get(t)),e)):s.set(t,e),a||(a=e)})),c()}function c(){l=document.documentElement.dir||"ltr",r=document.documentElement.lang||navigator.language,[...n.keys()].map((e=>{"function"==typeof e.requestUpdate&&e.requestUpdate()}))}i.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});class h{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){n.add(this.host)}hostDisconnected(){n.delete(this.host)}dir(){return`${this.host.dir||l}`.toLowerCase()}lang(){return`${this.host.lang||r}`.toLowerCase()}getTranslationData(e){var t,o;const n=new Intl.Locale(e),i=null==n?void 0:n.language.toLowerCase(),a=null!==(o=null===(t=null==n?void 0:n.region)||void 0===t?void 0:t.toLowerCase())&&void 0!==o?o:"";return{locale:n,language:i,region:a,primary:s.get(`${i}-${a}`),secondary:s.get(i)}}exists(e,t){var o;const{primary:n,secondary:i}=this.getTranslationData(null!==(o=t.lang)&&void 0!==o?o:this.lang());return t=Object.assign({includeFallback:!1},t),!!(n&&n[e]||i&&i[e]||t.includeFallback&&a&&a[e])}term(e,...t){const{primary:o,secondary:n}=this.getTranslationData(this.lang());let i;if(o&&o[e])i=o[e];else if(n&&n[e])i=n[e];else{if(!a||!a[e])return console.error(`No translation found for: ${String(e)}`),String(e);i=a[e]}return"function"==typeof i?i(...t):i}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(e,t)}}},3385:(e,t,o)=>{o.d(t,{V:()=>i});var n=o(8179),i=class extends n.Ve{}},4867:(e,t,o)=>{function n(e,t){return new Promise((o=>{e.addEventListener(t,(function n(i){i.target===e&&(e.removeEventListener(t,n),o())}))}))}o.d(t,{m:()=>n})},1785:(e,t,o)=>{o.d(t,{C:()=>i,V:()=>s});var n=o(497);function i(e){var t,o;const n=s(e);return{start:null!=(t=n[0])?t:null,end:null!=(o=n[n.length-1])?o:null}}function s(e){const t=[];return function o(i){if(i instanceof Element){if(i.hasAttribute("inert"))return;!t.includes(i)&&function(e){const t=e.tagName.toLowerCase();return"-1"!==e.getAttribute("tabindex")&&!e.hasAttribute("disabled")&&(!e.hasAttribute("aria-disabled")||"false"===e.getAttribute("aria-disabled"))&&!("input"===t&&"radio"===e.getAttribute("type")&&!e.hasAttribute("checked"))&&(null!==e.offsetParent||null!==(0,n.y8)(e))&&"hidden"!==window.getComputedStyle(e).visibility&&(!("audio"!==t&&"video"!==t||!e.hasAttribute("controls"))||!!e.hasAttribute("tabindex")||!(!e.hasAttribute("contenteditable")||"false"===e.getAttribute("contenteditable"))||["button","input","select","textarea","a","audio","video","summary"].includes(t))}(i)&&t.push(i),i instanceof HTMLSlotElement&&(null==(s=i.getRootNode({composed:!0}))?void 0:s.host)!==e&&i.assignedElements({flatten:!0}).forEach((e=>{o(e)})),null!==i.shadowRoot&&"open"===i.shadowRoot.mode&&o(i.shadowRoot)}var s;[...i.children].forEach((e=>o(e)))}(e),t}},8513:(e,t,o)=>{(0,o(8179).P5)({$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>0===e?"No options selected":1===e?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"})},2162:(e,t,o)=>{o.d(t,{u:()=>a});var n=o(1785);function*i(e=document.activeElement){null!=e&&(yield e,"shadowRoot"in e&&e.shadowRoot&&"closed"!==e.shadowRoot.mode&&(yield*i(e.shadowRoot.activeElement)))}var s=[],a=class{constructor(e){this.tabDirection="forward",this.handleFocusIn=()=>{this.checkFocus()},this.handleKeyDown=e=>{var t;if("Tab"!==e.key||this.isExternalActivated)return;e.shiftKey?this.tabDirection="backward":this.tabDirection="forward",e.preventDefault();const o=(0,n.V)(this.element),i=o[0];let s=this.startElementAlreadyFocused(i)?0:this.currentFocusIndex;if(-1===s)return this.currentFocus=i,void this.currentFocus.focus({preventScroll:!0});const a="forward"===this.tabDirection?1:-1;s+a>=o.length?s=0:this.currentFocusIndex+a<0?s=o.length-1:s+=a,this.currentFocus=o[s],null==(t=this.currentFocus)||t.focus({preventScroll:!0}),setTimeout((()=>this.checkFocus()))},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=e}activate(){s.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){s=s.filter((e=>e!==this.element)),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return s[s.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const e=(0,n.V)(this.element);if(!this.element.matches(":focus-within")){const t=e[0],o=e[e.length-1],n="forward"===this.tabDirection?t:o;"function"==typeof(null==n?void 0:n.focus)&&(this.currentFocus=n,n.focus({preventScroll:!0}))}}}get currentFocusIndex(){return(0,n.V)(this.element).findIndex((e=>e===this.currentFocus))}startElementAlreadyFocused(e){for(const t of i())if(e===t)return!0;return!1}}},6167:(e,t,o)=>{o.d(t,{F:()=>i,r:()=>n});var n=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=e=>{const t=e.target;(this.slotNames.includes("[default]")&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some((e=>{if(e.nodeType===e.TEXT_NODE&&""!==e.textContent.trim())return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if("sl-visually-hidden"===t.tagName.toLowerCase())return!1;if(!t.hasAttribute("slot"))return!0}return!1}))}hasNamedSlot(e){return null!==this.host.querySelector(`:scope > [slot="${e}"]`)}test(e){return"[default]"===e?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};function i(e){if(!e)return"";const t=e.assignedNodes({flatten:!0});let o="";return[...t].forEach((e=>{e.nodeType===Node.TEXT_NODE&&(o+=e.textContent)})),o}},9622:(e,t,o)=>{o.d(t,{M4:()=>i,gG:()=>s,zT:()=>a});var n=new Set;function i(e){if(n.add(e),!document.body.classList.contains("sl-scroll-lock")){const e=function(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}();document.body.classList.add("sl-scroll-lock"),document.body.style.setProperty("--sl-scroll-lock-size",`${e}px`)}}function s(e){n.delete(e),0===n.size&&(document.body.classList.remove("sl-scroll-lock"),document.body.style.removeProperty("--sl-scroll-lock-size"))}function a(e,t,o="vertical",n="smooth"){const i=function(e,t){return{top:Math.round(e.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(e.getBoundingClientRect().left-t.getBoundingClientRect().left)}}(e,t),s=i.top+t.scrollTop,a=i.left+t.scrollLeft,l=t.scrollLeft,r=t.scrollLeft+t.offsetWidth,d=t.scrollTop,c=t.scrollTop+t.offsetHeight;"horizontal"!==o&&"both"!==o||(a<l?t.scrollTo({left:a,behavior:n}):a+e.clientWidth>r&&t.scrollTo({left:a-t.offsetWidth+e.clientWidth,behavior:n})),"vertical"!==o&&"both"!==o||(s<d?t.scrollTo({top:s,behavior:n}):s+e.clientHeight>c&&t.scrollTo({top:s-t.offsetHeight+e.clientHeight,behavior:n}))}},391:(e,t,o)=>{o.d(t,{O8:()=>l,jx:()=>a}),o(7979);var n=new Map,i=new WeakMap;function s(e,t){return"rtl"===t.toLowerCase()?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function a(e,t){n.set(e,function(e){return null!=e?e:{keyframes:[],options:{duration:0}}}(t))}function l(e,t,o){const a=i.get(e);if(null==a?void 0:a[t])return s(a[t],o.dir);const l=n.get(t);return l?s(l,o.dir):{keyframes:[],options:{duration:0}}}},6895:(e,t,o)=>{o.d(t,{GH:()=>r,RA:()=>s,U_:()=>l,nk:()=>a,nv:()=>i});var n=o(7979);function i(e,t,o){return new Promise((i=>{if((null==o?void 0:o.duration)===1/0)throw new Error("Promise-based animations must be finite.");const s=e.animate(t,(0,n.EZ)((0,n.ih)({},o),{duration:a()?0:o.duration}));s.addEventListener("cancel",i,{once:!0}),s.addEventListener("finish",i,{once:!0})}))}function s(e){return(e=e.toString().toLowerCase()).indexOf("ms")>-1?parseFloat(e):e.indexOf("s")>-1?1e3*parseFloat(e):parseFloat(e)}function a(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function l(e){return Promise.all(e.getAnimations().map((e=>new Promise((t=>{const o=requestAnimationFrame(t);e.addEventListener("cancel",(()=>o),{once:!0}),e.addEventListener("finish",(()=>o),{once:!0}),e.cancel()})))))}function r(e,t){return e.map((e=>(0,n.EZ)((0,n.ih)({},e),{height:"auto"===e.height?`${t}px`:e.height})))}},7259:(e,t,o)=>{var n=o(2162),i=o(9622),s=o(9710),a=o(8427),l=a.iv`
  ${s.N}

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
`,r=o(7482),d=o(391),c=o(4867),h=o(6895),u=o(3385),p=o(6167),f=o(4703),m=o(1465),g=o(7979),v=o(9832),y=o(2747),b=o(9900),w=class extends m.P{constructor(){super(...arguments),this.hasSlotController=new p.r(this,"footer"),this.localize=new u.V(this),this.modal=new n.u(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=e=>{"Escape"===e.key&&this.modal.isActive()&&this.open&&(e.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),(0,i.M4)(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),(0,i.gG)(this)}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const e=(0,d.O8)(this,"dialog.denyClose",{dir:this.localize.dir()});(0,h.nv)(this.panel,e.keyframes,e.options)}else this.hide()}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),(0,i.M4)(this);const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([(0,h.U_)(this.dialog),(0,h.U_)(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame((()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")}));const t=(0,d.O8)(this,"dialog.show",{dir:this.localize.dir()}),o=(0,d.O8)(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([(0,h.nv)(this.panel,t.keyframes,t.options),(0,h.nv)(this.overlay,o.keyframes,o.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([(0,h.U_)(this.dialog),(0,h.U_)(this.overlay)]);const e=(0,d.O8)(this,"dialog.hide",{dir:this.localize.dir()}),t=(0,d.O8)(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([(0,h.nv)(this.overlay,t.keyframes,t.options).then((()=>{this.overlay.hidden=!0})),(0,h.nv)(this.panel,e.keyframes,e.options).then((()=>{this.panel.hidden=!0}))]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,(0,i.gG)(this);const o=this.originalTrigger;"function"==typeof(null==o?void 0:o.focus)&&setTimeout((()=>o.focus())),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,(0,c.m)(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,(0,c.m)(this,"sl-after-hide")}render(){return a.dy`
      <div
        part="base"
        class=${(0,v.$)({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${(0,y.o)(this.noHeader?this.label:void 0)}
          aria-labelledby=${(0,y.o)(this.noHeader?void 0:"title")}
          tabindex="-1"
        >
          ${this.noHeader?"":a.dy`
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
          ${""}
          <slot part="body" class="dialog__body" tabindex="-1"></slot>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};w.styles=l,w.dependencies={"sl-icon-button":r.U},(0,g.u2)([(0,b.IO)(".dialog")],w.prototype,"dialog",2),(0,g.u2)([(0,b.IO)(".dialog__panel")],w.prototype,"panel",2),(0,g.u2)([(0,b.IO)(".dialog__overlay")],w.prototype,"overlay",2),(0,g.u2)([(0,b.Cb)({type:Boolean,reflect:!0})],w.prototype,"open",2),(0,g.u2)([(0,b.Cb)({reflect:!0})],w.prototype,"label",2),(0,g.u2)([(0,b.Cb)({attribute:"no-header",type:Boolean,reflect:!0})],w.prototype,"noHeader",2),(0,g.u2)([(0,f.Y)("open",{waitUntilFirstUpdate:!0})],w.prototype,"handleOpenChange",1),(0,d.jx)("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}}),(0,d.jx)("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}}),(0,d.jx)("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}}),(0,d.jx)("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}}),(0,d.jx)("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}}),w.define("sl-dialog"),o(335),o(8513),o(6877),o(5249),o(836),o(9699),o(1793)},497:(e,t,o)=>{function n(e){return function(e){for(let t=e;t;t=i(t))if(t instanceof Element&&"none"===getComputedStyle(t).display)return null;for(let t=i(e);t;t=i(t)){if(!(t instanceof Element))continue;const e=getComputedStyle(t);if("contents"!==e.display){if("static"!==e.position||"none"!==e.filter)return t;if("BODY"===t.tagName)return t}}return null}(e)}function i(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}o.d(t,{y8:()=>n})}}]);
//# sourceMappingURL=sl-dialog.ccbdfa53.js.map
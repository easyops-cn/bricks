"use strict";(self.webpackChunk_next_bricks_shoelace=self.webpackChunk_next_bricks_shoelace||[]).push([[1275],{4758:(e,t,o)=>{o.r(t),o(7857),o(7901)},7901:(e,t,o)=>{o(8258),o(4804);var i=o(7719);function n(e){document.documentElement.classList["dark"===e||"dark-v2"===e?"add":"remove"]("sl-theme-dark")}o(7422),(0,i.j)(o.p),n(document.documentElement.dataset.theme),window.addEventListener("theme.change",(e=>{n(e.detail)}))},9832:(e,t,o)=>{o.d(t,{A:()=>l});var i=o(6758),n=o.n(i),s=o(935),a=o.n(s)()(n());a.push([e.id,":root,\n.sl-theme-dark{--sl-z-index-drawer:1000;--sl-z-index-dialog:1000;--sl-z-index-dropdown:1050;--sl-z-index-toast:1001;--sl-z-index-tooltip:1070}.sl-toast-stack{width:100%;left:0;right:auto;overflow:initial;pointer-events:none}.sl-toast-stack > sl-alert{pointer-events:all}",""]);const l=a},7422:(e,t,o)=>{var i=o(2591),n=o.n(i),s=o(1740),a=o.n(s),l=o(8128),r=o.n(l),d=o(855),c=o.n(d),h=o(3051),u=o.n(h),p=o(3656),f=o.n(p),g=o(9832),m={};m.styleTagTransform=f(),m.setAttributes=c(),m.insert=r().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=u(),n()(g.A,m),g.A&&g.A.locals&&g.A.locals},5258:(e,t,o)=>{o.d(t,{XC:()=>d,c2:()=>h});const i=new Set,n=new MutationObserver(c),s=new Map;let a,l=document.documentElement.dir||"ltr",r=document.documentElement.lang||navigator.language;function d(...e){e.map((e=>{const t=e.$code.toLowerCase();s.has(t)?s.set(t,Object.assign(Object.assign({},s.get(t)),e)):s.set(t,e),a||(a=e)})),c()}function c(){l=document.documentElement.dir||"ltr",r=document.documentElement.lang||navigator.language,[...i.keys()].map((e=>{"function"==typeof e.requestUpdate&&e.requestUpdate()}))}n.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});class h{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){i.add(this.host)}hostDisconnected(){i.delete(this.host)}dir(){return`${this.host.dir||l}`.toLowerCase()}lang(){return`${this.host.lang||r}`.toLowerCase()}getTranslationData(e){var t,o;const i=new Intl.Locale(e.replace(/_/g,"-")),n=null==i?void 0:i.language.toLowerCase(),a=null!==(o=null===(t=null==i?void 0:i.region)||void 0===t?void 0:t.toLowerCase())&&void 0!==o?o:"";return{locale:i,language:n,region:a,primary:s.get(`${n}-${a}`),secondary:s.get(n)}}exists(e,t){var o;const{primary:i,secondary:n}=this.getTranslationData(null!==(o=t.lang)&&void 0!==o?o:this.lang());return t=Object.assign({includeFallback:!1},t),!!(i&&i[e]||n&&n[e]||t.includeFallback&&a&&a[e])}term(e,...t){const{primary:o,secondary:i}=this.getTranslationData(this.lang());let n;if(o&&o[e])n=o[e];else if(i&&i[e])n=i[e];else{if(!a||!a[e])return console.error(`No translation found for: ${String(e)}`),String(e);n=a[e]}return"function"==typeof n?n(...t):n}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(e,t)}}},1060:(e,t,o)=>{function i(e,t){return new Promise((o=>{e.addEventListener(t,(function i(n){n.target===e&&(e.removeEventListener(t,i),o())}))}))}o.d(t,{l:()=>i})},8737:(e,t,o)=>{o.d(t,{a:()=>l});var i=o(8822),n=o(7012);function*s(e=document.activeElement){null!=e&&(yield e,"shadowRoot"in e&&e.shadowRoot&&"closed"!==e.shadowRoot.mode&&(yield*(0,n.y0)(s(e.shadowRoot.activeElement))))}var a=[],l=class{constructor(e){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=e=>{var t,o;if("Tab"!==e.key||this.isExternalActivated)return;if(!this.isActive())return;e.shiftKey?this.tabDirection="backward":this.tabDirection="forward",e.preventDefault();const n=(0,i.J)(this.element),a=[...s()].pop();let l=n.findIndex((e=>e===a));if(-1===l)return this.currentFocus=n[0],void(null==(t=this.currentFocus)||t.focus({preventScroll:!0}));const r="forward"===this.tabDirection?1:-1;l+r>=n.length?l=0:l+r<0?l=n.length-1:l+=r,this.currentFocus=n[l],null==(o=this.currentFocus)||o.focus({preventScroll:!0}),setTimeout((()=>this.checkFocus()))},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=e}activate(){a.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){a=a.filter((e=>e!==this.element)),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return a[a.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const e=(0,i.J)(this.element);if(!this.element.matches(":focus-within")){const t=e[0],o=e[e.length-1],i="forward"===this.tabDirection?t:o;"function"==typeof(null==i?void 0:i.focus)&&(this.currentFocus=i,i.focus({preventScroll:!0}))}}}}},9281:(e,t,o)=>{o.d(t,{Ee:()=>a,RB:()=>l}),o(7012);var i=new Map,n=new WeakMap;function s(e,t){return"rtl"===t.toLowerCase()?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function a(e,t){i.set(e,function(e){return null!=e?e:{keyframes:[],options:{duration:0}}}(t))}function l(e,t,o){const a=n.get(e);if(null==a?void 0:a[t])return s(a[t],o.dir);const l=i.get(t);return l?s(l,o.dir):{keyframes:[],options:{duration:0}}}},5226:(e,t,o)=>{o.d(t,{E9:()=>s,Ey:()=>l,Oe:()=>a,dc:()=>r,jd:()=>n});var i=o(7012);function n(e,t,o){return new Promise((n=>{if((null==o?void 0:o.duration)===1/0)throw new Error("Promise-based animations must be finite.");const s=e.animate(t,(0,i.ko)((0,i.IA)({},o),{duration:a()?0:o.duration}));s.addEventListener("cancel",n,{once:!0}),s.addEventListener("finish",n,{once:!0})}))}function s(e){return(e=e.toString().toLowerCase()).indexOf("ms")>-1?parseFloat(e):e.indexOf("s")>-1?1e3*parseFloat(e):parseFloat(e)}function a(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function l(e){return Promise.all(e.getAnimations().map((e=>new Promise((t=>{const o=requestAnimationFrame(t);e.addEventListener("cancel",(()=>o),{once:!0}),e.addEventListener("finish",(()=>o),{once:!0}),e.cancel()})))))}function r(e,t){return e.map((e=>(0,i.ko)((0,i.IA)({},e),{height:"auto"===e.height?`${t}px`:e.height})))}},3280:(e,t,o)=>{o.d(t,{k:()=>n});var i={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>0===e?"No options selected":1===e?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};(0,o(5258).XC)(i);var n=i},4101:(e,t,o)=>{o.d(t,{X:()=>i,r:()=>n});var i=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=e=>{const t=e.target;(this.slotNames.includes("[default]")&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some((e=>{if(e.nodeType===e.TEXT_NODE&&""!==e.textContent.trim())return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if("sl-visually-hidden"===t.tagName.toLowerCase())return!1;if(!t.hasAttribute("slot"))return!0}return!1}))}hasNamedSlot(e){return null!==this.host.querySelector(`:scope > [slot="${e}"]`)}test(e){return"[default]"===e?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};function n(e){if(!e)return"";const t=e.assignedNodes({flatten:!0});let o="";return[...t].forEach((e=>{e.nodeType===Node.TEXT_NODE&&(o+=e.textContent)})),o}},4029:(e,t,o)=>{o.d(t,{I7:()=>s,JG:()=>n,Rt:()=>a});var i=new Set;function n(e){if(i.add(e),!document.body.classList.contains("sl-scroll-lock")){const e=function(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}();document.body.classList.add("sl-scroll-lock"),document.body.style.setProperty("--sl-scroll-lock-size",`${e}px`)}}function s(e){i.delete(e),0===i.size&&(document.body.classList.remove("sl-scroll-lock"),document.body.style.removeProperty("--sl-scroll-lock-size"))}function a(e,t,o="vertical",i="smooth"){const n=function(e,t){return{top:Math.round(e.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(e.getBoundingClientRect().left-t.getBoundingClientRect().left)}}(e,t),s=n.top+t.scrollTop,a=n.left+t.scrollLeft,l=t.scrollLeft,r=t.scrollLeft+t.offsetWidth,d=t.scrollTop,c=t.scrollTop+t.offsetHeight;"horizontal"!==o&&"both"!==o||(a<l?t.scrollTo({left:a,behavior:i}):a+e.clientWidth>r&&t.scrollTo({left:a-t.offsetWidth+e.clientWidth,behavior:i})),"vertical"!==o&&"both"!==o||(s<d?t.scrollTo({top:s,behavior:i}):s+e.clientHeight>c&&t.scrollTo({top:s-t.offsetHeight+e.clientHeight,behavior:i}))}},333:(e,t,o)=>{o.d(t,{c:()=>s});var i=o(3280),n=o(5258),s=class extends n.c2{};(0,n.XC)(i.k)},8822:(e,t,o)=>{function i(e){var t,o;const i=n(e);return{start:null!=(t=i[0])?t:null,end:null!=(o=i[i.length-1])?o:null}}function n(e){const t=[];return function o(i){if(i instanceof Element){if(i.hasAttribute("inert"))return;!t.includes(i)&&function(e){const t=e.tagName.toLowerCase();return"-1"!==e.getAttribute("tabindex")&&!e.hasAttribute("disabled")&&!("input"===t&&"radio"===e.getAttribute("type")&&!e.hasAttribute("checked"))&&(o=e,!!Boolean(o.offsetParent||o.offsetWidth||o.offsetHeight||o.getClientRects().length)&&"hidden"!==window.getComputedStyle(e).visibility&&(!("audio"!==t&&"video"!==t||!e.hasAttribute("controls"))||!!e.hasAttribute("tabindex")||!(!e.hasAttribute("contenteditable")||"false"===e.getAttribute("contenteditable"))||["button","input","select","textarea","a","audio","video","summary"].includes(t)));var o}(i)&&t.push(i),i instanceof HTMLSlotElement&&(null==(n=i.getRootNode({composed:!0}))?void 0:n.host)!==e&&i.assignedElements({flatten:!0}).forEach((e=>{o(e)})),null!==i.shadowRoot&&"open"===i.shadowRoot.mode&&o(i.shadowRoot)}var n;[...i.children].forEach((e=>o(e)))}(e),t.sort(((e,t)=>{const o=Number(e.getAttribute("tabindex"))||0;return(Number(t.getAttribute("tabindex"))||0)-o}))}o.d(t,{J:()=>n,w:()=>i})},7857:(e,t,o)=>{var i=o(8737),n=o(4029),s=o(7324),a=o(5024),l=a.AH`
  ${s.$}

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
`,r=o(1382),d=o(9281),c=o(1060),h=o(5226),u=o(4101),p=o(333),f=o(5794),g=o(7489),m=o(7012),v=o(3788),y=o(996),b=o(2489),w=class extends g.f{constructor(){super(...arguments),this.hasSlotController=new u.X(this,"footer"),this.localize=new p.c(this),this.modal=new i.a(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=e=>{"Escape"===e.key&&this.modal.isActive()&&this.open&&(e.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),(0,n.JG)(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),(0,n.I7)(this)}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const e=(0,d.RB)(this,"dialog.denyClose",{dir:this.localize.dir()});(0,h.jd)(this.panel,e.keyframes,e.options)}else this.hide()}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),(0,n.JG)(this);const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([(0,h.Ey)(this.dialog),(0,h.Ey)(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame((()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")}));const t=(0,d.RB)(this,"dialog.show",{dir:this.localize.dir()}),o=(0,d.RB)(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([(0,h.jd)(this.panel,t.keyframes,t.options),(0,h.jd)(this.overlay,o.keyframes,o.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([(0,h.Ey)(this.dialog),(0,h.Ey)(this.overlay)]);const e=(0,d.RB)(this,"dialog.hide",{dir:this.localize.dir()}),t=(0,d.RB)(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([(0,h.jd)(this.overlay,t.keyframes,t.options).then((()=>{this.overlay.hidden=!0})),(0,h.jd)(this.panel,e.keyframes,e.options).then((()=>{this.panel.hidden=!0}))]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,(0,n.I7)(this);const o=this.originalTrigger;"function"==typeof(null==o?void 0:o.focus)&&setTimeout((()=>o.focus())),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,(0,c.l)(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,(0,c.l)(this,"sl-after-hide")}render(){return a.qy`
      <div
        part="base"
        class=${(0,v.H)({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${(0,y.J)(this.noHeader?this.label:void 0)}
          aria-labelledby=${(0,y.J)(this.noHeader?void 0:"title")}
          tabindex="-1"
        >
          ${this.noHeader?"":a.qy`
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
    `}};w.styles=l,w.dependencies={"sl-icon-button":r.h},(0,m.Cc)([(0,b.P)(".dialog")],w.prototype,"dialog",2),(0,m.Cc)([(0,b.P)(".dialog__panel")],w.prototype,"panel",2),(0,m.Cc)([(0,b.P)(".dialog__overlay")],w.prototype,"overlay",2),(0,m.Cc)([(0,b.MZ)({type:Boolean,reflect:!0})],w.prototype,"open",2),(0,m.Cc)([(0,b.MZ)({reflect:!0})],w.prototype,"label",2),(0,m.Cc)([(0,b.MZ)({attribute:"no-header",type:Boolean,reflect:!0})],w.prototype,"noHeader",2),(0,m.Cc)([(0,f.w)("open",{waitUntilFirstUpdate:!0})],w.prototype,"handleOpenChange",1),(0,d.Ee)("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}}),(0,d.Ee)("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}}),(0,d.Ee)("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}}),(0,d.Ee)("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}}),(0,d.Ee)("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}}),w.define("sl-dialog"),o(2846),o(3280),o(7352),o(7464),o(4415),o(4637),o(8326)}}]);
//# sourceMappingURL=sl-dialog.4a40e7ff.js.map
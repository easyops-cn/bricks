"use strict";(self.webpackChunk_next_bricks_shoelace=self.webpackChunk_next_bricks_shoelace||[]).push([[302],{1177:(e,t,o)=>{o.r(t),o(2027),o(5517)},5517:(e,t,o)=>{o(2969),o(3467);var a=o(4124);function n(e){document.documentElement.classList["dark"===e||"dark-v2"===e?"add":"remove"]("sl-theme-dark")}o(1744),(0,a.t)(o.p),n(document.documentElement.dataset.theme),window.addEventListener("theme.change",(e=>{n(e.detail)}))},738:(e,t,o)=>{o.d(t,{Z:()=>r});var a=o(9601),n=o.n(a),s=o(2609),i=o.n(s)()(n());i.push([e.id,":root,\n.sl-theme-dark{--sl-z-index-drawer:1000;--sl-z-index-dialog:1000;--sl-z-index-dropdown:1050;--sl-z-index-toast:1000;--sl-z-index-tooltip:1070}.sl-toast-stack{width:100%;left:0;right:auto;overflow:initial;pointer-events:none}.sl-toast-stack > sl-alert{pointer-events:all}",""]);const r=i},1744:(e,t,o)=>{var a=o(6062),n=o.n(a),s=o(4036),i=o.n(s),r=o(6793),l=o.n(r),d=o(7892),c=o.n(d),h=o(1173),u=o.n(h),p=o(2464),m=o.n(p),f=o(738),w={};w.styleTagTransform=m(),w.setAttributes=c(),w.insert=l().bind(null,"head"),w.domAPI=i(),w.insertStyleElement=u(),n()(f.Z,w),f.Z&&f.Z.locals&&f.Z.locals},2027:(e,t,o)=>{var a=o(7979),n=(o(9026),o(2868)),s=o(9832),i=o(3030),r=o(4573),l=o(962),d=o(8427),c=o(2747),h=o(1321),u=o(2421);function p(e){return e.charAt(0).toUpperCase()+e.slice(1)}var m=o(7173),f=o(3005),w=o(4666),y=o(5166),g=o(1452),v=d.iv`
  ${g.Z}

  :host {
    --size: 25rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .drawer {
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
  }

  .drawer--contained {
    position: absolute;
    z-index: initial;
  }

  .drawer--fixed {
    position: fixed;
    z-index: var(--sl-z-index-drawer);
  }

  .drawer__panel {
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 2;
    max-width: 100%;
    max-height: 100%;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-large);
    overflow: auto;
    pointer-events: all;
  }

  .drawer__panel:focus {
    outline: none;
  }

  .drawer--top .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--end .drawer__panel {
    top: 0;
    inset-inline-end: 0;
    bottom: auto;
    inset-inline-start: auto;
    width: var(--size);
    height: 100%;
  }

  .drawer--bottom .drawer__panel {
    top: auto;
    inset-inline-end: auto;
    bottom: 0;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--start .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: var(--size);
    height: 100%;
  }

  .drawer__header {
    display: flex;
  }

  .drawer__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .drawer__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .drawer__header-actions sl-icon-button,
  .drawer__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .drawer__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .drawer__footer {
    text-align: right;
    padding: var(--footer-spacing);
  }

  .drawer__footer ::slotted(sl-button:not(:last-of-type)) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .drawer:not(.drawer--has-footer) .drawer__footer {
    display: none;
  }

  .drawer__overlay {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
    pointer-events: all;
  }

  .drawer--contained .drawer__overlay {
    display: none;
  }

  @media (forced-colors: active) {
    .drawer__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`;let b=class extends y.Z{constructor(){super(...arguments),this.hasSlotController=new l.rc(this,"footer"),this.localize=new h.V(this),this.modal=new w.Z(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=e=>{this.open&&!this.contained&&"Escape"===e.key&&(e.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),(0,u.M4)(this)))}disconnectedCallback(){super.disconnectedCallback(),(0,u.gG)(this)}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const e=(0,r.O8)(this,"drawer.denyClose",{dir:this.localize.dir()});(0,n.nv)(this.panel,e.keyframes,e.options)}else this.hide()}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),(0,u.M4)(this));const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([(0,n.U_)(this.drawer),(0,n.U_)(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame((()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")}));const t=(0,r.O8)(this,`drawer.show${p(this.placement)}`,{dir:this.localize.dir()}),o=(0,r.O8)(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([(0,n.nv)(this.panel,t.keyframes,t.options),(0,n.nv)(this.overlay,o.keyframes,o.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),(0,u.gG)(this)),await Promise.all([(0,n.U_)(this.drawer),(0,n.U_)(this.overlay)]);const e=(0,r.O8)(this,`drawer.hide${p(this.placement)}`,{dir:this.localize.dir()}),t=(0,r.O8)(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([(0,n.nv)(this.overlay,t.keyframes,t.options).then((()=>{this.overlay.hidden=!0})),(0,n.nv)(this.panel,e.keyframes,e.options).then((()=>{this.panel.hidden=!0}))]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;const o=this.originalTrigger;"function"==typeof(null==o?void 0:o.focus)&&setTimeout((()=>o.focus())),this.emit("sl-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),(0,u.M4)(this)),this.open&&this.contained&&(this.modal.deactivate(),(0,u.gG)(this))}async show(){if(!this.open)return this.open=!0,(0,m.m)(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,(0,m.m)(this,"sl-after-hide")}render(){return d.dy`
      <div
        part="base"
        class=${(0,s.$)({drawer:!0,"drawer--open":this.open,"drawer--top":"top"===this.placement,"drawer--end":"end"===this.placement,"drawer--bottom":"bottom"===this.placement,"drawer--start":"start"===this.placement,"drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":"rtl"===this.localize.dir(),"drawer--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${(0,c.o)(this.noHeader?this.label:void 0)}
          aria-labelledby=${(0,c.o)(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":d.dy`
                <header part="header" class="drawer__header">
                  <h2 part="title" class="drawer__title" id="title">
                    <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                    <slot name="label"> ${this.label.length>0?this.label:String.fromCharCode(65279)} </slot>
                  </h2>
                  <div part="header-actions" class="drawer__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="drawer__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click=${()=>this.requestClose("close-button")}
                    ></sl-icon-button>
                  </div>
                </header>
              `}

          <slot part="body" class="drawer__body"></slot>

          <footer part="footer" class="drawer__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};b.styles=v,(0,a.u2)([(0,i.IO)(".drawer")],b.prototype,"drawer",2),(0,a.u2)([(0,i.IO)(".drawer__panel")],b.prototype,"panel",2),(0,a.u2)([(0,i.IO)(".drawer__overlay")],b.prototype,"overlay",2),(0,a.u2)([(0,i.Cb)({type:Boolean,reflect:!0})],b.prototype,"open",2),(0,a.u2)([(0,i.Cb)({reflect:!0})],b.prototype,"label",2),(0,a.u2)([(0,i.Cb)({reflect:!0})],b.prototype,"placement",2),(0,a.u2)([(0,i.Cb)({type:Boolean,reflect:!0})],b.prototype,"contained",2),(0,a.u2)([(0,i.Cb)({attribute:"no-header",type:Boolean,reflect:!0})],b.prototype,"noHeader",2),(0,a.u2)([(0,f.Y)("open",{waitUntilFirstUpdate:!0})],b.prototype,"handleOpenChange",1),(0,a.u2)([(0,f.Y)("contained",{waitUntilFirstUpdate:!0})],b.prototype,"handleNoModalChange",1),b=(0,a.u2)([(0,i.Mo)("sl-drawer")],b),(0,r.jx)("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}}),(0,r.jx)("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}}),(0,r.jx)("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}}),(0,r.jx)("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}}),(0,r.jx)("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}}),(0,r.jx)("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}}),(0,r.jx)("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}}),(0,r.jx)("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}}),(0,r.jx)("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}}),(0,r.jx)("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}}),(0,r.jx)("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}})},2868:(e,t,o)=>{function a(e,t,o){return new Promise((a=>{if((null==o?void 0:o.duration)===1/0)throw new Error("Promise-based animations must be finite.");const n=e.animate(t,Object.assign(Object.assign({},o),{duration:s()?0:o.duration}));n.addEventListener("cancel",a,{once:!0}),n.addEventListener("finish",a,{once:!0})}))}function n(e){return(e=e.toString().toLowerCase()).indexOf("ms")>-1?parseFloat(e):e.indexOf("s")>-1?1e3*parseFloat(e):parseFloat(e)}function s(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function i(e){return Promise.all(e.getAnimations().map((e=>new Promise((t=>{const o=requestAnimationFrame(t);e.addEventListener("cancel",(()=>o),{once:!0}),e.addEventListener("finish",(()=>o),{once:!0}),e.cancel()})))))}function r(e,t){return e.map((e=>Object.assign(Object.assign({},e),{height:"auto"===e.height?`${t}px`:e.height})))}o.d(t,{GH:()=>r,RA:()=>n,U_:()=>i,nk:()=>s,nv:()=>a})},7173:(e,t,o)=>{function a(e,t){return new Promise((o=>{e.addEventListener(t,(function a(n){n.target===e&&(e.removeEventListener(t,a),o())}))}))}o.d(t,{m:()=>a})},4666:(e,t,o)=>{o.d(t,{Z:()=>s});var a=o(1818);let n=[];class s{constructor(e){this.tabDirection="forward",this.element=e,this.handleFocusIn=this.handleFocusIn.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleKeyUp=this.handleKeyUp.bind(this)}activate(){n.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){n=n.filter((e=>e!==this.element)),document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return n[n.length-1]===this.element}checkFocus(){if(this.isActive()&&!this.element.matches(":focus-within")){const{start:e,end:t}=(0,a.C)(this.element),o="forward"===this.tabDirection?e:t;"function"==typeof(null==o?void 0:o.focus)&&o.focus({preventScroll:!0})}}handleFocusIn(){this.checkFocus()}handleKeyDown(e){"Tab"===e.key&&e.shiftKey&&(this.tabDirection="backward",requestAnimationFrame((()=>this.checkFocus())))}handleKeyUp(){this.tabDirection="forward"}}},2421:(e,t,o)=>{o.d(t,{M4:()=>n,zT:()=>i,gG:()=>s});const a=new Set;function n(e){if(a.add(e),!document.body.classList.contains("sl-scroll-lock")){const e=function(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}();document.body.classList.add("sl-scroll-lock"),document.body.style.setProperty("--sl-scroll-lock-size",`${e}px`)}}function s(e){a.delete(e),0===a.size&&(document.body.classList.remove("sl-scroll-lock"),document.body.style.removeProperty("--sl-scroll-lock-size"))}function i(e,t,o="vertical",a="smooth"){const n=function(e,t){return{top:Math.round(e.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(e.getBoundingClientRect().left-t.getBoundingClientRect().left)}}(e,t),s=n.top+t.scrollTop,i=n.left+t.scrollLeft,r=t.scrollLeft,l=t.scrollLeft+t.offsetWidth,d=t.scrollTop,c=t.scrollTop+t.offsetHeight;"horizontal"!==o&&"both"!==o||(i<r?t.scrollTo({left:i,behavior:a}):i+e.clientWidth>l&&t.scrollTo({left:i-t.offsetWidth+e.clientWidth,behavior:a})),"vertical"!==o&&"both"!==o||(s<d?t.scrollTo({top:s,behavior:a}):s+e.clientHeight>c&&t.scrollTo({top:s-t.offsetHeight+e.clientHeight,behavior:a}))}},962:(e,t,o)=>{o.d(t,{FB:()=>n,rc:()=>a});class a{constructor(e,...t){this.slotNames=[],(this.host=e).addController(this),this.slotNames=t,this.handleSlotChange=this.handleSlotChange.bind(this)}hasDefaultSlot(){return[...this.host.childNodes].some((e=>{if(e.nodeType===e.TEXT_NODE&&""!==e.textContent.trim())return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if("sl-visually-hidden"===t.tagName.toLowerCase())return!1;if(!t.hasAttribute("slot"))return!0}return!1}))}hasNamedSlot(e){return null!==this.host.querySelector(`:scope > [slot="${e}"]`)}test(e){return"[default]"===e?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}handleSlotChange(e){const t=e.target;(this.slotNames.includes("[default]")&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()}}function n(e){if(!e)return"";const t=e.assignedNodes({flatten:!0});let o="";return[...t].forEach((e=>{e.nodeType===Node.TEXT_NODE&&(o+=e.textContent)})),o}},1818:(e,t,o)=>{function a(e){const t=e.tagName.toLowerCase();return"-1"!==e.getAttribute("tabindex")&&!e.hasAttribute("disabled")&&(!e.hasAttribute("aria-disabled")||"false"===e.getAttribute("aria-disabled"))&&!("input"===t&&"radio"===e.getAttribute("type")&&!e.hasAttribute("checked"))&&null!==e.offsetParent&&"hidden"!==window.getComputedStyle(e).visibility&&(!("audio"!==t&&"video"!==t||!e.hasAttribute("controls"))||!!e.hasAttribute("tabindex")||!(!e.hasAttribute("contenteditable")||"false"===e.getAttribute("contenteditable"))||["button","input","select","textarea","a","audio","video","summary"].includes(t))}function n(e){var t,o;const n=[];return function e(t){t instanceof HTMLElement&&(n.push(t),null!==t.shadowRoot&&"open"===t.shadowRoot.mode&&e(t.shadowRoot)),[...t.children].forEach((t=>e(t)))}(e),{start:null!==(t=n.find((e=>a(e))))&&void 0!==t?t:null,end:null!==(o=n.reverse().find((e=>a(e))))&&void 0!==o?o:null}}o.d(t,{C:()=>n})},4573:(e,t,o)=>{o.d(t,{O8:()=>r,jx:()=>i}),o(7979);const a=new Map,n=new WeakMap;function s(e,t){return"rtl"===t.toLowerCase()?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function i(e,t){a.set(e,function(e){return null!=e?e:{keyframes:[],options:{duration:0}}}(t))}function r(e,t,o){const i=n.get(e);if(null==i?void 0:i[t])return s(i[t],o.dir);const r=a.get(t);return r?s(r,o.dir):{keyframes:[],options:{duration:0}}}},1321:(e,t,o)=>{o.d(t,{V:()=>h}),o(7979);const a=new Set,n=new MutationObserver(d),s=new Map;let i,r=document.documentElement.dir||"ltr",l=document.documentElement.lang||navigator.language;function d(){r=document.documentElement.dir||"ltr",l=document.documentElement.lang||navigator.language,[...a.keys()].map((e=>{"function"==typeof e.requestUpdate&&e.requestUpdate()}))}n.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});class c{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){a.add(this.host)}hostDisconnected(){a.delete(this.host)}dir(){return`${this.host.dir||r}`.toLowerCase()}lang(){return`${this.host.lang||l}`.toLowerCase()}getTranslationData(e){var t,o;const a=new Intl.Locale(e),n=null==a?void 0:a.language.toLowerCase(),i=null!==(o=null===(t=null==a?void 0:a.region)||void 0===t?void 0:t.toLowerCase())&&void 0!==o?o:"";return{locale:a,language:n,region:i,primary:s.get(`${n}-${i}`),secondary:s.get(n)}}exists(e,t){var o;const{primary:a,secondary:n}=this.getTranslationData(null!==(o=t.lang)&&void 0!==o?o:this.lang());return t=Object.assign({includeFallback:!1},t),!!(a&&a[e]||n&&n[e]||t.includeFallback&&i&&i[e])}term(e,...t){const{primary:o,secondary:a}=this.getTranslationData(this.lang());let n;if(o&&o[e])n=o[e];else if(a&&a[e])n=a[e];else{if(!i||!i[e])return console.error(`No translation found for: ${String(e)}`),String(e);n=i[e]}return"function"==typeof n?n(...t):n}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(e,t)}}!function(...e){e.map((e=>{const t=e.$code.toLowerCase();s.has(t)?s.set(t,Object.assign(Object.assign({},s.get(t)),e)):s.set(t,e),i||(i=e)})),d()}({$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copy:"Copy",currentValue:"Current value",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>0===e?"No options selected":1===e?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"});class h extends c{}}}]);
//# sourceMappingURL=sl-drawer.11059b3d.js.map
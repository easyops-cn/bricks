"use strict";(globalThis.webpackChunk_next_bricks_shoelace=globalThis.webpackChunk_next_bricks_shoelace||[]).push([[323],{1060:(e,t,n)=>{function i(e,t){return new Promise((n=>{e.addEventListener(t,(function i(o){o.target===e&&(e.removeEventListener(t,i),n())}))}))}n.d(t,{l:()=>i})},6292:(e,t,n)=>{n.d(t,{Ee:()=>r,RB:()=>a}),n(1320);var i=new Map,o=new WeakMap;function s(e,t){return"rtl"===t.toLowerCase()?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function r(e,t){i.set(e,function(e){return null!=e?e:{keyframes:[],options:{duration:0}}}(t))}function a(e,t,n){const r=o.get(e);if(null==r?void 0:r[t])return s(r[t],n.dir);const a=i.get(t);return a?s(a,n.dir):{keyframes:[],options:{duration:0}}}},6482:(e,t,n)=>{n.d(t,{E9:()=>s,Ey:()=>a,Oe:()=>r,dc:()=>l,jd:()=>o});var i=n(1320);function o(e,t,n){return new Promise((o=>{if((null==n?void 0:n.duration)===1/0)throw new Error("Promise-based animations must be finite.");const s=e.animate(t,(0,i.ko)((0,i.IA)({},n),{duration:r()?0:n.duration}));s.addEventListener("cancel",o,{once:!0}),s.addEventListener("finish",o,{once:!0})}))}function s(e){return(e=e.toString().toLowerCase()).indexOf("ms")>-1?parseFloat(e):e.indexOf("s")>-1?1e3*parseFloat(e):parseFloat(e)}function r(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function a(e){return Promise.all(e.getAnimations().map((e=>new Promise((t=>{e.cancel(),requestAnimationFrame(t)})))))}function l(e,t){return e.map((e=>(0,i.ko)((0,i.IA)({},e),{height:"auto"===e.height?`${t}px`:e.height})))}},9435:(e,t,n)=>{n.d(t,{J:()=>r,w:()=>s});var i=new WeakMap;function o(e){let t=i.get(e);return t||(t=window.getComputedStyle(e,null),i.set(e,t)),t}function s(e){var t,n;const i=r(e);return{start:null!=(t=i[0])?t:null,end:null!=(n=i[i.length-1])?n:null}}function r(e){const t=new WeakMap,n=[];return function i(s){if(s instanceof Element){if(s.hasAttribute("inert")||s.closest("[inert]"))return;if(t.has(s))return;t.set(s,!0),!n.includes(s)&&function(e){const t=e.tagName.toLowerCase(),n=Number(e.getAttribute("tabindex"));return(!e.hasAttribute("tabindex")||!(isNaN(n)||n<=-1))&&!e.hasAttribute("disabled")&&!e.closest("[inert]")&&!("input"===t&&"radio"===e.getAttribute("type")&&!e.hasAttribute("checked"))&&!!function(e){if("function"==typeof e.checkVisibility)return e.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const t=o(e);return"hidden"!==t.visibility&&"none"!==t.display}(e)&&(!("audio"!==t&&"video"!==t||!e.hasAttribute("controls"))||!!e.hasAttribute("tabindex")||!(!e.hasAttribute("contenteditable")||"false"===e.getAttribute("contenteditable"))||!!["button","input","select","textarea","a","audio","video","summary","iframe"].includes(t)||function(e){const t=o(e),{overflowY:n,overflowX:i}=t;return"scroll"===n||"scroll"===i||"auto"===n&&"auto"===i&&(e.scrollHeight>e.clientHeight&&"auto"===n||!(!(e.scrollWidth>e.clientWidth)||"auto"!==i))}(e))}(s)&&n.push(s),s instanceof HTMLSlotElement&&function(e,t){var n;return(null==(n=e.getRootNode({composed:!0}))?void 0:n.host)!==t}(s,e)&&s.assignedElements({flatten:!0}).forEach((e=>{i(e)})),null!==s.shadowRoot&&"open"===s.shadowRoot.mode&&i(s.shadowRoot)}for(const e of s.children)i(e)}(e),n.sort(((e,t)=>{const n=Number(e.getAttribute("tabindex"))||0;return(Number(t.getAttribute("tabindex"))||0)-n}))}},5293:(e,t,n)=>{n.d(t,{H:()=>i});var i=n(5024).AH`
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
`},323:(e,t,n)=>{n.d(t,{n:()=>y});var i=n(5293),o=n(9435),s=n(4692),r=n(6292),a=n(1060),l=n(6482),d=n(333),p=n(5752),c=n(7324),h=n(8004),u=n(1320),m=n(3788),g=n(5024),f=n(996),w=n(8146),y=class extends h.f{constructor(){super(...arguments),this.localize=new d.c(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.sync=void 0,this.handleKeyDown=e=>{this.open&&"Escape"===e.key&&(e.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=e=>{var t;if("Escape"===e.key&&this.open&&!this.closeWatcher)return e.stopPropagation(),this.focusOnTrigger(),void this.hide();if("Tab"===e.key){if(this.open&&"sl-menu-item"===(null==(t=document.activeElement)?void 0:t.tagName.toLowerCase()))return e.preventDefault(),this.hide(),void this.focusOnTrigger();setTimeout((()=>{var e,t,n;const i=(null==(e=this.containingElement)?void 0:e.getRootNode())instanceof ShadowRoot?null==(n=null==(t=document.activeElement)?void 0:t.shadowRoot)?void 0:n.activeElement:document.activeElement;this.containingElement&&(null==i?void 0:i.closest(this.containingElement.tagName.toLowerCase()))===this.containingElement||this.hide()}))}},this.handleDocumentMouseDown=e=>{const t=e.composedPath();this.containingElement&&!t.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=e=>{const t=e.target;this.stayOpenOnSelect||"sl-menu"!==t.tagName.toLowerCase()||(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const e=this.trigger.assignedElements({flatten:!0})[0];"function"==typeof(null==e?void 0:e.focus)&&e.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find((e=>"sl-menu"===e.tagName.toLowerCase()))}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(e){if([" ","Enter"].includes(e.key))return e.preventDefault(),void this.handleTriggerClick();const t=this.getMenu();if(t){const n=t.getAllItems(),i=n[0],o=n[n.length-1];["ArrowDown","ArrowUp","Home","End"].includes(e.key)&&(e.preventDefault(),this.open||(this.show(),await this.updateComplete),n.length>0&&this.updateComplete.then((()=>{"ArrowDown"!==e.key&&"Home"!==e.key||(t.setCurrentItem(i),i.focus()),"ArrowUp"!==e.key&&"End"!==e.key||(t.setCurrentItem(o),o.focus())})))}}handleTriggerKeyUp(e){" "===e.key&&e.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const e=this.trigger.assignedElements({flatten:!0}).find((e=>(0,o.w)(e).start));let t;if(e){switch(e.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":t=e.button;break;default:t=e}t.setAttribute("aria-haspopup","true"),t.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,(0,a.l)(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,(0,a.l)(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){var e;this.panel.addEventListener("sl-select",this.handlePanelSelect),"CloseWatcher"in window?(null==(e=this.closeWatcher)||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){var e;this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),null==(e=this.closeWatcher)||e.destroy()}async handleOpenChange(){if(this.disabled)this.open=!1;else if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await(0,l.Ey)(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:e,options:t}=(0,r.RB)(this,"dropdown.show",{dir:this.localize.dir()});await(0,l.jd)(this.popup.popup,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await(0,l.Ey)(this);const{keyframes:e,options:t}=(0,r.RB)(this,"dropdown.hide",{dir:this.localize.dir()});await(0,l.jd)(this.popup.popup,e,t),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return g.qy`
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
        sync=${(0,f.J)(this.sync?this.sync:void 0)}
        class=${(0,m.H)({dropdown:!0,"dropdown--open":this.open})}
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
    `}};y.styles=[c.$,i.H],y.dependencies={"sl-popup":s.m},(0,u.Cc)([(0,w.P)(".dropdown")],y.prototype,"popup",2),(0,u.Cc)([(0,w.P)(".dropdown__trigger")],y.prototype,"trigger",2),(0,u.Cc)([(0,w.P)(".dropdown__panel")],y.prototype,"panel",2),(0,u.Cc)([(0,w.MZ)({type:Boolean,reflect:!0})],y.prototype,"open",2),(0,u.Cc)([(0,w.MZ)({reflect:!0})],y.prototype,"placement",2),(0,u.Cc)([(0,w.MZ)({type:Boolean,reflect:!0})],y.prototype,"disabled",2),(0,u.Cc)([(0,w.MZ)({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],y.prototype,"stayOpenOnSelect",2),(0,u.Cc)([(0,w.MZ)({attribute:!1})],y.prototype,"containingElement",2),(0,u.Cc)([(0,w.MZ)({type:Number})],y.prototype,"distance",2),(0,u.Cc)([(0,w.MZ)({type:Number})],y.prototype,"skidding",2),(0,u.Cc)([(0,w.MZ)({type:Boolean})],y.prototype,"hoist",2),(0,u.Cc)([(0,w.MZ)({reflect:!0})],y.prototype,"sync",2),(0,u.Cc)([(0,p.w)("open",{waitUntilFirstUpdate:!0})],y.prototype,"handleOpenChange",1),(0,r.Ee)("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}}),(0,r.Ee)("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}})}}]);
//# sourceMappingURL=323.7334f10a.js.map
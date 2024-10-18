"use strict";(globalThis.webpackChunk_next_bricks_shoelace=globalThis.webpackChunk_next_bricks_shoelace||[]).push([[1450],{3704:(e,t,a)=>{a.d(t,{a:()=>n});var i=a(9435),s=a(1320);function*o(e=document.activeElement){null!=e&&(yield e,"shadowRoot"in e&&e.shadowRoot&&"closed"!==e.shadowRoot.mode&&(yield*(0,s.y0)(o(e.shadowRoot.activeElement))))}var r=[],n=class{constructor(e){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=e=>{var t;if("Tab"!==e.key||this.isExternalActivated)return;if(!this.isActive())return;const a=[...o()].pop();if(this.previousFocus=a,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;e.shiftKey?this.tabDirection="backward":this.tabDirection="forward";const s=(0,i.J)(this.element);let r=s.findIndex((e=>e===a));this.previousFocus=this.currentFocus;const n="forward"===this.tabDirection?1:-1;for(;;){r+n>=s.length?r=0:r+n<0?r=s.length-1:r+=n,this.previousFocus=this.currentFocus;const a=s[r];if("backward"===this.tabDirection&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;if(a&&this.possiblyHasTabbableChildren(a))return;e.preventDefault(),this.currentFocus=a,null==(t=this.currentFocus)||t.focus({preventScroll:!1});const i=[...o()];if(i.includes(this.currentFocus)||!i.includes(this.previousFocus))break}setTimeout((()=>this.checkFocus()))},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=e,this.elementsWithTabbableControls=["iframe"]}activate(){r.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){r=r.filter((e=>e!==this.element)),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return r[r.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const e=(0,i.J)(this.element);if(!this.element.matches(":focus-within")){const t=e[0],a=e[e.length-1],i="forward"===this.tabDirection?t:a;"function"==typeof(null==i?void 0:i.focus)&&(this.currentFocus=i,i.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(e){return this.elementsWithTabbableControls.includes(e.tagName.toLowerCase())||e.hasAttribute("controls")}}},1450:(e,t,a)=>{var i=a(5024),s=i.AH`
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
`,o=a(3704),r=a(6618),n=a(2484),l=a(6292),d=a(1060),h=a(6482),c=a(333),p=a(5752),u=a(4101),y=a(7324),w=a(8004),f=a(1320),v=a(3788),m=a(996),b=a(8146);function g(e){return e.charAt(0).toUpperCase()+e.slice(1)}var _=class extends w.f{constructor(){super(...arguments),this.hasSlotController=new u.X(this,"footer"),this.localize=new c.c(this),this.modal=new o.a(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=e=>{this.contained||"Escape"===e.key&&this.modal.isActive()&&this.open&&(e.stopImmediatePropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),(0,r.JG)(this)))}disconnectedCallback(){var e;super.disconnectedCallback(),(0,r.I7)(this),null==(e=this.closeWatcher)||e.destroy()}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const e=(0,l.RB)(this,"drawer.denyClose",{dir:this.localize.dir()});(0,h.jd)(this.panel,e.keyframes,e.options)}else this.hide()}addOpenListeners(){var e;"CloseWatcher"in window?(null==(e=this.closeWatcher)||e.destroy(),this.contained||(this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard"))):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var e;document.removeEventListener("keydown",this.handleDocumentKeyDown),null==(e=this.closeWatcher)||e.destroy()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),(0,r.JG)(this));const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([(0,h.Ey)(this.drawer),(0,h.Ey)(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame((()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")}));const t=(0,l.RB)(this,`drawer.show${g(this.placement)}`,{dir:this.localize.dir()}),a=(0,l.RB)(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([(0,h.jd)(this.panel,t.keyframes,t.options),(0,h.jd)(this.overlay,a.keyframes,a.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),(0,r.I7)(this)),await Promise.all([(0,h.Ey)(this.drawer),(0,h.Ey)(this.overlay)]);const e=(0,l.RB)(this,`drawer.hide${g(this.placement)}`,{dir:this.localize.dir()}),t=(0,l.RB)(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([(0,h.jd)(this.overlay,t.keyframes,t.options).then((()=>{this.overlay.hidden=!0})),(0,h.jd)(this.panel,e.keyframes,e.options).then((()=>{this.panel.hidden=!0}))]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;const a=this.originalTrigger;"function"==typeof(null==a?void 0:a.focus)&&setTimeout((()=>a.focus())),this.emit("sl-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),(0,r.JG)(this)),this.open&&this.contained&&(this.modal.deactivate(),(0,r.I7)(this))}async show(){if(!this.open)return this.open=!0,(0,d.l)(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,(0,d.l)(this,"sl-after-hide")}render(){return i.qy`
      <div
        part="base"
        class=${(0,v.H)({drawer:!0,"drawer--open":this.open,"drawer--top":"top"===this.placement,"drawer--end":"end"===this.placement,"drawer--bottom":"bottom"===this.placement,"drawer--start":"start"===this.placement,"drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":"rtl"===this.localize.dir(),"drawer--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${(0,m.J)(this.noHeader?this.label:void 0)}
          aria-labelledby=${(0,m.J)(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":i.qy`
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
    `}};_.styles=[y.$,s],_.dependencies={"sl-icon-button":n.h},(0,f.Cc)([(0,b.P)(".drawer")],_.prototype,"drawer",2),(0,f.Cc)([(0,b.P)(".drawer__panel")],_.prototype,"panel",2),(0,f.Cc)([(0,b.P)(".drawer__overlay")],_.prototype,"overlay",2),(0,f.Cc)([(0,b.MZ)({type:Boolean,reflect:!0})],_.prototype,"open",2),(0,f.Cc)([(0,b.MZ)({reflect:!0})],_.prototype,"label",2),(0,f.Cc)([(0,b.MZ)({reflect:!0})],_.prototype,"placement",2),(0,f.Cc)([(0,b.MZ)({type:Boolean,reflect:!0})],_.prototype,"contained",2),(0,f.Cc)([(0,b.MZ)({attribute:"no-header",type:Boolean,reflect:!0})],_.prototype,"noHeader",2),(0,f.Cc)([(0,p.w)("open",{waitUntilFirstUpdate:!0})],_.prototype,"handleOpenChange",1),(0,f.Cc)([(0,p.w)("contained",{waitUntilFirstUpdate:!0})],_.prototype,"handleNoModalChange",1),(0,l.Ee)("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}}),(0,l.Ee)("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}}),(0,l.Ee)("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}}),(0,l.Ee)("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}}),(0,l.Ee)("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}}),(0,l.Ee)("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}}),(0,l.Ee)("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}}),(0,l.Ee)("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}}),(0,l.Ee)("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}}),(0,l.Ee)("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}}),(0,l.Ee)("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}}),_.define("sl-drawer"),a(9435),a(3750),a(3280),a(4812),a(2089),a(4415),a(4637),a(8326)}}]);
//# sourceMappingURL=1450.7350376c.js.map
"use strict";(globalThis.webpackChunk_next_bricks_shoelace=globalThis.webpackChunk_next_bricks_shoelace||[]).push([[2410],{6821:(e,t,s)=>{s.r(t),s(120),s(7901)},7901:(e,t,s)=>{s(8258),s(4804);var r=s(7719);function n(e){document.documentElement.classList["dark"===e||"dark-v2"===e?"add":"remove"]("sl-theme-dark")}s(7422),(0,r.j)(s.p),n(document.documentElement.dataset.theme),window.addEventListener("theme.change",(e=>{n(e.detail)}))},9832:(e,t,s)=>{s.d(t,{A:()=>o});var r=s(6758),n=s.n(r),i=s(935),a=s.n(i)()(n());a.push([e.id,":root,\n.sl-theme-dark{--sl-z-index-drawer:1000;--sl-z-index-dialog:1000;--sl-z-index-dropdown:1050;--sl-z-index-toast:1060;--sl-z-index-tooltip:1070}.sl-toast-stack{width:100%;left:0;right:auto;overflow:initial;pointer-events:none}.sl-toast-stack > sl-alert{pointer-events:all}",""]);const o=a},7422:(e,t,s)=>{var r=s(2591),n=s.n(r),i=s(1740),a=s.n(i),o=s(8128),l=s.n(o),d=s(855),h=s.n(d),c=s(3051),b=s.n(c),v=s(3656),p=s.n(v),u=s(9832),m={};m.styleTagTransform=p(),m.setAttributes=h(),m.insert=l().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=b(),n()(u.A,m),u.A&&u.A.locals&&u.A.locals},5752:(e,t,s)=>{s.d(t,{w:()=>n});var r=s(1320);function n(e,t){const s=(0,r.IA)({waitUntilFirstUpdate:!1},t);return(t,r)=>{const{update:n}=t,i=Array.isArray(e)?e:[e];t.update=function(e){i.forEach((t=>{const n=t;if(e.has(n)){const t=e.get(n),i=this[n];t!==i&&(s.waitUntilFirstUpdate&&!this.hasUpdated||this[r](t,i))}})),n.call(this,e)}}}},7324:(e,t,s)=>{s.d(t,{$:()=>r});var r=s(5024).AH`
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
`},120:(e,t,s)=>{var r=s(5024),n=r.AH`
  :host {
    display: contents;
  }
`,i=s(5752),a=s(7324),o=s(8004),l=s(1320),d=s(8146),h=class extends o.f{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver((e=>{this.emit("sl-resize",{detail:{entries:e}})})),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){const e=this.shadowRoot.querySelector("slot");if(null!==e){const t=e.assignedElements({flatten:!0});this.observedElements.forEach((e=>this.resizeObserver.unobserve(e))),this.observedElements=[],t.forEach((e=>{this.resizeObserver.observe(e),this.observedElements.push(e)}))}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return r.qy` <slot @slotchange=${this.handleSlotChange}></slot> `}};h.styles=[a.$,n],(0,l.Cc)([(0,d.MZ)({type:Boolean,reflect:!0})],h.prototype,"disabled",2),(0,l.Cc)([(0,i.w)("disabled",{waitUntilFirstUpdate:!0})],h.prototype,"handleDisabledChange",1),h.define("sl-resize-observer")}}]);
//# sourceMappingURL=sl-resize-observer.1bb7a418.js.map
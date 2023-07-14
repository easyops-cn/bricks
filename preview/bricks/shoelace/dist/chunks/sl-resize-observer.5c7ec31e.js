"use strict";(self.webpackChunk_next_bricks_shoelace=self.webpackChunk_next_bricks_shoelace||[]).push([[4992],{7561:(e,t,s)=>{s.r(t),s(7494),s(5517)},5517:(e,t,s)=>{s(2969),s(3467);var n=s(4124);function r(e){document.documentElement.classList["dark"===e||"dark-v2"===e?"add":"remove"]("sl-theme-dark")}s(1744),(0,n.t)(s.p),r(document.documentElement.dataset.theme),window.addEventListener("theme.change",(e=>{r(e.detail)}))},738:(e,t,s)=>{s.d(t,{Z:()=>o});var n=s(9601),r=s.n(n),i=s(2609),a=s.n(i)()(r());a.push([e.id,":root,\n.sl-theme-dark{--sl-z-index-drawer:1000;--sl-z-index-dialog:1000;--sl-z-index-dropdown:1050;--sl-z-index-toast:1000;--sl-z-index-tooltip:1070}.sl-toast-stack{width:100%;left:0;right:auto;overflow:initial;pointer-events:none}.sl-toast-stack > sl-alert{pointer-events:all}",""]);const o=a},1744:(e,t,s)=>{var n=s(6062),r=s.n(n),i=s(4036),a=s.n(i),o=s(6793),l=s.n(o),d=s(7892),h=s.n(d),c=s(1173),b=s.n(c),v=s(2464),p=s.n(v),u=s(738),m={};m.styleTagTransform=p(),m.setAttributes=h(),m.insert=l().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=b(),r()(u.Z,m),u.Z&&u.Z.locals&&u.Z.locals},7494:(e,t,s)=>{var n=s(7979),r=s(3030),i=s(8427),a=s(3005),o=s(5166),l=s(1452),d=i.iv`
  ${l.Z}

  :host {
    display: contents;
  }
`;let h=class extends o.Z{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver((e=>{this.emit("sl-resize",{detail:{entries:e}})})),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){const e=this.shadowRoot.querySelector("slot");if(null!==e){const t=e.assignedElements({flatten:!0});this.observedElements.forEach((e=>this.resizeObserver.unobserve(e))),this.observedElements=[],t.forEach((e=>{this.resizeObserver.observe(e),this.observedElements.push(e)}))}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return i.dy` <slot @slotchange=${this.handleSlotChange}></slot> `}};h.styles=d,(0,n.u2)([(0,r.Cb)({type:Boolean,reflect:!0})],h.prototype,"disabled",2),(0,n.u2)([(0,a.Y)("disabled",{waitUntilFirstUpdate:!0})],h.prototype,"handleDisabledChange",1),h=(0,n.u2)([(0,r.Mo)("sl-resize-observer")],h)},3005:(e,t,s)=>{function n(e,t){const s=Object.assign({waitUntilFirstUpdate:!1},t);return(t,n)=>{const{update:r}=t,i=Array.isArray(e)?e:[e];t.update=function(e){i.forEach((t=>{const r=t;if(e.has(r)){const t=e.get(r),i=this[r];t!==i&&(s.waitUntilFirstUpdate&&!this.hasUpdated||this[n](t,i))}})),r.call(this,e)}}}s.d(t,{Y:()=>n})},1452:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s(8427).iv`
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
`}}]);
//# sourceMappingURL=sl-resize-observer.5c7ec31e.js.map
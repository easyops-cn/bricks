"use strict";(self.webpackChunk_next_bricks_shoelace=self.webpackChunk_next_bricks_shoelace||[]).push([[4992],{2477:(e,t,s)=>{s.r(t),s(1655),s(6771)},6771:(e,t,s)=>{s(2969),s(3467);var r=s(4124);function n(e){document.documentElement.classList["dark"===e||"dark-v2"===e?"add":"remove"]("sl-theme-dark")}s(1744),(0,r.t)(s.p),n(document.documentElement.dataset.theme),window.addEventListener("theme.change",(e=>{n(e.detail)}))},738:(e,t,s)=>{s.d(t,{Z:()=>o});var r=s(9601),n=s.n(r),i=s(2609),a=s.n(i)()(n());a.push([e.id,":root,\n.sl-theme-dark{--sl-z-index-drawer:1000;--sl-z-index-dialog:1000;--sl-z-index-dropdown:1050;--sl-z-index-toast:1000;--sl-z-index-tooltip:1070}.sl-toast-stack{width:100%;left:0;right:auto;overflow:initial;pointer-events:none}.sl-toast-stack > sl-alert{pointer-events:all}",""]);const o=a},1744:(e,t,s)=>{var r=s(6062),n=s.n(r),i=s(4036),a=s.n(i),o=s(6793),l=s.n(o),d=s(7892),h=s.n(d),c=s(1173),b=s.n(c),v=s(2464),p=s.n(v),u=s(738),m={};m.styleTagTransform=p(),m.setAttributes=h(),m.insert=l().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=b(),n()(u.Z,m),u.Z&&u.Z.locals&&u.Z.locals},4703:(e,t,s)=>{s.d(t,{Y:()=>n});var r=s(7979);function n(e,t){const s=(0,r.ih)({waitUntilFirstUpdate:!1},t);return(t,r)=>{const{update:n}=t,i=Array.isArray(e)?e:[e];t.update=function(e){i.forEach((t=>{const n=t;if(e.has(n)){const t=e.get(n),i=this[n];t!==i&&(s.waitUntilFirstUpdate&&!this.hasUpdated||this[r](t,i))}})),n.call(this,e)}}}},9710:(e,t,s)=>{s.d(t,{N:()=>r});var r=s(8427).iv`
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
`},1655:(e,t,s)=>{var r=s(9710),n=s(8427),i=n.iv`
  ${r.N}

  :host {
    display: contents;
  }
`,a=s(4703),o=s(1465),l=s(7979),d=s(9900),h=class extends o.P{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver((e=>{this.emit("sl-resize",{detail:{entries:e}})})),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){const e=this.shadowRoot.querySelector("slot");if(null!==e){const t=e.assignedElements({flatten:!0});this.observedElements.forEach((e=>this.resizeObserver.unobserve(e))),this.observedElements=[],t.forEach((e=>{this.resizeObserver.observe(e),this.observedElements.push(e)}))}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return n.dy` <slot @slotchange=${this.handleSlotChange}></slot> `}};h.styles=i,(0,l.u2)([(0,d.Cb)({type:Boolean,reflect:!0})],h.prototype,"disabled",2),(0,l.u2)([(0,a.Y)("disabled",{waitUntilFirstUpdate:!0})],h.prototype,"handleDisabledChange",1),h.define("sl-resize-observer")}}]);
//# sourceMappingURL=sl-resize-observer.488683f3.js.map
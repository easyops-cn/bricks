"use strict";(self.webpackChunk_next_bricks_shoelace=self.webpackChunk_next_bricks_shoelace||[]).push([[1684],{2078:(t,e,s)=>{s.r(e),s(2397),s(5517)},5517:(t,e,s)=>{s(2969),s(3467);var o=s(4124);function l(t){document.documentElement.classList["dark"===t||"dark-v2"===t?"add":"remove"]("sl-theme-dark")}s(1744),(0,o.t)(s.p),l(document.documentElement.dataset.theme),window.addEventListener("theme.change",(t=>{l(t.detail)}))},738:(t,e,s)=>{s.d(e,{Z:()=>r});var o=s(9601),l=s.n(o),n=s(2609),a=s.n(n)()(l());a.push([t.id,":root,\n.sl-theme-dark{--sl-z-index-drawer:1000;--sl-z-index-dialog:1000;--sl-z-index-dropdown:1050;--sl-z-index-toast:1000;--sl-z-index-tooltip:1070}.sl-toast-stack{width:100%;left:0;right:auto;overflow:initial;pointer-events:none}.sl-toast-stack > sl-alert{pointer-events:all}",""]);const r=a},1744:(t,e,s)=>{var o=s(6062),l=s.n(o),n=s(4036),a=s.n(n),r=s(6793),u=s.n(r),i=s(7892),d=s.n(i),c=s(1173),h=s.n(c),b=s(2464),g=s.n(b),p=s(738),_={};_.styleTagTransform=g(),_.setAttributes=d(),_.insert=u().bind(null,"head"),_.domAPI=a(),_.insertStyleElement=h(),l()(p.Z,_),p.Z&&p.Z.locals&&p.Z.locals},2397:(t,e,s)=>{var o=s(7979),l=s(3030),n=s(8427),a=s(5166),r=s(1452),u=n.iv`
  ${r.Z}

  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`;let i=class extends a.Z{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(t){const e=d(t.target);null==e||e.classList.add("sl-button-group__button--focus")}handleBlur(t){const e=d(t.target);null==e||e.classList.remove("sl-button-group__button--focus")}handleMouseOver(t){const e=d(t.target);null==e||e.classList.add("sl-button-group__button--hover")}handleMouseOut(t){const e=d(t.target);null==e||e.classList.remove("sl-button-group__button--hover")}handleSlotChange(){const t=[...this.defaultSlot.assignedElements({flatten:!0})];t.forEach((e=>{const s=t.indexOf(e),o=d(e);null!==o&&(o.classList.add("sl-button-group__button"),o.classList.toggle("sl-button-group__button--first",0===s),o.classList.toggle("sl-button-group__button--inner",s>0&&s<t.length-1),o.classList.toggle("sl-button-group__button--last",s===t.length-1),o.classList.toggle("sl-button-group__button--radio","sl-radio-button"===o.tagName.toLowerCase()))}))}render(){return n.dy`
      <slot
        part="base"
        class="button-group"
        role="${this.disableRole?"presentation":"group"}"
        aria-label=${this.label}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
        @slotchange=${this.handleSlotChange}
      ></slot>
    `}};function d(t){var e;const s="sl-button, sl-radio-button";return null!=(e=t.closest(s))?e:t.querySelector(s)}i.styles=u,(0,o.u2)([(0,l.IO)("slot")],i.prototype,"defaultSlot",2),(0,o.u2)([(0,l.SB)()],i.prototype,"disableRole",2),(0,o.u2)([(0,l.Cb)()],i.prototype,"label",2),i=(0,o.u2)([(0,l.Mo)("sl-button-group")],i)},1452:(t,e,s)=>{s.d(e,{Z:()=>o});const o=s(8427).iv`
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
//# sourceMappingURL=sl-button-group.503a3962.js.map
/*! For license information please see sl-badge.e4e997a3.js.LICENSE.txt */
"use strict";(self.webpackChunk_next_bricks_shoelace=self.webpackChunk_next_bricks_shoelace||[]).push([[2947],{6494:(e,r,t)=>{t.r(r),t(106),t(6771)},6771:(e,r,t)=>{t(2969),t(3467);var s=t(4124);function a(e){document.documentElement.classList["dark"===e||"dark-v2"===e?"add":"remove"]("sl-theme-dark")}t(1744),(0,s.t)(t.p),a(document.documentElement.dataset.theme),window.addEventListener("theme.change",(e=>{a(e.detail)}))},738:(e,r,t)=>{t.d(r,{Z:()=>n});var s=t(9601),a=t.n(s),l=t(2609),o=t.n(l)()(a());o.push([e.id,":root,\n.sl-theme-dark{--sl-z-index-drawer:1000;--sl-z-index-dialog:1000;--sl-z-index-dropdown:1050;--sl-z-index-toast:1000;--sl-z-index-tooltip:1070}.sl-toast-stack{width:100%;left:0;right:auto;overflow:initial;pointer-events:none}.sl-toast-stack > sl-alert{pointer-events:all}",""]);const n=o},1744:(e,r,t)=>{var s=t(6062),a=t.n(s),l=t(4036),o=t.n(l),n=t(6793),i=t.n(n),d=t(7892),c=t.n(d),u=t(1173),p=t.n(u),h=t(2464),b=t.n(h),g=t(738),v={};v.styleTagTransform=b(),v.setAttributes=c(),v.insert=i().bind(null,"head"),v.domAPI=o(),v.insertStyleElement=p(),a()(g.Z,v),g.Z&&g.Z.locals&&g.Z.locals},9710:(e,r,t)=>{t.d(r,{N:()=>s});var s=t(8427).iv`
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
`},106:(e,r,t)=>{var s=t(9710),a=t(8427),l=a.iv`
  ${s.N}

  :host {
    display: inline-flex;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: max(12px, 0.75em);
    font-weight: var(--sl-font-weight-semibold);
    letter-spacing: var(--sl-letter-spacing-normal);
    line-height: 1;
    border-radius: var(--sl-border-radius-small);
    border: solid 1px var(--sl-color-neutral-0);
    white-space: nowrap;
    padding: 0.35em 0.6em;
    user-select: none;
    cursor: inherit;
  }

  /* Variant modifiers */
  .badge--primary {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--success {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--neutral {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--warning {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--danger {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /* Pill modifier */
  .badge--pill {
    border-radius: var(--sl-border-radius-pill);
  }

  /* Pulse modifier */
  .badge--pulse {
    animation: pulse 1.5s infinite;
  }

  .badge--pulse.badge--primary {
    --pulse-color: var(--sl-color-primary-600);
  }

  .badge--pulse.badge--success {
    --pulse-color: var(--sl-color-success-600);
  }

  .badge--pulse.badge--neutral {
    --pulse-color: var(--sl-color-neutral-600);
  }

  .badge--pulse.badge--warning {
    --pulse-color: var(--sl-color-warning-600);
  }

  .badge--pulse.badge--danger {
    --pulse-color: var(--sl-color-danger-600);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--pulse-color);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }
`,o=t(1465),n=t(7979),i=t(9832),d=t(9900),c=class extends o.P{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return a.dy`
      <span
        part="base"
        class=${(0,i.$)({badge:!0,"badge--primary":"primary"===this.variant,"badge--success":"success"===this.variant,"badge--neutral":"neutral"===this.variant,"badge--warning":"warning"===this.variant,"badge--danger":"danger"===this.variant,"badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};c.styles=l,(0,n.u2)([(0,d.Cb)({reflect:!0})],c.prototype,"variant",2),(0,n.u2)([(0,d.Cb)({type:Boolean,reflect:!0})],c.prototype,"pill",2),(0,n.u2)([(0,d.Cb)({type:Boolean,reflect:!0})],c.prototype,"pulse",2),c.define("sl-badge")},7514:(e,r,t)=>{t.d(r,{XM:()=>a,Xe:()=>l,pX:()=>s});const s={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},a=e=>(...r)=>({_$litDirective$:e,values:r});class l{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,t){this._$Ct=e,this._$AM=r,this._$Ci=t}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}}},9832:(e,r,t)=>{t.d(r,{$:()=>l});var s=t(3311),a=t(7514);const l=(0,a.XM)(class extends a.Xe{constructor(e){var r;if(super(e),e.type!==a.pX.ATTRIBUTE||"class"!==e.name||(null===(r=e.strings)||void 0===r?void 0:r.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((r=>e[r])).join(" ")+" "}update(e,[r]){var t,a;if(void 0===this.it){this.it=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in r)r[e]&&!(null===(t=this.nt)||void 0===t?void 0:t.has(e))&&this.it.add(e);return this.render(r)}const l=e.element.classList;this.it.forEach((e=>{e in r||(l.remove(e),this.it.delete(e))}));for(const e in r){const t=!!r[e];t===this.it.has(e)||(null===(a=this.nt)||void 0===a?void 0:a.has(e))||(t?(l.add(e),this.it.add(e)):(l.remove(e),this.it.delete(e)))}return s.Jb}})}}]);
//# sourceMappingURL=sl-badge.e4e997a3.js.map
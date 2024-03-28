/*! For license information please see sl-badge.36c14178.js.LICENSE.txt */
"use strict";(self.webpackChunk_next_bricks_shoelace=self.webpackChunk_next_bricks_shoelace||[]).push([[9416],{5787:(e,r,t)=>{t.r(r),t(810),t(7901)},7901:(e,r,t)=>{t(8258),t(4804);var s=t(7719);function a(e){document.documentElement.classList["dark"===e||"dark-v2"===e?"add":"remove"]("sl-theme-dark")}t(7422),(0,s.j)(t.p),a(document.documentElement.dataset.theme),window.addEventListener("theme.change",(e=>{a(e.detail)}))},9832:(e,r,t)=>{t.d(r,{A:()=>n});var s=t(6758),a=t.n(s),l=t(935),o=t.n(l)()(a());o.push([e.id,":root,\n.sl-theme-dark{--sl-z-index-drawer:1000;--sl-z-index-dialog:1000;--sl-z-index-dropdown:1050;--sl-z-index-toast:1001;--sl-z-index-tooltip:1070}.sl-toast-stack{width:100%;left:0;right:auto;overflow:initial;pointer-events:none}.sl-toast-stack > sl-alert{pointer-events:all}",""]);const n=o},7422:(e,r,t)=>{var s=t(2591),a=t.n(s),l=t(1740),o=t.n(l),n=t(8128),i=t.n(n),d=t(855),c=t.n(d),u=t(3051),p=t.n(u),h=t(3656),g=t.n(h),v=t(9832),b={};b.styleTagTransform=g(),b.setAttributes=c(),b.insert=i().bind(null,"head"),b.domAPI=o(),b.insertStyleElement=p(),a()(v.A,b),v.A&&v.A.locals&&v.A.locals},7324:(e,r,t)=>{t.d(r,{$:()=>s});var s=t(5024).AH`
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
`},810:(e,r,t)=>{var s=t(7324),a=t(5024),l=a.AH`
  ${s.$}

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
    -webkit-user-select: none;
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
`,o=t(7489),n=t(7012),i=t(3788),d=t(2489),c=class extends o.f{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return a.qy`
      <span
        part="base"
        class=${(0,i.H)({badge:!0,"badge--primary":"primary"===this.variant,"badge--success":"success"===this.variant,"badge--neutral":"neutral"===this.variant,"badge--warning":"warning"===this.variant,"badge--danger":"danger"===this.variant,"badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};c.styles=l,(0,n.Cc)([(0,d.MZ)({reflect:!0})],c.prototype,"variant",2),(0,n.Cc)([(0,d.MZ)({type:Boolean,reflect:!0})],c.prototype,"pill",2),(0,n.Cc)([(0,d.MZ)({type:Boolean,reflect:!0})],c.prototype,"pulse",2),c.define("sl-badge")},5128:(e,r,t)=>{t.d(r,{OA:()=>s,WL:()=>l,u$:()=>a});var s={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},a=e=>function(){for(var r=arguments.length,t=new Array(r),s=0;s<r;s++)t[s]=arguments[s];return{_$litDirective$:e,values:t}};class l{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,t){this._$Ct=e,this._$AM=r,this._$Ci=t}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}}},3788:(e,r,t)=>{t.d(r,{H:()=>l});var s=t(4716),a=t(5128),l=(0,a.u$)(class extends a.WL{constructor(e){var r;if(super(e),e.type!==a.OA.ATTRIBUTE||"class"!==e.name||(null===(r=e.strings)||void 0===r?void 0:r.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((r=>e[r])).join(" ")+" "}update(e,r){var[t]=r;if(void 0===this.it){for(var a in this.it=new Set,void 0!==e.strings&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e)))),t){var l;t[a]&&(null===(l=this.st)||void 0===l||!l.has(a))&&this.it.add(a)}return this.render(t)}var o=e.element.classList;for(var n of this.it)n in t||(o.remove(n),this.it.delete(n));for(var i in t){var d,c=!!t[i];c===this.it.has(i)||(null===(d=this.st)||void 0===d?void 0:d.has(i))||(c?(o.add(i),this.it.add(i)):(o.remove(i),this.it.delete(i)))}return s.c0}})}}]);
//# sourceMappingURL=sl-badge.36c14178.js.map
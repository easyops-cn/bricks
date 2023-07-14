/*! For license information please see sl-skeleton.389d0bb9.js.LICENSE.txt */
"use strict";(self.webpackChunk_next_bricks_shoelace=self.webpackChunk_next_bricks_shoelace||[]).push([[269],{5666:(e,t,s)=>{s.r(t),s(7907),s(5517)},5517:(e,t,s)=>{s(2969),s(3467);var i=s(4124);function n(e){document.documentElement.classList["dark"===e||"dark-v2"===e?"add":"remove"]("sl-theme-dark")}s(1744),(0,i.t)(s.p),n(document.documentElement.dataset.theme),window.addEventListener("theme.change",(e=>{n(e.detail)}))},738:(e,t,s)=>{s.d(t,{Z:()=>a});var i=s(9601),n=s.n(i),o=s(2609),r=s.n(o)()(n());r.push([e.id,":root,\n.sl-theme-dark{--sl-z-index-drawer:1000;--sl-z-index-dialog:1000;--sl-z-index-dropdown:1050;--sl-z-index-toast:1000;--sl-z-index-tooltip:1070}.sl-toast-stack{width:100%;left:0;right:auto;overflow:initial;pointer-events:none}.sl-toast-stack > sl-alert{pointer-events:all}",""]);const a=r},1744:(e,t,s)=>{var i=s(6062),n=s.n(i),o=s(4036),r=s.n(o),a=s(6793),l=s.n(a),d=s(7892),c=s.n(d),h=s(1173),u=s.n(h),v=s(2464),p=s.n(v),k=s(738),b={};b.styleTagTransform=p(),b.setAttributes=c(),b.insert=l().bind(null,"head"),b.domAPI=r(),b.insertStyleElement=u(),n()(k.Z,b),k.Z&&k.Z.locals&&k.Z.locals},7907:(e,t,s)=>{var i=s(7979),n=s(9832),o=s(3030),r=s(8427),a=s(5166),l=s(1452),d=r.iv`
  ${l.Z}

  :host {
    --border-radius: var(--sl-border-radius-pill);
    --color: var(--sl-color-neutral-200);
    --sheen-color: var(--sl-color-neutral-300);

    display: block;
    position: relative;
  }

  .skeleton {
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 1rem;
  }

  .skeleton__indicator {
    flex: 1 1 auto;
    background: var(--color);
    border-radius: var(--border-radius);
  }

  .skeleton--sheen .skeleton__indicator {
    background: linear-gradient(270deg, var(--sheen-color), var(--color), var(--color), var(--sheen-color));
    background-size: 400% 100%;
    background-size: 400% 100%;
    animation: sheen 8s ease-in-out infinite;
  }

  .skeleton--pulse .skeleton__indicator {
    animation: pulse 2s ease-in-out 0.5s infinite;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    :host {
      --color: GrayText;
    }
  }

  @keyframes sheen {
    0% {
      background-position: 200% 0;
    }
    to {
      background-position: -200% 0;
    }
  }

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
`;let c=class extends a.Z{constructor(){super(...arguments),this.effect="none"}render(){return r.dy`
      <div
        part="base"
        class=${(0,n.$)({skeleton:!0,"skeleton--pulse":"pulse"===this.effect,"skeleton--sheen":"sheen"===this.effect})}
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `}};c.styles=d,(0,i.u2)([(0,o.Cb)()],c.prototype,"effect",2),c=(0,i.u2)([(0,o.Mo)("sl-skeleton")],c)},1452:(e,t,s)=>{s.d(t,{Z:()=>i});const i=s(8427).iv`
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
`},7514:(e,t,s)=>{s.d(t,{XM:()=>n,Xe:()=>o,pX:()=>i});const i={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},n=e=>(...t)=>({_$litDirective$:e,values:t});class o{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,s){this._$Ct=e,this._$AM=t,this._$Ci=s}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}},9832:(e,t,s)=>{s.d(t,{$:()=>o});var i=s(3311),n=s(7514);const o=(0,n.XM)(class extends n.Xe{constructor(e){var t;if(super(e),e.type!==n.pX.ATTRIBUTE||"class"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){var s,n;if(void 0===this.it){this.it=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!(null===(s=this.nt)||void 0===s?void 0:s.has(e))&&this.it.add(e);return this.render(t)}const o=e.element.classList;this.it.forEach((e=>{e in t||(o.remove(e),this.it.delete(e))}));for(const e in t){const s=!!t[e];s===this.it.has(e)||(null===(n=this.nt)||void 0===n?void 0:n.has(e))||(s?(o.add(e),this.it.add(e)):(o.remove(e),this.it.delete(e)))}return i.Jb}})}}]);
//# sourceMappingURL=sl-skeleton.389d0bb9.js.map
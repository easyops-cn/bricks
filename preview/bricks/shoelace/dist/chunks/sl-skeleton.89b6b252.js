/*! For license information please see sl-skeleton.89b6b252.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_next_bricks_shoelace=globalThis.webpackChunk_next_bricks_shoelace||[]).push([[7290],{6461:(e,t,s)=>{s.r(t),s(3903),s(7901)},7901:(e,t,s)=>{s(8258),s(4804);var n=s(7719);function i(e){document.documentElement.classList["dark"===e||"dark-v2"===e?"add":"remove"]("sl-theme-dark")}s(7422),(0,n.j)(s.p),i(document.documentElement.dataset.theme),window.addEventListener("theme.change",(e=>{i(e.detail)}))},9832:(e,t,s)=>{s.d(t,{A:()=>a});var n=s(6758),i=s.n(n),o=s(935),r=s.n(o)()(i());r.push([e.id,":root,\n.sl-theme-dark{--sl-z-index-drawer:1000;--sl-z-index-dialog:1000;--sl-z-index-dropdown:1050;--sl-z-index-toast:1060;--sl-z-index-tooltip:1070}.sl-toast-stack{width:100%;left:0;right:auto;overflow:initial;pointer-events:none}.sl-toast-stack > sl-alert{pointer-events:all}",""]);const a=r},7422:(e,t,s)=>{var n=s(2591),i=s.n(n),o=s(1740),r=s.n(o),a=s(8128),l=s.n(a),d=s(855),c=s.n(d),h=s(3051),u=s.n(h),v=s(3656),p=s.n(v),f=s(9832),k={};k.styleTagTransform=p(),k.setAttributes=c(),k.insert=l().bind(null,"head"),k.domAPI=r(),k.insertStyleElement=u(),i()(f.A,k),f.A&&f.A.locals&&f.A.locals},7324:(e,t,s)=>{s.d(t,{$:()=>n});var n=s(5024).AH`
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
`},3903:(e,t,s)=>{var n=s(5024),i=n.AH`
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
`,o=s(7324),r=s(8004),a=s(1320),l=s(3788),d=s(8146),c=class extends r.f{constructor(){super(...arguments),this.effect="none"}render(){return n.qy`
      <div
        part="base"
        class=${(0,l.H)({skeleton:!0,"skeleton--pulse":"pulse"===this.effect,"skeleton--sheen":"sheen"===this.effect})}
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `}};c.styles=[o.$,i],(0,a.Cc)([(0,d.MZ)()],c.prototype,"effect",2),c.define("sl-skeleton")},5128:(e,t,s)=>{s.d(t,{OA:()=>n,WL:()=>o,u$:()=>i});const n={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},i=e=>function(){for(var t=arguments.length,s=new Array(t),n=0;n<t;n++)s[n]=arguments[n];return{_$litDirective$:e,values:s}};class o{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,s){this._$Ct=e,this._$AM=t,this._$Ci=s}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}},3788:(e,t,s)=>{s.d(t,{H:()=>o});var n=s(4716),i=s(5128);const o=(0,i.u$)(class extends i.WL{constructor(e){var t;if(super(e),e.type!==i.OA.ATTRIBUTE||"class"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,t){let[s]=t;if(void 0===this.it){this.it=new Set,void 0!==e.strings&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in s){var i;s[e]&&(null===(i=this.st)||void 0===i||!i.has(e))&&this.it.add(e)}return this.render(s)}const o=e.element.classList;for(const e of this.it)e in s||(o.remove(e),this.it.delete(e));for(const e in s){var r;const t=!!s[e];t===this.it.has(e)||(null===(r=this.st)||void 0===r?void 0:r.has(e))||(t?(o.add(e),this.it.add(e)):(o.remove(e),this.it.delete(e)))}return n.c0}})}}]);
//# sourceMappingURL=sl-skeleton.89b6b252.js.map
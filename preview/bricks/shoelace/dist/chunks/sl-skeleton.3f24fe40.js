/*! For license information please see sl-skeleton.3f24fe40.js.LICENSE.txt */
"use strict";(self.webpackChunk_next_bricks_shoelace=self.webpackChunk_next_bricks_shoelace||[]).push([[7290],{6461:(e,t,s)=>{s.r(t),s(4894),s(7901)},7901:(e,t,s)=>{s(8258),s(4804);var r=s(7719);function i(e){document.documentElement.classList["dark"===e||"dark-v2"===e?"add":"remove"]("sl-theme-dark")}s(7422),(0,r.j)(s.p),i(document.documentElement.dataset.theme),window.addEventListener("theme.change",(e=>{i(e.detail)}))},9832:(e,t,s)=>{s.d(t,{A:()=>a});var r=s(6758),i=s.n(r),n=s(935),o=s.n(n)()(i());o.push([e.id,":root,\n.sl-theme-dark{--sl-z-index-drawer:1000;--sl-z-index-dialog:1000;--sl-z-index-dropdown:1050;--sl-z-index-toast:1001;--sl-z-index-tooltip:1070}.sl-toast-stack{width:100%;left:0;right:auto;overflow:initial;pointer-events:none}.sl-toast-stack > sl-alert{pointer-events:all}",""]);const a=o},7422:(e,t,s)=>{var r=s(2591),i=s.n(r),n=s(1740),o=s.n(n),a=s(8128),l=s.n(a),d=s(855),c=s.n(d),h=s(3051),u=s.n(h),v=s(3656),p=s.n(v),f=s(9832),k={};k.styleTagTransform=p(),k.setAttributes=c(),k.insert=l().bind(null,"head"),k.domAPI=o(),k.insertStyleElement=u(),i()(f.A,k),f.A&&f.A.locals&&f.A.locals},7324:(e,t,s)=>{s.d(t,{$:()=>r});var r=s(5024).AH`
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
`},4894:(e,t,s)=>{var r=s(7324),i=s(5024),n=i.AH`
  ${r.$}

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
`,o=s(7489),a=s(7012),l=s(3788),d=s(2489),c=class extends o.f{constructor(){super(...arguments),this.effect="none"}render(){return i.qy`
      <div
        part="base"
        class=${(0,l.H)({skeleton:!0,"skeleton--pulse":"pulse"===this.effect,"skeleton--sheen":"sheen"===this.effect})}
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `}};c.styles=n,(0,a.Cc)([(0,d.MZ)()],c.prototype,"effect",2),c.define("sl-skeleton")},5128:(e,t,s)=>{s.d(t,{OA:()=>r,WL:()=>n,u$:()=>i});var r={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},i=e=>function(){for(var t=arguments.length,s=new Array(t),r=0;r<t;r++)s[r]=arguments[r];return{_$litDirective$:e,values:s}};class n{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,s){this._$Ct=e,this._$AM=t,this._$Ci=s}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}},3788:(e,t,s)=>{s.d(t,{H:()=>n});var r=s(4716),i=s(5128),n=(0,i.u$)(class extends i.WL{constructor(e){var t;if(super(e),e.type!==i.OA.ATTRIBUTE||"class"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,t){var[s]=t;if(void 0===this.it){for(var i in this.it=new Set,void 0!==e.strings&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e)))),s){var n;s[i]&&(null===(n=this.st)||void 0===n||!n.has(i))&&this.it.add(i)}return this.render(s)}var o=e.element.classList;for(var a of this.it)a in s||(o.remove(a),this.it.delete(a));for(var l in s){var d,c=!!s[l];c===this.it.has(l)||(null===(d=this.st)||void 0===d?void 0:d.has(l))||(c?(o.add(l),this.it.add(l)):(o.remove(l),this.it.delete(l)))}return r.c0}})}}]);
//# sourceMappingURL=sl-skeleton.3f24fe40.js.map
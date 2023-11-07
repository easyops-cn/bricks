/*! For license information please see sl-card.65ab048d.js.LICENSE.txt */
"use strict";(self.webpackChunk_next_bricks_shoelace=self.webpackChunk_next_bricks_shoelace||[]).push([[5967],{9509:(t,e,r)=>{r.r(e),r(8073),r(6771)},6771:(t,e,r)=>{r(2969),r(3467);var s=r(4124);function a(t){document.documentElement.classList["dark"===t||"dark-v2"===t?"add":"remove"]("sl-theme-dark")}r(1744),(0,s.t)(r.p),a(document.documentElement.dataset.theme),window.addEventListener("theme.change",(t=>{a(t.detail)}))},738:(t,e,r)=>{r.d(e,{Z:()=>i});var s=r(9601),a=r.n(s),o=r(2609),d=r.n(o)()(a());d.push([t.id,":root,\n.sl-theme-dark{--sl-z-index-drawer:1000;--sl-z-index-dialog:1000;--sl-z-index-dropdown:1050;--sl-z-index-toast:1000;--sl-z-index-tooltip:1070}.sl-toast-stack{width:100%;left:0;right:auto;overflow:initial;pointer-events:none}.sl-toast-stack > sl-alert{pointer-events:all}",""]);const i=d},1744:(t,e,r)=>{var s=r(6062),a=r.n(s),o=r(4036),d=r.n(o),i=r(6793),n=r.n(i),l=r(7892),h=r.n(l),c=r(1173),u=r.n(c),p=r(2464),v=r.n(p),b=r(738),m={};m.styleTagTransform=v(),m.setAttributes=h(),m.insert=n().bind(null,"head"),m.domAPI=d(),m.insertStyleElement=u(),a()(b.Z,m),b.Z&&b.Z.locals&&b.Z.locals},6167:(t,e,r)=>{r.d(e,{F:()=>a,r:()=>s});var s=class{constructor(t,...e){this.slotNames=[],this.handleSlotChange=t=>{const e=t.target;(this.slotNames.includes("[default]")&&!e.name||e.name&&this.slotNames.includes(e.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=e}hasDefaultSlot(){return[...this.host.childNodes].some((t=>{if(t.nodeType===t.TEXT_NODE&&""!==t.textContent.trim())return!0;if(t.nodeType===t.ELEMENT_NODE){const e=t;if("sl-visually-hidden"===e.tagName.toLowerCase())return!1;if(!e.hasAttribute("slot"))return!0}return!1}))}hasNamedSlot(t){return null!==this.host.querySelector(`:scope > [slot="${t}"]`)}test(t){return"[default]"===t?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};function a(t){if(!t)return"";const e=t.assignedNodes({flatten:!0});let r="";return[...e].forEach((t=>{t.nodeType===Node.TEXT_NODE&&(r+=t.textContent)})),r}},9710:(t,e,r)=>{r.d(e,{N:()=>s});var s=r(8427).iv`
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
`},8073:(t,e,r)=>{var s=r(9710),a=r(8427),o=a.iv`
  ${s.N}

  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    display: block;
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    display: block;
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`,d=r(6167),i=r(1465),n=r(9832),l=class extends i.P{constructor(){super(...arguments),this.hasSlotController=new d.r(this,"footer","header","image")}render(){return a.dy`
      <div
        part="base"
        class=${(0,n.$)({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};l.styles=o,l.define("sl-card"),r(7979)},7514:(t,e,r)=>{r.d(e,{XM:()=>a,Xe:()=>o,pX:()=>s});const s={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},a=t=>(...e)=>({_$litDirective$:t,values:e});class o{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,r){this._$Ct=t,this._$AM=e,this._$Ci=r}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},9832:(t,e,r)=>{r.d(e,{$:()=>o});var s=r(3311),a=r(7514);const o=(0,a.XM)(class extends a.Xe{constructor(t){var e;if(super(t),t.type!==a.pX.ATTRIBUTE||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){var r,a;if(void 0===this.it){this.it=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!(null===(r=this.nt)||void 0===r?void 0:r.has(t))&&this.it.add(t);return this.render(e)}const o=t.element.classList;this.it.forEach((t=>{t in e||(o.remove(t),this.it.delete(t))}));for(const t in e){const r=!!e[t];r===this.it.has(t)||(null===(a=this.nt)||void 0===a?void 0:a.has(t))||(r?(o.add(t),this.it.add(t)):(o.remove(t),this.it.delete(t)))}return s.Jb}})}}]);
//# sourceMappingURL=sl-card.65ab048d.js.map
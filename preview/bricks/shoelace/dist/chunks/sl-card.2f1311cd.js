/*! For license information please see sl-card.2f1311cd.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_next_bricks_shoelace=globalThis.webpackChunk_next_bricks_shoelace||[]).push([[9085],{2335:(t,e,r)=>{r.r(e),r(5492),r(7901)},7901:(t,e,r)=>{r(8258),r(4804);var s=r(7719);function a(t){document.documentElement.classList["dark"===t||"dark-v2"===t?"add":"remove"]("sl-theme-dark")}r(7422),(0,s.j)(r.p),a(document.documentElement.dataset.theme),window.addEventListener("theme.change",(t=>{a(t.detail)}))},9832:(t,e,r)=>{r.d(e,{A:()=>i});var s=r(6758),a=r.n(s),o=r(935),d=r.n(o)()(a());d.push([t.id,":root,\n.sl-theme-dark{--sl-z-index-drawer:1000;--sl-z-index-dialog:1000;--sl-z-index-dropdown:1050;--sl-z-index-toast:1060;--sl-z-index-tooltip:1070}.sl-toast-stack{width:100%;left:0;right:auto;overflow:initial;pointer-events:none}.sl-toast-stack > sl-alert{pointer-events:all}",""]);const i=d},7422:(t,e,r)=>{var s=r(2591),a=r.n(s),o=r(1740),d=r.n(o),i=r(8128),n=r.n(i),l=r(855),h=r.n(l),c=r(3051),u=r.n(c),b=r(3656),p=r.n(b),v=r(9832),m={};m.styleTagTransform=p(),m.setAttributes=h(),m.insert=n().bind(null,"head"),m.domAPI=d(),m.insertStyleElement=u(),a()(v.A,m),v.A&&v.A.locals&&v.A.locals},4101:(t,e,r)=>{r.d(e,{X:()=>s,r:()=>a});var s=class{constructor(t,...e){this.slotNames=[],this.handleSlotChange=t=>{const e=t.target;(this.slotNames.includes("[default]")&&!e.name||e.name&&this.slotNames.includes(e.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=e}hasDefaultSlot(){return[...this.host.childNodes].some((t=>{if(t.nodeType===t.TEXT_NODE&&""!==t.textContent.trim())return!0;if(t.nodeType===t.ELEMENT_NODE){const e=t;if("sl-visually-hidden"===e.tagName.toLowerCase())return!1;if(!e.hasAttribute("slot"))return!0}return!1}))}hasNamedSlot(t){return null!==this.host.querySelector(`:scope > [slot="${t}"]`)}test(t){return"[default]"===t?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};function a(t){if(!t)return"";const e=t.assignedNodes({flatten:!0});let r="";return[...e].forEach((t=>{t.nodeType===Node.TEXT_NODE&&(r+=t.textContent)})),r}},7324:(t,e,r)=>{r.d(e,{$:()=>s});var s=r(5024).AH`
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
`},5492:(t,e,r)=>{var s=r(5024),a=s.AH`
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
`,o=r(4101),d=r(7324),i=r(8004),n=r(3788),l=class extends i.f{constructor(){super(...arguments),this.hasSlotController=new o.X(this,"footer","header","image")}render(){return s.qy`
      <div
        part="base"
        class=${(0,n.H)({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};l.styles=[d.$,a],l.define("sl-card"),r(1320)},5128:(t,e,r)=>{r.d(e,{OA:()=>s,WL:()=>o,u$:()=>a});const s={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},a=t=>function(){for(var e=arguments.length,r=new Array(e),s=0;s<e;s++)r[s]=arguments[s];return{_$litDirective$:t,values:r}};class o{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,r){this._$Ct=t,this._$AM=e,this._$Ci=r}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},3788:(t,e,r)=>{r.d(e,{H:()=>o});var s=r(4716),a=r(5128);const o=(0,a.u$)(class extends a.WL{constructor(t){var e;if(super(t),t.type!==a.OA.ATTRIBUTE||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,e){let[r]=e;if(void 0===this.it){this.it=new Set,void 0!==t.strings&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in r){var a;r[t]&&(null===(a=this.st)||void 0===a||!a.has(t))&&this.it.add(t)}return this.render(r)}const o=t.element.classList;for(const t of this.it)t in r||(o.remove(t),this.it.delete(t));for(const t in r){var d;const e=!!r[t];e===this.it.has(t)||(null===(d=this.st)||void 0===d?void 0:d.has(t))||(e?(o.add(t),this.it.add(t)):(o.remove(t),this.it.delete(t)))}return s.c0}})}}]);
//# sourceMappingURL=sl-card.2f1311cd.js.map
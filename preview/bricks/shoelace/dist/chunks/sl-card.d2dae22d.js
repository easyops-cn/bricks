/*! For license information please see sl-card.d2dae22d.js.LICENSE.txt */
"use strict";(self.webpackChunk_next_bricks_shoelace=self.webpackChunk_next_bricks_shoelace||[]).push([[9085],{2335:(e,t,r)=>{r.r(t),r(8588),r(7901)},7901:(e,t,r)=>{r(8258),r(4804);var a=r(7719);function s(e){document.documentElement.classList["dark"===e||"dark-v2"===e?"add":"remove"]("sl-theme-dark")}r(7422),(0,a.j)(r.p),s(document.documentElement.dataset.theme),window.addEventListener("theme.change",(e=>{s(e.detail)}))},9832:(e,t,r)=>{r.d(t,{A:()=>i});var a=r(6758),s=r.n(a),o=r(935),d=r.n(o)()(s());d.push([e.id,":root,\n.sl-theme-dark{--sl-z-index-drawer:1000;--sl-z-index-dialog:1000;--sl-z-index-dropdown:1050;--sl-z-index-toast:1001;--sl-z-index-tooltip:1070}.sl-toast-stack{width:100%;left:0;right:auto;overflow:initial;pointer-events:none}.sl-toast-stack > sl-alert{pointer-events:all}",""]);const i=d},7422:(e,t,r)=>{var a=r(2591),s=r.n(a),o=r(1740),d=r.n(o),i=r(8128),n=r.n(i),l=r(855),h=r.n(l),c=r(3051),u=r.n(c),v=r(3656),p=r.n(v),b=r(9832),m={};m.styleTagTransform=p(),m.setAttributes=h(),m.insert=n().bind(null,"head"),m.domAPI=d(),m.insertStyleElement=u(),s()(b.A,m),b.A&&b.A.locals&&b.A.locals},4101:(e,t,r)=>{r.d(t,{X:()=>a,r:()=>s});var a=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=e=>{const t=e.target;(this.slotNames.includes("[default]")&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some((e=>{if(e.nodeType===e.TEXT_NODE&&""!==e.textContent.trim())return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if("sl-visually-hidden"===t.tagName.toLowerCase())return!1;if(!t.hasAttribute("slot"))return!0}return!1}))}hasNamedSlot(e){return null!==this.host.querySelector(`:scope > [slot="${e}"]`)}test(e){return"[default]"===e?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};function s(e){if(!e)return"";const t=e.assignedNodes({flatten:!0});let r="";return[...t].forEach((e=>{e.nodeType===Node.TEXT_NODE&&(r+=e.textContent)})),r}},7324:(e,t,r)=>{r.d(t,{$:()=>a});var a=r(5024).AH`
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
`},8588:(e,t,r)=>{var a=r(7324),s=r(5024),o=s.AH`
  ${a.$}

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
`,d=r(4101),i=r(7489),n=r(3788),l=class extends i.f{constructor(){super(...arguments),this.hasSlotController=new d.X(this,"footer","header","image")}render(){return s.qy`
      <div
        part="base"
        class=${(0,n.H)({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};l.styles=o,l.define("sl-card"),r(7012)},5128:(e,t,r)=>{r.d(t,{OA:()=>a,WL:()=>o,u$:()=>s});var a={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},s=e=>function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return{_$litDirective$:e,values:r}};class o{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}},3788:(e,t,r)=>{r.d(t,{H:()=>o});var a=r(4716),s=r(5128),o=(0,s.u$)(class extends s.WL{constructor(e){var t;if(super(e),e.type!==s.OA.ATTRIBUTE||"class"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,t){var[r]=t;if(void 0===this.it){for(var s in this.it=new Set,void 0!==e.strings&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e)))),r){var o;r[s]&&(null===(o=this.st)||void 0===o||!o.has(s))&&this.it.add(s)}return this.render(r)}var d=e.element.classList;for(var i of this.it)i in r||(d.remove(i),this.it.delete(i));for(var n in r){var l,h=!!r[n];h===this.it.has(n)||(null===(l=this.st)||void 0===l?void 0:l.has(n))||(h?(d.add(n),this.it.add(n)):(d.remove(n),this.it.delete(n)))}return a.c0}})}}]);
//# sourceMappingURL=sl-card.d2dae22d.js.map
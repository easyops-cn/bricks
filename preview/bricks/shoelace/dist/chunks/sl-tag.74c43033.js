/*! For license information please see sl-tag.74c43033.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_next_bricks_shoelace=globalThis.webpackChunk_next_bricks_shoelace||[]).push([[4649],{9016:(t,e,r)=>{r.r(e),r(7273),r(7901)},7901:(t,e,r)=>{r(8258),r(4804);var o=r(7719);function a(t){document.documentElement.classList["dark"===t||"dark-v2"===t?"add":"remove"]("sl-theme-dark")}r(7422),(0,o.j)(r.p),a(document.documentElement.dataset.theme),window.addEventListener("theme.change",(t=>{a(t.detail)}))},9832:(t,e,r)=>{r.d(e,{A:()=>i});var o=r(6758),a=r.n(o),s=r(935),n=r.n(s)()(a());n.push([t.id,":root,\n.sl-theme-dark{--sl-z-index-drawer:1000;--sl-z-index-dialog:1000;--sl-z-index-dropdown:1050;--sl-z-index-toast:1060;--sl-z-index-tooltip:1070}.sl-toast-stack{width:100%;left:0;right:auto;overflow:initial;pointer-events:none}.sl-toast-stack > sl-alert{pointer-events:all}",""]);const i=n},7422:(t,e,r)=>{var o=r(2591),a=r.n(o),s=r(1740),n=r.n(s),i=r(8128),l=r.n(i),c=r(855),d=r.n(c),u=r(3051),g=r.n(u),h=r(3656),v=r.n(h),m=r(9832),p={};p.styleTagTransform=v(),p.setAttributes=d(),p.insert=l().bind(null,"head"),p.domAPI=n(),p.insertStyleElement=g(),a()(m.A,p),m.A&&m.A.locals&&m.A.locals},5258:(t,e,r)=>{r.d(e,{XC:()=>c,c2:()=>u});const o=new Set,a=new MutationObserver(d),s=new Map;let n,i=document.documentElement.dir||"ltr",l=document.documentElement.lang||navigator.language;function c(...t){t.map((t=>{const e=t.$code.toLowerCase();s.has(e)?s.set(e,Object.assign(Object.assign({},s.get(e)),t)):s.set(e,t),n||(n=t)})),d()}function d(){i=document.documentElement.dir||"ltr",l=document.documentElement.lang||navigator.language,[...o.keys()].map((t=>{"function"==typeof t.requestUpdate&&t.requestUpdate()}))}a.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});class u{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){o.add(this.host)}hostDisconnected(){o.delete(this.host)}dir(){return`${this.host.dir||i}`.toLowerCase()}lang(){return`${this.host.lang||l}`.toLowerCase()}getTranslationData(t){var e,r;const o=new Intl.Locale(t.replace(/_/g,"-")),a=null==o?void 0:o.language.toLowerCase(),n=null!==(r=null===(e=null==o?void 0:o.region)||void 0===e?void 0:e.toLowerCase())&&void 0!==r?r:"";return{locale:o,language:a,region:n,primary:s.get(`${a}-${n}`),secondary:s.get(a)}}exists(t,e){var r;const{primary:o,secondary:a}=this.getTranslationData(null!==(r=e.lang)&&void 0!==r?r:this.lang());return e=Object.assign({includeFallback:!1},e),!!(o&&o[t]||a&&a[t]||e.includeFallback&&n&&n[t])}term(t,...e){const{primary:r,secondary:o}=this.getTranslationData(this.lang());let a;if(r&&r[t])a=r[t];else if(o&&o[t])a=o[t];else{if(!n||!n[t])return console.error(`No translation found for: ${String(t)}`),String(t);a=n[t]}return"function"==typeof a?a(...e):a}date(t,e){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),e).format(t)}number(t,e){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),e).format(t)}relativeTime(t,e,r){return new Intl.RelativeTimeFormat(this.lang(),r).format(t,e)}}},5752:(t,e,r)=>{r.d(e,{w:()=>a});var o=r(1320);function a(t,e){const r=(0,o.IA)({waitUntilFirstUpdate:!1},e);return(e,o)=>{const{update:a}=e,s=Array.isArray(t)?t:[t];e.update=function(t){s.forEach((e=>{const a=e;if(t.has(a)){const e=t.get(a),s=this[a];e!==s&&(r.waitUntilFirstUpdate&&!this.hasUpdated||this[o](e,s))}})),a.call(this,t)}}}},1829:(t,e,r)=>{r.d(e,{Q:()=>g});var o=r(2062),a=r(2484),s=r(333),n=r(7324),i=r(8004),l=r(1320),c=r(3788),d=r(5024),u=r(8146),g=class extends i.f{constructor(){super(...arguments),this.localize=new s.c(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return d.qy`
      <span
        part="base"
        class=${(0,c.H)({tag:!0,"tag--primary":"primary"===this.variant,"tag--success":"success"===this.variant,"tag--neutral":"neutral"===this.variant,"tag--warning":"warning"===this.variant,"tag--danger":"danger"===this.variant,"tag--text":"text"===this.variant,"tag--small":"small"===this.size,"tag--medium":"medium"===this.size,"tag--large":"large"===this.size,"tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?d.qy`
              <sl-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("remove")}
                class="tag__remove"
                @click=${this.handleRemoveClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </span>
    `}};g.styles=[n.$,o.g],g.dependencies={"sl-icon-button":a.h},(0,l.Cc)([(0,u.MZ)({reflect:!0})],g.prototype,"variant",2),(0,l.Cc)([(0,u.MZ)({reflect:!0})],g.prototype,"size",2),(0,l.Cc)([(0,u.MZ)({type:Boolean,reflect:!0})],g.prototype,"pill",2),(0,l.Cc)([(0,u.MZ)({type:Boolean})],g.prototype,"removable",2)},3280:(t,e,r)=>{r.d(e,{k:()=>a});var o={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>0===t?"No options selected":1===t?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format"};(0,r(5258).XC)(o);var a=o},7324:(t,e,r)=>{r.d(e,{$:()=>o});var o=r(5024).AH`
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
`},2062:(t,e,r)=>{r.d(e,{g:()=>o});var o=r(5024).AH`
  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-200);
    color: var(--sl-color-primary-800);
  }

  .tag--primary:active > sl-icon-button {
    color: var(--sl-color-primary-600);
  }

  .tag--success {
    background-color: var(--sl-color-success-50);
    border-color: var(--sl-color-success-200);
    color: var(--sl-color-success-800);
  }

  .tag--success:active > sl-icon-button {
    color: var(--sl-color-success-600);
  }

  .tag--neutral {
    background-color: var(--sl-color-neutral-50);
    border-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-800);
  }

  .tag--neutral:active > sl-icon-button {
    color: var(--sl-color-neutral-600);
  }

  .tag--warning {
    background-color: var(--sl-color-warning-50);
    border-color: var(--sl-color-warning-200);
    color: var(--sl-color-warning-800);
  }

  .tag--warning:active > sl-icon-button {
    color: var(--sl-color-warning-600);
  }

  .tag--danger {
    background-color: var(--sl-color-danger-50);
    border-color: var(--sl-color-danger-200);
    color: var(--sl-color-danger-800);
  }

  .tag--danger:active > sl-icon-button {
    color: var(--sl-color-danger-600);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--sl-button-font-size-small);
    height: calc(var(--sl-input-height-small) * 0.8);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
    padding: 0 var(--sl-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--sl-button-font-size-medium);
    height: calc(var(--sl-input-height-medium) * 0.8);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
    padding: 0 var(--sl-spacing-small);
  }

  .tag--large {
    font-size: var(--sl-button-font-size-large);
    height: calc(var(--sl-input-height-large) * 0.8);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
    padding: 0 var(--sl-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--sl-border-radius-pill);
  }
`},333:(t,e,r)=>{r.d(e,{c:()=>s});var o=r(3280),a=r(5258),s=class extends a.c2{};(0,a.XC)(o.k)},7273:(t,e,r)=>{r(1829).Q.define("sl-tag"),r(2062),r(2484),r(3750),r(333),r(3280),r(4812),r(2089),r(4415),r(4637),r(8326),r(5752),r(7324),r(8004),r(1320)},3348:(t,e,r)=>{r.d(e,{Rt:()=>n,mY:()=>l,qb:()=>s});var o=r(4716);const{D:a}=o.ge,s=(t,e)=>void 0===e?void 0!==(null==t?void 0:t._$litType$):(null==t?void 0:t._$litType$)===e,n=t=>void 0===t.strings,i={},l=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i;return t._$AH=e}},5128:(t,e,r)=>{r.d(e,{OA:()=>o,WL:()=>s,u$:()=>a});const o={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},a=t=>function(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return{_$litDirective$:t,values:r}};class s{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,r){this._$Ct=t,this._$AM=e,this._$Ci=r}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},3788:(t,e,r)=>{r.d(e,{H:()=>s});var o=r(4716),a=r(5128);const s=(0,a.u$)(class extends a.WL{constructor(t){var e;if(super(t),t.type!==a.OA.ATTRIBUTE||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,e){let[r]=e;if(void 0===this.it){this.it=new Set,void 0!==t.strings&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in r){var a;r[t]&&(null===(a=this.st)||void 0===a||!a.has(t))&&this.it.add(t)}return this.render(r)}const s=t.element.classList;for(const t of this.it)t in r||(s.remove(t),this.it.delete(t));for(const t in r){var n;const e=!!r[t];e===this.it.has(t)||(null===(n=this.st)||void 0===n?void 0:n.has(t))||(e?(s.add(t),this.it.add(t)):(s.remove(t),this.it.delete(t)))}return o.c0}})},996:(t,e,r)=>{r.d(e,{J:()=>a});var o=r(4716);const a=t=>t??o.s6}}]);
//# sourceMappingURL=sl-tag.74c43033.js.map
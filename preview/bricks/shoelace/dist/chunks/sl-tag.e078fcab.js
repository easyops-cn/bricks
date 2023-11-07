"use strict";(self.webpackChunk_next_bricks_shoelace=self.webpackChunk_next_bricks_shoelace||[]).push([[400],{8329:(e,t,r)=>{r.r(t),r(996),r(6771)},6771:(e,t,r)=>{r(2969),r(3467);var a=r(4124);function o(e){document.documentElement.classList["dark"===e||"dark-v2"===e?"add":"remove"]("sl-theme-dark")}r(1744),(0,a.t)(r.p),o(document.documentElement.dataset.theme),window.addEventListener("theme.change",(e=>{o(e.detail)}))},738:(e,t,r)=>{r.d(t,{Z:()=>n});var a=r(9601),o=r.n(a),l=r(2609),s=r.n(l)()(o());s.push([e.id,":root,\n.sl-theme-dark{--sl-z-index-drawer:1000;--sl-z-index-dialog:1000;--sl-z-index-dropdown:1050;--sl-z-index-toast:1000;--sl-z-index-tooltip:1070}.sl-toast-stack{width:100%;left:0;right:auto;overflow:initial;pointer-events:none}.sl-toast-stack > sl-alert{pointer-events:all}",""]);const n=s},1744:(e,t,r)=>{var a=r(6062),o=r.n(a),l=r(4036),s=r.n(l),n=r(6793),i=r.n(n),c=r(7892),d=r.n(c),u=r(1173),g=r.n(u),m=r(2464),h=r.n(m),v=r(738),p={};p.styleTagTransform=h(),p.setAttributes=d(),p.insert=i().bind(null,"head"),p.domAPI=s(),p.insertStyleElement=g(),o()(v.Z,p),v.Z&&v.Z.locals&&v.Z.locals},8179:(e,t,r)=>{r.d(t,{P5:()=>c,Ve:()=>u});const a=new Set,o=new MutationObserver(d),l=new Map;let s,n=document.documentElement.dir||"ltr",i=document.documentElement.lang||navigator.language;function c(...e){e.map((e=>{const t=e.$code.toLowerCase();l.has(t)?l.set(t,Object.assign(Object.assign({},l.get(t)),e)):l.set(t,e),s||(s=e)})),d()}function d(){n=document.documentElement.dir||"ltr",i=document.documentElement.lang||navigator.language,[...a.keys()].map((e=>{"function"==typeof e.requestUpdate&&e.requestUpdate()}))}o.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});class u{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){a.add(this.host)}hostDisconnected(){a.delete(this.host)}dir(){return`${this.host.dir||n}`.toLowerCase()}lang(){return`${this.host.lang||i}`.toLowerCase()}getTranslationData(e){var t,r;const a=new Intl.Locale(e),o=null==a?void 0:a.language.toLowerCase(),s=null!==(r=null===(t=null==a?void 0:a.region)||void 0===t?void 0:t.toLowerCase())&&void 0!==r?r:"";return{locale:a,language:o,region:s,primary:l.get(`${o}-${s}`),secondary:l.get(o)}}exists(e,t){var r;const{primary:a,secondary:o}=this.getTranslationData(null!==(r=t.lang)&&void 0!==r?r:this.lang());return t=Object.assign({includeFallback:!1},t),!!(a&&a[e]||o&&o[e]||t.includeFallback&&s&&s[e])}term(e,...t){const{primary:r,secondary:a}=this.getTranslationData(this.lang());let o;if(r&&r[e])o=r[e];else if(a&&a[e])o=a[e];else{if(!s||!s[e])return console.error(`No translation found for: ${String(e)}`),String(e);o=s[e]}return"function"==typeof o?o(...t):o}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,r){return new Intl.RelativeTimeFormat(this.lang(),r).format(e,t)}}},3385:(e,t,r)=>{r.d(t,{V:()=>o});var a=r(8179),o=class extends a.Ve{}},463:(e,t,r)=>{r.d(t,{l:()=>o});var a=r(9710),o=r(8427).iv`
  ${a.N}

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
`},8513:(e,t,r)=>{(0,r(8179).P5)({$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>0===e?"No options selected":1===e?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"})},4718:(e,t,r)=>{r.d(t,{h:()=>u});var a=r(463),o=r(7482),l=r(3385),s=r(1465),n=r(7979),i=r(9832),c=r(8427),d=r(9900),u=class extends s.P{constructor(){super(...arguments),this.localize=new l.V(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return c.dy`
      <span
        part="base"
        class=${(0,i.$)({tag:!0,"tag--primary":"primary"===this.variant,"tag--success":"success"===this.variant,"tag--neutral":"neutral"===this.variant,"tag--warning":"warning"===this.variant,"tag--danger":"danger"===this.variant,"tag--text":"text"===this.variant,"tag--small":"small"===this.size,"tag--medium":"medium"===this.size,"tag--large":"large"===this.size,"tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?c.dy`
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
    `}};u.styles=a.l,u.dependencies={"sl-icon-button":o.U},(0,n.u2)([(0,d.Cb)({reflect:!0})],u.prototype,"variant",2),(0,n.u2)([(0,d.Cb)({reflect:!0})],u.prototype,"size",2),(0,n.u2)([(0,d.Cb)({type:Boolean,reflect:!0})],u.prototype,"pill",2),(0,n.u2)([(0,d.Cb)({type:Boolean})],u.prototype,"removable",2)},996:(e,t,r)=>{r(4718).h.define("sl-tag"),r(463),r(7482),r(335),r(3385),r(8513),r(6877),r(5249),r(836),r(9699),r(1793),r(4703),r(1465),r(9710),r(7979)}}]);
//# sourceMappingURL=sl-tag.e078fcab.js.map
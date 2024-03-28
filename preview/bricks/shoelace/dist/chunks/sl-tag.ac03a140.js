"use strict";(self.webpackChunk_next_bricks_shoelace=self.webpackChunk_next_bricks_shoelace||[]).push([[4649],{9016:(e,t,r)=>{r.r(t),r(7296),r(7901)},7901:(e,t,r)=>{r(8258),r(4804);var a=r(7719);function o(e){document.documentElement.classList["dark"===e||"dark-v2"===e?"add":"remove"]("sl-theme-dark")}r(7422),(0,a.j)(r.p),o(document.documentElement.dataset.theme),window.addEventListener("theme.change",(e=>{o(e.detail)}))},9832:(e,t,r)=>{r.d(t,{A:()=>n});var a=r(6758),o=r.n(a),l=r(935),s=r.n(l)()(o());s.push([e.id,":root,\n.sl-theme-dark{--sl-z-index-drawer:1000;--sl-z-index-dialog:1000;--sl-z-index-dropdown:1050;--sl-z-index-toast:1001;--sl-z-index-tooltip:1070}.sl-toast-stack{width:100%;left:0;right:auto;overflow:initial;pointer-events:none}.sl-toast-stack > sl-alert{pointer-events:all}",""]);const n=s},7422:(e,t,r)=>{var a=r(2591),o=r.n(a),l=r(1740),s=r.n(l),n=r(8128),i=r.n(n),c=r(855),d=r.n(c),u=r(3051),g=r.n(u),m=r(3656),v=r.n(m),h=r(9832),p={};p.styleTagTransform=v(),p.setAttributes=d(),p.insert=i().bind(null,"head"),p.domAPI=s(),p.insertStyleElement=g(),o()(h.A,p),h.A&&h.A.locals&&h.A.locals},5258:(e,t,r)=>{r.d(t,{XC:()=>c,c2:()=>u});const a=new Set,o=new MutationObserver(d),l=new Map;let s,n=document.documentElement.dir||"ltr",i=document.documentElement.lang||navigator.language;function c(...e){e.map((e=>{const t=e.$code.toLowerCase();l.has(t)?l.set(t,Object.assign(Object.assign({},l.get(t)),e)):l.set(t,e),s||(s=e)})),d()}function d(){n=document.documentElement.dir||"ltr",i=document.documentElement.lang||navigator.language,[...a.keys()].map((e=>{"function"==typeof e.requestUpdate&&e.requestUpdate()}))}o.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});class u{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){a.add(this.host)}hostDisconnected(){a.delete(this.host)}dir(){return`${this.host.dir||n}`.toLowerCase()}lang(){return`${this.host.lang||i}`.toLowerCase()}getTranslationData(e){var t,r;const a=new Intl.Locale(e.replace(/_/g,"-")),o=null==a?void 0:a.language.toLowerCase(),s=null!==(r=null===(t=null==a?void 0:a.region)||void 0===t?void 0:t.toLowerCase())&&void 0!==r?r:"";return{locale:a,language:o,region:s,primary:l.get(`${o}-${s}`),secondary:l.get(o)}}exists(e,t){var r;const{primary:a,secondary:o}=this.getTranslationData(null!==(r=t.lang)&&void 0!==r?r:this.lang());return t=Object.assign({includeFallback:!1},t),!!(a&&a[e]||o&&o[e]||t.includeFallback&&s&&s[e])}term(e,...t){const{primary:r,secondary:a}=this.getTranslationData(this.lang());let o;if(r&&r[e])o=r[e];else if(a&&a[e])o=a[e];else{if(!s||!s[e])return console.error(`No translation found for: ${String(e)}`),String(e);o=s[e]}return"function"==typeof o?o(...t):o}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,r){return new Intl.RelativeTimeFormat(this.lang(),r).format(e,t)}}},669:(e,t,r)=>{r.d(t,{g:()=>o});var a=r(7324),o=r(5024).AH`
  ${a.$}

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
`},3280:(e,t,r)=>{r.d(t,{k:()=>o});var a={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>0===e?"No options selected":1===e?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};(0,r(5258).XC)(a);var o=a},333:(e,t,r)=>{r.d(t,{c:()=>l});var a=r(3280),o=r(5258),l=class extends o.c2{};(0,o.XC)(a.k)},8961:(e,t,r)=>{r.d(t,{Q:()=>u});var a=r(669),o=r(1382),l=r(333),s=r(7489),n=r(7012),i=r(3788),c=r(5024),d=r(2489),u=class extends s.f{constructor(){super(...arguments),this.localize=new l.c(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return c.qy`
      <span
        part="base"
        class=${(0,i.H)({tag:!0,"tag--primary":"primary"===this.variant,"tag--success":"success"===this.variant,"tag--neutral":"neutral"===this.variant,"tag--warning":"warning"===this.variant,"tag--danger":"danger"===this.variant,"tag--text":"text"===this.variant,"tag--small":"small"===this.size,"tag--medium":"medium"===this.size,"tag--large":"large"===this.size,"tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?c.qy`
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
    `}};u.styles=a.g,u.dependencies={"sl-icon-button":o.h},(0,n.Cc)([(0,d.MZ)({reflect:!0})],u.prototype,"variant",2),(0,n.Cc)([(0,d.MZ)({reflect:!0})],u.prototype,"size",2),(0,n.Cc)([(0,d.MZ)({type:Boolean,reflect:!0})],u.prototype,"pill",2),(0,n.Cc)([(0,d.MZ)({type:Boolean})],u.prototype,"removable",2)},7296:(e,t,r)=>{r(8961).Q.define("sl-tag"),r(669),r(1382),r(2846),r(333),r(3280),r(7352),r(7464),r(4415),r(4637),r(8326),r(5794),r(7489),r(7324),r(7012)}}]);
//# sourceMappingURL=sl-tag.ac03a140.js.map
/*! For license information please see sl-range.0d85e28e.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_next_bricks_shoelace=globalThis.webpackChunk_next_bricks_shoelace||[]).push([[7606],{281:(t,e,o)=>{o.r(e),o(9021),o(7901)},7901:(t,e,o)=>{o(8258),o(4804);var r=o(7719);function a(t){document.documentElement.classList["dark"===t||"dark-v2"===t?"add":"remove"]("sl-theme-dark")}o(7422),(0,r.j)(o.p),a(document.documentElement.dataset.theme),window.addEventListener("theme.change",(t=>{a(t.detail)}))},9832:(t,e,o)=>{o.d(e,{A:()=>n});var r=o(6758),a=o.n(r),i=o(935),l=o.n(i)()(a());l.push([t.id,":root,\n.sl-theme-dark{--sl-z-index-drawer:1000;--sl-z-index-dialog:1000;--sl-z-index-dropdown:1050;--sl-z-index-toast:1060;--sl-z-index-tooltip:1070}.sl-toast-stack{width:100%;left:0;right:auto;overflow:initial;pointer-events:none}.sl-toast-stack > sl-alert{pointer-events:all}",""]);const n=l},7422:(t,e,o)=>{var r=o(2591),a=o.n(r),i=o(1740),l=o.n(i),n=o(8128),s=o.n(n),c=o(855),h=o.n(c),d=o(3051),p=o.n(d),u=o(3656),v=o.n(u),m=o(9832),g={};g.styleTagTransform=v(),g.setAttributes=h(),g.insert=s().bind(null,"head"),g.domAPI=l(),g.insertStyleElement=p(),a()(m.A,g),m.A&&m.A.locals&&m.A.locals},5258:(t,e,o)=>{o.d(e,{XC:()=>c,c2:()=>d});const r=new Set,a=new MutationObserver(h),i=new Map;let l,n=document.documentElement.dir||"ltr",s=document.documentElement.lang||navigator.language;function c(...t){t.map((t=>{const e=t.$code.toLowerCase();i.has(e)?i.set(e,Object.assign(Object.assign({},i.get(e)),t)):i.set(e,t),l||(l=t)})),h()}function h(){n=document.documentElement.dir||"ltr",s=document.documentElement.lang||navigator.language,[...r.keys()].map((t=>{"function"==typeof t.requestUpdate&&t.requestUpdate()}))}a.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});class d{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){r.add(this.host)}hostDisconnected(){r.delete(this.host)}dir(){return`${this.host.dir||n}`.toLowerCase()}lang(){return`${this.host.lang||s}`.toLowerCase()}getTranslationData(t){var e,o;const r=new Intl.Locale(t.replace(/_/g,"-")),a=null==r?void 0:r.language.toLowerCase(),l=null!==(o=null===(e=null==r?void 0:r.region)||void 0===e?void 0:e.toLowerCase())&&void 0!==o?o:"";return{locale:r,language:a,region:l,primary:i.get(`${a}-${l}`),secondary:i.get(a)}}exists(t,e){var o;const{primary:r,secondary:a}=this.getTranslationData(null!==(o=e.lang)&&void 0!==o?o:this.lang());return e=Object.assign({includeFallback:!1},e),!!(r&&r[t]||a&&a[t]||e.includeFallback&&l&&l[t])}term(t,...e){const{primary:o,secondary:r}=this.getTranslationData(this.lang());let a;if(o&&o[t])a=o[t];else if(r&&r[t])a=r[t];else{if(!l||!l[t])return console.error(`No translation found for: ${String(t)}`),String(t);a=l[t]}return"function"==typeof a?a(...e):a}date(t,e){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),e).format(t)}number(t,e){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),e).format(t)}relativeTime(t,e,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(t,e)}}},3280:(t,e,o)=>{o.d(e,{k:()=>a});var r={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>0===t?"No options selected":1===t?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format"};(0,o(5258).XC)(r);var a=r},333:(t,e,o)=>{o.d(e,{c:()=>i});var r=o(3280),a=o(5258),i=class extends a.c2{};(0,a.XC)(r.k)},9021:(t,e,o)=>{var r=o(5024),a=r.AH`
  :host {
    --thumb-size: 20px;
    --tooltip-offset: 10px;
    --track-color-active: var(--sl-color-neutral-200);
    --track-color-inactive: var(--sl-color-neutral-200);
    --track-active-offset: 0%;
    --track-height: 6px;

    display: block;
  }

  .range {
    position: relative;
  }

  .range__control {
    --percent: 0%;
    -webkit-appearance: none;
    border-radius: 3px;
    width: 100%;
    height: var(--track-height);
    background: transparent;
    line-height: var(--sl-input-height-medium);
    vertical-align: middle;
    margin: 0;

    background-image: linear-gradient(
      to right,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  .range--rtl .range__control {
    background-image: linear-gradient(
      to left,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  /* Webkit */
  .range__control::-webkit-slider-runnable-track {
    width: 100%;
    height: var(--track-height);
    border-radius: 3px;
    border: none;
  }

  .range__control::-webkit-slider-thumb {
    border: none;
    width: var(--thumb-size);
    height: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border: solid var(--sl-input-border-width) var(--sl-color-primary-600);
    -webkit-appearance: none;
    margin-top: calc(var(--thumb-size) / -2 + var(--track-height) / 2);
    cursor: pointer;
  }

  .range__control:enabled::-webkit-slider-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-webkit-slider-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-webkit-slider-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* Firefox */
  .range__control::-moz-focus-outer {
    border: 0;
  }

  .range__control::-moz-range-progress {
    background-color: var(--track-color-active);
    border-radius: 3px;
    height: var(--track-height);
  }

  .range__control::-moz-range-track {
    width: 100%;
    height: var(--track-height);
    background-color: var(--track-color-inactive);
    border-radius: 3px;
    border: none;
  }

  .range__control::-moz-range-thumb {
    border: none;
    height: var(--thumb-size);
    width: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
    cursor: pointer;
  }

  .range__control:enabled::-moz-range-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-moz-range-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-moz-range-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* States */
  .range__control:focus-visible {
    outline: none;
  }

  .range__control:disabled {
    opacity: 0.5;
  }

  .range__control:disabled::-webkit-slider-thumb {
    cursor: not-allowed;
  }

  .range__control:disabled::-moz-range-thumb {
    cursor: not-allowed;
  }

  /* Tooltip output */
  .range__tooltip {
    position: absolute;
    z-index: var(--sl-z-index-tooltip);
    left: 0;
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    color: var(--sl-tooltip-color);
    opacity: 0;
    padding: var(--sl-tooltip-padding);
    transition: var(--sl-transition-fast) opacity;
    pointer-events: none;
  }

  .range__tooltip:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    left: 50%;
    translate: calc(-1 * var(--sl-tooltip-arrow-size));
  }

  .range--tooltip-visible .range__tooltip {
    opacity: 1;
  }

  /* Tooltip on top */
  .range--tooltip-top .range__tooltip {
    top: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-top .range__tooltip:after {
    border-top: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    top: 100%;
  }

  /* Tooltip on bottom */
  .range--tooltip-bottom .range__tooltip {
    bottom: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-bottom .range__tooltip:after {
    border-bottom: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    bottom: 100%;
  }

  @media (forced-colors: active) {
    .range__control,
    .range__tooltip {
      border: solid 1px transparent;
    }

    .range__control::-webkit-slider-thumb {
      border: solid 1px transparent;
    }

    .range__control::-moz-range-thumb {
      border: solid 1px transparent;
    }

    .range__tooltip:after {
      display: none;
    }
  }
`,i=o(3088),l=o(1696),n=o(8251),s=o(333),c=o(5752),h=o(4101),d=o(7324),p=o(8004),u=o(1320),v=o(3788),m=o(8146),g=o(996),b=o(33),f=class extends p.f{constructor(){super(...arguments),this.formControlController=new n.Ud(this),this.hasSlotController=new h.X(this,"help-text","label"),this.localize=new s.c(this),this.hasFocus=!1,this.hasTooltip=!1,this.title="",this.name="",this.value=0,this.label="",this.helpText="",this.disabled=!1,this.min=0,this.max=100,this.step=1,this.tooltip="top",this.tooltipFormatter=t=>t.toString(),this.form="",this.defaultValue=0}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver((()=>this.syncRange())),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max),this.updateComplete.then((()=>{this.syncRange(),this.resizeObserver.observe(this.input)}))}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this.input)}handleChange(){this.emit("sl-change")}handleInput(){this.value=parseFloat(this.input.value),this.emit("sl-input"),this.syncRange()}handleBlur(){this.hasFocus=!1,this.hasTooltip=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.hasTooltip=!0,this.emit("sl-focus")}handleThumbDragStart(){this.hasTooltip=!0}handleThumbDragEnd(){this.hasTooltip=!1}syncProgress(t){this.input.style.setProperty("--percent",100*t+"%")}syncTooltip(t){if(null!==this.output){const e=this.input.offsetWidth,o=this.output.offsetWidth,r=getComputedStyle(this.input).getPropertyValue("--thumb-size"),a=e*t;if("rtl"===this.localize.dir()){const i=`${e-a}px + ${t} * ${r}`;this.output.style.translate=`calc((${i} - ${o/2}px - ${r} / 2))`}else{const e=`${a}px - ${t} * ${r}`;this.output.style.translate=`calc(${e} - ${o/2}px + ${r} / 2)`}}}handleValueChange(){this.formControlController.updateValidity(),this.input.value=this.value.toString(),this.value=parseFloat(this.input.value),this.syncRange()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}syncRange(){const t=Math.max(0,(this.value-this.min)/(this.max-this.min));this.syncProgress(t),"none"!==this.tooltip&&this.updateComplete.then((()=>this.syncTooltip(t)))}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}focus(t){this.input.focus(t)}blur(){this.input.blur()}stepUp(){this.input.stepUp(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}stepDown(){this.input.stepDown(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),o=!!this.label||!!t,a=!!this.helpText||!!e;return r.qy`
      <div
        part="form-control"
        class=${(0,v.H)({"form-control":!0,"form-control--medium":!0,"form-control--has-label":o,"form-control--has-help-text":a})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${(0,v.H)({range:!0,"range--disabled":this.disabled,"range--focused":this.hasFocus,"range--rtl":"rtl"===this.localize.dir(),"range--tooltip-visible":this.hasTooltip,"range--tooltip-top":"top"===this.tooltip,"range--tooltip-bottom":"bottom"===this.tooltip})}
            @mousedown=${this.handleThumbDragStart}
            @mouseup=${this.handleThumbDragEnd}
            @touchstart=${this.handleThumbDragStart}
            @touchend=${this.handleThumbDragEnd}
          >
            <input
              part="input"
              id="input"
              class="range__control"
              title=${this.title}
              type="range"
              name=${(0,g.J)(this.name)}
              ?disabled=${this.disabled}
              min=${(0,g.J)(this.min)}
              max=${(0,g.J)(this.max)}
              step=${(0,g.J)(this.step)}
              .value=${(0,b.V)(this.value.toString())}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @focus=${this.handleFocus}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @blur=${this.handleBlur}
            />
            ${"none"===this.tooltip||this.disabled?"":r.qy`
                  <output part="tooltip" class="range__tooltip">
                    ${"function"==typeof this.tooltipFormatter?this.tooltipFormatter(this.value):this.value}
                  </output>
                `}
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${a?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};f.styles=[d.$,l.I,a],(0,u.Cc)([(0,m.P)(".range__control")],f.prototype,"input",2),(0,u.Cc)([(0,m.P)(".range__tooltip")],f.prototype,"output",2),(0,u.Cc)([(0,m.wk)()],f.prototype,"hasFocus",2),(0,u.Cc)([(0,m.wk)()],f.prototype,"hasTooltip",2),(0,u.Cc)([(0,m.MZ)()],f.prototype,"title",2),(0,u.Cc)([(0,m.MZ)()],f.prototype,"name",2),(0,u.Cc)([(0,m.MZ)({type:Number})],f.prototype,"value",2),(0,u.Cc)([(0,m.MZ)()],f.prototype,"label",2),(0,u.Cc)([(0,m.MZ)({attribute:"help-text"})],f.prototype,"helpText",2),(0,u.Cc)([(0,m.MZ)({type:Boolean,reflect:!0})],f.prototype,"disabled",2),(0,u.Cc)([(0,m.MZ)({type:Number})],f.prototype,"min",2),(0,u.Cc)([(0,m.MZ)({type:Number})],f.prototype,"max",2),(0,u.Cc)([(0,m.MZ)({type:Number})],f.prototype,"step",2),(0,u.Cc)([(0,m.MZ)()],f.prototype,"tooltip",2),(0,u.Cc)([(0,m.MZ)({attribute:!1})],f.prototype,"tooltipFormatter",2),(0,u.Cc)([(0,m.MZ)({reflect:!0})],f.prototype,"form",2),(0,u.Cc)([(0,i.J)()],f.prototype,"defaultValue",2),(0,u.Cc)([(0,m.Ls)({passive:!0})],f.prototype,"handleThumbDragStart",1),(0,u.Cc)([(0,c.w)("value",{waitUntilFirstUpdate:!0})],f.prototype,"handleValueChange",1),(0,u.Cc)([(0,c.w)("disabled",{waitUntilFirstUpdate:!0})],f.prototype,"handleDisabledChange",1),(0,u.Cc)([(0,c.w)("hasTooltip",{waitUntilFirstUpdate:!0})],f.prototype,"syncRange",1),f.define("sl-range"),o(3280)},33:(t,e,o)=>{o.d(e,{V:()=>l});var r=o(4716),a=o(5128),i=o(3348);const l=(0,a.u$)(class extends a.WL{constructor(t){if(super(t),t.type!==a.OA.PROPERTY&&t.type!==a.OA.ATTRIBUTE&&t.type!==a.OA.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!(0,i.Rt)(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,e){let[o]=e;if(o===r.c0||o===r.s6)return o;const l=t.element,n=t.name;if(t.type===a.OA.PROPERTY){if(o===l[n])return r.c0}else if(t.type===a.OA.BOOLEAN_ATTRIBUTE){if(!!o===l.hasAttribute(n))return r.c0}else if(t.type===a.OA.ATTRIBUTE&&l.getAttribute(n)===o+"")return r.c0;return(0,i.mY)(t),o}})}}]);
//# sourceMappingURL=sl-range.0d85e28e.js.map
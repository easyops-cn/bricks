/*! For license information please see sl-switch.be8de258.js.LICENSE.txt */
"use strict";(self.webpackChunk_next_bricks_shoelace=self.webpackChunk_next_bricks_shoelace||[]).push([[2963],{2586:(t,e,i)=>{i.r(e),i(550),i(7901)},7901:(t,e,i)=>{i(8258),i(4804);var s=i(7719);function o(t){document.documentElement.classList["dark"===t||"dark-v2"===t?"add":"remove"]("sl-theme-dark")}i(7422),(0,s.j)(i.p),o(document.documentElement.dataset.theme),window.addEventListener("theme.change",(t=>{o(t.detail)}))},9832:(t,e,i)=>{i.d(e,{A:()=>l});var s=i(6758),o=i.n(s),r=i(935),a=i.n(r)()(o());a.push([t.id,":root,\n.sl-theme-dark{--sl-z-index-drawer:1000;--sl-z-index-dialog:1000;--sl-z-index-dropdown:1050;--sl-z-index-toast:1001;--sl-z-index-tooltip:1070}.sl-toast-stack{width:100%;left:0;right:auto;overflow:initial;pointer-events:none}.sl-toast-stack > sl-alert{pointer-events:all}",""]);const l=a},7422:(t,e,i)=>{var s=i(2591),o=i.n(s),r=i(1740),a=i.n(r),l=i(8128),n=i.n(l),h=i(855),c=i.n(h),d=i(3051),u=i.n(d),m=i(3656),p=i.n(m),f=i(9832),v={};v.styleTagTransform=p(),v.setAttributes=c(),v.insert=n().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=u(),o()(f.A,v),f.A&&f.A.locals&&f.A.locals},5952:(t,e,i)=>{i.d(e,{G6:()=>c,Ud:()=>h,pL:()=>u,zF:()=>d});var s=i(7012),o=new WeakMap,r=new WeakMap,a=new WeakMap,l=new WeakSet,n=new WeakMap,h=class{constructor(t,e){this.handleFormData=t=>{const e=this.options.disabled(this.host),i=this.options.name(this.host),s=this.options.value(this.host),o="sl-button"===this.host.tagName.toLowerCase();!e&&!o&&"string"==typeof i&&i.length>0&&void 0!==s&&(Array.isArray(s)?s.forEach((e=>{t.formData.append(i,e.toString())})):t.formData.append(i,s.toString()))},this.handleFormSubmit=t=>{var e;const i=this.options.disabled(this.host),s=this.options.reportValidity;this.form&&!this.form.noValidate&&(null==(e=o.get(this.form))||e.forEach((t=>{this.setUserInteracted(t,!0)}))),!this.form||this.form.noValidate||i||s(this.host)||(t.preventDefault(),t.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),n.set(this.host,[])},this.handleInteraction=t=>{const e=n.get(this.host);e.includes(t.type)||e.push(t.type),e.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const t=this.form.querySelectorAll("*");for(const e of t)if("function"==typeof e.checkValidity&&!e.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const t=this.form.querySelectorAll("*");for(const e of t)if("function"==typeof e.reportValidity&&!e.reportValidity())return!1}return!0},(this.host=t).addController(this),this.options=(0,s.IA)({form:t=>{const e=t.form;if(e){const i=t.getRootNode().getElementById(e);if(i)return i}return t.closest("form")},name:t=>t.name,value:t=>t.value,defaultValue:t=>t.defaultValue,disabled:t=>{var e;return null!=(e=t.disabled)&&e},reportValidity:t=>"function"!=typeof t.reportValidity||t.reportValidity(),checkValidity:t=>"function"!=typeof t.checkValidity||t.checkValidity(),setValue:(t,e)=>t.value=e,assumeInteractionOn:["sl-input"]},e)}hostConnected(){const t=this.options.form(this.host);t&&this.attachForm(t),n.set(this.host,[]),this.options.assumeInteractionOn.forEach((t=>{this.host.addEventListener(t,this.handleInteraction)}))}hostDisconnected(){this.detachForm(),n.delete(this.host),this.options.assumeInteractionOn.forEach((t=>{this.host.removeEventListener(t,this.handleInteraction)}))}hostUpdated(){const t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(t){t?(this.form=t,o.has(this.form)?o.get(this.form).add(this.host):o.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),r.has(this.form)||(r.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),a.has(this.form)||(a.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const t=o.get(this.form);t&&(t.delete(this.host),t.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),r.has(this.form)&&(this.form.reportValidity=r.get(this.form),r.delete(this.form)),a.has(this.form)&&(this.form.checkValidity=a.get(this.form),a.delete(this.form)),this.form=void 0))}setUserInteracted(t,e){e?l.add(t):l.delete(t),t.requestUpdate()}doAction(t,e){if(this.form){const i=document.createElement("button");i.type=t,i.style.position="absolute",i.style.width="0",i.style.height="0",i.style.clipPath="inset(50%)",i.style.overflow="hidden",i.style.whiteSpace="nowrap",e&&(i.name=e.name,i.value=e.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach((t=>{e.hasAttribute(t)&&i.setAttribute(t,e.getAttribute(t))}))),this.form.append(i),i.click(),i.remove()}}getForm(){var t;return null!=(t=this.form)?t:null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){const e=this.host,i=Boolean(l.has(e)),s=Boolean(e.required);e.toggleAttribute("data-required",s),e.toggleAttribute("data-optional",!s),e.toggleAttribute("data-invalid",!t),e.toggleAttribute("data-valid",t),e.toggleAttribute("data-user-invalid",!t&&i),e.toggleAttribute("data-user-valid",t&&i)}updateValidity(){const t=this.host;this.setValidity(t.validity.valid)}emitInvalidEvent(t){const e=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||e.preventDefault(),this.host.dispatchEvent(e)||null==t||t.preventDefault()}},c=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),d=Object.freeze((0,s.ko)((0,s.IA)({},c),{valid:!1,valueMissing:!0})),u=Object.freeze((0,s.ko)((0,s.IA)({},c),{valid:!1,customError:!0}))},3088:(t,e,i)=>{i.d(e,{J:()=>o});var s=i(5024),o=(t="value")=>(e,i)=>{const o=e.constructor,r=o.prototype.attributeChangedCallback;o.prototype.attributeChangedCallback=function(e,a,l){var n;const h=o.getPropertyOptions(t);if(e===("string"==typeof h.attribute?h.attribute:t)){const e=h.converter||s.W3,o=("function"==typeof e?e:null!=(n=null==e?void 0:e.fromAttribute)?n:s.W3.fromAttribute)(l,h.type);this[t]!==o&&(this[i]=o)}r.call(this,e,a,l)}}},5794:(t,e,i)=>{i.d(e,{w:()=>o});var s=i(7012);function o(t,e){const i=(0,s.IA)({waitUntilFirstUpdate:!1},e);return(e,s)=>{const{update:o}=e,r=Array.isArray(t)?t:[t];e.update=function(t){r.forEach((e=>{const o=e;if(t.has(o)){const e=t.get(o),r=this[o];e!==r&&(i.waitUntilFirstUpdate&&!this.hasUpdated||this[s](e,r))}})),o.call(this,t)}}}},7324:(t,e,i)=>{i.d(e,{$:()=>s});var s=i(5024).AH`
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
`},550:(t,e,i)=>{var s=i(7324),o=i(5024),r=o.AH`
  ${s.$}

  :host {
    display: inline-block;
  }

  :host([size='small']) {
    --height: var(--sl-toggle-size-small);
    --thumb-size: calc(var(--sl-toggle-size-small) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-small);
  }

  :host([size='medium']) {
    --height: var(--sl-toggle-size-medium);
    --thumb-size: calc(var(--sl-toggle-size-medium) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-medium);
  }

  :host([size='large']) {
    --height: var(--sl-toggle-size-large);
    --thumb-size: calc(var(--sl-toggle-size-large) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-large);
  }

  .switch {
    position: relative;
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-input-font-family);
    font-size: inherit;
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .switch__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--width);
    height: var(--height);
    background-color: var(--sl-color-neutral-400);
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    border-radius: var(--height);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color;
  }

  .switch__control .switch__thumb {
    width: var(--thumb-size);
    height: var(--thumb-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: 50%;
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    translate: calc((var(--width) - var(--height)) / -2);
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) box-shadow;
  }

  .switch__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-400);
  }

  /* Focus */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked */
  .switch--checked .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch--checked .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    translate: calc((var(--width) - var(--height)) / 2);
  }

  /* Checked + hover */
  .switch.switch--checked:not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
  }

  /* Checked + focus */
  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .switch--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .switch__label {
    display: inline-block;
    line-height: var(--height);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .switch__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  @media (forced-colors: active) {
    .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb,
    .switch--checked .switch__control .switch__thumb {
      background-color: ButtonText;
    }
  }
`,a=i(3088),l=i(5952),n=i(5794),h=i(7489),c=i(7012),d=i(3788),u=i(996),m=i(33),p=i(2489),f=class extends h.f{constructor(){super(...arguments),this.formControlController=new l.Ud(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,e)=>t.checked=e}),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleClick(){this.checked=!this.checked,this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleKeyDown(t){"ArrowLeft"===t.key&&(t.preventDefault(),this.checked=!1,this.emit("sl-change"),this.emit("sl-input")),"ArrowRight"===t.key&&(t.preventDefault(),this.checked=!0,this.emit("sl-change"),this.emit("sl-input"))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){return o.qy`
      <label
        part="base"
        class=${(0,d.H)({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":"small"===this.size,"switch--medium":"medium"===this.size,"switch--large":"large"===this.size})}
      >
        <input
          class="switch__input"
          type="checkbox"
          title=${this.title}
          name=${this.name}
          value=${(0,u.J)(this.value)}
          .checked=${(0,m.V)(this.checked)}
          .disabled=${this.disabled}
          .required=${this.required}
          role="switch"
          aria-checked=${this.checked?"true":"false"}
          @click=${this.handleClick}
          @input=${this.handleInput}
          @invalid=${this.handleInvalid}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @keydown=${this.handleKeyDown}
        />

        <span part="control" class="switch__control">
          <span part="thumb" class="switch__thumb"></span>
        </span>

        <div part="label" class="switch__label">
          <slot></slot>
        </div>
      </label>
    `}};f.styles=r,(0,c.Cc)([(0,p.P)('input[type="checkbox"]')],f.prototype,"input",2),(0,c.Cc)([(0,p.wk)()],f.prototype,"hasFocus",2),(0,c.Cc)([(0,p.MZ)()],f.prototype,"title",2),(0,c.Cc)([(0,p.MZ)()],f.prototype,"name",2),(0,c.Cc)([(0,p.MZ)()],f.prototype,"value",2),(0,c.Cc)([(0,p.MZ)({reflect:!0})],f.prototype,"size",2),(0,c.Cc)([(0,p.MZ)({type:Boolean,reflect:!0})],f.prototype,"disabled",2),(0,c.Cc)([(0,p.MZ)({type:Boolean,reflect:!0})],f.prototype,"checked",2),(0,c.Cc)([(0,a.J)("checked")],f.prototype,"defaultChecked",2),(0,c.Cc)([(0,p.MZ)({reflect:!0})],f.prototype,"form",2),(0,c.Cc)([(0,p.MZ)({type:Boolean,reflect:!0})],f.prototype,"required",2),(0,c.Cc)([(0,n.w)("checked",{waitUntilFirstUpdate:!0})],f.prototype,"handleCheckedChange",1),(0,c.Cc)([(0,n.w)("disabled",{waitUntilFirstUpdate:!0})],f.prototype,"handleDisabledChange",1),f.define("sl-switch")},3348:(t,e,i)=>{i.d(e,{Rt:()=>a,mY:()=>n,qb:()=>r});var s=i(4716),{D:o}=s.ge,r=(t,e)=>void 0===e?void 0!==(null==t?void 0:t._$litType$):(null==t?void 0:t._$litType$)===e,a=t=>void 0===t.strings,l={},n=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l;return t._$AH=e}},5128:(t,e,i)=>{i.d(e,{OA:()=>s,WL:()=>r,u$:()=>o});var s={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},o=t=>function(){for(var e=arguments.length,i=new Array(e),s=0;s<e;s++)i[s]=arguments[s];return{_$litDirective$:t,values:i}};class r{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},3788:(t,e,i)=>{i.d(e,{H:()=>r});var s=i(4716),o=i(5128),r=(0,o.u$)(class extends o.WL{constructor(t){var e;if(super(t),t.type!==o.OA.ATTRIBUTE||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,e){var[i]=e;if(void 0===this.it){for(var o in this.it=new Set,void 0!==t.strings&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t)))),i){var r;i[o]&&(null===(r=this.st)||void 0===r||!r.has(o))&&this.it.add(o)}return this.render(i)}var a=t.element.classList;for(var l of this.it)l in i||(a.remove(l),this.it.delete(l));for(var n in i){var h,c=!!i[n];c===this.it.has(n)||(null===(h=this.st)||void 0===h?void 0:h.has(n))||(c?(a.add(n),this.it.add(n)):(a.remove(n),this.it.delete(n)))}return s.c0}})},996:(t,e,i)=>{i.d(e,{J:()=>o});var s=i(4716),o=t=>null!=t?t:s.s6},33:(t,e,i)=>{i.d(e,{V:()=>a});var s=i(4716),o=i(5128),r=i(3348),a=(0,o.u$)(class extends o.WL{constructor(t){if(super(t),t.type!==o.OA.PROPERTY&&t.type!==o.OA.ATTRIBUTE&&t.type!==o.OA.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!(0,r.Rt)(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,e){var[i]=e;if(i===s.c0||i===s.s6)return i;var a=t.element,l=t.name;if(t.type===o.OA.PROPERTY){if(i===a[l])return s.c0}else if(t.type===o.OA.BOOLEAN_ATTRIBUTE){if(!!i===a.hasAttribute(l))return s.c0}else if(t.type===o.OA.ATTRIBUTE&&a.getAttribute(l)===i+"")return s.c0;return(0,r.mY)(t),i}})}}]);
//# sourceMappingURL=sl-switch.be8de258.js.map
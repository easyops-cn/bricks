/*! For license information please see sl-radio-group.aa0dba5f.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_next_bricks_shoelace=globalThis.webpackChunk_next_bricks_shoelace||[]).push([[5446],{7241:(t,e,o)=>{o.r(e),o(7081),o(7901)},7901:(t,e,o)=>{o(8258),o(4804);var s=o(7719);function i(t){document.documentElement.classList["dark"===t||"dark-v2"===t?"add":"remove"]("sl-theme-dark")}o(7422),(0,s.j)(o.p),i(document.documentElement.dataset.theme),window.addEventListener("theme.change",(t=>{i(t.detail)}))},9832:(t,e,o)=>{o.d(e,{A:()=>a});var s=o(6758),i=o.n(s),r=o(935),l=o.n(r)()(i());l.push([t.id,":root,\n.sl-theme-dark{--sl-z-index-drawer:1000;--sl-z-index-dialog:1000;--sl-z-index-dropdown:1050;--sl-z-index-toast:1060;--sl-z-index-tooltip:1070}.sl-toast-stack{width:100%;left:0;right:auto;overflow:initial;pointer-events:none}.sl-toast-stack > sl-alert{pointer-events:all}",""]);const a=l},7422:(t,e,o)=>{var s=o(2591),i=o.n(s),r=o(1740),l=o.n(r),a=o(8128),n=o.n(a),h=o(855),d=o.n(h),u=o(3051),c=o.n(u),m=o(3656),p=o.n(m),f=o(9832),g={};g.styleTagTransform=p(),g.setAttributes=d(),g.insert=n().bind(null,"head"),g.domAPI=l(),g.insertStyleElement=c(),i()(f.A,g),f.A&&f.A.locals&&f.A.locals},5752:(t,e,o)=>{o.d(e,{w:()=>i});var s=o(1320);function i(t,e){const o=(0,s.IA)({waitUntilFirstUpdate:!1},e);return(e,s)=>{const{update:i}=e,r=Array.isArray(t)?t:[t];e.update=function(t){r.forEach((e=>{const i=e;if(t.has(i)){const e=t.get(i),r=this[i];e!==r&&(o.waitUntilFirstUpdate&&!this.hasUpdated||this[s](e,r))}})),i.call(this,t)}}}},5842:(t,e,o)=>{o.d(e,{e:()=>s});var s=o(5024).AH`
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`},3144:(t,e,o)=>{o.d(e,{N:()=>h});var s=o(5842),i=o(7324),r=o(8004),l=o(1320),a=o(5024),n=o(8146),h=class extends r.f{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(t){const e=d(t.target);null==e||e.toggleAttribute("data-sl-button-group__button--focus",!0)}handleBlur(t){const e=d(t.target);null==e||e.toggleAttribute("data-sl-button-group__button--focus",!1)}handleMouseOver(t){const e=d(t.target);null==e||e.toggleAttribute("data-sl-button-group__button--hover",!0)}handleMouseOut(t){const e=d(t.target);null==e||e.toggleAttribute("data-sl-button-group__button--hover",!1)}handleSlotChange(){const t=[...this.defaultSlot.assignedElements({flatten:!0})];t.forEach((e=>{const o=t.indexOf(e),s=d(e);s&&(s.toggleAttribute("data-sl-button-group__button",!0),s.toggleAttribute("data-sl-button-group__button--first",0===o),s.toggleAttribute("data-sl-button-group__button--inner",o>0&&o<t.length-1),s.toggleAttribute("data-sl-button-group__button--last",o===t.length-1),s.toggleAttribute("data-sl-button-group__button--radio","sl-radio-button"===s.tagName.toLowerCase()))}))}render(){return a.qy`
      <div
        part="base"
        class="button-group"
        role="${this.disableRole?"presentation":"group"}"
        aria-label=${this.label}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};function d(t){var e;const o="sl-button, sl-radio-button";return null!=(e=t.closest(o))?e:t.querySelector(o)}h.styles=[i.$,s.e],(0,l.Cc)([(0,n.P)("slot")],h.prototype,"defaultSlot",2),(0,l.Cc)([(0,n.wk)()],h.prototype,"disableRole",2),(0,l.Cc)([(0,n.MZ)()],h.prototype,"label",2)},8251:(t,e,o)=>{o.d(e,{G6:()=>d,Ud:()=>h,pL:()=>c,zF:()=>u});var s=o(1320),i=new WeakMap,r=new WeakMap,l=new WeakMap,a=new WeakSet,n=new WeakMap,h=class{constructor(t,e){this.handleFormData=t=>{const e=this.options.disabled(this.host),o=this.options.name(this.host),s=this.options.value(this.host),i="sl-button"===this.host.tagName.toLowerCase();this.host.isConnected&&!e&&!i&&"string"==typeof o&&o.length>0&&void 0!==s&&(Array.isArray(s)?s.forEach((e=>{t.formData.append(o,e.toString())})):t.formData.append(o,s.toString()))},this.handleFormSubmit=t=>{var e;const o=this.options.disabled(this.host),s=this.options.reportValidity;this.form&&!this.form.noValidate&&(null==(e=i.get(this.form))||e.forEach((t=>{this.setUserInteracted(t,!0)}))),!this.form||this.form.noValidate||o||s(this.host)||(t.preventDefault(),t.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),n.set(this.host,[])},this.handleInteraction=t=>{const e=n.get(this.host);e.includes(t.type)||e.push(t.type),e.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const t=this.form.querySelectorAll("*");for(const e of t)if("function"==typeof e.checkValidity&&!e.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const t=this.form.querySelectorAll("*");for(const e of t)if("function"==typeof e.reportValidity&&!e.reportValidity())return!1}return!0},(this.host=t).addController(this),this.options=(0,s.IA)({form:t=>{const e=t.form;if(e){const o=t.getRootNode().querySelector(`#${e}`);if(o)return o}return t.closest("form")},name:t=>t.name,value:t=>t.value,defaultValue:t=>t.defaultValue,disabled:t=>{var e;return null!=(e=t.disabled)&&e},reportValidity:t=>"function"!=typeof t.reportValidity||t.reportValidity(),checkValidity:t=>"function"!=typeof t.checkValidity||t.checkValidity(),setValue:(t,e)=>t.value=e,assumeInteractionOn:["sl-input"]},e)}hostConnected(){const t=this.options.form(this.host);t&&this.attachForm(t),n.set(this.host,[]),this.options.assumeInteractionOn.forEach((t=>{this.host.addEventListener(t,this.handleInteraction)}))}hostDisconnected(){this.detachForm(),n.delete(this.host),this.options.assumeInteractionOn.forEach((t=>{this.host.removeEventListener(t,this.handleInteraction)}))}hostUpdated(){const t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(t){t?(this.form=t,i.has(this.form)?i.get(this.form).add(this.host):i.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),r.has(this.form)||(r.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),l.has(this.form)||(l.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const t=i.get(this.form);t&&(t.delete(this.host),t.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),r.has(this.form)&&(this.form.reportValidity=r.get(this.form),r.delete(this.form)),l.has(this.form)&&(this.form.checkValidity=l.get(this.form),l.delete(this.form)),this.form=void 0))}setUserInteracted(t,e){e?a.add(t):a.delete(t),t.requestUpdate()}doAction(t,e){if(this.form){const o=document.createElement("button");o.type=t,o.style.position="absolute",o.style.width="0",o.style.height="0",o.style.clipPath="inset(50%)",o.style.overflow="hidden",o.style.whiteSpace="nowrap",e&&(o.name=e.name,o.value=e.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach((t=>{e.hasAttribute(t)&&o.setAttribute(t,e.getAttribute(t))}))),this.form.append(o),o.click(),o.remove()}}getForm(){var t;return null!=(t=this.form)?t:null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){const e=this.host,o=Boolean(a.has(e)),s=Boolean(e.required);e.toggleAttribute("data-required",s),e.toggleAttribute("data-optional",!s),e.toggleAttribute("data-invalid",!t),e.toggleAttribute("data-valid",t),e.toggleAttribute("data-user-invalid",!t&&o),e.toggleAttribute("data-user-valid",t&&o)}updateValidity(){const t=this.host;this.setValidity(t.validity.valid)}emitInvalidEvent(t){const e=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||e.preventDefault(),this.host.dispatchEvent(e)||null==t||t.preventDefault()}},d=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),u=Object.freeze((0,s.ko)((0,s.IA)({},d),{valid:!1,valueMissing:!0})),c=Object.freeze((0,s.ko)((0,s.IA)({},d),{valid:!1,customError:!0}))},4101:(t,e,o)=>{o.d(e,{X:()=>s,r:()=>i});var s=class{constructor(t,...e){this.slotNames=[],this.handleSlotChange=t=>{const e=t.target;(this.slotNames.includes("[default]")&&!e.name||e.name&&this.slotNames.includes(e.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=e}hasDefaultSlot(){return[...this.host.childNodes].some((t=>{if(t.nodeType===t.TEXT_NODE&&""!==t.textContent.trim())return!0;if(t.nodeType===t.ELEMENT_NODE){const e=t;if("sl-visually-hidden"===e.tagName.toLowerCase())return!1;if(!e.hasAttribute("slot"))return!0}return!1}))}hasNamedSlot(t){return null!==this.host.querySelector(`:scope > [slot="${t}"]`)}test(t){return"[default]"===t?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};function i(t){if(!t)return"";const e=t.assignedNodes({flatten:!0});let o="";return[...e].forEach((t=>{t.nodeType===Node.TEXT_NODE&&(o+=t.textContent)})),o}},1696:(t,e,o)=>{o.d(e,{I:()=>s});var s=o(5024).AH`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`},7324:(t,e,o)=>{o.d(e,{$:()=>s});var s=o(5024).AH`
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
`},7081:(t,e,o)=>{var s=o(5024),i=s.AH`
  :host {
    display: block;
  }

  .form-control {
    position: relative;
    border: none;
    padding: 0;
    margin: 0;
  }

  .form-control__label {
    padding: 0;
  }

  .radio-group--required .radio-group__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`,r=o(1696),l=o(8251),a=o(3144),n=o(5752),h=o(4101),d=o(7324),u=o(8004),c=o(1320),m=o(3788),p=o(8146),f=class extends u.f{constructor(){super(...arguments),this.formControlController=new l.Ud(this),this.hasSlotController=new h.X(this,"help-text","label"),this.customValidityMessage="",this.hasButtonGroup=!1,this.errorMessage="",this.defaultValue="",this.label="",this.helpText="",this.name="option",this.value="",this.size="medium",this.form="",this.required=!1}get validity(){const t=this.required&&!this.value;return""!==this.customValidityMessage?l.pL:t?l.zF:l.G6}get validationMessage(){const t=this.required&&!this.value;return""!==this.customValidityMessage?this.customValidityMessage:t?this.validationInput.validationMessage:""}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.formControlController.updateValidity()}getAllRadios(){return[...this.querySelectorAll("sl-radio, sl-radio-button")]}handleRadioClick(t){const e=t.target.closest("sl-radio, sl-radio-button"),o=this.getAllRadios(),s=this.value;e&&!e.disabled&&(this.value=e.value,o.forEach((t=>t.checked=t===e)),this.value!==s&&(this.emit("sl-change"),this.emit("sl-input")))}handleKeyDown(t){var e;if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(t.key))return;const o=this.getAllRadios().filter((t=>!t.disabled)),s=null!=(e=o.find((t=>t.checked)))?e:o[0],i=" "===t.key?0:["ArrowUp","ArrowLeft"].includes(t.key)?-1:1,r=this.value;let l=o.indexOf(s)+i;l<0&&(l=o.length-1),l>o.length-1&&(l=0),this.getAllRadios().forEach((t=>{t.checked=!1,this.hasButtonGroup||(t.tabIndex=-1)})),this.value=o[l].value,o[l].checked=!0,this.hasButtonGroup?o[l].shadowRoot.querySelector("button").focus():(o[l].tabIndex=0,o[l].focus()),this.value!==r&&(this.emit("sl-change"),this.emit("sl-input")),t.preventDefault()}handleLabelClick(){const t=this.getAllRadios(),e=t.find((t=>t.checked))||t[0];e&&e.focus()}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}async syncRadioElements(){var t,e;const o=this.getAllRadios();if(await Promise.all(o.map((async t=>{await t.updateComplete,t.checked=t.value===this.value,t.size=this.size}))),this.hasButtonGroup=o.some((t=>"sl-radio-button"===t.tagName.toLowerCase())),o.length>0&&!o.some((t=>t.checked)))if(this.hasButtonGroup){const e=null==(t=o[0].shadowRoot)?void 0:t.querySelector("button");e&&(e.tabIndex=0)}else o[0].tabIndex=0;if(this.hasButtonGroup){const t=null==(e=this.shadowRoot)?void 0:e.querySelector("sl-button-group");t&&(t.disableRole=!0)}}syncRadios(){customElements.get("sl-radio")&&customElements.get("sl-radio-button")?this.syncRadioElements():(customElements.get("sl-radio")?this.syncRadioElements():customElements.whenDefined("sl-radio").then((()=>this.syncRadios())),customElements.get("sl-radio-button")?this.syncRadioElements():customElements.whenDefined("sl-radio-button").then((()=>this.syncRadios())))}updateCheckedRadio(){this.getAllRadios().forEach((t=>t.checked=t.value===this.value)),this.formControlController.setValidity(this.validity.valid)}handleSizeChange(){this.syncRadios()}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}checkValidity(){const t=this.required&&!this.value,e=""!==this.customValidityMessage;return!t&&!e||(this.formControlController.emitInvalidEvent(),!1)}getForm(){return this.formControlController.getForm()}reportValidity(){const t=this.validity.valid;return this.errorMessage=this.customValidityMessage||t?"":this.validationInput.validationMessage,this.formControlController.setValidity(t),this.validationInput.hidden=!0,clearTimeout(this.validationTimeout),t||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.validationTimeout=setTimeout((()=>this.validationInput.hidden=!0),1e4)),t}setCustomValidity(t=""){this.customValidityMessage=t,this.errorMessage=t,this.validationInput.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),o=!!this.label||!!t,i=!!this.helpText||!!e,r=s.qy`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;return s.qy`
      <fieldset
        part="form-control"
        class=${(0,m.H)({"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--radio-group":!0,"form-control--has-label":o,"form-control--has-help-text":i})}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="help-text"
        aria-errormessage="error-message"
      >
        <label
          part="form-control-label"
          id="label"
          class="form-control__label"
          aria-hidden=${o?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div class="visually-hidden">
            <div id="error-message" aria-live="assertive">${this.errorMessage}</div>
            <label class="radio-group__validation">
              <input
                type="text"
                class="radio-group__validation-input"
                ?required=${this.required}
                tabindex="-1"
                hidden
                @invalid=${this.handleInvalid}
              />
            </label>
          </div>

          ${this.hasButtonGroup?s.qy`
                <sl-button-group part="button-group" exportparts="base:button-group__base" role="presentation">
                  ${r}
                </sl-button-group>
              `:r}
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </fieldset>
    `}};f.styles=[d.$,r.I,i],f.dependencies={"sl-button-group":a.N},(0,c.Cc)([(0,p.P)("slot:not([name])")],f.prototype,"defaultSlot",2),(0,c.Cc)([(0,p.P)(".radio-group__validation-input")],f.prototype,"validationInput",2),(0,c.Cc)([(0,p.wk)()],f.prototype,"hasButtonGroup",2),(0,c.Cc)([(0,p.wk)()],f.prototype,"errorMessage",2),(0,c.Cc)([(0,p.wk)()],f.prototype,"defaultValue",2),(0,c.Cc)([(0,p.MZ)()],f.prototype,"label",2),(0,c.Cc)([(0,p.MZ)({attribute:"help-text"})],f.prototype,"helpText",2),(0,c.Cc)([(0,p.MZ)()],f.prototype,"name",2),(0,c.Cc)([(0,p.MZ)({reflect:!0})],f.prototype,"value",2),(0,c.Cc)([(0,p.MZ)({reflect:!0})],f.prototype,"size",2),(0,c.Cc)([(0,p.MZ)({reflect:!0})],f.prototype,"form",2),(0,c.Cc)([(0,p.MZ)({type:Boolean,reflect:!0})],f.prototype,"required",2),(0,c.Cc)([(0,n.w)("size",{waitUntilFirstUpdate:!0})],f.prototype,"handleSizeChange",1),(0,c.Cc)([(0,n.w)("value")],f.prototype,"handleValueChange",1),f.define("sl-radio-group"),o(5842)},5128:(t,e,o)=>{o.d(e,{OA:()=>s,WL:()=>r,u$:()=>i});const s={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},i=t=>function(){for(var e=arguments.length,o=new Array(e),s=0;s<e;s++)o[s]=arguments[s];return{_$litDirective$:t,values:o}};class r{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,o){this._$Ct=t,this._$AM=e,this._$Ci=o}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},3788:(t,e,o)=>{o.d(e,{H:()=>r});var s=o(4716),i=o(5128);const r=(0,i.u$)(class extends i.WL{constructor(t){var e;if(super(t),t.type!==i.OA.ATTRIBUTE||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,e){let[o]=e;if(void 0===this.it){this.it=new Set,void 0!==t.strings&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in o){var i;o[t]&&(null===(i=this.st)||void 0===i||!i.has(t))&&this.it.add(t)}return this.render(o)}const r=t.element.classList;for(const t of this.it)t in o||(r.remove(t),this.it.delete(t));for(const t in o){var l;const e=!!o[t];e===this.it.has(t)||(null===(l=this.st)||void 0===l?void 0:l.has(t))||(e?(r.add(t),this.it.add(t)):(r.remove(t),this.it.delete(t)))}return s.c0}})}}]);
//# sourceMappingURL=sl-radio-group.aa0dba5f.js.map
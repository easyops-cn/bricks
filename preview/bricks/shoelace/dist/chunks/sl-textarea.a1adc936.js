/*! For license information please see sl-textarea.a1adc936.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_next_bricks_shoelace=globalThis.webpackChunk_next_bricks_shoelace||[]).push([[9505],{9372:(t,e,r)=>{r.r(e),r(8575),r(7901)},7901:(t,e,r)=>{r(8258),r(4804);var a=r(7719);function o(t){document.documentElement.classList["dark"===t||"dark-v2"===t?"add":"remove"]("sl-theme-dark")}r(7422),(0,a.j)(r.p),o(document.documentElement.dataset.theme),window.addEventListener("theme.change",(t=>{o(t.detail)}))},9832:(t,e,r)=>{r.d(e,{A:()=>s});var a=r(6758),o=r.n(a),l=r(935),i=r.n(l)()(o());i.push([t.id,":root,\n.sl-theme-dark{--sl-z-index-drawer:1000;--sl-z-index-dialog:1000;--sl-z-index-dropdown:1050;--sl-z-index-toast:1060;--sl-z-index-tooltip:1070}.sl-toast-stack{width:100%;left:0;right:auto;overflow:initial;pointer-events:none}.sl-toast-stack > sl-alert{pointer-events:all}",""]);const s=i},7422:(t,e,r)=>{var a=r(2591),o=r.n(a),l=r(1740),i=r.n(l),s=r(8128),n=r.n(s),d=r(855),c=r.n(d),h=r(3051),u=r.n(h),p=r(3656),b=r.n(p),f=r(9832),m={};m.styleTagTransform=b(),m.setAttributes=c(),m.insert=n().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=u(),o()(f.A,m),f.A&&f.A.locals&&f.A.locals},8575:(t,e,r)=>{var a=r(5024),o=a.AH`
  :host {
    display: block;
  }

  .textarea {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
    cursor: text;
  }

  /* Standard textareas */
  .textarea--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .textarea--standard:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }
  .textarea--standard:hover:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-hover);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    color: var(--sl-input-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-focus);
  }

  .textarea--standard.textarea--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea--standard.textarea--disabled .textarea__control {
    color: var(--sl-input-color-disabled);
  }

  .textarea--standard.textarea--disabled .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled textareas */
  .textarea--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .textarea--filled:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .textarea--filled.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .textarea--filled.textarea--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: 1.4;
    color: var(--sl-input-color);
    border: none;
    background: none;
    box-shadow: none;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .textarea__control::-webkit-search-decoration,
  .textarea__control::-webkit-search-cancel-button,
  .textarea__control::-webkit-search-results-button,
  .textarea__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .textarea__control:focus {
    outline: none;
  }

  /*
   * Size modifiers
   */

  .textarea--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
  }

  .textarea--small .textarea__control {
    padding: 0.5em var(--sl-input-spacing-small);
  }

  .textarea--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .textarea--medium .textarea__control {
    padding: 0.5em var(--sl-input-spacing-medium);
  }

  .textarea--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
  }

  .textarea--large .textarea__control {
    padding: 0.5em var(--sl-input-spacing-large);
  }

  /*
   * Resize types
   */

  .textarea--resize-none .textarea__control {
    resize: none;
  }

  .textarea--resize-vertical .textarea__control {
    resize: vertical;
  }

  .textarea--resize-auto .textarea__control {
    height: auto;
    resize: none;
    overflow-y: hidden;
  }
`,l=r(3088),i=r(1696),s=r(8251),n=r(5752),d=r(4101),c=r(7324),h=r(8004),u=r(1320),p=r(3788),b=r(996),f=r(33),m=r(8146),x=class extends h.f{constructor(){super(...arguments),this.formControlController=new s.Ud(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new d.X(this,"help-text","label"),this.hasFocus=!1,this.title="",this.name="",this.value="",this.size="medium",this.filled=!1,this.label="",this.helpText="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.form="",this.required=!1,this.spellcheck=!0,this.defaultValue=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver((()=>this.setTextareaHeight())),this.updateComplete.then((()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)}))}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){super.disconnectedCallback(),this.input&&this.resizeObserver.unobserve(this.input)}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}setTextareaHeight(){"auto"===this.resize?(this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=void 0}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(t){return t?("number"==typeof t.top&&(this.input.scrollTop=t.top),void("number"==typeof t.left&&(this.input.scrollLeft=t.left))):{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(t,e,r="none"){this.input.setSelectionRange(t,e,r)}setRangeText(t,e,r,a="preserve"){const o=null!=e?e:this.input.selectionStart,l=null!=r?r:this.input.selectionEnd;this.input.setRangeText(t,o,l,a),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),r=!!this.label||!!t,o=!!this.helpText||!!e;return a.qy`
      <div
        part="form-control"
        class=${(0,p.H)({"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--has-label":r,"form-control--has-help-text":o})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${(0,p.H)({textarea:!0,"textarea--small":"small"===this.size,"textarea--medium":"medium"===this.size,"textarea--large":"large"===this.size,"textarea--standard":!this.filled,"textarea--filled":this.filled,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":"none"===this.resize,"textarea--resize-vertical":"vertical"===this.resize,"textarea--resize-auto":"auto"===this.resize})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${(0,b.J)(this.name)}
              .value=${(0,f.V)(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${(0,b.J)(this.placeholder)}
              rows=${(0,b.J)(this.rows)}
              minlength=${(0,b.J)(this.minlength)}
              maxlength=${(0,b.J)(this.maxlength)}
              autocapitalize=${(0,b.J)(this.autocapitalize)}
              autocorrect=${(0,b.J)(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${(0,b.J)(this.spellcheck)}
              enterkeyhint=${(0,b.J)(this.enterkeyhint)}
              inputmode=${(0,b.J)(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            ></textarea>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};x.styles=[c.$,i.I,o],(0,u.Cc)([(0,m.P)(".textarea__control")],x.prototype,"input",2),(0,u.Cc)([(0,m.wk)()],x.prototype,"hasFocus",2),(0,u.Cc)([(0,m.MZ)()],x.prototype,"title",2),(0,u.Cc)([(0,m.MZ)()],x.prototype,"name",2),(0,u.Cc)([(0,m.MZ)()],x.prototype,"value",2),(0,u.Cc)([(0,m.MZ)({reflect:!0})],x.prototype,"size",2),(0,u.Cc)([(0,m.MZ)({type:Boolean,reflect:!0})],x.prototype,"filled",2),(0,u.Cc)([(0,m.MZ)()],x.prototype,"label",2),(0,u.Cc)([(0,m.MZ)({attribute:"help-text"})],x.prototype,"helpText",2),(0,u.Cc)([(0,m.MZ)()],x.prototype,"placeholder",2),(0,u.Cc)([(0,m.MZ)({type:Number})],x.prototype,"rows",2),(0,u.Cc)([(0,m.MZ)()],x.prototype,"resize",2),(0,u.Cc)([(0,m.MZ)({type:Boolean,reflect:!0})],x.prototype,"disabled",2),(0,u.Cc)([(0,m.MZ)({type:Boolean,reflect:!0})],x.prototype,"readonly",2),(0,u.Cc)([(0,m.MZ)({reflect:!0})],x.prototype,"form",2),(0,u.Cc)([(0,m.MZ)({type:Boolean,reflect:!0})],x.prototype,"required",2),(0,u.Cc)([(0,m.MZ)({type:Number})],x.prototype,"minlength",2),(0,u.Cc)([(0,m.MZ)({type:Number})],x.prototype,"maxlength",2),(0,u.Cc)([(0,m.MZ)()],x.prototype,"autocapitalize",2),(0,u.Cc)([(0,m.MZ)()],x.prototype,"autocorrect",2),(0,u.Cc)([(0,m.MZ)()],x.prototype,"autocomplete",2),(0,u.Cc)([(0,m.MZ)({type:Boolean})],x.prototype,"autofocus",2),(0,u.Cc)([(0,m.MZ)()],x.prototype,"enterkeyhint",2),(0,u.Cc)([(0,m.MZ)({type:Boolean,converter:{fromAttribute:t=>!(!t||"false"===t),toAttribute:t=>t?"true":"false"}})],x.prototype,"spellcheck",2),(0,u.Cc)([(0,m.MZ)()],x.prototype,"inputmode",2),(0,u.Cc)([(0,l.J)()],x.prototype,"defaultValue",2),(0,u.Cc)([(0,n.w)("disabled",{waitUntilFirstUpdate:!0})],x.prototype,"handleDisabledChange",1),(0,u.Cc)([(0,n.w)("rows",{waitUntilFirstUpdate:!0})],x.prototype,"handleRowsChange",1),(0,u.Cc)([(0,n.w)("value",{waitUntilFirstUpdate:!0})],x.prototype,"handleValueChange",1),x.define("sl-textarea")},33:(t,e,r)=>{r.d(e,{V:()=>i});var a=r(4716),o=r(5128),l=r(3348);const i=(0,o.u$)(class extends o.WL{constructor(t){if(super(t),t.type!==o.OA.PROPERTY&&t.type!==o.OA.ATTRIBUTE&&t.type!==o.OA.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!(0,l.Rt)(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,e){let[r]=e;if(r===a.c0||r===a.s6)return r;const i=t.element,s=t.name;if(t.type===o.OA.PROPERTY){if(r===i[s])return a.c0}else if(t.type===o.OA.BOOLEAN_ATTRIBUTE){if(!!r===i.hasAttribute(s))return a.c0}else if(t.type===o.OA.ATTRIBUTE&&i.getAttribute(s)===r+"")return a.c0;return(0,l.mY)(t),r}})}}]);
//# sourceMappingURL=sl-textarea.a1adc936.js.map
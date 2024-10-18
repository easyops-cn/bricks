/*! For license information please see sl-switch.41385fad.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_next_bricks_shoelace=globalThis.webpackChunk_next_bricks_shoelace||[]).push([[2963],{2586:(t,e,i)=>{i.r(e),i(6796),i(7901)},7901:(t,e,i)=>{i(8258),i(4804);var r=i(7719);function o(t){document.documentElement.classList["dark"===t||"dark-v2"===t?"add":"remove"]("sl-theme-dark")}i(7422),(0,r.j)(i.p),o(document.documentElement.dataset.theme),window.addEventListener("theme.change",(t=>{o(t.detail)}))},9832:(t,e,i)=>{i.d(e,{A:()=>c});var r=i(6758),o=i.n(r),s=i(935),l=i.n(s)()(o());l.push([t.id,":root,\n.sl-theme-dark{--sl-z-index-drawer:1000;--sl-z-index-dialog:1000;--sl-z-index-dropdown:1050;--sl-z-index-toast:1060;--sl-z-index-tooltip:1070}.sl-toast-stack{width:100%;left:0;right:auto;overflow:initial;pointer-events:none}.sl-toast-stack > sl-alert{pointer-events:all}",""]);const c=l},7422:(t,e,i)=>{var r=i(2591),o=i.n(r),s=i(1740),l=i.n(s),c=i(8128),a=i.n(c),n=i(855),h=i.n(n),d=i(3051),u=i.n(d),p=i(3656),v=i.n(p),m=i(9832),w={};w.styleTagTransform=v(),w.setAttributes=h(),w.insert=a().bind(null,"head"),w.domAPI=l(),w.insertStyleElement=u(),o()(m.A,w),m.A&&m.A.locals&&m.A.locals},6796:(t,e,i)=>{var r=i(5024),o=r.AH`
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
    color: var(--sl-input-required-content-color);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  @media (forced-colors: active) {
    .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb,
    .switch--checked .switch__control .switch__thumb {
      background-color: ButtonText;
    }
  }
`,s=i(3088),l=i(1696),c=i(8251),a=i(5752),n=i(4101),h=i(7324),d=i(8004),u=i(1320),p=i(3788),v=i(996),m=i(33),w=i(8146),b=class extends d.f{constructor(){super(...arguments),this.formControlController=new c.Ud(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,e)=>t.checked=e}),this.hasSlotController=new n.X(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleClick(){this.checked=!this.checked,this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleKeyDown(t){"ArrowLeft"===t.key&&(t.preventDefault(),this.checked=!1,this.emit("sl-change"),this.emit("sl-input")),"ArrowRight"===t.key&&(t.preventDefault(),this.checked=!0,this.emit("sl-change"),this.emit("sl-input"))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("help-text"),e=!!this.helpText||!!t;return r.qy`
      <div
        class=${(0,p.H)({"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--has-help-text":e})}
      >
        <label
          part="base"
          class=${(0,p.H)({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":"small"===this.size,"switch--medium":"medium"===this.size,"switch--large":"large"===this.size})}
        >
          <input
            class="switch__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${(0,v.J)(this.value)}
            .checked=${(0,m.V)(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            role="switch"
            aria-checked=${this.checked?"true":"false"}
            aria-describedby="help-text"
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

        <div
          aria-hidden=${e?"false":"true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};b.styles=[h.$,l.I,o],(0,u.Cc)([(0,w.P)('input[type="checkbox"]')],b.prototype,"input",2),(0,u.Cc)([(0,w.wk)()],b.prototype,"hasFocus",2),(0,u.Cc)([(0,w.MZ)()],b.prototype,"title",2),(0,u.Cc)([(0,w.MZ)()],b.prototype,"name",2),(0,u.Cc)([(0,w.MZ)()],b.prototype,"value",2),(0,u.Cc)([(0,w.MZ)({reflect:!0})],b.prototype,"size",2),(0,u.Cc)([(0,w.MZ)({type:Boolean,reflect:!0})],b.prototype,"disabled",2),(0,u.Cc)([(0,w.MZ)({type:Boolean,reflect:!0})],b.prototype,"checked",2),(0,u.Cc)([(0,s.J)("checked")],b.prototype,"defaultChecked",2),(0,u.Cc)([(0,w.MZ)({reflect:!0})],b.prototype,"form",2),(0,u.Cc)([(0,w.MZ)({type:Boolean,reflect:!0})],b.prototype,"required",2),(0,u.Cc)([(0,w.MZ)({attribute:"help-text"})],b.prototype,"helpText",2),(0,u.Cc)([(0,a.w)("checked",{waitUntilFirstUpdate:!0})],b.prototype,"handleCheckedChange",1),(0,u.Cc)([(0,a.w)("disabled",{waitUntilFirstUpdate:!0})],b.prototype,"handleDisabledChange",1),b.define("sl-switch")},33:(t,e,i)=>{i.d(e,{V:()=>l});var r=i(4716),o=i(5128),s=i(3348);const l=(0,o.u$)(class extends o.WL{constructor(t){if(super(t),t.type!==o.OA.PROPERTY&&t.type!==o.OA.ATTRIBUTE&&t.type!==o.OA.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!(0,s.Rt)(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,e){let[i]=e;if(i===r.c0||i===r.s6)return i;const l=t.element,c=t.name;if(t.type===o.OA.PROPERTY){if(i===l[c])return r.c0}else if(t.type===o.OA.BOOLEAN_ATTRIBUTE){if(!!i===l.hasAttribute(c))return r.c0}else if(t.type===o.OA.ATTRIBUTE&&l.getAttribute(c)===i+"")return r.c0;return(0,s.mY)(t),i}})}}]);
//# sourceMappingURL=sl-switch.41385fad.js.map
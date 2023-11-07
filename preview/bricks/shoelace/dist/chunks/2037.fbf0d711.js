/*! For license information please see 2037.fbf0d711.js.LICENSE.txt */
"use strict";(self.webpackChunk_next_bricks_shoelace=self.webpackChunk_next_bricks_shoelace||[]).push([[2037],{3358:(e,t,i)=>{i.d(t,{E:()=>k});var n=i(2554),s=i(3021),o=i(3222),l=i(391),a=i(6895),r=i(3385),d=i(6877),c=i(4703),h=i(1465),u=i(7979),p=i(9832),m=i(8427),b=i(8249),f=i(9900);function g(e,t,i){return e?t():null==i?void 0:i()}var x=class extends h.P{constructor(){super(...arguments),this.localize=new r.V(this),this.indeterminate=!1,this.isLeaf=!1,this.loading=!1,this.selectable=!1,this.expanded=!1,this.selected=!1,this.disabled=!1,this.lazy=!1}static isTreeItem(e){return e instanceof Element&&"treeitem"===e.getAttribute("role")}connectedCallback(){super.connectedCallback(),this.setAttribute("role","treeitem"),this.setAttribute("tabindex","-1"),this.isNestedItem()&&(this.slot="children")}firstUpdated(){this.childrenContainer.hidden=!this.expanded,this.childrenContainer.style.height=this.expanded?"auto":"0",this.isLeaf=!this.lazy&&0===this.getChildrenItems().length,this.handleExpandedChange()}async animateCollapse(){this.emit("sl-collapse"),await(0,a.U_)(this.childrenContainer);const{keyframes:e,options:t}=(0,l.O8)(this,"tree-item.collapse",{dir:this.localize.dir()});await(0,a.nv)(this.childrenContainer,(0,a.GH)(e,this.childrenContainer.scrollHeight),t),this.childrenContainer.hidden=!0,this.emit("sl-after-collapse")}isNestedItem(){const e=this.parentElement;return!!e&&x.isTreeItem(e)}handleChildrenSlotChange(){this.loading=!1,this.isLeaf=!this.lazy&&0===this.getChildrenItems().length}willUpdate(e){e.has("selected")&&!e.has("indeterminate")&&(this.indeterminate=!1)}async animateExpand(){this.emit("sl-expand"),await(0,a.U_)(this.childrenContainer),this.childrenContainer.hidden=!1;const{keyframes:e,options:t}=(0,l.O8)(this,"tree-item.expand",{dir:this.localize.dir()});await(0,a.nv)(this.childrenContainer,(0,a.GH)(e,this.childrenContainer.scrollHeight),t),this.childrenContainer.style.height="auto",this.emit("sl-after-expand")}handleLoadingChange(){this.setAttribute("aria-busy",this.loading?"true":"false"),this.loading||this.animateExpand()}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleExpandedChange(){this.isLeaf?this.removeAttribute("aria-expanded"):this.setAttribute("aria-expanded",this.expanded?"true":"false")}handleExpandAnimation(){this.expanded?this.lazy?(this.loading=!0,this.emit("sl-lazy-load")):this.animateExpand():this.animateCollapse()}handleLazyChange(){this.emit("sl-lazy-change")}getChildrenItems({includeDisabled:e=!0}={}){return this.childrenSlot?[...this.childrenSlot.assignedElements({flatten:!0})].filter((t=>x.isTreeItem(t)&&(e||!t.disabled))):[]}render(){const e="rtl"===this.localize.dir(),t=!this.loading&&(!this.isLeaf||this.lazy);return m.dy`
      <div
        part="base"
        class="${(0,p.$)({"tree-item":!0,"tree-item--expanded":this.expanded,"tree-item--selected":this.selected,"tree-item--disabled":this.disabled,"tree-item--leaf":this.isLeaf,"tree-item--has-expand-button":t,"tree-item--rtl":"rtl"===this.localize.dir()})}"
      >
        <div
          class="tree-item__item"
          part="
            item
            ${this.disabled?"item--disabled":""}
            ${this.expanded?"item--expanded":""}
            ${this.indeterminate?"item--indeterminate":""}
            ${this.selected?"item--selected":""}
          "
        >
          <div class="tree-item__indentation" part="indentation"></div>

          <div
            part="expand-button"
            class=${(0,p.$)({"tree-item__expand-button":!0,"tree-item__expand-button--visible":t})}
            aria-hidden="true"
          >
            ${g(this.loading,(()=>m.dy` <sl-spinner></sl-spinner> `))}
            <slot class="tree-item__expand-icon-slot" name="expand-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot class="tree-item__expand-icon-slot" name="collapse-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </div>

          ${g(this.selectable,(()=>m.dy`
                <sl-checkbox
                  part="checkbox"
                  exportparts="
                    base:checkbox__base,
                    control:checkbox__control,
                    control--checked:checkbox__control--checked,
                    control--indeterminate:checkbox__control--indeterminate,
                    checked-icon:checkbox__checked-icon,
                    indeterminate-icon:checkbox__indeterminate-icon,
                    label:checkbox__label
                  "
                  class="tree-item__checkbox"
                  ?disabled="${this.disabled}"
                  ?checked="${(0,b.a)(this.selected)}"
                  ?indeterminate="${this.indeterminate}"
                  tabindex="-1"
                ></sl-checkbox>
              `))}

          <slot class="tree-item__label" part="label"></slot>
        </div>

        <div class="tree-item__children" part="children" role="group">
          <slot name="children" @slotchange="${this.handleChildrenSlotChange}"></slot>
        </div>
      </div>
    `}},k=x;k.styles=n.O,k.dependencies={"sl-checkbox":s.s,"sl-icon":d.V,"sl-spinner":o.A},(0,u.u2)([(0,f.SB)()],k.prototype,"indeterminate",2),(0,u.u2)([(0,f.SB)()],k.prototype,"isLeaf",2),(0,u.u2)([(0,f.SB)()],k.prototype,"loading",2),(0,u.u2)([(0,f.SB)()],k.prototype,"selectable",2),(0,u.u2)([(0,f.Cb)({type:Boolean,reflect:!0})],k.prototype,"expanded",2),(0,u.u2)([(0,f.Cb)({type:Boolean,reflect:!0})],k.prototype,"selected",2),(0,u.u2)([(0,f.Cb)({type:Boolean,reflect:!0})],k.prototype,"disabled",2),(0,u.u2)([(0,f.Cb)({type:Boolean,reflect:!0})],k.prototype,"lazy",2),(0,u.u2)([(0,f.IO)("slot:not([name])")],k.prototype,"defaultSlot",2),(0,u.u2)([(0,f.IO)("slot[name=children]")],k.prototype,"childrenSlot",2),(0,u.u2)([(0,f.IO)(".tree-item__item")],k.prototype,"itemElement",2),(0,u.u2)([(0,f.IO)(".tree-item__children")],k.prototype,"childrenContainer",2),(0,u.u2)([(0,f.IO)(".tree-item__expand-button slot")],k.prototype,"expandButtonSlot",2),(0,u.u2)([(0,c.Y)("loading",{waitUntilFirstUpdate:!0})],k.prototype,"handleLoadingChange",1),(0,u.u2)([(0,c.Y)("disabled")],k.prototype,"handleDisabledChange",1),(0,u.u2)([(0,c.Y)("selected")],k.prototype,"handleSelectedChange",1),(0,u.u2)([(0,c.Y)("expanded",{waitUntilFirstUpdate:!0})],k.prototype,"handleExpandedChange",1),(0,u.u2)([(0,c.Y)("expanded",{waitUntilFirstUpdate:!0})],k.prototype,"handleExpandAnimation",1),(0,u.u2)([(0,c.Y)("lazy",{waitUntilFirstUpdate:!0})],k.prototype,"handleLazyChange",1),(0,l.jx)("tree-item.expand",{keyframes:[{height:"0",opacity:"0",overflow:"hidden"},{height:"auto",opacity:"1",overflow:"hidden"}],options:{duration:250,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}}),(0,l.jx)("tree-item.collapse",{keyframes:[{height:"auto",opacity:"1",overflow:"hidden"},{height:"0",opacity:"0",overflow:"hidden"}],options:{duration:200,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}})},3021:(e,t,i)=>{i.d(t,{s:()=>b});var n=i(6315),s=i(3514),o=i(203),l=i(6877),a=i(4703),r=i(1465),d=i(7979),c=i(9832),h=i(8427),u=i(2747),p=i(8249),m=i(9900),b=class extends r.P{constructor(){super(...arguments),this.formControlController=new o.pY(this,{value:e=>e.checked?e.value||"on":void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form="",this.required=!1}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("sl-change")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){return h.dy`
      <label
        part="base"
        class=${(0,c.$)({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":"small"===this.size,"checkbox--medium":"medium"===this.size,"checkbox--large":"large"===this.size})}
      >
        <input
          class="checkbox__input"
          type="checkbox"
          title=${this.title}
          name=${this.name}
          value=${(0,u.o)(this.value)}
          .indeterminate=${(0,p.a)(this.indeterminate)}
          .checked=${(0,p.a)(this.checked)}
          .disabled=${this.disabled}
          .required=${this.required}
          aria-checked=${this.checked?"true":"false"}
          @click=${this.handleClick}
          @input=${this.handleInput}
          @invalid=${this.handleInvalid}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
        />

        <span
          part="control${this.checked?" control--checked":""}${this.indeterminate?" control--indeterminate":""}"
          class="checkbox__control"
        >
          ${this.checked?h.dy`
                <sl-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></sl-icon>
              `:""}
          ${!this.checked&&this.indeterminate?h.dy`
                <sl-icon
                  part="indeterminate-icon"
                  class="checkbox__indeterminate-icon"
                  library="system"
                  name="indeterminate"
                ></sl-icon>
              `:""}
        </span>

        <div part="label" class="checkbox__label">
          <slot></slot>
        </div>
      </label>
    `}};b.styles=n.r,b.dependencies={"sl-icon":l.V},(0,d.u2)([(0,m.IO)('input[type="checkbox"]')],b.prototype,"input",2),(0,d.u2)([(0,m.SB)()],b.prototype,"hasFocus",2),(0,d.u2)([(0,m.Cb)()],b.prototype,"title",2),(0,d.u2)([(0,m.Cb)()],b.prototype,"name",2),(0,d.u2)([(0,m.Cb)()],b.prototype,"value",2),(0,d.u2)([(0,m.Cb)({reflect:!0})],b.prototype,"size",2),(0,d.u2)([(0,m.Cb)({type:Boolean,reflect:!0})],b.prototype,"disabled",2),(0,d.u2)([(0,m.Cb)({type:Boolean,reflect:!0})],b.prototype,"checked",2),(0,d.u2)([(0,m.Cb)({type:Boolean,reflect:!0})],b.prototype,"indeterminate",2),(0,d.u2)([(0,s.L)("checked")],b.prototype,"defaultChecked",2),(0,d.u2)([(0,m.Cb)({reflect:!0})],b.prototype,"form",2),(0,d.u2)([(0,m.Cb)({type:Boolean,reflect:!0})],b.prototype,"required",2),(0,d.u2)([(0,a.Y)("disabled",{waitUntilFirstUpdate:!0})],b.prototype,"handleDisabledChange",1),(0,d.u2)([(0,a.Y)(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],b.prototype,"handleStateChange",1)},2554:(e,t,i)=>{i.d(t,{O:()=>s});var n=i(9710),s=i(8427).iv`
  ${n.N}

  :host {
    display: block;
    outline: 0;
    z-index: 0;
  }

  :host(:focus) {
    outline: none;
  }

  slot:not([name])::slotted(sl-icon) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .tree-item {
    position: relative;
    display: flex;
    align-items: stretch;
    flex-direction: column;
    color: var(--sl-color-neutral-700);
    cursor: pointer;
    user-select: none;
  }

  .tree-item__checkbox {
    pointer-events: none;
  }

  .tree-item__expand-button,
  .tree-item__checkbox,
  .tree-item__label {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-dense);
    letter-spacing: var(--sl-letter-spacing-normal);
  }

  .tree-item__checkbox::part(base) {
    display: flex;
    align-items: center;
  }

  .tree-item__indentation {
    display: block;
    width: 1em;
    flex-shrink: 0;
  }

  .tree-item__expand-button {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: content-box;
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-x-small);
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
    cursor: pointer;
  }

  .tree-item__expand-button {
    transition: var(--sl-transition-medium) rotate ease;
  }

  .tree-item--expanded .tree-item__expand-button {
    rotate: 90deg;
  }

  .tree-item--expanded.tree-item--rtl .tree-item__expand-button {
    rotate: -90deg;
  }

  .tree-item--expanded slot[name='expand-icon'],
  .tree-item:not(.tree-item--expanded) slot[name='collapse-icon'] {
    display: none;
  }

  .tree-item:not(.tree-item--has-expand-button) .tree-item__expand-icon-slot {
    display: none;
  }

  .tree-item__expand-button--visible {
    cursor: pointer;
  }

  .tree-item__item {
    display: flex;
    align-items: center;
    border-inline-start: solid 3px transparent;
  }

  .tree-item--disabled .tree-item__item {
    opacity: 0.5;
    outline: none;
    cursor: not-allowed;
  }

  :host(:focus-visible) .tree-item__item {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
    z-index: 2;
  }

  :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
    background-color: var(--sl-color-neutral-100);
    border-inline-start-color: var(--sl-color-primary-600);
  }

  :host(:not([aria-disabled='true'])) .tree-item__expand-button {
    color: var(--sl-color-neutral-600);
  }

  .tree-item__label {
    display: flex;
    align-items: center;
    transition: var(--sl-transition-fast) color;
  }

  .tree-item__children {
    display: block;
    font-size: calc(1em + var(--indent-size, var(--sl-spacing-medium)));
  }

  /* Indentation lines */
  .tree-item__children {
    position: relative;
  }

  .tree-item__children::before {
    content: '';
    position: absolute;
    top: var(--indent-guide-offset);
    bottom: var(--indent-guide-offset);
    left: calc(1em - (var(--indent-guide-width) / 2) - 1px);
    border-inline-end: var(--indent-guide-width) var(--indent-guide-style) var(--indent-guide-color);
    z-index: 1;
  }

  .tree-item--rtl .tree-item__children::before {
    left: auto;
    right: 1em;
  }

  @media (forced-colors: active) {
    :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
      outline: dashed 1px SelectedItem;
    }
  }
`},6315:(e,t,i)=>{i.d(t,{r:()=>s});var n=i(9710),s=i(8427).iv`
  ${n.N}

  :host {
    display: inline-block;
  }

  .checkbox {
    position: relative;
    display: inline-flex;
    align-items: flex-start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .checkbox--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .checkbox--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .checkbox--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .checkbox__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 2px;
    background-color: var(--sl-input-background-color);
    color: var(--sl-color-neutral-0);
    transition: var(--sl-transition-fast) border-color, var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color, var(--sl-transition-fast) box-shadow;
  }

  .checkbox__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  .checkbox__checked-icon,
  .checkbox__indeterminate-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  /* Hover */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Focus */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked/indeterminate */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked/indeterminate + hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked/indeterminate + focus */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .checkbox--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .checkbox__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
  }

  :host([required]) .checkbox__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }
`},2427:(e,t,i)=>{i(3358).E.define("sl-tree-item"),i(2554),i(3021),i(6315),i(3514),i(3222),i(6396),i(203),i(391),i(6895),i(3385),i(8513),i(6877),i(5249),i(836),i(9699),i(1793),i(4703),i(1465),i(9710),i(7979)},632:(e,t,i)=>{var n=i(9710),s=i(8427),o=s.iv`
  ${n.N}

  :host {
    /*
     * These are actually used by tree item, but we define them here so they can more easily be set and all tree items
     * stay consistent.
     */
    --indent-guide-color: var(--sl-color-neutral-200);
    --indent-guide-offset: 0;
    --indent-guide-style: solid;
    --indent-guide-width: 0;
    --indent-size: var(--sl-spacing-large);

    display: block;
    isolation: isolate;

    /*
     * Tree item indentation uses the "em" unit to increment its width on each level, so setting the font size to zero
     * here removes the indentation for all the nodes on the first level.
     */
    font-size: 0;
  }
`,l=i(3358),a=i(1807),r=i(3385),d=i(4703),c=i(1465),h=i(7979),u=i(9900);function p(e,t=!1){function i(e){const t=e.getChildrenItems({includeDisabled:!1});if(t.length){const i=t.every((e=>e.selected)),n=t.every((e=>!e.selected&&!e.indeterminate));e.selected=i,e.indeterminate=!i&&!n}}!function e(n){for(const i of n.getChildrenItems())i.selected=t?n.selected||i.selected:!i.disabled&&n.selected,e(i);t&&i(n)}(e),function e(t){const n=t.parentElement;l.E.isTreeItem(n)&&(i(n),e(n))}(e)}var m=class extends c.P{constructor(){super(),this.selection="single",this.localize=new r.V(this),this.clickTarget=null,this.initTreeItem=e=>{e.selectable="multiple"===this.selection,["expand","collapse"].filter((e=>!!this.querySelector(`[slot="${e}-icon"]`))).forEach((t=>{const i=e.querySelector(`[slot="${t}-icon"]`);null===i?e.append(this.getExpandButtonIcon(t)):i.hasAttribute("data-default")&&i.replaceWith(this.getExpandButtonIcon(t))}))},this.handleTreeChanged=e=>{for(const t of e){const e=[...t.addedNodes].filter(l.E.isTreeItem),i=[...t.removedNodes].filter(l.E.isTreeItem);e.forEach(this.initTreeItem),this.lastFocusedItem&&i.includes(this.lastFocusedItem)&&(this.lastFocusedItem=null)}},this.handleFocusOut=e=>{const t=e.relatedTarget;t&&this.contains(t)||(this.tabIndex=0)},this.handleFocusIn=e=>{const t=e.target;e.target===this&&this.focusItem(this.lastFocusedItem||this.getAllTreeItems()[0]),l.E.isTreeItem(t)&&!t.disabled&&(this.lastFocusedItem&&(this.lastFocusedItem.tabIndex=-1),this.lastFocusedItem=t,this.tabIndex=-1,t.tabIndex=0)},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut),this.addEventListener("sl-lazy-change",this.handleSlotChange)}async connectedCallback(){super.connectedCallback(),this.setAttribute("role","tree"),this.setAttribute("tabindex","0"),await this.updateComplete,this.mutationObserver=new MutationObserver(this.handleTreeChanged),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver.disconnect()}getExpandButtonIcon(e){const t=("expand"===e?this.expandedIconSlot:this.collapsedIconSlot).assignedElements({flatten:!0})[0];if(t){const i=t.cloneNode(!0);return[i,...i.querySelectorAll("[id]")].forEach((e=>e.removeAttribute("id"))),i.setAttribute("data-default",""),i.slot=`${e}-icon`,i}return null}selectItem(e){const t=[...this.selectedItems];if("multiple"===this.selection)e.selected=!e.selected,e.lazy&&(e.expanded=!0),p(e);else if("single"===this.selection||e.isLeaf){const t=this.getAllTreeItems();for(const i of t)i.selected=i===e}else"leaf"===this.selection&&(e.expanded=!e.expanded);const i=this.selectedItems;(t.length!==i.length||i.some((e=>!t.includes(e))))&&Promise.all(i.map((e=>e.updateComplete))).then((()=>{this.emit("sl-selection-change",{detail:{selection:i}})}))}getAllTreeItems(){return[...this.querySelectorAll("sl-tree-item")]}focusItem(e){null==e||e.focus()}handleKeyDown(e){if(!["ArrowDown","ArrowUp","ArrowRight","ArrowLeft","Home","End","Enter"," "].includes(e.key))return;if(e.composedPath().some((e=>{var t;return["input","textarea"].includes(null==(t=null==e?void 0:e.tagName)?void 0:t.toLowerCase())})))return;const t=this.getFocusableItems(),i="ltr"===this.localize.dir(),n="rtl"===this.localize.dir();if(t.length>0){e.preventDefault();const s=t.findIndex((e=>e.matches(":focus"))),o=t[s],l=e=>{const i=t[(0,a.u)(e,0,t.length-1)];this.focusItem(i)},r=e=>{o.expanded=e};"ArrowDown"===e.key?l(s+1):"ArrowUp"===e.key?l(s-1):i&&"ArrowRight"===e.key||n&&"ArrowLeft"===e.key?!o||o.disabled||o.expanded||o.isLeaf&&!o.lazy?l(s+1):r(!0):i&&"ArrowLeft"===e.key||n&&"ArrowRight"===e.key?!o||o.disabled||o.isLeaf||!o.expanded?l(s-1):r(!1):"Home"===e.key?l(0):"End"===e.key?l(t.length-1):"Enter"!==e.key&&" "!==e.key||o.disabled||this.selectItem(o)}}handleClick(e){const t=e.target,i=t.closest("sl-tree-item"),n=e.composedPath().some((e=>{var t;return null==(t=null==e?void 0:e.classList)?void 0:t.contains("tree-item__expand-button")}));i&&!i.disabled&&t===this.clickTarget&&(n?i.expanded=!i.expanded:this.selectItem(i))}handleMouseDown(e){this.clickTarget=e.target}handleSlotChange(){this.getAllTreeItems().forEach(this.initTreeItem)}async handleSelectionChange(){const e="multiple"===this.selection,t=this.getAllTreeItems();this.setAttribute("aria-multiselectable",e?"true":"false");for(const i of t)i.selectable=e;e&&(await this.updateComplete,[...this.querySelectorAll(":scope > sl-tree-item")].forEach((e=>p(e,!0))))}get selectedItems(){return this.getAllTreeItems().filter((e=>e.selected))}getFocusableItems(){const e=this.getAllTreeItems(),t=new Set;return e.filter((e=>{var i;if(e.disabled)return!1;const n=null==(i=e.parentElement)?void 0:i.closest("[role=treeitem]");return n&&(!n.expanded||n.loading||t.has(n))&&t.add(e),!t.has(e)}))}render(){return s.dy`
      <div
        part="base"
        class="tree"
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
        <span hidden aria-hidden="true"><slot name="expand-icon"></slot></span>
        <span hidden aria-hidden="true"><slot name="collapse-icon"></slot></span>
      </div>
    `}};m.styles=o,(0,h.u2)([(0,u.IO)("slot:not([name])")],m.prototype,"defaultSlot",2),(0,h.u2)([(0,u.IO)("slot[name=expand-icon]")],m.prototype,"expandedIconSlot",2),(0,h.u2)([(0,u.IO)("slot[name=collapse-icon]")],m.prototype,"collapsedIconSlot",2),(0,h.u2)([(0,u.Cb)()],m.prototype,"selection",2),(0,h.u2)([(0,d.Y)("selection")],m.prototype,"handleSelectionChange",1),m.define("sl-tree"),i(2554),i(3021),i(6315),i(3514),i(3222),i(6396),i(203),i(391),i(6895),i(8513),i(6877),i(5249),i(836),i(9699),i(1793)}}]);
//# sourceMappingURL=2037.fbf0d711.js.map
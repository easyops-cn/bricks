/*! For license information please see vendors.b87b1ad4.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_next_bricks_shoelace=globalThis.webpackChunk_next_bricks_shoelace||[]).push([[8096],{33:(t,e,o)=>{o.d(e,{V:()=>l});var i=o(4716),s=o(5128),r=o(3348);const l=(0,s.u$)(class extends s.WL{constructor(t){if(super(t),t.type!==s.OA.PROPERTY&&t.type!==s.OA.ATTRIBUTE&&t.type!==s.OA.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!(0,r.Rt)(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,e){let[o]=e;if(o===i.c0||o===i.s6)return o;const l=t.element,a=t.name;if(t.type===s.OA.PROPERTY){if(o===l[a])return i.c0}else if(t.type===s.OA.BOOLEAN_ATTRIBUTE){if(!!o===l.hasAttribute(a))return i.c0}else if(t.type===s.OA.ATTRIBUTE&&l.getAttribute(a)===o+"")return i.c0;return(0,r.mY)(t),o}})},192:(t,e,o)=>{o.d(e,{e:()=>d});var i=o(6023),s=o(4302),r=o(7324),l=o(4815),a=o(3109),n=o(5024),c=o(8146),d=class extends l.f{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver((t=>{this.emit("sl-resize",{detail:{entries:t}})})),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){const t=this.shadowRoot.querySelector("slot");if(null!==t){const e=t.assignedElements({flatten:!0});this.observedElements.forEach((t=>this.resizeObserver.unobserve(t))),this.observedElements=[],e.forEach((t=>{this.resizeObserver.observe(t),this.observedElements.push(t)}))}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return n.qy` <slot @slotchange=${this.handleSlotChange}></slot> `}};d.styles=[r.$,i.b],(0,a.Cc)([(0,c.MZ)({type:Boolean,reflect:!0})],d.prototype,"disabled",2),(0,a.Cc)([(0,s.w)("disabled",{waitUntilFirstUpdate:!0})],d.prototype,"handleDisabledChange",1)},252:(t,e,o)=>{var i=o(5024),s=i.AH`
  :host {
    display: block;
    position: relative;
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding: var(--sl-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }
`,r=o(7324),l=o(4815),a=o(3109),n=o(8146),c=class extends l.f{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(t){const e=["menuitem","menuitemcheckbox"],o=t.composedPath(),i=o.find((t=>{var o;return e.includes((null==(o=null==t?void 0:t.getAttribute)?void 0:o.call(t,"role"))||"")}));if(!i)return;if(o.find((t=>{var e;return"menu"===(null==(e=null==t?void 0:t.getAttribute)?void 0:e.call(t,"role"))}))!==this)return;const s=i;"checkbox"===s.type&&(s.checked=!s.checked),this.emit("sl-select",{detail:{item:s}})}handleKeyDown(t){if("Enter"===t.key||" "===t.key){const e=this.getCurrentItem();t.preventDefault(),t.stopPropagation(),null==e||e.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(t.key)){const e=this.getAllItems(),o=this.getCurrentItem();let i=o?e.indexOf(o):0;e.length>0&&(t.preventDefault(),t.stopPropagation(),"ArrowDown"===t.key?i++:"ArrowUp"===t.key?i--:"Home"===t.key?i=0:"End"===t.key&&(i=e.length-1),i<0&&(i=e.length-1),i>e.length-1&&(i=0),this.setCurrentItem(e[i]),e[i].focus())}}handleMouseDown(t){const e=t.target;this.isMenuItem(e)&&this.setCurrentItem(e)}handleSlotChange(){const t=this.getAllItems();t.length>0&&this.setCurrentItem(t[0])}isMenuItem(t){var e;return"sl-menu-item"===t.tagName.toLowerCase()||["menuitem","menuitemcheckbox","menuitemradio"].includes(null!=(e=t.getAttribute("role"))?e:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter((t=>!(t.inert||!this.isMenuItem(t))))}getCurrentItem(){return this.getAllItems().find((t=>"0"===t.getAttribute("tabindex")))}setCurrentItem(t){this.getAllItems().forEach((e=>{e.setAttribute("tabindex",e===t?"0":"-1")}))}render(){return i.qy`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};c.styles=[r.$,s],(0,a.Cc)([(0,n.P)("slot")],c.prototype,"defaultSlot",2),c.define("sl-menu")},328:(t,e,o)=>{o.d(e,{x:()=>i});var i=o(5024).AH`
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
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
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
    -webkit-user-select: none;
  }

  :host([required]) .checkbox__label::after {
    content: var(--sl-input-required-content);
    color: var(--sl-input-required-content-color);
    margin-inline-start: var(--sl-input-required-content-offset);
  }
`},377:(t,e,o)=>{var i=o(5024),s=i.AH`
  :host {
    --symbol-color: var(--sl-color-neutral-300);
    --symbol-color-active: var(--sl-color-amber-500);
    --symbol-size: 1.2rem;
    --symbol-spacing: var(--sl-spacing-3x-small);

    display: inline-flex;
  }

  .rating {
    position: relative;
    display: inline-flex;
    border-radius: var(--sl-border-radius-medium);
    vertical-align: middle;
  }

  .rating:focus {
    outline: none;
  }

  .rating:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .rating__symbols {
    display: inline-flex;
    position: relative;
    font-size: var(--symbol-size);
    line-height: 0;
    color: var(--symbol-color);
    white-space: nowrap;
    cursor: pointer;
  }

  .rating__symbols > * {
    padding: var(--symbol-spacing);
  }

  .rating__symbol--active,
  .rating__partial--filled {
    color: var(--symbol-color-active);
  }

  .rating__partial-symbol-container {
    position: relative;
  }

  .rating__partial--filled {
    position: absolute;
    top: var(--symbol-spacing);
    left: var(--symbol-spacing);
  }

  .rating__symbol {
    transition: var(--sl-transition-fast) scale;
    pointer-events: none;
  }

  .rating__symbol--hover {
    scale: 1.2;
  }

  .rating--disabled .rating__symbols,
  .rating--readonly .rating__symbols {
    cursor: default;
  }

  .rating--disabled .rating__symbol--hover,
  .rating--readonly .rating__symbol--hover {
    scale: none;
  }

  .rating--disabled {
    opacity: 0.5;
  }

  .rating--disabled .rating__symbols {
    cursor: not-allowed;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    .rating__symbol--active {
      color: SelectedItem;
    }
  }
`,r=o(9162),l=o(541),a=o(3389),n=o(4302),c=o(7324),d=o(4815),h=o(3109),u=o(3788),p=o(8146),m=o(8981),g=o(3358),b=class extends d.f{constructor(){super(...arguments),this.localize=new l.c(this),this.hoverValue=0,this.isHovering=!1,this.label="",this.value=0,this.max=5,this.precision=1,this.readonly=!1,this.disabled=!1,this.getSymbol=()=>'<sl-icon name="star-fill" library="system"></sl-icon>'}getValueFromMousePosition(t){return this.getValueFromXCoordinate(t.clientX)}getValueFromTouchPosition(t){return this.getValueFromXCoordinate(t.touches[0].clientX)}getValueFromXCoordinate(t){const e="rtl"===this.localize.dir(),{left:o,right:i,width:s}=this.rating.getBoundingClientRect(),l=e?this.roundToPrecision((i-t)/s*this.max,this.precision):this.roundToPrecision((t-o)/s*this.max,this.precision);return(0,r.q)(l,0,this.max)}handleClick(t){this.disabled||(this.setValue(this.getValueFromMousePosition(t)),this.emit("sl-change"))}setValue(t){this.disabled||this.readonly||(this.value=t===this.value?0:t,this.isHovering=!1)}handleKeyDown(t){const e="ltr"===this.localize.dir(),o="rtl"===this.localize.dir(),i=this.value;if(!this.disabled&&!this.readonly){if("ArrowDown"===t.key||e&&"ArrowLeft"===t.key||o&&"ArrowRight"===t.key){const e=t.shiftKey?1:this.precision;this.value=Math.max(0,this.value-e),t.preventDefault()}if("ArrowUp"===t.key||e&&"ArrowRight"===t.key||o&&"ArrowLeft"===t.key){const e=t.shiftKey?1:this.precision;this.value=Math.min(this.max,this.value+e),t.preventDefault()}"Home"===t.key&&(this.value=0,t.preventDefault()),"End"===t.key&&(this.value=this.max,t.preventDefault()),this.value!==i&&this.emit("sl-change")}}handleMouseEnter(t){this.isHovering=!0,this.hoverValue=this.getValueFromMousePosition(t)}handleMouseMove(t){this.hoverValue=this.getValueFromMousePosition(t)}handleMouseLeave(){this.isHovering=!1}handleTouchStart(t){this.isHovering=!0,this.hoverValue=this.getValueFromTouchPosition(t),t.preventDefault()}handleTouchMove(t){this.hoverValue=this.getValueFromTouchPosition(t)}handleTouchEnd(t){this.isHovering=!1,this.setValue(this.hoverValue),this.emit("sl-change"),t.preventDefault()}roundToPrecision(t,e=.5){const o=1/e;return Math.ceil(t*o)/o}handleHoverValueChange(){this.emit("sl-hover",{detail:{phase:"move",value:this.hoverValue}})}handleIsHoveringChange(){this.emit("sl-hover",{detail:{phase:this.isHovering?"start":"end",value:this.hoverValue}})}focus(t){this.rating.focus(t)}blur(){this.rating.blur()}render(){const t="rtl"===this.localize.dir(),e=Array.from(Array(this.max).keys());let o=0;return o=this.disabled||this.readonly?this.value:this.isHovering?this.hoverValue:this.value,i.qy`
      <div
        part="base"
        class=${(0,u.H)({rating:!0,"rating--readonly":this.readonly,"rating--disabled":this.disabled,"rating--rtl":t})}
        role="slider"
        aria-label=${this.label}
        aria-disabled=${this.disabled?"true":"false"}
        aria-readonly=${this.readonly?"true":"false"}
        aria-valuenow=${this.value}
        aria-valuemin=${0}
        aria-valuemax=${this.max}
        tabindex=${this.disabled||this.readonly?"-1":"0"}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mouseenter=${this.handleMouseEnter}
        @touchstart=${this.handleTouchStart}
        @mouseleave=${this.handleMouseLeave}
        @touchend=${this.handleTouchEnd}
        @mousemove=${this.handleMouseMove}
        @touchmove=${this.handleTouchMove}
      >
        <span class="rating__symbols">
          ${e.map((e=>o>e&&o<e+1?i.qy`
                <span
                  class=${(0,u.H)({rating__symbol:!0,"rating__partial-symbol-container":!0,"rating__symbol--hover":this.isHovering&&Math.ceil(o)===e+1})}
                  role="presentation"
                >
                  <div
                    style=${(0,m.W)({clipPath:t?`inset(0 ${100*(o-e)}% 0 0)`:`inset(0 0 0 ${100*(o-e)}%)`})}
                  >
                    ${(0,g._)(this.getSymbol(e+1))}
                  </div>
                  <div
                    class="rating__partial--filled"
                    style=${(0,m.W)({clipPath:t?`inset(0 0 0 ${100-100*(o-e)}%)`:`inset(0 ${100-100*(o-e)}% 0 0)`})}
                  >
                    ${(0,g._)(this.getSymbol(e+1))}
                  </div>
                </span>
              `:i.qy`
              <span
                class=${(0,u.H)({rating__symbol:!0,"rating__symbol--hover":this.isHovering&&Math.ceil(o)===e+1,"rating__symbol--active":o>=e+1})}
                role="presentation"
              >
                ${(0,g._)(this.getSymbol(e+1))}
              </span>
            `))}
        </span>
      </div>
    `}};b.styles=[c.$,s],b.dependencies={"sl-icon":a.B},(0,h.Cc)([(0,p.P)(".rating")],b.prototype,"rating",2),(0,h.Cc)([(0,p.wk)()],b.prototype,"hoverValue",2),(0,h.Cc)([(0,p.wk)()],b.prototype,"isHovering",2),(0,h.Cc)([(0,p.MZ)()],b.prototype,"label",2),(0,h.Cc)([(0,p.MZ)({type:Number})],b.prototype,"value",2),(0,h.Cc)([(0,p.MZ)({type:Number})],b.prototype,"max",2),(0,h.Cc)([(0,p.MZ)({type:Number})],b.prototype,"precision",2),(0,h.Cc)([(0,p.MZ)({type:Boolean,reflect:!0})],b.prototype,"readonly",2),(0,h.Cc)([(0,p.MZ)({type:Boolean,reflect:!0})],b.prototype,"disabled",2),(0,h.Cc)([(0,p.MZ)()],b.prototype,"getSymbol",2),(0,h.Cc)([(0,p.Ls)({passive:!0})],b.prototype,"handleTouchMove",1),(0,h.Cc)([(0,n.w)("hoverValue")],b.prototype,"handleHoverValueChange",1),(0,h.Cc)([(0,n.w)("isHovering")],b.prototype,"handleIsHoveringChange",1),b.define("sl-rating"),o(3585),o(4415),o(4637),o(8326),o(2089)},541:(t,e,o)=>{o.d(e,{c:()=>r});var i=o(3585),s=o(5258),r=class extends s.c2{};(0,s.XC)(i.k)},567:(t,e,o)=>{var i=o(1754),s=o(4302),r=o(7324),l=o(4815),a=o(5024),n=a.AH`
  :host {
    display: contents;
  }
`,c=o(3109),d=o(8146),h=class extends l.f{constructor(){super(...arguments),this.hasStarted=!1,this.name="none",this.play=!1,this.delay=0,this.direction="normal",this.duration=1e3,this.easing="linear",this.endDelay=0,this.fill="auto",this.iterations=1/0,this.iterationStart=0,this.playbackRate=1,this.handleAnimationFinish=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-finish")},this.handleAnimationCancel=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-cancel")}}get currentTime(){var t,e;return null!=(e=null==(t=this.animation)?void 0:t.currentTime)?e:0}set currentTime(t){this.animation&&(this.animation.currentTime=t)}connectedCallback(){super.connectedCallback(),this.createAnimation()}disconnectedCallback(){super.disconnectedCallback(),this.destroyAnimation()}handleSlotChange(){this.destroyAnimation(),this.createAnimation()}async createAnimation(){var t,e;const o=null!=(t=i.easings[this.easing])?t:this.easing,s=null!=(e=this.keyframes)?e:i[this.name],r=(await this.defaultSlot).assignedElements()[0];return!(!r||!s||(this.destroyAnimation(),this.animation=r.animate(s,{delay:this.delay,direction:this.direction,duration:this.duration,easing:o,endDelay:this.endDelay,fill:this.fill,iterationStart:this.iterationStart,iterations:this.iterations}),this.animation.playbackRate=this.playbackRate,this.animation.addEventListener("cancel",this.handleAnimationCancel),this.animation.addEventListener("finish",this.handleAnimationFinish),this.play?(this.hasStarted=!0,this.emit("sl-start")):this.animation.pause(),0))}destroyAnimation(){this.animation&&(this.animation.cancel(),this.animation.removeEventListener("cancel",this.handleAnimationCancel),this.animation.removeEventListener("finish",this.handleAnimationFinish),this.hasStarted=!1)}handleAnimationChange(){this.hasUpdated&&this.createAnimation()}handlePlayChange(){return!!this.animation&&(this.play&&!this.hasStarted&&(this.hasStarted=!0,this.emit("sl-start")),this.play?this.animation.play():this.animation.pause(),!0)}handlePlaybackRateChange(){this.animation&&(this.animation.playbackRate=this.playbackRate)}cancel(){var t;null==(t=this.animation)||t.cancel()}finish(){var t;null==(t=this.animation)||t.finish()}render(){return a.qy` <slot @slotchange=${this.handleSlotChange}></slot> `}};h.styles=[r.$,n],(0,c.Cc)([(0,d.nJ)("slot")],h.prototype,"defaultSlot",2),(0,c.Cc)([(0,d.MZ)()],h.prototype,"name",2),(0,c.Cc)([(0,d.MZ)({type:Boolean,reflect:!0})],h.prototype,"play",2),(0,c.Cc)([(0,d.MZ)({type:Number})],h.prototype,"delay",2),(0,c.Cc)([(0,d.MZ)()],h.prototype,"direction",2),(0,c.Cc)([(0,d.MZ)({type:Number})],h.prototype,"duration",2),(0,c.Cc)([(0,d.MZ)()],h.prototype,"easing",2),(0,c.Cc)([(0,d.MZ)({attribute:"end-delay",type:Number})],h.prototype,"endDelay",2),(0,c.Cc)([(0,d.MZ)()],h.prototype,"fill",2),(0,c.Cc)([(0,d.MZ)({type:Number})],h.prototype,"iterations",2),(0,c.Cc)([(0,d.MZ)({attribute:"iteration-start",type:Number})],h.prototype,"iterationStart",2),(0,c.Cc)([(0,d.MZ)({attribute:!1})],h.prototype,"keyframes",2),(0,c.Cc)([(0,d.MZ)({attribute:"playback-rate",type:Number})],h.prototype,"playbackRate",2),(0,c.Cc)([(0,s.w)(["name","delay","direction","duration","easing","endDelay","fill","iterations","iterationsStart","keyframes"])],h.prototype,"handleAnimationChange",1),(0,c.Cc)([(0,s.w)("play")],h.prototype,"handlePlayChange",1),(0,c.Cc)([(0,s.w)("playbackRate")],h.prototype,"handlePlaybackRateChange",1),h.define("sl-animation")},629:(t,e,o)=>{o(4667).m.define("sl-popup"),o(8819),o(541),o(3585),o(7324),o(4815),o(3109)},650:(t,e,o)=>{var i=o(5024),s=i.AH`
  :host {
    display: block;
  }

  .textarea {
    display: grid;
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

  .textarea__control,
  .textarea__size-adjuster {
    grid-area: 1 / 1 / 2 / 2;
  }

  .textarea__size-adjuster {
    visibility: hidden;
    pointer-events: none;
    opacity: 0;
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
`,r=o(3088),l=o(1696),a=o(1736),n=o(4101),c=o(4302),d=o(7324),h=o(4815),u=o(3109),p=o(3788),m=o(996),g=o(33),b=o(8146),v=class extends h.f{constructor(){super(...arguments),this.formControlController=new a.Ud(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new n.X(this,"help-text","label"),this.hasFocus=!1,this.title="",this.name="",this.value="",this.size="medium",this.filled=!1,this.label="",this.helpText="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.form="",this.required=!1,this.spellcheck=!0,this.defaultValue=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver((()=>this.setTextareaHeight())),this.updateComplete.then((()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)}))}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){var t;super.disconnectedCallback(),this.input&&(null==(t=this.resizeObserver)||t.unobserve(this.input))}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}setTextareaHeight(){"auto"===this.resize?(this.sizeAdjuster.style.height=`${this.input.clientHeight}px`,this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=""}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(t){return t?("number"==typeof t.top&&(this.input.scrollTop=t.top),void("number"==typeof t.left&&(this.input.scrollLeft=t.left))):{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(t,e,o="none"){this.input.setSelectionRange(t,e,o)}setRangeText(t,e,o,i="preserve"){const s=null!=e?e:this.input.selectionStart,r=null!=o?o:this.input.selectionEnd;this.input.setRangeText(t,s,r,i),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),o=!!this.label||!!t,s=!!this.helpText||!!e;return i.qy`
      <div
        part="form-control"
        class=${(0,p.H)({"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--has-label":o,"form-control--has-help-text":s})}
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
            class=${(0,p.H)({textarea:!0,"textarea--small":"small"===this.size,"textarea--medium":"medium"===this.size,"textarea--large":"large"===this.size,"textarea--standard":!this.filled,"textarea--filled":this.filled,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":"none"===this.resize,"textarea--resize-vertical":"vertical"===this.resize,"textarea--resize-auto":"auto"===this.resize})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${(0,m.J)(this.name)}
              .value=${(0,g.V)(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${(0,m.J)(this.placeholder)}
              rows=${(0,m.J)(this.rows)}
              minlength=${(0,m.J)(this.minlength)}
              maxlength=${(0,m.J)(this.maxlength)}
              autocapitalize=${(0,m.J)(this.autocapitalize)}
              autocorrect=${(0,m.J)(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${(0,m.J)(this.spellcheck)}
              enterkeyhint=${(0,m.J)(this.enterkeyhint)}
              inputmode=${(0,m.J)(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            ></textarea>
            <!-- This "adjuster" exists to prevent layout shifting. https://github.com/shoelace-style/shoelace/issues/2180 -->
            <div part="textarea-adjuster" class="textarea__size-adjuster" ?hidden=${"auto"!==this.resize}></div>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${s?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};v.styles=[d.$,l.I,s],(0,u.Cc)([(0,b.P)(".textarea__control")],v.prototype,"input",2),(0,u.Cc)([(0,b.P)(".textarea__size-adjuster")],v.prototype,"sizeAdjuster",2),(0,u.Cc)([(0,b.wk)()],v.prototype,"hasFocus",2),(0,u.Cc)([(0,b.MZ)()],v.prototype,"title",2),(0,u.Cc)([(0,b.MZ)()],v.prototype,"name",2),(0,u.Cc)([(0,b.MZ)()],v.prototype,"value",2),(0,u.Cc)([(0,b.MZ)({reflect:!0})],v.prototype,"size",2),(0,u.Cc)([(0,b.MZ)({type:Boolean,reflect:!0})],v.prototype,"filled",2),(0,u.Cc)([(0,b.MZ)()],v.prototype,"label",2),(0,u.Cc)([(0,b.MZ)({attribute:"help-text"})],v.prototype,"helpText",2),(0,u.Cc)([(0,b.MZ)()],v.prototype,"placeholder",2),(0,u.Cc)([(0,b.MZ)({type:Number})],v.prototype,"rows",2),(0,u.Cc)([(0,b.MZ)()],v.prototype,"resize",2),(0,u.Cc)([(0,b.MZ)({type:Boolean,reflect:!0})],v.prototype,"disabled",2),(0,u.Cc)([(0,b.MZ)({type:Boolean,reflect:!0})],v.prototype,"readonly",2),(0,u.Cc)([(0,b.MZ)({reflect:!0})],v.prototype,"form",2),(0,u.Cc)([(0,b.MZ)({type:Boolean,reflect:!0})],v.prototype,"required",2),(0,u.Cc)([(0,b.MZ)({type:Number})],v.prototype,"minlength",2),(0,u.Cc)([(0,b.MZ)({type:Number})],v.prototype,"maxlength",2),(0,u.Cc)([(0,b.MZ)()],v.prototype,"autocapitalize",2),(0,u.Cc)([(0,b.MZ)()],v.prototype,"autocorrect",2),(0,u.Cc)([(0,b.MZ)()],v.prototype,"autocomplete",2),(0,u.Cc)([(0,b.MZ)({type:Boolean})],v.prototype,"autofocus",2),(0,u.Cc)([(0,b.MZ)()],v.prototype,"enterkeyhint",2),(0,u.Cc)([(0,b.MZ)({type:Boolean,converter:{fromAttribute:t=>!(!t||"false"===t),toAttribute:t=>t?"true":"false"}})],v.prototype,"spellcheck",2),(0,u.Cc)([(0,b.MZ)()],v.prototype,"inputmode",2),(0,u.Cc)([(0,r.J)()],v.prototype,"defaultValue",2),(0,u.Cc)([(0,c.w)("disabled",{waitUntilFirstUpdate:!0})],v.prototype,"handleDisabledChange",1),(0,u.Cc)([(0,c.w)("rows",{waitUntilFirstUpdate:!0})],v.prototype,"handleRowsChange",1),(0,u.Cc)([(0,c.w)("value",{waitUntilFirstUpdate:!0})],v.prototype,"handleValueChange",1),v.define("sl-textarea")},762:(t,e,o)=>{o.d(e,{p:()=>n});var i=o(875),s=o(541),r=o(7324),l=o(4815),a=o(5024),n=class extends l.f{constructor(){super(...arguments),this.localize=new s.c(this)}render(){return a.qy`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};n.styles=[r.$,i.$]},855:(t,e,o)=>{t.exports=function(t){var e=o.nc;e&&t.setAttribute("nonce",e)}},875:(t,e,o)=>{o.d(e,{$:()=>i});var i=o(5024).AH`
  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
    flex: none;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.05em, 3em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.05em, 3em;
    }
  }
`},892:(t,e,o)=>{o.d(e,{a:()=>r});var i=o(8678),s=[],r=class{constructor(t){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=t=>{var e;if("Tab"!==t.key||this.isExternalActivated)return;if(!this.isActive())return;const o=(0,i.Z$)();if(this.previousFocus=o,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;t.shiftKey?this.tabDirection="backward":this.tabDirection="forward";const s=(0,i.Jc)(this.element);let r=s.findIndex((t=>t===o));this.previousFocus=this.currentFocus;const l="forward"===this.tabDirection?1:-1;for(;;){r+l>=s.length?r=0:r+l<0?r=s.length-1:r+=l,this.previousFocus=this.currentFocus;const o=s[r];if("backward"===this.tabDirection&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;if(o&&this.possiblyHasTabbableChildren(o))return;t.preventDefault(),this.currentFocus=o,null==(e=this.currentFocus)||e.focus({preventScroll:!1});const a=[...(0,i.CP)()];if(a.includes(this.currentFocus)||!a.includes(this.previousFocus))break}setTimeout((()=>this.checkFocus()))},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=t,this.elementsWithTabbableControls=["iframe"]}activate(){s.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){s=s.filter((t=>t!==this.element)),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return s[s.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const t=(0,i.Jc)(this.element);if(!this.element.matches(":focus-within")){const e=t[0],o=t[t.length-1],i="forward"===this.tabDirection?e:o;"function"==typeof(null==i?void 0:i.focus)&&(this.currentFocus=i,i.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(t){return this.elementsWithTabbableControls.includes(t.tagName.toLowerCase())||t.hasAttribute("controls")}}},921:(t,e,o)=>{var i=o(5024),s=i.AH`
  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    text-align: start;
    white-space: normal;
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`,r=o(4667),l=o(5137),a=o(1060),n=o(8511),c=o(541),d=o(4302),h=o(7324),u=o(4815),p=o(3109),m=o(3788),g=o(8146),b=class extends u.f{constructor(){super(),this.localize=new c.c(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=t=>{"Escape"===t.key&&(t.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const t=(0,n.E9)(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout((()=>this.show()),t)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const t=(0,n.E9)(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout((()=>this.hide()),t)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var t;super.disconnectedCallback(),null==(t=this.closeWatcher)||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(t){return this.trigger.split(" ").includes(t)}async handleOpenChange(){var t,e;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?(null==(t=this.closeWatcher)||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await(0,n.Ey)(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:e,options:o}=(0,l.RB)(this,"tooltip.show",{dir:this.localize.dir()});await(0,n.jd)(this.popup.popup,e,o),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),null==(e=this.closeWatcher)||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await(0,n.Ey)(this.body);const{keyframes:t,options:o}=(0,l.RB)(this,"tooltip.hide",{dir:this.localize.dir()});await(0,n.jd)(this.popup.popup,t,o),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,(0,a.l)(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,(0,a.l)(this,"sl-after-hide")}render(){return i.qy`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${(0,m.H)({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
        hover-bridge
      >
        ${""}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${""}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open?"polite":"off"}>
          <slot name="content">${this.content}</slot>
        </div>
      </sl-popup>
    `}};b.styles=[h.$,s],b.dependencies={"sl-popup":r.m},(0,p.Cc)([(0,g.P)("slot:not([name])")],b.prototype,"defaultSlot",2),(0,p.Cc)([(0,g.P)(".tooltip__body")],b.prototype,"body",2),(0,p.Cc)([(0,g.P)("sl-popup")],b.prototype,"popup",2),(0,p.Cc)([(0,g.MZ)()],b.prototype,"content",2),(0,p.Cc)([(0,g.MZ)()],b.prototype,"placement",2),(0,p.Cc)([(0,g.MZ)({type:Boolean,reflect:!0})],b.prototype,"disabled",2),(0,p.Cc)([(0,g.MZ)({type:Number})],b.prototype,"distance",2),(0,p.Cc)([(0,g.MZ)({type:Boolean,reflect:!0})],b.prototype,"open",2),(0,p.Cc)([(0,g.MZ)({type:Number})],b.prototype,"skidding",2),(0,p.Cc)([(0,g.MZ)()],b.prototype,"trigger",2),(0,p.Cc)([(0,g.MZ)({type:Boolean})],b.prototype,"hoist",2),(0,p.Cc)([(0,d.w)("open",{waitUntilFirstUpdate:!0})],b.prototype,"handleOpenChange",1),(0,p.Cc)([(0,d.w)(["content","distance","hoist","placement","skidding"])],b.prototype,"handleOptionsChange",1),(0,p.Cc)([(0,d.w)("disabled")],b.prototype,"handleDisabledChange",1),(0,l.Ee)("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}}),(0,l.Ee)("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}}),b.define("sl-tooltip"),o(8819),o(3585)},935:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var o="",i=void 0!==e[5];return e[4]&&(o+="@supports (".concat(e[4],") {")),e[2]&&(o+="@media ".concat(e[2]," {")),i&&(o+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),o+=t(e),i&&(o+="}"),e[2]&&(o+="}"),e[4]&&(o+="}"),o})).join("")},e.i=function(t,o,i,s,r){"string"==typeof t&&(t=[[null,t,void 0]]);var l={};if(i)for(var a=0;a<this.length;a++){var n=this[a][0];null!=n&&(l[n]=!0)}for(var c=0;c<t.length;c++){var d=[].concat(t[c]);i&&l[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),o&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=o):d[2]=o),s&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=s):d[4]="".concat(s)),e.push(d))}},e}},996:(t,e,o)=>{o.d(e,{J:()=>s});var i=o(4716);const s=t=>null!=t?t:i.s6},1060:(t,e,o)=>{function i(t,e){return new Promise((o=>{t.addEventListener(e,(function i(s){s.target===t&&(t.removeEventListener(e,i),o())}))}))}o.d(e,{l:()=>i})},1335:(t,e,o)=>{var i=o(9162),s=class{constructor(t,e){this.timerId=0,this.activeInteractions=0,this.paused=!1,this.stopped=!0,this.pause=()=>{this.activeInteractions++||(this.paused=!0,this.host.requestUpdate())},this.resume=()=>{--this.activeInteractions||(this.paused=!1,this.host.requestUpdate())},t.addController(this),this.host=t,this.tickCallback=e}hostConnected(){this.host.addEventListener("mouseenter",this.pause),this.host.addEventListener("mouseleave",this.resume),this.host.addEventListener("focusin",this.pause),this.host.addEventListener("focusout",this.resume),this.host.addEventListener("touchstart",this.pause,{passive:!0}),this.host.addEventListener("touchend",this.resume)}hostDisconnected(){this.stop(),this.host.removeEventListener("mouseenter",this.pause),this.host.removeEventListener("mouseleave",this.resume),this.host.removeEventListener("focusin",this.pause),this.host.removeEventListener("focusout",this.resume),this.host.removeEventListener("touchstart",this.pause),this.host.removeEventListener("touchend",this.resume)}start(t){this.stop(),this.stopped=!1,this.timerId=window.setInterval((()=>{this.paused||this.tickCallback()}),t)}stop(){clearInterval(this.timerId),this.stopped=!0,this.host.requestUpdate()}},r=o(5024),l=r.AH`
  :host {
    --slide-gap: var(--sl-spacing-medium, 1rem);
    --aspect-ratio: 16 / 9;
    --scroll-hint: 0px;

    display: flex;
  }

  .carousel {
    display: grid;
    grid-template-columns: min-content 1fr min-content;
    grid-template-rows: 1fr min-content;
    grid-template-areas:
      '. slides .'
      '. pagination .';
    gap: var(--sl-spacing-medium);
    align-items: center;
    min-height: 100%;
    min-width: 100%;
    position: relative;
  }

  .carousel__pagination {
    grid-area: pagination;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--sl-spacing-small);
  }

  .carousel__slides {
    grid-area: slides;

    display: grid;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-items: center;
    overflow: auto;
    overscroll-behavior-x: contain;
    scrollbar-width: none;
    aspect-ratio: calc(var(--aspect-ratio) * var(--slides-per-page));
    border-radius: var(--sl-border-radius-small);

    --slide-size: calc((100% - (var(--slides-per-page) - 1) * var(--slide-gap)) / var(--slides-per-page));
  }

  @media (prefers-reduced-motion) {
    :where(.carousel__slides) {
      scroll-behavior: auto;
    }
  }

  .carousel__slides--horizontal {
    grid-auto-flow: column;
    grid-auto-columns: var(--slide-size);
    grid-auto-rows: 100%;
    column-gap: var(--slide-gap);
    scroll-snap-type: x mandatory;
    scroll-padding-inline: var(--scroll-hint);
    padding-inline: var(--scroll-hint);
    overflow-y: hidden;
  }

  .carousel__slides--vertical {
    grid-auto-flow: row;
    grid-auto-columns: 100%;
    grid-auto-rows: var(--slide-size);
    row-gap: var(--slide-gap);
    scroll-snap-type: y mandatory;
    scroll-padding-block: var(--scroll-hint);
    padding-block: var(--scroll-hint);
    overflow-x: hidden;
  }

  .carousel__slides--dragging {
  }

  :host([vertical]) ::slotted(sl-carousel-item) {
    height: 100%;
  }

  .carousel__slides::-webkit-scrollbar {
    display: none;
  }

  .carousel__navigation {
    grid-area: navigation;
    display: contents;
    font-size: var(--sl-font-size-x-large);
  }

  .carousel__navigation-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-small);
    font-size: inherit;
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-medium) color;
    appearance: none;
  }

  .carousel__navigation-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .carousel__navigation-button--disabled::part(base) {
    pointer-events: none;
  }

  .carousel__navigation-button--previous {
    grid-column: 1;
    grid-row: 1;
  }

  .carousel__navigation-button--next {
    grid-column: 3;
    grid-row: 1;
  }

  .carousel__pagination-item {
    display: block;
    cursor: pointer;
    background: none;
    border: 0;
    border-radius: var(--sl-border-radius-circle);
    width: var(--sl-spacing-small);
    height: var(--sl-spacing-small);
    background-color: var(--sl-color-neutral-300);
    padding: 0;
    margin: 0;
  }

  .carousel__pagination-item--active {
    background-color: var(--sl-color-neutral-700);
    transform: scale(1.2);
  }

  /* Focus styles */
  .carousel__slides:focus-visible,
  .carousel__navigation-button:focus-visible,
  .carousel__pagination-item:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`,a=o(1060),n=o(8511),c=o(541),d=o(3389),h=o(4302),u=o(7324),p=o(4815),m=o(3109),g=o(3788),b=o(8146),v=class extends p.f{constructor(){super(...arguments),this.loop=!1,this.navigation=!1,this.pagination=!1,this.autoplay=!1,this.autoplayInterval=3e3,this.slidesPerPage=1,this.slidesPerMove=1,this.orientation="horizontal",this.mouseDragging=!1,this.activeSlide=0,this.scrolling=!1,this.dragging=!1,this.autoplayController=new s(this,(()=>this.next())),this.dragStartPosition=[-1,-1],this.localize=new c.c(this),this.pendingSlideChange=!1,this.handleMouseDrag=t=>{this.dragging||(this.scrollContainer.style.setProperty("scroll-snap-type","none"),this.dragging=!0,this.dragStartPosition=[t.clientX,t.clientY]),this.scrollContainer.scrollBy({left:-t.movementX,top:-t.movementY,behavior:"instant"})},this.handleMouseDragEnd=()=>{const t=this.scrollContainer;document.removeEventListener("pointermove",this.handleMouseDrag,{capture:!0});const e=t.scrollLeft,o=t.scrollTop;t.style.removeProperty("scroll-snap-type"),t.style.setProperty("overflow","hidden");const i=t.scrollLeft,s=t.scrollTop;t.style.removeProperty("overflow"),t.style.setProperty("scroll-snap-type","none"),t.scrollTo({left:e,top:o,behavior:"instant"}),requestAnimationFrame((async()=>{e===i&&o===s||(t.scrollTo({left:i,top:s,behavior:(0,n.Oe)()?"auto":"smooth"}),await(0,a.l)(t,"scrollend")),t.style.removeProperty("scroll-snap-type"),this.dragging=!1,this.dragStartPosition=[-1,-1],this.handleScrollEnd()}))},this.handleSlotChange=t=>{t.some((t=>[...t.addedNodes,...t.removedNodes].some((t=>this.isCarouselItem(t)&&!t.hasAttribute("data-clone")))))&&this.initializeSlides(),this.requestUpdate()}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","region"),this.setAttribute("aria-label",this.localize.term("carousel"))}disconnectedCallback(){var t;super.disconnectedCallback(),null==(t=this.mutationObserver)||t.disconnect()}firstUpdated(){this.initializeSlides(),this.mutationObserver=new MutationObserver(this.handleSlotChange),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}willUpdate(t){(t.has("slidesPerMove")||t.has("slidesPerPage"))&&(this.slidesPerMove=Math.min(this.slidesPerMove,this.slidesPerPage))}getPageCount(){const t=this.getSlides().length,{slidesPerPage:e,slidesPerMove:o,loop:i}=this,s=i?t/o:(t-e)/o+1;return Math.ceil(s)}getCurrentPage(){return Math.ceil(this.activeSlide/this.slidesPerMove)}canScrollNext(){return this.loop||this.getCurrentPage()<this.getPageCount()-1}canScrollPrev(){return this.loop||this.getCurrentPage()>0}getSlides({excludeClones:t=!0}={}){return[...this.children].filter((e=>this.isCarouselItem(e)&&(!t||!e.hasAttribute("data-clone"))))}handleClick(t){if(this.dragging&&this.dragStartPosition[0]>0&&this.dragStartPosition[1]>0){const e=Math.abs(this.dragStartPosition[0]-t.clientX),o=Math.abs(this.dragStartPosition[1]-t.clientY);Math.sqrt(e*e+o*o)>=10&&t.preventDefault()}}handleKeyDown(t){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key)){const e=t.target,o="rtl"===this.localize.dir(),i=null!==e.closest('[part~="pagination-item"]'),s="ArrowDown"===t.key||!o&&"ArrowRight"===t.key||o&&"ArrowLeft"===t.key,r="ArrowUp"===t.key||!o&&"ArrowLeft"===t.key||o&&"ArrowRight"===t.key;t.preventDefault(),r&&this.previous(),s&&this.next(),"Home"===t.key&&this.goToSlide(0),"End"===t.key&&this.goToSlide(this.getSlides().length-1),i&&this.updateComplete.then((()=>{var t;const e=null==(t=this.shadowRoot)?void 0:t.querySelector('[part~="pagination-item--active"]');e&&e.focus()}))}}handleMouseDragStart(t){this.mouseDragging&&0===t.button&&(t.preventDefault(),document.addEventListener("pointermove",this.handleMouseDrag,{capture:!0,passive:!0}),document.addEventListener("pointerup",this.handleMouseDragEnd,{capture:!0,once:!0}))}handleScroll(){this.scrolling=!0,this.pendingSlideChange||this.synchronizeSlides()}synchronizeSlides(){const t=new IntersectionObserver((e=>{t.disconnect();for(const t of e){const e=t.target;e.toggleAttribute("inert",!t.isIntersecting),e.classList.toggle("--in-view",t.isIntersecting),e.setAttribute("aria-hidden",t.isIntersecting?"false":"true")}const o=e.find((t=>t.isIntersecting));if(!o)return;const i=this.getSlides({excludeClones:!1}),s=this.getSlides().length,r=i.indexOf(o.target),l=this.loop?r-this.slidesPerPage:r;if(this.activeSlide=(Math.ceil(l/this.slidesPerMove)*this.slidesPerMove+s)%s,!this.scrolling&&this.loop&&o.target.hasAttribute("data-clone")){const t=Number(o.target.getAttribute("data-clone"));this.goToSlide(t,"instant")}}),{root:this.scrollContainer,threshold:.6});this.getSlides({excludeClones:!1}).forEach((e=>{t.observe(e)}))}handleScrollEnd(){this.scrolling&&!this.dragging&&(this.scrolling=!1,this.pendingSlideChange=!1,this.synchronizeSlides())}isCarouselItem(t){return t instanceof Element&&"sl-carousel-item"===t.tagName.toLowerCase()}initializeSlides(){this.getSlides({excludeClones:!1}).forEach(((t,e)=>{t.classList.remove("--in-view"),t.classList.remove("--is-active"),t.setAttribute("role","group"),t.setAttribute("aria-label",this.localize.term("slideNum",e+1)),this.pagination&&(t.setAttribute("id",`slide-${e+1}`),t.setAttribute("role","tabpanel"),t.removeAttribute("aria-label"),t.setAttribute("aria-labelledby",`tab-${e+1}`)),t.hasAttribute("data-clone")&&t.remove()})),this.updateSlidesSnap(),this.loop&&this.createClones(),this.goToSlide(this.activeSlide,"auto"),this.synchronizeSlides()}createClones(){const t=this.getSlides(),e=this.slidesPerPage,o=t.slice(-e),i=t.slice(0,e);o.reverse().forEach(((e,o)=>{const i=e.cloneNode(!0);i.setAttribute("data-clone",String(t.length-o-1)),this.prepend(i)})),i.forEach(((t,e)=>{const o=t.cloneNode(!0);o.setAttribute("data-clone",String(e)),this.append(o)}))}handleSlideChange(){const t=this.getSlides();t.forEach(((t,e)=>{t.classList.toggle("--is-active",e===this.activeSlide)})),this.hasUpdated&&this.emit("sl-slide-change",{detail:{index:this.activeSlide,slide:t[this.activeSlide]}})}updateSlidesSnap(){const t=this.getSlides(),e=this.slidesPerMove;t.forEach(((t,o)=>{(o+e)%e==0?t.style.removeProperty("scroll-snap-align"):t.style.setProperty("scroll-snap-align","none")}))}handleAutoplayChange(){this.autoplayController.stop(),this.autoplay&&this.autoplayController.start(this.autoplayInterval)}previous(t="smooth"){this.goToSlide(this.activeSlide-this.slidesPerMove,t)}next(t="smooth"){this.goToSlide(this.activeSlide+this.slidesPerMove,t)}goToSlide(t,e="smooth"){const{slidesPerPage:o,loop:s}=this,r=this.getSlides(),l=this.getSlides({excludeClones:!1});if(!r.length)return;const a=s?(t+r.length)%r.length:(0,i.q)(t,0,r.length-o);this.activeSlide=a;const c="rtl"===this.localize.dir(),d=l[(0,i.q)(t+(s?o:0)+(c?o-1:0),0,l.length-1)];this.scrollToSlide(d,(0,n.Oe)()?"auto":e)}scrollToSlide(t,e="smooth"){this.pendingSlideChange=!0,window.requestAnimationFrame((()=>{if(!this.scrollContainer)return;const o=this.scrollContainer,i=o.getBoundingClientRect(),s=t.getBoundingClientRect(),r=s.left-i.left,l=s.top-i.top;r||l?(this.pendingSlideChange=!0,o.scrollTo({left:r+o.scrollLeft,top:l+o.scrollTop,behavior:e})):this.pendingSlideChange=!1}))}render(){const{slidesPerMove:t,scrolling:e}=this,o=this.getPageCount(),i=this.getCurrentPage(),s=this.canScrollPrev(),l=this.canScrollNext(),a="ltr"===this.localize.dir();return r.qy`
      <div part="base" class="carousel">
        <div
          id="scroll-container"
          part="scroll-container"
          class="${(0,g.H)({carousel__slides:!0,"carousel__slides--horizontal":"horizontal"===this.orientation,"carousel__slides--vertical":"vertical"===this.orientation,"carousel__slides--dragging":this.dragging})}"
          style="--slides-per-page: ${this.slidesPerPage};"
          aria-busy="${e?"true":"false"}"
          aria-atomic="true"
          tabindex="0"
          @keydown=${this.handleKeyDown}
          @mousedown="${this.handleMouseDragStart}"
          @scroll="${this.handleScroll}"
          @scrollend=${this.handleScrollEnd}
          @click=${this.handleClick}
        >
          <slot></slot>
        </div>

        ${this.navigation?r.qy`
              <div part="navigation" class="carousel__navigation">
                <button
                  part="navigation-button navigation-button--previous"
                  class="${(0,g.H)({"carousel__navigation-button":!0,"carousel__navigation-button--previous":!0,"carousel__navigation-button--disabled":!s})}"
                  aria-label="${this.localize.term("previousSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${s?"false":"true"}"
                  @click=${s?()=>this.previous():null}
                >
                  <slot name="previous-icon">
                    <sl-icon library="system" name="${a?"chevron-left":"chevron-right"}"></sl-icon>
                  </slot>
                </button>

                <button
                  part="navigation-button navigation-button--next"
                  class=${(0,g.H)({"carousel__navigation-button":!0,"carousel__navigation-button--next":!0,"carousel__navigation-button--disabled":!l})}
                  aria-label="${this.localize.term("nextSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${l?"false":"true"}"
                  @click=${l?()=>this.next():null}
                >
                  <slot name="next-icon">
                    <sl-icon library="system" name="${a?"chevron-right":"chevron-left"}"></sl-icon>
                  </slot>
                </button>
              </div>
            `:""}
        ${this.pagination?r.qy`
              <div part="pagination" role="tablist" class="carousel__pagination">
                ${function*(t,e){if(void 0!==t){let o=0;for(const i of t)yield e(i,o++)}}(function(t,e){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return function*(){const i=void 0===e?0:t;null!=e||(e=t);for(let t=i;o>0?t<e:e<t;t+=o)yield t}()}(o),(e=>{const s=e===i;return r.qy`
                    <button
                      part="pagination-item ${s?"pagination-item--active":""}"
                      class="${(0,g.H)({"carousel__pagination-item":!0,"carousel__pagination-item--active":s})}"
                      role="tab"
                      id="tab-${e+1}"
                      aria-controls="slide-${e+1}"
                      aria-selected="${s?"true":"false"}"
                      aria-label="${s?this.localize.term("slideNum",e+1):this.localize.term("goToSlide",e+1,o)}"
                      tabindex=${s?"0":"-1"}
                      @click=${()=>this.goToSlide(e*t)}
                      @keydown=${this.handleKeyDown}
                    ></button>
                  `}))}
              </div>
            `:""}
      </div>
    `}};v.styles=[u.$,l],v.dependencies={"sl-icon":d.B},(0,m.Cc)([(0,b.MZ)({type:Boolean,reflect:!0})],v.prototype,"loop",2),(0,m.Cc)([(0,b.MZ)({type:Boolean,reflect:!0})],v.prototype,"navigation",2),(0,m.Cc)([(0,b.MZ)({type:Boolean,reflect:!0})],v.prototype,"pagination",2),(0,m.Cc)([(0,b.MZ)({type:Boolean,reflect:!0})],v.prototype,"autoplay",2),(0,m.Cc)([(0,b.MZ)({type:Number,attribute:"autoplay-interval"})],v.prototype,"autoplayInterval",2),(0,m.Cc)([(0,b.MZ)({type:Number,attribute:"slides-per-page"})],v.prototype,"slidesPerPage",2),(0,m.Cc)([(0,b.MZ)({type:Number,attribute:"slides-per-move"})],v.prototype,"slidesPerMove",2),(0,m.Cc)([(0,b.MZ)()],v.prototype,"orientation",2),(0,m.Cc)([(0,b.MZ)({type:Boolean,reflect:!0,attribute:"mouse-dragging"})],v.prototype,"mouseDragging",2),(0,m.Cc)([(0,b.P)(".carousel__slides")],v.prototype,"scrollContainer",2),(0,m.Cc)([(0,b.P)(".carousel__pagination")],v.prototype,"paginationContainer",2),(0,m.Cc)([(0,b.wk)()],v.prototype,"activeSlide",2),(0,m.Cc)([(0,b.wk)()],v.prototype,"scrolling",2),(0,m.Cc)([(0,b.wk)()],v.prototype,"dragging",2),(0,m.Cc)([(0,b.Ls)({passive:!0})],v.prototype,"handleScroll",1),(0,m.Cc)([(0,h.w)("loop",{waitUntilFirstUpdate:!0}),(0,h.w)("slidesPerPage",{waitUntilFirstUpdate:!0})],v.prototype,"initializeSlides",1),(0,m.Cc)([(0,h.w)("activeSlide")],v.prototype,"handleSlideChange",1),(0,m.Cc)([(0,h.w)("slidesPerMove")],v.prototype,"updateSlidesSnap",1),(0,m.Cc)([(0,h.w)("autoplay")],v.prototype,"handleAutoplayChange",1),v.define("sl-carousel"),o(2427),o(3585),o(4415),o(4637),o(8326),o(2089)},1349:(t,e,o)=>{var i=o(5024),s=i.AH`
  :host {
    --padding: 0;

    display: none;
  }

  :host([active]) {
    display: block;
  }

  .tab-panel {
    display: block;
    padding: var(--padding);
  }
`,r=o(4302),l=o(7324),a=o(4815),n=o(3109),c=o(3788),d=o(8146),h=0,u=class extends a.f{constructor(){super(...arguments),this.attrId=++h,this.componentId=`sl-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return i.qy`
      <slot
        part="base"
        class=${(0,c.H)({"tab-panel":!0,"tab-panel--active":this.active})}
      ></slot>
    `}};u.styles=[l.$,s],(0,n.Cc)([(0,d.MZ)({reflect:!0})],u.prototype,"name",2),(0,n.Cc)([(0,d.MZ)({type:Boolean,reflect:!0})],u.prototype,"active",2),(0,n.Cc)([(0,r.w)("active")],u.prototype,"handleActiveChange",1),u.define("sl-tab-panel")},1391:(t,e,o)=>{var i=o(5024),s=i.AH`
  :host {
    display: inline-flex;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: max(12px, 0.75em);
    font-weight: var(--sl-font-weight-semibold);
    letter-spacing: var(--sl-letter-spacing-normal);
    line-height: 1;
    border-radius: var(--sl-border-radius-small);
    border: solid 1px var(--sl-color-neutral-0);
    white-space: nowrap;
    padding: 0.35em 0.6em;
    user-select: none;
    -webkit-user-select: none;
    cursor: inherit;
  }

  /* Variant modifiers */
  .badge--primary {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--success {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--neutral {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--warning {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--danger {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /* Pill modifier */
  .badge--pill {
    border-radius: var(--sl-border-radius-pill);
  }

  /* Pulse modifier */
  .badge--pulse {
    animation: pulse 1.5s infinite;
  }

  .badge--pulse.badge--primary {
    --pulse-color: var(--sl-color-primary-600);
  }

  .badge--pulse.badge--success {
    --pulse-color: var(--sl-color-success-600);
  }

  .badge--pulse.badge--neutral {
    --pulse-color: var(--sl-color-neutral-600);
  }

  .badge--pulse.badge--warning {
    --pulse-color: var(--sl-color-warning-600);
  }

  .badge--pulse.badge--danger {
    --pulse-color: var(--sl-color-danger-600);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--pulse-color);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }
`,r=o(7324),l=o(4815),a=o(3109),n=o(3788),c=o(8146),d=class extends l.f{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return i.qy`
      <span
        part="base"
        class=${(0,n.H)({badge:!0,"badge--primary":"primary"===this.variant,"badge--success":"success"===this.variant,"badge--neutral":"neutral"===this.variant,"badge--warning":"warning"===this.variant,"badge--danger":"danger"===this.variant,"badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};d.styles=[r.$,s],(0,a.Cc)([(0,c.MZ)({reflect:!0})],d.prototype,"variant",2),(0,a.Cc)([(0,c.MZ)({type:Boolean,reflect:!0})],d.prototype,"pill",2),(0,a.Cc)([(0,c.MZ)({type:Boolean,reflect:!0})],d.prototype,"pulse",2),d.define("sl-badge")},1455:(t,e,o)=>{o.d(e,{U:()=>i});var i=o(5024).AH`
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
    -webkit-user-select: none;
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
`},1658:(t,e,o)=>{o.d(e,{N:()=>c});var i=o(5842),s=o(7324),r=o(4815),l=o(3109),a=o(5024),n=o(8146),c=class extends r.f{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(t){const e=d(t.target);null==e||e.toggleAttribute("data-sl-button-group__button--focus",!0)}handleBlur(t){const e=d(t.target);null==e||e.toggleAttribute("data-sl-button-group__button--focus",!1)}handleMouseOver(t){const e=d(t.target);null==e||e.toggleAttribute("data-sl-button-group__button--hover",!0)}handleMouseOut(t){const e=d(t.target);null==e||e.toggleAttribute("data-sl-button-group__button--hover",!1)}handleSlotChange(){const t=[...this.defaultSlot.assignedElements({flatten:!0})];t.forEach((e=>{const o=t.indexOf(e),i=d(e);i&&(i.toggleAttribute("data-sl-button-group__button",!0),i.toggleAttribute("data-sl-button-group__button--first",0===o),i.toggleAttribute("data-sl-button-group__button--inner",o>0&&o<t.length-1),i.toggleAttribute("data-sl-button-group__button--last",o===t.length-1),i.toggleAttribute("data-sl-button-group__button--radio","sl-radio-button"===i.tagName.toLowerCase()))}))}render(){return a.qy`
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
    `}};function d(t){var e;const o="sl-button, sl-radio-button";return null!=(e=t.closest(o))?e:t.querySelector(o)}c.styles=[s.$,i.e],(0,l.Cc)([(0,n.P)("slot")],c.prototype,"defaultSlot",2),(0,l.Cc)([(0,n.wk)()],c.prototype,"disableRole",2),(0,l.Cc)([(0,n.MZ)()],c.prototype,"label",2)},1693:(t,e,o)=>{var i=o(5024),s=i.AH`
  :host {
    --border-radius: var(--sl-border-radius-pill);
    --color: var(--sl-color-neutral-200);
    --sheen-color: var(--sl-color-neutral-300);

    display: block;
    position: relative;
  }

  .skeleton {
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 1rem;
  }

  .skeleton__indicator {
    flex: 1 1 auto;
    background: var(--color);
    border-radius: var(--border-radius);
  }

  .skeleton--sheen .skeleton__indicator {
    background: linear-gradient(270deg, var(--sheen-color), var(--color), var(--color), var(--sheen-color));
    background-size: 400% 100%;
    animation: sheen 8s ease-in-out infinite;
  }

  .skeleton--pulse .skeleton__indicator {
    animation: pulse 2s ease-in-out 0.5s infinite;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    :host {
      --color: GrayText;
    }
  }

  @keyframes sheen {
    0% {
      background-position: 200% 0;
    }
    to {
      background-position: -200% 0;
    }
  }

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
`,r=o(7324),l=o(4815),a=o(3109),n=o(3788),c=o(8146),d=class extends l.f{constructor(){super(...arguments),this.effect="none"}render(){return i.qy`
      <div
        part="base"
        class=${(0,n.H)({skeleton:!0,"skeleton--pulse":"pulse"===this.effect,"skeleton--sheen":"sheen"===this.effect})}
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `}};d.styles=[r.$,s],(0,a.Cc)([(0,c.MZ)()],d.prototype,"effect",2),d.define("sl-skeleton")},1696:(t,e,o)=>{o.d(e,{I:()=>i});var i=o(5024).AH`
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
`},1736:(t,e,o)=>{o.d(e,{G6:()=>d,Ud:()=>c,pL:()=>u,zF:()=>h});var i=o(3109),s=new WeakMap,r=new WeakMap,l=new WeakMap,a=new WeakSet,n=new WeakMap,c=class{constructor(t,e){this.handleFormData=t=>{const e=this.options.disabled(this.host),o=this.options.name(this.host),i=this.options.value(this.host),s="sl-button"===this.host.tagName.toLowerCase();this.host.isConnected&&!e&&!s&&"string"==typeof o&&o.length>0&&void 0!==i&&(Array.isArray(i)?i.forEach((e=>{t.formData.append(o,e.toString())})):t.formData.append(o,i.toString()))},this.handleFormSubmit=t=>{var e;const o=this.options.disabled(this.host),i=this.options.reportValidity;this.form&&!this.form.noValidate&&(null==(e=s.get(this.form))||e.forEach((t=>{this.setUserInteracted(t,!0)}))),!this.form||this.form.noValidate||o||i(this.host)||(t.preventDefault(),t.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),n.set(this.host,[])},this.handleInteraction=t=>{const e=n.get(this.host);e.includes(t.type)||e.push(t.type),e.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const t=this.form.querySelectorAll("*");for(const e of t)if("function"==typeof e.checkValidity&&!e.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const t=this.form.querySelectorAll("*");for(const e of t)if("function"==typeof e.reportValidity&&!e.reportValidity())return!1}return!0},(this.host=t).addController(this),this.options=(0,i.IA)({form:t=>{const e=t.form;if(e){const o=t.getRootNode().querySelector(`#${e}`);if(o)return o}return t.closest("form")},name:t=>t.name,value:t=>t.value,defaultValue:t=>t.defaultValue,disabled:t=>{var e;return null!=(e=t.disabled)&&e},reportValidity:t=>"function"!=typeof t.reportValidity||t.reportValidity(),checkValidity:t=>"function"!=typeof t.checkValidity||t.checkValidity(),setValue:(t,e)=>t.value=e,assumeInteractionOn:["sl-input"]},e)}hostConnected(){const t=this.options.form(this.host);t&&this.attachForm(t),n.set(this.host,[]),this.options.assumeInteractionOn.forEach((t=>{this.host.addEventListener(t,this.handleInteraction)}))}hostDisconnected(){this.detachForm(),n.delete(this.host),this.options.assumeInteractionOn.forEach((t=>{this.host.removeEventListener(t,this.handleInteraction)}))}hostUpdated(){const t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(t){t?(this.form=t,s.has(this.form)?s.get(this.form).add(this.host):s.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),r.has(this.form)||(r.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),l.has(this.form)||(l.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const t=s.get(this.form);t&&(t.delete(this.host),t.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),r.has(this.form)&&(this.form.reportValidity=r.get(this.form),r.delete(this.form)),l.has(this.form)&&(this.form.checkValidity=l.get(this.form),l.delete(this.form)),this.form=void 0))}setUserInteracted(t,e){e?a.add(t):a.delete(t),t.requestUpdate()}doAction(t,e){if(this.form){const o=document.createElement("button");o.type=t,o.style.position="absolute",o.style.width="0",o.style.height="0",o.style.clipPath="inset(50%)",o.style.overflow="hidden",o.style.whiteSpace="nowrap",e&&(o.name=e.name,o.value=e.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach((t=>{e.hasAttribute(t)&&o.setAttribute(t,e.getAttribute(t))}))),this.form.append(o),o.click(),o.remove()}}getForm(){var t;return null!=(t=this.form)?t:null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){const e=this.host,o=Boolean(a.has(e)),i=Boolean(e.required);e.toggleAttribute("data-required",i),e.toggleAttribute("data-optional",!i),e.toggleAttribute("data-invalid",!t),e.toggleAttribute("data-valid",t),e.toggleAttribute("data-user-invalid",!t&&o),e.toggleAttribute("data-user-valid",t&&o)}updateValidity(){const t=this.host;this.setValidity(t.validity.valid)}emitInvalidEvent(t){const e=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||e.preventDefault(),this.host.dispatchEvent(e)||null==t||t.preventDefault()}},d=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),h=Object.freeze((0,i.ko)((0,i.IA)({},d),{valid:!1,valueMissing:!0})),u=Object.freeze((0,i.ko)((0,i.IA)({},d),{valid:!1,customError:!0}))},1740:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(o){!function(t,e,o){var i="";o.supports&&(i+="@supports (".concat(o.supports,") {")),o.media&&(i+="@media ".concat(o.media," {"));var s=void 0!==o.layer;s&&(i+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),i+=o.css,s&&(i+="}"),o.media&&(i+="}"),o.supports&&(i+="}");var r=o.sourceMap;r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(i,t,e.options)}(e,t,o)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},1756:(t,e,o)=>{var i=o(9756),s=o(5024),r=s.AH`
  :host {
    display: block;
  }

  /** The popup */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;
  }

  .select::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .select[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .select[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  /* Combobox */
  .select__combobox {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    position: relative;
    align-items: center;
    justify-content: start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: pointer;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  .select__display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    color: var(--sl-input-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
  }

  .select__display-input::placeholder {
    color: var(--sl-input-placeholder-color);
  }

  .select:not(.select--disabled):hover .select__display-input {
    color: var(--sl-input-color-hover);
  }

  .select__display-input:focus {
    outline: none;
  }

  /* Visually hide the display input when multiple is enabled */
  .select--multiple:not(.select--placeholder-visible) .select__display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .select__value-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: -1;
  }

  .select__tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    margin-inline-start: var(--sl-spacing-2x-small);
  }

  .select__tags::slotted(sl-tag) {
    cursor: pointer !important;
  }

  .select--disabled .select__tags,
  .select--disabled .select__tags::slotted(sl-tag) {
    cursor: not-allowed !important;
  }

  /* Standard selects */
  .select--standard .select__combobox {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .select--standard.select--disabled .select__combobox {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    color: var(--sl-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  .select--standard:not(.select--disabled).select--open .select__combobox,
  .select--standard:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  /* Filled selects */
  .select--filled .select__combobox {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .select--filled:hover:not(.select--disabled) .select__combobox {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .select--filled.select--disabled .select__combobox {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select--filled:not(.select--disabled).select--open .select__combobox,
  .select--filled:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
  }

  /* Sizes */
  .select--small .select__combobox {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    min-height: var(--sl-input-height-small);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-small);
  }

  .select--small .select__clear {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-block: 2px;
    padding-inline-start: 0;
  }

  .select--small .select__tags {
    gap: 2px;
  }

  .select--medium .select__combobox {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    min-height: var(--sl-input-height-medium);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 3px;
  }

  .select--medium .select__tags {
    gap: 3px;
  }

  .select--large .select__combobox {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    min-height: var(--sl-input-height-large);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-large);
  }

  .select--large .select__clear {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 4px;
  }

  .select--large .select__tags {
    gap: 4px;
  }

  /* Pills */
  .select--pill.select--small .select__combobox {
    border-radius: var(--sl-input-height-small);
  }

  .select--pill.select--medium .select__combobox {
    border-radius: var(--sl-input-height-medium);
  }

  .select--pill.select--large .select__combobox {
    border-radius: var(--sl-input-height-large);
  }

  /* Prefix and Suffix */
  .select__prefix,
  .select__suffix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--sl-input-placeholder-color);
  }

  .select__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-small);
  }

  /* Clear button */
  .select__clear {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .select__clear:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .select__clear:focus {
    outline: none;
  }

  /* Expand icon */
  .select__expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
    rotate: 0;
    margin-inline-start: var(--sl-spacing-small);
  }

  .select--open .select__expand-icon {
    rotate: -180deg;
  }

  /* Listbox */
  .select__listbox {
    display: block;
    position: relative;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding-block: var(--sl-spacing-x-small);
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);
  }

  .select__listbox ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }

  .select__listbox ::slotted(small) {
    display: block;
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-500);
    padding-block: var(--sl-spacing-2x-small);
    padding-inline: var(--sl-spacing-x-large);
  }
`,l=o(8609),a=o(1696),n=o(4667),c=o(1736),d=o(5137),h=o(1060),u=o(8511),p=o(4101),m=o(541),g=o(3389),b=o(4302),v=o(7324),f=o(4815),y=o(3109),w=o(3788),_=o(8146),x=o(3358),C=class extends f.f{constructor(){super(...arguments),this.formControlController=new c.Ud(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new p.X(this,"help-text","label"),this.localize=new m.c(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.valueHasChanged=!1,this.name="",this._value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getTag=t=>s.qy`
      <sl-tag
        part="tag"
        exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button,
              remove-button__base:tag__remove-button__base
            "
        ?pill=${this.pill}
        size=${this.size}
        removable
        @sl-remove=${e=>this.handleTagRemove(e,t)}
      >
        ${t.getTextLabel()}
      </sl-tag>
    `,this.handleDocumentFocusIn=t=>{const e=t.composedPath();this&&!e.includes(this)&&this.hide()},this.handleDocumentKeyDown=t=>{const e=t.target,o=null!==e.closest(".select__clear"),i=null!==e.closest("sl-icon-button");if(!o&&!i){if("Escape"===t.key&&this.open&&!this.closeWatcher&&(t.preventDefault(),t.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),"Enter"===t.key||" "===t.key&&""===this.typeToSelectString)return t.preventDefault(),t.stopImmediatePropagation(),this.open?void(this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then((()=>{this.emit("sl-input"),this.emit("sl-change")})),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))):void this.show();if(["ArrowUp","ArrowDown","Home","End"].includes(t.key)){const e=this.getAllOptions(),o=e.indexOf(this.currentOption);let i=Math.max(0,o);if(t.preventDefault(),!this.open&&(this.show(),this.currentOption))return;"ArrowDown"===t.key?(i=o+1,i>e.length-1&&(i=0)):"ArrowUp"===t.key?(i=o-1,i<0&&(i=e.length-1)):"Home"===t.key?i=0:"End"===t.key&&(i=e.length-1),this.setCurrentOption(e[i])}if(t.key&&1===t.key.length||"Backspace"===t.key){const e=this.getAllOptions();if(t.metaKey||t.ctrlKey||t.altKey)return;if(!this.open){if("Backspace"===t.key)return;this.show()}t.stopPropagation(),t.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout((()=>this.typeToSelectString=""),1e3),"Backspace"===t.key?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=t.key.toLowerCase();for(const t of e)if(t.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(t);break}}}},this.handleDocumentMouseDown=t=>{const e=t.composedPath();this&&!e.includes(this)&&this.hide()}}get value(){return this._value}set value(t){t=this.multiple?Array.isArray(t)?t:t.split(" "):Array.isArray(t)?t.join(" "):t,this._value!==t&&(this.valueHasChanged=!0,this._value=t)}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),setTimeout((()=>{this.handleDefaultSlotChange()})),this.open=!1}addOpenListeners(){var t;document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn),"CloseWatcher"in window&&(null==(t=this.closeWatcher)||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.open&&(this.hide(),this.displayInput.focus({preventScroll:!0}))})}removeOpenListeners(){var t;document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn),null==(t=this.closeWatcher)||t.destroy()}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit("sl-focus")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(t){const e=t.composedPath().some((t=>t instanceof Element&&"sl-icon-button"===t.tagName.toLowerCase()));this.disabled||e||(t.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(t){"Tab"!==t.key&&(t.stopPropagation(),this.handleDocumentKeyDown(t))}handleClearClick(t){t.stopPropagation(),this.valueHasChanged=!0,""!==this.value&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then((()=>{this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")})))}handleClearMouseDown(t){t.stopPropagation(),t.preventDefault()}handleOptionClick(t){const e=t.target.closest("sl-option"),o=this.value;e&&!e.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(e):this.setSelectedOptions(e),this.updateComplete.then((()=>this.displayInput.focus({preventScroll:!0}))),this.value!==o&&this.updateComplete.then((()=>{this.emit("sl-input"),this.emit("sl-change")})),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){customElements.get("sl-option")||customElements.whenDefined("sl-option").then((()=>this.handleDefaultSlotChange()));const t=this.getAllOptions(),e=this.valueHasChanged?this.value:this.defaultValue,o=Array.isArray(e)?e:[e],i=[];t.forEach((t=>i.push(t.value))),this.setSelectedOptions(t.filter((t=>o.includes(t.value))))}handleTagRemove(t,e){t.stopPropagation(),this.valueHasChanged=!0,this.disabled||(this.toggleOptionSelection(e,!1),this.updateComplete.then((()=>{this.emit("sl-input"),this.emit("sl-change")})))}getAllOptions(){return[...this.querySelectorAll("sl-option")]}getFirstOption(){return this.querySelector("sl-option")}setCurrentOption(t){this.getAllOptions().forEach((t=>{t.current=!1,t.tabIndex=-1})),t&&(this.currentOption=t,t.current=!0,t.tabIndex=0,t.focus())}setSelectedOptions(t){const e=this.getAllOptions(),o=Array.isArray(t)?t:[t];e.forEach((t=>t.selected=!1)),o.length&&o.forEach((t=>t.selected=!0)),this.selectionChanged()}toggleOptionSelection(t,e){t.selected=!0===e||!1===e?e:!t.selected,this.selectionChanged()}selectionChanged(){var t,e,o;const i=this.getAllOptions();this.selectedOptions=i.filter((t=>t.selected));const s=this.valueHasChanged;if(this.multiple)this.value=this.selectedOptions.map((t=>t.value)),this.placeholder&&0===this.value.length?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length);else{const i=this.selectedOptions[0];this.value=null!=(t=null==i?void 0:i.value)?t:"",this.displayLabel=null!=(o=null==(e=null==i?void 0:i.getTextLabel)?void 0:e.call(i))?o:""}this.valueHasChanged=s,this.updateComplete.then((()=>{this.formControlController.updateValidity()}))}get tags(){return this.selectedOptions.map(((t,e)=>{if(e<this.maxOptionsVisible||this.maxOptionsVisible<=0){const o=this.getTag(t,e);return s.qy`<div @sl-remove=${e=>this.handleTagRemove(e,t)}>
          ${"string"==typeof o?(0,x._)(o):o}
        </div>`}return e===this.maxOptionsVisible?s.qy`<sl-tag size=${this.size}>+${this.selectedOptions.length-e}</sl-tag>`:s.qy``}))}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}attributeChangedCallback(t,e,o){if(super.attributeChangedCallback(t,e,o),"value"===t){const t=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=t}}handleValueChange(){if(!this.valueHasChanged){const t=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=t}const t=this.getAllOptions(),e=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(t.filter((t=>e.includes(t.value))))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("sl-show"),this.addOpenListeners(),await(0,u.Ey)(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame((()=>{this.setCurrentOption(this.currentOption)}));const{keyframes:t,options:e}=(0,d.RB)(this,"select.show",{dir:this.localize.dir()});await(0,u.jd)(this.popup.popup,t,e),this.currentOption&&(0,l.Rt)(this.currentOption,this.listbox,"vertical","auto"),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await(0,u.Ey)(this);const{keyframes:t,options:e}=(0,d.RB)(this,"select.hide",{dir:this.localize.dir()});await(0,u.jd)(this.popup.popup,t,e),this.listbox.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}async show(){if(!this.open&&!this.disabled)return this.open=!0,(0,h.l)(this,"sl-after-show");this.open=!1}async hide(){if(this.open&&!this.disabled)return this.open=!1,(0,h.l)(this,"sl-after-hide");this.open=!1}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(t){this.valueInput.setCustomValidity(t),this.formControlController.updateValidity()}focus(t){this.displayInput.focus(t)}blur(){this.displayInput.blur()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),o=!!this.label||!!t,i=!!this.helpText||!!e,r=this.clearable&&!this.disabled&&this.value.length>0,l=this.placeholder&&this.value&&this.value.length<=0;return s.qy`
      <div
        part="form-control"
        class=${(0,w.H)({"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--has-label":o,"form-control--has-help-text":i})}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${o?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <sl-popup
            class=${(0,w.H)({select:!0,"select--standard":!0,"select--filled":this.filled,"select--pill":this.pill,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":l,"select--top":"top"===this.placement,"select--bottom":"bottom"===this.placement,"select--small":"small"===this.size,"select--medium":"medium"===this.size,"select--large":"large"===this.size})}
            placement=${this.placement}
            strategy=${this.hoist?"fixed":"absolute"}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="select__combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
            >
              <slot part="prefix" name="prefix" class="select__prefix"></slot>

              <input
                part="display-input"
                class="select__display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly
                aria-controls="listbox"
                aria-expanded=${this.open?"true":"false"}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled?"true":"false"}
                aria-describedby="help-text"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
              />

              ${this.multiple?s.qy`<div part="tags" class="select__tags">${this.tags}</div>`:""}

              <input
                class="select__value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value)?this.value.join(", "):this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${()=>this.focus()}
                @invalid=${this.handleInvalid}
              />

              ${r?s.qy`
                    <button
                      part="clear-button"
                      class="select__clear"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <sl-icon name="x-circle-fill" library="system"></sl-icon>
                      </slot>
                    </button>
                  `:""}

              <slot name="suffix" part="suffix" class="select__suffix"></slot>

              <slot name="expand-icon" part="expand-icon" class="select__expand-icon">
                <sl-icon library="system" name="chevron-down"></sl-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open?"true":"false"}
              aria-multiselectable=${this.multiple?"true":"false"}
              aria-labelledby="label"
              part="listbox"
              class="select__listbox"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
              @slotchange=${this.handleDefaultSlotChange}
            >
              <slot></slot>
            </div>
          </sl-popup>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};C.styles=[v.$,a.I,r],C.dependencies={"sl-icon":g.B,"sl-popup":n.m,"sl-tag":i.Q},(0,y.Cc)([(0,_.P)(".select")],C.prototype,"popup",2),(0,y.Cc)([(0,_.P)(".select__combobox")],C.prototype,"combobox",2),(0,y.Cc)([(0,_.P)(".select__display-input")],C.prototype,"displayInput",2),(0,y.Cc)([(0,_.P)(".select__value-input")],C.prototype,"valueInput",2),(0,y.Cc)([(0,_.P)(".select__listbox")],C.prototype,"listbox",2),(0,y.Cc)([(0,_.wk)()],C.prototype,"hasFocus",2),(0,y.Cc)([(0,_.wk)()],C.prototype,"displayLabel",2),(0,y.Cc)([(0,_.wk)()],C.prototype,"currentOption",2),(0,y.Cc)([(0,_.wk)()],C.prototype,"selectedOptions",2),(0,y.Cc)([(0,_.wk)()],C.prototype,"valueHasChanged",2),(0,y.Cc)([(0,_.MZ)()],C.prototype,"name",2),(0,y.Cc)([(0,_.wk)()],C.prototype,"value",1),(0,y.Cc)([(0,_.MZ)({attribute:"value"})],C.prototype,"defaultValue",2),(0,y.Cc)([(0,_.MZ)({reflect:!0})],C.prototype,"size",2),(0,y.Cc)([(0,_.MZ)()],C.prototype,"placeholder",2),(0,y.Cc)([(0,_.MZ)({type:Boolean,reflect:!0})],C.prototype,"multiple",2),(0,y.Cc)([(0,_.MZ)({attribute:"max-options-visible",type:Number})],C.prototype,"maxOptionsVisible",2),(0,y.Cc)([(0,_.MZ)({type:Boolean,reflect:!0})],C.prototype,"disabled",2),(0,y.Cc)([(0,_.MZ)({type:Boolean})],C.prototype,"clearable",2),(0,y.Cc)([(0,_.MZ)({type:Boolean,reflect:!0})],C.prototype,"open",2),(0,y.Cc)([(0,_.MZ)({type:Boolean})],C.prototype,"hoist",2),(0,y.Cc)([(0,_.MZ)({type:Boolean,reflect:!0})],C.prototype,"filled",2),(0,y.Cc)([(0,_.MZ)({type:Boolean,reflect:!0})],C.prototype,"pill",2),(0,y.Cc)([(0,_.MZ)()],C.prototype,"label",2),(0,y.Cc)([(0,_.MZ)({reflect:!0})],C.prototype,"placement",2),(0,y.Cc)([(0,_.MZ)({attribute:"help-text"})],C.prototype,"helpText",2),(0,y.Cc)([(0,_.MZ)({reflect:!0})],C.prototype,"form",2),(0,y.Cc)([(0,_.MZ)({type:Boolean,reflect:!0})],C.prototype,"required",2),(0,y.Cc)([(0,_.MZ)()],C.prototype,"getTag",2),(0,y.Cc)([(0,b.w)("disabled",{waitUntilFirstUpdate:!0})],C.prototype,"handleDisabledChange",1),(0,y.Cc)([(0,b.w)(["defaultValue","value"],{waitUntilFirstUpdate:!0})],C.prototype,"handleValueChange",1),(0,y.Cc)([(0,b.w)("open",{waitUntilFirstUpdate:!0})],C.prototype,"handleOpenChange",1),(0,d.Ee)("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}}),(0,d.Ee)("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}}),C.define("sl-select"),o(2062),o(8819),o(4360),o(3750),o(3585),o(4415),o(4637),o(8326),o(2089)},1860:(t,e,o)=>{function i(){return"undefined"!=typeof window}function s(t){return a(t)?(t.nodeName||"").toLowerCase():"#document"}function r(t){var e;return(null==t||null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function l(t){var e;return null==(e=(a(t)?t.ownerDocument:t.document)||window.document)?void 0:e.documentElement}function a(t){return!!i()&&(t instanceof Node||t instanceof r(t).Node)}function n(t){return!!i()&&(t instanceof Element||t instanceof r(t).Element)}function c(t){return!!i()&&(t instanceof HTMLElement||t instanceof r(t).HTMLElement)}function d(t){return!(!i()||"undefined"==typeof ShadowRoot)&&(t instanceof ShadowRoot||t instanceof r(t).ShadowRoot)}function h(t){const{overflow:e,overflowX:o,overflowY:i,display:s}=f(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+o)&&!["inline","contents"].includes(s)}function u(t){return["table","td","th"].includes(s(t))}function p(t){return[":popover-open",":modal"].some((e=>{try{return t.matches(e)}catch(t){return!1}}))}function m(t){const e=b(),o=n(t)?f(t):t;return["transform","translate","scale","rotate","perspective"].some((t=>!!o[t]&&"none"!==o[t]))||!!o.containerType&&"normal"!==o.containerType||!e&&!!o.backdropFilter&&"none"!==o.backdropFilter||!e&&!!o.filter&&"none"!==o.filter||["transform","translate","scale","rotate","perspective","filter"].some((t=>(o.willChange||"").includes(t)))||["paint","layout","strict","content"].some((t=>(o.contain||"").includes(t)))}function g(t){let e=w(t);for(;c(e)&&!v(e);){if(m(e))return e;if(p(e))return null;e=w(e)}return null}function b(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function v(t){return["html","body","#document"].includes(s(t))}function f(t){return r(t).getComputedStyle(t)}function y(t){return n(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function w(t){if("html"===s(t))return t;const e=t.assignedSlot||t.parentNode||d(t)&&t.host||l(t);return d(e)?e.host:e}function _(t){const e=w(t);return v(e)?t.ownerDocument?t.ownerDocument.body:t.body:c(e)&&h(e)?e:_(e)}function x(t,e,o){var i;void 0===e&&(e=[]),void 0===o&&(o=!0);const s=_(t),l=s===(null==(i=t.ownerDocument)?void 0:i.body),a=r(s);if(l){const t=C(a);return e.concat(a,a.visualViewport||[],h(s)?s:[],t&&o?x(t):[])}return e.concat(s,x(s,[],o))}function C(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}o.d(e,{$4:()=>w,CP:()=>y,L9:()=>f,Lv:()=>u,Tc:()=>b,Tf:()=>p,ZU:()=>h,_m:()=>C,ep:()=>l,eu:()=>v,gJ:()=>g,mq:()=>s,sQ:()=>m,sb:()=>c,v9:()=>x,vq:()=>n,zk:()=>r})},1931:(t,e,o)=>{o.d(e,{W:()=>i});var i=o(5024).AH`
  :host(:not(:focus-within)) {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    clip: rect(0 0 0 0) !important;
    clip-path: inset(50%) !important;
    border: none !important;
    overflow: hidden !important;
    white-space: nowrap !important;
    padding: 0 !important;
  }
`},1994:(t,e,o)=>{o(3389).B.define("sl-icon"),o(4415),o(4637),o(8326),o(2089),o(4302),o(7324),o(4815),o(3109)},2062:(t,e,o)=>{o.d(e,{g:()=>i});var i=o(5024).AH`
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
`},2089:(t,e,o)=>{o.d(e,{L:()=>i});var i=o(5024).AH`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`},2312:(t,e,o)=>{var i=o(541),s=o(4815),r=o(3109),l=o(5024),a=o(8146),n=[{max:276e4,value:6e4,unit:"minute"},{max:72e6,value:36e5,unit:"hour"},{max:5184e5,value:864e5,unit:"day"},{max:24192e5,value:6048e5,unit:"week"},{max:28512e6,value:2592e6,unit:"month"},{max:1/0,value:31536e6,unit:"year"}],c=class extends s.f{constructor(){super(...arguments),this.localize=new i.c(this),this.isoTime="",this.relativeTime="",this.date=new Date,this.format="long",this.numeric="auto",this.sync=!1}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.updateTimeout)}render(){const t=new Date,e=new Date(this.date);if(isNaN(e.getMilliseconds()))return this.relativeTime="",this.isoTime="","";const o=e.getTime()-t.getTime(),{unit:i,value:s}=n.find((t=>Math.abs(o)<t.max));if(this.isoTime=e.toISOString(),this.relativeTime=this.localize.relativeTime(Math.round(o/s),i,{numeric:this.numeric,style:this.format}),clearTimeout(this.updateTimeout),this.sync){let t;t=function(t){const e={second:1e3,minute:6e4,hour:36e5,day:864e5}[t];return e-Date.now()%e}("minute"===i?"second":"hour"===i?"minute":"day"===i?"hour":"day"),this.updateTimeout=window.setTimeout((()=>this.requestUpdate()),t)}return l.qy` <time datetime=${this.isoTime}>${this.relativeTime}</time> `}};(0,r.Cc)([(0,a.wk)()],c.prototype,"isoTime",2),(0,r.Cc)([(0,a.wk)()],c.prototype,"relativeTime",2),(0,r.Cc)([(0,a.MZ)()],c.prototype,"date",2),(0,r.Cc)([(0,a.MZ)()],c.prototype,"format",2),(0,r.Cc)([(0,a.MZ)()],c.prototype,"numeric",2),(0,r.Cc)([(0,a.MZ)({type:Boolean})],c.prototype,"sync",2),c.define("sl-relative-time"),o(3585)},2427:()=>{var t=(t,e)=>{let o=0;return function(...i){window.clearTimeout(o),o=window.setTimeout((()=>{t.call(this,...i)}),e)}},e=(t,e,o)=>{const i=t[e];t[e]=function(...t){i.call(this,...t),o.call(this,i,...t)}};(()=>{if("undefined"!=typeof window&&!("onscrollend"in window)){const o=new Set,i=new WeakMap,s=t=>{for(const e of t.changedTouches)o.add(e.identifier)},r=t=>{for(const e of t.changedTouches)o.delete(e.identifier)};document.addEventListener("touchstart",s,!0),document.addEventListener("touchend",r,!0),document.addEventListener("touchcancel",r,!0),e(EventTarget.prototype,"addEventListener",(function(e,s){if("scrollend"!==s)return;const r=t((()=>{o.size?r():this.dispatchEvent(new Event("scrollend"))}),100);e.call(this,"scroll",r,{passive:!0}),i.set(this,r)})),e(EventTarget.prototype,"removeEventListener",(function(t,e){if("scrollend"!==e)return;const o=i.get(this);o&&t.call(this,"scroll",o,{passive:!0})}))}})()},2428:(t,e,o)=>{o(9168).n.define("sl-dropdown"),o(5293),o(8678),o(4667),o(8819),o(5137),o(8511),o(541),o(3585),o(4302),o(7324),o(4815),o(3109)},2544:(t,e,o)=>{o(5997).o.define("sl-input"),o(6310),o(3088),o(1696),o(1736),o(541),o(3585),o(3389),o(4415),o(4637),o(8326),o(2089),o(4302),o(7324),o(4815),o(3109)},2558:(t,e,o)=>{o.d(e,{D:()=>r,j:()=>s});var i="";function s(t){i=t}function r(t=""){if(!i){const t=[...document.getElementsByTagName("script")],e=t.find((t=>t.hasAttribute("data-shoelace")));if(e)s(e.getAttribute("data-shoelace"));else{const e=t.find((t=>/shoelace(\.min)?\.js($|\?)/.test(t.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(t.src)));let o="";e&&(o=e.getAttribute("src")),s(o.split("/").slice(0,-1).join("/"))}}return i.replace(/\/$/,"")+(t?`/${t.replace(/^\//,"")}`:"")}},2591:t=>{var e=[];function o(t){for(var o=-1,i=0;i<e.length;i++)if(e[i].identifier===t){o=i;break}return o}function i(t,i){for(var r={},l=[],a=0;a<t.length;a++){var n=t[a],c=i.base?n[0]+i.base:n[0],d=r[c]||0,h="".concat(c," ").concat(d);r[c]=d+1;var u=o(h),p={css:n[1],media:n[2],sourceMap:n[3],supports:n[4],layer:n[5]};if(-1!==u)e[u].references++,e[u].updater(p);else{var m=s(p,i);i.byIndex=a,e.splice(a,0,{identifier:h,updater:m,references:1})}l.push(h)}return l}function s(t,e){var o=e.domAPI(e);return o.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;o.update(t=e)}else o.remove()}}t.exports=function(t,s){var r=i(t=t||[],s=s||{});return function(t){t=t||[];for(var l=0;l<r.length;l++){var a=o(r[l]);e[a].references--}for(var n=i(t,s),c=0;c<r.length;c++){var d=o(r[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}r=n}}},2725:(t,e,o)=>{o.d(e,{k:()=>i});var i=t=>{var e;const{activeElement:o}=document;o&&t.contains(o)&&(null==(e=document.activeElement)||e.blur())}},2985:(t,e,o)=>{var i=o(2725),s=o(4360),r=o(5137),l=o(1060),a=o(8511),n=o(4101),c=o(541),d=o(5024),h=d.AH`
  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-top-width: calc(var(--sl-panel-border-width) * 3);
    border-radius: var(--sl-border-radius-medium);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-normal);
    line-height: 1.6;
    color: var(--sl-color-neutral-700);
    margin: inherit;
    overflow: hidden;
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-large);
    padding-inline-start: var(--sl-spacing-large);
  }

  .alert--has-countdown {
    border-bottom: none;
  }

  .alert--primary {
    border-top-color: var(--sl-color-primary-600);
  }

  .alert--primary .alert__icon {
    color: var(--sl-color-primary-600);
  }

  .alert--success {
    border-top-color: var(--sl-color-success-600);
  }

  .alert--success .alert__icon {
    color: var(--sl-color-success-600);
  }

  .alert--neutral {
    border-top-color: var(--sl-color-neutral-600);
  }

  .alert--neutral .alert__icon {
    color: var(--sl-color-neutral-600);
  }

  .alert--warning {
    border-top-color: var(--sl-color-warning-600);
  }

  .alert--warning .alert__icon {
    color: var(--sl-color-warning-600);
  }

  .alert--danger {
    border-top-color: var(--sl-color-danger-600);
  }

  .alert--danger .alert__icon {
    color: var(--sl-color-danger-600);
  }

  .alert__message {
    flex: 1 1 auto;
    display: block;
    padding: var(--sl-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
    margin-inline-end: var(--sl-spacing-medium);
    align-self: center;
  }

  .alert__countdown {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: calc(var(--sl-panel-border-width) * 3);
    background-color: var(--sl-panel-border-color);
    display: flex;
  }

  .alert__countdown--ltr {
    justify-content: flex-end;
  }

  .alert__countdown .alert__countdown-elapsed {
    height: 100%;
    width: 0;
  }

  .alert--primary .alert__countdown-elapsed {
    background-color: var(--sl-color-primary-600);
  }

  .alert--success .alert__countdown-elapsed {
    background-color: var(--sl-color-success-600);
  }

  .alert--neutral .alert__countdown-elapsed {
    background-color: var(--sl-color-neutral-600);
  }

  .alert--warning .alert__countdown-elapsed {
    background-color: var(--sl-color-warning-600);
  }

  .alert--danger .alert__countdown-elapsed {
    background-color: var(--sl-color-danger-600);
  }

  .alert__timer {
    display: none;
  }
`,u=o(4302),p=o(7324),m=o(4815),g=o(3109),b=o(3788),v=o(8146),f=class t extends m.f{constructor(){super(...arguments),this.hasSlotController=new n.X(this,"icon","suffix"),this.localize=new c.c(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0,this.remainingTime=this.duration}static get toastStack(){return this.currentToastStack||(this.currentToastStack=Object.assign(document.createElement("div"),{className:"sl-toast-stack"})),this.currentToastStack}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){this.handleCountdownChange(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout((()=>this.hide()),this.duration),this.remainingTime=this.duration,this.remainingTimeInterval=window.setInterval((()=>{this.remainingTime-=100}),100))}pauseAutoHide(){var t;null==(t=this.countdownAnimation)||t.pause(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval)}resumeAutoHide(){var t;this.duration<1/0&&(this.autoHideTimeout=window.setTimeout((()=>this.hide()),this.remainingTime),this.remainingTimeInterval=window.setInterval((()=>{this.remainingTime-=100}),100),null==(t=this.countdownAnimation)||t.play())}handleCountdownChange(){if(this.open&&this.duration<1/0&&this.countdown){const{countdownElement:t}=this,e="100%",o="0";this.countdownAnimation=t.animate([{width:e},{width:o}],{duration:this.duration,easing:"linear"})}}handleCloseClick(){this.hide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await(0,a.Ey)(this.base),this.base.hidden=!1;const{keyframes:t,options:e}=(0,r.RB)(this,"alert.show",{dir:this.localize.dir()});await(0,a.jd)(this.base,t,e),this.emit("sl-after-show")}else{(0,i.k)(this),this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),await(0,a.Ey)(this.base);const{keyframes:t,options:e}=(0,r.RB)(this,"alert.hide",{dir:this.localize.dir()});await(0,a.jd)(this.base,t,e),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,(0,l.l)(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,(0,l.l)(this,"sl-after-hide")}async toast(){return new Promise((e=>{this.handleCountdownChange(),null===t.toastStack.parentElement&&document.body.append(t.toastStack),t.toastStack.appendChild(this),requestAnimationFrame((()=>{this.clientWidth,this.show()})),this.addEventListener("sl-after-hide",(()=>{t.toastStack.removeChild(this),e(),null===t.toastStack.querySelector("sl-alert")&&t.toastStack.remove()}),{once:!0})}))}render(){return d.qy`
      <div
        part="base"
        class=${(0,b.H)({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-countdown":!!this.countdown,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":"primary"===this.variant,"alert--success":"success"===this.variant,"alert--neutral":"neutral"===this.variant,"alert--warning":"warning"===this.variant,"alert--danger":"danger"===this.variant})}
        role="alert"
        aria-hidden=${this.open?"false":"true"}
        @mouseenter=${this.pauseAutoHide}
        @mouseleave=${this.resumeAutoHide}
      >
        <div part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </div>

        <div part="message" class="alert__message" aria-live="polite">
          <slot></slot>
        </div>

        ${this.closable?d.qy`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                @click=${this.handleCloseClick}
              ></sl-icon-button>
            `:""}

        <div role="timer" class="alert__timer">${this.remainingTime}</div>

        ${this.countdown?d.qy`
              <div
                class=${(0,b.H)({alert__countdown:!0,"alert__countdown--ltr":"ltr"===this.countdown})}
              >
                <div class="alert__countdown-elapsed"></div>
              </div>
            `:""}
      </div>
    `}};f.styles=[p.$,h],f.dependencies={"sl-icon-button":s.h},(0,g.Cc)([(0,v.P)('[part~="base"]')],f.prototype,"base",2),(0,g.Cc)([(0,v.P)(".alert__countdown-elapsed")],f.prototype,"countdownElement",2),(0,g.Cc)([(0,v.MZ)({type:Boolean,reflect:!0})],f.prototype,"open",2),(0,g.Cc)([(0,v.MZ)({type:Boolean,reflect:!0})],f.prototype,"closable",2),(0,g.Cc)([(0,v.MZ)({reflect:!0})],f.prototype,"variant",2),(0,g.Cc)([(0,v.MZ)({type:Number})],f.prototype,"duration",2),(0,g.Cc)([(0,v.MZ)({type:String,reflect:!0})],f.prototype,"countdown",2),(0,g.Cc)([(0,v.wk)()],f.prototype,"remainingTime",2),(0,g.Cc)([(0,u.w)("open",{waitUntilFirstUpdate:!0})],f.prototype,"handleOpenChange",1),(0,g.Cc)([(0,u.w)("duration")],f.prototype,"handleDurationChange",1);var y=f;(0,r.Ee)("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}}),(0,r.Ee)("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}}),y.define("sl-alert"),o(3750),o(3585),o(3389),o(4415),o(4637),o(8326),o(2089)},3051:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},3088:(t,e,o)=>{o.d(e,{J:()=>s});var i=o(5024),s=(t="value")=>(e,o)=>{const s=e.constructor,r=s.prototype.attributeChangedCallback;s.prototype.attributeChangedCallback=function(e,l,a){var n;const c=s.getPropertyOptions(t);if(e===("string"==typeof c.attribute?c.attribute:t)){const e=c.converter||i.W3,s=("function"==typeof e?e:null!=(n=null==e?void 0:e.fromAttribute)?n:i.W3.fromAttribute)(a,c.type);this[t]!==s&&(this[o]=s)}r.call(this,e,l,a)}}},3109:(t,e,o)=>{o.d(e,{Cc:()=>g,IA:()=>p,OV:()=>y,S7:()=>v,VK:()=>f,ko:()=>m,y0:()=>_});var i=Object.defineProperty,s=Object.defineProperties,r=Object.getOwnPropertyDescriptor,l=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),h=t=>{throw TypeError(t)},u=(t,e,o)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,p=(t,e)=>{for(var o in e||(e={}))n.call(e,o)&&u(t,o,e[o]);if(a)for(var o of a(e))c.call(e,o)&&u(t,o,e[o]);return t},m=(t,e)=>s(t,l(e)),g=(t,e,o,s)=>{for(var l,a=s>1?void 0:s?r(e,o):e,n=t.length-1;n>=0;n--)(l=t[n])&&(a=(s?l(e,o,a):l(a))||a);return s&&a&&i(e,o,a),a},b=(t,e,o)=>e.has(t)||h("Cannot "+o),v=(t,e,o)=>(b(t,e,"read from private field"),o?o.call(t):e.get(t)),f=(t,e,o)=>e.has(t)?h("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,o),y=(t,e,o,i)=>(b(t,e,"write to private field"),i?i.call(t,o):e.set(t,o),o),w=function(t,e){this[0]=t,this[1]=e},_=t=>{var e,o=t[d("asyncIterator")],i=!1,s={};return null==o?(o=t[d("iterator")](),e=t=>s[t]=e=>o[t](e)):(o=o.call(t),e=t=>s[t]=e=>{if(i){if(i=!1,"throw"===t)throw e;return e}return i=!0,{done:!1,value:new w(new Promise((i=>{var s=o[t](e);s instanceof Object||h("Object expected"),i(s)})),1)}}),s[d("iterator")]=()=>s,e("next"),"throw"in o?e("throw"):s.throw=t=>{throw t},"return"in o&&e("return"),s}},3119:(t,e,o)=>{var i=o(5024),s=i.AH`
  :host {
    display: block;
  }

  .details {
    border: solid 1px var(--sl-color-neutral-200);
    border-radius: var(--sl-border-radius-medium);
    background-color: var(--sl-color-neutral-0);
    overflow-anchor: none;
  }

  .details--disabled {
    opacity: 0.5;
  }

  .details__header {
    display: flex;
    align-items: center;
    border-radius: inherit;
    padding: var(--sl-spacing-medium);
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
  }

  .details__header::-webkit-details-marker {
    display: none;
  }

  .details__header:focus {
    outline: none;
  }

  .details__header:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: calc(1px + var(--sl-focus-ring-offset));
  }

  .details--disabled .details__header {
    cursor: not-allowed;
  }

  .details--disabled .details__header:focus-visible {
    outline: none;
    box-shadow: none;
  }

  .details__summary {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
  }

  .details__summary-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
  }

  .details--open .details__summary-icon {
    rotate: 90deg;
  }

  .details--open.details--rtl .details__summary-icon {
    rotate: -90deg;
  }

  .details--open slot[name='expand-icon'],
  .details:not(.details--open) slot[name='collapse-icon'] {
    display: none;
  }

  .details__body {
    overflow: hidden;
  }

  .details__content {
    display: block;
    padding: var(--sl-spacing-medium);
  }
`,r=o(5137),l=o(1060),a=o(8511),n=o(541),c=o(3389),d=o(4302),h=o(7324),u=o(4815),p=o(3109),m=o(3788),g=o(8146),b=class extends u.f{constructor(){super(...arguments),this.localize=new n.c(this),this.open=!1,this.disabled=!1}firstUpdated(){this.body.style.height=this.open?"auto":"0",this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver((t=>{for(const e of t)"attributes"===e.type&&"open"===e.attributeName&&(this.details.open?this.show():this.hide())})),this.detailsObserver.observe(this.details,{attributes:!0})}disconnectedCallback(){var t;super.disconnectedCallback(),null==(t=this.detailsObserver)||t.disconnect()}handleSummaryClick(t){t.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(t){"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),this.open?this.hide():this.show()),"ArrowUp"!==t.key&&"ArrowLeft"!==t.key||(t.preventDefault(),this.hide()),"ArrowDown"!==t.key&&"ArrowRight"!==t.key||(t.preventDefault(),this.show())}async handleOpenChange(){if(this.open){if(this.details.open=!0,this.emit("sl-show",{cancelable:!0}).defaultPrevented)return this.open=!1,void(this.details.open=!1);await(0,a.Ey)(this.body);const{keyframes:t,options:e}=(0,r.RB)(this,"details.show",{dir:this.localize.dir()});await(0,a.jd)(this.body,(0,a.dc)(t,this.body.scrollHeight),e),this.body.style.height="auto",this.emit("sl-after-show")}else{if(this.emit("sl-hide",{cancelable:!0}).defaultPrevented)return this.details.open=!0,void(this.open=!0);await(0,a.Ey)(this.body);const{keyframes:t,options:e}=(0,r.RB)(this,"details.hide",{dir:this.localize.dir()});await(0,a.jd)(this.body,(0,a.dc)(t,this.body.scrollHeight),e),this.body.style.height="auto",this.details.open=!1,this.emit("sl-after-hide")}}async show(){if(!this.open&&!this.disabled)return this.open=!0,(0,l.l)(this,"sl-after-show")}async hide(){if(this.open&&!this.disabled)return this.open=!1,(0,l.l)(this,"sl-after-hide")}render(){const t="rtl"===this.localize.dir();return i.qy`
      <details
        part="base"
        class=${(0,m.H)({details:!0,"details--open":this.open,"details--disabled":this.disabled,"details--rtl":t})}
      >
        <summary
          part="header"
          id="header"
          class="details__header"
          role="button"
          aria-expanded=${this.open?"true":"false"}
          aria-controls="content"
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
          @click=${this.handleSummaryClick}
          @keydown=${this.handleSummaryKeyDown}
        >
          <slot name="summary" part="summary" class="details__summary">${this.summary}</slot>

          <span part="summary-icon" class="details__summary-icon">
            <slot name="expand-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot name="collapse-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </span>
        </summary>

        <div class="details__body" role="region" aria-labelledby="header">
          <slot part="content" id="content" class="details__content"></slot>
        </div>
      </details>
    `}};b.styles=[h.$,s],b.dependencies={"sl-icon":c.B},(0,p.Cc)([(0,g.P)(".details")],b.prototype,"details",2),(0,p.Cc)([(0,g.P)(".details__header")],b.prototype,"header",2),(0,p.Cc)([(0,g.P)(".details__body")],b.prototype,"body",2),(0,p.Cc)([(0,g.P)(".details__expand-icon-slot")],b.prototype,"expandIconSlot",2),(0,p.Cc)([(0,g.MZ)({type:Boolean,reflect:!0})],b.prototype,"open",2),(0,p.Cc)([(0,g.MZ)()],b.prototype,"summary",2),(0,p.Cc)([(0,g.MZ)({type:Boolean,reflect:!0})],b.prototype,"disabled",2),(0,p.Cc)([(0,d.w)("open",{waitUntilFirstUpdate:!0})],b.prototype,"handleOpenChange",1),(0,r.Ee)("details.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:250,easing:"linear"}}),(0,r.Ee)("details.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:250,easing:"linear"}}),b.define("sl-details"),o(3585),o(4415),o(4637),o(8326),o(2089)},3169:(t,e,o)=>{o.d(e,{mN:()=>S,AH:()=>n,W3:()=>$,Ec:()=>z});const i=globalThis,s=i.ShadowRoot&&(void 0===i.ShadyCSS||i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),l=new WeakMap;class a{constructor(t,e,o){if(this._$cssResult$=!0,o!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(s&&void 0===t){const o=void 0!==e&&1===e.length;o&&(t=l.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&l.set(e,t))}return t}toString(){return this.cssText}}const n=function(t){for(var e=arguments.length,o=new Array(e>1?e-1:0),i=1;i<e;i++)o[i-1]=arguments[i];const s=1===t.length?t[0]:o.reduce(((e,o,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[i+1]),t[0]);return new a(s,t,r)},c=(t,e)=>{if(s)t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const o of e){const e=document.createElement("style"),s=i.litNonce;void 0!==s&&e.setAttribute("nonce",s),e.textContent=o.cssText,t.appendChild(e)}},d=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return(t=>new a("string"==typeof t?t:t+"",void 0,r))(e)})(t):t;var h,u,p;const{is:m,defineProperty:g,getOwnPropertyDescriptor:b,getOwnPropertyNames:v,getOwnPropertySymbols:f,getPrototypeOf:y}=Object,w=globalThis,_=w.trustedTypes,x=_?_.emptyScript:"",C=w.reactiveElementPolyfillSupport,k=(t,e)=>t,$={toAttribute(t,e){switch(e){case Boolean:t=t?x:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=null!==t;break;case Number:o=null===t?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t)}catch(t){o=null}}return o}},z=(t,e)=>!m(t,e),A={attribute:!0,type:String,converter:$,reflect:!1,hasChanged:z};null!==(h=Symbol.metadata)&&void 0!==h||(Symbol.metadata=Symbol("metadata")),null!==(u=w.litPropertyMetadata)&&void 0!==u||(w.litPropertyMetadata=new WeakMap);class S extends HTMLElement{static addInitializer(t){var e;this._$Ei(),(null!==(e=this.l)&&void 0!==e?e:this.l=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:A;if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const o=Symbol(),i=this.getPropertyDescriptor(t,o,e);void 0!==i&&g(this.prototype,t,i)}}static getPropertyDescriptor(t,e,o){var i;const{get:s,set:r}=null!==(i=b(this.prototype,t))&&void 0!==i?i:{get(){return this[e]},set(t){this[e]=t}};return{get(){return null==s?void 0:s.call(this)},set(e){const i=null==s?void 0:s.call(this);r.call(this,e),this.requestUpdate(t,i,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){var e;return null!==(e=this.elementProperties.get(t))&&void 0!==e?e:A}static _$Ei(){if(this.hasOwnProperty(k("elementProperties")))return;const t=y(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(k("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(k("properties"))){const t=this.properties,e=[...v(t),...f(t)];for(const o of e)this.createProperty(o,t[o])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,o]of e)this.elementProperties.set(t,o)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const o=this._$Eu(t,e);void 0!==o&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const t of o)e.unshift(d(t))}else void 0!==t&&e.push(d(t));return e}static _$Eu(t,e){const o=e.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,o;(null!==(e=this._$EO)&&void 0!==e?e:this._$EO=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&(null===(o=t.hostConnected)||void 0===o||o.call(t))}removeController(t){var e;null===(e=this._$EO)||void 0===e||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const o of e.keys())this.hasOwnProperty(o)&&(t.set(o,this[o]),delete this[o]);t.size>0&&(this._$Ep=t)}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return c(e,this.constructor.elementStyles),e}connectedCallback(){var t,e;null!==(t=this.renderRoot)&&void 0!==t||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$EO)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$EO)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$EC(t,e){const o=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,o);if(void 0!==i&&!0===o.reflect){var s;const r=(void 0!==(null===(s=o.converter)||void 0===s?void 0:s.toAttribute)?o.converter:$).toAttribute(e,o.type);this._$Em=t,null==r?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(t,e){const o=this.constructor,i=o._$Eh.get(t);if(void 0!==i&&this._$Em!==i){var s;const t=o.getPropertyOptions(i),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:$;this._$Em=i,this[i]=r.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,o){if(void 0!==t){var i;if(null!=o||(o=this.constructor.getPropertyOptions(t)),!(null!==(i=o.hasChanged)&&void 0!==i?i:z)(this[t],e))return;this.P(t,e,o)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,o){var i;this._$AL.has(t)||this._$AL.set(t,e),!0===o.reflect&&this._$Em!==t&&(null!==(i=this._$Ej)&&void 0!==i?i:this._$Ej=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){var t;if(null!==(t=this.renderRoot)&&void 0!==t||(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,o]of e)!0!==o.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],o)}let e=!1;const o=this._$AL;try{var i;e=this.shouldUpdate(o),e?(this.willUpdate(o),null!==(i=this._$EO)&&void 0!==i&&i.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(o)):this._$EU()}catch(o){throw e=!1,this._$EU(),o}e&&this._$AE(o)}willUpdate(t){}_$AE(t){var e;null!==(e=this._$EO)&&void 0!==e&&e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach((t=>this._$EC(t,this[t])))),this._$EU()}updated(t){}firstUpdated(t){}}S.elementStyles=[],S.shadowRootOptions={mode:"open"},S[k("elementProperties")]=new Map,S[k("finalized")]=new Map,null!=C&&C({ReactiveElement:S}),(null!==(p=w.reactiveElementVersions)&&void 0!==p?p:w.reactiveElementVersions=[]).push("2.0.4")},3253:(t,e,o)=>{var i=o(5024),s=i.AH`
  :host {
    --control-box-size: 3rem;
    --icon-size: calc(var(--control-box-size) * 0.625);

    display: inline-flex;
    position: relative;
    cursor: pointer;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  img[aria-hidden='true'] {
    display: none;
  }

  .animated-image__control-box {
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    top: calc(50% - var(--control-box-size) / 2);
    right: calc(50% - var(--control-box-size) / 2);
    width: var(--control-box-size);
    height: var(--control-box-size);
    font-size: var(--icon-size);
    background: none;
    border: solid 2px currentColor;
    background-color: rgb(0 0 0 /50%);
    border-radius: var(--sl-border-radius-circle);
    color: white;
    pointer-events: none;
    transition: var(--sl-transition-fast) opacity;
  }

  :host([play]:hover) .animated-image__control-box {
    opacity: 1;
  }

  :host([play]:not(:hover)) .animated-image__control-box {
    opacity: 0;
  }

  :host([play]) slot[name='play-icon'],
  :host(:not([play])) slot[name='pause-icon'] {
    display: none;
  }
`,r=o(3389),l=o(4302),a=o(7324),n=o(4815),c=o(3109),d=o(8146),h=class extends n.f{constructor(){super(...arguments),this.isLoaded=!1}handleClick(){this.play=!this.play}handleLoad(){const t=document.createElement("canvas"),{width:e,height:o}=this.animatedImage;t.width=e,t.height=o,t.getContext("2d").drawImage(this.animatedImage,0,0,e,o),this.frozenFrame=t.toDataURL("image/gif"),this.isLoaded||(this.emit("sl-load"),this.isLoaded=!0)}handleError(){this.emit("sl-error")}handlePlayChange(){this.play&&(this.animatedImage.src="",this.animatedImage.src=this.src)}handleSrcChange(){this.isLoaded=!1}render(){return i.qy`
      <div class="animated-image">
        <img
          class="animated-image__animated"
          src=${this.src}
          alt=${this.alt}
          crossorigin="anonymous"
          aria-hidden=${this.play?"false":"true"}
          @click=${this.handleClick}
          @load=${this.handleLoad}
          @error=${this.handleError}
        />

        ${this.isLoaded?i.qy`
              <img
                class="animated-image__frozen"
                src=${this.frozenFrame}
                alt=${this.alt}
                aria-hidden=${this.play?"true":"false"}
                @click=${this.handleClick}
              />

              <div part="control-box" class="animated-image__control-box">
                <slot name="play-icon"><sl-icon name="play-fill" library="system"></sl-icon></slot>
                <slot name="pause-icon"><sl-icon name="pause-fill" library="system"></sl-icon></slot>
              </div>
            `:""}
      </div>
    `}};h.styles=[a.$,s],h.dependencies={"sl-icon":r.B},(0,c.Cc)([(0,d.P)(".animated-image__animated")],h.prototype,"animatedImage",2),(0,c.Cc)([(0,d.wk)()],h.prototype,"frozenFrame",2),(0,c.Cc)([(0,d.wk)()],h.prototype,"isLoaded",2),(0,c.Cc)([(0,d.MZ)()],h.prototype,"src",2),(0,c.Cc)([(0,d.MZ)()],h.prototype,"alt",2),(0,c.Cc)([(0,d.MZ)({type:Boolean,reflect:!0})],h.prototype,"play",2),(0,c.Cc)([(0,l.w)("play",{waitUntilFirstUpdate:!0})],h.prototype,"handlePlayChange",1),(0,c.Cc)([(0,l.w)("src")],h.prototype,"handleSrcChange",1),h.define("sl-animated-image"),o(4415),o(4637),o(8326),o(2089)},3348:(t,e,o)=>{o.d(e,{Rt:()=>l,mY:()=>n,qb:()=>r});var i=o(4716);const{I:s}=i.ge,r=(t,e)=>void 0===e?void 0!==(null==t?void 0:t._$litType$):(null==t?void 0:t._$litType$)===e,l=t=>void 0===t.strings,a={},n=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a;return t._$AH=e}},3358:(t,e,o)=>{o.d(e,{_:()=>l});var i=o(4716),s=o(5128);class r extends s.WL{constructor(t){if(super(t),this.it=i.s6,t.type!==s.OA.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===i.s6||null==t)return this._t=void 0,this.it=t;if(t===i.c0)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}r.directiveName="unsafeHTML",r.resultType=1;const l=(0,s.u$)(r)},3389:(t,e,o)=>{o.d(e,{B:()=>b});var i,s=o(4415),r=o(2089),l=o(4302),a=o(7324),n=o(4815),c=o(3109),d=o(5024),h=o(3348),u=o(8146),p=Symbol(),m=Symbol(),g=new Map,b=class extends n.f{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(t,e){var o;let s;if(null==e?void 0:e.spriteSheet)return this.svg=d.qy`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`,this.svg;try{if(s=await fetch(t,{mode:"cors"}),!s.ok)return 410===s.status?p:m}catch(t){return m}try{const t=document.createElement("div");t.innerHTML=await s.text();const e=t.firstElementChild;if("svg"!==(null==(o=null==e?void 0:e.tagName)?void 0:o.toLowerCase()))return p;i||(i=new DOMParser);const r=i.parseFromString(e.outerHTML,"text/html").body.querySelector("svg");return r?(r.part.add("svg"),document.adoptNode(r)):p}catch(t){return p}}connectedCallback(){super.connectedCallback(),(0,s.pA)(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),(0,s.cl)(this)}getIconSource(){const t=(0,s.Hh)(this.library);return this.name&&t?{url:t.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){"string"==typeof this.label&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var t;const{url:e,fromLibrary:o}=this.getIconSource(),i=o?(0,s.Hh)(this.library):void 0;if(!e)return void(this.svg=null);let r=g.get(e);if(r||(r=this.resolveIcon(e,i),g.set(e,r)),!this.initialRender)return;const l=await r;if(l===m&&g.delete(e),e===this.getIconSource().url)if((0,h.qb)(l)){if(this.svg=l,i){await this.updateComplete;const t=this.shadowRoot.querySelector("[part='svg']");"function"==typeof i.mutator&&t&&i.mutator(t)}}else switch(l){case m:case p:this.svg=null,this.emit("sl-error");break;default:this.svg=l.cloneNode(!0),null==(t=null==i?void 0:i.mutator)||t.call(i,this.svg),this.emit("sl-load")}}render(){return this.svg}};b.styles=[a.$,r.L],(0,c.Cc)([(0,u.wk)()],b.prototype,"svg",2),(0,c.Cc)([(0,u.MZ)({reflect:!0})],b.prototype,"name",2),(0,c.Cc)([(0,u.MZ)()],b.prototype,"src",2),(0,c.Cc)([(0,u.MZ)()],b.prototype,"label",2),(0,c.Cc)([(0,u.MZ)({reflect:!0})],b.prototype,"library",2),(0,c.Cc)([(0,l.w)("label")],b.prototype,"handleLabelChange",1),(0,c.Cc)([(0,l.w)(["name","src","library"])],b.prototype,"setIcon",1)},3443:(t,e,o)=>{o.d(e,{q:()=>i});var i=o(5024).AH`
  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--sl-transition-x-fast) background-color,
      var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border,
      var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host([data-sl-button-group__button--first]:not([data-sl-button-group__button--last])) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host([data-sl-button-group__button--inner]) .button {
    border-radius: 0;
  }

  :host([data-sl-button-group__button--last]:not([data-sl-button-group__button--first])) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host([data-sl-button-group__button]:not([data-sl-button-group__button--first])) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      [data-sl-button-group__button]:not(
          [data-sl-button-group__button--first],
          [data-sl-button-group__button--radio],
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host([data-sl-button-group__button--hover]) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host([data-sl-button-group__button--focus]),
  :host([data-sl-button-group__button][checked]) {
    z-index: 2;
  }
`},3585:(t,e,o)=>{o.d(e,{k:()=>s});var i={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>0===t?"No options selected":1===t?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format"};(0,o(5258).XC)(i);var s=i},3656:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},3750:(t,e,o)=>{o.d(e,{Y:()=>i});var i=o(5024).AH`
  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`},3767:(t,e,o)=>{var i=o(5024),s=i.AH`
  :host {
    display: inline-block;

    --size: 3rem;
  }

  .avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: var(--size);
    height: var(--size);
    background-color: var(--sl-color-neutral-400);
    font-family: var(--sl-font-sans);
    font-size: calc(var(--size) * 0.5);
    font-weight: var(--sl-font-weight-normal);
    color: var(--sl-color-neutral-0);
    user-select: none;
    -webkit-user-select: none;
    vertical-align: middle;
  }

  .avatar--circle,
  .avatar--circle .avatar__image {
    border-radius: var(--sl-border-radius-circle);
  }

  .avatar--rounded,
  .avatar--rounded .avatar__image {
    border-radius: var(--sl-border-radius-medium);
  }

  .avatar--square {
    border-radius: 0;
  }

  .avatar__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .avatar__initials {
    line-height: 1;
    text-transform: uppercase;
  }

  .avatar__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }
`,r=o(3389),l=o(4302),a=o(7324),n=o(4815),c=o(3109),d=o(3788),h=o(8146),u=class extends n.f{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}handleImageLoadError(){this.hasError=!0,this.emit("sl-error")}render(){const t=i.qy`
      <img
        part="image"
        class="avatar__image"
        src="${this.image}"
        loading="${this.loading}"
        alt=""
        @error="${this.handleImageLoadError}"
      />
    `;let e=i.qy``;return e=this.initials?i.qy`<div part="initials" class="avatar__initials">${this.initials}</div>`:i.qy`
        <div part="icon" class="avatar__icon" aria-hidden="true">
          <slot name="icon">
            <sl-icon name="person-fill" library="system"></sl-icon>
          </slot>
        </div>
      `,i.qy`
      <div
        part="base"
        class=${(0,d.H)({avatar:!0,"avatar--circle":"circle"===this.shape,"avatar--rounded":"rounded"===this.shape,"avatar--square":"square"===this.shape})}
        role="img"
        aria-label=${this.label}
      >
        ${this.image&&!this.hasError?t:e}
      </div>
    `}};u.styles=[a.$,s],u.dependencies={"sl-icon":r.B},(0,c.Cc)([(0,h.wk)()],u.prototype,"hasError",2),(0,c.Cc)([(0,h.MZ)()],u.prototype,"image",2),(0,c.Cc)([(0,h.MZ)()],u.prototype,"label",2),(0,c.Cc)([(0,h.MZ)()],u.prototype,"initials",2),(0,c.Cc)([(0,h.MZ)()],u.prototype,"loading",2),(0,c.Cc)([(0,h.MZ)({reflect:!0})],u.prototype,"shape",2),(0,c.Cc)([(0,l.w)("image")],u.prototype,"handleImageChange",1),u.define("sl-avatar"),o(4415),o(4637),o(8326),o(2089)},3781:(t,e,o)=>{var i=o(5024),s=i.AH`
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
`,r=o(3088),l=o(1696),a=o(1736),n=o(4101),c=o(541),d=o(4302),h=o(7324),u=o(4815),p=o(3109),m=o(3788),g=o(8146),b=o(996),v=o(33),f=class extends u.f{constructor(){super(...arguments),this.formControlController=new a.Ud(this),this.hasSlotController=new n.X(this,"help-text","label"),this.localize=new c.c(this),this.hasFocus=!1,this.hasTooltip=!1,this.title="",this.name="",this.value=0,this.label="",this.helpText="",this.disabled=!1,this.min=0,this.max=100,this.step=1,this.tooltip="top",this.tooltipFormatter=t=>t.toString(),this.form="",this.defaultValue=0}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver((()=>this.syncRange())),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max),this.updateComplete.then((()=>{this.syncRange(),this.resizeObserver.observe(this.input)}))}disconnectedCallback(){var t;super.disconnectedCallback(),null==(t=this.resizeObserver)||t.unobserve(this.input)}handleChange(){this.emit("sl-change")}handleInput(){this.value=parseFloat(this.input.value),this.emit("sl-input"),this.syncRange()}handleBlur(){this.hasFocus=!1,this.hasTooltip=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.hasTooltip=!0,this.emit("sl-focus")}handleThumbDragStart(){this.hasTooltip=!0}handleThumbDragEnd(){this.hasTooltip=!1}syncProgress(t){this.input.style.setProperty("--percent",100*t+"%")}syncTooltip(t){if(null!==this.output){const e=this.input.offsetWidth,o=this.output.offsetWidth,i=getComputedStyle(this.input).getPropertyValue("--thumb-size"),s=e*t;if("rtl"===this.localize.dir()){const r=`${e-s}px + ${t} * ${i}`;this.output.style.translate=`calc((${r} - ${o/2}px - ${i} / 2))`}else{const e=`${s}px - ${t} * ${i}`;this.output.style.translate=`calc(${e} - ${o/2}px + ${i} / 2)`}}}handleValueChange(){this.formControlController.updateValidity(),this.input.value=this.value.toString(),this.value=parseFloat(this.input.value),this.syncRange()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}syncRange(){const t=Math.max(0,(this.value-this.min)/(this.max-this.min));this.syncProgress(t),"none"!==this.tooltip&&this.hasTooltip&&this.updateComplete.then((()=>this.syncTooltip(t)))}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}focus(t){this.input.focus(t)}blur(){this.input.blur()}stepUp(){this.input.stepUp(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}stepDown(){this.input.stepDown(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),o=!!this.label||!!t,s=!!this.helpText||!!e;return i.qy`
      <div
        part="form-control"
        class=${(0,m.H)({"form-control":!0,"form-control--medium":!0,"form-control--has-label":o,"form-control--has-help-text":s})}
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
            class=${(0,m.H)({range:!0,"range--disabled":this.disabled,"range--focused":this.hasFocus,"range--rtl":"rtl"===this.localize.dir(),"range--tooltip-visible":this.hasTooltip,"range--tooltip-top":"top"===this.tooltip,"range--tooltip-bottom":"bottom"===this.tooltip})}
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
              name=${(0,b.J)(this.name)}
              ?disabled=${this.disabled}
              min=${(0,b.J)(this.min)}
              max=${(0,b.J)(this.max)}
              step=${(0,b.J)(this.step)}
              .value=${(0,v.V)(this.value.toString())}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @focus=${this.handleFocus}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @blur=${this.handleBlur}
            />
            ${"none"===this.tooltip||this.disabled?"":i.qy`
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
          aria-hidden=${s?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};f.styles=[h.$,l.I,s],(0,p.Cc)([(0,g.P)(".range__control")],f.prototype,"input",2),(0,p.Cc)([(0,g.P)(".range__tooltip")],f.prototype,"output",2),(0,p.Cc)([(0,g.wk)()],f.prototype,"hasFocus",2),(0,p.Cc)([(0,g.wk)()],f.prototype,"hasTooltip",2),(0,p.Cc)([(0,g.MZ)()],f.prototype,"title",2),(0,p.Cc)([(0,g.MZ)()],f.prototype,"name",2),(0,p.Cc)([(0,g.MZ)({type:Number})],f.prototype,"value",2),(0,p.Cc)([(0,g.MZ)()],f.prototype,"label",2),(0,p.Cc)([(0,g.MZ)({attribute:"help-text"})],f.prototype,"helpText",2),(0,p.Cc)([(0,g.MZ)({type:Boolean,reflect:!0})],f.prototype,"disabled",2),(0,p.Cc)([(0,g.MZ)({type:Number})],f.prototype,"min",2),(0,p.Cc)([(0,g.MZ)({type:Number})],f.prototype,"max",2),(0,p.Cc)([(0,g.MZ)({type:Number})],f.prototype,"step",2),(0,p.Cc)([(0,g.MZ)()],f.prototype,"tooltip",2),(0,p.Cc)([(0,g.MZ)({attribute:!1})],f.prototype,"tooltipFormatter",2),(0,p.Cc)([(0,g.MZ)({reflect:!0})],f.prototype,"form",2),(0,p.Cc)([(0,r.J)()],f.prototype,"defaultValue",2),(0,p.Cc)([(0,g.Ls)({passive:!0})],f.prototype,"handleThumbDragStart",1),(0,p.Cc)([(0,d.w)("value",{waitUntilFirstUpdate:!0})],f.prototype,"handleValueChange",1),(0,p.Cc)([(0,d.w)("disabled",{waitUntilFirstUpdate:!0})],f.prototype,"handleDisabledChange",1),(0,p.Cc)([(0,d.w)("hasTooltip",{waitUntilFirstUpdate:!0})],f.prototype,"syncRange",1),f.define("sl-range"),o(3585)},3788:(t,e,o)=>{o.d(e,{H:()=>r});var i=o(4716),s=o(5128);const r=(0,s.u$)(class extends s.WL{constructor(t){var e;if(super(t),t.type!==s.OA.ATTRIBUTE||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,e){let[o]=e;if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in o){var s;o[t]&&(null===(s=this.nt)||void 0===s||!s.has(t))&&this.st.add(t)}return this.render(o)}const r=t.element.classList;for(const t of this.st)t in o||(r.remove(t),this.st.delete(t));for(const t in o){var l;const e=!!o[t];e===this.st.has(t)||(null===(l=this.nt)||void 0===l?void 0:l.has(t))||(e?(r.add(t),this.st.add(t)):(r.remove(t),this.st.delete(t)))}return i.c0}})},3921:(t,e,o)=>{var i=o(7240),s=o(5997),r=o(4319),l=o(9168),a=o(3088),n=o(5024),c=n.AH`
  :host {
    --grid-width: 280px;
    --grid-height: 200px;
    --grid-handle-size: 16px;
    --slider-height: 15px;
    --slider-handle-size: 17px;
    --swatch-size: 25px;

    display: inline-block;
  }

  .color-picker {
    width: var(--grid-width);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    color: var(--color);
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    user-select: none;
    -webkit-user-select: none;
  }

  .color-picker--inline {
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
  }

  .color-picker--inline:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__grid {
    position: relative;
    height: var(--grid-height);
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%),
      linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%);
    border-top-left-radius: var(--sl-border-radius-medium);
    border-top-right-radius: var(--sl-border-radius-medium);
    cursor: crosshair;
    forced-color-adjust: none;
  }

  .color-picker__grid-handle {
    position: absolute;
    width: var(--grid-handle-size);
    height: var(--grid-handle-size);
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    border: solid 2px white;
    margin-top: calc(var(--grid-handle-size) / -2);
    margin-left: calc(var(--grid-handle-size) / -2);
    transition: var(--sl-transition-fast) scale;
  }

  .color-picker__grid-handle--dragging {
    cursor: none;
    scale: 1.5;
  }

  .color-picker__grid-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__controls {
    padding: var(--sl-spacing-small);
    display: flex;
    align-items: center;
  }

  .color-picker__sliders {
    flex: 1 1 auto;
  }

  .color-picker__slider {
    position: relative;
    height: var(--slider-height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);
    forced-color-adjust: none;
  }

  .color-picker__slider:not(:last-of-type) {
    margin-bottom: var(--sl-spacing-small);
  }

  .color-picker__slider-handle {
    position: absolute;
    top: calc(50% - var(--slider-handle-size) / 2);
    width: var(--slider-handle-size);
    height: var(--slider-handle-size);
    background-color: white;
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    margin-left: calc(var(--slider-handle-size) / -2);
  }

  .color-picker__slider-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__hue {
    background-image: linear-gradient(
      to right,
      rgb(255, 0, 0) 0%,
      rgb(255, 255, 0) 17%,
      rgb(0, 255, 0) 33%,
      rgb(0, 255, 255) 50%,
      rgb(0, 0, 255) 67%,
      rgb(255, 0, 255) 83%,
      rgb(255, 0, 0) 100%
    );
  }

  .color-picker__alpha .color-picker__alpha-gradient {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }

  .color-picker__preview {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 2.25rem;
    height: 2.25rem;
    border: none;
    border-radius: var(--sl-border-radius-circle);
    background: none;
    margin-left: var(--sl-spacing-small);
    cursor: copy;
    forced-color-adjust: none;
  }

  .color-picker__preview:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);

    /* We use a custom property in lieu of currentColor because of https://bugs.webkit.org/show_bug.cgi?id=216780 */
    background-color: var(--preview-color);
  }

  .color-picker__preview:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__preview-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
  }

  .color-picker__preview-color--copied {
    animation: pulse 0.75s;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--sl-color-primary-500);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }

  .color-picker__user-input {
    display: flex;
    padding: 0 var(--sl-spacing-small) var(--sl-spacing-small) var(--sl-spacing-small);
  }

  .color-picker__user-input sl-input {
    min-width: 0; /* fix input width in Safari */
    flex: 1 1 auto;
  }

  .color-picker__user-input sl-button-group {
    margin-left: var(--sl-spacing-small);
  }

  .color-picker__user-input sl-button {
    min-width: 3.25rem;
    max-width: 3.25rem;
    font-size: 1rem;
  }

  .color-picker__swatches {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 0.5rem;
    justify-items: center;
    border-top: solid 1px var(--sl-color-neutral-200);
    padding: var(--sl-spacing-small);
    forced-color-adjust: none;
  }

  .color-picker__swatch {
    position: relative;
    width: var(--swatch-size);
    height: var(--swatch-size);
    border-radius: var(--sl-border-radius-small);
  }

  .color-picker__swatch .color-picker__swatch-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
    border-radius: inherit;
    cursor: pointer;
  }

  .color-picker__swatch:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__transparent-bg {
    background-image: linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%);
    background-size: 10px 10px;
    background-position:
      0 0,
      0 0,
      -5px -5px,
      5px 5px;
  }

  .color-picker--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .color-picker--disabled .color-picker__grid,
  .color-picker--disabled .color-picker__grid-handle,
  .color-picker--disabled .color-picker__slider,
  .color-picker--disabled .color-picker__slider-handle,
  .color-picker--disabled .color-picker__preview,
  .color-picker--disabled .color-picker__swatch,
  .color-picker--disabled .color-picker__swatch-color {
    pointer-events: none;
  }

  /*
   * Color dropdown
   */

  .color-dropdown::part(panel) {
    max-height: none;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    overflow: visible;
  }

  .color-dropdown__trigger {
    display: inline-block;
    position: relative;
    background-color: transparent;
    border: none;
    cursor: pointer;
    forced-color-adjust: none;
  }

  .color-dropdown__trigger.color-dropdown__trigger--small {
    width: var(--sl-input-height-small);
    height: var(--sl-input-height-small);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--medium {
    width: var(--sl-input-height-medium);
    height: var(--sl-input-height-medium);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--large {
    width: var(--sl-input-height-large);
    height: var(--sl-input-height-large);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background-color: currentColor;
    box-shadow:
      inset 0 0 0 2px var(--sl-input-border-color),
      inset 0 0 0 4px var(--sl-color-neutral-0);
  }

  .color-dropdown__trigger--empty:before {
    background-color: transparent;
  }

  .color-dropdown__trigger:focus-visible {
    outline: none;
  }

  .color-dropdown__trigger:focus-visible:not(.color-dropdown__trigger--disabled) {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-dropdown__trigger.color-dropdown__trigger--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,d=o(9162),h=o(1658),u=o(8478),p=o(1736),m=o(541),g=o(3389),b=o(4302),v=o(7324),f=o(4815),y=o(3109),w=o(3788),_=o(8146),x=o(996),C=o(8981),k=o(9593),$="EyeDropper"in window,z=class extends f.f{constructor(){super(),this.formControlController=new p.Ud(this),this.isSafeValue=!1,this.localize=new m.c(this),this.hasFocus=!1,this.isDraggingGridHandle=!1,this.isEmpty=!1,this.inputValue="",this.hue=0,this.saturation=100,this.brightness=100,this.alpha=100,this.value="",this.defaultValue="",this.label="",this.format="hex",this.inline=!1,this.size="medium",this.noFormatToggle=!1,this.name="",this.disabled=!1,this.hoist=!1,this.opacity=!1,this.uppercase=!1,this.swatches="",this.form="",this.required=!1,this.handleFocusIn=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.handleFocusOut=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut)}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.input.updateComplete.then((()=>{this.formControlController.updateValidity()}))}handleCopy(){this.input.select(),document.execCommand("copy"),this.previewButton.focus(),this.previewButton.classList.add("color-picker__preview-color--copied"),this.previewButton.addEventListener("animationend",(()=>{this.previewButton.classList.remove("color-picker__preview-color--copied")}))}handleFormatToggle(){const t=["hex","rgb","hsl","hsv"],e=(t.indexOf(this.format)+1)%t.length;this.format=t[e],this.setColor(this.value),this.emit("sl-change"),this.emit("sl-input")}handleAlphaDrag(t){const e=this.shadowRoot.querySelector(".color-picker__slider.color-picker__alpha"),o=e.querySelector(".color-picker__slider-handle"),{width:i}=e.getBoundingClientRect();let s=this.value,l=this.value;o.focus(),t.preventDefault(),(0,r.$)(e,{onMove:t=>{this.alpha=(0,d.q)(t/i*100,0,100),this.syncValues(),this.value!==l&&(l=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==s&&(s=this.value,this.emit("sl-change"))},initialEvent:t})}handleHueDrag(t){const e=this.shadowRoot.querySelector(".color-picker__slider.color-picker__hue"),o=e.querySelector(".color-picker__slider-handle"),{width:i}=e.getBoundingClientRect();let s=this.value,l=this.value;o.focus(),t.preventDefault(),(0,r.$)(e,{onMove:t=>{this.hue=(0,d.q)(t/i*360,0,360),this.syncValues(),this.value!==l&&(l=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==s&&(s=this.value,this.emit("sl-change"))},initialEvent:t})}handleGridDrag(t){const e=this.shadowRoot.querySelector(".color-picker__grid"),o=e.querySelector(".color-picker__grid-handle"),{width:i,height:s}=e.getBoundingClientRect();let l=this.value,a=this.value;o.focus(),t.preventDefault(),this.isDraggingGridHandle=!0,(0,r.$)(e,{onMove:(t,e)=>{this.saturation=(0,d.q)(t/i*100,0,100),this.brightness=(0,d.q)(100-e/s*100,0,100),this.syncValues(),this.value!==a&&(a=this.value,this.emit("sl-input"))},onStop:()=>{this.isDraggingGridHandle=!1,this.value!==l&&(l=this.value,this.emit("sl-change"))},initialEvent:t})}handleAlphaKeyDown(t){const e=t.shiftKey?10:1,o=this.value;"ArrowLeft"===t.key&&(t.preventDefault(),this.alpha=(0,d.q)(this.alpha-e,0,100),this.syncValues()),"ArrowRight"===t.key&&(t.preventDefault(),this.alpha=(0,d.q)(this.alpha+e,0,100),this.syncValues()),"Home"===t.key&&(t.preventDefault(),this.alpha=0,this.syncValues()),"End"===t.key&&(t.preventDefault(),this.alpha=100,this.syncValues()),this.value!==o&&(this.emit("sl-change"),this.emit("sl-input"))}handleHueKeyDown(t){const e=t.shiftKey?10:1,o=this.value;"ArrowLeft"===t.key&&(t.preventDefault(),this.hue=(0,d.q)(this.hue-e,0,360),this.syncValues()),"ArrowRight"===t.key&&(t.preventDefault(),this.hue=(0,d.q)(this.hue+e,0,360),this.syncValues()),"Home"===t.key&&(t.preventDefault(),this.hue=0,this.syncValues()),"End"===t.key&&(t.preventDefault(),this.hue=360,this.syncValues()),this.value!==o&&(this.emit("sl-change"),this.emit("sl-input"))}handleGridKeyDown(t){const e=t.shiftKey?10:1,o=this.value;"ArrowLeft"===t.key&&(t.preventDefault(),this.saturation=(0,d.q)(this.saturation-e,0,100),this.syncValues()),"ArrowRight"===t.key&&(t.preventDefault(),this.saturation=(0,d.q)(this.saturation+e,0,100),this.syncValues()),"ArrowUp"===t.key&&(t.preventDefault(),this.brightness=(0,d.q)(this.brightness+e,0,100),this.syncValues()),"ArrowDown"===t.key&&(t.preventDefault(),this.brightness=(0,d.q)(this.brightness-e,0,100),this.syncValues()),this.value!==o&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputChange(t){const e=t.target,o=this.value;t.stopPropagation(),this.input.value?(this.setColor(e.value),e.value=this.value):this.value="",this.value!==o&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputInput(t){this.formControlController.updateValidity(),t.stopPropagation()}handleInputKeyDown(t){if("Enter"===t.key){const t=this.value;this.input.value?(this.setColor(this.input.value),this.input.value=this.value,this.value!==t&&(this.emit("sl-change"),this.emit("sl-input")),setTimeout((()=>this.input.select()))):this.hue=0}}handleInputInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleTouchMove(t){t.preventDefault()}parseColor(t){const e=new k.q(t);if(!e.isValid)return null;const o=e.toHsl(),i={h:o.h,s:100*o.s,l:100*o.l,a:o.a},s=e.toRgb(),r=e.toHexString(),l=e.toHex8String(),a=e.toHsv(),n={h:a.h,s:100*a.s,v:100*a.v,a:a.a};return{hsl:{h:i.h,s:i.s,l:i.l,string:this.setLetterCase(`hsl(${Math.round(i.h)}, ${Math.round(i.s)}%, ${Math.round(i.l)}%)`)},hsla:{h:i.h,s:i.s,l:i.l,a:i.a,string:this.setLetterCase(`hsla(${Math.round(i.h)}, ${Math.round(i.s)}%, ${Math.round(i.l)}%, ${i.a.toFixed(2).toString()})`)},hsv:{h:n.h,s:n.s,v:n.v,string:this.setLetterCase(`hsv(${Math.round(n.h)}, ${Math.round(n.s)}%, ${Math.round(n.v)}%)`)},hsva:{h:n.h,s:n.s,v:n.v,a:n.a,string:this.setLetterCase(`hsva(${Math.round(n.h)}, ${Math.round(n.s)}%, ${Math.round(n.v)}%, ${n.a.toFixed(2).toString()})`)},rgb:{r:s.r,g:s.g,b:s.b,string:this.setLetterCase(`rgb(${Math.round(s.r)}, ${Math.round(s.g)}, ${Math.round(s.b)})`)},rgba:{r:s.r,g:s.g,b:s.b,a:s.a,string:this.setLetterCase(`rgba(${Math.round(s.r)}, ${Math.round(s.g)}, ${Math.round(s.b)}, ${s.a.toFixed(2).toString()})`)},hex:this.setLetterCase(r),hexa:this.setLetterCase(l)}}setColor(t){const e=this.parseColor(t);return null!==e&&(this.hue=e.hsva.h,this.saturation=e.hsva.s,this.brightness=e.hsva.v,this.alpha=this.opacity?100*e.hsva.a:100,this.syncValues(),!0)}setLetterCase(t){return"string"!=typeof t?"":this.uppercase?t.toUpperCase():t.toLowerCase()}async syncValues(){const t=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);null!==t&&("hsl"===this.format?this.inputValue=this.opacity?t.hsla.string:t.hsl.string:"rgb"===this.format?this.inputValue=this.opacity?t.rgba.string:t.rgb.string:"hsv"===this.format?this.inputValue=this.opacity?t.hsva.string:t.hsv.string:this.inputValue=this.opacity?t.hexa:t.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove("color-picker__preview-color--copied")}handleEyeDropper(){$&&(new EyeDropper).open().then((t=>{const e=this.value;this.setColor(t.sRGBHex),this.value!==e&&(this.emit("sl-change"),this.emit("sl-input"))})).catch((()=>{}))}selectSwatch(t){const e=this.value;this.disabled||(this.setColor(t),this.value!==e&&(this.emit("sl-change"),this.emit("sl-input")))}getHexString(t,e,o,i=100){const s=new k.q(`hsva(${t}, ${e}%, ${o}%, ${i/100})`);return s.isValid?s.toHex8String():""}stopNestedEventPropagation(t){t.stopImmediatePropagation()}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}handleValueChange(t,e){if(this.isEmpty=!e,e||(this.hue=0,this.saturation=0,this.brightness=100,this.alpha=100),!this.isSafeValue){const o=this.parseColor(e);null!==o?(this.inputValue=this.value,this.hue=o.hsva.h,this.saturation=o.hsva.s,this.brightness=o.hsva.v,this.alpha=100*o.hsva.a,this.syncValues()):this.inputValue=null!=t?t:""}}focus(t){this.inline?this.base.focus(t):this.trigger.focus(t)}blur(){var t;const e=this.inline?this.base:this.trigger;this.hasFocus&&(e.focus({preventScroll:!0}),e.blur()),(null==(t=this.dropdown)?void 0:t.open)&&this.dropdown.hide()}getFormattedValue(t="hex"){const e=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(null===e)return"";switch(t){case"hex":return e.hex;case"hexa":return e.hexa;case"rgb":return e.rgb.string;case"rgba":return e.rgba.string;case"hsl":return e.hsl.string;case"hsla":return e.hsla.string;case"hsv":return e.hsv.string;case"hsva":return e.hsva.string;default:return""}}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.inline||this.validity.valid?this.input.reportValidity():(this.dropdown.show(),this.addEventListener("sl-after-show",(()=>this.input.reportValidity()),{once:!0}),this.disabled||this.formControlController.emitInvalidEvent(),!1)}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.saturation,e=100-this.brightness,o=Array.isArray(this.swatches)?this.swatches:this.swatches.split(";").filter((t=>""!==t.trim())),i=n.qy`
      <div
        part="base"
        class=${(0,w.H)({"color-picker":!0,"color-picker--inline":this.inline,"color-picker--disabled":this.disabled,"color-picker--focused":this.hasFocus})}
        aria-disabled=${this.disabled?"true":"false"}
        aria-labelledby="label"
        tabindex=${this.inline?"0":"-1"}
      >
        ${this.inline?n.qy`
              <sl-visually-hidden id="label">
                <slot name="label">${this.label}</slot>
              </sl-visually-hidden>
            `:null}

        <div
          part="grid"
          class="color-picker__grid"
          style=${(0,C.W)({backgroundColor:this.getHexString(this.hue,100,100)})}
          @pointerdown=${this.handleGridDrag}
          @touchmove=${this.handleTouchMove}
        >
          <span
            part="grid-handle"
            class=${(0,w.H)({"color-picker__grid-handle":!0,"color-picker__grid-handle--dragging":this.isDraggingGridHandle})}
            style=${(0,C.W)({top:`${e}%`,left:`${t}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            role="application"
            aria-label="HSV"
            tabindex=${(0,x.J)(this.disabled?void 0:"0")}
            @keydown=${this.handleGridKeyDown}
          ></span>
        </div>

        <div class="color-picker__controls">
          <div class="color-picker__sliders">
            <div
              part="slider hue-slider"
              class="color-picker__hue color-picker__slider"
              @pointerdown=${this.handleHueDrag}
              @touchmove=${this.handleTouchMove}
            >
              <span
                part="slider-handle hue-slider-handle"
                class="color-picker__slider-handle"
                style=${(0,C.W)({left:(0===this.hue?0:100/(360/this.hue))+"%"})}
                role="slider"
                aria-label="hue"
                aria-orientation="horizontal"
                aria-valuemin="0"
                aria-valuemax="360"
                aria-valuenow=${`${Math.round(this.hue)}`}
                tabindex=${(0,x.J)(this.disabled?void 0:"0")}
                @keydown=${this.handleHueKeyDown}
              ></span>
            </div>

            ${this.opacity?n.qy`
                  <div
                    part="slider opacity-slider"
                    class="color-picker__alpha color-picker__slider color-picker__transparent-bg"
                    @pointerdown="${this.handleAlphaDrag}"
                    @touchmove=${this.handleTouchMove}
                  >
                    <div
                      class="color-picker__alpha-gradient"
                      style=${(0,C.W)({backgroundImage:`linear-gradient(\n                          to right,\n                          ${this.getHexString(this.hue,this.saturation,this.brightness,0)} 0%,\n                          ${this.getHexString(this.hue,this.saturation,this.brightness,100)} 100%\n                        )`})}
                    ></div>
                    <span
                      part="slider-handle opacity-slider-handle"
                      class="color-picker__slider-handle"
                      style=${(0,C.W)({left:`${this.alpha}%`})}
                      role="slider"
                      aria-label="alpha"
                      aria-orientation="horizontal"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${Math.round(this.alpha)}
                      tabindex=${(0,x.J)(this.disabled?void 0:"0")}
                      @keydown=${this.handleAlphaKeyDown}
                    ></span>
                  </div>
                `:""}
          </div>

          <button
            type="button"
            part="preview"
            class="color-picker__preview color-picker__transparent-bg"
            aria-label=${this.localize.term("copy")}
            style=${(0,C.W)({"--preview-color":this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            @click=${this.handleCopy}
          ></button>
        </div>

        <div class="color-picker__user-input" aria-live="polite">
          <sl-input
            part="input"
            type="text"
            name=${this.name}
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            value=${this.isEmpty?"":this.inputValue}
            ?required=${this.required}
            ?disabled=${this.disabled}
            aria-label=${this.localize.term("currentValue")}
            @keydown=${this.handleInputKeyDown}
            @sl-change=${this.handleInputChange}
            @sl-input=${this.handleInputInput}
            @sl-invalid=${this.handleInputInvalid}
            @sl-blur=${this.stopNestedEventPropagation}
            @sl-focus=${this.stopNestedEventPropagation}
          ></sl-input>

          <sl-button-group>
            ${this.noFormatToggle?"":n.qy`
                  <sl-button
                    part="format-button"
                    aria-label=${this.localize.term("toggleColorFormat")}
                    exportparts="
                      base:format-button__base,
                      prefix:format-button__prefix,
                      label:format-button__label,
                      suffix:format-button__suffix,
                      caret:format-button__caret
                    "
                    @click=${this.handleFormatToggle}
                    @sl-blur=${this.stopNestedEventPropagation}
                    @sl-focus=${this.stopNestedEventPropagation}
                  >
                    ${this.setLetterCase(this.format)}
                  </sl-button>
                `}
            ${$?n.qy`
                  <sl-button
                    part="eye-dropper-button"
                    exportparts="
                      base:eye-dropper-button__base,
                      prefix:eye-dropper-button__prefix,
                      label:eye-dropper-button__label,
                      suffix:eye-dropper-button__suffix,
                      caret:eye-dropper-button__caret
                    "
                    @click=${this.handleEyeDropper}
                    @sl-blur=${this.stopNestedEventPropagation}
                    @sl-focus=${this.stopNestedEventPropagation}
                  >
                    <sl-icon
                      library="system"
                      name="eyedropper"
                      label=${this.localize.term("selectAColorFromTheScreen")}
                    ></sl-icon>
                  </sl-button>
                `:""}
          </sl-button-group>
        </div>

        ${o.length>0?n.qy`
              <div part="swatches" class="color-picker__swatches">
                ${o.map((t=>{const e=this.parseColor(t);return e?n.qy`
                    <div
                      part="swatch"
                      class="color-picker__swatch color-picker__transparent-bg"
                      tabindex=${(0,x.J)(this.disabled?void 0:"0")}
                      role="button"
                      aria-label=${t}
                      @click=${()=>this.selectSwatch(t)}
                      @keydown=${t=>!this.disabled&&"Enter"===t.key&&this.setColor(e.hexa)}
                    >
                      <div
                        class="color-picker__swatch-color"
                        style=${(0,C.W)({backgroundColor:e.hexa})}
                      ></div>
                    </div>
                  `:(console.error(`Unable to parse swatch color: "${t}"`,this),"")}))}
              </div>
            `:""}
      </div>
    `;return this.inline?i:n.qy`
      <sl-dropdown
        class="color-dropdown"
        aria-disabled=${this.disabled?"true":"false"}
        .containingElement=${this}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        @sl-after-hide=${this.handleAfterHide}
      >
        <button
          part="trigger"
          slot="trigger"
          class=${(0,w.H)({"color-dropdown__trigger":!0,"color-dropdown__trigger--disabled":this.disabled,"color-dropdown__trigger--small":"small"===this.size,"color-dropdown__trigger--medium":"medium"===this.size,"color-dropdown__trigger--large":"large"===this.size,"color-dropdown__trigger--empty":this.isEmpty,"color-dropdown__trigger--focused":this.hasFocus,"color-picker__transparent-bg":!0})}
          style=${(0,C.W)({color:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
          type="button"
        >
          <sl-visually-hidden>
            <slot name="label">${this.label}</slot>
          </sl-visually-hidden>
        </button>
        ${i}
      </sl-dropdown>
    `}};z.styles=[v.$,c],z.dependencies={"sl-button-group":h.N,"sl-button":u.M,"sl-dropdown":l.n,"sl-icon":g.B,"sl-input":s.o,"sl-visually-hidden":i.N},(0,y.Cc)([(0,_.P)('[part~="base"]')],z.prototype,"base",2),(0,y.Cc)([(0,_.P)('[part~="input"]')],z.prototype,"input",2),(0,y.Cc)([(0,_.P)(".color-dropdown")],z.prototype,"dropdown",2),(0,y.Cc)([(0,_.P)('[part~="preview"]')],z.prototype,"previewButton",2),(0,y.Cc)([(0,_.P)('[part~="trigger"]')],z.prototype,"trigger",2),(0,y.Cc)([(0,_.wk)()],z.prototype,"hasFocus",2),(0,y.Cc)([(0,_.wk)()],z.prototype,"isDraggingGridHandle",2),(0,y.Cc)([(0,_.wk)()],z.prototype,"isEmpty",2),(0,y.Cc)([(0,_.wk)()],z.prototype,"inputValue",2),(0,y.Cc)([(0,_.wk)()],z.prototype,"hue",2),(0,y.Cc)([(0,_.wk)()],z.prototype,"saturation",2),(0,y.Cc)([(0,_.wk)()],z.prototype,"brightness",2),(0,y.Cc)([(0,_.wk)()],z.prototype,"alpha",2),(0,y.Cc)([(0,_.MZ)()],z.prototype,"value",2),(0,y.Cc)([(0,a.J)()],z.prototype,"defaultValue",2),(0,y.Cc)([(0,_.MZ)()],z.prototype,"label",2),(0,y.Cc)([(0,_.MZ)()],z.prototype,"format",2),(0,y.Cc)([(0,_.MZ)({type:Boolean,reflect:!0})],z.prototype,"inline",2),(0,y.Cc)([(0,_.MZ)({reflect:!0})],z.prototype,"size",2),(0,y.Cc)([(0,_.MZ)({attribute:"no-format-toggle",type:Boolean})],z.prototype,"noFormatToggle",2),(0,y.Cc)([(0,_.MZ)()],z.prototype,"name",2),(0,y.Cc)([(0,_.MZ)({type:Boolean,reflect:!0})],z.prototype,"disabled",2),(0,y.Cc)([(0,_.MZ)({type:Boolean})],z.prototype,"hoist",2),(0,y.Cc)([(0,_.MZ)({type:Boolean})],z.prototype,"opacity",2),(0,y.Cc)([(0,_.MZ)({type:Boolean})],z.prototype,"uppercase",2),(0,y.Cc)([(0,_.MZ)()],z.prototype,"swatches",2),(0,y.Cc)([(0,_.MZ)({reflect:!0})],z.prototype,"form",2),(0,y.Cc)([(0,_.MZ)({type:Boolean,reflect:!0})],z.prototype,"required",2),(0,y.Cc)([(0,_.Ls)({passive:!1})],z.prototype,"handleTouchMove",1),(0,y.Cc)([(0,b.w)("format",{waitUntilFirstUpdate:!0})],z.prototype,"handleFormatChange",1),(0,y.Cc)([(0,b.w)("opacity",{waitUntilFirstUpdate:!0})],z.prototype,"handleOpacityChange",1),(0,y.Cc)([(0,b.w)("value")],z.prototype,"handleValueChange",1),z.define("sl-color-picker"),o(1931),o(6310),o(5293),o(8678),o(1696),o(4667),o(8819),o(5842),o(762),o(875),o(3443),o(5137),o(8511),o(3585),o(4415),o(4637),o(8326),o(2089)},3970:(t,e,o)=>{o.d(e,{A:()=>a});var i=o(6758),s=o.n(i),r=o(935),l=o.n(r)()(s());l.push([t.id,':host,\n.sl-theme-dark{--csstools-color-scheme--light: ;color-scheme:dark;--sl-color-gray-50:hsl(240 5.1% 15%);--sl-color-gray-100:hsl(240 5.7% 18.2%);--sl-color-gray-200:hsl(240 4.6% 22%);--sl-color-gray-300:hsl(240 5% 27.6%);--sl-color-gray-400:hsl(240 5% 35.5%);--sl-color-gray-500:hsl(240 3.7% 44%);--sl-color-gray-600:hsl(240 5.3% 58%);--sl-color-gray-700:hsl(240 5.6% 73%);--sl-color-gray-800:hsl(240 7.3% 84%);--sl-color-gray-900:hsl(240 9.1% 91.8%);--sl-color-gray-950:hsl(0 0% 95%);--sl-color-red-50:hsl(0 56% 23.9%);--sl-color-red-100:hsl(0.6 60% 33.9%);--sl-color-red-200:hsl(0.9 67.2% 37.1%);--sl-color-red-300:hsl(1.1 71.3% 43.7%);--sl-color-red-400:hsl(1 76% 52.5%);--sl-color-red-500:hsl(0.7 89.6% 57.2%);--sl-color-red-600:hsl(0 98.6% 67.9%);--sl-color-red-700:hsl(0 100% 72.3%);--sl-color-red-800:hsl(0 100% 85.6%);--sl-color-red-900:hsl(0 100% 90.3%);--sl-color-red-950:hsl(0 100% 95.9%);--sl-color-orange-50:hsl(15 64.2% 23.3%);--sl-color-orange-100:hsl(15.1 70.9% 31.1%);--sl-color-orange-200:hsl(15.3 75.7% 35.5%);--sl-color-orange-300:hsl(17.1 83.5% 42.7%);--sl-color-orange-400:hsl(20.1 88% 50.8%);--sl-color-orange-500:hsl(24.3 100% 50.5%);--sl-color-orange-600:hsl(27.2 100% 57.7%);--sl-color-orange-700:hsl(31.3 100% 68.7%);--sl-color-orange-800:hsl(33.8 100% 79.3%);--sl-color-orange-900:hsl(38.9 100% 87.7%);--sl-color-orange-950:hsl(46.2 100% 95%);--sl-color-amber-50:hsl(21.9 66.3% 21.1%);--sl-color-amber-100:hsl(21.5 73.6% 29.7%);--sl-color-amber-200:hsl(22.3 77.6% 33.3%);--sl-color-amber-300:hsl(25.4 84.2% 39.6%);--sl-color-amber-400:hsl(31.4 87.4% 46.7%);--sl-color-amber-500:hsl(37 96.6% 48.3%);--sl-color-amber-600:hsl(43.3 100% 53.4%);--sl-color-amber-700:hsl(46.5 100% 61.1%);--sl-color-amber-800:hsl(49.3 100% 73%);--sl-color-amber-900:hsl(51.8 100% 85%);--sl-color-amber-950:hsl(60 100% 94.6%);--sl-color-yellow-50:hsl(32.5 60% 18.2%);--sl-color-yellow-100:hsl(28.1 68.6% 29%);--sl-color-yellow-200:hsl(31.3 75.8% 30.8%);--sl-color-yellow-300:hsl(34.7 84.4% 35.3%);--sl-color-yellow-400:hsl(40.1 87.3% 43.3%);--sl-color-yellow-500:hsl(44.7 88% 46%);--sl-color-yellow-600:hsl(47.7 100% 50.9%);--sl-color-yellow-700:hsl(51.3 100% 59.9%);--sl-color-yellow-800:hsl(54.6 100% 73%);--sl-color-yellow-900:hsl(58.9 100% 84.2%);--sl-color-yellow-950:hsl(60 100% 94%);--sl-color-lime-50:hsl(86.5 54.4% 18%);--sl-color-lime-100:hsl(87.6 56.8% 23.3%);--sl-color-lime-200:hsl(85.8 63.2% 24.5%);--sl-color-lime-300:hsl(86.1 72% 29.4%);--sl-color-lime-400:hsl(85.5 76.8% 37.3%);--sl-color-lime-500:hsl(84.3 74.2% 42.1%);--sl-color-lime-600:hsl(82.8 81.5% 52.6%);--sl-color-lime-700:hsl(82 89.9% 64%);--sl-color-lime-800:hsl(80.9 97.9% 76.6%);--sl-color-lime-900:hsl(77.9 100% 85.8%);--sl-color-lime-950:hsl(69.5 100% 93.8%);--sl-color-green-50:hsl(144.3 53.6% 16%);--sl-color-green-100:hsl(143.2 55.4% 23.5%);--sl-color-green-200:hsl(141.5 58.2% 26.3%);--sl-color-green-300:hsl(140.8 64.2% 31.8%);--sl-color-green-400:hsl(140.3 68% 39.2%);--sl-color-green-500:hsl(141.1 64.9% 43%);--sl-color-green-600:hsl(141.6 72.4% 55.2%);--sl-color-green-700:hsl(141.7 82.7% 70.1%);--sl-color-green-800:hsl(141 90.9% 82.1%);--sl-color-green-900:hsl(142 100% 89.1%);--sl-color-green-950:hsl(144 100% 95.5%);--sl-color-emerald-50:hsl(164.3 75% 13.5%);--sl-color-emerald-100:hsl(163.5 72.6% 20.1%);--sl-color-emerald-200:hsl(162.1 73.7% 22.4%);--sl-color-emerald-300:hsl(161.3 77.3% 27.6%);--sl-color-emerald-400:hsl(159.6 77.1% 34.3%);--sl-color-emerald-500:hsl(159.1 73.5% 37.9%);--sl-color-emerald-600:hsl(157.8 66.8% 48.9%);--sl-color-emerald-700:hsl(156.2 76.1% 63.8%);--sl-color-emerald-800:hsl(152.4 84.4% 77.4%);--sl-color-emerald-900:hsl(149.3 100% 87%);--sl-color-emerald-950:hsl(158.6 100% 94.8%);--sl-color-teal-50:hsl(176.5 51.5% 15.4%);--sl-color-teal-100:hsl(175.9 54.7% 22.3%);--sl-color-teal-200:hsl(175.9 60.7% 23.9%);--sl-color-teal-300:hsl(174.5 67.3% 28.8%);--sl-color-teal-400:hsl(174.4 71.9% 34.9%);--sl-color-teal-500:hsl(173.1 71% 38.3%);--sl-color-teal-600:hsl(172.3 68.2% 48.1%);--sl-color-teal-700:hsl(170.5 81.3% 61.5%);--sl-color-teal-800:hsl(168.4 92.1% 75.2%);--sl-color-teal-900:hsl(168.3 100% 86%);--sl-color-teal-950:hsl(180 100% 95.5%);--sl-color-cyan-50:hsl(197.1 53.8% 20.3%);--sl-color-cyan-100:hsl(196.8 57.3% 27.2%);--sl-color-cyan-200:hsl(195.3 62.7% 29.4%);--sl-color-cyan-300:hsl(193.5 71.3% 34.1%);--sl-color-cyan-400:hsl(192.5 76.8% 40.6%);--sl-color-cyan-500:hsl(189.4 78.6% 42.6%);--sl-color-cyan-600:hsl(188.2 89.1% 51.7%);--sl-color-cyan-700:hsl(187 98.6% 66.2%);--sl-color-cyan-800:hsl(184.9 100% 78.3%);--sl-color-cyan-900:hsl(180 100% 86.6%);--sl-color-cyan-950:hsl(180 100% 94.8%);--sl-color-sky-50:hsl(203 63.8% 20.9%);--sl-color-sky-100:hsl(203.4 70.4% 28%);--sl-color-sky-200:hsl(202.7 75.8% 30.8%);--sl-color-sky-300:hsl(203.1 80.4% 36.1%);--sl-color-sky-400:hsl(202.1 80.5% 44.3%);--sl-color-sky-500:hsl(199.7 85.9% 47.7%);--sl-color-sky-600:hsl(198.7 97.9% 57.2%);--sl-color-sky-700:hsl(198.7 100% 70.5%);--sl-color-sky-800:hsl(198.8 100% 82.5%);--sl-color-sky-900:hsl(198.5 100% 89.9%);--sl-color-sky-950:hsl(186 100% 95.5%);--sl-color-blue-50:hsl(227.1 49.5% 22.7%);--sl-color-blue-100:hsl(225.8 58.9% 36.8%);--sl-color-blue-200:hsl(227.7 64.4% 42.9%);--sl-color-blue-300:hsl(226.1 72.7% 51.2%);--sl-color-blue-400:hsl(222.6 86.5% 56.3%);--sl-color-blue-500:hsl(217.8 95.8% 57.4%);--sl-color-blue-600:hsl(213.3 100% 65%);--sl-color-blue-700:hsl(210.9 100% 74.8%);--sl-color-blue-800:hsl(211.5 100% 83.4%);--sl-color-blue-900:hsl(211 100% 88.9%);--sl-color-blue-950:hsl(201.8 100% 95.3%);--sl-color-indigo-50:hsl(243.5 40.8% 27%);--sl-color-indigo-100:hsl(242.9 45.7% 37.6%);--sl-color-indigo-200:hsl(244.7 52.7% 43.1%);--sl-color-indigo-300:hsl(245.3 60.5% 52.4%);--sl-color-indigo-400:hsl(244.1 79.2% 60.4%);--sl-color-indigo-500:hsl(239.6 88.7% 63.8%);--sl-color-indigo-600:hsl(234.5 96.7% 70.9%);--sl-color-indigo-700:hsl(229.4 100% 78.3%);--sl-color-indigo-800:hsl(227.1 100% 85%);--sl-color-indigo-900:hsl(223.8 100% 89.9%);--sl-color-indigo-950:hsl(220 100% 95.1%);--sl-color-violet-50:hsl(265.1 57.3% 25.4%);--sl-color-violet-100:hsl(263.5 63.8% 39.4%);--sl-color-violet-200:hsl(263.4 66.2% 44.1%);--sl-color-violet-300:hsl(263.7 72.8% 52.4%);--sl-color-violet-400:hsl(262.5 87.3% 59.8%);--sl-color-violet-500:hsl(258.3 95.1% 63.2%);--sl-color-violet-600:hsl(255.1 100% 67.2%);--sl-color-violet-700:hsl(253 100% 81.5%);--sl-color-violet-800:hsl(251.7 100% 87.9%);--sl-color-violet-900:hsl(254.1 100% 91.7%);--sl-color-violet-950:hsl(257.1 100% 96.1%);--sl-color-purple-50:hsl(276 54.3% 20.5%);--sl-color-purple-100:hsl(273.6 61.8% 35.4%);--sl-color-purple-200:hsl(272.9 64% 41.4%);--sl-color-purple-300:hsl(271.9 68.1% 49.2%);--sl-color-purple-400:hsl(271.5 85.1% 57.8%);--sl-color-purple-500:hsl(270.7 96.4% 62.1%);--sl-color-purple-600:hsl(270.5 100% 71.9%);--sl-color-purple-700:hsl(270.9 100% 81.3%);--sl-color-purple-800:hsl(272.4 100% 87.7%);--sl-color-purple-900:hsl(276.7 100% 91.5%);--sl-color-purple-950:hsl(300 100% 96.5%);--sl-color-fuchsia-50:hsl(297.1 51.2% 18.6%);--sl-color-fuchsia-100:hsl(296.7 59.5% 31.5%);--sl-color-fuchsia-200:hsl(295.4 65.4% 35.1%);--sl-color-fuchsia-300:hsl(294.6 67.4% 42.2%);--sl-color-fuchsia-400:hsl(293.3 68.7% 51.2%);--sl-color-fuchsia-500:hsl(292.1 88.4% 57.7%);--sl-color-fuchsia-600:hsl(292 98.5% 59.5%);--sl-color-fuchsia-700:hsl(292.4 100% 79.5%);--sl-color-fuchsia-800:hsl(292.9 100% 86.8%);--sl-color-fuchsia-900:hsl(300 100% 91.5%);--sl-color-fuchsia-950:hsl(300 100% 96.3%);--sl-color-pink-50:hsl(336.2 59.6% 20%);--sl-color-pink-100:hsl(336.8 63.9% 34%);--sl-color-pink-200:hsl(336.8 68.7% 37.6%);--sl-color-pink-300:hsl(336.1 71.8% 44.5%);--sl-color-pink-400:hsl(333.9 74.9% 53.1%);--sl-color-pink-500:hsl(330.7 86.3% 57.7%);--sl-color-pink-600:hsl(328.6 91.5% 67.2%);--sl-color-pink-700:hsl(327.4 97.6% 78.7%);--sl-color-pink-800:hsl(325.1 100% 86.6%);--sl-color-pink-900:hsl(322.1 100% 91.3%);--sl-color-pink-950:hsl(315 100% 95.9%);--sl-color-rose-50:hsl(342.3 62.9% 21.5%);--sl-color-rose-100:hsl(342.8 68.9% 34.2%);--sl-color-rose-200:hsl(344.8 72.6% 37.3%);--sl-color-rose-300:hsl(346.9 75.8% 43.7%);--sl-color-rose-400:hsl(348.2 80.1% 52.7%);--sl-color-rose-500:hsl(350.4 94.8% 57.5%);--sl-color-rose-600:hsl(351.2 100% 58.1%);--sl-color-rose-700:hsl(352.3 100% 78.1%);--sl-color-rose-800:hsl(352 100% 86.2%);--sl-color-rose-900:hsl(354.5 100% 90.7%);--sl-color-rose-950:hsl(353.3 100% 95.7%);--sl-color-primary-50:var(--sl-color-sky-50);--sl-color-primary-100:var(--sl-color-sky-100);--sl-color-primary-200:var(--sl-color-sky-200);--sl-color-primary-300:var(--sl-color-sky-300);--sl-color-primary-400:var(--sl-color-sky-400);--sl-color-primary-500:var(--sl-color-sky-500);--sl-color-primary-600:var(--sl-color-sky-600);--sl-color-primary-700:var(--sl-color-sky-700);--sl-color-primary-800:var(--sl-color-sky-800);--sl-color-primary-900:var(--sl-color-sky-900);--sl-color-primary-950:var(--sl-color-sky-950);--sl-color-success-50:var(--sl-color-green-50);--sl-color-success-100:var(--sl-color-green-100);--sl-color-success-200:var(--sl-color-green-200);--sl-color-success-300:var(--sl-color-green-300);--sl-color-success-400:var(--sl-color-green-400);--sl-color-success-500:var(--sl-color-green-500);--sl-color-success-600:var(--sl-color-green-600);--sl-color-success-700:var(--sl-color-green-700);--sl-color-success-800:var(--sl-color-green-800);--sl-color-success-900:var(--sl-color-green-900);--sl-color-success-950:var(--sl-color-green-950);--sl-color-warning-50:var(--sl-color-amber-50);--sl-color-warning-100:var(--sl-color-amber-100);--sl-color-warning-200:var(--sl-color-amber-200);--sl-color-warning-300:var(--sl-color-amber-300);--sl-color-warning-400:var(--sl-color-amber-400);--sl-color-warning-500:var(--sl-color-amber-500);--sl-color-warning-600:var(--sl-color-amber-600);--sl-color-warning-700:var(--sl-color-amber-700);--sl-color-warning-800:var(--sl-color-amber-800);--sl-color-warning-900:var(--sl-color-amber-900);--sl-color-warning-950:var(--sl-color-amber-950);--sl-color-danger-50:var(--sl-color-red-50);--sl-color-danger-100:var(--sl-color-red-100);--sl-color-danger-200:var(--sl-color-red-200);--sl-color-danger-300:var(--sl-color-red-300);--sl-color-danger-400:var(--sl-color-red-400);--sl-color-danger-500:var(--sl-color-red-500);--sl-color-danger-600:var(--sl-color-red-600);--sl-color-danger-700:var(--sl-color-red-700);--sl-color-danger-800:var(--sl-color-red-800);--sl-color-danger-900:var(--sl-color-red-900);--sl-color-danger-950:var(--sl-color-red-950);--sl-color-neutral-50:var(--sl-color-gray-50);--sl-color-neutral-100:var(--sl-color-gray-100);--sl-color-neutral-200:var(--sl-color-gray-200);--sl-color-neutral-300:var(--sl-color-gray-300);--sl-color-neutral-400:var(--sl-color-gray-400);--sl-color-neutral-500:var(--sl-color-gray-500);--sl-color-neutral-600:var(--sl-color-gray-600);--sl-color-neutral-700:var(--sl-color-gray-700);--sl-color-neutral-800:var(--sl-color-gray-800);--sl-color-neutral-900:var(--sl-color-gray-900);--sl-color-neutral-950:var(--sl-color-gray-950);--sl-color-neutral-0:hsl(240,5.9%,11%);--sl-color-neutral-1000:hsl(0,0%,100%);--sl-border-radius-small:0.1875rem;--sl-border-radius-medium:0.25rem;--sl-border-radius-large:0.5rem;--sl-border-radius-x-large:1rem;--sl-border-radius-circle:50%;--sl-border-radius-pill:9999px;--sl-shadow-x-small:0 1px 2px rgb(0 0 0/18%);--sl-shadow-small:0 1px 2px rgb(0 0 0/24%);--sl-shadow-medium:0 2px 4px rgb(0 0 0/24%);--sl-shadow-large:0 2px 8px rgb(0 0 0/24%);--sl-shadow-x-large:0 4px 16px rgb(0 0 0/24%);--sl-spacing-3x-small:0.125rem;--sl-spacing-2x-small:0.25rem;--sl-spacing-x-small:0.5rem;--sl-spacing-small:0.75rem;--sl-spacing-medium:1rem;--sl-spacing-large:1.25rem;--sl-spacing-x-large:1.75rem;--sl-spacing-2x-large:2.25rem;--sl-spacing-3x-large:3rem;--sl-spacing-4x-large:4.5rem;--sl-transition-x-slow:1000ms;--sl-transition-slow:500ms;--sl-transition-medium:250ms;--sl-transition-fast:150ms;--sl-transition-x-fast:50ms;--sl-font-mono:SFMono-Regular,Consolas,"Liberation Mono",Menlo,monospace;--sl-font-sans:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";--sl-font-serif:Georgia,"Times New Roman",serif;--sl-font-size-2x-small:0.625rem;--sl-font-size-x-small:0.75rem;--sl-font-size-small:0.875rem;--sl-font-size-medium:1rem;--sl-font-size-large:1.25rem;--sl-font-size-x-large:1.5rem;--sl-font-size-2x-large:2.25rem;--sl-font-size-3x-large:3rem;--sl-font-size-4x-large:4.5rem;--sl-font-weight-light:300;--sl-font-weight-normal:400;--sl-font-weight-semibold:500;--sl-font-weight-bold:700;--sl-letter-spacing-denser:-0.03em;--sl-letter-spacing-dense:-0.015em;--sl-letter-spacing-normal:normal;--sl-letter-spacing-loose:0.075em;--sl-letter-spacing-looser:0.15em;--sl-line-height-denser:1;--sl-line-height-dense:1.4;--sl-line-height-normal:1.8;--sl-line-height-loose:2.2;--sl-line-height-looser:2.6;--sl-focus-ring-color:var(--sl-color-primary-700);--sl-focus-ring-style:solid;--sl-focus-ring-width:3px;--sl-focus-ring:var(--sl-focus-ring-style) var(--sl-focus-ring-width) var(--sl-focus-ring-color);--sl-focus-ring-offset:1px;--sl-button-font-size-small:var(--sl-font-size-x-small);--sl-button-font-size-medium:var(--sl-font-size-small);--sl-button-font-size-large:var(--sl-font-size-medium);--sl-input-height-small:1.875rem;--sl-input-height-medium:2.5rem;--sl-input-height-large:3.125rem;--sl-input-background-color:var(--sl-color-neutral-0);--sl-input-background-color-hover:var(--sl-input-background-color);--sl-input-background-color-focus:var(--sl-input-background-color);--sl-input-background-color-disabled:var(--sl-color-neutral-100);--sl-input-border-color:var(--sl-color-neutral-400);--sl-input-border-color-hover:var(--sl-color-neutral-500);--sl-input-border-color-focus:var(--sl-color-primary-600);--sl-input-border-color-disabled:var(--sl-color-neutral-400);--sl-input-border-width:1px;--sl-input-required-content:"*";--sl-input-required-content-offset:-2px;--sl-input-required-content-color:var(--sl-input-label-color);--sl-input-border-radius-small:var(--sl-border-radius-medium);--sl-input-border-radius-medium:var(--sl-border-radius-medium);--sl-input-border-radius-large:var(--sl-border-radius-medium);--sl-input-font-family:var(--sl-font-sans);--sl-input-font-weight:var(--sl-font-weight-normal);--sl-input-font-size-small:var(--sl-font-size-small);--sl-input-font-size-medium:var(--sl-font-size-medium);--sl-input-font-size-large:var(--sl-font-size-large);--sl-input-letter-spacing:var(--sl-letter-spacing-normal);--sl-input-color:var(--sl-color-neutral-700);--sl-input-color-hover:var(--sl-color-neutral-700);--sl-input-color-focus:var(--sl-color-neutral-700);--sl-input-color-disabled:var(--sl-color-neutral-900);--sl-input-icon-color:var(--sl-color-neutral-500);--sl-input-icon-color-hover:var(--sl-color-neutral-600);--sl-input-icon-color-focus:var(--sl-color-neutral-600);--sl-input-placeholder-color:var(--sl-color-neutral-500);--sl-input-placeholder-color-disabled:var(--sl-color-neutral-600);--sl-input-spacing-small:var(--sl-spacing-small);--sl-input-spacing-medium:var(--sl-spacing-medium);--sl-input-spacing-large:var(--sl-spacing-large);--sl-input-focus-ring-color:hsl(198.6 88.7% 48.4%/40%);--sl-input-focus-ring-offset:0;--sl-input-filled-background-color:var(--sl-color-neutral-100);--sl-input-filled-background-color-hover:var(--sl-color-neutral-100);--sl-input-filled-background-color-focus:var(--sl-color-neutral-100);--sl-input-filled-background-color-disabled:var(--sl-color-neutral-100);--sl-input-filled-color:var(--sl-color-neutral-800);--sl-input-filled-color-hover:var(--sl-color-neutral-800);--sl-input-filled-color-focus:var(--sl-color-neutral-700);--sl-input-filled-color-disabled:var(--sl-color-neutral-800);--sl-input-label-font-size-small:var(--sl-font-size-small);--sl-input-label-font-size-medium:var(--sl-font-size-medium);--sl-input-label-font-size-large:var(--sl-font-size-large);--sl-input-label-color:inherit;--sl-input-help-text-font-size-small:var(--sl-font-size-x-small);--sl-input-help-text-font-size-medium:var(--sl-font-size-small);--sl-input-help-text-font-size-large:var(--sl-font-size-medium);--sl-input-help-text-color:var(--sl-color-neutral-600);--sl-toggle-size-small:0.875rem;--sl-toggle-size-medium:1.125rem;--sl-toggle-size-large:1.375rem;--sl-overlay-background-color:hsl(0 0% 0%/43%);--sl-panel-background-color:var(--sl-color-neutral-50);--sl-panel-border-color:var(--sl-color-neutral-200);--sl-panel-border-width:1px;--sl-tooltip-border-radius:var(--sl-border-radius-medium);--sl-tooltip-background-color:var(--sl-color-neutral-800);--sl-tooltip-color:var(--sl-color-neutral-0);--sl-tooltip-font-family:var(--sl-font-sans);--sl-tooltip-font-weight:var(--sl-font-weight-normal);--sl-tooltip-font-size:var(--sl-font-size-small);--sl-tooltip-line-height:var(--sl-line-height-dense);--sl-tooltip-padding:var(--sl-spacing-2x-small) var(--sl-spacing-x-small);--sl-tooltip-arrow-size:6px;--sl-z-index-drawer:700;--sl-z-index-dialog:800;--sl-z-index-dropdown:900;--sl-z-index-toast:950;--sl-z-index-tooltip:1000}@supports (scrollbar-gutter: stable){.sl-scroll-lock{scrollbar-gutter:var(--sl-scroll-lock-gutter)!important}.sl-scroll-lock body{overflow:hidden!important}}@supports not (scrollbar-gutter: stable){.sl-scroll-lock body{padding-right:var(--sl-scroll-lock-size)!important;overflow:hidden!important}}.sl-toast-stack{position:fixed;top:0;right:0;z-index:var(--sl-z-index-toast);width:28rem;max-width:100%;max-height:100%;overflow:auto}.sl-toast-stack sl-alert{margin:var(--sl-spacing-medium)}.sl-toast-stack sl-alert::part(base){box-shadow:var(--sl-shadow-large)}',""]);const a=l},4101:(t,e,o)=>{o.d(e,{X:()=>i,r:()=>s});var i=class{constructor(t,...e){this.slotNames=[],this.handleSlotChange=t=>{const e=t.target;(this.slotNames.includes("[default]")&&!e.name||e.name&&this.slotNames.includes(e.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=e}hasDefaultSlot(){return[...this.host.childNodes].some((t=>{if(t.nodeType===t.TEXT_NODE&&""!==t.textContent.trim())return!0;if(t.nodeType===t.ELEMENT_NODE){const e=t;if("sl-visually-hidden"===e.tagName.toLowerCase())return!1;if(!e.hasAttribute("slot"))return!0}return!1}))}hasNamedSlot(t){return null!==this.host.querySelector(`:scope > [slot="${t}"]`)}test(t){return"[default]"===t?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};function s(t){if(!t)return"";const e=t.assignedNodes({flatten:!0});let o="";return[...e].forEach((t=>{t.nodeType===Node.TEXT_NODE&&(o+=t.textContent)})),o}},4302:(t,e,o)=>{o.d(e,{w:()=>s});var i=o(3109);function s(t,e){const o=(0,i.IA)({waitUntilFirstUpdate:!1},e);return(e,i)=>{const{update:s}=e,r=Array.isArray(t)?t:[t];e.update=function(t){r.forEach((e=>{const s=e;if(t.has(s)){const e=t.get(s),r=this[s];e!==r&&(o.waitUntilFirstUpdate&&!this.hasUpdated||this[i](e,r))}})),s.call(this,t)}}}},4319:(t,e,o)=>{function i(t,e){function o(o){const i=t.getBoundingClientRect(),s=t.ownerDocument.defaultView,r=i.left+s.scrollX,l=i.top+s.scrollY,a=o.pageX-r,n=o.pageY-l;(null==e?void 0:e.onMove)&&e.onMove(a,n)}document.addEventListener("pointermove",o,{passive:!0}),document.addEventListener("pointerup",(function t(){document.removeEventListener("pointermove",o),document.removeEventListener("pointerup",t),(null==e?void 0:e.onStop)&&e.onStop()})),(null==e?void 0:e.initialEvent)instanceof PointerEvent&&o(e.initialEvent)}o.d(e,{$:()=>i})},4360:(t,e,o)=>{o.d(e,{h:()=>u});var i=o(3750),s=o(3389),r=o(7324),l=o(4815),a=o(3109),n=o(3788),c=o(7679),d=o(996),h=o(8146),u=class extends l.f{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){const t=!!this.href,e=t?c.eu`a`:c.eu`button`;return c.qy`
      <${e}
        part="base"
        class=${(0,n.H)({"icon-button":!0,"icon-button--disabled":!t&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${(0,d.J)(t?void 0:this.disabled)}
        type=${(0,d.J)(t?void 0:"button")}
        href=${(0,d.J)(t?this.href:void 0)}
        target=${(0,d.J)(t?this.target:void 0)}
        download=${(0,d.J)(t?this.download:void 0)}
        rel=${(0,d.J)(t&&this.target?"noreferrer noopener":void 0)}
        role=${(0,d.J)(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${(0,d.J)(this.name)}
          library=${(0,d.J)(this.library)}
          src=${(0,d.J)(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${e}>
    `}};u.styles=[r.$,i.Y],u.dependencies={"sl-icon":s.B},(0,a.Cc)([(0,h.P)(".icon-button")],u.prototype,"button",2),(0,a.Cc)([(0,h.wk)()],u.prototype,"hasFocus",2),(0,a.Cc)([(0,h.MZ)()],u.prototype,"name",2),(0,a.Cc)([(0,h.MZ)()],u.prototype,"library",2),(0,a.Cc)([(0,h.MZ)()],u.prototype,"src",2),(0,a.Cc)([(0,h.MZ)()],u.prototype,"href",2),(0,a.Cc)([(0,h.MZ)()],u.prototype,"target",2),(0,a.Cc)([(0,h.MZ)()],u.prototype,"download",2),(0,a.Cc)([(0,h.MZ)()],u.prototype,"label",2),(0,a.Cc)([(0,h.MZ)({type:Boolean,reflect:!0})],u.prototype,"disabled",2)},4367:(t,e,o)=>{o(8478).M.define("sl-button"),o(762),o(875),o(1736),o(3443),o(541),o(3585),o(3389),o(4415),o(4637),o(8326),o(2089),o(4302),o(7324),o(4815),o(3109)},4415:(t,e,o)=>{o.d(e,{Hh:()=>c,cl:()=>n,pA:()=>a});var i=o(4637),s=o(8326),r=[i.q,s.g],l=[];function a(t){l.push(t)}function n(t){l=l.filter((e=>e!==t))}function c(t){return r.find((e=>e.name===t))}},4430:(t,e,o)=>{var i=o(892),s=o(8609),r=o(5024),l=r.AH`
  :host {
    --width: 31rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--sl-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--sl-spacing-2x-large));
    max-height: calc(100% - var(--sl-spacing-2x-large));
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .dialog__header-actions sl-icon-button,
  .dialog__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .dialog__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(sl-button:not(:first-of-type)) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
  }

  @media (forced-colors: active) {
    .dialog__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`,a=o(2725),n=o(4360),c=o(5137),d=o(1060),h=o(8511),u=o(4101),p=o(541),m=o(4302),g=o(7324),b=o(4815),v=o(3109),f=o(3788),y=o(996),w=o(8146),_=class extends b.f{constructor(){super(...arguments),this.hasSlotController=new u.X(this,"footer"),this.localize=new p.c(this),this.modal=new i.a(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=t=>{"Escape"===t.key&&this.modal.isActive()&&this.open&&(t.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),(0,s.JG)(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),(0,s.I7)(this),this.removeOpenListeners()}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){const t=(0,c.RB)(this,"dialog.denyClose",{dir:this.localize.dir()});(0,h.jd)(this.panel,t.keyframes,t.options)}else this.hide()}addOpenListeners(){var t;"CloseWatcher"in window?(null==(t=this.closeWatcher)||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard")):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var t;null==(t=this.closeWatcher)||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),(0,s.JG)(this);const t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([(0,h.Ey)(this.dialog),(0,h.Ey)(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame((()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")}));const e=(0,c.RB)(this,"dialog.show",{dir:this.localize.dir()}),o=(0,c.RB)(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([(0,h.jd)(this.panel,e.keyframes,e.options),(0,h.jd)(this.overlay,o.keyframes,o.options)]),this.emit("sl-after-show")}else{(0,a.k)(this),this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([(0,h.Ey)(this.dialog),(0,h.Ey)(this.overlay)]);const t=(0,c.RB)(this,"dialog.hide",{dir:this.localize.dir()}),e=(0,c.RB)(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([(0,h.jd)(this.overlay,e.keyframes,e.options).then((()=>{this.overlay.hidden=!0})),(0,h.jd)(this.panel,t.keyframes,t.options).then((()=>{this.panel.hidden=!0}))]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,(0,s.I7)(this);const o=this.originalTrigger;"function"==typeof(null==o?void 0:o.focus)&&setTimeout((()=>o.focus())),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,(0,d.l)(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,(0,d.l)(this,"sl-after-hide")}render(){return r.qy`
      <div
        part="base"
        class=${(0,f.H)({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${(0,y.J)(this.noHeader?this.label:void 0)}
          aria-labelledby=${(0,y.J)(this.noHeader?void 0:"title")}
          tabindex="-1"
        >
          ${this.noHeader?"":r.qy`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:String.fromCharCode(65279)} </slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="dialog__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click="${()=>this.requestClose("close-button")}"
                    ></sl-icon-button>
                  </div>
                </header>
              `}
          ${""}
          <div part="body" class="dialog__body" tabindex="-1"><slot></slot></div>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};_.styles=[g.$,l],_.dependencies={"sl-icon-button":n.h},(0,v.Cc)([(0,w.P)(".dialog")],_.prototype,"dialog",2),(0,v.Cc)([(0,w.P)(".dialog__panel")],_.prototype,"panel",2),(0,v.Cc)([(0,w.P)(".dialog__overlay")],_.prototype,"overlay",2),(0,v.Cc)([(0,w.MZ)({type:Boolean,reflect:!0})],_.prototype,"open",2),(0,v.Cc)([(0,w.MZ)({reflect:!0})],_.prototype,"label",2),(0,v.Cc)([(0,w.MZ)({attribute:"no-header",type:Boolean,reflect:!0})],_.prototype,"noHeader",2),(0,v.Cc)([(0,m.w)("open",{waitUntilFirstUpdate:!0})],_.prototype,"handleOpenChange",1),(0,c.Ee)("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}}),(0,c.Ee)("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}}),(0,c.Ee)("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}}),(0,c.Ee)("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}}),(0,c.Ee)("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}}),_.define("sl-dialog"),o(8678),o(3750),o(3585),o(3389),o(4415),o(4637),o(8326),o(2089)},4552:(t,e,o)=>{var i=o(5024),s=i.AH`
  :host {
    display: block;
  }

  .menu-label {
    display: inline-block;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-x-large);
    user-select: none;
    -webkit-user-select: none;
  }
`,r=o(7324),l=o(4815),a=class extends l.f{render(){return i.qy` <slot part="base" class="menu-label"></slot> `}};a.styles=[r.$,s],a.define("sl-menu-label"),o(3109)},4569:(t,e,o)=>{var i=o(541),s=o(4815),r=o(3109),l=o(8146),a=class extends s.f{constructor(){super(...arguments),this.localize=new i.c(this),this.value=0,this.type="decimal",this.noGrouping=!1,this.currency="USD",this.currencyDisplay="symbol"}render(){return isNaN(this.value)?"":this.localize.number(this.value,{style:this.type,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:!this.noGrouping,minimumIntegerDigits:this.minimumIntegerDigits,minimumFractionDigits:this.minimumFractionDigits,maximumFractionDigits:this.maximumFractionDigits,minimumSignificantDigits:this.minimumSignificantDigits,maximumSignificantDigits:this.maximumSignificantDigits})}};(0,r.Cc)([(0,l.MZ)({type:Number})],a.prototype,"value",2),(0,r.Cc)([(0,l.MZ)()],a.prototype,"type",2),(0,r.Cc)([(0,l.MZ)({attribute:"no-grouping",type:Boolean})],a.prototype,"noGrouping",2),(0,r.Cc)([(0,l.MZ)()],a.prototype,"currency",2),(0,r.Cc)([(0,l.MZ)({attribute:"currency-display"})],a.prototype,"currencyDisplay",2),(0,r.Cc)([(0,l.MZ)({attribute:"minimum-integer-digits",type:Number})],a.prototype,"minimumIntegerDigits",2),(0,r.Cc)([(0,l.MZ)({attribute:"minimum-fraction-digits",type:Number})],a.prototype,"minimumFractionDigits",2),(0,r.Cc)([(0,l.MZ)({attribute:"maximum-fraction-digits",type:Number})],a.prototype,"maximumFractionDigits",2),(0,r.Cc)([(0,l.MZ)({attribute:"minimum-significant-digits",type:Number})],a.prototype,"minimumSignificantDigits",2),(0,r.Cc)([(0,l.MZ)({attribute:"maximum-significant-digits",type:Number})],a.prototype,"maximumSignificantDigits",2),a.define("sl-format-number"),o(3585)},4591:(t,e,o)=>{o(1658).N.define("sl-button-group"),o(5842),o(7324),o(4815),o(3109)},4637:(t,e,o)=>{o.d(e,{q:()=>s});var i=o(2558),s={name:"default",resolver:t=>(0,i.D)(`assets/icons/${t}.svg`)}},4667:(t,e,o)=>{o.d(e,{m:()=>G});var i=o(8819),s=o(541),r=o(7324),l=o(4815),a=o(3109);const n=Math.min,c=Math.max,d=Math.round,h=Math.floor,u=t=>({x:t,y:t}),p={left:"right",right:"left",bottom:"top",top:"bottom"},m={start:"end",end:"start"};function g(t,e,o){return c(t,n(e,o))}function b(t,e){return"function"==typeof t?t(e):t}function v(t){return t.split("-")[0]}function f(t){return t.split("-")[1]}function y(t){return"x"===t?"y":"x"}function w(t){return"y"===t?"height":"width"}function _(t){return["top","bottom"].includes(v(t))?"y":"x"}function x(t){return y(_(t))}function C(t){return t.replace(/start|end/g,(t=>m[t]))}function k(t){return t.replace(/left|right|bottom|top/g,(t=>p[t]))}function $(t){return"number"!=typeof t?function(t){return{top:0,right:0,bottom:0,left:0,...t}}(t):{top:t,right:t,bottom:t,left:t}}function z(t){const{x:e,y:o,width:i,height:s}=t;return{width:i,height:s,top:o,left:e,right:e+i,bottom:o+s,x:e,y:o}}function A(t,e,o){let{reference:i,floating:s}=t;const r=_(e),l=x(e),a=w(l),n=v(e),c="y"===r,d=i.x+i.width/2-s.width/2,h=i.y+i.height/2-s.height/2,u=i[a]/2-s[a]/2;let p;switch(n){case"top":p={x:d,y:i.y-s.height};break;case"bottom":p={x:d,y:i.y+i.height};break;case"right":p={x:i.x+i.width,y:h};break;case"left":p={x:i.x-s.width,y:h};break;default:p={x:i.x,y:i.y}}switch(f(e)){case"start":p[l]-=u*(o&&c?-1:1);break;case"end":p[l]+=u*(o&&c?-1:1)}return p}async function S(t,e){var o;void 0===e&&(e={});const{x:i,y:s,platform:r,rects:l,elements:a,strategy:n}=t,{boundary:c="clippingAncestors",rootBoundary:d="viewport",elementContext:h="floating",altBoundary:u=!1,padding:p=0}=b(e,t),m=$(p),g=a[u?"floating"===h?"reference":"floating":h],v=z(await r.getClippingRect({element:null==(o=await(null==r.isElement?void 0:r.isElement(g)))||o?g:g.contextElement||await(null==r.getDocumentElement?void 0:r.getDocumentElement(a.floating)),boundary:c,rootBoundary:d,strategy:n})),f="floating"===h?{x:i,y:s,width:l.floating.width,height:l.floating.height}:l.reference,y=await(null==r.getOffsetParent?void 0:r.getOffsetParent(a.floating)),w=await(null==r.isElement?void 0:r.isElement(y))&&await(null==r.getScale?void 0:r.getScale(y))||{x:1,y:1},_=z(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:f,offsetParent:y,strategy:n}):f);return{top:(v.top-_.top+m.top)/w.y,bottom:(_.bottom-v.bottom+m.bottom)/w.y,left:(v.left-_.left+m.left)/w.x,right:(_.right-v.right+m.right)/w.x}}var M=o(1860);function E(t){const e=(0,M.L9)(t);let o=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const s=(0,M.sb)(t),r=s?t.offsetWidth:o,l=s?t.offsetHeight:i,a=d(o)!==r||d(i)!==l;return a&&(o=r,i=l),{width:o,height:i,$:a}}function T(t){return(0,M.vq)(t)?t:t.contextElement}function P(t){const e=T(t);if(!(0,M.sb)(e))return u(1);const o=e.getBoundingClientRect(),{width:i,height:s,$:r}=E(e);let l=(r?d(o.width):o.width)/i,a=(r?d(o.height):o.height)/s;return l&&Number.isFinite(l)||(l=1),a&&Number.isFinite(a)||(a=1),{x:l,y:a}}const L=u(0);function D(t){const e=(0,M.zk)(t);return(0,M.Tc)()&&e.visualViewport?{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}:L}function I(t,e,o,i){void 0===e&&(e=!1),void 0===o&&(o=!1);const s=t.getBoundingClientRect(),r=T(t);let l=u(1);e&&(i?(0,M.vq)(i)&&(l=P(i)):l=P(t));const a=function(t,e,o){return void 0===e&&(e=!1),!(!o||e&&o!==(0,M.zk)(t))&&e}(r,o,i)?D(r):u(0);let n=(s.left+a.x)/l.x,c=(s.top+a.y)/l.y,d=s.width/l.x,h=s.height/l.y;if(r){const t=(0,M.zk)(r),e=i&&(0,M.vq)(i)?(0,M.zk)(i):i;let o=t,s=(0,M._m)(o);for(;s&&i&&e!==o;){const t=P(s),e=s.getBoundingClientRect(),i=(0,M.L9)(s),r=e.left+(s.clientLeft+parseFloat(i.paddingLeft))*t.x,l=e.top+(s.clientTop+parseFloat(i.paddingTop))*t.y;n*=t.x,c*=t.y,d*=t.x,h*=t.y,n+=r,c+=l,o=(0,M.zk)(s),s=(0,M._m)(o)}}return z({width:d,height:h,x:n,y:c})}function Z(t,e){const o=(0,M.CP)(t).scrollLeft;return e?e.left+o:I((0,M.ep)(t)).left+o}function O(t,e,o){void 0===o&&(o=!1);const i=t.getBoundingClientRect();return{x:i.left+e.scrollLeft-(o?0:Z(t,i)),y:i.top+e.scrollTop}}function F(t,e,o){let i;if("viewport"===e)i=function(t,e){const o=(0,M.zk)(t),i=(0,M.ep)(t),s=o.visualViewport;let r=i.clientWidth,l=i.clientHeight,a=0,n=0;if(s){r=s.width,l=s.height;const t=(0,M.Tc)();(!t||t&&"fixed"===e)&&(a=s.offsetLeft,n=s.offsetTop)}return{width:r,height:l,x:a,y:n}}(t,o);else if("document"===e)i=function(t){const e=(0,M.ep)(t),o=(0,M.CP)(t),i=t.ownerDocument.body,s=c(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),r=c(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let l=-o.scrollLeft+Z(t);const a=-o.scrollTop;return"rtl"===(0,M.L9)(i).direction&&(l+=c(e.clientWidth,i.clientWidth)-s),{width:s,height:r,x:l,y:a}}((0,M.ep)(t));else if((0,M.vq)(e))i=function(t,e){const o=I(t,!0,"fixed"===e),i=o.top+t.clientTop,s=o.left+t.clientLeft,r=(0,M.sb)(t)?P(t):u(1);return{width:t.clientWidth*r.x,height:t.clientHeight*r.y,x:s*r.x,y:i*r.y}}(e,o);else{const o=D(t);i={x:e.x-o.x,y:e.y-o.y,width:e.width,height:e.height}}return z(i)}function H(t,e){const o=(0,M.$4)(t);return!(o===e||!(0,M.vq)(o)||(0,M.eu)(o))&&("fixed"===(0,M.L9)(o).position||H(o,e))}function B(t,e,o){const i=(0,M.sb)(e),s=(0,M.ep)(e),r="fixed"===o,l=I(t,!0,r,e);let a={scrollLeft:0,scrollTop:0};const n=u(0);if(i||!i&&!r)if(("body"!==(0,M.mq)(e)||(0,M.ZU)(s))&&(a=(0,M.CP)(e)),i){const t=I(e,!0,r,e);n.x=t.x+e.clientLeft,n.y=t.y+e.clientTop}else s&&(n.x=Z(s));const c=!s||i||r?u(0):O(s,a);return{x:l.left+a.scrollLeft-n.x-c.x,y:l.top+a.scrollTop-n.y-c.y,width:l.width,height:l.height}}function V(t){return"static"===(0,M.L9)(t).position}function R(t,e){if(!(0,M.sb)(t)||"fixed"===(0,M.L9)(t).position)return null;if(e)return e(t);let o=t.offsetParent;return(0,M.ep)(t)===o&&(o=o.ownerDocument.body),o}function q(t,e){const o=(0,M.zk)(t);if((0,M.Tf)(t))return o;if(!(0,M.sb)(t)){let e=(0,M.$4)(t);for(;e&&!(0,M.eu)(e);){if((0,M.vq)(e)&&!V(e))return e;e=(0,M.$4)(e)}return o}let i=R(t,e);for(;i&&(0,M.Lv)(i)&&V(i);)i=R(i,e);return i&&(0,M.eu)(i)&&V(i)&&!(0,M.sQ)(i)?o:i||(0,M.gJ)(t)||o}const U={convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{elements:e,rect:o,offsetParent:i,strategy:s}=t;const r="fixed"===s,l=(0,M.ep)(i),a=!!e&&(0,M.Tf)(e.floating);if(i===l||a&&r)return o;let n={scrollLeft:0,scrollTop:0},c=u(1);const d=u(0),h=(0,M.sb)(i);if((h||!h&&!r)&&(("body"!==(0,M.mq)(i)||(0,M.ZU)(l))&&(n=(0,M.CP)(i)),(0,M.sb)(i))){const t=I(i);c=P(i),d.x=t.x+i.clientLeft,d.y=t.y+i.clientTop}const p=!l||h||r?u(0):O(l,n,!0);return{width:o.width*c.x,height:o.height*c.y,x:o.x*c.x-n.scrollLeft*c.x+d.x+p.x,y:o.y*c.y-n.scrollTop*c.y+d.y+p.y}},getDocumentElement:M.ep,getClippingRect:function(t){let{element:e,boundary:o,rootBoundary:i,strategy:s}=t;const r=[..."clippingAncestors"===o?(0,M.Tf)(e)?[]:function(t,e){const o=e.get(t);if(o)return o;let i=(0,M.v9)(t,[],!1).filter((t=>(0,M.vq)(t)&&"body"!==(0,M.mq)(t))),s=null;const r="fixed"===(0,M.L9)(t).position;let l=r?(0,M.$4)(t):t;for(;(0,M.vq)(l)&&!(0,M.eu)(l);){const e=(0,M.L9)(l),o=(0,M.sQ)(l);o||"fixed"!==e.position||(s=null),(r?!o&&!s:!o&&"static"===e.position&&s&&["absolute","fixed"].includes(s.position)||(0,M.ZU)(l)&&!o&&H(t,l))?i=i.filter((t=>t!==l)):s=e,l=(0,M.$4)(l)}return e.set(t,i),i}(e,this._c):[].concat(o),i],l=r[0],a=r.reduce(((t,o)=>{const i=F(e,o,s);return t.top=c(i.top,t.top),t.right=n(i.right,t.right),t.bottom=n(i.bottom,t.bottom),t.left=c(i.left,t.left),t}),F(e,l,s));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}},getOffsetParent:q,getElementRects:async function(t){const e=this.getOffsetParent||q,o=this.getDimensions,i=await o(t.floating);return{reference:B(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}},getClientRects:function(t){return Array.from(t.getClientRects())},getDimensions:function(t){const{width:e,height:o}=E(t);return{width:e,height:o}},getScale:P,isElement:M.vq,isRTL:function(t){return"rtl"===(0,M.L9)(t).direction}};function N(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}const W=function(t){return void 0===t&&(t={}),{name:"size",options:t,async fn(e){var o,i;const{placement:s,rects:r,platform:l,elements:a}=e,{apply:d=()=>{},...h}=b(t,e),u=await S(e,h),p=v(s),m=f(s),g="y"===_(s),{width:y,height:w}=r.floating;let x,C;"top"===p||"bottom"===p?(x=p,C=m===(await(null==l.isRTL?void 0:l.isRTL(a.floating))?"start":"end")?"left":"right"):(C=p,x="end"===m?"top":"bottom");const k=w-u.top-u.bottom,$=y-u.left-u.right,z=n(w-u[x],k),A=n(y-u[C],$),M=!e.middlewareData.shift;let E=z,T=A;if(null!=(o=e.middlewareData.shift)&&o.enabled.x&&(T=$),null!=(i=e.middlewareData.shift)&&i.enabled.y&&(E=k),M&&!m){const t=c(u.left,0),e=c(u.right,0),o=c(u.top,0),i=c(u.bottom,0);g?T=y-2*(0!==t||0!==e?t+e:c(u.left,u.right)):E=w-2*(0!==o||0!==i?o+i:c(u.top,u.bottom))}await d({...e,availableWidth:T,availableHeight:E});const P=await l.getDimensions(a.floating);return y!==P.width||w!==P.height?{reset:{rects:!0}}:{}}}};var j=o(3788),K=o(5024),J=o(9409),X=o(8146),G=class extends l.f{constructor(){super(...arguments),this.localize=new s.c(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const t=this.anchorEl.getBoundingClientRect(),e=this.popup.getBoundingClientRect();let o=0,i=0,s=0,r=0,l=0,a=0,n=0,c=0;this.placement.includes("top")||this.placement.includes("bottom")?t.top<e.top?(o=t.left,i=t.bottom,s=t.right,r=t.bottom,l=e.left,a=e.top,n=e.right,c=e.top):(o=e.left,i=e.bottom,s=e.right,r=e.bottom,l=t.left,a=t.top,n=t.right,c=t.top):t.left<e.left?(o=t.right,i=t.top,s=e.left,r=e.top,l=t.right,a=t.bottom,n=e.left,c=e.bottom):(o=e.right,i=e.top,s=t.left,r=t.top,l=e.right,a=e.bottom,n=t.left,c=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${o}px`),this.style.setProperty("--hover-bridge-top-left-y",`${i}px`),this.style.setProperty("--hover-bridge-top-right-x",`${s}px`),this.style.setProperty("--hover-bridge-top-right-y",`${r}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${l}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${a}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${n}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${c}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&"string"==typeof this.anchor){const t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||null!==(t=this.anchor)&&"object"==typeof t&&"getBoundingClientRect"in t&&(!("contextElement"in t)||t.contextElement instanceof Element)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');var t;this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){this.anchorEl&&this.active&&(this.cleanup=function(t,e,o,i){void 0===i&&(i={});const{ancestorScroll:s=!0,ancestorResize:r=!0,elementResize:l="function"==typeof ResizeObserver,layoutShift:a="function"==typeof IntersectionObserver,animationFrame:d=!1}=i,u=T(t),p=s||r?[...u?(0,M.v9)(u):[],...(0,M.v9)(e)]:[];p.forEach((t=>{s&&t.addEventListener("scroll",o,{passive:!0}),r&&t.addEventListener("resize",o)}));const m=u&&a?function(t,e){let o,i=null;const s=(0,M.ep)(t);function r(){var t;clearTimeout(o),null==(t=i)||t.disconnect(),i=null}return function l(a,d){void 0===a&&(a=!1),void 0===d&&(d=1),r();const u=t.getBoundingClientRect(),{left:p,top:m,width:g,height:b}=u;if(a||e(),!g||!b)return;const v={rootMargin:-h(m)+"px "+-h(s.clientWidth-(p+g))+"px "+-h(s.clientHeight-(m+b))+"px "+-h(p)+"px",threshold:c(0,n(1,d))||1};let f=!0;function y(e){const i=e[0].intersectionRatio;if(i!==d){if(!f)return l();i?l(!1,i):o=setTimeout((()=>{l(!1,1e-7)}),1e3)}1!==i||N(u,t.getBoundingClientRect())||l(),f=!1}try{i=new IntersectionObserver(y,{...v,root:s.ownerDocument})}catch(t){i=new IntersectionObserver(y,v)}i.observe(t)}(!0),r}(u,o):null;let g,b=-1,v=null;l&&(v=new ResizeObserver((t=>{let[i]=t;i&&i.target===u&&v&&(v.unobserve(e),cancelAnimationFrame(b),b=requestAnimationFrame((()=>{var t;null==(t=v)||t.observe(e)}))),o()})),u&&!d&&v.observe(u),v.observe(e));let f=d?I(t):null;return d&&function e(){const i=I(t);f&&!N(f,i)&&o(),f=i,g=requestAnimationFrame(e)}(),o(),()=>{var t;p.forEach((t=>{s&&t.removeEventListener("scroll",o),r&&t.removeEventListener("resize",o)})),null==m||m(),null==(t=v)||t.disconnect(),v=null,d&&cancelAnimationFrame(g)}}(this.anchorEl,this.popup,(()=>{this.reposition()})))}async stop(){return new Promise((t=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame((()=>t()))):t()}))}reposition(){if(!this.active||!this.anchorEl)return;const t=[(e={mainAxis:this.distance,crossAxis:this.skidding},void 0===e&&(e=0),{name:"offset",options:e,async fn(t){var o,i;const{x:s,y:r,placement:l,middlewareData:a}=t,n=await async function(t,e){const{placement:o,platform:i,elements:s}=t,r=await(null==i.isRTL?void 0:i.isRTL(s.floating)),l=v(o),a=f(o),n="y"===_(o),c=["left","top"].includes(l)?-1:1,d=r&&n?-1:1,h=b(e,t);let{mainAxis:u,crossAxis:p,alignmentAxis:m}="number"==typeof h?{mainAxis:h,crossAxis:0,alignmentAxis:null}:{mainAxis:h.mainAxis||0,crossAxis:h.crossAxis||0,alignmentAxis:h.alignmentAxis};return a&&"number"==typeof m&&(p="end"===a?-1*m:m),n?{x:p*d,y:u*c}:{x:u*c,y:p*d}}(t,e);return l===(null==(o=a.offset)?void 0:o.placement)&&null!=(i=a.arrow)&&i.alignmentOffset?{}:{x:s+n.x,y:r+n.y,data:{...n,placement:l}}}})];var e;this.sync?t.push(W({apply:({rects:t})=>{const e="width"===this.sync||"both"===this.sync,o="height"===this.sync||"both"===this.sync;this.popup.style.width=e?`${t.reference.width}px`:"",this.popup.style.height=o?`${t.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&t.push(function(t){return void 0===t&&(t={}),{name:"flip",options:t,async fn(e){var o,i;const{placement:s,middlewareData:r,rects:l,initialPlacement:a,platform:n,elements:c}=e,{mainAxis:d=!0,crossAxis:h=!0,fallbackPlacements:u,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:g=!0,...y}=b(t,e);if(null!=(o=r.arrow)&&o.alignmentOffset)return{};const $=v(s),z=_(a),A=v(a)===a,M=await(null==n.isRTL?void 0:n.isRTL(c.floating)),E=u||(A||!g?[k(a)]:function(t){const e=k(t);return[C(t),e,C(e)]}(a)),T="none"!==m;!u&&T&&E.push(...function(t,e,o,i){const s=f(t);let r=function(t,e,o){const i=["left","right"],s=["right","left"],r=["top","bottom"],l=["bottom","top"];switch(t){case"top":case"bottom":return o?e?s:i:e?i:s;case"left":case"right":return e?r:l;default:return[]}}(v(t),"start"===o,i);return s&&(r=r.map((t=>t+"-"+s)),e&&(r=r.concat(r.map(C)))),r}(a,g,m,M));const P=[a,...E],L=await S(e,y),D=[];let I=(null==(i=r.flip)?void 0:i.overflows)||[];if(d&&D.push(L[$]),h){const t=function(t,e,o){void 0===o&&(o=!1);const i=f(t),s=x(t),r=w(s);let l="x"===s?i===(o?"end":"start")?"right":"left":"start"===i?"bottom":"top";return e.reference[r]>e.floating[r]&&(l=k(l)),[l,k(l)]}(s,l,M);D.push(L[t[0]],L[t[1]])}if(I=[...I,{placement:s,overflows:D}],!D.every((t=>t<=0))){var Z,O;const t=((null==(Z=r.flip)?void 0:Z.index)||0)+1,e=P[t];if(e)return{data:{index:t,overflows:I},reset:{placement:e}};let o=null==(O=I.filter((t=>t.overflows[0]<=0)).sort(((t,e)=>t.overflows[1]-e.overflows[1]))[0])?void 0:O.placement;if(!o)switch(p){case"bestFit":{var F;const t=null==(F=I.filter((t=>{if(T){const e=_(t.placement);return e===z||"y"===e}return!0})).map((t=>[t.placement,t.overflows.filter((t=>t>0)).reduce(((t,e)=>t+e),0)])).sort(((t,e)=>t[1]-e[1]))[0])?void 0:F[0];t&&(o=t);break}case"initialPlacement":o=a}if(s!==o)return{reset:{placement:o}}}return{}}}}({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:"best-fit"===this.flipFallbackStrategy?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(function(t){return void 0===t&&(t={}),{name:"shift",options:t,async fn(e){const{x:o,y:i,placement:s}=e,{mainAxis:r=!0,crossAxis:l=!1,limiter:a={fn:t=>{let{x:e,y:o}=t;return{x:e,y:o}}},...n}=b(t,e),c={x:o,y:i},d=await S(e,n),h=_(v(s)),u=y(h);let p=c[u],m=c[h];if(r){const t="y"===u?"bottom":"right";p=g(p+d["y"===u?"top":"left"],p,p-d[t])}if(l){const t="y"===h?"bottom":"right";m=g(m+d["y"===h?"top":"left"],m,m-d[t])}const f=a.fn({...e,[u]:p,[h]:m});return{...f,data:{x:f.x-o,y:f.y-i,enabled:{[u]:r,[h]:l}}}}}}({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?t.push(W({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:t,availableHeight:e})=>{"vertical"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-height",`${e}px`):this.style.removeProperty("--auto-size-available-height"),"horizontal"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-width",`${t}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push((t=>({name:"arrow",options:t,async fn(e){const{x:o,y:i,placement:s,rects:r,platform:l,elements:a,middlewareData:c}=e,{element:d,padding:h=0}=b(t,e)||{};if(null==d)return{};const u=$(h),p={x:o,y:i},m=x(s),v=w(m),y=await l.getDimensions(d),_="y"===m,C=_?"top":"left",k=_?"bottom":"right",z=_?"clientHeight":"clientWidth",A=r.reference[v]+r.reference[m]-p[m]-r.floating[v],S=p[m]-r.reference[m],M=await(null==l.getOffsetParent?void 0:l.getOffsetParent(d));let E=M?M[z]:0;E&&await(null==l.isElement?void 0:l.isElement(M))||(E=a.floating[z]||r.floating[v]);const T=A/2-S/2,P=E/2-y[v]/2-1,L=n(u[C],P),D=n(u[k],P),I=L,Z=E-y[v]-D,O=E/2-y[v]/2+T,F=g(I,O,Z),H=!c.arrow&&null!=f(s)&&O!==F&&r.reference[v]/2-(O<I?L:D)-y[v]/2<0,B=H?O<I?O-I:O-Z:0;return{[m]:p[m]+B,data:{[m]:F,centerOffset:O-F-B,...H&&{alignmentOffset:B}},reset:H}}}))({element:this.arrowEl,padding:this.arrowPadding}));const o="absolute"===this.strategy?t=>U.getOffsetParent(t,J.WX):U.getOffsetParent;((t,e,o)=>{const i=new Map,s={platform:U,...o},r={...s.platform,_c:i};return(async(t,e,o)=>{const{placement:i="bottom",strategy:s="absolute",middleware:r=[],platform:l}=o,a=r.filter(Boolean),n=await(null==l.isRTL?void 0:l.isRTL(e));let c=await l.getElementRects({reference:t,floating:e,strategy:s}),{x:d,y:h}=A(c,i,n),u=i,p={},m=0;for(let o=0;o<a.length;o++){const{name:r,fn:g}=a[o],{x:b,y:v,data:f,reset:y}=await g({x:d,y:h,initialPlacement:i,placement:u,strategy:s,middlewareData:p,rects:c,platform:l,elements:{reference:t,floating:e}});d=null!=b?b:d,h=null!=v?v:h,p={...p,[r]:{...p[r],...f}},y&&m<=50&&(m++,"object"==typeof y&&(y.placement&&(u=y.placement),y.rects&&(c=!0===y.rects?await l.getElementRects({reference:t,floating:e,strategy:s}):y.rects),({x:d,y:h}=A(c,u,n))),o=-1)}return{x:d,y:h,placement:u,strategy:s,middlewareData:p}})(t,e,{...s,platform:r})})(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.strategy,platform:(0,a.ko)((0,a.IA)({},U),{getOffsetParent:o})}).then((({x:t,y:e,middlewareData:o,placement:i})=>{const s="rtl"===this.localize.dir(),r={top:"bottom",right:"left",bottom:"top",left:"right"}[i.split("-")[0]];if(this.setAttribute("data-current-placement",i),Object.assign(this.popup.style,{left:`${t}px`,top:`${e}px`}),this.arrow){const t=o.arrow.x,e=o.arrow.y;let i="",l="",a="",n="";if("start"===this.arrowPlacement){const o="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";i="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",l=s?o:"",n=s?"":o}else if("end"===this.arrowPlacement){const o="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";l=s?"":o,n=s?o:"",a="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else"center"===this.arrowPlacement?(n="number"==typeof t?"calc(50% - var(--arrow-size-diagonal))":"",i="number"==typeof e?"calc(50% - var(--arrow-size-diagonal))":""):(n="number"==typeof t?`${t}px`:"",i="number"==typeof e?`${e}px`:"");Object.assign(this.arrowEl.style,{top:i,right:l,bottom:a,left:n,[r]:"calc(var(--arrow-size-diagonal) * -1)"})}})),requestAnimationFrame((()=>this.updateHoverBridge())),this.emit("sl-reposition")}render(){return K.qy`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${(0,j.H)({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${(0,j.H)({popup:!0,"popup--active":this.active,"popup--fixed":"fixed"===this.strategy,"popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?K.qy`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};G.styles=[r.$,i.w],(0,a.Cc)([(0,X.P)(".popup")],G.prototype,"popup",2),(0,a.Cc)([(0,X.P)(".popup__arrow")],G.prototype,"arrowEl",2),(0,a.Cc)([(0,X.MZ)()],G.prototype,"anchor",2),(0,a.Cc)([(0,X.MZ)({type:Boolean,reflect:!0})],G.prototype,"active",2),(0,a.Cc)([(0,X.MZ)({reflect:!0})],G.prototype,"placement",2),(0,a.Cc)([(0,X.MZ)({reflect:!0})],G.prototype,"strategy",2),(0,a.Cc)([(0,X.MZ)({type:Number})],G.prototype,"distance",2),(0,a.Cc)([(0,X.MZ)({type:Number})],G.prototype,"skidding",2),(0,a.Cc)([(0,X.MZ)({type:Boolean})],G.prototype,"arrow",2),(0,a.Cc)([(0,X.MZ)({attribute:"arrow-placement"})],G.prototype,"arrowPlacement",2),(0,a.Cc)([(0,X.MZ)({attribute:"arrow-padding",type:Number})],G.prototype,"arrowPadding",2),(0,a.Cc)([(0,X.MZ)({type:Boolean})],G.prototype,"flip",2),(0,a.Cc)([(0,X.MZ)({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map((t=>t.trim())).filter((t=>""!==t)),toAttribute:t=>t.join(" ")}})],G.prototype,"flipFallbackPlacements",2),(0,a.Cc)([(0,X.MZ)({attribute:"flip-fallback-strategy"})],G.prototype,"flipFallbackStrategy",2),(0,a.Cc)([(0,X.MZ)({type:Object})],G.prototype,"flipBoundary",2),(0,a.Cc)([(0,X.MZ)({attribute:"flip-padding",type:Number})],G.prototype,"flipPadding",2),(0,a.Cc)([(0,X.MZ)({type:Boolean})],G.prototype,"shift",2),(0,a.Cc)([(0,X.MZ)({type:Object})],G.prototype,"shiftBoundary",2),(0,a.Cc)([(0,X.MZ)({attribute:"shift-padding",type:Number})],G.prototype,"shiftPadding",2),(0,a.Cc)([(0,X.MZ)({attribute:"auto-size"})],G.prototype,"autoSize",2),(0,a.Cc)([(0,X.MZ)()],G.prototype,"sync",2),(0,a.Cc)([(0,X.MZ)({type:Object})],G.prototype,"autoSizeBoundary",2),(0,a.Cc)([(0,X.MZ)({attribute:"auto-size-padding",type:Number})],G.prototype,"autoSizePadding",2),(0,a.Cc)([(0,X.MZ)({attribute:"hover-bridge",type:Boolean})],G.prototype,"hoverBridge",2)},4716:(t,e,o)=>{var i;o.d(e,{JW:()=>z,XX:()=>N,c0:()=>S,ej:()=>A,ge:()=>q,qy:()=>$,s6:()=>M});const s=globalThis,r=s.trustedTypes,l=r?r.createPolicy("lit-html",{createHTML:t=>t}):void 0,a="$lit$",n=`lit$${Math.random().toFixed(9).slice(2)}$`,c="?"+n,d=`<${c}>`,h=document,u=()=>h.createComment(""),p=t=>null===t||"object"!=typeof t&&"function"!=typeof t,m=Array.isArray,g=t=>m(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),b="[ \t\n\f\r]",v=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,f=/-->/g,y=/>/g,w=RegExp(`>|${b}(?:([^\\s"'>=/]+)(${b}*=${b}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),_=/'/g,x=/"/g,C=/^(?:script|style|textarea|title)$/i,k=t=>function(e){for(var o=arguments.length,i=new Array(o>1?o-1:0),s=1;s<o;s++)i[s-1]=arguments[s];return{_$litType$:t,strings:e,values:i}},$=k(1),z=k(2),A=k(3),S=Symbol.for("lit-noChange"),M=Symbol.for("lit-nothing"),E=new WeakMap,T=h.createTreeWalker(h,129);function P(t,e){if(!m(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==l?l.createHTML(e):e}const L=(t,e)=>{const o=t.length-1,i=[];let s,r=2===e?"<svg>":3===e?"<math>":"",l=v;for(let e=0;e<o;e++){const o=t[e];let c,h,u=-1,p=0;for(;p<o.length&&(l.lastIndex=p,h=l.exec(o),null!==h);)p=l.lastIndex,l===v?"!--"===h[1]?l=f:void 0!==h[1]?l=y:void 0!==h[2]?(C.test(h[2])&&(s=RegExp("</"+h[2],"g")),l=w):void 0!==h[3]&&(l=w):l===w?">"===h[0]?(l=null!=s?s:v,u=-1):void 0===h[1]?u=-2:(u=l.lastIndex-h[2].length,c=h[1],l=void 0===h[3]?w:'"'===h[3]?x:_):l===x||l===_?l=w:l===f||l===y?l=v:(l=w,s=void 0);const m=l===w&&t[e+1].startsWith("/>")?" ":"";r+=l===v?o+d:u>=0?(i.push(c),o.slice(0,u)+a+o.slice(u)+n+m):o+n+(-2===u?e:m)}return[P(t,r+(t[o]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]};class D{constructor(t,e){let o,{strings:i,_$litType$:s}=t;this.parts=[];let l=0,d=0;const h=i.length-1,p=this.parts,[m,g]=L(i,s);if(this.el=D.createElement(m,e),T.currentNode=this.el.content,2===s||3===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(o=T.nextNode())&&p.length<h;){if(1===o.nodeType){if(o.hasAttributes())for(const t of o.getAttributeNames())if(t.endsWith(a)){const e=g[d++],i=o.getAttribute(t).split(n),s=/([.?@])?(.*)/.exec(e);p.push({type:1,index:l,name:s[2],strings:i,ctor:"."===s[1]?H:"?"===s[1]?B:"@"===s[1]?V:F}),o.removeAttribute(t)}else t.startsWith(n)&&(p.push({type:6,index:l}),o.removeAttribute(t));if(C.test(o.tagName)){const t=o.textContent.split(n),e=t.length-1;if(e>0){o.textContent=r?r.emptyScript:"";for(let i=0;i<e;i++)o.append(t[i],u()),T.nextNode(),p.push({type:2,index:++l});o.append(t[e],u())}}}else if(8===o.nodeType)if(o.data===c)p.push({type:2,index:l});else{let t=-1;for(;-1!==(t=o.data.indexOf(n,t+1));)p.push({type:7,index:l}),t+=n.length-1}l++}}static createElement(t,e){const o=h.createElement("template");return o.innerHTML=t,o}}function I(t,e){var o,i,s,r,l;let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t,n=arguments.length>3?arguments[3]:void 0;if(e===S)return e;let c=void 0!==n?null===(o=a._$Co)||void 0===o?void 0:o[n]:a._$Cl;const d=p(e)?void 0:e._$litDirective$;return(null===(i=c)||void 0===i?void 0:i.constructor)!==d&&(null!==(s=c)&&void 0!==s&&null!==(r=s._$AO)&&void 0!==r&&r.call(s,!1),void 0===d?c=void 0:(c=new d(t),c._$AT(t,a,n)),void 0!==n?(null!==(l=a._$Co)&&void 0!==l?l:a._$Co=[])[n]=c:a._$Cl=c),void 0!==c&&(e=I(t,c._$AS(t,e.values),c,n)),e}class Z{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:o},parts:i}=this._$AD,s=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:h).importNode(o,!0);T.currentNode=s;let r=T.nextNode(),l=0,a=0,n=i[0];for(;void 0!==n;){var c;if(l===n.index){let e;2===n.type?e=new O(r,r.nextSibling,this,t):1===n.type?e=new n.ctor(r,n.name,n.strings,this,t):6===n.type&&(e=new R(r,this,t)),this._$AV.push(e),n=i[++a]}l!==(null===(c=n)||void 0===c?void 0:c.index)&&(r=T.nextNode(),l++)}return T.currentNode=h,s}p(t){let e=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}}class O{get _$AU(){var t,e;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cv}constructor(t,e,o,i){var s;this.type=2,this._$AH=M,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=i,this._$Cv=null===(s=null==i?void 0:i.isConnected)||void 0===s||s}get parentNode(){var t;let e=this._$AA.parentNode;const o=this._$AM;return void 0!==o&&11===(null===(t=e)||void 0===t?void 0:t.nodeType)&&(e=o.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t){t=I(this,t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this),p(t)?t===M||null==t||""===t?(this._$AH!==M&&this._$AR(),this._$AH=M):t!==this._$AH&&t!==S&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):g(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==M&&p(this._$AH)?this._$AA.nextSibling.data=t:this.T(h.createTextNode(t)),this._$AH=t}$(t){var e;const{values:o,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=D.createElement(P(i.h,i.h[0]),this.options)),i);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===s)this._$AH.p(o);else{const t=new Z(s,this),e=t.u(this.options);t.p(o),this.T(e),this._$AH=t}}_$AC(t){let e=E.get(t.strings);return void 0===e&&E.set(t.strings,e=new D(t)),e}k(t){m(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,i=0;for(const s of t)i===e.length?e.push(o=new O(this.O(u()),this.O(u()),this,this.options)):o=e[i],o._$AI(s),i++;i<e.length&&(this._$AR(o&&o._$AB.nextSibling,i),e.length=i)}_$AR(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._$AA.nextSibling,e=arguments.length>1?arguments[1]:void 0;for(null===(o=this._$AP)||void 0===o||o.call(this,!1,!0,e);t&&t!==this._$AB;){var o;const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cv=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class F{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,o,i,s){this.type=1,this._$AH=M,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=s,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=M}_$AI(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,o=arguments.length>2?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0;const s=this.strings;let r=!1;if(void 0===s)t=I(this,t,e,0),r=!p(t)||t!==this._$AH&&t!==S,r&&(this._$AH=t);else{const i=t;let l,a;for(t=s[0],l=0;l<s.length-1;l++)a=I(this,i[o+l],e,l),a===S&&(a=this._$AH[l]),r||(r=!p(a)||a!==this._$AH[l]),a===M?t=M:t!==M&&(t+=(null!=a?a:"")+s[l+1]),this._$AH[l]=a}r&&!i&&this.j(t)}j(t){t===M?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class H extends F{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===M?void 0:t}}class B extends F{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==M)}}class V extends F{constructor(t,e,o,i,s){super(t,e,o,i,s),this.type=5}_$AI(t){var e;if((t=null!==(e=I(this,t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,0))&&void 0!==e?e:M)===S)return;const o=this._$AH,i=t===M&&o!==M||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,s=t!==M&&(o===M||i);i&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,o;"function"==typeof this._$AH?this._$AH.call(null!==(e=null===(o=this.options)||void 0===o?void 0:o.host)&&void 0!==e?e:this.element,t):this._$AH.handleEvent(t)}}class R{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){I(this,t)}}const q={M:a,P:n,A:c,C:1,L,R:Z,D:g,V:I,I:O,H:F,N:B,U:V,B:H,F:R},U=s.litHtmlPolyfillSupport;null!=U&&U(D,O),(null!==(i=s.litHtmlVersions)&&void 0!==i?i:s.litHtmlVersions=[]).push("3.2.1");const N=(t,e,o)=>{var i;const s=null!==(i=null==o?void 0:o.renderBefore)&&void 0!==i?i:e;let r=s._$litPart$;if(void 0===r){var l;const t=null!==(l=null==o?void 0:o.renderBefore)&&void 0!==l?l:null;s._$litPart$=r=new O(e.insertBefore(u(),t),t,void 0,null!=o?o:{})}return r._$AI(t),r}},4723:(t,e,o)=>{var i=o(5024),s=i.AH`
  :host {
    --divider-width: 2px;
    --handle-size: 2.5rem;

    display: inline-block;
    position: relative;
  }

  .image-comparer {
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
  }

  .image-comparer__before,
  .image-comparer__after {
    display: block;
    pointer-events: none;
  }

  .image-comparer__before::slotted(img),
  .image-comparer__after::slotted(img),
  .image-comparer__before::slotted(svg),
  .image-comparer__after::slotted(svg) {
    display: block;
    max-width: 100% !important;
    height: auto;
  }

  .image-comparer__after {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .image-comparer__divider {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    width: var(--divider-width);
    height: 100%;
    background-color: var(--sl-color-neutral-0);
    translate: calc(var(--divider-width) / -2);
    cursor: ew-resize;
  }

  .image-comparer__handle {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: calc(50% - (var(--handle-size) / 2));
    width: var(--handle-size);
    height: var(--handle-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: var(--sl-border-radius-circle);
    font-size: calc(var(--handle-size) * 0.5);
    color: var(--sl-color-neutral-700);
    cursor: inherit;
    z-index: 10;
  }

  .image-comparer__handle:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`,r=o(4319),l=o(9162),a=o(541),n=o(3389),c=o(4302),d=o(7324),h=o(4815),u=o(3109),p=o(3788),m=o(8146),g=o(8981),b=class extends h.f{constructor(){super(...arguments),this.localize=new a.c(this),this.position=50}handleDrag(t){const{width:e}=this.base.getBoundingClientRect(),o="rtl"===this.localize.dir();t.preventDefault(),(0,r.$)(this.base,{onMove:t=>{this.position=parseFloat((0,l.q)(t/e*100,0,100).toFixed(2)),o&&(this.position=100-this.position)},initialEvent:t})}handleKeyDown(t){const e="ltr"===this.localize.dir(),o="rtl"===this.localize.dir();if(["ArrowLeft","ArrowRight","Home","End"].includes(t.key)){const i=t.shiftKey?10:1;let s=this.position;t.preventDefault(),(e&&"ArrowLeft"===t.key||o&&"ArrowRight"===t.key)&&(s-=i),(e&&"ArrowRight"===t.key||o&&"ArrowLeft"===t.key)&&(s+=i),"Home"===t.key&&(s=0),"End"===t.key&&(s=100),s=(0,l.q)(s,0,100),this.position=s}}handlePositionChange(){this.emit("sl-change")}render(){const t="rtl"===this.localize.dir();return i.qy`
      <div
        part="base"
        id="image-comparer"
        class=${(0,p.H)({"image-comparer":!0,"image-comparer--rtl":t})}
        @keydown=${this.handleKeyDown}
      >
        <div class="image-comparer__image">
          <div part="before" class="image-comparer__before">
            <slot name="before"></slot>
          </div>

          <div
            part="after"
            class="image-comparer__after"
            style=${(0,g.W)({clipPath:t?`inset(0 0 0 ${100-this.position}%)`:`inset(0 ${100-this.position}% 0 0)`})}
          >
            <slot name="after"></slot>
          </div>
        </div>

        <div
          part="divider"
          class="image-comparer__divider"
          style=${(0,g.W)({left:t?100-this.position+"%":`${this.position}%`})}
          @mousedown=${this.handleDrag}
          @touchstart=${this.handleDrag}
        >
          <div
            part="handle"
            class="image-comparer__handle"
            role="scrollbar"
            aria-valuenow=${this.position}
            aria-valuemin="0"
            aria-valuemax="100"
            aria-controls="image-comparer"
            tabindex="0"
          >
            <slot name="handle">
              <sl-icon library="system" name="grip-vertical"></sl-icon>
            </slot>
          </div>
        </div>
      </div>
    `}};b.styles=[d.$,s],b.scopedElement={"sl-icon":n.B},(0,u.Cc)([(0,m.P)(".image-comparer")],b.prototype,"base",2),(0,u.Cc)([(0,m.P)(".image-comparer__handle")],b.prototype,"handle",2),(0,u.Cc)([(0,m.MZ)({type:Number,reflect:!0})],b.prototype,"position",2),(0,u.Cc)([(0,c.w)("position",{waitUntilFirstUpdate:!0})],b.prototype,"handlePositionChange",1),b.define("sl-image-comparer"),o(3585),o(4415),o(4637),o(8326),o(2089)},4804:(t,e,o)=>{var i=o(2591),s=o.n(i),r=o(1740),l=o.n(r),a=o(8128),n=o.n(a),c=o(855),d=o.n(c),h=o(3051),u=o.n(h),p=o(3656),m=o.n(p),g=o(3970),b={};b.styleTagTransform=m(),b.setAttributes=d(),b.insert=n().bind(null,"head"),b.domAPI=l(),b.insertStyleElement=u(),s()(g.A,b),g.A&&g.A.locals&&g.A.locals},4815:(t,e,o)=>{o.d(e,{f:()=>a});var i,s=o(3109),r=o(5024),l=o(8146),a=class extends r.WF{constructor(){super(),(0,s.VK)(this,i,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach((([t,e])=>{this.constructor.define(t,e)}))}emit(t,e){const o=new CustomEvent(t,(0,s.IA)({bubbles:!0,cancelable:!1,composed:!0,detail:{}},e));return this.dispatchEvent(o),o}static define(t,e=this,o={}){const i=customElements.get(t);if(!i){try{customElements.define(t,e,o)}catch(i){customElements.define(t,class extends e{},o)}return}let s=" (unknown version)",r=s;"version"in e&&e.version&&(s=" v"+e.version),"version"in i&&i.version&&(r=" v"+i.version),s&&r&&s===r||console.warn(`Attempted to register <${t}>${s}, but <${t}>${r} has already been registered.`)}attributeChangedCallback(t,e,o){(0,s.S7)(this,i)||(this.constructor.elementProperties.forEach(((t,e)=>{t.reflect&&null!=this[e]&&this.initialReflectedProperties.set(e,this[e])})),(0,s.OV)(this,i,!0)),super.attributeChangedCallback(t,e,o)}willUpdate(t){super.willUpdate(t),this.initialReflectedProperties.forEach(((e,o)=>{t.has(o)&&null==this[o]&&(this[o]=e)}))}};i=new WeakMap,a.version="2.20.1",a.dependencies={},(0,s.Cc)([(0,l.MZ)()],a.prototype,"dir",2),(0,s.Cc)([(0,l.MZ)()],a.prototype,"lang",2)},4853:(t,e,o)=>{var i=o(541),s=o(4815),r=o(3109),l=o(5024),a=o(8146),n=class extends s.f{constructor(){super(...arguments),this.localize=new i.c(this),this.date=new Date,this.hourFormat="auto"}render(){const t=new Date(this.date),e="auto"===this.hourFormat?void 0:"12"===this.hourFormat;if(!isNaN(t.getMilliseconds()))return l.qy`
      <time datetime=${t.toISOString()}>
        ${this.localize.date(t,{weekday:this.weekday,era:this.era,year:this.year,month:this.month,day:this.day,hour:this.hour,minute:this.minute,second:this.second,timeZoneName:this.timeZoneName,timeZone:this.timeZone,hour12:e})}
      </time>
    `}};(0,r.Cc)([(0,a.MZ)()],n.prototype,"date",2),(0,r.Cc)([(0,a.MZ)()],n.prototype,"weekday",2),(0,r.Cc)([(0,a.MZ)()],n.prototype,"era",2),(0,r.Cc)([(0,a.MZ)()],n.prototype,"year",2),(0,r.Cc)([(0,a.MZ)()],n.prototype,"month",2),(0,r.Cc)([(0,a.MZ)()],n.prototype,"day",2),(0,r.Cc)([(0,a.MZ)()],n.prototype,"hour",2),(0,r.Cc)([(0,a.MZ)()],n.prototype,"minute",2),(0,r.Cc)([(0,a.MZ)()],n.prototype,"second",2),(0,r.Cc)([(0,a.MZ)({attribute:"time-zone-name"})],n.prototype,"timeZoneName",2),(0,r.Cc)([(0,a.MZ)({attribute:"time-zone"})],n.prototype,"timeZone",2),(0,r.Cc)([(0,a.MZ)({attribute:"hour-format"})],n.prototype,"hourFormat",2),n.define("sl-format-date"),o(3585)},5024:(t,e,o)=>{o.d(e,{WF:()=>a,AH:()=>r.AH,W3:()=>r.W3,qy:()=>l.qy});var i,s,r=o(3169),l=o(4716);class a extends r.mN{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const o=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=o.firstChild),o}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=(0,l.XX)(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return l.c0}}a._$litElement$=!0,a.finalized=!0,null===(i=globalThis.litElementHydrateSupport)||void 0===i||i.call(globalThis,{LitElement:a});const n=globalThis.litElementPolyfillSupport;null==n||n({LitElement:a}),(null!==(s=globalThis.litElementVersions)&&void 0!==s?s:globalThis.litElementVersions=[]).push("4.1.1")},5029:(t,e,o)=>{var i=o(5024),s=i.AH`
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
`,r=o(3088),l=o(1696),a=o(1736),n=o(4101),c=o(4302),d=o(7324),h=o(4815),u=o(3109),p=o(3788),m=o(996),g=o(33),b=o(8146),v=class extends h.f{constructor(){super(...arguments),this.formControlController=new a.Ud(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,e)=>t.checked=e}),this.hasSlotController=new n.X(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleClick(){this.checked=!this.checked,this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleKeyDown(t){"ArrowLeft"===t.key&&(t.preventDefault(),this.checked=!1,this.emit("sl-change"),this.emit("sl-input")),"ArrowRight"===t.key&&(t.preventDefault(),this.checked=!0,this.emit("sl-change"),this.emit("sl-input"))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("help-text"),e=!!this.helpText||!!t;return i.qy`
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
            value=${(0,m.J)(this.value)}
            .checked=${(0,g.V)(this.checked)}
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
    `}};v.styles=[d.$,l.I,s],(0,u.Cc)([(0,b.P)('input[type="checkbox"]')],v.prototype,"input",2),(0,u.Cc)([(0,b.wk)()],v.prototype,"hasFocus",2),(0,u.Cc)([(0,b.MZ)()],v.prototype,"title",2),(0,u.Cc)([(0,b.MZ)()],v.prototype,"name",2),(0,u.Cc)([(0,b.MZ)()],v.prototype,"value",2),(0,u.Cc)([(0,b.MZ)({reflect:!0})],v.prototype,"size",2),(0,u.Cc)([(0,b.MZ)({type:Boolean,reflect:!0})],v.prototype,"disabled",2),(0,u.Cc)([(0,b.MZ)({type:Boolean,reflect:!0})],v.prototype,"checked",2),(0,u.Cc)([(0,r.J)("checked")],v.prototype,"defaultChecked",2),(0,u.Cc)([(0,b.MZ)({reflect:!0})],v.prototype,"form",2),(0,u.Cc)([(0,b.MZ)({type:Boolean,reflect:!0})],v.prototype,"required",2),(0,u.Cc)([(0,b.MZ)({attribute:"help-text"})],v.prototype,"helpText",2),(0,u.Cc)([(0,c.w)("checked",{waitUntilFirstUpdate:!0})],v.prototype,"handleCheckedChange",1),(0,u.Cc)([(0,c.w)("disabled",{waitUntilFirstUpdate:!0})],v.prototype,"handleDisabledChange",1),v.define("sl-switch")},5047:(t,e,o)=>{o(6114).P.define("sl-tree-item"),o(1455),o(5461),o(328),o(3088),o(1696),o(762),o(875),o(1736),o(5137),o(8511),o(541),o(3585),o(3389),o(4415),o(4637),o(8326),o(2089),o(4302),o(7324),o(4815),o(3109)},5128:(t,e,o)=>{o.d(e,{OA:()=>i,WL:()=>r,u$:()=>s});const i={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},s=t=>function(){for(var e=arguments.length,o=new Array(e),i=0;i<e;i++)o[i]=arguments[i];return{_$litDirective$:t,values:o}};class r{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,o){this._$Ct=t,this._$AM=e,this._$Ci=o}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},5137:(t,e,o)=>{o.d(e,{Ee:()=>l,RB:()=>a}),o(3109);var i=new Map,s=new WeakMap;function r(t,e){return"rtl"===e.toLowerCase()?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function l(t,e){i.set(t,function(t){return null!=t?t:{keyframes:[],options:{duration:0}}}(e))}function a(t,e,o){const l=s.get(t);if(null==l?void 0:l[e])return r(l[e],o.dir);const a=i.get(e);return a?r(a,o.dir):{keyframes:[],options:{duration:0}}}},5293:(t,e,o)=>{o.d(e,{H:()=>i});var i=o(5024).AH`
  :host {
    display: inline-block;
  }

  .dropdown::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .dropdown[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .dropdown[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .dropdown[data-current-placement^='left']::part(popup) {
    transform-origin: right;
  }

  .dropdown[data-current-placement^='right']::part(popup) {
    transform-origin: left;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__panel {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    border-radius: var(--sl-border-radius-medium);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    display: block;
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`},5311:(t,e,o)=>{o(192).e.define("sl-resize-observer"),o(6023),o(4302),o(7324),o(4815),o(3109)},5369:(t,e,o)=>{var i=o(3443),s=o(5024).AH`
  ${i.q}

  .button__prefix,
  .button__suffix,
  .button__label {
    display: inline-flex;
    position: relative;
    align-items: center;
  }

  /* We use a hidden input so constraint validation errors work, since they don't appear to show when used with buttons.
    We can't actually hide it, though, otherwise the messages will be suppressed by the browser. */
  .hidden-input {
    all: unset;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    outline: dotted 1px red;
    opacity: 0;
    z-index: -1;
  }
`,r=o(4101),l=o(4302),a=o(7324),n=o(4815),c=o(3109),d=o(3788),h=o(7679),u=o(996),p=o(8146),m=class extends n.f{constructor(){super(...arguments),this.hasSlotController=new r.X(this,"[default]","prefix","suffix"),this.hasFocus=!1,this.checked=!1,this.disabled=!1,this.size="medium",this.pill=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","presentation")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleClick(t){if(this.disabled)return t.preventDefault(),void t.stopPropagation();this.checked=!0}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(t){this.input.focus(t)}blur(){this.input.blur()}render(){return h.qy`
      <div part="base" role="presentation">
        <button
          part="${"button"+(this.checked?" button--checked":"")}"
          role="radio"
          aria-checked="${this.checked}"
          class=${(0,d.H)({button:!0,"button--default":!0,"button--small":"small"===this.size,"button--medium":"medium"===this.size,"button--large":"large"===this.size,"button--checked":this.checked,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--outline":!0,"button--pill":this.pill,"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
          aria-disabled=${this.disabled}
          type="button"
          value=${(0,u.J)(this.value)}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @click=${this.handleClick}
        >
          <slot name="prefix" part="prefix" class="button__prefix"></slot>
          <slot part="label" class="button__label"></slot>
          <slot name="suffix" part="suffix" class="button__suffix"></slot>
        </button>
      </div>
    `}};m.styles=[a.$,s],(0,c.Cc)([(0,p.P)(".button")],m.prototype,"input",2),(0,c.Cc)([(0,p.P)(".hidden-input")],m.prototype,"hiddenInput",2),(0,c.Cc)([(0,p.wk)()],m.prototype,"hasFocus",2),(0,c.Cc)([(0,p.MZ)({type:Boolean,reflect:!0})],m.prototype,"checked",2),(0,c.Cc)([(0,p.MZ)()],m.prototype,"value",2),(0,c.Cc)([(0,p.MZ)({type:Boolean,reflect:!0})],m.prototype,"disabled",2),(0,c.Cc)([(0,p.MZ)({reflect:!0})],m.prototype,"size",2),(0,c.Cc)([(0,p.MZ)({type:Boolean,reflect:!0})],m.prototype,"pill",2),(0,c.Cc)([(0,l.w)("disabled",{waitUntilFirstUpdate:!0})],m.prototype,"handleDisabledChange",1),m.define("sl-radio-button")},5417:(t,e,o)=>{var i=o(5024),s=i.AH`
  :host {
    display: inline-block;
  }
`,r=o(4302),l=o(7324),a=o(4815),n=o(3109),c=o(8146),d=o(8981),h=o(6697),u=class extends a.f{constructor(){super(...arguments),this.value="",this.label="",this.size=128,this.fill="black",this.background="white",this.radius=0,this.errorCorrection="H"}firstUpdated(){this.generate()}generate(){this.hasUpdated&&h.A.render({text:this.value,radius:this.radius,ecLevel:this.errorCorrection,fill:this.fill,background:this.background,size:2*this.size},this.canvas)}render(){var t;return i.qy`
      <canvas
        part="base"
        class="qr-code"
        role="img"
        aria-label=${(null==(t=this.label)?void 0:t.length)>0?this.label:this.value}
        style=${(0,d.W)({width:`${this.size}px`,height:`${this.size}px`})}
      ></canvas>
    `}};u.styles=[l.$,s],(0,n.Cc)([(0,c.P)("canvas")],u.prototype,"canvas",2),(0,n.Cc)([(0,c.MZ)()],u.prototype,"value",2),(0,n.Cc)([(0,c.MZ)()],u.prototype,"label",2),(0,n.Cc)([(0,c.MZ)({type:Number})],u.prototype,"size",2),(0,n.Cc)([(0,c.MZ)()],u.prototype,"fill",2),(0,n.Cc)([(0,c.MZ)()],u.prototype,"background",2),(0,n.Cc)([(0,c.MZ)({type:Number})],u.prototype,"radius",2),(0,n.Cc)([(0,c.MZ)({attribute:"error-correction"})],u.prototype,"errorCorrection",2),(0,n.Cc)([(0,r.w)(["background","errorCorrection","fill","radius","size","value"])],u.prototype,"generate",1),u.define("sl-qr-code")},5461:(t,e,o)=>{o.d(e,{X:()=>f});var i=o(328),s=o(3088),r=o(1696),l=o(1736),a=o(4101),n=o(3389),c=o(4302),d=o(7324),h=o(4815),u=o(3109),p=o(3788),m=o(5024),g=o(996),b=o(33),v=o(8146),f=class extends h.f{constructor(){super(...arguments),this.formControlController=new l.Ud(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,e)=>t.checked=e}),this.hasSlotController=new a.X(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("sl-change")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("help-text"),e=!!this.helpText||!!t;return m.qy`
      <div
        class=${(0,p.H)({"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--has-help-text":e})}
      >
        <label
          part="base"
          class=${(0,p.H)({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":"small"===this.size,"checkbox--medium":"medium"===this.size,"checkbox--large":"large"===this.size})}
        >
          <input
            class="checkbox__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${(0,g.J)(this.value)}
            .indeterminate=${(0,b.V)(this.indeterminate)}
            .checked=${(0,b.V)(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            aria-checked=${this.checked?"true":"false"}
            aria-describedby="help-text"
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
            ${this.checked?m.qy`
                  <sl-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></sl-icon>
                `:""}
            ${!this.checked&&this.indeterminate?m.qy`
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

        <div
          aria-hidden=${e?"false":"true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};f.styles=[d.$,r.I,i.x],f.dependencies={"sl-icon":n.B},(0,u.Cc)([(0,v.P)('input[type="checkbox"]')],f.prototype,"input",2),(0,u.Cc)([(0,v.wk)()],f.prototype,"hasFocus",2),(0,u.Cc)([(0,v.MZ)()],f.prototype,"title",2),(0,u.Cc)([(0,v.MZ)()],f.prototype,"name",2),(0,u.Cc)([(0,v.MZ)()],f.prototype,"value",2),(0,u.Cc)([(0,v.MZ)({reflect:!0})],f.prototype,"size",2),(0,u.Cc)([(0,v.MZ)({type:Boolean,reflect:!0})],f.prototype,"disabled",2),(0,u.Cc)([(0,v.MZ)({type:Boolean,reflect:!0})],f.prototype,"checked",2),(0,u.Cc)([(0,v.MZ)({type:Boolean,reflect:!0})],f.prototype,"indeterminate",2),(0,u.Cc)([(0,s.J)("checked")],f.prototype,"defaultChecked",2),(0,u.Cc)([(0,v.MZ)({reflect:!0})],f.prototype,"form",2),(0,u.Cc)([(0,v.MZ)({type:Boolean,reflect:!0})],f.prototype,"required",2),(0,u.Cc)([(0,v.MZ)({attribute:"help-text"})],f.prototype,"helpText",2),(0,u.Cc)([(0,c.w)("disabled",{waitUntilFirstUpdate:!0})],f.prototype,"handleDisabledChange",1),(0,u.Cc)([(0,c.w)(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],f.prototype,"handleStateChange",1)},5594:(t,e,o)=>{var i=o(5024),s=i.AH`
  :host {
    --size: 128px;
    --track-width: 4px;
    --track-color: var(--sl-color-neutral-200);
    --indicator-width: var(--track-width);
    --indicator-color: var(--sl-color-primary-600);
    --indicator-transition-duration: 0.35s;

    display: inline-flex;
  }

  .progress-ring {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .progress-ring__image {
    width: var(--size);
    height: var(--size);
    rotate: -90deg;
    transform-origin: 50% 50%;
  }

  .progress-ring__track,
  .progress-ring__indicator {
    --radius: calc(var(--size) / 2 - max(var(--track-width), var(--indicator-width)) * 0.5);
    --circumference: calc(var(--radius) * 2 * 3.141592654);

    fill: none;
    r: var(--radius);
    cx: calc(var(--size) / 2);
    cy: calc(var(--size) / 2);
  }

  .progress-ring__track {
    stroke: var(--track-color);
    stroke-width: var(--track-width);
  }

  .progress-ring__indicator {
    stroke: var(--indicator-color);
    stroke-width: var(--indicator-width);
    stroke-linecap: round;
    transition-property: stroke-dashoffset;
    transition-duration: var(--indicator-transition-duration);
    stroke-dasharray: var(--circumference) var(--circumference);
    stroke-dashoffset: calc(var(--circumference) - var(--percentage) * var(--circumference));
  }

  .progress-ring__label {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    user-select: none;
    -webkit-user-select: none;
  }
`,r=o(541),l=o(7324),a=o(4815),n=o(3109),c=o(8146),d=class extends a.f{constructor(){super(...arguments),this.localize=new r.c(this),this.value=0,this.label=""}updated(t){if(super.updated(t),t.has("value")){const t=parseFloat(getComputedStyle(this.indicator).getPropertyValue("r")),e=2*Math.PI*t,o=e-this.value/100*e;this.indicatorOffset=`${o}px`}}render(){return i.qy`
      <div
        part="base"
        class="progress-ring"
        role="progressbar"
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-describedby="label"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${this.value}"
        style="--percentage: ${this.value/100}"
      >
        <svg class="progress-ring__image">
          <circle class="progress-ring__track"></circle>
          <circle class="progress-ring__indicator" style="stroke-dashoffset: ${this.indicatorOffset}"></circle>
        </svg>

        <slot id="label" part="label" class="progress-ring__label"></slot>
      </div>
    `}};d.styles=[l.$,s],(0,n.Cc)([(0,c.P)(".progress-ring__indicator")],d.prototype,"indicator",2),(0,n.Cc)([(0,c.wk)()],d.prototype,"indicatorOffset",2),(0,n.Cc)([(0,c.MZ)({type:Number,reflect:!0})],d.prototype,"value",2),(0,n.Cc)([(0,c.MZ)()],d.prototype,"label",2),d.define("sl-progress-ring"),o(3585)},5736:(t,e,o)=>{var i=o(6114),s=o(5024),r=s.AH`
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

    /*
     * Tree item indentation uses the "em" unit to increment its width on each level, so setting the font size to zero
     * here removes the indentation for all the nodes on the first level.
     */
    font-size: 0;
  }
`,l=o(9162),a=o(541),n=o(4302),c=o(7324),d=o(4815),h=o(3109),u=o(8146);function p(t,e=!1){function o(t){const e=t.getChildrenItems({includeDisabled:!1});if(e.length){const o=e.every((t=>t.selected)),i=e.every((t=>!t.selected&&!t.indeterminate));t.selected=o,t.indeterminate=!o&&!i}}!function t(i){for(const o of i.getChildrenItems())o.selected=e?i.selected||o.selected:!o.disabled&&i.selected,t(o);e&&o(i)}(t),function t(e){const s=e.parentElement;i.P.isTreeItem(s)&&(o(s),t(s))}(t)}var m=class extends d.f{constructor(){super(),this.selection="single",this.clickTarget=null,this.localize=new a.c(this),this.initTreeItem=t=>{t.selectable="multiple"===this.selection,["expand","collapse"].filter((t=>!!this.querySelector(`[slot="${t}-icon"]`))).forEach((e=>{const o=t.querySelector(`[slot="${e}-icon"]`),i=this.getExpandButtonIcon(e);i&&(null===o?t.append(i):o.hasAttribute("data-default")&&o.replaceWith(i))}))},this.handleTreeChanged=t=>{for(const e of t){const t=[...e.addedNodes].filter(i.P.isTreeItem),o=[...e.removedNodes].filter(i.P.isTreeItem);t.forEach(this.initTreeItem),this.lastFocusedItem&&o.includes(this.lastFocusedItem)&&(this.lastFocusedItem=null)}},this.handleFocusOut=t=>{const e=t.relatedTarget;e&&this.contains(e)||(this.tabIndex=0)},this.handleFocusIn=t=>{const e=t.target;t.target===this&&this.focusItem(this.lastFocusedItem||this.getAllTreeItems()[0]),i.P.isTreeItem(e)&&!e.disabled&&(this.lastFocusedItem&&(this.lastFocusedItem.tabIndex=-1),this.lastFocusedItem=e,this.tabIndex=-1,e.tabIndex=0)},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut),this.addEventListener("sl-lazy-change",this.handleSlotChange)}async connectedCallback(){super.connectedCallback(),this.setAttribute("role","tree"),this.setAttribute("tabindex","0"),await this.updateComplete,this.mutationObserver=new MutationObserver(this.handleTreeChanged),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}disconnectedCallback(){var t;super.disconnectedCallback(),null==(t=this.mutationObserver)||t.disconnect()}getExpandButtonIcon(t){const e=("expand"===t?this.expandedIconSlot:this.collapsedIconSlot).assignedElements({flatten:!0})[0];if(e){const o=e.cloneNode(!0);return[o,...o.querySelectorAll("[id]")].forEach((t=>t.removeAttribute("id"))),o.setAttribute("data-default",""),o.slot=`${t}-icon`,o}return null}selectItem(t){const e=[...this.selectedItems];if("multiple"===this.selection)t.selected=!t.selected,t.lazy&&(t.expanded=!0),p(t);else if("single"===this.selection||t.isLeaf){const e=this.getAllTreeItems();for(const o of e)o.selected=o===t}else"leaf"===this.selection&&(t.expanded=!t.expanded);const o=this.selectedItems;(e.length!==o.length||o.some((t=>!e.includes(t))))&&Promise.all(o.map((t=>t.updateComplete))).then((()=>{this.emit("sl-selection-change",{detail:{selection:o}})}))}getAllTreeItems(){return[...this.querySelectorAll("sl-tree-item")]}focusItem(t){null==t||t.focus()}handleKeyDown(t){if(!["ArrowDown","ArrowUp","ArrowRight","ArrowLeft","Home","End","Enter"," "].includes(t.key))return;if(t.composedPath().some((t=>{var e;return["input","textarea"].includes(null==(e=null==t?void 0:t.tagName)?void 0:e.toLowerCase())})))return;const e=this.getFocusableItems(),o="ltr"===this.localize.dir(),i="rtl"===this.localize.dir();if(e.length>0){t.preventDefault();const s=e.findIndex((t=>t.matches(":focus"))),r=e[s],a=t=>{const o=e[(0,l.q)(t,0,e.length-1)];this.focusItem(o)},n=t=>{r.expanded=t};"ArrowDown"===t.key?a(s+1):"ArrowUp"===t.key?a(s-1):o&&"ArrowRight"===t.key||i&&"ArrowLeft"===t.key?!r||r.disabled||r.expanded||r.isLeaf&&!r.lazy?a(s+1):n(!0):o&&"ArrowLeft"===t.key||i&&"ArrowRight"===t.key?!r||r.disabled||r.isLeaf||!r.expanded?a(s-1):n(!1):"Home"===t.key?a(0):"End"===t.key?a(e.length-1):"Enter"!==t.key&&" "!==t.key||r.disabled||this.selectItem(r)}}handleClick(t){const e=t.target,o=e.closest("sl-tree-item"),i=t.composedPath().some((t=>{var e;return null==(e=null==t?void 0:t.classList)?void 0:e.contains("tree-item__expand-button")}));o&&!o.disabled&&e===this.clickTarget&&(i?o.expanded=!o.expanded:this.selectItem(o))}handleMouseDown(t){this.clickTarget=t.target}handleSlotChange(){this.getAllTreeItems().forEach(this.initTreeItem)}async handleSelectionChange(){const t="multiple"===this.selection,e=this.getAllTreeItems();this.setAttribute("aria-multiselectable",t?"true":"false");for(const o of e)o.selectable=t;t&&(await this.updateComplete,[...this.querySelectorAll(":scope > sl-tree-item")].forEach((t=>p(t,!0))))}get selectedItems(){return this.getAllTreeItems().filter((t=>t.selected))}getFocusableItems(){const t=this.getAllTreeItems(),e=new Set;return t.filter((t=>{var o;if(t.disabled)return!1;const i=null==(o=t.parentElement)?void 0:o.closest("[role=treeitem]");return i&&(!i.expanded||i.loading||e.has(i))&&e.add(t),!e.has(t)}))}render(){return s.qy`
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
    `}};m.styles=[c.$,r],(0,h.Cc)([(0,u.P)("slot:not([name])")],m.prototype,"defaultSlot",2),(0,h.Cc)([(0,u.P)("slot[name=expand-icon]")],m.prototype,"expandedIconSlot",2),(0,h.Cc)([(0,u.P)("slot[name=collapse-icon]")],m.prototype,"collapsedIconSlot",2),(0,h.Cc)([(0,u.MZ)()],m.prototype,"selection",2),(0,h.Cc)([(0,n.w)("selection")],m.prototype,"handleSelectionChange",1),m.define("sl-tree"),o(1455),o(5461),o(328),o(3088),o(1696),o(762),o(875),o(1736),o(5137),o(8511),o(3585),o(3389),o(4415),o(4637),o(8326),o(2089)},5842:(t,e,o)=>{o.d(e,{e:()=>i});var i=o(5024).AH`
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`},5876:(t,e,o)=>{var i=o(5024),s=i.AH`
  :host {
    --divider-width: 4px;
    --divider-hit-area: 12px;
    --min: 0%;
    --max: 100%;

    display: grid;
  }

  .start,
  .end {
    overflow: hidden;
  }

  .divider {
    flex: 0 0 var(--divider-width);
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    background-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-900);
    z-index: 1;
  }

  .divider:focus {
    outline: none;
  }

  :host(:not([disabled])) .divider:focus-visible {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  :host([disabled]) .divider {
    cursor: not-allowed;
  }

  /* Horizontal */
  :host(:not([vertical], [disabled])) .divider {
    cursor: col-resize;
  }

  :host(:not([vertical])) .divider::after {
    display: flex;
    content: '';
    position: absolute;
    height: 100%;
    left: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    width: var(--divider-hit-area);
  }

  /* Vertical */
  :host([vertical]) {
    flex-direction: column;
  }

  :host([vertical]:not([disabled])) .divider {
    cursor: row-resize;
  }

  :host([vertical]) .divider::after {
    content: '';
    position: absolute;
    width: 100%;
    top: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    height: var(--divider-hit-area);
  }

  @media (forced-colors: active) {
    .divider {
      outline: solid 1px transparent;
    }
  }
`,r=o(4319),l=o(9162),a=o(541),n=o(4302),c=o(7324),d=o(4815),h=o(3109),u=o(996),p=o(8146),m=()=>null,g=class extends d.f{constructor(){super(...arguments),this.isCollapsed=!1,this.localize=new a.c(this),this.positionBeforeCollapsing=0,this.position=50,this.vertical=!1,this.disabled=!1,this.snapValue="",this.snapFunction=m,this.snapThreshold=12}toSnapFunction(t){const e=t.split(" ");return({pos:o,size:i,snapThreshold:s,isRtl:r,vertical:l})=>{let a=o,n=Number.POSITIVE_INFINITY;return e.forEach((e=>{let c;if(e.startsWith("repeat(")){const e=t.substring(7,t.length-1),s=e.endsWith("%"),a=Number.parseFloat(e),n=s?i*(a/100):a;c=Math.round((r&&!l?i-o:o)/n)*n}else c=e.endsWith("%")?i*(Number.parseFloat(e)/100):Number.parseFloat(e);r&&!l&&(c=i-c);const d=Math.abs(o-c);d<=s&&d<n&&(a=c,n=d)})),a}}set snap(t){this.snapValue=null!=t?t:"",this.snapFunction=t?"string"==typeof t?this.toSnapFunction(t):t:m}get snap(){return this.snapValue}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver((t=>this.handleResize(t))),this.updateComplete.then((()=>this.resizeObserver.observe(this))),this.detectSize(),this.cachedPositionInPixels=this.percentageToPixels(this.position)}disconnectedCallback(){var t;super.disconnectedCallback(),null==(t=this.resizeObserver)||t.unobserve(this)}detectSize(){const{width:t,height:e}=this.getBoundingClientRect();this.size=this.vertical?e:t}percentageToPixels(t){return this.size*(t/100)}pixelsToPercentage(t){return t/this.size*100}handleDrag(t){const e="rtl"===this.localize.dir();this.disabled||(t.cancelable&&t.preventDefault(),(0,r.$)(this,{onMove:(t,o)=>{var i;let s=this.vertical?o:t;"end"===this.primary&&(s=this.size-s),s=null!=(i=this.snapFunction({pos:s,size:this.size,snapThreshold:this.snapThreshold,isRtl:e,vertical:this.vertical}))?i:s,this.position=(0,l.q)(this.pixelsToPercentage(s),0,100)},initialEvent:t}))}handleKeyDown(t){if(!this.disabled&&["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End","Enter"].includes(t.key)){let e=this.position;const o=(t.shiftKey?10:1)*("end"===this.primary?-1:1);if(t.preventDefault(),("ArrowLeft"===t.key&&!this.vertical||"ArrowUp"===t.key&&this.vertical)&&(e-=o),("ArrowRight"===t.key&&!this.vertical||"ArrowDown"===t.key&&this.vertical)&&(e+=o),"Home"===t.key&&(e="end"===this.primary?100:0),"End"===t.key&&(e="end"===this.primary?0:100),"Enter"===t.key)if(this.isCollapsed)e=this.positionBeforeCollapsing,this.isCollapsed=!1;else{const t=this.position;e=0,requestAnimationFrame((()=>{this.isCollapsed=!0,this.positionBeforeCollapsing=t}))}this.position=(0,l.q)(e,0,100)}}handleResize(t){const{width:e,height:o}=t[0].contentRect;this.size=this.vertical?o:e,(isNaN(this.cachedPositionInPixels)||this.position===1/0)&&(this.cachedPositionInPixels=Number(this.getAttribute("position-in-pixels")),this.positionInPixels=Number(this.getAttribute("position-in-pixels")),this.position=this.pixelsToPercentage(this.positionInPixels)),this.primary&&(this.position=this.pixelsToPercentage(this.cachedPositionInPixels))}handlePositionChange(){this.cachedPositionInPixels=this.percentageToPixels(this.position),this.isCollapsed=!1,this.positionBeforeCollapsing=0,this.positionInPixels=this.percentageToPixels(this.position),this.emit("sl-reposition")}handlePositionInPixelsChange(){this.position=this.pixelsToPercentage(this.positionInPixels)}handleVerticalChange(){this.detectSize()}render(){const t=this.vertical?"gridTemplateRows":"gridTemplateColumns",e=this.vertical?"gridTemplateColumns":"gridTemplateRows",o="rtl"===this.localize.dir(),s=`\n      clamp(\n        0%,\n        clamp(\n          var(--min),\n          ${this.position}% - var(--divider-width) / 2,\n          var(--max)\n        ),\n        calc(100% - var(--divider-width))\n      )\n    `,r="auto";return"end"===this.primary?o&&!this.vertical?this.style[t]=`${s} var(--divider-width) ${r}`:this.style[t]=`${r} var(--divider-width) ${s}`:o&&!this.vertical?this.style[t]=`${r} var(--divider-width) ${s}`:this.style[t]=`${s} var(--divider-width) ${r}`,this.style[e]="",i.qy`
      <slot name="start" part="panel start" class="start"></slot>

      <div
        part="divider"
        class="divider"
        tabindex=${(0,u.J)(this.disabled?void 0:"0")}
        role="separator"
        aria-valuenow=${this.position}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label=${this.localize.term("resize")}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleDrag}
        @touchstart=${this.handleDrag}
      >
        <slot name="divider"></slot>
      </div>

      <slot name="end" part="panel end" class="end"></slot>
    `}};g.styles=[c.$,s],(0,h.Cc)([(0,p.P)(".divider")],g.prototype,"divider",2),(0,h.Cc)([(0,p.MZ)({type:Number,reflect:!0})],g.prototype,"position",2),(0,h.Cc)([(0,p.MZ)({attribute:"position-in-pixels",type:Number})],g.prototype,"positionInPixels",2),(0,h.Cc)([(0,p.MZ)({type:Boolean,reflect:!0})],g.prototype,"vertical",2),(0,h.Cc)([(0,p.MZ)({type:Boolean,reflect:!0})],g.prototype,"disabled",2),(0,h.Cc)([(0,p.MZ)()],g.prototype,"primary",2),(0,h.Cc)([(0,p.MZ)({reflect:!0})],g.prototype,"snap",1),(0,h.Cc)([(0,p.MZ)({type:Number,attribute:"snap-threshold"})],g.prototype,"snapThreshold",2),(0,h.Cc)([(0,n.w)("position")],g.prototype,"handlePositionChange",1),(0,h.Cc)([(0,n.w)("positionInPixels")],g.prototype,"handlePositionInPixelsChange",1),(0,h.Cc)([(0,n.w)("vertical")],g.prototype,"handleVerticalChange",1),g.define("sl-split-panel"),o(3585)},5967:(t,e,o)=>{var i=o(5024),s=i.AH`
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
`,r=o(4101),l=o(7324),a=o(4815),n=o(3788),c=class extends a.f{constructor(){super(...arguments),this.hasSlotController=new r.X(this,"footer","header","image")}render(){return i.qy`
      <div
        part="base"
        class=${(0,n.H)({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};c.styles=[l.$,s],c.define("sl-card"),o(3109)},5997:(t,e,o)=>{o.d(e,{o:()=>y});var i=o(6310),s=o(3088),r=o(1696),l=o(1736),a=o(4101),n=o(541),c=o(3389),d=o(4302),h=o(7324),u=o(4815),p=o(3109),m=o(3788),g=o(5024),b=o(996),v=o(33),f=o(8146),y=class extends u.f{constructor(){super(...arguments),this.formControlController=new l.Ud(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new a.X(this,"help-text","label"),this.localize=new n.c(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var t;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,(null==(t=this.input)?void 0:t.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(t){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=t,this.value=this.__dateInput.value}get valueAsNumber(){var t;return this.__numberInput.value=this.value,(null==(t=this.input)?void 0:t.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(t){this.__numberInput.valueAsNumber=t,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(t){t.preventDefault(),""!==this.value&&(this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleKeyDown(t){const e=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;"Enter"!==t.key||e||setTimeout((()=>{t.defaultPrevented||t.isComposing||this.formControlController.submit()}))}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,e,o="none"){this.input.setSelectionRange(t,e,o)}setRangeText(t,e,o,i="preserve"){const s=null!=e?e:this.input.selectionStart,r=null!=o?o:this.input.selectionEnd;this.input.setRangeText(t,s,r,i),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),o=!!this.label||!!t,i=!!this.helpText||!!e,s=this.clearable&&!this.disabled&&!this.readonly&&("number"==typeof this.value||this.value.length>0);return g.qy`
      <div
        part="form-control"
        class=${(0,m.H)({"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--has-label":o,"form-control--has-help-text":i})}
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
            class=${(0,m.H)({input:!0,"input--small":"small"===this.size,"input--medium":"medium"===this.size,"input--large":"large"===this.size,"input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${"password"===this.type&&this.passwordVisible?"text":this.type}
              title=${this.title}
              name=${(0,b.J)(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${(0,b.J)(this.placeholder)}
              minlength=${(0,b.J)(this.minlength)}
              maxlength=${(0,b.J)(this.maxlength)}
              min=${(0,b.J)(this.min)}
              max=${(0,b.J)(this.max)}
              step=${(0,b.J)(this.step)}
              .value=${(0,v.V)(this.value)}
              autocapitalize=${(0,b.J)(this.autocapitalize)}
              autocomplete=${(0,b.J)(this.autocomplete)}
              autocorrect=${(0,b.J)(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${(0,b.J)(this.pattern)}
              enterkeyhint=${(0,b.J)(this.enterkeyhint)}
              inputmode=${(0,b.J)(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${s?g.qy`
                  <button
                    part="clear-button"
                    class="input__clear"
                    type="button"
                    aria-label=${this.localize.term("clearEntry")}
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <sl-icon name="x-circle-fill" library="system"></sl-icon>
                    </slot>
                  </button>
                `:""}
            ${this.passwordToggle&&!this.disabled?g.qy`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?g.qy`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:g.qy`
                          <slot name="hide-password-icon">
                            <sl-icon name="eye" library="system"></sl-icon>
                          </slot>
                        `}
                  </button>
                `:""}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};y.styles=[h.$,r.I,i.g],y.dependencies={"sl-icon":c.B},(0,p.Cc)([(0,f.P)(".input__control")],y.prototype,"input",2),(0,p.Cc)([(0,f.wk)()],y.prototype,"hasFocus",2),(0,p.Cc)([(0,f.MZ)()],y.prototype,"title",2),(0,p.Cc)([(0,f.MZ)({reflect:!0})],y.prototype,"type",2),(0,p.Cc)([(0,f.MZ)()],y.prototype,"name",2),(0,p.Cc)([(0,f.MZ)()],y.prototype,"value",2),(0,p.Cc)([(0,s.J)()],y.prototype,"defaultValue",2),(0,p.Cc)([(0,f.MZ)({reflect:!0})],y.prototype,"size",2),(0,p.Cc)([(0,f.MZ)({type:Boolean,reflect:!0})],y.prototype,"filled",2),(0,p.Cc)([(0,f.MZ)({type:Boolean,reflect:!0})],y.prototype,"pill",2),(0,p.Cc)([(0,f.MZ)()],y.prototype,"label",2),(0,p.Cc)([(0,f.MZ)({attribute:"help-text"})],y.prototype,"helpText",2),(0,p.Cc)([(0,f.MZ)({type:Boolean})],y.prototype,"clearable",2),(0,p.Cc)([(0,f.MZ)({type:Boolean,reflect:!0})],y.prototype,"disabled",2),(0,p.Cc)([(0,f.MZ)()],y.prototype,"placeholder",2),(0,p.Cc)([(0,f.MZ)({type:Boolean,reflect:!0})],y.prototype,"readonly",2),(0,p.Cc)([(0,f.MZ)({attribute:"password-toggle",type:Boolean})],y.prototype,"passwordToggle",2),(0,p.Cc)([(0,f.MZ)({attribute:"password-visible",type:Boolean})],y.prototype,"passwordVisible",2),(0,p.Cc)([(0,f.MZ)({attribute:"no-spin-buttons",type:Boolean})],y.prototype,"noSpinButtons",2),(0,p.Cc)([(0,f.MZ)({reflect:!0})],y.prototype,"form",2),(0,p.Cc)([(0,f.MZ)({type:Boolean,reflect:!0})],y.prototype,"required",2),(0,p.Cc)([(0,f.MZ)()],y.prototype,"pattern",2),(0,p.Cc)([(0,f.MZ)({type:Number})],y.prototype,"minlength",2),(0,p.Cc)([(0,f.MZ)({type:Number})],y.prototype,"maxlength",2),(0,p.Cc)([(0,f.MZ)()],y.prototype,"min",2),(0,p.Cc)([(0,f.MZ)()],y.prototype,"max",2),(0,p.Cc)([(0,f.MZ)()],y.prototype,"step",2),(0,p.Cc)([(0,f.MZ)()],y.prototype,"autocapitalize",2),(0,p.Cc)([(0,f.MZ)()],y.prototype,"autocorrect",2),(0,p.Cc)([(0,f.MZ)()],y.prototype,"autocomplete",2),(0,p.Cc)([(0,f.MZ)({type:Boolean})],y.prototype,"autofocus",2),(0,p.Cc)([(0,f.MZ)()],y.prototype,"enterkeyhint",2),(0,p.Cc)([(0,f.MZ)({type:Boolean,converter:{fromAttribute:t=>!(!t||"false"===t),toAttribute:t=>t?"true":"false"}})],y.prototype,"spellcheck",2),(0,p.Cc)([(0,f.MZ)()],y.prototype,"inputmode",2),(0,p.Cc)([(0,d.w)("disabled",{waitUntilFirstUpdate:!0})],y.prototype,"handleDisabledChange",1),(0,p.Cc)([(0,d.w)("step",{waitUntilFirstUpdate:!0})],y.prototype,"handleStepChange",1),(0,p.Cc)([(0,d.w)("value",{waitUntilFirstUpdate:!0})],y.prototype,"handleValueChange",1)},6023:(t,e,o)=>{o.d(e,{b:()=>i});var i=o(5024).AH`
  :host {
    display: contents;
  }
`},6114:(t,e,o)=>{o.d(e,{P:()=>w});var i=o(1455),s=o(5461),r=o(762),l=o(5137),a=o(8511),n=o(541),c=o(3389),d=o(4302),h=o(7324),u=o(4815),p=o(3109),m=o(3788),g=o(5024),b=o(33),v=o(8146);function f(t,e,o){return t?e(t):null==o?void 0:o(t)}var y=class t extends u.f{constructor(){super(...arguments),this.localize=new n.c(this),this.indeterminate=!1,this.isLeaf=!1,this.loading=!1,this.selectable=!1,this.expanded=!1,this.selected=!1,this.disabled=!1,this.lazy=!1}static isTreeItem(t){return t instanceof Element&&"treeitem"===t.getAttribute("role")}connectedCallback(){super.connectedCallback(),this.setAttribute("role","treeitem"),this.setAttribute("tabindex","-1"),this.isNestedItem()&&(this.slot="children")}firstUpdated(){this.childrenContainer.hidden=!this.expanded,this.childrenContainer.style.height=this.expanded?"auto":"0",this.isLeaf=!this.lazy&&0===this.getChildrenItems().length,this.handleExpandedChange()}async animateCollapse(){this.emit("sl-collapse"),await(0,a.Ey)(this.childrenContainer);const{keyframes:t,options:e}=(0,l.RB)(this,"tree-item.collapse",{dir:this.localize.dir()});await(0,a.jd)(this.childrenContainer,(0,a.dc)(t,this.childrenContainer.scrollHeight),e),this.childrenContainer.hidden=!0,this.emit("sl-after-collapse")}isNestedItem(){const e=this.parentElement;return!!e&&t.isTreeItem(e)}handleChildrenSlotChange(){this.loading=!1,this.isLeaf=!this.lazy&&0===this.getChildrenItems().length}willUpdate(t){t.has("selected")&&!t.has("indeterminate")&&(this.indeterminate=!1)}async animateExpand(){this.emit("sl-expand"),await(0,a.Ey)(this.childrenContainer),this.childrenContainer.hidden=!1;const{keyframes:t,options:e}=(0,l.RB)(this,"tree-item.expand",{dir:this.localize.dir()});await(0,a.jd)(this.childrenContainer,(0,a.dc)(t,this.childrenContainer.scrollHeight),e),this.childrenContainer.style.height="auto",this.emit("sl-after-expand")}handleLoadingChange(){this.setAttribute("aria-busy",this.loading?"true":"false"),this.loading||this.animateExpand()}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleExpandedChange(){this.isLeaf?this.removeAttribute("aria-expanded"):this.setAttribute("aria-expanded",this.expanded?"true":"false")}handleExpandAnimation(){this.expanded?this.lazy?(this.loading=!0,this.emit("sl-lazy-load")):this.animateExpand():this.animateCollapse()}handleLazyChange(){this.emit("sl-lazy-change")}getChildrenItems({includeDisabled:e=!0}={}){return this.childrenSlot?[...this.childrenSlot.assignedElements({flatten:!0})].filter((o=>t.isTreeItem(o)&&(e||!o.disabled))):[]}render(){const t="rtl"===this.localize.dir(),e=!this.loading&&(!this.isLeaf||this.lazy);return g.qy`
      <div
        part="base"
        class="${(0,m.H)({"tree-item":!0,"tree-item--expanded":this.expanded,"tree-item--selected":this.selected,"tree-item--disabled":this.disabled,"tree-item--leaf":this.isLeaf,"tree-item--has-expand-button":e,"tree-item--rtl":"rtl"===this.localize.dir()})}"
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
            class=${(0,m.H)({"tree-item__expand-button":!0,"tree-item__expand-button--visible":e})}
            aria-hidden="true"
          >
            ${f(this.loading,(()=>g.qy` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `))}
            <slot class="tree-item__expand-icon-slot" name="expand-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot class="tree-item__expand-icon-slot" name="collapse-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </div>

          ${f(this.selectable,(()=>g.qy`
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
                ?checked="${(0,b.V)(this.selected)}"
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
    `}};y.styles=[h.$,i.U],y.dependencies={"sl-checkbox":s.X,"sl-icon":c.B,"sl-spinner":r.p},(0,p.Cc)([(0,v.wk)()],y.prototype,"indeterminate",2),(0,p.Cc)([(0,v.wk)()],y.prototype,"isLeaf",2),(0,p.Cc)([(0,v.wk)()],y.prototype,"loading",2),(0,p.Cc)([(0,v.wk)()],y.prototype,"selectable",2),(0,p.Cc)([(0,v.MZ)({type:Boolean,reflect:!0})],y.prototype,"expanded",2),(0,p.Cc)([(0,v.MZ)({type:Boolean,reflect:!0})],y.prototype,"selected",2),(0,p.Cc)([(0,v.MZ)({type:Boolean,reflect:!0})],y.prototype,"disabled",2),(0,p.Cc)([(0,v.MZ)({type:Boolean,reflect:!0})],y.prototype,"lazy",2),(0,p.Cc)([(0,v.P)("slot:not([name])")],y.prototype,"defaultSlot",2),(0,p.Cc)([(0,v.P)("slot[name=children]")],y.prototype,"childrenSlot",2),(0,p.Cc)([(0,v.P)(".tree-item__item")],y.prototype,"itemElement",2),(0,p.Cc)([(0,v.P)(".tree-item__children")],y.prototype,"childrenContainer",2),(0,p.Cc)([(0,v.P)(".tree-item__expand-button slot")],y.prototype,"expandButtonSlot",2),(0,p.Cc)([(0,d.w)("loading",{waitUntilFirstUpdate:!0})],y.prototype,"handleLoadingChange",1),(0,p.Cc)([(0,d.w)("disabled")],y.prototype,"handleDisabledChange",1),(0,p.Cc)([(0,d.w)("selected")],y.prototype,"handleSelectedChange",1),(0,p.Cc)([(0,d.w)("expanded",{waitUntilFirstUpdate:!0})],y.prototype,"handleExpandedChange",1),(0,p.Cc)([(0,d.w)("expanded",{waitUntilFirstUpdate:!0})],y.prototype,"handleExpandAnimation",1),(0,p.Cc)([(0,d.w)("lazy",{waitUntilFirstUpdate:!0})],y.prototype,"handleLazyChange",1);var w=y;(0,l.Ee)("tree-item.expand",{keyframes:[{height:"0",opacity:"0",overflow:"hidden"},{height:"auto",opacity:"1",overflow:"hidden"}],options:{duration:250,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}}),(0,l.Ee)("tree-item.collapse",{keyframes:[{height:"auto",opacity:"1",overflow:"hidden"},{height:"0",opacity:"0",overflow:"hidden"}],options:{duration:200,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}})},6310:(t,e,o)=>{o.d(e,{g:()=>i});var i=o(5024).AH`
  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--sl-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--sl-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .input--filled.input--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--sl-input-color);
    border: none;
    background: inherit;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--sl-color-primary-500);
    caret-color: var(--sl-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--sl-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix ::slotted(sl-icon),
  .input__suffix ::slotted(sl-icon) {
    color: var(--sl-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    height: var(--sl-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-small) * 2);
  }

  .input--small .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    height: var(--sl-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    height: var(--sl-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-large) * 2);
  }

  .input--large .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--sl-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }
`},6395:(t,e,o)=>{var i=o(5024),s=i.AH`
  :host {
    --height: 1rem;
    --track-color: var(--sl-color-neutral-200);
    --indicator-color: var(--sl-color-primary-600);
    --label-color: var(--sl-color-neutral-0);

    display: block;
  }

  .progress-bar {
    position: relative;
    background-color: var(--track-color);
    height: var(--height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset var(--sl-shadow-small);
    overflow: hidden;
  }

  .progress-bar__indicator {
    height: 100%;
    font-family: var(--sl-font-sans);
    font-size: 12px;
    font-weight: var(--sl-font-weight-normal);
    background-color: var(--indicator-color);
    color: var(--label-color);
    text-align: center;
    line-height: var(--height);
    white-space: nowrap;
    overflow: hidden;
    transition:
      400ms width,
      400ms background-color;
    user-select: none;
    -webkit-user-select: none;
  }

  /* Indeterminate */
  .progress-bar--indeterminate .progress-bar__indicator {
    position: absolute;
    animation: indeterminate 2.5s infinite cubic-bezier(0.37, 0, 0.63, 1);
  }

  .progress-bar--indeterminate.progress-bar--rtl .progress-bar__indicator {
    animation-name: indeterminate-rtl;
  }

  @media (forced-colors: active) {
    .progress-bar {
      outline: solid 1px SelectedItem;
      background-color: var(--sl-color-neutral-0);
    }

    .progress-bar__indicator {
      outline: solid 1px SelectedItem;
      background-color: SelectedItem;
    }
  }

  @keyframes indeterminate {
    0% {
      left: -50%;
      width: 50%;
    }
    75%,
    100% {
      left: 100%;
      width: 50%;
    }
  }

  @keyframes indeterminate-rtl {
    0% {
      right: -50%;
      width: 50%;
    }
    75%,
    100% {
      right: 100%;
      width: 50%;
    }
  }
`,r=o(541),l=o(7324),a=o(4815),n=o(3109),c=o(3788),d=o(996),h=o(8146),u=o(8981),p=class extends a.f{constructor(){super(...arguments),this.localize=new r.c(this),this.value=0,this.indeterminate=!1,this.label=""}render(){return i.qy`
      <div
        part="base"
        class=${(0,c.H)({"progress-bar":!0,"progress-bar--indeterminate":this.indeterminate,"progress-bar--rtl":"rtl"===this.localize.dir()})}
        role="progressbar"
        title=${(0,d.J)(this.title)}
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?0:this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${(0,u.W)({width:`${this.value}%`})}>
          ${this.indeterminate?"":i.qy` <slot part="label" class="progress-bar__label"></slot> `}
        </div>
      </div>
    `}};p.styles=[l.$,s],(0,n.Cc)([(0,h.MZ)({type:Number,reflect:!0})],p.prototype,"value",2),(0,n.Cc)([(0,h.MZ)({type:Boolean,reflect:!0})],p.prototype,"indeterminate",2),(0,n.Cc)([(0,h.MZ)()],p.prototype,"label",2),p.define("sl-progress-bar"),o(3585)},6576:(t,e,o)=>{o.d(e,{A:()=>a});var i=o(6758),s=o.n(i),r=o(935),l=o.n(r)()(s());l.push([t.id,':root,\n:host,\n.sl-theme-light{--csstools-color-scheme--light:initial;color-scheme:light;--sl-color-gray-50:hsl(0 0% 97.5%);--sl-color-gray-100:hsl(240 4.8% 95.9%);--sl-color-gray-200:hsl(240 5.9% 90%);--sl-color-gray-300:hsl(240 4.9% 83.9%);--sl-color-gray-400:hsl(240 5% 64.9%);--sl-color-gray-500:hsl(240 3.8% 46.1%);--sl-color-gray-600:hsl(240 5.2% 33.9%);--sl-color-gray-700:hsl(240 5.3% 26.1%);--sl-color-gray-800:hsl(240 3.7% 15.9%);--sl-color-gray-900:hsl(240 5.9% 10%);--sl-color-gray-950:hsl(240 7.3% 8%);--sl-color-red-50:hsl(0 85.7% 97.3%);--sl-color-red-100:hsl(0 93.3% 94.1%);--sl-color-red-200:hsl(0 96.3% 89.4%);--sl-color-red-300:hsl(0 93.5% 81.8%);--sl-color-red-400:hsl(0 90.6% 70.8%);--sl-color-red-500:hsl(0 84.2% 60.2%);--sl-color-red-600:hsl(0 72.2% 50.6%);--sl-color-red-700:hsl(0 73.7% 41.8%);--sl-color-red-800:hsl(0 70% 35.3%);--sl-color-red-900:hsl(0 62.8% 30.6%);--sl-color-red-950:hsl(0 60% 19.6%);--sl-color-orange-50:hsl(33.3 100% 96.5%);--sl-color-orange-100:hsl(34.3 100% 91.8%);--sl-color-orange-200:hsl(32.1 97.7% 83.1%);--sl-color-orange-300:hsl(30.7 97.2% 72.4%);--sl-color-orange-400:hsl(27 96% 61%);--sl-color-orange-500:hsl(24.6 95% 53.1%);--sl-color-orange-600:hsl(20.5 90.2% 48.2%);--sl-color-orange-700:hsl(17.5 88.3% 40.4%);--sl-color-orange-800:hsl(15 79.1% 33.7%);--sl-color-orange-900:hsl(15.3 74.6% 27.8%);--sl-color-orange-950:hsl(15.2 69.1% 19%);--sl-color-amber-50:hsl(48 100% 96.1%);--sl-color-amber-100:hsl(48 96.5% 88.8%);--sl-color-amber-200:hsl(48 96.6% 76.7%);--sl-color-amber-300:hsl(45.9 96.7% 64.5%);--sl-color-amber-400:hsl(43.3 96.4% 56.3%);--sl-color-amber-500:hsl(37.7 92.1% 50.2%);--sl-color-amber-600:hsl(32.1 94.6% 43.7%);--sl-color-amber-700:hsl(26 90.5% 37.1%);--sl-color-amber-800:hsl(22.7 82.5% 31.4%);--sl-color-amber-900:hsl(21.7 77.8% 26.5%);--sl-color-amber-950:hsl(22.9 74.1% 16.7%);--sl-color-yellow-50:hsl(54.5 91.7% 95.3%);--sl-color-yellow-100:hsl(54.9 96.7% 88%);--sl-color-yellow-200:hsl(52.8 98.3% 76.9%);--sl-color-yellow-300:hsl(50.4 97.8% 63.5%);--sl-color-yellow-400:hsl(47.9 95.8% 53.1%);--sl-color-yellow-500:hsl(45.4 93.4% 47.5%);--sl-color-yellow-600:hsl(40.6 96.1% 40.4%);--sl-color-yellow-700:hsl(35.5 91.7% 32.9%);--sl-color-yellow-800:hsl(31.8 81% 28.8%);--sl-color-yellow-900:hsl(28.4 72.5% 25.7%);--sl-color-yellow-950:hsl(33.1 69% 13.9%);--sl-color-lime-50:hsl(78.3 92% 95.1%);--sl-color-lime-100:hsl(79.6 89.1% 89.2%);--sl-color-lime-200:hsl(80.9 88.5% 79.6%);--sl-color-lime-300:hsl(82 84.5% 67.1%);--sl-color-lime-400:hsl(82.7 78% 55.5%);--sl-color-lime-500:hsl(83.7 80.5% 44.3%);--sl-color-lime-600:hsl(84.8 85.2% 34.5%);--sl-color-lime-700:hsl(85.9 78.4% 27.3%);--sl-color-lime-800:hsl(86.3 69% 22.7%);--sl-color-lime-900:hsl(87.6 61.2% 20.2%);--sl-color-lime-950:hsl(86.5 60.6% 13.9%);--sl-color-green-50:hsl(138.5 76.5% 96.7%);--sl-color-green-100:hsl(140.6 84.2% 92.5%);--sl-color-green-200:hsl(141 78.9% 85.1%);--sl-color-green-300:hsl(141.7 76.6% 73.1%);--sl-color-green-400:hsl(141.9 69.2% 58%);--sl-color-green-500:hsl(142.1 70.6% 45.3%);--sl-color-green-600:hsl(142.1 76.2% 36.3%);--sl-color-green-700:hsl(142.4 71.8% 29.2%);--sl-color-green-800:hsl(142.8 64.2% 24.1%);--sl-color-green-900:hsl(143.8 61.2% 20.2%);--sl-color-green-950:hsl(144.3 60.7% 12%);--sl-color-emerald-50:hsl(151.8 81% 95.9%);--sl-color-emerald-100:hsl(149.3 80.4% 90%);--sl-color-emerald-200:hsl(152.4 76% 80.4%);--sl-color-emerald-300:hsl(156.2 71.6% 66.9%);--sl-color-emerald-400:hsl(158.1 64.4% 51.6%);--sl-color-emerald-500:hsl(160.1 84.1% 39.4%);--sl-color-emerald-600:hsl(161.4 93.5% 30.4%);--sl-color-emerald-700:hsl(162.9 93.5% 24.3%);--sl-color-emerald-800:hsl(163.1 88.1% 19.8%);--sl-color-emerald-900:hsl(164.2 85.7% 16.5%);--sl-color-emerald-950:hsl(164.3 87.5% 9.4%);--sl-color-teal-50:hsl(166.2 76.5% 96.7%);--sl-color-teal-100:hsl(167.2 85.5% 89.2%);--sl-color-teal-200:hsl(168.4 83.8% 78.2%);--sl-color-teal-300:hsl(170.6 76.9% 64.3%);--sl-color-teal-400:hsl(172.5 66% 50.4%);--sl-color-teal-500:hsl(173.4 80.4% 40%);--sl-color-teal-600:hsl(174.7 83.9% 31.6%);--sl-color-teal-700:hsl(175.3 77.4% 26.1%);--sl-color-teal-800:hsl(176.1 69.4% 21.8%);--sl-color-teal-900:hsl(175.9 60.8% 19%);--sl-color-teal-950:hsl(176.5 58.6% 11.4%);--sl-color-cyan-50:hsl(183.2 100% 96.3%);--sl-color-cyan-100:hsl(185.1 95.9% 90.4%);--sl-color-cyan-200:hsl(186.2 93.5% 81.8%);--sl-color-cyan-300:hsl(187 92.4% 69%);--sl-color-cyan-400:hsl(187.9 85.7% 53.3%);--sl-color-cyan-500:hsl(188.7 94.5% 42.7%);--sl-color-cyan-600:hsl(191.6 91.4% 36.5%);--sl-color-cyan-700:hsl(192.9 82.3% 31%);--sl-color-cyan-800:hsl(194.4 69.6% 27.1%);--sl-color-cyan-900:hsl(196.4 63.6% 23.7%);--sl-color-cyan-950:hsl(196.8 61% 16.1%);--sl-color-sky-50:hsl(204 100% 97.1%);--sl-color-sky-100:hsl(204 93.8% 93.7%);--sl-color-sky-200:hsl(200.6 94.4% 86.1%);--sl-color-sky-300:hsl(199.4 95.5% 73.9%);--sl-color-sky-400:hsl(198.4 93.2% 59.6%);--sl-color-sky-500:hsl(198.6 88.7% 48.4%);--sl-color-sky-600:hsl(200.4 98% 39.4%);--sl-color-sky-700:hsl(201.3 96.3% 32.2%);--sl-color-sky-800:hsl(201 90% 27.5%);--sl-color-sky-900:hsl(202 80.3% 23.9%);--sl-color-sky-950:hsl(202.3 73.8% 16.5%);--sl-color-blue-50:hsl(213.8 100% 96.9%);--sl-color-blue-100:hsl(214.3 94.6% 92.7%);--sl-color-blue-200:hsl(213.3 96.9% 87.3%);--sl-color-blue-300:hsl(211.7 96.4% 78.4%);--sl-color-blue-400:hsl(213.1 93.9% 67.8%);--sl-color-blue-500:hsl(217.2 91.2% 59.8%);--sl-color-blue-600:hsl(221.2 83.2% 53.3%);--sl-color-blue-700:hsl(224.3 76.3% 48%);--sl-color-blue-800:hsl(225.9 70.7% 40.2%);--sl-color-blue-900:hsl(224.4 64.3% 32.9%);--sl-color-blue-950:hsl(226.2 55.3% 18.4%);--sl-color-indigo-50:hsl(225.9 100% 96.7%);--sl-color-indigo-100:hsl(226.5 100% 93.9%);--sl-color-indigo-200:hsl(228 96.5% 88.8%);--sl-color-indigo-300:hsl(229.7 93.5% 81.8%);--sl-color-indigo-400:hsl(234.5 89.5% 73.9%);--sl-color-indigo-500:hsl(238.7 83.5% 66.7%);--sl-color-indigo-600:hsl(243.4 75.4% 58.6%);--sl-color-indigo-700:hsl(244.5 57.9% 50.6%);--sl-color-indigo-800:hsl(243.7 54.5% 41.4%);--sl-color-indigo-900:hsl(242.2 47.4% 34.3%);--sl-color-indigo-950:hsl(243.5 43.6% 22.9%);--sl-color-violet-50:hsl(250 100% 97.6%);--sl-color-violet-100:hsl(251.4 91.3% 95.5%);--sl-color-violet-200:hsl(250.5 95.2% 91.8%);--sl-color-violet-300:hsl(252.5 94.7% 85.1%);--sl-color-violet-400:hsl(255.1 91.7% 76.3%);--sl-color-violet-500:hsl(258.3 89.5% 66.3%);--sl-color-violet-600:hsl(262.1 83.3% 57.8%);--sl-color-violet-700:hsl(263.4 70% 50.4%);--sl-color-violet-800:hsl(263.4 69.3% 42.2%);--sl-color-violet-900:hsl(263.5 67.4% 34.9%);--sl-color-violet-950:hsl(265.1 61.5% 21.4%);--sl-color-purple-50:hsl(270 100% 98%);--sl-color-purple-100:hsl(268.7 100% 95.5%);--sl-color-purple-200:hsl(268.6 100% 91.8%);--sl-color-purple-300:hsl(269.2 97.4% 85.1%);--sl-color-purple-400:hsl(270 95.2% 75.3%);--sl-color-purple-500:hsl(270.7 91% 65.1%);--sl-color-purple-600:hsl(271.5 81.3% 55.9%);--sl-color-purple-700:hsl(272.1 71.7% 47.1%);--sl-color-purple-800:hsl(272.9 67.2% 39.4%);--sl-color-purple-900:hsl(273.6 65.6% 32%);--sl-color-purple-950:hsl(276 59.5% 16.5%);--sl-color-fuchsia-50:hsl(289.1 100% 97.8%);--sl-color-fuchsia-100:hsl(287 100% 95.5%);--sl-color-fuchsia-200:hsl(288.3 95.8% 90.6%);--sl-color-fuchsia-300:hsl(291.1 93.1% 82.9%);--sl-color-fuchsia-400:hsl(292 91.4% 72.5%);--sl-color-fuchsia-500:hsl(292.2 84.1% 60.6%);--sl-color-fuchsia-600:hsl(293.4 69.5% 48.8%);--sl-color-fuchsia-700:hsl(294.7 72.4% 39.8%);--sl-color-fuchsia-800:hsl(295.4 70.2% 32.9%);--sl-color-fuchsia-900:hsl(296.7 63.6% 28%);--sl-color-fuchsia-950:hsl(297.1 56.8% 14.5%);--sl-color-pink-50:hsl(327.3 73.3% 97.1%);--sl-color-pink-100:hsl(325.7 77.8% 94.7%);--sl-color-pink-200:hsl(325.9 84.6% 89.8%);--sl-color-pink-300:hsl(327.4 87.1% 81.8%);--sl-color-pink-400:hsl(328.6 85.5% 70.2%);--sl-color-pink-500:hsl(330.4 81.2% 60.4%);--sl-color-pink-600:hsl(333.3 71.4% 50.6%);--sl-color-pink-700:hsl(335.1 77.6% 42%);--sl-color-pink-800:hsl(335.8 74.4% 35.3%);--sl-color-pink-900:hsl(335.9 69% 30.4%);--sl-color-pink-950:hsl(336.2 65.4% 15.9%);--sl-color-rose-50:hsl(355.7 100% 97.3%);--sl-color-rose-100:hsl(355.6 100% 94.7%);--sl-color-rose-200:hsl(352.7 96.1% 90%);--sl-color-rose-300:hsl(352.6 95.7% 81.8%);--sl-color-rose-400:hsl(351.3 94.5% 71.4%);--sl-color-rose-500:hsl(349.7 89.2% 60.2%);--sl-color-rose-600:hsl(346.8 77.2% 49.8%);--sl-color-rose-700:hsl(345.3 82.7% 40.8%);--sl-color-rose-800:hsl(343.4 79.7% 34.7%);--sl-color-rose-900:hsl(341.5 75.5% 30.4%);--sl-color-rose-950:hsl(341.3 70.1% 17.1%);--sl-color-primary-50:var(--sl-color-sky-50);--sl-color-primary-100:var(--sl-color-sky-100);--sl-color-primary-200:var(--sl-color-sky-200);--sl-color-primary-300:var(--sl-color-sky-300);--sl-color-primary-400:var(--sl-color-sky-400);--sl-color-primary-500:var(--sl-color-sky-500);--sl-color-primary-600:var(--sl-color-sky-600);--sl-color-primary-700:var(--sl-color-sky-700);--sl-color-primary-800:var(--sl-color-sky-800);--sl-color-primary-900:var(--sl-color-sky-900);--sl-color-primary-950:var(--sl-color-sky-950);--sl-color-success-50:var(--sl-color-green-50);--sl-color-success-100:var(--sl-color-green-100);--sl-color-success-200:var(--sl-color-green-200);--sl-color-success-300:var(--sl-color-green-300);--sl-color-success-400:var(--sl-color-green-400);--sl-color-success-500:var(--sl-color-green-500);--sl-color-success-600:var(--sl-color-green-600);--sl-color-success-700:var(--sl-color-green-700);--sl-color-success-800:var(--sl-color-green-800);--sl-color-success-900:var(--sl-color-green-900);--sl-color-success-950:var(--sl-color-green-950);--sl-color-warning-50:var(--sl-color-amber-50);--sl-color-warning-100:var(--sl-color-amber-100);--sl-color-warning-200:var(--sl-color-amber-200);--sl-color-warning-300:var(--sl-color-amber-300);--sl-color-warning-400:var(--sl-color-amber-400);--sl-color-warning-500:var(--sl-color-amber-500);--sl-color-warning-600:var(--sl-color-amber-600);--sl-color-warning-700:var(--sl-color-amber-700);--sl-color-warning-800:var(--sl-color-amber-800);--sl-color-warning-900:var(--sl-color-amber-900);--sl-color-warning-950:var(--sl-color-amber-950);--sl-color-danger-50:var(--sl-color-red-50);--sl-color-danger-100:var(--sl-color-red-100);--sl-color-danger-200:var(--sl-color-red-200);--sl-color-danger-300:var(--sl-color-red-300);--sl-color-danger-400:var(--sl-color-red-400);--sl-color-danger-500:var(--sl-color-red-500);--sl-color-danger-600:var(--sl-color-red-600);--sl-color-danger-700:var(--sl-color-red-700);--sl-color-danger-800:var(--sl-color-red-800);--sl-color-danger-900:var(--sl-color-red-900);--sl-color-danger-950:var(--sl-color-red-950);--sl-color-neutral-50:var(--sl-color-gray-50);--sl-color-neutral-100:var(--sl-color-gray-100);--sl-color-neutral-200:var(--sl-color-gray-200);--sl-color-neutral-300:var(--sl-color-gray-300);--sl-color-neutral-400:var(--sl-color-gray-400);--sl-color-neutral-500:var(--sl-color-gray-500);--sl-color-neutral-600:var(--sl-color-gray-600);--sl-color-neutral-700:var(--sl-color-gray-700);--sl-color-neutral-800:var(--sl-color-gray-800);--sl-color-neutral-900:var(--sl-color-gray-900);--sl-color-neutral-950:var(--sl-color-gray-950);--sl-color-neutral-0:hsl(0,0%,100%);--sl-color-neutral-1000:hsl(0,0%,0%);--sl-border-radius-small:0.1875rem;--sl-border-radius-medium:0.25rem;--sl-border-radius-large:0.5rem;--sl-border-radius-x-large:1rem;--sl-border-radius-circle:50%;--sl-border-radius-pill:9999px;--sl-shadow-x-small:0 1px 2px hsl(240 3.8% 46.1%/6%);--sl-shadow-small:0 1px 2px hsl(240 3.8% 46.1%/12%);--sl-shadow-medium:0 2px 4px hsl(240 3.8% 46.1%/12%);--sl-shadow-large:0 2px 8px hsl(240 3.8% 46.1%/12%);--sl-shadow-x-large:0 4px 16px hsl(240 3.8% 46.1%/12%);--sl-spacing-3x-small:0.125rem;--sl-spacing-2x-small:0.25rem;--sl-spacing-x-small:0.5rem;--sl-spacing-small:0.75rem;--sl-spacing-medium:1rem;--sl-spacing-large:1.25rem;--sl-spacing-x-large:1.75rem;--sl-spacing-2x-large:2.25rem;--sl-spacing-3x-large:3rem;--sl-spacing-4x-large:4.5rem;--sl-transition-x-slow:1000ms;--sl-transition-slow:500ms;--sl-transition-medium:250ms;--sl-transition-fast:150ms;--sl-transition-x-fast:50ms;--sl-font-mono:SFMono-Regular,Consolas,"Liberation Mono",Menlo,monospace;--sl-font-sans:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";--sl-font-serif:Georgia,"Times New Roman",serif;--sl-font-size-2x-small:0.625rem;--sl-font-size-x-small:0.75rem;--sl-font-size-small:0.875rem;--sl-font-size-medium:1rem;--sl-font-size-large:1.25rem;--sl-font-size-x-large:1.5rem;--sl-font-size-2x-large:2.25rem;--sl-font-size-3x-large:3rem;--sl-font-size-4x-large:4.5rem;--sl-font-weight-light:300;--sl-font-weight-normal:400;--sl-font-weight-semibold:500;--sl-font-weight-bold:700;--sl-letter-spacing-denser:-0.03em;--sl-letter-spacing-dense:-0.015em;--sl-letter-spacing-normal:normal;--sl-letter-spacing-loose:0.075em;--sl-letter-spacing-looser:0.15em;--sl-line-height-denser:1;--sl-line-height-dense:1.4;--sl-line-height-normal:1.8;--sl-line-height-loose:2.2;--sl-line-height-looser:2.6;--sl-focus-ring-color:var(--sl-color-primary-600);--sl-focus-ring-style:solid;--sl-focus-ring-width:3px;--sl-focus-ring:var(--sl-focus-ring-style) var(--sl-focus-ring-width) var(--sl-focus-ring-color);--sl-focus-ring-offset:1px;--sl-button-font-size-small:var(--sl-font-size-x-small);--sl-button-font-size-medium:var(--sl-font-size-small);--sl-button-font-size-large:var(--sl-font-size-medium);--sl-input-height-small:1.875rem;--sl-input-height-medium:2.5rem;--sl-input-height-large:3.125rem;--sl-input-background-color:var(--sl-color-neutral-0);--sl-input-background-color-hover:var(--sl-input-background-color);--sl-input-background-color-focus:var(--sl-input-background-color);--sl-input-background-color-disabled:var(--sl-color-neutral-100);--sl-input-border-color:var(--sl-color-neutral-300);--sl-input-border-color-hover:var(--sl-color-neutral-400);--sl-input-border-color-focus:var(--sl-color-primary-500);--sl-input-border-color-disabled:var(--sl-color-neutral-300);--sl-input-border-width:1px;--sl-input-required-content:"*";--sl-input-required-content-offset:-2px;--sl-input-required-content-color:var(--sl-input-label-color);--sl-input-border-radius-small:var(--sl-border-radius-medium);--sl-input-border-radius-medium:var(--sl-border-radius-medium);--sl-input-border-radius-large:var(--sl-border-radius-medium);--sl-input-font-family:var(--sl-font-sans);--sl-input-font-weight:var(--sl-font-weight-normal);--sl-input-font-size-small:var(--sl-font-size-small);--sl-input-font-size-medium:var(--sl-font-size-medium);--sl-input-font-size-large:var(--sl-font-size-large);--sl-input-letter-spacing:var(--sl-letter-spacing-normal);--sl-input-color:var(--sl-color-neutral-700);--sl-input-color-hover:var(--sl-color-neutral-700);--sl-input-color-focus:var(--sl-color-neutral-700);--sl-input-color-disabled:var(--sl-color-neutral-900);--sl-input-icon-color:var(--sl-color-neutral-500);--sl-input-icon-color-hover:var(--sl-color-neutral-600);--sl-input-icon-color-focus:var(--sl-color-neutral-600);--sl-input-placeholder-color:var(--sl-color-neutral-500);--sl-input-placeholder-color-disabled:var(--sl-color-neutral-600);--sl-input-spacing-small:var(--sl-spacing-small);--sl-input-spacing-medium:var(--sl-spacing-medium);--sl-input-spacing-large:var(--sl-spacing-large);--sl-input-focus-ring-color:hsl(198.6 88.7% 48.4%/40%);--sl-input-focus-ring-offset:0;--sl-input-filled-background-color:var(--sl-color-neutral-100);--sl-input-filled-background-color-hover:var(--sl-color-neutral-100);--sl-input-filled-background-color-focus:var(--sl-color-neutral-100);--sl-input-filled-background-color-disabled:var(--sl-color-neutral-100);--sl-input-filled-color:var(--sl-color-neutral-800);--sl-input-filled-color-hover:var(--sl-color-neutral-800);--sl-input-filled-color-focus:var(--sl-color-neutral-700);--sl-input-filled-color-disabled:var(--sl-color-neutral-800);--sl-input-label-font-size-small:var(--sl-font-size-small);--sl-input-label-font-size-medium:var(--sl-font-size-medium);--sl-input-label-font-size-large:var(--sl-font-size-large);--sl-input-label-color:inherit;--sl-input-help-text-font-size-small:var(--sl-font-size-x-small);--sl-input-help-text-font-size-medium:var(--sl-font-size-small);--sl-input-help-text-font-size-large:var(--sl-font-size-medium);--sl-input-help-text-color:var(--sl-color-neutral-500);--sl-toggle-size-small:0.875rem;--sl-toggle-size-medium:1.125rem;--sl-toggle-size-large:1.375rem;--sl-overlay-background-color:hsl(240 3.8% 46.1%/33%);--sl-panel-background-color:var(--sl-color-neutral-0);--sl-panel-border-color:var(--sl-color-neutral-200);--sl-panel-border-width:1px;--sl-tooltip-border-radius:var(--sl-border-radius-medium);--sl-tooltip-background-color:var(--sl-color-neutral-800);--sl-tooltip-color:var(--sl-color-neutral-0);--sl-tooltip-font-family:var(--sl-font-sans);--sl-tooltip-font-weight:var(--sl-font-weight-normal);--sl-tooltip-font-size:var(--sl-font-size-small);--sl-tooltip-line-height:var(--sl-line-height-dense);--sl-tooltip-padding:var(--sl-spacing-2x-small) var(--sl-spacing-x-small);--sl-tooltip-arrow-size:6px;--sl-z-index-drawer:700;--sl-z-index-dialog:800;--sl-z-index-dropdown:900;--sl-z-index-toast:950;--sl-z-index-tooltip:1000}@supports (scrollbar-gutter: stable){.sl-scroll-lock{scrollbar-gutter:var(--sl-scroll-lock-gutter)!important}.sl-scroll-lock body{overflow:hidden!important}}@supports not (scrollbar-gutter: stable){.sl-scroll-lock body{padding-right:var(--sl-scroll-lock-size)!important;overflow:hidden!important}}.sl-toast-stack{position:fixed;top:0;right:0;z-index:var(--sl-z-index-toast);width:28rem;max-width:100%;max-height:100%;overflow:auto}.sl-toast-stack sl-alert{margin:var(--sl-spacing-medium)}.sl-toast-stack sl-alert::part(base){box-shadow:var(--sl-shadow-large)}',""]);const a=l},6655:(t,e,o)=>{var i=o(5024),s=i.AH`
  :host {
    --aspect-ratio: inherit;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    max-height: 100%;
    aspect-ratio: var(--aspect-ratio);
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }

  ::slotted(img) {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover;
  }
`,r=o(7324),l=o(4815),a=class extends l.f{connectedCallback(){super.connectedCallback()}render(){return i.qy` <slot></slot> `}};a.styles=[r.$,s],a.define("sl-carousel-item"),o(3109)},6718:(t,e,o)=>{var i=o(5024),s=i.AH`
  :host {
    --size: 25rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .drawer {
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
  }

  .drawer--contained {
    position: absolute;
    z-index: initial;
  }

  .drawer--fixed {
    position: fixed;
    z-index: var(--sl-z-index-drawer);
  }

  .drawer__panel {
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 2;
    max-width: 100%;
    max-height: 100%;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-large);
    overflow: auto;
    pointer-events: all;
  }

  .drawer__panel:focus {
    outline: none;
  }

  .drawer--top .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--end .drawer__panel {
    top: 0;
    inset-inline-end: 0;
    bottom: auto;
    inset-inline-start: auto;
    width: var(--size);
    height: 100%;
  }

  .drawer--bottom .drawer__panel {
    top: auto;
    inset-inline-end: auto;
    bottom: 0;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--start .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: var(--size);
    height: 100%;
  }

  .drawer__header {
    display: flex;
  }

  .drawer__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .drawer__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .drawer__header-actions sl-icon-button,
  .drawer__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .drawer__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .drawer__footer {
    text-align: right;
    padding: var(--footer-spacing);
  }

  .drawer__footer ::slotted(sl-button:not(:last-of-type)) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .drawer:not(.drawer--has-footer) .drawer__footer {
    display: none;
  }

  .drawer__overlay {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
    pointer-events: all;
  }

  .drawer--contained .drawer__overlay {
    display: none;
  }

  @media (forced-colors: active) {
    .drawer__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`,r=o(892),l=o(8609),a=o(2725),n=o(4360),c=o(5137),d=o(1060),h=o(8511),u=o(4101),p=o(541),m=o(4302),g=o(7324),b=o(4815),v=o(3109),f=o(3788),y=o(996),w=o(8146);function _(t){return t.charAt(0).toUpperCase()+t.slice(1)}var x=class extends b.f{constructor(){super(...arguments),this.hasSlotController=new u.X(this,"footer"),this.localize=new p.c(this),this.modal=new r.a(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=t=>{this.contained||"Escape"===t.key&&this.modal.isActive()&&this.open&&(t.stopImmediatePropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),(0,l.JG)(this)))}disconnectedCallback(){super.disconnectedCallback(),(0,l.I7)(this),this.removeOpenListeners()}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){const t=(0,c.RB)(this,"drawer.denyClose",{dir:this.localize.dir()});(0,h.jd)(this.panel,t.keyframes,t.options)}else this.hide()}addOpenListeners(){var t;"CloseWatcher"in window?(null==(t=this.closeWatcher)||t.destroy(),this.contained||(this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard"))):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var t;document.removeEventListener("keydown",this.handleDocumentKeyDown),null==(t=this.closeWatcher)||t.destroy()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),(0,l.JG)(this));const t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([(0,h.Ey)(this.drawer),(0,h.Ey)(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame((()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")}));const e=(0,c.RB)(this,`drawer.show${_(this.placement)}`,{dir:this.localize.dir()}),o=(0,c.RB)(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([(0,h.jd)(this.panel,e.keyframes,e.options),(0,h.jd)(this.overlay,o.keyframes,o.options)]),this.emit("sl-after-show")}else{(0,a.k)(this),this.emit("sl-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),(0,l.I7)(this)),await Promise.all([(0,h.Ey)(this.drawer),(0,h.Ey)(this.overlay)]);const t=(0,c.RB)(this,`drawer.hide${_(this.placement)}`,{dir:this.localize.dir()}),e=(0,c.RB)(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([(0,h.jd)(this.overlay,e.keyframes,e.options).then((()=>{this.overlay.hidden=!0})),(0,h.jd)(this.panel,t.keyframes,t.options).then((()=>{this.panel.hidden=!0}))]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;const o=this.originalTrigger;"function"==typeof(null==o?void 0:o.focus)&&setTimeout((()=>o.focus())),this.emit("sl-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),(0,l.JG)(this)),this.open&&this.contained&&(this.modal.deactivate(),(0,l.I7)(this))}async show(){if(!this.open)return this.open=!0,(0,d.l)(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,(0,d.l)(this,"sl-after-hide")}render(){return i.qy`
      <div
        part="base"
        class=${(0,f.H)({drawer:!0,"drawer--open":this.open,"drawer--top":"top"===this.placement,"drawer--end":"end"===this.placement,"drawer--bottom":"bottom"===this.placement,"drawer--start":"start"===this.placement,"drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":"rtl"===this.localize.dir(),"drawer--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${(0,y.J)(this.noHeader?this.label:void 0)}
          aria-labelledby=${(0,y.J)(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":i.qy`
                <header part="header" class="drawer__header">
                  <h2 part="title" class="drawer__title" id="title">
                    <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                    <slot name="label"> ${this.label.length>0?this.label:String.fromCharCode(65279)} </slot>
                  </h2>
                  <div part="header-actions" class="drawer__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="drawer__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click=${()=>this.requestClose("close-button")}
                    ></sl-icon-button>
                  </div>
                </header>
              `}

          <slot part="body" class="drawer__body"></slot>

          <footer part="footer" class="drawer__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};x.styles=[g.$,s],x.dependencies={"sl-icon-button":n.h},(0,v.Cc)([(0,w.P)(".drawer")],x.prototype,"drawer",2),(0,v.Cc)([(0,w.P)(".drawer__panel")],x.prototype,"panel",2),(0,v.Cc)([(0,w.P)(".drawer__overlay")],x.prototype,"overlay",2),(0,v.Cc)([(0,w.MZ)({type:Boolean,reflect:!0})],x.prototype,"open",2),(0,v.Cc)([(0,w.MZ)({reflect:!0})],x.prototype,"label",2),(0,v.Cc)([(0,w.MZ)({reflect:!0})],x.prototype,"placement",2),(0,v.Cc)([(0,w.MZ)({type:Boolean,reflect:!0})],x.prototype,"contained",2),(0,v.Cc)([(0,w.MZ)({attribute:"no-header",type:Boolean,reflect:!0})],x.prototype,"noHeader",2),(0,v.Cc)([(0,m.w)("open",{waitUntilFirstUpdate:!0})],x.prototype,"handleOpenChange",1),(0,v.Cc)([(0,m.w)("contained",{waitUntilFirstUpdate:!0})],x.prototype,"handleNoModalChange",1),(0,c.Ee)("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}}),(0,c.Ee)("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}}),(0,c.Ee)("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}}),(0,c.Ee)("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}}),(0,c.Ee)("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}}),(0,c.Ee)("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}}),(0,c.Ee)("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}}),(0,c.Ee)("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}}),(0,c.Ee)("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}}),(0,c.Ee)("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}}),(0,c.Ee)("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}}),x.define("sl-drawer"),o(8678),o(3750),o(3585),o(3389),o(4415),o(4637),o(8326),o(2089)},6758:t=>{t.exports=function(t){return t[1]}},7031:(t,e,o)=>{var i=o(5024),s=i.AH`
  :host {
    --indicator-color: var(--sl-color-primary-600);
    --track-color: var(--sl-color-neutral-200);
    --track-width: 2px;

    display: block;
  }

  .tab-group {
    display: flex;
    border-radius: 0;
  }

  .tab-group__tabs {
    display: flex;
    position: relative;
  }

  .tab-group__indicator {
    position: absolute;
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) width ease;
  }

  .tab-group--has-scroll-controls .tab-group__nav-container {
    position: relative;
    padding: 0 var(--sl-spacing-x-large);
  }

  .tab-group--has-scroll-controls .tab-group__scroll-button--start--hidden,
  .tab-group--has-scroll-controls .tab-group__scroll-button--end--hidden {
    visibility: hidden;
  }

  .tab-group__body {
    display: block;
    overflow: auto;
  }

  .tab-group__scroll-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    width: var(--sl-spacing-x-large);
  }

  .tab-group__scroll-button--start {
    left: 0;
  }

  .tab-group__scroll-button--end {
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--start {
    left: auto;
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--end {
    left: 0;
    right: auto;
  }

  /*
   * Top
   */

  .tab-group--top {
    flex-direction: column;
  }

  .tab-group--top .tab-group__nav-container {
    order: 1;
  }

  .tab-group--top .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--top .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--top .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-bottom: solid var(--track-width) var(--track-color);
  }

  .tab-group--top .tab-group__indicator {
    bottom: calc(-1 * var(--track-width));
    border-bottom: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--top .tab-group__body {
    order: 2;
  }

  .tab-group--top ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Bottom
   */

  .tab-group--bottom {
    flex-direction: column;
  }

  .tab-group--bottom .tab-group__nav-container {
    order: 2;
  }

  .tab-group--bottom .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--bottom .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--bottom .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-top: solid var(--track-width) var(--track-color);
  }

  .tab-group--bottom .tab-group__indicator {
    top: calc(-1 * var(--track-width));
    border-top: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--bottom .tab-group__body {
    order: 1;
  }

  .tab-group--bottom ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Start
   */

  .tab-group--start {
    flex-direction: row;
  }

  .tab-group--start .tab-group__nav-container {
    order: 1;
  }

  .tab-group--start .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-inline-end: solid var(--track-width) var(--track-color);
  }

  .tab-group--start .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    border-right: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--start.tab-group--rtl .tab-group__indicator {
    right: auto;
    left: calc(-1 * var(--track-width));
  }

  .tab-group--start .tab-group__body {
    flex: 1 1 auto;
    order: 2;
  }

  .tab-group--start ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }

  /*
   * End
   */

  .tab-group--end {
    flex-direction: row;
  }

  .tab-group--end .tab-group__nav-container {
    order: 2;
  }

  .tab-group--end .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-left: solid var(--track-width) var(--track-color);
  }

  .tab-group--end .tab-group__indicator {
    left: calc(-1 * var(--track-width));
    border-inline-start: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--end.tab-group--rtl .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    left: auto;
  }

  .tab-group--end .tab-group__body {
    flex: 1 1 auto;
    order: 1;
  }

  .tab-group--end ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }
`,r=o(192),l=o(8609),a=o(4360),n=o(541),c=o(4302),d=o(7324),h=o(4815),u=o(3109),p=o(3788),m=o(8146),g=class extends h.f{constructor(){super(...arguments),this.tabs=[],this.focusableTabs=[],this.panels=[],this.localize=new n.c(this),this.hasScrollControls=!1,this.shouldHideScrollStartButton=!1,this.shouldHideScrollEndButton=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1,this.fixedScrollControls=!1,this.scrollOffset=1}connectedCallback(){const t=Promise.all([customElements.whenDefined("sl-tab"),customElements.whenDefined("sl-tab-panel")]);super.connectedCallback(),this.resizeObserver=new ResizeObserver((()=>{this.repositionIndicator(),this.updateScrollControls()})),this.mutationObserver=new MutationObserver((t=>{const e=t.filter((({target:t})=>{if(t===this)return!0;if(t.closest("sl-tab-group")!==this)return!1;const e=t.tagName.toLowerCase();return"sl-tab"===e||"sl-tab-panel"===e}));if(0!==e.length)if(e.some((t=>!["aria-labelledby","aria-controls"].includes(t.attributeName)))&&setTimeout((()=>this.setAriaLabels())),e.some((t=>"disabled"===t.attributeName)))this.syncTabsAndPanels();else if(e.some((t=>"active"===t.attributeName))){const t=e.filter((t=>"active"===t.attributeName&&"sl-tab"===t.target.tagName.toLowerCase())).map((t=>t.target)).find((t=>t.active));t&&this.setActiveTab(t)}})),this.updateComplete.then((()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,attributeFilter:["active","disabled","name","panel"],childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),t.then((()=>{new IntersectionObserver(((t,e)=>{var o;t[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab(null!=(o=this.getActiveTab())?o:this.tabs[0],{emitEvents:!1}),e.unobserve(t[0].target))})).observe(this.tabGroup)}))}))}disconnectedCallback(){var t,e;super.disconnectedCallback(),null==(t=this.mutationObserver)||t.disconnect(),this.nav&&(null==(e=this.resizeObserver)||e.unobserve(this.nav))}getAllTabs(){return this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()}getAllPanels(){return[...this.body.assignedElements()].filter((t=>"sl-tab-panel"===t.tagName.toLowerCase()))}getActiveTab(){return this.tabs.find((t=>t.active))}handleClick(t){const e=t.target.closest("sl-tab");(null==e?void 0:e.closest("sl-tab-group"))===this&&null!==e&&this.setActiveTab(e,{scrollBehavior:"smooth"})}handleKeyDown(t){const e=t.target.closest("sl-tab");if((null==e?void 0:e.closest("sl-tab-group"))===this&&(["Enter"," "].includes(t.key)&&null!==e&&(this.setActiveTab(e,{scrollBehavior:"smooth"}),t.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key))){const e=this.tabs.find((t=>t.matches(":focus"))),o="rtl"===this.localize.dir();let i=null;if("sl-tab"===(null==e?void 0:e.tagName.toLowerCase())){if("Home"===t.key)i=this.focusableTabs[0];else if("End"===t.key)i=this.focusableTabs[this.focusableTabs.length-1];else if(["top","bottom"].includes(this.placement)&&t.key===(o?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&"ArrowUp"===t.key){const t=this.tabs.findIndex((t=>t===e));i=this.findNextFocusableTab(t,"backward")}else if(["top","bottom"].includes(this.placement)&&t.key===(o?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&"ArrowDown"===t.key){const t=this.tabs.findIndex((t=>t===e));i=this.findNextFocusableTab(t,"forward")}if(!i)return;i.tabIndex=0,i.focus({preventScroll:!0}),"auto"===this.activation?this.setActiveTab(i,{scrollBehavior:"smooth"}):this.tabs.forEach((t=>{t.tabIndex=t===i?0:-1})),["top","bottom"].includes(this.placement)&&(0,l.Rt)(i,this.nav,"horizontal"),t.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:"rtl"===this.localize.dir()?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:"rtl"===this.localize.dir()?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(t,e){if(e=(0,u.IA)({emitEvents:!0,scrollBehavior:"auto"},e),t!==this.activeTab&&!t.disabled){const o=this.activeTab;this.activeTab=t,this.tabs.forEach((t=>{t.active=t===this.activeTab,t.tabIndex=t===this.activeTab?0:-1})),this.panels.forEach((t=>{var e;return t.active=t.name===(null==(e=this.activeTab)?void 0:e.panel)})),this.syncIndicator(),["top","bottom"].includes(this.placement)&&(0,l.Rt)(this.activeTab,this.nav,"horizontal",e.scrollBehavior),e.emitEvents&&(o&&this.emit("sl-tab-hide",{detail:{name:o.panel}}),this.emit("sl-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach((t=>{const e=this.panels.find((e=>e.name===t.panel));e&&(t.setAttribute("aria-controls",e.getAttribute("id")),e.setAttribute("aria-labelledby",t.getAttribute("id")))}))}repositionIndicator(){const t=this.getActiveTab();if(!t)return;const e=t.clientWidth,o=t.clientHeight,i="rtl"===this.localize.dir(),s=this.getAllTabs(),r=s.slice(0,s.indexOf(t)).reduce(((t,e)=>({left:t.left+e.clientWidth,top:t.top+e.clientHeight})),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${e}px`,this.indicator.style.height="auto",this.indicator.style.translate=i?-1*r.left+"px":`${r.left}px`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${o}px`,this.indicator.style.translate=`0 ${r.top}px`}}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.focusableTabs=this.tabs.filter((t=>!t.disabled)),this.panels=this.getAllPanels(),this.syncIndicator(),this.updateComplete.then((()=>this.updateScrollControls()))}findNextFocusableTab(t,e){let o=null;const i="forward"===e?1:-1;let s=t+i;for(;t<this.tabs.length;){if(o=this.tabs[s]||null,null===o){o="forward"===e?this.focusableTabs[0]:this.focusableTabs[this.focusableTabs.length-1];break}if(!o.disabled)break;s+=i}return o}updateScrollButtons(){this.hasScrollControls&&!this.fixedScrollControls&&(this.shouldHideScrollStartButton=this.scrollFromStart()<=this.scrollOffset,this.shouldHideScrollEndButton=this.isScrolledToEnd())}isScrolledToEnd(){return this.scrollFromStart()+this.nav.clientWidth>=this.nav.scrollWidth-this.scrollOffset}scrollFromStart(){return"rtl"===this.localize.dir()?-this.nav.scrollLeft:this.nav.scrollLeft}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1,this.updateScrollButtons()}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}show(t){const e=this.tabs.find((e=>e.panel===t));e&&this.setActiveTab(e,{scrollBehavior:"smooth"})}render(){const t="rtl"===this.localize.dir();return i.qy`
      <div
        part="base"
        class=${(0,p.H)({"tab-group":!0,"tab-group--top":"top"===this.placement,"tab-group--bottom":"bottom"===this.placement,"tab-group--start":"start"===this.placement,"tab-group--end":"end"===this.placement,"tab-group--rtl":"rtl"===this.localize.dir(),"tab-group--has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?i.qy`
                <sl-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class=${(0,p.H)({"tab-group__scroll-button":!0,"tab-group__scroll-button--start":!0,"tab-group__scroll-button--start--hidden":this.shouldHideScrollStartButton})}
                  name=${t?"chevron-right":"chevron-left"}
                  library="system"
                  tabindex="-1"
                  aria-hidden="true"
                  label=${this.localize.term("scrollToStart")}
                  @click=${this.handleScrollToStart}
                ></sl-icon-button>
              `:""}

          <div class="tab-group__nav" @scrollend=${this.updateScrollButtons}>
            <div part="tabs" class="tab-group__tabs" role="tablist">
              <div part="active-tab-indicator" class="tab-group__indicator"></div>
              <sl-resize-observer @sl-resize=${this.syncIndicator}>
                <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
              </sl-resize-observer>
            </div>
          </div>

          ${this.hasScrollControls?i.qy`
                <sl-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class=${(0,p.H)({"tab-group__scroll-button":!0,"tab-group__scroll-button--end":!0,"tab-group__scroll-button--end--hidden":this.shouldHideScrollEndButton})}
                  name=${t?"chevron-left":"chevron-right"}
                  library="system"
                  tabindex="-1"
                  aria-hidden="true"
                  label=${this.localize.term("scrollToEnd")}
                  @click=${this.handleScrollToEnd}
                ></sl-icon-button>
              `:""}
        </div>

        <slot part="body" class="tab-group__body" @slotchange=${this.syncTabsAndPanels}></slot>
      </div>
    `}};g.styles=[d.$,s],g.dependencies={"sl-icon-button":a.h,"sl-resize-observer":r.e},(0,u.Cc)([(0,m.P)(".tab-group")],g.prototype,"tabGroup",2),(0,u.Cc)([(0,m.P)(".tab-group__body")],g.prototype,"body",2),(0,u.Cc)([(0,m.P)(".tab-group__nav")],g.prototype,"nav",2),(0,u.Cc)([(0,m.P)(".tab-group__indicator")],g.prototype,"indicator",2),(0,u.Cc)([(0,m.wk)()],g.prototype,"hasScrollControls",2),(0,u.Cc)([(0,m.wk)()],g.prototype,"shouldHideScrollStartButton",2),(0,u.Cc)([(0,m.wk)()],g.prototype,"shouldHideScrollEndButton",2),(0,u.Cc)([(0,m.MZ)()],g.prototype,"placement",2),(0,u.Cc)([(0,m.MZ)()],g.prototype,"activation",2),(0,u.Cc)([(0,m.MZ)({attribute:"no-scroll-controls",type:Boolean})],g.prototype,"noScrollControls",2),(0,u.Cc)([(0,m.MZ)({attribute:"fixed-scroll-controls",type:Boolean})],g.prototype,"fixedScrollControls",2),(0,u.Cc)([(0,m.Ls)({passive:!0})],g.prototype,"updateScrollButtons",1),(0,u.Cc)([(0,c.w)("noScrollControls",{waitUntilFirstUpdate:!0})],g.prototype,"updateScrollControls",1),(0,u.Cc)([(0,c.w)("placement",{waitUntilFirstUpdate:!0})],g.prototype,"syncIndicator",1),g.define("sl-tab-group"),o(6023),o(2427),o(3750),o(3585),o(3389),o(4415),o(4637),o(8326),o(2089)},7240:(t,e,o)=>{o.d(e,{N:()=>a});var i=o(1931),s=o(7324),r=o(4815),l=o(5024),a=class extends r.f{render(){return l.qy` <slot></slot> `}};a.styles=[s.$,i.W]},7324:(t,e,o)=>{o.d(e,{$:()=>i});var i=o(5024).AH`
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
`},7563:(t,e,o)=>{var i=o(5024).AH`
  :host {
    --color: var(--sl-panel-border-color);
    --width: var(--sl-panel-border-width);
    --spacing: var(--sl-spacing-medium);
  }

  :host(:not([vertical])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([vertical]) {
    display: inline-block;
    height: 100%;
    border-left: solid var(--width) var(--color);
    margin: 0 var(--spacing);
  }
`,s=o(4302),r=o(7324),l=o(4815),a=o(3109),n=o(8146),c=class extends l.f{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};c.styles=[r.$,i],(0,a.Cc)([(0,n.MZ)({type:Boolean,reflect:!0})],c.prototype,"vertical",2),(0,a.Cc)([(0,s.w)("vertical")],c.prototype,"handleVerticalChange",1),c.define("sl-divider")},7679:(t,e,o)=>{o.d(e,{qy:()=>c,eu:()=>l});var i=o(4716);const s=Symbol.for(""),r=t=>{if((null==t?void 0:t.r)===s)return null==t?void 0:t._$litStatic$},l=function(t){for(var e=arguments.length,o=new Array(e>1?e-1:0),i=1;i<e;i++)o[i-1]=arguments[i];return{_$litStatic$:o.reduce(((e,o,i)=>e+(t=>{if(void 0!==t._$litStatic$)return t._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${t}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(o)+t[i+1]),t[0]),r:s}},a=new Map,n=t=>function(e){for(var o=arguments.length,i=new Array(o>1?o-1:0),s=1;s<o;s++)i[s-1]=arguments[s];const l=i.length;let n,c;const d=[],h=[];let u,p=0,m=!1;for(;p<l;){for(u=e[p];p<l&&void 0!==(c=i[p],n=r(c));)u+=n+e[++p],m=!0;p!==l&&h.push(c),d.push(u),p++}if(p===l&&d.push(e[l]),m){const t=d.join("$$lit$$");void 0===(e=a.get(t))&&(d.raw=d,a.set(t,e=d)),i=h}return t(e,...i)},c=n(i.qy);n(i.JW),n(i.ej)},7719:(t,e,o)=>{o.d(e,{j:()=>i.j});var i=o(2558);o(3109)},7982:(t,e,o)=>{var i=o(5024),s=i.AH`
  .breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`,r=o(541),l=o(3389),a=o(7324),n=o(4815),c=o(3109),d=o(8146),h=class extends n.f{constructor(){super(...arguments),this.localize=new r.c(this),this.separatorDir=this.localize.dir(),this.label=""}getSeparator(){const t=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[t,...t.querySelectorAll("[id]")].forEach((t=>t.removeAttribute("id"))),t.setAttribute("data-default",""),t.slot="separator",t}handleSlotChange(){const t=[...this.defaultSlot.assignedElements({flatten:!0})].filter((t=>"sl-breadcrumb-item"===t.tagName.toLowerCase()));t.forEach(((e,o)=>{const i=e.querySelector('[slot="separator"]');null===i?e.append(this.getSeparator()):i.hasAttribute("data-default")&&i.replaceWith(this.getSeparator()),o===t.length-1?e.setAttribute("aria-current","page"):e.removeAttribute("aria-current")}))}render(){return this.separatorDir!==this.localize.dir()&&(this.separatorDir=this.localize.dir(),this.updateComplete.then((()=>this.handleSlotChange()))),i.qy`
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <span hidden aria-hidden="true">
        <slot name="separator">
          <sl-icon name=${"rtl"===this.localize.dir()?"chevron-left":"chevron-right"} library="system"></sl-icon>
        </slot>
      </span>
    `}};h.styles=[a.$,s],h.dependencies={"sl-icon":l.B},(0,c.Cc)([(0,d.P)("slot")],h.prototype,"defaultSlot",2),(0,c.Cc)([(0,d.P)('slot[name="separator"]')],h.prototype,"separatorSlot",2),(0,c.Cc)([(0,d.MZ)()],h.prototype,"label",2),h.define("sl-breadcrumb"),o(3585),o(4415),o(4637),o(8326),o(2089),o(4302)},7985:(t,e,o)=>{var i=o(5024),s=i.AH`
  :host {
    --submenu-offset: -2px;

    display: block;
  }

  :host([inert]) {
    display: none;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-2x-small);
    transition: var(--sl-transition-fast) fill;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .menu-item.menu-item--loading {
    outline: none;
    cursor: wait;
  }

  .menu-item.menu-item--loading *:not(sl-spinner) {
    opacity: 0.5;
  }

  .menu-item--loading sl-spinner {
    --indicator-color: currentColor;
    --track-width: 1px;
    position: absolute;
    font-size: 0.75em;
    top: calc(50% - 0.5em);
    left: 0.65rem;
    opacity: 1;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /* Safe triangle */
  .menu-item--submenu-expanded::after {
    content: '';
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--safe-triangle-cursor-x, 0) var(--safe-triangle-cursor-y, 0),
      var(--safe-triangle-submenu-start-x, 0) var(--safe-triangle-submenu-start-y, 0),
      var(--safe-triangle-submenu-end-x, 0) var(--safe-triangle-submenu-end-y, 0)
    );
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'], :focus-visible)) .menu-item,
  .menu-item--submenu-expanded {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  :host(:focus-visible) .menu-item {
    outline: none;
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }

  /* Add elevation and z-index to submenus */
  sl-popup::part(popup) {
    box-shadow: var(--sl-shadow-large);
    z-index: var(--sl-z-index-dropdown);
    margin-left: var(--submenu-offset);
  }

  .menu-item--rtl sl-popup::part(popup) {
    margin-left: calc(-1 * var(--submenu-offset));
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(:focus-visible) .menu-item {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }

  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`,r=o(4716),l=o(3348),a=o(5128);const n=(t,e)=>{const o=t._$AN;if(void 0===o)return!1;for(const t of o){var i;null!==(i=t._$AO)&&void 0!==i&&i.call(t,e,!1),n(t,e)}return!0},c=t=>{let e,o;do{var i;if(void 0===(e=t._$AM))break;o=e._$AN,o.delete(t),t=e}while(0===(null===(i=o)||void 0===i?void 0:i.size))},d=t=>{for(let e;e=t._$AM;t=e){let o=e._$AN;if(void 0===o)e._$AN=o=new Set;else if(o.has(t))break;o.add(t),p(e)}};function h(t){void 0!==this._$AN?(c(this),this._$AM=t,d(this)):this._$AM=t}function u(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;const i=this._$AH,s=this._$AN;if(void 0!==s&&0!==s.size)if(e)if(Array.isArray(i))for(let t=o;t<i.length;t++)n(i[t],!1),c(i[t]);else null!=i&&(n(i,!1),c(i));else n(this,t)}const p=t=>{var e,o;t.type==a.OA.CHILD&&(null!==(e=t._$AP)&&void 0!==e||(t._$AP=u),null!==(o=t._$AQ)&&void 0!==o||(t._$AQ=h))};class m extends a.WL{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,o){super._$AT(t,e,o),d(this),this.isConnected=t._$AU}_$AO(t){var e,o;let i=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t!==this.isConnected&&(this.isConnected=t,t?null===(e=this.reconnected)||void 0===e||e.call(this):null===(o=this.disconnected)||void 0===o||o.call(this)),i&&(n(this,t),c(this))}setValue(t){if((0,l.Rt)(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}class g{}const b=new WeakMap,v=(0,a.u$)(class extends m{render(t){return r.s6}update(t,e){var o;let[i]=e;const s=i!==this.Y;return s&&void 0!==this.Y&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.Y=i,this.ht=null===(o=t.options)||void 0===o?void 0:o.host,this.rt(this.ct=t.element)),r.s6}rt(t){if(this.isConnected||(t=void 0),"function"==typeof this.Y){var e;const o=null!==(e=this.ht)&&void 0!==e?e:globalThis;let i=b.get(o);void 0===i&&(i=new WeakMap,b.set(o,i)),void 0!==i.get(this.Y)&&this.Y.call(this.ht,void 0),i.set(this.Y,t),void 0!==t&&this.Y.call(this.ht,t)}else this.Y.value=t}get lt(){var t,e,o;return"function"==typeof this.Y?null===(t=b.get(null!==(e=this.ht)&&void 0!==e?e:globalThis))||void 0===t?void 0:t.get(this.Y):null===(o=this.Y)||void 0===o?void 0:o.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var f=class{constructor(t,e){this.popupRef=new g,this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=t=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${t.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${t.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=t=>{switch(t.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":t.target!==this.host&&(t.preventDefault(),t.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(t)}},this.handleClick=t=>{var e;t.target===this.host?(t.preventDefault(),t.stopPropagation()):t.target instanceof Element&&("sl-menu-item"===t.target.tagName||(null==(e=t.target.role)?void 0:e.startsWith("menuitem")))&&this.disableSubmenu()},this.handleFocusOut=t=>{t.relatedTarget&&t.relatedTarget instanceof Element&&this.host.contains(t.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=t=>{t.stopPropagation()},this.handlePopupReposition=()=>{const t=this.host.renderRoot.querySelector("slot[name='submenu']"),e=null==t?void 0:t.assignedElements({flatten:!0}).filter((t=>"sl-menu"===t.localName))[0],o="rtl"===getComputedStyle(this.host).direction;if(!e)return;const{left:i,top:s,width:r,height:l}=e.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${o?i+r:i}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${s}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${o?i+r:i}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${s+l}px`)},(this.host=t).addController(this),this.hasSlotController=e}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(t){const e=this.host.renderRoot.querySelector("slot[name='submenu']");if(!e)return void console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);let o=null;for(const t of e.assignedElements())if(o=t.querySelectorAll("sl-menu-item, [role^='menuitem']"),0!==o.length)break;if(o&&0!==o.length){o[0].setAttribute("tabindex","0");for(let t=1;t!==o.length;++t)o[t].setAttribute("tabindex","-1");this.popupRef.value&&(t.preventDefault(),t.stopPropagation(),this.popupRef.value.active?o[0]instanceof HTMLElement&&o[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then((()=>{o[0]instanceof HTMLElement&&o[0].focus()})),this.host.requestUpdate()))}}setSubmenuState(t){this.popupRef.value&&this.popupRef.value.active!==t&&(this.popupRef.value.active=t,this.host.requestUpdate())}enableSubmenu(t=!0){t?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout((()=>{this.setSubmenuState(!0)}),this.submenuOpenDelay)):this.setSubmenuState(!0)}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var t;if(!(null==(t=this.host.parentElement)?void 0:t.computedStyleMap))return;const e=this.host.parentElement.computedStyleMap(),o=["padding-top","border-top-width","margin-top"].reduce(((t,o)=>{var i;const s=null!=(i=e.get(o))?i:new CSSUnitValue(0,"px");return t-(s instanceof CSSUnitValue?s:new CSSUnitValue(0,"px")).to("px").value}),0);this.skidding=o}isExpanded(){return!!this.popupRef.value&&this.popupRef.value.active}renderSubmenu(){const t="rtl"===getComputedStyle(this.host).direction;return this.isConnected?i.qy`
      <sl-popup
        ${v(this.popupRef)}
        placement=${t?"left-start":"right-start"}
        anchor="anchor"
        flip
        flip-fallback-strategy="best-fit"
        skidding="${this.skidding}"
        strategy="fixed"
        auto-size="vertical"
        auto-size-padding="10"
      >
        <slot name="submenu"></slot>
      </sl-popup>
    `:i.qy` <slot name="submenu" hidden></slot> `}},y=o(4667),w=o(762),_=o(4101),x=o(541),C=o(3389),k=o(4302),$=o(7324),z=o(4815),A=o(3109),S=o(3788),M=o(8146),E=class extends z.f{constructor(){super(...arguments),this.localize=new x.c(this),this.type="normal",this.checked=!1,this.value="",this.loading=!1,this.disabled=!1,this.hasSlotController=new _.X(this,"submenu"),this.submenuController=new f(this,this.hasSlotController),this.handleHostClick=t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())},this.handleMouseOver=t=>{this.focus(),t.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){const t=this.getTextLabel();void 0!==this.cachedTextLabel?t!==this.cachedTextLabel&&(this.cachedTextLabel=t,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1})):this.cachedTextLabel=t}handleCheckedChange(){if(this.checked&&"checkbox"!==this.type)return this.checked=!1,void console.error('The checked attribute can only be used on menu items with type="checkbox"',this);"checkbox"===this.type?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){"checkbox"===this.type?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return(0,_.r)(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){const t="rtl"===this.localize.dir(),e=this.submenuController.isExpanded();return i.qy`
      <div
        id="anchor"
        part="base"
        class=${(0,S.H)({"menu-item":!0,"menu-item--rtl":t,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--loading":this.loading,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":e})}
        ?aria-haspopup="${this.isSubmenu()}"
        ?aria-expanded="${!!e}"
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check" library="system" aria-hidden="true"></sl-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span part="submenu-icon" class="menu-item__chevron">
          <sl-icon name=${t?"chevron-left":"chevron-right"} library="system" aria-hidden="true"></sl-icon>
        </span>

        ${this.submenuController.renderSubmenu()}
        ${this.loading?i.qy` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `:""}
      </div>
    `}};E.styles=[$.$,s],E.dependencies={"sl-icon":C.B,"sl-popup":y.m,"sl-spinner":w.p},(0,A.Cc)([(0,M.P)("slot:not([name])")],E.prototype,"defaultSlot",2),(0,A.Cc)([(0,M.P)(".menu-item")],E.prototype,"menuItem",2),(0,A.Cc)([(0,M.MZ)()],E.prototype,"type",2),(0,A.Cc)([(0,M.MZ)({type:Boolean,reflect:!0})],E.prototype,"checked",2),(0,A.Cc)([(0,M.MZ)()],E.prototype,"value",2),(0,A.Cc)([(0,M.MZ)({type:Boolean,reflect:!0})],E.prototype,"loading",2),(0,A.Cc)([(0,M.MZ)({type:Boolean,reflect:!0})],E.prototype,"disabled",2),(0,A.Cc)([(0,k.w)("checked")],E.prototype,"handleCheckedChange",1),(0,A.Cc)([(0,k.w)("disabled")],E.prototype,"handleDisabledChange",1),(0,A.Cc)([(0,k.w)("type")],E.prototype,"handleTypeChange",1),E.define("sl-menu-item"),o(8819),o(875),o(3585),o(4415),o(4637),o(8326),o(2089)},8128:t=>{var e={};t.exports=function(t,o){var i=function(t){if(void 0===e[t]){var o=document.querySelector(t);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(t){o=null}e[t]=o}return e[t]}(t);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(o)}},8146:(t,e,o)=>{o.d(e,{Ls:()=>n,MZ:()=>l,P:()=>d,nJ:()=>h,wk:()=>a});var i=o(3169);const s={attribute:!0,type:String,converter:i.W3,reflect:!1,hasChanged:i.Ec},r=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,e=arguments.length>1?arguments[1]:void 0,o=arguments.length>2?arguments[2]:void 0;const{kind:i,metadata:r}=o;let l=globalThis.litPropertyMetadata.get(r);if(void 0===l&&globalThis.litPropertyMetadata.set(r,l=new Map),l.set(o.name,t),"accessor"===i){const{name:i}=o;return{set(o){const s=e.get.call(this);e.set.call(this,o),this.requestUpdate(i,s,t)},init(e){return void 0!==e&&this.P(i,void 0,t),e}}}if("setter"===i){const{name:i}=o;return function(o){const s=this[i];e.call(this,o),this.requestUpdate(i,s,t)}}throw Error("Unsupported decorator location: "+i)};function l(t){return(e,o)=>"object"==typeof o?r(t,e,o):((t,e,o)=>{const i=e.hasOwnProperty(o);return e.constructor.createProperty(o,i?{...t,wrapped:!0}:t),i?Object.getOwnPropertyDescriptor(e,o):void 0})(t,e,o)}function a(t){return l({...t,state:!0,attribute:!1})}function n(t){return(e,o)=>{const i="function"==typeof e?e:e[o];Object.assign(i,t)}}const c=(t,e,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&"object"!=typeof e&&Object.defineProperty(t,e,o),o);function d(t,e){return(o,i,s)=>{const r=e=>{var o,i;return null!==(o=null===(i=e.renderRoot)||void 0===i?void 0:i.querySelector(t))&&void 0!==o?o:null};if(e){const{get:t,set:e}="object"==typeof i?o:null!=s?s:(()=>{const t=Symbol();return{get(){return this[t]},set(e){this[t]=e}}})();return c(o,i,{get(){let o=t.call(this);return void 0===o&&(o=r(this),(null!==o||this.hasUpdated)&&e.call(this,o)),o}})}return c(o,i,{get(){return r(this)}})}}function h(t){return(e,o)=>c(e,o,{async get(){var e,o;return await this.updateComplete,null!==(e=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(t))&&void 0!==e?e:null}})}},8187:(t,e,o)=>{o(4360).h.define("sl-icon-button"),o(3750),o(3389),o(4415),o(4637),o(8326),o(2089),o(4302),o(7324),o(4815),o(3109)},8258:(t,e,o)=>{var i=o(2591),s=o.n(i),r=o(1740),l=o.n(r),a=o(8128),n=o.n(a),c=o(855),d=o.n(c),h=o(3051),u=o.n(h),p=o(3656),m=o.n(p),g=o(6576),b={};b.styleTagTransform=m(),b.setAttributes=d(),b.insert=n().bind(null,"head"),b.domAPI=l(),b.insertStyleElement=u(),s()(g.A,b),g.A&&g.A.locals&&g.A.locals},8326:(t,e,o)=>{o.d(e,{g:()=>s});var i={caret:'\n    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n      <polyline points="6 9 12 15 18 9"></polyline>\n    </svg>\n  ',check:'\n    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">\n        <g stroke="currentColor">\n          <g transform="translate(3.428571, 3.428571)">\n            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>\n            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>\n          </g>\n        </g>\n      </g>\n    </svg>\n  ',"chevron-down":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>\n    </svg>\n  ',"chevron-left":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>\n    </svg>\n  ',"chevron-right":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>\n    </svg>\n  ',copy:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>\n    </svg>\n  ',eye:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">\n      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>\n      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>\n    </svg>\n  ',"eye-slash":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">\n      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>\n      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>\n      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>\n    </svg>\n  ',eyedropper:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">\n      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>\n    </svg>\n  ',"grip-vertical":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">\n      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>\n    </svg>\n  ',indeterminate:'\n    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">\n        <g stroke="currentColor" stroke-width="2">\n          <g transform="translate(2.285714, 6.857143)">\n            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>\n          </g>\n        </g>\n      </g>\n    </svg>\n  ',"person-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">\n      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>\n    </svg>\n  ',"play-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">\n      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>\n    </svg>\n  ',"pause-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">\n      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>\n    </svg>\n  ',radio:'\n    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <g fill="currentColor">\n          <circle cx="8" cy="8" r="3.42857143"></circle>\n        </g>\n      </g>\n    </svg>\n  ',"star-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">\n      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>\n    </svg>\n  ',"x-lg":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">\n      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>\n    </svg>\n  ',"x-circle-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">\n      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>\n    </svg>\n  '},s={name:"system",resolver:t=>t in i?`data:image/svg+xml,${encodeURIComponent(i[t])}`:""}},8420:(t,e,o)=>{o(762).p.define("sl-spinner"),o(875),o(541),o(3585),o(7324),o(4815),o(3109)},8478:(t,e,o)=>{o.d(e,{M:()=>v});var i=o(762),s=o(1736),r=o(3443),l=o(4101),a=o(541),n=o(3389),c=o(4302),d=o(7324),h=o(4815),u=o(3109),p=o(3788),m=o(7679),g=o(996),b=o(8146),v=class extends h.f{constructor(){super(...arguments),this.formControlController=new s.Ud(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new l.X(this,"[default]","prefix","suffix"),this.localize=new a.c(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:s.G6}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){"submit"===this.type&&this.formControlController.submit(this),"reset"===this.type&&this.formControlController.reset(this)}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}checkValidity(){return!this.isButton()||this.button.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return!this.isButton()||this.button.reportValidity()}setCustomValidity(t){this.isButton()&&(this.button.setCustomValidity(t),this.formControlController.updateValidity())}render(){const t=this.isLink(),e=t?m.eu`a`:m.eu`button`;return m.qy`
      <${e}
        part="base"
        class=${(0,p.H)({button:!0,"button--default":"default"===this.variant,"button--primary":"primary"===this.variant,"button--success":"success"===this.variant,"button--neutral":"neutral"===this.variant,"button--warning":"warning"===this.variant,"button--danger":"danger"===this.variant,"button--text":"text"===this.variant,"button--small":"small"===this.size,"button--medium":"medium"===this.size,"button--large":"large"===this.size,"button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":"rtl"===this.localize.dir(),"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${(0,g.J)(t?void 0:this.disabled)}
        type=${(0,g.J)(t?void 0:this.type)}
        title=${this.title}
        name=${(0,g.J)(t?void 0:this.name)}
        value=${(0,g.J)(t?void 0:this.value)}
        href=${(0,g.J)(t&&!this.disabled?this.href:void 0)}
        target=${(0,g.J)(t?this.target:void 0)}
        download=${(0,g.J)(t?this.download:void 0)}
        rel=${(0,g.J)(t?this.rel:void 0)}
        role=${(0,g.J)(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?m.qy` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?m.qy`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${e}>
    `}};v.styles=[d.$,r.q],v.dependencies={"sl-icon":n.B,"sl-spinner":i.p},(0,u.Cc)([(0,b.P)(".button")],v.prototype,"button",2),(0,u.Cc)([(0,b.wk)()],v.prototype,"hasFocus",2),(0,u.Cc)([(0,b.wk)()],v.prototype,"invalid",2),(0,u.Cc)([(0,b.MZ)()],v.prototype,"title",2),(0,u.Cc)([(0,b.MZ)({reflect:!0})],v.prototype,"variant",2),(0,u.Cc)([(0,b.MZ)({reflect:!0})],v.prototype,"size",2),(0,u.Cc)([(0,b.MZ)({type:Boolean,reflect:!0})],v.prototype,"caret",2),(0,u.Cc)([(0,b.MZ)({type:Boolean,reflect:!0})],v.prototype,"disabled",2),(0,u.Cc)([(0,b.MZ)({type:Boolean,reflect:!0})],v.prototype,"loading",2),(0,u.Cc)([(0,b.MZ)({type:Boolean,reflect:!0})],v.prototype,"outline",2),(0,u.Cc)([(0,b.MZ)({type:Boolean,reflect:!0})],v.prototype,"pill",2),(0,u.Cc)([(0,b.MZ)({type:Boolean,reflect:!0})],v.prototype,"circle",2),(0,u.Cc)([(0,b.MZ)()],v.prototype,"type",2),(0,u.Cc)([(0,b.MZ)()],v.prototype,"name",2),(0,u.Cc)([(0,b.MZ)()],v.prototype,"value",2),(0,u.Cc)([(0,b.MZ)()],v.prototype,"href",2),(0,u.Cc)([(0,b.MZ)()],v.prototype,"target",2),(0,u.Cc)([(0,b.MZ)()],v.prototype,"rel",2),(0,u.Cc)([(0,b.MZ)()],v.prototype,"download",2),(0,u.Cc)([(0,b.MZ)()],v.prototype,"form",2),(0,u.Cc)([(0,b.MZ)({attribute:"formaction"})],v.prototype,"formAction",2),(0,u.Cc)([(0,b.MZ)({attribute:"formenctype"})],v.prototype,"formEnctype",2),(0,u.Cc)([(0,b.MZ)({attribute:"formmethod"})],v.prototype,"formMethod",2),(0,u.Cc)([(0,b.MZ)({attribute:"formnovalidate",type:Boolean})],v.prototype,"formNoValidate",2),(0,u.Cc)([(0,b.MZ)({attribute:"formtarget"})],v.prototype,"formTarget",2),(0,u.Cc)([(0,c.w)("disabled",{waitUntilFirstUpdate:!0})],v.prototype,"handleDisabledChange",1)},8511:(t,e,o)=>{o.d(e,{E9:()=>r,Ey:()=>a,Oe:()=>l,dc:()=>n,jd:()=>s});var i=o(3109);function s(t,e,o){return new Promise((s=>{if((null==o?void 0:o.duration)===1/0)throw new Error("Promise-based animations must be finite.");const r=t.animate(e,(0,i.ko)((0,i.IA)({},o),{duration:l()?0:o.duration}));r.addEventListener("cancel",s,{once:!0}),r.addEventListener("finish",s,{once:!0})}))}function r(t){return(t=t.toString().toLowerCase()).indexOf("ms")>-1?parseFloat(t):t.indexOf("s")>-1?1e3*parseFloat(t):parseFloat(t)}function l(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function a(t){return Promise.all(t.getAnimations().map((t=>new Promise((e=>{t.cancel(),requestAnimationFrame(e)})))))}function n(t,e){return t.map((t=>(0,i.ko)((0,i.IA)({},t),{height:"auto"===t.height?`${e}px`:t.height})))}},8609:(t,e,o)=>{o.d(e,{I7:()=>r,JG:()=>s,Rt:()=>l});var i=new Set;function s(t){if(i.add(t),!document.documentElement.classList.contains("sl-scroll-lock")){const t=function(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}()+function(){const t=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(t)||!t?0:t}();let e=getComputedStyle(document.documentElement).scrollbarGutter;e&&"auto"!==e||(e="stable"),t<2&&(e=""),document.documentElement.style.setProperty("--sl-scroll-lock-gutter",e),document.documentElement.classList.add("sl-scroll-lock"),document.documentElement.style.setProperty("--sl-scroll-lock-size",`${t}px`)}}function r(t){i.delete(t),0===i.size&&(document.documentElement.classList.remove("sl-scroll-lock"),document.documentElement.style.removeProperty("--sl-scroll-lock-size"))}function l(t,e,o="vertical",i="smooth"){const s=function(t,e){return{top:Math.round(t.getBoundingClientRect().top-e.getBoundingClientRect().top),left:Math.round(t.getBoundingClientRect().left-e.getBoundingClientRect().left)}}(t,e),r=s.top+e.scrollTop,l=s.left+e.scrollLeft,a=e.scrollLeft,n=e.scrollLeft+e.offsetWidth,c=e.scrollTop,d=e.scrollTop+e.offsetHeight;"horizontal"!==o&&"both"!==o||(l<a?e.scrollTo({left:l,behavior:i}):l+t.clientWidth>n&&e.scrollTo({left:l-e.offsetWidth+t.clientWidth,behavior:i})),"vertical"!==o&&"both"!==o||(r<c?e.scrollTo({top:r,behavior:i}):r+t.clientHeight>d&&e.scrollTo({top:r-e.offsetHeight+t.clientHeight,behavior:i}))}},8638:(t,e,o)=>{var i=o(5024),s=i.AH`
  :host {
    display: block;
  }

  :host(:focus-visible) {
    outline: 0px;
  }

  .radio {
    display: inline-flex;
    align-items: top;
    font-family: var(--sl-input-font-family);
    font-size: var(--sl-input-font-size-medium);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .radio--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .radio--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .radio--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .radio__checked-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  .radio__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 50%;
    background-color: var(--sl-input-background-color);
    color: transparent;
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .radio__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .radio:not(.radio--checked):not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Checked */
  .radio--checked .radio__control {
    color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked + hover */
  .radio.radio--checked:not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked + focus */
  :host(:focus-visible) .radio__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .radio--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When the control isn't checked, hide the circle for Windows High Contrast mode a11y */
  .radio:not(.radio--checked) svg circle {
    opacity: 0;
  }

  .radio__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }
`,r=o(3389),l=o(4302),a=o(7324),n=o(4815),c=o(3109),d=o(3788),h=o(8146),u=class extends n.f{constructor(){super(),this.checked=!1,this.hasFocus=!1,this.size="medium",this.disabled=!1,this.handleBlur=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.handleClick=()=>{this.disabled||(this.checked=!0)},this.handleFocus=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.addEventListener("blur",this.handleBlur),this.addEventListener("click",this.handleClick),this.addEventListener("focus",this.handleFocus)}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.setAttribute("tabindex","-1"),this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false"),this.setAttribute("tabindex",this.checked?"0":"-1")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}render(){return i.qy`
      <span
        part="base"
        class=${(0,d.H)({radio:!0,"radio--checked":this.checked,"radio--disabled":this.disabled,"radio--focused":this.hasFocus,"radio--small":"small"===this.size,"radio--medium":"medium"===this.size,"radio--large":"large"===this.size})}
      >
        <span part="${"control"+(this.checked?" control--checked":"")}" class="radio__control">
          ${this.checked?i.qy` <sl-icon part="checked-icon" class="radio__checked-icon" library="system" name="radio"></sl-icon> `:""}
        </span>

        <slot part="label" class="radio__label"></slot>
      </span>
    `}};u.styles=[a.$,s],u.dependencies={"sl-icon":r.B},(0,c.Cc)([(0,h.wk)()],u.prototype,"checked",2),(0,c.Cc)([(0,h.wk)()],u.prototype,"hasFocus",2),(0,c.Cc)([(0,h.MZ)()],u.prototype,"value",2),(0,c.Cc)([(0,h.MZ)({reflect:!0})],u.prototype,"size",2),(0,c.Cc)([(0,h.MZ)({type:Boolean,reflect:!0})],u.prototype,"disabled",2),(0,c.Cc)([(0,l.w)("checked")],u.prototype,"handleCheckedChange",1),(0,c.Cc)([(0,l.w)("disabled",{waitUntilFirstUpdate:!0})],u.prototype,"handleDisabledChange",1),u.define("sl-radio"),o(4415),o(4637),o(8326),o(2089)},8678:(t,e,o)=>{o.d(e,{CP:()=>s,Jc:()=>c,Z$:()=>r,wq:()=>n});var i=o(3109);function*s(t=document.activeElement){null!=t&&(yield t,"shadowRoot"in t&&t.shadowRoot&&"closed"!==t.shadowRoot.mode&&(yield*(0,i.y0)(s(t.shadowRoot.activeElement))))}function r(){return[...s()].pop()}var l=new WeakMap;function a(t){let e=l.get(t);return e||(e=window.getComputedStyle(t,null),l.set(t,e)),e}function n(t){var e,o;const i=c(t);return{start:null!=(e=i[0])?e:null,end:null!=(o=i[i.length-1])?o:null}}function c(t){const e=new WeakMap,o=[];return function i(s){if(s instanceof Element){if(s.hasAttribute("inert")||s.closest("[inert]"))return;if(e.has(s))return;e.set(s,!0),!o.includes(s)&&function(t){const e=t.tagName.toLowerCase(),o=Number(t.getAttribute("tabindex"));if(t.hasAttribute("tabindex")&&(isNaN(o)||o<=-1))return!1;if(t.hasAttribute("disabled"))return!1;if(t.closest("[inert]"))return!1;if("input"===e&&"radio"===t.getAttribute("type")){const e=t.getRootNode(),o=`input[type='radio'][name="${t.getAttribute("name")}"]`,i=e.querySelector(`${o}:checked`);return i?i===t:e.querySelector(o)===t}return!!function(t){if("function"==typeof t.checkVisibility)return t.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const e=a(t);return"hidden"!==e.visibility&&"none"!==e.display}(t)&&(!("audio"!==e&&"video"!==e||!t.hasAttribute("controls"))||!!t.hasAttribute("tabindex")||!(!t.hasAttribute("contenteditable")||"false"===t.getAttribute("contenteditable"))||!!["button","input","select","textarea","a","audio","video","summary","iframe"].includes(e)||function(t){const e=a(t),{overflowY:o,overflowX:i}=e;return"scroll"===o||"scroll"===i||"auto"===o&&"auto"===i&&(t.scrollHeight>t.clientHeight&&"auto"===o||!(!(t.scrollWidth>t.clientWidth)||"auto"!==i))}(t))}(s)&&o.push(s),s instanceof HTMLSlotElement&&function(t,e){var o;return(null==(o=t.getRootNode({composed:!0}))?void 0:o.host)!==e}(s,t)&&s.assignedElements({flatten:!0}).forEach((t=>{i(t)})),null!==s.shadowRoot&&"open"===s.shadowRoot.mode&&i(s.shadowRoot)}for(const t of s.children)i(t)}(t),o.sort(((t,e)=>{const o=Number(t.getAttribute("tabindex"))||0;return(Number(e.getAttribute("tabindex"))||0)-o}))}},8819:(t,e,o)=>{o.d(e,{w:()=>i});var i=o(5024).AH`
  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`},8954:(t,e,o)=>{var i=o(5024),s=i.AH`
  :host {
    display: contents;
  }
`,r=o(4302),l=o(7324),a=o(4815),n=o(3109),c=o(8146),d=class extends a.f{constructor(){super(...arguments),this.attrOldValue=!1,this.charData=!1,this.charDataOldValue=!1,this.childList=!1,this.disabled=!1,this.handleMutation=t=>{this.emit("sl-mutation",{detail:{mutationList:t}})}}connectedCallback(){super.connectedCallback(),this.mutationObserver=new MutationObserver(this.handleMutation),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}startObserver(){const t="string"==typeof this.attr&&this.attr.length>0,e=t&&"*"!==this.attr?this.attr.split(" "):void 0;try{this.mutationObserver.observe(this,{subtree:!0,childList:this.childList,attributes:t,attributeFilter:e,attributeOldValue:this.attrOldValue,characterData:this.charData,characterDataOldValue:this.charDataOldValue})}catch(t){}}stopObserver(){this.mutationObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}handleChange(){this.stopObserver(),this.startObserver()}render(){return i.qy` <slot></slot> `}};d.styles=[l.$,s],(0,n.Cc)([(0,c.MZ)({reflect:!0})],d.prototype,"attr",2),(0,n.Cc)([(0,c.MZ)({attribute:"attr-old-value",type:Boolean,reflect:!0})],d.prototype,"attrOldValue",2),(0,n.Cc)([(0,c.MZ)({attribute:"char-data",type:Boolean,reflect:!0})],d.prototype,"charData",2),(0,n.Cc)([(0,c.MZ)({attribute:"char-data-old-value",type:Boolean,reflect:!0})],d.prototype,"charDataOldValue",2),(0,n.Cc)([(0,c.MZ)({attribute:"child-list",type:Boolean,reflect:!0})],d.prototype,"childList",2),(0,n.Cc)([(0,c.MZ)({type:Boolean,reflect:!0})],d.prototype,"disabled",2),(0,n.Cc)([(0,r.w)("disabled")],d.prototype,"handleDisabledChange",1),(0,n.Cc)([(0,r.w)("attr",{waitUntilFirstUpdate:!0}),(0,r.w)("attr-old-value",{waitUntilFirstUpdate:!0}),(0,r.w)("char-data",{waitUntilFirstUpdate:!0}),(0,r.w)("char-data-old-value",{waitUntilFirstUpdate:!0}),(0,r.w)("childList",{waitUntilFirstUpdate:!0})],d.prototype,"handleChange",1),d.define("sl-mutation-observer")},8981:(t,e,o)=>{o.d(e,{W:()=>a});var i=o(4716),s=o(5128);const r="important",l=" !"+r,a=(0,s.u$)(class extends s.WL{constructor(t){var e;if(super(t),t.type!==s.OA.ATTRIBUTE||"style"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,o)=>{const i=t[o];return null==i?e:e+`${o=o.includes("-")?o:o.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`}),"")}update(t,e){let[o]=e;const{style:s}=t.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(o)),this.render(o);for(const t of this.ft)null==o[t]&&(this.ft.delete(t),t.includes("-")?s.removeProperty(t):s[t]=null);for(const t in o){const e=o[t];if(null!=e){this.ft.add(t);const o="string"==typeof e&&e.endsWith(l);t.includes("-")||o?s.setProperty(t,o?e.slice(0,-11):e,o?r:""):s[t]=e}}return i.c0}})},8989:(t,e,o)=>{var i=o(5024),s=i.AH`
  :host {
    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    border-radius: var(--sl-border-radius-medium);
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-medium) var(--sl-spacing-large);
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
    transition:
      var(--transition-speed) box-shadow,
      var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  :host(:focus) {
    outline: transparent;
  }

  :host(:focus-visible) {
    color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: calc(-1 * var(--sl-focus-ring-width) - var(--sl-focus-ring-offset));
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab.tab--closable {
    padding-inline-end: var(--sl-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--sl-font-size-small);
    margin-inline-start: var(--sl-spacing-small);
  }

  .tab__close-button::part(base) {
    padding: var(--sl-spacing-3x-small);
  }

  @media (forced-colors: active) {
    .tab.tab--active:not(.tab--disabled) {
      outline: solid 1px transparent;
      outline-offset: -3px;
    }
  }
`,r=o(4360),l=o(541),a=o(4302),n=o(7324),c=o(4815),d=o(3109),h=o(3788),u=o(8146),p=0,m=class extends c.f{constructor(){super(...arguments),this.localize=new l.c(this),this.attrId=++p,this.componentId=`sl-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1,this.tabIndex=0}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}handleCloseClick(t){t.stopPropagation(),this.emit("sl-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.disabled&&!this.active?this.tabIndex=-1:this.tabIndex=0}render(){return this.id=this.id.length>0?this.id:this.componentId,i.qy`
      <div
        part="base"
        class=${(0,h.H)({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
      >
        <slot></slot>
        ${this.closable?i.qy`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </div>
    `}};m.styles=[n.$,s],m.dependencies={"sl-icon-button":r.h},(0,d.Cc)([(0,u.P)(".tab")],m.prototype,"tab",2),(0,d.Cc)([(0,u.MZ)({reflect:!0})],m.prototype,"panel",2),(0,d.Cc)([(0,u.MZ)({type:Boolean,reflect:!0})],m.prototype,"active",2),(0,d.Cc)([(0,u.MZ)({type:Boolean,reflect:!0})],m.prototype,"closable",2),(0,d.Cc)([(0,u.MZ)({type:Boolean,reflect:!0})],m.prototype,"disabled",2),(0,d.Cc)([(0,u.MZ)({type:Number,reflect:!0})],m.prototype,"tabIndex",2),(0,d.Cc)([(0,a.w)("active")],m.prototype,"handleActiveChange",1),(0,d.Cc)([(0,a.w)("disabled")],m.prototype,"handleDisabledChange",1),m.define("sl-tab"),o(3750),o(3585),o(3389),o(4415),o(4637),o(8326),o(2089)},9162:(t,e,o)=>{function i(t,e,o){return i=t<e?e:t>o?o:t,Object.is(i,-0)?0:i;var i}o.d(e,{q:()=>i})},9168:(t,e,o)=>{o.d(e,{n:()=>f});var i=o(5293),s=o(8678),r=o(4667),l=o(5137),a=o(1060),n=o(8511),c=o(541),d=o(4302),h=o(7324),u=o(4815),p=o(3109),m=o(3788),g=o(5024),b=o(996),v=o(8146),f=class extends u.f{constructor(){super(...arguments),this.localize=new c.c(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.sync=void 0,this.handleKeyDown=t=>{this.open&&"Escape"===t.key&&(t.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=t=>{var e;if("Escape"===t.key&&this.open&&!this.closeWatcher)return t.stopPropagation(),this.focusOnTrigger(),void this.hide();if("Tab"===t.key){if(this.open&&"sl-menu-item"===(null==(e=document.activeElement)?void 0:e.tagName.toLowerCase()))return t.preventDefault(),this.hide(),void this.focusOnTrigger();const o=(t,e)=>{if(!t)return null;const i=t.closest(e);if(i)return i;const s=t.getRootNode();return s instanceof ShadowRoot?o(s.host,e):null};setTimeout((()=>{var t;const e=(null==(t=this.containingElement)?void 0:t.getRootNode())instanceof ShadowRoot?(0,s.Z$)():document.activeElement;this.containingElement&&o(e,this.containingElement.tagName.toLowerCase())===this.containingElement||this.hide()}))}},this.handleDocumentMouseDown=t=>{const e=t.composedPath();this.containingElement&&!e.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=t=>{const e=t.target;this.stayOpenOnSelect||"sl-menu"!==e.tagName.toLowerCase()||(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const t=this.trigger.assignedElements({flatten:!0})[0];"function"==typeof(null==t?void 0:t.focus)&&t.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find((t=>"sl-menu"===t.tagName.toLowerCase()))}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(t){if([" ","Enter"].includes(t.key))return t.preventDefault(),void this.handleTriggerClick();const e=this.getMenu();if(e){const o=e.getAllItems(),i=o[0],s=o[o.length-1];["ArrowDown","ArrowUp","Home","End"].includes(t.key)&&(t.preventDefault(),this.open||(this.show(),await this.updateComplete),o.length>0&&this.updateComplete.then((()=>{"ArrowDown"!==t.key&&"Home"!==t.key||(e.setCurrentItem(i),i.focus()),"ArrowUp"!==t.key&&"End"!==t.key||(e.setCurrentItem(s),s.focus())})))}}handleTriggerKeyUp(t){" "===t.key&&t.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const t=this.trigger.assignedElements({flatten:!0}).find((t=>(0,s.wq)(t).start));let e;if(t){switch(t.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":e=t.button;break;default:e=t}e.setAttribute("aria-haspopup","true"),e.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,(0,a.l)(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,(0,a.l)(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){var t;this.panel.addEventListener("sl-select",this.handlePanelSelect),"CloseWatcher"in window?(null==(t=this.closeWatcher)||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){var t;this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),null==(t=this.closeWatcher)||t.destroy()}async handleOpenChange(){if(this.disabled)this.open=!1;else if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await(0,n.Ey)(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:t,options:e}=(0,l.RB)(this,"dropdown.show",{dir:this.localize.dir()});await(0,n.jd)(this.popup.popup,t,e),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await(0,n.Ey)(this);const{keyframes:t,options:e}=(0,l.RB)(this,"dropdown.hide",{dir:this.localize.dir()});await(0,n.jd)(this.popup.popup,t,e),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return g.qy`
      <sl-popup
        part="base"
        exportparts="popup:base__popup"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        sync=${(0,b.J)(this.sync?this.sync:void 0)}
        class=${(0,m.H)({dropdown:!0,"dropdown--open":this.open})}
      >
        <slot
          name="trigger"
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
          @slotchange=${this.handleTriggerSlotChange}
        ></slot>

        <div aria-hidden=${this.open?"false":"true"} aria-labelledby="dropdown">
          <slot part="panel" class="dropdown__panel"></slot>
        </div>
      </sl-popup>
    `}};f.styles=[h.$,i.H],f.dependencies={"sl-popup":r.m},(0,p.Cc)([(0,v.P)(".dropdown")],f.prototype,"popup",2),(0,p.Cc)([(0,v.P)(".dropdown__trigger")],f.prototype,"trigger",2),(0,p.Cc)([(0,v.P)(".dropdown__panel")],f.prototype,"panel",2),(0,p.Cc)([(0,v.MZ)({type:Boolean,reflect:!0})],f.prototype,"open",2),(0,p.Cc)([(0,v.MZ)({reflect:!0})],f.prototype,"placement",2),(0,p.Cc)([(0,v.MZ)({type:Boolean,reflect:!0})],f.prototype,"disabled",2),(0,p.Cc)([(0,v.MZ)({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],f.prototype,"stayOpenOnSelect",2),(0,p.Cc)([(0,v.MZ)({attribute:!1})],f.prototype,"containingElement",2),(0,p.Cc)([(0,v.MZ)({type:Number})],f.prototype,"distance",2),(0,p.Cc)([(0,v.MZ)({type:Number})],f.prototype,"skidding",2),(0,p.Cc)([(0,v.MZ)({type:Boolean})],f.prototype,"hoist",2),(0,p.Cc)([(0,v.MZ)({reflect:!0})],f.prototype,"sync",2),(0,p.Cc)([(0,d.w)("open",{waitUntilFirstUpdate:!0})],f.prototype,"handleOpenChange",1),(0,l.Ee)("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}}),(0,l.Ee)("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}})},9427:(t,e,o)=>{o(5461).X.define("sl-checkbox"),o(328),o(3088),o(1696),o(1736),o(3389),o(4415),o(4637),o(8326),o(2089),o(4302),o(7324),o(4815),o(3109)},9603:(t,e,o)=>{var i=o(5024),s=i.AH`
  :host {
    display: inline-flex;
  }

  .breadcrumb-item {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-600);
    line-height: var(--sl-line-height-normal);
    white-space: nowrap;
  }

  .breadcrumb-item__label {
    display: inline-block;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    text-decoration: none;
    color: inherit;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: var(--sl-transition-fast) --color;
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label {
    color: var(--sl-color-primary-600);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:hover {
    color: var(--sl-color-primary-500);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:active {
    color: var(--sl-color-primary-600);
  }

  .breadcrumb-item__label:focus {
    outline: none;
  }

  .breadcrumb-item__label:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .breadcrumb-item__prefix,
  .breadcrumb-item__suffix {
    display: none;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .breadcrumb-item--has-prefix .breadcrumb-item__prefix {
    display: inline-flex;
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .breadcrumb-item--has-suffix .breadcrumb-item__suffix {
    display: inline-flex;
    margin-inline-start: var(--sl-spacing-x-small);
  }

  :host(:last-of-type) .breadcrumb-item__separator {
    display: none;
  }

  .breadcrumb-item__separator {
    display: inline-flex;
    align-items: center;
    margin: 0 var(--sl-spacing-x-small);
    user-select: none;
    -webkit-user-select: none;
  }
`,r=o(4101),l=o(4302),a=o(7324),n=o(4815),c=o(3109),d=o(3788),h=o(996),u=o(8146),p=class extends n.f{constructor(){super(...arguments),this.hasSlotController=new r.X(this,"prefix","suffix"),this.renderType="button",this.rel="noreferrer noopener"}setRenderType(){const t=this.defaultSlot.assignedElements({flatten:!0}).filter((t=>"sl-dropdown"===t.tagName.toLowerCase())).length>0;this.href?this.renderType="link":this.renderType=t?"dropdown":"button"}hrefChanged(){this.setRenderType()}handleSlotChange(){this.setRenderType()}render(){return i.qy`
      <div
        part="base"
        class=${(0,d.H)({"breadcrumb-item":!0,"breadcrumb-item--has-prefix":this.hasSlotController.test("prefix"),"breadcrumb-item--has-suffix":this.hasSlotController.test("suffix")})}
      >
        <span part="prefix" class="breadcrumb-item__prefix">
          <slot name="prefix"></slot>
        </span>

        ${"link"===this.renderType?i.qy`
              <a
                part="label"
                class="breadcrumb-item__label breadcrumb-item__label--link"
                href="${this.href}"
                target="${(0,h.J)(this.target?this.target:void 0)}"
                rel=${(0,h.J)(this.target?this.rel:void 0)}
              >
                <slot @slotchange=${this.handleSlotChange}></slot>
              </a>
            `:""}
        ${"button"===this.renderType?i.qy`
              <button part="label" type="button" class="breadcrumb-item__label breadcrumb-item__label--button">
                <slot @slotchange=${this.handleSlotChange}></slot>
              </button>
            `:""}
        ${"dropdown"===this.renderType?i.qy`
              <div part="label" class="breadcrumb-item__label breadcrumb-item__label--drop-down">
                <slot @slotchange=${this.handleSlotChange}></slot>
              </div>
            `:""}

        <span part="suffix" class="breadcrumb-item__suffix">
          <slot name="suffix"></slot>
        </span>

        <span part="separator" class="breadcrumb-item__separator" aria-hidden="true">
          <slot name="separator"></slot>
        </span>
      </div>
    `}};p.styles=[a.$,s],(0,c.Cc)([(0,u.P)("slot:not([name])")],p.prototype,"defaultSlot",2),(0,c.Cc)([(0,u.wk)()],p.prototype,"renderType",2),(0,c.Cc)([(0,u.MZ)()],p.prototype,"href",2),(0,c.Cc)([(0,u.MZ)()],p.prototype,"target",2),(0,c.Cc)([(0,u.MZ)()],p.prototype,"rel",2),(0,c.Cc)([(0,l.w)("href",{waitUntilFirstUpdate:!0})],p.prototype,"hrefChanged",1),p.define("sl-breadcrumb-item")},9609:(t,e,o)=>{var i=o(5024),s=i.AH`
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
`,r=o(1696),l=o(1658),a=o(1736),n=o(4101),c=o(4302),d=o(7324),h=o(4815),u=o(3109),p=o(3788),m=o(8146),g=class extends h.f{constructor(){super(...arguments),this.formControlController=new a.Ud(this),this.hasSlotController=new n.X(this,"help-text","label"),this.customValidityMessage="",this.hasButtonGroup=!1,this.errorMessage="",this.defaultValue="",this.label="",this.helpText="",this.name="option",this.value="",this.size="medium",this.form="",this.required=!1}get validity(){const t=this.required&&!this.value;return""!==this.customValidityMessage?a.pL:t?a.zF:a.G6}get validationMessage(){const t=this.required&&!this.value;return""!==this.customValidityMessage?this.customValidityMessage:t?this.validationInput.validationMessage:""}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.formControlController.updateValidity()}getAllRadios(){return[...this.querySelectorAll("sl-radio, sl-radio-button")]}handleRadioClick(t){const e=t.target.closest("sl-radio, sl-radio-button"),o=this.getAllRadios(),i=this.value;e&&!e.disabled&&(this.value=e.value,o.forEach((t=>t.checked=t===e)),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input")))}handleKeyDown(t){var e;if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(t.key))return;const o=this.getAllRadios().filter((t=>!t.disabled)),i=null!=(e=o.find((t=>t.checked)))?e:o[0],s=" "===t.key?0:["ArrowUp","ArrowLeft"].includes(t.key)?-1:1,r=this.value;let l=o.indexOf(i)+s;l<0&&(l=o.length-1),l>o.length-1&&(l=0),this.getAllRadios().forEach((t=>{t.checked=!1,this.hasButtonGroup||t.setAttribute("tabindex","-1")})),this.value=o[l].value,o[l].checked=!0,this.hasButtonGroup?o[l].shadowRoot.querySelector("button").focus():(o[l].setAttribute("tabindex","0"),o[l].focus()),this.value!==r&&(this.emit("sl-change"),this.emit("sl-input")),t.preventDefault()}handleLabelClick(){this.focus()}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}async syncRadioElements(){var t,e;const o=this.getAllRadios();if(await Promise.all(o.map((async t=>{await t.updateComplete,t.checked=t.value===this.value,t.size=this.size}))),this.hasButtonGroup=o.some((t=>"sl-radio-button"===t.tagName.toLowerCase())),o.length>0&&!o.some((t=>t.checked)))if(this.hasButtonGroup){const e=null==(t=o[0].shadowRoot)?void 0:t.querySelector("button");e&&e.setAttribute("tabindex","0")}else o[0].setAttribute("tabindex","0");if(this.hasButtonGroup){const t=null==(e=this.shadowRoot)?void 0:e.querySelector("sl-button-group");t&&(t.disableRole=!0)}}syncRadios(){customElements.get("sl-radio")&&customElements.get("sl-radio-button")?this.syncRadioElements():(customElements.get("sl-radio")?this.syncRadioElements():customElements.whenDefined("sl-radio").then((()=>this.syncRadios())),customElements.get("sl-radio-button")?this.syncRadioElements():customElements.whenDefined("sl-radio-button").then((()=>this.syncRadios())))}updateCheckedRadio(){this.getAllRadios().forEach((t=>t.checked=t.value===this.value)),this.formControlController.setValidity(this.validity.valid)}handleSizeChange(){this.syncRadios()}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}checkValidity(){const t=this.required&&!this.value,e=""!==this.customValidityMessage;return!t&&!e||(this.formControlController.emitInvalidEvent(),!1)}getForm(){return this.formControlController.getForm()}reportValidity(){const t=this.validity.valid;return this.errorMessage=this.customValidityMessage||t?"":this.validationInput.validationMessage,this.formControlController.setValidity(t),this.validationInput.hidden=!0,clearTimeout(this.validationTimeout),t||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.validationTimeout=setTimeout((()=>this.validationInput.hidden=!0),1e4)),t}setCustomValidity(t=""){this.customValidityMessage=t,this.errorMessage=t,this.validationInput.setCustomValidity(t),this.formControlController.updateValidity()}focus(t){const e=this.getAllRadios(),o=e.find((t=>t.checked)),i=e.find((t=>!t.disabled)),s=o||i;s&&s.focus(t)}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),o=!!this.label||!!t,s=!!this.helpText||!!e,r=i.qy`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;return i.qy`
      <fieldset
        part="form-control"
        class=${(0,p.H)({"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--radio-group":!0,"form-control--has-label":o,"form-control--has-help-text":s})}
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

          ${this.hasButtonGroup?i.qy`
                <sl-button-group part="button-group" exportparts="base:button-group__base" role="presentation">
                  ${r}
                </sl-button-group>
              `:r}
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${s?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </fieldset>
    `}};g.styles=[d.$,r.I,s],g.dependencies={"sl-button-group":l.N},(0,u.Cc)([(0,m.P)("slot:not([name])")],g.prototype,"defaultSlot",2),(0,u.Cc)([(0,m.P)(".radio-group__validation-input")],g.prototype,"validationInput",2),(0,u.Cc)([(0,m.wk)()],g.prototype,"hasButtonGroup",2),(0,u.Cc)([(0,m.wk)()],g.prototype,"errorMessage",2),(0,u.Cc)([(0,m.wk)()],g.prototype,"defaultValue",2),(0,u.Cc)([(0,m.MZ)()],g.prototype,"label",2),(0,u.Cc)([(0,m.MZ)({attribute:"help-text"})],g.prototype,"helpText",2),(0,u.Cc)([(0,m.MZ)()],g.prototype,"name",2),(0,u.Cc)([(0,m.MZ)({reflect:!0})],g.prototype,"value",2),(0,u.Cc)([(0,m.MZ)({reflect:!0})],g.prototype,"size",2),(0,u.Cc)([(0,m.MZ)({reflect:!0})],g.prototype,"form",2),(0,u.Cc)([(0,m.MZ)({type:Boolean,reflect:!0})],g.prototype,"required",2),(0,u.Cc)([(0,c.w)("size",{waitUntilFirstUpdate:!0})],g.prototype,"handleSizeChange",1),(0,u.Cc)([(0,c.w)("value")],g.prototype,"handleValueChange",1),g.define("sl-radio-group"),o(5842)},9635:(t,e,o)=>{o(7240).N.define("sl-visually-hidden"),o(1931),o(7324),o(4815),o(3109)},9669:(t,e,o)=>{var i=o(5024),s=i.AH`
  :host {
    display: block;
    user-select: none;
    -webkit-user-select: none;
  }

  :host(:focus) {
    outline: none;
  }

  .option {
    position: relative;
    display: flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-x-small) var(--sl-spacing-medium) var(--sl-spacing-x-small) var(--sl-spacing-x-small);
    transition: var(--sl-transition-fast) fill;
    cursor: pointer;
  }

  .option--hover:not(.option--current):not(.option--disabled) {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  .option--current,
  .option--current.option--disabled {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .option--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .option__label {
    flex: 1 1 auto;
    display: inline-block;
    line-height: var(--sl-line-height-dense);
  }

  .option .option__check {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    padding-inline-end: var(--sl-spacing-2x-small);
  }

  .option--selected .option__check {
    visibility: visible;
  }

  .option__prefix,
  .option__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .option__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .option__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .option {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`,r=o(541),l=o(3389),a=o(4302),n=o(7324),c=o(4815),d=o(3109),h=o(3788),u=o(8146),p=class extends c.f{constructor(){super(...arguments),this.localize=new r.c(this),this.isInitialized=!1,this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){this.isInitialized?customElements.whenDefined("sl-select").then((()=>{const t=this.closest("sl-select");t&&t.handleDefaultSlotChange()})):this.isInitialized=!0}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){"string"!=typeof this.value&&(this.value=String(this.value)),this.value.includes(" ")&&(console.error("Option values cannot include a space. All spaces have been replaced with underscores.",this),this.value=this.value.replace(/ /g,"_"))}getTextLabel(){const t=this.childNodes;let e="";return[...t].forEach((t=>{t.nodeType===Node.ELEMENT_NODE&&(t.hasAttribute("slot")||(e+=t.textContent)),t.nodeType===Node.TEXT_NODE&&(e+=t.textContent)})),e.trim()}render(){return i.qy`
      <div
        part="base"
        class=${(0,h.H)({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};p.styles=[n.$,s],p.dependencies={"sl-icon":l.B},(0,d.Cc)([(0,u.P)(".option__label")],p.prototype,"defaultSlot",2),(0,d.Cc)([(0,u.wk)()],p.prototype,"current",2),(0,d.Cc)([(0,u.wk)()],p.prototype,"selected",2),(0,d.Cc)([(0,u.wk)()],p.prototype,"hasHover",2),(0,d.Cc)([(0,u.MZ)({reflect:!0})],p.prototype,"value",2),(0,d.Cc)([(0,u.MZ)({type:Boolean,reflect:!0})],p.prototype,"disabled",2),(0,d.Cc)([(0,a.w)("disabled")],p.prototype,"handleDisabledChange",1),(0,d.Cc)([(0,a.w)("selected")],p.prototype,"handleSelectedChange",1),(0,d.Cc)([(0,a.w)("value")],p.prototype,"handleValueChange",1),p.define("sl-option"),o(3585),o(4415),o(4637),o(8326),o(2089)},9687:(t,e,o)=>{var i=o(541),s=o(4815),r=o(3109),l=o(8146),a=class extends s.f{constructor(){super(...arguments),this.localize=new i.c(this),this.value=0,this.unit="byte",this.display="short"}render(){if(isNaN(this.value))return"";const t="bit"===this.unit?["","kilo","mega","giga","tera"]:["","kilo","mega","giga","tera","peta"],e=Math.max(0,Math.min(Math.floor(Math.log10(this.value)/3),t.length-1)),o=t[e]+this.unit,i=parseFloat((this.value/Math.pow(1e3,e)).toPrecision(3));return this.localize.number(i,{style:"unit",unit:o,unitDisplay:this.display})}};(0,r.Cc)([(0,l.MZ)({type:Number})],a.prototype,"value",2),(0,r.Cc)([(0,l.MZ)()],a.prototype,"unit",2),(0,r.Cc)([(0,l.MZ)()],a.prototype,"display",2),a.define("sl-format-bytes"),o(3585)},9756:(t,e,o)=>{o.d(e,{Q:()=>u});var i=o(2062),s=o(4360),r=o(541),l=o(7324),a=o(4815),n=o(3109),c=o(3788),d=o(5024),h=o(8146),u=class extends a.f{constructor(){super(...arguments),this.localize=new r.c(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return d.qy`
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
    `}};u.styles=[l.$,i.g],u.dependencies={"sl-icon-button":s.h},(0,n.Cc)([(0,h.MZ)({reflect:!0})],u.prototype,"variant",2),(0,n.Cc)([(0,h.MZ)({reflect:!0})],u.prototype,"size",2),(0,n.Cc)([(0,h.MZ)({type:Boolean,reflect:!0})],u.prototype,"pill",2),(0,n.Cc)([(0,h.MZ)({type:Boolean})],u.prototype,"removable",2)},9834:(t,e,o)=>{o(9756).Q.define("sl-tag"),o(2062),o(4360),o(3750),o(541),o(3585),o(3389),o(4415),o(4637),o(8326),o(2089),o(4302),o(7324),o(4815),o(3109)}}]);
//# sourceMappingURL=vendors.b87b1ad4.js.map
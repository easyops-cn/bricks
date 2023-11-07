"use strict";(self.webpackChunk_next_bricks_shoelace=self.webpackChunk_next_bricks_shoelace||[]).push([[4454],{3303:(e,t,i)=>{var r=i(7482),o=i(391),a=i(4867),s=i(6895),l=i(3385),n=i(6167),d=i(9710),h=i(8427),c=h.iv`
  ${d.N}

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
    padding-inline-end: var(--sl-spacing-medium);
  }
`,u=i(4703),p=i(1465),b=i(7979),v=i(9832),m=i(9900),g=Object.assign(document.createElement("div"),{className:"sl-toast-stack"}),f=class extends p.P{constructor(){super(...arguments),this.hasSlotController=new n.r(this,"icon","suffix"),this.localize=new l.V(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){clearTimeout(this.autoHideTimeout),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout((()=>this.hide()),this.duration))}handleCloseClick(){this.hide()}handleMouseMove(){this.restartAutoHide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await(0,s.U_)(this.base),this.base.hidden=!1;const{keyframes:e,options:t}=(0,o.O8)(this,"alert.show",{dir:this.localize.dir()});await(0,s.nv)(this.base,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),await(0,s.U_)(this.base);const{keyframes:e,options:t}=(0,o.O8)(this,"alert.hide",{dir:this.localize.dir()});await(0,s.nv)(this.base,e,t),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,(0,a.m)(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,(0,a.m)(this,"sl-after-hide")}async toast(){return new Promise((e=>{null===g.parentElement&&document.body.append(g),g.appendChild(this),requestAnimationFrame((()=>{this.clientWidth,this.show()})),this.addEventListener("sl-after-hide",(()=>{g.removeChild(this),e(),null===g.querySelector("sl-alert")&&g.remove()}),{once:!0})}))}render(){return h.dy`
      <div
        part="base"
        class=${(0,v.$)({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":"primary"===this.variant,"alert--success":"success"===this.variant,"alert--neutral":"neutral"===this.variant,"alert--warning":"warning"===this.variant,"alert--danger":"danger"===this.variant})}
        role="alert"
        aria-hidden=${this.open?"false":"true"}
        @mousemove=${this.handleMouseMove}
      >
        <div part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </div>

        <div part="message" class="alert__message" aria-live="polite">
          <slot></slot>
        </div>

        ${this.closable?h.dy`
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
      </div>
    `}};f.styles=c,f.dependencies={"sl-icon-button":r.U},(0,b.u2)([(0,m.IO)('[part~="base"]')],f.prototype,"base",2),(0,b.u2)([(0,m.Cb)({type:Boolean,reflect:!0})],f.prototype,"open",2),(0,b.u2)([(0,m.Cb)({type:Boolean,reflect:!0})],f.prototype,"closable",2),(0,b.u2)([(0,m.Cb)({reflect:!0})],f.prototype,"variant",2),(0,b.u2)([(0,m.Cb)({type:Number})],f.prototype,"duration",2),(0,b.u2)([(0,u.Y)("open",{waitUntilFirstUpdate:!0})],f.prototype,"handleOpenChange",1),(0,b.u2)([(0,u.Y)("duration")],f.prototype,"handleDurationChange",1),(0,o.jx)("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}}),(0,o.jx)("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}}),f.define("sl-alert"),i(335),i(8513),i(6877),i(5249),i(836),i(9699),i(1793)},3621:(e,t,i)=>{var r=i(6877),o=i(4703),a=i(1465),s=i(9710),l=i(8427),n=l.iv`
  ${s.N}

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
`,d=i(7979),h=i(9900),c=class extends a.P{constructor(){super(...arguments),this.isLoaded=!1}handleClick(){this.play=!this.play}handleLoad(){const e=document.createElement("canvas"),{width:t,height:i}=this.animatedImage;e.width=t,e.height=i,e.getContext("2d").drawImage(this.animatedImage,0,0,t,i),this.frozenFrame=e.toDataURL("image/gif"),this.isLoaded||(this.emit("sl-load"),this.isLoaded=!0)}handleError(){this.emit("sl-error")}handlePlayChange(){this.play&&(this.animatedImage.src="",this.animatedImage.src=this.src)}handleSrcChange(){this.isLoaded=!1}render(){return l.dy`
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

        ${this.isLoaded?l.dy`
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
    `}};c.styles=n,c.dependencies={"sl-icon":r.V},(0,d.u2)([(0,h.IO)(".animated-image__animated")],c.prototype,"animatedImage",2),(0,d.u2)([(0,h.SB)()],c.prototype,"frozenFrame",2),(0,d.u2)([(0,h.SB)()],c.prototype,"isLoaded",2),(0,d.u2)([(0,h.Cb)()],c.prototype,"src",2),(0,d.u2)([(0,h.Cb)()],c.prototype,"alt",2),(0,d.u2)([(0,h.Cb)({type:Boolean,reflect:!0})],c.prototype,"play",2),(0,d.u2)([(0,o.Y)("play",{waitUntilFirstUpdate:!0})],c.prototype,"handlePlayChange",1),(0,d.u2)([(0,o.Y)("src")],c.prototype,"handleSrcChange",1),c.define("sl-animated-image"),i(5249),i(836),i(9699),i(1793)},8577:(e,t,i)=>{var r=i(9710),o=i(8427),a=o.iv`
  ${r.N}

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
`,s=i(6877),l=i(4703),n=i(1465),d=i(7979),h=i(9832),c=i(9900),u=class extends n.P{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}render(){const e=o.dy`
      <img
        part="image"
        class="avatar__image"
        src="${this.image}"
        loading="${this.loading}"
        alt=""
        @error="${()=>this.hasError=!0}"
      />
    `;let t=o.dy``;return t=this.initials?o.dy`<div part="initials" class="avatar__initials">${this.initials}</div>`:o.dy`
        <div part="icon" class="avatar__icon" aria-hidden="true">
          <slot name="icon">
            <sl-icon name="person-fill" library="system"></sl-icon>
          </slot>
        </div>
      `,o.dy`
      <div
        part="base"
        class=${(0,h.$)({avatar:!0,"avatar--circle":"circle"===this.shape,"avatar--rounded":"rounded"===this.shape,"avatar--square":"square"===this.shape})}
        role="img"
        aria-label=${this.label}
      >
        ${this.image&&!this.hasError?e:t}
      </div>
    `}};u.styles=a,u.dependencies={"sl-icon":s.V},(0,d.u2)([(0,c.SB)()],u.prototype,"hasError",2),(0,d.u2)([(0,c.Cb)()],u.prototype,"image",2),(0,d.u2)([(0,c.Cb)()],u.prototype,"label",2),(0,d.u2)([(0,c.Cb)()],u.prototype,"initials",2),(0,d.u2)([(0,c.Cb)()],u.prototype,"loading",2),(0,d.u2)([(0,c.Cb)({reflect:!0})],u.prototype,"shape",2),(0,d.u2)([(0,l.Y)("image")],u.prototype,"handleImageChange",1),u.define("sl-avatar"),i(5249),i(836),i(9699),i(1793)},106:(e,t,i)=>{var r=i(9710),o=i(8427),a=o.iv`
  ${r.N}

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
`,s=i(1465),l=i(7979),n=i(9832),d=i(9900),h=class extends s.P{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return o.dy`
      <span
        part="base"
        class=${(0,n.$)({badge:!0,"badge--primary":"primary"===this.variant,"badge--success":"success"===this.variant,"badge--neutral":"neutral"===this.variant,"badge--warning":"warning"===this.variant,"badge--danger":"danger"===this.variant,"badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};h.styles=a,(0,l.u2)([(0,d.Cb)({reflect:!0})],h.prototype,"variant",2),(0,l.u2)([(0,d.Cb)({type:Boolean,reflect:!0})],h.prototype,"pill",2),(0,l.u2)([(0,d.Cb)({type:Boolean,reflect:!0})],h.prototype,"pulse",2),h.define("sl-badge")},759:(e,t,i)=>{var r=i(9710),o=i(8427),a=o.iv`
  ${r.N}

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
  }
`,s=i(6167),l=i(1465),n=i(7979),d=i(9832),h=i(2747),c=i(9900),u=class extends l.P{constructor(){super(...arguments),this.hasSlotController=new s.r(this,"prefix","suffix"),this.rel="noreferrer noopener"}render(){const e=!!this.href;return o.dy`
      <div
        part="base"
        class=${(0,d.$)({"breadcrumb-item":!0,"breadcrumb-item--has-prefix":this.hasSlotController.test("prefix"),"breadcrumb-item--has-suffix":this.hasSlotController.test("suffix")})}
      >
        <span part="prefix" class="breadcrumb-item__prefix">
          <slot name="prefix"></slot>
        </span>

        ${e?o.dy`
              <a
                part="label"
                class="breadcrumb-item__label breadcrumb-item__label--link"
                href="${this.href}"
                target="${(0,h.o)(this.target?this.target:void 0)}"
                rel=${(0,h.o)(this.target?this.rel:void 0)}
              >
                <slot></slot>
              </a>
            `:o.dy`
              <button part="label" type="button" class="breadcrumb-item__label breadcrumb-item__label--button">
                <slot></slot>
              </button>
            `}

        <span part="suffix" class="breadcrumb-item__suffix">
          <slot name="suffix"></slot>
        </span>

        <span part="separator" class="breadcrumb-item__separator" aria-hidden="true">
          <slot name="separator"></slot>
        </span>
      </div>
    `}};u.styles=a,(0,n.u2)([(0,c.Cb)()],u.prototype,"href",2),(0,n.u2)([(0,c.Cb)()],u.prototype,"target",2),(0,n.u2)([(0,c.Cb)()],u.prototype,"rel",2),u.define("sl-breadcrumb-item")},1960:(e,t,i)=>{var r=i(9710),o=i(8427),a=o.iv`
  ${r.N}

  .breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`,s=i(3385),l=i(6877),n=i(1465),d=i(7979),h=i(9900),c=class extends n.P{constructor(){super(...arguments),this.localize=new s.V(this),this.separatorDir=this.localize.dir(),this.label=""}getSeparator(){const e=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[e,...e.querySelectorAll("[id]")].forEach((e=>e.removeAttribute("id"))),e.setAttribute("data-default",""),e.slot="separator",e}handleSlotChange(){const e=[...this.defaultSlot.assignedElements({flatten:!0})].filter((e=>"sl-breadcrumb-item"===e.tagName.toLowerCase()));e.forEach(((t,i)=>{const r=t.querySelector('[slot="separator"]');null===r?t.append(this.getSeparator()):r.hasAttribute("data-default")&&r.replaceWith(this.getSeparator()),i===e.length-1?t.setAttribute("aria-current","page"):t.removeAttribute("aria-current")}))}render(){return this.separatorDir!==this.localize.dir()&&(this.separatorDir=this.localize.dir(),this.updateComplete.then((()=>this.handleSlotChange()))),o.dy`
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <span hidden aria-hidden="true">
        <slot name="separator">
          <sl-icon name=${"rtl"===this.localize.dir()?"chevron-left":"chevron-right"} library="system"></sl-icon>
        </slot>
      </span>
    `}};c.styles=a,c.dependencies={"sl-icon":l.V},(0,d.u2)([(0,h.IO)("slot")],c.prototype,"defaultSlot",2),(0,d.u2)([(0,h.IO)('slot[name="separator"]')],c.prototype,"separatorSlot",2),(0,d.u2)([(0,h.Cb)()],c.prototype,"label",2),c.define("sl-breadcrumb"),i(8513),i(5249),i(836),i(9699),i(1793),i(4703)},4037:(e,t,i)=>{i(2248).c.define("sl-button-group"),i(829),i(1465),i(9710),i(7979)},3927:(e,t,i)=>{i(5307).x.define("sl-button"),i(3222),i(6396),i(203),i(5999),i(3385),i(8513),i(6877),i(5249),i(836),i(9699),i(1793),i(4703),i(1465),i(9710),i(7979)},8073:(e,t,i)=>{var r=i(9710),o=i(8427),a=o.iv`
  ${r.N}

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
`,s=i(6167),l=i(1465),n=i(9832),d=class extends l.P{constructor(){super(...arguments),this.hasSlotController=new s.r(this,"footer","header","image")}render(){return o.dy`
      <div
        part="base"
        class=${(0,n.$)({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};d.styles=a,d.define("sl-card"),i(7979)},2647:(e,t,i)=>{i(3021).s.define("sl-checkbox"),i(6315),i(3514),i(203),i(6877),i(5249),i(836),i(9699),i(1793),i(4703),i(1465),i(9710),i(7979)},8580:(e,t,i)=>{var r=i(9710),o=i(8427),a=o.iv`
  ${r.N}

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
`,s=i(391),l=i(4867),n=i(6895),d=i(3385),h=i(6877),c=i(4703),u=i(1465),p=i(7979),b=i(9832),v=i(9900),m=class extends u.P{constructor(){super(...arguments),this.localize=new d.V(this),this.open=!1,this.disabled=!1}firstUpdated(){this.body.style.height=this.open?"auto":"0",this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver((e=>{for(const t of e)"attributes"===t.type&&"open"===t.attributeName&&(this.details.open?this.show():this.hide())})),this.detailsObserver.observe(this.details,{attributes:!0})}disconnectedCallback(){super.disconnectedCallback(),this.detailsObserver.disconnect()}handleSummaryClick(e){e.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(e){"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),this.open?this.hide():this.show()),"ArrowUp"!==e.key&&"ArrowLeft"!==e.key||(e.preventDefault(),this.hide()),"ArrowDown"!==e.key&&"ArrowRight"!==e.key||(e.preventDefault(),this.show())}async handleOpenChange(){if(this.open){if(this.details.open=!0,this.emit("sl-show",{cancelable:!0}).defaultPrevented)return this.open=!1,void(this.details.open=!1);await(0,n.U_)(this.body);const{keyframes:e,options:t}=(0,s.O8)(this,"details.show",{dir:this.localize.dir()});await(0,n.nv)(this.body,(0,n.GH)(e,this.body.scrollHeight),t),this.body.style.height="auto",this.emit("sl-after-show")}else{if(this.emit("sl-hide",{cancelable:!0}).defaultPrevented)return this.details.open=!0,void(this.open=!0);await(0,n.U_)(this.body);const{keyframes:e,options:t}=(0,s.O8)(this,"details.hide",{dir:this.localize.dir()});await(0,n.nv)(this.body,(0,n.GH)(e,this.body.scrollHeight),t),this.body.style.height="auto",this.details.open=!1,this.emit("sl-after-hide")}}async show(){if(!this.open&&!this.disabled)return this.open=!0,(0,l.m)(this,"sl-after-show")}async hide(){if(this.open&&!this.disabled)return this.open=!1,(0,l.m)(this,"sl-after-hide")}render(){const e="rtl"===this.localize.dir();return o.dy`
      <details
        part="base"
        class=${(0,b.$)({details:!0,"details--open":this.open,"details--disabled":this.disabled,"details--rtl":e})}
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
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot name="collapse-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </span>
        </summary>

        <div class="details__body" role="region" aria-labelledby="header">
          <slot part="content" id="content" class="details__content"></slot>
        </div>
      </details>
    `}};m.styles=a,m.dependencies={"sl-icon":h.V},(0,p.u2)([(0,v.IO)(".details")],m.prototype,"details",2),(0,p.u2)([(0,v.IO)(".details__header")],m.prototype,"header",2),(0,p.u2)([(0,v.IO)(".details__body")],m.prototype,"body",2),(0,p.u2)([(0,v.IO)(".details__expand-icon-slot")],m.prototype,"expandIconSlot",2),(0,p.u2)([(0,v.Cb)({type:Boolean,reflect:!0})],m.prototype,"open",2),(0,p.u2)([(0,v.Cb)()],m.prototype,"summary",2),(0,p.u2)([(0,v.Cb)({type:Boolean,reflect:!0})],m.prototype,"disabled",2),(0,p.u2)([(0,c.Y)("open",{waitUntilFirstUpdate:!0})],m.prototype,"handleOpenChange",1),(0,s.jx)("details.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:250,easing:"linear"}}),(0,s.jx)("details.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:250,easing:"linear"}}),m.define("sl-details"),i(8513),i(5249),i(836),i(9699),i(1793)},7259:(e,t,i)=>{var r=i(2162),o=i(9622),a=i(9710),s=i(8427),l=s.iv`
  ${a.N}

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
`,n=i(7482),d=i(391),h=i(4867),c=i(6895),u=i(3385),p=i(6167),b=i(4703),v=i(1465),m=i(7979),g=i(9832),f=i(2747),y=i(9900),_=class extends v.P{constructor(){super(...arguments),this.hasSlotController=new p.r(this,"footer"),this.localize=new u.V(this),this.modal=new r.u(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=e=>{"Escape"===e.key&&this.modal.isActive()&&this.open&&(e.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),(0,o.M4)(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),(0,o.gG)(this)}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const e=(0,d.O8)(this,"dialog.denyClose",{dir:this.localize.dir()});(0,c.nv)(this.panel,e.keyframes,e.options)}else this.hide()}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),(0,o.M4)(this);const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([(0,c.U_)(this.dialog),(0,c.U_)(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame((()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")}));const t=(0,d.O8)(this,"dialog.show",{dir:this.localize.dir()}),i=(0,d.O8)(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([(0,c.nv)(this.panel,t.keyframes,t.options),(0,c.nv)(this.overlay,i.keyframes,i.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([(0,c.U_)(this.dialog),(0,c.U_)(this.overlay)]);const e=(0,d.O8)(this,"dialog.hide",{dir:this.localize.dir()}),t=(0,d.O8)(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([(0,c.nv)(this.overlay,t.keyframes,t.options).then((()=>{this.overlay.hidden=!0})),(0,c.nv)(this.panel,e.keyframes,e.options).then((()=>{this.panel.hidden=!0}))]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,(0,o.gG)(this);const i=this.originalTrigger;"function"==typeof(null==i?void 0:i.focus)&&setTimeout((()=>i.focus())),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,(0,h.m)(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,(0,h.m)(this,"sl-after-hide")}render(){return s.dy`
      <div
        part="base"
        class=${(0,g.$)({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${(0,f.o)(this.noHeader?this.label:void 0)}
          aria-labelledby=${(0,f.o)(this.noHeader?void 0:"title")}
          tabindex="-1"
        >
          ${this.noHeader?"":s.dy`
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
          <slot part="body" class="dialog__body" tabindex="-1"></slot>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};_.styles=l,_.dependencies={"sl-icon-button":n.U},(0,m.u2)([(0,y.IO)(".dialog")],_.prototype,"dialog",2),(0,m.u2)([(0,y.IO)(".dialog__panel")],_.prototype,"panel",2),(0,m.u2)([(0,y.IO)(".dialog__overlay")],_.prototype,"overlay",2),(0,m.u2)([(0,y.Cb)({type:Boolean,reflect:!0})],_.prototype,"open",2),(0,m.u2)([(0,y.Cb)({reflect:!0})],_.prototype,"label",2),(0,m.u2)([(0,y.Cb)({attribute:"no-header",type:Boolean,reflect:!0})],_.prototype,"noHeader",2),(0,m.u2)([(0,b.Y)("open",{waitUntilFirstUpdate:!0})],_.prototype,"handleOpenChange",1),(0,d.jx)("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}}),(0,d.jx)("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}}),(0,d.jx)("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}}),(0,d.jx)("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}}),(0,d.jx)("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}}),_.define("sl-dialog"),i(335),i(8513),i(6877),i(5249),i(836),i(9699),i(1793)},7528:(e,t,i)=>{var r=i(9710),o=i(8427).iv`
  ${r.N}

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
`,a=i(4703),s=i(1465),l=i(7979),n=i(9900),d=class extends s.P{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};d.styles=o,(0,l.u2)([(0,n.Cb)({type:Boolean,reflect:!0})],d.prototype,"vertical",2),(0,l.u2)([(0,a.Y)("vertical")],d.prototype,"handleVerticalChange",1),d.define("sl-divider")},3175:(e,t,i)=>{i(9003).g.define("sl-dropdown"),i(1426),i(9493),i(4476),i(391),i(6895),i(3385),i(8513),i(4703),i(1465),i(9710),i(7979)},2750:(e,t,i)=>{var r=i(3385),o=i(1465),a=i(7979),s=i(9900),l=class extends o.P{constructor(){super(...arguments),this.localize=new r.V(this),this.value=0,this.unit="byte",this.display="short"}render(){if(isNaN(this.value))return"";const e="bit"===this.unit?["","kilo","mega","giga","tera"]:["","kilo","mega","giga","tera","peta"],t=Math.max(0,Math.min(Math.floor(Math.log10(this.value)/3),e.length-1)),i=e[t]+this.unit,r=parseFloat((this.value/Math.pow(1e3,t)).toPrecision(3));return this.localize.number(r,{style:"unit",unit:i,unitDisplay:this.display})}};(0,a.u2)([(0,s.Cb)({type:Number})],l.prototype,"value",2),(0,a.u2)([(0,s.Cb)()],l.prototype,"unit",2),(0,a.u2)([(0,s.Cb)()],l.prototype,"display",2),l.define("sl-format-bytes"),i(8513)},7176:(e,t,i)=>{var r=i(3385),o=i(1465),a=i(7979),s=i(8427),l=i(9900),n=class extends o.P{constructor(){super(...arguments),this.localize=new r.V(this),this.date=new Date,this.hourFormat="auto"}render(){const e=new Date(this.date),t="auto"===this.hourFormat?void 0:"12"===this.hourFormat;if(!isNaN(e.getMilliseconds()))return s.dy`
      <time datetime=${e.toISOString()}>
        ${this.localize.date(e,{weekday:this.weekday,era:this.era,year:this.year,month:this.month,day:this.day,hour:this.hour,minute:this.minute,second:this.second,timeZoneName:this.timeZoneName,timeZone:this.timeZone,hour12:t})}
      </time>
    `}};(0,a.u2)([(0,l.Cb)()],n.prototype,"date",2),(0,a.u2)([(0,l.Cb)()],n.prototype,"weekday",2),(0,a.u2)([(0,l.Cb)()],n.prototype,"era",2),(0,a.u2)([(0,l.Cb)()],n.prototype,"year",2),(0,a.u2)([(0,l.Cb)()],n.prototype,"month",2),(0,a.u2)([(0,l.Cb)()],n.prototype,"day",2),(0,a.u2)([(0,l.Cb)()],n.prototype,"hour",2),(0,a.u2)([(0,l.Cb)()],n.prototype,"minute",2),(0,a.u2)([(0,l.Cb)()],n.prototype,"second",2),(0,a.u2)([(0,l.Cb)({attribute:"time-zone-name"})],n.prototype,"timeZoneName",2),(0,a.u2)([(0,l.Cb)({attribute:"time-zone"})],n.prototype,"timeZone",2),(0,a.u2)([(0,l.Cb)({attribute:"hour-format"})],n.prototype,"hourFormat",2),n.define("sl-format-date"),i(8513)},2171:(e,t,i)=>{var r=i(3385),o=i(1465),a=i(7979),s=i(9900),l=class extends o.P{constructor(){super(...arguments),this.localize=new r.V(this),this.value=0,this.type="decimal",this.noGrouping=!1,this.currency="USD",this.currencyDisplay="symbol"}render(){return isNaN(this.value)?"":this.localize.number(this.value,{style:this.type,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:!this.noGrouping,minimumIntegerDigits:this.minimumIntegerDigits,minimumFractionDigits:this.minimumFractionDigits,maximumFractionDigits:this.maximumFractionDigits,minimumSignificantDigits:this.minimumSignificantDigits,maximumSignificantDigits:this.maximumSignificantDigits})}};(0,a.u2)([(0,s.Cb)({type:Number})],l.prototype,"value",2),(0,a.u2)([(0,s.Cb)()],l.prototype,"type",2),(0,a.u2)([(0,s.Cb)({attribute:"no-grouping",type:Boolean})],l.prototype,"noGrouping",2),(0,a.u2)([(0,s.Cb)()],l.prototype,"currency",2),(0,a.u2)([(0,s.Cb)({attribute:"currency-display"})],l.prototype,"currencyDisplay",2),(0,a.u2)([(0,s.Cb)({attribute:"minimum-integer-digits",type:Number})],l.prototype,"minimumIntegerDigits",2),(0,a.u2)([(0,s.Cb)({attribute:"minimum-fraction-digits",type:Number})],l.prototype,"minimumFractionDigits",2),(0,a.u2)([(0,s.Cb)({attribute:"maximum-fraction-digits",type:Number})],l.prototype,"maximumFractionDigits",2),(0,a.u2)([(0,s.Cb)({attribute:"minimum-significant-digits",type:Number})],l.prototype,"minimumSignificantDigits",2),(0,a.u2)([(0,s.Cb)({attribute:"maximum-significant-digits",type:Number})],l.prototype,"maximumSignificantDigits",2),l.define("sl-format-number"),i(8513)},5390:(e,t,i)=>{i(7482).U.define("sl-icon-button"),i(335),i(6877),i(5249),i(836),i(9699),i(1793),i(4703),i(1465),i(9710),i(7979)},1818:(e,t,i)=>{i(6877).V.define("sl-icon"),i(5249),i(836),i(9699),i(1793),i(4703),i(1465),i(9710),i(7979)},5569:(e,t,i)=>{var r=i(9710),o=i(8427),a=o.iv`
  ${r.N}

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
`,s=i(6200),l=i(1807),n=i(3385),d=i(6877),h=i(4703),c=i(1465),u=i(7979),p=i(9832),b=i(9900),v=i(2994),m=class extends c.P{constructor(){super(...arguments),this.localize=new n.V(this),this.position=50}handleDrag(e){const{width:t}=this.base.getBoundingClientRect(),i="rtl"===this.localize.dir();e.preventDefault(),(0,s.o)(this.base,{onMove:e=>{this.position=parseFloat((0,l.u)(e/t*100,0,100).toFixed(2)),i&&(this.position=100-this.position)},initialEvent:e})}handleKeyDown(e){const t="ltr"===this.localize.dir(),i="rtl"===this.localize.dir();if(["ArrowLeft","ArrowRight","Home","End"].includes(e.key)){const r=e.shiftKey?10:1;let o=this.position;e.preventDefault(),(t&&"ArrowLeft"===e.key||i&&"ArrowRight"===e.key)&&(o-=r),(t&&"ArrowRight"===e.key||i&&"ArrowLeft"===e.key)&&(o+=r),"Home"===e.key&&(o=0),"End"===e.key&&(o=100),o=(0,l.u)(o,0,100),this.position=o}}handlePositionChange(){this.emit("sl-change")}render(){const e="rtl"===this.localize.dir();return o.dy`
      <div
        part="base"
        id="image-comparer"
        class=${(0,p.$)({"image-comparer":!0,"image-comparer--rtl":e})}
        @keydown=${this.handleKeyDown}
      >
        <div class="image-comparer__image">
          <div part="before" class="image-comparer__before">
            <slot name="before"></slot>
          </div>

          <div
            part="after"
            class="image-comparer__after"
            style=${(0,v.V)({clipPath:e?`inset(0 0 0 ${100-this.position}%)`:`inset(0 ${100-this.position}% 0 0)`})}
          >
            <slot name="after"></slot>
          </div>
        </div>

        <div
          part="divider"
          class="image-comparer__divider"
          style=${(0,v.V)({left:e?100-this.position+"%":`${this.position}%`})}
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
    `}};m.styles=a,m.scopedElement={"sl-icon":d.V},(0,u.u2)([(0,b.IO)(".image-comparer")],m.prototype,"base",2),(0,u.u2)([(0,b.IO)(".image-comparer__handle")],m.prototype,"handle",2),(0,u.u2)([(0,b.Cb)({type:Number,reflect:!0})],m.prototype,"position",2),(0,u.u2)([(0,h.Y)("position",{waitUntilFirstUpdate:!0})],m.prototype,"handlePositionChange",1),m.define("sl-image-comparer"),i(8513),i(5249),i(836),i(9699),i(1793)},3556:(e,t,i)=>{i(3519).o.define("sl-input"),i(5239),i(4238),i(3514),i(203),i(3385),i(8513),i(6877),i(5249),i(836),i(9699),i(1793),i(4703),i(1465),i(9710),i(7979)},2298:(e,t,i)=>{var r=i(9710),o=i(8427),a=o.iv`
  ${r.N}

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
  }
`,s=i(1465),l=class extends s.P{render(){return o.dy` <slot part="base" class="menu-label"></slot> `}};l.styles=a,l.define("sl-menu-label"),i(7979)},6521:(e,t,i)=>{var r=i(9710),o=i(8427),a=o.iv`
  ${r.N}

  :host {
    display: contents;
  }
`,s=i(4703),l=i(1465),n=i(7979),d=i(9900),h=class extends l.P{constructor(){super(...arguments),this.attrOldValue=!1,this.charData=!1,this.charDataOldValue=!1,this.childList=!1,this.disabled=!1,this.handleMutation=e=>{this.emit("sl-mutation",{detail:{mutationList:e}})}}connectedCallback(){super.connectedCallback(),this.mutationObserver=new MutationObserver(this.handleMutation),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}startObserver(){const e="string"==typeof this.attr&&this.attr.length>0,t=e&&"*"!==this.attr?this.attr.split(" "):void 0;try{this.mutationObserver.observe(this,{subtree:!0,childList:this.childList,attributes:e,attributeFilter:t,attributeOldValue:this.attrOldValue,characterData:this.charData,characterDataOldValue:this.charDataOldValue})}catch(e){}}stopObserver(){this.mutationObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}handleChange(){this.stopObserver(),this.startObserver()}render(){return o.dy` <slot></slot> `}};h.styles=a,(0,n.u2)([(0,d.Cb)({reflect:!0})],h.prototype,"attr",2),(0,n.u2)([(0,d.Cb)({attribute:"attr-old-value",type:Boolean,reflect:!0})],h.prototype,"attrOldValue",2),(0,n.u2)([(0,d.Cb)({attribute:"char-data",type:Boolean,reflect:!0})],h.prototype,"charData",2),(0,n.u2)([(0,d.Cb)({attribute:"char-data-old-value",type:Boolean,reflect:!0})],h.prototype,"charDataOldValue",2),(0,n.u2)([(0,d.Cb)({attribute:"child-list",type:Boolean,reflect:!0})],h.prototype,"childList",2),(0,n.u2)([(0,d.Cb)({type:Boolean,reflect:!0})],h.prototype,"disabled",2),(0,n.u2)([(0,s.Y)("disabled")],h.prototype,"handleDisabledChange",1),(0,n.u2)([(0,s.Y)("attr",{waitUntilFirstUpdate:!0}),(0,s.Y)("attr-old-value",{waitUntilFirstUpdate:!0}),(0,s.Y)("char-data",{waitUntilFirstUpdate:!0}),(0,s.Y)("char-data-old-value",{waitUntilFirstUpdate:!0}),(0,s.Y)("childList",{waitUntilFirstUpdate:!0})],h.prototype,"handleChange",1),h.define("sl-mutation-observer")},8053:(e,t,i)=>{var r=i(9710),o=i(8427),a=o.iv`
  ${r.N}

  :host {
    display: block;
    user-select: none;
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
`,s=i(3385),l=i(6877),n=i(4703),d=i(1465),h=i(7979),c=i(9832),u=i(9900),p=class extends d.P{constructor(){super(...arguments),this.localize=new s.V(this),this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){const e=this.getTextLabel();void 0!==this.cachedTextLabel?e!==this.cachedTextLabel&&(this.cachedTextLabel=e,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1})):this.cachedTextLabel=e}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){"string"!=typeof this.value&&(this.value=String(this.value)),this.value.includes(" ")&&(console.error("Option values cannot include a space. All spaces have been replaced with underscores.",this),this.value=this.value.replace(/ /g,"_"))}getTextLabel(){var e;return(null!=(e=this.textContent)?e:"").trim()}render(){return o.dy`
      <div
        part="base"
        class=${(0,c.$)({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};p.styles=a,p.dependencies={"sl-icon":l.V},(0,h.u2)([(0,u.IO)(".option__label")],p.prototype,"defaultSlot",2),(0,h.u2)([(0,u.SB)()],p.prototype,"current",2),(0,h.u2)([(0,u.SB)()],p.prototype,"selected",2),(0,h.u2)([(0,u.SB)()],p.prototype,"hasHover",2),(0,h.u2)([(0,u.Cb)({reflect:!0})],p.prototype,"value",2),(0,h.u2)([(0,u.Cb)({type:Boolean,reflect:!0})],p.prototype,"disabled",2),(0,h.u2)([(0,n.Y)("disabled")],p.prototype,"handleDisabledChange",1),(0,h.u2)([(0,n.Y)("selected")],p.prototype,"handleSelectedChange",1),(0,h.u2)([(0,n.Y)("value")],p.prototype,"handleValueChange",1),p.define("sl-option"),i(8513),i(5249),i(836),i(9699),i(1793)},9816:(e,t,i)=>{i(9493).l.define("sl-popup"),i(4476),i(1465),i(9710),i(7979)},1523:(e,t,i)=>{var r=i(9710),o=i(8427),a=o.iv`
  ${r.N}

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
    transition: 400ms width, 400ms background-color;
    user-select: none;
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
`,s=i(3385),l=i(1465),n=i(7979),d=i(9832),h=i(2747),c=i(9900),u=i(2994),p=class extends l.P{constructor(){super(...arguments),this.localize=new s.V(this),this.value=0,this.indeterminate=!1,this.label=""}render(){return o.dy`
      <div
        part="base"
        class=${(0,d.$)({"progress-bar":!0,"progress-bar--indeterminate":this.indeterminate,"progress-bar--rtl":"rtl"===this.localize.dir()})}
        role="progressbar"
        title=${(0,h.o)(this.title)}
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?0:this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${(0,u.V)({width:`${this.value}%`})}>
          ${this.indeterminate?"":o.dy` <slot part="label" class="progress-bar__label"></slot> `}
        </div>
      </div>
    `}};p.styles=a,(0,n.u2)([(0,c.Cb)({type:Number,reflect:!0})],p.prototype,"value",2),(0,n.u2)([(0,c.Cb)({type:Boolean,reflect:!0})],p.prototype,"indeterminate",2),(0,n.u2)([(0,c.Cb)()],p.prototype,"label",2),p.define("sl-progress-bar"),i(8513)},5208:(e,t,i)=>{var r=i(9710),o=i(8427),a=o.iv`
  ${r.N}

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
  }
`,s=i(3385),l=i(1465),n=i(7979),d=i(9900),h=class extends l.P{constructor(){super(...arguments),this.localize=new s.V(this),this.value=0,this.label=""}updated(e){if(super.updated(e),e.has("value")){const e=parseFloat(getComputedStyle(this.indicator).getPropertyValue("r")),t=2*Math.PI*e,i=t-this.value/100*t;this.indicatorOffset=`${i}px`}}render(){return o.dy`
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
    `}};h.styles=a,(0,n.u2)([(0,d.IO)(".progress-ring__indicator")],h.prototype,"indicator",2),(0,n.u2)([(0,d.SB)()],h.prototype,"indicatorOffset",2),(0,n.u2)([(0,d.Cb)({type:Number,reflect:!0})],h.prototype,"value",2),(0,n.u2)([(0,d.Cb)()],h.prototype,"label",2),h.define("sl-progress-ring"),i(8513)},5791:(e,t,i)=>{var r=i(9710),o=i(8427),a=o.iv`
  ${r.N}

  :host {
    display: inline-block;
  }
`,s=i(4703),l=i(1465),n=i(7979),d=i(9900),h=i(2994);let c=null;class u{}u.render=function(e,t){c(e,t)},self.QrCreator=u,function(e){function t(t,i,r,o){var a={},s=e(r,i);s.u(t),s.J(),o=o||0;var l=s.h(),n=s.h()+2*o;return a.text=t,a.level=i,a.version=r,a.O=n,a.a=function(e,t){return t-=o,!(0>(e-=o)||e>=l||0>t||t>=l)&&s.a(e,t)},a}function i(e,t,i,r,o,a,s,l,n,d){function h(t,i,r,o,s,l,n){t?(e.lineTo(i+l,r+n),e.arcTo(i,r,o,s,a)):e.lineTo(i,r)}s?e.moveTo(t+a,i):e.moveTo(t,i),h(l,r,i,r,o,-a,0),h(n,r,o,t,o,0,-a),h(d,t,o,t,i,a,0),h(s,t,i,r,i,0,a)}function r(e,t,i,r,o,a,s,l,n,d){function h(t,i,r,o){e.moveTo(t+r,i),e.lineTo(t,i),e.lineTo(t,i+o),e.arcTo(t,i,t+r,i,a)}s&&h(t,i,a,a),l&&h(r,i,-a,a),n&&h(r,o,-a,-a),d&&h(t,o,a,-a)}function o(e,o){e:{var a=o.text,s=o.v,l=o.N,n=o.K,d=o.P;for(l=Math.max(1,l||1),n=Math.min(40,n||40);l<=n;l+=1)try{var h=t(a,s,l,d);break e}catch(e){}h=void 0}if(!h)return null;for(a=e.getContext("2d"),o.background&&(a.fillStyle=o.background,a.fillRect(o.left,o.top,o.size,o.size)),s=h.O,n=o.size/s,a.beginPath(),d=0;d<s;d+=1)for(l=0;l<s;l+=1){var c=a,u=o.left+l*n,p=o.top+d*n,b=d,v=l,m=h.a,g=u+n,f=p+n,y=b-1,_=b+1,w=v-1,x=v+1,k=Math.floor(Math.min(.5,Math.max(0,o.R))*n),C=m(b,v),z=m(y,w),$=m(y,v);y=m(y,x);var V=m(b,x);x=m(_,x),v=m(_,v),_=m(_,w),b=m(b,w),u=Math.round(u),p=Math.round(p),g=Math.round(g),f=Math.round(f),C?i(c,u,p,g,f,k,!$&&!b,!$&&!V,!v&&!V,!v&&!b):r(c,u,p,g,f,k,$&&b&&z,$&&V&&y,v&&V&&x,v&&b&&_)}return function(e,t){var i=t.fill;if("string"==typeof i)e.fillStyle=i;else{var r=i.type,o=i.colorStops;if(i=i.position.map((e=>Math.round(e*t.size))),"linear-gradient"===r)var a=e.createLinearGradient.apply(e,i);else{if("radial-gradient"!==r)throw Error("Unsupported fill");a=e.createRadialGradient.apply(e,i)}o.forEach((([e,t])=>{a.addColorStop(e,t)})),e.fillStyle=a}}(a,o),a.fill(),e}var a={minVersion:1,maxVersion:40,ecLevel:"L",left:0,top:0,size:200,fill:"#000",background:null,text:"no text",radius:.5,quiet:0};c=function(e,t){var i={};Object.assign(i,a,e),i.N=i.minVersion,i.K=i.maxVersion,i.v=i.ecLevel,i.left=i.left,i.top=i.top,i.size=i.size,i.fill=i.fill,i.background=i.background,i.text=i.text,i.R=i.radius,i.P=i.quiet,t instanceof HTMLCanvasElement?(t.width===i.size&&t.height===i.size||(t.width=i.size,t.height=i.size),t.getContext("2d").clearRect(0,0,t.width,t.height),o(t,i)):((e=document.createElement("canvas")).width=i.size,e.height=i.size,i=o(e,i),t.appendChild(i))}}(function(){function e(o,s){function l(e,t){for(var i=-1;7>=i;i+=1)if(!(-1>=e+i||c<=e+i))for(var r=-1;7>=r;r+=1)-1>=t+r||c<=t+r||(h[e+i][t+r]=0<=i&&6>=i&&(0==r||6==r)||0<=r&&6>=r&&(0==i||6==i)||2<=i&&4>=i&&2<=r&&4>=r)}function n(e,i){for(var s=c=4*o+17,n=Array(s),b=0;b<s;b+=1){n[b]=Array(s);for(var v=0;v<s;v+=1)n[b][v]=null}for(h=n,l(0,0),l(c-7,0),l(0,c-7),s=r.G(o),n=0;n<s.length;n+=1)for(b=0;b<s.length;b+=1){v=s[n];var m=s[b];if(null==h[v][m])for(var g=-2;2>=g;g+=1)for(var f=-2;2>=f;f+=1)h[v+g][m+f]=-2==g||2==g||-2==f||2==f||0==g&&0==f}for(s=8;s<c-8;s+=1)null==h[s][6]&&(h[s][6]=0==s%2);for(s=8;s<c-8;s+=1)null==h[6][s]&&(h[6][s]=0==s%2);for(s=r.w(d<<3|i),n=0;15>n;n+=1)b=!e&&1==(s>>n&1),h[6>n?n:8>n?n+1:c-15+n][8]=b,h[8][8>n?c-n-1:9>n?15-n:14-n]=b;if(h[c-8][8]=!e,7<=o){for(s=r.A(o),n=0;18>n;n+=1)b=!e&&1==(s>>n&1),h[Math.floor(n/3)][n%3+c-8-3]=b;for(n=0;18>n;n+=1)b=!e&&1==(s>>n&1),h[n%3+c-8-3][Math.floor(n/3)]=b}if(null==u){for(e=a.I(o,d),s=function(){var e=[],t=0,i={B:function(){return e},c:function(t){return 1==(e[Math.floor(t/8)]>>>7-t%8&1)},put:function(e,t){for(var r=0;r<t;r+=1)i.m(1==(e>>>t-r-1&1))},f:function(){return t},m:function(i){var r=Math.floor(t/8);e.length<=r&&e.push(0),i&&(e[r]|=128>>>t%8),t+=1}};return i}(),n=0;n<p.length;n+=1)b=p[n],s.put(4,4),s.put(b.b(),r.f(4,o)),b.write(s);for(n=b=0;n<e.length;n+=1)b+=e[n].j;if(s.f()>8*b)throw Error("code length overflow. ("+s.f()+">"+8*b+")");for(s.f()+4<=8*b&&s.put(0,4);0!=s.f()%8;)s.m(!1);for(;!(s.f()>=8*b||(s.put(236,8),s.f()>=8*b));)s.put(17,8);var y=0;for(b=n=0,v=Array(e.length),m=Array(e.length),g=0;g<e.length;g+=1){var _=e[g].j,w=e[g].o-_;for(n=Math.max(n,_),b=Math.max(b,w),v[g]=Array(_),f=0;f<v[g].length;f+=1)v[g][f]=255&s.B()[f+y];for(y+=_,f=r.C(w),_=t(v[g],f.b()-1).l(f),m[g]=Array(f.b()-1),f=0;f<m[g].length;f+=1)w=f+_.b()-m[g].length,m[g][f]=0<=w?_.c(w):0}for(f=s=0;f<e.length;f+=1)s+=e[f].o;for(s=Array(s),f=y=0;f<n;f+=1)for(g=0;g<e.length;g+=1)f<v[g].length&&(s[y]=v[g][f],y+=1);for(f=0;f<b;f+=1)for(g=0;g<e.length;g+=1)f<m[g].length&&(s[y]=m[g][f],y+=1);u=s}for(e=u,s=-1,n=c-1,b=7,v=0,i=r.F(i),m=c-1;0<m;m-=2)for(6==m&&--m;;){for(g=0;2>g;g+=1)null==h[n][m-g]&&(f=!1,v<e.length&&(f=1==(e[v]>>>b&1)),i(n,m-g)&&(f=!f),h[n][m-g]=f,-1==--b&&(v+=1,b=7));if(0>(n+=s)||c<=n){n-=s,s=-s;break}}}var d=i[s],h=null,c=0,u=null,p=[],b={u:function(t){t=function(t){var i=e.s(t);return{S:function(){return 4},b:function(){return i.length},write:function(e){for(var t=0;t<i.length;t+=1)e.put(i[t],8)}}}(t),p.push(t),u=null},a:function(e,t){if(0>e||c<=e||0>t||c<=t)throw Error(e+","+t);return h[e][t]},h:function(){return c},J:function(){for(var e=0,t=0,i=0;8>i;i+=1){n(!0,i);var o=r.D(b);(0==i||e>o)&&(e=o,t=i)}n(!1,t)}};return b}function t(e,i){if(void 0===e.length)throw Error(e.length+"/"+i);var r=function(){for(var t=0;t<e.length&&0==e[t];)t+=1;for(var r=Array(e.length-t+i),o=0;o<e.length-t;o+=1)r[o]=e[o+t];return r}(),a={c:function(e){return r[e]},b:function(){return r.length},multiply:function(e){for(var i=Array(a.b()+e.b()-1),r=0;r<a.b();r+=1)for(var s=0;s<e.b();s+=1)i[r+s]^=o.i(o.g(a.c(r))+o.g(e.c(s)));return t(i,0)},l:function(e){if(0>a.b()-e.b())return a;for(var i=o.g(a.c(0))-o.g(e.c(0)),r=Array(a.b()),s=0;s<a.b();s+=1)r[s]=a.c(s);for(s=0;s<e.b();s+=1)r[s]^=o.i(o.g(e.c(s))+i);return t(r,0).l(e)}};return a}e.s=function(e){for(var t=[],i=0;i<e.length;i++){var r=e.charCodeAt(i);128>r?t.push(r):2048>r?t.push(192|r>>6,128|63&r):55296>r||57344<=r?t.push(224|r>>12,128|r>>6&63,128|63&r):(i++,r=65536+((1023&r)<<10|1023&e.charCodeAt(i)),t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r))}return t};var i={L:1,M:0,Q:3,H:2},r=function(){function e(e){for(var t=0;0!=e;)t+=1,e>>>=1;return t}var i=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],r={w:function(t){for(var i=t<<10;0<=e(i)-e(1335);)i^=1335<<e(i)-e(1335);return 21522^(t<<10|i)},A:function(t){for(var i=t<<12;0<=e(i)-e(7973);)i^=7973<<e(i)-e(7973);return t<<12|i},G:function(e){return i[e-1]},F:function(e){switch(e){case 0:return function(e,t){return 0==(e+t)%2};case 1:return function(e){return 0==e%2};case 2:return function(e,t){return 0==t%3};case 3:return function(e,t){return 0==(e+t)%3};case 4:return function(e,t){return 0==(Math.floor(e/2)+Math.floor(t/3))%2};case 5:return function(e,t){return 0==e*t%2+e*t%3};case 6:return function(e,t){return 0==(e*t%2+e*t%3)%2};case 7:return function(e,t){return 0==(e*t%3+(e+t)%2)%2};default:throw Error("bad maskPattern:"+e)}},C:function(e){for(var i=t([1],0),r=0;r<e;r+=1)i=i.multiply(t([1,o.i(r)],0));return i},f:function(e,t){if(4!=e||1>t||40<t)throw Error("mode: "+e+"; type: "+t);return 10>t?8:16},D:function(e){for(var t=e.h(),i=0,r=0;r<t;r+=1)for(var o=0;o<t;o+=1){for(var a=0,s=e.a(r,o),l=-1;1>=l;l+=1)if(!(0>r+l||t<=r+l))for(var n=-1;1>=n;n+=1)0>o+n||t<=o+n||(0!=l||0!=n)&&s==e.a(r+l,o+n)&&(a+=1);5<a&&(i+=3+a-5)}for(r=0;r<t-1;r+=1)for(o=0;o<t-1;o+=1)a=0,e.a(r,o)&&(a+=1),e.a(r+1,o)&&(a+=1),e.a(r,o+1)&&(a+=1),e.a(r+1,o+1)&&(a+=1),(0==a||4==a)&&(i+=3);for(r=0;r<t;r+=1)for(o=0;o<t-6;o+=1)e.a(r,o)&&!e.a(r,o+1)&&e.a(r,o+2)&&e.a(r,o+3)&&e.a(r,o+4)&&!e.a(r,o+5)&&e.a(r,o+6)&&(i+=40);for(o=0;o<t;o+=1)for(r=0;r<t-6;r+=1)e.a(r,o)&&!e.a(r+1,o)&&e.a(r+2,o)&&e.a(r+3,o)&&e.a(r+4,o)&&!e.a(r+5,o)&&e.a(r+6,o)&&(i+=40);for(o=a=0;o<t;o+=1)for(r=0;r<t;r+=1)e.a(r,o)&&(a+=1);return i+Math.abs(100*a/t/t-50)/5*10}};return r}(),o=function(){for(var e=Array(256),t=Array(256),i=0;8>i;i+=1)e[i]=1<<i;for(i=8;256>i;i+=1)e[i]=e[i-4]^e[i-5]^e[i-6]^e[i-8];for(i=0;255>i;i+=1)t[e[i]]=i;return{g:function(e){if(1>e)throw Error("glog("+e+")");return t[e]},i:function(t){for(;0>t;)t+=255;for(;256<=t;)t-=255;return e[t]}}}(),a=function(){function e(e,r){switch(r){case i.L:return t[4*(e-1)];case i.M:return t[4*(e-1)+1];case i.Q:return t[4*(e-1)+2];case i.H:return t[4*(e-1)+3]}}var t=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],r={I:function(t,i){var r=e(t,i);if(void 0===r)throw Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+i);t=r.length/3,i=[];for(var o=0;o<t;o+=1)for(var a=r[3*o],s=r[3*o+1],l=r[3*o+2],n=0;n<a;n+=1){var d=l,h={};h.o=s,h.j=d,i.push(h)}return i}};return r}();return e}());const p=QrCreator;var b=class extends l.P{constructor(){super(...arguments),this.value="",this.label="",this.size=128,this.fill="black",this.background="white",this.radius=0,this.errorCorrection="H"}firstUpdated(){this.generate()}generate(){this.hasUpdated&&p.render({text:this.value,radius:this.radius,ecLevel:this.errorCorrection,fill:this.fill,background:this.background,size:2*this.size},this.canvas)}render(){var e;return o.dy`
      <canvas
        part="base"
        class="qr-code"
        role="img"
        aria-label=${(null==(e=this.label)?void 0:e.length)>0?this.label:this.value}
        style=${(0,h.V)({width:`${this.size}px`,height:`${this.size}px`})}
      ></canvas>
    `}};b.styles=a,(0,n.u2)([(0,d.IO)("canvas")],b.prototype,"canvas",2),(0,n.u2)([(0,d.Cb)()],b.prototype,"value",2),(0,n.u2)([(0,d.Cb)()],b.prototype,"label",2),(0,n.u2)([(0,d.Cb)({type:Number})],b.prototype,"size",2),(0,n.u2)([(0,d.Cb)()],b.prototype,"fill",2),(0,n.u2)([(0,d.Cb)()],b.prototype,"background",2),(0,n.u2)([(0,d.Cb)({type:Number})],b.prototype,"radius",2),(0,n.u2)([(0,d.Cb)({attribute:"error-correction"})],b.prototype,"errorCorrection",2),(0,n.u2)([(0,s.Y)(["background","errorCorrection","fill","radius","size","value"])],b.prototype,"generate",1),b.define("sl-qr-code")},3214:(e,t,i)=>{var r=i(5999),o=i(8427).iv`
  ${r.y}

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
`,a=i(6167),s=i(4703),l=i(1465),n=i(7979),d=i(9832),h=i(3860),c=i(2747),u=i(9900),p=class extends l.P{constructor(){super(...arguments),this.hasSlotController=new a.r(this,"[default]","prefix","suffix"),this.hasFocus=!1,this.checked=!1,this.disabled=!1,this.size="medium",this.pill=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","presentation")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleClick(e){if(this.disabled)return e.preventDefault(),void e.stopPropagation();this.checked=!0}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(e){this.input.focus(e)}blur(){this.input.blur()}render(){return h.dy`
      <div part="base" role="presentation">
        <button
          part="${"button"+(this.checked?" button--checked":"")}"
          role="radio"
          aria-checked="${this.checked}"
          class=${(0,d.$)({button:!0,"button--default":!0,"button--small":"small"===this.size,"button--medium":"medium"===this.size,"button--large":"large"===this.size,"button--checked":this.checked,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--outline":!0,"button--pill":this.pill,"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
          aria-disabled=${this.disabled}
          type="button"
          value=${(0,c.o)(this.value)}
          tabindex="${this.checked?"0":"-1"}"
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @click=${this.handleClick}
        >
          <slot name="prefix" part="prefix" class="button__prefix"></slot>
          <slot part="label" class="button__label"></slot>
          <slot name="suffix" part="suffix" class="button__suffix"></slot>
        </button>
      </div>
    `}};p.styles=o,(0,n.u2)([(0,u.IO)(".button")],p.prototype,"input",2),(0,n.u2)([(0,u.IO)(".hidden-input")],p.prototype,"hiddenInput",2),(0,n.u2)([(0,u.SB)()],p.prototype,"hasFocus",2),(0,n.u2)([(0,u.Cb)({type:Boolean,reflect:!0})],p.prototype,"checked",2),(0,n.u2)([(0,u.Cb)()],p.prototype,"value",2),(0,n.u2)([(0,u.Cb)({type:Boolean,reflect:!0})],p.prototype,"disabled",2),(0,n.u2)([(0,u.Cb)({reflect:!0})],p.prototype,"size",2),(0,n.u2)([(0,u.Cb)({type:Boolean,reflect:!0})],p.prototype,"pill",2),(0,n.u2)([(0,s.Y)("disabled",{waitUntilFirstUpdate:!0})],p.prototype,"handleDisabledChange",1),p.define("sl-radio-button"),i(9710)},8827:(e,t,i)=>{var r=i(4238),o=i(9710),a=i(8427),s=a.iv`
  ${o.N}
  ${r.n}

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
`,l=i(2248),n=i(203),d=i(6167),h=i(4703),c=i(1465),u=i(7979),p=i(9832),b=i(9900),v=class extends c.P{constructor(){super(...arguments),this.formControlController=new n.pY(this),this.hasSlotController=new d.r(this,"help-text","label"),this.customValidityMessage="",this.hasButtonGroup=!1,this.errorMessage="",this.defaultValue="",this.label="",this.helpText="",this.name="option",this.value="",this.size="medium",this.form="",this.required=!1}get validity(){const e=this.required&&!this.value;return""!==this.customValidityMessage?n.ZW:e?n.st:n.o9}get validationMessage(){const e=this.required&&!this.value;return""!==this.customValidityMessage?this.customValidityMessage:e?this.validationInput.validationMessage:""}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.formControlController.updateValidity()}getAllRadios(){return[...this.querySelectorAll("sl-radio, sl-radio-button")]}handleRadioClick(e){const t=e.target.closest("sl-radio, sl-radio-button"),i=this.getAllRadios(),r=this.value;t.disabled||(this.value=t.value,i.forEach((e=>e.checked=e===t)),this.value!==r&&(this.emit("sl-change"),this.emit("sl-input")))}handleKeyDown(e){var t;if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(e.key))return;const i=this.getAllRadios().filter((e=>!e.disabled)),r=null!=(t=i.find((e=>e.checked)))?t:i[0],o=" "===e.key?0:["ArrowUp","ArrowLeft"].includes(e.key)?-1:1,a=this.value;let s=i.indexOf(r)+o;s<0&&(s=i.length-1),s>i.length-1&&(s=0),this.getAllRadios().forEach((e=>{e.checked=!1,this.hasButtonGroup||(e.tabIndex=-1)})),this.value=i[s].value,i[s].checked=!0,this.hasButtonGroup?i[s].shadowRoot.querySelector("button").focus():(i[s].tabIndex=0,i[s].focus()),this.value!==a&&(this.emit("sl-change"),this.emit("sl-input")),e.preventDefault()}handleLabelClick(){const e=this.getAllRadios(),t=e.find((e=>e.checked))||e[0];t&&t.focus()}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}async syncRadioElements(){var e,t;const i=this.getAllRadios();if(await Promise.all(i.map((async e=>{await e.updateComplete,e.checked=e.value===this.value,e.size=this.size}))),this.hasButtonGroup=i.some((e=>"sl-radio-button"===e.tagName.toLowerCase())),!i.some((e=>e.checked)))if(this.hasButtonGroup){const t=null==(e=i[0].shadowRoot)?void 0:e.querySelector("button");t&&(t.tabIndex=0)}else i[0].tabIndex=0;if(this.hasButtonGroup){const e=null==(t=this.shadowRoot)?void 0:t.querySelector("sl-button-group");e&&(e.disableRole=!0)}}syncRadios(){customElements.get("sl-radio")&&customElements.get("sl-radio-button")?this.syncRadioElements():(customElements.get("sl-radio")?this.syncRadioElements():customElements.whenDefined("sl-radio").then((()=>this.syncRadios())),customElements.get("sl-radio-button")?this.syncRadioElements():customElements.whenDefined("sl-radio-button").then((()=>this.syncRadios())))}updateCheckedRadio(){this.getAllRadios().forEach((e=>e.checked=e.value===this.value)),this.formControlController.setValidity(this.validity.valid)}handleSizeChange(){this.syncRadios()}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}checkValidity(){const e=this.required&&!this.value,t=""!==this.customValidityMessage;return!e&&!t||(this.formControlController.emitInvalidEvent(),!1)}getForm(){return this.formControlController.getForm()}reportValidity(){const e=this.validity.valid;return this.errorMessage=this.customValidityMessage||e?"":this.validationInput.validationMessage,this.formControlController.setValidity(e),this.validationInput.hidden=!0,clearTimeout(this.validationTimeout),e||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.validationTimeout=setTimeout((()=>this.validationInput.hidden=!0),1e4)),e}setCustomValidity(e=""){this.customValidityMessage=e,this.errorMessage=e,this.validationInput.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),i=!!this.label||!!e,r=!!this.helpText||!!t,o=a.dy`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;return a.dy`
      <fieldset
        part="form-control"
        class=${(0,p.$)({"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--radio-group":!0,"form-control--has-label":i,"form-control--has-help-text":r})}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="help-text"
        aria-errormessage="error-message"
      >
        <label
          part="form-control-label"
          id="label"
          class="form-control__label"
          aria-hidden=${i?"false":"true"}
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

          ${this.hasButtonGroup?a.dy`
                <sl-button-group part="button-group" exportparts="base:button-group__base" role="presentation">
                  ${o}
                </sl-button-group>
              `:o}
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </fieldset>
    `}};v.styles=s,v.dependencies={"sl-button-group":l.c},(0,u.u2)([(0,b.IO)("slot:not([name])")],v.prototype,"defaultSlot",2),(0,u.u2)([(0,b.IO)(".radio-group__validation-input")],v.prototype,"validationInput",2),(0,u.u2)([(0,b.SB)()],v.prototype,"hasButtonGroup",2),(0,u.u2)([(0,b.SB)()],v.prototype,"errorMessage",2),(0,u.u2)([(0,b.SB)()],v.prototype,"defaultValue",2),(0,u.u2)([(0,b.Cb)()],v.prototype,"label",2),(0,u.u2)([(0,b.Cb)({attribute:"help-text"})],v.prototype,"helpText",2),(0,u.u2)([(0,b.Cb)()],v.prototype,"name",2),(0,u.u2)([(0,b.Cb)({reflect:!0})],v.prototype,"value",2),(0,u.u2)([(0,b.Cb)({reflect:!0})],v.prototype,"size",2),(0,u.u2)([(0,b.Cb)({reflect:!0})],v.prototype,"form",2),(0,u.u2)([(0,b.Cb)({type:Boolean,reflect:!0})],v.prototype,"required",2),(0,u.u2)([(0,h.Y)("size",{waitUntilFirstUpdate:!0})],v.prototype,"handleSizeChange",1),(0,u.u2)([(0,h.Y)("value")],v.prototype,"handleValueChange",1),v.define("sl-radio-group"),i(829)},6061:(e,t,i)=>{var r=i(9710),o=i(8427),a=o.iv`
  ${r.N}

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
    transition: var(--sl-transition-fast) border-color, var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color, var(--sl-transition-fast) box-shadow;
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
  }
`,s=i(6877),l=i(4703),n=i(1465),d=i(7979),h=i(9832),c=i(9900),u=class extends n.P{constructor(){super(),this.checked=!1,this.hasFocus=!1,this.size="medium",this.disabled=!1,this.handleBlur=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.handleClick=()=>{this.disabled||(this.checked=!0)},this.handleFocus=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.addEventListener("blur",this.handleBlur),this.addEventListener("click",this.handleClick),this.addEventListener("focus",this.handleFocus)}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.setAttribute("tabindex","-1"),this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false"),this.setAttribute("tabindex",this.checked?"0":"-1")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}render(){return o.dy`
      <span
        part="base"
        class=${(0,h.$)({radio:!0,"radio--checked":this.checked,"radio--disabled":this.disabled,"radio--focused":this.hasFocus,"radio--small":"small"===this.size,"radio--medium":"medium"===this.size,"radio--large":"large"===this.size})}
      >
        <span part="${"control"+(this.checked?" control--checked":"")}" class="radio__control">
          ${this.checked?o.dy` <sl-icon part="checked-icon" class="radio__checked-icon" library="system" name="radio"></sl-icon> `:""}
        </span>

        <slot part="label" class="radio__label"></slot>
      </span>
    `}};u.styles=a,u.dependencies={"sl-icon":s.V},(0,d.u2)([(0,c.SB)()],u.prototype,"checked",2),(0,d.u2)([(0,c.SB)()],u.prototype,"hasFocus",2),(0,d.u2)([(0,c.Cb)()],u.prototype,"value",2),(0,d.u2)([(0,c.Cb)({reflect:!0})],u.prototype,"size",2),(0,d.u2)([(0,c.Cb)({type:Boolean,reflect:!0})],u.prototype,"disabled",2),(0,d.u2)([(0,l.Y)("checked")],u.prototype,"handleCheckedChange",1),(0,d.u2)([(0,l.Y)("disabled",{waitUntilFirstUpdate:!0})],u.prototype,"handleDisabledChange",1),u.define("sl-radio"),i(5249),i(836),i(9699),i(1793)},1622:(e,t,i)=>{var r=i(4238),o=i(9710),a=i(8427),s=a.iv`
  ${o.N}
  ${r.n}

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
    transition: var(--sl-transition-fast) border-color, var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color, var(--sl-transition-fast) box-shadow;
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
`,l=i(3514),n=i(203),d=i(3385),h=i(6167),c=i(4703),u=i(1465),p=i(7979),b=i(9832),v=i(9900),m=i(2747),g=i(8249),f=class extends u.P{constructor(){super(...arguments),this.formControlController=new n.pY(this),this.hasSlotController=new h.r(this,"help-text","label"),this.localize=new d.V(this),this.hasFocus=!1,this.hasTooltip=!1,this.title="",this.name="",this.value=0,this.label="",this.helpText="",this.disabled=!1,this.min=0,this.max=100,this.step=1,this.tooltip="top",this.tooltipFormatter=e=>e.toString(),this.form="",this.defaultValue=0}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver((()=>this.syncRange())),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max),this.updateComplete.then((()=>{this.syncRange(),this.resizeObserver.observe(this.input)}))}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this.input)}handleChange(){this.emit("sl-change")}handleInput(){this.value=parseFloat(this.input.value),this.emit("sl-input"),this.syncRange()}handleBlur(){this.hasFocus=!1,this.hasTooltip=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.hasTooltip=!0,this.emit("sl-focus")}handleThumbDragStart(){this.hasTooltip=!0}handleThumbDragEnd(){this.hasTooltip=!1}syncProgress(e){this.input.style.setProperty("--percent",100*e+"%")}syncTooltip(e){if(null!==this.output){const t=this.input.offsetWidth,i=this.output.offsetWidth,r=getComputedStyle(this.input).getPropertyValue("--thumb-size"),o=t*e;if("rtl"===this.localize.dir()){const a=`${t-o}px + ${e} * ${r}`;this.output.style.translate=`calc((${a} - ${i/2}px - ${r} / 2))`}else{const t=`${o}px - ${e} * ${r}`;this.output.style.translate=`calc(${t} - ${i/2}px + ${r} / 2)`}}}handleValueChange(){this.formControlController.updateValidity(),this.input.value=this.value.toString(),this.value=parseFloat(this.input.value),this.syncRange()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}syncRange(){const e=Math.max(0,(this.value-this.min)/(this.max-this.min));this.syncProgress(e),"none"!==this.tooltip&&this.syncTooltip(e)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}focus(e){this.input.focus(e)}blur(){this.input.blur()}stepUp(){this.input.stepUp(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}stepDown(){this.input.stepDown(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),i=!!this.label||!!e,r=!!this.helpText||!!t;return a.dy`
      <div
        part="form-control"
        class=${(0,b.$)({"form-control":!0,"form-control--medium":!0,"form-control--has-label":i,"form-control--has-help-text":r})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${(0,b.$)({range:!0,"range--disabled":this.disabled,"range--focused":this.hasFocus,"range--rtl":"rtl"===this.localize.dir(),"range--tooltip-visible":this.hasTooltip,"range--tooltip-top":"top"===this.tooltip,"range--tooltip-bottom":"bottom"===this.tooltip})}
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
              name=${(0,m.o)(this.name)}
              ?disabled=${this.disabled}
              min=${(0,m.o)(this.min)}
              max=${(0,m.o)(this.max)}
              step=${(0,m.o)(this.step)}
              .value=${(0,g.a)(this.value.toString())}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @focus=${this.handleFocus}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @blur=${this.handleBlur}
            />
            ${"none"===this.tooltip||this.disabled?"":a.dy`
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
          aria-hidden=${r?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};f.styles=s,(0,p.u2)([(0,v.IO)(".range__control")],f.prototype,"input",2),(0,p.u2)([(0,v.IO)(".range__tooltip")],f.prototype,"output",2),(0,p.u2)([(0,v.SB)()],f.prototype,"hasFocus",2),(0,p.u2)([(0,v.SB)()],f.prototype,"hasTooltip",2),(0,p.u2)([(0,v.Cb)()],f.prototype,"title",2),(0,p.u2)([(0,v.Cb)()],f.prototype,"name",2),(0,p.u2)([(0,v.Cb)({type:Number})],f.prototype,"value",2),(0,p.u2)([(0,v.Cb)()],f.prototype,"label",2),(0,p.u2)([(0,v.Cb)({attribute:"help-text"})],f.prototype,"helpText",2),(0,p.u2)([(0,v.Cb)({type:Boolean,reflect:!0})],f.prototype,"disabled",2),(0,p.u2)([(0,v.Cb)({type:Number})],f.prototype,"min",2),(0,p.u2)([(0,v.Cb)({type:Number})],f.prototype,"max",2),(0,p.u2)([(0,v.Cb)({type:Number})],f.prototype,"step",2),(0,p.u2)([(0,v.Cb)()],f.prototype,"tooltip",2),(0,p.u2)([(0,v.Cb)({attribute:!1})],f.prototype,"tooltipFormatter",2),(0,p.u2)([(0,v.Cb)({reflect:!0})],f.prototype,"form",2),(0,p.u2)([(0,l.L)()],f.prototype,"defaultValue",2),(0,p.u2)([(0,v.hO)({passive:!0})],f.prototype,"handleThumbDragStart",1),(0,p.u2)([(0,c.Y)("value",{waitUntilFirstUpdate:!0})],f.prototype,"handleValueChange",1),(0,p.u2)([(0,c.Y)("disabled",{waitUntilFirstUpdate:!0})],f.prototype,"handleDisabledChange",1),(0,p.u2)([(0,c.Y)("hasTooltip",{waitUntilFirstUpdate:!0})],f.prototype,"syncRange",1),f.define("sl-range"),i(8513)},9114:(e,t,i)=>{var r=i(9710),o=i(8427),a=o.iv`
  ${r.N}

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
`,s=i(1807),l=i(3385),n=i(6877),d=i(4703),h=i(1465),c=i(7979),u=i(9832),p=i(9900),b=i(2994),v=i(1739),m=class extends h.P{constructor(){super(...arguments),this.localize=new l.V(this),this.hoverValue=0,this.isHovering=!1,this.label="",this.value=0,this.max=5,this.precision=1,this.readonly=!1,this.disabled=!1,this.getSymbol=()=>'<sl-icon name="star-fill" library="system"></sl-icon>'}getValueFromMousePosition(e){return this.getValueFromXCoordinate(e.clientX)}getValueFromTouchPosition(e){return this.getValueFromXCoordinate(e.touches[0].clientX)}getValueFromXCoordinate(e){const t="rtl"===this.localize.dir(),{left:i,right:r,width:o}=this.rating.getBoundingClientRect(),a=t?this.roundToPrecision((r-e)/o*this.max,this.precision):this.roundToPrecision((e-i)/o*this.max,this.precision);return(0,s.u)(a,0,this.max)}handleClick(e){this.disabled||(this.setValue(this.getValueFromMousePosition(e)),this.emit("sl-change"))}setValue(e){this.disabled||this.readonly||(this.value=e===this.value?0:e,this.isHovering=!1)}handleKeyDown(e){const t="ltr"===this.localize.dir(),i="rtl"===this.localize.dir(),r=this.value;if(!this.disabled&&!this.readonly){if("ArrowDown"===e.key||t&&"ArrowLeft"===e.key||i&&"ArrowRight"===e.key){const t=e.shiftKey?1:this.precision;this.value=Math.max(0,this.value-t),e.preventDefault()}if("ArrowUp"===e.key||t&&"ArrowRight"===e.key||i&&"ArrowLeft"===e.key){const t=e.shiftKey?1:this.precision;this.value=Math.min(this.max,this.value+t),e.preventDefault()}"Home"===e.key&&(this.value=0,e.preventDefault()),"End"===e.key&&(this.value=this.max,e.preventDefault()),this.value!==r&&this.emit("sl-change")}}handleMouseEnter(e){this.isHovering=!0,this.hoverValue=this.getValueFromMousePosition(e)}handleMouseMove(e){this.hoverValue=this.getValueFromMousePosition(e)}handleMouseLeave(){this.isHovering=!1}handleTouchStart(e){this.isHovering=!0,this.hoverValue=this.getValueFromTouchPosition(e),e.preventDefault()}handleTouchMove(e){this.hoverValue=this.getValueFromTouchPosition(e)}handleTouchEnd(e){this.isHovering=!1,this.setValue(this.hoverValue),this.emit("sl-change"),e.preventDefault()}roundToPrecision(e,t=.5){const i=1/t;return Math.ceil(e*i)/i}handleHoverValueChange(){this.emit("sl-hover",{detail:{phase:"move",value:this.hoverValue}})}handleIsHoveringChange(){this.emit("sl-hover",{detail:{phase:this.isHovering?"start":"end",value:this.hoverValue}})}focus(e){this.rating.focus(e)}blur(){this.rating.blur()}render(){const e="rtl"===this.localize.dir(),t=Array.from(Array(this.max).keys());let i=0;return i=this.disabled||this.readonly?this.value:this.isHovering?this.hoverValue:this.value,o.dy`
      <div
        part="base"
        class=${(0,u.$)({rating:!0,"rating--readonly":this.readonly,"rating--disabled":this.disabled,"rating--rtl":e})}
        role="slider"
        aria-label=${this.label}
        aria-disabled=${this.disabled?"true":"false"}
        aria-readonly=${this.readonly?"true":"false"}
        aria-valuenow=${this.value}
        aria-valuemin=${0}
        aria-valuemax=${this.max}
        tabindex=${this.disabled?"-1":"0"}
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
          ${t.map((t=>i>t&&i<t+1?o.dy`
                <span
                  class=${(0,u.$)({rating__symbol:!0,"rating__partial-symbol-container":!0,"rating__symbol--hover":this.isHovering&&Math.ceil(i)===t+1})}
                  role="presentation"
                  @mouseenter=${this.handleMouseEnter}
                >
                  <div
                    style=${(0,b.V)({clipPath:e?`inset(0 ${100*(i-t)}% 0 0)`:`inset(0 0 0 ${100*(i-t)}%)`})}
                  >
                    ${(0,v.A)(this.getSymbol(t+1))}
                  </div>
                  <div
                    class="rating__partial--filled"
                    style=${(0,b.V)({clipPath:e?`inset(0 0 0 ${100-100*(i-t)}%)`:`inset(0 ${100-100*(i-t)}% 0 0)`})}
                  >
                    ${(0,v.A)(this.getSymbol(t+1))}
                  </div>
                </span>
              `:o.dy`
              <span
                class=${(0,u.$)({rating__symbol:!0,"rating__symbol--hover":this.isHovering&&Math.ceil(i)===t+1,"rating__symbol--active":i>=t+1})}
                role="presentation"
                @mouseenter=${this.handleMouseEnter}
              >
                ${(0,v.A)(this.getSymbol(t+1))}
              </span>
            `))}
        </span>
      </div>
    `}};m.styles=a,m.dependencies={"sl-icon":n.V},(0,c.u2)([(0,p.IO)(".rating")],m.prototype,"rating",2),(0,c.u2)([(0,p.SB)()],m.prototype,"hoverValue",2),(0,c.u2)([(0,p.SB)()],m.prototype,"isHovering",2),(0,c.u2)([(0,p.Cb)()],m.prototype,"label",2),(0,c.u2)([(0,p.Cb)({type:Number})],m.prototype,"value",2),(0,c.u2)([(0,p.Cb)({type:Number})],m.prototype,"max",2),(0,c.u2)([(0,p.Cb)({type:Number})],m.prototype,"precision",2),(0,c.u2)([(0,p.Cb)({type:Boolean,reflect:!0})],m.prototype,"readonly",2),(0,c.u2)([(0,p.Cb)({type:Boolean,reflect:!0})],m.prototype,"disabled",2),(0,c.u2)([(0,p.Cb)()],m.prototype,"getSymbol",2),(0,c.u2)([(0,p.hO)({passive:!0})],m.prototype,"handleTouchMove",1),(0,c.u2)([(0,d.Y)("hoverValue")],m.prototype,"handleHoverValueChange",1),(0,c.u2)([(0,d.Y)("isHovering")],m.prototype,"handleIsHoveringChange",1),m.define("sl-rating"),i(8513),i(5249),i(836),i(9699),i(1793)},1895:(e,t,i)=>{var r=i(3385),o=i(1465),a=i(7979),s=i(8427),l=i(9900),n=[{max:276e4,value:6e4,unit:"minute"},{max:72e6,value:36e5,unit:"hour"},{max:5184e5,value:864e5,unit:"day"},{max:24192e5,value:6048e5,unit:"week"},{max:28512e6,value:2592e6,unit:"month"},{max:1/0,value:31536e6,unit:"year"}],d=class extends o.P{constructor(){super(...arguments),this.localize=new r.V(this),this.isoTime="",this.relativeTime="",this.titleTime="",this.date=new Date,this.format="long",this.numeric="auto",this.sync=!1}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.updateTimeout)}render(){const e=new Date,t=new Date(this.date);if(isNaN(t.getMilliseconds()))return this.relativeTime="",this.isoTime="","";const i=t.getTime()-e.getTime(),{unit:r,value:o}=n.find((e=>Math.abs(i)<e.max));if(this.isoTime=t.toISOString(),this.titleTime=this.localize.date(t,{month:"long",year:"numeric",day:"numeric",hour:"numeric",minute:"numeric",timeZoneName:"short"}),this.relativeTime=this.localize.relativeTime(Math.round(i/o),r,{numeric:this.numeric,style:this.format}),clearTimeout(this.updateTimeout),this.sync){let e;e=function(e){const t={second:1e3,minute:6e4,hour:36e5,day:864e5}[e];return t-Date.now()%t}("minute"===r?"second":"hour"===r?"minute":"day"===r?"hour":"day"),this.updateTimeout=window.setTimeout((()=>this.requestUpdate()),e)}return s.dy` <time datetime=${this.isoTime} title=${this.titleTime}>${this.relativeTime}</time> `}};(0,a.u2)([(0,l.SB)()],d.prototype,"isoTime",2),(0,a.u2)([(0,l.SB)()],d.prototype,"relativeTime",2),(0,a.u2)([(0,l.SB)()],d.prototype,"titleTime",2),(0,a.u2)([(0,l.Cb)()],d.prototype,"date",2),(0,a.u2)([(0,l.Cb)()],d.prototype,"format",2),(0,a.u2)([(0,l.Cb)()],d.prototype,"numeric",2),(0,a.u2)([(0,l.Cb)({type:Boolean})],d.prototype,"sync",2),d.define("sl-relative-time"),i(8513)},1655:(e,t,i)=>{var r=i(9710),o=i(8427),a=o.iv`
  ${r.N}

  :host {
    display: contents;
  }
`,s=i(4703),l=i(1465),n=i(7979),d=i(9900),h=class extends l.P{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver((e=>{this.emit("sl-resize",{detail:{entries:e}})})),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){const e=this.shadowRoot.querySelector("slot");if(null!==e){const t=e.assignedElements({flatten:!0});this.observedElements.forEach((e=>this.resizeObserver.unobserve(e))),this.observedElements=[],t.forEach((e=>{this.resizeObserver.observe(e),this.observedElements.push(e)}))}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return o.dy` <slot @slotchange=${this.handleSlotChange}></slot> `}};h.styles=a,(0,n.u2)([(0,d.Cb)({type:Boolean,reflect:!0})],h.prototype,"disabled",2),(0,n.u2)([(0,s.Y)("disabled",{waitUntilFirstUpdate:!0})],h.prototype,"handleDisabledChange",1),h.define("sl-resize-observer")},1497:(e,t,i)=>{var r=i(9710),o=i(8427),a=o.iv`
  ${r.N}

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
`,s=i(1465),l=i(7979),n=i(9832),d=i(9900),h=class extends s.P{constructor(){super(...arguments),this.effect="none"}render(){return o.dy`
      <div
        part="base"
        class=${(0,n.$)({skeleton:!0,"skeleton--pulse":"pulse"===this.effect,"skeleton--sheen":"sheen"===this.effect})}
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `}};h.styles=a,(0,l.u2)([(0,d.Cb)()],h.prototype,"effect",2),h.define("sl-skeleton")},6409:(e,t,i)=>{i(3222).A.define("sl-spinner"),i(6396),i(3385),i(8513),i(1465),i(9710),i(7979)},267:(e,t,i)=>{var r=i(9710),o=i(8427),a=o.iv`
  ${r.N}

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
`,s=i(6200),l=i(1807),n=i(3385),d=i(4703),h=i(1465),c=i(7979),u=i(2747),p=i(9900),b=class extends h.P{constructor(){super(...arguments),this.localize=new n.V(this),this.position=50,this.vertical=!1,this.disabled=!1,this.snapThreshold=12}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver((e=>this.handleResize(e))),this.updateComplete.then((()=>this.resizeObserver.observe(this))),this.detectSize(),this.cachedPositionInPixels=this.percentageToPixels(this.position)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this)}detectSize(){const{width:e,height:t}=this.getBoundingClientRect();this.size=this.vertical?t:e}percentageToPixels(e){return this.size*(e/100)}pixelsToPercentage(e){return e/this.size*100}handleDrag(e){const t="rtl"===this.localize.dir();this.disabled||(e.cancelable&&e.preventDefault(),(0,s.o)(this,{onMove:(e,i)=>{let r=this.vertical?i:e;"end"===this.primary&&(r=this.size-r),this.snap&&this.snap.split(" ").forEach((e=>{let i;i=e.endsWith("%")?this.size*(parseFloat(e)/100):parseFloat(e),t&&!this.vertical&&(i=this.size-i),r>=i-this.snapThreshold&&r<=i+this.snapThreshold&&(r=i)})),this.position=(0,l.u)(this.pixelsToPercentage(r),0,100)},initialEvent:e}))}handleKeyDown(e){if(!this.disabled&&["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key)){let t=this.position;const i=(e.shiftKey?10:1)*("end"===this.primary?-1:1);e.preventDefault(),("ArrowLeft"===e.key&&!this.vertical||"ArrowUp"===e.key&&this.vertical)&&(t-=i),("ArrowRight"===e.key&&!this.vertical||"ArrowDown"===e.key&&this.vertical)&&(t+=i),"Home"===e.key&&(t="end"===this.primary?100:0),"End"===e.key&&(t="end"===this.primary?0:100),this.position=(0,l.u)(t,0,100)}}handleResize(e){const{width:t,height:i}=e[0].contentRect;this.size=this.vertical?i:t,this.primary&&(this.position=this.pixelsToPercentage(this.cachedPositionInPixels))}handlePositionChange(){this.cachedPositionInPixels=this.percentageToPixels(this.position),this.positionInPixels=this.percentageToPixels(this.position),this.emit("sl-reposition")}handlePositionInPixelsChange(){this.position=this.pixelsToPercentage(this.positionInPixels)}handleVerticalChange(){this.detectSize()}render(){const e=this.vertical?"gridTemplateRows":"gridTemplateColumns",t=this.vertical?"gridTemplateColumns":"gridTemplateRows",i="rtl"===this.localize.dir(),r=`\n      clamp(\n        0%,\n        clamp(\n          var(--min),\n          ${this.position}% - var(--divider-width) / 2,\n          var(--max)\n        ),\n        calc(100% - var(--divider-width))\n      )\n    `,a="auto";return"end"===this.primary?i&&!this.vertical?this.style[e]=`${r} var(--divider-width) ${a}`:this.style[e]=`${a} var(--divider-width) ${r}`:i&&!this.vertical?this.style[e]=`${a} var(--divider-width) ${r}`:this.style[e]=`${r} var(--divider-width) ${a}`,this.style[t]="",o.dy`
      <slot name="start" part="panel start" class="start"></slot>

      <div
        part="divider"
        class="divider"
        tabindex=${(0,u.o)(this.disabled?void 0:"0")}
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
    `}};b.styles=a,(0,c.u2)([(0,p.IO)(".divider")],b.prototype,"divider",2),(0,c.u2)([(0,p.Cb)({type:Number,reflect:!0})],b.prototype,"position",2),(0,c.u2)([(0,p.Cb)({attribute:"position-in-pixels",type:Number})],b.prototype,"positionInPixels",2),(0,c.u2)([(0,p.Cb)({type:Boolean,reflect:!0})],b.prototype,"vertical",2),(0,c.u2)([(0,p.Cb)({type:Boolean,reflect:!0})],b.prototype,"disabled",2),(0,c.u2)([(0,p.Cb)()],b.prototype,"primary",2),(0,c.u2)([(0,p.Cb)()],b.prototype,"snap",2),(0,c.u2)([(0,p.Cb)({type:Number,attribute:"snap-threshold"})],b.prototype,"snapThreshold",2),(0,c.u2)([(0,d.Y)("position")],b.prototype,"handlePositionChange",1),(0,c.u2)([(0,d.Y)("positionInPixels")],b.prototype,"handlePositionInPixelsChange",1),(0,c.u2)([(0,d.Y)("vertical")],b.prototype,"handleVerticalChange",1),b.define("sl-split-panel"),i(8513)},6874:(e,t,i)=>{var r=i(9710),o=i(8427),a=o.iv`
  ${r.N}

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
    transition: var(--sl-transition-fast) border-color, var(--sl-transition-fast) background-color;
  }

  .switch__control .switch__thumb {
    width: var(--thumb-size);
    height: var(--thumb-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: 50%;
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    translate: calc((var(--width) - var(--height)) / -2);
    transition: var(--sl-transition-fast) translate ease, var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) border-color, var(--sl-transition-fast) box-shadow;
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
`,s=i(3514),l=i(203),n=i(4703),d=i(1465),h=i(7979),c=i(9832),u=i(2747),p=i(8249),b=i(9900),v=class extends d.P{constructor(){super(...arguments),this.formControlController=new l.pY(this,{value:e=>e.checked?e.value||"on":void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleClick(){this.checked=!this.checked,this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleKeyDown(e){"ArrowLeft"===e.key&&(e.preventDefault(),this.checked=!1,this.emit("sl-change"),this.emit("sl-input")),"ArrowRight"===e.key&&(e.preventDefault(),this.checked=!0,this.emit("sl-change"),this.emit("sl-input"))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){return o.dy`
      <label
        part="base"
        class=${(0,c.$)({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":"small"===this.size,"switch--medium":"medium"===this.size,"switch--large":"large"===this.size})}
      >
        <input
          class="switch__input"
          type="checkbox"
          title=${this.title}
          name=${this.name}
          value=${(0,u.o)(this.value)}
          .checked=${(0,p.a)(this.checked)}
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
    `}};v.styles=a,(0,h.u2)([(0,b.IO)('input[type="checkbox"]')],v.prototype,"input",2),(0,h.u2)([(0,b.SB)()],v.prototype,"hasFocus",2),(0,h.u2)([(0,b.Cb)()],v.prototype,"title",2),(0,h.u2)([(0,b.Cb)()],v.prototype,"name",2),(0,h.u2)([(0,b.Cb)()],v.prototype,"value",2),(0,h.u2)([(0,b.Cb)({reflect:!0})],v.prototype,"size",2),(0,h.u2)([(0,b.Cb)({type:Boolean,reflect:!0})],v.prototype,"disabled",2),(0,h.u2)([(0,b.Cb)({type:Boolean,reflect:!0})],v.prototype,"checked",2),(0,h.u2)([(0,s.L)("checked")],v.prototype,"defaultChecked",2),(0,h.u2)([(0,b.Cb)({reflect:!0})],v.prototype,"form",2),(0,h.u2)([(0,b.Cb)({type:Boolean,reflect:!0})],v.prototype,"required",2),(0,h.u2)([(0,n.Y)("checked",{waitUntilFirstUpdate:!0})],v.prototype,"handleCheckedChange",1),(0,h.u2)([(0,n.Y)("disabled",{waitUntilFirstUpdate:!0})],v.prototype,"handleDisabledChange",1),v.define("sl-switch")},996:(e,t,i)=>{i(4718).h.define("sl-tag"),i(463),i(7482),i(335),i(3385),i(8513),i(6877),i(5249),i(836),i(9699),i(1793),i(4703),i(1465),i(9710),i(7979)},2654:(e,t,i)=>{var r=i(4238),o=i(9710),a=i(8427),s=a.iv`
  ${o.N}
  ${r.n}

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
    transition: var(--sl-transition-fast) color, var(--sl-transition-fast) border, var(--sl-transition-fast) box-shadow,
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
`,l=i(3514),n=i(203),d=i(6167),h=i(4703),c=i(1465),u=i(7979),p=i(9832),b=i(2747),v=i(8249),m=i(9900),g=class extends c.P{constructor(){super(...arguments),this.formControlController=new n.pY(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new d.r(this,"help-text","label"),this.hasFocus=!1,this.title="",this.name="",this.value="",this.size="medium",this.filled=!1,this.label="",this.helpText="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.form="",this.required=!1,this.spellcheck=!0,this.defaultValue=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver((()=>this.setTextareaHeight())),this.updateComplete.then((()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)}))}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this.input)}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}setTextareaHeight(){"auto"===this.resize?(this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=void 0}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(e){return e?("number"==typeof e.top&&(this.input.scrollTop=e.top),void("number"==typeof e.left&&(this.input.scrollLeft=e.left))):{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(e,t,i="none"){this.input.setSelectionRange(e,t,i)}setRangeText(e,t,i,r){this.input.setRangeText(e,t,i,r),this.value!==this.input.value&&(this.value=this.input.value),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),i=!!this.label||!!e,r=!!this.helpText||!!t;return a.dy`
      <div
        part="form-control"
        class=${(0,p.$)({"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--has-label":i,"form-control--has-help-text":r})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${(0,p.$)({textarea:!0,"textarea--small":"small"===this.size,"textarea--medium":"medium"===this.size,"textarea--large":"large"===this.size,"textarea--standard":!this.filled,"textarea--filled":this.filled,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":"none"===this.resize,"textarea--resize-vertical":"vertical"===this.resize,"textarea--resize-auto":"auto"===this.resize})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${(0,b.o)(this.name)}
              .value=${(0,v.a)(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${(0,b.o)(this.placeholder)}
              rows=${(0,b.o)(this.rows)}
              minlength=${(0,b.o)(this.minlength)}
              maxlength=${(0,b.o)(this.maxlength)}
              autocapitalize=${(0,b.o)(this.autocapitalize)}
              autocorrect=${(0,b.o)(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${(0,b.o)(this.spellcheck)}
              enterkeyhint=${(0,b.o)(this.enterkeyhint)}
              inputmode=${(0,b.o)(this.inputmode)}
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
          aria-hidden=${r?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};g.styles=s,(0,u.u2)([(0,m.IO)(".textarea__control")],g.prototype,"input",2),(0,u.u2)([(0,m.SB)()],g.prototype,"hasFocus",2),(0,u.u2)([(0,m.Cb)()],g.prototype,"title",2),(0,u.u2)([(0,m.Cb)()],g.prototype,"name",2),(0,u.u2)([(0,m.Cb)()],g.prototype,"value",2),(0,u.u2)([(0,m.Cb)({reflect:!0})],g.prototype,"size",2),(0,u.u2)([(0,m.Cb)({type:Boolean,reflect:!0})],g.prototype,"filled",2),(0,u.u2)([(0,m.Cb)()],g.prototype,"label",2),(0,u.u2)([(0,m.Cb)({attribute:"help-text"})],g.prototype,"helpText",2),(0,u.u2)([(0,m.Cb)()],g.prototype,"placeholder",2),(0,u.u2)([(0,m.Cb)({type:Number})],g.prototype,"rows",2),(0,u.u2)([(0,m.Cb)()],g.prototype,"resize",2),(0,u.u2)([(0,m.Cb)({type:Boolean,reflect:!0})],g.prototype,"disabled",2),(0,u.u2)([(0,m.Cb)({type:Boolean,reflect:!0})],g.prototype,"readonly",2),(0,u.u2)([(0,m.Cb)({reflect:!0})],g.prototype,"form",2),(0,u.u2)([(0,m.Cb)({type:Boolean,reflect:!0})],g.prototype,"required",2),(0,u.u2)([(0,m.Cb)({type:Number})],g.prototype,"minlength",2),(0,u.u2)([(0,m.Cb)({type:Number})],g.prototype,"maxlength",2),(0,u.u2)([(0,m.Cb)()],g.prototype,"autocapitalize",2),(0,u.u2)([(0,m.Cb)()],g.prototype,"autocorrect",2),(0,u.u2)([(0,m.Cb)()],g.prototype,"autocomplete",2),(0,u.u2)([(0,m.Cb)({type:Boolean})],g.prototype,"autofocus",2),(0,u.u2)([(0,m.Cb)()],g.prototype,"enterkeyhint",2),(0,u.u2)([(0,m.Cb)({type:Boolean,converter:{fromAttribute:e=>!(!e||"false"===e),toAttribute:e=>e?"true":"false"}})],g.prototype,"spellcheck",2),(0,u.u2)([(0,m.Cb)()],g.prototype,"inputmode",2),(0,u.u2)([(0,l.L)()],g.prototype,"defaultValue",2),(0,u.u2)([(0,h.Y)("disabled",{waitUntilFirstUpdate:!0})],g.prototype,"handleDisabledChange",1),(0,u.u2)([(0,h.Y)("rows",{waitUntilFirstUpdate:!0})],g.prototype,"handleRowsChange",1),(0,u.u2)([(0,h.Y)("value",{waitUntilFirstUpdate:!0})],g.prototype,"handleValueChange",1),g.define("sl-textarea")},7680:(e,t,i)=>{var r=i(9710),o=i(8427),a=o.iv`
  ${r.N}

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
    pointer-events: none;
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
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
    user-select: none;
  }
`,s=i(9493),l=i(391),n=i(4867),d=i(6895),h=i(3385),c=i(4703),u=i(1465),p=i(7979),b=i(9832),v=i(9900),m=class extends u.P{constructor(){super(),this.localize=new h.V(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleKeyDown=e=>{this.open&&"Escape"===e.key&&(e.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const e=(0,d.RA)(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout((()=>this.show()),e)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const e=(0,d.RA)(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout((()=>this.hide()),e)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("keydown",this.handleKeyDown),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}connectedCallback(){super.connectedCallback()}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(e){return this.trigger.split(" ").includes(e)}async handleOpenChange(){if(this.open){if(this.disabled)return;this.emit("sl-show"),await(0,d.U_)(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:e,options:t}=(0,l.O8)(this,"tooltip.show",{dir:this.localize.dir()});await(0,d.nv)(this.popup.popup,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),await(0,d.U_)(this.body);const{keyframes:e,options:t}=(0,l.O8)(this,"tooltip.hide",{dir:this.localize.dir()});await(0,d.nv)(this.popup.popup,e,t),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,(0,n.m)(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,(0,n.m)(this,"sl-after-hide")}render(){return o.dy`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${(0,b.$)({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
      >
        ${""}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${""}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open?"polite":"off"}>
          <slot name="content">${this.content}</slot>
        </div>
      </sl-popup>
    `}};m.styles=a,m.dependencies={"sl-popup":s.l},(0,p.u2)([(0,v.IO)("slot:not([name])")],m.prototype,"defaultSlot",2),(0,p.u2)([(0,v.IO)(".tooltip__body")],m.prototype,"body",2),(0,p.u2)([(0,v.IO)("sl-popup")],m.prototype,"popup",2),(0,p.u2)([(0,v.Cb)()],m.prototype,"content",2),(0,p.u2)([(0,v.Cb)()],m.prototype,"placement",2),(0,p.u2)([(0,v.Cb)({type:Boolean,reflect:!0})],m.prototype,"disabled",2),(0,p.u2)([(0,v.Cb)({type:Number})],m.prototype,"distance",2),(0,p.u2)([(0,v.Cb)({type:Boolean,reflect:!0})],m.prototype,"open",2),(0,p.u2)([(0,v.Cb)({type:Number})],m.prototype,"skidding",2),(0,p.u2)([(0,v.Cb)()],m.prototype,"trigger",2),(0,p.u2)([(0,v.Cb)({type:Boolean})],m.prototype,"hoist",2),(0,p.u2)([(0,c.Y)("open",{waitUntilFirstUpdate:!0})],m.prototype,"handleOpenChange",1),(0,p.u2)([(0,c.Y)(["content","distance","hoist","placement","skidding"])],m.prototype,"handleOptionsChange",1),(0,p.u2)([(0,c.Y)("disabled")],m.prototype,"handleDisabledChange",1),(0,l.jx)("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}}),(0,l.jx)("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}}),m.define("sl-tooltip"),i(4476),i(8513)},2536:(e,t,i)=>{i(1900).L.define("sl-visually-hidden"),i(7076),i(1465),i(9710),i(7979)}}]);
//# sourceMappingURL=4454.a74a997d.js.map
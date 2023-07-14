/*! For license information please see sl-image-comparer.29bfd4fa.js.LICENSE.txt */
"use strict";(self.webpackChunk_next_bricks_shoelace=self.webpackChunk_next_bricks_shoelace||[]).push([[154],{7108:(e,t,i)=>{i.r(t),i(704),i(5517)},5517:(e,t,i)=>{i(2969),i(3467);var n=i(4124);function r(e){document.documentElement.classList["dark"===e||"dark-v2"===e?"add":"remove"]("sl-theme-dark")}i(1744),(0,n.t)(i.p),r(document.documentElement.dataset.theme),window.addEventListener("theme.change",(e=>{r(e.detail)}))},738:(e,t,i)=>{i.d(t,{Z:()=>l});var n=i(9601),r=i.n(n),s=i(2609),o=i.n(s)()(r());o.push([e.id,":root,\n.sl-theme-dark{--sl-z-index-drawer:1000;--sl-z-index-dialog:1000;--sl-z-index-dropdown:1050;--sl-z-index-toast:1000;--sl-z-index-tooltip:1070}.sl-toast-stack{width:100%;left:0;right:auto;overflow:initial;pointer-events:none}.sl-toast-stack > sl-alert{pointer-events:all}",""]);const l=o},1744:(e,t,i)=>{var n=i(6062),r=i.n(n),s=i(4036),o=i.n(s),l=i(6793),a=i.n(l),c=i(7892),d=i.n(c),h=i(1173),u=i.n(h),g=i(2464),p=i.n(g),v=i(738),m={};m.styleTagTransform=p(),m.setAttributes=d(),m.insert=a().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=u(),r()(v.Z,m),v.Z&&v.Z.locals&&v.Z.locals},7290:(e,t,i)=>{var n=i(7979),r=i(3030),s=i(4124);const o={caret:'\n    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n      <polyline points="6 9 12 15 18 9"></polyline>\n    </svg>\n  ',check:'\n    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">\n        <g stroke="currentColor" stroke-width="2">\n          <g transform="translate(3.428571, 3.428571)">\n            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>\n            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>\n          </g>\n        </g>\n      </g>\n    </svg>\n  ',"chevron-down":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>\n    </svg>\n  ',"chevron-left":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>\n    </svg>\n  ',"chevron-right":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>\n    </svg>\n  ',eye:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">\n      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>\n      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>\n    </svg>\n  ',"eye-slash":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">\n      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>\n      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>\n      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>\n    </svg>\n  ',eyedropper:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">\n      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>\n    </svg>\n  ',"grip-vertical":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">\n      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>\n    </svg>\n  ',indeterminate:'\n    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">\n        <g stroke="currentColor" stroke-width="2">\n          <g transform="translate(2.285714, 6.857143)">\n            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>\n          </g>\n        </g>\n      </g>\n    </svg>\n  ',"person-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">\n      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>\n    </svg>\n  ',"play-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">\n      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>\n    </svg>\n  ',"pause-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">\n      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>\n    </svg>\n  ',radio:'\n    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <g fill="currentColor">\n          <circle cx="8" cy="8" r="3.42857143"></circle>\n        </g>\n      </g>\n    </svg>\n  ',"star-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">\n      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>\n    </svg>\n  ',"x-lg":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">\n      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>\n    </svg>\n  ',"x-circle-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">\n      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>\n    </svg>\n  '};let l=[{name:"default",resolver:e=>(0,s.b)(`assets/icons/${e}.svg`)},{name:"system",resolver:e=>e in o?`data:image/svg+xml,${encodeURIComponent(o[e])}`:""}],a=[];function c(e){return l.find((t=>t.name===e))}var d=i(8427),h=i(8707),u=i(3005),g=i(5166),p=i(1452),v=d.iv`
  ${p.Z}

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
`;const m=Symbol(),w=Symbol();let f;const b=new Map;let y=class extends g.Z{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(e,t){var i;let n;if(null==t?void 0:t.spriteSheet)return d.dy`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`;try{if(n=await fetch(e,{mode:"cors"}),!n.ok)return 410===n.status?m:w}catch(e){return w}try{const e=document.createElement("div");e.innerHTML=await n.text();const t=e.firstElementChild;if("svg"!==(null==(i=null==t?void 0:t.tagName)?void 0:i.toLowerCase()))return m;f||(f=new DOMParser);const r=f.parseFromString(t.outerHTML,"text/html").body.querySelector("svg");return r?(r.part.add("svg"),document.adoptNode(r)):m}catch(e){return m}}connectedCallback(){super.connectedCallback(),a.push(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){var e;super.disconnectedCallback(),e=this,a=a.filter((t=>t!==e))}getUrl(){const e=c(this.library);return this.name&&e?e.resolver(this.name):this.src}handleLabelChange(){"string"==typeof this.label&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var e;const t=c(this.library),i=this.getUrl();if(!i)return void(this.svg=null);let n=b.get(i);if(n||(n=this.resolveIcon(i,t),b.set(i,n)),!this.initialRender)return;const r=await n;if(r===w&&b.delete(i),i===this.getUrl())if((0,h.hN)(r))this.svg=r;else switch(r){case w:case m:this.svg=null,this.emit("sl-error");break;default:this.svg=r.cloneNode(!0),null==(e=null==t?void 0:t.mutator)||e.call(t,this.svg),this.emit("sl-load")}}render(){return this.svg}};y.styles=v,(0,n.u2)([(0,r.SB)()],y.prototype,"svg",2),(0,n.u2)([(0,r.Cb)({reflect:!0})],y.prototype,"name",2),(0,n.u2)([(0,r.Cb)()],y.prototype,"src",2),(0,n.u2)([(0,r.Cb)()],y.prototype,"label",2),(0,n.u2)([(0,r.Cb)({reflect:!0})],y.prototype,"library",2),(0,n.u2)([(0,u.Y)("label")],y.prototype,"handleLabelChange",1),(0,n.u2)([(0,u.Y)(["name","src","library"])],y.prototype,"setIcon",1),y=(0,n.u2)([(0,r.Mo)("sl-icon")],y)},704:(e,t,i)=>{var n=i(7979),r=(i(7290),i(3409)),s=i(9832),o=i(3030),l=i(8383),a=i(8427),c=i(1321),d=i(2994),h=i(3005),u=i(5166),g=i(1452),p=a.iv`
  ${g.Z}

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
`;let v=class extends u.Z{constructor(){super(...arguments),this.localize=new c.V(this),this.position=50}handleDrag(e){const{width:t}=this.base.getBoundingClientRect(),i="rtl"===this.localize.dir();e.preventDefault(),(0,l.o)(this.base,{onMove:e=>{this.position=parseFloat((0,r.u)(e/t*100,0,100).toFixed(2)),i&&(this.position=100-this.position)},initialEvent:e})}handleKeyDown(e){const t="ltr"===this.localize.dir(),i="rtl"===this.localize.dir();if(["ArrowLeft","ArrowRight","Home","End"].includes(e.key)){const n=e.shiftKey?10:1;let s=this.position;e.preventDefault(),(t&&"ArrowLeft"===e.key||i&&"ArrowRight"===e.key)&&(s-=n),(t&&"ArrowRight"===e.key||i&&"ArrowLeft"===e.key)&&(s+=n),"Home"===e.key&&(s=0),"End"===e.key&&(s=100),s=(0,r.u)(s,0,100),this.position=s}}handlePositionChange(){this.emit("sl-change")}render(){const e="rtl"===this.localize.dir();return a.dy`
      <div
        part="base"
        id="image-comparer"
        class=${(0,s.$)({"image-comparer":!0,"image-comparer--rtl":e})}
        @keydown=${this.handleKeyDown}
      >
        <div class="image-comparer__image">
          <slot name="before" part="before" class="image-comparer__before"></slot>

          <slot
            name="after"
            part="after"
            class="image-comparer__after"
            style=${(0,d.V)({clipPath:e?`inset(0 0 0 ${100-this.position}%)`:`inset(0 ${100-this.position}% 0 0)`})}
          ></slot>
        </div>

        <div
          part="divider"
          class="image-comparer__divider"
          style=${(0,d.V)({left:e?100-this.position+"%":`${this.position}%`})}
          @mousedown=${this.handleDrag}
          @touchstart=${this.handleDrag}
        >
          <slot
            name="handle"
            part="handle"
            class="image-comparer__handle"
            role="scrollbar"
            aria-valuenow=${this.position}
            aria-valuemin="0"
            aria-valuemax="100"
            aria-controls="image-comparer"
            tabindex="0"
          >
            <sl-icon library="system" name="grip-vertical"></sl-icon>
          </slot>
        </div>
      </div>
    `}};v.styles=p,(0,n.u2)([(0,o.IO)(".image-comparer")],v.prototype,"base",2),(0,n.u2)([(0,o.IO)(".image-comparer__handle")],v.prototype,"handle",2),(0,n.u2)([(0,o.Cb)({type:Number,reflect:!0})],v.prototype,"position",2),(0,n.u2)([(0,h.Y)("position",{waitUntilFirstUpdate:!0})],v.prototype,"handlePositionChange",1),v=(0,n.u2)([(0,o.Mo)("sl-image-comparer")],v)},8383:(e,t,i)=>{function n(e,t){function i(i){const n=e.getBoundingClientRect(),r=e.ownerDocument.defaultView,s=n.left+r.pageXOffset,o=n.top+r.pageYOffset,l=i.pageX-s,a=i.pageY-o;(null==t?void 0:t.onMove)&&t.onMove(l,a)}document.addEventListener("pointermove",i,{passive:!0}),document.addEventListener("pointerup",(function e(){document.removeEventListener("pointermove",i),document.removeEventListener("pointerup",e),(null==t?void 0:t.onStop)&&t.onStop()})),(null==t?void 0:t.initialEvent)instanceof PointerEvent&&i(t.initialEvent)}i.d(t,{o:()=>n})},3409:(e,t,i)=>{function n(e,t,i){return n=e<t?t:e>i?i:e,Object.is(n,-0)?0:n;var n}i.d(t,{u:()=>n})},3005:(e,t,i)=>{function n(e,t){const i=Object.assign({waitUntilFirstUpdate:!1},t);return(t,n)=>{const{update:r}=t,s=Array.isArray(e)?e:[e];t.update=function(e){s.forEach((t=>{const r=t;if(e.has(r)){const t=e.get(r),s=this[r];t!==s&&(i.waitUntilFirstUpdate&&!this.hasUpdated||this[n](t,s))}})),r.call(this,e)}}}i.d(t,{Y:()=>n})},1452:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i(8427).iv`
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
`},1321:(e,t,i)=>{i.d(t,{V:()=>h}),i(7979);const n=new Set,r=new MutationObserver(c),s=new Map;let o,l=document.documentElement.dir||"ltr",a=document.documentElement.lang||navigator.language;function c(){l=document.documentElement.dir||"ltr",a=document.documentElement.lang||navigator.language,[...n.keys()].map((e=>{"function"==typeof e.requestUpdate&&e.requestUpdate()}))}r.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});class d{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){n.add(this.host)}hostDisconnected(){n.delete(this.host)}dir(){return`${this.host.dir||l}`.toLowerCase()}lang(){return`${this.host.lang||a}`.toLowerCase()}getTranslationData(e){var t,i;const n=new Intl.Locale(e),r=null==n?void 0:n.language.toLowerCase(),o=null!==(i=null===(t=null==n?void 0:n.region)||void 0===t?void 0:t.toLowerCase())&&void 0!==i?i:"";return{locale:n,language:r,region:o,primary:s.get(`${r}-${o}`),secondary:s.get(r)}}exists(e,t){var i;const{primary:n,secondary:r}=this.getTranslationData(null!==(i=t.lang)&&void 0!==i?i:this.lang());return t=Object.assign({includeFallback:!1},t),!!(n&&n[e]||r&&r[e]||t.includeFallback&&o&&o[e])}term(e,...t){const{primary:i,secondary:n}=this.getTranslationData(this.lang());let r;if(i&&i[e])r=i[e];else if(n&&n[e])r=n[e];else{if(!o||!o[e])return console.error(`No translation found for: ${String(e)}`),String(e);r=o[e]}return"function"==typeof r?r(...t):r}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(e,t)}}!function(...e){e.map((e=>{const t=e.$code.toLowerCase();s.has(t)?s.set(t,Object.assign(Object.assign({},s.get(t)),e)):s.set(t,e),o||(o=e)})),c()}({$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copy:"Copy",currentValue:"Current value",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>0===e?"No options selected":1===e?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"});class h extends d{}},8707:(e,t,i)=>{i.d(t,{OR:()=>o,hN:()=>s,hl:()=>a});var n=i(3311);const{I:r}=n._$LH,s=(e,t)=>void 0===t?void 0!==(null==e?void 0:e._$litType$):(null==e?void 0:e._$litType$)===t,o=e=>void 0===e.strings,l={},a=(e,t=l)=>e._$AH=t},7514:(e,t,i)=>{i.d(t,{XM:()=>r,Xe:()=>s,pX:()=>n});const n={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},r=e=>(...t)=>({_$litDirective$:e,values:t});class s{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}},9832:(e,t,i)=>{i.d(t,{$:()=>s});var n=i(3311),r=i(7514);const s=(0,r.XM)(class extends r.Xe{constructor(e){var t;if(super(e),e.type!==r.pX.ATTRIBUTE||"class"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){var i,r;if(void 0===this.it){this.it=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!(null===(i=this.nt)||void 0===i?void 0:i.has(e))&&this.it.add(e);return this.render(t)}const s=e.element.classList;this.it.forEach((e=>{e in t||(s.remove(e),this.it.delete(e))}));for(const e in t){const i=!!t[e];i===this.it.has(e)||(null===(r=this.nt)||void 0===r?void 0:r.has(e))||(i?(s.add(e),this.it.add(e)):(s.remove(e),this.it.delete(e)))}return n.Jb}})},2994:(e,t,i)=>{i.d(t,{V:()=>l});var n=i(3311),r=i(7514);const s="important",o=" !"+s,l=(0,r.XM)(class extends r.Xe{constructor(e){var t;if(super(e),e.type!==r.pX.ATTRIBUTE||"style"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce(((t,i)=>{const n=e[i];return null==n?t:t+`${i=i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`}),"")}update(e,[t]){const{style:i}=e.element;if(void 0===this.ut){this.ut=new Set;for(const e in t)this.ut.add(e);return this.render(t)}this.ut.forEach((e=>{null==t[e]&&(this.ut.delete(e),e.includes("-")?i.removeProperty(e):i[e]="")}));for(const e in t){const n=t[e];if(null!=n){this.ut.add(e);const t="string"==typeof n&&n.endsWith(o);e.includes("-")||t?i.setProperty(e,t?n.slice(0,-11):n,t?s:""):i[e]=n}}return n.Jb}})}}]);
//# sourceMappingURL=sl-image-comparer.29bfd4fa.js.map
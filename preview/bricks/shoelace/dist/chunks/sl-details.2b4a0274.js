/*! For license information please see sl-details.2b4a0274.js.LICENSE.txt */
"use strict";(self.webpackChunk_next_bricks_shoelace=self.webpackChunk_next_bricks_shoelace||[]).push([[9934],{4784:(e,t,s)=>{s.r(t),s(1941),s(5517)},5517:(e,t,s)=>{s(2969),s(3467);var i=s(4124);function n(e){document.documentElement.classList["dark"===e||"dark-v2"===e?"add":"remove"]("sl-theme-dark")}s(1744),(0,i.t)(s.p),n(document.documentElement.dataset.theme),window.addEventListener("theme.change",(e=>{n(e.detail)}))},738:(e,t,s)=>{s.d(t,{Z:()=>a});var i=s(9601),n=s.n(i),o=s(2609),r=s.n(o)()(n());r.push([e.id,":root,\n.sl-theme-dark{--sl-z-index-drawer:1000;--sl-z-index-dialog:1000;--sl-z-index-dropdown:1050;--sl-z-index-toast:1000;--sl-z-index-tooltip:1070}.sl-toast-stack{width:100%;left:0;right:auto;overflow:initial;pointer-events:none}.sl-toast-stack > sl-alert{pointer-events:all}",""]);const a=r},1744:(e,t,s)=>{var i=s(6062),n=s.n(i),o=s(4036),r=s.n(o),a=s(6793),l=s.n(a),d=s(7892),h=s.n(d),c=s(1173),u=s.n(c),p=s(2464),g=s.n(p),v=s(738),m={};m.styleTagTransform=g(),m.setAttributes=h(),m.insert=l().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=u(),n()(v.Z,m),v.Z&&v.Z.locals&&v.Z.locals},1941:(e,t,s)=>{var i=s(7979),n=(s(7290),s(2868)),o=s(9832),r=s(3030),a=s(4573),l=s(8427),d=s(1321),h=s(7173),c=s(3005),u=s(5166),p=s(1452),g=l.iv`
  ${p.Z}

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
`;let v=class extends u.Z{constructor(){super(...arguments),this.localize=new d.V(this),this.open=!1,this.disabled=!1}firstUpdated(){this.body.hidden=!this.open,this.body.style.height=this.open?"auto":"0"}handleSummaryClick(){this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(e){"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),this.open?this.hide():this.show()),"ArrowUp"!==e.key&&"ArrowLeft"!==e.key||(e.preventDefault(),this.hide()),"ArrowDown"!==e.key&&"ArrowRight"!==e.key||(e.preventDefault(),this.show())}async handleOpenChange(){if(this.open){if(this.emit("sl-show",{cancelable:!0}).defaultPrevented)return void(this.open=!1);await(0,n.U_)(this.body),this.body.hidden=!1;const{keyframes:e,options:t}=(0,a.O8)(this,"details.show",{dir:this.localize.dir()});await(0,n.nv)(this.body,(0,n.GH)(e,this.body.scrollHeight),t),this.body.style.height="auto",this.emit("sl-after-show")}else{if(this.emit("sl-hide",{cancelable:!0}).defaultPrevented)return void(this.open=!0);await(0,n.U_)(this.body);const{keyframes:e,options:t}=(0,a.O8)(this,"details.hide",{dir:this.localize.dir()});await(0,n.nv)(this.body,(0,n.GH)(e,this.body.scrollHeight),t),this.body.hidden=!0,this.body.style.height="auto",this.emit("sl-after-hide")}}async show(){if(!this.open&&!this.disabled)return this.open=!0,(0,h.m)(this,"sl-after-show")}async hide(){if(this.open&&!this.disabled)return this.open=!1,(0,h.m)(this,"sl-after-hide")}render(){const e="rtl"===this.localize.dir();return l.dy`
      <div
        part="base"
        class=${(0,o.$)({details:!0,"details--open":this.open,"details--disabled":this.disabled,"details--rtl":e})}
      >
        <div
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
        </div>

        <div class="details__body" role="region" aria-labelledby="header">
          <slot part="content" id="content" class="details__content"></slot>
        </div>
      </div>
    `}};v.styles=g,(0,i.u2)([(0,r.IO)(".details")],v.prototype,"details",2),(0,i.u2)([(0,r.IO)(".details__header")],v.prototype,"header",2),(0,i.u2)([(0,r.IO)(".details__body")],v.prototype,"body",2),(0,i.u2)([(0,r.IO)(".details__expand-icon-slot")],v.prototype,"expandIconSlot",2),(0,i.u2)([(0,r.Cb)({type:Boolean,reflect:!0})],v.prototype,"open",2),(0,i.u2)([(0,r.Cb)()],v.prototype,"summary",2),(0,i.u2)([(0,r.Cb)({type:Boolean,reflect:!0})],v.prototype,"disabled",2),(0,i.u2)([(0,c.Y)("open",{waitUntilFirstUpdate:!0})],v.prototype,"handleOpenChange",1),v=(0,i.u2)([(0,r.Mo)("sl-details")],v),(0,a.jx)("details.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:250,easing:"linear"}}),(0,a.jx)("details.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:250,easing:"linear"}})},7290:(e,t,s)=>{var i=s(7979),n=s(3030),o=s(4124);const r={caret:'\n    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n      <polyline points="6 9 12 15 18 9"></polyline>\n    </svg>\n  ',check:'\n    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">\n        <g stroke="currentColor" stroke-width="2">\n          <g transform="translate(3.428571, 3.428571)">\n            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>\n            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>\n          </g>\n        </g>\n      </g>\n    </svg>\n  ',"chevron-down":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>\n    </svg>\n  ',"chevron-left":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>\n    </svg>\n  ',"chevron-right":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>\n    </svg>\n  ',eye:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">\n      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>\n      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>\n    </svg>\n  ',"eye-slash":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">\n      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>\n      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>\n      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>\n    </svg>\n  ',eyedropper:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">\n      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>\n    </svg>\n  ',"grip-vertical":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">\n      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>\n    </svg>\n  ',indeterminate:'\n    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">\n        <g stroke="currentColor" stroke-width="2">\n          <g transform="translate(2.285714, 6.857143)">\n            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>\n          </g>\n        </g>\n      </g>\n    </svg>\n  ',"person-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">\n      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>\n    </svg>\n  ',"play-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">\n      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>\n    </svg>\n  ',"pause-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">\n      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>\n    </svg>\n  ',radio:'\n    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <g fill="currentColor">\n          <circle cx="8" cy="8" r="3.42857143"></circle>\n        </g>\n      </g>\n    </svg>\n  ',"star-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">\n      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>\n    </svg>\n  ',"x-lg":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">\n      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>\n    </svg>\n  ',"x-circle-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">\n      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>\n    </svg>\n  '};let a=[{name:"default",resolver:e=>(0,o.b)(`assets/icons/${e}.svg`)},{name:"system",resolver:e=>e in r?`data:image/svg+xml,${encodeURIComponent(r[e])}`:""}],l=[];function d(e){return a.find((t=>t.name===e))}var h=s(8427),c=s(8707),u=s(3005),p=s(5166),g=s(1452),v=h.iv`
  ${g.Z}

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
`;const m=Symbol(),w=Symbol();let f;const b=new Map;let y=class extends p.Z{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(e,t){var s;let i;if(null==t?void 0:t.spriteSheet)return h.dy`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`;try{if(i=await fetch(e,{mode:"cors"}),!i.ok)return 410===i.status?m:w}catch(e){return w}try{const e=document.createElement("div");e.innerHTML=await i.text();const t=e.firstElementChild;if("svg"!==(null==(s=null==t?void 0:t.tagName)?void 0:s.toLowerCase()))return m;f||(f=new DOMParser);const n=f.parseFromString(t.outerHTML,"text/html").body.querySelector("svg");return n?(n.part.add("svg"),document.adoptNode(n)):m}catch(e){return m}}connectedCallback(){super.connectedCallback(),l.push(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){var e;super.disconnectedCallback(),e=this,l=l.filter((t=>t!==e))}getUrl(){const e=d(this.library);return this.name&&e?e.resolver(this.name):this.src}handleLabelChange(){"string"==typeof this.label&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var e;const t=d(this.library),s=this.getUrl();if(!s)return void(this.svg=null);let i=b.get(s);if(i||(i=this.resolveIcon(s,t),b.set(s,i)),!this.initialRender)return;const n=await i;if(n===w&&b.delete(s),s===this.getUrl())if((0,c.hN)(n))this.svg=n;else switch(n){case w:case m:this.svg=null,this.emit("sl-error");break;default:this.svg=n.cloneNode(!0),null==(e=null==t?void 0:t.mutator)||e.call(t,this.svg),this.emit("sl-load")}}render(){return this.svg}};y.styles=v,(0,i.u2)([(0,n.SB)()],y.prototype,"svg",2),(0,i.u2)([(0,n.Cb)({reflect:!0})],y.prototype,"name",2),(0,i.u2)([(0,n.Cb)()],y.prototype,"src",2),(0,i.u2)([(0,n.Cb)()],y.prototype,"label",2),(0,i.u2)([(0,n.Cb)({reflect:!0})],y.prototype,"library",2),(0,i.u2)([(0,u.Y)("label")],y.prototype,"handleLabelChange",1),(0,i.u2)([(0,u.Y)(["name","src","library"])],y.prototype,"setIcon",1),y=(0,i.u2)([(0,n.Mo)("sl-icon")],y)},2868:(e,t,s)=>{function i(e,t,s){return new Promise((i=>{if((null==s?void 0:s.duration)===1/0)throw new Error("Promise-based animations must be finite.");const n=e.animate(t,Object.assign(Object.assign({},s),{duration:o()?0:s.duration}));n.addEventListener("cancel",i,{once:!0}),n.addEventListener("finish",i,{once:!0})}))}function n(e){return(e=e.toString().toLowerCase()).indexOf("ms")>-1?parseFloat(e):e.indexOf("s")>-1?1e3*parseFloat(e):parseFloat(e)}function o(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function r(e){return Promise.all(e.getAnimations().map((e=>new Promise((t=>{const s=requestAnimationFrame(t);e.addEventListener("cancel",(()=>s),{once:!0}),e.addEventListener("finish",(()=>s),{once:!0}),e.cancel()})))))}function a(e,t){return e.map((e=>Object.assign(Object.assign({},e),{height:"auto"===e.height?`${t}px`:e.height})))}s.d(t,{GH:()=>a,RA:()=>n,U_:()=>r,nk:()=>o,nv:()=>i})},7173:(e,t,s)=>{function i(e,t){return new Promise((s=>{e.addEventListener(t,(function i(n){n.target===e&&(e.removeEventListener(t,i),s())}))}))}s.d(t,{m:()=>i})},3005:(e,t,s)=>{function i(e,t){const s=Object.assign({waitUntilFirstUpdate:!1},t);return(t,i)=>{const{update:n}=t,o=Array.isArray(e)?e:[e];t.update=function(e){o.forEach((t=>{const n=t;if(e.has(n)){const t=e.get(n),o=this[n];t!==o&&(s.waitUntilFirstUpdate&&!this.hasUpdated||this[i](t,o))}})),n.call(this,e)}}}s.d(t,{Y:()=>i})},1452:(e,t,s)=>{s.d(t,{Z:()=>i});const i=s(8427).iv`
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
`},4573:(e,t,s)=>{s.d(t,{O8:()=>a,jx:()=>r}),s(7979);const i=new Map,n=new WeakMap;function o(e,t){return"rtl"===t.toLowerCase()?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function r(e,t){i.set(e,function(e){return null!=e?e:{keyframes:[],options:{duration:0}}}(t))}function a(e,t,s){const r=n.get(e);if(null==r?void 0:r[t])return o(r[t],s.dir);const a=i.get(t);return a?o(a,s.dir):{keyframes:[],options:{duration:0}}}},1321:(e,t,s)=>{s.d(t,{V:()=>c}),s(7979);const i=new Set,n=new MutationObserver(d),o=new Map;let r,a=document.documentElement.dir||"ltr",l=document.documentElement.lang||navigator.language;function d(){a=document.documentElement.dir||"ltr",l=document.documentElement.lang||navigator.language,[...i.keys()].map((e=>{"function"==typeof e.requestUpdate&&e.requestUpdate()}))}n.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});class h{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){i.add(this.host)}hostDisconnected(){i.delete(this.host)}dir(){return`${this.host.dir||a}`.toLowerCase()}lang(){return`${this.host.lang||l}`.toLowerCase()}getTranslationData(e){var t,s;const i=new Intl.Locale(e),n=null==i?void 0:i.language.toLowerCase(),r=null!==(s=null===(t=null==i?void 0:i.region)||void 0===t?void 0:t.toLowerCase())&&void 0!==s?s:"";return{locale:i,language:n,region:r,primary:o.get(`${n}-${r}`),secondary:o.get(n)}}exists(e,t){var s;const{primary:i,secondary:n}=this.getTranslationData(null!==(s=t.lang)&&void 0!==s?s:this.lang());return t=Object.assign({includeFallback:!1},t),!!(i&&i[e]||n&&n[e]||t.includeFallback&&r&&r[e])}term(e,...t){const{primary:s,secondary:i}=this.getTranslationData(this.lang());let n;if(s&&s[e])n=s[e];else if(i&&i[e])n=i[e];else{if(!r||!r[e])return console.error(`No translation found for: ${String(e)}`),String(e);n=r[e]}return"function"==typeof n?n(...t):n}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,s){return new Intl.RelativeTimeFormat(this.lang(),s).format(e,t)}}!function(...e){e.map((e=>{const t=e.$code.toLowerCase();o.has(t)?o.set(t,Object.assign(Object.assign({},o.get(t)),e)):o.set(t,e),r||(r=e)})),d()}({$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copy:"Copy",currentValue:"Current value",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>0===e?"No options selected":1===e?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"});class c extends h{}},8707:(e,t,s)=>{s.d(t,{OR:()=>r,hN:()=>o,hl:()=>l});var i=s(3311);const{I:n}=i._$LH,o=(e,t)=>void 0===t?void 0!==(null==e?void 0:e._$litType$):(null==e?void 0:e._$litType$)===t,r=e=>void 0===e.strings,a={},l=(e,t=a)=>e._$AH=t},7514:(e,t,s)=>{s.d(t,{XM:()=>n,Xe:()=>o,pX:()=>i});const i={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},n=e=>(...t)=>({_$litDirective$:e,values:t});class o{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,s){this._$Ct=e,this._$AM=t,this._$Ci=s}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}},9832:(e,t,s)=>{s.d(t,{$:()=>o});var i=s(3311),n=s(7514);const o=(0,n.XM)(class extends n.Xe{constructor(e){var t;if(super(e),e.type!==n.pX.ATTRIBUTE||"class"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){var s,n;if(void 0===this.it){this.it=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!(null===(s=this.nt)||void 0===s?void 0:s.has(e))&&this.it.add(e);return this.render(t)}const o=e.element.classList;this.it.forEach((e=>{e in t||(o.remove(e),this.it.delete(e))}));for(const e in t){const s=!!t[e];s===this.it.has(e)||(null===(n=this.nt)||void 0===n?void 0:n.has(e))||(s?(o.add(e),this.it.add(e)):(o.remove(e),this.it.delete(e)))}return i.Jb}})}}]);
//# sourceMappingURL=sl-details.2b4a0274.js.map
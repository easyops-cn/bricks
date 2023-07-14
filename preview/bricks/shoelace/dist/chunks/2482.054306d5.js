/*! For license information please see 2482.054306d5.js.LICENSE.txt */
"use strict";(self.webpackChunk_next_bricks_shoelace=self.webpackChunk_next_bricks_shoelace||[]).push([[2482],{8033:(e,t,s)=>{s.d(t,{Z:()=>c});var i=s(7979),o=s(3030),r=s(8427),a=s(5166),n=s(1452),l=r.iv`
  ${n.Z}

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
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;let c=class extends a.Z{static isCarouselItem(e){return e instanceof Element&&"slide"===e.getAttribute("aria-roledescription")}connectedCallback(){super.connectedCallback(),this.setAttribute("role","group")}render(){return r.dy` <slot></slot> `}};c.styles=l,c=(0,i.u2)([(0,o.Mo)("sl-carousel-item")],c)},2482:(e,t,s)=>{var i=s(7979);s(7290);class o{constructor(e,t){this.timerId=0,this.activeInteractions=0,this.paused=!1,this.stopped=!0,this.pause=()=>{this.activeInteractions++||(this.paused=!0,this.host.requestUpdate())},this.resume=()=>{--this.activeInteractions||(this.paused=!1,this.host.requestUpdate())},e.addController(this),this.host=e,this.tickCallback=t}hostConnected(){this.host.addEventListener("mouseenter",this.pause),this.host.addEventListener("mouseleave",this.resume),this.host.addEventListener("focusin",this.pause),this.host.addEventListener("focusout",this.resume),this.host.addEventListener("touchstart",this.pause,{passive:!0}),this.host.addEventListener("touchend",this.resume)}hostDisconnected(){this.stop(),this.host.removeEventListener("mouseenter",this.pause),this.host.removeEventListener("mouseleave",this.resume),this.host.removeEventListener("focusin",this.pause),this.host.removeEventListener("focusout",this.resume),this.host.removeEventListener("touchstart",this.pause),this.host.removeEventListener("touchend",this.resume)}start(e){this.stop(),this.stopped=!1,this.timerId=window.setInterval((()=>{this.paused||this.tickCallback()}),e)}stop(){clearInterval(this.timerId),this.stopped=!0,this.host.requestUpdate()}}var r=s(3409),a=s(9832),n=s(3030),l=s(8427),c=s(1321),h=s(2868);const d=Symbol();var u=s(7173);class p{constructor(e){this.pointers=new Set,this.dragging=!1,this.scrolling=!1,this.mouseDragging=!1,this.handleScroll=()=>{this.scrolling||(this.scrolling=!0,this.host.requestUpdate()),this.handleScrollEnd()},this.handlePointerDown=e=>{"touch"!==e.pointerType&&(this.pointers.add(e.pointerId),this.mouseDragging&&!this.dragging&&0===e.button&&(e.preventDefault(),this.host.scrollContainer.addEventListener("pointermove",this.handlePointerMove)))},this.handlePointerMove=e=>{const t=this.host.scrollContainer,s=!!e.movementX||!!e.movementY;!this.dragging&&s?(t.setPointerCapture(e.pointerId),this.handleDragStart()):t.hasPointerCapture(e.pointerId)&&this.handleDrag(e)},this.handlePointerUp=e=>{this.pointers.delete(e.pointerId),this.host.scrollContainer.releasePointerCapture(e.pointerId),0===this.pointers.size&&this.handleDragEnd()},this.handleTouchEnd=e=>{for(const t of e.changedTouches)this.pointers.delete(t.identifier)},this.handleTouchStart=e=>{for(const t of e.touches)this.pointers.add(t.identifier)},this.host=e,e.addController(this)}async hostConnected(){const e=this.host;await e.updateComplete;const t=e.scrollContainer;t.addEventListener("scroll",this.handleScroll,{passive:!0}),t.addEventListener("pointerdown",this.handlePointerDown),t.addEventListener("pointerup",this.handlePointerUp),t.addEventListener("pointercancel",this.handlePointerUp),t.addEventListener("touchstart",this.handleTouchStart,{passive:!0}),t.addEventListener("touchend",this.handleTouchEnd)}hostDisconnected(){const e=this.host.scrollContainer;e.removeEventListener("scroll",this.handleScroll),e.removeEventListener("pointerdown",this.handlePointerDown),e.removeEventListener("pointerup",this.handlePointerUp),e.removeEventListener("pointercancel",this.handlePointerUp),e.removeEventListener("touchstart",this.handleTouchStart),e.removeEventListener("touchend",this.handleTouchEnd)}handleScrollEnd(){this.pointers.size?this.handleScrollEnd():(this.scrolling=!1,this.host.scrollContainer.dispatchEvent(new CustomEvent("scrollend",{bubbles:!1,cancelable:!1})),this.host.requestUpdate())}handleDragStart(){const e=this.host;this.dragging=!0,e.scrollContainer.style.setProperty("scroll-snap-type","unset"),e.requestUpdate()}handleDrag(e){this.host.scrollContainer.scrollBy({left:-e.movementX,top:-e.movementY})}async handleDragEnd(){const e=this.host,t=e.scrollContainer;t.removeEventListener("pointermove",this.handlePointerMove),this.dragging=!1;const s=t.scrollLeft,i=t.scrollTop;t.style.removeProperty("scroll-snap-type");const o=t.scrollLeft,r=t.scrollTop;t.style.setProperty("scroll-snap-type","unset"),t.scrollTo({left:s,top:i,behavior:"auto"}),t.scrollTo({left:o,top:r,behavior:(0,h.nk)()?"auto":"smooth"}),this.scrolling&&await(0,u.m)(t,"scrollend"),t.style.removeProperty("scroll-snap-type"),e.requestUpdate()}}(0,i.u2)([(100,(e,t,s)=>{const i=s.value;s.value=function(...e){clearTimeout(this[d]),this[d]=window.setTimeout((()=>{i.apply(this,e)}),100)}})],p.prototype,"handleScrollEnd",1);var g=s(3005),v=s(5166),m=s(8033),b=s(1452),y=l.iv`
  ${b.Z}

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

  .carousel__slides--dragging,
  .carousel__slides--dropping {
    scroll-snap-type: unset;
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
`;let f=class extends v.Z{constructor(){super(...arguments),this.loop=!1,this.navigation=!1,this.pagination=!1,this.autoplay=!1,this.autoplayInterval=3e3,this.slidesPerPage=1,this.slidesPerMove=1,this.orientation="horizontal",this.mouseDragging=!1,this.activeSlide=0,this.autoplayController=new o(this,(()=>this.next())),this.scrollController=new p(this),this.slides=this.getElementsByTagName("sl-carousel-item"),this.intersectionObserverEntries=new Map,this.localize=new c.V(this),this.handleSlotChange=e=>{e.some((e=>[...e.addedNodes,...e.removedNodes].some((e=>m.Z.isCarouselItem(e)&&!e.hasAttribute("data-clone")))))&&this.initializeSlides(),this.requestUpdate()}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","region"),this.setAttribute("aria-label",this.localize.term("carousel"));const e=new IntersectionObserver((e=>{e.forEach((e=>{this.intersectionObserverEntries.set(e.target,e);const t=e.target;t.toggleAttribute("inert",!e.isIntersecting),t.classList.toggle("--in-view",e.isIntersecting),t.setAttribute("aria-hidden",e.isIntersecting?"false":"true")}))}),{root:this,threshold:.6});this.intersectionObserver=e,e.takeRecords().forEach((e=>{this.intersectionObserverEntries.set(e.target,e)}))}disconnectedCallback(){super.disconnectedCallback(),this.intersectionObserver.disconnect(),this.mutationObserver.disconnect()}firstUpdated(){this.initializeSlides(),this.mutationObserver=new MutationObserver(this.handleSlotChange),this.mutationObserver.observe(this,{childList:!0,subtree:!1})}getPageCount(){return Math.ceil(this.getSlides().length/this.slidesPerPage)}getCurrentPage(){return Math.floor(this.activeSlide/this.slidesPerPage)}getSlides({excludeClones:e=!0}={}){return[...this.slides].filter((t=>!e||!t.hasAttribute("data-clone")))}handleKeyDown(e){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key)){const t=e.target,s="rtl"===this.localize.dir(),i=null!==t.closest('[part~="pagination-item"]'),o="ArrowDown"===e.key||!s&&"ArrowRight"===e.key||s&&"ArrowLeft"===e.key,r="ArrowUp"===e.key||!s&&"ArrowLeft"===e.key||s&&"ArrowRight"===e.key;e.preventDefault(),r&&this.previous(),o&&this.next(),"Home"===e.key&&this.goToSlide(0),"End"===e.key&&this.goToSlide(this.getSlides().length-1),i&&this.updateComplete.then((()=>{var e;const t=null==(e=this.shadowRoot)?void 0:e.querySelector('[part~="pagination-item--active"]');t&&t.focus()}))}}handleScrollEnd(){const e=this.getSlides(),t=[...this.intersectionObserverEntries.values()].find((e=>e.isIntersecting));if(this.loop&&(null==t?void 0:t.target.hasAttribute("data-clone"))){const e=Number(t.target.getAttribute("data-clone"));this.goToSlide(e,"auto")}else t&&(this.activeSlide=e.indexOf(t.target))}initializeSlides(){const e=this.getSlides(),t=this.intersectionObserver;if(this.intersectionObserverEntries.clear(),this.getSlides({excludeClones:!1}).forEach(((e,s)=>{t.unobserve(e),e.classList.remove("--in-view"),e.classList.remove("--is-active"),e.setAttribute("aria-label",this.localize.term("slideNum",s+1)),e.hasAttribute("data-clone")&&e.remove()})),this.loop){const t=this.slidesPerPage,s=e.slice(-t),i=e.slice(0,t);s.reverse().forEach(((t,s)=>{const i=t.cloneNode(!0);i.setAttribute("data-clone",String(e.length-s-1)),this.prepend(i)})),i.forEach(((e,t)=>{const s=e.cloneNode(!0);s.setAttribute("data-clone",String(t)),this.append(s)}))}this.getSlides({excludeClones:!1}).forEach((e=>{t.observe(e)})),this.goToSlide(this.activeSlide,"auto")}handelSlideChange(){const e=this.getSlides();e.forEach(((e,t)=>{e.classList.toggle("--is-active",t===this.activeSlide)})),this.hasUpdated&&this.emit("sl-slide-change",{detail:{index:this.activeSlide,slide:e[this.activeSlide]}})}handleSlidesPerMoveChange(){const e=this.getSlides({excludeClones:!1}),t=this.slidesPerMove;e.forEach(((e,s)=>{Math.abs(s-t)%t==0?e.style.removeProperty("scroll-snap-align"):e.style.setProperty("scroll-snap-align","none")}))}handleAutoplayChange(){this.autoplayController.stop(),this.autoplay&&this.autoplayController.start(this.autoplayInterval)}handleMouseDraggingChange(){this.scrollController.mouseDragging=this.mouseDragging}previous(e="smooth"){this.goToSlide(this.activeSlide-this.slidesPerMove,e)}next(e="smooth"){this.goToSlide(this.activeSlide+this.slidesPerMove,e)}goToSlide(e,t="smooth"){const{slidesPerPage:s,loop:i,scrollContainer:o}=this,a=this.getSlides(),n=this.getSlides({excludeClones:!1}),l=(e+a.length)%a.length;this.activeSlide=l;const c=n[(0,r.u)(e+(i?s:0),0,n.length-1)],d=o.getBoundingClientRect(),u=c.getBoundingClientRect();o.scrollTo({left:u.left-d.left+o.scrollLeft,top:u.top-d.top+o.scrollTop,behavior:(0,h.nk)()?"auto":t})}render(){const{scrollController:e,slidesPerPage:t}=this,s=this.getPageCount(),i=this.getCurrentPage(),o=this.loop||i>0,r=this.loop||i<s-1,n="ltr"===this.localize.dir();return l.dy`
      <div part="base" class="carousel">
        <div
          id="scroll-container"
          part="scroll-container"
          class="${(0,a.$)({carousel__slides:!0,"carousel__slides--horizontal":"horizontal"===this.orientation,"carousel__slides--vertical":"vertical"===this.orientation})}"
          style="--slides-per-page: ${this.slidesPerPage};"
          aria-busy="${e.scrolling?"true":"false"}"
          aria-atomic="true"
          tabindex="0"
          @keydown=${this.handleKeyDown}
          @scrollend=${this.handleScrollEnd}
        >
          <slot></slot>
        </div>

        ${this.navigation?l.dy`
              <div part="navigation" class="carousel__navigation">
                <button
                  part="navigation-button navigation-button--previous"
                  class="${(0,a.$)({"carousel__navigation-button":!0,"carousel__navigation-button--previous":!0,"carousel__navigation-button--disabled":!o})}"
                  aria-label="${this.localize.term("previousSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${o?"false":"true"}"
                  @click=${o?()=>this.previous():null}
                >
                  <slot name="previous-icon">
                    <sl-icon library="system" name="${n?"chevron-left":"chevron-right"}"></sl-icon>
                  </slot>
                </button>

                <button
                  part="navigation-button navigation-button--next"
                  class=${(0,a.$)({"carousel__navigation-button":!0,"carousel__navigation-button--next":!0,"carousel__navigation-button--disabled":!r})}
                  aria-label="${this.localize.term("nextSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${r?"false":"true"}"
                  @click=${r?()=>this.next():null}
                >
                  <slot name="next-icon">
                    <sl-icon library="system" name="${n?"chevron-right":"chevron-left"}"></sl-icon>
                  </slot>
                </button>
              </div>
            `:""}
        ${this.pagination?l.dy`
              <div part="pagination" role="tablist" class="carousel__pagination" aria-controls="scroll-container">
                ${function*(e,t){if(void 0!==e){let s=0;for(const i of e)yield t(i,s++)}}(function*(e,t,s=1){const i=void 0===t?0:e;null!=t||(t=e);for(let e=i;s>0?e<t:t<e;e+=s)yield e}(s),(e=>{const o=e===i;return l.dy`
                    <button
                      part="pagination-item ${o?"pagination-item--active":""}"
                      class="${(0,a.$)({"carousel__pagination-item":!0,"carousel__pagination-item--active":o})}"
                      role="tab"
                      aria-selected="${o?"true":"false"}"
                      aria-label="${this.localize.term("goToSlide",e+1,s)}"
                      tabindex=${o?"0":"-1"}
                      @click=${()=>this.goToSlide(e*t)}
                      @keydown=${this.handleKeyDown}
                    ></button>
                  `}))}
              </div>
            `:""}
      </div>
    `}};f.styles=y,(0,i.u2)([(0,n.Cb)({type:Boolean,reflect:!0})],f.prototype,"loop",2),(0,i.u2)([(0,n.Cb)({type:Boolean,reflect:!0})],f.prototype,"navigation",2),(0,i.u2)([(0,n.Cb)({type:Boolean,reflect:!0})],f.prototype,"pagination",2),(0,i.u2)([(0,n.Cb)({type:Boolean,reflect:!0})],f.prototype,"autoplay",2),(0,i.u2)([(0,n.Cb)({type:Number,attribute:"autoplay-interval"})],f.prototype,"autoplayInterval",2),(0,i.u2)([(0,n.Cb)({type:Number,attribute:"slides-per-page"})],f.prototype,"slidesPerPage",2),(0,i.u2)([(0,n.Cb)({type:Number,attribute:"slides-per-move"})],f.prototype,"slidesPerMove",2),(0,i.u2)([(0,n.Cb)()],f.prototype,"orientation",2),(0,i.u2)([(0,n.Cb)({type:Boolean,reflect:!0,attribute:"mouse-dragging"})],f.prototype,"mouseDragging",2),(0,i.u2)([(0,n.IO)("slot:not([name])")],f.prototype,"defaultSlot",2),(0,i.u2)([(0,n.IO)(".carousel__slides")],f.prototype,"scrollContainer",2),(0,i.u2)([(0,n.IO)(".carousel__pagination")],f.prototype,"paginationContainer",2),(0,i.u2)([(0,n.SB)()],f.prototype,"activeSlide",2),(0,i.u2)([(0,g.Y)("loop",{waitUntilFirstUpdate:!0}),(0,g.Y)("slidesPerPage",{waitUntilFirstUpdate:!0})],f.prototype,"initializeSlides",1),(0,i.u2)([(0,g.Y)("activeSlide")],f.prototype,"handelSlideChange",1),(0,i.u2)([(0,g.Y)("slidesPerMove")],f.prototype,"handleSlidesPerMoveChange",1),(0,i.u2)([(0,g.Y)("autoplay")],f.prototype,"handleAutoplayChange",1),(0,i.u2)([(0,g.Y)("mouseDragging")],f.prototype,"handleMouseDraggingChange",1),f=(0,i.u2)([(0,n.Mo)("sl-carousel")],f)}}]);
//# sourceMappingURL=2482.054306d5.js.map
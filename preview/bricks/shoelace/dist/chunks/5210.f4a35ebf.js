/*! For license information please see 5210.f4a35ebf.js.LICENSE.txt */
"use strict";(self.webpackChunk_next_bricks_shoelace=self.webpackChunk_next_bricks_shoelace||[]).push([[5210],{3351:(e,t,s)=>{var i=s(7324),o=s(5024),r=o.AH`
  ${i.$}

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
`,n=s(7489),a=class extends n.f{connectedCallback(){super.connectedCallback(),this.setAttribute("role","group")}render(){return o.qy` <slot></slot> `}};a.styles=r,a.define("sl-carousel-item"),s(7012)},2372:(e,t,s)=>{var i=s(9162),o=class{constructor(e,t){this.timerId=0,this.activeInteractions=0,this.paused=!1,this.stopped=!0,this.pause=()=>{this.activeInteractions++||(this.paused=!0,this.host.requestUpdate())},this.resume=()=>{--this.activeInteractions||(this.paused=!1,this.host.requestUpdate())},e.addController(this),this.host=e,this.tickCallback=t}hostConnected(){this.host.addEventListener("mouseenter",this.pause),this.host.addEventListener("mouseleave",this.resume),this.host.addEventListener("focusin",this.pause),this.host.addEventListener("focusout",this.resume),this.host.addEventListener("touchstart",this.pause,{passive:!0}),this.host.addEventListener("touchend",this.resume)}hostDisconnected(){this.stop(),this.host.removeEventListener("mouseenter",this.pause),this.host.removeEventListener("mouseleave",this.resume),this.host.removeEventListener("focusin",this.pause),this.host.removeEventListener("focusout",this.resume),this.host.removeEventListener("touchstart",this.pause),this.host.removeEventListener("touchend",this.resume)}start(e){this.stop(),this.stopped=!1,this.timerId=window.setInterval((()=>{this.paused||this.tickCallback()}),e)}stop(){clearInterval(this.timerId),this.stopped=!0,this.host.requestUpdate()}},r=s(7324),n=s(5024),a=n.AH`
  ${r.$}

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
`,l=s(1060),c=s(5226),d=class{constructor(e){this.dragging=!1,this.scrolling=!1,this.mouseDragging=!1,this.handleScroll=()=>{this.scrolling||(this.scrolling=!0,this.host.requestUpdate())},this.handleScrollEnd=()=>{this.scrolling&&!this.dragging&&(this.scrolling=!1,this.host.requestUpdate())},this.handlePointerDown=e=>{"touch"!==e.pointerType&&this.mouseDragging&&0===e.button&&(e.preventDefault(),this.host.scrollContainer.addEventListener("pointermove",this.handlePointerMove))},this.handlePointerMove=e=>{const t=this.host.scrollContainer,s=!!e.movementX||!!e.movementY;!this.dragging&&s?(t.setPointerCapture(e.pointerId),this.handleDragStart()):t.hasPointerCapture(e.pointerId)&&this.handleDrag(e)},this.handlePointerUp=e=>{this.host.scrollContainer.releasePointerCapture(e.pointerId),this.handleDragEnd()},this.host=e,e.addController(this)}async hostConnected(){const e=this.host;await e.updateComplete;const t=e.scrollContainer;t.addEventListener("scroll",this.handleScroll,{passive:!0}),t.addEventListener("scrollend",this.handleScrollEnd,!0),t.addEventListener("pointerdown",this.handlePointerDown),t.addEventListener("pointerup",this.handlePointerUp),t.addEventListener("pointercancel",this.handlePointerUp)}hostDisconnected(){const e=this.host.scrollContainer;e.removeEventListener("scroll",this.handleScroll),e.removeEventListener("scrollend",this.handleScrollEnd,!0),e.removeEventListener("pointerdown",this.handlePointerDown),e.removeEventListener("pointerup",this.handlePointerUp),e.removeEventListener("pointercancel",this.handlePointerUp)}handleDragStart(){const e=this.host;this.dragging=!0,e.scrollContainer.style.setProperty("scroll-snap-type","unset"),e.requestUpdate()}handleDrag(e){this.host.scrollContainer.scrollBy({left:-e.movementX,top:-e.movementY})}handleDragEnd(){const e=this.host,t=e.scrollContainer;t.removeEventListener("pointermove",this.handlePointerMove);const s=t.scrollLeft,i=t.scrollTop;t.style.removeProperty("scroll-snap-type");const o=t.scrollLeft,r=t.scrollTop;t.style.setProperty("scroll-snap-type","unset"),t.scrollTo({left:s,top:i,behavior:"auto"}),t.scrollTo({left:o,top:r,behavior:(0,c.Oe)()?"auto":"smooth"}),requestAnimationFrame((async()=>{s===o&&i===r||await(0,l.l)(t,"scrollend"),t.style.removeProperty("scroll-snap-type"),this.dragging=!1,e.requestUpdate()}))}},h=s(333),u=s(7352),p=s(5794),g=s(7489),v=s(7012),m=s(3788),b=s(2489),y=(e,t)=>{let s=0;return function(...i){window.clearTimeout(s),s=window.setTimeout((()=>{e.call(this,...i)}),t)}},f=(e,t,s)=>{const i=e[t];e[t]=function(...e){i.call(this,...e),s.call(this,i,...e)}};if(!("onscrollend"in window)){const e=new Set,t=new WeakMap,s=t=>{e.add(t.pointerId)},i=t=>{e.delete(t.pointerId)};document.addEventListener("pointerdown",s),document.addEventListener("pointerup",i),f(EventTarget.prototype,"addEventListener",(function(s,i){if("scroll"!==i)return;const o=y((()=>{e.size?o():this.dispatchEvent(new Event("scrollend"))}),100);s.call(this,"scroll",o,{passive:!0}),t.set(this,o)})),f(EventTarget.prototype,"removeEventListener",(function(e,s){if("scroll"!==s)return;const i=t.get(this);i&&e.call(this,"scroll",i,{passive:!0})}))}var w=class extends g.f{constructor(){super(...arguments),this.loop=!1,this.navigation=!1,this.pagination=!1,this.autoplay=!1,this.autoplayInterval=3e3,this.slidesPerPage=1,this.slidesPerMove=1,this.orientation="horizontal",this.mouseDragging=!1,this.activeSlide=0,this.autoplayController=new o(this,(()=>this.next())),this.scrollController=new d(this),this.intersectionObserverEntries=new Map,this.localize=new h.c(this),this.handleSlotChange=e=>{e.some((e=>[...e.addedNodes,...e.removedNodes].some((e=>this.isCarouselItem(e)&&!e.hasAttribute("data-clone")))))&&this.initializeSlides(),this.requestUpdate()}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","region"),this.setAttribute("aria-label",this.localize.term("carousel"));const e=new IntersectionObserver((e=>{e.forEach((e=>{this.intersectionObserverEntries.set(e.target,e);const t=e.target;t.toggleAttribute("inert",!e.isIntersecting),t.classList.toggle("--in-view",e.isIntersecting),t.setAttribute("aria-hidden",e.isIntersecting?"false":"true")}))}),{root:this,threshold:.6});this.intersectionObserver=e,e.takeRecords().forEach((e=>{this.intersectionObserverEntries.set(e.target,e)}))}disconnectedCallback(){super.disconnectedCallback(),this.intersectionObserver.disconnect(),this.mutationObserver.disconnect()}firstUpdated(){this.initializeSlides(),this.mutationObserver=new MutationObserver(this.handleSlotChange),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}willUpdate(e){(e.has("slidesPerMove")||e.has("slidesPerPage"))&&(this.slidesPerMove=Math.min(this.slidesPerMove,this.slidesPerPage))}getPageCount(){const e=this.getSlides().length,{slidesPerPage:t,slidesPerMove:s,loop:i}=this,o=i?e/s:(e-t)/s+1;return Math.ceil(o)}getCurrentPage(){return Math.ceil(this.activeSlide/this.slidesPerMove)}canScrollNext(){return this.loop||this.getCurrentPage()<this.getPageCount()-1}canScrollPrev(){return this.loop||this.getCurrentPage()>0}getSlides({excludeClones:e=!0}={}){return[...this.children].filter((t=>this.isCarouselItem(t)&&(!e||!t.hasAttribute("data-clone"))))}handleKeyDown(e){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key)){const t=e.target,s="rtl"===this.localize.dir(),i=null!==t.closest('[part~="pagination-item"]'),o="ArrowDown"===e.key||!s&&"ArrowRight"===e.key||s&&"ArrowLeft"===e.key,r="ArrowUp"===e.key||!s&&"ArrowLeft"===e.key||s&&"ArrowRight"===e.key;e.preventDefault(),r&&this.previous(),o&&this.next(),"Home"===e.key&&this.goToSlide(0),"End"===e.key&&this.goToSlide(this.getSlides().length-1),i&&this.updateComplete.then((()=>{var e;const t=null==(e=this.shadowRoot)?void 0:e.querySelector('[part~="pagination-item--active"]');t&&t.focus()}))}}handleScrollEnd(){const e=this.getSlides(),t=[...this.intersectionObserverEntries.values()].find((e=>e.isIntersecting));if(this.loop&&(null==t?void 0:t.target.hasAttribute("data-clone"))){const e=Number(t.target.getAttribute("data-clone"));this.goToSlide(e,"auto")}else if(t){const s=e.indexOf(t.target);this.activeSlide=Math.ceil(s/this.slidesPerMove)*this.slidesPerMove}}isCarouselItem(e){return e instanceof Element&&"sl-carousel-item"===e.tagName.toLowerCase()}initializeSlides(){const e=this.intersectionObserver;this.intersectionObserverEntries.clear(),this.getSlides({excludeClones:!1}).forEach(((t,s)=>{e.unobserve(t),t.classList.remove("--in-view"),t.classList.remove("--is-active"),t.setAttribute("aria-label",this.localize.term("slideNum",s+1)),t.hasAttribute("data-clone")&&t.remove()})),this.updateSlidesSnap(),this.loop&&this.createClones(),this.getSlides({excludeClones:!1}).forEach((t=>{e.observe(t)})),this.goToSlide(this.activeSlide,"auto")}createClones(){const e=this.getSlides(),t=this.slidesPerPage,s=e.slice(-t),i=e.slice(0,t);s.reverse().forEach(((t,s)=>{const i=t.cloneNode(!0);i.setAttribute("data-clone",String(e.length-s-1)),this.prepend(i)})),i.forEach(((e,t)=>{const s=e.cloneNode(!0);s.setAttribute("data-clone",String(t)),this.append(s)}))}handelSlideChange(){const e=this.getSlides();e.forEach(((e,t)=>{e.classList.toggle("--is-active",t===this.activeSlide)})),this.hasUpdated&&this.emit("sl-slide-change",{detail:{index:this.activeSlide,slide:e[this.activeSlide]}})}updateSlidesSnap(){const e=this.getSlides(),t=this.slidesPerMove;e.forEach(((e,s)=>{(s+t)%t==0?e.style.removeProperty("scroll-snap-align"):e.style.setProperty("scroll-snap-align","none")}))}handleAutoplayChange(){this.autoplayController.stop(),this.autoplay&&this.autoplayController.start(this.autoplayInterval)}handleMouseDraggingChange(){this.scrollController.mouseDragging=this.mouseDragging}previous(e="smooth"){this.goToSlide(this.activeSlide-this.slidesPerMove,e)}next(e="smooth"){this.goToSlide(this.activeSlide+this.slidesPerMove,e)}goToSlide(e,t="smooth"){const{slidesPerPage:s,loop:o,scrollContainer:r}=this,n=this.getSlides(),a=this.getSlides({excludeClones:!1});if(!n.length)return;const l=o?(e+n.length)%n.length:(0,i.q)(e,0,n.length-1);this.activeSlide=l;const d=a[(0,i.q)(e+(o?s:0),0,a.length-1)],h=r.getBoundingClientRect(),u=d.getBoundingClientRect();r.scrollTo({left:u.left-h.left+r.scrollLeft,top:u.top-h.top+r.scrollTop,behavior:(0,c.Oe)()?"auto":t})}render(){const{scrollController:e,slidesPerMove:t}=this,s=this.getPageCount(),i=this.getCurrentPage(),o=this.canScrollPrev(),r=this.canScrollNext(),a="ltr"===this.localize.dir();return n.qy`
      <div part="base" class="carousel">
        <div
          id="scroll-container"
          part="scroll-container"
          class="${(0,m.H)({carousel__slides:!0,"carousel__slides--horizontal":"horizontal"===this.orientation,"carousel__slides--vertical":"vertical"===this.orientation})}"
          style="--slides-per-page: ${this.slidesPerPage};"
          aria-busy="${e.scrolling?"true":"false"}"
          aria-atomic="true"
          tabindex="0"
          @keydown=${this.handleKeyDown}
          @scrollend=${this.handleScrollEnd}
        >
          <slot></slot>
        </div>

        ${this.navigation?n.qy`
              <div part="navigation" class="carousel__navigation">
                <button
                  part="navigation-button navigation-button--previous"
                  class="${(0,m.H)({"carousel__navigation-button":!0,"carousel__navigation-button--previous":!0,"carousel__navigation-button--disabled":!o})}"
                  aria-label="${this.localize.term("previousSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${o?"false":"true"}"
                  @click=${o?()=>this.previous():null}
                >
                  <slot name="previous-icon">
                    <sl-icon library="system" name="${a?"chevron-left":"chevron-right"}"></sl-icon>
                  </slot>
                </button>

                <button
                  part="navigation-button navigation-button--next"
                  class=${(0,m.H)({"carousel__navigation-button":!0,"carousel__navigation-button--next":!0,"carousel__navigation-button--disabled":!r})}
                  aria-label="${this.localize.term("nextSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${r?"false":"true"}"
                  @click=${r?()=>this.next():null}
                >
                  <slot name="next-icon">
                    <sl-icon library="system" name="${a?"chevron-right":"chevron-left"}"></sl-icon>
                  </slot>
                </button>
              </div>
            `:""}
        ${this.pagination?n.qy`
              <div part="pagination" role="tablist" class="carousel__pagination" aria-controls="scroll-container">
                ${function*(e,t){if(void 0!==e){for(var s of e)yield t(s,0)}}(function(e,t){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return function*(i){var o=void 0===t?0:e;null!==(i=t)&&void 0!==i||(t=e);for(var r=o;s>0?r<t:t<r;r+=s)yield r}()}(s),(e=>{const o=e===i;return n.qy`
                    <button
                      part="pagination-item ${o?"pagination-item--active":""}"
                      class="${(0,m.H)({"carousel__pagination-item":!0,"carousel__pagination-item--active":o})}"
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
    `}};w.styles=a,w.dependencies={"sl-icon":u.B},(0,v.Cc)([(0,b.MZ)({type:Boolean,reflect:!0})],w.prototype,"loop",2),(0,v.Cc)([(0,b.MZ)({type:Boolean,reflect:!0})],w.prototype,"navigation",2),(0,v.Cc)([(0,b.MZ)({type:Boolean,reflect:!0})],w.prototype,"pagination",2),(0,v.Cc)([(0,b.MZ)({type:Boolean,reflect:!0})],w.prototype,"autoplay",2),(0,v.Cc)([(0,b.MZ)({type:Number,attribute:"autoplay-interval"})],w.prototype,"autoplayInterval",2),(0,v.Cc)([(0,b.MZ)({type:Number,attribute:"slides-per-page"})],w.prototype,"slidesPerPage",2),(0,v.Cc)([(0,b.MZ)({type:Number,attribute:"slides-per-move"})],w.prototype,"slidesPerMove",2),(0,v.Cc)([(0,b.MZ)()],w.prototype,"orientation",2),(0,v.Cc)([(0,b.MZ)({type:Boolean,reflect:!0,attribute:"mouse-dragging"})],w.prototype,"mouseDragging",2),(0,v.Cc)([(0,b.P)(".carousel__slides")],w.prototype,"scrollContainer",2),(0,v.Cc)([(0,b.P)(".carousel__pagination")],w.prototype,"paginationContainer",2),(0,v.Cc)([(0,b.wk)()],w.prototype,"activeSlide",2),(0,v.Cc)([(0,p.w)("loop",{waitUntilFirstUpdate:!0}),(0,p.w)("slidesPerPage",{waitUntilFirstUpdate:!0})],w.prototype,"initializeSlides",1),(0,v.Cc)([(0,p.w)("activeSlide")],w.prototype,"handelSlideChange",1),(0,v.Cc)([(0,p.w)("slidesPerMove")],w.prototype,"updateSlidesSnap",1),(0,v.Cc)([(0,p.w)("autoplay")],w.prototype,"handleAutoplayChange",1),(0,v.Cc)([(0,p.w)("mouseDragging")],w.prototype,"handleMouseDraggingChange",1),w.define("sl-carousel"),s(3280),s(7464),s(4415),s(4637),s(8326)}}]);
//# sourceMappingURL=5210.f4a35ebf.js.map
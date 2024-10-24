/*! For license information please see 7046.11080092.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_next_bricks_shoelace=globalThis.webpackChunk_next_bricks_shoelace||[]).push([[7046],{3432:(e,t,s)=>{var i=s(5024),o=i.AH`
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
`,a=s(7324),r=s(8004),l=class extends r.f{connectedCallback(){super.connectedCallback(),this.setAttribute("role","group")}render(){return i.qy` <slot></slot> `}};l.styles=[a.$,o],l.define("sl-carousel-item"),s(1320)},4077:(e,t,s)=>{var i=s(9162),o=class{constructor(e,t){this.timerId=0,this.activeInteractions=0,this.paused=!1,this.stopped=!0,this.pause=()=>{this.activeInteractions++||(this.paused=!0,this.host.requestUpdate())},this.resume=()=>{--this.activeInteractions||(this.paused=!1,this.host.requestUpdate())},e.addController(this),this.host=e,this.tickCallback=t}hostConnected(){this.host.addEventListener("mouseenter",this.pause),this.host.addEventListener("mouseleave",this.resume),this.host.addEventListener("focusin",this.pause),this.host.addEventListener("focusout",this.resume),this.host.addEventListener("touchstart",this.pause,{passive:!0}),this.host.addEventListener("touchend",this.resume)}hostDisconnected(){this.stop(),this.host.removeEventListener("mouseenter",this.pause),this.host.removeEventListener("mouseleave",this.resume),this.host.removeEventListener("focusin",this.pause),this.host.removeEventListener("focusout",this.resume),this.host.removeEventListener("touchstart",this.pause),this.host.removeEventListener("touchend",this.resume)}start(e){this.stop(),this.stopped=!1,this.timerId=window.setInterval((()=>{this.paused||this.tickCallback()}),e)}stop(){clearInterval(this.timerId),this.stopped=!0,this.host.requestUpdate()}},a=s(5024),r=a.AH`
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
`,l=s(1060),n=s(6482),c=s(333),d=s(4812),h=s(5752),u=s(7324),p=s(8004),g=s(1320),v=s(3788),m=s(8146),y=(e,t)=>{let s=0;return function(...i){window.clearTimeout(s),s=window.setTimeout((()=>{e.call(this,...i)}),t)}},b=(e,t,s)=>{const i=e[t];e[t]=function(...e){i.call(this,...e),s.call(this,i,...e)}};if(!("onscrollend"in window)){const e=new Set,t=new WeakMap,s=t=>{for(const s of t.changedTouches)e.add(s.identifier)},i=t=>{for(const s of t.changedTouches)e.delete(s.identifier)};document.addEventListener("touchstart",s,!0),document.addEventListener("touchend",i,!0),document.addEventListener("touchcancel",i,!0),b(EventTarget.prototype,"addEventListener",(function(s,i){if("scrollend"!==i)return;const o=y((()=>{e.size?o():this.dispatchEvent(new Event("scrollend"))}),100);s.call(this,"scroll",o,{passive:!0}),t.set(this,o)})),b(EventTarget.prototype,"removeEventListener",(function(e,s){if("scrollend"!==s)return;const i=t.get(this);i&&e.call(this,"scroll",i,{passive:!0})}))}var f=class extends p.f{constructor(){super(...arguments),this.loop=!1,this.navigation=!1,this.pagination=!1,this.autoplay=!1,this.autoplayInterval=3e3,this.slidesPerPage=1,this.slidesPerMove=1,this.orientation="horizontal",this.mouseDragging=!1,this.activeSlide=0,this.scrolling=!1,this.dragging=!1,this.autoplayController=new o(this,(()=>this.next())),this.localize=new c.c(this),this.handleMouseDrag=e=>{this.dragging||(this.scrollContainer.style.setProperty("scroll-snap-type","none"),this.dragging=!0),this.scrollContainer.scrollBy({left:-e.movementX,top:-e.movementY,behavior:"instant"})},this.handleMouseDragEnd=()=>{const e=this.scrollContainer;document.removeEventListener("pointermove",this.handleMouseDrag,{capture:!0});const t=e.scrollLeft,s=e.scrollTop;e.style.removeProperty("scroll-snap-type"),e.style.setProperty("overflow","hidden");const i=e.scrollLeft,o=e.scrollTop;e.style.removeProperty("overflow"),e.style.setProperty("scroll-snap-type","none"),e.scrollTo({left:t,top:s,behavior:"instant"}),requestAnimationFrame((async()=>{t===i&&s===o||(e.scrollTo({left:i,top:o,behavior:(0,n.Oe)()?"auto":"smooth"}),await(0,l.l)(e,"scrollend")),e.style.removeProperty("scroll-snap-type"),this.dragging=!1,this.handleScrollEnd()}))},this.handleSlotChange=e=>{e.some((e=>[...e.addedNodes,...e.removedNodes].some((e=>this.isCarouselItem(e)&&!e.hasAttribute("data-clone")))))&&this.initializeSlides(),this.requestUpdate()}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","region"),this.setAttribute("aria-label",this.localize.term("carousel"))}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver.disconnect()}firstUpdated(){this.initializeSlides(),this.mutationObserver=new MutationObserver(this.handleSlotChange),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}willUpdate(e){(e.has("slidesPerMove")||e.has("slidesPerPage"))&&(this.slidesPerMove=Math.min(this.slidesPerMove,this.slidesPerPage))}getPageCount(){const e=this.getSlides().length,{slidesPerPage:t,slidesPerMove:s,loop:i}=this,o=i?e/s:(e-t)/s+1;return Math.ceil(o)}getCurrentPage(){return Math.ceil(this.activeSlide/this.slidesPerMove)}canScrollNext(){return this.loop||this.getCurrentPage()<this.getPageCount()-1}canScrollPrev(){return this.loop||this.getCurrentPage()>0}getSlides({excludeClones:e=!0}={}){return[...this.children].filter((t=>this.isCarouselItem(t)&&(!e||!t.hasAttribute("data-clone"))))}handleKeyDown(e){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key)){const t=e.target,s="rtl"===this.localize.dir(),i=null!==t.closest('[part~="pagination-item"]'),o="ArrowDown"===e.key||!s&&"ArrowRight"===e.key||s&&"ArrowLeft"===e.key,a="ArrowUp"===e.key||!s&&"ArrowLeft"===e.key||s&&"ArrowRight"===e.key;e.preventDefault(),a&&this.previous(),o&&this.next(),"Home"===e.key&&this.goToSlide(0),"End"===e.key&&this.goToSlide(this.getSlides().length-1),i&&this.updateComplete.then((()=>{var e;const t=null==(e=this.shadowRoot)?void 0:e.querySelector('[part~="pagination-item--active"]');t&&t.focus()}))}}handleMouseDragStart(e){this.mouseDragging&&0===e.button&&(e.preventDefault(),document.addEventListener("pointermove",this.handleMouseDrag,{capture:!0,passive:!0}),document.addEventListener("pointerup",this.handleMouseDragEnd,{capture:!0,once:!0}))}handleScroll(){this.scrolling=!0}synchronizeSlides(){const e=new IntersectionObserver((t=>{e.disconnect();for(const e of t){const t=e.target;t.toggleAttribute("inert",!e.isIntersecting),t.classList.toggle("--in-view",e.isIntersecting),t.setAttribute("aria-hidden",e.isIntersecting?"false":"true")}const s=t.find((e=>e.isIntersecting));if(s)if(this.loop&&s.target.hasAttribute("data-clone")){const e=Number(s.target.getAttribute("data-clone"));this.goToSlide(e,"instant")}else{const e=this.getSlides().indexOf(s.target);this.activeSlide=Math.ceil(e/this.slidesPerMove)*this.slidesPerMove}}),{root:this.scrollContainer,threshold:.6});this.getSlides({excludeClones:!1}).forEach((t=>{e.observe(t)}))}handleScrollEnd(){this.scrolling&&!this.dragging&&(this.synchronizeSlides(),this.scrolling=!1)}isCarouselItem(e){return e instanceof Element&&"sl-carousel-item"===e.tagName.toLowerCase()}initializeSlides(){this.getSlides({excludeClones:!1}).forEach(((e,t)=>{e.classList.remove("--in-view"),e.classList.remove("--is-active"),e.setAttribute("aria-label",this.localize.term("slideNum",t+1)),e.hasAttribute("data-clone")&&e.remove()})),this.updateSlidesSnap(),this.loop&&this.createClones(),this.synchronizeSlides(),this.goToSlide(this.activeSlide,"auto")}createClones(){const e=this.getSlides(),t=this.slidesPerPage,s=e.slice(-t),i=e.slice(0,t);s.reverse().forEach(((t,s)=>{const i=t.cloneNode(!0);i.setAttribute("data-clone",String(e.length-s-1)),this.prepend(i)})),i.forEach(((e,t)=>{const s=e.cloneNode(!0);s.setAttribute("data-clone",String(t)),this.append(s)}))}handelSlideChange(){const e=this.getSlides();e.forEach(((e,t)=>{e.classList.toggle("--is-active",t===this.activeSlide)})),this.hasUpdated&&this.emit("sl-slide-change",{detail:{index:this.activeSlide,slide:e[this.activeSlide]}})}updateSlidesSnap(){const e=this.getSlides(),t=this.slidesPerMove;e.forEach(((e,s)=>{(s+t)%t==0?e.style.removeProperty("scroll-snap-align"):e.style.setProperty("scroll-snap-align","none")}))}handleAutoplayChange(){this.autoplayController.stop(),this.autoplay&&this.autoplayController.start(this.autoplayInterval)}previous(e="smooth"){this.goToSlide(this.activeSlide-this.slidesPerMove,e)}next(e="smooth"){this.goToSlide(this.activeSlide+this.slidesPerMove,e)}goToSlide(e,t="smooth"){const{slidesPerPage:s,loop:o}=this,a=this.getSlides(),r=this.getSlides({excludeClones:!1});if(!a.length)return;const l=o?(e+a.length)%a.length:(0,i.q)(e,0,a.length-1);this.activeSlide=l;const c=r[(0,i.q)(e+(o?s:0),0,r.length-1)];this.scrollToSlide(c,(0,n.Oe)()?"auto":t)}scrollToSlide(e,t="smooth"){const s=this.scrollContainer,i=s.getBoundingClientRect(),o=e.getBoundingClientRect(),a=o.left-i.left,r=o.top-i.top;s.scrollTo({left:a+s.scrollLeft,top:r+s.scrollTop,behavior:t})}render(){const{slidesPerMove:e,scrolling:t}=this,s=this.getPageCount(),i=this.getCurrentPage(),o=this.canScrollPrev(),r=this.canScrollNext(),l="ltr"===this.localize.dir();return a.qy`
      <div part="base" class="carousel">
        <div
          id="scroll-container"
          part="scroll-container"
          class="${(0,v.H)({carousel__slides:!0,"carousel__slides--horizontal":"horizontal"===this.orientation,"carousel__slides--vertical":"vertical"===this.orientation,"carousel__slides--dragging":this.dragging})}"
          style="--slides-per-page: ${this.slidesPerPage};"
          aria-busy="${t?"true":"false"}"
          aria-atomic="true"
          tabindex="0"
          @keydown=${this.handleKeyDown}
          @mousedown="${this.handleMouseDragStart}"
          @scroll="${this.handleScroll}"
          @scrollend=${this.handleScrollEnd}
        >
          <slot></slot>
        </div>

        ${this.navigation?a.qy`
              <div part="navigation" class="carousel__navigation">
                <button
                  part="navigation-button navigation-button--previous"
                  class="${(0,v.H)({"carousel__navigation-button":!0,"carousel__navigation-button--previous":!0,"carousel__navigation-button--disabled":!o})}"
                  aria-label="${this.localize.term("previousSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${o?"false":"true"}"
                  @click=${o?()=>this.previous():null}
                >
                  <slot name="previous-icon">
                    <sl-icon library="system" name="${l?"chevron-left":"chevron-right"}"></sl-icon>
                  </slot>
                </button>

                <button
                  part="navigation-button navigation-button--next"
                  class=${(0,v.H)({"carousel__navigation-button":!0,"carousel__navigation-button--next":!0,"carousel__navigation-button--disabled":!r})}
                  aria-label="${this.localize.term("nextSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${r?"false":"true"}"
                  @click=${r?()=>this.next():null}
                >
                  <slot name="next-icon">
                    <sl-icon library="system" name="${l?"chevron-right":"chevron-left"}"></sl-icon>
                  </slot>
                </button>
              </div>
            `:""}
        ${this.pagination?a.qy`
              <div part="pagination" role="tablist" class="carousel__pagination" aria-controls="scroll-container">
                ${function*(e,t){if(void 0!==e){let s=0;for(const i of e)yield t(i,s++)}}(function(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return function*(){const i=void 0===t?0:e;t??(t=e);for(let e=i;s>0?e<t:t<e;e+=s)yield e}()}(s),(t=>{const o=t===i;return a.qy`
                    <button
                      part="pagination-item ${o?"pagination-item--active":""}"
                      class="${(0,v.H)({"carousel__pagination-item":!0,"carousel__pagination-item--active":o})}"
                      role="tab"
                      aria-selected="${o?"true":"false"}"
                      aria-label="${this.localize.term("goToSlide",t+1,s)}"
                      tabindex=${o?"0":"-1"}
                      @click=${()=>this.goToSlide(t*e)}
                      @keydown=${this.handleKeyDown}
                    ></button>
                  `}))}
              </div>
            `:""}
      </div>
    `}};f.styles=[u.$,r],f.dependencies={"sl-icon":d.B},(0,g.Cc)([(0,m.MZ)({type:Boolean,reflect:!0})],f.prototype,"loop",2),(0,g.Cc)([(0,m.MZ)({type:Boolean,reflect:!0})],f.prototype,"navigation",2),(0,g.Cc)([(0,m.MZ)({type:Boolean,reflect:!0})],f.prototype,"pagination",2),(0,g.Cc)([(0,m.MZ)({type:Boolean,reflect:!0})],f.prototype,"autoplay",2),(0,g.Cc)([(0,m.MZ)({type:Number,attribute:"autoplay-interval"})],f.prototype,"autoplayInterval",2),(0,g.Cc)([(0,m.MZ)({type:Number,attribute:"slides-per-page"})],f.prototype,"slidesPerPage",2),(0,g.Cc)([(0,m.MZ)({type:Number,attribute:"slides-per-move"})],f.prototype,"slidesPerMove",2),(0,g.Cc)([(0,m.MZ)()],f.prototype,"orientation",2),(0,g.Cc)([(0,m.MZ)({type:Boolean,reflect:!0,attribute:"mouse-dragging"})],f.prototype,"mouseDragging",2),(0,g.Cc)([(0,m.P)(".carousel__slides")],f.prototype,"scrollContainer",2),(0,g.Cc)([(0,m.P)(".carousel__pagination")],f.prototype,"paginationContainer",2),(0,g.Cc)([(0,m.wk)()],f.prototype,"activeSlide",2),(0,g.Cc)([(0,m.wk)()],f.prototype,"scrolling",2),(0,g.Cc)([(0,m.wk)()],f.prototype,"dragging",2),(0,g.Cc)([(0,m.Ls)({passive:!0})],f.prototype,"handleScroll",1),(0,g.Cc)([(0,h.w)("loop",{waitUntilFirstUpdate:!0}),(0,h.w)("slidesPerPage",{waitUntilFirstUpdate:!0})],f.prototype,"initializeSlides",1),(0,g.Cc)([(0,h.w)("activeSlide")],f.prototype,"handelSlideChange",1),(0,g.Cc)([(0,h.w)("slidesPerMove")],f.prototype,"updateSlidesSnap",1),(0,g.Cc)([(0,h.w)("autoplay")],f.prototype,"handleAutoplayChange",1),f.define("sl-carousel"),s(3280),s(2089),s(4415),s(4637),s(8326)}}]);
//# sourceMappingURL=7046.11080092.js.map
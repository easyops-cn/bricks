/*! For license information please see 1944.eb72b697.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_next_bricks_shoelace=globalThis.webpackChunk_next_bricks_shoelace||[]).push([[1944],{5842:(t,e,r)=>{r.d(e,{e:()=>i});var i=r(5024).AH`
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`},9524:(t,e,r)=>{r.d(e,{N:()=>n});var i=r(1931),s=r(7324),o=r(8004),a=r(5024),n=class extends o.f{render(){return a.qy` <slot></slot> `}};n.styles=[s.$,i.W]},3144:(t,e,r)=>{r.d(e,{N:()=>h});var i=r(5842),s=r(7324),o=r(8004),a=r(1320),n=r(5024),l=r(8146),h=class extends o.f{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(t){const e=d(t.target);null==e||e.toggleAttribute("data-sl-button-group__button--focus",!0)}handleBlur(t){const e=d(t.target);null==e||e.toggleAttribute("data-sl-button-group__button--focus",!1)}handleMouseOver(t){const e=d(t.target);null==e||e.toggleAttribute("data-sl-button-group__button--hover",!0)}handleMouseOut(t){const e=d(t.target);null==e||e.toggleAttribute("data-sl-button-group__button--hover",!1)}handleSlotChange(){const t=[...this.defaultSlot.assignedElements({flatten:!0})];t.forEach((e=>{const r=t.indexOf(e),i=d(e);i&&(i.toggleAttribute("data-sl-button-group__button",!0),i.toggleAttribute("data-sl-button-group__button--first",0===r),i.toggleAttribute("data-sl-button-group__button--inner",r>0&&r<t.length-1),i.toggleAttribute("data-sl-button-group__button--last",r===t.length-1),i.toggleAttribute("data-sl-button-group__button--radio","sl-radio-button"===i.tagName.toLowerCase()))}))}render(){return n.qy`
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
    `}};function d(t){var e;const r="sl-button, sl-radio-button";return null!=(e=t.closest(r))?e:t.querySelector(r)}h.styles=[s.$,i.e],(0,a.Cc)([(0,l.P)("slot")],h.prototype,"defaultSlot",2),(0,a.Cc)([(0,l.wk)()],h.prototype,"disableRole",2),(0,a.Cc)([(0,l.MZ)()],h.prototype,"label",2)},4319:(t,e,r)=>{function i(t,e){function r(r){const i=t.getBoundingClientRect(),s=t.ownerDocument.defaultView,o=i.left+s.scrollX,a=i.top+s.scrollY,n=r.pageX-o,l=r.pageY-a;(null==e?void 0:e.onMove)&&e.onMove(n,l)}document.addEventListener("pointermove",r,{passive:!0}),document.addEventListener("pointerup",(function t(){document.removeEventListener("pointermove",r),document.removeEventListener("pointerup",t),(null==e?void 0:e.onStop)&&e.onStop()})),(null==e?void 0:e.initialEvent)instanceof PointerEvent&&r(e.initialEvent)}r.d(e,{$:()=>i})},9162:(t,e,r)=>{function i(t,e,r){return i=t<e?e:t>r?r:t,Object.is(i,-0)?0:i;var i}r.d(e,{q:()=>i})},1931:(t,e,r)=>{r.d(e,{W:()=>i});var i=r(5024).AH`
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
`},1944:(t,e,r)=>{var i=r(9524),s=r(1195),o=r(4319),a=r(323),n=r(3088),l=r(5024),h=l.AH`
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
`,d=r(9162),u=r(8802),c=r(8251),p=r(3144),g=r(333),b=r(4812),f=r(5752),v=r(7324),m=r(8004),y=r(1320),w=r(3788),_=r(8146),k=r(996),$=r(8981);function x(t,e){(function(t){return"string"==typeof t&&-1!==t.indexOf(".")&&1===parseFloat(t)})(t)&&(t="100%");const r=function(t){return"string"==typeof t&&-1!==t.indexOf("%")}(t);return t=360===e?t:Math.min(e,Math.max(0,parseFloat(t))),r&&(t=parseInt(String(t*e),10)/100),Math.abs(t-e)<1e-6?1:t=360===e?(t<0?t%e+e:t%e)/parseFloat(String(e)):t%e/parseFloat(String(e))}function C(t){return Math.min(1,Math.max(0,t))}function M(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function S(t){return Number(t)<=1?100*Number(t)+"%":t}function A(t){return 1===t.length?"0"+t:String(t)}function H(t,e,r){t=x(t,255),e=x(e,255),r=x(r,255);const i=Math.max(t,e,r),s=Math.min(t,e,r);let o=0,a=0;const n=(i+s)/2;if(i===s)a=0,o=0;else{const l=i-s;switch(a=n>.5?l/(2-i-s):l/(i+s),i){case t:o=(e-r)/l+(e<r?6:0);break;case e:o=(r-t)/l+2;break;case r:o=(t-e)/l+4}o/=6}return{h:o,s:a,l:n}}function V(t,e,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?t+6*r*(e-t):r<.5?e:r<2/3?t+(e-t)*(2/3-r)*6:t}function F(t,e,r){t=x(t,255),e=x(e,255),r=x(r,255);const i=Math.max(t,e,r),s=Math.min(t,e,r);let o=0;const a=i,n=i-s,l=0===i?0:n/i;if(i===s)o=0;else{switch(i){case t:o=(e-r)/n+(e<r?6:0);break;case e:o=(r-t)/n+2;break;case r:o=(t-e)/n+4}o/=6}return{h:o,s:l,v:a}}function E(t,e,r,i){const s=[A(Math.round(t).toString(16)),A(Math.round(e).toString(16)),A(Math.round(r).toString(16))];return i&&s[0].startsWith(s[0].charAt(1))&&s[1].startsWith(s[1].charAt(1))&&s[2].startsWith(s[2].charAt(1))?s[0].charAt(0)+s[1].charAt(0)+s[2].charAt(0):s.join("")}function q(t){return D(t)/255}function D(t){return parseInt(t,16)}const R={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};const z="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)",L=`[\\s|\\(]+(${z})[,|\\s]+(${z})[,|\\s]+(${z})\\s*\\)?`,B=`[\\s|\\(]+(${z})[,|\\s]+(${z})[,|\\s]+(${z})[,|\\s]+(${z})\\s*\\)?`,I={CSS_UNIT:new RegExp(z),rgb:new RegExp("rgb"+L),rgba:new RegExp("rgba"+B),hsl:new RegExp("hsl"+L),hsla:new RegExp("hsla"+B),hsv:new RegExp("hsv"+L),hsva:new RegExp("hsva"+B),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function P(t){return Boolean(I.CSS_UNIT.exec(String(t)))}class N{constructor(t="",e={}){if(t instanceof N)return t;"number"==typeof t&&(t=function(t){return{r:t>>16,g:(65280&t)>>8,b:255&t}}(t)),this.originalInput=t;const r=function(t){let e={r:0,g:0,b:0},r=1,i=null,s=null,o=null,a=!1,n=!1;var l,h,d;return"string"==typeof t&&(t=function(t){if(0===(t=t.trim().toLowerCase()).length)return!1;let e=!1;if(R[t])t=R[t],e=!0;else if("transparent"===t)return{r:0,g:0,b:0,a:0,format:"name"};let r=I.rgb.exec(t);return r?{r:r[1],g:r[2],b:r[3]}:(r=I.rgba.exec(t),r?{r:r[1],g:r[2],b:r[3],a:r[4]}:(r=I.hsl.exec(t),r?{h:r[1],s:r[2],l:r[3]}:(r=I.hsla.exec(t),r?{h:r[1],s:r[2],l:r[3],a:r[4]}:(r=I.hsv.exec(t),r?{h:r[1],s:r[2],v:r[3]}:(r=I.hsva.exec(t),r?{h:r[1],s:r[2],v:r[3],a:r[4]}:(r=I.hex8.exec(t),r?{r:D(r[1]),g:D(r[2]),b:D(r[3]),a:q(r[4]),format:e?"name":"hex8"}:(r=I.hex6.exec(t),r?{r:D(r[1]),g:D(r[2]),b:D(r[3]),format:e?"name":"hex"}:(r=I.hex4.exec(t),r?{r:D(r[1]+r[1]),g:D(r[2]+r[2]),b:D(r[3]+r[3]),a:q(r[4]+r[4]),format:e?"name":"hex8"}:(r=I.hex3.exec(t),!!r&&{r:D(r[1]+r[1]),g:D(r[2]+r[2]),b:D(r[3]+r[3]),format:e?"name":"hex"})))))))))}(t)),"object"==typeof t&&(P(t.r)&&P(t.g)&&P(t.b)?(l=t.r,h=t.g,d=t.b,e={r:255*x(l,255),g:255*x(h,255),b:255*x(d,255)},a=!0,n="%"===String(t.r).substr(-1)?"prgb":"rgb"):P(t.h)&&P(t.s)&&P(t.v)?(i=S(t.s),s=S(t.v),e=function(t,e,r){t=6*x(t,360),e=x(e,100),r=x(r,100);const i=Math.floor(t),s=t-i,o=r*(1-e),a=r*(1-s*e),n=r*(1-(1-s)*e),l=i%6;return{r:255*[r,a,o,o,n,r][l],g:255*[n,r,r,a,o,o][l],b:255*[o,o,n,r,r,a][l]}}(t.h,i,s),a=!0,n="hsv"):P(t.h)&&P(t.s)&&P(t.l)&&(i=S(t.s),o=S(t.l),e=function(t,e,r){let i,s,o;if(t=x(t,360),e=x(e,100),r=x(r,100),0===e)s=r,o=r,i=r;else{const a=r<.5?r*(1+e):r+e-r*e,n=2*r-a;i=V(n,a,t+1/3),s=V(n,a,t),o=V(n,a,t-1/3)}return{r:255*i,g:255*s,b:255*o}}(t.h,i,o),a=!0,n="hsl"),Object.prototype.hasOwnProperty.call(t,"a")&&(r=t.a)),r=M(r),{ok:a,format:t.format||n,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:r}}(t);this.originalInput=t,this.r=r.r,this.g=r.g,this.b=r.b,this.a=r.a,this.roundA=Math.round(100*this.a)/100,this.format=e.format??r.format,this.gradientType=e.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=r.ok}isDark(){return this.getBrightness()<128}isLight(){return!this.isDark()}getBrightness(){const t=this.toRgb();return(299*t.r+587*t.g+114*t.b)/1e3}getLuminance(){const t=this.toRgb();let e,r,i;const s=t.r/255,o=t.g/255,a=t.b/255;return e=s<=.03928?s/12.92:Math.pow((s+.055)/1.055,2.4),r=o<=.03928?o/12.92:Math.pow((o+.055)/1.055,2.4),i=a<=.03928?a/12.92:Math.pow((a+.055)/1.055,2.4),.2126*e+.7152*r+.0722*i}getAlpha(){return this.a}setAlpha(t){return this.a=M(t),this.roundA=Math.round(100*this.a)/100,this}isMonochrome(){const{s:t}=this.toHsl();return 0===t}toHsv(){const t=F(this.r,this.g,this.b);return{h:360*t.h,s:t.s,v:t.v,a:this.a}}toHsvString(){const t=F(this.r,this.g,this.b),e=Math.round(360*t.h),r=Math.round(100*t.s),i=Math.round(100*t.v);return 1===this.a?`hsv(${e}, ${r}%, ${i}%)`:`hsva(${e}, ${r}%, ${i}%, ${this.roundA})`}toHsl(){const t=H(this.r,this.g,this.b);return{h:360*t.h,s:t.s,l:t.l,a:this.a}}toHslString(){const t=H(this.r,this.g,this.b),e=Math.round(360*t.h),r=Math.round(100*t.s),i=Math.round(100*t.l);return 1===this.a?`hsl(${e}, ${r}%, ${i}%)`:`hsla(${e}, ${r}%, ${i}%, ${this.roundA})`}toHex(t=!1){return E(this.r,this.g,this.b,t)}toHexString(t=!1){return"#"+this.toHex(t)}toHex8(t=!1){return function(t,e,r,i,s){const o=[A(Math.round(t).toString(16)),A(Math.round(e).toString(16)),A(Math.round(r).toString(16)),A((a=i,Math.round(255*parseFloat(a)).toString(16)))];var a;return s&&o[0].startsWith(o[0].charAt(1))&&o[1].startsWith(o[1].charAt(1))&&o[2].startsWith(o[2].charAt(1))&&o[3].startsWith(o[3].charAt(1))?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0)+o[3].charAt(0):o.join("")}(this.r,this.g,this.b,this.a,t)}toHex8String(t=!1){return"#"+this.toHex8(t)}toHexShortString(t=!1){return 1===this.a?this.toHexString(t):this.toHex8String(t)}toRgb(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}}toRgbString(){const t=Math.round(this.r),e=Math.round(this.g),r=Math.round(this.b);return 1===this.a?`rgb(${t}, ${e}, ${r})`:`rgba(${t}, ${e}, ${r}, ${this.roundA})`}toPercentageRgb(){const t=t=>`${Math.round(100*x(t,255))}%`;return{r:t(this.r),g:t(this.g),b:t(this.b),a:this.a}}toPercentageRgbString(){const t=t=>Math.round(100*x(t,255));return 1===this.a?`rgb(${t(this.r)}%, ${t(this.g)}%, ${t(this.b)}%)`:`rgba(${t(this.r)}%, ${t(this.g)}%, ${t(this.b)}%, ${this.roundA})`}toName(){if(0===this.a)return"transparent";if(this.a<1)return!1;const t="#"+E(this.r,this.g,this.b,!1);for(const[e,r]of Object.entries(R))if(t===r)return e;return!1}toString(t){const e=Boolean(t);t=t??this.format;let r=!1;const i=this.a<1&&this.a>=0;return e||!i||!t.startsWith("hex")&&"name"!==t?("rgb"===t&&(r=this.toRgbString()),"prgb"===t&&(r=this.toPercentageRgbString()),"hex"!==t&&"hex6"!==t||(r=this.toHexString()),"hex3"===t&&(r=this.toHexString(!0)),"hex4"===t&&(r=this.toHex8String(!0)),"hex8"===t&&(r=this.toHex8String()),"name"===t&&(r=this.toName()),"hsl"===t&&(r=this.toHslString()),"hsv"===t&&(r=this.toHsvString()),r||this.toHexString()):"name"===t&&0===this.a?this.toName():this.toRgbString()}toNumber(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)}clone(){return new N(this.toString())}lighten(t=10){const e=this.toHsl();return e.l+=t/100,e.l=C(e.l),new N(e)}brighten(t=10){const e=this.toRgb();return e.r=Math.max(0,Math.min(255,e.r-Math.round(-t/100*255))),e.g=Math.max(0,Math.min(255,e.g-Math.round(-t/100*255))),e.b=Math.max(0,Math.min(255,e.b-Math.round(-t/100*255))),new N(e)}darken(t=10){const e=this.toHsl();return e.l-=t/100,e.l=C(e.l),new N(e)}tint(t=10){return this.mix("white",t)}shade(t=10){return this.mix("black",t)}desaturate(t=10){const e=this.toHsl();return e.s-=t/100,e.s=C(e.s),new N(e)}saturate(t=10){const e=this.toHsl();return e.s+=t/100,e.s=C(e.s),new N(e)}greyscale(){return this.desaturate(100)}spin(t){const e=this.toHsl(),r=(e.h+t)%360;return e.h=r<0?360+r:r,new N(e)}mix(t,e=50){const r=this.toRgb(),i=new N(t).toRgb(),s=e/100,o={r:(i.r-r.r)*s+r.r,g:(i.g-r.g)*s+r.g,b:(i.b-r.b)*s+r.b,a:(i.a-r.a)*s+r.a};return new N(o)}analogous(t=6,e=30){const r=this.toHsl(),i=360/e,s=[this];for(r.h=(r.h-(i*t>>1)+720)%360;--t;)r.h=(r.h+i)%360,s.push(new N(r));return s}complement(){const t=this.toHsl();return t.h=(t.h+180)%360,new N(t)}monochromatic(t=6){const e=this.toHsv(),{h:r}=e,{s:i}=e;let{v:s}=e;const o=[],a=1/t;for(;t--;)o.push(new N({h:r,s:i,v:s})),s=(s+a)%1;return o}splitcomplement(){const t=this.toHsl(),{h:e}=t;return[this,new N({h:(e+72)%360,s:t.s,l:t.l}),new N({h:(e+216)%360,s:t.s,l:t.l})]}onBackground(t){const e=this.toRgb(),r=new N(t).toRgb(),i=e.a+r.a*(1-e.a);return new N({r:(e.r*e.a+r.r*r.a*(1-e.a))/i,g:(e.g*e.a+r.g*r.a*(1-e.a))/i,b:(e.b*e.a+r.b*r.a*(1-e.a))/i,a:i})}triad(){return this.polyad(3)}tetrad(){return this.polyad(4)}polyad(t){const e=this.toHsl(),{h:r}=e,i=[this],s=360/t;for(let o=1;o<t;o++)i.push(new N({h:(r+o*s)%360,s:e.s,l:e.l}));return i}equals(t){return this.toRgbString()===new N(t).toRgbString()}}var T="EyeDropper"in window,W=class extends m.f{constructor(){super(),this.formControlController=new c.Ud(this),this.isSafeValue=!1,this.localize=new g.c(this),this.hasFocus=!1,this.isDraggingGridHandle=!1,this.isEmpty=!1,this.inputValue="",this.hue=0,this.saturation=100,this.brightness=100,this.alpha=100,this.value="",this.defaultValue="",this.label="",this.format="hex",this.inline=!1,this.size="medium",this.noFormatToggle=!1,this.name="",this.disabled=!1,this.hoist=!1,this.opacity=!1,this.uppercase=!1,this.swatches="",this.form="",this.required=!1,this.handleFocusIn=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.handleFocusOut=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut)}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.input.updateComplete.then((()=>{this.formControlController.updateValidity()}))}handleCopy(){this.input.select(),document.execCommand("copy"),this.previewButton.focus(),this.previewButton.classList.add("color-picker__preview-color--copied"),this.previewButton.addEventListener("animationend",(()=>{this.previewButton.classList.remove("color-picker__preview-color--copied")}))}handleFormatToggle(){const t=["hex","rgb","hsl","hsv"],e=(t.indexOf(this.format)+1)%t.length;this.format=t[e],this.setColor(this.value),this.emit("sl-change"),this.emit("sl-input")}handleAlphaDrag(t){const e=this.shadowRoot.querySelector(".color-picker__slider.color-picker__alpha"),r=e.querySelector(".color-picker__slider-handle"),{width:i}=e.getBoundingClientRect();let s=this.value,a=this.value;r.focus(),t.preventDefault(),(0,o.$)(e,{onMove:t=>{this.alpha=(0,d.q)(t/i*100,0,100),this.syncValues(),this.value!==a&&(a=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==s&&(s=this.value,this.emit("sl-change"))},initialEvent:t})}handleHueDrag(t){const e=this.shadowRoot.querySelector(".color-picker__slider.color-picker__hue"),r=e.querySelector(".color-picker__slider-handle"),{width:i}=e.getBoundingClientRect();let s=this.value,a=this.value;r.focus(),t.preventDefault(),(0,o.$)(e,{onMove:t=>{this.hue=(0,d.q)(t/i*360,0,360),this.syncValues(),this.value!==a&&(a=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==s&&(s=this.value,this.emit("sl-change"))},initialEvent:t})}handleGridDrag(t){const e=this.shadowRoot.querySelector(".color-picker__grid"),r=e.querySelector(".color-picker__grid-handle"),{width:i,height:s}=e.getBoundingClientRect();let a=this.value,n=this.value;r.focus(),t.preventDefault(),this.isDraggingGridHandle=!0,(0,o.$)(e,{onMove:(t,e)=>{this.saturation=(0,d.q)(t/i*100,0,100),this.brightness=(0,d.q)(100-e/s*100,0,100),this.syncValues(),this.value!==n&&(n=this.value,this.emit("sl-input"))},onStop:()=>{this.isDraggingGridHandle=!1,this.value!==a&&(a=this.value,this.emit("sl-change"))},initialEvent:t})}handleAlphaKeyDown(t){const e=t.shiftKey?10:1,r=this.value;"ArrowLeft"===t.key&&(t.preventDefault(),this.alpha=(0,d.q)(this.alpha-e,0,100),this.syncValues()),"ArrowRight"===t.key&&(t.preventDefault(),this.alpha=(0,d.q)(this.alpha+e,0,100),this.syncValues()),"Home"===t.key&&(t.preventDefault(),this.alpha=0,this.syncValues()),"End"===t.key&&(t.preventDefault(),this.alpha=100,this.syncValues()),this.value!==r&&(this.emit("sl-change"),this.emit("sl-input"))}handleHueKeyDown(t){const e=t.shiftKey?10:1,r=this.value;"ArrowLeft"===t.key&&(t.preventDefault(),this.hue=(0,d.q)(this.hue-e,0,360),this.syncValues()),"ArrowRight"===t.key&&(t.preventDefault(),this.hue=(0,d.q)(this.hue+e,0,360),this.syncValues()),"Home"===t.key&&(t.preventDefault(),this.hue=0,this.syncValues()),"End"===t.key&&(t.preventDefault(),this.hue=360,this.syncValues()),this.value!==r&&(this.emit("sl-change"),this.emit("sl-input"))}handleGridKeyDown(t){const e=t.shiftKey?10:1,r=this.value;"ArrowLeft"===t.key&&(t.preventDefault(),this.saturation=(0,d.q)(this.saturation-e,0,100),this.syncValues()),"ArrowRight"===t.key&&(t.preventDefault(),this.saturation=(0,d.q)(this.saturation+e,0,100),this.syncValues()),"ArrowUp"===t.key&&(t.preventDefault(),this.brightness=(0,d.q)(this.brightness+e,0,100),this.syncValues()),"ArrowDown"===t.key&&(t.preventDefault(),this.brightness=(0,d.q)(this.brightness-e,0,100),this.syncValues()),this.value!==r&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputChange(t){const e=t.target,r=this.value;t.stopPropagation(),this.input.value?(this.setColor(e.value),e.value=this.value):this.value="",this.value!==r&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputInput(t){this.formControlController.updateValidity(),t.stopPropagation()}handleInputKeyDown(t){if("Enter"===t.key){const t=this.value;this.input.value?(this.setColor(this.input.value),this.input.value=this.value,this.value!==t&&(this.emit("sl-change"),this.emit("sl-input")),setTimeout((()=>this.input.select()))):this.hue=0}}handleInputInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleTouchMove(t){t.preventDefault()}parseColor(t){const e=new N(t);if(!e.isValid)return null;const r=e.toHsl(),i={h:r.h,s:100*r.s,l:100*r.l,a:r.a},s=e.toRgb(),o=e.toHexString(),a=e.toHex8String(),n=e.toHsv(),l={h:n.h,s:100*n.s,v:100*n.v,a:n.a};return{hsl:{h:i.h,s:i.s,l:i.l,string:this.setLetterCase(`hsl(${Math.round(i.h)}, ${Math.round(i.s)}%, ${Math.round(i.l)}%)`)},hsla:{h:i.h,s:i.s,l:i.l,a:i.a,string:this.setLetterCase(`hsla(${Math.round(i.h)}, ${Math.round(i.s)}%, ${Math.round(i.l)}%, ${i.a.toFixed(2).toString()})`)},hsv:{h:l.h,s:l.s,v:l.v,string:this.setLetterCase(`hsv(${Math.round(l.h)}, ${Math.round(l.s)}%, ${Math.round(l.v)}%)`)},hsva:{h:l.h,s:l.s,v:l.v,a:l.a,string:this.setLetterCase(`hsva(${Math.round(l.h)}, ${Math.round(l.s)}%, ${Math.round(l.v)}%, ${l.a.toFixed(2).toString()})`)},rgb:{r:s.r,g:s.g,b:s.b,string:this.setLetterCase(`rgb(${Math.round(s.r)}, ${Math.round(s.g)}, ${Math.round(s.b)})`)},rgba:{r:s.r,g:s.g,b:s.b,a:s.a,string:this.setLetterCase(`rgba(${Math.round(s.r)}, ${Math.round(s.g)}, ${Math.round(s.b)}, ${s.a.toFixed(2).toString()})`)},hex:this.setLetterCase(o),hexa:this.setLetterCase(a)}}setColor(t){const e=this.parseColor(t);return null!==e&&(this.hue=e.hsva.h,this.saturation=e.hsva.s,this.brightness=e.hsva.v,this.alpha=this.opacity?100*e.hsva.a:100,this.syncValues(),!0)}setLetterCase(t){return"string"!=typeof t?"":this.uppercase?t.toUpperCase():t.toLowerCase()}async syncValues(){const t=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);null!==t&&("hsl"===this.format?this.inputValue=this.opacity?t.hsla.string:t.hsl.string:"rgb"===this.format?this.inputValue=this.opacity?t.rgba.string:t.rgb.string:"hsv"===this.format?this.inputValue=this.opacity?t.hsva.string:t.hsv.string:this.inputValue=this.opacity?t.hexa:t.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove("color-picker__preview-color--copied")}handleEyeDropper(){T&&(new EyeDropper).open().then((t=>{const e=this.value;this.setColor(t.sRGBHex),this.value!==e&&(this.emit("sl-change"),this.emit("sl-input"))})).catch((()=>{}))}selectSwatch(t){const e=this.value;this.disabled||(this.setColor(t),this.value!==e&&(this.emit("sl-change"),this.emit("sl-input")))}getHexString(t,e,r,i=100){const s=new N(`hsva(${t}, ${e}%, ${r}%, ${i/100})`);return s.isValid?s.toHex8String():""}stopNestedEventPropagation(t){t.stopImmediatePropagation()}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}handleValueChange(t,e){if(this.isEmpty=!e,e||(this.hue=0,this.saturation=0,this.brightness=100,this.alpha=100),!this.isSafeValue){const r=this.parseColor(e);null!==r?(this.inputValue=this.value,this.hue=r.hsva.h,this.saturation=r.hsva.s,this.brightness=r.hsva.v,this.alpha=100*r.hsva.a,this.syncValues()):this.inputValue=null!=t?t:""}}focus(t){this.inline?this.base.focus(t):this.trigger.focus(t)}blur(){var t;const e=this.inline?this.base:this.trigger;this.hasFocus&&(e.focus({preventScroll:!0}),e.blur()),(null==(t=this.dropdown)?void 0:t.open)&&this.dropdown.hide()}getFormattedValue(t="hex"){const e=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(null===e)return"";switch(t){case"hex":return e.hex;case"hexa":return e.hexa;case"rgb":return e.rgb.string;case"rgba":return e.rgba.string;case"hsl":return e.hsl.string;case"hsla":return e.hsla.string;case"hsv":return e.hsv.string;case"hsva":return e.hsva.string;default:return""}}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.inline||this.validity.valid?this.input.reportValidity():(this.dropdown.show(),this.addEventListener("sl-after-show",(()=>this.input.reportValidity()),{once:!0}),this.disabled||this.formControlController.emitInvalidEvent(),!1)}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.saturation,e=100-this.brightness,r=Array.isArray(this.swatches)?this.swatches:this.swatches.split(";").filter((t=>""!==t.trim())),i=l.qy`
      <div
        part="base"
        class=${(0,w.H)({"color-picker":!0,"color-picker--inline":this.inline,"color-picker--disabled":this.disabled,"color-picker--focused":this.hasFocus})}
        aria-disabled=${this.disabled?"true":"false"}
        aria-labelledby="label"
        tabindex=${this.inline?"0":"-1"}
      >
        ${this.inline?l.qy`
              <sl-visually-hidden id="label">
                <slot name="label">${this.label}</slot>
              </sl-visually-hidden>
            `:null}

        <div
          part="grid"
          class="color-picker__grid"
          style=${(0,$.W)({backgroundColor:this.getHexString(this.hue,100,100)})}
          @pointerdown=${this.handleGridDrag}
          @touchmove=${this.handleTouchMove}
        >
          <span
            part="grid-handle"
            class=${(0,w.H)({"color-picker__grid-handle":!0,"color-picker__grid-handle--dragging":this.isDraggingGridHandle})}
            style=${(0,$.W)({top:`${e}%`,left:`${t}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            role="application"
            aria-label="HSV"
            tabindex=${(0,k.J)(this.disabled?void 0:"0")}
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
                style=${(0,$.W)({left:(0===this.hue?0:100/(360/this.hue))+"%"})}
                role="slider"
                aria-label="hue"
                aria-orientation="horizontal"
                aria-valuemin="0"
                aria-valuemax="360"
                aria-valuenow=${`${Math.round(this.hue)}`}
                tabindex=${(0,k.J)(this.disabled?void 0:"0")}
                @keydown=${this.handleHueKeyDown}
              ></span>
            </div>

            ${this.opacity?l.qy`
                  <div
                    part="slider opacity-slider"
                    class="color-picker__alpha color-picker__slider color-picker__transparent-bg"
                    @pointerdown="${this.handleAlphaDrag}"
                    @touchmove=${this.handleTouchMove}
                  >
                    <div
                      class="color-picker__alpha-gradient"
                      style=${(0,$.W)({backgroundImage:`linear-gradient(\n                          to right,\n                          ${this.getHexString(this.hue,this.saturation,this.brightness,0)} 0%,\n                          ${this.getHexString(this.hue,this.saturation,this.brightness,100)} 100%\n                        )`})}
                    ></div>
                    <span
                      part="slider-handle opacity-slider-handle"
                      class="color-picker__slider-handle"
                      style=${(0,$.W)({left:`${this.alpha}%`})}
                      role="slider"
                      aria-label="alpha"
                      aria-orientation="horizontal"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${Math.round(this.alpha)}
                      tabindex=${(0,k.J)(this.disabled?void 0:"0")}
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
            style=${(0,$.W)({"--preview-color":this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
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
            ${this.noFormatToggle?"":l.qy`
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
            ${T?l.qy`
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

        ${r.length>0?l.qy`
              <div part="swatches" class="color-picker__swatches">
                ${r.map((t=>{const e=this.parseColor(t);return e?l.qy`
                    <div
                      part="swatch"
                      class="color-picker__swatch color-picker__transparent-bg"
                      tabindex=${(0,k.J)(this.disabled?void 0:"0")}
                      role="button"
                      aria-label=${t}
                      @click=${()=>this.selectSwatch(t)}
                      @keydown=${t=>!this.disabled&&"Enter"===t.key&&this.setColor(e.hexa)}
                    >
                      <div
                        class="color-picker__swatch-color"
                        style=${(0,$.W)({backgroundColor:e.hexa})}
                      ></div>
                    </div>
                  `:(console.error(`Unable to parse swatch color: "${t}"`,this),"")}))}
              </div>
            `:""}
      </div>
    `;return this.inline?i:l.qy`
      <sl-dropdown
        class="color-dropdown"
        aria-disabled=${this.disabled?"true":"false"}
        .containing-element=${this}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        @sl-after-hide=${this.handleAfterHide}
      >
        <button
          part="trigger"
          slot="trigger"
          class=${(0,w.H)({"color-dropdown__trigger":!0,"color-dropdown__trigger--disabled":this.disabled,"color-dropdown__trigger--small":"small"===this.size,"color-dropdown__trigger--medium":"medium"===this.size,"color-dropdown__trigger--large":"large"===this.size,"color-dropdown__trigger--empty":this.isEmpty,"color-dropdown__trigger--focused":this.hasFocus,"color-picker__transparent-bg":!0})}
          style=${(0,$.W)({color:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
          type="button"
        >
          <sl-visually-hidden>
            <slot name="label">${this.label}</slot>
          </sl-visually-hidden>
        </button>
        ${i}
      </sl-dropdown>
    `}};W.styles=[v.$,h],W.dependencies={"sl-button-group":p.N,"sl-button":u.M,"sl-dropdown":a.n,"sl-icon":b.B,"sl-input":s.o,"sl-visually-hidden":i.N},(0,y.Cc)([(0,_.P)('[part~="base"]')],W.prototype,"base",2),(0,y.Cc)([(0,_.P)('[part~="input"]')],W.prototype,"input",2),(0,y.Cc)([(0,_.P)(".color-dropdown")],W.prototype,"dropdown",2),(0,y.Cc)([(0,_.P)('[part~="preview"]')],W.prototype,"previewButton",2),(0,y.Cc)([(0,_.P)('[part~="trigger"]')],W.prototype,"trigger",2),(0,y.Cc)([(0,_.wk)()],W.prototype,"hasFocus",2),(0,y.Cc)([(0,_.wk)()],W.prototype,"isDraggingGridHandle",2),(0,y.Cc)([(0,_.wk)()],W.prototype,"isEmpty",2),(0,y.Cc)([(0,_.wk)()],W.prototype,"inputValue",2),(0,y.Cc)([(0,_.wk)()],W.prototype,"hue",2),(0,y.Cc)([(0,_.wk)()],W.prototype,"saturation",2),(0,y.Cc)([(0,_.wk)()],W.prototype,"brightness",2),(0,y.Cc)([(0,_.wk)()],W.prototype,"alpha",2),(0,y.Cc)([(0,_.MZ)()],W.prototype,"value",2),(0,y.Cc)([(0,n.J)()],W.prototype,"defaultValue",2),(0,y.Cc)([(0,_.MZ)()],W.prototype,"label",2),(0,y.Cc)([(0,_.MZ)()],W.prototype,"format",2),(0,y.Cc)([(0,_.MZ)({type:Boolean,reflect:!0})],W.prototype,"inline",2),(0,y.Cc)([(0,_.MZ)({reflect:!0})],W.prototype,"size",2),(0,y.Cc)([(0,_.MZ)({attribute:"no-format-toggle",type:Boolean})],W.prototype,"noFormatToggle",2),(0,y.Cc)([(0,_.MZ)()],W.prototype,"name",2),(0,y.Cc)([(0,_.MZ)({type:Boolean,reflect:!0})],W.prototype,"disabled",2),(0,y.Cc)([(0,_.MZ)({type:Boolean})],W.prototype,"hoist",2),(0,y.Cc)([(0,_.MZ)({type:Boolean})],W.prototype,"opacity",2),(0,y.Cc)([(0,_.MZ)({type:Boolean})],W.prototype,"uppercase",2),(0,y.Cc)([(0,_.MZ)()],W.prototype,"swatches",2),(0,y.Cc)([(0,_.MZ)({reflect:!0})],W.prototype,"form",2),(0,y.Cc)([(0,_.MZ)({type:Boolean,reflect:!0})],W.prototype,"required",2),(0,y.Cc)([(0,_.Ls)({passive:!1})],W.prototype,"handleTouchMove",1),(0,y.Cc)([(0,f.w)("format",{waitUntilFirstUpdate:!0})],W.prototype,"handleFormatChange",1),(0,y.Cc)([(0,f.w)("opacity",{waitUntilFirstUpdate:!0})],W.prototype,"handleOpacityChange",1),(0,y.Cc)([(0,f.w)("value")],W.prototype,"handleValueChange",1),W.define("sl-color-picker"),r(1931),r(6310),r(5293),r(9435),r(4692),r(8819),r(1696),r(9675),r(875),r(4301),r(5842),r(6292),r(6482),r(3280),r(2089),r(4415),r(4637),r(8326)},8981:(t,e,r)=>{r.d(e,{W:()=>n});var i=r(4716),s=r(5128);const o="important",a=" !"+o,n=(0,s.u$)(class extends s.WL{constructor(t){var e;if(super(t),t.type!==s.OA.ATTRIBUTE||"style"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,r)=>{const i=t[r];return null==i?e:e+`${r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`}),"")}update(t,e){let[r]=e;const{style:s}=t.element;if(void 0===this.ut)return this.ut=new Set(Object.keys(r)),this.render(r);for(const t of this.ut)null==r[t]&&(this.ut.delete(t),t.includes("-")?s.removeProperty(t):s[t]=null);for(const t in r){const e=r[t];if(null!=e){this.ut.add(t);const r="string"==typeof e&&e.endsWith(a);t.includes("-")||r?s.setProperty(t,r?e.slice(0,-11):e,r?o:""):s[t]=e}}return i.c0}})}}]);
//# sourceMappingURL=1944.eb72b697.js.map
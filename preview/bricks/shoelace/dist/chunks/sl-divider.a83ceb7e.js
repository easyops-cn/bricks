"use strict";(globalThis.webpackChunk_next_bricks_shoelace=globalThis.webpackChunk_next_bricks_shoelace||[]).push([[8882],{7577:(t,e,a)=>{a.r(e),a(743),a(7901)},7901:(t,e,a)=>{a(8258),a(4804);var r=a(7719);function i(t){document.documentElement.classList["dark"===t||"dark-v2"===t?"add":"remove"]("sl-theme-dark")}a(7422),(0,r.j)(a.p),i(document.documentElement.dataset.theme),window.addEventListener("theme.change",(t=>{i(t.detail)}))},9832:(t,e,a)=>{a.d(e,{A:()=>o});var r=a(6758),i=a.n(r),s=a(935),n=a.n(s)()(i());n.push([t.id,":root,\n.sl-theme-dark{--sl-z-index-drawer:1000;--sl-z-index-dialog:1000;--sl-z-index-dropdown:1050;--sl-z-index-toast:1060;--sl-z-index-tooltip:1070}.sl-toast-stack{width:100%;left:0;right:auto;overflow:initial;pointer-events:none}.sl-toast-stack > sl-alert{pointer-events:all}",""]);const o=n},7422:(t,e,a)=>{var r=a(2591),i=a.n(r),s=a(1740),n=a.n(s),o=a(8128),l=a.n(o),d=a(855),c=a.n(d),h=a(3051),p=a.n(h),v=a(3656),u=a.n(v),b=a(9832),m={};m.styleTagTransform=u(),m.setAttributes=c(),m.insert=l().bind(null,"head"),m.domAPI=n(),m.insertStyleElement=p(),i()(b.A,m),b.A&&b.A.locals&&b.A.locals},5752:(t,e,a)=>{a.d(e,{w:()=>i});var r=a(1320);function i(t,e){const a=(0,r.IA)({waitUntilFirstUpdate:!1},e);return(e,r)=>{const{update:i}=e,s=Array.isArray(t)?t:[t];e.update=function(t){s.forEach((e=>{const i=e;if(t.has(i)){const e=t.get(i),s=this[i];e!==s&&(a.waitUntilFirstUpdate&&!this.hasUpdated||this[r](e,s))}})),i.call(this,t)}}}},7324:(t,e,a)=>{a.d(e,{$:()=>r});var r=a(5024).AH`
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
`},743:(t,e,a)=>{var r=a(5024).AH`
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
`,i=a(5752),s=a(7324),n=a(8004),o=a(1320),l=a(8146),d=class extends n.f{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};d.styles=[s.$,r],(0,o.Cc)([(0,l.MZ)({type:Boolean,reflect:!0})],d.prototype,"vertical",2),(0,o.Cc)([(0,i.w)("vertical")],d.prototype,"handleVerticalChange",1),d.define("sl-divider")}}]);
//# sourceMappingURL=sl-divider.a83ceb7e.js.map
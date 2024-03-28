"use strict";(self.webpackChunk_next_bricks_shoelace=self.webpackChunk_next_bricks_shoelace||[]).push([[8882],{7577:(t,e,a)=>{a.r(e),a(6258),a(7901)},7901:(t,e,a)=>{a(8258),a(4804);var r=a(7719);function s(t){document.documentElement.classList["dark"===t||"dark-v2"===t?"add":"remove"]("sl-theme-dark")}a(7422),(0,r.j)(a.p),s(document.documentElement.dataset.theme),window.addEventListener("theme.change",(t=>{s(t.detail)}))},9832:(t,e,a)=>{a.d(e,{A:()=>o});var r=a(6758),s=a.n(r),i=a(935),n=a.n(i)()(s());n.push([t.id,":root,\n.sl-theme-dark{--sl-z-index-drawer:1000;--sl-z-index-dialog:1000;--sl-z-index-dropdown:1050;--sl-z-index-toast:1001;--sl-z-index-tooltip:1070}.sl-toast-stack{width:100%;left:0;right:auto;overflow:initial;pointer-events:none}.sl-toast-stack > sl-alert{pointer-events:all}",""]);const o=n},7422:(t,e,a)=>{var r=a(2591),s=a.n(r),i=a(1740),n=a.n(i),o=a(8128),l=a.n(o),d=a(855),c=a.n(d),h=a(3051),p=a.n(h),v=a(3656),u=a.n(v),b=a(9832),m={};m.styleTagTransform=u(),m.setAttributes=c(),m.insert=l().bind(null,"head"),m.domAPI=n(),m.insertStyleElement=p(),s()(b.A,m),b.A&&b.A.locals&&b.A.locals},5794:(t,e,a)=>{a.d(e,{w:()=>s});var r=a(7012);function s(t,e){const a=(0,r.IA)({waitUntilFirstUpdate:!1},e);return(e,r)=>{const{update:s}=e,i=Array.isArray(t)?t:[t];e.update=function(t){i.forEach((e=>{const s=e;if(t.has(s)){const e=t.get(s),i=this[s];e!==i&&(a.waitUntilFirstUpdate&&!this.hasUpdated||this[r](e,i))}})),s.call(this,t)}}}},7324:(t,e,a)=>{a.d(e,{$:()=>r});var r=a(5024).AH`
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
`},6258:(t,e,a)=>{var r=a(7324),s=a(5024).AH`
  ${r.$}

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
`,i=a(5794),n=a(7489),o=a(7012),l=a(2489),d=class extends n.f{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};d.styles=s,(0,o.Cc)([(0,l.MZ)({type:Boolean,reflect:!0})],d.prototype,"vertical",2),(0,o.Cc)([(0,i.w)("vertical")],d.prototype,"handleVerticalChange",1),d.define("sl-divider")}}]);
//# sourceMappingURL=sl-divider.a4eb150c.js.map
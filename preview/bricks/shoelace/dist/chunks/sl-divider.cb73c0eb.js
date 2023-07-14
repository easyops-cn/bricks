"use strict";(self.webpackChunk_next_bricks_shoelace=self.webpackChunk_next_bricks_shoelace||[]).push([[6327],{1868:(t,e,a)=>{a.r(e),a(8146),a(5517)},5517:(t,e,a)=>{a(2969),a(3467);var s=a(4124);function i(t){document.documentElement.classList["dark"===t||"dark-v2"===t?"add":"remove"]("sl-theme-dark")}a(1744),(0,s.t)(a.p),i(document.documentElement.dataset.theme),window.addEventListener("theme.change",(t=>{i(t.detail)}))},738:(t,e,a)=>{a.d(e,{Z:()=>o});var s=a(9601),i=a.n(s),r=a(2609),n=a.n(r)()(i());n.push([t.id,":root,\n.sl-theme-dark{--sl-z-index-drawer:1000;--sl-z-index-dialog:1000;--sl-z-index-dropdown:1050;--sl-z-index-toast:1000;--sl-z-index-tooltip:1070}.sl-toast-stack{width:100%;left:0;right:auto;overflow:initial;pointer-events:none}.sl-toast-stack > sl-alert{pointer-events:all}",""]);const o=n},1744:(t,e,a)=>{var s=a(6062),i=a.n(s),r=a(4036),n=a.n(r),o=a(6793),l=a.n(o),d=a(7892),c=a.n(d),h=a(1173),p=a.n(h),v=a(2464),u=a.n(v),b=a(738),m={};m.styleTagTransform=u(),m.setAttributes=c(),m.insert=l().bind(null,"head"),m.domAPI=n(),m.insertStyleElement=p(),i()(b.Z,m),b.Z&&b.Z.locals&&b.Z.locals},8146:(t,e,a)=>{var s=a(7979),i=a(3030),r=a(3005),n=a(5166),o=a(8427),l=a(1452),d=o.iv`
  ${l.Z}

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
`;let c=class extends n.Z{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};c.styles=d,(0,s.u2)([(0,i.Cb)({type:Boolean,reflect:!0})],c.prototype,"vertical",2),(0,s.u2)([(0,r.Y)("vertical")],c.prototype,"handleVerticalChange",1),c=(0,s.u2)([(0,i.Mo)("sl-divider")],c)},3005:(t,e,a)=>{function s(t,e){const a=Object.assign({waitUntilFirstUpdate:!1},e);return(e,s)=>{const{update:i}=e,r=Array.isArray(t)?t:[t];e.update=function(t){r.forEach((e=>{const i=e;if(t.has(i)){const e=t.get(i),r=this[i];e!==r&&(a.waitUntilFirstUpdate&&!this.hasUpdated||this[s](e,r))}})),i.call(this,t)}}}a.d(e,{Y:()=>s})},1452:(t,e,a)=>{a.d(e,{Z:()=>s});const s=a(8427).iv`
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
`}}]);
//# sourceMappingURL=sl-divider.cb73c0eb.js.map
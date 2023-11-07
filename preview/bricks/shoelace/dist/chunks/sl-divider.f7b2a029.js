"use strict";(self.webpackChunk_next_bricks_shoelace=self.webpackChunk_next_bricks_shoelace||[]).push([[6327],{8954:(t,e,a)=>{a.r(e),a(7528),a(6771)},6771:(t,e,a)=>{a(2969),a(3467);var i=a(4124);function r(t){document.documentElement.classList["dark"===t||"dark-v2"===t?"add":"remove"]("sl-theme-dark")}a(1744),(0,i.t)(a.p),r(document.documentElement.dataset.theme),window.addEventListener("theme.change",(t=>{r(t.detail)}))},738:(t,e,a)=>{a.d(e,{Z:()=>o});var i=a(9601),r=a.n(i),s=a(2609),n=a.n(s)()(r());n.push([t.id,":root,\n.sl-theme-dark{--sl-z-index-drawer:1000;--sl-z-index-dialog:1000;--sl-z-index-dropdown:1050;--sl-z-index-toast:1000;--sl-z-index-tooltip:1070}.sl-toast-stack{width:100%;left:0;right:auto;overflow:initial;pointer-events:none}.sl-toast-stack > sl-alert{pointer-events:all}",""]);const o=n},1744:(t,e,a)=>{var i=a(6062),r=a.n(i),s=a(4036),n=a.n(s),o=a(6793),l=a.n(o),d=a(7892),c=a.n(d),h=a(1173),p=a.n(h),v=a(2464),u=a.n(v),b=a(738),m={};m.styleTagTransform=u(),m.setAttributes=c(),m.insert=l().bind(null,"head"),m.domAPI=n(),m.insertStyleElement=p(),r()(b.Z,m),b.Z&&b.Z.locals&&b.Z.locals},4703:(t,e,a)=>{a.d(e,{Y:()=>r});var i=a(7979);function r(t,e){const a=(0,i.ih)({waitUntilFirstUpdate:!1},e);return(e,i)=>{const{update:r}=e,s=Array.isArray(t)?t:[t];e.update=function(t){s.forEach((e=>{const r=e;if(t.has(r)){const e=t.get(r),s=this[r];e!==s&&(a.waitUntilFirstUpdate&&!this.hasUpdated||this[i](e,s))}})),r.call(this,t)}}}},9710:(t,e,a)=>{a.d(e,{N:()=>i});var i=a(8427).iv`
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
`},7528:(t,e,a)=>{var i=a(9710),r=a(8427).iv`
  ${i.N}

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
`,s=a(4703),n=a(1465),o=a(7979),l=a(9900),d=class extends n.P{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};d.styles=r,(0,o.u2)([(0,l.Cb)({type:Boolean,reflect:!0})],d.prototype,"vertical",2),(0,o.u2)([(0,s.Y)("vertical")],d.prototype,"handleVerticalChange",1),d.define("sl-divider")}}]);
//# sourceMappingURL=sl-divider.f7b2a029.js.map
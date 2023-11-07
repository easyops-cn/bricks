"use strict";(self.webpackChunk_next_bricks_shoelace=self.webpackChunk_next_bricks_shoelace||[]).push([[4902],{4632:(t,e,a)=>{a.r(e),a(6521),a(6771)},6771:(t,e,a)=>{a(2969),a(3467);var s=a(4124);function i(t){document.documentElement.classList["dark"===t||"dark-v2"===t?"add":"remove"]("sl-theme-dark")}a(1744),(0,s.t)(a.p),i(document.documentElement.dataset.theme),window.addEventListener("theme.change",(t=>{i(t.detail)}))},738:(t,e,a)=>{a.d(e,{Z:()=>n});var s=a(9601),i=a.n(s),r=a(2609),l=a.n(r)()(i());l.push([t.id,":root,\n.sl-theme-dark{--sl-z-index-drawer:1000;--sl-z-index-dialog:1000;--sl-z-index-dropdown:1050;--sl-z-index-toast:1000;--sl-z-index-tooltip:1070}.sl-toast-stack{width:100%;left:0;right:auto;overflow:initial;pointer-events:none}.sl-toast-stack > sl-alert{pointer-events:all}",""]);const n=l},1744:(t,e,a)=>{var s=a(6062),i=a.n(s),r=a(4036),l=a.n(r),n=a(6793),o=a.n(n),d=a(7892),h=a.n(d),c=a(1173),u=a.n(c),p=a(2464),b=a.n(p),v=a(738),y={};y.styleTagTransform=b(),y.setAttributes=h(),y.insert=o().bind(null,"head"),y.domAPI=l(),y.insertStyleElement=u(),i()(v.Z,y),v.Z&&v.Z.locals&&v.Z.locals},4703:(t,e,a)=>{a.d(e,{Y:()=>i});var s=a(7979);function i(t,e){const a=(0,s.ih)({waitUntilFirstUpdate:!1},e);return(e,s)=>{const{update:i}=e,r=Array.isArray(t)?t:[t];e.update=function(t){r.forEach((e=>{const i=e;if(t.has(i)){const e=t.get(i),r=this[i];e!==r&&(a.waitUntilFirstUpdate&&!this.hasUpdated||this[s](e,r))}})),i.call(this,t)}}}},9710:(t,e,a)=>{a.d(e,{N:()=>s});var s=a(8427).iv`
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
`},6521:(t,e,a)=>{var s=a(9710),i=a(8427),r=i.iv`
  ${s.N}

  :host {
    display: contents;
  }
`,l=a(4703),n=a(1465),o=a(7979),d=a(9900),h=class extends n.P{constructor(){super(...arguments),this.attrOldValue=!1,this.charData=!1,this.charDataOldValue=!1,this.childList=!1,this.disabled=!1,this.handleMutation=t=>{this.emit("sl-mutation",{detail:{mutationList:t}})}}connectedCallback(){super.connectedCallback(),this.mutationObserver=new MutationObserver(this.handleMutation),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}startObserver(){const t="string"==typeof this.attr&&this.attr.length>0,e=t&&"*"!==this.attr?this.attr.split(" "):void 0;try{this.mutationObserver.observe(this,{subtree:!0,childList:this.childList,attributes:t,attributeFilter:e,attributeOldValue:this.attrOldValue,characterData:this.charData,characterDataOldValue:this.charDataOldValue})}catch(t){}}stopObserver(){this.mutationObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}handleChange(){this.stopObserver(),this.startObserver()}render(){return i.dy` <slot></slot> `}};h.styles=r,(0,o.u2)([(0,d.Cb)({reflect:!0})],h.prototype,"attr",2),(0,o.u2)([(0,d.Cb)({attribute:"attr-old-value",type:Boolean,reflect:!0})],h.prototype,"attrOldValue",2),(0,o.u2)([(0,d.Cb)({attribute:"char-data",type:Boolean,reflect:!0})],h.prototype,"charData",2),(0,o.u2)([(0,d.Cb)({attribute:"char-data-old-value",type:Boolean,reflect:!0})],h.prototype,"charDataOldValue",2),(0,o.u2)([(0,d.Cb)({attribute:"child-list",type:Boolean,reflect:!0})],h.prototype,"childList",2),(0,o.u2)([(0,d.Cb)({type:Boolean,reflect:!0})],h.prototype,"disabled",2),(0,o.u2)([(0,l.Y)("disabled")],h.prototype,"handleDisabledChange",1),(0,o.u2)([(0,l.Y)("attr",{waitUntilFirstUpdate:!0}),(0,l.Y)("attr-old-value",{waitUntilFirstUpdate:!0}),(0,l.Y)("char-data",{waitUntilFirstUpdate:!0}),(0,l.Y)("char-data-old-value",{waitUntilFirstUpdate:!0}),(0,l.Y)("childList",{waitUntilFirstUpdate:!0})],h.prototype,"handleChange",1),h.define("sl-mutation-observer")}}]);
//# sourceMappingURL=sl-mutation-observer.5d8aff0d.js.map
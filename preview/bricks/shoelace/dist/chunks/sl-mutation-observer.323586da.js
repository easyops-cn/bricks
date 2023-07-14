"use strict";(self.webpackChunk_next_bricks_shoelace=self.webpackChunk_next_bricks_shoelace||[]).push([[4902],{658:(t,e,a)=>{a.r(e),a(6034),a(5517)},5517:(t,e,a)=>{a(2969),a(3467);var s=a(4124);function i(t){document.documentElement.classList["dark"===t||"dark-v2"===t?"add":"remove"]("sl-theme-dark")}a(1744),(0,s.t)(a.p),i(document.documentElement.dataset.theme),window.addEventListener("theme.change",(t=>{i(t.detail)}))},738:(t,e,a)=>{a.d(e,{Z:()=>n});var s=a(9601),i=a.n(s),r=a(2609),l=a.n(r)()(i());l.push([t.id,":root,\n.sl-theme-dark{--sl-z-index-drawer:1000;--sl-z-index-dialog:1000;--sl-z-index-dropdown:1050;--sl-z-index-toast:1000;--sl-z-index-tooltip:1070}.sl-toast-stack{width:100%;left:0;right:auto;overflow:initial;pointer-events:none}.sl-toast-stack > sl-alert{pointer-events:all}",""]);const n=l},1744:(t,e,a)=>{var s=a(6062),i=a.n(s),r=a(4036),l=a.n(r),n=a(6793),o=a.n(n),d=a(7892),h=a.n(d),c=a(1173),u=a.n(c),p=a(2464),b=a.n(p),v=a(738),y={};y.styleTagTransform=b(),y.setAttributes=h(),y.insert=o().bind(null,"head"),y.domAPI=l(),y.insertStyleElement=u(),i()(v.Z,y),v.Z&&v.Z.locals&&v.Z.locals},6034:(t,e,a)=>{var s=a(7979),i=a(3030),r=a(8427),l=a(3005),n=a(5166),o=a(1452),d=r.iv`
  ${o.Z}

  :host {
    display: contents;
  }
`;let h=class extends n.Z{constructor(){super(...arguments),this.attrOldValue=!1,this.charData=!1,this.charDataOldValue=!1,this.childList=!1,this.disabled=!1,this.handleMutation=t=>{this.emit("sl-mutation",{detail:{mutationList:t}})}}connectedCallback(){super.connectedCallback(),this.mutationObserver=new MutationObserver(this.handleMutation),this.disabled||this.startObserver()}disconnectedCallback(){this.stopObserver()}startObserver(){const t="string"==typeof this.attr&&this.attr.length>0,e=t&&"*"!==this.attr?this.attr.split(" "):void 0;try{this.mutationObserver.observe(this,{subtree:!0,childList:this.childList,attributes:t,attributeFilter:e,attributeOldValue:this.attrOldValue,characterData:this.charData,characterDataOldValue:this.charDataOldValue})}catch(t){}}stopObserver(){this.mutationObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}handleChange(){this.stopObserver(),this.startObserver()}render(){return r.dy` <slot></slot> `}};h.styles=d,(0,s.u2)([(0,i.Cb)({reflect:!0})],h.prototype,"attr",2),(0,s.u2)([(0,i.Cb)({attribute:"attr-old-value",type:Boolean,reflect:!0})],h.prototype,"attrOldValue",2),(0,s.u2)([(0,i.Cb)({attribute:"char-data",type:Boolean,reflect:!0})],h.prototype,"charData",2),(0,s.u2)([(0,i.Cb)({attribute:"char-data-old-value",type:Boolean,reflect:!0})],h.prototype,"charDataOldValue",2),(0,s.u2)([(0,i.Cb)({attribute:"child-list",type:Boolean,reflect:!0})],h.prototype,"childList",2),(0,s.u2)([(0,i.Cb)({type:Boolean,reflect:!0})],h.prototype,"disabled",2),(0,s.u2)([(0,l.Y)("disabled")],h.prototype,"handleDisabledChange",1),(0,s.u2)([(0,l.Y)("attr",{waitUntilFirstUpdate:!0}),(0,l.Y)("attr-old-value",{waitUntilFirstUpdate:!0}),(0,l.Y)("char-data",{waitUntilFirstUpdate:!0}),(0,l.Y)("char-data-old-value",{waitUntilFirstUpdate:!0}),(0,l.Y)("childList",{waitUntilFirstUpdate:!0})],h.prototype,"handleChange",1),h=(0,s.u2)([(0,i.Mo)("sl-mutation-observer")],h)},3005:(t,e,a)=>{function s(t,e){const a=Object.assign({waitUntilFirstUpdate:!1},e);return(e,s)=>{const{update:i}=e,r=Array.isArray(t)?t:[t];e.update=function(t){r.forEach((e=>{const i=e;if(t.has(i)){const e=t.get(i),r=this[i];e!==r&&(a.waitUntilFirstUpdate&&!this.hasUpdated||this[s](e,r))}})),i.call(this,t)}}}a.d(e,{Y:()=>s})},1452:(t,e,a)=>{a.d(e,{Z:()=>s});const s=a(8427).iv`
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
//# sourceMappingURL=sl-mutation-observer.323586da.js.map
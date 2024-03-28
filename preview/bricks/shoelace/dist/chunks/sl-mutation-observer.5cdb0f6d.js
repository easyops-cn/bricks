"use strict";(self.webpackChunk_next_bricks_shoelace=self.webpackChunk_next_bricks_shoelace||[]).push([[221],{3715:(t,e,a)=>{a.r(e),a(255),a(7901)},7901:(t,e,a)=>{a(8258),a(4804);var s=a(7719);function i(t){document.documentElement.classList["dark"===t||"dark-v2"===t?"add":"remove"]("sl-theme-dark")}a(7422),(0,s.j)(a.p),i(document.documentElement.dataset.theme),window.addEventListener("theme.change",(t=>{i(t.detail)}))},9832:(t,e,a)=>{a.d(e,{A:()=>n});var s=a(6758),i=a.n(s),r=a(935),l=a.n(r)()(i());l.push([t.id,":root,\n.sl-theme-dark{--sl-z-index-drawer:1000;--sl-z-index-dialog:1000;--sl-z-index-dropdown:1050;--sl-z-index-toast:1001;--sl-z-index-tooltip:1070}.sl-toast-stack{width:100%;left:0;right:auto;overflow:initial;pointer-events:none}.sl-toast-stack > sl-alert{pointer-events:all}",""]);const n=l},7422:(t,e,a)=>{var s=a(2591),i=a.n(s),r=a(1740),l=a.n(r),n=a(8128),o=a.n(n),d=a(855),h=a.n(d),c=a(3051),p=a.n(c),u=a(3656),b=a.n(u),v=a(9832),w={};w.styleTagTransform=b(),w.setAttributes=h(),w.insert=o().bind(null,"head"),w.domAPI=l(),w.insertStyleElement=p(),i()(v.A,w),v.A&&v.A.locals&&v.A.locals},5794:(t,e,a)=>{a.d(e,{w:()=>i});var s=a(7012);function i(t,e){const a=(0,s.IA)({waitUntilFirstUpdate:!1},e);return(e,s)=>{const{update:i}=e,r=Array.isArray(t)?t:[t];e.update=function(t){r.forEach((e=>{const i=e;if(t.has(i)){const e=t.get(i),r=this[i];e!==r&&(a.waitUntilFirstUpdate&&!this.hasUpdated||this[s](e,r))}})),i.call(this,t)}}}},7324:(t,e,a)=>{a.d(e,{$:()=>s});var s=a(5024).AH`
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
`},255:(t,e,a)=>{var s=a(7324),i=a(5024),r=i.AH`
  ${s.$}

  :host {
    display: contents;
  }
`,l=a(5794),n=a(7489),o=a(7012),d=a(2489),h=class extends n.f{constructor(){super(...arguments),this.attrOldValue=!1,this.charData=!1,this.charDataOldValue=!1,this.childList=!1,this.disabled=!1,this.handleMutation=t=>{this.emit("sl-mutation",{detail:{mutationList:t}})}}connectedCallback(){super.connectedCallback(),this.mutationObserver=new MutationObserver(this.handleMutation),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}startObserver(){const t="string"==typeof this.attr&&this.attr.length>0,e=t&&"*"!==this.attr?this.attr.split(" "):void 0;try{this.mutationObserver.observe(this,{subtree:!0,childList:this.childList,attributes:t,attributeFilter:e,attributeOldValue:this.attrOldValue,characterData:this.charData,characterDataOldValue:this.charDataOldValue})}catch(t){}}stopObserver(){this.mutationObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}handleChange(){this.stopObserver(),this.startObserver()}render(){return i.qy` <slot></slot> `}};h.styles=r,(0,o.Cc)([(0,d.MZ)({reflect:!0})],h.prototype,"attr",2),(0,o.Cc)([(0,d.MZ)({attribute:"attr-old-value",type:Boolean,reflect:!0})],h.prototype,"attrOldValue",2),(0,o.Cc)([(0,d.MZ)({attribute:"char-data",type:Boolean,reflect:!0})],h.prototype,"charData",2),(0,o.Cc)([(0,d.MZ)({attribute:"char-data-old-value",type:Boolean,reflect:!0})],h.prototype,"charDataOldValue",2),(0,o.Cc)([(0,d.MZ)({attribute:"child-list",type:Boolean,reflect:!0})],h.prototype,"childList",2),(0,o.Cc)([(0,d.MZ)({type:Boolean,reflect:!0})],h.prototype,"disabled",2),(0,o.Cc)([(0,l.w)("disabled")],h.prototype,"handleDisabledChange",1),(0,o.Cc)([(0,l.w)("attr",{waitUntilFirstUpdate:!0}),(0,l.w)("attr-old-value",{waitUntilFirstUpdate:!0}),(0,l.w)("char-data",{waitUntilFirstUpdate:!0}),(0,l.w)("char-data-old-value",{waitUntilFirstUpdate:!0}),(0,l.w)("childList",{waitUntilFirstUpdate:!0})],h.prototype,"handleChange",1),h.define("sl-mutation-observer")}}]);
//# sourceMappingURL=sl-mutation-observer.5cdb0f6d.js.map
/*! For license information please see modern-style-treemap.1d65abaf.js.LICENSE.txt */
(self.webpackChunk_next_bricks_data_view=self.webpackChunk_next_bricks_data_view||[]).push([[2992],{4170:(e,t,a)=>{"use strict";a.r(t),a.d(t,{ModernStyleTreemap:()=>Z});var r,l,i,n,o,s,p,c,b,g,h,u,d,f,v,m,y,x,w,k,Z,S=a(3028),B=a(3395),M=a(1815),z=a(381),C=a(687),U=a(2604),E=a(8657),R=a.n(E),W=a(5366),_=a(4511),q=a(1436),D=a(7847),N=a(4214),X=a(5725),Y=a(2253),j=a(4334),A=a(891),H=a(470),L=a(6426),P=a(1043),O=a(637),T=a(7598),Q=a(4655),F=a(1211),G=a(2779),I=a.n(G),{defineElement:J,property:K,event:V}=(0,W.createDecorators)(),$=function(e){return e.treemapBinary="treemapBinary",e.treemapDice="treemapDice",e.treemapResquarify="treemapResquarify",e.treemapSlice="treemapSlice",e.treemapSliceDice="treemapSliceDice",e.treemapSquarify="treemapSquarify",e}($||{});l=J("data-view.modern-style-treemap",{styleTexts:[P.Z,O.Z]}),i=K({attribute:!1}),o=K({attribute:!1}),p=K({attribute:!1}),b=K({attribute:!1}),h=K({attribute:!1}),d=K({attribute:!1}),v=V({type:"treemap.click"});var ee=new WeakMap,te=new WeakMap,ae=new WeakMap,re=new WeakMap,le=new WeakMap,ie=new WeakMap,ne=new WeakMap,oe=new WeakMap,se=new WeakMap;class pe extends _.ReactNextElement{constructor(){super(...arguments),(0,B.Z)(this,oe,{get:be,set:ce}),(0,B.Z)(this,ee,{writable:!0,value:(w(this),n(this))}),(0,B.Z)(this,te,{writable:!0,value:s(this,$.treemapSquarify)}),(0,B.Z)(this,ae,{writable:!0,value:c(this)}),(0,B.Z)(this,re,{writable:!0,value:g(this)}),(0,B.Z)(this,le,{writable:!0,value:u(this)}),(0,B.Z)(this,ie,{writable:!0,value:f(this)}),(0,B.Z)(this,ne,{writable:!0,value:m(this)}),(0,B.Z)(this,se,{writable:!0,value:e=>{(0,C.Z)(this,oe).emit(e)}})}get data(){return(0,C.Z)(this,ee)}set data(e){(0,z.Z)(this,ee,e)}get tail(){return(0,C.Z)(this,te)}set tail(e){(0,z.Z)(this,te,e)}get leafUseBrick(){return(0,C.Z)(this,ae)}set leafUseBrick(e){(0,z.Z)(this,ae,e)}get leafContainerStyle(){return(0,C.Z)(this,re)}set leafContainerStyle(e){(0,z.Z)(this,re,e)}get tooltipUseBrick(){return(0,C.Z)(this,le)}set tooltipUseBrick(e){(0,z.Z)(this,le,e)}get tooltipStyle(){return(0,C.Z)(this,ie)}set tooltipStyle(e){(0,z.Z)(this,ie,e)}render(){return R().createElement(he,{data:this.data,tail:this.tail,leafUseBrick:this.leafUseBrick,leafContainerStyle:this.leafContainerStyle,tooltipUseBrick:this.tooltipUseBrick,tooltipStyle:this.tooltipStyle,handleClick:(0,C.Z)(this,se)})}}function ce(e){x(this,e)}function be(){return y(this)}k=pe,({e:[n,s,c,g,u,f,m,y,x,w],c:[Z,r]}=(0,U.Z)(k,[[i,1,"data"],[o,1,"tail"],[p,1,"leafUseBrick"],[b,1,"leafContainerStyle"],[h,1,"tooltipUseBrick"],[d,1,"tooltipStyle"],[v,1,"onClickEvent",e=>(0,C.Z)(e,ne),(e,t)=>(0,z.Z)(e,ne,t)]],[l],0,(e=>se.has((0,M.Z)(e))),_.ReactNextElement)),r();var ge={[$.treemapBinary]:D.Z,[$.treemapDice]:N.Z,[$.treemapResquarify]:X.Z,[$.treemapSlice]:Y.Z,[$.treemapSliceDice]:j.Z,[$.treemapSquarify]:A.ZP};function he(e){var{data:t,tail:a,leafUseBrick:r,leafContainerStyle:l,tooltipUseBrick:i,tooltipStyle:n,handleClick:o}=e,[s,{clientWidth:p,clientHeight:c}]=(0,T.y)(),[b,{clientHeight:g}]=(0,T.y)(),[h,u]=(0,E.useState)({clientX:0,clientY:0}),[d,f]=(0,E.useState)(),v=(0,E.useMemo)((()=>{if(s.current){var e,t,a=s.current.getBoundingClientRect(),r=a.width/s.current.clientWidth,l=a.height/s.current.clientHeight,i=h.clientX-a.left,n=h.clientY-a.top,o=a.right-h.clientX,p=a.bottom-h.clientY,{width:c,height:u}=b.current.getBoundingClientRect();if(e=i+16,o<c&&(e=i-c-16,t="right"),i<c&&(t="left"),p<u/2||n<u/2){var d=p<u/2?"bottom":"top";n=p<u/2?n-u/2-16:n+u/2+16,"left"===t&&i-c/2<0?(t="".concat(d,"-left"),e=i):"right"===t&&o-c/2<0?(t="".concat(d,"-right"),e=i-c):(t=d,e=i-c/2)}return f(t),{left:"".concat(e/r,"px"),top:"".concat(n/l-g/2,"px")}}}),[s,h.clientX,h.clientY,b,g]),m=(0,E.useMemo)((()=>(0,H.ZP)(t).sum((e=>e.value)).sort(((e,t)=>t.value-e.value))),[t]),y=(0,E.useMemo)((()=>(0,L.Z)().tile(ge[a]).size([p,c]).padding(1).round(!0)),[a,p,c]),[x,w]=(0,E.useMemo)((()=>{var e=y(m).leaves().map((e=>(0,S.Z)({},e)));return[e,(0,F.keyBy)(e,"data.name")]}),[y,m]),k=(0,E.useMemo)((()=>x.map((e=>{var t=e.y0,a=e.x0,i=e.x1-e.x0,n=e.y1-e.y0;return R().createElement("div",{key:e.data.name,className:"treemap-leaf","data-leaf-id":e.data.name,style:(0,S.Z)((0,S.Z)({},l),{},{top:0,left:0,transform:"translate(".concat(a,"px, ").concat(t,"px)"),width:i,height:n}),onClick:()=>null==o?void 0:o(e.data)},(null==r?void 0:r.useBrick)&&R().createElement(q.ReactUseMultipleBricks,{useBrick:r.useBrick,data:e}))}))),[o,l,r.useBrick,x]),Z=(0,E.useMemo)((()=>(0,S.Z)({},w[h.name])),[w,h.name]),B=(0,E.useMemo)((()=>(0,Q.Q)((e=>{var t=e.target.closest(".treemap-leaf"),a=null==t?void 0:t.getAttribute("data-leaf-id");u((r=>({clientX:e.clientX,clientY:e.clientY,name:t?a:r.name})))}))),[]);return R().createElement("div",{className:"wrapper"},R().createElement("div",{className:"treemap",ref:s,onMouseMove:B,onMouseEnter:()=>{b.current.style.visibility="visible"},onMouseLeave:()=>{b.current.style.visibility="hidden"}},k),R().createElement("div",{className:I()("tooltip",{bottom:"bottom"===d,bottomRight:"bottom-right"===d,bottomLeft:"bottom-left"===d,topLeft:"top-left"===d,topRight:"top-right"===d,top:"top"===d,right:"right"===d}),style:(0,S.Z)((0,S.Z)({},n),v),ref:b},(null==i?void 0:i.useBrick)&&R().createElement(q.ReactUseMultipleBricks,{useBrick:i.useBrick,data:Z})))}},2779:(e,t)=>{var a;!function(){"use strict";var r={}.hasOwnProperty;function l(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var i=typeof a;if("string"===i||"number"===i)e.push(a);else if(Array.isArray(a)){if(a.length){var n=l.apply(null,a);n&&e.push(n)}}else if("object"===i){if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]")){e.push(a.toString());continue}for(var o in a)r.call(a,o)&&a[o]&&e.push(o)}}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0===(a=function(){return l}.apply(t,[]))||(e.exports=a)}()},1043:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});var r=a(9601),l=a.n(r),i=a(2609),n=a.n(i)()(l());n.push([e.id,":host{--palette-rgba-white-1:rgba(255,255,255,10%);--palette-rgba-white-2:rgba(255,255,255,20%);--palette-rgba-white-3:rgba(255,255,255,30%);--palette-rgba-white-4:rgba(255,255,255,40%);--palette-rgba-white-5:rgba(255,255,255,50%);--palette-rgba-white-6:rgba(255,255,255,60%);--palette-rgba-white-7:rgba(255,255,255,70%);--palette-rgba-white-8:rgba(255,255,255,80%);--palette-rgba-white-9:rgba(255,255,255,90%);--palette-rgba-white-10:rgba(255,255,255,100%);--palette-rgba-gray-1:rgba(0,0,0,10%);--palette-rgba-gray-2:rgba(0,0,0,20%);--palette-rgba-gray-3:rgba(0,0,0,30%);--palette-rgba-gray-4:rgba(0,0,0,40%);--palette-rgba-gray-5:rgba(0,0,0,50%);--palette-rgba-gray-6:rgba(0,0,0,60%);--palette-rgba-gray-7:rgba(0,0,0,70%);--palette-rgba-gray-8:rgba(0,0,0,80%);--palette-rgba-gray-9:rgba(0,0,0,90%);--palette-rgba-gray-10:rgba(0,0,0,100%);--palette-rgba-blue-gray-2:rgba(101,106,134,20%);--palette-rgba-blue-gray-3:rgba(101,106,134,30%);--palette-rgba-blue-gray-8:rgba(101,106,134,80%);--palette-tech-blue-4-channel:67,127,255;--palette-tech-blue-4:rgb(var(--palette-tech-blue-4-channel));--palette-tech-blue-6-channel:51,102,255;--palette-tech-blue-6:rgb(var(--palette-tech-blue-6-channel));--palette-tech-blue-8-channel:40,69,159;--palette-tech-blue-8:rgb(var(--palette-tech-blue-8-channel));--palette-sea-green-4-channel:131,245,225;--palette-sea-green-4:rgb(var(--palette-sea-green-4-channel));--palette-green-6-channel:81,235,73;--palette-green-6:rgb(var(--palette-green-6-channel));--palette-green-2:rgba(var(--palette-green-6-channel),20%);--palette-lotus-pink-7-channel:204,0,102;--palette-lotus-pink-7:rgb(var(--palette-lotus-pink-7-channel));--palette-red-6-channel:242,39,39;--palette-red-6:rgb(var(--palette-red-6-channel));--palette-red-2:rgba(var(--palette-red-6-channel),20%);--color-fill-global-bg:#0f1014;--color-fill-bg-container-1:var(--palette-rgba-white-1);--color-fill-bg-container-2:var(--palette-rgba-blue-gray-2);--color-fill-bg-container-3:var(--palette-rgba-blue-gray-8);--color-fill-bg-base-1:var(--palette-rgba-blue-gray-2);--color-fill-bg-base-2:rgba(15,16,20,0%);--color-fill-bg-base-3:rgba(0,0,0,20%);--color-fill-bg-base-4:rgba(40,46,58,100%);--color-fill-bg-base-5:rgba(19,25,47,80%);--color-fill-bg-base-6:var(--palette-rgba-blue-gray-3);--color-brand:var(--palette-tech-blue-6);--color-brand-hover:var(--palette-tech-blue-4);--color-brand-active:var(--palette-tech-blue-8);--color-contrast-1:var(--palette-sea-green-4);--color-error:var(--palette-red-6);--color-error-bg:var(--palette-red-2);--color-success:var(--palette-green-6);--color-success-bg:var(--palette-green-2);--color-header-text-big:var(--palette-rgba-white-10);--color-header-text:var(--palette-rgba-white-10);--color-normal-text:var(--palette-rgba-white-10);--color-strong-text:var(--palette-rgba-white-9);--color-auxiliary-text:var(--palette-rgba-white-8);--color-secondary-text:var(--palette-rgba-white-6);--color-disabled-text:var(--palette-rgba-white-4);--color-border-divider-line:var(--palette-rgba-white-1);--color-text-divider-line-1:var(--palette-rgba-white-2);--color-text-divider-line-2:var(--palette-rgba-white-2);--small-border-radius:2px;--medius-border-radius:5px;--larger-border-radius:12px;--container-border-radius:9999px;--no-border-radius:0px;--mask-bg:var(--palette-rgba-gray-7);--title-font-size-larger:30px;--title-font-size-strong:22px;--title-font-size:18px;--normal-font-size:14px;--auxiliary-font-size:16px;--auxiliary-font-size-small:12px;--overview-data-font-size:34px;--statistics-data-font-size:28px;--normal-data-font-size-larger:20px;--normal-data-font-size:16px;--chart-legend-font-size:12px;--chart-tooltips-font-size-1:12px;--chart-tooltips-font-size-2:12px;--chart-axis-x-font-size:12px;--chart-axis-x-font-size-larger:14px;--chart-axis-y-font-size:12px;--chart-axis-y-font-size-larger:14px;--font-weight-600:600;--font-weight-500:500;--font-weight-400:400;--text-shadow:0px 1px 4px #2863ee;--border-width-base:1px;--border-width-double-base:2px;--border-width-tribble-base:3px;--punctate-width-base:1px;--paragraph-width-base:1px;--button-text-color:#40d0db}",""]);const o=n.toString()}}]);
//# sourceMappingURL=modern-style-treemap.1d65abaf.js.map
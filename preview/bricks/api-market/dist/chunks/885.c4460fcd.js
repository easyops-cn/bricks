"use strict";(globalThis.webpackChunk_next_bricks_api_market=globalThis.webpackChunk_next_bricks_api_market||[]).push([[885],{885:(e,t,s)=>{var i,a=s(4635),n=s(918),d=s(6902),h=s(5536),r=s(6121),l=s(829),c=s(2740),o=s(8769),p=s.n(o),A=s(300),y=s(4295),x=(s(6477),s(3308)),u=s(2765),m=s(4918),k=s(1553),K=s(1913);let S,f,w,E,b,M,N,W,v,g,T,_,C,F,B,D,P,R,Z,G,H,L,j,q,z,I,J,O,Q,U;const{defineElement:V,property:X,method:Y,event:$}=(0,A.createDecorators)();let ee;var te=new WeakMap,se=new WeakMap,ie=new WeakMap,ae=new WeakMap,ne=new WeakMap,de=new WeakMap,he=new WeakMap,re=new WeakMap,le=new WeakMap,ce=new WeakSet,oe=new WeakMap,pe=new WeakMap,Ae=new WeakMap,ye=new WeakMap,xe=new WeakMap;class ue extends y.ReactNextElement{constructor(){super(...arguments),(0,a.A)(this,ce),(0,n.A)(this,te,(S(this),w(this,[]))),(0,n.A)(this,se,(E(this),b(this))),(0,n.A)(this,ie,(M(this),N(this))),(0,n.A)(this,ae,(W(this),v(this,!1))),(0,n.A)(this,ne,(g(this),T(this))),(0,n.A)(this,de,(_(this),C(this))),(0,n.A)(this,he,(F(this),B(this))),(0,n.A)(this,re,(D(this),P(this))),(0,n.A)(this,le,(R(this),Z(this))),(0,n.A)(this,oe,(L(this),e=>{this.expandedKeys=e.keys,(0,h.A)(ce,this,G).emit(e)})),(0,n.A)(this,pe,j(this)),(0,n.A)(this,Ae,(I(this),e=>{this.selectedKeys=e.keys,(0,h.A)(ce,this,q).emit(e)})),(0,n.A)(this,ye,J(this)),(0,n.A)(this,xe,(U(this),(e,t)=>{(0,h.A)(ce,this,O).emit({data:e,action:t})}))}get data(){return(0,l.A)(te,this)}set data(e){(0,r.A)(te,this,e)}get directoryTitle(){return(0,l.A)(se,this)}set directoryTitle(e){(0,r.A)(se,this,e)}get searchable(){return(0,l.A)(ie,this)}set searchable(e){(0,r.A)(ie,this,e)}get hiddenNodeSuffix(){return(0,l.A)(ae,this)}set hiddenNodeSuffix(e){(0,r.A)(ae,this,e)}get placeholder(){return(0,l.A)(ne,this)}set placeholder(e){(0,r.A)(ne,this,e)}get searchFields(){return(0,l.A)(de,this)}set searchFields(e){(0,r.A)(de,this,e)}get selectedKeys(){return(0,l.A)(he,this)}set selectedKeys(e){(0,r.A)(he,this,e)}get expandedKeys(){return(0,l.A)(re,this)}set expandedKeys(e){(0,r.A)(re,this,e)}expandAll(){this.expandedKeys=(0,m.G7)(this.data)}collapseAll(){this.expandedKeys=[]}expandAccordingToSelectedKeys(){this.expandedKeys=(0,m.Ht)(this.data,new Set(this.selectedKeys))}render(){return p().createElement(me,{element:this,data:this.data,directoryTitle:this.directoryTitle,placeholder:this.placeholder,searchable:this.searchable,searchFields:this.searchFields,selectedKeys:this.selectedKeys,expandedKeys:this.expandedKeys,hiddenNodeSuffix:this.hiddenNodeSuffix,onExpand:(0,l.A)(oe,this),onSelect:(0,l.A)(Ae,this),onSuffixActionsClick:(0,l.A)(xe,this)})}}function me(e){const{element:t,data:s,directoryTitle:i,searchable:a,searchFields:n,placeholder:d,hiddenNodeSuffix:h,onSelect:r,onExpand:l,onSuffixActionsClick:c}=e,A=(0,o.useMemo)((()=>new Set(e.expandedKeys)),[e.expandedKeys]),y=(0,o.useMemo)((()=>new Set(e.selectedKeys)),[e.selectedKeys]),[x,S]=(0,o.useState)(""),f=(0,o.useMemo)((()=>{const e=(0,m.vL)(s,x,(n||[]).concat("title"));return x&&(t.expandedKeys=e.expandedKeys),e.data}),[s,x,n]),w=(0,o.useMemo)((()=>(0,m.tn)(f,A)),[f,A]);return p().createElement(k.Z.Provider,{value:{expandedKeysSet:A,selectedKeysSet:y,onSelect:r,onExpand:l,onSuffixActionsClick:c}},p().createElement("div",{className:"directory-container"},i&&p().createElement("div",{className:"directory-title-container"},p().createElement("div",{className:"directory-title",title:i},i),p().createElement("div",{className:"directory-title-toolbar"},p().createElement("slot",{name:"toolbar"}))),a&&p().createElement(K.iZ,{className:"directory-search",trim:!0,placeholder:d,onSearch:e=>{S(e.detail)}}),p().createElement("div",{className:"tree"},p().createElement(u.P,{treeData:w,hiddenNodeSuffix:h}))))}i=ue,({e:[w,E,b,M,N,W,v,g,T,_,C,F,B,D,P,R,Z,G,H,L,j,q,z,I,J,O,Q,U,S],c:[ee,f]}=(0,c.A)(i,[V("api-market.apis-directory-tree",{styleTexts:[x.A]})],[[X({attribute:!1}),1,"data"],[X(),1,"directoryTitle"],[X({type:Boolean}),1,"searchable"],[X({type:Boolean}),1,"hiddenNodeSuffix"],[X(),1,"placeholder"],[X({attribute:!1}),1,"searchFields"],[X({attribute:!1}),1,"selectedKeys"],[X({attribute:!1}),1,"expandedKeys"],[Y(),2,"expandAll"],[Y(),2,"collapseAll"],[Y(),2,"expandAccordingToSelectedKeys"],[$({type:"expand"}),1,"expandEvent",e=>(0,l.A)(le,e),(e,t)=>(0,r.A)(le,e,t)],[$({type:"select"}),1,"selectEvent",e=>(0,l.A)(pe,e),(e,t)=>(0,r.A)(pe,e,t)],[$({type:"action.click"}),1,"actionClickEvent",e=>(0,l.A)(ye,e),(e,t)=>(0,r.A)(ye,e,t)]],0,(e=>xe.has((0,d.A)(e))),y.ReactNextElement)),f()}}]);
//# sourceMappingURL=885.c4460fcd.js.map
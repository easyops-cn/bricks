"use strict";(globalThis.webpackChunk_next_bricks_visual_builder=globalThis.webpackChunk_next_bricks_visual_builder||[]).push([[5238],{2080:(e,t,i)=>{i.r(t),i.d(t,{ADVANCED_CHANGE_KEY:()=>_e,BEFORE_SUBMIT_KEY:()=>We,LegacyPropertyEditor:()=>et,PropertyEditor:()=>Ie,SchemaField:()=>Fe});var s,a=i(4635),n=i(918),r=i(6902),o=i(5536),l=i(6121),h=i(829),d=i(2740),c=i(8769),u=i.n(c),A=i(300),m=i(4295),p=(i(6477),i(5908)),v=i(7091),k=i(8788),g=i(6768),f=i(6257),E=i(9708),b=i(9592),M=i(3768),y=i(2803),w=i(3824),C=i(2513),S=i(5067),W=i(1477),_=i(4287),F=i(966),x=i(5768),I=i(6110),L=i(5944),N=i(8409),V=i(5223),P=i(3995),T=(i(74),i(1030)),q=i.n(T);let R,Z,U,O,B,D,H,Y,$,z,G,J,K,j,Q,X,ee,te,ie,se,ae,ne,re,oe,le,he,de,ce,ue,Ae,me,pe,ve,ke,ge,fe,Ee,be;const{defineElement:Me,property:ye,method:we,event:Ce}=(0,A.createDecorators)(),Se=u().forwardRef(et),We="before_submit",_e="on_advanced_change",Fe=(0,v.Uy)({components:{FormLayout:E.Hb,Input:E.pd,FormItem:y.M,FormItemWithoutAdvanced:E.eI,FormCollapse:E.w9,NumberPicker:E.Y_,Radio:E.sx,Select:E.l6,Switch:E.dO,CategoryTitle:M.H,CodeEditor:w.S,IconSelect:C.r,ColorPicker:S.h,UseChildrenSelect:x._,InputWithUrl:W.r,InputWithUnit:F.U,TextAlignRadio:_.p,CustomOptions:L.F,BoxSize:I.i,CustomTab:N.v}});let xe,Ie;var Le=new WeakMap,Ne=new WeakMap,Ve=new WeakMap,Pe=new WeakMap,Te=new WeakMap,qe=new WeakMap,Re=new WeakMap,Ze=new WeakMap,Ue=new WeakMap,Oe=new WeakMap,Be=new WeakSet,De=new WeakMap,He=new WeakMap,Ye=new WeakMap,$e=new WeakMap,ze=new WeakMap,Ge=new WeakMap,Je=new WeakMap,Ke=new WeakMap,je=new WeakMap,Qe=new WeakMap;class Xe extends m.ReactNextElement{constructor(){super(...arguments),(0,a.A)(this,Be),(0,n.A)(this,Le,(R(this),(0,c.createRef)())),(0,n.A)(this,Ne,U(this)),(0,n.A)(this,Ve,(O(this),B(this))),(0,n.A)(this,Pe,(D(this),H(this))),(0,n.A)(this,Te,(Y(this),$(this))),(0,n.A)(this,qe,(z(this),G(this))),(0,n.A)(this,Re,(J(this),K(this))),(0,n.A)(this,Ze,(j(this),Q(this))),(0,n.A)(this,Ue,(X(this),ee(this))),(0,n.A)(this,Oe,(te(this),ie(this))),(0,n.A)(this,De,(ne(this),re(this))),(0,n.A)(this,He,(he(this),de(this))),(0,n.A)(this,Ye,(Ae(this),e=>{(0,o.A)(Be,this,ce).emit(e)})),(0,n.A)(this,$e,me(this)),(0,n.A)(this,ze,(ke(this),e=>{(0,o.A)(Be,this,pe).emit(e)})),(0,n.A)(this,Ge,void 0),(0,n.A)(this,Je,(0,p.fA)(We,((e,t)=>i=>{(0,l.A)(Ge,this,i(e,t))}))),(0,n.A)(this,Ke,ge(this)),(0,n.A)(this,je,(be(this),e=>{(0,o.A)(Be,this,fe).emit(e)})),(0,n.A)(this,Qe,(e=>{const t="string"==typeof e&&"undefined"===e?void 0:(0,T.omit)(e,["dataset.testid"]),i=[];(0,T.isEmpty)(null==t?void 0:t.dataset)&&i.push("dataset"),(0,T.isEmpty)(null==t?void 0:t.style)&&i.push("style");const s=(0,T.omit)(t,i);if(!(0,T.isEmpty)(s))return s}))}get editorName(){return(0,h.A)(Ne,this)}set editorName(e){(0,l.A)(Ne,this,e)}get values(){return(0,h.A)(Ve,this)}set values(e){(0,l.A)(Ve,this,e)}get advancedMode(){return(0,h.A)(Pe,this)}set advancedMode(e){(0,l.A)(Pe,this,e)}get dataList(){return(0,h.A)(Te,this)}set dataList(e){(0,l.A)(Te,this,e)}get editorPackages(){return(0,h.A)(qe,this)}set editorPackages(e){(0,l.A)(qe,this,e)}get links(){return(0,h.A)(Re,this)}set links(e){(0,l.A)(Re,this,e)}get extraLibs(){return(0,h.A)(Ze,this)}set extraLibs(e){(0,l.A)(Ze,this,e)}get childSlots(){return(0,h.A)(Ue,this)}set childSlots(e){(0,l.A)(Ue,this,e)}validate(){var e;const t=null===(e=(0,h.A)(Le,this).current)||void 0===e?void 0:e.getFormInstance();(0,l.A)(Ge,this,null),t.validate().then((()=>{if(this.advancedMode)(0,o.A)(Be,this,se).emit(t.values[P.qZ]);else{const e=q().omit(t.values,[P.qZ]);t.notify(We,e),(0,o.A)(Be,this,se).emit((0,h.A)(Ge,this)??e)}})).catch((e=>{(0,o.A)(Be,this,oe).emit(e)}))}render(){return u().createElement(Se,{ref:(0,h.A)(Le,this),editorName:this.editorName,values:(0,h.A)(Qe,this).call(this,this.values),advancedMode:this.advancedMode,dataList:this.dataList,extraLibs:this.extraLibs,links:this.links,childSlots:this.childSlots,editorPackages:this.editorPackages,handleValuesChange:(0,h.A)(Ye,this),handleTokenClick:(0,h.A)(ze,this),handleTriggerAction:(0,h.A)(je,this),onSubmitEffect:(0,h.A)(Je,this)})}}function et(e,t){let{advancedMode:i,values:s,editorName:a,dataList:n,editorPackages:r,extraLibs:o,childSlots:l,links:h,handleValuesChange:d,handleTokenClick:A,handleTriggerAction:m,onSubmitEffect:E}=e;const[M,y]=(0,c.useState)(xe),w=(0,b.useCurrentTheme)(),C=(0,c.useMemo)((()=>(0,f.VC)()),[]),S=(0,c.useMemo)((()=>(0,p.DG)()),[M]),W=(0,c.useRef)(null),_=(0,c.useRef)(!1),F=(0,c.useMemo)((()=>(0,p.fA)(_e,((e,t)=>i=>{const s=!e&&t.values[P.qZ]?t.values[P.qZ]:t.values;W.current=i(e,t,s)}))),[]);(0,c.useImperativeHandle)(t,(()=>({getFormInstance:()=>S})));const x=(0,c.useCallback)((async()=>{V.customEditors.get(a)?y((()=>{var e;return null===(e=V.customEditors.get(a))||void 0===e?void 0:e(u())})):(await V.__secret_internals.loadEditors([a],r),xe=()=>{var e;return null===(e=V.customEditors.get(a))||void 0===e?void 0:e(u())},y(xe))}),[a,r]),I=(0,c.useCallback)(((e,t)=>{if(t){const t=q().omit(e,[P.qZ]);return{[P.qZ]:q().isEmpty(t)?"":t}}return e[P.qZ]??e}),[]);return(0,c.useEffect)((()=>{x()}),[x]),(0,c.useEffect)((()=>{M&&S.setInitialValues(s,"overwrite")}),[M,S]),(0,c.useEffect)((()=>{_.current=!0,W.current=null,S.notify(_e,i),S.query(P.N4).take((e=>{e.display=i?"hidden":"visible"})),S.query(P.qZ).take((e=>{e.display=i?"visible":"hidden"}));const e=S.getState().values,t=I(W.current??e,i);S.setValues(t,"overwrite"),_.current=!1}),[i,S,I,M]),(0,c.useEffect)((()=>{S.addEffects("onValueChange",(()=>{(0,p.A$)((e=>{_.current||d(e.values)}))}))}),[S,d]),M?u().createElement("div",{className:"property-form-wrapper"},u().createElement(k.Ay,{prefixCls:"antdV5",theme:{algorithm:"dark-v2"===w?g.A.darkAlgorithm:g.A.defaultAlgorithm,components:{InputNumber:{handleVisible:!0}}},getPopupContainer:e=>e},u().createElement(f.N7,{cache:C},u().createElement(v.Op,{form:S},u().createElement(M,{advancedMode:i,SchemaFieldComponent:Fe,form:S,scope:{dataList:n,advancedMode:i,childSlots:l,extraLibs:o,links:h,tokenClick:e=>A(e.detail),triggerAction:m},effects:{onFieldInit:p.yd,onFieldValueChange:p.$l,onFieldInitialValueChange:p.J4,onFormInitialValuesChange:p.oJ,onFormValidateSuccess:p.zu,onFormValuesChange:p.A$,onSubmit:E,onAdvancedChange:F},formilySchemaFormatter:P.cV}))))):null}s=Xe,({e:[U,O,B,D,H,Y,$,z,G,J,K,j,Q,X,ee,te,ie,se,ae,ne,re,oe,le,he,de,ce,ue,Ae,me,pe,ve,ke,ge,fe,Ee,be,R],c:[Ie,Z]}=(0,d.A)(s,[Me("visual-builder.property-editor",{shadowOptions:!1,dependencies:["eo-icon-select","vs.code-editor","eo-tooltip"]})],[[ye(),1,"editorName"],[ye({attribute:!1}),1,"values"],[ye({type:Boolean}),1,"advancedMode"],[ye({attribute:!1}),1,"dataList"],[ye({attribute:!1}),1,"editorPackages"],[ye({attribute:!1}),1,"links"],[ye({attribute:!1}),1,"extraLibs"],[ye({attribute:!1}),1,"childSlots"],[Ce({type:"validate.success"}),1,"successEvent",e=>(0,h.A)(Oe,e),(e,t)=>(0,l.A)(Oe,e,t)],[Ce({type:"validate.error"}),1,"errorEvent",e=>(0,h.A)(De,e),(e,t)=>(0,l.A)(De,e,t)],[we(),2,"validate"],[Ce({type:"values.change"}),1,"valuesChangeEvent",e=>(0,h.A)(He,e),(e,t)=>(0,l.A)(He,e,t)],[Ce({type:"token.click"}),1,"tokenClick",e=>(0,h.A)($e,e),(e,t)=>(0,l.A)($e,e,t)],[Ce({type:"trigger.action"}),1,"triggerActionEvent",e=>(0,h.A)(Ke,e),(e,t)=>(0,l.A)(Ke,e,t)]],0,(e=>Qe.has((0,r.A)(e))),m.ReactNextElement)),Z()}}]);
//# sourceMappingURL=property-editor.5846d698.js.map
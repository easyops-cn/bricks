"use strict";(globalThis.webpackChunk_next_bricks_inject=globalThis.webpackChunk_next_bricks_inject||[]).push([[876],{7876:(e,t,o)=>{o.d(t,{A:()=>N});var n=o(5223),a=o(108),r=o(6055),i=o(1030),s=o(8317),d=o.n(s);let l;function c(e){e.preventDefault(),e.stopPropagation(),function(e){const t=g(e);t.length>0&&window.parent.postMessage({sender:"previewer",type:"select-brick",iidList:t},l)}(e.composedPath())}function p(e){e.preventDefault(),e.stopPropagation()}const u=(0,i.throttle)((e=>{const t=g(e);t.length>0&&window.parent.postMessage({sender:"previewer",type:"hover-on-brick",iidList:t},l)}),100,{leading:!1});function v(e){e.preventDefault(),e.stopPropagation(),u(e.composedPath())}function h(e){e.preventDefault(),e.stopPropagation(),u(e.composedPath())}function w(e){e.preventDefault(),e.stopPropagation(),window.parent.postMessage({sender:"previewer",type:"hover-on-brick",iidList:[]},l)}function m(e){e.preventDefault(),e.stopPropagation(),function(e,t){const o=g(e);o.length>0&&window.parent.postMessage({sender:"previewer",type:"context-menu-on-brick",iidList:o,position:t},l)}(e.composedPath(),{x:e.clientX,y:e.clientY})}function g(e){const t=[];for(const o of e)o instanceof HTMLElement&&"string"==typeof o.dataset.iid&&t.push(o.dataset.iid);return t}var y=o(2153),f=o(6946);function b(e){const t=function(e){const t=new Set;return(0,y.h)(e,(e=>{switch(e.type){case"Resolvable":case"EventHandler":{var o;const n=null===(o=e.raw)||void 0===o?void 0:o.useProvider;n&&t.add(n)}}})),t}((0,f.lN)(e)),o=[];for(const e of t)e.includes("@")&&o.push(e);return o}function S(e){const t=typeof e;switch(t){case"string":case"boolean":case"number":return{type:t,value:e};case"undefined":return{type:t}}return null===e?{type:"null"}:Array.isArray(e)?{type:"array",length:e.length}:{type:"object"}}let I=!1,x=n.getHistory,E=n.matchPath,k=n.__secret_internals,L=r.flowApi,P=!1;try{var C;const e=window.dll;if(e&&null!==(C=window.BRICK_NEXT_VERSIONS)&&void 0!==C&&null!==(C=C["brick-container"])&&void 0!==C&&C.startsWith("2.")){const{getHistory:t,developHelper:o,collectDebugContract:n}=e("tYg3"),{matchPath:a}=e("A+yw");x=t,E=a,k={...o,getContextValue(e,t){let{tplStateStoreId:n}=t;return o.getContextValue(e,{tplContextId:n})},getAllContextValues(e){let{tplStateStoreId:t}=e;const n=o.getAllContextValues({tplContextId:t});return Object.fromEntries([...n].map((e=>{let[t,o]=e;return[t,o.value]})))},debugDataValue(e,t){let{tplStateStoreId:n}=t;return o.debugDataValue(e,{tplContextId:n})}},L={collectDebugContract:n},P=!0}}catch(e){console.error("Try to use v2 runtime APIs failed:",e)}let D=null,T=null;async function N(e,t){var o,r;if(I)return;I=!0;const s=t=>{window.parent.postMessage({sender:"previewer",...t},e)};let u,g,y,f;s({type:"preview-started"}),l=e;const P=(e,t,o)=>{const n=A(t);s({type:"highlight-brick",highlightType:e,outlines:n,iid:t,alias:o})};let C;t.templateId&&(C=t.settings);const N=()=>{k.updateTemplatePreviewSettings(t.appId,t.templateId,C),x().reload()},R=()=>{k.updateSnippetPreviewSettings(t.appId,JSON.parse(t.snippetData)),x().reload()},q=()=>{k.updateFormPreviewSettings(t.appId,t.formId,t.formData),x().reload()},O=x();window.addEventListener("message",(async o=>{var r,S;let{data:I,origin:E}=o;if(E===e&&I&&"preview-container"===I.sender)if("builder"===I.forwardedFor)switch(I.type){case"hover-on-brick":u=I.iid,g=I.alias,P("hover",I.iid,I.alias);break;case"hover-on-main":P("hover","#main-mount-point","root");break;case"hover-on-context":(e=>{const t=e.map((e=>A(e.iid,e.alias))).flat();s({type:"highlight-context",outlines:t})})(I.highlightNodes);break;case"select-brick":y=I.iid,f=I.alias,P("active",I.iid,I.alias);break;case"hover-on-iframe":(e=>{const t=document.elementFromPoint(e.x,e.y);if("BODY"===(null==t?void 0:t.tagName))window.parent.postMessage({sender:"previewer",type:"hover-on-main",isDirection:!0,position:{x:e.x,y:e.y}},l);else{const o=function(e){const t=[];let o=e;for(;o;)"string"==typeof o.dataset.iid&&t.push(o.dataset.iid),o=o.parentElement;return t}(t);window.parent.postMessage({sender:"previewer",type:"hover-on-brick",iidList:o,isDirection:!0,position:{x:e.x,y:e.y}},l)}})(I.position)}else switch(I.type){case"toggle-inspecting":I.enabled?(window.addEventListener("click",c,!0),window.addEventListener("mousedown",p,!0),window.addEventListener("mouseover",p,!0),window.addEventListener("mouseup",p,!0),window.addEventListener("pointerdown",v,!0),window.addEventListener("pointermove",h,!0),window.addEventListener("pointerup",p,!0),window.addEventListener("pointerleave",w,!0),window.addEventListener("contextmenu",m,!0)):(window.removeEventListener("click",c,!0),window.removeEventListener("mousedown",p,!0),window.removeEventListener("mouseover",p,!0),window.removeEventListener("mouseup",p,!0),window.removeEventListener("pointerdown",v,!0),window.removeEventListener("pointermove",h,!0),window.removeEventListener("pointerup",p,!0),window.removeEventListener("pointerleave",w,!0),window.removeEventListener("contextmenu",m,!0));break;case"refresh":if(null!==(r=I.options)&&void 0!==r&&r.updateStoryboardType){var D;let e;var T,H;"route"===I.options.updateStoryboardType?k.updateStoryboardByRoute(t.appId,I.storyboardPatch):"template"===I.options.updateStoryboardType?k.updateStoryboardByTemplate(t.appId,I.storyboardPatch,I.options.settings):"snippet"===I.options.updateStoryboardType?k.updateStoryboardBySnippet(t.appId,I.storyboardPatch):"form"===I.options.updateStoryboardType&&k.updateFormPreviewSettings(t.appId,t.formId,I.storyboardPatch),"form"!==(null===(D=I.options)||void 0===D?void 0:D.updateStoryboardType)&&(e=await(null===(T=(H=k).getAddedContracts)||void 0===T?void 0:T.call(H,I.storyboardPatch,{appId:t.appId,updateStoryboardType:I.options.updateStoryboardType,formId:t.formId,collectUsedContracts:b}))),(0,i.isEmpty)(e)?x().reload():s({type:"contract-update",data:{add:e}});break}k.updateStoryboard(t.appId,I.storyboardPatch),t.templateId?(C=I.settings,N()):t.formId||t.formData?q():null!==(S=I.options)&&void 0!==S&&S.snippetData?(t.snippetData=I.options.snippetData,R()):x().reload();break;case"reload":location.reload();break;case"back":O.goBack();break;case"forward":O.goForward();break;case"capture":(async function(e,t){const o=await d()(document.body,{logging:!1,scale:1,width:window.innerWidth,height:window.innerHeight,foreignObjectRendering:!0}),n=document.createElement("canvas");var a;return function(e,t,o,n){const a=o/n,{width:r,height:i}=e,s=r/i,d=s>=a,l=d?o:n*s,c=d?o/s:n;t.width=l,t.height=c,t.getContext("2d").drawImage(e,0,0,r,i,0,0,l,c),t.toDataURL()}(o,n,e,t),await(a=n,new Promise((function(e,t){a.toBlob((function(o){o?e(o):t()}))})))})(I.maxWidth,I.maxHeight).then((e=>{s({type:"capture-ok",screenshot:e})}),(()=>{s({type:"capture-failed"})}));break;case"inspect-data-value":((e,t)=>{try{const{dataType:o}=t;let n,a,r;if("state"===o&&(n=M(),!n))return void s({type:"inspect-data-value-error",data:{error:{message:"tplStateStoreId not found, unable to preview STATE value"}}});if(e)r="inspect-single-data-value-success",a=k.getContextValue(e,{tplStateStoreId:n});else{r="inspect-all-data-values-success";const e=k.getAllContextValues({tplStateStoreId:n});a=Object.entries(e).map((e=>{let[t,o]=e;return{name:t,value:o}}))}s({type:r,data:{name:e,value:a}})}catch(e){s({type:"inspect-data-value-error",data:{message:e.message}})}})(I.name,I.option);break;case"update-preview-url":{const e=I.previewUrl.startsWith(window.origin)?I.previewUrl.substring(window.origin.length):I.previewUrl,t=(0,n.getBasePath)(),o=e.startsWith(t)?e.substring(t.length-1):e;x().push(o);break}case"update-preview-route":t.routePath=I.routePath,t.routeExact=I.routeExact,j();break;case"debug-data-value":(async(e,o,n)=>{try{o&&L.collectDebugContract([o]);const a=await k.debugDataValue(e,{tplStateStoreId:"state"===n.dataType?M():void 0,routeId:t.routeId});s({type:"debug-data-value-success",data:{debugConf:e,value:a}})}catch(e){s({type:"debug-data-value-error",data:e instanceof a.HttpResponseError?e.responseJson:{message:e.message}})}})(I.debugData,I.contractData,I.options);break;case"excute-proxy-method":{const[e,t,o=[]]=I.proxyMethodArgs;try{const n=document.body.querySelector(e)[t](...o);window.parent.postMessage({sender:"previewer",type:"excute-proxy-method-success",data:{method:t,res:n}})}catch(e){window.parent.postMessage({sender:"previewer",type:"excute-proxy-method-error",data:{method:t,res:e.message}})}break}}})),window.addEventListener("scroll",(()=>{s({type:"scroll",scroll:{x:window.scrollX,y:window.scrollY}})}));let H,V=!0;const _=e=>{s({type:"url-change",url:location.origin+O.createHref(e)}),H=e,j()};function j(){if(t.routePath){const e=!!E(H.pathname,{path:t.routePath,exact:t.routeExact});if(s({type:"route-match-change",match:e}),t.templateId&&!V&&e){const e=document.querySelector("#main-mount-point"),t=new MutationObserver((()=>{1===e.childNodes.length&&"SPAN"===e.firstChild.tagName&&0===e.firstChild.childNodes.length&&(N(),t.disconnect())}));t.observe(e,{childList:!0})}if(t.formId&&!V&&e){const e=document.querySelector("#main-mount-point"),t=new MutationObserver((()=>{1===e.childNodes.length&&"SPAN"===e.firstChild.tagName&&0===e.firstChild.childNodes.length&&(q(),t.disconnect())}));t.observe(e,{childList:!0})}if(t.snippetData&&!V&&e){const e=document.querySelector("#main-mount-point"),t=new MutationObserver((()=>{1===e.childNodes.length&&"SPAN"===e.firstChild.tagName&&0===e.firstChild.childNodes.length&&(R(),t.disconnect())}));t.observe(e,{childList:!0})}V=e}}function B(){var e;const t=document.querySelector("eo-page-view"),o=(null==t||null===(e=t.shadowRoot)||void 0===e?void 0:e.querySelector(".content"))??null;var n;o!==D&&(null===(n=D)||void 0===n||n.removeEventListener("scroll",F),null==o||o.addEventListener("scroll",F),D=o,T=t)}function F(){s({type:"content-scroll",scroll:{x:this.scrollLeft,y:this.scrollTop}})}_(O.location),O.listen(_),t.templateId&&N(),(t.formId||t.formData)&&q(),t.snippetData&&R();const U=()=>{var e;const o=t.routeId,n=k.getLegalRuntimeValue({routeId:o});s({type:"inspect-runtime-data-value",data:{...(0,i.omit)(n,"query"),query:n.query?Object.fromEntries(n.query.entries()):{},path:null===(e=n.match)||void 0===e?void 0:e.params}})};let W;function Y(e){const o=t.templateId?M():void 0;var n,a;(W!==o||e)&&(W=o,null===(n=(a=k).setRealTimeDataInspectRoot)||void 0===n||n.call(a,{tplStateStoreId:o}))}null===(o=(r=k).addRealTimeDataInspectHook)||void 0===o||o.call(r,(e=>{let{changeType:t,tplStateStoreId:o,detail:n}=e;s({type:"real-time-data-inspect-change",changeType:t,tplStateStoreId:o,detail:"update"===t?{name:n.name,annotation:S(n.value)}:{data:Object.fromEntries(Object.entries(n.data).map((e=>{let[t,o]=e;return[t,S(o)]})))}})})),window.addEventListener("route.render",(()=>{Y(!0),U()})),B(),Y(!0),U(),new MutationObserver((0,i.throttle)((()=>{B(),Y(),u&&P("hover",u,g),y&&P("active",y,f)}),100,{leading:!1})).observe(document.body,{subtree:!0,childList:!0})}function A(e,t){if(!e)return[];const o=e.includes("#"),n=function(e,t){const o=[];return function n(a){const r=a.querySelectorAll(t?e:`[data-iid="${e}"]`);if(o.push(...r),!(a===document&&r.length>0))for(const e of a.querySelectorAll("*"))e.shadowRoot&&n(e.shadowRoot)}(document),o}(e,o),a=function(e,t){return e.map((e=>{var o,n,a;const r=null===(o=T)||void 0===o?void 0:o.contains(e),{width:i,height:s,left:d,top:l}=e.getBoundingClientRect();return{width:i,height:s,left:d+window.scrollX+(r?(null===(n=D)||void 0===n?void 0:n.scrollLeft)??0:0),top:l+window.scrollY+(r?(null===(a=D)||void 0===a?void 0:a.scrollTop)??0:0),alias:t,hasContentScroll:r}}))}(n,t);return o?a.map((e=>({...e,height:window.innerHeight-e.top}))):a}function M(){var e;const t=document.querySelector("#main-mount-point");return null==t||null===(e=t.firstChild)||void 0===e?void 0:e.dataset[P?"tplContextId":"tplStateStoreId"]}}}]);
//# sourceMappingURL=876.5ce0d2e6.js.map
"use strict";(globalThis.webpackChunk_next_bricks_ai=globalThis.webpackChunk_next_bricks_ai||[]).push([[5125],{9099:(e,t,n)=>{n.r(t),n.d(t,{ChatAgent:()=>J,ChatAgentComponent:()=>H,LegacyChatAgentComponent:()=>ae});var r,o=n(4635),a=n(918),i=n(6902),s=n(5536),c=n(6121),l=n(829),u=n(2740),h=n(8769),d=n.n(h),f=n(300),v=n(4295),p=n(5223),g=n(3078),y=n(356);let A,w,m,b,k,C,I,S,E,M,R,j,P,T,W,x,L,N,U,_,q,O;const{defineElement:z,property:B,event:D,method:$}=(0,f.createDecorators)(),H=(0,h.forwardRef)(ae);let J;var F=new WeakMap,G=new WeakMap,K=new WeakMap,Q=new WeakMap,V=new WeakMap,X=new WeakSet,Y=new WeakMap,Z=new WeakMap,ee=new WeakMap,te=new WeakMap,ne=new WeakMap,re=new WeakMap;class oe extends v.ReactNextElement{constructor(){super(...arguments),(0,o.A)(this,X),(0,a.A)(this,F,(A(this),m(this))),(0,a.A)(this,G,(b(this),k(this))),(0,a.A)(this,K,(C(this),I(this))),(0,a.A)(this,Q,(S(this),E(this))),(0,a.A)(this,V,(M(this),R(this))),(0,a.A)(this,Y,(T(this),e=>{(0,s.A)(X,this,j).emit(e)})),(0,a.A)(this,Z,W(this)),(0,a.A)(this,ee,(N(this),e=>{(0,s.A)(X,this,x).emit(e)})),(0,a.A)(this,te,U(this)),(0,a.A)(this,ne,(O(this),e=>{(0,s.A)(X,this,_).emit(e)})),(0,a.A)(this,re,(0,h.createRef)())}get agentId(){return(0,l.A)(F,this)}set agentId(e){(0,c.A)(F,this,e)}get robotId(){return(0,l.A)(G,this)}set robotId(e){(0,c.A)(G,this,e)}get conversationId(){return(0,l.A)(K,this)}set conversationId(e){(0,c.A)(K,this,e)}get alwaysUseNewConversation(){return(0,l.A)(Q,this)}set alwaysUseNewConversation(e){(0,c.A)(Q,this,e)}postMessage(e){var t;return null===(t=(0,l.A)(re,this).current)||void 0===t?void 0:t.postMessage(e)}sendRequest(e,t,n){var r;return null===(r=(0,l.A)(re,this).current)||void 0===r?void 0:r.sendRequest(e,t,n)}lowLevelSendRequest(e,t,n){var r;return null===(r=(0,l.A)(re,this).current)||void 0===r?void 0:r.lowLevelSendRequest(e,t,n)}newConversation(){var e;null===(e=(0,l.A)(re,this).current)||void 0===e||e.newConversation()}render(){return d().createElement(H,{ref:(0,l.A)(re,this),agentId:this.agentId,robotId:this.robotId,conversationId:this.conversationId,alwaysUseNewConversation:this.alwaysUseNewConversation,onMessagesUpdate:(0,l.A)(Y,this),onBusyChange:(0,l.A)(ee,this),onConversationIdChange:(0,l.A)(ne,this)})}}function ae(e,t){let{agentId:n,robotId:r,conversationId:o,alwaysUseNewConversation:a,onMessageChunkPush:i,onMessagesUpdate:s,onBusyChange:c,onConversationIdChange:l}=e;const u=(0,h.useRef)(!1),d=(0,h.useRef)(1),f=(0,h.useRef)(!1),[v,y]=(0,h.useState)(null);(0,h.useEffect)((()=>{y(o??null)}),[o]),(0,h.useEffect)((()=>{u.current&&(null==l||l(v))}),[v,l]);const A=(0,h.useRef)(0),w=(0,h.useCallback)((()=>A.current++),[]),[m,b]=(0,h.useState)([]),k=(0,h.useCallback)((e=>{null==i||i(e),b((t=>{const n=t[t.length-1];return n&&n.key===e.key?(n.content+=e.delta.content,[...t]):(null!=n&&n.partial&&(n.partial=!1),[...t,{...e.delta,key:e.key,partial:e.partial}])}))}),[i]),C=(0,h.useCallback)((async(e,t,n,r)=>{if(f.current)return null;(a||e)&&b((e=>0===e.length?e:[]));const o=d.current;let i;const s=async()=>{if(o!==d.current)throw i||(i=new Error("New conversation started")),i},l=w(),u=w();let h=a||e?null:v;null==c||c(f.current=!0);try{if(Array.isArray(t))for(const e of t){const t="assistant"===e.role;(t||"user"===e.role)&&(null==k||k({key:t?u:l,delta:{role:e.role,content:e.content}}))}else null==k||k({key:l,delta:{content:t,role:"user"}});const o=(0,g.createSSEStream)(new URL(n,`${location.origin}${(0,p.getBasePath)()}`).toString(),r);await Promise.race([o,new Promise((e=>setTimeout(e,1e3)))]),await s(),null==k||k({key:u,delta:{content:"",role:"assistant"},partial:!0});const i=await o;for await(const t of i)if(await s(),e){var A;const e=null===(A=t.choices)||void 0===A||null===(A=A[0])||void 0===A?void 0:A.delta;null!=e&&e.content&&k({delta:{role:e.role,content:e.content},key:u,partial:!0})}else null==k||k({delta:t.delta,key:u,partial:!0}),a||!t.conversationId||h||y(h=t.conversationId);await s(),b((e=>{const t=e[e.length-1];return null!=t&&t.partial&&(t.partial=!1),[...e]}))}catch(e){if(e&&e===i)throw e;console.error("stream failed:",e),await s(),b((e=>{const t=e[e.length-1];let n=e;return(null==t?void 0:t.key)===u&&(t.content?(t.partial=!1,t.failed=!0):n=e.slice(0,-1)),[...n,{role:"assistant",content:"系统错误",key:w(),failed:!0}]}))}return await s(),null==c||c(f.current=!1),h}),[v,a,w,c,k]);return(0,h.useImperativeHandle)(t,(()=>({lowLevelSendRequest:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return C(!0,...t)},sendRequest:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return C(!1,...t)},postMessage:e=>C(!1,e,"api/gateway/easyops.api.aiops_chat.manage.LLMChatProxy@1.0.0/api/aiops_chat/v1/chat/completions",{method:"POST",body:JSON.stringify({agentId:n,robotId:r,input:e,stream:!0,conversationId:a||null===v?void 0:v}),headers:{"giraffe-contract-name":"easyops.api.aiops_chat.manage.LLMChatProxy"}}),newConversation(){d.current++,y(null),b((e=>0===e.length?e:[])),f.current&&(null==c||c(f.current=!1))}})),[C,n,r,a,v,c]),(0,h.useEffect)((()=>{u.current&&(null==s||s(m))}),[m,s]),(0,h.useEffect)((()=>{u.current=!0}),[]),null}r=oe,({e:[m,b,k,C,I,S,E,M,R,j,P,T,W,x,L,N,U,_,q,O,A],c:[J,w]}=(0,u.A)(r,[z("ai.chat-agent",{styleTexts:[y.A]})],[[B(),1,"agentId"],[B(),1,"robotId"],[B(),1,"conversationId"],[B(),1,"alwaysUseNewConversation"],[$(),2,"postMessage"],[$(),2,"sendRequest"],[$(),2,"lowLevelSendRequest"],[$(),2,"newConversation"],[D({type:"messages.update"}),1,"messagesUpdate",e=>(0,l.A)(V,e),(e,t)=>(0,c.A)(V,e,t)],[D({type:"busy.change"}),1,"busyChangeEvent",e=>(0,l.A)(Z,e),(e,t)=>(0,c.A)(Z,e,t)],[D({type:"conversationId.change"}),1,"conversationIdChangeEvent",e=>(0,l.A)(te,e),(e,t)=>(0,c.A)(te,e,t)]],0,(e=>re.has((0,i.A)(e))),v.ReactNextElement)),w()},356:(e,t,n)=>{n.d(t,{A:()=>s});var r=n(6758),o=n.n(r),a=n(935),i=n.n(a)()(o());i.push([e.id,":host{display:none}",""]);const s=i.toString()},935:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);r&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),t.push(u))}},t}},6758:e=>{e.exports=function(e){return e[1]}},2740:(e,t,n)=>{n.d(t,{A:()=>s});var r=n(7545),o=n(6902);function a(e,t,n){"symbol"==(0,r.A)(t)&&(t=(t=t.description)?"["+t+"]":"");try{Object.defineProperty(e,"name",{configurable:!0,value:n?n+" "+t:t})}catch(e){}return e}var i=n(1369);function s(e,t,n,s,c,l){var u,h,d,f,v,p,g,y=Symbol.metadata||Symbol.for("Symbol.metadata"),A=Object.defineProperty,w=Object.create,m=[w(null),w(null)],b=t.length;function k(t,n,r){return function(o,a){n&&(a=o,o=e);for(var i=0;i<t.length;i++)a=t[i].apply(o,r?[a]:[]);return r?a:o}}function C(e,t,n,r){if("function"!=typeof e&&(r||void 0!==e))throw new TypeError(t+" must "+(n||"be")+" a function"+(r?"":" or undefined"));return e}function I(e,t,n,o,i,s,c,l,d,f,v){function p(e){if(!v(e))throw new TypeError("Attempted to access private element on non-instance")}var g=[].concat(t[0]),y=t[3],w=!c,b=1===i,I=3===i,S=4===i,E=2===i;function M(t,n,r){return function(o,a){return n&&(a=o,o=e),r&&r(o),R[t].call(o,a)}}if(!w){var R={},j=[],P=I?"get":S||b?"set":"value";if(d?(f||b?R={get:a((function(){return y(this)}),o,"get"),set:function(e){t[4](this,e)}}:R[P]=y,f||a(R[P],o,E?"":P)):f||(R=Object.getOwnPropertyDescriptor(e,o)),!f&&!d){if((h=m[+l][o])&&7!=(h^i))throw Error("Decorating two elements with the same name ("+R[P].name+") is not supported yet");m[+l][o]=i<3?1:i}}for(var T=e,W=g.length-1;W>=0;W-=n?2:1){var x=C(g[W],"A decorator","be",!0),L=n?g[W-1]:void 0,N={},U={kind:["field","accessor","method","getter","setter","class"][i],name:o,metadata:u,addInitializer:function(e,t){if(e.v)throw Error("attempted to call addInitializer after decoration was finished");C(t,"An initializer","be",!0),s.push(t)}.bind(null,N)};if(w)h=x.call(L,T,U),N.v=1,C(h,"class decorators","return")&&(T=h);else if(U.static=l,U.private=d,h=U.access={has:d?v.bind():function(e){return o in e}},S||(h.get=d?E?function(e){return p(e),R.value}:M("get",0,p):function(e){return e[o]}),E||I||(h.set=d?M("set",0,p):function(e,t){e[o]=t}),T=x.call(L,b?{get:R.get,set:R.set}:R[P],U),N.v=1,b){if("object"==(0,r.A)(T)&&T)(h=C(T.get,"accessor.get"))&&(R.get=h),(h=C(T.set,"accessor.set"))&&(R.set=h),(h=C(T.init,"accessor.init"))&&j.unshift(h);else if(void 0!==T)throw new TypeError("accessor decorators must return an object with get, set, or init properties or undefined")}else C(T,(f?"field":"method")+" decorators","return")&&(f?j.unshift(T):R[P]=T)}return i<2&&c.push(k(j,l,1),k(s,l,0)),f||w||(d?b?c.splice(-1,0,M("get",l),M("set",l)):c.push(E?R[P]:C.call.bind(R[P])):A(e,o,R)),T}function S(e){return A(e,y,{configurable:!0,enumerable:!0,value:u})}return void 0!==l&&(u=l[y]),u=w(null==u?null:u),v=[],p=function(e){e&&v.push(k(e))},g=function(t,r){for(var a=0;a<n.length;a++){var s=n[a],l=s[1],u=7&l;if((8&l)==t&&!u==r){var h=s[2],p=!!s[3],g=16&l;I(t?e:e.prototype,s,g,p?"#"+h:(0,i.A)(h),u,u<2?[]:t?f=f||[]:d=d||[],v,!!t,p,r,t&&p?function(t){return(0,o.A)(t)===e}:c)}}},g(8,0),g(0,0),g(8,1),g(0,1),p(d),p(f),h=v,b||S(e),{e:h,get c(){var n=[];return b&&[S(e=I(e,[t],s,e.name,5,n)),k(n,1)]}}}},2559:(e,t,n)=>{function r(e,t,n){if("function"==typeof e?e===t:e.has(t))return arguments.length<3?t:n;throw new TypeError("Private element is not present on this object")}n.d(t,{A:()=>r})},6902:(e,t,n)=>{n.d(t,{A:()=>o});var r=n(7545);function o(e){if(Object(e)!==e)throw TypeError("right-hand side of 'in' should be an object, got "+(null!==e?(0,r.A)(e):"null"));return e}},2016:(e,t,n)=>{function r(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}n.d(t,{A:()=>r})},829:(e,t,n)=>{n.d(t,{A:()=>o});var r=n(2559);function o(e,t){return e.get((0,r.A)(e,t))}},918:(e,t,n)=>{n.d(t,{A:()=>o});var r=n(2016);function o(e,t,n){(0,r.A)(e,t),t.set(e,n)}},6121:(e,t,n)=>{n.d(t,{A:()=>o});var r=n(2559);function o(e,t,n){return e.set((0,r.A)(e,t),n),n}},5536:(e,t,n)=>{n.d(t,{A:()=>o});var r=n(2559);function o(e,t,n){return n((0,r.A)(e,t))}},4635:(e,t,n)=>{n.d(t,{A:()=>o});var r=n(2016);function o(e,t){(0,r.A)(e,t),t.add(e)}},1369:(e,t,n)=>{n.d(t,{A:()=>o});var r=n(7545);function o(e){var t=function(e,t){if("object"!=(0,r.A)(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!=(0,r.A)(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==(0,r.A)(t)?t:t+""}},7545:(e,t,n)=>{function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}n.d(t,{A:()=>r})}}]);
//# sourceMappingURL=chat-agent.3d1ea14f.js.map
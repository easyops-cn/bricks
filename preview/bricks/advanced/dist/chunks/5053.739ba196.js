(globalThis.webpackChunk_next_bricks_advanced=globalThis.webpackChunk_next_bricks_advanced||[]).push([[5053],{29002:e=>{e.exports={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}},97434:(e,n,t)=>{"use strict";t.r(n),t.d(n,{I18nContext:()=>J,I18nextProvider:()=>de,Trans:()=>ne,TransWithoutContext:()=>W,Translation:()=>fe,composeInitialProps:()=>G,date:()=>be,getDefaults:()=>C,getI18n:()=>T,getInitialProps:()=>Q,initReactI18next:()=>$,number:()=>Oe,plural:()=>we,select:()=>je,selectOrdinal:()=>Pe,setDefaults:()=>I,setI18n:()=>R,time:()=>me,useSSR:()=>ge,useTranslation:()=>ae,withSSR:()=>ye,withTranslation:()=>le});var r=t(24586),o=t(14223),i=t(18769),a=t(17545),c=t(29002),s=t.n(c),u=/\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;function l(e){var n={type:"tag",name:"",voidElement:!1,attrs:{},children:[]},t=e.match(/<\/?([^\s]+?)[/\s>]/);if(t&&(n.name=t[1],(s()[t[1]]||"/"===e.charAt(e.length-2))&&(n.voidElement=!0),n.name.startsWith("!--"))){var r=e.indexOf("--\x3e");return{type:"comment",comment:-1!==r?e.slice(4,r):""}}for(var o=new RegExp(u),i=null;null!==(i=o.exec(e));)if(i[0].trim())if(i[1]){var a=i[1].trim(),c=[a,""];a.indexOf("=")>-1&&(c=a.split("=")),n.attrs[c[0]]=c[1],o.lastIndex--}else i[2]&&(n.attrs[i[2]]=i[3].trim().substring(1,i[3].length-1));return n}var p=/<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,f=/^\s*$/,d=Object.create(null);function g(e,n){switch(n.type){case"text":return e+n.content;case"tag":return e+="<"+n.name+(n.attrs?function(e){var n=[];for(var t in e)n.push(t+'="'+e[t]+'"');return n.length?" "+n.join(" "):""}(n.attrs):"")+(n.voidElement?"/>":">"),n.voidElement?e:e+n.children.reduce(g,"")+"</"+n.name+">";case"comment":return e+"\x3c!--"+n.comment+"--\x3e"}}var h={parse:function(e,n){n||(n={}),n.components||(n.components=d);var t,r=[],o=[],i=-1,a=!1;if(0!==e.indexOf("<")){var c=e.indexOf("<");r.push({type:"text",content:-1===c?e:e.substring(0,c)})}return e.replace(p,(function(c,s){if(a){if(c!=="</"+t.name+">")return;a=!1}var u,p="/"!==c.charAt(1),d=c.startsWith("\x3c!--"),g=s+c.length,h=e.charAt(g);if(d){var v=l(c);return i<0?(r.push(v),r):((u=o[i]).children.push(v),r)}if(p&&(i++,"tag"===(t=l(c)).type&&n.components[t.name]&&(t.type="component",a=!0),t.voidElement||a||!h||"<"===h||t.children.push({type:"text",content:e.slice(g,e.indexOf("<",g))}),0===i&&r.push(t),(u=o[i-1])&&u.children.push(t),o[i]=t),(!p||t.voidElement)&&(i>-1&&(t.voidElement||t.name===c.slice(2,-1))&&(i--,t=-1===i?r:o[i]),!a&&"<"!==h&&h)){u=-1===i?r:o[i].children;var y=e.indexOf("<",g),b=e.slice(g,-1===y?void 0:y);f.test(b)&&(b=" "),(y>-1&&i+u.length>=0||" "!==b)&&u.push({type:"text",content:b})}})),r},stringify:function(e){return e.reduce((function(e,n){return e+g("",n)}),"")}};const v=h;function y(){if(console&&console.warn){for(var e,n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];"string"==typeof t[0]&&(t[0]="react-i18next:: ".concat(t[0])),(e=console).warn.apply(e,t)}}var b={};function m(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];"string"==typeof n[0]&&b[n[0]]||("string"==typeof n[0]&&(b[n[0]]=new Date),y.apply(void 0,n))}var O=function(e,n){return function(){e.isInitialized?n():e.on("initialized",(function t(){setTimeout((function(){e.off("initialized",t)}),0),n()}))}};function j(e,n,t){e.loadNamespaces(n,O(e,t))}function w(e,n,t,r){"string"==typeof t&&(t=[t]),t.forEach((function(n){e.options.ns.indexOf(n)<0&&e.options.ns.push(n)})),e.loadLanguages(n,O(e,r))}function P(e){return e.displayName||e.name||("string"==typeof e&&e.length>0?e:"Unknown")}var x=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,E={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},k=function(e){return E[e]};function S(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function N(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?S(Object(t),!0).forEach((function(n){(0,r.A)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):S(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var A,D={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:function(e){return e.replace(x,k)}};function I(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};D=N(N({},D),e)}function C(){return D}function R(e){A=e}function T(){return A}var L=["format"],z=["children","count","parent","i18nKey","context","tOptions","values","defaults","components","ns","i18n","t","shouldUnescape"];function U(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function B(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?U(Object(t),!0).forEach((function(n){(0,r.A)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):U(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function K(e,n){if(!e)return!1;var t=e.props?e.props.children:e.children;return n?t.length>0:!!t}function V(e){return e?e.props?e.props.children:e.children:[]}function F(e){return Array.isArray(e)?e:[e]}function H(e,n){if(!e)return"";var t="",r=F(e),c=n.transSupportBasicHtmlNodes&&n.transKeepBasicHtmlNodesFor?n.transKeepBasicHtmlNodesFor:[];return r.forEach((function(e,r){if("string"==typeof e)t+="".concat(e);else if((0,i.isValidElement)(e)){var s=Object.keys(e.props).length,u=c.indexOf(e.type)>-1,l=e.props.children;if(!l&&u&&0===s)t+="<".concat(e.type,"/>");else if(l||u&&0===s)if(e.props.i18nIsDynamicList)t+="<".concat(r,"></").concat(r,">");else if(u&&1===s&&"string"==typeof l)t+="<".concat(e.type,">").concat(l,"</").concat(e.type,">");else{var p=H(l,n);t+="<".concat(r,">").concat(p,"</").concat(r,">")}else t+="<".concat(r,"></").concat(r,">")}else if(null===e)y("Trans: the passed in value is invalid - seems you passed in a null child.");else if("object"===(0,a.A)(e)){var f=e.format,d=(0,o.A)(e,L),g=Object.keys(d);if(1===g.length){var h=f?"".concat(g[0],", ").concat(f):g[0];t+="{{".concat(h,"}}")}else y("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",e)}else y("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",e)})),t}function W(e){var n=e.children,t=e.count,r=e.parent,c=e.i18nKey,s=e.context,u=e.tOptions,l=void 0===u?{}:u,p=e.values,f=e.defaults,d=e.components,g=e.ns,h=e.i18n,y=e.t,b=e.shouldUnescape,O=(0,o.A)(e,z),j=h||T();if(!j)return m("You will need to pass in an i18next instance by using i18nextReactModule"),n;var w=y||j.t.bind(j)||function(e){return e};s&&(l.context=s);var P=B(B({},C()),j.options&&j.options.react),x=g||w.ns||j.options&&j.options.defaultNS;x="string"==typeof x?[x]:x||["translation"];var E=f||H(n,P)||P.transEmptyNodeValue||c,k=P.hashTransKey,S=c||(k?k(E):E),N=p?l.interpolation:{interpolation:B(B({},l.interpolation),{},{prefix:"#$?",suffix:"?$#"})},A=B(B(B(B({},l),{},{count:t},p),N),{},{defaultValue:E,ns:x}),D=function(e,n,t,r,o,c){if(""===n)return[];var s=r.transKeepBasicHtmlNodesFor||[],u=n&&new RegExp(s.join("|")).test(n);if(!e&&!u)return[n];var l={};!function e(n){F(n).forEach((function(n){"string"!=typeof n&&(K(n)?e(V(n)):"object"!==(0,a.A)(n)||(0,i.isValidElement)(n)||Object.assign(l,n))}))}(e);var p=v.parse("<0>".concat(n,"</0>")),f=B(B({},l),o);function d(e,n,t){var r=V(e),o=h(r,n.children,t);return function(e){return"[object Array]"===Object.prototype.toString.call(e)&&e.every((function(e){return(0,i.isValidElement)(e)}))}(r)&&0===o.length?r:o}function g(e,n,t,r,o){e.dummy&&(e.children=n),t.push((0,i.cloneElement)(e,B(B({},e.props),{},{key:r}),o?void 0:n))}function h(n,o,l){var p=F(n);return F(o).reduce((function(n,o,v){var y,b,m,O=o.children&&o.children[0]&&o.children[0].content&&t.services.interpolator.interpolate(o.children[0].content,f,t.language);if("tag"===o.type){var j=p[parseInt(o.name,10)];!j&&1===l.length&&l[0][o.name]&&(j=l[0][o.name]),j||(j={});var w=0!==Object.keys(o.attrs).length?(y={props:o.attrs},(m=B({},b=j)).props=Object.assign(y.props,b.props),m):j,P=(0,i.isValidElement)(w),x=P&&K(o,!0)&&!o.voidElement,E=u&&"object"===(0,a.A)(w)&&w.dummy&&!P,k="object"===(0,a.A)(e)&&null!==e&&Object.hasOwnProperty.call(e,o.name);if("string"==typeof w){var S=t.services.interpolator.interpolate(w,f,t.language);n.push(S)}else if(K(w)||x)g(w,d(w,o,l),n,v);else if(E){var N=h(p,o.children,l);n.push((0,i.cloneElement)(w,B(B({},w.props),{},{key:v}),N))}else if(Number.isNaN(parseFloat(o.name)))if(k)g(w,d(w,o,l),n,v,o.voidElement);else if(r.transSupportBasicHtmlNodes&&s.indexOf(o.name)>-1)if(o.voidElement)n.push((0,i.createElement)(o.name,{key:"".concat(o.name,"-").concat(v)}));else{var A=h(p,o.children,l);n.push((0,i.createElement)(o.name,{key:"".concat(o.name,"-").concat(v)},A))}else if(o.voidElement)n.push("<".concat(o.name," />"));else{var D=h(p,o.children,l);n.push("<".concat(o.name,">").concat(D,"</").concat(o.name,">"))}else if("object"!==(0,a.A)(w)||P)1===o.children.length&&O?n.push((0,i.cloneElement)(w,B(B({},w.props),{},{key:v}),O)):n.push((0,i.cloneElement)(w,B(B({},w.props),{},{key:v})));else{var I=o.children[0]?O:null;I&&n.push(I)}}else if("text"===o.type){var C=r.transWrapTextNodes,R=c?r.unescape(t.services.interpolator.interpolate(o.content,f,t.language)):t.services.interpolator.interpolate(o.content,f,t.language);C?n.push((0,i.createElement)(C,{key:"".concat(o.name,"-").concat(v)},R)):n.push(R)}return n}),[])}return V(h([{dummy:!0,children:e||[]}],p,F(e||[]))[0])}(d||n,S?w(S,A):E,j,P,A,b),I=void 0!==r?r:P.defaultTransParent;return I?(0,i.createElement)(I,O,D):D}var _=t(55152),M=t(30414),$={type:"3rdParty",init:function(e){I(e.options.react),R(e)}};function q(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function Y(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?q(Object(t),!0).forEach((function(n){(0,r.A)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):q(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var J=(0,i.createContext)(),Z=function(){function e(){(0,_.A)(this,e),this.usedNamespaces={}}return(0,M.A)(e,[{key:"addUsedNamespaces",value:function(e){var n=this;e.forEach((function(e){n.usedNamespaces[e]||(n.usedNamespaces[e]=!0)}))}},{key:"getUsedNamespaces",value:function(){return Object.keys(this.usedNamespaces)}}]),e}();function G(e){return function(n){return new Promise((function(t){var r=Q();e.getInitialProps?e.getInitialProps(n).then((function(e){t(Y(Y({},e),r))})):t(r)}))}}function Q(){var e=T(),n=e.reportNamespaces?e.reportNamespaces.getUsedNamespaces():[],t={},r={};return e.languages.forEach((function(t){r[t]={},n.forEach((function(n){r[t][n]=e.getResourceBundle(t,n)||{}}))})),t.initialI18nStore=r,t.initialLanguage=e.language,t}var X=["children","count","parent","i18nKey","context","tOptions","values","defaults","components","ns","i18n","t","shouldUnescape"];function ee(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function ne(e){var n=e.children,t=e.count,a=e.parent,c=e.i18nKey,s=e.context,u=e.tOptions,l=void 0===u?{}:u,p=e.values,f=e.defaults,d=e.components,g=e.ns,h=e.i18n,v=e.t,y=e.shouldUnescape,b=(0,o.A)(e,X),m=(0,i.useContext)(J)||{},O=m.i18n,j=m.defaultNS,w=h||O||T(),P=v||w&&w.t.bind(w);return W(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?ee(Object(t),!0).forEach((function(n){(0,r.A)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ee(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({children:n,count:t,parent:a,i18nKey:c,context:s,tOptions:l,values:p,defaults:f,components:d,ns:g||P&&P.ns||j||w&&w.options&&w.options.defaultNS,i18n:w,t:v,shouldUnescape:y},b))}var te=t(90689);function re(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function oe(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?re(Object(t),!0).forEach((function(n){(0,r.A)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):re(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var ie=function(e,n){var t=(0,i.useRef)();return(0,i.useEffect)((function(){t.current=n?t.current:e}),[e,n]),t.current};function ae(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.i18n,r=(0,i.useContext)(J)||{},o=r.i18n,c=r.defaultNS,s=t||o||T();if(s&&!s.reportNamespaces&&(s.reportNamespaces=new Z),!s){m("You will need to pass in an i18next instance by using initReactI18next");var u=function(e,n){return"string"==typeof n?n:n&&"object"===(0,a.A)(n)&&"string"==typeof n.defaultValue?n.defaultValue:Array.isArray(e)?e[e.length-1]:e},l=[u,{},!1];return l.t=u,l.i18n={},l.ready=!1,l}s.options.react&&void 0!==s.options.react.wait&&m("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var p=oe(oe(oe({},C()),s.options.react),n),f=p.useSuspense,d=p.keyPrefix,g=e||c||s.options&&s.options.defaultNS;g="string"==typeof g?[g]:g||["translation"],s.reportNamespaces.addUsedNamespaces&&s.reportNamespaces.addUsedNamespaces(g);var h=(s.isInitialized||s.initializedStoreOnce)&&g.every((function(e){return function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return n.languages&&n.languages.length?void 0!==n.options.ignoreJSONStructure?n.hasLoadedNamespace(e,{lng:t.lng,precheck:function(n,r){if(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!r(n.isLanguageChangingTo,e))return!1}}):function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.languages[0],o=!!n.options&&n.options.fallbackLng,i=n.languages[n.languages.length-1];if("cimode"===r.toLowerCase())return!0;var a=function(e,t){var r=n.services.backendConnector.state["".concat(e,"|").concat(t)];return-1===r||2===r};return!(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!a(n.isLanguageChangingTo,e)||!n.hasResourceBundle(r,e)&&n.services.backendConnector.backend&&(!n.options.resources||n.options.partialBundledLanguages)&&(!a(r,e)||o&&!a(i,e)))}(e,n,t):(m("i18n.languages were undefined or empty",n.languages),!0)}(e,s,p)}));function v(){return s.getFixedT(n.lng||null,"fallback"===p.nsMode?g:g[0],d)}var y=(0,i.useState)(v),b=(0,te.A)(y,2),O=b[0],P=b[1],x=g.join();n.lng&&(x="".concat(n.lng).concat(x));var E=ie(x),k=(0,i.useRef)(!0);(0,i.useEffect)((function(){var e=p.bindI18n,t=p.bindI18nStore;function r(){k.current&&P(v)}return k.current=!0,h||f||(n.lng?w(s,n.lng,g,(function(){k.current&&P(v)})):j(s,g,(function(){k.current&&P(v)}))),h&&E&&E!==x&&k.current&&P(v),e&&s&&s.on(e,r),t&&s&&s.store.on(t,r),function(){k.current=!1,e&&s&&e.split(" ").forEach((function(e){return s.off(e,r)})),t&&s&&t.split(" ").forEach((function(e){return s.store.off(e,r)}))}}),[s,x]);var S=(0,i.useRef)(!0);(0,i.useEffect)((function(){k.current&&!S.current&&P(v),S.current=!1}),[s,d]);var N=[O,s,h];if(N.t=O,N.i18n=s,N.ready=h,h)return N;if(!h&&!f)return N;throw new Promise((function(e){n.lng?w(s,n.lng,g,(function(){return e()})):j(s,g,(function(){return e()}))}))}var ce=["forwardedRef"];function se(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function ue(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?se(Object(t),!0).forEach((function(n){(0,r.A)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):se(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function le(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(t){function r(r){var a=r.forwardedRef,c=(0,o.A)(r,ce),s=ae(e,ue(ue({},c),{},{keyPrefix:n.keyPrefix})),u=(0,te.A)(s,3),l=u[0],p=u[1],f=u[2],d=ue(ue({},c),{},{t:l,i18n:p,tReady:f});return n.withRef&&a?d.ref=a:!n.withRef&&a&&(d.forwardedRef=a),(0,i.createElement)(t,d)}return r.displayName="withI18nextTranslation(".concat(P(t),")"),r.WrappedComponent=t,n.withRef?(0,i.forwardRef)((function(e,n){return(0,i.createElement)(r,Object.assign({},e,{forwardedRef:n}))})):r}}var pe=["ns","children"];function fe(e){var n=e.ns,t=e.children,r=ae(n,(0,o.A)(e,pe)),i=(0,te.A)(r,3),a=i[0],c=i[1],s=i[2];return t(a,{i18n:c,lng:c.language},s)}function de(e){var n=e.i18n,t=e.defaultNS,r=e.children,o=(0,i.useMemo)((function(){return{i18n:n,defaultNS:t}}),[n,t]);return(0,i.createElement)(J.Provider,{value:o},r)}function ge(e,n){var t=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).i18n,r=((0,i.useContext)(J)||{}).i18n,o=t||r||T();o.options&&o.options.isClone||(e&&!o.initializedStoreOnce&&(o.services.resourceStore.data=e,o.options.ns=Object.values(e).reduce((function(e,n){return Object.keys(n).forEach((function(n){e.indexOf(n)<0&&e.push(n)})),e}),o.options.ns),o.initializedStoreOnce=!0,o.isInitialized=!0),n&&!o.initializedLanguageOnce&&(o.changeLanguage(n),o.initializedLanguageOnce=!0))}var he=["initialI18nStore","initialLanguage"];function ve(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function ye(){return function(e){function n(n){var t=n.initialI18nStore,a=n.initialLanguage,c=(0,o.A)(n,he);return ge(t,a),(0,i.createElement)(e,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?ve(Object(t),!0).forEach((function(n){(0,r.A)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ve(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},c))}return n.getInitialProps=G(e),n.displayName="withI18nextSSR(".concat(P(e),")"),n.WrappedComponent=e,n}}var be=function(){return""},me=function(){return""},Oe=function(){return""},je=function(){return""},we=function(){return""},Pe=function(){return""}}}]);
//# sourceMappingURL=5053.739ba196.js.map
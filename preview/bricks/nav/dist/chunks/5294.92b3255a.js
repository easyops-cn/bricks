(globalThis.webpackChunk_next_bricks_nav=globalThis.webpackChunk_next_bricks_nav||[]).push([[5294,1369],{9002:e=>{e.exports={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}},6488:(e,t,n)=>{"use strict";function r(e){if(Array.isArray(e))return e}n.d(t,{A:()=>r})},5152:(e,t,n)=>{"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,{A:()=>r})},414:(e,t,n)=>{"use strict";n.d(t,{A:()=>i});var r=n(1369);function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(0,r.A)(o.key),o)}}function i(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}},4586:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var r=n(1369);function o(e,t,n){return(t=(0,r.A)(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},5405:(e,t,n)=>{"use strict";function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}n.d(t,{A:()=>r})},7502:(e,t,n)=>{"use strict";function r(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,{A:()=>r})},1369:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var r=n(7545);function o(e){var t=function(e,t){if("object"!=(0,r.A)(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!=(0,r.A)(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==(0,r.A)(t)?t:t+""}},7545:(e,t,n)=>{"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}n.d(t,{A:()=>r})},3417:(e,t,n)=>{"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}n.d(t,{A:()=>o})},5294:(e,t,n)=>{"use strict";n.r(t),n.d(t,{I18nContext:()=>Z,I18nextProvider:()=>ve,Trans:()=>ne,TransWithoutContext:()=>_,Translation:()=>be,composeInitialProps:()=>Q,date:()=>we,getDefaults:()=>T,getI18n:()=>L,getInitialProps:()=>X,initReactI18next:()=>q,number:()=>xe,plural:()=>Se,select:()=>Ee,selectOrdinal:()=>Ae,setDefaults:()=>C,setI18n:()=>R,time:()=>Pe,useSSR:()=>he,useTranslation:()=>le,withSSR:()=>je,withTranslation:()=>ge});var r=n(4586),o=n(7502);function i(e,t){if(null==e)return{};var n,r,i=(0,o.A)(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var a=n(8769),c=n(7545),s=n(9002),u=n.n(s),l=/\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;function p(e){var t={type:"tag",name:"",voidElement:!1,attrs:{},children:[]},n=e.match(/<\/?([^\s]+?)[/\s>]/);if(n&&(t.name=n[1],(u()[n[1]]||"/"===e.charAt(e.length-2))&&(t.voidElement=!0),t.name.startsWith("!--"))){var r=e.indexOf("--\x3e");return{type:"comment",comment:-1!==r?e.slice(4,r):""}}for(var o=new RegExp(l),i=null;null!==(i=o.exec(e));)if(i[0].trim())if(i[1]){var a=i[1].trim(),c=[a,""];a.indexOf("=")>-1&&(c=a.split("=")),t.attrs[c[0]]=c[1],o.lastIndex--}else i[2]&&(t.attrs[i[2]]=i[3].trim().substring(1,i[3].length-1));return t}var f=/<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,d=/^\s*$/,g=Object.create(null);function y(e,t){switch(t.type){case"text":return e+t.content;case"tag":return e+="<"+t.name+(t.attrs?function(e){var t=[];for(var n in e)t.push(n+'="'+e[n]+'"');return t.length?" "+t.join(" "):""}(t.attrs):"")+(t.voidElement?"/>":">"),t.voidElement?e:e+t.children.reduce(y,"")+"</"+t.name+">";case"comment":return e+"\x3c!--"+t.comment+"--\x3e"}}var b={parse:function(e,t){t||(t={}),t.components||(t.components=g);var n,r=[],o=[],i=-1,a=!1;if(0!==e.indexOf("<")){var c=e.indexOf("<");r.push({type:"text",content:-1===c?e:e.substring(0,c)})}return e.replace(f,(function(c,s){if(a){if(c!=="</"+n.name+">")return;a=!1}var u,l="/"!==c.charAt(1),f=c.startsWith("\x3c!--"),g=s+c.length,y=e.charAt(g);if(f){var b=p(c);return i<0?(r.push(b),r):((u=o[i]).children.push(b),r)}if(l&&(i++,"tag"===(n=p(c)).type&&t.components[n.name]&&(n.type="component",a=!0),n.voidElement||a||!y||"<"===y||n.children.push({type:"text",content:e.slice(g,e.indexOf("<",g))}),0===i&&r.push(n),(u=o[i-1])&&u.children.push(n),o[i]=n),(!l||n.voidElement)&&(i>-1&&(n.voidElement||n.name===c.slice(2,-1))&&(i--,n=-1===i?r:o[i]),!a&&"<"!==y&&y)){u=-1===i?r:o[i].children;var v=e.indexOf("<",g),h=e.slice(g,-1===v?void 0:v);d.test(h)&&(h=" "),(v>-1&&i+u.length>=0||" "!==h)&&u.push({type:"text",content:h})}})),r},stringify:function(e){return e.reduce((function(e,t){return e+y("",t)}),"")}};const v=b;function h(){if(console&&console.warn){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];"string"==typeof n[0]&&(n[0]="react-i18next:: ".concat(n[0])),(e=console).warn.apply(e,n)}}var m={};function O(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];"string"==typeof t[0]&&m[t[0]]||("string"==typeof t[0]&&(m[t[0]]=new Date),h.apply(void 0,t))}var j=function(e,t){return function(){e.isInitialized?t():e.on("initialized",(function n(){setTimeout((function(){e.off("initialized",n)}),0),t()}))}};function w(e,t,n){e.loadNamespaces(t,j(e,n))}function P(e,t,n,r){"string"==typeof n&&(n=[n]),n.forEach((function(t){e.options.ns.indexOf(t)<0&&e.options.ns.push(t)})),e.loadLanguages(t,j(e,r))}function x(e){return e.displayName||e.name||("string"==typeof e&&e.length>0?e:"Unknown")}var E=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,S={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},A=function(e){return S[e]};function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){(0,r.A)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var I,D={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:function(e){return e.replace(E,A)}};function C(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};D=N(N({},D),e)}function T(){return D}function R(e){I=e}function L(){return I}var U=["format"],z=["children","count","parent","i18nKey","context","tOptions","values","defaults","components","ns","i18n","t","shouldUnescape"];function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function K(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(Object(n),!0).forEach((function(t){(0,r.A)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function V(e,t){if(!e)return!1;var n=e.props?e.props.children:e.children;return t?n.length>0:!!n}function F(e){return e?e.props?e.props.children:e.children:[]}function H(e){return Array.isArray(e)?e:[e]}function W(e,t){if(!e)return"";var n="",r=H(e),o=t.transSupportBasicHtmlNodes&&t.transKeepBasicHtmlNodesFor?t.transKeepBasicHtmlNodesFor:[];return r.forEach((function(e,r){if("string"==typeof e)n+="".concat(e);else if((0,a.isValidElement)(e)){var s=Object.keys(e.props).length,u=o.indexOf(e.type)>-1,l=e.props.children;if(!l&&u&&0===s)n+="<".concat(e.type,"/>");else if(l||u&&0===s)if(e.props.i18nIsDynamicList)n+="<".concat(r,"></").concat(r,">");else if(u&&1===s&&"string"==typeof l)n+="<".concat(e.type,">").concat(l,"</").concat(e.type,">");else{var p=W(l,t);n+="<".concat(r,">").concat(p,"</").concat(r,">")}else n+="<".concat(r,"></").concat(r,">")}else if(null===e)h("Trans: the passed in value is invalid - seems you passed in a null child.");else if("object"===(0,c.A)(e)){var f=e.format,d=i(e,U),g=Object.keys(d);if(1===g.length){var y=f?"".concat(g[0],", ").concat(f):g[0];n+="{{".concat(y,"}}")}else h("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",e)}else h("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",e)})),n}function _(e){var t=e.children,n=e.count,r=e.parent,o=e.i18nKey,s=e.context,u=e.tOptions,l=void 0===u?{}:u,p=e.values,f=e.defaults,d=e.components,g=e.ns,y=e.i18n,b=e.t,h=e.shouldUnescape,m=i(e,z),j=y||L();if(!j)return O("You will need to pass in an i18next instance by using i18nextReactModule"),t;var w=b||j.t.bind(j)||function(e){return e};s&&(l.context=s);var P=K(K({},T()),j.options&&j.options.react),x=g||w.ns||j.options&&j.options.defaultNS;x="string"==typeof x?[x]:x||["translation"];var E=f||W(t,P)||P.transEmptyNodeValue||o,S=P.hashTransKey,A=o||(S?S(E):E),k=p?l.interpolation:{interpolation:K(K({},l.interpolation),{},{prefix:"#$?",suffix:"?$#"})},N=K(K(K(K({},l),{},{count:n},p),k),{},{defaultValue:E,ns:x}),I=function(e,t,n,r,o,i){if(""===t)return[];var s=r.transKeepBasicHtmlNodesFor||[],u=t&&new RegExp(s.join("|")).test(t);if(!e&&!u)return[t];var l={};!function e(t){H(t).forEach((function(t){"string"!=typeof t&&(V(t)?e(F(t)):"object"!==(0,c.A)(t)||(0,a.isValidElement)(t)||Object.assign(l,t))}))}(e);var p=v.parse("<0>".concat(t,"</0>")),f=K(K({},l),o);function d(e,t,n){var r=F(e),o=y(r,t.children,n);return function(e){return"[object Array]"===Object.prototype.toString.call(e)&&e.every((function(e){return(0,a.isValidElement)(e)}))}(r)&&0===o.length?r:o}function g(e,t,n,r,o){e.dummy&&(e.children=t),n.push((0,a.cloneElement)(e,K(K({},e.props),{},{key:r}),o?void 0:t))}function y(t,o,l){var p=H(t);return H(o).reduce((function(t,o,b){var v,h,m,O=o.children&&o.children[0]&&o.children[0].content&&n.services.interpolator.interpolate(o.children[0].content,f,n.language);if("tag"===o.type){var j=p[parseInt(o.name,10)];!j&&1===l.length&&l[0][o.name]&&(j=l[0][o.name]),j||(j={});var w=0!==Object.keys(o.attrs).length?(v={props:o.attrs},(m=K({},h=j)).props=Object.assign(v.props,h.props),m):j,P=(0,a.isValidElement)(w),x=P&&V(o,!0)&&!o.voidElement,E=u&&"object"===(0,c.A)(w)&&w.dummy&&!P,S="object"===(0,c.A)(e)&&null!==e&&Object.hasOwnProperty.call(e,o.name);if("string"==typeof w){var A=n.services.interpolator.interpolate(w,f,n.language);t.push(A)}else if(V(w)||x)g(w,d(w,o,l),t,b);else if(E){var k=y(p,o.children,l);t.push((0,a.cloneElement)(w,K(K({},w.props),{},{key:b}),k))}else if(Number.isNaN(parseFloat(o.name)))if(S)g(w,d(w,o,l),t,b,o.voidElement);else if(r.transSupportBasicHtmlNodes&&s.indexOf(o.name)>-1)if(o.voidElement)t.push((0,a.createElement)(o.name,{key:"".concat(o.name,"-").concat(b)}));else{var N=y(p,o.children,l);t.push((0,a.createElement)(o.name,{key:"".concat(o.name,"-").concat(b)},N))}else if(o.voidElement)t.push("<".concat(o.name," />"));else{var I=y(p,o.children,l);t.push("<".concat(o.name,">").concat(I,"</").concat(o.name,">"))}else if("object"!==(0,c.A)(w)||P)1===o.children.length&&O?t.push((0,a.cloneElement)(w,K(K({},w.props),{},{key:b}),O)):t.push((0,a.cloneElement)(w,K(K({},w.props),{},{key:b})));else{var D=o.children[0]?O:null;D&&t.push(D)}}else if("text"===o.type){var C=r.transWrapTextNodes,T=i?r.unescape(n.services.interpolator.interpolate(o.content,f,n.language)):n.services.interpolator.interpolate(o.content,f,n.language);C?t.push((0,a.createElement)(C,{key:"".concat(o.name,"-").concat(b)},T)):t.push(T)}return t}),[])}return F(y([{dummy:!0,children:e||[]}],p,H(e||[]))[0])}(d||t,A?w(A,N):E,j,P,N,h),D=void 0!==r?r:P.defaultTransParent;return D?(0,a.createElement)(D,m,I):I}var M=n(5152),$=n(414),q={type:"3rdParty",init:function(e){C(e.options.react),R(e)}};function Y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function J(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(n),!0).forEach((function(t){(0,r.A)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Z=(0,a.createContext)(),G=function(){function e(){(0,M.A)(this,e),this.usedNamespaces={}}return(0,$.A)(e,[{key:"addUsedNamespaces",value:function(e){var t=this;e.forEach((function(e){t.usedNamespaces[e]||(t.usedNamespaces[e]=!0)}))}},{key:"getUsedNamespaces",value:function(){return Object.keys(this.usedNamespaces)}}]),e}();function Q(e){return function(t){return new Promise((function(n){var r=X();e.getInitialProps?e.getInitialProps(t).then((function(e){n(J(J({},e),r))})):n(r)}))}}function X(){var e=L(),t=e.reportNamespaces?e.reportNamespaces.getUsedNamespaces():[],n={},r={};return e.languages.forEach((function(n){r[n]={},t.forEach((function(t){r[n][t]=e.getResourceBundle(n,t)||{}}))})),n.initialI18nStore=r,n.initialLanguage=e.language,n}var ee=["children","count","parent","i18nKey","context","tOptions","values","defaults","components","ns","i18n","t","shouldUnescape"];function te(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ne(e){var t=e.children,n=e.count,o=e.parent,c=e.i18nKey,s=e.context,u=e.tOptions,l=void 0===u?{}:u,p=e.values,f=e.defaults,d=e.components,g=e.ns,y=e.i18n,b=e.t,v=e.shouldUnescape,h=i(e,ee),m=(0,a.useContext)(Z)||{},O=m.i18n,j=m.defaultNS,w=y||O||L(),P=b||w&&w.t.bind(w);return _(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?te(Object(n),!0).forEach((function(t){(0,r.A)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):te(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({children:t,count:n,parent:o,i18nKey:c,context:s,tOptions:l,values:p,defaults:f,components:d,ns:g||P&&P.ns||j||w&&w.options&&w.options.defaultNS,i18n:w,t:b,shouldUnescape:v},h))}var re=n(6488),oe=n(3417),ie=n(5405);function ae(e,t){return(0,re.A)(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,a,c=[],s=!0,u=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=i.call(n)).done)&&(c.push(r.value),c.length!==t);s=!0);}catch(e){u=!0,o=e}finally{try{if(!s&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw o}}return c}}(e,t)||(0,oe.A)(e,t)||(0,ie.A)()}function ce(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function se(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ce(Object(n),!0).forEach((function(t){(0,r.A)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ce(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ue=function(e,t){var n=(0,a.useRef)();return(0,a.useEffect)((function(){n.current=t?n.current:e}),[e,t]),n.current};function le(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.i18n,r=(0,a.useContext)(Z)||{},o=r.i18n,i=r.defaultNS,s=n||o||L();if(s&&!s.reportNamespaces&&(s.reportNamespaces=new G),!s){O("You will need to pass in an i18next instance by using initReactI18next");var u=function(e,t){return"string"==typeof t?t:t&&"object"===(0,c.A)(t)&&"string"==typeof t.defaultValue?t.defaultValue:Array.isArray(e)?e[e.length-1]:e},l=[u,{},!1];return l.t=u,l.i18n={},l.ready=!1,l}s.options.react&&void 0!==s.options.react.wait&&O("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var p=se(se(se({},T()),s.options.react),t),f=p.useSuspense,d=p.keyPrefix,g=e||i||s.options&&s.options.defaultNS;g="string"==typeof g?[g]:g||["translation"],s.reportNamespaces.addUsedNamespaces&&s.reportNamespaces.addUsedNamespaces(g);var y=(s.isInitialized||s.initializedStoreOnce)&&g.every((function(e){return function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return t.languages&&t.languages.length?void 0!==t.options.ignoreJSONStructure?t.hasLoadedNamespace(e,{lng:n.lng,precheck:function(t,r){if(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!r(t.isLanguageChangingTo,e))return!1}}):function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=t.languages[0],o=!!t.options&&t.options.fallbackLng,i=t.languages[t.languages.length-1];if("cimode"===r.toLowerCase())return!0;var a=function(e,n){var r=t.services.backendConnector.state["".concat(e,"|").concat(n)];return-1===r||2===r};return!(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!a(t.isLanguageChangingTo,e)||!t.hasResourceBundle(r,e)&&t.services.backendConnector.backend&&(!t.options.resources||t.options.partialBundledLanguages)&&(!a(r,e)||o&&!a(i,e)))}(e,t,n):(O("i18n.languages were undefined or empty",t.languages),!0)}(e,s,p)}));function b(){return s.getFixedT(t.lng||null,"fallback"===p.nsMode?g:g[0],d)}var v=ae((0,a.useState)(b),2),h=v[0],m=v[1],j=g.join();t.lng&&(j="".concat(t.lng).concat(j));var x=ue(j),E=(0,a.useRef)(!0);(0,a.useEffect)((function(){var e=p.bindI18n,n=p.bindI18nStore;function r(){E.current&&m(b)}return E.current=!0,y||f||(t.lng?P(s,t.lng,g,(function(){E.current&&m(b)})):w(s,g,(function(){E.current&&m(b)}))),y&&x&&x!==j&&E.current&&m(b),e&&s&&s.on(e,r),n&&s&&s.store.on(n,r),function(){E.current=!1,e&&s&&e.split(" ").forEach((function(e){return s.off(e,r)})),n&&s&&n.split(" ").forEach((function(e){return s.store.off(e,r)}))}}),[s,j]);var S=(0,a.useRef)(!0);(0,a.useEffect)((function(){E.current&&!S.current&&m(b),S.current=!1}),[s,d]);var A=[h,s,y];if(A.t=h,A.i18n=s,A.ready=y,y)return A;if(!y&&!f)return A;throw new Promise((function(e){t.lng?P(s,t.lng,g,(function(){return e()})):w(s,g,(function(){return e()}))}))}var pe=["forwardedRef"];function fe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function de(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?fe(Object(n),!0).forEach((function(t){(0,r.A)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):fe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ge(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(n){function r(r){var o=r.forwardedRef,c=i(r,pe),s=ae(le(e,de(de({},c),{},{keyPrefix:t.keyPrefix})),3),u=s[0],l=s[1],p=s[2],f=de(de({},c),{},{t:u,i18n:l,tReady:p});return t.withRef&&o?f.ref=o:!t.withRef&&o&&(f.forwardedRef=o),(0,a.createElement)(n,f)}return r.displayName="withI18nextTranslation(".concat(x(n),")"),r.WrappedComponent=n,t.withRef?(0,a.forwardRef)((function(e,t){return(0,a.createElement)(r,Object.assign({},e,{forwardedRef:t}))})):r}}var ye=["ns","children"];function be(e){var t=e.ns,n=e.children,r=ae(le(t,i(e,ye)),3),o=r[0],a=r[1],c=r[2];return n(o,{i18n:a,lng:a.language},c)}function ve(e){var t=e.i18n,n=e.defaultNS,r=e.children,o=(0,a.useMemo)((function(){return{i18n:t,defaultNS:n}}),[t,n]);return(0,a.createElement)(Z.Provider,{value:o},r)}function he(e,t){var n=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).i18n,r=((0,a.useContext)(Z)||{}).i18n,o=n||r||L();o.options&&o.options.isClone||(e&&!o.initializedStoreOnce&&(o.services.resourceStore.data=e,o.options.ns=Object.values(e).reduce((function(e,t){return Object.keys(t).forEach((function(t){e.indexOf(t)<0&&e.push(t)})),e}),o.options.ns),o.initializedStoreOnce=!0,o.isInitialized=!0),t&&!o.initializedLanguageOnce&&(o.changeLanguage(t),o.initializedLanguageOnce=!0))}var me=["initialI18nStore","initialLanguage"];function Oe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function je(){return function(e){function t(t){var n=t.initialI18nStore,o=t.initialLanguage,c=i(t,me);return he(n,o),(0,a.createElement)(e,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Oe(Object(n),!0).forEach((function(t){(0,r.A)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Oe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},c))}return t.getInitialProps=Q(e),t.displayName="withI18nextSSR(".concat(x(e),")"),t.WrappedComponent=e,t}}var we=function(){return""},Pe=function(){return""},xe=function(){return""},Ee=function(){return""},Se=function(){return""},Ae=function(){return""}}}]);
//# sourceMappingURL=5294.92b3255a.js.map
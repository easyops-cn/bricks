"use strict";(globalThis.webpackChunk_next_bricks_presentational=globalThis.webpackChunk_next_bricks_presentational||[]).push([[1999,7620,2052],{19952:(t,e,n)=>{n.r(e),n.d(e,{EoHumanizeTime:()=>C,HumanizeTimeComponent:()=>Q});var i,r=n(70918),a=n(86121),o=n(70829),s=n(62740),u=n(18769),c=n.n(u),l=n(10300),A=n(24295),h=(n(44291),n(30493)),T=n(72445),f=n(6238),d=n.n(f),M=n(61754),m=n(19974);let E,p,D,_,y,O,S,R,v,b,F,g,K,H,I,w,k,Y,U;const{defineElement:N,property:L}=(0,l.createDecorators)(),$=(0,A.wrapBrick)("eo-link");let C;var x=new WeakMap,j=new WeakMap,z=new WeakMap,W=new WeakMap,P=new WeakMap,B=new WeakMap,Z=new WeakMap,q=new WeakMap,G=new WeakMap;class J extends A.ReactNextElement{constructor(){super(...arguments),(0,r.A)(this,x,p(this)),(0,r.A)(this,j,(D(this),_(this))),(0,r.A)(this,z,(y(this),O(this))),(0,r.A)(this,W,(S(this),R(this))),(0,r.A)(this,P,(v(this),b(this))),(0,r.A)(this,B,(F(this),g(this))),(0,r.A)(this,Z,(K(this),H(this))),(0,r.A)(this,q,(I(this),w(this))),(0,r.A)(this,G,(k(this),Y(this))),U(this)}get value(){return(0,o.A)(x,this)}set value(t){(0,a.A)(x,this,t)}get inputFormat(){return(0,o.A)(j,this)}set inputFormat(t){(0,a.A)(j,this,t)}get outputFormat(){return(0,o.A)(z,this)}set outputFormat(t){(0,a.A)(z,this,t)}get type(){return(0,o.A)(W,this)}set type(t){(0,a.A)(W,this,t)}get isCostTime(){return(0,o.A)(P,this)}set isCostTime(t){(0,a.A)(P,this,t)}get formatter(){return(0,o.A)(B,this)}set formatter(t){(0,a.A)(B,this,t)}get isMicrosecond(){return(0,o.A)(Z,this)}set isMicrosecond(t){(0,a.A)(Z,this,t)}get isMillisecond(){return(0,o.A)(q,this)}set isMillisecond(t){(0,a.A)(q,this,t)}get link(){return(0,o.A)(G,this)}set link(t){(0,a.A)(G,this,t)}connectedCallback(){this.style.display||(this.style.display="block"),super.connectedCallback()}render(){return c().createElement(Q,{value:this.value,type:this.type,formatter:this.formatter,isMillisecond:this.isMillisecond??this.isMicrosecond,isCostTime:this.isCostTime,link:this.link,inputFormat:this.inputFormat,outputFormat:this.outputFormat})}}function Q(t){let e,n,{value:i,type:r,isMillisecond:a,inputFormat:o,outputFormat:s,isCostTime:u,formatter:l,link:A}=t;return(0,T.isNil)(i)?c().createElement("span",null,"-"):(e="number"==typeof i?a?i:1e3*Number(i):1e3*d()(i,o).unix(),n=s?d()(e).format(s):u?(0,M.F)(e):(0,m.P)(e,m.c[l],r),A?c().createElement($,{url:A.url,target:A.target},n):c().createElement("span",null,n))}i=J,({e:[p,D,_,y,O,S,R,v,b,F,g,K,H,I,w,k,Y,U],c:[C,E]}=(0,s.A)(i,[N("eo-humanize-time",{styleTexts:[h.A],alias:["presentational.humanize-time"]})],[[L({attribute:!1}),1,"value"],[L(),1,"inputFormat"],[L(),1,"outputFormat"],[L(),1,"type"],[L({type:Boolean}),1,"isCostTime"],[L({attribute:!1}),1,"formatter"],[L({type:Boolean}),1,"isMicrosecond"],[L({type:Boolean}),1,"isMillisecond"],[L({attribute:!1}),1,"link"]],0,void 0,A.ReactNextElement)),E()},30493:(t,e,n)=>{n.d(e,{A:()=>s});var i=n(36758),r=n.n(i),a=n(40935),o=n.n(a)()(r());o.push([t.id,":host{display:inline-block}:host([hidden]){display:none}",""]);const s=o.toString()},40935:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",i=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),i&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),i&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,i,r,a){"string"==typeof t&&(t=[[null,t,void 0]]);var o={};if(i)for(var s=0;s<this.length;s++){var u=this[s][0];null!=u&&(o[u]=!0)}for(var c=0;c<t.length;c++){var l=[].concat(t[c]);i&&o[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},36758:t=>{t.exports=function(t){return t[1]}},62740:(t,e,n)=>{n.d(e,{A:()=>s});var i=n(17545),r=n(26902);function a(t,e,n){"symbol"==(0,i.A)(e)&&(e=(e=e.description)?"["+e+"]":"");try{Object.defineProperty(t,"name",{configurable:!0,value:n?n+" "+e:e})}catch(t){}return t}var o=n(11369);function s(t,e,n,s,u,c){var l,A,h,T,f,d,M,m=Symbol.metadata||Symbol.for("Symbol.metadata"),E=Object.defineProperty,p=Object.create,D=[p(null),p(null)],_=e.length;function y(e,n,i){return function(r,a){n&&(a=r,r=t);for(var o=0;o<e.length;o++)a=e[o].apply(r,i?[a]:[]);return i?a:r}}function O(t,e,n,i){if("function"!=typeof t&&(i||void 0!==t))throw new TypeError(e+" must "+(n||"be")+" a function"+(i?"":" or undefined"));return t}function S(t,e,n,r,o,s,u,c,h,T,f){function d(t){if(!f(t))throw new TypeError("Attempted to access private element on non-instance")}var M=[].concat(e[0]),m=e[3],p=!u,_=1===o,S=3===o,R=4===o,v=2===o;function b(e,n,i){return function(r,a){return n&&(a=r,r=t),i&&i(r),F[e].call(r,a)}}if(!p){var F={},g=[],K=S?"get":R||_?"set":"value";if(h?(T||_?F={get:a((function(){return m(this)}),r,"get"),set:function(t){e[4](this,t)}}:F[K]=m,T||a(F[K],r,v?"":K)):T||(F=Object.getOwnPropertyDescriptor(t,r)),!T&&!h){if((A=D[+c][r])&&7!=(A^o))throw Error("Decorating two elements with the same name ("+F[K].name+") is not supported yet");D[+c][r]=o<3?1:o}}for(var H=t,I=M.length-1;I>=0;I-=n?2:1){var w=O(M[I],"A decorator","be",!0),k=n?M[I-1]:void 0,Y={},U={kind:["field","accessor","method","getter","setter","class"][o],name:r,metadata:l,addInitializer:function(t,e){if(t.v)throw Error("attempted to call addInitializer after decoration was finished");O(e,"An initializer","be",!0),s.push(e)}.bind(null,Y)};if(p)A=w.call(k,H,U),Y.v=1,O(A,"class decorators","return")&&(H=A);else if(U.static=c,U.private=h,A=U.access={has:h?f.bind():function(t){return r in t}},R||(A.get=h?v?function(t){return d(t),F.value}:b("get",0,d):function(t){return t[r]}),v||S||(A.set=h?b("set",0,d):function(t,e){t[r]=e}),H=w.call(k,_?{get:F.get,set:F.set}:F[K],U),Y.v=1,_){if("object"==(0,i.A)(H)&&H)(A=O(H.get,"accessor.get"))&&(F.get=A),(A=O(H.set,"accessor.set"))&&(F.set=A),(A=O(H.init,"accessor.init"))&&g.unshift(A);else if(void 0!==H)throw new TypeError("accessor decorators must return an object with get, set, or init properties or undefined")}else O(H,(T?"field":"method")+" decorators","return")&&(T?g.unshift(H):F[K]=H)}return o<2&&u.push(y(g,c,1),y(s,c,0)),T||p||(h?_?u.splice(-1,0,b("get",c),b("set",c)):u.push(v?F[K]:O.call.bind(F[K])):E(t,r,F)),H}function R(t){return E(t,m,{configurable:!0,enumerable:!0,value:l})}return void 0!==c&&(l=c[m]),l=p(null==l?null:l),f=[],d=function(t){t&&f.push(y(t))},M=function(e,i){for(var a=0;a<n.length;a++){var s=n[a],c=s[1],l=7&c;if((8&c)==e&&!l==i){var A=s[2],d=!!s[3],M=16&c;S(e?t:t.prototype,s,M,d?"#"+A:(0,o.A)(A),l,l<2?[]:e?T=T||[]:h=h||[],f,!!e,d,i,e&&d?function(e){return(0,r.A)(e)===t}:u)}}},M(8,0),M(0,0),M(8,1),M(0,1),d(h),d(T),A=f,_||R(t),{e:A,get c(){var n=[];return _&&[R(t=S(t,[e],s,t.name,5,n)),y(n,1)]}}}},12559:(t,e,n)=>{function i(t,e,n){if("function"==typeof t?t===e:t.has(e))return arguments.length<3?e:n;throw new TypeError("Private element is not present on this object")}n.d(e,{A:()=>i})},26902:(t,e,n)=>{n.d(e,{A:()=>r});var i=n(17545);function r(t){if(Object(t)!==t)throw TypeError("right-hand side of 'in' should be an object, got "+(null!==t?(0,i.A)(t):"null"));return t}},72016:(t,e,n)=>{function i(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}n.d(e,{A:()=>i})},70829:(t,e,n)=>{n.d(e,{A:()=>r});var i=n(12559);function r(t,e){return t.get((0,i.A)(t,e))}},70918:(t,e,n)=>{n.d(e,{A:()=>r});var i=n(72016);function r(t,e,n){(0,i.A)(t,e),e.set(t,n)}},86121:(t,e,n)=>{n.d(e,{A:()=>r});var i=n(12559);function r(t,e,n){return t.set((0,i.A)(t,e),n),n}},11369:(t,e,n)=>{n.d(e,{A:()=>r});var i=n(17545);function r(t){var e=function(t,e){if("object"!=(0,i.A)(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!=(0,i.A)(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==(0,i.A)(e)?e:e+""}},17545:(t,e,n)=>{function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}n.d(e,{A:()=>i})},61754:(t,e,n)=>{n.d(e,{F:()=>s});var i=n(41030),r=n(30155),a=n(19024),o=n(26181);(0,n(80361).e)();const s=(t,e,n)=>{if((0,i.isNil)(t)&&((0,i.isNil)(n)||"0001-01-01T00:00:00Z"===n))return"";(0,i.isNil)(t)&&(t=r(n).diff(e));const s=(t=Math.max(t,0))%1e3,u=Math.floor(t/1e3)%60,c=Math.floor(t/6e4)%60,l=Math.floor(t/36e5)%24,A=Math.floor(t/864e5)%30,h=[{count:Math.floor(t/2592e6),unit:o.i18n.t(`${a.h}:${a.K.MONTHS}`)},{count:A,unit:o.i18n.t(`${a.h}:${a.K.DAYS}`)},{count:l,unit:o.i18n.t(`${a.h}:${a.K.HOURS}`)},{count:c,unit:o.i18n.t(`${a.h}:${a.K.MINUTES}`)},{count:u,unit:o.i18n.t(`${a.h}:${a.K.SECONDS}`)},{count:s,unit:o.i18n.t(`${a.h}:${a.K.MILL_SECONDS}`)}],T=(0,i.findIndex)(h,(function(t){return t.count>0}));return T>=4||-1===T?+(t/1e3).toFixed(t>=100?1:3)+" "+o.i18n.t(`${a.h}:${a.K.SECONDS}`):(0,i.chain)(h.slice(T,T+2)).filter((function(t){return t.count>0})).map((function(t){return t.count+" "+t.unit})).value().join(" ")}},19974:(t,e,n)=>{n.d(e,{P:()=>s,c:()=>o});var i=n(30155),r=n(26181),a=n(19024);(0,n(80361).e)();let o=function(t){return t.full="full",t.default="default",t.relative="relative",t.future="future",t.accurate="accurate",t.auto="auto",t}({});const s=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o.auto,n=arguments.length>2?arguments[2]:void 0;if(null==t||t===-1/0||t===1/0)return null;const s=i(t),u=i().add(0),c="date"===n?"LL":"LL HH:mm",l=r.i18n.t(`${a.h}:${"date"===n?a.K.FORMAT_MEDIUM_DATE:a.K.FORMAT_MEDIUM_DATETIME}`),A=r.i18n.t(`${a.h}:${"date"===n?a.K.FORMAT_SHORT_DATE:a.K.FORMAT_SHORT_DATETIME}`),h=r.i18n.t(`${a.h}:${"date"===n?a.K.FORMAT_SHORT_DAY_DATE:a.K.FORMAT_SHORT_DAY_DATETIME}`),T="date"===n?"LL":"LL HH:mm:ss";let f;switch(e){case o.full:f=s.format(c);break;case o.default:f=s.format(T);break;case o.relative:f=i.duration(Math.min(+s-+u,0)).humanize(!0);break;case o.future:f=r.i18n.t(`${a.h}:${a.K.FUTURE_AFTER}`,{time:i.duration(Math.max(+s-+u,0)).humanize()});break;case o.accurate:f=(()=>{const t=+s.diff(u,"days",!0).toFixed(1);let e="";const i=s.year()<u.year()?"lastYear":t<-2||s.isBefore(u.clone().add(-1,"day"),"day")?"twoDaysBefore":s.isSame(u.clone().add(-1,"day"),"day")?"yesterday":s.isSame(u,"day")?"sameDay":t<2&&s.isSame(u.clone().add(1,"day"),"day")?"nextDay":t<7?"nextWeek":"default";switch(i){case"sameDay":case"yesterday":e=`${r.i18n.t(`${a.h}:${"yesterday"===i?a.K.YESTERDAY:a.K.TODAY}`)}${"date"===n?"":` ${s.format("HH:mm")}`}`;break;case"lastYear":default:e=s.format(c);break;case"twoDaysBefore":e=s.format(h)}return e})();break;default:f=s.format(s.year()===u.year()?A:l)}return f}},19024:(t,e,n)=>{n.d(e,{K:()=>r,h:()=>i});const i="libs-datetime";let r=function(t){return t.TODAY="TODAY",t.YESTERDAY="YESTERDAY",t.FUTURE_AFTER="FUTURE_AFTER",t.FORMAT_MEDIUM_DATETIME="FORMAT_MEDIUM_DATETIME",t.FORMAT_MEDIUM_DATE="FORMAT_MEDIUM_DATE",t.FORMAT_SHORT_DATETIME="FORMAT_SHORT_DATETIME",t.FORMAT_SHORT_DATE="FORMAT_SHORT_DATE",t.FORMAT_SHORT_DAY_DATETIME="FORMAT_SHORT_DAY_DATETIME",t.FORMAT_SHORT_DAY_DATE="FORMAT_SHORT_DAY_DATE",t.SECONDS="SECONDS",t.MILL_SECONDS="MILL_SECONDS",t.MINUTES="MINUTES",t.HOURS="HOURS",t.DAYS="DARS",t.MONTHS="MONTHS",t}({})},80361:(t,e,n)=>{n.d(e,{e:()=>s});var i=n(26181),r=n(19024),a=n(38702),o=n(17347);function s(){(0,i.initializeI18n)(r.h,{en:a.A,zh:o.A})}},38702:(t,e,n)=>{n.d(e,{A:()=>r});var i=n(19024);const r={[i.K.YESTERDAY]:"Yesterday",[i.K.TODAY]:"Today",[i.K.FUTURE_AFTER]:"After {{time}}",[i.K.FORMAT_MEDIUM_DATETIME]:"LLL",[i.K.FORMAT_MEDIUM_DATE]:"LL",[i.K.FORMAT_SHORT_DATETIME]:"MMM D ah:mm",[i.K.FORMAT_SHORT_DATE]:"MMM D",[i.K.FORMAT_SHORT_DAY_DATETIME]:"MMM D HH:mm",[i.K.FORMAT_SHORT_DAY_DATE]:"MMM D",[i.K.MONTHS]:"months",[i.K.HOURS]:"hours",[i.K.SECONDS]:"seconds",[i.K.MILL_SECONDS]:"millseconds",[i.K.DAYS]:"days",[i.K.MINUTES]:"minutes"}},17347:(t,e,n)=>{n.d(e,{A:()=>r});var i=n(19024);const r={[i.K.YESTERDAY]:"昨天",[i.K.TODAY]:"今天",[i.K.FUTURE_AFTER]:"{{time}}后",[i.K.FORMAT_MEDIUM_DATETIME]:"LL ah:mm",[i.K.FORMAT_MEDIUM_DATE]:"LL",[i.K.FORMAT_SHORT_DATETIME]:"MMMD日 ah:mm",[i.K.FORMAT_SHORT_DATE]:"MMMD日",[i.K.FORMAT_SHORT_DAY_DATETIME]:"MMMD日 HH:mm",[i.K.FORMAT_SHORT_DAY_DATE]:"MMMD日",[i.K.MONTHS]:"个月",[i.K.HOURS]:"小时",[i.K.SECONDS]:"秒",[i.K.MILL_SECONDS]:"毫秒",[i.K.DAYS]:"天",[i.K.MINUTES]:"分钟"}}}]);
//# sourceMappingURL=eo-humanize-time.b85dbc1e.js.map
"use strict";(self.webpackChunk_next_bricks_presentational=self.webpackChunk_next_bricks_presentational||[]).push([[5725,7672],{17672:(e,t,r)=>{r.r(t),r.d(t,{inject:()=>y,transform:()=>k,transformAndInject:()=>D});var a=r(45178),n=r(50672),i=function(e){return e[e.Initial=0]="Initial",e[e.ExpectField=1]="ExpectField",e[e.ExpectOptionalBeginDefault=2]="ExpectOptionalBeginDefault",e[e.ExpectDefaultValue=3]="ExpectDefaultValue",e[e.ExpectOptionalBeginPipe=4]="ExpectOptionalBeginPipe",e[e.ExpectPipeIdentifier=5]="ExpectPipeIdentifier",e[e.ExpectOptionalBeginPipeParameter=6]="ExpectOptionalBeginPipeParameter",e[e.ExpectPipeParameter=7]="ExpectPipeParameter",e[e.ExpectPlaceholderEnd=8]="ExpectPlaceholderEnd",e}({}),s=function(e){return e.Raw="Raw",e.BeginPlaceHolder="BeginPlaceHolder",e.Field="Field",e.BeginDefault="BeginDefault",e.LiteralString="LiteralString",e.BeginPipe="BeginPipe",e.PipeIdentifier="PipeIdentifier",e.BeginPipeParameter="BeginPipeParameter",e.EndPlaceHolder="EndPlaceHolder",e.JsonValue="JsonValue",e}({}),u=function(e){return e[e.Array=0]="Array",e[e.Object=1]="Object",e[e.String=2]="String",e[e.Others=3]="Others",e}({});function c(e){return new RegExp("(".concat([].concat(e).map((e=>(0,a.escapeRegExp)(e))).join("|"),")\\{"))}function l(e){var t,r=b(e),a=null===(t=r.match(e.beginPlaceholder))||void 0===t?void 0:t[0],n=a?r.indexOf(a):-1;if(n>=0&&a&&"{"!==r.charAt(n+a.length)){var u=e.cursor+n;n>0&&e.tokens.push({type:s.Raw,value:r.substring(0,n)}),e.tokens.push({type:s.BeginPlaceHolder,loc:{start:u,end:u+a.length},value:a.substring(0,a.length-1)}),e.cursor+=n+a.length,e.status=i.ExpectField}else e.tokens.push({type:s.Raw,value:r}),e.cursor=e.raw.length}function o(e){e.cursor+=b(e).match(/^[ \r\n\t]*/)[0].length}function p(e){var[t]=b(e).match(/^(?:[\*\x2D\.0-9A-\[\]_a-z\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*/);e.tokens.push({type:s.Field,value:t}),e.cursor+=t.length,e.status=i.ExpectOptionalBeginDefault}function f(e){"="===b(e).charAt(0)?(e.tokens.push({type:s.BeginDefault}),e.cursor+=1,e.status=i.ExpectDefaultValue):e.status=i.ExpectOptionalBeginPipe}function d(e){x(e,i.ExpectOptionalBeginPipe)}function g(e){"|"===b(e).charAt(0)?(e.tokens.push({type:s.BeginPipe}),e.cursor+=1,e.status=i.ExpectPipeIdentifier):e.status=i.ExpectPlaceholderEnd}function h(e){var t=b(e).match(/^[a-zA-Z]\w*/);if(!t)throw new Error("Expected a pipe identifier at index ".concat(e.cursor," near: ").concat(JSON.stringify(e.raw.substring(e.cursor))));var r=t[0];e.tokens.push({type:s.PipeIdentifier,value:r}),e.cursor+=r.length,e.status=i.ExpectOptionalBeginPipeParameter}function P(e){":"===b(e).charAt(0)?(e.tokens.push({type:s.BeginPipeParameter}),e.cursor+=1,e.status=i.ExpectPipeParameter):e.status=i.ExpectOptionalBeginPipe}function E(e){x(e,i.ExpectOptionalBeginPipeParameter)}function v(e){if("}"!==b(e).charAt(0))throw new Error("Expected a placeholder end '}' at index ".concat(e.cursor," near: ").concat(JSON.stringify(e.raw.substring(e.cursor))));e.tokens.push({type:s.EndPlaceHolder,loc:{start:e.cursor,end:e.cursor+1}}),e.cursor+=1,e.status=i.Initial}var F=new Map([["false",!1],["null",null],["true",!0]]);function x(e,t){var r=b(e);if(/[0-9[{"]/.test(r.charAt(0))||/-[0-9]/.test(r.substring(0,2)))!function(e,t){for(var r=b(e),a=r.charAt(0),n="["===a?u.Array:"{"===a?u.Object:'"'===a?u.String:u.Others,i=0,c=0,l=0,o=!1,p=!1,f=!1;i<r.length;){var d=r.charAt(i);if(p)p=!1;else if(o)'"'===d?o=!1:"\\"===d&&(p=!0);else switch(d){case"[":l+=1;break;case"{":c+=1;break;case"]":l-=1;break;case"}":c-=1;break;case'"':o=!0}switch(i+=1,n){case u.Array:f=!l;break;case u.Object:f=!c;break;case u.String:f=!o;break;default:f=i<r.length&&/[^a-z0-9E.+-]/.test(r.charAt(i))}if(f)break}if(!f)throw new Error("Failed to match a JSON value at index ".concat(e.cursor," near: ").concat(JSON.stringify(e.raw.substring(e.cursor))));e.tokens.push({type:s.JsonValue,value:JSON.parse(r.substring(0,i))}),e.cursor+=i,e.status=t}(e,t);else{var[a]=b(e).match(/^(?:[\x2D0-9A-Z_a-z\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*/);F.has(a)?e.tokens.push({type:s.JsonValue,value:F.get(a)}):e.tokens.push({type:s.LiteralString,value:a}),e.cursor+=a.length,e.status=t}}function b(e){return e.raw.substring(e.cursor)}function k(e,t){return B(e,"@",t)}function y(e,t){return B(e,"$",t)}function D(e,t){return B(e,["@","$"],t)}function B(e,t,r){if(!function(e,t){return c(t).test(e)}(e,t))return e;var u,F,x=(u=r.data,function(e){var t=e.field?(0,a.get)(u,e.field):u;return void 0===t&&(t=e.defaultValue),(0,n.processPipes)(t,e.pipes)}),b=function(e,t){return function(r){var i,s,u=r.field.match(/^(?:(QUERY(?:_ARRAY)?|EVENT|query|event|APP|HASH|ANCHOR|SYS|FLAGS|CTX)\.)?(.+)$/);if(!u)return t.substring(r.loc.start,r.loc.end);var c,[,l,o]=u;!l&&/^[A-Z_]+$/.test(o)&&(l=o,o="*");var p={SYS:"sys",FLAGS:"flags"};switch(l){case"QUERY":case"query":c="*"===o?e.query:e.query.has(o)?e.query.get(o):void 0;break;case"QUERY_ARRAY":c=e.query.has(o)?e.query.getAll(o):void 0;break;case"EVENT":case"event":if(void 0===e.event)return t.substring(r.loc.start,r.loc.end);c="*"===o?e.event:(0,a.get)(e.event,o);break;case"APP":c="*"===o?null!==(i=e.overrideApp)&&void 0!==i?i:e.app:(0,a.get)(null!==(s=e.overrideApp)&&void 0!==s?s:e.app,o);break;case"HASH":c=e.location.hash;break;case"SYS":case"FLAGS":c="*"===o?e[p[l]]:(0,a.get)(e[p[l]],o);break;case"ANCHOR":var f=e.location.hash?e.location.hash.substr(1):null;c="*"===o?f:(0,a.get)(f,o);break;case"CTX":var d=t.substring(r.loc.start,r.loc.end);return console.error('CTX is not supported in placeholder any more: "'.concat(d,'"')),d;default:if(!e.match)return t.substring(r.loc.start,r.loc.end);c=e.match.params[o]}return void 0===c&&(c=r.defaultValue),(0,n.processPipes)(c,r.pipes)}}(r,e);return F=function(e,t){return function(e){var t,r={type:"InjectableString",elements:[]};function a(r){return r===e[0].type&&(t=e.shift(),!0)}function n(r){if(t=e.shift(),Array.isArray(r)?!r.includes(t.type):r!==t.type)throw new Error("Expected token: ".concat(r,", received token: ").concat(t.type))}for(;e.length>0;)if(a(s.Raw))r.elements.push({type:"RawString",value:t.value});else{n(s.BeginPlaceHolder);var i=t.loc.start,u=t.value;n(s.Field);var c={type:"Placeholder",symbol:u,field:t.value,defaultValue:void 0,pipes:[],loc:{start:i,end:i}};for(r.elements.push(c),a(s.BeginDefault)&&(n([s.JsonValue,s.LiteralString]),c.defaultValue=t.value);a(s.BeginPipe);){n(s.PipeIdentifier);var l={type:"PipeCall",identifier:t.value,parameters:[]};for(c.pipes.push(l);a(s.BeginPipeParameter);)n([s.JsonValue,s.LiteralString]),l.parameters.push(t.value)}n(s.EndPlaceHolder),c.loc.end=t.loc.end}return r}(function(e,t){for(var r={beginPlaceholder:c(t),raw:e,cursor:0,status:i.Initial,tokens:[]};r.cursor<e.length;)switch(r.status){case i.Initial:l(r);break;case i.ExpectField:o(r),p(r);break;case i.ExpectOptionalBeginDefault:o(r),f(r);break;case i.ExpectDefaultValue:o(r),d(r);break;case i.ExpectOptionalBeginPipe:o(r),g(r);break;case i.ExpectPipeIdentifier:o(r),h(r);break;case i.ExpectOptionalBeginPipeParameter:o(r),P(r);break;case i.ExpectPipeParameter:o(r),E(r);break;case i.ExpectPlaceholderEnd:o(r),v(r)}if(r.status!==i.Initial)throw new Error("Expected a placeholder end '}' at the end");return r.tokens}(e,t))}(e,t).elements.map((e=>"RawString"===e.type?e.value:"$"===e.symbol?b(e):x(e))),1===F.length?F[0]:F.join("")}}}]);
//# sourceMappingURL=5725.fe5688d6.js.map
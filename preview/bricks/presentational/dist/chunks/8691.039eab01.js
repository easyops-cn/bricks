"use strict";(self.webpackChunk_next_bricks_presentational=self.webpackChunk_next_bricks_presentational||[]).push([[8691,3458],{43458:(e,t,r)=>{function n(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return function(o,a){if("string"==typeof t?o.name===t:t.includes(o.name)){for(var i=[],s=1;s<=r;s++){var c=a[a.length-s];if("MemberExpression"===(null==c?void 0:c.node.type)&&"object"===c.key){var u=c.node;u.computed||"Identifier"!==u.property.type?u.computed&&"Literal"===u.property.type&&"string"==typeof u.property.value?i.push(n?"".concat(o.name,".").concat(u.property.value):u.property.value):e.hasNonStaticUsage=!0:i.push(n?"".concat(o.name,".").concat(u.property.name):u.property.name)}else e.hasNonStaticUsage=!0}i.length===r&&e.usedProperties.add(i.join("."))}}}function o(e,t){return function(r,n,o){if(n.name===e){var a=o[o.length-1],i=o[o.length-2];if("CallExpression"===(null==i?void 0:i.node.type)&&"callee"===(null==i?void 0:i.key)&&"MemberExpression"===(null==a?void 0:a.node.type)&&"object"===a.key&&(a.node.computed?"Literal"===a.node.property.type&&a.node.property.value===t:"Identifier"===a.node.property.type&&a.node.property.name===t)){var s=i.node.arguments;if(s.length>0){var c=s[0];"Literal"===c.type&&"string"==typeof c.value?r.usedArgs.add(c.value):r.hasNonStaticUsage=!0}}}}}r.r(t),r.d(t,{beforeVisitGlobalMember:()=>n,collectAppGetMenuUsage:()=>a,collectInstalledAppsHasUsage:()=>i,collectMemberUsage:()=>p,collectMemberUsageInFunction:()=>g,createProviderClass:()=>c.createProviderClass,scanPermissionActionsInAny:()=>m,scanPermissionActionsInStoryboard:()=>b,strictCollectMemberUsage:()=>l,track:()=>d,trackAll:()=>f,traverseStoryboardExpressions:()=>u,traverseStoryboardFunction:()=>v,traverseStoryboardFunctions:()=>y,unwrapProvider:()=>c.unwrapProvider});var a=o("APP","getMenu"),i=o("INSTALLED_APPS","has"),s=r(5777),c=r(56107);function u(e,t,r){var n=new WeakSet,{matchExpressionString:o,visitNotMatchedExpressionString:a,visitNonExpressionString:i,visitObject:u}="string"==typeof r?{matchExpressionString:e=>e.includes(r)}:r;!function e(r){if("string"==typeof r)if((0,s.isEvaluable)(r))if(o(r))try{(0,s.preevaluate)(r,{withParent:!0,hooks:{beforeVisitGlobal(e,n){t(e,n,r)}}})}catch(e){console.error("Parse storyboard expression failed:",e)}else null==a||a(r);else null==i||i(r);else if((0,c.isObject)(r)){if(n.has(r))return;for(var l of(n.add(r),null==u||u(r),Array.isArray(r)?r:Object.values(r)))e(l)}}(e)}function l(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,{hasNonStaticUsage:n,nonStaticUsage:o,usedProperties:a}=p(e,t,r);if(n)throw new Error("Non-static usage of ".concat(t,' is prohibited, check your expression: "').concat(o,'"'));return a}function p(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,o={usedProperties:new Set,hasNonStaticUsage:!1},a=n(o,t,r);return u(e,((e,t,r)=>{a(e,t),o.hasNonStaticUsage&&(o.nonStaticUsage=r)}),t),o}function d(e,t,r){if(e.includes(t)){var o,a={usedProperties:new Set,hasNonStaticUsage:!1},{expression:i}=(0,s.preevaluate)(e,{withParent:!0,hooks:{beforeVisitGlobal:n(a,r)}});if("SequenceExpression"===i.type&&(o=i.expressions[0])&&"Literal"===o.type&&o.value===t){if(a.usedProperties.size>0)return a.usedProperties;console.warn('You are using "'.concat(t,'" but no `').concat(r,"` usage found in your expression: ").concat(JSON.stringify(e)))}}return!1}function f(e){if(e){var t={usedProperties:new Set,hasNonStaticUsage:!1};if((0,s.preevaluate)(e,{withParent:!0,hooks:{beforeVisitGlobal:n(t,["CTX","STATE","FORM_STATE"],1,!0)}}),t.usedProperties.size>0){var r=[...t.usedProperties],o={context:!1,state:!1,formState:!1},a={CTX:"context",STATE:"state",FORM_STATE:"formState"};return r.forEach((e=>{var[t,r]=e.split(".");o[a[t]]||(o[a[t]]=[]),o[a[t]].push(r)})),o}console.warn('You are using track all but no "CTX" or "STATE" or "FORM_STATE" usage found in your expression: '.concat(JSON.stringify(e)))}return!1}function y(e,t){if(Array.isArray(e))for(var r of e)v(r,t)}function v(e,t,r){try{(0,s.precookFunction)(e.source,{typescript:e.typescript,withParent:!0,hooks:{beforeVisitGlobal:t}})}catch(t){r||console.error('Parse storyboard function "'.concat(e.name,'" failed:'),t)}}function g(e,t,r){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,a={usedProperties:new Set,hasNonStaticUsage:!1};if(v(e,n(a,t,o),r),a.hasNonStaticUsage&&!r)throw new Error("Non-static usage of ".concat(t,' is prohibited, check your function: "').concat(e.name,'"'));return a.usedProperties.delete(e.name),a.usedProperties}var h="PERMISSIONS",S="check";function b(e){var t,r=new Set,n=P(r),{customTemplates:o,functions:a}=null!==(t=e.meta)&&void 0!==t?t:{};return u([e.routes,o],n,h),y(a,n),Array.from(r)}function m(e){var t=new Set;return u(e,P(t),h),Array.from(t)}function P(e){return function(t,r){if(t.name===h){var n=r[r.length-1],o=r[r.length-2];if("CallExpression"===(null==o?void 0:o.node.type)&&"callee"===(null==o?void 0:o.key)&&"MemberExpression"===(null==n?void 0:n.node.type)&&"object"===n.key&&(n.node.computed?"Literal"===n.node.property.type&&n.node.property.value===S:"Identifier"===n.node.property.type&&n.node.property.name===S))for(var a of o.node.arguments)"Literal"===a.type&&"string"==typeof a.value&&e.add(a.value)}}}}}]);
//# sourceMappingURL=8691.039eab01.js.map
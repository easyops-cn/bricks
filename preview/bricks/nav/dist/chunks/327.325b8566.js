/*! For license information please see 327.325b8566.js.LICENSE.txt */
"use strict";(self.webpackChunk_next_bricks_nav=self.webpackChunk_next_bricks_nav||[]).push([[327],{1880:(e,t,r)=>{r.d(t,{m:()=>x});var a=r(8657),o=r.n(a),n=r(2779),i=r.n(n),l=r(3808),c=r(5178),s=r(4511),p=r(2890),u=r(7256),m=r(9640);(0,m.initializeReactI18n)(u.NS,u.k);var d=(0,s.wrapBrick)("eo-popover"),v=(0,s.wrapBrick)("eo-search",{onChange:"change",onSearch:"search"}),g=(0,s.wrapBrick)("eo-icon"),h="threeLevelCategoryMenu",f=6;function x(e){var{t}=(0,m.useTranslation)(u.NS),{menuItem:r,selectedKey:n}=e,s=r.items,[x,E]=(0,a.useState)([]),[b,y]=(0,a.useState)(""),_=(0,a.useRef)(null),C="".concat(h,"_").concat(r.title),k=(0,a.useMemo)((()=>new p.o(localStorage)),[]),w=k.getItem(C)||[],S=()=>{var e;null===(e=_.current)||void 0===e||e.click()};return o().createElement("div",{className:"three-level-menu-container"},o().createElement("div",{className:"three-level-menu-search-container",onClick:e=>{e.stopPropagation()}},o().createElement(v,{placeholder:t(u.K.SEARCH_BY_MENU_NAME),onSearch:e=>{if(y(e.detail),e.detail){var t=(0,c.uniq)([e.detail,...w]);t.length>f&&t.pop(),k.setItem(C,t),E(s.flatMap((e=>e.items||[])).filter((t=>t.text.toLowerCase().includes(e.detail.trim().toLowerCase()))))}else E([])},onFocus:S,onBlur:S}),o().createElement(d,{trigger:"click",placement:"bottom-start",anchorDisplay:"block",distance:0},o().createElement("div",{slot:"anchor",ref:_}),o().createElement("div",{className:"three-level-menu-search-result"},!!x.length&&x.map((e=>(0,l.nC)(e,{width:"100%"}))),b&&!x.length&&o().createElement("div",{style:{height:"100px",textAlign:"center",lineHeight:"100px"}},t(u.K.NO_DATA))))),!!w.length&&o().createElement("div",{className:"three-level-menu-search-history-container"},o().createElement("div",{className:"three-level-menu-search-history-title"},t(u.K.SEARCH_HISTORY),o().createElement(g,{lib:"antd",theme:"outlined",icon:"delete",className:"three-level-menu-search-history-icon"})),o().createElement("div",null,w.map((e=>o().createElement("span",{key:e,className:"three-level-menu-search-history-text"},e))))),o().createElement("div",{className:"three-level-menu-item-container",style:{gridTemplateColumns:"repeat(".concat(s.length>4?4:s.length,",1fr)")}},s.map(((e,t)=>{var r;return o().createElement("div",{key:t},o().createElement("div",{className:"three-level-menu-item-title-container"},o().createElement("span",{className:"three-level-menu-item-title-icon"}),o().createElement("span",{className:"three-level-menu-item-title"},e.title)),null===(r=e.items)||void 0===r?void 0:r.map((e=>o().createElement("span",{key:e.key,className:i()({active:!!e.key&&n.includes(e.key)})},(0,l.nC)(e,{width:"100%"})))))}))))}},7256:(e,t,r)=>{r.d(t,{K:()=>a,NS:()=>o,k:()=>n});var a=function(e){return e.SEARCH_BY_MENU_NAME="SEARCH_BY_MENU_NAME",e.SEARCH_HISTORY="SEARCH_HISTORY",e.NO_DATA="NO_DATA",e.QUICK_ACCESS="QUICK_ACCESS",e.REMOVE_ITEM_FROM_QUICK_ACCESS="REMOVE_ITEM_FROM_QUICK_ACCESS",e.ADD_ITEM_TO_QUICK_ACCESS="ADD_ITEM_TO_QUICK_ACCESS",e.NO_DATA_TIPS_IN_QUICK_ACCESS="NO_DATA_TIPS_IN_QUICK_ACCESS",e.SITE_MAP_SEARCH_RECOMMEND="SITE_MAP_SEARCH_RECOMMEND",e.MAX_COLLECT_COUNT_TIPS="MAX_COLLECT_COUNT_TIPS",e.NO_DATA_SEARCH_INFO="NO_DATA_SEARCH_INFO",e.SEARCH_ITEM_PLACEHOLDER="SEARCH_ITEM_PLACEHOLDER",e}({}),o="bricks/nav/nav-menu",n={en:{SEARCH_BY_MENU_NAME:"Search by menu name",SEARCH_HISTORY:"Search history",NO_DATA:"No data",QUICK_ACCESS:"Quick Access",REMOVE_ITEM_FROM_QUICK_ACCESS:"Remove from Quick Access",ADD_ITEM_TO_QUICK_ACCESS:"Add to Quick Access",NO_DATA_TIPS_IN_QUICK_ACCESS:"No quick access resources have been added yet. Please add from the list below or after searching",SITE_MAP_SEARCH_RECOMMEND:"Search recommend",MAX_COLLECT_COUNT_TIPS:"Need to delete some favorites in order to add",NO_DATA_SEARCH_INFO:"The search result is empty, please enter again",SEARCH_ITEM_PLACEHOLDER:"Please enter keywords to search"},zh:{SEARCH_BY_MENU_NAME:"通过菜单名称搜索",SEARCH_HISTORY:"历史搜索",NO_DATA:"暂无数据",QUICK_ACCESS:"快捷访问",REMOVE_ITEM_FROM_QUICK_ACCESS:"从快捷访问移除",ADD_ITEM_TO_QUICK_ACCESS:"添加至快捷访问",NO_DATA_TIPS_IN_QUICK_ACCESS:"暂未添加快捷访问资源，从下方列表或搜索后添加",SITE_MAP_SEARCH_RECOMMEND:"搜索推荐",MAX_COLLECT_COUNT_TIPS:"需删除部分收藏，才能添加",NO_DATA_SEARCH_INFO:"搜索结果为空，请重新输入",SEARCH_ITEM_PLACEHOLDER:"请输入关键词搜索"}}},9705:(e,t,r)=>{r.d(t,{hX:()=>U});var a=r(4795),o=r(8657),n=r.n(o),i=r(4511),l=r(7896),c=r(2779),s=r.n(c),p=r(7256),u=r(6666),m=r(3028),d=r(3352),v=function(){var e=(0,a.Z)((function*(e,t){return(yield d.http.get("api/gateway/user_service.my_collection.ListMyCollection/api/v1/user_service/my_collection/collections",(0,m.Z)((0,m.Z)({},t),{},{params:e}))).data}));return function(t,r){return e.apply(this,arguments)}}(),g=function(e){return e.Left="left",e.Right="right",e}({}),h="sidebarMenuCollect",f=n().createContext({}),x=r(5178),E=r(5062),b=new class{constructor(e){(0,u.Z)(this,"maxCollectLength",void 0),(0,u.Z)(this,"collectMap",new Map),this.maxCollectLength=null!=e?e:10}getFavoritesById(e){var t;return null!==(t=(0,x.cloneDeep)(this.collectMap.get(e)))&&void 0!==t?t:[]}fetchFavorites(e){var t=this;return(0,a.Z)((function*(){var r;if(!(0,x.isEmpty)(t.getFavoritesById(e)))return t.getFavoritesById(e);var a=null===(r=(yield v({module:h,collectionName:e})).payloads)||void 0===r?void 0:r.map((e=>e.extInfo)).filter(Boolean);return t.collectMap.set(e,a),a}))()}setItemAsFavorite(e,t){var r=this.getFavoritesById(e);r.length>=this.maxCollectLength&&r.pop(),r.unshift(t),this.updateFavoriteItems(e,r)}updateFavoriteItems(e,t){try{this.collectMap.set(e,t),r={module:h,collectionName:e,payloads:null==t?void 0:t.map((e=>({name:e.text,url:e.to,extInfo:e})))},d.http.post("api/gateway/user_service.my_collection.UpsertMyCollection/api/v1/user_service/my_collection/upsert_collections",r,undefined)}catch(e){(0,E.handleHttpError)(e)}var r}equalItem(e,t){return e.text===t.text&&e.to===t.to}removeItemFromFavorite(e,t){var r=this.getFavoritesById(e),a=r.findIndex((e=>this.equalItem(e,t)));-1!==a&&(r.splice(a,1),this.updateFavoriteItems(e,r))}isCollected(e,t){return this.getFavoritesById(e).some((e=>this.equalItem(e,t)))}toggleFavorite(e,t){if(this.isCollected(e,t))this.removeItemFromFavorite(e,t);else{if(this.checkMaxCapacity(e))return;this.setItemAsFavorite(e,t)}}moveFavoriteTo(e,t){var{from:r,to:a,direction:o}=t,n=this.getFavoritesById(e);if(this.equalItem(r,a))return n;var i=n.findIndex((e=>this.equalItem(e,r)));if(-1!==i){n.splice(i,1);var l=n.findIndex((e=>this.equalItem(e,a)));-1!==l&&(o===g.Left?n.splice(l,0,r):n.splice(l+1,0,r),this.updateFavoriteItems(e,n))}return n}checkMaxCapacity(e){return this.getFavoritesById(e).length>=this.maxCollectLength}},y=r(9640);(0,y.initializeReactI18n)(p.NS,p.k);var _=(0,i.wrapBrick)("eo-link"),C=(0,i.wrapBrick)("eo-icon"),k=(0,i.wrapBrick)("eo-tooltip");function w(e){var{data:t,onDragOver:r,direction:a}=e,{groupId:i,onFavoriteUpdate:l}=(0,o.useContext)(f);return n().createElement("div",{className:"indicate-wrapper","data-direction":a,"data-to":t.to,onDragEnter:e=>e.target.style.background="var(--palette-blue-1)",onDragLeave:e=>e.target.style.background="transparent","data-text":t.text,onDragOver:r,onDrop:e=>{var r=JSON.parse(e.dataTransfer.getData("application/json")),o=b.moveFavoriteTo(i,{from:r,to:t,direction:a});null==l||l(o)}})}function S(e){var{data:t,suffix:r,className:a}=e,{allowDrag:i,onDragStart:l,overElement:c,direction:p,onDragEnd:u,onDragOver:m}=(0,o.useContext)(f),d=(0,o.useRef)(null),[v,h]=(0,o.useState)(!1),x=(0,o.useMemo)((()=>c&&c.dataset.to==t.to&&c.dataset.text==c.dataset.text),[c,t]);return n().createElement(n().Fragment,null,x&&p===g.Left&&n().createElement(w,{data:t,onDragOver:m,direction:g.Left}),n().createElement(_,{"data-to":t.to,"data-text":t.text,ref:d,draggable:!0,onDragStart:e=>{var r;i?(h(!0),null===(r=e.dataTransfer)||void 0===r||r.setData("application/json",JSON.stringify(t)),null==l||l(e)):e.preventDefault()},onDragEnd:e=>{h(!1),null==u||u(e)},onDragOver:e=>{e.dataTransfer.dropEffect="none",null==m||m(e)},className:s()("tag-container",a,{"is-drag":v}),url:t.to,href:t.href,target:t.target},n().createElement("span",{className:"tag-text ellipsis",title:t.text},t.text),n().createElement("span",{className:"tag-suffix",onClick:e=>e.preventDefault()},r)),x&&p===g.Right&&n().createElement(w,{data:t,onDragOver:m,direction:g.Right}))}function I(e){var{t}=(0,y.useTranslation)(p.NS),{onAllowDrag:r}=(0,o.useContext)(f),{data:a,onFavorite:i,groupId:l}=e,c=(0,o.useRef)(),s=(0,o.useCallback)((()=>{b.removeItemFromFavorite(l,a),null==i||i(b.getFavoritesById(l))}),[l,a,i]),u=()=>{null==r||r(!0)};(0,o.useEffect)((()=>{var e=c.current,t=e=>{e.preventDefault()};return e.addEventListener("click",t),()=>{e.removeEventListener("click",t)}}),[]);var m=(0,o.useMemo)((()=>n().createElement("div",{className:"operation",ref:c},n().createElement(k,{content:t(p.K.REMOVE_ITEM_FROM_QUICK_ACCESS),hoist:!0,placement:"bottom",className:"close",onClick:s},n().createElement(C,{lib:"antd",icon:"close"})),n().createElement("span",{className:"drag-wrapper",onMouseDown:u},":::"))),[t,s]);return n().createElement(S,{className:"visit-container",suffix:m,data:a})}function A(e){var{onFavorite:t,className:r,groupId:a,data:i,active:c}=e,{t:u}=(0,y.useTranslation)(p.NS),m=(0,o.useRef)(),d=e=>{e.preventDefault(),b.toggleFavorite(a,i),null==t||t(b.getFavoritesById(a))};return(0,o.useEffect)((()=>{var e=m.current;return e.addEventListener("click",d),()=>{e.removeEventListener("click",d)}}),[]),n().createElement(k,{content:c?u(p.K.REMOVE_ITEM_FROM_QUICK_ACCESS):b.checkMaxCapacity(a)?u(p.K.MAX_COLLECT_COUNT_TIPS):u(p.K.ADD_ITEM_TO_QUICK_ACCESS),className:s()("star-icon",r)},n().createElement(C,(0,l.Z)({ref:m,className:s()({active:c}),lib:"antd",icon:"star"},c?{theme:"filled"}:{})))}function N(e){var{data:t,className:r,groupId:a,onFavorite:i,active:l}=e,c=(0,o.useMemo)((()=>n().createElement(A,{groupId:a,active:l,className:"star",data:t,onFavorite:i})),[t,a,i,l]);return n().createElement(S,{className:s()("recommend-container",r),suffix:c,data:t})}function M(e,t){"group"===e.type&&Array.isArray(e.items)?function(e,t){for(var r of e)M(r,t)}(e.items,t):t.push(e)}var T=(0,i.wrapBrick)("eo-link"),O=240;function R(e){var t,r,a,{groupId:o,selectedKey:i,onFavorite:l}=e,c=(t=e.groups,r=new Map,a=new Set,null==t||t.forEach((e=>{var t,o=null!==(t=e.groupFrom)&&void 0!==t?t:"default";a.add(o);var n=r.get(o);n?n.push(e):r.set(o,[e])})),Array.from(a).map((e=>({groupFrom:e,groups:r.get(e)}))));return n().createElement("div",{className:"group-view"},c.map(((e,t)=>n().createElement("div",{key:t},0!==t&&n().createElement("div",{className:"divider"}),"default"===e.groupFrom?n().createElement(D,{groupId:o,selectedKey:i,groups:e.groups,onFavorite:l}):n().createElement(F,{groupId:o,selectedKey:i,groups:e.groups,onFavorite:l})))))}function D(e){var{groupId:t,onFavorite:r,selectedKey:a,groups:i}=e,l=n().useRef(null),[c,s]=(0,o.useState)();return(0,o.useEffect)((()=>{var e=new ResizeObserver((e=>{for(var t of e)if(t.target===l.current){var r=t.contentRect.width;s(Math.floor(r/O))}}));return e.observe(l.current),()=>e.disconnect()}),[]),n().createElement("div",{className:"group",ref:l,style:c<(null==i?void 0:i.length)?{columnCount:c,columnWidth:O}:{display:"grid",gridTemplateColumns:"repeat(auto-fit, ".concat(O,"px)")}},i.map((e=>n().createElement("div",{key:e.key,className:"group-item"},n().createElement("div",{className:"title"},e.title),n().createElement("div",{className:"content"},e.items.map((e=>n().createElement(K,{key:e.key,groupId:t,selectedKey:a,data:e,onFavorite:r}))))))))}function F(e){var{groupId:t,onFavorite:r,selectedKey:a,groups:o}=e;return n().createElement("div",{className:"custom-group"},o.map((e=>n().createElement("div",{key:e.key},n().createElement("div",{className:"title"},e.title),n().createElement("div",{className:"custom-content",style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, ".concat(O,"px)")}},e.items.map((e=>n().createElement(K,{key:e.key,selectedKey:a,groupId:t,data:e,onFavorite:r}))))))))}function K(e){var{data:t,groupId:r,onFavorite:a,selectedKey:o}=e;return n().createElement(T,{key:t.key,icon:t.icon,url:t.to,href:t.href,target:t.target,className:s()("item-link",{active:null==o?void 0:o.includes(t.key)})},n().createElement("span",{className:"ellipsis",title:t.text},t.text),n().createElement("span",{className:"icon-wrapper"},n().createElement(A,{active:b.isCollected(r,t),groupId:r,data:t,onFavorite:a})))}var L=(0,i.wrapBrick)("eo-icon"),H=(0,i.wrapBrick)("eo-input",{onValueChange:"change"});function U(e){var{t}=(0,y.useTranslation)(p.NS),{menuGroup:r,selectedKey:i,visible:l}=e,c=r.groupId,[u,m]=(0,o.useState)([]),d=(0,o.useMemo)((()=>{return M(r,e=[]),e;var e}),[r]),[v,h]=(0,o.useState)(),[E,_]=(0,o.useState)([]),[C,k]=(0,o.useState)(),[w,S]=(0,o.useState)(),[A,T]=(0,o.useState)(),[O,D]=(0,o.useState)(),F=e=>{m(e)},K=(0,o.useCallback)((e=>{var t=e.detail;h(e.detail),_(t?d.filter((t=>t.text.toLowerCase().includes(e.detail.toLowerCase()))):d)}),[d]),U=(0,o.useMemo)((()=>(0,x.debounce)(K,200)),[K]),P=(0,o.useMemo)((()=>(0,x.throttle)((e=>{e.preventDefault();var t=function(e){for(var t=e;t;){if(t.draggable||"indicate-wrapper"===t.className)return t;t=t.parentElement}}(e.target);if(S(t),t&&function(e,t){return e&&t&&!(e.dataset.to===t.dataset.to&&e.dataset.text===t.dataset.text)}(t,C))if("indicate-wrapper"===t.className)D(t.dataset.direction);else{var{width:r,left:a}=t.getBoundingClientRect(),o=e.clientX>a+r/2;D(o?g.Right:g.Left)}else D(void 0)}))),[C]);return(0,o.useEffect)((()=>{(0,a.Z)((function*(){if(l){var e=yield b.fetchFavorites(c);m(e)}}))()}),[c,l]),l?n().createElement("div",{className:"site-map"},n().createElement("div",{className:"search-wrapper"},n().createElement(H,{className:"search-input",style:{width:"100%"},onValueChange:U,placeholder:t(p.K.SEARCH_ITEM_PLACEHOLDER)},n().createElement(L,{slot:"prefix",lib:"antd",icon:"search"}))),!v&&n().createElement("div",null,0!==u.length&&n().createElement("div",{className:s()("visit-access",{hasData:u.length})},n().createElement("span",{className:"title"},t(p.K.QUICK_ACCESS)),n().createElement(f.Provider,{value:{groupId:c,overElement:w,direction:O,allowDrag:A,onDragStart:e=>{k(e.target)},onDragOver:P,onDragEnd:()=>{k(void 0),D(void 0),T(!1)},onAllowDrag:e=>{T(e)},onFavoriteUpdate:F}},n().createElement("div",{className:"tag-wrapper"},u.map((e=>n().createElement(I,{onFavorite:F,groupId:c,key:e.key,data:e})))))),n().createElement(R,{groupId:c,selectedKey:i,groups:r.items,onFavorite:F})),v&&n().createElement("div",{className:"search-panel"},n().createElement("span",{className:"title"},t(p.K.SITE_MAP_SEARCH_RECOMMEND)),E.length?n().createElement("div",{className:"recommend-wrapper"},E.map((e=>n().createElement(N,{key:e.key,groupId:c,data:e,onFavorite:F,active:b.isCollected(c,e)})))):n().createElement("div",{className:"no-data-tips"},t(p.K.NO_DATA_SEARCH_INFO)))):null}},3808:(e,t,r)=>{r.d(t,{cl:()=>s,cx:()=>u,nC:()=>p,ty:()=>c});var a=r(8657),o=r.n(a),n=r(4511),i=(0,n.wrapBrick)("eo-icon"),l=(0,n.wrapBrick)("eo-link");function c(e){return"group"===e.type}function s(e,t){return Boolean("subMenu"===e.type||t&&"group"===e.type)}var p=(e,t)=>o().createElement(l,{type:"plain",key:e.key,url:e.to,href:e.href,target:e.target,style:t},o().createElement("span",{className:"menu-item-label"},e.text)),u=(e,t)=>o().createElement("span",{key:e.key,className:"menu-item-label"},e.title,t&&o().createElement(i,{lib:"fa",icon:"angle-right"}))},9800:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(9601),o=r.n(a),n=r(2609),i=r.n(n)()(o());i.push([e.id,':host{display:inline-block;background:none;--three-level-menu-search-input-background:linear-gradient(90deg,#e8eef6 0%,rgba(233,234,243,0) 100%);--three-level-menu-hover-color:#6bb3ff;--three-level-menu-title-color:#0b5ad9;--three-level-menu-active-color:#1a7aff;--three-level-menu-search-tag-color:rgb(89,89,89);--three-level-menu-search-tag-background:rgb(245,245,245)}:host::part(menu-item),\neo-link{display:block;padding:2px 0px}:host-context(html[data-theme="dark-v2"]),\n:host-context([data-override-theme="dark-v2"]){--three-level-menu-search-input-background:linear-gradient(124deg,rgba(255,255,255,0.36) 0%,rgba(255,255,255,0) 100%);--three-level-menu-hover-color:rgba(54,95,175,0.85);--three-level-menu-title-color:#6597e8;--three-level-menu-active-color:#3f75dd;--three-level-menu-search-tag-color:rgb(140,140,140);--three-level-menu-search-tag-background:rgb(107,107,107)}.nav-menu-wrapper{display:flex;align-items:center;gap:8px;white-space:nowrap}.popover .sub-menu-item-label{padding:2px 0px;color:var(--color-normal-text)}.popover.subprime{display:inline-block;width:100%}.sub-menu-wrapper{min-width:160px;max-height:calc(100vh - 100px);background-color:var(--antd-dropdown-menu-bg);padding:4px 0;border-radius:6px;box-shadow:0px 4px 12px 0px rgba(17,37,64,0.08);overflow-x:hidden;overflow-y:auto}.sub-menu-wrapper > eo-menu-item{display:block;width:100%}.sub-menu-wrapper > eo-menu-item .menu-item-label,\n.sub-menu-wrapper > eo-popover .menu-item-label,\n.sub-menu-wrapper > .group-wrapper > eo-popover .menu-item-label,\n.sub-menu-wrapper > .group-wrapper > eo-menu-item .menu-item-label{display:block;width:100%;padding:6px 24px;box-sizing:border-box;color:var(--color-normal-text)}.sub-menu-wrapper > eo-popover.subprime .menu-item-label,\n.sub-menu-wrapper > .group-wrapper > eo-popover.subprime .menu-item-label{display:flex;justify-content:space-between;align-items:center}.sub-menu-wrapper .menu-item-label{border-radius:0}.menu-item-label{display:inline-block;cursor:pointer;border-radius:4px;padding:5px 10px;color:var(--color-normal-text)}.menu-item-label:hover{background-color:var(--v8-top-menu-item-hover)}.group-label{padding-left:16px;font-size:12px;color:var(--palette-gray-7)}.sub-menu-wrapper eo-menu-item[active] .menu-item-label{background:var(--v8-top-menu-item-selected-bg);color:var(--color-brand);font-weight:500}.three-level-menu-container{max-width:980px;max-height:510px;overflow:auto;min-width:160px}.three-level-menu-item-container{display:grid;grid-gap:20px;gap:20px;margin-top:13px;padding:5px 10px}.three-level-menu-item-title-container{display:flex;align-items:center}.three-level-menu-item-title-icon{width:4px;height:4px;background-color:var(--three-level-menu-title-color);margin-right:4px;transform:rotate(45deg)}.three-level-menu-item-title{font-size:14px;font-family:PingFang-SC-Medium,PingFang-SC;font-weight:500;color:var(--three-level-menu-title-color)}.three-level-menu-container .menu-item-label{margin-top:4px;margin-left:4px;padding:4px;width:100%}.three-level-menu-container .active .menu-item-label{color:var(--three-level-menu-active-color)}.three-level-menu-search-result .menu-item-label{margin:0px}.three-level-menu-container .menu-item-label:hover{color:var(--three-level-menu-hover-color)}.three-level-menu-popover .sub-menu-wrapper{padding-top:0px}.three-level-menu-search-container{background:var(--three-level-menu-search-input-background);padding:5px 10px}.three-level-menu-search-result{min-width:187px;max-width:328px;max-height:324px;background-color:var(--antd-dropdown-menu-bg);box-shadow:0px 4px 12px 0px rgba(17,37,64,0.08);overflow:scroll}.three-level-menu-search-history-container{padding:5px 10px}.three-level-menu-search-history-text{background:var(--three-level-menu-search-tag-background);border-radius:2px;font-size:7px;line-height:11px;display:inline-block;height:11px;padding:4px;color:var(--three-level-menu-search-tag-color);margin-right:8px}.three-level-menu-search-history-title{color:#8c8c8c;margin:10px 0;display:flex;align-items:center}.three-level-menu-search-history-icon{margin-left:5px}.sub-menu-sit-map-wrapper{box-sizing:border-box;width:calc(100vw);padding:0 120px 24px;max-height:520px;background-color:var(--antd-dropdown-menu-bg);border-radius:6px;box-shadow:0px 4px 12px 0px rgba(17,37,64,0.08);overflow-x:hidden;overflow-y:auto}.overflow-menu-item{position:absolute;opacity:0;height:0;pointer-events:none}.in-group-site-map{width:auto;padding:0 20px}',""]);const l=i.toString()},8101:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(9601),o=r.n(a),n=r(2609),i=r.n(n)()(o());i.push([e.id,'.group .item-link, .custom-group .item-link{font-weight:400}.group .item-link:hover, .custom-group .item-link:hover{background-color:var(--color-fill-bg-base-1)}.group .item-link:hover::part(link), .custom-group .item-link:hover::part(link){color:var(--color-brand-hover)}.group .item-link:hover::part(icon), .custom-group .item-link:hover::part(icon){color:var(--color-brand-hover)}.group .item-link.active::part(link),\n    .custom-group .item-link.active::part(link),\n    .group .item-link.active::part(icon),\n    .custom-group .item-link.active::part(icon){color:var(--palette-blue-8)}.group .item-link::part(link), .custom-group .item-link::part(link){padding:8px 12px;display:flex;gap:4px;color:var(--color-header-text)}.group .item-link::part(icon), .custom-group .item-link::part(icon){color:var(--color-normal-text)}.group .title, .custom-group .title{padding:8px 16px;font-size:16px;font-weight:500;position:relative}.group .title::before, .custom-group .title::before{content:"";position:absolute;width:6px;height:6px;top:17px;left:1px;transform:rotate(45deg);background:var(--color-secondary-text)}.group .content .icon-wrapper, .custom-group .content .icon-wrapper, .group .custom-content .icon-wrapper, .custom-group .custom-content .icon-wrapper{color:var(--color-secondary-text);font-size:16px;display:none;margin-left:auto}.group .content .item-link:hover .icon-wrapper, .custom-group .content .item-link:hover .icon-wrapper, .group .custom-content .item-link:hover .icon-wrapper, .custom-group .custom-content .item-link:hover .icon-wrapper{display:block}.group .content .item-link:hover .icon-wrapper:hover, .custom-group .content .item-link:hover .icon-wrapper:hover, .group .custom-content .item-link:hover .icon-wrapper:hover, .custom-group .custom-content .item-link:hover .icon-wrapper:hover{color:var(--color-brand-hover)}.group .content, .custom-group .content{display:flex;flex-direction:column}.group .group-item, .custom-group .group-item{page-break-inside:avoid;break-inside:avoid}.group-view{min-height:300px}.group-view .divider{height:2px;background:var(--color-text-divider-line);margin:16px 0}',""]);const l=i.toString()},8462:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(9601),o=r.n(a),n=r(2609),i=r.n(n)()(o());i.push([e.id,".tag-container::part(link){display:flex;-webkit-user-select:none;user-select:none;-webkit-user-drag:none;-moz-user-select:none;justify-content:space-between;background-color:var(--color-fill-bg-base-1);border-radius:2px;padding:1px 6px}.tag-container .tag-text{color:var(--color-normal-text);font-weight:400}.tag-container:hover .tag-text{color:var(--color-brand-hover)}.tag-container .tag-suffix{display:inline-flex;font-size:12px;gap:4px;align-items:center;color:var(--color-secondary-text)}.tag-container.is-drag{opacity:0.4}.indicate-wrapper{border:1px dashed var(--color-brand-hover);border-radius:4px;height:20px;margin:2px 0}.close{display:inline-flex;margin-top:2px;padding:0 2px}.close:hover{color:var(--color-error)}.drag-wrapper{cursor:move}.drag-wrapper:hover{color:var(--color-brand-hover)}.star-icon{display:flex;alignitems:center;color:var(--color-secondary-text)}.star-icon:hover{color:var(--color-brand-hover)}.star-icon .active{color:var(--palette-yellow-6)}.recommend-container:hover .star{display:inline-flex}.recommend-container .star{font-size:13px;display:none}.visit-container:hover .operation{display:inline-flex;align-items:center}.visit-container .operation{display:none}",""]);const l=i.toString()},2598:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(9601),o=r.n(a),n=r(2609),i=r.n(n)()(o());i.push([e.id,'.site-map .search-wrapper{position:-webkit-sticky;position:sticky;top:0;z-index:9999;padding-top:24px;padding-bottom:16px;background:var(--antd-dropdown-menu-bg)}.site-map .search-input::part(affix-wrapper){border:none;border-bottom:1px solid var(--antd-input-border-color);border-radius:0px}.site-map .visit-access .title, .site-map .search-panel .title{display:inline-block;padding:2px 16px;font-weight:500;line-height:24px;position:relative}.site-map .visit-access .title::before, .site-map .search-panel .title::before{content:"";position:absolute;width:6px;height:6px;top:10px;left:1px;border-radius:50%;background:var(--color-secondary-text)}.site-map .visit-access .no-data-tips, .site-map .search-panel .no-data-tips{display:flex;margin:16px 0 32px;align-items:center;justify-content:center;color:var(--color-secondary-text)}.site-map .visit-access{margin-bottom:8px}.site-map .visit-access.hasData{display:flex}.site-map .visit-access .tag-wrapper{flex:1;display:grid;grid-template-columns:repeat(auto-fit,200px);grid-gap:8px;gap:8px}.site-map .ellipsis{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.site-map .search-panel .recommend-wrapper{margin-top:16px;display:grid;grid-template-columns:repeat(auto-fit,200px);grid-gap:8px;gap:8px}:host-context(html[data-theme="dark-v2"]) .site-map .search-input::part(affix-wrapper), :host-context([data-override-theme="dark-v2"]) .site-map .search-input::part(affix-wrapper){background:var(--antd-dropdown-menu-bg)}',""]);const l=i.toString()},5863:(e,t,r)=>{function a(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}r.d(t,{Z:()=>a})},175:(e,t,r)=>{function a(e,t,r){if(!t.has(e))throw new TypeError("attempted to "+r+" private field on non-instance");return t.get(e)}r.d(t,{Z:()=>a})},687:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(175);function o(e,t){return function(e,t){return t.get?t.get.call(e):t.value}(e,(0,a.Z)(e,t,"get"))}},3395:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(5863);function o(e,t,r){(0,a.Z)(e,t),t.set(e,r)}},381:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(175);function o(e,t,r){return function(e,t,r){if(t.set)t.set.call(e,r);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=r}}(e,(0,a.Z)(e,t,"set"),r),r}},7993:(e,t,r)=>{r.d(t,{OZ:()=>n});var a=r(8353),o=r(5062);function n(e,t,r,l){var c=[],s=[],p=0;return e.forEach((e=>{if(e.key=""===l?"".concat(p):"".concat(l,".").concat(p),function(e){return"group"===e.type}(e)||function(e,t){return Boolean("subMenu"===e.type||void 0)}(e)){var u=n(e.items,t,r,e.key);c.push(...u.selectedKeys),(u.selectedKeys.length||e.defaultExpanded)&&s.push(e.key),s.push(...u.openedKeys)}else(function(e,t,r){if(!e.to)return!1;var n="object"==typeof e.to?e.to:(0,a.parsePath)(e.to),l=n.pathname.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),c=!!(0,o.matchPath)(t,{path:l,exact:e.exact});if(!c&&Array.isArray(e.activeIncludes))for(var s of e.activeIncludes){var p,u=void 0,m=s.includes("?");if(m&&(u=(0,a.parsePath)(s)),(c=!!(0,o.matchPath)(t,{path:m?u.pathname:s,exact:!0}))&&null!==(p=u)&&void 0!==p&&p.search&&(c=i(r,u.search)),c)break}if(c&&Array.isArray(e.activeExcludes))for(var d of e.activeExcludes)if(!(c=!(0,o.matchPath)(t,{path:d,exact:!0})))break;return c&&e.activeMatchSearch&&(c=i(r,n.search)),c})(e,t,r)&&c.push(String(e.key));p+=1})),c.length&&""!==l&&s.push(l),{selectedKeys:c,openedKeys:s}}function i(e,t){var r=new URLSearchParams(e),a=new URLSearchParams(t);for(var[o,n]of a.entries())if(r.get(o)!==n)return!1;return!0}}}]);
//# sourceMappingURL=327.325b8566.js.map
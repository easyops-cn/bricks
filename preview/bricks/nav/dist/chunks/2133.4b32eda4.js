"use strict";(globalThis.webpackChunk_next_bricks_nav=globalThis.webpackChunk_next_bricks_nav||[]).push([[2133],{2133:(e,t,n)=>{n.d(t,{fm:()=>M,ir:()=>_,pU:()=>O,sZ:()=>T});var s=n(8769),r=n(5223),i=n(2144),o=n(4612),a=n(4864),c=n(9393),p=n(3346),l=n(7296),u=n(2824),d=n(2887),m=n(8406);const f=10,h=10;var I,g=n(6659),y=n(1030);async function w(){return(await(0,l.K)({page:1,pageSize:f},{interceptorParams:{ignoreLoadingBar:!0},noAbortOnRouteChange:!0})).list}function v(e,t){return e.id.toLowerCase().includes(t)||e.name.toLowerCase().includes(t)||e.description&&e.description.toLowerCase().includes(t)?e:null}function k(e,t){return e.id.toLowerCase().includes(t)||e.name.toLowerCase().includes(t)||e.description&&e.description.toLowerCase().includes(t)?e:null}const b=`launchpad-recent-visits:${null===(I=i.auth.getAuth())||void 0===I?void 0:I.org}`,A=new o.G(localStorage);let F=[],C=new Map,S=new Map,B=!1,P=[],x=!1,E=[],L=!1;const _=new a.x((async()=>{({menuGroups:F,microAppsById:C,customLinksById:S}=await async function(){const e=await(0,p.i)({},{interceptorParams:{ignoreLoadingBar:!0},noAbortOnRouteChange:!0}),t=new Map;for(const n of e.storyboards){const e=n.app;e.localeName=(0,g.F)(e.locales,e.name),t.set(e.id,e)}const n=[],s=new Map;for(const r of e.desktops){const e=[];for(const n of r.items)switch(n.type){case"app":{const s=t.get(n.id);s&&e.push({...n,name:s.localeName,url:s.homepage,menuIcon:s.menuIcon});break}case"custom":e.push(n),s.set(n.id,n);break;case"dir":{const r=[];for(const e of n.items)if("app"===e.type){const n=t.get(e.id);n&&r.push({...e,name:n.localeName,url:n.homepage,menuIcon:n.menuIcon})}else"custom"===e.type&&(r.push(e),s.set(e.id,e));r.length>0&&e.push({...n,items:r});break}}e.length>0&&n.push({...r,items:e})}return{menuGroups:n,microAppsById:t,customLinksById:s}}()),B=!0})),M=new a.x((async()=>{P=await async function(){const e=await w(),t=[];for(const n of e)if("microApp"===n.type){const e=n.relatedApp;e.localeName=(0,g.F)(e.locales,e.name),t.push({favoriteId:n.instanceId,type:"app",name:e.localeName,id:e.appId,url:e.homepage,instanceId:e.instanceId,menuIcon:e.menuIcon})}else if("customItem"===n.type){const e=n.relatedCustomItem;t.push({favoriteId:n.instanceId,type:"custom",name:e.name,id:e.id,url:e.url,menuIcon:e.menuIcon})}else"link"===n.type&&t.push({favoriteId:n.instanceId,type:"link",name:n.name,url:n.link,menuIcon:n.icon});return t}(),x=!0})),O=new a.x((async()=>{E=await async function(){const e=(await(0,m.y)("MICRO_APP_CATEGORY@EASYOPS",{fields:["id","type","name","icon","order","platformApps.appId","platformApps.name","platformApps.homepage","platformApps.description","platformApps.menuIcon","platformApps.locales","platformApps._object_id","platformApps.@.order","platformItems.id","platformItems.name","platformItems.url","platformItems.description","platformItems.menuIcon","platformItems._object_id","platformItems.@.order"],page:1,page_size:300,query:{type:"platform"}})).list,t=null==e?void 0:e.map((e=>{const t=e.platformApps.map((e=>{var t;return{type:"app",name:(0,g.F)(e.locales,e.name),id:e.appId,url:e.homepage,menuIcon:e.menuIcon,description:e.description,instanceId:e.instanceId,order:null===(t=e["@"])||void 0===t?void 0:t.order}})),n=e.platformItems.map((e=>{var t;return{type:"custom",name:e.name,id:e.id,url:e.url,menuIcon:e.menuIcon,description:e.description,instanceId:e.instanceId,order:null===(t=e["@"])||void 0===t?void 0:t.order}})),s=(0,y.sortBy)([...t,...n],"order");return{instanceId:e.instanceId,id:e.id,name:e.name,icon:e.icon,order:e.order,items:s}}));return[{id:"#all",name:"全部",icon:{lib:"easyops",category:"second-menu",icon:"sprint-planning-second-menu"},items:[]},...(0,y.sortBy)(t,"order")]}(),L=!0})),N=e=>(0,c.Ds)({type:"error",message:(0,r.httpErrorToString)(e)});function T(e){const[t,n]=(0,s.useState)(F),[i,o]=(0,s.useState)(C),[a,p]=(0,s.useState)(S),[l,m]=(0,s.useState)(""),[I,g]=(0,s.useState)(!B),[y,T]=(0,s.useState)(!x),[R,j]=(0,s.useState)(!L),[q,z]=(0,s.useState)([]),[D,J]=(0,s.useState)([]),[V,Y]=(0,s.useState)(P),[$,H]=(0,s.useState)(E);(0,s.useEffect)((()=>{e&&!I&&(n(F),o(C),p(S))}),[e,I]),(0,s.useEffect)((()=>{e&&!y&&Y(P)}),[e,y]),(0,s.useEffect)((()=>{e&&!R&&H(E)}),[e,R]),(0,s.useEffect)((()=>{e&&z(A.getItem(b)??[])}),[e]),(0,s.useEffect)((()=>{e&&(async()=>{try{await _.fetch(),g(!1)}catch(e){(0,r.handleHttpError)(e)}})()}),[e]),(0,s.useEffect)((()=>{e&&(async()=>{try{await M.fetch(),T(!1)}catch(e){T(!1),N(e)}})()}),[e]),(0,s.useEffect)((()=>{var t;e&&null!==(t=(0,r.getRuntime)())&&void 0!==t&&t.getFeatureFlags()["launchpad-show-platform-category"]&&(async()=>{try{await O.fetch(),j(!1)}catch(e){j(!1),N(e)}})()}),[e]),(0,s.useEffect)((()=>{if(I)return;const e=q.map((e=>{if("app"===e.type){const t=i.get(e.id);return t?{type:"app",name:t.localeName,id:t.id,url:t.homepage,instanceId:t.instanceId,menuIcon:t.menuIcon}:null}return a.get(e.id)})).filter(Boolean);J(e)}),[a,I,i,q]);const K=(0,s.useCallback)((e=>{let{type:t,id:n}=e;const s=A.getItem(b)??[],r=s.findIndex((e=>e.type===t&&e.id===n));r>-1&&s.splice(r,1),s.unshift({type:t,id:n}),s.length>h&&s.pop(),A.setItem(b,s)}),[]),Q=(0,s.useCallback)((e=>V.some((t=>G(e,t)))),[V]),U=(0,s.useCallback)((e=>{const t=V.findIndex((t=>"link"===e.type?t.favoriteId===e.favoriteId:G(e,t)));let n;if(t>-1){const e=V[t];n=V.slice(0,t).concat(V.slice(t+1)),async function(e){return e.favoriteId?(0,d.r)(e.favoriteId):w().then((t=>{var n;const s=null===(n=t.find((t=>{var n,s;return"app"===e.type?"microApp"===t.type&&(null===(n=t.relatedApp)||void 0===n?void 0:n.appId)===e.id:"custom"===e.type&&(null===(s=t.relatedCustomItem)||void 0===s?void 0:s.id)===e.id})))||void 0===n?void 0:n.instanceId;if(s)return(0,d.r)(s);console.error("Menu item to unstar not found:",e)}))}(e).catch(N)}else{if(V.length>=f)return void(0,c.ui)({type:"warn",title:"收藏数量已达上限",content:`当前收藏链接数量已达上限（${f}个），请删除部分收藏后再添加。`});const t={...e};n=V.concat(t),async function(e){return(0,u.k)({type:"app"===e.type?"microApp":"customItem",relatedInstanceId:e.instanceId},{interceptorParams:{ignoreLoadingBar:!0}})}(e).then((e=>{e&&(t.favoriteId=e.instanceId)}),N)}Y(n),P=n}),[V]),Z=(0,s.useMemo)((()=>function(e,t){if(!t)return e;const n=t.toLowerCase();return e.map((e=>({...e,items:e.items.map((e=>{switch(e.type){case"app":return v(e,n);case"custom":return k(e,n);case"dir":{const t=e.items.map((e=>"app"===e.type?v(e,n):"custom"===e.type?k(e,n):null)).filter(Boolean);return t.length>0?{...e,items:t}:null}}})).filter(Boolean)}))).filter((e=>e.items.length>0))}(t,l)),[t,l]),W=(0,s.useMemo)((()=>function(e,t){if(!t)return e;const n=t.toLowerCase();return e.map((e=>({...e,items:e.items.map((e=>{switch(e.type){case"app":return v(e,n);case"custom":return k(e,n)}})).filter(Boolean)})))}($,l)),[$,l]);return{loading:I,q:l,setQ:m,menuGroups:Z,loadingFavorites:y,loadingPlatformCategories:R,favorites:V,recentVisits:D,pushRecentVisit:K,isStarred:Q,toggleStar:U,platformCategories:W}}function G(e,t){return e.instanceId&&t.instanceId?t.instanceId===e.instanceId:t.type===e.type&&t.id===e.id}},9393:(e,t,n)=>{n.d(t,{Bj:()=>i,Ds:()=>c,EM:()=>o,ui:()=>a});var s=n(4295),r=n(3078);const i=(0,s.wrapBrick)("eo-icon"),o=(0,s.wrapBrick)("eo-link"),a=(0,r.unwrapProvider)("basic.show-dialog"),c=(0,r.unwrapProvider)("basic.show-notification")},4864:(e,t,n)=>{n.d(t,{x:()=>r});var s=n(4586);class r{constructor(e){(0,s.A)(this,"preFetchId",null),(0,s.A)(this,"preFetchScheduled",!1),(0,s.A)(this,"firstFetchPromise",null),(0,s.A)(this,"isFetching",!1),(0,s.A)(this,"task",void 0),this.task=e}schedulePrefetch(){if(!this.preFetchScheduled){this.preFetchScheduled=!0;const e=async()=>{this.preFetchId=null,this.fetch()};"function"==typeof window.requestIdleCallback?this.preFetchId=window.requestIdleCallback(e):this.preFetchId=setTimeout(e)}}fetch(e){let t;return this.preFetchId&&("function"==typeof window.cancelIdleCallback?cancelIdleCallback(this.preFetchId):clearTimeout(this.preFetchId),this.preFetchId=null),this.isFetching&&!e||(this.isFetching=!0,t=this.task(),t.catch((e=>{console.error(e),this.firstFetchPromise=null})).finally((()=>{this.isFetching=!1})),this.firstFetchPromise||(this.firstFetchPromise=t),!e)?this.firstFetchPromise:t}}},6659:(e,t,n)=>{n.d(t,{F:()=>r});var s=n(6181);function r(e,t){if(!e)return t;const n=Object.fromEntries(Object.entries(e).filter((e=>{let[t,n]=e;return n.name})).map((e=>{let[t,n]=e;return[t,n.name]})));return(0,s.i18nText)(n)??t}},4612:(e,t,n)=>{n.d(t,{G:()=>s});class s{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"brick-next-";this.storage=e,this.prefix=t}setItem(e,t){this.storage.setItem(this.prefix+e,JSON.stringify(t))}getItem(e){return JSON.parse(this.storage.getItem(this.prefix+e))}removeItem(e){return this.storage.removeItem(this.prefix+e)}clear(){return this.storage.clear()}}}}]);
//# sourceMappingURL=2133.4b32eda4.js.map
"use strict";(globalThis.webpackChunkbrick_docs=globalThis.webpackChunkbrick_docs||[]).push([[6258],{167:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>p,default:()=>x,frontMatter:()=>d,metadata:()=>l,toc:()=>m});var r=t(5893),i=t(1151),s=t(4752),a=t(2535),c=t(785),o=t(7253);t(9265);const d={description:"<basic.http-request>"},p=void 0,l={id:"bricks/basic/http-request",title:"http-request",description:"<basic.http-request>",source:"@site/docs/bricks/basic/http-request.mdx",sourceDirName:"bricks/basic",slug:"/bricks/basic/http-request",permalink:"/bricks/basic/http-request",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{description:"<basic.http-request>"},sidebar:"docsSidebar",previous:{title:"home-redirect",permalink:"/bricks/basic/home-redirect"},next:{title:"show-dialog",permalink:"/bricks/basic/show-dialog"}},h={},m=[{value:"Examples",id:"examples",level:2},{value:"Definition",id:"definition",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3}];function u(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...e.components};return a.vy||b("TypeReferencesContext",!1),a.vy.Provider||b("TypeReferencesContext.Provider",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.Z,{name:"basic.http-request",isProvider:!0}),"\n",(0,r.jsx)(n.p,{children:"\u53d1\u9001 HTTP \u8bf7\u6c42\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:"preview",children:'brick: eo-button\nproperties:\n  textContent: Check weather in Shenzhen\nevents:\n  click:\n    useProvider: basic.http-request\n    args:\n      - |\n        <%\n          `//api.weatherapi.com/v1/current.json?q=Shenzhen&key=${MISC.weather_api_key}`\n        %>\n    callback:\n      success:\n        action: message.success\n        args:\n          - <% `It\'s ${EVENT.detail.current.condition.text} in Shenzhen` %>\n      error:\n        action: handleHttpError\n# -- YAML HEADING DELIMITER start (1nbbm8) --\nbasic/http-request\n# -- YAML HEADING DELIMITER end (1nbbm8) --\n# -- YAML DELIMITER (1nbbm8) --\n# <eo-button id="brick-1">Check weather in Shenzhen</eo-button>\n# \n# <script>\n#   const brick_1 = document.getElementById("brick-1");\n#   brick_1.addEventListener("click", (e) => {\n#     const provider = document.createElement("basic.http-request");\n#     const promise = Promise.resolve(\n#       provider.resolve(\n#         /* WARN: incompatible expressions in HTML, please try YAML: */\n#         "<%\\n  `//api.weatherapi.com/v1/current.json?q=Shenzhen&key=${MISC.weather_api_key}`\\n%>\\n"\n#       )\n#     );\n#     promise.then((r) => {\n#       const message = document.createElement("basic.show-notification");\n#       message.resolve({\n#         type: "success",\n#         /* WARN: incompatible expressions in HTML, please try YAML: */\n#         message:\n#           "<% `It\'s ${EVENT.detail.current.condition.text} in Shenzhen` %>",\n#       });\n#     });\n#     promise.catch((r) => {\n#       // WARN: encountered incompatible event handlers in HTML mode, please try YAML.\n#     });\n#   });\n# <\/script>\n# \n'})}),"\n",(0,r.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,r.jsx)("pre",{children:(0,r.jsx)("code",{children:(0,r.jsx)(a.vy.Provider,{value:void 0,children:(0,r.jsx)(a.ZP,{annotation:{type:"typeParameterDeclaration",params:[{type:"typeParameter",name:"T",default:{type:"keyword",value:"unknown"}}]}})})})}),"\n",(0,r.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsx)(a.vy.Provider,{value:void 0,children:(0,r.jsx)(o.Z,{params:[{name:"url",description:"\u8bf7\u6c42\u5730\u5740",annotation:{type:"keyword",value:"string"}},{name:"init",description:"\u8bf7\u6c42\u521d\u59cb\u5316\u6570\u636e",annotation:{type:"reference",typeName:{type:"identifier",name:"RequestInit"}}},{name:"options",description:"\u8bf7\u6c42\u9009\u9879",annotation:{type:"reference",typeName:{type:"identifier",name:"RequestCustomOptions"}}}]})}),"\n",(0,r.jsx)(n.h3,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)("p",{children:(0,r.jsx)(c.Z,{children:(0,r.jsx)(a.vy.Provider,{value:void 0,children:(0,r.jsx)(a.ZP,{annotation:{type:"reference",typeName:{type:"identifier",name:"Promise"},typeParameters:{type:"typeParameterInstantiation",params:[{type:"reference",typeName:{type:"identifier",name:"T"}}]}}})})})}),"\n",(0,r.jsx)(n.p,{children:"\u54cd\u5e94\u7ed3\u679c"})]})}function x(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}function b(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},7253:(e,n,t)=>{t.d(n,{Z:()=>c});t(7294);var r=t(2535),i=t(785),s=t(1550),a=t(5893);function c(e){let{params:n}=e;return 0===n.length?(0,a.jsx)("p",{children:"None"}):(0,a.jsxs)("table",{children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"#"}),(0,a.jsx)("th",{children:"Name"}),(0,a.jsx)("th",{children:"Description"}),(0,a.jsx)("th",{children:"Type"})]})}),(0,a.jsx)("tbody",{children:n.map(((e,n)=>(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:n+1}),(0,a.jsx)("td",{children:(0,a.jsxs)("code",{children:[e.isRestElement&&"...",e.name]})}),(0,a.jsx)("td",{children:(0,a.jsx)(s.Z,{content:e.description})}),(0,a.jsx)("td",{children:(0,a.jsx)(i.Z,{children:(0,a.jsx)(r.ZP,{annotation:e.annotation})})})]},n)))})]})}}}]);
"use strict";(globalThis.webpackChunkbrick_docs=globalThis.webpackChunkbrick_docs||[]).push([[9722],{3656:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>p,default:()=>w,frontMatter:()=>l,metadata:()=>c,toc:()=>v});var a=t(5893),r=t(1151),i=t(4752),o=t(7886),d=(t(7268),t(5673)),s=(t(1243),t(9898),t(9265),t(2535));const l={description:"<data-view.dropdown-menu>"},p=void 0,c={id:"bricks/data-view/dropdown-menu",title:"dropdown-menu",description:"<data-view.dropdown-menu>",source:"@site/docs/bricks/data-view/dropdown-menu.mdx",sourceDirName:"bricks/data-view",slug:"/bricks/data-view/dropdown-menu",permalink:"/bricks/data-view/dropdown-menu",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{description:"<data-view.dropdown-menu>"},sidebar:"docsSidebar",previous:{title:"data-display-flipper",permalink:"/bricks/data-view/data-display-flipper"},next:{title:"gauge-chart",permalink:"/bricks/data-view/gauge-chart"}},u={},v=[{value:"Examples",id:"examples",level:2},{value:"Basic",id:"basic",level:3},{value:"Properties",id:"properties",level:2},{value:"Events",id:"events",level:2}];function m(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return s.vy||b("TypeReferencesContext",!1),s.vy.Provider||b("TypeReferencesContext.Provider",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.Z,{name:"data-view.dropdown-menu",alias:null,insider:!1,deprecated:!1}),"\n",(0,a.jsx)(n.p,{children:"\u5927\u5c4f\u57fa\u7840\u4e0b\u62c9\u83dc\u5355"}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(n.h3,{id:"basic",children:"Basic"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",metastring:"preview",children:'- brick: data-view.dropdown-menu\n  properties:\n    options:\n      - label: \u6d4b\u8bd51\n        value: test1\n      - label: \u6d4b\u8bd52\n        value: test2\n    placeholder: \u8bf7\u9009\u62e9\n    allowClear: true\n  events:\n    value.change:\n      - action: console.log\n# -- YAML HEADING DELIMITER start (1nbbm8) --\ndata-view/dropdown-menu/basic\n# -- YAML HEADING DELIMITER end (1nbbm8) --\n# -- YAML DELIMITER (1nbbm8) --\n# <data-view.dropdown-menu\n#   placeholder="\u8bf7\u9009\u62e9"\n#   allow-clear\n#   id="brick-1"\n# ></data-view.dropdown-menu>\n# \n# <script>\n#   const brick_1 = document.getElementById("brick-1");\n#   brick_1.options = [\n#     {\n#       label: "\u6d4b\u8bd51",\n#       value: "test1",\n#     },\n#     {\n#       label: "\u6d4b\u8bd52",\n#       value: "test2",\n#     },\n#   ];\n#   brick_1.addEventListener("value.change", (e) => {\n#     console.log(e.detail);\n#   });\n# <\/script>\n# \n'})}),"\n",(0,a.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,a.jsx)(s.vy.Provider,{value:[],children:(0,a.jsx)(o.Z,{properties:[{name:"options",description:"",attribute:!1,type:"{ label: string; value: string }[]",annotation:{type:"array",elementType:{type:"typeLiteral",members:[{type:"propertySignature",key:{type:"identifier",name:"label"},annotation:{type:"keyword",value:"string"},computed:!1},{type:"propertySignature",key:{type:"identifier",name:"value"},annotation:{type:"keyword",value:"string"},computed:!1}]}}},{name:"value",description:"",type:"string",annotation:{type:"keyword",value:"string"}},{name:"placeholder",description:"",type:"string",annotation:{type:"keyword",value:"string"}},{name:"allowClear",description:"",type:"boolean",annotation:{type:"keyword",value:"boolean"}}]})}),"\n",(0,a.jsx)(n.h2,{id:"events",children:"Events"}),"\n",(0,a.jsx)(s.vy.Provider,{value:[],children:(0,a.jsx)(d.Z,{events:[{name:"value.change",description:"",detail:{description:null,type:"string",annotation:{type:"keyword",value:"string"}}}]})})]})}function w(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}function b(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);
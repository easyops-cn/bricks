"use strict";(globalThis.webpackChunkbrick_docs=globalThis.webpackChunkbrick_docs||[]).push([[1983],{6517:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>b});var i=t(5893),p=t(1151),o=t(4752),r=t(7886),a=(t(7268),t(5673),t(1243)),s=(t(9898),t(9265)),c=t(2535);const l={description:"<eo-popup>"},d=void 0,u={id:"bricks/containers/eo-popup",title:"eo-popup",description:"<eo-popup>",source:"@site/docs/bricks/containers/eo-popup.mdx",sourceDirName:"bricks/containers",slug:"/bricks/containers/eo-popup",permalink:"/bricks/containers/eo-popup",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{description:"<eo-popup>"},sidebar:"docsSidebar",previous:{title:"eo-page-view",permalink:"/bricks/containers/eo-page-view"},next:{title:"eo-resizable-box",permalink:"/bricks/containers/eo-resizable-box"}},m={},b=[{value:"Examples",id:"examples",level:2},{value:"Basic",id:"basic",level:3},{value:"Method &amp; PopupId",id:"method--popupid",level:3},{value:"Resizable",id:"resizable",level:3},{value:"Toolbar slot",id:"toolbar-slot",level:3},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2},{value:"Type references",id:"type-references",level:2}];function y(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,p.a)(),...e.components};return c.vy||v("TypeReferencesContext",!1),c.vy.Provider||v("TypeReferencesContext.Provider",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.Z,{name:"eo-popup",alias:null,insider:!1,deprecated:!1}),"\n",(0,i.jsxs)(n.p,{children:["\u6784\u4ef6 ",(0,i.jsx)(n.code,{children:"eo-popup"})]}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.h3,{id:"basic",children:"Basic"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'preview minHeight="500px"',children:'brick: eo-popup\nproperties:\n  popupTitle: Popup\n  popupHeight: 300px\n  visible: true\nchildren:\n  - brick: div\n    properties:\n      textContent: Hello, I\'m content!\n# -- YAML HEADING DELIMITER start (1nbbm8) --\ncontainers/eo-popup/basic\n# -- YAML HEADING DELIMITER end (1nbbm8) --\n# -- YAML DELIMITER (1nbbm8) --\n# <eo-popup popup-title="Popup" popup-height="300px" visible>\n#   <div>Hello, I\'m content!</div>\n# </eo-popup>\n# \n'})}),"\n",(0,i.jsx)(n.h3,{id:"method--popupid",children:"Method & PopupId"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'preview minHeight="500px"',children:'- brick: eo-button\n  properties:\n    textContent: Open Popup\n  events:\n    click:\n      - target: "#popup"\n        method: open\n- brick: eo-button\n  properties:\n    textContent: Close Popup\n  events:\n    click:\n      - target: "#popup"\n        method: close\n- brick: eo-popup\n  properties:\n    popupTitle: Button Open\n    popupHeight: 400px\n    id: popup\n    popupId: popupA\n  children:\n    - brick: div\n      properties:\n        textContent: Hello, I\'m content!\n# -- YAML HEADING DELIMITER start (1nbbm8) --\ncontainers/eo-popup/method & popupid\n# -- YAML HEADING DELIMITER end (1nbbm8) --\n# -- YAML DELIMITER (1nbbm8) --\n# <eo-button id="brick-1">Open Popup</eo-button>\n# <eo-button id="brick-2">Close Popup</eo-button>\n# <eo-popup\n#   popup-title="Button Open"\n#   popup-height="400px"\n#   popup-id="popupA"\n#   id="popup"\n# >\n#   <div>Hello, I\'m content!</div>\n# </eo-popup>\n# \n# <script>\n#   const brick_1 = document.getElementById("brick-1");\n#   brick_1.addEventListener("click", (e) => {\n#     const brick = document.querySelector("#popup");\n#     brick.open();\n#   });\n# \n#   const brick_2 = document.getElementById("brick-2");\n#   brick_2.addEventListener("click", (e) => {\n#     const brick = document.querySelector("#popup");\n#     brick.close();\n#   });\n# <\/script>\n# \n'})}),"\n",(0,i.jsx)(n.h3,{id:"resizable",children:"Resizable"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'preview minHeight="500px"',children:"brick: eo-popup\nproperties:\n  popupTitle: resizable\n  visible: true\n  resizable: true\nchildren:\n  - brick: div\n    properties:\n      textContent: Hello, I'm content!\n# -- YAML HEADING DELIMITER start (1nbbm8) --\ncontainers/eo-popup/resizable\n# -- YAML HEADING DELIMITER end (1nbbm8) --\n# -- YAML DELIMITER (1nbbm8) --\n# <eo-popup popup-title=\"resizable\" visible resizable>\n#   <div>Hello, I'm content!</div>\n# </eo-popup>\n# \n"})}),"\n",(0,i.jsx)(n.h3,{id:"toolbar-slot",children:"Toolbar slot"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'preview minHeight="300px"',children:'brick: eo-popup\nproperties:\n  popupTitle: resizable\n  popupHeight: 200px\n  visible: true\nchildren:\n  - brick: div\n    properties:\n      textContent: Hello, I\'m content!\n  - brick: eo-icon\n    slot: toolbar\n    properties:\n      icon: edit\n      lib: antd\n      style:\n        cursor: pointer\n    events:\n      click:\n        - action: message.success\n          args:\n            - edit\n# -- YAML HEADING DELIMITER start (1nbbm8) --\ncontainers/eo-popup/toolbar slot\n# -- YAML HEADING DELIMITER end (1nbbm8) --\n# -- YAML DELIMITER (1nbbm8) --\n# <eo-popup popup-title="resizable" popup-height="200px" visible>\n#   <div>Hello, I\'m content!</div>\n#   <eo-icon\n#     slot="toolbar"\n#     icon="edit"\n#     lib="antd"\n#     style="cursor: pointer"\n#     id="brick-1"\n#   ></eo-icon>\n# </eo-popup>\n# \n# <script>\n#   const brick_1 = document.getElementById("brick-1");\n#   brick_1.addEventListener("click", (e) => {\n#     const message = document.createElement("basic.show-notification");\n#     message.resolve({ type: "success", message: "edit" });\n#   });\n# <\/script>\n# \n'})}),"\n",(0,i.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsx)(c.vy.Provider,{value:["OpenDirection"],children:(0,i.jsx)(r.Z,{properties:[{name:"popupId",description:"\u6d6e\u5c42Id, \u5982\u679c\u6709\u8bbe\u7f6e\u6d6e\u5c42id, \u4f1a\u5f00\u542f\u4f4d\u7f6e\u8bb0\u5f55\u529f\u80fd",type:"string",annotation:{type:"keyword",value:"string"}},{name:"popupWidth",description:"\u5f39\u7a97\u5bbd\u5ea6",default:"500",type:'React.CSSProperties["width"]',annotation:{type:"indexedAccess",objectType:{type:"reference",typeName:{type:"qualifiedName",left:{type:"identifier",name:"React"},right:{type:"identifier",name:"CSSProperties"}}},indexType:{type:"jsLiteral",value:"width"}}},{name:"popupHeight",description:"\u5f39\u7a97\u9ad8\u5ea6",type:'React.CSSProperties["height"]',annotation:{type:"indexedAccess",objectType:{type:"reference",typeName:{type:"qualifiedName",left:{type:"identifier",name:"React"},right:{type:"identifier",name:"CSSProperties"}}},indexType:{type:"jsLiteral",value:"height"}}},{name:"popupTitle",description:"\u5f39\u7a97\u6807\u9898",type:"string",annotation:{type:"keyword",value:"string"}},{name:"openDirection",description:"\u5f39\u7a97\u6253\u5f00\u4f4d\u7f6e",default:"center",type:"OpenDirection",annotation:{type:"reference",typeName:{type:"identifier",name:"OpenDirection"}}},{name:"visible",description:"\u662f\u5426\u663e\u793a\u6a21\u6001\u6846",type:"boolean",annotation:{type:"keyword",value:"boolean"}},{name:"headerStyle",description:"\u7528\u4e8e\u8bbe\u7f6e popup head\u7684\u6837\u5f0f",attribute:!1,type:"React.CSSProperties",annotation:{type:"reference",typeName:{type:"qualifiedName",left:{type:"identifier",name:"React"},right:{type:"identifier",name:"CSSProperties"}}}},{name:"wrapperStyle",description:"\u7528\u4e8e\u8bbe\u7f6e popup wrapper\u7684\u6837\u5f0f",attribute:!1,type:"React.CSSProperties",annotation:{type:"reference",typeName:{type:"qualifiedName",left:{type:"identifier",name:"React"},right:{type:"identifier",name:"CSSProperties"}}}},{name:"noPadding",description:"\u5185\u5bb9\u6ca1\u6709\u8fb9\u8ddd",type:"boolean",annotation:{type:"keyword",value:"boolean"}},{name:"resizable",description:"\u662f\u5426\u53ef\u8c03\u6574\u5c3a\u5bf8",type:"boolean",annotation:{type:"keyword",value:"boolean"}}]})}),"\n",(0,i.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,i.jsx)(c.vy.Provider,{value:["OpenDirection"],children:(0,i.jsx)(a.Z,{methods:[{name:"open",params:[],description:"\u663e\u793a\u5f39\u7a97",returns:{type:"void",annotation:{type:"keyword",value:"void"}}},{name:"close",params:[],description:"\u5173\u95ed\u5f39\u7a97",returns:{type:"void",annotation:{type:"keyword",value:"void"}}}]})}),"\n",(0,i.jsx)(n.h2,{id:"type-references",children:"Type references"}),"\n",(0,i.jsx)(s.Z,{types:[{type:"enum",name:"OpenDirection",members:[{type:"enumMember",id:{type:"identifier",name:"LeftTop"},initializer:{type:"jsLiteral",value:"leftTop"}},{type:"enumMember",id:{type:"identifier",name:"LeftBottom"},initializer:{type:"jsLiteral",value:"leftBottom"}},{type:"enumMember",id:{type:"identifier",name:"RightTop"},initializer:{type:"jsLiteral",value:"rightTop"}},{type:"enumMember",id:{type:"identifier",name:"RightBottom"},initializer:{type:"jsLiteral",value:"rightBottom"}},{type:"enumMember",id:{type:"identifier",name:"Center"},initializer:{type:"jsLiteral",value:"center"}}]}]})]})}function h(e={}){const{wrapper:n}={...(0,p.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(y,{...e})}):y(e)}function v(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);
"use strict";(globalThis.webpackChunkbrick_docs=globalThis.webpackChunkbrick_docs||[]).push([[49],{4147:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>p,default:()=>g,frontMatter:()=>d,metadata:()=>m,toc:()=>h});var i=t(5893),r=t(1151),o=t(4752),s=t(2535),c=t(785),a=t(7253),l=t(9265);const d={description:"<basic.show-dialog>"},p=void 0,m={id:"bricks/basic/show-dialog",title:"show-dialog",description:"<basic.show-dialog>",source:"@site/docs/bricks/basic/show-dialog.mdx",sourceDirName:"bricks/basic",slug:"/bricks/basic/show-dialog",permalink:"/bricks/basic/show-dialog",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{description:"<basic.show-dialog>"},sidebar:"docsSidebar",previous:{title:"http-request",permalink:"/bricks/basic/http-request"},next:{title:"show-notification",permalink:"/bricks/basic/show-notification"}},u={},h=[{value:"Examples",id:"examples",level:2},{value:"Confirm",id:"confirm",level:3},{value:"Alert",id:"alert",level:3},{value:"Delete",id:"delete",level:3},{value:"Usage in pro-code",id:"usage-in-pro-code",level:2},{value:"Definition",id:"definition",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Type references",id:"type-references",level:2}];function b(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return s.vy||y("TypeReferencesContext",!1),s.vy.Provider||y("TypeReferencesContext.Provider",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.Z,{name:"basic.show-dialog",isProvider:!0}),"\n",(0,i.jsx)(n.p,{children:"\u663e\u793a\u5bf9\u8bdd\u6846\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.h3,{id:"confirm",children:"Confirm"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'preview minHeight="400px"',children:'brick: eo-button\nproperties:\n  type: primary\n  textContent: Confirm\nevents:\n  click:\n    useProvider: basic.show-dialog\n    args:\n      - type: confirm\n        title: Please Confirm\n        content: Are you sure?\n    callback:\n      success:\n        action: message.success\n        args:\n          - You just confirmed!\n      error:\n        action: message.warn\n        args:\n          - You just canceled.\n# -- YAML HEADING DELIMITER start (1nbbm8) --\nbasic/show-dialog/confirm\n# -- YAML HEADING DELIMITER end (1nbbm8) --\n# -- YAML DELIMITER (1nbbm8) --\n# <eo-button type="primary" id="brick-1">Confirm</eo-button>\n# \n# <script>\n#   const brick_1 = document.getElementById("brick-1");\n#   brick_1.addEventListener("click", (e) => {\n#     const provider = document.createElement("basic.show-dialog");\n#     const promise = Promise.resolve(\n#       provider.resolve({\n#         type: "confirm",\n#         title: "Please Confirm",\n#         content: "Are you sure?",\n#       })\n#     );\n#     promise.then((r) => {\n#       const message = document.createElement("basic.show-notification");\n#       message.resolve({ type: "success", message: "You just confirmed!" });\n#     });\n#     promise.catch((r) => {\n#       const message = document.createElement("basic.show-notification");\n#       message.resolve({ type: "warn", message: "You just canceled." });\n#     });\n#   });\n# <\/script>\n# \n'})}),"\n",(0,i.jsx)(n.h3,{id:"alert",children:"Alert"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'preview gap minHeight="400px"',children:'- brick: eo-button\n  properties:\n    textContent: Success\n  events:\n    click:\n      useProvider: basic.show-dialog\n      args:\n        - type: success\n          title: Success\n          content: You\'ve done!\n      callback:\n        success:\n          action: message.info\n          args:\n            - That\'s ok.\n- brick: eo-button\n  properties:\n    textContent: Error\n  events:\n    click:\n      useProvider: basic.show-dialog\n      args:\n        - type: error\n          title: Error\n          content: Something went wrong.\n- brick: eo-button\n  properties:\n    textContent: Info\n  events:\n    click:\n      useProvider: basic.show-dialog\n      args:\n        - type: info\n          title: Info\n          content: Something happened.\n- brick: eo-button\n  properties:\n    textContent: Warn\n  events:\n    click:\n      useProvider: basic.show-dialog\n      args:\n        - type: warn\n          title: Warn\n          content: Something went wrong.\n# -- YAML HEADING DELIMITER start (1nbbm8) --\nbasic/show-dialog/alert\n# -- YAML HEADING DELIMITER end (1nbbm8) --\n# -- YAML DELIMITER (1nbbm8) --\n# <eo-button id="brick-1">Success</eo-button>\n# <eo-button id="brick-2">Error</eo-button>\n# <eo-button id="brick-3">Info</eo-button>\n# <eo-button id="brick-4">Warn</eo-button>\n# \n# <script>\n#   const brick_1 = document.getElementById("brick-1");\n#   brick_1.addEventListener("click", (e) => {\n#     const provider = document.createElement("basic.show-dialog");\n#     const promise = Promise.resolve(\n#       provider.resolve({\n#         type: "success",\n#         title: "Success",\n#         content: "You\'ve done!",\n#       })\n#     );\n#     promise.then((r) => {\n#       const message = document.createElement("basic.show-notification");\n#       message.resolve({ type: "info", message: "That\'s ok." });\n#     });\n#   });\n# \n#   const brick_2 = document.getElementById("brick-2");\n#   brick_2.addEventListener("click", (e) => {\n#     const provider = document.createElement("basic.show-dialog");\n#     provider.resolve({\n#       type: "error",\n#       title: "Error",\n#       content: "Something went wrong.",\n#     });\n#   });\n# \n#   const brick_3 = document.getElementById("brick-3");\n#   brick_3.addEventListener("click", (e) => {\n#     const provider = document.createElement("basic.show-dialog");\n#     provider.resolve({\n#       type: "info",\n#       title: "Info",\n#       content: "Something happened.",\n#     });\n#   });\n# \n#   const brick_4 = document.getElementById("brick-4");\n#   brick_4.addEventListener("click", (e) => {\n#     const provider = document.createElement("basic.show-dialog");\n#     provider.resolve({\n#       type: "warn",\n#       title: "Warn",\n#       content: "Something went wrong.",\n#     });\n#   });\n# <\/script>\n# \n'})}),"\n",(0,i.jsx)(n.h3,{id:"delete",children:"Delete"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'preview minHeight="400px"',children:'brick: eo-button\nproperties:\n  textContent: Delete\n  danger: true\n  type: primary\nevents:\n  click:\n    useProvider: basic.show-dialog\n    args:\n      - type: delete\n        title: Delete Confirm\n        content: Please enter {{ expect }} to delete the file.\n        expect: cat.png\n    callback:\n      success:\n        action: message.success\n        args:\n          - Deleted successfully!\n# -- YAML HEADING DELIMITER start (1nbbm8) --\nbasic/show-dialog/delete\n# -- YAML HEADING DELIMITER end (1nbbm8) --\n# -- YAML DELIMITER (1nbbm8) --\n# <eo-button danger type="primary" id="brick-1">Delete</eo-button>\n# \n# <script>\n#   const brick_1 = document.getElementById("brick-1");\n#   brick_1.addEventListener("click", (e) => {\n#     const provider = document.createElement("basic.show-dialog");\n#     const promise = Promise.resolve(\n#       provider.resolve({\n#         type: "delete",\n#         title: "Delete Confirm",\n#         content: "Please enter {{ expect }} to delete the file.",\n#         expect: "cat.png",\n#       })\n#     );\n#     promise.then((r) => {\n#       const message = document.createElement("basic.show-notification");\n#       message.resolve({ type: "success", message: "Deleted successfully!" });\n#     });\n#   });\n# <\/script>\n# \n'})}),"\n",(0,i.jsx)(n.h2,{id:"usage-in-pro-code",children:"Usage in pro-code"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:'import { unwrapProvider } from "@next-core/utils/general";\nimport type { showDialog as _showDialog } from "@next-bricks/basic/data-providers/show-dialog/show-dialog";\n\n// Use `unwrapProvider` to get the original function of a provider\nconst showDialog = unwrapProvider<typeof _showDialog>("basic.show-dialog");\n\nfunction MyComponent() {\n  const handleClick = useCallback(() => {\n    showDialog({\n      type: "confirm",\n      content: "Are you sure?",\n    });\n  }, []);\n  return <button onClick={handleClick} />;\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,i.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsx)(s.vy.Provider,{value:["DialogOptions"],children:(0,i.jsx)(a.Z,{params:[{name:"options",description:"\u9009\u9879",annotation:{type:"reference",typeName:{type:"identifier",name:"DialogOptions"}}}]})}),"\n",(0,i.jsx)(n.h3,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)("p",{children:(0,i.jsx)(c.Z,{children:(0,i.jsx)(s.vy.Provider,{value:["DialogOptions"],children:(0,i.jsx)(s.ZP,{annotation:{type:"reference",typeName:{type:"identifier",name:"Promise"},typeParameters:{type:"typeParameterInstantiation",params:[{type:"keyword",value:"void"}]}}})})})}),"\n",(0,i.jsx)(n.h2,{id:"type-references",children:"Type references"}),"\n",(0,i.jsx)(l.Z,{types:[{type:"interface",name:"DialogOptions",body:[{type:"propertySignature",key:{type:"identifier",name:"type"},annotation:{type:"union",types:[{type:"jsLiteral",value:"success"},{type:"jsLiteral",value:"error"},{type:"jsLiteral",value:"warn"},{type:"jsLiteral",value:"info"},{type:"jsLiteral",value:"confirm"},{type:"jsLiteral",value:"delete"}]},optional:!0,computed:!1,description:"\u5bf9\u8bdd\u6846\u7c7b\u578b"},{type:"propertySignature",key:{type:"identifier",name:"title"},annotation:{type:"keyword",value:"string"},optional:!0,computed:!1},{type:"propertySignature",key:{type:"identifier",name:"content"},annotation:{type:"keyword",value:"string"},computed:!1},{type:"propertySignature",key:{type:"identifier",name:"expect"},annotation:{type:"keyword",value:"string"},optional:!0,computed:!1},{type:"propertySignature",key:{type:"identifier",name:"contentStyle"},annotation:{type:"reference",typeName:{type:"qualifiedName",left:{type:"identifier",name:"React"},right:{type:"identifier",name:"CSSProperties"}}},optional:!0,computed:!1}]}]})]})}function g(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(b,{...e})}):b(e)}function y(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},7253:(e,n,t)=>{t.d(n,{Z:()=>c});t(7294);var i=t(2535),r=t(785),o=t(1550),s=t(5893);function c(e){let{params:n}=e;return 0===n.length?(0,s.jsx)("p",{children:"None"}):(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"#"}),(0,s.jsx)("th",{children:"Name"}),(0,s.jsx)("th",{children:"Description"}),(0,s.jsx)("th",{children:"Type"})]})}),(0,s.jsx)("tbody",{children:n.map(((e,n)=>(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:n+1}),(0,s.jsx)("td",{children:(0,s.jsxs)("code",{children:[e.isRestElement&&"...",e.name]})}),(0,s.jsx)("td",{children:(0,s.jsx)(o.Z,{content:e.description})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.Z,{children:(0,s.jsx)(i.ZP,{annotation:e.annotation})})})]},n)))})]})}}}]);
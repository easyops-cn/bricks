"use strict";(globalThis.webpackChunkbrick_docs=globalThis.webpackChunkbrick_docs||[]).push([[7720],{2825:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>p,default:()=>h,frontMatter:()=>m,metadata:()=>b,toc:()=>v});var o=t(5893),i=t(1151),l=t(4752),a=t(7886),r=t(7268),s=t(5673),d=t(1243),c=(t(9898),t(9265),t(2535));const m={description:"<eo-modal>"},p=void 0,b={id:"bricks/containers/eo-modal",title:"eo-modal",description:"<eo-modal>",source:"@site/docs/bricks/containers/eo-modal.mdx",sourceDirName:"bricks/containers",slug:"/bricks/containers/eo-modal",permalink:"/bricks/containers/eo-modal",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{description:"<eo-modal>"},sidebar:"docsSidebar",previous:{title:"eo-main-view",permalink:"/bricks/containers/eo-main-view"},next:{title:"eo-narrow-view",permalink:"/bricks/containers/eo-narrow-view"}},u={},v=[{value:"Examples",id:"examples",level:2},{value:"Width &amp; Height",id:"width--height",level:3},{value:"MaskClosable",id:"maskclosable",level:3},{value:"Fullscreen",id:"fullscreen",level:3},{value:"Confirm Text &amp; Cancel Text",id:"confirm-text--cancel-text",level:3},{value:"Hide Cancel Button",id:"hide-cancel-button",level:3},{value:"Open Event &amp; Close Event",id:"open-event--close-event",level:3},{value:"Properties",id:"properties",level:2},{value:"Slots",id:"slots",level:2},{value:"Events",id:"events",level:2},{value:"Methods",id:"methods",level:2}];function k(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...e.components};return c.vy||x("TypeReferencesContext",!1),c.vy.Provider||x("TypeReferencesContext.Provider",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l.Z,{name:"eo-modal",alias:["containers.general-modal"],insider:!1,deprecated:!1}),"\n",(0,o.jsx)(n.p,{children:"\u901a\u7528\u6a21\u6001\u6846\u5bb9\u5668\u6784\u4ef6\u3002"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",metastring:'preview minHeight="320px"',children:'<eo-modal modal-title="Modal Title" visible="true">Content</eo-card>\n\x3c!-- HTML HEADING DELIMITER start (1nbbm8) --\ncontainers/eo-modal\n-- HTML HEADING DELIMITER end (1nbbm8) --\x3e\n\x3c!-- HTML DELIMITER start (1nbbm8) --\nbrick: eo-modal\nproperties:\n  modalTitle: Modal Title\n  visible: true\n  textContent: Content\n-- HTML DELIMITER end (1nbbm8) --\x3e\n'})}),"\n",(0,o.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(n.h3,{id:"width--height",children:"Width & Height"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",metastring:'preview minHeight="320px"',children:'- brick: eo-button\n  properties:\n    textContent: Open Modal\n  events:\n    click:\n      - target: "#modal"\n        method: open\n- brick: eo-modal\n  portal: true\n  properties:\n    id: "modal"\n    modalTitle: \u6a21\u6001\u6846\u6807\u9898\n    width: 300px\n    height: 200px\n  children:\n    - brick: div\n      properties:\n        textContent: Content\n# -- YAML HEADING DELIMITER start (1nbbm8) --\ncontainers/eo-modal/width & height\n# -- YAML HEADING DELIMITER end (1nbbm8) --\n# -- YAML DELIMITER (1nbbm8) --\n# <eo-button id="brick-1">Open Modal</eo-button>\n# <eo-modal modal-title="\u6a21\u6001\u6846\u6807\u9898" width="300px" height="200px" id="modal">\n#   <div>Content</div>\n# </eo-modal>\n# \n# <script>\n#   const brick_1 = document.getElementById("brick-1");\n#   brick_1.addEventListener("click", (e) => {\n#     const brick = document.querySelector("#modal");\n#     brick.open();\n#   });\n# <\/script>\n# \n'})}),"\n",(0,o.jsx)(n.h3,{id:"maskclosable",children:"MaskClosable"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",metastring:'preview minHeight="320px"',children:'- brick: eo-button\n  properties:\n    textContent: Mask Allow Close\n  events:\n    click:\n      - target: "#modal-mask-allow-close"\n        method: open\n- brick: eo-modal\n  portal: true\n  properties:\n    modalTitle: \u6a21\u6001\u6846\u6807\u9898\n    id: "modal-mask-allow-close"\n    maskClosable: true\n  slots:\n    "":\n      bricks:\n        - brick: div\n          properties:\n            textContent: \u6a21\u6001\u6846\u5185\u5bb9\n- brick: eo-button\n  properties:\n    textContent: Mask Not Allow Close\n  events:\n    click:\n      - target: "#modal-mast-not-allow-close"\n        method: open\n- brick: eo-modal\n  properties:\n    modalTitle: \u6a21\u6001\u6846\u6807\u9898\n    id: "modal-mast-not-allow-close"\n    maskClosable: false\n  slots:\n    "":\n      bricks:\n        - brick: div\n          properties:\n            textContent: \u6a21\u6001\u6846\u5185\u5bb9\n# -- YAML HEADING DELIMITER start (1nbbm8) --\ncontainers/eo-modal/maskclosable\n# -- YAML HEADING DELIMITER end (1nbbm8) --\n# -- YAML DELIMITER (1nbbm8) --\n# <eo-button id="brick-1">Mask Allow Close</eo-button>\n# <eo-modal modal-title="\u6a21\u6001\u6846\u6807\u9898" mask-closable id="modal-mask-allow-close">\n#   <div>\u6a21\u6001\u6846\u5185\u5bb9</div>\n# </eo-modal>\n# <eo-button id="brick-2">Mask Not Allow Close</eo-button>\n# <eo-modal modal-title="\u6a21\u6001\u6846\u6807\u9898" id="modal-mast-not-allow-close">\n#   <div>\u6a21\u6001\u6846\u5185\u5bb9</div>\n# </eo-modal>\n# \n# <script>\n#   const brick_1 = document.getElementById("brick-1");\n#   brick_1.addEventListener("click", (e) => {\n#     const brick = document.querySelector("#modal-mask-allow-close");\n#     brick.open();\n#   });\n# \n#   const brick_2 = document.getElementById("brick-2");\n#   brick_2.addEventListener("click", (e) => {\n#     const brick = document.querySelector("#modal-mast-not-allow-close");\n#     brick.open();\n#   });\n# <\/script>\n# \n'})}),"\n",(0,o.jsx)(n.h3,{id:"fullscreen",children:"Fullscreen"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",metastring:'preview minHeight="320px"',children:'- brick: eo-button\n  properties:\n    textContent: open\n  events:\n    click:\n      - target: "#modal"\n        method: open\n- brick: eo-modal\n  portal: true\n  properties:\n    modalTitle: \u6a21\u6001\u6846\u6807\u9898\n    id: "modal"\n    fullscreen: true\n  slots:\n    "":\n      bricks:\n        - brick: div\n          properties:\n            textContent: \u6a21\u6001\u6846\u5185\u5bb9\n# -- YAML HEADING DELIMITER start (1nbbm8) --\ncontainers/eo-modal/fullscreen\n# -- YAML HEADING DELIMITER end (1nbbm8) --\n# -- YAML DELIMITER (1nbbm8) --\n# <eo-button id="brick-1">open</eo-button>\n# <eo-modal modal-title="\u6a21\u6001\u6846\u6807\u9898" fullscreen id="modal">\n#   <div>\u6a21\u6001\u6846\u5185\u5bb9</div>\n# </eo-modal>\n# \n# <script>\n#   const brick_1 = document.getElementById("brick-1");\n#   brick_1.addEventListener("click", (e) => {\n#     const brick = document.querySelector("#modal");\n#     brick.open();\n#   });\n# <\/script>\n# \n'})}),"\n",(0,o.jsx)(n.h3,{id:"confirm-text--cancel-text",children:"Confirm Text & Cancel Text"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",metastring:'preview minHeight="320px"',children:'<eo-modal\n  modal-title="Modal Title"\n  visible="true"\n  confirm-text="\u63d0\u4ea4"\n  cancel-text="\u653e\u5f03"\n>\n  Content\n</eo-card>\n\x3c!-- HTML HEADING DELIMITER start (1nbbm8) --\ncontainers/eo-modal/confirm text &amp; cancel text\n-- HTML HEADING DELIMITER end (1nbbm8) --\x3e\n\x3c!-- HTML DELIMITER start (1nbbm8) --\nbrick: eo-modal\nproperties:\n  modalTitle: Modal Title\n  visible: true\n  confirmText: \u63d0\u4ea4\n  cancelText: \u653e\u5f03\n  textContent: \' Content \'\n-- HTML DELIMITER end (1nbbm8) --\x3e\n'})}),"\n",(0,o.jsx)(n.h3,{id:"hide-cancel-button",children:"Hide Cancel Button"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",metastring:'preview minHeight="320px"',children:'<eo-modal\n  modal-title="Modal Title"\n  visible="true"\n  hide-cancel-button="true"\n>\n  Content\n</eo-card>\n\x3c!-- HTML HEADING DELIMITER start (1nbbm8) --\ncontainers/eo-modal/hide cancel button\n-- HTML HEADING DELIMITER end (1nbbm8) --\x3e\n\x3c!-- HTML DELIMITER start (1nbbm8) --\nbrick: eo-modal\nproperties:\n  modalTitle: Modal Title\n  visible: true\n  hideCancelButton: true\n  textContent: \' Content \'\n-- HTML DELIMITER end (1nbbm8) --\x3e\n'})}),"\n",(0,o.jsx)(n.h3,{id:"open-event--close-event",children:"Open Event & Close Event"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",metastring:'preview minHeight="320px"',children:'- brick: eo-button\n  properties:\n    textContent: open\n  events:\n    click:\n      - target: "#modal"\n        method: open\n- brick: eo-modal\n  portal: true\n  properties:\n    modalTitle: \u6a21\u6001\u6846\u6807\u9898\n    id: "modal"\n    placement: left\n  events:\n    open:\n      - action: message.success\n        args:\n          - modal Open\n    close:\n      - action: message.success\n        args:\n          - modal Close\n  children:\n    - brick: div\n      properties:\n        textContent: Content\n# -- YAML HEADING DELIMITER start (1nbbm8) --\ncontainers/eo-modal/open event & close event\n# -- YAML HEADING DELIMITER end (1nbbm8) --\n# -- YAML DELIMITER (1nbbm8) --\n# <eo-button id="brick-1">open</eo-button>\n# <eo-modal modal-title="\u6a21\u6001\u6846\u6807\u9898" placement="left" id="modal">\n#   <div>Content</div>\n# </eo-modal>\n# \n# <script>\n#   const brick_1 = document.getElementById("brick-1");\n#   brick_1.addEventListener("click", (e) => {\n#     const brick = document.querySelector("#modal");\n#     brick.open();\n#   });\n# \n#   const modal = document.getElementById("modal");\n#   modal.addEventListener("open", (e) => {\n#     const message = document.createElement("basic.show-notification");\n#     message.resolve({ type: "success", message: "modal Open" });\n#   });\n#   modal.addEventListener("close", (e) => {\n#     const message = document.createElement("basic.show-notification");\n#     message.resolve({ type: "success", message: "modal Close" });\n#   });\n# <\/script>\n# \n'})}),"\n",(0,o.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,o.jsx)(c.vy.Provider,{value:[],children:(0,o.jsx)(a.Z,{properties:[{name:"modalTitle",description:"\u6807\u9898",type:"string",annotation:{type:"keyword",value:"string"}},{name:"width",description:"\u5bbd\u5ea6",type:"string | number",annotation:{type:"union",types:[{type:"keyword",value:"string"},{type:"keyword",value:"number"}]}},{name:"maskClosable",description:"\u70b9\u51fb\u906e\u7f69\u5c42\u662f\u5426\u5173\u95ed\u6a21\u6001\u6846",type:"boolean",annotation:{type:"keyword",value:"boolean"}},{name:"fullscreen",description:"\u5168\u5c4f\u6a21\u5f0f",type:"boolean",annotation:{type:"keyword",value:"boolean"}},{name:"closeWhenConfirm",description:"\u70b9\u51fb\u786e\u5b9a\u6309\u94ae\u65f6\u81ea\u52a8\u5173\u95ed\u5f39\u7a97",default:"true",type:"boolean",annotation:{type:"keyword",value:"boolean"}},{name:"confirmDisabled",description:"\u786e\u8ba4\u6309\u94ae\u662f\u5426\u7981\u7528",type:"boolean",annotation:{type:"keyword",value:"boolean"}},{name:"visible",description:"\u70b9\u51fb\u906e\u7f69\u5c42\u662f\u5426\u5173\u95ed\u6a21\u6001\u6846",type:"boolean",annotation:{type:"keyword",value:"boolean"}},{name:"confirmText",description:"\u786e\u8ba4\u6309\u94ae\u6587\u672c",type:"string",annotation:{type:"keyword",value:"string"}},{name:"cancelText",description:"\u53d6\u6d88\u6309\u94ae\u6587\u672c",type:"string",annotation:{type:"keyword",value:"string"}},{name:"hideCancelButton",description:"\u662f\u5426\u9690\u85cf\u53d6\u6d88\u6309\u94ae",type:"boolean",annotation:{type:"keyword",value:"boolean"}},{name:"stackable",description:"\u662f\u5426\u53ef\u5806\u53e0\uff0c\u5f00\u542f\u540e\u6bcf\u6b21\u6253\u5f00\u62bd\u5c49\u4f1a\u5c06\u65b0\u7684\u62bd\u5c49\u7f6e\u4e8e\u4e0a\u5c42\uff08zIndex ++\uff09\n\n\u6ce8\u610f\uff1a\u4ec5\u521d\u59cb\u8bbe\u7f6e\u6709\u6548\u3002",type:"boolean",annotation:{type:"keyword",value:"boolean"}}]})}),"\n",(0,o.jsx)(n.h2,{id:"slots",children:"Slots"}),"\n",(0,o.jsx)(r.Z,{slots:[{name:null,description:"\u5185\u5bb9\u63d2\u69fd"}]}),"\n",(0,o.jsx)(n.h2,{id:"events",children:"Events"}),"\n",(0,o.jsx)(c.vy.Provider,{value:[],children:(0,o.jsx)(s.Z,{events:[{name:"open",description:"\u6253\u5f00\u5f39\u7a97\u4e8b\u4ef6",detail:{type:"void",annotation:{type:"keyword",value:"void"}}},{name:"close",description:"\u5173\u95ed\u5f39\u7a97\u4e8b\u4ef6",detail:{type:"void",annotation:{type:"keyword",value:"void"}}},{name:"confirm",description:"\u786e\u8ba4\u6309\u94ae\u4e8b\u4ef6",detail:{type:"void",annotation:{type:"keyword",value:"void"}}},{name:"cancel",description:"\u53d6\u6d88\u6309\u94ae\u4e8b\u4ef6",detail:{type:"void",annotation:{type:"keyword",value:"void"}}}]})}),"\n",(0,o.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,o.jsx)(c.vy.Provider,{value:[],children:(0,o.jsx)(d.Z,{methods:[{name:"open",params:[],description:"\u6253\u5f00\u6a21\u6001\u6846\u65b9\u6cd5",returns:{}},{name:"close",params:[],description:"\u5173\u95ed\u6a21\u6001\u6846\u65b9\u6cd5",returns:{}}]})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(k,{...e})}):k(e)}function x(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);
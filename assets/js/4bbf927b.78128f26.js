"use strict";(self.webpackChunkbrick_docs=self.webpackChunkbrick_docs||[]).push([[6121],{7903:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>y,contentTitle:()=>l,default:()=>v,frontMatter:()=>d,metadata:()=>c,toc:()=>u});var i=t(87462),a=(t(67294),t(3905)),r=t(59263),o=t(20456),p=(t(98277),t(46470)),m=(t(10080),t(70516),t(75944)),s=t(4871);const d={description:"<eo-dynamic-form-item>"},l=void 0,c={unversionedId:"bricks/form/eo-dynamic-form-item",id:"bricks/form/eo-dynamic-form-item",title:"eo-dynamic-form-item",description:"<eo-dynamic-form-item>",source:"@site/docs/bricks/form/eo-dynamic-form-item.mdx",sourceDirName:"bricks/form",slug:"/bricks/form/eo-dynamic-form-item",permalink:"/bricks/form/eo-dynamic-form-item",draft:!1,tags:[],version:"current",frontMatter:{description:"<eo-dynamic-form-item>"},sidebar:"docsSidebar",previous:{title:"eo-date-picker",permalink:"/bricks/form/eo-date-picker"},next:{title:"eo-form-item",permalink:"/bricks/form/eo-form-item"}},y={},u=[{value:"Examples",id:"examples",level:2},{value:"Label",id:"label",level:3},{value:"Value",id:"value",level:3},{value:"hideRemoveButton\u3001disabledRemoveButton;hideAddButton\u3001disabledAddButton",id:"hideremovebuttondisabledremovebuttonhideaddbuttondisabledaddbutton",level:3},{value:"Event",id:"event",level:3},{value:"Properties",id:"properties",level:2},{value:"Events",id:"events",level:2},{value:"Type references",id:"type-references",level:2}],b={toc:u},k="wrapper";function v(e){let{components:n,...t}=e;return(0,a.kt)(k,(0,i.Z)({},b,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)(r.Z,{name:"eo-dynamic-form-item",alias:["form.dynamic-form-item"],mdxType:"BrickTagName"}),(0,a.kt)("p",null,"\u52a8\u6001\u8868\u5355\u6784\u4ef6\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"preview",preview:!0},'- brick: eo-form\n  properties:\n    layout: vertical\n    values:\n      id: request_5XXX\n      dimension:\n        - dimensionName: one\n          dimensionId: one\n          dimensionValue: 1\n  children:\n    - brick: eo-input\n      properties:\n        name: id\n        label: \u6307\u6807ID\n        required: true\n    - brick: eo-dynamic-form-item\n      properties:\n        name: dimension\n        label: \u7ef4\u5ea6\n        useBrick:\n          - brick: eo-input\n            properties:\n              name: dimensionName\n              required: true\n              message:\n                required: \u7ef4\u5ea6\u540d\u79f0\u4e3a\u5fc5\u586b\u9879\n              label: \u7ef4\u5ea6\u540d\u79f0\n          - brick: eo-input\n            properties:\n              name: dimensionId\n              required: true\n              message:\n                required: \u7ef4\u5ea6id\u4e3a\u5fc5\u586b\u9879\n              label: \u7ef4\u5ea6id\n              unique: true\n              validator: \'<% (value) => (value.length > 5 ? "\u7ef4\u5ea6id\u4e0d\u80fd\u8d85\u8fc75" : "") %>\'\n          - brick: eo-input\n            properties:\n              name: dimensionValue\n              label: \u7ef4\u5ea6\u503c\n    - brick: eo-submit-buttons\n      properties:\n        cancelText: \u53d6\u6d88\n        submitText: \u63d0\u4ea4\n# -- YAML DELIMITER (1nbbm8) --\n# <eo-form layout="vertical" values="[object Object]">\n#   <eo-input name="id" label="\u6307\u6807ID" required></eo-input>\n#   <eo-dynamic-form-item\n#     name="dimension"\n#     label="\u7ef4\u5ea6"\n#     id="brick-1"\n#   ></eo-dynamic-form-item>\n#   <eo-submit-buttons cancel-text="\u53d6\u6d88" submit-text="\u63d0\u4ea4"></eo-submit-buttons>\n# </eo-form>\n# \n# <script>\n#   const brick_1 = document.getElementById("brick-1");\n#   brick_1.useBrick = [\n#     {\n#       brick: "eo-input",\n#       properties: {\n#         name: "dimensionName",\n#         required: true,\n#         message: {\n#           required: "\u7ef4\u5ea6\u540d\u79f0\u4e3a\u5fc5\u586b\u9879",\n#         },\n#         label: "\u7ef4\u5ea6\u540d\u79f0",\n#       },\n#     },\n#     {\n#       brick: "eo-input",\n#       properties: {\n#         name: "dimensionId",\n#         required: true,\n#         message: {\n#           required: "\u7ef4\u5ea6id\u4e3a\u5fc5\u586b\u9879",\n#         },\n#         label: "\u7ef4\u5ea6id",\n#         unique: true,\n#         validator:\n#           \'<% (value) => (value.length > 5 ? "\u7ef4\u5ea6id\u4e0d\u80fd\u8d85\u8fc75" : "") %>\',\n#       },\n#     },\n#     {\n#       brick: "eo-input",\n#       properties: {\n#         name: "dimensionValue",\n#         label: "\u7ef4\u5ea6\u503c",\n#       },\n#     },\n#   ];\n# <\/script>\n# \n')),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("h3",{id:"label"},"Label"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"preview",preview:!0},'- brick: eo-dynamic-form-item\n  properties:\n    label: Label\n    useBrick:\n      - brick: eo-input\n        properties:\n          name: input\n      - brick: eo-select\n        properties:\n          name: select\n          options:\n            - Beijing\n            - Shanghai\n            - Guangzhou\n            - Shenzhen\n# -- YAML DELIMITER (1nbbm8) --\n# <eo-dynamic-form-item label="Label" id="brick-1"></eo-dynamic-form-item>\n# \n# <script>\n#   const brick_1 = document.getElementById("brick-1");\n#   brick_1.useBrick = [\n#     {\n#       brick: "eo-input",\n#       properties: {\n#         name: "input",\n#       },\n#     },\n#     {\n#       brick: "eo-select",\n#       properties: {\n#         name: "select",\n#         options: ["Beijing", "Shanghai", "Guangzhou", "Shenzhen"],\n#       },\n#     },\n#   ];\n# <\/script>\n# \n')),(0,a.kt)("h3",{id:"value"},"Value"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"preview",preview:!0},'- brick: eo-dynamic-form-item\n  properties:\n    value:\n      - input: \u5317\u4eac\n        select: Beijing\n      - input: \u4e0a\u6d77\n        select: Shanghai\n    useBrick:\n      - brick: eo-input\n        properties:\n          name: input\n      - brick: eo-select\n        properties:\n          name: select\n          options:\n            - Beijing\n            - Shanghai\n            - Guangzhou\n            - Shenzhen\n# -- YAML DELIMITER (1nbbm8) --\n# <eo-dynamic-form-item id="brick-1"></eo-dynamic-form-item>\n# \n# <script>\n#   const brick_1 = document.getElementById("brick-1");\n#   brick_1.value = [\n#     {\n#       input: "\u5317\u4eac",\n#       select: "Beijing",\n#     },\n#     {\n#       input: "\u4e0a\u6d77",\n#       select: "Shanghai",\n#     },\n#   ];\n#   brick_1.useBrick = [\n#     {\n#       brick: "eo-input",\n#       properties: {\n#         name: "input",\n#       },\n#     },\n#     {\n#       brick: "eo-select",\n#       properties: {\n#         name: "select",\n#         options: ["Beijing", "Shanghai", "Guangzhou", "Shenzhen"],\n#       },\n#     },\n#   ];\n# <\/script>\n# \n')),(0,a.kt)("h3",{id:"hideremovebuttondisabledremovebuttonhideaddbuttondisabledaddbutton"},"hideRemoveButton\u3001disabledRemoveButton;hideAddButton\u3001disabledAddButton"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"preview",preview:!0},'- brick: eo-dynamic-form-item\n  properties:\n    hideAddButton: <% (value)=>value.length===5 %>\n    disabledAddButton: <% (value)=>value.length===4 %>\n    hideRemoveButton: <% (value,row)=>row===1 %>\n    disabledRemoveButton: <% (value,row)=>row===0 %>\n    value:\n      - input: hello1\n        select: abc1\n      - input: hello2\n        select: abc2\n      - input: hello3\n        select: abc3\n    useBrick:\n      - brick: eo-input\n        properties:\n          name: input\n      - brick: eo-select\n        properties:\n          name: select\n          options:\n            - abc1\n            - abc2\n            - abc2\n            - abc4\n# -- YAML DELIMITER (1nbbm8) --\n# <eo-dynamic-form-item id="brick-1"></eo-dynamic-form-item>\n# \n# <script>\n#   const brick_1 = document.getElementById("brick-1");\n#   brick_1.hideAddButton = "<% (value)=>value.length===5 %>";\n#   brick_1.disabledAddButton = "<% (value)=>value.length===4 %>";\n#   brick_1.hideRemoveButton = "<% (value,row)=>row===1 %>";\n#   brick_1.disabledRemoveButton = "<% (value,row)=>row===0 %>";\n#   brick_1.value = [\n#     {\n#       input: "hello1",\n#       select: "abc1",\n#     },\n#     {\n#       input: "hello2",\n#       select: "abc2",\n#     },\n#     {\n#       input: "hello3",\n#       select: "abc3",\n#     },\n#   ];\n#   brick_1.useBrick = [\n#     {\n#       brick: "eo-input",\n#       properties: {\n#         name: "input",\n#       },\n#     },\n#     {\n#       brick: "eo-select",\n#       properties: {\n#         name: "select",\n#         options: ["abc1", "abc2", "abc2", "abc4"],\n#       },\n#     },\n#   ];\n# <\/script>\n# \n')),(0,a.kt)("h3",{id:"event"},"Event"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"preview",preview:!0},'- brick: eo-dynamic-form-item\n  properties:\n    name: dynamicForm\n    useBrick:\n      - brick: eo-input\n        properties:\n          name: input\n      - brick: eo-select\n        properties:\n          name: select\n          options:\n            - Beijing\n            - Shanghai\n            - Guangzhou\n            - Shenzhen\n  events:\n    row.remove:\n      action: console.log\n    row.add:\n      action: console.log\n    change:\n      - action: message.success\n        args:\n          - <% JSON.stringify(EVENT.detail) %>\n# -- YAML DELIMITER (1nbbm8) --\n# <eo-dynamic-form-item name="dynamicForm" id="brick-1"></eo-dynamic-form-item>\n# \n# <script>\n#   const brick_1 = document.getElementById("brick-1");\n#   brick_1.useBrick = [\n#     {\n#       brick: "eo-input",\n#       properties: {\n#         name: "input",\n#       },\n#     },\n#     {\n#       brick: "eo-select",\n#       properties: {\n#         name: "select",\n#         options: ["Beijing", "Shanghai", "Guangzhou", "Shenzhen"],\n#       },\n#     },\n#   ];\n#   brick_1.addEventListener("row.remove", (e) => {\n#     console.log(e.detail);\n#   });\n#   brick_1.addEventListener("row.add", (e) => {\n#     console.log(e.detail);\n#   });\n#   brick_1.addEventListener("change", (e) => {\n#     const message = document.createElement("basic.show-notification");\n#     message.resolve({\n#       type: "success",\n#       /* WARN: incompatible expressions in HTML, please try YAML: */\n#       message: "<% JSON.stringify(EVENT.detail) %>",\n#     });\n#   });\n# <\/script>\n# \n')),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)(s.vy.Provider,{value:["DynamicFormValuesItem","rowDataType"]},(0,a.kt)(o.Z,{properties:[{name:"name",description:"\u5b57\u6bb5\u540d\u79f0",type:"string",annotation:{type:"keyword",value:"string"}},{name:"label",description:"\u5b57\u6bb5\u8bf4\u660e",type:"string",annotation:{type:"keyword",value:"string"}},{name:"required",description:"\u662f\u5426\u5fc5\u586b",type:"boolean",annotation:{type:"keyword",value:"boolean"}},{name:"value",description:"\u503c",attribute:!1,type:"DynamicFormValuesItem[]",annotation:{type:"array",elementType:{type:"reference",typeName:{type:"identifier",name:"DynamicFormValuesItem"}}}},{name:"message",description:"\u6821\u9a8c\u6587\u672c",attribute:!1,type:"Record<string, string>",annotation:{type:"reference",typeName:{type:"identifier",name:"Record"},typeParameters:{type:"typeParameterInstantiation",params:[{type:"keyword",value:"string"},{type:"keyword",value:"string"}]}}},{name:"hideRemoveButton",description:"\u662f\u5426\u9690\u85cf\u6bcf\u4e00\u884c\u5220\u9664\u7684\u6309\u94ae",attribute:!1,type:"boolean | ((row: Record<string, any>, index: number) => boolean)",annotation:{type:"union",types:[{type:"keyword",value:"boolean"},{type:"parenthesizedType",annotation:{type:"function",parameters:[{type:"identifier",name:"row",annotation:{type:"reference",typeName:{type:"identifier",name:"Record"},typeParameters:{type:"typeParameterInstantiation",params:[{type:"keyword",value:"string"},{type:"keyword",value:"any"}]}}},{type:"identifier",name:"index",annotation:{type:"keyword",value:"number"}}],annotation:{type:"keyword",value:"boolean"}}}]}},{name:"disabledRemoveButton",description:"\u662f\u5426\u7981\u6b62\u6bcf\u4e00\u884c\u5220\u9664\u7684\u6309\u94ae",attribute:!1,type:"boolean | ((row: Record<string, any>, index: number) => boolean)",annotation:{type:"union",types:[{type:"keyword",value:"boolean"},{type:"parenthesizedType",annotation:{type:"function",parameters:[{type:"identifier",name:"row",annotation:{type:"reference",typeName:{type:"identifier",name:"Record"},typeParameters:{type:"typeParameterInstantiation",params:[{type:"keyword",value:"string"},{type:"keyword",value:"any"}]}}},{type:"identifier",name:"index",annotation:{type:"keyword",value:"number"}}],annotation:{type:"keyword",value:"boolean"}}}]}},{name:"hideAddButton",description:"\u662f\u5426\u9690\u85cf\u6dfb\u52a0\u7684\u6309\u94ae",attribute:!1,type:"boolean | ((value: Record<string, any>[]) => boolean)",annotation:{type:"union",types:[{type:"keyword",value:"boolean"},{type:"parenthesizedType",annotation:{type:"function",parameters:[{type:"identifier",name:"value",annotation:{type:"array",elementType:{type:"reference",typeName:{type:"identifier",name:"Record"},typeParameters:{type:"typeParameterInstantiation",params:[{type:"keyword",value:"string"},{type:"keyword",value:"any"}]}}}}],annotation:{type:"keyword",value:"boolean"}}}]}},{name:"disabledAddButton",description:"\u662f\u5426\u7981\u6b62\u6dfb\u52a0\u7684\u6309\u94ae",attribute:!1,type:"boolean | ((value: Record<string, any>[]) => boolean)",annotation:{type:"union",types:[{type:"keyword",value:"boolean"},{type:"parenthesizedType",annotation:{type:"function",parameters:[{type:"identifier",name:"value",annotation:{type:"array",elementType:{type:"reference",typeName:{type:"identifier",name:"Record"},typeParameters:{type:"typeParameterInstantiation",params:[{type:"keyword",value:"string"},{type:"keyword",value:"any"}]}}}}],annotation:{type:"keyword",value:"boolean"}}}]}},{name:"useBrick",description:"\u52a8\u6001\u8868\u5355\u5b50\u9879\u6784\u4ef6\u5217\u8868",attribute:!1,type:"UseBrickConf",annotation:{type:"reference",typeName:{type:"identifier",name:"UseBrickConf"}}}],mdxType:"BrickDocProperties"})),(0,a.kt)("h2",{id:"events"},"Events"),(0,a.kt)(s.vy.Provider,{value:["DynamicFormValuesItem","rowDataType"]},(0,a.kt)(p.Z,{events:[{name:"change",detail:{type:"DynamicFormValuesItem[]",annotation:{type:"array",elementType:{type:"reference",typeName:{type:"identifier",name:"DynamicFormValuesItem"}}}}},{name:"row.add",description:"\u589e\u52a0\u4e00\u884c\u65f6\u89e6\u53d1\uff0cdetail\u4e3a\u8be5\u884c\u7684\u9ed8\u8ba4\u503c\uff0cindex\u4e3a\u8be5\u884c\u7684\u4f4d\u7f6e",detail:{type:"rowDataType",annotation:{type:"reference",typeName:{type:"identifier",name:"rowDataType"}}}},{name:"row.remove",description:"\u79fb\u9664\u4e00\u884c\u65f6\u89e6\u53d1\uff0cdetail\u4e3a\u8be5\u884c\u7684\u503c\uff0cindex\u4e3a\u8be5\u884c\u7684\u4f4d\u7f6e",detail:{type:"rowDataType",annotation:{type:"reference",typeName:{type:"identifier",name:"rowDataType"}}}}],mdxType:"BrickDocEvents"})),(0,a.kt)("h2",{id:"type-references"},"Type references"),(0,a.kt)(m.Z,{types:[{type:"typeAlias",name:"DynamicFormValuesItem",annotation:{type:"reference",typeName:{type:"identifier",name:"Record"},typeParameters:{type:"typeParameterInstantiation",params:[{type:"keyword",value:"string"},{type:"keyword",value:"any"}]}}},{type:"typeAlias",name:"rowDataType",annotation:{type:"typeLiteral",members:[{type:"propertySignature",key:{type:"identifier",name:"detail"},annotation:{type:"reference",typeName:{type:"identifier",name:"Record"},typeParameters:{type:"typeParameterInstantiation",params:[{type:"keyword",value:"string"},{type:"keyword",value:"any"}]}},computed:!1},{type:"propertySignature",key:{type:"identifier",name:"index"},annotation:{type:"keyword",value:"number"},computed:!1}]}}],mdxType:"BrickDocTypes"}))}v.isMDXComponent=!0}}]);
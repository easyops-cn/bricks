"use strict";(self.webpackChunkbrick_docs=self.webpackChunkbrick_docs||[]).push([[4870],{38647:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>k,contentTitle:()=>u,default:()=>m,frontMatter:()=>b,metadata:()=>s,toc:()=>h});var a=t(87462),i=(t(67294),t(3905)),o=t(59263),l=t(20456),r=(t(98277),t(46470)),c=(t(10080),t(70516),t(75944)),p=t(4871);const b={description:"<eo-checkbox>"},u=void 0,s={unversionedId:"bricks/form/eo-checkbox",id:"bricks/form/eo-checkbox",title:"eo-checkbox",description:"<eo-checkbox>",source:"@site/docs/bricks/form/eo-checkbox.mdx",sourceDirName:"bricks/form",slug:"/bricks/form/eo-checkbox",permalink:"/bricks/form/eo-checkbox",draft:!1,tags:[],version:"current",frontMatter:{description:"<eo-checkbox>"},sidebar:"docsSidebar",previous:{title:"eo-auto-complete",permalink:"/bricks/form/eo-auto-complete"},next:{title:"eo-date-picker",permalink:"/bricks/form/eo-date-picker"}},k={},h=[{value:"Examples",id:"examples",level:2},{value:"Label",id:"label",level:3},{value:"Value",id:"value",level:3},{value:"Options",id:"options",level:3},{value:"Disabled",id:"disabled",level:3},{value:"Type",id:"type",level:3},{value:"checkboxColor",id:"checkboxcolor",level:3},{value:"optionGroups",id:"optiongroups",level:3},{value:"Event",id:"event",level:3},{value:"Properties",id:"properties",level:2},{value:"Events",id:"events",level:2},{value:"Type references",id:"type-references",level:2}],d={toc:h},y="wrapper";function m(e){let{components:n,...t}=e;return(0,i.kt)(y,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)(o.Z,{name:"eo-checkbox",alias:["form.general-checkbox"],mdxType:"BrickTagName"}),(0,i.kt)("p",null,"\u8868\u5355\u590d\u9009\u6846\u6784\u4ef6\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"preview",preview:!0},'- brick: eo-checkbox\n  properties:\n    options:\n      - Beijing\n      - Shanghai\n      - Guangzhou\n      - Shenzhen\n# -- YAML DELIMITER (1nbbm8) --\n# <eo-checkbox id="brick-1"></eo-checkbox>\n# \n# <script>\n#   const brick_1 = document.getElementById("brick-1");\n#   brick_1.options = ["Beijing", "Shanghai", "Guangzhou", "Shenzhen"];\n# <\/script>\n# \n')),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("h3",{id:"label"},"Label"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"preview",preview:!0},'- brick: eo-checkbox\n  properties:\n    label: city\n    options:\n      - Beijing\n      - Shanghai\n      - Guangzhou\n      - Shenzhen\n# -- YAML DELIMITER (1nbbm8) --\n# <eo-checkbox label="city" id="brick-1"></eo-checkbox>\n# \n# <script>\n#   const brick_1 = document.getElementById("brick-1");\n#   brick_1.options = ["Beijing", "Shanghai", "Guangzhou", "Shenzhen"];\n# <\/script>\n# \n')),(0,i.kt)("h3",{id:"value"},"Value"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"preview",preview:!0},'- brick: eo-checkbox\n  properties:\n    value:\n      - Beijing\n      - Guangzhou\n    options:\n      - Beijing\n      - Shanghai\n      - Guangzhou\n      - Shenzhen\n# -- YAML DELIMITER (1nbbm8) --\n# <eo-checkbox id="brick-1"></eo-checkbox>\n# \n# <script>\n#   const brick_1 = document.getElementById("brick-1");\n#   brick_1.value = ["Beijing", "Guangzhou"];\n#   brick_1.options = ["Beijing", "Shanghai", "Guangzhou", "Shenzhen"];\n# <\/script>\n# \n')),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"preview",preview:!0},'- brick: eo-checkbox\n  properties:\n    options:\n      - Beijing\n      - Shanghai\n      - Guangzhou\n      - Shenzhen\n    value:\n      - Guangzhou\n- brick: eo-checkbox\n  properties:\n    options:\n      - label: Beijing\n        value: 0\n      - label: Shanghai\n        value: 1\n        icon:\n          icon: "bar-chart"\n          lib: "antd"\n      - label: Guangzhou\n        value: 2\n      - label: Shenzhen\n        value: 3\n    value:\n      - 2\n      - 3\n- brick: eo-checkbox\n  properties:\n    options:\n      - true\n      - false\n    value:\n      - true\n# -- YAML DELIMITER (1nbbm8) --\n# <eo-checkbox id="brick-1"></eo-checkbox>\n# <eo-checkbox id="brick-2"></eo-checkbox>\n# <eo-checkbox id="brick-3"></eo-checkbox>\n# \n# <script>\n#   const brick_1 = document.getElementById("brick-1");\n#   brick_1.options = ["Beijing", "Shanghai", "Guangzhou", "Shenzhen"];\n#   brick_1.value = ["Guangzhou"];\n# \n#   const brick_2 = document.getElementById("brick-2");\n#   brick_2.options = [\n#     {\n#       label: "Beijing",\n#       value: 0,\n#     },\n#     {\n#       label: "Shanghai",\n#       value: 1,\n#       icon: {\n#         icon: "bar-chart",\n#         lib: "antd",\n#       },\n#     },\n#     {\n#       label: "Guangzhou",\n#       value: 2,\n#     },\n#     {\n#       label: "Shenzhen",\n#       value: 3,\n#     },\n#   ];\n#   brick_2.value = [2, 3];\n# \n#   const brick_3 = document.getElementById("brick-3");\n#   brick_3.options = [true, false];\n#   brick_3.value = [true];\n# <\/script>\n# \n')),(0,i.kt)("h3",{id:"disabled"},"Disabled"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"preview",preview:!0},'- brick: eo-checkbox\n  properties:\n    options:\n      - label: Beijing\n        value: 0\n        disabled: true\n      - label: Shanghai\n        value: 1\n      - label: Guangzhou\n        value: 2\n      - label: Shenzhen\n        value: 3\n- brick: div\n  properties:\n    style:\n      height: 20px\n- brick: eo-checkbox\n  properties:\n    disabled: true\n    options:\n      - label: Beijing\n        value: 0\n      - label: Shanghai\n        value: 1\n      - label: Guangzhou\n        value: 2\n      - label: Shenzhen\n        value: 3\n# -- YAML DELIMITER (1nbbm8) --\n# <eo-checkbox id="brick-1"></eo-checkbox>\n# <div style="height: 20px"></div>\n# <eo-checkbox disabled id="brick-2"></eo-checkbox>\n# \n# <script>\n#   const brick_1 = document.getElementById("brick-1");\n#   brick_1.options = [\n#     {\n#       label: "Beijing",\n#       value: 0,\n#       disabled: true,\n#     },\n#     {\n#       label: "Shanghai",\n#       value: 1,\n#     },\n#     {\n#       label: "Guangzhou",\n#       value: 2,\n#     },\n#     {\n#       label: "Shenzhen",\n#       value: 3,\n#     },\n#   ];\n# \n#   const brick_2 = document.getElementById("brick-2");\n#   brick_2.options = [\n#     {\n#       label: "Beijing",\n#       value: 0,\n#     },\n#     {\n#       label: "Shanghai",\n#       value: 1,\n#     },\n#     {\n#       label: "Guangzhou",\n#       value: 2,\n#     },\n#     {\n#       label: "Shenzhen",\n#       value: 3,\n#     },\n#   ];\n# <\/script>\n# \n')),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"preview",preview:!0},'- brick: eo-checkbox\n  properties:\n    label: Default\n    type: default\n    options:\n      - label: Beijing\n        value: 0\n        icon:\n          icon: "search"\n          lib: "antd"\n      - label: Shanghai\n        value: 1\n        icon:\n          icon: "plus"\n          lib: "antd"\n      - label: Guangzhou\n        value: 2\n        icon:\n          icon: "edit"\n          lib: "antd"\n      - label: Shenzhen\n        value: 3\n        icon:\n          icon: "delete"\n          lib: "antd"\n- brick: div\n  properties:\n    style:\n      height: 20px\n- brick: eo-checkbox\n  properties:\n    label: Icon\n    type: icon\n    options:\n      - label: Beijing\n        value: 0\n        icon:\n          icon: "search"\n          lib: "antd"\n      - label: Shanghai\n        value: 1\n        icon:\n          icon: "plus"\n          lib: "antd"\n      - label: Guangzhou\n        value: 2\n        icon:\n          icon: "edit"\n          lib: "antd"\n      - label: Shenzhen\n        value: 3\n        icon:\n          icon: "delete"\n          lib: "antd"\n# -- YAML DELIMITER (1nbbm8) --\n# <eo-checkbox label="Default" type="default" id="brick-1"></eo-checkbox>\n# <div style="height: 20px"></div>\n# <eo-checkbox label="Icon" type="icon" id="brick-2"></eo-checkbox>\n# \n# <script>\n#   const brick_1 = document.getElementById("brick-1");\n#   brick_1.options = [\n#     {\n#       label: "Beijing",\n#       value: 0,\n#       icon: {\n#         icon: "search",\n#         lib: "antd",\n#       },\n#     },\n#     {\n#       label: "Shanghai",\n#       value: 1,\n#       icon: {\n#         icon: "plus",\n#         lib: "antd",\n#       },\n#     },\n#     {\n#       label: "Guangzhou",\n#       value: 2,\n#       icon: {\n#         icon: "edit",\n#         lib: "antd",\n#       },\n#     },\n#     {\n#       label: "Shenzhen",\n#       value: 3,\n#       icon: {\n#         icon: "delete",\n#         lib: "antd",\n#       },\n#     },\n#   ];\n# \n#   const brick_2 = document.getElementById("brick-2");\n#   brick_2.options = [\n#     {\n#       label: "Beijing",\n#       value: 0,\n#       icon: {\n#         icon: "search",\n#         lib: "antd",\n#       },\n#     },\n#     {\n#       label: "Shanghai",\n#       value: 1,\n#       icon: {\n#         icon: "plus",\n#         lib: "antd",\n#       },\n#     },\n#     {\n#       label: "Guangzhou",\n#       value: 2,\n#       icon: {\n#         icon: "edit",\n#         lib: "antd",\n#       },\n#     },\n#     {\n#       label: "Shenzhen",\n#       value: 3,\n#       icon: {\n#         icon: "delete",\n#         lib: "antd",\n#       },\n#     },\n#   ];\n# <\/script>\n# \n')),(0,i.kt)("h3",{id:"checkboxcolor"},"checkboxColor"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"preview",preview:!0},'- brick: eo-checkbox\n  properties:\n    options:\n      - label: Beijing\n        value: 0\n        checkboxColor: red\n      - label: Shanghai\n        value: 1\n        checkboxColor: orange\n        icon:\n          icon: "bar-chart"\n          lib: "antd"\n      - label: Guangzhou\n        value: 2\n        checkboxColor: blue\n      - label: Shenzhen\n        value: 3\n        checkboxColor: green\n    value:\n      - 2\n      - 1\n# -- YAML DELIMITER (1nbbm8) --\n# <eo-checkbox id="brick-1"></eo-checkbox>\n# \n# <script>\n#   const brick_1 = document.getElementById("brick-1");\n#   brick_1.options = [\n#     {\n#       label: "Beijing",\n#       value: 0,\n#       checkboxColor: "red",\n#     },\n#     {\n#       label: "Shanghai",\n#       value: 1,\n#       checkboxColor: "orange",\n#       icon: {\n#         icon: "bar-chart",\n#         lib: "antd",\n#       },\n#     },\n#     {\n#       label: "Guangzhou",\n#       value: 2,\n#       checkboxColor: "blue",\n#     },\n#     {\n#       label: "Shenzhen",\n#       value: 3,\n#       checkboxColor: "green",\n#     },\n#   ];\n#   brick_1.value = [2, 1];\n# <\/script>\n# \n')),(0,i.kt)("h3",{id:"optiongroups"},"optionGroups"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"preview",preview:!0},'- brick: eo-checkbox\n  events:\n    change:\n      action: console.log\n  properties:\n    isGroup: true\n    label: \u5546\u54c1\n    name: goods\n    optionGroups:\n      - key: fruits\n        name: \u6c34\u679c\n        options:\n          - label: \u82f9\u679c\n            value: apple\n          - label: \u9999\u8549\n            value: banana\n      - key: vegetables\n        name: \u852c\u83dc\n        options:\n          - label: \u571f\u8c46\n            value: potato\n    value:\n      - banana\n      - potato\n# -- YAML DELIMITER (1nbbm8) --\n# <eo-checkbox is-group label="\u5546\u54c1" name="goods" id="brick-1"></eo-checkbox>\n# \n# <script>\n#   const brick_1 = document.getElementById("brick-1");\n#   brick_1.optionGroups = [\n#     {\n#       key: "fruits",\n#       name: "\u6c34\u679c",\n#       options: [\n#         {\n#           label: "\u82f9\u679c",\n#           value: "apple",\n#         },\n#         {\n#           label: "\u9999\u8549",\n#           value: "banana",\n#         },\n#       ],\n#     },\n#     {\n#       key: "vegetables",\n#       name: "\u852c\u83dc",\n#       options: [\n#         {\n#           label: "\u571f\u8c46",\n#           value: "potato",\n#         },\n#       ],\n#     },\n#   ];\n#   brick_1.value = ["banana", "potato"];\n#   brick_1.addEventListener("change", (e) => {\n#     console.log(e.detail);\n#   });\n# <\/script>\n# \n')),(0,i.kt)("h3",{id:"event"},"Event"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"preview",preview:!0},'- brick: eo-checkbox\n  properties:\n    id: option-checkbox\n    options:\n      - label: Beijing\n        value: 0\n      - label: Shanghai\n        value: 1\n        icon:\n          icon: "bar-chart"\n          lib: "antd"\n      - label: Guangzhou\n        value: 2\n      - label: Shenzhen\n        value: 3\n  events:\n    change:\n      - action: message.success\n        args:\n          - <% JSON.stringify(EVENT.detail) %>\n    options.change:\n      - action: message.success\n        args:\n          - <% JSON.stringify(EVENT.detail) %>\n- brick: eo-button\n  properties:\n    textContent: Click to Change Radio Option\n  events:\n    click:\n      - target: "#option-checkbox"\n        properties:\n          options:\n            - label: Beijing\n              value: 0\n            - label: Shanghai\n              value: 1\n              icon:\n                icon: "bar-chart"\n                lib: "antd"\n            - label: Guangzhou\n              value: 2\n            - label: Shenzhen\n              value: 3\n            - label: Hangzhou\n              value: 4\n# -- YAML DELIMITER (1nbbm8) --\n# <eo-checkbox id="option-checkbox"></eo-checkbox>\n# <eo-button id="brick-1">Click to Change Radio Option</eo-button>\n# \n# <script>\n#   const option_checkbox = document.getElementById("option-checkbox");\n#   option_checkbox.options = [\n#     {\n#       label: "Beijing",\n#       value: 0,\n#     },\n#     {\n#       label: "Shanghai",\n#       value: 1,\n#       icon: {\n#         icon: "bar-chart",\n#         lib: "antd",\n#       },\n#     },\n#     {\n#       label: "Guangzhou",\n#       value: 2,\n#     },\n#     {\n#       label: "Shenzhen",\n#       value: 3,\n#     },\n#   ];\n#   option_checkbox.addEventListener("change", (e) => {\n#     const message = document.createElement("basic.show-notification");\n#     message.resolve({\n#       type: "success",\n#       /* WARN: incompatible expressions in HTML, please try YAML: */\n#       message: "<% JSON.stringify(EVENT.detail) %>",\n#     });\n#   });\n#   option_checkbox.addEventListener("options.change", (e) => {\n#     const message = document.createElement("basic.show-notification");\n#     message.resolve({\n#       type: "success",\n#       /* WARN: incompatible expressions in HTML, please try YAML: */\n#       message: "<% JSON.stringify(EVENT.detail) %>",\n#     });\n#   });\n# \n#   const brick_1 = document.getElementById("brick-1");\n#   brick_1.addEventListener("click", (e) => {\n#     const brick = document.querySelector("#option-checkbox");\n#     brick.options = [\n#       {\n#         label: "Beijing",\n#         value: 0,\n#       },\n#       {\n#         label: "Shanghai",\n#         value: 1,\n#         icon: {\n#           icon: "bar-chart",\n#           lib: "antd",\n#         },\n#       },\n#       {\n#         label: "Guangzhou",\n#         value: 2,\n#       },\n#       {\n#         label: "Shenzhen",\n#         value: 3,\n#       },\n#       {\n#         label: "Hangzhou",\n#         value: 4,\n#       },\n#     ];\n#   });\n# <\/script>\n# \n')),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)(p.vy.Provider,{value:["CheckboxValueType","CheckboxOptionType","CheckboxType","OptionGroup"]},(0,i.kt)(l.Z,{properties:[{name:"name",description:"\u5b57\u6bb5\u540d\u79f0",type:"string",annotation:{type:"keyword",value:"string"}},{name:"label",description:"\u5b57\u6bb5\u8bf4\u660e",type:"string",annotation:{type:"keyword",value:"string"}},{name:"value",description:"\u503c",attribute:!1,type:"CheckboxValueType[]",annotation:{type:"array",elementType:{type:"reference",typeName:{type:"identifier",name:"CheckboxValueType"}}}},{name:"options",description:"\u591a\u9009\u6846\u9009\u9879\u8868",required:!0,default:"[]",attribute:!1,type:"CheckboxOptionType[]",annotation:{type:"array",elementType:{type:"reference",typeName:{type:"identifier",name:"CheckboxOptionType"}}}},{name:"type",description:"\u7c7b\u578b",default:'"default"',type:"CheckboxType",annotation:{type:"reference",typeName:{type:"identifier",name:"CheckboxType"}}},{name:"disabled",description:"\u662f\u5426\u7981\u7528",type:"boolean",annotation:{type:"keyword",value:"boolean"}},{name:"isCustom",description:"\u662f\u5426\u4e3a\u81ea\u5b9a\u4e49",default:"false",type:"boolean",annotation:{type:"keyword",value:"boolean"}},{name:"required",description:"\u662f\u5426\u5fc5\u586b",type:"boolean",annotation:{type:"keyword",value:"boolean"}},{name:"message",description:"\u6821\u9a8c\u6587\u672c",attribute:!1,type:"Record<string, string>",annotation:{type:"reference",typeName:{type:"identifier",name:"Record"},typeParameters:{type:"typeParameterInstantiation",params:[{type:"keyword",value:"string"},{type:"keyword",value:"string"}]}}},{name:"isGroup",description:"\u662f\u5426\u4e3a\u590d\u9009\u6846\uff0c\u4e3atrue\u65f6\uff0c\u5219\u53ef\u8bbe\u7f6e\u5206\u7ec4\u6570\u636e optionGroups",type:"boolean",annotation:{type:"keyword",value:"boolean"}},{name:"optionGroups",description:"\u591a\u9009\u6846\u9009\u9879\u5206\u7ec4\u6570\u636e\uff0c\u9700\u8981\u8bbe\u7f6e isGroup \u4e3a true \u624d\u751f\u6548",attribute:!1,type:"OptionGroup[]",annotation:{type:"array",elementType:{type:"reference",typeName:{type:"identifier",name:"OptionGroup"}}}}],mdxType:"BrickDocProperties"})),(0,i.kt)("h2",{id:"events"},"Events"),(0,i.kt)(p.vy.Provider,{value:["CheckboxValueType","CheckboxOptionType","CheckboxType","OptionGroup"]},(0,i.kt)(r.Z,{events:[{name:"change",description:"\u590d\u9009\u6846\u53d8\u5316\u4e8b\u4ef6",detail:{type:"CheckboxOptionType[]",annotation:{type:"array",elementType:{type:"reference",typeName:{type:"identifier",name:"CheckboxOptionType"}}}}},{name:"options.change",description:"\u590d\u9009\u6846\u53d8\u5316\u4e8b\u4ef6",detail:{type:"{\n    options: CheckboxOptionType[];\n    name: string;\n  }",annotation:{type:"typeLiteral",members:[{type:"propertySignature",key:{type:"identifier",name:"options"},annotation:{type:"array",elementType:{type:"reference",typeName:{type:"identifier",name:"CheckboxOptionType"}}},computed:!1},{type:"propertySignature",key:{type:"identifier",name:"name"},annotation:{type:"keyword",value:"string"},computed:!1}]}}}],mdxType:"BrickDocEvents"})),(0,i.kt)("h2",{id:"type-references"},"Type references"),(0,i.kt)(c.Z,{types:[{type:"typeAlias",name:"CheckboxValueType",annotation:{type:"union",types:[{type:"keyword",value:"string"},{type:"keyword",value:"number"},{type:"keyword",value:"boolean"}]}},{type:"interface",name:"CheckboxOptionType",body:[{type:"propertySignature",key:{type:"identifier",name:"label"},annotation:{type:"reference",typeName:{type:"qualifiedName",left:{type:"identifier",name:"React"},right:{type:"identifier",name:"ReactNode"}}},computed:!1},{type:"propertySignature",key:{type:"identifier",name:"value"},annotation:{type:"keyword",value:"any"},computed:!1},{type:"propertySignature",key:{type:"identifier",name:"style"},annotation:{type:"reference",typeName:{type:"qualifiedName",left:{type:"identifier",name:"React"},right:{type:"identifier",name:"CSSProperties"}}},optional:!0,computed:!1},{type:"propertySignature",key:{type:"identifier",name:"disabled"},annotation:{type:"keyword",value:"boolean"},optional:!0,computed:!1},{type:"propertySignature",key:{type:"identifier",name:"checkboxColor"},annotation:{type:"keyword",value:"string"},optional:!0,computed:!1},{type:"indexSignature",parameter:{type:"identifier",name:"propName",annotation:{type:"keyword",value:"string"}},annotation:{type:"keyword",value:"any"}}]},{type:"typeAlias",name:"CheckboxType",annotation:{type:"union",types:[{type:"jsLiteral",value:"default"},{type:"jsLiteral",value:"icon"}]}},{type:"interface",name:"OptionGroup",body:[{type:"propertySignature",key:{type:"identifier",name:"name"},annotation:{type:"keyword",value:"string"},computed:!1},{type:"propertySignature",key:{type:"identifier",name:"key"},annotation:{type:"keyword",value:"string"},computed:!1},{type:"propertySignature",key:{type:"identifier",name:"options"},annotation:{type:"array",elementType:{type:"reference",typeName:{type:"identifier",name:"CheckboxOptionType"}}},computed:!1}]}],mdxType:"BrickDocTypes"}))}m.isMDXComponent=!0}}]);
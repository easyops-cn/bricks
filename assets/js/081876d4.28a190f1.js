"use strict";(self.webpackChunkbrick_docs=self.webpackChunkbrick_docs||[]).push([[6408],{32796:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>p,default:()=>m,frontMatter:()=>c,metadata:()=>b,toc:()=>k});var r=t(87462),i=(t(67294),t(3905)),o=t(59263),l=t(20456),a=(t(98277),t(46470),t(10080),t(70516),t(75944)),s=t(4871);const c={description:"<eo-descriptions>"},p=void 0,b={unversionedId:"bricks/presentational/eo-descriptions",id:"bricks/presentational/eo-descriptions",title:"eo-descriptions",description:"<eo-descriptions>",source:"@site/docs/bricks/presentational/eo-descriptions.mdx",sourceDirName:"bricks/presentational",slug:"/bricks/presentational/eo-descriptions",permalink:"/bricks/presentational/eo-descriptions",draft:!1,tags:[],version:"current",frontMatter:{description:"<eo-descriptions>"},sidebar:"docsSidebar",previous:{title:"eo-code-display",permalink:"/bricks/presentational/eo-code-display"},next:{title:"eo-divider",permalink:"/bricks/presentational/eo-divider"}},d={},k=[{value:"Examples",id:"examples",level:2},{value:"Column",id:"column",level:3},{value:"Layout",id:"layout",level:3},{value:"Bordered",id:"bordered",level:3},{value:"Hide Groups",id:"hide-groups",level:3},{value:"DataSource",id:"datasource",level:3},{value:"Properties",id:"properties",level:2},{value:"Type references",id:"type-references",level:2}],y={toc:k},u="wrapper";function m(n){let{components:e,...t}=n;return(0,i.kt)(u,(0,r.Z)({},y,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)(o.Z,{name:"eo-descriptions",alias:["presentational.general-descriptions"],mdxType:"BrickTagName"}),(0,i.kt)("p",null,"\u901a\u7528\u63cf\u8ff0\u5217\u8868\u6784\u4ef6\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"preview",preview:!0},'- brick: eo-descriptions\n  properties:\n    list:\n      - label: \u59d3\u540d\n        text: Tom\n      - label: \u5e74\u9f84\n        text: 18\n      - label: \u8eab\u9ad8\n        text: 180cm\n      - label: \u7231\u597d\n        text: \u7bee\u7403\n# -- YAML DELIMITER (1nbbm8) --\n# <eo-descriptions id="brick-1"></eo-descriptions>\n# \n# <script>\n#   const brick_1 = document.getElementById("brick-1");\n#   brick_1.list = [\n#     {\n#       label: "\u59d3\u540d",\n#       text: "Tom",\n#     },\n#     {\n#       label: "\u5e74\u9f84",\n#       text: 18,\n#     },\n#     {\n#       label: "\u8eab\u9ad8",\n#       text: "180cm",\n#     },\n#     {\n#       label: "\u7231\u597d",\n#       text: "\u7bee\u7403",\n#     },\n#   ];\n# <\/script>\n# \n')),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("h3",{id:"column"},"Column"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"preview",preview:!0},'- brick: eo-descriptions\n  properties:\n    column: 2\n    list:\n      - label: \u59d3\u540d\n        text: Tom\n      - label: \u5e74\u9f84\n        text: 18\n      - label: \u8eab\u9ad8\n        text: 180cm\n      - label: \u7231\u597d\n        text: \u7bee\u7403\n      - label: \u6807\u7b7e\n        useBrick:\n          - brick: eo-tag-list\n            properties:\n              list:\n                - text: \u9633\u5149\n                  key: 0\n                  color: blue\n                - text: \u5f00\u6717\n                  key: 1\n                  color: red\n                - text: \u5927\u7537\u5b69\n                  key: 2\n                  color: green\n\n- brick: div\n  properties:\n    style:\n      margin: 10px 0px\n- brick: eo-descriptions\n  properties:\n    column: 4\n    list:\n      - label: \u59d3\u540d\n        text: Tom\n      - label: \u5e74\u9f84\n        text: 18\n      - label: \u8eab\u9ad8\n        text: 180cm\n      - label: \u7231\u597d\n        text: \u7bee\u7403\n      - label: \u6807\u7b7e\n        useBrick:\n          - brick: eo-tag-list\n            properties:\n              list:\n                - text: \u9633\u5149\n                  key: 0\n                  color: blue\n                - text: \u5f00\u6717\n                  key: 1\n                  color: red\n                - text: \u5927\u7537\u5b69\n                  key: 2\n                  color: green\n# -- YAML DELIMITER (1nbbm8) --\n# <eo-descriptions column="2" id="brick-1"></eo-descriptions>\n# <div style="margin: 10px 0px"></div>\n# <eo-descriptions column="4" id="brick-2"></eo-descriptions>\n# \n# <script>\n#   const brick_1 = document.getElementById("brick-1");\n#   brick_1.list = [\n#     {\n#       label: "\u59d3\u540d",\n#       text: "Tom",\n#     },\n#     {\n#       label: "\u5e74\u9f84",\n#       text: 18,\n#     },\n#     {\n#       label: "\u8eab\u9ad8",\n#       text: "180cm",\n#     },\n#     {\n#       label: "\u7231\u597d",\n#       text: "\u7bee\u7403",\n#     },\n#     {\n#       label: "\u6807\u7b7e",\n#       useBrick: [\n#         {\n#           brick: "eo-tag-list",\n#           properties: {\n#             list: [\n#               {\n#                 text: "\u9633\u5149",\n#                 key: 0,\n#                 color: "blue",\n#               },\n#               {\n#                 text: "\u5f00\u6717",\n#                 key: 1,\n#                 color: "red",\n#               },\n#               {\n#                 text: "\u5927\u7537\u5b69",\n#                 key: 2,\n#                 color: "green",\n#               },\n#             ],\n#           },\n#         },\n#       ],\n#     },\n#   ];\n# \n#   const brick_2 = document.getElementById("brick-2");\n#   brick_2.list = [\n#     {\n#       label: "\u59d3\u540d",\n#       text: "Tom",\n#     },\n#     {\n#       label: "\u5e74\u9f84",\n#       text: 18,\n#     },\n#     {\n#       label: "\u8eab\u9ad8",\n#       text: "180cm",\n#     },\n#     {\n#       label: "\u7231\u597d",\n#       text: "\u7bee\u7403",\n#     },\n#     {\n#       label: "\u6807\u7b7e",\n#       useBrick: [\n#         {\n#           brick: "eo-tag-list",\n#           properties: {\n#             list: [\n#               {\n#                 text: "\u9633\u5149",\n#                 key: 0,\n#                 color: "blue",\n#               },\n#               {\n#                 text: "\u5f00\u6717",\n#                 key: 1,\n#                 color: "red",\n#               },\n#               {\n#                 text: "\u5927\u7537\u5b69",\n#                 key: 2,\n#                 color: "green",\n#               },\n#             ],\n#           },\n#         },\n#       ],\n#     },\n#   ];\n# <\/script>\n# \n')),(0,i.kt)("h3",{id:"layout"},"Layout"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"preview",preview:!0},'- brick: eo-descriptions\n  properties:\n    layout: horizontal\n    list:\n      - label: \u59d3\u540d\n        text: Tom\n      - label: \u5e74\u9f84\n        text: 18\n      - label: \u8eab\u9ad8\n        text: 180cm\n      - label: \u7231\u597d\n        text: \u7bee\u7403\n      - label: \u6807\u7b7e\n        useBrick:\n          - brick: eo-tag-list\n            properties:\n              list:\n                - text: \u9633\u5149\n                  key: 0\n                  color: blue\n                - text: \u5f00\u6717\n                  key: 1\n                  color: red\n                - text: \u5927\u7537\u5b69\n                  key: 2\n                  color: green\n- brick: eo-descriptions\n  properties:\n    layout: vertical\n    list:\n      - label: \u59d3\u540d\n        text: Tom\n      - label: \u5e74\u9f84\n        text: 18\n      - label: \u8eab\u9ad8\n        text: 180cm\n      - label: \u7231\u597d\n        text: \u7bee\u7403\n      - label: \u6807\u7b7e\n        useBrick:\n          - brick: eo-tag-list\n            properties:\n              list:\n                - text: \u9633\u5149\n                  key: 0\n                  color: blue\n                - text: \u5f00\u6717\n                  key: 1\n                  color: red\n                - text: \u5927\u7537\u5b69\n                  key: 2\n                  color: green\n- brick: div\n  properties:\n    style:\n      margin: 10px 0px\n# -- YAML DELIMITER (1nbbm8) --\n# <eo-descriptions layout="horizontal" id="brick-1"></eo-descriptions>\n# <eo-descriptions layout="vertical" id="brick-2"></eo-descriptions>\n# <div style="margin: 10px 0px"></div>\n# \n# <script>\n#   const brick_1 = document.getElementById("brick-1");\n#   brick_1.list = [\n#     {\n#       label: "\u59d3\u540d",\n#       text: "Tom",\n#     },\n#     {\n#       label: "\u5e74\u9f84",\n#       text: 18,\n#     },\n#     {\n#       label: "\u8eab\u9ad8",\n#       text: "180cm",\n#     },\n#     {\n#       label: "\u7231\u597d",\n#       text: "\u7bee\u7403",\n#     },\n#     {\n#       label: "\u6807\u7b7e",\n#       useBrick: [\n#         {\n#           brick: "eo-tag-list",\n#           properties: {\n#             list: [\n#               {\n#                 text: "\u9633\u5149",\n#                 key: 0,\n#                 color: "blue",\n#               },\n#               {\n#                 text: "\u5f00\u6717",\n#                 key: 1,\n#                 color: "red",\n#               },\n#               {\n#                 text: "\u5927\u7537\u5b69",\n#                 key: 2,\n#                 color: "green",\n#               },\n#             ],\n#           },\n#         },\n#       ],\n#     },\n#   ];\n# \n#   const brick_2 = document.getElementById("brick-2");\n#   brick_2.list = [\n#     {\n#       label: "\u59d3\u540d",\n#       text: "Tom",\n#     },\n#     {\n#       label: "\u5e74\u9f84",\n#       text: 18,\n#     },\n#     {\n#       label: "\u8eab\u9ad8",\n#       text: "180cm",\n#     },\n#     {\n#       label: "\u7231\u597d",\n#       text: "\u7bee\u7403",\n#     },\n#     {\n#       label: "\u6807\u7b7e",\n#       useBrick: [\n#         {\n#           brick: "eo-tag-list",\n#           properties: {\n#             list: [\n#               {\n#                 text: "\u9633\u5149",\n#                 key: 0,\n#                 color: "blue",\n#               },\n#               {\n#                 text: "\u5f00\u6717",\n#                 key: 1,\n#                 color: "red",\n#               },\n#               {\n#                 text: "\u5927\u7537\u5b69",\n#                 key: 2,\n#                 color: "green",\n#               },\n#             ],\n#           },\n#         },\n#       ],\n#     },\n#   ];\n# <\/script>\n# \n')),(0,i.kt)("h3",{id:"bordered"},"Bordered"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"preview",preview:!0},'- brick: eo-descriptions\n  properties:\n    bordered: true\n    layout: vertical\n    list:\n      - label: \u59d3\u540d\n        text: Tom\n      - label: \u5e74\u9f84\n        text: 18\n      - label: \u8eab\u9ad8\n        text: 180cm\n      - label: \u7231\u597d\n        text: \u7bee\u7403\n      - label: \u6807\u7b7e\n        useBrick:\n          - brick: eo-tag-list\n            properties:\n              list:\n                - text: \u9633\u5149\n                  key: 0\n                  color: blue\n                - text: \u5f00\u6717\n                  key: 1\n                  color: red\n                - text: \u5927\u7537\u5b69\n                  key: 2\n                  color: green\n- brick: div\n  properties:\n    style:\n      margin: 10px 0px\n- brick: eo-descriptions\n  properties:\n    bordered: true\n    layout: horizontal\n    list:\n      - label: \u59d3\u540d\n        text: Tom\n      - label: \u5e74\u9f84\n        text: 18\n      - label: \u8eab\u9ad8\n        text: 180cm\n      - label: \u7231\u597d\n        text: \u7bee\u7403\n      - label: \u6807\u7b7e\n        useBrick:\n          - brick: eo-tag-list\n            properties:\n              list:\n                - text: \u9633\u5149\n                  key: 0\n                  color: blue\n                - text: \u5f00\u6717\n                  key: 1\n                  color: red\n                - text: \u5927\u7537\u5b69\n                  key: 2\n                  color: green\n# -- YAML DELIMITER (1nbbm8) --\n# <eo-descriptions bordered layout="vertical" id="brick-1"></eo-descriptions>\n# <div style="margin: 10px 0px"></div>\n# <eo-descriptions bordered layout="horizontal" id="brick-2"></eo-descriptions>\n# \n# <script>\n#   const brick_1 = document.getElementById("brick-1");\n#   brick_1.list = [\n#     {\n#       label: "\u59d3\u540d",\n#       text: "Tom",\n#     },\n#     {\n#       label: "\u5e74\u9f84",\n#       text: 18,\n#     },\n#     {\n#       label: "\u8eab\u9ad8",\n#       text: "180cm",\n#     },\n#     {\n#       label: "\u7231\u597d",\n#       text: "\u7bee\u7403",\n#     },\n#     {\n#       label: "\u6807\u7b7e",\n#       useBrick: [\n#         {\n#           brick: "eo-tag-list",\n#           properties: {\n#             list: [\n#               {\n#                 text: "\u9633\u5149",\n#                 key: 0,\n#                 color: "blue",\n#               },\n#               {\n#                 text: "\u5f00\u6717",\n#                 key: 1,\n#                 color: "red",\n#               },\n#               {\n#                 text: "\u5927\u7537\u5b69",\n#                 key: 2,\n#                 color: "green",\n#               },\n#             ],\n#           },\n#         },\n#       ],\n#     },\n#   ];\n# \n#   const brick_2 = document.getElementById("brick-2");\n#   brick_2.list = [\n#     {\n#       label: "\u59d3\u540d",\n#       text: "Tom",\n#     },\n#     {\n#       label: "\u5e74\u9f84",\n#       text: 18,\n#     },\n#     {\n#       label: "\u8eab\u9ad8",\n#       text: "180cm",\n#     },\n#     {\n#       label: "\u7231\u597d",\n#       text: "\u7bee\u7403",\n#     },\n#     {\n#       label: "\u6807\u7b7e",\n#       useBrick: [\n#         {\n#           brick: "eo-tag-list",\n#           properties: {\n#             list: [\n#               {\n#                 text: "\u9633\u5149",\n#                 key: 0,\n#                 color: "blue",\n#               },\n#               {\n#                 text: "\u5f00\u6717",\n#                 key: 1,\n#                 color: "red",\n#               },\n#               {\n#                 text: "\u5927\u7537\u5b69",\n#                 key: 2,\n#                 color: "green",\n#               },\n#             ],\n#           },\n#         },\n#       ],\n#     },\n#   ];\n# <\/script>\n# \n')),(0,i.kt)("h3",{id:"hide-groups"},"Hide Groups"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"preview",preview:!0},'- brick: eo-descriptions\n  properties:\n    hideGroups: other\n    list:\n      - label: \u59d3\u540d\n        text: Tom\n      - label: \u5e74\u9f84\n        text: 18\n      - label: \u8eab\u9ad8\n        text: 180cm\n      - label: \u7231\u597d\n        text: \u7bee\u7403\n        group: "other"\n      - label: \u6807\u7b7e\n        group: "other"\n        useBrick:\n          - brick: eo-tag-list\n            properties:\n              list:\n                - text: \u9633\u5149\n                  key: 0\n                  color: blue\n                - text: \u5f00\u6717\n                  key: 1\n                  color: red\n                - text: \u5927\u7537\u5b69\n                  key: 2\n                  color: green\n\n- brick: div\n  properties:\n    style:\n      margin: 10px 0px\n- brick: eo-descriptions\n  properties:\n    hideGroups:\n      - name\n      - other\n    list:\n      - label: \u59d3\u540d\n        text: Tom\n        group: name\n      - label: \u5e74\u9f84\n        text: 18\n        group: age\n      - label: \u8eab\u9ad8\n        text: 180cm\n      - label: \u7231\u597d\n        text: \u7bee\u7403\n        group: other\n      - label: \u6807\u7b7e\n        useBrick:\n          - brick: eo-tag-list\n            properties:\n              list:\n                - text: \u9633\u5149\n                  key: 0\n                  color: blue\n                - text: \u5f00\u6717\n                  key: 1\n                  color: red\n                - text: \u5927\u7537\u5b69\n                  key: 2\n                  color: green\n# -- YAML DELIMITER (1nbbm8) --\n# <eo-descriptions id="brick-1"></eo-descriptions>\n# <div style="margin: 10px 0px"></div>\n# <eo-descriptions id="brick-2"></eo-descriptions>\n# \n# <script>\n#   const brick_1 = document.getElementById("brick-1");\n#   brick_1.hideGroups = "other";\n#   brick_1.list = [\n#     {\n#       label: "\u59d3\u540d",\n#       text: "Tom",\n#     },\n#     {\n#       label: "\u5e74\u9f84",\n#       text: 18,\n#     },\n#     {\n#       label: "\u8eab\u9ad8",\n#       text: "180cm",\n#     },\n#     {\n#       label: "\u7231\u597d",\n#       text: "\u7bee\u7403",\n#       group: "other",\n#     },\n#     {\n#       label: "\u6807\u7b7e",\n#       group: "other",\n#       useBrick: [\n#         {\n#           brick: "eo-tag-list",\n#           properties: {\n#             list: [\n#               {\n#                 text: "\u9633\u5149",\n#                 key: 0,\n#                 color: "blue",\n#               },\n#               {\n#                 text: "\u5f00\u6717",\n#                 key: 1,\n#                 color: "red",\n#               },\n#               {\n#                 text: "\u5927\u7537\u5b69",\n#                 key: 2,\n#                 color: "green",\n#               },\n#             ],\n#           },\n#         },\n#       ],\n#     },\n#   ];\n# \n#   const brick_2 = document.getElementById("brick-2");\n#   brick_2.hideGroups = ["name", "other"];\n#   brick_2.list = [\n#     {\n#       label: "\u59d3\u540d",\n#       text: "Tom",\n#       group: "name",\n#     },\n#     {\n#       label: "\u5e74\u9f84",\n#       text: 18,\n#       group: "age",\n#     },\n#     {\n#       label: "\u8eab\u9ad8",\n#       text: "180cm",\n#     },\n#     {\n#       label: "\u7231\u597d",\n#       text: "\u7bee\u7403",\n#       group: "other",\n#     },\n#     {\n#       label: "\u6807\u7b7e",\n#       useBrick: [\n#         {\n#           brick: "eo-tag-list",\n#           properties: {\n#             list: [\n#               {\n#                 text: "\u9633\u5149",\n#                 key: 0,\n#                 color: "blue",\n#               },\n#               {\n#                 text: "\u5f00\u6717",\n#                 key: 1,\n#                 color: "red",\n#               },\n#               {\n#                 text: "\u5927\u7537\u5b69",\n#                 key: 2,\n#                 color: "green",\n#               },\n#             ],\n#           },\n#         },\n#       ],\n#     },\n#   ];\n# <\/script>\n# \n')),(0,i.kt)("h3",{id:"datasource"},"DataSource"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"preview",preview:!0},'- brick: eo-descriptions\n  properties:\n    dataSource:\n      text: Hello world\n    list:\n      - label: \u59d3\u540d\n        text: Tom\n      - label: \u5e74\u9f84\n        text: 18\n      - label: \u8eab\u9ad8\n        text: 180cm\n      - label: \u7231\u597d\n        text: \u7bee\u7403\n      - label: Form dataSource\n        useBrick:\n          brick: div\n          properties:\n            textContent: "<% DATA.text %>"\n# -- YAML DELIMITER (1nbbm8) --\n# <eo-descriptions id="brick-1"></eo-descriptions>\n# \n# <script>\n#   const brick_1 = document.getElementById("brick-1");\n#   brick_1.dataSource = {\n#     text: "Hello world",\n#   };\n#   brick_1.list = [\n#     {\n#       label: "\u59d3\u540d",\n#       text: "Tom",\n#     },\n#     {\n#       label: "\u5e74\u9f84",\n#       text: 18,\n#     },\n#     {\n#       label: "\u8eab\u9ad8",\n#       text: "180cm",\n#     },\n#     {\n#       label: "\u7231\u597d",\n#       text: "\u7bee\u7403",\n#     },\n#     {\n#       label: "Form dataSource",\n#       useBrick: {\n#         brick: "div",\n#         properties: {\n#           textContent: "<% DATA.text %>",\n#         },\n#       },\n#     },\n#   ];\n# <\/script>\n# \n')),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)(s.vy.Provider,{value:["DescriptionItem","Layout"]},(0,i.kt)(l.Z,{properties:[{name:"descriptionTitle",description:"\u63cf\u8ff0\u6807\u9898",type:"string",annotation:{type:"keyword",value:"string"}},{name:"list",description:"\u63cf\u8ff0\u5217\u8868",attribute:!1,type:"DescriptionItem[]",annotation:{type:"array",elementType:{type:"reference",typeName:{type:"identifier",name:"DescriptionItem"}}}},{name:"showCard",description:"\u662f\u5426\u5c55\u793a\u5361\u7247\u80cc\u666f",default:"true",type:"boolean",annotation:{type:"keyword",value:"boolean"}},{name:"column",description:"\u5217\u6570",attribute:!0,type:"number",annotation:{type:"keyword",value:"number"}},{name:"layout",description:"\u5e03\u5c40\u6a21\u5f0f",default:'"horizontal"',type:"Layout",annotation:{type:"reference",typeName:{type:"identifier",name:"Layout"}}},{name:"bordered",description:"\u662f\u5426\u5c55\u793a\u8fb9\u6846",default:"false",type:"boolean",annotation:{type:"keyword",value:"boolean"}},{name:"hideGroups",description:"\u9690\u85cf\u7684\u63cf\u8ff0\u5217\u8868\u9879",attribute:!1,type:"string | string[]",annotation:{type:"union",types:[{type:"keyword",value:"string"},{type:"array",elementType:{type:"keyword",value:"string"}}]}},{name:"dataSource",description:"\u6570\u636e\u6e90",attribute:!1,type:"Record<string, unknown>",annotation:{type:"reference",typeName:{type:"identifier",name:"Record"},typeParameters:{type:"typeParameterInstantiation",params:[{type:"keyword",value:"string"},{type:"keyword",value:"unknown"}]}}}],mdxType:"BrickDocProperties"})),(0,i.kt)("h2",{id:"type-references"},"Type references"),(0,i.kt)(a.Z,{types:[{type:"interface",name:"DescriptionItem",body:[{type:"propertySignature",key:{type:"identifier",name:"label"},annotation:{type:"keyword",value:"string"},computed:!1},{type:"propertySignature",key:{type:"identifier",name:"field"},annotation:{type:"keyword",value:"string"},optional:!0,computed:!1},{type:"propertySignature",key:{type:"identifier",name:"group"},annotation:{type:"keyword",value:"string"},optional:!0,computed:!1},{type:"propertySignature",key:{type:"identifier",name:"text"},annotation:{type:"union",types:[{type:"keyword",value:"string"},{type:"keyword",value:"number"}]},optional:!0,computed:!1},{type:"propertySignature",key:{type:"identifier",name:"useBrick"},annotation:{type:"reference",typeName:{type:"identifier",name:"UseSingleBrickConf"}},optional:!0,computed:!1}]},{type:"typeAlias",name:"Layout",annotation:{type:"union",types:[{type:"jsLiteral",value:"horizontal"},{type:"jsLiteral",value:"vertical"}]}}],mdxType:"BrickDocTypes"}))}m.isMDXComponent=!0}}]);
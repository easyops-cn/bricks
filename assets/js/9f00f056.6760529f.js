"use strict";(self.webpackChunkbrick_docs=self.webpackChunkbrick_docs||[]).push([[6089],{99642:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>m,default:()=>b,frontMatter:()=>c,metadata:()=>y,toc:()=>k});var i=t(87462),r=(t(67294),t(3905)),a=t(59263),p=t(20456),o=(t(98277),t(46470)),s=(t(10080),t(70516),t(75944)),l=t(4871);const c={description:"<eo-time-range-picker>"},m=void 0,y={unversionedId:"bricks/form/eo-time-range-picker",id:"bricks/form/eo-time-range-picker",title:"eo-time-range-picker",description:"<eo-time-range-picker>",source:"@site/docs/bricks/form/eo-time-range-picker.mdx",sourceDirName:"bricks/form",slug:"/bricks/form/eo-time-range-picker",permalink:"/bricks/form/eo-time-range-picker",draft:!1,tags:[],version:"current",frontMatter:{description:"<eo-time-range-picker>"},sidebar:"docsSidebar",previous:{title:"eo-time-picker",permalink:"/bricks/form/eo-time-picker"},next:{title:"eo-upload-file",permalink:"/bricks/form/eo-upload-file"}},d={},k=[{value:"Examples",id:"examples",level:2},{value:"Basic",id:"basic",level:3},{value:"rangeType",id:"rangetype",level:3},{value:"presetRanges",id:"presetranges",level:3},{value:"validate",id:"validate",level:3},{value:"selectNearDays",id:"selectneardays",level:3},{value:"Events",id:"events",level:3},{value:"Properties",id:"properties",level:2},{value:"Events",id:"events-1",level:2},{value:"Type references",id:"type-references",level:2}],g={toc:k},u="wrapper";function b(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,i.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)(a.Z,{name:"eo-time-range-picker",alias:null,mdxType:"BrickTagName"}),(0,r.kt)("p",null,"\u6784\u4ef6 ",(0,r.kt)("inlineCode",{parentName:"p"},"eo-time-range-picker")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("h3",{id:"basic"},"Basic"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"preview",preview:!0},'- brick: eo-time-range-picker\n  properties:\n    label: hello\n    name: time\n# -- YAML DELIMITER (1nbbm8) --\n# <eo-time-range-picker label="hello" name="time"></eo-time-range-picker>\n# \n')),(0,r.kt)("h3",{id:"rangetype"},"rangeType"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"preview",preview:!0},'- brick: eo-radio\n  properties:\n    options:\n      - time\n      - date\n      - dateTime\n      - hmTime\n      - week\n      - month\n      - quarter\n      - year\n  events:\n    change:\n      - target: "#rangePicker"\n        properties:\n          rangeType: <% EVENT.detail.value %>\n- brick: eo-time-range-picker\n  properties:\n    label: hello\n    name: time\n    id: rangePicker\n    rangeType: date\n# -- YAML DELIMITER (1nbbm8) --\n# <eo-radio id="brick-1"></eo-radio>\n# <eo-time-range-picker\n#   label="hello"\n#   name="time"\n#   id="rangePicker"\n# ></eo-time-range-picker>\n# \n# <script>\n#   const brick_1 = document.getElementById("brick-1");\n#   brick_1.options = [\n#     "time",\n#     "date",\n#     "dateTime",\n#     "hmTime",\n#     "week",\n#     "month",\n#     "quarter",\n#     "year",\n#   ];\n#   brick_1.addEventListener("change", (e) => {\n#     const brick = document.querySelector("#rangePicker");\n#     brick.rangeType = "<% EVENT.detail.value %>";\n#   });\n# \n#   const rangePicker = document.getElementById("rangePicker");\n#   rangePicker.rangeType = "date";\n# <\/script>\n# \n')),(0,r.kt)("h3",{id:"presetranges"},"presetRanges"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"preview",preview:!0},'- brick: eo-time-range-picker\n  properties:\n    label: hello\n    name: time\n    rangeType: week\n    required: true\n    presetRanges:\n      - \u672c\u5468\n      - \u672c\u6708\n      - \u672c\u5b63\u5ea6\n      - \u4eca\u5e74\n# -- YAML DELIMITER (1nbbm8) --\n# <eo-time-range-picker\n#   label="hello"\n#   name="time"\n#   required\n#   id="brick-1"\n# ></eo-time-range-picker>\n# \n# <script>\n#   const brick_1 = document.getElementById("brick-1");\n#   brick_1.rangeType = "week";\n#   brick_1.presetRanges = ["\u672c\u5468", "\u672c\u6708", "\u672c\u5b63\u5ea6", "\u4eca\u5e74"];\n# <\/script>\n# \n')),(0,r.kt)("h3",{id:"validate"},"validate"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"preview",preview:!0},'- brick: eo-form\n  events:\n    values.change:\n      - action: console.log\n    validate.success:\n      - action: message.success\n        args:\n          - \u8868\u5355\u63d0\u4ea4\u6210\u529f\n    validate.error:\n      - action: message.error\n        args:\n          - \u8868\u5355\u6821\u9a8c\u5931\u8d25\n  slots:\n    "":\n      bricks:\n        - brick: eo-time-range-picker\n          events:\n            change:\n              action: console.log\n          properties:\n            label: hello\n            name: time\n            required: true\n        - brick: eo-submit-buttons\n# -- YAML DELIMITER (1nbbm8) --\n# <eo-form id="brick-1">\n#   <eo-time-range-picker\n#     label="hello"\n#     name="time"\n#     required\n#     id="brick-2"\n#   ></eo-time-range-picker>\n#   <eo-submit-buttons></eo-submit-buttons>\n# </eo-form>\n# \n# <script>\n#   const brick_1 = document.getElementById("brick-1");\n#   brick_1.addEventListener("values.change", (e) => {\n#     console.log(e.detail);\n#   });\n#   brick_1.addEventListener("validate.success", (e) => {\n#     const message = document.createElement("basic.show-notification");\n#     message.resolve({ type: "success", message: "\u8868\u5355\u63d0\u4ea4\u6210\u529f" });\n#   });\n#   brick_1.addEventListener("validate.error", (e) => {\n#     const message = document.createElement("basic.show-notification");\n#     message.resolve({ type: "error", message: "\u8868\u5355\u6821\u9a8c\u5931\u8d25" });\n#   });\n# \n#   const brick_2 = document.getElementById("brick-2");\n#   brick_2.addEventListener("change", (e) => {\n#     console.log(e.detail);\n#   });\n# <\/script>\n# \n')),(0,r.kt)("h3",{id:"selectneardays"},"selectNearDays"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"preview",preview:!0},'- brick: eo-time-range-picker\n  events:\n    - action: console.log\n  properties:\n    label: hello\n    name: time\n    selectNearDays: 10\n    rangeType: date\n# -- YAML DELIMITER (1nbbm8) --\n# <eo-time-range-picker\n#   label="hello"\n#   name="time"\n#   select-near-days="10"\n#   id="brick-1"\n# ></eo-time-range-picker>\n# \n# <script>\n#   const brick_1 = document.getElementById("brick-1");\n#   brick_1.rangeType = "date";\n#   brick_1.addEventListener("0", (e) => {\n#     console.log(e.detail);\n#   });\n# <\/script>\n# \n')),(0,r.kt)("h3",{id:"events"},"Events"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"preview",preview:!0},'- brick: eo-time-range-picker\n  events:\n    - action: console.log\n  properties:\n    label: hello\n    name: time\n# -- YAML DELIMITER (1nbbm8) --\n# <eo-time-range-picker\n#   label="hello"\n#   name="time"\n#   id="brick-1"\n# ></eo-time-range-picker>\n# \n# <script>\n#   const brick_1 = document.getElementById("brick-1");\n#   brick_1.addEventListener("0", (e) => {\n#     console.log(e.detail);\n#   });\n# <\/script>\n# \n')),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)(l.vy.Provider,{value:["TimeRange","RangeType","PickerType","OtherPickerType","presetRangeType"]},(0,r.kt)(p.Z,{properties:[{name:"name",description:"\u65f6\u95f4\u6bb5\u9009\u62e9\u5668\u5b57\u6bb5\u540d",type:"string",annotation:{type:"keyword",value:"string"}},{name:"label",description:"\u65f6\u95f4\u6bb5\u9009\u62e9\u5668\u8bf4\u660e",type:"string",annotation:{type:"keyword",value:"string"}},{name:"value",description:"\u65f6\u95f4\u6bb5\u9009\u62e9\u5668\u7684\u521d\u59cb\u503c",default:'{ "startTime": "00:00:00", "endTime": "23:59:59" }',attribute:!1,type:"TimeRange",annotation:{type:"reference",typeName:{type:"identifier",name:"TimeRange"}}},{name:"required",description:"\u662f\u5426\u5fc5\u586b",type:"boolean",annotation:{type:"keyword",value:"boolean"}},{name:"rangeType",description:"\u65f6\u95f4\u6bb5\u7c7b\u578b",attribute:!1,type:"RangeType",annotation:{type:"reference",typeName:{type:"identifier",name:"RangeType"}}},{name:"selectNearDays",description:"\u53ea\u6709rangeType\u5728`date` \u548c `dateTime`\u4e0b\uff0c \u624d\u652f\u6301\u53ea\u9009\u62e9\u6700\u8fd1n\u5929(\u5f53\u524d\u65f6\u95f4\u5411\u524dn\u5929)",type:"number",annotation:{type:"keyword",value:"number"}},{name:"emitChangeOnInit",description:"",default:"true\n\u662f\u5426\u5728\u521d\u59cb\u5316\u5b8c\u6210\u540e\u989d\u5916\u89e6\u53d1\u4e00\u6b21`time.range.change`, \u8fd9\u91cc\u56e0\u4e3a\u5386\u53f2\u539f\u56e0\u4e4b\u524d\u9ed8\u8ba4\u884c\u4e3a\u5c31\u662f\u5728\u521d\u59cb\u5316\u540e\u4f1a\u89e6\u53d1\u8be5\u4e8b\u4ef6\uff0c\u8fd9\u91cc\u4e3a\u4e86\u517c\u5bb9\u4e4b\u524d\u7684\u884c\u4e3a\uff0c\u9ed8\u8ba4\u503c\u53ea\u80fd\u8bbe\u7f6e\u4e3a true\u3002",type:"boolean",annotation:{type:"keyword",value:"boolean"}},{name:"presetRanges",description:"",default:"[]\n\u9884\u8bbe\u65f6\u95f4\u8303\u56f4\u5feb\u6377\u9009\u62e9\uff1b\u8bbe\u7f6e\u4e86\u5c5e\u6027selectNearDays\u65f6\uff0c\u5c5e\u6027presetRanges\u4e0d\u751f\u6548\uff1b\u5c5e\u6027rangeType\u4e3aweek\u65f6\uff0cpresetRanges\u7684\u503c\u53ea\u80fd\u4e3a\u672c\u5468\u3001\u672c\u6708\u3001\u672c\u5b63\u5ea6\u3001\u4eca\u5e74\uff0c\u5c5e\u6027rangeType\u4e3amonth\u3001quarter\u3001year\u65f6\uff0c\u4ee5\u6b64\u7c7b\u63a8",attribute:!1,type:"presetRangeType[]",annotation:{type:"array",elementType:{type:"reference",typeName:{type:"identifier",name:"presetRangeType"}}}},{name:"validator",attribute:!1,type:"((value: any) => MessageBody | string)",annotation:{type:"parenthesizedType",annotation:{type:"function",parameters:[{type:"identifier",name:"value",annotation:{type:"keyword",value:"any"}}],annotation:{type:"union",types:[{type:"reference",typeName:{type:"identifier",name:"MessageBody"}},{type:"keyword",value:"string"}]}}}}],mdxType:"BrickDocProperties"})),(0,r.kt)("h2",{id:"events-1"},"Events"),(0,r.kt)(l.vy.Provider,{value:["TimeRange","RangeType","PickerType","OtherPickerType","presetRangeType"]},(0,r.kt)(o.Z,{events:[{name:"change",description:"\u65f6\u95f4\u6bb5\u53d8\u5316\u65f6\u89e6\u53d1",detail:{type:"TimeRange",annotation:{type:"reference",typeName:{type:"identifier",name:"TimeRange"}}}}],mdxType:"BrickDocEvents"})),(0,r.kt)("h2",{id:"type-references"},"Type references"),(0,r.kt)(s.Z,{types:[{type:"interface",name:"TimeRange",body:[{type:"propertySignature",key:{type:"identifier",name:"startTime"},annotation:{type:"keyword",value:"string"},computed:!1},{type:"propertySignature",key:{type:"identifier",name:"endTime"},annotation:{type:"keyword",value:"string"},computed:!1}]},{type:"typeAlias",name:"RangeType",annotation:{type:"intersection",types:[{type:"reference",typeName:{type:"identifier",name:"PickerType"}},{type:"reference",typeName:{type:"identifier",name:"OtherPickerType"}}]}},{type:"typeAlias",name:"PickerType",annotation:{type:"union",types:[{type:"jsLiteral",value:"date"},{type:"jsLiteral",value:"week"},{type:"jsLiteral",value:"month"},{type:"jsLiteral",value:"quarter"},{type:"jsLiteral",value:"year"}]}},{type:"typeAlias",name:"OtherPickerType",annotation:{type:"union",types:[{type:"jsLiteral",value:"dateTime"},{type:"jsLiteral",value:"hmTime"},{type:"jsLiteral",value:"time"}]}},{type:"enum",name:"presetRangeType",members:[{type:"enumMember",id:{type:"identifier",name:"Today"},initializer:{type:"jsLiteral",value:"\u4eca\u5929"}},{type:"enumMember",id:{type:"identifier",name:"ThisWeek"},initializer:{type:"jsLiteral",value:"\u672c\u5468"}},{type:"enumMember",id:{type:"identifier",name:"ThisMonth"},initializer:{type:"jsLiteral",value:"\u672c\u6708"}},{type:"enumMember",id:{type:"identifier",name:"ThisQuarter"},initializer:{type:"jsLiteral",value:"\u672c\u5b63\u5ea6"}},{type:"enumMember",id:{type:"identifier",name:"ThisYear"},initializer:{type:"jsLiteral",value:"\u4eca\u5e74"}}]}],mdxType:"BrickDocTypes"}))}b.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkbrick_docs=self.webpackChunkbrick_docs||[]).push([[7973],{34753:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>d,default:()=>v,frontMatter:()=>m,metadata:()=>c,toc:()=>u});var i=a(87462),n=(a(67294),a(3905)),r=a(59263),o=a(20456),p=(a(98277),a(46470)),s=(a(10080),a(70516),a(75944)),l=a(4871);const m={description:"<eo-upload-image>"},d=void 0,c={unversionedId:"bricks/form/eo-upload-image",id:"bricks/form/eo-upload-image",title:"eo-upload-image",description:"<eo-upload-image>",source:"@site/docs/bricks/form/eo-upload-image.mdx",sourceDirName:"bricks/form",slug:"/bricks/form/eo-upload-image",permalink:"/bricks/form/eo-upload-image",draft:!1,tags:[],version:"current",frontMatter:{description:"<eo-upload-image>"},sidebar:"docsSidebar",previous:{title:"eo-upload-file",permalink:"/bricks/form/eo-upload-file"},next:{title:"form-platform",permalink:"/bricks/category/form-platform"}},y={},u=[{value:"Examples",id:"examples",level:2},{value:"Basic",id:"basic",level:3},{value:"Properties",id:"properties",level:2},{value:"Events",id:"events",level:2},{value:"Type references",id:"type-references",level:2}],k={toc:u},g="wrapper";function v(e){let{components:t,...a}=e;return(0,n.kt)(g,(0,i.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(r.Z,{name:"eo-upload-image",alias:["form.upload-image"],mdxType:"BrickTagName"}),(0,n.kt)("p",null,"\u4e0a\u4f20\u56fe\u7247\u6784\u4ef6"),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("h3",{id:"basic"},"Basic"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"preview",preview:!0},'- brick: eo-upload-image\n  events:\n    change:\n      action: console.log\n      args:\n        - "<% EVENT.detail %>"\n# -- YAML DELIMITER (1nbbm8) --\n# <eo-upload-image id="brick-1"></eo-upload-image>\n# \n# <script>\n#   const brick_1 = document.getElementById("brick-1");\n#   brick_1.addEventListener("change", (e) => {\n#     console.log(e.detail);\n#   });\n# <\/script>\n# \n')),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)(l.vy.Provider,{value:["ImageData"]},(0,n.kt)(o.Z,{properties:[{name:"name",description:"\u5b57\u6bb5\u540d\u79f0",type:"string",annotation:{type:"keyword",value:"string"}},{name:"label",description:"\u5b57\u6bb5\u8bf4\u660e",type:"string",annotation:{type:"keyword",value:"string"}},{name:"value",description:"\u503c",attribute:!1,type:"ImageData[]",annotation:{type:"array",elementType:{type:"reference",typeName:{type:"identifier",name:"ImageData"}}}},{name:"bucketName",description:"\u5bf9\u8c61\u5b58\u50a8\u6876\u540d\u5b57",type:"string",annotation:{type:"keyword",value:"string"}},{name:"multiple",description:"\u662f\u5426\u652f\u6301\u9009\u5b9a\u7684\u591a\u5f20\u56fe\u7247",type:"boolean",annotation:{type:"keyword",value:"boolean"}},{name:"limitSize",description:"\u4e0a\u4f20\u5927\u5c0f\u9650\u5236(\u5355\u4f4d\u4e3a MB)",type:"number",annotation:{type:"keyword",value:"number"}},{name:"required",description:"\u662f\u5426\u5fc5\u586b",type:"boolean",annotation:{type:"keyword",value:"boolean"}},{name:"message",description:"\u6821\u9a8c\u6587\u672c\u4fe1\u606f",attribute:!1,type:"Record<string, string>",annotation:{type:"reference",typeName:{type:"identifier",name:"Record"},typeParameters:{type:"typeParameterInstantiation",params:[{type:"keyword",value:"string"},{type:"keyword",value:"string"}]}}}],mdxType:"BrickDocProperties"})),(0,n.kt)("h2",{id:"events"},"Events"),(0,n.kt)(l.vy.Provider,{value:["ImageData"]},(0,n.kt)(p.Z,{events:[{name:"change",description:"\u503c\u53d8\u5316\u65f6\u89e6\u53d1",detail:{type:"ImageData[]",annotation:{type:"array",elementType:{type:"reference",typeName:{type:"identifier",name:"ImageData"}}}}}],mdxType:"BrickDocEvents"})),(0,n.kt)("h2",{id:"type-references"},"Type references"),(0,n.kt)(s.Z,{types:[{type:"interface",name:"ImageData",body:[{type:"propertySignature",key:{type:"identifier",name:"url"},annotation:{type:"keyword",value:"string"},optional:!0,computed:!1}],extends:[{type:"expressionWithTypeArguments",expression:{type:"identifier",name:"FileData"}}]}],mdxType:"BrickDocTypes"}))}v.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkbrick_docs=self.webpackChunkbrick_docs||[]).push([[882],{26811:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>m,default:()=>f,frontMatter:()=>l,metadata:()=>d,toc:()=>b});var i=r(87462),a=(r(67294),r(3905)),n=r(59263),o=r(20456),p=r(98277),s=(r(46470),r(10080),r(70516),r(75944)),c=r(4871);const l={description:"<eo-breadcrumb-item>"},m=void 0,d={unversionedId:"bricks/basic/eo-breadcrumb-item",id:"bricks/basic/eo-breadcrumb-item",title:"eo-breadcrumb-item",description:"<eo-breadcrumb-item>",source:"@site/docs/bricks/basic/eo-breadcrumb-item.mdx",sourceDirName:"bricks/basic",slug:"/bricks/basic/eo-breadcrumb-item",permalink:"/bricks/basic/eo-breadcrumb-item",draft:!1,tags:[],version:"current",frontMatter:{description:"<eo-breadcrumb-item>"},sidebar:"docsSidebar",previous:{title:"eo-avatar",permalink:"/bricks/basic/eo-avatar"},next:{title:"eo-breadcrumb",permalink:"/bricks/basic/eo-breadcrumb"}},y={},b=[{value:"Examples",id:"examples",level:2},{value:"Basic",id:"basic",level:3},{value:"Properties",id:"properties",level:2},{value:"Slots",id:"slots",level:2},{value:"Type references",id:"type-references",level:2}],u={toc:b},k="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(k,(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(n.Z,{name:"eo-breadcrumb-item",alias:null,mdxType:"BrickTagName"}),(0,a.kt)("p",null,"\u9762\u5305\u5c51\u5355\u9879"),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("h3",{id:"basic"},"Basic"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"preview",preview:!0},'- brick: eo-breadcrumb-item\n  properties:\n    textContent: \u4e8b\u4ef6\u4e2d\u5fc3\n  children:\n    - brick: eo-icon\n      slot: prefix\n      properties:\n        lib: easyops\n        category: app\n        icon: monitor-alarm-notice\n        style:\n          font-size: 14px\n# -- YAML DELIMITER (1nbbm8) --\n# <eo-breadcrumb-item>\n#   <eo-icon\n#     slot="prefix"\n#     lib="easyops"\n#     category="app"\n#     icon="monitor-alarm-notice"\n#     style="font-size: 14px"\n#   ></eo-icon>\n# </eo-breadcrumb-item>\n# \n')),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)(c.vy.Provider,{value:["ExtendedLocationDescriptor","ExtendedLocationDescriptorObject","Target"]},(0,a.kt)(o.Z,{properties:[{name:"href",description:"\u5916\u94fe\u7684\u94fe\u63a5\u5730\u5740",type:"string",annotation:{type:"keyword",value:"string"}},{name:"url",description:"\u94fe\u63a5\u5730\u5740",attribute:!1,type:"ExtendedLocationDescriptor",annotation:{type:"reference",typeName:{type:"identifier",name:"ExtendedLocationDescriptor"}}},{name:"target",description:"\u94fe\u63a5\u8df3\u8f6c\u76ee\u6807",type:"Target",annotation:{type:"reference",typeName:{type:"identifier",name:"Target"}}}],mdxType:"BrickDocProperties"})),(0,a.kt)("h2",{id:"slots"},"Slots"),(0,a.kt)(p.Z,{slots:[{name:"prefix",description:"\u524d\u7f00"},{name:"prefix",description:"\u540e\u7f00"},{name:"separator",description:"\u5206\u9694\u7b26"}],mdxType:"BrickDocSlots"}),(0,a.kt)("h2",{id:"type-references"},"Type references"),(0,a.kt)(s.Z,{types:[{type:"typeAlias",name:"ExtendedLocationDescriptor",annotation:{type:"union",types:[{type:"keyword",value:"string"},{type:"reference",typeName:{type:"identifier",name:"ExtendedLocationDescriptorObject"}}]}},{type:"typeAlias",name:"ExtendedLocationDescriptorObject",annotation:{type:"intersection",types:[{type:"reference",typeName:{type:"identifier",name:"LocationDescriptorObject"},typeParameters:{type:"typeParameterInstantiation",params:[{type:"reference",typeName:{type:"identifier",name:"NextHistoryState"}}]}},{type:"typeLiteral",members:[{type:"propertySignature",key:{type:"identifier",name:"keepCurrentSearch"},annotation:{type:"union",types:[{type:"keyword",value:"boolean"},{type:"array",elementType:{type:"keyword",value:"string"}}]},optional:!0,computed:!1,description:"Whether to keep current search when click on links, defaults to `false`.\n\n`true` - Keep all current search params.\n`false` - Ignore all current search params.\n`[...]` - Keep specified current search params."}]}]}},{type:"typeAlias",name:"Target",annotation:{type:"union",types:[{type:"jsLiteral",value:"_self"},{type:"jsLiteral",value:"_blank"},{type:"jsLiteral",value:"_parent"},{type:"jsLiteral",value:"_top"}]}}],mdxType:"BrickDocTypes"}))}f.isMDXComponent=!0}}]);
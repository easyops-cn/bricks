"use strict";(globalThis.webpackChunkbrick_docs=globalThis.webpackChunkbrick_docs||[]).push([[4454],{4229:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>f,frontMatter:()=>d,metadata:()=>l,toc:()=>m});var i=n(5893),r=n(1151),o=n(4752),a=n(7886),p=(n(7268),n(5673)),y=(n(1243),n(9898),n(9265)),c=n(2535);const d={description:"<eo-directory>"},s=void 0,l={id:"bricks/nav/eo-directory",title:"eo-directory",description:"<eo-directory>",source:"@site/docs/bricks/nav/eo-directory.mdx",sourceDirName:"bricks/nav",slug:"/bricks/nav/eo-directory",permalink:"/bricks/nav/eo-directory",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{description:"<eo-directory>"},sidebar:"docsSidebar",previous:{title:"eo-directory-tree",permalink:"/bricks/nav/eo-directory-tree"},next:{title:"eo-frame-breadcrumb",permalink:"/bricks/nav/eo-frame-breadcrumb"}},u={},m=[{value:"Examples",id:"examples",level:2},{value:"Basic",id:"basic",level:3},{value:"Properties",id:"properties",level:2},{value:"Events",id:"events",level:2},{value:"Type references",id:"type-references",level:2}];function k(e){const t={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return c.vy||v("TypeReferencesContext",!1),c.vy.Provider||v("TypeReferencesContext.Provider",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.Z,{name:"eo-directory",alias:null,insider:!1,deprecated:!1}),"\n",(0,i.jsxs)(t.p,{children:["\u6784\u4ef6 ",(0,i.jsx)(t.code,{children:"eo-directory"})]}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.h3,{id:"basic",children:"Basic"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",metastring:"preview",children:'- brick: div\n  properties:\n    style:\n      width: 200px\n      height: 500px\n  slots:\n    "":\n      type: bricks\n      bricks:\n        - brick: eo-directory\n          events:\n            menu.item.click:\n              - action: console.log\n            suffix.icon.click:\n              - action: console.log\n          properties:\n            defaultSelectedKeys:\n              - strategy1\n            directoryTitle: \u76ee\u5f55\u6807\u9898\n            menuItems:\n              - title: \u6d4b\u8bd5\n                type: group\n                suffixIcon:\n                  lib: antd\n                  icon: plus-circle\n                  theme: outlined\n                key: test\n                children:\n                  - key: strategy1\n                    title: \u6570\u636e1\n                  - key: strategy2\n                    title: \u6570\u636e2\n              - title: \u5176\u4ed6\n                type: group\n                suffixIcon:\n                  lib: antd\n                  icon: plus-circle\n                  theme: outlined\n                suffixIconDisabled: true\n                suffixIconTooltip: \u7981\u6b62\u70b9\u51fb\n                key: otherKey\n                children:\n                  - key: manual-strategy1\n                    title: \u6570\u636e3\n# -- YAML HEADING DELIMITER start (1nbbm8) --\nnav/eo-directory/basic\n# -- YAML HEADING DELIMITER end (1nbbm8) --\n# -- YAML DELIMITER (1nbbm8) --\n# <div style="width: 200px; height: 500px">\n#   <eo-directory directory-title="\u76ee\u5f55\u6807\u9898" id="brick-1"></eo-directory>\n# </div>\n# \n# <script>\n#   const brick_1 = document.getElementById("brick-1");\n#   brick_1.defaultSelectedKeys = ["strategy1"];\n#   brick_1.menuItems = [\n#     {\n#       title: "\u6d4b\u8bd5",\n#       type: "group",\n#       suffixIcon: {\n#         lib: "antd",\n#         icon: "plus-circle",\n#         theme: "outlined",\n#       },\n#       key: "test",\n#       children: [\n#         {\n#           key: "strategy1",\n#           title: "\u6570\u636e1",\n#         },\n#         {\n#           key: "strategy2",\n#           title: "\u6570\u636e2",\n#         },\n#       ],\n#     },\n#     {\n#       title: "\u5176\u4ed6",\n#       type: "group",\n#       suffixIcon: {\n#         lib: "antd",\n#         icon: "plus-circle",\n#         theme: "outlined",\n#       },\n#       suffixIconDisabled: true,\n#       suffixIconTooltip: "\u7981\u6b62\u70b9\u51fb",\n#       key: "otherKey",\n#       children: [\n#         {\n#           key: "manual-strategy1",\n#           title: "\u6570\u636e3",\n#         },\n#       ],\n#     },\n#   ];\n#   brick_1.addEventListener("menu.item.click", (e) => {\n#     console.log(e.detail);\n#   });\n#   brick_1.addEventListener("suffix.icon.click", (e) => {\n#     console.log(e.detail);\n#   });\n# <\/script>\n# \n'})}),"\n",(0,i.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsx)(c.vy.Provider,{value:["MenuItem","MenuChildrenItem","MenuItemClickEventDetail"],children:(0,i.jsx)(a.Z,{properties:[{name:"position",description:"\u8bbe\u7f6e\u5b9a\u4f4d\u65b9\u5f0f\uff1a\u9759\u6001\u5b9a\u4f4d\u6216\u56fa\u5b9a\u5b9a\u4f4d\u3002",default:'"fixed"',type:'"static" | "fixed"',annotation:{type:"union",types:[{type:"jsLiteral",value:"static"},{type:"jsLiteral",value:"fixed"}]}},{name:"directoryTitle",description:"\u76ee\u5f55\u6807\u9898",type:"string",annotation:{type:"keyword",value:"string"}},{name:"menuItems",description:"\u83dc\u5355\u6570\u636e",required:!0,default:"[]",attribute:!1,type:"MenuItem[]",annotation:{type:"array",elementType:{type:"reference",typeName:{type:"identifier",name:"MenuItem"}}}},{name:"hideRightBorder",description:"\u662f\u5426\u9690\u85cf\u53f3\u8fb9\u7ebf",default:"false",type:"boolean",annotation:{type:"keyword",value:"boolean"}},{name:"suffixBrick",description:"\u540e\u7f00 useBrick",attribute:!1,type:"{ useBrick: UseBrickConf }",annotation:{type:"typeLiteral",members:[{type:"propertySignature",key:{type:"identifier",name:"useBrick"},annotation:{type:"reference",typeName:{type:"identifier",name:"UseBrickConf"}},computed:!1}]}},{name:"defaultSelectedKeys",description:"\u9ed8\u8ba4\u9009\u4e2d\u9ad8\u4eae\u7684\u83dc\u5355\u9879",attribute:!1,type:"string[]",annotation:{type:"array",elementType:{type:"keyword",value:"string"}}}]})}),"\n",(0,i.jsx)(t.h2,{id:"events",children:"Events"}),"\n",(0,i.jsx)(c.vy.Provider,{value:["MenuItem","MenuChildrenItem","MenuItemClickEventDetail"],children:(0,i.jsx)(p.Z,{events:[{name:"menu.item.click",description:"\u83dc\u5355\u70b9\u51fb\uff0cgroupKey \u8868\u793a\u5bf9\u5e94\u5206\u7ec4\u7684key\uff0cdata \u8868\u793a\u5bf9\u5e94\u83dc\u5355\u9879",detail:{description:"{ groupKey: string, data: MenuChildrenItem   }",type:"MenuItemClickEventDetail",annotation:{type:"reference",typeName:{type:"identifier",name:"MenuItemClickEventDetail"}}}},{name:"suffix.icon.click",description:"\u70b9\u51fbicon\uff0cdetail\u4e3a \u5bf9\u5e94\u83dc\u5355\u9879\u6216\u8005\u662f\u5206\u7ec4\u7684key",detail:{description:"{ key: string  }",type:"{ key: string }",annotation:{type:"typeLiteral",members:[{type:"propertySignature",key:{type:"identifier",name:"key"},annotation:{type:"keyword",value:"string"},computed:!1}]}}}]})}),"\n",(0,i.jsx)(t.h2,{id:"type-references",children:"Type references"}),"\n",(0,i.jsx)(y.Z,{types:[{type:"interface",name:"MenuItem",body:[{type:"propertySignature",key:{type:"identifier",name:"title"},annotation:{type:"keyword",value:"string"},computed:!1},{type:"propertySignature",key:{type:"identifier",name:"key"},annotation:{type:"keyword",value:"string"},computed:!1},{type:"propertySignature",key:{type:"identifier",name:"type"},annotation:{type:"union",types:[{type:"jsLiteral",value:"group"},{type:"jsLiteral",value:"item"}]},computed:!1},{type:"propertySignature",key:{type:"identifier",name:"children"},annotation:{type:"array",elementType:{type:"reference",typeName:{type:"identifier",name:"MenuChildrenItem"}}},optional:!0,computed:!1},{type:"propertySignature",key:{type:"identifier",name:"suffixIcon"},annotation:{type:"reference",typeName:{type:"identifier",name:"GeneralIconProps"}},optional:!0,computed:!1},{type:"propertySignature",key:{type:"identifier",name:"suffixIconTooltip"},annotation:{type:"keyword",value:"string"},optional:!0,computed:!1},{type:"propertySignature",key:{type:"identifier",name:"suffixIconDisabled"},annotation:{type:"keyword",value:"boolean"},optional:!0,computed:!1}]},{type:"interface",name:"MenuChildrenItem",body:[{type:"propertySignature",key:{type:"identifier",name:"title"},annotation:{type:"keyword",value:"string"},computed:!1},{type:"propertySignature",key:{type:"identifier",name:"key"},annotation:{type:"keyword",value:"string"},computed:!1},{type:"indexSignature",parameter:{type:"identifier",name:"key",annotation:{type:"keyword",value:"string"}},annotation:{type:"keyword",value:"any"}}]},{type:"interface",name:"MenuItemClickEventDetail",body:[{type:"propertySignature",key:{type:"identifier",name:"data"},annotation:{type:"reference",typeName:{type:"identifier",name:"MenuChildrenItem"}},computed:!1},{type:"propertySignature",key:{type:"identifier",name:"groupKey"},annotation:{type:"keyword",value:"string"},optional:!0,computed:!1}]}]})]})}function f(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(k,{...e})}):k(e)}function v(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);
"use strict";(self.webpackChunkbrick_docs=self.webpackChunkbrick_docs||[]).push([[8208],{16618:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>m,contentTitle:()=>p,default:()=>y,frontMatter:()=>g,metadata:()=>u,toc:()=>o});var t=s(87462),a=(s(67294),s(3905)),r=s(59263),l=s(20456),i=(s(98277),s(46470),s(10080),s(70516),s(75944)),c=s(4871);const g={description:"<data-view.graph-layout-grid>"},p=void 0,u={unversionedId:"bricks/data-view/graph-layout-grid",id:"bricks/data-view/graph-layout-grid",title:"graph-layout-grid",description:"<data-view.graph-layout-grid>",source:"@site/docs/bricks/data-view/graph-layout-grid.mdx",sourceDirName:"bricks/data-view",slug:"/bricks/data-view/graph-layout-grid",permalink:"/bricks/data-view/graph-layout-grid",draft:!1,tags:[],version:"current",frontMatter:{description:"<data-view.graph-layout-grid>"},sidebar:"docsSidebar",previous:{title:"gear-background",permalink:"/bricks/data-view/gear-background"},next:{title:"graph-node",permalink:"/bricks/data-view/graph-node"}},m={},o=[{value:"Examples",id:"examples",level:2},{value:"Basic",id:"basic",level:3},{value:"IsReverse",id:"isreverse",level:3},{value:"Properties",id:"properties",level:2},{value:"Type references",id:"type-references",level:2}],d={toc:o},h="wrapper";function y(e){let{components:n,...s}=e;return(0,a.kt)(h,(0,t.Z)({},d,s,{components:n,mdxType:"MDXLayout"}),(0,a.kt)(r.Z,{name:"data-view.graph-layout-grid",alias:null,mdxType:"BrickTagName"}),(0,a.kt)("p",null,"\u6709\u89c4\u5f8b\u7684\u7f51\u683c\u5e03\u5c40\u7684\u62d3\u6251"),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("h3",{id:"basic"},"Basic"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"preview",preview:!0},'- brick: data-view.graph-layout-grid\n  properties:\n    columns: 7\n    rows: 3\n    style:\n      width: 960px\n      height: 600px\n      display: block\n      background-color: "#1c1e21"\n    dataSource:\n      - text: \u8d1f\u8f7d\u5747\u8861\u6570\n        value: 200\n        url: https://user-assets.sxlcdn.com/images/367275/FtgabYjUD_Xhmne2wsyLPcKqlgCi.png\n      - text: \u5e94\u7528\n        value: 7348\n        url: https://user-assets.sxlcdn.com/images/367275/FtgabYjUD_Xhmne2wsyLPcKqlgCi.png\n      - text: \u5b58\u50a8\u5377\u6570\n        value: 638\n        url: https://user-assets.sxlcdn.com/images/367275/FtgabYjUD_Xhmne2wsyLPcKqlgCi.png\n      - text: \u8d1f\u8f7d\u5747\u8861\u6570\n        value: 200\n        url: https://user-assets.sxlcdn.com/images/367275/FtgabYjUD_Xhmne2wsyLPcKqlgCi.png\n      - text: \u5e94\u7528\n        value: 200\n        url: https://user-assets.sxlcdn.com/images/367275/FtgabYjUD_Xhmne2wsyLPcKqlgCi.png\n      - text: \u5b88\u62a4\u8fdb\u7a0b\u6570\n        value: 200\n        url: https://user-assets.sxlcdn.com/images/367275/FtgabYjUD_Xhmne2wsyLPcKqlgCi.png\n      - text: \u8d1f\u8f7d\u5747\u8861\u6570\n        value: 200\n        url: https://user-assets.sxlcdn.com/images/367275/FtgabYjUD_Xhmne2wsyLPcKqlgCi.png\n      - text: \u5bb9\u5668\u7ec4\u6570\n        value: 200\n        url: https://user-assets.sxlcdn.com/images/367275/FtgabYjUD_Xhmne2wsyLPcKqlgCi.png\n      - text: \u65e0\u72b6\u6001\u670d\u52a1\u6570\n        value: 200\n        url: https://user-assets.sxlcdn.com/images/367275/FtgabYjUD_Xhmne2wsyLPcKqlgCi.png\n      - text: \u8d1f\u8f7d\u5747\u8861\u6570\n        value: 200\n        url: https://user-assets.sxlcdn.com/images/367275/FtgabYjUD_Xhmne2wsyLPcKqlgCi.png\n# -- YAML DELIMITER (1nbbm8) --\n# <data-view.graph-layout-grid\n#   columns="7"\n#   rows="3"\n#   style="width: 960px; height: 600px; display: block; background-color: #1c1e21"\n#   id="brick-1"\n# ></data-view.graph-layout-grid>\n# \n# <script>\n#   const brick_1 = document.getElementById("brick-1");\n#   brick_1.dataSource = [\n#     {\n#       text: "\u8d1f\u8f7d\u5747\u8861\u6570",\n#       value: 200,\n#       url: "https://user-assets.sxlcdn.com/images/367275/FtgabYjUD_Xhmne2wsyLPcKqlgCi.png",\n#     },\n#     {\n#       text: "\u5e94\u7528",\n#       value: 7348,\n#       url: "https://user-assets.sxlcdn.com/images/367275/FtgabYjUD_Xhmne2wsyLPcKqlgCi.png",\n#     },\n#     {\n#       text: "\u5b58\u50a8\u5377\u6570",\n#       value: 638,\n#       url: "https://user-assets.sxlcdn.com/images/367275/FtgabYjUD_Xhmne2wsyLPcKqlgCi.png",\n#     },\n#     {\n#       text: "\u8d1f\u8f7d\u5747\u8861\u6570",\n#       value: 200,\n#       url: "https://user-assets.sxlcdn.com/images/367275/FtgabYjUD_Xhmne2wsyLPcKqlgCi.png",\n#     },\n#     {\n#       text: "\u5e94\u7528",\n#       value: 200,\n#       url: "https://user-assets.sxlcdn.com/images/367275/FtgabYjUD_Xhmne2wsyLPcKqlgCi.png",\n#     },\n#     {\n#       text: "\u5b88\u62a4\u8fdb\u7a0b\u6570",\n#       value: 200,\n#       url: "https://user-assets.sxlcdn.com/images/367275/FtgabYjUD_Xhmne2wsyLPcKqlgCi.png",\n#     },\n#     {\n#       text: "\u8d1f\u8f7d\u5747\u8861\u6570",\n#       value: 200,\n#       url: "https://user-assets.sxlcdn.com/images/367275/FtgabYjUD_Xhmne2wsyLPcKqlgCi.png",\n#     },\n#     {\n#       text: "\u5bb9\u5668\u7ec4\u6570",\n#       value: 200,\n#       url: "https://user-assets.sxlcdn.com/images/367275/FtgabYjUD_Xhmne2wsyLPcKqlgCi.png",\n#     },\n#     {\n#       text: "\u65e0\u72b6\u6001\u670d\u52a1\u6570",\n#       value: 200,\n#       url: "https://user-assets.sxlcdn.com/images/367275/FtgabYjUD_Xhmne2wsyLPcKqlgCi.png",\n#     },\n#     {\n#       text: "\u8d1f\u8f7d\u5747\u8861\u6570",\n#       value: 200,\n#       url: "https://user-assets.sxlcdn.com/images/367275/FtgabYjUD_Xhmne2wsyLPcKqlgCi.png",\n#     },\n#   ];\n# <\/script>\n# \n')),(0,a.kt)("h3",{id:"isreverse"},"IsReverse"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"preview",preview:!0},'- brick: data-view.graph-layout-grid\n  properties:\n    columns: 7\n    rows: 3\n    isReverse: true\n    style:\n      width: 960px\n      height: 600px\n      display: block\n      background-color: "#1c1e21"\n    dataSource:\n      - text: \u8d1f\u8f7d\u5747\u8861\u6570\n        value: 200\n        url: https://user-assets.sxlcdn.com/images/367275/FtgabYjUD_Xhmne2wsyLPcKqlgCi.png\n      - text: \u5e94\u7528\n        value: 7348\n        url: https://user-assets.sxlcdn.com/images/367275/FtgabYjUD_Xhmne2wsyLPcKqlgCi.png\n      - text: \u5b58\u50a8\u5377\u6570\n        value: 638\n        url: https://user-assets.sxlcdn.com/images/367275/FtgabYjUD_Xhmne2wsyLPcKqlgCi.png\n      - text: \u8d1f\u8f7d\u5747\u8861\u6570\n        value: 200\n        url: https://user-assets.sxlcdn.com/images/367275/FtgabYjUD_Xhmne2wsyLPcKqlgCi.png\n      - text: \u5e94\u7528\n        value: 200\n        url: https://user-assets.sxlcdn.com/images/367275/FtgabYjUD_Xhmne2wsyLPcKqlgCi.png\n      - text: \u5b88\u62a4\u8fdb\u7a0b\u6570\n        value: 200\n        url: https://user-assets.sxlcdn.com/images/367275/FtgabYjUD_Xhmne2wsyLPcKqlgCi.png\n      - text: \u8d1f\u8f7d\u5747\u8861\u6570\n        value: 200\n        url: https://user-assets.sxlcdn.com/images/367275/FtgabYjUD_Xhmne2wsyLPcKqlgCi.png\n      - text: \u5bb9\u5668\u7ec4\u6570\n        value: 200\n        url: https://user-assets.sxlcdn.com/images/367275/FtgabYjUD_Xhmne2wsyLPcKqlgCi.png\n      - text: \u65e0\u72b6\u6001\u670d\u52a1\u6570\n        value: 200\n        url: https://user-assets.sxlcdn.com/images/367275/FtgabYjUD_Xhmne2wsyLPcKqlgCi.png\n      - text: \u8d1f\u8f7d\u5747\u8861\u6570\n        value: 200\n        url: https://user-assets.sxlcdn.com/images/367275/FtgabYjUD_Xhmne2wsyLPcKqlgCi.png\n      - text: \u8d1f\u8f7d\u5747\u8861\u6570\n        value: 200\n        url: https://user-assets.sxlcdn.com/images/367275/FtgabYjUD_Xhmne2wsyLPcKqlgCi.png\n# -- YAML DELIMITER (1nbbm8) --\n# <data-view.graph-layout-grid\n#   columns="7"\n#   rows="3"\n#   is-reverse\n#   style="width: 960px; height: 600px; display: block; background-color: #1c1e21"\n#   id="brick-1"\n# ></data-view.graph-layout-grid>\n# \n# <script>\n#   const brick_1 = document.getElementById("brick-1");\n#   brick_1.dataSource = [\n#     {\n#       text: "\u8d1f\u8f7d\u5747\u8861\u6570",\n#       value: 200,\n#       url: "https://user-assets.sxlcdn.com/images/367275/FtgabYjUD_Xhmne2wsyLPcKqlgCi.png",\n#     },\n#     {\n#       text: "\u5e94\u7528",\n#       value: 7348,\n#       url: "https://user-assets.sxlcdn.com/images/367275/FtgabYjUD_Xhmne2wsyLPcKqlgCi.png",\n#     },\n#     {\n#       text: "\u5b58\u50a8\u5377\u6570",\n#       value: 638,\n#       url: "https://user-assets.sxlcdn.com/images/367275/FtgabYjUD_Xhmne2wsyLPcKqlgCi.png",\n#     },\n#     {\n#       text: "\u8d1f\u8f7d\u5747\u8861\u6570",\n#       value: 200,\n#       url: "https://user-assets.sxlcdn.com/images/367275/FtgabYjUD_Xhmne2wsyLPcKqlgCi.png",\n#     },\n#     {\n#       text: "\u5e94\u7528",\n#       value: 200,\n#       url: "https://user-assets.sxlcdn.com/images/367275/FtgabYjUD_Xhmne2wsyLPcKqlgCi.png",\n#     },\n#     {\n#       text: "\u5b88\u62a4\u8fdb\u7a0b\u6570",\n#       value: 200,\n#       url: "https://user-assets.sxlcdn.com/images/367275/FtgabYjUD_Xhmne2wsyLPcKqlgCi.png",\n#     },\n#     {\n#       text: "\u8d1f\u8f7d\u5747\u8861\u6570",\n#       value: 200,\n#       url: "https://user-assets.sxlcdn.com/images/367275/FtgabYjUD_Xhmne2wsyLPcKqlgCi.png",\n#     },\n#     {\n#       text: "\u5bb9\u5668\u7ec4\u6570",\n#       value: 200,\n#       url: "https://user-assets.sxlcdn.com/images/367275/FtgabYjUD_Xhmne2wsyLPcKqlgCi.png",\n#     },\n#     {\n#       text: "\u65e0\u72b6\u6001\u670d\u52a1\u6570",\n#       value: 200,\n#       url: "https://user-assets.sxlcdn.com/images/367275/FtgabYjUD_Xhmne2wsyLPcKqlgCi.png",\n#     },\n#     {\n#       text: "\u8d1f\u8f7d\u5747\u8861\u6570",\n#       value: 200,\n#       url: "https://user-assets.sxlcdn.com/images/367275/FtgabYjUD_Xhmne2wsyLPcKqlgCi.png",\n#     },\n#     {\n#       text: "\u8d1f\u8f7d\u5747\u8861\u6570",\n#       value: 200,\n#       url: "https://user-assets.sxlcdn.com/images/367275/FtgabYjUD_Xhmne2wsyLPcKqlgCi.png",\n#     },\n#   ];\n# <\/script>\n# \n')),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)(c.vy.Provider,{value:["DataSourceType"]},(0,a.kt)(l.Z,{properties:[{name:"columns",description:"",type:"number",annotation:{type:"keyword",value:"number"}},{name:"rows",description:"",type:"number",annotation:{type:"keyword",value:"number"}},{name:"isReverse",description:"",type:"boolean",annotation:{type:"keyword",value:"boolean"}},{name:"dataSource",description:"",attribute:!1,type:"DataSourceType[]",annotation:{type:"array",elementType:{type:"reference",typeName:{type:"identifier",name:"DataSourceType"}}}}],mdxType:"BrickDocProperties"})),(0,a.kt)("h2",{id:"type-references"},"Type references"),(0,a.kt)(i.Z,{types:[{type:"typeAlias",name:"DataSourceType",annotation:{type:"intersection",types:[{type:"reference",typeName:{type:"identifier",name:"GraphTextProps"}},{type:"reference",typeName:{type:"identifier",name:"GraphNodeProps"}}]}}],mdxType:"BrickDocTypes"}))}y.isMDXComponent=!0}}]);
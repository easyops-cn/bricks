"use strict";(self.webpackChunkbrick_docs=self.webpackChunkbrick_docs||[]).push([[5926],{42531:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>p,default:()=>m,frontMatter:()=>c,metadata:()=>l,toc:()=>b});var r=t(87462),i=(t(67294),t(3905)),a=t(59263),s=t(20456),o=(t(98277),t(46470),t(10080),t(70516),t(75944),t(4871));const c={description:"<eo-easy-view>"},p=void 0,l={unversionedId:"bricks/containers/eo-easy-view",id:"bricks/containers/eo-easy-view",title:"eo-easy-view",description:"<eo-easy-view>",source:"@site/docs/bricks/containers/eo-easy-view.mdx",sourceDirName:"bricks/containers",slug:"/bricks/containers/eo-easy-view",permalink:"/bricks/containers/eo-easy-view",draft:!1,tags:[],version:"current",frontMatter:{description:"<eo-easy-view>"},sidebar:"docsSidebar",previous:{title:"eo-drawer",permalink:"/bricks/containers/eo-drawer"},next:{title:"eo-flex-layout",permalink:"/bricks/containers/eo-flex-layout"}},d={},b=[{value:"Examples",id:"examples",level:2},{value:"GridAreas &amp; GridTemplateRows",id:"gridareas--gridtemplaterows",level:3},{value:"Grid Template Areas",id:"grid-template-areas",level:3},{value:"Container Style",id:"container-style",level:3},{value:"Properties",id:"properties",level:2}],y={toc:b},g="wrapper";function m(e){let{components:n,...t}=e;return(0,i.kt)(g,(0,r.Z)({},y,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)(a.Z,{name:"eo-easy-view",alias:["containers.easy-view"],mdxType:"BrickTagName"}),(0,i.kt)("p",null,"\u57fa\u4e8e\u7f51\u683c\u7684\u7b80\u6613\u5e03\u5c40\u5bb9\u5668\u3002"),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("h3",{id:"gridareas--gridtemplaterows"},"GridAreas & GridTemplateRows"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"preview",preview:!0},'- brick: style\n  properties:\n    textContent: |\n      .box {\n        width: 100%;\n        height: 100%;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        color: #fff;\n        text-align: center;\n        font-size: 24px;\n      }\n      .a {\n        background: rgb(228, 119, 119);\n      }\n      .b {\n        background: rgb(180, 242, 180);\n      }\n      .c {\n        background: rgb(61, 145, 225);\n      }\n- brick: eo-easy-view\n  properties:\n    gridTemplateRows: "100px 200px"\n    gridTemplateColumns: "repeat(12, 1fr)"\n    gridAreas:\n      a:\n        - 1\n        - 1\n        - 2\n        - 13\n      b:\n        - 2\n        - 1\n        - 3\n        - 5\n      c:\n        - 2\n        - 5\n        - 3\n        - 13\n  slots:\n    a:\n      bricks:\n        - brick: div\n          properties:\n            textContent: A\n            className: box a\n    b:\n      bricks:\n        - brick: div\n          properties:\n            textContent: B\n            className: box b\n    c:\n      bricks:\n        - brick: div\n          properties:\n            textContent: C\n            className: box c\n# -- YAML DELIMITER (1nbbm8) --\n# <style>\n#   .box {\n#     width: 100%;\n#     height: 100%;\n#     display: flex;\n#     justify-content: center;\n#     align-items: center;\n#     color: #fff;\n#     text-align: center;\n#     font-size: 24px;\n#   }\n#   .a {\n#     background: rgb(228, 119, 119);\n#   }\n#   .b {\n#     background: rgb(180, 242, 180);\n#   }\n#   .c {\n#     background: rgb(61, 145, 225);\n#   }\n# </style>\n# <eo-easy-view id="brick-1">\n#   <div slot="a" class="box a">A</div>\n#   <div slot="b" class="box b">B</div>\n#   <div slot="c" class="box c">C</div>\n# </eo-easy-view>\n# \n# <script>\n#   const brick_1 = document.getElementById("brick-1");\n#   brick_1.gridTemplateRows = "100px 200px";\n#   brick_1.gridTemplateColumns = "repeat(12, 1fr)";\n#   brick_1.gridAreas = {\n#     a: [1, 1, 2, 13],\n#     b: [2, 1, 3, 5],\n#     c: [2, 5, 3, 13],\n#   };\n# <\/script>\n# \n')),(0,i.kt)("h3",{id:"grid-template-areas"},"Grid Template Areas"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"preview",preview:!0},'- brick: style\n  properties:\n    containerStyle:\n      height: 300px\n    gridTemplateRows: "100px 100px"\n    textContent: |\n      .box {\n        width: 100%;\n        height: 100%;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        color: #fff;\n        text-align: center;\n        font-size: 24px;\n      }\n      .a {\n        background: rgb(228, 119, 119);\n      }\n      .b {\n        background: rgb(180, 242, 180);\n      }\n      .c {\n        background: rgb(61, 145, 225);\n      }\n      .d {\n        background: rgb(238, 238, 78);\n      }\n- brick: eo-easy-view\n  properties:\n    gridTemplateAreas: |\n      <% \n        [\n          ["a", "a", "a"],\n          ["b", ".", "d"],\n          ["b", "c", "d"],\n        ]\n      %>\n  slots:\n    a:\n      bricks:\n        - brick: div\n          properties:\n            textContent: A\n            className: box a\n    b:\n      bricks:\n        - brick: div\n          properties:\n            textContent: B\n            className: box b\n    c:\n      bricks:\n        - brick: div\n          properties:\n            textContent: C\n            className: box c\n    d:\n      bricks:\n        - brick: div\n          properties:\n            textContent: D\n            className: box d\n# -- YAML DELIMITER (1nbbm8) --\n# <style container-style="[object Object]" grid-template-rows="100px 100px">\n#   .box {\n#     width: 100%;\n#     height: 100%;\n#     display: flex;\n#     justify-content: center;\n#     align-items: center;\n#     color: #fff;\n#     text-align: center;\n#     font-size: 24px;\n#   }\n#   .a {\n#     background: rgb(228, 119, 119);\n#   }\n#   .b {\n#     background: rgb(180, 242, 180);\n#   }\n#   .c {\n#     background: rgb(61, 145, 225);\n#   }\n#   .d {\n#     background: rgb(238, 238, 78);\n#   }\n# </style>\n# <eo-easy-view id="brick-1">\n#   <div slot="a" class="box a">A</div>\n#   <div slot="b" class="box b">B</div>\n#   <div slot="c" class="box c">C</div>\n#   <div slot="d" class="box d">D</div>\n# </eo-easy-view>\n# \n# <script>\n#   const brick_1 = document.getElementById("brick-1");\n#   brick_1.gridTemplateAreas =\n#     \'<% \\n  [\\n    ["a", "a", "a"],\\n    ["b", ".", "d"],\\n    ["b", "c", "d"],\\n  ]\\n%>\\n\';\n# <\/script>\n# \n')),(0,i.kt)("h3",{id:"container-style"},"Container Style"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"preview",preview:!0},'- brick: style\n  properties:\n    textContent: |\n      .box {\n        width: 100%;\n        height: 100%;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        color: #fff;\n        text-align: center;\n        font-size: 24px;\n      }\n      .a {\n        background: rgb(228, 119, 119);\n      }\n      .b {\n        background: rgb(180, 242, 180);\n      }\n      .c {\n        background: rgb(61, 145, 225);\n      }\n- brick: eo-easy-view\n  properties:\n    containerStyle:\n      marginTop: 30px\n      height: 200px\n    gridAreas: |\n      <% \n        {\n          a: [1, 1, 4, 4],\n          b: [1, 4, 3, 13],\n          c: [3, 4, 3, 13],\n        }\n      %>\n  slots:\n    a:\n      bricks:\n        - brick: div\n          properties:\n            textContent: A\n            className: box a\n    b:\n      bricks:\n        - brick: div\n          properties:\n            textContent: B\n            className: box b\n    c:\n      bricks:\n        - brick: div\n          properties:\n            textContent: C\n            className: box c\n# -- YAML DELIMITER (1nbbm8) --\n# <style>\n#   .box {\n#     width: 100%;\n#     height: 100%;\n#     display: flex;\n#     justify-content: center;\n#     align-items: center;\n#     color: #fff;\n#     text-align: center;\n#     font-size: 24px;\n#   }\n#   .a {\n#     background: rgb(228, 119, 119);\n#   }\n#   .b {\n#     background: rgb(180, 242, 180);\n#   }\n#   .c {\n#     background: rgb(61, 145, 225);\n#   }\n# </style>\n# <eo-easy-view id="brick-1">\n#   <div slot="a" class="box a">A</div>\n#   <div slot="b" class="box b">B</div>\n#   <div slot="c" class="box c">C</div>\n# </eo-easy-view>\n# \n# <script>\n#   const brick_1 = document.getElementById("brick-1");\n#   brick_1.containerStyle = {\n#     marginTop: "30px",\n#     height: "200px",\n#   };\n#   brick_1.gridAreas =\n#     "<% \\n  {\\n    a: [1, 1, 4, 4],\\n    b: [1, 4, 3, 13],\\n    c: [3, 4, 3, 13],\\n  }\\n%>\\n";\n# <\/script>\n# \n')),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)(o.vy.Provider,{value:[]},(0,i.kt)(s.Z,{properties:[{name:"gridAreas",description:"\u4ee5\u952e\u503c\u5bf9\u5f62\u5f0f\u5b9a\u4e49\u591a\u4e2a [grid-area](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-area)",attribute:!1,type:"Record<string, (string | number)[]>",annotation:{type:"reference",typeName:{type:"identifier",name:"Record"},typeParameters:{type:"typeParameterInstantiation",params:[{type:"keyword",value:"string"},{type:"array",elementType:{type:"parenthesizedType",annotation:{type:"union",types:[{type:"keyword",value:"string"},{type:"keyword",value:"number"}]}}}]}}},{name:"gridTemplateAreas",description:"\u5b9a\u4e49 [grid-template-areas](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas)",attribute:!1,type:"string[][]",annotation:{type:"array",elementType:{type:"array",elementType:{type:"keyword",value:"string"}}}},{name:"gridTemplateColumns",description:"\u5b9a\u4e49 [grid-template-columns](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns)",attribute:!1,type:"string | string[]",annotation:{type:"union",types:[{type:"keyword",value:"string"},{type:"array",elementType:{type:"keyword",value:"string"}}]}},{name:"gridTemplateRows",description:"\u5b9a\u4e49 [grid-template-rows](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows)",attribute:!1,type:"string | string[]",annotation:{type:"union",types:[{type:"keyword",value:"string"},{type:"array",elementType:{type:"keyword",value:"string"}}]}},{name:"containerStyle",description:"\u5b9a\u4e49\u7f51\u683c\u5bb9\u5668\u7684\u6837\u5f0f",attribute:!1,type:"React.CSSProperties",annotation:{type:"reference",typeName:{type:"qualifiedName",left:{type:"identifier",name:"React"},right:{type:"identifier",name:"CSSProperties"}}}},{name:"styleByAreas",description:"\u5b9a\u4e49\u7f51\u683c\u5185\u5404\u533a\u57df\u7684\u6837\u5f0f",attribute:!1,type:"Record<string, React.CSSProperties>",annotation:{type:"reference",typeName:{type:"identifier",name:"Record"},typeParameters:{type:"typeParameterInstantiation",params:[{type:"keyword",value:"string"},{type:"reference",typeName:{type:"qualifiedName",left:{type:"identifier",name:"React"},right:{type:"identifier",name:"CSSProperties"}}}]}}}],mdxType:"BrickDocProperties"})))}m.isMDXComponent=!0}}]);
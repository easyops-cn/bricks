"use strict";(globalThis.webpackChunk_next_bricks_vs=globalThis.webpackChunk_next_bricks_vs||[]).push([[3104],{7137:(e,t,n)=>{n.d(t,{Vu:()=>s,fE:()=>o,lP:()=>i,yU:()=>r});const r=12,o=18,i=12,s=12},8182:(e,t,n)=>{n.d(t,{I:()=>i,K:()=>r,NS:()=>o});let r=function(e){return e.COPY="COPY",e.COPY_SUCCESS="COPY_SUCCESS",e.COPY_FAILED="COPY_FAILED",e.EXPAND="EXPAND",e.COLLAPSE="COLLAPSE",e}({});const o="bricks/vs/code-editor",i={en:{COPY:"Copy",COPY_SUCCESS:"Copied!",COPY_FAILED:"Copy failed!",EXPAND:"Expand",COLLAPSE:"Collapse"},zh:{COPY:"复制",COPY_SUCCESS:"已复制！",COPY_FAILED:"复制失败！",EXPAND:"展开",COLLAPSE:"收起"}}},9287:(e,t,n)=>{n.d(t,{m:()=>i});var r=n(2329);const o=new Map;function i(e,t){return e.flatMap((e=>{const n=r.Uri.file(`libs/${e.filePath}`).toString(),i=o.get(n);i&&i.forEach((e=>e.dispose()));const s=[t.languageDefaults].map((t=>r.languages.typescript[t].addExtraLib(e.content,n)));return o.set(n,s),s}))}},4929:(e,t,n)=>{n.d(t,{v:()=>g});var r=n(2329),o=n(7176),i=n(739),s=n(6123),a=n.n(s),l=n(4804),d=n(4102),u=n(1968);const c=(e,t,n)=>{const r=[],o=[];let i="",s=n,a=t.startColumn;for(;s>0;){const n=e.getValueInRange({startLineNumber:s,endLineNumber:s,startColumn:0,endColumn:1/0}).match(/^([\s|-]*)(\w+)(?=:)/);if(n){const[,e,s]=n;e.length===t.startColumn-1&&r.unshift(s),e.length<a-1&&(!i&&(i=s),a=e.length,o.unshift(s))}s--}return{curLevelKeys:r,keyList:o,parentKey:i}},g=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,s=arguments.length>3?arguments[3]:void 0;return async(g,m,p)=>{if(n&&n!==(0,l.B)())return{suggestions:[]};const h=s.showDSKey?["CTX.DS","DS"]:[],b=g.getWordUntilPosition(m),{word:C,token:f}=((e,t,n)=>{var r;const o=e.getWordUntilPosition(t),i=e.getValueInRange({startLineNumber:t.lineNumber,endLineNumber:t.lineNumber,startColumn:t.column-o.word.length-1,endColumn:t.column-o.word.length}),s=e.getWordAtPosition({...t,column:t.column-(null==o||null===(r=o.word)||void 0===r?void 0:r.length)-1});let a=null==s?void 0:s.word;if(n.showDSKey&&"DS"===(null==s?void 0:s.word)){const n=e.getWordAtPosition({...t,column:s.startColumn-1});a=`${null==n?void 0:n.word}.${s.word}`}return{word:a,token:i}})(g,m,s),A=g.getValueInRange({startLineNumber:m.lineNumber,endLineNumber:m.lineNumber,startColumn:0,endColumn:1/0}),v={startLineNumber:m.lineNumber,endLineNumber:m.lineNumber,startColumn:b.startColumn,endColumn:b.endColumn},N=1===b.startColumn,{curLevelKeys:S}=c(g,b,g.getLineCount());if("<"===p.triggerCharacter)return"<"!==g.getValueInRange({startLineNumber:m.lineNumber,endLineNumber:m.lineNumber,startColumn:m.column-2,endColumn:m.column+2}).trim()?{suggestions:[]}:{suggestions:[{label:"<% %>",detail:"Evalute Body",kind:r.languages.CompletionItemKind.Value,insertText:"% ${0} %>",insertTextRules:r.languages.CompletionItemInsertTextRule.InsertAsSnippet,range:v},{label:"<%= %>",detail:"Track Evalute Body",kind:r.languages.CompletionItemKind.Value,insertText:"%= ${0} %>",insertTextRules:r.languages.CompletionItemInsertTextRule.InsertAsSnippet,range:v}]};if(N)return{suggestions:(e??[]).filter((e=>!S.includes(e.label))).map((e=>({...e,label:e.label,insertText:e.insertText||e.label,kind:r.languages.CompletionItemKind.Keyword,range:v})))};if(":"===p.triggerCharacter||"."===p.triggerCharacter&&C&&!["CTX","STATE","FN"].concat(h).includes(C)){var x;if("action"===C&&":"===p.triggerCharacter)return{suggestions:null===(x=a()(o,"definitions.BuiltinBrickEventHandler.properties.action.enum")??[])||void 0===x?void 0:x.map((e=>({label:` ${e}`,detail:"event action",kind:r.languages.CompletionItemKind.Keyword,insertText:` ${e}`,range:v})))};const e=null==t?void 0:t[C];let n,i="";if(e&&!Array.isArray(e)?(n=e.completers,i=e.triggerCharacter):n=e,i?p.triggerCharacter===i&&n:n)return{suggestions:(n??[]).map((e=>{const t=":"===i?` ${e.label}`:e.label;return{...e,label:t,kind:r.languages.CompletionItemKind.Value,insertText:e.insertText||t,range:v}}))}}if(((e,t)=>{var n;const o=e.getWordUntilPosition(t),i=e.findPreviousMatch("<%",t,!1,!1,null,!1),s=e.findNextMatch("%>",t,!1,!1,null,!1),a=null==i?void 0:i.range,l=null==s?void 0:s.range;if((null==a?void 0:a.startLineNumber)&&(null==l?void 0:l.startLineNumber)&&a.startLineNumber<=t.lineNumber&&l.endLineNumber>=t.lineNumber&&(null===(n=e.findMatches("<%|%>",new r.Range(a.endLineNumber,a.endColumn,l.startLineNumber,l.startColumn),!0,!1,null,!0))||void 0===n||!n.length)){const{parentKey:n}=c(e,a,a.startLineNumber),{parentKey:r}=c(e,l,l.startLineNumber),{keyList:i}=c(e,o,t.lineNumber);if(n===r&&i.includes(n)||""===n&&""===r)return!0}return!1})(g,m)&&":"!==f){const e=u.b.getInstance(n);return{suggestions:await(0,d.DW)(g,m,e.getState())}}return/^[\s|-]*\w$/.test(A)?{suggestions:i.xN.map((e=>({label:e,insertText:e,kind:r.languages.CompletionItemKind.Keyword,range:v}))).filter((e=>!S.includes(e.label)))}:{suggestions:[]}}}},739:(e,t,n)=>{n.d(t,{X2:()=>o,xN:()=>r});const r=["target","targetRef","properties","events","method","callback","success","error","action","useProvider","useChildren","useBrick","args","if","then"],o='\n  declare const DATA: any;\n  declare const EVENT: CustomEvent<any>;\n  declare const FLAGS: Record<string, boolean>;\n  declare const ANCHOR: string | null;\n  declare const HASH: string;\n  declare namespace INSTALLED_APPS {\n    function has(appId: string):boolean\n  }\n  declare const ITEM: any;\n  declare const INDEX: number;\n  declare const SIZE: number;\n  declare namespace LOCAL_STORAGE {\n    function getItem(name: string): string;\n  }\n  declare namespace SESSION_STORAGE {\n    function getItem(name: string): string\n  }\n  declare const MEDIA: {\n    breakpoint?: "xLarge" | "large" | "medium" | "small" | "xSmall";\n  };\n  declare const MISC: Record<string, any>;\n  declare const PARAMS: URLSearchParams;\n  declare const PROCESSORS: Record<string, Record<string, Function>>;\n  declare const QUERY_ARRAY: Record<string, string[]>;\n  declare const TPL: Record<string, any>;\n  declare const PIPES: Record<string, Function>;\n  declare const _: Record<string, any>;\n  declare namespace SYS {\n    const username:string;\n    const userInstanceId:string;\n    const org:number;\n    const isAdmin: boolean;\n    const accessRule:string;\n    const csrfToken:string;\n    const accessToken:string;\n    const userShowValue:string[];\n  }\n  declare const BASE_URL: string;\n  declare namespace IMG {\n    function get(src: string): string;\n  }\n  declare function I18N(key: string, options?: string | Record<string, unknown>): string;\n  declare function I18N_TEXT(data: {[language: string]: string}):string;\n  declare namespace PERMISSIONS {\n    function check(...action: string[]):boolean;\n  }\n  declare namespace THEME {\n    function getTheme(): "light" | "dark" | "dark-v2";\n  }\n'},4804:(e,t,n)=>{let r;function o(e){r=e}function i(){return r}n.d(t,{B:()=>i,J:()=>o})},1968:(e,t,n)=>{n.d(t,{b:()=>d});var r=n(918),o=n(829),i=n(6121),s=n(2559),a=new WeakMap,l=new WeakMap;class d{static getInstance(e){return(0,s.A)(d,this,u)._[e]||((0,s.A)(d,this,u)._[e]=new d(e)),(0,s.A)(d,this,u)._[e]}constructor(e){(0,r.A)(this,a,void 0),(0,r.A)(this,l,{}),(0,i.A)(a,this,e)}updateState(e){(0,i.A)(l,this,e)}getState(){return(0,o.A)(l,this)}}var u={_:{}}},4102:(e,t,n)=>{n.d(t,{AR:()=>a,DW:()=>l,Eh:()=>u});var r=n(7176),o=n(2445),i=n(2329),s=n(739);function a(e){return"uri"in e&&(e=e.uri),i.Uri.parse(e.toString()+".ts")}async function l(e,t,n){const r=await i.languages.typescript.getJavaScriptWorker(),o=await r(e.uri),s=i.editor.getModel(a(e)),l=e.getOffsetAt(t)-((null==n?void 0:n.offset)??0),d=await o.getCompletionsAtPosition(s.uri.toString(),l),u=e.getWordUntilPosition(t),c=new i.Range(t.lineNumber,u.startColumn,t.lineNumber,u.endColumn);return((null==d?void 0:d.entries)??[]).map((n=>{let r=c;if(n.replacementSpan){const t=e.getPositionAt(n.replacementSpan.start),o=e.getPositionAt(n.replacementSpan.start+n.replacementSpan.length);r=new i.Range(t.lineNumber,t.column,o.lineNumber,o.column)}return{uri:s.uri,position:t,offset:l,range:r,label:n.name,insertText:n.name,sortText:n.sortText,kind:i.languages.CompletionItemKind.Property}}))}function d(){const e=(0,o.get)(r,"definitions.MicroApp.properties"),t=[];for(const[n,r]of Object.entries(e))t.push(`const ${n}: ${r.type??"any"}`);return`\n  declare namespace APP {\n    ${t.join("\n")}\n  }\n  `}function u(){return[d(),s.X2].join("\n")}},1836:(e,t,n)=>{n.d(t,{j:()=>i});var r=n(4586),o=n(2329);class i{constructor(e,t){(0,r.A)(this,"domNode",void 0),(0,r.A)(this,"placeholder",void 0),(0,r.A)(this,"editor",void 0),this.placeholder=e,this.editor=t,this.editor.onDidChangeModelContent((()=>this.onDidChangeModelContent())),this.onDidChangeModelContent()}onDidChangeModelContent(){var e,t,n,r;""===(null===(e=this.editor)||void 0===e||null===(t=e.getValue)||void 0===t?void 0:t.call(e))?this.editor.addContentWidget(this):null===(n=this.editor)||void 0===n||null===(r=n.removeContentWidget)||void 0===r||r.call(n,this)}getId(){return i.ID}getDomNode(){return this.domNode||(this.domNode=document.createElement("div"),this.domNode.style.width="max-content",this.domNode.style.pointerEvents="none",this.domNode.textContent=this.placeholder,this.domNode.style.whiteSpace="break-spaces",this.domNode.style.fontStyle="italic",this.domNode.style.color="rgba(var(--theme-gray-color-rgb-channel), 0.4)",this.editor.applyFontInfo(this.domNode)),this.domNode}getPosition(){return{position:{lineNumber:1,column:1},preference:[o.editor.ContentWidgetPositionPreference.EXACT]}}dispose(){var e,t;null===(e=this.editor)||void 0===e||null===(t=e.removeContentWidget)||void 0===t||t.call(e,this)}}(0,r.A)(i,"ID","editor.widget.placeholderHint")},3271:(e,t,n)=>{n.d(t,{A:()=>a});var r=n(6758),o=n.n(r),i=n(935),s=n.n(i)()(o());s.push([e.id,".highlight{box-shadow:rgb(74 170 189) 0px 1px 0px 0px}.pointer{cursor:pointer}.monaco-editor{outline-width:0}.monaco-editor .overflow-guard{border-radius:var(--antd-button-border-radius);border:1px solid var(--color-border-divider-line)}.code-editor-wrapper.error .overflow-guard{border-color:var(--antd-error-color)}.code-editor-wrapper{position:relative}.code-editor-wrapper.expanded{position:fixed;z-index:1000;top:0;left:0;right:0;bottom:0;padding:20px;-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px)}.code-editor-wrapper.expanded .toolbar{right:40px;top:40px}.code-editor-wrapper:hover .toolbar{display:flex}.toolbar{display:none;position:absolute;top:15px;right:20px;line-height:12px;font-size:12px;text-align:center;gap:10px;box-shadow:none;transition:none;border-radius:50%;border:none}.copy-icon,\n.expand-icon{opacity:0.5;cursor:pointer;font-size:16px}.copy-icon:hover,\n.expand-icon:hover{opacity:1}",""]);const a=s},7716:(e,t,n)=>{n.d(t,{v:()=>i});const r=new RegExp("\\b(MARK:\\s*)(.*)$"),o=/^-+|-+$/g;function i(e,t){var n;let r=[];if(t.findRegionSectionHeaders&&(null===(n=t.foldingRules)||void 0===n?void 0:n.markers)){const n=function(e,t){const n=[],r=e.getLineCount();for(let o=1;o<=r;o++){const r=e.getLineContent(o),i=r.match(t.foldingRules.markers.start);if(i){const e={startLineNumber:o,startColumn:i[0].length+1,endLineNumber:o,endColumn:r.length+1};if(e.endColumn>e.startColumn){const t={range:e,...a(r.substring(i[0].length)),shouldBeInComments:!1};(t.text||t.hasSeparatorLine)&&n.push(t)}}}return n}(e,t);r=r.concat(n)}if(t.findMarkSectionHeaders){const t=function(e){const t=[],n=e.getLineCount();for(let r=1;r<=n;r++)s(e.getLineContent(r),r,t);return t}(e);r=r.concat(t)}return r}function s(e,t,n){r.lastIndex=0;const o=r.exec(e);if(o){const e=o.index+o[1].length+1,r={startLineNumber:t,startColumn:e,endLineNumber:t,endColumn:e+o[2].length};if(r.endColumn>r.startColumn){const e={range:r,...a(o[1]),shouldBeInComments:!0};(e.text||e.hasSeparatorLine)&&n.push(e)}}}function a(e){const t=(e=e.trim()).startsWith("-");return{text:e=e.replace(o,""),hasSeparatorLine:t}}},3569:(e,t,n)=>{var r=n(2591),o=n.n(r),i=n(1740),s=n.n(i),a=n(8128),l=n.n(a),d=n(855),u=n.n(d),c=n(3051),g=n.n(c),m=n(3656),p=n.n(m),h=n(3271),b={};b.styleTagTransform=p(),b.setAttributes=u(),b.insert=l().bind(null,"head"),b.domAPI=s(),b.insertStyleElement=g(),o()(h.A,b),h.A&&h.A.locals&&h.A.locals},1865:(e,t,n)=>{let r;function o(){return r||(r=new Worker(new URL(n.p+n.u(9067),n.b))),r}n.d(t,{e:()=>o})},426:(e,t,n)=>{n.d(t,{N:()=>T});var r,o=n(4635),i=n(918),s=n(5536),a=n(9492),l=n(6121),d=n(829),u=n(2740),c=n(300),g=n(4295);let m,p,h,b,C,f,A,v,N;const{method:S,property:x}=(0,c.createDecorators)();var w=new WeakMap,L=new WeakSet,k=new WeakMap,E=new WeakMap,I=new WeakMap,y=new WeakMap,P=new WeakMap,R=new WeakMap;class T extends g.ReactNextElement{constructor(){super(...arguments),(0,o.A)(this,L),(0,i.A)(this,w,(m(this),!1)),(0,i.A)(this,k,"normal"),(0,i.A)(this,E,!1),(0,i.A)(this,I,p(this)),(0,i.A)(this,y,(h(this),b(this))),(0,i.A)(this,P,(C(this),f(this))),(0,i.A)(this,R,(A(this),v(this))),N(this)}get isFormItemElement(){return!0}set validateState(e){(0,a.A)(L,O,this,e),this._render()}get validateState(){return(0,s.A)(L,this,_)}set notRender(e){this.hidden=e,(0,a.A)(L,D,this,e),this._render()}get notRender(){return(0,s.A)(L,this,M)}get $bindFormItem(){return(0,s.A)(L,this,W)}set $bindFormItem(e){(0,a.A)(L,K,this,e),this._render()}get helpBrick(){return(0,d.A)(I,this)}set helpBrick(e){(0,l.A)(I,this,e)}get labelBrick(){return(0,d.A)(y,this)}set labelBrick(e){(0,l.A)(y,this,e)}get labelCol(){return(0,d.A)(P,this)}set labelCol(e){(0,l.A)(P,this,e)}get wrapperCol(){return(0,d.A)(R,this)}set wrapperCol(e){(0,l.A)(R,this,e)}setNotRender(e){this.notRender=e}getFormElement(){let e=this;for(;(e=e.parentNode)&&e&&!e.isFormElement;);return e}}function M(e){return(0,d.A)(w,e)}function D(e,t){(0,l.A)(w,e,t)}function _(e){return(0,d.A)(k,e)}function O(e,t){(0,l.A)(k,e,t)}function W(e){return(0,d.A)(E,e)}function K(e,t){(0,l.A)(E,e,t)}r=T,[p,h,b,C,f,A,v,N,m]=(0,u.A)(r,[],[[x({attribute:!1}),1,"helpBrick"],[x({attribute:!1}),1,"labelBrick"],[x({attribute:!1}),1,"labelCol"],[x({attribute:!1}),1,"wrapperCol"],[S(),2,"setNotRender"],[S(),2,"getFormElement"]],0,void 0,g.ReactNextElement).e}}]);
//# sourceMappingURL=3104.68f53c7a.js.map
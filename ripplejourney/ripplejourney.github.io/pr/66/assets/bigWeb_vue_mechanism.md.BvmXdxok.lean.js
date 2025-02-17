import{_ as d,o,c as r,aa as l,e as t,a as i,x as n,p as a,L as p}from"./chunks/framework.Dpsg3r-v.js";const u="/preview/ripplejourney/ripplejourney.github.io/pr/66/assets/MTU4NjgzMzgxNDE1OA__586833814158.B5-r3uM7.png",k="/preview/ripplejourney/ripplejourney.github.io/pr/66/assets/MTU4Njg0NTExMjAxOA__586845112018.NADeQb2s.png",c=JSON.parse('{"title":"运行机制概述","description":"","frontmatter":{"sidebar":{"title":"❤运行机制概述","step":9},"isTimeLine":true,"title":"运行机制概述","date":"2020-04-14T00:00:00.000Z","tags":["大前端","vue"],"categories":["大前端"],"head":[["script",{},"!function(p){\\"use strict\\";!function(t){var s=window,e=document,i=p,c=\\"\\".concat(\\"https:\\"===e.location.protocol?\\"https://\\":\\"http://\\",\\"sdk.51.la/js-sdk-pro.min.js\\"),n=e.createElement(\\"script\\"),r=e.getElementsByTagName(\\"script\\")[0];n.type=\\"text/javascript\\",n.setAttribute(\\"charset\\",\\"UTF-8\\"),n.async=!0,n.src=c,n.id=\\"LA_COLLECT\\",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({\\"id\\":\\"Jgmg5avjAUvoyePS\\",\\"ck\\":\\"Jgmg5avjAUvoyePS\\",\\"hashMode\\":true});"]]},"headers":[],"relativePath":"bigWeb/vue/mechanism.md","filePath":"bigWeb/vue/mechanism.md","lastUpdated":1720544135000}'),g={name:"bigWeb/vue/mechanism.md"};function E(h,e,m,y,b,f){const s=p("word");return o(),r("div",{"data-pagefind-body":!0},[e[39]||(e[39]=l("",6)),t("p",null,[e[1]||(e[1]=i("compile编译分为 ")),n(s,{title:"解析"},{default:a(()=>e[0]||(e[0]=[i("parse")])),_:1}),e[2]||(e[2]=i(","))]),n(s,{title:"优化"},{default:a(()=>e[3]||(e[3]=[i("optimize")])),_:1}),e[40]||(e[40]=i(",")),n(s,{title:"生成"},{default:a(()=>e[4]||(e[4]=[i("generate")])),_:1}),e[41]||(e[41]=i("三个阶段，最终需要得到 ")),n(s,{title:"渲染函数"},{default:a(()=>e[5]||(e[5]=[i("render function")])),_:1}),e[42]||(e[42]=t("h3",{id:"parse",tabindex:"-1"},[i("parse "),t("a",{class:"header-anchor",href:"#parse","aria-label":'Permalink to "parse"'},"​")],-1)),t("p",null,[e[7]||(e[7]=i("使用正则表达式等方式")),e[8]||(e[8]=t("code",null,"解析",-1)),e[9]||(e[9]=i("Template模板中的指令,class,style等等数据,形成")),n(s,{title:"Abstract Syntax Tree",content:"抽象语法树"},{default:a(()=>e[6]||(e[6]=[i("AST")])),_:1})]),e[43]||(e[43]=t("h3",{id:"optimize",tabindex:"-1"},[i("optimize "),t("a",{class:"header-anchor",href:"#optimize","aria-label":'Permalink to "optimize"'},"​")],-1)),t("p",null,[e[11]||(e[11]=i("optimize 的主要作用是")),n(s,{content:"这是 Vue 在编译过程中的一处优化"},{default:a(()=>e[10]||(e[10]=[i("标记 static 静态节点")])),_:1}),e[12]||(e[12]=i("，当 ")),e[13]||(e[13]=t("code",null,"update",-1)),e[14]||(e[14]=i(" 更新界面时，会有一个 ")),e[15]||(e[15]=t("code",null,"patch",-1)),e[16]||(e[16]=i(" 的过程， ")),e[17]||(e[17]=t("code",null,"diff",-1)),e[18]||(e[18]=i(" 算法会直接跳过静态节点，从而减少了比较的过程，优化了 ")),e[19]||(e[19]=t("code",null,"patch",-1)),e[20]||(e[20]=i(" 的性能"))]),e[44]||(e[44]=t("h3",{id:"generate",tabindex:"-1"},[i("generate "),t("a",{class:"header-anchor",href:"#generate","aria-label":'Permalink to "generate"'},"​")],-1)),t("p",null,[e[22]||(e[22]=i("generate 是将 ")),e[23]||(e[23]=t("code",null,"AST",-1)),e[24]||(e[24]=i(" 转化成 ")),e[25]||(e[25]=t("code",null,"render function",-1)),e[26]||(e[26]=i(" 字符串的过程，得到结果是 render 的字符串以及 ")),n(s,{title:"静态Render",content:"静态 render 其实跟 render 是一样的，都是执行得到 Vnode,只是静态 render，没有绑定动态数据，即说不会变化"},{default:a(()=>e[21]||(e[21]=[i("staticRenderFns")])),_:1}),e[27]||(e[27]=i("字符串。"))]),t("p",null,[e[29]||(e[29]=i("在经历过 ")),e[30]||(e[30]=t("code",null,"parse",-1)),e[31]||(e[31]=i(",")),e[32]||(e[32]=t("code",null,"optimize",-1)),e[33]||(e[33]=i(",")),e[34]||(e[34]=t("code",null,"generate",-1)),e[35]||(e[35]=i("这三个阶段以后，组件中就会存在渲染 ")),n(s,{title:"Virtual DOM",content:"虚拟DOM是JavaScript对象"},{default:a(()=>e[28]||(e[28]=[i("VNode")])),_:1}),e[36]||(e[36]=i(" 所需的 ")),e[37]||(e[37]=t("code",null,"render function",-1)),e[38]||(e[38]=i(" 了"))]),e[45]||(e[45]=l("",16))])}const A=d(g,[["render",E]]);export{c as __pageData,A as default};

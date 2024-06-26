import{_ as n,o as d,c as o,j as i,a as e,I as t,w as s,a5 as l,D as c}from"./chunks/framework.peDzUFGn.js";const A=JSON.parse('{"title":"运行机制概述","description":"","frontmatter":{"sidebar":{"title":"❤运行机制概述","step":9},"isTimeLine":true,"title":"运行机制概述","date":"2020-04-14T00:00:00.000Z","tags":["大前端","vue"],"categories":["大前端"]},"headers":[],"relativePath":"bigWeb/vue/mechanism.md","filePath":"bigWeb/vue/mechanism.md","lastUpdated":1719297432000}'),r={name:"bigWeb/vue/mechanism.md"},h=l("",6),p=i("h3",{id:"parse",tabindex:"-1"},[e("parse "),i("a",{class:"header-anchor",href:"#parse","aria-label":'Permalink to "parse"'},"​")],-1),k=i("code",null,"解析",-1),E=i("h3",{id:"optimize",tabindex:"-1"},[e("optimize "),i("a",{class:"header-anchor",href:"#optimize","aria-label":'Permalink to "optimize"'},"​")],-1),u=i("code",null,"update",-1),J=i("code",null,"patch",-1),g=i("code",null,"diff",-1),_=i("code",null,"patch",-1),U=i("h3",{id:"generate",tabindex:"-1"},[e("generate "),i("a",{class:"header-anchor",href:"#generate","aria-label":'Permalink to "generate"'},"​")],-1),y=i("code",null,"AST",-1),T=i("code",null,"render function",-1),m=i("code",null,"parse",-1),b=i("code",null,"optimize",-1),f=i("code",null,"generate",-1),V=i("code",null,"render function",-1),D=l("",17);function M(v,I,N,x,C,F){const a=c("word");return d(),o("div",null,[h,i("p",null,[e("compile编译分为 "),t(a,{title:"解析"},{default:s(()=>[e("parse")]),_:1}),e(",")]),t(a,{title:"优化"},{default:s(()=>[e("optimize")]),_:1}),e(","),t(a,{title:"生成"},{default:s(()=>[e("generate")]),_:1}),e("三个阶段，最终需要得到 "),t(a,{title:"渲染函数"},{default:s(()=>[e("render function")]),_:1}),p,i("p",null,[e("使用正则表达式等方式"),k,e("Template模板中的指令,class,style等等数据,形成"),t(a,{title:"Abstract Syntax Tree",content:"抽象语法树"},{default:s(()=>[e("AST")]),_:1})]),E,i("p",null,[e("optimize 的主要作用是"),t(a,{content:"这是 Vue 在编译过程中的一处优化"},{default:s(()=>[e("标记 static 静态节点")]),_:1}),e("，当 "),u,e(" 更新界面时，会有一个 "),J,e(" 的过程， "),g,e(" 算法会直接跳过静态节点，从而减少了比较的过程，优化了 "),_,e(" 的性能")]),U,i("p",null,[e("generate 是将 "),y,e(" 转化成 "),T,e(" 字符串的过程，得到结果是 render 的字符串以及 "),t(a,{title:"静态Render",content:"静态 render 其实跟 render 是一样的，都是执行得到 Vnode,只是静态 render，没有绑定动态数据，即说不会变化"},{default:s(()=>[e("staticRenderFns")]),_:1}),e("字符串。")]),i("p",null,[e("在经历过 "),m,e(","),b,e(","),f,e("这三个阶段以后，组件中就会存在渲染 "),t(a,{title:"Virtual DOM",content:"虚拟DOM是JavaScript对象"},{default:s(()=>[e("VNode")]),_:1}),e(" 所需的 "),V,e(" 了")]),D])}const B=n(r,[["render",M]]);export{A as __pageData,B as default};

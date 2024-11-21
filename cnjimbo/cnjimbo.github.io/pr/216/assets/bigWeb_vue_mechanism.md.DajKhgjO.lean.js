import{_ as l,o,c as d,j as i,a as e,I as t,w as s,a7 as n,D as c}from"./chunks/framework.kR6ics5Q.js";const r="/preview/cnjimbo/cnjimbo.github.io/pr/216/assets/MTU4NjgzMzgxNDE1OA__586833814158.B5-r3uM7.png",p="/preview/cnjimbo/cnjimbo.github.io/pr/216/assets/MTU4Njg0NTExMjAxOA__586845112018.NADeQb2s.png",z=JSON.parse('{"title":"运行机制概述","description":"","frontmatter":{"sidebar":{"title":"❤运行机制概述","step":9},"isTimeLine":true,"title":"运行机制概述","date":"2020-04-14T00:00:00.000Z","tags":["大前端","vue"],"categories":["大前端"]},"headers":[],"relativePath":"bigWeb/vue/mechanism.md","filePath":"bigWeb/vue/mechanism.md","lastUpdated":1720544135000}'),h={name:"bigWeb/vue/mechanism.md"},k=n("",6),u=i("h3",{id:"parse",tabindex:"-1"},[e("parse "),i("a",{class:"header-anchor",href:"#parse","aria-label":'Permalink to "parse"'},"​")],-1),_=i("code",null,"解析",-1),g=i("h3",{id:"optimize",tabindex:"-1"},[e("optimize "),i("a",{class:"header-anchor",href:"#optimize","aria-label":'Permalink to "optimize"'},"​")],-1),E=i("code",null,"update",-1),m=i("code",null,"patch",-1),b=i("code",null,"diff",-1),f=i("code",null,"patch",-1),y=i("h3",{id:"generate",tabindex:"-1"},[e("generate "),i("a",{class:"header-anchor",href:"#generate","aria-label":'Permalink to "generate"'},"​")],-1),v=i("code",null,"AST",-1),V=i("code",null,"render function",-1),x=i("code",null,"parse",-1),T=i("code",null,"optimize",-1),D=i("code",null,"generate",-1),N=i("code",null,"render function",-1),A=n("",16);function P(C,F,S,M,O,j){const a=c("word");return o(),d("div",{"data-pagefind-body":!0},[k,i("p",null,[e("compile编译分为 "),t(a,{title:"解析"},{default:s(()=>[e("parse")]),_:1}),e(",")]),t(a,{title:"优化"},{default:s(()=>[e("optimize")]),_:1}),e(","),t(a,{title:"生成"},{default:s(()=>[e("generate")]),_:1}),e("三个阶段，最终需要得到 "),t(a,{title:"渲染函数"},{default:s(()=>[e("render function")]),_:1}),u,i("p",null,[e("使用正则表达式等方式"),_,e("Template模板中的指令,class,style等等数据,形成"),t(a,{title:"Abstract Syntax Tree",content:"抽象语法树"},{default:s(()=>[e("AST")]),_:1})]),g,i("p",null,[e("optimize 的主要作用是"),t(a,{content:"这是 Vue 在编译过程中的一处优化"},{default:s(()=>[e("标记 static 静态节点")]),_:1}),e("，当 "),E,e(" 更新界面时，会有一个 "),m,e(" 的过程， "),b,e(" 算法会直接跳过静态节点，从而减少了比较的过程，优化了 "),f,e(" 的性能")]),y,i("p",null,[e("generate 是将 "),v,e(" 转化成 "),V,e(" 字符串的过程，得到结果是 render 的字符串以及 "),t(a,{title:"静态Render",content:"静态 render 其实跟 render 是一样的，都是执行得到 Vnode,只是静态 render，没有绑定动态数据，即说不会变化"},{default:s(()=>[e("staticRenderFns")]),_:1}),e("字符串。")]),i("p",null,[e("在经历过 "),x,e(","),T,e(","),D,e("这三个阶段以后，组件中就会存在渲染 "),t(a,{title:"Virtual DOM",content:"虚拟DOM是JavaScript对象"},{default:s(()=>[e("VNode")]),_:1}),e(" 所需的 "),N,e(" 了")]),A])}const B=l(h,[["render",P]]);export{z as __pageData,B as default};

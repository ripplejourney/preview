import{_ as l,o as d,c as o,j as i,a as e,I as t,w as s,a5 as n,D as c}from"./chunks/framework.DO_HVQPQ.js";const r="/preview/cnjimbo/cnjimbo.github.io/pr/151/assets/MTU4NjgzMzgxNDE1OA__586833814158.B5-r3uM7.png?s1=https:/img.cdn.sugarat.top/mdImg/MTU4NjgzMzgxNDE1OA==586833814158",p="/preview/cnjimbo/cnjimbo.github.io/pr/151/assets/MTU4Njg0NTExMjAxOA__586845112018.NADeQb2s.png?s1=https:/img.cdn.sugarat.top/mdImg/MTU4Njg0NTExMjAxOA==586845112018",j=JSON.parse('{"title":"运行机制概述","description":"","frontmatter":{"sidebar":{"title":"❤运行机制概述","step":9},"isTimeLine":true,"title":"运行机制概述","date":"2020-04-14T00:00:00.000Z","tags":["大前端","vue"],"categories":["大前端"]},"headers":[],"relativePath":"bigWeb/vue/mechanism.md","filePath":"bigWeb/vue/mechanism.md","lastUpdated":1719501177000}'),h={name:"bigWeb/vue/mechanism.md"},k=n("",6),g=i("h3",{id:"parse",tabindex:"-1"},[e("parse "),i("a",{class:"header-anchor",href:"#parse","aria-label":'Permalink to "parse"'},"​")],-1),E=i("code",null,"解析",-1),u=i("h3",{id:"optimize",tabindex:"-1"},[e("optimize "),i("a",{class:"header-anchor",href:"#optimize","aria-label":'Permalink to "optimize"'},"​")],-1),J=i("code",null,"update",-1),_=i("code",null,"patch",-1),U=i("code",null,"diff",-1),y=i("code",null,"patch",-1),m=i("h3",{id:"generate",tabindex:"-1"},[e("generate "),i("a",{class:"header-anchor",href:"#generate","aria-label":'Permalink to "generate"'},"​")],-1),T=i("code",null,"AST",-1),b=i("code",null,"render function",-1),f=i("code",null,"parse",-1),M=i("code",null,"optimize",-1),V=i("code",null,"generate",-1),N=i("code",null,"render function",-1),D=n("",16);function x(v,I,A,C,F,S){const a=c("word");return d(),o("div",{"data-pagefind-body":!0,"data-pagefind-meta":"base64:JTdCJTIyc2lkZWJhciUyMiUzQSU3QiUyMnRpdGxlJTIyJTNBJTIyJUUyJTlEJUE0JUU4JUJGJTkwJUU4JUExJThDJUU2JTlDJUJBJUU1JTg4JUI2JUU2JUE2JTgyJUU4JUJGJUIwJTIyJTJDJTIyc3RlcCUyMiUzQTklN0QlMkMlMjJpc1RpbWVMaW5lJTIyJTNBdHJ1ZSUyQyUyMnRpdGxlJTIyJTNBJTIyJUU4JUJGJTkwJUU4JUExJThDJUU2JTlDJUJBJUU1JTg4JUI2JUU2JUE2JTgyJUU4JUJGJUIwJTIyJTJDJTIyZGF0ZSUyMiUzQTE1ODY4MjI0MDAwMDAlMkMlMjJ0YWdzJTIyJTNBJTVCJTIyJUU1JUE0JUE3JUU1JTg5JThEJUU3JUFCJUFGJTIyJTJDJTIydnVlJTIyJTVEJTJDJTIyY2F0ZWdvcmllcyUyMiUzQSU1QiUyMiVFNSVBNCVBNyVFNSU4OSU4RCVFNyVBQiVBRiUyMiU1RCU3RA=="},[k,i("p",null,[e("compile编译分为 "),t(a,{title:"解析"},{default:s(()=>[e("parse")]),_:1}),e(",")]),t(a,{title:"优化"},{default:s(()=>[e("optimize")]),_:1}),e(","),t(a,{title:"生成"},{default:s(()=>[e("generate")]),_:1}),e("三个阶段，最终需要得到 "),t(a,{title:"渲染函数"},{default:s(()=>[e("render function")]),_:1}),g,i("p",null,[e("使用正则表达式等方式"),E,e("Template模板中的指令,class,style等等数据,形成"),t(a,{title:"Abstract Syntax Tree",content:"抽象语法树"},{default:s(()=>[e("AST")]),_:1})]),u,i("p",null,[e("optimize 的主要作用是"),t(a,{content:"这是 Vue 在编译过程中的一处优化"},{default:s(()=>[e("标记 static 静态节点")]),_:1}),e("，当 "),J,e(" 更新界面时，会有一个 "),_,e(" 的过程， "),U,e(" 算法会直接跳过静态节点，从而减少了比较的过程，优化了 "),y,e(" 的性能")]),m,i("p",null,[e("generate 是将 "),T,e(" 转化成 "),b,e(" 字符串的过程，得到结果是 render 的字符串以及 "),t(a,{title:"静态Render",content:"静态 render 其实跟 render 是一样的，都是执行得到 Vnode,只是静态 render，没有绑定动态数据，即说不会变化"},{default:s(()=>[e("staticRenderFns")]),_:1}),e("字符串。")]),i("p",null,[e("在经历过 "),f,e(","),M,e(","),V,e("这三个阶段以后，组件中就会存在渲染 "),t(a,{title:"Virtual DOM",content:"虚拟DOM是JavaScript对象"},{default:s(()=>[e("VNode")]),_:1}),e(" 所需的 "),N,e(" 了")]),D])}const z=l(h,[["render",x]]);export{j as __pageData,z as default};

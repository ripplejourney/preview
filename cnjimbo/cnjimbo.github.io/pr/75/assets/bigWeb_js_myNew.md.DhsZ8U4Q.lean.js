import{j as t,b as l,c as k,q as i,K as n,w as h,f as s,a7 as p,F as e}from"./chunks/framework.ZqEBA1ag.js";const b=JSON.parse('{"title":"实现一下new","description":"","frontmatter":{"sidebar":{"title":"简单-new实现","step":5},"isTimeLine":true,"title":"实现一下new","date":"2020-09-05T00:00:00.000Z","tags":["手撕代码","javascript"],"categories":["手撕代码"]},"headers":[],"relativePath":"bigWeb/js/myNew.md","filePath":"bigWeb/js/myNew.md","lastUpdated":1718447701000}'),r={name:"bigWeb/js/myNew.md"},E=i("h1",{id:"实现一下new",tabindex:"-1"},[s("实现一下new "),i("a",{class:"header-anchor",href:"#实现一下new","aria-label":'Permalink to "实现一下new"'},"​")],-1),d=i("h2",{id:"new命令原理",tabindex:"-1"},[s("new命令原理 "),i("a",{class:"header-anchor",href:"#new命令原理","aria-label":'Permalink to "new命令原理"'},"​")],-1),g=i("p",null,"使用new命令时，它后面的函数依次执行下面的步骤",-1),y=p("",22);function c(o,F,A,D,C,u){const a=e("font");return l(),k("div",null,[E,d,g,i("ol",null,[i("li",null,[n(a,{color:"#3eaf7c",weight:"bold"},{default:h(()=>[s("**创建空对象**")]),_:1}),s("：创建一个空对象，作为将要返回的对象实例")]),i("li",null,[n(a,{color:"#3eaf7c"},{default:h(()=>[s("**连接原型**")]),_:1}),s("：将这个空对象的原型，指向构造函数的prototype属性")]),i("li",null,[n(a,{color:"#3eaf7c"},{default:h(()=>[s("**绑定 this**")]),_:1}),s("：将这个空对象赋值给函数内部的this关键字")]),i("li",null,[n(a,{color:"#3eaf7c"},{default:h(()=>[s("**返回新对象**")]),_:1}),s("：开始执行构造函数内部的代码")])]),y])}const B=t(r,[["render",c]]);export{b as __pageData,B as default};

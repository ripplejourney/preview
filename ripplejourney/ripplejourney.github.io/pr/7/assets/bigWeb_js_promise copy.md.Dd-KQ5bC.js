import{_ as i,o as r,c as t,aa as a}from"./chunks/framework.CSef_RB6.js";const p=JSON.parse('{"title":"Promise的特点是什么，分别有什么优缺点？什么是Promise链？Promise构造函数执行和then函数执行有什么区别？","description":"","frontmatter":{"isTimeLine":true,"title":"Promise的特点是什么，分别有什么优缺点？什么是Promise链？Promise构造函数执行和then函数执行有什么区别？","date":"2020-03-08T00:00:00.000Z","tags":["面试","javascript"],"categories":["面试"],"head":[["script",{},"!function(p){\\"use strict\\";!function(t){var s=window,e=document,i=p,c=\\"\\".concat(\\"https:\\"===e.location.protocol?\\"https://\\":\\"http://\\",\\"sdk.51.la/js-sdk-pro.min.js\\"),n=e.createElement(\\"script\\"),r=e.getElementsByTagName(\\"script\\")[0];n.type=\\"text/javascript\\",n.setAttribute(\\"charset\\",\\"UTF-8\\"),n.async=!0,n.src=c,n.id=\\"LA_COLLECT\\",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({\\"id\\":\\"Jgmg5avjAUvoyePS\\",\\"ck\\":\\"Jgmg5avjAUvoyePS\\",\\"hashMode\\":true});"]]},"headers":[],"relativePath":"bigWeb/js/promise copy.md","filePath":"bigWeb/js/promise copy.md","lastUpdated":1719297432000}'),o={name:"bigWeb/js/promise copy.md"};function s(l,e,n,m,h,c){return r(),t("div",{"data-pagefind-body":!0},e[0]||(e[0]=[a('<h1 id="promise-的特点是什么-分别有什么优缺点-什么是-promise-链-promise-构造函数执行和-then-函数执行有什么区别" tabindex="-1">Promise 的特点是什么，分别有什么优缺点？什么是 Promise 链？Promise 构造函数执行和 then 函数执行有什么区别？ <a class="header-anchor" href="#promise-的特点是什么-分别有什么优缺点-什么是-promise-链-promise-构造函数执行和-then-函数执行有什么区别" aria-label="Permalink to &quot;Promise 的特点是什么，分别有什么优缺点？什么是 Promise 链？Promise 构造函数执行和 then 函数执行有什么区别？&quot;">​</a></h1><h2 id="特点" tabindex="-1">特点 <a class="header-anchor" href="#特点" aria-label="Permalink to &quot;特点&quot;">​</a></h2><ul><li>三种状态 <ul><li>pending:等待</li><li>resolved:完成</li><li>rejectde:拒绝</li></ul></li><li>一旦从等待状态变成为其他状态就永远不能更改状态</li></ul><h2 id="优点" tabindex="-1">优点 <a class="header-anchor" href="#优点" aria-label="Permalink to &quot;优点&quot;">​</a></h2><ul><li>很好的解决了回调地狱的问题</li></ul><h2 id="缺点" tabindex="-1">缺点 <a class="header-anchor" href="#缺点" aria-label="Permalink to &quot;缺点&quot;">​</a></h2><ul><li>无法取消</li><li>错误需要通过回调函数捕获catch</li></ul><h2 id="promise链" tabindex="-1">Promise链 <a class="header-anchor" href="#promise链" aria-label="Permalink to &quot;Promise链&quot;">​</a></h2><ul><li>每次调用 then 之后返回的都是一个全新的Promise,因此又可以接着使用then方法,由此形成promise链</li><li>在 then 中 使用了 return，那么 return 的值会被 Promise.resolve() 包装</li></ul><h2 id="promise-构造函数执行和-then-函数执行有什么区别" tabindex="-1">Promise 构造函数执行和 then 函数执行有什么区别 <a class="header-anchor" href="#promise-构造函数执行和-then-函数执行有什么区别" aria-label="Permalink to &quot;Promise 构造函数执行和 then 函数执行有什么区别&quot;">​</a></h2><ul><li>构造 Promise 的时候，构造函数内部的代码是立即执行的</li><li>then函数在promise.resolve()执行后执行</li></ul>',11)]))}const u=i(o,[["render",s]]);export{p as __pageData,u as default};

import{_ as t,o as e,c as i,a4 as s}from"./chunks/framework.B3lNyzd-.js";const p=JSON.parse('{"title":"async及await的特点，它们的优点和缺点分别是什么？await原理是什么？","description":"","frontmatter":{"isTimeLine":true,"title":"async及await的特点，它们的优点和缺点分别是什么？await原理是什么？","date":"2020-04-14T00:00:00.000Z","tags":["面试","javascript"],"categories":["面试"],"head":[["script",{},"!function(p){\\"use strict\\";!function(t){var s=window,e=document,i=p,c=\\"\\".concat(\\"https:\\"===e.location.protocol?\\"https://\\":\\"http://\\",\\"sdk.51.la/js-sdk-pro.min.js\\"),n=e.createElement(\\"script\\"),r=e.getElementsByTagName(\\"script\\")[0];n.type=\\"text/javascript\\",n.setAttribute(\\"charset\\",\\"UTF-8\\"),n.async=!0,n.src=c,n.id=\\"LA_COLLECT\\",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({\\"id\\":\\"Jgmg5avjAUvoyePS\\",\\"ck\\":\\"Jgmg5avjAUvoyePS\\",\\"hashMode\\":true});"]]},"headers":[],"relativePath":"bigWeb/js/asyncawait.md","filePath":"bigWeb/js/asyncawait.md","lastUpdated":1719297432000}'),r={name:"bigWeb/js/asyncawait.md"};function n(o,a,c,l,d,h){return e(),i("div",{"data-pagefind-body":!0},a[0]||(a[0]=[s('<h1 id="async-及-await-的特点-它们的优点和缺点分别是什么-await-原理是什么" tabindex="-1">async 及 await 的特点，它们的优点和缺点分别是什么？await 原理是什么？ <a class="header-anchor" href="#async-及-await-的特点-它们的优点和缺点分别是什么-await-原理是什么" aria-label="Permalink to &quot;async 及 await 的特点，它们的优点和缺点分别是什么？await 原理是什么？&quot;">​</a></h1><h2 id="特点" tabindex="-1">特点 <a class="header-anchor" href="#特点" aria-label="Permalink to &quot;特点&quot;">​</a></h2><ul><li>一个函数如果加上async 那么其返回值是Promise,async 就是将函数返回值使用 Promise.resolve() 进行包裹,和then处理返回值一样</li><li>await只能配合async使用 不能单独使用</li></ul><h2 id="优点" tabindex="-1">优点 <a class="header-anchor" href="#优点" aria-label="Permalink to &quot;优点&quot;">​</a></h2><ul><li>相比于Promise来说优势在于能够写出更加清晰的调用链,并且也能优雅的解决回调地狱的问题</li></ul><h2 id="缺点" tabindex="-1">缺点 <a class="header-anchor" href="#缺点" aria-label="Permalink to &quot;缺点&quot;">​</a></h2><ul><li>因为await将异步代码变成了同步代码,如果多个异步之间没有关系,会导致性能降低</li></ul><h2 id="原理" tabindex="-1">原理 <a class="header-anchor" href="#原理" aria-label="Permalink to &quot;原理&quot;">​</a></h2><ul><li>await 就是 generator 加上 Promise 的语法糖，且内部实现了自动执行 generator</li></ul>',9)]))}const m=t(r,[["render",n]]);export{p as __pageData,m as default};

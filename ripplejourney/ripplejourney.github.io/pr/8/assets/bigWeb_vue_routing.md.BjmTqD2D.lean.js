import{_ as t,o as a,c as s,aa as o}from"./chunks/framework.CWE6ArTt.js";const u=JSON.parse('{"title":"路由原理","description":"","frontmatter":{"sidebar":{"title":"路由原理","step":1},"isTimeLine":true,"title":"路由原理","date":"2020-05-03T00:00:00.000Z","tags":["大前端","vue"],"categories":["大前端"],"head":[["script",{},"!function(p){\\"use strict\\";!function(t){var s=window,e=document,i=p,c=\\"\\".concat(\\"https:\\"===e.location.protocol?\\"https://\\":\\"http://\\",\\"sdk.51.la/js-sdk-pro.min.js\\"),n=e.createElement(\\"script\\"),r=e.getElementsByTagName(\\"script\\")[0];n.type=\\"text/javascript\\",n.setAttribute(\\"charset\\",\\"UTF-8\\"),n.async=!0,n.src=c,n.id=\\"LA_COLLECT\\",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({\\"id\\":\\"Jgmg5avjAUvoyePS\\",\\"ck\\":\\"Jgmg5avjAUvoyePS\\",\\"hashMode\\":true});"]]},"headers":[],"relativePath":"bigWeb/vue/routing.md","filePath":"bigWeb/vue/routing.md","lastUpdated":1719297432000}'),r={name:"bigWeb/vue/routing.md"};function i(h,e,n,c,d,p){return a(),s("div",{"data-pagefind-body":!0},e[0]||(e[0]=[o('<h1 id="路由原理" tabindex="-1">路由原理 <a class="header-anchor" href="#路由原理" aria-label="Permalink to &quot;路由原理&quot;">​</a></h1><ul><li>hash模式</li><li>history模式</li></ul><h2 id="hash" tabindex="-1">hash <a class="header-anchor" href="#hash" aria-label="Permalink to &quot;hash&quot;">​</a></h2><p>浏览器URL中会显示<code>#</code>，<code>#</code>以及<code>#</code>后面的字符称之为hash，可以用window.location.hash读取</p><p>监听hash模式用的是hashchange <strong>特点</strong></p><ul><li>hash虽然在URL中，但不被包括在HTTP请求中</li><li>hash不会重加载页面</li></ul><h2 id="history" tabindex="-1">history <a class="header-anchor" href="#history" aria-label="Permalink to &quot;history&quot;">​</a></h2><p>history采用HTML5的新特性,且提供了两个新方法:<code>pushState()</code>,<code>replaceState()</code>,可以对浏览器历史记录栈进行修改,只是当它们执行修改时，虽然改变了当前的 URL，但浏览器不会立即向后端发送请求</p><p>监听history模式用的是popstate</p><p>前端的 URL 必须和实际向后端发起请求的 URL 一致</p><div class="tip custom-block"><p class="custom-block-title">参考</p><p><a href="https://www.jianshu.com/p/f660804d8592" target="_blank" rel="noreferrer">简书:vue路由的实现原理</a><br><a href="https://www.jianshu.com/p/e8bffc26293f" target="_blank" rel="noreferrer">简书:vue路由的两种模式，hash与history原理</a></p></div>',11)]))}const f=t(r,[["render",i]]);export{u as __pageData,f as default};

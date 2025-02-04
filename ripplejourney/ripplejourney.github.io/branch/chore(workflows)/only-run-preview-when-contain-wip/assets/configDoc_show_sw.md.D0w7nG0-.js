import{_ as t,o as a,c as r,a4 as o}from"./chunks/framework.Cx9DlVBJ.js";const m=JSON.parse('{"title":"🤔为什么需要手动刷新本站点","description":"","frontmatter":{"isTimeLine":true,"title":"🤔为什么需要手动刷新本站点","date":"2020-11-28T00:00:00.000Z","tags":["大前端"],"categories":["其它"],"head":[["script",{},"!function(p){\\"use strict\\";!function(t){var s=window,e=document,i=p,c=\\"\\".concat(\\"https:\\"===e.location.protocol?\\"https://\\":\\"http://\\",\\"sdk.51.la/js-sdk-pro.min.js\\"),n=e.createElement(\\"script\\"),r=e.getElementsByTagName(\\"script\\")[0];n.type=\\"text/javascript\\",n.setAttribute(\\"charset\\",\\"UTF-8\\"),n.async=!0,n.src=c,n.id=\\"LA_COLLECT\\",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({\\"id\\":\\"Jgmg5avjAUvoyePS\\",\\"ck\\":\\"Jgmg5avjAUvoyePS\\",\\"hashMode\\":true});"]]},"headers":[],"relativePath":"_configDoc/show/sw.md","filePath":"_configDoc/show/sw.md","lastUpdated":1737082801000}'),s={name:"_configDoc/show/sw.md"};function i(n,e,c,p,l,d){return a(),r("div",{"data-pagefind-body":!0},e[0]||(e[0]=[o('<h1 id="🤔为什么需要手动刷新本站点" tabindex="-1">🤔为什么需要手动刷新本站点 <a class="header-anchor" href="#🤔为什么需要手动刷新本站点" aria-label="Permalink to &quot;🤔为什么需要手动刷新本站点&quot;">​</a></h1><p>当你访问站点时，如发现页面右下角有这个小窗时，请记得点一下</p><div><img width="400px;" src="https://img.cdn.sugarat.top/mdImg/MTYwNjU0NzUyMDQwNg==606547520406" alt="示例"></div><h2 id="为什么🤔" tabindex="-1">为什么🤔 <a class="header-anchor" href="#为什么🤔" aria-label="Permalink to &quot;为什么🤔&quot;">​</a></h2><p>网站接入了资源离线化方案 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Service_Worker_API" target="_blank" rel="noreferrer">ServiceWorker</a></p><p>通俗讲就是首次联网访问后，浏览器会把资源文件都缓存起来，用户断网后仍能访问本站点（需要用户的浏览器支持 ServiceWorker）</p><p>能提升用户的阅读体验，利用缓存也能大幅提高页面加载速率</p><h2 id="如何查看是否支持🤪" tabindex="-1">如何查看是否支持🤪 <a class="header-anchor" href="#如何查看是否支持🤪" aria-label="Permalink to &quot;如何查看是否支持🤪&quot;">​</a></h2><ol><li><p>通过<a href="https://caniuse.com/?search=serviceworker" target="_blank" rel="noreferrer">CAN I USE</a>查询自己的终端是否支持</p></li><li><p>\b\b可在DevTools(开发者调试工具) 中的 Application 面板的 ServiceWorkers的侧边栏中 看到如下内容</p></li></ol><p><img src="https://img.cdn.sugarat.top/mdImg/MTYwNjU0OTYzNDg5NQ==606549634895" alt="图片" loading="lazy"></p><ul><li>绿色的表示是目前正在使用的sw.js(缓存控制文件)版本</li><li>橙色表示已经就绪的新版本内容，等待被载入使用</li></ul><p>💡1. 用户可以通过弹窗的引导，主动载入最新的内容</p><p>💡2. <strong>完全</strong>退出浏览器，重新访问本站点</p><p>以上两种方式都可实现最新内容的加载</p>',14)]))}const g=t(s,[["render",i]]);export{m as __pageData,g as default};

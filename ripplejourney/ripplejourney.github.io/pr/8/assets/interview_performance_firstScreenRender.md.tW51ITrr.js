import{_ as t,o as a,c as i,aa as r}from"./chunks/framework.CWE6ArTt.js";const u=JSON.parse('{"title":"如何加快首屏渲染?","description":"","frontmatter":{"isTimeLine":true,"title":"如何加快首屏渲染?","date":"2020-03-31T00:00:00.000Z","tags":["面试","性能优化"],"categories":["面试"],"head":[["script",{},"!function(p){\\"use strict\\";!function(t){var s=window,e=document,i=p,c=\\"\\".concat(\\"https:\\"===e.location.protocol?\\"https://\\":\\"http://\\",\\"sdk.51.la/js-sdk-pro.min.js\\"),n=e.createElement(\\"script\\"),r=e.getElementsByTagName(\\"script\\")[0];n.type=\\"text/javascript\\",n.setAttribute(\\"charset\\",\\"UTF-8\\"),n.async=!0,n.src=c,n.id=\\"LA_COLLECT\\",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({\\"id\\":\\"Jgmg5avjAUvoyePS\\",\\"ck\\":\\"Jgmg5avjAUvoyePS\\",\\"hashMode\\":true});"]]},"headers":[],"relativePath":"interview/performance/firstScreenRender.md","filePath":"interview/performance/firstScreenRender.md","lastUpdated":1719297432000}'),n={name:"interview/performance/firstScreenRender.md"};function l(s,e,o,c,d,h){return a(),i("div",{"data-pagefind-body":!0},e[0]||(e[0]=[r('<h1 id="如何加快首屏渲染" tabindex="-1">如何加快首屏渲染? <a class="header-anchor" href="#如何加快首屏渲染" aria-label="Permalink to &quot;如何加快首屏渲染?&quot;">​</a></h1><h2 id="降低请求数量" tabindex="-1">降低请求数量 <a class="header-anchor" href="#降低请求数量" aria-label="Permalink to &quot;降低请求数量&quot;">​</a></h2><ul><li>合并资源,减少http请求数目</li><li>资源懒加载</li><li>minify / gzip 压缩</li></ul><h2 id="加快请求速度" tabindex="-1">加快请求速度 <a class="header-anchor" href="#加快请求速度" aria-label="Permalink to &quot;加快请求速度&quot;">​</a></h2><ul><li>预解析DNS</li><li>CDN分发静态资源</li><li>减少域名数</li><li>并行http请求</li></ul><h2 id="使用缓存" tabindex="-1">使用缓存 <a class="header-anchor" href="#使用缓存" aria-label="Permalink to &quot;使用缓存&quot;">​</a></h2><ul><li>HTTP缓存</li></ul><h2 id="渲染优化" tabindex="-1">渲染优化 <a class="header-anchor" href="#渲染优化" aria-label="Permalink to &quot;渲染优化&quot;">​</a></h2><ul><li>减少首屏加载的内容</li><li>拆分JS,使用异步(async/defer)加载</li><li>css优化</li><li>合理的加载顺序</li><li>服务端渲染</li></ul>',9)]))}const f=t(n,[["render",l]]);export{u as __pageData,f as default};

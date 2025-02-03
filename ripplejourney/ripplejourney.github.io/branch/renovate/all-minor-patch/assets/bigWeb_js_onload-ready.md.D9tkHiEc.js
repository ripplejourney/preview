import{_ as a,o,c as t,a4 as d}from"./chunks/framework.B_LsCg9l.js";const m=JSON.parse('{"title":"window.onload与document.ready执行顺序","description":"","frontmatter":{"isTimeLine":true,"title":"window.onload与document.ready执行顺序","date":"2020-05-03T00:00:00.000Z","tags":["面试","javascript"],"categories":["面试"],"head":[["script",{},"!function(p){\\"use strict\\";!function(t){var s=window,e=document,i=p,c=\\"\\".concat(\\"https:\\"===e.location.protocol?\\"https://\\":\\"http://\\",\\"sdk.51.la/js-sdk-pro.min.js\\"),n=e.createElement(\\"script\\"),r=e.getElementsByTagName(\\"script\\")[0];n.type=\\"text/javascript\\",n.setAttribute(\\"charset\\",\\"UTF-8\\"),n.async=!0,n.src=c,n.id=\\"LA_COLLECT\\",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({\\"id\\":\\"Jgmg5avjAUvoyePS\\",\\"ck\\":\\"Jgmg5avjAUvoyePS\\",\\"hashMode\\":true});"]]},"headers":[],"relativePath":"bigWeb/js/onload-ready.md","filePath":"bigWeb/js/onload-ready.md","lastUpdated":1719297432000}'),n={name:"bigWeb/js/onload-ready.md"};function r(s,e,i,c,l,p){return o(),t("div",{"data-pagefind-body":!0},e[0]||(e[0]=[d('<h1 id="window-onload与document-ready执行顺序" tabindex="-1">window.onload与document.ready执行顺序 <a class="header-anchor" href="#window-onload与document-ready执行顺序" aria-label="Permalink to &quot;window.onload与document.ready执行顺序&quot;">​</a></h1><h2 id="onload" tabindex="-1">onload <a class="header-anchor" href="#onload" aria-label="Permalink to &quot;onload&quot;">​</a></h2><blockquote><p>方法用于在网页加载完毕后立刻执行的操作，即当 HTML 文档加载完毕后，立刻执行某个方法</p></blockquote><p>指示页面包含图片等文件在内的所有元素都加载完成</p><h2 id="ready" tabindex="-1">ready <a class="header-anchor" href="#ready" aria-label="Permalink to &quot;ready&quot;">​</a></h2><blockquote><p>在DOM完全就绪时就可以被调用</p></blockquote><p>表示文档结构已经加载完成(不包含图片等非文字媒体文件)</p><p><strong>结论</strong> 先执行document.ready,后执行window.onload</p><div class="tip custom-block"><p class="custom-block-title">参考</p><p><a href="https://www.cnblogs.com/shcrk/p/9256308.html" target="_blank" rel="noreferrer">博客园:细说document.ready和window.onload</a></p></div>',9)]))}const h=a(n,[["render",r]]);export{m as __pageData,h as default};

import{j as a,b as o,c as e,a7 as t}from"./chunks/framework.B1dvzmxC.js";const m=JSON.parse('{"title":"window.onload与document.ready执行顺序","description":"","frontmatter":{"isTimeLine":true,"title":"window.onload与document.ready执行顺序","date":"2020-05-03T00:00:00.000Z","tags":["面试","javascript"],"categories":["面试"]},"headers":[],"relativePath":"bigWeb/js/onload-ready.md","filePath":"bigWeb/js/onload-ready.md","lastUpdated":1718447701000}'),d={name:"bigWeb/js/onload-ready.md"},n=t('<h1 id="window-onload与document-ready执行顺序" tabindex="-1">window.onload与document.ready执行顺序 <a class="header-anchor" href="#window-onload与document-ready执行顺序" aria-label="Permalink to &quot;window.onload与document.ready执行顺序&quot;">​</a></h1><h2 id="onload" tabindex="-1">onload <a class="header-anchor" href="#onload" aria-label="Permalink to &quot;onload&quot;">​</a></h2><blockquote><p>方法用于在网页加载完毕后立刻执行的操作，即当 HTML 文档加载完毕后，立刻执行某个方法</p></blockquote><p>指示页面包含图片等文件在内的所有元素都加载完成</p><h2 id="ready" tabindex="-1">ready <a class="header-anchor" href="#ready" aria-label="Permalink to &quot;ready&quot;">​</a></h2><blockquote><p>在DOM完全就绪时就可以被调用</p></blockquote><p>表示文档结构已经加载完成(不包含图片等非文字媒体文件)</p><p><strong>结论</strong> 先执行document.ready,后执行window.onload</p><div class="tip custom-block"><p class="custom-block-title">参考</p><p><a href="https://www.cnblogs.com/shcrk/p/9256308.html" target="_blank" rel="noreferrer">博客园:细说document.ready和window.onload</a></p></div>',9),r=[n];function l(c,i,s,p,_,u){return o(),e("div",null,r)}const b=a(d,[["render",l]]);export{m as __pageData,b as default};

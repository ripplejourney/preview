import{_ as t,o as a,c as r,a4 as o}from"./chunks/framework.BXol-F5r.js";const s="/preview/ripplejourney/ripplejourney.github.io/branch/fix(workflow)/correct-base-URL/assets/MTY2ODkyMDg3NDEwNg__668920874106.41Lnooaq.png",i="/preview/ripplejourney/ripplejourney.github.io/branch/fix(workflow)/correct-base-URL/assets/MTY3NDQwNDU1NjU2Ng__674404556566.DhrKdcJG.png",p="/preview/ripplejourney/ripplejourney.github.io/branch/fix(workflow)/correct-base-URL/assets/MTY3NDQwNDgxMjIzMA__674404812230.C9qBqEy2.png",k=JSON.parse('{"title":"使用http-proxy-agent出现ECONNRESET error","description":"","frontmatter":{"tag":["技术笔记"],"head":[["script",{},"!function(p){\\"use strict\\";!function(t){var s=window,e=document,i=p,c=\\"\\".concat(\\"https:\\"===e.location.protocol?\\"https://\\":\\"http://\\",\\"sdk.51.la/js-sdk-pro.min.js\\"),n=e.createElement(\\"script\\"),r=e.getElementsByTagName(\\"script\\")[0];n.type=\\"text/javascript\\",n.setAttribute(\\"charset\\",\\"UTF-8\\"),n.async=!0,n.src=c,n.id=\\"LA_COLLECT\\",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({\\"id\\":\\"Jgmg5avjAUvoyePS\\",\\"ck\\":\\"Jgmg5avjAUvoyePS\\",\\"hashMode\\":true});"]]},"headers":[],"relativePath":"technology/study/http-proxy-fail.md","filePath":"technology/study/http-proxy-fail.md","lastUpdated":1720544135000}'),n={name:"technology/study/http-proxy-fail.md"};function c(l,e,h,d,g,y){return a(),r("div",{"data-pagefind-body":!0},e[0]||(e[0]=[o('<h1 id="使用http-proxy-agent出现econnreset-error" tabindex="-1">使用http-proxy-agent出现ECONNRESET error <a class="header-anchor" href="#使用http-proxy-agent出现econnreset-error" aria-label="Permalink to &quot;使用http-proxy-agent出现ECONNRESET error&quot;">​</a></h1><p>之前做了1个下载文件的CLI工具 <a href="https://github.com/ATQQ/tools/blob/main/packages/cli/efst/README.md" target="_blank" rel="noreferrer">efst</a> - <a href="./../works/fs-cli.html">原理文章: 从0-1实现文件下载CLI工具</a></p><p><img src="'+s+'" alt="图片" loading="lazy"></p><p>其中支持设置 代理(proxy) 来下载网络资源</p><h2 id="遇到的问题" tabindex="-1">遇到的问题 <a class="header-anchor" href="#遇到的问题" aria-label="Permalink to &quot;遇到的问题&quot;">​</a></h2><p>当我准备使用代理下载<code>Telegram</code>时，总会卡在<code>99%</code></p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">efst</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://updates.tdesktop.com/tmac/tsetup.4.5.3.dmg</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -o</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http://127.0.0.1:7890</span></span></code></pre></div><p><img src="'+i+'" alt="图片" loading="lazy"></p><p>输出了一下错误，发现报错信息是 <code>ECONNRESET error</code></p><h2 id="解决办法" tabindex="-1">解决办法 <a class="header-anchor" href="#解决办法" aria-label="Permalink to &quot;解决办法&quot;">​</a></h2><p>谷歌关键词 <code>使用http-proxy code: &#39;ECONNRESET&#39;</code>，找到了解决办法 <a href="https://www.jianshu.com/p/7f004a9a02f3" target="_blank" rel="noreferrer">简书：记一次本地错误排查过程：macbook Proxy error: Could not proxy request</a></p><p>添加请求头<code>Connection: &#39;keep-alive&#39;</code>即可</p><p><img src="'+p+'" alt="图片" loading="lazy"></p>',13)]))}const m=t(n,[["render",c]]);export{k as __pageData,m as default};

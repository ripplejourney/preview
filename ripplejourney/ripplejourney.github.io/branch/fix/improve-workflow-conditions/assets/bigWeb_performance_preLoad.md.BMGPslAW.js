import{_ as s,o as i,c as t,a4 as e}from"./chunks/framework.CtKOXDDb.js";const c=JSON.parse('{"title":"资源预加载","description":"","frontmatter":{"isTimeLine":true,"title":"资源预加载","date":"2020-04-14T00:00:00.000Z","tags":["大前端","性能优化"],"categories":["大前端"],"head":[["script",{},"!function(p){\\"use strict\\";!function(t){var s=window,e=document,i=p,c=\\"\\".concat(\\"https:\\"===e.location.protocol?\\"https://\\":\\"http://\\",\\"sdk.51.la/js-sdk-pro.min.js\\"),n=e.createElement(\\"script\\"),r=e.getElementsByTagName(\\"script\\")[0];n.type=\\"text/javascript\\",n.setAttribute(\\"charset\\",\\"UTF-8\\"),n.async=!0,n.src=c,n.id=\\"LA_COLLECT\\",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({\\"id\\":\\"Jgmg5avjAUvoyePS\\",\\"ck\\":\\"Jgmg5avjAUvoyePS\\",\\"hashMode\\":true});"]]},"headers":[],"relativePath":"bigWeb/performance/preLoad.md","filePath":"bigWeb/performance/preLoad.md","lastUpdated":1719297432000}'),n={name:"bigWeb/performance/preLoad.md"};function l(h,a,p,r,o,d){return i(),t("div",{"data-pagefind-body":!0},a[0]||(a[0]=[e('<h1 id="资源预加载" tabindex="-1">资源预加载 <a class="header-anchor" href="#资源预加载" aria-label="Permalink to &quot;资源预加载&quot;">​</a></h1><p>某些资源不需要马上用到，但是希望尽早获取，这时候就可以使用预加载。</p><p>浏览器会将所需的资源提前请求加载到本地，后面在需要用到时就直接从缓存中读取资源。</p><h2 id="使用场景" tabindex="-1">使用场景 <a class="header-anchor" href="#使用场景" aria-label="Permalink to &quot;使用场景&quot;">​</a></h2><p>如果网页在加载完成之前,会长时间的展现为一片空白,此时可以对对一些主要内容进行加载，以提供给用户更好的体验，减少等待的时间。其它资源使用预加载技术。</p><h2 id="可行的方式" tabindex="-1">可行的方式 <a class="header-anchor" href="#可行的方式" aria-label="Permalink to &quot;可行的方式&quot;">​</a></h2><h3 id="_1-link" tabindex="-1">1.link <a class="header-anchor" href="#_1-link" aria-label="Permalink to &quot;1.link&quot;">​</a></h3><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">link</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> rel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;preload&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;sourceName.suffix&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="_2-display-none" tabindex="-1">2.display:none <a class="header-anchor" href="#_2-display-none" aria-label="Permalink to &quot;2.display:none&quot;">​</a></h3><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">img</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xxx.png&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;display:none&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span></code></pre></div><p>加载完成后通过js脚本展示</p>',11)]))}const g=s(n,[["render",l]]);export{c as __pageData,g as default};

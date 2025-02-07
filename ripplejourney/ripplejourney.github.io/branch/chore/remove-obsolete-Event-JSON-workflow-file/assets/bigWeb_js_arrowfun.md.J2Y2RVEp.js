import{_ as a,o as i,c as t,a4 as e}from"./chunks/framework.B3lNyzd-.js";const k=JSON.parse('{"title":"箭头函数?","description":"","frontmatter":{"sidebar":{"title":"箭头函数","step":26},"isTimeLine":true,"title":"箭头函数?","date":"2020-04-14T00:00:00.000Z","tags":["大前端","javascript"],"categories":["大前端"],"head":[["script",{},"!function(p){\\"use strict\\";!function(t){var s=window,e=document,i=p,c=\\"\\".concat(\\"https:\\"===e.location.protocol?\\"https://\\":\\"http://\\",\\"sdk.51.la/js-sdk-pro.min.js\\"),n=e.createElement(\\"script\\"),r=e.getElementsByTagName(\\"script\\")[0];n.type=\\"text/javascript\\",n.setAttribute(\\"charset\\",\\"UTF-8\\"),n.async=!0,n.src=c,n.id=\\"LA_COLLECT\\",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({\\"id\\":\\"Jgmg5avjAUvoyePS\\",\\"ck\\":\\"Jgmg5avjAUvoyePS\\",\\"hashMode\\":true});"]]},"headers":[],"relativePath":"bigWeb/js/arrowfun.md","filePath":"bigWeb/js/arrowfun.md","lastUpdated":1719297432000}'),n={name:"bigWeb/js/arrowfun.md"};function r(l,s,o,p,d,h){return i(),t("div",{"data-pagefind-body":!0},s[0]||(s[0]=[e(`<h1 id="箭头函数" tabindex="-1">箭头函数? <a class="header-anchor" href="#箭头函数" aria-label="Permalink to &quot;箭头函数?&quot;">​</a></h1><h2 id="简单使用" tabindex="-1">简单使用 <a class="header-anchor" href="#简单使用" aria-label="Permalink to &quot;简单使用&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> fn</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 666</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="特点" tabindex="-1">特点 <a class="header-anchor" href="#特点" aria-label="Permalink to &quot;特点&quot;">​</a></h2><ul><li>本身没有this,this由包裹箭头函数的第一个普通函数决定</li><li>箭头函数使用bind,call,this无效</li><li>不能当做构造函数,即不能使用new</li><li>没有arguments对象,可以使用<code>...rest</code>代替</li><li>不能使用yield命令,即不可以用作Generator函数</li></ul>`,5)]))}const u=a(n,[["render",r]]);export{k as __pageData,u as default};

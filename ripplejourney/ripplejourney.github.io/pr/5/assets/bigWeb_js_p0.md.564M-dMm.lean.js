import{_ as i,o as a,c as n,aa as t}from"./chunks/framework.DM5t1E4K.js";const o=JSON.parse('{"title":"学习过程中学到的一些取巧之法","description":"","frontmatter":{"isTimeLine":true,"title":"学习过程中学到的一些取巧之法","date":"2020-04-14T00:00:00.000Z","tags":["大前端","javascript"],"categories":["大前端"],"head":[["script",{},"!function(p){\\"use strict\\";!function(t){var s=window,e=document,i=p,c=\\"\\".concat(\\"https:\\"===e.location.protocol?\\"https://\\":\\"http://\\",\\"sdk.51.la/js-sdk-pro.min.js\\"),n=e.createElement(\\"script\\"),r=e.getElementsByTagName(\\"script\\")[0];n.type=\\"text/javascript\\",n.setAttribute(\\"charset\\",\\"UTF-8\\"),n.async=!0,n.src=c,n.id=\\"LA_COLLECT\\",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({\\"id\\":\\"Jgmg5avjAUvoyePS\\",\\"ck\\":\\"Jgmg5avjAUvoyePS\\",\\"hashMode\\":true});"]]},"headers":[],"relativePath":"bigWeb/js/p0.md","filePath":"bigWeb/js/p0.md","lastUpdated":1719297432000}'),l={name:"bigWeb/js/p0.md"};function e(h,s,p,k,r,d){return a(),n("div",{"data-pagefind-body":!0},s[0]||(s[0]=[t(`<h1 id="学习过程中学到的一些取巧之法" tabindex="-1">学习过程中学到的一些取巧之法 <a class="header-anchor" href="#学习过程中学到的一些取巧之法" aria-label="Permalink to &quot;学习过程中学到的一些取巧之法&quot;">​</a></h1><h2 id="" tabindex="-1">!! <a class="header-anchor" href="#" aria-label="Permalink to &quot;!!&quot;">​</a></h2><p>强制转换为布尔值,代替<code>Boolean(param)</code></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!!</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // false</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!!</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     // false</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!!</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // false</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!!</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">undefined</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // false</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!!</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;abc&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // true</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!!</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     // true</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{}    </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// true</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[]    </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// true</span></span></code></pre></div><h2 id="-1" tabindex="-1">~~ <a class="header-anchor" href="#-1" aria-label="Permalink to &quot;~~&quot;">​</a></h2><p>位运算符<code>~</code>反转所有位,<code>~~</code>代替<code>Math.floor()</code>速度更快</p><div class="tip custom-block"><p class="custom-block-title">规则</p><ul><li>正数:向下取整</li><li>负数:向上取整</li></ul></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 正数</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Math.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">floor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.0123</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 1</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">~~</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.0123</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            // 1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 负数</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Math.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">floor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.123</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// -1</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">~~-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.123</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            // -2</span></span></code></pre></div><h2 id="-2" tabindex="-1">+ <a class="header-anchor" href="#-2" aria-label="Permalink to &quot;+&quot;">​</a></h2><p>字符串转换为数字(整数),代替</p><ul><li>parseInt(str)</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">~~</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;-1&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">       // -1</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">parseInt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;-1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// -1</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">~~</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;1.234&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // 1</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;-1.234&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// -1.234</span></span></code></pre></div>`,12)]))}const g=i(l,[["render",e]]);export{o as __pageData,g as default};

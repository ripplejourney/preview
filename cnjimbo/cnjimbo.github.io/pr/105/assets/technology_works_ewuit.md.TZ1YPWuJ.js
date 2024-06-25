import{_ as s,o as i,c as a,a5 as n}from"./chunks/framework.sUoMLT6e.js";const o=JSON.parse('{"title":"实现一个Web UI检测(视觉走查)工具ing","description":"","frontmatter":{"title":"实现一个Web UI检测(视觉走查)工具ing","date":"2022-07-05T00:00:00.000Z","tags":["技术笔记","个人作品"],"categories":["技术笔记"]},"headers":[],"relativePath":"technology/works/ewuit.md","filePath":"technology/works/ewuit.md","lastUpdated":1670770660000}'),t={name:"technology/works/ewuit.md"},l=n(`<h1 id="实现一个web-ui检测-视觉走查-工具ing" tabindex="-1">实现一个Web UI检测(视觉走查)工具ing <a class="header-anchor" href="#实现一个web-ui检测-视觉走查-工具ing" aria-label="Permalink to &quot;实现一个Web UI检测(视觉走查)工具ing&quot;">​</a></h1><h2 id="演示" tabindex="-1">演示 <a class="header-anchor" href="#演示" aria-label="Permalink to &quot;演示&quot;">​</a></h2><p>废话不多先看效果，目前支持元素的测距，属性查看这两个功能</p><table tabindex="0"><thead><tr><th>H5</th><th>PC</th></tr></thead><tbody><tr><td><img src="https://img.cdn.sugarat.top/mdImg/MTY0OTA4NDk4MDg4Nw==ewuit-h5.gif" width="200px"></td><td><img src="https://img.cdn.sugarat.top/mdImg/MTY0OTA4MzcwNTUzNQ==ewuit-pc.gif" width="300px"></td></tr></tbody></table><h2 id="快速体验" tabindex="-1">快速体验 <a class="header-anchor" href="#快速体验" aria-label="Permalink to &quot;快速体验&quot;">​</a></h2><h3 id="方式1" tabindex="-1">方式1 <a class="header-anchor" href="#方式1" aria-label="Permalink to &quot;方式1&quot;">​</a></h3><p>打开一个网站在控制台中执行</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> url </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;//unpkg.com/ewuit@latest/dist/index.min.js&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> script </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createElement</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;script&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    script.src </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> url;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    document.body.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">appendChild</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(script);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    script.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">onload</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () { </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ewuit</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Ewuit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // open a ui tool</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ewuit.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">openUI</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})();</span></span></code></pre></div><h3 id="方式2" tabindex="-1">方式2 <a class="header-anchor" href="#方式2" aria-label="Permalink to &quot;方式2&quot;">​</a></h3><p>在你的页面模板中加入如下脚本</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> url </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;//unpkg.com/ewuit@latest/dist/index.min.js&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> script </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createElement</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;script&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    script.src </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> url;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    document.body.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">appendChild</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(script);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    script.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">onload</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () { </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ewuit</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Ewuit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // open a ui tool</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ewuit.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">openUI</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="其它方式" tabindex="-1">其它方式 <a class="header-anchor" href="#其它方式" aria-label="Permalink to &quot;其它方式&quot;">​</a></h3><p>参考 Github 上的<a href="https://github.com/ATQQ/ewuit" target="_blank" rel="noreferrer">README</a></p><h2 id="能做什么" tabindex="-1">能做什么 <a class="header-anchor" href="#能做什么" aria-label="Permalink to &quot;能做什么&quot;">​</a></h2><h2 id="背景" tabindex="-1">背景 <a class="header-anchor" href="#背景" aria-label="Permalink to &quot;背景&quot;">​</a></h2><h2 id="功能实现" tabindex="-1">功能实现 <a class="header-anchor" href="#功能实现" aria-label="Permalink to &quot;功能实现&quot;">​</a></h2><h2 id="其它" tabindex="-1">其它 <a class="header-anchor" href="#其它" aria-label="Permalink to &quot;其它&quot;">​</a></h2><div style="display:none;" data-pagefind-meta="base64:JTdCJTIydGl0bGUlMjIlM0ElMjIlRTUlQUUlOUUlRTclOEUlQjAlRTQlQjglODAlRTQlQjglQUFXZWIlMjBVSSVFNiVBMyU4MCVFNiVCNSU4QiglRTglQTclODYlRTglQTclODklRTglQjUlQjAlRTYlOUYlQTUpJUU1JUI3JUE1JUU1JTg1JUI3aW5nJTIyJTJDJTIyZGF0ZSUyMiUzQTE2NTY5NzkyMDAwMDAlMkMlMjJ0YWdzJTIyJTNBJTVCJTIyJUU2JThBJTgwJUU2JTlDJUFGJUU3JUFDJTk0JUU4JUFFJUIwJTIyJTJDJTIyJUU0JUI4JUFBJUU0JUJBJUJBJUU0JUJEJTlDJUU1JTkzJTgxJTIyJTVEJTJDJTIyY2F0ZWdvcmllcyUyMiUzQSU1QiUyMiVFNiU4QSU4MCVFNiU5QyVBRiVFNyVBQyU5NCVFOCVBRSVCMCUyMiU1RCU3RA=="></div>`,18),h=[l];function e(p,k,r,d,E,g){return i(),a("div",null,h)}const y=s(t,[["render",e]]);export{o as __pageData,y as default};

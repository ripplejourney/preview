import{j as s,b as i,c as a,a7 as n}from"./chunks/framework.B1dvzmxC.js";const c=JSON.parse('{"title":"使用Pagefind为VitePress文档添加离线全文搜索能力","description":"Pagefind是基于Rust实现的离线搜索库，检索生成后的HTML页面内容，然后自动构建索引文件，提供搜索使用的API和组件","frontmatter":{"cover":"https://img.cdn.sugarat.top/mdImg/MTY3OTgzOTgxMjU3NQ==679839812575","description":"Pagefind是基于Rust实现的离线搜索库，检索生成后的HTML页面内容，然后自动构建索引文件，提供搜索使用的API和组件","outline":[2,3]},"headers":[],"relativePath":"technology/works/vitepress-plugin-pagefind.md","filePath":"technology/works/vitepress-plugin-pagefind.md","lastUpdated":1717088804000}'),t={name:"technology/works/vitepress-plugin-pagefind.md"},e=n(`<h1 id="使用pagefind为vitepress文档添加离线全文搜索能力" tabindex="-1">使用Pagefind为VitePress文档添加离线全文搜索能力 <a class="header-anchor" href="#使用pagefind为vitepress文档添加离线全文搜索能力" aria-label="Permalink to &quot;使用Pagefind为VitePress文档添加离线全文搜索能力&quot;">​</a></h1><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p><a href="https://vitepress.dev/" target="_blank" rel="noreferrer">VitePress</a> 相信大家都或多或少听说过或者用过了</p><p>默认 UI相比 <a href="https://v2.vuepress.vuejs.org/" target="_blank" rel="noreferrer">VuePress2.x</a> 好看，启动速度也快（由Vite驱动，当然VuePress也可以切换构建引擎至Vite）</p><p>做内容定制也相对简单，笔者的很多静态文档站点（使用VuePress1.x），文章内容多的时候启动非常的慢，于是就从之前的 VuePress 迁移到了 VitePress，并做了一个博客主题 <a href="https://theme.sugarat.top/" target="_blank" rel="noreferrer">@sugarat/theme</a> =&gt; 之前也有过介绍<a href="https://juejin.cn/post/7196517835380293693" target="_blank" rel="noreferrer">一个简约风的VitePress博客主题</a></p><p>但是 VitePress 官方目前还没有内置开箱即用的搜索能力（<a href="https://github.com/vuejs/vitepress/pull/2110" target="_blank" rel="noreferrer">相关PR</a>还在施工中）</p><p><img src="https://img.cdn.sugarat.top/mdImg/MTY3OTgzNzk5NDg2MA==679837994860" alt="" loading="lazy"></p><p>文档里首推使用 <a href="https://docsearch.algolia.com/docs/what-is-docsearch" target="_blank" rel="noreferrer">Algolia DocSearch</a>, 这个需要申请，流程相对较慢，公司内网文档也无法接入使用。</p><p>推荐的另一个方案是使用 <a href="https://github.com/emersonbottero/vitepress-plugin-search" target="_blank" rel="noreferrer">vitepress-plugin-search</a> 基于 <a href="https://github.com/nextapps-de/flexsearch" target="_blank" rel="noreferrer">flexsearch</a> 实现，但是默认的UI较丑（与 Algolia 的UI差距较大），对中文没有提供开箱即用的支持，需要<a href="https://github.com/emersonbottero/vitepress-plugin-search/issues/11" target="_blank" rel="noreferrer">进行一定的配置</a></p><p><img src="https://img.cdn.sugarat.top/mdImg/MTY3OTgzODY5MzUxNQ==679838693515" alt="" loading="lazy"></p><p>目前常用的除了 <code>flexsearch</code>，还有 <a href="https://github.com/lucaong/minisearch" target="_blank" rel="noreferrer">MiniSearch</a></p><p>笔者之前在逛GitHub的时候还发现了一个 <a href="https://github.com/cloudcannon/pagefind" target="_blank" rel="noreferrer">Pagefind</a>（基于Rust实现，检索生成后的HTML页面内容，然后自动构建索引文件）</p><p>感觉挺有意思的，就研究使用了一番，然后将其做成了一个可直接使用的 VItePress 插件（也就是本文将介绍的）</p><p>本文主要演示下 接入步骤和效果，再简单介绍<code>Pagefind</code>，最后讲解一下插件原理</p><h2 id="接入后效果" tabindex="-1">接入后效果 <a class="header-anchor" href="#接入后效果" aria-label="Permalink to &quot;接入后效果&quot;">​</a></h2><p>只需要2步即可完成接入</p><p>① 安装 <a href="https://github.com/cnjimbo/cnjimbo.github.io/tree/master/packages/vitepress-plugin-pagefind" target="_blank" rel="noreferrer">vitepress-plugin-pagefind</a></p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitepress-plugin-pagefind</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># or</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitepress-plugin-pagefind</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># or</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitepress-plugin-pagefind</span></span></code></pre></div><p>② 在<code>.vitepress/config.ts</code>引入使用</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { defineConfig } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vitepress&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { pagefindPlugin } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vitepress-plugin-pagefind&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defineConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  vite:{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    plugins:[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pagefindPlugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><p>UI如下（power by <a href="https://github.com/xiaoluoboding/vue-command-palette" target="_blank" rel="noreferrer">vue-command-palette</a>）</p><table tabindex="0"><thead><tr><th style="text-align:center;">搜索按钮</th><th style="text-align:center;">搜索框</th></tr></thead><tbody><tr><td style="text-align:center;"><img src="https://img.cdn.sugarat.top/mdImg/MTY3OTgxOTEzNjUwMw==679819136503" alt="" loading="lazy"></td><td style="text-align:center;"><img src="https://img.cdn.sugarat.top/mdImg/MTY3OTgxOTE1MDQ0OA==679819150448" alt="" loading="lazy"></td></tr></tbody></table><h2 id="pagefind介绍" tabindex="-1">Pagefind介绍 <a class="header-anchor" href="#pagefind介绍" aria-label="Permalink to &quot;Pagefind介绍&quot;">​</a></h2><blockquote><p><code>Pagefind</code>是一个完全静态的搜索库，旨在在大型网站上表现良好，同时尽可能地减少用户带宽的使用，且不需要进行任何基础设施托管。</p></blockquote><blockquote><p><code>Pagefind</code>在Hugo，Eleventy，Jekyll，Next，Astro，SvelteKit或任何其他SSG之后运行。安装过程始终相同：<code>Pagefind</code>仅需要一个包含构建的静态文件的文件夹，因此在大多数情况下，无需进行配置即可开始使用。</p></blockquote><blockquote><p>索引后，<code>Pagefind</code>会向您的构建文件添加静态搜索包，该包公开了可以在站点任何位置使用的<code>JavaScript</code>搜索API。<code>Pagefind</code>还提供了一个可无需配置即可使用的预构建UI</p></blockquote><p>总结：框架无关，直接解析静态站点的产物，然后生成索引文件，<strong>提供开箱即用的API和组件</strong>，支持开箱即用的多语言站点，零配置</p><h3 id="生成内容索引" tabindex="-1">生成内容索引 <a class="header-anchor" href="#生成内容索引" aria-label="Permalink to &quot;生成内容索引&quot;">​</a></h3><p>可直接通过npx调用，指定构建后的产物目录即可</p><p>以 vitepress 默认产物目录为例</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pagefind</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --source</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docs/.vitepress/dist</span></span></code></pre></div><p>一般毫秒级就完成了页面内容的分析与pagefind需要的资源转换</p><p><img src="https://img.cdn.sugarat.top/mdImg/MTY4MDQwNzk5NzYxNw==680407997617" alt="" loading="lazy"></p><p>默认会自动扫描指定目录下所有的<code>html</code>资源，将带有<code>data-pagefind-body</code>属性的元素作为索引的位置，否则的话使用<code>&lt;body&gt;</code>作为索引位置</p><p>会自动识别 <code>html</code> 中的 <code>lang</code> 属性，使用对应的分词策略处理，目前已经<a href="https://pagefind.app/docs/multilingual/#language-support" target="_blank" rel="noreferrer">内置多种语言支持</a></p><p>生成的相关文件默认在<code>_pagefind</code>目录中，内容如下</p><p><img src="https://img.cdn.sugarat.top/mdImg/MTY4MDQyMjc2NjQ3NQ==680422766475" alt="" loading="lazy"></p><h3 id="使用内置搜索ui" tabindex="-1">使用内置搜索UI <a class="header-anchor" href="#使用内置搜索ui" aria-label="Permalink to &quot;使用内置搜索UI&quot;">​</a></h3><p>在生成索引的过程中，pagefind也会把内置的搜索框UI相关资源放入其中</p><p>在页面中只需要导入相应的<code>js/css</code>资源即可</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">link</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/_pagefind/pagefind-ui.css&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> rel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;stylesheet&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/_pagefind/pagefind-ui.js&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;text/javascript&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;search&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    window.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addEventListener</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;DOMContentLoaded&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">event</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> PagefindUI</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ element: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;#search&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>搜索框样式如下</p><p><img src="https://img.cdn.sugarat.top/mdImg/MTY4MDQyMzM0OTQ2NA==680423349464" alt="" loading="lazy"></p><h3 id="使用js-api" tabindex="-1">使用JS API <a class="header-anchor" href="#使用js-api" aria-label="Permalink to &quot;使用JS API&quot;">​</a></h3><p>默认的搜索框样式不满足的话可以，自定义搜索框逻辑，通过JS API调用搜索能力</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 1. Initializing Pagefind</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> pagefind</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/_pagefind/pagefind.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 2. search docs</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> search</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pagefind.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">search</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;hello&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 3. Loading a result</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> oneResult</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> search.results[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">].</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><p>搜索结果格式如下</p><p><img src="https://img.cdn.sugarat.top/mdImg/MTY4MDQyMzg0NzMxMg==680423847312" alt="" loading="lazy"></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SearchResult</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  url</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  excerpt</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  filters</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Record</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">any</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  meta</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Record</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">any</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  content</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  word_count</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="一些不足" tabindex="-1">一些不足 <a class="header-anchor" href="#一些不足" aria-label="Permalink to &quot;一些不足&quot;">​</a></h3><ul><li>仅针对构建后的产物进行索引，开发环境下无法工作</li><li>对中文和日语等支持相对英语会差一点（区别见下截图） <img src="https://img.cdn.sugarat.top/mdImg/MTY4MDQyNDMyMjk1MA==680424322950" alt="" loading="lazy"></li><li>不支跳转至标题</li></ul><h2 id="插件实现原理解析" tabindex="-1">插件实现原理解析 <a class="header-anchor" href="#插件实现原理解析" aria-label="Permalink to &quot;插件实现原理解析&quot;">​</a></h2><p>这部分主要介绍 <code>vitepress-plugin-pagefind</code> 的关键实现部分（细节可看<a href="https://github.com/cnjimbo/cnjimbo.github.io/tree/master/packages/vitepress-plugin-pagefind" target="_blank" rel="noreferrer">源码</a>，如读者有更好的实现思路可以评论区交流）</p><p>几个关键步骤:</p><ol><li>替换默认搜索组件</li><li>目标元素上插入检索的标识<code>data-pagefind-body</code></li><li>插入运行时的<code>script</code>脚本</li></ol><h3 id="替换默认搜索组件" tabindex="-1">替换默认搜索组件 <a class="header-anchor" href="#替换默认搜索组件" aria-label="Permalink to &quot;替换默认搜索组件&quot;">​</a></h3><p>通过查看默认布局组件<code>Layout.vue</code>源码其中搜索组件是被<code>VPNavBarSearch.vue</code>引入</p><p>咱只需要通过插件添加一个 <code>alias</code> 规则,将其指向自定义的组件即可</p><p>这个使用插件的 <code>config</code> 钩子即可</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> pagefindPlugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;vitepress-plugin-pagefind&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    enforce: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;pre&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    config</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      resolve: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        alias: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          &#39;./VPNavBarSearch.vue&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;vitepress-plugin-pagefind/Search.vue&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="添加索引标识" tabindex="-1">添加索引标识 <a class="header-anchor" href="#添加索引标识" aria-label="Permalink to &quot;添加索引标识&quot;">​</a></h3><p>由于vitepress的默认 <code>body</code>元素中包含 navBar，footer，sidebar等等等内容</p><p>默认情况下每个页面的代码中都会包含这些公共内容，因此会导致检索出的内容有很多重复信息</p><p>理论上只需要检索用户编写的 markdown内容生成的部分</p><p>也就是<code>VPContent.vue</code>组件渲染的内容（当然里面包含了3种情况<code>VPHome</code>，<code>VPPage</code>，<code>VPDoc</code>这里可以不做区分）</p><p>这个通过插件的<code>transform</code>钩子处理一下，构建时替换源码中<code>VPContent</code>的内容</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> pagefindPlugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // ... other code</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    transform</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">code</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (id.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">endsWith</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;theme-default/Layout.vue&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> code.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">replace</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&lt;VPContent&gt;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&lt;VPContent data-pagefind-body&gt;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> code</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="运行时的脚本注入" tabindex="-1">运行时的脚本注入 <a class="header-anchor" href="#运行时的脚本注入" aria-label="Permalink to &quot;运行时的脚本注入&quot;">​</a></h3><p>因为相关资源是在Build之后才会生成，所以直接在源码中 <code>import</code> 会提示 <code>module not found</code> 导致构建失败</p><p>咱可以在搜索组件里写一段脚本，在页面运行后<code>append</code>到页面中，这段逻辑可以写到<code>onBeforeMount</code>周期函数中</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { onBeforeMount } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> addInlineScript</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> scriptText</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`import(&#39;/_pagefind/pagefind.js&#39;)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        .then((module) =&gt; {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          window.__pagefind__ = module</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        })</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        .catch(() =&gt; {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          console.log(&#39;not load /_pagefind/pagefind.js&#39;)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        })\`</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> inlineScript</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createElement</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;script&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  inlineScript.innerHTML </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> scriptText</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  document.head.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">appendChild</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(inlineScript)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">onBeforeMount</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  addInlineScript</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><p><code>pagefind</code>我这里采用<code>import(source)</code>动态导入，组件搜索直接使用<code>window.__pagefind__</code>来进行API的调用</p><h2 id="最后" tabindex="-1">最后 <a class="header-anchor" href="#最后" aria-label="Permalink to &quot;最后&quot;">​</a></h2><p>目前这一版插件主要是将pagefind做了一个简单的内置，没有对搜索结果进行优化，也不支持多级标题的跳转</p><p>后续是准备优化一下插件的本身实现和功能</p><ul><li>插件内部的hack实现替换为 VitePress 的 <a href="https://vitepress.dev/reference/site-config#build-hooks" target="_blank" rel="noreferrer">Build Hooks</a></li><li>搜索内容的输入输出支持自定义的转换</li><li>跳转支持标题</li><li>...</li></ul><p>欢迎各位在评论区交流想法</p>`,77),p=[e];function l(h,k,r,d,g,E){return i(),a("div",null,p)}const y=s(t,[["render",l]]);export{c as __pageData,y as default};

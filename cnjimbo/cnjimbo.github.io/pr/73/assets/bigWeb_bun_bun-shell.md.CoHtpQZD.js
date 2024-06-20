import{j as s,b as i,c as a,a7 as n}from"./chunks/framework.B1dvzmxC.js";const F=JSON.parse('{"title":"译：使用 Bun 执行 Shell 脚本","description":"JavaScript 是世界上最流行的脚本语言。那么为什么在 `JavaScript` 中执行 `Shell` 脚本很困难呢？Bun 又是怎么解决这个问题的？","frontmatter":{"sidebar":false,"description":"JavaScript 是世界上最流行的脚本语言。那么为什么在 `JavaScript` 中执行 `Shell` 脚本很困难呢？Bun 又是怎么解决这个问题的？"},"headers":[],"relativePath":"bigWeb/bun/bun-shell.md","filePath":"bigWeb/bun/bun-shell.md","lastUpdated":1716803856000}'),h={name:"bigWeb/bun/bun-shell.md"},l=n(`<h1 id="译-使用-bun-执行-shell-脚本" tabindex="-1">译：使用 Bun 执行 Shell 脚本 <a class="header-anchor" href="#译-使用-bun-执行-shell-脚本" aria-label="Permalink to &quot;译：使用 Bun 执行 Shell 脚本&quot;">​</a></h1><blockquote><p>原文地址（Bun Blog）： <a href="https://bun.sh/blog/the-bun-shell" target="_blank" rel="noreferrer">https://bun.sh/blog/the-bun-shell</a><br>作者： <a href="https://twitter.com/jarredsumner" target="_blank" rel="noreferrer">jarredsumner</a><br>发布时间：2024-01-20</p></blockquote><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p><code>JavaScript</code> 是世界上最流行的脚本语言。</p><p>那么为什么在 <code>JavaScript</code> 中执行 <code>Shell</code> 脚本很困难呢？</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { spawnSync } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;child_process&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 代码比想象中要稍微复杂一些</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">status</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">stdout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">stderr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> spawnSync</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;ls&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;-l&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;*.js&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  encoding: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;utf8&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><p>你也可以使用内置的 API 来执行类似的操作：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { readdir } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;fs/promises&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> readdir</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;.&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, { withFileTypes: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> })).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">filter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">a</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  a.name.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">endsWith</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;.js&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>但是，还是没有 shell 脚本简单：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ls</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.js</span></span></code></pre></div><h2 id="为什么现有的-shell-无法在-javascript-中运行" tabindex="-1">为什么现有的 shell 无法在 JavaScript 中运行 <a class="header-anchor" href="#为什么现有的-shell-无法在-javascript-中运行" aria-label="Permalink to &quot;为什么现有的 shell 无法在 JavaScript 中运行&quot;">​</a></h2><p><code>bash</code> 和 <code>sh</code> 等这些 <code>shell</code> 工具已经存在几十年了。</p><p>但是，为什么它们在 <code>JavaScript</code> 中不能很好的工作？</p><p><code>macOS (zsh)</code>、<code>Linux (bash)</code> 和 <code>Windows (cmd)</code> 的 shell 都有所不同，具有不同的语法和不同的命令。每个平台上可用的命令都不同，甚至相同的命令也可能有不同的可选参数和行为。</p><p>迄今为止，<code>npm</code> 的解决方案是依靠社区用 <code>JavaScript</code> 实现来填补缺失的命令。</p><h3 id="rm-rf-不适用于-windows" tabindex="-1">rm -rf 不适用于 Windows <a class="header-anchor" href="#rm-rf-不适用于-windows" aria-label="Permalink to &quot;rm -rf 不适用于 Windows&quot;">​</a></h3><p><a href="https://www.npmjs.com/package/rimraf" target="_blank" rel="noreferrer">rimraf</a> 是 <code>rm -rf</code> 指令的跨平台实现，每周下载 6000 万次：</p><p><img src="https://img.cdn.sugarat.top/mdImg/sugar/4be77f54128dc01fe235bf46be65dfd0" alt="" loading="lazy"></p><h3 id="foo-bar-script-设置环境变量在-windows-上不生效" tabindex="-1"><code>FOO=bar &lt;script&gt;</code> 设置环境变量在 Windows 上不生效 <a class="header-anchor" href="#foo-bar-script-设置环境变量在-windows-上不生效" aria-label="Permalink to &quot;\`FOO=bar &lt;script&gt;\` 设置环境变量在 Windows 上不生效&quot;">​</a></h3><p>不同平台上设置环境变量的方式略有不同。如果不使用 <code>FOO=bar</code> 这种方式，那就是使用 <a href="https://www.npmjs.com/package/cross-env" target="_blank" rel="noreferrer">cross-env</a></p><p><img src="https://img.cdn.sugarat.top/mdImg/sugar/654ccf7364bc395e6699f33dbe05bc8c" alt="" loading="lazy"></p><h3 id="which-在-windows-上是-where" tabindex="-1">which 在 Windows 上是 where <a class="header-anchor" href="#which-在-windows-上是-where" aria-label="Permalink to &quot;which 在 Windows 上是 where&quot;">​</a></h3><p>于是另一个周下载量 6000w 的包诞生了：</p><p><img src="https://img.cdn.sugarat.top/mdImg/sugar/ba91ab9eb9713c5484c09a6bd62f96a5" alt="" loading="lazy"></p><h2 id="shell-启动时间也有一点长" tabindex="-1">shell 启动时间也有一点长 <a class="header-anchor" href="#shell-启动时间也有一点长" aria-label="Permalink to &quot;shell 启动时间也有一点长&quot;">​</a></h2><p>创建一个 <code>shell</code> 执行需要多久？</p><p>在 Linux x64 Hetzner Arch Linux 机器上，大约需要 7ms：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hyperfine</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --warmup</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;bash -c &quot;echo hello&quot;&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;sh -c &quot;echo hello&quot;&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -N</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Benchmark</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 1:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bash</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -c</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;echo hello&#39;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  Time</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (mean </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">±</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> σ</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">):       7.3 ms ±   1.5 ms    [User: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5.1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ms, System: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.9</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ms]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  Range</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (min </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">…</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> max</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">):     1.7 ms …   9.4 ms    529 runs</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Benchmark</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 2:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sh</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -c</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;echo hello&#39;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  Time</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (mean </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">±</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> σ</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">):       7.2 ms ±   1.6 ms    [User: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4.8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ms, System: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2.1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ms]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  Range</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (min </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">…</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> max</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">):     1.5 ms …   9.6 ms    327 runs</span></span></code></pre></div><p>如果只是想运行单个命令，但是启动 <code>shell</code> 可能比运行命令本身花费更长的时间。如果需要在循环中运行许多命令，那么成本就会升高。</p><p>你可以尝试嵌入 <code>shell</code>，但这样就复杂了，而且它们的许可证可能与你的项目不兼容。</p><h2 id="这些-polyfill-真的必要吗" tabindex="-1">这些 polyfill 真的必要吗？ <a class="header-anchor" href="#这些-polyfill-真的必要吗" aria-label="Permalink to &quot;这些 polyfill 真的必要吗？&quot;">​</a></h2><p>在 2009 - 2016 年的里，<code>JavaScript</code> 还相对较新且处于实验阶段时，依靠社区来填补缺失的功能是很合理的。但现在已经是 2024 年了。<code>JavaScript</code> 已在广泛的使用于服务端开发了。如今，<code>JavaScript</code> 生态系统对需求的理解与 2009 年时完全不同了。</p><p>我们其实可以做得更好。</p><h2 id="介绍一下-bun-shell" tabindex="-1">介绍一下 Bun Shell <a class="header-anchor" href="#介绍一下-bun-shell" aria-label="Permalink to &quot;介绍一下 Bun Shell&quot;">​</a></h2><p><code>Bun Shell</code> 是 <code>Bun</code> 提供的一种新的实验性的嵌入式语言和解释器，支持使用 <code>JavaScript</code> 和 <code>TypeScript</code> 编写跨平台运行的 <code>shell</code> 脚本。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { $ } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;bun&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 直接在终端里输出</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> $</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`ls *.js\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 转为字符串变量</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> text</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> $</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`ls *.js\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span></code></pre></div><p>同时允许你使用 <code>JavaScript</code> 变量：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { $ } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;bun&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> resp</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> fetch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;https://example.com&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> stdout</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> $</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`gzip -c &lt; \${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">resp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">arrayBuffer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span></code></pre></div><p>出于安全问题考虑，所有模板变量都将被转义：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> filename</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;foo.js; rm -rf /&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 将会执行指令 \`ls &#39;foo.js; rm -rf /&#39;\`</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> results</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> $</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`ls \${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">filename</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(results.exitCode) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(results.stderr.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// ls: cannot access &#39;foo.js; rm -rf /&#39;: No such file or directory</span></span></code></pre></div><p>使用 <code>Bun Shell</code> 感觉就像普通的 <code>JavaScript</code>。允许你将标准输出放入 <code>buffers</code> 中：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { $ } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;bun&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> buffer</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Buffer.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">alloc</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1024</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> $</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`ls *.js &gt; \${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">buffer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(buffer.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;utf8&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span></code></pre></div><p>你也可以将输出结果直接写入文件：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { $, file } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;bun&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 当做文件输出</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> $</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`ls *.js &gt; \${</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">file</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;output.txt&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">)</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 或者文件路径字符串</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> $</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`ls *.js &gt; output.txt\`</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> $</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`ls *.js &gt; \${&#39;output.txt&#39;}\`</span></span></code></pre></div><p>你还可以将输出结果通过管道运算符传递给其它命令：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { $ } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;bun&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> $</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`ls *.js | grep foo\`</span></span></code></pre></div><p>你甚至可以使用 <code>Response</code> 作为标准输入：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { $ } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;bun&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> buffer</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Response</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;bar</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> foo</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bar</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> foo</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> $</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`grep foo &lt; \${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">buffer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}\`</span></span></code></pre></div><p>可使用 <code>cd</code>、<code>echo</code> 和 <code>rm</code> 等内置命令：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { $ } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;bun&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> $</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`cd .. &amp;&amp; rm -rf node_modules/rimraf\`</span></span></code></pre></div><p>它可在 <code>Windows</code>、<code>macOS</code> 和 <code>Linux</code> 上运行。我们实现了许多常用命令和功能，如<code>通配符</code>、<code>环境变量</code>、<code>重定向（redirection）</code>、<code>管道（piping）</code>等。</p><p>它被设计为简单 <code>shell</code> 脚本的替代品。在 <code>Windows</code> 版 <code>Bun</code> 中，它将为 <code>bun run</code> 中的 <code>package.json</code> “脚本”提供支持。</p><p>为了更有趣一点，您还可以将它用作独立的 shell 脚本解释器：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;cat package.json&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> script.bun.sh</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bun</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> script.bun.sh</span></span></code></pre></div><h2 id="如何安装" tabindex="-1">如何安装？ <a class="header-anchor" href="#如何安装" aria-label="Permalink to &quot;如何安装？&quot;">​</a></h2><p><code>Bun Shell</code> 内置于 <code>Bun</code> 中。如果已经安装了 <code>Bun v1.0.24</code> 或更高版本，那么你就可以使用它：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bun</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --version</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">1.0.24</span></span></code></pre></div><p>如果你没有安装<code>Bun</code>，可以使用<code>curl</code>安装：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -fsSL</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://bun.sh/install</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> bash</span></span></code></pre></div><p>或者使用 npm :</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bun</span></span></code></pre></div><h2 id="使用实践" tabindex="-1">使用实践 <a class="header-anchor" href="#使用实践" aria-label="Permalink to &quot;使用实践&quot;">​</a></h2><p>创建 <code>test.ts</code> 文件，写入如下代码</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { $ } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;bun&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> $</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`echo hello world\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> files</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> $</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`ls *.js *.mjs\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(files.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">split</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span></code></pre></div><p>运行脚本</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bun</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test.ts</span></span></code></pre></div><p><a href="https://app.warp.dev/block/VLbnk6T4x6rCSVZT2uwWs7" target="_blank" rel="noreferrer">运行结果</a> 如下</p><p><img src="https://img.cdn.sugarat.top/mdImg/sugar/1ad4e2f3727b32803ee4ce3b458ee21f" alt="" loading="lazy"></p>`,68),t=[l];function p(e,k,d,r,c,o){return i(),a("div",null,t)}const E=s(h,[["render",p]]);export{F as __pageData,E as default};

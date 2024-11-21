import{_ as s,o as i,c as a,a7 as n}from"./chunks/framework.kR6ics5Q.js";const c=JSON.parse('{"title":"译：使用现代的 Node.js 构建简单的CLI工具","description":"只使用 Node.js 的标准库，不安装任何外部依赖，写一个命令行工具","frontmatter":{"sidebar":false,"description":"只使用 Node.js 的标准库，不安装任何外部依赖，写一个命令行工具"},"headers":[],"relativePath":"bigWeb/node/standard-node-cli.md","filePath":"bigWeb/node/standard-node-cli.md","lastUpdated":1719297432000}'),p={name:"bigWeb/node/standard-node-cli.md"},l=n(`<h1 id="译-使用现代的-node-js-构建简单的cli工具" tabindex="-1">译：使用现代的 Node.js 构建简单的CLI工具 <a class="header-anchor" href="#译-使用现代的-node-js-构建简单的cli工具" aria-label="Permalink to &quot;译：使用现代的 Node.js 构建简单的CLI工具&quot;">​</a></h1><blockquote><p>原文地址： <a href="https://evertpot.com/node-changelog-cli-tool/" target="_blank" rel="noreferrer">https://evertpot.com/node-changelog-cli-tool/</a><br>作者： <a href="https://evertpot.com/" target="_blank" rel="noreferrer">Evert Pot</a><br>发布时间：2023-02-13</p></blockquote><p><strong>只使用 Node.js 的标准库，不安装任何外部依赖，写一个命令行工具。</strong></p><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p>作者是多个开源项目的维护者，长久以来都是手动维护项目的变更日志（<code>changelog</code>）。</p><p>下面是项目 <a href="https://github.com/curveball/a12n-server/" target="_blank" rel="noreferrer">a12n-server</a> 的变更日志示例：</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">0.22.0 (2022-09-27)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">-------------------</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Warning note for upgraders. This release has a database migration on the</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`oauth2_tokens\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> table. For most users this is the largest table, some</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">downtime may be expected while the server runs its migrations.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> #425: Using a </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`client_secret\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> is now supported with </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`authorization_code\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  and it&#39;s read from either the request body or HTTP Basic Authorization</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  header.</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> The service now keeps track when issuing access tokens, whether those tokens</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  have used a </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`client_secret\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> or not, which </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`grant_type\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> was used to issue them</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  and what scopes were requested. This work is done to better support OAuth2</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  scopes in the future, and eventually OpenID Connect.</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Fixed broken &#39;principal uri&#39; in introspection endpoint response.</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> OAuth2 service is almost entirely rewritten.</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> The number of tokens issued is now displayed on the home page.</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Large numbers are now abbreviated with </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`K\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> and </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`M\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> #426: Updated to Curveball 0.20.</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> #427: Typescript types for the database schema are now auto-generated with</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  \`mysql-types-generator\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span></span></code></pre></div><p>内容使用<code>markdown</code>编写的。你可能会想：Git不是有 <code>commit</code> 日志吗？为什么要费力手写这个呢？</p><p>原因是它们的受众不一样。我希望让用户关注到相对重要的变更事项，并同时注意到变化对用户带来的影响。</p><p>我觉得写一个命令行工具来做这些事会更方便，维护多个项目（如此多的变更）也更容易一些。所以，<a href="https://github.com/evert/changelog-tool" target="_blank" rel="noreferrer">我就做了 changelog-tool</a>！如果你想知道这背后涉及了哪些技术选择，请接着往下阅读。</p><h2 id="目标-特色" tabindex="-1">目标&amp;特色 <a class="header-anchor" href="#目标-特色" aria-label="Permalink to &quot;目标&amp;特色&quot;">​</a></h2><p>工具已支持的功能：</p><ul><li>重新格式化日志（有点像美化）（ <code>changelog format</code> ）;</li><li>通过命令行添加一行日志（ <code>changelog add --minor -m &quot;New feature&quot;</code> ）;</li><li>自动设置发布日期（ <code>changelog release</code> ）;</li><li>将特定版本的日志导入标准输出，以便其他工具可以使用（例如与GitHub发布集成）。</li></ul><p>我还有一些非功能性的需求：</p><ul><li>使用最新的 <code>Node.js</code> 特性;</li><li>使用最新的 <code>JavaScript</code> 标准和特性（ESM）;</li><li>避免非必要的外部依赖；</li><li>低维护成本。</li></ul><p>想立即找到这个工具吗？它是开源的，你只需访问 <a href="https://github.com/evert/changelog-tool" target="_blank" rel="noreferrer">Github</a>。</p><h2 id="原理解析" tabindex="-1">原理解析 <a class="header-anchor" href="#原理解析" aria-label="Permalink to &quot;原理解析&quot;">​</a></h2><h3 id="esm-typescript-esm" tabindex="-1">ESM &amp; Typescript ESM <a class="header-anchor" href="#esm-typescript-esm" aria-label="Permalink to &quot;ESM &amp; Typescript ESM&quot;">​</a></h3><p><code>ESM</code> 模块现在使用起来已经非常丝滑了。这是习惯上的一个小改变，但我一般建议是将文件保存为 <code>.mjs</code> 来使用 <code>ESM</code>。</p><p>下面是 <code>parse.mjs</code> 的前几行代码：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { readFile } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;node:fs/promises&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { Changelog, VersionLog } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;./changelog.mjs&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> {string}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> filename</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@returns</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> {Promise&lt;Changelog&gt;}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> async</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> parseFile</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">filename</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> parse</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    await</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> readFile</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(filename, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;utf-8&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  )</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>CommonJS -&gt; ESM 的过渡并非没有痛苦，但对于像这样的新项目来说，它是非常理想的选择。（顶层 <code>await</code> 🎉）</p><p>我还选择不使用 <code>Typescript</code> 编写代码，取而代之的是使用 <code>JSDoc</code> 注释（上面是 <code>@param</code> 和 <code>@returns</code> 注释）。</p><p>当然不是每个人都知道不写 <code>.ts</code> 文件也可获得和 <code>Typescript</code> 一样的体验。 Typescript 也可以严格地检查 <code>Javascript</code> 文件。</p><p>这样做的好处是项目不需要构建步骤了。甚至在开发过程中不需要用到 <code>Typescript</code>，降低了上手门槛。</p><p>这是我的简化后的 <code>tsconfig.json</code> 配置文件：</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;compilerOptions&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;target&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;es2022&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;module&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;esnext&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;rootDir&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;./&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;allowJs&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;checkJs&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;moduleResolution&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;node&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;noEmit&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;strict&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;useUnknownInCatchVariables&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>如果您想了解更多信息，<code>Typescript</code> 文档有一个页面详细介绍了<a href="https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html" target="_blank" rel="noreferrer">支持的 JSDoc 注释</a>。</p><h3 id="命令行参数解析" tabindex="-1">命令行参数解析 <a class="header-anchor" href="#命令行参数解析" aria-label="Permalink to &quot;命令行参数解析&quot;">​</a></h3><p>CLI 工具需要支持解析命令行选项参数(option)。从 Node 18.3（向后移植到了 Node 16.17）开始，Node 内置了一个参数解析的方法。</p><p>下面是代码示例：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { parseArgs } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;node:util&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">positionals</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">values</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> parseArgs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  options: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    help: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;boolean&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      short: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;h&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      default: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    all: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;boolean&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      default: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    message: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;string&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      short: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;m&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    patch: { type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;boolean&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    minor: { type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;boolean&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    major: { type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;boolean&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  allowPositionals: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><p>这段配置代码添加了诸如 <code>--major</code> 这些参数的解析支持，这样就可以使用 <code>--message &quot;hello!&quot;</code> 指定消息，也可以使用 <code>-m &quot;Hi&quot;</code> 简写的方式替代。</p><p>它能完成所有工作吗？不！在一些复杂的工具中，还会用到彩色打印，自动创建帮助信息等，但这样就需要引入许多额外的第三方依赖。</p><p>就我而言，已经够用了。</p><p>可以查看 <a href="https://nodejs.org/api/util.html#utilparseargsconfig" target="_blank" rel="noreferrer">Node.js 对应文档</a>了解更详细的内容。</p><h3 id="测试" tabindex="-1">测试 <a class="header-anchor" href="#测试" aria-label="Permalink to &quot;测试&quot;">​</a></h3><p>大多数人可能会使用 <code>Jest</code> 或 <code>Mocha</code> 作为测试框架，但从 Node 18（也向后移植到 16）开始，Node 内置了运行测试用例的能力。</p><p>它的API类似于 <code>Mocha</code> 和 <code>Jest</code> ，包含 <code>it</code> 、 <code>test</code> 、 <code>describe</code> 、 <code>before</code> 等关键字。</p><p>下面是一个单侧的示例：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// @ts-check</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> assert </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;node:assert&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { test } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;node:test&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { parse } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;../parse.mjs&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">test</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Parsing changelog metadata&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">async</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> input</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`Time for a change</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">=========</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">0.2.0 (????-??-??)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">------------------</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">* Implemented the &#39;list&#39; command.</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">* Added testing framework.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">0.1.0 (2023-02-08)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">------------------</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">* Implemented the &#39;help&#39; and &#39;init&#39; commands.</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">*</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> result</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> parse</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(input)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  assert.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">equal</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Time for a change&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, result.title)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  assert.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">equal</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, result.versions.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">length</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  assert.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">equal</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, result.versions[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">].date)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  assert.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">equal</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;0.2.0&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, result.versions[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">].version)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  assert.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">equal</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;2023-02-08&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, result.versions[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">].date)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  assert.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">equal</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;0.1.0&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, result.versions[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">].version)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><p>要执行测试，只需运行 <code>node --test</code> 指令即可。无需额外配置，它将自动扫描遵循规范的目录和单测文件。</p><p>Node 18 测试输出有点简陋，它是 <code>TAP</code> 格式，如下所示：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>TAP version 13</span></span>
<span class="line"><span># Subtest: /home/evert/src/changelog-tool/test/parse.mjs</span></span>
<span class="line"><span>    # Subtest: Parsing changelog metadata</span></span>
<span class="line"><span>    ok 1 - Parsing changelog metadata</span></span>
<span class="line"><span>      ---</span></span>
<span class="line"><span>      duration_ms: 1.713409</span></span>
<span class="line"><span>      ...</span></span>
<span class="line"><span>    # Subtest: Parsing changelog entries</span></span>
<span class="line"><span>    ok 2 - Parsing changelog entries</span></span>
<span class="line"><span>      ---</span></span>
<span class="line"><span>      duration_ms: 0.2595</span></span>
<span class="line"><span>      ...</span></span>
<span class="line"><span>    # Subtest: Preface and postface</span></span>
<span class="line"><span>    ok 3 - Preface and postface</span></span>
<span class="line"><span>      ---</span></span>
<span class="line"><span>      duration_ms: 0.193591</span></span>
<span class="line"><span>      ...</span></span>
<span class="line"><span>    1..3</span></span>
<span class="line"><span>ok 1 - /home/evert/src/changelog-tool/test/parse.mjs</span></span>
<span class="line"><span>  ---</span></span>
<span class="line"><span>  duration_ms: 70.901055</span></span>
<span class="line"><span>  ...</span></span>
<span class="line"><span>1..1</span></span>
<span class="line"><span># tests 1</span></span>
<span class="line"><span># pass 1</span></span>
<span class="line"><span># fail 0</span></span>
<span class="line"><span># cancelled 0</span></span>
<span class="line"><span># skipped 0</span></span>
<span class="line"><span># todo 0</span></span>
<span class="line"><span># duration_ms 81.481441</span></span></code></pre></div><p>坦白说，用了这个之后我不确定是否还会继续再使用 <code>Mocha</code>。毕竟我已经用了十多年了，还是有许多不错的功能，我认为除了 Node 已经支持的外 <code>Mocha</code> 里还有一些我需要的功能。</p><p>一些链接:</p><ul><li><a href="https://nodejs.org/api/test.html" target="_blank" rel="noreferrer">node:test package</a>;</li><li><a href="https://nodejs.org/api/assert.html" target="_blank" rel="noreferrer">node:assert package</a>;</li><li><a href="https://nodejs.org/api/test.html#mocking" target="_blank" rel="noreferrer">Mocking in node</a>.</li></ul><h3 id="带注释的-package-json" tabindex="-1">带注释的 package.json <a class="header-anchor" href="#带注释的-package-json" aria-label="Permalink to &quot;带注释的 package.json&quot;">​</a></h3><p>我想以我配置的 <code>package.json</code> 来结束这篇文章，这样你就可以看到前面内容是如何联系到一起的。（如果 npm 支持 JSON5，​​这样我就可以将我的注释保留在包中 😭）。</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 包的名称</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;changelog-tool&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 包的版本号</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;version&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0.5.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 这将显示在NPM搜索结果中</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;description&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;A CLI tool for manipulating changelogs&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 这告诉Node这是一个ESM包</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 当然不是严格需要的，如果我们在每个地方都是使用 .mjs</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;module&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 如果需要在编码的时候使用此包中的方法（不是 CLI 中），则需要在这里指定导出的模块入口文件</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;main&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;index.mjs&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;scripts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 运行测试用例</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;test&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;node --test&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 我喜欢让 Typescript 在终端中运行，以便有任何问题即时的警告我</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;watch&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;tsc --watch&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 方便更好的在 npmjs.org 上发现此包</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;keywords&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;changelog&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;markdown&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ],</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 作者信息</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;author&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Evert Pot (https://evertpot.com/)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 做任何你想做的事（MIT协议基本没有约束）</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;license&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;MIT&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;engine&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 警告尚未升级的用户</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;node&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&gt;16&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;bin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 当人们安装这个包时，可以通过 \`npx changelog\` 执行。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 如果全局安装了这个包，就会有一个 \`changelog\` 命令</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;changelog&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;./cli.mjs&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;devDependencies&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 唯一的 2 个依赖项。如果你想？甚至不需要这些包</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;@types/node&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;^18.11.19&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;typescript&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;^4.9.5&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>我喜欢创造新事物并深思熟虑地做出每一个决定。</p><p>结果是我更有可能最终得到一些简约、维护成本低的东西，并且让我对所使用的工具有更深入的理解。</p><p>未来我可能会再次做出这些选择。Node 的测试工具快速又简单，ESM 也非常Nice，还不需要引入构建，对于我这种规模的项目来说，感觉非常合适。</p><p><strong>我希望这能鼓励将来的人从空目录来开始他们的下一个项目，而不是复制大型项目模板。</strong></p><p><a href="https://github.com/evert/changelog-tool" target="_blank" rel="noreferrer">Github 上的 changelog-tool 项目</a>。</p><p><em>最后一句话确实挺值得思考的，现在好像无论做什么项目，都想先找个模板然后才开始🤔</em></p>`,57),t=[l];function e(h,k,r,E,d,o){return i(),a("div",{"data-pagefind-body":!0},t)}const y=s(p,[["render",e]]);export{c as __pageData,y as default};

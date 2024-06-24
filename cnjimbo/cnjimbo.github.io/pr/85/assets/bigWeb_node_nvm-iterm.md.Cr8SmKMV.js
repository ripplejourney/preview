import{_ as s,o as i,c as a,a6 as l}from"./chunks/framework._8UZjAgc.js";const F=JSON.parse('{"title":"安装nvm后终端启动变慢,更快的Node版本管理工具推荐","description":"终端启动时总会卡顿一下，没去探究原因，看到咲奈的分享才知道是nvm在作祟","frontmatter":{"description":"终端启动时总会卡顿一下，没去探究原因，看到咲奈的分享才知道是nvm在作祟","cover":"https://img.cdn.sugarat.top/mdImg/MTY3NjE4NTM2MDkyOQ==676185360929","tag":["技术笔记"]},"headers":[],"relativePath":"bigWeb/node/nvm-iterm.md","filePath":"bigWeb/node/nvm-iterm.md","lastUpdated":1676189550000}'),t={name:"bigWeb/node/nvm-iterm.md"},n=l(`<h1 id="安装nvm后终端启动变慢-更快的node版本管理工具推荐" tabindex="-1">安装nvm后终端启动变慢,更快的Node版本管理工具推荐 <a class="header-anchor" href="#安装nvm后终端启动变慢-更快的node版本管理工具推荐" aria-label="Permalink to &quot;安装nvm后终端启动变慢,更快的Node版本管理工具推荐&quot;">​</a></h1><h2 id="先看安装前后对比" tabindex="-1">先看安装前后对比 <a class="header-anchor" href="#先看安装前后对比" aria-label="Permalink to &quot;先看安装前后对比&quot;">​</a></h2><p>安装前</p><p><img src="https://img.cdn.sugarat.top/mdImg/MTY3NjE4NDI1OTY0OA==676184259648" alt="" loading="lazy"></p><p>安装后</p><p><img src="https://img.cdn.sugarat.top/mdImg/MTY3NjE4NDgwNjAzMA==676184806030" alt="" loading="lazy"></p><p>可以看到有明显的卡顿</p><h2 id="如何解决" tabindex="-1">如何解决 <a class="header-anchor" href="#如何解决" aria-label="Permalink to &quot;如何解决&quot;">​</a></h2><p>将 NVM 初始化的逻辑放入函数中，使用时才调用</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nvm</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">//</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [!code </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">++]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> NVM_DIR</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$HOME</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/.nvm&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[ </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$NVM_DIR</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/nvm.sh&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ] &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">\\.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$NVM_DIR</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/nvm.sh&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # This loads nvm</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[ </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$NVM_DIR</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/bash_completion&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ] &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">\\.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$NVM_DIR</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/bash_completion&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # This loads nvm bash_completion</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}// [</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">code ++]</span></span></code></pre></div><p>方法来源 <a href="https://public.zsxq.com/groups/28851452458181.html" target="_blank" rel="noreferrer">咲奈的平行时空</a></p><p><img src="https://img.cdn.sugarat.top/mdImg/MTY3NjE4NTM2MDkyOQ==676185360929" alt="" loading="lazy"></p><p><strong>带来的影响</strong></p><p>emm 用Node的话需要手动执行一下<code>nvm</code> 进行初始化，不是很优雅</p><p>下面介绍几个可平替 NVM 的工具，非常的赞</p><h2 id="使用其它更快的工具" tabindex="-1">使用其它更快的工具 <a class="header-anchor" href="#使用其它更快的工具" aria-label="Permalink to &quot;使用其它更快的工具&quot;">​</a></h2><h3 id="volta" tabindex="-1"><a href="https://volta.sh/" target="_blank" rel="noreferrer">volta</a> <a class="header-anchor" href="#volta" aria-label="Permalink to &quot;[volta](https://volta.sh/)&quot;">​</a></h3><p>基于 Rust 实现的，除了Node版本外还支持其它的</p><p>安装</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://get.volta.sh</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> bash</span></span></code></pre></div><p>安装 Node</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># install latest</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">volta</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> node</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># or</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">volta</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> node@16</span></span></code></pre></div><h3 id="fnm" tabindex="-1"><a href="https://github.com/Schniz/fnm" target="_blank" rel="noreferrer">fnm</a> <a class="header-anchor" href="#fnm" aria-label="Permalink to &quot;[fnm](https://github.com/Schniz/fnm)&quot;">​</a></h3><p>也是一个 基于 Rust的 Node 包管理工具</p><p>安装</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -fsSL</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://fnm.vercel.app/install</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> bash</span></span></code></pre></div><p>安装 Node</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">fnm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --latest</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">fnm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 14</span></span></code></pre></div><h3 id="pnpm" tabindex="-1"><a href="https://pnpm.io/zh/cli/env" target="_blank" rel="noreferrer">pnpm</a> <a class="header-anchor" href="#pnpm" aria-label="Permalink to &quot;[pnpm](https://pnpm.io/zh/cli/env)&quot;">​</a></h3><p>没错<code>pnpm</code> 可以安装Node包</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> env</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> use</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --global</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> latest</span></span></code></pre></div><p>安装 v16 的Node.js</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> env</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> use</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --global</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 16</span></span></code></pre></div><h2 id="最后" tabindex="-1">最后 <a class="header-anchor" href="#最后" aria-label="Permalink to &quot;最后&quot;">​</a></h2><p>笔者试用了下最后选择了<code>volta</code></p><p>不仅仅支持 node 版本管理，还支持其它全局包的管理</p><p>功能非常的多（比如 根据项目里Node版本要求，自动切换）</p><p><img src="https://img.cdn.sugarat.top/mdImg/MTY3NjE4OTM5MTk2Mg==676189391962" alt="" loading="lazy"></p><div style="display:none;" data-pagefind-meta="base64:JTdCJTIyZGVzY3JpcHRpb24lMjIlM0ElMjIlRTclQkIlODglRTclQUIlQUYlRTUlOTAlQUYlRTUlOEElQTglRTYlOTclQjYlRTYlODAlQkIlRTQlQkMlOUElRTUlOEQlQTElRTklQTElQkYlRTQlQjglODAlRTQlQjglOEIlRUYlQkMlOEMlRTYlQjIlQTElRTUlOEUlQkIlRTYlOEUlQTIlRTclQTklQjYlRTUlOEUlOUYlRTUlOUIlQTAlRUYlQkMlOEMlRTclOUMlOEIlRTUlODglQjAlRTUlOTIlQjIlRTUlQTUlODglRTclOUElODQlRTUlODglODYlRTQlQkElQUIlRTYlODklOEQlRTclOUYlQTUlRTklODElOTMlRTYlOTglQUZudm0lRTUlOUMlQTglRTQlQkQlOUMlRTclQTUlOUYlMjIlMkMlMjJjb3ZlciUyMiUzQSUyMmh0dHBzJTNBJTJGJTJGaW1nLmNkbi5zdWdhcmF0LnRvcCUyRm1kSW1nJTJGTVRZM05qRTROVE0yTURreU9RJTNEJTNENjc2MTg1MzYwOTI5JTIyJTJDJTIydGFnJTIyJTNBJTVCJTIyJUU2JThBJTgwJUU2JTlDJUFGJUU3JUFDJTk0JUU4JUFFJUIwJTIyJTVEJTJDJTIyZGF0ZSUyMiUzQTE2NzYxODk1NTAwMDAlN0Q="></div>`,39),h=[n];function e(p,k,d,r,o,g){return i(),a("div",null,h)}const E=s(t,[["render",e]]);export{F as __pageData,E as default};

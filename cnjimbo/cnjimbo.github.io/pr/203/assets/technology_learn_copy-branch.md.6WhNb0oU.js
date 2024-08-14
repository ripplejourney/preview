import{_ as s,o as i,c as a,a7 as h}from"./chunks/framework.BuZVbaCu.js";const n="/preview/cnjimbo/cnjimbo.github.io/pr/203/assets/MTY5MTI0NTYxOTQzMw__691245619433.DV2gcc_Y.png",t="/preview/cnjimbo/cnjimbo.github.io/pr/203/assets/MTY5MTI0NTc5MDM2OQ__691245790369.DZ2ES3cv.png",p="/preview/cnjimbo/cnjimbo.github.io/pr/203/assets/MTY5MTMwNDE3MDkzNg__691304170936.BwM_zslJ.png",e="/preview/cnjimbo/cnjimbo.github.io/pr/203/assets/MTY5MTMwNDU1NTQ2Nw__691304555467.h5dEhTY_.png",l="/preview/cnjimbo/cnjimbo.github.io/pr/203/assets/MTY5MTMwNDc4MTIwMQ__691304781201.Cey_daG9.png",k="/preview/cnjimbo/cnjimbo.github.io/pr/203/assets/MTY5MTMwNzY2OTU1MA__691307669550.D_nA9KXB.png",r="/preview/cnjimbo/cnjimbo.github.io/pr/203/assets/MTY5MTMwODMzMTk2NA__691308331964.D3gfoa6R.png",d="/preview/cnjimbo/cnjimbo.github.io/pr/203/assets/MTY5MTMxNzA1MDQ0OA__691317050448.BiyVH7Be.png",c="/preview/cnjimbo/cnjimbo.github.io/pr/203/assets/MTY5MTMyMTU1NjY2MQ__691321556661.Dx_CqJKM.png",o="/preview/cnjimbo/cnjimbo.github.io/pr/203/assets/MTY5MTI0NTI4NDAxNQ__691245284015.B9JC2xr3.png",D=JSON.parse('{"title":"如何优雅的复制当前项目分支名","description":"本文简单介绍了如何通过`Shell`和`Node.js`实现复制当前分支名到剪贴板","frontmatter":{"outline":[2,3],"cover":"./copy-branch/MTY5MTMxNzA1MDQ0OA==691317050448.png","description":"本文简单介绍了如何通过`Shell`和`Node.js`实现复制当前分支名到剪贴板","tags":["CLI","技术笔记"]},"headers":[],"relativePath":"technology/learn/copy-branch.md","filePath":"technology/learn/copy-branch.md","lastUpdated":1720544135000}'),g={name:"technology/learn/copy-branch.md"},y=h('<h1 id="如何优雅的复制当前项目分支名" tabindex="-1">如何优雅的复制当前项目分支名 <a class="header-anchor" href="#如何优雅的复制当前项目分支名" aria-label="Permalink to &quot;如何优雅的复制当前项目分支名&quot;">​</a></h1><p><strong>省流版: <code>npx bcy</code></strong></p><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p>在工作中，协作场景下，避免不了要告诉同事你当前的开发分支，<strong>通常情况</strong>下需要2步</p><p><strong>Step1 查看当前分支</strong></p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> branch</span></span></code></pre></div><p>这里还有个case，分支多的话需要翻页查看，才能找到当前分支</p><p><img src="'+n+'" alt="" loading="lazy"></p><p>要准确获取需要加上<code>--show-current</code>参数</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> branch</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --show-current</span></span></code></pre></div><p><img src="'+t+`" alt="" loading="lazy"></p><p><strong>Step2 鼠标右键复制当前分支</strong></p><hr><p>本文将会介绍2种方式，实现1行代码直接复制分支</p><ul><li>Shell</li><li>Node CLI</li></ul><h2 id="核心步骤" tabindex="-1">核心步骤 <a class="header-anchor" href="#核心步骤" aria-label="Permalink to &quot;核心步骤&quot;">​</a></h2><h3 id="获取分支名" tabindex="-1">获取分支名 <a class="header-anchor" href="#获取分支名" aria-label="Permalink to &quot;获取分支名&quot;">​</a></h3><p>这个上面介绍了，可以通过<code>git branch --show-current</code>获取</p><p>在 <code>shell</code> 里，可以直接将结果存到变量里</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># bcp.sh</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">branch</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> branch</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --show-current</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $branch</span></span></code></pre></div><p><img src="`+p+`" alt="" loading="lazy"></p><p><code>Node.js</code> 里，可以通过<code>child_process</code>模块来执行命令</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">execSync</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;child_process&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> branch</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> execSync</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;git branch --show-current&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">trim</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(branch);</span></span></code></pre></div><p><img src="`+e+'" alt="" loading="lazy"></p><h3 id="复制到剪贴板" tabindex="-1">复制到剪贴板 <a class="header-anchor" href="#复制到剪贴板" aria-label="Permalink to &quot;复制到剪贴板&quot;">​</a></h3><p>这一块就是调用系统指令执行了，不同操作系统的不一样</p><p>之前用过 <a href="https://github.com/xavi-/node-copy-paste#readme" target="_blank" rel="noreferrer">node-copy-paste</a> 这个库</p><p>大概介绍了一下各个操作系统所用的指令：MacOS(pbcopy)、Windows(clip)、Linux(xclip)</p><p><img src="'+l+`" alt="" loading="lazy"></p><p>这里笔者用的是<code>MacOS</code>，所以直接用<code>pbcopy</code>指令</p><p>只需要在上面的基础上加上<code>| pbcopy</code>即可</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">branch</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> branch</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --show-current</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $branch </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> pbcopy</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 或</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> branch</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --show-current</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> pbcopy</span></span></code></pre></div><p>运行后发现<code>git branch --show-current</code>获取的内容会有换行符，可以通过<code>tr</code>指令去掉</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> branch</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --show-current</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> tr</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;\\n&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> pbcopy</span></span></code></pre></div><p>Node.js 里，在<code>.trim()</code>后加上<code>.replace(/\\n/g, &#39;&#39;)</code>即可</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">execSync</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;git branch --show-current&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">trim</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">replace</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">g</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p>不过实际情况下，我们需要将这么长的指令封装起来，方便使用</p><p><em>谁没事敲这么多，都可以手动CV好多遍了</em></p><h2 id="封装实现" tabindex="-1">封装实现 <a class="header-anchor" href="#封装实现" aria-label="Permalink to &quot;封装实现&quot;">​</a></h2><h3 id="shell" tabindex="-1">Shell <a class="header-anchor" href="#shell" aria-label="Permalink to &quot;Shell&quot;">​</a></h3><p>只需要使用<code>alias</code>指令即可</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">alias</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> bcy</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;git branch --show-current | tr -d &quot;\\n&quot; | pbcopy&#39;</span></span></code></pre></div><p>然后将这个指令加入到<code>~/.zshrc</code>或<code>~/.bashrc</code>里即可（可以使用 <code>echo $0</code>确定自己的终端默认的shell执行器）</p><p>可运行下面的shell脚本完成自动添加</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;alias bcy=&quot;git branch --show-current | tr -d \\&quot;\\\\n\\&quot; | pbcopy&quot;&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.zshrc</span></span></code></pre></div><p>重启终端，或者使用<code>source ~/.zshrc</code>使其生效</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">source</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.zshrc</span></span></code></pre></div><p><img src="`+k+'" alt="" loading="lazy"></p><p>当然我们也可以打印一些提示信息</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">alias</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> bcy</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;branch=$(git branch --show-current); echo &quot;当前分支：$branch&quot;; echo $branch | tr -d &quot;\\n&quot; | pbcopy&#39;</span></span></code></pre></div><p>对应的安装脚本如下</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;alias bcy=&#39;branch=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">(git branch --show-current); echo </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">当前分支：</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">branch</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">; echo </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">branch | tr -d </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;\\\\\\\\</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">n</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> | pbcopy&#39;&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.zshrc</span></span></code></pre></div><p><img src="'+r+'" alt="" loading="lazy"></p><p><img src="'+d+`" alt="" loading="lazy"></p><h3 id="node-cli" tabindex="-1">Node CLI <a class="header-anchor" href="#node-cli" aria-label="Permalink to &quot;Node CLI&quot;">​</a></h3><p>上面介绍的是<code>shell</code>里的实现，这里介绍下<code>Node.js</code>里的实现</p><p>方便有 Node 环境，但不熟悉Shell的同学使用</p><p>脚本也很简单</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#!/usr/bin/env node</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">execSync</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;child_process&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ncp</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;copy-paste&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 获取当前仓库分支</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> branch</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> execSync</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;git branch --show-current&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">trim</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">replace</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">g</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;当前分支:&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, branch)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ncp.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">copy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(branch)</span></span></code></pre></div><p>这个CLI通过npm包发布了，可以直接<code>npx bcy</code>使用</p><p>或者 <code>npm i bcy -g</code> 全局安装</p><p><img src="`+c+'" alt="" loading="lazy"></p><p><em>包名实在是难取，简单语义化一点的都被占用了，让GPT 辅助了一下</em></p><p><img src="'+o+'" alt="" loading="lazy"></p><p>最后用了搜了一圈不重复的只有<code>bcy</code></p><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>本文简单介绍了如何通过<code>Shell</code>和<code>Node.js</code>实现<strong>复制当前分支名到剪贴板</strong></p><p>如果你有更好的实现方式，欢迎留言讨论</p><p>源码地址：<a href="https://github.com/ATQQ/tools/tree/main/packages/cli/bcy" target="_blank" rel="noreferrer">bcy</a></p>',69),E=[y];function F(b,C,u,m,B,v){return i(),a("div",{"data-pagefind-body":!0},E)}const M=s(g,[["render",F]]);export{D as __pageData,M as default};

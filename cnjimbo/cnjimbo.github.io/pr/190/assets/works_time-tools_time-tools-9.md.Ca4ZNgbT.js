import{_ as i,o as s,c as a,a5 as t}from"./chunks/framework.FY6SJXEJ.js";const e="/preview/cnjimbo/cnjimbo.github.io/pr/190/assets/MTYyODYwNTM4NTM2Mg__628605385362.H7qy4Jm9.png",h="/preview/cnjimbo/cnjimbo.github.io/pr/190/assets/MTYyODYwNTY3NDEyOA__628605674128.CmRBtJge.png",l="/preview/cnjimbo/cnjimbo.github.io/pr/190/assets/MTYyODYwNjAzNjY5OQ__628606036700.BTXHESdw.png",p="/preview/cnjimbo/cnjimbo.github.io/pr/190/assets/MTYyODYwNjE1MTM1OQ__628606151359.C2QEKl75.png",n="/preview/cnjimbo/cnjimbo.github.io/pr/190/assets/MTYyODYwNjM0MDE3Mw__628606340173.DVBqzzgN.png",k="/preview/cnjimbo/cnjimbo.github.io/pr/190/assets/MTYyODYwNjUzOTc3NA__628606539774.krPE48ah.png",o="/preview/cnjimbo/cnjimbo.github.io/pr/190/assets/MTYyODYwNjg0MDEzMQ__628606840131.DF4AV1I-.png",d="/preview/cnjimbo/cnjimbo.github.io/pr/190/assets/MTYyODYwNzAyMDIxNg__628607020216.C4TmiXlZ.png",r="/preview/cnjimbo/cnjimbo.github.io/pr/190/assets/MTYyODYwNzIyMjE2Nw__628607222167.vdDVGgnT.png",c="/preview/cnjimbo/cnjimbo.github.io/pr/190/assets/MTYyODYwNzQ0ODc3Mg__628607448772.BtKh3EOY.png",g="/preview/cnjimbo/cnjimbo.github.io/pr/190/assets/MTYyODYwNzU2MzYzMQ__628607563631.DqamtCn3.png",F="/preview/cnjimbo/cnjimbo.github.io/pr/190/assets/MTYyODYwNzczNjE2Nw__628607736167.L9IEOGbF.png",y="/preview/cnjimbo/cnjimbo.github.io/pr/190/assets/MTYyODYwNzg5NzAxNA__628607897014.DkI3v5ge.png",b="/preview/cnjimbo/cnjimbo.github.io/pr/190/assets/MTYyODYwODAxNjQ2Ng__628608016466.DjHhQapp.png",V=JSON.parse('{"title":"做一个CL版的时间管理工具（九）","description":"","frontmatter":{"title":"做一个CL版的时间管理工具（九）","date":"2021-08-10T00:00:00.000Z","tags":["技术笔记","个人作品","CLI工具"]},"headers":[],"relativePath":"works/time-tools/time-tools-9.md","filePath":"works/time-tools/time-tools-9.md","lastUpdated":1720544135000}'),m={name:"works/time-tools/time-tools-9.md"},u=t('<h1 id="做一个cli版的时间管理工具-九" tabindex="-1">做一个CLI版的时间管理工具（九） <a class="header-anchor" href="#做一个cli版的时间管理工具-九" aria-label="Permalink to &quot;做一个CLI版的时间管理工具（九）&quot;">​</a></h1><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p><a href="./time-tools-8.html">上一篇文章</a>主要阐述了自动记录事务的逻辑</p><p>通过<a href="https://juejin.cn/column/6973496830654939166" target="_blank" rel="noreferrer">前面8篇文章</a>的介绍，这个工具目前已经能够进行初步的使用</p><p>本文将从头到尾的介绍一下已经开发的核心功能的使用</p><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><h3 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h3><ol><li>需要电脑上安装Node</li><li>如果依赖找不到，请先将npm源切换为官方源</li></ol><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> registry</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://registry.npmjs.org/</span></span></code></pre></div><p>安装</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> time-control</span></span></code></pre></div><p><img src="'+e+'" alt="图片" loading="lazy"></p><h3 id="查看支持的指令" tabindex="-1">查看支持的指令 <a class="header-anchor" href="#查看支持的指令" aria-label="Permalink to &quot;查看支持的指令&quot;">​</a></h3><p>通过8天的不懈努力，可以看到我们已经开发出了很多的指令，下面将演示一下核心的几个：</p><ul><li>自动记录</li><li>生成周报/日报/月报（时间报告）</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">timec</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --help</span></span></code></pre></div><p><img src="'+h+'" alt="图片" loading="lazy"></p><h3 id="项目初始化" tabindex="-1">项目初始化 <a class="header-anchor" href="#项目初始化" aria-label="Permalink to &quot;项目初始化&quot;">​</a></h3><p>创建一个用于记录的项目</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">timec</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> timeLog</span></span></code></pre></div><p><img src="'+l+'" alt="图片" loading="lazy"></p><h3 id="创建文件" tabindex="-1">创建文件 <a class="header-anchor" href="#创建文件" aria-label="Permalink to &quot;创建文件&quot;">​</a></h3><p>创建一个用于自动写入内容的文件</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">timec</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> create</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> auto.md</span></span></code></pre></div><p><img src="'+p+'" alt="图片" loading="lazy"></p><p>创建的模板文件会有一些内容，可以手动清除一下</p><h3 id="设置文件路径" tabindex="-1">设置文件路径 <a class="header-anchor" href="#设置文件路径" aria-label="Permalink to &quot;设置文件路径&quot;">​</a></h3><p>设置自动记录文件的路径</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">timec</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> upPath</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./auto.md</span></span></code></pre></div><p><img src="'+n+'" alt="图片" loading="lazy"></p><h3 id="任务管理" tabindex="-1">任务管理 <a class="header-anchor" href="#任务管理" aria-label="Permalink to &quot;任务管理&quot;">​</a></h3><p>查看正在进行中的任务</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">timec</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> task</span></span></code></pre></div><p>创建新的任务</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">timec</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> task</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">nam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><p>切换任务,这里和创建任务一样的指令与参数</p><p>如果任务已存在就选择使用这个任务</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">timec</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> task</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">nam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><p>删除已存在的任务</p><ul><li>加上<code>-d</code>option就代表是移除这个任务</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">timec</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> task</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">nam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><p><img src="'+k+'" alt="图片" loading="lazy"></p><h3 id="事务管理" tabindex="-1">事务管理 <a class="header-anchor" href="#事务管理" aria-label="Permalink to &quot;事务管理&quot;">​</a></h3><p>开始一个新的事务</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">timec</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> thing</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">nam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><p>查看当前进行中的事务</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">timec</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> thing</span></span></code></pre></div><p><img src="'+o+'" alt="图片" loading="lazy"></p><p>结束当前事务</p><ul><li>加上<code>-s</code>参数即可</li><li>结束事务，会自动将刚刚进行的事务记录到文件中</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">timec</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> thing</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span></span></code></pre></div><p><img src="'+d+'" alt="图片" loading="lazy"></p><p>不切换事务，直接开始新的事务</p><ul><li>将进行中的直接结束，然后将结果写入文件中</li><li>然后开始新的事务</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">timec</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> thing</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">nam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><p><img src="'+r+'" alt="图片" loading="lazy"></p><p>注：事务记录的数字是，事务的耗时，单位是小时（hours）保留5位小数</p><p>事务相关的操作到这就演示完毕了</p><p>有了事务记录的数据，下面就是生成报告了</p><p>下面将介绍到户导出功能</p><h3 id="多样化导出" tabindex="-1">多样化导出 <a class="header-anchor" href="#多样化导出" aria-label="Permalink to &quot;多样化导出&quot;">​</a></h3><h4 id="导出为json" tabindex="-1">导出为JSON <a class="header-anchor" href="#导出为json" aria-label="Permalink to &quot;导出为JSON&quot;">​</a></h4><p>开发者们可以用这串json，自己进行个性化的分析</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">timec</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -oj</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">filepat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">h</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><p><img src="'+c+'" alt="图片" loading="lazy"></p><h4 id="导出markdown" tabindex="-1">导出Markdown <a class="header-anchor" href="#导出markdown" aria-label="Permalink to &quot;导出Markdown&quot;">​</a></h4><p>加上<code>-t</code>选项可为md文件加上详细的耗时，包含<code>事务</code>，<code>任务</code>，<code>天</code>维度</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">timec</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -omt</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">filepat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">h</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><p><img src="'+g+'" alt="图片" loading="lazy"></p><h4 id="生成日报" tabindex="-1">生成日报 <a class="header-anchor" href="#生成日报" aria-label="Permalink to &quot;生成日报&quot;">​</a></h4><p>指定要查看的日期和分析的文件即可：</p><ul><li>生成的报告包含，一天的总耗时，某个任务的总耗时</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">timec</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -or</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -D</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">dat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">filepat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">h</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><p><img src="'+F+'" alt="图片" loading="lazy"></p><h4 id="生成月报" tabindex="-1">生成月报 <a class="header-anchor" href="#生成月报" aria-label="Permalink to &quot;生成月报&quot;">​</a></h4><p>通过<code>-M</code>指定要查看的月份即可</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">timec</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -or</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -M</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">mont</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">h</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">filepat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">h</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><p><img src="'+y+'" alt="图片" loading="lazy"></p><h4 id="一段时间的报告" tabindex="-1">一段时间的报告 <a class="header-anchor" href="#一段时间的报告" aria-label="Permalink to &quot;一段时间的报告&quot;">​</a></h4><p>可以用这个生成周报，任意时间范围的报告</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">timec</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -or</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -R</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">startTime_endTim</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">filepat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">h</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><p><img src="'+b+'" alt="图片" loading="lazy"></p><h2 id="小结" tabindex="-1">小结 <a class="header-anchor" href="#小结" aria-label="Permalink to &quot;小结&quot;">​</a></h2><p>核心的功能基本都详细介绍完毕，演示过程中发现了一些bug，留到下期进行优化</p><p>数据展示这一块后续也将为大家带来丰富的功能，灵感还在，只差时间</p><h2 id="其它" tabindex="-1">其它 <a class="header-anchor" href="#其它" aria-label="Permalink to &quot;其它&quot;">​</a></h2><p>由于每天空闲时间有限，本文就先到这</p><p>如果读者还感觉意犹未尽，敬请期待后续更新，或持续关注一下<a href="https://github.com/ATQQ/time-control" target="_blank" rel="noreferrer">仓库</a>的状态</p><p>欢迎评论区提需求，交流探讨</p><p>本系列会不断的更新迭代，直至产品初代完成</p><ul><li><a href="https://github.com/ATQQ/time-control" target="_blank" rel="noreferrer">仓库地址</a></li></ul>',91),C=[u];function v(E,_,B,N,D,M){return s(),a("div",{"data-pagefind-body":!0,"data-pagefind-meta":"base64:JTdCJTIydGl0bGUlMjIlM0ElMjIlRTUlODElOUElRTQlQjglODAlRTQlQjglQUFDTCVFNyU4OSU4OCVFNyU5QSU4NCVFNiU5NyVCNiVFOSU5NyVCNCVFNyVBRSVBMSVFNyU5MCU4NiVFNSVCNyVBNSVFNSU4NSVCNyVFRiVCQyU4OCVFNCVCOSU5RCVFRiVCQyU4OSUyMiUyQyUyMmRhdGUlMjIlM0ExNjI4NTUzNjAwMDAwJTJDJTIydGFncyUyMiUzQSU1QiUyMiVFNiU4QSU4MCVFNiU5QyVBRiVFNyVBQyU5NCVFOCVBRSVCMCUyMiUyQyUyMiVFNCVCOCVBQSVFNCVCQSVCQSVFNCVCRCU5QyVFNSU5MyU4MSUyMiUyQyUyMkNMSSVFNSVCNyVBNSVFNSU4NSVCNyUyMiU1RCU3RA=="},C)}const U=i(m,[["render",v]]);export{V as __pageData,U as default};

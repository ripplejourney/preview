import{j as s,b as i,c as a,a7 as n}from"./chunks/framework.X1GJ8vuh.js";const E=JSON.parse('{"title":"NodeCLI工具原理解析","description":"","frontmatter":{"title":"NodeCLI工具原理解析","date":"2022-10-17T00:00:00.000Z","tags":["技术笔记","个人作品"],"categories":["技术笔记"]},"headers":[],"relativePath":"technology/works/node-cli.md","filePath":"technology/works/node-cli.md","lastUpdated":1670770660000}'),p={name:"technology/works/node-cli.md"},e=n(`<h1 id="node-cli工具原理解析" tabindex="-1">Node CLI工具原理解析 <a class="header-anchor" href="#node-cli工具原理解析" aria-label="Permalink to &quot;Node CLI工具原理解析&quot;">​</a></h1><blockquote><p>本文为稀土掘金技术社区首发签约文章，14天内禁止转载，14天后未获授权禁止转载，侵权必究！</p></blockquote><p>本文将主要介绍<code>CLI相关周边知识</code>，通过本文读者可以了解到<code>CLI的基本工作原理</code>，<code>注册全局指令</code>的几种方式、<code>Node CLI的基本工作原理</code>。</p><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><blockquote><p>CLI(Command-Line Interface) 命令行界面</p></blockquote><p>搞开发的同学，或多或少的都会接触到许多的命令行工具。</p><p>有生产力工具，也有有意思的小玩意、自动化任务处理等等。</p><p>命令行工具的安装方式就很多了。</p><p><code>win</code>上大部分是通过软件安装包安装，安装同时会通过<code>环境变量</code>配置相关指令。</p><p><code>linux</code>和<code>mac</code>上就比较丰富了，前者常用<code>yum</code>和<code>api-get</code>、mac 上就<code>brew</code>。</p><p>也有使用<code>wget</code>和<code>curl</code>拉取相关工具的<code>shell</code>脚本执行安装。</p><p>说了这么多工具，都不是本文要讲的工具，前端搬砖当然首选<code>node</code>，然后基于<code>npm</code>做包的分发。</p><p><em>PS：文中的示例都以<code>mac</code>为主</em></p><h2 id="可执行shell" tabindex="-1">可执行shell <a class="header-anchor" href="#可执行shell" aria-label="Permalink to &quot;可执行shell&quot;">​</a></h2><p><code>unix</code>系上大部分可执行文件都是基于<code>shell</code>的脚本。</p><p>比如随手写个<code>hello world</code></p><p>文件名<code>hello</code>,内容如下</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Hello world&quot;</span></span></code></pre></div><p><img src="https://img.cdn.sugarat.top/mdImg/MTY2NTkwNjg1MjMwNQ==665906852305" alt="图片" loading="lazy"></p><p>此时我们直接执行是会提醒没有执行权限，我们为当前用户加1个可执行权限</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">chmod</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> u+x</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hello</span></span></code></pre></div><p>然后再当前目录执行，就看到输出结果了</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./hello</span></span></code></pre></div><p><img src="https://img.cdn.sugarat.top/mdImg/MTY2NTkwNzgzMTQ1OA==665907831458" alt="图片" loading="lazy"></p><h2 id="注册全局指令" tabindex="-1">注册全局指令 <a class="header-anchor" href="#注册全局指令" aria-label="Permalink to &quot;注册全局指令&quot;">​</a></h2><p>为了使“指令”在全局任意位置都能被使用，就需要做相关操作了。</p><h3 id="环境变量" tabindex="-1">环境变量 <a class="header-anchor" href="#环境变量" aria-label="Permalink to &quot;环境变量&quot;">​</a></h3><p>相信大多数首次接触这个词的朋友都在<code>win</code>上深有体会。装<code>JDK</code>、<code>MySQL</code>时都避免不了有配置的操作。</p><p>如果想在其它目录直接执行<code>hello</code>就生效呢？那这就离不开环境变量配置了</p><p>咱们先看终端用的<code>shell</code>工具是什么。</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> $0</span></span></code></pre></div><p>我这里使用的是<code>zsh</code>,其它的常见的还有<code>bash</code></p><p><img src="https://img.cdn.sugarat.top/mdImg/MTY2NTkwODA4MDA1NA==665908080054" alt="图片" loading="lazy"></p><p>相应的配置文件分别是<code>.zshrc</code>和<code>.bashrc</code></p><p><img src="https://img.cdn.sugarat.top/mdImg/MTY2NTkwODIzNDg1Mw==665908234853" alt="图片" loading="lazy"></p><h3 id="alias指令" tabindex="-1">alias指令 <a class="header-anchor" href="#alias指令" aria-label="Permalink to &quot;alias指令&quot;">​</a></h3><p><strong>使用 alias指令设置别名</strong></p><p>指令格式</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">alias</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">别</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">名</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">指令或可执行文件路</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">径</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><p>添加内容如下</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">alias</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> hello</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/Users/sugar/Documents/diy-cli/hello</span></span></code></pre></div><p>立即生效配置</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">source</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.zshrc</span></span></code></pre></div><h3 id="export指令" tabindex="-1">export指令 <a class="header-anchor" href="#export指令" aria-label="Permalink to &quot;export指令&quot;">​</a></h3><p><strong>使用export命令添加添加相关目录</strong></p><p>指令格式</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> PATH</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$PATH:</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">路径 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">路径 2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">路径 N</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><p>添加内容如下</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> PATH</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$PATH:/Users/sugar/Documents/diy-cli</span></span></code></pre></div><p>以上2种方案都能达到目标的效果</p><p><img src="https://img.cdn.sugarat.top/mdImg/MTY2NTkwOTgzNDM0NQ==665909834345" alt="图片" loading="lazy"></p><p>如果每个工具都单独配一条规则。那会导致相关配置文件非常的庞大，也不方便维护。</p><p>实际上我们在用<code>npm i -g</code>安装的全局包的时候，并没有手动配置。那么这个是如何做到的呢。这个就离不开下面将要说到的<code>符号链接</code>了</p><h2 id="符号链接" tabindex="-1">符号链接 <a class="header-anchor" href="#符号链接" aria-label="Permalink to &quot;符号链接&quot;">​</a></h2><blockquote><p><code>软链接</code>类似于快捷方式，它可以指向任意文件系统中的一个文件或目录；硬链接也可以看作是文件或目录的快捷方式，但源文件删除了也不影响<code>硬链接</code>。</p></blockquote><p>先通过<code>which npm</code>看一下npm所在位置</p><p>打印一下<code>$PATH</code>的值，可以看到<code>npm</code>指令对应文件所在目录就在其中</p><p><img src="https://img.cdn.sugarat.top/mdImg/MTY2NTkxOTUwNzgzMQ==665919507831" alt="图片" loading="lazy"></p><p>展开目录内容可以看到文件类型都是<code>l（软连接）</code></p><p><img src="https://img.cdn.sugarat.top/mdImg/MTY2NTkxOTgwODA1OQ==665919808059" alt="图片" loading="lazy"></p><p>因此咱们可以小结出来 <strong>通过向已添加到$PATH变量中的目录，直接创建短链可以实现指令的自动注册全局</strong></p><p>下面实践演示一下</p><h3 id="ln指令" tabindex="-1">ln指令 <a class="header-anchor" href="#ln指令" aria-label="Permalink to &quot;ln指令&quot;">​</a></h3><p><strong>指令格式</strong></p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 硬链接</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ln</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> source</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> target</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 软连接</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ln</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> source</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> target</span></span></code></pre></div><p>接着上面之前的例子，再使用<code>export</code>完成对目录的添加后。咱们再随便建立个文件<code>hello2.sh</code>进行操作</p><p>内容如下</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Hello world2&quot;</span></span></code></pre></div><p>创建一个软链</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ln</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">sourc</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/hello.sh</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">targe</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">t</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/hello2</span></span></code></pre></div><p>操作结果如下</p><p><img src="https://img.cdn.sugarat.top/mdImg/MTY2NTkyMDk5MDQ3NA==665920990474" alt="图片" loading="lazy"></p><p>前面代码都是简单的写的<code>shell</code>脚本</p><p>前端当然是羧<code>js</code>，咱们把代码改成js。</p><p><code>hello.js</code></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;hello js&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>按照前面的步骤，完成可执行权限添加和软链的创建。</p><p><img src="https://img.cdn.sugarat.top/mdImg/MTY2NTkyMTQzOTg0Ng==665921439846" alt="图片" loading="lazy"></p><p>结果可以预测是会报错的，默认会被当做<code>shell</code>脚本进行执行。</p><p>那么如何指定为使用<code>node</code>去执行这个文件？</p><p>这就是我们下文要说到的<code>hashbang</code></p><h2 id="hashbang" tabindex="-1">Hashbang <a class="header-anchor" href="#hashbang" aria-label="Permalink to &quot;Hashbang&quot;">​</a></h2><blockquote><p><code>Hashbang</code>（也称为<code>Shebang</code>）是一个由井号和叹号构成的字符序列 #!，通常出现在文件开头，例如 <code>#!/usr/bin/env bash</code></p></blockquote><p>用于指定脚本的运行环境</p><p>于是，我们给前面的<code>hello.js</code>头部加上<code>#!/usr/bin/env node</code> 再次运行就成了</p><p><img src="https://img.cdn.sugarat.top/mdImg/MTY2NTk3NjM5NTkyNQ==665976395925" alt="图片" loading="lazy"></p><p>至此基本清楚了，如何将1个<code>js</code>脚本便捷的注册为1个全局可执行指令</p><h2 id="node-cli" tabindex="-1">Node CLI <a class="header-anchor" href="#node-cli" aria-label="Permalink to &quot;Node CLI&quot;">​</a></h2><p><code>node</code>官配包管理工具<code>npm</code>，通常每个项目中有一个<code>package.json</code>文件，用于描述项目的一些信息或者包含项目相关的配置内容</p><h3 id="指令注册" tabindex="-1">指令注册 <a class="header-anchor" href="#指令注册" aria-label="Permalink to &quot;指令注册&quot;">​</a></h3><p>其中<code>bin</code>属性用于设置<code>指令名称</code>和<code>执行脚本所在位置</code></p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;pkgName&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;bin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;command&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;exec/filepath.js&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>使用<code>npm install</code>安装依赖，会根据<code>bin</code>中的描述，创建1个<code>command</code>到<code>exec/filepath.js</code>的软链</p><p>软链所在目录区别于是否是<code>global</code>安装</p><p>这个目录可以通过<code>npm bin</code>指令查看</p><p><img src="https://img.cdn.sugarat.top/mdImg/MTY2NTk3NzgzMzUyOQ==665977833529" alt="图片" loading="lazy"></p><p>全局路径和前面使用 <code>which npm</code>获取的一致，当前项目的路径即在<code>node_modules/.bin</code>中</p><p>如果是本地开发CLI时，可以使用<code>npm link</code>指令根据<code>bin</code>描述信息，自动创建软链到<code>npm bin</code>所示的目录中，通过<code>-g</code>参数区别是否是全局</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 项目工作目录下执行</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> link</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># or</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> link</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span></span></code></pre></div><h3 id="命令行参数" tabindex="-1">命令行参数 <a class="header-anchor" href="#命令行参数" aria-label="Permalink to &quot;命令行参数&quot;">​</a></h3><p>前面主要都在围绕命令展开介绍。要实现工具的丰富功能离不开参数的组合，本小节就介绍下<code>Node</code>里如何处理<code>Command</code>与<code>Options</code>。</p><p>我们可以通过<code>process.argv</code>方法获取到运行时的 命令行入参</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(process.argv);</span></span></code></pre></div><p><img src="https://img.cdn.sugarat.top/mdImg/MTY2NjAxMzEwMTkzNQ==666013101935" alt="图片" loading="lazy"></p><p>各位置参数释义</p><ul><li><code>0</code>：Node可执行文件所在路径</li><li><code>1</code>：执行的js脚本路径</li><li><code>&gt;1</code>：用户运行时传入的参数</li></ul><p>通过这些参数，就能区分出用户要执行的行为</p><p>当然在实际开发中大部分场景下，都会使用第三方库去解析<code>命令行参数</code>，来降低代码的复杂度，提高可读性。</p><p>下面是一个使用<code>commander</code>的例子</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#!/usr/bin/env node</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Command</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;commander&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> pkg</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;./package.json&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> program</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Command</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">program.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(pkg.version)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">program</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">command</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;hello [paths...]&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">description</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;hello world demo&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">alias</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;h&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">option</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;-p, --pkg &lt;path&gt;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;set package.json path&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">action</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">paths</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">options</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;😄😄😄&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(paths);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(options);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    })</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">program.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">parse</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(process.argv)</span></span></code></pre></div><p><img src="https://img.cdn.sugarat.top/mdImg/MTY2NjAxNDgwMjQ1MQ==666014802451" alt="图片" loading="lazy"></p><p>可以看到使用第三方库辅助处理<code>参数</code>，已经非常完善了</p><p>除了老牌的<a href="https://www.npmjs.com/package/commander" target="_blank" rel="noreferrer">commander</a>之外还有其它的相同作用的库，这里就不展开介绍了。</p><h3 id="彩色打印" tabindex="-1">彩色打印 <a class="header-anchor" href="#彩色打印" aria-label="Permalink to &quot;彩色打印&quot;">​</a></h3><p>这个大家都不陌生了，大部分CLI打印结果都是<code>五颜六色</code>的</p><p>比如下面的例子</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;\x1B[36mhello  world\x1B[39m&#39;</span></span></code></pre></div><p><img src="https://img.cdn.sugarat.top/mdImg/MTY2NjAxNjQ3NTM3OA==666016475378" alt="图片" loading="lazy"></p><p>相关知识点是<code>ANSI Escape code</code>，这里就不展开说明了。</p><p>实际开发中，也很少直接写这种原始的数值。通常会使用<a href="https://www.npmjs.com/package/chalk" target="_blank" rel="noreferrer">chalk</a>这个库辅助，比如上面这个颜色对应代码如下。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Chalk</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;chalk&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Chalk.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cyan</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;hello world&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">));</span></span></code></pre></div><p>渐变色打印就常用<a href="https://www.npmjs.com/package/gradient-string" target="_blank" rel="noreferrer">gradient-string</a>这个库</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> gradient</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;gradient-string&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gradient</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;cyan&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;pink&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Hello world!&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">));</span></span></code></pre></div><p><img src="https://img.cdn.sugarat.top/mdImg/MTY2NjAxNzA5NTYwOQ==666017095609" alt="图片" loading="lazy"></p><p>简单两行代码效果就出来了</p><h3 id="终端交互" tabindex="-1">终端交互 <a class="header-anchor" href="#终端交互" aria-label="Permalink to &quot;终端交互&quot;">​</a></h3><p>在使用 例如<code>Vue CLI</code> 此类工具进行项目初始化的时候，会有<code>输入</code>，<code>单选</code>，<code>多选</code>等交互操作。</p><p><em>相关原理涉及内容太“抽象”，篇幅较大，后续通俗精简了再做分享</em></p><p>常用的第三方库就是<a href="https://www.npmjs.com/package/inquirer" target="_blank" rel="noreferrer">inquirer</a>这个库</p><p>下面是简单<code>checkbox</code>示例</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> inquirer</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;inquirer&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">inquirer</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">prompt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;checkbox&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            message: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;水果选择&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;fruits&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            choices: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;🍌&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;🍉&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;🍇&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ])</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">answers</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(answers);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    });</span></span></code></pre></div><p><img src="https://img.cdn.sugarat.top/mdImg/MTY2NjAyMDU3NDQzOQ==666020574439" alt="图片" loading="lazy"></p><h2 id="最后" tabindex="-1">最后 <a class="header-anchor" href="#最后" aria-label="Permalink to &quot;最后&quot;">​</a></h2><p>本文没有阐述非常深奥的知识点，只涉及日常的一些<code>基操</code>，有助于读者了解Node CLI 背后的工作原理。</p><p>如内容有不妥之处，可以评论区交流；有感兴趣希望深入了解的知识点也可评论区@。</p><p>完整示例代码移步=&gt;<a href="https://github.com/ATQQ/tools/tree/main/packages/demos/diy-cli" target="_blank" rel="noreferrer">Github</a></p>`,136),h=[e];function l(t,k,d,o,c,r){return i(),a("div",null,h)}const y=s(p,[["render",l]]);export{E as __pageData,y as default};

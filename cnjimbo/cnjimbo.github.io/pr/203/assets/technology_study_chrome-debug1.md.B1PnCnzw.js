import{_ as i,o as a,c as e,a7 as o}from"./chunks/framework.BuZVbaCu.js";const l="/preview/cnjimbo/cnjimbo.github.io/pr/203/assets/MTYxNzc3OTczNTY1NQ__617779735655.CsGGyEV7.png",s="/preview/cnjimbo/cnjimbo.github.io/pr/203/assets/MTYxNzc4MzYzNTA5MQ__617783635091.Dontog0I.png",t="/preview/cnjimbo/cnjimbo.github.io/pr/203/assets/MTYxNzc4MzU5Mzk1MQ__617783593951.oz8MeKQV.png",r="/preview/cnjimbo/cnjimbo.github.io/pr/203/assets/MTYxNzc4NDIyNTE5Mw__617784225193.B-7WLs7A.png",n="/preview/cnjimbo/cnjimbo.github.io/pr/203/assets/MTYxNzc4NDMxNjI0Mg__617784316242.NNm29bT8.png",h="/preview/cnjimbo/cnjimbo.github.io/pr/203/assets/MTYxNzc4NDQyMzM0NQ__617784423345.DR_LtThi.png",p="/preview/cnjimbo/cnjimbo.github.io/pr/203/assets/MTYxNzc4NTAyODUwMA__617785028500.Bo0ciMkz.png",c="/preview/cnjimbo/cnjimbo.github.io/pr/203/assets/MTYxNzc4NTIzODczNQ__617785238735.u9QALv1v.png",d="/preview/cnjimbo/cnjimbo.github.io/pr/203/assets/MTYxNzc4NjAwMDMwOA__617786000308.e6Ctjw3F.png",m="/preview/cnjimbo/cnjimbo.github.io/pr/203/assets/MTYxNzc4NjAyMTIyNw__617786021227.C0QNLwPC.png",g="/preview/cnjimbo/cnjimbo.github.io/pr/203/assets/MTYxNzc4NzU5OTQ0Mg__617787599442.DIhHmuHQ.png",u="/preview/cnjimbo/cnjimbo.github.io/pr/203/assets/MTYxNzc5NzE0NzA3Nw__617797147077.G0S6vxGO.png",b="/preview/cnjimbo/cnjimbo.github.io/pr/203/assets/MTYxNzc5NzM3MzkzMg__617797373932.DJKU4r6R.png",k="/preview/cnjimbo/cnjimbo.github.io/pr/203/assets/MTYxNzc5Nzc2MjYwOA__617797762608.D2a0I62j.png",_="/preview/cnjimbo/cnjimbo.github.io/pr/203/assets/MTYxNzc5ODIxNzkxMQ__617798217911.WFcwxrA4.png",y="/preview/cnjimbo/cnjimbo.github.io/pr/203/assets/MTYxNzc5ODI4Mzc2Nw__617798283767.CTuSCw-l.png",z="/preview/cnjimbo/cnjimbo.github.io/pr/203/assets/MTYxNzc5ODM3NjczMg__617798376732.DtrZonNa.png",x="/preview/cnjimbo/cnjimbo.github.io/pr/203/assets/MTYxNzc5ODUyMzQ3Ng__617798523476.D6OO4KVv.png",D=JSON.parse('{"title":"Chrome调试技巧-基础","description":"","frontmatter":{"title":"Chrome调试技巧-基础","date":"2021-04-07T00:00:00.000Z","tags":["技术笔记","学习笔记"],"categories":["技术笔记"]},"headers":[],"relativePath":"technology/study/chrome-debug1.md","filePath":"technology/study/chrome-debug1.md","lastUpdated":1720544135000}'),N={name:"technology/study/chrome-debug1.md"},q=o('<h1 id="chrome-调试技巧-基础" tabindex="-1">Chrome 调试技巧-基础 <a class="header-anchor" href="#chrome-调试技巧-基础" aria-label="Permalink to &quot;Chrome 调试技巧-基础&quot;">​</a></h1><h2 id="chrome简介" tabindex="-1">Chrome简介 <a class="header-anchor" href="#chrome简介" aria-label="Permalink to &quot;Chrome简介&quot;">​</a></h2><ol><li><a href="https://zh.wikipedia.org/wiki/Google_Chrome" target="_blank" rel="noreferrer">维基百科(中)</a></li><li><a href="https://en.wikipedia.org/wiki/Google_Chrome" target="_blank" rel="noreferrer">维基百科(英)</a></li></ol><p>todo: 摘抄一小段有意思的内容</p><h2 id="chrome-devtools" tabindex="-1"><a href="https://developer.chrome.com/docs/devtools/" target="_blank" rel="noreferrer">Chrome Devtools</a> <a class="header-anchor" href="#chrome-devtools" aria-label="Permalink to &quot;[Chrome Devtools](https://developer.chrome.com/docs/devtools/)&quot;">​</a></h2><p>TODO: 开一个专题,详细介绍各个面板的使用方法与场景</p><p><img src="'+l+'" alt="图片" loading="lazy"></p><p>开发调试前端应用必备</p><ul><li>打开快捷键 <ul><li>F12</li><li>Windows: <code>Ctrl</code> + <code>Shift</code> + <code>I</code></li><li>Mac: <code>Cmd</code> + <code>Opt</code> + <code>I</code></li></ul></li></ul><h2 id="面板简介" tabindex="-1">面板简介 <a class="header-anchor" href="#面板简介" aria-label="Permalink to &quot;面板简介&quot;">​</a></h2><ol><li>Element - 元素面板</li><li>Console - 控制台面板</li><li>Network - 网络面板</li><li>Application - 应用面板</li><li>Performance - 性能面板</li><li>Sources - 源代码面板</li><li>Memory - 内存面板</li><li>Security - 安全面板</li><li>Lighthouse - 生成一个有关页面性能的报告工具</li></ol><h3 id="element" tabindex="-1">Element <a class="header-anchor" href="#element" aria-label="Permalink to &quot;Element&quot;">​</a></h3><p>元素面板可以自由的操作页面 DOM 和 CSS,所写即所得</p><ul><li>检查和调整页面</li><li>样式修改</li><li>DOM <ul><li>修改</li><li>监听变动</li><li>操纵绑定的事件</li><li>查看参数</li></ul></li><li>...</li></ul><h3 id="console" tabindex="-1">Console <a class="header-anchor" href="#console" aria-label="Permalink to &quot;Console&quot;">​</a></h3><p>使用控制台面板记录诊断信息,查看console内容</p><ul><li>可以用于直接执行JS</li><li>命令交互</li><li>console调试大法</li><li>...</li></ul><h3 id="network" tabindex="-1">Network <a class="header-anchor" href="#network" aria-label="Permalink to &quot;Network&quot;">​</a></h3><p>使用网络面板可以了解请求和下载的资源文件的概况</p><ul><li>用于优化网页加载性能</li><li>了解资源加载时间轴</li><li>网络流量/带宽使用情况</li><li>...</li></ul><h3 id="application" tabindex="-1">Application <a class="header-anchor" href="#application" aria-label="Permalink to &quot;Application&quot;">​</a></h3><p>应用面板可以检查加载的所有资源</p><p>包括:</p><ul><li>IndexedDB 与 Web SQL 数据库</li><li>本地和会话存储,cookie</li><li>应用程序缓存</li><li>图像,字体,样式表,脚本等等</li><li>...</li></ul><h3 id="performance" tabindex="-1">Performance <a class="header-anchor" href="#performance" aria-label="Permalink to &quot;Performance&quot;">​</a></h3><p>记录和查看网站生命周期内发生的各种事件</p><ul><li>性能检测</li><li>帮助优化网页性能</li><li>...</li></ul><h3 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-label="Permalink to &quot;Source&quot;">​</a></h3><p>可以使用源代码面板来断点调试js代码</p><ul><li>断点调试</li><li>...</li></ul><h3 id="memory" tabindex="-1">Memory <a class="header-anchor" href="#memory" aria-label="Permalink to &quot;Memory&quot;">​</a></h3><ul><li>跟踪内存泄漏</li><li>JavaScript CPU 分析器</li><li>内存堆区分析器</li><li>...</li></ul><h3 id="security" tabindex="-1">Security <a class="header-anchor" href="#security" aria-label="Permalink to &quot;Security&quot;">​</a></h3><ul><li>证书问题</li><li>安全相关问题</li></ul><h3 id="lighthouse" tabindex="-1">Lighthouse <a class="header-anchor" href="#lighthouse" aria-label="Permalink to &quot;Lighthouse&quot;">​</a></h3><p>检测网页性能的插件工具</p><h2 id="chrome版本" tabindex="-1">Chrome版本 <a class="header-anchor" href="#chrome版本" aria-label="Permalink to &quot;Chrome版本&quot;">​</a></h2><h3 id="查看当前版本" tabindex="-1">查看当前版本 <a class="header-anchor" href="#查看当前版本" aria-label="Permalink to &quot;查看当前版本&quot;">​</a></h3><p>在地址栏输入:</p><ul><li><strong>chrome://help</strong></li><li><strong>chrome://version</strong>: 更加详细的查看</li></ul><p><img src="'+s+'" alt="图片" loading="lazy"></p><p><img src="'+t+'" alt="图片" loading="lazy"></p><h2 id="有趣的功能地址" tabindex="-1">有趣的功能地址 <a class="header-anchor" href="#有趣的功能地址" aria-label="Permalink to &quot;有趣的功能地址&quot;">​</a></h2><h3 id="dino-小游戏" tabindex="-1">dino 小游戏 <a class="header-anchor" href="#dino-小游戏" aria-label="Permalink to &quot;dino 小游戏&quot;">​</a></h3><p><strong>chrome://dino/</strong></p><p><img src="'+r+'" alt="图片" loading="lazy"></p><h3 id="查看实验中的功能" tabindex="-1">查看实验中的功能 <a class="header-anchor" href="#查看实验中的功能" aria-label="Permalink to &quot;查看实验中的功能&quot;">​</a></h3><p><strong>chrome://flags/</strong></p><p>这里有很多正在试验中的功能,可以通过这个面板来选择启动/禁用相对应的功能</p><p><img src="'+n+'" alt="图片" loading="lazy"></p><h3 id="查看所有功能" tabindex="-1">查看所有功能 <a class="header-anchor" href="#查看所有功能" aria-label="Permalink to &quot;查看所有功能&quot;">​</a></h3><p><strong>chrome://chrome-urls/</strong></p><p><img src="'+h+`" alt="图片" loading="lazy"></p><h2 id="全局方法-copy" tabindex="-1">全局方法 copy(...) <a class="header-anchor" href="#全局方法-copy" aria-label="Permalink to &quot;全局方法 copy(...)&quot;">​</a></h2><p>可以<code>copy</code>方法在 <strong>console 面板</strong> 中复制任何能拿到的资源到<code>剪贴板</code>中</p><p>例如:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">copy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(location)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">copy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(document.title)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">copy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">querySelector</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(selector).innerHTML)</span></span></code></pre></div><h2 id="store-as-global" tabindex="-1">Store as global <a class="header-anchor" href="#store-as-global" aria-label="Permalink to &quot;Store as global&quot;">​</a></h2><p><img src="`+p+'" alt="图片" loading="lazy"></p><p>可以将目标变量存储为一个全局变量 tempX</p><p>在不影响它原来值的情况下,可以用这些值做一些测试操作</p><h2 id="保存堆栈信息" tabindex="-1">保存堆栈信息 <a class="header-anchor" href="#保存堆栈信息" aria-label="Permalink to &quot;保存堆栈信息&quot;">​</a></h2><p><img src="'+c+'" alt="图片" loading="lazy"></p><p>右键错误信息,即可将其存储为日志文件</p><h2 id="一些快键键" tabindex="-1">一些快键键 <a class="header-anchor" href="#一些快键键" aria-label="Permalink to &quot;一些快键键&quot;">​</a></h2><ol><li>ctrl + shift + D : 切换 DevTools 窗口布局 (来回切换最近使用两种布局方案)</li><li>ctrl + [ 和 ctrl + ] : 左右切换 DevTools 的面板</li><li>ctrl + number: 按照顺序切换DevTools面板</li></ol><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>第3组快捷键默认是禁用状态。需要手动打开:</p></div><p><img src="'+d+'" alt="图片" loading="lazy"></p><p><img src="'+m+'" alt="图片" loading="lazy"></p><p>其余所有快捷键</p><p><img src="'+g+'" alt="图片" loading="lazy"></p><h2 id="command-menu" tabindex="-1">Command Menu <a class="header-anchor" href="#command-menu" aria-label="Permalink to &quot;Command Menu&quot;">​</a></h2><p>快捷键 Ctrl + Shift + P</p><p><img src="'+u+'" alt="图片" loading="lazy"></p><p>提供了很多实用功能</p><h3 id="截图" tabindex="-1">截图 <a class="header-anchor" href="#截图" aria-label="Permalink to &quot;截图&quot;">​</a></h3><p><img src="'+b+'" alt="图片" loading="lazy"></p><ul><li>页面截图: Capture full size screenshot</li><li>指定区域: Capture area screenshot</li><li>指定DOM节点: Capture node screenshot</li><li>当前屏幕: Capture screenshot</li></ul><h3 id="主题切换" tabindex="-1">主题切换 <a class="header-anchor" href="#主题切换" aria-label="Permalink to &quot;主题切换&quot;">​</a></h3><p><img src="'+k+'" alt="图片" loading="lazy"></p><h2 id="预设代码块" tabindex="-1">预设代码块 <a class="header-anchor" href="#预设代码块" aria-label="Permalink to &quot;预设代码块&quot;">​</a></h2><p>通过预设脚本,将在console面板中高频使用的代码块保存下来</p><p>如:统计页面中的中文数量</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(document.body.textContent.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">replace</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">[</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">^</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\u4e00-\\u9fa5]</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">g</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">length</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p><img src="'+_+'" alt="图片" loading="lazy"></p><p>接下来复用这个代码块,在Source面板的 snippets中新建一个Snippet并将代码块写入</p><p><img src="'+y+'" alt="图片" loading="lazy"></p><p><img src="'+z+'" alt="图片" loading="lazy"></p><p>接下来通过指令运行 <code>!scriptName</code>即可执行脚本</p><p>tips: 默认打开Command会有一个 <code>&gt;</code> 记得先删除</p><p><img src="'+x+'" alt="图片" loading="lazy"></p><p>这个用来写 <strong>一键评教</strong> 脚本贼方便</p>',92),C=[q];function M(f,E,v,j,w,T){return a(),e("div",{"data-pagefind-body":!0},C)}const F=i(N,[["render",M]]);export{D as __pageData,F as default};

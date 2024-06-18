import{j as s,b as i,c as a,a7 as n}from"./chunks/framework.B0f4rbfy.js";const c=JSON.parse('{"title":"ServerLess之云函数实践-天气API","description":"","frontmatter":{"isTimeLine":true,"title":"ServerLess之云函数实践-天气API","date":"2020-11-23T00:00:00.000Z","tags":["技术笔记","技术教程"],"categories":["技术笔记"]},"headers":[],"relativePath":"technology/learn/faas.md","filePath":"technology/learn/faas.md","lastUpdated":1670770660000}'),t={name:"technology/learn/faas.md"},h=n(`<h1 id="serverless之云函数实践-天气api" tabindex="-1">ServerLess之云函数实践-天气API <a class="header-anchor" href="#serverless之云函数实践-天气api" aria-label="Permalink to &quot;ServerLess之云函数实践-天气API&quot;">​</a></h1><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p>云计算是大势所趋</p><p>Serverless 架构即“⽆服务器”架构，它是一种全新的架构方式，是云计算时代⼀种⾰命性的架构模式</p><p>FaaS(Function as a Service - 函数即服务) 是在无状态容器中运行的事件驱动型计算的执行模型</p><p>☁️云函数算是FaaS的一种具体的形式，由云商（腾讯云，阿里云，七牛云等等）提供计算平台，开发者只需关注函数逻辑的实现，将服务器相关的配置管理工作统统交给云商去做，不再花大精力去管理服务器</p><p>我们只需要提供一段代码，由云商研制的 FaaS 方案帮我们选择语言对应技术栈的最佳实践，基于内置的扩展机制按实际需要，进行动态扩展计算资源，轻松部署服务到公网，并提供可靠的监控、报警保障，不需要以前一样，服务器资源不是大部分时间处于闲置状态，就是遇到超大浏览需要紧急扩容</p><p>给 FaaS 一个函数，就能上线一个高可用的服务</p><p>简单的服务接口开发的专业性要求降低了，前端有了更大的发挥空间，包括但不限于：</p><ul><li>BFF（Backend For Frontend）</li><li>SSR（Server-Side Rendering）</li></ul><p>上面简单的介绍了一下“云函数”，有一点抽象，下面就结合实操，来搞一个”实用的“</p><p><img src="http://wx3.sinaimg.cn/large/78b88159gy1gkr8mh459dg208w08cu0x.gif" alt="" loading="lazy"></p><h2 id="搞一个简单的天气查询api" tabindex="-1">☁️搞一个简单的天气查询API <a class="header-anchor" href="#搞一个简单的天气查询api" aria-label="Permalink to &quot;:cloud:搞一个简单的天气查询API&quot;">​</a></h2><p>就像这样的：<a href="https://service-rixme52n-1256505457.cd.apigw.tencentcs.com/release/checkWeather?cityId=3" target="_blank" rel="noreferrer">点我体验</a></p><p>参数：cityId <a href="https://www.weiyun.com/office?fid=1c8be5bf-7ee0-451d-ba19-0cd31371d7a2&amp;pid=2d1ebb3d8cd9f0ef71a8cf4cb1f75120&amp;ppid=2d1ebb3d07e603741f4015313cc3cd2b&amp;size=908800&amp;share_key=5lgsGhw" target="_blank" rel="noreferrer">地区参照表</a></p><h2 id="所使用到的技术与平台" tabindex="-1">所使用到的技术与平台 <a class="header-anchor" href="#所使用到的技术与平台" aria-label="Permalink to &quot;所使用到的技术与平台&quot;">​</a></h2><ul><li>Node.js (云函数选用JavaScript语言)</li><li><a href="https://cloud.tencent.com/" target="_blank" rel="noreferrer">腾讯云</a> - 免费的云函数服务</li><li><a href="https://market.aliyun.com/products/57096001/cmapi023656.html?accounttraceid=235b91fa4fc145eb8c2e539568143ea2arym#sku=yuncode1765600000" target="_blank" rel="noreferrer">阿里云</a> - 免费的墨迹天气查询服务</li></ul><p>下面开始手把手教程</p><h2 id="腾讯云侧" tabindex="-1">腾讯云侧 <a class="header-anchor" href="#腾讯云侧" aria-label="Permalink to &quot;腾讯云侧&quot;">​</a></h2><h3 id="_1-注册账号" tabindex="-1">1. \b注册账号 <a class="header-anchor" href="#_1-注册账号" aria-label="Permalink to &quot;1. \b注册账号&quot;">​</a></h3><p>\b注册腾讯云账号并登录</p><p><a href="https://cloud.tencent.com/" target="_blank" rel="noreferrer">https://cloud.tencent.com/</a></p><h3 id="_2-进入控制台" tabindex="-1">2. 进入控制台 <a class="header-anchor" href="#_2-进入控制台" aria-label="Permalink to &quot;2. 进入控制台&quot;">​</a></h3><p>点击右上角进入控制台</p><p><img src="https://img.cdn.sugarat.top/mdImg/MTYwNjA1OTA0OTA5MA==606059049090" alt="图片" loading="lazy"></p><h3 id="_3-云函数-函数服务" tabindex="-1">3. 云函数-函数服务 <a class="header-anchor" href="#_3-云函数-函数服务" aria-label="Permalink to &quot;3. 云函数-函数服务&quot;">​</a></h3><p>左上角选择云产品，输入云函数，选择 云函数-函数服务</p><p><img src="https://img.cdn.sugarat.top/mdImg/MTYwNjA1OTEwOTg4NQ==606059109885" alt="图片" loading="lazy"></p><h3 id="_4-新建云函数" tabindex="-1">4. 新建云函数 <a class="header-anchor" href="#_4-新建云函数" aria-label="Permalink to &quot;4. 新建云函数&quot;">​</a></h3><p>新建一个云函数</p><p><img src="https://img.cdn.sugarat.top/mdImg/MTYwNjA1OTE5MDY3NA==606059190674" alt="图片" loading="lazy"></p><h3 id="_5-录入基本信息" tabindex="-1">5. 录入基本信息 <a class="header-anchor" href="#_5-录入基本信息" aria-label="Permalink to &quot;5. 录入基本信息&quot;">​</a></h3><ul><li>符合规范的函数名称</li><li>环境选择一个Node.js的环境</li><li>选择空白函数</li><li>然后下一步 <img src="https://img.cdn.sugarat.top/mdImg/MTYwNjA1OTI2MDczNA==606059260734" alt="图片" loading="lazy"></li></ul><h3 id="_6-完成创建" tabindex="-1">6. 完成创建 <a class="header-anchor" href="#_6-完成创建" aria-label="Permalink to &quot;6. 完成创建&quot;">​</a></h3><p>直接点击完成，什么都不更改</p><p><img src="https://img.cdn.sugarat.top/mdImg/MTYwNjA1OTUwNjc4NQ==606059506785" alt="图片" loading="lazy"></p><h3 id="_7-触发器" tabindex="-1">7. 触发器 <a class="header-anchor" href="#_7-触发器" aria-label="Permalink to &quot;7. 触发器&quot;">​</a></h3><p>然后来到这个界面，点击触发管理</p><p><img src="https://img.cdn.sugarat.top/mdImg/MTYwNjA1OTU5ODY4MQ==606059598681" alt="图片" loading="lazy"></p><h3 id="_8-创建触发器" tabindex="-1">8. 创建触发器 <a class="header-anchor" href="#_8-创建触发器" aria-label="Permalink to &quot;8. 创建触发器&quot;">​</a></h3><p>创建触发器，填写相关信息</p><ul><li>触发方式-API网关触发</li><li>请求方法-GET</li><li>鉴权方法-免鉴权</li></ul><p><img src="https://img.cdn.sugarat.top/mdImg/MTYwNjA1OTcwMDk3NA==606059700974" alt="图片" loading="lazy"></p><h3 id="_9-大功告成" tabindex="-1">9. 大功告成 <a class="header-anchor" href="#_9-大功告成" aria-label="Permalink to &quot;9. 大功告成&quot;">​</a></h3><p>体验一下生成的触发器<a href="https://service-36n2x31h-1256505457.cd.apigw.tencentcs.com/release/demoAPi?param1=%E4%B8%AD%E6%96%87&amp;param2=123" target="_blank" rel="noreferrer">链接</a></p><p><img src="https://img.cdn.sugarat.top/mdImg/MTYwNjA1OTgxOTU3NQ==606059819575" alt="图片" loading="lazy"></p><h3 id="_10-观察接口" tabindex="-1">10. 观察接口 <a class="header-anchor" href="#_10-观察接口" aria-label="Permalink to &quot;10. 观察接口&quot;">​</a></h3><p>观察响应结果与我们的代码</p><p><strong>响应结果</strong></p><p><img src="https://img.cdn.sugarat.top/mdImg/MTYwNjA2MDAyMTk0Mg==606060021942" alt="图片" loading="lazy"></p><p><strong>我们的云函数代码</strong></p><p><img src="https://img.cdn.sugarat.top/mdImg/MTYwNjA2MDEwMjU0NA==606060102544" alt="图片" loading="lazy"></p><p>关注红色框中的内容</p><ul><li>执行方法：index.main_handler <ul><li>index 对应的就是 <code>index.js</code></li><li>main_handler就是就是index.js中对外暴露的 <code>main_handler</code>方法</li></ul></li></ul><p>再看代码</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;use strict&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">main_handler</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> async</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">event</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">context</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Hello World&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(event)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(event[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;non-exist&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(context)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> event</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><p>根据上上图返回的结果可知其对应的是<code>event</code>里面的内容: 即我们可以在event中取到我们请求的参数,header,body等信息，便于我们执行后续逻辑</p><p>context的内容（console.log的内容）在哪里看?</p><h3 id="_11-日志查询" tabindex="-1">11. 日志查询 <a class="header-anchor" href="#_11-日志查询" aria-label="Permalink to &quot;11. 日志查询&quot;">​</a></h3><p><img src="https://img.cdn.sugarat.top/mdImg/MTYwNjA2MDQ5NDAwOA==606060494008" alt="图片" loading="lazy"></p><p>在日志查询面板可以查询到我们接口的调用信息，响应状态与log的内容</p><h3 id="_12-安装依赖的模块" tabindex="-1">12. 安装依赖的模块 <a class="header-anchor" href="#_12-安装依赖的模块" aria-label="Permalink to &quot;12. 安装依赖的模块&quot;">​</a></h3><p>这个和本地安装差不多，一个敲命令，一个点按钮</p><p>我们使用本地终端创建一个package.json文件</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span></span></code></pre></div><p><img src="https://img.cdn.sugarat.top/mdImg/MTYwNjA2MDcyOTQyMg==606060729422" alt="图片" loading="lazy"></p><p>package.json</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;faas&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;version&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1.0.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;description&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;main&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;index.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;scripts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;test&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;echo </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Error: no test specified</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &amp;&amp; exit 1&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;keywords&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;author&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;license&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ISC&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>如安装axios,本地执行安装先</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> axios</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># or</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> axios</span></span></code></pre></div><p>此时的package.json</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;faas&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;version&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1.0.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;description&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;main&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;index.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;scripts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;test&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;echo </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Error: no test specified</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &amp;&amp; exit 1&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;keywords&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;author&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;license&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ISC&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;dependencies&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;axios&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;^0.21.0&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>在平台上创建一个 package.json文件,并把上述内容粘贴进去,<code>ctrl/command + S</code> 保存修改的内容</p><p><img src="https://img.cdn.sugarat.top/mdImg/MTYwNjA2MDk5Mzc5NA==606060993794" alt="图片" loading="lazy"></p><p><img src="https://img.cdn.sugarat.top/mdImg/MTYwNjA2MTA0MTkzNg==606061041936" alt="图片" loading="lazy"></p><p>选择在线安装依赖，然后点击保存</p><p><img src="https://img.cdn.sugarat.top/mdImg/MTYwNjA2MTEzNjU5NA==606061136594" alt="图片" loading="lazy"></p><p>安装完成后 会出现 node_modules目录</p><p><img src="https://img.cdn.sugarat.top/mdImg/MTYwNjA2MTU3NjI5Ng==606061576296" alt="图片" loading="lazy"></p><p>JS云函数创建相关流程，差不都陈述完毕</p><p>下面开始我们的代码编写</p><h3 id="天气云函数编写" tabindex="-1">天气云函数编写 <a class="header-anchor" href="#天气云函数编写" aria-label="Permalink to &quot;天气云函数编写&quot;">​</a></h3><p>代码同步到线上的方式</p><ul><li>可以本地编辑后上传文件</li><li>使用腾讯云的cli工具上传</li><li>复制粘贴</li></ul><p>这里比较简单我们就复制粘贴了</p><p>先简单编写一下大体结构，然后点击保存，再访问刚刚的触发器<a href="https://service-36n2x31h-1256505457.cd.apigw.tencentcs.com/release/demoAPi?cityId=666" target="_blank" rel="noreferrer">链接</a>观察返回的结果</p><p>index.js</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;use strict&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> http</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;axios&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).default</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> getNowWeather</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">cityId</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 待编写</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        data:{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            cityId</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">main_handler</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> async</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">event</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">context</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 结构取得url中传递的参数</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">queryString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cityId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> event</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> getNowWeather</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(cityId)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><p>下面实现<code>getNowWeather</code>的逻辑就要用到阿里云的服务了</p><h2 id="阿里云侧" tabindex="-1">阿里云侧 <a class="header-anchor" href="#阿里云侧" aria-label="Permalink to &quot;阿里云侧&quot;">​</a></h2><p>先白嫖个服务</p><p><a href="https://market.aliyun.com/products/57096001/cmapi023656.html?accounttraceid=235b91fa4fc145eb8c2e539568143ea2arym#sku=yuncode1765600000" target="_blank" rel="noreferrer">阿里云-免费版气象天气服务（cityid）-墨迹天气</a></p><p>根据其文档中的请求示例,我们先构建出 Node版本的方法</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> http</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;axios&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).default</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> getNowWeather</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">cityId</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> token</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> appcode</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> nowStatusURL</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;http://freecityid.market.alicloudapi.com/whapi/json/alicityweather/briefcondition&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 精简实况的请求URL</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> data</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`cityId=\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cityId</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}&amp;token=\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">token</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}\`</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 请求参数</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> headers</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// header</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &#39;Authorization&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`APPCODE \${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">appcode</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &#39;Content-Type&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;application/x-www-form-urlencoded; charset=UTF-8&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 发送请求</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> http.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">post</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(nowStatusURL, data, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        headers</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">res</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> res.data)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>购买服务后根据<a href="https://market.aliyun.com/products/57096001/cmapi023656.html?accounttraceid=235b91fa4fc145eb8c2e539568143ea2arym#sku=yuncode1765600000" target="_blank" rel="noreferrer">文档</a>找到<a href="https://share.weiyun.com/5ebmy2i?spm=5176.730006-56956004-57096001-cmapi023656.content.12.4afb308fDQi0lQ" target="_blank" rel="noreferrer">token</a>与<a href="https://help.aliyun.com/document_detail/157953.html?spm=5176.730006-56956004-57096001-cmapi023656.content.9.4afb308fDQi0lQ" target="_blank" rel="noreferrer">appcode</a>即可</p><p><a href="https://apigateway.console.aliyun.com/?spm=5176.12818093.products-recent.dapigateway.718e16d05FzxRX#/cn-beijing/purchasedApis/list" target="_blank" rel="noreferrer">控制台</a>-&gt;API网关-&gt;华北2（北京）</p><p><img src="https://img.cdn.sugarat.top/mdImg/MTYwNjA2MzU3MTA1OA==606063571058" alt="图片" loading="lazy"></p><p>为了节约查找token与appcode的时间，下面列一下步骤（吐槽，阿里云的文档太拦了，不方便信息定位）</p><h3 id="token与appcode" tabindex="-1">token与appcode <a class="header-anchor" href="#token与appcode" aria-label="Permalink to &quot;token与appcode&quot;">​</a></h3><p><a href="https://apigateway.console.aliyun.com/?spm=5176.12818093.products-recent.dapigateway.718e16d05FzxRX#/cn-beijing/apps/list?AppName=" target="_blank" rel="noreferrer">API网关</a>页面地址</p><ol><li>token: 应用管理-&gt;选择一个应用-&gt;已授权API列表-&gt;选择自己要查看的API-&gt;点击调试API-&gt;调试面板的token参数即是所需参数</li><li>appcode: 应用管理-&gt;选择一个应用-&gt;AppCode面板</li></ol><p><img src="https://img.cdn.sugarat.top/mdImg/MTYwNjA2Mzk4NTYyOQ==606063985629" alt="图片" loading="lazy"></p><p><img src="https://img.cdn.sugarat.top/mdImg/MTYwNjA2NDE0NzU2Mg==606064147562" alt="图片" loading="lazy"></p><h2 id="最终代码" tabindex="-1">最终代码 <a class="header-anchor" href="#最终代码" aria-label="Permalink to &quot;最终代码&quot;">​</a></h2><p><img src="https://img.cdn.sugarat.top/mdImg/MTYwNjA2NDY3MDM4MQ==606064670381" alt="图片" loading="lazy"></p><p>index.js</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;use strict&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> http</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;axios&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).default</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> getNowWeather</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">cityId</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> token</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> appcode</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> nowStatusURL</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;http://freecityid.market.alicloudapi.com/whapi/json/alicityweather/briefcondition&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 精简实况的请求URL</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> data</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`cityId=\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cityId</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}&amp;token=\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">token</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}\`</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 请求参数</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> headers</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// header</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &#39;Authorization&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`APPCODE \${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">appcode</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &#39;Content-Type&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;application/x-www-form-urlencoded; charset=UTF-8&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 发送请求</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> http.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">post</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(nowStatusURL, data, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        headers</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">res</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> res.data)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">main_handler</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> async</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">event</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">context</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">queryString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cityId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> event</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> getNowWeather</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(cityId)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><p>触发器<a href="https://service-36n2x31h-1256505457.cd.apigw.tencentcs.com/release/demoAPi?cityId=4" target="_blank" rel="noreferrer">链接</a></p><h2 id="最后" tabindex="-1">最后 <a class="header-anchor" href="#最后" aria-label="Permalink to &quot;最后&quot;">​</a></h2><p>到此一个云函数就开发完毕了</p><p>可以感觉到，如果熟悉创建流程了，只需要几分钟就能创建一个提供服务的API，极大的节约了成本</p><p>不懂服务端部署，服务器运维，Linux的开发者可以通过 云函数+云数据库(关系数据库，非关系数据库) 快速搭建一个后端服务</p><p>文件存储服务可以使用OSS</p><p>\b开发者只需要通过云函数调用各服务提供的API即可完成一个后端服务的构建</p><div class="tip custom-block"><p class="custom-block-title">参考</p><ul><li><a href="https://cloud.tencent.com/developer/article/1666644" target="_blank" rel="noreferrer">FaaS 给前端带来了什么？</a></li><li><a href="https://juejin.cn/post/6897509349246107661" target="_blank" rel="noreferrer">三分钟给女票写个“彩虹屁”bot | 🏆 技术专题第七期征文</a></li></ul></div>`,115),p=[h];function l(e,k,r,d,E,g){return i(),a("div",null,p)}const y=s(t,[["render",l]]);export{c as __pageData,y as default};

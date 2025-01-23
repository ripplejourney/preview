import{_ as i,o as a,c as e,aa as n}from"./chunks/framework.CSef_RB6.js";const t="/preview/ripplejourney/ripplejourney.github.io/pr/7/assets/MTYyOTM4NTA0MDE2MQ__629385040161.BYH1HUf4.png",g=JSON.parse('{"title":"Node中require与fs.readFile读取JSON文件的对比","description":"","frontmatter":{"title":"Node中require与fs.readFile读取JSON文件的对比","date":"2021-08-19T00:00:00.000Z","tags":["技术笔记","技术教程"],"categories":["技术笔记"],"head":[["script",{},"!function(p){\\"use strict\\";!function(t){var s=window,e=document,i=p,c=\\"\\".concat(\\"https:\\"===e.location.protocol?\\"https://\\":\\"http://\\",\\"sdk.51.la/js-sdk-pro.min.js\\"),n=e.createElement(\\"script\\"),r=e.getElementsByTagName(\\"script\\")[0];n.type=\\"text/javascript\\",n.setAttribute(\\"charset\\",\\"UTF-8\\"),n.async=!0,n.src=c,n.id=\\"LA_COLLECT\\",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({\\"id\\":\\"Jgmg5avjAUvoyePS\\",\\"ck\\":\\"Jgmg5avjAUvoyePS\\",\\"hashMode\\":true});"]]},"headers":[],"relativePath":"technology/learn/node-require-json.md","filePath":"technology/learn/node-require-json.md","lastUpdated":1720544135000}'),l={name:"technology/learn/node-require-json.md"};function h(p,s,k,r,d,o){return a(),e("div",{"data-pagefind-body":!0},s[0]||(s[0]=[n(`<h1 id="node中require与fs-readfile读取json文件的对比" tabindex="-1">Node中require与fs.readFile读取JSON文件的对比 <a class="header-anchor" href="#node中require与fs-readfile读取json文件的对比" aria-label="Permalink to &quot;Node中require与fs.readFile读取JSON文件的对比&quot;">​</a></h1><h2 id="背景" tabindex="-1">背景 <a class="header-anchor" href="#背景" aria-label="Permalink to &quot;背景&quot;">​</a></h2><p>在做<a href="https://github.com/ATQQ/time-control" target="_blank" rel="noreferrer">时间管理工具</a>出现了一个问题</p><p><a href="https://github.com/ATQQ/time-control/blob/2ce91222ac937dc10205d1153cee181985d87a5a/src/utils/index.js#L188" target="_blank" rel="noreferrer">代码</a>中使用require读取JSON文件，服务端启动后发现当JSON文件发生改动后，返回的仍然是原来的JSON内容</p><p>本着打破砂锅问道低的精神，就展开了资料查阅探究，趁机学习一波新知识</p><h2 id="原因" tabindex="-1">原因 <a class="header-anchor" href="#原因" aria-label="Permalink to &quot;原因&quot;">​</a></h2><p>结论先行，<code>require</code>引入的模块会被Node缓存，下面用一个简单的demo实验一下</p><h3 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h3><p><strong>test-module.js</strong></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    name:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;0&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> m1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;./test-module&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">m1.name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;2&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> m2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;./test-module&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(m2.name);</span></span></code></pre></div><p>运行后的输出结果输出如下</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">1</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">2</span></span></code></pre></div><p>从这就可以得出结论Node会缓存引入的模块，name如何查看已经被缓存的模块</p><h3 id="查看缓存" tabindex="-1">查看缓存 <a class="header-anchor" href="#查看缓存" aria-label="Permalink to &quot;查看缓存&quot;">​</a></h3><p>通过<a href="http://nodejs.cn/api/modules/require_cache.html" target="_blank" rel="noreferrer">require.cache</a>即可获取被缓存的模块：</p><ul><li>返回一个对象</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> m1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;./test-module&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(require.cache);</span></span></code></pre></div><p>输出内容如下(这里就贴一张截图) <img src="`+t+`" alt="图片" loading="lazy"></p><h3 id="删除缓存" tabindex="-1">删除缓存 <a class="header-anchor" href="#删除缓存" aria-label="Permalink to &quot;删除缓存&quot;">​</a></h3><p>既然<code>require.cache</code>返回内容是一个普普通通的对象，name可以通过<code>delete</code>关键字进行移除</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> m1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;./test-module&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">m1.name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;2&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(m1.name);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">delete</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> require.cache[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">__dirname</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}/test-module.js\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> m2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;./test-module&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(m2.name);</span></span></code></pre></div><p>内容输出如下</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">1</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">2</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">1</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">0</span></span></code></pre></div><p>原因捋完后，咱们就开始进入主题</p><p>进行<code>读取JSON</code>文件的对比分析</p><h2 id="读取json对比" tabindex="-1">读取JSON对比 <a class="header-anchor" href="#读取json对比" aria-label="Permalink to &quot;读取JSON对比&quot;">​</a></h2><ul><li>require可以省略<code>.json</code>后缀</li><li>fs.readFile读取不能省略后缀 test.json</li></ul><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xm&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>测试demo</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> d1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;./test.json&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(d1); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// { name: &#39;xm&#39; }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> d2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;./test&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(d2); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// { name: &#39;xm&#39; }</span></span></code></pre></div><h2 id="其它差异" tabindex="-1">其它差异 <a class="header-anchor" href="#其它差异" aria-label="Permalink to &quot;其它差异&quot;">​</a></h2><h3 id="编码" tabindex="-1">编码 <a class="header-anchor" href="#编码" aria-label="Permalink to &quot;编码&quot;">​</a></h3><ul><li>require只能按<code>utf-8</code>格式读取</li><li>fs.readFile<code>Sync</code>可以<strong>设置编码格式</strong></li></ul><h3 id="异步同步" tabindex="-1">异步同步 <a class="header-anchor" href="#异步同步" aria-label="Permalink to &quot;异步同步&quot;">​</a></h3><ul><li>require是同步读取</li><li>通过<code>fs</code>既可以同步读取也可以异步读取</li></ul><h2 id="小结" tabindex="-1">小结 <a class="header-anchor" href="#小结" aria-label="Permalink to &quot;小结&quot;">​</a></h2><ul><li><code>require</code>支持缓存</li><li><code>require</code>只能按UTF-8读取内容</li><li><code>require</code>是同步的</li><li><code>require</code>读取JSON文件可以省略<code>.json</code>后缀</li></ul><h2 id="最后" tabindex="-1">最后 <a class="header-anchor" href="#最后" aria-label="Permalink to &quot;最后&quot;">​</a></h2><p>本文内容比较精简，对于兼职学Node的同学可能会漏掉此部分知识</p><p>后续将继续更新<code>时间管理工具</code>的实践内容</p>`,41)]))}const E=i(l,[["render",h]]);export{g as __pageData,E as default};

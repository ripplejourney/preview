import{_ as s,o as i,c as a,a5 as n}from"./chunks/framework.Da8gxOEj.js";const t="/preview/cnjimbo/cnjimbo.github.io/pr/136/assets/MTYyOTczMTE1Mjk1MA__629731152950.Dbqsrnff.png?s1=https:/img.cdn.sugarat.top/mdImg/MTYyOTczMTE1Mjk1MA==629731152950",y=JSON.parse('{"title":"做一个CL版的时间管理工具（15）","description":"","frontmatter":{"title":"做一个CL版的时间管理工具（15）","date":"2021-08-23T00:00:00.000Z","tags":["技术笔记","个人作品","CLI工具"]},"headers":[],"relativePath":"works/time-tools/time-tools-15.md","filePath":"works/time-tools/time-tools-15.md","lastUpdated":1719501177000}'),l={name:"works/time-tools/time-tools-15.md"},h=n(`<h1 id="做一个cli版的时间管理工具-15" tabindex="-1">做一个CLI版的时间管理工具（15） <a class="header-anchor" href="#做一个cli版的时间管理工具-15" aria-label="Permalink to &quot;做一个CLI版的时间管理工具（15）&quot;">​</a></h1><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p>在前一期文章中完善了一个生成Web页面浏览事务进展的<code>timec page</code>指令</p><p>但在日\`常使用工具中发现发现了两个痛点：</p><ol><li>由于事务繁多，经常会忘记结束一个事情，就开始了下一个事情</li><li>在切换任务的时候需要完整的输入任务名才能进行任务的切换</li></ol><p>当然还有一些其它的痛点，本期着重<strong>解决第1个痛点</strong></p><h2 id="定时提醒feature开发" tabindex="-1">定时提醒Feature开发 <a class="header-anchor" href="#定时提醒feature开发" aria-label="Permalink to &quot;定时提醒Feature开发&quot;">​</a></h2><p>定时提醒，并自动执行<code>timec thing -s</code>保存，使用一个提示音进行提示</p><p>预期指令<code>timec remind</code></p><ul><li><code>-c,--cycle [time]</code>:设置提醒的周期，单位分钟，默认40分钟提醒一次</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">timec</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> remind</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [option]</span></span></code></pre></div><h3 id="注册指令" tabindex="-1">注册指令 <a class="header-anchor" href="#注册指令" aria-label="Permalink to &quot;注册指令&quot;">​</a></h3><p>使用<code>commander.command</code>注册<code>remind</code>指令，使用<code>.option</code>方法设置一个可选参数<code>cycle</code>, 第二个参数传入默认值<code>&#39;40&#39;</code></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">commander.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">command</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;remind&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">description</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Open auto remind music&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">option</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;-c,--cycle [time]&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Set the duration of the reminder cycle（minute）&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;40&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">action</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(remindCommand);</span></span></code></pre></div><p>具体逻辑如下:</p><ol><li>将<code>cycle</code>参数转为整数</li><li>然后使用定时器<code>setTimeout</code>，在<code>cycle*oneMinute</code>毫秒后,播放音频与自动记录</li></ol><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> spawn</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;cross-spawn&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 提醒周期（minute）</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> time</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cmdObj.cycle;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> oneMinute</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1000</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 60</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> loop</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    setTimeout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      playRemindAudio</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(loop);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // 自动记录一下</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> cwd</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> getCWD</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">thing</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> getConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      spawn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;timec&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;thing&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, thing.name], {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        cwd,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        stdio: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;inherit&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }, time </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> oneMinute);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  };</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  loop</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><p>其中自动记录的方法比较简单，通过<code>spawn</code>执行<code>timec thing [newthing]</code>指令即可进行自动的事件记录</p><p><code>playRemindAudio</code>中包含的就是播放预设音频的逻辑</p><h3 id="播放声音" tabindex="-1">播放声音 <a class="header-anchor" href="#播放声音" aria-label="Permalink to &quot;播放声音&quot;">​</a></h3><p>这个算是知识盲区，以前从来没有使用Node.js原生的API播放过音频</p><h4 id="系统指令" tabindex="-1">系统指令 <a class="header-anchor" href="#系统指令" aria-label="Permalink to &quot;系统指令&quot;">​</a></h4><p>首先想到的方案就是通过<code>spawn</code>调用系统的指令播放音频</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">spawn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;mpg123&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;url.mp3&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p>这个是调用<a href="https://mpg123.org/" target="_blank" rel="noreferrer">mpg123</a>系统指令</p><p>linux操作系统安装指令如下</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt-get</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mpg123</span></span></code></pre></div><p>调用系统指令播放音乐，比较有局限性，常见操作系统有3种，不一定所有操作系统都支持一样的指令</p><p>如果使用此种方式就需要调研目标平台，装机就默认支持的指令</p><h4 id="现存npm包" tabindex="-1">现存NPM包 <a class="header-anchor" href="#现存npm包" aria-label="Permalink to &quot;现存NPM包&quot;">​</a></h4><p>这个问题肯定不是开发者第一次遇见，肯定是有前辈们遇到过，通过搜索引擎检索，pick了下述两个：</p><ul><li><a href="https://github.com/Marak/play.js#readme" target="_blank" rel="noreferrer">play</a></li><li><a href="https://www.npmjs.com/package/audio-play" target="_blank" rel="noreferrer">audio-play</a></li></ul><p>首先是第一个,API 比较简单，通过<a href="https://github.com/Marak/play.js/blob/d3ca7a04d1bd58c3ad72df3088f92985742e41cc/lib/play.js#L54" target="_blank" rel="noreferrer">查看源码</a>，实际上他也是调用系统指令播放</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> play</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;play/lib/play&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">play.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sound</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;filepath.wav&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p><img src="`+t+`" alt="图片" loading="lazy"></p><p>其次是<code>audio-play</code>,需要配合<code>audio-loader</code>使用</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> audioPlay</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;audio-play&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> audioLoad</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;audio-loader&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">audioLoad</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;filepath.wav&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">v</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  audioPlay</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(v);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><p>在<code>mac</code>上测试播放正常，在linux上依旧无法正常播放</p><h4 id="使用系统蜂鸣器" tabindex="-1">使用系统蜂鸣器 <a class="header-anchor" href="#使用系统蜂鸣器" aria-label="Permalink to &quot;使用系统蜂鸣器&quot;">​</a></h4><p>这个就比较简单，执行下面代码即可，但是在我的linux上测试仍然无效，emmmm裂开了</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">process.stdout.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">write</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\x07</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><h4 id="todo" tabindex="-1">TODO <a class="header-anchor" href="#todo" aria-label="Permalink to &quot;TODO&quot;">​</a></h4><p>整理一篇Node.js播放音频的干货实践文章，目标3端通用一个API</p><h2 id="最后" tabindex="-1">最后 <a class="header-anchor" href="#最后" aria-label="Permalink to &quot;最后&quot;">​</a></h2><p>由于每天空闲时间有限，本文就先到这，下一期将继续完善<code>timec page</code>指令</p><p>如果读者还感觉意犹未尽，敬请期待后续更新，或持续关注一下<a href="https://github.com/ATQQ/time-control" target="_blank" rel="noreferrer">仓库</a>的状态</p><p>欢迎评论区提需求，交流探讨</p><p>本系列会不断的更新迭代，直至产品初代完成</p><ul><li><a href="https://github.com/ATQQ/time-control" target="_blank" rel="noreferrer">仓库地址</a></li></ul><div style="display:none;" data-pagefind-meta="base64:JTdCJTIydGl0bGUlMjIlM0ElMjIlRTUlODElOUElRTQlQjglODAlRTQlQjglQUFDTCVFNyU4OSU4OCVFNyU5QSU4NCVFNiU5NyVCNiVFOSU5NyVCNCVFNyVBRSVBMSVFNyU5MCU4NiVFNSVCNyVBNSVFNSU4NSVCNyVFRiVCQyU4ODE1JUVGJUJDJTg5JTIyJTJDJTIyZGF0ZSUyMiUzQTE2Mjk2NzY4MDAwMDAlMkMlMjJ0YWdzJTIyJTNBJTVCJTIyJUU2JThBJTgwJUU2JTlDJUFGJUU3JUFDJTk0JUU4JUFFJUIwJTIyJTJDJTIyJUU0JUI4JUFBJUU0JUJBJUJBJUU0JUJEJTlDJUU1JTkzJTgxJTIyJTJDJTIyQ0xJJUU1JUI3JUE1JUU1JTg1JUI3JTIyJTVEJTdE"></div>`,50),e=[h];function p(k,d,r,o,E,c){return i(),a("div",null,e)}const F=s(l,[["render",p]]);export{y as __pageData,F as default};

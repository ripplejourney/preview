import{_ as a,o as e,c as t,a7 as s}from"./chunks/framework.vuoLqgVV.js";const o="/preview/cnjimbo/cnjimbo.github.io/pr/219/assets/e873781d6738026921ae38111f8a4019.DRmYOe-h.png",i="/preview/cnjimbo/cnjimbo.github.io/pr/219/assets/6c959d43f030a07fb0dfaca615052cfb.CS1kXgMa.png",n="/preview/cnjimbo/cnjimbo.github.io/pr/219/assets/f380f324533336c360e8fb25b595a430.CrwOw9Dc.png",p="/preview/cnjimbo/cnjimbo.github.io/pr/219/assets/1bd1e494dd695ac020eb46ef555696e5.3tFIVQMc.png",c="/preview/cnjimbo/cnjimbo.github.io/pr/219/assets/1d5ee81c4478932399eeb7bcad204a7e.Dj7xSjOZ.png",r="/preview/cnjimbo/cnjimbo.github.io/pr/219/assets/ef51089c3a2486fdd34151f39a47cf74.DoKPyPed.png",l="/preview/cnjimbo/cnjimbo.github.io/pr/219/assets/679de7e34a46396ea04777eb55e1c9ba.2tX3yfiU.png",d="/preview/cnjimbo/cnjimbo.github.io/pr/219/assets/73fc2cc273c1f5c22d358f0d02232029.C-JLXB3L.png",b="/preview/cnjimbo/cnjimbo.github.io/pr/219/assets/a2265ab81ab50cc5f921fb266080d666.DjPjtNTk.png",h="/preview/cnjimbo/cnjimbo.github.io/pr/219/assets/4dba81d401be69b5fda62c5603daf8e7.CEjh6Adp.png",g="/preview/cnjimbo/cnjimbo.github.io/pr/219/assets/83ca062018f61c26201b5be01d9e8d29.COnhTWqV.png",m="/preview/cnjimbo/cnjimbo.github.io/pr/219/assets/031e3432096d19c9f1f8e903991e16cd.BQpkdHQg.png",u="/preview/cnjimbo/cnjimbo.github.io/pr/219/assets/6c0c2526984304d8aa66714691768345.6_mfqfGH.png",_="/preview/cnjimbo/cnjimbo.github.io/pr/219/assets/a90fa856a60df0cb64a80d5395a3591a.C_Fzj6GX.png",f="/preview/cnjimbo/cnjimbo.github.io/pr/219/assets/01f487c484c8d6e316e7a479a81640fe.UD5rWK92.png",k="/preview/cnjimbo/cnjimbo.github.io/pr/219/assets/8099d2f705be95b1e20c737cd94599ad.DhnPrbdN.png",j="/preview/cnjimbo/cnjimbo.github.io/pr/219/assets/e260c84cb2c6180072c9866a4fc55c20.mXIX4BWF.png",y="/preview/cnjimbo/cnjimbo.github.io/pr/219/assets/86832534b77d6ba3204477638ed78db7.BOzeUlkz.png",z="/preview/cnjimbo/cnjimbo.github.io/pr/219/assets/e24f2f6488dbf4038a45b13ef802bb70.Bc6vuVzm.png",v="/preview/cnjimbo/cnjimbo.github.io/pr/219/assets/524097eb12ea5438b7f8b98b334b61d3.CVcvzpyp.png",x="/preview/cnjimbo/cnjimbo.github.io/pr/219/assets/c55b1b104e4e5341cbae7cc2df01b0d1.9Zc0bWN2.png",V=JSON.parse('{"title":"我如何使用Coze来分析掘金热榜数据 | Coze插件开发","description":"","frontmatter":{},"headers":[],"relativePath":"ai/coze/juejin-hot-rank-bot.md","filePath":"ai/coze/juejin-hot-rank-bot.md","lastUpdated":1720544135000}'),w={name:"ai/coze/juejin-hot-rank-bot.md"},q=s('<h1 id="我如何使用coze来分析掘金热榜数据-coze插件开发" tabindex="-1">我如何使用Coze来分析掘金热榜数据 | Coze插件开发 <a class="header-anchor" href="#我如何使用coze来分析掘金热榜数据-coze插件开发" aria-label="Permalink to &quot;我如何使用Coze来分析掘金热榜数据 | Coze插件开发&quot;">​</a></h1><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p><a href="https://juejin.cn/hot/collected-articles" target="_blank" rel="noreferrer">掘金热榜</a>想必大家会偶尔扫一扫，看看感兴趣的进行进一步阅读。</p><p><img src="'+o+'" alt="" loading="lazy"></p><p>文章相关的榜单主要就是<code>掘金文章榜</code>，<code>文章收藏榜</code>这两个。</p><blockquote><p><a href="https://www.coze.cn/" target="_blank" rel="noreferrer">扣子（coze.cn）</a>是一款用来开发新一代 AI Chat Bot 的应用编辑平台。</p></blockquote><p><img src="'+i+'" alt="" loading="lazy"></p><p>可以理解是 <code>对话机器人</code> 定制工厂。</p><p><img src="'+n+'" alt="" loading="lazy"></p><p><code>Coze</code> 上开放的定制能力主要有 4 个<code>Bots</code>，<code>插件</code>，<code>工作流</code>，<code>知识库</code>。</p><p>咱们这里要想让机器人读取掘金热榜的数据就要借助插件的能力咯。</p><p><strong>下面进入正题，看看如何把这两者结合起来？</strong></p><p><em>想要体验最后效果的可以直接访问这个已经搭建好的机器人：<a href="https://www.coze.cn/store/bot/7339921359969108031?from=bots_card" target="_blank" rel="noreferrer">掘金热榜分析</a>。</em></p><table tabindex="0"><thead><tr><th style="text-align:center;">页面</th><th style="text-align:center;">效果</th></tr></thead><tbody><tr><td style="text-align:center;"><img src="'+p+'" alt="" loading="lazy"></td><td style="text-align:center;"><img src="'+c+'" alt="" loading="lazy"></td></tr></tbody></table><h2 id="开发插件" tabindex="-1">开发插件 <a class="header-anchor" href="#开发插件" aria-label="Permalink to &quot;开发插件&quot;">​</a></h2><h3 id="创建插件" tabindex="-1">创建插件 <a class="header-anchor" href="#创建插件" aria-label="Permalink to &quot;创建插件&quot;">​</a></h3><p>切换到 <code>个人空间</code> -&gt; <code>插件</code> 目录下，点击创建插件。</p><p><img src="'+r+'" alt="" loading="lazy"></p><p>录入 API 信息</p><p><img src="'+l+'" alt="" loading="lazy"></p><p>从填的<code>插件URL</code>，<code>Header 列表</code>，<code>授权方式</code>这几项配置我相信大家就能看出 &quot;插件&quot; 本质是什么了。</p><p><strong>没错插件就是一个支持调用的服务端接口</strong></p><p>这里相当于是配置接口调用的 <code>base 路径</code> 和 <code>公共鉴权</code> 参数</p><p>由此咱们可以把一些开放的公共查询接口都可以录入到插件中，比如 <a href="https://apifox.com/apihub/" target="_blank" rel="noreferrer">API Hub</a> 上收集的公共API。</p><p><img src="'+d+'" alt="" loading="lazy"></p><p>这里的 <code>api.juejin.cn</code> 就是我在 devTools 中看到（ba）的🤭。</p><h3 id="创建工具" tabindex="-1">创建工具 <a class="header-anchor" href="#创建工具" aria-label="Permalink to &quot;创建工具&quot;">​</a></h3><p>进入创建的插件后，就可以创建工具了。</p><p><img src="'+b+'" alt="" loading="lazy"></p><p><em>乍一看怎么又有一个新概念，“工具”？打开配置窗口一看就悟了！</em></p><p><img src="'+h+'" alt="" loading="lazy"></p><p>哦😯，这个<strong>工具就是录入具体的功能API，配置一下具体API的<code>请求路径，方法，参数</code></strong></p><p>下面是配置过程截图</p><table tabindex="0"><thead><tr><th style="text-align:center;">输入参数</th><th style="text-align:center;">输出参数（支持自动解析）</th><th style="text-align:center;">调试校验</th></tr></thead><tbody><tr><td style="text-align:center;"><img src="'+g+'" alt="" loading="lazy"></td><td style="text-align:center;"><img src="'+m+'" alt="" loading="lazy"></td><td style="text-align:center;"><img src="'+u+'" alt="" loading="lazy"></td></tr></tbody></table><h3 id="发布" tabindex="-1">发布 <a class="header-anchor" href="#发布" aria-label="Permalink to &quot;发布&quot;">​</a></h3><p>先发布工具</p><p><img src="'+_+'" alt="" loading="lazy"></p><p>再上架插件，就大工告成了，过程中填写的表单都可以AI自动生成辅助填写（美滋滋）。</p><p><img src="'+f+'" alt="" loading="lazy"></p><p>插件上架后，大家就可以公开使用咯，使用的机器人也能公开。</p><h2 id="开发bot" tabindex="-1">开发bot <a class="header-anchor" href="#开发bot" aria-label="Permalink to &quot;开发bot&quot;">​</a></h2><h3 id="创建bot" tabindex="-1">创建bot <a class="header-anchor" href="#创建bot" aria-label="Permalink to &quot;创建bot&quot;">​</a></h3><p>这个就很简单了，主要就是写 &quot;魔法咒语&quot;，过程也有AI辅助。</p><p>在创建入口，填写一下机器人的 <code>名字</code> 和 <code>介绍</code> 即可，<code>logo</code> 直接用自动生成。</p><p><img src="'+k+'" alt="" loading="lazy"></p><h3 id="编辑bot" tabindex="-1">编辑bot <a class="header-anchor" href="#编辑bot" aria-label="Permalink to &quot;编辑bot&quot;">​</a></h3><p>编辑页面长下面这样子，咱们这里主要关注<code>人设</code>与<code>插件</code>部分即可。</p><p><img src="'+j+'" alt="" loading="lazy"></p><p>可以先添加插件，直接搜索咱们开发的插件名即可。</p><p>将咱们录入的工具（API） 添加进去即可 <img src="'+y+'" alt="" loading="lazy"></p><p>接下来就是写“咒语”，比如我只简单写了下面这一句话：</p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>你是一个资深的互联网资讯分析师，可以根据用户的需求从掘金热榜中筛选数据，并按要求格式分析输出。</span></span></code></pre></div><p>然后用<code>AI优化</code>功能，就给我扩展完善了。</p><p><img src="'+z+`" alt="" loading="lazy"></p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 角色</span></span>
<span class="line"><span>你是一个资深的互联网资讯分析师，可以根据用户的需求从掘金热榜中筛选数据，并按要求格式分析输出。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 技能</span></span>
<span class="line"><span>- 从掘金热榜中筛选出符合用户需求的数据</span></span>
<span class="line"><span>- 对筛选出的数据进行分析</span></span>
<span class="line"><span>- 按照要求格式输出分析结果</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 限制</span></span>
<span class="line"><span>- 只能从掘金热榜中筛选数据</span></span>
<span class="line"><span>- 输出结果必须符合要求格式</span></span></code></pre></div><p>至此核心部分就完成了，下面可以简单测试一下。</p><p><img src="`+v+'" alt="" loading="lazy"></p><p><img src="'+x+`" alt="" loading="lazy"></p><h2 id="优化" tabindex="-1">优化 <a class="header-anchor" href="#优化" aria-label="Permalink to &quot;优化&quot;">​</a></h2><h3 id="提示词优化" tabindex="-1">提示词优化 <a class="header-anchor" href="#提示词优化" aria-label="Permalink to &quot;提示词优化&quot;">​</a></h3><p>咱们咒语里没有体现查询哪个榜单的数据，默认调用 API 时都是查的综合榜单。</p><p>用户在提问的时候可以说查询 后端/Android 等榜单，此时咱们就需要将这些榜单对应的查询参数写到 提示词 里。</p><p>向下面这样，这样查询结果更加符合用户需要的榜单数据。</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">### 掘金热榜插件参数对照</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 综合：1</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 后端：6809637767543259144</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 安卓：6809635626879549454</span></span></code></pre></div><h3 id="插件优化" tabindex="-1">插件优化 <a class="header-anchor" href="#插件优化" aria-label="Permalink to &quot;插件优化&quot;">​</a></h3><p>API 查询结果中有很多不需要的无关参数，咱们可以使用一层服务对传入参数过滤后再配置到平台上，避免导致结果过大，超出对话上下文限制的 tokens 数量。</p><h2 id="最后" tabindex="-1">最后 <a class="header-anchor" href="#最后" aria-label="Permalink to &quot;最后&quot;">​</a></h2><p>欢迎大家踊跃<a href="https://www.coze.cn/store/plugin" target="_blank" rel="noreferrer">贡献插件</a>，理论上配合自定义API，机器人就有无限的可能。</p><p>体验文章搭建的<a href="https://www.coze.cn/store/bot/7339921359969108031?from=bots_card" target="_blank" rel="noreferrer">掘金热榜分析机器人</a></p><p>bot ID；7339921359969108031</p>`,70),P=[q];function A(C,I,D,E,B,T){return e(),t("div",{"data-pagefind-body":!0},P)}const F=a(w,[["render",A]]);export{V as __pageData,F as default};

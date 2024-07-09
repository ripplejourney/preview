import{_ as a,o as e,c as s,a5 as i}from"./chunks/framework.CY-elmy7.js";const t="/preview/cnjimbo/cnjimbo.github.io/pr/169/assets/MTY3NTU3MjY0MjgzNQ__675572642835.DOHgtQeL.png",l="/preview/cnjimbo/cnjimbo.github.io/pr/169/assets/MTY3NTU3NDk0OTI2Ng__675574949266.D_UVHmr4.png",p="/preview/cnjimbo/cnjimbo.github.io/pr/169/assets/MTY4OTQyMDE1NTcxMA__689420155710.D0gOQHwn.png",r="/preview/cnjimbo/cnjimbo.github.io/pr/169/assets/MTY3NTU3NDMxODU0OA__675574318548.DgMbnxmY.png",y=JSON.parse('{"title":"一个简约风的vitepress博客主题","description":"简约风的vitepress博客主题介绍","frontmatter":{"cover":"./theme/MTY3MzE3MDUxOTMwMw==673170519303.png","description":"简约风的vitepress博客主题介绍","date":"2023-02-05T14:00:00.000Z","sticky":800},"headers":[],"relativePath":"technology/works/theme.md","filePath":"technology/works/theme.md","lastUpdated":1720534879000}'),n={name:"technology/works/theme.md"},h=i('<h1 id="一个简约风的vitepress博客主题" tabindex="-1">一个简约风的vitepress博客主题 <a class="header-anchor" href="#一个简约风的vitepress博客主题" aria-label="Permalink to &quot;一个简约风的vitepress博客主题&quot;">​</a></h1><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p>笔者的博客之前是使用 <a href="https://vuepress.vuejs.org/" target="_blank" rel="noreferrer">VuePress</a> + <a href="https://vuepress-theme-reco.recoluan.com/" target="_blank" rel="noreferrer">reco主题</a></p><p>随着博客文章数量越来越多（md文件已经300+了），博客本地启动和构建越来越来慢了emmm</p><p>当然使用频率最高的就是本地启动，构建是个相对比较低频的动作。</p><p>恰好此时 <a href="https://vitepress.dev/" target="_blank" rel="noreferrer">VitePress</a> 也比较成熟了（alpha），相比 VuePress 更加的简洁，可玩性强，上手成本也低。</p><p>按照官方的给的定位，VitePress 主打是主题（个人感觉就像<a href="https://hexo.io/zh-cn/" target="_blank" rel="noreferrer">Hexo</a>丰富多彩的主题一样），不提供插件系统</p><p><img src="'+t+'" alt="" loading="lazy"></p><p>在笔者进行博客迁移的时候，将主题分离了出来，可供单独使用</p><p>新旧对比</p><p><img src="'+l+'" alt="新旧博客对比" loading="lazy"></p><p>风格借鉴了 <a href="https://vuepress-theme-reco.recoluan.com/" target="_blank" rel="noreferrer">reco</a> ，<a href="https://juejin.cn/" target="_blank" rel="noreferrer">掘金</a>，<a href="https://surmon.me/" target="_blank" rel="noreferrer">surmon</a>等等，组件部分用了 <a href="https://element-plus.gitee.io/zh-CN/" target="_blank" rel="noreferrer">element-plus</a></p><p>下面介绍食用指南（<a href="https://www.npmjs.com/package/@sugarat/theme" target="_blank" rel="noreferrer">主题</a>实现内容比较多，后面单开一个专栏介绍 😋嘿嘿！）</p><h2 id="快速体验" tabindex="-1">快速体验 <a class="header-anchor" href="#快速体验" aria-label="Permalink to &quot;快速体验&quot;">​</a></h2><p>只需3步，即可体验</p><p>① 拉取 Github 模板</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-MklHW" id="tab-xjZiYf-" checked><label for="tab-xjZiYf-">npm</label><input type="radio" name="group-MklHW" id="tab-Af5dJP_"><label for="tab-Af5dJP_">yarn</label><input type="radio" name="group-MklHW" id="tab-D1IVerb"><label for="tab-D1IVerb">pnpm</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> create</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @sugarat/theme@latest</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> create</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @sugarat/theme</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> create</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @sugarat/theme</span></span></code></pre></div></div></div><p>也可以指定项目名</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-R8ayr" id="tab-NP1_iJl" checked><label for="tab-NP1_iJl">npm</label><input type="radio" name="group-R8ayr" id="tab-mJJW8uE"><label for="tab-mJJW8uE">yarn</label><input type="radio" name="group-R8ayr" id="tab-3vb1XLQ"><label for="tab-3vb1XLQ">pnpm</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> create</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @sugarat/theme@latest</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> my-first-blog</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> create</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @sugarat/theme</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> my-first-blog</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> create</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @sugarat/theme</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> my-first-blog</span></span></code></pre></div></div></div><p><img src="'+p+`" alt="" loading="lazy"></p><p>② 安装依赖</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-iiG7l" id="tab-rNrPmCZ" checked><label for="tab-rNrPmCZ">pnpm</label><input type="radio" name="group-iiG7l" id="tab-6pxuLOW"><label for="tab-6pxuLOW">安装 PNPM</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果你没有 PNPM 请先安装</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pnpm</span></span></code></pre></div></div></div><p>③ 启动</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev</span></span></code></pre></div><p>就能得到如下的页面</p><p><img src="`+r+'" alt="" loading="lazy"></p><h2 id="已支持功能" tabindex="-1">已支持功能 <a class="header-anchor" href="#已支持功能" aria-label="Permalink to &quot;已支持功能&quot;">​</a></h2><p>介绍一下主要的，非所有，详见<a href="https://theme.sugarat.top/" target="_blank" rel="noreferrer">主题文档</a></p><ul><li>博客首页 <ul><li>文章列表</li><li>精选文章</li><li>友链</li><li>标签分类</li></ul></li><li>图片预览</li><li>搜索（标题+简介）</li><li><a href="https://giscus.app/zh-CN" target="_blank" rel="noreferrer">giscus</a> 评论系统</li><li>推荐文章（同目录）</li><li>阅读时间计算</li><li>全局的提示弹窗 (由 <a href="https://element-plus.gitee.io/zh-CN/component/alert.html" target="_blank" rel="noreferrer">el-alert</a> 驱动)</li><li>全局的公告弹窗，支持设置图片，文字，按钮</li><li>全文搜索</li><li>RSS</li><li>...</li></ul><h2 id="规划中功能" tabindex="-1">规划中功能 <a class="header-anchor" href="#规划中功能" aria-label="Permalink to &quot;规划中功能&quot;">​</a></h2><ul><li>Valine 评论系统</li><li>文章合集</li><li>更多可定制的主题样式</li><li>。。。</li></ul><h2 id="最后" tabindex="-1">最后 <a class="header-anchor" href="#最后" aria-label="Permalink to &quot;最后&quot;">​</a></h2><p>读者有建议的 功能&amp;想法 欢迎 私信&amp;评论区 交流</p><ul><li>主题地址：<a href="https://theme.sugarat.top/" target="_blank" rel="noreferrer">https://theme.sugarat.top/</a></li><li>主题包：<a href="https://www.npmjs.com/package/@sugarat/theme" target="_blank" rel="noreferrer">@sugarat/theme</a></li><li>项目地址：<a href="https://github.com/cnjimbo/cnjimbo.github.io/tree/master/packages/theme" target="_blank" rel="noreferrer">https://github.com/cnjimbo/cnjimbo.github.io/tree/master/packages/theme</a></li></ul>',34),o=[h];function d(c,g,k,b,m,u){return e(),s("div",{"data-pagefind-body":!0,"data-pagefind-meta":"base64:JTdCJTIyY292ZXIlMjIlM0ElMjIuJTJGdGhlbWUlMkZNVFkzTXpFM01EVXhPVE13TXclM0QlM0Q2NzMxNzA1MTkzMDMucG5nJTIyJTJDJTIyZGVzY3JpcHRpb24lMjIlM0ElMjIlRTclQUUlODAlRTclQkElQTYlRTklQTMlOEUlRTclOUElODR2aXRlcHJlc3MlRTUlOEQlOUElRTUlQUUlQTIlRTQlQjglQkIlRTklQTIlOTglRTQlQkIlOEIlRTclQkIlOEQlMjIlMkMlMjJkYXRlJTIyJTNBMTY3NTYwNTYwMDAwMCUyQyUyMnN0aWNreSUyMiUzQTgwMCU3RA=="},o)}const F=a(n,[["render",d]]);export{y as __pageData,F as default};

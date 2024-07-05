import{_ as s,o as a,c as i,a5 as t}from"./chunks/framework.DLOA312L.js";const e="/preview/cnjimbo/cnjimbo.github.io/pr/137/assets/MTYyNDM2NTIzMjc2MA__624365232760.DDWg95Gc.png?s1=https:/img.cdn.sugarat.top/mdImg/MTYyNDM2NTIzMjc2MA==624365232760",n="/preview/cnjimbo/cnjimbo.github.io/pr/137/assets/MTYyNDM2NTM3MDMwMQ__624365370301.DpeAljXL.png?s1=https:/img.cdn.sugarat.top/mdImg/MTYyNDM2NTM3MDMwMQ==624365370301",l="/preview/cnjimbo/cnjimbo.github.io/pr/137/assets/MTYyNDM2NjE1MDY4MA__624366150680.DY2uoE9R.png?s1=https:/img.cdn.sugarat.top/mdImg/MTYyNDM2NjE1MDY4MA==624366150680",p="/preview/cnjimbo/cnjimbo.github.io/pr/137/assets/MTYyNDM2NjcxODY5MQ__624366718691.DNg9xUMx.png?s1=https:/img.cdn.sugarat.top/mdImg/MTYyNDM2NjcxODY5MQ==624366718691",h="/preview/cnjimbo/cnjimbo.github.io/pr/137/assets/MTYyNDM3MDAwMjk4NQ__624370002985.BHCzURlP.png?s1=https:/img.cdn.sugarat.top/mdImg/MTYyNDM3MDAwMjk4NQ==624370002985",o="/preview/cnjimbo/cnjimbo.github.io/pr/137/assets/MTYyNDM3NjI0ODcyMg__624376248723.DhRoMuZ5.png?s1=https:/img.cdn.sugarat.top/mdImg/MTYyNDM3NjI0ODcyMg==624376248723",d="/preview/cnjimbo/cnjimbo.github.io/pr/137/assets/MTYyNDM3NjU4NTkwNg__624376585906.CL3eu2hp.png?s1=https:/img.cdn.sugarat.top/mdImg/MTYyNDM3NjU4NTkwNg==624376585906",C=JSON.parse('{"title":"模板工程搭建：Vue-Cli搭建Vue3/TS/uni-app小程序工程(上)","description":"","frontmatter":{"title":"模板工程搭建：Vue-Cli搭建Vue3/TS/uni-app小程序工程(上)","date":"2021-06-22T00:00:00.000Z","tags":["技术笔记","工程模板"],"categories":["技术笔记"]},"headers":[],"relativePath":"technology/tpl/uni-vue3-cli_1.md","filePath":"technology/tpl/uni-vue3-cli_1.md","lastUpdated":1719501177000}'),r={name:"technology/tpl/uni-vue3-cli_1.md"},c=t('<h1 id="模板工程搭建-vue-cli搭建vue3-ts-uni-app小程序工程-上" tabindex="-1">模板工程搭建：Vue-Cli搭建Vue3/TS/uni-app小程序工程(上) <a class="header-anchor" href="#模板工程搭建-vue-cli搭建vue3-ts-uni-app小程序工程-上" aria-label="Permalink to &quot;模板工程搭建：Vue-Cli搭建Vue3/TS/uni-app小程序工程(上)&quot;">​</a></h1><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p>通过vue-cli创建的项目，更易维护，可以使用非HbuilderX编辑器进行编码，通过终端直接执行编译命令</p><p>HbuilderX没有Linux版本（不含wine），但有大神移植了linux版本下的微信开发工具:</p><ul><li><a href="https://github.com/cytle/wechat_web_devtools" target="_blank" rel="noreferrer">cytle/wechat_web_devtools</a></li><li><a href="https://github.com/dragonation/wechat-devtools" target="_blank" rel="noreferrer">dragonation/wechat-devtools</a></li></ul><p>因此linux环境下可以使用</p><p>这样三种常见操作系统都可以正常的进行开发调试</p><h2 id="初始化项目模板" tabindex="-1">初始化项目模板 <a class="header-anchor" href="#初始化项目模板" aria-label="Permalink to &quot;初始化项目模板&quot;">​</a></h2><p>使用uni-app官方提供的vue3基础模板</p><h3 id="安装vue-cli" tabindex="-1">安装vue-cli <a class="header-anchor" href="#安装vue-cli" aria-label="Permalink to &quot;安装vue-cli&quot;">​</a></h3><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @vue/cli</span></span></code></pre></div><h3 id="初始化vue3工程" tabindex="-1">初始化vue3工程 <a class="header-anchor" href="#初始化vue3工程" aria-label="Permalink to &quot;初始化vue3工程&quot;">​</a></h3><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vue</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> create</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dcloudio/uni-preset-vue#vue3</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> uni-vue3-ts-template</span></span></code></pre></div><p>赖心等待一会儿，即会出现如下选择</p><p><img src="'+e+'" alt="图片" loading="lazy"></p><p>这里选择TS版本</p><p>此时还会出现一个选择<code>@dcloudio/uni-mp-360</code>的选项，选择第一个（最新的版本）即可</p><p><img src="'+n+'" alt="图片" loading="lazy"></p><p>等待一会儿就初始化完毕了，目录结构如下</p><p><img src="'+l+`" alt="图片" loading="lazy"></p><h3 id="基础模板" tabindex="-1">基础模板 <a class="header-anchor" href="#基础模板" aria-label="Permalink to &quot;基础模板&quot;">​</a></h3><p>包含<code>jest</code>，<code>babel</code>，<code>postcss</code>，<code>typescript</code>等基本配置文件</p><p>咱先运行试试：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span></span></code></pre></div><p>小程序模板还是使用的webpack构建</p><h3 id="运行到微信端" tabindex="-1">运行到微信端 <a class="header-anchor" href="#运行到微信端" aria-label="Permalink to &quot;运行到微信端&quot;">​</a></h3><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># dev</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev:mp-weixin</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># prod</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build:mp-weixin</span></span></code></pre></div><p><img src="`+p+'" alt="图片" loading="lazy"></p><p>开发启动速度比使用HbuilderX启动项目要快不少</p><p>然后将编译结果<code>dist/dev/mp-weixin</code>导入微信开发者工具即可运行</p><p><img src="'+h+'" alt="图片" loading="lazy"></p><h2 id="sass支持" tabindex="-1">Sass支持 <a class="header-anchor" href="#sass支持" aria-label="Permalink to &quot;Sass支持&quot;">​</a></h2><p>模板默认是没有支持Sass的</p><p>安装<code>sass-loader</code>与<code>node-sass</code>,需要指定版本，版本高了无法运行</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sass-loader@10.0.1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> node-sass@4</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --dev</span></span></code></pre></div><h2 id="compiler-sfc" tabindex="-1">compiler-sfc <a class="header-anchor" href="#compiler-sfc" aria-label="Permalink to &quot;compiler-sfc&quot;">​</a></h2><p>emm 经过实验，目前编译到小程序端 还不支持，后续观望一下</p><h2 id="vant-ui" tabindex="-1">Vant UI <a class="header-anchor" href="#vant-ui" aria-label="Permalink to &quot;Vant UI&quot;">​</a></h2><h3 id="微信小程序" tabindex="-1">微信小程序 <a class="header-anchor" href="#微信小程序" aria-label="Permalink to &quot;微信小程序&quot;">​</a></h3><p>开发微信小程序则选用<a href="https://vant-contrib.gitee.io/vant-weapp/#/home" target="_blank" rel="noreferrer">Vant Weapp</a></p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @vant/weapp</span></span></code></pre></div><p>在 src目录下创建 wxcomponents 文件夹</p><p>拷贝<code>node_modules/@vant</code> 到 wxcomponents中</p><p><img src="'+o+`" alt="图片" loading="lazy"></p><p><code>src/App.vue</code>中引入样式文件</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    /*每个页面公共css */</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    /* vant - weapp */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    @import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;/wxcomponents/@vant/weapp/dist/common/index.wxss&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>在<code>src/pages.json</code>中全局注册引用的组件</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	&quot;globalStyle&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">		&quot;usingComponents&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">			&quot;van-button&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/wxcomponents/@vant/weapp/dist/button/index&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>使用</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">van-button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;primary&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;测试&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">van-button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>效果</p><p><img src="`+d+'" alt="图片" loading="lazy"></p><h2 id="未完待续" tabindex="-1">未完待续 <a class="header-anchor" href="#未完待续" aria-label="Permalink to &quot;未完待续&quot;">​</a></h2><ul><li>eslint</li><li>vuex</li><li>axios</li><li>。。。and more</li></ul><h2 id="资料汇总" tabindex="-1">资料汇总 <a class="header-anchor" href="#资料汇总" aria-label="Permalink to &quot;资料汇总&quot;">​</a></h2><ul><li><a href="https://github.com/ATQQ/uni-vue3-ts-template" target="_blank" rel="noreferrer">uni-vue3-ts：模板仓库</a></li><li><a href="https://ask.dcloud.net.cn/article/37834" target="_blank" rel="noreferrer">uni-app 项目小程序端、H5 端支持 vue3 介绍</a></li></ul><div style="display:none;" data-pagefind-meta="base64:JTdCJTIydGl0bGUlMjIlM0ElMjIlRTYlQTglQTElRTYlOUQlQkYlRTUlQjclQTUlRTclQTglOEIlRTYlOTAlQUQlRTUlQkIlQkElRUYlQkMlOUFWdWUtQ2xpJUU2JTkwJUFEJUU1JUJCJUJBVnVlMyUyRlRTJTJGdW5pLWFwcCVFNSVCMCU4RiVFNyVBOCU4QiVFNSVCQSU4RiVFNSVCNyVBNSVFNyVBOCU4QiglRTQlQjglOEEpJTIyJTJDJTIyZGF0ZSUyMiUzQTE2MjQzMjAwMDAwMDAlMkMlMjJ0YWdzJTIyJTNBJTVCJTIyJUU2JThBJTgwJUU2JTlDJUFGJUU3JUFDJTk0JUU4JUFFJUIwJTIyJTJDJTIyJUU1JUI3JUE1JUU3JUE4JThCJUU2JUE4JUExJUU2JTlEJUJGJTIyJTVEJTJDJTIyY2F0ZWdvcmllcyUyMiUzQSU1QiUyMiVFNiU4QSU4MCVFNiU5QyVBRiVFNyVBQyU5NCVFOCVBRSVCMCUyMiU1RCU3RA=="></div>',57),k=[c];function g(u,y,m,b,v,E){return a(),i("div",null,k)}const M=s(r,[["render",g]]);export{C as __pageData,M as default};

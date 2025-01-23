import{_ as i,o as a,c as n,aa as e}from"./chunks/framework.BGghcJ6R.js";const t="/preview/ripplejourney/ripplejourney.github.io/pr/6/assets/MTYzNDAxNjYxMzEyNg__634016613126.DpqKcFZ0.png",p="/preview/ripplejourney/ripplejourney.github.io/pr/6/assets/MTYzNDAxNTk3NjAwNQ__634015976005.DEw2XIaE.png",l="/preview/ripplejourney/ripplejourney.github.io/pr/6/assets/MTYzNDAxNjA0ODYwMw__634016048603.D-LcLcTy.png",h="/preview/ripplejourney/ripplejourney.github.io/pr/6/assets/MTYzNDAxNjg3ODYwMg__634016878602.CUx-mvaB.png",k="/preview/ripplejourney/ripplejourney.github.io/pr/6/assets/MTYzNDAxNzQyNDM2Mg__634017424362.BczE6v-p.png",r="/preview/ripplejourney/ripplejourney.github.io/pr/6/assets/MTYzNDAxNzg4NjY4OQ__634017886689.DiJgJKBL.png",d="/preview/ripplejourney/ripplejourney.github.io/pr/6/assets/MTYzNDAxODAxNTMxMw__634018015313.CuUGSlqT.png",m=JSON.parse('{"title":"解决Vite-React项目中js使用jsx语法报错的问题","description":"","frontmatter":{"title":"解决Vite-React项目中js使用jsx语法报错的问题","date":"2021-10-12T00:00:00.000Z","tags":["技术笔记","技术教程"],"categories":["技术笔记"],"head":[["script",{},"!function(p){\\"use strict\\";!function(t){var s=window,e=document,i=p,c=\\"\\".concat(\\"https:\\"===e.location.protocol?\\"https://\\":\\"http://\\",\\"sdk.51.la/js-sdk-pro.min.js\\"),n=e.createElement(\\"script\\"),r=e.getElementsByTagName(\\"script\\")[0];n.type=\\"text/javascript\\",n.setAttribute(\\"charset\\",\\"UTF-8\\"),n.async=!0,n.src=c,n.id=\\"LA_COLLECT\\",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({\\"id\\":\\"Jgmg5avjAUvoyePS\\",\\"ck\\":\\"Jgmg5avjAUvoyePS\\",\\"hashMode\\":true});"]]},"headers":[],"relativePath":"technology/learn/vite-react-js.md","filePath":"technology/learn/vite-react-js.md","lastUpdated":1720544135000}'),o={name:"technology/learn/vite-react-js.md"};function c(g,s,F,y,E,u){return a(),n("div",{"data-pagefind-body":!0},s[0]||(s[0]=[e('<h1 id="解决vite-react项目中js使用jsx语法报错的问题" tabindex="-1">解决Vite-React项目中js使用jsx语法报错的问题 <a class="header-anchor" href="#解决vite-react项目中js使用jsx语法报错的问题" aria-label="Permalink to &quot;解决Vite-React项目中js使用jsx语法报错的问题&quot;">​</a></h1><h2 id="背景" tabindex="-1">背景 <a class="header-anchor" href="#背景" aria-label="Permalink to &quot;背景&quot;">​</a></h2><p>在做存量项目接入Vite测试时发现，存量（老）项目中很多是直接在js中书写jsx语法，使用Vite启动时就会抛出一堆问题<code>Failed to parse source</code>。</p><p>不嫌麻烦可以跑个脚本<strong>批量修改文件类型，这是一个解决办法</strong>。</p><p>为了刨根知底，同时为了存量项目最低成本的接入Vite使用，尽力避免修改业务代码。得寻找其它办法解决一下。</p><p>报错截图如下</p><p><img src="'+t+`" alt="图片" loading="lazy"></p><h2 id="复现问题" tabindex="-1">复现问题 <a class="header-anchor" href="#复现问题" aria-label="Permalink to &quot;复现问题&quot;">​</a></h2><p>初始化demo项目</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># npm 6.x</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vite@latest</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> my-react-app</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --template</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> react-ts</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># npm 7+, extra double-dash is needed:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vite@latest</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> my-react-app</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --template</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> react-ts</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># yarn</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> create</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vite</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> my-react-app</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --template</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> react-ts</span></span></code></pre></div><p>目录如下</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> index.html</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> package.json</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> src</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> App.css</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> App.tsx</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> favicon.svg</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> index.css</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> logo.svg</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> main.tsx</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  └──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vite-env.d.ts</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tsconfig.json</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">└──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vite.config.ts</span></span></code></pre></div><p>启动</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev</span></span></code></pre></div><p><img src="`+p+'" alt="图片" loading="lazy"></p><p>页面正常，接下来将<code>App.tsx</code>修改为<code>App.js</code></p><p>将会得到上述的报错</p><p><img src="'+l+'" alt="图片" loading="lazy"></p><h2 id="原因" tabindex="-1">\b\b原因 <a class="header-anchor" href="#原因" aria-label="Permalink to &quot;\b\b原因&quot;">​</a></h2><ol><li>Vite在启动时会做<a href="https://cn.vitejs.dev/guide/dep-pre-bundling.html#the-why" target="_blank" rel="noreferrer">依赖的预构建</a></li><li><code>预构建</code>，<code>运行时</code>默认都只会对<code>jsx</code>与<code>tsx</code>做语法转换。不会对js做jsx的语法转换。</li></ol><p><img src="'+h+'" alt="图片" loading="lazy"></p><h2 id="解决方案" tabindex="-1">解决方案 <a class="header-anchor" href="#解决方案" aria-label="Permalink to &quot;解决方案&quot;">​</a></h2><ol><li>修改依赖预构建的配置</li><li>使用babel插件<code>@babel/plugin-transform-react-jsx</code>，让Vite在运行时对js文件转换</li></ol><p><img src="'+k+`" alt="图片" loading="lazy"></p><p>按照文档描述在配置文件添加一点配置</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defineConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  build:{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    rollupOptions:{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      input:[]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  optimizeDeps: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    entries: [],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><p>通过阅读<code>@vite/plugin-react</code>的<a href="https://github.com/vitejs/vite/tree/main/packages/plugin-react" target="_blank" rel="noreferrer">文档</a>,发现其支持传入babel插件</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @babel/plugin-transform-react-jsx</span></span></code></pre></div><p>添加插件</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { defineConfig } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vite&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> react </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@vitejs/plugin-react&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// https://vitejs.dev/config/</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defineConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  plugins: [</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">react</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      babel: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        plugins: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;@babel/plugin-transform-react-jsx&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  })],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><p>再次启动验证,发现一个报错</p><p><img src="`+r+'" alt="图片" loading="lazy"></p><p>原因是没有在App.js中引入<code>React</code>,咱们引入一下</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> React,{ useState } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;react&#39;</span></span></code></pre></div><p>大功告成</p><p><img src="'+d+'" alt="图片" loading="lazy"></p><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>两种处理方案</p><ol><li>文件后缀 js =&gt; jsx</li><li>修改依赖预构建配置，再添加babel插件<code>@babel/plugin-transform-react-jsx</code></li></ol><p>第二种方法会一定程度影响项目的启动速度。读者可以根据实际项目情况pick方案</p><h2 id="最后" tabindex="-1">最后 <a class="header-anchor" href="#最后" aria-label="Permalink to &quot;最后&quot;">​</a></h2><p>欢迎大家在评论区共享/交流在开发过程中接入Vite时遇到的一些问题与总结的经验</p><ul><li><a href="https://github.com/ATQQ/demos/tree/main/vite-react-js" target="_blank" rel="noreferrer">源码地址</a></li></ul>',43)]))}const C=i(o,[["render",c]]);export{m as __pageData,C as default};

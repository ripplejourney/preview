import{_ as s,o as i,c as a,a5 as n}from"./chunks/framework.3kJ-xhFW.js";const c=JSON.parse('{"title":"模板工程搭建：Vue-Cli搭建Vue3/TS/uni-app小程序工程(下)","description":"","frontmatter":{"title":"模板工程搭建：Vue-Cli搭建Vue3/TS/uni-app小程序工程(下)","date":"2021-06-23T00:00:00.000Z","tags":["技术笔记","工程模板"],"categories":["技术笔记"]},"headers":[],"relativePath":"technology/tpl/uni-vue3-cli_3.md","filePath":"technology/tpl/uni-vue3-cli_3.md","lastUpdated":1719297432000}'),l={name:"technology/tpl/uni-vue3-cli_3.md"},t=n(`<h1 id="模板工程搭建-vue-cli搭建vue3-ts-uni-app小程序工程-下" tabindex="-1">模板工程搭建：Vue-Cli搭建Vue3/TS/uni-app小程序工程(下) <a class="header-anchor" href="#模板工程搭建-vue-cli搭建vue3-ts-uni-app小程序工程-下" aria-label="Permalink to &quot;模板工程搭建：Vue-Cli搭建Vue3/TS/uni-app小程序工程(下)&quot;">​</a></h1><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p>前两期:</p><ul><li><a href="./uni-vue3-cli_1.html">上</a></li><li><a href="./uni-vue3-cli_2.html">中</a></li></ul><p>已经搭建了一个包含了<code>Vue3</code>,<code>TS</code>,<code>Sass</code>,<code>Vant Weapp</code>,<code>Vuex4</code>,<code>Axios</code>,<code>Eslint</code>等特性的<a href="https://github.com/ATQQ/uni-vue3-ts-template" target="_blank" rel="noreferrer">uni-vue3-ts</a>工程化模板</p><p>本节将为模板接入更多的特性：</p><ul><li>less</li><li><a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">tailwindcss</a></li></ul><h2 id="less" tabindex="-1">less <a class="header-anchor" href="#less" aria-label="Permalink to &quot;less&quot;">​</a></h2><p>模板默认是没有支持less的</p><p>安装<code>less-loader</code>与<code>less</code>即可</p><p>需要指定版本，版本过高不支持低版本的webpack也无法顺利运行</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> less-loader@^7</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> less@^3.13.1</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --dev</span></span></code></pre></div><h2 id="tailwindcss" tabindex="-1">tailwindcss <a class="header-anchor" href="#tailwindcss" aria-label="Permalink to &quot;tailwindcss&quot;">​</a></h2><p>直接在 HTML 进行编写class即可实现页面样式生成</p><p>也就是前段时间刚出来时，社区讨论很激烈的一个东西</p><p>个人是不太喜欢这个东西，会导致样式与页面内容耦合度过高，仿佛回到了bootstrap时代</p><p>emm但如果拿来写一些简单的示例demo还是可以</p><p>优势就是对于不复杂的组价能直观的看到标签对应的最终样式，不用去样式文件中检索查看</p><p>下面介绍一下在uni-app中使用，咱根据<a href="https://tailwindcss.com/docs/guides/vue-3-vite" target="_blank" rel="noreferrer">文档</a>摸索前进</p><h3 id="安装依赖" tabindex="-1">安装依赖 <a class="header-anchor" href="#安装依赖" aria-label="Permalink to &quot;安装依赖&quot;">​</a></h3><ul><li>tailwindcss</li><li>postcss</li><li>autoprefixer</li><li>postcss-class-rename</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tailwindcss@npm:@tailwindcss/postcss7-compat</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> postcss@^7</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> autoprefixer@^9</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> postcss-class-rename</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --dev</span></span></code></pre></div><p>依赖安装完后就简单配置一下</p><h3 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h3><p>根目录下创建<code>tailwind.config.js</code>文件,兼容小程序部分的配置来源于文末的参考资料</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  purge: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;./src/**/*.{vue,js,ts,jsx,tsx}&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  darkMode: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// or &#39;media&#39; or &#39;class&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  separator: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;__&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 兼容小程序，将 : 替换成 __</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  theme: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    extend: {},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  variants: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    extend: {},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  plugins: [],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  corePlugins: {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 兼容小程序，将带有 * 选择器的插件禁用</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    preflight: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    space: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    divideColor: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    divideOpacity: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    divideStyle: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    divideWidth: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><p>修改<code>postcss.config.js</code>文件内容，最终配置如下</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> path</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;path&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  parser: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;postcss-comment&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  plugins: [</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;postcss-import&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)({</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      resolve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">basedir</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">importOptions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (id.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">startsWith</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;~@/&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">          return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> path.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">resolve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(process.env.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">UNI_INPUT_DIR</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, id.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">substr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">));</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (id.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">startsWith</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;@/&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">          return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> path.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">resolve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(process.env.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">UNI_INPUT_DIR</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, id.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">substr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">));</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (id.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">startsWith</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;&amp;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> !</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">id.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">startsWith</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;//&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">          return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> path.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">resolve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(process.env.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">UNI_INPUT_DIR</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, id.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">substr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">));</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> id;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }),</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 新增</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;tailwindcss&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;autoprefixer&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      remove: process.env.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">UNI_PLATFORM</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> !==</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;h5&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }),</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 新增</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;postcss-class-rename&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)({</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\\\\\\\</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;_&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 兼容小程序，将类名带 .和/ 替换成 _</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }),</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;@dcloudio/vue-cli-plugin-uni/packages/postcss&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><p>在 App.vue中加入引入 <code>tailwindcss</code>的代码</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* tailwindcss */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;tailwindcss/tailwind.css&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="页面中使用" tabindex="-1">页面中使用 <a class="header-anchor" href="#页面中使用" aria-label="Permalink to &quot;页面中使用&quot;">​</a></h3><p>这里参考<a href="https://tailwindcss.com/docs/text-color" target="_blank" rel="noreferrer">文档</a>用了几个简单的属性</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">view</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">text</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;text-xl font-bold text-red-500&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;tailwindcss&lt;/</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">view</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>渲染结果如下</p><p><img src="https://img.cdn.sugarat.top/mdImg/MTYyNDQ0NDIzMjQyMg==624444232422" alt="图片" loading="lazy"></p><h2 id="最后" tabindex="-1">最后 <a class="header-anchor" href="#最后" aria-label="Permalink to &quot;最后&quot;">​</a></h2><p>到这一个包含了常见特性的uni-app 开发小程序的工程化模板就算结束了，如果还要有推荐的特性欢迎评论交流</p><h2 id="资料汇总" tabindex="-1">资料汇总 <a class="header-anchor" href="#资料汇总" aria-label="Permalink to &quot;资料汇总&quot;">​</a></h2><ul><li><a href="https://github.com/ATQQ/uni-vue3-ts-template" target="_blank" rel="noreferrer">uni-vue3-ts：模板仓库</a></li><li><a href="https://tailwindcss.com/docs/installation#post-css-7-compatibility-build" target="_blank" rel="noreferrer">PostCSS 7 compatibility build</a></li><li><a href="https://wyz.xyz/d/150-uni-app-tailwindcss" target="_blank" rel="noreferrer">uni-app 使用 tailwindcss</a></li></ul><div style="display:none;" data-pagefind-meta="base64:JTdCJTIydGl0bGUlMjIlM0ElMjIlRTYlQTglQTElRTYlOUQlQkYlRTUlQjclQTUlRTclQTglOEIlRTYlOTAlQUQlRTUlQkIlQkElRUYlQkMlOUFWdWUtQ2xpJUU2JTkwJUFEJUU1JUJCJUJBVnVlMyUyRlRTJTJGdW5pLWFwcCVFNSVCMCU4RiVFNyVBOCU4QiVFNSVCQSU4RiVFNSVCNyVBNSVFNyVBOCU4QiglRTQlQjglOEIpJTIyJTJDJTIyZGF0ZSUyMiUzQTE2MjQ0MDY0MDAwMDAlMkMlMjJ0YWdzJTIyJTNBJTVCJTIyJUU2JThBJTgwJUU2JTlDJUFGJUU3JUFDJTk0JUU4JUFFJUIwJTIyJTJDJTIyJUU1JUI3JUE1JUU3JUE4JThCJUU2JUE4JUExJUU2JTlEJUJGJTIyJTVEJTJDJTIyY2F0ZWdvcmllcyUyMiUzQSU1QiUyMiVFNiU4QSU4MCVFNiU5QyVBRiVFNyVBQyU5NCVFOCVBRSVCMCUyMiU1RCU3RA=="></div>`,40),h=[t];function p(k,e,E,r,d,g){return i(),a("div",null,h)}const o=s(l,[["render",p]]);export{c as __pageData,o as default};

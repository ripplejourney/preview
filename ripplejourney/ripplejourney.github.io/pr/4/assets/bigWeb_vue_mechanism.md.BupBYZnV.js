import{_ as d,o,c as r,aa as l,e as t,a as i,m as n,p as a,K as p}from"./chunks/framework.Bn1nHBg1.js";const u="/preview/ripplejourney/ripplejourney.github.io/pr/4/assets/MTU4NjgzMzgxNDE1OA__586833814158.B5-r3uM7.png",k="/preview/ripplejourney/ripplejourney.github.io/pr/4/assets/MTU4Njg0NTExMjAxOA__586845112018.NADeQb2s.png",c=JSON.parse('{"title":"运行机制概述","description":"","frontmatter":{"sidebar":{"title":"❤运行机制概述","step":9},"isTimeLine":true,"title":"运行机制概述","date":"2020-04-14T00:00:00.000Z","tags":["大前端","vue"],"categories":["大前端"],"head":[["script",{},"!function(p){\\"use strict\\";!function(t){var s=window,e=document,i=p,c=\\"\\".concat(\\"https:\\"===e.location.protocol?\\"https://\\":\\"http://\\",\\"sdk.51.la/js-sdk-pro.min.js\\"),n=e.createElement(\\"script\\"),r=e.getElementsByTagName(\\"script\\")[0];n.type=\\"text/javascript\\",n.setAttribute(\\"charset\\",\\"UTF-8\\"),n.async=!0,n.src=c,n.id=\\"LA_COLLECT\\",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({\\"id\\":\\"Jgmg5avjAUvoyePS\\",\\"ck\\":\\"Jgmg5avjAUvoyePS\\",\\"hashMode\\":true});"]]},"headers":[],"relativePath":"bigWeb/vue/mechanism.md","filePath":"bigWeb/vue/mechanism.md","lastUpdated":1720544135000}'),g={name:"bigWeb/vue/mechanism.md"};function E(h,e,m,y,b,f){const s=p("word");return o(),r("div",{"data-pagefind-body":!0},[e[39]||(e[39]=l('<h1 id="运行机制概述" tabindex="-1">运行机制概述 <a class="header-anchor" href="#运行机制概述" aria-label="Permalink to &quot;运行机制概述&quot;">​</a></h1><p><img src="'+u+'" alt="图片" loading="lazy"></p><center>全局概览</center><h2 id="初始化及挂载" tabindex="-1">初始化及挂载 <a class="header-anchor" href="#初始化及挂载" aria-label="Permalink to &quot;初始化及挂载&quot;">​</a></h2><ul><li>在 new Vue() 之后。 Vue 会调用 _init 函数进行初始化 <ul><li>初始化生命周期、事件、 props、 methods、 data、 computed 与 watch 等</li><li><strong>通过 Object.defineProperty 设置 setter 与 getter 函数，用来实现<code>响应式</code>以及<code>依赖收集</code></strong></li><li>初始化之后调用 $mount 挂载组件 <ul><li>如果是运行时编译，即不存在 render function</li><li>存在 template 的情况，需要进行<code>编译</code>步骤。</li></ul></li></ul></li></ul><h2 id="编译" tabindex="-1">编译 <a class="header-anchor" href="#编译" aria-label="Permalink to &quot;编译&quot;">​</a></h2>',6)),t("p",null,[e[1]||(e[1]=i("compile编译分为 ")),n(s,{title:"解析"},{default:a(()=>e[0]||(e[0]=[i("parse")])),_:1}),e[2]||(e[2]=i(","))]),n(s,{title:"优化"},{default:a(()=>e[3]||(e[3]=[i("optimize")])),_:1}),e[40]||(e[40]=i(",")),n(s,{title:"生成"},{default:a(()=>e[4]||(e[4]=[i("generate")])),_:1}),e[41]||(e[41]=i("三个阶段，最终需要得到 ")),n(s,{title:"渲染函数"},{default:a(()=>e[5]||(e[5]=[i("render function")])),_:1}),e[42]||(e[42]=t("h3",{id:"parse",tabindex:"-1"},[i("parse "),t("a",{class:"header-anchor",href:"#parse","aria-label":'Permalink to "parse"'},"​")],-1)),t("p",null,[e[7]||(e[7]=i("使用正则表达式等方式")),e[8]||(e[8]=t("code",null,"解析",-1)),e[9]||(e[9]=i("Template模板中的指令,class,style等等数据,形成")),n(s,{title:"Abstract Syntax Tree",content:"抽象语法树"},{default:a(()=>e[6]||(e[6]=[i("AST")])),_:1})]),e[43]||(e[43]=t("h3",{id:"optimize",tabindex:"-1"},[i("optimize "),t("a",{class:"header-anchor",href:"#optimize","aria-label":'Permalink to "optimize"'},"​")],-1)),t("p",null,[e[11]||(e[11]=i("optimize 的主要作用是")),n(s,{content:"这是 Vue 在编译过程中的一处优化"},{default:a(()=>e[10]||(e[10]=[i("标记 static 静态节点")])),_:1}),e[12]||(e[12]=i("，当 ")),e[13]||(e[13]=t("code",null,"update",-1)),e[14]||(e[14]=i(" 更新界面时，会有一个 ")),e[15]||(e[15]=t("code",null,"patch",-1)),e[16]||(e[16]=i(" 的过程， ")),e[17]||(e[17]=t("code",null,"diff",-1)),e[18]||(e[18]=i(" 算法会直接跳过静态节点，从而减少了比较的过程，优化了 ")),e[19]||(e[19]=t("code",null,"patch",-1)),e[20]||(e[20]=i(" 的性能"))]),e[44]||(e[44]=t("h3",{id:"generate",tabindex:"-1"},[i("generate "),t("a",{class:"header-anchor",href:"#generate","aria-label":'Permalink to "generate"'},"​")],-1)),t("p",null,[e[22]||(e[22]=i("generate 是将 ")),e[23]||(e[23]=t("code",null,"AST",-1)),e[24]||(e[24]=i(" 转化成 ")),e[25]||(e[25]=t("code",null,"render function",-1)),e[26]||(e[26]=i(" 字符串的过程，得到结果是 render 的字符串以及 ")),n(s,{title:"静态Render",content:"静态 render 其实跟 render 是一样的，都是执行得到 Vnode,只是静态 render，没有绑定动态数据，即说不会变化"},{default:a(()=>e[21]||(e[21]=[i("staticRenderFns")])),_:1}),e[27]||(e[27]=i("字符串。"))]),t("p",null,[e[29]||(e[29]=i("在经历过 ")),e[30]||(e[30]=t("code",null,"parse",-1)),e[31]||(e[31]=i(",")),e[32]||(e[32]=t("code",null,"optimize",-1)),e[33]||(e[33]=i(",")),e[34]||(e[34]=t("code",null,"generate",-1)),e[35]||(e[35]=i("这三个阶段以后，组件中就会存在渲染 ")),n(s,{title:"Virtual DOM",content:"虚拟DOM是JavaScript对象"},{default:a(()=>e[28]||(e[28]=[i("VNode")])),_:1}),e[36]||(e[36]=i(" 所需的 ")),e[37]||(e[37]=t("code",null,"render function",-1)),e[38]||(e[38]=i(" 了"))]),e[45]||(e[45]=l('<h2 id="响应式" tabindex="-1">响应式 <a class="header-anchor" href="#响应式" aria-label="Permalink to &quot;响应式&quot;">​</a></h2><p><code>getter</code> 跟 <code>setter</code>在 init 的时候通过 Object.defineProperty 进行了绑定</p><ul><li>当被设置的对象被读取的时候会执行 <code>getter</code> 函数</li><li>当被赋值的时候会执行 <code>setter</code> 函数</li></ul><p>当 <code>render function</code> 被渲染的时候，因为会读取所需对象的值，所以会触发 <code>getter</code> 函数进行<strong>依赖收集</strong>,目的是将观察者 <code>Watcher</code> 对象存放到当前闭包中的订阅者 <code>Dep</code> 的 <code>subs</code> 中</p><p><img src="'+k+`" alt="图片" loading="lazy"></p><p>修改对象的值的时候，会触发对应的 <code>setter</code>， <code>setter</code> 通知之前<strong>依赖收集</strong>得到的 <code>Dep</code> 中的每一个 <code>Watcher</code>，告知他们我的值改变了，需要重新渲染视图。这时候这些 <code>Watcher</code> 就会开始调用 <code>update</code> 来更新视图，当然这中间还有一个 <code>patch</code> 的过程以及使用队列来异步更新的策略</p><h2 id="virtual-dom" tabindex="-1">Virtual DOM <a class="header-anchor" href="#virtual-dom" aria-label="Permalink to &quot;Virtual DOM&quot;">​</a></h2><p><code>render function</code> 会被转化成 <code>VNode</code> 节点</p><ul><li><code>Virtual DOM</code> 是一棵以 JavaScript 对象（ VNode 节点）作为基础的树，用对象属性来描述节点，实际上它只是一层对真实 DOM 的抽象</li><li>最终可以通过一系列操作使这棵树映射到真实环境上</li><li>Virtual DOM 是以 JavaScript 对象为基础而不依赖真实平台环境，所以它具有了跨平台的能力 <ul><li>浏览器平台</li><li>Weex</li><li>Node</li><li>...</li></ul></li></ul><p><strong>简单示例</strong></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    tag</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;div&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    children</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            tag: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;a&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            text: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;click me&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>渲染为</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;click me&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="更新视图" tabindex="-1">更新视图 <a class="header-anchor" href="#更新视图" aria-label="Permalink to &quot;更新视图&quot;">​</a></h2><p>在修改一个对象值的时候，会通过 <code>setter</code> -&gt; <code>Watcher</code> -&gt; <code>update</code> 的流程来修改对应的视图</p><p>当数据变化后，执行 <code>render function</code> 就可以得到一个新的 <code>VNode</code> 节点,将<code>新 VNode</code> 与<code>旧 VNode</code> 一起传入 <code>patch</code> 进行比较，经过 diff 算法得出它们的<code>差异</code> ,只需要将这些<code>差异</code>的对应 DOM 进行修改即可。</p>`,16))])}const x=d(g,[["render",E]]);export{c as __pageData,x as default};

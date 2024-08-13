import{_ as l,o,c as d,j as i,a as e,I as t,w as s,a5 as n,D as c}from"./chunks/framework.FS9p9d7O.js";const r="/preview/cnjimbo/cnjimbo.github.io/pr/201/assets/MTU4NjgzMzgxNDE1OA__586833814158.B5-r3uM7.png",p="/preview/cnjimbo/cnjimbo.github.io/pr/201/assets/MTU4Njg0NTExMjAxOA__586845112018.NADeQb2s.png",z=JSON.parse('{"title":"运行机制概述","description":"","frontmatter":{"sidebar":{"title":"❤运行机制概述","step":9},"isTimeLine":true,"title":"运行机制概述","date":"2020-04-14T00:00:00.000Z","tags":["大前端","vue"],"categories":["大前端"]},"headers":[],"relativePath":"bigWeb/vue/mechanism.md","filePath":"bigWeb/vue/mechanism.md","lastUpdated":1720544135000}'),h={name:"bigWeb/vue/mechanism.md"},k=n('<h1 id="运行机制概述" tabindex="-1">运行机制概述 <a class="header-anchor" href="#运行机制概述" aria-label="Permalink to &quot;运行机制概述&quot;">​</a></h1><p><img src="'+r+'" alt="图片" loading="lazy"></p><center>全局概览</center><h2 id="初始化及挂载" tabindex="-1">初始化及挂载 <a class="header-anchor" href="#初始化及挂载" aria-label="Permalink to &quot;初始化及挂载&quot;">​</a></h2><ul><li>在 new Vue() 之后。 Vue 会调用 _init 函数进行初始化 <ul><li>初始化生命周期、事件、 props、 methods、 data、 computed 与 watch 等</li><li><strong>通过 Object.defineProperty 设置 setter 与 getter 函数，用来实现<code>响应式</code>以及<code>依赖收集</code></strong></li><li>初始化之后调用 $mount 挂载组件 <ul><li>如果是运行时编译，即不存在 render function</li><li>存在 template 的情况，需要进行<code>编译</code>步骤。</li></ul></li></ul></li></ul><h2 id="编译" tabindex="-1">编译 <a class="header-anchor" href="#编译" aria-label="Permalink to &quot;编译&quot;">​</a></h2>',6),u=i("h3",{id:"parse",tabindex:"-1"},[e("parse "),i("a",{class:"header-anchor",href:"#parse","aria-label":'Permalink to "parse"'},"​")],-1),_=i("code",null,"解析",-1),g=i("h3",{id:"optimize",tabindex:"-1"},[e("optimize "),i("a",{class:"header-anchor",href:"#optimize","aria-label":'Permalink to "optimize"'},"​")],-1),E=i("code",null,"update",-1),m=i("code",null,"patch",-1),b=i("code",null,"diff",-1),f=i("code",null,"patch",-1),y=i("h3",{id:"generate",tabindex:"-1"},[e("generate "),i("a",{class:"header-anchor",href:"#generate","aria-label":'Permalink to "generate"'},"​")],-1),v=i("code",null,"AST",-1),V=i("code",null,"render function",-1),x=i("code",null,"parse",-1),T=i("code",null,"optimize",-1),D=i("code",null,"generate",-1),N=i("code",null,"render function",-1),A=n('<h2 id="响应式" tabindex="-1">响应式 <a class="header-anchor" href="#响应式" aria-label="Permalink to &quot;响应式&quot;">​</a></h2><p><code>getter</code> 跟 <code>setter</code>在 init 的时候通过 Object.defineProperty 进行了绑定</p><ul><li>当被设置的对象被读取的时候会执行 <code>getter</code> 函数</li><li>当被赋值的时候会执行 <code>setter</code> 函数</li></ul><p>当 <code>render function</code> 被渲染的时候，因为会读取所需对象的值，所以会触发 <code>getter</code> 函数进行<strong>依赖收集</strong>,目的是将观察者 <code>Watcher</code> 对象存放到当前闭包中的订阅者 <code>Dep</code> 的 <code>subs</code> 中</p><p><img src="'+p+`" alt="图片" loading="lazy"></p><p>修改对象的值的时候，会触发对应的 <code>setter</code>， <code>setter</code> 通知之前<strong>依赖收集</strong>得到的 <code>Dep</code> 中的每一个 <code>Watcher</code>，告知他们我的值改变了，需要重新渲染视图。这时候这些 <code>Watcher</code> 就会开始调用 <code>update</code> 来更新视图，当然这中间还有一个 <code>patch</code> 的过程以及使用队列来异步更新的策略</p><h2 id="virtual-dom" tabindex="-1">Virtual DOM <a class="header-anchor" href="#virtual-dom" aria-label="Permalink to &quot;Virtual DOM&quot;">​</a></h2><p><code>render function</code> 会被转化成 <code>VNode</code> 节点</p><ul><li><code>Virtual DOM</code> 是一棵以 JavaScript 对象（ VNode 节点）作为基础的树，用对象属性来描述节点，实际上它只是一层对真实 DOM 的抽象</li><li>最终可以通过一系列操作使这棵树映射到真实环境上</li><li>Virtual DOM 是以 JavaScript 对象为基础而不依赖真实平台环境，所以它具有了跨平台的能力 <ul><li>浏览器平台</li><li>Weex</li><li>Node</li><li>...</li></ul></li></ul><p><strong>简单示例</strong></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    tag</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;div&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    children</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            tag: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;a&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            text: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;click me&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>渲染为</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;click me&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="更新视图" tabindex="-1">更新视图 <a class="header-anchor" href="#更新视图" aria-label="Permalink to &quot;更新视图&quot;">​</a></h2><p>在修改一个对象值的时候，会通过 <code>setter</code> -&gt; <code>Watcher</code> -&gt; <code>update</code> 的流程来修改对应的视图</p><p>当数据变化后，执行 <code>render function</code> 就可以得到一个新的 <code>VNode</code> 节点,将<code>新 VNode</code> 与<code>旧 VNode</code> 一起传入 <code>patch</code> 进行比较，经过 diff 算法得出它们的<code>差异</code> ,只需要将这些<code>差异</code>的对应 DOM 进行修改即可。</p>`,16);function P(C,F,S,M,O,j){const a=c("word");return o(),d("div",{"data-pagefind-body":!0},[k,i("p",null,[e("compile编译分为 "),t(a,{title:"解析"},{default:s(()=>[e("parse")]),_:1}),e(",")]),t(a,{title:"优化"},{default:s(()=>[e("optimize")]),_:1}),e(","),t(a,{title:"生成"},{default:s(()=>[e("generate")]),_:1}),e("三个阶段，最终需要得到 "),t(a,{title:"渲染函数"},{default:s(()=>[e("render function")]),_:1}),u,i("p",null,[e("使用正则表达式等方式"),_,e("Template模板中的指令,class,style等等数据,形成"),t(a,{title:"Abstract Syntax Tree",content:"抽象语法树"},{default:s(()=>[e("AST")]),_:1})]),g,i("p",null,[e("optimize 的主要作用是"),t(a,{content:"这是 Vue 在编译过程中的一处优化"},{default:s(()=>[e("标记 static 静态节点")]),_:1}),e("，当 "),E,e(" 更新界面时，会有一个 "),m,e(" 的过程， "),b,e(" 算法会直接跳过静态节点，从而减少了比较的过程，优化了 "),f,e(" 的性能")]),y,i("p",null,[e("generate 是将 "),v,e(" 转化成 "),V,e(" 字符串的过程，得到结果是 render 的字符串以及 "),t(a,{title:"静态Render",content:"静态 render 其实跟 render 是一样的，都是执行得到 Vnode,只是静态 render，没有绑定动态数据，即说不会变化"},{default:s(()=>[e("staticRenderFns")]),_:1}),e("字符串。")]),i("p",null,[e("在经历过 "),x,e(","),T,e(","),D,e("这三个阶段以后，组件中就会存在渲染 "),t(a,{title:"Virtual DOM",content:"虚拟DOM是JavaScript对象"},{default:s(()=>[e("VNode")]),_:1}),e(" 所需的 "),N,e(" 了")]),A])}const B=l(h,[["render",P]]);export{z as __pageData,B as default};

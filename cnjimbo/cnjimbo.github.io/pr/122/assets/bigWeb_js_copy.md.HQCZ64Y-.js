import{_ as s,o as i,c as a,a5 as n}from"./chunks/framework.BxF_arG0.js";const o=JSON.parse('{"title":"浅拷贝与深拷贝","description":"","frontmatter":{"sidebar":{"title":"浅拷贝与深拷贝","step":29},"isTimeLine":true,"title":"浅拷贝与深拷贝","date":"2020-10-02T00:00:00.000Z","tags":["大前端","javascript"],"categories":["大前端"]},"headers":[],"relativePath":"bigWeb/js/copy.md","filePath":"bigWeb/js/copy.md","lastUpdated":1719297432000}'),h={name:"bigWeb/js/copy.md"},l=n(`<h1 id="浅拷贝与深拷贝" tabindex="-1">浅拷贝与深拷贝 <a class="header-anchor" href="#浅拷贝与深拷贝" aria-label="Permalink to &quot;浅拷贝与深拷贝&quot;">​</a></h1><p>对象类型在赋值的过程中其实是复制了地址，从而会导致改变了一方其他也都被改变的情况,解决这种问题的方法就是利用深/浅拷贝</p><h2 id="什么是浅拷贝" tabindex="-1">什么是浅拷贝 <a class="header-anchor" href="#什么是浅拷贝" aria-label="Permalink to &quot;什么是浅拷贝&quot;">​</a></h2><p>针对对象拷贝的场景，只拷贝了第一层,深层次（大于一层）只能拷贝到对象的引用</p><p>即深层次的对象发生了变动，会影响原来的对象与被拷贝出来的新对象</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * 浅拷贝</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> {object}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> obj</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> shallowCopy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">obj</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // ...省略实现</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> a</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;xm&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, info: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        age: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">18</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> a1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> shallowCopy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(a)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">a1.name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;a1&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">a1.info.age </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 20</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(a1.name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a.name) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(a1.info.age </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a.info.age) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// true</span></span></code></pre></div><h3 id="局限性" tabindex="-1">局限性 <a class="header-anchor" href="#局限性" aria-label="Permalink to &quot;局限性&quot;">​</a></h3><p>浅拷贝只解决了第一层的问题，如果接下去的值中还有对象的话,拷贝的仍是引用</p><p>在大多数情况下，我们的对象的层级都是超过一层的</p><h3 id="实现浅拷贝的方案" tabindex="-1">实现浅拷贝的方案 <a class="header-anchor" href="#实现浅拷贝的方案" aria-label="Permalink to &quot;实现浅拷贝的方案&quot;">​</a></h3><h4 id="_1-object-assign" tabindex="-1">1. Object.assign <a class="header-anchor" href="#_1-object-assign" aria-label="Permalink to &quot;1. Object.assign&quot;">​</a></h4><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { name:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;xm&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Object.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">assign</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({},a)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">a.name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;a1&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(a1.name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a.name) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// false</span></span></code></pre></div><h4 id="_2-展开运算符" tabindex="-1">2. 展开运算符 <a class="header-anchor" href="#_2-展开运算符" aria-label="Permalink to &quot;2. 展开运算符&quot;">​</a></h4><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;xm&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">a}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">a.name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;a1&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(a1.name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a.name) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// false</span></span></code></pre></div><p><strong>针对数组还有</strong></p><h4 id="_3-array-prototype-slice" tabindex="-1">3. Array.prototype.slice <a class="header-anchor" href="#_3-array-prototype-slice" aria-label="Permalink to &quot;3. Array.prototype.slice&quot;">​</a></h4><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> arr </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, { name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;xm&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> arr1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Array</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">prototype</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.slice.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">call</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(arr)</span></span></code></pre></div><h4 id="_4-array-prototype-concat" tabindex="-1">4. Array.prototype.concat <a class="header-anchor" href="#_4-array-prototype-concat" aria-label="Permalink to &quot;4. Array.prototype.concat&quot;">​</a></h4><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> arr </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, { name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;xm&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> arr1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Array</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">prototype</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.concat.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">call</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(arr)</span></span></code></pre></div><h2 id="什么是深拷贝" tabindex="-1">什么是深拷贝 <a class="header-anchor" href="#什么是深拷贝" aria-label="Permalink to &quot;什么是深拷贝&quot;">​</a></h2><ul><li>浅拷贝只解决了第一层的问题，如果接下去的值中还有对象的话。要解决这个问题，我们就得使用深拷贝了。</li></ul><h3 id="实现深拷贝方案" tabindex="-1">实现深拷贝方案 <a class="header-anchor" href="#实现深拷贝方案" aria-label="Permalink to &quot;实现深拷贝方案&quot;">​</a></h3><h4 id="_1-json-parse-json-stringify-object" tabindex="-1">1. JSON.parse(JSON.stringify(object)) <a class="header-anchor" href="#_1-json-parse-json-stringify-object" aria-label="Permalink to &quot;1. JSON.parse(JSON.stringify(object))&quot;">​</a></h4><p>能应付大多数业务场景</p><p>局限：</p><ul><li>忽略undefined</li><li>忽略symbol</li><li>原型链上的属性无法拷贝</li><li>不能处理RegExp</li><li>不能正确处理Date</li><li>不能序列化函数</li><li>不能处理循环引用的对象</li></ul><h4 id="_2-messagechannel" tabindex="-1">2. MessageChannel <a class="header-anchor" href="#_2-messagechannel" aria-label="Permalink to &quot;2. MessageChannel&quot;">​</a></h4><ul><li>异步方法</li><li>不能处理函数</li><li>可以处理undefined与循环引用</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> deepClone1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">obj</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Promise</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">resolve</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { port1, port2 } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MessageChannel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        port2.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">onmessage</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> ev</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            resolve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ev.data)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        port1.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">postMessage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(obj)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">async</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { a: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, b: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">undefined</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, c: { d: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } }</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 添加循环引用</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    a.c.d </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a.c</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> b </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> deepClone1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(a)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(b)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})()</span></span></code></pre></div><h4 id="_3-手动实现一个较完整的深拷贝" tabindex="-1">3. 手动实现一个较完整的深拷贝 <a class="header-anchor" href="#_3-手动实现一个较完整的深拷贝" aria-label="Permalink to &quot;3. 手动实现一个较完整的深拷贝&quot;">​</a></h4><p>戳→ <a href="./../../coding/js/deepClone.html">实现深拷贝</a> ←文章</p><div style="display:none;" data-pagefind-meta="base64:JTdCJTIyc2lkZWJhciUyMiUzQSU3QiUyMnRpdGxlJTIyJTNBJTIyJUU2JUI1JTg1JUU2JThCJUI3JUU4JUI0JTlEJUU0JUI4JThFJUU2JUI3JUIxJUU2JThCJUI3JUU4JUI0JTlEJTIyJTJDJTIyc3RlcCUyMiUzQTI5JTdEJTJDJTIyaXNUaW1lTGluZSUyMiUzQXRydWUlMkMlMjJ0aXRsZSUyMiUzQSUyMiVFNiVCNSU4NSVFNiU4QiVCNyVFOCVCNCU5RCVFNCVCOCU4RSVFNiVCNyVCMSVFNiU4QiVCNyVFOCVCNCU5RCUyMiUyQyUyMmRhdGUlMjIlM0ExNjAxNTk2ODAwMDAwJTJDJTIydGFncyUyMiUzQSU1QiUyMiVFNSVBNCVBNyVFNSU4OSU4RCVFNyVBQiVBRiUyMiUyQyUyMmphdmFzY3JpcHQlMjIlNUQlMkMlMjJjYXRlZ29yaWVzJTIyJTNBJTVCJTIyJUU1JUE0JUE3JUU1JTg5JThEJUU3JUFCJUFGJTIyJTVEJTdE"></div>`,32),t=[l];function p(k,e,E,r,d,y){return i(),a("div",null,t)}const c=s(h,[["render",p]]);export{o as __pageData,c as default};

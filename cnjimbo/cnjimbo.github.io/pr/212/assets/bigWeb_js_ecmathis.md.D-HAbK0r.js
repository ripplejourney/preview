import{_ as s,o as i,c as a,a7 as e}from"./chunks/framework.z0iblYeL.js";const g=JSON.parse('{"title":"ECMAScript规范解读this(未完待续)","description":"","frontmatter":{"sidebar":{"title":"ECMAScript规范解读this","step":20},"isTimeLine":true,"title":"ECMAScript规范解读this(未完待续)","date":"2020-04-14T00:00:00.000Z","tags":["大前端","javascript"],"categories":["大前端"]},"headers":[],"relativePath":"bigWeb/js/ecmathis.md","filePath":"bigWeb/js/ecmathis.md","lastUpdated":1719297432000}'),n={name:"bigWeb/js/ecmathis.md"},t=e(`<h1 id="ecmascript规范解读this-未完待续" tabindex="-1">ECMAScript规范解读this(未完待续) <a class="header-anchor" href="#ecmascript规范解读this-未完待续" aria-label="Permalink to &quot;ECMAScript规范解读this(未完待续)&quot;">​</a></h1><blockquote><p>ECMAScript 的类型分为语言类型和规范类型。</p></blockquote><blockquote><p>语言类型是开发者直接使用 ECMAScript 可以操作的。Undefined, Null, Boolean, String, Number, 和 Object。</p></blockquote><blockquote><p>规范类型相当于 meta-values，是用来用算法描述 ECMAScript 语言结构和 ECMAScript 语言类型的。Reference, List, Completion, Property Descriptor, Property Identifier, Lexical Environment, 和 Environment Record。</p></blockquote><h2 id="reference" tabindex="-1">Reference <a class="header-anchor" href="#reference" aria-label="Permalink to &quot;Reference&quot;">​</a></h2><blockquote><p>Reference 是一个 Specification Type，也就是 “只存在于规范里的抽象类型”。它们是为了更好地描述语言的底层行为逻辑才存在的，但并不存在于实际的 js 代码中。</p></blockquote><p>Reference有三个组成部分:</p><ul><li>base value:属性所在的对象,值只可能是 undefined, an Object, a Boolean, a String, a Number, or an environment record 其中的一种。</li><li>referenced name:属性名</li><li>strict reference</li></ul><p><strong>例子</strong></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> foo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> fooReference </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    base:envirronmentRecord,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    name:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;foo&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    strict:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> foo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    bar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">foo.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> barReference </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    base:foo,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    propertyName:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;bar&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    strict:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><strong>获取 Reference 组成部分的方法</strong></p><ol><li>GetBase():返回base value</li><li>isPropertyReference(): base value为对象则返回true</li><li>GetValue(reference):返回对象属性真正的值</li></ol><p>...code,未完待续</p><div class="tip custom-block"><p class="custom-block-title">参考</p><p><a href="https://github.com/mqyqingfeng/Blog/issues/7" target="_blank" rel="noreferrer">JavaScript深入之从ECMAScript规范解读this</a><a href="http://yanhaijing.com/es5/#115" target="_blank" rel="noreferrer"> ECMAScript 5.1 </a></p></div>`,15),l=[t];function p(h,r,k,c,o,E){return i(),a("div",{"data-pagefind-body":!0},l)}const y=s(n,[["render",p]]);export{g as __pageData,y as default};

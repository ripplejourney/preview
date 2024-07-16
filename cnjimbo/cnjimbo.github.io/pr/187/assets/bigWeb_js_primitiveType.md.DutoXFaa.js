import{_ as i,o as s,c as a,a5 as l}from"./chunks/framework.Dp3bDdye.js";const o=JSON.parse('{"title":"原始类型有哪些","description":"","frontmatter":{"isTimeLine":true,"title":"原始类型有哪些","date":"2020-04-14T00:00:00.000Z","tags":["面试","javascript"],"categories":["面试"]},"headers":[],"relativePath":"bigWeb/js/primitiveType.md","filePath":"bigWeb/js/primitiveType.md","lastUpdated":1719297432000}'),t={name:"bigWeb/js/primitiveType.md"},e=l(`<h1 id="原始类型有哪些" tabindex="-1">原始类型有哪些 <a class="header-anchor" href="#原始类型有哪些" aria-label="Permalink to &quot;原始类型有哪些&quot;">​</a></h1><ul><li>ES5 <ul><li>string</li><li>number</li><li>boolean</li><li>null</li><li>undefined</li></ul></li><li>ES6 新增的 <ul><li>Symbol(ES2015)</li><li>Bigint(ES2020)</li></ul></li></ul><p>所以总的来说目前js的原始值类型有7种</p><p><strong>性质</strong></p><ul><li>原始类型都为值类型,没有函数可以调用</li><li>string类型不可变,无论自身调用什么方法,不会改变自身</li><li>number是浮点类型，这就导致了一个问题<code>为什么0.1+0.2!==0.3</code><ul><li>因为JavaScript使用IEEE浮点类型双精度。转换为二进制在计算但是小数无限延伸，二进制截取53位导致精度丢失。</li><li>Number.EPSILON的精度是2^-52，所以只要丢失精度小于Number.EPSILON基本可以确认相等。</li></ul></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> compareNum</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">num1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">num2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Math.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">abs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(num1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">num2)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Number.EPSILON</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">compareNum</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// true</span></span></code></pre></div>`,6),n=[e];function h(p,k,r,d,E,y){return s(),a("div",{"data-pagefind-body":!0,"data-pagefind-meta":"base64:JTdCJTIyaXNUaW1lTGluZSUyMiUzQXRydWUlMkMlMjJ0aXRsZSUyMiUzQSUyMiVFNSU4RSU5RiVFNSVBNyU4QiVFNyVCMSVCQiVFNSU5RSU4QiVFNiU5QyU4OSVFNSU5MyVBQSVFNCVCQSU5QiUyMiUyQyUyMmRhdGUlMjIlM0ExNTg2ODIyNDAwMDAwJTJDJTIydGFncyUyMiUzQSU1QiUyMiVFOSU5RCVBMiVFOCVBRiU5NSUyMiUyQyUyMmphdmFzY3JpcHQlMjIlNUQlMkMlMjJjYXRlZ29yaWVzJTIyJTNBJTVCJTIyJUU5JTlEJUEyJUU4JUFGJTk1JTIyJTVEJTdE"},n)}const c=i(t,[["render",h]]);export{o as __pageData,c as default};

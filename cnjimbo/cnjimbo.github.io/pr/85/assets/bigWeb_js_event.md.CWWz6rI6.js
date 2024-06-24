import{_ as i,o as s,c as a,a6 as n}from"./chunks/framework._8UZjAgc.js";const F=JSON.parse('{"title":"事件的触发过程是怎么样的？知道什么是事件代理嘛？","description":"","frontmatter":{"isTimeLine":true,"title":"事件的触发过程是怎么样的？知道什么是事件代理嘛？","date":"2020-04-14T00:00:00.000Z","tags":["面试","javascript"],"categories":["面试"]},"headers":[],"relativePath":"bigWeb/js/event.md","filePath":"bigWeb/js/event.md","lastUpdated":1718447701000}'),t={name:"bigWeb/js/event.md"},l=n(`<h1 id="事件的触发过程是怎么样的-知道什么是事件代理嘛" tabindex="-1">事件的触发过程是怎么样的？知道什么是事件代理嘛？ <a class="header-anchor" href="#事件的触发过程是怎么样的-知道什么是事件代理嘛" aria-label="Permalink to &quot;事件的触发过程是怎么样的？知道什么是事件代理嘛？&quot;">​</a></h1><p>事件触发有三个阶段:</p><ul><li>捕获阶段</li><li>目标阶段</li><li>冒泡阶段</li></ul><p>如果同时注册<code>冒泡</code>与<code>捕获</code>,事件触发按照注册事件的顺序执行</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;btn&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;click me!!!&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $btn </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getElementById</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;btn&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 冒泡</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        $btn.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addEventListener</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;click&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">e</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            alert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;冒泡&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 捕获</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        $btn.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addEventListener</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;click&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">e</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            alert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;捕获&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>示例会先输出冒泡</p><p><strong>事件代理?</strong></p><ul><li>如果一个节点中的子节点是动态生成的，那么子节点需要注册事件的话应该注册在父节点上</li></ul><p><strong>优点</strong></p><ul><li>节省内存,不需要给每个子节点注册一次</li><li>不需要给子节点注销事件</li></ul><div style="display:none;" data-pagefind-meta="base64:JTdCJTIyaXNUaW1lTGluZSUyMiUzQXRydWUlMkMlMjJ0aXRsZSUyMiUzQSUyMiVFNCVCQSU4QiVFNCVCQiVCNiVFNyU5QSU4NCVFOCVBNyVBNiVFNSU4RiU5MSVFOCVCRiU4NyVFNyVBOCU4QiVFNiU5OCVBRiVFNiU4MCU4RSVFNCVCOSU4OCVFNiVBMCVCNyVFNyU5QSU4NCVFRiVCQyU5RiVFNyU5RiVBNSVFOSU4MSU5MyVFNCVCQiU4MCVFNCVCOSU4OCVFNiU5OCVBRiVFNCVCQSU4QiVFNCVCQiVCNiVFNCVCQiVBMyVFNyU5MCU4NiVFNSU5OCU5QiVFRiVCQyU5RiUyMiUyQyUyMmRhdGUlMjIlM0ExNTg2ODIyNDAwMDAwJTJDJTIydGFncyUyMiUzQSU1QiUyMiVFOSU5RCVBMiVFOCVBRiU5NSUyMiUyQyUyMmphdmFzY3JpcHQlMjIlNUQlMkMlMjJjYXRlZ29yaWVzJTIyJTNBJTVCJTIyJUU5JTlEJUEyJUU4JUFGJTk1JTIyJTVEJTdE"></div>`,11),h=[l];function k(p,e,E,d,r,y){return s(),a("div",null,h)}const c=i(t,[["render",k]]);export{F as __pageData,c as default};

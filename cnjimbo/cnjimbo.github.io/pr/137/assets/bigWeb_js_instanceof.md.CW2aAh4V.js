import{_ as s,o as i,c as a,a5 as l}from"./chunks/framework.DLOA312L.js";const y=JSON.parse('{"title":"instanceof能正确判断对象的原因是什么","description":"","frontmatter":{"isTimeLine":true,"title":"instanceof能正确判断对象的原因是什么","date":"2020-04-14T00:00:00.000Z","tags":["面试","javascript"],"categories":["面试"]},"headers":[],"relativePath":"bigWeb/js/instanceof.md","filePath":"bigWeb/js/instanceof.md","lastUpdated":1719297432000}'),n={name:"bigWeb/js/instanceof.md"},t=l(`<h1 id="instanceof能正确判断对象的原因是什么" tabindex="-1">instanceof能正确判断对象的原因是什么 <a class="header-anchor" href="#instanceof能正确判断对象的原因是什么" aria-label="Permalink to &quot;instanceof能正确判断对象的原因是什么&quot;">​</a></h1><ul><li>通过原型链进行判断的</li><li>每个对象都有一个原型,instanceof会沿着原型链进行判断,直到最顶层原型为止</li><li>可以通过<code>Symbol.hasInstance</code>重定义instanceof的行为,所以instanceof的结果不一定绝对正确</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> myString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Object.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">defineProperty</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(myString, Symbol.hasInstance, {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">str</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> typeof</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> str </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;string&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    enumerable: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    configurable: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;ss&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> instanceof</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> myString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// true</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">更多参考</p><p><a href="./../../bigWeb/js/p4.html">js类型判断</a><br><a href="./../../bigWeb/js/prototype.html">原型与原型链</a></p></div><div style="display:none;" data-pagefind-meta="base64:JTdCJTIyaXNUaW1lTGluZSUyMiUzQXRydWUlMkMlMjJ0aXRsZSUyMiUzQSUyMmluc3RhbmNlb2YlRTglODMlQkQlRTYlQUQlQTMlRTclQTElQUUlRTUlODglQTQlRTYlOTYlQUQlRTUlQUYlQjklRTglQjElQTElRTclOUElODQlRTUlOEUlOUYlRTUlOUIlQTAlRTYlOTglQUYlRTQlQkIlODAlRTQlQjklODglMjIlMkMlMjJkYXRlJTIyJTNBMTU4NjgyMjQwMDAwMCUyQyUyMnRhZ3MlMjIlM0ElNUIlMjIlRTklOUQlQTIlRTglQUYlOTUlMjIlMkMlMjJqYXZhc2NyaXB0JTIyJTVEJTJDJTIyY2F0ZWdvcmllcyUyMiUzQSU1QiUyMiVFOSU5RCVBMiVFOCVBRiU5NSUyMiU1RCU3RA=="></div>`,5),e=[t];function h(p,k,r,c,E,d){return i(),a("div",null,e)}const g=s(n,[["render",h]]);export{y as __pageData,g as default};

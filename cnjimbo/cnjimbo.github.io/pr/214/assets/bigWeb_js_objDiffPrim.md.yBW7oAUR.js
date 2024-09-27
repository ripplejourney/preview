import{_ as s,o as i,c as a,a7 as t}from"./chunks/framework.DDqgOYQ0.js";const g=JSON.parse('{"title":"对象类型和原始类型的不同之处","description":"","frontmatter":{"isTimeLine":true,"title":"对象类型和原始类型的不同之处","date":"2020-04-14T00:00:00.000Z","tags":["面试","javascript"],"categories":["面试"]},"headers":[],"relativePath":"bigWeb/js/objDiffPrim.md","filePath":"bigWeb/js/objDiffPrim.md","lastUpdated":1719297432000}'),e={name:"bigWeb/js/objDiffPrim.md"},l=t(`<h1 id="对象类型和原始类型的不同之处" tabindex="-1">对象类型和原始类型的不同之处 <a class="header-anchor" href="#对象类型和原始类型的不同之处" aria-label="Permalink to &quot;对象类型和原始类型的不同之处&quot;">​</a></h1><h2 id="对象" tabindex="-1">对象 <a class="header-anchor" href="#对象" aria-label="Permalink to &quot;对象&quot;">​</a></h2><ol><li>对象类型存储的是(地址)指针:声明一个对象会在内存中开辟一块空间存放值</li></ol><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> o1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {a:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> o2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> o1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">o2.a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(o1.a) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 2</span></span></code></pre></div><ol start="2"><li>变量赋值的时候是赋值的地址:新变量修改会影响原变量</li><li>存在深浅拷贝问题</li></ol><h2 id="原始值" tabindex="-1">原始值 <a class="header-anchor" href="#原始值" aria-label="Permalink to &quot;原始值&quot;">​</a></h2><ol><li>赋值的时候拷贝的一个新的值,不会影响原来的</li></ol>`,7),n=[l];function h(p,r,o,k,d,c){return i(),a("div",{"data-pagefind-body":!0},n)}const _=s(e,[["render",h]]);export{g as __pageData,_ as default};

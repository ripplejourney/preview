import{_ as a,o as s,c as l,I as i,a7 as n,j as e,a as d,D as r}from"./chunks/framework.i96Q0NWX.js";const _=JSON.parse('{"title":"伪元素","description":"","frontmatter":{"sidebar":{"title":"伪元素","step":0},"isTimeLine":true,"title":"伪元素","date":"2020-09-05T00:00:00.000Z","tags":["大前端","CSS"],"categories":["大前端"]},"headers":[],"relativePath":"bigWeb/css/pseudo-element.md","filePath":"bigWeb/css/pseudo-element.md","lastUpdated":1670770660000}'),o={name:"bigWeb/css/pseudo-element.md"},c=n(`<h1 id="伪元素" tabindex="-1">伪元素 <a class="header-anchor" href="#伪元素" aria-label="Permalink to &quot;伪元素&quot;">​</a></h1><blockquote><p>伪元素是一个附加至选择器末的关键词，允许你对被选择元素的特定部分修改样式</p></blockquote><h2 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-label="Permalink to &quot;语法&quot;">​</a></h2><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">selector::</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">pseudo-element</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  property</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: value;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="常用的一些伪元素" tabindex="-1">常用的一些伪元素 <a class="header-anchor" href="#常用的一些伪元素" aria-label="Permalink to &quot;常用的一些伪元素&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="text-align:center;">名称</th><th style="text-align:center;">作用</th><th style="text-align:center;">场景举例</th></tr></thead><tbody><tr><td style="text-align:center;">after</td><td style="text-align:center;">作为指定元素的最后一个子元素</td><td style="text-align:center;">input框的单位</td></tr><tr><td style="text-align:center;">before</td><td style="text-align:center;">作为指定元素的第一个子元素</td><td style="text-align:center;">🔥超链接地址</td></tr><tr><td style="text-align:center;">first-line</td><td style="text-align:center;">改变段落首行文字的样式</td><td style="text-align:center;">文章首行加粗</td></tr><tr><td style="text-align:center;">first-letter</td><td style="text-align:center;">改变段落的首字母样式</td><td style="text-align:center;">每段首行大写</td></tr></tbody></table>`,6),p=e("p",null,[d("其它更多的伪元素 "),e("a",{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-elements",target:"_blank",rel:"noreferrer"},"MDN:CSS伪元素")],-1),J=e("div",{style:{display:"none"},"data-pagefind-meta":"base64:JTdCJTIyc2lkZWJhciUyMiUzQSU3QiUyMnRpdGxlJTIyJTNBJTIyJUU0JUJDJUFBJUU1JTg1JTgzJUU3JUI0JUEwJTIyJTJDJTIyc3RlcCUyMiUzQTAlN0QlMkMlMjJpc1RpbWVMaW5lJTIyJTNBdHJ1ZSUyQyUyMnRpdGxlJTIyJTNBJTIyJUU0JUJDJUFBJUU1JTg1JTgzJUU3JUI0JUEwJTIyJTJDJTIyZGF0ZSUyMiUzQTE1OTkyNjQwMDAwMDAlMkMlMjJ0YWdzJTIyJTNBJTVCJTIyJUU1JUE0JUE3JUU1JTg5JThEJUU3JUFCJUFGJTIyJTJDJTIyQ1NTJTIyJTVEJTJDJTIyY2F0ZWdvcmllcyUyMiUzQSU1QiUyMiVFNSVBNCVBNyVFNSU4OSU4RCVFNyVBQiVBRiUyMiU1RCU3RA=="},null,-1);function h(y,U,T,g,k,u){const t=r("codepen");return s(),l("div",null,[c,i(t,{title:"fake-element",src:"https://codepen.io/sugarInSoup/embed/poydMpe?height=265&theme-id=dark&default-tab=css,result"}),p,J])}const m=a(o,[["render",h]]);export{_ as __pageData,m as default};

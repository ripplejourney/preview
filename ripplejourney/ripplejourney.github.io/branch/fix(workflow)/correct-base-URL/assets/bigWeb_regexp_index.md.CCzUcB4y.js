import{_ as e,o as n,c as l,a4 as a}from"./chunks/framework.BXol-F5r.js";const h=JSON.parse('{"title":"正则表达式","description":"","frontmatter":{"hidden":true,"head":[["script",{},"!function(p){\\"use strict\\";!function(t){var s=window,e=document,i=p,c=\\"\\".concat(\\"https:\\"===e.location.protocol?\\"https://\\":\\"http://\\",\\"sdk.51.la/js-sdk-pro.min.js\\"),n=e.createElement(\\"script\\"),r=e.getElementsByTagName(\\"script\\")[0];n.type=\\"text/javascript\\",n.setAttribute(\\"charset\\",\\"UTF-8\\"),n.async=!0,n.src=c,n.id=\\"LA_COLLECT\\",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({\\"id\\":\\"Jgmg5avjAUvoyePS\\",\\"ck\\":\\"Jgmg5avjAUvoyePS\\",\\"hashMode\\":true});"]]},"headers":[],"relativePath":"bigWeb/regexp/index.md","filePath":"bigWeb/regexp/index.md","lastUpdated":1719297432000}'),d={name:"bigWeb/regexp/index.md"};function r(s,t,i,c,g,x){return n(),l("div",{"data-pagefind-body":!0},t[0]||(t[0]=[a('<h1 id="正则表达式" tabindex="-1">正则表达式 <a class="header-anchor" href="#正则表达式" aria-label="Permalink to &quot;正则表达式&quot;">​</a></h1><p>记录业务开发中所遇到的一些问题及解法</p><h2 id="常用关键字" tabindex="-1">常用关键字 <a class="header-anchor" href="#常用关键字" aria-label="Permalink to &quot;常用关键字&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="text-align:center;">符号</th><th style="text-align:center;">作用</th><th style="text-align:center;">用法示例</th><th style="text-align:center;">解释</th></tr></thead><tbody><tr><td style="text-align:center;">|</td><td style="text-align:center;">或者(OR)</td><td style="text-align:center;">/yes|no/</td><td style="text-align:center;">匹配yes或者no</td></tr><tr><td style="text-align:center;">i</td><td style="text-align:center;">忽略字母大小写</td><td style="text-align:center;">/h/i</td><td style="text-align:center;">匹配h或者H</td></tr><tr><td style="text-align:center;">g</td><td style="text-align:center;">查询整个字符串</td><td style="text-align:center;">/ab/gi</td><td style="text-align:center;">匹配所有的ab不区分大小写</td></tr><tr><td style="text-align:center;">.</td><td style="text-align:center;">匹配任意字符</td><td style="text-align:center;">/.un/</td><td style="text-align:center;">匹配run,gun,fun等</td></tr><tr><td style="text-align:center;">[]</td><td style="text-align:center;">匹配中括号中的一个字符</td><td style="text-align:center;">/a[sdf]b/</td><td style="text-align:center;">匹配asb,adb,afb</td></tr><tr><td style="text-align:center;">-</td><td style="text-align:center;">[]中限定一个范围</td><td style="text-align:center;">/[a-z]/</td><td style="text-align:center;">匹配任意小写字母</td></tr><tr><td style="text-align:center;">[^]</td><td style="text-align:center;">不匹配指定的内容</td><td style="text-align:center;">/[^0-9]ab/</td><td style="text-align:center;">不包括数字母开头的*ab</td></tr><tr><td style="text-align:center;">+</td><td style="text-align:center;">匹配1个或多个</td><td style="text-align:center;">/a+/</td><td style="text-align:center;">匹配a,aa,aaa等</td></tr><tr><td style="text-align:center;">*</td><td style="text-align:center;">匹配0个或多个</td><td style="text-align:center;">/ab*/</td><td style="text-align:center;">匹配a,ab,abbb等</td></tr><tr><td style="text-align:center;">?</td><td style="text-align:center;">匹配0个或1个</td><td style="text-align:center;">/ab?/</td><td style="text-align:center;">匹配a,ab</td></tr><tr><td style="text-align:center;">.*?</td><td style="text-align:center;">惰性匹配(非贪婪)</td><td style="text-align:center;">/&lt;.*?&gt;/</td><td style="text-align:center;">匹配&lt;xxx&gt;或者&lt;/xxx&gt;等</td></tr><tr><td style="text-align:center;">.*</td><td style="text-align:center;">匹配(贪婪)</td><td style="text-align:center;">/&lt;.*&gt;/</td><td style="text-align:center;">匹配&lt;xx&gt;absada&lt;/xx&gt;</td></tr><tr><td style="text-align:center;">^</td><td style="text-align:center;">匹配开头</td><td style="text-align:center;">/^ab/</td><td style="text-align:center;">匹配开头是ab的字符串:abc</td></tr><tr><td style="text-align:center;">$</td><td style="text-align:center;">匹配结尾</td><td style="text-align:center;">/ab$/</td><td style="text-align:center;">匹配结尾是ab的字符串:dab</td></tr><tr><td style="text-align:center;">\\w</td><td style="text-align:center;">等价于[a-zA-Z0-9_]</td><td style="text-align:center;">/\\w/</td><td style="text-align:center;">匹配数字,字母,下划线</td></tr><tr><td style="text-align:center;">\\W</td><td style="text-align:center;">等价于[^a-zA-Z0-9_]</td><td style="text-align:center;">/\\W/</td><td style="text-align:center;">匹配非数字,字母,下划线</td></tr><tr><td style="text-align:center;">\\d</td><td style="text-align:center;">等价于[0-9]</td><td style="text-align:center;">/\\d/</td><td style="text-align:center;">匹配数字</td></tr><tr><td style="text-align:center;">\\D</td><td style="text-align:center;">等价于[^0-9]</td><td style="text-align:center;">/\\D/</td><td style="text-align:center;">匹配非数字</td></tr><tr><td style="text-align:center;">\\s</td><td style="text-align:center;">等价于[ \\r\\t\\f\\n\\v]</td><td style="text-align:center;">/\\s/</td><td style="text-align:center;">匹配空格,换行,tab等</td></tr><tr><td style="text-align:center;">\\S</td><td style="text-align:center;">等价于[^ \\r\\t\\f\\n\\v]</td><td style="text-align:center;">/\\S/</td><td style="text-align:center;">匹配非空格,换行,tab等</td></tr><tr><td style="text-align:center;">{x,y}</td><td style="text-align:center;">限定个数</td><td style="text-align:center;">/a{1,2}/</td><td style="text-align:center;">匹配1-2个a</td></tr><tr><td style="text-align:center;">{x,}</td><td style="text-align:center;">限定个数</td><td style="text-align:center;">/a{1,}/</td><td style="text-align:center;">匹配1-n个a</td></tr><tr><td style="text-align:center;">{x}</td><td style="text-align:center;">限定个数</td><td style="text-align:center;">/a{1}/</td><td style="text-align:center;">匹配1个a</td></tr><tr><td style="text-align:center;">(?:pattern)</td><td style="text-align:center;">匹配pattern但不获取匹配结果</td><td style="text-align:center;">/a(?:b|c)/</td><td style="text-align:center;">等价于ab|ac</td></tr><tr><td style="text-align:center;">(?=pattern)</td><td style="text-align:center;">正向肯定预查</td><td style="text-align:center;">/a(?=b|c)/</td><td style="text-align:center;">匹配ab,ac中的a</td></tr><tr><td style="text-align:center;">(?!pattern)</td><td style="text-align:center;">正向否定预查</td><td style="text-align:center;">/a(!=b|c)/</td><td style="text-align:center;">匹配ad中的a</td></tr><tr><td style="text-align:center;">(?&lt;=pattern)</td><td style="text-align:center;">正向肯定预查</td><td style="text-align:center;">/(?&lt;=a|b&gt;)c/</td><td style="text-align:center;">匹配ac,bc中的c</td></tr><tr><td style="text-align:center;">(?&lt;!pattern)</td><td style="text-align:center;">反向否定预查</td><td style="text-align:center;">/(?&lt;!a|b&gt;)c/</td><td style="text-align:center;">匹配cc,dc中的c</td></tr></tbody></table><p><strong>综合示例1</strong></p><ul><li>用户名由数字和字母组成</li><li>不能以数字开头,但可以以数字结尾</li><li>字母可以大写也可以小写</li><li>用户名必须至少两个字符长,两个字符的用户名只能使用字母作为字符</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">^</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">[a-zA-Z]</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">[a-zA-Z]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+|</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\d</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">{2,}</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">)</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\d</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span></span></code></pre></div><h2 id="目录" tabindex="-1">目录 <a class="header-anchor" href="#目录" aria-label="Permalink to &quot;目录&quot;">​</a></h2><ul><li><a href="./p1.html">提取样式表中url()中的内容</a></li></ul>',9)]))}const p=e(d,[["render",r]]);export{h as __pageData,p as default};

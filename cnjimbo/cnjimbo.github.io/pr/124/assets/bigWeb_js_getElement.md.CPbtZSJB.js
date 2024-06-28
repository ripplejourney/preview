import{_ as e,o as a,c as t,a5 as l}from"./chunks/framework.DGbmirZy.js";const o="/preview/cnjimbo/cnjimbo.github.io/pr/124/assets/MTU5OTM2MTM2NDk5NA__599361364994.AvbXKqFK.png?s1=https:/img.cdn.sugarat.top/mdImg/MTU5OTM2MTM2NDk5NA==599361364994",b=JSON.parse('{"title":"获取dom元素的几种方式","description":"","frontmatter":{"sidebar":{"title":"获取dom元素的方式","step":28},"isTimeLine":true,"title":"获取dom元素的几种方式","date":"2020-09-06T00:00:00.000Z","tags":["大前端","javascript"],"categories":["大前端"]},"headers":[],"relativePath":"bigWeb/js/getElement.md","filePath":"bigWeb/js/getElement.md","lastUpdated":1719501177000}'),i={name:"bigWeb/js/getElement.md"},d=l('<h1 id="获取dom元素的几种方式" tabindex="-1">获取dom元素的几种方式 <a class="header-anchor" href="#获取dom元素的几种方式" aria-label="Permalink to &quot;获取dom元素的几种方式&quot;">​</a></h1><ul><li>按使用频率排序</li><li>低版本浏览器 === &lt; IE8</li></ul><h2 id="_1-document-getelementbyid" tabindex="-1">1.document.getElementById <a class="header-anchor" href="#_1-document-getelementbyid" aria-label="Permalink to &quot;1.document.getElementById&quot;">​</a></h2><h3 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h3><p>通过元素的<code>id</code>获取</p><ul><li>存在 -- 则返回这个元素</li><li>不存在 -- 返回<code>null</code></li></ul><h3 id="特点" tabindex="-1">特点 <a class="header-anchor" href="#特点" aria-label="Permalink to &quot;特点&quot;">​</a></h3><ul><li>如果文档中存在多个相同的id，则获取第一个</li><li>在一些低版本浏览器会把元素的name当做id获取</li><li>上下文只能是<code>document</code></li></ul><h2 id="_2-document-getelementsbyclassname" tabindex="-1">2.document.getElementsByClassName <a class="header-anchor" href="#_2-document-getelementsbyclassname" aria-label="Permalink to &quot;2.document.getElementsByClassName&quot;">​</a></h2><h3 id="简介-1" tabindex="-1">简介 <a class="header-anchor" href="#简介-1" aria-label="Permalink to &quot;简介&quot;">​</a></h3><p>通过元素的类名获取</p><ul><li>存在 -- 返回由目标元素组成的<code>HTMLCollectio</code></li><li>不存在 -- 返回一个空的<code>HTMLCollectio</code><ul><li><code>HTMLCollectio</code>是类数组</li></ul></li></ul><h3 id="特点-1" tabindex="-1">特点 <a class="header-anchor" href="#特点-1" aria-label="Permalink to &quot;特点&quot;">​</a></h3><ul><li>获取的结果是一个<code>类数组</code></li><li>上下文可以是<code>任意元素</code>(document或其它dom元素)</li><li>在一些低版本浏览器不支持</li></ul><h2 id="_3-document-queryselector" tabindex="-1">3.document.querySelector <a class="header-anchor" href="#_3-document-queryselector" aria-label="Permalink to &quot;3.document.querySelector&quot;">​</a></h2><h3 id="简介-2" tabindex="-1">简介 <a class="header-anchor" href="#简介-2" aria-label="Permalink to &quot;简介&quot;">​</a></h3><p>通过选择器获取<code>一个元素</code></p><h3 id="特点-2" tabindex="-1">特点 <a class="header-anchor" href="#特点-2" aria-label="Permalink to &quot;特点&quot;">​</a></h3><ul><li>上下文可以是<code>任意元素</code>(document或其它dom元素)</li><li>低版本浏览器不兼容</li><li>返回值是类数组</li></ul><h2 id="_4-document-queryselectorall" tabindex="-1">4.document.querySelectorAll <a class="header-anchor" href="#_4-document-queryselectorall" aria-label="Permalink to &quot;4.document.querySelectorAll&quot;">​</a></h2><h3 id="简介-3" tabindex="-1">简介 <a class="header-anchor" href="#简介-3" aria-label="Permalink to &quot;简介&quot;">​</a></h3><p>通过选择器获取<code>一组元素</code></p><h3 id="特点-3" tabindex="-1">特点 <a class="header-anchor" href="#特点-3" aria-label="Permalink to &quot;特点&quot;">​</a></h3><ul><li>同querySelector</li></ul><h2 id="_5-document-getelementsbytagname" tabindex="-1">5.document.getElementsByTagName <a class="header-anchor" href="#_5-document-getelementsbytagname" aria-label="Permalink to &quot;5.document.getElementsByTagName&quot;">​</a></h2><h3 id="简介-4" tabindex="-1">简介 <a class="header-anchor" href="#简介-4" aria-label="Permalink to &quot;简介&quot;">​</a></h3><p>通过标签名获取</p><h3 id="特点-4" tabindex="-1">特点 <a class="header-anchor" href="#特点-4" aria-label="Permalink to &quot;特点&quot;">​</a></h3><ul><li>上下文可以是<code>任意元素</code>(document或其它dom元素)</li><li>返回值是类数组</li><li>参数是标签名，不区分大小写</li></ul><h2 id="_6-document-getelementsbyname" tabindex="-1">6.document.getElementsByName <a class="header-anchor" href="#_6-document-getelementsbyname" aria-label="Permalink to &quot;6.document.getElementsByName&quot;">​</a></h2><h3 id="简介-5" tabindex="-1">简介 <a class="header-anchor" href="#简介-5" aria-label="Permalink to &quot;简介&quot;">​</a></h3><p>通过元素的<code>name</code>属性获取</p><h3 id="特点-5" tabindex="-1">特点 <a class="header-anchor" href="#特点-5" aria-label="Permalink to &quot;特点&quot;">​</a></h3><ul><li>上下文只能是<code>document</code></li><li>返回值是类数组</li><li>在IE浏览器中只能获取到表单元素，当然我们一般也只用它获取表单元素，从ie10开始可以不只是表单元素</li></ul><h2 id="_7-document-body" tabindex="-1">7.document.body <a class="header-anchor" href="#_7-document-body" aria-label="Permalink to &quot;7.document.body&quot;">​</a></h2><p>获取<code>body</code>这个元素</p><h2 id="_8-document-documentelement" tabindex="-1">8.document.documentElement <a class="header-anchor" href="#_8-document-documentelement" aria-label="Permalink to &quot;8.document.documentElement&quot;">​</a></h2><p>获取<code>html</code>这个元素</p><h2 id="_9-document-getelementsbytagnamens" tabindex="-1">9.document.getElementsByTagNameNS <a class="header-anchor" href="#_9-document-getelementsbytagnamens" aria-label="Permalink to &quot;9.document.getElementsByTagNameNS&quot;">​</a></h2><p>返回带有指定名称和命名空间的所有元素的 NodeList</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">nodeList </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getElementsByTagNameNS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(namespace, name)</span></span></code></pre></div><p>说实话，这个API目前在我的学习/工作中还没找到落地之处😢😢</p><h2 id="元素之间的继承关系" tabindex="-1">元素之间的继承关系 <a class="header-anchor" href="#元素之间的继承关系" aria-label="Permalink to &quot;元素之间的继承关系&quot;">​</a></h2><p><img src="'+o+'" alt="图片" loading="lazy"></p><p>每个元素都有对应的类，因此每个类都提供了一些方法来操作元素本身</p><p>通过类之间的继承关系，丰富元素的可操作性</p><p>由于<code>getElementById</code>与<code>getElementsByName</code>方法是在<code>Document</code>类上，于是普通元素的实例对象是没有这两方法的，所以这两方法的上下文只能是<code>document</code></p><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><ol><li>上下文只能是<code>document</code>的方法 <ul><li>getElementById</li><li>getElementsByName</li></ul></li><li>上下文为<code>任意元素</code>的方法 <ul><li>getElementsByClassName</li><li>getElementById</li><li>querySelectorAll</li><li>getElementsByTagName</li><li>getElementsByTagNameNS</li></ul></li><li>查询效率最高的是 <ul><li>getElementById：由于id在正常情况下是独一无二的，所以查询是很高效的</li></ul></li><li>返回值 <ul><li>只有<code>getElementById</code>与<code>getElementById</code>返回对象本身</li><li>其余查询方法均返回一个类数组<code>HTMLCollectio</code></li></ul></li></ol><div class="tip custom-block"><p class="custom-block-title">参考</p><p><a href="https://www.jianshu.com/p/6fefda57b51f" target="_blank" rel="noreferrer">简书-JS获取HTML DOM元素的8种方法</a></p><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Document/getElementsByTagNameNS" target="_blank" rel="noreferrer">MDN-Document.getElementsByTagNameNS</a></p><p><a href="https://blog.csdn.net/ppwwp/article/details/88169145" target="_blank" rel="noreferrer">CSDN-HTML元素之间的继承关系</a></p></div><div style="display:none;" data-pagefind-meta="base64:JTdCJTIyc2lkZWJhciUyMiUzQSU3QiUyMnRpdGxlJTIyJTNBJTIyJUU4JThFJUI3JUU1JThGJTk2ZG9tJUU1JTg1JTgzJUU3JUI0JUEwJUU3JTlBJTg0JUU2JTk2JUI5JUU1JUJDJThGJTIyJTJDJTIyc3RlcCUyMiUzQTI4JTdEJTJDJTIyaXNUaW1lTGluZSUyMiUzQXRydWUlMkMlMjJ0aXRsZSUyMiUzQSUyMiVFOCU4RSVCNyVFNSU4RiU5NmRvbSVFNSU4NSU4MyVFNyVCNCVBMCVFNyU5QSU4NCVFNSU4NyVBMCVFNyVBNyU4RCVFNiU5NiVCOSVFNSVCQyU4RiUyMiUyQyUyMmRhdGUlMjIlM0ExNTk5MzUwNDAwMDAwJTJDJTIydGFncyUyMiUzQSU1QiUyMiVFNSVBNCVBNyVFNSU4OSU4RCVFNyVBQiVBRiUyMiUyQyUyMmphdmFzY3JpcHQlMjIlNUQlMkMlMjJjYXRlZ29yaWVzJTIyJTNBJTVCJTIyJUU1JUE0JUE3JUU1JTg5JThEJUU3JUFCJUFGJTIyJTVEJTdE"></div>',51),n=[d];function c(r,s,m,h,u,y){return a(),t("div",null,n)}const g=e(i,[["render",c]]);export{b as __pageData,g as default};

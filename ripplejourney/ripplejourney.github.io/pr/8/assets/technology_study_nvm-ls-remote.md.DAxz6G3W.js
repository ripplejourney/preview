import{_ as a,o as i,c as e,aa as t}from"./chunks/framework.CWE6ArTt.js";const k=JSON.parse('{"title":"nvm ls-remote 只有iojs列表","description":"","frontmatter":{"tag":["技术笔记"],"head":[["script",{},"!function(p){\\"use strict\\";!function(t){var s=window,e=document,i=p,c=\\"\\".concat(\\"https:\\"===e.location.protocol?\\"https://\\":\\"http://\\",\\"sdk.51.la/js-sdk-pro.min.js\\"),n=e.createElement(\\"script\\"),r=e.getElementsByTagName(\\"script\\")[0];n.type=\\"text/javascript\\",n.setAttribute(\\"charset\\",\\"UTF-8\\"),n.async=!0,n.src=c,n.id=\\"LA_COLLECT\\",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({\\"id\\":\\"Jgmg5avjAUvoyePS\\",\\"ck\\":\\"Jgmg5avjAUvoyePS\\",\\"hashMode\\":true});"]]},"headers":[],"relativePath":"technology/study/nvm-ls-remote.md","filePath":"technology/study/nvm-ls-remote.md","lastUpdated":1719297432000}'),n={name:"technology/study/nvm-ls-remote.md"};function p(h,s,o,l,r,d){return i(),e("div",{"data-pagefind-body":!0},s[0]||(s[0]=[t(`<h1 id="nvm-ls-remote-只有iojs列表" tabindex="-1">nvm ls-remote 只有iojs列表 <a class="header-anchor" href="#nvm-ls-remote-只有iojs列表" aria-label="Permalink to &quot;nvm ls-remote 只有iojs列表&quot;">​</a></h1><p>nvm 镜像地址的问题，修改对应环境变量<code>NVM_NODEJS_ORG_MIRROR</code>即可</p><p>可以使用 淘宝源(<code>https://npmmirror.com/mirrors/node/</code>)</p><p>查看当前设置的值</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $NVM_NODEJS_ORG_MIRROR</span></span></code></pre></div><h2 id="运行时修改" tabindex="-1">运行时修改 <a class="header-anchor" href="#运行时修改" aria-label="Permalink to &quot;运行时修改&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">NVM_NODEJS_ORG_MIRROR</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">https://npmmirror.com/mirrors/node</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> nvm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ls-remote</span></span></code></pre></div><h2 id="临时修改环境变量" tabindex="-1">临时修改环境变量 <a class="header-anchor" href="#临时修改环境变量" aria-label="Permalink to &quot;临时修改环境变量&quot;">​</a></h2><p>①</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> NVM_NODEJS_ORG_MIRROR</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">https://npmmirror.com/mirrors/node</span></span></code></pre></div><p>②</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nvm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ls-remote</span></span></code></pre></div><h2 id="长期修改环境变量" tabindex="-1">长期修改环境变量 <a class="header-anchor" href="#长期修改环境变量" aria-label="Permalink to &quot;长期修改环境变量&quot;">​</a></h2><p>在 <code>~/.zshrc</code> 添加环境变量（使用 bash 可以，修改 .bashrc）</p><p>① 使用 vi 修改</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.zshrc</span></span></code></pre></div><p>② 追加如下值</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> NVM_NODEJS_ORG_MIRROR</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">https://npmmirror.com/mirrors/node</span></span></code></pre></div><p>③ vi保存</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ESC</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:wq</span></span></code></pre></div><p>④ 重启终端</p>`,21)]))}const g=a(n,[["render",p]]);export{k as __pageData,g as default};

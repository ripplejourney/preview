import{_ as e,o as a,c as o,a4 as n}from"./chunks/framework.CtKOXDDb.js";const u=JSON.parse('{"title":"pnpm install 在github actions中运行的问题","description":"","frontmatter":{"title":"pnpm install 在github actions中运行的问题","date":"2024-06-18T00:00:00.000Z","tags":["技术笔记","技术教程","github","actions","pnpm"],"categories":["pnpm","技术笔记"],"source":null,"author":"jimbo","head":[["script",{},"!function(p){\\"use strict\\";!function(t){var s=window,e=document,i=p,c=\\"\\".concat(\\"https:\\"===e.location.protocol?\\"https://\\":\\"http://\\",\\"sdk.51.la/js-sdk-pro.min.js\\"),n=e.createElement(\\"script\\"),r=e.getElementsByTagName(\\"script\\")[0];n.type=\\"text/javascript\\",n.setAttribute(\\"charset\\",\\"UTF-8\\"),n.async=!0,n.src=c,n.id=\\"LA_COLLECT\\",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({\\"id\\":\\"Jgmg5avjAUvoyePS\\",\\"ck\\":\\"Jgmg5avjAUvoyePS\\",\\"hashMode\\":true});"]]},"headers":[],"relativePath":"technology/learn/pnpm-issue-githubactions.md","filePath":"technology/learn/pnpm-issue-githubactions.md","lastUpdated":1719297432000}'),i={name:"technology/learn/pnpm-issue-githubactions.md"};function s(c,t,p,r,l,d){return a(),o("div",{"data-pagefind-body":!0},t[0]||(t[0]=[n('<h1 id="pnpm-install-在github-actions中运行的问题" tabindex="-1">pnpm install 在github actions中运行的问题 <a class="header-anchor" href="#pnpm-install-在github-actions中运行的问题" aria-label="Permalink to &quot;pnpm install 在github actions中运行的问题&quot;">​</a></h1><blockquote><h2 id="excerpt" tabindex="-1">Excerpt <a class="header-anchor" href="#excerpt" aria-label="Permalink to &quot;Excerpt&quot;">​</a></h2><p>:octocat: pnpm install在CI环境中 <code>GitHub Action</code> 的默认参数，用于为拉取请求（PR）和分支创建GitHub Pages预览 —— EndBug/pages-preview</p></blockquote><h2 id="table-of-contents" tabindex="-1">Table of contents <a class="header-anchor" href="#table-of-contents" aria-label="Permalink to &quot;Table of contents&quot;">​</a></h2><ul><li><a href="#what-does-it-do">What does it do?</a></li><li><a href="#setup">Setup</a></li><li><a href="#inputs">Inputs</a></li></ul><h2 id="what-does-it-do" tabindex="-1">What does it do? <a class="header-anchor" href="#what-does-it-do" aria-label="Permalink to &quot;What does it do?&quot;">​</a></h2><p>pnpm 在workspace monorepo的环境下，一定要使用 <code>pnpm install -wr</code> 来确保工作空间内所有项目的package.json都递归进行了安装，否则仅仅会安装根目录下的package.json</p><p>pnpm 在个人开发时 pnpm install 是没有默认参数的，但在 github actions中运行时，由于是CI环境下运行会带上不同平常给的默认行为，比如 <code>pnpm install -wr</code> 会与 <code>pnpm install -wr --frozen-lockfile</code> 等同，如果希望全新安装，则需要指定参数 <code>pnpm install -wr --ignore-scripts --no-frozen-lockfile</code>. <code>--ignore-scripts</code>参数为忽略安装本地脚本，加快安装速度</p>',7)]))}const m=e(i,[["render",s]]);export{u as __pageData,m as default};

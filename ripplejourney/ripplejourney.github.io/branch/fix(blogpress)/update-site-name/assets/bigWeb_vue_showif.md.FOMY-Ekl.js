import{_ as t,o as i,c as a,a4 as s}from"./chunks/framework.BNA0ldxb.js";const f=JSON.parse('{"title":"v-show与v-if","description":"","frontmatter":{"sidebar":{"title":"v-show 与 v-if","step":8},"isTimeLine":true,"title":"v-show与v-if","date":"2020-04-14T00:00:00.000Z","tags":["大前端","vue"],"categories":["大前端"],"head":[["script",{},"!function(p){\\"use strict\\";!function(t){var s=window,e=document,i=p,c=\\"\\".concat(\\"https:\\"===e.location.protocol?\\"https://\\":\\"http://\\",\\"sdk.51.la/js-sdk-pro.min.js\\"),n=e.createElement(\\"script\\"),r=e.getElementsByTagName(\\"script\\")[0];n.type=\\"text/javascript\\",n.setAttribute(\\"charset\\",\\"UTF-8\\"),n.async=!0,n.src=c,n.id=\\"LA_COLLECT\\",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({\\"id\\":\\"Jgmg5avjAUvoyePS\\",\\"ck\\":\\"Jgmg5avjAUvoyePS\\",\\"hashMode\\":true});"]]},"headers":[],"relativePath":"bigWeb/vue/showif.md","filePath":"bigWeb/vue/showif.md","lastUpdated":1719297432000}'),o={name:"bigWeb/vue/showif.md"};function r(l,e,n,c,d,h){return i(),a("div",{"data-pagefind-body":!0},e[0]||(e[0]=[s('<h1 id="v-show-与-v-if" tabindex="-1">v-show 与 v-if <a class="header-anchor" href="#v-show-与-v-if" aria-label="Permalink to &quot;v-show 与 v-if&quot;">​</a></h1><h2 id="v-show" tabindex="-1">v-show <a class="header-anchor" href="#v-show" aria-label="Permalink to &quot;v-show&quot;">​</a></h2><ul><li><code>v-show</code> 只是在 display: none 和 display: block|inline-block|flex ... 之间切换。无论初始条件是什么都会被渲染出来</li><li>初始渲染时有更高的开销 <ul><li>切换开销很小，适合于频繁切换的场景</li></ul></li></ul><h2 id="v-if" tabindex="-1">v-if <a class="header-anchor" href="#v-if" aria-label="Permalink to &quot;v-if&quot;">​</a></h2><ul><li>属性初始为 false 时，组件就不会被渲染</li><li>条件为 true时渲染出来，并且切换条件时会触发销毁/挂载组件 <ul><li>切换时开销更高</li><li>适合不经常切换的场景。</li></ul></li></ul>',5)]))}const u=t(o,[["render",r]]);export{f as __pageData,u as default};

import{_ as e,c as i,o,aa as a}from"./chunks/framework.CQV5JyNC.js";const f=JSON.parse('{"title":"BFC","description":"","frontmatter":{"sidebar":{"title":"BFC","step":9},"isTimeLine":true,"title":"BFC","date":"2020-04-14T00:00:00.000Z","tags":["大前端","CSS"],"categories":["大前端"],"head":[["script",{},"!function(p){\\"use strict\\";!function(t){var s=window,e=document,i=p,c=\\"\\".concat(\\"https:\\"===e.location.protocol?\\"https://\\":\\"http://\\",\\"sdk.51.la/js-sdk-pro.min.js\\"),n=e.createElement(\\"script\\"),r=e.getElementsByTagName(\\"script\\")[0];n.type=\\"text/javascript\\",n.setAttribute(\\"charset\\",\\"UTF-8\\"),n.async=!0,n.src=c,n.id=\\"LA_COLLECT\\",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({\\"id\\":\\"Jgmg5avjAUvoyePS\\",\\"ck\\":\\"Jgmg5avjAUvoyePS\\",\\"hashMode\\":true});"]]},"headers":[],"relativePath":"bigWeb/css/bfc.md","filePath":"bigWeb/css/bfc.md","lastUpdated":1719297432000}'),s={name:"bigWeb/css/bfc.md"};function l(n,t,r,c,d,p){return o(),i("div",{"data-pagefind-body":!0},t[0]||(t[0]=[a('<h1 id="bfc" tabindex="-1">BFC <a class="header-anchor" href="#bfc" aria-label="Permalink to &quot;BFC&quot;">​</a></h1><p>BFC规范(块级格式化上下文：block formatting context)</p><p>规定了内部的Block Box如何布局</p><ul><li>内部的Box会垂直依次序排列</li><li>两个盒子的垂直距离由 margin 属性决定</li><li>属于同一个BFC的两个相邻Box的margin会发生重叠(取较大者的margin)</li><li>BFC内部,每个元素的margin box的左边，与包含块border box的左边相接触(每个盒子的左外边缘接触内部盒子的左边缘)</li><li>BFC的区域不会与float box重叠</li><li>计算BFC的高度时，浮动元素也会参与计算</li><li>隔离的独立容器，容器里面的子元素不会影响到外面的元素</li></ul><p><strong>触发BFC条件</strong></p><ul><li>根元素:html</li><li>float值不为<code>none</code></li><li>overflow<strong>不为</strong><code>visible</code></li><li>display的值<strong>为</strong>inline-block、table-cell、table-caption</li><li>position的值为absolute或fixed</li></ul>',6)]))}const g=e(s,[["render",l]]);export{f as __pageData,g as default};

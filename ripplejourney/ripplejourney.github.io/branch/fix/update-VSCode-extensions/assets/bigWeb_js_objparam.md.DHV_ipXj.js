import{_ as e,o as a,c as i,a4 as s}from"./chunks/framework.CeLF5I0u.js";const _=JSON.parse('{"title":"函数参数是对象会发生什么问题","description":"","frontmatter":{"isTimeLine":true,"title":"函数参数是对象会发生什么问题","date":"2020-04-14T00:00:00.000Z","tags":["面试","javascript"],"categories":["面试"],"head":[["script",{},"!function(p){\\"use strict\\";!function(t){var s=window,e=document,i=p,c=\\"\\".concat(\\"https:\\"===e.location.protocol?\\"https://\\":\\"http://\\",\\"sdk.51.la/js-sdk-pro.min.js\\"),n=e.createElement(\\"script\\"),r=e.getElementsByTagName(\\"script\\")[0];n.type=\\"text/javascript\\",n.setAttribute(\\"charset\\",\\"UTF-8\\"),n.async=!0,n.src=c,n.id=\\"LA_COLLECT\\",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({\\"id\\":\\"Jgmg5avjAUvoyePS\\",\\"ck\\":\\"Jgmg5avjAUvoyePS\\",\\"hashMode\\":true});"]]},"headers":[],"relativePath":"bigWeb/js/objparam.md","filePath":"bigWeb/js/objparam.md","lastUpdated":1719297432000}'),o={name:"bigWeb/js/objparam.md"};function r(n,t,l,c,p,d){return a(),i("div",{"data-pagefind-body":!0},t[0]||(t[0]=[s('<h1 id="函数参数是对象会发生什么问题" tabindex="-1">函数参数是对象会发生什么问题 <a class="header-anchor" href="#函数参数是对象会发生什么问题" aria-label="Permalink to &quot;函数参数是对象会发生什么问题&quot;">​</a></h1><ol><li>函数传参是传递对象指针副本</li><li>在函数内部改变对象属性会影响原来的值</li></ol><blockquote><p>ECMAScript中所有函数的参数都是按值传递的。</p></blockquote><ul><li>值传递:从原来的value上拷贝了一份新的_value</li><li>引用传递:传递对象的引用</li><li>共享传递:传递对象的引用的副本</li></ul><p><strong>总结</strong></p><ul><li>基本类型按值传递</li><li>引用类型按共享传递</li><li>拷贝副本也是一种值的拷贝</li></ul>',6)]))}const m=e(o,[["render",r]]);export{_ as __pageData,m as default};

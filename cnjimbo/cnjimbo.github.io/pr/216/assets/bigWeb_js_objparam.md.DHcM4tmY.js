import{_ as a,o as e,c as t,a7 as i}from"./chunks/framework.kR6ics5Q.js";const m=JSON.parse('{"title":"函数参数是对象会发生什么问题","description":"","frontmatter":{"isTimeLine":true,"title":"函数参数是对象会发生什么问题","date":"2020-04-14T00:00:00.000Z","tags":["面试","javascript"],"categories":["面试"]},"headers":[],"relativePath":"bigWeb/js/objparam.md","filePath":"bigWeb/js/objparam.md","lastUpdated":1719297432000}'),o={name:"bigWeb/js/objparam.md"},l=i('<h1 id="函数参数是对象会发生什么问题" tabindex="-1">函数参数是对象会发生什么问题 <a class="header-anchor" href="#函数参数是对象会发生什么问题" aria-label="Permalink to &quot;函数参数是对象会发生什么问题&quot;">​</a></h1><ol><li>函数传参是传递对象指针副本</li><li>在函数内部改变对象属性会影响原来的值</li></ol><blockquote><p>ECMAScript中所有函数的参数都是按值传递的。</p></blockquote><ul><li>值传递:从原来的value上拷贝了一份新的_value</li><li>引用传递:传递对象的引用</li><li>共享传递:传递对象的引用的副本</li></ul><p><strong>总结</strong></p><ul><li>基本类型按值传递</li><li>引用类型按共享传递</li><li>拷贝副本也是一种值的拷贝</li></ul>',6),r=[l];function s(_,c,n,p,d,u){return e(),t("div",{"data-pagefind-body":!0},r)}const h=a(o,[["render",s]]);export{m as __pageData,h as default};

import{_ as i,o as t,c as e,a5 as a}from"./chunks/framework.2loa9NHB.js";const C=JSON.parse('{"title":"什么是提升？什么是暂时性死区？var、let及const区别？","description":"","frontmatter":{"isTimeLine":true,"title":"什么是提升？什么是暂时性死区？var、let及const区别？","date":"2020-03-10T00:00:00.000Z","tags":["面试","其它"],"categories":["面试"]},"headers":[],"relativePath":"interview/other/promote.md","filePath":"interview/other/promote.md","lastUpdated":1719297432000}'),l={name:"interview/other/promote.md"},o=a('<h1 id="什么是提升-什么是暂时性死区-var、let-及-const-区别" tabindex="-1">什么是提升？什么是暂时性死区？var、let 及 const 区别？ <a class="header-anchor" href="#什么是提升-什么是暂时性死区-var、let-及-const-区别" aria-label="Permalink to &quot;什么是提升？什么是暂时性死区？var、let 及 const 区别？&quot;">​</a></h1><h2 id="什么是提升" tabindex="-1">什么是提升？ <a class="header-anchor" href="#什么是提升" aria-label="Permalink to &quot;什么是提升？&quot;">​</a></h2><ul><li>使用 var 声明的变量会被提升到作用域的顶部</li><li>函数也会被提升，并且优先于变量提升。</li><li>提升存在的根本原因就是为了解决函数间互相调用的情况</li></ul><h2 id="什么是暂时性死区" tabindex="-1">什么是暂时性死区？ <a class="header-anchor" href="#什么是暂时性死区" aria-label="Permalink to &quot;什么是暂时性死区？&quot;">​</a></h2><ul><li>不能在声明前就使用变量</li></ul><h2 id="var、let-及-const-区别" tabindex="-1">var、let 及 const 区别？ <a class="header-anchor" href="#var、let-及-const-区别" aria-label="Permalink to &quot;var、let 及 const 区别？&quot;">​</a></h2><ul><li>全局作用域下: <ul><li>使用 var 声明的变量会被挂载到window上</li><li>使用 let 和 const 声明的变量，不会被挂载到 window 上</li></ul></li><li>var定义变量会提升,let,const不会</li><li>同一作用域中var允许重复声明,let,const不可以</li><li>const 声明必须赋初值,且声明后不能改变</li></ul><div style="display:none;" data-pagefind-meta="base64:JTdCJTIyaXNUaW1lTGluZSUyMiUzQXRydWUlMkMlMjJ0aXRsZSUyMiUzQSUyMiVFNCVCQiU4MCVFNCVCOSU4OCVFNiU5OCVBRiVFNiU4RiU5MCVFNSU4RCU4NyVFRiVCQyU5RiVFNCVCQiU4MCVFNCVCOSU4OCVFNiU5OCVBRiVFNiU5QSU4MiVFNiU5NyVCNiVFNiU4MCVBNyVFNiVBRCVCQiVFNSU4QyVCQSVFRiVCQyU5RnZhciVFMyU4MCU4MWxldCVFNSU4RiU4QWNvbnN0JUU1JThDJUJBJUU1JTg4JUFCJUVGJUJDJTlGJTIyJTJDJTIyZGF0ZSUyMiUzQTE1ODM3OTg0MDAwMDAlMkMlMjJ0YWdzJTIyJTNBJTVCJTIyJUU5JTlEJUEyJUU4JUFGJTk1JTIyJTJDJTIyJUU1JTg1JUI2JUU1JUFFJTgzJTIyJTVEJTJDJTIyY2F0ZWdvcmllcyUyMiUzQSU1QiUyMiVFOSU5RCVBMiVFOCVBRiU5NSUyMiU1RCU3RA=="></div>',8),r=[o];function U(n,s,c,J,d,V){return t(),e("div",null,r)}const h=i(l,[["render",U]]);export{C as __pageData,h as default};

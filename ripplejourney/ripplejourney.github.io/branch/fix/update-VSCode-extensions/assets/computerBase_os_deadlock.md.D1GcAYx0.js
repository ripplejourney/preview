import{_ as a,o as t,c as i,a4 as l}from"./chunks/framework.CeLF5I0u.js";const h=JSON.parse('{"title":"死锁","description":"","frontmatter":{"sidebar":{"title":"死锁","step":4},"isTimeLine":true,"title":"死锁","date":"2020-04-29T00:00:00.000Z","tags":["计算机基础","操作系统"],"categories":["计算机基础"],"head":[["script",{},"!function(p){\\"use strict\\";!function(t){var s=window,e=document,i=p,c=\\"\\".concat(\\"https:\\"===e.location.protocol?\\"https://\\":\\"http://\\",\\"sdk.51.la/js-sdk-pro.min.js\\"),n=e.createElement(\\"script\\"),r=e.getElementsByTagName(\\"script\\")[0];n.type=\\"text/javascript\\",n.setAttribute(\\"charset\\",\\"UTF-8\\"),n.async=!0,n.src=c,n.id=\\"LA_COLLECT\\",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({\\"id\\":\\"Jgmg5avjAUvoyePS\\",\\"ck\\":\\"Jgmg5avjAUvoyePS\\",\\"hashMode\\":true});"]]},"headers":[],"relativePath":"computerBase/os/deadlock.md","filePath":"computerBase/os/deadlock.md","lastUpdated":1719297432000}'),r={name:"computerBase/os/deadlock.md"};function o(s,e,n,d,c,u){return t(),i("div",{"data-pagefind-body":!0},e[0]||(e[0]=[l('<h1 id="死锁" tabindex="-1">死锁 <a class="header-anchor" href="#死锁" aria-label="Permalink to &quot;死锁&quot;">​</a></h1><h2 id="概念" tabindex="-1">概念 <a class="header-anchor" href="#概念" aria-label="Permalink to &quot;概念&quot;">​</a></h2><p>死锁是指两个或两个以上的进程在执行过程中，由于竞争资源而造成阻塞的现象，若无外力作用，它们都将无法继续执行</p><h2 id="产生原因" tabindex="-1">产生原因 <a class="header-anchor" href="#产生原因" aria-label="Permalink to &quot;产生原因&quot;">​</a></h2><ul><li>竞争资源引起进程死锁</li><li>可剥夺和非剥夺资源</li><li>竞争非剥夺资源</li><li>竞争临时性资源</li><li>进程推进顺序不当</li></ul><h2 id="产生条件" tabindex="-1">产生条件 <a class="header-anchor" href="#产生条件" aria-label="Permalink to &quot;产生条件&quot;">​</a></h2><ul><li>互斥条件：涉及的资源是非共享的 <ul><li>涉及的资源是非共享的,一段时间内某资源只由一个进程占用,如果此时还有其它进程请求资源，则请求者只能等待，直至占有资源的进程用毕释放</li></ul></li><li>不剥夺条件：不能强行剥夺进程拥有的资源 <ul><li>进程已获得的资源，在未使用完之前，不能被剥夺，只能在使用完时由自己释放</li></ul></li><li>请求和保持条件：进程在等待一新资源时继续占有已分配的资源 <ul><li>指进程已经保持至少一个资源，但又提出了新的资源请求，而该资源已被其它进程占有，此时请求进程阻塞，但又对自己已获得的其它资源保持不放</li></ul></li><li>环路等待条件：存在一种进程的循环链，链中的每一个进程已获得的资源同时被链中的下一个进程所请求 <ul><li>在发生死锁时，必然存在一个进程——资源的环形链</li></ul></li></ul><h2 id="解决办法" tabindex="-1">解决办法 <a class="header-anchor" href="#解决办法" aria-label="Permalink to &quot;解决办法&quot;">​</a></h2><p>只要打破四个必要条件之一就能有效预防死锁的发生</p>',9)]))}const m=a(r,[["render",o]]);export{h as __pageData,m as default};

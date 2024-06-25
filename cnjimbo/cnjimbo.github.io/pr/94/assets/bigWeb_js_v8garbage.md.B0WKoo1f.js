import{_ as l,o as a,c as e,a6 as i}from"./chunks/framework.DA4S3XNI.js";const p=JSON.parse('{"title":"V8下的垃圾回收机制是怎么样的？","description":"","frontmatter":{"isTimeLine":true,"title":"V8下的垃圾回收机制是怎么样的？","date":"2020-04-14T00:00:00.000Z","tags":["面试","javascript"],"categories":["面试"]},"headers":[],"relativePath":"bigWeb/js/v8garbage.md","filePath":"bigWeb/js/v8garbage.md","lastUpdated":1718447701000}'),J={name:"bigWeb/js/v8garbage.md"},U=i('<h1 id="v8-下的垃圾回收机制是怎么样的" tabindex="-1">V8 下的垃圾回收机制是怎么样的？ <a class="header-anchor" href="#v8-下的垃圾回收机制是怎么样的" aria-label="Permalink to &quot;V8 下的垃圾回收机制是怎么样的？&quot;">​</a></h1><p>垃圾回收会暂停JS运行，如果内存过大会导致垃圾回收时间变长，从而导致JS暂停时间变长</p><p>V8 实现了准确式 GC，GC 算法采用了分代式垃圾回收机制。V8 将内存（堆）分为两部分:</p><ul><li>新生代 <ul><li>64:32MB</li><li>32:16MB</li></ul></li><li>老生代 <ul><li>64:1400MB</li><li>32:700MB</li></ul></li></ul><h2 id="新生代算法" tabindex="-1">新生代算法 <a class="header-anchor" href="#新生代算法" aria-label="Permalink to &quot;新生代算法&quot;">​</a></h2><p>新生代中的对象一般存活时间较短</p><p>在新生代空间中，内存空间分为两部分，分别为 From 空间和 To 空间。在这两个空间中，必定有一个空间是使用的，另一个空间是空闲的。新分配的对象会被放入 From 空间中，当 From 空间被占满时，新生代 GC 就会启动了。算法会检查 From 空间中存活的对象并复制到 To 空间中，如果有失活的对象就会销毁。当复制完成后将 From 空间和 To 空间互换，这样 GC 就结束了。</p><h2 id="老生代算法" tabindex="-1">老生代算法 <a class="header-anchor" href="#老生代算法" aria-label="Permalink to &quot;老生代算法&quot;">​</a></h2><p>老生代中的对象一般存活时间较长且数量也多，使用了两个算法，分别是<code>标记清除算法</code>和<code>标记压缩(整理)算法</code>。</p><ul><li>新生代中的对象如果经历过一次 Scavenge 算法，会将对象从新生代空间移到老生代空间中。</li><li>新生代空间中的To 空间的对象占比大小超过 25 %。在这种情况下，为了不影响到内存分配，会将对象从新生代空间移到老生代空间中。</li></ul><p><strong>优先使用<a href="./../../bigWeb/js/garbage.html#标记-清除算法">标记清除算法</a></strong></p><ul><li>某一个空间没有分块的时候</li><li>空间中被对象超过一定限制</li><li>空间不能保证新生代中的对象移动到老生代中</li></ul><p><strong>标记整理</strong></p><ul><li>空间不足以分配新生代晋升对象时，才会触发<code>标记整理</code></li><li>解决标记清除带来的内存碎片的问题，在标记清除的基础上进行修改</li><li>将活着的对象向内存区的一端移动，移动完后清理边界外的内存</li></ul><div style="display:none;" data-pagefind-meta="base64:JTdCJTIyaXNUaW1lTGluZSUyMiUzQXRydWUlMkMlMjJ0aXRsZSUyMiUzQSUyMlY4JUU0JUI4JThCJUU3JTlBJTg0JUU1JTlFJTgzJUU1JTlDJUJFJUU1JTlCJTlFJUU2JTk0JUI2JUU2JTlDJUJBJUU1JTg4JUI2JUU2JTk4JUFGJUU2JTgwJThFJUU0JUI5JTg4JUU2JUEwJUI3JUU3JTlBJTg0JUVGJUJDJTlGJTIyJTJDJTIyZGF0ZSUyMiUzQTE1ODY4MjI0MDAwMDAlMkMlMjJ0YWdzJTIyJTNBJTVCJTIyJUU5JTlEJUEyJUU4JUFGJTk1JTIyJTJDJTIyamF2YXNjcmlwdCUyMiU1RCUyQyUyMmNhdGVnb3JpZXMlMjIlM0ElNUIlMjIlRTklOUQlQTIlRTglQUYlOTUlMjIlNUQlN0Q="></div>',15),t=[U];function o(r,T,s,d,n,c){return a(),e("div",null,t)}const _=l(J,[["render",o]]);export{p as __pageData,_ as default};

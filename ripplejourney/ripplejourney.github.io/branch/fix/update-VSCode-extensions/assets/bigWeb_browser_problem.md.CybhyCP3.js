import{_ as l,o as i,c as e,a4 as r}from"./chunks/framework.CeLF5I0u.js";const p=JSON.parse('{"title":"浏览器-常见面试题","description":"","frontmatter":{"sidebar":{"title":"常见面试题"},"isTimeLine":true,"title":"浏览器-常见面试题","date":"2020-10-27T00:00:00.000Z","tags":["大前端","浏览器"],"categories":["大前端"],"head":[["script",{},"!function(p){\\"use strict\\";!function(t){var s=window,e=document,i=p,c=\\"\\".concat(\\"https:\\"===e.location.protocol?\\"https://\\":\\"http://\\",\\"sdk.51.la/js-sdk-pro.min.js\\"),n=e.createElement(\\"script\\"),r=e.getElementsByTagName(\\"script\\")[0];n.type=\\"text/javascript\\",n.setAttribute(\\"charset\\",\\"UTF-8\\"),n.async=!0,n.src=c,n.id=\\"LA_COLLECT\\",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({\\"id\\":\\"Jgmg5avjAUvoyePS\\",\\"ck\\":\\"Jgmg5avjAUvoyePS\\",\\"hashMode\\":true});"]]},"headers":[],"relativePath":"bigWeb/browser/problem.md","filePath":"bigWeb/browser/problem.md","lastUpdated":1719297432000}'),t={name:"bigWeb/browser/problem.md"};function o(s,a,n,h,d,c){return i(),e("div",{"data-pagefind-body":!0},a[0]||(a[0]=[r('<h1 id="常见问题" tabindex="-1">常见问题 <a class="header-anchor" href="#常见问题" aria-label="Permalink to &quot;常见问题&quot;">​</a></h1><h2 id="目录" tabindex="-1">目录 <a class="header-anchor" href="#目录" aria-label="Permalink to &quot;目录&quot;">​</a></h2><nav class="table-of-contents"><ul><li><a href="#目录">目录</a></li><li><a href="#💡1-为什么操作-dom-慢">💡1.为什么操作 DOM 慢?</a></li><li><a href="#_2-展示大量的数据-如何实现页面不卡顿">2.展示大量的数据,如何实现页面不卡顿?</a></li><li><a href="#_3-什么情况阻塞渲染">3.什么情况阻塞渲染?</a></li><li><a href="#_4-重绘-repaint-和回流-reflow">4.重绘（Repaint）和回流（Reflow）?</a></li><li><a href="#_5-如何减少重绘和回流">5.如何减少重绘和回流?</a></li><li><a href="#_6-在不考虑缓存和优化网络协议的前提下-考虑可以通过哪些方式来最快的渲染页面">6.在不考虑缓存和优化网络协议的前提下，考虑可以通过哪些方式来最快的渲染页面?</a></li><li><a href="#_7-为什么浏览器要使用同源策略">7.为什么浏览器要使用同源策略?</a></li><li><a href="#_8-跨域请求是否发出去了">8.跨域请求是否发出去了</a></li><li><a href="#_9-什么是跨域">9.什么是跨域</a></li><li><a href="#_10-为什么浏览器要使用同源策略">10.为什么浏览器要使用同源策略</a></li><li><a href="#_11-有哪些方式可以解决跨域问题">11.有哪些方式可以解决跨域问题</a></li><li><a href="#_12-什么是预检请求">12.什么是预检请求</a></li></ul></nav><div class="warning custom-block"><p class="custom-block-title">TODO: 此页内容待重新完善</p><ul><li>经典面试题：从URL输入到页面展现出来发生过了什么</li><li>。。。</li></ul></div><h2 id="💡1-为什么操作-dom-慢" tabindex="-1">💡1.为什么操作 DOM 慢? <a class="header-anchor" href="#💡1-为什么操作-dom-慢" aria-label="Permalink to &quot;💡1.为什么操作 DOM 慢?&quot;">​</a></h2><p>DOM 是属于<strong>渲染引擎</strong>中的东西，而 JS 又是 <strong>JS 引擎</strong>中的。通过 JS 操作 DOM 的时候，这个操作涉及到了两个线程之间的通信，必然会带来一些性能上的损耗。操作 DOM 次数一多，就等同于一直在进行线程之间的通信，并且操作DOM可能还会带来重绘回流的影响，所以也就导致了性能上的问题。</p><h2 id="_2-展示大量的数据-如何实现页面不卡顿" tabindex="-1">2.展示大量的数据,如何实现页面不卡顿? <a class="header-anchor" href="#_2-展示大量的数据-如何实现页面不卡顿" aria-label="Permalink to &quot;2.展示大量的数据,如何实现页面不卡顿?&quot;">​</a></h2><p>虚拟滚动(即懒加载的方式)</p><p>原理就是只渲染可视区域内的内容，非可见区域的那就完全不渲染了，当用户在滚动的时候就实时去替换渲染的内容。</p><h2 id="_3-什么情况阻塞渲染" tabindex="-1">3.什么情况阻塞渲染? <a class="header-anchor" href="#_3-什么情况阻塞渲染" aria-label="Permalink to &quot;3.什么情况阻塞渲染?&quot;">​</a></h2><ul><li>HTML 和 CSS 肯定会阻塞渲染 <ul><li>提升渲染速度:降低一开始需要渲染的文件大小，并且扁平层级，优化选择器。</li></ul></li><li>解析到 script 标签时，判断是否包含defer或者async <ul><li>defer: JS 文件会并行下载，但是会放到 HTML 解析完成后顺序执行 <ul><li>可以把 script 标签放在任意位置。</li></ul></li><li>async:JS 文件下载和解析不会阻塞渲染 <ul><li>下载完后就执行</li><li>对于没有任何依赖的 JS 文件可以加上 async 属性</li></ul></li><li>两者都不含有:暂停构建 DOM，下载完成后才会从暂停的地方重新开始 <ul><li>建议将 script 标签放在 body 标签底部</li></ul></li></ul></li></ul><h2 id="_4-重绘-repaint-和回流-reflow" tabindex="-1">4.重绘（Repaint）和回流（Reflow）? <a class="header-anchor" href="#_4-重绘-repaint-和回流-reflow" aria-label="Permalink to &quot;4.重绘（Repaint）和回流（Reflow）?&quot;">​</a></h2><ul><li>回流:计算可见的Dom节点在设备视口的位置和尺寸,这个计算阶段就是回流 <ul><li>当节点需要更改外观而不会影响布局时，触发重绘</li></ul></li><li>重绘:经过生成的渲染树和回流阶段,得到了所有可见节点具体的几何信息与样式,然后将渲染树的每个节点转换成屏幕上的实际像素,这个阶段就叫重绘节点 <ul><li>布局或者节点的几何属性改变时,触发回流。</li></ul></li></ul><p><strong>回流必定会发生重绘，重绘不一定会引发回流!</strong></p><p>回流所需的成本比重绘高的多，改变父节点里的子节点很可能会导致父节点的一系列的回流。</p><p>以下几个动作可能会导致性能问题：</p><ul><li>改变窗口(window)大小</li><li>改变字体</li><li>添加或删除样式</li><li>文字改变</li><li>定位或者浮动</li><li>盒模型</li></ul><p><strong>参与Event Loop</strong></p><ul><li>当 Eventloop 执行完 Microtasks(微任务)后,判断document是否需要更新，因为浏览器是 60Hz 的刷新率，每 16.6ms 才会更新一次。</li><li>然后判断是否有 resize 或者 scroll 事件，有的话会去触发事件，所以 resize 和 scroll 事件也是至少 16ms 才会触发一次，并且<strong>自带节流</strong>功能。</li><li>判断是否触发了 media query</li><li>更新动画并且发送事件</li><li>判断是否有全屏操作事件</li><li>执行 requestAnimationFrame 回调</li><li>执行 IntersectionObserver 回调，该方法用于判断元素是否可见，可以用于懒加载上，但是兼容性不好</li><li>更新界面</li></ul><h2 id="_5-如何减少重绘和回流" tabindex="-1">5.如何减少重绘和回流? <a class="header-anchor" href="#_5-如何减少重绘和回流" aria-label="Permalink to &quot;5.如何减少重绘和回流?&quot;">​</a></h2><ul><li>使用 transform 替代 top</li><li>使用 visibility 替换 display: none <ul><li>因为前者只会引起重绘，后者会引发回流（改变了布局）</li></ul></li><li>不要把节点的属性值放在一个循环里当成循环里的变量</li><li>不要使用 table 布局，可能很小的一个小改动会造成整个 table 的重新布局</li><li>动画实现的速度的选择，动画速度越快，回流次数越多，也可以选择使用<code>requestAnimationFrame</code></li><li>CSS 选择符从右往左匹配查找，避免节点层级过多</li></ul><h2 id="_6-在不考虑缓存和优化网络协议的前提下-考虑可以通过哪些方式来最快的渲染页面" tabindex="-1">6.在不考虑缓存和优化网络协议的前提下，考虑可以通过哪些方式来最快的渲染页面? <a class="header-anchor" href="#_6-在不考虑缓存和优化网络协议的前提下-考虑可以通过哪些方式来最快的渲染页面" aria-label="Permalink to &quot;6.在不考虑缓存和优化网络协议的前提下，考虑可以通过哪些方式来最快的渲染页面?&quot;">​</a></h2><ol><li>考虑文件大小</li><li>考虑script 标签的使用</li><li>从 CSS、HTML 的代码书写上来考虑</li><li>需要下载的内容是否需要在首屏使用上来考虑</li></ol><h2 id="_7-为什么浏览器要使用同源策略" tabindex="-1">7.为什么浏览器要使用同源策略? <a class="header-anchor" href="#_7-为什么浏览器要使用同源策略" aria-label="Permalink to &quot;7.为什么浏览器要使用同源策略?&quot;">​</a></h2><p>出于安全考虑,为了防止CSRF(跨站请求伪造)攻击:CSRF 攻击是利用用户的登录态发起恶意请求</p><h2 id="_8-跨域请求是否发出去了" tabindex="-1">8.跨域请求是否发出去了 <a class="header-anchor" href="#_8-跨域请求是否发出去了" aria-label="Permalink to &quot;8.跨域请求是否发出去了&quot;">​</a></h2><p>请求是发出去了，但是浏览器拦截了响应。浏览器认为这不安全，所以拦截了响应。也就说明了跨域并不能完全阻止 CSRF，因为请求毕竟是发出去了。</p><h2 id="_9-什么是跨域" tabindex="-1">9.什么是跨域 <a class="header-anchor" href="#_9-什么是跨域" aria-label="Permalink to &quot;9.什么是跨域&quot;">​</a></h2><h2 id="_10-为什么浏览器要使用同源策略" tabindex="-1">10.为什么浏览器要使用同源策略 <a class="header-anchor" href="#_10-为什么浏览器要使用同源策略" aria-label="Permalink to &quot;10.为什么浏览器要使用同源策略&quot;">​</a></h2><h2 id="_11-有哪些方式可以解决跨域问题" tabindex="-1">11.有哪些方式可以解决跨域问题 <a class="header-anchor" href="#_11-有哪些方式可以解决跨域问题" aria-label="Permalink to &quot;11.有哪些方式可以解决跨域问题&quot;">​</a></h2><h2 id="_12-什么是预检请求" tabindex="-1">12.什么是预检请求 <a class="header-anchor" href="#_12-什么是预检请求" aria-label="Permalink to &quot;12.什么是预检请求&quot;">​</a></h2>',31)]))}const _=l(t,[["render",o]]);export{p as __pageData,_ as default};

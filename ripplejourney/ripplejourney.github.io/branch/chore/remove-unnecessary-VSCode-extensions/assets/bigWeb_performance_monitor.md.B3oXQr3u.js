import{_ as e,o as r,c as a,aa as n}from"./chunks/framework.jFB2PaGt.js";const o="/preview/ripplejourney/ripplejourney.github.io/branch/chore/remove-unnecessary-VSCode-extensions/assets/MTU4MzgxMjk2MzI3Ng__583812963276.RuQDOnAa.png",u=JSON.parse('{"title":"监控","description":"","frontmatter":{"isTimeLine":true,"title":"监控","date":"2020-04-14T00:00:00.000Z","tags":["大前端","性能优化"],"categories":["大前端"],"head":[["script",{},"!function(p){\\"use strict\\";!function(t){var s=window,e=document,i=p,c=\\"\\".concat(\\"https:\\"===e.location.protocol?\\"https://\\":\\"http://\\",\\"sdk.51.la/js-sdk-pro.min.js\\"),n=e.createElement(\\"script\\"),r=e.getElementsByTagName(\\"script\\")[0];n.type=\\"text/javascript\\",n.setAttribute(\\"charset\\",\\"UTF-8\\"),n.async=!0,n.src=c,n.id=\\"LA_COLLECT\\",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({\\"id\\":\\"Jgmg5avjAUvoyePS\\",\\"ck\\":\\"Jgmg5avjAUvoyePS\\",\\"hashMode\\":true});"]]},"headers":[],"relativePath":"bigWeb/performance/monitor.md","filePath":"bigWeb/performance/monitor.md","lastUpdated":1720544135000}'),i={name:"bigWeb/performance/monitor.md"};function l(d,t,s,c,p,h){return r(),a("div",{"data-pagefind-body":!0},t[0]||(t[0]=[n('<h1 id="监控" tabindex="-1">监控 <a class="header-anchor" href="#监控" aria-label="Permalink to &quot;监控&quot;">​</a></h1><p>一般分为三种:</p><ul><li>页面埋点</li><li>性能监控</li><li>异常监控</li></ul><h2 id="页面埋点" tabindex="-1">页面埋点 <a class="header-anchor" href="#页面埋点" aria-label="Permalink to &quot;页面埋点&quot;">​</a></h2><ul><li><a href="https://blog.csdn.net/baidu_35901646/article/details/81612422" target="_blank" rel="noreferrer">PV / UV</a><ul><li><code>page view</code> 与 <code>unique visitor</code>,用户访问的数量与独立访客数</li></ul></li><li>停留时长</li><li>流量来源</li><li>用户交互</li></ul><h3 id="手写埋点" tabindex="-1">手写埋点 <a class="header-anchor" href="#手写埋点" aria-label="Permalink to &quot;手写埋点&quot;">​</a></h3><p>自主选择需要监控的数据然后在相应的地方写入代码。</p><p><strong>缺点</strong></p><p>工作量较大，每个需要监控的地方都得插入代码</p><h3 id="无埋点" tabindex="-1">无埋点 <a class="header-anchor" href="#无埋点" aria-label="Permalink to &quot;无埋点&quot;">​</a></h3><p>统计所有发生的事件并定时上报,然后服务端对数据进行过滤得出需要的数据</p><p>可以采用事件代理的方式监听页面中所需的事件</p><h2 id="性能监控" tabindex="-1">性能监控 <a class="header-anchor" href="#性能监控" aria-label="Permalink to &quot;性能监控&quot;">​</a></h2><p>使用<a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Performance" target="_blank" rel="noreferrer">Performance API</a>来实现</p><p><strong>关键时间节点:</strong> <code>performance.timing</code> 或者 <code>performance.getEntriesByType(&#39;navigation&#39;)</code></p><p>通过时间节点之间的差值,得出某个过程所花费的时间</p><p><img src="'+o+'" alt="图片" loading="lazy"></p><table tabindex="0"><thead><tr><th style="text-align:center;">名称</th><th style="text-align:center;">计算</th></tr></thead><tbody><tr><td style="text-align:center;">DNS查询耗时</td><td style="text-align:center;">domainLookupEnd-domainLookupStart</td></tr><tr><td style="text-align:center;">TCP连接耗时</td><td style="text-align:center;">connectEnd-connectStart</td></tr><tr><td style="text-align:center;">内容加载耗时</td><td style="text-align:center;">responseEnd-connectStart</td></tr><tr><td style="text-align:center;">首包时间</td><td style="text-align:center;">responseStart-domainLookupStart</td></tr><tr><td style="text-align:center;">白屏时间(首次渲染时间)</td><td style="text-align:center;">responseEnd-fetchStart</td></tr><tr><td style="text-align:center;">首次可交互时间</td><td style="text-align:center;">domInteractive-fetchStart</td></tr><tr><td style="text-align:center;">HTML加载完成</td><td style="text-align:center;">domContentLoaded - fetchStart</td></tr><tr><td style="text-align:center;">页面完全加载</td><td style="text-align:center;">loadEventStart-fetchStart</td></tr></tbody></table><h2 id="异常监控" tabindex="-1">异常监控 <a class="header-anchor" href="#异常监控" aria-label="Permalink to &quot;异常监控&quot;">​</a></h2><h3 id="代码报错" tabindex="-1">代码报错 <a class="header-anchor" href="#代码报错" aria-label="Permalink to &quot;代码报错&quot;">​</a></h3><p>使用 <code>window.onerror</code> 拦截报错,可以拦截大部分详细报错信息</p><p><strong>特殊</strong></p><ul><li>跨域代码显示:Script error,可以通过为script添加的crossorigin 属性解决</li></ul><h3 id="接口异常上报" tabindex="-1">接口异常上报 <a class="header-anchor" href="#接口异常上报" aria-label="Permalink to &quot;接口异常上报&quot;">​</a></h3><ul><li>可以通过img 标签的 src 发起一个请求</li></ul>',25)]))}const m=e(i,[["render",l]]);export{u as __pageData,m as default};

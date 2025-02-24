import{_ as h,L as n,c as r,o as k,aa as l,x as p,q as d,e as i,a as s}from"./chunks/framework.wbOZ1cY6.js";const e="/preview/ripplejourney/ripplejourney.github.io/pr/70/assets/MTU4MzI5MzY2MjYwOQ__583293662609.Ca2Duvn9.png",E="/preview/ripplejourney/ripplejourney.github.io/pr/70/assets/MTU4MzI5MzYzMDg4Nw__583293630887.CJGp-oz3.png",o="/preview/ripplejourney/ripplejourney.github.io/pr/70/assets/MTU4MzI5Mzc0MDM4Nw__583293740387.DHl01q9v.png",c="/preview/ripplejourney/ripplejourney.github.io/pr/70/assets/MTU4MzI5NDM0ODk2Nw__583294348967.BlT_n2D-.png",g="/preview/ripplejourney/ripplejourney.github.io/pr/70/assets/MTU4MzI5NDgzMzE2NA__583294833164.D0_4CAkL.png",y="/preview/ripplejourney/ripplejourney.github.io/pr/70/assets/MTU4MzI5NDAwODM1MA__583294008350.BdzqZ0QN.png",u="/preview/ripplejourney/ripplejourney.github.io/pr/70/assets/MTU4MzI5NDkzNTYxOQ__583294935619.BUa1xkGe.png",F="/preview/ripplejourney/ripplejourney.github.io/pr/70/assets/MTYwNDc0MDczMDcyMQ__604740730721.DhQicxxp.png",m="/preview/ripplejourney/ripplejourney.github.io/pr/70/assets/MTYwNDc0MjYxODY2Nw__604742618667.CG0h8rMM.png",b="/preview/ripplejourney/ripplejourney.github.io/pr/70/assets/MTYwNDc0Mjc1NjE5MA__604742756190.DwkNYngN.png",C="/preview/ripplejourney/ripplejourney.github.io/pr/70/assets/MTYwNDc1MjM0MjkwMg__604752342902.Ce7AvH30.png",f="/preview/ripplejourney/ripplejourney.github.io/pr/70/assets/MTYwNDc1MzgyODAyMg__604753828022.BwImhqB9.png",j=JSON.parse('{"title":"浏览器-缓存机制","description":"","frontmatter":{"sidebar":{"title":"缓存机制","step":3},"isTimeLine":true,"title":"浏览器-缓存机制","date":"2020-04-14T00:00:00.000Z","tags":["大前端","浏览器"],"categories":["大前端"],"head":[["script",{},"!function(p){\\"use strict\\";!function(t){var s=window,e=document,i=p,c=\\"\\".concat(\\"https:\\"===e.location.protocol?\\"https://\\":\\"http://\\",\\"sdk.51.la/js-sdk-pro.min.js\\"),n=e.createElement(\\"script\\"),r=e.getElementsByTagName(\\"script\\")[0];n.type=\\"text/javascript\\",n.setAttribute(\\"charset\\",\\"UTF-8\\"),n.async=!0,n.src=c,n.id=\\"LA_COLLECT\\",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({\\"id\\":\\"Jgmg5avjAUvoyePS\\",\\"ck\\":\\"Jgmg5avjAUvoyePS\\",\\"hashMode\\":true});"]]},"headers":[],"relativePath":"bigWeb/browser/cache.md","filePath":"bigWeb/browser/cache.md","lastUpdated":1720544135000}'),v={name:"bigWeb/browser/cache.md"};function x(_,a,M,T,D,A){const t=n("my-details");return k(),r("div",{"data-pagefind-body":!0},[a[1]||(a[1]=l('<h1 id="缓存机制" tabindex="-1">缓存机制 <a class="header-anchor" href="#缓存机制" aria-label="Permalink to &quot;缓存机制&quot;">​</a></h1><h2 id="缓存定义" tabindex="-1">缓存定义 <a class="header-anchor" href="#缓存定义" aria-label="Permalink to &quot;缓存定义&quot;">​</a></h2><p>用于存储数据的硬件或软件的组成部分，以使得后续更快访问相应的数据</p><p>缓存中的数据可能是提前计算好的结果或者数据的副本</p><h2 id="浏览器缓存" tabindex="-1">浏览器缓存 <a class="header-anchor" href="#浏览器缓存" aria-label="Permalink to &quot;浏览器缓存&quot;">​</a></h2><p>浏览器端（客户端）保存数据用于快速读取或避免重复资源请求的优化机制</p><p>缓存是一种简单高效的性能优化方式，可以显著减少网络传输所带来的性能损耗</p><p>对于一个数据请求来说，可以分为三个步骤</p><ol><li>发起请求</li><li>后端处理</li><li>浏览器响应</li></ol><p>浏览器缓存可以在第一和第三步骤中优化性能</p><ul><li>直接使用缓存而不发起请求</li><li>发起了请求但后端存储的数据和缓存的数据一致，那么就没有必要再将数据回传回来，这样就减少了响应数据的传输</li></ul><h2 id="缓存位置" tabindex="-1">缓存位置 <a class="header-anchor" href="#缓存位置" aria-label="Permalink to &quot;缓存位置&quot;">​</a></h2><p>从缓存位置上来说分为四种，并且各自有优先级，当依次查找缓存且都没有命中的时候，才会去请求网络</p><ol><li>Service Worker</li><li>Memory Cache</li><li>Disk Cache</li><li>Push Cache</li></ol><h3 id="service-worker" tabindex="-1">Service Worker <a class="header-anchor" href="#service-worker" aria-label="Permalink to &quot;Service Worker&quot;">​</a></h3><p>Service Worker 是运行在浏览器背后的独立线程，一般可以用来实现缓存功能</p><p>使用 Service Worker的话，传输协议必须为 HTTPS,因为 Service Worker 中涉及到请求拦截，所以必须使用 HTTPS 协议来保障安全</p><p><strong>步骤</strong></p><ol><li>注册 Service Worker</li><li>监听到 install 事件以后就可以缓存需要的文件</li><li>下次用户访问的时候就可以通过拦截请求的方式查询是否存在缓存 <ul><li>是:可以直接读取缓存文件</li><li>否:请求数据</li></ul></li></ol><p>Service Worker 的缓存与浏览器其他内建的缓存机制不同，它可以让我们自由控制缓存哪些文件、如何匹配缓存、如何读取缓存，并且缓存是持续性的</p><p>当 Service Worker 没有命中缓存的时候，就需要去调用 fetch 函数获取数据</p><p>也就是说，当没有在 Service Worker 命中缓存的话，会根据缓存查找优先级去查找数据</p><p>但是不管是从 Memory Cache 中还是从网络请求中获取的数据，浏览器都会先从 Service Worker 中获取的内容</p>',23)),p(t,{title:"使用示例"},{default:d(()=>a[0]||(a[0]=[i("p",null,"目录结构",-1),i("div",{class:"language-js vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"js"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"serviceWorker"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"/")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"├── index.css")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"├── index.html")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"├── index.js")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"└── sw.js")])])])],-1),i("p",null,"index.css",-1),i("div",{class:"language-css vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"css"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"h1"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"{")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"    color"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"red"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")])])])],-1),i("p",null,"index.html",-1),i("div",{class:"language-html vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"html"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"head"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"link"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," rel"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"stylesheet"'),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," href"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"./index.css"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"head"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"body"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"h1"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">Service Worker Test</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"h1"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," src"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"./index.js"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"></"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," src"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"./sw.js"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"></"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"body"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")])])])],-1),i("p",null,"index.js",-1),i("div",{class:"language-js vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"js"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"console."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"log"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'index.js'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// 注册")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"if"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," (navigator.serviceWorker) {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  console."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"log"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'开始注册service Worker'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  navigator.serviceWorker")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"register"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'sw.js'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"then"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(("),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"registration"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"=>"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      console."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"log"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'service worker 注册成功'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    })")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"catch"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(("),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"err"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"=>"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      console."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"log"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'servcie worker 注册失败'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    })")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")])])])],-1),i("p",null,"sw.js",-1),i("div",{class:"language-js vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"js"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"/**")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}}," * 监听 `install` 事件，回调中缓存所需文件")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}}," */")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"self."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"addEventListener"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'install'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", ("),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"e"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"=>"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  e."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"waitUntil"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    caches."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"open"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'my-cache'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"then"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(("),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"cache"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"=>"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"      return"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," cache."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"addAll"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(["),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'./index.html'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'./index.js'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'./index.css'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"])")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    })")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  )")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"})")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// 拦截所有请求事件")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// 如果缓存中已经有请求的数据就直接用缓存，否则去请求数据")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"self."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"addEventListener"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'fetch'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", ("),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"e"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"=>"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  e."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"respondWith"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    caches."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"match"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(e.request)."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"then"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(("),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"response"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"=>"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"      if"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," (response) {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"        return"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," response")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      console."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"log"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'fetch source'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    })")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  )")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"})")])])])],-1),i("p",null,"显示效果",-1),i("p",null,[i("img",{src:e,alt:"图片",loading:"lazy"})],-1),i("p",null,"第一次运行输出",-1),i("p",null,[i("img",{src:E,alt:"图片",loading:"lazy"})],-1),i("p",null,"查看Service Worker(生效)",-1),i("p",null,[i("img",{src:o,alt:"图片",loading:"lazy"})],-1),i("p",null,"查看cache(里面有我们缓存的文件)",-1),i("p",null,[i("img",{src:c,alt:"图片",loading:"lazy"})],-1),i("p",null,"我们改动index.css,然后保存",-1),i("div",{class:"language-css vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"css"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"h1"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"{")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"    color"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"blue"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")])])])],-1),i("p",null,"显示效果(不发生改变,说明是 我们设置的service Worker生效了)",-1),i("p",null,[i("img",{src:e,alt:"图片",loading:"lazy"})],-1),i("p",null,"查看控制台中的network",-1),i("p",null,[i("img",{src:g,alt:"图片",loading:"lazy"})],-1),i("p",null,[s("查看控制台(打印了"),i("code",null,"fetch source"),s(",说明是从service worker中取的)")],-1),i("p",null,[i("img",{src:y,alt:"图片",loading:"lazy"})],-1),i("p",null,"以上就是ServiceWorker的使用方式",-1)])),_:1}),a[2]||(a[2]=l('<p>相关资源：</p><ul><li>Google 官方<a href="https://developers.google.com/web/tools/workbox" target="_blank" rel="noreferrer">workbox</a></li><li><a href="https://developers.google.com/web/fundamentals/primers/service-workers/" target="_blank" rel="noreferrer">developers文档：Service Worker</a></li></ul><h3 id="memory-cache" tabindex="-1">Memory Cache <a class="header-anchor" href="#memory-cache" aria-label="Permalink to &quot;Memory Cache&quot;">​</a></h3><p>Memory Cache 也就是内存中的缓存，读取内存中的数据比磁盘快</p><p>内存缓存虽然读取高效，但是缓存持续性很短，会随着进程的释放而释放。一旦关闭 Tab 页面，内存中的缓存就被释放了</p><p>当我们访问过页面以后，再次刷新页面，可以发现很多数据都来自于内存缓存</p><p>随便打开一个网页看看</p><p><img src="'+u+'" alt="图片" loading="lazy"></p><p><strong>浏览器会把哪些文件放入内存❓</strong></p><ul><li>浏览器会把解析完成的js与css放入内存中</li></ul><p><strong>特点</strong></p><ul><li>快速读取：将编译解析后的文件，直接存入该进程的内存中，占据该进程一定的内存资源，以方便下次运行使用时的快速读取</li><li>时效性：一旦该进程关闭，则该进程的内存则会清空</li></ul><h3 id="disk-cache" tabindex="-1">Disk Cache <a class="header-anchor" href="#disk-cache" aria-label="Permalink to &quot;Disk Cache&quot;">​</a></h3><p>Disk Cache 也就是存储在硬盘中的缓存，读取速度慢点，但是什么都能存储到磁盘中，比之 Memory Cache 胜在容量和存储时效性上</p><p>在所有浏览器缓存中，Disk Cache 覆盖面基本是最大的</p><p>可以根据 HTTP Herder 中的字段判断哪些资源需要缓存，哪些资源可以不请求直接使用，哪些资源已经过期需要重新请求</p><p>即使在跨站点的情况下，相同地址的资源一旦被硬盘缓存下来，就不会再次去请求数据</p><p><strong>哪些资源会被放入磁盘❓</strong></p><ul><li>对于大文件来说，大概率是不存储在内存中的，反之优先</li><li>当前系统内存使用率高的话，文件也会优先存储进硬盘</li></ul><p><strong>特点</strong></p><ul><li>直接将缓存写入硬盘文件中</li><li>读取需要对硬盘上文件进行I/O操作，然后重新解析该缓存内容，读取复杂，速度比内存缓存慢</li><li>文件类型覆盖面大</li><li>容量大，存储时间可控</li></ul><h3 id="push-cache" tabindex="-1">Push Cache <a class="header-anchor" href="#push-cache" aria-label="Permalink to &quot;Push Cache&quot;">​</a></h3><p>Push Cache 是 HTTP2 协议新增的内容</p><p>当以上三种缓存都没有命中时，它才会被使用。并且缓存时间也很短暂，只在会话（Session）中存在，一旦会话结束就被释放。</p><p><strong>特点</strong></p><ul><li>所有的资源都能被推送，但有一定的兼容性问题</li><li>可以推送 no-cache 和 no-store 的资源</li><li>一旦连接被关闭，Push Cache 就被释放</li><li>多个页面可以使用相同的 HTTP/2 连接，即可以使用同一份缓存</li><li>Push Cache 中的缓存只能被使用一次</li><li>浏览器可以拒绝接受已经存在的资源推送</li></ul><p>当所有缓存都没有命中时,就会发起网络请求来获取资源</p><h2 id="缓存策略" tabindex="-1">缓存策略 <a class="header-anchor" href="#缓存策略" aria-label="Permalink to &quot;缓存策略&quot;">​</a></h2><ul><li>强缓存</li><li>协商缓存</li></ul><p>优先级较高的是强缓存，当强缓存失效的情况下，才会走协商缓存流程</p><p>都是通过设置 HTTP Header 来实现的</p><h3 id="强缓存" tabindex="-1">强缓存 <a class="header-anchor" href="#强缓存" aria-label="Permalink to &quot;强缓存&quot;">​</a></h3><h4 id="特点" tabindex="-1">特点 <a class="header-anchor" href="#特点" aria-label="Permalink to &quot;特点&quot;">​</a></h4><ol><li>不会向服务器发送网络请求，直接从缓存中读取资源</li><li>请求返回200的状态码</li><li>在devtools的network选项卡可以看到size显示from disk cache或from memory cache</li></ol><h4 id="设置方法" tabindex="-1">设置方法 <a class="header-anchor" href="#设置方法" aria-label="Permalink to &quot;设置方法&quot;">​</a></h4><p>通过两种 HTTP Header 实现</p><ul><li>Expires</li><li>Cache-Control</li></ul><p><strong>二者区别</strong></p><ol><li>Expires 是RFC 2616（HTTP/1.0）协议中和网页缓存相关字段</li><li>Cache-Control 是HTTP/1.1 中实现缓存机制的指令</li><li>Cache-Control优先级高于Expires</li></ol><h4 id="expires" tabindex="-1">Expires <a class="header-anchor" href="#expires" aria-label="Permalink to &quot;Expires&quot;">​</a></h4><p>使用举例：</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Expires : Wed Mar </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">04</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2020</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 13</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">33</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> GMT</span></span></code></pre></div><p>用来指定资源的到期时间,表示资源在</p><ul><li>这个时间之前无需发起网络请求，直接使用缓存的资源</li><li>这个时间之后失效,需要重新发起网络请求获取</li></ul><p><strong>缺陷：</strong> 受限制与本地时间,可以通过修改本地时间致其失效</p><h4 id="cache-control" tabindex="-1">Cache-Control <a class="header-anchor" href="#cache-control" aria-label="Permalink to &quot;Cache-Control&quot;">​</a></h4><p>使用举例：</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Cache-control: max-age=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">30</span></span></code></pre></div><p>表示资源会在 30 秒后过期，需要再次请求，max-age是距离请求发起的时间的秒数</p><p>Cache-Control 生于 HTTP/1.1，<strong>优先级高于</strong> Expires 。</p><p>可以在<code>请求头</code>或者<code>响应头</code>中设置，并且可以组合使用多种指令</p><p><strong>常见指令</strong></p><table tabindex="0"><thead><tr><th style="text-align:center;">指令</th><th style="text-align:center;">作用</th></tr></thead><tbody><tr><td style="text-align:center;">public</td><td style="text-align:center;">响应可以被服务端或者客户顿缓存</td></tr><tr><td style="text-align:center;"><strong>private</strong> 默认值</td><td style="text-align:center;">响应只可以被客户端缓存</td></tr><tr><td style="text-align:center;">max-age=30</td><td style="text-align:center;">缓存30s后过期需要重新请求</td></tr><tr><td style="text-align:center;">s-maxage=30</td><td style="text-align:center;">覆盖max-age,作用一致,代理服务器才生效</td></tr><tr><td style="text-align:center;">no-store</td><td style="text-align:center;">不缓存任何响应</td></tr><tr><td style="text-align:center;">no-cache</td><td style="text-align:center;">资源能被缓存,但立即失效</td></tr><tr><td style="text-align:center;">max-stale=30</td><td style="text-align:center;">30s内,即使缓存过期也使用该缓存</td></tr><tr><td style="text-align:center;">min-fresh=30</td><td style="text-align:center;">希望30s内获取最新的响应</td></tr></tbody></table><p><img src="'+F+'" alt="图片" loading="lazy"></p><p><strong>特点</strong> 优先级高于Expires，指令可以组合</p><h3 id="协商缓存" tabindex="-1">协商缓存 <a class="header-anchor" href="#协商缓存" aria-label="Permalink to &quot;协商缓存&quot;">​</a></h3><p>协商缓存就是强缓存失效后，浏览器携带资源的缓存标识向服务器发起请求，由服务器根据缓存标识决定是否继续使用缓存的过程</p><p>当浏览器发起请求验证资源时，如果资源没有做改变，那么服务端就会返回 304 状态码，并且更新浏览器现有缓存有效期</p><p><img src="'+m+'" alt="图片" loading="lazy"></p><p>当资源失效时，返回 200 状态码和最新的资源</p><p><img src="'+b+'" alt="图片" loading="lazy"></p><p>协商缓存可以通过设置两种 HTTP Header实现</p><ul><li>Last-Modified</li><li>ETag</li></ul><h4 id="last-modified" tabindex="-1">Last-Modified <a class="header-anchor" href="#last-modified" aria-label="Permalink to &quot;Last-Modified&quot;">​</a></h4><p>浏览器发起请求访问目标资源，服务器在返回资源的同时，会在response header中添加 Last-Modified这个header，表示这个资源在服务器上的最后修改时间</p><p>浏览器下一次请求这个资源，浏览器检测到有 Last-Modified这个header，于是会添加If-Modified-Since这个header其值就是Last-Modified中的值</p><p>服务器再次收到这个资源请求，会根据 If-Modified-Since 中的值与服务器中这个资源的最后修改时间对比</p><ul><li>若服务器的资源最后被修改时间不等于于If-Modified-Since中的值的话就会将新的资源发送回来</li><li>否则返回 304 状态码</li></ul><p><strong>缺点：</strong></p><ul><li>如果本地打开缓存文件，即使没有对文件进行修改，但还是会造成 Last-Modified 被修改，服务端不能命中缓存导致发送相同的资源</li><li>Last-Modified 只能以秒计时，如果在不可感知的时间内修改完成文件，那么服务端会认为资源还是命中了，不会返回正确的资源</li></ul><p>因为以上这些弊端，所以在 HTTP / 1.1 出现了 <code>ETag</code></p><h4 id="etag" tabindex="-1">ETag <a class="header-anchor" href="#etag" aria-label="Permalink to &quot;ETag&quot;">​</a></h4><p>Etag是服务器在响应请求时，返回的当前资源文件一个唯一标识(由服务器生成)，只要资源有变化，Etag就会重新生成</p><p>浏览器在向服务器发送请求时，会将上一次返回的Etag值放到请求头的If-None-Match字段里</p><p>服务端比较 If-None-Match 中的值跟目标资源的ETag是否一致</p><ul><li>一致，响应状态码为304</li><li>不一致，响应状态码为200，并返回新的资源</li></ul><p><img src="'+C+'" alt="图片" loading="lazy"></p><p><strong>特点：</strong></p><ul><li>ETag 优先级比 Last-Modified 高</li><li>ETag 是服务端通过算法计算得出，需要损耗一定时间</li></ul><h4 id="两者对比" tabindex="-1">两者对比 <a class="header-anchor" href="#两者对比" aria-label="Permalink to &quot;两者对比&quot;">​</a></h4><ul><li>Etag/If-None-Match优先级高于Last-Modified/If-Modified-Since <ul><li>即同时存在则只有Etag / If-None-Match生效</li></ul></li><li>性能上，Last-Modified要优于Etag <ul><li>Last-Modified只需要记录时间</li><li>Etag需要服务器通过算法来计算出一个hash值</li></ul></li><li>在精确度上，Etag要优于Last-Modified <ul><li>Last-Modified的时间单位是秒，如果某个文件在1秒内被改变了多次，那么它的Last-Modified没有体现出来修改</li><li>文件只要发生改变，Etag就会改变</li></ul></li></ul><h2 id="执行流程" tabindex="-1">执行流程 <a class="header-anchor" href="#执行流程" aria-label="Permalink to &quot;执行流程&quot;">​</a></h2><ol><li>强制缓存优先于协商缓存进行 <ul><li>若强制缓存(Expires和Cache-Control)生效则直接使用缓存</li><li>若不生效则进行协商缓存(Last-Modified / If-Modified-Since与Etag / If-None-Match)</li></ul></li><li>协商缓存由服务器决定是否使用缓存 <ul><li>若协商缓存失效，那么代表该请求的缓存失效，响应200，返回新的资源和缓存标识，并存入浏览器缓存中</li><li>生效则响应304，表示继续使用现有缓存</li></ul></li></ol><p><img src="'+f+'" alt="图片" loading="lazy"></p><p><strong>如果什么缓存策略都没设置，那么浏览器会怎么处理❓</strong></p><p>对于这种情况，浏览器会采用一个<code>启发式的算法</code></p><p>取响应头中的 Date 减去 Last-Modified 值的 10% 作为缓存时间</p><h2 id="缓存策略应用场景" tabindex="-1">缓存策略应用场景 <a class="header-anchor" href="#缓存策略应用场景" aria-label="Permalink to &quot;缓存策略应用场景&quot;">​</a></h2><h3 id="_1-频繁变动的资源" tabindex="-1">1. 频繁变动的资源 <a class="header-anchor" href="#_1-频繁变动的资源" aria-label="Permalink to &quot;1. 频繁变动的资源&quot;">​</a></h3><ol><li>首先使用 <code>Cache-Control: no-cache</code>,使浏览器每次都请求服务器</li><li>配合 ETag 或 Last-Modified 来验证资源是否过期</li></ol><p>这样的做法虽然不能节省请求数量，但是能显著减少响应数据大小</p><h3 id="_2-代码文件" tabindex="-1">2. 代码文件 <a class="header-anchor" href="#_2-代码文件" aria-label="Permalink to &quot;2. 代码文件&quot;">​</a></h3><p>缓存除<code>HTML</code>外的文件</p><p>一般来说，现在都会使用工具来打包代码，那么就可以对<strong>HTML引用的静态资源的文件名进行哈希处理</strong>，只有当文件内容发生修改后才会生成新的文件名</p><p>因此可以给代码文件设置缓存有效期一年Cache-Control: max-age=31536000，这样只有当<code>HTML</code>文件中引入的文件名发生了改变才会去下载最新的代码文件，否则就一直使用缓存。</p><div class="tip custom-block"><p class="custom-block-title">参考</p><ul><li><a href="https://www.jianshu.com/p/54cc04190252" target="_blank" rel="noreferrer">简书 - 深入理解浏览器的缓存机制</a></li><li><a href="https://segmentfault.com/a/1190000017185195" target="_blank" rel="noreferrer">思否 - 浏览器缓存原理以及本地存储</a></li><li><a href="https://juejin.im/book/6844733763675488269/section/6844733763742597127" target="_blank" rel="noreferrer">掘金小册 - 前端面试之道</a></li><li><a href="https://juejin.im/entry/6844903593275817998" target="_blank" rel="noreferrer">掘金 - 彻底理解浏览器的缓存机制</a></li></ul></div>',96))])}const w=h(v,[["render",x]]);export{j as __pageData,w as default};

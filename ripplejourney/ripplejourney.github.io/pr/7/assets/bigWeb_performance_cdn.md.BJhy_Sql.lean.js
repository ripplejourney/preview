import{_ as n,o as r,c as s,e,a}from"./chunks/framework.CSef_RB6.js";const f=JSON.parse('{"title":"CDN的缓存与回源机制","description":"","frontmatter":{"isTimeLine":true,"title":"CDN的缓存与回源机制","date":"2020-04-14T00:00:00.000Z","tags":["大前端","性能优化"],"categories":["大前端"],"head":[["script",{},"!function(p){\\"use strict\\";!function(t){var s=window,e=document,i=p,c=\\"\\".concat(\\"https:\\"===e.location.protocol?\\"https://\\":\\"http://\\",\\"sdk.51.la/js-sdk-pro.min.js\\"),n=e.createElement(\\"script\\"),r=e.getElementsByTagName(\\"script\\")[0];n.type=\\"text/javascript\\",n.setAttribute(\\"charset\\",\\"UTF-8\\"),n.async=!0,n.src=c,n.id=\\"LA_COLLECT\\",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({\\"id\\":\\"Jgmg5avjAUvoyePS\\",\\"ck\\":\\"Jgmg5avjAUvoyePS\\",\\"hashMode\\":true});"]]},"headers":[],"relativePath":"bigWeb/performance/cdn.md","filePath":"bigWeb/performance/cdn.md","lastUpdated":1719297432000}'),o={name:"bigWeb/performance/cdn.md"};function i(c,t,d,l,p,m){return r(),s("div",{"data-pagefind-body":!0},t[0]||(t[0]=[e("h1",{id:"cdn的缓存与回源机制",tabindex:"-1"},[a("CDN的缓存与回源机制 "),e("a",{class:"header-anchor",href:"#cdn的缓存与回源机制","aria-label":'Permalink to "CDN的缓存与回源机制"'},"​")],-1),e("blockquote",null,[e("p",null,"CDN （Content Delivery Network，即内容分发网络）指的是一组分布在各个地区的服务器。这些服务器存储着数据的副本，因此服务器可以根据哪些服务器与用户距离最近，来满足数据的请求。 CDN 提供快速服务，较少受高流量影响。")],-1),e("h2",{id:"核心功能",tabindex:"-1"},[a("核心功能 "),e("a",{class:"header-anchor",href:"#核心功能","aria-label":'Permalink to "核心功能"'},"​")],-1),e("ul",null,[e("li",null,"缓存:把资源 copy 一份到 CDN 服务器上这个过程"),e("li",null,"回源:CDN 发现自己没有这个资源（一般是缓存的数据过期了），转头向根服务器（或者它的上层服务器）去要这个资源的过程")],-1),e("p",null,"静态资源本身具有访问频率高、承接流量大的特点，因此静态资源加载速度始终是前端性能的一个非常关键的指标。CDN 是静态资源提速的重要手段。",-1)]))}const h=n(o,[["render",i]]);export{f as __pageData,h as default};

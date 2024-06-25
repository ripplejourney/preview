import{_ as e,o as i,c as a,a5 as l}from"./chunks/framework.8boskVJM.js";const f=JSON.parse('{"title":"与传统移动web的异同","description":"","frontmatter":{"isTimeLine":true,"title":"与传统移动web的异同","date":"2020-04-14T00:00:00.000Z","tags":["面试","小程序"],"categories":["面试"]},"headers":[],"relativePath":"interview/mini/differentweb.md","filePath":"interview/mini/differentweb.md","lastUpdated":1719297432000}'),r={name:"interview/mini/differentweb.md"},t=l('<h1 id="与传统移动web的异同" tabindex="-1">与传统移动web的异同 <a class="header-anchor" href="#与传统移动web的异同" aria-label="Permalink to &quot;与传统移动web的异同&quot;">​</a></h1><h2 id="相似" tabindex="-1">相似 <a class="header-anchor" href="#相似" aria-label="Permalink to &quot;相似&quot;">​</a></h2><ul><li>主要开发语言都是JavaScript</li></ul><h2 id="相异" tabindex="-1">相异 <a class="header-anchor" href="#相异" aria-label="Permalink to &quot;相异&quot;">​</a></h2><ul><li>网页开发渲染线程和js脚本线程是互斥的:长时间的脚本运行可能会导致页面失去响应</li><li>小程序的逻辑层和渲染层是分开的</li><li>因为逻辑层运行在 JSCore 中,并没有完整的浏览器对象,所以没有DOM API与BOM API</li><li>JSCore 的环境同 NodeJS 环境也是不尽相同,所以一些 NPM 的包在小程序中也是无法运行的</li><li>网页面向的是各种浏览器 <ul><li>PC:chrome,IE,firefox等等</li><li>移动端:Safari,chrome,webview</li></ul></li><li>小程序面向 <ul><li>两大移动端操作系统,IOS/Android的微信客户端</li></ul></li></ul><div class="tip custom-block"><p class="custom-block-title">参考</p><p><a href="https://developers.weixin.qq.com/miniprogram/dev/framework/quickstart/#%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%B8%8E%E6%99%AE%E9%80%9A%E7%BD%91%E9%A1%B5%E5%BC%80%E5%8F%91%E7%9A%84%E5%8C%BA%E5%88%AB" target="_blank" rel="noreferrer">微信小程序官方文档</a><br><a href="https://developers.weixin.qq.com/miniprogram/dev/framework/MINA.html" target="_blank" rel="noreferrer">微信小程序框架文档</a><br><a href="https://www.cnblogs.com/SophiaLees/p/11409339.html" target="_blank" rel="noreferrer">博客园:小程序工作原理浅析</a></p></div><div style="display:none;" data-pagefind-meta="base64:JTdCJTIyaXNUaW1lTGluZSUyMiUzQXRydWUlMkMlMjJ0aXRsZSUyMiUzQSUyMiVFNCVCOCU4RSVFNCVCQyVBMCVFNyVCQiU5RiVFNyVBNyVCQiVFNSU4QSVBOHdlYiVFNyU5QSU4NCVFNSVCQyU4MiVFNSU5MCU4QyUyMiUyQyUyMmRhdGUlMjIlM0ExNTg2ODIyNDAwMDAwJTJDJTIydGFncyUyMiUzQSU1QiUyMiVFOSU5RCVBMiVFOCVBRiU5NSUyMiUyQyUyMiVFNSVCMCU4RiVFNyVBOCU4QiVFNSVCQSU4RiUyMiU1RCUyQyUyMmNhdGVnb3JpZXMlMjIlM0ElNUIlMjIlRTklOUQlQTIlRTglQUYlOTUlMjIlNUQlN0Q="></div>',7),o=[t];function n(s,d,c,U,h,m){return i(),a("div",null,o)}const M=e(r,[["render",n]]);export{f as __pageData,M as default};

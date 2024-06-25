import{_ as e,o as a,c as i,a5 as t}from"./chunks/framework.3kJ-xhFW.js";const V=JSON.parse('{"title":"CDN的缓存与回源机制","description":"","frontmatter":{"isTimeLine":true,"title":"CDN的缓存与回源机制","date":"2020-04-14T00:00:00.000Z","tags":["大前端","性能优化"],"categories":["大前端"]},"headers":[],"relativePath":"bigWeb/performance/cdn.md","filePath":"bigWeb/performance/cdn.md","lastUpdated":1719297432000}'),l={name:"bigWeb/performance/cdn.md"},U=t('<h1 id="cdn的缓存与回源机制" tabindex="-1">CDN的缓存与回源机制 <a class="header-anchor" href="#cdn的缓存与回源机制" aria-label="Permalink to &quot;CDN的缓存与回源机制&quot;">​</a></h1><blockquote><p>CDN （Content Delivery Network，即内容分发网络）指的是一组分布在各个地区的服务器。这些服务器存储着数据的副本，因此服务器可以根据哪些服务器与用户距离最近，来满足数据的请求。 CDN 提供快速服务，较少受高流量影响。</p></blockquote><h2 id="核心功能" tabindex="-1">核心功能 <a class="header-anchor" href="#核心功能" aria-label="Permalink to &quot;核心功能&quot;">​</a></h2><ul><li>缓存:把资源 copy 一份到 CDN 服务器上这个过程</li><li>回源:CDN 发现自己没有这个资源（一般是缓存的数据过期了），转头向根服务器（或者它的上层服务器）去要这个资源的过程</li></ul><p>静态资源本身具有访问频率高、承接流量大的特点，因此静态资源加载速度始终是前端性能的一个非常关键的指标。CDN 是静态资源提速的重要手段。</p><div style="display:none;" data-pagefind-meta="base64:JTdCJTIyaXNUaW1lTGluZSUyMiUzQXRydWUlMkMlMjJ0aXRsZSUyMiUzQSUyMkNETiVFNyU5QSU4NCVFNyVCQyU5MyVFNSVBRCU5OCVFNCVCOCU4RSVFNSU5QiU5RSVFNiVCQSU5MCVFNiU5QyVCQSVFNSU4OCVCNiUyMiUyQyUyMmRhdGUlMjIlM0ExNTg2ODIyNDAwMDAwJTJDJTIydGFncyUyMiUzQSU1QiUyMiVFNSVBNCVBNyVFNSU4OSU4RCVFNyVBQiVBRiUyMiUyQyUyMiVFNiU4MCVBNyVFOCU4MyVCRCVFNCVCQyU5OCVFNSU4QyU5NiUyMiU1RCUyQyUyMmNhdGVnb3JpZXMlMjIlM0ElNUIlMjIlRTUlQTQlQTclRTUlODklOEQlRTclQUIlQUYlMjIlNUQlN0Q="></div>',6),o=[U];function n(N,c,r,d,y,C){return a(),i("div",null,o)}const _=e(l,[["render",n]]);export{V as __pageData,_ as default};

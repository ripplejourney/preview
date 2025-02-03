import{_ as e,o as n,c as o,a4 as a}from"./chunks/framework.B_LsCg9l.js";const g=JSON.parse('{"title":"Content-Length","description":"","frontmatter":{"sidebar":{"title":"Content-Length","step":4},"isTimeLine":true,"title":"Content-Length","date":"2020-04-14T00:00:00.000Z","tags":["计算机基础","计算机网络"],"categories":["计算机基础"],"head":[["script",{},"!function(p){\\"use strict\\";!function(t){var s=window,e=document,i=p,c=\\"\\".concat(\\"https:\\"===e.location.protocol?\\"https://\\":\\"http://\\",\\"sdk.51.la/js-sdk-pro.min.js\\"),n=e.createElement(\\"script\\"),r=e.getElementsByTagName(\\"script\\")[0];n.type=\\"text/javascript\\",n.setAttribute(\\"charset\\",\\"UTF-8\\"),n.async=!0,n.src=c,n.id=\\"LA_COLLECT\\",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({\\"id\\":\\"Jgmg5avjAUvoyePS\\",\\"ck\\":\\"Jgmg5avjAUvoyePS\\",\\"hashMode\\":true});"]]},"headers":[],"relativePath":"computerBase/Internet/clength.md","filePath":"computerBase/Internet/clength.md","lastUpdated":1719297432000}'),s={name:"computerBase/Internet/clength.md"};function r(i,t,c,l,p,d){return n(),o("div",{"data-pagefind-body":!0},t[0]||(t[0]=[a('<h1 id="content-length" tabindex="-1">Content-Length <a class="header-anchor" href="#content-length" aria-label="Permalink to &quot;Content-Length&quot;">​</a></h1><blockquote><p>如果响应头Content-Length=0那么是发出来被截取了还是没发出来? 发出来被截取了</p></blockquote><ul><li>Content-Length比实际的长度大, 服务端/客户端读取到消息结尾后, 会等待下一个字节,无响应直到超时</li><li>Content-Length &lt; 实际长度:首次请求的消息会被截取</li></ul><p><strong>总结</strong></p><ul><li>Content-Length如果存在且生效, 必须是正确的, 否则会发生异常</li><li>如果报文中包含Transfer-Encoding: chunked首部, 那么Content-Length将被忽略.</li></ul><div class="tip custom-block"><p class="custom-block-title">参考</p><p><a href="https://www.jianshu.com/p/ea12be063b2e" target="_blank" rel="noreferrer">简书:用了这么久HTTP, 你是否了解Content-Length?</a></p></div>',6)]))}const u=e(s,[["render",r]]);export{g as __pageData,u as default};

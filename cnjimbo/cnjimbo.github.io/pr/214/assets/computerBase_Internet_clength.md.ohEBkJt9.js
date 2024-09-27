import{_ as t,o as e,c as n,a7 as o}from"./chunks/framework.DDqgOYQ0.js";const u=JSON.parse('{"title":"Content-Length","description":"","frontmatter":{"sidebar":{"title":"Content-Length","step":4},"isTimeLine":true,"title":"Content-Length","date":"2020-04-14T00:00:00.000Z","tags":["计算机基础","计算机网络"],"categories":["计算机基础"]},"headers":[],"relativePath":"computerBase/Internet/clength.md","filePath":"computerBase/Internet/clength.md","lastUpdated":1719297432000}'),a={name:"computerBase/Internet/clength.md"},r=o('<h1 id="content-length" tabindex="-1">Content-Length <a class="header-anchor" href="#content-length" aria-label="Permalink to &quot;Content-Length&quot;">​</a></h1><blockquote><p>如果响应头Content-Length=0那么是发出来被截取了还是没发出来? 发出来被截取了</p></blockquote><ul><li>Content-Length比实际的长度大, 服务端/客户端读取到消息结尾后, 会等待下一个字节,无响应直到超时</li><li>Content-Length &lt; 实际长度:首次请求的消息会被截取</li></ul><p><strong>总结</strong></p><ul><li>Content-Length如果存在且生效, 必须是正确的, 否则会发生异常</li><li>如果报文中包含Transfer-Encoding: chunked首部, 那么Content-Length将被忽略.</li></ul><div class="tip custom-block"><p class="custom-block-title">参考</p><p><a href="https://www.jianshu.com/p/ea12be063b2e" target="_blank" rel="noreferrer">简书:用了这么久HTTP, 你是否了解Content-Length?</a></p></div>',6),s=[r];function c(l,i,h,p,_,d){return e(),n("div",{"data-pagefind-body":!0},s)}const m=t(a,[["render",c]]);export{u as __pageData,m as default};

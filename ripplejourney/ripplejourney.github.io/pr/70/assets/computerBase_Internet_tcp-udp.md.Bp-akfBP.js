import{_ as e,c as i,o as a,aa as l}from"./chunks/framework.wbOZ1cY6.js";const P=JSON.parse('{"title":"TCP与UDP的区别","description":"","frontmatter":{"sidebar":{"title":"TCP与UDP的区别","step":2},"isTimeLine":true,"title":"TCP与UDP的区别","date":"2020-04-14T00:00:00.000Z","tags":["计算机基础","计算机网络"],"categories":["计算机基础"],"head":[["script",{},"!function(p){\\"use strict\\";!function(t){var s=window,e=document,i=p,c=\\"\\".concat(\\"https:\\"===e.location.protocol?\\"https://\\":\\"http://\\",\\"sdk.51.la/js-sdk-pro.min.js\\"),n=e.createElement(\\"script\\"),r=e.getElementsByTagName(\\"script\\")[0];n.type=\\"text/javascript\\",n.setAttribute(\\"charset\\",\\"UTF-8\\"),n.async=!0,n.src=c,n.id=\\"LA_COLLECT\\",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({\\"id\\":\\"Jgmg5avjAUvoyePS\\",\\"ck\\":\\"Jgmg5avjAUvoyePS\\",\\"hashMode\\":true});"]]},"headers":[],"relativePath":"computerBase/Internet/tcp-udp.md","filePath":"computerBase/Internet/tcp-udp.md","lastUpdated":1719297432000}'),r={name:"computerBase/Internet/tcp-udp.md"};function s(o,t,n,c,p,d){return a(),i("div",{"data-pagefind-body":!0},t[0]||(t[0]=[l('<h1 id="tcp与udp的区别" tabindex="-1">TCP与UDP的区别 <a class="header-anchor" href="#tcp与udp的区别" aria-label="Permalink to &quot;TCP与UDP的区别&quot;">​</a></h1><h2 id="udp" tabindex="-1">UDP <a class="header-anchor" href="#udp" aria-label="Permalink to &quot;UDP&quot;">​</a></h2><ul><li>UDP 协议是面向无连接的:不需要在正式传递数据之前先连接起双方</li><li>UDP 协议只是数据报文的搬运工:不保证有序且不丢失的传递到对端</li><li>UDP 协议也没有任何控制流量的算法</li><li>UDP 相较于 TCP 更加的轻便</li><li>无状态,不可控</li></ul><h2 id="tcp" tabindex="-1">TCP <a class="header-anchor" href="#tcp" aria-label="Permalink to &quot;TCP&quot;">​</a></h2><p>TCP 基本是和 UDP 是相反的 <strong>(客户端A,服务端B)</strong></p><ul><li>面向有连接:客户端和服务器建立连接,在互相通信之前，TCP 需要三次握手建立连接</li><li>建立连接需要进行三次握手 <ol><li>A对B发起请求报文</li><li>B收到A的请求,如果同意则向A发送应答</li><li>A收到B的应答,并告诉B我准备好了</li></ol></li><li>断开连接都需要四次握手 <ol><li>A对B发送释放链接的请求</li><li>B收到A的请求,告诉应用层释放链接</li><li>B将数据发送完毕后,再向A发送链接释放请求</li><li>A收到释放请求,向B发送确认应答,同意释放</li></ol></li><li>在传输数据的过程中，通过各种算法保证数据的可靠性</li><li>相比 UDP 来说不那么的高效。</li></ul>',6)]))}const h=e(r,[["render",s]]);export{P as __pageData,h as default};

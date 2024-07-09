import{_ as t,o as e,c as l,a5 as i}from"./chunks/framework.CY-elmy7.js";const a="/preview/cnjimbo/cnjimbo.github.io/pr/169/assets/MTU4NDE5NTg5ODc3Mw__584195898773.D4ejQZlF.png",r="/preview/cnjimbo/cnjimbo.github.io/pr/169/assets/MTU4NTcxMzIwNDc0Nw__585713204747.D4v_YgWj.png",n="/preview/cnjimbo/cnjimbo.github.io/pr/169/assets/MTU4NDMyMzc2NTY2MA__584323765660.yXObHNhg.png",y=JSON.parse('{"title":"http协议","description":"","frontmatter":{"sidebar":{"title":"HTTP协议","step":3},"isTimeLine":true,"title":"http协议","date":"2020-04-14T00:00:00.000Z","tags":["计算机基础","计算机网络"],"categories":["计算机基础"]},"headers":[],"relativePath":"computerBase/Internet/http.md","filePath":"computerBase/Internet/http.md","lastUpdated":1720534879000}'),o={name:"computerBase/Internet/http.md"},s=i(`<h1 id="http协议" tabindex="-1">http协议 <a class="header-anchor" href="#http协议" aria-label="Permalink to &quot;http协议&quot;">​</a></h1><blockquote><p>超文本传输协议(HyperText Transfer Protocol）),基于TCP实现的应用层协议</p></blockquote><ul><li>请求响应模型:客户端发送请求,服务端响应请求</li><li>无状态协议:不需要建立持久链接</li></ul><h2 id="http工作过程" tabindex="-1">http工作过程 <a class="header-anchor" href="#http工作过程" aria-label="Permalink to &quot;http工作过程&quot;">​</a></h2><ol><li>地址解析 <ul><li>协议</li><li>端口</li><li>主机名:DNS解析出主机IP地址</li><li>对象路径</li></ul></li><li>封装Http请求数据包</li><li>封装成tcp包,建立tcp连接(3次握手)</li><li>客户端发送请求</li><li>服务端响应</li><li>关闭TCP连接(4次挥手) <ul><li>保持链接的方案:在请求/响应头中加入 <code>Connection:keep-alive</code>就可以保持链接打开状态</li></ul></li></ol><h2 id="http" tabindex="-1">http <a class="header-anchor" href="#http" aria-label="Permalink to &quot;http&quot;">​</a></h2><p>请求由三部分构成:</p><ul><li>请求行</li><li>首部</li><li>实体</li></ul><p>响应:</p><ul><li>协议/版本号 状态码 状态吗描述</li><li>首部</li><li>实体</li></ul><h3 id="请求行" tabindex="-1">请求行 <a class="header-anchor" href="#请求行" aria-label="Permalink to &quot;请求行&quot;">​</a></h3><p><code>GET /images/logo.gif HTTP/1.1</code>基本由请求<strong>方法</strong>、<strong>URL</strong>、<strong>协议版本</strong>组成</p><h3 id="请求方法" tabindex="-1">请求方法 <a class="header-anchor" href="#请求方法" aria-label="Permalink to &quot;请求方法&quot;">​</a></h3><p>请求方法分为很多种，最常用的也就是 <code>Get</code> 和 <code>Post</code> 了。虽然请求方法有很多，但是更多的是<strong>传达一个语义</strong>，而不是说 Post 能做的事情 Get 就不能做了。</p><ul><li>Get:应该只被用于获取数据</li><li>Post:用于将实体提交到指定的资源，通常导致在服务器上的状态变化或副作用.</li><li>Put:求有效载荷替换目标资源的所有当前表示,即更新操作.</li><li>Delete:删除指定的资源</li><li>Patch:用于对资源应用部分修改</li><li>Head:请求一个与GET请求的响应相同的响应，但没有响应体.</li><li>Connect:建立一个到由目标资源标识的服务器的隧道</li><li>Options:描述目标资源的通信选项</li><li>Trace:沿着到目标资源的路径执行一个消息环回测试。</li></ul><h3 id="uri" tabindex="-1">URI <a class="header-anchor" href="#uri" aria-label="Permalink to &quot;URI&quot;">​</a></h3><p><code>Uniform Resource Identifier</code>--<strong>统一资源标识符</strong>,用于区分互联网上不同资源</p><p><code>URI</code> 包含 <code>URL</code> 与 <code>URN</code></p><p>URI只能使用ASCII, ASCII 之外的字符不支持显示,因此，URI 引入了编码机制，将所有非 ASCII 码字符和界定符转为十六进制字节值，然后在前面加个%</p><h3 id="url" tabindex="-1">URL <a class="header-anchor" href="#url" aria-label="Permalink to &quot;URL&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>scheme://host:port/path?query</span></span></code></pre></div><ul><li>scheme:协议,HTTP,HTTPS,FTP</li><li>host:主机名,sugarat.top</li><li>port:端口号,默认80,https默认443</li><li>path:资源路径</li><li>query:用于查询的参数</li></ul><h3 id="副作用和幂等" tabindex="-1">副作用和幂等 <a class="header-anchor" href="#副作用和幂等" aria-label="Permalink to &quot;副作用和幂等&quot;">​</a></h3><p><code>副作用</code>指对服务器上的资源做改变，搜索是无副作用的，注册是副作用的</p><p><code>幂等</code>指发送 M 和 N 次请求（两者不相同且都大于 1），服务器上资源的状态一致，比如注册 10 个和 11 个帐号是不幂等的，对文章进行更改 10 次和 11 次是幂等的。因为前者是多了一个账号（资源），后者只是更新同一个资源。</p><h3 id="post-和-get-的区别" tabindex="-1">Post 和 Get 的区别 <a class="header-anchor" href="#post-和-get-的区别" aria-label="Permalink to &quot;Post 和 Get 的区别&quot;">​</a></h3><p>从使用场景上来说:</p><ul><li>Get多用于无副作用,幂等:例如搜索</li><li>Post多用于有副作用,不幂等:例如注册</li></ul><p>从技术上说:</p><ul><li>Get会缓存,Post不能</li><li>Post相对与Get安全一点(Get请求参数包含在Url中,也可以写在body里面),但抓包情况下都是一样的</li><li>URL有长度限制，会影响 Get 请求，但是这个长度限制是浏览器规定的</li><li>Post 支持更多的编码类型且不对数据类型限制,GET 只能进行 URL 编码，只能接收 ASCII 字符</li></ul><h3 id="首部" tabindex="-1">首部 <a class="header-anchor" href="#首部" aria-label="Permalink to &quot;首部&quot;">​</a></h3><p><strong>注意:</strong></p><ul><li>字段名不区分大小写</li><li>字段名不允许出现空格，不可以出现下划线<code>_</code></li><li>字段名后面必须紧接着<code>:</code></li></ul><p>部分首部通用</p><ul><li>请求首部</li><li>响应首部</li><li>实体首部</li></ul><p><strong>通用首部</strong></p><table tabindex="0"><thead><tr><th style="text-align:center;">字段</th><th style="text-align:center;">作用</th></tr></thead><tbody><tr><td style="text-align:center;">Cache-Control</td><td style="text-align:center;">控制缓存的行为</td></tr><tr><td style="text-align:center;">Connection</td><td style="text-align:center;">浏览器想要优先使用的连接类型，比如 keep-alive</td></tr><tr><td style="text-align:center;">Date</td><td style="text-align:center;">创建报文时间</td></tr><tr><td style="text-align:center;">Pragma</td><td style="text-align:center;">报文指令</td></tr><tr><td style="text-align:center;">Via</td><td style="text-align:center;">代理服务器相关信息</td></tr><tr><td style="text-align:center;">Transfer-Encoding</td><td style="text-align:center;">传输编码方式</td></tr><tr><td style="text-align:center;">Upgrade</td><td style="text-align:center;">要求客户端升级协议</td></tr><tr><td style="text-align:center;">Warning</td><td style="text-align:center;">在内容中可能存在错误</td></tr></tbody></table><p><strong>请求首部</strong></p><table tabindex="0"><thead><tr><th style="text-align:center;">字段</th><th style="text-align:center;">作用</th></tr></thead><tbody><tr><td style="text-align:center;">Accept</td><td style="text-align:center;">能正确接收的媒体类型(application/json)</td></tr><tr><td style="text-align:center;">Accept-Charset</td><td style="text-align:center;">能正确接收的字符集</td></tr><tr><td style="text-align:center;">Accept-Encoding</td><td style="text-align:center;">能正确接收的编码格式列表(gzip)</td></tr><tr><td style="text-align:center;">Accept-Language</td><td style="text-align:center;">能正确接收的语言列表(zh-CN, zh, en)</td></tr><tr><td style="text-align:center;">Host</td><td style="text-align:center;">访问资源所在的主机名</td></tr><tr><td style="text-align:center;">If-Match</td><td style="text-align:center;">值与请求资源ETag相同才会处理请求</td></tr><tr><td style="text-align:center;">If-None-Match</td><td style="text-align:center;">值与请求资源ETag不相同才会处理请求</td></tr><tr><td style="text-align:center;">User-Agent</td><td style="text-align:center;">发送请求的客户端信息</td></tr><tr><td style="text-align:center;">Referer</td><td style="text-align:center;">浏览器所访问的前一个页面</td></tr><tr><td style="text-align:center;"><strong>响应首部</strong></td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">字段</td><td style="text-align:center;">作用</td></tr><tr><td style="text-align:center;">:----------------:</td><td style="text-align:center;">:------------------------:</td></tr><tr><td style="text-align:center;">Age</td><td style="text-align:center;">资源在代理缓存中存在的时间</td></tr><tr><td style="text-align:center;">Location</td><td style="text-align:center;">客户端重定向到某个 URL</td></tr><tr><td style="text-align:center;">Proxy-Authenticate</td><td style="text-align:center;">向代理服务器发送验证信息</td></tr><tr><td style="text-align:center;">Server</td><td style="text-align:center;">服务器名字</td></tr></tbody></table><p><strong>实体首部</strong></p><table tabindex="0"><thead><tr><th style="text-align:center;">字段</th><th style="text-align:center;">作用</th></tr></thead><tbody><tr><td style="text-align:center;">Content-Length</td><td style="text-align:center;">告知客户端资源长度</td></tr><tr><td style="text-align:center;">Expires</td><td style="text-align:center;">告知客户端资源失效日期</td></tr><tr><td style="text-align:center;">Last-Modified</td><td style="text-align:center;">告知客户端资源最后一次修改的时间</td></tr></tbody></table><p><strong><a href="./../../bigWeb/browser/storage.html#Cookie">cookie</a></strong></p><table tabindex="0"><thead><tr><th style="text-align:center;">字段</th><th style="text-align:center;">作用</th></tr></thead><tbody><tr><td style="text-align:center;">Cookie</td><td style="text-align:center;">请求时添加cookie</td></tr><tr><td style="text-align:center;">Set-Cookie</td><td style="text-align:center;">响应时服务端传回的cookie</td></tr></tbody></table><p><strong>压缩</strong></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 发送端</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Content</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Encoding</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: gzip</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 接收端</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Accept</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Encoding</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: gizp</span></span></code></pre></div><h3 id="实体" tabindex="-1">实体 <a class="header-anchor" href="#实体" aria-label="Permalink to &quot;实体&quot;">​</a></h3><p>具体传输的数据，即body部分</p><ul><li>请求报文:请求体</li><li>响应报文:响应体</li></ul><h3 id="状态码" tabindex="-1">状态码 <a class="header-anchor" href="#状态码" aria-label="Permalink to &quot;状态码&quot;">​</a></h3><p><strong>1xx协议处理的中间状态</strong></p><ul><li><code>101</code> 在HTTP升级为WebSocket的时候，如果服务器同意变更，就会发送状态码 101</li></ul><p><strong>2xx成功</strong></p><ul><li><code>200</code> 客户端的请求被服务端正确处理</li><li><code>204</code> 请求成功但响应报文不包含实体的主体部分</li><li>206 范围请求,客户端进行了部分请求,服务端返回指定部分的内容</li><li>205 与204作用一致但要求请求方重置内容</li></ul><p><strong>3xx重定向</strong></p><ul><li><code>301</code> 永久性重定向,表示资源已被分配了新的url</li><li><code>302</code> 临时性重定向,表示资源临时被分配了新的url</li><li><code>304</code> 当客户端拥有可能过期的缓存时，会携带缓存的标识 etag、时间等信息询问服务器缓存是否仍可复用，而304是告诉客户端可以 复用缓存。</li><li>303 资源存在另一个url,服务端要求客户端使用get请求</li><li>307 临时重定向,向新的url发送同样的请求</li></ul><p><strong>4XX客户端错误</strong></p><ul><li><code>400</code> 请求报文存在语法错误</li><li><code>401</code> 发送的请求需要有通过 HTTP 认证的认证信息</li><li><code>403</code> 对请求资源的访问被服务器拒绝,资源允许访问,但请求不满足条件</li><li><code>404</code> 在服务器上没有找到请求的资源</li><li><code>405</code> 当前的请求方法不被允许</li><li><code>415</code> 不支持的媒体类型,检查Content-Type</li></ul><p><strong>5XX 服务器错误</strong></p><ul><li><code>500</code> 服务器端在收到请求后后，执行相关动作时发生了错误</li><li><code>502</code> bad gate无效网关</li><li>501 表示服务器不支持当前请求所需要的某个功能</li><li>503 表明服务器暂时处于超负载或正在停机维护，无法处理请求</li></ul><h3 id="http特点" tabindex="-1">HTTP特点 <a class="header-anchor" href="#http特点" aria-label="Permalink to &quot;HTTP特点&quot;">​</a></h3><ul><li>请求-应答</li><li>无状态</li></ul><h3 id="http缺点" tabindex="-1">HTTP缺点 <a class="header-anchor" href="#http缺点" aria-label="Permalink to &quot;HTTP缺点&quot;">​</a></h3><ul><li>通信使用明文，可能被窃听</li><li>不验证通信方的身份，可能遭遇伪装</li><li>无法证明报文的完整性，有可能遭遇篡改</li></ul><h2 id="https" tabindex="-1">HTTPS <a class="header-anchor" href="#https" aria-label="Permalink to &quot;HTTPS&quot;">​</a></h2><blockquote><p>HTTP + 加密 + 认证 + 完整性保护 = HTTPS</p></blockquote><ul><li>基于HTTP协议，通过SSL或TLS提供加密处理数据、验证对方身份以及数据完整性保护</li><li>HTTPS是在HTTP上建立SSL加密层，并对传输数据进行加密，是HTTP协议的安全版</li></ul><p><strong>与HTTP区别</strong></p><ul><li>HTTP是明文传输的</li><li>http(80) 和 https(443) 使用不同的连接方式</li><li>HTTP 页面响应速度比 HTTPS 快，HTTP 使用 TCP 三次握手建立连接，客户端和服务器需要交换 3 个包</li><li>HTTPS 是建构在 SSL/TLS 之上的 HTTP 协议,HTTPS 比 HTTP 要更耗费服务器资源</li><li>HTTPS除了 TCP 的三个包，还要加上 ssl 握手需要的 9 个包,一共是 12 个包。</li><li>HTTPS是在HTTP上建立SSL/TLS加密层，并对传输数据进行加密，是HTTP协议的安全版。 <img src="`+a+'" alt="图片" loading="lazy"></li></ul><p><strong>特点</strong></p><ul><li><code>通过抓包获取到的数据不是明文传输的</code></li><li>内容加密：采用混合加密技术，中间者无法直接查看明文内容</li><li>验证身份：通过证书认证客户端访问的是自己的服务器</li><li>保护数据完整性：防止传输的内容被中间人冒充或者篡改</li></ul><p><strong>缺点</strong></p><ul><li>性能损耗</li><li>增加延时</li><li>消耗较多的CPU资源</li></ul><p><strong>优化</strong></p><ul><li>CDN</li><li>回话缓存</li></ul><h2 id="ssl" tabindex="-1">SSL <a class="header-anchor" href="#ssl" aria-label="Permalink to &quot;SSL&quot;">​</a></h2><h2 id="tls" tabindex="-1">TLS <a class="header-anchor" href="#tls" aria-label="Permalink to &quot;TLS&quot;">​</a></h2><blockquote><p>TLS是传输层加密协议，前身是SSL协议</p></blockquote><p>HTTPS 还是通过了 HTTP 来传输信息，但是信息通过 TLS 协议进行了加密</p><p>TLS 协议位于传输层之上，应用层之下。</p><p>TLS/SSL的功能实现主要依赖于三类基本算法：</p><ul><li><code>散列函数 Hash</code>:MD5,SHA,SHA256---完成校验</li><li><code>对称加密 1-1</code>:AES,DES,RC4---信息加密</li><li><code>非对称加密 1-N</code>:RSA,ECC,DH---身份验证秘钥协商</li></ul><blockquote><p>利用非对称加密实现身份认证和密钥协商，对称加密算法采用协商的密钥对数据加密，基于散列函数验证信息的完整性</p></blockquote><p><strong>对称加密：</strong></p><p>对称加密就是两边拥有相同的秘钥，两边都知道如何将密文加密解密。</p><p>这种加密方式固然很好，但是问题就在于如何让双方知道秘钥。因为传输数据都是走的网络，如果将秘钥通过网络的方式传递的话，一旦秘钥被截获就没有加密的意义的。</p><p><strong>非对称加密：</strong></p><p>有公钥私钥之分，公钥所有人都可以知道，可以将数据用公钥加密，但是将数据解密必须使用私钥解密，私钥只有分发公钥的一方才知道。</p><p>这种加密方式就可以完美解决对称加密存在的问题。假设现在两端需要使用对称加密，那么在这之前，可以先使用非对称加密交换秘钥。</p><p>简单流程如下：首先服务端将公钥公布出去，那么客户端也就知道公钥了。接下来客户端创建一个秘钥，然后通过公钥加密并发送给服务端，服务端接收到密文以后通过私钥解密出正确的秘钥，这时候两端就都知道秘钥是什么了。</p><p><strong>TLS1.2握手过程</strong></p><ol><li>客户端发出请求: <ul><li>一个随机值(用于生成对话秘钥)</li><li>支持的协议</li><li>支持加密方式</li><li>支持压缩的方法</li></ul></li><li>服务端收到客户端的请求，向客户端发出回应: <ul><li>一个随机值(用于生成对话秘钥)</li><li>确定使用的协议</li><li>确定使用的加密方式</li><li>发送自己的证书（如果需要验证客户端证书需要说明）</li></ul></li><li>客户端收到服务端的证书并验证是否有效，如果证书没问题,向服务端发送一个请求: <ul><li>生成一个随机值(用证书公钥加密)</li><li>编码改变通知(随后的信息将使用双方商定的加密方法和秘钥发送)</li><li>客户端握手结束通知(前面发送的所有内容的hash值，用来提供给服务端校验)</li></ul></li><li>服务端最后响应 <ul><li>服务器收到客户端的第三个随机数之后(用私钥解密)结合之前的两个明文随机数，计算生成本次会话所用的&quot;会话密钥&quot;</li><li>编码改变通知(随后的信息都将用双方商定的加密方法和密钥发送)</li><li>服务器握手结束通知(前面发送的所有内容的hash值，用来提供给客户端校验)</li></ul></li></ol><p>通过以上步骤可知，在 TLS 握手阶段，两端使用非对称加密的方式来通信，实现身份验证并协商对称加密使用的密钥,但是因为非对称加密损耗的性能比对称加密大，所以在正式传输数据时，两端使用对称加密的方式通信。不同的节点之间采用的对称密钥不同，从而可以保证信息只能通信双方获取</p><p><strong>TLS1.3</strong> TLS1.3 中废除了非常多的加密算法,如果私钥泄露,那么中间人可以破解所有密文</p><p>TLS1.3 在 TLS1.2 的基础上废除了大量的算法，提升了安全性。同时利用会话复用节省了重新生成密钥的时间，利用 PSK 做到了0-RTT连接。</p><h2 id="http2" tabindex="-1">HTTP2 <a class="header-anchor" href="#http2" aria-label="Permalink to &quot;HTTP2&quot;">​</a></h2><p><a href="https://http2.akamai.com/demo" target="_blank" rel="noreferrer">感受http2</a></p><p>HTTP/2 相比于 HTTP/1，可以说是大幅度提高了网页的性能。</p><p>在 HTTP/1 中,浏览器限制了同一个域名下的请求数量（Chrome 下一般是限制六个连接），当页面中需要请求很多资源的时候，队头阻塞（Head of line blocking）会导致在达到最大请求数量时，剩余的资源需要等待其他资源请求完成后才能发起请求。</p><ul><li>HTTP/2 中引入了多路复用的技术，这个技术可以只通过一个 TCP 连接就可以传输所有的请求数据。多路复用很好的解决了浏览器限制同一个域名下的请求数量的问题，同时也间接更容易实现全速传输</li><li>在之前的 HTTP 版本中，我们是通过文本的方式传输数据。在 HTTP/2 中引入了新的编码机制，所有传输的数据都会被分割，并采用二进制格式编码。</li></ul><h3 id="多路复用" tabindex="-1">多路复用 <a class="header-anchor" href="#多路复用" aria-label="Permalink to &quot;多路复用&quot;">​</a></h3><p>在 HTTP/2 中，有两个非常重要的概念，分别是:</p><ul><li><strong>帧（frame）</strong> 代表最小的数据单位，每个帧会标识出该帧属于哪个流</li><li><strong>流（stream）</strong> 是多个帧组成的数据流</li></ul><p>多路复用，就是在一个 TCP 连接中可以存在多条流。换句话说，也就是可以发送多个请求，对端可以通过帧中的标识知道属于哪个请求。通过这个技术，可以避免 HTTP 旧版本中的队头阻塞问题，极大的提高传输性能。</p><h3 id="header-压缩" tabindex="-1">Header 压缩 <a class="header-anchor" href="#header-压缩" aria-label="Permalink to &quot;Header 压缩&quot;">​</a></h3><p>在 HTTP/1 中，我们使用文本的形式传输 header，在 header 携带 cookie 的情况下，可能每次都需要重复传输几百到几千的字节。</p><p>在 HTTP /2 中，使用了 HPACK 压缩格式对传输的 header 进行编码，减少了 header 的大小。并在两端维护了索引表，用于记录出现过的 header ，后面在传输过程中就可以传输已经记录过的 header 的键名，对端收到数据后就可以通过键名找到对应的值。</p><h3 id="服务端-push" tabindex="-1">服务端 Push <a class="header-anchor" href="#服务端-push" aria-label="Permalink to &quot;服务端 Push&quot;">​</a></h3><p>在 HTTP/2 中，服务端可以在客户端某个请求后，主动推送其他资源。</p><p>可以想象以下情况，某些资源客户端是一定会请求的，这时就可以采取服务端 push 的技术，提前给客户端推送必要的资源，这样就可以相对减少一点延迟时间。</p><h3 id="设置请求优先级" tabindex="-1">设置请求优先级 <a class="header-anchor" href="#设置请求优先级" aria-label="Permalink to &quot;设置请求优先级&quot;">​</a></h3><p><img src="'+r+'" alt="图片" loading="lazy"></p><h3 id="如何使用" tabindex="-1">如何使用? <a class="header-anchor" href="#如何使用" aria-label="Permalink to &quot;如何使用?&quot;">​</a></h3><ul><li>使用Nginx搭建HTTP2服务器</li></ul><h3 id="使用条件" tabindex="-1">使用条件 <a class="header-anchor" href="#使用条件" aria-label="Permalink to &quot;使用条件&quot;">​</a></h3><ul><li><a href="https://github.com/http2/http2-spec/wiki/Implementations" target="_blank" rel="noreferrer">支持Http2的服务端与客户端</a></li><li>域名就必须是https(基于TLS/1.2或以上版本的加密连接)</li><li>服务器的openssl版本必须大于1.0.2</li></ul><h2 id="http-3" tabindex="-1">http/3 <a class="header-anchor" href="#http-3" aria-label="Permalink to &quot;http/3&quot;">​</a></h2><p>因为 HTTP/2 使用了多路复用，一般来说同一域名下只需要使用一个 TCP 连接。当这个连接中出现了丢包的情况，那就会导致 HTTP/2 的表现情况反倒不如 HTTP/1 了</p><ul><li>出现丢包的情况下，整个 TCP 都要开始等待重传，也就导致了后面的所有数据都被阻塞了。</li><li>对于 HTTP/1 来说，可以开启多个 TCP 连接，出现这种情况反到只会影响其中一个连接，剩余的 TCP 连接还可以正常传输数据。</li></ul><p>基于这个原因，Google 就更起炉灶搞了一个基于 UDP 协议的 QUIC 协议，并且使用在了 HTTP/3 上</p><h2 id="quic" tabindex="-1">QUIC <a class="header-anchor" href="#quic" aria-label="Permalink to &quot;QUIC&quot;">​</a></h2><p>QUIC 基于 UDP，在原本的基础上新增了很多功能，比如:</p><ul><li>多路复用</li><li>0-RTT</li><li>使用 TLS1.3 加密</li><li>流量控制</li><li>有序交付</li><li>重传</li><li>...</li></ul><blockquote><p>一种全新的基于UDP的web开发协议。可以用一个公式大致概括：TCP + TLS + HTTP2 = UDP + QUIC + HTTP2’s API</p></blockquote><blockquote><p>从公式可看出：QUIC协议虽然是基于UDP，但它不但具有TCP的可靠性、拥塞控制、流量控制等，且在TCP协议的基础上做了一些改进，比如避免了队首阻塞；另外，QUIC协议具有TLS的安全传输特性，实现了TLS的保密功能，同时又使用更少的RTT建立安全的会话。</p></blockquote><h3 id="多路复用-1" tabindex="-1">多路复用 <a class="header-anchor" href="#多路复用-1" aria-label="Permalink to &quot;多路复用&quot;">​</a></h3><blockquote><p>无队头阻塞的多路复用</p></blockquote><p>QUIC 原生实现了这个功能，并且传输的单个数据流可以保证有序交付且不会影响其他的数据流，这样的技术就解决了之前 TCP 存在的问题。</p><p>并且 QUIC 在移动端的表现也会比 TCP 好:</p><ul><li>因为 TCP 是基于 IP 和端口去识别连接的，这种方式在多变的移动端网络环境下是很脆弱的。</li><li>QUIC 是通过 ID 的方式去识别一个连接，不管你网络环境如何变化，只要 ID 不变，就能迅速重连上。</li></ul><h3 id="_0-rtt" tabindex="-1">0-RTT <a class="header-anchor" href="#_0-rtt" aria-label="Permalink to &quot;0-RTT&quot;">​</a></h3><p><strong>与其它协议比较</strong></p><ul><li>TCP建立链接需要三次握手,每次链接需要额外的RTT</li><li>加入了TLS需要额外的RTT</li></ul><p><strong>0-RTT情况</strong></p><p>通过使用类似 TCP 快速打开的技术，缓存当前会话的上下文，在下次恢复会话的时候，只需要将之前的缓存传递给服务端验证通过就可以进行传输了。</p><p><strong>1-RTT情况</strong> 新的QUIC连接至少需要1 RTT才能完成握手</p><p><img src="'+n+'" alt="图片" loading="lazy"></p><h3 id="纠错机制" tabindex="-1">纠错机制 <a class="header-anchor" href="#纠错机制" aria-label="Permalink to &quot;纠错机制&quot;">​</a></h3><p>假如说这次我要发送三个包，那么协议会算出这三个包的异或值并单独发出一个校验包，也就是总共发出了四个包。</p><p>当出现其中的非校验包丢包的情况时，可以通过另外三个包计算出丢失的数据包的内容。</p><p>当然<strong>这种技术只能使用在丢失一个包的情况</strong>下，如果出现丢失多个包就不能使用纠错机制了，只能使用重传的方式了。</p><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><ul><li>HTTP/2 通过多路复用、二进制流、Header 压缩等等技术，极大地提高了性能，但是还是存在着问题的</li><li>QUIC 基于 UDP 实现，是 HTTP/3 中的底层支撑协议，该协议基于 UDP，又取了 TCP 中的精华，实现了即快又可靠的协议</li></ul><h2 id="http1-1-如何解决-http-的队头阻塞问题" tabindex="-1">HTTP1.1 如何解决 HTTP 的队头阻塞问题？ <a class="header-anchor" href="#http1-1-如何解决-http-的队头阻塞问题" aria-label="Permalink to &quot;HTTP1.1 如何解决 HTTP 的队头阻塞问题？&quot;">​</a></h2><h3 id="域名分片" tabindex="-1">域名分片 <a class="header-anchor" href="#域名分片" aria-label="Permalink to &quot;域名分片&quot;">​</a></h3><p>使用多个指向同一服务器的二级域名</p><div class="tip custom-block"><p class="custom-block-title">参考</p><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods" target="_blank" rel="noreferrer">MDN Http方法</a><br><a href="https://yuchengkai.cn/docs/cs/#post-%E5%92%8C-get-%E7%9A%84%E5%8C%BA%E5%88%AB" target="_blank" rel="noreferrer">http</a><br><a href="https://blog.csdn.net/coloriy/article/details/88418258" target="_blank" rel="noreferrer">CSDN:QUIC（Quick UDP Internet Connections）协议：全新的基于UDP的web开发协议</a></p></div>',146),d=[s];function h(c,p,T,g,u,P){return e(),l("div",{"data-pagefind-body":!0,"data-pagefind-meta":"base64:JTdCJTIyc2lkZWJhciUyMiUzQSU3QiUyMnRpdGxlJTIyJTNBJTIySFRUUCVFNSU4RCU4RiVFOCVBRSVBRSUyMiUyQyUyMnN0ZXAlMjIlM0EzJTdEJTJDJTIyaXNUaW1lTGluZSUyMiUzQXRydWUlMkMlMjJ0aXRsZSUyMiUzQSUyMmh0dHAlRTUlOEQlOEYlRTglQUUlQUUlMjIlMkMlMjJkYXRlJTIyJTNBMTU4NjgyMjQwMDAwMCUyQyUyMnRhZ3MlMjIlM0ElNUIlMjIlRTglQUUlQTElRTclQUUlOTclRTYlOUMlQkElRTUlOUYlQkElRTclQTElODAlMjIlMkMlMjIlRTglQUUlQTElRTclQUUlOTclRTYlOUMlQkElRTclQkQlOTElRTclQkIlOUMlMjIlNUQlMkMlMjJjYXRlZ29yaWVzJTIyJTNBJTVCJTIyJUU4JUFFJUExJUU3JUFFJTk3JUU2JTlDJUJBJUU1JTlGJUJBJUU3JUExJTgwJTIyJTVEJTdE"},d)}const x=t(o,[["render",h]]);export{y as __pageData,x as default};

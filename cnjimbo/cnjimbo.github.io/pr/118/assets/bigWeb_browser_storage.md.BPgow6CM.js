import{_ as t,o as e,c as i,a5 as a}from"./chunks/framework.peDzUFGn.js";const u=JSON.parse('{"title":"浏览器-本地存储","description":"","frontmatter":{"sidebar":{"title":"本地存储","step":4},"isTimeLine":true,"title":"浏览器-本地存储","date":"2020-04-14T00:00:00.000Z","tags":["大前端","浏览器"],"categories":["大前端"]},"headers":[],"relativePath":"bigWeb/browser/storage.md","filePath":"bigWeb/browser/storage.md","lastUpdated":1719297432000}'),l={name:"bigWeb/browser/storage.md"},s=a(`<h1 id="本地存储" tabindex="-1">本地存储 <a class="header-anchor" href="#本地存储" aria-label="Permalink to &quot;本地存储&quot;">​</a></h1><p>在目前的现代浏览器中主要有以下几种存储方案</p><ul><li>cookie</li><li>localStorage</li><li>sessionStorage</li><li>indexDB</li></ul><p>下面为大家详细道来各种方案的适用场景与缺点</p><h2 id="cookie" tabindex="-1">Cookie <a class="header-anchor" href="#cookie" aria-label="Permalink to &quot;Cookie&quot;">​</a></h2><h3 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h3><p>主要为了辨别用户身份而储存在用户本地终端上的数据</p><p>可以记录用户对网站的访问情况（\b\b停留时长，访问深度，记录账号密码，在线状态等）</p><p>主要由服务端生成然后下发，客户端也可控制其内容</p><p>每次发送请求都会自动携带对应域名的cookie</p><h3 id="如何使用" tabindex="-1">如何使用 <a class="header-anchor" href="#如何使用" aria-label="Permalink to &quot;如何使用&quot;">​</a></h3><h4 id="服务端" tabindex="-1">服务端 <a class="header-anchor" href="#服务端" aria-label="Permalink to &quot;服务端&quot;">​</a></h4><p>服务端在响应头(Response Header)中添加一个<code>Set-Cookie</code>字段</p><p><strong>示例</strong></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Set</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Cookie</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;name=value;expires=session;path=/;domain=.sugarat.top;HttpOnly;secure;sameSite=lax&quot;</span></span></code></pre></div><h4 id="客户端-浏览器" tabindex="-1">客户端（浏览器） <a class="header-anchor" href="#客户端-浏览器" aria-label="Permalink to &quot;客户端（浏览器）&quot;">​</a></h4><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">document.cookie</span></span></code></pre></div><p>可以通过此 API获取或者修改cookie</p><h3 id="set-cookie" tabindex="-1">Set-Cookie <a class="header-anchor" href="#set-cookie" aria-label="Permalink to &quot;Set-Cookie&quot;">​</a></h3><p><strong>⭐Set-Cookie 字段的属性介绍</strong></p><table tabindex="0"><thead><tr><th style="text-align:center;">cookie属性</th><th style="text-align:center;">简介</th><th style="text-align:center;">特殊说明</th></tr></thead><tbody><tr><td style="text-align:center;">name</td><td style="text-align:center;">键</td><td style="text-align:center;">-</td></tr><tr><td style="text-align:center;">value</td><td style="text-align:center;">值</td><td style="text-align:center;">-</td></tr><tr><td style="text-align:center;">Expires</td><td style="text-align:center;">过期时间</td><td style="text-align:center;">一个固定的时间</td></tr><tr><td style="text-align:center;">Max-Age</td><td style="text-align:center;">过期时间</td><td style="text-align:center;">收到此cookie后多久后过期，优先级大于Expires</td></tr><tr><td style="text-align:center;">Domain</td><td style="text-align:center;">可以送达的主机名(域名)</td><td style="text-align:center;">-</td></tr><tr><td style="text-align:center;">path</td><td style="text-align:center;">生效路径</td><td style="text-align:center;">路径必须出现在要请求的资源的路径中才可以发送</td></tr><tr><td style="text-align:center;">Secure</td><td style="text-align:center;">安全标志</td><td style="text-align:center;">只有使用HTTPS协议的时候才会携带此cookie</td></tr><tr><td style="text-align:center;">HTTPOnly</td><td style="text-align:center;">安全标志</td><td style="text-align:center;">不允许使用脚本去更改/获取这个cookie</td></tr><tr><td style="text-align:center;">SameSite</td><td style="text-align:center;">安全标志</td><td style="text-align:center;">控制跨站请求获取cookie</td></tr></tbody></table><p><strong>⭐属性补充说明</strong></p><ul><li>Expires：其值为默认session,即关闭浏览器时此cookie就过期失效</li><li>Max-Age：不同取值范围不同效果 <ul><li>大于0：会将cookie存到本地文件中</li><li>等于0：立即删除</li><li>小于0：等价于会话性cookie</li><li>优先级大于Expires</li></ul></li><li>Domain：指定了 Cookie 可以送达的主机名 <ul><li>没有指定：默认值为当前文档访问地址中的主机部分(不包含子域名)</li><li>如果设置为<code>.a.com</code>那么<code>a.com</code>,<code>a.a.com</code>，<code>b.a.com</code>等都能访问,即<code>a.com</code>的子域名都可以访问到这个cokie</li></ul></li><li>HTTPOnly <ul><li>防止客户端脚本通过 <code>document.cookie</code> 方式访问或者更改 此Cookie</li><li>有助于避免 XSS 攻击</li></ul></li><li>SameSite:可以设置让 Cookie 在跨站请求时不会被发送，从而可以阻止跨站请求伪造攻击（CSRF） <ul><li>Strict:仅允许一方请求携带 Cookie，即浏览器将只发送相同站点请求的 Cookie，当前网页 URL 与请求目标 URL 完全一致才发送</li><li>Lax:允许部（导航到目标网址的 Get 请求）分第三方请求携带 Cookie</li><li>None:无论是否跨站都会发送 Cookie</li><li><strong>之前默认值是 None ，在Chrome稳定版80及更高版本上默认是 Lax</strong></li></ul></li></ul><p><strong>⭐SameSite = lax 的影响</strong></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Set</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Cookie</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;name=value;SameSite=Lax;&#39;</span></span></code></pre></div><p>大多数情况不发送第三方 Cookie，但是导航到目标网址的 Get 请求除外</p><ul><li>超链接</li><li>GET表单</li><li>预加载请求</li></ul><table tabindex="0"><thead><tr><th style="text-align:center;">请求类型</th><th style="text-align:center;">示例</th><th style="text-align:center;">SameSite = lax 是否发送cooie</th></tr></thead><tbody><tr><td style="text-align:center;">超链接</td><td style="text-align:center;">&lt;a\\ href=&quot;...&quot;&gt;&lt;/a&gt;</td><td style="text-align:center;">✅</td></tr><tr><td style="text-align:center;">GET表单</td><td style="text-align:center;">&lt;form method=&quot;GET&quot; action=&quot;...&quot;&gt;&lt;/form&gt;</td><td style="text-align:center;">✅</td></tr><tr><td style="text-align:center;">预加载</td><td style="text-align:center;">&lt;link rel=&quot;prerender&quot; href=&quot;...&quot;/&gt;</td><td style="text-align:center;">✅</td></tr><tr><td style="text-align:center;">POST 表单</td><td style="text-align:center;">&lt;form method=&quot;POST&quot; action=&quot;...&quot;&gt;&lt;/form&gt;</td><td style="text-align:center;">❌</td></tr><tr><td style="text-align:center;">image</td><td style="text-align:center;">&lt;img src=&quot;...&quot; /&gt;</td><td style="text-align:center;">❌</td></tr><tr><td style="text-align:center;">iframe</td><td style="text-align:center;">&lt;iframe src=&quot;...&quot;&gt;&lt;/iframe&gt;</td><td style="text-align:center;">❌</td></tr><tr><td style="text-align:center;">ajax</td><td style="text-align:center;">fetch(url)</td><td style="text-align:center;">❌</td></tr></tbody></table><p><strong>⭐Cookie 的作用域</strong></p><p>Domain 和 Path 标识共同定义了 Cookie 的作用域：即哪些URL的请求 会携带 目标Cookie</p><h3 id="用途" tabindex="-1">用途 <a class="header-anchor" href="#用途" aria-label="Permalink to &quot;用途&quot;">​</a></h3><ul><li>会话状态管理:（如用户登录状态、账号信息等）</li><li>个性化设置:（如用户自定义设置、主题等）</li><li>用户行为分析：埋点系统（访问深度，停留时长等）</li></ul><h3 id="缺点" tabindex="-1">缺点 <a class="header-anchor" href="#缺点" aria-label="Permalink to &quot;缺点&quot;">​</a></h3><ul><li>容量问题：有上限，最大只能有 4KB</li><li>性能问题：同一个域名下的所有请求，都会携带 Cookie，某些请求（a,img,link等标签发出的请求）可能不需要此cookie，会加大传输的头部，损耗一定时空开销</li><li>安全问题：客户端可以通过一定手段（脚本，devtools，本地存储的文件，修改host文件）获取到，存在XSS,CSRF等安全问题</li></ul><h3 id="解决安全问题的方案" tabindex="-1">解决安全问题的方案 <a class="header-anchor" href="#解决安全问题的方案" aria-label="Permalink to &quot;解决安全问题的方案&quot;">​</a></h3><ul><li>减短cookie的有效时间</li><li>添加HttpOnly属性：防止本地脚本读取cookie</li><li>服务端对传送的cookie加密</li><li>添加Secure属性：使用https协议传输</li><li>设置samesite属性为需要的值：严格卡控cookie的携带范围</li></ul><h2 id="localstorage与sessionstorage" tabindex="-1">localStorage与sessionStorage <a class="header-anchor" href="#localstorage与sessionstorage" aria-label="Permalink to &quot;localStorage与sessionStorage&quot;">​</a></h2><p>浏览器提供的数据存储API，作用相同，生命周期与作用域的不同</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">window.sessionStorage.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">window.localStorage.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">window.sessionStorage.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">window.localStorage.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span></code></pre></div><h3 id="生命周期" tabindex="-1">生命周期 <a class="header-anchor" href="#生命周期" aria-label="Permalink to &quot;生命周期&quot;">​</a></h3><ul><li>localStorage 是持久化的本地存储,永远不会过期,除非手动删除</li><li>sessionStorage 是临时性的本地存储,在会话结束时(关闭页面),存储的内容就被释放</li></ul><h3 id="作用域" tabindex="-1">作用域 <a class="header-anchor" href="#作用域" aria-label="Permalink to &quot;作用域&quot;">​</a></h3><p><code>Local Storage</code>、<code>Session Storage</code> 和 <code>Cookie</code> 都遵循<strong>同源策略</strong></p><p>但Session Storage有特殊之处：即便是相同域名下的两个页面，只要它们不在浏览器的同一个Tab中打开，那么它们的 Session Storage 内容便无法共享</p><h3 id="优点" tabindex="-1">优点 <a class="header-anchor" href="#优点" aria-label="Permalink to &quot;优点&quot;">​</a></h3><ul><li>存储容量大:不同浏览器，针对一个域名的存储容量(大小)可以达到 4-20M（不同编码的字符占用空间大小不一样） <ul><li>一些资料通常说的5M：实际上指的存储内容字符串长度，即<code>length</code>等于 <strong>5*1024*1024</strong>，并不是实际上的内容大小为5Mb并且限制的是 key + value 的字符数不大于 5M(5*1024*1024)</li><li>UTF-8 - 英文：1字节</li><li>UTF-8 - 中文：3字节</li><li>UTF-16 - 中/英文：4字节</li></ul></li><li>存储于客户端，不会服务端发生通信</li></ul><p>关于存储容量的计算demo可以<a href="https://github.com/ATQQ/demos/blob/main/getLocalStoragSize/README.md" target="_blank" rel="noreferrer">跳转查看</a></p><h3 id="缺点-1" tabindex="-1">缺点 <a class="header-anchor" href="#缺点-1" aria-label="Permalink to &quot;缺点&quot;">​</a></h3><ul><li>只能存储字符串，JSON对象需要转换为json string 存储</li><li>只适用于存储少量简单数据</li><li>localStorage需要手动删除</li></ul><h3 id="应用场景" tabindex="-1">应用场景 <a class="header-anchor" href="#应用场景" aria-label="Permalink to &quot;应用场景&quot;">​</a></h3><ul><li>base64图片存储：存储logo</li><li>接口数据持久化：对于依赖于接口(变动周期比较长)生成的内容，可以使用storage存储，以加快首屏渲染</li></ul><h2 id="indexeddb" tabindex="-1">IndexedDB <a class="header-anchor" href="#indexeddb" aria-label="Permalink to &quot;IndexedDB&quot;">​</a></h2><p>运行在浏览器上的非关系型数据库</p><p>依旧受同源策略限制</p><h3 id="优点-1" tabindex="-1">优点 <a class="header-anchor" href="#优点-1" aria-label="Permalink to &quot;优点&quot;">​</a></h3><ul><li>理论上没有存储上线</li><li>可以存储字符串，还可以存储二进制数据</li><li>浏览器提供了一套可简单操作的API</li></ul><h3 id="应用场景-1" tabindex="-1">应用场景 <a class="header-anchor" href="#应用场景-1" aria-label="Permalink to &quot;应用场景&quot;">​</a></h3><ul><li>当数据的复杂度和规模上升到了 LocalStorage 无法解决的程度,就使用IndexDB</li><li>临时存储复杂的数据，如页面中的临时文章</li><li>一些复杂表单内容的离线保存</li></ul><h3 id="使用教程" tabindex="-1">使用教程 <a class="header-anchor" href="#使用教程" aria-label="Permalink to &quot;使用教程&quot;">​</a></h3><p>笔者就不在这里赘述使用方法，网上有更优秀的资料</p><p>下面给大家推荐两篇</p><ul><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/IndexedDB_API/Using_IndexedDB" target="_blank" rel="noreferrer">MDN：使用 IndexedDB</a></li><li><a href="http://www.ruanyifeng.com/blog/2018/07/indexeddb.html" target="_blank" rel="noreferrer">阮一峰：浏览器数据库 IndexedDB 入门教程</a></li></ul><div class="tip custom-block"><p class="custom-block-title">参考</p><ul><li><a href="https://www.chromium.org/updates/same-site" target="_blank" rel="noreferrer">SameSite update 日志</a></li><li><a href="https://developers.google.com/web/tools/chrome-devtools/storage/cookies" target="_blank" rel="noreferrer">devTools Storage</a></li><li><a href="https://www.chromestatus.com/feature/5088147346030592" target="_blank" rel="noreferrer">Chrome Platform Status</a></li><li><a href="https://web.dev/samesite-cookies-explained/" target="_blank" rel="noreferrer">SameSite cookies explained</a></li></ul></div><div style="display:none;" data-pagefind-meta="base64:JTdCJTIyc2lkZWJhciUyMiUzQSU3QiUyMnRpdGxlJTIyJTNBJTIyJUU2JTlDJUFDJUU1JTlDJUIwJUU1JUFEJTk4JUU1JTgyJUE4JTIyJTJDJTIyc3RlcCUyMiUzQTQlN0QlMkMlMjJpc1RpbWVMaW5lJTIyJTNBdHJ1ZSUyQyUyMnRpdGxlJTIyJTNBJTIyJUU2JUI1JThGJUU4JUE3JTg4JUU1JTk5JUE4LSVFNiU5QyVBQyVFNSU5QyVCMCVFNSVBRCU5OCVFNSU4MiVBOCUyMiUyQyUyMmRhdGUlMjIlM0ExNTg2ODIyNDAwMDAwJTJDJTIydGFncyUyMiUzQSU1QiUyMiVFNSVBNCVBNyVFNSU4OSU4RCVFNyVBQiVBRiUyMiUyQyUyMiVFNiVCNSU4RiVFOCVBNyU4OCVFNSU5OSVBOCUyMiU1RCUyQyUyMmNhdGVnb3JpZXMlMjIlM0ElNUIlMjIlRTUlQTQlQTclRTUlODklOEQlRTclQUIlQUYlMjIlNUQlN0Q="></div>`,64),o=[s];function r(n,d,h,c,g,p){return e(),i("div",null,o)}const y=t(l,[["render",r]]);export{u as __pageData,y as default};

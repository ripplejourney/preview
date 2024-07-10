import{_ as e,o as a,c as i,a5 as l}from"./chunks/framework.D-_e7Kjx.js";const r="/preview/cnjimbo/cnjimbo.github.io/pr/173/assets/4d82e4e81e499921a65b73c80034c153.C-PAh8Mi.png",t="/preview/cnjimbo/cnjimbo.github.io/pr/173/assets/b5bae2c72f1d2aed2c09857c1b9e6b5f.ChKPaWgw.png",n="/preview/cnjimbo/cnjimbo.github.io/pr/173/assets/ee2e46cd895e2773a22671fe99571bd3.Cuo3UEk1.png",o="/preview/cnjimbo/cnjimbo.github.io/pr/173/assets/c35d5a583f80ccbeae74544644fbc236.fnuJR8Lf.png",s="/preview/cnjimbo/cnjimbo.github.io/pr/173/assets/1d59bbd832442846c5e15bd05a0fb41a.ChSDIFE4.png",c="/preview/cnjimbo/cnjimbo.github.io/pr/173/assets/564a5318bef5fe8f9318e205a946ed5d.XlHOXdMe.png",d="/preview/cnjimbo/cnjimbo.github.io/pr/173/assets/35a9ae4bce09253ec27336add6d5b113.adYyUMAU.png",p="/preview/cnjimbo/cnjimbo.github.io/pr/173/assets/71b189c9662ae6ebf6c5cbba026bef9b.BmP0lCmM.png",b="/preview/cnjimbo/cnjimbo.github.io/pr/173/assets/61666d5257abea7242b81f73b841366b.DZ1YxS6Q.png",h="/preview/cnjimbo/cnjimbo.github.io/pr/173/assets/bea00144a61781f8effd682a43d36af0.ByIiEPGm.png",g="/preview/cnjimbo/cnjimbo.github.io/pr/173/assets/aad8979fe2c73aa37c626d59cdbcb199.C4c4ue2R.png",m="/preview/cnjimbo/cnjimbo.github.io/pr/173/assets/a0bebb4818ac1c4dcd208871c977fd6b.CAP2-N7F.png",f="/preview/cnjimbo/cnjimbo.github.io/pr/173/assets/a54a6ad8b950bcd35881a91a766d9516.DZlIwpfz.png",y="/preview/cnjimbo/cnjimbo.github.io/pr/173/assets/3a71f093eb7e6a9edd7fc5a44ea5453a.CkFHqg2J.png",u="/preview/cnjimbo/cnjimbo.github.io/pr/173/assets/bbbd1791fb922ff5a3b93bf767da7077.BRpqff8P.png",_="/preview/cnjimbo/cnjimbo.github.io/pr/173/assets/cef4e8d57160ce1e15f55a013fb5c48f.BS7SUABA.png",x="/preview/cnjimbo/cnjimbo.github.io/pr/173/assets/567b27f97e7c8c6d9872d30554ff5aac.B_YOZl1g.png",j="/preview/cnjimbo/cnjimbo.github.io/pr/173/assets/2589d8a0c951eb52926265296d295300.DkT7HzjS.png",P="/preview/cnjimbo/cnjimbo.github.io/pr/173/assets/d2a595575fffd4894aafb90d242169ae.CwVtzINd.png",w="/preview/cnjimbo/cnjimbo.github.io/pr/173/assets/ff09a4dbcd305b2b1fb1811934a1c7c2.Bd1EEY7C.png",v="/preview/cnjimbo/cnjimbo.github.io/pr/173/assets/67cfbd857a8a3e7e7eefa5aac53f696e.DXr8y6o4.png",C="/preview/cnjimbo/cnjimbo.github.io/pr/173/assets/2210f6baef787ab13326a26d02e11783.CR_-3D6c.png",z="/preview/cnjimbo/cnjimbo.github.io/pr/173/assets/028e0cf966f7a0b067ce1f3dc26ede32.BvafUla0.png",q="/preview/cnjimbo/cnjimbo.github.io/pr/173/assets/5373e67f09e2a349074b0ab0c852d134.BImfHf_C.png",I=JSON.parse('{"title":"博客性能优化笔记 | 99分","description":"","frontmatter":{},"headers":[],"relativePath":"essay/dev/2024-blog-perf.md","filePath":"essay/dev/2024-blog-perf.md","lastUpdated":1720544135000}'),S={name:"essay/dev/2024-blog-perf.md"},T=l('<h1 id="博客性能优化笔记-99分" tabindex="-1">博客性能优化笔记 | 99分 <a class="header-anchor" href="#博客性能优化笔记-99分" aria-label="Permalink to &quot;博客性能优化笔记 | 99分&quot;">​</a></h1><p>闲着没事，拿 lighthouse 测了一下博客网站的性能评测，发现诊断出的问题还挺多，就顺手优化了一下。</p><p>这篇文章将记录这个优化的过程。</p><h2 id="优化前后对比" tabindex="-1">优化前后对比 <a class="header-anchor" href="#优化前后对比" aria-label="Permalink to &quot;优化前后对比&quot;">​</a></h2><p>lighthouse 检测结果</p><table tabindex="0"><thead><tr><th style="text-align:center;">优化前</th><th style="text-align:center;">优化后</th></tr></thead><tbody><tr><td style="text-align:center;"><img src="'+r+'" alt="" loading="lazy"></td><td style="text-align:center;"><img src="'+t+'" alt="" loading="lazy"></td></tr></tbody></table><p>性能面板检测结果</p><table tabindex="0"><thead><tr><th style="text-align:center;"></th><th style="text-align:center;">FCP</th><th style="text-align:center;">DOMContentLoaded</th><th style="text-align:center;">LCP</th></tr></thead><tbody><tr><td style="text-align:center;">优化前</td><td style="text-align:center;">764ms</td><td style="text-align:center;">1798ms</td><td style="text-align:center;">1864ms</td></tr><tr><td style="text-align:center;">优化后</td><td style="text-align:center;">496ms</td><td style="text-align:center;">507ms</td><td style="text-align:center;">496ms</td></tr></tbody></table><ul><li>FCP（First Contentful Paint）</li><li>LCP（Largest Contentful Paint）</li></ul><h2 id="检测工具" tabindex="-1">检测工具 <a class="header-anchor" href="#检测工具" aria-label="Permalink to &quot;检测工具&quot;">​</a></h2><p>使用 Chrome 自带的 lighthouse 和 性能面板进行测试。</p><table tabindex="0"><thead><tr><th style="text-align:center;">性能面板</th><th style="text-align:center;">lighthouse</th></tr></thead><tbody><tr><td style="text-align:center;"><img src="'+n+'" alt="" loading="lazy"></td><td style="text-align:center;"><img src="'+o+'" alt="" loading="lazy"></td></tr></tbody></table><h2 id="发现问题" tabindex="-1">发现问题 <a class="header-anchor" href="#发现问题" aria-label="Permalink to &quot;发现问题&quot;">​</a></h2><h3 id="性能面板-performance" tabindex="-1">性能面板 | Performance <a class="header-anchor" href="#性能面板-performance" aria-label="Permalink to &quot;性能面板 | Performance&quot;">​</a></h3><p><em>通过截图可以观察到每个时间的页面变化</em></p><p><img src="'+s+'" alt="" loading="lazy"></p><p>发现的问题：</p><ol><li>文章列表渲染后，文章封面图加载缓慢</li><li>图片完成加载时间过长（封面，头像图片）</li><li>布局渲染期间发生明显变化</li></ol><ul><li>友链列表加载完成后</li><li>左上头像加载完成</li></ul><h3 id="lighthouse" tabindex="-1">lighthouse <a class="header-anchor" href="#lighthouse" aria-label="Permalink to &quot;lighthouse&quot;">​</a></h3><p>测试后会给到优化建议。</p><p><img src="'+c+'" alt="" loading="lazy"></p><p>这里挑一些后面用到的</p><ol start="4"><li>使用新的图片格式（WebP and AVIF）</li><li>减少没用到的CSS文件大小</li><li>img 没有明确的宽高属性</li><li>资源传输压缩（gzip, brotli 等）</li><li>加载适当大小的图片（避免超过要展示的大小）</li><li>避免超大的资源加载阻塞网络（主要是一些超大的图片和js）</li></ol><h2 id="优化过程" tabindex="-1">优化过程 <a class="header-anchor" href="#优化过程" aria-label="Permalink to &quot;优化过程&quot;">​</a></h2><h3 id="图片优化" tabindex="-1">图片优化 <a class="header-anchor" href="#图片优化" aria-label="Permalink to &quot;图片优化&quot;">​</a></h3><p><em>解决：1，2，4，8，9</em></p><p>① 裁剪为渲染的大小</p><p>② 格式调整为WebP格式</p><p>我的图片都是放在图床上的（<a href="https://www.qiniu.com/" target="_blank" rel="noreferrer">七牛云</a>，<a href="https://www.upyun.com/" target="_blank" rel="noreferrer">又拍云</a>，<a href="https://www.bitiful.com/" target="_blank" rel="noreferrer">缤纷云</a>）。</p><p>这一步我直接使用 OSS（对象存储） 提供的图片加载裁剪功能即可。</p><p>配置目标：<code>宽高裁剪为 120px * 80px</code>，格式调整为 <code>WebP</code> 格式。</p><p>配置处理样式示例</p><table tabindex="0"><thead><tr><th style="text-align:center;">七牛云</th><th style="text-align:center;">又拍云</th><th style="text-align:center;">缤纷云</th></tr></thead><tbody><tr><td style="text-align:center;"><img src="'+d+'" alt="" loading="lazy"></td><td style="text-align:center;"><img src="'+p+'" alt="" loading="lazy"></td><td style="text-align:center;"><img src="'+b+'" alt="" loading="lazy"></td></tr></tbody></table><p>使用：在原有的资源上添加对应的后置即可</p><ul><li>七牛云：url<code>~cover.webp</code></li><li>又拍云：url<code>-cover</code></li><li>缤纷云：url<code>!style:cover</code></li></ul><p>代码中的体现↓</p><table tabindex="0"><thead><tr><th style="text-align:center;">封面</th><th style="text-align:center;">友链头像</th><th style="text-align:center;">头像</th></tr></thead><tbody><tr><td style="text-align:center;"><img src="'+h+'" alt="" loading="lazy"></td><td style="text-align:center;"><img src="'+g+'" alt="" loading="lazy"></td><td style="text-align:center;"><img src="'+m+'" alt="" loading="lazy"></td></tr></tbody></table><h3 id="oml2d模型资源优化" tabindex="-1">oml2d模型资源优化 <a class="header-anchor" href="#oml2d模型资源优化" aria-label="Permalink to &quot;oml2d模型资源优化&quot;">​</a></h3><p>博客左下角的看板娘加载优化。</p><p><em>解决：9</em></p><p>① 资源全部放在自己的 OSS 通过CDN加载（有gzip压缩，更快的访问速度）</p><p><img src="'+f+'" alt="" loading="lazy"></p><p>② 将模型用到的PNG图片压缩</p><p>使用之前做的<a href="https://demos.sugarat.top/pages/png-compress/" target="_blank" rel="noreferrer">图片在线压缩工具</a></p><p><img src="'+y+'" alt="" loading="lazy"></p><p>压缩后减少了 88% 的体积，视觉上看不出变化。</p><h3 id="网络优化" tabindex="-1">网络优化 <a class="header-anchor" href="#网络优化" aria-label="Permalink to &quot;网络优化&quot;">​</a></h3><p><em>解决：7，9</em></p><p>① 第三方资源使用 OSS存储 + CDN加载</p><p>② 访问使用 HTTP3/HTTP2</p><p>新的协议加载资源，用上多路复用的特性。</p><p>启用前提资源支持 HTTPS 访问（配置SSL证书），才能启用 HTTP2/3。</p><p>配置 HTTPS 时使用最新的 TLS1.3 版本，更快的加解密速度。</p><p>下面是在各平台开启相关配置示意。</p><table tabindex="0"><thead><tr><th style="text-align:center;">七牛云</th><th style="text-align:center;">又拍云</th><th style="text-align:center;">缤纷云</th></tr></thead><tbody><tr><td style="text-align:center;"><img src="'+u+'" alt="" loading="lazy"></td><td style="text-align:center;"><img src="'+_+'" alt="" loading="lazy"></td><td style="text-align:center;"><img src="'+x+'" alt="" loading="lazy"></td></tr></tbody></table><p>优化前后对比</p><table tabindex="0"><thead><tr><th style="text-align:center;">优化前</th><th style="text-align:center;">优化后</th></tr></thead><tbody><tr><td style="text-align:center;"><img src="'+j+'" alt="" loading="lazy"></td><td style="text-align:center;"><img src="'+P+'" alt="" loading="lazy"></td></tr></tbody></table><h3 id="布局优化" tabindex="-1">布局优化 <a class="header-anchor" href="#布局优化" aria-label="Permalink to &quot;布局优化&quot;">​</a></h3><p><em>解决：3，6</em></p><p><strong>目标：减少触发 “页面回流重绘” 的范围和次数。</strong></p><p>① 针对图片，限定具体渲染的宽高，避免图片加载后布局发生变化</p><p><img src="'+w+'" alt="" loading="lazy"></p><p><img src="'+v+'" alt="" loading="lazy"></p><p>② 针对后渲染区域，限定其容器的宽度，避免渲染后影响布局</p><p><img src="'+C+'" alt="" loading="lazy"></p><h3 id="减少无用代码" tabindex="-1">减少无用代码 <a class="header-anchor" href="#减少无用代码" aria-label="Permalink to &quot;减少无用代码&quot;">​</a></h3><p><em>解决：5</em></p><p>① 移除无用的 js 脚本或者 CSS 资源</p><p>大概看了一下，项目里额外依赖的 element-plus 样式文件占大头。</p><p><img src="'+z+'" alt="" loading="lazy"></p><p>将全量引入，手动调整为按需引入。</p><h2 id="最终效果" tabindex="-1">最终效果 <a class="header-anchor" href="#最终效果" aria-label="Permalink to &quot;最终效果&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="text-align:center;">性能面板</th><th style="text-align:center;">lighthouse</th></tr></thead><tbody><tr><td style="text-align:center;"><img src="'+q+'" alt="" loading="lazy"></td><td style="text-align:center;"><img src="'+t+'" alt="" loading="lazy"></td></tr></tbody></table><p>优化后的性能指标</p><ul><li>FCP（First Contentful Paint）：496ms</li><li>DOMContentLoaded：507ms</li><li>LCP（Largest Contentful Paint）：496ms</li></ul><p>访问 <a href="https://www.dmsrs.org" target="_blank" rel="noreferrer">https://www.dmsrs.org</a> 可以看到效果还是很明显的。</p><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><ol><li>图片：压缩，加载合适尺寸，优先使用 WebP 格式</li><li>网络：HTTPS + HTTP2/3，OSS + CDN</li><li>布局：减少回流重绘范围与次数</li><li>资源：移除无用代码，无用的第三方资源加载</li></ol>',79),k=[T];function D(B,A,H,N,F,L){return a(),i("div",{"data-pagefind-body":!0,"data-pagefind-meta":"base64:JTdCJTIyZGF0ZSUyMiUzQTE3MjA1NDQxMzUwMDAlN0Q="},k)}const O=e(S,[["render",D]]);export{I as __pageData,O as default};

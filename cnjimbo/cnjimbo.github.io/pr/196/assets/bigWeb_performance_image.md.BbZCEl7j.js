import{_ as i,o as s,c as a,a5 as l}from"./chunks/framework.DB0iUW81.js";const y=JSON.parse('{"title":"图片优化","description":"","frontmatter":{"isTimeLine":true,"title":"图片优化","date":"2020-04-14T00:00:00.000Z","tags":["大前端","性能优化"],"categories":["大前端"]},"headers":[],"relativePath":"bigWeb/performance/image.md","filePath":"bigWeb/performance/image.md","lastUpdated":1719297432000}'),n={name:"bigWeb/performance/image.md"},t=l(`<h1 id="图片优化" tabindex="-1">图片优化 <a class="header-anchor" href="#图片优化" aria-label="Permalink to &quot;图片优化&quot;">​</a></h1><h2 id="加载优化" tabindex="-1">加载优化 <a class="header-anchor" href="#加载优化" aria-label="Permalink to &quot;加载优化&quot;">​</a></h2><ul><li>使用css替代部分图片</li><li>小屏幕:使用 CDN 加载，计算出适配屏幕的宽度，然后去请求相应裁剪好的图片</li><li>小图使用base64</li><li>雪碧图</li><li>图片格式选择 <ul><li>能够显示 WebP 格式的浏览器使用 WebP 格式</li><li>小图使用 PNG</li><li>大部分图标使用 SVG 代替</li><li>照片使用 JPEG</li></ul></li></ul><p><strong>生成base64方法</strong></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> getBase64URL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Promise</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">resolve</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> img </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> canvas </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createElement</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;canvas&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        img.src </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> url</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        img.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">onload</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            canvas.width </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> width </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> width </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> img.width;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            canvas.height </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> height </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> height </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> img.height;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ctx </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> canvas.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getContext</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;2d&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            ctx.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">drawImage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(img, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, canvas.width, canvas.height);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            resolve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(canvas.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toDataURL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><a href="https://codepen.io/sugarInSoup/pen/GRJMERQ" target="_blank" rel="noreferrer">CodePen:示例</a></p><h2 id="图片格式" tabindex="-1">图片格式 <a class="header-anchor" href="#图片格式" aria-label="Permalink to &quot;图片格式&quot;">​</a></h2><h3 id="jpeg-jpg" tabindex="-1">JPEG/JPG <a class="header-anchor" href="#jpeg-jpg" aria-label="Permalink to &quot;JPEG/JPG&quot;">​</a></h3><ul><li><code>有损压缩</code></li><li>体积小</li><li>加载快</li><li>不支持透明</li></ul><p><strong>优点</strong></p><ul><li>图片体积压缩至原有体积的 50% 以下时，JPG 仍然可以保持住 60% 的品质</li></ul><p><strong>缺点</strong></p><ul><li>不支持透明度处理</li><li>处理线条感较强、颜色对比强烈的图像时，图片模糊会很明显</li></ul><p><strong>使用场景</strong></p><p>使用 JPG 呈现大图，既可以保住图片的质量，图片体积也不会太大</p><ul><li>背景图</li><li>轮播图</li><li>Banner图</li></ul><h3 id="png-8-与-png-24" tabindex="-1">PNG-8 与 PNG-24 <a class="header-anchor" href="#png-8-与-png-24" aria-label="Permalink to &quot;PNG-8 与 PNG-24&quot;">​</a></h3><p>8 位的 PNG 最多支持 256 种颜色，而 24 位的可以呈现约 1600 万种颜色。</p><ul><li>无损压缩</li><li>质量高</li><li>体积大</li><li>支持透明</li></ul><p><strong>优点</strong></p><ul><li>比 JPG 更强的色彩表现力</li><li>无损压缩</li><li>支持透明度</li></ul><p><strong>缺点</strong></p><ul><li>体积太大</li></ul><p><strong>应用场景</strong></p><ul><li>呈现小的 Logo、颜色简单且对比强烈的图片或背景等。</li></ul><h3 id="svg" tabindex="-1">SVG <a class="header-anchor" href="#svg" aria-label="Permalink to &quot;SVG&quot;">​</a></h3><ul><li>文本文件</li><li>体积小</li><li>不失真</li><li>兼容性好</li></ul><p>SVG（可缩放矢量图形）是一种基于 XML 语法的图像格式。它和本文提及的其它图片种类有着本质的不同：SVG 对图像的处理不是基于像素点，而是是基于对图像的形状描述。</p><p><strong>优点</strong></p><ul><li>文件体积小</li><li>可压缩性强</li><li>可无限放大而不失真(矢量图)</li></ul><p><strong>缺点</strong></p><ul><li>渲染成本比较高</li><li>可编程(需要学习成本)</li></ul><h3 id="base64" tabindex="-1">Base64 <a class="header-anchor" href="#base64" aria-label="Permalink to &quot;Base64&quot;">​</a></h3><ul><li>文本文件</li><li>依赖编码</li><li>小图标解决方案</li></ul><p>Base64 是一种用于传输 8Bit 字节码的编码方式，通过对图片进行 Base64 编码，我们可以直接将编码结果写入 HTML 或者写入 CSS，从而减少 HTTP 请求的次数</p><p>Base64 编码后，图片大小会膨胀为原文件的 4/3</p><p>在传输非常小的图片的时候，Base64 带来的文件体积膨胀、以及浏览器解析 Base64 的时间开销，与它节省掉的 HTTP 请求开销相比，可以忽略不计</p><p><strong>使用场景</strong></p><ul><li>实际尺寸很小（不超过 2kb 的）</li><li>图片无法以雪碧图的形式与其它小图结合（合成雪碧图仍是主要的减少 HTTP 请求的途径，Base64 是雪碧图的补充）</li><li>图片的更新频率非常低（不需我们重复编码和修改文件内容，维护成本较低）</li></ul><h3 id="webp" tabindex="-1">WebP <a class="header-anchor" href="#webp" aria-label="Permalink to &quot;WebP&quot;">​</a></h3><ul><li>支持透明</li><li>支持动态图片</li></ul><p><strong>优点</strong></p><blockquote><p>与 PNG 相比，WebP 无损图像的尺寸缩小了 26％。在等效的 SSIM 质量指数下，WebP 有损图像比同类 JPEG 图像小 25-34％。 无损 WebP 支持透明度（也称为 alpha 通道），仅需 22％ 的额外字节。对于有损 RGB 压缩可接受的情况，有损 WebP 也支持透明度，与 PNG 相比，通常提供 3 倍的文件大小。</p></blockquote><p><strong>缺点</strong></p><ul><li>兼容性差</li><li>编码同样质量的 WebP 文件会占用更多的计算资源</li></ul>`,45),h=[t];function e(p,k,r,E,d,g){return s(),a("div",{"data-pagefind-body":!0,"data-pagefind-meta":"base64:JTdCJTIyaXNUaW1lTGluZSUyMiUzQXRydWUlMkMlMjJ0aXRsZSUyMiUzQSUyMiVFNSU5QiVCRSVFNyU4OSU4NyVFNCVCQyU5OCVFNSU4QyU5NiUyMiUyQyUyMmRhdGUlMjIlM0ExNTg2ODIyNDAwMDAwJTJDJTIydGFncyUyMiUzQSU1QiUyMiVFNSVBNCVBNyVFNSU4OSU4RCVFNyVBQiVBRiUyMiUyQyUyMiVFNiU4MCVBNyVFOCU4MyVCRCVFNCVCQyU5OCVFNSU4QyU5NiUyMiU1RCUyQyUyMmNhdGVnb3JpZXMlMjIlM0ElNUIlMjIlRTUlQTQlQTclRTUlODklOEQlRTclQUIlQUYlMjIlNUQlN0Q="},h)}const c=i(n,[["render",e]]);export{y as __pageData,c as default};

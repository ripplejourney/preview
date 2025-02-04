import{_ as i,o as a,c as n,a4 as h}from"./chunks/framework.Cx9DlVBJ.js";const p="/preview/ripplejourney/ripplejourney.github.io/branch/chore(workflows)/only-run-preview-when-contain-wip/assets/96868081e49914aa6ab7ee142e064d56.JOyC2YcJ.png",t="/preview/ripplejourney/ripplejourney.github.io/branch/chore(workflows)/only-run-preview-when-contain-wip/assets/4a1fb149f7dbcfa43af08f1354781d76.DxnDkzBP.png",l="/preview/ripplejourney/ripplejourney.github.io/branch/chore(workflows)/only-run-preview-when-contain-wip/assets/5c0388757ee62813255ea400b0a9907b.C9DRqy9z.png",k="/preview/ripplejourney/ripplejourney.github.io/branch/chore(workflows)/only-run-preview-when-contain-wip/assets/8358d7845041f2cfa1e9af3751eca150.DwMNqB-t.png",e="/preview/ripplejourney/ripplejourney.github.io/branch/chore(workflows)/only-run-preview-when-contain-wip/assets/9018f184d07b38b69f53f7335aa7cd2e.PqOupnjt.png",r="/preview/ripplejourney/ripplejourney.github.io/branch/chore(workflows)/only-run-preview-when-contain-wip/assets/16cb9a0c8e480e61304a2366d3568878.ByfZ6gfT.png",d="/preview/ripplejourney/ripplejourney.github.io/branch/chore(workflows)/only-run-preview-when-contain-wip/assets/3c68a4e45d6be0789636eefc9e8fcbbd.DV0oAgXc.png",E="/preview/ripplejourney/ripplejourney.github.io/branch/chore(workflows)/only-run-preview-when-contain-wip/assets/9b11917ab2a09e1bec11e8272f0f4f2c.BBqMJvLb.png",C=JSON.parse('{"title":"使用又拍云极速搭建图床","description":"分享一下又拍云的简单用法，以及使用它搭建图床。","frontmatter":{"description":"分享一下又拍云的简单用法，以及使用它搭建图床。","head":[["script",{},"!function(p){\\"use strict\\";!function(t){var s=window,e=document,i=p,c=\\"\\".concat(\\"https:\\"===e.location.protocol?\\"https://\\":\\"http://\\",\\"sdk.51.la/js-sdk-pro.min.js\\"),n=e.createElement(\\"script\\"),r=e.getElementsByTagName(\\"script\\")[0];n.type=\\"text/javascript\\",n.setAttribute(\\"charset\\",\\"UTF-8\\"),n.async=!0,n.src=c,n.id=\\"LA_COLLECT\\",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({\\"id\\":\\"Jgmg5avjAUvoyePS\\",\\"ck\\":\\"Jgmg5avjAUvoyePS\\",\\"hashMode\\":true});"]]},"headers":[],"relativePath":"technology/learn/upyun.md","filePath":"technology/learn/upyun.md","lastUpdated":1720544135000}'),g={name:"technology/learn/upyun.md"};function y(F,s,o,c,A,D){return a(),n("div",{"data-pagefind-body":!0},s[0]||(s[0]=[h('<h1 id="使用又拍云极速搭建图床" tabindex="-1">使用又拍云极速搭建图床 <a class="header-anchor" href="#使用又拍云极速搭建图床" aria-label="Permalink to &quot;使用又拍云极速搭建图床&quot;">​</a></h1><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p>某天在群里摸 🐟 ，聊到了图床相关的话题，群友推荐了 <a href="https://www.upyun.com/league" target="_blank" rel="noreferrer">又拍云</a>。</p><p>说有活动，可以白嫖存储，<code>10G + 15G（HTTP/HTTPS 流量）</code> 。笔者之前一直用的<a href="https://www.qiniu.com/prices/kodo" target="_blank" rel="noreferrer">七牛云</a> <code>10G + 10G（回源流量）</code>。</p><table tabindex="0"><thead><tr><th style="text-align:center;">又拍云</th><th style="text-align:center;">七牛云</th></tr></thead><tbody><tr><td style="text-align:center;"><img src="'+p+'" alt="" loading="lazy"></td><td style="text-align:center;"><img src="'+t+'" alt="" loading="lazy"></td></tr><tr><td style="text-align:center;">注册送1个月的代金券 + 网站挂推广送1年代金券</td><td style="text-align:center;">注册即可送每月都有</td></tr></tbody></table><p>笔者就花了点时间研究了一下又拍云的 SDK 和对象存储，能力上完全可以平替七牛云，于是就花了一点时间给<a href="https://imgbed.sugarat.top/" target="_blank" rel="noreferrer">图床应用</a>加上了又拍云的支持。</p><h2 id="效果" tabindex="-1">效果 <a class="header-anchor" href="#效果" aria-label="Permalink to &quot;效果&quot;">​</a></h2><p>大家可以访问 <a href="https://imgbed.sugarat.top/" target="_blank" rel="noreferrer">https://imgbed.sugarat.top/</a> 直接体验，默认已配置 又拍云 存储</p><p>下面将介绍 又拍云对象存储配置，关键API用法，如何接入上述图床。</p><h2 id="对象存储服务创建" tabindex="-1">对象存储服务创建 <a class="header-anchor" href="#对象存储服务创建" aria-label="Permalink to &quot;对象存储服务创建&quot;">​</a></h2><p>这里直接省略账号注册，参加推广活动等步骤，直接进入对象存储配置页面。</p><p>访问<a href="https://console.upyun.com/services/file/" target="_blank" rel="noreferrer">对象存储控制台</a>，点击创建服务</p><p><img src="'+l+'" alt="" loading="lazy"></p><p>这个&quot;服务&quot;和其它平台的 <code>Bucket(桶)</code> 类似，可以理解为存储空间的概念。</p><p>填一下服务名称（<code>全平台唯一</code>），绑定账号即可</p><p><img src="'+k+'" alt="" loading="lazy"></p><p><strong>服务创建完，需要的东西基本都有了，是不是非常简单！</strong></p><ul><li>服务名：自定义</li><li>账号：自定义</li><li>密码：自动生成</li><li>域名：测试域名 <code>serviceName.test.upcdn.net</code></li></ul><h2 id="api-使用" tabindex="-1">API 使用 <a class="header-anchor" href="#api-使用" aria-label="Permalink to &quot;API 使用&quot;">​</a></h2><h3 id="token-生成" tabindex="-1">token 生成 <a class="header-anchor" href="#token-生成" aria-label="Permalink to &quot;token 生成&quot;">​</a></h3><p>这里推荐使用 token 认证 根据<a href="https://help.upyun.com/knowledge-base/object_storage_authorization/#token-e8aea4e8af81" target="_blank" rel="noreferrer">文档：认证鉴权</a>可知生成方式如下：</p><p><img src="'+e+'" alt="" loading="lazy"></p><p>看不懂？没关系 GPT 可以帮你，直接复制丢给它。</p><p><img src="'+r+`" alt="" loading="lazy"></p><p>这不代码就来了。</p><p>我们可以适当优化一下，不需要用到第三方库<code>base64-js</code>，直接使用 Node.js 的内置模块<code>crypto</code> 即可。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> crypto </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;crypto&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * 生成 upyun 上传token</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> {*}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> operator</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 账号</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> {*}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> password</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 密码</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> {*}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> method</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 方法（PUT）</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> {*}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> uriPrefix</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 请求公共前缀</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> {*}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> date</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 过期时间</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@returns</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 上传凭证</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> generateUpyunToken</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">operator</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">password</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">method</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">uriPrefix</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">date</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 密码的md5值，秘钥</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> secret</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> crypto.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createHash</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;md5&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">update</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(password).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">digest</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;hex&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 构造用于计算校验值的字符串</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> value</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">method</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}&amp;\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">uriPrefix</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}&amp;\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">date</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 使用 hmac-sha1 算法生成token</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> token</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> crypto.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createHmac</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;sha1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, secret) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 使用密码的MD5值作为秘钥</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">update</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(value) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 设置用于计算校验值的字符串</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">digest</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 计算校验值</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;base64&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 转换为base64 格式</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 组合成要求的格式</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`UPYUN \${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">operator</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}:\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">token</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}\`</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>代码非常简洁明了，使用方式如下</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> token</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> generateUpyunToken</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;账号&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &#39;密码&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &#39;PUT&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &#39;服务名/资源公共前缀路径&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 服务名 + 公共资源前缀路径构成</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Date</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getTime</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1000</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 60</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 60</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 24</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 90</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 计算过期时间 90天后的日期</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>理论上这个 token 也可以在前端生成，调用和后端一致的算法即可。</p><h3 id="前端上传" tabindex="-1">前端上传 <a class="header-anchor" href="#前端上传" aria-label="Permalink to &quot;前端上传&quot;">​</a></h3><p>① 安装 upyun sdk</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> upyun</span></span></code></pre></div><p>② 上传示例</p><p>根据文档，可以看到客户端上传需要的参数。</p><p><img src="`+d+`" alt="" loading="lazy"></p><ul><li><code>Authorization</code>：前面通过生成的token</li><li><code>X-Date</code>：请求日期时间，GMT 格式字符串</li><li><code>X-Upyun-Uri-Prefix</code>：服务名 + 资源公共前缀路径</li><li><code>X-Upyun-Expire</code>：过期时间</li></ul><p>下面就是核心的上传方法。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> upyun </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;upyun&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> service</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> upyun.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Service</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;服务名&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> client</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> upyun.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Client</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(service, () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ({</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &#39;Authorization&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;前面通过生成的token&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &#39;X-Date&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Date</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toUTCString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(),</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &#39;X-Upyun-Uri-Prefix&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;服务名/资源公共前缀路径&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &#39;X-Upyun-Expire&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: date, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 前面生成 Token 时的 date 参数</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}))</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> sourceKey</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;资源公共前缀路径/资源名&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // &#39;test/imgs/abc.png&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 调用上传</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">client.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">putFile</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(sourceKey, file) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 返回值 Promise&lt;boolean&gt;</span></span></code></pre></div><p>③ 方法封装</p><p>我们可以简单封装一下，方便调用</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> UPYunConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * 服务名</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  serviceName</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * 上传凭证</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  token</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * 资源公共前缀</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  prefix</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * 过期时间 new Date().getTime() + 1000 * 60 * 60 * 24 * 90</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  date</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * 域名（用于拼接最后的访问链接）</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  domain</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * 最后的资源名，建议使用 uuid 或者文件的 MD5</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  filename</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">async</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> uploadFile</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">file</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> File</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">ops</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> UPYunConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">serviceName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">prefix</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">token</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">date</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">domain</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">filename</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ops</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> service</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> upyun.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Service</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(serviceName)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> client</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> upyun.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Client</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(service, () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ({</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;Authorization&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: token,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;X-Date&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Date</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toUTCString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(),</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;X-Upyun-Uri-Prefix&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">serviceName</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}/\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">prefix</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;X-Upyun-Expire&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: date,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }))</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> key</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">prefix</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}/\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">filename</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ||</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> file</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> isSuccess</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> client.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">putFile</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(key, file)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 返回最后可以用于访问的链接</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> isSuccess </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Promise</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">resolve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">domain</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}/\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">key</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Promise</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">reject</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Error</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;上传失败&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="接入纯静态图床" tabindex="-1">接入纯静态图床 <a class="header-anchor" href="#接入纯静态图床" aria-label="Permalink to &quot;接入纯静态图床&quot;">​</a></h2><p>上述逻辑我都封装在了自己的图床应用中：<a href="https://github.com/ATQQ/image-bed-qiniu/tree/master/packages/client#-%E5%9F%BA%E4%BA%8E-oss%E5%AF%B9%E8%B1%A1%E5%AD%98%E5%82%A8%E5%BA%93-%E5%9B%BE%E5%BA%8A-" target="_blank" rel="noreferrer">GitHub: image-bed-qiniu</a></p><p>只需要在 <a href="https://github.com/ATQQ/image-bed-qiniu/tree/master/packages/cli" target="_blank" rel="noreferrer">cli</a> 目录下，修改 <a href="https://github.com/ATQQ/image-bed-qiniu/blob/master/packages/cli/.env" target="_blank" rel="noreferrer">.env</a> 配置文件</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 又拍云相关配置</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">UPYUN_OPERATOR</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">operator</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">UPYUN_PASSWORD</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">password</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">UPYUN_BUCKET</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">service-name</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">UPYUN_DOMAIN</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">http://service-name.test.upcdn.net</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">UPYUN_PREFIX</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">image</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">UPYUN_SCOPE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">default</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># token有效期，默认3个月，单位秒，你可以自行设置（60*60*24*30）</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># UPYUN_EXPIRES=2592000</span></span></code></pre></div><p>执行 <code>node upyun-token.js</code> 即可生成需要的 token。</p><p>将其粘贴配置到 <a href="https://imgbed.sugarat.top/" target="_blank" rel="noreferrer">线上的图床应用</a>，或者自己部署的均可 <a href="https://github.com/ATQQ/image-bed-qiniu/tree/master/packages/client#%E8%BF%90%E8%A1%8C%E9%A1%B9%E7%9B%AE" target="_blank" rel="noreferrer">image-bed-qiniu:client</a></p><p><img src="`+E+'" alt="" loading="lazy"></p><h2 id="其它" tabindex="-1">其它 <a class="header-anchor" href="#其它" aria-label="Permalink to &quot;其它&quot;">​</a></h2><p>线上使用，推荐 绑定自定义域名 和 开启HTTPS 支持。</p><p>这两个直接在平台里根据指引操作即可，步骤也很简单。</p><h2 id="最后" tabindex="-1">最后 <a class="header-anchor" href="#最后" aria-label="Permalink to &quot;最后&quot;">​</a></h2><p>后续准备提供一个图床的 Docker 镜像，这样部署起来也更加方便。</p><p>大家有其它可白嫖的图床也可推荐推荐一下。</p>',55)]))}const B=i(g,[["render",y]]);export{C as __pageData,B as default};

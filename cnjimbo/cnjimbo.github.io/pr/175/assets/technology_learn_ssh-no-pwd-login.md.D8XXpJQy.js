import{_ as s,o as a,c as i,a5 as t}from"./chunks/framework.Y3uWLRGS.js";const F=JSON.parse('{"title":"配置SSH免密登录服务器","description":"","frontmatter":{"title":"配置SSH免密登录服务器","date":"2022-02-12T00:00:00.000Z","tags":["技术笔记","技术教程"],"categories":["技术笔记"]},"headers":[],"relativePath":"technology/learn/ssh-no-pwd-login.md","filePath":"technology/learn/ssh-no-pwd-login.md","lastUpdated":1719297432000}'),l={name:"technology/learn/ssh-no-pwd-login.md"},e=t(`<h1 id="本地配置ssh免密远程登录服务器" tabindex="-1">本地配置SSH免密远程登录服务器 <a class="header-anchor" href="#本地配置ssh免密远程登录服务器" aria-label="Permalink to &quot;本地配置SSH免密远程登录服务器&quot;">​</a></h1><p>最近服务器从阿里云换到了腾讯云，需要把服务进行一次整体的迁移</p><p>为了方便资源的部署，需要配置一下SSH的免密登录，避免频繁的输入密码</p><h2 id="取得本地公钥" tabindex="-1">取得本地公钥 <a class="header-anchor" href="#取得本地公钥" aria-label="Permalink to &quot;取得本地公钥&quot;">​</a></h2><p>先查看本地是否存在<code>id_rsa.pub</code>文件</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ls</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.ssh</span></span></code></pre></div><p>不存在可以通过如下指令创建（一路回车即可）</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ssh-keygen</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rsa</span></span></code></pre></div><h2 id="服务器添加信任" tabindex="-1">服务器添加信任 <a class="header-anchor" href="#服务器添加信任" aria-label="Permalink to &quot;服务器添加信任&quot;">​</a></h2><h3 id="上传公钥" tabindex="-1">上传公钥 <a class="header-anchor" href="#上传公钥" aria-label="Permalink to &quot;上传公钥&quot;">​</a></h3><p>将本地公钥上传到远程服务器</p><ul><li>其中 <code>$host</code>换成目标服务器绑定的 <strong>域名</strong> 或 <strong>IP</strong> 即可</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">scp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.ssh/id_rsa.pub</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> root@</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$host</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:~/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">scp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.ssh/id_rsa.pub</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> root@baidu.com:~/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">scp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.ssh/id_rsa.pub</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> root@39.156.66.18:~/</span></span></code></pre></div><h3 id="添加信任" tabindex="-1">添加信任 <a class="header-anchor" href="#添加信任" aria-label="Permalink to &quot;添加信任&quot;">​</a></h3><p>先检查服务器上是<code>root</code>用户是否存在<code>.ssh</code>目录</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ssh</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p22</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> root@</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$host </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ls -al&quot;</span></span></code></pre></div><p>不存在则运行上述一样的方式进行创建</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ssh</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p22</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> root@</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$host </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ssh-keygen -t rsa&quot;</span></span></code></pre></div><p>添加信任</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ssh</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p22</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> root@</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$host </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;cat ~/id_rsa.pub &gt;&gt; ~/.ssh/authorized_keys&quot;</span></span></code></pre></div><h2 id="重启ssh" tabindex="-1">重启ssh <a class="header-anchor" href="#重启ssh" aria-label="Permalink to &quot;重启ssh&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ssh</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p22</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> root@</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$host </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;service sshd restart&quot;</span></span></code></pre></div><h2 id="免密登录root" tabindex="-1">免密登录root <a class="header-anchor" href="#免密登录root" aria-label="Permalink to &quot;免密登录root&quot;">​</a></h2><p>配置完成后即可进行免密登录</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ssh</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> root@</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$host</span></span></code></pre></div>`,25),h=[e];function n(p,o,d,k,r,c){return a(),i("div",{"data-pagefind-body":!0,"data-pagefind-meta":"base64:JTdCJTIydGl0bGUlMjIlM0ElMjIlRTklODUlOEQlRTclQkQlQUVTU0glRTUlODUlOEQlRTUlQUYlODYlRTclOTklQkIlRTUlQkQlOTUlRTYlOUMlOEQlRTUlOEElQTElRTUlOTklQTglMjIlMkMlMjJkYXRlJTIyJTNBMTY0NDYyNDAwMDAwMCUyQyUyMnRhZ3MlMjIlM0ElNUIlMjIlRTYlOEElODAlRTYlOUMlQUYlRTclQUMlOTQlRTglQUUlQjAlMjIlMkMlMjIlRTYlOEElODAlRTYlOUMlQUYlRTYlOTUlOTklRTclQTglOEIlMjIlNUQlMkMlMjJjYXRlZ29yaWVzJTIyJTNBJTVCJTIyJUU2JThBJTgwJUU2JTlDJUFGJUU3JUFDJTk0JUU4JUFFJUIwJTIyJTVEJTdE"},h)}const u=s(l,[["render",n]]);export{F as __pageData,u as default};

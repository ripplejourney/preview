import{_ as i,o as a,c as t,aa as e}from"./chunks/framework.CSef_RB6.js";const c=JSON.parse('{"title":"nuget 修改 package存储位置","description":"","frontmatter":{"sidebar":{"title":"dotnet","step":0},"isTimeLine":true,"title":"nuget 修改 package存储位置","date":"2024-11-21T00:00:00.000Z","tags":["dotnet","vscode"],"categories":["coding"],"head":[["script",{},"!function(p){\\"use strict\\";!function(t){var s=window,e=document,i=p,c=\\"\\".concat(\\"https:\\"===e.location.protocol?\\"https://\\":\\"http://\\",\\"sdk.51.la/js-sdk-pro.min.js\\"),n=e.createElement(\\"script\\"),r=e.getElementsByTagName(\\"script\\")[0];n.type=\\"text/javascript\\",n.setAttribute(\\"charset\\",\\"UTF-8\\"),n.async=!0,n.src=c,n.id=\\"LA_COLLECT\\",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({\\"id\\":\\"Jgmg5avjAUvoyePS\\",\\"ck\\":\\"Jgmg5avjAUvoyePS\\",\\"hashMode\\":true});"]]},"headers":[],"relativePath":"coding/dotnet/dotnetViaVscode.md","filePath":"coding/dotnet/dotnetViaVscode.md","lastUpdated":1732166918000}'),n={name:"coding/dotnet/dotnetViaVscode.md"};function h(l,s,p,k,d,o){return a(),t("div",{"data-pagefind-body":!0},s[0]||(s[0]=[e(`<h1 id="要修改-nuget-包存储位置-您需要更改-nuget-配置文件或使用命令行参数。以下是如何执行此操作的步骤" tabindex="-1">要修改 NuGet 包存储位置，您需要更改 NuGet 配置文件或使用命令行参数。以下是如何执行此操作的步骤： <a class="header-anchor" href="#要修改-nuget-包存储位置-您需要更改-nuget-配置文件或使用命令行参数。以下是如何执行此操作的步骤" aria-label="Permalink to &quot;要修改 NuGet 包存储位置，您需要更改 NuGet 配置文件或使用命令行参数。以下是如何执行此操作的步骤：&quot;">​</a></h1><h3 id="方法一-修改-nuget-配置文件" tabindex="-1">方法一：修改 NuGet 配置文件 <a class="header-anchor" href="#方法一-修改-nuget-配置文件" aria-label="Permalink to &quot;方法一：修改 NuGet 配置文件&quot;">​</a></h3><ol><li><p>打开 NuGet 配置文件。配置文件通常位于以下位置：</p><ul><li>Windows: <code>%AppData%\\NuGet\\NuGet.Config</code></li><li>macOS/Linux: <code>$HOME/.config/NuGet/NuGet.Config</code></li></ul><p>如果您找不到配置文件，可以在命令行中使用 <code>nuget config -list</code> 命令查看当前的 NuGet 配置。</p></li><li><p>在配置文件中添加或修改 <code>&lt;packageSources&gt;</code> 部分，指定新的存储位置。例如，要将包存储位置更改为 <code>D:\\NuGetPackages</code>，请添加或修改以下内容：</p><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">configuration</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">packageSources</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">add</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;MyCustomPackages&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;D:\\NuGetPackages&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">packageSources</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">configuration</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>这里的 <code>key</code> 是您自定义的源名称，<code>value</code> 是新的存储位置。</p></li><li><p>保存并关闭配置文件。</p></li></ol><h3 id="方法二-使用命令行参数" tabindex="-1">方法二：使用命令行参数 <a class="header-anchor" href="#方法二-使用命令行参数" aria-label="Permalink to &quot;方法二：使用命令行参数&quot;">​</a></h3><p>您还可以在安装或更新 NuGet 包时使用 <code>-Source</code> 参数指定新的存储位置。例如：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">dotnet</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nuget</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">package_nam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -Source</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> D:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\N</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">uGetPackages</span></span></code></pre></div><p>或者，在更新 NuGet 包时：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">dotnet</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nuget</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">package_nam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -Source</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> D:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\N</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">uGetPackages</span></span></code></pre></div><h3 id="方法三-设置全局默认源" tabindex="-1">方法三：设置全局默认源 <a class="header-anchor" href="#方法三-设置全局默认源" aria-label="Permalink to &quot;方法三：设置全局默认源&quot;">​</a></h3><p>如果您希望将新的存储位置设置为全局默认源，可以使用以下命令：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">dotnet</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nuget</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> globalPackagesFolder=D:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\N</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">uGetPackages</span></span></code></pre></div><p>这会将全局包文件夹设置为 <code>D:\\NuGetPackages</code>。</p><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h3><p>通过以上方法，您可以轻松地修改 NuGet 包的存储位置。根据您的需求和偏好，您可以选择修改配置文件或使用命令行参数来实现这一目标。</p>`,14)]))}const g=i(n,[["render",h]]);export{c as __pageData,g as default};

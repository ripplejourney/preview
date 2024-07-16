import{_ as i,o as a,c as s,a5 as t}from"./chunks/framework.BXTVDfeV.js";const e="/preview/cnjimbo/cnjimbo.github.io/pr/188/assets/20190709062953681.DefOFNtA.png",l="/preview/cnjimbo/cnjimbo.github.io/pr/188/assets/x-oss-process_image.DGX4Gfj4.png",b=JSON.parse('{"title":"git如何清除历史版本","description":"","frontmatter":{"created":"2024-06-21T00:14:35 (UTC +08:00)","author":"cnjimbo","sidebar":{"title":"Git删除当前分支下的所有历史版本与log并同步至GitHub","step":1},"isTimeLine":true,"title":"git如何清除历史版本","date":"2024-06-21T00:00:00.000Z","tags":["github"],"categories":["github"]},"headers":[],"relativePath":"coding/github/Git删除当前分支下的所有历史版本与log并同步至GitHub_git如何清除历史版本.md","filePath":"coding/github/Git删除当前分支下的所有历史版本与log并同步至GitHub_git如何清除历史版本.md","lastUpdated":1719297432000}'),h={name:"coding/github/Git删除当前分支下的所有历史版本与log并同步至GitHub_git如何清除历史版本.md"},n=t(`<h1 id="_1-git删除当前分支下的所有历史版本与log并同步至github-git如何清除历史版本-csdn博客" tabindex="-1">1. Git删除当前分支下的所有历史版本与log并同步至GitHub_git如何清除历史版本-CSDN博客 <a class="header-anchor" href="#_1-git删除当前分支下的所有历史版本与log并同步至github-git如何清除历史版本-csdn博客" aria-label="Permalink to &quot;1. Git删除当前分支下的所有历史版本与log并同步至GitHub_git如何清除历史版本-CSDN博客&quot;">​</a></h1><blockquote><h2 id="excerpt" tabindex="-1">Excerpt <a class="header-anchor" href="#excerpt" aria-label="Permalink to &quot;Excerpt&quot;">​</a></h2><p>文章目录1. 按2. 方法一2.1. 切换到latest_branch分支下2.2. 添加所有文件2.3. 提交更改2.4. 删除分支2.5. 将当前分支重命名2.6. 最后，强制更新存储库2.7. 技巧3. 方法二3.1. 先删除.git文件夹3.2. 然后初始化Git（user为你的用户名，repo为你的仓库名）3.3. 提交当前版本的代码1. 按保留大量的历史版本会给存储设施增加负荷，有时候我们需要删除之前的所有历史版本与log，仅保留当前版本的文件。删除master分支下的所有历史版本与log_git如何清除历史版本</p></blockquote><h4 id="_1-0-0-1-文章目录" tabindex="-1">1.0.0.1. 文章目录 <a class="header-anchor" href="#_1-0-0-1-文章目录" aria-label="Permalink to &quot;1.0.0.1. 文章目录&quot;">​</a></h4><ul><li><a href="#git删除当前分支下的所有历史版本与log并同步至github_git如何清除历史版本-csdn博客">Git删除当前分支下的所有历史版本与log并同步至GitHub_git如何清除历史版本-CSDN博客</a> - <a href="#文章目录">文章目录</a><ul><li>[1. 按](# -按)</li><li>[2. 方法一](# -方法一) <ul><li>[2.1. 切换到latest_branch分支下](# -切换到latest_branch分支下)</li><li>[2.2. 添加所有文件](# -添加所有文件)</li><li>[2.3. 提交更改](# -提交更改)</li><li>[2.4. 删除分支](# -删除分支)</li><li>[2.5. 将当前分支重命名](# -将当前分支重命名)</li><li>[2.6. 最后，强制更新存储库](# -最后强制更新存储库)</li><li>[2.7. 技巧](# -技巧)</li></ul></li><li>[3. 方法二](# -方法二) <ul><li>[3.1. 先删除.git文件夹](# -先删除git文件夹)</li><li>[3.2. 然后初始化Git（user为你的用户名，repo为你的仓库名）](# -然后初始化gituser为你的用户名repo为你的仓库名)</li><li>[3.3. 提交当前版本的代码](# -提交当前版本的代码)</li></ul></li></ul></li></ul><h2 id="_1-1-按" tabindex="-1">1.1. 按 <a class="header-anchor" href="#_1-1-按" aria-label="Permalink to &quot;1.1. 按&quot;">​</a></h2><p>保留大量的历史版本会给存储设施增加负荷，有时候我们需要删除之前的所有历史版本与log，仅保留当前版本的文件。</p><p>删除master分支下的所有历史版本与log，只保留当前的版本，并同步至<a href="https://github.com/cnjimbo/cnjimbo.github.io" target="_blank" rel="noreferrer">GitHub</a></p><h2 id="_1-2-方法一" tabindex="-1">1.2. 方法一 <a class="header-anchor" href="#_1-2-方法一" aria-label="Permalink to &quot;1.2. 方法一&quot;">​</a></h2><p>先新建一个名为latest_branch的分支，然后将当前master分支中的所有文件添加到latest_branch分支中，接着等待移动完毕后删除master分支，最后把latest_branch这个分支的分支名改为master。</p><p>以下是具体实现：</p><h3 id="_1-2-1-切换到latest-branch分支下" tabindex="-1">1.2.1. 切换到latest_branch分支下 <a class="header-anchor" href="#_1-2-1-切换到latest-branch分支下" aria-label="Permalink to &quot;1.2.1. 切换到latest_branch分支下&quot;">​</a></h3><div class="language-powershell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">git checkout </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">orphan latest_branch</span></span></code></pre></div><h3 id="_1-2-2-添加所有文件" tabindex="-1">1.2.2. 添加所有文件 <a class="header-anchor" href="#_1-2-2-添加所有文件" aria-label="Permalink to &quot;1.2.2. 添加所有文件&quot;">​</a></h3><div class="language-powershell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">git add </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">A</span></span></code></pre></div><h3 id="_1-2-3-提交更改" tabindex="-1">1.2.3. 提交更改 <a class="header-anchor" href="#_1-2-3-提交更改" aria-label="Permalink to &quot;1.2.3. 提交更改&quot;">​</a></h3><div class="language-powershell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">git commit </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">am </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;清除所有历史版本以减少仓库大小，请重新从远程拷贝此仓库&quot;</span></span></code></pre></div><h3 id="_1-2-4-删除分支" tabindex="-1">1.2.4. 删除分支 <a class="header-anchor" href="#_1-2-4-删除分支" aria-label="Permalink to &quot;1.2.4. 删除分支&quot;">​</a></h3><div class="language-powershell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">git branch </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">D master</span></span></code></pre></div><h3 id="_1-2-5-将当前分支重命名" tabindex="-1">1.2.5. 将当前分支重命名 <a class="header-anchor" href="#_1-2-5-将当前分支重命名" aria-label="Permalink to &quot;1.2.5. 将当前分支重命名&quot;">​</a></h3><div class="language-powershell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">git branch </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">m master</span></span></code></pre></div><h3 id="_1-2-6-最后-强制更新存储库" tabindex="-1">1.2.6. 最后，强制更新存储库 <a class="header-anchor" href="#_1-2-6-最后-强制更新存储库" aria-label="Permalink to &quot;1.2.6. 最后，强制更新存储库&quot;">​</a></h3><div class="language-powershell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">git push </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-f</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> origin master</span></span></code></pre></div><h3 id="_1-2-7-技巧" tabindex="-1">1.2.7. 技巧 <a class="header-anchor" href="#_1-2-7-技巧" aria-label="Permalink to &quot;1.2.7. 技巧&quot;">​</a></h3><p>将如下代码保存在一个bat文件里，然后双击运行即可。</p><div class="language-powershell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">git checkout </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">orphan latest_branch</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">git add </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">A</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">git commit </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">am </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;清除所有历史版本以减少仓库大小，请重新从远程拷贝此仓库&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">git branch </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">D master</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">git branch </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">m master</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">git push </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-f</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> origin master</span></span></code></pre></div><p><img src="`+e+'" alt="在这里插入图片描述" loading="lazy"><img src="'+l+`" alt="在这里插入图片描述" loading="lazy"></p><h2 id="_1-3-方法二" tabindex="-1">1.3. 方法二 <a class="header-anchor" href="#_1-3-方法二" aria-label="Permalink to &quot;1.3. 方法二&quot;">​</a></h2><p>不推荐使用，可能导致git存储库出现问题。思路：直接删除.git文件再初始化仓库</p><h3 id="_1-3-1-先删除-git文件夹" tabindex="-1">1.3.1. 先删除.git文件夹 <a class="header-anchor" href="#_1-3-1-先删除-git文件夹" aria-label="Permalink to &quot;1.3.1. 先删除.git文件夹&quot;">​</a></h3><h3 id="_1-3-2-然后初始化git-user为你的用户名-repo为你的仓库名" tabindex="-1">1.3.2. 然后初始化Git（user为你的用户名，repo为你的仓库名） <a class="header-anchor" href="#_1-3-2-然后初始化git-user为你的用户名-repo为你的仓库名" aria-label="Permalink to &quot;1.3.2. 然后初始化Git（user为你的用户名，repo为你的仓库名）&quot;">​</a></h3><div class="language-powershell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">git init git remote add origin git@github.com:user</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">repo</span></span></code></pre></div><h3 id="_1-3-3-提交当前版本的代码" tabindex="-1">1.3.3. 提交当前版本的代码 <a class="header-anchor" href="#_1-3-3-提交当前版本的代码" aria-label="Permalink to &quot;1.3.3. 提交当前版本的代码&quot;">​</a></h3><div class="language-powershell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">git add </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> git commit </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">am </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;message&#39;</span></span></code></pre></div><p>最后，强制更新到GitHub：</p><div class="language-powershell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">git push </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-f</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> origin master</span></span></code></pre></div>`,35),p=[n];function r(o,d,g,k,c,u){return a(),s("div",{"data-pagefind-body":!0,"data-pagefind-meta":"base64:JTdCJTIyY3JlYXRlZCUyMiUzQSUyMjIwMjQtMDYtMjFUMDAlM0ExNCUzQTM1JTIwKFVUQyUyMCUyQjA4JTNBMDApJTIyJTJDJTIyYXV0aG9yJTIyJTNBJTIyY25qaW1ibyUyMiUyQyUyMnNpZGViYXIlMjIlM0ElN0IlMjJ0aXRsZSUyMiUzQSUyMkdpdCVFNSU4OCVBMCVFOSU5OSVBNCVFNSVCRCU5MyVFNSU4OSU4RCVFNSU4OCU4NiVFNiU5NCVBRiVFNCVCOCU4QiVFNyU5QSU4NCVFNiU4OSU4MCVFNiU5QyU4OSVFNSU4RSU4NiVFNSU4RiVCMiVFNyU4OSU4OCVFNiU5QyVBQyVFNCVCOCU4RWxvZyVFNSVCOSVCNiVFNSU5MCU4QyVFNiVBRCVBNSVFOCU4NyVCM0dpdEh1YiUyMiUyQyUyMnN0ZXAlMjIlM0ExJTdEJTJDJTIyaXNUaW1lTGluZSUyMiUzQXRydWUlMkMlMjJ0aXRsZSUyMiUzQSUyMmdpdCVFNSVBNiU4MiVFNCVCRCU5NSVFNiVCOCU4NSVFOSU5OSVBNCVFNSU4RSU4NiVFNSU4RiVCMiVFNyU4OSU4OCVFNiU5QyVBQyUyMiUyQyUyMmRhdGUlMjIlM0ExNzE4OTI4MDAwMDAwJTJDJTIydGFncyUyMiUzQSU1QiUyMmdpdGh1YiUyMiU1RCUyQyUyMmNhdGVnb3JpZXMlMjIlM0ElNUIlMjJnaXRodWIlMjIlNUQlN0Q="},p)}const y=i(h,[["render",r]]);export{b as __pageData,y as default};

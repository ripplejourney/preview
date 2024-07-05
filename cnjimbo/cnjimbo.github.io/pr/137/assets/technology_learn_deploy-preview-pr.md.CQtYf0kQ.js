import{_ as e,o as s,c as a,a5 as i}from"./chunks/framework.DLOA312L.js";const y=JSON.parse('{"title":"在提交pr请求后自动部署preview github pages","description":"","frontmatter":{"title":"在提交pr请求后自动部署preview github pages","date":"2024-06-18T00:00:00.000Z","tags":["技术笔记","技术教程","github","actions","deploy","preview"],"categories":["github","actions","deploy","preview"],"created":"2024-06-18T20:04:04 (UTC +08:00)","source":null,"author":"EndBug"},"headers":[],"relativePath":"technology/learn/deploy-preview-pr.md","filePath":"technology/learn/deploy-preview-pr.md","lastUpdated":1719297432000}'),t={name:"technology/learn/deploy-preview-pr.md"},n=i(`<h1 id="在提交pr请求后自动部署preview-github-pages" tabindex="-1">在提交pr请求后自动部署preview github pages <a class="header-anchor" href="#在提交pr请求后自动部署preview-github-pages" aria-label="Permalink to &quot;在提交pr请求后自动部署preview github pages&quot;">​</a></h1><blockquote><h2 id="excerpt" tabindex="-1">Excerpt <a class="header-anchor" href="#excerpt" aria-label="Permalink to &quot;Excerpt&quot;">​</a></h2><p>:octocat: 一个GitHub Action，用于为拉取请求（PR）和分支创建GitHub Pages预览 —— EndBug/pages-preview</p></blockquote><h1 id="pages-preview" tabindex="-1">Pages Preview <a class="header-anchor" href="#pages-preview" aria-label="Permalink to &quot;Pages Preview&quot;">​</a></h1><h2 id="table-of-contents" tabindex="-1">Table of contents <a class="header-anchor" href="#table-of-contents" aria-label="Permalink to &quot;Table of contents&quot;">​</a></h2><ul><li><a href="#what-does-it-do">What does it do?</a></li><li><a href="#setup">Setup</a></li><li><a href="#inputs">Inputs</a></li></ul><h2 id="what-does-it-do" tabindex="-1">What does it do? <a class="header-anchor" href="#what-does-it-do" aria-label="Permalink to &quot;What does it do?&quot;">​</a></h2><p>A lot of third-party services allow you create preview deployments of branches and pull requests, so that you can use them to review and test your changes. This action allows you to do the same thing, but directly with GitHub Pages.</p><p>In particular, this action deploys your website to a different repo, which will contain the previews of all the repos you choose to use this on.</p><p>If you&#39;re interested in the logic behind this action, you can check out the <a href="./docs/flow_diagram.html">flow diagram</a>.</p><h2 id="setup" tabindex="-1">Setup <a class="header-anchor" href="#setup" aria-label="Permalink to &quot;Setup&quot;">​</a></h2><h3 id="preview-repo" tabindex="-1">Preview repo <a class="header-anchor" href="#preview-repo" aria-label="Permalink to &quot;Preview repo&quot;">​</a></h3><h4 id="using-my-template" tabindex="-1">Using my template <a class="header-anchor" href="#using-my-template" aria-label="Permalink to &quot;Using my template&quot;">​</a></h4><ol><li><p>Go to <a href="https://github.com/EndBug/preview-template" target="_blank" rel="noreferrer">this template</a> and generate your repo from there: click &quot;Use this template&quot;, fill in name and description, check that &quot;Include all branches&quot; is ticked, and create the repo. It doesn&#39;t matter whether you create it as public or private, but remember that the Pages website will always be public.</p></li><li><p>Go into your repo settings, in the Pages tab (Repo settings &gt; Pages) and set &quot;GitHub Actions&quot; as the source.</p></li></ol><h4 id="manually" tabindex="-1">Manually <a class="header-anchor" href="#manually" aria-label="Permalink to &quot;Manually&quot;">​</a></h4><ol><li><p>Create a new repo that will host your previews. This repo will be used for the previews from all your repositories, so you&#39;ll need to set this up only once.</p></li><li><p>Make sure that this repo has two branches: <code>main</code> and <code>gh-pages</code> (you can also choose different names).</p><ul><li><code>main</code> should be your default branch, and it will only hold a workflow (and any additional files you want to add, liKE a README, a license, etc.).</li><li><code>gh-pages</code> will be the branch that will contain the actual previews, and it should be empty.</li></ul></li><li><p>Create a new file in the <code>main</code> branch, and name it <code>.github/workflows/preview.yml</code>. Then copy the contents of <a href="dependents/preview_repo.yml"><code>dependents/preview-repo.yml</code></a> into it. You shouldn&#39;t need to change anything in this file, the config options will all be in the source repo workflow. This file might need to be updated if you update the action to a different major version.</p></li><li><p>Go into your repo settings, in the Pages tab (Repo settings &gt; Pages) and set &quot;GitHub Actions&quot; as the source.</p></li></ol><h3 id="personal-access-token-pat" tabindex="-1">Personal Access Token (PAT) <a class="header-anchor" href="#personal-access-token-pat" aria-label="Permalink to &quot;Personal Access Token (PAT)&quot;">​</a></h3><p>In order for the action to be able to trigger the deployment in the preview repo from the source repo, you&#39;ll need to create a Personal Access Token (PAT).</p><p>There are currently two types of PATs: fine-grained, which are more secure but still in beta, and classic. I&#39;d suggest to use fine-grained PATs, but if you can&#39;t, you can also use classic PATs.</p><h4 id="fine-grained-pat" tabindex="-1">Fine-grained PAT <a class="header-anchor" href="#fine-grained-pat" aria-label="Permalink to &quot;Fine-grained PAT&quot;">​</a></h4><ol><li>If you&#39;re using a GitHub organization, you may have to first enable <em>Personal Access Tokens</em> (PAT) on the Organization&#39;s (not yours&#39;) Settings at \`.../settings/personal-access-tokens-onboarding</li><li>Go to <a href="https://github.com/settings/tokens?type=beta" target="_blank" rel="noreferrer">Account settings &gt; Developer settings &gt; Fine-grained tokens</a>. For an Org, you must use YOUR (not the Org&#39;s) Setttings, and change the <em>Resource owner</em> from you to the Org on this screen.</li><li>Click on &quot;Generate new token&quot;.</li><li>Give it a recognizable name and set an appropriate expiration date.</li><li>Make sure that the &quot;Resource owner&quot; is the same user/org that owns the preview repo.</li><li>Set the &quot;Repository access&quot; to &quot;Only selected repositories&quot; and then select the preview repo.</li><li>In the &quot;Repository permissions&quot; sections, set &quot;Actions&quot; and &quot;Content&quot; to &quot;Read and write&quot;. &quot;Metadata&quot; will also be granted as &quot;Read-only&quot;, as it is required for the other two.</li><li>Click on &quot;Generate token&quot;, copy the token and save it somewhere for later.</li></ol><h4 id="classic-pat" tabindex="-1">Classic PAT <a class="header-anchor" href="#classic-pat" aria-label="Permalink to &quot;Classic PAT&quot;">​</a></h4><ol><li>Go to <a href="https://github.com/settings/tokens" target="_blank" rel="noreferrer">Account settings &gt; Developer settings &gt; Tokens (classic)</a>.</li><li>Click on &quot;Generate new token&quot; &gt; &quot;Generate new token (classic)&quot;</li><li>Give it a recognizable name and set an appropriate expiration date.</li><li>Select the <code>repo</code> scope.</li><li>Click on &quot;Generate token&quot;, copy the token and save it somewhere for later.</li></ol><h3 id="source-repo" tabindex="-1">Source repo <a class="header-anchor" href="#source-repo" aria-label="Permalink to &quot;Source repo&quot;">​</a></h3><p>This steps need to be repeated for each repo you want to use this action on.</p><ol><li>Go to the repo that contains the source code of your website.</li><li>Go to Repo settings &gt; Secrets and variables &gt; Actions.</li><li>Create a new repository secret called <code>PREVIEW_TOKEN</code> and paste the PAT you created in the previous step.</li><li>Go back to the repo contents and add the deployment workflow: you can either create a new one or add the same steps to your existing one. Use the <a href="dependents/source_repo.yml"><code>dependents/source-repo.yml</code></a> file as a template/example. Make sure to change the <code>PREVIEW_REPO</code> and <code>PAGES_BASE</code> env variable, along with the commands needed to build your website. Also, make sure to change <code>EndBug/pages-preview</code>&#39;s inputs to match your needs: more info on that in the <a href="#inputs">&quot;Inputs&quot;</a> section of this file.</li></ol><p>All done! You&#39;re now ready to use the action 🎉</p><h2 id="inputs" tabindex="-1">Inputs <a class="header-anchor" href="#inputs" aria-label="Permalink to &quot;Inputs&quot;">​</a></h2><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">uses</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">EndBug/pages-preview@v1</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  with</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # The directory in which the website has been built, in the a/b/c format</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    build_dir</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">build</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # The GitHub Pages base URL of the preview repo</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    preview_base_url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">https://octocat.github.io/preview</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # The repository to push previews to, in the Owner/Name format</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    preview_repo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">octocat/preview</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # The token to access the preview repo, that you created during setup</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    preview_token</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\${{ secrets.PREVIEW_TOKEN }}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # --- OPTIONAL ---</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # The name of the environment to use for the deployment</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # Default: &#39;preview&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    deployment_env</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">development</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # Whether to use the deployments API</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # Default: &#39;true&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    deployments</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # The name of the author of the resulting commit</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # Default: the GitHub Actor</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    git_author_name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Mona</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # The email of the author of the resulting commit</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # Default: the GitHub Actor&#39;s</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    git_author_email</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">mona@users.noreply.github.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # The committer of the resulting commit</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # Default: copies git_author_name</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    git_committer_name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">GitHub Actions</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # The email of the committer of the resulting commit</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # Default: copies git_author_email</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    git_committer_email</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">41898282+github-actions[bot]@users.noreply.github.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # Whether to comment on PRs</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # Default: &#39;true&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    pr_comment</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;false&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # The name of the branch that hosts the previews</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # Default: gh-pages</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    preview_branch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">custom-pages-branch</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # The name of the workflow file that contains the comment workflow in the preview repo</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # Default: preview.yml</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    preview_workflow_file_name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">custom_workflow.yml</span></span></code></pre></div><div style="display:none;" data-pagefind-meta="base64:JTdCJTIydGl0bGUlMjIlM0ElMjIlRTUlOUMlQTglRTYlOEYlOTAlRTQlQkElQTRwciVFOCVBRiVCNyVFNiVCMSU4MiVFNSU5MCU4RSVFOCU4NyVBQSVFNSU4QSVBOCVFOSU4MyVBOCVFNyVCRCVCMnByZXZpZXclMjBnaXRodWIlMjBwYWdlcyUyMiUyQyUyMmRhdGUlMjIlM0ExNzE4NjY4ODAwMDAwJTJDJTIydGFncyUyMiUzQSU1QiUyMiVFNiU4QSU4MCVFNiU5QyVBRiVFNyVBQyU5NCVFOCVBRSVCMCUyMiUyQyUyMiVFNiU4QSU4MCVFNiU5QyVBRiVFNiU5NSU5OSVFNyVBOCU4QiUyMiUyQyUyMmdpdGh1YiUyMiUyQyUyMmFjdGlvbnMlMjIlMkMlMjJkZXBsb3klMjIlMkMlMjJwcmV2aWV3JTIyJTVEJTJDJTIyY2F0ZWdvcmllcyUyMiUzQSU1QiUyMmdpdGh1YiUyMiUyQyUyMmFjdGlvbnMlMjIlMkMlMjJkZXBsb3klMjIlMkMlMjJwcmV2aWV3JTIyJTVEJTJDJTIyY3JlYXRlZCUyMiUzQSUyMjIwMjQtMDYtMThUMjAlM0EwNCUzQTA0JTIwKFVUQyUyMCUyQjA4JTNBMDApJTIyJTJDJTIyc291cmNlJTIyJTNBbnVsbCUyQyUyMmF1dGhvciUyMiUzQSUyMkVuZEJ1ZyUyMiU3RA=="></div>`,29),l=[n];function o(h,r,p,c,d,k){return s(),a("div",null,l)}const g=e(t,[["render",o]]);export{y as __pageData,g as default};

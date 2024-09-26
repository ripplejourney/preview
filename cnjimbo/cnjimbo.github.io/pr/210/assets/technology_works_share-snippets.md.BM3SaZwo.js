import{_ as e,o as a,c as t,a7 as p}from"./chunks/framework.CXSnVqW3.js";const r="/preview/cnjimbo/cnjimbo.github.io/pr/210/assets/MTYxNTg5OTg3Njc4OA__615899876788.BbtTzaDO.png",i="/preview/cnjimbo/cnjimbo.github.io/pr/210/assets/MTYxNTkwMDE3NDcwMw__615900174703.BTFLQWtt.png",s="/preview/cnjimbo/cnjimbo.github.io/pr/210/assets/snippet1.Cj9aS79b.gif?s1=https:/img.cdn.sugarat.top/images/snippet/snippet1.gif",f=JSON.parse('{"title":"助你轻松编写与分享snippet的VsCode插件","description":"","frontmatter":{"title":"助你轻松编写与分享snippet的VsCode插件","date":"2021-03-16T00:00:00.000Z","tags":["技术笔记","个人作品"],"categories":["技术笔记"]},"headers":[],"relativePath":"technology/works/share-snippets.md","filePath":"technology/works/share-snippets.md","lastUpdated":1720544135000}'),o={name:"technology/works/share-snippets.md"},n=p('<h1 id="助你轻松编写与分享snippet的vscode插件" tabindex="-1">助你轻松编写与分享snippet的VsCode插件 <a class="header-anchor" href="#助你轻松编写与分享snippet的vscode插件" aria-label="Permalink to &quot;助你轻松编写与分享snippet的VsCode插件&quot;">​</a></h1><p><img src="'+r+'" alt="图片" loading="lazy"></p><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p>分享你的代码片段通过npm包的形式，让其它的开发者都能够一键体验</p><p><strong>我</strong>来搞定插件，<strong>你</strong>来编写snippet提示规则</p><p><img src="'+i+'" alt="图片" loading="lazy"></p><p>先给各位哥哥姐姐奉上插件相关链接</p><ul><li><a href="https://github.com/ATQQ/ShareSnippet" target="_blank" rel="noreferrer">仓库地址</a></li><li><a href="https://marketplace.visualstudio.com/items?itemName=sugar.snippet" target="_blank" rel="noreferrer">插件:Share Snippets</a></li></ul><p>老规矩,先给大家简单说说这个是干嘛的,有什么用</p><h3 id="效果" tabindex="-1">效果 <a class="header-anchor" href="#效果" aria-label="Permalink to &quot;效果&quot;">​</a></h3><p><img src="'+s+'" alt="" loading="lazy"></p><p><strong>助你简单快速编写模板代码的snippet</strong></p><p><strong>助你简单快速编写组件代码的snippet</strong></p><p><strong>助你一键在项目中引入别人的snippet</strong></p><p><strong>帮助团队沉淀各种snippet</strong></p><h3 id="如何使用" tabindex="-1">如何使用 <a class="header-anchor" href="#如何使用" aria-label="Permalink to &quot;如何使用&quot;">​</a></h3><p>只需要3步</p><ol><li>安装上述插件</li><li>按照<a href="https://github.com/ATQQ/ShareSnippet/blob/master/README.md#%E5%8A%9F%E8%83%BD" target="_blank" rel="noreferrer">文档</a>简单编写一个以 <strong>.snippets.json</strong>结尾的snippet文件在项目中的任意位置(包括node_modules)</li><li>重启vscode或者F1输入Refresh命令即可</li></ol><p>下面给大家详细讲讲为什么做这个</p><h2 id="背景" tabindex="-1">背景 <a class="header-anchor" href="#背景" aria-label="Permalink to &quot;背景&quot;">​</a></h2><p>日常页面开发中,经常会编写组件/页面</p><p>对于没有<strong>snippet</strong>的代码文件常规操作:</p><ol><li>Ctrl+C</li><li>Ctrl+V</li><li>删除不需要的代码</li><li>编写新的代码</li></ol><p>所以snippet在日常开发中是最常见的提效工具之一</p><p>可以说人人的Vs Code中都装了不少snippet相关的插件</p><h2 id="现有的问题" tabindex="-1">现有的问题 <a class="header-anchor" href="#现有的问题" aria-label="Permalink to &quot;现有的问题&quot;">​</a></h2><h3 id="问题1" tabindex="-1">问题1 <a class="header-anchor" href="#问题1" aria-label="Permalink to &quot;问题1&quot;">​</a></h3><p>一般的大一点的开源组件库都提供了snippet插件,供开发者直接使用</p><p>而一些没有提供snippet插件的UI框架/库 只能由开发者去翻看文档,复制粘贴 示例/属性</p><p>当复制粘贴次数多了,统计下来,难免确实会浪费一些时间</p><h3 id="问题2" tabindex="-1">问题2 <a class="header-anchor" href="#问题2" aria-label="Permalink to &quot;问题2&quot;">​</a></h3><p>在日常开发中一般都避免不开编写各种业务组件,现在又推行的是组件化</p><p>项目一般又是多人并行开发,任务一般会按组件粒度进行工作分配</p><p>当某些公共业务组件需要被其它成员使用的时候,有文档的前提下,第一时间会去看文档,如果没有文档,那么会有如下常规操作:</p><ol><li>翻看其它同事如何调用的,复制粘贴过来使用看看</li><li>翻看业务组件的源码或者类型定义,看看暴露了哪些props</li><li>如果组件是纯js又没有注释/文档,那么就得挨个尝试一下才保险</li></ol><p>这种情况会增加项目的时间成本</p><h3 id="问题3" tabindex="-1">问题3 <a class="header-anchor" href="#问题3" aria-label="Permalink to &quot;问题3&quot;">​</a></h3><p>对于一些做了很多自定义工作的特殊框架项目,页面的模板通常无法使用现有的snippet</p><p>如果框架在不断迭代,又是由多个可单独使用的模块构成</p><p>通过编写snippet插件的话,插件使用者需要主动更新插件,才能获取最新的snippet提示</p><p>如果只是用了框架的某一部分内容,可能插件提供的snippet会太多了,输入一个前缀会出现很多的snippet</p><h2 id="我的解决方案" tabindex="-1">我的解决方案 <a class="header-anchor" href="#我的解决方案" aria-label="Permalink to &quot;我的解决方案&quot;">​</a></h2><h3 id="前期调研" tabindex="-1">前期调研 <a class="header-anchor" href="#前期调研" aria-label="Permalink to &quot;前期调研&quot;">​</a></h3><p>通过调研,发现编写snippet的规则非常简单,能够1分钟就上手</p><p>而编写vs code插件学习成本可能稍微大一点</p><p>官方提供的snippet规则只支持.vscode目录或者本地编辑器全局使用</p><p>不太方便其它人使用你的规则</p><p>官方推荐的就是<strong>想分享自己的snippet给其它人使用,那就编写个snippet插件</strong></p><h3 id="最终方案" tabindex="-1">最终方案 <a class="header-anchor" href="#最终方案" aria-label="Permalink to &quot;最终方案&quot;">​</a></h3><p>想到这里脑瓜子突然灵光一闪,插件学习成本既然高,那么<strong>我来学习插件开发,其它人只需学习编写snippet的配置文件</strong></p><p>其它人要使用的话<strong>只需要装一个插件</strong>,然后将snippet配置文件通过npm包的形式发到npm仓库去</p><p>使用者只需要一条指令就在项目中引入了snippet</p><p>对于UI框架开发者来说也只需要,在自己的依赖中加入对于的snippet包,只要用户装了这个插件那么就能享受其snippet</p><p>接着调研了一晚,发现没有现成的类似插件,机会来了,花了大概一周时间学习与开发</p><p>这个插件就问世了: <a href="https://marketplace.visualstudio.com/items?itemName=sugar.snippet" target="_blank" rel="noreferrer">Share Snippets</a></p><h2 id="总结思考" tabindex="-1">总结思考 <a class="header-anchor" href="#总结思考" aria-label="Permalink to &quot;总结思考&quot;">​</a></h2><p>轮子永远造不完,没有一劳永逸的插件,希望各位提出宝贵的意见来帮助完善</p><p>善于留心开发中遇到的非技术问题,如果浪费了你的时间,调研一下有不有什么工具能帮助节约这部分时间</p><p>如果没有咱就撸一个,帮助自己也帮助它人节约此部分时间</p><h2 id="其它" tabindex="-1">其它 <a class="header-anchor" href="#其它" aria-label="Permalink to &quot;其它&quot;">​</a></h2><ul><li>插件目前还没有logo,希望对插件感兴趣的朋友赶紧pr个logo来嘿嘿</li></ul><blockquote><p><a href="https://juejin.cn/post/6940258156232736798" target="_blank" rel="noreferrer">本文</a>正在参与「掘金 2021 春招闯关活动」, 点击查看 <a href="https://juejin.cn/post/6939329638506168334" target="_blank" rel="noreferrer">活动详情</a></p></blockquote>',62),l=[n];function h(c,d,g,m,u,b){return a(),t("div",{"data-pagefind-body":!0},l)}const k=e(o,[["render",h]]);export{f as __pageData,k as default};

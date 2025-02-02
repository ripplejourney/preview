import{_ as r,o as t,c as l,a4 as a}from"./chunks/framework.BXol-F5r.js";const s="/preview/ripplejourney/ripplejourney.github.io/branch/fix(workflow)/correct-base-URL/assets/MTYwNTI1OTM2NTgyNw__605259365827.B62_yjpA.png",i="/preview/ripplejourney/ripplejourney.github.io/branch/fix(workflow)/correct-base-URL/assets/MTYwNTI1OTgwMzM3OA__605259803378.VpNs5jIZ.png",o="/preview/ripplejourney/ripplejourney.github.io/branch/fix(workflow)/correct-base-URL/assets/MTYwNTI1OTkzMDY1MQ__605259930651.CRNlAOYr.png",n="/preview/ripplejourney/ripplejourney.github.io/branch/fix(workflow)/correct-base-URL/assets/MTYwNTI2MDQzNjQ3Mg__605260436472.o0u2oztv.png",p="/preview/ripplejourney/ripplejourney.github.io/branch/fix(workflow)/correct-base-URL/assets/MTYwNTI2MzIwNzg4MA__605263207880.BcVZq3pT.png",_=JSON.parse('{"title":"Serverless","description":"","frontmatter":{"isTimeLine":true,"title":"Serverless","date":"2020-11-13T00:00:00.000Z","tags":["技术笔记","技术概念"],"categories":["技术笔记"],"head":[["script",{},"!function(p){\\"use strict\\";!function(t){var s=window,e=document,i=p,c=\\"\\".concat(\\"https:\\"===e.location.protocol?\\"https://\\":\\"http://\\",\\"sdk.51.la/js-sdk-pro.min.js\\"),n=e.createElement(\\"script\\"),r=e.getElementsByTagName(\\"script\\")[0];n.type=\\"text/javascript\\",n.setAttribute(\\"charset\\",\\"UTF-8\\"),n.async=!0,n.src=c,n.id=\\"LA_COLLECT\\",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({\\"id\\":\\"Jgmg5avjAUvoyePS\\",\\"ck\\":\\"Jgmg5avjAUvoyePS\\",\\"hashMode\\":true});"]]},"headers":[],"relativePath":"technology/theory/serverless.md","filePath":"technology/theory/serverless.md","lastUpdated":1720544135000}'),c={name:"technology/theory/serverless.md"};function h(d,e,u,g,b,v){return t(),l("div",{"data-pagefind-body":!0},e[0]||(e[0]=[a('<h1 id="serverless" tabindex="-1">Serverless <a class="header-anchor" href="#serverless" aria-label="Permalink to &quot;Serverless&quot;">​</a></h1><p><strong>闲言碎语</strong></p><p>前段时间看了一些<code>Serverless</code>的文章，恰好最近又听了一门<code>Serverless</code>的应用实践课程，就把笔记拿出来和大家分享一下，如表述有误还请各位斧正</p><h2 id="大家关心的问题" tabindex="-1">大家关心的问题 <a class="header-anchor" href="#大家关心的问题" aria-label="Permalink to &quot;大家关心的问题&quot;">​</a></h2><ol><li>Serverless是什么</li><li>为什么Serverless这么火</li><li>与前端的关系</li><li>能帮助前端解决什么问题</li><li>该不该用Serverless来承载业务</li><li>扩缩容策略是什么</li></ol><p>因笔者能力有限，无法全都回答上😄,其它的就交给评论区的各位大牛了</p><h2 id="serverless-是什么" tabindex="-1">Serverless 是什么 <a class="header-anchor" href="#serverless-是什么" aria-label="Permalink to &quot;Serverless 是什么&quot;">​</a></h2><p>Serverless直译为中文是“无服务器”，但是实际上它仍需要服务器，只不过服务器的管理以及资源分配部分对用户不可见</p><p>Serverless 架构即“⽆服务器”架构，它是一种全新的架构方式，是云计算时代⼀种⾰命性的架构模式</p><h2 id="相关概念" tabindex="-1">相关概念 <a class="header-anchor" href="#相关概念" aria-label="Permalink to &quot;相关概念&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="text-align:center;">英文</th><th style="text-align:center;">中文</th><th style="text-align:center;">解释</th><th style="text-align:center;">与Serverless联系</th></tr></thead><tbody><tr><td style="text-align:center;">FaaS <br>----<br> Function as a Service</td><td style="text-align:center;">函数即服务</td><td style="text-align:center;">无服务计算的一种<strong>形式</strong><br>是在无状态容器中运行的事件驱动型计算执行模型</td><td style="text-align:center;">形式</td></tr><tr><td style="text-align:center;">Function Compute</td><td style="text-align:center;">函数计算</td><td style="text-align:center;">事件驱动的全托管<strong>计算服务</strong></td><td style="text-align:center;">形式</td></tr><tr><td style="text-align:center;">Cloud Function</td><td style="text-align:center;">☁️云函数</td><td style="text-align:center;">放在☁️上管理的一个函数</td><td style="text-align:center;">命名</td></tr></tbody></table><h2 id="传统开发" tabindex="-1">传统开发 <a class="header-anchor" href="#传统开发" aria-label="Permalink to &quot;传统开发&quot;">​</a></h2><h3 id="开发流程" tabindex="-1">开发流程 <a class="header-anchor" href="#开发流程" aria-label="Permalink to &quot;开发流程&quot;">​</a></h3><p><img src="'+s+'" alt="图片" loading="lazy"></p><h3 id="开发之外的问题" tabindex="-1">开发之外的问题 <a class="header-anchor" href="#开发之外的问题" aria-label="Permalink to &quot;开发之外的问题&quot;">​</a></h3><p>对开发团队的要求越来越高</p><p><img src="'+i+'" alt="图片" loading="lazy"></p><h3 id="上线后" tabindex="-1">上线后 <a class="header-anchor" href="#上线后" aria-label="Permalink to &quot;上线后&quot;">​</a></h3><p><img src="'+o+'" alt="图片" loading="lazy"></p><ul><li>运维复杂</li><li>测试复杂</li><li>扩展复杂</li><li>稳定安全的运行</li></ul><p>解决上述困境的方案：<strong>抽象+上云</strong></p><h2 id="技术变革-思想先行👏" tabindex="-1">技术变革,思想先行👏 <a class="header-anchor" href="#技术变革-思想先行👏" aria-label="Permalink to &quot;技术变革,思想先行👏&quot;">​</a></h2><p><img src="'+n+'" alt="图片" loading="lazy"></p><p>名词解释（云计算中的一些概念）：</p><ul><li>On-Premise: 本地部署</li><li>IaaS: 基础设施即服务</li><li>CaaS: 通信即服务</li><li>PaaS: 平台即服务</li><li>SaaS: 软件即服务</li></ul><p><a href="https://www.jianshu.com/p/a37baa7c3eff" target="_blank" rel="noreferrer">云原生</a>特点：</p><ul><li>业务开发变轻，变薄，聚焦业务逻辑</li><li>基础设施变重，变厚，变标准</li></ul><p>云计算的一些特点：</p><ul><li>节约成本</li><li>缩短应用部署时间</li><li>系统自动扩容</li><li>业务升级不中断</li><li>故障自动检测定位</li><li>。。。💡</li></ul><p><strong>“上云”已成为各个行业技术变革的必经之路</strong></p><h2 id="云的未来-serverless" tabindex="-1">云的未来 - Serverless <a class="header-anchor" href="#云的未来-serverless" aria-label="Permalink to &quot;云的未来 - Serverless&quot;">​</a></h2><p>追求更低的心理成本，就是能力闭环</p><p><img src="'+p+'" alt="图片" loading="lazy"></p><p>Serverless 可能是目前资源抽象最高级别，为能力闭环带来了可能性</p><h2 id="价值" tabindex="-1">价值 <a class="header-anchor" href="#价值" aria-label="Permalink to &quot;价值&quot;">​</a></h2><blockquote><p>Serverless 真正的价值不在于节省了成本，而在于节省了时间,真正的价值在于时间效率，而不是成本效率真正的价值在于时间效率，而不是成本效率</p></blockquote><p>传统云计算和Serverless云计算最主要的区别在于客户是否需要为未被使用或者未被充分使用的资源支付费用</p><p>以前，无论是内部数据中心还是云上，我们都需要提前预测容量和资源需求，并且提前准备好</p><p>在传统开发中，我们需要提前启动服务器以便随时执行调整镜像大小的服务</p><p>而在Serverless配置中，只需要调整代码执行的时机，即只在函数被调用时候执行</p><p>Serverless计算服务将函数作为输入，执行逻辑，返回输出，之后关闭。即只需要为函数实际执行所消耗的资源付费，即用即付（Pay-as-you-play），只用为实际使用的资源付费.</p><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>Serverless是一种思想，不一定是所谓的 FaaS + BaaS（后端即服务）</p><h3 id="_1-为什么serverless这么火" tabindex="-1">1. 为什么Serverless这么火 <a class="header-anchor" href="#_1-为什么serverless这么火" aria-label="Permalink to &quot;1. 为什么Serverless这么火&quot;">​</a></h3><blockquote><p>在中国，能算清账的公司已经打败了99%的公司</p></blockquote><p>现代软件开发成本非常的高，主要就在于 “成本意识”</p><p>函数即服务（FaaS）作为 Serverless 时代重要的发展⽅向，能够从⼯程效率、可靠性、性能、成本等⽅方⾯给开发者（企业）带来巨大的价值，尤其是能够极大地提升研发效率。</p><p>因此，拥抱FaaS成为开发者关心的重要技术领域</p><h3 id="_2-能帮助前端解决什么问题" tabindex="-1">2. 能帮助前端解决什么问题 <a class="header-anchor" href="#_2-能帮助前端解决什么问题" aria-label="Permalink to &quot;2. 能帮助前端解决什么问题&quot;">​</a></h3><p>Node.js的出现 让前端开始有了成本意识</p><p>是否在项目中使用Node的心理活动：</p><ul><li>用: 具备全栈视角，参与更多的架构决策，有更多优化手段</li><li>不用: 担心出问题，维护成本高</li></ul><p>本质问题：</p><blockquote><p>生产关系 与 生产力 的问题</p></blockquote><p>Node.js可以解决简单的 <strong>能力自治</strong> , 不依赖于后端人员（业务中前期，后端人员少时）</p><p>随着业务发展，成熟的业务追求更高的稳定性，会逐渐抛弃 Node.js</p><p>Node.js带来了 <code>运维成本高</code> 的问题，是Node.js在企业落地的一个阻碍</p><p>理想情况是开发人员只关心业务逻辑：</p><ul><li>常规应用 <ul><li>业务逻辑（开发人员负责）</li><li>外部服务集成（开发人员负责）</li><li>基础设施管理（开发人员负责）</li></ul></li><li>Serverless应用 <ul><li>业务逻辑（开发人员负责）</li><li>外部服务集成（云商负责）</li><li>基础设施管理（云商负责）</li></ul></li></ul><p>对于前端开发者而言，只是想要个接口，或者是包装一个接口，不一定要了解Node Web框架</p><p>Node.js成也Eventloop败也Eventloop，本身Eventloop是黑盒，开发将什么样的代码堆进去你是很难全部覆盖的，偶尔会出现Eventloop阻塞的情况，排查起来是极为痛苦的</p><p>利用Serverless，可以有效防止Eventloop阻塞。比如加密是常见场景，但本身执行效率是非常慢的。如果加解密和你的其他任务放到一起，是很容易导致Eventloop阻塞的</p><p>Serverless能够让依赖Node服务的前端极大减低成本，开发者只需关注业务逻辑，无需关心运维，扩容，Web框架</p><p><strong>本地开发一个函数，然后通过CLI发布到Serverless云上，必然是一个趋势</strong></p><div class="tip custom-block"><p class="custom-block-title">参考</p><ul><li><a href="http://dockone.io/article/5999" target="_blank" rel="noreferrer">Serverless 本质是什么</a></li><li><a href="https://www.jianshu.com/p/a37baa7c3eff" target="_blank" rel="noreferrer">简书 · 云原生</a></li><li><a href="https://zhuanlan.zhihu.com/p/109234861" target="_blank" rel="noreferrer">知乎 · Serverless函数计算简介以及典型场景实践</a></li><li><a href="https://www.phodal.com/blog/Serverless-architecture-what-is-Serverless-architecture/" target="_blank" rel="noreferrer">什么是 Serverless 架构</a></li><li><a href="https://juejin.im/post/6844903887091023885" target="_blank" rel="noreferrer">掘金· 分享狼叔关于《大前端工程化的实践与思考》</a></li></ul></div>',65)]))}const S=r(c,[["render",h]]);export{_ as __pageData,S as default};

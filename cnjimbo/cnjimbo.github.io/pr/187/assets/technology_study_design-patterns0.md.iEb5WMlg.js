import{_ as e,o as a,c as l,a5 as t}from"./chunks/framework.Dp3bDdye.js";const p=JSON.parse('{"title":"设计模式-设计原则","description":"","frontmatter":{"title":"设计模式-设计原则","date":"2021-05-18T00:00:00.000Z","tags":["技术笔记","学习笔记"],"categories":["技术笔记"]},"headers":[],"relativePath":"technology/study/design-patterns0.md","filePath":"technology/study/design-patterns0.md","lastUpdated":1719297432000}'),o={name:"technology/study/design-patterns0.md"},i=t('<h1 id="设计模式-设计原则" tabindex="-1">设计模式-设计原则 <a class="header-anchor" href="#设计模式-设计原则" aria-label="Permalink to &quot;设计模式-设计原则&quot;">​</a></h1><blockquote><p>设计模式往往是软件设计中的最佳实践，是前人对问题解决的经验总结。</p></blockquote><blockquote><p>设计原则是设计模式的指导理论，它可以帮助我们规避不良的软件设计</p></blockquote><h2 id="solid设计原则" tabindex="-1">SOLID设计原则 <a class="header-anchor" href="#solid设计原则" aria-label="Permalink to &quot;SOLID设计原则&quot;">​</a></h2><h3 id="单一职责原则" tabindex="-1">单一职责原则 <a class="header-anchor" href="#单一职责原则" aria-label="Permalink to &quot;单一职责原则&quot;">​</a></h3><blockquote><p>（Single Responsibility Principle）</p></blockquote><p>如果一个类有多于一个的动机被改变，那么这个类就具有多于一个的职责。而单一职责原则就是指一个类或者模块应该有且只有一个改变的原因。</p><h3 id="开放封闭原则" tabindex="-1">开放封闭原则 <a class="header-anchor" href="#开放封闭原则" aria-label="Permalink to &quot;开放封闭原则&quot;">​</a></h3><blockquote><p>（Opened Closed Principle）</p></blockquote><ul><li>对扩展开放，意味着有新的需求或变化时，可以对现有代码进行扩展，以适应新的情况。</li><li>对修改封闭，意味着类一旦设计完成，就可以独立完成其工作，而不要对类进行任何修改。</li></ul><h3 id="里氏替换原则" tabindex="-1">里氏替换原则 <a class="header-anchor" href="#里氏替换原则" aria-label="Permalink to &quot;里氏替换原则&quot;">​</a></h3><blockquote><p>（Liskov Substitution Principle）</p></blockquote><ul><li>子类可以扩展父类的功能，但不能改变父类原有的功能。</li><li>子类继承父类时，除添加新的方法完成新增功能外，尽量不要重写父类的方法。</li></ul><h3 id="接口隔离原则" tabindex="-1">接口隔离原则 <a class="header-anchor" href="#接口隔离原则" aria-label="Permalink to &quot;接口隔离原则&quot;">​</a></h3><blockquote><p>（Interface Segregation Principle）</p></blockquote><ul><li>建立单一接口，不要建立庞大臃肿的接口，尽量细化接口，接口中的方法尽量少</li><li>不应该强行要求客户端依赖于它们不用的接口</li><li>类之间的依赖应该建立在最小的接口上面</li></ul><h3 id="依赖反转原则" tabindex="-1">依赖反转原则 <a class="header-anchor" href="#依赖反转原则" aria-label="Permalink to &quot;依赖反转原则&quot;">​</a></h3><blockquote><p>（Dependency Inversion Principle）</p></blockquote><ul><li>接口和抽象类不应该依赖于实现类，而实现类依赖接口或抽象类</li><li>高层模块不应该直接依赖于底层模块的具体实现，而应该依赖于底层的抽象</li></ul><h2 id="其它原则" tabindex="-1">其它原则 <a class="header-anchor" href="#其它原则" aria-label="Permalink to &quot;其它原则&quot;">​</a></h2><h3 id="迪米特法则" tabindex="-1">迪米特法则 <a class="header-anchor" href="#迪米特法则" aria-label="Permalink to &quot;迪米特法则&quot;">​</a></h3><blockquote><p>又称最少知道原则（Demeter Principle）</p></blockquote><ul><li>一个类对于其他类知道的越少越好</li><li>一个对象应当对其他对象有尽可能少的了解,只和朋友通信，不和陌生人说话</li></ul><h3 id="合成复用原则" tabindex="-1">合成复用原则 <a class="header-anchor" href="#合成复用原则" aria-label="Permalink to &quot;合成复用原则&quot;">​</a></h3><blockquote><p>（Composite Reuse Principle）</p></blockquote><ul><li>复用时要尽量使用组合/聚合关系（关联关系），少用继承</li></ul><h2 id="todo" tabindex="-1">TODO <a class="header-anchor" href="#todo" aria-label="Permalink to &quot;TODO&quot;">​</a></h2><p>吸收知识后补充上述内容的示例</p>',28),r=[i];function n(c,d,s,h,u,U){return a(),l("div",{"data-pagefind-body":!0,"data-pagefind-meta":"base64:JTdCJTIydGl0bGUlMjIlM0ElMjIlRTglQUUlQkUlRTglQUUlQTElRTYlQTglQTElRTUlQkMlOEYtJUU4JUFFJUJFJUU4JUFFJUExJUU1JThFJTlGJUU1JTg4JTk5JTIyJTJDJTIyZGF0ZSUyMiUzQTE2MjEyOTYwMDAwMDAlMkMlMjJ0YWdzJTIyJTNBJTVCJTIyJUU2JThBJTgwJUU2JTlDJUFGJUU3JUFDJTk0JUU4JUFFJUIwJTIyJTJDJTIyJUU1JUFEJUE2JUU0JUI5JUEwJUU3JUFDJTk0JUU4JUFFJUIwJTIyJTVEJTJDJTIyY2F0ZWdvcmllcyUyMiUzQSU1QiUyMiVFNiU4QSU4MCVFNiU5QyVBRiVFNyVBQyU5NCVFOCVBRSVCMCUyMiU1RCU3RA=="},r)}const b=e(o,[["render",n]]);export{p as __pageData,b as default};

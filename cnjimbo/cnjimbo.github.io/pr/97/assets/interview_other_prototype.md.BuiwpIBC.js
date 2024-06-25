import{_ as e,o as t,c as a,a6 as i}from"./chunks/framework.zgmx-p1e.js";const h=JSON.parse('{"title":"如何理解原型？如何理解原型链？","description":"","frontmatter":{"isTimeLine":true,"title":"如何理解原型？如何理解原型链？","date":"2020-03-10T00:00:00.000Z","tags":["面试","其它"],"categories":["面试"]},"headers":[],"relativePath":"interview/other/prototype.md","filePath":"interview/other/prototype.md","lastUpdated":1670770660000}'),o={name:"interview/other/prototype.md"},r=i('<h1 id="如何理解原型-如何理解原型链" tabindex="-1">如何理解原型？如何理解原型链？ <a class="header-anchor" href="#如何理解原型-如何理解原型链" aria-label="Permalink to &quot;如何理解原型？如何理解原型链？&quot;">​</a></h1><h2 id="原型" tabindex="-1">原型 <a class="header-anchor" href="#原型" aria-label="Permalink to &quot;原型&quot;">​</a></h2><p>每一个JavaScript对象在创建的时候就会与之关联另一个对象，这个对象就是我们所说的原型，每一个对象都会从原型&quot;继承&quot;属性,原型是一个含了很多函数的对象</p><p>每一个JavaScript对象都具有的一个属性，叫__proto__，这个属性会指向该对象的原型。</p><h2 id="原型链" tabindex="-1">原型链 <a class="header-anchor" href="#原型链" aria-label="Permalink to &quot;原型链&quot;">​</a></h2><p>原型链就是多个对象通过 <code>__proto__</code> 的方式连接了起来,相互关联的原型组成的链状结构就是原型链</p><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><ul><li>Object 是所有对象的祖先，所有对象都可以通过 <code>__proto__</code> 找到它</li><li>Function 是所有函数的祖先，所有函数都可以通过 <code>__proto__</code> 找到它</li><li>函数的 prototype 是一个对象</li><li>对象的 <code>__proto__</code> 属性指向原型， <code>__proto__</code> 将对象和原型连接起来组成了原型链</li></ul><p><img src="https://img.cdn.sugarat.top/mdImg/MTU4Mzg0NDg5ODg5Mg==583844898892" alt="图片" loading="lazy"></p><div class="tip custom-block"><p class="custom-block-title">参考</p><p><a href="https://github.com/mqyqingfeng/Blog/issues/2" target="_blank" rel="noreferrer">冴羽:JavaScript深入之从原型到原型链</a><br><a href="https://github.com/KieSun/Dream/issues/2" target="_blank" rel="noreferrer">KieSun:深度解析原型中的各个难点</a></p></div><div style="display:none;" data-pagefind-meta="base64:JTdCJTIyaXNUaW1lTGluZSUyMiUzQXRydWUlMkMlMjJ0aXRsZSUyMiUzQSUyMiVFNSVBNiU4MiVFNCVCRCU5NSVFNyU5MCU4NiVFOCVBNyVBMyVFNSU4RSU5RiVFNSU5RSU4QiVFRiVCQyU5RiVFNSVBNiU4MiVFNCVCRCU5NSVFNyU5MCU4NiVFOCVBNyVBMyVFNSU4RSU5RiVFNSU5RSU4QiVFOSU5MyVCRSVFRiVCQyU5RiUyMiUyQyUyMmRhdGUlMjIlM0ExNTgzNzk4NDAwMDAwJTJDJTIydGFncyUyMiUzQSU1QiUyMiVFOSU5RCVBMiVFOCVBRiU5NSUyMiUyQyUyMiVFNSU4NSVCNiVFNSVBRSU4MyUyMiU1RCUyQyUyMmNhdGVnb3JpZXMlMjIlM0ElNUIlMjIlRTklOUQlQTIlRTglQUYlOTUlMjIlNUQlN0Q="></div>',11),l=[r];function c(s,d,_,U,n,p){return t(),a("div",null,l)}const V=e(o,[["render",c]]);export{h as __pageData,V as default};

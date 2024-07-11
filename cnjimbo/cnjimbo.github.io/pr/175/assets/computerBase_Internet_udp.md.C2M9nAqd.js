import{_ as l,o as a,c as i,a5 as e}from"./chunks/framework.Y3uWLRGS.js";const t="/preview/cnjimbo/cnjimbo.github.io/pr/175/assets/MTU4MzIyMDM3OTg1MA__583220379850.B3YMVIBu.png",p=JSON.parse('{"title":"UDP协议","description":"","frontmatter":{"sidebar":{"title":"UDP协议","step":0},"isTimeLine":true,"title":"UDP协议","date":"2020-04-14T00:00:00.000Z","tags":["计算机基础","计算机网络"],"categories":["计算机基础"]},"headers":[],"relativePath":"computerBase/Internet/udp.md","filePath":"computerBase/Internet/udp.md","lastUpdated":1720544135000}'),U={name:"computerBase/Internet/udp.md"},J=e('<h1 id="udp协议" tabindex="-1">UDP协议 <a class="header-anchor" href="#udp协议" aria-label="Permalink to &quot;UDP协议&quot;">​</a></h1><ul><li>面向无连接:不需要在正式传递数据之前先连接起双方</li><li>数据报文的搬运工:不保证有序且不丢失的传递到对端</li><li>没有任何控制流量的算法</li></ul><h2 id="面向无连接" tabindex="-1">面向无连接 <a class="header-anchor" href="#面向无连接" aria-label="Permalink to &quot;面向无连接&quot;">​</a></h2><ul><li>UDP 是不需要和 TCP 一样在发送数据前进行三次握手建立连接，想发数据就可以开始发送了</li><li>只是数据报文的搬运工，不会对数据报文进行任何拆分和拼接操作 <ul><li>发送端，应用层将数据传递给传输层的 UDP 协议，UDP 只会给数据增加一个 UDP 头,表示用的是 UDP 协议，然后就传递给网络层了</li><li>接收端，网络层将数据传递给传输层，UDP 只去除 IP 报文头就传递给应用层，不会任何拼接操作</li></ul></li></ul><h2 id="不可靠性" tabindex="-1">不可靠性 <a class="header-anchor" href="#不可靠性" aria-label="Permalink to &quot;不可靠性&quot;">​</a></h2><ul><li>不可靠性体现在无连接上:通信不需要建立连接,想发就发</li><li>收到什么数据就发生什么数据,不对数据进行校验与备份</li><li>不关心发送端是否收到了数据</li><li>UDP没有拥堵控制会以恒定的速度发送数据:在网络条件不好的情况下会导致丢包</li></ul><h2 id="高效" tabindex="-1">高效 <a class="header-anchor" href="#高效" aria-label="Permalink to &quot;高效&quot;">​</a></h2><p>UDP 的头部开销小，只有八字节，相比 TCP 的至少二十字节要少得多，在传输数据报文时是高效的。</p><p><img src="'+t+'" alt="图片" loading="lazy"></p><p>UDP 头部包含了:</p><ul><li>两个十六位的端口号 <ul><li>源端口（可选字段）</li><li>目标端口</li></ul></li><li>整个数据报文的长度</li><li>整个数据报文的检验和（IPv4 可选 字段），该字段用于发现头部信息和数据中的错误</li></ul><h2 id="传输方式" tabindex="-1">传输方式 <a class="header-anchor" href="#传输方式" aria-label="Permalink to &quot;传输方式&quot;">​</a></h2><ul><li>一对一:单播</li><li>一对多:多播（组播）</li><li>一对所有:广播</li></ul><h2 id="适合场景" tabindex="-1">适合场景 <a class="header-anchor" href="#适合场景" aria-label="Permalink to &quot;适合场景&quot;">​</a></h2><p>对当前网络通讯质量要求不高的时候,实时性要求高的地方都可以看到 UDP 的身影，要求网络通讯速度尽量的快，这时就使用UDP</p><ul><li>网游</li><li>直播</li><li>语音,视频</li></ul><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><ul><li>UDP 相比 TCP 简单的多，不需要建立连接，不需要验证数据报文，不需要流量控制，只会把想发的数据报文直接发送给对端</li><li>虽然 UDP 并没有 TCP 传输来的准确，但是也能在很多实时性要求高的地方有所作为</li></ul><div class="tip custom-block"><p class="custom-block-title">参考</p><p><a href="https://yuchengkai.cn/docs/cs/#udp" target="_blank" rel="noreferrer">网络-UDP</a></p></div>',19),r=[J];function o(d,s,c,n,T,u){return a(),i("div",{"data-pagefind-body":!0,"data-pagefind-meta":"base64:JTdCJTIyc2lkZWJhciUyMiUzQSU3QiUyMnRpdGxlJTIyJTNBJTIyVURQJUU1JThEJThGJUU4JUFFJUFFJTIyJTJDJTIyc3RlcCUyMiUzQTAlN0QlMkMlMjJpc1RpbWVMaW5lJTIyJTNBdHJ1ZSUyQyUyMnRpdGxlJTIyJTNBJTIyVURQJUU1JThEJThGJUU4JUFFJUFFJTIyJTJDJTIyZGF0ZSUyMiUzQTE1ODY4MjI0MDAwMDAlMkMlMjJ0YWdzJTIyJTNBJTVCJTIyJUU4JUFFJUExJUU3JUFFJTk3JUU2JTlDJUJBJUU1JTlGJUJBJUU3JUExJTgwJTIyJTJDJTIyJUU4JUFFJUExJUU3JUFFJTk3JUU2JTlDJUJBJUU3JUJEJTkxJUU3JUJCJTlDJTIyJTVEJTJDJTIyY2F0ZWdvcmllcyUyMiUzQSU1QiUyMiVFOCVBRSVBMSVFNyVBRSU5NyVFNiU5QyVCQSVFNSU5RiVCQSVFNyVBMSU4MCUyMiU1RCU3RA=="},r)}const P=l(U,[["render",o]]);export{p as __pageData,P as default};

import{_ as i,o as d,c as l,e as t,a,x as o,p,L as r}from"./chunks/framework.BXol-F5r.js";const v=JSON.parse('{"title":"堆排序","description":"","frontmatter":{"sidebar":{"title":"排序--堆排序","step":4},"isTimeLine":true,"title":"堆排序","date":"2020-08-02T00:00:00.000Z","tags":["手撕代码","算法与数据结构"],"categories":["手撕代码"],"head":[["script",{},"!function(p){\\"use strict\\";!function(t){var s=window,e=document,i=p,c=\\"\\".concat(\\"https:\\"===e.location.protocol?\\"https://\\":\\"http://\\",\\"sdk.51.la/js-sdk-pro.min.js\\"),n=e.createElement(\\"script\\"),r=e.getElementsByTagName(\\"script\\")[0];n.type=\\"text/javascript\\",n.setAttribute(\\"charset\\",\\"UTF-8\\"),n.async=!0,n.src=c,n.id=\\"LA_COLLECT\\",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({\\"id\\":\\"Jgmg5avjAUvoyePS\\",\\"ck\\":\\"Jgmg5avjAUvoyePS\\",\\"hashMode\\":true});"]]},"headers":[],"relativePath":"coding/algorithm/headSort.md","filePath":"coding/algorithm/headSort.md","lastUpdated":1719297432000}'),m={name:"coding/algorithm/headSort.md"};function c(u,e,h,f,g,L){const n=r("company"),s=r("LeetCode");return d(),l("div",{"data-pagefind-body":!0},[e[1]||(e[1]=t("h1",{id:"堆排序",tabindex:"-1"},[a("堆排序 "),t("a",{class:"header-anchor",href:"#堆排序","aria-label":'Permalink to "堆排序"'},"​")],-1)),o(n,{value:"几种常见时间复杂度比较低的排序算法之一"}),o(s,{href:"https://leetcode-cn.com/problems/sort-an-array/"},{default:p(()=>e[0]||(e[0]=[a("912：排序树组")])),_:1}),e[2]||(e[2]=t("p",null,"给你一个整数数组 nums，请你将该数组升序排列。",-1)),e[3]||(e[3]=t("h2",{id:"原理",tabindex:"-1"},[a("原理 "),t("a",{class:"header-anchor",href:"#原理","aria-label":'Permalink to "原理"'},"​")],-1)),e[4]||(e[4]=t("blockquote",null,[t("p",null,"堆排序的思想就是先将待排序的序列建成大根堆，使得每个父节点的元素大于等于它的子节点。此时整个序列最大值即为堆顶元素，我们将其与末尾元素交换，使末尾元素为最大值，然后再调整堆顶元素使得剩下的 n-1n−1 个元素仍为大根堆，再重复执行以上操作我们即能得到一个有序的序列。")],-1)),e[5]||(e[5]=t("h2",{id:"实现",tabindex:"-1"},[a("实现 "),t("a",{class:"header-anchor",href:"#实现","aria-label":'Permalink to "实现"'},"​")],-1)),e[6]||(e[6]=t("p",null,"。。。未完待续",-1))])}const x=i(m,[["render",c]]);export{v as __pageData,x as default};

import{_ as t,o as h,c as n,I as k,w as r,a5 as a,j as i,a as s,D as p}from"./chunks/framework.BCe1z7mA.js";const l="/preview/cnjimbo/cnjimbo.github.io/pr/179/assets/MTU4MzI5MzY2MjYwOQ__583293662609.Ca2Duvn9.png",d="/preview/cnjimbo/cnjimbo.github.io/pr/179/assets/MTU4MzI5MzYzMDg4Nw__583293630887.CJGp-oz3.png",o="/preview/cnjimbo/cnjimbo.github.io/pr/179/assets/MTU4MzI5Mzc0MDM4Nw__583293740387.DHl01q9v.png",E="/preview/cnjimbo/cnjimbo.github.io/pr/179/assets/MTU4MzI5NDM0ODk2Nw__583294348967.BlT_n2D-.png",c="/preview/cnjimbo/cnjimbo.github.io/pr/179/assets/MTU4MzI5NDgzMzE2NA__583294833164.D0_4CAkL.png",g="/preview/cnjimbo/cnjimbo.github.io/pr/179/assets/MTU4MzI5NDAwODM1MA__583294008350.BdzqZ0QN.png",y="/preview/cnjimbo/cnjimbo.github.io/pr/179/assets/MTU4MzI5NDkzNTYxOQ__583294935619.BUa1xkGe.png",u="/preview/cnjimbo/cnjimbo.github.io/pr/179/assets/MTYwNDc0MDczMDcyMQ__604740730721.DhQicxxp.png",_="/preview/cnjimbo/cnjimbo.github.io/pr/179/assets/MTYwNDc0MjYxODY2Nw__604742618667.CG0h8rMM.png",b="/preview/cnjimbo/cnjimbo.github.io/pr/179/assets/MTYwNDc0Mjc1NjE5MA__604742756190.DwkNYngN.png",m="/preview/cnjimbo/cnjimbo.github.io/pr/179/assets/MTYwNDc1MjM0MjkwMg__604752342902.Ce7AvH30.png",F="/preview/cnjimbo/cnjimbo.github.io/pr/179/assets/MTYwNDc1MzgyODAyMg__604753828022.BwImhqB9.png",hi=JSON.parse('{"title":"浏览器-缓存机制","description":"","frontmatter":{"sidebar":{"title":"缓存机制","step":3},"isTimeLine":true,"title":"浏览器-缓存机制","date":"2020-04-14T00:00:00.000Z","tags":["大前端","浏览器"],"categories":["大前端"]},"headers":[],"relativePath":"bigWeb/browser/cache.md","filePath":"bigWeb/browser/cache.md","lastUpdated":1720544135000}'),C={name:"bigWeb/browser/cache.md"},M=a("",23),T=i("p",null,"目录结构",-1),x=i("div",{class:"language-js vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"js"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"serviceWorker"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"/")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"├── index.css")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"├── index.html")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"├── index.js")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"└── sw.js")])])])],-1),f=i("p",null,"index.css",-1),v=i("div",{class:"language-css vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"css"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"h1"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"{")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"    color"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"red"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")])])])],-1),D=i("p",null,"index.html",-1),B=i("div",{class:"language-html vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"html"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"head"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"link"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," rel"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"stylesheet"'),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," href"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"./index.css"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"head"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"body"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"h1"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">Service Worker Test</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"h1"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," src"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"./index.js"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"></"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," src"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"./sw.js"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"></"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"body"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")])])])],-1),U=i("p",null,"index.js",-1),j=i("div",{class:"language-js vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"js"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"console."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"log"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'index.js'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// 注册")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"if"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," (navigator.serviceWorker) {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  console."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"log"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'开始注册service Worker'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  navigator.serviceWorker")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"register"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'sw.js'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"then"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(("),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"registration"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"=>"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      console."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"log"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'service worker 注册成功'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    })")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"catch"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(("),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"err"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"=>"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      console."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"log"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'servcie worker 注册失败'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    })")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")])])])],-1),A=i("p",null,"sw.js",-1),N=i("div",{class:"language-js vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"js"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"/**")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}}," * 监听 `install` 事件，回调中缓存所需文件")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}}," */")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"self."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"addEventListener"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'install'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", ("),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"e"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"=>"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  e."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"waitUntil"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    caches."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"open"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'my-cache'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"then"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(("),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"cache"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"=>"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"      return"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," cache."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"addAll"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(["),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'./index.html'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'./index.js'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'./index.css'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"])")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    })")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  )")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"})")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// 拦截所有请求事件")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// 如果缓存中已经有请求的数据就直接用缓存，否则去请求数据")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"self."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"addEventListener"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'fetch'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", ("),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"e"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"=>"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  e."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"respondWith"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    caches."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"match"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(e.request)."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"then"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(("),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"response"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"=>"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"      if"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," (response) {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"        return"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," response")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      console."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"log"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'fetch source'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    })")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  )")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"})")])])])],-1),w=i("p",null,"显示效果",-1),q=i("p",null,[i("img",{src:l,alt:"图片",loading:"lazy"})],-1),J=i("p",null,"第一次运行输出",-1),P=i("p",null,[i("img",{src:d,alt:"图片",loading:"lazy"})],-1),S=i("p",null,"查看Service Worker(生效)",-1),I=i("p",null,[i("img",{src:o,alt:"图片",loading:"lazy"})],-1),z=i("p",null,"查看cache(里面有我们缓存的文件)",-1),V=i("p",null,[i("img",{src:E,alt:"图片",loading:"lazy"})],-1),W=i("p",null,"我们改动index.css,然后保存",-1),Q=i("div",{class:"language-css vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"css"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"h1"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"{")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"    color"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"blue"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")])])])],-1),L=i("p",null,"显示效果(不发生改变,说明是 我们设置的service Worker生效了)",-1),H=i("p",null,[i("img",{src:l,alt:"图片",loading:"lazy"})],-1),O=i("p",null,"查看控制台中的network",-1),R=i("p",null,[i("img",{src:c,alt:"图片",loading:"lazy"})],-1),Y=i("p",null,[s("查看控制台(打印了"),i("code",null,"fetch source"),s(",说明是从service worker中取的)")],-1),G=i("p",null,[i("img",{src:g,alt:"图片",loading:"lazy"})],-1),Z=i("p",null,"以上就是ServiceWorker的使用方式",-1),$=a("",96);function X(K,ii,si,ai,li,ei){const e=p("my-details");return h(),n("div",{"data-pagefind-body":!0,"data-pagefind-meta":"base64:JTdCJTIyc2lkZWJhciUyMiUzQSU3QiUyMnRpdGxlJTIyJTNBJTIyJUU3JUJDJTkzJUU1JUFEJTk4JUU2JTlDJUJBJUU1JTg4JUI2JTIyJTJDJTIyc3RlcCUyMiUzQTMlN0QlMkMlMjJpc1RpbWVMaW5lJTIyJTNBdHJ1ZSUyQyUyMnRpdGxlJTIyJTNBJTIyJUU2JUI1JThGJUU4JUE3JTg4JUU1JTk5JUE4LSVFNyVCQyU5MyVFNSVBRCU5OCVFNiU5QyVCQSVFNSU4OCVCNiUyMiUyQyUyMmRhdGUlMjIlM0ExNTg2ODIyNDAwMDAwJTJDJTIydGFncyUyMiUzQSU1QiUyMiVFNSVBNCVBNyVFNSU4OSU4RCVFNyVBQiVBRiUyMiUyQyUyMiVFNiVCNSU4RiVFOCVBNyU4OCVFNSU5OSVBOCUyMiU1RCUyQyUyMmNhdGVnb3JpZXMlMjIlM0ElNUIlMjIlRTUlQTQlQTclRTUlODklOEQlRTclQUIlQUYlMjIlNUQlN0Q="},[M,k(e,{title:"使用示例"},{default:r(()=>[T,x,f,v,D,B,U,j,A,N,w,q,J,P,S,I,z,V,W,Q,L,H,O,R,Y,G,Z]),_:1}),$])}const ni=t(C,[["render",X]]);export{hi as __pageData,ni as default};

import{U as o,aU as p,aV as u,aW as l,aX as c,aY as f,aZ as d,a_ as m,a$ as h,b0 as g,b1 as A,d as b,u as P,y as v,x as y,b2 as w,b3 as C,b4 as R,a2 as _}from"./chunks/framework.FY6SJXEJ.js";import{R as E}from"./chunks/theme.6jRxfUsh.js";function i(e){if(e.extends){const a=i(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const s=i(E),S=b({name:"VitePressApp",setup(){const{site:e,lang:a,dir:t}=P();return v(()=>{y(()=>{document.documentElement.lang=a.value,document.documentElement.dir=t.value})}),e.value.router.prefetchLinks&&w(),C(),R(),s.setup&&s.setup(),()=>_(s.Layout)}});async function T(){globalThis.__VITEPRESS__=!0;const e=D(),a=x();a.provide(u,e);const t=l(e.route);return a.provide(c,t),a.component("Content",f),a.component("ClientOnly",d),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:a,router:e,siteData:m}),{app:a,router:e,data:t}}function x(){return h(S)}function D(){let e=o,a;return g(t=>{let n=A(t),r=null;return n&&(e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),r=import(n)),o&&(e=!1),r},s.NotFound)}o&&T().then(({app:e,router:a,data:t})=>{a.go().then(()=>{p(a.route,t.site),e.mount("#app")})});export{T as createApp};

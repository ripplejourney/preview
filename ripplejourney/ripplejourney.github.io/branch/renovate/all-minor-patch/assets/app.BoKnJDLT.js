import{R as p}from"./chunks/theme.DrtddSeN.js";import{W as s,aP as i,aQ as u,aR as c,aS as l,aT as f,aU as d,aV as m,aW as h,aX as g,aY as A,d as P,u as R,h as v,H as w,aZ as y,a_ as C,a$ as S,z as T}from"./chunks/framework.B_LsCg9l.js";function r(e){if(e.extends){const a=r(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const n=r(p),b=P({name:"VitePressApp",setup(){const{site:e,lang:a,dir:t}=R();return v(()=>{w(()=>{document.documentElement.lang=a.value,document.documentElement.dir=t.value})}),e.value.router.prefetchLinks&&y(),C(),S(),n.setup&&n.setup(),()=>T(n.Layout)}});async function E(){globalThis.__VITEPRESS__=!0;const e=D(),a=_();a.provide(u,e);const t=c(e.route);return a.provide(l,t),a.component("Content",f),a.component("ClientOnly",d),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),n.enhanceApp&&await n.enhanceApp({app:a,router:e,siteData:m}),{app:a,router:e,data:t}}function _(){return h(b)}function D(){let e=s;return g(a=>{let t=A(a),o=null;return t&&(e&&(t=t.replace(/\.js$/,".lean.js")),o=import(t)),s&&(e=!1),o},n.NotFound)}s&&E().then(({app:e,router:a,data:t})=>{a.go().then(()=>{i(a.route,t.site),e.mount("#app")})});export{E as createApp};

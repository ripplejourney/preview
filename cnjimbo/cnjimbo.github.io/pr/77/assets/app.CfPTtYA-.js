import{U as o,aI as p,aJ as u,aK as l,aL as c,aM as f,aN as d,aO as m,aP as h,aQ as g,aR as A,d as P,u as v,y,x as R,aS as w,aT as C,aU as S,a2 as T}from"./chunks/framework.i96Q0NWX.js";import{R as b}from"./chunks/theme.DmaF5OHD.js";function i(e){if(e.extends){const a=i(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const s=i(b),E=P({name:"VitePressApp",setup(){const{site:e,lang:a,dir:t}=v();return y(()=>{R(()=>{document.documentElement.lang=a.value,document.documentElement.dir=t.value})}),e.value.router.prefetchLinks&&w(),C(),S(),s.setup&&s.setup(),()=>T(s.Layout)}});async function _(){globalThis.__VITEPRESS__=!0;const e=D(),a=x();a.provide(u,e);const t=l(e.route);return a.provide(c,t),a.component("Content",f),a.component("ClientOnly",d),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:a,router:e,siteData:m}),{app:a,router:e,data:t}}function x(){return h(E)}function D(){let e=o,a;return g(t=>{let n=A(t),r=null;return n&&(e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),r=import(n)),o&&(e=!1),r},s.NotFound)}o&&_().then(({app:e,router:a,data:t})=>{a.go().then(()=>{p(a.route,t.site),e.mount("#app")})});export{_ as createApp};

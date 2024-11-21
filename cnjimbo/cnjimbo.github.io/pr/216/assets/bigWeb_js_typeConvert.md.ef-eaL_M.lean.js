import{_ as k,o as t,c as p,j as s,a as i,I as n,w as l,a7 as h,D as e}from"./chunks/framework.kR6ics5Q.js";const d="/preview/cnjimbo/cnjimbo.github.io/pr/216/assets/MTYyMzU5NTA3MzMwMA__623595073300.CnBQeWdi.png",E="/preview/cnjimbo/cnjimbo.github.io/pr/216/assets/MTYyMzU5NTExMzY2MQ__623595113661.DVhdIEKR.png",r="/preview/cnjimbo/cnjimbo.github.io/pr/216/assets/MTU5OTQ2OTY5MzkzMQ__599469693931.BSXfxiU-.png",ds=JSON.parse('{"title":"JavaScript中的类型转换规则","description":"","frontmatter":{"sidebar":{"title":"类型转换","step":27},"isTimeLine":true,"title":"JavaScript中的类型转换规则","date":"2020-04-14T00:00:00.000Z","tags":["大前端","javascript"],"categories":["大前端"]},"headers":[],"relativePath":"bigWeb/js/typeConvert.md","filePath":"bigWeb/js/typeConvert.md","lastUpdated":1720544135000}'),g={name:"bigWeb/js/typeConvert.md"},o=h("",16),y=s("code",null,"undefined",-1),c=s("code",null,"null",-1),F=s("code",null,"NaN",-1),C=s("code",null,"''",-1),u=s("code",null,"0",-1),_=h("",2),A=s("code",null,"其它值类型",-1),D=s("code",null,"对象",-1),B=h("",7),b=s("code",null,"[]",-1),m=s("code",null,"数字",-1),f=s("code",null,"数字字符串",-1),v=s("code",null,"[1]",-1),T=s("code",null,"['1']",-1),N=s("li",null,[i("其余情况转为"),s("code",null,"NaN")],-1),S=h("",2),j=s("code",null,"null",-1),q=s("code",null,"'123'",-1),P=s("code",null,"true",-1),x=s("code",null,"false",-1),V=s("code",null,"'124a'",-1),I=s("code",null,"undefined",-1),O=s("code",null,"Symbol",-1),M=s("strong",null,"抛出错误",-1),R=h("",8),w=s("code",null,"666",-1),z=s("code",null,"true",-1),J=s("code",null,"false",-1),U=h("",2),Q=s("code",null,"[]",-1),W=s("code",null,"[2,'3']",-1),Y=s("code",null,",",-1),$=h("",14),K=h("",3),L=s("code",null,"null",-1),X=s("code",null,"undefined",-1),Z=s("code",null,"null",-1),G=s("code",null,"undefined",-1),H=s("li",null,[s("code",null,"引用类型"),i("与"),s("code",null,"值类型"),i("进行比较,引用类型先转换为"),s("code",null,"值类型"),i("(调用[ToPrimitive])")],-1),ss=s("li",null,[s("code",null,"引用类型"),i("与"),s("code",null,"引用类型"),i("，直接判断是否指向同一对象")],-1),is=h("",8);function as(ns,ls,hs,ks,ts,ps){const a=e("font");return t(),p("div",{"data-pagefind-body":!0},[o,s("ul",null,[s("li",null,[y,i("， "),c,i("，"),F,i("，"),C,i("， "),u,i(" --> "),n(a,{color:"red"},{default:l(()=>[i("false")]),_:1})])]),_,s("ul",null,[s("li",null,[i("除上述值外的"),A,i("与"),D,i("都转为 --> "),n(a,{color:"#3eaf7c"},{default:l(()=>[i("true")]),_:1})])]),B,s("ul",null,[s("li",null,[i("空数组转为0: "),b,i(" --> "),n(a,{color:"#3eaf7c"},{default:l(()=>[i("0")]),_:1})]),s("li",null,[i("含有一个元素且为"),m,i("或"),f,i("则转换为数字："),v,i("或"),T,i(" --> "),n(a,{color:"#3eaf7c"},{default:l(()=>[i("1")]),_:1})]),N]),S,s("ul",null,[s("li",null,[j,i(" --> "),n(a,{color:"#3eaf7c"},{default:l(()=>[i("0")]),_:1})]),s("li",null,[q,i(" --> "),n(a,{color:"#3eaf7c"},{default:l(()=>[i("123")]),_:1}),i(": 纯数字构成的字符串直接转换为应的数字")]),s("li",null,[P,i(" --> "),n(a,{color:"#3eaf7c"},{default:l(()=>[i("1")]),_:1})]),s("li",null,[x,i(" --> "),n(a,{color:"#3eaf7c"},{default:l(()=>[i("0")]),_:1})]),s("li",null,[V,i(" --> "),n(a,{color:"red"},{default:l(()=>[i("NaN")]),_:1})]),s("li",null,[I,i(" --> "),n(a,{color:"red"},{default:l(()=>[i("NaN")]),_:1})]),s("li",null,[O,i(" --> "),n(a,{color:"orange"},{default:l(()=>[M]),_:1})])]),R,s("ul",null,[s("li",null,[i("数字直接转 "),s("ul",null,[s("li",null,[w,i(" --> "),n(a,{color:"#3eaf7c"},{default:l(()=>[i("'666'")]),_:1}),i(":")])])]),s("li",null,[i("布尔值直接转换 "),s("ul",null,[s("li",null,[z,i(" --> "),n(a,{color:"#3eaf7c"},{default:l(()=>[i("'true'")]),_:1})]),s("li",null,[J,i(" --> "),n(a,{color:"#3eaf7c"},{default:l(()=>[i("'false'")]),_:1})])])])]),U,s("ul",null,[s("li",null,[i("数组 "),s("ul",null,[s("li",null,[Q,i(" --> "),n(a,{color:"#3eaf7c"},{default:l(()=>[i("''")]),_:1}),i(" ：空数组转为空串")]),s("li",null,[W,i(" --> "),n(a,{color:"#3eaf7c"},{default:l(()=>[i("'2,3'")]),_:1}),i(" ：非空数组的每一项转为字符串再用"),Y,i("分割")])])]),s("li",null,[i("对象: "),s("ul",null,[s("li",null,[i("{} --> "),n(a,{color:"red"},{default:l(()=>[i("[object Object]")]),_:1})]),s("li",null,[i("{a:1} --> "),n(a,{color:"red"},{default:l(()=>[i("[object Object]")]),_:1})])])])]),$,s("ol",null,[K,s("li",null,[L,i(" 与 "),X,i("进行比较结果为"),n(a,{color:"#3eaf7c"},{default:l(()=>[i("true")]),_:1})]),s("li",null,[Z,i(","),G,i("与其它任何类型进行比较结果都为"),n(a,{color:"red"},{default:l(()=>[i("false")]),_:1})]),H,ss]),is])}const Es=k(g,[["render",as]]);export{ds as __pageData,Es as default};

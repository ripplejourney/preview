import{_ as k,o as t,c as p,j as s,a as i,I as l,w as n,a5 as h,D as e}from"./chunks/framework.DS5OozdC.js";const ts=JSON.parse('{"title":"JavaScript中的类型转换规则","description":"","frontmatter":{"sidebar":{"title":"类型转换","step":27},"isTimeLine":true,"title":"JavaScript中的类型转换规则","date":"2020-04-14T00:00:00.000Z","tags":["大前端","javascript"],"categories":["大前端"]},"headers":[],"relativePath":"bigWeb/js/typeConvert.md","filePath":"bigWeb/js/typeConvert.md","lastUpdated":1719297432000}'),E={name:"bigWeb/js/typeConvert.md"},d=h("",16),r=s("code",null,"undefined",-1),g=s("code",null,"null",-1),o=s("code",null,"NaN",-1),y=s("code",null,"''",-1),c=s("code",null,"0",-1),F=h("",2),C=s("code",null,"其它值类型",-1),u=s("code",null,"对象",-1),A=h("",7),D=s("code",null,"[]",-1),_=s("code",null,"数字",-1),B=s("code",null,"数字字符串",-1),b=s("code",null,"[1]",-1),m=s("code",null,"['1']",-1),f=s("li",null,[i("其余情况转为"),s("code",null,"NaN")],-1),T=h("",2),v=s("code",null,"null",-1),N=s("code",null,"'123'",-1),S=s("code",null,"true",-1),j=s("code",null,"false",-1),U=s("code",null,"'124a'",-1),q=s("code",null,"undefined",-1),J=s("code",null,"Symbol",-1),P=s("strong",null,"抛出错误",-1),x=h("",8),I=s("code",null,"666",-1),M=s("code",null,"true",-1),Q=s("code",null,"false",-1),R=h("",2),V=s("code",null,"[]",-1),O=s("code",null,"[2,'3']",-1),z=s("code",null,",",-1),Y=h("",14),w=h("",3),W=s("code",null,"null",-1),Z=s("code",null,"undefined",-1),X=s("code",null,"null",-1),$=s("code",null,"undefined",-1),G=s("li",null,[s("code",null,"引用类型"),i("与"),s("code",null,"值类型"),i("进行比较,引用类型先转换为"),s("code",null,"值类型"),i("(调用[ToPrimitive])")],-1),H=s("li",null,[s("code",null,"引用类型"),i("与"),s("code",null,"引用类型"),i("，直接判断是否指向同一对象")],-1),L=h("",9);function K(ss,is,as,ls,ns,hs){const a=e("font");return t(),p("div",null,[d,s("ul",null,[s("li",null,[r,i("， "),g,i("，"),o,i("，"),y,i("， "),c,i(" --> "),l(a,{color:"red"},{default:n(()=>[i("false")]),_:1})])]),F,s("ul",null,[s("li",null,[i("除上述值外的"),C,i("与"),u,i("都转为 --> "),l(a,{color:"#3eaf7c"},{default:n(()=>[i("true")]),_:1})])]),A,s("ul",null,[s("li",null,[i("空数组转为0: "),D,i(" --> "),l(a,{color:"#3eaf7c"},{default:n(()=>[i("0")]),_:1})]),s("li",null,[i("含有一个元素且为"),_,i("或"),B,i("则转换为数字："),b,i("或"),m,i(" --> "),l(a,{color:"#3eaf7c"},{default:n(()=>[i("1")]),_:1})]),f]),T,s("ul",null,[s("li",null,[v,i(" --> "),l(a,{color:"#3eaf7c"},{default:n(()=>[i("0")]),_:1})]),s("li",null,[N,i(" --> "),l(a,{color:"#3eaf7c"},{default:n(()=>[i("123")]),_:1}),i(": 纯数字构成的字符串直接转换为应的数字")]),s("li",null,[S,i(" --> "),l(a,{color:"#3eaf7c"},{default:n(()=>[i("1")]),_:1})]),s("li",null,[j,i(" --> "),l(a,{color:"#3eaf7c"},{default:n(()=>[i("0")]),_:1})]),s("li",null,[U,i(" --> "),l(a,{color:"red"},{default:n(()=>[i("NaN")]),_:1})]),s("li",null,[q,i(" --> "),l(a,{color:"red"},{default:n(()=>[i("NaN")]),_:1})]),s("li",null,[J,i(" --> "),l(a,{color:"orange"},{default:n(()=>[P]),_:1})])]),x,s("ul",null,[s("li",null,[i("数字直接转 "),s("ul",null,[s("li",null,[I,i(" --> "),l(a,{color:"#3eaf7c"},{default:n(()=>[i("'666'")]),_:1}),i(":")])])]),s("li",null,[i("布尔值直接转换 "),s("ul",null,[s("li",null,[M,i(" --> "),l(a,{color:"#3eaf7c"},{default:n(()=>[i("'true'")]),_:1})]),s("li",null,[Q,i(" --> "),l(a,{color:"#3eaf7c"},{default:n(()=>[i("'false'")]),_:1})])])])]),R,s("ul",null,[s("li",null,[i("数组 "),s("ul",null,[s("li",null,[V,i(" --> "),l(a,{color:"#3eaf7c"},{default:n(()=>[i("''")]),_:1}),i(" ：空数组转为空串")]),s("li",null,[O,i(" --> "),l(a,{color:"#3eaf7c"},{default:n(()=>[i("'2,3'")]),_:1}),i(" ：非空数组的每一项转为字符串再用"),z,i("分割")])])]),s("li",null,[i("对象: "),s("ul",null,[s("li",null,[i("{} --> "),l(a,{color:"red"},{default:n(()=>[i("[object Object]")]),_:1})]),s("li",null,[i("{a:1} --> "),l(a,{color:"red"},{default:n(()=>[i("[object Object]")]),_:1})])])])]),Y,s("ol",null,[w,s("li",null,[W,i(" 与 "),Z,i("进行比较结果为"),l(a,{color:"#3eaf7c"},{default:n(()=>[i("true")]),_:1})]),s("li",null,[X,i(","),$,i("与其它任何类型进行比较结果都为"),l(a,{color:"red"},{default:n(()=>[i("false")]),_:1})]),G,H]),L])}const ps=k(E,[["render",K]]);export{ts as __pageData,ps as default};

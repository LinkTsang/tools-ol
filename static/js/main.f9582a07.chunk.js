(this["webpackJsonptools-ol"]=this["webpackJsonptools-ol"]||[]).push([[0],{125:function(e,t,c){},127:function(e,t,c){},206:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),j=c(36),l=c.n(j),a=(c(125),c(126),c(127),c(43)),r=c(23),i=c(7);var b=function(){return Object(i.jsx)("div",{children:"About"})};var o=function(){return Object(i.jsx)("div",{children:"Home"})},h=c(58),d=c(210),O=c(211),u=c(209),x=c(212),g=c(108),f=c(93),v=c.n(f);function p(){var e=localStorage.getItem("allGuys");return null===e?"":e}function m(){var e=localStorage.getItem("currentGuys");return null===e?"":e}var y=function(){var e=Object(r.g)(),t=Object(n.useState)(p),c=Object(h.a)(t,2),s=c[0],j=c[1],l=Object(n.useState)(m),a=Object(h.a)(l,2),b=a[0],o=a[1],f=Object(n.useState)([]),y=Object(h.a)(f,2),S=y[0],I=y[1],C=Object(n.useState)([]),T=Object(h.a)(C,2),F=T[0],k=T[1];return Object(n.useEffect)((function(){!function(e,t){localStorage.setItem("allGuys",e),localStorage.setItem("currentGuys",t)}(s,b);var e=function(e,t){var c=e.trim().split(/[\n\s,\uff0c]+/),n=t.trim().split(/[\n\s,\uff0c]+/);return[v.a.difference(c,n),v.a.difference(n,c)]}(s,b),t=Object(h.a)(e,2),c=t[0],n=t[1];I(c),k(n)}),[s,b]),Object(i.jsxs)(d.a,{children:[Object(i.jsxs)(g.a,{children:[Object(i.jsx)("meta",{charSet:"utf-8"}),Object(i.jsx)("title",{children:"\u8d70\u4e22\u7684\u5a03"})]}),Object(i.jsx)(O.a,{className:"site-page-header",onBack:function(){return e.push("/tools")},title:"\u8d70\u4e22\u7684\u5a03",subTitle:"\u770b\u770b\u54ea\u4e9b\u5a03\u8d70\u4e22\u4e86~"}),Object(i.jsxs)(u.a,{layout:"vertical",children:[Object(i.jsx)(u.a.Item,{label:"\u6240\u6709\u5a03",children:Object(i.jsx)(x.a.TextArea,{placeholder:"\u6240\u6709\u5a03",value:s,onChange:function(e){j(e.target.value)},rows:8})}),Object(i.jsx)(u.a.Item,{label:"\u5728\u7684\u5a03",children:Object(i.jsx)(x.a.TextArea,{placeholder:"\u5728\u7684\u5a03",value:b,onChange:function(e){o(e.target.value)},rows:8})})]}),Object(i.jsxs)("div",{children:[0===S.length?Object(i.jsx)("h1",{children:"\u68d2\u68d2\u54d2~\u6ca1\u6709\u5a03\u8d70\u4e22~"}):Object(i.jsxs)("div",{children:[Object(i.jsxs)("h1",{children:["\u54e6\u8c41\uff0c\u6709",S.length,"\u4e2a\u5a03\u8d70\u4e22\u4e86\uff1a"]}),Object(i.jsx)("p",{children:S.join(",")})]}),0===F.length?Object(i.jsx)("h1",{children:"\u68d2\u68d2\u54d2~\u6ca1\u6709\u5a03\u8dd1\u8fdb\u6765\u6363\u4e71~"}):Object(i.jsxs)("div",{children:[Object(i.jsxs)("h1",{children:["\u4e0d\u597d\uff0c\u6709",F.length,"\u4e2a\u5a03\u8fdb\u6765\u6363\u4e71 >_<"]}),Object(i.jsx)("p",{children:F.join(",")})]})]})]})},S=c(208),I=c(96);var C=function(){return Object(i.jsx)(a.a,{children:Object(i.jsxs)(S.a,{className:"layout",children:[Object(i.jsxs)(S.a.Header,{children:[Object(i.jsx)("div",{className:"logo"}),Object(i.jsxs)(I.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["2"],children:[Object(i.jsx)(I.a.Item,{children:Object(i.jsx)(a.b,{to:"/tools/lost-guys",children:"\u8d70\u4e22\u7684\u5a03"})},0),Object(i.jsx)(I.a.Item,{children:Object(i.jsx)(a.b,{to:"/about",children:"\u5173\u4e8e"})},-1)]})]}),Object(i.jsx)(S.a.Content,{children:Object(i.jsx)("div",{style:{height:"100vh"},children:Object(i.jsxs)(r.d,{children:[Object(i.jsx)(r.b,{exact:!0,path:"/",children:Object(i.jsx)(o,{})}),Object(i.jsx)(r.b,{path:"/about",children:Object(i.jsx)(b,{})}),Object(i.jsx)(r.b,{path:"/tools/lost-guys",children:Object(i.jsx)(y,{})})]})})}),Object(i.jsxs)(S.a.Footer,{style:{textAlign:"center"},children:["Tools Online \xa9",(new Date).getFullYear(),Object(i.jsx)("span",{children:" Created by Link Tsang"})]})]})})};var T=function(){return Object(i.jsx)(a.a,{children:Object(i.jsx)("div",{className:"app",children:Object(i.jsxs)(r.d,{children:[Object(i.jsx)(r.b,{path:"/tools",children:Object(i.jsx)(C,{})}),Object(i.jsx)(r.b,{path:"/about",children:Object(i.jsx)(b,{})}),Object(i.jsx)(r.b,{path:"/",children:Object(i.jsx)(r.a,{to:"/tools"})})]})})})},F=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,213)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,j=t.getLCP,l=t.getTTFB;c(e),n(e),s(e),j(e),l(e)}))};l.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(T,{})}),document.getElementById("root")),F()}},[[206,1,2]]]);
//# sourceMappingURL=main.f9582a07.chunk.js.map
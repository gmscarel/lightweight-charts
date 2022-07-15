"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9384],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),c=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return i.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||a;return n?i.createElement(f,o(o({ref:t},s),{},{components:n})):i.createElement(f,o({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2324:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var i=n(7462),r=(n(7294),n(3905));const a={id:"PriceFormatBuiltIn",title:"Interface: PriceFormatBuiltIn",sidebar_label:"PriceFormatBuiltIn",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},o=void 0,l={unversionedId:"api/interfaces/PriceFormatBuiltIn",id:"api/interfaces/PriceFormatBuiltIn",title:"Interface: PriceFormatBuiltIn",description:"Represents series value formatting options.",source:"@site/docs/api/interfaces/PriceFormatBuiltIn.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/PriceFormatBuiltIn",permalink:"/lightweight-charts/docs/next/api/interfaces/PriceFormatBuiltIn",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"PriceFormatBuiltIn",title:"Interface: PriceFormatBuiltIn",sidebar_label:"PriceFormatBuiltIn",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},p={},c=[{value:"Properties",id:"properties",level:2},{value:"type",id:"type",level:3},{value:"precision",id:"precision",level:3},{value:"minMove",id:"minmove",level:3}],s={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Represents series value formatting options.\nThe precision and minMove properties allow wide customization of formatting."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"example")),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"minMove=0.01"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"precision")," is not specified - prices will change like 1.13, 1.14, 1.15 etc."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"example")),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"minMove=0.01"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"precision=3")," - prices will change like 1.130, 1.140, 1.150 etc."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"example")),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"minMove=0.05"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"precision")," is not specified - prices will change like 1.10, 1.15, 1.20 etc."),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"type"},"type"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},'"price"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},'"volume"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},'"percent"')),(0,r.kt)("p",null,"Built-in price formats:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"'price'")," is the most common choice; it allows customization of precision and rounding of prices."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"'volume'")," uses abbreviation for formatting prices like ",(0,r.kt)("inlineCode",{parentName:"li"},"1.2K")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"12.67M"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"'percent'")," uses ",(0,r.kt)("inlineCode",{parentName:"li"},"%")," sign at the end of prices.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"precision"},"precision"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"precision"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"Number of digits after the decimal point.\nIf it is not set, then its value is calculated automatically based on minMove."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," ",(0,r.kt)("inlineCode",{parentName:"p"},"2")," if both ",(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/PriceFormatBuiltIn#minmove"},"minMove")," and ",(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/PriceFormatBuiltIn#precision"},"precision")," are not provided, calculated automatically based on ",(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/PriceFormatBuiltIn#minmove"},"minMove")," otherwise."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"minmove"},"minMove"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"minMove"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"The minimum possible step size for price value movement. This value shouldn't have more decimal digits than the precision."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," ",(0,r.kt)("inlineCode",{parentName:"p"},"0.01")))}m.isMDXComponent=!0}}]);
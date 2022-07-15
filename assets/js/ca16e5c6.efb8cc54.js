"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5301],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=i.createContext({}),s=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return i.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),k=r,m=d["".concat(o,".").concat(k)]||d[k]||u[k]||l;return n?i.createElement(m,a(a({ref:t},c),{},{components:n})):i.createElement(m,a({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,a=new Array(l);a[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,a[1]=p;for(var s=2;s<l;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6919:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var i=n(7462),r=(n(7294),n(3905));const l={id:"PriceLineOptions",title:"Interface: PriceLineOptions",sidebar_label:"PriceLineOptions",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},a=void 0,p={unversionedId:"api/interfaces/PriceLineOptions",id:"version-3.8/api/interfaces/PriceLineOptions",title:"Interface: PriceLineOptions",description:"Represents a price line options.",source:"@site/versioned_docs/version-3.8/api/interfaces/PriceLineOptions.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/PriceLineOptions",permalink:"/lightweight-charts/docs/api/interfaces/PriceLineOptions",editUrl:null,tags:[],version:"3.8",sidebarPosition:0,frontMatter:{id:"PriceLineOptions",title:"Interface: PriceLineOptions",sidebar_label:"PriceLineOptions",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},o={},s=[{value:"Properties",id:"properties",level:2},{value:"price",id:"price",level:3},{value:"color",id:"color",level:3},{value:"lineWidth",id:"linewidth",level:3},{value:"lineStyle",id:"linestyle",level:3},{value:"lineVisible",id:"linevisible",level:3},{value:"axisLabelVisible",id:"axislabelvisible",level:3},{value:"title",id:"title",level:3}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Represents a price line options."),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"price"},"price"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"price"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"Price line's value."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," ",(0,r.kt)("inlineCode",{parentName:"p"},"0")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"color"},"color"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"color"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"Price line's color."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," ",(0,r.kt)("inlineCode",{parentName:"p"},"''")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"linewidth"},"lineWidth"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"lineWidth"),": ",(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/#linewidth"},(0,r.kt)("inlineCode",{parentName:"a"},"LineWidth"))),(0,r.kt)("p",null,"Price line's width in pixels."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," ",(0,r.kt)("inlineCode",{parentName:"p"},"1")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"linestyle"},"lineStyle"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"lineStyle"),": ",(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/enums/LineStyle"},(0,r.kt)("inlineCode",{parentName:"a"},"LineStyle"))),(0,r.kt)("p",null,"Price line's style."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," ",(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/enums/LineStyle#solid"},"LineStyle.Solid")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"linevisible"},"lineVisible"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"lineVisible"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Display line."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," ",(0,r.kt)("inlineCode",{parentName:"p"},"true")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"axislabelvisible"},"axisLabelVisible"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"axisLabelVisible"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Display the current price value in on the price scale."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," ",(0,r.kt)("inlineCode",{parentName:"p"},"true")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"title"},"title"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"title"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"Price line's on the chart pane."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," ",(0,r.kt)("inlineCode",{parentName:"p"},"''")))}u.isMDXComponent=!0}}]);
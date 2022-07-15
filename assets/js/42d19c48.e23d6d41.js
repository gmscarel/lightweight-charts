"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1260],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),h=l,m=d["".concat(p,".").concat(h)]||d[h]||c[h]||o;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,a=new Array(o);a[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4392:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(7462),l=(n(7294),n(3905));const o={id:"HandleScrollOptions",title:"Interface: HandleScrollOptions",sidebar_label:"HandleScrollOptions",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},a=void 0,i={unversionedId:"api/interfaces/HandleScrollOptions",id:"version-3.8/api/interfaces/HandleScrollOptions",title:"Interface: HandleScrollOptions",description:"Represents options for how the chart is scrolled by the mouse and touch gestures.",source:"@site/versioned_docs/version-3.8/api/interfaces/HandleScrollOptions.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/HandleScrollOptions",permalink:"/lightweight-charts/docs/api/interfaces/HandleScrollOptions",editUrl:null,tags:[],version:"3.8",sidebarPosition:0,frontMatter:{id:"HandleScrollOptions",title:"Interface: HandleScrollOptions",sidebar_label:"HandleScrollOptions",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},p={},s=[{value:"Properties",id:"properties",level:2},{value:"mouseWheel",id:"mousewheel",level:3},{value:"pressedMouseMove",id:"pressedmousemove",level:3},{value:"horzTouchDrag",id:"horztouchdrag",level:3},{value:"vertTouchDrag",id:"verttouchdrag",level:3}],u={toc:s};function c(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Represents options for how the chart is scrolled by the mouse and touch gestures."),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"mousewheel"},"mouseWheel"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"mouseWheel"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("p",null,"Enable scrolling with the mouse wheel."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," ",(0,l.kt)("inlineCode",{parentName:"p"},"true")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"pressedmousemove"},"pressedMouseMove"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"pressedMouseMove"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("p",null,"Enable scrolling by holding down the left mouse button and moving the mouse."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," ",(0,l.kt)("inlineCode",{parentName:"p"},"true")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"horztouchdrag"},"horzTouchDrag"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"horzTouchDrag"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("p",null,"Enable horizontal touch scrolling."),(0,l.kt)("p",null,"When enabled the chart handles touch gestures that would normally scroll the webpage horizontally."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," ",(0,l.kt)("inlineCode",{parentName:"p"},"true")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"verttouchdrag"},"vertTouchDrag"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"vertTouchDrag"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("p",null,"Enable vertical touch scrolling."),(0,l.kt)("p",null,"When enabled the chart handles touch gestures that would normally scroll the webpage vertically."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," ",(0,l.kt)("inlineCode",{parentName:"p"},"true")))}c.isMDXComponent=!0}}]);
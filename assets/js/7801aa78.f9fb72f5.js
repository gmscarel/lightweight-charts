"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8486],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},875:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={id:"HandleScaleOptions",title:"Interface: HandleScaleOptions",sidebar_label:"HandleScaleOptions",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},l=void 0,o={unversionedId:"api/interfaces/HandleScaleOptions",id:"version-3.8/api/interfaces/HandleScaleOptions",title:"Interface: HandleScaleOptions",description:"Represents options for how the chart is scaled by the mouse and touch gestures.",source:"@site/versioned_docs/version-3.8/api/interfaces/HandleScaleOptions.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/HandleScaleOptions",permalink:"/lightweight-charts/docs/api/interfaces/HandleScaleOptions",editUrl:null,tags:[],version:"3.8",sidebarPosition:0,frontMatter:{id:"HandleScaleOptions",title:"Interface: HandleScaleOptions",sidebar_label:"HandleScaleOptions",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},s={},p=[{value:"Properties",id:"properties",level:2},{value:"mouseWheel",id:"mousewheel",level:3},{value:"pinch",id:"pinch",level:3},{value:"axisPressedMouseMove",id:"axispressedmousemove",level:3},{value:"axisDoubleClickReset",id:"axisdoubleclickreset",level:3}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Represents options for how the chart is scaled by the mouse and touch gestures."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"mousewheel"},"mouseWheel"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"mouseWheel"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"Enable scaling with the mouse wheel."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," ",(0,a.kt)("inlineCode",{parentName:"p"},"true")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"pinch"},"pinch"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"pinch"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"Enable scaling with pinch/zoom gestures."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," ",(0,a.kt)("inlineCode",{parentName:"p"},"true")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"axispressedmousemove"},"axisPressedMouseMove"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"axisPressedMouseMove"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")," ","|"," ",(0,a.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/interfaces/AxisPressedMouseMoveOptions"},(0,a.kt)("inlineCode",{parentName:"a"},"AxisPressedMouseMoveOptions"))),(0,a.kt)("p",null,"Enable scaling the price and/or time scales by holding down the left mouse button and moving the mouse."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"axisdoubleclickreset"},"axisDoubleClickReset"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"axisDoubleClickReset"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"Enable resetting scaling by double-clicking the left mouse button."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," ",(0,a.kt)("inlineCode",{parentName:"p"},"true")))}u.isMDXComponent=!0}}]);
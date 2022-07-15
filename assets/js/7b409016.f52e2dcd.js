"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7249],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(a),u=r,k=d["".concat(p,".").concat(u)]||d[u]||h[u]||i;return a?n.createElement(k,l(l({ref:t},c),{},{components:a})):n.createElement(k,l({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8406:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const i={id:"ChartOptions",title:"Interface: ChartOptions",sidebar_label:"ChartOptions",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},l=void 0,o={unversionedId:"api/interfaces/ChartOptions",id:"version-3.8/api/interfaces/ChartOptions",title:"Interface: ChartOptions",description:"Structure describing options of the chart. Series options are to be set separately",source:"@site/versioned_docs/version-3.8/api/interfaces/ChartOptions.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/ChartOptions",permalink:"/lightweight-charts/docs/api/interfaces/ChartOptions",editUrl:null,tags:[],version:"3.8",sidebarPosition:0,frontMatter:{id:"ChartOptions",title:"Interface: ChartOptions",sidebar_label:"ChartOptions",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},p={},s=[{value:"Properties",id:"properties",level:2},{value:"width",id:"width",level:3},{value:"height",id:"height",level:3},{value:"watermark",id:"watermark",level:3},{value:"layout",id:"layout",level:3},{value:"leftPriceScale",id:"leftpricescale",level:3},{value:"rightPriceScale",id:"rightpricescale",level:3},{value:"overlayPriceScales",id:"overlaypricescales",level:3},{value:"timeScale",id:"timescale",level:3},{value:"crosshair",id:"crosshair",level:3},{value:"grid",id:"grid",level:3},{value:"localization",id:"localization",level:3},{value:"handleScroll",id:"handlescroll",level:3},{value:"handleScale",id:"handlescale",level:3},{value:"kineticScroll",id:"kineticscroll",level:3},{value:"trackingMode",id:"trackingmode",level:3}],c={toc:s};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Structure describing options of the chart. Series options are to be set separately"),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"width"},"width"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"width"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"Width of the chart in pixels"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," If ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," (default) or none value provided, then a size of the widget will be calculated based its container's size."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"height"},"height"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"height"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"Height of the chart in pixels"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," If ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," (default) or none value provided, then a size of the widget will be calculated based its container's size."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"watermark"},"watermark"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"watermark"),": ",(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/interfaces/WatermarkOptions"},(0,r.kt)("inlineCode",{parentName:"a"},"WatermarkOptions"))),(0,r.kt)("p",null,"Watermark options."),(0,r.kt)("p",null,"A watermark is a background label that includes a brief description of the drawn data. Any text can be added to it."),(0,r.kt)("p",null,"Please make sure you enable it and set an appropriate font color and size to make your watermark visible in the background of the chart.\nWe recommend a semi-transparent color and a large font. Also note that watermark position can be aligned vertically and horizontally."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"layout"},"layout"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"layout"),": ",(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/interfaces/LayoutOptions"},(0,r.kt)("inlineCode",{parentName:"a"},"LayoutOptions"))),(0,r.kt)("p",null,"Layout options"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"leftpricescale"},"leftPriceScale"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"leftPriceScale"),": ",(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/interfaces/PriceScaleOptions"},(0,r.kt)("inlineCode",{parentName:"a"},"PriceScaleOptions"))),(0,r.kt)("p",null,"Left price scale options"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"rightpricescale"},"rightPriceScale"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"rightPriceScale"),": ",(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/interfaces/PriceScaleOptions"},(0,r.kt)("inlineCode",{parentName:"a"},"PriceScaleOptions"))),(0,r.kt)("p",null,"Right price scale options"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"overlaypricescales"},"overlayPriceScales"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"overlayPriceScales"),": ",(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/#overlaypricescaleoptions"},(0,r.kt)("inlineCode",{parentName:"a"},"OverlayPriceScaleOptions"))),(0,r.kt)("p",null,"Overlay price scale options"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"timescale"},"timeScale"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"timeScale"),": ",(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/interfaces/TimeScaleOptions"},(0,r.kt)("inlineCode",{parentName:"a"},"TimeScaleOptions"))),(0,r.kt)("p",null,"Time scale options"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"crosshair"},"crosshair"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"crosshair"),": ",(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/interfaces/CrosshairOptions"},(0,r.kt)("inlineCode",{parentName:"a"},"CrosshairOptions"))),(0,r.kt)("p",null,"The crosshair shows the intersection of the price and time scale values at any point on the chart."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"grid"},"grid"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"grid"),": ",(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/interfaces/GridOptions"},(0,r.kt)("inlineCode",{parentName:"a"},"GridOptions"))),(0,r.kt)("p",null,"A grid is represented in the chart background as a vertical and horizontal lines drawn at the levels of visible marks of price and the time scales."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"localization"},"localization"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"localization"),": ",(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/interfaces/LocalizationOptions"},(0,r.kt)("inlineCode",{parentName:"a"},"LocalizationOptions"))),(0,r.kt)("p",null,"Localization options."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"handlescroll"},"handleScroll"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"handleScroll"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/interfaces/HandleScrollOptions"},(0,r.kt)("inlineCode",{parentName:"a"},"HandleScrollOptions"))),(0,r.kt)("p",null,"Scroll options, or a boolean flag that enables/disables scrolling"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"handlescale"},"handleScale"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"handleScale"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/interfaces/HandleScaleOptions"},(0,r.kt)("inlineCode",{parentName:"a"},"HandleScaleOptions"))),(0,r.kt)("p",null,"Scale options, or a boolean flag that enables/disables scaling"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"kineticscroll"},"kineticScroll"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"kineticScroll"),": ",(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/interfaces/KineticScrollOptions"},(0,r.kt)("inlineCode",{parentName:"a"},"KineticScrollOptions"))),(0,r.kt)("p",null,"Kinetic scroll options"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"trackingmode"},"trackingMode"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"trackingMode"),": ",(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/interfaces/TrackingModeOptions"},(0,r.kt)("inlineCode",{parentName:"a"},"TrackingModeOptions"))),(0,r.kt)("p",null,"Represent options for the tracking mode's behavior."),(0,r.kt)("p",null,"Mobile users will not have the ability to see the values/dates like they do on desktop.\nTo see it, they should enter the tracking mode. The tracking mode will deactivate the scrolling\nand make it possible to check values and dates."))}h.isMDXComponent=!0}}]);
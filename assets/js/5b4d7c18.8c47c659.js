"use strict";(self.webpackChunkkusk_gateway_docs_2=self.webpackChunkkusk_gateway_docs_2||[]).push([[559],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),l=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(a),h=r,b=p["".concat(d,".").concat(h)]||p[h]||c[h]||o;return a?n.createElement(b,s(s({ref:t},u),{},{components:a})):n.createElement(b,s({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=p;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},8076:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=a(7462),r=(a(7294),a(3905));const o={},s="Kusk Dashboard",i={unversionedId:"dashboard/overview",id:"dashboard/overview",title:"Kusk Dashboard",description:"Kusk Gateway includes a browser-based dashboard for inspecting deployed APIs, Envoy Fleets and Static Routes. For APIs,",source:"@site/docs/dashboard/overview.md",sourceDirName:"dashboard",slug:"/dashboard/overview",permalink:"/kusk-gateway/dashboard/overview",draft:!1,editUrl:"https://github.com/kubeshop/kusk-gateway/docs/dashboard/overview.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Accessing the Kusk Gateway Dashboard",permalink:"/kusk-gateway/cli/dashboard-cmd"},next:{title:"Deploying APIs",permalink:"/kusk-gateway/dashboard/deploying-apis"}},d={},l=[{value:"<strong>Setting the API Endpoint</strong>",id:"setting-the-api-endpoint",level:2}],u={toc:l};function c(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"kusk-dashboard"},"Kusk Dashboard"),(0,r.kt)("p",null,"Kusk Gateway includes a browser-based dashboard for inspecting deployed APIs, Envoy Fleets and Static Routes. For APIs,\nit is also possible to dig into the underlying OpenAPI definition and make ad-hoc requests to the API using the\nembedded Swagger UI. "),(0,r.kt)("p",null,"The dashboard is installed as part of the ",(0,r.kt)("a",{parentName:"p",href:"/kusk-gateway/cli/install-cmd"},"Kusk Installation")," and published using Kusk Gateway\nvia dedicated Envoy Fleet, Static Route and API resources (which you can see in the dashboard). "),(0,r.kt)("p",null,"After installing Kusk Gateway, access the dashboard by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl port-forward -n kusk-system svc/kusk-gateway-private-envoy-fleet 8080:80\nopen http://localhost:8080/\n")),(0,r.kt)("p",null,"This will open the dashboard, showing the kusk-gateway-api API Resource deployed through Kusk Gateway (the API that the dashboard itself uses):"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Kusk Dashboard APIs",src:a(8586).Z,width:"1432",height:"812"})),(0,r.kt)("p",null,"Use the tabs on the top left to see deployed EnvoyFleets and StaticRoutes. The following EnvoyFleets are deployed by\ndefault:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Kusk Dashboard Fleets",src:a(4709).Z,width:"1433",height:"816"})),(0,r.kt)("p",null,"Use the following Static Route for exposing the dashboard itself:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Kusk Dashboard StaticRoutes",src:a(6164).Z,width:"1432",height:"815"})),(0,r.kt)("p",null,"Selecting any object will open a details panel to the right showing corresponding information - as shown in the screenshot\nabove for the dashboard Static Route."),(0,r.kt)("h2",{id:"setting-the-api-endpoint"},(0,r.kt)("strong",{parentName:"h2"},"Setting the API Endpoint")),(0,r.kt)("p",null,"By default, the dashboard uses a backend API exposed on the same host as the dashboard itself with an '/api' path prefix.\nIf you host the dashboard or its API differently, you can configure the API endpoint using the Settings button in the\nbottom left, which opens the following dialog:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Kusk Dashboard Settings",src:a(4937).Z,width:"754",height:"382"})),(0,r.kt)("p",null,"You can specify any absolute URL or relative path here - just make sure that CORS is configured accordingly if you specify\na different host than the default one."))}c.isMDXComponent=!0},8586:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/dashboard-apis-6adbea5b0dab0931dbe4639e5d45d6b7.png"},4709:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/dashboard-fleets-db3e0179814ea29762a5b805806bcd95.png"},6164:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/dashboard-staticroutes-263722a6d688af7441720d2d65623428.png"},4937:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/settings-cf274f9d036c9f894ae74ac6af633ddf.png"}}]);
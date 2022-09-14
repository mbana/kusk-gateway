"use strict";(self.webpackChunkkusk_gateway_docs_2=self.webpackChunkkusk_gateway_docs_2||[]).push([[464],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),m=c(n),h=r,d=m["".concat(s,".").concat(h)]||m[h]||p[h]||o;return n?a.createElement(d,i(i({ref:t},l),{},{components:n})):a.createElement(d,i({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88505:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={},i="Custom Authentication Upstream",u={unversionedId:"guides/authentication/custom-auth-upstream",id:"guides/authentication/custom-auth-upstream",title:"Custom Authentication Upstream",description:"Currently you can use any Header based authentication methods by means of custom Authentication Upstream . This includes:",source:"@site/docs/guides/authentication/custom-auth-upstream.md",sourceDirName:"guides/authentication",slug:"/guides/authentication/custom-auth-upstream",permalink:"/guides/authentication/custom-auth-upstream",draft:!1,editUrl:"https://github.com/kubeshop/kusk-gateway/docs/guides/authentication/custom-auth-upstream.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"The Kusk OpenAPI Extension",permalink:"/guides/working-with-extension"},next:{title:"OAuth2",permalink:"/guides/authentication/oauth2"}},s={},c=[],l={toc:c};function p(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"custom-authentication-upstream"},"Custom Authentication Upstream"),(0,r.kt)("p",null,"Currently you can use any ",(0,r.kt)("strong",{parentName:"p"},"Header based authentication")," methods by means of custom Authentication Upstream . This includes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Basic Authentication"),(0,r.kt)("li",{parentName:"ul"},"JWT Tokens"),(0,r.kt)("li",{parentName:"ul"},"Bearer Tokens")),(0,r.kt)("p",null,"To set up a custom authentication upstream, add the following section to your ",(0,r.kt)("inlineCode",{parentName:"p"},"x-kusk")," settings block:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"openapi: 3.0.0\ninfo:\n  title: simple-api\n  version: 0.1.0\nx-kusk:\n  auth:\n    scheme: basic\n    auth-upstream:\n      host:\n        hostname: auth-upstream-svc.default\n        port:8080\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"hostname")," field can contain internal cluster domains but also external domains to your cluster that can handle your header based authentication.")),(0,r.kt)("p",null,"The example above authenticates requests to the whole API."),(0,r.kt)("p",null,"You can also specify different authentication settings for specific operations or paths. The following example shows an example authentication configuration for a specific operation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"...\npaths:\n  /hello:\n    get:\n      operationId: getHello\n      auth:\n        scheme: basic\n        auth-upstream:\n          host:\n            hostname: auth-upstream-svc.default\n            port:8080\n      ..\n")),(0,r.kt)("p",null,"In the example, in the ",(0,r.kt)("inlineCode",{parentName:"p"},"hostname")," section we're referencing an upstream service in our cluster that will handle request authentication. The flow is as follows:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"kusk-gateway custom-upstream diagram",src:n(72787).Z,width:"695",height:"610"})),(0,r.kt)("p",null,"See all available Authentication configuration options in the ",(0,r.kt)("a",{parentName:"p",href:"../../extension/#authentication"},"Extension Reference"),"."))}p.isMDXComponent=!0},72787:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/basic-auth-4d635c071d652e70008131c5e5a9e04c.png"}}]);
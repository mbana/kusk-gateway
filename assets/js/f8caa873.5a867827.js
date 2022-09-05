"use strict";(self.webpackChunkkusk_gateway_docs_2=self.webpackChunkkusk_gateway_docs_2||[]).push([[41],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),k=o,m=d["".concat(s,".").concat(k)]||d[k]||c[k]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7250:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={},i="The Kusk OpenAPI Extension",l={unversionedId:"guides/working-with-extension",id:"guides/working-with-extension",title:"The Kusk OpenAPI Extension",description:"Kusk Gateway comes with an x-kusk OpenAPI extension to allow",source:"@site/docs/guides/working-with-extension.md",sourceDirName:"guides",slug:"/guides/working-with-extension",permalink:"/guides/working-with-extension",draft:!1,editUrl:"https://github.com/kubeshop/kusk-gateway/docs/guides/working-with-extension.md",tags:[],version:"current",frontMatter:{}},s={},p=[{value:"<strong>Properties Overview</strong>",id:"properties-overview",level:2},{value:"<strong>Property Overriding/Inheritance</strong>",id:"property-overridinginheritance",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"the-kusk-openapi-extension"},"The Kusk OpenAPI Extension"),(0,o.kt)("p",null,"Kusk Gateway comes with an ",(0,o.kt)("inlineCode",{parentName:"p"},"x-kusk")," ",(0,o.kt)("a",{parentName:"p",href:"https://swagger.io/specification/#specification-extensions"},"OpenAPI extension")," to allow\nan OpenAPI definition to be the source of truth for both operational and functional aspects of your APIs."),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"../extension"},"extension reference")," describes all available properties and the following guides are\navailable to help you make the most of them:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/guides/mocking"},"Mocking")," - How to mock all or parts of your API."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/guides/validation"},"Validation")," - How work with automatic request validation."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/guides/cors"},"CORS")," - How to specify CORS settings."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/guides/routing"},"Routing")," - How to configure routing of API requests."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/guides/timeouts"},"Timeouts")," - How to set request timeouts.")),(0,o.kt)("h2",{id:"properties-overview"},(0,o.kt)("strong",{parentName:"h2"},"Properties Overview")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"x-kusk")," extension can be applied at (not exclusively):"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Top level of an OpenAPI definition:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'  openapi: 3.0.2\n  info:\n    title: Swagger Petstore - OpenAPI 3.0\n  x-kusk:\n    hosts:\n    - "example.org"\n    disabled: false\n    cors:\n      ...\n')),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Path level:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"openapi: 3.0.2\ninfo:\n  title: Swagger Petstore - OpenAPI 3.0\npaths:\n  /pet:\n    x-kusk:\n      disabled: true # disables all /pet endpoints\n    post:\n      ...\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Method (operation) level:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"  openapi: 3.0.2\n  info:\n    title: Swagger Petstore - OpenAPI 3.0\n  paths:\n    /pet:\n      post:\n        x-kusk:\n          upstream: # routes the POST /pet endpoint to a Kubernetes service\n            service:\n              namespace: default\n              name: petstore\n              port: 8000\n        ...\n")),(0,o.kt)("h2",{id:"property-overridinginheritance"},(0,o.kt)("strong",{parentName:"h2"},"Property Overriding/Inheritance")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"x-kusk")," extension at the operation level takes precedence, or overrides, what is specified at the path level, including the ",(0,o.kt)("inlineCode",{parentName:"p"},"disabled")," option.\nLikewise, the path level settings override what is specified at the global level."),(0,o.kt)("p",null,"If settings aren't specified at a path or operation level, they will be inherited from the layer above, (Operation > Path > Global)."))}c.isMDXComponent=!0}}]);
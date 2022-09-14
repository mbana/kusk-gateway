"use strict";(self.webpackChunkkusk_gateway_docs_2=self.webpackChunkkusk_gateway_docs_2||[]).push([[669],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=l(n),m=o,d=h["".concat(p,".").concat(m)]||h[m]||c[m]||a;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},82465:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={},i="Request Routing",s={unversionedId:"guides/routing",id:"guides/routing",title:"Request Routing",description:"Incoming requests to Kusk Gateway can be routed to the target service in two ways:",source:"@site/docs/guides/routing.md",sourceDirName:"guides",slug:"/guides/routing",permalink:"/guides/routing",draft:!1,editUrl:"https://github.com/kubeshop/kusk-gateway/docs/guides/routing.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Request Timeouts",permalink:"/guides/timeouts"},next:{title:"Rate limiting",permalink:"/guides/rate-limit"}},p={},l=[{value:"<strong>Forwarding Requests to a Service in your Cluster</strong>",id:"forwarding-requests-to-a-service-in-your-cluster",level:2},{value:"<strong>Rewriting Request Paths</strong>",id:"rewriting-request-paths",level:3},{value:"Redirecting Requests to a Different Host/Path",id:"redirecting-requests-to-a-different-hostpath",level:2},{value:"<strong>Specifying an External Path for Your API</strong>",id:"specifying-an-external-path-for-your-api",level:2},{value:"<strong>Using Hosts for Multi-hosting Scenarios</strong>",id:"using-hosts-for-multi-hosting-scenarios",level:2},{value:"<strong>Disabling Operations</strong>",id:"disabling-operations",level:2}],u={toc:l};function c(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"request-routing"},"Request Routing"),(0,o.kt)("p",null,"Incoming requests to Kusk Gateway can be routed to the target service in two ways:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Forwarded to an actual service in your cluster using the ",(0,o.kt)("inlineCode",{parentName:"li"},"upstream")," property."),(0,o.kt)("li",{parentName:"ul"},"Redirected to a different endpoint using the ",(0,o.kt)("inlineCode",{parentName:"li"},"redirect")," property.")),(0,o.kt)("p",null,"Furthermore, two properties are available to distinguish to which of these an incoming request should go:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"hosts")," property allows you to define to which hostname(s) a specific API answers."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"path")," property allows you to configure a base path for the exposed API.")),(0,o.kt)("p",null,"Any of these properties can be specified at the root, path, or operation level in your OpenAPI\ndefinition, allowing you to route separate operations differently. For example, not all operations might be\nhandled by the same service, in which case you could define different upstream services accordingly."),(0,o.kt)("h2",{id:"forwarding-requests-to-a-service-in-your-cluster"},(0,o.kt)("strong",{parentName:"h2"},"Forwarding Requests to a Service in your Cluster")),(0,o.kt)("p",null,"This will be the most common scenario - incoming requests to Kusk Gateway will be forward to a service or host running\nin your cluster:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"openapi: 3.0.0\ninfo:\n  title: simple-api\n  version: 0.1.0\nx-kusk:\n  upstream:\n    service:\n      name: simple-api-service\n      namespace: default\n..\n")),(0,o.kt)("p",null,"Here all requests are sent to the simple-api-service in the default namespace on the default port (80)."),(0,o.kt)("p",null,"If we had a different service for one of the operations, we could override this at the operation level:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"openapi: 3.0.0\ninfo:\n  title: simple-api\n  version: 0.1.0\nx-kusk:\n  upstream:\n    service: \n      name: simple-api-service\n      namespace: default\n      port: 8001\npath:\n  /someoperation:\n    get:\n      operationId: doSomething\n      x-kusk:\n        upstream:\n          service:\n            name: another-service\n            port: 8080\n..\n")),(0,o.kt)("p",null,"Here the default service is listening on port 8001 and we have specified a different service for the\ndoSomething operation, still in the same namespace but also on a different port."),(0,o.kt)("p",null,"If we instead wanted to route default API requests to different hostname, instead of a specific service,\nwe could do something like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"openapi: 3.0.0\ninfo:\n  title: simple-api\n  version: 0.1.0\nx-kusk:\n  upstream:\n    host:\n      hostname: simple-api-service-hostname\n      port: 8001\n..\n")),(0,o.kt)("p",null,"Also, we could override this routing at the operation level as before:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"openapi: 3.0.0\ninfo:\n  title: simple-api\n  version: 0.1.0\nx-kusk:\n  upstream:\n    host:\n      hostname: simple-api-service-hostname\n      port: 8001\npath:\n  /someoperation:\n    get:\n      operationId: doSomething\n      x-kusk:\n        upstream:\n          service:\n            name: another-service\n            port: 8080\n..\n")),(0,o.kt)("h3",{id:"rewriting-request-paths"},(0,o.kt)("strong",{parentName:"h3"},"Rewriting Request Paths")),(0,o.kt)("p",null,"The optional ",(0,o.kt)("inlineCode",{parentName:"p"},"rewrite")," property allows us to modify the path of the request before forwarding\nit to the upstream service. For example, if we have a service ",(0,o.kt)("inlineCode",{parentName:"p"},"foo")," with a single endpoint ",(0,o.kt)("inlineCode",{parentName:"p"},"/bar"),", we configure Kusk Gateway to forward traffic to the ",(0,o.kt)("inlineCode",{parentName:"p"},"foo")," service when it receives traffic on a path with the prefix ",(0,o.kt)("inlineCode",{parentName:"p"},"/foo"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"path rewrite example",src:n(41391).Z,width:"691",height:"121"})),(0,o.kt)("p",null,"If we receive a request at ",(0,o.kt)("inlineCode",{parentName:"p"},"/foo/bar"),", the request will be forwarded to the ",(0,o.kt)("inlineCode",{parentName:"p"},"foo")," service. ",(0,o.kt)("inlineCode",{parentName:"p"},"foo")," will throw a 404 error as it doesn't have a path ",(0,o.kt)("inlineCode",{parentName:"p"},"/foo/bar"),"."),(0,o.kt)("p",null,"Therefore, we must rewrite the path from ",(0,o.kt)("inlineCode",{parentName:"p"},"/foo/bar")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"/bar")," before sending it onto the ",(0,o.kt)("inlineCode",{parentName:"p"},"foo")," service."),(0,o.kt)("p",null,"The following config extract will allow us to do this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'upstream:\n  service: \n    ...\n  # /foo/bar/... -> to upstream: /bar/...\n  rewrite:\n    pattern: "^/foo"\n    substitution: ""\n')),(0,o.kt)("p",null,"See all available upstream configuration options in the ",(0,o.kt)("a",{parentName:"p",href:"../extension/#upstream"},"Extension Reference"),"."),(0,o.kt)("h2",{id:"redirecting-requests-to-a-different-hostpath"},"Redirecting Requests to a Different Host/Path"),(0,o.kt)("p",null,"Instead of forwarding requests to a service or hostname in our cluster, we might want to\nredirect the client to a totally different URL, for example, when:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The API has moved to a different host."),(0,o.kt)("li",{parentName:"ul"},"Individual operations have been renamed.")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"redirect")," property allows us to do this. First, redirect to a different host:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"openapi: 3.0.0\ninfo:\n  title: simple-api\n  version: 0.1.0\nx-kusk:\n  redirect:\n    scheme_redirect: https\n    host_redirect: thenewhost.com\n    response_code: 302\n..\n")),(0,o.kt)("p",null,"This would redirect any requests to the API to the specified host using a 302 HTTP response."),(0,o.kt)("p",null,"As indicated above we could use this property to redirect individual operations:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"openapi: 3.0.0\ninfo:\n  title: simple-api\n  version: 0.1.0\nx-kusk:\n  upstream:\n    host: simple-api-service-hostname\n    port: 8001\npath:\n  /newoperation:\n    get:\n      operationId: doSomething\n      ..\n  /oldoperation:\n      x-kusk:\n        redirect:\n          path_redirect: /newoperation\n..\n")),(0,o.kt)("p",null,"This can be helpful when operations have been renamed during a major version update or if we want to deprecate an operation:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"openapi: 3.0.0\ninfo:\n  title: simple-api\n  version: 0.1.0\nx-kusk:\n  upstream:\n    host:\n      hostname: simple-api-service-hostname\n      port: 8001\npath:\n  /someoperation:\n    get:\n      operationId: doSomething\n      ..\n    put:\n      x-kusk:\n        redirect:\n          scheme_redirect: https\n          host_redirect: mywebsite.com\n          path_redirect: /deprecated.html\n..\n")),(0,o.kt)("p",null,"See all available redirect configuration options in the ",(0,o.kt)("a",{parentName:"p",href:"../extension/#redirect"},"Extension Reference"),"."),(0,o.kt)("h2",{id:"specifying-an-external-path-for-your-api"},(0,o.kt)("strong",{parentName:"h2"},"Specifying an External Path for Your API")),(0,o.kt)("p",null,'Often you will want to prefix your API path with something like "/api" externally, although your\ninternal API implementation is running on the root path "/". Kusk allows you to specify a\n',(0,o.kt)("inlineCode",{parentName:"p"},"path.prefix")," property for this, which you can use together with the rewrite described above in this scenario:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'x-kusk:\n  path:\n    prefix: /api\n  upstream:\n    service: \n      ...\n    # /api/bar/... -> to upstream: /bar/...\n    rewrite:\n      pattern: "^/api"\n      substitution: ""\n')),(0,o.kt)("h2",{id:"using-hosts-for-multi-hosting-scenarios"},(0,o.kt)("strong",{parentName:"h2"},"Using Hosts for Multi-hosting Scenarios")),(0,o.kt)("p",null,"In a multi-hosting scenario for a single IP, you might want to ensure that requests to different hosts go to different APIs:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://onehost.com/api"},"https://onehost.com/api")," -> api nr 1"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://anotherhost.com/api"},"https://anotherhost.com/api")," -> api nr 2")),(0,o.kt)("p",null,"You can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"hosts")," property for this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"openapi: 3.0.0\ninfo:\n  title: simple-api\n  version: 0.1.0\nx-kusk:\n  upstream:\n    service: simple-api-service\n    namespace: default\n  hosts:\n     - onehost.com\n..\n")),(0,o.kt)("p",null,"Now, only requests to the onehost.com host will get forward to the simple-api-service."),(0,o.kt)("h2",{id:"disabling-operations"},(0,o.kt)("strong",{parentName:"h2"},"Disabling Operations")),(0,o.kt)("p",null,"In certain situations, your OpenAPI definition might contain operations that you do not want exposed to API consumers,\nfor example, if these are still in development or if they are meant to be consumed internally only. Kusk Gateway\nprovides a ",(0,o.kt)("inlineCode",{parentName:"p"},"x-kusk.disabled")," property for this purpose, which can be set at the global, path or operation level."),(0,o.kt)("p",null,"For example, if we wanted to disable the PUT operation in one of our examples above we could add this extension:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"openapi: 3.0.0\ninfo:\n  title: simple-api\n  version: 0.1.0\nx-kusk:\n  upstream:\n    host:\n      hostname: simple-api-service-hostname\n      port: 8001\npath:\n  /someoperation:\n    get:\n      operationId: doSomething\n      ..\n    put:\n      x-kusk:\n        disabled: true\n")),(0,o.kt)("p",null,"Setting this property to true at the top level will hide all operations, allowing you to override this\nproperty at the path or operation level when you want to expose only specific operations."))}c.isMDXComponent=!0},41391:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/rewrite-path-example-2d0e1668f351182e328b543aa9e70d8f.png"}}]);
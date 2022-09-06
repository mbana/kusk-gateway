"use strict";(self.webpackChunkkusk_gateway_docs_2=self.webpackChunkkusk_gateway_docs_2||[]).push([[486],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(n),f=o,m=p["".concat(l,".").concat(f)]||p[f]||c[f]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var d=2;d<i;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4136:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=n(7462),o=(n(7294),n(3905));const i={},a="Request Validation",s={unversionedId:"guides/validation",id:"guides/validation",title:"Request Validation",description:"Validating request payloads and providing meaningful error messages to consumers of an API can go a long way to provide",source:"@site/docs/guides/validation.md",sourceDirName:"guides",slug:"/guides/validation",permalink:"/guides/validation",draft:!1,editUrl:"https://github.com/kubeshop/kusk-gateway/docs/guides/validation.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Response Mocking",permalink:"/guides/mocking"},next:{title:"Response Caching",permalink:"/guides/cache"}},l={},d=[{value:"<strong>Strict Validation of Request Bodies</strong>",id:"strict-validation-of-request-bodies",level:2}],u={toc:d};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"request-validation"},"Request Validation"),(0,o.kt)("p",null,"Validating request payloads and providing meaningful error messages to consumers of an API can go a long way to provide\na better developer experience. Instead of just receiving a 40X response without further details, it can help immensely\nto know what was actually wrong in the payload - missing properties? incorrect formatting? etc. Writing the code on the server is tedious and often overlooked, making it harder for both consumers and testers to resolve issues they might have\nwhen working with your API."),(0,o.kt)("p",null,"Kusk Gateway provides end-user friendly validation against the provided OpenAPI definition automatically, without\nrequiring the implementer of the API to write any code, saving development time for both BE and API consumers."),(0,o.kt)("p",null,"Enabling validation is straight-forward - simply add the corresponding x-kusk property to your OpenAPI definition:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"x-kusk:\n  validation:\n    request:\n      enabled:\n")),(0,o.kt)("p",null,"Adding this at the global level will ensure all incoming requests are validated against the corresponding OpenAPI definition\nin regard to request parameters and payload. If the request does not match the specified metadata, a meaningful error is returned to the user without any request being forward to your actual API implementation."),(0,o.kt)("p",null,'Another positive side effect of this functionality is that it provides a "security-gate" for your API; malicious requests\nthat are outside your defined operations will not reach the target service where they could do potential harm.'),(0,o.kt)("p",null,"See all available validation configuration options in the ",(0,o.kt)("a",{parentName:"p",href:"../extension/#validation"},"Extension Reference"),"."),(0,o.kt)("h2",{id:"strict-validation-of-request-bodies"},(0,o.kt)("strong",{parentName:"h2"},"Strict Validation of Request Bodies")),(0,o.kt)("p",null,"Strict validation means that the request body must conform exactly to the schema specified in your OpenAPI spec.\nAny fields not in the schema will cause the validation to fail the request/response.\nTo enable this, please add the following field to your schema block if the request body is of type ",(0,o.kt)("inlineCode",{parentName:"p"},"object"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"paths:\n  /todos/{id}:\n    ...\n    patch:\n      ...\n      requestBody:\n        content:\n          application/json:\n            schema:\n              type: object\n              # if you want strict validation of request bodies, please enable this option in your OpenAPI file\n              additionalProperties: false\n              properties:\n                title:\n                  type: string\n                completed:\n                  type: boolean\n                order:\n                  type: integer\n                  format: int32l\n")))}c.isMDXComponent=!0}}]);
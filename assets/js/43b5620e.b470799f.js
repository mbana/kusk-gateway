"use strict";(self.webpackChunkkusk_gateway_docs_2=self.webpackChunkkusk_gateway_docs_2||[]).push([[919],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=s(n),d=r,k=h["".concat(u,".").concat(d)]||h[d]||c[d]||o;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},41268:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={},i="OAuth2",l={unversionedId:"guides/authentication/oauth2",id:"guides/authentication/oauth2",title:"OAuth2",description:"OAuth2 ensures that your application (upstream) doesn't get requests which are not authenticated and authorized. It effectively helps to protect your API.",source:"@site/docs/guides/authentication/oauth2.md",sourceDirName:"guides/authentication",slug:"/guides/authentication/oauth2",permalink:"/guides/authentication/oauth2",draft:!1,editUrl:"https://github.com/kubeshop/kusk-gateway/docs/guides/authentication/oauth2.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Custom Authentication Upstream",permalink:"/guides/authentication/custom-auth-upstream"},next:{title:"Cloudentity",permalink:"/guides/authentication/cloudentity"}},u={},s=[{value:"Setup Guide",id:"setup-guide",level:2},{value:"1. Configuring Auth0",id:"1-configuring-auth0",level:3},{value:"2. Deploy a protected API to Kusk",id:"2-deploy-a-protected-api-to-kusk",level:3},{value:"4. Update EnvoyFleet ConfigMap",id:"4-update-envoyfleet-configmap",level:3},{value:"5. Restart Envoy Fleet",id:"5-restart-envoy-fleet",level:3},{value:"6. Test using the browser",id:"6-test-using-the-browser",level:3},{value:"Upstream Issues",id:"upstream-issues",level:2}],p={toc:s};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"oauth2"},"OAuth2"),(0,r.kt)("p",null,"OAuth2 ensures that your application (upstream) doesn't get requests which are not authenticated and authorized. It effectively helps to protect your API."),(0,r.kt)("p",null,"Kusk makes it easy to configure OAuth2, using the ",(0,r.kt)("inlineCode",{parentName:"p"},"auth")," option in the ",(0,r.kt)("inlineCode",{parentName:"p"},"x-kusk")," extension."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The OAuth2 feature is currently under active development. See ",(0,r.kt)("a",{parentName:"p",href:"#upstream-issues"},"upstream issues"),".")),(0,r.kt)("h2",{id:"setup-guide"},"Setup Guide"),(0,r.kt)("p",null,"We'll go through step-by-step of configuring OAuth2. In this example we'll be using ",(0,r.kt)("a",{parentName:"p",href:"https://auth0.com/"},"Auth0")," as OAuth2 provider."),(0,r.kt)("h3",{id:"1-configuring-auth0"},"1. Configuring Auth0"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Signup for an account at ",(0,r.kt)("a",{parentName:"li",href:"https://auth0.com/"},"Auth0"),"."),(0,r.kt)("li",{parentName:"ol"},"Create an Auth0 Application"),(0,r.kt)("li",{parentName:"ol"},"Configure the following Auth0 Application fields: ",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"1. Allowed Callback URLs (e.g. `http://**KUSK_IP**/oauth2/callback`)\n2. Allowed Logout URLs (e.g. `http://**KUSK_IP**/oauth2/signout`)\n")),"(",(0,r.kt)("strong",{parentName:"li"},"KUSK_IP")," is the IP of the Kusk's LoadBalancer, you can obtain it by running ",(0,r.kt)("inlineCode",{parentName:"li"},"kusk ip"),")"),(0,r.kt)("li",{parentName:"ol"},"Take note of the credentials as we will need this later on:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "client_id": "go8brZmF6eE6r7TObzpGaD5KFjJkm6Qb",\n  "client_secret": "bkryzZGGA6Ko0VGnUEl_1YeREMHDpjGP8r1BTN1HYlmXpAWaiWNkD4bqIDuAuCKV"\n}\n')),(0,r.kt)("h3",{id:"2-deploy-a-protected-api-to-kusk"},"2. Deploy a protected API to Kusk"),(0,r.kt)("p",null,"The example below ensures the whole API is protected via OAuth2, and that the upstream ",(0,r.kt)("inlineCode",{parentName:"p"},"auth-oauth2-oauth0-authorization-code-grant-go-httpbin")," can be only accessed when authenticated and authorized."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"api.yml"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"openapi: 3.0.0\ninfo:\n  title: oauth2-example\n  description: oauth2-example\n  version: '0.1.0'\nx-kusk:\n  mocking:\n    enabled: true\n  auth:\n    scheme: oauth2\n    oauth2:\n      token_endpoint: https://**YOUR_DOMAIN**.eu.auth0.com/oauth/token\n      authorization_endpoint: https://**YOUR_DOMAIN**.eu.auth0.com/authorize\n      credentials:\n        client_id: **CLIENTID**\n        client_secret: **CLIENT_SECRET**\n      redirect_uri: /oauth2/callback\n      redirect_path_matcher: /oauth2/callback\n      signout_path: /oauth2/signout\n      forward_bearer_token: true\n      auth_scopes:\n        - openid\npaths:\n  \"/\":\n    get:\n      description: Returns GET data.\n      responses:\n        200:\n          content: \n            text/plain:\n              example: Hello from a mocked response\n")),(0,r.kt)("p",null,"You are required to change:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"token_endpoint"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"authorization_endpoint"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"credentials.client_id"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"credentials.client_secret"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"auth_scopes"),": Strictly speaking this is not required but we strongly suggest entering ",(0,r.kt)("inlineCode",{parentName:"li"},"openid")," for testing purposes")),(0,r.kt)("p",null,"After that, deploy the API by running: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kusk deploy -i api.yaml | kubectl apply -f -\n")),(0,r.kt)("h3",{id:"4-update-envoyfleet-configmap"},"4. Update EnvoyFleet ConfigMap"),(0,r.kt)("p",null,"We need to include to ",(0,r.kt)("inlineCode",{parentName:"p"},"client_secret")," to Envoy's ",(0,r.kt)("inlineCode",{parentName:"p"},"ConfigMap"),", by running "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl edit -n kusk-system configmaps kusk-gateway-envoy-fleet\n")),(0,r.kt)("p",null,"And then update the field ",(0,r.kt)("inlineCode",{parentName:"p"},"inline_string")," replacing it with the ",(0,r.kt)("inlineCode",{parentName:"p"},"client_secret")," obtained from Auth0. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'  secrets:\n  - name: token\n    generic_secret:\n      secret:\n        inline_string: "<stub_token_secret>" # <- replace with "CLIENT_SECRET"\n')),(0,r.kt)("p",null,"Finally, you should save the configuration and the changes will be applied. "),(0,r.kt)("h3",{id:"5-restart-envoy-fleet"},"5. Restart Envoy Fleet"),(0,r.kt)("p",null,"As we currently have upstream issues with Envoy waiting to be fixed, the temporal solution is to restart Envoy manually (this only needs to be done once): "),(0,r.kt)("p",null,"For this:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Port-Forward into Envoy's control plane: ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl port-forward --namespace kusk-system deployment/kusk-gateway-envoy-fleet 19000:19000\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Restart Envoy by making a POST request to ",(0,r.kt)("inlineCode",{parentName:"li"},"/quitquitquit"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"curl -X POST 'http://localhost:19000/quitquitquit'\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Wait until the changes to be propogated, this could take a while. To know if the Envoy has restarted, check if the Envoy container has restarted")),(0,r.kt)("pre",null,"kubectl get pods -w -n kusk-system --selector=app.kubernetes.io/instance=kusk-gateway-envoy-fleet",(0,r.kt)("br",null),(0,r.kt)("br",null),"NAME                                        READY   STATUS    RESTARTS      AGE",(0,r.kt)("br",null),"kusk-gateway-envoy-fleet-6f9ff68bcd-jxlwk   1/1     ",(0,r.kt)("b",null,"Running"),"   1 (30s ago)   1h"),(0,r.kt)("h3",{id:"6-test-using-the-browser"},"6. Test using the browser"),(0,r.kt)("p",null,"You're all set now, test your OAuth2 implementation through the browser by visiting Kusk's LoadBalancer. Get the URL with: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"kusk ip\n\n100.12.34.56\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"upstream-issues"},"Upstream Issues"),(0,r.kt)("p",null,"Certain OAuth2 features are blocked/constrained by upstream issues. Please see:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/envoyproxy/envoy/issues/22678"},"Segmentation Fault after `assert failure: false. Details: attempted to add shared target SdsApi <NAME_OF_SECRET> to initialized init manager Server"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/envoyproxy/go-control-plane/issues/581"},(0,r.kt)("inlineCode",{parentName:"a"},"SecretDiscoveryServiceServer"),": ",(0,r.kt)("inlineCode",{parentName:"a"},"StreamSecrets")," issues"),".")),(0,r.kt)("p",null,"So the implementation is constrained by these issues."))}c.isMDXComponent=!0}}]);
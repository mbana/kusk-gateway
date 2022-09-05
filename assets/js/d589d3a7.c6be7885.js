"use strict";(self.webpackChunkkusk_gateway_docs_2=self.webpackChunkkusk_gateway_docs_2||[]).push([[162],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),k=p(n),d=l,h=k["".concat(s,".").concat(d)]||k[d]||c[d]||o;return n?a.createElement(h,r(r({ref:t},u),{},{components:n})):a.createElement(h,r({ref:t},u))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,r=new Array(o);r[0]=k;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,r[1]=i;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},9390:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(7462),l=(n(7294),n(3905));const o={},r="Getting Started",i={unversionedId:"getting-started",id:"getting-started",title:"Getting Started",description:"In this section, you will:",source:"@site/docs/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/getting-started",draft:!1,editUrl:"https://github.com/kubeshop/kusk-gateway/docs/getting-started.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Kusk Gateway",permalink:"/"},next:{title:"OpenAPI Extension Reference",permalink:"/extension"}},s={},p=[{value:"<strong>1. Install Kusk CLI</strong>",id:"1-install-kusk-cli",level:3},{value:"<strong>2. Install Kusk Gateway in your cluster</strong>",id:"2-install-kusk-gateway-in-your-cluster",level:3},{value:"<strong>3. Create a sample OpenAPI definition</strong>",id:"3-create-a-sample-openapi-definition",level:3},{value:"<strong>4. Deploy the API</strong>",id:"4-deploy-the-api",level:3},{value:"<strong>5. Get Kusk Gateway External-IP</strong>",id:"5-get-kusk-gateway-external-ip",level:3},{value:"<strong>6. Test the API</strong>",id:"6-test-the-api",level:3},{value:"<strong>7. Deploy an application</strong>",id:"7-deploy-an-application",level:3},{value:"<strong>8. Update the OpenAPI definition to connect the application to Kusk Gateway</strong>",id:"8-update-the-openapi-definition-to-connect-the-application-to-kusk-gateway",level:3},{value:"<strong>9. Apply the new changes</strong>",id:"9-apply-the-new-changes",level:2},{value:"<strong>10. Test the deploy application</strong>",id:"10-test-the-deploy-application",level:2},{value:"Next Steps",id:"next-steps",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"getting-started"},"Getting Started"),(0,l.kt)("p",null,"In this section, you will:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Install Kusk CLI in your development environment and install Kusk Gateway in your cluster "),(0,l.kt)("li",{parentName:"ol"},"Deploy an API to Kusk Gateway with mocking enabled"),(0,l.kt)("li",{parentName:"ol"},"Deploy a sample application and connect it to Kusk Gateway")),(0,l.kt)("h3",{id:"1-install-kusk-cli"},(0,l.kt)("strong",{parentName:"h3"},"1. Install Kusk CLI")),(0,l.kt)("p",null,"To install Kusk CLI, you will need the following tools available in your terminal:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://helm.sh/docs/intro/install/"},"helm")," command-line tool"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/"},"kubectl")," command-line tool")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"# MacOS \nbrew install kubeshop/kusk/kusk\n\n# Linux\ncurl -sSLf https://raw.githubusercontent.com/kubeshop/kusk-gateway/main/cmd/kusk/scripts/install.sh | bash\n\n# Windows (go binary needed)\ngo install -x github.com/kubeshop/kusk-gateway/cmd/kusk@latest\n")),(0,l.kt)("h3",{id:"2-install-kusk-gateway-in-your-cluster"},(0,l.kt)("strong",{parentName:"h3"},"2. Install Kusk Gateway in your cluster")),(0,l.kt)("p",null,"Use the Kusk CLIs ",(0,l.kt)("a",{parentName:"p",href:"/reference/cli/install-cmd"},"install command")," to install Kusk Gateway components in your cluster. "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"kusk install\n")),(0,l.kt)("p",null,"Now that you've installed Kusk Gateway, let's have a look at how you can use OpenAPI to configure the operational and functional parts of your API."),(0,l.kt)("h3",{id:"3-create-a-sample-openapi-definition"},(0,l.kt)("strong",{parentName:"h3"},"3. Create a sample OpenAPI definition")),(0,l.kt)("p",null,"Kusk Gateway relies on ",(0,l.kt)("a",{parentName:"p",href:"https://www.openapis.org/"},"OpenAPI")," (f.k.a Swagger) to define your APIs and configure the gateway, all in one place, using the ",(0,l.kt)("inlineCode",{parentName:"p"},"x-kusk")," extension."),(0,l.kt)("p",null,"Create the file ",(0,l.kt)("inlineCode",{parentName:"p"},"openapi.yaml")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"openapi: 3.0.0\ninfo:\n  title: simple-api\n  version: 0.1.0\nx-kusk: # <-- Section that configures Kusk Gateway\n  mocking: # <-- Enables returning mock (fake) results\n    enabled: true\npaths:\n  /hello:\n    get:\n      responses:\n        '200':\n          description: A simple hello world!\n          content:\n            text/plain:\n              schema:\n                type: string\n              example: Hello from a mocked response!\n")),(0,l.kt)("p",null,"This approach of deploying an API and mocking it fits great in an ",(0,l.kt)("strong",{parentName:"p"},"Design-First approach"),", allowing, for example, frontend teams to work at the same time as the backend teams as the frontend team can start developing by using the mock results provided by Kusk Gateway. "),(0,l.kt)("h3",{id:"4-deploy-the-api"},(0,l.kt)("strong",{parentName:"h3"},"4. Deploy the API")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"kusk api generate -i openapi.yaml | kubectl apply -f -\n")),(0,l.kt)("h3",{id:"5-get-kusk-gateway-external-ip"},(0,l.kt)("strong",{parentName:"h3"},"5. Get Kusk Gateway External-IP")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"kusk-gateway-envoy-fleet")," LoadBalancer is the default entry point of the gateway. Copy the External-IP and have it handy for the next steps!"),(0,l.kt)("pre",null,"kubectl get service -n kusk-system kusk-gateway-envoy-fleet",(0,l.kt)("br",null),(0,l.kt)("br",null),"NAME                       TYPE           CLUSTER-IP      EXTERNAL-IP      PORT(S)                      AGE",(0,l.kt)("br",null),"kusk-gateway-envoy-fleet   LoadBalancer   10.100.15.213   ",(0,l.kt)("b",null,"104.198.194.37"),"   80:31833/TCP,443:3083"),(0,l.kt)("h3",{id:"6-test-the-api"},(0,l.kt)("strong",{parentName:"h3"},"6. Test the API")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Given we have enabled gateway-level mocks"),", we don't need to have any applications deployed to test the API. Kusk Gateway will provide with mock responses."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ curl 104.198.194.37/hello\nHello from a mocked response!\n")),(0,l.kt)("h3",{id:"7-deploy-an-application"},(0,l.kt)("strong",{parentName:"h3"},"7. Deploy an application")),(0,l.kt)("p",null,"Once you have created and API and mocked its results using Kusk Gateway, the next step is to deploy an applications and connect it to Kusk Gateway."),(0,l.kt)("p",null,"Deploy the following ",(0,l.kt)("inlineCode",{parentName:"p"},"hello-world")," Deployment:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl create deployment hello-world --image=kubeshop/kusk-hello-world:v1.0.0\n\nkubectl expose deployment hello-world --name hello-world-svc --port=8080\n")),(0,l.kt)("h3",{id:"8-update-the-openapi-definition-to-connect-the-application-to-kusk-gateway"},(0,l.kt)("strong",{parentName:"h3"},"8. Update the OpenAPI definition to connect the application to Kusk Gateway")),(0,l.kt)("p",null,"First, you will need to stop the mocking of the API. Delete the ",(0,l.kt)("inlineCode",{parentName:"p"},"mocking")," section from the ",(0,l.kt)("inlineCode",{parentName:"p"},"openapi.yaml")," file: "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-diff"},"...\n- mocking: \n-  enabled: true\n...\n")),(0,l.kt)("p",null,"Add the ",(0,l.kt)("inlineCode",{parentName:"p"},"upstream")," policy to the top of the ",(0,l.kt)("inlineCode",{parentName:"p"},"x-kusk")," section of the ",(0,l.kt)("inlineCode",{parentName:"p"},"openapi.yaml")," file, with the details of the service we just created:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"x-kusk:\n upstream:\n  service:\n    name: hello-world-svc\n    namespace: default\n    port: 8080\n")),(0,l.kt)("p",null,"The resulting file should look like this: "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"openapi: 3.0.0\ninfo:\n  title: simple-api\n  version: 0.1.0\nx-kusk:\n  upstream:\n    service:\n      name: hello-world-svc\n      namespace: default\n      port: 8080\npaths:\n  /hello:\n    get:\n      responses:\n        '200':\n          description: A simple hello world!\n          content:\n            text/plain:\n              schema:\n                type: string\n              example: Hello from a mocked response!\n")),(0,l.kt)("h2",{id:"9-apply-the-new-changes"},(0,l.kt)("strong",{parentName:"h2"},"9. Apply the new changes")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"kusk api generate -i openapi.yaml | kubectl apply -f -\n")),(0,l.kt)("h2",{id:"10-test-the-deploy-application"},(0,l.kt)("strong",{parentName:"h2"},"10. Test the deploy application")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ curl 104.198.194.37/hello\nHello from an implemented service!\n")),(0,l.kt)("p",null,"This response is served from the deployed application. Now you have successfully deployed an application to Kusk Gateway! "),(0,l.kt)("h2",{id:"next-steps"},"Next Steps"),(0,l.kt)("p",null,'The approach from this "Getting Started" section of the documentation follows a ',(0,l.kt)("a",{parentName:"p",href:"https://kubeshop.io/blog/from-design-first-to-automated-deployment-with-openapi"},"design-first")," approach where you deployed the API first, mocked the API later deployed an application and connected them to Kusk Gateway."),(0,l.kt)("p",null,"Check out the ",(0,l.kt)("a",{parentName:"p",href:"/guides/working-with-extension"},"available OpenAPI extensions")," to see all the features that you can enable in your gateway through OpenAPI. And, if you want, connect with us on ",(0,l.kt)("a",{parentName:"p",href:"https://discord.gg/6zupCZFQbe"},"Discord")," to tell us about your experience!"))}c.isMDXComponent=!0}}]);
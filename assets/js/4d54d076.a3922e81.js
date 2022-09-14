"use strict";(self.webpackChunkkusk_gateway_docs_2=self.webpackChunkkusk_gateway_docs_2||[]).push([[80],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),h=r,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||a;return n?o.createElement(m,i(i({ref:t},c),{},{components:n})):o.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},11933:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var o=n(87462),r=(n(67294),n(3905));const a={},i="How to Develop Kusk Gateway",l={unversionedId:"contributing",id:"contributing",title:"How to Develop Kusk Gateway",description:"Kusk Gateway code is managed with the help of Kubebuilder that provides code scaffolding and generation of K8s Custom Resource Definitions files.",source:"@site/docs/contributing.md",sourceDirName:".",slug:"/contributing",permalink:"/contributing",draft:!1,editUrl:"https://github.com/kubeshop/kusk-gateway/docs/contributing.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Static Route",permalink:"/reference/customresources/staticroute"},next:{title:"Privacy Policy",permalink:"/privacy"}},s={},u=[{value:"<strong>Code Structure to Get Started with Development</strong>",id:"code-structure-to-get-started-with-development",level:2},{value:"<strong>Set Up Development Environment</strong>",id:"set-up-development-environment",level:2},{value:"<strong>Launch Kusk Gateway in Minikube</strong>",id:"launch-kusk-gateway-in-minikube",level:3},{value:"<strong>Launch Kusk Gateway in Your Cluster</strong>",id:"launch-kusk-gateway-in-your-cluster",level:3},{value:"<strong>Redeploy After Code Changes</strong>",id:"redeploy-after-code-changes",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-develop-kusk-gateway"},"How to Develop Kusk Gateway"),(0,r.kt)("p",null,"Kusk Gateway code is managed with the help of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/kubebuilder"},"Kubebuilder")," that provides code scaffolding and generation of K8s Custom Resource Definitions files."),(0,r.kt)("p",null,"Internally, Kusk Gateway uses the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/envoyproxy/go-control-plane"},"go-control-plane")," package to configure Envoy with its xDS protocol."),(0,r.kt)("h2",{id:"code-structure-to-get-started-with-development"},(0,r.kt)("strong",{parentName:"h2"},"Code Structure to Get Started with Development")),(0,r.kt)("p",null,"Below is the (reduced) output of the ",(0,r.kt)("inlineCode",{parentName:"p"},"tree")," command on this repository."),(0,r.kt)("p",null,"These are the directories and packages that we suggest you need to know about to get started with Kusk Gateway development."),(0,r.kt)("p",null,"Obviously, there are more, so feel free to investigate the others for yourself to get an idea about how they fit into the overall architecture."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kusk-gateway\n\u251c\u2500\u2500 api\n\u2502\xa0\xa0 \u2514\u2500\u2500 v1alpha1 # Our Custom CRD types in Go\n\u251c\u2500\u2500 build # Dockerfiles for the Manager and Agent processes\n\u2502\xa0\xa0 \u251c\u2500\u2500 agent\n\u2502\xa0\xa0 \u2514\u2500\u2500 manager\n\u251c\u2500\u2500 cmd # Entry point for the Manager and Agent processes\n\u2502\xa0\xa0 \u251c\u2500\u2500 agent\n\u2502\xa0\xa0 \u2514\u2500\u2500 manager\n\u251c\u2500\u2500 examples # Various example applications to test against\n\u2502\xa0\xa0 \u251c\u2500\u2500 httpbin\n\u2502\xa0\xa0 \u251c\u2500\u2500 todomvc\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 spec\n\u2502\xa0\xa0 \u2514\u2500\u2500 websocket\n\u251c\u2500\u2500 internal\n\u2502\xa0\xa0 \u251c\u2500\u2500 agent # Business Logic for the agent process which handles mocking API resposes\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 httpserver\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 management\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 mocking\n\u2502\xa0\xa0 \u251c\u2500\u2500 controllers # Custom Kubernetes controllers that handle CRD events\n\u2502\xa0\xa0 \u251c\u2500\u2500 envoy # Envoy configuration, go-control-plane manager set up, and the types we manage when building the config\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 config\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 manager\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 types\n\u2502\xa0\xa0 \u251c\u2500\u2500 k8sutils # useful helper functions for interacting with Kubernetes\n\u2502\xa0\xa0 \u251c\u2500\u2500 validation # Service proxy that handles request validation before forwarding the request onto the destination service\n\u2502\xa0\xa0 \u2514\u2500\u2500 webhooks # Create certs for the webhooks\n\u2514\u2500\u2500 pkg\n    \u251c\u2500\u2500 analytics # Code for sending analytics data to telemetry provider\n    \u251c\u2500\u2500 options # Options structs that contain the fields that the user will configure with the x-kusk extension in their OpenAPI definition\n    \u2514\u2500\u2500 spec # Code for loading, parsing and validating the OpenAPI definition and the extensions.\n")),(0,r.kt)("h2",{id:"set-up-development-environment"},(0,r.kt)("strong",{parentName:"h2"},"Set Up Development Environment")),(0,r.kt)("p",null,"You can install Kusk Gateway into any cluster offering. So you can BYOC (Bring Your Own Cluster)."),(0,r.kt)("h3",{id:"launch-kusk-gateway-in-minikube"},(0,r.kt)("strong",{parentName:"h3"},"Launch Kusk Gateway in Minikube")),(0,r.kt)("p",null,"We have a useful Make command to set up a complete environment for development in Minikube."),(0,r.kt)("p",null,"To set up the environment, run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"make create-env\n")),(0,r.kt)("p",null,"This will do the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Start minikube with the profile name "kusk" and enable the Metallb add on. Metallb will expose the Envoy Fleet services "locally" without needing to port-forward to them.   '),(0,r.kt)("li",{parentName:"ul"},"Install our CustomResourceDefinitions.   "),(0,r.kt)("li",{parentName:"ul"},"Build the docker images, cache them for faster rebuilds and deploy them with Kustomize.   "),(0,r.kt)("li",{parentName:"ul"},"Deploy an Envoy Fleet.   ")),(0,r.kt)("h3",{id:"launch-kusk-gateway-in-your-cluster"},(0,r.kt)("strong",{parentName:"h3"},"Launch Kusk Gateway in Your Cluster")),(0,r.kt)("p",null,"If you opt to use a cluster offering that is not Minikube, you can use the following commands to launch Kusk Gateway in your cluster:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# Install the CustomResourceDefinitions\nmake install\n\n# Build and deploy the containers using Kustomize\nmake docker-images-cache docker-build deploy\n\n# wait for rollout to complete\nkubectl rollout status -w deployment/kusk-gateway-manager -n kusk-system\n\n# Deploy EnvoyFleet\nmake deploy-envoyfleet\n")),(0,r.kt)("h2",{id:"redeploy-after-code-changes"},(0,r.kt)("strong",{parentName:"h2"},"Redeploy After Code Changes")),(0,r.kt)("p",null,"The simplest way to ensure the recompliation of everything required is to run one of the following commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# generate will recompile any controller implementations\n# manifest will regenerate WebhookConfiguration, ClusterRole and CustomResourceDefinition objects that may need updating\n# install will install the most recent versions of the CRDs\n# docker-build will rebuild the docker images\n# deploy will deploy the most recent versions of the containers\n# cycle will cycle the Kubernetes deployments to make sure they are running the most recent built versions\n\nmake generate manifests install docker-build deploy cycle\n")))}p.isMDXComponent=!0}}]);
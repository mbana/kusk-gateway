"use strict";(self.webpackChunkkusk_gateway_docs_2=self.webpackChunkkusk_gateway_docs_2||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Introduction","href":"/","docId":"index"},{"type":"link","label":"Kusk OpenAPI Extension","href":"/extension","docId":"extension"},{"type":"category","label":"Getting Started","items":[{"type":"link","label":"1. Install Kusk CLI","href":"/getting-started/install-kusk-cli","docId":"getting-started/install-kusk-cli"},{"type":"link","label":"2. Launch a Kubernetes Cluster","href":"/getting-started/launch-a-kubernetes-cluster","docId":"getting-started/launch-a-kubernetes-cluster"},{"type":"link","label":"3. Install Kusk Gateway","href":"/getting-started/install-kusk-gateway","docId":"getting-started/install-kusk-gateway"},{"type":"link","label":"4. Mock an API","href":"/getting-started/mock-an-api","docId":"getting-started/mock-an-api"},{"type":"link","label":"5. Connecting an Application","href":"/getting-started/connecting-an-application","docId":"getting-started/connecting-an-application"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Guides","items":[{"type":"link","label":"Working with the extensions","href":"/guides/working-with-extension","docId":"guides/working-with-extension"},{"type":"category","label":"Authentication","items":[{"type":"link","label":"Custom Authentication Upstream","href":"/guides/authentication/custom-auth-upstream","docId":"guides/authentication/custom-auth-upstream"},{"type":"link","label":"OAuth2 via OIDC","href":"/guides/authentication/oauth2","docId":"guides/authentication/oauth2"},{"type":"link","label":"Cloudentity","href":"/guides/authentication/cloudentity","docId":"guides/authentication/cloudentity"},{"type":"link","label":"JWT","href":"/guides/authentication/jwt","docId":"guides/authentication/jwt"}],"collapsed":true,"collapsible":true},{"type":"link","label":"CORS","href":"/guides/cors","docId":"guides/cors"},{"type":"link","label":"Response Mocking","href":"/guides/mocking","docId":"guides/mocking"},{"type":"link","label":"Request Validation","href":"/guides/validation","docId":"guides/validation"},{"type":"link","label":"Response Caching","href":"/guides/cache","docId":"guides/cache"},{"type":"link","label":"Request Timeouts","href":"/guides/timeouts","docId":"guides/timeouts"},{"type":"link","label":"Request Routing","href":"/guides/routing","docId":"guides/routing"},{"type":"link","label":"Rate limiting","href":"/guides/rate-limit","docId":"guides/rate-limit"},{"type":"link","label":"OpenAPI Overlays","href":"/guides/overlays","docId":"guides/overlays"},{"type":"link","label":"Frontend web applications","href":"/guides/web-applications","docId":"guides/web-applications"},{"type":"link","label":"Using Cert Manager with Kusk Gateway","href":"/guides/cert-manager","docId":"guides/cert-manager"},{"type":"link","label":"Troubleshooting","href":"/guides/troubleshooting","docId":"guides/troubleshooting"},{"type":"link","label":"Observability","href":"/guides/observability","docId":"guides/observability"},{"type":"category","label":"Security","items":[{"type":"link","label":"42Crunch","href":"/guides/security/42crunch","docId":"guides/security/42crunch"}],"collapsed":true,"collapsible":true}],"collapsed":true,"collapsible":true},{"type":"category","label":"Reference","items":[{"type":"category","label":"Kusk CLI","items":[{"type":"link","label":"Install Kusk CLI","href":"/reference/cli/overview","docId":"reference/cli/overview"},{"type":"link","label":"kusk cluster install","href":"/reference/cli/install-cmd","docId":"reference/cli/install-cmd"},{"type":"link","label":"kusk deploy","href":"/reference/cli/deploy-cmd","docId":"reference/cli/deploy-cmd"},{"type":"link","label":"kusk mock","href":"/reference/cli/mock-cmd","docId":"reference/cli/mock-cmd"},{"type":"link","label":"kusk generate","href":"/reference/cli/generate-cmd","docId":"reference/cli/generate-cmd"},{"type":"link","label":"kusk dashboard","href":"/reference/cli/dashboard-cmd","docId":"reference/cli/dashboard-cmd"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Kusk Dashboard","items":[{"type":"link","label":"Kusk Dashboard","href":"/reference/dashboard/overview","docId":"reference/dashboard/overview"},{"type":"link","label":"Deploying APIs","href":"/reference/dashboard/deploying-apis","docId":"reference/dashboard/deploying-apis"},{"type":"link","label":"Inspecting Deployed APIs","href":"/reference/dashboard/inspecting-apis","docId":"reference/dashboard/inspecting-apis"}],"collapsed":true,"collapsible":true},{"type":"link","label":"Kusk API playground","href":"/docs/reference/kusk-api-server"},{"type":"category","label":"Kusk Kubernetes Resources","items":[{"type":"link","label":"Kusk Custom Resources","href":"/reference/customresources/overview","docId":"reference/customresources/overview"},{"type":"link","label":"API","href":"/reference/customresources/api","docId":"reference/customresources/api"},{"type":"link","label":"Envoy Fleet","href":"/reference/customresources/envoyfleet","docId":"reference/customresources/envoyfleet"},{"type":"link","label":"Static Route","href":"/reference/customresources/staticroute","docId":"reference/customresources/staticroute"}],"collapsed":true,"collapsible":true}],"collapsed":true,"collapsible":true},{"type":"category","label":"Quick Links","items":[{"type":"link","label":"Install Kusk CLI","href":"/quick-links/install","docId":"quick-links/install"},{"type":"link","label":"Upgrade","href":"/quick-links/upgrade","docId":"quick-links/upgrade"},{"type":"link","label":"Helm installation","href":"/quick-links/helm-install","docId":"quick-links/helm-install"}],"collapsed":true,"collapsible":true},{"type":"link","label":"Contributing","href":"/contributing","docId":"contributing"},{"type":"link","label":"Privacy","href":"/privacy","docId":"privacy"}]},"docs":{"contributing":{"id":"contributing","title":"How to Develop Kusk Gateway","description":"Kusk Gateway code is managed with the help of Kubebuilder that provides code scaffolding and generation of K8s Custom Resource Definitions files.","sidebar":"tutorialSidebar"},"extension":{"id":"extension","title":"OpenAPI Extension Reference","description":"Kusk Gateway comes with an OpenAPI extension to accommodate everything within","sidebar":"tutorialSidebar"},"getting-started/connecting-an-application":{"id":"getting-started/connecting-an-application","title":"5. Connecting an Application","description":"In the previous section, you\'ve mocked the API to provide fake results so developers can start working on it.","sidebar":"tutorialSidebar"},"getting-started/install-kusk-cli":{"id":"getting-started/install-kusk-cli","title":"1. Install Kusk CLI","description":"To install Kusk CLI, you will need the following tools available in your system:","sidebar":"tutorialSidebar"},"getting-started/install-kusk-gateway":{"id":"getting-started/install-kusk-gateway","title":"3. Install Kusk Gateway","description":"Kusk Gateway can be installed in the Kubernetes cluster using Kusk CLI, which was installed in the first step.","sidebar":"tutorialSidebar"},"getting-started/launch-a-kubernetes-cluster":{"id":"getting-started/launch-a-kubernetes-cluster","title":"2. Launch a Kubernetes Cluster","description":"Kusk needs to be installed in a Kubernetes cluster to serve its traffic.","sidebar":"tutorialSidebar"},"getting-started/mock-an-api":{"id":"getting-started/mock-an-api","title":"4. Mock an API","description":"In this section you will deploy a mocked API.","sidebar":"tutorialSidebar"},"guides/authentication/cloudentity":{"id":"guides/authentication/cloudentity","title":"Cloudentity","description":"Kusk Gateway enables using third-party authentication and authorization management solutions such as Cloudentity.","sidebar":"tutorialSidebar"},"guides/authentication/custom-auth-upstream":{"id":"guides/authentication/custom-auth-upstream","title":"Custom Authentication Upstream","description":"Currently you can use any Header based authentication methods by means of custom Authentication Upstream . This includes:","sidebar":"tutorialSidebar"},"guides/authentication/jwt":{"id":"guides/authentication/jwt","title":"JWT","description":"Example Configuration","sidebar":"tutorialSidebar"},"guides/authentication/oauth2":{"id":"guides/authentication/oauth2","title":"OAuth2 via OIDC","description":"OAuth2 ensures that your web application (upstream) doesn\'t get requests which are not authenticated and authorized. It effectively helps to protect your web application.","sidebar":"tutorialSidebar"},"guides/cache":{"id":"guides/cache","title":"Response Caching","description":"The HTTP Cache stores a response associated with a request and reuses the stored response for subsequent requests. Caches reduce latency and network traffic, as the response is directly returned from the gateway.","sidebar":"tutorialSidebar"},"guides/cert-manager":{"id":"guides/cert-manager","title":"Using Cert Manager with Kusk Gateway","description":"Cert Manager and Kusk Gateway work well together. Cert Manager is a way to easily issue and automatically rotate certificates.","sidebar":"tutorialSidebar"},"guides/cors":{"id":"guides/cors","title":"CORS Settings","description":"CORS (Cross-Origin Resource Sharing) is a standard implemented by browsers for ensuring that only the allowed clients actually access your API,","sidebar":"tutorialSidebar"},"guides/mocking":{"id":"guides/mocking","title":"Response Mocking","description":"How can Mocking help?","sidebar":"tutorialSidebar"},"guides/observability":{"id":"guides/observability","title":"Observability","description":"Envoy Admin Interface","sidebar":"tutorialSidebar"},"guides/overlays":{"id":"guides/overlays","title":"OpenAPI Overlays","description":"Kusk supports code-first approaches, i.e. OpenAPI generated from code annotations, by use of OpenAPI Overlays.","sidebar":"tutorialSidebar"},"guides/rate-limit":{"id":"guides/rate-limit","title":"Rate limiting","description":"Rate limiting ensures that your application doesn\'t get more than a specified number of requests over time. It effectively helps to protect your API from overloading. For requests above the threshold, Kusk Gateway returns HTTP Too Many Requests error.","sidebar":"tutorialSidebar"},"guides/routing":{"id":"guides/routing","title":"Request Routing","description":"Incoming requests to Kusk Gateway can be routed to the target service in two ways:","sidebar":"tutorialSidebar"},"guides/security/42crunch":{"id":"guides/security/42crunch","title":"42Crunch","description":"Automatically run security and vulnerabilities scan on your OpenAPI definition.","sidebar":"tutorialSidebar"},"guides/timeouts":{"id":"guides/timeouts","title":"Request Timeouts","description":"Kusk Gateway makes it easy to specify timeouts for your API operations, both globally and individually, for each path or operation.","sidebar":"tutorialSidebar"},"guides/troubleshooting":{"id":"guides/troubleshooting","title":"Troubleshooting","description":"To see what routes are set up on the gateway:","sidebar":"tutorialSidebar"},"guides/validation":{"id":"guides/validation","title":"Request Validation","description":"Validating request payloads and providing meaningful error messages to consumers of an API can go a long way to provide","sidebar":"tutorialSidebar"},"guides/web-applications":{"id":"guides/web-applications","title":"Frontend web applications","description":"Kusk Gatewys deploys APIs but also web applications written in any language and framework.","sidebar":"tutorialSidebar"},"guides/working-with-extension":{"id":"guides/working-with-extension","title":"The Kusk OpenAPI Extension","description":"Kusk Gateway comes with an x-kusk OpenAPI extension to allow","sidebar":"tutorialSidebar"},"index":{"id":"index","title":"Kusk Gateway","description":"Kusk Gateway is a self-service API gateway powered by OpenAPI and Envoy!","sidebar":"tutorialSidebar"},"privacy":{"id":"privacy","title":"Privacy Policy","description":"With the aim to improve the user experience, Kusk collects anonymous usage data.","sidebar":"tutorialSidebar"},"quick-links/helm-install":{"id":"quick-links/helm-install","title":"Helm installation","description":"A full Kusk installation is conformed of:","sidebar":"tutorialSidebar"},"quick-links/install":{"id":"quick-links/install","title":"Install Kusk CLI","description":"Kusk CLI is available for macOS, Linux and Windows.","sidebar":"tutorialSidebar"},"quick-links/upgrade":{"id":"quick-links/upgrade","title":"Upgrade","description":"To upgrade Kusk Gateway in your cluster, you will need to install the new version of Kusk CLI first and then upgrade Kusk Gateway with it.","sidebar":"tutorialSidebar"},"reference/cli/dashboard-cmd":{"id":"reference/cli/dashboard-cmd","title":"kusk dashboard","description":"Kusk provides a Kusk Dashboard command to expose and navigate easily to the Kusk Gateway Dashboard in the browser. kusk dashboard will start a port-forward session on port 8080, by default, to the envoyfleet serving the dashboard and will open the dashboard in the browser. By default this is kusk-gateway-private-envoy-fleet.kusk-system.","sidebar":"tutorialSidebar"},"reference/cli/deploy-cmd":{"id":"reference/cli/deploy-cmd","title":"kusk deploy","description":"The deploy accepts your OpenAPI definition as input, either as a local file or a URL pointing to your file","sidebar":"tutorialSidebar"},"reference/cli/generate-cmd":{"id":"reference/cli/generate-cmd","title":"kusk generate","description":"The generate command accepts your OpenAPI or Overlays definition as input, either as a local file or a URL pointing to your file","sidebar":"tutorialSidebar"},"reference/cli/install-cmd":{"id":"reference/cli/install-cmd","title":"kusk cluster install","description":"The install command will install Kusk Gateway and all its components with a single command.","sidebar":"tutorialSidebar"},"reference/cli/mock-cmd":{"id":"reference/cli/mock-cmd","title":"kusk mock","description":"Spin up a local mocking server that generates responses from your content schema or returns your defined examples.","sidebar":"tutorialSidebar"},"reference/cli/overview":{"id":"reference/cli/overview","title":"Install Kusk CLI","description":"Kusk is a CLI tool designed to help you manage common tasks related to Kusk Gateway.","sidebar":"tutorialSidebar"},"reference/customresources/api":{"id":"reference/customresources/api","title":"API","description":"This resource uses an OpenAPI file with x-kusk annotations as the source of truth to configure routing.","sidebar":"tutorialSidebar"},"reference/customresources/envoyfleet":{"id":"reference/customresources/envoyfleet","title":"Envoy Fleet","description":"This resource defines the Envoy Fleet, which is the implementation of the gateway in Kubernetes based on Envoy Proxy.","sidebar":"tutorialSidebar"},"reference/customresources/overview":{"id":"reference/customresources/overview","title":"Kusk Custom Resources","description":"Kusk Gateway defines a number of Kubernetes CRDs for managing its configuration. These are installed as part of the","sidebar":"tutorialSidebar"},"reference/customresources/staticroute":{"id":"reference/customresources/staticroute","title":"Static Route","description":"This resource defines manually created routing rules. It is useful to set up the routing to a non-API application, e.g. static pages or images or to route to legacy, possibly external to the cluster, APIs.","sidebar":"tutorialSidebar"},"reference/dashboard/deploying-apis":{"id":"reference/dashboard/deploying-apis","title":"Deploying APIs","description":"The Kusk Dashboard contains a wizard for helping you deploy your vanilla OpenAPI definitions to Kusk Gateway. It will","sidebar":"tutorialSidebar"},"reference/dashboard/inspecting-apis":{"id":"reference/dashboard/inspecting-apis","title":"Inspecting Deployed APIs","description":"Selecting a deployed API in the dashboard opens a corresponding details panel to the right containing 3 tabs:","sidebar":"tutorialSidebar"},"reference/dashboard/overview":{"id":"reference/dashboard/overview","title":"Kusk Dashboard","description":"Kusk Gateway includes a browser-based dashboard for inspecting deployed APIs, Envoy Fleets and Static Routes. For APIs,","sidebar":"tutorialSidebar"}}}')}}]);
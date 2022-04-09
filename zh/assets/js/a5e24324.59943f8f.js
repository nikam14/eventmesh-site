"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9659],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=i,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9162:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return m}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],l={},s="EventMesh Metrics (OpenTelemetry+Prometheus)",u={unversionedId:"features/eventmesh-metrics-export-design",id:"features/eventmesh-metrics-export-design",title:"EventMesh Metrics (OpenTelemetry+Prometheus)",description:"Introduction",source:"@site/docs/features/eventmesh-metrics-export-design.md",sourceDirName:"features",slug:"/features/eventmesh-metrics-export-design",permalink:"/zh/docs/features/eventmesh-metrics-export-design",editUrl:"https://github.com/apache/incubator-eventmesh-site/edit/master/docs/features/eventmesh-metrics-export-design.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"EventMesh pluggable protocols (CloudEvents)",permalink:"/zh/docs/features/eventmesh-cloudevents-sdk-binding"},next:{title:"EventMesh SchemaRegistry (OpenSchema)",permalink:"/zh/docs/features/eventmesh-schemaregistry-design"}},c={},m=[{value:"Introduction",id:"introduction",level:2},{value:"An overview of OpenTelemetry",id:"an-overview-of-opentelemetry",level:2},{value:"An overview of  Prometheus",id:"an-overview-of--prometheus",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Functional Requirements",id:"functional-requirements",level:3},{value:"Design Details",id:"design-details",level:2},{value:"Appendix",id:"appendix",level:2},{value:"References",id:"references",level:3}],p={toc:m};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"eventmesh-metrics-opentelemetryprometheus"},"EventMesh Metrics (OpenTelemetry+Prometheus)"),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-eventmesh"},"EventMesh(incubating)")," is a dynamic cloud-native eventing infrastructure."),(0,a.kt)("h2",{id:"an-overview-of-opentelemetry"},"An overview of OpenTelemetry"),(0,a.kt)("p",null,"OpenTelemetry is a collection of tools, APIs, and SDKs. You can use it to instrument, generate, collect, and export telemetry data (metrics, logs, and traces) for analysis in order to understand your software's performance and behavior."),(0,a.kt)("h2",{id:"an-overview-of--prometheus"},"An overview of  Prometheus"),(0,a.kt)("p",null,"Power your metrics and alerting with a leading open-source monitoring solution."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Dimensional data"),(0,a.kt)("li",{parentName:"ul"},"Powerful queries"),(0,a.kt)("li",{parentName:"ul"},"Great visualization"),(0,a.kt)("li",{parentName:"ul"},"Efficient storage"),(0,a.kt)("li",{parentName:"ul"},"Simple operation"),(0,a.kt)("li",{parentName:"ul"},"Precise alerting"),(0,a.kt)("li",{parentName:"ul"},"Many client libraries"),(0,a.kt)("li",{parentName:"ul"},"Many integrations")),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("h3",{id:"functional-requirements"},"Functional Requirements"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Requirement ID"),(0,a.kt)("th",{parentName:"tr",align:null},"Requirement Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"F-1"),(0,a.kt)("td",{parentName:"tr",align:null},"EventMesh users should be able to observe HTTP metrics from Prometheus"),(0,a.kt)("td",{parentName:"tr",align:null},"Functionality")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"F-2"),(0,a.kt)("td",{parentName:"tr",align:null},"EventMesh users should be able to observe TCP metrics from Prometheus"),(0,a.kt)("td",{parentName:"tr",align:null},"Functionality")))),(0,a.kt)("h2",{id:"design-details"},"Design Details"),(0,a.kt)("p",null,"use the meter instrument provided by OpenTelemetry to observe the metrics exist in EventMesh then export to Prometheus."),(0,a.kt)("p",null,"1\u3001Initialize a meter instrument"),(0,a.kt)("p",null,"2\u3001set the Prometheus server"),(0,a.kt)("p",null,"3\u3001different metrics observer built"),(0,a.kt)("h2",{id:"appendix"},"Appendix"),(0,a.kt)("h3",{id:"references"},"References"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/open-telemetry/docs-cn/blob/main/QUICKSTART.md#%E5%88%9B%E5%BB%BA%E5%9F%BA%E7%A1%80Span"},"https://github.com/open-telemetry/docs-cn/blob/main/QUICKSTART.md#%E5%88%9B%E5%BB%BA%E5%9F%BA%E7%A1%80Span")))}d.isMDXComponent=!0}}]);
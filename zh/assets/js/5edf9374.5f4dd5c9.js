"use strict";(self.webpackChunkincubator_eventmesh_site=self.webpackChunkincubator_eventmesh_site||[]).push([[2431],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),c=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),m=c(n),h=r,f=m["".concat(u,".").concat(h)]||m[h]||p[h]||i;return n?a.createElement(f,s(s({ref:t},l),{},{components:n})):a.createElement(f,s({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8214:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),s=["components"],o={title:"v1.3.0 Release",date:new Date("2021-12-23T16:13:52.000Z"),hide_table_of_contents:!1,author:"xmw1992",author_url:"https://github.com/xwm1992",author_image_url:"https://avatars.githubusercontent.com/u/13237619"},u=void 0,c={unversionedId:"release-notes/v1.3.0",id:"release-notes/v1.3.0",title:"v1.3.0 Release",description:"Feature",source:"@site/events/release-notes/v1.3.0.md",sourceDirName:"release-notes",slug:"/release-notes/v1.3.0",permalink:"/zh/events/release-notes/v1.3.0",draft:!1,tags:[],version:"current",frontMatter:{title:"v1.3.0 Release",date:"2021-12-23T16:13:52.000Z",hide_table_of_contents:!1,author:"xmw1992",author_url:"https://github.com/xwm1992",author_image_url:"https://avatars.githubusercontent.com/u/13237619"},sidebar:"tutorialSidebar",previous:{title:"v1.4.0 Release",permalink:"/zh/events/release-notes/v1.4.0"},next:{title:"v1.2.0 Release",permalink:"/zh/events/release-notes/v1.2.0"}},l={},p=[{value:"Feature",id:"feature",level:2},{value:"Enhancement",id:"enhancement",level:2},{value:"Bug",id:"bug",level:2},{value:"Document and code style improvement",id:"document-and-code-style-improvement",level:2}],m={toc:p};function h(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"feature"},"Feature"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/339"},"Feature #339")," Integrate With OpenSchema"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/340"},"Feature #340")," Integrate With OpenTelemetry"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/375"},"Feature #375")," In memory as event store"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/482"},"Feature #482")," Support protocol adaptor plugin"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/490"},"Feature #490")," Support service invocation"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/547"},"Feature #547")," Create and upload 1.3.0 version docker image"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/564"},"Feature #564")," Support CloudEvents protocols for pub/sub in EventMesh")),(0,i.kt)("h2",{id:"enhancement"},"Enhancement"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/346"},"Enhancement #346")," How EventMesh offers Administrative API to manage Topic of the eventstore"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/367"},"Enhancement #367")," Enhance SPI plugins"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/435"},"Enhancement #435")," Expose clientmanager/admin APIs as RESTful APIs"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/451"},"Enhancement #451")," SSLContext Initialize error"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/460"},"Enhancement #460")," Support custom retry times configuration when SubcriptionType is ",(0,i.kt)("inlineCode",{parentName:"li"},"SYNC")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/523"},"Enhancement #523")," Adding Flow control RateLimiter support in Http Message Send Processor"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/550"},"Enhancement  #550")," Remove unused jar in plugin module"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/604"},"Enhancement #604")," Improve the rebalance algorithm between eventmesh and eventmesh-client")),(0,i.kt)("h2",{id:"bug"},"Bug"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/448"},"Bug #448")," EventMeshTCPServer set unknown channel options"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/461"},"Bug #461")," Global flow control is not work in MessageTransferTask"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/476"},"Bug #476")," Biz Exceptions occured in EventMesh cause connection close of client"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/646"},"Bug #646")," Missing the rocketmq message properties during protocol conversion"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/630"},"Bug #630")," RocketMQProducerImpl cannot load config properties from classpath")),(0,i.kt)("h2",{id:"document-and-code-style-improvement"},"Document and code style improvement"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/405"},"Enhancement #405")," Looking for code hero for Apache EventMesh"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/425"},"Enhancement #425")," Using templates to encourage useful issues and PRs"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/436"},"Bug #436")," typo errors for runtime package"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/444"},"Discuss #444")," Eventmesh code style specification"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/pull/653"},"MINOR #653")," supply the license and update the third party license file name")))}h.isMDXComponent=!0}}]);
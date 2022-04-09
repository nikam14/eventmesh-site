"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2582],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(n),h=i,v=m["".concat(c,".").concat(h)]||m[h]||l[h]||o;return n?r.createElement(v,a(a({ref:t},p),{},{components:n})):r.createElement(v,a({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2296:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return l}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],s={},c="Observe trace through Zipkin",u={unversionedId:"instructions/eventmesh-trace-Zipkin-instruction",id:"instructions/eventmesh-trace-Zipkin-instruction",title:"Observe trace through Zipkin",description:"Download and run Zipkin",source:"@site/docs/instructions/eventmesh-trace-Zipkin-instruction.md",sourceDirName:"instructions",slug:"/instructions/eventmesh-trace-Zipkin-instruction",permalink:"/docs/instructions/eventmesh-trace-Zipkin-instruction",editUrl:"https://github.com/apache/incubator-eventmesh-site/edit/master/docs/instructions/eventmesh-trace-Zipkin-instruction.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Eventmesh-store Quick start Instruction",permalink:"/docs/instructions/eventmesh-store-quickstart"},next:{title:"Apache EventMesh (Incubating)",permalink:"/docs/intro"}},p={},l=[{value:"Download and run Zipkin",id:"download-and-run-zipkin",level:2},{value:"Run EventMesh",id:"run-eventmesh",level:2},{value:"Related settings",id:"related-settings",level:2},{value:"Observe",id:"observe",level:2}],m={toc:l};function h(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"observe-trace-through-zipkin"},"Observe trace through Zipkin"),(0,o.kt)("h2",{id:"download-and-run-zipkin"},"Download and run Zipkin"),(0,o.kt)("p",null,"Reference:",(0,o.kt)("a",{parentName:"p",href:"https://zipkin.io/pages/quickstart.html"},"https://zipkin.io/pages/quickstart.html")),(0,o.kt)("h2",{id:"run-eventmesh"},"Run EventMesh"),(0,o.kt)("p",null,"run eventmesh-starter(reference ",(0,o.kt)("a",{parentName:"p",href:"/docs/instructions/eventmesh-runtime-quickstart"},"eventmesh-runtime-quickstart"),")"),(0,o.kt)("p",null,"run eventmesh-example(reference ",(0,o.kt)("a",{parentName:"p",href:"/docs/instructions/eventmesh-sdk-java-quickstart"},"eventmesh-sdk-java-quickstart"),")"),(0,o.kt)("h2",{id:"related-settings"},"Related settings"),(0,o.kt)("p",null,"In eventmesh-runtime/conf/eventmesh.properties\uff1a"),(0,o.kt)("p",null,"The default exporter is log, which needs to be manually changed to Zipkin"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-properties"},"#trace exporter\neventmesh.trace.exporter.type=Zipkin\n")),(0,o.kt)("p",null,"Here are various configurations of Zipkin"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-properties"},"#set the maximum batch size to use\neventmesh.trace.exporter.max.export.size=512\n#set the queue size. This must be >= the export batch size\neventmesh.trace.exporter.max.queue.size=2048\n#set the max amount of time an export can run before getting(TimeUnit=SECONDS)\neventmesh.trace.exporter.export.timeout=30\n#set time between two different exports(TimeUnit=SECONDS)\neventmesh.trace.exporter.export.interval=5\n\n#zipkin\neventmesh.trace.export.zipkin.ip=localhost\neventmesh.trace.export.zipkin.port=9411\n")),(0,o.kt)("p",null,"The above are related configurations. If you are familiar with Zipkin, you can modify it yourself."),(0,o.kt)("h2",{id:"observe"},"Observe"),(0,o.kt)("p",null,"Open browser access\uff1a ",(0,o.kt)("strong",{parentName:"p"},"http://localhost:9411")))}h.isMDXComponent=!0}}]);
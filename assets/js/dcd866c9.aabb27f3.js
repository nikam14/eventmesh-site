"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3970],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(h,l(l({ref:t},c),{},{components:n})):r.createElement(h,l({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4978:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),l=["components"],i={},s="Eventmesh-runtime Quick start Instruction",u={unversionedId:"instructions/eventmesh-runtime-quickstart",id:"instructions/eventmesh-runtime-quickstart",title:"Eventmesh-runtime Quick start Instruction",description:"1 Remote Deploy",source:"@site/docs/instructions/eventmesh-runtime-quickstart.md",sourceDirName:"instructions",slug:"/instructions/eventmesh-runtime-quickstart",permalink:"/docs/instructions/eventmesh-runtime-quickstart",editUrl:"https://github.com/apache/incubator-eventmesh-site/edit/master/docs/instructions/eventmesh-runtime-quickstart.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Quick Start Instruction",permalink:"/docs/instructions/eventmesh-runtime-quickstart-with-docker"},next:{title:"How to run eventmesh-sdk-java demo",permalink:"/docs/instructions/eventmesh-sdk-java-quickstart"}},c={},p=[{value:"1 Remote Deploy",id:"1-remote-deploy",level:2},{value:"1.1 Dependencies",id:"11-dependencies",level:3},{value:"1.2 download sources",id:"12-download-sources",level:3},{value:"1.3 build sources",id:"13-build-sources",level:3},{value:"1.4 Deployment",id:"14-deployment",level:3},{value:"2 Run Locally",id:"2-run-locally",level:2},{value:"2.1 dependencies",id:"21-dependencies",level:3},{value:"2.2 download sources",id:"22-download-sources",level:3},{value:"2.3 Configuration",id:"23-configuration",level:3}],m={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"eventmesh-runtime-quick-start-instruction"},"Eventmesh-runtime Quick start Instruction"),(0,a.kt)("h2",{id:"1-remote-deploy"},"1 Remote Deploy"),(0,a.kt)("h3",{id:"11-dependencies"},"1.1 Dependencies"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"64bit OS, Linux/Unix is recommended;\n64bit JDK 1.8+;\nGradle at least 7.0, eg 7.0.*\n")),(0,a.kt)("h3",{id:"12-download-sources"},"1.2 download sources"),(0,a.kt)("p",null,"download source code from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-eventmesh"},"https://github.com/apache/incubator-eventmesh"),"\nYou will get ",(0,a.kt)("strong",{parentName:"p"},"EventMesh-master.zip")),(0,a.kt)("h3",{id:"13-build-sources"},"1.3 build sources"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-$xslt"},"unzip EventMesh-master.zip\ncd /*YOUR DEPLOY PATH*/EventMesh-master\ngradle clean dist\n")),(0,a.kt)("p",null,"You will get ",(0,a.kt)("strong",{parentName:"p"},"EventMesh_1.3.0-release.tar.gz")," in directory /",(0,a.kt)("em",{parentName:"p"},"YOUR DEPLOY PATH"),"/EventMesh-master/build"),(0,a.kt)("h3",{id:"14-deployment"},"1.4 Deployment"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"deploy eventmesh-runtime")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"tar -zxvf Eventmesh_1.3.0-release.tar.gz\ncd conf\nconfig your eventMesh.properties\ncd ../bin\nsh start.sh\ntail -f ./logs/eventmesh.out\nEventMeshTCPServer[port=10000] started\n\nHTTPServer[port=10105] started\n\nEventMeshGrpcServer[port=10205] started\n")),(0,a.kt)("h2",{id:"2-run-locally"},"2 Run Locally"),(0,a.kt)("h3",{id:"21-dependencies"},"2.1 dependencies"),(0,a.kt)("p",null,"Same with 1.1, but it can be only compiled in JDK 1.8"),(0,a.kt)("h3",{id:"22-download-sources"},"2.2 download sources"),(0,a.kt)("p",null,"Same with 1.2"),(0,a.kt)("h3",{id:"23-configuration"},"2.3 Configuration"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"2.3.1 Configure plugin")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"2.3.1.1 Install Plugin"))),(0,a.kt)("p",null,"There are two ways to install the plugin:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Install from classpath: Local development can be done by declaring in the eventmesh-starter module build.gradle, for example\nby declaring the use of rocketmq plugin")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'   implementation project(":eventmesh-connector-plugin:eventmesh-connector-rocketmq")\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Install from files: By installing the plugin into the plugin directory, EventMesh will automatically load the plugins in the plugin directory\naccording to the conditions when EventMesh running, you can install the plugins by executing the following command.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"./gradlew clean jar dist && ./gradlew installPlugin\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"2.3.1.2 Use Plugin"))),(0,a.kt)("p",null,"EventMesh will default load plugins installed in ",(0,a.kt)("inlineCode",{parentName:"p"},"dist/plugin"),", you can change the plugin directory by ",(0,a.kt)("inlineCode",{parentName:"p"},"-DeventMeshPluginDir=your_plugin_directory"),".\nThe plugin instance to be used at runtime can be configured in the ",(0,a.kt)("inlineCode",{parentName:"p"},"eventmesh.properties")," at the ",(0,a.kt)("inlineCode",{parentName:"p"},"confPath")," directory.\nExample you can declare use rocketmq by following config."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"#connector plugin, default standalone, can be rocketmq\neventMesh.connector.plugin.type=rocketmq\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"2.3.2 Configure VM Options")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"-Dlog4j.configurationFile=eventmesh-runtime/conf/log4j2.xml\n-Deventmesh.log.home=eventmesh-runtime/logs\n-Deventmesh.home=eventmesh-runtime/dist\n-DconfPath=eventmesh-runtime/conf\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"ps: If you use Windows, you may need to replace the file separator to \\")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"2.3.3 Run")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"running `org.apache.eventmesh.starter.StartUp` main method in eventmesh-starter module.\n\nEventMeshTCPServer[port=10000] started\n\nHTTPServer[port=10105] started\n\nEventMeshGrpcServer[port=10205] started\n")))}d.isMDXComponent=!0}}]);
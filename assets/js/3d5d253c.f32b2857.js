"use strict";(self.webpackChunkincubator_eventmesh_site=self.webpackChunkincubator_eventmesh_site||[]).push([[6683],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(t),m=r,v=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return t?a.createElement(v,i(i({ref:n},p),{},{components:t})):a.createElement(v,i({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8026:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),i=["components"],s={},c="Installation",l={unversionedId:"sdk-java/introduction",id:"sdk-java/introduction",title:"Installation",description:"Maven Central",source:"@site/docs/sdk-java/01-introduction.md",sourceDirName:"sdk-java",slug:"/sdk-java/introduction",permalink:"/docs/sdk-java/introduction",draft:!1,editUrl:"https://github.com/apache/incubator-eventmesh-site/edit/master/docs/sdk-java/01-introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"EventMesh Store",permalink:"/docs/installation/store"},next:{title:"HTTP Protocol",permalink:"/docs/sdk-java/http"}},p={},d=[{value:"Gradle",id:"gradle",level:2},{value:"Maven",id:"maven",level:2}],u={toc:d};function m(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installation"},"Installation"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://maven-badges.herokuapp.com/maven-central/org.apache.eventmesh/eventmesh-sdk-java"},(0,o.kt)("img",{parentName:"a",src:"https://maven-badges.herokuapp.com/maven-central/org.apache.eventmesh/eventmesh-sdk-java/badge.svg?style=for-the-badge",alt:"Maven Central"}))),(0,o.kt)("p",null,"EventMesh SDK for Java is a collection of Java libraries to integrate EventMesh in a Java application. The SDK supports sending and receiving synchronous messages, asynchronous messages, and broadcast messages in TCP, HTTP, and gRPC protocols. The SDK implements EventMesh Message, CloudEvents, and OpenMessaging formats. The demo project is available in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-eventmesh/tree/master/eventmesh-examples"},(0,o.kt)("inlineCode",{parentName:"a"},"eventmesh-example"))," module."),(0,o.kt)("h2",{id:"gradle"},"Gradle"),(0,o.kt)("p",null,"To install EventMesh SDK for Java with Gradle, declare ",(0,o.kt)("inlineCode",{parentName:"p"},"org.apache.eventmesh:eventmesh-sdk-java")," as ",(0,o.kt)("inlineCode",{parentName:"p"},"implementation")," in the dependencies block of the module's ",(0,o.kt)("inlineCode",{parentName:"p"},"build.gradle")," file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n  implementation 'org.apache.eventmesh:eventmesh-sdk-java:1.4.0'\n}\n")),(0,o.kt)("h2",{id:"maven"},"Maven"),(0,o.kt)("p",null,"To install EventMesh SDK for Java with Maven, declare ",(0,o.kt)("inlineCode",{parentName:"p"},"org.apache.eventmesh:eventmesh-sdk-java")," as a dependency in the dependencies block of the project's ",(0,o.kt)("inlineCode",{parentName:"p"},"pom.xml")," file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependencies>\n  <dependency>\n    <groupId>org.apache.eventmesh</groupId>\n    <artifactId>eventmesh-sdk-java</artifactId>\n    <version>1.4.0</version>\n  </dependency>\n</dependencies>\n")))}m.isMDXComponent=!0}}]);
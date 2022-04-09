"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[645],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7611:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={},s="Quick Start Instruction",c={unversionedId:"instructions/eventmesh-runtime-quickstart-with-docker",id:"instructions/eventmesh-runtime-quickstart-with-docker",title:"Quick Start Instruction",description:"This quick start instruction is a detailed guide of setting up EventMesh via docker. It takes RocketMQ as connector for example.",source:"@site/docs/instructions/eventmesh-runtime-quickstart-with-docker.md",sourceDirName:"instructions",slug:"/instructions/eventmesh-runtime-quickstart-with-docker",permalink:"/docs/instructions/eventmesh-runtime-quickstart-with-docker",editUrl:"https://github.com/apache/incubator-eventmesh-site/edit/master/docs/instructions/eventmesh-runtime-quickstart-with-docker.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"TCP Protocol Document In Eventmesh-Runtime",permalink:"/docs/instructions/eventmesh-runtime-protocol"},next:{title:"Eventmesh-runtime Quick start Instruction",permalink:"/docs/instructions/eventmesh-runtime-quickstart"}},u={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Get EventMesh Image",id:"get-eventmesh-image",level:2},{value:"Prepare Configuration Files",id:"prepare-configuration-files",level:2},{value:"eventmesh.properties",id:"eventmeshproperties",level:3},{value:"rocketmq-client.properties",id:"rocketmq-clientproperties",level:3},{value:"Make EventMesh Run",id:"make-eventmesh-run",level:2},{value:"Manage EventMesh Container",id:"manage-eventmesh-container",level:2},{value:"Explore More",id:"explore-more",level:2}],m={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"quick-start-instruction"},"Quick Start Instruction"),(0,o.kt)("p",null,"This quick start instruction is a detailed guide of setting up EventMesh via docker. It takes RocketMQ as connector for example."),(0,o.kt)("p",null,"Alternative languages: ",(0,o.kt)("a",{parentName:"p",href:"/docs/instructions/eventmesh-runtime-quickstart-with-docker"},"English version"),", ",(0,o.kt)("a",{parentName:"p",href:"../../cn/instructions/eventmesh-runtime-quickstart-with-docker.md"},"Chinese version"),"."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"64bit Linux is recommended."),(0,o.kt)("li",{parentName:"ol"},"Docker Engine is assumed installed. The installation procedure could be found on ",(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/"},"docker docs"),"."),(0,o.kt)("li",{parentName:"ol"},"Basic ",(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-started/"},"docker concepts and commands")," are highly recommended acquiring first, including registry, volume, etc. However, it's not a necessity for going through this instruction because every commands are listed."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://rocketmq.apache.org/docs/quick-start/"},"RocketMQ is running successfully")," and could be routed to through IP address.")),(0,o.kt)("h2",{id:"get-eventmesh-image"},"Get EventMesh Image"),(0,o.kt)("p",null,"First, you could open a terminal and use the following ",(0,o.kt)("inlineCode",{parentName:"p"},"pull")," command to download ",(0,o.kt)("a",{parentName:"p",href:"https://eventmesh.apache.org/events/release-notes/v1.3.0/"},"latest EventMesh")," from ",(0,o.kt)("a",{parentName:"p",href:"https://registry.hub.docker.com/r/eventmesh/eventmesh/tags"},"Docker Hub - the default docker registry"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"sudo docker pull eventmesh/eventmesh:v1.3.0\n")),(0,o.kt)("p",null,"During and After downloading, the terminal will show the status such as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"ubuntu@VM-16-4-ubuntu:~$ sudo docker pull eventmesh/eventmesh:v1.3.0\nv1.3.0: Pulling from eventmesh/eventmesh\n2d473b07cdd5: Downloading [======>                                            ]  9.649MB/76.1MB\n2b97b2e51c1a: Pulling fs layer\nccef593d4fe7: Pulling fs layer\n70beb7ae51cd: Waiting\n0a2cf32321af: Waiting\n5d764ea8950d: Waiting\n71d02dcd996d: Waiting\nv1.3.0: Pulling from eventmesh/eventmesh\n2d473b07cdd5: Pull complete\n2b97b2e51c1a: Pull complete\nccef593d4fe7: Pull complete\n70beb7ae51cd: Pull complete\n0a2cf32321af: Pull complete\n5d764ea8950d: Pull complete\n71d02dcd996d: Pull complete\nDigest: sha256:267a93a761e999790f8bd132b09541f0ffab551e8618097a4adce8e3e66bbe4e\nStatus: Downloaded newer image for eventmesh/eventmesh:v1.3.0\ndocker.io/eventmesh/eventmesh:v1.3.0\n")),(0,o.kt)("p",null,"Next, you could list and check local images on your machine using command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"sudo docker images\n")),(0,o.kt)("p",null,"And, the terminal will print all local images such as the following content. It could be found that EventMesh image has been successfully downloaded."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"ubuntu@VM-16-4-ubuntu:~$ sudo docker images\nREPOSITORY               TAG         IMAGE ID       CREATED        SIZE\neventmesh/eventmesh      v1.3.0      da0008c1d03b   7 days ago     922MB\n")),(0,o.kt)("h2",{id:"prepare-configuration-files"},"Prepare Configuration Files"),(0,o.kt)("p",null,"Before running the EventMesh container from downloaded image, you need to configure some files."),(0,o.kt)("p",null,"Here this instruction takes RocketMQ as connector for example, so that two configuration files should be created: ",(0,o.kt)("inlineCode",{parentName:"p"},"eventmesh.properties")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"rocketmq-client.properties"),"."),(0,o.kt)("p",null,"First, you may need to create such files, using following commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"sudo mkdir -p /data/eventmesh/rocketmq/conf\ncd /data/eventmesh/rocketmq/conf\nsudo touch eventmesh.properties\nsudo touch rocketmq-client.properties\n")),(0,o.kt)("h3",{id:"eventmeshproperties"},"eventmesh.properties"),(0,o.kt)("p",null,"It contains properties of  EventMesh runtime env and integrated plugins."),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"vi")," command to edit ",(0,o.kt)("inlineCode",{parentName:"p"},"eventmesh.properties"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"sudo vi eventmesh.properties\n")),(0,o.kt)("p",null,"In the quick start step, you could directly copy content in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-eventmesh/blob/1.3.0/eventmesh-runtime/conf/eventmesh.properties"},"https://github.com/apache/incubator-eventmesh/blob/1.3.0/eventmesh-runtime/conf/eventmesh.properties")," ."),(0,o.kt)("p",null,"Some default key-values are listed below:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Configuration Key"),(0,o.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,o.kt)("th",{parentName:"tr",align:null},"Remarks"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"eventMesh.server.http.port"),(0,o.kt)("td",{parentName:"tr",align:null},"10105"),(0,o.kt)("td",{parentName:"tr",align:null},"EventMesh http server port")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"eventMesh.server.tcp.port"),(0,o.kt)("td",{parentName:"tr",align:null},"10000"),(0,o.kt)("td",{parentName:"tr",align:null},"EventMesh tcp server port")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"eventMesh.server.grpc.port"),(0,o.kt)("td",{parentName:"tr",align:null},"10205"),(0,o.kt)("td",{parentName:"tr",align:null},"EventMesh grpc server port")))),(0,o.kt)("h3",{id:"rocketmq-clientproperties"},"rocketmq-client.properties"),(0,o.kt)("p",null,"It contains properties of running RocketMQ nameserver."),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"vi")," command to edit ",(0,o.kt)("inlineCode",{parentName:"p"},"rocketmq-client.properties"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"sudo vi rocketmq-client.properties\n")),(0,o.kt)("p",null,"In the quick start step, you could refer to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-eventmesh/blob/1.3.0/eventmesh-runtime/conf/rocketmq-client.properties"},"https://github.com/apache/incubator-eventmesh/blob/1.3.0/eventmesh-runtime/conf/rocketmq-client.properties")," , and change the value to a running nameserver address."),(0,o.kt)("p",null,"The default key-value is listed below:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Configuration Key"),(0,o.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,o.kt)("th",{parentName:"tr",align:null},"Remarks"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"eventMesh.server.rocketmq.namesrvAddr"),(0,o.kt)("td",{parentName:"tr",align:null},"127.0.0.1:9876;127.0.0.1:9876"),(0,o.kt)("td",{parentName:"tr",align:null},"RocketMQ namesrv default address")))),(0,o.kt)("h2",{id:"make-eventmesh-run"},"Make EventMesh Run"),(0,o.kt)("p",null,"Now you are at the step of running an EventMesh container from downloaded docker image."),(0,o.kt)("p",null,"The main command is ",(0,o.kt)("inlineCode",{parentName:"p"},"docker run"),", and two things need to be noted."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"binding the container port with host machine port: use ",(0,o.kt)("inlineCode",{parentName:"li"},"-p")," option of ",(0,o.kt)("inlineCode",{parentName:"li"},"docker run"),"."),(0,o.kt)("li",{parentName:"ol"},"mount the configuration files with host machine files: use ",(0,o.kt)("inlineCode",{parentName:"li"},"-v")," option of ",(0,o.kt)("inlineCode",{parentName:"li"},"docker run"),".")),(0,o.kt)("p",null,"So that the command for running EventMesh is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"sudo docker run -d \\\n> -p 10000:10000 -p 10105:10105 \\\n> -v /data/eventmesh/rocketmq/conf/eventmesh.properties:/data/app/eventmesh/conf/eventmesh.properties \\\n> -v /data/eventmesh/rocketmq/conf/rocketmq-client.properties:/data/app/eventmesh/conf/rocketmq-client.properties \\\n> eventmesh/eventmesh:v1.3.0\n")),(0,o.kt)("p",null,"After you executing it and seeing a string below it, the container is running successfully."),(0,o.kt)("p",null,"Next, you could use below command to check the status of the EventMesh container:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"sudo docker ps\n")),(0,o.kt)("p",null,"Successfully, you could see the terminal presenting container status such as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'CONTAINER ID   IMAGE                        COMMAND                  CREATED              STATUS              PORTS                                                                                          NAMES\nd1e1a335d4a9   eventmesh/eventmesh:v1.3.0   "/bin/sh -c \'sh star\u2026"   About a minute ago   Up About a minute   0.0.0.0:10000->10000/tcp, :::10000->10000/tcp, 0.0.0.0:10105->10105/tcp, :::10105->10105/tcp   focused_bartik\n')),(0,o.kt)("p",null,"It tells you that ",(0,o.kt)("inlineCode",{parentName:"p"},"container id")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"d1e1a335d4a9")," and random ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"focused_bartik"),". They are the identifier to this container when managing it. Note that they may be different in your machine."),(0,o.kt)("h2",{id:"manage-eventmesh-container"},"Manage EventMesh Container"),(0,o.kt)("p",null,"After correctly running EventMesh container, you could manage such container by entering container, checking logs, remove container, and so on."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"enter container")," command example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"sudo docker exec -it [your container id or name] /bin/bash\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"checking logs")," command example inside container:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cd ../logs\ntail -f eventmesh.out\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"remove container")," command example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"sudo docker rm -f [your container id or name]\n")),(0,o.kt)("h2",{id:"explore-more"},"Explore More"),(0,o.kt)("p",null,"Since EventMesh is running, now you can write your own client code referring ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-eventmesh/tree/master/eventmesh-examples"},(0,o.kt)("inlineCode",{parentName:"a"},"eventmesh-examples")),"."),(0,o.kt)("p",null,"Hope you enjoy and explore more on EventMesh!"))}d.isMDXComponent=!0}}]);
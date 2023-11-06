"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5329],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=s(n),h=a,g=u["".concat(p,".").concat(h)]||u[h]||c[h]||l;return n?i.createElement(g,r(r({ref:t},d),{},{components:n})):i.createElement(g,r({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=h;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:a,r[1]=o;for(var s=2;s<l;s++)r[s]=n[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},809:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var i=n(7462),a=(n(7294),n(3905));const l={title:"Tilt Input",pagination_next:null,pagination_prev:null},r="Tilt Input",o={unversionedId:"add-ons/tilt-input",id:"add-ons/tilt-input",title:"Tilt Input",description:"Purpose: The Tilt Input add-on allows users to send analog inputs from the Left and Right analog sticks that are some percent of the maximum directional input (e.g. send 65% of a Down-Right input on the Right analog stick).",source:"@site/docs/add-ons/tilt-input.mdx",sourceDirName:"add-ons",slug:"/add-ons/tilt-input",permalink:"/add-ons/tilt-input",draft:!1,tags:[],version:"current",frontMatter:{title:"Tilt Input",pagination_next:null,pagination_prev:null},sidebar:"webConfigSidebar"},p={},s=[{value:"Hardware Requirements:",id:"hardware-requirements",level:2},{value:"Notes",id:"notes",level:2}],d={toc:s},u="wrapper";function c(e){let{components:t,...l}=e;return(0,a.kt)(u,(0,i.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tilt-input"},"Tilt Input"),(0,a.kt)("p",null,"Purpose: The Tilt Input add-on allows users to send analog inputs from the Left and Right analog sticks that are some percent of the maximum directional input (e.g. send 65% of a Down-Right input on the Right analog stick)."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"GP2040-CE Configuration - Add-Ons Tilt Input",src:n(6349).Z,width:"1056",height:"780"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Tilt 1 Pin")," - The GPIO pin used for the Tilt 1 direction."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Tilt 1 Factor Left X")," - The percentage of the X-axis input for the Left analog stick sent when ",(0,a.kt)("inlineCode",{parentName:"li"},"Tilt 1 Pin")," is activated. (Min. 0, Max 100)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Tilt 1 Factor Left Y")," - The percentage of the Y-axis input for the Left analog stick sent when ",(0,a.kt)("inlineCode",{parentName:"li"},"Tilt 1 Pin")," is activated. (Min. 0, Max 100)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Tilt 1 Factor Left X")," - The percentage of the X-axis input for the Right analog stick sent when ",(0,a.kt)("inlineCode",{parentName:"li"},"Tilt 1 Pin")," is activated. (Min. 0, Max 100)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Tilt 1 Factor Left Y")," - The percentage of the Y-axis input for the Right analog stick sent when ",(0,a.kt)("inlineCode",{parentName:"li"},"Tilt 1 Pin")," is activated. (Min. 0, Max 100)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Tilt 2 Pin")," - The GPIO pin used for the Tilt 2 direction."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Tilt 2 Factor Left X")," - The percentage of the X-axis input for the Left analog stick sent when ",(0,a.kt)("inlineCode",{parentName:"li"},"Tilt 2 Pin")," is activated. (Min. 0, Max 100)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Tilt 2 Factor Left Y")," - The percentage of the Y-axis input for the Left analog stick sent when ",(0,a.kt)("inlineCode",{parentName:"li"},"Tilt 2 Pin")," is activated. (Min. 0, Max 100)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Tilt 2 Factor Left X")," - The percentage of the X-axis input for the Right analog stick sent when ",(0,a.kt)("inlineCode",{parentName:"li"},"Tilt 2 Pin")," is activated. (Min. 0, Max 100)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Tilt 2 Factor Left Y")," - The percentage of the Y-axis input for the Right analog stick sent when ",(0,a.kt)("inlineCode",{parentName:"li"},"Tilt 2 Pin")," is activated. (Min. 0, Max 100)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Tilt Left Analog Up Pin")," - The GPIO pin used for the Up direction on the Left analog stick."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Tilt Left Analog Down Pin")," - The GPIO pin used for the Down direction on the Left analog stick."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Tilt Left Analog Left Pin")," - The GPIO pin used for the Left direction on the Left analog stick."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Tilt Left Analog Right Pin")," - The GPIO pin used for the Right direction on the Left analog stick."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Tilt Right Analog Up Pin")," - The GPIO pin used for the Up direction on the Right analog stick."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Tilt Right Analog Down Pin")," - The GPIO pin used for the Down direction on the Right analog stick."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Tilt Right Analog Left Pin")," - The GPIO pin used for the Left direction on the Right analog stick."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Tilt Right Analog Right Pin")," - The GPIO pin used for the Right direction on the Right analog stick."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Tilt SOCD Mode")," - Choose the default SOCD Cleaning Mode (Neutral, Last Win, First Win). ")),(0,a.kt)("h2",{id:"hardware-requirements"},"Hardware Requirements:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Additional buttons, switches, or joysticks, are recommended for this add-on as this add-on entirely prevents the primary Dpad from being set as the Left analog or Right analog stick. ")),(0,a.kt)("h2",{id:"notes"},"Notes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Because this add-on disables the Dpad from being set as Left analog and Right analog, using the hotkeys ",(0,a.kt)("inlineCode",{parentName:"li"},"Dpad Left Analog")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"Dpad Right Analog")," deactivates the Dpad and using the ",(0,a.kt)("inlineCode",{parentName:"li"},"Dpad Digital")," will reactivate the Dpad once more."),(0,a.kt)("li",{parentName:"ul"},"Not all Tilt analog pins are required to be set, but not setting the pins will prevent you from using that input without using the Web Configurator to remap the inputs."),(0,a.kt)("li",{parentName:"ul"},"Additionally, pressing Tilt 1 and Tilt 2 simultaneously while inputting Right analog stick directions allows the Right analog stick to function as the D-Pad directions."),(0,a.kt)("li",{parentName:"ul"},"Pressing Tilt 1 and Tilt 2 simultaneously while inputting Left analog stick will prioritize Tilt 1 and ignore Tilt 2.")))}c.isMDXComponent=!0},6349:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/gpc-add-ons-tilt-bc728e2c2261d5a51002cc80b5bb92de.png"}}]);
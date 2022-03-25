"use strict";(self.webpackChunkaurora_docs=self.webpackChunkaurora_docs||[]).push([[602],{9613:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var o=r(9496);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),d=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),c=d(r),m=n,f=c["".concat(l,".").concat(m)]||c[m]||p[m]||a;return r?o.createElement(f,i(i({ref:t},s),{},{components:r})):o.createElement(f,i({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=c;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:n,i[1]=u;for(var d=2;d<a;d++)i[d]=r[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}c.displayName="MDXCreateElement"},5115:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return s},default:function(){return c}});var o=r(9624),n=r(42),a=(r(9496),r(9613)),i=["components"],u={title:"Add token to Aurora token list"},l=void 0,d={unversionedId:"bridge/add-token-to-aurora-token-list",id:"bridge/add-token-to-aurora-token-list",title:"Add token to Aurora token list",description:"For your token to be traded on three networks (Ethereum, NEAR, Aurora) the token should originate on Ethereum (it is not possible to mint a token on Aurora and move it to Ethereum).",source:"@site/docs/bridge/add-token-to-aurora-token-list.md",sourceDirName:"bridge",slug:"/bridge/add-token-to-aurora-token-list",permalink:"/bridge/add-token-to-aurora-token-list",editUrl:"https://github.com/aurora-is-near/doc.aurora.dev/edit/master/docs/bridge/add-token-to-aurora-token-list.md",tags:[],version:"current",frontMatter:{title:"Add token to Aurora token list"},sidebar:"tutorialSidebar",previous:{title:"Rainbow Bridge",permalink:"/bridge/rainbow-bridge"},next:{title:"Add a token to Rainbow Bridge",permalink:"/bridge/add-token-to-rainbow-bridge"}},s=[],p={toc:s};function c(e){var t=e.components,r=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"For your token to be traded on three networks (Ethereum, NEAR, Aurora) the token should originate on Ethereum (it is not possible to mint a token on Aurora and move it to Ethereum)."),(0,a.kt)("p",null,"If your token was originated on Ethereum, follow the procedure:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://rainbowbridge.app/deploy"},"Deploy")," the token to Rainbow Bridge.  The UI of the deployment feature will walk you through the deployment steps."),(0,a.kt)("li",{parentName:"ol"},"Once deployed, raise a pull request ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/aurora-is-near/bridge-assets"},"on this repository")," to have the Aurora team add your metadata."),(0,a.kt)("li",{parentName:"ol"},"Once the Aurora team process and approve your PR,\nyour token will be searchable by symbol on the bridge transfer form and other dApps will be able to display balances correctly. Besides, your token will appear in the ",(0,a.kt)("a",{parentName:"li",href:"https://aurora.dev/tokens"},"Aurora Token List"),".")),(0,a.kt)("p",null,"Aurora team would strongly recommend having the token on Ethereum too.\nIf your token was not originated on Ethereum and you still want to add your token to\nAurora token list (",(0,a.kt)("a",{parentName:"p",href:"https://aurora.dev/tokens"},"aurora.dev/tokens"),"),\nplease raise a pull request ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/aurora-is-near/bridge-assets"},"on this repository"),"\nto have the Aurora team add your metadata."))}c.isMDXComponent=!0}}]);
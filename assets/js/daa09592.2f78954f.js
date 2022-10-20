"use strict";(self.webpackChunksuberra_docs=self.webpackChunksuberra_docs||[]).push([[349],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||l;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9783:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const l=r.p+"assets/images/suberra_checkout_flow-3b2478e9afb51e64499e5316df9f9722.png",o={title:"Overview",description:"Overview"},i=void 0,s={unversionedId:"payments/overview",id:"payments/overview",title:"Overview",description:"Overview",source:"@site/docs/1_payments/overview.mdx",sourceDirName:"1_payments",slug:"/payments/overview",permalink:"/docs/payments/overview",draft:!1,editUrl:"https://github.com/suberra/suberra-docs/docs/1_payments/overview.mdx",tags:[],version:"current",frontMatter:{title:"Overview",description:"Overview"},sidebar:"docs",previous:{title:"Suberra Features",permalink:"/docs/overview/features"},next:{title:"Payment Link",permalink:"/docs/payments/payment_link"}},c={},p=[],u={toc:p};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Suberra can integrate alongside existing webapps and allow businesses to collect crypto in addition to credit cards."),(0,a.kt)("div",{style:{flexBasis:"300px",flexGrow:"1",textAlign:"center"}},(0,a.kt)("img",{src:l,style:{alignSelf:"center",maxWidth:"100%"}})),(0,a.kt)("p",null,"Here's a brief explanation of what's happening at each step:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},'The user can click "Crypto", and the webpage will route the user to the payments collection page. Suberra provides a hosted checkout page, so merchants can simply redirect users to that checkout page.'),(0,a.kt)("li",{parentName:"ol"},"The user will sign two transactions. The first one permits our contract to spend the USDC in their wallet, and the second transaction authorises Suberra to deduct up to a set amount from their wallet."),(0,a.kt)("li",{parentName:"ol"},"Once successful, Suberra can trigger success calls. For example, if the user is subscribing to a product and paying monthly, a Subscription NFT can be minted, and a receipt can be sent.")),(0,a.kt)("p",null,"We support the following payment methods:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null},"Payment Link"),(0,a.kt)("th",{parentName:"tr",align:null},"Checkout"),(0,a.kt)("th",{parentName:"tr",align:null},"Subscription"),(0,a.kt)("th",{parentName:"tr",align:null},"Custom"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Type"),(0,a.kt)("td",{parentName:"tr",align:null},"One-time"),(0,a.kt)("td",{parentName:"tr",align:null},"One-time"),(0,a.kt)("td",{parentName:"tr",align:null},"Recurring"),(0,a.kt)("td",{parentName:"tr",align:null},"One-time or Recurring")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Integration effort"),(0,a.kt)("td",{parentName:"tr",align:null},"No Code"),(0,a.kt)("td",{parentName:"tr",align:null},"Minimal"),(0,a.kt)("td",{parentName:"tr",align:null},"Minimal to No-code (depends on integration)"),(0,a.kt)("td",{parentName:"tr",align:null},"Most coding")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Use-cases"),(0,a.kt)("td",{parentName:"tr",align:null},"Commerce, Tickets"),(0,a.kt)("td",{parentName:"tr",align:null},"Commerce, Platforms, Game Marketplaces"),(0,a.kt)("td",{parentName:"tr",align:null},"SaaS, cloud infrastructure, in-game access passes"),(0,a.kt)("td",{parentName:"tr",align:null},"Platforms or Games")))))}m.isMDXComponent=!0}}]);
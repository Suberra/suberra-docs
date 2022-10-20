"use strict";(self.webpackChunksuberra_docs=self.webpackChunksuberra_docs||[]).push([[279],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=l(r),y=n,f=m["".concat(c,".").concat(y)]||m[y]||p[y]||o;return r?a.createElement(f,s(s({ref:t},u),{},{components:r})):a.createElement(f,s({ref:t},u))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2877:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>c,metadata:()=>u,toc:()=>y});var a=r(7462),n=r(7294),o=r(3905),s=r(9960);const i=function(e){const t=e.cards;return n.createElement("div",{className:"container",style:{padding:5}},n.createElement("div",{className:"row is-multiline"},t.map(((e,t)=>n.createElement("div",{className:"col col--6",key:t,style:{padding:5}},n.createElement(s.Z,{className:"card",to:e.route,style:{height:"100%",textAlign:"center"}},n.createElement("div",{className:"card__body"},n.createElement("h4",null,e.title),n.createElement("p",null,e.description))))))))},c={title:"Suberra for Merchants",description:"What is Suberra",slug:"/overview/what_is_suberra"},l=void 0,u={unversionedId:"overview/suberra_for_merchants",id:"overview/suberra_for_merchants",title:"Suberra for Merchants",description:"What is Suberra",source:"@site/docs/0_overview/suberra_for_merchants.mdx",sourceDirName:"0_overview",slug:"/overview/what_is_suberra",permalink:"/docs/overview/what_is_suberra",draft:!1,editUrl:"https://github.com/suberra/suberra-docs/docs/0_overview/suberra_for_merchants.mdx",tags:[],version:"current",frontMatter:{title:"Suberra for Merchants",description:"What is Suberra",slug:"/overview/what_is_suberra"},sidebar:"docs",previous:{title:"What is Suberra",permalink:"/docs/overview/introduction"},next:{title:"How Suberra Works",permalink:"/docs/overview/periodic-allowances"}},p={},m=[{title:"Gasless Transactions",description:"Suberra allows you to pay gas on behalf of your users",route:"features#gasless-transactions"},{title:"Subscriptions",description:"Suberra allows you to accept recurring subscriptions on a weekly, monthly or yearly basis. We automate the charges so you don't have to.",route:"/docs/subscriptions/subscriptions"}],y=[{value:"Features at a glance",id:"features-at-a-glance",level:2},{value:"Accept crypto payments from any user",id:"accept-crypto-payments-from-any-user",level:2},{value:"Accept crypto payments for anything",id:"accept-crypto-payments-for-anything",level:2},{value:"Problem with Crypto Commerce",id:"problem-with-crypto-commerce",level:2}],f={toc:y};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Suberra is a full-stack payments gateway that allows businesses to accept payments from anywhere for anything."),(0,o.kt)("h2",{id:"features-at-a-glance"},"Features at a glance"),(0,o.kt)(i,{cards:m,mdxType:"Cards"}),(0,o.kt)("h2",{id:"accept-crypto-payments-from-any-user"},"Accept crypto payments from any user"),(0,o.kt)("p",null,"By integrating with Suberra once, you can accept payments from most popular wallets on any network. You can also integrate with centralised exchanges such as Binance Pay and FTX and allow users to pay you crypto payments directly from those platforms."),(0,o.kt)("h2",{id:"accept-crypto-payments-for-anything"},"Accept crypto payments for anything"),(0,o.kt)("p",null,"You can use Suberra to accept payments for anything. Some examples are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Tickets and merchandise: Accept crypto payments for your conference tickets"),(0,o.kt)("li",{parentName:"ul"},"SaaS-based subscription: Collecting a fixed monthly fee for access to your platform."),(0,o.kt)("li",{parentName:"ul"},"Pay-as-you-go Subscription: Ideal for services that have a usage based pricing.")),(0,o.kt)("h2",{id:"problem-with-crypto-commerce"},"Problem with Crypto Commerce"),(0,o.kt)("p",null,"It is difficult for merchants to accept crypto payments. Here are some reasons why:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Bad user experience for customers: Customers require gas tokens such as ETH to pay transaction fees. They may get deterred away during periods of peak activity."),(0,o.kt)("li",{parentName:"ul"},"Not composable with current payment systems: Difficult to integrate with existing systems as blockchain payments have a different payments flow than credit cards."),(0,o.kt)("li",{parentName:"ul"},"Too many networks and wallets: There are more than 100 wallets and centralised exchanges that the users can pay from. It is also difficult to collect payments from different networks such as Avalanche, Polygon, Ethereum and Ethereum L2."),(0,o.kt)("li",{parentName:"ul"},"Limited payment logic: Unlike the established payment logic that is created by Stripe, there's no easy way to replicate these. For example, if you would want to send a payment receipt upon receiving funds on the Avalanche network, merchants have to DIY the service."),(0,o.kt)("li",{parentName:"ul"},"Difficult to reconcile payments: After receiving the payments, it is hard to tell which payment is for what purpose and tag it for easy revenue recognition."),(0,o.kt)("li",{parentName:"ul"},"Lack of essential merchant features: Features like discount code, trial period implementations and invoice generation capabilities are essential for merchants to grow their business.")),(0,o.kt)("p",null,"These reasons make it difficult for Web 3.0 users to accomplish simple functions which are taken for granted in the Web 2.0 world - such as subscriptions (Shopify/Netflix/Patreon), disbursement of salary and automated dollar cost averaging strategies among many others.\nSuberra is a one-stop shop for Merchants seeking to adopt Web 3.0 payments without concerning themselves of the many difficulties laid out above."))}d.isMDXComponent=!0}}]);
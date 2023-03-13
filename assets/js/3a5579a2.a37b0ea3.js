"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[4552],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var r=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},d=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(a),m=i,p=u["".concat(s,".").concat(m)]||u[m]||h[m]||o;return a?r.createElement(p,n(n({ref:t},d),{},{components:a})):r.createElement(p,n({ref:t},d))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,n=new Array(o);n[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,n[1]=c;for(var l=2;l<o;l++)n[l]=a[l];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},30430:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=a(83117),i=(a(67294),a(3905));const o={title:"Overview",sidebar_label:"Overview",slug:"/architecture/architecture",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/architecture/architecture.md"},n="DataHub Architecture Overview",c={unversionedId:"docs/architecture/architecture",id:"docs/architecture/architecture",title:"Overview",description:"DataHub is a 3rd generation Metadata Platform that enables Data Discovery, Collaboration, Governance, and end-to-end Observability",source:"@site/genDocs/docs/architecture/architecture.md",sourceDirName:"docs/architecture",slug:"/architecture/architecture",permalink:"/docs/architecture/architecture",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/architecture/architecture.md",tags:[],version:"current",frontMatter:{title:"Overview",sidebar_label:"Overview",slug:"/architecture/architecture",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/architecture/architecture.md"},sidebar:"overviewSidebar",previous:{title:"Features",permalink:"/docs/features"},next:{title:"Components",permalink:"/docs/components"}},s={},l=[{value:"Architecture Highlights",id:"architecture-highlights",level:2},{value:"Schema-first approach to Metadata Modeling",id:"schema-first-approach-to-metadata-modeling",level:3},{value:"Stream-based Real-time Metadata Platform",id:"stream-based-real-time-metadata-platform",level:3},{value:"Federated Metadata Serving",id:"federated-metadata-serving",level:3}],d={toc:l};function h(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"datahub-architecture-overview"},"DataHub Architecture Overview"),(0,i.kt)("p",null,"DataHub is a ",(0,i.kt)("a",{parentName:"p",href:"https://engineering.linkedin.com/blog/2020/datahub-popular-metadata-architectures-explained"},"3rd generation")," Metadata Platform that enables Data Discovery, Collaboration, Governance, and end-to-end Observability\nthat is built for the Modern Data Stack. DataHub employs a model-first philosophy, with a focus on unlocking interoperability between\ndisparate tools & systems."),(0,i.kt)("p",null,"The figures below describe the high-level architecture of DataHub."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"datahub-architecture",src:a(78382).Z,width:"1320",height:"737"}),"\n",(0,i.kt)("img",{alt:"Acryl DataHub System Architecture ",src:a(40645).Z,width:"1106",height:"1361"})),(0,i.kt)("p",null,"For a more detailed look at the components that make up the Architecture, check out ",(0,i.kt)("a",{parentName:"p",href:"/docs/components"},"Components"),"."),(0,i.kt)("h2",{id:"architecture-highlights"},"Architecture Highlights"),(0,i.kt)("p",null,"There are three main highlights of DataHub's architecture."),(0,i.kt)("h3",{id:"schema-first-approach-to-metadata-modeling"},"Schema-first approach to Metadata Modeling"),(0,i.kt)("p",null,"DataHub's metadata model is described using a ",(0,i.kt)("a",{parentName:"p",href:"https://linkedin.github.io/rest.li/pdl_schema"},"serialization agnostic language"),". Both ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-service"},"REST")," as well as ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/datahub-web-react/src/graphql"},"GraphQL API-s")," are supported. In addition, DataHub supports an ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-events"},"AVRO-based API")," over Kafka to communicate metadata changes and subscribe to them. Our ",(0,i.kt)("a",{parentName:"p",href:"/docs/roadmap"},"roadmap")," includes a milestone to support no-code metadata model edits very soon, which will allow for even more ease of use, while retaining all the benefits of a typed API. Read about metadata modeling at ",(0,i.kt)("a",{parentName:"p",href:"/docs/metadata-modeling/metadata-model"},"metadata modeling"),"."),(0,i.kt)("h3",{id:"stream-based-real-time-metadata-platform"},"Stream-based Real-time Metadata Platform"),(0,i.kt)("p",null,"DataHub's metadata infrastructure is stream-oriented, which allows for changes in metadata to be communicated and reflected within the platform within seconds. You can also subscribe to changes happening in DataHub's metadata, allowing you to build real-time metadata-driven systems. For example, you can build an access-control system that can observe a previously world-readable dataset adding a new schema field which contains PII, and locks down that dataset for access control reviews."),(0,i.kt)("h3",{id:"federated-metadata-serving"},"Federated Metadata Serving"),(0,i.kt)("p",null,"DataHub comes with a single ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-service"},"metadata service (gms)")," as part of the open source repository. However, it also supports federated metadata services which can be owned and operated by different teams \u2013\u2013 in fact, that is how LinkedIn runs DataHub internally. The federated services communicate with the central search index and graph using Kafka, to support global search and discovery while still enabling decoupled ownership of metadata. This kind of architecture is very amenable for companies who are implementing ",(0,i.kt)("a",{parentName:"p",href:"https://martinfowler.com/articles/data-monolith-to-mesh.html"},"data mesh"),"."))}h.isMDXComponent=!0},78382:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/datahub-architecture-30b34a888241e0780c72b7f618137fe4.png"},40645:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/DataHub-Architecture-f796948aaea12bf1da0b81104b305160.png"}}]);
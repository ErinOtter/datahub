(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[6460],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),c=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(d.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,h=p["".concat(d,".").concat(m)]||p[m]||l[m]||r;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=p;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3447:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var a=n(2122),i=n(9756),r=(n(7294),n(3905)),o={title:"Adding a Metadata Ingestion Source",sidebar_label:"Adding a Metadata Ingestion Source",slug:"/metadata-ingestion/adding-source",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/adding-source.md"},s={unversionedId:"metadata-ingestion/adding-source",id:"metadata-ingestion/adding-source",isDocsHomePage:!1,title:"Adding a Metadata Ingestion Source",description:"This guide assumes that you've already followed the metadata ingestion developing guide to set up your local environment.",source:"@site/genDocs/metadata-ingestion/adding-source.md",sourceDirName:"metadata-ingestion",slug:"/metadata-ingestion/adding-source",permalink:"/docs/metadata-ingestion/adding-source",editUrl:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/adding-source.md",version:"current",sidebar_label:"Adding a Metadata Ingestion Source",frontMatter:{title:"Adding a Metadata Ingestion Source",sidebar_label:"Adding a Metadata Ingestion Source",slug:"/metadata-ingestion/adding-source",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/adding-source.md"},sidebar:"overviewSidebar",previous:{title:"Using Docker Images During Development",permalink:"/docs/docker/development"},next:{title:"DataHub React App",permalink:"/docs/datahub-web-react"}},d=[{value:"1. Set up the configuration model",id:"1-set-up-the-configuration-model",children:[]},{value:"2. Set up the reporter",id:"2-set-up-the-reporter",children:[]},{value:"3. Implement the source itself",id:"3-implement-the-source-itself",children:[]},{value:"4. Set up the dependencies",id:"4-set-up-the-dependencies",children:[]},{value:"5. Enable discoverability",id:"5-enable-discoverability",children:[]},{value:"6. Write tests",id:"6-write-tests",children:[]},{value:"7. Write docs",id:"7-write-docs",children:[]}],c={toc:d};function u(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This guide assumes that you've already followed the metadata ingestion ",(0,r.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion/developing"},"developing guide")," to set up your local environment."))),(0,r.kt)("h3",{id:"1-set-up-the-configuration-model"},"1. Set up the configuration model"),(0,r.kt)("p",null,"We use ",(0,r.kt)("a",{parentName:"p",href:"https://pydantic-docs.helpmanual.io/"},"pydantic")," for configuration, and all models must inherit from ",(0,r.kt)("inlineCode",{parentName:"p"},"ConfigModel"),". The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/source/mce_file.py"},"file source")," is a good example."),(0,r.kt)("h3",{id:"2-set-up-the-reporter"},"2. Set up the reporter"),(0,r.kt)("p",null,"The reporter interface enables the source to report statistics, warnings, failures, and other information about the run. Some sources use the default ",(0,r.kt)("inlineCode",{parentName:"p"},"SourceReport")," class, but others inherit and extend that class."),(0,r.kt)("h3",{id:"3-implement-the-source-itself"},"3. Implement the source itself"),(0,r.kt)("p",null,"The core for the source is the ",(0,r.kt)("inlineCode",{parentName:"p"},"get_workunits")," method, which produces a stream of MCE objects. The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/source/mce_file.py"},"file source")," is a good and simple example."),(0,r.kt)("p",null,"The MetadataChangeEventClass is defined in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/src/datahub/metadata/schema_classes.py"},"metadata models"),". There are also some ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/src/datahub/emitter/mce_builder.py"},"convenience methods")," for commonly used operations."),(0,r.kt)("h3",{id:"4-set-up-the-dependencies"},"4. Set up the dependencies"),(0,r.kt)("p",null,"Declare the source's pip dependencies in the ",(0,r.kt)("inlineCode",{parentName:"p"},"plugins")," variable of the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/setup.py"},"setup script"),"."),(0,r.kt)("h3",{id:"5-enable-discoverability"},"5. Enable discoverability"),(0,r.kt)("p",null,"Declare the source under the ",(0,r.kt)("inlineCode",{parentName:"p"},"entry_points")," variable of the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/setup.py"},"setup script"),". This enables the source to be listed when running ",(0,r.kt)("inlineCode",{parentName:"p"},"datahub check plugins"),", and sets up the source's shortened alias for use in recipes."),(0,r.kt)("h3",{id:"6-write-tests"},"6. Write tests"),(0,r.kt)("p",null,"Tests go in the ",(0,r.kt)("inlineCode",{parentName:"p"},"tests")," directory. We use the ",(0,r.kt)("a",{parentName:"p",href:"https://pytest.org/"},"pytest framework"),"."),(0,r.kt)("h3",{id:"7-write-docs"},"7. Write docs"),(0,r.kt)("p",null,"Add the plugin to the table at the top of the README file, and add the source's documentation underneath the sources header."))}u.isMDXComponent=!0}}]);
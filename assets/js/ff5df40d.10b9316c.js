(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[6323],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),h=i,m=u["".concat(p,".").concat(h)]||u[h]||c[h]||r;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6206:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var a=n(2122),i=n(9756),r=(n(7294),n(3905)),o={title:"DataHub React App",sidebar_label:"React App",slug:"/datahub-web-react",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/datahub-web-react/README.md"},l={unversionedId:"datahub-web-react/README",id:"datahub-web-react/README",isDocsHomePage:!1,title:"DataHub React App",description:"About",source:"@site/genDocs/datahub-web-react/README.md",sourceDirName:"datahub-web-react",slug:"/datahub-web-react",permalink:"/docs/datahub-web-react",editUrl:"https://github.com/linkedin/datahub/blob/master/datahub-web-react/README.md",version:"current",sidebar_label:"React App",frontMatter:{title:"DataHub React App",sidebar_label:"React App",slug:"/datahub-web-react",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/datahub-web-react/README.md"},sidebar:"overviewSidebar",previous:{title:"DataHub Serving Architecture",permalink:"/docs/architecture/metadata-serving"},next:{title:"How does DataHub model metadata?",permalink:"/docs/metadata-modeling/metadata-model"}},p=[{value:"About",id:"about",children:[]},{value:"Functional Goals",id:"functional-goals",children:[]},{value:"Design Goals",id:"design-goals",children:[]},{value:"Starting the Application",id:"starting-the-application",children:[{value:"Quick Start",id:"quick-start",children:[]},{value:"Theming",id:"theming",children:[]}]},{value:"Design Details",id:"design-details",children:[{value:"Package Organization",id:"package-organization",children:[]}]},{value:"Adding an Entity",id:"adding-an-entity",children:[]}],s={toc:p};function d(e){var t=e.components,o=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"about"},"About"),(0,r.kt)("p",null,"This module contains a React version of the DataHub UI. This is now the production version of the DataHub client experience.\nNotice that this is a completely separate frontend experience from the legacy Ember app and will remain so as it evolves. "),(0,r.kt)("p",null,"Feel free to take a look around, deploy, and contribute. "),(0,r.kt)("p",null,"For details about the motivation please see ",(0,r.kt)("a",{parentName:"p",href:"/docs/rfc/active/2055-react-app"},"this RFC"),". "),(0,r.kt)("h2",{id:"functional-goals"},"Functional Goals"),(0,r.kt)("p",null,"The initial milestone for the app was to achieve functional parity with the existing Ember app. This meant supporting"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Dataset Profiles, Search, Browse Experience"),(0,r.kt)("li",{parentName:"ul"},"User Profiles, Search"),(0,r.kt)("li",{parentName:"ul"},"LDAP Authentication Flow")),(0,r.kt)("p",null,"This has since been achieved. The new set of functional goals are reflected in the latest version of the ",(0,r.kt)("a",{parentName:"p",href:"/docs/roadmap"},"DataHub Roadmap"),". "),(0,r.kt)("h2",{id:"design-goals"},"Design Goals"),(0,r.kt)("p",null,"In building out the client experience, we intend to leverage learnings from the Ember app and incorporate feedback gathered\nfrom organizations operating DataHub. Two themes have emerged to serve as guideposts: "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Configurability"),": The client experience should be configurable, such that deploying organizations can tailor certain\naspects to their needs. This includes theme / styling configurability, showing and hiding specific functionality,\ncustomizing copy & logos, etc. "),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Extensibility"),": Extending the ",(0,r.kt)("em",{parentName:"li"},"functionality")," of DataHub should be as simple as possible. Making changes like\nextending an existing entity & adding a new entity should require minimal effort and should be well covered in detailed\ndocumentation. ")),(0,r.kt)("h2",{id:"starting-the-application"},"Starting the Application"),(0,r.kt)("h3",{id:"quick-start"},"Quick Start"),(0,r.kt)("p",null,"Navigate to the ",(0,r.kt)("inlineCode",{parentName:"p"},"docker")," directory and run the following to spin up the react app:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"./quickstart.sh\n")),(0,r.kt)("p",null,"at ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:9002"),"."),(0,r.kt)("p",null,"If you want to make changes to the UI see them live without having to rebuild the ",(0,r.kt)("inlineCode",{parentName:"p"},"datahub-frontend-react")," docker image, you\ncan run the following in this directory:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"yarn install && yarn run start")),(0,r.kt)("p",null,"which will start a forwarding server at ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost:3000"),". Note that to fetch real data, ",(0,r.kt)("inlineCode",{parentName:"p"},"datahub-frontend")," server will also\nneed to be deployed, still at ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:9002"),", to service GraphQL API requests."),(0,r.kt)("h3",{id:"theming"},"Theming"),(0,r.kt)("h4",{id:"selecting-a-theme"},"Selecting a theme"),(0,r.kt)("p",null,"Theme configurations are stored in ",(0,r.kt)("inlineCode",{parentName:"p"},"./src/conf/theme"),". To select a theme, choose one and update the ",(0,r.kt)("inlineCode",{parentName:"p"},"REACT_APP_THEME_CONFIG")," env variable stored in ",(0,r.kt)("inlineCode",{parentName:"p"},".env"),".\nTo change the selected theme, update the ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file and re-run ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn start")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"datahub/datahub-web-react"),"."),(0,r.kt)("h4",{id:"editing-a-theme"},"Editing a theme"),(0,r.kt)("p",null,"To edit an existing theme, the recommendation is to clone one of the existing themes into a new file with the name ",(0,r.kt)("inlineCode",{parentName:"p"},"<your_themes_name>.config.json"),",\nand then update the env variable as descibed above. The theme files have three sections, ",(0,r.kt)("inlineCode",{parentName:"p"},"styles"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"assets")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"content"),". The type of the theme configs is specified\nin ",(0,r.kt)("inlineCode",{parentName:"p"},"./src/conf/theme/types.ts"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"styles")," configure overrides for the apps theming variables."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"assets")," configures the logo url."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"content")," specifies customizable text fields."),(0,r.kt)("p",null,"While developing on your theme, all changes to assets and content are seen immediately in your local app. However, changes to styles require\nyou to terminate and re-run ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn start")," to see updated styles."),(0,r.kt)("h2",{id:"design-details"},"Design Details"),(0,r.kt)("h3",{id:"package-organization"},"Package Organization"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"src")," dir of the app is broken down into the following modules"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"conf")," - Stores global configuration flags that can be referenced across the app. For example, the number of\nsearch results shown per page, or the placeholder text in the search bar box. It serves as a location where levels\nfor functional configurability should reside. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"app")," - Contains all important components of the app. It has a few sub-modules:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"auth"),": Components used to render the user authentication experience. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"browse"),": Shared components used to render the 'browse-by-path' experience. The experience is akin to navigating a filesystem hierarchy.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"preview"),": Shared components used to render Entity 'preview' views. These can appear in search results, browse results,\nand within entity profile pages. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"search"),": Shared components used to render the full-text search experience. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"shared"),": Misc. shared components")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"entity"),": Contains Entity definitions, where entity-specific functionality resides.\nConfiguration is provided by implementing the 'Entity' interface. (See DatasetEntity.tsx for example)\nThere are 2 visual components each entity should supply:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"profiles"),": display relevant details about an individual entity. This serves as the entity's 'profile'.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"previews"),": provide a 'preview', or a smaller details card, containing the most important information about an entity instance."),(0,r.kt)("p",{parentName:"li"},"  When rendering a preview, the entity's data and the type of preview (SEARCH, BROWSE, PREVIEW) are provided. This\nallows you to optionally customize the way an entities preview is rendered in different views.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"entity registry"),": There's another very important piece of code living within this module: the ",(0,r.kt)("strong",{parentName:"p"},"EntityRegistry"),". This is a layer\nof abstraction over the intimate details of rendering a particular entity. It is used\nto render a view associated with a particular entity type (user, dataset, etc.)."))))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"entity-registry",src:n(7132).Z})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"graphql")," - The React App talks to the ",(0,r.kt)("inlineCode",{parentName:"p"},"dathub-frontend")," server using GraphQL. This module is where the ",(0,r.kt)("em",{parentName:"p"},"queries")," issued\nagainst the server are defined. Once defined, running ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn run generate")," will code-gen TypeScript objects to make invoking\nthese queries extremely easy. An example can be found at the top of ",(0,r.kt)("inlineCode",{parentName:"p"},"SearchPage.tsx.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"images")," - Images to be displayed within the app. This is where one would place a custom logo image. "),(0,r.kt)("h2",{id:"adding-an-entity"},"Adding an Entity"),(0,r.kt)("p",null,"The following outlines a series of steps required to introduce a new entity into the React app:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Declare the GraphQL Queries required to display the new entity ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'If search functionality should be supported, extend the "search" query within ',(0,r.kt)("inlineCode",{parentName:"li"},"search.graphql")," to fetch the new\nentity data."),(0,r.kt)("li",{parentName:"ul"},'If browse functionality should be supported, extend the "browse" query within ',(0,r.kt)("inlineCode",{parentName:"li"},"browse.graphql")," to fetch the new\nentity data. "),(0,r.kt)("li",{parentName:"ul"},"If display a 'profile' should be supported (most often), introduce a new ",(0,r.kt)("inlineCode",{parentName:"li"},"<entity-name>.graphql")," file that contains a\n",(0,r.kt)("inlineCode",{parentName:"li"},"get")," query to fetch the entity by primary key (urn). ","Note that your new entity ",(0,r.kt)("em",{parentName:"li"},"must")," implement the ",(0,r.kt)("inlineCode",{parentName:"li"},"Entity")," GraphQL type interface, and thus must have a corresponding\n",(0,r.kt)("inlineCode",{parentName:"li"},"EntityType"),".")))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Implement the ",(0,r.kt)("inlineCode",{parentName:"li"},"Entity")," interface ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Create a new folder under ",(0,r.kt)("inlineCode",{parentName:"li"},"src/components/entity")," corresponding to your entity"),(0,r.kt)("li",{parentName:"ul"},"Create a class that implements the ",(0,r.kt)("inlineCode",{parentName:"li"},"Entity")," interface (example: ",(0,r.kt)("inlineCode",{parentName:"li"},"DatasetEntity.tsx"),")"),(0,r.kt)("li",{parentName:"ul"},"Provide an implementation each method defined on the interface. ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This class specifies whether your new entity should be searchable & browsable, defines the names used to\nidentify your entity when instances are rendered in collection / when entity appears\nin the URL path, and provides the ability to render your entity given data returned by the GQL API. ")))))),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Register the new entity in the ",(0,r.kt)("inlineCode",{parentName:"li"},"EntityRegistry"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Update ",(0,r.kt)("inlineCode",{parentName:"li"},"App.tsx")," to register an instance of your new entity. Now your entity will be accessible via the registry\nand appear in the UI. To manually retrieve the info about your entity or others, simply use an instance\nof the ",(0,r.kt)("inlineCode",{parentName:"li"},"EntityRegistry"),", which is provided via ",(0,r.kt)("inlineCode",{parentName:"li"},"ReactContext")," to ",(0,r.kt)("em",{parentName:"li"},"all")," components in the hierarchy.\nFor example",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"entityRegistry.getCollectionName(EntityType.YOUR_NEW_ENTITY)\n")))))),(0,r.kt)("p",null,"That's it! For any questions, do not hesitate to reach out on the DataHub Slack community in #datahub-react."))}d.isMDXComponent=!0},7132:function(e,t,n){"use strict";t.Z=n.p+"assets/images/entity-registry-3e7b0f55701bd830ac184b8bcf9f6ce7.png"}}]);
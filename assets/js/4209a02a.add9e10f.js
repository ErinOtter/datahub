(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[6763],{3905:function(e,a,t){"use strict";t.d(a,{Zo:function(){return p},kt:function(){return m}});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),d=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):u(u({},a),e)),t},p=function(e){var a=d(e.components);return n.createElement(l.Provider,{value:a},e.children)},s={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=d(t),m=r,h=c["".concat(l,".").concat(m)]||c[m]||s[m]||o;return t?n.createElement(h,u(u({ref:a},p),{},{components:t})):n.createElement(h,u({ref:a},p))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,u=new Array(o);u[0]=c;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,u[1]=i;for(var d=2;d<o;d++)u[d]=t[d];return n.createElement.apply(null,u)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},8859:function(e,a,t){"use strict";t.r(a),t.d(a,{frontMatter:function(){return u},metadata:function(){return i},toc:function(){return l},default:function(){return p}});var n=t(2122),r=t(9756),o=(t(7294),t(3905)),u={title:"DataHub Upgrade Docker Image",sidebar_label:"Upgrade Docker Image",slug:"/docker/datahub-upgrade",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docker/datahub-upgrade/README.md"},i={unversionedId:"docker/datahub-upgrade/README",id:"docker/datahub-upgrade/README",isDocsHomePage:!1,title:"DataHub Upgrade Docker Image",description:"This container is used to automatically apply upgrades from one version of DataHub to another.",source:"@site/genDocs/docker/datahub-upgrade/README.md",sourceDirName:"docker/datahub-upgrade",slug:"/docker/datahub-upgrade",permalink:"/docs/docker/datahub-upgrade",editUrl:"https://github.com/linkedin/datahub/blob/master/docker/datahub-upgrade/README.md",version:"current",sidebar_label:"Upgrade Docker Image",frontMatter:{title:"DataHub Upgrade Docker Image",sidebar_label:"Upgrade Docker Image",slug:"/docker/datahub-upgrade",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docker/datahub-upgrade/README.md"},sidebar:"overviewSidebar",previous:{title:"Deploying Datahub with Kubernetes",permalink:"/docs/datahub-kubernetes"},next:{title:"AWS setup guide",permalink:"/docs/deploy/aws"}},l=[{value:"Supported Upgrades",id:"supported-upgrades",children:[]},{value:"Environment Variables",id:"environment-variables",children:[]},{value:"Arguments",id:"arguments",children:[]}],d={toc:l};function p(e){var a=e.components,t=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This container is used to automatically apply upgrades from one version of DataHub to another."),(0,o.kt)("h2",{id:"supported-upgrades"},"Supported Upgrades"),(0,o.kt)("p",null,"As of today, there are 2 supported upgrades:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"NoCodeDataMigration"),": Performs a series of pre-flight qualification checks and then migrates metadata_aspect table data\nto metadata_aspect_v2 table. Arguments:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"- *batchSize* (Optional): The number of rows to migrate at a time. Defaults to 1000.\n- *batchDelayMs* (Optional): The number of milliseconds of delay between migrated batches. Used for rate limiting. Defaults to 250. \n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"NoCodeDataMigrationCleanup"),": Cleanses graph index, search index, and key-value store of legacy DataHub data (metadata_aspect table) once\nthe No Code Data Migration has completed successfully. No arguments. ")),(0,o.kt)("h2",{id:"environment-variables"},"Environment Variables"),(0,o.kt)("p",null,"To run the ",(0,o.kt)("inlineCode",{parentName:"p"},"datahub-upgrade")," container, some environment variables must be provided in order to tell the upgrade CLI\nwhere the running DataHub containers reside. "),(0,o.kt)("p",null,"Below details the required configurations. By default, these configs are provided for local docker-compose deployments of\nDataHub within ",(0,o.kt)("inlineCode",{parentName:"p"},"docker/datahub-upgrade/env/docker.env"),". They assume that there is a Docker network called datahub_network\nwhere the DataHub containers can be found. "),(0,o.kt)("p",null,"These are also the variables used when the provided ",(0,o.kt)("inlineCode",{parentName:"p"},"datahub-upgrade.sh")," script is executed. To run the upgrade CLI for non-local deployments,\nfollow these steps: "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'Define new ".env" variable to hold your environment variables.')),(0,o.kt)("p",null,"The following variables may be provided: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-aidl"},"# Required Environment Variables\nEBEAN_DATASOURCE_USERNAME=datahub\nEBEAN_DATASOURCE_PASSWORD=datahub\nEBEAN_DATASOURCE_HOST=<your-ebean-host>:3306\nEBEAN_DATASOURCE_URL=jdbc:mysql://<your-ebean-host>:3306/datahub?verifyServerCertificate=false&useSSL=true&useUnicode=yes&characterEncoding=UTF-8\nEBEAN_DATASOURCE_DRIVER=com.mysql.jdbc.Driver\n\nKAFKA_BOOTSTRAP_SERVER=<your-kafka-host>:29092\nKAFKA_SCHEMAREGISTRY_URL=http://<your-kafka-host>:8081\n\nELASTICSEARCH_HOST=<your-elastic-host>\nELASTICSEARCH_PORT=9200\n\nNEO4J_HOST=http://<your-neo-host>:7474\nNEO4J_URI=bolt://<your-neo-host>\nNEO4J_USERNAME=neo4j\nNEO4J_PASSWORD=datahub\n\nDATAHUB_GMS_HOST=<your-gms-host>>\nDATAHUB_GMS_PORT=8080\n\nDATAHUB_MAE_CONSUMER_HOST=<your-mae-consumer-host>\nDATAHUB_MAE_CONSUMER_PORT=9091\n\n# Optional Arguments\n\n# Uncomment and set these to support SSL connection to Elasticsearch\n# ELASTICSEARCH_USE_SSL=\n# ELASTICSEARCH_SSL_PROTOCOL=\n# ELASTICSEARCH_SSL_SECURE_RANDOM_IMPL=\n# ELASTICSEARCH_SSL_TRUSTSTORE_FILE=\n# ELASTICSEARCH_SSL_TRUSTSTORE_TYPE=\n# ELASTICSEARCH_SSL_TRUSTSTORE_PASSWORD=\n# ELASTICSEARCH_SSL_KEYSTORE_FILE=\n# ELASTICSEARCH_SSL_KEYSTORE_TYPE=\n# ELASTICSEARCH_SSL_KEYSTORE_PASSWORD=\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Pull (or build) & execute the ",(0,o.kt)("inlineCode",{parentName:"li"},"datahub-upgrade")," container:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-aidl"},"docker pull acryldata/datahub-upgrade && docker run --env-file *path-to-custom-env-file.env* acryldata/datahub-upgrade:latest -u NoCodeDataMigration\n")),(0,o.kt)("h2",{id:"arguments"},"Arguments"),(0,o.kt)("p",null,"The primary argument required by the datahub-upgrade container is the name of the upgrade to perform. This argument\ncan be specified using the ",(0,o.kt)("inlineCode",{parentName:"p"},"-u")," flag when running the ",(0,o.kt)("inlineCode",{parentName:"p"},"datahub-upgrade")," container. "),(0,o.kt)("p",null,'For example, to run the migration named "NoCodeDataMigration", you would do execute the following:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-aidl"},"./datahub-upgrade.sh -u NoCodeDataMigration\n")),(0,o.kt)("p",null,"OR"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-aidl"},"docker pull acryldata/datahub-upgrade && docker run --env-file env/docker.env acryldata/datahub-upgrade:latest -u NoCodeDataMigration\n")),(0,o.kt)("p",null,"In addition to the required ",(0,o.kt)("inlineCode",{parentName:"p"},"-u")," argument, each upgrade may require specific arguments. You can provide arguments to individual\nupgrades using multiple ",(0,o.kt)("inlineCode",{parentName:"p"},"-a")," arguments. "),(0,o.kt)("p",null,"For example, the NoCodeDataMigration upgrade provides 2 optional arguments detailed above: ",(0,o.kt)("em",{parentName:"p"},"batchSize")," and ",(0,o.kt)("em",{parentName:"p"},"batchDelayMs"),".\nTo specify these, you can use a combination of ",(0,o.kt)("inlineCode",{parentName:"p"},"-a")," arguments and of the form ",(0,o.kt)("em",{parentName:"p"},"argumentName=argumentValue")," as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-aidl"},"./datahub-upgrade.sh -u NoCodeDataMigration -a batchSize=500 -a batchDelayMs=1000 // Small batches with 1 second delay. \n")),(0,o.kt)("p",null,"OR "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-aidl"},"docker pull acryldata/datahub-upgrade && docker run --env-file env/docker.env acryldata/datahub-upgrade:latest -u NoCodeDataMigration -a batchSize=500 -a batchDelayMs=1000\n")))}p.isMDXComponent=!0}}]);
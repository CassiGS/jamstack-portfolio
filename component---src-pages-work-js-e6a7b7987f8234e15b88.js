"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[670],{3895:function(e,t,n){var a=n(6540),l=n(4794);t.A=e=>{let{location:t,title:n,children:r}=e;const c="/jamstack-portfolio/"===t.pathname;let o;return o=c?a.createElement("span",{classnName:"nav__home-title"},"CassiGS"):a.createElement(l.Link,{className:"nav__link",to:"/"},a.createElement("span",null,"CassiGS")),a.createElement("div",{className:"global-wrapper","data-is-root-path":c},a.createElement("header",{className:"global-header"},a.createElement("div",null,o),a.createElement("div",null,a.createElement(l.Link,{className:"nav__link",to:"/about"},"About"))),a.createElement("main",null,r),a.createElement("footer",{className:"global-footer"},"© ",(new Date).getFullYear(),", Built with"," ",a.createElement("a",{href:"https://www.gatsbyjs.com"},"Gatsby"),". Version 1.0"))}},7528:function(e,t,n){var a=n(6540),l=n(4794);t.A=e=>{var t,n,r;let{description:c,title:o,children:i}=e;const{site:m}=(0,l.useStaticQuery)("2841359383"),s=c||m.siteMetadata.description,u=null===(t=m.siteMetadata)||void 0===t?void 0:t.title;return a.createElement(a.Fragment,null,a.createElement("title",null,u?`${o} | ${u}`:o),a.createElement("meta",{name:"description",content:s}),a.createElement("meta",{property:"og:title",content:o}),a.createElement("meta",{property:"og:description",content:s}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{name:"twitter:card",content:"summary"}),a.createElement("meta",{name:"twitter:creator",content:(null===(n=m.siteMetadata)||void 0===n||null===(r=n.social)||void 0===r?void 0:r.twitter)||""}),a.createElement("meta",{name:"twitter:title",content:o}),a.createElement("meta",{name:"twitter:description",content:s}),i)}},7618:function(e,t,n){n.r(t),n.d(t,{Head:function(){return c}});var a=n(6540),l=n(7528),r=n(3895);const c=()=>a.createElement(l.A,{title:"Work"});t.default=e=>{let{data:t,location:n}=e;const l=t.allMarkdownRemark.nodes;return a.createElement(r.A,{location:n},a.createElement("main",{className:"interior__wrapper"},a.createElement("h1",null,"Work"),a.createElement("section",{className:"interor__subhead"},a.createElement("p",null,"Learnings, musings, internet (and non-internet) projects I’m working on."),a.createElement("section",{className:"blog__list"},l.map((e=>{console.log(e);const t=e.frontmatter;return a.createElement(a.Fragment,null,a.createElement("p",null,t.title," ")," ",a.createElement("p",null,t.topic," "))}))))))}}}]);
//# sourceMappingURL=component---src-pages-work-js-e6a7b7987f8234e15b88.js.map
"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[751],{3895:function(e,t,a){var n=a(6540),l=a(4794);t.A=e=>{let{location:t,title:a,children:r}=e;const i="/jamstack-portfolio/"===t.pathname;let o;return o=i?n.createElement("span",{classnName:"nav__home-title"},"CassiGS"):n.createElement(l.Link,{className:"nav__link",to:"/"},n.createElement("span",null,"CassiGS")),n.createElement("div",{className:"global-wrapper","data-is-root-path":i},n.createElement("header",{className:"global-header"},n.createElement("div",null,o),n.createElement("div",null,n.createElement(l.Link,{className:"nav__link",to:"/about"},"About"))),n.createElement("main",null,r),n.createElement("footer",{className:"global-footer"},"© ",(new Date).getFullYear(),", Built with"," ",n.createElement("a",{href:"https://www.gatsbyjs.com"},"Gatsby"),". Version 1.0"))}},7528:function(e,t,a){var n=a(6540),l=a(4794);t.A=e=>{var t,a,r;let{description:i,title:o,children:c}=e;const{site:m}=(0,l.useStaticQuery)("2841359383"),s=i||m.siteMetadata.description,d=null===(t=m.siteMetadata)||void 0===t?void 0:t.title;return n.createElement(n.Fragment,null,n.createElement("title",null,d?`${o} | ${d}`:o),n.createElement("meta",{name:"description",content:s}),n.createElement("meta",{property:"og:title",content:o}),n.createElement("meta",{property:"og:description",content:s}),n.createElement("meta",{property:"og:type",content:"website"}),n.createElement("meta",{name:"twitter:card",content:"summary"}),n.createElement("meta",{name:"twitter:creator",content:(null===(a=m.siteMetadata)||void 0===a||null===(r=a.social)||void 0===r?void 0:r.twitter)||""}),n.createElement("meta",{name:"twitter:title",content:o}),n.createElement("meta",{name:"twitter:description",content:s}),c)}},6093:function(e,t,a){a.r(t),a.d(t,{Head:function(){return o}});var n=a(6540),l=a(4794),r=a(3895),i=a(7528);const o=e=>{let{data:{markdownRemark:t}}=e;return n.createElement(i.A,{title:t.frontmatter.title,description:t.frontmatter.description||t.excerpt})};t.default=e=>{var t;let{data:{previous:a,next:i,site:o,markdownRemark:c},location:m}=e;const s=(null===(t=o.siteMetadata)||void 0===t?void 0:t.title)||"Title";return n.createElement(r.A,{location:m,title:s},n.createElement("article",{className:"blog-post",itemScope:!0,itemType:"http://schema.org/Article"},n.createElement("header",null,n.createElement("h1",{itemProp:"headline"},c.frontmatter.title),n.createElement("p",null,c.frontmatter.date)),n.createElement("section",{dangerouslySetInnerHTML:{__html:c.html},itemProp:"articleBody"}),n.createElement("hr",null)),n.createElement("nav",{className:"blog-post-nav"},n.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},n.createElement("li",null,a&&n.createElement(l.Link,{to:a.fields.slug,rel:"prev"},"← ",a.frontmatter.title)),n.createElement("li",null,i&&n.createElement(l.Link,{to:i.fields.slug,rel:"next"},i.frontmatter.title," →")))))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-ef877838ec8c64f261e7.js.map
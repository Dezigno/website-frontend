(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],{35:function(e,t,c){},55:function(e,t,c){},66:function(e,t,c){},74:function(e,t,c){},75:function(e,t,c){},94:function(e,t,c){},95:function(e,t,c){},96:function(e,t,c){},97:function(e,t,c){"use strict";c.r(t);var s=c(2),i=c(16),a=c.n(i),n=(c(55),c(18)),l=c.n(n),r=c(24),o=c(15),j=c(5),d=(c(35),c(8)),b=c(19),m=c(17),h=c(21),x=c(1);var O=function(){var e=Object(h.c)((function(e){return e.scroll})),t=Object(h.b)();Object(s.useEffect)((function(){O(),t({type:"ROUTE"}),console.log(e)}),[]);var c=Object(s.useState)([]),i=Object(o.a)(c,2),a=i[0],n=i[1],O=function(){var e=Object(r.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://api.dezigno.ir/blog/");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,console.log(c),n(c),console.log(c);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(x.jsxs)("div",{className:"blogs-container",children:[Object(x.jsx)("div",{className:"blog-header",children:Object(x.jsx)("h1",{children:"\u0628\u0644\u0627\u06af \u062f\u0632\u06cc\u06af\u0646\u0648"})}),Object(x.jsxs)("div",{className:"blog-contents",children:[Object(x.jsx)("div",{className:"slide",children:Object(x.jsx)("h1",{children:"blog"})}),Object(x.jsx)("div",{className:"contents-container",children:a.map((function(e){return Object(x.jsxs)("div",{className:"post-box",children:[Object(x.jsx)("div",{className:"post-title-container",children:Object(x.jsx)("div",{className:"post-title",children:Object(x.jsx)(j.b,{className:"post-link",to:"/blog/".concat(e.slug),children:Object(x.jsx)("h1",{className:"post-title-text",children:e.title})})})}),Object(x.jsxs)("div",{className:"blog-details",children:[Object(x.jsxs)("div",{className:"blog-author",children:[Object(x.jsx)(d.h,{style:{fontSize:"18px"}}),Object(x.jsx)("h4",{style:{marginRight:"4px"},children:e.author})]}),Object(x.jsxs)("div",{className:"blog-date-category",children:[Object(x.jsxs)("div",{className:"blog-date",children:[Object(x.jsx)(b.a,{style:{fontSize:"18px"}}),Object(x.jsx)("h3",{children:e.datetime})]}),Object(x.jsxs)("div",{className:"blog-category",children:[Object(x.jsx)(m.a,{style:{fontSize:"18px"}}),e.category.map((function(e){return Object(x.jsx)(j.b,{className:"category-link",children:Object(x.jsx)("h3",{children:e})})}))]})]})]}),Object(x.jsx)("div",{className:"post-img-container",children:Object(x.jsx)(j.b,{className:"post-img-link",to:"/blog/".concat(e.slug),children:Object(x.jsx)("img",{src:e.entry_img,alt:"post ".concat(e.slug," entry img"),style:{maxHeight:"400px"}})})}),Object(x.jsx)("div",{className:"post-body-candidate-container",children:Object(x.jsx)("div",{className:"post-body-candidate",children:Object(x.jsx)("p",{children:e.entry_text})})})]},e.id)}))})]})]})};var g=function(e){var t=e.match;Object(s.useEffect)((function(){h()}),[]);var c=Object(s.useState)([]),i=Object(o.a)(c,2),a=i[0],n=i[1],h=function(){var e=Object(r.a)(l.a.mark((function e(){var c,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://dezigno.ir:8765/blog/".concat(t.params.slug));case 2:return c=e.sent,e.next=5,c.json();case 5:s=e.sent,console.log(s),n(s[0]);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(x.jsxs)("div",{className:"blogs-container",children:[Object(x.jsx)("div",{className:"blog-header",children:Object(x.jsx)("h1",{children:"\u0628\u0644\u0627\u06af \u062f\u0632\u06cc\u06af\u0646\u0648"})}),Object(x.jsxs)("div",{className:"blog-contents",children:[Object(x.jsx)("div",{className:"slide",children:Object(x.jsx)("h1",{children:"blog"})}),Object(x.jsx)("div",{className:"contents-container",children:a.map((function(e){return Object(x.jsxs)("div",{className:"post-box",children:[Object(x.jsx)("div",{className:"post-title-container",children:Object(x.jsx)("div",{className:"post-title",children:Object(x.jsx)(j.b,{className:"post-link",to:"/blog/".concat(e.slug),children:Object(x.jsx)("h1",{className:"post-title-text",children:e.title})})})}),Object(x.jsxs)("div",{className:"blog-details",children:[Object(x.jsxs)("div",{className:"blog-author",children:[Object(x.jsx)(d.h,{style:{fontSize:"18px"}}),Object(x.jsx)("h4",{style:{marginRight:"4px"},children:e.author})]}),Object(x.jsxs)("div",{className:"blog-date-category",children:[Object(x.jsxs)("div",{className:"blog-date",children:[Object(x.jsx)(b.a,{style:{fontSize:"18px"}}),Object(x.jsx)("h3",{children:e.datetime})]}),Object(x.jsxs)("div",{className:"blog-category",children:[Object(x.jsx)(m.a,{style:{fontSize:"18px"}}),e.category.map((function(e){return Object(x.jsx)(j.b,{className:"category-link",children:Object(x.jsx)("h3",{children:e})})}))]})]})]}),Object(x.jsx)("div",{className:"post-img-container",children:Object(x.jsx)(j.b,{className:"post-img-link",to:"/blog/".concat(e.slug),children:Object(x.jsx)("img",{src:e.entry_img,alt:"post ".concat(e.slug," entry img"),style:{maxHeight:"400px"}})})}),Object(x.jsx)("div",{className:"post-body-candidate-container",children:Object(x.jsx)("div",{className:"post-body-candidate",children:Object(x.jsx)("p",{children:e.body})})})]},e.id)}))})]})]})},u=c(4),v=(c(66),c(0)),p=c(14);c.p,c(74);var N=function(){var e=Object(s.useState)(!1),t=Object(o.a)(e,2),c=t[0],i=t[1],a=Object(s.useState)(!0),n=Object(o.a)(a,2),l=(n[0],n[1]),r=function(){i(!1)},b=function(){window.innerWidth<=960?l(!1):l(!0)};return Object(s.useEffect)((function(){return b(),window.addEventListener("resize",b),window.removeEventListener("resize",b)}),[]),Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(v.b.Provider,{value:{color:"#1c2237"},children:Object(x.jsx)("nav",{className:"navbar",children:Object(x.jsxs)("div",{className:"navbar-container container",children:[Object(x.jsx)(p.Link,{to:"/",className:"navbar-logo",onClick:function(){r(),p.animateScroll.scrollToTop()},children:Object(x.jsx)("b",{children:"DEZIGNO"})}),Object(x.jsx)("div",{className:"menu-icon",onClick:function(){return i(!c)},children:c?Object(x.jsx)(d.f,{}):Object(x.jsx)(d.a,{})}),Object(x.jsxs)("ul",{className:c?"nav-menu active":"nav-menu deactive",children:[Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsx)(p.Link,{to:"home-container",className:"nav-links",onClick:r,spy:!0,smooth:!0,offset:-70,duration:800,activeClass:"active",children:"\u062e\u0627\u0646\u0647"})}),Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsx)(p.Link,{to:"products-container",className:"nav-links",onClick:r,spy:!0,smooth:!0,offset:-70,duration:800,activeClass:"active",children:"\u0645\u062d\u0635\u0648\u0644\u0627\u062a"})}),Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsx)(p.Link,{to:"services-container",className:"nav-links",onClick:r,spy:!0,smooth:!0,offset:-70,duration:800,activeClass:"active",children:"\u0633\u0631\u0648\u06cc\u0633 \u0647\u0627"})}),Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsx)(p.Link,{to:"team-container",className:"nav-links",onClick:r,spy:!0,smooth:!0,offset:-70,duration:800,activeClass:"active",children:"\u062a\u06cc\u0645 \u0645\u0627"})}),Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsx)(j.b,{to:"/blog",className:"nav-links",onClick:r,children:"\u0628\u0644\u0627\u06af"})})]})]})})})})},f=(c(75),c(34)),k=c(49),w=c.n(k);var y=function(){return Object(x.jsxs)("div",{className:"footer-container",children:[Object(x.jsxs)("section",{className:"footer-contactus",children:[Object(x.jsx)("p",{className:"footer-contactus-heading",children:"\u0628\u0631\u0627\u06cc \u06a9\u0633\u0628 \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0628\u06cc\u0634\u062a\u0631 \u0648\u06cc\u0627 \u0628\u0631\u0641\u0631\u0627\u0631\u06cc \u0627\u0631\u062a\u0628\u0627\u0637 \u0628\u0627 \u067e\u0634\u062a\u06cc\u0628\u0627\u0646\u0627\u0646 \u0645\u0627 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0628\u0647 \u0635\u0641\u062d\u0647 \u0647\u0627\u06cc \u0645\u062c\u0627\u0632\u06cc \u062f\u0632\u06cc\u06af\u0646\u0648 \u0645\u0631\u0627\u062c\u0639\u0647 \u06a9\u0646\u06cc\u062f \u0648 \u06cc\u0627 \u0628\u0627 \u0631\u0627\u0647 \u0647\u0627\u06cc \u0627\u0631\u062a\u0628\u0627\u0637\u06cc \u0632\u06cc\u0631 \u062a\u0645\u0627\u0633 \u062d\u0627\u0635\u0644 \u0641\u0631\u0645\u0627\u06cc\u06cc\u062f."}),Object(x.jsx)("br",{}),Object(x.jsxs)("div",{className:"footer-contactus-number-email",children:[Object(x.jsxs)("span",{className:"footer-contactus-number-container",children:[Object(x.jsx)(f.a,{}),Object(x.jsx)("b",{className:"footer-contactus-number-",children:"+98 910 0428 509"})]}),Object(x.jsxs)("span",{className:"footer-contactus-email-container",children:[Object(x.jsx)(f.b,{}),Object(x.jsx)("b",{className:"footer-contactus-number-",children:"info@dezigno.ir"})]})]})]}),Object(x.jsx)("section",{className:"social-media",children:Object(x.jsxs)("div",{className:"social-media-wrap",children:[Object(x.jsx)("div",{className:"footer-logo",children:Object(x.jsx)(p.Link,{to:"/",className:"social-logo",onClick:function(){p.animateScroll.scrollToTop()},children:Object(x.jsx)("b",{children:"DEZIGNO"})})}),Object(x.jsx)("small",{className:"website-rights",children:"\u062a\u0645\u0627\u0645\u06cc \u062d\u0642\u0648\u0642 \u0645\u0627\u062f\u06cc \u0648 \u0645\u0639\u0646\u0648\u06cc \u0645\u062a\u0639\u0644\u0642 \u0628\u0647 \u0634\u0631\u06a9\u062a \u062a\u0648\u0633\u0639\u0647 \u0645\u062d\u0635\u0648\u0644 \u0646\u06af\u0627\u0631 \u0634\u0631\u0642\u200c (\u0628\u0627 \u0645\u0633\u0626\u0648\u0644\u06cc\u062a \u0645\u062d\u062f\u0648\u062f) - \u0641\u0631\u0648\u0634\u06af\u0627\u0647 \u0622\u0646\u0644\u0627\u06cc\u0646 \u062f\u0632\u06cc\u06af\u0646\u0648 - \u0645\u06cc\u200c\u0628\u0627\u0634\u062f"}),Object(x.jsxs)("div",{className:"social-icons",children:[Object(x.jsx)("a",{className:"social-icon-link",href:"https://t.me/dezigno_ir",target:"_blank","aria-label":"Telegram",rel:"noreferrer",children:Object(x.jsx)(d.e,{})}),Object(x.jsx)("a",{onClick:function(){w.a.get("http://127.0.0.1:8000/admin/")},className:"social-icon-link",href:"https://www.instagram.com/dezigno_ir/",target:"_blank",replace:"true","aria-label":"Instagram",rel:"noreferrer",children:Object(x.jsx)(d.c,{})}),Object(x.jsx)("a",{className:"social-icon-link",href:"https://twitter.com/dezigno_ir",target:"_blank","aria-label":"Twitter",rel:"noreferrer",children:Object(x.jsx)(d.g,{})}),Object(x.jsx)("a",{className:"social-icon-link",href:"https://www.linkedin.com/company/dezigno-ir/",target:"_blank","aria-label":"LinkedIn",rel:"noreferrer",children:Object(x.jsx)(d.d,{})})]})]})})]})},_=c(6);c(94);var L=function(e){var t=e.lightBg,c=e.topLine,s=e.lightText,i=e.lightTextDesc,a=e.headline,n=e.description,l=(e.buttonLabel,e.img),r=e.alt,o=e.imgStart,j=e.customize,d=e.customDes;return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("div",{className:t?"home__hero-section":"home__hero-section darkBg",children:Object(x.jsx)("div",{className:"container",children:Object(x.jsxs)("div",{className:"row home__hero-row",style:{display:"flex",flexDirection:"start"===o?"row-reverse":"row"},children:[Object(x.jsx)("div",{className:"col",children:Object(x.jsxs)("div",{className:"home__hero-text-wrapper",children:[Object(x.jsx)("div",{className:"top-line",children:c}),Object(x.jsx)("h1",{className:s?"heading":"heading dark",children:a}),Object(x.jsx)("p",{className:i?"home__hero-subtitle":"home__hero-subtitle dark",children:!0===j?d:n})]})}),Object(x.jsx)("div",{className:"col",children:Object(x.jsx)("div",{className:"home__hero-img-wrapper",children:Object(x.jsx)("img",{src:l,alt:r,className:"home__hero-img"})})})]})})})})},T={lightBg:!0,lightText:!1,lightTextDes:!1,topLine:"\u067e\u0644\u062a\u0641\u0631\u0645\u06cc \u0631\u0627\u062d\u062a \u0628\u0631\u0627\u06cc \u0641\u0631\u0648\u0634 \u0622\u0633\u0627\u0646 \u0645\u0631\u0686",headline:"\u0645\u062d\u0635\u0648\u0644\u0627\u062a \u0645\u062e\u0635\u0648\u0635 \u062e\u0648\u062f\u062a\u0627\u0646 \u0631\u0627 \u0628\u0627 \u0637\u0631\u062d \u0647\u0627\u06cc \u062f\u0644\u062e\u0648\u0627\u0647 \u0628\u0647 \u0637\u0631\u0641\u062f\u0627\u0631\u0627\u0646\u062a\u0627\u0646 \u0639\u0631\u0636\u0647 \u06a9\u0646\u06cc\u062f!",description:"\u0628\u0647 \u0631\u0627\u062d\u062a\u06cc \u067e\u0627\u06cc\u0647 \u0631\u06cc\u0632 \u0627\u0631\u062a\u0628\u0627\u0637\u06cc \u06af\u0631\u0645 \u062a\u0631 \u062f\u0646\u0628\u0627\u0644 \u06a9\u0646\u0646\u062f\u0647 \u0647\u0627\u06cc \u062e\u0648\u062f \u0628\u0627\u0634\u06cc\u062f \u0648 \u0627\u0632 \u0645\u0632\u0627\u06cc\u0627\u06cc \u0641\u0631\u0627\u0648\u0627\u0646 \u0648 \u0633\u0648\u062f \u0641\u0631\u0648\u0634 \u0645\u0631\u0686 \u0628\u0647\u0631\u0647 \u0628\u0628\u0631\u06cc\u062f!",buttonLabel:"\u0634\u0631\u0648\u0639",imgStart:"",img:"images/yourLogo.png",alt:"merch samples"},C={lightBg:!1,lightText:!0,lightTextDesc:!0,topLine:"\u0633\u0648\u062f \u062f\u0647\u06cc \u0628\u0627\u0644\u0627",headline:"\u06cc\u06a9\u06cc \u0627\u0632 \u0627\u0635\u0644\u06cc \u062a\u0631\u06cc\u0646 \u0631\u0627\u0647 \u0647\u0627\u06cc \u06a9\u0633\u0628 \u062f\u0631\u0622\u0645\u062f \u0631\u0627 \u0627\u0632 \u062f\u0633\u062a \u0646\u062f\u0647\u06cc\u062f",description:"\u0641\u0631\u0648\u0634 \u0645\u0631\u0686 \u062f\u0631 \u062a\u0645\u0627\u0645 \u062f\u0646\u06cc\u0627 \u06cc\u06a9\u06cc \u0627\u0632 \u067e\u0631\u0633\u0648\u062f \u062a\u0631\u06cc\u0646 \u0631\u0627\u0647 \u0647\u0627\u06cc \u062f\u0631\u0622\u0645\u062f \u0647\u0631 \u0627\u06cc\u0646\u0641\u0644\u0648\u0626\u0646\u0633\u0631 \u0648 \u062a\u0648\u0644\u06cc\u062f \u06a9\u0646\u0646\u062f\u0647 \u0645\u062d\u062a\u0648\u0627\u0633\u062a (\u0627\u06af\u0631 \u0627\u0635\u0644\u06cc \u062a\u0631\u06cc\u0646 \u0646\u0628\u0627\u0634\u062f!)\u060c \u067e\u0633 \u0627\u0632 \u0622\u0646 \u063a\u0627\u0641\u0644 \u0646\u0634\u0648\u06cc\u062f.",buttonLabel:"\u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0628\u06cc\u0634\u062a\u0631",imgStart:"start",img:"images/home/home2.png",alt:"Credit Card"};var S=function(){return Object(x.jsxs)("div",{className:"home-container",children:[Object(x.jsx)(L,Object(_.a)({},T)),Object(x.jsx)(L,Object(_.a)({},C))]})},D={lightBg:!0,lightText:!1,lightTextDesc:!1,topLine:"\u06a9\u0646\u062a\u0631\u0644 \u0648 \u0645\u062f\u06cc\u0631\u06cc\u062a \u06a9\u0627\u0645\u0644",headline:" \u0628\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u0633\u0631\u0648\u06cc\u0633 \u0686\u0627\u067e \u0628\u0631 \u062d\u0633\u0628 \u0646\u06cc\u0627\u0632\u060c \u0628\u062f\u0648\u0646 \u062f\u063a\u062f\u063a\u0647 \u0628\u0631 \u062a\u0645\u0627\u0645 \u0641\u0631\u0622\u06cc\u0646\u062f \u0645\u062f\u06cc\u0631\u06cc\u062a \u06a9\u0646\u06cc\u062f",description:"\u0628\u0647 \u0622\u0633\u0627\u0646\u06cc \u0645\u062d\u0635\u0648\u0644\u0627\u062a \u062e\u0648\u062f \u0631\u0627 \u062f\u0631 \u0633\u0627\u06cc\u062a \u062a\u0639\u0631\u06cc\u0641 \u06a9\u0646\u06cc\u062f\u060c \u0647\u0631 \u06af\u0648\u0646\u0647 \u062a\u063a\u06cc\u06cc\u0631\u06cc \u0631\u0627 \u0628\u0627 \u0686\u0646\u062f \u06a9\u0644\u06cc\u06a9 \u0627\u0639\u0645\u0627\u0644 \u06a9\u0646\u06cc\u062f \u0648 \u0641\u0631\u0648\u0634\u06af\u0627\u0647 \u062e\u0648\u062f\u060c \u062d\u0633\u0627\u0628 \u0647\u0627\u060c \u062a\u062e\u0641\u06cc\u0641 \u0647\u0627 \u0648 \u06a9\u0645\u067e\u06cc\u0646 \u0647\u0627 \u0631\u0627 \u0628\u0647 \u0622\u0633\u0627\u0646\u06cc \u0645\u062f\u06cc\u0631\u06cc\u062a \u06a9\u0646\u06cc\u062f.",buttonLabel:"\u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0628\u06cc\u0634\u062a\u0631",imgStart:"",img:"images/home/service1.png",alt:"Credit Card"},E={lightBg:!1,lightText:!0,lightTextDesc:!0,topLine:"\u0631\u0641\u0639 \u062a\u0645\u0627\u0645 \u062f\u063a\u062f\u063a\u0647 \u0647\u0627",headline:"\u0686\u0631\u0627 \u0628\u0627\u06cc\u062f \u0627\u0632 pod \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0631\u062f\u061f",description:"sdfsdfsdfsdfsdf",buttonLabel:"Learn More",imgStart:"start",img:"images/home/service2.3.png",alt:"Vault",customize:!0,customDes:Object(x.jsxs)("ul",{children:[Object(x.jsx)("li",{children:"\u0631\u0641\u0639 \u062a\u0645\u0627\u0645 \u0646\u06af\u0631\u0627\u0646\u06cc \u0647\u0627 \u0648 \u0645\u0634\u06a9\u0644\u0627\u062a \u0645\u0631\u0628\u0648\u0637 \u0628\u0647 \u0641\u0631\u0648\u0634\u060c \u062d\u0645\u0644 \u0648 \u0646\u0642\u0644 \u0648 \u0645\u0633\u0627\u0626\u0644 \u0642\u0627\u0646\u0648\u0646\u06cc"}),Object(x.jsx)("li",{children:"\u0627\u0645\u06a9\u0627\u0646 \u062a\u063a\u06cc\u06cc\u0631 \u0648 \u062a\u0639\u0631\u06cc\u0641 \u0637\u0631\u062d \u0647\u0627\u06cc \u062c\u062f\u06cc\u062f \u0648 \u0628\u0633\u06cc\u0627\u0631 \u0628\u0647 \u0633\u0627\u062f\u06af\u06cc \u0628\u0631\u0627\u06cc \u0645\u0646\u0627\u0633\u0628\u062a \u0647\u0627\u06cc \u0647\u0627\u0644\u0648\u0648\u06cc\u0646\u060c \u06a9\u0631\u06cc\u0633\u0645\u0633 \u0648 \u063a\u06cc\u0631\u0647 \u0628\u062f\u0648\u0646 \u0646\u06af\u0631\u0627\u0646\u06cc \u0627\u0632 \u0641\u0631\u0648\u0634 \u06a9\u0645 \u0637\u0631\u062d \u0647\u0627"}),Object(x.jsx)("li",{children:"\u0639\u062f\u0645 \u0646\u06cc\u0627\u0632 \u0628\u0647 \u0647\u06cc\u0686\u06af\u0648\u0646\u0647 \u0641\u0636\u0627 \u0648 \u0646\u06cc\u0631\u0648\u06cc \u0641\u06cc\u0632\u06cc\u06a9\u06cc \u0628\u0631\u0627\u06cc \u0627\u0646\u0628\u0627\u0631\u060c \u0641\u0631\u0648\u0634\u06af\u0627\u0647"}),Object(x.jsx)("li",{children:"\u0631\u0627\u0647 \u0627\u0646\u062f\u0627\u0632\u06cc \u0633\u0627\u062f\u0647 \u0641\u0631\u0648\u0634\u06af\u0627\u0647 \u0648 \u062a\u0639\u0631\u06cc\u0641 \u0645\u062d\u0635\u0648\u0644\u0627\u062a \u062f\u0631 \u0686\u0646\u062f \u062f\u0642\u06cc\u0642\u0647\u060c \u0628\u062f\u0648\u0646 \u0646\u06cc\u0627\u0632 \u0628\u0647 \u062f\u0627\u0646\u0634\u06cc \u0627\u0632 \u0635\u0646\u0639\u062a \u0686\u0627\u067e\u060c \u0645\u062d\u0635\u0648\u0644\u0627\u062a \u0648 \u063a\u06cc\u0631\u0647"})]})},z={lightBg:!0,lightText:!1,lightTextDesc:!1,topLine:"\u0637\u0631\u0627\u062d\u06cc \u0622\u0633\u0627\u0646",headline:"\u062a\u0639\u0631\u06cc\u0641 \u0622\u0633\u0627\u0646 \u0637\u0631\u062d \u0628\u0627 \u0627\u0628\u0632\u0627\u0631 \u0647\u0627\u06cc \u0622\u0646\u0644\u0627\u06cc\u0646",description:"\u0627\u0628\u0632\u0627\u0631 \u0622\u0646\u0644\u0627\u06cc\u0646 \u0627\u062c\u0627\u0632\u0647 \u0637\u0631\u0627\u062d\u06cc \u0622\u0633\u0627\u0646 \u0645\u062d\u0635\u0648\u0644\u0627\u062a \u0631\u0627 \u0628\u0647 \u0634\u0645\u0627 \u0645\u06cc\u200c\u062f\u0647\u062f\u060c \u0647\u0645\u0686\u0646\u06cc\u0646 \u062f\u0631 \u0644\u062d\u0638\u0647 \u0628\u0627 \u0646\u0645\u0627\u06cc\u0634 \u06cc\u06a9 \u062e\u0631\u0648\u062c\u06cc \u0627\u0632 \u0637\u0631\u062d \u0646\u0647\u0627\u06cc\u06cc\u060c \u062f\u06cc\u062f\u06cc \u0628\u0647 \u0634\u0645\u0627 \u0645\u06cc\u062f\u0647\u062f \u06a9\u0647 \u0645\u062d\u0635\u0648\u0644 \u0634\u0645\u0627 \u0628\u0647 \u0686\u0647 \u0634\u06a9\u0644\u06cc \u062e\u0648\u0627\u0647\u062f \u0634\u062f. \u062a\u06cc\u0645 \u0637\u0631\u0627\u062d\u06cc \u0645\u0627 \u0646\u06cc\u0632 \u0622\u0645\u0627\u062f\u0647 \u0627\u0631\u0627\u0626\u0647 \u0647\u0631\u06af\u0648\u0646\u0647 \u062e\u062f\u0645\u0627\u062a \u0645\u0634\u0627\u0648\u0631\u0647 \u0627\u06cc \u0648 \u06a9\u0645\u06a9 \u0628\u0647 \u0634\u0645\u0627\u0633\u062a.",buttonLabel:"\u0628\u0647 \u0645\u0627 \u0628\u067e\u06cc\u0648\u0646\u062f\u06cc\u062f",imgStart:"",img:"images/home/service3.png",alt:"Vault"};c(50),c(95);var B=function(){return Object(x.jsxs)("div",{className:"services-container",children:[Object(x.jsx)(L,Object(_.a)({},D)),Object(x.jsx)(L,Object(_.a)({},E)),Object(x.jsx)(L,Object(_.a)({},z))]})};var I={lightBg:!0,lightText:!1,lightTextDesc:!1,topLine:"\u0645\u062d\u0635\u0648\u0644\u0627\u062a \u0645\u0627",headline:"\u0645\u0631\u0686 \u0686\u06cc\u0633\u062a\u061f",description:"\u0628\u0647 \u0637\u0648\u0631 \u06a9\u0644\u06cc\u060c \u062a\u0645\u0627\u0645 \u06a9\u0627\u0644\u0627\u0647\u0627\u06cc\u06cc \u0647\u0645\u0686\u0648\u0646 \u062a\u06cc\u0634\u0631\u062a\u060c \u0645\u0627\u06af\u060c \u0647\u0648\u062f\u06cc\u060c \u06a9\u06cc\u0641\u060c \u0627\u0633\u062a\u06cc\u06a9\u0631 \u0648 \u062f\u0633\u062a\u0628\u0646\u062f \u06a9\u0647 \u0628\u0647 \u0647\u062f\u0641 \u0641\u0631\u0648\u0634 \u062a\u062c\u0627\u0631\u06cc \u0648 \u062a\u0628\u0644\u06cc\u063a\u0627\u062a \u062a\u0648\u0644\u06cc\u062f \u0645\u06cc\u200c\u0634\u0648\u0646\u062f \u0631\u0627 \u0645\u0631\u0686 \u0646\u0627\u0645\u06af\u0630\u0627\u0631\u06cc \u0645\u06cc\u200c\u06a9\u0646\u0646\u062f. \u062f\u0631 \u0644\u063a\u062a \u0627\u06cc\u0646 \u06a9\u0644\u0645\u0647 \u0628\u0647 \u0645\u0639\u0646\u06cc \u06a9\u0627\u0644\u0627\u06cc \u062a\u062c\u0627\u0631\u06cc\u0633\u062a \u0627\u0645\u0627 \u062f\u0631 \u0633\u0627\u0644 \u0647\u0627\u06cc \u0627\u062e\u06cc\u0631 \u0628\u06cc\u0634\u062a\u0631 \u0628\u0647 \u0645\u062d\u0635\u0648\u0644\u0627\u062a \u0641\u0631\u0648\u062e\u062a\u0647 \u0634\u062f\u0647 \u062a\u0648\u0633\u0637 \u0628\u0644\u0627\u06af\u0631 \u0647\u0627\u060c \u0648\u06cc\u0644\u0627\u06af\u0631 \u0647\u0627 \u0648 \u062f\u06cc\u06af\u0631 \u06a9\u0627\u0646\u062a\u0646\u062a \u06a9\u0631\u06cc\u062a\u0648\u0631 \u0647\u0627 \u0648 \u0627\u06cc\u0646\u0641\u0644\u0648\u0626\u0646\u0633\u0631 \u0647\u0627 \u0627\u0634\u0627\u0631\u0647 \u062f\u0627\u0631\u062f. \u0645\u0627 \u062e\u0648\u062f \u0631\u0627 \u0645\u062d\u062f\u0648\u062f \u0628\u0647 \u06af\u0631\u0648\u0647 \u062e\u0627\u0635\u06cc \u0627\u0632 \u0627\u06cc\u0646 \u0645\u062d\u0635\u0648\u0644\u0627\u062a \u0646\u06a9\u0631\u062f\u0647\u200c\u0627\u06cc\u0645 \u0648 \u0642\u0635\u062f \u062f\u0627\u0631\u06cc\u0645 \u06cc\u06a9 \u0628\u0647 \u06cc\u06a9 \u0627\u0645\u06a9\u0627\u0646 \u0641\u0631\u0648\u0634 \u062a\u06a9 \u062a\u06a9 \u0622\u0646\u0647\u0627 \u0631\u0627 \u0628\u0631\u0627\u06cc \u0634\u0645\u0627 \u0641\u0631\u0627\u0647\u0645 \u06a9\u0646\u06cc\u0645.",buttonLabel:"\u0628\u0647 \u0645\u0627 \u0628\u067e\u06cc\u0648\u0646\u062f\u06cc\u062f",imgStart:"",img:"images/products.png",alt:"Credit Card"},R={lightBg:!1,lightText:!0,lightTextDesc:!0,topLine:"\u0645\u0631\u0686 \u0628\u0631\u0627\u06cc \u0686\u0647 \u06a9\u0633\u0627\u0646\u06cc\u0633\u062a\u061f",headline:"\u0686\u0647 \u06a9\u0633\u0627\u0646\u06cc \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u0646\u062f \u0645\u0631\u0686 \u0628\u0641\u0631\u0648\u0634\u0646\u062f\u061f",description:"\u062a\u0645\u0627\u0645\u06cc \u0627\u0634\u062e\u0627\u0635 \u0648 \u06af\u0631\u0648\u0647 \u0647\u0627\u06cc \u0645\u062e\u062a\u0644\u0641 \u0647\u0645\u0686\u0648\u0646 \u06af\u0631\u0648\u0647 \u0647\u0627\u06cc \u0645\u0648\u0633\u06cc\u0642\u06cc\u060c \u06cc\u0648\u062a\u06cc\u0648\u0628\u0631 \u0647\u0627\u060c \u0648\u06cc\u0644\u0627\u06af\u0631 \u0648 \u0628\u0644\u0627\u06af\u0631 \u0647\u0627\u060c \u0634\u0631\u06a9\u062a \u0647\u0627 \u0648 \u063a\u06cc\u0631\u0647 \u062f\u0631 \u0647\u0631 \u0627\u0646\u062f\u0627\u0632\u0647 \u0628\u0627 \u0647\u0631 \u062a\u0639\u062f\u0627\u062f \u062c\u0627\u0645\u0639\u0647 \u0645\u062e\u0627\u0637\u0628\u06cc\u0646 \u0647\u062f\u0641 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u0646\u062f \u06cc\u06a9 \u0641\u0631\u0648\u0634\u06af\u0627\u0647 \u0645\u0631\u0686 \u0628\u0631\u0627\u06cc \u062e\u0648\u062f \u0631\u0627\u0647 \u0627\u0646\u062f\u0627\u0632\u06cc \u06a9\u0646\u0646\u062f. \u0633\u0631\u0648\u06cc\u0633 \u0686\u0627\u067e \u0628\u0631 \u062d\u0633\u0628 \u0646\u06cc\u0627\u0632 \u0627\u062c\u0627\u0632\u0647 \u0631\u0627\u0647 \u0627\u0646\u062f\u0627\u0632\u06cc \u0627\u06cc\u0646 \u0641\u0631\u0648\u0634\u06af\u0627\u0647 \u0631\u0627 \u0628\u0647 \u0634\u0645\u0627 \u0628\u062f\u0648\u0646 \u0646\u06cc\u0627\u0632 \u0628\u0647 \u0647\u06cc\u0686\u06af\u0648\u0646\u0647 \u0633\u0631\u0645\u0627\u06cc\u0647 \u0627\u0648\u0644\u06cc\u0647 \u0645\u06cc\u200c\u062f\u0647\u062f.",buttonLabel:"\u0628\u06cc\u0634\u062a\u0631 \u0628\u062f\u0627\u0646\u06cc\u062f",imgStart:"start",img:"images/home/product2.png",alt:"Vault"};var F=function(){return Object(x.jsxs)("div",{className:"products-container",children:[Object(x.jsx)(L,Object(_.a)({},I)),Object(x.jsx)(L,Object(_.a)({},R))]})},V={lightBg:!1,lightText:!0,lightTextDesc:!0,topLine:"\u0622\u0634\u0646\u0627\u06cc\u06cc \u0628\u0627 \u0645\u0627",headline:"\u0645\u0627 \u0645\u0639\u062a\u0642\u062f\u06cc\u0645 \u06a9\u0647 \u062a\u06cc\u0645\u06cc \u0645\u062a\u0639\u0647\u062f \u0648 \u067e\u0631 \u0627\u0646\u0631\u0698\u06cc \u0627\u0632 \u0645\u062a\u062e\u0635\u0635\u06cc\u0646 \u0647\u0631 \u0646\u0627\u0645\u0645\u06a9\u0646\u06cc \u0631\u0627 \u0645\u0645\u06a9\u0646 \u0645\u06cc\u200c\u0633\u0627\u0632\u062f",description:"\u062f\u0631 \u062a\u0634\u06a9\u06cc\u0644 \u062a\u06cc\u0645\u060c\u200c \u0633\u0639\u06cc \u062f\u0627\u0634\u062a\u0647 \u0627\u06cc\u0645 \u062c\u0648\u06cc \u0635\u0645\u06cc\u0645\u06cc \u0627\u0632 \u062c\u0648\u0627\u0646\u0627\u0646 \u0628\u0627 \u0627\u0646\u0631\u0698\u06cc \u0648 \u062a\u062c\u0631\u0628\u0647 \u0631\u0627 \u06af\u0631\u062f \u0647\u0645 \u0622\u0648\u0631\u06cc\u0645 \u062a\u0627 \u0628\u0647\u062a\u0631\u06cc\u0646 \u06a9\u06cc\u0641\u06cc\u062a \u062e\u062f\u0645\u0627\u062a \u0631\u0627 \u0628\u0647 \u0645\u0634\u062a\u0631\u06cc\u0627\u0646 \u062e\u0648\u062f \u0627\u0631\u0627\u0626\u0651\u0647 \u06a9\u0646\u06cc\u0645. \u062f\u0631 \u0627\u062f\u0627\u0645\u0647 \u0627\u0639\u0636\u0627\u06cc \u06a9\u0644\u06cc\u062f\u06cc \u062a\u06cc\u0645 \u0645\u0627 \u0631\u0627 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0645\u0634\u0627\u0647\u062f\u0647 \u06a9\u0646\u06cc\u062f.",buttonLabel:"\u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0628\u06cc\u0634\u062a\u0631",imgStart:"start",img:"images/home/team1.png",alt:"Credit Card"};c(96);var U=function(){return Object(x.jsxs)("div",{className:"team-container",children:[Object(x.jsx)(L,Object(_.a)({},V)),Object(x.jsx)("div",{className:"banner",children:Object(x.jsx)("div",{className:"container",children:Object(x.jsx)("div",{className:"banner-header",children:Object(x.jsx)("h1",{className:"banner-title",children:"\u062a\u06cc\u0645 \u062f\u0632\u06cc\u06af\u0646\u0648"})})})}),Object(x.jsx)("div",{className:"team",children:Object(x.jsx)("div",{className:"container2",children:Object(x.jsxs)("div",{className:"row team-row",children:[Object(x.jsx)("div",{className:"team-col",children:Object(x.jsxs)("div",{className:"team-text-wrapper",children:[Object(x.jsx)("img",{src:"images/team/navid.png",alt:"CEO",className:"col-item-img"}),Object(x.jsx)("div",{className:"col-item-name",children:Object(x.jsx)("p",{children:"\u0646\u0648\u06cc\u062f \u0642\u0627\u0633\u0645\u06cc"})}),Object(x.jsx)("div",{className:"col-item-title",children:Object(x.jsx)("p",{children:"\u0645\u0648\u0633\u0633 \u0648 \u0645\u062f\u06cc\u0631\u0639\u0627\u0645\u0644"})})]})}),Object(x.jsx)("div",{className:"team-col",children:Object(x.jsxs)("div",{className:"team-text-wrapper",children:[Object(x.jsx)("img",{src:"images/team/kasra.png",alt:"CTO",className:"col-item-img"}),Object(x.jsx)("div",{className:"col-item-name",children:Object(x.jsx)("p",{children:"\u06a9\u0633\u0631\u06cc \u06a9\u0631\u0645\u06cc\u200c\u0646\u0698\u0627\u062f"})}),Object(x.jsx)("div",{className:"col-item-title",children:Object(x.jsx)("p",{children:"\u0645\u062f\u06cc\u0631 \u0641\u0646\u06cc\u060c \u062a\u062d\u0642\u06cc\u0642\u0627\u062a \u0648 \u062a\u0648\u0633\u0639\u0647"})})]})}),Object(x.jsx)("div",{className:"team-col",children:Object(x.jsxs)("div",{className:"team-text-wrapper",children:[Object(x.jsx)("img",{src:"images/team/jaber.png",alt:"COO",className:"col-item-img"}),Object(x.jsx)("div",{className:"col-item-name",children:Object(x.jsx)("p",{children:"\u062c\u0627\u0628\u0631 \u0631\u0627\u0634\u06a9\u06cc"})}),Object(x.jsx)("div",{className:"col-item-title",children:Object(x.jsx)("p",{children:"\u0631\u0627\u0647\u0628\u0631\u06cc \u0639\u0645\u0644\u06cc\u0627\u062a\u06cc"})})]})}),Object(x.jsx)("div",{className:"team-col",children:Object(x.jsxs)("div",{className:"team-text-wrapper",children:[Object(x.jsx)("img",{src:"images/team/ghazale.png",alt:"CMO",className:"col-item-img"}),Object(x.jsx)("div",{className:"col-item-name",children:Object(x.jsx)("p",{children:"\u063a\u0632\u0627\u0644\u0647 \u0633\u0627\u062f\u0627\u062a \u0641\u0627\u0637\u0645\u06cc"})}),Object(x.jsx)("div",{className:"col-item-title",children:Object(x.jsx)("p",{children:"\u0645\u062f\u06cc\u0631 \u0628\u0627\u0632\u0627\u0631\u06cc\u0627\u0628\u06cc"})})]})})]})})})]})};var X=function(){return Object(x.jsxs)("div",{className:"index-container",children:[Object(x.jsx)(S,{id:"home"}),Object(x.jsx)(F,{id:"products"}),Object(x.jsx)(B,{id:"services"}),Object(x.jsx)(U,{})]})};var P=function(){return Object(x.jsxs)(j.a,{children:[Object(x.jsx)(N,{}),Object(x.jsxs)(u.c,{children:[Object(x.jsx)(u.a,{path:"/",exact:!0,component:X}),Object(x.jsx)(u.a,{path:"/blog",exact:!0,component:O}),Object(x.jsx)(u.a,{path:"/blog/:slug",component:g})]}),Object(x.jsx)(y,{})]})},G=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,98)).then((function(t){var c=t.getCLS,s=t.getFID,i=t.getFCP,a=t.getLCP,n=t.getTTFB;c(e),s(e),i(e),a(e),n(e)}))},H=c(25),J=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SCROLL":return e;case"ROUTE":return!e;default:return e}},M=function(){return Object(H.a)({scroll:J})},Z=Object(H.b)(M,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());a.a.render(Object(x.jsx)(h.a,{store:Z,children:Object(x.jsx)(P,{})}),document.getElementById("root")),G()}},[[97,1,2]]]);
//# sourceMappingURL=main.c14d8f9b.chunk.js.map
(this.webpackJsonpurl_shortening=this.webpackJsonpurl_shortening||[]).push([[0],{12:function(e,t,s){},13:function(e,t,s){},16:function(e,t,s){"use strict";s.r(t);var c=s(1),i=s.n(c),n=s(5),a=s.n(n),l=(s(12),s(13),s(2)),r=s.p+"static/media/logo.83464303.svg",j=s(7),o=s(0),d=function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),s=t[0],i=t[1];return Object(o.jsxs)("div",{className:"Nav",children:[Object(o.jsxs)("div",{className:"leftNav",children:[Object(o.jsx)("img",{src:r,alt:"",className:"logo"}),Object(o.jsx)(j.a,{className:"phoneNav",onClick:function(){i(!s)}})]}),Object(o.jsxs)("div",{className:"rightNav",style:s?{display:"flex"}:{},children:[Object(o.jsxs)("ul",{className:"links",children:[Object(o.jsxs)("li",{children:[Object(o.jsx)("a",{href:"#"}),"Features"]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("a",{href:"#"}),"Pricing"]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("a",{href:"#"}),"Resources"]})]}),Object(o.jsx)("div",{className:"navLine"}),Object(o.jsxs)("ul",{className:"signUpLinks",children:[Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"#",children:"Login"})}),Object(o.jsx)("li",{children:Object(o.jsx)("input",{id:"signupBtn",type:"button",value:"Sign Up"})})]})]})]})},b=s.p+"static/media/illustration-working.c9b5ef54.svg",h=function(){return Object(o.jsx)("div",{className:"Description",children:Object(o.jsxs)("div",{className:"container-wrapper",children:[Object(o.jsxs)("div",{className:"description-container",children:[Object(o.jsx)("div",{className:"descriptionTitle",children:"More than just shorter links"}),Object(o.jsx)("div",{className:"descriptionText",children:"Build your brand's recognition and get detailed insights on how your links are performing"}),Object(o.jsx)("div",{className:"getStartedBtn",children:Object(o.jsx)("input",{type:"button",value:"Get Started"})})]}),Object(o.jsx)("div",{className:"image-container",children:Object(o.jsx)("img",{src:b,alt:""})})]})})},O=s(4),u=s.n(O),x=s(6),m=function(e){var t=e.data,s=Object(c.useRef)(null),i=Object(c.useState)(!1),n=Object(l.a)(i,2),a=n[0],r=n[1];return Object(o.jsx)("div",{className:"Links",children:Object(o.jsx)("ul",{children:Object(o.jsxs)("li",{className:"link",children:[Object(o.jsx)("div",{className:"originalLink",children:t.original_link}),Object(o.jsxs)("div",{className:"right_links",children:[Object(o.jsx)("input",{className:" newLink",ref:s,value:t.shorten_link}),Object(o.jsx)("input",{className:"copyBtn",style:a?{backgroundColor:"hsl(257,27%,26%)"}:{},type:"button",value:a?"Copied !":"Copy",onClick:function(e){r(!0),s.current.select(),s.current.setSelectionRange(0,9999),document.execCommand("copy"),e.target.focus()}})]})]})})})},g=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),s=t[0],i=t[1],n=Object(c.useState)(""),a=Object(l.a)(n,2),r=a[0],j=a[1],d=Object(c.useState)(""),b=Object(l.a)(d,2),h=b[0],O=b[1],g=Object(c.useState)(!1),v=Object(l.a)(g,2),p=v[0],N=v[1],f=Object(c.useState)([]),k=Object(l.a)(f,2),y=k[0],S=k[1],w=Object(c.useState)(!1),C=Object(l.a)(w,2),B=C[0],_=C[1],I=Object(c.useState)(!1),L=Object(l.a)(I,2),F=L[0],T=L[1];Object(c.useEffect)((function(){R(),J()}),[h]);var R=function(){var e=Object(x.a)(u.a.mark((function e(){var t,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.shrtco.de/v2/shorten?url=".concat(h));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,i(c.result),console.log(t),console.log(s),c.ok&&s&&(_(!1),console.log("working"),D(),J()),c.ok&&!s&&(T(!0),_(!1));case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(){var e;e=null===localStorage.getItem("links")?[]:JSON.parse(localStorage.getItem("links"));var t={original_link:s.original_link,shorten_link:s.full_short_link};e.push(t),localStorage.setItem("links",JSON.stringify(e))},J=function(){localStorage.getItem("links")&&(S(JSON.parse(localStorage.getItem("links"))),console.log(y))};return Object(o.jsxs)("div",{className:"Input",children:[Object(o.jsx)("form",{onSubmit:function(e){e.preventDefault(),console.log("Submitted"),r?(O(r),console.log(r),j(""),_(!0)):(console.log("empty"),N(!0))},children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("input",{className:p||F?"inputError":"inputText",value:r,type:"text",placeholder:"Shorten a link here...",onChange:function(e){j(e.target.value),N(!1),T(!1)}}),p?Object(o.jsx)("div",{className:"error",children:"Please add a link"}):"",F?Object(o.jsx)("div",{className:"error",children:"Try again!"}):"",Object(o.jsxs)("div",{className:"inputBtn",children:[Object(o.jsx)("input",{type:"submit",value:"shorten it!"}),Object(o.jsx)("div",{className:"loading",style:B?{display:"inline-block"}:{}})]})]})}),Object(o.jsx)("div",{className:"links-container",children:y.map((function(e,t){return Object(o.jsx)(m,{data:e},t)}))})]})},v=s.p+"static/media/icon-brand-recognition.c349d3b6.svg",p=s.p+"static/media/icon-detailed-records.265c8aea.svg",N=s.p+"static/media/icon-fully-customizable.a1532a74.svg",f=function(){return Object(o.jsxs)("div",{className:"Info",children:[Object(o.jsxs)("div",{className:"info_desc",children:[Object(o.jsx)("div",{className:"title",children:"Advanced Statistics"}),Object(o.jsx)("div",{className:"desc",children:"Track how your links are performing across the web with our advance statistics dashboard."})]}),Object(o.jsx)("div",{className:"info_charts",children:Object(o.jsxs)("div",{className:"items",children:[Object(o.jsxs)("div",{className:"item",children:[Object(o.jsx)("img",{src:v,alt:""}),Object(o.jsx)("div",{className:"title",children:"Brand Recognition"}),Object(o.jsx)("div",{className:"desc",children:"Boost you brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content."})]}),Object(o.jsxs)("div",{className:"item",children:[Object(o.jsx)("img",{src:p,alt:""}),Object(o.jsx)("div",{className:"title",children:"Detail Records"}),Object(o.jsx)("div",{className:"desc",children:"Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."})]}),Object(o.jsxs)("div",{className:"item",children:[Object(o.jsx)("img",{src:N,alt:""}),Object(o.jsx)("div",{className:"title",children:"Fully Customizable"}),Object(o.jsx)("div",{className:"desc",children:"Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."})]})]})})]})},k=s.p+"static/media/icon-facebook.229c75a0.svg",y=s.p+"static/media/icon-instagram.df587328.svg",S=s.p+"static/media/icon-twitter.1d5c6d5e.svg",w=s.p+"static/media/icon-pinterest.a2d25ab4.svg",C=function(){return Object(o.jsxs)("div",{className:"Footer",children:[Object(o.jsx)("div",{className:"logo",children:Object(o.jsxs)("div",{className:"text-container",children:[Object(o.jsx)("div",{className:"title",children:"Boost your links today"}),Object(o.jsx)("input",{type:"button",value:"Get Started"})]})}),Object(o.jsxs)("div",{className:"footer-links",children:[Object(o.jsx)("div",{className:"link-logo",children:Object(o.jsx)("img",{src:r,alt:""})}),Object(o.jsxs)("div",{className:"links",children:[Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{className:"headings",children:"Features"}),Object(o.jsx)("li",{children:"Link Shortening"}),Object(o.jsx)("li",{children:"Branded Links"}),Object(o.jsx)("li",{children:"Analytics"})]}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{className:"headings",children:"Resources"}),Object(o.jsx)("li",{children:"Blog"}),Object(o.jsx)("li",{children:"Developers"}),Object(o.jsx)("li",{children:"support"})]}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{className:"headings",children:"Company"}),Object(o.jsx)("li",{children:"About"}),Object(o.jsx)("li",{children:"Our Team"}),Object(o.jsx)("li",{children:"Careers"}),Object(o.jsx)("li",{children:"Contact"})]})]}),Object(o.jsx)("div",{className:"social-links",children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)("img",{src:k,alt:""})}),Object(o.jsx)("li",{children:Object(o.jsx)("img",{src:S,alt:""})}),Object(o.jsx)("li",{children:Object(o.jsx)("img",{src:w,alt:""})}),Object(o.jsx)("li",{children:Object(o.jsx)("img",{src:y,alt:""})})]})})]})]})};var B=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(d,{}),Object(o.jsx)(h,{}),Object(o.jsx)(g,{}),Object(o.jsx)(f,{}),Object(o.jsx)(C,{})]})},_=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,17)).then((function(t){var s=t.getCLS,c=t.getFID,i=t.getFCP,n=t.getLCP,a=t.getTTFB;s(e),c(e),i(e),n(e),a(e)}))};a.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(B,{})}),document.getElementById("root")),_()}},[[16,1,2]]]);
//# sourceMappingURL=main.d8b6d068.chunk.js.map
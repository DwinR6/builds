(this["webpackJsonp01-react-app"]=this["webpackJsonp01-react-app"]||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(1),c=n(7),i=n.n(c),s=n(2),o=n(10),u=n(8),j=function(e){var t=e.setCategories,n=Object(r.useState)(""),c=Object(s.a)(n,2),i=c[0],u=c[1];return Object(a.jsx)("form",{onSubmit:function(e){e.preventDefault(),i.trim().length>2&&(t((function(e){return[i].concat(Object(o.a)(e))})),u(""))},children:Object(a.jsx)("input",{type:"text",value:i,onChange:function(e){u(e.target.value)}})})};j.prototype={setCategories:n.n(u).a.func.isRequired};var d=n(11),l=n(6),p=n.n(l),b=n(9),f=function(){var e=Object(b.a)(p.a.mark((function e(t){var n,a,r,c,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?limit=10&api_key=XfLL1z17YcRPXfPDYj0hdSv86TQpVr9P&q="+encodeURI(t),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return r=e.sent,c=r.data,i=c.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),console.log(i),e.abrupt("return",i);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(e){var t=e.id,n=e.title,r=e.url;return console.log(t,r,n),Object(a.jsxs)("div",{className:"card animate_animated animate__flash",children:[Object(a.jsx)("img",{src:r,alt:n}),Object(a.jsxs)("p",{children:[" ",n," "]})]})},h=function(e){var t=e.category,n=function(e){var t=Object(r.useState)({data:[],loading:!0}),n=Object(s.a)(t,2),a=n[0],c=n[1];return Object(r.useEffect)((function(){f(e).then((function(e){c({data:e,loading:!1})}))}),[e]),a}(t),c=n.data,i=n.loading;return console.log(i),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("h3",{children:[" ",t," "]}),i&&Object(a.jsx)("p",{className:"animate_animated animate__flash",children:" Loading "}),Object(a.jsx)("div",{className:"card-grid animate_animated animate__bounce",children:c.map((function(e){return Object(a.jsx)(m,Object(d.a)({},e),e.id)}))})]})},O=function(){var e=Object(r.useState)(["Fairy Tail"]),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{children:"Gif Expert App "}),Object(a.jsx)(j,{setCategories:c}),Object(a.jsx)("hr",{}),Object(a.jsx)("ol",{children:n.map((function(e){return Object(a.jsx)(h,{category:e},e)}))})]})};n(20);i.a.render(Object(a.jsx)(O,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.623be75a.chunk.js.map
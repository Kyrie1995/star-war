(this["webpackJsonpstart-war"]=this["webpackJsonpstart-war"]||[]).push([[0],{17:function(e,a,t){e.exports=t(40)},40:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(15),c=t.n(l),i=t(3),s=t.n(i),m=t(4),u=t(16),o=t(2),p=t(5),E=t.n(p);var d=function(e){var a=e.nameLists,t=e.currentPage,n=e.itemsPerPage,l=e.loading,c=e.dispatch;if(l)return r.a.createElement("div",null,"Loading...");var i=t*n,s=i-n,m=a.slice(s,i);return r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Name"),r.a.createElement("th",{scope:"col"},"Height"),r.a.createElement("th",{scope:"col"},"Mass"))),r.a.createElement("tbody",null,m.map((function(e){return r.a.createElement("tr",{key:e.name},r.a.createElement("td",null,r.a.createElement("a",{onClick:function(){return c({type:"DISPLAY",payload:e})}},e.name)),r.a.createElement("td",null,e.height),r.a.createElement("td",null,e.mass))}))))};var f=function(e){var a=e.currentPage,t=e.dispatch,n=e.itemsPerPage,l=e.total-a*n;return r.a.createElement("nav",{"aria-label":"Page navigation example"},r.a.createElement("ul",{className:"pagination justify-content-end"},1===a?r.a.createElement("li",{className:"page-item disabled"},r.a.createElement("a",{onClick:function(){return t({type:"PREV_PAGE"})},className:"page-link","aria-label":"Previous"},r.a.createElement("span",{"aria-hidden":"true"},"\xab"))):r.a.createElement("li",{className:"page-item"},r.a.createElement("a",{onClick:function(){return t({type:"PREV_PAGE"})},className:"page-link","aria-label":"Previous"},r.a.createElement("span",{"aria-hidden":"true"},"\xab"))),r.a.createElement("li",{className:"page-item disabled"},r.a.createElement("a",{className:"page-link",href:"#","aria-disabled":"true"},a)),l>=0?r.a.createElement("li",{className:"page-item"},r.a.createElement("a",{onClick:function(){return t({type:"NEXT_PAGE"})},className:"page-link","aria-label":"Next"},r.a.createElement("span",{"aria-hidden":"true"},"\xbb"))):r.a.createElement("li",{className:"page-item disabled"},r.a.createElement("a",{onClick:function(){return t({type:"NEXT_PAGE"})},className:"page-link",href:"!#","aria-label":"Next"},r.a.createElement("span",{"aria-hidden":"true"},"\xbb")))))};var g=function(e){var a=e.currentPerson;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h1",{className:"text-primary mb-3"},"Details")),r.a.createElement("ul",{className:"list-inline"},r.a.createElement("li",{className:"list-inline-item font-weight-bold"},"Name:"),r.a.createElement("li",{className:"list-inline-item"},a.name)),r.a.createElement("ul",{className:"list-inline"},r.a.createElement("li",{className:"list-inline-item font-weight-bold"},"Birth year:"),r.a.createElement("li",{className:"list-inline-item"},a.birthYear)),r.a.createElement("ul",{className:"list-inline"},r.a.createElement("li",{className:"list-inline-item font-weight-bold"},"Gender:"),r.a.createElement("li",{className:"list-inline-item"},a.gender)),r.a.createElement("ul",{className:"list-inline"},r.a.createElement("li",{className:"list-inline-item font-weight-bold"},"List of films:"),r.a.createElement("ul",{className:"list-unstyled"},a.films.map((function(e){return r.a.createElement("li",{key:e},e)})))))},P={data:{},loading:!0,itemsPerPage:3,currentPage:1,currentPerson:{name:"",birthYear:"",gender:"",filmLinks:[],films:[]}};function h(e,a){switch(a.type){case"FETCH_DATA":return Object(o.a)({},e,{data:a.payload,loading:!1});case"PREV_PAGE":return Object(o.a)({},e,{currentPage:e.currentPage-1});case"NEXT_PAGE":return Object(o.a)({},e,{currentPage:e.currentPage+1});case"DISPLAY":return Object(o.a)({},e,{currentPerson:Object(o.a)({},e.currentPerson,{name:a.payload.name,birthYear:a.payload.birth_year,gender:a.payload.gender,filmLinks:a.payload.films})});case"FETCH_FILMS":return Object(o.a)({},e,{currentPerson:Object(o.a)({},e.currentPerson,{films:a.payload})});default:return e}}var b=function(){var e=Object(n.useReducer)(h,P),a=Object(u.a)(e,2),t=a[0],l=a[1];return Object(n.useEffect)((function(){(function(){var e=Object(m.a)(s.a.mark((function e(){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("https://swapi.co/api/people/");case 2:a=e.sent,l({type:"FETCH_DATA",payload:a.data});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(n.useEffect)((function(){var e=function(){var e=Object(m.a)(s.a.mark((function e(a){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get(a);case 2:return t=e.sent,e.abrupt("return",t.data.title);case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();if(t.currentPerson.name){var a=[];t.currentPerson.filmLinks.forEach((function(t){var n=e(t);a.push(n)})),function(){var e=Object(m.a)(s.a.mark((function e(a){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(a);case 2:t=e.sent,l({type:"FETCH_FILMS",payload:t});case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()(a),console.log(t.currentPerson)}}),[t.currentPerson.name]),r.a.createElement("div",{className:"container mt-5"},r.a.createElement("h1",{className:"text-primary mb-3"},"Star War"),r.a.createElement(d,{currentPage:t.currentPage,itemsPerPage:t.itemsPerPage,nameLists:t.data.results,loading:t.loading,dispatch:l}),r.a.createElement(f,{currentPage:t.currentPage,dispatch:l,itemsPerPage:t.itemsPerPage,total:t.data.results?t.data.results.length:0}),r.a.createElement(g,{currentPerson:t.currentPerson}))};c.a.render(r.a.createElement(b,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.ff0518c4.chunk.js.map
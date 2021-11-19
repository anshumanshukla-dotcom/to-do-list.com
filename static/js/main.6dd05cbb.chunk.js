(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],{25:function(e,t,c){},26:function(e,t,c){},37:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),o=c(17),r=c.n(o),n=(c(25),c(20)),l=c(8),i=(c(26),c(9)),d=c(0);function b(e){return Object(d.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-".concat(e.mode),children:Object(d.jsxs)("div",{className:"container-fluid",children:[Object(d.jsx)(i.b,{className:"navbar-brand",to:"/",children:e.title}),Object(d.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(d.jsx)("span",{className:"navbar-toggler-icon"})}),Object(d.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(d.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(i.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Home"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(i.b,{className:"nav-link",to:"/about",children:"About"})})]}),e.searchBar?Object(d.jsxs)("form",{className:"d-flex",children:[Object(d.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(d.jsx)("button",{className:"btn btn-outline-success",type:"submit",children:"Search"})]}):"",Object(d.jsxs)("div",{className:"form-check form-switch text-".concat((e.mode,"light")),children:[Object(d.jsx)("input",{className:"form-check-input",style:{cursor:"pointer"},onClick:e.toggleMode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault","data-bs-toggle":"tooltip","data-bs-placement":"bottom",title:"Toggle dark theme"}),Object(d.jsxs)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",style:{cursor:"pointer"},children:["primary"===e.mode?"Enable":"Disable"," Dark Mode"]})]})]})]})})}b.defaultProps={title:"Your Title Here",searchBar:!0};var j=function(e){var t=e.todo,c=e.onDelete,a=e.mode;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h4",{children:t.title}),Object(d.jsx)("p",{children:t.desc}),Object(d.jsxs)("div",{className:"form-check",children:[Object(d.jsx)("input",{className:"form-check-input",type:"checkbox",value:"",id:"defaultCheck1",style:{cursor:"pointer"},"data-bs-toggle":"tooltip","data-bs-placement":"top",title:"Mark/unmark as done/completed"}),Object(d.jsx)("label",{className:"form-check-label",htmlFor:"defaultCheck1",style:{cursor:"pointer",color:"primary"===a?"green":"gold"},children:"Mark as done or completed."})]}),Object(d.jsx)("button",{className:"btn btn-sm btn-danger my-3","data-bs-toggle":"tooltip","data-bs-placement":"bottom",title:"Delete a todo item",onClick:function(){c(t)},children:"Delete"})]}),Object(d.jsx)("hr",{})]})},m=function(e){document.title="To Do List | Home";return Object(d.jsxs)("div",{className:"container",style:{minHeight:"70vh",margin:"40px auto"},children:[Object(d.jsx)("h3",{className:"text-center my-3",style:{color:"primary"===e.mode?"blue":"white"},children:Object(d.jsx)("u",{children:"To Do List"})}),Object(d.jsx)("br",{}),0===e.todos.length?"Nothing to display. Try adding one!":e.todos.map((function(t){return Object(d.jsx)(j,{todo:t,onDelete:e.onDelete,mode:e.mode},t.sno)}))]})},h=function(){return Object(d.jsx)("footer",{className:"bg-dark text-light py-3",style:{position:"relative",top:"10vh",width:"100%",border:"2px solid red"},children:Object(d.jsx)("p",{className:"text-center",style:{paddingTop:"16px"},children:"Copyright \xa9 2020-2021 ToDoList.com"})})},u=function(e){var t=e.addTodo,c=e.mode,s=e.showAlert,o=Object(a.useState)(""),r=Object(l.a)(o,2),n=r[0],i=r[1],b=Object(a.useState)(""),j=Object(l.a)(b,2),m=j[0],h=j[1];return Object(d.jsxs)("div",{className:"container my-3",children:[Object(d.jsx)("h3",{className:"text-center",style:{color:"primary"===c?"blue":"white"},children:Object(d.jsx)("u",{children:"Add a Todo"})}),Object(d.jsx)("br",{}),Object(d.jsx)("div",{id:"emailHelp",className:"form-text",style:{color:"primary"===c?"red":"yellow"},children:"Fields marked with * are required."}),Object(d.jsx)("br",{}),Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),n&&m?(t(n,m),i(""),h(""),s("Your todo item has been added","success")):alert("Title or Description cannot be blank.")},children:[Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{htmlFor:"title",className:"form-label",children:Object(d.jsx)("b",{children:"Todo Title *"})}),Object(d.jsx)("input",{type:"text",value:n,onChange:function(e){return i(e.target.value)},className:"form-control",id:"title","aria-describedby":"emailHelp",placeholder:"Enter the title..."})]}),Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{htmlFor:"desc",className:"form-label",children:Object(d.jsx)("b",{children:"Todo Description *"})}),Object(d.jsx)("textarea",{value:m,onChange:function(e){return h(e.target.value)},className:"form-control",id:"desc",rows:"3",placeholder:"Enter the description..."})]}),Object(d.jsx)("button",{type:"submit",className:"btn btn-sm btn-".concat("primary"===c?"outline-secondary":"outline-success"),"data-bs-toggle":"tooltip","data-bs-placement":"bottom",title:"Add a todo item",children:"Add Todo"})]})]})},x=function(e){document.title="To Do List | About";return Object(d.jsxs)("div",{style:{minHeight:"70vh",margin:"0px 15px",fontSize:"20px"},children:[Object(d.jsx)("h1",{className:"text-center my-3",style:{color:"primary"===e.mode?"green":"white"},children:Object(d.jsx)("u",{children:"About Us"})}),Object(d.jsx)("br",{}),Object(d.jsxs)("p",{children:["Welcome!",Object(d.jsx)("br",{}),"We are constantly working towards improving our services.",Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),"Thanks for visiting."]})]})},p=c(2),O=c(19),g=c.n(O);var f=function(e){return e.alert&&Object(d.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(d.jsxs)("strong",{children:[function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type),"!"]})," ",e.alert.msg,"."]})};var v=function(){var e,t=Object(a.useState)(null),c=Object(l.a)(t,2),s=c[0],o=c[1],r=function(e,t){o({msg:e,type:t}),setTimeout((function(){o(null)}),1500)},j=Object(a.useState)("primary"),O=Object(l.a)(j,2),v=O[0],y=O[1];e=null===localStorage.getItem("todos")?[]:JSON.parse(localStorage.getItem("todos"));var N=function(e){w(D.filter((function(t){return t!==e}))),localStorage.setItem("todos",JSON.stringify(D)),r("Your todo item has been deleted","success")},k=function(e,t){var c={sno:0===D.length?0:D[D.length-1].sno+1,title:e,desc:t};w([].concat(Object(n.a)(D),[c]))},S=Object(a.useState)(e),T=Object(l.a)(S,2),D=T[0],w=T[1];return Object(a.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(D))}),[D]),Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(i.a,{children:[Object(d.jsx)(b,{title:"To Do List",searchBar:!1,mode:v,toggleMode:function(){"primary"===v?(y("dark"),document.body.style.backgroundColor="grey",r("Dark theme has been enabled","success")):(y("primary"),document.body.style.backgroundColor="pink",r("Light theme has been enabled","success"))}}),Object(d.jsx)(f,{alert:s}),Object(d.jsxs)(p.d,{children:[Object(d.jsx)(p.b,{exact:!0,path:"/",render:function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("div",{className:"text-center my-3",style:{color:"primary"===v?"#042743":"blue",fontSize:"3rem",paddingBottom:"2rem"},children:Object(d.jsx)(g.a,{options:{autoStart:!0,loop:!0,delay:40,strings:["Welcome to ToDoList.com!","Hope you are doing good.","Have fun with us :)"]}})})}),Object(d.jsx)(u,{addTodo:k,mode:v,showAlert:r}),Object(d.jsx)(m,{todos:D,onDelete:N,mode:v})]})}}),Object(d.jsx)(p.b,{exact:!0,path:"/about",children:Object(d.jsx)(x,{mode:v})}),Object(d.jsx)(p.a,{to:"/"})]}),Object(d.jsx)(h,{})]})})},y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,38)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,o=t.getLCP,r=t.getTTFB;c(e),a(e),s(e),o(e),r(e)}))};r.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root")),y()}},[[37,1,2]]]);
//# sourceMappingURL=main.6dd05cbb.chunk.js.map
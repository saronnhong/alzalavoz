(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,n){e.exports=n(41)},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(10),o=n.n(l),c=n(11),i=n(12),s=n(14),u=n(13),m=n(15);var d=function(e){var t=e.children;return r.a.createElement("div",{style:{height:300,clear:"both",paddingTop:120,textAlign:"center"},className:"jumbotron"},t)},f=n(2),E=n.n(f),b={getBooks:function(){return E.a.get("/api/books")},getBook:function(e){return E.a.get("/api/books/"+e)},deleteBook:function(e){return E.a.delete("/api/books/"+e)},saveBook:function(e){return E.a.post("/api/books",e)}};n(39);var h=function(e){return r.a.createElement("span",Object.assign({className:"delete-btn"},e,{role:"button",tabIndex:"0"}),"\u2717")};function p(e){var t=e.fluid,n=e.children;return r.a.createElement("div",{className:"container".concat(t?"-fluid":"")},n)}function v(e){var t=e.fluid,n=e.children;return r.a.createElement("div",{className:"row".concat(t?"-fluid":"")},n)}function g(e){var t=e.size,n=e.children;return r.a.createElement("div",{className:t.split(" ").map(function(e){return"col-"+e}).join(" ")},n)}n(40);function k(e){var t=e.children;return r.a.createElement("div",{className:"list-overflow-container"},r.a.createElement("ul",{className:"list-group"},t))}function N(e){var t=e.children;return r.a.createElement("li",{className:"list-group-item"},t)}function y(e){return r.a.createElement("div",{className:"form-group"},r.a.createElement("input",Object.assign({className:"form-control"},e)))}function B(e){return r.a.createElement("div",{className:"form-group"},r.a.createElement("textarea",Object.assign({className:"form-control",rows:"20"},e)))}function j(e){return r.a.createElement("button",Object.assign({},e,{style:{float:"right",marginBottom:10},className:"btn btn-success"}),e.children)}var O=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={books:[]},n.loadBooks=function(){b.getBooks().then(function(e){return n.setState({books:e.data})}).catch(function(e){return console.log(e)})},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.loadBooks()}},{key:"render",value:function(){return r.a.createElement(p,{fluid:!0},r.a.createElement(v,null,r.a.createElement(g,{size:"md-6"},r.a.createElement(d,null,r.a.createElement("h1",null,"What Books Should I Read?")),r.a.createElement("form",null,r.a.createElement(y,{name:"title",placeholder:"Title (required)"}),r.a.createElement(y,{name:"author",placeholder:"Author (required)"}),r.a.createElement(B,{name:"synopsis",placeholder:"Synopsis (Optional)"}),r.a.createElement(j,null,"Submit Book"))),r.a.createElement(g,{size:"md-6 sm-12"},r.a.createElement(d,null,r.a.createElement("h1",null,"Books On My List")),this.state.books.length?r.a.createElement(k,null,this.state.books.map(function(e){return r.a.createElement(N,{key:e._id},r.a.createElement("a",{href:"/books/"+e._id},r.a.createElement("strong",null,e.title," by ",e.author)),r.a.createElement(h,null))})):r.a.createElement("h3",null,"No Results to Display"))))}}]),t}(a.Component);var w=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},r.a.createElement("a",{className:"navbar-brand",href:"/"},"React Reading List"))};var x=function(){return r.a.createElement("div",null,r.a.createElement(w,null),r.a.createElement(O,null))};o.a.render(r.a.createElement(x,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.90b38b7d.chunk.js.map
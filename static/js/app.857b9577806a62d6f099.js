webpackJsonp([0],{"+j6i":function(t,a,e){t.exports=e.p+"static/img/img4.8cd3818.jpg"},"+qLM":function(t,a){},"2yK3":function(t,a,e){t.exports=e.p+"static/img/img1.a99eebf.jpg"},"40YK":function(t,a,e){t.exports=e.p+"static/img/img8.9949827.jpg"},"5HTD":function(t,a,e){t.exports=e.p+"static/img/img1.8c53038.jpg"},"6nAR":function(t,a,e){t.exports=e.p+"static/img/img0.243b45b.jpg"},"9M+g":function(t,a){},"9kZK":function(t,a,e){t.exports=e.p+"static/img/img1.6d9d723.jpg"},A6cB:function(t,a,e){t.exports=e.p+"static/img/img2.183d667.jpg"},DDg8:function(t,a,e){var i={"./blog1/img0.jpg":"Jmx3","./blog1/img1.jpg":"2yK3","./blog1/img10.jpg":"da5n","./blog1/img11.jpg":"ME1o","./blog1/img12.jpg":"atdF","./blog1/img13.jpg":"rHrv","./blog1/img14.jpg":"XXX1","./blog1/img2.jpg":"A6cB","./blog1/img3.jpg":"RG3T","./blog1/img4.jpg":"+j6i","./blog1/img5.jpg":"M7cM","./blog1/img6.jpg":"voHB","./blog1/img7.jpg":"WSMS","./blog1/img8.jpg":"40YK","./blog1/img9.jpg":"tOkx","./blog2/img0.jpg":"6nAR","./blog2/img1.jpg":"5HTD"};function n(t){return e(o(t))}function o(t){var a=i[t];if(!(a+1))throw new Error("Cannot find module '"+t+"'.");return a}n.keys=function(){return Object.keys(i)},n.resolve=o,t.exports=n,n.id="DDg8"},Gij7:function(t,a,e){t.exports=e.p+"static/img/square-skills.2de0e2b.png"},Jmt5:function(t,a){},Jmx3:function(t,a,e){t.exports=e.p+"static/img/img0.c0adeaa.jpg"},KXAK:function(t,a,e){t.exports=e.p+"static/img/square-business.8fb6a5d.png"},Kmes:function(t,a,e){t.exports=e.p+"static/img/img2.c6f6a65.jpg"},LIaF:function(t,a,e){t.exports=e.p+"static/img/square-blog.8a36905.png"},M7cM:function(t,a,e){t.exports=e.p+"static/img/img5.4e9387e.jpg"},ME1o:function(t,a,e){t.exports=e.p+"static/img/img11.194e9e5.jpg"},NHnr:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e("7+uW"),n=e("Tqaz");i.default.use(n.f);var o={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"navbar"}},[e("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"info"}},[e("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),t._v(" "),e("b-collapse",{attrs:{id:"nav-collapse","is-nav":"",align:"right"}},[e("b-navbar-nav",{staticClass:"ml-auto"},[e("b-nav-item",{attrs:{href:"/"}},[t._v("Portfolio")]),t._v(" "),e("b-nav-item",{attrs:{href:"#/project"}},[t._v("Project")]),t._v(" "),e("b-nav-item",{attrs:{href:"#/blog"}},[t._v("Blog")]),t._v(" "),e("b-nav-item",{attrs:{href:"#/comingsoon"}},[t._v("Business and Pricings")]),t._v(" "),e("b-nav-item",{attrs:{href:"#/contact"}},[t._v("Contact")])],1)],1)],1)],1)},staticRenderFns:[]};var r=e("VU/8")({name:"navbar",components:{}},o,!1,function(t){e("cXBb")},null,null).exports,s=e("yGkR"),c=(e("881v"),s.a.initializeApp({apiKey:"AIzaSyCoNpRoQ8YJFkr_oK7CBjy6SL9FDD5vKk4",authDomain:"portfolio-9f6aa.firebaseapp.com",projectId:"portfolio-9f6aa",storageBucket:"portfolio-9f6aa.appspot.com",messagingSenderId:"595989623435",appId:"1:595989623435:web:6dba501274d6d8eb8e9a8e",measurementId:"G-2Y3ZWL3KKD"}).firestore());i.default.use(n.e);var l={name:"footer-sec",data:function(){return{contact_info:[],loading:!0,doc_id:"RAVqGWKerLwJRVJyBVXf"}},created:function(){var t=this;c.collection("personal_details").doc(this.doc_id).collection("contacts").get().then(function(a){t.loading=!1,a.forEach(function(a){var e={email_address:a.data().email_address,github:a.data().github,linkedin:a.data().linkedin,social_media:a.data().social_media,phone:a.data().phone};t.contact_info.push(e)})})}},d={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"footer-sec"}},[e("b-container",{staticClass:"bv-example-row"},[e("b-row",[e("b-col",{attrs:{cols:"10"}}),t._v(" "),e("b-col",{attrs:{cols:"2",id:"connect"}},t._l(t.contact_info,function(a){return e("div",{key:a.id},[e("a",{staticClass:"fa fa-linkedin-square",attrs:{href:"https://uk.linkedin.com/in/jia-mei-grace-lim-0a17a0193?trk=profile-badge"}}),t._v(" "),e("a",{staticClass:"fa fa-facebook-official",attrs:{href:"https://www.facebook.com/jiamei.pisces/"}}),t._v(" "),e("a",{staticClass:"fa fa-github",attrs:{href:"https://github.com/ljmgrace"}})])}),0)],1),t._v(" "),e("b-row",[e("b-col",{attrs:{cols:"7",id:"license"}},[t._v("Copyright (c) 2021 ljmgrace - MIT License")])],1)],1)],1)},staticRenderFns:[]};var p={name:"App",components:{Navbar:r,Footer:e("VU/8")(l,d,!1,function(t){e("rB9n")},null,null).exports}},g={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",[a("Navbar"),this._v(" "),a("div",{staticClass:"container"},[a("router-view")],1),this._v(" "),a("Footer")],1)])},staticRenderFns:[]},u=e("VU/8")(p,g,!1,null,null,null).exports,m=e("/ocq"),_={name:"about",data:function(){return{description_arr:[],loading:!0}},created:function(){var t=this;c.collection("personal_details").doc("RAVqGWKerLwJRVJyBVXf").collection("about").get().then(function(a){t.loading=!1,a.forEach(function(a){var e={description:a.data().description};t.description_arr.push(e.description)})})}},f={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"about"}},[e("h2",[t._v("About")]),t._v(" "),t._l(t.description_arr[0],function(a,i){return e("div",{key:i,staticClass:"container"},[e("p",[t._v(t._s(a))])])})],2)},staticRenderFns:[]};var b=e("VU/8")(_,f,!1,function(t){e("UWTn")},null,null).exports;i.default.use(n.c),i.default.use(n.b);var v={name:"project",data:function(){return{project_id:null,project_academic_arr:[],project_nonacademic_arr:[],flag_employment:[],flag_project:[],loading:!0,doc_id:"RAVqGWKerLwJRVJyBVXf"}},created:function(){var t=this;c.collection("personal_details").doc("RAVqGWKerLwJRVJyBVXf").collection("projects").get().then(function(a){t.loading=!1,a.forEach(function(a){var e={project_id:a.data().project_id,project_name:a.data().project_name,description:a.data().description,employment:a.data().employment,flag:a.data().flag};1==e.flag?t.project_nonacademic_arr.push(e):t.project_academic_arr.push(e)})})},methods:{getImgUrl:function(t){return e("lYxm")("./img"+t+".jpg")}}},h={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"project"}},[e("h3",[t._v("Projects")]),t._v(" "),e("div",{staticClass:"card-proj"},[e("h4",[t._v("Academic")]),t._v(" "),t._l(t.project_academic_arr,function(a){return e("b-card-group",{key:a.id,attrs:{deck:""}},[e("b-card",{attrs:{title:a.project_name,"img-src":t.getImgUrl(a.project_id),"img-alt":"Card image","img-top":""}},[e("router-link",{attrs:{to:{name:"ViewProject",params:{project_id:a.project_id}}}},[e("b-button",[t._v("Read more...")])],1)],1)],1)})],2),t._v(" "),e("div",{staticClass:"card-proj"},[e("h4",[t._v("Non-Academic")]),t._v(" "),t._l(t.project_nonacademic_arr,function(a){return e("b-card-group",{key:a.id,attrs:{deck:""}},[e("b-card",{attrs:{title:a.project_name,"img-src":t.getImgUrl(a.project_id),"img-alt":"Card image","img-top":""}},[e("router-link",{attrs:{to:{name:"ViewProject",params:{project_id:a.project_id}}}},[e("b-button",[t._v("Read more...")])],1)],1)],1)})],2)])},staticRenderFns:[]};var j=e("VU/8")(v,h,!1,function(t){e("f1EP")},null,null).exports,y={name:"blog",data:function(){return{blog_arr:[],loading:!0,doc_id:"RAVqGWKerLwJRVJyBVXf"}},created:function(){var t=this;c.collection("personal_details").doc("RAVqGWKerLwJRVJyBVXf").collection("blogs").get().then(function(a){t.loading=!1,a.forEach(function(a){var e={blog_id:a.data().blog_id,title:a.data().title,description:a.data().description};t.blog_arr.push(e)})})}},k={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"accordion",attrs:{id:"blog",role:"tablist"}},[e("h3",[t._v("Blog")]),t._v(" "),e("b-card",{staticClass:"mb-1",attrs:{"no-body":""}},[e("b-card-header",{staticClass:"p-1",attrs:{"header-tag":"header",role:"tab"}},[e("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-1",modifiers:{"accordion-1":!0}}],attrs:{block:"",variant:"info"}},[t._v(t._s(t.blog_arr[0].title))])],1),t._v(" "),e("b-collapse",{attrs:{id:"accordion-1",visible:"",accordion:"my-accordion",role:"tabpanel"}},[e("b-card-body",[e("b-card-text",[t._v(t._s(t.blog_arr[0].description))]),t._v(" "),e("router-link",{attrs:{to:{name:"ViewBlog",params:{blog_id:t.blog_arr[0].blog_id}}}},[e("b-button",[t._v("Read more...")])],1)],1)],1)],1),t._v(" "),e("b-card",{staticClass:"mb-1",attrs:{"no-body":""}},[e("b-card-header",{staticClass:"p-1",attrs:{"header-tag":"header",role:"tab"}},[e("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-2",modifiers:{"accordion-2":!0}}],attrs:{block:"",variant:"info"}},[t._v(t._s(t.blog_arr[1].title))])],1),t._v(" "),e("b-collapse",{attrs:{id:"accordion-2",accordion:"my-accordion",role:"tabpanel"}},[e("b-card-body",[e("b-card-text",[t._v(t._s(t.blog_arr[1].description))]),t._v(" "),e("router-link",{attrs:{to:{name:"ViewBlog",params:{blog_id:t.blog_arr[1].blog_id}}}},[e("b-button",[t._v("Read more...")])],1)],1)],1)],1),t._v(" "),e("b-card",{staticClass:"mb-1",attrs:{"no-body":""}},[e("b-card-header",{staticClass:"p-1",attrs:{"header-tag":"header",role:"tab"}},[e("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-3",modifiers:{"accordion-3":!0}}],attrs:{block:"",variant:"info"}},[t._v(t._s(t.blog_arr[2].title))])],1),t._v(" "),e("b-collapse",{attrs:{id:"accordion-3",accordion:"my-accordion",role:"tabpanel"}},[e("b-card-body",[e("b-card-text",[t._v(t._s(t.blog_arr[2].description))]),t._v(" "),e("router-link",{attrs:{to:{name:"ViewBlog",params:{blog_id:t.blog_arr[2].blog_id}}}},[e("b-button",[t._v("Read more...")])],1)],1)],1)],1)],1)},staticRenderFns:[]};var w=e("VU/8")(y,k,!1,function(t){e("Nbwg")},null,null).exports,V={name:"Portfolio",components:{About:b,Project:j,Blog:w}},x={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"portfolio"}},[e("div",[e("About"),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3)],1)])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("a",{attrs:{href:"#/project",id:"sq2"}},[a("img",{attrs:{src:e("m/Xp")}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("a",{attrs:{href:"#/blog",id:"sq3"}},[a("img",{attrs:{src:e("LIaF")}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("a",{attrs:{href:"#/comingsoon",id:"sq1"}},[a("img",{attrs:{src:e("KXAK")}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("a",{attrs:{href:"#/comingsoon",id:"sq4"}},[a("img",{attrs:{src:e("Gij7")}})])}]};var R=e("VU/8")(V,x,!1,function(t){e("cnwx")},null,null).exports;i.default.use(n.c);var C={name:"viewdata",data:function(){return{title:null,paragraphs:null,subsections:null,subsubsections:null,imgs:null,links:null,blog_size:0,blog_arr:[],loading:!0}},beforeRouteEnter:function(t,a,e){c.collection("personal_details").doc("RAVqGWKerLwJRVJyBVXf").collection("blogs").where("blog_id","==",t.params.blog_id).get().then(function(t){t.forEach(function(t){e(function(a){a.title=t.data().title,a.paragraphs=t.data().paragraphs,a.subsections=t.data().subsections,a.subsubsections=t.data().subsubsections,a.imgs=t.data().imgs,a.links=t.data().links,a.blog_size=t.data().blog_size})})})},watch:{$route:"fetchData"},methods:{fetchData:function(){var t=this;c.collection("personal_details").doc("RAVqGWKerLwJRVJyBVXf").collection("blogs").where("blog_id","==",this.$route.params.blog_id).get().then(function(a){a.forEach(function(a){t.title=a.data().title,t.paragraphs=a.data().paragraphs,t.subsections=a.data().subsections,t.subsubsections=a.data().subsubsections,t.imgs=a.data().imgs,t.links=a.data().links,t.blog_size=a.data().blog_size})})},sort_arr:function(){var t=[];console.log(this.blog_size);for(var a=0;a<this.blog_size;a++)""==this.subsections[a]&&(this.subsections[a]=null),""==this.subsubsections[a]&&(this.subsubsections[a]=null),""==this.imgs[a]&&(this.imgs[a]=null),""==this.paragraphs[a]&&(this.paragraphs[a]=null),t[a]=[this.subsections[a],this.subsubsections[a],this.imgs[a],this.paragraphs[a]];return t},getImgUrl:function(t){return e("DDg8")("./blog"+this.$route.params.blog_id+"/img"+t+".jpg")}},mounted:function(){this.blog_arr=this.sort_arr()}},E={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"viewdata"}},[e("h2",[t._v(t._s(t.title))]),t._v(" "),t._l(t.blog_arr,function(a,i){return e("div",{key:i,staticClass:"container"},[a[0]?e("div",[e("h4",[t._v(t._s(a[0]))])]):t._e(),t._v(" "),a[1]?e("div",[e("h5",[t._v(t._s(a[1]))])]):t._e(),t._v(" "),a[3]?e("div",[e("p",[t._v(t._s(a[3]))])]):t._e(),t._v(" "),a[2]?e("div",[e("img",{attrs:{src:t.getImgUrl(a[2]),alt:a[2]}})]):t._e()])}),t._v(" "),t.links?e("div",{staticClass:"container"},[e("h5",[t._v("Links to Check Out")]),t._v(" "),e("ul",t._l(t.links,function(a){return e("li",{key:a},[e("div",[t._v(t._s(a))])])}),0)]):t._e()],2)},staticRenderFns:[]};var A=e("VU/8")(C,E,!1,function(t){e("iVJA")},null,null).exports;i.default.use(n.c);var J={name:"business",data:function(){return{businesses:[],loading:!0,doc_id:"RAVqGWKerLwJRVJyBVXf"}},created:function(){var t=this;c.collection("personal_details").doc(this.doc_id).collection("business").get().then(function(a){t.loading=!1,a.forEach(function(a){var e={product:a.data().product,description:a.data().description,note:a.data().note,prices:a.data().prices};t.businesses.push(e)})})}},B={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"business"}},[e("h3",[t._v("Business and Pricing")]),t._v(" "),t._l(t.businesses,function(a){return e("div",{key:a.id,attrs:{div:""}},[e("b-card",{staticClass:"mb-2",staticStyle:{"max-width":"20rem"},attrs:{title:a.product,"img-src":"https://picsum.photos/600/300/?image=25","img-alt":"Image","img-top":"",tag:"article"}},[e("b-card-text",[t._v(t._s(a.description))]),t._v(" "),e("b-button",{attrs:{href:"#",variant:"primary"}},[t._v("See Pricings")])],1)],1)})],2)},staticRenderFns:[]},K=e("VU/8")(J,B,!1,null,null,null).exports,q={name:"pricing",data:function(){return{contact_info:[],loading:!0,doc_id:"RAVqGWKerLwJRVJyBVXf"}},created:function(){var t=this;c.collection("personal_details").doc(this.doc_id).collection("business").get().then(function(a){t.loading=!1,a.forEach(function(a){var e={id:a.id,product:a.data().product,description:a.data().description,note:a.data().note,prices:a.data().prices};t.contact_info.push(e)})})}},X={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"accordion",attrs:{id:"pricing",role:"tablist"}},[e("h3",[t._v("Pricing")]),t._v(" "),e("div",[e("b-card",{staticClass:"mb-2",staticStyle:{"max-width":"20rem"},attrs:{title:"Portfolio Website","img-src":"https://picsum.photos/600/300/?image=25","img-alt":"Image","img-top":"",tag:"article"}},[e("b-card-text",[t._v("\n        Some quick example text to build on the card title and make up the bulk of the card's content.\n      ")]),t._v(" "),e("b-button",{attrs:{href:"#",variant:"primary"}},[t._v("See Pricings")])],1)],1),t._v(" "),e("b-card",{staticClass:"mb-1",attrs:{"no-body":""}},[e("b-card-header",{staticClass:"p-1",attrs:{"header-tag":"header",role:"tab"}},[e("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-1",modifiers:{"accordion-1":!0}}],attrs:{block:"",variant:"info"}},[t._v("Accordion 1")])],1),t._v(" "),e("b-collapse",{attrs:{id:"accordion-1",visible:"",accordion:"my-accordion",role:"tabpanel"}},[e("b-card-body",[e("b-card-text",[t._v("I start opened because "),e("code",[t._v("visible")]),t._v(" is "),e("code",[t._v("true")])]),t._v(" "),e("b-card-text",[t._v(t._s(t.text))])],1)],1)],1)],1)},staticRenderFns:[]},F=e("VU/8")(q,X,!1,null,null,null).exports,L={name:"view-project",data:function(){return{project_id:null,project_name:null,organisation:null,year:null,flag:null,employment:null,description:null,category:null,project_arr:[],flag_project_arr:[],loading:!0}},beforeRouteEnter:function(t,a,e){c.collection("personal_details").doc("RAVqGWKerLwJRVJyBVXf").collection("projects").where("project_id","==",t.params.project_id).get().then(function(t){t.forEach(function(t){e(function(a){a.project_id=t.data().project_id,a.project_name=t.data().project_name,a.organisation=t.data().organisation,a.year=t.data().year,a.flag=t.data().flag,a.employment=t.data().employment,a.description=t.data().description,a.category=t.data().category,""==a.organisation?a.organisation=null:a.organisation="by "+a.organisation+" ",a.flag?a.flag="non-academic":a.flag="academic",1==a.employment?a.employment="part-time":2==a.employment?a.employment="full-time":a.employment="project-based"})})})},watch:{$route:"fetchData"},methods:{fetchData:function(){var t=this;c.collection("personal_details").doc("RAVqGWKerLwJRVJyBVXf").collection("projects").where("project_id","==",this.$route.params.project_id).get().then(function(a){a.forEach(function(a){t.project_id=a.data().project_id,t.project_name=a.data().project_name,t.organisation=a.data().organisation,t.year=a.data().year,t.flag=a.data().flag,t.employment=a.data().employment,t.description=a.data().description,t.category=a.data().category}),t.flag?t.flag="non-academic":t.flag="academic",1==t.employment?t.employment="part-time":2==t.employment?t.employment="full-time":t.employment="project-based"})}}},W={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"view-project"}},[e("h2",[t._v(t._s(t.project_name))]),t._v(" "),e("h4",[t._v(t._s(t.organisation)+"("+t._s(t.year)+")")]),t._v(" "),e("div",{staticClass:"container"},[e("b-badge",{attrs:{pill:"",variant:"light"}},[t._v(t._s(t.flag))]),t._v(" "),e("b-badge",{attrs:{pill:"",variant:"light"}},[t._v(t._s(t.employment))]),t._v(" "),e("div",{attrs:{id:"project-skills"}},[e("h5",[t._v("Skills Involved")]),t._v(" "),e("ul",t._l(t.category,function(a){return e("li",{key:a},[e("div",[t._v(t._s(a))])])}),0)]),t._v(" "),t._l(t.description,function(a,i){return e("div",{key:i},[e("p",[t._v(t._s(a))])])})],2)])},staticRenderFns:[]};var U=e("VU/8")(L,W,!1,function(t){e("el7W")},null,null).exports,$={name:"contact",data:function(){return{contact_info:[],loading:!0,doc_id:"RAVqGWKerLwJRVJyBVXf"}},created:function(){var t=this;c.collection("personal_details").doc(this.doc_id).collection("contacts").get().then(function(a){t.loading=!1,a.forEach(function(a){var e={id:a.id,email_address:a.data().email_address,github:a.data().github,linkedin:a.data().linkedin,social_media:a.data().social_media,phone:a.data().phone};t.contact_info.push(e)})})}},P={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"contact"}},[e("h3",[t._v("Contact Details")]),t._v(" "),t._l(t.contact_info,function(a){return e("div",{key:a.id},[e("p",[e("i",{staticClass:"fa fa-envelope"}),t._v(" Email: "+t._s(a.email_address))]),t._v(" "),e("p",[e("i",{staticClass:"fa fa-linkedin-square"}),t._v(" Linkedin: "+t._s(a.linkedin))]),t._v(" "),e("p",[e("i",{staticClass:"fa fa-github"}),t._v(" Github: "+t._s(a.github))]),t._v(" "),e("p",[e("i",{staticClass:"fa fa-whatsapp"}),t._v(" Whatsapp: "+t._s(a.phone[0])+", "+t._s(a.phone[1]))]),t._v(" "),e("p",[e("i",{staticClass:"fa fa-phone"}),t._v(" Mobile: (UK) "+t._s(a.phone[0])+", (MY) "+t._s(a.phone[1]))]),t._v(" "),e("p",[e("i",{staticClass:"fa fa-facebook-official"}),t._v(" Facebook: "+t._s(a.social_media.facebook))]),t._v(" "),e("p",[e("i",{staticClass:"fa fa-wechat"}),t._v(" Wechat: "+t._s(a.social_media.wechat))])])}),t._v(" "),e("iframe",{attrs:{src:"https://docs.google.com/forms/d/e/1FAIpQLSfUg36HqmeSehTF4i7MSBNHM4aCsECPooJZ4RLzOpiAuXJdlQ/viewform?embedded=true",width:"640",height:"1000",frameborder:"0",marginheight:"0",marginwidth:"0"}},[t._v("Loading…")])],2)},staticRenderFns:[]};var G=e("VU/8")($,P,!1,function(t){e("+qLM")},null,null).exports,S=e("Udoy"),I={components:{FlipCountdown:e.n(S).a},name:"coming",data:function(){return{}}},M={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"coming"}},[a("h4",[this._v("This section is coming soon! Stay Tunned!")]),this._v(" "),a("h5",[this._v("Thank you for your patience...")]),this._v(" "),a("div",[a("flip-countdown",{attrs:{deadline:"2021-08-01 00:00:00"}})],1)])},staticRenderFns:[]};var D=e("VU/8")(I,M,!1,function(t){e("zOVR")},null,null).exports;i.default.use(m.a);var z=new m.a({routes:[{path:"/",name:"Portfolio",component:R},{path:"/blog",name:"Blog",component:w},{path:"/blog/:blog_id",name:"ViewBlog",component:A},{path:"/business",name:"business",component:K},{path:"/business/:business_id",name:"Pricing",component:F},{path:"/project",name:"Project",component:j},{path:"/project/:project_id",name:"ViewProject",component:U},{path:"/contact",name:"Contact",component:G},{path:"/comingsoon",name:"ComingSoon",component:D}]});e("Jmt5"),e("9M+g"),e("griA");i.default.use(n.a),i.default.use(n.d),i.default.config.productionTip=!1,new i.default({el:"#app",router:z,components:{App:u},template:"<App/>"})},Nbwg:function(t,a){},RG3T:function(t,a,e){t.exports=e.p+"static/img/img3.7933e2f.jpg"},UWTn:function(t,a){},WSMS:function(t,a,e){t.exports=e.p+"static/img/img7.5b85b51.jpg"},XXX1:function(t,a,e){t.exports=e.p+"static/img/img14.da67a94.jpg"},aC24:function(t,a,e){t.exports=e.p+"static/img/img4.6385508.jpg"},atdF:function(t,a,e){t.exports=e.p+"static/img/img12.9878f54.jpg"},cXBb:function(t,a){},cnwx:function(t,a){},da5n:function(t,a,e){t.exports=e.p+"static/img/img10.0931e1e.jpg"},el7W:function(t,a){},f1EP:function(t,a){},griA:function(t,a){},iSnO:function(t,a,e){t.exports=e.p+"static/img/img3.f508caa.jpg"},iVJA:function(t,a){},lYxm:function(t,a,e){var i={"./img1.jpg":"9kZK","./img2.jpg":"Kmes","./img3.jpg":"iSnO","./img4.jpg":"aC24"};function n(t){return e(o(t))}function o(t){var a=i[t];if(!(a+1))throw new Error("Cannot find module '"+t+"'.");return a}n.keys=function(){return Object.keys(i)},n.resolve=o,t.exports=n,n.id="lYxm"},"m/Xp":function(t,a,e){t.exports=e.p+"static/img/square-projects.034fca3.png"},rB9n:function(t,a){},rHrv:function(t,a,e){t.exports=e.p+"static/img/img13.bc5e371.jpg"},tOkx:function(t,a,e){t.exports=e.p+"static/img/img9.8715345.jpg"},voHB:function(t,a,e){t.exports=e.p+"static/img/img6.52e6c54.jpg"},zOVR:function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.857b9577806a62d6f099.js.map
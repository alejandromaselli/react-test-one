(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{150:function(e,t,a){},174:function(e,t){},176:function(e,t){},190:function(e,t){},192:function(e,t){},220:function(e,t){},222:function(e,t){},223:function(e,t){},228:function(e,t){},230:function(e,t){},249:function(e,t){},261:function(e,t){},264:function(e,t){},281:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(1),s=a(25),o=a.n(s),r=(a(150),a(11)),i=a(6),l=a(51),j=a.n(l),b=function(e,t){if("undefined"!==window)return j.a.get(e)},u=function(e,t){var a,c;console.log("AUTHENTICATE HELPER ON SIGNIN RESPONSE",e),a="token",c=e.data.token,"undefined"!==window&&j.a.set(a,c,{expires:1}),function(e,t){"undefined"!==window&&localStorage.setItem(e,JSON.stringify(t))}("user",e.data.user),t()},d=function(){if("undefined"!==window&&b("token"))return!!localStorage.getItem("user")&&JSON.parse(localStorage.getItem("user"))},m=function(e){var t;t="token","undefined"!==window&&j.a.remove(t,{expires:1}),function(e){"undefined"!==window&&localStorage.removeItem(e)}("token"),e()},O=function(e,t){if(console.log("UPDATE USER UN LOCALSTORAGE HELPERS"),"undefined"!==typeof window){var a=JSON.parse(localStorage.getItem("user"));a=e.data,localStorage.setItem("user",JSON.stringify(a))}t()},p=Object(i.g)((function(e){var t=e.children,a=e.match,n=e.history,s=function(e){return a.path===e?{color:"#000"}:{color:"#fff"}};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("ul",{className:"nav nav-tabs bg-primary",children:[Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(r.b,{to:"/",className:"nav-link",style:s("/"),children:"Home"})}),!d()&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(r.b,{to:"/signup",className:"nav-link",style:s("/signup"),children:"Signup"})}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(r.b,{to:"/signin",className:"nav-link",style:s("/signin"),children:"Signin"})})]}),d()&&"admin"===d().role&&Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsxs)("li",{className:"nav-link",style:{cursor:"pointer",color:"#fff"},onClick:function(){m((function(){n.push("/")}))},children:["signoit admin ",d().name]})})}),d()&&"subscriber"===d().role&&Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsxs)("li",{className:"nav-link",style:{cursor:"pointer",color:"#fff"},onClick:function(){m((function(){n.push("/")}))},children:["signout ",d().name]})})})]}),Object(c.jsx)("div",{className:"container",children:t})]})})),x=function(){return Object(c.jsx)(p,{children:d()?Object(c.jsxs)("h1",{children:["Bienvenido Hermano ",d().name,"!"]}):Object(c.jsxs)("div",{className:"col-md-6 offset-md-3 text-center",children:[Object(c.jsx)("h1",{className:"p-5",children:"Inicie sesi\xf3n"}),Object(c.jsx)("h1",{children:"MERN Authentication boilerplate"}),Object(c.jsx)("h2",{children:"MERN stack"}),Object(c.jsx)("p",{className:"lead",children:"lorem ipsum alv"})]})})},h=a(14),f=a(2),N=a(13),v=a(10),g=a.n(v),S=a(5),w=(a(26),function(){var e=Object(n.useState)({name:"",email:"",password:"",buttonText:"Submit"}),t=Object(N.a)(e,2),a=t[0],s=t[1],o=a.name,l=a.email,j=a.password,b=a.buttonText,u=function(e){return function(t){s(Object(f.a)(Object(f.a)({},a),{},Object(h.a)({},e,t.target.value)))}},m=function(e){e.preventDefault(),s(Object(f.a)(Object(f.a)({},a),{},{buttonText:"Submitting"})),g()({method:"post",url:"".concat("https://mern-api-version-2.herokuapp.com/api","/signup"),data:{name:o,email:l,password:j}}).then((function(e){console.log("SIGNUP SUCCESS",e),s(Object(f.a)(Object(f.a)({},a),{},{name:"",email:"",password:"",buttonText:"Submitted"})),S.b.success(e.data.message)})).catch((function(e){console.log("SIGNUP ERROR",e.response.data),s(Object(f.a)(Object(f.a)({},a),{},{buttonText:"Submit"})),S.b.error(e.response.data.error)}))};return Object(c.jsx)(p,{children:Object(c.jsxs)("div",{className:"col-md-6 offset-md-3",children:[Object(c.jsx)(S.a,{}),d()?Object(c.jsx)(i.a,{to:"/"}):null,Object(c.jsx)("h1",{className:"p-5 text-center",children:"Signup"}),Object(c.jsxs)("form",{children:[Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{className:"text-muted",children:"Name"}),Object(c.jsx)("input",{onChange:u("name"),value:o,type:"text",className:"form-control"})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{className:"text-muted",children:"Email"}),Object(c.jsx)("input",{onChange:u("email"),value:l,type:"email",className:"form-control"})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{className:"text-muted",children:"Password"}),Object(c.jsx)("input",{onChange:u("password"),value:j,type:"password",className:"form-control"})]}),Object(c.jsx)("div",{className:"form-group",children:Object(c.jsx)("button",{className:"btn btn-primary",onClick:m,children:b})}),Object(c.jsxs)("div",{className:"form-group",children:["Ya tienes una cuenta? Inicia sesi\xf3n ",Object(c.jsx)(r.b,{to:"/signin",children:Object(c.jsx)("b",{children:Object(c.jsx)("u",{children:"Aqui"})})})]})]})]})})}),T=function(){var e=Object(n.useState)({email:"",password:"",buttonText:"Submit"}),t=Object(N.a)(e,2),a=t[0],s=t[1],o=a.email,l=a.password,j=a.buttonText,b=function(e){return function(t){s(Object(f.a)(Object(f.a)({},a),{},Object(h.a)({},e,t.target.value)))}},m=function(e){e.preventDefault(),s(Object(f.a)(Object(f.a)({},a),{},{buttonText:"Submitting"})),g()({method:"post",url:"".concat("https://mern-api-version-2.herokuapp.com/api","/signin"),data:{email:o,password:l}}).then((function(e){console.log("SIGNUP SUCCESS",e),u(e,(function(){s(Object(f.a)(Object(f.a)({},a),{},{name:"",email:"",password:"",buttonText:"Submitted"})),S.b.success("Hey ".concat(e.data.user.name,", Welcome back!"))}))})).catch((function(e){console.log("SIGNUP ERROR",e.response.data),s(Object(f.a)(Object(f.a)({},a),{},{buttonText:"Submit"})),S.b.error(e.response.data.error)}))};return Object(c.jsx)(p,{children:Object(c.jsxs)("div",{className:"col-md-6 offset-md-3",children:[Object(c.jsx)(S.a,{}),d()?Object(c.jsx)(i.a,{to:"/"}):null,Object(c.jsx)("h1",{className:"p-5 text-center",children:"Sign In"}),Object(c.jsxs)("form",{children:[Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{className:"text-muted",children:"Email"}),Object(c.jsx)("input",{onChange:b("email"),value:o,type:"email",className:"form-control"})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{className:"text-muted",children:"Password"}),Object(c.jsx)("input",{onChange:b("password"),value:l,type:"password",className:"form-control"})]}),Object(c.jsx)("div",{className:"form-group",children:Object(c.jsx)("button",{className:"btn btn-primary",onClick:m,children:j})}),Object(c.jsxs)("div",{className:"form-group",children:["No tienes una cuenta? Creala ",Object(c.jsx)(r.b,{to:"/signup",children:Object(c.jsx)("b",{children:Object(c.jsx)("u",{children:"Aqui"})})})]}),Object(c.jsxs)("div",{className:"form-group",children:["Olvidaste tu clave? Presiona aqu\xed ",Object(c.jsx)(r.b,{to:"/auth/password/forgot",children:Object(c.jsx)("b",{children:Object(c.jsx)("u",{children:"Aqui"})})})]})]})]})})},E=a(49),R=a.n(E),P=function(e){var t=e.match,a=Object(n.useState)({name:"",token:"",show:!0}),s=Object(N.a)(a,2),o=s[0],r=s[1];Object(n.useEffect)((function(){var e=t.params.token,a=R.a.decode(e).name;e&&r(Object(f.a)(Object(f.a)({},o),{},{name:a,token:e}))}),[]);var i=o.name,l=o.token,j=(o.show,function(e){e.preventDefault(),g()({method:"post",url:"".concat("https://mern-api-version-2.herokuapp.com/api","/account-activation"),data:{token:l}}).then((function(e){console.log("ACCOUNT ACTIVATED",e),r(Object(f.a)(Object(f.a)({},o),{},{show:!1})),S.b.success(e.data.message)})).catch((function(e){console.log("ACCOUNT ACTIVATION ERROR",e.response.data.error),S.b.error(e.response.data.error)}))});return Object(c.jsx)(p,{children:Object(c.jsxs)("div",{className:"col-md-6 offset-md-3",children:[Object(c.jsx)(S.a,{}),Object(c.jsxs)("div",{className:"text-center",children:[Object(c.jsxs)("h1",{className:"p-5 ",children:["Hey ",i,", ready to activate your account?"]}),Object(c.jsx)("button",{className:"btn btn-outline-primary",onClick:j,children:"Activate Account"})]})]})})},k=function(e){var t=e.history,a=Object(n.useState)({role:"",name:"",email:"",password:"",buttonText:"Submit"}),s=Object(N.a)(a,2),o=s[0],r=s[1];Object(n.useEffect)((function(){l()}),[]);var i=b("token"),l=function(){g()({method:"GET",url:"".concat("https://mern-api-version-2.herokuapp.com/api","/user/").concat(d()._id),headers:{Authorization:"Bearer ".concat(i)}}).then((function(e){console.log("PROFILE UPDATE",e);var t=e.data,a=t.role,c=t.email,n=t.name;r(Object(f.a)(Object(f.a)({},o),{},{role:a,name:n,email:c}))})).catch((function(e){console.log(" PRIVATE PROFILE UPDATE ERROR",e.response.data.error),401===e.response.status&&m((function(){t.push("/")}))}))},j=o.name,u=o.email,x=o.password,v=o.buttonText,w=o.role,T=function(e){return function(t){r(Object(f.a)(Object(f.a)({},o),{},Object(h.a)({},e,t.target.value)))}},E=function(e){e.preventDefault(),r(Object(f.a)(Object(f.a)({},o),{},{buttonText:"Submitting"})),g()(Object(h.a)({method:"PUT",url:"".concat("https://mern-api-version-2.herokuapp.com/api","/user/update"),data:{name:j,password:x},headers:{Authorization:"Bearer ".concat(i)}},"data",{name:j,password:x})).then((function(e){console.log("PRIVATE PROFILE UPDATE SUCCESS",e),O(e,(function(){r(Object(f.a)(Object(f.a)({},o),{},{buttonText:"Submitted"})),S.b.success("Profile updated sucessfully")}))})).catch((function(e){console.log("PRIVATE PROFILE UPDATE ERROR",e.response.data),r(Object(f.a)(Object(f.a)({},o),{},{buttonText:"Submit"})),S.b.error(e.response.data.error)}))};return Object(c.jsx)(p,{children:Object(c.jsxs)("div",{className:"col-md-6 offset-md-3",children:[Object(c.jsx)(S.a,{}),Object(c.jsx)("h1",{className:"pt-5 text-center",children:"Private"}),Object(c.jsx)("p",{className:"lead text center"}),Object(c.jsxs)("form",{children:[Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{className:"text-muted",children:"Role"}),Object(c.jsx)("input",{defaultValue:w,type:"text",className:"form-control",disabled:!0})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{className:"text-muted",children:"Email"}),Object(c.jsx)("input",{defaultValue:u,type:"text",className:"form-control",disabled:!0})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{className:"text-muted",children:"Name"}),Object(c.jsx)("input",{onChange:T("name"),value:j,type:"text",className:"form-control"})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{className:"text-muted",children:"Password"}),Object(c.jsx)("input",{onChange:T("password"),value:x,type:"password",className:"form-control"})]}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{className:"btn btn-primary",onClick:E,children:v})})]})]})})},y=function(e){var t=e.history,a=Object(n.useState)({role:"",name:"",email:"",password:"",buttonText:"Submit"}),s=Object(N.a)(a,2),o=s[0],r=s[1];Object(n.useEffect)((function(){l()}),[]);var i=b("token"),l=function(){g()({method:"GET",url:"".concat("https://mern-api-version-2.herokuapp.com/api","/admin/").concat(d()._id),headers:{Authorization:"Bearer ".concat(i)}}).then((function(e){console.log("PROFILE UPDATE",e);var t=e.data,a=t.role,c=t.email,n=t.name;r(Object(f.a)(Object(f.a)({},o),{},{role:a,name:n,email:c}))})).catch((function(e){console.log(" PRIVATE PROFILE UPDATE ERROR",e.response.data.error),401===e.response.status&&m((function(){t.push("/")}))}))},j=o.name,u=o.email,x=o.password,v=o.buttonText,w=o.role,T=function(e){return function(t){r(Object(f.a)(Object(f.a)({},o),{},Object(h.a)({},e,t.target.value)))}},E=function(e){e.preventDefault(),r(Object(f.a)(Object(f.a)({},o),{},{buttonText:"Submitting"})),g()(Object(h.a)({method:"PUT",url:"".concat("https://mern-api-version-2.herokuapp.com/api","/user/update"),data:{name:j,password:x},headers:{Authorization:"Bearer ".concat(i)}},"data",{name:j,password:x})).then((function(e){console.log("PRIVATE PROFILE UPDATE SUCCESS",e),O(e,(function(){r(Object(f.a)(Object(f.a)({},o),{},{buttonText:"Submitted"})),S.b.success("Profile updated sucessfully")}))})).catch((function(e){console.log("PRIVATE PROFILE UPDATE ERROR",e.response.data),r(Object(f.a)(Object(f.a)({},o),{},{buttonText:"Submit"})),S.b.error(e.response.data.error)}))};return Object(c.jsx)(p,{children:Object(c.jsxs)("div",{className:"col-md-6 offset-md-3",children:[Object(c.jsx)(S.a,{}),Object(c.jsx)("h1",{className:"pt-5 text-center",children:"Private"}),Object(c.jsx)("p",{className:"lead text center"}),Object(c.jsxs)("form",{children:[Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{className:"text-muted",children:"Role"}),Object(c.jsx)("input",{defaultValue:w,type:"text",className:"form-control",disabled:!0})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{className:"text-muted",children:"Email"}),Object(c.jsx)("input",{defaultValue:u,type:"text",className:"form-control",disabled:!0})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{className:"text-muted",children:"Name"}),Object(c.jsx)("input",{onChange:T("name"),value:j,type:"text",className:"form-control"})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{className:"text-muted",children:"Password"}),Object(c.jsx)("input",{onChange:T("password"),value:x,type:"password",className:"form-control"})]}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{className:"btn btn-primary",onClick:E,children:v})})]})]})})},C=a(50),A=function(e){var t=e.component,a=Object(C.a)(e,["component"]);return Object(c.jsx)(i.b,Object(f.a)(Object(f.a)({},a),{},{render:function(e){return d()?Object(c.jsx)(t,Object(f.a)({},e)):Object(c.jsx)(i.a,{to:{pathname:"/signin",state:{from:e.location}}})}}))},I=function(e){var t=e.component,a=Object(C.a)(e,["component"]);return Object(c.jsx)(i.b,Object(f.a)(Object(f.a)({},a),{},{render:function(e){return d()&&"admin"===d().role?Object(c.jsx)(t,Object(f.a)({},e)):Object(c.jsx)(i.a,{to:{pathname:"/signin",state:{from:e.location}}})}}))},U=function(e){e.history;var t=Object(n.useState)({email:"jamaselli51@gmail.com",buttonText:"Request Password Reset Link"}),a=Object(N.a)(t,2),s=a[0],o=a[1],r=s.email,i=s.buttonText,l=function(e){e.preventDefault(),o(Object(f.a)(Object(f.a)({},s),{},{buttonText:"Submitting"})),g()({method:"PUT",url:"".concat("https://mern-api-version-2.herokuapp.com/api","/forgot-password"),data:{email:r}}).then((function(e){console.log("FORGOT PASSWORD SUCCESS",e),S.b.success(e.data.message),o({buttonText:"Requested"})})).catch((function(e){console.log("FORGOT PASSWORD ERROR",e.response.data),S.b.error(e.response.data.error),o(Object(f.a)(Object(f.a)({},s),{},{buttonText:"Request Password Reset Link"}))}))};return Object(c.jsx)(p,{children:Object(c.jsxs)("div",{className:"col-md-6 offset-md-3",children:[Object(c.jsx)(S.a,{}),Object(c.jsx)("h1",{className:"p-5 text-center",children:"Forgot Password"}),Object(c.jsxs)("form",{children:[Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{className:"text-muted",children:"Email"}),Object(c.jsx)("input",{onChange:function(e){o(Object(f.a)(Object(f.a)({},s),{},{buttonText:"Submitting..."}))},value:r,type:"email",className:"form-control"})]}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{className:"btn btn-primary",onClick:l,children:i})})]})]})})},D=function(e){var t=e.match,a=Object(n.useState)({name:"",token:"",newPassword:"",buttonText:"Reset Password"}),s=Object(N.a)(a,2),o=s[0],r=s[1];Object(n.useEffect)((function(){var e=t.params.token,a=R.a.decode(e).name;e&&r(Object(f.a)(Object(f.a)({},o),{},{name:a,token:e}))}),[]);var i=o.name,l=o.token,j=o.newPassword,b=o.buttonText,u=function(e){r(Object(f.a)(Object(f.a)({},o),{},{newPassword:e.target.value}))},d=function(e){e.preventDefault(),r(Object(f.a)(Object(f.a)({},o),{},{buttonText:"Submitting"})),g()({method:"PUT",url:"".concat("https://mern-api-version-2.herokuapp.com/api","/reset-password"),data:{newPassword:j,resetPasswordLink:l}}).then((function(e){console.log("RESET PASSWORD SUCCESS",e),S.b.success(e.data.message),r({buttonText:"Requested"})})).catch((function(e){console.log("RESET PASSWORD ERROR",e.response.data),S.b.error(e.response.data.error),r(Object(f.a)(Object(f.a)({},o),{},{buttonText:"Reset Password"}))}))};return Object(c.jsx)(p,{children:Object(c.jsxs)("div",{className:"col-md-6 offset-md-3",children:[Object(c.jsx)(S.a,{}),Object(c.jsxs)("h1",{className:"p-5 text-center",children:["Hey ",i,", Type your new password"]}),Object(c.jsxs)("form",{children:[Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{className:"text-muted",children:"New Password"}),Object(c.jsx)("input",{onChange:u,value:j,type:"password",className:"form-control",placeholder:"Type New Password",required:!0})]}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{className:"btn btn-primary",onClick:d,children:b})})]})]})})},F=function(){return Object(c.jsx)(r.a,{children:Object(c.jsxs)(i.d,{children:[Object(c.jsx)(i.b,{path:"/",component:x,exact:!0}),Object(c.jsx)(i.b,{path:"/signup",component:w,exact:!0}),Object(c.jsx)(i.b,{path:"/signin",component:T,exact:!0}),Object(c.jsx)(i.b,{path:"/auth/activate/:token",component:P,exact:!0}),Object(c.jsx)(i.b,{path:"/auth/password/reset/:token",component:D,exact:!0}),Object(c.jsx)(i.b,{path:"/auth/password/forgot",component:U,exact:!0}),Object(c.jsx)(i.b,{path:"/reset",component:D,exact:!0}),Object(c.jsx)(A,{path:"/private",component:k,exact:!0}),Object(c.jsx)(I,{path:"/admin",component:y}),Object(c.jsx)(i.a,{to:"/"})]})})};o.a.render(Object(c.jsx)(F,{}),document.getElementById("root"))}},[[281,1,2]]]);
//# sourceMappingURL=main.0f98c225.chunk.js.map
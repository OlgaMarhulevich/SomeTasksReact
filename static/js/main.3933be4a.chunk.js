(this.webpackJsonphomework=this.webpackJsonphomework||[]).push([[0],[,,,,,function(e,t,a){e.exports={navlink:"Header_navlink__21Eao",active:"Header_active__1dmn0",arrow:"Header_arrow__2M442",navbar:"Header_navbar__2UxIr",errorImg:"Header_errorImg__1Bt2y",errorPage:"Header_errorPage__3IaH1"}},,function(e,t,a){e.exports={btn:"Affairs_btn__2fsK5",hw2:"Affairs_hw2__1gonf",affair:"Affairs_affair__179X1",red:"Affairs_red__2Rwj5",yellow:"Affairs_yellow__7Ir_n",green:"Affairs_green__2qh3J",activeBtn:"Affairs_activeBtn__23e1j"}},,,function(e,t,a){e.exports={messageComponent:"Message_messageComponent__2ZeUJ",img:"Message_img__2hw3a",messageBox:"Message_messageBox__KdDBl",message:"Message_message__8WR15",time:"Message_time__HOFTG",name:"Message_name__Tzmp0",mesAll:"Message_mesAll__2OW7g",tail:"Message_tail__sQC4c"}},,function(e,t,a){e.exports={superInput:"SuperInputText_superInput__3XH9u",input:"SuperInputText_input__1P_Mf",divInput:"SuperInputText_divInput__10VI4",errorInput:"SuperInputText_errorInput__3ei0N",error:"SuperInputText_error__2J82S"}},,,function(e,t,a){e.exports={greeting:"Greeting_greeting__21ydZ",errorMessage:"Greeting_errorMessage__zEoF5",error:"Greeting_error__1uvQ8",btn:"Greeting_btn__1zEPl"}},,function(e,t,a){e.exports={checkbox:"SuperCheckbox_checkbox__Imn1x",spanClassName:"SuperCheckbox_spanClassName__1K9ch",label:"SuperCheckbox_label__kF06l"}},function(e,t,a){e.exports={divSpan:"SuperEditableSpan_divSpan__1rETp",input:"SuperEditableSpan_input__1o4dc",span:"SuperEditableSpan_span__TqnG3"}},,,function(e,t,a){e.exports={default:"SuperButton_default__-BXUG",red:"SuperButton_red__1kaz_"}},,,,,,function(e,t,a){e.exports={App:"App_App__1Sc4o"}},function(e,t,a){e.exports={blue:"HW4_blue__2RJeg",column:"HW4_column__2ZS4I",testSpanError:"HW4_testSpanError___Mj8X"}},,,,,,,function(e,t,a){},,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(26),s=a.n(c),i=(a(35),a(27)),o=a.n(i),l=a(11),j=a(5),u=a.n(j),b=a(0);var d=function(){return Object(b.jsxs)("div",{className:u.a.errorPage,children:[Object(b.jsx)("div",{children:"Sorry, this page does not exist. Try again!"}),Object(b.jsx)("img",{className:u.a.errorImg,src:"https://www.pngkit.com/png/full/930-9306497_4042x-graphics.png"})]})},h=a(2),m=a(10),x=a.n(m);var O=function(e){return Object(b.jsxs)("div",{className:x.a.messageComponent,children:[Object(b.jsx)("img",{className:x.a.img,src:e.avatar,alt:"avatar"}),Object(b.jsxs)("div",{className:x.a.mesAll,children:[Object(b.jsx)("div",{className:x.a.tail}),Object(b.jsxs)("div",{className:x.a.messageBox,children:[Object(b.jsx)("p",{className:x.a.name,children:e.name}),Object(b.jsx)("p",{className:x.a.message,children:e.message}),Object(b.jsx)("p",{className:x.a.time,children:e.time})]})]})]})},p="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",_="Some Name",f="some text",v="22:00";var g=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 1",Object(b.jsx)(O,{avatar:p,name:_,message:f,time:v}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},N=a(3),C=a(7),k=a.n(C);var S=function(e){return Object(b.jsxs)("div",{className:k.a.affair,children:[Object(b.jsx)("div",{children:e.affair.name}),Object(b.jsxs)("div",{className:function(){switch(e.affair.priority){case"high":return k.a.red;case"middle":return k.a.yellow;case"low":return k.a.green}}(),children:["[",e.affair.priority,"]"]}),Object(b.jsx)("button",{className:k.a.btn,onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})};var w=function(e){var t=e.data.map((function(t){return Object(b.jsx)(S,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)})),a=function(t){e.setFilter(t.currentTarget.value)},n=function(t){return k.a.btn+(e.filter===t?" ".concat(k.a.activeBtn):"")};return Object(b.jsxs)("div",{children:[t,Object(b.jsx)("button",{className:n("all"),onClick:a,value:"all",children:"All"}),Object(b.jsx)("button",{className:n("high"),onClick:a,value:"high",children:"High"}),Object(b.jsx)("button",{className:n("middle"),onClick:a,value:"middle",children:"Middle"}),Object(b.jsx)("button",{className:n("low"),onClick:a,value:"low",children:"Low"})]})},y=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var I=function(){var e=Object(n.useState)(y),t=Object(N.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)("all"),s=Object(N.a)(c,2),i=s[0],o=s[1],l=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(a,i);return Object(b.jsxs)("div",{className:k.a.hw2,children:[Object(b.jsx)("hr",{}),"homeworks 2",Object(b.jsx)(w,{data:l,setFilter:o,filter:i,deleteAffairCallback:function(e){return r(function(e,t){return e.filter((function(e){return e._id!==t}))}(a,e))}}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},A=a(30),T=a(15),E=a.n(T),B=function(e){var t=e.name,a=e.setNameCallback,n=e.addUser,r=e.error,c=e.totalUsers,s=r?E.a.error:"";return Object(b.jsxs)("div",{className:E.a.greeting,children:[Object(b.jsx)("input",{value:t,onChange:a,className:s,onKeyPress:function(e){"Enter"===e.key&&n()}}),Object(b.jsx)("button",{className:E.a.btn,onClick:n,children:"Add"}),Object(b.jsx)("span",{children:0===c?"no users yet":"".concat(c,1===c?" user added":" users added")}),Object(b.jsx)("span",{className:E.a.errorMessage,children:r})]})},M=function(e){var t=e.users,a=e.addUserCallback,r=Object(n.useState)(""),c=Object(N.a)(r,2),s=c[0],i=c[1],o=Object(n.useState)(""),l=Object(N.a)(o,2),j=l[0],u=l[1],d=t.length;return Object(b.jsx)(B,{name:s,setNameCallback:function(e){var t=e.currentTarget.value;Number(t)||!t.trim()?(u(" Invalid name! "),i(t)):(i(t),u(""))},addUser:function(){if(j||""===s)u(" Invalid name! "),i("");else{var e=function(e){return e.split(" ").filter((function(e){return e.trim()})).map((function(e){return e[0].toUpperCase()+e.substring(1)})).join(" ")}(s);a(e),i(""),alert("Hello  ".concat(e,"!"))}},error:j,totalUsers:d})},H=a(44);var P=function(){var e=Object(n.useState)([]),t=Object(N.a)(e,2),a=t[0],r=t[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 3",Object(b.jsx)(M,{users:a,addUserCallback:function(e){var t={_id:Object(H.a)(),name:e};r([t].concat(Object(A.a)(a)))}}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},U=a(8),J=a(9),F=a(12),W=a.n(F),G=function(e){e.type;var t=e.onChange,a=e.onChangeText,n=e.onKeyPress,r=e.onEnter,c=e.error,s=e.className,i=e.spanClassName,o=Object(J.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),l="".concat(W.a.error," ").concat(i||""),j="".concat(W.a.input," ").concat(c?W.a.errorInput:""," ").concat(W.a.superInput," ").concat(s||"");return Object(b.jsxs)("div",{className:W.a.divInput,children:[Object(b.jsx)("input",Object(U.a)({type:"text",onChange:function(e){t&&t(e),a&&a(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),r&&"Enter"===e.key&&r()},className:j},o)),c&&Object(b.jsx)("span",{className:l,children:c})]})},K=a(28),R=a.n(K),X=a(21),z=a.n(X),D=function(e){var t=e.red,a=e.className,n=Object(J.a)(e,["red","className"]),r="".concat(t?z.a.red:""," ").concat(z.a.default," ").concat(a);return Object(b.jsx)("button",Object(U.a)({className:r},n))},Z=a(17),q=a.n(Z),L=function(e){e.type;var t=e.onChange,a=e.onChangeChecked,n=e.className,r=(e.spanClassName,e.children),c=Object(J.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(q.a.checkbox," ").concat(n||"");return Object(b.jsxs)("label",{className:q.a.label,children:[Object(b.jsx)("input",Object(U.a)({type:"checkbox",onChange:function(e){a&&a(e.currentTarget.checked),t&&t(e)},className:s},c)),r&&Object(b.jsx)("span",{className:q.a.spanClassName,children:r})]})};var Q=function(){var e=Object(n.useState)(""),t=Object(N.a)(e,2),a=t[0],r=t[1],c=a?"":"Could not be empty!",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(a)},i=Object(n.useState)(!1),o=Object(N.a)(i,2),l=o[0],j=o[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 4",Object(b.jsxs)("div",{className:R.a.column,children:[Object(b.jsx)(G,{value:a,onChangeText:r,onEnter:s,error:c}),Object(b.jsx)(G,{}),Object(b.jsx)(D,{children:"default"}),Object(b.jsx)(D,{red:!0,onClick:s,children:"delete "}),Object(b.jsx)(D,{disabled:!0,children:"disabled"}),Object(b.jsx)(L,{checked:l,onChangeChecked:j,children:"some text "}),Object(b.jsx)(L,{checked:l,onChange:function(e){return j(e.currentTarget.checked)}})]}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},V=a(18),Y=a.n(V),$=function(e){e.autoFocus;var t=e.onBlur,a=e.onEnter,r=e.spanProps,c=Object(J.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(n.useState)(!1),i=Object(N.a)(s,2),o=i[0],l=i[1],j=r||{},u=j.children,d=j.onDoubleClick,h=j.className,m=Object(J.a)(j,["children","onDoubleClick","className"]),x="".concat(Y.a.span," ").concat(h);return Object(b.jsx)("div",{className:Y.a.divSpan,children:o?Object(b.jsx)(G,Object(U.a)({autoFocus:!0,onBlur:function(e){l(!1),t&&t(e)},onEnter:function(){l(!1),a&&a()},className:Y.a.input},c)):Object(b.jsxs)("span",Object(U.a)(Object(U.a)({onDoubleClick:function(e){l(!0),d&&d(e)},className:x},m),{},{children:["\u270e ",u||c.value]}))})};var ee=function(){var e=Object(n.useState)(""),t=Object(N.a)(e,2),a=t[0],r=t[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 6",Object(b.jsx)("div",{children:Object(b.jsx)($,{value:a,onChangeText:r,spanProps:{children:a?void 0:"enter text..."}})}),Object(b.jsx)(D,{onClick:function(){!function(e,t){var a=JSON.stringify(t);localStorage.setItem(e,a)}("editable-span-value",a)},children:"save"}),Object(b.jsx)(D,{onClick:function(){var e=function(e,t){var a=t,n=localStorage.getItem(e);return null!==n&&(a=JSON.parse(n)),a}("editable-span-value","");r(e)},children:"restore"}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})};var te=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(g,{}),Object(b.jsx)(I,{}),Object(b.jsx)(P,{}),Object(b.jsx)(Q,{}),Object(b.jsx)(ee,{})]})};var ae=function(){return Object(b.jsx)("div",{children:"JUNIOR"})};var ne=function(){return Object(b.jsx)("div",{children:"JUNIOR PLUS"})},re="/pre-junior",ce="/junior",se="/junior-plus";var ie=function(){return Object(b.jsx)("div",{children:Object(b.jsxs)(h.d,{children:[Object(b.jsx)(h.b,{path:"/",exact:!0,render:function(){return Object(b.jsx)(h.a,{to:re})}}),Object(b.jsx)(h.b,{path:re,render:function(){return Object(b.jsx)(te,{})}}),Object(b.jsx)(h.b,{path:ce,render:function(){return Object(b.jsx)(ae,{})}}),Object(b.jsx)(h.b,{path:se,render:function(){return Object(b.jsx)(ne,{})}}),Object(b.jsx)(h.b,{render:function(){return Object(b.jsx)(d,{})}})]})})};var oe=function(){return Object(b.jsxs)("div",{className:u.a.navbar,children:[Object(b.jsx)(l.b,{to:re,className:u.a.navlink,activeClassName:u.a.active,children:"pre-junior"}),Object(b.jsx)(l.b,{to:ce,className:u.a.navlink,activeClassName:u.a.active,children:"junior"}),Object(b.jsx)(l.b,{to:se,className:u.a.navlink,activeClassName:u.a.active,children:"junior-plus"}),Object(b.jsx)("img",{src:"https://thypix.com/wp-content/uploads/blue-arrow-71.png",className:u.a.arrow})]})};var le=function(){return Object(b.jsx)("div",{children:Object(b.jsxs)(l.a,{children:[Object(b.jsx)(oe,{}),Object(b.jsx)(ie,{})]})})};var je=function(){return Object(b.jsxs)("div",{className:o.a.App,children:[Object(b.jsx)("div",{children:"react homeworks:"}),Object(b.jsx)(le,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(je,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[42,1,2]]]);
//# sourceMappingURL=main.3933be4a.chunk.js.map
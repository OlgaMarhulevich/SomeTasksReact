(this.webpackJsonphomework=this.webpackJsonphomework||[]).push([[0],[,,,,,,,function(e,t,n){e.exports={navlink:"Header_navlink__21Eao",active:"Header_active__1dmn0",arrow:"Header_arrow__2M442",navbar:"Header_navbar__2UxIr",errorImg:"Header_errorImg__1Bt2y",errorPage:"Header_errorPage__3IaH1"}},,function(e,t,n){e.exports={btn:"Affairs_btn__2fsK5",hw2:"Affairs_hw2__1gonf",affair:"Affairs_affair__179X1",red:"Affairs_red__2Rwj5",yellow:"Affairs_yellow__7Ir_n",green:"Affairs_green__2qh3J",activeBtn:"Affairs_activeBtn__23e1j"}},function(e,t,n){e.exports={messageComponent:"Message_messageComponent__2ZeUJ",img:"Message_img__2hw3a",messageBox:"Message_messageBox__KdDBl",message:"Message_message__8WR15",time:"Message_time__HOFTG",name:"Message_name__Tzmp0",mesAll:"Message_mesAll__2OW7g",tail:"Message_tail__sQC4c"}},,,function(e,t,n){e.exports={superInput:"SuperInputText_superInput__3XH9u",input:"SuperInputText_input__1P_Mf",divInput:"SuperInputText_divInput__10VI4",errorInput:"SuperInputText_errorInput__3ei0N",error:"SuperInputText_error__2J82S"}},,,function(e,t,n){e.exports={greeting:"Greeting_greeting__21ydZ",errorMessage:"Greeting_errorMessage__zEoF5",error:"Greeting_error__1uvQ8",btn:"Greeting_btn__1zEPl"}},,function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__Imn1x",spanClassName:"SuperCheckbox_spanClassName__1K9ch",label:"SuperCheckbox_label__kF06l"}},function(e,t,n){e.exports={divSpan:"SuperEditableSpan_divSpan__1rETp",input:"SuperEditableSpan_input__1o4dc",span:"SuperEditableSpan_span__TqnG3"}},function(e,t,n){e.exports={select:"SuperSelect_select__3fEsa",option:"SuperSelect_option__33I2a"}},,,function(e,t,n){e.exports={default:"SuperButton_default__-BXUG",red:"SuperButton_red__1kaz_"}},function(e,t,n){e.exports={radio:"SuperRadio_radio__3l3uR",label:"SuperRadio_label__2lqMv"}},,,,,,function(e,t,n){e.exports={App:"App_App__1Sc4o"}},function(e,t,n){e.exports={blue:"HW4_blue__2RJeg",column:"HW4_column__2ZS4I",testSpanError:"HW4_testSpanError___Mj8X"}},,,,,,function(e,t,n){},,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(29),s=n.n(c),i=(n(37),n(30)),o=n.n(i),l=n(11),j=n(7),u=n.n(j),d=n(0);var b=function(){return Object(d.jsxs)("div",{className:u.a.errorPage,children:[Object(d.jsx)("div",{children:"Sorry, this page does not exist. Try again!"}),Object(d.jsx)("img",{className:u.a.errorImg,src:"https://www.pngkit.com/png/full/930-9306497_4042x-graphics.png"})]})},h=n(3),O=n(10),p=n.n(O);var x=function(e){return Object(d.jsxs)("div",{className:p.a.messageComponent,children:[Object(d.jsx)("img",{className:p.a.img,src:e.avatar,alt:"avatar"}),Object(d.jsxs)("div",{className:p.a.mesAll,children:[Object(d.jsx)("div",{className:p.a.tail}),Object(d.jsxs)("div",{className:p.a.messageBox,children:[Object(d.jsx)("p",{className:p.a.name,children:e.name}),Object(d.jsx)("p",{className:p.a.message,children:e.message}),Object(d.jsx)("p",{className:p.a.time,children:e.time})]})]})]})},m="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",_="Some Name",f="some text",v="22:00";var g=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 1",Object(d.jsx)(x,{avatar:m,name:_,message:f,time:v}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},C=n(2),N=n(9),k=n.n(N);var y=function(e){return Object(d.jsxs)("div",{className:k.a.affair,children:[Object(d.jsx)("div",{children:e.affair.name}),Object(d.jsxs)("div",{className:function(){switch(e.affair.priority){case"high":return k.a.red;case"middle":return k.a.yellow;case"low":return k.a.green}}(),children:["[",e.affair.priority,"]"]}),Object(d.jsx)("button",{className:k.a.btn,onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})};var S=function(e){var t=e.data.map((function(t){return Object(d.jsx)(y,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)})),n=function(t){e.setFilter(t.currentTarget.value)},a=function(t){return k.a.btn+(e.filter===t?" ".concat(k.a.activeBtn):"")};return Object(d.jsxs)("div",{children:[t,Object(d.jsx)("button",{className:a("all"),onClick:n,value:"all",children:"All"}),Object(d.jsx)("button",{className:a("high"),onClick:n,value:"high",children:"High"}),Object(d.jsx)("button",{className:a("middle"),onClick:n,value:"middle",children:"Middle"}),Object(d.jsx)("button",{className:a("low"),onClick:n,value:"low",children:"Low"})]})},w=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var I=function(){var e=Object(a.useState)(w),t=Object(C.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)("all"),s=Object(C.a)(c,2),i=s[0],o=s[1],l=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(n,i);return Object(d.jsxs)("div",{className:k.a.hw2,children:[Object(d.jsx)("hr",{}),"homeworks 2",Object(d.jsx)(S,{data:l,setFilter:o,filter:i,deleteAffairCallback:function(e){return r(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))}}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},T=n(12),A=n(16),E=n.n(A),B=function(e){var t=e.name,n=e.setNameCallback,a=e.addUser,r=e.error,c=e.totalUsers,s=r?E.a.error:"";return Object(d.jsxs)("div",{className:E.a.greeting,children:[Object(d.jsx)("input",{value:t,onChange:n,className:s,onKeyPress:function(e){"Enter"===e.key&&a()}}),Object(d.jsx)("button",{className:E.a.btn,onClick:a,children:"Add"}),Object(d.jsx)("span",{children:0===c?"no users yet":"".concat(c,1===c?" user added":" users added")}),Object(d.jsx)("span",{className:E.a.errorMessage,children:r})]})},M=function(e){var t=e.users,n=e.addUserCallback,r=Object(a.useState)(""),c=Object(C.a)(r,2),s=c[0],i=c[1],o=Object(a.useState)(""),l=Object(C.a)(o,2),j=l[0],u=l[1],b=t.length;return Object(d.jsx)(B,{name:s,setNameCallback:function(e){var t=e.currentTarget.value;Number(t)||!t.trim()?(u(" Invalid name! "),i(t)):(i(t),u(""))},addUser:function(){if(j||""===s)u(" Invalid name! "),i("");else{var e=function(e){return e.split(" ").filter((function(e){return e.trim()})).map((function(e){return e[0].toUpperCase()+e.substring(1)})).join(" ")}(s);n(e),i(""),alert("Hello  ".concat(e,"!"))}},error:j,totalUsers:b})},H=n(46);var P=function(){var e=Object(a.useState)([]),t=Object(C.a)(e,2),n=t[0],r=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 3",Object(d.jsx)(M,{users:n,addUserCallback:function(e){var t={_id:Object(H.a)(),name:e};r([t].concat(Object(T.a)(n)))}}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},U=n(4),F=n(5),J=n(13),W=n.n(J),G=function(e){e.type;var t=e.onChange,n=e.onChangeText,a=e.onKeyPress,r=e.onEnter,c=e.error,s=e.className,i=e.spanClassName,o=Object(F.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),l="".concat(W.a.error," ").concat(i||""),j="".concat(W.a.input," ").concat(c?W.a.errorInput:""," ").concat(W.a.superInput," ").concat(s||"");return Object(d.jsxs)("div",{className:W.a.divInput,children:[Object(d.jsx)("input",Object(U.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),r&&"Enter"===e.key&&r()},className:j},o)),c&&Object(d.jsx)("span",{className:l,children:c})]})},R=n(31),K=n.n(R),D=n(23),X=n.n(D),z=function(e){var t=e.red,n=e.className,a=Object(F.a)(e,["red","className"]),r="".concat(t?X.a.red:""," ").concat(X.a.default," ").concat(n);return Object(d.jsx)("button",Object(U.a)({className:r},a))},L=n(18),q=n.n(L),Z=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,a=e.className,r=(e.spanClassName,e.children),c=Object(F.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(q.a.checkbox," ").concat(a||"");return Object(d.jsxs)("label",{className:q.a.label,children:[Object(d.jsx)("input",Object(U.a)({type:"checkbox",onChange:function(e){n&&n(e.currentTarget.checked),t&&t(e)},className:s},c)),r&&Object(d.jsx)("span",{className:q.a.spanClassName,children:r})]})};var Q=function(){var e=Object(a.useState)(""),t=Object(C.a)(e,2),n=t[0],r=t[1],c=n?"":"Could not be empty!",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(a.useState)(!1),o=Object(C.a)(i,2),l=o[0],j=o[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 4",Object(d.jsxs)("div",{className:K.a.column,children:[Object(d.jsx)(G,{value:n,onChangeText:r,onEnter:s,error:c}),Object(d.jsx)(G,{}),Object(d.jsx)(z,{children:"default"}),Object(d.jsx)(z,{red:!0,onClick:s,children:"delete "}),Object(d.jsx)(z,{disabled:!0,children:"disabled"}),Object(d.jsx)(Z,{checked:l,onChangeChecked:j,children:"some text "}),Object(d.jsx)(Z,{checked:l,onChange:function(e){return j(e.currentTarget.checked)}})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},V=n(19),Y=n.n(V),$=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,r=e.spanProps,c=Object(F.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(a.useState)(!1),i=Object(C.a)(s,2),o=i[0],l=i[1],j=r||{},u=j.children,b=j.onDoubleClick,h=j.className,O=Object(F.a)(j,["children","onDoubleClick","className"]),p="".concat(Y.a.span," ").concat(h);return Object(d.jsx)("div",{className:Y.a.divSpan,children:o?Object(d.jsx)(G,Object(U.a)({autoFocus:!0,onBlur:function(e){l(!1),t&&t(e)},onEnter:function(){l(!1),n&&n()},className:Y.a.input},c)):Object(d.jsxs)("span",Object(U.a)(Object(U.a)({onDoubleClick:function(e){l(!0),b&&b(e)},className:p},O),{},{children:["\u270e ",u||c.value]}))})};var ee=function(){var e=Object(a.useState)(""),t=Object(C.a)(e,2),n=t[0],r=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 6",Object(d.jsx)("div",{children:Object(d.jsx)($,{value:n,onChangeText:r,spanProps:{children:n?void 0:"enter text..."}})}),Object(d.jsx)(z,{onClick:function(){!function(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}("editable-span-value",n)},children:"save"}),Object(d.jsx)(z,{onClick:function(){var e=function(e,t){var n=t,a=localStorage.getItem(e);return null!==a&&(n=JSON.parse(a)),n}("editable-span-value","");r(e)},children:"restore"}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})};var te=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(g,{}),Object(d.jsx)(I,{}),Object(d.jsx)(P,{}),Object(d.jsx)(Q,{}),Object(d.jsx)(ee,{})]})},ne=n(20),ae=n.n(ne),re=function(e){var t=e.options,n=e.onChange,a=e.onChangeOption,r=e.className,c=Object(F.a)(e,["options","onChange","onChangeOption","className"]),s=t?t.map((function(e,t){return Object(d.jsx)("option",{className:ae.a.option,children:e},e+"-"+t)})):[],i=ae.a.select+(r?" "+r:"");return Object(d.jsx)("select",Object(U.a)(Object(U.a)({className:i,onChange:function(e){n&&n(e),a&&a(e.currentTarget.value),i+=" ".concat(ae.a.onBlur)}},c),{},{children:s}))},ce=n(24),se=n.n(ce),ie=function(e){e.type;var t=e.name,n=e.options,a=e.value,r=e.onChange,c=e.onChangeOption,s=e.className,i=Object(F.a)(e,["type","name","options","value","onChange","onChangeOption","className"]),o=function(e){r&&r(e),c&&c(e.currentTarget.value)},l=n?n.map((function(e,n){return Object(d.jsxs)("label",{className:se.a.label,children:[Object(d.jsx)("input",Object(U.a)({type:"radio",name:t,value:e,checked:e===a,onChange:o,className:se.a.radio+(s?" "+s:"")},i)),e]},t+"-"+n)})):[];return Object(d.jsx)(d.Fragment,{children:l})},oe=["x","y","z"];var le=function(){var e=Object(a.useState)(oe[1]),t=Object(C.a)(e,2),n=t[0],r=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 7",Object(d.jsx)("div",{style:{margin:"10px 20px"},children:Object(d.jsx)(re,{options:oe,value:n,onChangeOption:r})}),Object(d.jsx)("div",{style:{margin:"30px 12px"},children:Object(d.jsx)(ie,{name:"radio",options:oe,value:n,onChangeOption:r})}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},je=function(e,t){switch(t.type){case"sort":return"up"===t.payload?Object(T.a)(e).sort((function(e,t){return e.name>t.name?1:-1})):Object(T.a)(e).sort((function(e,t){return e.name<t.name?1:-1}));case"check":return Object(T.a)(e).filter((function(e){return e.age>t.payload}));default:return e}},ue=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var de=function(){var e=Object(a.useState)(ue),t=Object(C.a)(e,2),n=t[0],r=t[1],c={display:"flex",justifyContent:"space-between",width:"300px",margin:"3px",padding:"5px",borderBottom:"1px dashed grey"},s=n.map((function(e){return Object(d.jsxs)("div",{style:c,children:[Object(d.jsx)("span",{children:e.name})," ",Object(d.jsx)("span",{children:e.age})]},e._id)}));return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 8",Object(d.jsx)("div",{style:{margin:"5px 10px",padding:"5px"},children:s}),Object(d.jsxs)("div",{style:{display:"flex"},children:[Object(d.jsx)("div",{children:Object(d.jsx)(z,{onClick:function(){return r(je(ue,{type:"sort",payload:"up"}))},children:"sort up"})}),Object(d.jsx)("div",{children:Object(d.jsx)(z,{onClick:function(){return r(je(ue,{type:"sort",payload:"down"}))},children:"sort down"})}),Object(d.jsx)("div",{children:Object(d.jsx)(z,{onClick:function(){return r(je(ue,{type:"check",payload:18}))},children:"check 18"})})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})};var be=function(){var e=Object(a.useState)(0),t=Object(C.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(),s=Object(C.a)(c,2),i=s[0],o=s[1],l=Object(a.useState)(!1),j=Object(C.a)(l,2),u=j[0],b=j[1],h=function(){clearInterval(n)},O=null===i||void 0===i?void 0:i.toLocaleTimeString(),p=null===i||void 0===i?void 0:i.toLocaleDateString(),x={display:"flex",height:"30px",width:"65px",margin:"0 60px",alignItems:"center",justifyContent:"center"};return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{style:x,onMouseEnter:function(){b(!0)},onMouseLeave:function(){b(!1)},children:O}),Object(d.jsx)("div",{style:x,children:u&&p}),Object(d.jsx)(z,{onClick:function(){h();var e=+setInterval((function(){o(new Date)}),1e3);r(e)},children:"start"}),Object(d.jsx)(z,{onClick:h,children:"stop"})]})};var he=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 9",Object(d.jsx)(be,{}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})};var Oe=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(le,{}),Object(d.jsx)(de,{}),Object(d.jsx)(he,{})]})};var pe=function(){return Object(d.jsx)("div",{children:"JUNIOR PLUS"})},xe="/pre-junior",me="/junior",_e="/junior-plus";var fe=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(h.d,{children:[Object(d.jsx)(h.b,{path:"/",exact:!0,render:function(){return Object(d.jsx)(h.a,{to:xe})}}),Object(d.jsx)(h.b,{path:xe,render:function(){return Object(d.jsx)(te,{})}}),Object(d.jsx)(h.b,{path:me,render:function(){return Object(d.jsx)(Oe,{})}}),Object(d.jsx)(h.b,{path:_e,render:function(){return Object(d.jsx)(pe,{})}}),Object(d.jsx)(h.b,{render:function(){return Object(d.jsx)(b,{})}})]})})};var ve=function(){return Object(d.jsxs)("div",{className:u.a.navbar,children:[Object(d.jsx)(l.b,{to:xe,className:u.a.navlink,activeClassName:u.a.active,children:"pre-junior"}),Object(d.jsx)(l.b,{to:me,className:u.a.navlink,activeClassName:u.a.active,children:"junior"}),Object(d.jsx)(l.b,{to:_e,className:u.a.navlink,activeClassName:u.a.active,children:"junior-plus"}),Object(d.jsx)("img",{src:"https://thypix.com/wp-content/uploads/blue-arrow-71.png",className:u.a.arrow})]})};var ge=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(l.a,{children:[Object(d.jsx)(ve,{}),Object(d.jsx)(fe,{})]})})};var Ce=function(){return Object(d.jsxs)("div",{className:o.a.App,children:[Object(d.jsx)("div",{children:"react homeworks:"}),Object(d.jsx)(ge,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(Ce,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[44,1,2]]]);
//# sourceMappingURL=main.249cec50.chunk.js.map
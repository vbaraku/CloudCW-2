(this["webpackJsonpdistributed-systems"]=this["webpackJsonpdistributed-systems"]||[]).push([[0],{110:function(e,t,a){},111:function(e,t,a){},200:function(e,t,a){"use strict";a.r(t);var n=a(2),s=a.n(n),c=a(44),i=a.n(c),r=(a(110),a(111),a(10)),d=a(29),l=a.n(d),o=(a(131),a(81)),j=(a(50),a(51),a(32)),b=a.n(j),u=a(1);var h=function(e){var t=e.id,a=e.text,s=e.submitFunction,c=Object(n.useState)(),i=Object(r.a)(c,2),d=i[0],l=i[1],o=Object(n.useState)(),j=Object(r.a)(o,2),h=j[0],x=j[1],O=Object(n.useState)(),g=Object(r.a)(O,2),p=g[0],m=g[1],f=Object(n.useState)(),y=Object(r.a)(f,2),v=y[0],C=y[1],D=new Date(Date.now()),k=Object(n.useState)(D),S=Object(r.a)(k,2),I=S[0],w=S[1];return Object(u.jsxs)("div",{style:{display:"flex",flexDirection:"column",paddingRight:"50px",marginRight:"50px",borderRight:"#000 solid"},children:[Object(u.jsx)("h1",{children:a}),Object(u.jsx)("span",{style:{display:"block-inline"},children:"Date "}),Object(u.jsx)(b.a,{selected:I,onChange:function(e){return w(e)},name:"startDate",dateFormat:"dd/MM/yyyy",autoComplete:"off"}),Object(u.jsx)("span",{children:"User ID"}),Object(u.jsx)("input",{type:"text",id:"userid"+t,onChange:function(e){return l(e.target.value)}}),Object(u.jsx)("span",{children:"Blood glucose"}),Object(u.jsx)("input",{type:"text",id:"blood"+t,onChange:function(e){return x(e.target.value)}}),Object(u.jsx)("span",{children:"Carb intake"}),Object(u.jsx)("input",{type:"text",id:"carbon"+t,onChange:function(e){return C(e.target.value)}}),Object(u.jsx)("span",{children:"Medication dose"}),Object(u.jsx)("input",{type:"text",id:"medication"+t,onChange:function(e){return m(e.target.value)}})," ",Object(u.jsx)("br",{}),Object(u.jsxs)("button",{onClick:function(e){if(e.preventDefault(),I){var t={name:d,glucoseBlood:h,intakeCarbs:v,medicationDose:p,date:I};t.name&&t.glucoseBlood&&t.intakeCarbs&&t.medicationDose&&t.date?s(t):alert("Please put in all the data before submitting!")}else alert("Write in the date before submitting")},className:"btn",style:{background:"#90ee90"},children:[" ","Submit"]})]})},x=function(e){var t=e.baseUrl,a=e.setMean,s=e.changeCharts,c=e.username,i=e.password,d=e.userId,o=e.setUserId,j=Object(n.useState)(),h=Object(r.a)(j,2),x=h[0],O=h[1],g=Object(n.useState)(),p=Object(r.a)(g,2),m=p[0],f=p[1];return Object(u.jsxs)("div",{style:{display:"flex",flexDirection:"column",paddingRight:"50px",marginRight:"50px",borderRight:"#000 solid"},children:[Object(u.jsx)("h1",{children:"Read data"}),Object(u.jsx)("span",{style:{display:"block-inline"},children:"Starting date "}),Object(u.jsx)(b.a,{selected:x,onChange:function(e){return O(e)},name:"startDate",dateFormat:"dd/MM/yyyy",autoComplete:"off"}),Object(u.jsx)("span",{style:{display:"block-inline"},children:"Ending date"}),Object(u.jsx)(b.a,{selected:m,onChange:function(e){return f(e)},name:"startDate",dateFormat:"dd/MM/yyyy",autoComplete:"off"}),Object(u.jsx)("span",{children:"User ID"}),Object(u.jsx)("input",{type:"text",id:"userIdRead",onChange:function(e){o(e.target.value)}}),Object(u.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{type:"checkbox",id:"allData",value:"allData",defaultChecked:!0}),Object(u.jsx)("label",{for:"allData",style:{paddingLeft:"10px"},children:"All data"})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{type:"checkbox",id:"means"}),Object(u.jsx)("label",{for:"means",style:{paddingLeft:"10px"},children:"Include average blood glucose and carb intake"})]})]}),Object(u.jsx)("br",{}),Object(u.jsxs)("button",{form:"login",onClick:function(e){e.preventDefault(),document.getElementById("allData").checked&&(x&&m?(console.log(x.getTime()),l.a.get(t,{params:{from:x.getTime(),to:m.getTime(),userId:d},auth:{username:c,password:i}}).then((function(e){s(e.data)}))):l.a.get(t,{params:{userId:d},auth:{username:c,password:i,userId:d}}).then((function(e){console.log(e),s(e.data)})).catch((function(e){console.log(e)}))),document.getElementById("means").checked&&(x&&m?l.a.get(t+"/average",{params:{from:x.getTime(),to:m.getTime()},auth:{username:c,password:i}}).then((function(e){a(e.data)})):l.a.get(t+"/average",{params:{userId:d},auth:{username:c,password:i}}).then((function(e){console.log(e.data),a(e.data)})))},className:"btn",style:{background:"#90ee90"},children:[" ","Submit"]})]})};var O=function(e){var t=e.id,a=e.text,s=e.submitFunction,c=Object(n.useState)(),i=Object(r.a)(c,2),d=i[0],l=i[1],o=Object(n.useState)(),j=Object(r.a)(o,2),h=j[0],x=j[1],O=Object(n.useState)(),g=Object(r.a)(O,2),p=g[0],m=g[1],f=Object(n.useState)(),y=Object(r.a)(f,2),v=y[0],C=y[1],D=Object(n.useState)(),k=Object(r.a)(D,2),S=k[0],I=k[1],w=new Date(Date.now()),R=Object(n.useState)(w),M=Object(r.a)(R,2),N=M[0],B=M[1];return Object(u.jsxs)("div",{style:{display:"flex",flexDirection:"column",paddingRight:"50px",marginRight:"50px",borderRight:"#000 solid"},children:[Object(u.jsx)("h1",{children:a}),Object(u.jsx)("span",{style:{display:"block-inline"},children:"Date "}),Object(u.jsx)(b.a,{selected:N,onChange:function(e){return B(e)},name:"startDate",dateFormat:"dd/MM/yyyy",autoComplete:"off"}),Object(u.jsx)("span",{children:"Record ID"}),Object(u.jsx)("input",{type:"text",id:"userid"+t,onChange:function(e){return l(e.target.value)}}),Object(u.jsx)("span",{children:"User ID"}),Object(u.jsx)("input",{type:"text",id:"userid"+t,onChange:function(e){return x(e.target.value)}}),Object(u.jsx)("span",{children:"Blood glucose"}),Object(u.jsx)("input",{type:"text",id:"blood"+t,onChange:function(e){return m(e.target.value)}}),Object(u.jsx)("span",{children:"Carb intake"}),Object(u.jsx)("input",{type:"text",id:"carbon"+t,onChange:function(e){return I(e.target.value)}}),Object(u.jsx)("span",{children:"Medication dose"}),Object(u.jsx)("input",{type:"text",id:"medication"+t,onChange:function(e){return C(e.target.value)}})," ",Object(u.jsx)("br",{}),Object(u.jsxs)("button",{onClick:function(e){if(e.preventDefault(),N){var t={name:h,glucoseBlood:p,intakeCarbs:S,medicationDose:v,date:N,recordId:d};t.name&&t.glucoseBlood&&t.intakeCarbs&&t.medicationDose&&t.date&&t.recordId?s(t):alert("Please put in all the data before submitting!")}else alert("Write in the date before submitting")},className:"btn",style:{background:"#90ee90"},children:[" ","Submit"]})]})},g=a(228),p=a(231),m=a(225),f=a(226),y=a(229),v=a(230),C=a(227);var D=function(){var e=Object(n.useState)(new Date(Date.now())),t=Object(r.a)(e,2),a=(t[0],t[1],Object(n.useState)("read")),s=Object(r.a)(a,2),c=s[0],i=s[1],d=Object(n.useState)(""),j=Object(r.a)(d,2),b=j[0],D=j[1],k=Object(n.useState)(""),S=Object(r.a)(k,2),I=S[0],w=S[1],R=Object(n.useState)(),M=Object(r.a)(R,2),N=M[0],B=M[1],F={year:"numeric",month:"2-digit",day:"2-digit"},U=Object(n.useState)(),E=Object(r.a)(U,2),T=(E[0],E[1]),A=Object(n.useState)({averageGlucose:0,averageIntakeCarbs:0,averageMedicationDose:0}),L=Object(r.a)(A,2),G=L[0],q=L[1],P=Object(n.useState)([1,2,3,4]),W=Object(r.a)(P,2),J=W[0],_=W[1],z=Object(n.useState)([1,2,3,4]),Z=Object(r.a)(z,2),H=(Z[0],Z[1]),K=Object(n.useState)([1,2,3,4]),Q=Object(r.a)(K,2),V=Q[0],X=Q[1],Y=Object(n.useState)([]),$=Object(r.a)(Y,2),ee=$[0],te=$[1],ae={labels:ee,datasets:[{label:"Carb intake in grams",data:V,fill:!1,backgroundColor:"rgb(255, 99, 132)",borderColor:"rgba(255, 99, 132, 0.2)"}]},ne={labels:ee,datasets:[{label:"Blood glucose in mg",data:J,fill:!1,backgroundColor:"rgb(0, 12, 200)",borderColor:"rgba(0, 12, 200, 0.2)"}]},se={scales:{yAxes:[{ticks:{beginAtZero:!0}}]}},ce="/rest/records",ie=Object(n.useState)([]),re=Object(r.a)(ie,2),de=re[0],le=re[1];function oe(){l.a.get(ce,{params:{userId:N},auth:{username:b,password:I,userId:N}}).then((function(e){console.log(e),le(e.data)})).catch((function(e){console.log(e)}))}var je=function(){var e=Object(n.useState)(),t=Object(r.a)(e,2),a=t[0],s=t[1];return Object(u.jsxs)("div",{style:{display:"flex",flexDirection:"column",paddingRight:"50px",marginRight:"50px",borderRight:"#000 solid"},children:[Object(u.jsx)("h1",{children:"Delete data"}),Object(u.jsx)("span",{style:{display:"block-inline"},children:"Record ID "}),Object(u.jsx)("input",{type:"text",id:"text",onChange:function(e){s(e.target.value)}}),Object(u.jsx)("br",{}),Object(u.jsxs)("button",{form:"login",onClick:function(){var e;e=a,l.a.delete(ce+"/"+e,{auth:{username:b,password:I}}).then((function(t){alert("Entry for date "+e+" successfully deleted")})).catch((function(t){401==t.status||403==t.status?alert("That command can only be used by admins!"):alert("An entry for date "+e+" does not exist!")})),oe()},className:"btn",style:{background:"#90ee90"},children:[" ","Submit"]})]})};return Object(n.useEffect)((function(){oe();var e=null;console.log(c),e=Object(u.jsx)(u.Fragment,{}),T(e)}),[c]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"grid-container",children:[Object(u.jsxs)("div",{className:"grid-item grid-item-1",children:[Object(u.jsxs)("div",{style:{display:"flex",flexDirection:"column",paddingRight:"50px",marginRight:"50px",borderRight:"#000 solid"},children:[Object(u.jsx)("a",{href:"",onClick:function(e){e.preventDefault(),i("create")},children:"Create_data"}),Object(u.jsx)("a",{href:"",onClick:function(e){e.preventDefault(),i("read")},children:"Read data"}),Object(u.jsx)("a",{href:"",onClick:function(e){e.preventDefault(),i("update")},children:"Update_data"}),Object(u.jsx)("a",{href:"",onClick:function(e){e.preventDefault(),i("delete")},children:"Delete data"})]}),Object(u.jsx)("div",{style:{display:"read"===c||"none"},children:Object(u.jsx)(x,{username:b,password:I,setMean:q,baseUrl:ce,changeCharts:function(e){console.log(e);var t=[],a=[],n=[],s=[];e.forEach((function(e){s.push(e.date),t.push(e.glucoseBlood),a.push(e.intakeCarbs),n.push(e.medicationDose)})),s=s.map((function(e){return new Date(e).toLocaleDateString("en-gb",F)})),te(s),_(t),X(a),H(n)},userId:N,setUserId:B})}),Object(u.jsx)("div",{style:{display:"delete"===c||"none"},children:Object(u.jsx)(je,{})}),Object(u.jsx)("div",{style:{display:"update"===c||"none"},children:Object(u.jsx)(O,{id:2,text:"Update data",submitFunction:function(e){l.a.put(ce+"/"+e.recordId,e,{auth:{username:b,password:I}}).then((function(t){console.log(t),200==t.status?alert("Entry update successfully for date: "+e.date):alert("Entry for id "+e.recordId+" did not exist. New entry added for id "+e.recordId)})).catch((function(t){401==t.status||403==t.status?alert("That command can only be used by admins!"):alert("Entry for date "+e.recordId+" does not exist")}))}})}),Object(u.jsx)("div",{style:{display:"create"===c||"none"},children:Object(u.jsx)(h,{id:1,text:"Create data",submitFunction:function(e){l.a.post(ce,e,{auth:{username:b,password:I}}).then((function(t){console.log(t),201==t.status&&alert("ID: "+e.id)})).catch((function(e){401==e.status||403==e.status?alert("That command is only for admins"):alert("Not modified")}))}})}),Object(u.jsx)("div",{style:{display:"flex",flexDirection:"column"},children:Object(u.jsxs)("form",{id:"login",onSubmit:function(e){e.preventDefault(),oe()},children:[Object(u.jsx)("h6",{children:"Type in the credentials that will be used to send the request"}),Object(u.jsx)("span",{children:"Username"}),Object(u.jsx)("input",{type:"text",id:"username",onChange:function(e){D(e.target.value)},required:!0}),Object(u.jsx)("br",{}),Object(u.jsx)("span",{children:"Password"}),Object(u.jsx)("input",{type:"password",id:"password",onChange:function(e){w(e.target.value)},required:!0})]})}),Object(u.jsx)("div",{className:"grid-item grid-item-3",children:Object(u.jsxs)("div",{className:"grid-item mean",children:[Object(u.jsx)("h1",{children:"Average data:"}),Object(u.jsxs)("p",{children:["Blood glucose: ",Object(u.jsx)("b",{children:G.averageGlucose.toFixed(2)})]}),Object(u.jsxs)("p",{children:["Carb Intake: ",Object(u.jsx)("b",{children:G.averageIntakeCarbs.toFixed(2)})]}),Object(u.jsxs)("p",{children:["Medication dose: ",Object(u.jsx)("b",{children:G.averageMedicationDose.toFixed(2)})]})]})})]}),Object(u.jsxs)("div",{className:"grid-item grid-item-2 carb-intake",children:[Object(u.jsx)("div",{className:"header",children:Object(u.jsx)("h4",{className:"title",children:"Carb Intake"})}),Object(u.jsx)(o.a,{data:ae,options:se})]}),Object(u.jsxs)("div",{className:"grid-item grid-item-3 blood-glucose",children:[Object(u.jsx)("div",{className:"header",children:Object(u.jsx)("h4",{className:"title",children:"Blood Glucose"})}),Object(u.jsx)(o.a,{data:ne,options:se})]})]}),Object(u.jsx)("div",{style:{padding:15},children:Object(u.jsx)(f.a,{component:C.a,children:Object(u.jsxs)(g.a,{sx:{minWidth:1050,marginLeft:"auto"},size:"small","aria-label":"simple table",children:[Object(u.jsx)(y.a,{children:Object(u.jsxs)(v.a,{children:[Object(u.jsx)(m.a,{children:"Record Id"}),Object(u.jsx)(m.a,{align:"left",children:"User"}),Object(u.jsx)(m.a,{align:"left",children:"Date"}),Object(u.jsx)(m.a,{align:"left",children:"Glucose level"}),Object(u.jsx)(m.a,{align:"left",children:"Carb intake"}),Object(u.jsx)(m.a,{align:"left",children:"Medication Dose"})]})}),Object(u.jsx)(p.a,{children:de.map((function(e){return Object(u.jsxs)(v.a,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[Object(u.jsx)(m.a,{component:"th",scope:"row",children:e.recordId}),Object(u.jsx)(m.a,{align:"left",children:e.name}),Object(u.jsx)(m.a,{align:"left",children:e.date}),Object(u.jsxs)(m.a,{align:"left",children:[e.glucoseBlood," mg/dL"]}),Object(u.jsxs)(m.a,{align:"left",children:[e.intakeCarbs," grams"]}),Object(u.jsxs)(m.a,{align:"left",children:[e.medicationDose," grams"]})]},e.name)}))})]})})})]})};var k=function(){return Object(u.jsx)(D,{children:" "})};i.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(k,{})}),document.getElementById("root"))}},[[200,1,2]]]);
//# sourceMappingURL=main.b46d2252.chunk.js.map
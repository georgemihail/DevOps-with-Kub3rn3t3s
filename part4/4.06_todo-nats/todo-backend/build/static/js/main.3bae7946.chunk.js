(this["webpackJsonp1.02_to-do"]=this["webpackJsonp1.02_to-do"]||[]).push([[0],{41:function(t,e,n){"use strict";n.r(e);var r=n(1),a=n(4),c=n(16),u=n.n(c),s=n(0),o=n.n(s),i=n(3),p=n(7),f=n(5),d=n.n(f),b=".",j=function(){var t=Object(i.a)(o.a.mark((function t(){var e;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.get("".concat(b,"/todos"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),h=function(){var t=Object(i.a)(o.a.mark((function t(){var e,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.get("".concat(b,"/image"),{responseType:"arraybuffer"});case 2:return e=t.sent,t.next=5,btoa(new Uint8Array(e.data).reduce((function(t,e){return t+String.fromCharCode(e)}),""));case 5:return n=t.sent,t.abrupt("return","data:;base64,"+n);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),l={getTodos:j,addTodo:function(){var t=Object(i.a)(o.a.mark((function t(e){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.post("".concat(b,"/todos"),e);case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),changeDone:function(){var t=Object(i.a)(o.a.mark((function t(e){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.put("".concat(b,"/todos/").concat(e));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),getImage:h},v=function(){var t=Object(a.useState)([]),e=Object(p.a)(t,2),n=e[0],c=e[1],u=Object(a.useState)(null),s=Object(p.a)(u,2),f=s[0],d=s[1];Object(a.useEffect)((function(){function t(){return(t=Object(i.a)(o.a.mark((function t(){var e;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.getTodos();case 2:return e=t.sent,c(e),t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[c]),Object(a.useEffect)((function(){l.getImage().then((function(t){return d(t)}))}),[d]);var b=function(){var t=Object(i.a)(o.a.mark((function t(e){var r,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),t.prev=1,r=e.target.task.value,t.next=5,l.addTodo({text:r,done:!1});case 5:a=t.sent,c(n.concat(a)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.log("Error : ",t.t0.message);case 12:e.target.task.value="";case 13:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}(),j=function(){var t=Object(i.a)(o.a.mark((function t(e){var r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.changeDone(e);case 2:r=t.sent,c(n.map((function(t){return t.id===e?r:t})));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{style:{marginLeft:"130px"},children:"To do"}),Object(r.jsx)("img",{src:f,alt:"welcome",width:"400"})]}),Object(r.jsxs)("form",{onSubmit:b,children:[Object(r.jsx)("input",{name:"task"}),Object(r.jsx)("button",{children:" Create TODO "})]}),Object(r.jsx)("div",{style:{marginTop:"20px"},children:n.map((function(t){return Object(r.jsx)("div",{children:Object(r.jsxs)("li",{children:[t.text,Object(r.jsx)("button",{onClick:function(){return j(t.id)},children:t.done?"Mark done":"Mark undone"})]})},t.id)}))})]})};u.a.render(Object(r.jsx)(v,{}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.3bae7946.chunk.js.map
(this["webpackJsonpdev-testing-pet"]=this["webpackJsonpdev-testing-pet"]||[]).push([[0],{57:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"getData",(function(){return m}));var c,a=n(0),s=n.n(a),i=n(8),o=n.n(i),u=n(4),l=n(3),d=n(27),j=n(12),_=n.n(j),b=n(23),O=n(24),f=n.n(O);!function(e){e.GET_QUESTIONS="GET_QUESTIONS",e.GET_QUESTIONS_SUCCESS="GET_QUESTIONS_SUCCESS",e.GET_QUESTIONS_FAIL="GET_QUESTIONS_FAIL"}(c||(c={}));var m=function(){return function(){var e=Object(b.a)(_.a.mark((function e(t){var n;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:c.GET_QUESTIONS}),e.next=4,f.a.get("https://opentdb.com/api.php?amount=10");case 4:n=e.sent,console.log(n.data.results),t({type:c.GET_QUESTIONS_SUCCESS,payload:n.data.results}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t({type:c.GET_QUESTIONS_FAIL,payload:"\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u0434\u0430\u043d\u043d\u044b\u0445."});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()},S=Object(d.a)({},r),p=u.c,h=(n(57),n(1)),E=function(e){var t=e.error;return Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"error",children:t})})};n(59);function x(e){return Object(h.jsx)("div",{className:"questions",children:e.items.map(e.renderItem)})}n(60);var N=function(){return Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"loader"})})},v=n(13),T=n(26),g=(n(61),function(e){var t=e.question,n=Object(a.useState)(""),r=Object(v.a)(n,2),c=r[0],s=r[1],i=Object(a.useState)(null),o=Object(v.a)(i,2),u=o[0],l=o[1],d=Object(a.useMemo)((function(){return function(e,t){var n=Object(T.a)(e),r=Math.floor(Math.random()*(e.length+1));return n.splice(r,0,t),n}(t.incorrect_answers,t.correct_answer)}),[t.incorrect_answers,t.correct_answer]);return Object(h.jsxs)("div",{className:"card",children:[Object(h.jsxs)("ul",{className:"card__head",children:[Object(h.jsxs)("li",{className:"card__item",children:["\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f: ",t.category]}),Object(h.jsxs)("li",{className:"card__item",children:["\u0422\u0438\u043f: ",t.type]}),Object(h.jsxs)("li",{className:"card__item",children:["\u0421\u043b\u043e\u0436\u043d\u043e\u0441\u0442\u044c: ",t.difficulty]}),Object(h.jsx)("li",{className:"card__item card__item_font_bold",children:t.question.replace(/&quot;/g,'"').replace(/&#039;/g,"'")})]}),Object(h.jsxs)("form",{className:"card__form",children:[Object(h.jsx)("ul",{className:"card__answers",children:d.map((function(e,n){return Object(h.jsx)("li",{children:Object(h.jsxs)("label",{className:"card__answer ".concat(null===u?"":e===t.correct_answer?"card__answer_correct":"card__answer_incorrect"),children:[Object(h.jsx)("input",{className:"card__checkbox",type:"radio",name:"answer",disabled:null!=u,onChange:function(){return s(e)}}),e,Object(h.jsx)("span",{className:"checkmark"})]})},n)}))}),Object(h.jsx)("button",{className:"card__btn ".concat(null!=u?"card__btn_state_disabled":""),type:"submit",disabled:null!=u,onClick:function(e){e.preventDefault(),c===t.correct_answer?l(!0):l(!1)},children:"\u041f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c"})]})]})}),I=function(){var e=p((function(e){return e.questions})),t=e.questions,n=e.loading,r=e.error,c=function(){var e=Object(u.b)();return Object(l.b)(S,e)}().getData;return Object(a.useEffect)((function(){c()}),[]),n?Object(h.jsx)(N,{}):r?Object(h.jsx)(E,{error:r}):Object(h.jsx)(x,{items:t,renderItem:function(e){return Object(h.jsx)(g,{question:e},e.question)}})},w=(n(62),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,64)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))}),U=n(25),y={questions:[],loading:!1,error:null},q=Object(l.c)({questions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c.GET_QUESTIONS:return{questions:[],loading:!0,error:null};case c.GET_QUESTIONS_SUCCESS:return{questions:t.payload,loading:!1,error:null};case c.GET_QUESTIONS_FAIL:return{questions:[],loading:!1,error:t.payload};default:return e}}}),C=Object(l.d)(q,Object(l.a)(U.a));o.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(u.a,{store:C,children:Object(h.jsx)(I,{})})}),document.getElementById("root")),w()}},[[63,1,2]]]);
//# sourceMappingURL=main.e13c0698.chunk.js.map
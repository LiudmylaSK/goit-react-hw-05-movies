"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[983],{368:function(r,t,n){n.d(t,{O:function(){return c}});var e=n(689),u=n(87),a=n(184),c=function(r){var t=r.movies,n=(0,e.TH)();return(0,a.jsx)("ul",{children:t.map((function(r){var t=r.id,e=r.title;return(0,a.jsx)("li",{children:(0,a.jsx)(u.rU,{state:{from:n},to:"/movies/".concat(t),children:e})},t)}))})}},710:function(r,t,n){n.d(t,{Hx:function(){return p},Y5:function(){return i},on:function(){return o},uV:function(){return f},wr:function(){return s}});var e=n(861),u=n(757),a=n.n(u),c=n(340).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"9e79bf179828bbd88a056650275888ae",language:"en-US",include_adult:!1,query:""}}),s=function(){var r=(0,e.Z)(a().mark((function r(){var t;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("trending/movie/day");case 2:return t=r.sent,r.abrupt("return",t.data.results);case 4:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),i=function(){var r=(0,e.Z)(a().mark((function r(t){var n;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("/movie/".concat(t));case 2:return n=r.sent,r.abrupt("return",n.data);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),o=function(){var r=(0,e.Z)(a().mark((function r(t){var n;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("/search/movie?query=".concat(t));case 2:return n=r.sent,r.abrupt("return",n.data.results);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),f=function(){var r=(0,e.Z)(a().mark((function r(t){var n;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("movie/".concat(t,"/credits"));case 2:return n=r.sent,r.abrupt("return",n.data.cast);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),p=function(){var r=(0,e.Z)(a().mark((function r(t){var n;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("movie/".concat(t,"/reviews"));case 2:return n=r.sent,r.abrupt("return",n.data.results);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()},983:function(r,t,n){n.r(t);var e=n(439),u=n(791),a=n(710),c=n(368),s=n(184);t.default=function(){var r=(0,u.useState)([]),t=(0,e.Z)(r,2),n=t[0],i=t[1];return(0,u.useEffect)((function(){(0,a.wr)().then(i)}),[]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h1",{children:"TRENDING TODAY"}),(0,s.jsx)(c.O,{movies:n})]})}}}]);
//# sourceMappingURL=983.c1552bf3.chunk.js.map
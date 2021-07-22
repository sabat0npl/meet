(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{201:function(e,t,n){},203:function(e,t,n){},222:function(e,t,n){},223:function(e,t,n){},358:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(66),s=n.n(o),c=(n(201),n(26)),i=n.n(c),l=n(51),u=n(23),h=n(31),d=n(24),f=n(25),p=(n(203),n(79),n(4)),v=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={show:!1},e.handleButton=function(){e.setState((function(e){return{show:!e.show}}))},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this,t=this.props.event;return Object(p.jsxs)("div",{className:"Event",children:[Object(p.jsx)("h1",{className:"EventSummary",children:t.summary}),Object(p.jsx)("h2",{className:"EventLocation",children:t.location}),Object(p.jsxs)("h3",{className:"EventDate",children:["start: ",t.start.dateTime," - Time Zone: ",t.start.timeZone]}),!0===this.state.show&&Object(p.jsx)("p",{className:"EventDetails",children:t.description}),!1===this.state.show&&Object(p.jsx)("button",{className:"showMore",onClick:function(){return e.handleButton()},children:"Show details"}),!0===this.state.show&&Object(p.jsx)("button",{className:"showLess",onClick:function(){return e.handleButton()},children:"Hide details"})]})}}]),n}(a.Component),m=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(p.jsx)("ul",{className:"EventList",children:e.map((function(e){return Object(p.jsx)("li",{children:Object(p.jsx)(v,{event:e})},e.id)}))},"eventsList")}}]),n}(a.Component),b=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.color=null,a.position=null,a}return Object(h.a)(n,[{key:"render",value:function(){return Object(p.jsx)("div",{className:"Alert",children:Object(p.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(a.Component),j=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="blue",a.position="relative",a}return n}(b),g=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="red",a.position="relative",a}return n}(b),w=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="orange",a.position="relative",a}return n}(b),O=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={numberOfEvents:32,infoText:""},e.handleInputChanged=function(t){var n=t.target.value;isNaN(n)?e.setState({infoText:"Please write a number",numberOfEvents:n}):n<1||n>32?e.setState({infoText:"Please select a number from 1 to 32",numberOfEvents:n}):(e.setState({numberOfEvents:n,infoText:""}),e.props.updateNumberOfEvents(t.target.value))},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this,t=this.state.numberOfEvents;return Object(p.jsxs)("div",{className:"numberOfEvents",children:[Object(p.jsx)(g,{text:this.state.infoText,ClassName:"ErrorAlert"}),Object(p.jsx)("input",{type:"text",className:"EventsNumber",value:t,onChange:function(t){return e.handleInputChanged(t)}}),Object(p.jsx)("label",{children:"Select Number of Events"})]})}}]),n}(a.Component),x=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:"",suggestions:[],showSuggestions:void 0},e.handleInputChanged=function(t){var n=t.target.value;e.setState({showSuggestions:!0});var a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));if(0!==a.length)return e.setState({query:n,suggestions:a,infoText:""});e.setState({query:n,infoText:"We can not find the city you are looking for. Please try another city"})},e.handleItemClicked=function(t){e.setState({query:t,showSuggestions:!1}),e.props.updateEvents(t,e.props.numberOfEvents)},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this;return Object(p.jsxs)("div",{className:"CitySearch",children:[Object(p.jsx)(j,{text:this.state.infoText,className:"InfoAlert"}),Object(p.jsx)("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),Object(p.jsx)("label",{children:" Select a City:"}),Object(p.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(p.jsx)("li",{className:"matchSuggestions",onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(p.jsx)("li",{className:"seeAll",onClick:function(){return e.handleItemClicked("all")},children:Object(p.jsx)("b",{children:"See all cities"})},"all")]})]})}}]),n}(a.Component),y=n(190),k=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],S=n(119),E=n.n(S),T=(n(222),n(75)),N=n.n(T),C=function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,a,r,o,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,W(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,E.a.get("https://cwhyfdt4z8.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url");case 17:return o=e.sent,s=o.data.authUrl,e.abrupt("return",window.location.href=s);case 20:return e.abrupt("return",r&&I(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),W=function(){var e=Object(l.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.location.href.startsWith("http://localhost")){e.next=2;break}return e.abrupt("return",{});case 2:return e.next=4,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e}));case 4:return n=e.sent,e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,a,r,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(N.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return N.a.done(),e.abrupt("return",k);case 4:if(navigator.onLine){e.next=8;break}return t=localStorage.getItem("lastEvents"),N.a.done(),e.abrupt("return",t?JSON.parse(t).events:[]);case 8:return e.next=10,C();case 10:if(!(n=e.sent)){e.next=20;break}return Z(),a="https://cwhyfdt4z8.execute-api.eu-central-1.amazonaws.com/dev/api/get-events/"+n,e.next=16,E.a.get(a);case 16:return(r=e.sent).data&&(o=L(r.data.events),localStorage.setItem("lastEvents",JSON.stringify(r.data)),localStorage.setItem("locations",JSON.stringify(o))),N.a.done(),e.abrupt("return",r.data.events);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Z=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},I=function(){var e=Object(l.a)(i.a.mark((function e(t){var n,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://cwhyfdt4z8.execute-api.eu-central-1.amazonaws.com/dev/api/token/"+n).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(e){var t=e.map((function(e){return e.location}));return Object(y.a)(new Set(t))};n(223);var M=function(e){return e.showWelcomeScreen?Object(p.jsxs)("div",{className:"WelcomeScreen",children:[Object(p.jsx)("h1",{children:"Welcome to the Meet app"}),Object(p.jsx)("h4",{children:"Log in to see upcoming events around the world for full-stack developers"}),Object(p.jsx)("div",{className:"button_cont",align:"center",children:Object(p.jsxs)("div",{class:"google-btn",children:[Object(p.jsx)("div",{class:"google-icon-wrapper",children:Object(p.jsx)("img",{class:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Log\r\no.svg",alt:"Google sign-in"})}),Object(p.jsx)("button",{onClick:function(){e.getAccessToken()},rel:"nofollow noopener",class:"btn-text",children:Object(p.jsx)("b",{children:"Sign in with google"})})]})}),Object(p.jsx)("a",{href:"https://sabat0npl.github.io/meet-app/privacy.html",rel:"nofollow noopener",children:"Privacy policy"})]}):null},B=n(366),R=n(180),D=n(94);function F(e){var t=e.events,n=["React","JavaScript","Node","jQuery","AngularJS"],a=["#0088FE","#00C49F","#FFBB28","#FF8042"],r=[],o={};n.forEach((function(e){o[e]=0})),t.forEach((function(e){n.forEach((function(t){e.summary.includes(t)&&o[t]++}))})),Object.keys(o).forEach((function(e){r.push({name:e,value:o[e]})}));var s=Math.PI/180;return Object(p.jsx)(B.a,{width:600,height:600,children:Object(p.jsx)(R.a,{data:r,cx:"50%",cy:"50%",labelLine:!1,label:function(e){var t=e.cx,a=e.cy,r=e.midAngle,o=e.innerRadius,c=e.outerRadius,i=e.percent,l=e.index,u=o+1.1*(c-o),h=t+u*Math.cos(-r*s),d=a+u*Math.sin(-r*s);if(i>0)return Object(p.jsx)("text",{x:h,y:d,fill:"black",textAnchor:h>t?"start":"end",dominantBaseline:"central",children:"".concat((100*i).toFixed(0),"% ").concat(n[l])})},outerRadius:150,fill:"#8884d8",dataKey:"value",children:r.map((function(e,t){return Object(p.jsx)(D.a,{fill:a[t%a.length]},"cell-".concat(t))}))})})}var J=n(362),q=n(363),U=n(364),P=n(186),z=n(187),_=n(78),H=n(191),G=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={events:[],locations:[],numberOfEvents:32,currentCity:"all",infoText:"",showWelcomeScreen:void 0},e.updateEvents=function(t,n){A().then((function(a){var r="all"===t?a.slice(0,n):a.filter((function(e){return e.location===t}));e.mounted&&e.setState({events:r.slice(0,n),currentCity:t})}))},e}return Object(h.a)(n,[{key:"updateNumberOfEvents",value:function(e){this.setState({numberOfEvents:e});var t=this.state.currentCity;this.updateEvents(t,e)}},{key:"componentDidMount",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,a,r,o,s=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state.numberOfEvents,this.mounted=!0,n=localStorage.getItem("access_token"),e.next=5,W(n);case 5:if(!e.sent.error){e.next=9;break}e.t0=!1,e.next=10;break;case 9:e.t0=!0;case 10:a=e.t0,r=new URLSearchParams(window.location.search),o=r.get("code"),this.setState({showWelcomeScreen:!(o||a)}),(o||a)&&this.mounted&&(A().then((function(e){s.mounted&&s.setState({events:e.slice(0,t),locations:L(e)})})),navigator.onLine?this.setState({infoText:""}):this.setState({infoText:"Internet connection not detected, previously loaded events are displayed"}));case 15:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"getData",value:function(){var e=this.state,t=e.locations,n=e.events;return t.map((function(e){var t=n.filter((function(t){return t.location===e})).length;return{city:e.split(", ").shift(),number:t}}))}},{key:"render",value:function(){var e=this;return this.state.showWelcomeScreen?Object(p.jsx)(M,{showWelcomeScreen:this.state.showWelcomeScreen,getAccessToken:function(){C()}}):Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("h1",{children:"MEET APP"}),Object(p.jsx)(x,{locations:this.state.locations,updateEvents:this.updateEvents,numberOfEvents:this.state.numberOfEvents}),Object(p.jsx)(O,{updateNumberOfEvents:function(t){return e.updateNumberOfEvents(t)}}),Object(p.jsx)("h4",{children:"Events in each city"}),Object(p.jsxs)("div",{className:"data-vis-wrapper",children:[Object(p.jsx)(F,{events:this.state.events}),Object(p.jsx)(J.a,{height:400,children:Object(p.jsxs)(q.a,{height:400,margin:{top:20,right:20,bottom:20,left:20},children:[Object(p.jsx)(U.a,{}),Object(p.jsx)(P.a,{type:"category",dataKey:"city",name:"city"}),Object(p.jsx)(z.a,{type:"number",dataKey:"number",name:"number of events",allowDecimals:!1}),Object(p.jsx)(_.a,{cursor:{strokeDasharray:"3 3"}}),Object(p.jsx)(H.a,{name:"Events",data:this.getData(),fill:"#8884d8"})]})})]}),Object(p.jsx)(w,{text:this.state.infoText,className:"InfoAlert"}),Object(p.jsx)(m,{events:this.state.events})]})}}]),n}(a.Component),Y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function K(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var V=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,367)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),o(e),s(e)}))};n(188).config("778e52bfc5e34726815056aa37bc5055").install(),s.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(G,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meet",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meet","/service-worker.js");Y?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):K(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):K(t,e)}))}}(),V()},79:function(e,t,n){}},[[358,1,2]]]);
//# sourceMappingURL=main.b0ecfa11.chunk.js.map
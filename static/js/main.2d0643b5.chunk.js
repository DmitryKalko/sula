(this.webpackJsonpsula=this.webpackJsonpsula||[]).push([[0],{36:function(e,t,a){e.exports=a.p+"static/media/logo.f4b99cca.png"},37:function(e,t,a){e.exports=a.p+"static/media/logoFooter.8daccb5d.png"},39:function(e,t,a){e.exports=a(68)},68:function(e,t,a){"use strict";a.r(t);var n,r=a(0),l=a.n(r),c=a(19),o=a.n(c),s=a(17),i=a(1),m=a(15),u=a(7),f=a(10),d=a(11),g=a(13),h=a(12),p=a(35),S=a.n(p),v=a(20),N=a.n(v),E=(a(8),a(36)),b=a.n(E),C=a(37),k=a.n(C),I=function(e){var t=e.lastName,a=e.id,n=e.onClick;return l.a.createElement("li",{onClick:function(){return n(a)},className:"lastName"},t)},y=function(e){var t=e.base,a=e.onClick,n=t.map((function(e){return l.a.createElement(I,Object.assign({key:e.id},e,{onClick:a}))}));return l.a.createElement("ul",null,n)},O=function(e){var t=e.selectedItem,a=e.search,n=e.inputStatus,r=e.onClick,c=t.lastName,o=t.flagName,s=t.imgId;return l.a.createElement("div",Object(u.a)({className:"info",style:!0===n?{opacity:1}:{opacity:0}},"style",""!==a?{opacity:0}:{opacity:1}),l.a.createElement("h1",null,c),l.a.createElement("h3",null,"\u0413\u0435\u0440\u0431: ",o),l.a.createElement("img",{className:"imgUrl",src:"https://dmitrykalko.github.io/rakovich/base/images/"+ +s+".png",alt:"flagImage"}),l.a.createElement("button",{className:"sertificate-btn",onClick:function(){return r(t)}},"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0433\u0440\u0430\u043c\u043e\u0442\u0443 \u0448\u043b\u044f\u0445\u0442\u0438\u0447\u0430"))},w=function(e){var t=e.onChange,a=e.search;return l.a.createElement("div",{className:"search"},l.a.createElement("input",{className:"inputField",placeholder:"\u0412\u0412\u0415\u0414\u0418\u0422\u0415 \u0412\u0410\u0428\u0423 \u0424\u0410\u041c\u0418\u041b\u0418\u042e",name:"search",onChange:t,value:""===a?"":a}))},j=function(e){var t=e.formStatus,a=e.onClick,n=e.onChange,r=e.onSubmit;return l.a.createElement("form",{className:"form",style:!0===t?{display:"flex"}:{display:"none"},onSubmit:r},l.a.createElement("div",{className:"close",onClick:a}),l.a.createElement("input",{className:"fioField",placeholder:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f \u0418\u043c\u044f \u041e\u0442\u0447\u0435\u0441\u0442\u0432\u043e",name:"fio",onChange:n}),l.a.createElement("button",{className:"formBtn"},"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0433\u0440\u0430\u043c\u043e\u0442\u0443 \u0448\u043b\u044f\u0445\u0442\u0438\u0447\u0430"))},F=[],L=function(e){Object(g.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(f.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={base:[],selectedItem:null,search:"",intervalId:0,formStatus:!1,fio:"",formData:""},e.getSertificate=function(t){var a=t.lastName,n=t.flagName,r=t.imgId;e.setState({formStatus:!0,lastName:a,flagName:n,imgId:r})},e.closeForm=function(){e.setState({formStatus:!1})},e.submitForm=function(t){var a=e.state.fio;t.preventDefault(),e.setState({formData:a,formStatus:!1}),e.makeStorage(),t.target.reset(),""!==e.state.fio?(N.a.fire({title:"\u041f\u043e\u0437\u0434\u0440\u0430\u0432\u043b\u044f\u0435\u043c, \u0412\u044b \u0428\u043b\u044f\u0445\u0442\u0438\u0447!",text:"\u0421\u0432\u043e\u044e \u043b\u0438\u0447\u043d\u0443\u044e \u0433\u0440\u0430\u043c\u043e\u0442\u0443 \u0428\u043b\u044f\u0445\u0442\u0438\u0447\u0430 \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043d\u0430 \u0440\u0435\u0446\u0435\u043f\u0448\u0435\u043d",icon:"success",confirmButtonText:"\u0423\u0436\u0435 \u0438\u0434\u0443!"}),e.setState({fio:""})):N.a.fire({text:"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u044e \u0424\u0430\u043c\u0438\u043b\u0438\u044e \u0418\u043c\u044f \u041e\u0442\u0447\u0435\u0441\u0442\u0432\u043e",icon:"error",confirmButtonText:"\u041f\u043e\u043d\u044f\u0442\u043d\u043e"})},e.fioData=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(u.a)({},n,r))},e.selectLastName=function(t){var a=e.state.base,n=Object(m.a)(a).filter((function(e){return e.id===t}))[0];e.setState({selectedItem:n}),e.setState({inputStatus:!0}),e.setState({search:""})},e.makeStorage=function(){var t=e.state.fio,a=e.state.selectedItem;F=JSON.parse(localStorage.getItem("dataForSertificate"))||[],""!==t&&F.push(t,a),localStorage.setItem("dataForSertificate",JSON.stringify(F)),console.log(F)},e.findLastName=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(u.a)({},n,r))},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;S.a.get("".concat("https://dmitrykalko.github.io/rakovich/base/db.json")).then((function(t){var a=t.data;e.setState({base:a.base})}))}},{key:"fillterBase",value:function(){var e=this.state,t=e.base,a=e.search,n=Object(m.a)(t);return""!==a&&(n=n.filter((function(e){if(0===e.lastName.toLowerCase().indexOf(a.toLowerCase()))return e.lastName}))),n}},{key:"render",value:function(){console.log(this.state);var e=this.fillterBase();return l.a.createElement("div",{className:"wrapper"},l.a.createElement("main",null,l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"backgroundImage"},l.a.createElement("img",{src:b.a,alt:"logo",className:"logo"})),l.a.createElement("div",{className:"container"},l.a.createElement(w,{onChange:this.findLastName,inputStatus:this.state.inputStatus,search:this.state.search}),l.a.createElement("div",{className:"cards"},l.a.createElement("div",{className:"lastNames"},e&&l.a.createElement(y,{base:e,onClick:this.selectLastName,start:this.startInterval})),l.a.createElement("div",null,this.state.selectedItem&&l.a.createElement(O,{selectedItem:this.state.selectedItem,inputStatus:this.state.inputStatus,search:this.state.search,onClick:this.getSertificate}))),l.a.createElement(j,{formStatus:this.state.formStatus,search:this.state.search,onClick:this.closeForm,onChange:this.fioData,onSubmit:this.submitForm})))),l.a.createElement("footer",null,l.a.createElement("div",{className:"footer"},l.a.createElement("hr",{className:"line"}),l.a.createElement("a",{href:"https://parksula.by/ru/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{src:k.a,alt:"logoFoot"})),l.a.createElement("hr",{className:"line"}))))}}]),a}(l.a.Component),x=a(21),D=a(22),J=a.n(D),M=a(16),P=a.n(M),Y=(a(62),JSON.parse(localStorage.getItem("printedFios"))||[]),A=function(e){var t=e.fio,a=e.onClick,n=e.selectedItem.selectFio;return l.a.createElement("li",{className:"adminList"},l.a.createElement("h3",{className:!0===Y.includes(t)&&t!==n?"printed":!0===Y.includes(t)&&t===n||!0!==Y.includes(t)&&t===n?"selectingNow":"notSelected"},t),l.a.createElement("button",{className:"formation",onClick:function(){return a(t)}},"\u0421\u0444\u043e\u0440\u043c\u0438\u0440\u043e\u0432\u0430\u0442\u044c"))},B=function(e){var t=e.onChange;return l.a.createElement("div",{className:"admin-search-box"},l.a.createElement("input",{className:"admin-search",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0444\u0430\u043c\u0438\u043b\u0438\u044e",name:"adminSearch",onChange:t}))},T=function(e){Object(g.a)(a,e);var t=Object(h.a)(a);function a(){return Object(f.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props.selectedItem,t=e.lastName,a=e.flagName,n=e.imgId,r=this.props.date;return l.a.createElement("div",{className:"pdf"},l.a.createElement("h1",{className:"title"},"\u0413\u0440\u0430\u043c\u043e\u0442\u0430 \u0428\u043b\u044f\u0445\u0442\u0438\u0447\u0430"),l.a.createElement("img",{className:"flagForPdf",src:"https://dmitrykalko.github.io/rakovich/base/images/"+ +n+".png",alt:"flagImage"}),l.a.createElement("h4",{className:"firstString"},"\u041d\u0430\u0441\u0442\u043e\u044f\u0449\u0430\u044f \u0433\u0440\u0430\u043c\u043e\u0442\u0430 \u0443\u0434\u043e\u0441\u0442\u043e\u0432\u0435\u0440\u044f\u0435\u0442, \u0447\u0442\u043e"),l.a.createElement("h2",{className:"fio"},this.props.fio),l.a.createElement("h4",{className:"secondString"},"\u043f\u0440\u0438\u043d\u0430\u0434\u043b\u0435\u0436\u0438\u0442 \u043a \u0448\u043b\u044f\u0445\u0435\u0446\u043a\u043e\u043c\u0443 \u0440\u043e\u0434\u0443"),l.a.createElement("h2",{className:"familyName"},"\xab",t,"\xbb"),l.a.createElement("h4",{className:"thirdString"},"\u0441 \u0440\u043e\u0434\u043e\u0432\u044b\u043c \u0433\u0435\u0440\u0431\u043e\u043c"),l.a.createElement("h2",{className:"familyFlag"},"\xab",a,"\xbb"),l.a.createElement("p",{className:"datePdf"},r))}}]),a}(l.a.Component),W=JSON.parse(localStorage.getItem("dataForSertificate"))||[],R=[];R=JSON.parse(localStorage.getItem("printedFios"))||[];var H=function(e){Object(g.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(f.a)(this,a);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).state={fio:"",selectedItem:"",date:"",autoClearingStatus:!1,adminSearch:"",applications:[]},e.isSelecting=function(t){var a=W.indexOf(t);e.setState({selectedItem:W[a+1]}),e.setState({selectedItem:Object(x.a)(Object(x.a)({},W[a+1]),{},{selectFio:t})}),e.setState({fio:t}),e.selectingDate()},e.clearListNow=function(){localStorage.clear(),window.location.reload()},e.autoCleanCheck=function(){n=JSON.parse(localStorage.getItem("autoClearingStatus")),console.log(n),!0===n&&e.autoClearList()},e.autoClearList=function(){var t=e.state.autoClearingStatus;if(!1===t){t=!0,localStorage.setItem("autoClearingStatus",JSON.stringify(t)),e.setState({autoClearingStatus:!0});var a=setInterval((function(){e.clearInTime()}),5e4);localStorage.setItem("intervalId",JSON.stringify(a)),console.log("\u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u043f\u043e\u0448\u0435\u043b!"),console.log(localStorage)}else{localStorage.setItem("autoClearingStatus",JSON.stringify(!1)),localStorage.removeItem("intervalId"),e.setState({autoClearingStatus:!1}),console.log("\u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u0437\u0430\u0433\u043b\u043e\u0445"),console.log(localStorage),console.log(!1)}},e.clearInTime=function(){var t=new Date,a=t.getHours(),n=t.getMinutes();0===a&&0===n&&e.clearList()},e.clearList=function(){localStorage.removeItem("dataForSertificate"),localStorage.removeItem("printedFios"),window.location.reload()},e.selectingDate=function(){var t=P()().locale("ru").format("DD MMMM YYYY");e.setState({date:t})},e.changeDate=function(t){var a=t.target.value,n=P()(a).locale("ru").format("D MMMM YYYY");e.setState({date:n})},e.alreadyPrinted=function(e,t){e(),""!==t&&R.push(t),localStorage.setItem("printedFios",JSON.stringify(R)),console.log(R)},e.findApplication=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(u.a)({},n,r))},e}return Object(d.a)(a,[{key:"componentWillMount",value:function(){this.autoCleanCheck(),console.log(localStorage);var e=W.filter((function(e){return"string"===typeof e}));this.setState({applications:e})}},{key:"fillterApplications",value:function(){var e=this.state,t=e.adminSearch,a=e.applications,n=Object(m.a)(a);return""!==t&&(n=n.filter((function(e){if(0===e.toLowerCase().indexOf(t.toLowerCase()))return e}))),n}},{key:"render",value:function(){var e=this;console.log(localStorage),console.log(this.state);var t=this.fillterApplications().map((function(t){return l.a.createElement(A,{key:t,fio:t,onClick:e.isSelecting,selectedItem:e.state.selectedItem})}));return l.a.createElement("div",{className:"adminPage"},l.a.createElement("ul",{className:"sertificate"},t),l.a.createElement("div",{className:"functional"},l.a.createElement(B,{onChange:this.findApplication,adminSearch:this.state.adminSearch}),l.a.createElement(J.a,{content:function(){return e.componentRef}},l.a.createElement(D.PrintContextConsumer,null,(function(t){var a=t.handlePrint;return l.a.createElement("button",{className:"print",onClick:function(){return e.alreadyPrinted(a,e.state.fio)}},"\u041f\u0435\u0447\u0430\u0442\u044c")}))),l.a.createElement("input",{type:"date",name:"date",className:"calendar",onChange:this.changeDate}),l.a.createElement("div",{className:"cleanering"},l.a.createElement("button",{className:"clear",onClick:this.clearListNow},"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a"),l.a.createElement("button",{className:"autoclear",style:!0===this.state.autoClearingStatus?{backgroundColor:"lime"}:{backgroundColor:"white"},onClick:this.autoClearList},"\u041e\u0447\u0438\u0449\u0430\u0442\u044c \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0432 00:00")),l.a.createElement("div",{className:"pdfToPrint"},l.a.createElement(T,{ref:function(t){return e.componentRef=t},fio:this.state.fio,date:this.state.date,selectedItem:this.state.selectedItem}))))}}]),a}(l.a.Component),U=function(){return l.a.createElement("div",{className:"admin"},l.a.createElement("h1",null,"\u0417\u0430\u044f\u0432\u043a\u0438 \u043d\u0430 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u044b"),l.a.createElement(H,null))},$=function(){return l.a.createElement(s.b,{basename:"/sula"},l.a.createElement(i.a,{path:"/",exact:!0,component:L}),l.a.createElement(i.a,{path:"/admin",exact:!0,component:U}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(s.a,null,l.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){}},[[39,1,2]]]);
//# sourceMappingURL=main.2d0643b5.chunk.js.map
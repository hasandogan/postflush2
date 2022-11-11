"use strict";function _typeof(e){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof(e)
/** @license
 * eventsource.js
 * Available under MIT License (MIT)
 * https://github.com/Yaffle/EventSource/
 */}!function(e){var t,n=e.setTimeout,o=e.clearTimeout,r=e.XMLHttpRequest,i=e.XDomainRequest,a=e.ActiveXObject,s=e.EventSource,c=e.document,u=e.Promise,l=e.fetch,d=e.Response,h=e.TextDecoder,f=e.TextEncoder,p=e.AbortController;function y(){this.bitsNeeded=0,this.codePoint=0}function m(){}function g(e){this.withCredentials=!1,this.readyState=0,this.status=0,this.statusText="",this.responseText="",this.onprogress=m,this.onload=m,this.onerror=m,this.onreadystatechange=m,this._contentType="",this._xhr=e,this._sendTimeout=0,this._abort=m}function v(e){return e.replace(/[A-Z]/g,(function(e){return String.fromCharCode(e.charCodeAt(0)+32)}))}function b(e){for(var t=Object.create(null),n=e.split("\r\n"),o=0;o<n.length;o+=1){var r=(i=n[o].split(": ")).shift(),i=i.join(": ");t[v(r)]=i}this._map=t}function w(){}function S(e){this._headers=e}function T(){}function E(){this._listeners=Object.create(null)}function C(e){n((function(){throw e}),0)}function _(e){this.type=e,this.target=void 0}function x(e,t){_.call(this,e),this.data=t.data,this.lastEventId=t.lastEventId}function A(e,t){_.call(this,e),this.status=t.status,this.statusText=t.statusText,this.headers=t.headers}function O(e,t){_.call(this,e),this.error=t.error}"undefined"==typeof window||void 0===c||"readyState"in c||null!=c.body||(c.readyState="loading",window.addEventListener("load",(function(e){c.readyState="complete"}),!1)),null==r&&null!=a&&(r=function(){return new a("Microsoft.XMLHTTP")}),null==Object.create&&(Object.create=function(e){function t(){}return t.prototype=e,new t}),Date.now||(Date.now=function(){return(new Date).getTime()}),null==p&&(t=l,l=function(e,n){var o=n.signal;return t(e,{headers:n.headers,credentials:n.credentials,cache:n.cache}).then((function(e){var t=e.body.getReader();return o._reader=t,o._aborted&&o._reader.cancel(),{status:e.status,statusText:e.statusText,headers:e.headers,body:{getReader:function(){return t}}}}))},p=function(){this.signal={_reader:null,_aborted:!1},this.abort=function(){null!=this.signal._reader&&this.signal._reader.cancel(),this.signal._aborted=!0}}),y.prototype.decode=function(e){function t(e,t,n){if(1===n)return 128>>t<=e&&e<<t<=2047;if(2===n)return 2048>>t<=e&&e<<t<=55295||57344>>t<=e&&e<<t<=65535;if(3===n)return 65536>>t<=e&&e<<t<=1114111;throw new Error}function n(e,t){if(6===e)return 15<t>>6?3:31<t?2:1;if(12===e)return 15<t?3:2;if(18===e)return 3;throw new Error}for(var o="",r=this.bitsNeeded,i=this.codePoint,a=0;a<e.length;a+=1){var s=e[a];0!==r&&(s<128||191<s||!t(i<<6|63&s,r-6,n(r,i)))&&(r=0,i=65533,o+=String.fromCharCode(i)),0===r?(i=0<=s&&s<=127?(r=0,s):192<=s&&s<=223?(r=6,31&s):224<=s&&s<=239?(r=12,15&s):240<=s&&s<=247?(r=18,7&s):(r=0,65533),0===r||t(i,r,n(r,i))||(r=0,i=65533)):(r-=6,i=i<<6|63&s),0===r&&(i<=65535?o+=String.fromCharCode(i):o=(o+=String.fromCharCode(55296+(i-65535-1>>10)))+String.fromCharCode(56320+(i-65535-1&1023)))}return this.bitsNeeded=r,this.codePoint=i,o},null!=h&&null!=f&&function(){try{return"test"===(new h).decode((new f).encode("test"),{stream:!0})}catch(e){}return!1}()||(h=y),g.prototype.open=function(e,t){this._abort(!0);var i=this,a=this._xhr,s=1,c=0,u=(this._abort=function(e){0!==i._sendTimeout&&(o(i._sendTimeout),i._sendTimeout=0),1!==s&&2!==s&&3!==s||(s=4,a.onload=m,a.onerror=m,a.onabort=m,a.onprogress=m,a.onreadystatechange=m,a.abort(),0!==c&&(o(c),c=0),e||(i.readyState=4,i.onabort(null),i.onreadystatechange())),s=0},function(){if(1===s){var e=0,t="",n=void 0;if("contentType"in a)e=200,t="OK",n=a.contentType;else try{e=a.status,t=a.statusText,n=a.getResponseHeader("Content-Type")}catch(o){t="",n=void(e=0)}0!==e&&(s=2,i.readyState=2,i.status=e,i.statusText=t,i._contentType=n,i.onreadystatechange())}}),l=function(){if(u(),2===s||3===s){s=3;var e="";try{e=a.responseText}catch(e){}i.readyState=3,i.responseText=e,i.onprogress()}},d=function(e,t){if(null!=t&&null!=t.preventDefault||(t={preventDefault:m}),l(),1===s||2===s||3===s){if(s=4,0!==c&&(o(c),c=0),i.readyState=4,"load"===e)i.onload(t);else if("error"===e)i.onerror(t);else{if("abort"!==e)throw new TypeError;i.onabort(t)}i.onreadystatechange()}},h=function e(){c=n((function(){e()}),500),3===a.readyState&&l()};"onload"in a&&(a.onload=function(e){d("load",e)}),"onerror"in a&&(a.onerror=function(e){d("error",e)}),"onabort"in a&&(a.onabort=function(e){d("abort",e)}),"onprogress"in a&&(a.onprogress=l),"onreadystatechange"in a&&(a.onreadystatechange=function(e){null!=a&&(4===a.readyState?"onload"in a&&"onerror"in a&&"onabort"in a||d(""===a.responseText?"error":"load",e):3===a.readyState?"onprogress"in a||l():2===a.readyState&&u())}),!("contentType"in a)&&"ontimeout"in r.prototype||(t+=(-1===t.indexOf("?")?"?":"&")+"padding=true"),a.open(e,t,!0),"readyState"in a&&(c=n((function(){h()}),0))},g.prototype.abort=function(){this._abort(!1)},g.prototype.getResponseHeader=function(e){return this._contentType},g.prototype.setRequestHeader=function(e,t){var n=this._xhr;"setRequestHeader"in n&&n.setRequestHeader(e,t)},g.prototype.getAllResponseHeaders=function(){return null!=this._xhr.getAllResponseHeaders&&this._xhr.getAllResponseHeaders()||""},g.prototype.send=function(){var e;if("ontimeout"in r.prototype&&("sendAsBinary"in r.prototype||"mozAnon"in r.prototype)||null==c||null==c.readyState||"complete"===c.readyState){var t=this._xhr;"withCredentials"in t&&(t.withCredentials=this.withCredentials);try{t.send(void 0)}catch(e){throw e}}else(e=this)._sendTimeout=n((function(){e._sendTimeout=0,e.send()}),4)},b.prototype.get=function(e){return this._map[v(e)]},null!=r&&null==r.HEADERS_RECEIVED&&(r.HEADERS_RECEIVED=2),w.prototype.open=function(e,t,n,o,i,a,s){e.open("GET",i);var c,u=0;for(c in e.onprogress=function(){var t=e.responseText.slice(u);u+=t.length,n(t)},e.onerror=function(e){e.preventDefault(),o(new Error("NetworkError"))},e.onload=function(){o(null)},e.onabort=function(){o(null)},e.onreadystatechange=function(){var n,o,i,a;e.readyState===r.HEADERS_RECEIVED&&(n=e.status,o=e.statusText,i=e.getResponseHeader("Content-Type"),a=e.getAllResponseHeaders(),t(n,o,i,new b(a)))},e.withCredentials=a,s)Object.prototype.hasOwnProperty.call(s,c)&&e.setRequestHeader(c,s[c]);return e.send(),e},S.prototype.get=function(e){return this._headers.get(e)},T.prototype.open=function(e,t,n,o,r,i,a){var s=null,c=new p,d=c.signal,f=new h;return l(r,{headers:a,credentials:i?"include":"same-origin",signal:d,cache:"no-store"}).then((function(e){return s=e.body.getReader(),t(e.status,e.statusText,e.headers.get("Content-Type"),new S(e.headers)),new u((function(e,t){!function o(){s.read().then((function(t){t.done?e(void 0):(t=f.decode(t.value,{stream:!0}),n(t),o())})).catch((function(e){t(e)}))}()}))})).catch((function(e){if("AbortError"!==e.name)return e})).then((function(e){o(e)})),{abort:function(){null!=s&&s.cancel(),c.abort()}}},E.prototype.dispatchEvent=function(e){var t=(e.target=this)._listeners[e.type];if(null!=t)for(var n=t.length,o=0;o<n;o+=1){var r=t[o];try{"function"==typeof r.handleEvent?r.handleEvent(e):r.call(this,e)}catch(e){C(e)}}},E.prototype.addEventListener=function(e,t){e=String(e);for(var n=this._listeners,o=n[e],r=(null==o&&(n[e]=o=[]),!1),i=0;i<o.length;i+=1)o[i]===t&&(r=!0);r||o.push(t)},E.prototype.removeEventListener=function(e,t){e=String(e);var n=this._listeners,o=n[e];if(null!=o){for(var r=[],i=0;i<o.length;i+=1)o[i]!==t&&r.push(o[i]);0===r.length?delete n[e]:n[e]=r}},x.prototype=Object.create(_.prototype),A.prototype=Object.create(_.prototype),O.prototype=Object.create(_.prototype);var q=/^text\/event\-stream(;.*)?$/i,L=function(e,t){return e=null==e?t:parseInt(e,10),I(e=e!=e?t:e)},I=function(e){return Math.min(Math.max(e,1e3),18e6)},R=function(e,t,n){try{"function"==typeof t&&t.call(e,n)}catch(e){C(e)}};function D(e,t){function a(e,t,n,o){var r;0===H&&(200===e&&null!=n&&q.test(n)?(H=1,m=Date.now(),y=h,u.readyState=1,r=new A("open",{status:e,statusText:t,headers:o}),u.dispatchEvent(r),R(u,u.onopen,r)):(200!==e?t=t&&t.replace(/\s+/g," "):null!=n&&n.replace(/\s+/g," "),F(),r=new A("error",{status:e,statusText:t,headers:o}),u.dispatchEvent(r),R(u,u.onerror,r)))}function s(e){if(1===H){for(var t=-1,r=0;r<e.length;r+=1)(c=e.charCodeAt(r))!=="\n".charCodeAt(0)&&c!=="\r".charCodeAt(0)||(t=r);var i=(-1!==t?P:"")+e.slice(0,t+1);P=(-1===t?P:"")+e.slice(t+1),""!==e&&(m=Date.now(),v+=e.length);for(var a=0;a<i.length;a+=1){var s,c=i.charCodeAt(a);if(-1===X&&c==="\n".charCodeAt(0))X=0;else if(-1===X&&(X=0),c==="\r".charCodeAt(0)||c==="\n".charCodeAt(0)){if(0!==X&&(1===X&&(Z=a+1),l=i.slice(J,Z-1),s=i.slice(Z+(Z<a&&i.charCodeAt(Z)===" ".charCodeAt(0)?1:0),a),"data"===l?k=k+"\n"+s:"id"===l?j=s:"event"===l?M=s:"retry"===l?(h=L(s,h),y=h):"heartbeatTimeout"===l&&(f=L(s,f),0!==D&&(o(D),D=n((function(){U()}),f)))),0===X){if(""!==k){p=j;var l=new x(M=""===M?"message":M,{data:k.slice(1),lastEventId:j});if(u.dispatchEvent(l),"open"===M?R(u,u.onopen,l):"message"===M?R(u,u.onmessage,l):"error"===M&&R(u,u.onerror,l),2===H)return}M=k=""}X=c==="\r".charCodeAt(0)?-1:0}else 0===X&&(J=a,X=1),1===X?c===":".charCodeAt(0)&&(Z=a+1,X=2):2===X&&(X=3)}}}function c(e){1!==H&&0!==H||(H=-1,0!==D&&(o(D),D=0),D=n((function(){U()}),y),y=I(Math.min(16*h,2*y)),u.readyState=0,e=new O("error",{error:e}),u.dispatchEvent(e),R(u,u.onerror,e))}var u,l,d,h,f,p,y,m,v,b,S,C,_,D,H,k,j,M,P,X,J,Z,F,U;E.call(this),t=t||{},this.onopen=void 0,this.onmessage=void 0,this.onerror=void 0,this.url=void 0,this.readyState=void 0,this.withCredentials=void 0,this.headers=void 0,this._close=void 0,u=this,l=e,e=t,l=String(l),t=Boolean(e.withCredentials),d=e.lastEventIdQueryParameterName||"lastEventId",h=I(1e3),f=L(e.heartbeatTimeout,45e3),p="",y=h,m=!1,v=0,b=e.headers||{},e=e.Transport,S=N&&null==e?void 0:new g(new(null!=e?e:null!=r&&"withCredentials"in r.prototype||null==i?r:i)),C=new(null!=e&&"string"!=typeof e?e:null==S?T:w),_=void 0,H=-1,P=M=j=k="",X=0,Z=J=D=0,F=function(){H=2,null!=_&&(_.abort(),_=void 0),0!==D&&(o(D),D=0),u.readyState=2},U=function(){if(D=0,-1!==H)m||null==_?(e=Math.max((m||Date.now())+f-Date.now(),1),m=!1,D=n((function(){U()}),e)):(c(new Error("No activity within "+f+" milliseconds. "+(0===H?"No response received.":v+" chars received.")+" Reconnecting.")),null!=_&&(_.abort(),_=void 0));else{m=!1,v=0,D=n((function(){U()}),f),H=0,j=p,P=M=k="",Z=J=0,X=0;var e=l,t=("data:"!==l.slice(0,5)&&"blob:"!==l.slice(0,5)&&""!==p&&(e=-1===(t=l.indexOf("?"))?l:l.slice(0,t+1)+l.slice(t+1).replace(/(?:^|&)([^=&]*)(?:=[^&]*)?/g,(function(e,t){return t===d?"":e})),e+=(-1===l.indexOf("?")?"?":"&")+d+"="+encodeURIComponent(p)),u.withCredentials),o={Accept:"text/event-stream"},r=u.headers;if(null!=r)for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(o[i]=r[i]);try{_=C.open(S,a,s,c,e,t,o)}catch(e){throw F(),e}}},u.url=l,u.readyState=0,u.withCredentials=t,u.headers=b,u._close=F,U()}var N=null!=l&&null!=d&&"body"in d.prototype;(D.prototype=Object.create(E.prototype)).CONNECTING=0,D.prototype.OPEN=1,D.prototype.CLOSED=2,D.prototype.close=function(){this._close()},D.CONNECTING=0,D.OPEN=1,D.CLOSED=2,D.prototype.withCredentials=void 0;var H=s;null==r||null!=s&&"withCredentials"in s.prototype||(H=D),d=function(e){e.EventSourcePolyfill=D,e.NativeEventSource=s,e.EventSource=H},"object"==("undefined"==typeof module?"undefined":_typeof(module))&&"object"==_typeof(module.exports)?d(exports):"function"==typeof define&&define.amd?define(["exports"],d):d(e)}("undefined"==typeof globalThis?"undefined"!=typeof window?window:"undefined"!=typeof self?self:void 0:globalThis);var app={posted:!1,init:function(){this.listen(),this.checkTheme(),this.getLastMessage(),this.eventListener()},checkTheme:function(){"dark"===window.localStorage.theme?this.toggleTheme("dark"):this.toggleTheme("light")},toggleTheme:function(e){"dark"===e?(window.localStorage.setItem("theme","dark"),document.querySelector("html").classList.add("dark"),document.querySelector(".toggle-theme").setAttribute("rel","light"),document.querySelector(".toggle-theme").innerHTML="&#9788"):(window.localStorage.removeItem("theme"),document.querySelector("html").classList.remove("dark"),document.querySelector(".toggle-theme").setAttribute("rel","dark"),document.querySelector(".toggle-theme").innerHTML="&#9789")},listen:function(){var e=this,t=new URL(postFlushUrl);t.searchParams.append("topic","live_message");var n=new EventSourcePolyfill(t,{headers:{Authorization:"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJtZXJjdXJlIjp7InB1Ymxpc2giOlsibGl2ZV9tZXNzYWdlIl0sInN1YnNjcmliZSI6WyJsaXZlX21lc3NhZ2UiXX19.ZExNcHj3ehEyAQXbNv70JW8e_qX62KCEFLoIwQMPMwI"}});n.withCredentials=!0,n.onmessage=function(t){var n=JSON.parse(t.data);e.createBubble(app.posted,n)}},getLastMessage:function(){var e=this;fetch("/lastMessage",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8","Access-Control-Origin":"*"}}).then((function(e){return e.json()})).then((function(t){t.forEach((function(t){var n={message:t.message,username:t.username};e.createMessageHtml(n)}))}))},createMessageHtml:function(e){var t=document.createElement("div");t.classList.add("message-bubble"),t.innerHTML='\n\t\t\t<div class="user">'.concat(e.username,'</div>\n\t\t\t<div class="message">').concat(e.message,"</div>\n\t\t"),this.checkLimit(),document.querySelector("#messages").appendChild(t),document.querySelector("#result").scrollTo(0,1e7)},createBubble:function(e,t){this.createMessageHtml(t),!1!==e&&(document.querySelector("#message").value="",document.querySelector("#button").disabled=!0,setTimeout((function(e){document.querySelector("#button").disabled=!1,document.querySelector("#message").focus(),app.posted=!1}),3e3))},checkLimit:function(){var e=document.querySelectorAll(".message-bubble");100===e.length&&e[0].remove()},fetchData:function(){var e="username=".concat(document.querySelector("#username").value,"&message=").concat(document.querySelector("#message").value);fetch("message",{method:"POST",body:e,headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8","Access-Control-Origin":"*"}}).then((function(e){return e.json()})).then((function(e){})),app.posted=!0},limitFormat:function(e,t){e.target.value=e.target.value.substr(0,t)},checkInputs:function(){var e=document.querySelector("#message"),t=document.querySelector("#username");if(0!==t.value.trim().length)if(0!==e.value.trim().length){if(t.value.trim().length>0&&e.value.trim().length>0){if(!1===app.posted)return;this.fetchData()}}else e.focus();else t.focus()},eventListener:function(){var e=this;document.querySelector("#username").addEventListener("keypress",(function(t){"Enter"===t.key&&(t.preventDefault(),e.checkInputs())})),document.querySelector("#message").addEventListener("keypress",(function(t){"Enter"===t.key&&(t.preventDefault(),e.checkInputs())})),document.querySelector("#message").addEventListener("input",(function(t){e.limitFormat(t,80)})),document.querySelector("#username").addEventListener("input",(function(t){e.limitFormat(t,20)})),document.querySelector("#button").addEventListener("click",(function(t){e.checkInputs()})),document.querySelector(".toggle-theme").addEventListener("click",(function(t){e.toggleTheme(t.target.getAttribute("rel"))}))}};
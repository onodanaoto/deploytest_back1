(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3454:function(e,t,n){"use strict";var r,o;e.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"==typeof(null==(o=n.g.process)?void 0:o.env)?n.g.process:n(7663)},5557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(4988)}])},4988:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var r=n(5893),o=n(7294),i=n(3454);function s(){let[e,t]=(0,o.useState)(""),n=async()=>{let e=await fetch("".concat(i.env.BACKEND_URL,"/api/hello"),{method:"GET"}),n=await e.json();console.log("GETリクエストの結果:",n.message),t(n.message)},[s,u]=(0,o.useState)(""),[c,a]=(0,o.useState)(""),l=async e=>{e.preventDefault();let t=await fetch("".concat(i.env.BACKEND_URL,"/api/multiply/").concat(s),{method:"GET"}),n=await t.json();console.log("IDリクエストの結果:",n.doubled_value),a(n.doubled_value)},[h,f]=(0,o.useState)(""),[p,d]=(0,o.useState)(""),m=async e=>{e.preventDefault(),console.log("入力情報:",h);let t=await fetch("".concat(i.env.BACKEND_URL,"/api/echo"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:h})});console.log(JSON.stringify({message:h}));let n=await t.json();console.log("Backendからのお返事:",n.message),d(n.message)};return(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{children:"Next.jsとFlaskの連携アプリ"}),(0,r.jsx)("h2",{children:"GETリクエストを送信"}),(0,r.jsx)("button",{onClick:n,children:"GETリクエストを送信"}),e&&(0,r.jsxs)("p",{children:["サーバーからのGET応答: ",e]}),(0,r.jsx)("h2",{children:"IDを指定してGETリクエストを送信"}),(0,r.jsxs)("form",{onSubmit:l,children:[(0,r.jsx)("input",{type:"number",value:s,onChange:e=>u(e.target.value),placeholder:"IDを入力してください"}),(0,r.jsx)("button",{type:"submit",children:"送信"})]}),c&&(0,r.jsxs)("p",{children:["Flaskからの応答: ",c]}),(0,r.jsx)("h2",{children:"POSTリクエストを送信"}),(0,r.jsxs)("form",{onSubmit:m,children:[(0,r.jsx)("input",{type:"text",value:h,onChange:e=>f(e.target.value),placeholder:"テキストを入力してください"}),(0,r.jsx)("button",{type:"submit",children:"送信"})]}),p&&(0,r.jsxs)("p",{children:["FlaskからのPOST応答: ",p]})]})}},7663:function(e){!function(){var t={229:function(e){var t,n,r,o=e.exports={};function i(){throw Error("setTimeout has not been defined")}function s(){throw Error("clearTimeout has not been defined")}function u(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{n="function"==typeof clearTimeout?clearTimeout:s}catch(e){n=s}}();var c=[],a=!1,l=-1;function h(){a&&r&&(a=!1,r.length?c=r.concat(c):l=-1,c.length&&f())}function f(){if(!a){var e=u(h);a=!0;for(var t=c.length;t;){for(r=c,c=[];++l<t;)r&&r[l].run();l=-1,t=c.length}r=null,a=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===s||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function d(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new p(e,t)),1!==c.length||a||u(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=d,o.addListener=d,o.once=d,o.off=d,o.removeListener=d,o.removeAllListeners=d,o.emit=d,o.prependListener=d,o.prependOnceListener=d,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}},s=!0;try{t[e](i,i.exports,r),s=!1}finally{s&&delete n[e]}return i.exports}r.ab="//";var o=r(229);e.exports=o}()}},function(e){e.O(0,[888,774,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);
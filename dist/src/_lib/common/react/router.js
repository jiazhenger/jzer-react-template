import e from"../../../../node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js";import r from"../../../../node_modules/@babel/runtime/regenerator/index.js";var n={format:function(e,r){if(!e)return"";var n=window,t=n.$fn,a=n.$http;if(t.isObject(e)){if(r){var i="";for(var o in e)i+="/"+e[o];return i}return a.serializeParam(e)}return"/"+e},push:function(e,r,n,t){e.push(r+this.format(n,t))},replace:function(e,r,n,t){e.replace(r+this.format(n,t))},pushNext:function(e,r,n){r=r.includes("/")?r:"/"+r,r=this.getRoot(r)+r,this.push(e,r,n)},getRoot:function(e){var r=window.location.hash;return r=(r=r.replace("#","")).replace(/\?.+/g,"")},getDymaicMenu:function(n){var t=this;return e(r.mark((function e(){var a,i,o,s,u,c,f,h;return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n.isLogin,i=n.api,o=n.data,s=n.childRouter,u=window,c=u.$fn,f=c.session("menu"),!a&&c.hasArray(f)){e.next=13;break}if(c.hasArray(o)&&(f=o),!i){e.next=12;break}if(!(h=c.getToken())&&!a){e.next=11;break}return e.next=10,window.$http.pull(null,i,{loading:!0,pass:!0});case 10:f=e.sent;case 11:h||c.go("/login");case 12:c.hasArray(f)?(t.getChildRouter(f,s),c.session("menu",f)):f=[];case 13:return e.abrupt("return",f);case 14:case"end":return e.stop()}}),e)})))()},getChildRouter:function(e,r){var n=this,t=window.$fn;t.hasArray(e)&&e.forEach((function(e){var a=e.name,i=e.children;if(t.hasArray(i))n.getChildRouter(i,r);else if(t.hasObject(r)){var o=r[a];t.hasArray(o)&&(e.child=o)}}))}};export{n as default};

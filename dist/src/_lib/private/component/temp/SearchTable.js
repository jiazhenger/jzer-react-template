import e from"../../../../../node_modules/@babel/runtime/helpers/esm/extends.js";import r from"../../../../../node_modules/@babel/runtime/helpers/esm/defineProperty.js";import t from"../../../../../node_modules/@babel/runtime/helpers/esm/slicedToArray.js";import n from"react";function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}var a=window,u=a.$lazy,c=a.$,s=a.$fn,i=u.load((function(){return import("../../template/content/page-content.js")})),f=u.load((function(){return import("../../template/box/box.js")})),m=u.hook((function(){return import("../form/search-form.js")})),p=u.hook((function(){return import("../../../global/plugin/antd/table/index.js")})),b=function(r,o){var a,u,b=r.page,d=r.box,h=r.search,j=r.table,v=r.height,y=r.className,O=r.style,g=r.onTableRef,w=n.useState(),P=t(w,2),R=P[0],E=P[1],k=n.useState(null!==(a=null==j||null===(u=j.row)||void 0===u?void 0:u.keys)&&void 0!==a?a:[]),x=t(k,2),S=x[0],D=x[1],C=n.useRef(),$=n.useRef(),_=s.hasObject(h)?l({loading:R,onSubmit:function(e){return c.ref(C).search(e)},onReset:function(){return c.ref(C).reset()}},h):null,N=s.hasObject(j)?l(l(l(l({search:h,tableRef:function(){return c.ref(C)},searchRef:function(){var e,r;return null===(e=c.ref($))||void 0===e||null===(r=e.ref)||void 0===r?void 0:r.call(e)},keys:S,onKeysChange:function(e){return D(e)}},j),null!=b&&b.perm?{perm:b.perm}:null),null!=d&&d.perm?{perm:d.perm}:null),{},{onLoading:function(e){return E(e)},onRef:g}):null,T=s.hasObject(b)?l({table:N,keys:S,contentClass:"plr10",loading:R},b):null,z=s.hasObject(j)?l({table:N,keys:S,contentClass:"plr10",loading:R},d):null;n.useImperativeHandle(o,(function(){return{searchRef:function(){var e,r;return null===(e=c.ref($))||void 0===e||null===(r=e.ref)||void 0===r?void 0:r.call(e)},tableRef:function(){return c.ref(C)}}}));var A=n.createElement(n.Fragment,null,h&&!h.hide&&n.createElement(m,e({ref:$},_)),j&&n.createElement(p,e({ref:C},N)));return b?n.createElement(i,T,A):d?n.createElement(f,z,A):n.createElement("div",{className:"fv ex h ".concat(c.css(y)),style:l({height:v},O)},A)};export{b as default};

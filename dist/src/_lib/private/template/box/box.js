import e from"../../../../../node_modules/@babel/runtime/helpers/esm/extends.js";import t from"../../../../../node_modules/@babel/runtime/helpers/esm/defineProperty.js";import r from"react";import o from"../../../common/utils/isColor.js";function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}var n=window,s=n.$,a=n.$fn,c=n.$lazy,i=c.load((function(){return import("../title/title.js")})),d=c.load((function(){return import("../../../global/plugin/antd/loading.js")})),m=c.load((function(){return import("../../../global/plugin/antd/empty.js")})),u=function(n){var c=n.className,u=n.style,b=n.scroll,p=void 0!==b&&b;n.header,n.footer;var f=n.children,g=n.width,j=n.height,y=n.bgcolor,O=void 0===y?"bcf":y,h=n.contentClass,v=n.scrollClass,w=n.paddingClass,E=n.auto,P=n.minHeight,x=void 0===P?100:P,C=n.data,N=n.loading,D=n.loadingSize,S=void 0===D?"large":D,z=n.disabled,$=n.title,_=n.subTitle,k=n.titleSlot,H=n.controls,T=void 0===H?[]:H,A=n.titleClassName,F=n.table;return o(O)&&(u={backgroundColor:O},O=""),u=function(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?l(Object(o),!0).forEach((function(r){t(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}({width:g,height:j},u),$=a.isObject($)?$:$?{title:$,controls:T,subTitle:_}:null,r.createElement(r.Fragment,null,r.createElement("section",{className:"r5px ".concat(s.css(!E,"fv ex")," ").concat(s.css(O)," ").concat(s.css(c)),style:u},a.hasObject($)&&r.createElement(i,e({table:F,loading:N,disabled:z,className:A},$),k),r.createElement("div",{className:"rel ".concat(s.css(!E,"fv ex")," ").concat(s.css(h)," ").concat(s.css(!p,w)),style:{minHeight:x}},a.hasArray(C)||!C?p?r.createElement("div",{className:"oxys abs_full scrollbar ".concat(s.css(v)," ").concat(s.css(w))},f):f:null,r.createElement(m,{data:C,simple:!0}),r.createElement(d,{size:S,loading:N}))))};export{u as default};

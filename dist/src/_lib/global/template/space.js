import e from"../../../../node_modules/@babel/runtime/helpers/esm/defineProperty.js";import r from"react";function t(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function n(r){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?t(Object(o),!0).forEach((function(t){e(r,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))}))}return r}var o=window,c=o.$config,i=o.$,a={center:"fxmc",end:"fxmr"},s=function(e){var t,o=e.children,s=e.className,p=e.align,f=void 0===p?"start":p,l=e.style,b=e.gap,u=void 0===b?c.btnSpace:b;return r.createElement("div",{className:"".concat(i.css(s)," ").concat(null!==(t=a[f])&&void 0!==t?t:"fxm"),style:n({gap:u},l)},o)};export{s as default};

import e from"../../../_node/@babel/runtime/helpers/esm/defineProperty.js";import t from"react";function r(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var n=window,o=n.$lazy,i=n.$,a=n.$config,c=o.load((function(){return import("../../../global/plugin/antd/tabs.js")})),l=function(n){var o=n.data,l=n.idStr,u=void 0===l?a.idStr:l,s=function(t){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?r(Object(o),!0).forEach((function(r){e(t,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}({className:"jzer-tabs-menu ".concat(i.css(1===o.length,"jzer-tabs-menu-one")),gap:5,antd:{type:"editable-card",hideAdd:!0,onEdit:function(e){if(o.length>1){var t,r=o.findIndex((function(t){return t[u]===e})),i=o[r];o.splice(r,1),null==n||null===(t=n.onClose)||void 0===t||t.call(n,{data:o,index:r,row:i,value:e})}}},out:1},n);return t.createElement(c,s)};export{l as default};
import e from"../../../../../node_modules/@babel/runtime/helpers/esm/extends.js";import l from"../../../../../node_modules/@babel/runtime/helpers/esm/toConsumableArray.js";import t from"../../../../../node_modules/@babel/runtime/helpers/esm/slicedToArray.js";import n,{useState as o,useEffect as r,useCallback as a}from"react";import{useHistory as i}from"react-router-dom";import s from"../utils/controls.js";var d=window,u=d.$lazy,m=d.$fn,c=d.$,p=d.$config,f=u.load((function(){return import("../../../global/plugin/antd/button.js")})),b=u.load((function(){return import("../../../global/plugin/antd/dropdown.js")})),g=u.load((function(){return import("../../../global/plugin/antd/popconfirm.js")})),y=u.hook((function(){return import("../../../global/plugin/antd/form/upload/index.js")})),h=u.load((function(){return import("../../../global/template/space.js")})),v=function(d){var u=d.data,v=d.className,k=d.style,j=d.size,w=void 0===j?"small":j,E=d.align,x=void 0===E?"end":E,z=d.loading,C=d.refresh,N=d.back,R=d.table,$=d.isTable,A=d.keys,P=i(),T=o(u),_=t(T,2),B=_[0],F=_[1];r((function(){return F(u)}),[u]),r((function(){F((function(e){return C&&(e=[].concat(l(e),[{mode:"refresh"}])),N&&(e=[].concat(l(e),[{mode:"back"}])),e}))}),[]);var K=function(e){return s({option:e,history:P,tableConfig:R})},L=a((function(e){var l=e.mode,t=e.disabled,n=e.isKeys;if(m.getResult(d.disabled))return!0;if(["del","delPop"].includes(l)&&!$&&(n=1),!n||null==R||!R.row)return m.getResult(t);var o=R.tableRef;return o?0===(null==A?void 0:A.length)||m.getResult(t,{keys:A,rows:o().rows}):void 0}),[A]);return m.hasArray(B)?n.createElement(h,{align:x,className:v,style:k},B.map((function(l,t){if(!m.hasObject(l))return null;var o=l.hide,r=l.mode,a=l.label,i=l.ghost,s=l.show;l.label=a||p.btnName[r],l.ghost=$?null==i||i:m.isBoolean(i)?i:!!["del","delPop","back","refresh","clear"].includes(r)||i;var d=L(l);if(o)return null;if(!1===s)return null;if("delPop"===r){var u,h=null!==(u=l.msg)&&void 0!==u?u:"确认".concat(l.label,"此数据？");return n.createElement(g,{title:h,onConfirm:K.bind(null,l),key:t},n.createElement(f,e({size:w,loading:z},l,{disabled:d})))}return"dropdown"===r?n.createElement(b,e({size:w,loading:z},l,{disabled:d,key:t,onClick:K})):"upload"===r&&l.api?n.createElement(y,e({listType:"button",showUploadList:!1,loading:z},l,{key:t})):"div"===r?n.createElement("div",e({},l,{key:t}),c.cpt(l.slot)):"ex"===r?n.createElement("div",e({className:"ex"},l,{key:t}),c.cpt(l.slot)):l.slot?n.createElement(n.Fragment,{key:t},c.cpt(l.slot)):n.createElement(f,e({size:w,loading:z},l,{disabled:d,key:t,onClick:K.bind(null,l)}))}))):null};export{v as default};

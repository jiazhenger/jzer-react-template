import e from"../../../_node/@babel/runtime/helpers/esm/extends.js";import r from"../../../_node/@babel/runtime/helpers/esm/defineProperty.js";import t from"../../../_node/@babel/runtime/helpers/esm/asyncToGenerator.js";import n from"../../../_node/@babel/runtime/helpers/esm/slicedToArray.js";import o from"../../../_node/@babel/runtime/regenerator/index.js";import l,{useState as a,useRef as u,useCallback as i,useImperativeHandle as d}from"react";function f(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}var s=window,c=s.$lazy,p=s.$fn,b=s.$config,v=s.$http,g=s.$,k=c.hook((function(){return import("../../../global/plugin/antd/modal.js")})),O=c.hook((function(){return import("../form/submit-form.js")})),R=function(f,s){var c=a({}),R=n(c,2),j=R[0],x=R[1],y=a({}),h=n(y,2),w=h[0],P=h[1],S=a(f),D=n(S,2),E=D[0],N=D[1],T=u(),$=u(),_=u(),V=E.onSubmit,A=E.form,I=E.modal,C=u(),z=function(){var e,r,t,n;return null===(e=g.ref(T))||void 0===e||null===(r=e.ref)||void 0===r||null===(t=r.call(e))||void 0===t||null===(n=t.update)||void 0===n?void 0:n.call(t)},B=i(function(){var e=t(o.mark((function e(t){var n,l,a,u,i,d,f,s,c,k,O,R,j,y,h,w,S,D,E,N,$,V,A,I,C,F,G,M,U;return o.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.form,u=void 0===a?{}:a,i=t.modal,d=void 0===i?{}:i,f=t.tableRef,s=t.mode,c=t.onAdd,k=t.onMod,O=t.id,R=t.bidStr,j=void 0===R?b.pullIdName:R,y=t.sidStr,h=void 0===y?b.postIdName:y,w=t.backInfo,S=t.onBackData,D=t.backData,E=t.onEnd,N=t.param,$=t.backParam,V=t.abs,A=t.start,I=g.ref(_),C=null===(n=g.ref(T))||void 0===n||null===(l=n.ref)||void 0===l?void 0:l.call(n)){e.next=5;break}return e.abrupt("return",setTimeout((function(){return B(t)}),100));case 5:if(F={modal:d,form:u,formRef:C,modalRef:I,tableRef:f,start:A,update:z,add:"add"===s,mod:"mod"===s},O=p.getResult(O),N=p.getResult(N),$=p.getResult($),"add"!==s){e.next=16;break}return e.next=12,null==c?void 0:c(F);case 12:x.ids=null,null==E||E(F),e.next=26;break;case 16:if("mod"!==s){e.next=25;break}return e.next=19,null==k?void 0:k(F);case 19:if(x.ids=r({},h,O),!w){e.next=23;break}return w=p.getResult(w,F),e.abrupt("return",null==C||null===(G=C.setValue)||void 0===G?void 0:G.call(C,w));case 23:e.next=26;break;case 25:x.ids=null;case 26:if(!(M=u.infoApi)){e.next=34;break}return V||($=m(r({},j,O),$)),O=$?null:O,e.next=32,v.pull(x,M,{id:O,param:$}).then((function(e){var r,t=m(m({},F),{},{id:O,param:N,backParam:$,data:e});"list"===s?P(e):S?null==S||S(t):(D=p.getResult(D,t),null==C||null===(r=C.setValue)||void 0===r||r.call(C,m(m({},e),D)));null==E||E(t)}));case 32:e.next=36;break;case 34:D?null==C||null===(U=C.setValue)||void 0===U||U.call(C,p.getResult(D,F)):null==S||S(F),null==E||E(F);case 36:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),[]),F=i(function(){var e=t(o.mark((function e(r){var t,n,l,a,u,i,d,m,s,c,p,v,k,O,R,j;return o.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(t=null!=r?r:f).modal,l=void 0===n?{}:n,a=t.mode,u=t.label,i=t.onStart,d=g.ref(_),$.current=t.tableRef,m=l.title,s=l.addTitle,c=l.modTitle,"add"===a||"mod"===a?(u=null!==(p=u)&&void 0!==p?p:null==b||null===(v=b.btnName)||void 0===v?void 0:v[a],m&&m!==(null==b||null===(k=b.btnName)||void 0===k?void 0:k.mod)&&m!==(null==b||null===(O=b.btnName)||void 0===O?void 0:O.add)?(m.includes(" - ")&&(m=m.replace(/\s{1}-.*/g,"")),m=m+" - "+u):m=u):m=null!==(R=m)&&void 0!==R?R:u,"add"===a?(t.modal.title=s||m,l.add=!0,l.mod=!1):"mod"===a?(t.modal.title=c||m,l.add=!1,l.mod=!0):(t.modal.title=m,l.add=!1,l.mod=!1),r&&(N(r),C.current=r),e.next=10,null==i?void 0:i();case 10:(j=e.sent)&&(t.start=j),B(t),d.open();case 14:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),[f,B]),G=i((function(){return g.ref(_).close()}),[]),M=i((function(){var e=g.ref(T).ref(),r=g.ref(_),t={param:e.getValue(),formRef:e,modalRef:r,close:r.close,tableRef:$.current},n=E.onOk,o=E.modal,l=(null!=o?o:{}).tips;return n?l?p.confirm({msg:l,onOk:function(){return n(t)}}):n(t):(l?p.confirm({msg:l,onOk:function(){return e.submit()}}):e.submit(),!1)}),[E]),U=i((function(e){var r=e.param,t=e.formRef,n=O.ref.SubmitUtils,o=g.ref(_),l=I.title;n({onSubmit:V,ajax:x,param:r,submitConfig:C.current.form,formRef:t,title:l,tableRef:$.current,modalRef:o})}),[x,I,V]);return d(s,(function(){return{open:F,close:G,formRef:function(){return g.ref(T)}}})),l.createElement(k,e({ref:_,formRef:function(){return g.ref(T).ref()},onOk:M,loading:j.loading},I),l.createElement(O,e({ref:T,scroll:!1,paddingClass:0,controls:!1,isSubmitForm:!1,listData:w},A,{onSubmit:U})))};export{R as default};
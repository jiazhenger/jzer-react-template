"use strict";(self.webpackChunkjzer_react_template=self.webpackChunkjzer_react_template||[]).push([[4384],{4384:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var r=n(67294),l=n(32282),a=n(27865),o=window.$fn,i=function(e){var t={};return o.hasArray(e)&&e.forEach((function(e){o.isNotEmpty(e.value)&&(t[e.name]=e.value)})),t};function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function s(e){return function(e){if(Array.isArray(e))return p(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||f(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,l,a,o,i=[],u=!0,c=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=a.call(n)).done)&&(i.push(r.value),i.length!==t);u=!0);}catch(e){c=!0,l=e}finally{try{if(!u&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(c)throw l}}return i}}(e,t)||f(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){if(e){if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(e,t):void 0}}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==u(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===u(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b=window,g=b.$fn,h=b.$config,w=b.$http,A=b.$lazy,S=b.$,j=A.load((function(){return Promise.all([n.e(490),n.e(2577),n.e(4448),n.e(3928),n.e(3985),n.e(557),n.e(249),n.e(197),n.e(6456),n.e(4333),n.e(7010)]).then(n.bind(n,70316))})),O=A.load((function(){return n.e(7005).then(n.bind(n,77005))})),E=A.load((function(){return Promise.all([n.e(1382),n.e(2641)]).then(n.bind(n,51555))})),x=A.load((function(){return Promise.all([n.e(2111),n.e(9733),n.e(8830)]).then(n.bind(n,79733))})),k=function(e,t){var n,o,u,f,p,y,m=e.className,b=e.style,A=e.data,k=void 0===A?[]:A,z=e.cols,P=void 0===z?[]:z,R=e.components,C=e.pag,N=e.prefix,I=e.suffix,q=e.simple,T=e.loadingSize,$=e.size,F=void 0===$?"middle":$,_=e.width,K=void 0===_?"100%":_,D=e.idStr,H=void 0===D?h.pullIdName:D,M=e.loading,B=e.height,L=e.init,U=void 0===L||L,W=e.isNoMb,Z=e.isIndex,G=e.pb,J=void 0===G?"pb10":G,Q=e.row,V=(e.keys,e.onKeysChange),X=e.onRow,Y=(e.resize,e.max),ee=void 0===Y?50:Y,te=e.rightSlot,ne=e.api,re=e.ctrApi,le=e.addApi,ae=e.modApi,oe=e.infoApi,ie=e.delApi,ue=e.clearApi,ce=e.paging,se=void 0===ce||ce,de=e.onLoading,fe=e.onSuccess,pe=e.setName,ye=e.controls,ve=e.search,me=void 0===ve?{}:ve,be=(e.isRows,e.isSubmitForm,e.antd),ge=e.emptyText;k=g.getArray(k),H=Z?"index":H,g.hasArray(k)&&Z&&(k=k.map((function(e,t){return v(v({},e),{},{index:t})})));var he=d((0,r.useState)({data:k,loading:M}),2),we=he[0],Ae=he[1],Se="auto"===B,je=0!==se&&!1!==se,Oe=(0,r.useRef)(),Ee=function(e){Se||function(e){var t=Oe.current;if(t){if(!g.isNumber(e))return t.querySelector(".ant-table-body").scrollTop;t.querySelector(".ant-table-body").scrollTop=e}}(null!=e?e:0)},xe=function(e){var t=null!=e?e:{},n=t.param,r=t.query,l=t.scroll,a=t.resetEmpty,o=t.resetSearch;n=g.getResult(n),n=g.getSubmitParam(me.data,n),r=g.getResult(r),ne&&(null==de||de(!0),w.paging(Ae,ne,{param:n,query:r,paging:se,onEnd:function(e){return null==de?void 0:de(!1)},setName:pe||(Z?function(e,t){return{index:t}}:null),setParam:null==me?void 0:me.setParam,resetEmpty:a,resetSearch:o}).then((function(e){var t=e.data,a=e.rows;null!=Q&&Q.keys&&Fe(Q.keys),1===l?Ee(window.innerHeight):0===l||Ee(),null==fe||fe(a||t,{param:n,query:r})})))},ke=function(){var e=i(g.getResult(me.data)),t=g.getResult(null==me?void 0:me.param),n=g.getResult(null==me?void 0:me.query);xe({param:v(v({},e),t),query:n,scroll:!0})};(0,r.useEffect)((function(){U&&ke()}),[]);var ze=d((0,r.useState)([]),2),Pe=ze[0],Re=ze[1];(0,r.useEffect)((function(){return Re(function(e){if(e=g.getResult(e),!Array.isArray(e))return console.log("cols 必须是一个数组");e=e.filter((function(e){return g.hasObject(e)}));var t,n=g.getResult(ye);if(g.hasObject(n)){var l,a=null!==(l=n.size)&&void 0!==l?l:"small";"small"===F&&(a="mini");var o=n.data,i=n.align,u=void 0===i?"center":i,c=n.right,d=void 0===c?1:c,f=v({title:"操作",width:120,align:u,fixed:d?"right":"left",render:function(e,t,n){return r.createElement(x,{size:a,align:u,data:null==o?void 0:o(e,n),table:{ctrApi:re,clearApi:ue,delApi:ie,infoApi:oe,modApi:ae,addApi:le,record:e,api:ne,idStr:H,tableRef:He},isTable:!0})}},n);return d?[].concat(s(e),[f]):[f].concat(s(e))}return null!==(t=e)&&void 0!==t?t:[]}(P))}),[P]);var Ce=d((0,r.useState)(null!==(n=null==Q?void 0:Q.keys)&&void 0!==n?n:[]),2),Ne=Ce[0],Ie=Ce[1],qe=["checkbox","radio"],Te=g.isObject(Q)&&g.hasArray(we.data)?v({columnWidth:50,type:null!=Q&&Q.type?qe[null==Q?void 0:Q.type]:qe[0],selectedRowKeys:Ne,onChange:function(e,t){Fe(e,t)},onSelect:function(e,t,n){},onSelectAll:function(e,t,n){},getCheckboxProps:function(e){var t=(null!=Q?Q:{}).disabledKeys;if(g.isFunction(t)){var n=null==t?void 0:t(e);return e.disabled=n,{disabled:n}}if(g.hasArray(t)){var r=t.includes(e[H]);return e.disabled=r,{disabled:r}}return{}}},null==Q?void 0:Q.antd):null,$e=(0,r.useCallback)((function(){Q&&g.hasArray(Ne)&&Fe([])}),[Ne]),Fe=(0,r.useCallback)((function(e,t){var n,r;if(g.hasArray(we.data)){var l=null!=Q&&Q.type?g.hasArray(e)?e:[e]:e;Q.keys=l,Ie(s(l)),null==V||V(s(l)),null==Q||null===(n=Q.change)||void 0===n||n.call(Q,{keys:Q.type?null!==(r=null==e?void 0:e[0])&&void 0!==r?r:null:e,rows:g.hasArray(t)?function(){return Q.type?null==t?void 0:t[0]:t}:De})}}),[we.data]),_e=(0,r.useCallback)((function(){return g.isObject(Q)?Q.type?g.hasArray(Ne)?Ne[0]:null:null!=Ne?Ne:[]:null!=Q&&Q.type?null:[]}),[Ne,Q]),Ke=function(e){return Fe(e.map((function(e){return e[H]})))},De=(0,r.useCallback)((function(){var e,t=we.data.filter((function(e){var t;return null==Ne||null===(t=Ne.includes)||void 0===t?void 0:t.call(Ne,e[H])}));return null!=Q&&Q.type?null!==(e=t[0])&&void 0!==e?e:null:t}),[we.data,Ne]),He={refresh:function(e){return xe({scroll:null==e||e})},search:function(e){var t=null!=e?e:{},n=t.param,r=t.query,l=t.scroll,a=void 0===l||l;xe({param:je?v(v({},n),{},{page:1}):n,query:r,scroll:a}),$e()},reset:function(){var e,t;Ae.model=je?{page:1,size:null!==(e=null===(t=we.pager)||void 0===t?void 0:t.size)&&void 0!==e?e:h.paging.pageSize}:{},ke()},resetEmpty:function(){xe({resetEmpty:!0}),$e()},resetSearch:function(){xe({resetSearch:!0}),$e()},refreshClear:function(e){xe({scroll:null==e||e}),$e()},getParam:function(){var e;return null==we||null===(e=we.pager)||void 0===e?void 0:e.param},clearKeys:$e,keys:function(){return 1===arguments.length?Fe(arguments[0]):_e()},rows:function(){return 1===arguments.length?Ke(arguments[0]):De()},data:function(){if(1!==arguments.length)return we.data;var e=arguments[0];e=Array.isArray(e)?e:[],Ae((function(){return{data:0===e.length?[]:s(e)}}))},del:function(e){we.data.splice(e,1),this.data(we.data)},update:function(){Ae((function(){return{data:g.deepCopy(we.data)}}))}};(0,r.useImperativeHandle)(t,(function(){return He}));var Me=d((0,r.useState)(),2),Be=Me[0],Le=Me[1],Ue=r.useRef();(0,r.useEffect)((function(){var e,t=(null==we||null===(e=we.data)||void 0===e?void 0:e.length)>ee?v(v({},(0,a.i)({height:null!=B?B:Ue.current.offsetHeight})),R):v({},R);Le(t)}),[we.data]);var We=r.createElement(l.Z,c({style:{zIndex:we.loading?1:0},rowKey:function(e){return Z?e.index:e[H]},columns:Pe,dataSource:g.getArray(we.data),scroll:{y:!(!g.hasArray(we.data)||Se)||null,x:K},sticky:!0,pagination:!1,bordered:!0,rowSelection:Te,onChange:function(e,t,n){var r,l=(r="ascend"===n.order?"asc":"descend"===n.order?"desc":0)?{sort:n.field,sort_type:r}:null;l?Ae.model=v(v({},Ae.model),l):(delete Ae.model.sort,delete Ae.model.sort_type),xe({scroll:!0})},onRow:function(e){return{onClick:function(){if(g.isObject(Q)){var t;if(e.disabled)return;var n=Q.type,r=Q.keys,l=void 0===r?[]:r,a=e[H];if(Ne.includes(a)){var o,i=l.findIndex((function(e){return e===a}));l.splice(i,1),null==Q||null===(o=Q.onRowFalse)||void 0===o||o.call(Q,e)}else{var u,c=e[H];1===n?l=[c]:l.push(c),null==Q||null===(u=Q.onRowTure)||void 0===u||u.call(Q,e)}Fe(l),null==Q||null===(t=Q.onRow)||void 0===t||t.call(Q,{row:e,keys:_e(),rows:De}),null==X||X({row:e,keys:l,rows:De})}else null==X||X(e)}}},components:Be,expandRowByClick:!0},be)),Ze=r.createElement(E,{loading:we.loading,size:T,style:{zIndex:2}}),Ge=r.createElement(O,{loading:we.loading,data:we.data,simple:q,style:{zIndex:1},msg:ge||(!1===U?"请按条件搜索数据":"暂无数据")});return r.createElement("div",{ref:Ue,className:"ex rel ".concat(S.css(0===(null==we||null===(o=we.data)||void 0===o?void 0:o.length),"oh")," ").concat(S.css(!Se,"fv")," ").concat(S.css(!1===C,J)," jzer-form-small ").concat(S.css(m)),style:v({height:B},b)},r.createElement("div",{ref:Oe,className:"\n\t\t\t\t\tjzer-table ex rel\n\t\t\t\t\tjzer-table-".concat(F,"\n\t\t\t\t\tjzer-table-").concat(q?"simple":"no-simple","\n\t\t\t\t\t").concat(S.css((!1===C&&!Se||0===(null==we||null===(u=we.data)||void 0===u?void 0:u.length))&&!te,"bbor1")," \n\t\t\t\t\t").concat(g.hasArray(we.data)||W?"":"mb10"," \n\t\t\t\t\t").concat(S.css(!Se,"jzer-table-scroll"),"\n\t\t\t\t\t").concat(S.css(te,"fx"),"\n\t\t\t\t"),style:{minHeight:q?120:180}},te?r.createElement(r.Fragment,null,r.createElement("div",{className:"rel ex rbor1 bbor1 fv ".concat(S.css(!1===C&&!Se||0===(null==we||null===(f=we.data)||void 0===f?void 0:f.length),"bbor1"))},We,Ze,Ge),r.createElement("div",{className:"rel fv ml10 ".concat(S.css(te.className)),style:v({width:te.width},null==te?void 0:te.style)},te.slot)):We),!te&&r.createElement(r.Fragment,null,Ze,Ge),g.hasArray(we.data)&&!1!==C&&0!==C&&r.createElement("div",{className:"fxm ptb10 ".concat(S.css(!Se&&!te,"tbor1"))},g.getResult(N,we.pager),g.isNoFalse(null==C?void 0:C.showTotal)&&r.createElement("div",{className:"g9 f12 nowrap"},"共 ",null!=we&&null!==(p=we.pager)&&void 0!==p&&p.total?null==we||null===(y=we.pager)||void 0===y?void 0:y.total:we.data.length," 条数据"),g.getResult(I,we.pager),je&&r.createElement(j,{pager:we.pager,pag:C,className:S.css(!N,"ex"),onChange:function(e,t){xe({param:{page:e,size:t},scroll:!0}),$e()}})))}}}]);
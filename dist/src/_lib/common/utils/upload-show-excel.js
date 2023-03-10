import e from"../../_node/@babel/runtime/helpers/esm/defineProperty.js";import t from"../../_node/@babel/runtime/helpers/esm/asyncToGenerator.js";import r from"../../_node/@babel/runtime/regenerator/index.js";import*as n from"xlsx";function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){e(t,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,u=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return a=e.done,e},e:function(e){u=!0,i=e},f:function(){try{a||null==r.return||r.return()}finally{if(u)throw i}}}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var u=function(e,t,r){for(var n=new FormData,o=0;o<t.length;o++)n.append(e,t[o]);if(null!==n.get(e)){if(r)for(var i in r)r.hasOwnProperty(i)&&n.append(i,r[i]);return n}},c={files:null,fileType:["xls","xlsx"],includeFileType:function(e){var t=e.name;return this.fileType.includes(t.substr(t.lastIndexOf(".")+1))},open:function(e){var t=this,r=document.querySelector("#jz-upload");r||(r=document.createElement("input")).setAttribute("type","file"),r.click(),r.onchange=function(r){var o=r.target.files;if(!t.includeFileType(o[0]))return window.$fn.msg.warning("只能上传 excel 文件");t.files=o;var i=new FileReader;i.onload=function(t){var r=t.target.result,i=n.read(r,{type:"binary"}),a=[];for(var l in i.Sheets)Object.prototype.hasOwnProperty.call(i.Sheets,l)&&(a=a.concat(n.utils.sheet_to_json(i.Sheets[l])));null==e||e(a,o)},i.readAsBinaryString(o[0])}},upload:function(e,n){var o=this;return t(r.mark((function t(){var i;return r.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=u("file",o.files,n),t.abrupt("return",window.$http.upload(null,e,{param:i}).then((function(e){return window.$fn.msg.success("文件上传成功"),e})));case 2:case"end":return t.stop()}}),t)})))()},modalUpload:function(e,t){var r=this,n=null!=t?t:{},o=n.cols,l=void 0===o?[]:o,u=n.modal,c=void 0===u?{}:u,f=n.param;this.open((function(n){if(Array.isArray(null==t?void 0:t.cols)){var o,u=(l=null==t?void 0:t.cols).map((function(e,t){return e.dataIndex=t,t})),s=a(n);try{var p=function(){var e=o.value;Object.keys(e).forEach((function(t,r){e[u[r]]=e[t]}))};for(s.s();!(o=s.n()).done;)p()}catch(e){s.e(e)}finally{s.f()}}else for(var d in n[0])l.push({dataIndex:d,title:d});window.$tableModalRef().open({modal:i({title:"导入 — 确认",width:"98%",height:"80%",onOk:function(t){return r.upload(e,f).then(t)}},c),table:{isIndex:1,cols:l,data:n}})}))}};export{u as FormDataUploader,c as default};
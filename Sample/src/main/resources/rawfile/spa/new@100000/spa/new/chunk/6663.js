/*! For license information please see 6663.js.LICENSE.txt */
"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[6663],{"6283":function(n,e,c){c.d(e,{"Z":function(){return Z}});var t=c(3799),a=c(32461),i=c(16556),l=c(53202),o=c(28673),s=c(66306),u=c(98612),r=c(20874),f=c(955),d=c(53428),p=c(65169),h=function(n){(0,l.Z)(Index,n);var e=(0,o.Z)(Index);function Index(){var n;(0,t.Z)(this,Index);for(var c=arguments.length,a=new Array(c),l=0;l<c;l++)a[l]=arguments[l];return n=e.call.apply(e,[this].concat(a)),(0,s.Z)((0,i.Z)(n),"state",{}),(0,s.Z)((0,i.Z)(n),"stringify",(function(n){var e=new Map,c=JSON.stringify(n,(function(n,c){if(void 0===c)return"undefined";if("function"==typeof c)return"function";if("object"===(0,d.Z)(c)&&null!==c){if(e.has(c))return;e.set(c,c)}return c}));return e.clear(),c})),n}return(0,a.Z)(Index,[{"key":"render","value":function render(){var n=this.props,e=n.testApi,c=n.callbackRes;return(0,p.jsx)(f.View,{"className":"callback-content","children":(0,p.jsx)(f.View,{"className":"callback-res","id":"".concat(e,"-callback"),"children":this.stringify(c)})})}}]),Index}(u.Component),Z=function(n){(0,l.Z)(Index,n);var e=(0,o.Z)(Index);function Index(){var n;(0,t.Z)(this,Index);for(var c=arguments.length,a=new Array(c),l=0;l<c;l++)a[l]=arguments[l];return n=e.call.apply(e,[this].concat(a)),(0,s.Z)((0,i.Z)(n),"state",{"inputData":[],"textareaControl":[],"hiddenNum":0}),(0,s.Z)((0,i.Z)(n),"changeData",(function(e,c){var t=n.state.inputData;try{t[c]=JSON.parse(e.detail.value)}catch(n){t[c]=e.detail.value}n.setState({"inputData":t})})),(0,s.Z)((0,i.Z)(n),"submitData",(function(n,e,c){null!=e.func&&("string"==typeof n?(0,r.CF)({"icon":"error","title":"请检查参数格式"}):null==n?e.func(c):e.func(c,n))})),(0,s.Z)((0,i.Z)(n),"minusHidden",(function(){var e=n.state.hiddenNum;e>0?n.setState({"hiddenNum":e-1}):(0,r.CF)({"title":"已全部显示"})})),(0,s.Z)((0,i.Z)(n),"addHidden",(function(){var e=n.state.hiddenNum;e<n.props.buttonList.length?n.setState({"hiddenNum":e+1}):(0,r.CF)({"title":"已全部隐藏"})})),(0,s.Z)((0,i.Z)(n),"hideTextarea",(function(e){var c=n.state.textareaControl;c[e]=!c[e],n.setState({"textareaControl":c})})),(0,s.Z)((0,i.Z)(n),"isAdvancedAPI",(function(n){try{return asAPIMap.get(n)}catch(n){return!1}})),n}return(0,a.Z)(Index,[{"key":"componentDidMount","value":function componentDidMount(){var n=this.props.buttonList,e=[],c=[];n.forEach((function(n){n.inputData?e.push(n.inputData):e.push(void 0),c.push(!0)})),this.setState({"inputData":e})}},{"key":"render","value":function render(){var n=this,e=this.props.buttonList,c=this.state,t=c.inputData,a=c.textareaControl,i=c.hiddenNum;return(0,p.jsxs)(f.View,{"className":"button-list","children":[(0,p.jsxs)(f.View,{"className":"hidden-control","children":[(0,p.jsx)(f.Text,{"children":"隐藏按钮"}),(0,p.jsxs)(f.View,{"className":"stepper","children":[(0,p.jsx)(f.View,{"className":"normal","onClick":this.minusHidden,"children":"-"}),(0,p.jsx)(f.View,{"className":"stepper-num","children":i}),(0,p.jsx)(f.View,{"className":"normal","onClick":this.addHidden,"children":"+"})]})]}),e.map((function(e,c){return(0,p.jsxs)(f.View,{"className":"api-page-btn-area ".concat(c<i?"api-page-btn-area-hidden":""),"children":[null!=t[c]?(0,p.jsxs)(f.View,{"className":"api-textarea-area","children":[(0,p.jsx)(f.Textarea,{"className":"api-input-area ".concat(a[c]?"api-input-area-hidden":""),"maxlength":-1,"id":"".concat(e.id,"-input"),"value":"string"==typeof t[c]?t[c]:JSON.stringify(t[c],null,2),"onInput":function onInput(e){n.changeData(e,c)}}),(0,p.jsx)(f.View,{"className":"textarea-control","onClick":function onClick(){n.hideTextarea(c)},"children":a[c]?"+":"-"})]}):"",(0,p.jsxs)(f.View,{"className":"api-page-btn ".concat(null==e.func?"api-page-btn-uncreate":""," ").concat(n.isAdvancedAPI(e.id)?"api-page-btn-advanced":""),"id":e.id,"onClick":function onClick(){n.submitData(t[c],e,c)},"children":[e.id,null!=e.callbackRes?(0,p.jsx)(h,{"testApi":e.id,"callbackRes":e.callbackRes}):""]})]},e.id)}))]})}}]),Index}(u.Component)},"76663":function(n,e,c){c.r(e),c.d(e,{"default":function(){return D}});var t=c(44038),a=c(3799),i=c(32461),l=c(16556),o=c(53202),s=c(28673),u=c(66306),r=c(98612),f=c(50068),d=c(37714),p=c(81433),h=c(70863),Z=c(27210),m=c(56034),C=c(91793),v=c(49347),x=c(53800),B=c(8878),I=c(23847),g=c(955),A=c(6283),E=c(52567),L=c(65169),y="34:29:12:7F:79:71",D=function(n){(0,o.Z)(Index,n);var e=(0,s.Z)(Index);function Index(){var n;(0,a.Z)(this,Index);for(var c=arguments.length,i=new Array(c),o=0;o<c;o++)i[o]=arguments[o];return n=e.call.apply(e,[this].concat(i)),(0,u.Z)((0,l.Z)(n),"state",{"list":[{"id":"writeBLECharacteristicValue","func":function func(e){E.n.consoleTest("writeBLECharacteristicValue");var c=new ArrayBuffer(12);(0,f.z)({"characteristicId":"0000AAAD-0000-1000-8000-00805F9B34FB","deviceId":y,"serviceId":"0000AAAA-0000-1000-8000-00805F9B34FB","value":c,"success":function success(c){E.n.consoleSuccess.call((0,l.Z)(n),c,e)},"fail":function fail(c){E.n.consoleFail.call((0,l.Z)(n),c,e)},"complete":function complete(c){E.n.consoleComplete.call((0,l.Z)(n),c,e)}}).then((function(c){E.n.consoleResult.call((0,l.Z)(n),c,e)}))}},{"id":"setBLEMTU","inputData":{"deviceId":y,"mtu":256},"func":function func(e,c){E.n.consoleTest("setBLEMTU"),(0,d.C)((0,t.Z)((0,t.Z)({},c),{},{"success":function success(c){E.n.consoleSuccess.call((0,l.Z)(n),c,e)},"fail":function fail(c){E.n.consoleFail.call((0,l.Z)(n),c,e)},"complete":function complete(c){E.n.consoleComplete.call((0,l.Z)(n),c,e)}})).then((function(c){E.n.consoleResult.call((0,l.Z)(n),c,e)}))}},{"id":"readBLECharacteristicValue","inputData":{"deviceId":y,"serviceId":"0000AAAA-0000-1000-8000-00805F9B34FB","characteristicId":"0000AAAD-0000-1000-8000-00805F9B34FB"},"func":function func(e,c){E.n.consoleTest("readBLECharacteristicValue"),(0,p.E)((0,t.Z)((0,t.Z)({},c),{},{"success":function success(c){E.n.consoleSuccess.call((0,l.Z)(n),c,e)},"fail":function fail(c){E.n.consoleFail.call((0,l.Z)(n),c,e)},"complete":function complete(c){E.n.consoleComplete.call((0,l.Z)(n),c,e)}})).then((function(c){E.n.consoleResult.call((0,l.Z)(n),c,e)}))}},{"id":"onBLEMTUChange","func":null},{"id":"onBLEConnectionStateChange","func":function func(e){E.n.consoleTest("onBLEConnectionStateChange"),(0,h.h)((function(c){E.n.consoleOnCallback.call((0,l.Z)(n),c,"onBLEConnectionStateChange",e)}))}},{"id":"onBLECharacteristicValueChange","func":function func(e){E.n.consoleTest("onBLECharacteristicValueChange"),(0,Z.i)((function(c){E.n.consoleOnCallback.call((0,l.Z)(n),c,"onBLECharacteristicValueChange",e)}))}},{"id":"offBLEMTUChange","func":null},{"id":"offBLEConnectionStateChange","func":null},{"id":"offBLECharacteristicValueChange","func":null},{"id":"notifyBLECharacteristicValueChange","inputData":{"state":!0,"deviceId":y,"serviceId":"0000AAAA-0000-1000-8000-00805F9B34FB","characteristicId":"0000AAAD-0000-1000-8000-00805F9B34FB"},"func":function func(e,c){E.n.consoleTest("notifyBLECharacteristicValueChange"),(0,m.l)((0,t.Z)((0,t.Z)({},c),{},{"success":function success(c){E.n.consoleSuccess.call((0,l.Z)(n),c,e)},"fail":function fail(c){E.n.consoleFail.call((0,l.Z)(n),c,e)},"complete":function complete(c){E.n.consoleComplete.call((0,l.Z)(n),c,e)}})).then((function(c){E.n.consoleResult.call((0,l.Z)(n),c,e)}))}},{"id":"getBLEMTU","func":null},{"id":"getBLEDeviceServices","inputData":{"deviceId":"34:29:12:7F:79:71"},"func":function func(e,c){E.n.consoleTest("getBLEDeviceServices"),(0,C._)((0,t.Z)((0,t.Z)({},c),{},{"success":function success(c){E.n.consoleSuccess.call((0,l.Z)(n),c,e)},"fail":function fail(c){E.n.consoleFail.call((0,l.Z)(n),c,e)},"complete":function complete(c){E.n.consoleComplete.call((0,l.Z)(n),c,e)}})).then((function(c){E.n.consoleResult.call((0,l.Z)(n),c,e)}))}},{"id":"getBLEDeviceRSSI","inputData":{"deviceId":y},"func":function func(e,c){E.n.consoleTest("getBLEDeviceRSSI"),(0,v.K)((0,t.Z)((0,t.Z)({},c),{},{"success":function success(c){E.n.consoleSuccess.call((0,l.Z)(n),c,e)},"fail":function fail(c){E.n.consoleFail.call((0,l.Z)(n),c,e)},"complete":function complete(c){E.n.consoleComplete.call((0,l.Z)(n),c,e)}})).then((function(c){E.n.consoleResult.call((0,l.Z)(n),c,e)}))}},{"id":"getBLEDeviceCharacteristics","inputData":{"deviceId":y,"serviceId":"0000AAAA-0000-1000-8000-00805F9B34FB"},"func":function func(e,c){E.n.consoleTest("getBLEDeviceCharacteristics"),(0,x.c)((0,t.Z)((0,t.Z)({},c),{},{"success":function success(c){E.n.consoleSuccess.call((0,l.Z)(n),c,e)},"fail":function fail(c){E.n.consoleFail.call((0,l.Z)(n),c,e)},"complete":function complete(c){E.n.consoleComplete.call((0,l.Z)(n),c,e)}})).then((function(c){E.n.consoleResult.call((0,l.Z)(n),c,e)}))}},{"id":"createBLEConnection","inputData":{"deviceId":y},"func":function func(e,c){E.n.consoleTest("createBLEConnection"),(0,B.$)((0,t.Z)((0,t.Z)({},c),{},{"success":function success(c){E.n.consoleSuccess.call((0,l.Z)(n),c,e)},"fail":function fail(c){E.n.consoleFail.call((0,l.Z)(n),c,e)},"complete":function complete(c){E.n.consoleComplete.call((0,l.Z)(n),c,e)}})).then((function(c){E.n.consoleResult.call((0,l.Z)(n),c,e)}))}},{"id":"closeBLEConnection","inputData":{"deviceId":y},"func":function func(e,c){E.n.consoleTest("closeBLEConnection"),(0,I.l)((0,t.Z)((0,t.Z)({},c),{},{"success":function success(c){E.n.consoleSuccess.call((0,l.Z)(n),c,e)},"fail":function fail(c){E.n.consoleFail.call((0,l.Z)(n),c,e)},"complete":function complete(c){E.n.consoleComplete.call((0,l.Z)(n),c,e)}})).then((function(c){E.n.consoleResult.call((0,l.Z)(n),c,e)}))}}]}),n}return(0,i.Z)(Index,[{"key":"render","value":function render(){var n=this.state.list;return(0,L.jsx)(g.View,{"className":"api-page","children":(0,L.jsx)(A.Z,{"buttonList":n})})}}]),Index}(r.Component)},"55001":function(n,e,c){var t=c(98612),a=Symbol.for("react.element"),i=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(n,e,c){var t,i={},u=null,r=null;for(t in void 0!==c&&(u=""+c),void 0!==e.key&&(u=""+e.key),void 0!==e.ref&&(r=e.ref),e)l.call(e,t)&&!s.hasOwnProperty(t)&&(i[t]=e[t]);if(n&&n.defaultProps)for(t in e=n.defaultProps)void 0===i[t]&&(i[t]=e[t]);return{"$$typeof":a,"type":n,"key":u,"ref":r,"props":i,"_owner":o.current}}e.Fragment=i,e.jsx=q,e.jsxs=q},"65169":function(n,e,c){n.exports=c(55001)}}]);
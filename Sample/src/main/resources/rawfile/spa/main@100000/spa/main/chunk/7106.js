/*! For license information please see 7106.js.LICENSE.txt */
"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[7106],{"6283":function(e,n,t){t.d(n,{"Z":function(){return m}});var a=t(3799),c=t(32461),o=t(16556),r=t(53202),i=t(28673),l=t(66306),s=t(98612),u=t(20874),d=t(955),f=t(53428),p=t(65169),h=function(e){(0,r.Z)(Index,e);var n=(0,i.Z)(Index);function Index(){var e;(0,a.Z)(this,Index);for(var t=arguments.length,c=new Array(t),r=0;r<t;r++)c[r]=arguments[r];return e=n.call.apply(n,[this].concat(c)),(0,l.Z)((0,o.Z)(e),"state",{}),(0,l.Z)((0,o.Z)(e),"stringify",(function(e){var n=new Map,t=JSON.stringify(e,(function(e,t){if(void 0===t)return"undefined";if("function"==typeof t)return"function";if("object"===(0,f.Z)(t)&&null!==t){if(n.has(t))return;n.set(t,t)}return t}));return n.clear(),t})),e}return(0,c.Z)(Index,[{"key":"render","value":function render(){var e=this.props,n=e.testApi,t=e.callbackRes;return(0,p.jsx)(d.View,{"className":"callback-content","children":(0,p.jsx)(d.View,{"className":"callback-res","id":"".concat(n,"-callback"),"children":this.stringify(t)})})}}]),Index}(s.Component),m=function(e){(0,r.Z)(Index,e);var n=(0,i.Z)(Index);function Index(){var e;(0,a.Z)(this,Index);for(var t=arguments.length,c=new Array(t),r=0;r<t;r++)c[r]=arguments[r];return e=n.call.apply(n,[this].concat(c)),(0,l.Z)((0,o.Z)(e),"state",{"inputData":[],"textareaControl":[],"hiddenNum":0}),(0,l.Z)((0,o.Z)(e),"changeData",(function(n,t){var a=e.state.inputData;try{a[t]=JSON.parse(n.detail.value)}catch(e){a[t]=n.detail.value}e.setState({"inputData":a})})),(0,l.Z)((0,o.Z)(e),"submitData",(function(e,n,t){null!=n.func&&("string"==typeof e?(0,u.CF)({"icon":"error","title":"请检查参数格式"}):null==e?n.func(t):n.func(t,e))})),(0,l.Z)((0,o.Z)(e),"minusHidden",(function(){var n=e.state.hiddenNum;n>0?e.setState({"hiddenNum":n-1}):(0,u.CF)({"title":"已全部显示"})})),(0,l.Z)((0,o.Z)(e),"addHidden",(function(){var n=e.state.hiddenNum;n<e.props.buttonList.length?e.setState({"hiddenNum":n+1}):(0,u.CF)({"title":"已全部隐藏"})})),(0,l.Z)((0,o.Z)(e),"hideTextarea",(function(n){var t=e.state.textareaControl;t[n]=!t[n],e.setState({"textareaControl":t})})),(0,l.Z)((0,o.Z)(e),"isAdvancedAPI",(function(e){try{return asAPIMap.get(e)}catch(e){return!1}})),e}return(0,c.Z)(Index,[{"key":"componentDidMount","value":function componentDidMount(){var e=this.props.buttonList,n=[],t=[];e.forEach((function(e){e.inputData?n.push(e.inputData):n.push(void 0),t.push(!0)})),this.setState({"inputData":n})}},{"key":"render","value":function render(){var e=this,n=this.props.buttonList,t=this.state,a=t.inputData,c=t.textareaControl,o=t.hiddenNum;return(0,p.jsxs)(d.View,{"className":"button-list","children":[(0,p.jsxs)(d.View,{"className":"hidden-control","children":[(0,p.jsx)(d.Text,{"children":"隐藏按钮"}),(0,p.jsxs)(d.View,{"className":"stepper","children":[(0,p.jsx)(d.View,{"className":"normal","onClick":this.minusHidden,"children":"-"}),(0,p.jsx)(d.View,{"className":"stepper-num","children":o}),(0,p.jsx)(d.View,{"className":"normal","onClick":this.addHidden,"children":"+"})]})]}),n.map((function(n,t){return(0,p.jsxs)(d.View,{"className":"api-page-btn-area ".concat(t<o?"api-page-btn-area-hidden":""),"children":[null!=a[t]?(0,p.jsxs)(d.View,{"className":"api-textarea-area","children":[(0,p.jsx)(d.Textarea,{"className":"api-input-area ".concat(c[t]?"api-input-area-hidden":""),"maxlength":-1,"id":"".concat(n.id,"-input"),"value":"string"==typeof a[t]?a[t]:JSON.stringify(a[t],null,2),"onInput":function onInput(n){e.changeData(n,t)}}),(0,p.jsx)(d.View,{"className":"textarea-control","onClick":function onClick(){e.hideTextarea(t)},"children":c[t]?"+":"-"})]}):"",(0,p.jsxs)(d.View,{"className":"api-page-btn ".concat(null==n.func?"api-page-btn-uncreate":""," ").concat(e.isAdvancedAPI(n.id)?"api-page-btn-advanced":""),"id":n.id,"onClick":function onClick(){e.submitData(a[t],n,t)},"children":[n.id,null!=n.callbackRes?(0,p.jsx)(h,{"testApi":n.id,"callbackRes":n.callbackRes}):""]})]},n.id)}))]})}}]),Index}(s.Component)},"17106":function(e,n,t){t.r(n),t.d(n,{"default":function(){return g}});var a=t(44038),c=t(3799),o=t(32461),r=t(16556),i=t(53202),l=t(28673),s=t(66306),u=t(98612),d=t(24879),f=t(48004),p=t(23444),h=t(93578),m=t(955),Z=t(6283),x=t(52567),v=t(65169),g=function(e){(0,i.Z)(Index,e);var n=(0,l.Z)(Index);function Index(){var e;(0,c.Z)(this,Index);for(var t=arguments.length,o=new Array(t),i=0;i<t;i++)o[i]=arguments[i];return e=n.call.apply(n,[this].concat(o)),(0,s.Z)((0,r.Z)(e),"state",{"list":[{"id":"stopAccelerometer","func":function func(n){x.n.consoleTest("stopAccelerometer"),(0,d.X)({"success":function success(t){x.n.consoleSuccess.call((0,r.Z)(e),t,n)},"fail":function fail(t){x.n.consoleFail.call((0,r.Z)(e),t,n)},"complete":function complete(t){x.n.consoleComplete.call((0,r.Z)(e),t,n)}}).then((function(t){x.n.consoleResult.call((0,r.Z)(e),t,n)})).catch((function(t){x.n.consoleResult.call((0,r.Z)(e),t,n)}))}},{"id":"startAccelerometer","inputData":{"interval":"normal"},"func":function func(n,t){x.n.consoleTest("startAccelerometer"),(0,f.s)((0,a.Z)((0,a.Z)({},t),{},{"success":function success(t){x.n.consoleSuccess.call((0,r.Z)(e),t,n)},"fail":function fail(t){x.n.consoleFail.call((0,r.Z)(e),t,n)},"complete":function complete(t){x.n.consoleComplete.call((0,r.Z)(e),t,n)}})).then((function(t){x.n.consoleResult.call((0,r.Z)(e),t,n)})).catch((function(t){x.n.consoleResult.call((0,r.Z)(e),t,n)}))}},{"id":"onAccelerometerChange","func":function func(n){x.n.consoleTest("onAccelerometerChange"),(0,p.i)(e.onAccelerometerChange01),(0,p.i)(e.onAccelerometerChange02)}},{"id":"offAccelerometerChange","inputData":{"closeAll":!1,"close01":!0,"close02":!1},"func":function func(n,t){x.n.consoleTest("offAccelerometerChange"),t.closeAll?(0,h.$)():(t.close01&&(0,h.$)(e.onAccelerometerChange01),t.close02&&(0,h.$)(e.onAccelerometerChange02))}}]}),(0,s.Z)((0,r.Z)(e),"onAccelerometerChange01",(function(e){x.n.consoleOnCallback(e,"onAccelerometerChange01")})),(0,s.Z)((0,r.Z)(e),"onAccelerometerChange02",(function(e){x.n.consoleOnCallback(e,"onAccelerometerChange02")})),e}return(0,o.Z)(Index,[{"key":"render","value":function render(){var e=this.state.list;return(0,v.jsx)(m.View,{"className":"api-page","children":(0,v.jsx)(Z.Z,{"buttonList":e})})}}]),Index}(u.Component)},"55001":function(e,n,t){var a=t(98612),c=Symbol.for("react.element"),o=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,i=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(e,n,t){var a,o={},s=null,u=null;for(a in void 0!==t&&(s=""+t),void 0!==n.key&&(s=""+n.key),void 0!==n.ref&&(u=n.ref),n)r.call(n,a)&&!l.hasOwnProperty(a)&&(o[a]=n[a]);if(e&&e.defaultProps)for(a in n=e.defaultProps)void 0===o[a]&&(o[a]=n[a]);return{"$$typeof":c,"type":e,"key":s,"ref":u,"props":o,"_owner":i.current}}n.Fragment=o,n.jsx=q,n.jsxs=q},"65169":function(e,n,t){e.exports=t(55001)}}]);
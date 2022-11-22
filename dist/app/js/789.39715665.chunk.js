"use strict";(self.webpackChunkinit_ts_new=self.webpackChunkinit_ts_new||[]).push([[789],{78789:(e,t,l)=>{l.r(t),l.d(t,{default:()=>te});var a=l(41266),n=l(73126),i=l(67294),r=l(95266),u=l(19623),s=l(68420),c=l(27344),o=l(44845),d=l(32366),h=l.n(d),v=l(54103),f=l.n(v),m=l(81643),g=l.n(m),p=l(78914),b=l.n(p),F=l(86902),V=l.n(F),y=l(93476),E=l.n(y),k=(l(24603),l(74916),l(39714),l(73935)),Z=["setCallback","dispatch","registerValidateFields","resetFields","setFields","setFieldsValue","getFieldsValue","getFieldValue","validateFields","submit","unRegisterValidate"],C=function(e){return e instanceof RegExp};const j=function(){function e(t){var l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};(0,s.Z)(this,e),(0,o.Z)(this,"FormUpdate",void 0),(0,o.Z)(this,"model",void 0),(0,o.Z)(this,"control",void 0),(0,o.Z)(this,"penddingValidateQueue",void 0),(0,o.Z)(this,"defaultFormValue",void 0),(0,o.Z)(this,"isSchedule",void 0),this.FormUpdate=t,this.model={},this.control={},this.isSchedule=!1,this.penddingValidateQueue=[],this.callback={},this.defaultFormValue=l}return(0,c.Z)(e,[{key:"getForm",value:function(){var e=this;return h()(Z).call(Z,(function(t,l){var a;return t[l]=f()(a=e[l]).call(a,e),t}),{})}},{key:"setCallback",value:function(e){e&&(this.callback=e)}},{key:"dispatch",value:function(e){if(!e&&"object"!==(0,u.Z)(e))return null;for(var t=e.type,l=arguments.length,a=new Array(l>1?l-1:0),n=1;n<l;n++)a[n-1]=arguments[n];return g()(Z).call(Z,t)||"function"==typeof this[t]?this[t].apply(this,a):void 0}},{key:"registerValidateFields",value:function(t,l,a){this.defaultFormValue[t]&&(a.value=this.defaultFormValue[t]);var n=e.createValidate(a);this.model[t]=n,this.control[t]=l}},{key:"unRegisterValidate",value:function(e){delete this.model[e],delete this.control[e]}},{key:"notifyChange",value:function(e){var t=this.control[e];t&&(null==t||t.changeValue())}},{key:"setValueClearStatus",value:function(e,t,l){e.value=l,e.status="pendding",this.notifyChange(t)}},{key:"setFieldsValue",value:function(e,t){var l=this.model[e];if(l)if("object"===(0,u.Z)(t)){var a=t.message,n=t.rule,i=t.value;a&&(l.message=a),n&&(l.rule=n),i&&(l.value=i),l.status="pendding",this.validateFieldValue(e,!0)}else this.setValueClearStatus(l,e,t)}},{key:"setFields",value:function(e){var t,l=this;"object"===(0,u.Z)(e)&&b()(t=V()(e)).call(t,(function(t){l.setFieldsValue(t,e[t])}))}},{key:"resetFields",value:function(){var e,t=this;b()(e=V()(this.model)).call(e,(function(e){t.setValueClearStatus(t.model[e],e,null)}))}},{key:"getFieldModel",value:function(e){return this.model[e]||{}}},{key:"getFieldsValue",value:function(){var e,t=this,l={};return b()(e=V()(this.model)).call(e,(function(e){l[e]=t.model[e].value})),l}},{key:"getFieldValue",value:function(e){var t=this.model[e];return!t&&this.defaultFormValue[e]?this.defaultFormValue[e]:t?t.value:null}},{key:"validateFieldValue",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],l=this.model[e],a=l.status;if(!l)return null;var n=l.required,i=l.rule,r=l.value,u="resolve";if(n&&!r?u="reject":C(i)?u=i.test(r)?"resolve":"reject":"function"==typeof i&&(u=i(r)?"resolve":"reject"),l.status=u,a!==u||t){var s,c=f()(s=this.notifyChange).call(s,this,e);this.penddingValidateQueue.push(c)}return this.scheduleValidate(),u}},{key:"scheduleValidate",value:function(){var e=this;this.isSchedule||(this.isSchedule=!0,E().resolve().then((function(){(0,k.unstable_batchedUpdates)((function(){do{var t=e.penddingValidateQueue.shift();t&&t()}while(e.penddingValidateQueue.length>0);e.isSchedule=!1}))})))}},{key:"validateFields",value:function(e){var t,l=this,a=!0;b()(t=V()(this.model)).call(t,(function(e){"reject"===l.validateFieldValue(e,!0)&&(a=!1)})),e(a)}},{key:"submit",value:function(e){var t=this;this.validateFields((function(l){var a=t.callback,n=a.onFinish,i=a.onFinishFailed;e&&e(l),l||i&&"function"==typeof i&&i(),n&&"function"==typeof n&&n(t.getFieldsValue())}))}}],[{key:"createValidate",value:function(e){return{value:e.value,rule:e.rule||function(){return!0},required:e.required||!1,message:e.message||"",status:"pending"}}}]),e}();const q=(0,i.createContext)(null);var N=["setCallback","dispatch"];function S(e,t){var l=e.form,n=e.onFinish,u=e.onFinishFailed,s=e.initialValues,c=e.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},l=i.useRef(null),a=i.useState({}),n=(0,r.Z)(a,2)[1];if(!l.current)if(e)l.current=e;else{var u=new j(n,t);l.current=u.getForm()}return l.current}(l,s),d=o.setCallback,h=(o.dispatch,(0,a.Z)(o,N));d({onFinish:n,onFinishFailed:u}),(0,i.useImperativeHandle)(t,(function(){return h}),[]);var v=i.createElement(q.Provider,{value:o},c);return i.createElement("form",{onReset:function(e){e.preventDefault(),e.stopPropagation(),o.resetFields()},onSubmit:function(e){e.preventDefault(),e.stopPropagation(),o.submit()}},v)}const w=(0,i.forwardRef)(S);var R=l(14310),W=l.n(R),T=l(20116),x=l.n(T),_=l(34074),B=l.n(_),Q=l(39649),O=l.n(Q),A=l(20368),I=l.n(A),M=l(63978),P=l.n(M);l(68309);function U(e,t){var l=V()(e);if(W()){var a=W()(e);t&&(a=x()(a).call(a,(function(t){return B()(e,t).enumerable}))),l.push.apply(l,a)}return l}function D(e){for(var t=1;t<arguments.length;t++){var l,a=null!=arguments[t]?arguments[t]:{};if(t%2)b()(l=U(Object(a),!0)).call(l,(function(t){(0,o.Z)(e,t,a[t])}));else if(O())I()(e,O()(a));else{var n;b()(n=U(Object(a))).call(n,(function(t){P()(e,t,B()(a,t))}))}}return e}function $(e){var t=e.children,l=e.label,a=e.labelWidth,n=e.required,r=e.height;return i.createElement("div",{className:"form-label",style:{height:"".concat(r,"px")}},i.createElement("div",{className:"form-label-name",style:{width:"".concat(a,"px")}},n?i.createElement("span",{style:{color:"red"}},"*"):null,l,":"),t)}function z(e){var t=e.status,l=e.message,a=e.required,n=e.name,r=e.value,u="",s="#fff";return a&&!r&&"reject"===t?(u="".concat(n," 为必填项"),s="red"):"reject"===t?(u=l,s="red"):"pendding"===t?u=null:"resolve"===t&&(u="校验通过",s="green"),i.createElement("div",{className:"form-message"},i.createElement("span",{style:{color:s}},u))}const H=function(e){var t,l=e.name,a=e.children,u=e.label,s=e.height,c=void 0===s?50:s,o=e.labelWidth,d=e.required,h=void 0!==d&&d,v=e.rules,f=void 0===v?{}:v,m=e.trigger,g=void 0===m?"onChange":m,p=e.validateTrigger,b=void 0===p?"onChange":p,F=(0,i.useContext)(q),V=F.registerValidateFields,y=F.dispatch,E=F.unRegisterValidate,k=(0,i.useState)({}),Z=(0,r.Z)(k,2)[1],C=(0,i.useMemo)((function(){return{changeValue:function(){Z({})}}}),[F]);return(0,i.useEffect)((function(){return l&&V(l,C,D(D({},f),{},{required:h})),function(){l&&E(l)}}),[C]),t=i.isValidElement(a)?i.cloneElement(a,function(e){var t=D({},e.props);if(!l)return t;var a=function(e){var t=e.target.value;y({type:"setFieldsValue"},l,t)};return t[g]=a,(h||f)&&(t[b]=function(e){b===g&&a(e),y({type:"validateFieldValue"},l)}),t.value=y({type:"getFieldValue"},l)||"",t}(a)):a,i.createElement($,{height:c,label:u,labelWidth:o,required:h},t,i.createElement(z,(0,n.Z)({name:l},y({type:"getFieldModel"},l))))};var G=w;G.Item=H;const J=G;var K=["children"],L=J.Item,X=function(e){return i.createElement("input",(0,n.Z)({className:"form-input"},e))};function Y(e){var t=e.children,l=(0,a.Z)(e,K);return i.createElement("select",(0,n.Z)({},l,{className:"form-input"}),i.createElement("option",{label:l.placeholder,value:null},l.placeholder),t)}Y.Option=function(e){return i.createElement("option",(0,n.Z)({},e,{className:"",label:e.children}))};var ee=Y.Option;const te=function(){var e=(0,i.useRef)({});return(0,i.useEffect)((function(){}),[]),i.createElement("div",{style:{marginTop:"50px"}},i.createElement(J,{ref:e,initialValues:{author:"jiangtong"},onFinish:function(e){},onFinishFailed:function(e){}},i.createElement(L,{label:"请输入小册名称",labelWidth:150,name:"name",required:!0,rules:{rule:/^[a-zA-Z0-9_\u4e00-\u9fa5]{4,32}$/,message:"名称仅支持中文、英文字母、数字和下划线，长度限制4~32个字"},validateTrigger:"onBlur"},i.createElement(X,{placeholder:"小册名称"})),i.createElement(L,{label:"作者",labelWidth:150,name:"author",required:!0,validateTrigger:"onBlur"},i.createElement(X,{placeholder:"请输入作者"})),i.createElement(L,{label:"邮箱",labelWidth:150,name:"email",rules:{message:"邮箱格式错误！"},validateTrigger:"onBlur"},i.createElement(X,{placeholder:"请输入邮箱"})),i.createElement(L,{label:"手机",labelWidth:150,name:"phone",rules:{rule:/^1[3-9]\d{9}$/,message:"手机格式错误！"},validateTrigger:"onBlur"},i.createElement(X,{placeholder:"请输入邮箱"})),i.createElement(L,{label:"简介",labelWidth:150,name:"des",rules:{rule:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.length<5},message:"简介不超过五个字符"},validateTrigger:"onBlur"},i.createElement(X,{placeholder:"输入简介"})),i.createElement(L,{label:"你最喜欢的前端框架",labelWidth:150,name:"likes",required:!0},i.createElement(Y,{defaultValue:null,placeholder:"请选择",width:120},i.createElement(ee,{value:1}," React.js "),i.createElement(ee,{value:2}," Vue.js "),i.createElement(ee,{value:3}," Angular.js "))),i.createElement("button",{className:"searchbtn",type:"submit"},"提交"),i.createElement("button",{className:"concellbtn",type:"reset"},"重置")),i.createElement("div",{style:{marginTop:"20px"}},i.createElement("span",null,"验证表单功能"),i.createElement("button",{className:"searchbtn",onClick:function(){},style:{background:"green"}},"获取表单数层"),i.createElement("button",{className:"searchbtn",onClick:function(){var t;return null===(t=e.current)||void 0===t?void 0:t.validateFields((function(e){}))},style:{background:"orange"}},"动态验证表单"),i.createElement("button",{className:"searchbtn",onClick:function(){var t;null===(t=e.current)||void 0===t||t.setFieldsValue("des",{rule:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.length<10},message:"简介不超过十个字符"})},style:{background:"purple"}},"动态设置校验规则")))}}}]);
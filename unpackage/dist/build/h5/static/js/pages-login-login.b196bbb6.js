(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-login"],{1380:function(t,e,i){"use strict";i.r(e);var a=i("1dc7"),n=i("555e");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("9d09");var r,s=i("f0c5"),l=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"ebb5060a",null,!1,a["a"],r);e["default"]=l.exports},"1dc7":function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"container"},[a("v-uni-view",{staticClass:"logo row"},[a("v-uni-image",{attrs:{src:i("dac6"),mode:""}})],1),a("v-uni-view",{staticClass:"title"},[t._v("小米账号登录")]),a("v-uni-view",{staticClass:"form-box"},[a("v-uni-form",{attrs:{action:""}},[a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.isTel,expression:"isTel"}],staticClass:"form-item row"},[a("v-uni-view",{staticClass:"tel-head"},[t._v("+86")]),a("v-uni-input",{staticClass:"form-item-input",attrs:{type:"number",placeholder:"手机号码"}})],1),a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.isTel,expression:"isTel"}],staticClass:"form-item row"},[a("v-uni-input",{directives:[{name:"show",rawName:"v-show",value:t.isTel,expression:"isTel"}],staticClass:"form-item-input",attrs:{type:"number",placeholder:"短信验证码"}}),a("v-uni-button",{staticClass:"btn-validate",attrs:{ype:"default"}},[t._v("获取验证码")])],1),a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!t.isTel,expression:"!isTel"}],staticClass:"form-item row"},[a("v-uni-input",{staticClass:"form-item-input",attrs:{type:"number",placeholder:"邮箱/手机号码/小米ID"}})],1),a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!t.isTel,expression:"!isTel"}],staticClass:"form-item row"},[a("v-uni-input",{staticClass:"form-item-input",attrs:{type:t.showPwd?"text":"password",placeholder:"密码"}}),a("v-uni-view",{staticClass:"iconfont icon-yanjing-",style:{color:t.showPwd?"#ff6700":""},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showPwd=!t.showPwd}}})],1),a("v-uni-view",{staticClass:"form-item-other"},[a("v-uni-button",{staticClass:"btn-login",attrs:{type:"default"}},[t._v("立即登录/注册")])],1),a("v-uni-view",{staticClass:"form-item-other"},[a("v-uni-button",{staticClass:"btn-change",attrs:{type:"default"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.isTel=!t.isTel}}},[t._v(t._s(t.isTel?"用户名密码登录":"手机短信注册/登录"))])],1),a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!t.isTel,expression:"!isTel"}],staticClass:"des row"},[a("v-uni-navigator",{attrs:{url:"../cart/cart"}},[t._v("立即注册")]),a("v-uni-text",[t._v("|")]),a("v-uni-navigator",{attrs:{url:"../cart/cart"}},[t._v("忘记密码？")])],1),a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.isTel,expression:"isTel"}],staticClass:"des"},[a("v-uni-navigator",{attrs:{url:"../cart/cart"}},[t._v("收不到验证码？")])],1)],1)],1),a("v-uni-view",{staticClass:"other-login-title row justify-center"},[t._v("其它方式登录")]),a("v-uni-view",{staticClass:"row justify-center"},[a("v-uni-navigator",[a("v-uni-image",{staticClass:"other-login-item",attrs:{src:i("fa5a"),mode:"widthFix"}})],1),a("v-uni-navigator",[a("v-uni-image",{staticClass:"other-login-item",attrs:{src:i("70fa"),mode:"widthFix"}})],1),a("v-uni-navigator",[a("v-uni-image",{staticClass:"other-login-item",attrs:{src:i("75bd"),mode:"widthFix"}})],1)],1),a("v-uni-view",{staticClass:"other-chioce row"},[a("v-uni-navigator",[t._v("简体")]),a("v-uni-text",[t._v("|")]),a("v-uni-navigator",[t._v("繁体")]),a("v-uni-text",[t._v("|")]),a("v-uni-navigator",[t._v("English")]),a("v-uni-text",[t._v("|")]),a("v-uni-navigator",[t._v("常见问题")]),a("v-uni-text",[t._v("|")]),a("v-uni-navigator",[t._v("隐私政策")])],1)],1)},o=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}))},"212f":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{isTel:!0,showPwd:!1}},methods:{}};e.default=a},"555e":function(t,e,i){"use strict";i.r(e);var a=i("212f"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"5d10":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.row[data-v-ebb5060a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-flow:row nowrap;flex-flow:row nowrap}.row-wrap[data-v-ebb5060a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-flow:row wrap;flex-flow:row wrap}.justify-space-between[data-v-ebb5060a]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.justify-center[data-v-ebb5060a]{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.col[data-v-ebb5060a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-flow:column nowrap;flex-flow:column nowrap}.col-wrap[data-v-ebb5060a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-flow:column wrap;flex-flow:column wrap}a[data-v-ebb5060a]{text-decoration:none}.bg-line[data-v-ebb5060a]{height:%?20?%;width:100%;background:#f5f5f5}.right-after[data-v-ebb5060a]{position:relative}.right-after[data-v-ebb5060a]::after{content:"";position:absolute;top:50%;right:%?40?%;width:%?16?%;height:%?16?%;border-left:1px solid currentColor;border-top:1px solid currentColor;transform:translate3d(0,-50%,0) rotate(135deg);-webkit-transform:translate3d(0,-50%,0) rotate(135deg)}.container[data-v-ebb5060a]{padding:%?60?% %?40?%}.container .logo[data-v-ebb5060a]{width:%?96?%;height:%?96?%;margin:0 auto;border-radius:%?6?%;background:#ff6700}.container .logo > uni-image[data-v-ebb5060a]{width:%?50?%;height:%?32?%;margin:auto;object-fit:cover;-webkit-filter:grayscale(100%) brightness(200%);filter:grayscale(100%) brightness(200%)}.container .title[data-v-ebb5060a]{text-align:center;margin:%?40?% 0}.container .form-box .form-item[data-v-ebb5060a]{height:%?104?%;font-size:%?36?%;line-height:%?104?%;border-bottom:2px solid #eee}.container .form-box .form-item .form-item-input[data-v-ebb5060a]{-webkit-box-flex:1;-webkit-flex:1 1;flex:1 1;height:%?104?%;font-size:%?36?%;line-height:%?104?%}.container .form-box .form-item .tel-head[data-v-ebb5060a]{position:relative;width:%?140?%;color:grey}.container .form-box .form-item .tel-head[data-v-ebb5060a]::after{content:"";position:absolute;top:50%;right:%?40?%;width:%?16?%;height:%?16?%;border-left:1px solid currentColor;border-top:1px solid currentColor;transform:translate3d(0,-50%,0) rotate(135deg);-webkit-transform:translate3d(0,-50%,0) rotate(135deg)}.container .form-box .form-item .btn-validate[data-v-ebb5060a]{background:#fff;color:#0d84ff;cursor:pointer;margin-right:0;height:%?104?%;font-size:%?28?%;line-height:%?104?%}.container .form-box .form-item .btn-validate[data-v-ebb5060a]::after{border:none}.container .form-box .form-item .icon-yanjing-[data-v-ebb5060a]{font-size:%?48?%}.container .form-box .form-item-other[data-v-ebb5060a]{margin-top:%?50?%}.container .form-box .form-item-other > uni-button[data-v-ebb5060a]{height:%?88?%;font-size:%?32?%;line-height:%?88?%;border-radius:44px}.container .form-box .form-item-other > uni-button[data-v-ebb5060a]::after{border:none}.container .form-box .form-item-other .btn-login[data-v-ebb5060a]{color:#fff;background:#ff6700}.container .form-box .form-item-other .btn-change[data-v-ebb5060a]{background:#eee}.container .form-box .des[data-v-ebb5060a]{margin-top:%?20?%;font-size:%?32?%;color:#9b9b9b;text-align:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.container .form-box .des > uni-navigator[data-v-ebb5060a]{margin:0 %?20?%}.container .other-login-title[data-v-ebb5060a]{font-size:%?24?%;color:#b0b0b0;margin:%?80?% 0 %?40?% 0}.container .other-login-title[data-v-ebb5060a]::after{-webkit-box-flex:1;-webkit-flex:1 1;flex:1 1;-webkit-align-self:center;align-self:center;content:"";height:1px;background:#eee}.container .other-login-title[data-v-ebb5060a]::before{-webkit-box-flex:1;-webkit-flex:1 1;flex:1 1;-webkit-align-self:center;align-self:center;content:"";height:1px;background:#eee}.container .other-login-item[data-v-ebb5060a]{width:%?60?%;height:auto;margin:0 %?20?%;object-fit:cover}.container .other-chioce[data-v-ebb5060a]{margin-top:%?100?%;font-size:%?28?%;color:#9b9b9b;text-align:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.container .other-chioce > uni-navigator[data-v-ebb5060a]{margin:0 %?20?%}',""]),t.exports=e},"70fa":function(t,e,i){t.exports=i.p+"static/img/zfb.0fdb0434.png"},"75bd":function(t,e,i){t.exports=i.p+"static/img/wb.e48a8fbd.png"},"788e":function(t,e,i){var a=i("5d10");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("08c5051a",a,!0,{sourceMap:!1,shadowMode:!1})},"9d09":function(t,e,i){"use strict";var a=i("788e"),n=i.n(a);n.a},dac6:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAyCAYAAAD2vz2aAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjQ2OUE2MkU0RTQ4MTFFNzgxOTZBRDJFQjk4Qjk0NjQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjQ2OUE2MkY0RTQ4MTFFNzgxOTZBRDJFQjk4Qjk0NjQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCOUQ0QkM2RjREQ0MxMUU3ODE5NkFEMkVCOThCOTQ2NCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCOUQ0QkM3MDREQ0MxMUU3ODE5NkFEMkVCOThCOTQ2NCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PiL8gcIAAAF1SURBVHja7Ju/LwRRFEbf+FVsQ0dBdJKNSksUSqVCr6AhKxGVwn+gVUpQEI1So5XoZUOhEbKMDiESIeOTzPbvzpoxz5wvOd3duzsn++7cSXajZMU9OOeGXPmTiHtxIU7FoYh/oe+ZmPKsjSMJS1yY+RS7YrNDcTdi1Le4y4WbHrEorsRcUW8asrB2BsSxWEeYLVtiCWG2bIsJhPmnV+zkeV3/TZhLv2HzCLNlFWG2TIqRvHYZa97FR84XXEvnUSeZEft/LexZDIvXnIVFop6uCQ3RnaHHeBmO5FMBstrPjZdiTUyLlww9Bqs6w87FcobX9Vd56B+IZoZjXVlhP0f0qAwfJKS1ookw+w0HYaEFYQVs+j4ZE7Oed6o3sVfA00OphW2IBUN9S5xU+Uhad6A+ZhhDnyAMYQhDGMIQRhCGMIQhDGEEYQhDGMIQhjCCMIQhDGEIIwhDWFHCLP81vPOsezT0/BK3nj0tP1i59qxrGXrG3wIMAK5yNsqRAjAyAAAAAElFTkSuQmCC"},fa5a:function(t,e,i){t.exports=i.p+"static/img/wx.a3971edd.png"}}]);
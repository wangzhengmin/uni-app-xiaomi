(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-user"],{"1e85":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={data:function(){return{showLogin:!1,userInfo:{},menu:[[{title:"会员中心",img:"/static/i-gift.png"},{title:"我的优惠",img:"/static/i-gift.png"}],[{title:"服务中心",img:"/static/i-gift.png"},{title:"小米之家",img:"/static/i-gift.png"}],[{title:"我的F码",img:"/static/i-gift.png"},{title:"礼物码兑换",img:"/static/i-gift.png"}],[{title:"设置",img:"/static/i-gift.png"}]]}},methods:{toLogin:function(){var t=this;this.showLogin=!0,uni.getUserInfo({success:function(i){t.userInfo=i.userInfo,console.log(t.userInfo)},fail:function(){console.log("未授权")}})},login:function(){uni.login({provider:"weixin",success:function(t){uni.getUserInfo({provider:"weixin",success:function(t){t.userInfo.nickName,t.userInfo.gender,t.userInfo.openId,t.userInfo.unionId;console.log(t)}})},fail:function(t){}})},onGotUserInfo:function(t){console.log("ddd"),uni.getUserInfo({success:function(t){console.log(t),uni.login({success:function(t){console.log(t),t.code?uni.request({url:"https://test.com/onLogin",data:{code:t.code},method:"GET",success:function(t){console.log(t)}}):console.log("登录失败！"+t.errMsg)}})},fail:function(){console.log("获取用户信息失败")}})}}};i.default=n},"2d16":function(t,i,e){"use strict";var n,o=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("v-uni-view",{staticClass:"user-info row"},[e("v-uni-view",{staticClass:"user-avatar"},[e("v-uni-image",{attrs:{src:"/static/avatar.png"}})],1),e("v-uni-navigator",{attrs:{url:"/pages/login/login"}},[t._v("登录/注册")])],1),e("v-uni-view",{staticClass:"order row justify-space-between"},[e("v-uni-view",[t._v("我的订单")]),e("v-uni-view",[t._v("全部订单")])],1),e("v-uni-view",{staticClass:"order-status row"},[e("v-uni-navigator",{staticClass:"order-status-item col"},[e("v-uni-view",{staticClass:"iconfont"},[t._v("")]),e("v-uni-text",[t._v("待付款")])],1),e("v-uni-navigator",{staticClass:"order-status-item col"},[e("v-uni-view",{staticClass:"iconfont"},[t._v("")]),e("v-uni-text",[t._v("待收货")])],1),e("v-uni-navigator",{staticClass:"order-status-item col"},[e("v-uni-view",{staticClass:"iconfont"},[t._v("")]),e("v-uni-text",[t._v("退换修")])],1)],1),e("v-uni-view",{staticClass:"bg-line"}),t._l(t.menu,(function(i){return e("v-uni-view",[e("v-uni-view",{staticClass:"menu-list"},t._l(i,(function(i){return e("v-uni-navigator",{staticClass:"menu-list-item row"},[e("v-uni-view",{staticClass:"icon-menu"},[e("v-uni-image",{attrs:{src:i.img,mode:"widthFix"}})],1),e("v-uni-text",[t._v(t._s(i.title))])],1)})),1),e("v-uni-view",{staticClass:"bg-line"})],1)}))],2)},a=[];e.d(i,"b",(function(){return o})),e.d(i,"c",(function(){return a})),e.d(i,"a",(function(){return n}))},"8b88":function(t,i,e){"use strict";e.r(i);var n=e("2d16"),o=e("8d0f");for(var a in o)"default"!==a&&function(t){e.d(i,t,(function(){return o[t]}))}(a);e("d5ca");var r,s=e("f0c5"),c=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,"75cc653f",null,!1,n["a"],r);i["default"]=c.exports},"8d0f":function(t,i,e){"use strict";e.r(i);var n=e("1e85"),o=e.n(n);for(var a in n)"default"!==a&&function(t){e.d(i,t,(function(){return n[t]}))}(a);i["default"]=o.a},"962f":function(t,i,e){var n=e("f972");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=e("4f06").default;o("c30a52ec",n,!0,{sourceMap:!1,shadowMode:!1})},d5ca:function(t,i,e){"use strict";var n=e("962f"),o=e.n(n);o.a},f972:function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.row[data-v-75cc653f]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-flow:row nowrap;flex-flow:row nowrap}.row-wrap[data-v-75cc653f]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-flow:row wrap;flex-flow:row wrap}.justify-space-between[data-v-75cc653f]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.justify-center[data-v-75cc653f]{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.col[data-v-75cc653f]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-flow:column nowrap;flex-flow:column nowrap}.col-wrap[data-v-75cc653f]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-flow:column wrap;flex-flow:column wrap}a[data-v-75cc653f]{text-decoration:none}.bg-line[data-v-75cc653f]{height:%?20?%;width:100%;background:#f5f5f5}.right-after[data-v-75cc653f]{position:relative}.right-after[data-v-75cc653f]::after{content:"";position:absolute;top:50%;right:%?40?%;width:%?16?%;height:%?16?%;border-left:1px solid currentColor;border-top:1px solid currentColor;transform:translate3d(0,-50%,0) rotate(135deg);-webkit-transform:translate3d(0,-50%,0) rotate(135deg)}.login-box[data-v-75cc653f]{position:fixed;bottom:0;left:0;width:100%;height:0;background:rgba(0,0,0,.5);-webkit-transition:all .5s;transition:all .5s;overflow:hidden}.login-box .login-info[data-v-75cc653f]{position:absolute;bottom:0;left:0;padding:%?60?% %?40?%;background:#fff;text-align:center}.login-box .login-info .icon-close[data-v-75cc653f]{position:absolute;right:%?20?%;top:%?20?%;font-size:%?36?%}.login-box .login-info .user-name[data-v-75cc653f]{color:#aaa;font-size:%?28?%;margin:%?10?% 0}.login-box .login-info .login-des[data-v-75cc653f]{margin:%?20?% 0;color:#333;font-size:%?36?%;font-weight:700}.login-box .login-info .btn-login[data-v-75cc653f]{margin:%?20?% 0;height:%?80?%;margin:%?40?% 0;line-height:%?80?%;background:green;color:#fff;border-radius:%?40?%}.login-box .login-info .agree-des[data-v-75cc653f]{padding:0 %?40?%;font-size:%?24?%;color:#aaa;line-height:%?40?%}.login-box .login-info .user-avatar[data-v-75cc653f]{margin:0;padding:0}.login-box-show[data-v-75cc653f]{height:100vh}.user-avatar[data-v-75cc653f]{padding:%?4?%;width:%?88?%;height:%?88?%;margin-left:%?32?%;margin-right:%?10?%;-webkit-align-self:center;align-self:center;background:#e6720d;border-radius:50%;overflow:hidden}.user-avatar > uni-image[data-v-75cc653f]{width:100%;height:100%;object-fit:cover}.user-info[data-v-75cc653f]{-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?160?%;font-size:%?24?%;color:#fff;background:#f37d0f;background-size:cover}.user-info .user-avatar[data-v-75cc653f]{padding:%?4?%;width:%?88?%;height:%?88?%;margin-left:%?32?%;margin-right:%?10?%;-webkit-align-self:center;align-self:center;background:#e6720d;border-radius:50%}.user-info .user-avatar > uni-image[data-v-75cc653f]{width:100%;height:100%;object-fit:cover}.order[data-v-75cc653f]{position:relative;padding:0 %?70?% 0 %?40?%;font-size:%?32?%;line-height:%?100?%;border-bottom:1px solid #eee}.order[data-v-75cc653f]::after{content:"";position:absolute;right:%?40?%;top:50%;width:%?20?%;height:%?20?%;border-left:1px solid currentColor;border-top:1px solid currentColor;transform:translate3d(0,-50%,0) rotate(135deg);-webkit-transform:translate3d(0,-50%,0) rotate(135deg)}.order > uni-view[data-v-75cc653f]:nth-of-type(2){font-size:%?28?%}.order-status[data-v-75cc653f]{font-size:%?24?%;color:rgba(0,0,0,.87);padding:%?40?% 0}.order-status .order-status-item[data-v-75cc653f]{-webkit-box-flex:1;-webkit-flex:1 1;flex:1 1;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.order-status .order-status-item .iconfont[data-v-75cc653f]{font-size:%?60?%;margin-bottom:%?20?%}.menu-list[data-v-75cc653f]{font-size:%?32?%}.menu-list .menu-list-item[data-v-75cc653f]{height:%?100?%;padding-left:%?40?%;line-height:%?100?%;position:relative}.menu-list .menu-list-item .icon-menu[data-v-75cc653f]{-webkit-box-flex:0;-webkit-flex:0 0 %?60?%;flex:0 0 %?60?%;width:%?60?%;height:%?60?%;margin-right:%?40?%;-webkit-align-self:center;align-self:center}.menu-list .menu-list-item .icon-menu > uni-image[data-v-75cc653f]{width:%?60?%;height:%?60?%;object-fit:cover}.menu-list .menu-list-item > uni-text[data-v-75cc653f]{-webkit-box-flex:1;-webkit-flex:1 1;flex:1 1;border-bottom:2px solid #f5f5f5}.menu-list .menu-list-item[data-v-75cc653f]::after{content:"";position:absolute;right:%?40?%;top:50%;width:%?20?%;height:%?20?%;border-left:1px solid currentColor;border-top:1px solid currentColor;transform:translate3d(0,-50%,0) rotate(135deg);-webkit-transform:translate3d(0,-50%,0) rotate(135deg)}',""]),t.exports=i}}]);
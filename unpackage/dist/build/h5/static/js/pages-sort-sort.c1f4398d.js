(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-sort-sort"],{"1c43":function(t,i,e){var o=e("24fb");i=o(!1),i.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.row[data-v-7703d180]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-flow:row nowrap;flex-flow:row nowrap}.row-wrap[data-v-7703d180]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-flow:row wrap;flex-flow:row wrap}.justify-space-between[data-v-7703d180]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.justify-center[data-v-7703d180]{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.col[data-v-7703d180]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-flow:column nowrap;flex-flow:column nowrap}.col-wrap[data-v-7703d180]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-flow:column wrap;flex-flow:column wrap}a[data-v-7703d180]{text-decoration:none}.bg-line[data-v-7703d180]{height:%?20?%;width:100%;background:#f5f5f5}.align-items-center[data-v-7703d180]{-webkit-box-align:center;-webkit-align-items:center;align-items:center}.right-after[data-v-7703d180]{position:relative}.right-after[data-v-7703d180]::after{content:"";position:absolute;top:50%;right:%?40?%;width:%?16?%;height:%?16?%;border-left:1px solid currentColor;border-top:1px solid currentColor;transform:translate3d(0,-50%,0) rotate(135deg);-webkit-transform:translate3d(0,-50%,0) rotate(135deg)}\n/* #ifdef H5 */.h5-container[data-v-7703d180]{padding-top:%?100?%}\n/* #endif */@font-face{font-family:iconfont;src:url(/static/fonts/iconfont.eot);src:url(/static/fonts/iconfont.eot?#iefix) format("embedded-opentype"),url(/static/fonts/iconfont.woff2) format("woff2"),url(/static/fonts/iconfont.woff) format("woff"),url(/static/fonts/iconfont.ttf) format("truetype"),url(/static/fonts/iconfont.svg#iconfont) format("svg")}.iconfont[data-v-7703d180]{font-family:iconfont!important;font-size:16px;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.image-container[data-v-7703d180]{width:100%}.image-container > uni-image[data-v-7703d180]{width:100%;height:auto;object-fit:cover}.img-cover[data-v-7703d180]{width:100%;height:auto;object-fit:cover}.icon-left[data-v-7703d180]{position:relative;font-size:%?36?%;-webkit-transform:rotate(10deg);transform:rotate(10deg)}.sort .sort-left[data-v-7703d180]{position:fixed;left:0;top:0;\n  /* # ifdef H5 */top:%?100?%;\n  /* #endif */-webkit-box-flex:0;-webkit-flex:0 0 %?160?%;flex:0 0 %?160?%;width:%?160?%;line-height:%?100?%;font-size:%?32?%;text-align:center}.sort .sort-left .scroll-box[data-v-7703d180]{\n    /* #ifdef H5 */height:calc(100vh - %?100?% - env(safe-area-inset-bottom) - 0px);\n    /* #endif */\n    /* #ifdef  MP */height:100vh\n    /* #endif */}.sort .sort-left .sort-item[data-v-7703d180]{-webkit-transform:scale(.8);transform:scale(.8);-webkit-transition:all .5s;transition:all .5s}.sort .sort-left .active-item[data-v-7703d180]{color:#fb7d34;-webkit-transform:scale(1);transform:scale(1)}.sort .sort-right[data-v-7703d180]{margin-left:%?160?%;-webkit-box-flex:0;-webkit-flex:0 0 %?590?%;flex:0 0 %?590?%;box-sizing:border-box;padding-right:%?20?%}.sort .sort-right .sort-product .sort-item-ad[data-v-7703d180]{width:100%;height:auto;object-fit:cover}.sort .sort-right .sort-product .sort-item-title[data-v-7703d180]{height:%?120?%;font-size:%?32?%;line-height:%?120?%;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.sort .sort-right .sort-product .sort-item-title[data-v-7703d180]::after{content:"";display:inline-block;height:%?2?%;width:%?60?%;margin-left:%?20?%;background:#e0e0e0;-webkit-align-self:center;align-self:center}.sort .sort-right .sort-product .sort-item-title[data-v-7703d180]::before{content:"";display:inline-block;height:%?2?%;width:%?60?%;margin-right:%?20?%;background:#e0e0e0;-webkit-align-self:center;align-self:center}.sort .sort-right .sort-product .sort-product-item[data-v-7703d180]{width:33.3%;margin:%?20?% 0}.sort .sort-right .sort-product .sort-product-item .sort-product-item-img[data-v-7703d180]{width:100%;height:auto;object-fit:cover}.sort .sort-right .sort-product .sort-product-item .sort-product-item-title[data-v-7703d180]{font-size:%?24?%;text-align:center;color:rgba(0,0,0,.54)}',""]),t.exports=i},"2e8f":function(t,i,e){"use strict";var o=e("ddee"),a=e.n(o);a.a},"32e4":function(t,i,e){"use strict";var o=e("a229"),a=e.n(o);a.a},3662:function(t,i,e){"use strict";e.r(i);var o=e("e46d"),a=e("a1c8");for(var n in a)"default"!==n&&function(t){e.d(i,t,(function(){return a[t]}))}(n);e("32e4");var r,c=e("f0c5"),s=Object(c["a"])(a["default"],o["b"],o["c"],!1,null,"f5497c9c",null,!1,o["a"],r);i["default"]=s.exports},"7a0a":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o={name:"common-head",data:function(){return{keyword:""}},onShow:function(){this.keyword=""},props:{title:{type:String},search:{type:Boolean,default:!1}}};i.default=o},"87c2":function(t,i,e){var o=e("24fb"),a=e("1de5"),n=e("df35");i=o(!1);var r=a(n);i.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.row[data-v-f5497c9c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-flow:row nowrap;flex-flow:row nowrap}.row-wrap[data-v-f5497c9c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-flow:row wrap;flex-flow:row wrap}.justify-space-between[data-v-f5497c9c]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.justify-center[data-v-f5497c9c]{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.col[data-v-f5497c9c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-flow:column nowrap;flex-flow:column nowrap}.col-wrap[data-v-f5497c9c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-flow:column wrap;flex-flow:column wrap}a[data-v-f5497c9c]{text-decoration:none}.bg-line[data-v-f5497c9c]{height:%?20?%;width:100%;background:#f5f5f5}.align-items-center[data-v-f5497c9c]{-webkit-box-align:center;-webkit-align-items:center;align-items:center}.right-after[data-v-f5497c9c]{position:relative}.right-after[data-v-f5497c9c]::after{content:"";position:absolute;top:50%;right:%?40?%;width:%?16?%;height:%?16?%;border-left:1px solid currentColor;border-top:1px solid currentColor;transform:translate3d(0,-50%,0) rotate(135deg);-webkit-transform:translate3d(0,-50%,0) rotate(135deg)}\n.h5-container[data-v-f5497c9c]{padding-top:%?100?%}\n@font-face{font-family:iconfont;src:url(/static/fonts/iconfont.eot);src:url(/static/fonts/iconfont.eot?#iefix) format("embedded-opentype"),url(/static/fonts/iconfont.woff2) format("woff2"),url(/static/fonts/iconfont.woff) format("woff"),url(/static/fonts/iconfont.ttf) format("truetype"),url(/static/fonts/iconfont.svg#iconfont) format("svg")}.iconfont[data-v-f5497c9c]{font-family:iconfont!important;font-size:16px;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.image-container[data-v-f5497c9c]{width:100%}.image-container > uni-image[data-v-f5497c9c]{width:100%;height:auto;object-fit:cover}.img-cover[data-v-f5497c9c]{width:100%;height:auto;object-fit:cover}.common-head[data-v-f5497c9c]{position:fixed;top:0;left:0;width:100%;height:%?100?%;font-size:%?32?%;line-height:%?100?%;background:#f2f2f2;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;z-index:999}.common-head .icon-left[data-v-f5497c9c]{position:absolute;left:%?40?%;top:50%;width:%?24?%;height:%?24?%;border-left:1px solid currentColor;border-top:1px solid currentColor;transform:translate3d(0,-50%,0) rotate(135deg);-webkit-transform:translate3d(0,-50%,0) rotate(-45deg)}.common-head .icon-search[data-v-f5497c9c]{position:absolute;right:%?20?%;-webkit-align-self:center;align-self:center;width:%?60?%;height:%?60?%;background-image:url('+r+");background-size:contain}.common-head .search-box[data-v-f5497c9c]{position:relative;-webkit-align-self:center;align-self:center}.common-head .search[data-v-f5497c9c]{width:%?420?%;height:%?70?%;padding:0 %?60?% 0 %?40?%;line-height:%?70?%;background:#fff}.common-head .icon-guanbi[data-v-f5497c9c]{position:absolute;top:50%;right:%?10?%;font-size:%?24?%;color:#aaa;-webkit-transform:translateY(-50%);transform:translateY(-50%)}",""]),t.exports=i},"95d0":function(t,i,e){"use strict";var o=e("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("ac6a"),e("20d6");var a=o(e("3662")),n={data:function(){return{activeID:8,sizeCalcState:!1,scrollTop:0,menuTop:0,menuHeight:0,navigationList:[{content:"菜单1",id:0},{content:"菜单2",id:1},{content:"菜单3",id:2},{content:"菜单4",id:3},{content:"菜单5",id:4},{content:"菜单6",id:5},{content:"菜单7",id:6},{content:"菜单8",id:7},{content:"菜单9",id:8},{content:"菜单10",id:9},{content:"菜单11",id:10},{content:"菜单12",id:11},{content:"菜单13",id:12},{content:"菜单14",id:13},{content:"菜单15",id:14},{content:"菜单16",id:15}],productList:[{id:0,title:"菜单1",list:[{image:"/static/sort_product.png",title:"全面屏手机"},{image:"/static/sort_product.png",title:"游戏手机"},{image:"/static/sort_product.png",title:"老人机"},{image:"/static/sort_product.png",title:"拍照手机"},{image:"/static/sort_product.png",title:"女性手机"}]},{id:1,title:"菜单2",list:[{image:"/static/sort_product.png",title:"全面屏手机"},{image:"/static/sort_product.png",title:"游戏手机"},{image:"/static/sort_product.png",title:"老人机"},{image:"/static/sort_product.png",title:"拍照手机"},{image:"/static/sort_product.png",title:"女性手机"}]},{id:2,title:"菜单3",list:[{image:"/static/sort_product.png",title:"全面屏手机"},{image:"/static/sort_product.png",title:"游戏手机"},{image:"/static/sort_product.png",title:"老人机"},{image:"/static/sort_product.png",title:"拍照手机"},{image:"/static/sort_product.png",title:"女性手机"}]},{id:3,title:"菜单4",list:[{image:"/static/sort_product.png",title:"全面屏手机"},{image:"/static/sort_product.png",title:"游戏手机"},{image:"/static/sort_product.png",title:"老人机"},{image:"/static/sort_product.png",title:"拍照手机"},{image:"/static/sort_product.png",title:"女性手机"}]},{id:4,title:"菜单5",list:[{image:"/static/sort_product.png",title:"全面屏手机"},{image:"/static/sort_product.png",title:"游戏手机"},{image:"/static/sort_product.png",title:"老人机"},{image:"/static/sort_product.png",title:"拍照手机"},{image:"/static/sort_product.png",title:"女性手机"}]},{id:5,title:"菜单6",list:[{image:"/static/sort_product.png",title:"全面屏手机"},{image:"/static/sort_product.png",title:"游戏手机"},{image:"/static/sort_product.png",title:"老人机"},{image:"/static/sort_product.png",title:"拍照手机"},{image:"/static/sort_product.png",title:"女性手机"}]},{id:6,title:"菜单7",list:[{image:"/static/sort_product.png",title:"全面屏手机"},{image:"/static/sort_product.png",title:"游戏手机"},{image:"/static/sort_product.png",title:"老人机"},{image:"/static/sort_product.png",title:"拍照手机"},{image:"/static/sort_product.png",title:"女性手机"}]},{id:7,title:"菜单8",list:[{image:"/static/sort_product.png",title:"全面屏手机"},{image:"/static/sort_product.png",title:"游戏手机"},{image:"/static/sort_product.png",title:"老人机"},{image:"/static/sort_product.png",title:"拍照手机"},{image:"/static/sort_product.png",title:"女性手机"}]},{id:8,title:"菜单9",list:[{image:"/static/sort_product.png",title:"全面屏手机"},{image:"/static/sort_product.png",title:"游戏手机"},{image:"/static/sort_product.png",title:"老人机"},{image:"/static/sort_product.png",title:"拍照手机"},{image:"/static/sort_product.png",title:"女性手机"}]},{id:9,title:"菜单10",list:[{image:"/static/sort_product.png",title:"全面屏手机"},{image:"/static/sort_product.png",title:"游戏手机"},{image:"/static/sort_product.png",title:"老人机"},{image:"/static/sort_product.png",title:"拍照手机"},{image:"/static/sort_product.png",title:"女性手机"}]},{id:10,title:"菜单11",list:[{image:"/static/sort_product.png",title:"全面屏手机"},{image:"/static/sort_product.png",title:"游戏手机"},{image:"/static/sort_product.png",title:"老人机"},{image:"/static/sort_product.png",title:"拍照手机"},{image:"/static/sort_product.png",title:"女性手机"}]},{id:11,title:"菜单12",list:[{image:"/static/sort_product.png",title:"全面屏手机"},{image:"/static/sort_product.png",title:"游戏手机"},{image:"/static/sort_product.png",title:"老人机"},{image:"/static/sort_product.png",title:"拍照手机"},{image:"/static/sort_product.png",title:"女性手机"}]},{id:12,title:"菜单13",list:[{image:"/static/sort_product.png",title:"全面屏手机"},{image:"/static/sort_product.png",title:"游戏手机"},{image:"/static/sort_product.png",title:"老人机"},{image:"/static/sort_product.png",title:"拍照手机"},{image:"/static/sort_product.png",title:"女性手机"}]},{id:13,title:"菜单14",list:[{image:"/static/sort_product.png",title:"全面屏手机"},{image:"/static/sort_product.png",title:"游戏手机"},{image:"/static/sort_product.png",title:"老人机"},{image:"/static/sort_product.png",title:"拍照手机"},{image:"/static/sort_product.png",title:"女性手机"}]},{id:14,title:"菜单15",list:[{image:"/static/sort_product.png",title:"全面屏手机"},{image:"/static/sort_product.png",title:"游戏手机"},{image:"/static/sort_product.png",title:"老人机"},{image:"/static/sort_product.png",title:"拍照手机"},{image:"/static/sort_product.png",title:"女性手机"}]},{id:15,title:"菜单16",list:[{image:"/static/sort_product.png",title:"全面屏手机"},{image:"/static/sort_product.png",title:"游戏手机"},{image:"/static/sort_product.png",title:"老人机"},{image:"/static/sort_product.png",title:"拍照手机"},{image:"/static/sort_product.png",title:"女性手机"}]}]}},components:{commonHead:a.default},methods:{navigationClick:function(t){this.activeID=t,this.sizeCalcState||this.calcSize();var i=this.productList.findIndex((function(i){return i.id===t}));this.scrollTop=this.productList[i].top,uni.pageScrollTo({scrollTop:this.productList[i].top+5,duration:0})},onPageScroll:function(t){this.sizeCalcState||this.calcSize();var i=t.scrollTop,e=this.productList.filter((function(t){return t.top<=i})).reverse();e.length>0&&(this.activeID=e[0].id)},calcSize:function(){var t=this,i=0;this.productList.forEach((function(t){var e=uni.createSelectorQuery().select("#main-"+t.id);e.fields({size:!0},(function(e){t.top=i,i+=e.height,t.bottom=i})).exec()})),this.navigationList.forEach((function(t){var i=uni.createSelectorQuery().select("#menu-"+t.id);i.fields({rect:!0},(function(i){t.top=i.top,t.bottom=i.bottom})).exec()}));var e=uni.createSelectorQuery().select(".scroll-box");e.boundingClientRect((function(i){t.menuHeight=i.height})).exec(),this.sizeCalcState=!0}}};i.default=n},a1c8:function(t,i,e){"use strict";e.r(i);var o=e("7a0a"),a=e.n(o);for(var n in o)"default"!==n&&function(t){e.d(i,t,(function(){return o[t]}))}(n);i["default"]=a.a},a229:function(t,i,e){var o=e("87c2");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=e("4f06").default;a("0c4ab51f",o,!0,{sourceMap:!1,shadowMode:!1})},a25d:function(t,i,e){"use strict";e.r(i);var o=e("f42c"),a=e("fa8b");for(var n in a)"default"!==n&&function(t){e.d(i,t,(function(){return a[t]}))}(n);e("2e8f");var r,c=e("f0c5"),s=Object(c["a"])(a["default"],o["b"],o["c"],!1,null,"7703d180",null,!1,o["a"],r);i["default"]=s.exports},ddee:function(t,i,e){var o=e("1c43");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=e("4f06").default;a("1bfefeb6",o,!0,{sourceMap:!1,shadowMode:!1})},df35:function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAQAAAD/5HvMAAAEx0lEQVQYGe3Bf0yUdRwH8I9GpBtZVpul0y1/ZD8sKzdXbupMh3Pq0jWtzbVs9YfL8scfLq02h1m52R3c832+z/d5HrjjAOH4KQhy4MQD4eS4gXiCePLjBIwU8VeCOAPy3dZf/mEpz56zW93rRRQVFRUVFfU/dGFM+UTHlOrXzq/yf9HwefeS0plpk4/F0b+je5x/UZXIPZV+URmRwMEhQfs940K+ry6hYTY9Wu0Tyze6yxVYwSGgQoUKFSpUCMiwwH6zPLVqZVcsPRrlSwvqVVghwMGhQYMOHTp0aNDAIcBhhQ53UcWLFH4127QrElQwqEi7keUu21W/vnl5+/y2dwKraj8p3pdZ7bzDIYNDQmqweQWFU/cTpU4GAQUMro6SbR2z6D4aFuRb0m4yqFCgDXq3U7hciynOSYQOBertgr2np9I/ODHPlSlDg4AN3m8oPKq+t0GHguSexg/ogepjPbvZkIACbci3lsx3Yr06rECGvSO4gB6SbxMb5pBhDwZeInN1vWJvY5DB+5uX0ShUfmeDAhtKCkOxZCZPogUCMo5vpFEJxRSkcKiQ0BBP5gnMSu+RIaGokEatc2ZqSEBCqasnhszi32SFgBYKLiQDqnfI0CAGz79B5uibkOOVIZCXTob0TrK3qeA4tpfM0TmPQYO427CBDHLrDAoO+H+LITM0r+VQkRy88DwZFFiXBAWOS73PkRl8WzgU5JVVjyeDQi+LPhmOW63zyAxH9yvgKE31jCGDKqZltTPYh+rXkBmKXAIyKpLIsJpn8hskpMDzJZmhKFuAoXIfGeaPO+i1IQXHtpIZPHsVyCgXZJhnUm6TBPtI3UdkBv9mDo5DOVUxZFDpjAO/yHDcCcSTGVreZxDI8F58kgxqelMe5LD3h+aQGbrnsBENYrDjbTKobnMSFLh8A7Fkhpa4Ao8MgcpdZEjTuAI3h4DnRzJLYEMiODKPX3qKDAjOF30a+N3gYjJLz+SMs0lQUL2ZDDiYqkDCQffFcWSeih8sYEht/HUqjVJgjehTIOH0CjJT99QDbRJsKCxtG0+j0PWqvUOGFYdzyGxnlyVf5ZCQ9xM9tJPP5jbaIMEZ7J5B5jv6FR/iUPsP778eRw+hc4ajhEGBs+NkPIXDmTFuRyI4FBSW9EyhB2h9N+O0AgEFR5MoXK49XilzMDBktBZ+Fnia/oZ/ev6elKscAioUOEPtCyl8POucfRwSZOTVunZWxg9MoHtcnuxek5mQE7JBhoAODQIStBttCyh8OubmHEke4LBAhXM4uykt35mWb8212bPSi7M6nX9wWCGQfL2M9U73JjBw2KBfbl1M4VPxmG9tdl76gA0WWCBBhQYNKiRY8TMYMnuzXdVL6S/H90hQwGHvObeEwiv4Vpn1UG1ea9ZV510dOhxIG8npOnykNKF5Lt2jZjeDCgXJl4PLKdx6xja+4Hm94D3Hh471rhXFi+qm0X3UfMsgwKDeOreUIoP3awYFEsTNs8soMnh3MnAw6FdallNkOLGLQUBBcl/LSooMtTtkqODQBlpWU2TwbZGhgEG5fWY1RQbfVhkcDKK/eTVFhtrtMjg49Butiygy+LfKEOAodlKkCHyq94vhUx9T5GiYXjn73FiKioqKior6z/oTCs8KMOW0P6QAAAAASUVORK5CYII="},e46d:function(t,i,e){"use strict";var o,a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"row common-head"},[e("v-uni-navigator",{staticClass:"icon-left",attrs:{"open-type":"navigateBack"}}),t.$props.search?t._e():e("v-uni-text",[t._v(t._s(this.$props.title))]),e("v-uni-view",{staticClass:"search-box"},[t.$props.search?e("v-uni-input",{staticClass:"search",attrs:{type:"text",value:"",placeholder:"搜索商品名称"},model:{value:t.keyword,callback:function(i){t.keyword=i},expression:"keyword"}}):t._e(),e("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:""!=t.keyword,expression:"keyword!=''"}],staticClass:"icon-guanbi iconfont",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.keyword=""}}})],1),t.$props.search?t._e():e("v-uni-navigator",{staticClass:"icon-search",attrs:{url:"/pages/search/search"}}),t.$props.search?e("v-uni-view",{staticClass:"icon-search",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.$emit("search",t.keyword)}}}):t._e()],1)},n=[];e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return n})),e.d(i,"a",(function(){return o}))},f42c:function(t,i,e){"use strict";var o,a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"sort row h5-container"},[e("common-head",{attrs:{title:"分类"}}),e("v-uni-view",{staticClass:"sort-left"},[e("v-uni-scroll-view",{staticClass:"scroll-box",attrs:{"scroll-top":t.menuTop,"scroll-y":"true","show-scrollbar":"true"}},t._l(t.navigationList,(function(i){return e("v-uni-view",{key:i.id,class:{"sort-item":!0,"active-item":t.activeID==i.id},attrs:{id:"menu-"+i.id},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navigationClick(i.id)}}},[t._v(t._s(i.content))])})),1)],1),e("v-uni-view",{staticClass:"sort-right"},t._l(t.productList,(function(i){return e("v-uni-view",{key:i.id,staticClass:"sort-product",attrs:{id:"main-"+i.id}},[e("v-uni-view",[e("v-uni-image",{staticClass:"sort-item-ad",attrs:{src:"/static/item_ad.webp",mode:"widthFix"}})],1),e("v-uni-view",{staticClass:"sort-item-title row"},[t._v(t._s(i.title))]),e("v-uni-view",{staticClass:"row-wrap"},t._l(i.list,(function(i,o){return e("v-uni-view",{key:o,staticClass:"sort-product-item"},[e("v-uni-view",[e("v-uni-image",{staticClass:"sort-product-item-img",attrs:{src:i.image,mode:"widthFix","lazy-load":!0}})],1),e("v-uni-view",{staticClass:"sort-product-item-title"},[t._v(t._s(i.title))])],1)})),1)],1)})),1)],1)},n=[];e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return n})),e.d(i,"a",(function(){return o}))},fa8b:function(t,i,e){"use strict";e.r(i);var o=e("95d0"),a=e.n(o);for(var n in o)"default"!==n&&function(t){e.d(i,t,(function(){return o[t]}))}(n);i["default"]=a.a}}]);
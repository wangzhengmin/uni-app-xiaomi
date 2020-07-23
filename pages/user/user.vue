<template>
	<view>
		<view class="user-info row">
			<view class="user-avatar">
				<image src="/static/avatar.png"></image>
			</view>
			<navigator url="/pages/login/login">登录/注册</navigator>
			<!-- #ifdef MP --> 
			<view @click="toLogin">登录/注册</view>
			<!-- #endif -->  
		</view>
		<view class="order row justify-space-between">
			<view>我的订单</view>
			<view>全部订单</view>
		</view>
		<view class="order-status row">
			<navigator class="order-status-item col">
				<view class="iconfont">&#xe60b;</view>
				<text>待付款</text>
			</navigator>
			<navigator class="order-status-item col">
				<view class="iconfont">&#xe66a;</view>
				<text>待收货</text>
			</navigator>
			<navigator class="order-status-item col">
				<view class="iconfont">&#xe624;</view>
				<text>退换修</text>
			</navigator>
		</view>
		<view class="bg-line"></view>
		<view v-for="m in menu">
			<view class="menu-list">
				<navigator class="menu-list-item row" v-for="i in m">
					<view class="icon-menu">
						<image :src="i.img" mode="widthFix"></image>
					</view>
					<text>{{i.title}}</text>
				</navigator>
			</view>
			<view class="bg-line"></view>
		</view>
		<!-- #ifdef MP -->  
		<view :class="['login-box',showLogin?'login-box-show':'']">
			<view class="login-info col">
				<view class="icon-close iconfont" @click="showLogin=false">&#xe61a;</view>
				<view class="user-avatar">
					<image :src="userInfo.avatarUrl"></image>
				</view>
				<view class="user-name">{{userInfo.nick}}</view>
				<view class="login-des">登录/注册 小米Lite</view>
				<button class="btn-login"open-type="getUserInfo" @getuserinfo="onGotUserInfo">微信一键授权</button>
				<view class="agree-des">已阅读并同意 小米商城用户协议，小米商城隐私政策、小米账号用户协议和小米账号隐私政策</view>
			</view>
		</view>
		<!-- #endif -->  
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showLogin:false,
				userInfo:{},
				menu:[
					[
						{title:'会员中心',img:"/static/i-gift.png"},
						{title:'我的优惠',img:"/static/i-gift.png"}
					],
					[
						{title:'服务中心',img:"/static/i-gift.png"},
						{title:'小米之家',img:"/static/i-gift.png"}
					],
					[
						{title:'我的F码',img:"/static/i-gift.png"},
						{title:'礼物码兑换',img:"/static/i-gift.png"}
					],
					[
						{title:'设置',img:"/static/i-gift.png"},
					]
				]
			}
		},
		methods: {
			toLogin(){
				this.showLogin = true;
				uni.getUserInfo({
					success: (res) => {
						this.userInfo = res.userInfo;
						console.log(this.userInfo);
					},
					fail: () => {
						console.log("未授权");
					}
				})
			},
			login(){
				let _self= {};
				uni.login({
					provider: "weixin",
					success: (res) => {
						uni.getUserInfo({
						    provider: 'weixin',
						    success: function (infoRes) {
								let formdata={
									nickName:infoRes.userInfo.nickName,
									gender:infoRes.userInfo.gender,
									openId:infoRes.userInfo.openId,
									unionId:infoRes.userInfo.unionId
								};
								console.log(infoRes)
							}
						})
					},
					fail: (err) => {}
				});
			},
			onGotUserInfo(e) {
				console.log('ddd');
			                // 获取用户信息
			                uni.getUserInfo({
			                    // 获取信息成功
			                    success(res) {
			                        console.log(res);
			                        // 成功后进行登录,获取code
			                        uni.login({
			                          success (res) {
			                             console.log(res);
			                            if (res.code) {
			                              //发起网络请求
			                              uni.request({
			                                // 请求路径
			                                url: 'https://test.com/onLogin',
			                                // 请求参数code
			                                data: {
			                                  code: res.code
			                                },
			                                method: 'GET',
			                                success(res){
			                                    // 请求成功后获取openid和session_key
			                                    console.log(res)
			                                }
			                              })
			                            } else {
			                              console.log('登录失败！' + res.errMsg)
			                            }
			                          }
			                        })
			                    },
			                    fail() {
			                        console.log("获取用户信息失败");
			                    }
			                })
			            },
		}
	}
</script>

<style scoped lang="scss">
.login-box{
	position: fixed;
	bottom:0;
	left:0;
	width:100%;
	height:0;
	background:rgba(0,0,0,0.5);
	transition: all .5s;
	overflow: hidden;
	.login-info{
		position: absolute;
		bottom:0;
		left:0;
		padding:60upx 40upx;
		background:#fff;
		text-align:center;
		.icon-close{
			position: absolute;
			right:20upx;
			top:20upx;
			font-size:36upx;
		}
		.user-name{
			color:#aaa;
			font-size:28upx;
			margin:10upx 0;
		}
		.login-des{
			margin:20upx 0;
			color:#333;
			font-size:36upx;
			font-weight:bold;
		}
		.btn-login{
			margin:20upx 0;
			height:80upx;
			margin:40upx 0;
			line-height: 80upx;
			background:green;
			color:#fff;
			border-radius:40upx;
			
		}
		.agree-des{
			padding:0 40upx;
			font-size:24upx;
			color:#aaa;
			line-height: 40upx;
		}
		.user-avatar{
			margin:0;
			padding:0;
		}
	}
}
.login-box-show{
	height:100vh;
}
.user-avatar{
	padding:4upx;
	width:88upx;
	height:88upx;
	margin-left:32upx;
	margin-right:10upx;
	align-self: center;
	background:#e6720d;;
	border-radius:50%;
	overflow: hidden;
	>image{
		width:100%;
		height:100%;
		object-fit: cover;
	}
}
.user-info{
	align-items: center;
	height:160upx;
	font-size:24upx;
	color:#fff;
	background:#f37d0f;
	background-size: cover;
	.user-avatar{
		padding:4upx;
		width:88upx;
		height:88upx;
		margin-left:32upx;
		margin-right:10upx;
		align-self: center;
		background:#e6720d;;
		border-radius:50%;
		>image{
			width:100%;
			height:100%;
			object-fit: cover;
		}
	}
}
.order{
	position: relative;
	padding: 0 70upx 0 40upx;
	font-size:32upx;
	line-height: 100upx;
	border-bottom:1px solid #eee;
	&::after{
		content: "";
		position: absolute;
		right: 40upx;
		top: 50%;
		width: 20upx;
		height: 20upx;
		border-left: 1px solid currentColor;
		border-top: 1px solid currentColor;
		transform: translate3d(0,-50%,0) rotate(135deg);
		-webkit-transform: translate3d(0,-50%,0) rotate(135deg);
	}
	>view:nth-of-type(2){
		font-size:28upx;
	}
}
.order-status{
	font-size:24upx;
	color: rgba(0,0,0,.87);
	padding:40upx 0;
	.order-status-item{
		flex: 1 1;
		align-items: center;
		.iconfont{
			font-size:60upx;
			margin-bottom:20upx;
		}
	}
}
.menu-list{
	font-size:32upx;
	.menu-list-item{
		height:100upx;
		padding-left:40upx;
		line-height: 100upx;
		position: relative;
		.icon-menu{
			flex:0 0 60upx;
			width:60upx;
			height:60upx;
			margin-right:40upx;
			align-self: center;
			>image{
				width:60upx;
				height:60upx;
				object-fit: cover;
			}
		}
		>text{
			flex:1 1;
			border-bottom:2px solid #f5f5f5;
		}
		&::after{
			content: "";
			position: absolute;
			right: 40upx;
			top: 50%;
			width: 20upx;
			height: 20upx;
			border-left: 1px solid currentColor;
			border-top: 1px solid currentColor;
			transform: translate3d(0,-50%,0) rotate(135deg);
			-webkit-transform: translate3d(0,-50%,0) rotate(135deg);
		}
	}
}
</style>

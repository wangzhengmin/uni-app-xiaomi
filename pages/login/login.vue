<template>
	<view class="container">
		<view class="logo row">
			<image src="../../static/logo.png" mode=""></image>
		</view>
		<view class="title">小米账号登录</view>
		<view class="form-box">
			<form action="">
				<!-- 手机短信注册/登录 -->
				<view class='form-item row' v-show="isTel">
					<view class="tel-head">+86</view>
					<input type="number" placeholder="手机号码" class="form-item-input">
				</view>
				<view class='form-item row' v-show="isTel">
					<input type="number" placeholder="短信验证码" class="form-item-input" v-show="isTel">
					<button ype="default" class="btn-validate">获取验证码</button>
				</view>
				<!-- 用户密码登录 -->
				<view class='form-item row' v-show="!isTel">
					<input type="number" placeholder="邮箱/手机号码/小米ID" class="form-item-input">
				</view>
				<view class='form-item row' v-show="!isTel">
					<input :type="showPwd?'text':'password'" placeholder="密码" class="form-item-input">
					<view class="iconfont icon-yanjing-" :style="{color:showPwd?'#ff6700':''}" @click="showPwd=!showPwd"></view>
				</view>
				<view class='form-item-other'>
					<button type="default" class="btn-login">立即登录/注册</button>
				</view>
				
				<view class='form-item-other'>
					<button type="default" class="btn-change" @click="isTel=!isTel">{{!isTel?'手机短信注册/登录':'用户名密码登录'}}</button>
				</view>
				<!-- 用户密码登录 -->
				<view class="des row" v-show="!isTel">
					<navigator url="../cart/cart">立即注册</navigator>
					<text>|</text>
					<navigator url="../cart/cart">忘记密码？</navigator>
				</view>
				<!-- 手机短信注册/登录 -->
				<view class="des" v-show="isTel">
					<navigator url="../cart/cart">收不到验证码？</navigator>
				</view>
			</form>
		</view>
		<!-- 其它方式登录 -->
		<view class="other-login-title row justify-center">其它方式登录</view>
		<view class="row justify-center">
			<navigator >
				<image src="../../static/wx.png" mode="widthFix" class="other-login-item"></image>
			</navigator>
			<navigator>
				<image src="../../static/zfb.png" mode="widthFix" class="other-login-item"></image>
			</navigator>
			<navigator>
				<image src="../../static/wb.png" mode="widthFix" class="other-login-item"></image>
			</navigator>
		</view>
		<!-- 其它选择 -->
		<view class="other-chioce row">
			<navigator>简体</navigator>
			<text>|</text>
			<navigator>繁体</navigator>
			<text>|</text>
			<navigator>English</navigator>
			<text>|</text>
			<navigator>常见问题</navigator>
			<text>|</text>
			<navigator>隐私政策</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isTel:true,
				showPwd:false,
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang='scss'>
.container{
	padding:60upx 40upx;
	.logo{
		width:96upx;
		height:96upx;
		margin:0 auto;
		border-radius:6upx;
		background:#ff6700;
		>image{
			width:50upx;
			height:32upx;
			margin:auto;
			object-fit: cover;
			filter: grayscale(100%) brightness(200%);
		}
	}
	.title{
		text-align: center;
		margin:40upx 0;
	}
	.form-box{
		.form-item{
			height:104upx;
			font-size:36upx;
			line-height: 104upx;
			border-bottom:2px solid #eee;
			.form-item-input{
				flex:1 1;
				height:104upx;
				font-size:36upx;
				line-height: 104upx;
			}
			.tel-head{
				position: relative;
				width:140upx;
				color:grey;
				&::after{
					content: "";
					position: absolute;
					top: 50%;
					right:40upx;
					width: 16upx;
					height: 16upx;
					border-left: 1px solid currentColor;
					border-top: 1px solid currentColor;
					transform: translate3d(0,-50%,0) rotate(135deg);
					-webkit-transform: translate3d(0,-50%,0) rotate(135deg);
				}
			}
			.btn-validate{
				background:#fff;
				color:#0d84ff;
				cursor: pointer;
				margin-right:0;
				height:104upx;
				font-size:28upx;
				line-height: 104upx;
				&::after {
					border: none;
				}
			}
			.icon-yanjing-{
				font-size:48upx;
			}
		}
		.form-item-other{
			margin-top:50upx;
			>button{
				height:88upx;
				font-size:32upx;
				line-height: 88upx;
				border-radius:44px;
				&::after {
					border: none;
				}
			}
			.btn-login{
				color:#fff;
				background:#ff6700;
				
			}
			.btn-change{
				background:#eee;
				
			}
		}
		.des{
			margin-top:20upx;
			font-size:32upx;
			color:#9b9b9b;
			text-align: center;
			justify-content: center;
			>navigator{
				margin:0 20upx;
			}
		}
	}
	.other-login-title{
		font-size:24upx;
		color:#b0b0b0;
		margin:80upx 0 40upx 0;
		&::after{
			flex:1 1;
			align-self: center;
			content:'';
			height:1px;
			background:#eee;
		}
		&::before{
			flex:1 1;
			align-self: center;
			content:'';
			height:1px;
			background:#eee;
		}
	}
	.other-login-item{
		width:60upx;
		height:auto;
		margin:0 20upx;
		object-fit: cover;
	}
	.other-chioce{
		margin-top:100upx;
		font-size:28upx;
		color:#9b9b9b;
		text-align: center;
		justify-content: center;
		>navigator{
			margin:0 20upx;
		}
	}
}
</style>

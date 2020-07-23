<template>
	<view class="h5-container">
		<!-- #ifdef H5 -->
		<common-head title="购物车"></common-head>
		<!-- #endif -->
		<navigator url="/pages/login/login" class="row justify-space-between login-remind">
			<text>登录后享受更多优惠</text>
			<text class="go-login">去登录</text>
		</navigator>
		<view class="buy-remind">
			<navigator url="/pages/index/index">
				<text>购物车还是空的</text>
				<text>去逛逛</text>
			</navigator>
		</view>
		<!-- 猜你喜欢 -->
		<view>
			<image src="../../static/like.jpg" mode="widthFix" class="guess-title-img"></image>
		</view>
		<view class="guess-like row-wrap justify-space-between">
			<view class="guess-item" v-for="guess in guessProduct" :key="guess.id">
				<guess-product  :guess="guess"></guess-product>
			</view>
		</view>
	</view>
</template>

<script>
	import commonHead from '../../components/commonHead.vue';
	import guessProduct from '../../components/guessProduct.vue';
	
	export default {
		data() {
			return {
				guessProduct:[
					{id:1,name:'米家驱蚊器 智能版',img:require('../../static/guess_product.jpg'),price:59,old_price:59},
					{id:2,name:'米家驱蚊器 智能版',img:require('../../static/guess_product.jpg'),price:59,old_price:39},
					{id:3,name:'米家驱蚊器 智能版',img:require('../../static/guess_product.jpg'),price:59,old_price:49}
				]
			}
		},
		components:{
			'common-head':commonHead,
			'guess-product':guessProduct
		},
		methods: {
			
		}
	}
</script>

<style lang='scss' scoped>
	/* #ifdef H5 */
	.h5-container{
		padding-top:100upx;
	}
	/* #endif */
	.login-remind{
		height:108upx;
		padding:0 60upx 0 40upx;
		font-size:32upx;
		color:rgba(0,0,0,.87);
		line-height: 108upx;
		.go-login{
			position: relative;
			font-size:28upx;
			color:rgba(0,0,0,.54);
			&::after{
				content: "";
				position: absolute;
				top: 50%;
				width: 16upx;
				height: 16upx;
				border-left: 1px solid currentColor;
				border-top: 1px solid currentColor;
				transform: translate3d(0,-50%,0) rotate(135deg);
				-webkit-transform: translate3d(0,-50%,0) rotate(135deg);
			}
		}
	}
	.buy-remind{
		height:80upx;
		padding:20upx;
		font-size:28upx;
		line-height: 80upx;
		color: rgba(0,0,0,.27);
		text-align: center;
		background:#ebebeb;
		text:nth-of-type(1){
			display: inline-block;
			padding-left:100upx;
			background: url(../../static/cartnull.png) no-repeat;
			background-size: contain;
		}
		text:nth-of-type(2){
			margin-left:20upx;
			padding:4upx 10upx;
			color:rgba(0,0,0,.87);
			border: 1px solid rgba(0,0,0,.15);
		}
	}
	.guess-title-img{
		width:100%;
		height:auto;
		object-fit:cover;
	}
	.guess-like{
		margin-bottom:100upx;
		.guess-item{
			width:49.5%;
		}
	}

</style>

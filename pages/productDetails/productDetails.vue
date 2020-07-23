<template>
	<view class="details">
		<view class="swiper-box">
			<view class="swiper-num">{{swiperIndex+1}} / {{swiperList.length}}</view>
			<swiper :circular="true" :autoplay="true" :interval="3000" :duration="1000" class="swiper" @change="swiperChange">
				<swiper-item v-for="(swiper,index) in swiperList" :key="index">
					<image :src="swiper.img" mode="widthFix" class="swiper-img"></image>
				</swiper-item>
			</swiper>
		</view>
		<!-- info -->
		<view class="poduct-info">
			<view class="price">59</view>
			<view class="name">米家驱蚊器 智能版</view>
			<view class="des-list">
				<view class="des-item">①智能操控</view>
				<view class="des-item">②一键循环定时</view>
				<view class="des-item">③长效驱蚊</view>
			</view>
		</view>
		<view class="bg-line"></view>
		<!-- buy info -->
		<view>
			<view class="row chioce-item right-after">
				<text>已选</text>
				<text>米家驱蚊器智能版 白色</text>
			</view>
			<view class="row chioce-item right-after">
				<text>送至</text>
				<text>北京市 东城区</text>
			</view>
		</view>
		<view class="self-des row right-after">
			<text class="row">小米自营</text>
			<text class="row">小米发货</text>
			<text class="row">7天无理由退换</text>
		</view>
		<!-- 推荐套餐 -->
		<view class="recommend">
			<view class="recommend-title">推荐套餐</view>
			<view class="row">
				<view class="recommend-left">
					
				</view>
				<scroll-view scroll-x="true" >
					<view></view>
				</scroll-view>
			</view>
			<view class="price-sum">
				总价
				<text class="price">79</text>
				<text class="old_price">88</text>
				<text>节省9</text>
			</view>
			<button type="default" class="btn-details">购买此套餐 (3件商品)</button>
		</view>
		<!-- 商品介绍 -->
		<view class="introduce-title">商品介绍</view>
		<view class="introduce-view">
			<view class="introduce-img">
				<image src="../../static/introduce_01.jpg" mode="widthFix"></image>
			</view>
			<view class="introduce-img">
				<image src="../../static/introduce_02.jpg" mode="widthFix"></image>
			</view>
			<view class="introduce-img">
				<image src="../../static/introduce_03.jpg" mode="widthFix"></image>
			</view>
		</view>
		<!-- 为你推荐 -->
		<view class="guess-title">
			为你推荐
		</view>
		<view class="guess-like row-wrap justify-space-between">
			<view class="guess-item" v-for="guess in guessProduct" :key="guess.id">
				<guess-product  :guess="guess" borderRadius></guess-product>
			</view>
		</view>
		<!-- footer -->
		<view class="footer row">
				<view class="footer-nav col" @click="switchTab('/pages/index/index')">
					<view class="icon-shouye iconfont"></view>
					首页
				</view>
				<navigator class="footer-nav col">
					<view class="icon-kefu iconfont"></view>
					客服
				</navigator>
				<view class="footer-nav col" @click="switchTab('/pages/cart/cart')">
					<view class="iconfont">&#xe610;</view>
					购物车
				</view>
			<button type="default" class="btn-details">加入购物车</button>
		</view>
	</view>
</template>

<script>
	import guessProduct from '../../components/guessProduct.vue';
	
	export default {
		data() {
			return {
				swiperList:[
					{img:require('../../static/produc_swiper_01.jpg')},
					{img:require('../../static/produc_swiper_02.jpg')},
					{img:require('../../static/produc_swiper_03.jpg')},
					{img:require('../../static/produc_swiper_04.jpg')},
					{img:require('../../static/produc_swiper_05.jpg')},
					{img:require('../../static/produc_swiper_06.jpg')}
				],
				swiperIndex:0,
				guessProduct:[
					{id:1,name:'米家驱蚊器 智能版',img:require('../../static/guess_product.jpg'),price:59,old_price:59},
					{id:2,name:'米家驱蚊器 智能版',img:require('../../static/guess_product.jpg'),price:59,old_price:39},
					{id:3,name:'米家驱蚊器 智能版',img:require('../../static/guess_product.jpg'),price:59,old_price:49}
				]
			}
		},
		components:{
			'guess-product':guessProduct
		},
		methods: {
			swiperChange(e){
				this.swiperIndex = e.detail.current;
			},
			switchTab(url){
				console.log('dd')
				uni.switchTab({
					url:url
				})
			}
		}
	}
</script>

<style lang='scss' scoped>
	.details{
		margin-bottom:100upx;
	}
	.swiper-box{
		position: relative;
		.swiper{
			height:814upx;
			.swiper-img{
				width:100%;
				height:auto;
				object-fit: cover;
			}
		}
		.swiper-num{
			position: absolute;
			bottom:40upx;
			right:40upx;
			height:50upx;
			padding:0 20upx;
			font-size:24upx;
			line-height: 50upx;
			color:#fff;
			border-radius:25upx;
			background-color: rgba(0,0,0,.5);
			z-index: 99;
		}
	}
	.poduct-info{
		padding:0 32upx;
		.price{
			margin-top:20upx;
			font-size:48upx;
			font-weight: bold;
			color:#ff6700;
			&:before{
				content:'￥';
				font-size:36upx;
			}
		}
		.name{
			line-height: 60upx;
			color: #000;
			font-weight: 700;
			font-size: 32upx;
			margin-top: 16upx;
			margin-bottom: 12upx;
		}
		.des-list{
			margin-bottom:10upx;
			.des-item{
				font-size:24upx;
				line-height: 40upx;
				color: #000;
			}
		}
	}
	.chioce-item{
		position: relative;
		padding:0 40upx;
		height:96upx;
		line-height: 96upx;
		font-size:24upx;
		>text:nth-of-type(1){
			margin-right:40upx;
		}
	}
	.self-des{
		padding:0 40upx;
		font-size:24upx;
		line-height: 80upx;
		color: rgba(0,0,0,.54);
		background:#fcfcfc;
		>text{
			margin-right:20upx;
			&::before{
				content:'';
				display: inline-block;
				width:24upx;
				height:24upx;
				margin-right:10upx;
				background:url('../../static/right.png');
				background-size:contain;
				align-self: center;
			}
		}
	}
	.recommend{
		padding:0 40upx;
		.recommend-title{
			font-size:28upx;
			line-height: 100upx;
			color:#3c3c3c;
		}
		.price-sum{
			padding:40upx 0;
			text-align:center;
		}
		.btn-details{
			width:100%;
		}
	}
	.introduce-title{
		position: sticky;
		top:100upx;
		left:0;
		width:100%;
		height:70upx;
		font-size:28upx;
		line-height: 70upx;
		text-align: center;
		color:#ff5934;
		background:#fff;
		z-index: 999;
	}
	.introduce-view{
		.introduce-img{
			width:100%;
			font-size:0;
			>image{
				width:100%;
				height:auto;
				object-fit: cover;
			}
		}
	}
	.guess-title{
		margin-top:66upx;
		padding:0 40upx;
		font-size:64upx;
		color:rgba(0,0,0,.84);
	}
	.guess-like{
		padding:0 40upx;
		.guess-item{
			width:320upx;
			margin-top:40upx;
		}
	}
	.footer{
		position: fixed;
		bottom:0;
		left:0;
		box-sizing: border-box;
		width:100%;
		padding:0 20upx;
		height:100upx;
		background:#fff;
		align-items: center;
		.footer-nav{
			width:90upx;
			font-size:24upx;
			color: rgba(0,0,0,.54);
			align-items: center;
			.iconfont{
				font-size:48upx;
			}
		}
	}
	.btn-details{
		width:400upx;
		height:80upx;
		margin-right:0;
		line-height: 80upx;
		font-size:28upx;
		color:#fff;
		text-align:center;
		border-radius:40upx;
		background: url('../../static/bg2.png');
		background-size: cover;
	}
</style>

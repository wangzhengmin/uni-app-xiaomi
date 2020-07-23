<template>
	<view>
		<!-- 头部 -->
		<view class="header">
			<view class="header-top row">
				<view class="icon-logo"></view>
				<view class="search-box row">
					<view class="icon-search"></view>
					搜索商品名称
				</view>
				<view class="icon-user"></view>
			</view>
			<view class="header-bottom">
				<view class="icon-down iconfont"></view>
				<scroll-view class="menu-list row" scroll-x="true">
					<view class="row">
						<navigator>推荐</navigator>
						<navigator>手机</navigator>
						<navigator>智能</navigator>
						<navigator>电视</navigator>
						<navigator>笔记本</navigator>
						<navigator>家电</navigator>
						<navigator>生活周边</navigator>
					</view>
				</scroll-view>
			</view>
		</view>
		<!-- 轮播 -->
		<swiper class="swiper" indicator-dots="true" autoplay="true">
			<swiper-item>
				<navigator url="../cart/cart">
					<image src="/static/banner_01.jpg" mode="widthFix" class="swiper-img" lazy-load></image>
				</navigator>
			</swiper-item>
			<swiper-item>
				<navigator url="../cart/cart">
					<image src="/static/banner_02.jpg" mode="widthFix" class="swiper-img" lazy-load></image>
				</navigator>
			</swiper-item>
			<swiper-item>
				<navigator url="../cart/cart">
					<image src="/static/banner_03.jpeg" mode="widthFix" class="swiper-img" lazy-load></image>
				</navigator>
			</swiper-item>
		</swiper>
		<!-- 图片menu -->
		<view class="menu-list row-wrap">
			<navigator class="menu-list-item">
				<image src="/static/list_01.png" mode="widthFix" lazy-load></image>
			</navigator>
			<navigator class="menu-list-item">
				<image src="/static/list_02.webp" mode="widthFix" lazy-load></image>
			</navigator>
			<navigator class="menu-list-item">
				<image src="/static/list_03.webp" mode="widthFix" lazy-load></image>
			</navigator>
			<navigator class="menu-list-item">
				<image src="/static/list_04.webp" mode="widthFix" lazy-load></image>
			</navigator>
			<navigator class="menu-list-item">
				<image src="/static/list_05.webp" mode="widthFix" lazy-load></image>
			</navigator>
			<navigator class="menu-list-item">
				<image src="/static/list_06.webp" mode="widthFix"lazy-load></image>
			</navigator>
			<navigator class="menu-list-item">
				<image src="/static/list_07.png" mode="widthFix" lazy-load></image>
			</navigator>
			<navigator class="menu-list-item">
				<image src="/static/list_08.png" mode="widthFix" lazy-load></image>
			</navigator>
			<navigator class="menu-list-item">
				<image src="/static/list_09.webp" mode="widthFix" lazy-load></image>
			</navigator>
			<navigator class="menu-list-item">
				<image src="/static/list_10.png" mode="widthFix" lazy-load></image>
			</navigator>
		</view>
		<!-- ad -->
		<view class="col-wrap ad-list">
			<navigator class="ad-list-item">
				<image src="/static/ad_01.webp" mode="widthFix" lazy-load></image>
			</navigator>
			<navigator class="ad-list-item">
				<image src="/static/ad_02.webp" mode="widthFix" lazy-load></image>
			</navigator>
			<navigator class="ad-list-item">
				<image src="/static/ad_03.webp" mode="widthFix" lazy-load></image>
			</navigator>
		</view>
		<!-- sort-product -->
		<view v-for="product in productList" :key="product.id">
			<view class="sort-product">
				<view>
					<image :src="product.item_img" mode="widthFix" class="sort-img" lazy-load></image>
				</view>
				<view class="sort-product-list row-wrap">
					<navigator class="sort-product-item" v-for="item in product.list" :key="item.pid">
						<view>
							<image :src="item.img" mode="widthFix" class="product-img" lazy-load></image>
						</view>
						<view class="product-title">{{item.name}}</view>
						<view class="product-des">{{item.des}}</view>
						<view>
							<text class="price">{{item.price}}</text>
							<text class="old-price">{{item.old_price}}</text>
						</view>
						<button type="warn" size="mini" class="btn-pay">立即购买</button>
					</navigator>
				</view>
				<navigator class="sort-title">更多{{product.item}}产品</navigator>
			</view>
			<view class="bg-line"></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				productList:[
					{
						id:1,item:'小米手机',item_img:require('../../static/sort_item.webp'),list:[
							 {
								pid:1,name: '小米10 Pro', des: '骁龙865 / 50倍变焦', price:2554,old_price:2554,img:require('../../static/product.jpg')
							},
							{
								pid:2,name: '小米10 Pro', des: '骁龙865 / 50倍变焦', price:2554,old_price:2554,img:require('../../static/product.jpg')
							},
							{
								pid:3,name: '小米10 Pro', des: '骁龙865 / 50倍变焦', price:2554,old_price:2554,img:require('../../static/product.jpg')
							},
							{
								pid:4,name: '小米10 Pro', des: '骁龙865 / 50倍变焦', price:2554,old_price:2554,img:require('../../static/product.jpg')
							},
					    ]
					},
					{
					    id:2,item:'小米手机',item_img:require('../../static/sort_item.webp'),list:[
							{
								pid:5,name: '小米10 Pro', des: '骁龙865 / 50倍变焦', price:2554,old_price:2554,img:require('../../static/product.jpg')
							},
							{
								pid:6,name: '小米10 Pro', des: '骁龙865 / 50倍变焦', price:2554,old_price:2554,img:require('../../static/product.jpg')
							},
							{
								pid:7,name: '小米10 Pro', des: '骁龙865 / 50倍变焦', price:2554,old_price:2554,img:require('../../static/product.jpg')
							},
							{
								pid:8,name: '小米10 Pro', des: '骁龙865 / 50倍变焦', price:2554,old_price:2554,img:require('../../static/product.jpg')
							},
						],
					}
				]
			}
		},
		onLoad() {
			
		},
		mounted(){
			console.log(this.$store)
		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">
	// 头部
	.header{
		position: fixed;
		top:0;
		left:0;	
		width:100%;
		height:150upx;
		background:#f2f2f2;
		z-index:999;
		.header-top{
			box-sizing: border-box;
			height:80upx;
			padding:0 20upx;
			justify-content: space-between;
			align-items: center;
			.icon-logo{
				width:50upx;
				height:32upx;
				background-image:url('../../static/logo.png');
				background-size: contain;
			}
			.icon-user{
				width:40upx;
				height:40upx;
				background-image:url('../../static/user.png');
				background-size: contain;
			}
			.search-box{
				width:560upx;
				height:60upx;
				line-height: 60upx;
				color: rgba(0,0,0,.3);
				background:#fff;
				.icon-search{
					align-self: center;
					width:50upx;
					height:50upx;
					margin-right:10upx;
					background-image:url('../../static/search.png');
					background-size: contain;
				}
			}
		}
		.header-bottom{
			position: relative;
			.menu-list{
				width:calc(100vw - 140upx);
				height:70upx;
				font-size: 28upx;
				line-height: 70upx;
				navigator{
					flex:0 0 auto;
					margin:0 20upx;
				}
				
			}
			.icon-down{
				width:120upx;
				height:70upx;
				line-height: 70upx;
				text-align:center;
				color:#aaa;
				position: absolute;
				right:0;
				font-size:48upx;
				background:#f2f2f2;
			}
		}
	}
	// 轮播
	.swiper{
		width:100%;
		height:376upx;
		margin-top:150upx;
		background:#ccc;
		.swiper-img{
			width:100%;
			height:auto;
			object-fit: cover;
		}
	}
	// 图片menu
	.menu-list{
		.menu-list-item{
			width:20%;
			flex:0 0 20%;
			image{
				width:100%;
				height:auto;
				object-fit: cover;
			}
		}
	}
	// ad
	.ad-list{
		height:530upx;
		width:100%;
		font-size:0;
		justify-content: space-between;
		align-content: space-between;
		.ad-list-item{
			width:49.5%;
			>image{
				width:100%;
				height:auto;
				object-fit: cover;
			}
		}
	}
	// sort-product
	.sort-product{
		.sort-img{
			width:100%;
			height:auto;
			object-fit: cover;
		}
		.sort-title{
			position: relative;
			height:100upx;
			line-height: 100upx;
			font-size:32upx;
			color:#666;
			text-align: center;
			border-top:2px solid #eee;
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
		.sort-product-list{
			padding:0 10upx;
			justify-content: space-between;
			.sort-product-item{
				display: block;
			    width:360upx;
			    height:auto;
			    text-align: center;
			    background:#fff;
				padding-bottom:20upx;
				.product-img{
					width:100%;
					height:auto;
					object-fit: cover;
				}
				.product-title{
					font-size:32upx;
					color:#333;
				}
				.product-des{
					font-size: 24upx;
					color:#aaa;
					line-height: 32upx;
				}
				.price{
					font-size: 28upx;
					color:#ea625b;
				    &::before{
					  content: '￥';
				    }
				}
				.old-price{
					font-size: 24upx;
				    color :#aaa;
				    text-decoration: line-through;
				    margin-left:10upx;
				    &::before{
					  content: '￥';
					  font-size: 24upx;
				   }
				}
				.btn-pay{
					margin-top:10upx;
					font-size: 32upx;
				}
			}
		}
	}
</style>

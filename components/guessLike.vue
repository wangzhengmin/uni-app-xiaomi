<template>
	<view class="guess-like-component">
		<view class="guess-title-img">
			<image src="../static/like.jpg" mode="widthFix"></image>
		</view>
		<view class="guess-like row-wrap justify-space-between">
			<navigator url="/pages/productDetails/productDetails" v-for="guess in guessProduct" :key="guess.id" class="guess-item">
				<view>
					<image :src="guess.img" mode="widthFix" :class="['product-img']"></image>
				</view>
				<view class="product-info">
					<view class="product-name">{{guess.name}}</view>
					<view>
						<text class="price">{{guess.price}}</text>
						<text class="old_price" v-if="guess.old_price<guess.price">￥{{guess.old_price}}</text>
					</view>
				</view>
			</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		name:'guess-like',
		data() {
			return {
				guessProduct:[
					{id:1,name:'米家驱蚊器 智能版',img:'/static/guess_product.jpg',price:59,old_price:59},
					{id:2,name:'米家驱蚊器 智能版',img:'/static/guess_product.jpg',price:59,old_price:39},
					{id:3,name:'米家驱蚊器 智能版',img:'/static/guess_product.jpg',price:59,old_price:49}
				]
			};
		},
	}
</script>

<style lang='scss' scoped>
	.guess-title-img{
		font-size:0;
		>image{
			width:100%;
			height:auto;
			object-fit:cover;
		}
	}
	.guess-like{
		margin-bottom:100upx;
		.guess-item{
			width:49.5%;
		}
	}
	.product-img{
		width:100%;
		height:auto;
		object-fit: cover;
	}
	.border-radius{
		border-radius:20upx;
	}
	.product-info{
		padding:10upx 30upx 20upx 30upx;
		.product-name{
			font-size:28upx;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}
		.price{
			font-size: 32upx;
			color:#ff6700;
			&::before{
				content:'￥';
				font-size: 28upx;
			}
		}
		.old_price{
			margin-left:10upx;
			font-size:24upx;
			color:rgba(0,0,0,.54);
			text-decoration: line-through;
		}
	}
</style>

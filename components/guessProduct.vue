<template>
	<view>
		<navigator url="/pages/productDetails/productDetails">
			<view>
				<image :src="product.img" mode="widthFix" :class="['product-img',radius?'border-radius':'']"></image>
			</view>
			<view class="product-info">
				<view class="product-name">{{product.name}}</view>
				<view>
					<text class="price">{{product.price}}</text>
					<text class="old_price" v-if="product.old_price<product.price">￥{{product.old_price}}</text>
				</view>
			</view>
		</navigator>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		mounted(){
			console.log()
		},
		computed:{
			product(){
				return this.$props.guess;
			},
			radius(){
				return this.$props.borderRadius;
			}
		},
		props:{
			guess:{
				required:true,
				type:Object
			},
			borderRadius:{
				type:Boolean,
				default:false
			}
		}
	}
</script>

<style lang='scss' scoped>
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

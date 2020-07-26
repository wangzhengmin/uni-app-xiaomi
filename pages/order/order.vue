<template>
	<view class="h5-container">
		<common-head title="商品订单"></common-head>
		<view class="order-status row">
			<view>
				<text class="active-status">全部</text>
			</view>
			<view>
				<text>待付款</text>
			</view>
			<view>
				<text>待收货</text>
			</view>
		</view>
		<view class="empty-order">
			您还没有订单
		</view>
		<guess-like></guess-like>
	</view>
</template>

<script>
	import commonHead from '../../components/commonHead.vue';
	import guessLike from '../../components/guessLike.vue';
	
	export default {
		data() {
			return {
				
			}
		},
		components:{
			commonHead,
			guessLike
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	.order-status{
		position: sticky;
		top:100upx;
		left:0;
		width: 100%;
		height:70upx;
		font-size:26upx;
		line-height: 70upx;
		border-bottom:1px solid #eee;
		background:#fff;
		z-index: 999;
		>view{
			display: block;
			flex:1 1;
			text-align: center;
		}
		.active-status{
			display: inline-block;
			padding:0 10upx;
			height:100%;
			width:auto;
			color:#ff6700;
			border-bottom:1px solid #ff6700;
		}
	}
	.empty-order{
		padding:300upx 40upx  0 40upx;
		font-size:30upx;
		color:#999;
		text-align: center;
		background:url('../../static/empty.png') no-repeat;
		background-size: 200upx 200upx;
		background-position: center;
	}
</style>

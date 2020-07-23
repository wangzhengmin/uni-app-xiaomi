<template>
	<view class="row common-head">
		<view class="icon-left" @click="bac"></view>
		<text>{{this.$props.title}}</text>
		<navigator url="/pages/search/search" class="icon-search"></navigator>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props:{
			title:{
				required:true,
				type:String
			}
		},
		methods:{
			bac(){
				var pages = getCurrentPages();
				console.log(pages);
				uni.navigateBack()
			}
		}
	}
</script>

<style lang='scss' scoped>
.common-head{
	position: fixed;
	top:0;
	left:0;
	width:100%;
	height:100upx;
	font-size:32upx;
	line-height: 100upx;
	background:rgb(242, 242, 242);
	justify-content: center;
	.icon-left{
		position: absolute;
		left:40upx;
		top: 50%;
		width: 24upx;
		height: 24upx;
		border-left: 1px solid currentColor;
		border-top: 1px solid currentColor;
		transform: translate3d(0,-50%,0) rotate(135deg);
		-webkit-transform: translate3d(0,-50%,0) rotate(-45deg);
	}
	.icon-search{
		position: absolute;
		right:20upx;
		align-self: center;
		width:60upx;
		height:60upx;
		background-image:url('../static/search.png');
		background-size: contain;
	}
}
</style>

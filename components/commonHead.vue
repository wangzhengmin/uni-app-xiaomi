<template>
	<view class="row common-head">
		<navigator open-type ="navigateBack" class="icon-left"></navigator>
		<text v-if="!$props.search">{{this.$props.title}}</text>
		<view class="search-box">
			<input type="text" value="" v-model="keyword" v-if="$props.search" class="search" placeholder="搜索商品名称"/>
			<view class="icon-guanbi iconfont" v-show="keyword!=''" @click="keyword=''"></view>
		</view>
		<navigator url="/pages/search/search" class="icon-search" v-if="!$props.search"></navigator>
		<view class="icon-search" v-if="$props.search" @click="$emit('search',keyword)"></view>
	</view>
</template>

<script>
	export default {
		name:'common-head',
		data() {
			return {
				keyword:''
			};
		},
		onShow(){
			this.keyword = '';
		},
		props:{
			title:{
				type:String,
			},
			search:{
				type:Boolean,
				default:false
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
	z-index:999;
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
	.search-box{
		position: relative;
		align-self: center;
	}
	.search{
		width:420upx;
		height:70upx;
		padding:0 60upx 0 40upx;
		line-height: 70upx;
		background:#fff;
	}
	.icon-guanbi{
		position: absolute;
		top:50%;
		right:10upx;
		font-size:24upx;
		color:#aaa;
		transform: translate(0,-50%);
	}
}
</style>

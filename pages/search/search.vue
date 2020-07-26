<template>
	<view class="h5-container searh-page">
		<!-- #ifdef H5 -->
		<common-head title="购物车" search @search="search"></common-head>
		<!-- #endif -->
		<view class="search-content">
			<view class="search-title" v-show="history.length>0">
				搜索历史 
				<view class="iconfont icon-delete" @click="clearHistory" v-show="history.length>0">&#xe78d;</view>
			</view>
			<view class="row-wrap">
				<navigator :url="`/pages/searchResult/searchResult?keyword=${h}`" class="search-item" v-for="(h,i) in history" :key="i">{{h}}</navigator>
			</view>
			<view class="search-title">搜索发现</view>
			<view class="ad">
				<image src="../../static/ad.jpg" mode="widthFix"></image>
			</view>
			<view class="found row-wrap">
				<navigator :url="`/pages/searchResult/searchResult?keyword=${f.content}`" v-for="(f,i) in found" :key="i">{{f.content}}</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	import commonHead from '../../components/commonHead.vue';
	export default {
		data() {
			return {
				history:[],
				found:[
					{content:'Redmi 9 五星高品质',sort:'',url:''},
					{content:'Redmi 9 五星高品质',sort:'',url:''},
					{content:'Redmi 9 五星高品质',sort:'',url:''},
					{content:'Redmi 9 五星高品质',sort:'',url:''},
					{content:'Redmi 9 五星高品质',sort:'',url:''},
				]
			}
		},
		components:{
			commonHead,
		},
		onShow(){
			this.history = uni.getStorageSync('search') || [];
		},
		methods: {
			search(keyword){
				let search = uni.getStorageSync('search') || [];
				search.unshift(keyword);
				search = Array.from(new Set(search));
				uni.setStorage({
				    key: 'search',
				    data: search,
				});
				uni.navigateTo({
					url:`/pages/searchResult/searchResult?keyword=${keyword}`
				});
			},
			clearHistory(){
				const that = this;
				uni.showModal({
				    content: '是否删除全部历史',
				    success: function (res) {
				        if (res.confirm) {
				            that.history = [];
				            uni.removeStorage({
				                key: 'search',
				            });
				        }
				    }
				});
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.search-content{
		padding:0 40upx 40upx;
		.search-title{
			position: relative;
			margin-top:40upx;
			font-size:28upx;
			font-weight: bold;
			margin-bottom:20upx;
		}
		.icon-delete{
			position: absolute;
			right:0;
			top:50%;
			transform: translate(0,-50%);
		}
		.search-item{
			height:60upx;
			max-width: 600upx;
			padding:0 20upx;
			margin-top:20upx;
			margin-right:20upx;
			border-radius:30upx;
			font-size:24upx;
			line-height: 60upx;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
			background: rgba(0,0,0,.04);
		}
		.ad{
			border-radius:20upx;
			font-size: 0;
			overflow: hidden;
			margin-bottom:20upx;
			>image{
				width:100%;
				height:auto;
				object-fit: cover;
			}
		}
		.found{
			>navigator{
				font-size:24upx;
				width:50%;
				margin-bottom:36upx;
			}
		}
	}

</style>

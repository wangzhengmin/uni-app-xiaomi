<template>
	<view class="sort row">
		<view class="sort-left">
			<scroll-view  :scroll-top="menuTop"scroll-y="true" show-scrollbar="true" class="scroll-box" >
					<view v-for="m in navigationList" :key="m.id" :class="{'sort-item':true,'active-item':activeID==m.id}" :id="`menu-${m.id}`" @click="navigationClick(m.id)">{{m.content}}</view>
			</scroll-view>
		</view>
		<view class="sort-right">
			<view class="sort-product" v-for="product in productList" :key="product.id" :id="`main-${product.id}`">
				<view>
					<image src="/static/item_ad.webp" mode="widthFix" class="sort-item-ad"></image>
				</view>
				<view class="sort-item-title row">{{product.title}}</view>
				<view class="row-wrap">
					<view class="sort-product-item" v-for="(item,index) in product.list" :key="index">
						<view>
							<image :src="item.image" mode="widthFix" class="sort-product-item-img" lazy-load></image>
						</view>
						<view class="sort-product-item-title">{{item.title}}</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				activeID:8,
				sizeCalcState:false,
				scrollTop: 0,
				menuTop:0,
				menuHeight:0,
				navigationList: [
					{content: '菜单1', id: 0},
					{content: '菜单2', id: 1},
					{content: '菜单3', id: 2},
					{content: '菜单4', id: 3},
					{content: '菜单5', id: 4},
					{content: '菜单6', id: 5},
					{content: '菜单7', id: 6},
					{content: '菜单8', id: 7},
					{content: '菜单9', id: 8},
					{content: '菜单10', id: 9},
					{content: '菜单11', id: 10},
					{content: '菜单12', id: 11},
					{content: '菜单13', id: 12},
					{content: '菜单14', id: 13},
					{content: '菜单15', id: 14},
					{content: '菜单16', id: 15},
				],
				productList: [
					{
						id: 0,
						title: '菜单1',
						list: [
							{image: '/static/sort_product.png', title: '全面屏手机'},
							{image: '/static/sort_product.png', title: '游戏手机'},
							{image: '/static/sort_product.png', title: '老人机'},
							{image: '/static/sort_product.png', title: '拍照手机'},
							{image: '/static/sort_product.png', title: '女性手机'}
						]
					},
					{
						id: 1,
						title: '菜单2',
						list: [
							{image: '/static/sort_product.png', title: '全面屏手机'},
							{image: '/static/sort_product.png', title: '游戏手机'},
							{image: '/static/sort_product.png', title: '老人机'},
							{image: '/static/sort_product.png', title: '拍照手机'},
							{image: '/static/sort_product.png', title: '女性手机'}
						]
					},
					{
						id: 2,
						title: '菜单3',
						list: [
							{image: '/static/sort_product.png', title: '全面屏手机'},
							{image: '/static/sort_product.png', title: '游戏手机'},
							{image: '/static/sort_product.png', title: '老人机'},
							{image: '/static/sort_product.png', title: '拍照手机'},
							{image: '/static/sort_product.png', title: '女性手机'}
						]
					},
					{
						id: 3,
						title: '菜单4',
						list: [
							{image: '/static/sort_product.png', title: '全面屏手机'},
							{image: '/static/sort_product.png', title: '游戏手机'},
							{image: '/static/sort_product.png', title: '老人机'},
							{image: '/static/sort_product.png', title: '拍照手机'},
							{image: '/static/sort_product.png', title: '女性手机'}
						]
					},
					{
						id: 4,
						title: '菜单5',
						list: [
							{image: '/static/sort_product.png', title: '全面屏手机'},
							{image: '/static/sort_product.png', title: '游戏手机'},
							{image: '/static/sort_product.png', title: '老人机'},
							{image: '/static/sort_product.png', title: '拍照手机'},
							{image: '/static/sort_product.png', title: '女性手机'}
						]
					},
					{
						id: 5,
						title: '菜单6',
						list: [
							{image: '/static/sort_product.png', title: '全面屏手机'},
							{image: '/static/sort_product.png', title: '游戏手机'},
							{image: '/static/sort_product.png', title: '老人机'},
							{image: '/static/sort_product.png', title: '拍照手机'},
							{image: '/static/sort_product.png', title: '女性手机'}
						]
					},
					{
						id: 6,
						title: '菜单7',
						list: [
							{image: '/static/sort_product.png', title: '全面屏手机'},
							{image: '/static/sort_product.png', title: '游戏手机'},
							{image: '/static/sort_product.png', title: '老人机'},
							{image: '/static/sort_product.png', title: '拍照手机'},
							{image: '/static/sort_product.png', title: '女性手机'}
						]
					},
					{
						id: 7,
						title: '菜单8',
						list: [
							{image: '/static/sort_product.png', title: '全面屏手机'},
							{image: '/static/sort_product.png', title: '游戏手机'},
							{image: '/static/sort_product.png', title: '老人机'},
							{image: '/static/sort_product.png', title: '拍照手机'},
							{image: '/static/sort_product.png', title: '女性手机'}
						]
					},
					{
						id: 8,
						title: '菜单9',
						list: [
							{image: '/static/sort_product.png', title: '全面屏手机'},
							{image: '/static/sort_product.png', title: '游戏手机'},
							{image: '/static/sort_product.png', title: '老人机'},
							{image: '/static/sort_product.png', title: '拍照手机'},
							{image: '/static/sort_product.png', title: '女性手机'}
						]
					},
					{
						id: 9,
						title: '菜单10',
						list: [
							{image: '/static/sort_product.png', title: '全面屏手机'},
							{image: '/static/sort_product.png', title: '游戏手机'},
							{image: '/static/sort_product.png', title: '老人机'},
							{image: '/static/sort_product.png', title: '拍照手机'},
							{image: '/static/sort_product.png', title: '女性手机'}
						]
					},
					{
						id: 10,
						title: '菜单11',
						list: [
							{image: '/static/sort_product.png', title: '全面屏手机'},
							{image: '/static/sort_product.png', title: '游戏手机'},
							{image: '/static/sort_product.png', title: '老人机'},
							{image: '/static/sort_product.png', title: '拍照手机'},
							{image: '/static/sort_product.png', title: '女性手机'}
						]
					},
					{
						id: 11,
						title: '菜单12',
						list: [
							{image: '/static/sort_product.png', title: '全面屏手机'},
							{image: '/static/sort_product.png', title: '游戏手机'},
							{image: '/static/sort_product.png', title: '老人机'},
							{image: '/static/sort_product.png', title: '拍照手机'},
							{image: '/static/sort_product.png', title: '女性手机'}
						]
					},
					{
						id: 12,
						title: '菜单13',
						list: [
							{image: '/static/sort_product.png', title: '全面屏手机'},
							{image: '/static/sort_product.png', title: '游戏手机'},
							{image: '/static/sort_product.png', title: '老人机'},
							{image: '/static/sort_product.png', title: '拍照手机'},
							{image: '/static/sort_product.png', title: '女性手机'}
						]
					},
					{
						id: 13,
						title: '菜单14',
						list: [
							{image: '/static/sort_product.png', title: '全面屏手机'},
							{image: '/static/sort_product.png', title: '游戏手机'},
							{image: '/static/sort_product.png', title: '老人机'},
							{image: '/static/sort_product.png', title: '拍照手机'},
							{image: '/static/sort_product.png', title: '女性手机'}
						]
					},
					{
						id: 14,
						title: '菜单15',
						list: [
							{image: '/static/sort_product.png', title: '全面屏手机'},
							{image: '/static/sort_product.png', title: '游戏手机'},
							{image: '/static/sort_product.png', title: '老人机'},
							{image: '/static/sort_product.png', title: '拍照手机'},
							{image: '/static/sort_product.png', title: '女性手机'}
						]
					},
					{
						id: 15,
						title: '菜单16',
						list: [
							{image: '/static/sort_product.png', title: '全面屏手机'},
							{image: '/static/sort_product.png', title: '游戏手机'},
							{image: '/static/sort_product.png', title: '老人机'},
							{image: '/static/sort_product.png', title: '拍照手机'},
							{image: '/static/sort_product.png', title: '女性手机'}
						]
					},
				]
			}
		},
		methods: {
			navigationClick(id){
				this.activeID = id;
				if(!this.sizeCalcState){
					this.calcSize(); // 获取元素信息
				}
				let ind= this.productList.findIndex(sitem=>sitem.id === id);
				this.scrollTop = this.productList[ind].top;
				uni.pageScrollTo({
				    scrollTop: this.productList[ind].top+5,
				    duration: 0
				});
			},
			onPageScroll(e){
				if(!this.sizeCalcState){
					this.calcSize(); // 获取子元素距离父元素顶部的距离
				}
				let scrollTop = e.scrollTop;
				let tabs = this.productList.filter(item=>item.top <= scrollTop).reverse();
				if(tabs.length > 0){
					this.activeID = tabs[0].id; // 左边菜单栏
				// 	let info = uni.createSelectorQuery().select(`#menu-15`);
				// 	　　info.boundingClientRect((data) =>{ //data - 各种参数
				// 	console.log(data.top+this.menuTop - this.menuHeight);
				// 	　　　  if(data.top>this.menuHeight - this.menuTop)
				// 				this.menuTop =this.menuHeight-  data.top;
				// 			else
				// 				this.menuTop = 0;
				// 　　 }).exec()
				}
			},
			calcSize(){	// 计算右侧栏每个tab的高度距离父元素顶部的距离
				let h = 0;
				this.productList.forEach(item=>{
					// 获取节点信息的高度
					let view = uni.createSelectorQuery().select("#main-" + item.id);
					view.fields({
						size: true, // 是否返回节点尺寸
					}, data => { // data是方法的回调函数，参数是指定的相关节点信息。
						item.top = h;
						h += data.height;
						item.bottom = h;
					}).exec();
				}); 
				this.navigationList.forEach(item=>{
					// 获取节点信息的高度
					let list = uni.createSelectorQuery().select("#menu-" + item.id);
					list.fields({
						rect: true, // 是否返回节点尺寸
					}, data => { // data是方法的回调函数，参数是指定的相关节点信息。
						item.top = data.top;
						item.bottom = data.bottom;
					}).exec();
				});
				let info = uni.createSelectorQuery().select(".scroll-box");
			　　info.boundingClientRect((data) =>{ //data - 各种参数
			　　　  　this.menuHeight = data.height;
		　　    }).exec()
				this.sizeCalcState = true;
			},
		}
	}
</script>

<style scoped lang="scss">
.icon-left{
	position: relative;
	font-size:36upx;
	transform: rotate(10deg);
}
.sort{
	.sort-left{
		position: fixed;
		left:0;
		top:0;
		flex:0 0 160upx;
		width:160upx;
		line-height: 100upx;
		font-size:32upx;
		text-align:center;
		.scroll-box{
			/* #ifdef H5 */
				height: calc(100vh - 100rpx - env(safe-area-inset-bottom) - var(--status-bar-height));
				/* #endif */
				/* #ifdef  MP */
				height: 100vh;
				/* #endif */
		}
		.sort-item{
			transform: scale(0.8);
			transition: all .5s;
		}
		.active-item{
			color:#fb7d34;
			transform: scale(1);
		}
	}
	.sort-right{
		margin-left:160upx;
		flex:0 0 590upx;
		box-sizing: border-box;
		padding-right:20upx;
		.sort-product{
			.sort-item-ad{
				width:100%;
				height:auto;
				object-fit: cover;
			}
			.sort-item-title{
				height:120upx;
				font-size:32upx;
				line-height: 120upx;
				justify-content: center;
				&::after{
					content:"";
					display: inline-block;
					height:2upx;
					width:60upx;
					margin-left:20upx;
					background:#e0e0e0;
					align-self: center;
				}
				&::before{
					content:"";
					display: inline-block;
					height:2upx;
					width:60upx;
					margin-right:20upx;
					background:#e0e0e0;
					align-self: center;
				}
			}
			.sort-product-item{
				width:33.3%;
				margin:20upx 0;
				.sort-product-item-img{
					width:100%;
					height:auto;
					object-fit: cover;
				}
				.sort-product-item-title{
					font-size:24upx;
					text-align: center;
					color: rgba(0,0,0,.54);
				}
			}
		}
	}
}
</style>

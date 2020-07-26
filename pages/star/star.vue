<template>
	<view class="star">
		<view class="star-header row justify-space-between">
			<view class="nav-left">
				<text class="nav-active">推荐</text>
				<text>上新了小米</text>
				<text>小米智能生活</text>
			</view>
			<view class="nav-right row">
				<navigator url="" class="icon-bell">
					<image src="../../static/bell.png" mode="widthFix" class="img-cover"></image>
				</navigator>
				<navigator url="" class="icon-user">
					<image src="../../static/icon_user.png" mode="widthFix" class="img-cover"></image>
				</navigator>
			</view>
		</view>
		<view class="content">
			<!-- 兴趣圈 -->
			<view class="tastes">
				<view class="row justify-space-between taste-info">
					<text>兴趣圈</text>
					<navigator url="">
						<text>1.6万人已加入</text>
					</navigator>
				</view>
				<scroll-view scroll-x="true" class="taste-list" show-scrollbar="false">
					<view class="row">
						<navigator class="taste-item col" v-for="t in tastes" :key="t.tid">
							<view class="taste-img">
								<image :src="t.img" mode="widthFix" class="img-cover"></image>
							</view>
							<view class="taste-name">{{t.name}}</view>
							<view class="taste-des">{{t.des}}</view>
						</navigator>
					</view>
				</scroll-view>
			</view>
			<view class="img-menu row justify-space-between">
				<navigator url="">
					<image src="/static/star_menu1.png" mode="widthFix"></image>
				</navigator>
				<navigator url="">
					<image src="/static/star_menu2.png" mode="widthFix"></image>
				</navigator>
				<navigator url="">
					<image src="/static/star_menu3.png" mode="widthFix"></image>
				</navigator>
				<navigator url="">
					<image src="/static/star_menu4.png" mode="widthFix"></image>
				</navigator>
			</view>
			<view class="recommend-list row justify-space-between">
				<view class="recommend-box">
					<star-item v-for="l in leftData" :recommend = "l" :key="l.id"></star-item>
				</view>
				<view class="recommend-box">
					<star-item v-for="r in rightData" :recommend = "r" :key="r.id"></star-item>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import starItem from '../../components/starItem.vue';
	
	export default {
		data() {
			return {
				list:[
					{
						id:1,title:'Redmi 9,一款不像入门机的入门机1',img:"/static/star_item.jpg",user_icon:"/static/user_icon.jpg",name:"附件是饭卡",hits:2000,tag:'闪光计划·内容和你一起发光'
					},
					{
						id:2,title:'Redmi 9,一款不像入门机的入门机2',img:"/static/star_item.jpg",user_icon:"/static/user_icon.jpg",name:"附件是饭卡",hits:2000,tag:''
					},
					{
						id:3,title:'Redmi 9,一款不像入门机的入门机3',img:"/static/star_item.jpg",user_icon:"/static/user_icon.jpg",name:"附件是饭卡",hits:2000,tag:'玩转众筹好物，使用体验看这里'
					},
					{
						id:4,title:'Redmi 9,一款不像入门机的入门机4',img:"/static/star_item.jpg",user_icon:"/static/user_icon.jpg",name:"附件是饭卡",hits:2000,tag:''
					},
					{
						id:5,title:'Redmi 9,一款不像入门机的入门机',img:"/static/star_item.jpg",user_icon:"/static/user_icon.jpg",name:"附件是饭卡",hits:2000,tag:'闪光计划·内容和你一起发光'
					},
					{
						id:6,title:'Redmi 9,一款不像入门机的入门机',img:"/static/star_item.jpg",user_icon:"/static/user_icon.jpg",name:"附件是饭卡",hits:2000,tag:'闪光计划·内容和你一起发光'
					},
					{
						id:7,title:'Redmi 9,一款不像入门机的入门机',img:"/static/star_item.jpg",user_icon:"/static/user_icon.jpg",name:"附件是饭卡",hits:2000,tag:'闪光计划·内容和你一起发光'
					}
				],
				tastes:[
					{tid:1,img:'../../static/taste.jpg',name:'交换果汁食谱',des:'一起消暑一夏'},
					{tid:2,img:'../../static/taste.jpg',name:'交换果汁食谱',des:'一起消暑一夏'},
					{tid:3,img:'../../static/taste.jpg',name:'交换果汁食谱',des:'一起消暑一夏'},
					{tid:4,img:'../../static/taste.jpg',name:'交换果汁食谱',des:'一起消暑一夏'},
					{tid:5,img:'../../static/taste.jpg',name:'交换果汁食谱',des:'一起消暑一夏'}
				]
			}
		},
		computed:{
			leftData(){
				return this.list.filter((value,index)=>index%2<=0)
			},
			rightData(){
				return this.list.filter((value,index)=>index%2>0)
			}
		},
		components:{
			starItem
		},
		methods: {
			
		}
	}
</script>

<style lang='scss' scoped>
	.star{
		.star-header{
			position: sticky;
			left:0;
			top:0;
			box-sizing: border-box;
			width:100%;
			padding:0 20upx;
			height:90upx;
			background:#fff;
			z-index:999;
			.nav-left{
				>text{
					font-size:32upx;
					line-height: 90upx;
					font-weight:bold;
					color:#3c3c3c;
					margin-left: 40upx;
					&:nth-of-type(1){
						margin-left:20upx;
					}
				}
				.nav-active{
					color:#ff6700;
				}
			}
			.nav-right{
				align-items: center;
				.icon-bell{
					width:80upx;
					height:80upx;
					object-fit: cover;
				}
				.icon-user{
					width:54upx;
					height:54upx;
					object-fit: cover;
				}
			}
		}
		.tastes{
			background:#fff;
			.taste-info{
				padding:0 20upx;
				font-size:28upx;
				font-weight: bold;
				height:100upx;
				line-height: 100upx;
			}
			.taste-list{
				width:100%;
				padding-bottom:20upx;
				padding-bottom:40upx;
				border-radius:0 0 10upx 10upx;
				.taste-item{
					flex:0 0 200upx;
					width:200upx;
					padding-top:20upx;
					align-items: center;
					.taste-img{
						width:96upx;
						height:96upx;
					}
					.taste-name{
						margin:10upx 0 4upx 0;
						font-size:28upx;
						font-weight: bold;
						color:#000;
					}
					.taste-des{
						font-size:20upx;
						color: rgba(0,0,0,.5);
					}
				}
			}
		}
		.content{
			padding: 0 20upx 20upx;
			background:#f5f5f5;
			.img-menu{
				height:200upx;
				align-items: center;
				>navigator{
					flex:0 0 160upx;
					>image{
						width:100%;
						height:auto;
						object-fit: cover;
					}
				}
			}
			.recommend-list{
				.recommend-box{
					flex:0 0 328upx;
				}
			}
			.recommend-item{
				border-radius:10upx;
				overflow: hidden;
				background:#fff;
				.recommend-img{
					width:328upx;
					height:328upx;
					>image{
						width:100%;
						height:100%;
						object-fit: cover;
					}
				}
			}
			.recommend-info{
				padding:20upx;
				.tag-name{
					font-size:20upx;
					color: rgba(0,0,0,.5);
					>text{
						margin-right:8upx;
					}
				}
				.title{
					font-size: 28upx;
					color:#333;
					margin:20upx 0;
				}
				.user-info{
					>image{
						width:48upx;
						height:48upx;
						border-radius:50%;
						object-fit: cover;
					}
					.user-name{
						margin-left:8upx;
						font-size:20upx;
						line-height:48upx;
						color: rgba(0,0,0,.5);
					}
				}
				.hits{
					line-height:48upx;
					font-size:20upx;
					color: rgba(0,0,0,.5);
					align-items: center;
					.iconfont{
						font-size:36upx;
						color:#999;
						margin-right:6upx;
					}
				}
			}
		}
	}
	::-webkit-scrollbar {  
	    display: none;  
	    width: 0 !important;  
	    height: 0 !important;  
	    -webkit-appearance: none;  
	    background: transparent;  
	}
</style>

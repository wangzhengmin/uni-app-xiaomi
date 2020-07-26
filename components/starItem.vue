<template>
	<view>
		<navigator url="" class="recommend-item">
			<view class="recommend-img">
				<image :src="recommend.img" mode="widthFix"></image>
			</view>
			<view class="recommend-info">
				<view class="tag-name" v-if="recommend.tag">
					<text>#</text>
					{{recommend.tag}}
				</view>
				<view class="title">{{recommend.title}}</view>
				<view class="row justify-space-between">
					<view class="row user-info">
						<image :src="recommend.user_icon" mode="widthFix"></image>
						<text class="user-name">{{recommend.name}}</text>
					</view>
					<view class="hits row">
						<text class="iconfont">&#xe61c;</text>{{recommend.hits}}
					</view>
				</view>
			</view>
		</navigator>
	</view>
</template>

<script>
	export default {
		name:'star-item',
		data() {
			return {
				
			}
		},
		props:{
			recommend:{
				required:true,
				// type:Object
			}
		},
		methods: {
			
		}
	}
</script>

<style lang='scss' scoped>
	.recommend-item{
		border-radius:10upx;
		overflow: hidden;
		background:#fff;
		margin-top:20upx;
		.recommend-img{
			width:348upx;
			height:348upx;
			>image{
				width:100%;
				height:100%;
				object-fit: cover;
			}
		}
		.recommend-info{
			padding:0 20upx 20upx;
			.tag-name{
				margin-top:20upx;
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
</style>

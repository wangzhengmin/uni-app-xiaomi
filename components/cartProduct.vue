<template>
    <view class="product">
		<view class="row align-items-center out-server">
			<icon class="icon-small" :type="product.chioced? 'success' : 'circle'" size="20" :color="product.chioced?'red':''" @click="chioceProduct({index_one:$props.index})"></icon>
			<view class="product-img">
				<image :src="product.img" alt="" mode="widthFix" class="img-cover"/>
			</view>
			<view>
				<view class="product-chioced">{{product.name}} {{product.spec}}</view>
				<view class="product-price">售价:{{product.price}}元</view>
				<view class="row justify-space-between">
					<view class="row btn-num">
						<view class="minus" @tap="minusNumber({index_one:$props.index})">-</view>
						<text>{{product.num}}</text>
						<view class="add" @tap="addNumber({index_one:$props.index})">+</view>
					</view>
					<view class="iconfont btn-delete" @click="deleteProduct({index_one:$props.index})">&#xe78d;</view>
				</view>
			</view>
		</view>
		<!-- 选购服务 -->
		<view class="server-chioce" v-if="product.chioced">
			<view class="server-item row" v-for="(o,index) in product.list" :key="o.pid" v-if="!o.chioced">
				<view class="server-img">
					<image :src="o.img" mode="widthFix" class="img-cover"></image>
				</view>
				<text>{{o.name}} {{o.price}}元</text>
				<view class="btn-add" @click="chioceServer({index_one:$props.index,index_two:index})">加价购</view>
			</view>
		</view>
		<!-- 已选购的服务 -->
		<view class="row align-items-center out-server serverd" v-for="(server,index) in product.list" :key="server.pid" v-if="server.chioced">
			<view class="icon-small"></view>
			<view class="product-img">
				<image :src="server.img" alt="" mode="widthFix" class="img-cover"/>
			</view>
			<view>
				<view class="product-chioced">{{server.name}} {{server.spec}}</view>
				<view class="product-price">售价:{{server.price}}元</view>
				<view class="row justify-space-between">
					<view class="row btn-num">
						<view class="minus" @tap="minusNumber({index_one:$props.index})">-</view>
						<text>{{server.num}}</text>
						<view class="add" @tap="addNumber({index_one:$props.index})">+</view>
					</view>
					<view class="iconfont btn-delete" @click="deleteServer({index_one:$props.index,index_two:index})">&#xe78d;</view>
				</view>
			</view>
		</view>
   </view>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'cart-product',
   data() {
      return {
      }
   },
   computed: {
      chiocedAll() {
         return this.$props.business.list.every(v => {
            return v.chioced;
         })
      }
   },
   props: {
		product: {
			type: Object,
			required: true
		},
		index: {
			type: Number,
			required: true
		}
   },
   methods:{
      ...mapMutations('cart',{
         addNumber: 'ADD_NUMBER',
         minusNumber: 'MINUS_NUMBER',
         chioceProduct: 'CHIOCE_PRODUCT',
		 deleteProduct: 'DELETE_PRODUCT',
		 chioceServer: 'CHIOCE_SERVER',
		 deleteServer: 'DELETE_SERVER'
      })
   }
}
</script>

<style lang="scss">
	.product{
		border-bottom:20upx solid #eee;
		padding:20upx 0;
	}
	.out-server{
		padding:0 20upx;
	}
	.serverd{
		padding-top:20upx;
		border-top:20upx solid #eee;
	}
	.icon-small{
		width:40upx;
		margin-right:4upx;
		align-self: center;
	}
	.product-img{
		width:180upx;
		height:180upx;
		margin-right:10upx;
	}
	.product-chioced{
		width:440upx;
		color:#666;
		font-size: 28upx;
		line-height: 32upx;
	}
	.product-price{
		font-size:24upx;
		color:#999;
		margin-bottom:8upx;
		margin-top:6upx;
	}
	.btn-num{
	    border:1px solid #bbb;
	    border-radius:10upx;
	    >view{
			height:50upx;
			line-height: 50upx;
			width:50upx;
			padding:0;
			text-align: center;
			border:none;
	    }
	    >text{
			display: inline-block;
			width:60upx;
			line-height: 50upx;
			text-align: center;
	    }
		.minus{
			border-right:1px solid #bbb;
		}
		.add{
			border-left:1px solid #bbb;
		}
	}
	.btn-delete{
		font-size:48upx;
		color:#aaa;
	}
	.server-chioce{
		padding:0 20upx;
		margin-bottom:20upx;
		.server-item{
			padding:20upx;
			margin-top:20upx;
			font-size:24upx;
			line-height: 52upx;
			background:#f6f6f6;
			.server-img{
				flex:0 0 52upx;
				height:52upx;
				width:52upx;
				margin-right:10upx;
			}
			>text{
				width:500upx;
				margin-right:20upx
			}
			.btn-add{
				color: #ff5722;
			}
		}
	}
</style>

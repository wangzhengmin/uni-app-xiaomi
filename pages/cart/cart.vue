<template>
	<view class="h5-container">
		<!-- #ifdef H5 -->
		<common-head title="购物车"></common-head>
		<!-- #endif -->
		<navigator url="/pages/login/login" class="row justify-space-between login-remind" v-if="isLogin">
			<text>登录后享受更多优惠</text>
			<text class="go-login">去登录</text>
		</navigator>
		<view class="buy-remind" v-if="cart.length==0">
			<navigator url="/pages/index/index">
				<text>购物车还是空的</text>
				<text>去逛逛</text>
			</navigator>
		</view>
		<!-- 购物车商品 -->
		<view class="cart-login" v-if="!isLogin">
		    <view class="cart-body container">
		      <cart-product v-for="(c,index) in cart" :key="c.bid" :product="c" :index="index"/>
		    </view>
		    <view class="row cart-footer">
		      <view class="btn-all row" @tap="chioceAll({bol:!chioce_all})">
		        <icon class="icon-small" :type="chioce_all? 'success' : 'circle'" size="20" color="red"></icon>
				<text>全选</text>
		      </view>
		      <view class="row">
		        <view v-show="!edit" class="total">
		          总计<text>{{total.toFixed(2)}}</text>
		        </view>
		        <button class="btn-operate" size="mini" @tap="operate">{{edit?'删除':'结算'}}</button>
		      </view>
		    </view>
		  </view>
		<!-- 猜你喜欢 -->
		<guess-like></guess-like>
	</view>
</template>

<script>
	import commonHead from '../../components/commonHead.vue';
	import guessLike from '../../components/guessLike.vue';
	import cartProduct from '../../components/cartProduct.vue';
	import { mapState, mapGetters, mapMutations } from 'vuex'
	
	export default {
		data() {
			return {
				isLogin:false,
				guessProduct:[
					{id:1,name:'米家驱蚊器 智能版',img:'../static/guess_product.jpg',price:59,old_price:59},
					{id:2,name:'米家驱蚊器 智能版',img:'../static/guess_product.jpg',price:59,old_price:39},
					{id:3,name:'米家驱蚊器 智能版',img:'../static/guess_product.jpg',price:59,old_price:49}
				],
				edit:false
			}
		},
		components:{
			commonHead,
			guessLike,
			cartProduct
		},
		computed:{
			...mapGetters('cart',[
			  'chioce_all',
			  'total',
			  'chioced_product'
			]),
			...mapState({
				cart:state => state.cart
			}),
		 },
		methods: {
			...mapMutations('cart',{
			    chioceAll: 'CHIOCE_ALL',
			    dropChioced: 'DROP_CHIOCED'
			}),
			pay(){
				uni.requestPayment({
				    provider: 'alipay',
				    orderInfo: 'orderInfo', //微信、支付宝订单数据
				    success: function (res) {
				        console.log('success:' + JSON.stringify(res));
				    },
				    fail: function (err) {
				        console.log('fail:' + JSON.stringify(err));
				    }
				});
			},
			change(){
			    this.edit=!this.edit
			},
		}
	}
</script>

<style lang='scss' scoped>
	.login-remind{
		height:108upx;
		padding:0 60upx 0 40upx;
		font-size:32upx;
		color:rgba(0,0,0,.87);
		line-height: 108upx;
		.go-login{
			position: relative;
			font-size:28upx;
			color:rgba(0,0,0,.54);
			&::after{
				content: "";
				position: absolute;
				top: 50%;
				width: 16upx;
				height: 16upx;
				border-left: 1px solid currentColor;
				border-top: 1px solid currentColor;
				transform: translate3d(0,-50%,0) rotate(135deg);
				-webkit-transform: translate3d(0,-50%,0) rotate(135deg);
			}
		}
	}
	.buy-remind{
		height:80upx;
		padding:20upx;
		font-size:28upx;
		line-height: 80upx;
		color: rgba(0,0,0,.27);
		text-align: center;
		background:#ebebeb;
		text:nth-of-type(1){
			display: inline-block;
			padding-left:100upx;
			background: url(../../static/cartnull.png) no-repeat;
			background-size: contain;
		}
		text:nth-of-type(2){
			margin-left:20upx;
			padding:4upx 10upx;
			color:rgba(0,0,0,.87);
			border: 1px solid rgba(0,0,0,.15);
		}
	}
	.guess-title-img{
		width:100%;
		height:auto;
		object-fit:cover;
	}
	.guess-like{
		margin-bottom:100upx;
		.guess-item{
			width:49.5%;
		}
	}
	.cart-login{
		.cart-footer{
			position: fixed;
			bottom:0;
			/* #ifdef H5 */
			bottom: 100upx;
			/* #endif */
			left:0;
			box-sizing: border-box;
			width:100%;
			height:100upx;
			padding:0 20upx;
			line-height: 100upx;
			justify-content: space-between;
			background:#fff;
			border-top:1px solid rgba(238, 238, 238, 0.856);
			z-index:999;
		    .btn-all{
				align-items: center;
				.icon-small{
				  margin:auto;
				  margin-right:10upx;
				  align-self: center;
				}
		    }
		  .total{
		    margin-right:20upx;
		    color:#999;
		    >text{
		        font-size:36upx;
		        color:#d81e06;
		        &::before{
					content:'￥';
					margin:0 5upx;
		        }
		    }
		 }
		.btn-operate{
		    display: block;
		    height:70upx;
		    line-height: 70upx;
		    color:#fff;
		    background:#d81e06;
		    align-self: center;
		}
	}
	}
</style>

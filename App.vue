<script>
	import './static/fonts/iconfont.css';
	
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	/* #ifdef H5 */
		::-webkit-scrollbar {
		    display: none;  
		    width: 0 !important;  
		    height: 0 !important;  
		    -webkit-appearance: none;  
		    background: transparent;  
		}
	/* #endif */
</style>

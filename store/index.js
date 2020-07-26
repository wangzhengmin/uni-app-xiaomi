import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex);

import cart from './modules/cart.js';
import product from './modules/product.js';

export default new Vuex.Store({
	modules:{
		cart,
		product
	}	
})
import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex);

import cart from './modules/cart.js';
import product from './modules/product.js';

const store = {
	state:{
		demo:''
	},
	getters:{
		
	},
	mutations:{
		
	},
	actions:{
		
	},
	modules:{
		cart,
		product
	}
}

export default store;
const cart =[
    {
      bid:1,business:'法国banrock红酒庄',spec:'巴诺斯时光之约气泡酒 试饮装50ml',num:1,img:'/static/guess_product.jpg',price:25.00,chioced:false,list:[
        {
          pid:1,
          name:'加价购服务1',
          spec:'加价购服务规格1',
          num:1,
          img:'/static/guess_product.jpg',
          price:25.00,
          chioced:false
        },
        {
          pid:2,
          name:'加价购服务2',
          spec:'加价购服务规格2',
          num:1,
          img:'/static/guess_product.jpg',
          price:88.00,
          chioced:false
        }
      ]
    },
	{
	  bid:2,business:'法国banrock红酒庄',spec:'巴诺斯时光之约气泡酒 试饮装50ml',num:1,img:'/static/guess_product.jpg',price:25.00,chioced:false,
	},
  ];

const mutations = {
	 ADD_NUMBER(state, payload) {  //增加选购数量
		state[payload.index_one].num += 1;
	 },
	 MINUS_NUMBER(state, payload) {  //减少选购数量
		if(state[payload.index_one].num > 1)
		  state[payload.index_one].num -= 1;
	 },
	 CHIOCE_PRODUCT(state, payload) { // 改变商品的选中与否
		state[payload.index_one].chioced = !state[payload.index_one].chioced;
		if(!state[payload.index_one].chioced){
			state[payload.index_one].list.map(v => v.chioced=false)
		}
	 },
	 CHIOCE_ALL(state, payload) {  // 改变全部商品的选中与否
		let arr = state.map(v => {
		  v.chioced = payload.bol;
		  return v;
		})
		state = arr;
	 },	
	DELETE_PRODUCT(state, payload) {	//删除商品
		state.shift(1,payload.index_one);
	},
	CHIOCE_SERVER(state, payload) {	//加价购
		state[payload.index_one].list[payload.index_two].chioced = true
	},
	DELETE_SERVER(state, payload) {	//删除服务
		state[payload.index_one].list[payload.index_two].chioced = false
	},
}

const actions = {
  addNumber(context, number) {
    context.commit('ADD_NUMBER', number)
  }
}

const getters = {
  total(state) {  // 总计
    let sum = 0;
    state.forEach(v => {
		if(v.chioced){
			sum = (sum*100 + v.price * 100 * v.num)/100;
			if(v.list){
				v.list.forEach(v2 => {
				  if(v2.chioced)
					sum = (sum*100 + v2.price * 100 * v2.num)/100;      
				})
			}
		} 
    })
    return sum;
  },
  chioce_all(state) { // 是否选中全部商品
    let bol = state.every(v => {
		return v.chioced;
	})
    return bol;
  },
  chioced_product(state) {  // 选中商品
    let chioced = []
    state.forEach(v => {
      let list = v.list.filter(v2 => {
        return v2.chioced;
      })
      chioced = [...chioced, ...list];
    });
    return chioced;
  }
}



export default{
	namespaced:true,
	state:cart,
	getters,
	mutations,
	actions
}
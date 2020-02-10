import fruitsStocks from '../../Data/fruitsStocks'
import vegetablesStocks from '../../Data/vegetablesStocks'

const state = {
  fruits: [], 
  vegetables: [], 
  amount: 0
}
const mutations = {
  'SET_FRUITS' (state, fruits) {
    state.fruits = fruits;
  }, 
  'SET_VEGETABLES' (state, vegetables) {
    state.vegetables = vegetables;
  }, 
  'BUY_FRUITS' (state, {stockId, quantity, price}) {
    const record = state.stocks.find(element => element.id == stockId);
    if(record) {
      record.quantity += quantity; 
    }else {
      state.stocks.push({
        id: stockId,
        quantity: quantity
      });
    }
    state.amount += price * quantity;
  }
}

const actions = { 
  initFruitStocks: ({commit}) => {
    commit('SET_FRUITS', fruitsStocks);
  }, 
  initVegetableStocks: ({commit}) => {
    commit('SET_VEGETABLES', vegetablesStocks)
  }, 
  buyFruits: ({commit}, order) => {
    commit('BUY_FRUITS', order)
  } 
}
const getters = {
  getFruits: state => {
    return state.fruits;
  },
  getVegetables: state => {
    return state.vegetables;
  }, 
  getAmount(state) {
    return state.amount;
  }, 
  stockCart: (state, getters) => {
    return state.fruits.map(fruit => {
      const save = getters.fruits.find(element => element.id === fruit.id)
      return {
        id: fruit.id,
        quantity: fruit.quantity,
        price: save.price,
        type: save.type
      }
    });
  }
}

export default {
  state, 
  mutations, 
  actions, 
  getters
}

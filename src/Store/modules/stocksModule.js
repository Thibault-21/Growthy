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
  'BUY_FRUITS' (state, {fruitId, quantity, price}) {
    const record = state.fruits.find(element => element.id == fruitId);
    if(record) {
      record.quantity += quantity; 
    }else {
      state.fruits.push({
        id: fruitId,
        quantity: quantity
      });
    }
    state.amount += price * quantity;
  }, 
  'BUY_VEGETABLES' (state, {vegetableId, quantity, price}) {
    const record = state.vegetables.find(element => element.id == vegetableId);
    if(record) {
      record.quantity += quantity; 
    }else {
      state.vegetables.push({
        id: vegetableId,
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
  },
  buyVegetables: ({commit}, order) => {
    commit('BUY_VEGETABLES', order)
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

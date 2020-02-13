import fruitsStocks from '../../Data/fruitsStocks'
import vegetablesStocks from '../../Data/vegetablesStocks'

const state = {
  fruits: [], 
  vegetables: [], 
  amount: 0, 
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
    state.quantity -= quantity;
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
  }, 
  'REMOVE_FRUITS' (state, {fruitId, quantity, fruitPrice}) {
    const save = state.fruits.find(element => element.id == fruitId.id);
    if(save.quantity > quantity) {
      save.quantity -= quantity;
    }else {
      state.fruits.splice(state.fruits.indexOf(save), 1);
    }
    state.amount -= fruitPrice * quantity;
  },
  'REMOVE_VEGETABLES' (state, {vegetableId, quantity, vegetablePrice}) {
    const save = state.vegetables.find(element => element.id == vegetableId.id);
    if(save.quantity > quantity) {
      save.quantity -= quantity;
    }else {
      state.vegetables.splice(state.vegetables.indexOf(save), 1);
    }
    state.amount -= vegetablePrice * quantity;
  },

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
  }, 
  removedFruits: ({commit}, order) => {
    commit('REMOVE_FRUITS', order)
  }, 
  removedVegetables: ({commit}, order) => {
    commit('REMOVE_VEGETABLES', order)
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
  fruitsCart (state, getters) {
    return state.fruits.map(fruitStock => {
      const save = getters.fruits.find(element => element.id == fruitStock.id)
       /*eslint-disable */
    console.log('fruitsCart');
      return {
        id: fruitStock.id,
        quantity: fruitStock.quantity,
        price: save.price,
        type: save.type
      }
    });    
  }, 
  vegetableCart: (state, getters) => {
    return state.vegetables.map(vegetable => {
      const save = getters.vegetables.find(element => element.id == vegetable.id)
      return {
        id: vegetable.id,
        quantity: vegetable.quantity,
        type: save.type,
        price: save.price
      } 
    });
  },
  productCart: (state, getters) => {
    const concate = state.vegetables.concat(state.fruits);
    return state.concat.map(item => {
      const record = getters.vegetables.find(item => item.id == vegetable.id)
      const rec = getters.fruits.find(element => element.id == fruit.id)
    })
  }
}

export default {
  state, 
  mutations, 
  actions, 
  getters
}

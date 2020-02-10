import Vue from 'vue'
import Vuex from 'vuex'
import stocksModule from '../Store/modules/stocksModule'

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    stocksModule
  }
})
  
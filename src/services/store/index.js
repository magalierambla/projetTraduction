import Vue from 'vue'
import Vuex from 'vuex'
import translations from './modules/translations'
import gameData from './modules/gameData'


Vue.use(Vuex)

const store = new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

    },
  
  modules: {
    translations, gameData,
  },
  strict: true, // process.env.NODE_ENV !== 'production',

})

Vue.use(store)

export default store


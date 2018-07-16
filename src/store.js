import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nextPage: undefined
  },
  mutations: {
    NEXT_PAGE(state, page) {
      state.nextPage = page
    }
  },
  actions: {

  }
})

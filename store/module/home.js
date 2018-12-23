import Vuex from 'vuex'


export default {
  namespaced: true,
  state: {
    menu: [],
    hotPlace: []
  },
  mutations: {
    setMenu(state, val) {
      state.menu = val
    },
    setHotPlace(state, val) {
      state.hotPlace = val
    }
  },
  actions: {
    setMenu({
      commit
    }, menu) {
      commit('setMenu', menu)
    },
    setHotPlace({
      commit
    }, hotPlace) {
      commit('setHotPlace', hotPlace)
    }
  }
}

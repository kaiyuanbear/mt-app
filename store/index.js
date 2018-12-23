import Vue from 'vue'
import vuex from 'vuex'
import geo from './module/geo'
import home from './module/home'

Vue.use(vuex)

const store = () => new vuex.Store({
  modules: {
    geo,
    home
  },
  actions: {
    async nuxtServerInit({
      commit
    }, {req,app}) {
      setPosition(commit, app)
      setMenu(commit, app)
    }
  }
})

const setPosition = async (commit, app) => {
  const {
    status,
    data: {
      province,
      city
    }
  } = await app.$axios.get('/geo/getPosition')
  commit('geo/setPosition', status === 200 ? {province, city} : {province: '', city: ''})
}

const setMenu = async (commit, app) => {
  const {
    status,
    data: {
      menu
    }
  } = await app.$axios.get('/geo/menu')
  commit('home/setMenu', status === 200 ? menu : [])
}


export default store
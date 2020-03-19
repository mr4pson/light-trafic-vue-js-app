import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isDirectionAsc: true,
    timer: 0,
    isLightEnding: false
  },
  mutations: {
    changeDirection (state) {
      state.isDirectionAsc = !state.isDirectionAsc
    },
    changeTime (state, time) {
      state.timer = time
    },
    changeLightEnding (state, value) {
      state.isLightEnding = value
    }
  },
  actions: {
  },
  modules: {
  }
})

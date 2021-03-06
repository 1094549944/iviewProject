import Vue from 'vue'
import Vuex from 'vuex'
import config from '../config'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import state from './state'
import user from './module/user'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    user
  }
})

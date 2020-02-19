import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import state from './state'

Vue.use(Vuex)

/**
 * Vuex
 * 모든 페이지의 전역변수 사용을 위한 store
 */

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

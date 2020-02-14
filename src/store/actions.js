// import axios from '../plugins/axios'
// const resourceHost = 'http://localhost:8000'

export default {
  LOGIN ({ commit }, { id, password }) {
    console.log('LOGIN Actions ' + id + ' / ' + password)
    commit('LOGIN', id)
    //   return axios.get(`${resourceHost}/json/manage/login`, {
    //     userid: id,
    //     userpasswd: password
    //   })
    //   .than(({data}) =>  {
    //     console.log(data)
    //     commit('LOGIN', data)
    //   })
  },
  LOGOUT ({ commit }) {
    commit('LOGOUT')
  }
}

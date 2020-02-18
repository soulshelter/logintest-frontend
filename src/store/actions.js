import axios from 'axios'
const resourceHost = 'http://localhost:8000'

export default {
  LOGIN ({ commit }, { id, password }) {
    console.log('LOGIN Actions ' + id + ' / ' + password)
    // commit('LOGIN', id)
    return axios.get(`${resourceHost}/json/manage/login`, {
      params: {
        userid: id,
        userpasswd: password
      }
    })
      .then(({ data }) => {
        console.log(data)
        commit('LOGIN', data.accessToken)
      })
  },
  LOGOUT ({ commit }) {
    commit('LOGOUT')
  }
}

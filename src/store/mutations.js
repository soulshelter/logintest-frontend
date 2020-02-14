
export default {
  LOGIN (state, accessToken) {
    console.log('mutations ' + accessToken)
    state.accessToken = accessToken
  },
  LOGOUT (state) {
    state.accessToken = null
  }
}

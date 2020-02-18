export default {
  getAcessToken: function (state) {
    return state.accessToken
  },
  isAuthenticated: function (state) {
    console.log('isAuthenticated : ' + state.accessToken)
    if (state.accessToken === 'null') {
      return false
    }
    return true
  }
}

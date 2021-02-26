export default {
  namespaced: true,
  state: {
    userData: null
  },
  mutations: {
    SET_USER_DATA(state, userData) {
      state.userData = userData
    }
  }
}
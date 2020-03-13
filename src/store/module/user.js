const module = {
  namespaced: true,
  state: {
    userinfo: {}
  },
  mutations: {
    SET_USERINFO({state}, val){
      state.userinfo = val
    }
  },
  actions: {
    set_userinfo({commit}, val){
      commit('SET_USERINFO', val)
    }
  }
}

export default module

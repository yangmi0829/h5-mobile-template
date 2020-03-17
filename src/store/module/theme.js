// 主题
import setTheme from '@/config/theme'

const module = {
  namespaced: true,
  state: {
    theme: 'default'
  },
  mutations: {
    SET_THEME (state, val) {
      if (state.theme === val) return
      setTheme(val)
      state.theme = val
    }
  },
  actions: {
    change_theme ({ commit }, val) {
      commit('SET_THEME', val)
    }
  }
}

export default module

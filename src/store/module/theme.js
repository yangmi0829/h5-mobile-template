import {THEME_PREFIX} from '../../assets/theme/mixin.less'
//主题
import setTheme from '@/config/theme';

const module = {
  namespaced: true,
  state: {
    theme: 'default'
  },
  mutations: {
    SET_THEME(state, val){
      const classList = document.body.classList
      const newTheme = `${THEME_PREFIX}${val}`
      if(classList.contains(newTheme))return
      document.body.classList.forEach(cls => {
        if(/^theme-/.test(cls)){
          classList.remove(cls)
        }
      })
      classList.add(newTheme)
      setTheme(val)
      state.theme = val
    }
  },
  actions: {
    change_theme({commit}, val){
      commit('SET_THEME', val)
    }
  }
}

export default module

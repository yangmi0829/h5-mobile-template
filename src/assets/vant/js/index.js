import { Toast, Notify } from 'vant'
const Install = {
  install (Vue) {
    Vue.use(Toast)
    Vue.use(Notify)
  }
}
export default Install

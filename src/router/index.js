import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function getAllRouters () {
  let routers = []
  const all = require.context('./', false, /.router.js$/)
  all.keys().forEach(item => routers = routers.concat(all(item).default))
  return routers
}


const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/login',
    component: () => import('../views/login')
  },
  ...getAllRouters()
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

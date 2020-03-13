import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function getAllRouters () {
  const moduleFiles = require.context('./', false, /.router.js$/)
  return moduleFiles.keys().reduce((cur,key) => cur.concat(moduleFiles(key).default),[])
}

const routes = [
  ...getAllRouters()
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

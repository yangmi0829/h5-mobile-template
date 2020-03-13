export const Home = () => import('../views/layout/Home')

const routes = [

  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/login',
    component: () => import('../views/login')
  },
]

export default routes

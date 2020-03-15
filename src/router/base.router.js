export const Home = () => import('../views/layout/Home')

const routes = [

  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/login',
    component: () => import('../views/login'),
    meta: { showBackIcon: false}
  },
]

export default routes

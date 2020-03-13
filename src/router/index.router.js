const Index = () => import('../views/index')

const routes = [
  {
    component:() => import('../views/layout/Home'),
    path: '/',
    children: [
      {
        path: 'index',
        component: Index,
        name: 'Index',
        meta: { title: '首页'}
      }
    ]
  }
]

export default routes

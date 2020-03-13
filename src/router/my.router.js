const My = () => import('../views/my')

const routes = [
  {
    component:() => import('../views/layout/Home'),
    path: '/',
    children: [
      {
        path: 'my',
        component: My,
        name: 'My',
        meta: { title: '我的'}
      }
    ]
  }
]

export default routes

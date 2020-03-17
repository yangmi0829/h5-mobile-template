import { Home } from './base.router'

const My = () => import('../views/my')

const routes = [
  {
    component: Home,
    path: '/',
    children: [
      {
        path: 'my',
        component: My,
        name: 'My',
        meta: { title: '我的', showBackIcon: false, tabbar: true }
      }
    ]
  }
]

export default routes

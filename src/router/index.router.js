import {Home} from "./base.router";

const Index = () => import('../views/index')

const routes = [
  {
    component:Home,
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

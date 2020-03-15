import {Home} from "./base.router";

const Index = () => import('../views/index')
const Detail = () => import('../views/detail')

const routes = [
  {
    component:Home,
    path: '/',
    children: [
      {
        path: 'index',
        component: Index,
        name: 'Index',
        meta: { title: '首页', showBackIcon: false}
      },
      {
        path: 'detail',
        component: Detail,
        name: 'Detail',
        meta: { title: '详情'}
      }
    ]
  }
]

export default routes

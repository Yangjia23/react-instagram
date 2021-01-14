import Login from '@/views/Login'
import Home from '@/views/Home'
import Chart from '@/views/Chart'
import Explore from '@/views/Explore'
import Profile from '@/views/Profile'
import Saved from '@/views/Saved'
import Setting from '@/views/Setting'

const authorizedRoutes = [
  {
    path: '/home',
    exact: true,
    permissions: ['admin', 'user'],
    component: Home,
    pageTitle: 'pageTitle_home',
    breadcrumb: ['/home'],
  },
  {
    path: '/chart',
    exact: true,
    component: Chart,
  },
  {
    path: '/explore',
    exact: true,
    component: Explore,
  },
  {
    path: '/profile',
    exact: true,
    component: Profile,
  },
  {
    path: '/saved',
    exact: true,
    component: Saved,
  },
  {
    path: '/setting',
    exact: true,
    component: Setting,
  },
]

const normalRoutes = [
  {
    path: '/',
    exact: true,
    redirect: '/home',
  },
  {
    path: '/login',
    exact: true,
    component: Login,
  },
]

const combineRoutes = [...authorizedRoutes, ...normalRoutes]

export { authorizedRoutes, normalRoutes, combineRoutes }

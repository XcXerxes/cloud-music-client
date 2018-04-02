import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import HomeRoute from '@/pages/Home'
// home
import HomeChildren from './home'
const Player = () => import('@/pages/Player')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      component: HomeRoute,
      children: HomeChildren
    },
    {
      path: '/player/:id',
      component: Player,
      name: 'player'
    }
  ]
})

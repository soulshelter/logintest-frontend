import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Mypage from '../views/Mypage.vue'
import Login from '../views/Login.vue'
import store from '../store'

Vue.use(VueRouter)

/**
 * Vue Router
 * SPA의 각 페이지 연결
 */

const requireAuth = (from, to, next) => {
  console.log(store.getters.isAuthenticated)
  const isAuthenticated = store.getters.isAuthenticated
  if (isAuthenticated) {
    return next()
  }
  alert('로그인 해주세요')
  next('/login?returnPath=' + from.name)
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/mypage',
    name: 'mypage',
    component: Mypage,
    beforeEnter: requireAuth
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

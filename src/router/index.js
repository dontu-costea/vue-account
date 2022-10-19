import { createRouter, createWebHistory } from 'vue-router'
import LoginForm from '../components/LoginForm.vue'
import ProfilePage from "../components/ProfilePage.vue"


const routes = [
  {
    path: '/',
    redirect: { name: 'login' },
    name: 'mainPage'
  },
  {
    path: '/auth/login',
    component: LoginForm,
    name: 'login'
  },
  {
    path: '/profile',
    component: ProfilePage,
    name: 'profile'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

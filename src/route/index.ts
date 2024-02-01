import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import Sample from '@/components/Sample.vue'
import User from '@/components/User.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/hello', component: HelloWorld },
  { path: '/sample', component: Sample },
  { path: '/user/:id', component: User}
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})

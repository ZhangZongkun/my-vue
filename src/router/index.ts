import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import Sample from '@/pages/Sample.vue'
import User from '@/components/User.vue'
import Parent from '@/components/Parent.vue'
import Todos from '@/pages/Todos.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/hello', component: HelloWorld },
  { path: '/sample', component: Sample },
  { path: '/user/:id', component: User },
  { path: '/parent', component: Parent },
  { path: '/todos', component: Todos }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})

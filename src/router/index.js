import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import QS from '../views/QS.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/QS', component: QS },
]

export default createRouter({
  history: createWebHistory(),
  routes
})

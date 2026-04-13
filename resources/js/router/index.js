import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../HomePage.vue'
import CatalogPage from '../pages/CatalogPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/catalog', component: CatalogPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
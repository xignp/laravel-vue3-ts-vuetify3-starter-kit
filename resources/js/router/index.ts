import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Top from '../pages/Top.vue'
import NotFound from '../NotFound.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Top',
    component: Top,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from) => {})

export default router

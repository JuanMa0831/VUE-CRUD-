import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import Comunas from '../views/Comunas';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/comunas',
    name: 'Comunas',
    component: () => import(/* webpackChunkName: "comunas" */ '../views/Comunas.vue')
    
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

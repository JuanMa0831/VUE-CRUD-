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
  },
  {
    path: '/editar-comuna/:id',
    name: 'EditarComuna',
    component: EditarComuna
  },
  {
    path: '/add-comuna/',
    name: 'NewComuna',
    component: NewComuna
  },
  {

  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

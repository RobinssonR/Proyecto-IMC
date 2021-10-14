import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/historial',
    name: 'Historial',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/Historial.vue')
  },

  {
    path: '/registro',
    name: 'Paciente',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/Paciente.vue')
  },

  {
    path: '/calcular',
    name: 'CalculoIMC',
   
    component: () => import(/* webpackChunkName: "about" */ '../views/CalculoIMC.vue')
  },

  {
    path: '/login',
    name: 'Login',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },

  {
    path: '/registroadmin',
    name: 'RegistroAdmin',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/RegistroAdmin.vue')
  },

  {
    path: '/contenido',
    name: 'Contenido',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/Contenido.vue')
  }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

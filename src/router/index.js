import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Temperature from '../views/Temperature.vue'
import Weight from '../views/Weight.vue'
import Length from '../views/Length.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/temperature',
    name: 'Temperature',
    component: Temperature
  },
  {
    path: '/length',
    name: 'Longueur',
    component: Length
  },
  {
    path: '/weight',
    name: 'Poids',
    component: Weight
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Temperature from '../views/Temperature.vue'
import Length from '../views/Length.vue'
import Weight from '../views/Weight.vue'
import Speed from '../views/Speed.vue'

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
  },
  {
    path: '/speed',
    name: 'Vitesse',
    component: Speed
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

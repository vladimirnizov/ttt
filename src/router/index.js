import Vue from 'vue'
import VueRouter from 'vue-router'
import Weather from '../views/Weather.vue'
import Favorites from '../views/Favorites.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Weather',
    component: Weather
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: Favorites
  }
]

const router = new VueRouter({
  routes
})

export default router

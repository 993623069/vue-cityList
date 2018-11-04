import Vue from 'vue'
import Router from 'vue-router'
import CityList from '@/components/CityList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CityList',
      component: CityList
    }
  ]
})

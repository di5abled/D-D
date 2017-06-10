import Vue from 'vue'
import Router from 'vue-router'
import CharacterGenerator from '@/components/CharacterGenerator'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CharacterGenerator',
      component: CharacterGenerator
    }
  ]
})

import { createRouter, createWebHistory } from 'vue-router'
import BasicMathView from '../views/BasicMathView.vue'
import StringAppView from '../views/StringAppView.vue'
import AboutMeView from '../views/AboutMeView.vue'
import AboutVuetifyView from '../views/AboutVuetifyView.vue'
import AxiosDemoView from '../views/AxiosDemoView.vue'
import Quiz from '../components/Quiz.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   
    {
      path: '/stringApp',
      name: 'StringAppView',
      component: StringAppView
    },
    {
    path: '/basicMath',
    name: 'basicMath',
    component: BasicMathView
    },
    {
      path: '/aboutMe',
      name: 'aboutMe',
      component: AboutMeView
    },
    {
      path: '/aboutvuetify',
      name: 'aboutVuetify',
      component: AboutVuetifyView
    },
    {
      path: '/axiosdemo',
      name: 'axiosDemo',
      component: AxiosDemoView
    },
    {
      path: '/quiz',
      name: 'quiz',
      component: Quiz
    },

  ]
})

export default router

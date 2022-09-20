import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Dashboard from '../views/Dashboard.vue';
import AboutVuetifyView from '../views/AboutVuetifyView.vue'
import BasicMathView from '../views/BasicMathView.vue'
import StringAppView from '../views/StringAppView.vue'
import QuizView from '../views/QuizView.vue'
import HomeView from '../views/HomeView.vue'
import AboutMeView from '../views/AboutMeView.vue'
import AboutPage from '../views/AboutPage.vue'
import AxiosDemoView from '../views/AxiosDemoView.vue'



const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/Home',
            name: 'Home',
            component: HomeView,
            meta: {
              requiresAuth: true,
            },
        },

        {
            path: '/StringApp',
            name: 'StringApp',
            component: StringAppView,
            meta: {
              requiresAuth: true,
            },
        },

        {
          path: '/AxiosDemo',
          name: 'AxiosDemo',
          component: AxiosDemoView,
          meta: {
            requiresAuth: true,
          },
        },

        {
            path: '/BasicMath',
            name: 'BasicMath',
            component: BasicMathView,
            meta: {
              requiresAuth: true,
            },
        },

        {
            path: '/AboutVuetify',
            name: 'AboutVuetify',
            component: AboutVuetifyView,
            meta: {
              requiresAuth: true,
            },
        },

        {
            path: '/AboutMe',
            name: 'AboutMe',
            component: AboutMeView,
            meta: {
              requiresAuth: true,
            },
        },

        {
            path: '/QuizView',
            name: 'QuizView',
            component: QuizView,
            meta: {
              requiresAuth: true,
            },
        },

        {
            path: '/aboutpage',
            name: 'Aboutpage',
            component: AboutPage,
            meta: {
              requiresAuth: true,
            },
        },

        {
            path: '/login',
            name: 'login',
            component: Login
        },

        {
            path: '/register',
            name: 'Register',
            component: Register
        },

        {
            path: '/',
            name: 'Dashboard',
            component: Dashboard
        }

    ]
})

export default router
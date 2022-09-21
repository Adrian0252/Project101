import { createRouter, createWebHistory } from 'vue-router'
import { getAuth, onAuthStateChanged } from "firebase/auth";
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

const getCurrentUser = () => { 
  return new Promise((resolve, reject) =>{
     const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
          removeListener();
          resolve(user);
      },
      reject
     );
  });
}


router.beforeEach(async(to, from, next) => {
if (to.matched.some((record) => record.meta.requiresAuth)){
  if (await getCurrentUser()){
    next();
  }else {
    alert("You need to login first!");
    next("/login");
  }
}else{
  next();
}
});

export default router
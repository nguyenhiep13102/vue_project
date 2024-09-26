import { createRouter, createWebHistory } from 'vue-router';
// import App from './App.vue'
import LoginPage2 from './components/LoginPage2.vue';
import HomePage from './components/Home_Pages.vue'


const routes = [
 
  
  {
    path:'/LoginPage2',
    name :'login_2',
    component: LoginPage2,
    meta: {title :'login'}

  },

  {
    path:'/',
    name :'App',
    component: LoginPage2,
    meta: {title :'app'}

  },{
    path:'/Home',
    name :'Home_pages',
    component: HomePage,
    meta: {title :'trang chủ'}

  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});

export default router;
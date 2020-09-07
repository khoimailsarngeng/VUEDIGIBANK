import Vue from 'vue';
import Router from 'vue-router';
import FrontEndLayout from './layouts/frontendLayout.vue';
Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/',
      component: FrontEndLayout,      
    }
  ]
});

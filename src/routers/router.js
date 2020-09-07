import Vue from "vue";
import Router from "vue-router";
import Index from "./Index";
import store from '../store/store.js';
import { i18n } from '@/plugins/lang/i18n'
Vue.use(Router);
var routers = [];
routers = routers.concat(Index);
const routes = routers;

const router = new Router({
  routes
});

router.beforeEach((to, from, next) => {  
  setLang();
  if (to.matched.some(record => record.meta.requiresAuth)) {
    next()
  }
  else{
    next();
  }
});
const setLang = function () {
  if (Vue.localStorage.get('weblvbdibank')) {
    i18n.locale = Vue.localStorage.get('weblvbdibank');
  }
  else {
    store.commit("language/SET_LANGUAGE", 'la');
    i18n.locale = 'la';
  }
}

export default router;
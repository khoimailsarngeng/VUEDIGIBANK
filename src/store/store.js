import Vue from 'vue';
import Vuex from 'vuex';
import layout from './modules/layout';
import mobileMode from './modules/MobileMode';
import language from './modules/Language';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    URLPrimary : '/primaryinfo',
    URLUser : '/user'
  },
  modules: {
    layout,
    mobileMode,
    language,
  },
  mutations: {},
  actions: {}
});

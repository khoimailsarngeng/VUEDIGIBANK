import Vue from 'vue';
import App from './App.vue';
import router from './routers/router'
import store from './store/store';
import VueGoodTablePlugin from 'vue-good-table';
import 'vue-good-table/dist/vue-good-table.css';
import {
  i18n
} from './plugins/lang/i18n.js'
import {
  DashBlocks,
  DbDashboard,
  DbHorizon,
  DbSunburst,
  DbSankey,
  DbRidgeline,
  DbChartjsBar,
  DbChartjsHorizontalBar,
  DbChartjsDoughnut,
  DbChartjsLine,
  DbChartjsPie,
  DbChartjsPolarArea,
  DbChartjsRadar,
  DbChartjsBubble,
  DbChartjsScatter,
  DbNumber,
  DbEasyPie,
  DbTrendLine,
  DbTrendBar,
  DbSparkline,
  DbDygraphsBar,
  DbDygraphsLine,
  DbDygraphsSparkLine,
  DbDygraphsDateTimeHistogram
} from 'dashblocks';

Vue.use(DashBlocks, {
  components: {
    DbDashboard,
    DbHorizon,
    DbSunburst,
    DbSankey,
    DbRidgeline,
    DbChartjsBar,
    DbChartjsHorizontalBar,
    DbChartjsDoughnut,
    DbChartjsLine,
    DbChartjsPie,
    DbChartjsPolarArea,
    DbChartjsRadar,
    DbChartjsBubble,
    DbChartjsScatter,
    DbNumber,
    DbEasyPie,
    DbTrendLine,
    DbTrendBar,
    DbSparkline,
    DbDygraphsBar,
    DbDygraphsLine,
    DbDygraphsSparkLine,
    DbDygraphsDateTimeHistogram
  }
  //components: dashblocksComponents
});

// Sample: to import all
/*
import { DashBlocks } from 'dashblocks';
import * as dashblocksComponents from 'dashblocks';
Vue.use(DashBlocks, {
  components: dashblocksComponents
});
*/

// Dashblocks CSS
import 'dashblocks/dist/dashblocks.css';

import './quasar';

//Vue.config.productionTip = false;

Vue.use(VueGoodTablePlugin);

export default new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app');

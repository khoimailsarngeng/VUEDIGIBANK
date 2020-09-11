<template>
  <div>
    <div class="row q-col-gutter-xs text-center q-mt-md">
      <div class="col-xs-12">
        <img src="/assets/img/Logo-LVBDigiBank.png" :width="mobileMode ? '50%' : '40%'" height="100%" alt />
      </div>
      <div class="col-xs-12"><span class="q-font-25">FOR CORPORATE</span><br /></div>
    </div>
    <div class="q-pa-md">
      <div class="row q-col-gutter-xs">
        <div class="col-xs-4 col-sm-3 col-md-4 col-lg-4" v-for="(item, index) in returnData" :key="index">
          <q-card :class="mobileMode ? 'text-center my-card-mobile' : 'text-center my-card'" @click="$router.push(`/service/${item.click}/2`)">
            <q-card-section text-center>
              <img :width="mobileMode ? '60px' : '120px'" :height="mobileMode ? '60px' : '120px'" src="/assets/img/transfer.jpg" />
            </q-card-section>
            <q-card-section class="q-pt-xs">
              <span :class="mobileMode ? 'q-font-13' : 'q-font-18'">{{
                $store.state.language.language === 'en' ? item.nameen : $store.state.language.language === 'vi' ? item.namevi : item.name
              }}</span>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import datajson from '../../../public/Data/group_service.json';
export default {
  computed: {
    ...mapState('mobileMode', ['mobileMode']),
    returnData() {
      console.log(datajson);
      return datajson.filter(q => {
        return q.type == 'Corporate';
      });
    }
  }
};
</script>
<style scoped>
/* .my-card {
  height: 230px;
}

.my-card-mobile {
  height: 150px;
} */

.q-card {
  /* -webkit-box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12); */
  box-shadow: none;
  border-radius: 4px;
  vertical-align: top;
  background: #fff;
  position: relative;
}
</style>

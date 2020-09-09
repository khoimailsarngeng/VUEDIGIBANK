<template>
  <div class="q-pa-md">
    <q-bar class="bg-white text-primary">
      <span :class="mobileMode ? 'text-h7' : 'text-h5'" style="border-bottom:1px solid #17479D">{{
        $store.state.language.language === 'en'
          ? returnData[0].headeren
          : $store.state.language.language === 'vi'
          ? returnData[0].headervi
          : returnData[0].header
      }}</span>
      <q-space />
      <q-btn @click="$router.go(-1)" color="white" text-color="black" :label="$t('Back')" :style="mobileMode ? 'font-size:12px' : 'font-size:14px'" />
    </q-bar>
    <div class="q-pa-md">
      <div class="row q-col-gutter-xs">
        <div class="col-xs-6 col-sm-3 col-md-3 col-lg-4" v-for="(item, index) in returnData" :key="index">
          <q-card :class="mobileMode ? 'text-center my-card-mobile' : 'text-center my-card'" @click="$router.push(`/transfermoney/${item.click}`)">
            <img :height="mobileMode ? '80px' : '200px'" :src="item.img" />
            <q-card-section class="q-pt-xs">
              <span :class="mobileMode ? 'text-h7' : 'text-h6'">{{
                $store.state.language.language === 'en' ? item.name : $store.state.language.language === 'vi' ? item.name : item.name
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
import datajson from '../../../public/Data/data_service.json';
export default {
  computed: {
    ...mapState('mobileMode', ['mobileMode']),
    returnData() {
      console.log(datajson);
      return datajson.filter(q => {
        return q.type == this.$route.params.serviceType;
      });
    }
  }
};
</script>
<style scoped>
.my-card {
  height: 250px;
}

.my-card-mobile {
  height: 130px;
}
</style>

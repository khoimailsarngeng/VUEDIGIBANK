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
      <q-btn
        v-if="!mobileMode"
        @click="$router.go(-1)"
        color="white"
        text-color="black"
        :label="$t('Back')"
        :style="mobileMode ? 'font-size:12px' : 'font-size:14px'"
      />
    </q-bar>
    <div class="q-pa-md">
      <div class="row q-col-gutter-xs">
        <div class="col-xs-6 col-sm-4 col-md-3 col-lg-3" v-for="(item, index) in returnData" :key="index">
          <q-card
            id="cls-service"
            :class="mobileMode ? 'text-center my-card-mobile' : 'text-center my-card q-card-no'"
            @click="$router.push(`/transfermoney/${item.click}`)"
          >
            <q-card-section text-center>
              <img :width="mobileMode ? '60px' : '120px'" :height="mobileMode ? '60px' : '120px'" :src="item.img" />
            </q-card-section>
            <q-card-section class="q-pt-xs">
              <span :class="mobileMode ? 'q-font-13' : 'q-font-18'">{{
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
      if (this.$route.params.type === 1 || this.$route.params.type === '1') {
        var aa = datajson.Individual.filter(q => {
          return q.type === this.$route.params.serviceType;
        });
        return aa;
      } else {
        return datajson.Corporate.filter(q => {
          return q.type === this.$route.params.serviceType;
        });
      }
    }
  },
  mounted() {}
};
</script>
<style scoped>
/* .my-card {
  height: 275px;
} */

.my-card-mobile {
  height: 150px;
}

.q-card-no {
  box-shadow: none;
  border-radius: 4px;
  vertical-align: top;
  background: #fff;
  position: relative;
}

#cls-service:hover img {
  -webkit-transform: scale(0.9);
  transform: scale(0.9);
}
</style>

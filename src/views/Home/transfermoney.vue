<template>
  <div
    class="bg-img-individual"
    :style="
      mobileMode
        ? `height:${window.height + 170}px;margin-top:0px`
        : window.width <= 1366
        ? `height:${window.height + 500}px;margin-top:0px`
        : `height:${window.height + 300}px;margin-top:0px`
    "
  >
    <q-carousel
      swipeable
      animated
      v-model="slide"
      infinite
      autoplay
      :height="mobileMode ? '200px' : window.width >= 1600 ? '400px' : '350px'"
      :thumbnails="mobileMode ? false : false"
    >
      <q-carousel-slide style="background-size: 100% 100%;" :name="1" :img-src="mobileMode ? returnData[0].img : returnData[0].img" />
    </q-carousel>
    <!-- <img :src="returnData[0].img" height="300px" width="100%"> -->
    <div :style="mobileMode ? 'padding:24px 5px' : 'padding:24px 24px'">
      <q-bar class="bg-transparent text-primary" style="border-bottom:1px solid #4d4d4d;padding-bottom: 20px;">
        <span :class="mobileMode ? 'q-font-16 text-bold text-primary' : 'text-h5'">{{ returnData[0].header }}</span>
        <q-space />
        <q-btn @click="$router.go(-1)" color="white" text-color="primary" :label="$t('Back')" icon="skip_previous" v-if="window.width > 500" />
      </q-bar>
      <div :style="mobileMode ? 'padding: 0px 12px' : window.width <= 1366 ? 'padding:10px 24px' : 'padding:24px 24px'">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div :class="mobileMode ? 'q-pt-md' : ''" v-for="(item, index) in returnData" :key="index">
              <div
                :style="mobileMode ? 'padding-right: 34px;margin-left: -44px;text-align: justify;' : 'padding-right: 50px'"
                :class="mobileMode ? 'text-h7 text-primary' : 'text-h6 text-primary'"
                v-html="item.desc"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import datajson from '../../../public/Data/data.json';
export default {
  data() {
    return {
      slide: 1
    };
  },

  computed: {
    ...mapState('mobileMode', ['mobileMode']),
    ...mapState('mobileMode', ['window']),
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
.text-primary {
  color: #17479b !important;
}
</style>

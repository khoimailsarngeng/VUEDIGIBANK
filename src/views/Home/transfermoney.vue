<template>
  <div
    class="bg-img-individual"
    :style="
      mobileMode
        ? `height:${window.height + 100}px;margin-top:0px`
        : returnData.length > 7
        ? 'height: 100%;;margin-top:0px'
        : `height:${window.height + 100}px;margin-top:0px`
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
      <q-bar class="bg-transparent text-black" style="border-bottom:1px solid #4d4d4d;padding-bottom: 20px;">
        <span :class="mobileMode ? 'text-h7' : 'text-h5'">{{ returnData[0].header }}</span>
        <q-space />
        <q-btn
          @click="$router.go(-1)"
          color="white"
          text-color="black"
          :label="$t('Back')"
          icon="skip_previous"
          :style="mobileMode ? 'font-size:12px' : 'font-size:14px'"
        />
      </q-bar>
      <div :style="mobileMode ? 'padding: 0px 12px' : 'padding:24px 24px'">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div v-for="(item, index) in returnData" :key="index">
              <div class="text-h6 text-bold" v-html="item.desc" style="font-family : 'Times New Roman'"></div>
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

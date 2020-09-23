<template>
  <div
    class="bg-img-individual"
    :style="
      mobileMode
        ? `height:${window.height + 170}px;margin-top:0px`
        : window.width <= 1366
        ? `height:${window.height + 500}px;margin-top:0px`
        : `height:${window.height + 600}px;margin-top:0px`
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
        <span :class="mobileMode ? 'q-font-16 text-bold' : 'text-h5'" style="color: #17479b">
          {{
            $store.state.language.language === 'en' ? returnData[0].nameen : $store.state.language.language === 'vi' ? returnData[0].namevi : returnData[0].name
          }}
        </span>
        <q-space />
        <q-btn @click="$router.go(-1)" color="white" text-color="primary" :label="$t('Back')" icon="skip_previous" />
      </q-bar>
      <div :style="mobileMode ? 'padding: 0px 12px' : window.width <= 1366 ? 'padding:20px 24px' : 'padding:24px 24px'">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div :class="mobileMode ? 'q-pt-md' : ''" v-for="(item, index) in returnData" :key="index">
              <div
                :style="
                  mobileMode ? 'padding-right: 34px;margin-left: 0px;text-align: justify;color:#17479b' : 'padding-right: 50px;color:#17479b;line-height:2'
                "
                :class="mobileMode ? 'text-h7' : 'text-h6'"
                v-html="
                  $store.state.language.language === 'en'
                    ? returnData[0].descen
                    : $store.state.language.language === 'vi'
                    ? returnData[0].descvi
                    : returnData[0].desc
                "
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
<style>
.text-primary {
  color: #17479b !important;
}
ul.dashed {
  list-style-type: none;
}
ul.dashed > li {
  text-indent: -5px;
}
ul.dashed > li:before {
  content: '- ';
  text-indent: -5px;
}
</style>

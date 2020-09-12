<template>
  <div :style="mobileMode ? 'padding:24px 5px' : 'padding:24px 24px'">
    <q-bar class="bg-white text-primary">
      <span :class="mobileMode ? 'text-h7' : 'text-h5'" style="border-bottom:1px solid #17479D">{{ returnData[0].header }}</span>
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
    <div :style="mobileMode ? 'padding:24px 0px' : 'padding:24px 24px'">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div v-for="(item, index) in returnData" :key="index">
            <div class="text-h6 text-bold" v-html="item.desc"></div>
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

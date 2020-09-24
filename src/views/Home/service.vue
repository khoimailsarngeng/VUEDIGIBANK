<template>
  <div
    class="bg-img-individual"
    :style="
      mobileMode ? (returnData.length >= 6 ? 'height:100%' : `height:${window.height + 150}px`) : returnData.length > 8 ? '' : `height:${window.height + 150}px`
    "
  >
    <div class="row q-col-gutter-xs q-mt-md">
      <div
        :class="mobileMode ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4 text-left q-pl-lg q-pt-lg' : 'col-xs-4 col-sm-4 col-md-4 col-lg-4 text-left q-pl-lg q-pt-lg'"
      >
        <q-btn
          @click="$router.go(-1)"
          color="white"
          text-color="primary"
          :label="$t('Back')"
          icon="skip_previous"
          :style="mobileMode ? 'font-size:12px' : 'font-size:14px'"
          class="text-bold"
          :size="mobileMode ? 'sm' : 'md'"
        />
      </div>
      <div :class="mobileMode ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4 text-center q-pt-lg' : 'col-xs-4 col-sm-4 col-md-4 col-lg-4 text-center q-pt-lg'">
        <span style="color: #17479b" :class="mobileMode ? 'q-font-18 text-bold' : 'q-font-26 text-bold'">{{
          $store.state.language.language === 'en'
            ? returnData[0].headeren
            : $store.state.language.language === 'vi'
            ? returnData[0].headervi
            : returnData[0].header
        }}</span>
      </div>
      <div
        :class="
          mobileMode ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4 text-center q-pr-xs q-pt-lg' : 'col-xs-4 col-sm-4 col-md-4 col-lg-4 text-right q-pr-lg q-pt-lg'
        "
      >
        <img src="/assets/img/Logo-LVBDigiBank.png" :width="mobileMode ? '100px' : '220px'" :height="mobileMode ? '30px' : '50px'" alt />
      </div>
    </div>
    <div :class="mobileMode ? 'q-pa-md' : 'q-pa-custom'">
      <div class="row q-col-gutter-xs">
        <div class="col-xs-6 col-sm-4 col-md-3 col-lg-3" v-for="(item, index) in returnData" :key="index">
          <q-card class="my-card full-height" flat bordered v-if="!mobileMode">
            <!-- <q-img :src="item.img" height="150px">
              <div class="absolute-bottom">
                <div class="text-subtitle2">{{ $store.state.language.language === 'en' ? item.name : $store.state.language.language === 'vi' ? item.name : item.name }}</div>
              </div>
            </q-img> -->
            <img :src="item.img" height="150px" />
            <q-card-section style="height: 68px;">
              <div class="q-font-15 text-bold q-mt-sm q-mb-xs" style="color:#17479b">
                {{ $store.state.language.language === 'en' ? item.nameen : $store.state.language.language === 'vi' ? item.namevi : item.name }}
              </div>
              <!-- <div class="text-caption text-grey">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div> -->
            </q-card-section>
            <q-card-actions>
              <q-space />
              <q-btn color="green" flat dense icon="" label="Read moare.." @click="$router.push(`/transfermoney/${item.click}`)" />
            </q-card-actions>
          </q-card>
          <q-card class="my-card full-height" flat bordered v-if="mobileMode">
            <img :src="item.img" height="150px" />
            <q-card-section>
              <div class="q-font-15 text-bold q-mt-sm q-mb-xs" style="color:#17479b">
                {{ $store.state.language.language === 'en' ? item.nameen : $store.state.language.language === 'vi' ? item.namevi : item.name }}
              </div>
            </q-card-section>
          </q-card>
        </div>
        <!-- <div class="col-xs-6 col-sm-4 col-md-3 col-lg-3" v-for="(item, index) in returnData" :key="index">
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
        </div> -->
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import datajson from '../../../public/Data/data_service.json';
import IndividualData from '../../../public/Data/individual.json';
import CorporateData from '../../../public/Data/corporate.json';
export default {
  computed: {
    ...mapState('mobileMode', ['mobileMode']),
    ...mapState('mobileMode', ['window']),
    returnData() {
      if (this.$route.params.type === 1 || this.$route.params.type === '1') {
        var aa = IndividualData.filter(q => {
          return q.type === this.$route.params.serviceType;
        });
        return aa;
      } else {
        return CorporateData.filter(q => {
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

.q-pa-custom {
  padding: 16px 200px;
}

.my-card {
  cursor: pointer;
  /* animation: rotate 5s ease forwards; 
  transform-style: preserve-3d; */
}

.my-card:hover {
  top: -5px;
  box-shadow: 2px 2px 8px 3px rgb(224, 25, 25);
  z-index: 20;
}

.my-card::before {
  content: '';
  /* background:#ffff url('http://vectorboom.com/Articles/Useful_Vector/card-deck-01.jpg') no-repeat top left; */
  background-position: -485px -343px;
  border-radius: 6px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  transform: translate3d(0px, 0px, -1px) rotateY(180deg);
  transform-style: preserve-3d;
  backface-visibility: hidden;
}

.my-card:nth-child(2) {
  background-position-x: -126px;
  animation-delay: 0.4s;
}

.my-card:nth-child(3) {
  background-position-x: -245px;
  animation-delay: 0.8s;
}

.my-card:nth-child(4) {
  background-position-x: -365px;
  animation-delay: 1.2s;
}

.my-card:nth-child(5) {
  background-position-x: -485px;
  animation-delay: 1.6s;
}

.my-card:nth-child(6) {
  background-position-y: -176px;
  animation-delay: 2s;
}

.my-card:nth-child(7) {
  background-position-x: -123px;
  background-position-y: -175px;
  animation-delay: 2.4s;
}

.my-card:nth-child(8) {
  background-position-x: -245px;
  background-position-y: -176px;
  animation-delay: 2.8s;
}

@keyframes rotate {
  50%,
  to {
    transform: rotateY(360deg);
  }
}
</style>

<template>
  <div class="bg-img-individual" :style="`height:${window.height}px`">
    <div class="row q-col-gutter-xs q-mt-md">
      <div
        :class="mobileMode ? 'col-xs-6 col-sm-6 col-md-6 col-lg-6 text-left q-pl-lg q-pt-lg' : 'col-xs-6 col-sm-6 col-md-6 col-lg-6 text-left q-pl-lg q-pt-lg'"
      >
        <q-btn
          icon="skip_previous"
          @click="$router.go(-1)"
          color="white"
          text-color="black"
          :label="$t('Back')"
          :style="mobileMode ? 'font-size:12px' : 'font-size:14px'"
        />
      </div>
      <div
        :class="
          mobileMode ? 'col-xs-6 col-sm-6 col-md-6 col-lg-6 text-center q-pr-xs q-pt-lg' : 'col-xs-6 col-sm-6 col-md-6 col-lg-6 text-right q-pr-lg q-pt-lg'
        "
      >
        <img src="/assets/img/Logo-LVBDigiBank.png" :width="mobileMode ? '60%' : '30%'" height="100%" alt />
      </div>
    </div>
    <div :class="mobileMode ? 'q-pa-xl' : 'individual'">
      <div v-if="!mobileMode" class="row q-col-gutter-xs">
        <div class="col-xs-6 col-sm-4 col-md-4 col-lg-4" v-for="(item, index) in returnData" :key="index">
          <q-card
            :id="mobileMode ? '' : 'cls-individual'"
            :class="mobileMode ? 'text-center my-card-mobile' : 'text-center my-card'"
            @click="$router.push(`/service/${item.click}/1`)"
          >
            <q-card-section class="product-thumb" text-center>
              <img :width="mobileMode ? '100px' : '170px'" :height="mobileMode ? '100px' : '170px'" :src="item.img" />
            </q-card-section>
            <q-card-section class="q-pt-xs">
              <span :class="mobileMode ? 'q-font-15' : 'q-font-18'">{{
                $store.state.language.language === 'en' ? item.nameen : $store.state.language.language === 'vi' ? item.namevi : item.name
              }}</span>
            </q-card-section>
          </q-card>
        </div>
      </div>
      <div v-else class="row q-col-gutter-xs">
        <div class="col-xs-6 col-sm-4 col-md-4 col-lg-4" v-for="(item, index) in returnData" :key="index">
          <q-card :class="mobileMode ? 'text-center my-card-mobile' : 'text-center my-card'" @click="$router.push(`/service/${item.click}/1`)">
            <q-card-section text-center>
              <img :width="mobileMode ? '100px' : '170px'" :height="mobileMode ? '100px' : '170px'" :src="item.img" />
            </q-card-section>
            <q-card-section class="q-pt-xs">
              <span :class="mobileMode ? 'q-font-15' : 'q-font-18'">{{
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
    ...mapState('mobileMode', ['window']),
    returnData() {
      console.log(datajson);
      return datajson.filter(q => {
        return q.type == 'Individual';
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
.individual {
  padding: 48px 190px;
}
.q-card {
  -webkit-box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12);
  box-shadow: none;
  border-radius: 4px;
  vertical-align: top;
  background: transparent;
  position: relative;
  cursor: pointer;
}
#cls-individual:hover img {
  -webkit-transform: scale(0.9);
  transform: scale(0.9);
}
/* .bg-img-individual {
  margin-top: -15px;
  background-image: url('/assets/img/bg-indivudual.png');
  background-size: cover;
  background-repeat: no-repeat;
} */
.product-thumb {
  width: calc(100vh / 3.5);
  height: calc(100vh / 3.5);
  max-width: 300px;
  max-height: 300px;
  display: block;
  position: relative;
  margin: 0 auto;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  z-index: 1;
}
.product-thumb::before {
  content: '';
  width: calc(100% + 20px);
  height: calc(100% + 20px);
  position: absolute;
  left: -10px;
  top: -10px;
  /* border: solid 5px #0a3d94; */
  -webkit-border-radius: 50%;
  border-radius: 50%;
  z-index: -1;
}

.product-thumb::after {
  content: '';
  width: calc(100% - 20px);
  height: calc(100% - 20px);
  position: absolute;
  left: 10px;
  top: 10px;
  -webkit-border-radius: 50%;
  border-radius: 50%;
}
.product-thumb img {
  width: 100%;
  height: 100%;
  display: block;
  pointer-events: none;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  -webkit-border-radius: 50%;
  border-radius: 50%;
}
.cls-individual:hover .product-thumb {
  box-shadow: inset 0 0 40px rgb(13 58 220 / 20%);
  border-width: 5px;
}
</style>

<template>
  <div>
    <q-carousel
      swipeable
      animated
      v-model="slide"
      infinite
      autoplay
      :height="mobileMode ? '300px' : '650px'"
      :thumbnails="mobileMode ? false : true"
    >
      <q-carousel-slide
        style="background-size: 100% 100%;"
        :name="1"
        img-src="/assets/img/8x4m-DigiBank final.jpg"
      />
      <q-carousel-slide
        style="background-size: 100% 100%;"
        :name="2"
        img-src="/assets/img/bg-app-individual-after-login.jpg"
      />
      <q-carousel-slide
        style="background-size: 100% 100%;"
        :name="3"
        img-src="/assets/img/5.jpg"
      />
      <template v-slot:control>
        <q-carousel-control
          :style="mobileMode ? 'margin: 50px;' : ''"
          :position="mobileMode ? 'bottom-right' : 'bottom-right'"
          :offset="mobileMode ? [50, 400] : [100, 280]"
          class="q-gutter-xs"
          v-if="slide == 2"
        >
          <q-card flat bordered class="my-card bg-transparent" style="border:0">
            <q-card-section>
              <div class="row items-center no-wrap">
                <div class="col">
                  <div :class=" mobileMode ? 'text-h5' : 'text-h4'">
                    <span class="text-yellow">Laovietbank</span>&nbsp;
                    <span class="text-red">Digital</span>&nbsp;
                    <span class="text-blue">Banking</span>
                  </div>
                  <div class="text-h6 text-black">ໃຫ້ຊິວິດທ່ານສະດວກຂື້ນ</div>
                  <span
                    class="text-h7 text-black"
                  >ສະດວກ ປອດໄພ ວ່ອງໄວ ທັນໃຈ ຕ້ອງ ທະນາຄານຮ່ວມທຸລະກິດລາວຫວຽດ</span>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </q-carousel-control>
      </template>
    </q-carousel>
    <div class="q-pa-md">
      <div class="row q-col-gutter-md cls-production">
        <div :style="mobileMode ? 'width:100%' : 'width:50%'">
            <q-card class="bg-custom-card text-center">
              <q-card-section class="q-pb-none">
                <img src="assets/img/Generalperson.png" style="width:150px;height:150px" />
              </q-card-section>
              <q-card-section class="q-pt-xs">
                <span class="text-h5">{{$t('Individualcustomer')}}</span> <br>
                <q-btn @click="$router.push('/individual')" class="q-mt-md" push color="primary" :label="$t('InfoIndividualcustomer')" />
              </q-card-section>
            </q-card>
        </div>
        <!-- <q-separator vertical color="primary" /> -->

        <div :style="mobileMode ? 'width:100%' : 'width:50%'">
            <q-card class="bg-custom-card text-center">              
              <q-card-section class="q-pb-none">
                <img src="assets/img/Website_Planner-512.png" style="width:150px;height:150px" />
              </q-card-section>
              <q-card-section class="q-pt-xs">
                <span class="text-h5">{{$t('Corporatecustomer')}}</span> <br>
                <q-btn @click="$router.push('/corporate')" class="q-mt-md"  push color="primary" :label="$t('InfoCorporatecustomer')" />
              </q-card-section>
            </q-card>
        </div>
      </div>
    </div>    
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  data() {
    return {
      slide: 1,
      slide1: 1,
      slide2: 2,
      autoplay: true,
      tab: 'alarms',
    };
  },
  computed: {
    ...mapState('mobileMode', ['mobileMode']),
  },
  watch: {
    mobileMode(val) {},
  },
};
</script>
<style lang="scss" scope>
.q-carousel__slide {
  min-height: 100%;
  background-size: cover;
  background-position: inherit !important;
}

.icon-genneral {
  width: 150px;
  height: 150px;
}

.bg-custom-card{
  background: rgb(58,117,221) !important;
  background: linear-gradient(90deg, rgba(58,117,221,1) 0%, rgba(175,204,255,1) 52%, rgba(55,112,213,1) 99%) !important;
}

.cls-production {
  margin-top:-24px !important;
  margin-right:-10px !important;
  margin-left:-26px !important
}
</style>
<template>
  <div>
    <q-carousel
      swipeable
      animated
      v-model="slide"
      infinite
      autoplay
      :height="$q.screen.name === 'xs' ? '250px' : $q.screen.name === 'sm' ? '200px' : $q.screen.name === 'md' ? '230px' : '250px'"
      :thumbnails="mobileMode ? false : true"
    >
      <q-carousel-slide
        style="background-size: 100% 100%;"
        :name="1"
        :img-src="mobileMode ? '/assets/img/8x4m-DigiBank final_resize.jpg' : '/assets/img/8x4m-DigiBank final.jpg'"
      />
      <q-carousel-slide
        style="background-size: 100% 100%;"
        :name="2"
        :img-src="mobileMode ? '/assets/img/bg-app-individual-after-login_resize.jpg' : '/assets/img/bg-app-individual-after-login.jpg'"
      />
      <q-carousel-slide style="background-size: 100% 100%;" :name="3" :img-src="mobileMode ? '/assets/img/5_resize.jpg' : '/assets/img/5.jpg'" />
      <template v-slot:control>
        <q-carousel-control
          :style="mobileMode ? 'margin: 25px;' : ''"
          :position="mobileMode ? 'bottom-right' : 'bottom-right'"
          :offset="mobileMode ? [50, 100] : [100, 100]"
          class="q-gutter-xs"
          v-if="slide == 2"
        >
          <q-card flat bordered class="my-card bg-transparent" style="border:0">
            <q-card-section>
              <div class="row items-center no-wrap">
                <div class="col">
                  <div :class="mobileMode ? 'text-h7' : 'text-h5'">
                    <span class="text-yellow">Laovietbank</span>&nbsp; <span class="text-red">Digital</span>&nbsp;
                    <span class="text-blue">Banking</span>
                  </div>
                  <div class="text-h7 text-black">ໃຫ້ຊິວິດທ່ານສະດວກຂື້ນ</div>
                  <span class="text-h7 text-black">ສະດວກ ປອດໄພ ວ່ອງໄວ ທັນໃຈ ຕ້ອງ ທະນາຄານຮ່ວມທຸລະກິດລາວຫວຽດ</span>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </q-carousel-control>
      </template>
    </q-carousel>
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
      tab: 'alarms'
    };
  },
  computed: {
    ...mapState('mobileMode', ['mobileMode'])
  }
};
</script>

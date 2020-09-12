<template>
  <div>
    <q-carousel
      swipeable
      animated
      v-model="slide"
      infinite
      autoplay
      :height="mobileMode ? '370px' : window.width >= 1600 ? '750px' : '600px'"
      :thumbnails="mobileMode ? false : false"
    >
      <q-carousel-slide style="background-size: 100% 100%;" :name="1" :img-src="mobileMode ? '/assets/img/bg-thatluang.png' : '/assets/img/bg-thatluang.png'" />
      <template v-slot:control>
        <q-carousel-control :position="mobileMode ? 'right' : 'right'" class="q-gutter-xs text-left text-black">
          <q-card
            flat
            bordered
            class="my-card bg-transparent"
            :style="
              mobileMode
                ? 'border:0;margin-top:10px'
                : window.width <= 1366
                ? 'border:0;margin-top:150px;margin-left: 40pc;'
                : 'border:0;margin-top:150px;margin-left: 50pc;'
            "
          >
            <q-card-section>
              <span class="text-primary text-h4">Phí dịch vụ</span> <br />
              <p class="q-font-18">
                Khách hàng mới đăng ký dịch vụ LVB DigiBank được miến tất cả phí sử dụng dịch vụ như: phí thường niên, chuyển tiền trong hệ thống, chuyển tiền
                liên ngân hàng, chuyển tiền quốc tế, chuyển tiên 24/7.
              </p>
            </q-card-section>
          </q-card>
        </q-carousel-control>
      </template>
    </q-carousel>
    <!-- <div class="q-pa-sm q-mt-lg">
      <div class="row q-col-gutter-xs" v-if="$q.screen.name == 'xs'">
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 text-center q-pt-lg">
          <img src="/assets/img/Logo-LVBDigiBank.png" :width="mobileMode ? '80%' : ''" height="100px" alt />
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 text-center q-pt-lg">
          <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 text-center'">
            <span class="text-primary q-font-22">Phí dịch vụ </span> <br />
            Khách hàng mới đăng ký dịch vụ LVB DigiBank được miến tất cả phí sử dụng dịch vụ như: phí thường niên, chuyển tiền trong hệ thống, chuyển tiền liên
            ngân hàng, chuyển tiền quốc tế, chuyển tiên 24/7.
          </div>
        </div>
      </div>
      <div class="row q-col-gutter-xs" v-else>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 text-center q-pt-lg">
          <img src="/assets/img/Logo-LVBDigiBank.png" :width="mobileMode ? '80%' : ''" height="100px" alt />
        </div>
        <div :class="$q.screen.name === 'xs' ? 'col-xs-12 col-sm-6 col-md-6 col-lg-6 text-center' : 'col-xs-12 col-sm-6 col-md-6 col-lg-6 text-left q-pt-lg'">
          <span class="text-primary q-font-22">Phí dịch vụ</span> <br />
          Khách hàng mới đăng ký dịch vụ LVB DigiBank được miến tất cả phí sử dụng dịch vụ như: phí thường niên, chuyển tiền trong hệ thống, chuyển tiền liên
          ngân hàng, chuyển tiền quốc tế, chuyển tiên 24/7.
        </div>
      </div>
    </div> -->
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  data() {
    return {
      slide: 1
    };
  },
  computed: {
    ...mapState('mobileMode', ['mobileMode']),
    ...mapState('mobileMode', ['window'])
  }
};
</script>

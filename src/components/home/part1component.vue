<template>
  <div class="box-product">
    <q-carousel
      swipeable
      animated
      v-model="slide"
      infinite
      autoplay
      :height="mobileMode ? '370px' : window.width >= 1600 ? '750px' : '600px'"
      :thumbnails="mobileMode ? false : false"
    >
      <q-carousel-slide style="background-size: 100% 100%;" :name="1" :img-src="mobileMode ? '/assets/img/bg-patuxay.png' : '/assets/img/bg-patuxay-2.png'" />
      <template v-slot:control>
        <q-carousel-control :position="mobileMode ? 'right' : 'right'" class="q-gutter-xs text-left text-black">
          <q-card
            flat
            bordered
            class="my-card bg-transparent"
            :style="
              mobileMode
                ? 'border:0;margin-top:10px'
                : window.width === 1366
                ? 'border:0;margin-top:80px;margin-left: 40pc;'
                : window.width < 1366
                ? 'border:0;margin-top:50px;margin-left: 40pc;'
                : 'border:0;margin-top:150px;margin-left: 50pc;'
            "
          >
            <q-card-section>
              <span :class="mobileMode ? 'text-primary text-h6' : 'text-primary text-h4'">LVB DigiBank là gì?</span> <br />
              <p :class="mobileMode ? 'q-font-15' : 'q-font-18'">
                Dịch vụ ngân hàng số của Laovietbank cho phép khách hàng cá nhân, <br />
                doanh nghiệp thực hiện các giao dịch ngân hàng mọi lúc, <br />
                mọi nơi thông qua các phương tiện kỹ thuật số: ĐTDĐ, máy tính để bàn, <br />
                máy tính bảng mà không phải đến ngân hàng. <br />
                LaoVietBank Digital Banking gồm 2 phiên bản dành cho khách hàng cá nhân và khách hàng doanh nghiệp.
              </p>
            </q-card-section>
          </q-card>
        </q-carousel-control>
      </template>
    </q-carousel>

    <!-- <div class="slide-pro">
      <div class="q-pa-sm q-mt-xs">
      <div class="row q-col-gutter-xs">
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 text-center q-pt-lg">
          <img src="/assets/img/Logo-LVBDigiBank.png" :width="mobileMode ? '80%' : ''" height="100px" alt="" />
        </div>
        <div
          :class="
            $q.screen.name === 'sm' || $q.screen.name === 'xs'
              ? 'col-xs-12 col-sm-6 col-md-6 col-lg-6 text-center'
              : 'col-xs-12 col-sm-12 col-md-6 col-lg-6 text-left q-pt-lg'
          "
        >
          <span class="text-primary q-font-22">LVB DigiBank là gì?</span> <br />
          Dịch vụ ngân hàng số của Laovietbank cho phép khách hàng cá nhân, doanh nghiệp thực hiện các giao dịch ngân hàng mọi lúc, mọi nơi thông qua các phương
          tiện kỹ thuật số: ĐTDĐ, máy tính để bàn, máy tính bảng mà không phải đến ngân hàng. LaoVietBank Digital Banking gồm 2 phiên bản dành cho khách hàng cá
          nhân và khách hàng doanh nghiệp.
        </div>
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
<style scoped></style>

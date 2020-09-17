<template>
  <div class="box-product">
    <q-carousel
      swipeable
      animated
      v-model="slide"
      infinite
      autoplay
      :height="mobileMode ? (window.width < 500 ? '570px' : '400px') : window.width >= 1600 ? '750px' : '600px'"
      :thumbnails="mobileMode ? false : false"
    >
      <q-carousel-slide style="background-size: 100% 100%;" :name="1" :img-src="mobileMode ? '/assets/img/bg-patuxay-3.png' : '/assets/img/bg-patuxay-3.png'" />

      <template v-slot:control>
        <q-carousel-control :position="mobileMode ? 'right' : 'right'" class="q-gutter-xs text-left text-black">
          <q-card
            flat
            bordered
            class="my-card bg-transparent text-justify"
            :style="
              mobileMode
                ? 'border:0;margin-top:10px'
                : window.width === 1366
                ? 'border:0;margin-top:60px;margin-left: 33pc;padding-right: 50px;'
                : window.width < 1366
                ? 'border:0;margin-top:50px;margin-left: 40pc;padding-right: 147px;'
                : 'border:0;margin-top:100px;margin-left: 40pc;padding-right: 170px;'
            "
          >
            <q-card-section>
              <span :class="mobileMode ? 'text-primary text-h6 text-bold' : 'text-primary text-h4 text-bold'">Giới thiệu LVB DigiBank</span> <br />
              <!-- <p :class="mobileMode ? 'q-font-15 text-justify text-primary ' : 'q-font-20 text-justify text-primary '" style="margin-top: 10px;">
                LVB DigiBank là dịch vụ Ngân hàng số của Ngân hàng liên doanh Lào Việt.
                <br />
                LVB DigiBank cho phép khách hàng cá nhân và doanh nghiệp sử dụng điện thoại, máy tính bảng, máy tính xách tay và máy tính để bàn... tự mình thực
                hiện đa dạng các giao dịch ngân hàng thông qua Ứng dụng LVB DigiBank trên điện thoại, máy tính bảng và thông qua webite
                <a href="www.laovietbank.com.la">www.laovietbank.com.la</a>
              </p> -->
              <p
                class="q-font-20 text-justify text-primary "
                style="line-height: 2; margin-top: 10px;color: #17479b !important;text-align: justify; text-indent: 36pt;"
              >
                LVB DigiBank là dịch vụ Ngân hàng số của Ngân hàng liên doanh Lào Việt. <br data-v-650b6db8="" />
                LVB DigiBank cho phép khách hàng cá nhân và doanh nghiệp sử dụng điện thoại, máy tính bảng, máy tính để bàn và máy tính xách tay để thực hiện đa
                dạng các giao dịch ngân hàng thông qua Ứng dụng LVB DigiBank và thông qua webite
                <a data-v-650b6db8="" href="www.laovietbank.com.la">www.laovietbank.com.la</a>
              </p>
            </q-card-section>
          </q-card>
        </q-carousel-control>
        <q-carousel-control v-if="!mobileMode" :position="'top-right'" class="q-gutter-xs text-right">
          <img src="/assets/img/Logo-LVBDigiBank.png" style="width:277px;height:60px" alt />
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
<style scoped>
.text-primary {
  color: #17479b !important;
}
</style>

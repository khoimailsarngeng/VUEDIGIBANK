<template>
  <div class="box-product">
    <div v-if="!mobileMode">
      <q-carousel
        swipeable
        animated
        v-model="slide"
        infinite
        autoplay
        :height="mobileMode ? (window.width < 500 ? '570px' : '400px') : `${(window.width * 684) / 1920}px`"
        :thumbnails="mobileMode ? false : false"
      >
        <q-carousel-slide
          style="background-size: 100% 100%"
          :name="1"
          :img-src="mobileMode ? '/assets/img/bg-section-1.png' : '/assets/img/bg-section-1.png'"
        />
        <template v-slot:control>
          <q-carousel-control :position="mobileMode ? 'center' : 'center'" class="full-height full-width">
            <div class="row">
              <div
                class="col-4"
                :style="
                  mobileMode
                    ? 'padding:0;border:0;margin-top:0px'
                    : window.width <= 1366
                    ? 'border:0;margin-top:0px;position: relative;padding-left: 30px;'
                    : `border:0;margin-top:6%;position: relative;padding-left: 100px;`
                "
              >
                <img src="/assets/img/laptop-mobile.png" width="100%" alt="" style="position: absolute; top: 50%; transform: translate(0, -30%)" />
              </div>
              <div
                :class="window.width <= 1366 ? 'col-7 q-pt-md' : 'col-7 q-pt-md q-pr-xl'"
                :style="
                  mobileMode
                    ? 'padding:5px;border:0;margin-top:0px'
                    : window.width <= 1366
                    ? 'border:0;margin-top:6%;padding-left: 30px;'
                    : window.width === 1600
                    ? `border:0;margin-top:6%;padding-left: 150px;`
                    : `border:0;margin-top:6%;padding-left: 250px;`
                "
              >
                <q-card-section>
                  <span
                    v-if="$store.state.language.language === 'la'"
                    :class="mobileMode ? 'text-primary text-h6 text-bold' : 'text-primary text-h4 text-bold'"
                  >
                    ແນະນໍາກ່ຽວກັບ <span class="text-primary text-bold"> LVB </span><span class="text-red text-bold"> DigiBank </span>
                  </span>
                  <span
                    v-if="$store.state.language.language === 'vi'"
                    :class="mobileMode ? 'text-primary text-h6 text-bold' : 'text-primary text-h4 text-bold'"
                  >
                    Giới thiệu <span class="text-primary text-bold"> LVB </span><span class="text-red text-bold"> DigiBank </span>
                  </span>
                  <span
                    v-if="$store.state.language.language === 'en'"
                    :class="mobileMode ? 'text-primary text-h6 text-bold' : 'text-primary text-h4 text-bold'"
                  >
                    Introduction of <span class="text-primary text-bold"> LVB </span><span class="text-red text-bold"> DigiBank </span>
                  </span>
                  <br />
                  <p
                    v-if="$store.state.language.language === 'la'"
                    class="q-font-20 text-justify text-primary"
                    style="line-height: 1.5; margin-top: 26px; color: #17479b !important; text-align: justify"
                  >
                    <span class="text-primary text-bold"> LVB</span
                    ><span class="text-red text-bold"> DigiBank </span> ແມ່ນການບໍລິການທະນາຄານດີຈີຕ້ອນຂອງທະນາຄານຮ່ວມທຸລະກິດລາວຫວຽດ.
                    <br />
                    LVB DigiBank ອະນຸຍາດໃຫ້ລູກຄ້າບຸກຄົນ ແລະ ນິຕິບຸກຄົນ ທີ່ນໍາໃຊ້ໂທລະສັບມືຖື, ແທັບເລັດ, ຄອມພິວເຕີຕັ້ງ ໂຕະ ແລະ ແລັບທັອບ
                    ປະຕິບັດບັນດາທຸລະກຳຂອງທະນາຄານຜ່ານ LVB DigiBank Application ແລະ ຜ່ານຊ່ອງທາງ website:
                    <a href="https://www.laovietbank.com.la/la/" target="_blank">www.laovietbank.com.la</a>
                  </p>
                  <p
                    class="q-font-20 text-justify text-primary"
                    style="line-height: 1.5; margin-top: 26px; color: #17479b !important; text-align: justify"
                    v-if="$store.state.language.language === 'vi'"
                  >
                    <span class="text-primary text-bold"> LVB </span><span class="text-red text-bold"> DigiBank </span> là dịch vụ Ngân hàng số của Ngân hàng
                    liên doanh Lào Việt.
                  </p>
                  <p
                    class="q-font-20 text-justify text-primary"
                    style="line-height: 1.5; margin-top: 10px; color: #17479b !important; text-align: justify"
                    v-if="$store.state.language.language === 'vi'"
                  >
                    LVB DigiBank cho phép khách hàng cá nhân và doanh nghiệp sử dụng điện thoại, máy tính bảng, máy tính để bàn và máy tính xách tay để thực
                    hiện đa dạng các giao dịch ngân hàng thông qua Ứng dụng LVB DigiBank và thông qua website
                    <a href="https://www.laovietbank.com.la/vi/" target="_blank">www.laovietbank.com.la</a>
                  </p>
                  <p
                    class="q-font-20 text-justify text-primary"
                    style="line-height: 1.5; margin-top: 10px; color: #17479b !important; text-align: justify"
                    v-if="$store.state.language.language === 'en'"
                  >
                    <span class="text-primary text-bold"> LVB </span><span class="text-red text-bold"> DigiBank </span>is the digital banking of LaoVietBank.
                    LVB DigiBank allows individuals and businesses to access banking services of LaoVietBank on mobile phones, tablets, desktops and laptops by
                    LVB DigiBank application or on website:
                    <a href="https://www.laovietbank.com.la/en_US/" target="_blank">www.laovietbank.com.la</a>
                  </p>
                </q-card-section>
              </div>
            </div>
          </q-carousel-control>
          <q-carousel-control :position="'top-right'" class="q-gutter-xs text-right" style="margin-top: 30px; margin-right: 40px">
            <img src="/assets/img/logo-LVBDigiBank.svg" style="width: 250px" alt />
          </q-carousel-control>
        </template>
      </q-carousel>
    </div>
    <div v-if="mobileMode">
      <q-carousel animated v-model="slidelvb" infinite autoplay :thumbnails="false" :height="mobileMode ? `${(window.width * 180) / 375}px` : ''">
        <template v-slot:control>
          <q-carousel-control position="bottom" :offset="[0, -5]">
            <div style="height: 50px" class="text-center">
              <q-carousel animated v-model="slidelvb1" infinite swipeable :thumbnails="false" height="50px" style="background-color: transparent;">
                <q-carousel-slide :name="1" style="padding: 0px;">
                  <div class="text-primary">
                    <div class="row justify-center">
                      <div class="col-4 q-pr-xs" style="width: auto">
                        <span :class="window.width <= 320 ? 'q-font-18' : 'q-font-20'" style="color: black">{{ $t('Individual') }}</span>
                      </div>
                      <div class="col-4" style="width: auto">
                        <a href="https://ebank.laovietbank.com.la/IBSRetail" target="_blank">
                          <img src="/assets/img/btn_Login.svg" height="33px" />
                        </a>
                      </div>
                      <div class="col-4" style="width: auto">
                        <a
                          :style="mobileMode ? (detectDevice === 'A' ? 'display:none' : '') : ''"
                          href="https://apps.apple.com/la/app/laovietbank-corporate-banking/id1185365945"
                          target="_blank"
                        >
                          <img src="/assets/img/bt-web-appstore.svg" height="38px" title="Download App by App Store" style="margin-top: -2px" />
                        </a>
                        <a
                          :style="mobileMode ? (detectDevice === 'I' ? 'display:none' : '') : ''"
                          href="https://play.google.com/store/apps/details?id=com.lvb.corp"
                          target="_blank"
                        >
                          <img src="/assets/img/bt-web-playstore.svg" height="38px" title="Download App by Google Play" style="margin-top: -2px" />
                        </a>
                      </div>
                    </div>
                  </div>
                </q-carousel-slide>
                <q-carousel-slide :name="2" style="padding: 0px;">
                  <div class="text-primary">
                    <div class="row justify-center">
                      <div class="col-4 q-pr-xs" style="width: auto">
                        <span :class="window.width <= 320 ? 'q-font-18' : 'q-font-20'" style="color: black">{{ $t('Corporate') }}</span>
                      </div>
                      <div class="col-4" style="width: auto">
                        <a href="https://ebank.laovietbank.com.la/IBSRetail" target="_blank">
                          <img src="/assets/img/btn_Login.svg" height="33px" />
                        </a>
                      </div>
                      <div class="col-4" style="width: auto">
                        <a
                          :style="mobileMode ? (detectDevice === 'A' ? 'display:none' : '') : ''"
                          href="https://apps.apple.com/la/app/laovietbank-corporate-banking/id1185365945"
                          target="_blank"
                        >
                          <img src="/assets/img/bt-web-appstore.svg" height="38px" title="Download App by App Store" style="margin-top: -2px" />
                        </a>
                        <a
                          :style="mobileMode ? (detectDevice === 'I' ? 'display:none' : '') : ''"
                          href="https://play.google.com/store/apps/details?id=com.lvb.corp"
                          target="_blank"
                        >
                          <img src="/assets/img/bt-web-playstore.svg" height="38px" title="Download App by Google Play" style="margin-top: -2px" />
                        </a>
                      </div>
                    </div>
                  </div>
                </q-carousel-slide>
              </q-carousel>
            </div>
          </q-carousel-control>
        </template>
        <q-carousel-slide style="background-size: 100% 100%" :name="1" img-src="/assets/img/Slide-pic-for-web-1.png" />
        <q-carousel-slide :name="2" img-src="/assets/img/Slide-pic-for-web-3.png" />
        <q-carousel-slide :name="3" img-src="/assets/img/Slide-pic-for-web-2.png" />
      </q-carousel>
      <q-carousel
        swipeable
        animated
        v-model="slide"
        infinite
        autoplay
        :height="
          mobileMode
            ? window.width < 600
              ? $store.state.language.language === 'la' || $store.state.language.language === 'en'
                ? window.width <= 320
                  ? $store.state.language.language === 'en'
                    ? '400px'
                    : '450px'
                  : '380px'
                : window.width <= 320
                ? '500px'
                : '500px'
              : `${(window.width * 684) / 1920}px`
            : `${(window.width * 684) / 1920}px`
        "
        :thumbnails="mobileMode ? false : false"
      >
        <q-carousel-slide
          style="background-size: 100% 100%"
          :name="1"
          :img-src="mobileMode ? '/assets/img/mb-bg-section1.png' : '/assets/img/mb-bg-section1.png'"
        />
        <template v-slot:control>
          <q-carousel-control :position="mobileMode ? 'top' : 'top'">
            <div class="column">
              <!-- <div class="col col-md-12 text-center q-pa-lg">
                <img src="/assets/img/logo-LVBDigiBank.svg" width="220px" alt="" />
              </div> -->
              <!-- <div class="col col-md-12 q-pl-lg">
                <img src="/assets/img/laptop-mobile.png" width="100%" alt="" />
              </div> -->
              <div class="col col-md-12">
                <q-card-section class="text-center">
                  <span
                    v-if="$store.state.language.language === 'la'"
                    :class="mobileMode ? 'text-primary text-h5 text-bold' : 'text-primary text-h5 text-bold'"
                  >
                    ແນະນໍາກ່ຽວກັບ <span class="text-primary text-bold"> LVB </span><span class="text-red text-bold"> DigiBank </span>
                  </span>
                  <span
                    v-if="$store.state.language.language === 'vi'"
                    :class="mobileMode ? 'text-primary text-h5 text-bold' : 'text-primary text-h5 text-bold'"
                  >
                    Giới thiệu <span class="text-primary text-bold"> LVB </span><span class="text-red text-bold"> DigiBank </span>
                  </span>
                  <span
                    v-if="$store.state.language.language === 'en'"
                    :class="mobileMode ? 'text-primary text-h5 text-bold' : 'text-primary text-h5 text-bold'"
                  >
                    Introduction of <span class="text-primary text-bold"> LVB </span><span class="text-red text-bold"> DigiBank </span>
                  </span>
                  <br />
                  <p
                    v-if="$store.state.language.language === 'la'"
                    class="q-font-18 text-justify text-primary"
                    style="line-height: 1.5; margin-top: 26px; color: #17479b !important; text-align: justify"
                  >
                    <span class="text-primary text-bold"> LVB</span
                    ><span class="text-red text-bold"> DigiBank </span> ແມ່ນການບໍລິການທະນາຄານດີຈີຕ້ອນຂອງທະນາຄານຮ່ວມທຸລະກິດລາວຫວຽດ.
                    <br />
                    LVB DigiBank ອະນຸຍາດໃຫ້ລູກຄ້າບຸກຄົນ ແລະ ນິຕິບຸກຄົນ ທີ່ນໍາໃຊ້ໂທລະສັບມືຖື, ແທັບເລັດ, ຄອມພິວເຕີຕັ້ງ ໂຕະ ແລະ ແລັບທັອບ
                    ປະຕິບັດບັນດາທຸລະກຳຂອງທະນາຄານຜ່ານ LVB DigiBank Application ແລະ ຜ່ານຊ່ອງທາງ website:
                    <a href="https://www.laovietbank.com.la/la/" target="_blank">www.laovietbank.com.la</a>
                  </p>
                  <p
                    class="q-font-20 text-justify text-primary"
                    style="line-height: 1.5; margin-top: 26px; color: #17479b !important; text-align: justify"
                    v-if="$store.state.language.language === 'vi'"
                  >
                    <span class="text-primary text-bold"> LVB </span><span class="text-red text-bold"> DigiBank </span> là dịch vụ Ngân hàng số của Ngân hàng
                    liên doanh Lào Việt.
                  </p>
                  <p
                    class="q-font-18 text-justify text-primary"
                    style="line-height: 1.5; margin-top: 10px; color: #17479b !important; text-align: justify"
                    v-if="$store.state.language.language === 'vi'"
                  >
                    LVB DigiBank cho phép khách hàng cá nhân và doanh nghiệp sử dụng điện thoại, máy tính bảng, máy tính để bàn và máy tính xách tay để thực
                    hiện đa dạng các giao dịch ngân hàng thông qua Ứng dụng LVB DigiBank và thông qua website
                    <a href="https://www.laovietbank.com.la/vi/" target="_blank">www.laovietbank.com.la</a>
                  </p>
                  <p
                    class="q-font-18 text-justify text-primary"
                    style="line-height: 1.5; margin-top: 10px; color: #17479b !important; text-align: justify"
                    v-if="$store.state.language.language === 'en'"
                  >
                    <span class="text-primary text-bold"> LVB </span><span class="text-red text-bold"> DigiBank </span>is the digital banking of LaoVietBank.
                    LVB DigiBank allows individuals and businesses to access banking services of LaoVietBank on mobile phones, tablets, desktops and laptops by
                    LVB DigiBank application or on website:
                    <a href="https://www.laovietbank.com.la/en_US/" target="_blank">www.laovietbank.com.la</a>
                  </p>
                </q-card-section>
              </div>
            </div>
          </q-carousel-control>
        </template>
      </q-carousel>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import { isAndroid, isIOS } from 'mobile-device-detect';
export default {
  data() {
    return {
      slide: 1,
      slidelvb: 1,
      slidelvb1: 1
    };
  },

  computed: {
    ...mapState('mobileMode', ['mobileMode']),
    ...mapState('mobileMode', ['window']),
    langwebsite() {
      return `https://www.laovietbank.com.la/${this.$store.state.language.language}`;
    },
    detectDevice() {
      if (isAndroid) {
        return 'A';
      } else if (isIOS) {
        return 'I';
      } else {
        return 'W';
      }
    }
  }
};
</script>
<style scoped>
.text-primary {
  color: #17479b !important;
}
/* @media (min-width: 0){
  .row > .col-4, .row > .col-xs-4 {
    height: auto;
    width: auto
}
} */
</style>

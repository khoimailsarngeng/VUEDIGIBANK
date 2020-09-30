<template>
  <div class="spacepartonhome">
    <div v-if="!mobileMode">
      <q-carousel
        swipeable
        animated
        v-model="slide"
        infinite
        autoplay
        :height="
          mobileMode ? (window.width < 500 ? '600px' : '600px') : window.width >= 1600 ? '500px' : $store.state.language.language === 'la' ? '500px' : '500px'
        "
        :thumbnails="mobileMode ? false : false"
      >
        <q-carousel-slide style="background-size: 100% 100%;" :name="1" :img-src="mobileMode ? '/assets/img/bg-detail.jpg' : '/assets/img/bg-detail.jpg'" />
        <template v-slot:control>
          <q-carousel-control position="top" class="text-center q-pt-xl">
            <div class="">
              <div
                v-if="$store.state.language.language === 'la' || $store.state.language.language === 'vi'"
                :class="mobileMode ? 'text-h6 text-center text-primary text-bold' : 'text-h4 text-center text-primary text-bold'"
              >
                {{ lang === 'en' ? 'Detail' : lang === 'la' ? 'ລາຍລະອຽດ' : 'Chi tiết về' }}
                <span class="text-primary text-bold">LVB</span>
                <span class="text-red text-bold"> DigiBank</span>
              </div>
              <div
                v-if="$store.state.language.language === 'en'"
                :class="mobileMode ? 'text-h6 text-center text-primary text-bold' : 'text-h4 text-center text-primary text-bold'"
              >
                <span class="text-primary text-bold">LVB</span>
                <span class="text-red text-bold"> DigiBank</span>
                {{ lang === 'en' ? 'In Detail' : lang === 'la' ? 'ລາຍລະອຽດ' : 'Chi tiết về' }}
              </div>
              <div class="row q-col-gutter-md cls-production" style="padding-top:3%">
                <div :style="mobileMode ? 'width:50%' : 'width:50%;padding-left: 10%'" class="text-center">
                  <q-card-section class="q-pb-none icon-custom">
                    <img
                      src="/assets/img/icon-user-individual.svg"
                      :style="mobileMode ? 'width:80px;height:80px' : window.width > 1366 ? 'width:180px;height:180px' : 'width:150px;height:150px'"
                      @click="$router.push('/individual')"
                      :title="$t('Individualcustomer')"
                    />
                  </q-card-section>
                  <q-card-section class="q-pt-none" :style="mobileMode ? 'padding: 0px;' : ''">
                    <span
                      style="color:#17479b;font-weight: bold"
                      :class="
                        mobileMode
                          ? $store.state.language.language === 'vi'
                            ? 'q-font-12 text-lvbdigibank'
                            : 'q-font-16 text-lvbdigibank'
                          : 'text-h6 text-lvbdigibank'
                      "
                      >{{ $t('Individualcustomer') }}</span
                    >
                    <br />
                    <a
                      :style="mobileMode ? (detectDevice === 'A' ? 'display:none' : '') : ''"
                      href="https://apps.apple.com/la/app/laovietbank-smart-banking/id1183297233"
                      target="_blank"
                    >
                      <img src="/assets/img/bt-web-appstore.svg" height="35px" title="Download App by App Store" />
                    </a>
                    <a
                      :style="mobileMode ? (detectDevice === 'I' ? 'display:none' : '') : ''"
                      href="https://play.google.com/store/apps/details?id=com.lvb.retail"
                      target="_blank"
                    >
                      <img src="/assets/img/bt-web-playstore.svg" height="35px" title="Download App by Google Play" />
                    </a>
                    <a href="https://ebank.laovietbank.com.la/IBSRetail" target="_blank">
                      <img src="/assets/img/bt-login.svg" height="35px" />
                    </a>
                  </q-card-section>
                </div>

                <div :style="mobileMode ? 'width:50%' : 'width:50%;padding-right: 10%'" class="text-center">
                  <q-card-section class="q-pb-none icon-custom">
                    <img
                      src="/assets/img/icon-user-business.svg"
                      :style="mobileMode ? 'width:80px;height:80px' : window.width > 1366 ? 'width:180px;height:180px' : 'width:150px;height:150px'"
                      @click="$router.push('/corporate')"
                      :title="$t('Corporatecustomer')"
                    />
                  </q-card-section>
                  <q-card-section class="q-pt-none" :style="mobileMode ? 'padding: 0px;' : ''">
                    <span
                      style="color:#17479b;font-weight: bold"
                      :class="
                        mobileMode
                          ? $store.state.language.language === 'vi'
                            ? 'q-font-12 text-lvbdigibank'
                            : 'q-font-16 text-lvbdigibank'
                          : 'text-h6 text-lvbdigibank'
                      "
                      >{{ $t('Corporatecustomer') }}</span
                    >
                    <br />
                    <a
                      :style="mobileMode ? (detectDevice === 'A' ? 'display:none' : '') : ''"
                      href="https://apps.apple.com/la/app/laovietbank-corporate-banking/id1185365945"
                      target="_blank"
                    >
                      <img src="/assets/img/bt-web-appstore.svg" height="35px" title="Download App by App Store" />
                    </a>
                    <a
                      :style="mobileMode ? (detectDevice === 'I' ? 'display:none' : '') : ''"
                      href="https://play.google.com/store/apps/details?id=com.lvb.corp"
                      target="_blank"
                    >
                      <img src="/assets/img/bt-web-playstore.svg" height="35px" title="Download App by Google Play" />
                    </a>
                    <a href="https://ebank.laovietbank.com.la/IBSCorporate" target="_blank">
                      <img src="/assets/img/bt-login.svg" height="35px" />
                    </a>
                  </q-card-section>
                </div>
              </div>
            </div>
          </q-carousel-control>
        </template>
      </q-carousel>
    </div>
    <div v-if="mobileMode">
      <q-carousel
        swipeable
        animated
        v-model="slide"
        infinite
        autoplay
        :height="mobileMode ? '650px' : window.width >= 1600 ? '500px' : $store.state.language.language === 'la' ? '500px' : '500px'"
        :thumbnails="mobileMode ? false : false"
      >
        <q-carousel-slide
          style="background-size: 100% 100%;"
          :name="1"
          :img-src="mobileMode ? '/assets/img/mb-bg-section5.png' : '/assets/img/mb-bg-section5.png'"
        />
        <template v-slot:control>
          <q-carousel-control position="top" class="text-center" :style="window.width <= 320 ? 'margin-top: 50px' : 'margin-top: 50px'">
            <div class="">
              <div
                v-if="$store.state.language.language === 'la' || $store.state.language.language === 'vi'"
                :class="mobileMode ? 'text-h6 text-center text-primary text-bold' : 'text-h4 text-center text-primary text-bold'"
              >
                {{ lang === 'en' ? 'Detail' : lang === 'la' ? 'ລາຍລະອຽດ' : 'Chi tiết về' }}
                <span class="text-primary text-bold">LVB</span>
                <span class="text-red text-bold"> DigiBank</span>
              </div>
              <div
                v-if="$store.state.language.language === 'en'"
                :class="mobileMode ? 'text-h6 text-center text-primary text-bold' : 'text-h4 text-center text-primary text-bold'"
              >
                <span class="text-primary text-bold">LVB</span>
                <span class="text-red text-bold"> DigiBank</span>
                {{ lang === 'en' ? 'In Detail' : lang === 'la' ? 'ລາຍລະອຽດ' : 'Chi tiết về' }}
              </div>
              <div class="row q-col-gutter-md">
                <div style="width:100%" class="text-center">
                  <q-card-section class="q-pb-none icon-custom">
                    <img
                      src="/assets/img/icon-user-individual.svg"
                      style="width:130px;height:130px"
                      @click="$router.push('/individual')"
                      :title="$t('Individualcustomer')"
                    />
                  </q-card-section>
                  <q-card-section class="q-pt-none" :style="mobileMode ? 'padding: 0px;' : ''">
                    <span style="color:#17479b;font-weight: bold" class="text-h6 text-lvbdigibank">{{ $t('Individualcustomer') }}</span>
                    <br />
                    <a
                      :style="mobileMode ? (detectDevice === 'A' ? 'display:none' : '') : ''"
                      href="https://apps.apple.com/la/app/laovietbank-smart-banking/id1183297233"
                      target="_blank"
                    >
                      <img src="/assets/img/bt-web-appstore.svg" height="35px" title="Download App by App Store" />
                    </a>
                    <a
                      :style="mobileMode ? (detectDevice === 'I' ? 'display:none' : '') : ''"
                      href="https://play.google.com/store/apps/details?id=com.lvb.retail"
                      target="_blank"
                    >
                      <img src="/assets/img/bt-web-playstore.svg" height="35px" title="Download App by Google Play" />
                    </a>
                    <a href="https://ebank.laovietbank.com.la/IBSRetail" target="_blank">
                      <img src="/assets/img/bt-login.svg" height="35px" />
                    </a>
                  </q-card-section>
                </div>

                <div style="width:100%" class="text-center">
                  <q-card-section class="q-pb-none icon-custom">
                    <img
                      src="/assets/img/icon-user-business.svg"
                      style="width:130px;height:130px"
                      @click="$router.push('/corporate')"
                      :title="$t('Corporatecustomer')"
                    />
                  </q-card-section>
                  <q-card-section class="q-pt-none" :style="mobileMode ? 'padding: 0px;' : ''">
                    <span style="color:#17479b;font-weight: bold" class="text-h6 text-lvbdigibank">{{ $t('Corporatecustomer') }}</span>
                    <br />
                    <a
                      :style="mobileMode ? (detectDevice === 'A' ? 'display:none' : '') : ''"
                      href="https://apps.apple.com/la/app/laovietbank-corporate-banking/id1185365945"
                      target="_blank"
                    >
                      <img src="/assets/img/bt-web-appstore.svg" height="35px" title="Download App by App Store" />
                    </a>
                    <a
                      :style="mobileMode ? (detectDevice === 'I' ? 'display:none' : '') : ''"
                      href="https://play.google.com/store/apps/details?id=com.lvb.corp"
                      target="_blank"
                    >
                      <img src="/assets/img/bt-web-playstore.svg" height="35px" title="Download App by Google Play" />
                    </a>
                    <a href="https://ebank.laovietbank.com.la/IBSCorporate" target="_blank">
                      <img src="/assets/img/bt-login.svg" height="35px" />
                    </a>
                  </q-card-section>
                </div>
              </div>
            </div>
          </q-carousel-control>
        </template>
      </q-carousel>
    </div>
  </div>
  <!-- <div :class="mobileMode ? 'bg-part5-mobile' : 'bg-part5'">
    <div class="q-pa-md">
      <div
        :class="mobileMode ? 'text-h6 text-center text-primary text-bold' : 'text-h4 text-center text-primary text-bold'"
        :style="mobileMode ? '' : window.width === 1366 ? 'padding-top: 440px;' : window.width > 1366 ? 'padding-top: 470px;' : 'padding-top: 503px;'"
      >
        Chi tiết về <span class="text-primary text-bold"> LVB </span><span class="text-red text-bold"> DigiBank </span>
      </div>
      <div class="row q-col-gutter-md cls-production" style="padding-top:3%">
        <div :style="mobileMode ? 'width:50%' : 'width:50%;padding-left: 10%;'" class="text-center">
          <q-card-section class="q-pb-none icon-custom">
            <img
              src="/assets/img/icon-user-individual.svg"
              :style="mobileMode ? 'width:80px;height:80px' : window.width > 1366 ? 'width:180px;height:180px' : 'width:150px;height:150px'"
              @click="$router.push('/individual')"
              :title="$t('Individualcustomer')"
            />
          </q-card-section>
          <q-card-section class="q-pt-none" :style="mobileMode ? 'padding: 0px;' : ''">
            <span
              style="color:#17479b;font-weight: bold"
              :class="
                mobileMode
                  ? $store.state.language.language === 'vi'
                    ? 'q-font-12 text-lvbdigibank'
                    : 'q-font-16 text-lvbdigibank'
                  : 'text-h6 text-lvbdigibank'
              "
              >{{ $t('Individualcustomer') }}</span
            >
            <br />
            <a
              :style="mobileMode ? (detectDevice === 'A' ? 'display:none' : '') : ''"
              href="https://apps.apple.com/la/app/laovietbank-smart-banking/id1183297233"
              target="_blank"
            >
              <img src="/assets/img/bt-web-appstore.svg" height="35px" title="Download App by App Store" />
            </a>
            <a
              :style="mobileMode ? (detectDevice === 'I' ? 'display:none' : '') : ''"
              href="https://play.google.com/store/apps/details?id=com.lvb.retail"
              target="_blank"
            >
              <img src="/assets/img/bt-web-playstore.svg" height="35px" title="Download App by Google Play" />
            </a>
            <a href="https://ebank.laovietbank.com.la/IBSRetail" target="_blank">
              <img src="/assets/img/bt-login.svg" height="35px" />
            </a>
          </q-card-section>
        </div>

        <div :style="mobileMode ? 'width:50%' : 'width:50%;padding-right: 10%;'" class="text-center">
          <q-card-section class="q-pb-none icon-custom">
            <img
              src="/assets/img/icon-user-business.svg"
              :style="mobileMode ? 'width:80px;height:80px' : window.width > 1366 ? 'width:180px;height:180px' : 'width:150px;height:150px'"
              @click="$router.push('/corporate')"
              :title="$t('Corporatecustomer')"
            />
          </q-card-section>
          <q-card-section class="q-pt-none" :style="mobileMode ? 'padding: 0px;' : ''">
            <span
              style="color:#17479b;font-weight: bold"
              :class="
                mobileMode
                  ? $store.state.language.language === 'vi'
                    ? 'q-font-12 text-lvbdigibank'
                    : 'q-font-16 text-lvbdigibank'
                  : 'text-h6 text-lvbdigibank'
              "
              >{{ $t('Corporatecustomer') }}</span
            >
            <br />
            <a
              :style="mobileMode ? (detectDevice === 'A' ? 'display:none' : '') : ''"
              href="https://apps.apple.com/la/app/laovietbank-corporate-banking/id1185365945"
              target="_blank"
            >
              <img src="/assets/img/bt-web-appstore.svg" height="35px" title="Download App by App Store" />
            </a>
            <a
              :style="mobileMode ? (detectDevice === 'I' ? 'display:none' : '') : ''"
              href="https://play.google.com/store/apps/details?id=com.lvb.corp"
              target="_blank"
            >
              <img src="/assets/img/bt-web-playstore.svg" height="35px" title="Download App by Google Play" />
            </a>
            <a href="https://ebank.laovietbank.com.la/IBSCorporate" target="_blank">
              <img src="/assets/img/bt-login.svg" height="35px" />
            </a>
          </q-card-section>
        </div>
      </div>
    </div>
  </div>-->
</template>
<script>
import { mapState } from 'vuex';
import { isAndroid, isIOS } from 'mobile-device-detect';
export default {
  data() {
    return {
      slide: 1
    };
  },
  computed: {
    ...mapState('mobileMode', ['mobileMode']),
    ...mapState('mobileMode', ['window']),
    detectDevice() {
      if (isAndroid) {
        return 'A';
      } else if (isIOS) {
        return 'I';
      } else {
        return 'W';
      }
    },
    lang() {
      return this.$store.state.language.language;
    }
  },
  methods: {
    Download(val) {
      window.open(val, '_blank');
    }
  }
};
</script>
<style scoped>
.bg-part5 {
  background-image: url('/assets/img/bg-detail.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  padding: 65px;
}
.bg-part5-mobile {
  background-image: url('/assets/img/bg-detail.jpg');
  background-repeat: no-repeat;
  height: 650px;
}

.icon-custom:hover img {
  -webkit-transform: scale(0.9);
  transform: scale(0.9);
}
.text-primary {
  color: #17479b !important;
}
</style>

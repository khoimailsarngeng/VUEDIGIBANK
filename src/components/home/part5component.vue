<template>
  <div :class="mobileMode ? 'bg-part5-mobile' : 'bg-part5'">
    <div class="q-pa-md">
      <div
        :class="mobileMode ? 'text-h6 text-center text-primary text-bold' : 'text-h5 text-center text-primary text-bold'"
        :style="mobileMode ? '' : window.width === 1366 ? 'padding-top: 455px;' : window.width > 1366 ? 'padding-top: 490px;' : 'padding-top: 503px;'"
      >
        Chi tiết về LVB DigiBank
      </div>
      <div class="row q-col-gutter-md cls-production">
        <div :style="mobileMode ? 'width:50%' : 'width:50%;padding-left: 25%;'" class="text-center">
          <q-card-section class="q-pb-none">
            <img
              src="/assets/img/icon-user-individual.svg"
              :style="mobileMode ? 'width:80px;height:80px' : window.width > 1366 ? 'width:130px;height:130px' : 'width:150px;height:150px'"
              @click="$router.push('/individual')"
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
              <img src="/assets/img/bt-web-appstore.svg" height="35px" />
            </a>
            <a
              :style="mobileMode ? (detectDevice === 'I' ? 'display:none' : '') : ''"
              href="https://play.google.com/store/apps/details?id=com.lvb.retail"
              target="_blank"
            >
              <img src="/assets/img/bt-web-playstore.svg" height="35px" />
            </a>
            <a href="https://www.laovietbank.com.la/" target="_blank">
              <img src="/assets/img/bt-login-18.svg" height="35px" />
            </a>
          </q-card-section>
        </div>

        <div :style="mobileMode ? 'width:50%' : 'width:50%;padding-right: 25%;'" class="text-center">
          <q-card-section class="q-pb-none">
            <img
              src="/assets/img/icon-user-business.svg"
              :style="mobileMode ? 'width:80px;height:80px' : window.width > 1366 ? 'width:130px;height:130px' : 'width:150px;height:150px'"
              @click="$router.push('/corporate')"
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
              <img src="/assets/img/bt-web-appstore.svg" height="35px" />
            </a>
            <a
              :style="mobileMode ? (detectDevice === 'I' ? 'display:none' : '') : ''"
              href="https://play.google.com/store/apps/details?id=com.lvb.corp"
              target="_blank"
            >
              <img src="/assets/img/bt-web-playstore.svg" height="35px" />
            </a>
            <a href="https://www.laovietbank.com.la/" target="_blank">
              <img src="/assets/img/bt-login-18.svg" height="35px" />
            </a>
          </q-card-section>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import { isAndroid, isIOS } from 'mobile-device-detect';
export default {
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
  background-image: url('/assets/img/bg-digital.png');
  background-repeat: no-repeat;
  height: 800px;
  background-size: cover;
}
.bg-part5-mobile {
  background-image: url('/assets/img/bg-digital.png');
  background-repeat: no-repeat;
  height: 650px;
}
</style>

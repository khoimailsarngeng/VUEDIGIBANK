<template>
  <div class="bg-part5">
    <div class="q-pa-md">
      <div class="row q-col-gutter-md cls-production">
        <div :style="mobileMode ? 'width:50%' : 'width:50%;padding-left: 25%;'" class="text-center">
          <q-card-section class="q-pb-none">
            <img
              src="/assets/img/Generalperson.png"
              :style="mobileMode ? 'width:50px;height:50px' : 'width:150px;height:150px'"
              @click="$router.push('/individual')"
            />
          </q-card-section>
          <q-card-section class="q-pt-none">
            <span :class="mobileMode ? 'q-font-11' : 'text-h6'">{{ $t('Individualcustomer') }}</span> <br />
            <a href="https://apps.apple.com/la/app/laovietbank-smart-banking/id1183297233">
              <img src="/assets/img/bt-web-appstore.svg" height="35px" />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.lvb.retail">
              <img src="/assets/img/bt-web-playstore.svg" height="35px" />
            </a>
            <a
              href="https://ebank.laovietbank.com.la/IBSRetail/Request?&dse_sessionId=G9UpnSXiqZAk9zo-3KmX5eq&dse_applicationId=-1&dse_pageId=1&dse_operationName=retailIndexProc&dse_errorPage=error_page.jsp&dse_processorState=initial&dse_nextEventName=start"
            >
              <img src="/assets/img/bt-web-login.svg" height="35px" />
            </a>
          </q-card-section>
        </div>

        <div :style="mobileMode ? 'width:50%' : 'width:50%;padding-right: 25%;'" class="text-center">
          <q-card-section class="q-pb-none">
            <img
              src="/assets/img/Website_Planner-512.png"
              :style="mobileMode ? 'width:50px;height:50px' : 'width:150px;height:150px'"
              @click="$router.push('/corporate')"
            />
          </q-card-section>
          <q-card-section class="q-pt-none">
            <span :class="mobileMode ? 'q-font-11' : 'text-h6'">{{ $t('Corporatecustomer') }}</span> <br />
            <a href="https://apps.apple.com/la/app/laovietbank-corporate-banking/id1185365945">
              <img src="/assets/img/bt-web-appstore.svg" height="35px" />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.lvb.corp">
              <img src="/assets/img/bt-web-playstore.svg" height="35px" />
            </a>
            <a
              href="https://ebank.laovietbank.com.la/IBSCorporate/Request?&dse_sessionId=twMxgl8Piv_NqzmeAW_i1uc&dse_applicationId=-1&dse_pageId=1&dse_operationName=corpIndexProc&dse_errorPage=error_page.jsp&dse_processorState=initial&dse_nextEventName=start"
            >
              <img src="/assets/img/bt-web-login.svg" height="35px" />
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
}
</style>

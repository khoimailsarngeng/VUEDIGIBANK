<template>
  <div>
    <div class="q-pa-md">
      <div class="row q-col-gutter-md cls-production">
        <div :style="mobileMode ? 'width:50%' : 'width:50%'">
          <q-card class="bg-grey-1 text-center">
            <q-card-section class="q-pb-none">
              <img
                src="/assets/img/Generalperson.png"
                :style="mobileMode ? 'width:50px;height:50px' : 'width:90px;height:90px'"
                @click="$router.push('/individual')"
              />
            </q-card-section>
            <q-card-section class="q-pt-none">
              <span :class="mobileMode ? 'q-font-11' : 'text-h6'">{{ $t('Individualcustomer') }}</span> <br />
              <q-btn
                size="sm"
                color="green"
                icon="cloud_download"
                :label="mobileMode ? 'Download' : 'Download App'"
                :class="mobileMode ? (window.width === 768 || window.width === 540 || window.width === 600 ? 'q-mr-xs' : 'q-mb-xs') : 'q-mr-xs'"
              />
              <q-btn size="sm" color="primary" icon="login" label="Login" />
            </q-card-section>
          </q-card>
        </div>
        <!-- <q-separator vertical color="primary" /> -->

        <div :style="mobileMode ? 'width:50%' : 'width:50%'">
          <q-card class="bg-grey-1 text-center">
            <q-card-section class="q-pb-none">
              <img
                src="/assets/img/Website_Planner-512.png"
                :style="mobileMode ? 'width:50px;height:50px' : 'width:90px;height:90px'"
                @click="$router.push('/corporate')"
              />
            </q-card-section>
            <q-card-section class="q-pt-none">
              <span :class="mobileMode ? 'q-font-11' : 'text-h6'">{{ $t('Corporatecustomer') }}</span> <br />
              <q-btn
                size="sm"
                color="green"
                icon="cloud_download"
                :label="mobileMode ? 'Download' : 'Download App'"
                :class="mobileMode ? (window.width === 768 || window.width === 540 || window.width === 600 ? 'q-mr-xs' : 'q-mb-xs') : 'q-mr-xs'"
              />
              <q-btn size="sm" color="primary" icon="login" label="Login" />
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
  computed: {
    ...mapState('mobileMode', ['mobileMode']),
    ...mapState('mobileMode', ['window'])
  }
};
</script>

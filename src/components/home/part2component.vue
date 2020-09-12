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
      <q-carousel-slide style="background-size: 100% 100%;" :name="1" :img-src="mobileMode ? '/assets/img/bg-kuangsi.png' : '/assets/img/bg-kuangsi.png'" />
      <template v-slot:control>
        <q-carousel-control :position="mobileMode ? 'left' : 'left'" class="q-gutter-xs text-left text-black">
          <q-card flat bordered class="my-card bg-transparent" :style="mobileMode ? 'border:0;margin-top:10px' : 'border:0;margin-top:150px;'">
            <q-card-section>
              <span class="text-primary text-h4">Tiền ích của LVB DigiBank</span> <br />
              <p class="q-font-18">
                - Khách hàng cá nhân, Doanh nghiệp và các tổ chức
                <br />-  Có tất cả các dịch ngân hàng <br />
                -  Chỉ sử dụng 01 User cho các thiết bị mà có kết nối mạng Internet
              </p>
            </q-card-section>
          </q-card>
        </q-carousel-control>
      </template>
    </q-carousel>
    <!-- <div class="q-pa-sm q-mt-lg bg-grey-1">
      <div class="row q-col-gutter-xs" v-if="$q.screen.name == 'xs'">
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 text-center q-pt-lg">
          <img src="/assets/img/icon-function.png" :width="mobileMode ? '80%' : ''" height="100%" alt />
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 text-center q-pt-lg">
          <div
            :class="
              $q.screen.name === 'sm' || $q.screen.name === 'xs'
                ? 'col-xs-12 col-sm-12 col-md-6 col-lg-6 text-center'
                : 'col-xs-12 col-sm-12 col-md-6 col-lg-6 text-left q-pt-lg'
            "
          >
            <span class="text-primary q-font-22">Tiền ích của LVB DigiBank </span> <br />
            - Khách hàng cá nhân, Doanh nghiệp và các tổ chức
            <br />
            -  Có tất cả các dịch ngân hàng <br />
            -  Chỉ sử dụng 01 User cho các thiết bị mà có kết nối mạng Internet
          </div>
        </div>
      </div>
      <div class="row q-col-gutter-xs" v-else-if="$q.screen.name == 'sm'">
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 text-center q-pt-lg">
          <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 text-left q-pt-lg">
            <span class="text-primary q-font-22">Tiền ích của LVB DigiBank </span> <br />
            - Khách hàng cá nhân, Doanh nghiệp và các tổ chức
            <br />
            -  Có tất cả các dịch ngân hàng <br />
            -  Chỉ sử dụng 01 User cho các thiết bị mà có kết nối mạng Internet
          </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 text-center q-pt-lg">
          <img src="/assets/img/icon-function.png" :width="mobileMode ? '80%' : ''" height="100px" alt />
        </div>
      </div>
      <div class="row q-col-gutter-xs" v-else>
        <div
          :class="
            $q.screen.name === 'sm' || $q.screen.name === 'xs'
              ? 'col-xs-12 col-sm-12 col-md-6 col-lg-6 text-center'
              : 'col-xs-12 col-sm-12 col-md-6 col-lg-6 text-left q-pt-lg q-pl-lg'
          "
        >
          <span class="text-primary q-font-22">Tiền ích của LVB DigiBank </span> <br />
          - Khách hàng cá nhân, Doanh nghiệp và các tổ chức
          <br />
          -  Có tất cả các dịch ngân hàng <br />
          -  Chỉ sử dụng 01 User cho các thiết bị mà có kết nối mạng Internet
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 text-center q-pt-lg">
          <img src="/assets/img/icon-function.png" :width="mobileMode ? '80%' : ''" height="100px" alt />
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

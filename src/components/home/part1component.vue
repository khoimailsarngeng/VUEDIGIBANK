<template>
  <div>
    <div class="q-pa-sm q-mt-xs">
      <div class="row q-col-gutter-xs">
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 text-center q-pt-lg">
          <img src="/assets/img/Logo-LVBDigiBank.png" width="100%" height="100px" alt="" />
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
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState('mobileMode', ['mobileMode'])
  }
};
</script>

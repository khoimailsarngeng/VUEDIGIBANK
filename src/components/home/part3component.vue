<template>
  <div>
    <div class="q-pa-sm q-mt-lg bg-grey-1">
      <div class="row q-col-gutter-xs" v-if="$q.screen.name == 'xs'">
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 text-center q-pt-lg">
          <img src="/assets/img/Logo-LVBDigiBank.png" width="100%" height="100px" alt />
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 text-center q-pt-lg">
          <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 text-center'">
            <span class="text-primary q-font-22">Phí đăng ký dịch vụ </span> <br />
            Khách hàng mới đăng ký dịch vụ LVB DigiBank được miến tất cả phí sử dụng dịch vụ như: phí thường niên, chuyển tiền trong hệ thống, chuyển tiền liên
            ngân hàng, chuyển tiền quốc tế, chuyển tiên 24/7.
          </div>
        </div>
      </div>
      <div class="row q-col-gutter-xs" v-else>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 text-center q-pt-lg">
          <img src="/assets/img/Logo-LVBDigiBank.png" height="100px" alt />
        </div>
        <div :class="$q.screen.name === 'xs' ? 'col-xs-12 col-sm-6 col-md-6 col-lg-6 text-center' : 'col-xs-12 col-sm-6 col-md-6 col-lg-6 text-left q-pt-lg'">
          <span class="text-primary q-font-22">Phí đăng ký dịch vụ</span> <br />
          Khách hàng mới đăng ký dịch vụ LVB DigiBank được miến tất cả phí sử dụng dịch vụ như: phí thường niên, chuyển tiền trong hệ thống, chuyển tiền liên
          ngân hàng, chuyển tiền quốc tế, chuyển tiên 24/7.
        </div>
      </div>
    </div>
  </div>
</template>

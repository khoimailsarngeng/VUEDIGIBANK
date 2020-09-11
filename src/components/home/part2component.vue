<template>
  <div>
    <div class="q-pa-sm q-mt-lg bg-grey-1">
      <div class="row q-col-gutter-xs" v-if="$q.screen.name == 'xs'">
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 text-center q-pt-lg">
          <img src="/assets/img/Logo-LVBDigiBank.png" width="100%" height="100px" alt />
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
          <img src="/assets/img/Logo-LVBDigiBank.png" height="100px" alt />
        </div>
      </div>
      <div class="row q-col-gutter-xs" v-else>
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
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 text-center q-pt-lg">
          <img src="/assets/img/Logo-LVBDigiBank.png" height="100px" alt />
        </div>
      </div>
    </div>
  </div>
</template>

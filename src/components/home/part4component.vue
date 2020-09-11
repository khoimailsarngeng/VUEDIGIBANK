<template>
  <div>
    <div class="q-pa-sm q-mt-lg bg-grey-1">
      <div class="row q-col-gutter-xs" v-if="$q.screen.name == 'xs'">
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 text-center q-pt-lg">
          <img src="/assets/img/Final_new.jpg" width="100%" height="100px" alt="" />
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 text-center">
          <span class="text-primary q-font-22">LVB DigiBank là gì?</span> <br />
          Đăng ký sử dụng dịch vụ LVB DigiBank bằng: Khách hàng đến đăng ký tại tất cả các điểm giao dịch của LaoVietBank Cài đặt ứng dụng bằng download (App
          Store và Google Play hoặc vào website: www.laovietbank.com.la) Sử dụng dịch vụ
        </div>
      </div>
      <div class="row q-col-gutter-xs" v-else-if="$q.screen.name == 'sm'">
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 text-left q-pt-lg">
          <span class="text-primary q-font-22">LVB DigiBank là gì?</span> <br />
          Đăng ký sử dụng dịch vụ LVB DigiBank bằng: Khách hàng đến đăng ký tại tất cả các điểm giao dịch của LaoVietBank Cài đặt ứng dụng bằng download (App
          Store và Google Play hoặc vào website: www.laovietbank.com.la) Sử dụng dịch vụ
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 text-center q-pt-lg">
          <img src="/assets/img/Final_new.jpg" height="100px" alt />
        </div>
      </div>
      <div class="row q-col-gutter-xs" v-else>
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 text-left q-pt-lg">
          <span class="text-primary q-font-22">LVB DigiBank là gì?</span> <br />
          Đăng ký sử dụng dịch vụ LVB DigiBank bằng: Khách hàng đến đăng ký tại tất cả các điểm giao dịch của LaoVietBank Cài đặt ứng dụng bằng download (App
          Store và Google Play hoặc vào website: www.laovietbank.com.la) Sử dụng dịch vụ
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 text-center q-pt-lg">
          <img src="/assets/img/Final_new.jpg" height="100px" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

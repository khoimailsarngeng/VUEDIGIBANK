<template>
  <div>
    <q-carousel
      swipeable
      animated
      v-model="slide"
      infinite
      autoplay
      :height="mobileMode ? '690px' : window.width >= 1600 ? '750px' : '600px'"
      :thumbnails="mobileMode ? false : false"
    >
      <q-carousel-slide
        style="background-size: 100% 100%;"
        :name="1"
        :img-src="mobileMode ? '/assets/img/bg-mobile-with-app.png' : '/assets/img/bg-mobile-with-app.png'"
      />
      <template v-slot:control>
        <q-carousel-control :position="mobileMode ? 'left' : 'left'" class="q-gutter-xs text-left text-black">
          <q-card
            flat
            bordered
            class="my-card bg-transparent"
            :style="mobileMode ? 'padding:5px;border:0;margin-top:0px' : window.width <= 1366 ? 'border:0;margin-top:50px;' : 'border:0;margin-top:150px;'"
          >
            <q-card-section>
              <span :class="mobileMode ? 'text-primary text-h6' : 'text-primary text-h4'">Tiện ích của LVB DigiBank - All In One</span> <br />
              <p :class="mobileMode ? 'q-font-15 text-justify' : 'q-font-16 text-justify'">
                - Tất cả các dịch vụ ngân hàng đa dạng đều được thực hiện bằng LVB DigiBank,
                <br />
                bởi chính Khách hàng. Các dịch vụ phổ biến như: Thanh toán hóa đơn; <br />
                chuyển tiền trong nước và quốc tế, quản lý tài chính, mua bán ngoại tệ, gửi tiền tiết kiệm online…; <br />
                Với LVB DigiBank, khách hàng không cần phải đến giao dịch tại quầy. <br />
                - Chỉ sử dụng 01 User, sau 01 lần đăng ký, Khách hàng truy cập và sử dụng LVB DigiBank trên tất các thiết bị có kết nối Internet; <br />
                Khách hàng không còn phải nhớ nhiều User, nhiều mật khẩu. <br />
                - LVB DigiBank là ngân hàng số trọn gói cho các Cá nhân, các Doanh nghiệp và các tổ chức khác; <br />
                Khách hàng sẽ không còn phải nhớ tên nhiều dịch vụ, không còn cần cài đặt nhiều ứng dụng khác nữa. <br />
                - Xác thực thông minh, nhanh chóng và an toàn bằng tính năng SmartOTP; <br />
                đăng nhập và xác thực bằng dấu vân tay giúp cuộc sống trở nên dễ dàng hơn bao giờ hết.
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
      slide: 1,
      msg:
        "<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:Calibri, sans-serif;text-align:justify;'><span style='font-family:Times New Roman, serif;'>- Tất cả c&aacute;c dịch vụ ng&acirc;n h&agrave;ng đa dạng đều được thực hiện bằng LVB DigiBank, bởi ch&iacute;nh Kh&aacute;ch h&agrave;ng. C&aacute;c dịch vụ phổ biến như: Thanh to&aacute;n h&oacute;a đơn; chuyển tiền trong nước v&agrave; quốc tế, quản l&yacute; t&agrave;i ch&iacute;nh, mua b&aacute;n ngoại tệ, gửi tiền tiết kiệm online&hellip;; Với LVB DigiBank, kh&aacute;ch h&agrave;ng kh&ocirc;ng cần phải đến giao dịch tại quầy.</span></p> <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:Calibri, sans-serif;text-align:justify;'><span style='font-family:Times New Roman, serif;'>- Chỉ sử dụng 01 User, sau 01 lần đăng k&yacute;, Kh&aacute;ch h&agrave;ng truy cập v&agrave; sử &nbsp;dụng LVB DigiBank tr&ecirc;n tất c&aacute;c thiết bị c&oacute; kết nối Internet; Kh&aacute;ch h&agrave;ng kh&ocirc;ng c&ograve;n phải nhớ nhiều User, nhiều mật khẩu.</span></p> <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:Calibri, sans-serif;text-align:justify;'><span style='font-family:Times New Roman, serif;'>- LVB DigiBank l&agrave; ng&acirc;n h&agrave;ng số trọn g&oacute;i cho c&aacute;c C&aacute; nh&acirc;n, c&aacute;c Doanh nghiệp v&agrave; c&aacute;c tổ chức kh&aacute;c; Kh&aacute;ch h&agrave;ng sẽ kh&ocirc;ng c&ograve;n phải nhớ t&ecirc;n nhiều dịch vụ, kh&ocirc;ng c&ograve;n cần c&agrave;i đặt nhiều ứng dụng kh&aacute;c nữa.</span></p> <p><span style='font-size:15px;line-height:107%;font-family:Times New Roman, serif;'>- X&aacute;c thực th&ocirc;ng minh, nhanh ch&oacute;ng v&agrave; an to&agrave;n bằng t&iacute;nh năng SmartOTP; đăng nhập v&agrave; x&aacute;c thực bằng dấu v&acirc;n tay gi&uacute;p cuộc sống trở n&ecirc;n dễ d&agrave;ng hơn bao giờ hết.</span></p>"
    };
  },
  computed: {
    ...mapState('mobileMode', ['mobileMode']),
    ...mapState('mobileMode', ['window'])
  }
};
</script>

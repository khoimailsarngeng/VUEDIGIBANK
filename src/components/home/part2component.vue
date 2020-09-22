<template>
  <div>
    <q-carousel
      swipeable
      animated
      v-model="slide"
      infinite
      autoplay
      :height="mobileMode ? (window.width < 500 ? '1000px' : '420px') : window.width >= 1600 ? '750px' : '650px'"
      :thumbnails="mobileMode ? false : false"
    >
      <q-carousel-slide
        style="background-size: 100% 100%;"
        :name="1"
        :img-src="mobileMode ? '/assets/img/bg-mobile-app.jpg' : '/assets/img/bg-mobile-app.jpg'"
      />
      <template v-slot:control>
        <q-carousel-control :position="mobileMode ? 'left' : 'left'" class="q-gutter-xs text-left text-black">
          <q-card
            flat
            bordered
            class="my-card bg-transparent"
            :style="
              mobileMode
                ? 'padding:5px;border:0;margin-top:0px'
                : window.width <= 1366
                ? 'border:0;margin-top:5px;padding-right:453px'
                : 'border:0;margin-top:6%; padding-right: calc(100% - 700px);'
            "
          >
            <q-card-section v-if="$store.state.language.language === 'la'">
              <span :class="mobileMode ? 'text-primary text-h6 text-bold' : 'text-primary text-h4 text-bold'"
                >ຄຸນປະໂຫຍດຂອງ <span class="text-primary text-bold"> LVB </span><span class="text-red text-bold"> DigiBank </span> - All In One
              </span>
              <br />
              <br />
              <div style="margin: 0cm 0cm 8pt; line-height: 2; font-size: 20px; text-align: justify;color:#17479b">
                <p style="margin: 0 0 0px;">
                  ບັນດາບໍລິການທະນາຄານທີ່ຫຼາກຫຼາຍໄດ້ປະຕິບັດເທິງ <span class="text-primary text-bold"> LVB </span
                  ><span class="text-red text-bold"> DigiBank </span>, ດ້ວຍຕົວລູກຄ້າເອງ. ບໍລິການທີ່ໄດ້ຮັບການນິຍົມຊົມໃຊ້ເຊັ່ນ: ຊໍາລະໃບບິນ; ໂອນເງິນພາຍໃນປະເທດ ແລະ
                  ຕ່າງປະເທດ, ຄຸ້ມຄອງການເງິນ, ຊື້ຂາຍເງິນຕາ, ເງິນຝາກປະຫຍັດ...ນໍາໃຊ້ <span class="text-primary text-bold"> LVB </span
                  ><span class="text-red text-bold"> DigiBank </span>, ລູກຄ້າບໍ່ຈໍາເປັນຕ້ອງເຂົາມາທະນາຄານ.
                </p>
                <p style="margin: 0 0 0px;">
                  ນໍາໃຊ້ພຽງແຕ່ 01 User, ພາຍຫລັງລົງທະບຽນຄັ້ງດຽວ, ລູກຄ້າເຂົ້າສູ່ລະບົບ LVB DigiBank ຜ່ານບັນດາອຸປະກອນທີ່ມີການເຊື່ອມຕໍ່ອິນເຕີເນັດ
                  ໂດຍທີ່ບໍ່ຕ້ອງຈື່ຫຼາຍ User, ຫຼາຍລະຫັດຜ່ານ.
                </p>
                <p style="margin: 0 0 0px;">
                  LVB DigiBank ແມ່ນທະນາຄານດີຈີຕ້ອນແບບຄົບຊຸດສຳລັບລູກຄ້າບຸກຄົນ, ນິຕິບຸກຄົນ ແລະ ອົງການຈັດຕັ້ງອຶື່ນຯ. ລູກຄ້າຈະບໍ່ຈໍາເປັນຕ້ອງຕິດຕັ້ງຫລາຍ Application.
                </p>
                <p style="margin: 0 0 0px;">
                  ການຢັ້ງຢືນທີ່ແບບສະຫຼາດ, ວ່ອງໄວ ແລະ ປອດໄພດ້ວຍ SmartOTP; ເຂົ້າລະບົບ ແລະ ຢັ້ງຢືນດ້ວຍໃບໜ້າ, ລາຍນິ້ວມື ຊ່ວຍໃຫ້ຊີວິດງ່າຍຂື້ນກວ່າເກົ່າ.
                </p>
              </div>
            </q-card-section>
            <q-card-section v-else>
              <span :class="mobileMode ? 'text-primary text-h6 text-bold' : 'text-primary text-h4 text-bold'"
                >Tiện ích của <span class="text-primary text-bold"> LVB </span><span class="text-red text-bold"> DigiBank </span> - All In One
              </span>
              <p style="margin: 22px  0cm 8pt; line-height: 2; font-size: 15px; text-align: justify;">
                <span style="font-size:20px;line-height:107%;color:#17479B"
                  >Tất cả c&aacute;c dịch vụ ng&acirc;n h&agrave;ng đa dạng được thực hiện bằng LVB DigiBank, bởi ch&iacute;nh Kh&aacute;ch h&agrave;ng.
                  C&aacute;c dịch vụ phổ biến như: Thanh to&aacute;n h&oacute;a đơn; chuyển tiền trong nước v&agrave; quốc tế, quản l&yacute; t&agrave;i
                  ch&iacute;nh, mua b&aacute;n ngoại tệ, gửi tiền tiết kiệm &hellip; Với LVB DigiBank, kh&aacute;ch h&agrave;ng kh&ocirc;ng cần phải đến
                  ng&acirc;n h&agrave;ng.&nbsp;</span
                >
              </p>
              <p style="margin: 0cm 0cm 8pt; line-height: 2; font-size: 15px; text-align: justify">
                <span style="font-size:20px;line-height:107%;color:#17479B"
                  >Chỉ sử dụng 01 User, sau 01 lần đăng k&yacute;, Kh&aacute;ch h&agrave;ng truy cập LVB DigiBank tr&ecirc;n c&aacute;c thiết bị c&oacute; kết
                  nối Internet m&agrave; kh&ocirc;ng c&ograve;n phải nhớ nhiều User, nhiều mật khẩu.</span
                >
              </p>
              <p style="margin: 0cm 0cm 8pt; line-height: 2; font-size: 15px; text-align: justify">
                <span style="font-size:20px;line-height:107%;color:#17479B"
                  >LVB DigiBank l&agrave; ng&acirc;n h&agrave;ng số trọn g&oacute;i cho C&aacute; nh&acirc;n, Doanh nghiệp v&agrave; tổ chức kh&aacute;c.
                  Kh&aacute;ch h&agrave;ng sẽ kh&ocirc;ng cần c&agrave;i đặt nhiều ứng dụng.</span
                >
              </p>
              <p style="margin: 0cm 0cm 8pt; line-height: 2; font-size: 15px; text-align: justify">
                <span style="font-size:20px;line-height:107%;color:#17479B"
                  >X&aacute;c thực th&ocirc;ng minh, nhanh ch&oacute;ng v&agrave; an to&agrave;n với SmartOTP; đăng nhập v&agrave; x&aacute;c thực bằng
                  khu&ocirc;n mặt, dấu v&acirc;n tay gi&uacute;p cuộc sống trở n&ecirc;n dễ d&agrave;ng hơn bao giờ hết.</span
                >
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
<style scoped>
.text-primary {
  color: #17479b !important;
}
</style>

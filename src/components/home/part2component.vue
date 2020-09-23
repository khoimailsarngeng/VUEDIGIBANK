<template>
  <div>
    <div v-if="!mobileMode">
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
          :img-src="mobileMode ? '/assets/img/bg-mobile-app.png' : '/assets/img/bg-mobile-app.png'"
        />
        <template v-slot:control>
          <q-carousel-control :position="mobileMode ? 'center' : 'center'" class="full-height full-width">
            <div class="row">
              <div
                :class="window.width <= 1366 ? 'col-7 q-pt-md' : 'col-7 q-pt-md'"
                :style="window.width <= 1366 ? '' : 'padding-left:80px;padding-right: 80px;margin-top:6%'"
              >
                <q-card-section style="margin-left: 30px;" v-if="$store.state.language.language === 'la'">
                  <span :class="mobileMode ? 'text-primary text-h6 text-bold' : 'text-primary text-h4 text-bold'"
                    >ຄຸນປະໂຫຍດຂອງ <span class="text-primary text-bold"> LVB </span><span class="text-red text-bold"> DigiBank </span> - All In One
                  </span>
                  <br />
                  <br />
                  <div style="margin: 0cm 0cm 8pt; line-height: 2; font-size: 20px; text-align: justify;color:#17479b">
                    <p style="margin: 0 0 0px;">
                      <img style="margin-left: -25px;" src="/assets/img/Champa_bullet.svg" height="16px" alt="" /> ບັນດາບໍລິການທະນາຄານທີ່ຫຼາກຫຼາຍໄດ້ປະຕິບັດເທິງ
                      LVB DigiBank, ດ້ວຍຕົວລູກຄ້າເອງ. ບໍລິການທີ່ໄດ້ຮັບການນິຍົມຊົມໃຊ້ເຊັ່ນ: ຊໍາລະໃບບິນ; ໂອນເງິນພາຍໃນປະເທດ ແລະ ຕ່າງປະເທດ, ຄຸ້ມຄອງການເງິນ,
                      ຊື້ຂາຍເງິນຕາ, ເງິນຝາກປະຫຍັດ...ນໍາໃຊ້ LVB DigiBank, ລູກຄ້າບໍ່ຈໍາເປັນຕ້ອງເຂົາມາທະນາຄານ.
                    </p>
                    <p style="margin: 0 0 0px;">
                      <img style="margin-left: -25px;margin-right: -6px;" src="/assets/img/Champa_bullet.svg" height="16px" alt="" /> ນໍາໃຊ້ພຽງແຕ່ 01 User,
                      ພາຍຫລັງລົງທະບຽນຄັ້ງດຽວ, ລູກຄ້າເຂົ້າສູ່ລະບົບ LVB DigiBank ຜ່ານບັນດາອຸປະກອນທີ່ມີການເຊື່ອມຕໍ່ອິນເຕີເນັດ ໂດຍທີ່ບໍ່ຕ້ອງຈື່ຫຼາຍ User,
                      ຫຼາຍລະຫັດຜ່ານ.
                    </p>
                    <p style="margin: 0 0 0px;">
                      <img style="margin-left: -25px;" src="/assets/img/Champa_bullet.svg" height="16px" alt="" /> LVB DigiBank
                      ແມ່ນທະນາຄານດີຈີຕ້ອນແບບຄົບຊຸດສຳລັບລູກຄ້າບຸກຄົນ, ນິຕິບຸກຄົນ ແລະ ອົງການຈັດຕັ້ງອຶື່ນຯ. ລູກຄ້າຈະບໍ່ຈໍາເປັນຕ້ອງຕິດຕັ້ງຫລາຍ Application.
                    </p>
                    <p style="margin: 0 0 0px;">
                      <img style="margin-left: -25px" src="/assets/img/Champa_bullet.svg" height="16px" alt="" /> ການຢັ້ງຢືນທີ່ແບບສະຫຼາດ, ວ່ອງໄວ ແລະ ປອດໄພດ້ວຍ
                      SmartOTP; ເຂົ້າລະບົບ ແລະ ຢັ້ງຢືນດ້ວຍໃບໜ້າ, ລາຍນິ້ວມື ຊ່ວຍໃຫ້ຊີວິດງ່າຍຂື້ນກວ່າເກົ່າ.
                    </p>
                  </div>
                </q-card-section>
                <q-card-section v-if="$store.state.language.language === 'vi'" style="margin-left: 30px;">
                  <span :class="mobileMode ? 'text-primary text-h6 text-bold' : 'text-primary text-h4 text-bold'"
                    >Tiện ích của <span class="text-primary text-bold"> LVB </span><span class="text-red text-bold"> DigiBank </span> - All In One
                  </span>

                  <p style="margin: 22px  0cm 8pt; line-height: 2; font-size: 15px; text-align: justify;">
                    <img class="cls-dorkjumpa-part2" src="/assets/img/Champa_bullet.svg" height="16px" alt="" />
                    <span :style="window.width <= 1366 ? 'font-size:18px;line-height:107%;color:#17479B' : 'font-size:20px;line-height:107%;color:#17479B'"
                      >Tất cả c&aacute;c dịch vụ ng&acirc;n h&agrave;ng đa dạng được thực hiện bằng LVB DigiBank, bởi ch&iacute;nh Kh&aacute;ch h&agrave;ng.
                      C&aacute;c dịch vụ phổ biến như: Thanh to&aacute;n h&oacute;a đơn; chuyển tiền trong nước v&agrave; quốc tế, quản l&yacute; t&agrave;i
                      ch&iacute;nh, mua b&aacute;n ngoại tệ, gửi tiền tiết kiệm &hellip; Với LVB DigiBank, kh&aacute;ch h&agrave;ng kh&ocirc;ng cần phải đến
                      ng&acirc;n h&agrave;ng.&nbsp;</span
                    >
                  </p>
                  <p style="margin: 0cm 0cm 8pt; line-height: 2; font-size: 15px; text-align: justify">
                    <img class="cls-dorkjumpa-part2" src="/assets/img/Champa_bullet.svg" height="16px" alt="" />
                    <span :style="window.width <= 1366 ? 'font-size:18px;line-height:107%;color:#17479B' : 'font-size:20px;line-height:107%;color:#17479B'"
                      >Chỉ sử dụng 01 User, sau 01 lần đăng k&yacute;, Kh&aacute;ch h&agrave;ng truy cập LVB DigiBank tr&ecirc;n c&aacute;c thiết bị c&oacute;
                      kết nối Internet m&agrave; kh&ocirc;ng c&ograve;n phải nhớ nhiều User, nhiều mật khẩu.</span
                    >
                  </p>
                  <p style="margin: 0cm 0cm 8pt; line-height: 2; font-size: 15px; text-align: justify">
                    <img class="cls-dorkjumpa-part2" src="/assets/img/Champa_bullet.svg" height="16px" alt="" />
                    <span :style="window.width <= 1366 ? 'font-size:18px;line-height:107%;color:#17479B' : 'font-size:20px;line-height:107%;color:#17479B'"
                      >LVB DigiBank l&agrave; ng&acirc;n h&agrave;ng số trọn g&oacute;i cho C&aacute; nh&acirc;n, Doanh nghiệp v&agrave; tổ chức kh&aacute;c.
                      Kh&aacute;ch h&agrave;ng sẽ kh&ocirc;ng cần c&agrave;i đặt nhiều ứng dụng.</span
                    >
                  </p>
                  <p style="margin: 0cm 0cm 8pt; line-height: 2; font-size: 15px; text-align: justify">
                    <img class="cls-dorkjumpa-part2" src="/assets/img/Champa_bullet.svg" height="16px" alt="" />
                    <span :style="window.width <= 1366 ? 'font-size:18px;line-height:107%;color:#17479B' : 'font-size:20px;line-height:107%;color:#17479B'"
                      >X&aacute;c thực th&ocirc;ng minh, nhanh ch&oacute;ng v&agrave; an to&agrave;n với SmartOTP; đăng nhập v&agrave; x&aacute;c thực bằng
                      khu&ocirc;n mặt, dấu v&acirc;n tay gi&uacute;p cuộc sống trở n&ecirc;n dễ d&agrave;ng hơn bao giờ hết.</span
                    >
                  </p>
                </q-card-section>
                <q-card-section v-if="$store.state.language.language === 'en'" style="margin-left: 30px;">
                  <span :class="mobileMode ? 'text-primary text-h6 text-bold' : 'text-primary text-h4 text-bold'"
                    >Utilities of <span class="text-primary text-bold"> LVB </span><span class="text-red text-bold"> DigiBank </span> - All In One
                  </span>

                  <p style="margin: 22px  0cm 8pt; line-height: 2; font-size: 15px; text-align: justify;">
                    <img class="cls-dorkjumpa-part2" src="/assets/img/Champa_bullet.svg" height="16px" alt="" />
                    <span :style="window.width <= 1366 ? 'font-size:18px;line-height:107%;color:#17479B' : 'font-size:20px;line-height:107%;color:#17479B'"
                      >Varieties of banking services are available on LVB DigiBank at customers’ disposal. With LVB DigiBank, customers do not need to come to
                      the bank’s counter for ordinary services such as bill payment, domestic and international transfers, financial management, money exchange,
                      and deposit.</span
                    >
                  </p>
                  <p style="margin: 0cm 0cm 8pt; line-height: 2; font-size: 15px; text-align: justify">
                    <img class="cls-dorkjumpa-part2" src="/assets/img/Champa_bullet.svg" height="16px" alt="" />
                    <span :style="window.width <= 1366 ? 'font-size:18px;line-height:107%;color:#17479B' : 'font-size:20px;line-height:107%;color:#17479B'"
                      >With just only 01 user registered, customers can access LVB DigiBank on any Internet-connected devices without needing to memorize
                      several users and passwords. LVB DigiBank has full package services for individuals, companies and organisations. Customers do not need to
                      install multiple applications.</span
                    >
                  </p>
                  <p style="margin: 0cm 0cm 8pt; line-height: 2; font-size: 15px; text-align: justify">
                    <img class="cls-dorkjumpa-part2" src="/assets/img/Champa_bullet.svg" height="16px" alt="" />
                    <span :style="window.width <= 1366 ? 'font-size:18px;line-height:107%;color:#17479B' : 'font-size:20px;line-height:107%;color:#17479B'"
                      >Smart, quick and secure verification with SmartOTP; login and verification with face, fingerprint help smoothe life than ever.</span
                    >
                  </p>
                </q-card-section>
              </div>
              <div
                class="col-5"
                :style="
                  mobileMode
                    ? 'padding:5px;border:0;margin-top:0px'
                    : window.width <= 1366
                    ? 'border:0;margin-top:0px;position: relative;'
                    : `border:0;margin-top:6%;position: relative;`
                "
              >
                <img
                  src="/assets/img/Mobile-with-app.png"
                  width="100%"
                  alt=""
                  style="position: absolute;
                top: 50%;
                transform: translate(0, -50%);"
                />
              </div>
            </div>
          </q-carousel-control>
        </template>
      </q-carousel>
    </div>
    <div v-if="mobileMode && window.width < 600">
      <q-carousel
        swipeable
        animated
        v-model="slide"
        infinite
        autoplay
        :height="
          mobileMode
            ? show
              ? lang == 'la'
                ? '1400px'
                : lang == 'vi'
                ? '1300px'
                : '1250px'
              : lang == 'vi'
              ? '800px'
              : lang == 'la'
              ? '780px'
              : '790px'
            : `${(window.width * 684) / 1920}px`
        "
        :thumbnails="mobileMode ? false : false"
      >
        <q-carousel-slide
          style="background-size: 100% 100%;"
          :name="1"
          :img-src="mobileMode ? '/assets/img/mb-bg-section2.png' : '/assets/img/mb-bg-section2.png'"
        />
        <template v-slot:control>
          <q-carousel-control :position="mobileMode ? 'top' : 'top'">
            <div class="column justify-center">
              <div class="col col-md-12">
                <img src="/assets/img/Mobile-with-app.png" width="100%" alt="" />
              </div>
              <div class="col col-md-12">
                <q-card-section v-if="$store.state.language.language === 'la'" class="text-center">
                  <span :class="mobileMode ? 'text-primary text-h5 text-bold' : 'text-primary text-h5 text-bold'"
                    >ຄຸນປະໂຫຍດຂອງ <br /><span class="text-primary text-bold"> LVB </span><span class="text-red text-bold"> DigiBank </span> - All In One
                  </span>
                  <br />
                  <br />
                  <div style="margin: 0cm 0cm 8pt; line-height: 2; font-size: 18px; text-align: justify;color:#17479b">
                    <p style="margin: 0 0 0px;">
                      <img style="margin-left: -25px;" src="/assets/img/Champa_bullet.svg" height="16px" alt="" /> ບັນດາບໍລິການທະນາຄານທີ່ຫຼາກຫຼາຍໄດ້ປະຕິບັດເທິງ
                      LVB DigiBank, ດ້ວຍຕົວລູກຄ້າເອງ. ບໍລິການທີ່ໄດ້ຮັບການນິຍົມຊົມໃຊ້ເຊັ່ນ: ຊໍາລະໃບບິນ; ໂອນເງິນພາຍໃນປະເທດ ແລະ ຕ່າງປະເທດ, ຄຸ້ມຄອງການເງິນ,
                      ຊື້ຂາຍເງິນຕາ, ເງິນຝາກປະຫຍັດ...ນໍາໃຊ້ LVB DigiBank, ລູກຄ້າບໍ່ຈໍາເປັນຕ້ອງເຂົາມາທະນາຄານ.
                    </p>
                    <p style="margin: 0cm 0cm 0cm 0cm" class="text-center" v-if="!show">
                      <q-icon @click="show = !show" name="arrow_drop_down" color="red" style="font-size: 80px"></q-icon>
                    </p>
                    <p style="margin: 0 0 0px;">
                      <img style="margin-left: -25px;margin-right: -6px;" src="/assets/img/Champa_bullet.svg" height="16px" alt="" /> ນໍາໃຊ້ພຽງແຕ່ 01 User,
                      ພາຍຫລັງລົງທະບຽນຄັ້ງດຽວ, ລູກຄ້າເຂົ້າສູ່ລະບົບ LVB DigiBank ຜ່ານບັນດາອຸປະກອນທີ່ມີການເຊື່ອມຕໍ່ອິນເຕີເນັດ ໂດຍທີ່ບໍ່ຕ້ອງຈື່ຫຼາຍ User,
                      ຫຼາຍລະຫັດຜ່ານ.
                    </p>
                    <p style="margin: 0 0 0px;">
                      <img style="margin-left: -25px;" src="/assets/img/Champa_bullet.svg" height="16px" alt="" /> LVB DigiBank
                      ແມ່ນທະນາຄານດີຈີຕ້ອນແບບຄົບຊຸດສຳລັບລູກຄ້າບຸກຄົນ, ນິຕິບຸກຄົນ ແລະ ອົງການຈັດຕັ້ງອຶື່ນຯ. ລູກຄ້າຈະບໍ່ຈໍາເປັນຕ້ອງຕິດຕັ້ງຫລາຍ Application.
                    </p>
                    <p style="margin: 0 0 0px;">
                      <img style="margin-left: -25px" src="/assets/img/Champa_bullet.svg" height="16px" alt="" /> ການຢັ້ງຢືນທີ່ແບບສະຫຼາດ, ວ່ອງໄວ ແລະ ປອດໄພດ້ວຍ
                      SmartOTP; ເຂົ້າລະບົບ ແລະ ຢັ້ງຢືນດ້ວຍໃບໜ້າ, ລາຍນິ້ວມື ຊ່ວຍໃຫ້ຊີວິດງ່າຍຂື້ນກວ່າເກົ່າ.
                    </p>
                    <p style="margin: 0cm 0cm 0cm 0cm" class="text-center" v-if="show">
                      <q-icon @click="show = !show" name="arrow_drop_up" color="red" style="font-size: 80px"></q-icon>
                    </p>
                  </div>
                </q-card-section>
                <q-card-section v-if="$store.state.language.language === 'vi'" class="text-center">
                  <span :class="mobileMode ? 'text-primary text-h5 text-bold' : 'text-primary text-h5 text-bold'"
                    >Tiện ích của <br />
                    <span class="text-primary text-bold"> LVB </span><span class="text-red text-bold"> DigiBank </span> - All In One
                  </span>
                  <p style="margin: 22px  0cm 8pt; line-height: 2; font-size: 15px; text-align: justify;">
                    <img class="cls-dorkjumpa-part2" src="/assets/img/Champa_bullet.svg" height="16px" alt="" />
                    <span :style="window.width <= 1366 ? 'font-size:18px;line-height:107%;color:#17479B' : 'font-size:20px;line-height:107%;color:#17479B'"
                      >Tất cả c&aacute;c dịch vụ ng&acirc;n h&agrave;ng đa dạng được thực hiện bằng LVB DigiBank, bởi ch&iacute;nh Kh&aacute;ch h&agrave;ng.
                      C&aacute;c dịch vụ phổ biến như: Thanh to&aacute;n h&oacute;a đơn; chuyển tiền trong nước v&agrave; quốc tế, quản l&yacute; t&agrave;i
                      ch&iacute;nh, mua b&aacute;n ngoại tệ, gửi tiền tiết kiệm &hellip; Với LVB DigiBank, kh&aacute;ch h&agrave;ng kh&ocirc;ng cần phải đến
                      ng&acirc;n h&agrave;ng.&nbsp;</span
                    >
                  </p>
                  <p style="margin: 0cm 0cm 0cm 0cm" class="text-center" v-if="!show">
                    <q-icon @click="show = !show" name="arrow_drop_down" color="red" style="font-size: 80px"></q-icon>
                  </p>
                  <p style="margin: 0cm 0cm 8pt; line-height: 2; font-size: 15px; text-align: justify">
                    <img class="cls-dorkjumpa-part2" src="/assets/img/Champa_bullet.svg" height="16px" alt="" />
                    <span :style="window.width <= 1366 ? 'font-size:18px;line-height:107%;color:#17479B' : 'font-size:20px;line-height:107%;color:#17479B'"
                      >Chỉ sử dụng 01 User, sau 01 lần đăng k&yacute;, Kh&aacute;ch h&agrave;ng truy cập LVB DigiBank tr&ecirc;n c&aacute;c thiết bị c&oacute;
                      kết nối Internet m&agrave; kh&ocirc;ng c&ograve;n phải nhớ nhiều User, nhiều mật khẩu.</span
                    >
                  </p>
                  <p style="margin: 0cm 0cm 8pt; line-height: 2; font-size: 15px; text-align: justify">
                    <img class="cls-dorkjumpa-part2" src="/assets/img/Champa_bullet.svg" height="16px" alt="" />
                    <span :style="window.width <= 1366 ? 'font-size:18px;line-height:107%;color:#17479B' : 'font-size:20px;line-height:107%;color:#17479B'"
                      >LVB DigiBank l&agrave; ng&acirc;n h&agrave;ng số trọn g&oacute;i cho C&aacute; nh&acirc;n, Doanh nghiệp v&agrave; tổ chức kh&aacute;c.
                      Kh&aacute;ch h&agrave;ng sẽ kh&ocirc;ng cần c&agrave;i đặt nhiều ứng dụng.</span
                    >
                  </p>
                  <p style="margin: 0cm 0cm 8pt; line-height: 2; font-size: 15px; text-align: justify">
                    <img class="cls-dorkjumpa-part2" src="/assets/img/Champa_bullet.svg" height="16px" alt="" />
                    <span :style="window.width <= 1366 ? 'font-size:18px;line-height:107%;color:#17479B' : 'font-size:20px;line-height:107%;color:#17479B'"
                      >X&aacute;c thực th&ocirc;ng minh, nhanh ch&oacute;ng v&agrave; an to&agrave;n với SmartOTP; đăng nhập v&agrave; x&aacute;c thực bằng
                      khu&ocirc;n mặt, dấu v&acirc;n tay gi&uacute;p cuộc sống trở n&ecirc;n dễ d&agrave;ng hơn bao giờ hết.</span
                    >
                  </p>
                  <p style="margin: 0cm 0cm 0cm 0cm" class="text-center" v-if="show">
                    <q-icon @click="show = !show" name="arrow_drop_up" color="red" style="font-size: 80px"></q-icon>
                  </p>
                </q-card-section>
                <q-card-section v-if="$store.state.language.language === 'en'" class="text-center">
                  <span :class="mobileMode ? 'text-primary text-h5 text-bold' : 'text-primary text-h5 text-bold'"
                    >Utilities of <br />
                    <span class="text-primary text-bold"> LVB </span><span class="text-red text-bold"> DigiBank </span> - All In One
                  </span>

                  <p style="margin: 22px  0cm 8pt; line-height: 2; font-size: 15px; text-align: justify;">
                    <img class="cls-dorkjumpa-part2" src="/assets/img/Champa_bullet.svg" height="16px" alt="" />
                    <span :style="window.width <= 1366 ? 'font-size:18px;line-height:107%;color:#17479B' : 'font-size:20px;line-height:107%;color:#17479B'"
                      >Varieties of banking services are available on LVB DigiBank at customers’ disposal. With LVB DigiBank, customers do not need to come to
                      the bank’s counter for ordinary services such as bill payment, domestic and international transfers, financial management, money exchange,
                      and deposit.</span
                    >
                  </p>
                  <p style="margin: 0cm 0cm 0cm 0cm" class="text-center" v-if="!show">
                    <q-icon @click="show = !show" name="arrow_drop_down" color="red" style="font-size: 80px"></q-icon>
                  </p>
                  <p style="margin: 0cm 0cm 8pt; line-height: 2; font-size: 15px; text-align: justify">
                    <img class="cls-dorkjumpa-part2" src="/assets/img/Champa_bullet.svg" height="16px" alt="" />
                    <span :style="window.width <= 1366 ? 'font-size:18px;line-height:107%;color:#17479B' : 'font-size:20px;line-height:107%;color:#17479B'"
                      >With just only 01 user registered, customers can access LVB DigiBank on any Internet-connected devices without needing to memorize
                      several users and passwords. LVB DigiBank has full package services for individuals, companies and organisations. Customers do not need to
                      install multiple applications.</span
                    >
                  </p>
                  <p style="margin: 0cm 0cm 8pt; line-height: 2; font-size: 15px; text-align: justify">
                    <img class="cls-dorkjumpa-part2" src="/assets/img/Champa_bullet.svg" height="16px" alt="" />
                    <span :style="window.width <= 1366 ? 'font-size:18px;line-height:107%;color:#17479B' : 'font-size:20px;line-height:107%;color:#17479B'"
                      >Smart, quick and secure verification with SmartOTP; login and verification with face, fingerprint help smoothe life than ever.</span
                    >
                  </p>
                  <p style="margin: 0cm 0cm 0cm 0cm" class="text-center" v-if="show">
                    <q-icon @click="show = !show" name="arrow_drop_up" color="red" style="font-size: 80px"></q-icon>
                  </p>
                </q-card-section>
              </div>
            </div>
          </q-carousel-control>
        </template>
      </q-carousel>
    </div>

    <div v-if="mobileMode && window.width > 600">
      <q-carousel swipeable animated v-model="slide" infinite autoplay :height="'1200px'" :thumbnails="mobileMode ? false : false">
        <q-carousel-slide
          style="background-size: 100% 100%;"
          :name="1"
          :img-src="mobileMode ? '/assets/img/mb-bg-section2.png' : '/assets/img/mb-bg-section2.png'"
        />
        <template v-slot:control>
          <q-carousel-control :position="mobileMode ? 'top' : 'top'">
            <div class="column justify-center">
              <div class="col col-md-12">
                <img src="/assets/img/Mobile-with-app.png" width="100%" alt="" />
              </div>
              <div class="col col-md-12">
                <q-card-section v-if="$store.state.language.language === 'la'" class="text-center">
                  <span :class="mobileMode ? 'text-primary text-h5 text-bold' : 'text-primary text-h5 text-bold'"
                    >ຄຸນປະໂຫຍດຂອງ <span class="text-primary text-bold"> LVB </span><span class="text-red text-bold"> DigiBank </span> - All In One
                  </span>
                  <br />
                  <br />
                  <div style="margin: 0cm 0cm 8pt; line-height: 2; font-size: 20px; text-align: justify;color:#17479b">
                    <p style="margin: 0 0 0px;">
                      <img style="margin-left: -25px;" src="/assets/img/Champa_bullet.svg" height="16px" alt="" /> ບັນດາບໍລິການທະນາຄານທີ່ຫຼາກຫຼາຍໄດ້ປະຕິບັດເທິງ
                      LVB DigiBank, ດ້ວຍຕົວລູກຄ້າເອງ. ບໍລິການທີ່ໄດ້ຮັບການນິຍົມຊົມໃຊ້ເຊັ່ນ: ຊໍາລະໃບບິນ; ໂອນເງິນພາຍໃນປະເທດ ແລະ ຕ່າງປະເທດ, ຄຸ້ມຄອງການເງິນ,
                      ຊື້ຂາຍເງິນຕາ, ເງິນຝາກປະຫຍັດ...ນໍາໃຊ້ LVB DigiBank, ລູກຄ້າບໍ່ຈໍາເປັນຕ້ອງເຂົາມາທະນາຄານ.
                    </p>
                    <p style="margin: 0 0 0px;">
                      <img style="margin-left: -25px;margin-right: -6px;" src="/assets/img/Champa_bullet.svg" height="16px" alt="" /> ນໍາໃຊ້ພຽງແຕ່ 01 User,
                      ພາຍຫລັງລົງທະບຽນຄັ້ງດຽວ, ລູກຄ້າເຂົ້າສູ່ລະບົບ LVB DigiBank ຜ່ານບັນດາອຸປະກອນທີ່ມີການເຊື່ອມຕໍ່ອິນເຕີເນັດ ໂດຍທີ່ບໍ່ຕ້ອງຈື່ຫຼາຍ User,
                      ຫຼາຍລະຫັດຜ່ານ.
                    </p>
                    <p style="margin: 0 0 0px;">
                      <img style="margin-left: -25px;" src="/assets/img/Champa_bullet.svg" height="16px" alt="" /> LVB DigiBank
                      ແມ່ນທະນາຄານດີຈີຕ້ອນແບບຄົບຊຸດສຳລັບລູກຄ້າບຸກຄົນ, ນິຕິບຸກຄົນ ແລະ ອົງການຈັດຕັ້ງອຶື່ນຯ. ລູກຄ້າຈະບໍ່ຈໍາເປັນຕ້ອງຕິດຕັ້ງຫລາຍ Application.
                    </p>
                    <p style="margin: 0 0 0px;">
                      <img style="margin-left: -25px" src="/assets/img/Champa_bullet.svg" height="16px" alt="" /> ການຢັ້ງຢືນທີ່ແບບສະຫຼາດ, ວ່ອງໄວ ແລະ ປອດໄພດ້ວຍ
                      SmartOTP; ເຂົ້າລະບົບ ແລະ ຢັ້ງຢືນດ້ວຍໃບໜ້າ, ລາຍນິ້ວມື ຊ່ວຍໃຫ້ຊີວິດງ່າຍຂື້ນກວ່າເກົ່າ.
                    </p>
                  </div>
                </q-card-section>
                <q-card-section v-if="$store.state.language.language === 'vi'" class="text-center">
                  <span :class="mobileMode ? 'text-primary text-h5 text-bold' : 'text-primary text-h5 text-bold'"
                    >Tiện ích của <span class="text-primary text-bold"> LVB </span><span class="text-red text-bold"> DigiBank </span> - All In One
                  </span>
                  <p style="margin: 22px  0cm 8pt; line-height: 2; font-size: 15px; text-align: justify;">
                    <img class="cls-dorkjumpa-part2" src="/assets/img/Champa_bullet.svg" height="16px" alt="" />
                    <span :style="window.width <= 1366 ? 'font-size:18px;line-height:107%;color:#17479B' : 'font-size:20px;line-height:107%;color:#17479B'"
                      >Tất cả c&aacute;c dịch vụ ng&acirc;n h&agrave;ng đa dạng được thực hiện bằng LVB DigiBank, bởi ch&iacute;nh Kh&aacute;ch h&agrave;ng.
                      C&aacute;c dịch vụ phổ biến như: Thanh to&aacute;n h&oacute;a đơn; chuyển tiền trong nước v&agrave; quốc tế, quản l&yacute; t&agrave;i
                      ch&iacute;nh, mua b&aacute;n ngoại tệ, gửi tiền tiết kiệm &hellip; Với LVB DigiBank, kh&aacute;ch h&agrave;ng kh&ocirc;ng cần phải đến
                      ng&acirc;n h&agrave;ng.&nbsp;</span
                    >
                  </p>
                  <p style="margin: 0cm 0cm 8pt; line-height: 2; font-size: 15px; text-align: justify">
                    <img class="cls-dorkjumpa-part2" src="/assets/img/Champa_bullet.svg" height="16px" alt="" />
                    <span :style="window.width <= 1366 ? 'font-size:18px;line-height:107%;color:#17479B' : 'font-size:20px;line-height:107%;color:#17479B'"
                      >Chỉ sử dụng 01 User, sau 01 lần đăng k&yacute;, Kh&aacute;ch h&agrave;ng truy cập LVB DigiBank tr&ecirc;n c&aacute;c thiết bị c&oacute;
                      kết nối Internet m&agrave; kh&ocirc;ng c&ograve;n phải nhớ nhiều User, nhiều mật khẩu.</span
                    >
                  </p>
                  <p style="margin: 0cm 0cm 8pt; line-height: 2; font-size: 15px; text-align: justify">
                    <img class="cls-dorkjumpa-part2" src="/assets/img/Champa_bullet.svg" height="16px" alt="" />
                    <span :style="window.width <= 1366 ? 'font-size:18px;line-height:107%;color:#17479B' : 'font-size:20px;line-height:107%;color:#17479B'"
                      >LVB DigiBank l&agrave; ng&acirc;n h&agrave;ng số trọn g&oacute;i cho C&aacute; nh&acirc;n, Doanh nghiệp v&agrave; tổ chức kh&aacute;c.
                      Kh&aacute;ch h&agrave;ng sẽ kh&ocirc;ng cần c&agrave;i đặt nhiều ứng dụng.</span
                    >
                  </p>
                  <p style="margin: 0cm 0cm 8pt; line-height: 2; font-size: 15px; text-align: justify">
                    <img class="cls-dorkjumpa-part2" src="/assets/img/Champa_bullet.svg" height="16px" alt="" />
                    <span :style="window.width <= 1366 ? 'font-size:18px;line-height:107%;color:#17479B' : 'font-size:20px;line-height:107%;color:#17479B'"
                      >X&aacute;c thực th&ocirc;ng minh, nhanh ch&oacute;ng v&agrave; an to&agrave;n với SmartOTP; đăng nhập v&agrave; x&aacute;c thực bằng
                      khu&ocirc;n mặt, dấu v&acirc;n tay gi&uacute;p cuộc sống trở n&ecirc;n dễ d&agrave;ng hơn bao giờ hết.</span
                    >
                  </p>
                </q-card-section>
                <q-card-section v-if="$store.state.language.language === 'en'" class="text-center">
                  <span :class="mobileMode ? 'text-primary text-h5 text-bold' : 'text-primary text-h5 text-bold'"
                    >Utilities of <span class="text-primary text-bold"> LVB </span><span class="text-red text-bold"> DigiBank </span> - All In One
                  </span>

                  <p style="margin: 22px  0cm 8pt; line-height: 2; font-size: 15px; text-align: justify;">
                    <img class="cls-dorkjumpa-part2" src="/assets/img/Champa_bullet.svg" height="16px" alt="" />
                    <span :style="window.width <= 1366 ? 'font-size:18px;line-height:107%;color:#17479B' : 'font-size:20px;line-height:107%;color:#17479B'"
                      >Varieties of banking services are available on LVB DigiBank at customers’ disposal. With LVB DigiBank, customers do not need to come to
                      the bank’s counter for ordinary services such as bill payment, domestic and international transfers, financial management, money exchange,
                      and deposit.</span
                    >
                  </p>
                  <p style="margin: 0cm 0cm 8pt; line-height: 2; font-size: 15px; text-align: justify">
                    <img class="cls-dorkjumpa-part2" src="/assets/img/Champa_bullet.svg" height="16px" alt="" />
                    <span :style="window.width <= 1366 ? 'font-size:18px;line-height:107%;color:#17479B' : 'font-size:20px;line-height:107%;color:#17479B'"
                      >With just only 01 user registered, customers can access LVB DigiBank on any Internet-connected devices without needing to memorize
                      several users and passwords. LVB DigiBank has full package services for individuals, companies and organisations. Customers do not need to
                      install multiple applications.</span
                    >
                  </p>
                  <p style="margin: 0cm 0cm 8pt; line-height: 2; font-size: 15px; text-align: justify">
                    <img class="cls-dorkjumpa-part2" src="/assets/img/Champa_bullet.svg" height="16px" alt="" />
                    <span :style="window.width <= 1366 ? 'font-size:18px;line-height:107%;color:#17479B' : 'font-size:20px;line-height:107%;color:#17479B'"
                      >Smart, quick and secure verification with SmartOTP; login and verification with face, fingerprint help smoothe life than ever.</span
                    >
                  </p>
                </q-card-section>
              </div>
            </div>
          </q-carousel-control>
        </template>
      </q-carousel>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  data() {
    return {
      slide: 1,
      msg:
        "<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:Calibri, sans-serif;text-align:justify;'><span style='font-family:Times New Roman, serif;'>- Tất cả c&aacute;c dịch vụ ng&acirc;n h&agrave;ng đa dạng đều được thực hiện bằng LVB DigiBank, bởi ch&iacute;nh Kh&aacute;ch h&agrave;ng. C&aacute;c dịch vụ phổ biến như: Thanh to&aacute;n h&oacute;a đơn; chuyển tiền trong nước v&agrave; quốc tế, quản l&yacute; t&agrave;i ch&iacute;nh, mua b&aacute;n ngoại tệ, gửi tiền tiết kiệm online&hellip;; Với LVB DigiBank, kh&aacute;ch h&agrave;ng kh&ocirc;ng cần phải đến giao dịch tại quầy.</span></p> <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:Calibri, sans-serif;text-align:justify;'><span style='font-family:Times New Roman, serif;'>- Chỉ sử dụng 01 User, sau 01 lần đăng k&yacute;, Kh&aacute;ch h&agrave;ng truy cập v&agrave; sử &nbsp;dụng LVB DigiBank tr&ecirc;n tất c&aacute;c thiết bị c&oacute; kết nối Internet; Kh&aacute;ch h&agrave;ng kh&ocirc;ng c&ograve;n phải nhớ nhiều User, nhiều mật khẩu.</span></p> <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:Calibri, sans-serif;text-align:justify;'><span style='font-family:Times New Roman, serif;'>- LVB DigiBank l&agrave; ng&acirc;n h&agrave;ng số trọn g&oacute;i cho c&aacute;c C&aacute; nh&acirc;n, c&aacute;c Doanh nghiệp v&agrave; c&aacute;c tổ chức kh&aacute;c; Kh&aacute;ch h&agrave;ng sẽ kh&ocirc;ng c&ograve;n phải nhớ t&ecirc;n nhiều dịch vụ, kh&ocirc;ng c&ograve;n cần c&agrave;i đặt nhiều ứng dụng kh&aacute;c nữa.</span></p> <p><span style='font-size:15px;line-height:107%;font-family:Times New Roman, serif;'>- X&aacute;c thực th&ocirc;ng minh, nhanh ch&oacute;ng v&agrave; an to&agrave;n bằng t&iacute;nh năng SmartOTP; đăng nhập v&agrave; x&aacute;c thực bằng dấu v&acirc;n tay gi&uacute;p cuộc sống trở n&ecirc;n dễ d&agrave;ng hơn bao giờ hết.</span></p>",
      expandHeight: 0,
      show: false
    };
  },
  computed: {
    ...mapState('mobileMode', ['mobileMode']),
    ...mapState('mobileMode', ['window']),
    lang() {
      return this.$store.state.language.language;
    }
  }
};
</script>
<style scoped>
.text-primary {
  color: #17479b !important;
}
</style>

<template>
  <div>
    <div v-if="!mobileMode">
      <q-carousel
        swipeable
        animated
        v-model="slide"
        infinite
        autoplay
        :height="
          mobileMode ? (window.width < 500 ? '1000px' : '450px') : window.width >= 1600 ? '750px' : $store.state.language.language === 'la' ? '700px' : '600px'
        "
        :thumbnails="mobileMode ? false : false"
      >
        <q-carousel-slide
          style="background-size: 100% 100%;"
          :name="1"
          :img-src="mobileMode ? '/assets/img/bg-thatluang-new.png' : '/assets/img/bg-thatluang-new.png'"
        />
        <template v-slot:control>
          <q-carousel-control :position="mobileMode ? 'center' : 'center'" class="full-height full-width">
            <div class="row">
              <div
                class="col-6"
                :style="
                  mobileMode
                    ? 'padding:5px;border:0;margin-top:0px'
                    : window.width <= 1366
                    ? 'border:0;margin-top:0px;position: relative;'
                    : `border:0;margin-top:6%;position: relative;`
                "
              >
                <img
                  src="/assets/img/Thatluang2.png"
                  width="100%"
                  alt=""
                  style="position: absolute;
                top: 50%;
                transform: translate(0, -50%);"
                />
              </div>
              <div
                :class="window.width <= 1366 ? 'col-6 q-pt-md' : 'col-6 q-pt-md q-pr-xl'"
                :style="mobileMode ? 'padding:5px;border:0;margin-top:0px' : window.width <= 1366 ? 'border:0;margin-top:0px;' : `border:0;margin-top:6%;`"
              >
                <q-card-section v-if="$store.state.language.language === 'la'">
                  <span :class="mobileMode ? 'text-primary text-h6 text-bold' : 'text-primary text-h4 text-bold text-center'"
                    >ຄ່າທຳນຽມບໍລິການ <span class="text-primary text-bold"> LVB </span><span class="text-red text-bold"> DigiBank </span></span
                  >
                  <br />
                  <div style="margin: 22px 0cm 8pt; line-height: 2; font-size: 20px; text-align: justify;color:#17479b">
                    <p style="margin: 0 0 0px;">
                      <img class="cls-dorkjumpa" src="/assets/img/Champa_bullet.svg" height="16px" alt="" /> ຜູ້ຊົມໃຊ້ LVB DigiBank (ລວມມີ ບຸກຄົນ ແລະ
                      ນິຕິບຸກຄົນ) ໄດ້ຮັບການຍົກເວັ້ນທຸກຄ່າທຳນຽມລົງທະບຽນ, ຄ່າທຳນຽມນໍາໃຊ້ປະຈໍາເດືອນ.
                    </p>

                    <p style="margin: 0 0 0px;">
                      <img class="cls-dorkjumpa" src="/assets/img/Champa_bullet.svg" height="16px" alt="" /> ປະຈຸບັນ LaoVietBank
                      ກຳລັງນໍາໃຊ້ນະໂຍບາຍຍົກເວັ້ນຄ່າທຳນຽມບັນດາບໍລິການທີ່ປະຕີບັດຜ່ານ LVB DigiBank ເຊັ່ນ: ຍົກເວັ້ນຄ່າທຳນຽມໂອນເງິນພາຍໃນລະບົບ,
                      ຍົກເວັ້ນຄ່າທຳນຽມຊໍາລະໃບບິນຕ່າງ... ຄ່າທຳນຽມສໍາລັບໂອນເງິນຕ່າງປະເທດ, ໂອນເງິນໄປທະນາຄານອື່ນແມ່ນມີຄ່າທຳນຽມທີ່ດີທີ່ສຸດໃນຕະຫລາດ.
                      <a target="_blank" :href="linkfee">ລາຍລະອຽດຄ່າທໍານຽມ</a>.
                    </p>

                    <p style="margin: 0 0 0px;">
                      <img class="cls-dorkjumpa" src="/assets/img/Champa_bullet.svg" height="16px" alt="" /> ລູກຄ້າລົງທະບຽນນໍາໃຊ້ LVB DigiBank ຄັ້ງທຳອິດ
                      ເລີ່ມແຕ່ 01/10/2020 ຈະໄດ້ຮັບນະໂຍບາຍ <b>ຍົກເວັ້ນຄ່າທຳນຽມທັງໝົດ:</b>ລູກຄ້າໄດ້ຮັບການຍົກເວັ້ນທຸກຄ່າຄ່າທຳນຽມບໍລິການເທິງ LVB DigiBank ລວມທັງ
                      ຄ່າທຳນຽມໂອນເງິນຕ່າງປະເທດ, ຄ່າທຳນຽມໂອນໄປທະນາຄານອື່ນພາຍໃນປະເທດ...
                    </p>

                    <p style="margin: 0 0 0px;">
                      <img class="cls-dorkjumpa" src="/assets/img/Champa_bullet.svg" height="16px" alt="" /> ລູກຄ້າຍັງຈະໄດ້ຮັບຫຼາກຫຼາຍນະໂຍບາຍອື່ນເຊັ່ນ
                      ຮັບສ່ວນຫຼຸດທັນທີໃນເວລາຊໍາລະຄ່າສິນຄ້າຜ່ານ QR-Pay, ສ່ວນຫຼຸດໃນເວລາຊໍາລະໃບບ... ຕາມຂໍ້ກຳນົດຂອງແຕ່ລະໄລຍະ.
                    </p>
                  </div>
                </q-card-section>
                <q-card-section v-if="$store.state.language.language === 'vi'">
                  <span :class="mobileMode ? 'text-primary text-h6 text-bold' : 'text-primary text-h4 text-bold'"
                    >Phí dịch vụ <span class="text-primary text-bold"> LVB </span><span class="text-red text-bold"> DigiBank </span></span
                  >
                  <br />
                  <p style="margin: 22px 0cm 8pt; line-height: 2; font-size: 15px; text-align: justify">
                    <span :style="window.width <= 1366 ? 'font-size:18px;line-height:107%;color:#17479B' : 'font-size:20px;line-height:107%;color:#17479B'">
                      <img class="cls-dorkjumpa" src="/assets/img/Champa_bullet.svg" height="16px" alt="" /> Người d&ugrave;ng LVB DigiBank (gồm C&aacute;
                      nh&acirc;n v&agrave; Doanh nghiệp) được miễn ho&agrave;n to&agrave;n mọi loại ph&iacute; đăng k&yacute;, ph&iacute; duy tr&igrave;
                      v&agrave; sử dụng.
                    </span>
                  </p>
                  <p style="margin: 0cm 0cm 8pt; line-height: 2; font-size: 15px; text-align: justify">
                    <span :style="window.width <= 1366 ? 'font-size:18px;line-height:107%;color:#17479B' : 'font-size:20px;line-height:107%;color:#17479B'">
                      <img class="cls-dorkjumpa" src="/assets/img/Champa_bullet.svg" height="16px" alt="" /> LaoVietBank hiện &aacute;p dụng ch&iacute;nh
                      s&aacute;ch miễn ph&iacute; nhiều dịch vụ thực hiện tr&ecirc;n LVB DigiBank như: Miễn ph&iacute; chuyển tiền nội bộ; miễn ph&iacute; thanh
                      to&aacute;n h&oacute;a đơn... Chuyển tiền quốc tế, chuyển tiền Li&ecirc;n ng&acirc;n h&agrave;ng c&oacute; thu ph&iacute; với mức
                      ph&iacute; tốt nhất thị trường. Chi tiết ph&iacute; c&oacute; <a target="_blank" :href="linkfee">TẠI Đ&Acirc;Y</a>.
                    </span>
                  </p>
                  <p style="margin: 0cm 0cm 8pt; line-height: 2; font-size: 15px; text-align: justify">
                    <span :style="window.width <= 1366 ? 'font-size:18px;line-height:107%;color:#17479B' : 'font-size:20px;line-height:107%;color:#17479B'">
                      <img class="cls-dorkjumpa" src="/assets/img/Champa_bullet.svg" height="16px" alt="" /> Kh&aacute;ch h&agrave;ng đăng k&yacute; lần đầu sử
                      dụng LVB DigiBank kể từ 01/10/2020 sẽ được &aacute;p dụng ch&iacute;nh s&aacute;ch MIỄN PH&Iacute; HO&Agrave;N TO&Agrave;N: Kh&aacute;ch
                      h&agrave;ng được miễn ph&iacute; ho&agrave;n to&agrave;n mọi loại giao dịch tr&ecirc;n LVB DigiBank gồm cả ph&iacute; chuyển tiền quốc tế,
                      ph&iacute; chuyển tiền nội địa li&ecirc;n ng&acirc;n hang.
                    </span>
                  </p>
                  <p style="margin: 0cm 0cm 8pt; line-height: 2; font-size: 15px; text-align: justify">
                    <span :style="window.width <= 1366 ? 'font-size:18px;line-height:107%;color:#17479B' : 'font-size:20px;line-height:107%;color:#17479B'">
                      <img class="cls-dorkjumpa" src="/assets/img/Champa_bullet.svg" height="16px" alt="" /> Kh&aacute;ch h&agrave;ng c&ograve;n được hưởng
                      nhiều ch&iacute;nh s&aacute;ch ưu đ&atilde;i kh&aacute;c như chiết khấu khi mua h&agrave;ng bằng QR-Pay, chiết khấu khi thanh to&aacute;n
                      h&oacute;a đơn... theo quy định từng thời kỳ.
                    </span>
                  </p>
                </q-card-section>
                <q-card-section v-if="$store.state.language.language === 'en'">
                  <span :class="mobileMode ? 'text-primary text-h6 text-bold' : 'text-primary text-h4 text-bold'"
                    >Service fees of <span class="text-primary text-bold"> LVB </span><span class="text-red text-bold"> DigiBank </span></span
                  >
                  <br />
                  <p style="margin: 22px 0cm 8pt; line-height: 2; font-size: 15px; text-align: justify">
                    <span :style="window.width <= 1366 ? 'font-size:18px;line-height:107%;color:#17479B' : 'font-size:20px;line-height:107%;color:#17479B'">
                      <img class="cls-dorkjumpa" src="/assets/img/Champa_bullet.svg" height="16px" alt="" /> Users of LVB DigiBank including individuals and
                      companies are charged with no fee of registration, maintenance and usage.
                    </span>
                  </p>
                  <p style="margin: 0cm 0cm 8pt; line-height: 2; font-size: 15px; text-align: justify">
                    <span :style="window.width <= 1366 ? 'font-size:18px;line-height:107%;color:#17479B' : 'font-size:20px;line-height:107%;color:#17479B'">
                      <img class="cls-dorkjumpa" src="/assets/img/Champa_bullet.svg" height="16px" alt="" /> LaoVietBank currently applies no-fee policies for
                      several services on LVB DigiBank such as free internal transfer, bill payment, and others. international transfer, interbank transfer are
                      charged with the lowest market rate. Detail of fees is <a target="_blank" :href="linkfee">HERE</a>.
                    </span>
                  </p>
                  <p style="margin: 0cm 0cm 8pt; line-height: 2; font-size: 15px; text-align: justify">
                    <span :style="window.width <= 1366 ? 'font-size:18px;line-height:107%;color:#17479B' : 'font-size:20px;line-height:107%;color:#17479B'">
                      <img style="margin-right: -3px;" class="cls-dorkjumpa" src="/assets/img/Champa_bullet.svg" height="16px" alt="" /> New customers with
                      initial registration for LVB DigiBank will use TOTALLY FREE services starting from 01/10/2020: Customers are charged with no fee for
                      services including international transfer, domestic interbank transfer.
                    </span>
                  </p>
                  <p style="margin: 0cm 0cm 8pt; line-height: 2; font-size: 15px; text-align: justify">
                    <span
                      style="margin-right: -3px;"
                      :style="window.width <= 1366 ? 'font-size:18px;line-height:107%;color:#17479B' : 'font-size:20px;line-height:107%;color:#17479B'"
                    >
                      <img class="cls-dorkjumpa" src="/assets/img/Champa_bullet.svg" height="16px" alt="" /> Customers can also benefit from other priority
                      policies such as discount on payment via QR-Pay, discount on bill payment, and others upon periodic polcies of LaoVietBank.
                    </span>
                  </p>
                </q-card-section>
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
                ? window.width <= 320
                  ? '1230px'
                  : '900px'
                : lang == 'vi'
                ? window.width <= 320
                  ? '1150px'
                  : '900px'
                : window.width <= 320
                ? '1150px'
                : '950px'
              : lang == 'vi'
              ? window.width <= 320
                ? '650px'
                : '600px'
              : lang == 'la'
              ? window.width <= 320
                ? '730px'
                : '600px'
              : window.width <= 320
              ? '650px'
              : '600px'
            : `${(window.width * 684) / 1920}px`
        "
        :thumbnails="mobileMode ? false : false"
      >
        <q-carousel-slide
          style="background-size: 100% 100%;"
          :name="1"
          :img-src="mobileMode ? '/assets/img/mb-bg-section3.png' : '/assets/img/mb-bg-section3.png'"
        />
        <template v-slot:control>
          <q-carousel-control :position="mobileMode ? 'top' : 'top'">
            <div class="column justify-center">
              <div class="col col-md-12">
                <q-card-section v-if="$store.state.language.language === 'la'" class="text-center">
                  <span :class="mobileMode ? 'text-primary text-h5 text-bold text-center' : 'text-primary text-h5 text-bold text-center'"
                    >ຄ່າທຳນຽມບໍລິການ <br /><span class="text-primary text-bold"> LVB </span><span class="text-red text-bold"> DigiBank </span></span
                  >
                  <br />
                  <div style="margin: 22px 0cm 8pt; line-height: 2; font-size: 18px; text-align: justify;color:#17479b">
                    <p style="margin: 0 0 0px;">
                      <img class="cls-dorkjumpa" src="/assets/img/Champa_bullet.svg" height="16px" alt="" /> ຜູ້ຊົມໃຊ້ LVB DigiBank (ລວມມີ ບຸກຄົນ ແລະ
                      ນິຕິບຸກຄົນ) ໄດ້ຮັບການຍົກເວັ້ນທຸກຄ່າທຳນຽມລົງທະບຽນ, ຄ່າທຳນຽມນໍາໃຊ້ປະຈໍາເດືອນ.
                    </p>
                    <p style="margin: 0 0 0px;">
                      <img style="margin-right: 6px;margin-left: -25px;" src="/assets/img/Champa_bullet.svg" height="16px" alt="" />ປະຈຸບັນ LaoVietBank
                      ກຳລັງນໍາໃຊ້ນະໂຍບາຍຍົກເວັ້ນຄ່າທຳນຽມບັນດາບໍລິການທີ່ປະຕີບັດຜ່ານ LVB DigiBank ເຊັ່ນ: ຍົກເວັ້ນຄ່າທຳນຽມໂອນເງິນພາຍໃນລະບົບ,
                      ຍົກເວັ້ນຄ່າທຳນຽມຊໍາລະໃບບິນຕ່າງ... ຄ່າທຳນຽມສໍາລັບໂອນເງິນຕ່າງປະເທດ, ໂອນເງິນໄປທະນາຄານອື່ນແມ່ນມີຄ່າທຳນຽມທີ່ດີທີ່ສຸດໃນຕະຫລາດ.
                      <a target="_blank" :href="linkfee">ລາຍລະອຽດຄ່າທໍານຽມ</a>.
                    </p>
                    <p style="margin: 0cm 0cm 0cm 0cm" class="text-center" v-if="!show">
                      <q-icon @click="show = !show" name="arrow_drop_down" color="red" style="font-size: 80px"></q-icon>
                    </p>
                    <p v-if="show" style="margin: 0 0 0px;">
                      <img class="cls-dorkjumpa" src="/assets/img/Champa_bullet.svg" height="16px" alt="" /> ລູກຄ້າລົງທະບຽນນໍາໃຊ້ LVB DigiBank ຄັ້ງທຳອິດ
                      ເລີ່ມແຕ່ 01/10/2020 ຈະໄດ້ຮັບນະໂຍບາຍ <b>ຍົກເວັ້ນຄ່າທຳນຽມທັງໝົດ:</b>ລູກຄ້າໄດ້ຮັບການຍົກເວັ້ນທຸກຄ່າຄ່າທຳນຽມບໍລິການເທິງ LVB DigiBank ລວມທັງ
                      ຄ່າທຳນຽມໂອນເງິນຕ່າງປະເທດ, ຄ່າທຳນຽມໂອນໄປທະນາຄານອື່ນພາຍໃນປະເທດ...
                    </p>

                    <p v-if="show" style="margin: 0 0 0px;">
                      <img class="cls-dorkjumpa" src="/assets/img/Champa_bullet.svg" height="16px" alt="" /> ລູກຄ້າຍັງຈະໄດ້ຮັບຫຼາກຫຼາຍນະໂຍບາຍອື່ນເຊັ່ນ
                      ຮັບສ່ວນຫຼຸດທັນທີໃນເວລາຊໍາລະຄ່າສິນຄ້າຜ່ານ QR-Pay, ສ່ວນຫຼຸດໃນເວລາຊໍາລະໃບບ... ຕາມຂໍ້ກຳນົດຂອງແຕ່ລະໄລຍະ.
                    </p>
                    <p style="margin: 0cm 0cm 0cm 0cm" class="text-center" v-if="show">
                      <q-icon @click="show = !show" name="arrow_drop_up" color="red" style="font-size: 80px"></q-icon>
                    </p>
                  </div>
                </q-card-section>
                <q-card-section v-if="$store.state.language.language === 'vi'" class="text-center">
                  <span class="text-primary text-h5 text-bold text-center"
                    >Phí dịch vụ <br />
                    <span class="text-primary text-bold"> LVB </span><span class="text-red text-bold"> DigiBank </span></span
                  >
                  <br />
                  <p style="margin: 22px 0cm 8pt; line-height: 2; font-size: 15px; text-align: justify">
                    <span :style="window.width <= 1366 ? 'font-size:18px;line-height:107%;color:#17479B' : 'font-size:20px;line-height:107%;color:#17479B'">
                      <img class="cls-dorkjumpa" src="/assets/img/Champa_bullet.svg" height="16px" alt="" /> Người d&ugrave;ng LVB DigiBank (gồm C&aacute;
                      nh&acirc;n v&agrave; Doanh nghiệp) được miễn ho&agrave;n to&agrave;n mọi loại ph&iacute; đăng k&yacute;, ph&iacute; duy tr&igrave;
                      v&agrave; sử dụng.
                    </span>
                  </p>
                  <p style="margin: 0cm 0cm 8pt; line-height: 2; font-size: 15px; text-align: justify">
                    <span :style="window.width <= 1366 ? 'font-size:18px;line-height:107%;color:#17479B' : 'font-size:20px;line-height:107%;color:#17479B'">
                      <img class="cls-dorkjumpa" src="/assets/img/Champa_bullet.svg" height="16px" alt="" /> LaoVietBank hiện &aacute;p dụng ch&iacute;nh
                      s&aacute;ch miễn ph&iacute; nhiều dịch vụ thực hiện tr&ecirc;n LVB DigiBank như: Miễn ph&iacute; chuyển tiền nội bộ; miễn ph&iacute; thanh
                      to&aacute;n h&oacute;a đơn... Chuyển tiền quốc tế, chuyển tiền Li&ecirc;n ng&acirc;n h&agrave;ng c&oacute; thu ph&iacute; với mức
                      ph&iacute; tốt nhất thị trường. Chi tiết ph&iacute; c&oacute; <a target="_blank" :href="linkfee">TẠI Đ&Acirc;Y</a>.
                    </span>
                  </p>
                  <p style="margin: 0cm 0cm 0cm 0cm" class="text-center" v-if="!show">
                    <q-icon @click="show = !show" name="arrow_drop_down" color="red" style="font-size: 80px"></q-icon>
                  </p>
                  <p v-if="show" style="margin: 0cm 0cm 8pt; line-height: 2; font-size: 15px; text-align: justify">
                    <span :style="window.width <= 1366 ? 'font-size:18px;line-height:107%;color:#17479B' : 'font-size:20px;line-height:107%;color:#17479B'">
                      <img class="cls-dorkjumpa" src="/assets/img/Champa_bullet.svg" height="16px" alt="" /> Kh&aacute;ch h&agrave;ng đăng k&yacute; lần đầu sử
                      dụng LVB DigiBank kể từ 01/10/2020 sẽ được &aacute;p dụng ch&iacute;nh s&aacute;ch MIỄN PH&Iacute; HO&Agrave;N TO&Agrave;N: Kh&aacute;ch
                      h&agrave;ng được miễn ph&iacute; ho&agrave;n to&agrave;n mọi loại giao dịch tr&ecirc;n LVB DigiBank gồm cả ph&iacute; chuyển tiền quốc tế,
                      ph&iacute; chuyển tiền nội địa li&ecirc;n ng&acirc;n hang.
                    </span>
                  </p>
                  <p v-if="show" style="margin: 0cm 0cm 8pt; line-height: 2; font-size: 15px; text-align: justify">
                    <span :style="window.width <= 1366 ? 'font-size:18px;line-height:107%;color:#17479B' : 'font-size:20px;line-height:107%;color:#17479B'">
                      <img class="cls-dorkjumpa" src="/assets/img/Champa_bullet.svg" height="16px" alt="" /> Kh&aacute;ch h&agrave;ng c&ograve;n được hưởng
                      nhiều ch&iacute;nh s&aacute;ch ưu đ&atilde;i kh&aacute;c như chiết khấu khi mua h&agrave;ng bằng QR-Pay, chiết khấu khi thanh to&aacute;n
                      h&oacute;a đơn... theo quy định từng thời kỳ.
                    </span>
                  </p>
                  <p style="margin: 0cm 0cm 0cm 0cm" class="text-center" v-if="show">
                    <q-icon @click="show = !show" name="arrow_drop_up" color="red" style="font-size: 80px"></q-icon>
                  </p>
                </q-card-section>
                <q-card-section v-if="$store.state.language.language === 'en'" class="text-center">
                  <span :class="mobileMode ? 'text-primary text-h5 text-bold text-center' : 'text-primary text-h5 text-bold'"
                    >Service fees of <br />
                    <span class="text-primary text-bold"> LVB </span><span class="text-red text-bold"> DigiBank </span></span
                  >
                  <br />
                  <p style="margin: 22px 0cm 8pt; line-height: 2; font-size: 15px; text-align: justify">
                    <span :style="window.width <= 1366 ? 'font-size:18px;line-height:107%;color:#17479B' : 'font-size:20px;line-height:107%;color:#17479B'">
                      <img class="cls-dorkjumpa" src="/assets/img/Champa_bullet.svg" height="16px" alt="" /> Users of LVB DigiBank including individuals and
                      companies are charged with no fee of registration, maintenance and usage.
                    </span>
                  </p>
                  <p style="margin: 0cm 0cm 8pt; line-height: 2; font-size: 15px; text-align: justify">
                    <span :style="window.width <= 1366 ? 'font-size:18px;line-height:107%;color:#17479B' : 'font-size:20px;line-height:107%;color:#17479B'">
                      <img class="cls-dorkjumpa" src="/assets/img/Champa_bullet.svg" height="16px" alt="" /> LaoVietBank currently applies no-fee policies for
                      several services on LVB DigiBank such as free internal transfer, bill payment, and others. international transfer, interbank transfer are
                      charged with the lowest market rate. Detail of fees is <a target="_blank" :href="linkfee">HERE</a>.
                    </span>
                  </p>
                  <p style="margin: 0cm 0cm 0cm 0cm" class="text-center" v-if="!show">
                    <q-icon @click="show = !show" name="arrow_drop_down" color="red" style="font-size: 80px"></q-icon>
                  </p>
                  <p v-if="show" style="margin: 0cm 0cm 8pt; line-height: 2; font-size: 15px; text-align: justify">
                    <span :style="window.width <= 1366 ? 'font-size:18px;line-height:107%;color:#17479B' : 'font-size:20px;line-height:107%;color:#17479B'">
                      <img style="margin-right: -3px;" class="cls-dorkjumpa" src="/assets/img/Champa_bullet.svg" height="16px" alt="" /> New customers with
                      initial registration for LVB DigiBank will use TOTALLY FREE services starting from 01/10/2020: Customers are charged with no fee for
                      services including international transfer, domestic interbank transfer.
                    </span>
                  </p>
                  <p v-if="show" style="margin: 0cm 0cm 8pt; line-height: 2; font-size: 15px; text-align: justify">
                    <span
                      style="margin-right: -3px;"
                      :style="window.width <= 1366 ? 'font-size:18px;line-height:107%;color:#17479B' : 'font-size:20px;line-height:107%;color:#17479B'"
                    >
                      <img class="cls-dorkjumpa" src="/assets/img/Champa_bullet.svg" height="16px" alt="" /> Customers can also benefit from other priority
                      policies such as discount on payment via QR-Pay, discount on bill payment, and others upon periodic polcies of LaoVietBank.
                    </span>
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
      <q-carousel swipeable animated v-model="slide" infinite autoplay :height="'1300px'" :thumbnails="mobileMode ? false : false">
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
                  <span :class="mobileMode ? 'text-primary text-h5 text-bold text-center' : 'text-primary text-h5 text-bold text-center'"
                    >ຄ່າທຳນຽມບໍລິການ <br /><span class="text-primary text-bold"> LVB </span><span class="text-red text-bold"> DigiBank </span></span
                  >
                  <br />
                  <div style="margin: 22px 0cm 8pt; line-height: 2; font-size: 20px; text-align: justify;color:#17479b">
                    <p style="margin: 0 0 0px;">
                      <img class="cls-dorkjumpa" src="/assets/img/Champa_bullet.svg" height="16px" alt="" /> ຜູ້ຊົມໃຊ້ LVB DigiBank (ລວມມີ ບຸກຄົນ ແລະ
                      ນິຕິບຸກຄົນ) ໄດ້ຮັບການຍົກເວັ້ນທຸກຄ່າທຳນຽມລົງທະບຽນ, ຄ່າທຳນຽມນໍາໃຊ້ປະຈໍາເດືອນ.
                    </p>
                    <p style="margin: 0 0 0px;">
                      <img class="cls-dorkjumpa" src="/assets/img/Champa_bullet.svg" height="16px" alt="" /> ປະຈຸບັນ LaoVietBank
                      ກຳລັງນໍາໃຊ້ນະໂຍບາຍຍົກເວັ້ນຄ່າທຳນຽມບັນດາບໍລິການທີ່ປະຕີບັດຜ່ານ LVB DigiBank ເຊັ່ນ: ຍົກເວັ້ນຄ່າທຳນຽມໂອນເງິນພາຍໃນລະບົບ,
                      ຍົກເວັ້ນຄ່າທຳນຽມຊໍາລະໃບບິນຕ່າງ... ຄ່າທຳນຽມສໍາລັບໂອນເງິນຕ່າງປະເທດ, ໂອນເງິນໄປທະນາຄານອື່ນແມ່ນມີຄ່າທຳນຽມທີ່ດີທີ່ສຸດໃນຕະຫລາດ.
                      <a target="_blank" :href="linkfee">ລາຍລະອຽດຄ່າທໍານຽມ</a>.
                    </p>
                    <p style="margin: 0 0 0px;">
                      <img class="cls-dorkjumpa" src="/assets/img/Champa_bullet.svg" height="16px" alt="" /> ລູກຄ້າລົງທະບຽນນໍາໃຊ້ LVB DigiBank ຄັ້ງທຳອິດ
                      ເລີ່ມແຕ່ 01/10/2020 ຈະໄດ້ຮັບນະໂຍບາຍ <b>ຍົກເວັ້ນຄ່າທຳນຽມທັງໝົດ:</b>ລູກຄ້າໄດ້ຮັບການຍົກເວັ້ນທຸກຄ່າຄ່າທຳນຽມບໍລິການເທິງ LVB DigiBank ລວມທັງ
                      ຄ່າທຳນຽມໂອນເງິນຕ່າງປະເທດ, ຄ່າທຳນຽມໂອນໄປທະນາຄານອື່ນພາຍໃນປະເທດ...
                    </p>

                    <p style="margin: 0 0 0px;">
                      <img class="cls-dorkjumpa" src="/assets/img/Champa_bullet.svg" height="16px" alt="" /> ລູກຄ້າຍັງຈະໄດ້ຮັບຫຼາກຫຼາຍນະໂຍບາຍອື່ນເຊັ່ນ
                      ຮັບສ່ວນຫຼຸດທັນທີໃນເວລາຊໍາລະຄ່າສິນຄ້າຜ່ານ QR-Pay, ສ່ວນຫຼຸດໃນເວລາຊໍາລະໃບບ... ຕາມຂໍ້ກຳນົດຂອງແຕ່ລະໄລຍະ.
                    </p>
                  </div>
                </q-card-section>
                <q-card-section v-if="$store.state.language.language === 'vi'" class="text-center">
                  <span class="text-primary text-h5 text-bold text-center"
                    >Phí dịch vụ <br />
                    <span class="text-primary text-bold"> LVB </span><span class="text-red text-bold"> DigiBank </span></span
                  >
                  <br />
                  <p style="margin: 22px 0cm 8pt; line-height: 2; font-size: 15px; text-align: justify">
                    <span :style="window.width <= 1366 ? 'font-size:18px;line-height:107%;color:#17479B' : 'font-size:20px;line-height:107%;color:#17479B'">
                      <img class="cls-dorkjumpa" src="/assets/img/Champa_bullet.svg" height="16px" alt="" /> Người d&ugrave;ng LVB DigiBank (gồm C&aacute;
                      nh&acirc;n v&agrave; Doanh nghiệp) được miễn ho&agrave;n to&agrave;n mọi loại ph&iacute; đăng k&yacute;, ph&iacute; duy tr&igrave;
                      v&agrave; sử dụng.
                    </span>
                  </p>
                  <p style="margin: 0cm 0cm 8pt; line-height: 2; font-size: 15px; text-align: justify">
                    <span :style="window.width <= 1366 ? 'font-size:18px;line-height:107%;color:#17479B' : 'font-size:20px;line-height:107%;color:#17479B'">
                      <img class="cls-dorkjumpa" src="/assets/img/Champa_bullet.svg" height="16px" alt="" /> LaoVietBank hiện &aacute;p dụng ch&iacute;nh
                      s&aacute;ch miễn ph&iacute; nhiều dịch vụ thực hiện tr&ecirc;n LVB DigiBank như: Miễn ph&iacute; chuyển tiền nội bộ; miễn ph&iacute; thanh
                      to&aacute;n h&oacute;a đơn... Chuyển tiền quốc tế, chuyển tiền Li&ecirc;n ng&acirc;n h&agrave;ng c&oacute; thu ph&iacute; với mức
                      ph&iacute; tốt nhất thị trường. Chi tiết ph&iacute; c&oacute; <a target="_blank" :href="linkfee">TẠI Đ&Acirc;Y</a>.
                    </span>
                  </p>
                  <p style="margin: 0cm 0cm 8pt; line-height: 2; font-size: 15px; text-align: justify">
                    <span :style="window.width <= 1366 ? 'font-size:18px;line-height:107%;color:#17479B' : 'font-size:20px;line-height:107%;color:#17479B'">
                      <img class="cls-dorkjumpa" src="/assets/img/Champa_bullet.svg" height="16px" alt="" /> Kh&aacute;ch h&agrave;ng đăng k&yacute; lần đầu sử
                      dụng LVB DigiBank kể từ 01/10/2020 sẽ được &aacute;p dụng ch&iacute;nh s&aacute;ch MIỄN PH&Iacute; HO&Agrave;N TO&Agrave;N: Kh&aacute;ch
                      h&agrave;ng được miễn ph&iacute; ho&agrave;n to&agrave;n mọi loại giao dịch tr&ecirc;n LVB DigiBank gồm cả ph&iacute; chuyển tiền quốc tế,
                      ph&iacute; chuyển tiền nội địa li&ecirc;n ng&acirc;n hang.
                    </span>
                  </p>
                  <p style="margin: 0cm 0cm 8pt; line-height: 2; font-size: 15px; text-align: justify">
                    <span :style="window.width <= 1366 ? 'font-size:18px;line-height:107%;color:#17479B' : 'font-size:20px;line-height:107%;color:#17479B'">
                      <img class="cls-dorkjumpa" src="/assets/img/Champa_bullet.svg" height="16px" alt="" /> Kh&aacute;ch h&agrave;ng c&ograve;n được hưởng
                      nhiều ch&iacute;nh s&aacute;ch ưu đ&atilde;i kh&aacute;c như chiết khấu khi mua h&agrave;ng bằng QR-Pay, chiết khấu khi thanh to&aacute;n
                      h&oacute;a đơn... theo quy định từng thời kỳ.
                    </span>
                  </p>
                </q-card-section>
                <q-card-section v-if="$store.state.language.language === 'en'" class="text-center">
                  <span :class="mobileMode ? 'text-primary text-h5 text-bold text-center' : 'text-primary text-h5 text-bold'"
                    >Service fees <br />
                    <span class="text-primary text-bold"> LVB </span><span class="text-red text-bold"> DigiBank </span></span
                  >
                  <br />
                  <p style="margin: 22px 0cm 8pt; line-height: 2; font-size: 15px; text-align: justify">
                    <span :style="window.width <= 1366 ? 'font-size:18px;line-height:107%;color:#17479B' : 'font-size:20px;line-height:107%;color:#17479B'">
                      <img class="cls-dorkjumpa" src="/assets/img/Champa_bullet.svg" height="16px" alt="" /> Users of LVB DigiBank including individuals and
                      companies are charged with no fee of registration, maintenance and usage.
                    </span>
                  </p>
                  <p style="margin: 0cm 0cm 8pt; line-height: 2; font-size: 15px; text-align: justify">
                    <span :style="window.width <= 1366 ? 'font-size:18px;line-height:107%;color:#17479B' : 'font-size:20px;line-height:107%;color:#17479B'">
                      <img class="cls-dorkjumpa" src="/assets/img/Champa_bullet.svg" height="16px" alt="" /> LaoVietBank currently applies no-fee policies for
                      several services on LVB DigiBank such as free internal transfer, bill payment, and others. international transfer, interbank transfer are
                      charged with the lowest market rate. Detail of fees is <a target="_blank" :href="linkfee">HERE</a>.
                    </span>
                  </p>
                  <p style="margin: 0cm 0cm 8pt; line-height: 2; font-size: 15px; text-align: justify">
                    <span :style="window.width <= 1366 ? 'font-size:18px;line-height:107%;color:#17479B' : 'font-size:20px;line-height:107%;color:#17479B'">
                      <img style="margin-right: -3px;" class="cls-dorkjumpa" src="/assets/img/Champa_bullet.svg" height="16px" alt="" /> New customers with
                      initial registration for LVB DigiBank will use TOTALLY FREE services starting from 01/10/2020: Customers are charged with no fee for
                      services including international transfer, domestic interbank transfer.
                    </span>
                  </p>
                  <p style="margin: 0cm 0cm 8pt; line-height: 2; font-size: 15px; text-align: justify">
                    <span
                      style="margin-right: -3px;"
                      :style="window.width <= 1366 ? 'font-size:18px;line-height:107%;color:#17479B' : 'font-size:20px;line-height:107%;color:#17479B'"
                    >
                      <img class="cls-dorkjumpa" src="/assets/img/Champa_bullet.svg" height="16px" alt="" /> Customers can also benefit from other priority
                      policies such as discount on payment via QR-Pay, discount on bill payment, and others upon periodic polcies of LaoVietBank.
                    </span>
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
      linkfee:
        this.$store.state.language.language === 'la'
          ? `https://www.laovietbank.com.la/la/tariff/%E0%BA%A5%E0%BA%B2%E0%BA%8D%E0%BA%81%E0%BA%B2%E0%BA%99%E0%BA%84-%E0%BA%B2%E0%BA%97-%E0%BA%B2%E0%BA%99%E0%BA%BD%E0%BA%A1%E0%BA%9A-%E0%BA%A5-%E0%BA%81%E0%BA%B2%E0%BA%99%E0%BA%8A-%E0%BA%B2%E0%BA%A5%E0%BA%B0%E0%BA%AA%E0%BA%B0%E0%BA%AA%E0%BA%B2%E0%BA%87%E0%BA%AA%E0%BA%B2%E0%BA%81-%E0%BA%99.html`
          : `https://www.laovietbank.com.la/vi/tariff/phi-dich-vu-digital-banking-va-dich-vu-khac.html`,
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
  },
  watch: {
    '$store.state.language.language'(val) {
      this.linkfee =
        this.$store.state.language.language === 'la'
          ? `https://www.laovietbank.com.la/la/tariff/%E0%BA%A5%E0%BA%B2%E0%BA%8D%E0%BA%81%E0%BA%B2%E0%BA%99%E0%BA%84-%E0%BA%B2%E0%BA%97-%E0%BA%B2%E0%BA%99%E0%BA%BD%E0%BA%A1%E0%BA%9A-%E0%BA%A5-%E0%BA%81%E0%BA%B2%E0%BA%99%E0%BA%8A-%E0%BA%B2%E0%BA%A5%E0%BA%B0%E0%BA%AA%E0%BA%B0%E0%BA%AA%E0%BA%B2%E0%BA%87%E0%BA%AA%E0%BA%B2%E0%BA%81-%E0%BA%99.html`
          : `https://www.laovietbank.com.la/vi/tariff/phi-dich-vu-digital-banking-va-dich-vu-khac.html`;
    }
  }
};
</script>
<style scoped>
.text-primary {
  color: #17479b !important;
}
</style>

<template>
  <div class="spacepartonhome">
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
        :img-src="mobileMode ? '/assets/img/bg-thatluang-content.jpg' : '/assets/img/bg-thatluang-content.jpg'"
      />
      <!-- <q-carousel-slide style="background-size: 100% 100%;" :name="1" :img-src="mobileMode ? '/assets/img/bg-thatluang.jpg' : '/assets/img/bg-thatluang.jpg'" />
      <template v-slot:control>
        <q-carousel-control :position="mobileMode ? 'right' : 'right'" class="q-gutter-xs text-left text-black">
          <q-card
            flat
            bordered
            class="my-card bg-transparent"
            :style="
              mobileMode
                ? 'padding:5px;border:0;margin-top:0px'
                : window.width <= 1366
                ? 'border:0;margin-top:15px;margin-left: 24pc;padding-right: 0px;'
                : 'border:0;margin-top:2%;margin-left: 35pc;padding-right: 15px;'
            "
          >
            <q-card-section v-if="$store.state.language.language === 'la'" :style="window.width > 1600 ? 'width: 80%;' : ''">
              <span :class="mobileMode ? 'text-primary text-h6 text-bold' : 'text-primary text-h4 text-bold'"
                >ຄ່າທຳນຽມບໍລິການ <span class="text-primary text-bold"> LVB </span><span class="text-red text-bold"> DigiBank </span></span
              >
              <br />
              <div style="margin: 22px 0cm 8pt; line-height: 2; font-size: 20px; text-align: justify;color:#17479b">
                <p style="margin: 0 0 0px;">
                  ຜູ້ຊົມໃຊ້ LVB DigiBank (ລວມມີ ບຸກຄົນ ແລະ ນິຕິບຸກຄົນ) ໄດ້ຮັບການຍົກເວັ້ນທຸກຄ່າທຳນຽມລົງທະບຽນ, ຄ່າທຳນຽມນໍາໃຊ້ປະຈໍາເດືອນ.
                </p>

                <p style="margin: 0 0 0px;">
                  ປະຈຸບັນ LaoVietBank ກຳລັງນໍາໃຊ້ນະໂຍບາຍຍົກເວັ້ນຄ່າທຳນຽມບັນດາບໍລິການທີ່ປະຕີບັດຜ່ານ LVB DigiBank ເຊັ່ນ: ຍົກເວັ້ນຄ່າທຳນຽມໂອນເງິນພາຍໃນລະບົບ,
                  ຍົກເວັ້ນຄ່າທຳນຽມຊໍາລະໃບບິນຕ່າງ... ຄ່າທຳນຽມສໍາລັບໂອນເງິນຕ່າງປະເທດ, ໂອນເງິນໄປທະນາຄານອື່ນແມ່ນມີຄ່າທຳນຽມທີ່ດີທີ່ສຸດໃນຕະຫລາດ. ລາຍລະອຽດຄ່າທໍານຽມ
                  <strong>ເຂົ້າເບິ່ງລາຍລະອຽດ.</strong>
                </p>

                <p style="margin: 0 0 0px;">
                  ລູກຄ້າລົງທະບຽນນໍາໃຊ້ LVB DigiBank ຄັ້ງທຳອິດ ເລີ່ມແຕ່ 01/10/2020 ຈະໄດ້ຮັບນະໂຍບາຍ
                  <b>ຍົກເວັ້ນຄ່າທຳນຽມທັງໝົດ:</b>ລູກຄ້າໄດ້ຮັບການຍົກເວັ້ນທຸກຄ່າຄ່າທຳນຽມບໍລິການເທິງ LVB DigiBank ລວມທັງ ຄ່າທຳນຽມໂອນເງິນຕ່າງປະເທດ,
                  ຄ່າທຳນຽມໂອນໄປທະນາຄານອື່ນພາຍໃນປະເທດ...
                </p>

                <p style="margin: 0 0 0px;">
                  ລູກຄ້າຍັງຈະໄດ້ຮັບຫຼາກຫຼາຍນະໂຍບາຍອື່ນເຊັ່ນ ຮັບສ່ວນຫຼຸດທັນທີໃນເວລາຊໍາລະຄ່າສິນຄ້າຜ່ານ QR-Pay, ສ່ວນຫຼຸດໃນເວລາຊໍາລະໃບບ... ຕາມຂໍ້ກຳນົດຂອງແຕ່ລະໄລຍະ.
                </p>
              </div>
            </q-card-section>
            <q-card-section v-else :style="window.width > 1600 ? 'width: 80%;' : ''">
              <span :class="mobileMode ? 'text-primary text-h6 text-bold' : 'text-primary text-h4 text-bold'"
                >Phí dịch vụ <span class="text-primary text-bold"> LVB </span><span class="text-red text-bold"> DigiBank </span></span
              >
              <br />
              <p style="margin: 22px 0cm 8pt; line-height: 2; font-size: 15px; text-align: justify">
                <span style="font-size:20px;line-height:107%;color:#17479B">
                  Người d&ugrave;ng LVB DigiBank (gồm C&aacute; nh&acirc;n v&agrave; Doanh nghiệp) được miễn ho&agrave;n to&agrave;n mọi loại ph&iacute; đăng
                  k&yacute;, ph&iacute; duy tr&igrave; v&agrave; sử dụng.
                </span>
              </p>
              <p style="margin: 0cm 0cm 8pt; line-height: 2; font-size: 15px; text-align: justify">
                <span style="font-size:20px;line-height:107%;color:#17479B">
                  LaoVietBank hiện &aacute;p dụng ch&iacute;nh s&aacute;ch miễn ph&iacute; nhiều dịch vụ thực hiện tr&ecirc;n LVB DigiBank như: Miễn ph&iacute;
                  chuyển tiền nội bộ; miễn ph&iacute; thanh to&aacute;n h&oacute;a đơn... Chuyển tiền quốc tế, chuyển tiền Li&ecirc;n ng&acirc;n h&agrave;ng
                  c&oacute; thu ph&iacute; với mức ph&iacute; tốt nhất thị trường. Chi tiết ph&iacute; c&oacute;
                  <a target="_blank" href="https://www.laovietbank.com.la/">TẠI Đ&Acirc;Y</a>.
                </span>
              </p>
              <p style="margin: 0cm 0cm 8pt; line-height: 2; font-size: 15px; text-align: justify">
                <span style="font-size:20px;line-height:107%;color:#17479B">
                  Kh&aacute;ch h&agrave;ng đăng k&yacute; lần đầu sử dụng LVB DigiBank kể từ 01/10/2020 sẽ được &aacute;p dụng ch&iacute;nh s&aacute;ch MIỄN
                  PH&Iacute; HO&Agrave;N TO&Agrave;N: Kh&aacute;ch h&agrave;ng được miễn ph&iacute; ho&agrave;n to&agrave;n mọi loại giao dịch tr&ecirc;n LVB
                  DigiBank gồm cả ph&iacute; chuyển tiền quốc tế, ph&iacute; chuyển tiền nội địa li&ecirc;n ng&acirc;n hang.
                </span>
              </p>
              <p style="margin: 0cm 0cm 8pt; line-height: 2; font-size: 15px; text-align: justify">
                <span style="font-size:20px;line-height:107%;color:#17479B">
                  Kh&aacute;ch h&agrave;ng c&ograve;n được hưởng nhiều ch&iacute;nh s&aacute;ch ưu đ&atilde;i kh&aacute;c như chiết khấu khi mua h&agrave;ng
                  bằng QR-Pay, chiết khấu khi thanh to&aacute;n h&oacute;a đơn... theo quy định từng thời kỳ.
                </span>
              </p>
            </q-card-section>
          </q-card>
        </q-carousel-control>
      </template> -->
    </q-carousel>
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
<style scoped>
.text-primary {
  color: #17479b !important;
}
</style>

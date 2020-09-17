<template>
  <div>
    <q-carousel
      swipeable
      animated
      v-model="slide"
      infinite
      autoplay
      :height="mobileMode ? (window.width < 500 ? '1000px' : '450px') : window.width >= 1600 ? '750px' : '600px'"
      :thumbnails="mobileMode ? false : false"
    >
      <q-carousel-slide
        style="background-size: 100% 100%;"
        :name="1"
        :img-src="mobileMode ? '/assets/img/bg-thatluang-draw.png' : '/assets/img/bg-thatluang-draw.png'"
      />
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
                ? 'border:0;margin-top:20px;margin-left: 40pc;padding-right: 19px;'
                : 'border:0;margin-top:100px;margin-left: 50pc;padding-right: 42px;'
            "
          >
            <q-card-section>
              <span :class="mobileMode ? 'text-primary text-h6 text-bold' : 'text-primary text-h4 text-bold'">Phí dịch vụ</span> <br />
              <p style="margin: 22px 0cm 8pt; line-height: 2; font-size: 15px; text-align: justify">
                <span style="font-size:20px;line-height:107%;color:#17479B"
                  >Người d&ugrave;ng LVB DigiBank (gồm C&aacute; nh&acirc;n v&agrave; Doanh nghiệp) được miễn ho&agrave;n to&agrave;n mọi loại ph&iacute; đăng
                  k&yacute;, ph&iacute; duy tr&igrave; v&agrave; sử dụng.</span
                >
              </p>
              <p style="margin: 0cm 0cm 8pt; line-height: 2; font-size: 15px; text-align: justify">
                <span style="font-size:20px;line-height:107%;color:#17479B"
                  >LaoVietBank hiện &aacute;p dụng ch&iacute;nh s&aacute;ch miễn ph&iacute; nhiều dịch vụ thực hiện tr&ecirc;n LVB DigiBank như: Miễn ph&iacute;
                  chuyển tiền nội bộ; miễn ph&iacute; thanh to&aacute;n h&oacute;a đơn... Chuyển tiền quốc tế, chuyển tiền Li&ecirc;n ng&acirc;n h&agrave;ng
                  c&oacute; thu ph&iacute; với mức ph&iacute; tốt nhất thị trường. Chi tiết ph&iacute; c&oacute; TẠI Đ&Acirc;Y.</span
                >
              </p>
              <p style="margin: 0cm 0cm 8pt; line-height: 2; font-size: 15px; text-align: justify">
                <span style="font-size:20px;line-height:107%;color:#17479B"
                  >Kh&aacute;ch h&agrave;ng đăng k&yacute; lần đầu sử dụng LVB DigiBank kể từ 01/10/2020 sẽ được &aacute;p dụng ch&iacute;nh s&aacute;ch MIỄN
                  PH&Iacute; HO&Agrave;N TO&Agrave;N: Kh&aacute;ch h&agrave;ng được miễn ph&iacute; ho&agrave;n to&agrave;n mọi loại giao dịch tr&ecirc;n LVB
                  DigiBank gồm cả ph&iacute; chuyển tiền quốc tế, ph&iacute; chuyển tiền nội địa li&ecirc;n ng&acirc;n hang.</span
                >
              </p>
              <p style="margin: 0cm 0cm 8pt; line-height: 2; font-size: 15px; text-align: justify">
                <span style="font-size:20px;line-height:107%;color:#17479B"
                  >Kh&aacute;ch h&agrave;ng c&ograve;n được hưởng nhiều ch&iacute;nh s&aacute;ch ưu đ&atilde;i kh&aacute;c như chiết khấu khi mua h&agrave;ng
                  bằng QR-Pay, chiết khấu khi thanh to&aacute;n h&oacute;a đơn... theo quy định từng thời kỳ.</span
                >
              </p>
            </q-card-section>
          </q-card>
        </q-carousel-control>
      </template>
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

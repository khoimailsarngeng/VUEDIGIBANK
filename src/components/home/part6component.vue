<template>
  <div class="contact-footer spacepartonhome">
    <div v-if="!mobileMode">
      <q-carousel
        swipeable
        animated
        v-model="slide"
        infinite
        autoplay
        :height="mobileMode ? '370px' : window.width >= 1600 ? '750px' : '600px'"
        :thumbnails="mobileMode ? false : false"
      >
        <q-carousel-slide
          style="background-size: 100% 100%;"
          :name="1"
          :img-src="mobileMode ? '/assets/img/bg-tower-lvb.jpg' : '/assets/img/bg-tower-lvb.jpg'"
        />
        <template v-slot:control>
          <q-carousel-control :position="mobileMode ? 'top' : 'top'" class="q-gutter-xs text-center">
            <q-card flat bordered class="my-card bg-transparent full-width q-mt-md" style="border:0;width">
              <q-card-section v-if="$store.state.language.language === 'la'" style="line-height: 3;">
                <span :class="mobileMode ? 'text-h5 text-white' : 'text-h4 text-white'">ທະນາຄານຮ່ວມທຸລະກິດລາວຫວຽດ</span>&nbsp;

                <br />
                <span style="line-height: 3.5rem;" :class="mobileMode ? 'text-h7 text-white' : 'text-h6 text-white'">
                  44 ຖະໜົນລ້ານຊ້າງ, ເມືອງ ຈັນທະບູລີ, ນະຄອນຫຼວງວຽງຈັນ
                  <br />
                  <span style="margin-right: -5px;" class="telinfo"
                    ><a style="color: #ffffff" href="tel:+856 20 52220222">ໂທຣ/whatsApp: +856 20 52220222</a></span
                  >
                  <span class="hotline">Hotline: 1440 ext 800</span> <br />
                  Website: <a href="https://www.laovietbank.com.la/">www.laovietbank.com.la</a> – Fanpage:
                  <a href="https://www.facebook.com/LaoVietBank/">facebook.com/laovietbank</a>
                </span>
              </q-card-section>
              <q-card-section style="line-height: 3;" v-if="$store.state.language.language === 'vi'">
                <span :class="mobileMode ? 'text-h5 text-white' : 'text-h4 text-white'">NGÂN HÀNG LIÊN DOANH LÀO VIỆT</span>&nbsp;

                <br />
                <span style="line-height: 3rem;" :class="mobileMode ? 'text-h7 text-white' : 'text-h6 text-white'">
                  44 Lanexang, Chanthabouly, Thủ đô Viêng Chăn
                  <br />
                  <span class="telinfo"><a style="color: #ffffff" href="tel:+856 20 52220222">Tel/whatsApp: +856 20 52220222</a></span>
                  <span style="margin-left: -8px;" class="hotline">Hotline: 1440 ext 800 </span> <br />
                  Website: <a href="https://www.laovietbank.com.la/">www.laovietbank.com.la</a> – Fanpage:
                  <a href="https://www.facebook.com/LaoVietBank/">facebook.com/laovietbank</a>
                </span>
              </q-card-section>
              <q-card-section style="line-height: 3;" v-if="$store.state.language.language === 'en'">
                <span :class="mobileMode ? 'text-h5 text-white' : 'text-h4 text-white'">Lao Viet Joint Venture Bank</span>&nbsp;

                <br />
                <span style="line-height: 3rem;" :class="mobileMode ? 'text-h7 text-white' : 'text-h6 text-white'">
                  44 Lanexang, Chanthabouly, Vientiane Capital, Lao PDR.
                  <br />
                  <span class="telinfo"><a style="color: #ffffff" href="tel:+856 20 52220222">Tel/whatsApp: +856 20 52220222</a></span>
                  <span style="margin-left: -8px;" class="hotline">Hotline: 1440 ext 800 </span> <br />
                  Website: <a href="https://www.laovietbank.com.la/">www.laovietbank.com.la</a> – Fanpage:
                  <a href="https://www.facebook.com/LaoVietBank/">facebook.com/laovietbank</a>
                </span>
              </q-card-section>
            </q-card>
          </q-carousel-control>
        </template>
      </q-carousel>
      <div class="footer-web">
        <span>
          Copyright © 2020 LaoVietBank
          <img src="/assets/img/icon-www.svg" height="16px" />laovietbank.com.la <img src="/assets/img/icon-facebook.svg" height="16px" /> LaoVietBank
        </span>
      </div>
    </div>
    <!-- mobileMode -->
    <div v-if="mobileMode && window.width < 600">
      <q-carousel
        swipeable
        animated
        v-model="slide"
        infinite
        autoplay
        :height="mobileMode ? (lang === 'vi' ? '530px' : '500px') : window.width >= 1600 ? '750px' : '600px'"
        :thumbnails="mobileMode ? false : false"
      >
        <q-carousel-slide
          style="background-size: 100% 100%;"
          :name="1"
          :img-src="mobileMode ? '/assets/img/mb-bg-section6.png' : '/assets/img/mb-bg-section6.png'"
        />
        <template v-slot:control>
          <q-carousel-control :position="mobileMode ? 'top' : 'top'" class="text-center" style="margin-top: 0px">
            <q-card flat bordered class="my-card bg-transparent full-width" style="border:0;padding:0px">
              <q-card-section v-if="$store.state.language.language === 'la'" style="line-height: 3;padding: 5px;">
                <span class="text-h6 text-white text-bold">ທະນາຄານຮ່ວມທຸລະກິດລາວຫວຽດ</span>
                <br />
                <span style="line-height: 0" class="q-font-18 text-white">
                  44 ຖະໜົນລ້ານຊ້າງ, ເມືອງ ຈັນທະບູລີ, <br />
                  ນະຄອນຫຼວງວຽງຈັນ
                </span>
                <br />
                <span class="telinfo-mobile"><a style="color: #ffffff" href="tel:+856 20 52220222">ໂທຣ/whatsApp: +856 20 52220222</a></span> <br />
                <span style="margin-left: -8px;" class="hotline-mobile">Hotline: 1440 ext 800 </span> <br />
                <div style="margin-top: -11px" class="q-font-18 text-white">Website: <a href="https://www.laovietbank.com.la/">www.laovietbank.com.la</a></div>
                <div style="margin-top: -25px;" class="q-font-18 text-white">
                  Fanpage: <a href="https://www.facebook.com/LaoVietBank/">facebook.com/laovietbank</a>
                </div>
              </q-card-section>
              <q-card-section style="line-height: 3;padding: 9px" v-if="$store.state.language.language === 'vi'">
                <span class="text-h5 text-white text-bold"
                  >NGÂN HÀNG <br />
                  LIÊN DOANH LÀO VIỆT</span
                >&nbsp;
                <br />
                <span style="line-height: 0" class="q-font-20 text-white">
                  44 Lanexang, Chanthabouly, <br />
                  Thủ đô Viêng Chăn
                </span>
                <br />
                <span class="telinfo-mobile"><a style="color: #ffffff" href="tel:+856 20 52220222">Tel/whatsApp: +856 20 52220222</a></span> <br />
                <span style="margin-left: -8px;" class="hotline-mobile">Hotline: 1440 ext 800 </span> <br />
                <div style="margin-top: -11px" class="q-font-18 text-white">Website: <a href="https://www.laovietbank.com.la/">www.laovietbank.com.la</a></div>
                <div style="margin-top: -25px;" class="q-font-18 text-white">
                  Fanpage: <a href="https://www.facebook.com/LaoVietBank/">facebook.com/laovietbank</a>
                </div>
              </q-card-section>
              <q-card-section style="line-height: 3;" v-if="$store.state.language.language === 'en'">
                <span class="text-h5 text-white text-bold">Lao Viet Joint Venture Bank</span>
                <br />
                <span style="line-height: 0" class="q-font-20 text-white">
                  44 Lanexang, Chanthabouly, Vientiane Capital, Lao PDR.
                </span>
                <br />
                <span class="telinfo-mobile"><a style="color: #ffffff" href="tel:+856 20 52220222">Tel/whatsApp: +856 20 52220222</a></span> <br />
                <span style="margin-left: -8px;" class="hotline-mobile">Hotline: 1440 ext 800 </span> <br />
                <div style="margin-top: -11px" class="q-font-18 text-white">Website: <a href="https://www.laovietbank.com.la/">www.laovietbank.com.la</a></div>
                <div style="margin-top: -25px;" class="q-font-18 text-white">
                  Fanpage: <a href="https://www.facebook.com/LaoVietBank/">facebook.com/laovietbank</a>
                </div>
              </q-card-section>
            </q-card>
          </q-carousel-control>
        </template>
      </q-carousel>
      <div class="footer">
        <img src="/assets/img/footer (1).jpg" height="45px" width="100%" />
      </div>
    </div>
    <div v-if="mobileMode && window.width > 600">
      <q-carousel
        swipeable
        animated
        v-model="slide"
        infinite
        autoplay
        :height="mobileMode ? '455px' : window.width >= 1600 ? '750px' : '600px'"
        :thumbnails="mobileMode ? false : false"
      >
        <q-carousel-slide
          style="background-size: 100% 100%;"
          :name="1"
          :img-src="mobileMode ? '/assets/img/bg-tower-lvb.jpg' : '/assets/img/bg-tower-lvb.jpg'"
        />
        <template v-slot:control>
          <q-carousel-control :position="mobileMode ? 'top' : 'top'" class="text-center" style="margin-top: 0">
            <q-card flat bordered class="my-card bg-transparent full-width" style="border:0;width">
              <q-card-section v-if="$store.state.language.language === 'la'" style="line-height: 3;">
                <span :class="mobileMode ? 'text-h5 text-white' : 'text-h4 text-white'">ທະນາຄານຮ່ວມທຸລະກິດລາວຫວຽດ</span>&nbsp;
                <br />
                <span style="line-height: 3.5rem;" :class="mobileMode ? 'text-h7 text-white' : 'text-h6 text-white'">
                  44 ຖະໜົນລ້ານຊ້າງ, ເມືອງ ຈັນທະບູລີ, ນະຄອນຫຼວງວຽງຈັນ
                  <br />
                  <span style="margin-right: -5px;" class="telinfo"
                    ><a style="color: #ffffff" href="tel:+856 20 52220222">ໂທຣ/whatsApp: +856 20 52220222</a></span
                  >
                  <span class="hotline">Hotline: 1440 ext 800</span> <br />
                  Website: <a href="https://www.laovietbank.com.la/">www.laovietbank.com.la</a> – Fanpage:
                  <a href="https://www.facebook.com/LaoVietBank/">facebook.com/laovietbank</a>
                </span>
              </q-card-section>
              <q-card-section style="line-height: 3;" v-if="$store.state.language.language === 'vi'">
                <span :class="mobileMode ? 'text-h5 text-white' : 'text-h4 text-white'">NGÂN HÀNG LIÊN DOANH LÀO VIỆT</span>&nbsp;

                <br />
                <span style="line-height: 3rem;" :class="mobileMode ? 'text-h7 text-white' : 'text-h6 text-white'">
                  44 Lanexang, Chanthabouly, Thủ đô Viêng Chăn
                  <br />
                  <span class="telinfo"><a style="color: #ffffff" href="tel:+856 20 52220222">Tel/whatsApp: +856 20 52220222</a></span>
                  <span style="margin-left: -8px;" class="hotline">Hotline: 1440 ext 800 </span> <br />
                  Website: <a href="https://www.laovietbank.com.la/">www.laovietbank.com.la</a> – Fanpage:
                  <a href="https://www.facebook.com/LaoVietBank/">facebook.com/laovietbank</a>
                </span>
              </q-card-section>
              <q-card-section style="line-height: 3;" v-if="$store.state.language.language === 'en'">
                <span :class="mobileMode ? 'text-h5 text-white' : 'text-h4 text-white'">Lao Viet Joint Venture Bank</span>&nbsp;

                <br />
                <span style="line-height: 3rem;" :class="mobileMode ? 'text-h7 text-white' : 'text-h6 text-white'">
                  44 Lanexang, Chanthabouly, Vientiane Capital, Lao PDR.
                  <br />
                  <span class="telinfo"><a style="color: #ffffff" href="tel:+856 20 52220222">Tel/whatsApp: +856 20 52220222</a></span>
                  <span style="margin-left: -8px;" class="hotline">Hotline: 1440 ext 800 </span> <br />
                  Website: <a href="https://www.laovietbank.com.la/">www.laovietbank.com.la</a> – Fanpage:
                  <a href="https://www.facebook.com/LaoVietBank/">facebook.com/laovietbank</a>
                </span>
              </q-card-section>
            </q-card>
          </q-carousel-control>
        </template>
      </q-carousel>
      <div class="footer-web">
        <span>
          Copyright © 2020 LaoVietBank
          <img src="/assets/img/icon-www.svg" height="16px" />laovietbank.com.la <img src="/assets/img/icon-facebook.svg" height="16px" /> LaoVietBank
        </span>
      </div>
    </div>
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
    ...mapState('mobileMode', ['window']),
    lang() {
      return this.$store.state.language.language;
    }
  }
};
</script>
<style scoped>
.hotline {
  padding-top: 14px;
  padding-right: 15px;
  padding-bottom: 14px;
  background: #ffffff;
  color: red;
  padding-left: 10px;
  border-bottom-right-radius: 30px;
  border-top-right-radius: 30px;
  border-top: 1px solid #17479b;
  border-bottom: 1px solid #17479b;
  border-right: 1px solid #17479b;
}
.telinfo {
  padding-top: 15px;
  padding-left: 15px;
  padding-bottom: 15px;
  padding-right: 10px;
  background: #17479b;
  color: #ffffff;
  border-bottom-left-radius: 30px;
  border-top-left-radius: 30px;
}
.cls-text-hotline {
  background-color: #17479d;
  padding: 7px;
  border-radius: 20px;
  padding-left: 13px;
  padding-right: 13px;
}
.footer-web {
  height: 50px;
  background: rgb(0, 54, 148);
  background: linear-gradient(0deg, rgba(0, 54, 148, 1) 0%, rgba(27, 82, 179, 1) 100%);
  text-align: center;
  padding-top: 12px;
  color: #ffffff;
  font-size: 16px;
}
.text-white {
  color: #17479d !important;
  font-weight: bold;
}

.telinfo-mobile {
  padding-top: 10px;
  padding-left: 10px;
  padding-bottom: 10px;
  padding-right: 10px;
  background: #17479b;
  color: #ffffff;
  border-bottom-left-radius: 30px;
  border-top-left-radius: 30px;
  border-bottom-right-radius: 30px;
  border-top-right-radius: 30px;
}
.hotline-mobile {
  padding-top: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  background: #ffffff;
  color: red;
  padding-left: 10px;
  border-bottom-right-radius: 30px;
  border-top-right-radius: 30px;
  border-bottom-left-radius: 30px;
  border-top-left-radius: 30px;
  border-top: 1px solid #17479b;
  border-bottom: 1px solid #17479b;
  border-right: 1px solid #17479b;
  line-height: 4;
}
</style>

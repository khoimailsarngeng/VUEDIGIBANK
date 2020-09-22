<template>
  <div class="contact-footer spacepartonhome">
    <q-carousel
      swipeable
      animated
      v-model="slide"
      infinite
      autoplay
      :height="mobileMode ? '370px' : window.width >= 1600 ? '750px' : '600px'"
      :thumbnails="mobileMode ? false : false"
    >
      <q-carousel-slide style="background-size: 100% 100%;" :name="1" :img-src="mobileMode ? '/assets/img/bg-tower-lvb.jpg' : '/assets/img/bg-tower-lvb.jpg'" />
      <template v-slot:control>
        <q-carousel-control :position="mobileMode ? 'top' : 'top'" class="q-gutter-xs text-center">
          <q-card flat bordered class="my-card bg-transparent full-width q-mt-md" style="border:0;width">
            <q-card-section v-if="$store.state.language.language === 'la'" style="line-height: 3;">
              <span :class="mobileMode ? 'text-h5 text-white' : 'text-h4 text-white'">ທະນາຄານຮ່ວມທຸລະກິດລາວຫວຽດ</span>&nbsp;

              <br />
              <span style="line-height: 3.5rem;" :class="mobileMode ? 'text-h7 text-white' : 'text-h6 text-white'">
                44 ຖະໜົນລ້ານຊ້າງ, ເມືອງ ຈັນທະບູລີ, ນະຄອນຫຼວງວຽງຈັນ
                <br />
                <span class="telinfo">ໂທຣ/whatsApp: +856 20 52220222 </span> <span class="hotline">Hotline: 1440</span> <br />
                Website: <a href="https://www.laovietbank.com.la/">www.laovietbank.com.la</a> – Fanpage:
                <a href="https://www.facebook.com/LaoVietBank/">facebook.com/laovietbank</a>
              </span>
            </q-card-section>
            <q-card-section style="line-height: 3;" v-else>
              <span :class="mobileMode ? 'text-h5 text-white' : 'text-h4 text-white'">NGÂN HÀNG LIÊN DOANH LÀO VIỆT</span>&nbsp;

              <br />
              <span style="line-height: 3rem;" :class="mobileMode ? 'text-h7 text-white' : 'text-h6 text-white'">
                44 Lanexang, Chanthabouly, Thủ đô Viêng Chăn
                <br />
                <span class="telinfo">Tel/whatsApp: +856 20 52220222</span> <span style="margin-left: -8px;" class="hotline">Hotline: 1440 </span> <br />
                Website: <a href="https://www.laovietbank.com.la/">www.laovietbank.com.la</a> – Fanpage:
                <a href="https://www.facebook.com/LaoVietBank/">facebook.com/laovietbank</a>
              </span>
            </q-card-section>
          </q-card>
        </q-carousel-control>
      </template>
    </q-carousel>
    <div v-if="mobileMode" class="footer">
      <img
        :src="mobileMode ? '/assets/img/footer-mb.png' : '/assets/img/footer.jpg'"
        :style="mobileMode ? 'height:33px;width:100%;margin-bottom: -6px' : 'height:50px;width:100%;margin-bottom: -6px'"
      />
    </div>
    <div v-else class="footer-web">
      <span>
        Copyright © 2020 LaoVietBank
        <img src="/assets/img/icon-www.svg" height="16px" />laovietbank.com.la <img src="/assets/img/icon-facebook.svg" height="16px" /> LaoVietBank
      </span>
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
    ...mapState('mobileMode', ['window'])
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
</style>

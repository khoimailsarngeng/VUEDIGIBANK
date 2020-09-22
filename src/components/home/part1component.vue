<template>
  <!-- <div>
  <q-carousel
      swipeable
      animated
      v-model="slide"
      infinite
      autoplay
      :height="mobileMode ? (window.width < 500 ? '570px' : '400px') : window.width >= 1600 ? '750px' : '600px'"
      :thumbnails="mobileMode ? false : false"
    >
      <q-carousel-slide
        style="background-size: 100% 100%;"
        :name="1"
        :img-src="mobileMode ? '/assets/img/bg-section1-content.jpg' : '/assets/img/bg-section1-content.jpg'"
      />
  </q-carousel>
</div> -->
  <div class="box-product">
    <q-carousel
      swipeable
      animated
      v-model="slide"
      infinite
      autoplay
      :height="mobileMode ? (window.width < 500 ? '570px' : '400px') : window.width >= 1600 ? '750px' : '600px'"
      :thumbnails="mobileMode ? false : false"
    >
      <q-carousel-slide
        style="background-size: 100% 100%;"
        :name="1"
        :img-src="mobileMode ? '/assets/img/bg-section1-content.jpg' : '/assets/img/bg-section1-content.jpg'"
      />
      <!-- <q-carousel-slide style="background-size: 100% 100%;" :name="1" :img-src="mobileMode ? '/assets/img/bg-section1.jpg' : '/assets/img/bg-section1.jpg'" /> -->
      <!-- 
      <template v-slot:control>
        <q-carousel-control :position="mobileMode ? 'top' : 'left'">
          <img src="/assets/img/laptop-mobile.png" :style="window.width === 1366 ? 'height: 335px;margin-top: 100px;' : 'height: 335px;margin-top: 28%;'" />
        </q-carousel-control>
        <q-carousel-control :position="mobileMode ? 'right' : 'right'" class="q-gutter-xs text-left text-black">
          <q-card
            flat
            bordered
            class="my-card bg-transparent text-justify"
            :style="
              mobileMode
                ? 'border:0;margin-top:10px'
                : window.width === 1366
                ? 'border:0;margin-top:60px;margin-left: 33pc;padding-right: 1%;'
                : window.width < 1366
                ? 'border:0;margin-top:50px;margin-left: 40pc;padding-right: 1%;'
                : window.width >= 1600
                ? 'border:0;margin-top:100px;margin-left: calc(45% + 5px); padding-right: calc(5% - 0px);'
                : 'border:0;margin-top:100px;margin-left: calc(40% - 0px); padding-right: calc(10% - 0px);'
            "
          >
            <q-card-section :style="window.width > 1600 ? 'width: 80%;' : ''">
              <span v-if="$store.state.language.language === 'la'" :class="mobileMode ? 'text-primary text-h6 text-bold' : 'text-primary text-h4 text-bold'">
                ແນະນໍາກ່ຽວກັບ <span class="text-primary text-bold"> LVB </span><span class="text-red text-bold"> DigiBank </span>
              </span>
              <span v-else :class="mobileMode ? 'text-primary text-h6 text-bold' : 'text-primary text-h4 text-bold'">
                Giới thiệu <span class="text-primary text-bold"> LVB </span><span class="text-red text-bold"> DigiBank </span>
              </span>
              <br />
              <p
                v-if="$store.state.language.language === 'la'"
                class="q-font-20 text-justify text-primary "
                style="line-height: 1.5; margin-top: 10px;color: #17479b !important;text-align: justify"
              >
                <span class="text-primary text-bold"> LVB</span
                ><span class="text-red text-bold"> DigiBank </span> ແມ່ນການບໍລິການທະນາຄານດີຈີຕ້ອນຂອງທະນາຄານຮ່ວມທຸລະກິດລາວຫວຽດ.
                <br />
                LVB DigiBank ອະນຸຍາດໃຫ້ລູກຄ້າບຸກຄົນ ແລະ ນິຕິບຸກຄົນ ທີ່ນໍາໃຊ້ໂທລະສັບມືຖື, ແທັບເລັດ, ຄອມພິວເຕີຕັ້ງ ໂຕະ ແລະ ແລັບທັອບ
                ປະຕິບັດບັນດາທຸລະກຳຂອງທະນາຄານຜ່ານ <span class="text-primary text-bold"> LVB </span><span class="text-red text-bold"> DigiBank </span>Application
                ແລະ ຜ່ານຊ່ອງທາງ webite: <a href="www.laovietbank.com.la">www.laovietbank.com.la</a>
              </p>
              <p
                class="q-font-20 text-justify text-primary "
                style="line-height: 1.5; margin-top: 10px;color: #17479b !important;text-align: justify"
                v-if="$store.state.language.language === 'vi' || $store.state.language.language === 'en'"
              >
                <span class="text-primary text-bold"> LVB </span><span class="text-red text-bold"> DigiBank </span> là dịch vụ Ngân hàng số của Ngân hàng liên
                doanh Lào Việt.
              </p>
              <p
                class="q-font-20 text-justify text-primary "
                style="line-height: 1.5; margin-top: 10px;color: #17479b !important;text-align: justify"
                v-if="$store.state.language.language === 'vi' || $store.state.language.language === 'en'"
              >
                LVB DigiBank cho phép khách hàng cá nhân và doanh nghiệp sử dụng điện thoại, máy tính bảng, máy tính để bàn và máy tính xách tay để thực hiện đa
                dạng các giao dịch ngân hàng thông qua Ứng dụng LVB DigiBank và thông qua webite <a href="www.laovietbank.com.la">www.laovietbank.com.la</a>
              </p>
            </q-card-section>
          </q-card>
        </q-carousel-control>
        <q-carousel-control v-if="!mobileMode" :position="'top-right'" class="q-gutter-xs text-right">
          <img src="/assets/img/Logo-LVBDigiBank.svg" style="width:50%" alt />
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

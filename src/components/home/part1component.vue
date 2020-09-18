<template>
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
        :img-src="mobileMode ? '/assets/img/bg-patuxay-4_1.jpg' : '/assets/img/bg-patuxay-4_1.jpg'"
      />

      <template v-slot:control>
        <q-carousel-control :position="mobileMode ? 'right' : 'right'" class="q-gutter-xs text-left text-black">
          <q-card
            flat
            bordered
            class="my-card bg-transparent text-justify"
            :style="
              mobileMode
                ? 'border:0;margin-top:10px'
                : window.width === 1366
                ? 'border:0;margin-top:60px;margin-left: 33pc;padding-right: 99px;'
                : window.width < 1366
                ? 'border:0;margin-top:50px;margin-left: 40pc;padding-right: 147px;'
                : window.width >= 1600
                ? 'border:0;margin-top:100px;margin-left: calc(45% + 5px); padding-right: calc(10% - 0px);'
                : 'border:0;margin-top:100px;margin-left: calc(40% - 0px); padding-right: calc(10% - 0px);'
            "
          >
            <q-card-section :style="window.width > 1600 ? 'width: 80%;' : ''">
              <span :class="mobileMode ? 'text-primary text-h6 text-bold' : 'text-primary text-h4 text-bold'"
                >{{ $store.state.language.language === 'la' ? `ແນະນໍາກ່ຽວກັບ LVB DigiBank` : `Giới thiệu LVB DigiBank` }}
              </span>
              <br />
              <!-- <p :class="mobileMode ? 'q-font-15 text-justify text-primary ' : 'q-font-20 text-justify text-primary '" style="margin-top: 10px;">
                LVB DigiBank là dịch vụ Ngân hàng số của Ngân hàng liên doanh Lào Việt.
                <br />
                LVB DigiBank cho phép khách hàng cá nhân và doanh nghiệp sử dụng điện thoại, máy tính bảng, máy tính xách tay và máy tính để bàn... tự mình thực
                hiện đa dạng các giao dịch ngân hàng thông qua Ứng dụng LVB DigiBank trên điện thoại, máy tính bảng và thông qua webite
                <a href="www.laovietbank.com.la">www.laovietbank.com.la</a>
              </p> -->
              <p
                v-if="$store.state.language.language === 'la'"
                class="q-font-20 text-justify text-primary "
                style="line-height: 1.5; margin-top: 10px;color: #17479b !important;text-align: justify"
              >
                LVB DigiBank ແມ່ນການບໍລິການທະນາຄານດີຈີຕ້ອນຂອງທະນາຄານຮ່ວມທຸລະກິດລາວຫວຽດ.
                <br />
                LVB DigiBank ອະນຸຍາດໃຫ້ລູກຄ້າບຸກຄົນ ແລະ ນິຕິບຸກຄົນ ທີ່ນໍາໃຊ້ໂທລະສັບມືຖື, ແທັບເລັດ, ຄອມພິວເຕີຕັ້ງ ໂຕະ ແລະ ແລັບທັອບ
                ປະຕິບັດບັນດາທຸລະກຳຂອງທະນາຄານຜ່ານ LVB DigiBank Application ແລະ ຜ່ານຊ່ອງທາງ webite: <a href="www.laovietbank.com.la">www.laovietbank.com.la</a>
              </p>
              <p class="q-font-20 text-justify text-primary " style="line-height: 1.5; margin-top: 10px;color: #17479b !important;text-align: justify" v-else>
                LVB DigiBank là dịch vụ Ngân hàng số của Ngân hàng liên doanh Lào Việt. <br data-v-650b6db8="" />
                LVB DigiBank cho phép khách hàng cá nhân và doanh nghiệp sử dụng điện thoại, máy tính bảng, máy tính để bàn và máy tính xách tay để thực hiện đa
                dạng các giao dịch ngân hàng thông qua Ứng dụng LVB DigiBank và thông qua webite
                <a href="www.laovietbank.com.la">www.laovietbank.com.la</a>
              </p>
            </q-card-section>
          </q-card>
        </q-carousel-control>
        <q-carousel-control v-if="!mobileMode" :position="'top-right'" class="q-gutter-xs text-right">
          <img src="/assets/img/Logo-LVBDigiBank.png" style="width:277px;height:60px" alt />
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

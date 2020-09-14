<template>
  <div>
    <q-carousel
      swipeable
      animated
      v-model="slide"
      infinite
      autoplay
      :height="mobileMode ? '650px' : window.width >= 1600 ? '750px' : '600px'"
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
                ? 'border:0;margin-top:100px;margin-left: 40pc;'
                : 'border:0;margin-top:100px;margin-left: 50pc;'
            "
          >
            <q-card-section>
              <span :class="mobileMode ? 'text-primary text-h6' : 'text-primary text-h4'">Phí dịch vụ</span> <br />
              <p :class="mobileMode ? 'q-font-15' : 'q-font-16 text-justify'">
                - Người dùng LVB DigiBank (gồm cả Cá nhân và Doanh nghiệp) được miễn hoàn toàn mọi loại phí đăng, phí duy trì và sử dụng.
                <br />
                - LaoVietBank hiện đang áp dụng chính sách miễn phí nhiều dịch vụ thực hiện trên LVB DigiBank như: Miễn phí chuyển tiền nội bộ; miễn phí thanh
                toán nhiều loại hóa đơn... Một số dịch vụ gồm Chuyển tiền quốc tế, chuyển tiền Liên ngân hàng có thu phí với mức phí tốt nhất thị trường. Chi
                tiết phí có TẠI ĐÂY. <br />
                - Riêng với khách hàng mới đăng ký sử dụng LVB DigiBank kể từ 01/10/2020 sẽ được áp dụng chính sách MIỄN PHÍ HOÀN TOÀN: Khách hàng được miễn phí
                hoàn toàn mọi loại giao dịch trên LVB DigiBank gồm cả Phí Thanh toán quốc tế, Phí chuyển tiền nội địa liên ngân hàng... <br />
                - Khách hàng còn được hưởng nhiều chính sách ưu đã khác như triết khấu khi mua hàng bằng quyets QR-Pay, triết khấu khi thanh toán Hóa đơn...
                theo quy định từng thời kỳ.
              </p>
            </q-card-section>
          </q-card>
        </q-carousel-control>
      </template>
    </q-carousel>
    <!-- <div class="q-pa-sm q-mt-lg">
      <div class="row q-col-gutter-xs" v-if="$q.screen.name == 'xs'">
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 text-center q-pt-lg">
          <img src="/assets/img/Logo-LVBDigiBank.png" :width="mobileMode ? '80%' : ''" height="100px" alt />
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 text-center q-pt-lg">
          <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 text-center'">
            <span class="text-primary q-font-22">Phí dịch vụ </span> <br />
            Khách hàng mới đăng ký dịch vụ LVB DigiBank được miến tất cả phí sử dụng dịch vụ như: phí thường niên, chuyển tiền trong hệ thống, chuyển tiền liên
            ngân hàng, chuyển tiền quốc tế, chuyển tiên 24/7.
          </div>
        </div>
      </div>
      <div class="row q-col-gutter-xs" v-else>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 text-center q-pt-lg">
          <img src="/assets/img/Logo-LVBDigiBank.png" :width="mobileMode ? '80%' : ''" height="100px" alt />
        </div>
        <div :class="$q.screen.name === 'xs' ? 'col-xs-12 col-sm-6 col-md-6 col-lg-6 text-center' : 'col-xs-12 col-sm-6 col-md-6 col-lg-6 text-left q-pt-lg'">
          <span class="text-primary q-font-22">Phí dịch vụ</span> <br />
          Khách hàng mới đăng ký dịch vụ LVB DigiBank được miến tất cả phí sử dụng dịch vụ như: phí thường niên, chuyển tiền trong hệ thống, chuyển tiền liên
          ngân hàng, chuyển tiền quốc tế, chuyển tiên 24/7.
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
      slide: 1
    };
  },
  computed: {
    ...mapState('mobileMode', ['mobileMode']),
    ...mapState('mobileMode', ['window'])
  }
};
</script>

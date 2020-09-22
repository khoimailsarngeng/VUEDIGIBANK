<template>
  <div style="margin-top:10px">
    <q-carousel
      swipeable
      animated
      v-model="slide"
      infinite
      autoplay
      :height="
        mobileMode ? (window.width < 500 ? '1000px' : '450px') : window.width >= 1600 ? '500px' : $store.state.language.language === 'la' ? '500px' : '500px'
      "
      :thumbnails="mobileMode ? false : false"
    >
      <q-carousel-slide style="background-size: 100% 100%;" :name="1" :img-src="mobileMode ? '/assets/img/bg-register.jpg' : '/assets/img/bg-register.jpg'" />
      <template v-slot:control>
        <q-carousel-control position="top" class="text-center q-pt-xl">
          <div class="col-xs-12 text-h4 text-bold text-primary" v-if="!mobileMode && $store.state.language.language === 'vi'">
            Đăng kí dịch vụ <span class="text-primary text-bold"> LVB </span><span class="text-red text-bold"> DigiBank </span>
          </div>
          <div class="col-xs-12 text-h4 text-bold text-primary" v-if="!mobileMode && $store.state.language.language === 'la'">
            ລົງທະບຽນ <span class="text-primary text-bold"> LVB </span><span class="text-red text-bold"> DigiBank </span>
          </div>
          <div class="col-xs-12 text-h4 text-bold text-primary" v-if="!mobileMode && $store.state.language.language === 'en'">
            Registration <span class="text-primary text-bold"> LVB </span><span class="text-red text-bold"> DigiBank </span>
          </div>
          <div class="slide-pro" v-if="!mobileMode">
            <ul>
              <li style="width:230px;margin:0 8% 30px 0%" :class="window.height > 635 ? 'li' : 'li'">
                <a
                  :href="
                    $store.state.language.language === 'la'
                      ? 'https://www.laovietbank.com.la/la/page/ສ-ານ-ກງານໃຫຍ-ສາຂາ-ສ-ນ-ໃຫ-ບ-ລ-ການ.html'
                      : $store.state.language.language === 'vi'
                      ? 'https://www.laovietbank.com.la/vi/page/tru-so-chinh-chi-nhanh-pgd.html'
                      : 'https://www.laovietbank.com.la/en_US/page/head-office-branch-transaction.html'
                  "
                  target="_blank"
                >
                  <span class="product-thumb">
                    <img src="/assets/img/icon-web-bank.svg" alt="Đến ngần hàng đăng ký" />
                  </span>
                  <br />
                  <span class="text-primary q-font-20">{{
                    $store.state.language.language === 'la'
                      ? 'ລູກຄ້າເຂົ້າມາ LaoVietBank'
                      : $store.state.language.language === 'vi'
                      ? 'Đến ngân hàng đăng ký'
                      : 'Customers register '
                  }}</span>
                  <q-btn
                    @click="
                      $store.state.language.language === 'la'
                        ? window.open('https://www.laovietbank.com.la/la/page/ສ-ານ-ກງານໃຫຍ-ສາຂາ-ສ-ນ-ໃຫ-ບ-ລ-ການ.html', '_blank')
                        : $store.state.language.language === 'vi'
                        ? window.open('https://www.laovietbank.com.la/vi/page/tru-so-chinh-chi-nhanh-pgd.html', '_blank')
                        : window.open('https://www.laovietbank.com.la/en_US/page/head-office-branch-transaction.html', '_blank')
                    "
                    class="q-font-12"
                    unelevated
                    rounded
                    color="primary"
                    :label="
                      $store.state.language.language === 'la'
                        ? 'ເຄືອຂ່າຍຂໍ້ມູນຂ່າວສານ >'
                        : $store.state.language.language === 'vi'
                        ? 'Danh sách điểm giao dịch >'
                        : 'Branchs network >'
                    "
                  />
                </a>
              </li>
              <li
                :style="
                  window.width > 1366
                    ? 'width:350px;margin:0 0% 30px 0%'
                    : window.width <= 1366
                    ? 'width:350px;margin:0 0% 30px -2%'
                    : 'width:350px;margin:0 0% 30px 0%'
                "
                :class="window.height > 635 ? 'li' : 'li'"
              >
                <a
                  :href="
                    $store.state.language.language === 'la'
                      ? 'https://www.laovietbank.com.la/files/img_SanPhamDichVu/Huong_Dan_Su_Dung_MB_Retail_FN_Tieng%20Lao.pdf'
                      : 'https://laovietbank.com.la/files/img_SanPhamDichVu/Huong_Dan_Su_Dung_MB_Retail_FN_TiengViet.pdf'
                  "
                  target="_blank"
                >
                  <span class="product-thumb">
                    <img src="/assets/img/icon-web-download.svg" alt="Cài đặt ứng dụng" />
                  </span>
                  <br />
                  <span class="text-primary q-font-20">{{
                    $store.state.language.language === 'la'
                      ? 'ຕິດຕັ້ງ App '
                      : $store.state.language.language === 'vi'
                      ? 'Cài đặt ứng dụng/Truy cập website'
                      : 'Install application'
                  }}</span
                  ><br />
                  <q-btn
                    @click="
                      $store.state.language.language === 'la'
                        ? window.open('https://www.laovietbank.com.la/files/img_SanPhamDichVu/Huong_Dan_Su_Dung_MB_Retail_FN_Tieng%20Lao.pdf', '_blank')
                        : window.open('https://laovietbank.com.la/files/img_SanPhamDichVu/Huong_Dan_Su_Dung_MB_Retail_FN_TiengViet.pdf', '_blank')
                    "
                    class="q-font-12"
                    unelevated
                    rounded
                    color="primary"
                    :label="
                      $store.state.language.language === 'la'
                        ? 'ຄູ່ມືເອກະສານ >'
                        : $store.state.language.language === 'vi'
                        ? 'Tài liệu hướng dẫn >'
                        : 'Document guide >'
                    "
                  />
                </a>
              </li>
              <li :class="window.height > 635 ? 'li' : 'li'">
                <a>
                  <span class="product-thumb">
                    <img src="/assets/img/icon-web-login.svg" alt="Login: www.laovietbank.com.la" />
                  </span>
                  <br />
                  <span class="text-primary q-font-20">{{
                    $store.state.language.language === 'la'
                      ? `Login ເຂົ້ານໍາໃຊ້ບໍລິການ`
                      : $store.state.language.language === 'vi'
                      ? 'Truy cập sử dụng dịch vụ'
                      : 'Login to use services'
                  }}</span>
                  <q-btn
                    class="q-font-12"
                    unelevated
                    rounded
                    color="primary"
                    :label="
                      $store.state.language.language === 'la'
                        ? 'ຄູ່ມືເຂົ້າສູ່ລະບົບ >'
                        : $store.state.language.language === 'vi'
                        ? 'Hướng dẫn Login >'
                        : 'Guide login >'
                    "
                  />
                </a>
              </li>
            </ul>
          </div>
          <div class="slide-pro-mobile" v-if="mobileMode">
            <q-carousel swipeable animated v-model="slide" infinite transition-prev="scale" transition-next="scale" control-color="white" navigation>
              <q-carousel-slide :name="1">
                <q-card-section>
                  <a href="https://www.laovietbank.com.la/vi/page/tru-so-chinh-chi-nhanh-pgd.html" target="_blank">
                    <span class="product-thumb-mobile">
                      <img src="/assets/img/icon-web-bank.svg" alt="Đến ngần hàng đăng ký" />
                    </span>
                  </a>
                  <h6 class="text-white">Đến ngần hàng đăng ký</h6>
                </q-card-section>
              </q-carousel-slide>
              <q-carousel-slide :name="2">
                <a href="https://www.laovietbank.com.la/" target="_blank">
                  <span class="product-thumb-mobile">
                    <img src="/assets/img/icon-web-download.svg" alt="Cài đặt ứng dụng" />
                  </span>
                  <h6 class="text-white">
                    Cài đặt hoặc truy cập
                    <br />trực tiếp ứng dụng
                  </h6>
                </a>
              </q-carousel-slide>
              <q-carousel-slide :name="3">
                <a>
                  <span class="product-thumb-mobile">
                    <img src="/assets/img/icon-web-login.svg" alt="Login/sử dụng" />
                  </span>
                  <h6 class="text-primary">Truy cập sử dụng dịch vụ</h6>
                </a>
              </q-carousel-slide>
            </q-carousel>
          </div>
        </q-carousel-control>
      </template>
    </q-carousel>
    <!-- <div class="col-xs-12 text-h4 text-bold text-primary" v-if="!mobileMode">Đăng kí dịch vụ <span class="text-primary text-bold"> LVB </span><span class="text-red text-bold"> DigiBank </span></div>
    <div class="slide-pro" v-if="!mobileMode">
      <ul>
        <li style="width:230px;margin:0 8% 30px 0%" :class="window.height > 635 ? 'li' : 'li'">
          <a href="https://www.laovietbank.com.la/vi/page/tru-so-chinh-chi-nhanh-pgd.html" target="_blank">
            <span class="product-thumb">
              <img src="/assets/img/icon-web-bank.svg" alt="Đến ngần hàng đăng ký" />
            </span>
            <br />
            <span class="text-primary q-font-20">{{
              $store.state.language.language === 'la' ? 'ລູກຄ້າເຂົ້າມາ LaoVietBank' : 'Đến ngân hàng đăng ký'
            }}</span>
            <q-btn
              @click="window.open('https://www.laovietbank.com.la/vi/page/tru-so-chinh-chi-nhanh-pgd.html', '_blank')"
              class="q-font-12"
              unelevated
              rounded
              color="primary"
              label="Danh sách điểm giao dịch >"
            />
          </a>
        </li>
        <li :style="window.width > 1366 ? 'width:350px;margin:0 0% 30px 0%' : 'width:350px;margin:0 0% 30px 1%'" :class="window.height > 635 ? 'li' : 'li'">
          <a href="https://www.laovietbank.com.la/" target="_blank">
            <span class="product-thumb">
              <img src="/assets/img/icon-web-download.svg" alt="Cài đặt ứng dụng" />
            </span>
            <br />
            <span class="text-primary q-font-20">{{
              $store.state.language.language === 'la'
                ? 'ຕິດຕັ້ງ App '
                : 'Cài đặt ứng dụng'
            }}</span><br>
            <q-btn
              @click="window.open('https://www.laovietbank.com.la/', '_blank')"
              class="q-font-12"
              unelevated
              rounded
              color="primary"
              label="Tài liệu hướng dẫn >"
            />
          </a>
        </li>
        <li :class="window.height > 635 ? 'li' : 'li'">
          <a>
            <span class="product-thumb">
              <img src="/assets/img/icon-web-login.svg" alt="Login: www.laovietbank.com.la" />
            </span>
            <br />
            <span class="text-primary q-font-20">{{ $store.state.language.language === 'la' ? `Login ເຂົ້ານໍາໃຊ້ບໍລິການ` : 'Truy cập sử dụng dịch vụ' }}</span>
            <q-btn class="q-font-12" unelevated rounded color="primary" label="Hướng dẫn Login >" />
          </a>
        </li>
      </ul>
    </div>
    <div class="slide-pro-mobile" v-if="mobileMode">
      <q-carousel swipeable animated v-model="slide" infinite transition-prev="scale" transition-next="scale" control-color="white" navigation>
        <q-carousel-slide :name="1">
          <q-card-section>
            <a href="https://www.laovietbank.com.la/vi/page/tru-so-chinh-chi-nhanh-pgd.html" target="_blank">
              <span class="product-thumb-mobile">
                <img src="/assets/img/icon-web-bank.svg" alt="Đến ngần hàng đăng ký" />
              </span>
            </a>
            <h6 class="text-white">Đến ngần hàng đăng ký</h6>
          </q-card-section>
        </q-carousel-slide>
        <q-carousel-slide :name="2">
          <a href="https://www.laovietbank.com.la/" target="_blank">
            <span class="product-thumb-mobile">
              <img src="/assets/img/icon-web-download.svg" alt="Cài đặt ứng dụng" />
            </span>
            <h6 class="text-white">
              Cài đặt hoặc truy cập
              <br />trực tiếp ứng dụng
            </h6>
          </a>
        </q-carousel-slide>
        <q-carousel-slide :name="3">
          <a>
            <span class="product-thumb-mobile">
              <img src="/assets/img/icon-web-login.svg" alt="Login/sử dụng" />
            </span>
            <h6 class="text-primary">Truy cập sử dụng dịch vụ</h6>
          </a>
        </q-carousel-slide>
      </q-carousel>
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
<style scoped>
.q-carousel__control {
  bottom: 60px !important;
}
.q-carousel {
  background-color: transparent;
}
.bg-part4-mobile {
  background-image: url('/assets/img/bg-register.jpg');
  width: 100%;
  position: relative;
  display: block;
  float: left;
  padding: 50px 5%;
  margin: 0;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
}
.bg-part4 {
  background-image: url('/assets/img/bg-register.jpg');
  width: 100%;
  position: relative;
  display: block;
  float: left;
  padding: 80px 0%;
  margin: 0;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
}
.slide-pro {
  width: 100%;
  height: auto;
  display: block;
  position: relative;
  margin: 60px 0;
  text-align: center;
}
.slide-pro-mobile {
  width: 100%;
  height: auto;
  display: block;
  position: relative;
  margin: -50px 0;
  overflow: hidden;
}
.slide-pro ul {
  width: 100%;
  height: auto;
  display: block;
  position: relative;
  list-style: none;
}

.product-thumb {
  /* width: calc(100vh / 3.5);
  height: calc(100vh / 3.5); */
  max-width: 180px;
  max-height: 180px;
  display: block;
  position: relative;
  margin: 0 auto;
  background-color: #fff;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  z-index: 1;
}

.product-thumb-mobile {
  /* width: calc(100vh / 3.5);
  height: calc(100vh / 3.5); */
  max-width: 230px;
  max-height: 230px;
  display: block;
  position: relative;
  margin: 0 auto;
  background-color: #fff;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  z-index: 1;
}

.product-thumb-mobile::before {
  content: '';
  width: calc(100% + 20px);
  height: calc(100% + 20px);
  position: absolute;
  left: -10px;
  top: -10px;
  border: solid 10px #17479b;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  z-index: -1;
}

.product-thumb-mobile::after {
  content: '';
  width: calc(100% - 20px);
  height: calc(100% - 20px);
  position: absolute;
  left: 10px;
  top: 10px;
  border: 1px solid #17479b;
  -webkit-border-radius: 50%;
  border-radius: 50%;
}
.product-thumb-mobile img {
  width: 100%;
  height: 100%;
  display: block;
  pointer-events: none;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  -webkit-border-radius: 50%;
  border-radius: 50%;
}

.slide-pro a:hover .product-thumb-mobile {
  box-shadow: inset 0 0 40px rgb(13 58 220 / 20%);
  border-width: 5px;
}

.product-thumb::before {
  content: '';
  width: calc(100% + 20px);
  height: calc(100% + 20px);
  position: absolute;
  left: -10px;
  top: -10px;
  border: solid 10px #17479b;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  z-index: -1;
}

.product-thumb::after {
  content: '';
  width: calc(100% - 20px);
  height: calc(100% - 20px);
  position: absolute;
  left: 10px;
  top: 10px;
  border: 1px solid #17479b;
  -webkit-border-radius: 50%;
  border-radius: 50%;
}
.product-thumb img {
  width: 100%;
  height: 100%;
  display: block;
  pointer-events: none;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  -webkit-border-radius: 50%;
  border-radius: 50%;
}

.slide-pro .li {
  /* max-width: calc(104vh / 3.5); */
  width: 226px;
  height: auto;
  display: inline-block;
  margin: 0 5% 30px 8%;
  position: relative;
  vertical-align: top;
}

.slide-pro .li1 {
  max-width: 225px;
  height: auto;
  display: inline-block;
  margin: 0 5% 28px 8%;
  position: relative;
  vertical-align: top;
}

.slide-pro a {
  display: block;
  position: relative;
  width: 100%;
  height: auto;
}

.slide-pro a:hover .product-thumb {
  box-shadow: inset 0 0 40px rgb(13 58 220 / 20%);
  border-width: 5px;
}

.slide-pro a:hover img {
  -webkit-transform: scale(0.9);
  transform: scale(0.9);
}

.text-primary {
  color: #17479b !important;
}
</style>

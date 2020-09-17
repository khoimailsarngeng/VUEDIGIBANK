<template>
  <div :class="mobileMode ? 'bg-part4-mobile' : 'bg-part4'" :style="mobileMode ? 'height: 385px' : window.width <= 1366 ? 'height: 425px' : 'height: 430px'">
    <div class="col-xs-12 text-h4 text-bold text-primary" v-if="!mobileMode">Đăng kí dịch vụ</div>
    <div class="slide-pro" v-if="!mobileMode">
      <ul>
        <li :class="window.height > 635 ? 'li1' : 'li'">
          <a href="https://www.laovietbank.com.la/vi/page/tru-so-chinh-chi-nhanh-pgd.html" target="_blank">
            <span class="product-thumb">
              <img src="/assets/img/icon-web-bank.svg" alt="Đến ngần hàng đăng ký" />
            </span>
            <br />
            <span class="text-primary q-font-20">Đến ngân hàng đăng ký</span>
            <q-btn
              @click="window.open('https://www.laovietbank.com.la/vi/page/tru-so-chinh-chi-nhanh-pgd.html', '_blank')"
              class="q-font-12"
              unelevated
              rounded
              color="primary"
              label="Danh sách điểm giao dịch"
              icon-right="send"
            />
          </a>
        </li>
        <li :class="window.height > 635 ? 'li1' : 'li'">
          <a href="https://www.laovietbank.com.la/" target="_blank">
            <span class="product-thumb">
              <img src="/assets/img/icon-web-download.svg" alt="Cài đặt ứng dụng" />
            </span>
            <br />
            <span class="text-primary q-font-20">Cài đặt ứng dụng/ Truy cập website</span>
            <q-btn
              @click="window.open('https://www.laovietbank.com.la/', '_blank')"
              class="q-font-12"
              unelevated
              rounded
              color="primary"
              label="Tài liệu hướng dẫn"
              icon-right="send"
            />
          </a>
        </li>
        <li :class="window.height > 635 ? 'li1' : 'li'">
          <a>
            <span class="product-thumb">
              <img src="/assets/img/icon-web-login.svg" alt="Login: www.laovietbank.com.la" />
            </span>
            <br />
            <span class="text-primary q-font-20">Truy cập sử dụng dịch vụ</span>
            <q-btn class="q-font-12" unelevated rounded color="primary" label="Hướng dẫn Login" icon-right="send" />
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
  background-color: #79a2ea;
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
  background-color: #79a2ea;
  width: 100%;
  position: relative;
  display: block;
  float: left;
  padding: 25px 0%;
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
  margin: 30px 0;
}
.slide-pro-mobile {
  width: 100%;
  height: auto;
  display: block;
  position: relative;
  margin: -50px 0;
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
  border: solid 10px #1c86b8;
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
  border: 1px solid #0aa9f3;
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
  border: solid 10px #1c86b8;
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
  border: 1px solid #0aa9f3;
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
  margin: 0 8% 30px 8%;
  position: relative;
  vertical-align: top;
}

.slide-pro .li1 {
  max-width: 225px;
  height: auto;
  display: inline-block;
  margin: 0 8% 28px 8%;
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

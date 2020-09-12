<template>
  <div class="contact-footer">
    <q-carousel swipeable animated v-model="slide" infinite autoplay :height="mobileMode ? '370px' : '800px'" :thumbnails="mobileMode ? false : false">
      <q-carousel-slide style="background-size: 100% 100%;" :name="1" :img-src="mobileMode ? '/assets/img/bg-footer.jpg' : '/assets/img/bg-footer.jpg'" />
      <template v-slot:control>
        <q-carousel-control :position="mobileMode ? 'top' : 'top'" class="q-gutter-xs text-center">
          <q-card flat bordered class="my-card bg-transparent full-width" style="border:0;width">
            <q-card-section>
              <span :class="mobileMode ? 'text-h5 text-white' : 'text-h4 text-white'">Hotline 1440</span>&nbsp;<br /><br />
              <span :class="mobileMode ? 'q-font-15 text-white cls-text-hotline' : 'text-h5 text-white cls-text-hotline'">LVBDigibank Hotline 020-52220222</span
              ><br /><br />
              <span class="text-h6 text-white">LAO VIET JOINT VENTURE BANK (LAOVIETBANK)</span> <br />
              <span :class="mobileMode ? 'text-h7 text-white' : 'text-h7'"
                >Địa chỉ: Số 44 Đại lộ Lanexang, Bản Hat Sa Đy, Quận Chăn Thạ Bu Ly, Thủ đô Viêng Chăn, CHDCND Lào <br />
                Số điện thoại: 0085621-251418, 216316, 214377 <br />
                Fax: 0085621-212197 <br />
                SWIFT Code: LAOVLALA</span
              >
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
.cls-text-hotline {
  background-color: #17479d;
  padding: 7px;
  border-radius: 20px;
  padding-left: 13px;
  padding-right: 13px;
}
</style>

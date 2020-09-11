<template>
  <div>
    <partadvertise v-if="showad" />
    <part1 />
    <part2 />
    <part3 />
    <part4 />
    <part5 />
    <part6 />
    <!-- ----------------- -->

    <!------>

    <!-- <div class="q-pa-sm">
      <q-card class="q-pa-lg" flat bordered v-if="!mobileMode">
        <q-card-section class="text-center">
          <span class="text-h4">Laoviet bank CARD</span>
          <br />CARD SERVICES FOR PERSONAL AND BUSINESS
        </q-card-section>
        <q-card-section horizontal style="margin-right:200px;margin-left:200px">
          <q-card-section class="col-4">
            <q-card class="my-card" flat bordered>
              <q-img src="https://www.laovietbank.com.la/files/13.JPG" style="border-radious:4%" />

              <q-card-section>
                <div class="text-h5 q-mt-sm q-mb-xs">ບັດ ATM PLATINUM</div>
                <div class="text-caption text-grey">
                  ຖອນເງິນສົດຢູ່ຕູ້ ATM ຜ່ານລະບົບເຊື່ອມໂຍງ LAPNet ແລະ Napas Viet Nam, ໂອນເງິນພາຍໃນ ແລະ ນອກລະບົບ LaoVietBank ໂດຍຜ່ານລະບົບເຊື່ອມໂຍງ LAPNet,
                  ຊຳລະໃບບິນບໍລິການໂທລະຄົມ Unitel, LTC, ETL, ຊຳລະຄ່ານໍ້າປະປາ ແລະ ໄຟຟ້່າ
                </div>
              </q-card-section>
            </q-card>
          </q-card-section>
          <q-separator vertical />
          <q-card-section class="col-4">
            <q-card class="my-card" flat bordered>
              <q-img src="https://www.laovietbank.com.la/files/img_Card/ATM%20th%C3%B4ng%20th%C6%B0%E1%BB%9Dng.png" />

              <q-card-section>
                <div class="text-h5 q-mt-sm q-mb-xs">ບັດ ATM ທຳມະດາ</div>
                <div class="text-caption text-grey">
                  ຖອນເງິນສົດຢູ່ຕູ້ ATM ຜ່ານລະບົບເຊື່ອມໂຍງ LAPNet ແລະ Napas Viet Nam, ໂອນເງິນພາຍໃນ ແລະ ນອກລະບົບ LaoVietBank ໂດຍຜ່ານລະບົບເຊື່ອມໂຍງ LAPNet,
                  ຊຳລະໃບບິນບໍລິການໂທລະຄົມ Unitel, LTC, ETL, ຊຳລະຄ່ານໍ້າປະປາ ແລະ ໄຟຟ້່າ
                </div>
              </q-card-section>
            </q-card>
          </q-card-section>
          <q-separator vertical />
          <q-card-section class="col-4">
            <q-card class="my-card" flat bordered>
              <q-img src="https://www.laovietbank.com.la/files/13.JPG" />

              <q-card-section>
                <div class="text-h5 q-mt-sm q-mb-xs">ບັດ ATM PLATINUM</div>
                <div class="text-caption text-grey">
                  ຖອນເງິນສົດຢູ່ຕູ້ ATM ຜ່ານລະບົບເຊື່ອມໂຍງ LAPNet ແລະ Napas Viet Nam, ໂອນເງິນພາຍໃນ ແລະ ນອກລະບົບ LaoVietBank ໂດຍຜ່ານລະບົບເຊື່ອມໂຍງ LAPNet,
                  ຊຳລະໃບບິນບໍລິການໂທລະຄົມ Unitel, LTC, ETL, ຊຳລະຄ່ານໍ້າປະປາ ແລະ ໄຟຟ້່າ
                </div>
              </q-card-section>
            </q-card>
          </q-card-section>
        </q-card-section>
      </q-card>
      <q-card class="q-pa-lg" flat bordered v-else>
        <q-card-section class="text-center">
          <span class="text-h4">Laoviet bank CARD</span>
          <br />CARD SERVICES FOR PERSONAL AND BUSINESS
        </q-card-section>
        <q-card-section>
          <q-carousel swipeable animated v-model="slide2" height="100%" infinite autoplay>
            <q-carousel-slide :name="1">
              <q-card class="my-card" flat bordered>
                <q-img src="https://www.laovietbank.com.la/files/13.JPG" />

                <q-card-section>
                  <div class="text-h5 q-mt-sm q-mb-xs">ບັດ ATM PLATINUM</div>
                  <div class="text-caption text-grey">
                    ຖອນເງິນສົດຢູ່ຕູ້ ATM ຜ່ານລະບົບເຊື່ອມໂຍງ LAPNet ແລະ Napas Viet Nam, ໂອນເງິນພາຍໃນ ແລະ ນອກລະບົບ LaoVietBank ໂດຍຜ່ານລະບົບເຊື່ອມໂຍງ LAPNet,
                    ຊຳລະໃບບິນບໍລິການໂທລະຄົມ Unitel, LTC, ETL, ຊຳລະຄ່ານໍ້າປະປາ ແລະ ໄຟຟ້່າ
                  </div>
                </q-card-section>
              </q-card>
            </q-carousel-slide>
            <q-carousel-slide :name="2">
              <q-card class="my-card" flat bordered>
                <q-img src="https://www.laovietbank.com.la/files/img_Card/ATM%20th%C3%B4ng%20th%C6%B0%E1%BB%9Dng.png" />

                <q-card-section>
                  <div class="text-h5 q-mt-sm q-mb-xs">ບັດ ATM ທຳມະດາ</div>
                  <div class="text-caption text-grey">
                    ຖອນເງິນສົດຢູ່ຕູ້ ATM ຜ່ານລະບົບເຊື່ອມໂຍງ LAPNet ແລະ Napas Viet Nam, ໂອນເງິນພາຍໃນ ແລະ ນອກລະບົບ LaoVietBank ໂດຍຜ່ານລະບົບເຊື່ອມໂຍງ LAPNet,
                    ຊຳລະໃບບິນບໍລິການໂທລະຄົມ Unitel, LTC, ETL, ຊຳລະຄ່ານໍ້າປະປາ ແລະ ໄຟຟ້່າ
                  </div>
                </q-card-section>
              </q-card>
            </q-carousel-slide>
            <q-carousel-slide :name="3">
              <q-card class="my-card" flat bordered>
                <q-img src="https://www.laovietbank.com.la/files/img_Card/ATM%20th%C3%B4ng%20th%C6%B0%E1%BB%9Dng.png" />

                <q-card-section>
                  <div class="text-h5 q-mt-sm q-mb-xs">ບັດ ATM ທຳມະດາ</div>
                  <div class="text-caption text-grey">
                    ຖອນເງິນສົດຢູ່ຕູ້ ATM ຜ່ານລະບົບເຊື່ອມໂຍງ LAPNet ແລະ Napas Viet Nam, ໂອນເງິນພາຍໃນ ແລະ ນອກລະບົບ LaoVietBank ໂດຍຜ່ານລະບົບເຊື່ອມໂຍງ LAPNet,
                    ຊຳລະໃບບິນບໍລິການໂທລະຄົມ Unitel, LTC, ETL, ຊຳລະຄ່ານໍ້າປະປາ ແລະ ໄຟຟ້່າ
                  </div>
                </q-card-section>
              </q-card>
            </q-carousel-slide>
          </q-carousel>
        </q-card-section>
      </q-card>
    </div> -->
  </div>
</template>
<script>
import { mapState } from 'vuex';
import part1 from '../../components/home/part1component.vue';
import part2 from '../../components/home/part2component.vue';
import part3 from '../../components/home/part3component.vue';
import part4 from '../../components/home/part4component.vue';
import part5 from '../../components/home/part5component.vue';
import part6 from '../../components/home/part6component.vue';
import partadvertise from '../../components/home/partavertise.vue';
export default {
  components: {
    part1,
    part2,
    part3,
    part4,
    part5,
    part6,
    partadvertise
  },
  data() {
    return {
      showad: false
    };
  },
  computed: {
    ...mapState('mobileMode', ['mobileMode'])
  }
};
</script>
<style lang="scss" scope>
.q-carousel__slide {
  min-height: 100%;
  background-size: cover;
  background-position: inherit !important;
}

.icon-genneral {
  width: 150px;
  height: 150px;
}

.bg-custom-card {
  background: rgb(58, 117, 221) !important;
  background: linear-gradient(90deg, rgba(58, 117, 221, 1) 0%, rgba(175, 204, 255, 1) 52%, rgba(55, 112, 213, 1) 99%) !important;
}

.cls-production {
  margin-top: -24px !important;
  margin-right: -10px !important;
  margin-left: -26px !important;
}
</style>

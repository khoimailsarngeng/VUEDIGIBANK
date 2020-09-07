<template>
  <div>
    <q-carousel
      swipeable
      animated
      v-model="slide"
      infinite
      autoplay
      :height="mobileMode ? '300px' : '650px'"
      :thumbnails="mobileMode ? false : true"
    >
      <q-carousel-slide
        style="background-size: 100% 100%;"
        :name="1"
        img-src="/assets/img/8x4m-DigiBank final.jpg"
      />
      <q-carousel-slide
        style="background-size: 100% 100%;"
        :name="2"
        img-src="/assets/img/bg-app-individual-after-login.jpg"
      />
      <q-carousel-slide
        style="background-size: 100% 100%;"
        :name="3"
        img-src="/assets/img/5.jpg"
      />
      <template v-slot:control>
        <q-carousel-control
          :style="mobileMode ? 'margin: 50px;' : ''"
          :position="mobileMode ? 'bottom-right' : 'bottom-right'"
          :offset="mobileMode ? [50, 400] : [100, 280]"
          class="q-gutter-xs"
          v-if="slide == 2"
        >
          <q-card flat bordered class="my-card bg-transparent" style="border:0">
            <q-card-section>
              <div class="row items-center no-wrap">
                <div class="col">
                  <div :class=" mobileMode ? 'text-h5' : 'text-h4'">
                    <span class="text-yellow">Laovietbank</span>&nbsp;
                    <span class="text-red">Digital</span>&nbsp;
                    <span class="text-blue">Banking</span>
                  </div>
                  <div class="text-h6 text-black">ໃຫ້ຊິວິດທ່ານສະດວກຂື້ນ</div>
                  <span
                    class="text-h7 text-black"
                  >ສະດວກ ປອດໄພ ວ່ອງໄວ ທັນໃຈ ຕ້ອງ ທະນາຄານຮ່ວມທຸລະກິດລາວຫວຽດ</span>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </q-carousel-control>
        <!-- <q-carousel-control position="bottom-right" :offset="[18, 18]">
          <q-btn
            push
            round
            dense
            color="white"
            text-color="primary"
            :icon="fullscreen ? 'fullscreen_exit' : 'fullscreen'"
            @click="fullscreen = !fullscreen"
          />
        </q-carousel-control>-->
      </template>
    </q-carousel>
    <div class="q-pa-md">
      <div class="row q-col-gutter-md cls-production">
        <div :style="mobileMode ? 'width:100%' : 'width:50%'">
            <q-card class="bg-custom-card text-center">
              <q-card-section class="q-pb-none">
                <img src="assets/img/Generalperson.png" style="width:150px;height:150px" />
              </q-card-section>
              <q-card-section class="q-pt-xs">
                <span class="text-h5">{{$t('Individualcustomer')}}</span> <br>
                <q-btn @click="$router.push('/individual')" class="q-mt-md" push color="primary" :label="$t('InfoIndividualcustomer')" />
              </q-card-section>
            </q-card>
        </div>
        <!-- <q-separator vertical color="primary" /> -->

        <div :style="mobileMode ? 'width:100%' : 'width:50%'">
            <q-card class="bg-custom-card text-center">              
              <q-card-section class="q-pb-none">
                <img src="assets/img/Website_Planner-512.png" style="width:150px;height:150px" />
              </q-card-section>
              <q-card-section class="q-pt-xs">
                <span class="text-h5">{{$t('Corporatecustomer')}}</span> <br>
                <q-btn class="q-mt-md"  push color="primary" :label="$t('InfoCorporatecustomer')" />
              </q-card-section>
            </q-card>
        </div>
      </div>
    </div>
    <!-- ----------------- -->
    <!-- <div class="q-pa-lg" style="margin-top: 0px;">
      <div class="row q-col-gutter-lg">
        <div class="col-sm-1" v-if="!mobileMode"></div>
        <div class="col-sm-5" v-if="!mobileMode">
          <q-card flat bordered class="my-card bg-transparent" style="border:0">
            <q-card-section>
              <div class="row items-center no-wrap">
                <div class="col">
                  <div class="text-h4 text-black">ສະບາຍດີ,</div>
                  <span class="text-h5 text-black">ທ່ານຕ້ອງການລົງທະບຽນບໍລິການ online ບໍ?</span>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-sm-4 q-ml-lg" :style="mobileMode ? 'width:100%' : ''">
          <q-btn
            align="left"
            class="full-width"
            text-color="black"
            color="dimgrey"
            icon="person_add_alt_1"
            size="lg"
            label="ທ່ານເຄີຍເປັນລູກຄ້າມາແລ້ວ"
          />
          <br />
          <q-btn
            align="left"
            class="q-mt-md full-width"
            text-color="black"
            color="dimgrey"
            icon="person_add_alt_1"
            size="lg"
            label="ທ່ານຍັງເຄີຍເປັນລູກຄ້າ"
          />
          <br />
        </div>
      </div>
    </div>
    <div class="q-pa-lg">
      <q-carousel swipeable animated v-model="slide1" height="350px" infinite autoplay>
        <q-carousel-slide :name="1" img-src="/assets/img/background_IB_CN.jpeg" />
        <template v-slot:control>
          <q-carousel-control
            :style="mobileMode ? 'margin: 25px;' : 'margin: 100px;'"
            position="bottom-right"
            :offset="[100, 100]"
            class="q-gutter-xs"
          >
            <q-card flat bordered class="my-card bg-transparent" style="border:0">
              <q-card-section>
                <div class="row items-center">
                  <div class="col">
                    <div class="text-h5">
                      <span class="text-yellow">Laovietbank</span>&nbsp;
                      <span class="text-red">Digital</span>&nbsp;
                      <span class="text-blue">Banking</span>
                    </div>
                    <span class="text-h6 text-black">A smart banking app for mobile devices</span>
                    <br />
                    <p class="text-sm text-black" style="white-space:pre-wrap">
                      A smart app that helps customers bank with BIDV anytime, anywhere,
                      <br />compatible with operating systems including iOS, Android, Windows Phone
                      <br />and working on all 3G/WIFI/GPRS-connected electronic devices.
                    </p>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </q-carousel-control>
          <q-carousel-control position="bottom-right" :offset="[18, 18]">
            <q-btn
              push
              round
              dense
              color="white"
              text-color="primary"
              :icon="fullscreen ? 'fullscreen_exit' : 'fullscreen'"
              @click="fullscreen = !fullscreen"
            />
          </q-carousel-control>
        </template>
      </q-carousel>
    </div>

    <div class="q-pa-lg">
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
                  ຖອນເງິນສົດຢູ່ຕູ້ ATM ຜ່ານລະບົບເຊື່ອມໂຍງ LAPNet ແລະ Napas Viet Nam,
                  ໂອນເງິນພາຍໃນ ແລະ ນອກລະບົບ LaoVietBank ໂດຍຜ່ານລະບົບເຊື່ອມໂຍງ LAPNet,
                  ຊຳລະໃບບິນບໍລິການໂທລະຄົມ Unitel, LTC, ETL, ຊຳລະຄ່ານໍ້າປະປາ ແລະ ໄຟຟ້່າ
                </div>
              </q-card-section>
            </q-card>
          </q-card-section>
          <q-separator vertical />
          <q-card-section class="col-4">
            <q-card class="my-card" flat bordered>
              <q-img
                src="https://www.laovietbank.com.la/files/img_Card/ATM%20th%C3%B4ng%20th%C6%B0%E1%BB%9Dng.png"
              />

              <q-card-section>
                <div class="text-h5 q-mt-sm q-mb-xs">ບັດ ATM ທຳມະດາ</div>
                <div class="text-caption text-grey">
                  ຖອນເງິນສົດຢູ່ຕູ້ ATM ຜ່ານລະບົບເຊື່ອມໂຍງ LAPNet ແລະ Napas Viet Nam,
                  ໂອນເງິນພາຍໃນ ແລະ ນອກລະບົບ LaoVietBank ໂດຍຜ່ານລະບົບເຊື່ອມໂຍງ LAPNet,
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
                  ຖອນເງິນສົດຢູ່ຕູ້ ATM ຜ່ານລະບົບເຊື່ອມໂຍງ LAPNet ແລະ Napas Viet Nam,
                  ໂອນເງິນພາຍໃນ ແລະ ນອກລະບົບ LaoVietBank ໂດຍຜ່ານລະບົບເຊື່ອມໂຍງ LAPNet,
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
                    ຖອນເງິນສົດຢູ່ຕູ້ ATM ຜ່ານລະບົບເຊື່ອມໂຍງ LAPNet ແລະ Napas Viet Nam,
                    ໂອນເງິນພາຍໃນ ແລະ ນອກລະບົບ LaoVietBank ໂດຍຜ່ານລະບົບເຊື່ອມໂຍງ LAPNet,
                    ຊຳລະໃບບິນບໍລິການໂທລະຄົມ Unitel, LTC, ETL, ຊຳລະຄ່ານໍ້າປະປາ ແລະ ໄຟຟ້່າ
                  </div>
                </q-card-section>
              </q-card>
            </q-carousel-slide>
            <q-carousel-slide :name="2">
              <q-card class="my-card" flat bordered>
                <q-img
                  src="https://www.laovietbank.com.la/files/img_Card/ATM%20th%C3%B4ng%20th%C6%B0%E1%BB%9Dng.png"
                />

                <q-card-section>
                  <div class="text-h5 q-mt-sm q-mb-xs">ບັດ ATM ທຳມະດາ</div>
                  <div class="text-caption text-grey">
                    ຖອນເງິນສົດຢູ່ຕູ້ ATM ຜ່ານລະບົບເຊື່ອມໂຍງ LAPNet ແລະ Napas Viet Nam,
                    ໂອນເງິນພາຍໃນ ແລະ ນອກລະບົບ LaoVietBank ໂດຍຜ່ານລະບົບເຊື່ອມໂຍງ LAPNet,
                    ຊຳລະໃບບິນບໍລິການໂທລະຄົມ Unitel, LTC, ETL, ຊຳລະຄ່ານໍ້າປະປາ ແລະ ໄຟຟ້່າ
                  </div>
                </q-card-section>
              </q-card>
            </q-carousel-slide>
            <q-carousel-slide :name="3">
              <q-card class="my-card" flat bordered>
                <q-img
                  src="https://www.laovietbank.com.la/files/img_Card/ATM%20th%C3%B4ng%20th%C6%B0%E1%BB%9Dng.png"
                />

                <q-card-section>
                  <div class="text-h5 q-mt-sm q-mb-xs">ບັດ ATM ທຳມະດາ</div>
                  <div class="text-caption text-grey">
                    ຖອນເງິນສົດຢູ່ຕູ້ ATM ຜ່ານລະບົບເຊື່ອມໂຍງ LAPNet ແລະ Napas Viet Nam,
                    ໂອນເງິນພາຍໃນ ແລະ ນອກລະບົບ LaoVietBank ໂດຍຜ່ານລະບົບເຊື່ອມໂຍງ LAPNet,
                    ຊຳລະໃບບິນບໍລິການໂທລະຄົມ Unitel, LTC, ETL, ຊຳລະຄ່ານໍ້າປະປາ ແລະ ໄຟຟ້່າ
                  </div>
                </q-card-section>
              </q-card>
            </q-carousel-slide>
          </q-carousel>
        </q-card-section>
      </q-card>
    </div>-->
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  data() {
    return {
      slide: 1,
      slide1: 1,
      slide2: 2,
      autoplay: true,
      tab: 'alarms',
    };
  },
  computed: {
    ...mapState('mobileMode', ['mobileMode']),
  },
  watch: {
    mobileMode(val) {},
  },
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

.bg-custom-card{
  background: rgb(58,117,221) !important;
  background: linear-gradient(90deg, rgba(58,117,221,1) 0%, rgba(175,204,255,1) 52%, rgba(55,112,213,1) 99%) !important;
}

.cls-production {
  margin-top:-24px !important;
  margin-right:-10px !important;
  margin-left:-26px !important
}
</style>
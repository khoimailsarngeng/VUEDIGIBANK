<template>
  <div class="q-pa-md" :style="mobileMode ? '' : 'margin-left:15%;margin-right:6%'">
    <q-bar class="bg-white text-primary q-mt-md" :style="mobileMode ? 'margin-left:3%;margin-right:0%' : 'margin-right:16%'">
      <span :class="mobileMode ? 'text-h7' : 'text-h5'" style="border-bottom:1px solid #17479D">{{$t('Individualcustomer')}}</span>
      <q-space />
      <q-btn to="/home" color="white" text-color="black" :label="$t('Back')" :style="mobileMode ? 'font-size:12px' : 'font-size:14px'" />      
    </q-bar>
    <div class="q-pa-lg">
      <div class="row q-gutter-md">
        <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5">
          <q-card class="text-center my-card">            
            <img height="280px" src="/assets/img/banktransfer.jpeg" />
            <q-card-section class="q-pt-xs">
              <span class="text-h5">{{ $store.state.language.language === 'en' ? 'External Transfer' 
                : $store.state.language.language === 'vi' ? 'Chuyển khoản bên ngoài' : 'ໂອນເງີນຂ້າມທະນາຄານ'}}</span>             
            </q-card-section>
          </q-card>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5">
          <q-card class="text-center my-card">
            <img height="280px" src="/assets/img/road.jpg" />
            <q-card-section class="q-pt-xs">
              <span class="text-h5">{{ $store.state.language.language === 'en' ? 'Road Payment' 
                : $store.state.language.language === 'vi' ? 'Thanh toán đường bộ' : 'ຊຳລະຄ່າທາງ'}}</span>
              <!-- <p>ຊຳລະຄ່າທາງໄດ້ 24 ຊົ່ວໂມງ ແລະ ສາມາດໄປເອົາສະຕິກເກິໄດ້ທຸກໜ່ວຍບໍລິການ ແລະ ຕູ້ Kios ທຸກບ່ອນ</p> -->
            </q-card-section>
          </q-card>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5">
          <q-card class="text-center my-card">
            <img height="280px" src="/assets/img/electricity.jpg" />
            <q-card-section class="q-pt-xs">
              <span class="text-h5">{{ $store.state.language.language === 'en' ? 'Electricity bill payment' 
                : $store.state.language.language === 'vi' ? 'Thanh toán tiền điện' : 'ຊຳລະຄ່າໄຟຟ້າ'}}</span>
              <!-- <p>ສາມາດຊຳລະຄ່າໄຟຟ້າໄດ້ທຸກ 24 ຊົ່ວໂມງ</p> -->
            </q-card-section>
          </q-card>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5">
          <q-card class="text-center my-card">
            <img height="280px" src="/assets/img/water.jpg" />
            <q-card-section class="q-pt-xs">
              <span class="text-h5">{{ $store.state.language.language === 'en' ? 'Water bill payment' 
                : $store.state.language.language === 'vi' ? 'Thanh toán tiền nước' : 'ຊຳລະຄ່ານໍ້າປະປາ'}}</span>
              <!-- <p>ສາມາດຊຳລະຄ່ານໍ້າປະປາໄດ້ທຸກ 24 ຊົ່ວໂມງ</p> -->
            </q-card-section>
          </q-card>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5">
          <q-card class="text-center my-card">
            <img height="280px" src="/assets/img/online-gaming-merchant-account.png" />
            <q-card-section class="q-pt-xs">
              <span class="text-h5">{{ $store.state.language.language === 'en' ? 'Top-up' 
                : $store.state.language.language === 'vi' ? 'Nạp tiền' : 'ເຕີມມູນຄ່າໂທ'}}</span>
              <!-- <p>ສາມາດຊຳລະຄ່ານໍ້າປະປາໄດ້ທຸກ 24 ຊົ່ວໂມງ</p> -->
            </q-card-section>
          </q-card>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5">
          <q-card class="text-center my-card">
            <img height="280px" src="/assets/img/Qr.jpg" />
            <q-card-section class="q-pt-xs">
              <span class="text-h5">{{ $store.state.language.language === 'en' ? 'Qr-pay' 
                : $store.state.language.language === 'vi' ? 'Qr-pay' : 'Qr-pay'}}</span>
              <!-- <p>ສາມາດຊຳລະຄ່ານໍ້າປະປາໄດ້ທຸກ 24 ຊົ່ວໂມງ</p> -->
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    computed : {
        ...mapState('mobileMode', ['mobileMode']),
    }
}
</script>
<style scoped>
.my-card {
  height: 330px;
}
</style>
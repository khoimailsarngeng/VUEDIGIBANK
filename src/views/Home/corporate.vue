<template>
  <div class="q-pa-md" :style="mobileMode ? '' : 'margin-left:15%;margin-right:6%'">
    <q-bar class="bg-white text-primary q-mt-md" :style="mobileMode ? 'margin-right:0%' : 'margin-right:16%'">
      <span :class="mobileMode ? 'text-h7' : 'text-h5'" style="border-bottom:1px solid #17479D">{{$t('Corporatecustomer')}}</span>
      <q-space />
      <q-btn to="/" color="white" text-color="black" :label="$t('Back')" :style="mobileMode ? 'font-size:12px' : 'font-size:14px'" />      
    </q-bar>
    <div class="q-pa-lg">
      <div class="row q-gutter-md">
        <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5">
          <q-card class="text-center my-card"  @click="$router.push('/service/Transfer')">            
            <img height="280px" src="/assets/img/transfer.jpg" />
            <q-card-section class="q-pt-xs">
              <span class="text-h6">{{ $store.state.language.language === 'en' ? 'Transfer money' 
                : $store.state.language.language === 'vi' ? 'Chuyển khoản' : 'ໂອນເງີນ'}}</span>             
            </q-card-section>
          </q-card>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5">
          <q-card class="text-center my-card">
            <img height="280px" src="/assets/img/Bill.jpg"  @click="$router.push('/service/BillPayment')"/>
            <q-card-section class="q-pt-xs">
              <span class="text-h6">{{ $store.state.language.language === 'en' ? 'Bill Payment' 
                : $store.state.language.language === 'vi' ? 'Thanh toán hóa đơn' : 'ຊຳລະໃບບິນຕ່າງໆ'}}</span>              
            </q-card-section>
          </q-card>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5">
          <q-card class="text-center my-card">
            <img height="280px" src="/assets/img/telecomunication.png" />
            <q-card-section class="q-pt-xs">
              <span class="text-h6">{{ $store.state.language.language === 'en' ? 'Telecomunication Bill Payment' 
                : $store.state.language.language === 'vi' ? 'Thanh toán hóa đơn viễn thông' : 'ຊຳລະໃບບິນໂທລະຄົມມະນາຄົມ'}}</span>              
            </q-card-section>
          </q-card>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5">
          <q-card class="text-center my-card">
            <img height="280px" src="/assets/img/leasing.jpg" />
            <q-card-section class="q-pt-xs">
              <span class="text-h6">{{ $store.state.language.language === 'en' ? 'Leasing payment' 
                : $store.state.language.language === 'vi' ? 'Thủ hộ tài chính tiêu dùng' : 'ຈ່າຍສິນເຊື່ອຕ່າງໆ'}}</span>              
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
  height: 350px;
}
</style>
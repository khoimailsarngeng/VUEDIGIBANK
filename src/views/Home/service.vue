<template>
    <div class="q-pa-md" :style="mobileMode ? '' : 'margin-left:15%;margin-right:6%'">
      <q-bar
        class="bg-white text-primary q-mt-md"
        :style="mobileMode ? 'margin-left:3%;margin-right:0%' : 'margin-right:16%'"
      >
        <span
          :class="mobileMode ? 'text-h7' : 'text-h5'"
          style="border-bottom:1px solid #17479D"
        >{{$store.state.language.language === 'en' ? returnData[0].headeren 
                : $store.state.language.language === 'vi' ? returnData[0].headervi : returnData[0].header}}</span>
        <q-space />
        <q-btn
          @click="$router.go(-1)"
          color="white"
          text-color="black"
          :label="$t('Back')"
          :style="mobileMode ? 'font-size:12px' : 'font-size:14px'"
        />
      </q-bar>
    <div class="q-pa-lg">
      <div class="row q-gutter-md">
        <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5" v-for="(item,index) in returnData" :key="index">
          <q-card class="text-center my-card" @click="$router.push(`/transfermoney/${item.click}`)">            
            <img height="280px" :src="item.img" />
            <q-card-section class="q-pt-xs">
              <span class="text-h6">{{ $store.state.language.language === 'en' ? item.name 
                : $store.state.language.language === 'vi' ? item.name : item.name}}</span>             
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import datajson from '../../../public/Data/data_service.json';
export default {
  computed: {
    ...mapState('mobileMode', ['mobileMode']),
    returnData(){
        console.log(datajson);
        return datajson.filter(q => {
            return q.type == this.$route.params.serviceType
        }); 
    }
  },
};
</script>
<style scoped>
.my-card {
  height: 350px;
}
</style>
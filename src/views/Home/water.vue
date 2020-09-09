<template>
  <div class="q-pa-md" :style="mobileMode ? '' : 'margin-left:15%;margin-right:6%'">
    <q-bar
      class="bg-white text-primary q-mt-md"
      :style="mobileMode ? 'margin-right:0%' : 'margin-right:0%'"
    >
      <span
        :class="mobileMode ? 'text-h7' : 'text-h5'"
        style="border-bottom:1px solid #17479D"
      >Transfer Money</span>
      <q-space />
      <q-btn
        to="/"
        color="white"
        text-color="black"
        :label="$t('Back')"
        :style="mobileMode ? 'font-size:12px' : 'font-size:14px'"
      />
    </q-bar>
    <div class="q-pa-lg">
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <span class="text-h6 text-bold">ບໍລິການໂອນເງິນລະຫວ່າງທະນາຄານຜ່ານ MOBILE BANKING</span><br>
                <img src="https://www.laovietbank.com.la/files/img_SanPhamDichVu/ChuyenTien1_TL.jpg" alt="" style="width:100%">
                <br>
                <span class="text-h6 text-bold">ວິທິການໂອນເງິນນອກລະບົບຢູ່ໃນ MOBLIE BANKING</span> <br>
                <img src="https://www.laovietbank.com.la/files/img_SanPhamDichVu/ChuyenTien2_TL.jpg" alt="" style="width:100%">
            </div>
        </div>        
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import datajson from '../../../public/Data/data.json';
export default {
  computed: {
    ...mapState('mobileMode', ['mobileMode']),
  },
  mounted(){
    console.log(datajson.Transfer);
  }
};
</script>
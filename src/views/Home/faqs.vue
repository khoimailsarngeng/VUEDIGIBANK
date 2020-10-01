<template>
  <div>
    <!-- <q-carousel
      swipeable
      animated
      v-model="slide"
      infinite
      autoplay
      :height="$q.screen.name === 'xs' ? '200px' : $q.screen.name === 'sm' ? '250px' : $q.screen.name === 'md' ? '300px' : '400px'"
      :thumbnails="mobileMode ? false : true"
    >
      <q-carousel-slide style="background-size: 100% 100%" :name="1" :img-src="mobileMode ? '/assets/img/FAQs_resize.jpg' : '/assets/img/FAQs.jpg'" />
      <template v-slot:control>
        <q-carousel-control
          :style="mobileMode ? 'margin: 50px;' : ''"
          :position="mobileMode ? 'bottom-left' : 'bottom-left'"
          :offset="mobileMode ? [50, 400] : [100, 280]"
          class="q-gutter-xs"
        >
          <q-card flat bordered class="my-card bg-transparent" style="border: 0">
            <q-card-section>
              <div class="row items-center no-wrap">
                <div class="col">
                  <div :class="mobileMode ? 'text-h5' : 'text-h4'"><span class="text-primary">Ask and Answer</span>&nbsp;</div>
                  <span class="text-h7 text-black">
                    Laovietbank has collected some common customer inquiries
                    <br />about products and services to help you solve your questions quickly and accurately.
                  </span>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </q-carousel-control>
      </template>
    </q-carousel> -->
    <div class="q-pa-md">
      <div class="text-h5" v-if="$store.state.language.language === 'en'">Frequently asked questions</div>
      <div class="text-h5" v-if="$store.state.language.language === 'vi'">Câu hỏi thường gặp</div>
      <div class="text-h5" v-if="$store.state.language.language === 'la'">ຄໍາ​ຖາມ​ທີ່​ຖືກ​ຖາມ​ເລື້ອຍໆ</div>
      <div :class="mobileMode ? '' : 'q-pa-md'" style="max-width: 100%">
        <q-list bordered class="rounded-borders">
          <q-expansion-item
            v-model="smartbanking"
            switch-toggle-side
            :expand-icon="smartbanking ? 'remove_circle_outline' : 'control_point'"
            :header-class="smartbanking ? 'bg-primary text-white' : ''"
            :label="$t('Individualcustomer')"
          >
            <q-card>
              <q-card-section>
                <q-expansion-item
                  v-for="(item, index) in IndividualFAQ"
                  :key="index"
                  switch-toggle-side
                  :label="lang == 'en' ? item[0].Titlevi : lang == 'vi' ? item[0].Titlevi : item[0].Title"
                >
                  <q-card>
                    <q-card-section>
                      <q-expansion-item
                        v-for="(item1, index1) in item"
                        :key="index1"
                        switch-toggle-side
                        :label="lang == 'en' ? item1.Questionvi : lang == 'vi' ? item1.Questionvi : item1.Question"
                      >
                        <q-card>
                          <q-card-section style="padding-left: 8%; padding-right: 8%; text-align: justify">
                            <div v-html="lang == 'en' ? item1.Answervi : lang == 'vi' ? item1.Answervi : item1.Answer"></div>
                          </q-card-section>
                        </q-card>
                      </q-expansion-item>
                    </q-card-section>
                  </q-card>
                </q-expansion-item>
              </q-card-section>
            </q-card>
          </q-expansion-item>
          <q-expansion-item
            v-model="smartbanking1"
            switch-toggle-side
            :expand-icon="smartbanking1 ? 'remove_circle_outline' : 'control_point'"
            :header-class="smartbanking1 ? 'bg-primary text-white' : ''"
            :label="$t('Corporatecustomer')"
          >
            <q-card>
              <q-card-section>
                <q-expansion-item
                  v-for="(item, index) in CorporateFAQ"
                  :key="index"
                  switch-toggle-side
                  :label="lang == 'en' ? item[0].Titlevi : lang == 'vi' ? item[0].Titlevi : item[0].Title"
                >
                  <q-card>
                    <q-card-section>
                      <q-expansion-item
                        v-for="(item1, index1) in item"
                        :key="index1"
                        switch-toggle-side
                        :label="lang == 'en' ? item1.Questionvi : lang == 'vi' ? item1.Questionvi : item1.Question"
                      >
                        <q-card>
                          <q-card-section style="padding-left: 8%; padding-right: 8%; text-align: justify">
                            <div v-html="lang == 'en' ? item1.Answervi : lang == 'vi' ? item1.Answervi : item1.Answer"></div>
                          </q-card-section>
                        </q-card>
                      </q-expansion-item>
                    </q-card-section>
                  </q-card>
                </q-expansion-item>
              </q-card-section>
            </q-card>
          </q-expansion-item>
          <!-- <q-expansion-item
            v-model="smartbanking"
            switch-toggle-side
            :expand-icon="smartbanking ? 'remove_circle_outline' : 'control_point'"
            :header-class="smartbanking ? 'bg-primary text-white' : ''"
            label="I.	Giới thiệu LVB Digibank"
          >
            <q-card>
              <q-card-section>
                <q-expansion-item switch-toggle-side header-class="bg-grey-2" label="1.	LVB Digibank là gì?" expand-icon="help">
                  <q-card>
                    <q-card-section>
                      LVB DigiBank là dịch vụ ngân hàng số của Laovietbank cho phép khách hàng cá nhân, doanh nghiệp thực hiện các giao dịch ngân hàng mọi lúc,
                      mọi nơi thông qua các phương tiện kỹ thuật số: ĐTDĐ, máy tính để bàn, máy tính bảng mà không phải đến ngân hàng. LaoVietBank Digital
                      Banking gồm 2 phiên bản dành cho khách hàng cá nhân và khách hàng doanh nghiệp.
                    </q-card-section>
                  </q-card>
                </q-expansion-item>
                <q-expansion-item
                  switch-toggle-side
                  header-class="bg-grey-2"
                  :label="
                    $store.state.language.language === 'en'
                      ? '2.	LVB Digibank cung cấp cho tôi những tiện ích gì? '
                      : $store.state.language.language === 'vi'
                      ? '2.	LVB Digibank cung cấp cho tôi những tiện ích gì? '
                      : '2.	LVB Digibank cung cấp cho tôi những tiện ích gì? '
                  "
                  expand-icon="help"
                >
                  <q-card>
                    <q-card-section>
                      LVB Digibank mang lại cho khách hàng rất nhiều tiện ích với tính năng All in One : (1) Tất cả nhu cầu khách hàng sẽ được đáp ứng chỉ bằng
                      việc sử dụng LVB DigiBank từ các nhu cầu gia đình như nộp tiền điện, tiền nước, nộp thuế đất đến các nhu cầu cá nhân như thanh toán tiền
                      điện thoại, náp thẻ, nộp thuế đường bộ, mua bảo hiểm và sau này sẽ có mua vé máy bay, vé xem phim,... tất cả chỉ cần dùng LVB DigiBank là
                      đầy đủ; (2) LVB DigiBank của chúng ta dành cho tất cả khách hàng gồm cá nhân, doanh nghiệp, tổ chức khác chỉ duy nhất một sản phẩm LVB
                      DigiBank; (3) Khách hàng chỉ cần đăng ký 1 lần, ghi nhớ 1 USer và Password cho tất cả các thiết bị, từ Điện thoại, máy tính, máy tính để
                      bàn... (4) Đặc biệt là Miễn phí hoàn toàn (ALL FREE): Khách hàng không phải trả bất cứ phí gì kể cả phí chuyển tiền liên ngân hàng (trong
                      ít nhất 1 năm đầu sử dụng).
                    </q-card-section>
                  </q-card>
                </q-expansion-item>
                <q-expansion-item
                  switch-toggle-side
                  header-class="bg-grey-2"
                  :label="
                    $store.state.language.language === 'en'
                      ? '3.	LVB Digibank có thể phục vụ 24/7 hay không?'
                      : $store.state.language.language === 'vi'
                      ? '3.	LVB Digibank có thể phục vụ 24/7 hay không?'
                      : '3.	LVB Digibank có thể phục vụ 24/7 hay không?'
                  "
                  expand-icon="help"
                >
                  <q-card>
                    <q-card-section>
                      Có, khách hàng có thể truy cập vào hệ thống LVB Digibank 24/7 và thực hiện các giao dịch và quản lý tài chính thông qua các thiết bị kết
                      nối mạng Internet ở bất cứ mọi nơi.
                    </q-card-section>
                  </q-card>
                </q-expansion-item>
                <q-expansion-item
                  switch-toggle-side
                  header-class="bg-grey-2"
                  :label="
                    $store.state.language.language === 'en'
                      ? '4.	Nếu tôi đi nước ngoài tôi có thể dùng LVB Digibank không?'
                      : $store.state.language.language === 'vi'
                      ? '4.	Nếu tôi đi nước ngoài tôi có thể dùng LVB Digibank không?'
                      : '4.	Nếu tôi đi nước ngoài tôi có thể dùng LVB Digibank không?'
                  "
                  expand-icon="help"
                >
                  <q-card>
                    <q-card-section> </q-card-section>
                  </q-card>
                </q-expansion-item>
                <q-expansion-item
                  switch-toggle-side
                  header-class="bg-grey-2"
                  :label="
                    $store.state.language.language === 'en'
                      ? '5.	Ai có thể sử dụng LVB Digibank?'
                      : $store.state.language.language === 'vi'
                      ? '5.	Ai có thể sử dụng LVB Digibank?'
                      : '5.	Ai có thể sử dụng LVB Digibank?'
                  "
                  expand-icon="help"
                >
                  <q-card>
                    <q-card-section> </q-card-section>
                  </q-card>
                </q-expansion-item>
              </q-card-section>
            </q-card>
          </q-expansion-item>

          <q-expansion-item
            v-model="smartbanking1"
            switch-toggle-side
            :expand-icon="smartbanking1 ? 'remove_circle_outline' : 'control_point'"
            :header-class="smartbanking1 ? 'bg-primary text-white' : ''"
            label="II.	Đăng ký dịch vụ LVB Digibank"
          >
            <q-card>
              <q-card-section>
                <q-expansion-item switch-toggle-side header-class="bg-grey-2" label="1.	Làm gì để đăng ký sử dụng LVB DigiBank?" expand-icon="help">
                  <q-card>
                    <q-card-section> </q-card-section>
                  </q-card>
                </q-expansion-item>
                <q-expansion-item
                  switch-toggle-side
                  header-class="bg-grey-2"
                  :label="
                    $store.state.language.language === 'en'
                      ? '2.	Khi tôi muốn ngừng sử dụng LVB Digibank tôi cần làm gì?'
                      : $store.state.language.language === 'vi'
                      ? '2.	Khi tôi muốn ngừng sử dụng LVB Digibank tôi cần làm gì?'
                      : '2.	Khi tôi muốn ngừng sử dụng LVB Digibank tôi cần làm gì?'
                  "
                  expand-icon="help"
                >
                  <q-card>
                    <q-card-section> </q-card-section>
                  </q-card>
                </q-expansion-item>
                <q-expansion-item
                  switch-toggle-side
                  header-class="bg-grey-2"
                  :label="
                    $store.state.language.language === 'en'
                      ? '3.	Tôi muốn sử dụng lại LVB DigiBank tôi cần làm gì?'
                      : $store.state.language.language === 'vi'
                      ? '3.	Tôi muốn sử dụng lại LVB DigiBank tôi cần làm gì?'
                      : '3.	Tôi muốn sử dụng lại LVB DigiBank tôi cần làm gì?'
                  "
                  expand-icon="help"
                >
                  <q-card>
                    <q-card-section> </q-card-section>
                  </q-card>
                </q-expansion-item>
              </q-card-section>
            </q-card>
          </q-expansion-item> -->
        </q-list>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import datajson from '../../../public/Data/datafaq.json';
import datajson1 from '../../../public/Data/bussiness.json';
export default {
  data() {
    return {
      slide: 1,
      smartbanking: true,
      smartbanking1: true
    };
  },
  mounted() {
    console.log(this.groupArrayOfObjects(datajson, 'ID'));
  },
  methods: {
    groupArrayOfObjects(list, key) {
      return list.reduce(function(rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
      }, {});
    }
  },
  computed: {
    ...mapState('mobileMode', ['mobileMode']),
    IndividualFAQ() {
      return this.groupArrayOfObjects(datajson, 'ID');
    },
    CorporateFAQ() {
      return this.groupArrayOfObjects(datajson1, 'ID');
    },
    lang() {
      return this.$store.state.language.language;
    }
  }
};
</script>

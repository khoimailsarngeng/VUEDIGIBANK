<template>
  <div id="FrontLayout">
    <q-layout view="hHh lpr fFf">
      <q-header elevated class="bg-primary text-white">
        <q-bar style="padding-left:3%;padding-right:1%;height: 40px;">
          <div    
            class="cursor-pointer text-center"
            style="padding-right:10px;font-size:13px"
          >
            <span  :style="mobileMode ?  window.width > 375 ? 'font-size:10px' : 'font-size:8px'
               : $store.state.language.language == 'la' ? 'font-size:16px' : 'font-size:13px'" class="text-white text-bold">
              {{$t('LVB')}} <br v-if="mobileMode">
              <span class="text-bold text-white">{{$t('LVB1')}}</span>
            </span>
          </div>&nbsp;
          <q-space />
          <div class="cursor-pointer" style="padding-right:10px;">
            <q-icon name="public"></q-icon>
            <a
              :style="mobileMode ? 'font-size:12px' :'font-size:16px'"
              class="text-white"
              target="_blank"
              href="https://www.laovietbank.com.la/la/"
            >www.laovietbank.com</a>
          </div>&nbsp;
          <div class="cursor-pointer">
            <q-fab padding="xs" dense flat color="white" push icon="language" direction="down">
              <q-fab-action padding="xs">
                <q-avatar size="md" @click="lang = 'vi'">
                  <img src="/assets/Flag/vi.png" width="25px" height="25px" />
                </q-avatar>
              </q-fab-action>
              <q-fab-action padding="xs">
                <q-avatar size="md" @click="lang = 'la'">
                  <img src="/assets/Flag/la.png" width="30px" height="30px" />
                </q-avatar>
              </q-fab-action>
              <q-fab-action padding="xs">
                <q-avatar size="md" @click="lang = 'en'">
                  <img src="/assets/Flag/en.png" width="25px" height="25px" />
                </q-avatar>
              </q-fab-action>
            </q-fab>
          </div>
        </q-bar>
        <q-toolbar class="bg-white" style="border-bottom:2px solid #17479D">
          <q-toolbar-title class="text-black">
            <img v-if="!mobileMode" src="/assets/img/Final_new.jpg" height="100%" width="220px" />
            <img v-else src="/assets/img/Final_new.jpg" height="50px" width="180px" />
          </q-toolbar-title>
          <q-space />
          <q-btn-dropdown          
            v-if="!mobileMode"
            class="text-black"
            stretch
            flat
            dropdown-icon="none"
            to="/home"
          >
            <template v-slot:label>
              <div class="row items-center no-wrap">
                <q-icon size="sm" left name="account_balance" />
                <div class="text-center text-h7">{{$t('Home')}}</div>
              </div>
            </template>
          </q-btn-dropdown>
          <q-btn-dropdown v-if="!mobileMode" class="text-black" stretch flat>
            <template v-slot:label>
              <div class="row items-center no-wrap">
                <q-icon size="sm" left name="dashboard" />
                <div class="text-center text-h7">{{$t('Service')}}</div>
              </div>
            </template>
            <q-list>
              <q-item clickable v-close-popup>
                <q-item-section style="margin-right: -80px;">
                  <img src="assets/img/Generalperson.png" style="width:30px;height:30px" />
                </q-item-section>
                <q-item-section>
                  <q-item-label class="text-h7">{{$t('Individualcustomer')}}</q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable v-close-popup>
                <q-item-section style="margin-right: -80px;">
                  <img src="assets/img/Website_Planner-512.png" style="width:30px;height:30px" />
                </q-item-section>
                <q-item-section>
                  <q-item-label class="text-h7">{{$t('Corporatecustomer')}}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
          <q-btn-dropdown v-if="!mobileMode" class="text-black" stretch flat>
            <template v-slot:label>
              <div class="row items-center no-wrap">
                <q-icon size="sm" left name="contact_support" />
                <div class="text-center text-h7">{{$t('Contact')}}</div>
              </div>
            </template>
            <q-list>
              <q-item clickable v-close-popup>
                <div class="row items-center no-wrap">
                  <q-icon size="sm" left name="account_balance" />
                  <div class="text-center text-h7">ສຳນັກງານໃຫຍ່</div>
                </div>
              </q-item>
              <q-item clickable v-close-popup>
                <div class="row items-center no-wrap">
                  <q-icon size="sm" left name="location_on" />
                  <div class="text-center text-h7">ສາຂາ ແລະ ໜ່ວຍບໍລິການ</div>
                </div>
              </q-item>
              <q-item clickable v-close-popup>
                <div class="row items-center no-wrap">
                  <q-icon size="sm" left name="atm" />
                  <div class="text-center text-h7">ທີ່ຕັ້ງຕູ້ ATM</div>
                </div>
              </q-item>
            </q-list>
          </q-btn-dropdown>
          <q-btn
            color="black"
            v-if="mobileMode"
            dense
            flat
            round
            icon="apps"
            @click="left = !left"
          />
        </q-toolbar>
      </q-header>
      <q-drawer v-model="left" side="right" swipe-only>
        <q-list bordered>
          <q-expansion-item
            group="somegroup"
            icon="account_balance"
            :label="$t('Home')"
            header-class="text-primary"
            expand-icon="none"
            @click="$router.push('/home')"
          ></q-expansion-item>

          <q-expansion-item
            group="somegroup"
            icon="dashboard"
            :label="$t('Service')"
            header-class="text-teal"
          >
            <q-list>
              <q-item clickable v-close-popup to="/individual">
                <q-item-section style="margin-right: -150px;">
                  <img src="assets/img/Generalperson.png" style="width:30px;height:30px" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>{{$t('Individualcustomer')}}</q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable v-close-popup>
                <q-item-section style="margin-right: -150px;">
                  <img src="assets/img/Website_Planner-512.png" style="width:30px;height:30px" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>{{$t('Corporatecustomer')}}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-expansion-item>

          <q-separator />
          <q-expansion-item
            group="somegroup"
            icon="contact_support"
            :label="$t('Contact')"
            header-class="text-green"
            expand-icon="none"
          ></q-expansion-item>
        </q-list>
      </q-drawer>
      <q-page-container>
        <q-card>
          <router-view />
        </q-card>        
      </q-page-container>
    </q-layout>
  </div>
</template>
<script>
import { mapState , mapActions } from 'vuex';
export default {
  data() {
    return {
      lang: this.$i18n.locale,
      left: false,      
    };
  },
  watch: {
    lang(lang) {
      this.$i18n.locale = lang;
      this.setLanguage(lang);
    },
    mobileMode(val) {
      if (!val) {
        this.left = false;
      }
    },
  },
  methods : {
    ...mapActions("language",["setLanguage"]),
  },
  computed: {
    ...mapState('mobileMode', ['mobileMode']),    
    ...mapState('mobileMode', ['window']),    
  },
};
</script>
<style lang="scss" scoped>
a[type='button']:hover {
  text-decoration: none;
  background: #0262b6;
  color: white !important;
}
button:hover {  
  text-decoration: none;
  background: #0262b6;
  color: white !important;
}
</style>
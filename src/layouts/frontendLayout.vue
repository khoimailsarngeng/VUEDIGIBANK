<template>
  <div id="FrontLayout">
    <q-layout view="hHh lpr fFf">
      <q-header elevated class="bg-primary text-white">
        <!-- <q-bar style="padding-left:3%;padding-right:1%;height: 40px;">
          <div class="cursor-pointer text-center" style="padding-right:10px;font-size:13px">
            <span
              :style="
                mobileMode
                  ? window.width > 375
                    ? 'font-size:10px'
                    : 'font-size:8px'
                  : $store.state.language.language == 'la'
                  ? 'font-size:16px'
                  : 'font-size:13px'
              "
              class="text-white text-bold"
            >
              {{ $t('LVB') }} <br v-if="mobileMode" />
              <span class="text-bold text-white">{{ $t('LVB1') }}</span>
            </span>
          </div>
          &nbsp;
          <q-space />
          <div class="cursor-pointer" style="padding-right:10px;">
            <q-icon name="public"></q-icon>
            <a :style="mobileMode ? 'font-size:12px' : 'font-size:16px'" class="text-white" target="_blank" href="https://www.laovietbank.com.la/la/"
              >www.laovietbank.com</a
            >
          </div>
          &nbsp;
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
        </q-bar> -->
        <q-toolbar class="bg-white">
          <img
            @click="$router.push('/')"
            :src="
              $store.state.language.language === 'la'
                ? '/assets/img/individual/LVB-logo-lao.svg'
                : $store.state.language.language === 'vi'
                ? '/assets/img/individual/LVB-logo-viet.svg'
                : '/assets/img/individual/LVB-logo-eng.svg'
            "
            class="q-pa-sm"
            height="60px"
            width="130px"
          />
          <q-toolbar-title
            :class="$store.state.language.language === 'la' ? 'q-font-20' : 'q-font-13'"
            v-if="!mobileMode && window.width > 1024"
            @click="$router.push('/')"
            :style="window.width === 1366 ? 'padding: 0;color:#17479b' : 'color:#17479b'"
          >
            {{ $t('LVB') }}
          </q-toolbar-title>

          <q-space />
          <q-btn-dropdown v-if="!mobileMode" class="text-lvbdibank" stretch flat dropdown-icon="none" to="/">
            <template v-slot:label>
              <div class="row items-center no-wrap">
                <q-icon size="sm" left name="account_balance" />
                <div class="text-center text-h7">{{ $t('Home') }}</div>
              </div>
            </template>
          </q-btn-dropdown>
          <q-btn-dropdown v-if="!mobileMode" class="text-lvbdibank" stretch flat>
            <template v-slot:label>
              <div class="row items-center no-wrap">
                <q-icon size="sm" left name="dashboard" />
                <div class="text-center text-h7">{{ $t('Service') }}</div>
              </div>
            </template>
            <q-list style="min-width:250px">
              <q-item clickable v-close-popup to="/individual">
                <q-item-section style="margin-right: -140px;">
                  <img src="assets/img/Generalperson.png" style="width:30px;height:30px" />
                </q-item-section>
                <q-item-section>
                  <q-item-label class="text-h7">{{ $t('Individualcustomer') }}</q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable v-close-popup to="/corporate">
                <q-item-section style="margin-right: -140px;">
                  <img src="assets/img/Website_Planner-512.png" style="width:30px;height:30px" />
                </q-item-section>
                <q-item-section>
                  <q-item-label class="text-h7">{{ $t('Corporatecustomer') }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
          <q-btn-dropdown to="/FAQs" v-if="!mobileMode" class="text-lvbdibank" stretch flat dropdown-icon="none">
            <template v-slot:label>
              <div class="row items-center no-wrap">
                <q-icon size="sm" left name="forum" />
                <div class="text-center text-h7">FAQs</div>
              </div>
            </template>
          </q-btn-dropdown>
          <q-btn-dropdown v-if="!mobileMode" stretch flat icon="language" :label="$t('SelectLanguage')" class="text-lvbdibank">
            <q-list>
              <q-item clickable v-close-popup @click="lang = 'la'" class="text-lvbdibank">
                <q-item-section avatar>
                  <q-avatar style="width:25px;height:25px">
                    <img src="../assets/Flag/la.png" />
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <q-item-label>ພາສາລາວ</q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable v-close-popup @click="lang = 'vi'" class="text-lvbdibank">
                <q-item-section avatar>
                  <q-avatar style="width:25px;height:25px">
                    <img src="/assets/Flag/vi.png" width="40px" height="40px" />
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <q-item-label>Việt Nam</q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable v-close-popup @click="lang = 'en'" class="text-lvbdibank">
                <q-item-section avatar>
                  <q-avatar style="width:25px;height:25px">
                    <img src="/assets/Flag/en.png" width="40px" height="40px" />
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <q-item-label>English</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
          <q-btn color="black" v-if="mobileMode" dense flat round icon="apps" @click="left = !left" />
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
            @click="$router.push('/')"
          ></q-expansion-item>

          <q-expansion-item group="somegroup" icon="dashboard" :label="$t('Service')" header-class="text-teal">
            <q-list>
              <q-item clickable v-close-popup to="/individual">
                <q-item-section style="margin-right: -150px;">
                  <img src="assets/img/Generalperson.png" style="width:30px;height:30px" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>{{ $t('Individualcustomer') }}</q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable v-close-popup to="/corporate">
                <q-item-section style="margin-right: -150px;">
                  <img src="assets/img/Website_Planner-512.png" style="width:30px;height:30px" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>{{ $t('Corporatecustomer') }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-expansion-item>
          <q-separator />
          <q-expansion-item
            group="somegroup"
            icon="forum"
            label="FAQs"
            header-class="text-green"
            expand-icon="none"
            @click="$router.push('/FAQs')"
          ></q-expansion-item>
          <q-separator />
          <q-expansion-item group="somegroup" icon="language" :label="$t('SelectLanguage')" header-class="text-purple">
            <q-list>
              <q-item clickable v-close-popup @click="changelanguage('la')">
                <q-item-section avatar>
                  <q-avatar style="width:25px;height:25px">
                    <img src="../assets/Flag/la.png" />
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <q-item-label>ພາສາລາວ</q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable v-close-popup @click="changelanguage('vi')">
                <q-item-section avatar>
                  <q-avatar style="width:25px;height:25px">
                    <img src="/assets/Flag/vi.png" width="40px" height="40px" />
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <q-item-label>Việt Nam</q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable v-close-popup @click="changelanguage('en')">
                <q-item-section avatar>
                  <q-avatar style="width:25px;height:25px">
                    <img src="/assets/Flag/en.png" width="40px" height="40px" />
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <q-item-label>English</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-expansion-item>
        </q-list>
      </q-drawer>
      <q-page-container>
        <!-- <div
          :style="mobileMode ? '' : vheight"
          :class="$q.screen.name === 'xs' || $q.screen.name === 'sm' ? 'page-home-container-mobile' : 'page-home-container'"
        > -->
        <router-view />
        <!-- </div> -->

        <!-- <q-page-sticky position="bottom-right" :offset="[18, 18]">
          <q-btn v-if="!dialog" @click="dialog = !dialog" round color="primary" icon="chat" size="lg"> </q-btn>
          <q-card :style="mobileMode ? 'width: 330px;' : 'width:100%'" v-if="dialog">
            <q-toolbar class="bg-primary glossy text-white">
              <q-icon name="chat" size="md"> </q-icon>
              <q-toolbar-title style="font-size:14px"
                >Chat with LVB Digibank<br /><span style="font-size:12px">(From 8h - 11h30 & 13h - 17h30 Monday to Friday except for holidays)</span>
              </q-toolbar-title>
              <q-btn flat round dense icon="close" @click="dialog = !dialog" />
            </q-toolbar>
            <q-card-section>
              <q-form class="q-gutter-sm">
                <q-input outlined placeholder="Fullname/Phone number/gender" dense class="q-pa-sm">
                  <template v-slot:prepend>
                    <q-icon name="account_box" />
                  </template>
                </q-input>
                <q-input outlined placeholder="E-mail" dense class="q-pa-sm">
                  <template v-slot:prepend>
                    <q-icon name="email" />
                  </template>
                </q-input>
                <hr />
                <q-input outlined placeholder="Request Description" dense type="textarea">
                  <template v-slot:prepend>
                    <q-icon name="comments" />
                  </template>
                </q-input>
              </q-form>
            </q-card-section>
            <q-card-section
              align="center"
              style="
               padding-right: 25%;
               padding-left: 25%;
            "
            >
              <q-btn size="lg" color="primary" unelevated label="Submit" class="full-width" />
            </q-card-section>
          </q-card>
        </q-page-sticky> -->
      </q-page-container>
    </q-layout>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
export default {
  data() {
    return {
      lang: this.$i18n.locale,
      left: false,
      dialog: false,
      position: 'bottom',
      vheight: '',
      slide: 1
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
    bbwidth(val) {
      var a = this.window.height;
      this.vheight = 'height:' + a + 'px';
    }
  },
  methods: {
    ...mapActions('language', ['setLanguage']),
    open(val) {
      this.position = val;
      this.dialog = !this.dialog;
    },
    changelanguage(val) {
      this.lang = val;
      this.left = !this.left;
    }
  },
  computed: {
    ...mapState('mobileMode', ['mobileMode']),
    ...mapState('mobileMode', ['window']),
    bbwidth() {
      return this.window.height;
    },
    bodyheight() {
      var a = this.window.height;
      return 'height:' + a + 'px';
    }
  }
};
</script>
<style lang="scss" scoped>
a[type='button']:hover {
  text-decoration: none;
  background: #0262b6;
  color: white !important;
}
button:hover {
  background: #0262b6;
  color: white !important;
}
a:hover {
  text-decoration: none;
}

.classChat {
  visibility: visible;
  top: 691px !important;
  left: 1373px;
  min-height: 56px;
  max-height: 56px;
  max-width: 192px;
}
.page-home-container {
  margin-right: 15%;
  margin-left: 15%;
}
.page-home-container-mobile {
  margin-right: 2%;
  margin-left: 2%;
}
.text-lvbdibank {
  color: #17479b;
  font-weight: bold;
}
</style>

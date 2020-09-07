<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import MobileDetector from "./mixins/MobileDetector.js";
import { mapActions , mapMutations } from "vuex";
export default {
  name: 'App',
  mixins: [MobileDetector],
  data() {
    return {
      mbMode: this.detectMobile()
    };
  },
  beforeMount(){
    this.deviceCheck(this.detectMobile());
    window.addEventListener("resize", () => {
      this.deviceCheck(this.detectMobile());
      this.SET_WINDOW_RESIZE();
    });
    if (this.mbMode) {
      this.deviceCheck(true);
      this.SET_WINDOW_RESIZE();
    } else {
      if (window.innerWidth < 800) {
        this.deviceCheck(true);
        this.SET_WINDOW_RESIZE();
      } else {
        this.deviceCheck(false);
        this.SET_WINDOW_RESIZE();
      }
    } 
  },
  mounted(){
    
    window.addEventListener("resize", () => {
      if (window.innerWidth < 800) {
        this.SET_WINDOW_RESIZE();
        this.deviceCheck(true);
      } else {
        this.SET_WINDOW_RESIZE();
        this.deviceCheck(false);
      }
    });
  },
  methods: {
    ...mapActions("mobileMode", ["deviceCheck", "roomArrow"]),    
    ...mapMutations("mobileMode", ["SET_WINDOW_RESIZE"]),    
  }
}
</script>
<style>
@font-face {
    font-family: KillALLA;
    src: url("./assets/fonts/NotoSerifLao-Regular.ttf") format("truetype");
  }
  
  body {
    margin: 0;
    padding: 0;
    overflow: auto;
    font-family: "KillALLA" , 'Muli', 'sans-serif' !important;
  }

  a:hover{
    text-decoration: none !important;
  }
  button:hover{
    text-decoration: none !important;
  }
</style>

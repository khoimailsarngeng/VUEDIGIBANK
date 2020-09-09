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
        img-src="/assets/img/FAQs.jpg"
      />
      <template v-slot:control>
        <q-carousel-control
          :style="mobileMode ? 'margin: 50px;' : ''"
          :position="mobileMode ? 'bottom-left' : 'bottom-left'"
          :offset="mobileMode ? [50, 400] : [100, 280]"
          class="q-gutter-xs"
        >
          <q-card flat bordered class="my-card bg-transparent" style="border:0">
            <q-card-section>
              <div class="row items-center no-wrap">
                <div class="col">
                  <div :class=" mobileMode ? 'text-h5' : 'text-h4'">
                    <span class="text-primary">Ask and Answer</span>&nbsp;
                  </div>
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
    </q-carousel>
    <div class="q-pa-md">
      <div class="text-h5">Frequently asked questions</div>
      <div class="q-pa-md" style="max-width: 100%">
        <q-list bordered class="rounded-borders">
          <q-expansion-item   
            v-model="smartbanking"       
            switch-toggle-side                  
            :expand-icon="smartbanking ? 'remove_circle_outline' : 'control_point'"  
            :header-class="smartbanking ? 'bg-primary text-white' : ''"    
            label="Laoviet Digibank Smartbanking"
          >          
            <q-card>
              <q-card-section>
                <q-expansion-item                    
                  switch-toggle-side 
                  header-class="bg-grey-2"
                  label="What is Laoviet Digital Banking?"
                  expand-icon="help"
                >     
                <q-card>
                  <q-card-section>
                    Answer
                  </q-card-section>
                </q-card>
                </q-expansion-item>
                <q-expansion-item                    
                  switch-toggle-side 
                  header-class="bg-grey-2"
                  label="Features of Laoviet Digital Banking"
                  expand-icon="help"
                >     
                <q-card>
                  <q-card-section>
                    Answer
                  </q-card-section>
                </q-card>
                </q-expansion-item>
                <q-expansion-item                    
                  switch-toggle-side  
                  header-class="bg-grey-2"
                  label="Can I use my username and password to log in to Laoviet Digital Banking application on different devices?"
                  expand-icon="help"
                >     
                <q-card>
                  <q-card-section>
                    Answer
                  </q-card-section>
                </q-card>
                </q-expansion-item>
                <q-expansion-item                    
                  switch-toggle-side    
                  header-class="bg-grey-2"                                                    
                  label="How can I register to use Laoviet Digital Banking?"
                  expand-icon="help"
                >     
                <q-card>
                  <q-card-section>
                    Answer
                  </q-card-section>
                </q-card>
                </q-expansion-item>
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </q-list>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  data() {
    return {
      slide: 1,
      smartbanking : false
    };
  },
  computed: {
    ...mapState('mobileMode', ['mobileMode']),
  },
};
</script>
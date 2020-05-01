<template>
  <div>

    <section id="about" class="section mt-5">
      <div class="container">
        <div class="row justify-content-center sm-m-25px-b m-45px-b">
          <div class="col-lg-8 col-md-10">
            <div class="section-title text-center">
              <h2 class="">What cleaning do you need?</h2>
              <p class="">
              </p>
            </div>
          </div>
        </div>

        <div class="row">
          <div @click="redirectTo('/booking/full')" class="col-md-6 m-15px-tb">
            <div class="feature-box-05">
              <div class="icon">
                <img src="https://res.cloudinary.com/whavit/image/upload/v1572050881/Whavit%20Icon/Full_cleaning_service_bezmyn.png" width="50%" title alt />
              </div>
              <div class="feature-content">
                <h5>Full Cleaning Service</h5>
                <p class="mb-2">
                  Our full cleaning service entails a thorough cleaning of your home or office.
                  This includes Post Construction, Light and Deep Cleaning.
                </p>
                <div class="btn-bar mb-5">
                  <router-link class="m-btn m-btn-shadow m-btn-theme2nd rounded" to="/booking/full">
                    Choose
                    <i class="m-10px-l fa fa-chevron-right"></i>
                  </router-link>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-6 m-15px-tb">
            <div @click="redirectTo('/booking/special')" class="feature-box-05">
              <div class="icon">
                <img src="https://res.cloudinary.com/whavit/image/upload/v1572050881/Whavit%20Icon/Special_Cleaning_hegdqm.png" width="50%" title alt />
              </div>
              <div class="feature-content">
                <h5>Special Cleaning Service</h5>
                <p>
                  Our special cleaning service focuses on delicate materials and surfaces not cleaned regularly.
                  These include your upholstery and carpet cleaning, mattress hygiene, AC servicing and disinfection, floor
                  restoration and fumigation.
                </p>
                <div class="btn-bar">
                  <router-link class="m-btn m-btn-shadow m-btn-theme2nd rounded" to="/booking/special">
                    Choose
                    <i class="m-10px-l fa fa-chevron-right"></i>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer></Footer>
  </div>
</template>

<script>
/* eslint-disable */

import $ from 'jquery';
import jQuery from '../../../mixins/jqueryHelper';
import Footer from "../../../components/Includes/Main/Footer.vue";
import GeneralTags from "./../../../mixins/gtm.js";



export default {
  name: "SelectBookingType",
  components: {
    Footer,
  },
  data() {
    return {
      
    };
  },
  methods: {
    redirectTo(path){
      this.$router.push(path);
    }
  },
  computed: {
    auth() {
      return this.$store.getters.isLoggedIn;
    },
  },
  created() {
    jQuery($);
 
  },
  mounted() {
    GeneralTags();
  
  }
};

</script> 

<style scoped>

</style>
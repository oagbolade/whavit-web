<template>
  <div>
    <section id="home" class="home-banner-03">
      <div class="effect"></div>
      <div class="particles-box bg-cover bg-no-repeat" id="particles-box" style="background-image: url('https://res.cloudinary.com/whavit/image/upload/v1570751849/whavit/IMG_6533_u8hsxh.jpg')">
        <canvas class="particles-js-canvas-el" width="2880" height="2714" style="width: 100%; height: 100%;"></canvas>
      </div>
      <div class="container">
        <div class="row align-items-center justify-content-center mt-10">
          <div class="col-lg-6 offset-lg-1">
            <div class="hb-text text-center mt-5 mb-5">
              <h1>Whavit For Busy Professionals</h1>
              <p>
                You have the world to conquer, 
                you have a gazillion things to do with your time, 
                cleaning certainly should be the least of your worries.
              </p>
            </div>
          </div>
          <div class="col-lg-6">
            <!-- <img class="max-width-auto" src="static/img/home-4-hb.svg" title="" alt=""> -->
          </div>
        </div>
      </div>
    </section>

    

    <section id="about" class="section">
      <div class="container">
        <!-- <div class="row justify-content-center sm-m-25px-b m-45px-b">
          <div class="col-lg-8 col-md-10">
            <div class="section-title text-center">
              <h2 class="">Whavit For Busy Professionals</h2>
              <p class="">
                You have the world to conquer, 
                you have a gazillion things to do with your time, 
                cleaning certainly should be the least of your worries.
              </p>
            </div>
          </div>
        </div> -->

        <div class="row">
          <div class="col-md-6 m-15px-tb">
            <div class="feature-box-05">
              <div class="icon">
                <img src="https://res.cloudinary.com/whavit/image/upload/v1572048611/Whavit%20Icon/Boss_Lady_kd3naj.png" width="40%" title alt />
              </div>
              <div class="feature-content">
                <h5>Boss-Lady Subscription</h5>
                <p>
                  You need some “me-time” devoid of house chores:  Why not let us take away the stress of cleaning from you, so you can have some
alone time devoid of house chores.
                </p>
                <div class="btn-bar">
                  <router-link class="m-btn m-btn-shadow m-btn-theme2nd rounded" to="/boss-lady">
                    Get Started
                    <i class="m-10px-l fa fa-chevron-right"></i>
                  </router-link>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-6 m-15px-tb">
            <div class="feature-box-05">
              <div class="icon">
                <img src="https://res.cloudinary.com/whavit/image/upload/v1576865712/Icons/Executive_Subscription_q4qatm.png" width="45%" title alt />
              </div>
              <div class="feature-content">
                <h5>Executive Subscription</h5>
                <p>
                  Worry less about one thing. Enjoy the convenience of automated and effective cleaning services.
                </p>
                <div class="btn-bar mt-1">
                  <router-link class="m-btn m-btn-shadow m-btn-theme2nd rounded" to="/executive">
                    Get Started
                    <i class="m-10px-l fa fa-chevron-right"></i>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

 
    

    <section class="section cta-section-01 bg-cover bg-no-repeat image-part" id="outer-box">
      <div class="container-fluid" id="inner-box">
        <div class="row justify-content-center">
          <div class="col-12 col-lg-8 text-center m-15px-tb">
            <h2 class="white-color">We're always eager to leave a remarkable impact in your home or business</h2>
            <p class="large white-color-light">
              Several people like you use us. No matter your request we are here for you.
            </p>
          </div>

          <div class="col-12 text-center m-15px-tb">
            <router-link
              class="m-btn m-btn-t-white"
              to="/booking-request"
            >Make A Cleaning Request On Whavit!</router-link>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>
<script>
import Footer from "../../components/Includes/Main/Footer.vue";
import GeneralTags from "./../../mixins/gtm.js";


export default {
  name: "Mattress",
  data() {
    return {
      nav_number: 2
    };
  },
  components: {
    Footer
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
.image-part {
    background: url("https://res.cloudinary.com/whavit/image/upload/v1570751846/whavit/IMG_6511_1_vftizz.jpg");
}
</style>

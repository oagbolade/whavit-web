<template>
  <div>
    <section id="home" class="home-banner-03">
      <div class="effect"></div>
      <div class="particles-box" id="particles-box" style="background-image: url('https://res.cloudinary.com/whavit/image/upload/v1570751844/whavit/IMG_6372_bf1oxj.jpg')">
        <canvas class="particles-js-canvas-el" width="2880" height="2714" style="width: 100%; height: 100%;"></canvas>
      </div>
      <div class="container">
        <div class="row align-items-center justify-content-center mt-10">
          <div class="col-lg-6 offset-lg-1">
            <div class="hb-text text-center">
              <h1>Light Cleaning</h1>
              <p>
                Simple, yet effective and quality cleaning by professionals. 
              </p>
              <div class="btn-bar">
                <router-link class="m-btn m-btn-round m-btn-shadow m-btn-white" to="/booking/full">Book Light Cleaning<i class="fa fa-angle-right m-5px-l"></i></router-link>
                <!-- <a class="m-btn m-btn-round m-btn-shadow m-btn-t-white" href="#">Learn More <i class="fa fa-angle-right m-5px-l"></i></a> -->
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <!-- <img class="max-width-auto" src="static/img/home-4-hb.svg" title="" alt=""> -->
          </div>
        </div>
      </div>
    </section>

    <section id="feature" class="section effect-section">
      <div class="effect-01 right"></div>
      <div class="container">

        <div class="row align-items-center">
          <div class="col-lg-6 md-m-30px-t">
            <img class="max-width-auto img-fluid" style="width: 100%;" src="https://res.cloudinary.com/whavit/image/upload/v1570751852/whavit/IMG_6566_wbibxo.jpg" title="" alt="">  
          </div>
          <div class="col-lg-6">
            <div class="side-feature sm-p-0px-r md-p-30px-r p-70px-r">
              <h3>
                Schedule your cleaning. Clean when you want. Have a healthy environment.
              </h3><br>
              <p class="large">
                You’re so confident that when coming home with guests, you don’t call those at home telling them to
                tidy up. When your kids play around, there’s nothing to worry about, because your home surfaces are clean and free of germs. Sounds good, doesn’t it?
              </p>
              <hr class="m-25px-tb">
              <div class="list-type-01">
                  <router-link class="btn btn-primary" :to="{ path: '/book', query: { cleaning_type: 'lite' }}">Clean your Home Now! <i class="fas fa-long-arrow-alt-right"></i></router-link>
              </div>
            </div>
          </div> 
          
        </div> 
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="side-feature sm-p-0px-r md-p-30px-r p-70px-r">
              <label class="theme-color">Why Us?</label>
              <h2>It is simple</h2>
              <p class="large">
                You can hire a “mop and bucket” cleaning contractor who will ensure there’s no trace of stain when they finish cleaning. But really, what about the hygiene? There are many
                critical areas in your house that need special attention. 
                <br>
                These include the WCs, door handles, light switches, remote controls, sinks, grouts, showers, dustbin, etc., as they are areas that harbor bacteria and other microorganisms. We
                give special attention to these areas. Our professionals are big on the small details. With our services, we make sure your apartment is clean and hygienic. For us, a spotless house
                is just the side effect.
              </p>
              <hr class="m-25px-tb">
              <div class="list-type-01 mr-10">
                  <a class="m-lin" target="_blank" href="https://blog.whavit.com">Read More: Want to know more about WhavLight Cleaning </a>
              </div>
            </div>
          </div>
          
          <div class="col-lg-6 text-center">
            <img src="https://res.cloudinary.com/whavit/image/upload/v1570751846/whavit/IMG_5986_ubijmp.jpg" title alt />
          </div>
          
        </div>
       
      </div>
    </section>

    <section class="section cta-section-01 bg-cover bg-no-repeat image-part" id="outer-box">
      <div class="container-fluid" id="inner-box">
        <div class="row justify-content-center" >
          <div class="col-12 col-lg-8 text-center m-15px-tb">
            <h2
              class="white-color"
            >We're always eager to leave a remarkable impact in your home or business</h2>
            
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
  name: "Business",
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

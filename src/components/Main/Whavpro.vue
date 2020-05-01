<template>
  <div>
    <section id="home" class="home-banner-02">
      <div class="effect"></div>
      <div class="particles-box" id="particles-box">
        <canvas
          class="particles-js-canvas-el"
          width="2880"
          height="2434"
          style="width: 100%; height: 100%;"
        ></canvas>
      </div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-9">
            <div class="hb-text">
              <h4 style="font-size:50px" class="text-white">Make Up To ₦350,000 Monthly</h4>
              <p>Start earning money today! With Whavit, you’ll have access to hundreds of jobs and build your own schedule.</p>
            </div>
          </div>
          <div class="col-lg-12 text-center">
            <img src="https://res.cloudinary.com/whavit/image/upload/v1572214271/Whavit%20Icon/edit_1_vgic52.jpg" width="80%" class="img-fluid" title alt />
          </div>
        </div>
      </div>
    </section>

    <section id="about" class="section effect-section">
      <div class="container">
        <div class="row justify-content-center m-45px-b sm-m-25px-b">
          <div class="col-lg-8 col-md-10">
            <div class="section-title text-center">
              <h2>How It Works</h2>
              <p>Make up to ₦12,000/job as a Professional cleaner on Whavit. Our top professionals make more than ₦100,000 a week.</p>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-4 m-15px-tb">
            <div class="feature-box-09">
              <div class="icon">
                <img src="https://res.cloudinary.com/whavit/image/upload/v1576865710/Icons/Flexible_schedule_anhglr.png" title alt />
              </div>
              <div class="feature-content">
                <div class="no">
                  <label>01</label>
                </div>
                <h5>Flexible Schedule</h5>
                <p>You’re the boss. Build your schedule around the time that works for you. </p><br><br>
              </div>
            </div>
          </div>

          <div class="col-lg-4 m-15px-tb">
            <div class="feature-box-09">
              <div class="icon">
                <img src="https://res.cloudinary.com/whavit/image/upload/v1576865711/Icons/Easy_Payment_mkx4ww.png" title alt />
              </div>
              <div class="feature-content mb-4">
                <div class="no">
                  <label>02</label>
                </div>
                <h5>Easy Payments</h5>
                <p>Your payments are deposited directly into your bank account soon after the job is complete.</p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 m-15px-tb">
            <div class="feature-box-09">
              <div class="icon">
                <img src="https://res.cloudinary.com/whavit/image/upload/v1576865709/Icons/home_zn3n5t.png" title alt />
              </div>
              <div class="feature-content">
                <div class="no">
                  <label>03</label>
                </div>
                <h5>Get Covered</h5>
                <p>We’ve got an insurance programme that protects you from the financial cost of accidents or other events while you’re working.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      class="section cta-section-01 bg-cover bg-no-repeat image-part" id="outer-box">
      <div class="container-fluid" id="inner-box">
        <div class="row justify-content-center">
          <div class="col-12 col-lg-8 text-center m-15px-tb">
            <h2 class="white-color">We're always in search of cleaning experts</h2>
            <p
              class="large white-color-light"
            >Join our always increasing team of experienced and skilled WhavPros</p>
          </div>

          <div class="col-12 text-center m-15px-tb">
            <router-link class="m-btn m-btn-t-white" to="/vendor/register">Get Started</router-link>
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
  name: "Whavpro",
  components: {
    Footer
  },
  created() {
    jQuery($);
 
  },
mounted() {
    GeneralTags();

    // var url = window.location;
    // var jsFile = url.origin +'/main.js';
    // let recaptchaScript = document.createElement('script')
    // recaptchaScript.setAttribute('src', jsFile);
    // document.head.appendChild(recaptchaScript)
  }
};
</script>

<style scoped>
.image-part{
    background: url("https://res.cloudinary.com/whavit/image/upload/v1570751846/whavit/IMG_6511_1_vftizz.jpg");
}
</style>

<template>
  <div>
    <section class="page-title-lg" style="background: #1281dd;">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-12">
            <h1 class="white-color text-center">Quality Assurance</h1>
          </div>
        </div>
      </div>
    </section>

    <div class="blog-entry-content">
      <div class="container container-small">
        <p>
          Quality is at the watchword of everything we do. Our standards are
          what make us different from other cleaning agents and contractors.
        </p>
        <h2>Your Experience Matters. 100% Money back Guaranteed!</h2>
        <p>
          We make sure to match you with the right WhavPro every time you need
          the services. If you’re not satisfied with the quality of the service
          you booked and paid for directly on Whavit, you are guaranteed a 100%
          money back.
        </p>
        <figure class="alignwide">
          <img
            src="https://res.cloudinary.com/whavit/image/upload/v1570751851/whavit/IMG_6606_ekndcn.jpg"
            title=""
            alt=""
          />
        </figure>
        <h2>
          We’ve got you covered. Insurance Covered Cleaning
        </h2>
        <p>
          In the rare event of damage, we’ve got an insurance programme that
          protects your home from cost of accidents or other events while our
          WhavPros are working.
        </p>
        <figure class="alignwide">
          <img
            src="https://res.cloudinary.com/whavit/image/upload/v1570751849/whavit/IMG_6464_b0u2pf.jpg"
            title=""
            alt=""
          />
        </figure>
        <h2>
          Vetted WhavPros
        </h2>
        <p>
          Your cleaning from Whavit is performed by experienced,
          background-checked professionals who are highly rated by customers
          like you. These Pros are also screened for health and security safety.
        </p>
      </div>
    </div>

    <section class="section gray-bg">
      <div class="container">
        <div class="row m-45px-b sm-m-25px-b justify-content-center">
          <div class="col-md-10 col-lg-8">
            <div class="section-title text-center">
              <h2>We are here for you!</h2>
              <p class="large-text">
                If you’re not happy or satisfied with our services, just let us
                know and we’ll work to make it right.
              </p>
            </div>
          </div>
        </div>

        <div class="counter-col-01-row">
          <div class="row couner">
            <div class="col-6 col-lg-4 m-15px-tb">
              <div
                class="counter-col-01 d-flex justify-content-center align-items-center m-auto"
              >
                <div class="counter-data">
                  <div class="theme-color-2nd">Our Office</div>
                  <h6>9a Abagbon Cl, Victoria Island, Lagos, Nigeria.</h6>
                </div>
              </div>
            </div>

            <div class="col-6 col-lg-4 m-15px-tb">
              <div
                class="counter-col-01 d-flex justify-content-center align-items-center m-auto"
              >
                <div class="counter-data">
                  <div class="theme-color-2nd">Technical support</div>
                  <h6>Please connect with us at support@whavit.com</h6>
                </div>
              </div>
            </div>

            <div class="col-6 col-lg-4 m-15px-tb">
              <div
                class="counter-col-01 d-flex justify-content-center align-items-center m-auto"
              >
                <div class="counter-data">
                  <div class="theme-color-2nd">Customer care</div>
                  <h6>Phone (234) 01-123-456</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      class="section cta-section-01 bg-cover bg-no-repeat image-part"
      id="outer-box"
    >
      <div class="container-fluid" id="inner-box">
        <div class="row justify-content-center">
          <div class="col-12 col-lg-8 text-center m-15px-tb">
            <h2 class="white-color">Ready to book?</h2>
            <p class="large white-color-light">
              Several people like you use us. No matter your request we are here
              for you.
            </p>
          </div>

          <div class="col-12 text-center m-15px-tb">
            <router-link class="m-btn m-btn-t-white" to="/booking-request"
              >Request Cleaning</router-link
            >
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
  name: "QualityAssurance",
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
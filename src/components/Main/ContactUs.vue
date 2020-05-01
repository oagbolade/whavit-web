<template>
  <div>
    <section class="page-title-lg" style="background: #1281dd;">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h1 class="white-color text-center display-1">Get In Touch!</h1>
          </div>
        </div>
      </div>
    </section>

    <section class="section gray-bg">
      <div class="container">
        <div class="row m-45px-b sm-m-25px-b justify-content-center">
          <div class="col-md-10 col-lg-8">
            <div class="section-title text-center">
              <h2>We are here for you!</h2>
              <p class="large-text"></p>
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
                  <h6>9a Abagbon Cl, Victoria Island, Lagos, Nigeria</h6>
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
    <Footer />
  </div>
</template>
<script>
import Footer from "../../components/Includes/Main/Footer.vue";
import GeneralTags from "./../../mixins/gtm.js";

export default {
  name: "ContactUs",
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
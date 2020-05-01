<template>
  <div>
    <section id="home" class="home-banner-03">
      <div class="effect"></div>
      <div
        class="particles-box"
        id="particles-box"
        style="background-image: url('https://res.cloudinary.com/whavit/image/upload/v1570751855/whavit/IMG_6649_ya9nqm.jpg')"
      >
        <canvas
          class="particles-js-canvas-el"
          width="2880"
          height="2714"
          style="width: 100%; height: 100%;"
        ></canvas>
      </div>
      <div class="container">
        <div class="row align-items-center justify-content-center mt-10">
          <div class="col-lg-6 offset-lg-1">
            <div class="hb-text text-center">
              <h1>Mattress Hygiene</h1>
              <p>
                See, it looks like there’s a dirty little secret in your
                bedroom!
              </p>
              <div class="btn-bar">
                <router-link
                  class="m-btn m-btn-round m-btn-shadow m-btn-white"
                  :to="{ path: '/book', query: { cleaning_type: 'mattress' } }"
                  >Book Mattress Hygiene<i class="fa fa-angle-right m-5px-l"></i
                ></router-link>
                <!-- <a class="m-btn m-btn-round m-btn-shadow m-btn-t-white" href="#">Learn More <i class="fa fa-angle-right m-5px-l"></i></a> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="feature" class="section effect-section">
      <div class="effect-01 right"></div>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="side-feature sm-p-0px-r md-p-30px-r p-70px-r">
              <label class="theme-color">
                See, it looks like there’s a dirty little secret in your
                bedroom!
              </label>
              <h2></h2>
              <p class="large">
                You shed an average of 1 million dead skin cells during sleep,
                and an average of 500ml night sweat; that is the size of a small
                Coke bottle! The truth is, mattresses collect dead skin cells,
                sweat, stains, dust mites, and all manner of excretions from
                your body.
              </p>
              <hr class="m-25px-tb" />
              <div class="list-type-01">
                <router-link
                  class="m-link"
                  :to="{ path: '/book', query: { cleaning_type: 'mattress' } }"
                  >Start Here! Clean Your Mattress Now
                  <i class="fas fa-long-arrow-alt-right mt-1"></i
                ></router-link>
              </div>
            </div>
          </div>
          <div class="col-lg-6 md-m-30px-t">
            <img
              class="max-width-auto img-fluid"
              style="width: 100%;"
              src="https://res.cloudinary.com/whavit/image/upload/v1570751855/whavit/IMG_6649_ya9nqm.jpg"
              title=""
              alt=""
            />
          </div>
        </div>
      </div>
    </section>

    <section class="section p-0px-t effect-section">
      <div class="effect-01 left"></div>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 order-lg-0 order-2 md-m-30px-t">
            <img
              class="max-width-auto float-right img-fluid"
              style="width: 100%;"
              src="https://res.cloudinary.com/whavit/image/upload/v1570751851/whavit/IMG_6673_hvj0ch.jpg"
              title=""
              alt=""
            />
          </div>
          <div class="col-lg-6">
            <div class="side-feature sm-p-0px-l md-p-40px-l p-70px-l">
              <label class="theme-color"> </label>
              <h2></h2>
              <p class="large">
                Even with consistently changing your linens dirt, dust and sweat
                will still get down to your mattress. You don’t want bacteria in
                bed with you or your kids. It’s scary, we know. Be rest assured,
                our solution eliminates 99.8% of contaminants that are coming
                between you and a good night’s sleep.
              </p>
              <hr class="m-25px-tb" />
              <div class="list-type-01">
                <router-link
                  class="m-link"
                  :to="{ path: '/book', query: { cleaning_type: 'mattress' } }"
                  >Start Here! Clean Your Mattress Now
                  <i class="fas fa-long-arrow-alt-right mt-1"></i
                ></router-link>
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
                We’ve spent a lot of time researching and developing the most
                effective systems to clean mattresses. Our specially designed
                and portable mattress cleaning system gets rid of allergens such
                as dust-mites, pet dander, pollen, bodily fluids, stains and
                smells that have accumulated in your bed overtime. We leave your
                bed sanitized, clean, and deodorized!
              </p>
              <hr class="m-25px-tb" />
              <div class="list-type-01">
                <a class="m-lin" target="_blank" href="https://blog.whavit.com"
                  >Read More About Mattress Cleaning
                </a>
              </div>
            </div>
          </div>

          <div class="col-lg-6 text-center">
            <img
              src="https://res.cloudinary.com/whavit/image/upload/v1570751849/whavit/IMG_6459_qhwkoy.jpg"
              title
              alt
            />
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
            <h2 class="white-color">
              We're always eager to leave a remarkable impact in your home or
              business
            </h2>
            <p class="large white-color-light">
              Several people like you use us. No matter your request we are here
              for you.
            </p>
          </div>

          <div class="col-12 text-center m-15px-tb">
            <router-link class="m-btn m-btn-t-white" to="/booking-request"
              >Make A Cleaning Request On Whavit!</router-link
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

<template>
  <div>
    <section id="home" class="home-banner-03">
      <div class="effect"></div>
      <div
        class="particles-box"
        id="particles-box"
        style="background-image: url('https://res.cloudinary.com/whavit/image/upload/v1570751853/whavit/IMG_6686_hiudwh.jpg'); background-repeat:no-repeat; background-size:100%; "
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
              <h1 style="font-size:38px">AC Servicing & Disinfection</h1>
              <p>
                We service, clean & disinfect. Let's tell you why.
              </p>
              <div class="btn-bar">
                <router-link
                  class="m-btn m-btn-round m-btn-shadow m-btn-white"
                  :to="{ path: '/book', query: { cleaning_type: 'ac' } }"
                  >Service & Disinfect Your AC Now
                  <i class="fa fa-angle-right m-5px-l"></i
                ></router-link>
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
          <div class="col-lg-6">
            <div class="side-feature sm-p-0px-r md-p-30px-r p-70px-r">
              <label class="theme-color">
                Your Journey to Pure Air Starts Here.
              </label>
              <h2></h2>
              <p class="large">
                We breathe in 11,000 liters of air a day! Now think about it -
                do you have any idea what is inside an AC system and Duct before
                it even gets to your lungs? Most times, harmful micro-organisms
                like atmospheric dust, viruses, bacteria, fungi and pollen are
                hidden in your AC vents. Many road side vendors just refill your
                gas and dust your vents, NONE does AC disinfection.
              </p>
              <hr class="m-25px-tb" />
              <div class="list-type-01">
                <router-link
                  class="m-lin"
                  :to="{ path: '/book', query: { cleaning_type: 'ac' } }"
                  >Service & Disinfect Your AC Now
                  <i class="fas fa-long-arrow-alt-right"></i
                ></router-link>
              </div>
            </div>
          </div>
          <div class="col-lg-6 md-m-30px-t">
            <img
              class="max-width-auto img-fluid"
              style="width: 100%;"
              src="https://res.cloudinary.com/whavit/image/upload/v1570751852/whavit/IMG_6696_gfbbqy.jpg"
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
              src="https://res.cloudinary.com/whavit/image/upload/v1570751853/whavit/IMG_6701_onmrxp.jpg"
              title=""
              alt=""
            />
          </div>
          <div class="col-lg-6">
            <div class="side-feature sm-p-0px-l md-p-40px-l p-70px-l">
              <label class="theme-color"> </label>
              <h2></h2>
              <p class="large">
                How dirty air conditioners and filters affect the quality of air
                in your home can not be overemphasized. Not cleaning regularly
                can obstruct clean airflow and in turn spreading germs and
                allergens. Let’s service, clean and disinfect.
              </p>
              <hr class="m-25px-tb" />
              <div class="list-type-01">
                <router-link
                  class="m-lin"
                  :to="{ path: '/book', query: { cleaning_type: 'ac' } }"
                  >Service & Disinfect Your AC Now
                  <i class="fas fa-long-arrow-alt-right"></i
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
                Our AC Cleaning Services offers you what you need to have a
                clean air in the place you stay most of the time. We not only
                service your AC, we disinfect it, living you to breathe in clean
                air. We maintain, clean and disinfect. Our AC servicing leaves
                you with clean air free of germs and allergens. Let your journey
                to good healthy living start here.
              </p>
              <hr class="m-25px-tb" />
              <ul class="list-type-01">
                <a class="m-lin" target="_blank" href="https://blog.whavit.com">
                  Read More: Oxygen from Clean air helps your cells to repair
                  itself when you are sick
                  <i class="fas fa-long-arrow-alt-right"></i>
                </a>
              </ul>
            </div>
          </div>

          <div class="col-lg-6 text-center">
            <img
              src="https://res.cloudinary.com/whavit/image/upload/v1570751846/whavit/IMG_6511_1_vftizz.jpg"
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

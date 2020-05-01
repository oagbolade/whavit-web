<template>
  <div>
    <section id="home" class="home-banner-03">
      <div class="effect"></div>
      <div
        class="particles-box"
        id="particles-box"
        style="background-image: url('https://res.cloudinary.com/whavit/image/upload/v1575821029/whavit/New%20Images/Carpet_cleaning_top_page_glqhpg.jpg'); background-repeat:no-repeat; background-size:100%; "
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
              <h1>Carpet Cleaning</h1>
              <p>
                A clean and hygienic carpet can enhance the quality of living.
              </p>
              <div class="btn-bar">
                <router-link
                  class="m-btn m-btn-round m-btn-shadow m-btn-white"
                  :to="{ path: '/book', query: { cleaning_type: 'carpet' } }"
                  >Book Our Carpet Cleaning Service
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
                Get rid of the germs now!
              </label>
              <h2></h2>
              <p class="large">
                Carpet is made to hide dirt. 70% of flu allergies stem from your
                carpet, rugs or furniture. Kids especially in infancy eat and
                sniff anything they see on the floor. Their hand to mouth is so
                fast you can hardly catch up with them ;)
              </p>
              <hr class="m-25px-tb" />
              <div class="list-type-01">
                <router-link class="m-lin" to="/booking-request"
                  >Get rid of the germs now!
                  <i class="fas fa-long-arrow-alt-right"></i
                ></router-link>
              </div>
            </div>
          </div>
          <div class="col-lg-6 md-m-30px-t">
            <img
              class="max-width-auto img-fluid"
              style="width: 100%;"
              src="https://res.cloudinary.com/whavit/image/upload/v1575820870/whavit/New%20Images/Carpet_cleaning_second_picture_yluzcj.jpg"
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
              src="https://res.cloudinary.com/whavit/image/upload/v1575821005/whavit/New%20Images/Carpet_cleaning_3rd_pciture_hssgdl.jpg"
              title=""
              alt=""
            />
          </div>
          <div class="col-lg-6">
            <div class="side-feature sm-p-0px-l md-p-40px-l p-70px-l">
              <label class="theme-color"> </label>
              <h2></h2>
              <p class="large">
                Let us help you keep the carpet clean and germ free for them to
                play on. Food crumbs, spills, excretion, bodily fluid,
                allergens, dust mite, can easily be trapped in your carpet.
                Worry less, we’ve got a simple yet effective solution to clean
                and disinfect your carpet.
              </p>
              <hr class="m-25px-tb" />
              <div class="list-type-01">
                <router-link
                  class="m-lin"
                  :to="{ path: '/book', query: { cleaning_type: 'carpet' } }"
                  >Get rid of the germs now!
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
                Your carpet is a giant air cleaner for your home. Dirt can
                burrow deep in the fibers of your carpet making you breathe in
                contaminated air. Although you can’t always see it, not deep
                cleaning your carpet can cause allergies. Our carpet cleaning
                treatments can eliminate odours and stains giving you a germ
                free environment.
              </p>
              <hr class="m-25px-tb" />
              <div class="list-type-01">
                <a class="m-lin" target="_blank" href="https://blog.whavit.com">
                  Read More: Did you know that deep within your carpets, muck
                  and grime could be spreading and cause allergies?
                </a>
              </div>
            </div>
          </div>

          <div class="col-lg-6 text-center">
            <img
              src="https://res.cloudinary.com/whavit/image/upload/v1570751849/whavit/IMG_6464_b0u2pf.jpg"
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

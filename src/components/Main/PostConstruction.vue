<template>
  <div>
    <section id="home" class="home-banner-03">
      <div class="effect"></div>
      <div
        class="particles-box"
        id="particles-box"
        style="background-image: url('https://res.cloudinary.com/whavit/image/upload/v1575822559/whavit/New%20Images/Post_construction_head_page_yqeczg.jpg'); background-repeat:no-repeat; background-size:100%;"
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
              <h1>Post Construction</h1>
              <p>
                Whether you're building or renovating, you’re only done
                constructing when it is cleaned.
              </p>
              <div class="btn-bar">
                <router-link
                  class="m-btn m-btn-round m-btn-shadow m-btn-white"
                  :to="{ path: '/booking/full' }"
                  >Request Now <i class="fa fa-angle-right m-5px-l"></i
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
                We make your building squeaky clean like it was constructed that
                way!
              </label>
              <h2></h2>
              <p class="large">
                Newly constructed or renovated buildings are often littered with
                debris, dust, paint and cement stains. We move in to get rid of
                all of debris and dust as soon as the last crew leaves the site.
                Our WhavPros are highly specialized, they pay attention to every
                single detail, leaving your building clean and ready.
              </p>
              <hr class="m-25px-tb" />
              <div class="list-type-01">
                <router-link
                  class="btn btn-primary"
                  :to="{
                    path: '/book',
                    query: { cleaning_type: 'construction' }
                  }"
                  >Book Post-construction Cleaning!
                  <i class="fas fa-long-arrow-alt-right"></i
                ></router-link>
              </div>
            </div>
          </div>
          <div class="col-lg-6 md-m-30px-t">
            <img
              class="max-width-auto img-fluid"
              style="width: 100%;"
              src="https://res.cloudinary.com/whavit/image/upload/v1575820823/whavit/New%20Images/Post_construction_2nd_picture_vtrlma.jpg"
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
              src="https://res.cloudinary.com/whavit/image/upload/v1570751847/whavit/IMG_6471_eh2eu6.jpg"
              title=""
              alt=""
            />
          </div>
          <div class="col-lg-6">
            <div class="side-feature sm-p-0px-l md-p-40px-l p-70px-l">
              <label class="theme-color"> </label>
              <h2></h2>
              <p class="large">
                Post construction cleaning is a good start for future building
                maintenance. This is why we pay serious attention to it. We know
                that building a home or an office is a huge investment of time
                and resources, a lot is being put into the structure and
                aesthetics.
                <br />
                We ensure that our processes are fully mechanized and void of
                human errors. To us, cleaning is completed only when we can
                remove the stains without destroying the surfaces.
              </p>
              <hr class="m-25px-tb" />
              <div class="list-type-01">
                <router-link
                  class="btn btn-primary"
                  :to="{
                    path: '/book',
                    query: { cleaning_type: 'construction' }
                  }"
                  >Book Post-construction Cleaning!
                  <i class="fas fa-long-arrow-alt-right"></i
                ></router-link>
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

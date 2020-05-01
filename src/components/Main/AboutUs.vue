<template>
  <div>
    <section class="page-title-lg" style="background: #1281dd;">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-12">
            <h1 class="white-color text-center">About Whavit</h1>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 text-center">
            <img
              src="https://res.cloudinary.com/whavit/image/upload/v1570751849/whavit/IMG_6459_qhwkoy.jpg"
              title
              alt
            />
          </div>

          <div class="col-lg-6">
            <div class="side-feature p-50px-l md-p-0px-r">
              <label class="theme-color-2nd">Why Choose Us?</label>
              <h2>About our company</h2>
              <p class="large color-light">
                We realize People clean but do not clean properly, most times
                this cleaning spread further spread germs and causes damages to
                property. This made us decide to create Whavit. Whavit is backed
                and managed by top industry–wide professionals with experiences
                that cut across hygiene solutions, innovation, and business
                management.
              </p>
              <div class="p-25px-t">
                <a
                  class="m-btn m-btn-theme m-btn-round m-btn-shaodw"
                  href="/booking-request"
                >
                  Get Started
                  <i class="fas fa-long-arrow-alt-right m-10px-l"></i>
                </a>
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
              <!-- <label class="theme-color">Why Us?</label> -->
              <!-- <h2>It is simple</h2> -->
              <p class="large">
                Whavit is Nigeria’s first fully digital hygiene platform that
                connects individuals looking for household services with
                top-quality, pre-screened independent Whav professionals. From
                home cleaning to disinfection, AC and other services, Whavit
                instantly matches thousands of customers every week with
                top-rated WhavPros. With a seamless 60-second booking process,
                secure payment, and backed by
                <router-link to="/quality-assurance"
                  >Our Quality Assurance</router-link
                >
                , Whavit is the easiest, most convenient way to book cleaning
                services.
              </p>
            </div>
          </div>

          <div class="col-lg-6 text-center">
            <img
              src="https://res.cloudinary.com/whavit/image/upload/v1570751844/whavit/IMG_6450_jhs8oz.jpg"
              title
              alt
            />
          </div>
        </div>
      </div>
    </section>

    <!-- <section class="section gray-bg">
      <div class="container">
        <div class="row m-45px-b sm-m-25px-b justify-content-center">
          <div class="col-md-10 col-lg-8">
            <div class="section-title text-center">
              <h2>No stories, facts only</h2>
            </div>
          </div>
        </div>

        <div class="counter-col-01-row">
          <div class="row counter">
            <div class="col-6 col-md-6 col-lg-3 m-15px-tb">
              <div class="counter-col-01 d-flex justify-content-center align-items-center m-auto">
                <div class="counter-data">
                  <div class="count" data-to="1586" data-speed="1586">1586</div>
                  <h6>Cleaning Requests</h6>
                </div>
              </div>
            </div>

            <div class="col-6 col-md-6 col-lg-3 m-15px-tb">
              <div class="counter-col-01 d-flex justify-content-center align-items-center m-auto">
                <div class="counter-data">
                  <div class="count" data-to="33" data-speed="33">33</div>
                  <h6>Locations</h6>
                </div>
              </div>
            </div>

            <div class="col-6 col-md-6 col-lg-3 m-15px-tb">
              <div class="counter-col-01 d-flex justify-content-center align-items-center m-auto">
                <div class="counter-data">
                  <div class="count" data-to="1232" data-speed="1232">1232</div>
                  <h6>Cleaning Professionals</h6>
                </div>
              </div>
            </div>

            <div class="col-6 col-md-6 col-lg-3 m-15px-tb">
              <div class="counter-col-01 d-flex justify-content-center align-items-center m-auto">
                <div class="counter-data">
                  <div class="count" data-to="99%" data-speed="99%">99%</div>
                  <h6>Satisfaction Rate</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->
    <Footer />
  </div>
</template>

<script>
import Footer from "../../components/Includes/Main/Footer.vue";
import GeneralTags from "./../../mixins/gtm.js";

export default {
  name: "AboutUs",
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
<template>
  <div>
    <section id="home" class="home-banner-03">
      <div class="effect"></div>
      <div
        class="particles-box bg-cover bg-no-repeat"
        id="particles-box"
        style="background-image: url('https://res.cloudinary.com/whavit/image/upload/v1576868333/whavit/New%20Images/shutterstock_616380692_dxb7te.jpg')"
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
              <h1>Whavit For Business</h1>
              <p>
                While your staff work, leave the dirty work to us. <br />
                From professionally trained and friendly cleaners to
                cutting-edge equipment. We bring business cleaning to new
                heights.
              </p>
              <div class="btn-bar">
                <router-link
                  class="m-btn m-btn-round m-btn-shadow m-btn-white"
                  to="/business/register"
                  >Get Started <i class="fa fa-angle-right m-5px-l"></i
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
              <!-- <label class="theme-color">Do you run an SME or You are a staff of a large company?</label> -->
              <h2>Search No Further.</h2>
              <p class="large">
                We make sure that your offices are kept clean and hygienic! Not
                only does this help to create a positive client and visitor
                impression, it also boosts your employees’ morale.
              </p>
              <hr class="m-25px-tb" />
              <div class="list-type-01 mr-10">
                <router-link class="btn btn-primary float-left" to="/register">
                  Create A Business Account
                  <i class="fas fa-long-arrow-alt-right m-10px-l"></i>
                </router-link>
              </div>
            </div>
          </div>
          <div class="col-lg-6 md-m-30px-t">
            <img
              class="max-width-aut img-fluid"
              style="width: 100%; height:70%"
              src="https://res.cloudinary.com/whavit/image/upload/v1576868353/whavit/New%20Images/shutterstock_16459951_wpcxru.jpg"
              title=""
              alt=""
            />
          </div>
        </div>
      </div>
    </section>

    <section id="about" class="section">
      <div class="container">
        <div class="row justify-content-center m-45px-b sm-m-25px-b">
          <div class="col-lg-8 col-md-10">
            <div class="section-title text-center">
              <h2>Our Quality Assurance</h2>
              <!-- <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p> -->
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-3 m-15px-tb">
            <div
              class="feature-box-07 d-flex flex-row align-items-start text-center"
            >
              <!-- <div class="icon"><i class="fas fa-star"></i></div> -->
              <div class="feature-content mt-1 mb-4">
                <img
                  src="https://res.cloudinary.com/whavit/image/upload/v1570922616/whavit/Icons/Vetted_rliugr.png"
                  width="30%"
                  class="img-fluid mb-2"
                  alt=""
                />
                <p>Vetted WhavPros</p>
              </div>
            </div>
          </div>

          <div class="col-lg-3 m-15px-tb">
            <div
              class="feature-box-07 d-flex flex-row align-items-start text-center"
            >
              <div class="feature-content mt-">
                <img
                  src="https://res.cloudinary.com/whavit/image/upload/v1572048610/Whavit%20Icon/Insurance_tnrfgv.png"
                  width="30%"
                  class="img-fluid mb-2"
                  alt=""
                />
                <p>Insurance Covered Cleaning Services</p>
              </div>
            </div>
          </div>

          <div class="col-lg-3 m-15px-tb">
            <div
              class="feature-box-07 d-flex flex-row align-items-start text-center"
            >
              <!-- <div class="icon"><i class="fas fa-star"></i></div> -->
              <div class="feature-content mt-">
                <img
                  src="https://res.cloudinary.com/whavit/image/upload/v1570922615/whavit/Icons/Money_Back_gjjaqh.png"
                  width="30%"
                  class="img-fluid mb-2"
                  alt=""
                />
                <p>100% Money Back Guaranteed</p>
              </div>
            </div>
          </div>

          <div class="col-lg-3 m-15px-tb">
            <div
              class="feature-box-07 d-flex flex-row align-items-start text-center"
            >
              <!-- <div class="icon"><i class="fas fa-star"></i></div> -->
              <div class="feature-content mt-1 mb-4">
                <img
                  src="https://res.cloudinary.com/whavit/image/upload/v1572048610/Whavit%20Icon/Whavit_Health_Screening_cloyps.png"
                  width="30%"
                  class="img-fluid mb-2"
                  alt=""
                />
                <p>WhavPro Health Screening</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- <section class="section p-0px-t effect-section">
      <div class="effect-01 left"></div>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 order-lg-0 order-2 md-m-30px-t">
            <img class="max-width-auto float-right img-fluid" style="width: 120%;" src="https://res.cloudinary.com/whavit/image/upload/v1572220608/Whavit%20Icon/website_mockup_mmvzvu.png" title="" alt="">  
          </div>
          <div class="col-lg-6">
            <div class="side-feature sm-p-0px-l md-p-40px-l p-70px-l">
              <label class="theme-color">

              </label>
              <h2>
                Manage The Account
              </h2>
              <p class="large">
                 View all your cleaning activity, manage billing, and set up how your employees can request for cleaning for the office or themselves. 
              </p>
              
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

              </label>
              <h2>Access Cleaning for Employees</h2>
              <p class="large">
                Accessible from the dashboard, your team can request a cleaning service for themselves or office. 
                The WhavIt app is where your team get approved cleaning charged directly to your company's WhavIt for Business account. 
              </p>
              
            </div>
          </div> 
          <div class="col-lg-6 md-m-30px-t">
            <img class="max-width-auto img-fluid" style="width: 120%;" src="@/assets/img/b.png" title="" alt="">  
          </div>
        </div> 
      </div>
    </section> -->

    <section
      class="section cta-section-01 bg-cover bg-no-repeat image-part"
      id="outer-box"
    >
      <div class="container-fluid" id="inner-box">
        <div class="row justify-content-center">
          <div class="col-12 col-lg-8 text-center m-15px-tb">
            <h2 class="white-color">
              We're always eager to leave a remarkable impact in the workspaces
              of businesses
            </h2>
            <p class="large white-color-light">
              Several businesses use us. Regardless of your size, we have a
              solution for you.
            </p>
          </div>

          <div class="col-12 text-center m-15px-tb">
            <router-link class="m-btn m-btn-t-white" to="/business/register"
              >Create A Business Account</router-link
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

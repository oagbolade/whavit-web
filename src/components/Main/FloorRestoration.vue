<template>
  <div>

     <section id="home" class="home-banner-03">
      <div class="effect"></div>
      <div class="particles-box" id="particles-box" style="background-image: url('https://res.cloudinary.com/whavit/image/upload/v1575820820/whavit/New%20Images/Floor_restoration_head_page_exhu3w.jpg'); background-repeat:no-repeat; background-size:100% 100%;">
        <canvas class="particles-js-canvas-el" width="2880" height="2714" style="width: 100%; height: 100%;"></canvas>
      </div>
      <div class="container">
        <div class="row align-items-center justify-content-center mt-10">
          <div class="col-lg-6 offset-lg-1">
            <div class="hb-text text-center">
              <h1>Floor Restoration</h1>
              <p>
                Why replace when you can restore? Let’s create a bright future for your marble and granite floors.
              </p>
              <div class="btn-bar">
                <router-link class="m-btn m-btn-round m-btn-shadow m-btn-white" :to="{ path: '/book', query: { cleaning_type: 'floor' }}">Get Started <i class="fa fa-angle-right m-5px-l"></i></router-link>
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
              <!-- <label class="theme-color">
                With Whavit, Sleep well tonight. Every night.
              </label> -->
              <h2>

              </h2>
              <p class="large">
                An impeccable floor says a lot about you and your
                business. Who says you can’t always make a good first
                impression all the time? <br>
                You really do not have to replace your old floors when
                they can be given another bright future.
              </p>
              <hr class="m-25px-tb">
              <div class="list-type-01">
                  <router-link class="m-lin" :to="{ path: '/book', query: { cleaning_type: 'floor' }}">Restore your floor. Start Here <i class="fas fa-long-arrow-alt-right"></i></router-link>
               
              </div>
            </div>
          </div> 
          <div class="col-lg-6 md-m-30px-t">
            <img class="max-width-auto img-fluid" style="width: 80%;" src="https://res.cloudinary.com/whavit/image/upload/v1576865729/Icons/Picture5_b07vyb.jpg" title="" alt="">  
          </div>
        </div> 
      </div>
    </section>

    <section class="section p-0px-t effect-section">
      <div class="effect-01 left"></div>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 order-lg-0 order-2 md-m-30px-t">
            <img class="max-width-auto float-right img-fluid" style="width: 100%;" src="https://res.cloudinary.com/whavit/image/upload/v1576871615/whavit/New%20Images/Whav_z3seoo.jpg" title="" alt="">  
          </div>
          <div class="col-lg-6">
            <div class="side-feature sm-p-0px-l md-p-40px-l p-70px-l">
              <label class="theme-color">
                
              </label>
              <h2>

              </h2>
              <p class="large">
                Unlike traditional floor restoration, our Pros
                focus on innovative and cost effective processes.
                We deliver astonishing results and bring back
                the old glories of your floor. We leave you with a
                “WOW”
              </p>
              <hr class="m-25px-tb">
              <div class="list-type-01">
                  <router-link class="m-lin" :to="{ path: '/book', query: { cleaning_type: 'floor' }}">Restore your floor. Start Here <i class="fas fa-long-arrow-alt-right"></i></router-link>
               
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
                Floor restoration is slightly different to many other jobs. It demands craft and intense attention and
                there are no shortcuts to get a great results. We run the service with top of the line processes and only
                use the very best and most exclusive products to give quality results.
              </p>
              <hr class="m-25px-tb">
              <div class="list-type-01">
                  <a class="m-lin" target="_blank" href="https://blog.whavit.com"> Read More: Your Floor is losing its shine? See why you should restore<i class="fas fa-long-arrow-alt-right"></i></a>
              </div>
            </div>
          </div>
          
          <div class="col-lg-6 text-center">
            <img src="https://res.cloudinary.com/whavit/image/upload/v1570751847/whavit/IMG_6471_eh2eu6.jpg" title alt />
          </div>
          
        </div>
       
      </div>
    </section>

    <section class="section cta-section-01 bg-cover bg-no-repeat image-part" id="outer-box">
      <div class="container-fluid" id="inner-box">
        <div class="row justify-content-center">
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

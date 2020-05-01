<template>
  <div>
    <section id="home" class="home-banner-03">
      <div class="effect"></div>
      <div class="particles-box" id="particles-box" style="background-image: url('https://res.cloudinary.com/whavit/image/upload/v1570751839/whavit/IMG_6518_rr87lz.jpg')">
        <canvas class="particles-js-canvas-el" width="2880" height="2714" style="width: 100%; height: 100%;"></canvas>
      </div>
      <div class="container">
        <div class="row align-items-center justify-content-center mt-10">
          <div class="col-lg-6 offset-lg-1">
            <div class="hb-text text-center">
              <h1>Whavit Executive Subscription</h1>
              <p>
                Worry less about one thing. Enjoy the convenience of automated and effective cleaning services.
              </p>
              <div class="btn-bar">
                <a class="m-btn m-btn-round m-btn-shadow m-btn-white" @click="showModal" href="#"> Join the 672 Executives that subscribed last week<i class="fa fa-angle-right m-5px-l"></i></a>
                <!-- <a class="m-btn m-btn-round m-btn-shadow m-btn-t-white" href="#">Learn More <i class="fa fa-angle-right m-5px-l"></i></a> -->
              </div>

              <div>
                  <b-modal ref="my-modal" hide-footer title="">
                    <div class="d-block text-center">
                      <h3>Start Your Executive Subscription</h3><br>
                    </div>
                    <div>
                      <form class="signup-form" @submit.prevent="processForm">
                        <fieldset>
                          <div v-show="success" class="alert alert-success" role="alert">
                            Enquiry received, please check your email
                          </div>
                          <div>
                            <label class="label" for="name">Name</label>
                            <input type="text" v-model="name" name="name" id="name" required="" >
                            <div v-if="nameError">
                              <h6 class="feedback">Name is required</h6>
                            </div>
                          </div>

                          <div>
                            <label class="label" for="email">Email</label>
                            <input type="email" v-model="email" name="email" id="email" required="" >
                            <div v-if="emailError">
                              <h6 class="feedback">Email is required</h6>
                            </div>
                          </div>

                          <div>
                            <label class="label" for="email">Mobile Number</label>
                            <input type="tel" v-model="mobile_number" name="mobile_number" id="mobile_number" required="" >
                          </div>

                          <div>
                            <label class="label" for="textarea">Message </label>
                            <textarea class="message" v-model="message" name="message" id="textarea">
                              I would like to make enquiries on your Executive Package. Please get back to me.
                            </textarea>
                            <div v-if="messageError">
                              <h6 class="feedback">Please fill in an enquiry message</h6>
                            </div>
                          </div>

                          <div>
                            <button type="submit" @click.prevent="processForm" class="button is-danger">Get Started</button>
                          </div>
                        </fieldset>
                      </form>
                    </div>
                  </b-modal>
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
              <label class="theme-color">Enjoy the convenience of automated and effective cleaning services</label>
              <h2></h2>
              <p class="large">
                We started the Executive Package because, while we’re particular about cleaning the way it
                should be, we’re totally obsessed with helping you worry less about it. You have the world to conquer, you
                have a gazillion things to do with your time, cleaning certainly should be the least of your worries
              </p>
            </div>
          </div> 
          <div class="col-lg-6 md-m-30px-t">
            <img class="max-width-auto img-fluid" style="width: 100%;" src="https://res.cloudinary.com/whavit/image/upload/v1570751842/whavit/IMG_6266_pgigdy.jpg" title="" alt="">  
          </div>
        </div> 
      </div>
    </section>

    <section class="section p-0px-t effect-section">
      <div class="effect-01 left"></div>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 order-lg-0 order-2 md-m-30px-t">
            <img class="max-width-auto float-right img-fluid" style="width: 100%;" src="https://res.cloudinary.com/whavit/image/upload/v1570751837/whavit/IMG_6415_xcx2l9.jpg" title="" alt="">  
          </div>
          <div class="col-lg-6">
            <div class="side-feature sm-p-0px-l md-p-40px-l p-70px-l">
              <label class="theme-color">

              </label>
              <h2>
                SAVE UP TO 35%
              </h2>
              <p class="large">
                Enjoy a significant discount when you subscribe versus ordering cleaning individually.
              </p>
              <hr class="m-25px-tb">
              <ul class="list-type-01 mr-10">
                  <a class="m-lin" href="#price">See Our Package Here <i class="fas fa-long-arrow-alt-right"></i></a>
              </ul>
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
              <label class="theme-color"></label>
              <h2> Shouldn’t you have more time to yourself?</h2>
              <p class="large">
                We know that life can be busy and stressful. You probably don’t have enough time to yourself, how much
                more cleaning. We take the hassle of cleaning and hygiene off you with the ultimate goal of keeping your
                house clean and tidy at all times. 
              </p>
            </div>
          </div> 
          <div class="col-lg-6 md-m-30px-t">
            <img class="max-width-auto img-fluid" style="width: 100%;" src="https://res.cloudinary.com/whavit/image/upload/v1570751837/whavit/IMG_6436_ejguyu.jpg" title="" alt="">  
          </div>
        </div> 
      </div>
    </section>

    <section class="section p-0px-t effect-section">
      <div class="effect-01 left"></div>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 order-lg-0 order-2 md-m-30px-t">
            <img class="max-width-auto float-right img-fluid" style="width: 100%;" src="https://res.cloudinary.com/whavit/image/upload/v1570751849/whavit/IMG_6464_b0u2pf.jpg" title="" alt="">  
          </div>
          <div class="col-lg-6">
            <div class="side-feature sm-p-0px-l md-p-40px-l p-70px-l">
              <label class="theme-color">

              </label>
              <h2>

              </h2>
              <p class="large">
                It’s about making whatever time you have a happy moment where you discover, learn, and play, all
                in a clean and healthy environment. We aren’t here to tell you to take more time. We are here to
                tell you that the time you do have is important and you deserve to enjoy it.
              </p>
              <hr class="m-25px-tb">
              <div class="list-type-01">
                  <router-link class="m-link" to="/">Read More: Cleaning Hacks for Busy Executives </router-link>
              </div>
            </div>
          </div> 
        </div> 
      </div>
    </section>

    <section id="price" class="section">
      <div class="container">
        <div class="row justify-content-center sm-m-25px-b m-45px-b">
          <div class="col-lg-8 col-md-10">
            <div class="section-title text-center">
              <h2>PAY MONTHLY</h2>
              <p>
                Subscribe for a year but do the payments monthly
              </p>
            </div>
          </div> 
        </div>

        <div class="row">
          <div class="col-lg-4 offset-lg-4 m-15px-tb">
            <div class="price-table-01">
              <!-- <div class="pt-head">
                <h6>BossLady Lite</h6>
                <hr>
              </div> -->

              <div class="pt-body">
                <ul>
                  <li><i class="fas fa-check"></i> Weekly Light Cleaning</li>
                  <li><i class="fas fa-check"></i> Bi-monthly deep cleaning</li>
                  <li><i class="fas fa-check"></i> Quarterly Mattress hygiene</li>
                  <li><i class="fas fa-check"></i> Quarterly Upholstery cleaning</li>
                  <li><i class="fas fa-check"></i> Quarterly Fumigation</li>
                  <li><i class="fas fa-check"></i> Quarterly AC servicing & disinfection</li>
                </ul>
              </div>

              <div class="pt-btn">
                  <a href="#" @click="showModal" class="m-btn m-btn-theme m-btn-shadow">Start Here</a>
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
  name: "Business",
  data() {
    return {
      base: '',
      name: '',
      email: '',
      mobile_number: '',
      message: 'I would like to make enquiries on your Executive Package. Please get back to me.',
      nameError: false,
      emailError: false,
      messageError: false,
      success: false
    };
  },
  components: {
    Footer
  },
  methods: {
    showModal() {
      this.$refs['my-modal'].show()
    },
    hideModal() {
      this.$refs['my-modal'].hide()
    },
    processForm() {
      if (this.name === '') {
        this.nameError = true;
        return false;
      }
      
      if (this.email === '') {
        this.emailError = true;
        return false;
      }
      
      if (this.message === '') {
        this.messageError = true;
        return false;
      }

      this.nameError = false;
      this.emailError = false;
      this.messageError = false;

      const loader = this.$loading.show({
        backgroundColor: "#000000",
        zIndex: 99999
      });
       let userData = {
        name: this.name,
        email: this.email,
        type: 'Executive Package',
        phone: this.mobile_number,
        message: this.message
       }

    const url = `${this.base}mail/whavpremium`;
      this.$http({
        url: url,
        data: userData,
        method: "POST"
    })
      .then(res => {
        this.success = true;
        this.$swal.fire({
            text: "Your request has been sent, please check your email for more information",
            type: "success"
          });
        this.hideModal();
          console.log(res);
          loader.hide();
      })
      .catch(err => {
          console.log(err);
          loader.hide();
      });
    }
  },
  created() {
    jQuery($);
  },
  mounted() {
    GeneralTags();

    this.base = this.$store.state.base_url;    
  }
};
</script>
<style scoped>
.feedback{
  color: #e32;
}

.image-part {
    background: url("https://res.cloudinary.com/whavit/image/upload/v1570751846/whavit/IMG_6511_1_vftizz.jpg");
}
</style>

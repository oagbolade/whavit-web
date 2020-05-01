<template>
  <div>
    <section id="home" class="home-banner-03">
      <div class="effect"></div>
      <div
        class="particles-box"
        id="particles-box"
        style="background-image: url('https://res.cloudinary.com/whavit/image/upload/v1570751846/whavit/IMG_6511_1_vftizz.jpg')"
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
              <h1>Disinfection</h1>
              <p>
                Does Your Disinfection Make the Grade?
              </p>
              <div class="btn-bar">
                <b-button
                  class="m-btn m-btn-round m-btn-shadow m-btn-white"
                  @click="showModal"
                  >Get Started <i class="fa fa-angle-right m-5px-l"></i
                ></b-button>
                <!-- <a class="m-btn m-btn-round m-btn-shadow m-btn-t-white" href="#">Learn More <i class="fa fa-angle-right m-5px-l"></i></a> -->

                <div>
                  <b-modal ref="my-modal" size="xl" hide-footer title="">
                    <div class="d-block text-center">
                      <h3>Let us know your disinfection need</h3>
                      <br />
                    </div>
                    <div>
                      <form class="signup-form" @submit.prevent="processForm">
                        <fieldset>
                          <div
                            v-show="success"
                            class="alert alert-success"
                            role="alert"
                          >
                            Enquiry received, please check your email
                          </div>
                          <div class="row">
                            <div class="required col-md-6">
                              <label class="label" for="name">Name</label>
                              <input
                                type="text"
                                v-model="name"
                                name="name"
                                id="name"
                                required=""
                              />
                              <div v-if="nameError">
                                <h6 class="feedback">Name is required</h6>
                              </div>
                            </div>

                            <div class="required col-md-6">
                              <label class="label" for="email">Email</label>
                              <input
                                type="email"
                                v-model="email"
                                name="email"
                                id="email"
                                required=""
                              />
                              <div v-if="emailError">
                                <h6 class="feedback">Email is required</h6>
                              </div>
                            </div>
                          </div>

                          <div class="row">
                            <div class="required col-md-6">
                              <label class="label" for="email"
                                >Mobile Number</label
                              >
                              <input
                                type="tel"
                                v-model="mobile_number"
                                name="mobile_number"
                                id="mobile_number"
                                required=""
                              />
                            </div>

                            <div class="col-md-6">
                              <label class="label" for="company_name"
                                >Company Name (Optional)</label
                              >
                              <input
                                type="tel"
                                v-model="company_name"
                                name="company_name"
                                id="company_name"
                                required=""
                              />
                            </div>

                            <div class="required col-md-6">
                              <label class="label" for="square_metres"
                                >No of Square Metres</label
                              >
                              <input
                                type="number"
                                min="0"
                                v-model="square_metres"
                                name="square_metres"
                                id="square_metres"
                                @input="calculateTotalAmount"
                                required=""
                              />
                              <div v-if="square_metresError">
                              <h6 class="feedback">
                                Please enter number of square metres
                              </h6>
                            </div>
                            </div>

                            <div class="col-md-6">
                              <label class="label" for="square_metres"
                                >Total Amount</label
                              >
                              <div class="alert alert-primary" role="alert">
                                {{square_metres_amount}}
                              </div>
                            </div>
                          </div>

                          <div class="required">
                            <label class="label" for="textarea">Additional Information (Let us know what you need) </label>
                            <textarea
                              class="message"
                              v-model="message"
                              name="message"
                              id="textarea"
                            >
                              <!-- I would like to make enquiries on your disinfection services. Please get back to me. -->
                            </textarea>
                            <div v-if="messageError">
                              <h6 class="feedback">
                                Please fill in an enquiry message
                              </h6>
                            </div>
                          </div>

                          <div>
                            <button
                              type="submit"
                              @click.prevent="processForm"
                              class="button is-danger"
                            >
                              Get Invoice
                            </button>
                          </div>
                        </fieldset>
                      </form>
                    </div>
                  </b-modal>
                </div>
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
              <label class="theme-color"> </label>
              <h2>
                Does Your Disinfection Make the Grade?
              </h2>
              <p class="large">
                Whether you run a school, crèche, or a restaurant/business,
                maintaining optimum levels of hygiene is crucial. Your premises
                needs to facilitate the health of your employees, students and
                clients.
              </p>
              <!-- <hr class="m-25px-tb">
              <ul class="list-type-01">
                <li>
                  <div class="icon yellow">
                    <i class="fas fa-asterisk"></i>
                  </div>
                  <h6>Improve communication skills</h6>
                  <a class="m-link" href="#">Learn more about <i class="fas fa-long-arrow-alt-right"></i></a>
                </li>
              </ul> -->
            </div>
          </div>
          <div class="col-lg-6 md-m-30px-t">
            <img
              class="max-width-auto img-fluid"
              style="width: 100%;"
              src="https://res.cloudinary.com/whavit/image/upload/v1570751849/whavit/IMG_6525_uoxeh2.jpg"
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
              src="https://res.cloudinary.com/whavit/image/upload/v1570751845/whavit/IMG_5998_hssk2r.jpg"
              title=""
              alt=""
            />
          </div>
          <div class="col-lg-6">
            <div class="side-feature sm-p-0px-l md-p-40px-l p-70px-l">
              <label class="theme-color"> </label>
              <h2>
                Why Us?
              </h2>
              <p class="large">
                We provide disinfecting services that are non-toxic and ensure
                that a broad spectrum of microscopic organisms, including
                bacteria, viruses, mildew, fungi, algae and dust mites are
                eliminated.
              </p>
              <hr class="m-25px-tb" />
              <div class="list-type-01">
                <b-button class="m-link" @click="showModal"
                  >Let Whavit Help You
                  <i class="fas fa-long-arrow-alt-right mt-1"></i
                ></b-button>
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
              <label class="theme-color"></label>
              <h2>
                Make bold claims about your CRECHE and SCHOOLS. Being germ free!
              </h2>
              <p class="large">
                Spreading knowledge doesn’t have to mean spreading germs, too.
                We know that kids are delicate, and working in daycares involves
                taking care of little ones who don’t yet know how to blow their
                noses or cover their coughs, which is why our whole room
                disinfection solution achieves the highest possible care to keep
                both kids and caregivers safe. Our proprietary Whav Disinfection
                System® ensure that every classroom is free of disease-causing
                pathogens.
              </p>
              <!-- <hr class="m-25px-tb">
              <ul class="list-type-01">
                <li>
                  <div class="icon blue">
                    <i class="fas fa-mouse-pointer"></i>
                  </div>
                  <h6>Want to know more about Upholstery Cleaning</h6>
                  <router-link class="m-link" to="/booking-request">Read More <i class="fas fa-long-arrow-alt-right"></i></router-link>
                </li>
              </ul> -->
            </div>
          </div>

          <div class="col-lg-6 text-center">
            <img
              src="https://res.cloudinary.com/whavit/image/upload/v1570751852/whavit/IMG_6623_cc1jxa.jpg"
              title
              alt
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
              src="https://res.cloudinary.com/whavit/image/upload/v1570751851/whavit/IMG_6606_ekndcn.jpg"
              title=""
              alt=""
            />
          </div>
          <div class="col-lg-6">
            <div class="side-feature sm-p-0px-l md-p-40px-l p-70px-l">
              <label class="theme-color">
                Visitors should be safe. Workers shouldn’t be infected in your
                work place
              </label>
              <h2></h2>
              <p class="large">
                Due to close quarters and sharing of supplies in bathrooms,
                cafeteria and work tools, employees are at high risk of
                contracting harmful infections like Norovirus, and Flu.
                Employees spend most of their days at work, the office is filled
                with countless spaces and places in need of an effective
                disinfectant. Get in touch, let us make your environment safe.
                <br /><br />
                If you are in the hospitality industry, you bet you need this!
                <br /><br />
                If you’re relying on sub-par in-house hygiene services, you’re
                putting the wellbeing of your customers and staff at risk. Your
                kitchen and dining area needs disinfection from time to time.
              </p>
              <hr class="m-25px-tb" />
              <div class="list-type-01">
                <router-link class="m-link" to="/booking-request"
                  >Let Whavit Help You
                  <i class="fas fa-long-arrow-alt-right mt-1"></i
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
  name: "Disinfection",
  data() {
    return {
      base: "",
      name: "",
      email: "",
      mobile_number: "",
      square_metres: "",
      square_metres_amount: 0,
      company_name: null,
      message: "",
      nameError: false,
      square_metresError: false,
      emailError: false,
      messageError: false,
      success: false
    };
  },
  methods: {
    calculateTotalAmount(){
      let amount = this.square_metres * 350;
      this.square_metres_amount = amount;
    },
    showModal() {
      this.$refs["my-modal"].show();
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },
    processForm() {
      if (this.name === "") {
        this.nameError = true;
        return false;
      }

      if (this.email === "") {
        this.emailError = true;
        return false;
      }

      if (this.message === "") {
        this.messageError = true;
        return false;
      }
      
      if (this.square_metres === "") {
        this.square_metresError = true;
        return false;
      }

      this.nameError = false;
      this.emailError = false;
      this.messageError = false;
      this.square_metresError = false;

      const loader = this.$loading.show({
        backgroundColor: "#000000",
        zIndex: 99999
      });
      let userData = {
        name: this.name,
        email: this.email,
        phone: this.mobile_number,
        message: this.message,
        company_name: this.company_name,
        square_metres: this.square_metres,
        square_metres_amount: this.square_metres_amount
      };

      const url = `${this.base}mail/disinfection`;
      this.$http({
        url: url,
        data: userData,
        method: "POST"
      })
        .then(res => {
          this.success = true;
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            event: "whavitDisinfectionBooked",
            name: this.name, //name of the customer booking the service
            email: this.email,
            phoneNumber: this.mobile_number,
            coupcode: null
          });
          this.$swal.fire({
            text:
              "Your invoice has been sent, please check your email for next steps",
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
  components: {
    Footer
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
.border-info {
  padding: 15px;
}

/* To make input arrow to always show */
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  opacity: 1;
}

.required label:after {
  color: #e32;
  content: " *";
  display: inline;
}

.image-part {
  background: url("https://res.cloudinary.com/whavit/image/upload/v1570751846/whavit/IMG_6511_1_vftizz.jpg");
}

.feedback {
  color: #e32;
}
</style>

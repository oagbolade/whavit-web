<template>
  <div>
    <section id="home" class="home-banner-03">
      <div class="effect"></div>
      <div
        class="particles-box"
        id="particles-box"
        style="background-image: url('https://res.cloudinary.com/whavit/image/upload/v1576869256/whavit/New%20Images/shutterstock_282915680_qken1f.jpg')"
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
              <h1>Whavit Boss Lady Subscription</h1>
              <p>
                Ever wish cleaning is a lot easier? Well, wish granted!
              </p>
              <div class="btn-bar">
                <b-button
                  class="m-btn m-btn-round m-btn-shadow m-btn-white"
                  @click="showModal"
                  >Join the 453 women that subscribed last week
                  <i class="fa fa-angle-right m-5px-l"></i
                ></b-button>
                <!-- <a class="m-btn m-btn-round m-btn-shadow m-btn-t-white" href="#">Learn More <i class="fa fa-angle-right m-5px-l"></i></a> -->

                <div>
                  <b-modal ref="my-modal" hide-footer title="">
                    <div class="d-block text-center">
                      <h3>Start Your Boss Lady Subscription</h3>
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
                          <div>
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

                          <div>
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

                          <div>
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

                          <div>
                            <label class="label" for="textarea">Message </label>
                            <textarea
                              class="message"
                              v-model="message"
                              name="message"
                              id="textarea"
                            >
                              I would like to make enquiries on your Boss Lady Subscription. Please get back to me.
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
                              Get Started
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
              <label class="theme-color"></label>
              <h2>We combine all your cleaning needs in one place.</h2>
              <p class="large">
                We know your schedule is so full. Wouldn’t it be so nice that
                the only thing you do when you catch a breather is to rest? Like
                really rest. Who really wants to spend hours upon hours of their
                weekend picking up trash and vacuuming? We want you to sleep in
                until noon and catch a few movies – not mop your kitchen floor.
              </p>
            </div>
          </div>
          <div class="col-lg-6 md-m-30px-t">
            <img
              class="max-width-auto img-fluid"
              style="width: 100%;"
              src="https://res.cloudinary.com/whavit/image/upload/v1570751837/whavit/IMG_6415_xcx2l9.jpg"
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
              src="https://res.cloudinary.com/whavit/image/upload/v1570751846/whavit/IMG_5986_ubijmp.jpg"
              title=""
              alt=""
            />
          </div>
          <div class="col-lg-6">
            <div class="side-feature sm-p-0px-l md-p-40px-l p-70px-l">
              <label class="theme-color"> </label>
              <h2></h2>
              <p class="large">
                Why not let us take away the stress of cleaning from you, so you
                can have some alone time devoid of house chores.
              </p>
              <hr class="m-25px-tb" />
              <div class="list-type-01 mr-10">
                <router-link class="m-lin" to="/"
                  >Read More: Simple cleaning hacks for busy women
                </router-link>
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
                It’s not just cleaning. There’s confidence and happiness tied to
                it.
              </label>
              <h2></h2>
              <p class="large">
                During the course of providing cleaning solutions, what we’ve
                learned along the way is that it’s about so much more than that.
                Women with jobs, hobbies, passions, and extremely full lives
                deserve to have a clean house on their terms without the
                overwhelming, time consuming norms of cleaning.
              </p>
            </div>
          </div>
          <div class="col-lg-6 md-m-30px-t">
            <img
              class="max-width-auto img-fluid"
              style="width: 100%;"
              src="https://res.cloudinary.com/whavit/image/upload/v1570751844/whavit/IMG_6372_bf1oxj.jpg"
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
              src="https://res.cloudinary.com/whavit/image/upload/v1570751852/whavit/IMG_6541_v3kj5c.jpg"
              title=""
              alt=""
            />
          </div>
          <div class="col-lg-6">
            <div class="side-feature sm-p-0px-l md-p-40px-l p-70px-l">
              <label class="theme-color"> </label>
              <h2>
                But more than being a simple package, we made it personal.
              </h2>
              <p class="large"></p>
              <hr class="m-25px-tb" />
              <ul class="list-type-01">
                <li>
                  <div class="icon blue">
                    <i class="fas fa-mouse-pointer"></i>
                  </div>
                  <h6>
                    Send this subscription as a gift.
                    <a class="m-link" href="#price"
                      >Explore Packages
                      <i class="fas fa-long-arrow-alt-right"></i
                    ></a>
                  </h6>
                </li>
              </ul>
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
              <h2>Try a one off discounted package</h2>
              <p>
                Pick a package and let people wonder how on earth you get your
                house this clean despite your busy life!
              </p>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-4 offset-lg-2 m-15px-tb">
            <div class="price-table-01">
              <div class="pt-head">
                <h6>BossLady Lite</h6>
                <hr />
              </div>

              <div class="pt-body">
                <ul>
                  <li><i class="fas fa-check"></i> Bi-weekly Light Cleaning</li>
                  <li><i class="fas fa-check"></i> Quarterly AC servicing</li>
                  <li>
                    <i class="fas fa-check"></i> Quarterly mattress hygiene
                  </li>
                  <li><i class="fas fa-check"></i> Bi-yearly fumigation</li>
                  <li>
                    <i class="fas fa-check"></i> A box of hygiene products
                  </li>
                </ul>
              </div>

              <div class="pt-btn">
                <a
                  href="#"
                  @click="showModal"
                  class="m-btn m-btn-theme m-btn-shadow"
                  >Start Here</a
                >
              </div>
            </div>
          </div>

          <div class="col-lg-4 m-15px-tb">
            <div class="price-table-01">
              <div class="pt-head">
                <h6>BossLady Extra</h6>
                <hr />
              </div>

              <div class="pt-body">
                <ul>
                  <li><i class="fas fa-check"></i> Bi-weekly Light Cleaning</li>
                  <li><i class="fas fa-check"></i> Weekly deep cleaning</li>
                  <li>
                    <i class="fas fa-check"></i> Quarterly Mattress hygiene
                  </li>
                  <li>
                    <i class="fas fa-check"></i> Quarterly Upholstery cleaning
                  </li>
                  <li><i class="fas fa-check"></i> Quarterly Fumigation</li>
                  <li>
                    <i class="fas fa-check"></i> Quarterly AC servicing &
                    Disinfection
                  </li>
                  <li>
                    <i class="fas fa-check"></i> A box of hygiene products
                  </li>
                </ul>
              </div>

              <div class="pt-btn">
                <a
                  href="#"
                  @click="showModal"
                  class="m-btn m-btn-theme m-btn-shadow"
                  >Start Here</a
                >
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
      base: "",
      name: "",
      email: "",
      mobile_number: "",
      message:
        "I would like to make enquiries on your Boss Lady services. Please get back to me.",
      nameError: false,
      emailError: false,
      messageError: false,
      success: false
    };
  },
  components: {
    Footer
  },
  created() {
    jQuery($);
  },
  methods: {
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
        type: "Boss Lady Subsription",
        phone: this.mobile_number,
        message: this.message
      };

      const url = `${this.base}mail/whavpremium`;
      this.$http({
        url: url,
        data: userData,
        method: "POST"
      })
        .then(res => {
          this.success = true;
          this.$swal.fire({
            text:
              "Your request has been sent, please check your email for more information",
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
  mounted() {
    GeneralTags();

    this.base = this.$store.state.base_url;
  }
};
</script>
<style scoped>
.feedback {
  color: #e32;
}

.image-part {
  background: url("https://res.cloudinary.com/whavit/image/upload/v1570751846/whavit/IMG_6511_1_vftizz.jpg");
}
</style>

<template>
  <div>
    <section id="home" class="home-banner-04 gray-b mt-3">
      <div class="container">
        <div class="row align-items-center mb-4 ">
          <div class="col-lg-6">
            <div class="hb-text p-70px-r md-p-0px-r mt-lg-5">
              <h1 style="font-size: 45px; color: #1281dd;">
                The Cleaning Professionals You Need.
              </h1>
              <p class="d-block">
                Let’s not just clean but be hygienic, because in the end a clean
                environment is a good start, but a germs-free environment
                matters to our lives.
              </p>
              <br />
              <!-- <router-link class="m-btn m-btn-theme m-btn-shadow rounded" to="/booking-request">Get Started Now</router-link> -->
              <router-link
                class="m-btn m-btn-theme m-btn-shadow rounded"
                to="/booking-request"
                ><b>Request Cleaning Now!</b></router-link
              >
              <br />
              <small class="mt-2"
                >Get N1000 off your first order using <b>WhavFirst</b> as your
                discount code</small
              >
              <div class="row no-gutters mt-4">
                <div class="col-lg-4 float-left d-sm-block d-md-block">
                  <a href>
                    <img src="@/assets/img/ios.png" alt width="138px" class />
                  </a>
                </div>
                <div class="col-lg-4 float-right d-sm-block d-md-block">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.w.whavit"
                    target="blank"
                  >
                    <img
                      src="@/assets/img/google.png"
                      width="155px"
                      alt
                      class
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-5">
            <img
              class="max-width-auto"
              src="https://res.cloudinary.com/whavit/image/upload/v1572214271/Whavit%20Icon/edit_1_vgic52.jpg"
              width="150%"
              title
              alt
            />
          </div>
        </div>
      </div>
    </section>

    <section id="about" class="section effect-section">
      <div class="effect-img top">
        <!-- <img src="@/assets/img/bg-wave-top.svg" title alt /> -->
      </div>
      <div class="container">
        <div class="row justify-content-center m-45px-b sm-m-25px-b">
          <div class="col-lg-8 col-md-10">
            <div class="section-title text-center">
              <h2>Our Quality Assurance</h2>
              <p>
                We are driven by quality and have set up measures in place to
                make you have the best experience
              </p>
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
              <div class="feature-content mt-1 mb-4">
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
              <div class="feature-content mt-1 mb-4">
                <img
                  src="https://res.cloudinary.com/whavit/image/upload/v1581504696/attribute-icons/Naira_01_n7ri62.png"
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

    <section id="cleaning" class="section gray-bg">
      <div class="container">
        <div class="row justify-content-center m-45px-b sm-m-25px-b">
          <div class="col-lg-8 col-md-10">
            <div class="section-title text-center">
              <h2>Cleaning Services Created To Meet Your Goals</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-7">
            <router-link to="/booking-request">
              <img src="@/assets/img/c.png" class="img-fluid" title alt />
            </router-link>
          </div>
          <div class="col-lg-5">
            <div class="row align-items-center pt-5">
              <div class="col-md-6 m-15px-tb">
                <div class="feature-box-04 text-center">
                  <router-link to="/WhavLight">
                    <div class="mt-2">
                      <img
                        width="50%"
                        src="https://res.cloudinary.com/whavit/image/upload/v1572048611/Whavit%20Icon/WhavLite_zwoczw.png"
                        alt=""
                      />
                    </div>
                    <div class="feature-content mb-2">
                      <p>Light Cleaning</p>
                    </div>
                  </router-link>
                </div>
              </div>

              <div class="col-md-6 m-15px-tb">
                <div class="feature-box-04 text-center">
                  <router-link to="/WhavDeep">
                    <div class="">
                      <img
                        width="50%"
                        src="https://res.cloudinary.com/whavit/image/upload/v1576865712/Icons/WhavDip_xiamcd.png"
                        alt=""
                      />
                    </div>
                    <div class="feature-content">
                      <p>Deep Cleaning</p>
                    </div>
                  </router-link>
                </div>
              </div>

              <div class="col-md-6 m-15px-tb">
                <div class="feature-box-04 text-center">
                  <router-link to="/upholstery-cleaning">
                    <div class="mt-3">
                      <img
                        width="35%"
                        src="https://res.cloudinary.com/whavit/image/upload/v1572048613/Whavit%20Icon/Upholstery_Cleaning_db41po.png"
                        alt=""
                      />
                    </div>
                    <div class="feature-content mb-3">
                      <p>Upholstery Cleaning</p>
                    </div>
                  </router-link>
                </div>
              </div>

              <div class="col-md-6 m-15px-tb">
                <div class="feature-box-04 text-center">
                  <router-link to="/floor-restoration">
                    <div class="">
                      <img
                        width="50%"
                        src="https://res.cloudinary.com/whavit/image/upload/v1576865712/Icons/Floor_Restoration_vypqyc.png"
                        alt=""
                      />
                    </div>
                    <div class="feature-content">
                      <p>Floor Restoration</p>
                    </div>
                  </router-link>
                </div>
              </div>

              <div class="col-lg-12 offset-lg-1 mt-5 mb-5 text-center">
                <router-link
                  class="m-btn m-btn-theme shadow a-btn shadow-sm rounded"
                  to="/products"
                >
                  View All Our Services
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="about" class="section theme-bg">
      <div class="container">
        <div class="row justify-content-center sm-m-25px-b m-45px-b">
          <div class="col-lg-8 col-md-10">
            <div class="section-title text-center">
              <h2 class="white-color">Whavit For All</h2>
              <p class="white-color-light text-white">
                Whavit provides excellent professionals who adhere to the
                highest cleaning standards. We always ensure that your space is
                not just clean but hygienic.
              </p>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6 m-15px-tb">
            <div class="feature-box-05">
              <div class="icon">
                <img
                  src="https://res.cloudinary.com/whavit/image/upload/v1572048612/Whavit%20Icon/Whavit_For_home_ypya2i.png"
                  width="55%"
                  title
                  alt
                />
              </div>
              <div class="feature-content">
                <h5>Whavit For Home</h5>
                <p>
                  We provide convenient, yet effective and quality cleaning by
                  professionals for your home.
                </p>
                <div class="btn-bar mt-3">
                  <router-link
                    class="m-btn m-btn-shadow m-btn-theme2nd rounded"
                    to="/register"
                  >
                    Get Started
                    <i class="m-10px-l fa fa-chevron-right"></i>
                  </router-link>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-6 m-15px-tb">
            <div class="feature-box-05">
              <div class="icon">
                <img
                  src="https://res.cloudinary.com/whavit/image/upload/v1572048612/Whavit%20Icon/Whavit_For_business_vjqhbp.png"
                  width="58%"
                  title
                  alt
                />
              </div>
              <div class="feature-content">
                <h5>Whavit For Business</h5>
                <p>
                  We're always eager to leave a remarkable impact in your
                  workspaces. No matter your size we are here for you.
                </p>
                <div class="btn-bar">
                  <router-link
                    class="m-btn m-btn-shadow m-btn-theme2nd rounded"
                    to="/register"
                  >
                    Get Started
                    <i class="m-10px-l fa fa-chevron-right"></i>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="about" class="section effect-section">
      <!-- <div class="effect-img top">
        <img src="@/assets/img/bg-wave-top.svg" title alt />
      </div> -->
      <div class="container">
        <div class="row justify-content-center m-45px-b sm-m-25px-b">
          <div class="col-lg-8 col-md-10">
            <div class="section-title text-center">
              <h2>How Whavit Works</h2>
              <!-- <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>-->
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-4 m-15px-tb">
            <div class="feature-box-08">
              <div class="icon">
                <!-- <i class="fas fa-mobile-alt"></i> -->
                <img src="@/assets/img/b.svg" title alt />
              </div>
              <div class="feature-content">
                <h5 class="text-primary">Make A Cleaning Request</h5>
                <p>
                  Create an account for either your home or business to make
                  your cleaning request.
                </p>
                <br />
              </div>
            </div>
          </div>

          <div class="col-md-4 m-15px-tb">
            <div class="feature-box-08">
              <div class="icon">
                <!-- <i class="fas fa-layer-group"></i> -->
                <img src="@/assets/img/c.svg" title alt />
              </div>
              <div class="feature-content">
                <h5 class="text-primary">Select the day and time</h5>
                <p>
                  Choose a time that is convenient for you and we'll confirm
                  your appointment
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-4 m-15px-tb">
            <div class="feature-box-08">
              <div class="icon">
                <!-- <i class="fas"></i> -->
                <img src="@/assets/img/a.svg" title alt />
              </div>
              <div class="feature-content">
                <h5 class="text-primary">You will get a WhavPro assigned</h5>
                <p>
                  An experienced, fully-equipped WhavPro will show up on time at
                  your doorstep.
                </p>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- <section class="section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6 m-45px-b">
            <div class="side-feature p-70px-r md-p-0px-r">
              <label class="theme-color">Testimonials</label>
              <h2>Loved by businesses, and individuals across Nigeria.</h2>
              <p class="large">Few things our clients have to say.</p>
              <div class="btn-bar p-15px-t">
                <router-link class="m-btn m-btn-theme m-btn-shadow rounded" to="/register">Get Started</router-link>
              </div>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="owl-carousel" data-items="1" data-nav-dots="true" data-md-items="1" data-sm-items="1" data-xs-items="1" data-xx-items="1" data-space="30">
                <div class="testimonial-col-01 m-25px-b">
                  <div class="tc-img">
                    <img
                      src="https://cms.qz.com/wp-content/uploads/2018/10/iyinoluwa-aboyeji1-e1539611570872.jpg?quality=75&strip=all&w=450&h=562.5&crop=1"
                      title
                      alt
                    />
                  </div>
                  <div class="tc-text">
                    <i class="fas fa-quote-left"></i>
                    <p>
                      Cleaning has always been my concern. I tried a few but were like my regular cleaning.
                      I gave Whavit a try and Whavit made the difference
                    </p>
                    <div class="tc-info">
                      <h5>Iyin Aboyeji</h5>
                      <label>Co-founder, Flutterwave & Andela</label>
                    </div>
                  </div>
                </div>

                <div class="testimonial-col-01 m-25px-b">
                  <div class="tc-img">
                    <img
                      src="https://cms.qz.com/wp-content/uploads/2018/10/iyinoluwa-aboyeji1-e1539611570872.jpg?quality=75&strip=all&w=450&h=562.5&crop=1"
                      title
                      alt
                    />
                  </div>
                  <div class="tc-text">
                    <i class="fas fa-quote-left"></i>
                    <p>
                      Cleaning has always been my concern. I tried a few but were like my regular cleaning.
                      I gave Whavit a try and Whavit made the difference
                    </p>
                    <div class="tc-info">
                      <h5>Iyin Aboyeji</h5>
                      <label>Co-founder, Flutterwave & Andela</label>
                    </div>
                  </div>
                </div>

                <div class="testimonial-col-01 m-25px-b">
                  <div class="tc-img">
                    <img
                      src="https://cms.qz.com/wp-content/uploads/2018/10/iyinoluwa-aboyeji1-e1539611570872.jpg?quality=75&strip=all&w=450&h=562.5&crop=1"
                      title
                      alt
                    />
                  </div>
                  <div class="tc-text">
                    <i class="fas fa-quote-left"></i>
                    <p>
                      Cleaning has always been my concern. I tried a few but were like my regular cleaning.
                      I gave Whavit a try and Whavit made the difference
                    </p>
                    <div class="tc-info">
                      <h5>Iyin Aboyeji</h5>
                      <label>Co-founder, Flutterwave & Andela</label>
                    </div>
                  </div>
                </div>

            </div>
          </div>
        </div>
      </div>
    </section> -->

    <section class="section gray-bg">
      <div class="container">
        <div class="row justify-content-center m-45px-b sm-m-25px-b">
          <div class="col-lg-8 col-md-10">
            <div class="section-title text-center">
              <h2>Our Partners</h2>
            </div>
          </div>
        </div>

        <div class="row text-center">
          <div class="col-lg-3 offset-lg-2 ">
            <img
              src="https://res.cloudinary.com/whavit/image/upload/e_grayscale/v1574253371/whavit/VIPRONE-logo-e1529601720976_cwwj7s.png"
              class="img-fluid"
              alt=""
            />
          </div>

          <div class="col-lg-3 mt-5">
            <img
              src="https://res.cloudinary.com/whavit/image/upload/e_grayscale/v1574253824/whavit/logo-dark_c8kkw8.png"
              width="80%"
              class="img-fluid"
              title
              alt
            />
          </div>

          <div class="col-lg-3 ">
            <img
              src="@/assets/img/g.png"
              width="45%"
              class="img-fluid"
              title
              alt
            />
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="row justify-content-center m-45px-b">
          <div class="col-lg-7 col-md-10">
            <div class="section-title text-center">
              <h2 class="dark-color">Join Our Newsletter</h2>
              <p>
                Cleaning for us is beyond cleaning. A clean house is a good
                start. What comes next matters more. Join our mailing list to
                get tips on cleaning and know more about our products and
                services
              </p>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-md-10 col-lg-8">
            <div class="subscribe-form-01">
              <form>
                <input
                  name="email"
                  placeholder="Email Address"
                  class="form-control"
                  type="email"
                  v-model="email"
                  required
                />
                <button
                  type="submit"
                  @click.prevent="subscribeToNewsletter()"
                  class="m-btn m-btn-theme2nd"
                >
                  <i class="fab fa-telegram-plane"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer></Footer>
  </div>
</template>

<script>
import $ from "jquery";
import jQuery from "../../mixins/jqueryHelper";
const axios = require("axios").default;

import Footer from "../../components/Includes/Main/Footer.vue";
import GeneralTags from "./../../mixins/gtm.js";

export default {
  name: "LandingPage",
  data() {
    return {
      email: null
    };
  },
  components: {
    Footer
  },
  methods: {
    subscribeToNewsletter() {
      let loader = this.$loading.show({
        backgroundColor: "#ffffff",
        zIndex: 99999,
        opacity: 1
      });

      axios({
        method: "post",
        baseURL: this.$store.state.base_url + "mailchimp/subscribe",
        headers: { "Content-Type": "application/json" },
        data: {
          email: this.email,
          tags: ["newsletter"]
        }
      })
        .then(response => {
          this.$swal.fire({
            text: response.data.message,
            type: "success"
          });
          loader.hide();
          this.email = "";
        })
        .catch(response => {
          // console.log(response)
          this.$swal.fire({
            text: response.data.message,
            type: "error"
          });
          loader.hide();
        });
    }
  },
  created() {
    jQuery($);
  },
  mounted() {
    GeneralTags();

    const token = localStorage.getItem("token");
    const user = this.$cookies.get("user");

    if (token) {
      switch (user.type) {
        case "user":
          // this.$router.push("/");
          break;
        case "vendor":
          // this.$router.push("/");
          break;
        case "business":
          // this.$router.push("/");
          break;
        case "admin_one":
          this.$router.push("/security/dashboard");
          break;
        case "admin_two":
          this.$router.push("/admin/dashboard");
          break;
        default:
          break;
      }
    }
  }
};
</script>

<style scoped>
/* .attribute-image{
  height: 80px;
  width: 80px;
  border-radius: 50%;
} */
</style>



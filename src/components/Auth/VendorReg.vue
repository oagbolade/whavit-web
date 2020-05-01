<template>
  <div>
    <div id="titlebar" class="gradient d-noe">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <!-- <h2>Register as a cleaning Pro</h2> -->

            <!-- Breadcrumbs -->
            <!-- <nav id="breadcrumbs" class="dark">
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>Register</li>
              </ul>
            </nav> -->
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-xl-6 offset-xl-3">
          <div class="login-register-page">
            <!-- Welcome Text -->
            <div class="welcome-text">
              <h3 style="font-size: 26px;">
                Let's create your whavpro account!
              </h3>
              <span>
                Already have an account?
                <router-link to="/login">Log In!</router-link>
              </span>
            </div>
            <!-- Form -->
            <form id="register-account-form">
              <div v-if="$v.form.$error">
                <span
                  class="text-danger text-bold"
                  v-if="!$v.form.firstname.required"
                  >* First name is required</span
                >
              </div>
              <div class="input-with-icon-left">
                <i
                  class="icon-line-awesome-user"
                  :class="{ 'has-error': $v.form.firstname.$error }"
                ></i>
                <input
                  type="text"
                  class="input-text with-border"
                  name="firstname-register"
                  id="firstname-register"
                  placeholder="First Name"
                  required
                  v-model="form.firstname"
                  :class="{ 'has-error': $v.form.firstname.$error }"
                />
              </div>
              <div v-if="$v.form.$error">
                <span
                  class="text-danger text-bold"
                  v-if="!$v.form.lastname.required"
                  >* Last name is required</span
                >
              </div>
              <div class="input-with-icon-left">
                <i
                  class="icon-line-awesome-user"
                  :class="{ 'has-error': $v.form.lastname.$error }"
                ></i>
                <input
                  type="text"
                  class="input-text with-border"
                  name="lastname-register"
                  id="lastname-register"
                  placeholder="Last Name"
                  required
                  v-model="form.lastname"
                  :class="{ 'has-error': $v.form.lastname.$error }"
                />
              </div>
              <div v-if="$v.form.$error">
                <span
                  class="text-danger text-bold"
                  v-if="!$v.form.email.required"
                  >* Email is required</span
                >
                <span class="text-danger text-bold" v-if="!$v.form.email.email"
                  >* Email must be a valid email address</span
                >
              </div>
              <div class="input-with-icon-left">
                <i
                  class="icon-material-baseline-mail-outline"
                  :class="{ 'has-error': $v.form.email.$error }"
                ></i>
                <input
                  type="text"
                  class="input-text with-border"
                  name="emailaddress-register"
                  id="emailaddress-register"
                  placeholder="Email Address"
                  required
                  v-model="form.email"
                  :class="{ 'has-error': $v.form.email.$error }"
                />
              </div>
              <div v-if="$v.form.$error">
                <span
                  class="text-danger text-bold"
                  v-if="!$v.form.password.email"
                  >* Password is required</span
                >
              </div>
              <div
                class="input-with-icon-left"
                title="Should be at least 8 characters long"
                data-tippy-placement="bottom"
              >
                <i
                  class="icon-material-outline-lock"
                  :class="{ 'has-error': $v.form.password.$error }"
                ></i>
                <input
                  type="password"
                  class="input-text with-border"
                  name="password-register"
                  id="password-register"
                  placeholder="Password"
                  required
                  v-model="form.password"
                  :class="{ 'has-error': $v.form.password.$error }"
                />
              </div>
              <div v-if="$v.form.$error">
                <span
                  class="text-danger text-bold"
                  v-if="!$v.form.password2.sameAs"
                  >* Passwords don't match</span
                >
              </div>
              <div class="input-with-icon-left">
                <i
                  class="icon-material-outline-lock"
                  :class="{ 'has-error': $v.form.password2.$error }"
                ></i>
                <input
                  type="password"
                  class="input-text with-border"
                  name="password-repeat-register"
                  id="password-repeat-register"
                  placeholder="Repeat Password"
                  required
                  v-model="form.password2"
                  :class="{ 'has-error': $v.form.password2.$error }"
                />
              </div>
            </form>

            <!-- Button -->
            <button
              class="button full-width button-sliding-icon ripple-effect margin-top-10"
              type="submit"
              form="login-form"
              @click.prevent="processRegister()"
            >
              Register
              <i class="icon-material-outline-arrow-right-alt"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="container d-none">
      <div class="section padding-top-65 padding-bottom-65">
        <div class="container">
          <div class="row">
            <div class="col-xl-12">
              <!-- Section Headline -->
              <div
                class="section-headline centered margin-top-0 margin-bottom-5"
              >
                <h3>How to become a cleaning Pro for whavit?</h3>
              </div>
            </div>

            <div class="col-xl-4 col-md-4">
              <!-- Icon Box -->
              <div class="icon-box with-line">
                <!-- Icon -->
                <div
                  class="icon-box-circle"
                  style="background:none;height:auto !important"
                >
                  <div class="icon-box-circle-inner">
                    <i class="icon-line-awesome-lock"></i>
                    <div class="icon-box-check">
                      <i class="icon-material-outline-check"></i>
                    </div>
                  </div>
                </div>
                <h3>Create an Account</h3>
                <p>
                  Bring to the table win-win survival strategies to ensure
                  proactive domination going forward.
                </p>
              </div>
            </div>

            <div class="col-xl-4 col-md-4">
              <!-- Icon Box -->
              <div class="icon-box with-line">
                <!-- Icon -->
                <div
                  class="icon-box-circle"
                  style="background:none;height:auto !important"
                >
                  <div class="icon-box-circle-inner">
                    <i class="icon-line-awesome-legal"></i>
                    <div class="icon-box-check">
                      <i class="icon-material-outline-check"></i>
                    </div>
                  </div>
                </div>
                <h3>Evaluation</h3>
                <p>
                  Each pro is evaluated with an initial test after registration
                  and will go through basic training.
                </p>
              </div>
            </div>

            <div class="col-xl-4 col-md-4">
              <!-- Icon Box -->
              <div class="icon-box">
                <!-- Icon -->
                <div
                  class="icon-box-circle"
                  style="background:none;height:auto !important"
                >
                  <div class="icon-box-circle-inner">
                    <i class="icon-line-awesome-trophy"></i>
                    <div class="icon-box-check">
                      <i class="icon-material-outline-check"></i>
                    </div>
                  </div>
                </div>
                <h3>Start Receiving Requests</h3>
                <p>
                  After you pass the test and training stage, you can start
                  Receiving requests and earning with Whavit
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Spacer -->
    <div class="margin-top-70"></div>
    <!-- Spacer / End-->

    <Footer />
  </div>
</template>

<script>
import { required, minLength, email, sameAs } from "vuelidate/lib/validators";
import Footer from "../../components/Includes/Main/Footer.vue";
import GeneralTags from "./../../mixins/gtm.js";

export default {
  name: "UserRegister",
  components: {
    Footer
  },
  data() {
    return {
      form: {
        type: "vendor",
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        password2: ""
      },
      url: ""
    };
  },
  validations: {
    form: {
      firstname: { required },
      lastname: { required },
      email: { required, email },
      password: { required, minLength: minLength(8) },
      password2: { sameAs: sameAs("password") }
    }
  },
  methods: {
    processRegister(e) {
      this.$v.form.$touch();
      if (this.$v.form.$error) return;

      let loader = this.$loading.show({
        backgroundColor: "#ffffff",
        zIndex: 99999,
        opacity: 1
      });

      const data = {
        first_name: this.form.firstname,
        last_name: this.form.lastname,
        email: this.form.email,
        password: this.form.password,
        type: this.form.type
      };

      this.$store
        .dispatch("register", data)
        .then((res) => {
          let userData = res.data.user;
          loader.hide();
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            event: "signedUpForAccount",
            accountType: "Whavitpro", //replace with type of account whether home, business or cleaner
            userId: userData.id, //replace with user id that the system assigns to the user, leave blank where absence
            firstName: userData.first_name, //replace with the user first name in the database or leave blank where absent
            lastName: userData.last_name, //replace with the user last name in the database or leave blank where absent
            businessName: userData.business_name, //replace with the user business name in the database or leave blank where absent
            email: userData.email, //replace with the user email in the database or leave blank where absent
            creationDate: userData.created_at //Make sure you’re sending dates in this format by using the .toISOString method in JavaScript if possible, example of the value is 2016-06-01T12:34:56
          });
          this.$swal.fire({
            text: "Registration Successfull",
            type: "success"
          });
          location.replace(location);
        })
        .catch(err => {
          // console.log(err.response);
          var errorObj = err.response.data.errors;

          for (const key in errorObj) {
            if (errorObj.hasOwnProperty(key)) {
              this.$swal.fire({
                text: errorObj[key],
                type: "error"
              });
              window.dataLayer = window.dataLayer || [];
              window.dataLayer.push({
                event: "whavitProFormError",
                accountType: "WhavitPro", //leave this as it is
                errorMessage: errorObj[key] //fill this with the generated error message
              });
            }
          }
          loader.hide();
        });

      // this.$http.post(this.url,{
      //   body : data,
      //   header: {
      //     'content-type' : 'application/json'
      //   }
      // }).then((res) => {
      //   console.log(res)
      // }).catch(function(err){
      //   console.log(err)
      // })
    }
  },
  created() {
    jQuery($);
  },
  mounted() {
GeneralTags()

    this.url = this.$store.state.base_url + "auth/register";
    const token = localStorage.getItem("token");
    const user = this.$cookies.get("user");

    if (token) {
      switch (user.type) {
        case "user":
          this.$router.push("/user/dashboard");
          break;
        case "vendor":
          this.$router.push("/vendor/on-boarding");
          break;
        case "business":
          this.$router.push("/business/dashboard");
          break;
        case "admin_one":
          this.$router.push("/admin1/dashboard");
          break;
        case "admin_two":
          this.$router.push("/admin2/dashboard");
          break;
        default:
          break;
      }
    }
  }
};
</script>

<style scoped>
.icon-box-check {
  bottom: 17px !important;
}

.icon-box-circle {
  background-color: none !important;
  height: auto !important;
}
</style>
<template>
  <div>

    <div class="container mt-10">
      <div class="row py-4">
        <div class="col-xl-6 offset-xl-3">
          <div class="login-register-page">
            <!-- Welcome Text -->
            <div class="welcome-text">
              <h3>We're glad to see you again!</h3>
              <span>
                Don't have an account?
                <router-link to="register">Sign Up!</router-link>
              </span>
            </div>
            <div class="alert alert-danger" v-if="$v.form.$error">
              Please check your inputs and try again
            </div>
            <!-- Form -->
            <form id="login-form">
              <div v-if="$v.form.$error">
                <span class="text-danger text-bold" v-if="!$v.form.email.required">* Email is required</span>
                <span class="text-danger text-bold" v-if="!$v.form.email.email">* Email must be a valid email address</span>
              </div>
              <div class="input-with-icon-left outline-danger outline">
                <i 
                class="icon-material-baseline-mail-outline" 
                :class="{ 'has-error': $v.form.email.$error }"
                ></i>
                <input
                  type="text"
                  class="input-text with-border"
                  :class="{ 'has-error': $v.form.email.$error }"
                  name="emailaddress"
                  id="emailaddress"
                  placeholder="Email Address"
                  required
                  v-model="form.email"
                >
              </div>

              <!-- <span class="text-danger text-bold" v-if="!$v.form.password.minLength">* Password too short</span> -->
              <div class="input-with-icon-left">
                <i 
                class="icon-material-outline-lock" 
                :class="{ 'has-error': $v.form.password.$error }"
                ></i>
                <input
                  type="password"
                  class="input-text with-border"
                  :class="{ 'has-error': $v.form.password.$error }"
                  name="password"
                  id="password"
                  placeholder="Password"
                  required
                  v-model="form.password"
                >
              </div>
              <router-link to="/forgot/password" class="forgot-password">Forgot Password?</router-link>
            </form>

            <!-- Button -->
            <button
              class="button full-width button-sliding-icon ripple-effect margin-top-10"
              type="submit"
              form="login-form"
              @click.prevent="processLogin()"
            >
              Log In
              <i class="icon-material-outline-arrow-right-alt"></i>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Spacer -->
    <div class="margin-top-70"></div>
    <!-- Spacer / End-->
    <Footer/>
  </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
// import $ from 'jquery';
import jQuery from '../../mixins/jqueryHelper';
import Footer from '../../components/Includes/Main/Footer.vue'
import GeneralTags from "./../../mixins/gtm.js";

export default {
  name: "UserLogin",
  components : {
    Footer
  },
  data() {
    return {
      form : {
        email: "",
        password: ""
      },
      user: null
    };
  },
  validations : {
    form : {
      email : { required,email },
      password : { required }
    }
  },
  methods: {
    processLogin() {
      this.$v.form.$touch();
      if(this.$v.form.$error) return

      let loader = this.$loading.show({
        backgroundColor : '#ffffff',
        zIndex: 99999,
        opacity: 1
      })
      let email = this.form.email;
      let password = this.form.password;
      this.$store
        .dispatch("login", { email, password })
        .then((user) => {
          let userData = user.data.user
          console.log(userData);
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
          'event': 'signedInToAccount',
          'accountType': userData.type, //replace with type of account and leave blank where not present
          'userId': userData.id, //replace with user id leave blank where absence
          'firstName': userData.first_name, //replace with the user first name in the database or leave blank where absent
          'lastName': userData.last_name, //replace with the user's last name in the database or leave blank where absent
          'businessName': userData.business_name, //replace with the user business name in the database or leave blank where absent
          'email': userData.email //replace with the user email in the database or leave blank where absent
          });

          loader.hide()
          location.replace(location)
        })
        .catch(err => {
          loader.hide()
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
          'event': 'errorSigninIn',
          'errorMessage': err  //fill this with the error message generated
          });
          console.log(err);
          var errorObj = err.response.data.errors;
          var errorSingle = err.response.data.error
         
          if(errorSingle){
            this.$swal.fire({
              text: errorSingle,
              type: "error"
            });
          }
          for (const key in errorObj) {
            if (errorObj.hasOwnProperty(key)) {
              this.$swal.fire({
                text: errorObj[key],
                type: "error"
              });
            }
          }
          // this.$swal.fire({
          //   text: "Invalid Credentials",
          //   type: "error"
          // });
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
    this.user = user;

    if (token) {
      switch (user.type) {
        case "user":
          this.$router.push("/user/dashboard");
          break;
        case "vendor":
          if(user.verified == 0 && user.status !== 1) {
            this.$router.push("/vendor/on-boarding")
          } else if(user.verified == 1 && user.status !== 1) {
            this.$router.push("/vendor/waiting-list")
          } 
          else {
            this.$router.push("/vendor/dashboard");
          }
          break;
        case "business":
          this.$router.push("/business/dashboard");
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
.modal-body {
  padding-top: 0em;
  padding-bottom: 4em;
}

.text-white {
  color: whitesmoke;
}
.container-login {
  position: relative;
  padding-top: 15%;
  box-sizing: border-box;
  padding-left: 44.5px;
  padding-right: 44.5px;
}
.wpb_wrapper {
  text-align: center;
}

.has-error {
    border: 1px solid red !important;
}
</style>

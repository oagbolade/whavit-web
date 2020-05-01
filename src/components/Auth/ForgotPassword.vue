<template>
  <div>

    <div class="container mt-10">
      <div class="row py-4">
        <div class="col-xl-6 offset-xl-3">
          <div class="login-register-page">
            <!-- Welcome Text -->
            <div class="welcome-text">
              <h3>Reset Password!</h3>
              <span>
                Have an account?
                <router-link to="/login">Sign In!</router-link>
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
                  name="email"
                  id="email"
                  placeholder="Email Address"
                  required
                  v-model="form.email"
                >
              </div>
            </form>

            <!-- Button -->
            <button
              class="button full-width button-sliding-icon ripple-effect margin-top-10"
              type="submit"
              form="login-form"
              @click.prevent="processForgotPassword()"
            >
              Send Reset Email
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
import $ from 'jquery';
import jQuery from '../../mixins/jqueryHelper';
import Footer from '../../components/Includes/Main/Footer.vue'
import './../../mixins/gtm.js';

export default {
  name: "ForgotPassword",
  components : {
    Footer
  },
  data() {
    return {
      base: "",
      form : {
        email: ""
      }
    };
  },
  validations : {
    form : {
      email : { required,email },
    }
  },
  methods: {
    processForgotPassword() {
      this.$v.form.$touch();
      if(this.$v.form.$error) return

      let loader = this.$loading.show({
        backgroundColor : '#ffffff',
        zIndex: 99999,
        opacity: 1
      })
      let email = this.form.email;

      this.$http({
          url: this.$store.state.base_url + "user/send-reset-code/"+email,
          data: { email: email },
          method: "POST"
        })
        .then(res => {
          loader.hide()
          console.log(res);
          this.$swal.fire({
              type: "success",
              text: "Reset Email Sent To You"
            });
        })
        .catch(err => {
          loader.hide()
          var errorObj = err.response.data.errors;
          var errorSingle = err.response.data.error
         
          if(!errorSingle){
          //  this.$toastr.error(errorSingle,'',4000)
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
    console.log(dataLayer)

    

    const token = localStorage.getItem("token");
    const user = this.$cookies.get("user");
    
    if (token) {
      switch (user.type) {
        case "user":
          this.$router.push("/user/dashboard");
          break;
        case "vendor":
          if(user.verified == 0 || user.status !== true) {
              this.$router.push("/vendor/on-boarding")
          } else {
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

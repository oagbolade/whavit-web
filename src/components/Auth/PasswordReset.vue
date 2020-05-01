<template>
  <div>

    <div class="container mt-10">
      <div class="row py-4 ">
        <div class="col-xl-6 offset-xl-3">
          <div class="login-register-page">
            <!-- Welcome Text -->
            <div class="welcome-text">
              <h3>Change Password!</h3>
            </div>
            <div class="alert alert-danger" v-if="$v.form.$error">
              Please check your inputs and try again
            </div>
            <!-- Form -->
            <form id="login-form">
              <div v-if="!$v.$error">
                <span
                    class="text-danger text-bold"
                    v-if="!$v.form.passwordconfirm.sameAs"
                >* Passwords don't match</span>
              </div>
              <!-- <span class="text-danger text-bold" v-if="!$v.form.password.minLength">* Password too short</span> -->
              <div class="input-with-icon-left">
                <i class="icon-material-outline-lock"></i>
                <input
                  type="password"
                  class="input-text with-border"
                  name="password"
                  id="password"
                  placeholder="Password"
                  required
                  v-model="form.password"
                >
              </div>
              <div class="input-with-icon-left">
                <i class="icon-material-outline-lock"></i>
                <input
                  type="password"
                  class="input-text with-border"
                  name="passwordconfirm"
                  id="passwordconfirm"
                  placeholder="Confirm Password"
                  required
                  v-model="form.passwordconfirm"
                >
              </div>
            </form>

            <!-- Button -->
            <button
              class="button full-width button-sliding-icon ripple-effect margin-top-10"
              type="submit"
              form="login-form"
              @click.prevent="changePassword()"
            >
              Change Password
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
import { required, minLength, sameAs } from 'vuelidate/lib/validators'
import $ from 'jquery';
import jQuery from '../../mixins/jqueryHelper';
import Footer from '../../components/Includes/Main/Footer.vue'
import GeneralTags from "./../../mixins/gtm.js";

export default {
  name: "PasswordReset",
  components : {
    Footer
  },
  data() {
    return {
      form : {
        password: "",
        passwordconfirm: ""
      }
    };
  },
  validations : {
    form : {
      password : { required,minLength : minLength(5) },
      passwordconfirm : { sameAs: sameAs("password") }
    }
  },
  methods: {
    changePassword() {
      this.$v.form.$touch();
      if(this.$v.form.$error) return

      let loader = this.$loading.show({
        backgroundColor : '#ffffff',
        zIndex: 99999,
        opacity: 1
      })

      let password = this.form.password;
      let code = this.$route.params.id;
      
      this.$http({
          url: this.$store.state.base_url + "user/verify-reset/"+code,
          data: { password: password },
          method: "POST"
        })
        .then(res => {
          loader.hide()
          console.log(res);
          this.$swal.fire({
              type: "success",
              text: "Password Has Been Changed"
            });
          this.$router.push("/login");
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
    GeneralTags();

    const token = localStorage.getItem("token");
    const user = this.$cookies.get("user");
    console.log(dataLayer)
    
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

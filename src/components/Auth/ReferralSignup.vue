<template>
  <div>
    <div class="container mt-10">
      <div class="row py-4">
        <div class="col-xl-6 offset-xl-3">
          <div class="login-register-page">
            <!-- Welcome Text -->
            <div class="welcome-text">
              <h3 style="font-size: 26px;">Hello!, create your account!</h3>
              <span> You are using referal code : {{ code }} </span>
            </div>

            <div class="alert alert-danger" v-if="$v.form.$error">
              Form has errors
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

    <!-- Spacer -->
    <div class="margin-top-70"></div>
    <!-- Spacer / End-->

    <Footer />
  </div>
</template>
<script>
import Footer from "../../components/Includes/Main/Footer.vue";
import { required, minLength, email, sameAs } from "vuelidate/lib/validators";
import GeneralTags from "./../../mixins/gtm.js";

export default {
  name: "ReferalRegister",
  components: {
    Footer
  },
  data() {
    return {
      form: {
        type: "user",
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        password2: ""
      },
      url: "",
      code: ""
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
        opaciy: 1
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
        .then(() => {
          loader.hide();
          location.replace(location);
        })
        .catch(err => {
          var errorObj = err.response.data.errors;

          for (const key in errorObj) {
            if (errorObj.hasOwnProperty(key)) {
              this.$swal.fire({
                text: errorObj[key],
                type: "error"
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
    this.code = this.$route.params.code;
    GeneralTags();

    this.url = this.$store.state.base_url + "auth/register";
    const token = localStorage.getItem("token");
    const user = this.$cookies.get("user");
    // console.log(this.code);
    console.log(dataLayer)

    if (token) {
      switch (user.type) {
        case "user":
          this.$router.push("/user/dashboard");
          break;
        case "vendor":
          this.$router.push("/vendor/dashboard");
          break;
        case "business":
          this.$router.push("/business/dashboard");
          break;
        case "admin_one":
          this.$router.push("/admin/dashboard");
          break;
        case "admin_two":
          this.$router.push("/security/dashboard");
          break;
        default:
          break;
      }
    }
  }
};
</script>

<style scoped>
.account-type input.account-type-radio:checked ~ label {
  background-color: #1381dd;
}

.account-type input.account-type-radio ~ label:hover {
  color: #1381dd;
  background-color: #e4eef6;
}

.text-white {
  color: white;
}
.d-none {
  display: none;
}
.container-login {
  position: relative;
  /* left: -44.5px; */
  padding-top: 6%;
  box-sizing: border-box;
  /* width: 1059px; */
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

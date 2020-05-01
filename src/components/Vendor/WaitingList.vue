<template>
    <div class="dashboard-content-container" >
        <div class="dashboard-content-inner">
            <!-- Dashboard Headline -->
            <div class="dashboard-headline">
                <h3 style="font-size: 26px;">WhavPro Onboarding</h3>
                <!-- Breadcrumbs -->
                <nav id="breadcrumbs" class="dark">
                <ul>
                    <li>
                    <a href="#">Home</a>
                    </li>
                    <li>On-boarding</li>
                </ul>
                </nav>
            </div>

            <!-- Row -->
            <div class="container">
              <div class="row">
                <div class="col-xl-6 offset-xl-3 text-center mt-10">
                    <h3 style="font-size: 26px;">Congratulations On Getting To This Stage</h3>
                    <span>
                        Please check your email for further instructions.
                    </span> <br/>
                    <p>You will access your account after training and been approved</p>
                </div>
              </div>
            </div>
            <!-- Row / End -->

            <!-- Footer -->
            <div class="dashboard-footer-spacer"></div>
            <Footer></Footer>
            <!-- Footer / End -->
        </div>
    </div>     
</template>

<script>
import $ from 'jquery';
import jQuery from '../../mixins/jqueryHelper';
import Footer from '../../components/Includes/User/Footer.vue'
import GeneralTags from "./../../mixins/gtm.js";

export default {
  name: "VendorWaitingList",
  components : {
    Footer
  },
  data() {
    return {
      base_url: this.$store.state.base_url,
      token: localStorage.getItem("token")
    }
  },
  filters: {
      charIndex: function(i) {
          return String.fromCharCode(97 + i);
      }
  },
  computed: {
    auth() {
      return this.$store.getters.isLoggedIn;
    }
  },
  methods: {
        
    
   },
  created() {
    jQuery($);
 
  },
  mounted() {
    GeneralTags();
    
    const token = localStorage.getItem("token");
    const user = this.$cookies.get("user");

    if ($cookies.isKey("user")) {
      this.$cookies.remove("user");
      localStorage.clear();
      console.log("removed cookie")
    }else{
      console.log("got to login")
      this.$router.push("/login");
    }

    if (token) {
      switch (user.type) {
        case "user":
          this.$router.push("/user/dashboard");
          break;
        case "vendor":
          if(user.verified == 0 && user.status !== 1) {
            this.$router.push("/vendor/on-boarding")
          } else if(user.verified == 1 && user.status !== 1) {
            this.$router.push("/vendor/waiting-list");
          } else if(user.verified === 1 && user.status === 1){
            this.$router.push("/vendor/dashboard");
          }
          break;
        case "business":
          this.$router.push("/business/dashboard");
          break;
        case "admin_one":
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


</style>


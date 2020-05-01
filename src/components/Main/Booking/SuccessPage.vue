<template>
    <div class="dashboard-content-container">
        <div class="dashboard-content-inner">
            <!-- Row -->
            <div class="container">
              <div class="row">
                <div class="col-md-6 col-xl-6 ">
                    <img src="@/assets/img/c.png">
                </div>
                <div class="col-xl-6 col-md-6 text-center mt-10">
                    <h1 style="font-size: 32px;">Thank you for booking Whavit services. </h1>
                    <p>
                      <h4>
                          Your WhavPro will contact you shortly if there are special instructions from you.
                      </h4>
                    </p>
                    <p>
                        <h4>All bookings on Whavit is backed by Our Quality Assurance and Always-on Customer Service</h4>
                    </p>
                    <p>
                      <p class="text-center">
                        <h2><b>Download Now!</b></h2>
                      </p>
                      <div class="clearfix">
                        <div class="col-lg-6 float-right d-sm-block d-md-block">
                          <a href="https://play.google.com/store/apps/details?id=com.whavit" target="blank">
                            <img src="@/assets/img/google.png" width="155px" alt class />
                          </a>
                        </div>
                        <div class="col-lg-6 float-left d-sm-block d-md-block">
                          <a href>
                            <img src="@/assets/img/ios.png" alt width="138px" class />
                          </a>
                        </div>
                      </div>
                      <p>
                        <h4 class="text-center col-lg-12">
                          For a better Customer Experience, you can download our mobile app on the Google and iOS store.
                          This will enable you to rate the service of the professionals and also you
                          get another 5% discount
                        </h4>
                      </p>
                      <p>
                        <a href="/user/dashboard"><button class="btn btn-primary btn-lg">Go to Dashboard</button></a>
                      </p>
                    </p>
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
import $ from "jquery";
import jQuery from "../../../mixins/jqueryHelper.js";
import Footer from "../../../components/Includes/User/Footer.vue";
import GeneralTags from "./../../../mixins/gtm.js";


export default {
  name: "SuccessPage",
  components: {
    Footer
  },
  data() {
    return {
      base_url: this.$store.state.base_url,
      token: localStorage.getItem("token")
    };
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
  methods: {},
  created() {
    jQuery($);
  },
  mounted() {
    GeneralTags();
  }
};
</script>

<style scoped>
.clearfix {
  overflow: auto;
}
</style>


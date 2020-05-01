<template>
  <div>
    <section id="about" class="section mt-5">
      <div class="container">
        <div class="row justify-content-center sm-m-25px-b m-45px-b">
          <div class="col-lg-8 col-md-10">
            <div class="section-title text-center">
              <h2 class="">Where do you want to clean?</h2>
              <p class=""></p>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6 m-15px-tb">
            <div class="feature-box-05">
              <div class="icon">
                <img
                  src="https://res.cloudinary.com/whavit/image/upload/v1572048612/Whavit%20Icon/Whavit_For_home_ypya2i.png"
                  width="50%"
                  title
                  alt
                />
              </div>
              <div class="feature-content">
                <h5>My Home</h5>
                <!-- <p>
                  little text here
                </p> -->
                <div class="btn-bar">
                  <router-link
                    class="m-btn m-btn-shadow m-btn-theme2nd rounded"
                    to="/user/register"
                  >
                    Choose
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
                  width="50%"
                  title
                  alt
                />
              </div>
              <div class="feature-content">
                <h5>My Business Workspace</h5>
                <!-- <p>
                  Little text here
                </p> -->
                <div class="btn-bar">
                  <router-link
                    class="m-btn m-btn-shadow m-btn-theme2nd rounded"
                    to="/business/register"
                  >
                    Choose
                    <i class="m-10px-l fa fa-chevron-right"></i>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer></Footer>
  </div>
</template>

<script>
/* eslint-disable */

import $ from "jquery";
import jQuery from "../../mixins/jqueryHelper";
import Footer from "../../components/Includes/Main/Footer.vue";
import GeneralTags from "./../../mixins/gtm.js";

export default {
  name: "SelectUserType",
  components: {
    Footer
  },
  data() {
    return {};
  },
  methods: {},
  computed: {
    auth() {
      return this.$store.getters.isLoggedIn;
    }
  },
  created() {
    jQuery($);
  },
  mounted() {
    GeneralTags();
  }
};
</script> 

<style scoped>
</style>
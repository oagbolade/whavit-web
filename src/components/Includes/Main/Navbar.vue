<template>
  <div>
    <div id="loading">
      <div class="load-circle"><span class="one"></span></div>
    </div>
    <header class="header-nav fixed-header" v-if="!auth">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid " style="max-width:95%">
          <div class="col-auto p-0px-l" style="margin-right:auto">
            <router-link class="navbar-brand" to="/" style="margin-left: -25px;">
              <!-- <img class="light-logo" src="@/dashboard-assets/img/whavit-white.png" style="width: 160px;" alt/> -->
              <!-- <img class="dark-logo" src="@/dashboard-assets/img/whavit-blue.png" style="width: 160px;" alt /> -->
              <img src="@/dashboard-assets/img/whavit-blue.png" style="width: 160px;" alt />
            </router-link>
          </div>

          <div class="col-lg col-md-12 order-lg-0 order-3 m-auto position-Assets" >
            <b-collapse toggleable="sm" class="collapse navbar-collapse justify-content-end" id="navbar" is-nav>
              <ul class="navbar-nav ml-auto align-items-lg-center">
                <li class="m-mega-menu m-dropdown">
                  <router-link class="nav-link" to="/products">Services </router-link>
                  <i class="fa fa-angle-down m-dropdown-toggle"></i>

                  <div class="m-dropdown-menu m-dropdown-mega-menu">
                    <div class="container-fliud">
                      <div class="row">
                        <div class="col-md-6 col-lg-3">
                          <ul class="mm-link">
                            <li>
                              <router-link class="nav-link" to="/WhavLight">Light Cleaning</router-link>
                            </li>
                            
                            <li>
                              <router-link class="nav-link" to="/WhavDeep">Deep Cleaning</router-link>
                            </li>
                            
                            <li>
                              <router-link class="nav-link" to="/upholstery-cleaning">Upholstery Cleaning</router-link>
                            </li>
                          </ul>
                        </div> 

                        <div class="col-md-6 col-lg-3">
                          <ul class="mm-link">
                            <li>
                              <router-link class="nav-link" to="/mattress-cleaning">Mattress Hygiene</router-link>
                            </li>
                            <li>
                              <router-link class="nav-link" to="/carpet-cleaning">Carpet Cleaning</router-link>
                            </li>
                            <li>
                              <router-link class="nav-link" to="/floor-restoration">Floor Restoration</router-link>
                            </li>
                          </ul>
                        </div> 

                        <div class="col-md-6 col-lg-3">
                          <ul class="mm-link">
                            <li>
                              <router-link class="nav-link" to="/fumigation">Fumigation</router-link>
                            </li>
                            <li>
                              <router-link class="nav-link" to="/post-construction">Post-Construction</router-link>
                            </li>
                            <li>
                              <router-link class="nav-link" to="/disinfection">Disinfection</router-link>
                            </li>
                          </ul>
                        </div> 
                        
                        <div class="col-md-6 col-lg-3">
                          <ul class="mm-link">
                            <li>
                              <router-link class="nav-link" to="/ac-servicing">AC Servicing & Disinfection</router-link>
                            </li>
                            <!-- <li>
                              <router-link class="nav-link" to="/moving">Moving in/out</router-link>
                            </li> -->
                          </ul>
                        </div> 

                      </div> 
                    </div>
                  </div>
                </li>
                <li>
                  <router-link class="nav-link" to="/premium">WhavPremium</router-link>
                </li>
                <li>
                  <router-link class="nav-link" to="/whavpro">Become A WhavPro</router-link>
                </li>
                <li>
                  <router-link class="nav-link" to="/business">Whavit For Business</router-link>
                </li>
                <!-- <li>
                  <router-link class="nav-link" to="/about">Company</router-link>
                </li> -->
                <!-- <li>
                  <router-link class="nav-link" to="/faqs">FAQ's</router-link>
                </li> -->

                <li>
                  <a class="nav-link" target="_blank" href="https://blog.whavit.com">Blog</a>
                </li>

                <li class="m-mega-menu m-dropdown d-none d-lg-block d-xl-block">
                  <router-link
                    class="m-btn m-btn-theme shadow a-btn shadow-sm rounded"
                    to="/booking-request"
                  >
                  <b>Request Cleaning</b>
                  </router-link>
                </li>

                <li class="m-mega-menu m-dropdown d-block d-sm-block d-md-none">
                  <router-link class="nav-link"
                    to="/booking-request"
                  >
                  Request Cleaning
                  </router-link>
                </li>
              </ul>
            </b-collapse>
          </div>
          <b-navbar-toggle target="navbar"></b-navbar-toggle>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>

    export default {
        name: "Navbar",
        data() {
            return {
              auth: false,
              user : {}
            };
        }
    };
</script>

<style scoped>
@import url("../../../assets/plugin/bootstrap/css/bootstrap.min.css");
@import url("../../../assets/plugin/font-awesome/css/all.min.css");
@import url("../../../assets/plugin/et-line/style.css");
@import url("../../../assets/plugin/themify-icons/themify-icons.css");
@import url("../../../assets/plugin/owl-carousel/css/owl.carousel.min.css");
@import url("../../../assets/plugin/magnific/magnific-popup.css");
@import url("../../../assets/style/master.css");
@import url("../../../assets/fonts/css/circular-std.css");
@import url("../../../dashboard-assets/css/colors/blue.css"); 
@import url("../../../dashboard-assets/css/user-dashboard.css"); 
@import url("https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/css/toastr.min.css");

header{
  z-index: 101;
}
</style>


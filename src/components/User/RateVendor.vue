<template>
  <div class="dashboard-content-container" data-simplebar>
    <div class="dashboard-content-inner">
      <!-- Dashboard Headline -->
      <div class="dashboard-headline">
        <h3>Rate or Tip WhavPro</h3>

        <!-- Breadcrumbs -->
        <nav id="breadcrumbs" class="dark">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Dashboard</a>
            </li>
            <li>Rate</li>
          </ul>
        </nav>
      </div>

      <!-- Row -->
      <div class="row" v-if="loaded">
        <div class="container">
          <div class="row">
          </div>
          <div class="row">
            <!-- Content -->
            <div class="col-xl-12 col-lg-12 content-right-offset">
              
              <div class="single-page-section table-responsive">
                <div class="job-overview ">
                  <div class="job-overview-headline">Assigned WhavPro</div>
                  <div class="job-overview-inner">
                    <ul>
                      <li v-for="(vendor,index) in request.vendor" :key="index">
                        <i class="icon-feather-user"></i>
                        <span>
                          {{ vendor.first_name }}
                          {{ vendor.last_name }}
                          <span
                            class="float-right icon-material-outline-star fa-lg"
                            style="line-height:1.6;color:orange"
                          ></span>
                          <span class="float-right p-1" :id="vendor.id"> 
                            {{ getRating(vendor) }}
                          </span>

                        </span>
                        <h6 v-if="request.status == 'completed'" class="text-muted">Enjoying my cleaning service?</h6>
                        <div class="row mt-1" v-if="request.status == 'completed'">
                          <div class="col-6">
                            <button class="btn btn-secondary btn-block" @click.prevent="openTip(vendor)">
                              Tip me
                              <b class="icon-line-awesome-money"></b>
                            </button>
                          </div>
                          <div class="col-6">
                            <button class="btn btn-secondary btn-block" @click.prevent="openRate(vendor)">
                              Rate me
                              <b class="fa fa-star"></b>
                            </button>
                          </div>
                          <div class="col-4"></div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="single-page-section d-none" >
                <h3 class="margin-bottom-30">Location</h3>
                <p>{{ request.location }}</p>
                <div id="single-job-map-container">
                  <div
                    id="singleListingMap" 
                    data-latitude="51.507717"
                    data-longitude="-0.131095"
                    data-map-icon="im im-icon-Hamburger"
                  ></div>
                  <a href="#" id="streetView">Street View</a>
                </div>
              </div>
            </div>

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
/* eslint-disable no-console */

import Footer from '../../components/Includes/User/Footer.vue'
import GeneralTags from "./../../mixins/gtm.js";

export default {
  name: "RateVendor",
  components : {
    Footer
  },
  data() {
    return {
      requestId: this.$route.params.id,
      request: {},
      base: "",
      token: localStorage.getItem("token"),
      loaded: false,
      vendors: [],
      newVendors: [],
      testVendors: [],
      tip: 3
    };
  },
  methods: {
    formatPrice(value) {
      let val = value;
      val = parseInt(val);
      return val.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
    },
    cancelRequest(){
      this.$swal({
        type: "info",
        text: "Are you sure you want to cancel this booking?",
        confirmButtonText: "Yes"
      }).then(result => {
        if (result.value) {
          const loader = this.$loading.show({
            backgroundColor: "#000000",
            zIndex: 99999
          });

          

          const url =
            this.base + "booking/" + this.requestId + "/update/cancel" + "?token=" + this.token;
          this.$http({
            url: url,
            method: "PUT"
          })
            .then(res => {
              console.log(res);
              this.request = res.data.data;
              loader.hide();
              this.$swal.fire({
                type: "success",
                text: "Booking has been cancelled successfully"
              });
            })
            .catch(err => {
              console.log(err);
              loader.hide();
            });
        }
      });
    },
    getRating(vendor){

      const url =  this.base + 'review/rating/'+vendor.id +'?token='+this.token
      this.$http({ url: url }).then(res => {
          console.log(res);
          vendor.rating = res.data.data        
          $('#'+vendor.id).text(res.data.data)
      }).catch(err => {
          vendor.rating = 0
      })
      
    },
    openTip(vendor) {
      this.$router.push('/user/dashboard/tip/'+vendor.id)
    },
    openRate(vendor) {
      this.$router.push('/user/dashboard/review/'+vendor.id)
    },

  },
  created() {
    jQuery($);
 
  },
mounted() {
    GeneralTags();

    this.base = this.$store.state.base_url;

    const url =
      this.base + "booking/view/" + this.requestId + "?token=" + this.token;

    const loader = this.$loading.show({
      backgroundColor: "#000000",
      zIndex: 99999
    });
    this.$http({
      url: url
    })
      .then(res => {
        console.log(res);
        this.request = res.data.data;
       
        this.loaded = true;
        loader.hide();
      })
      .catch(err => {
        loader.hide();
      });
  }
};
</script>
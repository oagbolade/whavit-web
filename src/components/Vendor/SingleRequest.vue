<template>
  <div class="dashboard-content-container" data-simplebar>
    <div class="dashboard-content-inner">
      <!-- Dashboard Headline -->
      <div class="dashboard-headline">
        <h3>View Request</h3>

        <!-- Breadcrumbs -->
        <nav id="breadcrumbs" class="dark">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Dashboard</a>
            </li>
            <li>Request</li>
          </ul>
        </nav>
      </div>

      <!-- Row -->
      <div class="row" v-if="loaded">
        <div class="single-page-header w-100">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="single-page-header-inner">
                  <div class="left-side">
                    <div class="header-image">
                      <a href>
                        <img src="@/dashboard-assets/images/avatar.png" alt>
                      </a>
                    </div>
                    <div class="header-details">
                      <h3>{{ request.address }}</h3>
                      <h5>Requested by</h5>
                      <ul>
                        <li>
                          <a href="#">
                            <i class="icon-feather-user"></i>
                            {{ (request.user != null)? request.user.first_name + " " + request.user.last_name : " " }}
                          </a>
                        </li>
                        <li>
                          <div class="d-none verified-badge-with-title">Verified</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="right-side">
                    <div class="salary-box">
                      <div class="salary-type">Price</div>
                      <div class="salary-amount">&#8358; {{ formatPrice(request.net_price - (20/100 * request.net_price)) }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="row">
            <!-- Content -->
            <div class="col-xl-8 col-lg-8 content-right-offset">
              <div class="single-page-section">

                <div class="job-overview mt-2">
                  <div class="job-overview-headline">
                    <span v-if="request.products.length > 0">
                      {{ request.products[0].name }}
                    </span>
                    <div class="lead float-right">&#8358; {{ formatPrice(request.net_price - (20/100 * request.net_price)) }}</div>
                  </div>
                  <div class="job-overview-inner">
                      <div class="row mt-3">
                        <div class="col-md-4">
                          <h5><b>Areas to be cleaned</b></h5>
                          <!-- <ul class="list-2"> -->
                            <div v-if="areas.length > 0">
                              <p v-for="(area,index) in areas" :key="index">
                                  {{ index + 1 }}. {{area.title}}
                              </p>
                            </div>
                          <!-- </ul> -->
                        </div>
                        <div class="col-md-4">
                          <h5><b>Extra Services</b></h5>
                          <!-- <ul class="list-"> -->
                            <p v-for="(extra,index) in request.extra" :key="index">{{ index + 1 }}. {{extra.title}}</p>
                          <!-- </ul> -->
                        </div>
                        <div class="col-md-4">
                          <h5><b>Other Services</b></h5>
                          <!-- <ul class="list-2"> -->
                            <p v-for="(service,index) in request.service" :key="index">{{ index + 1 }}. {{service.title}}</p>
                          <!-- </ul> -->
                        </div>
                      </div>
                  </div>
                </div>

              </div>
              <div class="single-page-section">
                <div class="job-overview">
                  <div class="job-overview-headline">Other Details</div>
                  <div class="job-overview-inner">
                    <ul>
                      <li>
                        <i class="icon-material-outline-location-on"></i>
                        <span>Location</span>
                        <h5>{{ request.address }}</h5>
                      </li>
                      <li>
                        <i class="icon-material-outline-business-center"></i>
                        <span>Number of rooms</span>
                        <h5>{{ request.no_of_rooms }}</h5>
                      </li>
                      <li>
                        <i class="icon-material-outline-local-atm"></i>
                        <span>Price</span>
                        <h5>&#8358; {{ formatPrice(request.net_price) }}</h5>
                      </li>
                      <li>
                        <i class="icon-material-outline-access-time"></i>
                        <span>Cleaning starts</span>
                        <h5> {{ request.start_date }} </h5>
                      </li>
                      <li>
                        <i class="icon-material-outline-access-time"></i>
                        <span>Time</span>
                        <h5>
                          {{ request.time }} 
                        </h5>
                      </li>
                      <li>
                        <i class="icon-material-outline-history"></i>
                        <span>Schedule</span>
                        <h5>
                          {{ request.schedule }}
                          </h5>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="single-page-section d-none">
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

            <!-- Sidebar -->
            <div class="col-xl-4 col-lg-4">
              <div class="sidebar-container" v-if="request.status == 'pending'">
                <a href="#" class="btn btn-lg btn-primary text-white btn-block mb-2" @click.prevent="acceptRequest()">
                  Accept Request
                  <i class="icon-material-outline-check"></i>
                </a>
                <a
                  href="#"
                  class="btn btn-lg btn-block btn-danger popup-with-zoom-anim"
                  @click.prevent="rejectRequest()"
                >
                  Reject Request
                  <i class="icon-line-awesome-times"></i>
                </a>
              </div>
              <div class="sidebar-container" v-else-if="request.status == 'accepted'">
                <div class="panel panel-success">
                  <h4 class="lead badge badge-success p-3 w-100">

                  Accepted <span class="icon-material-outline-check"></span>
                  </h4>
                </div>
              </div>
              <div class="sidebar-container" v-else>
                <div class="panel panel-success">
                  <h4 class="lead badge badge-danger p-3 w-100">
                    Declined <span class="icon-line-awesome-times-circle-o"></span>
                  </h4>
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
  name: "SingleRequest",
  components : {
    Footer
  },
  data() {
    return {
      requestId: this.$route.params.requestId,
      request: {},
      areas: [],
      base: "",
      token: localStorage.getItem("token"),
      loaded: false
    };
  },
  methods: {
    formatPrice(value) {
      let val = value;
      // let val = (value / 1).toFixed(2).replace(".", ",");
      return val.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
    },
    acceptRequest() {
      // /{bookingId}/update/vendor/accept
      const url =
        this.base +
        "booking/" +
        this.requestId +
        "/update/vendor/accept?token=" + this.token;
      const loader = this.$loading.show({
        backgroundColor: "#000000",
        zIndex: 99999
      });


      this.$http({
        url: url,
        method : 'PUT'
      })
        .then(res => {
          console.log(res);
          this.request = res.data.data;
          loader.hide()
        })
        .catch(err => {
          console.log(err);
          this.$swal({
            type: "error",
            text: "error Ocured"
          });
          loader.hide()
        });
    },
    rejectRequest() {
      const url =
        this.base +
        "booking/" +
        this.requestId +
        "/update/vendor/reject?token=" + this.token;
      const loader = this.$loading.show({
        backgroundColor: "#000000",
        zIndex: 99999
      });
      this.$http({
        url: url,
        method: 'PUT'
      })
        .then(res => {
console.log(res);
          this.request = res.data.data;
          loader.hide()
        })
        .catch(err => {
          console.log(err);
          this.$swal({
            type: "error",
            text: "error Ocured"
          });
          loader.hide()
        });


    }
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
        let request = res.data.data;
        request.products.forEach(product => {
          this.areas = product.area;
        });
        // console.log(this.request.user.first_name)
        this.loaded = true;
        loader.hide();
      })
      .catch(err => {
        console.log(err);
        loader.hide();
      });
  }
};
</script>
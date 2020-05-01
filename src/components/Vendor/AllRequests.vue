<template>
  
    <div class="dashboard-content-container" data-simplebar>
      <div class="dashboard-content-inner">
        <!-- Dashboard Headline -->
        <div class="dashboard-headline">
          <h3>Manage Booking Requests</h3>

          <!-- Breadcrumbs -->
          <nav id="breadcrumbs" class="dark">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Dashboard</a>
              </li>
              <li>Manage bookingRequests</li>
            </ul>
          </nav>
        </div>

        <!-- Row -->
        <div class="row">
          <!-- Dashboard Box -->
          <div class="col-xl-12">
            <div class="dashboard-box margin-top-0">
              <!-- Headline -->
              <div class="headline">
                <h3>
                  <i class="icon-material-outline-business-center"></i> My Booking Requests
                </h3>
              </div>

              <div class="content">
                <ul class="dashboard-box-list">
                  <li v-for="request in bookingrequests" :key="request.id">
                    <!-- Job Listing -->
                    <div class="job-listing">
                      <!-- Job Listing Details -->
                      <div class="job-listing-details">
                        <!-- Logo -->
                        <!-- 											<a href="#" class="job-listing-company-logo">
												<img src="images/company-logo-05.png" alt="">
                        </a>-->

                        <!-- Details -->
                        <div class="job-listing-description">
                          <h1>{{ (request.user != null)? request.user.first_name + " " + request.user.last_name : " " }}</h1>
                          <h3 class="job-listing-title">
                            <a href class="dashboard-status-button blue mr-2" v-if="request.products.length > 0">
                              {{ request.products[0].name }}
                            </a>
                            <a href="#">{{ request.address }}</a>
                            <span class="dashboard-status-button green">{{ request.status }}</span>
                          </h3>

                          <!-- Job Listing Footer -->
                          <div class="job-listing-footer">
                            <ul>
                              <li>
                                <i class="icon-material-outline-date-range"></i>
                                {{ request.start_date }}
                              </li>
                              <li>
                                <i class="icon-material-outline-date-range"></i>
                                {{ request.schedule }}
                              </li>
                              <li>
                                &#8358;
                                {{ formatPrice(request.net_price - (20/100 * request.net_price)) }}
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- Buttons -->
                    <div class="buttons-to-right always-visible">
                      <router-link
                        :to="'/vendor/dashboard/request/'+request.id"
                        class="btn btn-primary btn-md text-white"
                        title="View"
                        data-tippy-placement="top"
                        style="width:150px"
                      >View</router-link>
                    </div>
                  </li>
                </ul>
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
    <!-- Dashboard Content / End -->

</template>
<script>
/* eslint-disable no-console */
import GeneralTags from "./../../mixins/gtm.js";
import Footer from '../../components/Includes/User/Footer.vue'

export default {
  name: "AllRequest",
  components : {
    Footer
  },
  data() {
    return {
      bookingrequests: [],
      base : '',
      token : localStorage.getItem('token')
    };
  },
  methods:{
    formatPrice(value) {
      let val = value;
      val = parseInt(val);
      return val.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
    },
  },
  created() {
    jQuery($);
 
  },
mounted() {
    GeneralTags();

    const base = this.$store.state.base_url;

    this.user = this.$cookies.get("user");
    const loader = this.$loading.show({
      backgroundColor: "#000000",
      zIndex: 9999
    });
    this.$http({
      url: `${base}vendor/bookings/all?token=${this.token}`
    })
      .then(res => {
        let allBookingRequests = res.data.data;
        // Only pending requests are displayed on vendor's booking page
        allBookingRequests.forEach(bookings => {
          if (bookings.status == "pending") {
            this.bookingrequests.push(bookings);
          }
        });
        loader.hide();
      })
      .catch(err => {
        console.log(err);
        loader.hide();
      });
  }
};
</script>

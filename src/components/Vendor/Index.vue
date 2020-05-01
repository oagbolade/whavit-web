<template>
  <div class="dashboard-content-container" data-simplebar>
    <div class="dashboard-content-inner">
      <!-- Dashboard Headline -->
      <div class="dashboard-headline">
        <h3>Welcome, {{ user.first_name }}!</h3>
        <span>We are glad to see you again!</span>

        <!-- Breadcrumbs -->
        <nav id="breadcrumbs" class="dark">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>Dashboard</li>
          </ul>
        </nav>
      </div>

      <!-- Fun Facts Container -->
      <div class="fun-facts-container">
        <div class="fun-fact" data-fun-fact-color="#1281dd">
          <div class="fun-fact-text">
            <span>Active Booking</span>
            <h3 class="h2">{{ requests.length }}</h3>
          </div>
          <div class="fun-fact-icon">
            <i class="icon-material-outline-gavel"></i>
          </div>
        </div>

        <div class="fun-fact" data-fun-fact-color="#1281dd">
          <div class="fun-fact-text">
            <span>Wallet Balance</span>
            <h3 class="h2">&#8358;{{ formatPrice(wallet.balance) }} </h3>
          </div>
          <div class="fun-fact-icon">
            <i class="icon-material-outline-rate-review"></i>
          </div>
        </div>

        <div class="fun-fact" data-fun-fact-color="#1281dd">
          <div class="fun-fact-text">
            <span>Booking requests</span>
            <h4>{{ requests.length }}</h4>
          </div>
          <div class="fun-fact-icon">
            <i class="icon-material-outline-rate-review"></i>
          </div>
        </div>

        <!-- Last one has to be hidden below 1600px, sorry :( -->
      </div>

      <!-- Row -->
      <div class="row">
        <!-- Dashboard Box -->
        <div class="col-xl-12">
          <div class="dashboard-box">
            <div class="headline">
              <h3>
                <i class="icon-material-baseline-notifications-none"></i> Notifications
              </h3>
              <button
                class="mark-as-read ripple-effect-dark"
                data-tippy-placement="left"
                title="Mark all as read"
              >
                <i class="icon-feather-check-square"></i>
              </button>
            </div>
            <div class="content">
              <ul class="dashboard-box-list">
                <!-- <li>
                  <span class="notification-icon">
                    <i class="icon-material-outline-group"></i>
                  </span>
                  <span class="notification-text">
                    <strong>Michael Shannah</strong> applied for a job
                    <a href="#">Full Stack Software Engineer</a>
                  </span>
                  
                  <div class="buttons-to-right">
                    <a
                      href="#"
                      class="button ripple-effect ico"
                      title="Mark as read"
                      data-tippy-placement="left"
                    >
                      <i class="icon-feather-check-square"></i>
                    </a>
                  </div>
                </li>-->
              </ul>
            </div>
          </div>
        </div>

        <!-- Dashboard Box -->
        <!-- <div class="col-xl-6">
          <div class="dashboard-box">
            <div class="headline">
              <h3>
                <i class="icon-material-outline-assignment"></i> New Requests
              </h3>
            </div>
            <div class="content">
              <ul class="dashboard-box-list">
                
              </ul>
            </div>
          </div>
        </div> -->
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

import Footer from '../../components/Includes/User/Footer.vue'
import GeneralTags from "./../../mixins/gtm.js";

export default {
  name: "VendorIndex",
  components : {
    Footer
  },
  data() {
    return {
      user: {},
      base_url: "",
      token: localStorage.getItem("token"),
      vendors: {},
      users: {},
      userCount: "",
      requests: [],
      requestCount: "",
      vendorCount: "",
      bookingRequests: [],
      NewRequestVendors: [],
      wallet: []
    };
  },
  methods: {
    formatPrice(value) {
      let val = value
      // let val = (value / 1).toFixed(2).replace(".", ",");
      return val.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
    }
  },
  created() {
    jQuery($);
 
  },
mounted() {
    GeneralTags();

    const base = this.$store.state.base_url;
    let loader2 = this.$loading.show({
      backgroundColor: "#000000",
      zIndex: 99999
    });

//get all online vendors
    this.$http({
      url: base + "vendor/online/all?token=" + this.token
    })
      .then(res => {
    console.log("mounted");

        console.log(res);
        })
        .catch(err => {
        console.log(err);
      });

      
    this.$http({
      url: base + "wallet/view?token=" + this.token
    })
      .then(res => {
        console.log(res);
        this.walletLoaded = true;
        this.wallet = res.data.data;

        loader2.hide();
      })
      .catch(err => {
        console.log(err);
        loader2.hide();
      });

    this.$http({
      url: base + "vendor/bookings/all?token=" + this.token
    })
      .then(res => {
        console.log(res);
        this.requests = res.data.data;
        this.requestCount = res.data.data.length;
        loader.hide();
      })
      .catch(err => {
        console.log(err);
        loader.hide();
      });

    this.user = this.$cookies.get("user");
    console.log(this.user);
    const loader = this.$loading.show({
      backgroundColor: "#000000",
      zIndex: 9999
    });
    this.$http({
      url: base + "vendor/bookings/all?token=" + this.token
    })
      .then(res => {
        console.log(res);
        this.requests = res.data.data;
        // console.log(this.requests)
        loader.hide();
      })
      .catch(err => {
        console.log(err);
        loader.hide();
      });
  }
};
</script>

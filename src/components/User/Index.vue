<template>
  <div class="dashboard-content-container" data-simplebar>
    <div class="dashboard-content-inner">
      <!-- Dashboard Headline -->
      <div class="dashboard-headline">
        <h3>Hello, {{ user.first_name }}!</h3>
        <span>We are glad to see you again!</span>

        <nav id="breadcrumbs" class="dark">
            <router-link class="btn btn-md btn-primary" to="/booking-request"><i class="icon-feather-plus"></i> Book Cleaning</router-link>
        </nav>
      </div>

      <!-- Fun Facts Container -->
      <div class="fun-facts-container">
          <div @click="goto('/booking-request')" class="fun-fact" data-fun-fact-color="#1281dd">
            <div class="fun-fact-text">
              <span>Booking Requests</span>
              <h4>{{ requests.length }}</h4>
            </div>
            <div class="fun-fact-icon">
              <i class="icon-material-outline-gavel"></i>
            </div>
          </div>

          <div @click="goto('/user/dashboard/wallet')" class="fun-fact" data-fun-fact-color="#1281dd" v-if="walletLoaded">
            <div class="fun-fact-text">
              <span>Wallet Balance</span>
              <h3 class="h2">&#8358; {{ wallet.balance | formatPrice }}</h3>
            </div>
            <div class="fun-fact-icon">
              <i class="icon-material-outline-rate-review"></i>
            </div>
          </div>

          <div @click="goto('/user/dashboard/requests')" class="fun-fact" data-fun-fact-color="#1281dd">
            <div class="fun-fact-text">
              <span>Total requests</span>
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
                <i class="icon-material-outline-assignment"></i> My Requests
              </h3>
            </div>
            <div class="content" v-if="requestLoaded">
              <ul class="dashboard-box-list">
                <li v-for="request in requests" :key="request.id">
                  <div class="invoice-list-item">
                    <strong>{{ request.address }}</strong>
                    <ul>
                      <li>
                        <span class="paid" v-if="request.products.length > 0">{{ request.products[0].name }}</span>
                      </li>
                      <li>Order: #{{request.id}}</li>
                      <li>Price: &#8358; {{ formatPrice(request.base_price) }}</li>
                    </ul>
                  </div>

                </li>
              </ul>
            </div>
          </div>
        </div>-->
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
  name: "UserIndex",
  components : {
    Footer
  },
  data() {
    return {
      user: {},
      base_url: "",
      token: localStorage.getItem("token"),
      requests: [],
      requestCount: "",
      bookingRequests: {},
      wallet: {},
      walletLoaded: false,
      requestLoaded: false
    };
  },
  methods: {
    formatPrice(value) {
      const val = parseFloat(value);
      return val.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
    },
    goto(route){
      this.$router.push(route);
    }
  },
  filters : {
    formatPrice(value) {
      const val = parseFloat(value);
      return val.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
    }
  },
  created() {
    jQuery($);
 
  },
mounted() {
    GeneralTags();

    this.user = this.$cookies.get("user");
    const base = this.$store.state.base_url;

    let loader = this.$loading.show({
      backgroundColor: "#000000",
      zIndex: 99999
    });

    this.$http({
      url: base + "user/booking/all?token=" + this.token
    })
      .then(res => {
        console.log(res);
        this.requests = res.data.data;
        this.requestCount = res.data.data.length;
        this.requestLoaded = true;
        for (const key in this.requests) {
          if (this.requests.hasOwnProperty(key)) {
            const element = this.requests[key];
           // console.log(element.products[0].name);
          }
        }
        loader.hide();
      })
      .catch(err => {
//        console.log(err);
        loader.hide();
      });

    let loader2 = this.$loading.show({
      backgroundColor: "#000000",
      zIndex: 99999
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
        loader2.hide();
      });
  }
};
</script>
<style scoped>
</style>

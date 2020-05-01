<template>
  <div class="dashboard-content-container" data-simplebar>
    <div class="dashboard-content-inner">
      <!-- Dashboard Headline -->
      <div class="dashboard-headline">
        <h3>Requests</h3>

        <!-- Breadcrumbs -->
        <nav id="breadcrumbs" class="dark">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Dashboard</a>
            </li>
            <li>Requests</li>
          </ul>
        </nav>
      </div>

      <!-- Row -->
      <div class="row">
        <div class="container">
          <div class="col-xl-12">
            <div class="dashboard-box">
              <div class="headline">
                <h3>
                  <i class="icon-material-outline-assignment"></i> My Requests
                </h3>
              </div>
              <div class="content" v-if="requestLoaded">
                <table id="example" class="table w-100 table-colored mb-0 toggle-arrow-tiny">
              <thead>
                <tr>
                  <th>Order</th>
                  <th>Cleaning Type</th>
                  <th>Extra Services</th>
                  <th>Special Services</th>
                  <th>Location</th>
                  <th>Schedule</th>
                  <th>Price</th>
                  <th>Cleaning Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="request in requests" :key="request.id">
                  <td>Order: #{{ request.id.substring(0,8)}}</td>
                  <td>
                    <span class="paid" v-if="request.products.length > 0">
                      {{ request.products[0].name }}
                    </span>
                  </td>
                  <td>{{ (request.extra.length > 0) ? request.extra[0].title : "Not Available" }}</td>
                  <td>{{ (request.service.length > 0) ? request.service[0].title : "Not Available" }}</td>
                  <td>{{ request.address }}</td>
                  <td>{{ request.schedule }}</td>
                  <td>&#8358; {{ formatPrice(request.net_price) }}</td>
                  <td>{{ formatDate(request.start_date) }}</td>
                  <td>
                    <div>
                      <b-dropdown id="dropdown-1" text="More" variant="primary" class="m-md-2">
                        <b-dropdown-item active @click="handleViewRedirect(request.id)">View</b-dropdown-item>
                        <b-dropdown-divider></b-dropdown-divider>
                        <b-dropdown-item v-if="request.vendor.length >= 1" @click="handleWhaveproRedirect(request.id)">View WhavPro</b-dropdown-item>
                        <b-dropdown-divider></b-dropdown-divider>
                        <b-dropdown-item @click="handleRescheduleRedirect(request.id)">Reschedule Cleaning</b-dropdown-item>
                      </b-dropdown>
                    </div>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr class="active">
                  <td colspan="9">
                    <div class="text-right">
                      <ul
                        class="pagination pagination-rounded justify-content-end footable-pagination m-t-10 mb-0"
                      ></ul>
                    </div>
                  </td>
                </tr>
              </tfoot>
            </table>
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
import $ from 'jquery';
import jQuery from '../../mixins/jqueryHelper';
import Footer from '../../components/Includes/User/Footer.vue'
import GeneralTags from "./../../mixins/gtm.js";

export default {
  name: "BusinessRequest",
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
      wallet : {},
      walletLoaded : false,
      requestLoaded : false
    };
  },
  methods: {
     handleViewRedirect(id){
        this.$router.push('/business/dashboard/request/'+id);
    },
    handleRescheduleRedirect(id){
        this.$router.push('/business/dashboard/request/reschedule/'+id);
    },
    handleWhaveproRedirect(id){
        this.$router.push('/business/dashboard/vendor/view'+id);
    },
    formatDate(date){
      let originalDate = date;
      date = date.match(/\d{4}-(1[0-2]|0\[1-9])-(3[01]|[2][0-9]|0\d)/);
      if (date !== null) {
        return date[0];
      }
      return originalDate;
    },
    formatPrice(value) {
      let val = parseInt(value);
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
    })

    this.$http({
      url: base + "user/booking/all?token=" + this.token
    })
      .then(res => {
        console.log(res);
        this.requests = res.data.data;
        this.requestCount = res.data.data.length;
        this.requestLoaded = true
        for (const key in this.requests) {
          if (this.requests.hasOwnProperty(key)) {
            const element = this.requests[key];
            // console.log(element.products[0].name)
            
          }
        }
        loader.hide()
      })
      .catch(err => {
        console.log(err);
        loader.hide()
      });

    
  
  }
};
</script>

<style scoped>
  tr{
    margin-bottom: 50px;
  }
</style>
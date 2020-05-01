<template>
  <div class="dashboard-container">
    <div class="dashboard-sidebar">
      <div class="dashboard-sidebar-inner" data-simplebar>
        <div class="dashboard-nav-container">
          <!-- Responsive Navigation Trigger -->
          <a
            href="#"
            :class="{ active: toggleDashboard }"
            class="dashboard-responsive-nav-trigger"
          >
            <span
              @click="toggleDashboard = !toggleDashboard"
              :class="{ 'is-active': toggleDashboard }"
              class="hamburger hamburger--collapse"
            >
              <span class="hamburger-box">
                <span
                  class="hamburger-inner"
                ></span>
              </span>
            </span>
            <span class="trigger-title">Dashboard Navigation</span>
          </a>

          <!-- Navigation -->
          <div :class="{ active: toggleDashboard }" class="dashboard-nav">
            <div class="dashboard-nav-inner">
              <ul data-submenu-title="Dashboard">
                <li>
                  <router-link to="/business/dashboard/">
                    <i class="icon-material-outline-dashboard"></i> Overview
                  </router-link>
                </li>
                <li>
                  <router-link to="/business/dashboard/wallet">
                    <i class="icon-material-outline-star-border"></i>My Wallet
                  </router-link>
                </li>
              </ul>

              <ul data-submenu-title="Booking Requests">
                <li>
                  <router-link to="/business/dashboard/requests">
                    <i class="icon-material-outline-business-center"></i> My
                    Requests
                  </router-link>
                </li>
                <li>
                  <router-link to="/business/book">
                    <i class="icon-material-outline-assignment"></i> New Request
                  </router-link>
                </li>
                <li>
                  <router-link to="/business/dashboard/referral">
                    <i class="icon-material-outline-assignment"></i> Referrals
                  </router-link>
                </li>
              </ul>

              <ul data-submenu-title="Account">
                <!-- <li>
                  <router-link to="/business/dashboard/referral">
                    <i class="icon-feather-share-2"></i> Invite Friend
                  </router-link>
                </li> -->
                <li>
                  <router-link to="/business/dashboard/profile">
                    <i class="icon-material-outline-settings"></i> Settings
                  </router-link>
                </li>
                <li>
                  <a @click="logout">
                    <i class="icon-material-outline-power-settings-new"></i>
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <!-- Navigation / End -->
        </div>
      </div>
    </div>
    <!-- Dashboard Sidebar / End -->

    <router-view></router-view>
  </div>
</template>
<script>
/* eslint-disable no-console */

import $ from "jquery";
import jQuery from "../../mixins/jqueryHelper";

export default {
  name: "BusinessDashboard",
  data() {
    return {
      user: {},
      base_url: "",
      token: localStorage.getItem("token"),
      // vendors : {},
      users: {},
      // vendorCount : '',
      bookingRequests: {},
      NewRequestVendors: [],
      toggleDashboard: false
    };
  },
  methods: {
    logout() {
      this.$store
        .dispatch("logout")
        .then(() => {
          this.$router.push("/");
          location.reload();
        })
        .catch(() => {});
    }
  },
  created() {
    jQuery($);
  },
  mounted() {
    this.user = this.$cookies.get("user"); //USE VUEX WATCH TO CHECK FOR CHANGES LATER, lets get things right first

    const base = this.$store.state.base_url;

    // //get all vendors
    // this.$http({
    //   url: base + "vendor/all?token=" + this.token
    // })
    //   .then(res => {
    //     this.vendors = res.data.data;
    //     this.vendorCount = res.data.data.length;

    //     this.vendors.forEach(element => {
    //       if (element.status == null) {
    //         this.NewRequestVendors.push(element);
    //       }
    //     });
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  }
};
</script>

<style scoped>
</style>
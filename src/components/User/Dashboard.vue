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
              :class="{ 'is-active': toggleDashboard }"
              @click="toggleDashboard = !toggleDashboard"
              class="hamburger hamburger--collapse"
            >
              <span class="hamburger-box">
                <span class="hamburger-inner"></span>
              </span>
            </span>
            <span class="trigger-title">Dashboard Navigation</span>
          </a>

          <!-- Navigation -->
          <div class="dashboard-nav" :class="{ active: toggleDashboard }">
            <div class="dashboard-nav-inner">
              <ul data-submenu-title="Dashboard">
                <li>
                  <router-link to="/user/dashboard/">
                    <i class="icon-material-outline-dashboard"></i> Overview
                  </router-link>
                </li>
                <li>
                  <router-link to="/user/dashboard/wallet">
                    <i class="icon-material-outline-star-border"></i>My Wallet
                  </router-link>
                </li>
              </ul>

              <ul data-submenu-title="Booking Requests">
                <li>
                  <router-link to="/user/dashboard/requests">
                    <i class="icon-material-outline-business-center"></i> My
                    Requests
                  </router-link>
                </li>
                <li>
                  <router-link to="/booking-request">
                    <i class="icon-material-outline-assignment"></i> New Request
                  </router-link>
                </li>
                <li>
                  <router-link to="/user/dashboard/referral">
                    <i class="icon-material-outline-assignment"></i> Referrals
                  </router-link>
                </li>
              </ul>

              <ul data-submenu-title="Account">
                <!-- <li>
                  <router-link to="/user/dashboard/referral">
                    <i class="icon-feather-share-2"></i> Invite Friend
                  </router-link>
                </li> -->
                <li>
                  <router-link to="/user/dashboard/profile">
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

export default {
  name: "UserDashboard",
  data() {
    return {
      user: {},
      base_url: "",
      token: localStorage.getItem("token"),
      users: {},
      bookingRequests: {},
      toggleDashboard: false
    };
  },
  methods: {
    logout() {
      this.$store
        .dispatch("logout")
        .then(() => {
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            event: "loggedout",
            accountType: "Whavit For Home" //replace with type of account and leave blank where not present
          });
          this.$router.push("/");
          location.reload();
        })
        .catch(() => {});
    },
    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
  },
  created() {
    jQuery($);
  },
  mounted() {
    this.user = this.$cookies.get("user");
    //USE VUEX WATCH TO CHECK FOR CHANGES LATER, lets get things right first

    const base = this.$store.state.base_url;
  }
};
</script>
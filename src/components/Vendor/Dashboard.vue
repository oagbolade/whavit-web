<template>
  <div class="dashboard-container">
    <div class="dashboard-sidebar">
      <div class="dashboard-sidebar-inner" data-simplebar>
        <div class="dashboard-nav-container">
          <a
            href="#"
            :class="{ active: toggleDashboard }"
            class="dashboard-responsive-nav-trigger"
          >
            <span
              @click="toggleDashboard = !toggleDashboard"
              class="hamburger hamburger--collapse"
              :class="{ 'is-active': toggleDashboard }"
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
                  <router-link to="/vendor/dashboard/">
                    <i class="icon-material-outline-dashboard"></i> Overview
                  </router-link>
                </li>
                <li>
                  <router-link to="/vendor/dashboard/wallet">
                    <i class="icon-material-outline-money"></i>Payout
                  </router-link>
                </li>
                <!-- <li>
                  <router-link to="/vendor/dashboard/payout">
                    <i class="icon-material-outline-money"></i>Payout
                  </router-link>
                </li> -->
              </ul>

              <ul data-submenu-title="Booking Requests">
                <li>
                  <router-link to="/vendor/dashboard/requests">
                    <i class="icon-material-outline-business-center"></i> My
                    Requests
                  </router-link>
                </li>
              </ul>

              <ul data-submenu-title="Account">
                <li>
                  <router-link to="/vendor/dashboard/profile">
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
  name: "VendorDashboard",
  data() {
    return {
      user: {},
      base_url: "",
      token: localStorage.getItem("token"),
      users: {},
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
  mounted() {
    this.user = this.$cookies.get("user"); //USE VUEX WATCH TO CHECK FOR CHANGES LATER, lets get things right first
    const base = this.$store.state.base_url;

    //get all vendors
    this.$http({
      url: `${base}vendor/all?token=${this.token}`
    })
      .then(res => {
        this.vendors = res.data.data;
        this.vendorCount = res.data.data.length;

        this.vendors.forEach(element => {
          if (element.status == null) {
            this.NewRequestVendors.push(element);
          }
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

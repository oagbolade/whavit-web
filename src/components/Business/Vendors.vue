<template>
  <div class="dashboard-content-container" data-simplebar>
    <div class="dashboard-content-inner">
      <!-- Dashboard Headline -->
      <div class="dashboard-headline">
        <h3>Assigned WhavPros</h3>

        <!-- Breadcrumbs -->
        <nav id="breadcrumbs" class="dark">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Request</a>
            </li>
            <li>WhavPro</li>
          </ul>
        </nav>
      </div>

      <!-- Row -->
      <div class="row" v-if="loaded">
        <div class="container">
          <div class="row">
            <div class="col-md-4" v-for="vendor in vendors" :key="vendor.id">
              <div class="freelancer w-100">
                <!-- Overview -->
                <div class="freelancer-overview">
                  <div class="freelancer-overview-inner">
                    <!-- Bookmark Icon -->
                    <!-- <span class="bookmark-icon"></span> -->

                    <!-- Avatar -->
                    <div class="freelancer-avatar">
                      <div class="verified-badge"></div>
                      <a href>
                        <img src="@/dashboard-assets/images/avatar.png" alt />
                      </a>
                    </div>

                    <!-- Name -->
                    <div class="freelancer-name">
                      <h4>
                        <a href>
                          {{ vendor.first_name }}
                          {{ vendor.last_name }}
                        </a>
                      </h4>
                      <span>Whavpro</span>
                    </div>

                    <!-- Rating -->
                    <div class="freelancer-rating">
                      <span class="star-badge">
                        <span :id="vendor.id">{{ getRating(vendor) }}</span>
                      </span>
                    </div>
                  </div>
                </div>

                <!-- Details -->
                <div class="freelancer-details">
                  <div class="freelancer-details-list">
                    <ul>
                      <!-- <li>
                        Location
                        <strong>
                          <i class="icon-material-outline-location-on"></i>
                          {{ vendor.location }}
                        </strong>
                      </li> -->
                    </ul>
                  </div>
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

import $ from 'jquery';
import jQuery from '../../mixins/jqueryHelper';
import Footer from '../../components/Includes/User/Footer.vue'
import GeneralTags from "./../../mixins/gtm.js";

export default {
  name: "Vendors",
  components : {
    Footer
  },
  data() {
    return {
      base: "",
      token: localStorage.getItem("token"),
      requestId: this.$route.params.id,
      loaded: false,
      vendors: []
    };
  },
  methods: {
    getVendors() {
      const vendorsUrl = `${this.base}booking/view/${this.requestId}?token=${this.token}`;

      const loader = this.$loading.show({
        backgroundColor: "#000000",
        zIndex: 99999
      });
      this.$http({
        url: vendorsUrl
      })
        .then(res => {
          console.log(res);
          this.vendors = res.data.data.vendor;
          loader.hide();
          this.loaded = true;
        })
        .catch(err => {
          loader.hide();
        });
    },
    getRating(vendor) {
      const url =
        this.base + "review/rating/" + vendor.id + "?token=" + this.token;
      this.$http({ url: url })
        .then(res => {
          console.log(res);
          vendor.rating = res.data.data;
          $("#" + vendor.id).text(res.data.data);
        })
        .catch(err => {
          vendor.rating = 0;
        });
    }
  },
  created() {
    jQuery($);
 
  },
mounted() {
    GeneralTags();

    this.base = this.$store.state.base_url;
    this.getVendors();
  }
};
</script>

<style scoped>
.star-badge {
  border-radius: 4px;
  background-color: #febe42;
  color: #fff;
  font-size: 14px;
  line-height: 15px;
  font-weight: 700;
  padding: 5px 7px;
  position: relative;
  top: 1px;
  margin-right: 10px;
}

.reviews-panel {
  max-height: 450px;
  overflow: auto;
}
</style>

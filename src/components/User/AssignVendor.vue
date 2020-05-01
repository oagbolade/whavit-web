<template>
  <div class="dashboard-content-container" data-simplebar>
    <div class="dashboard-content-inner">
      <!-- Dashboard Headline -->
      <div class="dashboard-headline">
        <h3>Select Vendor</h3>

        <!-- Breadcrumbs -->
        <nav id="breadcrumbs" class="dark">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Request</a>
            </li>
            <li>Assign</li>
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
                  <a
                    href
                    class="button button-sliding-icon ripple-effect btn-block"
                    @click.prevent="selectCleaner(vendor)"
                  >
                    Hire Vendor
                    <i class="icon-material-outline-arrow-right-alt"></i>
                  </a>
                </div>
              </div>
            </div>
            <!-- <div class="col-md-6">
              <h4>Client reviews...</h4>
              <div class="reviews-panel w-100">
                <div class="card" v-for="(review,index) in vendor.review" :key="index">
                  <div class="card-body border">{{ review.description }}</div>
                  <div class="card-footer border py-1">
                    <h6 class="float-left">
                    </h6>
                    <span
                      class="fa mt-2 fa-star float-right"
                      style="color:orange"
                    >{{ review.rating }}</span>
                  </div>
                </div>
              </div>
            </div> -->
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

import Footer from "../../components/Includes/User/Footer.vue";
import GeneralTags from "./../../mixins/gtm.js";

export default {
  name: "AssignVendor",
  components: {
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
      const vendorsUrl = `${this.base}vendor/unbooked/all?token=${this.token}`;

      const loader = this.$loading.show({
        backgroundColor: "#000000",
        zIndex: 99999
      });
      this.$http({
        url: vendorsUrl
      })
        .then(res => {
          console.log(res);
          this.vendors = res.data.data;
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
    },
    selectCleaner(cleaner) {
      // PUThttp://whavit-api.herokuapp.com/api/booking/bookingId/update/vendor/add/vendorId?token=

      const loader = this.$loading.show({
        backgroundColor: "#000000",
        zIndex: 99999
      });

      const url =
        this.base +
        "booking/" +
        this.requestId +
        "/update/vendor/add/" +
        cleaner.id +
        "?token=" +
        this.token;

      this.$http({
        url: url,
        method: "PUT"
      })
        .then(res => {
          console.log(res);
          $(".mfp-close").trigger("click");
          loader.hide();
          this.$swal
            .fire({
              title: "Vendor assigned",
              text:
                cleaner.first_name +
                " " +
                cleaner.last_name +
                " has received your booking request, you'll be notified when your request is accepted.",
              type: "success"
            })
            .then(() => {
              this.$router.push("/login");
            })
            .catch(err => {
              loader.hide();
              var errorObj = err.response.data.errors;

              for (const key in errorObj) {
                if (errorObj.hasOwnProperty(key)) {
                  this.$swal.fire({
                    text: errorObj[key],
                    type: "error"
                  });
                }
              }
            });
        })
        .catch(err => {
          loader.hide();
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

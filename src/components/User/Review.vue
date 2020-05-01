<template>
  <div class="dashboard-content-container" data-simplebar>
    <div class="dashboard-content-inner">
      <!-- Dashboard Headline -->
      <div class="dashboard-headline">
        <h3>Review</h3>

        <!-- Breadcrumbs -->
        <nav id="breadcrumbs" class="dark">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Vendor</a>
            </li>
            <li>Review</li>
          </ul>
        </nav>
      </div>

      <!-- Row -->
      <div class="row">
        <!-- Page Content
        ==================================================-->
        <div class="container">
          <div class="row bg-white justify-content-center">
            <div class="col-md-8">
              <div class="card">
                <div class="card-body">
                  <form @submit.prevent="review()">
                    <center>
                      <span
                        v-for="(n, i) in 5"
                        :key="i"
                        :class="['fa fa-star rating-star star-' + n]"
                        @mouseover="hoverEffect(n)"
                        @mouseleave="removeColor(n)"
                        @click="starClicked(n)"
                      ></span>
                    </center>
                    <input type="hidden" :value="starNumber" />
                    <textarea
                      class="form-control border mt-2"
                      cols="30"
                      rows="3"
                      placeholder="Add Comments"
                      v-model="description"
                      required
                    ></textarea>
                    <center>
                      <button class="btn mx-auto btn-primary btn-sm mt-2">
                        Rate
                      </button>
                    </center>
                  </form>
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
import $ from "jquery";
import jQuery from "../../mixins/jqueryHelper";
import Footer from "../../components/Includes/User/Footer.vue";
import GeneralTags from "./../../mixins/gtm.js";

export default {
  name: "UserSingleRequest",
  components: {
    Footer
  },
  data() {
    return {
      requestId: this.$route.params.id,
      request: {},
      token: localStorage.getItem("token"),
      base: "",
      vendorId: this.$route.params.vendorId,
      starNumber: 1,
      description: ""
    };
  },
  methods: {
    formatPrice(value) {
      let val = value;
      val = parseInt(val);
      return val.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
    },
    review() {
      const url =
        this.base + "review/create/" + this.vendorId + "?token=" + this.token;
      let loader = this.$loading.show({
        backgroundColor: "#000000",
        zIndex: 99999
      });

      this.$http({
        url: url,
        method: "POST",
        data: {
          rating: this.starNumber,
          description: this.description
        }
      })
        .then(res => {
          console.log(res);
          loader.hide();
          this.$swal
            .fire({
              title: "Vendor Rated",
              text: "Thanks for your review!",
              type: "success"
            })
            .then(() => {
              this.$router.go(-1);
            })
            .catch(err => {
              console.log(err);
              loader.hide();
            });
          // this.$router.go(-1);
        })
        .catch(err => {
          console.log(err);
          loader.hide();
        });
    },
    hoverEffect: function(i) {
      for (let j = 1; j <= i; j++) {
        $(".star-" + j).addClass("hover-color");
      }
      if (i < this.starNumber) {
        for (let a = i + 1; a <= this.starNumber; a++) {
          $(".star-" + a).removeClass("click-color");
        }
      }
    },
    removeColor: function(n) {
      for (let i = 0; i <= 5; i++) {
        $(".star-" + i).removeClass("hover-color");
      }
    },
    starClicked: function(n) {
      this.starNumber = n;
      for (let i = 0; i <= 5; i++) {
        $(".star-" + i).removeClass("click-color");
      }
      for (let i = 0; i <= this.starNumber; i++) {
        $(".star-" + i).addClass("click-color");
      }
    }
  },
  created() {
    jQuery($);
  },
  mounted() {
    GeneralTags();

    this.base = this.$store.state.base_url;
  }
};
</script>
<style scoped>
.fake-dropdown {
  max-height: 200px;
  overflow: auto;
}
.single-page-header {
  content: none !important;
}
.single-page-header:before,
.single-page-header:after {
  content: none !important;
}

.bg-none {
  background: none !important;
}

.pointer {
  cursor: pointer;
}

.rating-star {
  cursor: pointer;
  font-size: 25px;
}

.rating-star:hover {
  color: orange;
  transition: all 0.5s;
  animation: mymove 0.4s;
}

.hover-color {
  color: orange;
}

.click-color {
  color: orange;
}

@keyframes mymove {
  0% {
    /* opacity: 0; */
    transform: scale(1.3, 1.3);
  }
  100% {
    /* opacity: 1; */
    transform: scale(1, 1);
  }
}
</style>

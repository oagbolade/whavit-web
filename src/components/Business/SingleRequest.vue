<template>
  <div class="dashboard-content-container" data-simplebar>
    <div class="dashboard-content-inner">
      <!-- Dashboard Headline -->
      <div class="dashboard-headline">
        <h3>Booking Request</h3>

        <!-- Breadcrumbs -->
        <nav id="breadcrumbs" class="dark">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Dashboard</a>
            </li>
            <li>Request</li>
          </ul>
        </nav>
      </div>

      <!-- Row -->
      <div class="row" v-if="loaded">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <span class="small">
                Actions
              </span>
              <div class="job-overview">
                <div class="job-overview-inner">
                  <!-- <router-link :to="'/user/dashboard/request/assign/'+requestId" v-if="request.vendor < 1">
                      <button class="btn mx-2 btn-secondary btn-sm">Assign a vendor</button>
                  </router-link> -->
                  
                  <button @click.prevent="cancelRequest()" type="button" class="btn mx-2 btn-danger btn-md">Cancel Request</button>
                  <!-- <button class="btn mx-2 btn-danger btn-sm">Delete Request</button> -->

                  <router-link :to="'/business/dashboard/request/reschedule/'+requestId" v-if="request.paid">
                    <button class="btn mx-2 btn-primary btn-md">Reschedule Cleaning</button>
                  </router-link>
                  
                  <router-link :to="'/business/dashboard/request/tasks/'+requestId" v-if="request.paid && request.start_date == getDate() && request.status == 'accepted'" >
                    <button class="btn mx-2 btn-primary btn-md">Review Cleaning</button>
                  </router-link>

                  <router-link :to="'/business/dashboard/request/payment/'+requestId" v-if="!request.paid && request.status == 'accepted'">
                    <button class="btn mx-2 btn-primary btn-md">Pay For Your Cleaning Schedule </button>
                  </router-link>

                  <button class="btn text-white btn-sm float-right btn-success small" v-if="request.status == 'accepted'">
                    WhavPro Is Ready
                  </button>
                  <button class="btn text-white btn-sm float-right btn-warning small" v-if="request.status == 'pending'">
                    Pending
                  </button>
                  <button class="btn text-white btn-sm float-right btn-danger small" v-if="request.status == 'rejected'">
                    Vendor Rejected
                  </button>
                  <button class="btn text-white btn-sm float-right btn-danger small" v-if="request.status == 'cancelled'">
                    Cancelled
                  </button>
                  
                  <p v-if="!request.paid && request.status == 'accepted'">
                    <font class="text-warning icon-line-awesome-warning"></font> 
                    <small class="text-warning">
                      Payment not confirmed for the next cleaning schedule, your assigned vendor would not be present if you don't pay for the booking schedule
                    </small>
                  </p>
                </div> 
              </div>

            </div>
          </div>
          <div class="row">
            <!-- Content -->
            <div class="col-xl-12 col-lg-12 content-right-offset">
              <div class="single-page-section">
                <div class="job-overview mt-2">
                  <div class="job-overview-headline">
                    <span v-if="request.products.length>0">
                      {{ request.products[0].name }}
                    </span>
                    <div class="lead float-right">&#8358; {{ formatPrice(request.net_price) }}</div>
                    
                  </div>
                  <div class="job-overview-inner">
                      <div class="row mt-3">
                        <div class="col-md-4">
                          <h5>Areas to be cleaned</h5>
                          <!-- <ul class="list-2"> -->
                            <p v-for="(area,index) in request.products.area" :key="index">{{ index + 1 }}. {{area.title}}</p>
                          <!-- </ul> -->
                        </div>
                        <div class="col-md-4">
                          <h5>Extra Services</h5>
                          <!-- <ul class="list-"> -->
                            <p v-for="(extra,index) in request.extra" :key="index">{{ index + 1 }}. {{extra.title}}</p>
                          <!-- </ul> -->
                        </div>
                        <div class="col-md-4">
                          <h5>Other Services</h5>
                          <!-- <ul class="list-2"> -->
                            <p v-for="(service,index) in request.service" :key="index">{{ index + 1 }}. {{service.title}}</p>
                          <!-- </ul> -->
                        </div>
                      </div>
                  </div>
                </div>
              </div>
              <div class="single-page-section">
                <div class="job-overview">
                  <div class="job-overview-headline">Request Summary</div>
                  <div class="job-overview-inner">
                    <ul>
                      <li>
                        <i class="icon-material-outline-location-on"></i>
                        <span>Location</span>
                        <h5>{{ request.address }}</h5>
                      </li>
                      <li>
                        <i class="icon-material-outline-business-center"></i>
                        <span>Number of rooms</span>
                        <h5>{{ request.no_of_rooms }}</h5>
                      </li>
                      <li>
                        <i class="icon-material-outline-local-atm"></i>
                        <span>Price</span>
                        <h5>&#8358; {{ formatPrice(request.net_price) }}</h5>
                      </li>
                      <li>
                        <i class="icon-material-outline-access-time"></i>
                        <span>Cleaning starts</span>
                        <h5>{{ request.start_date }}</h5>
                      </li>
                      <li>
                        <i class="icon-material-outline-access-time"></i>
                        <span>Time</span>
                        <h5>{{ request.time }}</h5>
                      </li>
                      <li>
                        <i class="icon-material-outline-history"></i>
                        <span>Schedule</span>
                        <h5>{{ request.schedule }}</h5>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="single-page-section table-responsive">
                <div class="job-overview ">
                  <div class="job-overview-headline">Assigned Vendor</div>
                  <div class="job-overview-inner">
                    <ul>
                      <li v-for="(vendor,index) in request.vendor" :key="index">
                        <i class="icon-feather-user"></i>
                        <span>
                          {{ vendor.first_name }}
                          {{ vendor.last_name }}
                          <span
                            class="float-right icon-material-outline-star fa-lg"
                            style="line-height:1.6;color:orange"
                          ></span>
                          <span class="float-right p-1" :id="vendor.id"> 
                            {{ getRating(vendor) }}
                          </span>

                          <!-- <button @click.prevent="unassignVendor(vendor)" class="btn btn-danger float-right btn-sm-px-2">  Unassign Vendor</button> -->
                        </span>
                        <h6 v-if="request.status == 'completed'" class="text-muted">Enjoying my cleaning service?</h6>
                        <div class="row mt-1" v-if="request.status == 'completed'">
                          <div class="col-6">
                            <button class="btn btn-secondary btn-block" @click.prevent="openTip(vendor)">
                              Tip me
                              <b class="icon-line-awesome-money"></b>
                            </button>
                          </div>
                          <div class="col-6">
                            <button class="btn btn-secondary btn-block" @click.prevent="openRate(vendor)">
                              Rate me
                              <b class="fa fa-star"></b>
                            </button>
                          </div>
                          <div class="col-4"></div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="single-page-section d-none" >
                <h3 class="margin-bottom-30">Location</h3>
                <p>{{ request.location }}</p>
                <div id="single-job-map-container">
                  <div
                    id="singleListingMap" 
                    data-latitude="51.507717"
                    data-longitude="-0.131095"
                    data-map-icon="im im-icon-Hamburger"
                  ></div>
                  <a href="#" id="streetView">Street View</a>
                </div>
              </div>
            </div>

            <!-- Sidebar -->
            <div class="col-xl-4 col-lg-4 d-none">
              <div class="sidebar-container">
                Actions
                <ul class="list-group">
                  <!-- <li class="list-group-item px-0 bg-none border-0">
                    <button class="btn btn-block btn-secondary btn-sm">Request complete</button>
                  </li> -->
                  <li class="list-group-item px-0 bg-none border-0" v-if="request.vendor < 1">
                    <router-link :to="'/business/dashboard/request/assign/'+requestId">
                      <button class="btn btn-block btn-secondary btn-sm">Assign a vendor</button>
                    </router-link>
                  </li>
                  <li class="list-group-item px-0 bg-none border-0">
                    <button class="btn btn-block btn-secondary btn-sm">Cancel Request</button>
                  </li>
                  <li class="list-group-item px-0 bg-none border-0">
                    <button class="btn btn-block btn-danger btn-sm">Delete Request</button>
                  </li>
                </ul>
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
  name: "BusinessSingleRequest",
  components : {
    Footer
  },
  data() {
    return {
      requestId: this.$route.params.id,
      request: {},
      base: "",
      token: localStorage.getItem("token"),
      loaded: false,
      vendors: [],
      newVendors: [],
      testVendors: [],
      tip: 3
    };
  },
  methods: {
    getDate(){
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = today.getFullYear();

      today = yyyy + '-' + mm + '-' + dd;

      return today;
    },
    formatPrice(value) {
      let val = value;
      val = parseInt(val);
      return val.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
    },
    cancelRequest(){
      this.$swal({
        type: "info",
        text: "Are you sure you want to cancel this booking?",
        confirmButtonText: "Yes"
      }).then(result => {
        if (result.value) {
          const loader = this.$loading.show({
            backgroundColor: "#000000",
            zIndex: 99999
          });

          

          const url =
            this.base + "booking/" + this.requestId + "/update/cancel" + "?token=" + this.token;
          this.$http({
            url: url,
            method: "PUT"
          })
            .then(res => {
              console.log(res);
              this.request = res.data.data;
              loader.hide();
              this.$swal.fire({
                type: "success",
                text: "Booking has been cancelled successfully"
              });
            })
            .catch(err => {
              console.log(err);
              loader.hide();
            });
        }
      });
    },
    getRating(vendor){

      const url =  this.base + 'review/rating/'+vendor.id +'?token='+this.token
      this.$http({ url: url }).then(res => {
          console.log(res);
          vendor.rating = res.data.data        
          $('#'+vendor.id).text(res.data.data)
      }).catch(err => {
          vendor.rating = 0
      })
      
    },
    openTip(vendor) {
      this.$router.push('/business/dashboard/tip/'+vendor.id)
    },
    openRate(vendor) {
      this.$router.push('/business/dashboard/review/'+vendor.id)
    },
    unassignVendor(vendor) {
      const id = vendor.id
      this.$swal({
        type :  'info',
        text: 'Are you sure you want to unassign vendor?',
        confirmButtonText : 'Yes',
        
      }).then(result => {
        if(result.value){
          // /{bookingId}/update/vendor/remove/{id}
          const loader = this.$loading.show({
            backgroundColor: "#000000",
            zIndex: 99999
          });

          const url = this.base + 'booking/' + this.requestId + '/update/vendor/remove/'+id+'?token='+this.token
          this.$http({
            url: url,
            method : 'PUT'
          }).then(res=>{
            this.request = res.data.data
            loader.hide()
            this.$swal.fire({
              type: 'success',
              text : 'Vendor Removed'
            })
          }).catch(err=>{
            console.log(err)
            loader.hide()
          })
        }
      })
    },
    assignVendors() {
      let ids = "";

      if (this.newVendors.length > 1) {
        for (let index = 0; index < this.newVendors.length; index++) {
          ids = ids + this.newVendors[index].id + ",";
        }
        ids = ids.substring(0, ids.length - 1);
      } else {
        ids = this.newVendors[0].id;
        // return this.assignSingleVendor(ids);
      }

      // console.log(ids)
      // return
      const loader = this.$loading.show({
        backgroundColor: "#000000",
        zIndex: 99999
      });

      const url =
        this.base +
        "booking/" +
        this.requestId +
        "/update/vendor/add/assign/many?token=" +
        this.token;
      this.$http({
        url: url,
        method: "PUT",
        data: {
          ids: ids
        }
      })
        .then(res => {
          console.log(res);
          this.request = res.data.data;
          loader.hide();
          this.$swal.fire({
            type: "success",
            text: "Vendors assigned"
          });
          this.newVendors = [];
        })
        .catch(err => {
          this.$swal.fire({
            type: "error",
            title: "error Occured"
          });
          loader.hide();
        });
    },
    unassignVendor(vendor) {
      const id = vendor.id;
      this.$swal({
        type: "info",
        text: "Are you sure you want to unassign vendor?",
        confirmButtonText: "Yes"
      }).then(result => {
        if (result.value) {
          // /{bookingId}/update/vendor/remove/{id}
          const loader = this.$loading.show({
            backgroundColor: "#000000",
            zIndex: 99999
          });

          const url =
            this.base +
            "booking/" +
            this.requestId +
            "/update/vendor/remove/" +
            id +
            "?token=" +
            this.token;
          this.$http({
            url: url,
            method: "PUT"
          })
            .then(res => {
              console.log(res);
              this.request = res.data.data;
              loader.hide();
              this.$swal.fire({
                type: "success",
                text: "Vendor Removed"
              });
            })
            .catch(err => {
              console.log(err);
              loader.hide();
            });
        }
      });
    }
  },
  created() {
    jQuery($);
 
  },
mounted() {
    GeneralTags();
    this.base = this.$store.state.base_url;
    const url =
      this.base + "booking/view/" + this.requestId + "?token=" + this.token;

    const loader = this.$loading.show({
      backgroundColor: "#000000",
      zIndex: 99999
    });
    this.$http({
      url: url
    })
      .then(res => {
        console.log(res);
        this.request = res.data.data;
       
        this.loaded = true;
        loader.hide();
      })
      .catch(err => {
        loader.hide();
      });
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
</style>

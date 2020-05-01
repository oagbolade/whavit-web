<template>
  <div class="dashboard-content-container" data-simplebar>
    <div class="dashboard-content-inner">
      <!-- Dashboard Headline -->
      <div class="dashboard-headline">
        <h3>Tip</h3>

        <!-- Breadcrumbs -->
        <nav id="breadcrumbs" class="dark">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Vendor</a>
            </li>
            <li>Tip</li>
          </ul>
        </nav>
      </div>

      <!-- Row -->
      <div class="row">
        <div class="container">
          <div class="row bg-white">
            <div class="col-md-6">
              <div class="card">
                <div class="card-body">
                  <p class="lead">We encourage Tips for our WhavPro's. If they have done a great job, feel free to tip.</p>
                  <label for="amount" class="text-muted">Enter tip in Naira (&#8358;)</label>
                  <input type="number" id="amount" class="form-control border" step="100" v-model="amount" />
                  <button class="btn btn-primary btn-sm" @click.prevent="sendTip()">Send Tip</button>
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

import Footer from '../../components/Includes/User/Footer.vue'
import GeneralTags from "./../../mixins/gtm.js";

export default {
  name: "UserSingleRequest",
  components : {
    Footer
  },
  data() {
    return {
      vendorId: this.$route.params.vendorId,
      request: {},
      base: "",
      amount: 100,
      token : localStorage.getItem('token')
    };
  },
  methods: {
    formatPrice(value) {
      let val = value;
      val = parseInt(val);
      return val.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
    },
    sendTip(){
      if(this.amount < 100){
        this.$toastr.error('Come on! start tipping above 100 NGN','',4000)

        return
      }
      const url = `${this.base}wallet/tip/${this.vendorId}?token=${this.token}`
      
      let loader = this.$loading.show({
        backgroundColor: "#ffffff",
        zIndex: 99999,
        opacity: 1
      });

      this.$http({
        url : url,
        method : 'PUT',
        data: {
          amount : this.amount
        }
      }).then(res=>{
        console.log(res);
        loader.hide()
        this.$swal.fire({
          type : 'success',
          text : 'Tip sent to vendor!'
        }).then(res=>{
          console.log(res);
          this.$router.go(-1)
        })
      }).catch(err=>{
        loader.hide()
        this.$toastr.error(`Unable to tip, reason: ${err.response.data.message}`,'',5000)
      })
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
</style>

<template>
  <div class="dashboard-content-container" data-simplebar>
    <div class="dashboard-content-inner">
      <div class="dashboard-headline">
        <h3>Payment</h3>
        <nav id="breadcrumbs" class="dark">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Request</a>
            </li>
            <li>Payment</li>
          </ul>
        </nav>
      </div>

      <!-- Row -->
      <div class="row" v-if="loaded">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-12 mb-5">
                <h1>You are to pay &#8358;{{ formatPrice(request.net_price) }} for your cleaning service</h1>
            </div>
            <div class="col-xl-12">
              <h5 class="my-2">Select Payment method:</h5>

              <div class="card border mb-0">
                <div class="card-header">
                  <div class="float-left">
                    <div class="radio">
                      <input id="radio-1" name="radio" type="radio" v-model="method" value="wallet" />
                      <label for="radio-1" class="pl-4">
                        <span class="radio-label mr-2"></span> Wallet
                      </label>
                    </div>
                  </div>
                  <div class="float-right mt-1">
                    <span>Balance:</span>
                    &#8358; {{ formatPrice(wallet.balance) }}
                  </div>
                </div>
              </div>
              <div class="card border my-1">
                <div class="card-header">
                  <div class="float-left">
                    <div class="radio">
                      <input id="radio-2" name="radio" type="radio" v-model="method" value="card" />
                      <label for="radio-2" class="pl-4">
                        <span class="radio-label mr-2"></span> Pay With Card
                      </label>
                    </div>
                  </div>
                  <div class="float-right mt-1">
                    <span></span>
                  </div>
                </div>
              </div>
              <button
                class="btn btn-primary mt-4"
                @click.prevent="paymentFirstStep()"
              >Pay &#8358; {{ formatPrice(request.net_price) }}</button>
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
  name: "RequestPayment",
  components : {
    Footer
  },
  data() {
    return {
      base: "",
      token: localStorage.getItem("token"),
      requestId: this.$route.params.id,
      loaded: false,
      request: [],
      wallet: [],
      method: null,
      callback: "",
      booking_id: ""
    };
  },
  methods: {
    formatPrice(value) {
      let val = value;
      val = parseFloat(val);
      return val.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
    },
    getRequest() {
      const url =
        this.base + "booking/view/" + this.requestId + "?token=" + this.token;

      const loader = this.$loading.show({
        backgroundColor: "#ffffff",
        zIndex: 99999,
        opacity : 1
      });
      
      this.$http({
        url: url
      })
        .then(res => {
            console.log(res);
          this.loaded = true;
          loader.hide();

          this.request = res.data.data;
          this.booking_id = res.data.data.id;

          if (this.request.paid) {
            this.$router.push('/user/dashboard/request/'+this.requestId);
          
          }
        })
        .catch(err => {
          loader.hide();
        });
    },
    getWallet() {
      let loader = this.$loading.show({
        backgroundColor: "#000000",
        zIndex: 99999
      });

      this.$http({
        url: this.base + "wallet/view?token=" + this.token
      })
        .then(res => {
          console.log(res);
          let wallet = res.data.data;

          if (wallet != null) {
            this.wallet = wallet;
          }
          loader.hide();
        })
        .catch(err => {
          loader.hide();
        });
    },
    payWithWallet() {
      let loader = this.$loading.show({
        backgroundColor: "#000000",
        opacity: 0.5
      });

      const url =
        this.base +
        "booking/" +
        this.requestId +
        "/debit_from_wallet?token=" +
        this.token;

      this.$http({
        url: url
      })
        .then(res => {
          console.log(res);
          let request = res.data.data;
          this.bookingRequest = request;
          loader.hide();
          this.$swal
            .fire({
              type: "success",
              text: "Payment Successful, booking price deducted from wallet"
            })
            .then(res => {
              console.log(res);
              loader.hide();
              this.$router.push('/user/dashboard/request/'+this.requestId);
            });
        })
        .catch(err => {
          loader.hide();
console.log("ERROR");
          var errorSingle = err.response.data.message;

          if (!errorSingle) {
            this.$toastr.error(errorSingle, "", 4000);
          }
        });
    },
    payWithCard() {
      let loader = this.$loading.show({
        backgroundColor: "#000000",
        opacity: 0.5
      });

      const url = this.base + "payment/initialize?token=" + this.token;

      const data = {
        callback_url: this.callback,
        amount: this.request.net_price,
        booking_id: this.booking_id
      };

      this.$http({
        url: url,
        data: data,
        method: "POST"
      })
        .then(res => {
          console.log(res);
          loader.hide();
          window.location = res.data.data.authorization_url;
        })
        .catch(err => {
          loader.hide();
          console.log(err);
        });
    },
    paymentFirstStep() {
      let loader = this.$loading.show({
        backgroundColor: "#000000",
        opacity: 0.5
      });
      if (this.method == "wallet") {
        if (this.wallet.balance < this.request.net_price) {
          loader.hide();
          this.$toastr.error(
            "Insufficient wallet balance,try paying with card",
            "",
            4000
          );
        } else {
          return this.payWithWallet();
        }
      } else if (this.method == "card") {
        return this.payWithCard();
      } else {
        return this.$toastr.error("Please select a payment method", "", 4000);
      }
    },
    check() {
      console.log(this.request.net_price);
    },
    verifyPayment() {
      const urlParams = new URLSearchParams(window.location.search);
      var reference = urlParams.get("reference");

      if (reference != null) {
        let verifyUrl =
          this.base +
          "booking/pay_with_card?reference=" +
          reference +
          "&booking_id=" +
          this.requestId +
          "&token=" +
          this.token;

        console.log(verifyUrl);

        let loader2 = this.$loading.show({
          backgroundColor: "#000000",
          zIndex: 99999
        });

        this.$http({
          url: verifyUrl
        })
          .then(res => {
            console.log(res);
            console.log(res.data);
            var uri = window.location.toString();
            if (uri.indexOf("?") > 0) {
              var clean_uri = uri.substring(0, uri.indexOf("?"));
              window.history.replaceState({}, document.title, clean_uri);
            }

            

            this.$swal
              .fire({
                type: "success",
                text: "Booking payment confirmed!"
              })
              .then(res => {
                console.log(res);
                this.$router.push('/user/dashboard/request/'+this.requestId);
              });
              loader2.hide();
          })
          .catch(err => {
            console.log(err);
            loader2.hide();
          });
      }
    }
  },
  created() {
    jQuery($);
 
  },
mounted() {
    GeneralTags();

    this.base = this.$store.state.base_url;
    this.getRequest();
    this.getWallet();
    this.verifyPayment();

    // Redirect to success page
    if (process.env.NODE_ENV == "development") {
      this.callback = "http://localhost:8080/booking/success";
    } else {
      this.callback = "https://whavit.com/booking/success";
      this.requestId;
    }

    // if (process.env.NODE_ENV == "development") {
    //   this.callback = process.env.VUE_APP_BASE_URL + "/user/dashboard/request/payment/" +
    //     this.requestId;
    // } else {
    //   this.callback =
    //     process.env.VUE_APP_BASE_URL + "user/dashboard/request/payment/" +
    //     this.requestId;
    // }

    this.getRequest();
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

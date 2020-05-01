<template>
  <div class="dashboard-content-container" data-simplebar>
    <div class="dashboard-content-inner">
      <!-- Dashboard Headline -->
      <div class="dashboard-headline">
        <h3>Wallet</h3>

        <!-- Breadcrumbs -->
        <nav id="breadcrumbs" class="dark">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Dashboard</a>
            </li>
            <li>Wallet</li>
          </ul>
        </nav>
      </div>

      <!-- Row -->
      <div class="row">
        <!-- Dashboard Box -->
        <div class="col-xl-12">
          <div class="dashboard-box margin-top-0">
            <!-- Headline -->
            <div class="headline" style="height:90px;">
              <div class="clear-fix">
                <h3 class="float-left">
                  <i class="icon-material-outline-money"></i> Wallet Balance
                </h3>
                <h3 class="float-right">&#8358; {{formatPrice(wallet.balance)}}</h3>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-12">
          <div id="test1" class="dashboard-box">
            <!-- Headline -->
            <div class="headline">
              <h3>
                <i class="icon-material-outline-lock"></i> Withdraw
              </h3>
            </div>

            <div class="content with-padding">
              <div class="row">
                <div class="col-md-4">
                  <div class="submit-field">
                    <h5>Amount</h5>
                    <input type="number" step="1000" min="0" class="with-border" v-model="amount" />
                  </div>
                </div>

                <div class="col-md-8">
                  <div class="submit-field">
                    <h5>Select Account</h5>
                    <select name id v-model="card_id">
                      <option
                        :value="card.id"
                        v-for="card in cards"
                        :key="card.id"
                      >{{ card.card_name }} **** **** **** {{ card.last_4 }}</option>
                    </select>
                  </div>
                </div>
              </div>
              <a
                @click.prevent="pay()"
                class="button ripple-effect big text-white"
              >Pay &#8358; {{ formatPrice(amount) }}</a>
            </div>
          </div>
        </div>
        <div class="col-xl-12">
          <!-- <a
            @click.prevent="pay()"
            class="button ripple-effect big margin-top-30 text-white"
          >Pay &#8358; {{ formatPrice(amount) }}</a>-->
        </div>
        <!-- Dashboard Box -->
        <div class="col-xl-12">
          <hr />
          <div id="test1" class="dashboard-box">
            <!-- Headline -->
            <div class="headline">
              <h3>
                <i class="icon-feather-credit-card"></i> My Banks
              </h3>
            </div>

            <div class="content with-padding">
              <div class="row">
                <div class="col-xl-12">
                  <div class="card w-100" v-for="card in cards" :key="card.id">
                    <div class="card-header">
                      <div class="row">
                        <div class="col-4">{{ card.card_name }}</div>
                        <div class="col-4">**** **** **** {{ card.last_4 }}</div>
                        <div class="col-4">
                          <span class="text-uppercase">{{ card.card_type }}</span>

                          <button class="btn float-right" @click.prevent="deleteCard(card)">
                            <span class="fa fa-trash text-danger"></span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <router-link
                to="/vendor/dashboard/add-bank"
                class="button ripple-effect big text-white"
              >Add Account</router-link>
            </div>
          </div>
        </div>

        <!-- Button -->
        <div class="col-xl-12">
          <a
            @click.prevent="addCard()"
            class="button ripple-effect big margin-top-30 text-white d-none"
          >Add Account</a>
        </div>
      </div>

      <div class="row">
        <div class="col-xl-12">

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
  name: "VendorPayout",
  components : {
    Footer
  },
  data() {
    return {
      wallet: {
        balance: 0
      },
      token: localStorage.getItem("token"),
      user: "",
      base: "",
      cards: [],
      card_id: "",
      amount: 10000,
      callback: ""
    };
  },
  methods: {
    deleteCard(card) {
      const url =
        this.base + "user/card/delete/" + card.id + "?token+" + this.token;
      this.$http({
        url: url,
        method: "DELETE"
      })
        .then(res => {
console.log(res);
          this.cards.splice(this.cards.indexOf(card), 1);
        })
        .catch(err => {
          console.log(err);
        });
    },
    pay() {
      let card_id = this.card_id;
      let amount = this.amount;

      let loader = this.$loading.show({
        backgroundColor: "#000000",
        zIndex: 99999
      });
      const chargeUrl = this.base + "payment/charge_card?token=" + this.token;

      const body = {
        card_id: card_id,
        amount: amount
      };
      this.$http({
        url: chargeUrl,
        data: body,
        method: "POST"
      })
        .then(res => {
console.log(res);
          if (res.data.message == "success") {
            this.wallet.balance += parseInt(amount);
            this.$swal.fire({
              type: "success",
              title: "success",
              text: "Payment successful"
            });
          } else {
            this.$swal.fire({
              type: "error",
              title: "Charge Failed",
              text: res.data.reason
            });
          }
          loader.hide();
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
    },
    addBank() {
      let loader = this.$loading.show({
        backgroundColor: "#ffffff",
        zIndex: 99999,
        opacity: 1
      });
      const url = `${this.base}vendor/bank/add?token=${this.token}`;

      const data = {
        
      };

      this.$http({
        url: url,
        data: data,
        method: "POST"
      })
        .then(res => {
console.log(res);
          loader.hide();
          console.log(res);
          window.location = res.data.data.authorization_url;
        })
        .catch(err => {
          loader.hide();
          console.log(err);
        });
    },
    formatPrice(value) {
      let val = value;
      val = parseFloat(val);
      // let val = (value / 1).toFixed(2).replace(".", ",");
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
    this.base = this.$store.state.base_url;

    if (process.env.NODE_ENV == "development") {
      this.callback = "http://localhost:8080/user/dashboard/wallet";
    } else {
      this.callback = "https://whavit.com/user/dashboard/wallet";
    }

    let loader = this.$loading.show({
      backgroundColor: "#000000",
      zIndex: 99999
    });

    this.$http({
      url: base + "wallet/view?token=" + this.token
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

    const urlParams = new URLSearchParams(window.location.search);
    var reference = urlParams.get("reference");

    if (reference != null) {
      let verifyUrl =
        this.base +
        "payment/verify?reference=" +
        reference +
        "&token=" +
        this.token;

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

          loader2.hide();
          this.cards.push(res.data.card);
          this.$swal.fire({
            type: "success",
            text: "Card added successfully"
          });
        })
        .catch(err => {
          console.log(err);
          loader2.hide();
        });
    }

    let loader3 = this.$loading.show({
      backgroundColor: "#000000",
      zIndex: 99999
    });

    const cardUrl = this.base + "user/card/all?token=" + this.token;
    console.log(cardUrl);
    this.$http({
      url: cardUrl
    })
      .then(res => {
console.log(res);
        console.log(res.data);
        this.cards = res.data;
        loader3.hide();
      })
      .catch(err => {
        loader3.hide();
      });
  }
};
</script>
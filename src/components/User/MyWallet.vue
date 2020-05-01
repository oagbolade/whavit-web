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
                <h3 class="float-right">
                  &#8358; {{ formatPrice(wallet.balance) }}
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-12">
          <div id="test1" class="dashboard-box">
            <!-- Headline -->
            <div class="headline">
              <h3><i class="icon-material-outline-lock"></i> Add to wallet</h3>
            </div>

            <div class="content with-padding">
              <div class="row">
                <div class="col-md-4">
                  <div class="submit-field">
                    <h5>Amount</h5>
                    <input
                      type="number"
                      step="1000"
                      min="0"
                      class="with-border"
                      v-model="amount"
                    />
                  </div>
                </div>

                <div class="col-md-8">
                  <div class="submit-field">
                    <h5>
                      Select card
                      <small class="float-right" v-if="cards.length == 0"
                        >You have no card! Add One
                        <a href="#add-card">here</a></small
                      >
                    </h5>
                    <select name id v-model="card_id">
                      <option
                        :value="card.id"
                        v-for="card in cards"
                        :key="card.id"
                        >{{ card.card_name }} **** **** ****
                        {{ card.last_4 }}</option
                      >
                    </select>
                  </div>
                </div>
              </div>
              <a @click.prevent="pay()" class="button ripple-effect text-white"
                >Pay &#8358; {{ formatPrice(amount) }}</a
              >
            </div>
          </div>
        </div>
        <div class="col-xl-12"></div>
        <!-- Dashboard Box -->
        <div class="col-xl-12" id="add-card">
          <hr />
          <div id="test1" class="dashboard-box">
            <!-- Headline -->
            <div class="headline">
              <h3><i class="icon-feather-credit-card"></i> My saved cards</h3>
            </div>

            <div class="content with-padding">
              <div class="row">
                <div class="col-xl-12">
                  <div class="card w-100" v-for="card in cards" :key="card.id">
                    <div class="card-header">
                      <div class="row">
                        <div class="col-4">{{ card.card_name }}</div>
                        <div class="col-4">
                          **** **** **** {{ card.last_4 }}
                        </div>
                        <div class="col-4">
                          <span class="text-uppercase">{{
                            card.card_type
                          }}</span>

                          <button
                            class="btn float-right"
                            @click.prevent="deleteCard(card)"
                          >
                            <span class="fa fa-trash text-danger"></span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a
                @click.prevent="addCard()"
                class="button ripple-effect big margin-top-30 text-white"
                >Add Card</a
              >
            </div>
          </div>
        </div>

        <!-- Button -->
        <div class="col-xl-12"></div>
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
  name: "UserWallet",
  components: {
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
      this.$swal({
        type: "info",
        text: "Are you sure you want to delete this card?",
        confirmButtonText: "Yes"
      }).then(result => {
        if (result.value) {
          // console.log(card);
          const url =
            this.base + "user/card/delete/" + card.id + "?token=" + this.token;
          this.$http({
            url: url,
            method: "DELETE"
          })
          .then(res => {
            let cardData = res.data.data;
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
              event: "deletedCreditCard",
              accountType: "Whavit For User", //replace with type of account and leave blank where not present
              cardType: cardData.card_type //fill this with the card type that was deleted
            });
              this.cards.splice(this.cards.indexOf(card), 1);
            })
            .catch(err => {
              console.log(err);
            });  
        }
        })
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
          if (res.data.message == "success") {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
              event: "fundedaccount",
              accountType: "Whavit For Home", //replace with type of account and leave blank where not present
              amount: amount, //fill this with the amount funded by the user
              currency: "NGN" //leave this as it is
            });
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
          console.log("Logged Output: pay -> errorObj", errorObj)

          for (const key in errorObj) {
            if (errorObj.hasOwnProperty(key)) {
              this.$swal.fire({
                text: errorObj[key],
                type: "error"
              });
              window.dataLayer = window.dataLayer || [];
              window.dataLayer.push({
                event: "errorFundingWallet",
                accountType: "Whavit For User", //replace with type of account the user signed up for
                amount: null, //fill this with the amount funded by the user
                currency: "NGN", //leave this as it is
                errorMessage: errorObj[key] //fill this with the error message generated
              });
            }
          }
        });
    },
    addCard() {
      let loader = this.$loading.show({
        backgroundColor: "#000000",
        zIndex: 99999
      });
      const url = this.base + "payment/initialize?token=" + this.token;

      const data = {
        callback_url: this.callback
      };

      this.$http({
        url: url,
        data: data,
        method: "POST"
      })
        .then(res => {
          loader.hide();
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
        let wallet = res.data.data;

        if (wallet != null) {
          this.wallet = wallet;
        }
        loader.hide();
      })
      .catch(err => {
        console.log(err);
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
          var uri = window.location.toString();
          if (uri.indexOf("?") > 0) {
            var clean_uri = uri.substring(0, uri.indexOf("?"));
            window.history.replaceState({}, document.title, clean_uri);
          }

          loader2.hide();
          let cardData = res.data.card;
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            event: "creditCardSuccessAdded",
            accountType: "Whavit For Home", //replace with type of account and leave blank where not present
            cardType: cardData.card_type //fill this with the card type that was deleted
          });
          this.cards.push(res.data.card);
          this.$swal.fire({
            type: "success",
            text: "Card added successfully"
          });
        })
        .catch(err => {
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            event: "creditCardFailed",
            accountType: "Whavit For Home", //replace with type of account and leave blank where not present
            cardType: null, //fill this with the card type that was deleted
            errormessage: err //fill in the generated error message here
          });
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
        this.cards = res.data;
        loader3.hide();
      })
      .catch(err => {
        loader3.hide();
      });
  }
};
</script>

<style scoped>
.card {
  margin-bottom: 20px;
}
</style>
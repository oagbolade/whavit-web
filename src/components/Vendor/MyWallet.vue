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
            <div class="headline">
              <h3>
                <i class="icon-material-outline-lock"></i> Withdraw Fund <small class="float-right">You can only request fund withdrawals on Mondays</small>  
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
                    <h5>Select Account <small class="float-right" v-if="accounts.length == 0">You have no bank account! Add One <a href="#add-bank">here</a></small></h5>
                    <select name id v-model="account_id">
                      <option
                        
                        v-for="account in accounts"
                        :key="account.id"
                      >{{ account.bank_name }} - {{ account.account_name }}</option>
                    </select>
                  </div>
                </div>
              </div>
              <a
                @click.prevent="withdraw()"
                class="button ripple-effect big text-white"
              >Withdraw &#8358;{{ formatPrice(amount) }}</a>
            </div>
          </div>
        </div>
        <div class="col-xl-12">
        </div>
        <!-- Dashboard Box -->
        <div class="col-xl-12" id="add-bank">
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
                  <div class="card w-100" v-for="account in accounts" :key="account.id">
                    <div class="card-header">
                      <div class="row">
                        <div class="col-4">{{ account.account_name }}</div>
                        <div class="col-4">{{ account.bank_name }}</div>
                        <div class="col-4">
                          <!-- <span class="text-uppercase">{{ card.card_type }}</span> -->

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <router-link
                to="/vendor/dashboard/add-bank"
                class="button ripple-effect big text-white mt-3"
              >Add Account</router-link>
            </div>
          </div>
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
  name: "VendorWallet",
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
      amount: 5000,
      accounts : [],
      account_id: null
    };
  },
  methods: {
    withdraw() {
      if(this.wallet.balance < this.amount){
          this.$swal.fire({
            type: 'error',
            text: 'Insufficient funds. You cannot withdraw at this time'
          });
      } 

      const url = `${this.base}vendor/bank/disburse?token=${this.token}`;

      const data = {
        bank_id: account_id,
        amount: this.amount
      };

      this.$http({
        url: url,
        data: data,
        method: "POST"
      })
        .then(res => {
          console.log(res);
          this.$swal.fire({
            type: 'success',
            text: 'Your withdrawal is being processed. You will receive your fund in less than 1 hour.'
          });
          loader.hide();
        })
        .catch(err => {
          this.$swal.fire({
            type: 'error',
            text: 'There was an error with your withdrawal. Please try again later.'
          });
          loader.hide();
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
          // console.log(res);
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
    },
    getAccounts(){
      const url = `${this.base}vendor/bank/all?token=${this.token}`

      this.$http({
        url: url,
        method: 'GET'
      }).then(res=>{
        this.accounts = res.data.data
      }).catch(err=>{
        console.log(err);
      })
    }
  },
  created() {
    jQuery($);
 
  },
mounted() {
    GeneralTags();

    let loader = this.$loading.show({
      backgroundColor: "#000000",
      zIndex: 99999
    });

    this.user = this.$cookies.get("user");
    const base = this.$store.state.base_url;
    this.base = this.$store.state.base_url;
    this.getAccounts()

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
      console.log(err);
      loader.hide();
    });
  }
    
};
</script>
<template>
  <div class="dashboard-content-container" data-simplebar>
    <div class="dashboard-content-inner">
      <!-- Dashboard Headline -->
      <div class="dashboard-headline">
        <h3>Add Bank</h3>

        <!-- Breadcrumbs -->
        <nav id="breadcrumbs" class="dark">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Vendor</a>
            </li>
            <li>Add Bank</li>
          </ul>
        </nav>
      </div>

      <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-7">
              <div class="card">
                <div class="card-body">
                  <h4>Enter Account details below</h4>
                  <form @submit.prevent="addAccount()">
                    <div class="form-group d-none">
                      <label for="account_name" class="text-muted small">Account name</label>
                      <input
                        type="text"
                        class="form-control border"
                        placeholder="Account Name"
                        id="account_name"
                        v-model="account_name"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <label for="account_number" class="text-muted small">Account number</label>
                      <input
                        type="number"
                        id="account_number"
                        class="form-control border"
                        placeholder="account number"
                        v-model="account_number"
                        required
                        v-on:change="checkInputs()"
                      />
                    </div>
                    <div class="form-group">
                      <label for="bank" class="text-muted small">Select Bank</label>
                      <select name id="bank" class="form-control" v-model="bank" required         v-on:change="checkInputs()">
                        <option
                          v-for="(bank,index) in banks"
                          :key="index"
                          :value="bank"
                        >{{ bank.name }}</option>
                      </select>
                    </div>
                    <div class="form-group text-center">
                    <span class="fa fa-spin d-none fa-spinner margin-auto" id="verifyingLoad"></span>
                    </div>
                    <div class="from-group" v-if="verified">
                      <p >
                        <strong>Account name  : </strong>
                        <span>
                          {{ account_name }}
                        </span>
                      </p>
                    </div>
                    <div class="text-center">
                      <button @click.prevent="addAccount()" v-if="verified" class="btn btn-primary btn-md">Add bank</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

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
      request: {},
      token: localStorage.getItem("token"),
      base: "",
      bank: "",
      account_number: "",
      account_name: "",
      banks: [],
      verified: false,
    };
  },
  methods: {
    formatPrice(value) {
      let val = value;
      val = parseFloat(val);
      return val.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
    },
    checkInputs(){
      if(this.account_number == null || this.account_number == ''){
        return
      }else{
        if(this.account_number.length < 10){
          this.$swal.fire({
            type: 'info',
            text: 'Account number should be 10 digits'
          });
        return
        }
      }

      if(this.bank == null || this.bank == ''){
        return
      }

      return this.  verifyAccount()
    },
    verifyAccount(){
      const url = 
      `https://api.paystack.co/bank/resolve?account_number=${this.account_number}&bank_code=${this.bank.code}`

      $('#verifyingLoad').removeClass('d-none')
      this.$http({
        url: url,
        method : 'GET',
        headers : {
          Authorization : "Bearer sk_test_29c4272069a5a0836247d4636b4248953cfeedc0"
        }
      }).then(res=>{
         
          this.verified = true
          this.account_name = res.data.data.account_name
          $('#verifyingLoad').addClass('d-none')

      }).catch(err=>{
        $('#verifyingLoad').addClass('d-none')
          this.$swal.fire({
            type: 'error',
            text: 'err.response.data.message'
          });
          this.verified = false
          // $('#verifyingLoad').hide()
      })

    },
    loadBanks() {
      this.$http({
        url: "https://api.paystack.co/bank"
      })
        .then(res => {
          this.banks = res.data.data;
        })
        .catch(err => {
          this.$swal.fire({
            type: 'error',
            text: 'Unable to load banks, reload page'
          });
        });
    },
    addAccount() {
      if (this.account_number.length != 10) {
        this.$swal.fire({
            type: 'error',
            text: 'Bank account number must be 10 digits'
        });
        return;
      }

      const loader = this.$loading.show({
        backgroundColor: "#000000",
        opacity: 0.5
      });

      const url = `${this.base}vendor/bank/add?token=${this.token}`;
      const data = {
        account_name: this.account_name,
        account_number: this.account_number,
        bank_name: this.bank.name,
        bank_code: this.bank.code
      };

      this.$http({
        url: url,
        data: data,
        method: "POST"
      })
        .then(res => {
          loader.hide();
          this.$swal.fire({
            type: 'success',
            text: 'Bank details added'
          }).then(res=>{
            this.$router.go(-1)
          })

          this.account_number = null
          this.bank = null
        })
        .catch(err => {
          this.$swal.fire({
            type: 'error',
            text: 'Error Ocurred,check your connection and try again'
          });
        });
    }
  },
  created() {
    jQuery($);
 
  },
mounted() {
    GeneralTags();

    this.base = this.$store.state.base_url;
    this.loadBanks();
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

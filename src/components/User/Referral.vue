<template>
  <div class="dashboard-content-container" data-simplebar>
    <div class="dashboard-content-inner">
      <!-- Dashboard Headline -->
      <div class="dashboard-headline">
        <h3>Refer Friends</h3>

        <!-- Breadcrumbs -->
        <nav id="breadcrumbs" class="dark">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Dashboard</a>
            </li>
            <li>Invite Friends</li>
          </ul>
        </nav>
      </div>
      <b-alert class="col-xl-6" show variant="primary">
        Give N2000, get N2000. Share your promo code with friends and family and
        their first cleaning order is discounted by N2000. Once they use your
        code, you'll get N2000 discount on your next cleaning too.
      </b-alert>
      <!-- Row -->
      <div class="row">
        <div class="col-xl-6">
          <form action>
            <div class="submit-field">
              <h5>Email</h5>
              <input type="text" class="form-control" value v-model="email" />
            </div>
            <div class="col-xl-12">
              <button
                @click.prevent="SendEmailReferal"
                class="btn btn-primary btn-lg ripple-effect big text-white"
              >
                Send
              </button>
            </div>
          </form>
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
  name: "UserReferal",
  components: {
    Footer
  },
  data() {
    return {
      base_url: "",
      email: "",
      token: localStorage.getItem("token"),
      referal_code: ""
    };
  },
  methods: {
    SendEmailReferal() {
      if (this.email === "") {
        this.$swal.fire({
          text: "please fill email",
          type: "error"
        });
      }

      let loader = this.$loading.show({
        backgroundColor: "#000000",
        opacity: 0.5
      });
      const url = `${this.base_url}user/send-refferal/${this.email}?token=${this.token}`;

      this.$http({
        url: url,
        method: "POST"
      })
        .then(res => {
          console.log(res);
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            event: "refferedFriendViaEmail",
            accountType: "Whavit For Business" //replace with type of account the user signed up for
          });
          this.$swal.fire({
            text: "referal link sent",
            type: "success"
          });
          loader.hide();
        })
        .catch(err => {
          console.log(err);
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            event: "errorRefferingFriendViaEmail",
            accountType: "Whavit For Business", //replace with type of account the user signed up for
            errorMessage: err //fill this with the error message generated
          });
          loader.hide();
        });
    }
  },
  created() {
    jQuery($);
  },
  mounted() {
    GeneralTags();

    this.user = this.$cookies.get("user");
    this.base_url = this.$store.state.base_url;
  }
};
</script>

<style scoped>
.content-page {
  margin-top: 0px !important;
  padding-top: 60px !important;
}
body {
  background: white !important;
}
</style>

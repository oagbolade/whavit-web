<template>
  <div class="dashboard-content-container" data-simplebar>
    <div class="dashboard-content-inner">
      <!-- Dashboard Headline -->
      <div class="dashboard-headline">
        <h3>Settings</h3>

        <!-- Breadcrumbs -->
        <nav id="breadcrumbs" class="dark">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Dashboard</a>
            </li>
            <li>Settings</li>
          </ul>
        </nav>
      </div>

      <!-- Row -->
      <div class="row">
        <!-- Dashboard Box -->
        <div class="col-xl-12">
          <div class="dashboard-box margin-top-0">
            <!-- Headline -->
            <div class="headline">
              <h3>
                <i class="icon-material-outline-account-circle"></i> My Account
              </h3>
            </div>

            <div class="content with-padding padding-bottom-0">
              <div class="row">
                <div class="col-auto">
                  <div class="avatar-wrapper" data-tippy-placement="bottom" title="Change Avatar">
                    <img class="profile-pic" src="images/user-avatar-placeholder.png" alt>
                    <div class="upload-button"></div>
                    <input class="file-upload" type="file" accept="image/*">
                  </div>
                </div>

                <div class="col">
                  <div class="row">
                    <div class="col-xl-6">
                      <div class="submit-field">
                        <h5>First Name</h5>
                        <input type="text" class="with-border" value v-model="user.first_name">
                      </div>
                    </div>

                    <div class="col-xl-6">
                      <div class="submit-field">
                        <h5>Last Name</h5>
                        <input type="text" class="with-border" value v-model="user.last_name">
                      </div>
                    </div>

                    <div class="col-xl-6">
                      <div class="submit-field">
                        <h5>Email</h5>
                        <input
                          type="text"
                          class="with-border"
                          value="tom@example.com"
                          readonly
                          v-model="user.email"
                        >
                      </div>
                    </div>

                    <div class="col-xl-6">
                      <div class="submit-field">
                        <h5>Phone number</h5>
                        <input
                          type="number"
                          class="with-border"
                          value="tom@example.com"
                          v-model="user.mobile_number"
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-12">
          <a
            @click.prevent="updateProfile()"
            class="button ripple-effect big margin-top-30 text-white"
          >Save Changes</a>
        </div>

        <!-- Dashboard Box -->
        <div class="col-xl-12">
          <div id="test1" class="dashboard-box">
            <!-- Headline -->
            <div class="headline">
              <h3>
                <i class="icon-material-outline-lock"></i> Password & Security
              </h3>
            </div>

            <div class="content with-padding">
              <div class="row">
                <div class="col-xl-4">
                  <div class="submit-field">
                    <h5>Current Password</h5>
                    <input 
                    type="password" class="with-border"
                    v-model="oldPassword"
                    
                    >
                  </div>
                </div>

                <div class="col-xl-4">
                  <div class="submit-field">
                    <h5>New Password</h5>
                    <input type="password" class="with-border"
                      v-model="newPassword"
                    >
                  </div>
                </div>

                <div class="col-xl-4">
                  <div class="submit-field">
                    <h5>Repeat New Password</h5>
                    <input 
                      type="password"
                      class="with-border"
                      v-model="newPassword2"
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Button -->
        <div class="col-xl-12">
          <a
            @click.prevent="changePassword()"
            class="button ripple-effect big margin-top-30 text-white"
          >Change Password</a>
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
  name: "AdminOneSettings",
  components : {
    Footer
  },
  data() {
    return {
      base_url: "",
      token: localStorage.getItem("token"),
      vendors: {},
      user: {},
      vendorCount: "",
      bookingRequests: {},
      oldPassword: "",
      newPassword: "",
      newPassword2 : ""
    };
  },
  methods: {
    changePassword() {
      let loader = this.$loading.show({
        backgroundColor: '#000000',
        zIndex : 9999,

      })

      let oldpass = this.oldPassword;
      let newPass = this.newPassword;
      if(this.newPassword != this.newPassword2){
        this.$toastr.error('Password repeat doesn\'t match',"",4000) 
        loader.hide()
        return
      } 
      let url = this.base_url + "profile/change-password?token=" + this.token;
      this.$http({
        url: url,
        data: {
          old_password: oldpass,
          password: newPass
        },
        method: "POST"
      })
        .then(() => {
          this.$swal.fire({
            text: "Password updated",
            type: "success"
          });
          this.oldPassword = "";
          this.newPassword = "";
          this.newPassword2 = "";
          loader.hide()
        })
        .catch(err => {
          loader.hide()
          
          var errorObj = err.response.data.errors;
          var errorSingle = err.response.data.error
          if(!errorSingle) this.$toastr.error(errorSingle,'',4000)

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
    updateProfile() {
      let url = this.base_url + "profile/update-profile?token=" + this.token;
      this.$http({
        url: url,
        data: {
          first_name: this.user.first_name,
          last_name: this.user.last_name,
          mobile_number: this.user.mobile_number
        },
        method: "PUT"
      })
        .then(res => {
console.log(res);
          console.log(res);
          this.$store
            .dispatch("profileUpdate", this.user)
            .then(() => {
              this.$swal.fire({
                text: "Profile updated",
                type: "success"
              });
            })
            .catch(() => {});
        })
        .catch(err => {
          console.log(err);
          this.$swal.fire({
            text: "Error occured",
            type: "error"
          });
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

<style scoped >
.content-page {
  margin-top: 0px !important;
  padding-top: 60px !important;
}
body {
  background: white !important;
}
</style>
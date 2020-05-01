<template>
  <div class="dashboard-content-container" data-simplebar>
    <div class="dashboard-content-inner">
      <!-- Dashboard Headline -->
      <div class="dashboard-headline">
        <h3>Reschedule Cleaning</h3>

        <!-- Breadcrumbs -->
        <nav id="breadcrumbs" class="dark">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Request</a>
            </li>
            <li>Cleaning</li>
          </ul>
        </nav>
      </div>

      <!-- Row -->
      <div class="row" v-if="loaded">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-10">
              <p class="lead text-center mb-5">
                Please reschedule cleaning, if the day chosen for your cleaning is not convenient.
              </p>
              <div class="alert alert-danger" v-if="$v.$error">Please check your inputs and try again</div>
              <div class="row mb-2">
                <form @submit.prevent="reschedule">
                  <div class="col-lg-12">
                  <div class="form-group form-row">
                    
                    <!-- <div class="col-md-6">
                      <label for="time" class="text-muted">Time</label>
                      <vue-timepicker name="time" v-model="time" class="w-time" format="hh:mm A"></vue-timepicker>
                    </div> -->
                    <div class="required col-md-6">
                                    <label for="time" class="text-muted">Time</label>
                                    <!-- <input type="time" class="border" id="time" v-model="time" /> -->
                                    <!-- <vue-timepicker name="time" v-model="time" class="w-time" :format="YourFormat"></vue-timepicker> -->
                                    <select name="time" v-model="time">
                                      <option>8:00 AM</option>
                                      <option>9:00 AM</option>
                                      <option>10:00 AM</option>
                                      <option>11:00 AM</option>
                                      <option>12:00 PM</option>
                                      <option>1:00 PM</option>
                                      <option>2:00 PM</option>
                                      <option>3:00 PM</option>
                                      <option>4:00 PM</option>
                                    </select>
                                  </div>
                    <div class="required col-md-6">
                        <label for="date" class="text-muted">Set Date</label>
                        <!-- <input type="text" readonly="readonly" class="border" id="start_date" v-model="start_date" /> -->
                        <datepicker name="start_date" :format="customFormatter" v-model="start_date" :disabled-dates="state.disabledDates"></datepicker>
                    </div>
                  </div>
                  <div class="form-group form-row">
                    <div class="col-md-6">
                      <label for="location" class="text-muted">Select Location <small class="float-right mr-lg-2">or location closest to you</small></label>
                      
                      <select name id="location" class="border" v-model="location">
                        <option
                          v-for="(location,index) in locations"
                          :key="index"
                          :value="location"
                        >{{location.name}}</option>
                      </select>
                    </div>
                    <div class="col-md-6">
                      <label for="address" class="text-muted">Address</label>
                      <input
                        type="text"
                        class="border"
                        id="address"
                        placeholder="House address"
                        v-model="address"
                      />
                    </div>
                    <div class="col-md-6">
                      <label for="schedule" class="text-muted">Booking Schedule</label>
                      <select name id="schedule" class="border" v-model="schedule">
                        <option value="once">One Time cleaning</option>
                        <option value="weekly">Weekly cleaning</option>
                        <option value="bi-weekly">Bi-Weekly Cleaning</option>
                        <option value="monthly">Monthly Cleaning</option>
                        <option value="bi-monthly">Bi-Monthly Cleaning</option>
                      </select>
                    </div>
                  </div>
                </div>
                </form>
              </div>
              <div v-if="$v.$error">
                <span class="text-danger text-bold mt-1" v-if="!$v.schedule.required">* Schedule must be selected</span>
                <span class="text-danger text-bold mt-1" v-if="!$v.time.required">* Time for cleaning is required</span>
                <span class="text-danger text-bold mt-1" v-if="!$v.start_date.required">* Set date is required</span>
                <span class="text-danger text-bold mt-1" v-if="!$v.location.required">* Please select your location</span>
                <span class="text-danger text-bold mt-1" v-if="!$v.address.required">* Address is required</span>
              </div>
              <center>
                <button @click.prevent="reschedule()" class="btn-primary btn btn-md mx-auto mt-3">Reschedule Cleaning</button>
              </center>
              
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
import Datepicker from 'vuejs-datepicker';
import moment from 'moment';
import VueTimepicker from 'vue2-timepicker';
import 'vue2-timepicker/dist/VueTimepicker.css';
import { required, minLength, email, sameAs } from "vuelidate/lib/validators";
import GeneralTags from "./../../mixins/gtm.js";

var state = {
    disabledDates: {
      to: new Date(moment().add(1,'days').format('YYYY,MM,D'))
    }
}

export default {
  name: "BusinessRequestRescedule",
  components : {
    Footer,
    Datepicker,
    VueTimepicker
  },
  data() {
    return {
      base: "",
      token: localStorage.getItem("token"),
      requestId: this.$route.params.id,
      state,
      schedule: null,
      time: "14:00",
      start_date: null,
      address: null,
      location: null,
      locations: [],
      loaded: false,
      request: []
    };
  },
  validations: {
    schedule: { required },
    time: { required },
    start_date: { required },
    address: { required },
    location: { required }
  },
  methods: {
    formatDate(){
      console.log(this.start_date.format("YYYY/MM/DD"));
    },
    getRequest() {
        // this.$router.push('/user/dashboard/request/'+this.requestI);
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
    },
    getLocations() {
      const url = this.base + "location/all";
      this.$http({
        url: url
      })
        .then(res => {
          console.log(res);
          this.locations = res.data;
          // console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    reschedule() {
      const loader = this.$loading.show({
        backgroundColor: "#000000",
        zIndex: 99999
      });

      this.$v.$touch();
      if(this.$v.$error) return
      
      let startDate = this.customFormatter(this.start_date);
      
      let booking = {
        schedule: this.schedule,
        time: this.time,
        start_date: startDate,
        address: this.address,
        location: this.location.name,
      };

      const url = `${this.base}booking/${this.requestId}/update/reschedule?token=${this.token}`;
      console.log(booking);
      this.$http({
        url: url,
        data: booking,
        method: "PUT"
      })
      .then(res => {
        console.log(res);
        this.booking = res.data.data;
        this.$swal.fire({
            text: 'Rescheduling Successfull',
            type: "success"
        });
        loader.hide();
        this.$router.push("/business/dashboard/request/"+this.requestId);
      })
      .catch(err => {
        var errorObj = err.response.data.errors;

        for (const key in errorObj) {
          if (errorObj.hasOwnProperty(key)) {
            this.$swal.fire({
                text: errorObj[key],
                type: "error"
              });
          }
        }
        loader.hide();
        // Throw error for booking creation
      });

    },
    customFormatter(date) {
      return moment(date).format('MM/D/YYYY');
    }
  },
  created() {
    jQuery($);
 
  },
  mounted() {
    GeneralTags();

    this.base = this.$store.state.base_url;
    this.getRequest();
    this.getLocations();

    $('.vue__time-picker input').removeClass('display-time');
  }
};
</script>


<template>
  <div class="dashboard-content-container" data-simplebar>
    <div class="dashboard-content-inner">
      <!-- Dashboard Headline -->
      <div class="dashboard-headline">
        <h3>Cleaning in progress</h3>

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
              <p
                class="lead"
              >Tick each of the cleaning tasks when done as the cleaning vendor finishes them. Confirm all has been done to complete a schedule batch.</p>
              <ul class="list-group">
                <li class="list-group-item" v-for="(task,index) in request.task" :key="index">
                  <h5 class="float-left">{{ task.task }}</h5>
                  <div class="checkbox float-right">
                    <input
                      type="checkbox"
                      :id="'chekcbox2'+task.id"
                      @change.prevent="markAsDone(task)"
                    />
                    <label :for="'chekcbox2'+task.id" v-if="task.status != true">
                      <span class="checkbox-icon"></span>
                    </label>
                    <span class="fa fa-check text-blue fa-lg mr-1 mt-1" v-else></span>
                  </div>
                </li>
              </ul>
              <center>
                <button @click.prevent="confirmAll()" class="btn-primary btn mx-auto mt-3">Confirm all!</button>
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

import Footer from '../../components/Includes/User/Footer.vue'
import GeneralTags from "./../../mixins/gtm.js";

export default {
  name: "RequestTask",
  components : {
    Footer
  },
  data() {
    return {
      base: "",
      token: localStorage.getItem("token"),
      requestId: this.$route.params.id,
      loaded: false,
      request: []
    };
  },
  methods: {
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
    markAsDone(task) {
      const url =
        this.base + "booking/task/" + task.id + "/done?token=" + this.token;

    //   const loader = this.$loading.show({
    //     backgroundColor: "#000000",
    //     zIndex: 99999
    //   });

      this.$http({
        url: url
      })
        .then(res => {
console.log(res);
        //   loader.hide();
          task.status = true;
          task = res.data.data;
          // this.$toastr.success("Task Checked as done", "", 4000);
        })
        .catch(err => {
          console.log(err);
        //   loader.hide();
          this.$toastr.error(
            "Unknown Error Occured, try again. If problem persists, contact whavit support",
            "",
            4000
          );
        });
    },
    confirmAll() {
      const url =
        this.base +
        "booking/" +
        this.request.id +
        "/task/all/done?token=" +
        this.token;
      const loader = this.$loading.show({
        backgroundColor: "#000000",
        zIndex: 99999
      });

      this.$http({
        url: url
      })
        .then(res => {
          console.log(res);
          loader.hide();
          this.$swal.fire({
            type: "success",
            text:
              "Booking Schedule Complete. You can rate the cleaning service by our WhavPro"
          })
          
          this.$router.push('/user/dashboard/request/rate/'+this.requestId);
        })
        .catch(err => {
          loader.hide();
          
          var errorSingle = err.response.data.message;

          if (!!errorSingle) {
            this.$toastr.error(errorSingle, "", 4000);
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

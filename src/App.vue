<template>
  <div :id="[auth && (role == 'user' || role == 'vendor' || role == 'business') ? 'wrapper' : '']">
    <!-- <error-boundary> -->
      <div id="app">
        <nprogress-container></nprogress-container>
        <Navbar v-if="!auth"></Navbar>
        <UserNavbar v-if="auth && (role == 'user' || role == 'vendor' || role == 'business')"></UserNavbar>
        <router-view></router-view>
      </div>
    <!-- </error-boundary> -->
  </div>
</template>

<script>
import Navbar from "./components/Includes/Main/Navbar.vue";
import UserNavbar from "./components/Includes/User/Navbar.vue";

import NprogressContainer from "vue-nprogress/src/NprogressContainer";

export default {
  name: "app",
  data() {
    return {
      isLoggedIn: false
    };
  },
  components: {
    Navbar,
    UserNavbar,
    NprogressContainer
  },
  mounted() {
    
  },
  created() {
    this.$http.interceptors.response.use(undefined, err => {
      if (err.response == null) {
        this.$swal
          .fire({
            title: "Error",
            text:
              "It seems error occured loading request, kindly check your network and reload",
            confirmButtonText: "Reload",
            type: "error"
          })
          .then(result => {
            if (result.value) {
              location.reload();
            }
          });
      } else {
        if (err.response.status === 401) {
          if (err.response.data.error === "Incorrect credentials") {
            this.$swal.fire({
              type: "error",
              text: "Incorrect Credentials"
            });

            return err;
          } else if (
            err.response.data.message === "Old password is incorrect"
          ) {
            this.$swal.fire({
              type: "error",
              text: "Old Password is incorrect"
            });

            return err;
          } else {
            this.$store
              .dispatch("logout")
              .then(() => {
                this.$router.push("/login");
              })
              .catch();
          }
        }
        throw err;
      }
    });

    const token = localStorage.getItem("token");
    const user = this.$cookies.get("user");

    // console.log($token);

    if(user != null){
      if(user.status == false){
        this.$router.push('/account/suspended')
      }

    }

  },
  computed: {
    auth() {
      return this.$store.getters.isLoggedIn;
    },
    role() {
      return this.$store.getters.user.type;
    },
    currentUrl() {
      return this.$router.currentRoute.fullPath;
    }
  }
};
</script>
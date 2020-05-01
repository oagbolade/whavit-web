/* eslint-disable */
import Vue from 'vue'

import VueCookies from 'vue-cookies'
import Vuex from 'vuex'

import axios from 'axios'
import NProgress from 'nprogress'
import SweetAlert from 'vue-sweetalert2'
import toastr from 'vue-toasted';
import VueGoodWizard from 'vue-good-wizard';
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/vue-good-wizard.css'

import Loading from 'vue-loading-overlay'
import Vuelidate from 'vuelidate'
import VuelidateErrorExtractor, { templates } from "vuelidate-error-extractor";
import 'vue-loading-overlay/dist/vue-loading.css';
import router from './router'

import App from './App.vue'
import * as Sentry from '@sentry/browser';
import * as Integrations from '@sentry/integrations';

Vue.use(VueCookies)
Vue.use(Vuex)
Vue.use(NProgress)
Vue.use(SweetAlert)
Vue.use(Loading)
Vue.use(Vuelidate)
Vue.use(toastr, {
  duration: 1000
})
Vue.use(VueGoodWizard)
Vue.use(BootstrapVue)

const messages = {
  required: "Field {attribute} is required",
  email: "Field {attribute} is not a proper email address"
};

Vue.use(VuelidateErrorExtractor, {
  messages,
  template: templates.singleErrorExtractor.foundation6,
  attributes: {
    name: 'Name',
    email: 'Email',
    text: 'Text'
  }
});

Vue.component('formWrapper', templates.FormWrapper);
Vue.component('formSummary', templates.multiErrorExtractor.foundation6);
Vue.component('error-boundary', require('./components/Error/ErrorBoundary').default);

NProgress.configure({showSpinner:false });

window.axiosConfig = {
  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
}

Vue.prototype.$http = axios
Window.axios = axios
Vue.prototype.$cookies = VueCookies
// set default config
VueCookies.config('1m')
// set global cookie
VueCookies.set('theme','default');
VueCookies.set('hover-time','1s');
//NProgress

const store = new Vuex.Store({
  state: {
    base_url: 'http://localhost:8000/api/',
    // base_url: 'https://api.whavit.com/api/',
    status: '',
    token: localStorage.getItem('token') || '',
    // token: $cookies.get('token'),
    user: $cookies.get('user'),
    bookingRequest : []
  },
  mutations: {
    requestCreated(state, request){
      state.bookingRequest = request
    },
    requestUpdated(state, request){
      state.bookingRequest = request
    },
    requestDone(state,request){
      state.bookingRequest = request
    },
    auth_request(state) {
      state.status = 'loading'
    },
    auth_success(state, token, user) {
      state.status = 'success'
      state.token = token
      state.user = user
    },
    auth_error(state) {
      state.status = 'error'
    },
    logout(state) {
      state.status = ''
      state.token = ''
    },
    userDetails(state,user){
      state.user = user
    },
    profileUpdate(state,user){
      state.user = user
    },
    vendorUpdate(state,user){
      state.user = user
    }
  },
  actions: {
    login({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request')
        let url = store.state.base_url + 'auth/authenticate'
        axios({ url: url, data: user, method: 'POST' })
          .then(resp => {
            const token = resp.data.token
            const user = resp.data.user
            // $cookies.set('token',token)
            $cookies.set('user',user)
            localStorage.setItem('token', token)
            // axios.defaults.headers.common['Authorization'] = token
            commit('auth_success', token, user)
            resolve(resp)
          })
          .catch(err => {
            commit('auth_error')
            // $cookies.remove('token')
            $cookies.remove('user')
            localStorage.removeItem('token')
            reject(err)
          })
      })
    },

    register({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request')
        let url = store.state.base_url + 'auth/register'
        axios({ url: url, data: user, method: 'POST' })
          .then(resp => {
            const token = resp.data.token
            const user = resp.data.user
            
            // $cookies.set('token',token)
            $cookies.set('user', user)
            localStorage.setItem('token', token)
            // axios.defaults.headers.common['Authorization'] = token
            commit('auth_success', token, user)
            resolve(resp)
          })
          .catch(err => {
            commit('auth_error', err)
            // $cookies.remove('token')
            $cookies.remove('user')
            localStorage.removeItem('token')
            reject(err)
          })
      })
    },
    logout({ commit }) {
      return new Promise((resolve, reject) => {
        commit('logout')
        localStorage.removeItem('token')
        $cookies.remove('user')
        // delete axios.defaults.headers.common['Authorization']
        resolve()
      })
    },
    profileUpdate({commit},user){
      return new Promise((resolve,reject) =>{
        commit('profileUpdate',user)
        $cookies.set('user',user)

        resolve()
      })
    },
    vendorUpdate({commit},user){
      return new Promise((resolve,reject) =>{
        commit('profileUpdate',user)

        $cookies.set('user',user)
        resolve()
      })
    },
    requestCreated({commit}, data){
      return new Promise((resolve,reject) =>{
        commit('requestCreated',data)

        resolve()
      })
    }
  },

  getters : {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
    user: state => state.user
  }
})


router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login') 
  } else {
    next() 
  }
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})
router.afterEach(() => {
  NProgress.done(true)
})

Sentry.init({
  dsn: 'https://3a4e614668924b43beccc4bd38855fbb@sentry.io/1552241',
  integrations: [new Integrations.Vue({Vue, attachProps: true})],
});

Vue.config.errorHandler = (err, vm, info) => {
  // err: error trace
  // vm: component in which error occured
  // info: Vue specific error information such as lifecycle hooks, events etc.
  
  // TODO: Perform any custom logic or log to server

};

window.onerror = function(message, source, lineno, colno, error) {
  // TODO: write any custom logic or logs the error
};

Vue.config.productionTip = false
Vue.config.devtools = true;

new Vue({
  render: h => h(App),
  mounted: () => document.dispatchEvent(new Event("x-app-rendered")),
  router,
  store
}).$mount('#app')

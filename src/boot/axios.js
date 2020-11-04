import Vue from "vue";
import axios from "axios";

// axios.defaults.baseURL = "http://localhost:8000"
axios.defaults.baseURL = process.env.API;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


Vue.prototype.$axios = axios;

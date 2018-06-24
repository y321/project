import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import App from './App.vue';
import login from './components/page/Login.vue'
import Header from './components/Header.vue'
import register from './components/page/Register.vue'



Vue.use(ElementUI);

window.axios = require('axios');
 window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
 Vue.prototype.$http = window.axios

 Vue.use(axios);
 new Vue({
    el: '#app',
    render: h => h(login)
  });
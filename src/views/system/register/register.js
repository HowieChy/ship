import Vue from 'vue';

import App from './registerApp.vue';

import {until, reg } from "assets/js/until";

Vue.prototype.until = new until();
Vue.prototype.reg = new reg();

require('./css/index.less');

import { msg,loading } from 'hero'

Vue.use(msg)


new Vue({
  render: h => h(App)
}).$mount('#container')
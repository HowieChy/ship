require ('assets/css/init.less');
require ('assets/css/base.less');
require ('assets/css/index.less');


import "babel-polyfill";// 解决 IE11 Promise对象未定义

import axios from 'axios';

// import { AlertPlugin,LoadingPlugin  } from 'vux'

import Vue from 'vue';
import 'assets/js/Ios'
import 'assets/js/WebViewJavascriptBridge'
// import { until } from "./until";

// Vue.use(AlertPlugin); //全局注册alert事件，注册之后，不需要每个页面都import alert
// Vue.use(LoadingPlugin ); //全局注册Loading事件


axios.defaults.withCredentials=true;
Vue.prototype.axios = axios;


import YDUI from 'vue-ydui';
import 'vue-ydui/dist/ydui.rem.css';
Vue.use(YDUI);

// Vue.prototype.until = new until();

import C from './conf'; 	//全局的站点配置文件
import M from './common'; 	//全局的共用事件
import './iconfont'  //字体库

import './iconfont2' //阿里图标

import vueFilter from './vueFilter';  	//全局过滤器


import FastClick from 'fastclick';
FastClick.attach(document.body);

export default{
	M,C
}


M.loSave('login1',false);
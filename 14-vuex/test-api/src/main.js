import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'

import store from './store'


import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')

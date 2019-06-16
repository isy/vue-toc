import Vue from 'vue'
import App from './App.vue'

import VueToc from '../../src/components/Toc'

Vue.component('vue-toc', VueToc)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

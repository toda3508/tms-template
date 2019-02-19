import Vue from 'vue';
import App from './App.vue';
{{#if_eq isRouter true}}
import router from './router';
import { sync } from 'vuex-router-sync'
{{/if_eq}}
{{#if_eq isVuex true}}
import store from '@/vuex/store'
{{/if_eq}}

import ElementUI from 'element-ui'
import { TMS_COMPONENT } from 'tms-component'
import './assets/reset.css'
import "tms-component/src/assets/style/theme/custom/default-theme.css";
// import "tms-component-test/src/assets/style/theme/custom/default-theme.css";
import 'tms-component/src/assets/style/index.scss'
// import 'tms-component-test/src/assets/style/index.scss'
import "./assets/index.scss"





Vue.config.productionTip = false;

Vue.use(ElementUI, {
  size: 'small'
});

Vue.use(TMS_COMPONENT)

new Vue({
  {{#if_eq isRouter true}}
  router,
  {{/if_eq}}
  {{#if_eq isVuex true}}
  store,
  {{/if_eq}}
  render: (h) => h(App),
}).$mount('#app');



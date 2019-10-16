import Vue from 'vue';
import AntVue from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import App from './App.vue';
import router from './router';
import store from './store';
if (process.env.NODE_ENV === 'development') {
  // tslint:disable-next-line:no-var-requires
  require('../mock');
}

Vue.use(AntVue);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

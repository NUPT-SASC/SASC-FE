// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
// import ElementUI from 'element-ui';
import {
  Button,
  Carousel,
  CarouselItem,
  Menu,
  MenuItem,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Row,
  Col,
} from 'element-ui';
import axios from 'axios';
import Viewer from 'v-viewer';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App';
import router from './router';

Vue.prototype.axios = axios;
Vue.config.productionTip = false;
// Vue.use(ElementUI);
Vue.use(Viewer);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Button);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Dropdown);
Vue.use(DropdownItem);
Vue.use(DropdownMenu);
Vue.use(Row);
Vue.use(Col);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App,
  },
});

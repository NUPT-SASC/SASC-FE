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
  Card,
} from 'element-ui';
import axios from 'axios';
import Viewer from 'v-viewer';
import VueAMap from 'vue-amap';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App';
import router from './router';


Vue.prototype.axios = axios;
Vue.config.productionTip = false;
// Vue.use(ElementUI);
Vue.use(Viewer);
Vue.use(VueAMap);
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
Vue.use(Card);
/* eslint-disable no-new */

VueAMap.initAMapApiLoader({
  key: 'a4faf32ac3568ed73d56b8ad70bec8ee',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4',
});

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App,
  },
});

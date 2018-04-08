import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home';
import Galley from '@/pages/Galley';
import Timeline from '@/pages/Timeline';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/galley',
      name: 'galley',
      component: Galley,
    },
    {
      path: '/timeline',
      name: 'timeline',
      component: Timeline,
    },
  ],
});

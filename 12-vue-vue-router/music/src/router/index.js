import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import HotView from '../views/HotView.vue';
import SearchView from "../views/SearchView.vue";
import HomeCardView from "../views/HomeCardView.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: HomeView,
    meta: { showNav: true },
  },
  {
    path: '/hot',
    component: HotView,
    meta: { showNav: true },
  },
  {
    path: '/search',
    component: SearchView,
    meta: { showNav: true },
  },
  {
    path: '/cardInfo',
    component: HomeCardView,
  },
];

const router = new VueRouter({
  routes
});

export default router;

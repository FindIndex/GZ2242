import Vue from "vue";
import VueRouter from "vue-router";
import HomeNav from "../music/HomeNav.vue";
import RecomView from "../music/RecomView.vue";
import HotView from "../music/HotView.vue";
import SearchView from "../music/SearchView.vue";
import PlayListView from "../music/PlayListView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: HomeNav,
    children: [
      {
        path: "",
        component: RecomView,
      },
      {
        path: "hot",
        component: HotView,
      },
      {
        path: "search",
        component: SearchView,
      },
    ],
  },
  {
    path: "/playlist",
    component: PlayListView,
  },
];

const router = new VueRouter({
  routes,
});

export default router;

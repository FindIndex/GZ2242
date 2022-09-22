import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import SearchView from "../views/SearchView.vue";
import PlayListView from "../views/PlayListView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: HomeView,
    meta: { showNav: true },
  },
  {
    path: "/hot",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/HotView.vue"),
    meta: { showNav: true },
  },
  {
    path: "/search",
    component: SearchView,
    meta: { showNav: true },
  },
  {
    path: "/playlist",
    component: PlayListView,
  },
];

const router = new VueRouter({
  routes,
});

// router.beforeEach((to, from, next) => {
//   console.log("全局的 router.beforeEach", to);
//   next();
// });

export default router;

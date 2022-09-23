import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import UserView from "../views/UserView.vue";
import PostView from "../views/PostView.vue";
import PostListView from "../views/PostListView.vue";
import PostTest from "../views/PostTest.vue";
import PostHome from "../views/PostHome.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/user",
    name: "user",
    component: UserView,
  },
  {
    path: "/post",
    name: "post",
    component: PostListView,
    children: [
      { path: "", component: PostHome },
      { path: "test", component: PostTest },
      { path: ":id", name: "postid", component: PostView },
    ],
  },

  // {
  //   path: "/post",
  //   component: PostListView,
  // },
  // {
  //   path: "/post/:id",
  //   component: PostView,
  // },
  // {
  //   path: "/post/test",
  //   component: PostTest,
  // },
];

const router = new VueRouter({
  routes,
});

export default router;

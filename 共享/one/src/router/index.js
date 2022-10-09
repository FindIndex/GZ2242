import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomepageView.vue'
import FindView from '../views/FindView.vue'
import SerializeView from '../views/SerializeView.vue'
import mineView from '../views/mineView.vue'
// import HomeMount from '../views/HomeMount.vue'
import HomeArticle from '../views/HomeArticle.vue'
import HomeRecommendPage from '../views/HomeRecommendPage.vue'
import FindPicPage from '../views/FindPicPage.vue'
import FindSpicalPage from '../views/FindSpicalPage.vue'
import FindExmplePage from '../views/FindExmplePage.vue'
import SerialList from '../views/SerialList.vue'
// import SeachPage from '../views/SeachPage.vue'
import SearchDelites from '../views/SearchDelites.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { showNav: true },
    // children: [
    //   {
    //     path: "HomeMount",
    //     name: "HomeMount",
    //     component: HomeMount,
    //     // meta: { showNav: false },
    //   }
    // ]
  },
  // {
  //   path: "HomeMount",
  //   name: "HomeMount",
  //   component: HomeMount,
  // },
  {
    path: '/find',
    component: FindView,
    meta: { showNav: true },
  },
  {
    path: '/serialize',
    component: SerializeView,
    meta: { showNav: true, },
    // component: HomeView
  },
  {
    path: '/mine',
    meta: { showNav: true, },
    component: mineView,
    // component: HomeView
  },
  {
    path: '/HomeArticle',
    component: HomeArticle,
    // component: HomeView
  },
  {
    path: '/HomeRecommendPage',
    component: HomeRecommendPage,
  }, {
    path: '/FindPicPage',
    component: FindPicPage,
  },
  {
    path: '/FindSpicalPage',
    component: FindSpicalPage,
  },
  {
    path: '/FindExmplePage',
    component: FindExmplePage
  },
  {
    path: '/SerialList',
    component: SerialList
  }
  // ,{
  //   path:'/SeachPage',
  //   component:SeachPage,
  //   name: SeachPage,
  // }
  , {
    path: '/SearchDelites',
    component: SearchDelites
  }


]

const router = new VueRouter({
  routes
})

export default router

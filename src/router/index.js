import Vue from "vue";
import VueRouter from "vue-router";
import Repositories from "../views/Repositories.vue";
//import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  /*{
    path: "/",
    name: "Home",
    component: Home
  },*/
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/",
    name: "Repositories",
    component: Repositories
  }
];

const router = new VueRouter({
  routes
});

export default router;

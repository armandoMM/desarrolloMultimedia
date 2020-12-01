import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/que-es",
    name: "topicOne",
    component: () => import("../views/topic1.vue"),
  },
  {
    path: "/como-funciona",
    name: "topicTwo",
    component: () => import("../views/topic2.vue"),
  },
  {
    path: "/caracteristicas",
    name: "topicThree",
    component: () => import("../views/topic3.vue"),
  },
  {
    path: "/ventajas",
    name: "topicFour",
    component: () => import("../views/topic4.vue"),
  },
  {
    path: "/desventajas",
    name: "topicFive",
    component: () => import("../views/topic5.vue"),
  },
  {
    path: "/5G-en-mexico",
    name: "topicSix",
    component: () => import("../views/topic6.vue"),
  },
  {
    path: "/telefonos-con-soporte-5G",
    name: "topicSeven",
    component: () => import("../views/topic7.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

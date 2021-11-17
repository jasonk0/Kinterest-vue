import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
// 路由懒加载
const Home = () => import("../views/home/Home.vue");
const Login = () => import("../views/login/Login.vue");
const Profile = () => import("../views/profile/Profile.vue");
const Board = () => import("../views/collection-board/CollectionBoard.vue");
const Details = () => import("../views/details/Details.vue");

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/kin/:kid",
    // path: "/kin",
    name: "Details",
    component: Details,
    props: true,
  },
  {
    path: "/:id/profile",
    name: "Profile",
    props: true,
    component: Profile,
  },
  {
    path: "/:id/:name",
    name: "Board",
    component: Board,
    props: true,
  },
  {
    path: "*",
    redirect: "/",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

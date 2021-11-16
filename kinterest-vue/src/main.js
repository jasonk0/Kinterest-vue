import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueLazyload from "vue-lazyload";

Vue.config.productionTip = false;
Vue.use(VueLazyload, {
  // preLoad: 1.3,
  error: require("@/assets/icon/Error.png"),
  // loading: require("@/assets/icon/Error.png"),
  attempt: 1,
  listenEvents: ["scroll", "resize"],
});
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

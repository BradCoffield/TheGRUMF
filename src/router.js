import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

import Login from "./views/Login.vue";
import Logout from "./views/Logout.vue";

// GRUMF
import ViewSubmissions from "./views/ViewSubmissions.vue";
import AddSubmission from "./views/AddSubmission.vue";
import EditSubmission from "./views/EditSubmission.vue";
import RateSubmission from "./views/RateSubmission.vue";
import FinalDecision from "./views/FinalDecision.vue";
import StockResponses from "./views/StockResponses.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/add-submission",
      name: "add-submission",
      component: AddSubmission,
      meta: {
        protected: false,
      },
    },
    {
      path: "/edit-submission",
      name: "edit-submission",
      component: EditSubmission,
      meta: {
        protected: false,
      },
    },
    {
      path: "/rate-submission",
      name: "rate-submission",
      component: RateSubmission,
      meta: {
        protected: false,
      },
    },
    {
      path: "/final-decision",
      name: "final-decision",
      component: FinalDecision,
      meta: {
        protected: false,
      },
    },
    {
      path: "/view-submissions",
      name: "view-submissions",
      component: ViewSubmissions,
      meta: {
        protected: false,
      },
    },
    {
      path: "/stock-responses",
      name: "stock-responses",
      component: StockResponses,
      meta: {
        protected: false,
      },
    },

    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/logout",
      name: "logout",
      component: Logout,
    },
  ],
});

import Vue from "vue";
import Router from "vue-router";

import LandingPage from "../pages/LandingPage.vue";
import Dashboard from "../pages/Dashboard.vue"

Vue.use(Router);

export default new Router({
    mode:           "history",
    base:           "vue-express",
    fallback:       false,
    scrollBehavior: () => ({ y: 0 }),
    routes:         [
        { path: "/", component: LandingPage },
        { path: "/dashboard", component: Dashboard },
    ],
});

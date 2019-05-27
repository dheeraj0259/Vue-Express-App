import Vue from "vue";
import Router from "vue-router";

import LandingPage from "../pages/LandingPage.vue";

Vue.use(Router);

const BarView = { template: "<div>bar</div>" };

export default new Router({
    mode:           "history",
    base:           "vue-express",
    fallback:       false,
    scrollBehavior: () => ({ y: 0 }),
    routes:         [
        { path: "/", component: LandingPage },
        { path: "/bar", component: BarView },
    ],
});

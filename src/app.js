import Vue     from "vue";
import Vuetify from "vuetify";

import "vuetify/dist/vuetify.min.css";
import "@fortawesome/fontawesome-free/css/all.css";

import App    from "./App.vue";
import router from "./router";
import store  from "./store";

Vue.config.devtools = true;

Vue.use(Vuetify);

/* eslint-disable-next-line no-new */
new Vue({
    router,
    store,
    render: h => h(App),
}).$mount("#app");

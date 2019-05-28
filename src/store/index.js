import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state:     {
        isLoaded: false
    },
    mutations: {
        isLoaded (state, payload) {
            Vue.set(state, 'isLoaded', payload)
          }
    },
    actions:   {
        isLoaded (store, payload) {
            store.commit('isLoaded', payload)
          }
    },
});

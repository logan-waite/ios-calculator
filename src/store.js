import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    display: "0",
    onHold: null,
    operation: null
  },
  actions: {},
  mutations: {},
  getters: {}
});

export default store;

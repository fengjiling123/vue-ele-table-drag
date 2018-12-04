import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";

import actions from "./actions";
import mutations from "./mutations";
import moduleA from "./modules/moduleA";
import moduleB from "./modules/moduleB";

Vue.use(Vuex);

const vuexLocal = new VuexPersist({
  key: "moduleA-0.1",
  modules: ["moduleA"]
});

const store = new Vuex.Store({
  // state: {
  //   count: 1
  // },
  // mutations,
  // actions,
  plugins: [vuexLocal.plugin],
  modules: { moduleA, moduleB }
});

export default store;

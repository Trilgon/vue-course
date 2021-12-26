import { createStore } from "vuex";
import auth from "./modules/auth.module";
import req from "./modules/manager.module";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: { auth, req },
});

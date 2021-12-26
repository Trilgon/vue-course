import axios from "axios";
import store from "../index";

export default {
  namespaced: true,
  state() {
    return {
      req: null,
    };
  },
  mutations: {
    addRequest(state, req) {
      state.req = req;
    },
  },
  actions: {
    async loadEmp() {
      try {
        const login = store.getters["auth/isAuth"];
        return await axios.get("http://localhost:8080/api/empInf", {
          login: login,
        });
      } catch (e) {
        console.log("Load emps, error", e);
      }
    },
  },
};

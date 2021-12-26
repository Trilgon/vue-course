import axios from "axios";

export default {
  namespaced: true,
  state() {
    return {
      login: null,
      position: null,
    };
  },
  mutations: {
    setUser(state, login) {
      state.login = login;
      localStorage.setItem("login", login);
    },
    removeUser(state) {
      state.login = null;
      localStorage.removeItem("login");
      state.position = null;
      localStorage.removeItem("position");
    },
    setPosition(state, position) {
      state.position = position;
      localStorage.setItem("position", position);
    },
  },
  actions: {
    async login({ commit }, payload) {
      try {
        const { data } = await axios.post(
          "http://localhost:8080/api/auth",
          payload
        );
        commit("setUser", data.login);
        commit("setPosition", data.position);
      } catch (e) {
        console.log("Login error", e);
      }
    },
    async logout({getters, commit }) {
      try {
          await axios.get("http://localhost:8080/api/logOut", {login: getters.login})
      } catch (e) {
        console.log("Login error", e);
      }
      commit("removeUser");
    },
  },
  getters: {
    login(state) {
      return state.login;
    },
    position(state) {
      return state.position;
    },
    isAuth(state, getters) {
      return !!getters.login;
    },
  },
};

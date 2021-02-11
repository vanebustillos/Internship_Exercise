import Vue from "vue";
import Vuex from "vuex";

import createPersistedState from "vuex-persistedstate";

import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

Vue.use(Vuex);

const state = {
  users: [
    {
      avatar_url: "https://avatars1.githubusercontent.com/u/9919? s=200&v=4",
      github_url: "https://github.com/github",
      name: "GitHub Repositories",
      nickName: "GitHub"
    }, {
      avatar_url: "https://avatars0.githubusercontent.com/u/1630826? s=200&v=4",
      github_url: "https://github.com/gruntjs",
      name: "GRUNT",
      nickName: "GRUNT.js"
    }
  ]
};

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state,
  actions,
  mutations,
  getters,
  modules: {}
});

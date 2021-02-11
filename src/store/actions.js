"use strict";

export default {
  //User
  createUser({ commit }, userCreated) {
    commit("mutateCreateUser", userCreated);
  },
  updateUser({ commit }, userUpdated) {
    commit("mutateUpdateUser", userUpdated);
  },
  deleteUser({ commit }, userDeleted) {
    commit("mutateDeleteUser", userDeleted);
  }
};
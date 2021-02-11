"use strict";

export default {
  //User
  mutateCreateUser(state, user) {
    state.Users.push(user);
  },
  mutateUpdateUser(state, newUser) {
    const index= state.users.findIndex(
      user => user.name === newUser.name
    );
    state.users[index] = newUser;
  },
  mutateDeleteUser(state, userNameToDelete) {
    state.users = state.users.filter(
      user=> user.name !== userNameToDelete
    );
  }
};
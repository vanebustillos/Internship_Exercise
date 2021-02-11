<template>
  <div>
    <v-dialog
      id="dialogRegister"
      v-model="dialogRegister"
      max-width="645px"
      persistent
    >
      <v-card shaped>
        <v-col cols="12">
          <v-text-field
            id="newNameInput"
            v-model="name"
            counter
            maxlength="40"
            label="Fullname"
            outlined
            shaped
            required
          ></v-text-field>
          <v-text-field
            id="newNickNameInput"
            v-model="nickName"
            counter
            maxlength="40"
            label="NickName"
            outlined
            shaped
            required
          ></v-text-field>
          <v-text-field
            id="newAvatarInput"
            v-model="avatar_url"
            counter
            maxlength="40"
            label="Avatar URL"
            outlined
            shaped
            required
          ></v-text-field>
          <v-text-field
            id="newGithubPageInput"
            v-model="github_url"
            counter
            maxlength="40"
            label="GitHub page"
            outlined
            shaped
            required
          ></v-text-field>
        </v-col>
        <v-card-actions>
          <v-btn
            id="cancelRegisterButton"
            class="ma-2"
            outlined
            color="#4682B4"
            @click.stop="_cancelRegister()"
            >Cancel</v-btn
          >
          <v-btn
            id="registerButton"
            class="ma-2"
            outlined
            color="#4682B4"
            @click.stop="_registerUser()"
            >Register</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Participant",
  data() {
    return {
      name: "",
      nickName: "",
      avatar_url: "",
      github_url: "",
      dialogRegister: false
    };
  },
  computed: {
    ...mapGetters(["getUsers"]),
    usersList() {
      return this.getUsers;
    }
  },
  methods: {
    ...mapActions(["registerUser"]),
    _registerUser() {
      this.registerParticipant({
        name: this.name,
        nickName: this.nickName,
        avatar_url: this.avatar_url,
        github_url: this.github_url
      });
    }
  },
  _cancelRegister() {
    this.selectedParticipant = null;
    this.dialogRegister = false;
  },
  _openRegister() {
    this.dialogRegister = true;
  }
};
</script>

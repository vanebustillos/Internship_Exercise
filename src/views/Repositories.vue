<template>
  <div class="repositories">
    <v-container class="my-10" grid-list-md>
        <v-col class="mb-5" cols="12">
            <h1 id="repositoriesTitle" class="headline font-weight-bold mb-3">
            REPOSITORIES 
            </h1>
            <v-btn
                id="register"
                dark
                color="#D2691E"
                @click.stop="openRegisterUserDialog()"
            >REGISTER
                <v-icon>mdi-plus</v-icon>
            </v-btn>
            <v-divider class="mx-4 my-4"></v-divider>
            <v-layout id="repositoriesList" row wrap>
                <v-flex
                xs12
                sm6
                md4
                lg2
                v-for="(user, index) in users"
                :key="index"
                >
                    <v-card
                        class="ma-3"
                    >
                        <v-img
                            v-if="user.avatar_url"
                            :src="`${ user.avatar_url}`"
                        ></v-img>
                        <v-img
                            v-if="!user.avatar_url"
                            src="https://bit.ly/3jD92S0"
                        ></v-img>

                        <v-card-title class="userName">
                            <div class="text-center">
                                <h4>{{ user.name }}</h4>
                            </div>
                        </v-card-title>
                        <v-divider class="mx-4"></v-divider>
                        <v-card-subtitle>
                            <p>NickName: </p>
                            <div class="text-center">
                                <h3>{{ user.nickName }}</h3>
                            </div>
                        </v-card-subtitle>
                        <v-card-text>
                            <p>GitHub page: </p>
                            <div class="text-center">
                                <a
                                    :href="`${ user.github_url}`"
                                    class="subheading mx-3"
                                    target="_blank"
                                >{{ user.github_url }}
                                </a>
                            </div>
                        </v-card-text>

                        <v-card-actions>
                            <v-btn
                                class="ma-2"
                                text
                                id="update"
                                color="deep-purple"
                                :rounded="true"
                                @click.stop="reserve"
                            >
                                UPDATE 
                            </v-btn>
                            <v-btn
                                class="ma-2"
                                text
                                id="delete"
                                color="deep-purple"
                                :rounded="true"
                                @click.stop="reserve"
                            >
                                DELETE 
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
      </v-col>
    </v-container>
    <create-user-component ref="userDialogs" />
  </div>
</template>

<script>
import userData from "../data.json";
import CreateUserComponent from "../components/CreateUser.vue";

export default {
  name: "Repositories",
  data() {
    return {
      registerForm: false
    };
  },
  components: { 
      CreateUserComponent
   },

  computed: {
      users() {
          return userData.users.map(item => {
              return item;
          })
      }
  },
  methods: {
    openRegisterUserDialog() {
      this.$refs.userDialogs._openRegister();
    }
  }
};
</script>
<template>
  <div class="repositories">
    <h1>This is the Repositories page</h1>
    <v-container class="my-10" grid-list-md>
        <v-col class="mb-5" cols="12">
            <h1 class="headline font-weight-bold mb-3">
            Repositories list
            </h1>
            <v-layout row wrap>
                <v-flex
                xs12
                sm6
                md4
                lg2
                v-for="(user, index) in users"
                :key="index"
                >
                    <v-card
                        :loading="loading"
                        class="ma-4" max-width="250"
                    >
                        <v-img
                            v-if="user.avatar_url"
                            :src="`${ user.avatar_url}`"
                        ></v-img>
                        <v-img
                            v-if="!user.avatar_url"
                            src="https://bit.ly/3jD92S0"
                        ></v-img>

                        <v-card-title>
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
  </div>
</template>

<script>
import userData from "./data.json";

export default {
  name: "Repositories",

  components: {  },

  computed: {
      users() {
          return userData.users.map(item => {
              return item;
          })
      }
  }
};
</script>
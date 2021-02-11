<template>
  <div class="repositories">
    <h1>This is the Repositories page</h1>
    <v-container class="my-10" grid-list-md>
        <v-col class="mb-5" cols="12">
        <h1 class="headline font-weight-bold mb-3">
          Repositories list
        </h1>
        <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>

    <v-card-title>Vanessa Bustillos Najera</v-card-title>
    <v-divider class="mx-4"></v-divider>
    <v-card-subtitle>Alias: Vane</v-card-subtitle>
    <v-card-text>
      <div>GithubPage: https://github.com/vanebustillos</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
        @click="reserve"
      >
        UPDATE 
      </v-btn>
      <v-btn
        color="deep-purple lighten-2"
        text
        @click="reserve"
      >
        DELETE 
      </v-btn>
    </v-card-actions>
  </v-card>
      </v-col>
    </v-container>
  </div>
</template>
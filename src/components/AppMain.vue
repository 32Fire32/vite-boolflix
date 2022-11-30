<script>
import { store } from "../store.js";

import AppCard from "./AppCard.vue";
import AppHeader from "./AppHeader.vue";
export default {
  name: "AppMain",
  components: {
    AppCard,
    AppHeader,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    saluta() {
      console.log("ciao");
    },
  },
};
</script>

<template>
  <ul>
    <li>
      <AppCard
        v-for="movie in store.movies"
        :title="movie.title"
        :originalTitle="movie.original_title"
        :originalLanguage="movie.original_language"
        :vote="movie.vote_average"
      />
    </li>
  </ul>
</template>

<style scoped lang="scss"></style>

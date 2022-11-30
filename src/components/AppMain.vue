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
};
</script>

<template>
  <div>
    <div class="movies">
      <h2>FILM:</h2>
      <ul>
        <li>
          <AppCard
            v-for="movie in store.movies"
            :title="movie.title"
            :originalTitle="movie.original_title"
            :originalLanguage="movie.original_language"
            :vote="movie.vote_average"
            :poster="movie.backdrop_path"
          />
        </li>
      </ul>
    </div>
    <div class="tvseries">
      <h2>SERIETV:</h2>
      <ul>
        <li>
          <AppCard
            v-for="tvserie in store.tvseries"
            :title="tvserie.name"
            :originalTitle="tvserie.original_title"
            :originalLanguage="tvserie.original_language"
            :vote="tvserie.vote_average"
            :poster="tvserie.backdrop_path"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>

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
  <main>
    <section class="container">
      <div class="movies">
        <h2>FILM:</h2>
        <div class="d-flex flex-wrap">
          <AppCard
            v-for="movie in store.movies"
            :title="movie.title"
            :originalTitle="movie.original_title"
            :originalLanguage="movie.original_language"
            :vote="movie.vote_average"
            :poster="movie.backdrop_path"
          />
        </div>
      </div>
    </section>
    <section class="container">
      <div class="tvseries">
        <h2>SERIETV:</h2>
        <div class="d-flex flex-wrap">
          <AppCard
            v-for="tvserie in store.tvseries"
            :title="tvserie.name"
            :originalTitle="tvserie.original_title"
            :originalLanguage="tvserie.original_language"
            :vote="tvserie.vote_average"
            :poster="tvserie.backdrop_path"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped lang="scss">
main {
  color: #fff;
  background-color: var(--secondary-color);
}
</style>

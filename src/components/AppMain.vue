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
    <!-- SEZIONE FILM -->
    <section class="container">
      <div class="movies">
        <h2>FILM</h2>
        <div class="d-flex flex-wrap">
          <AppCard
            v-for="movie in store.movies"
            :title="movie.title"
            :originalTitle="movie.original_title"
            :originalLanguage="movie.original_language"
            :vote="movie.vote_average"
            :poster="movie.poster_path"
            :summary="movie.overview"
          />
        </div>
      </div>
    </section>
    <!-- SEZIONE SERIE TV -->
    <section class="container">
      <div class="tvseries">
        <h2>SERIE TV</h2>
        <div class="d-flex flex-wrap">
          <AppCard
            v-for="tvserie in store.tvseries"
            :title="tvserie.name"
            :originalTitle="tvserie.original_title"
            :originalLanguage="tvserie.original_language"
            :vote="tvserie.vote_average"
            :poster="tvserie.poster_path"
            :summary="tvserie.overview"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped lang="scss">
main {
  margin-top: 50px;
  color: #fff;
  background: linear-gradient(to top, #000000 50%, #dadbd4);
}
</style>

<script>
import axios from "axios";
import { store } from "./store.js";

import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";
export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    getMovie(data = "") {
      if (data === "reset") {
        this.store.searchText = "";
      }
      axios
        .get("https://api.themoviedb.org/3/search/movie", {
          params: {
            api_key: "a3f5d45dfccef6d63637dff7ce41154f",
            query: this.store.searchText,
          },
        })
        .then((resp) => {
          this.store.movies = resp.data.results;
          this.store.movies.forEach((element, i) => {
            if (this.store.movies[i].original_language === "en") {
              this.store.movies[i].original_language = "/src/assets/en.png";
            } else if (this.store.movies[i].original_language === "fr") {
              this.store.movies[i].original_language = "/src/assets/fr.webp";
            } else if (this.store.movies[i].original_language === "it") {
              this.store.movies[i].original_language = "/src/assets/it.png";
            } else if (this.store.movies[i].original_language === "en") {
              this.store.movies[i].original_language = "/src/assets/de.png";
            } else if (this.store.movies[i].original_language === "ja") {
              this.store.movies[i].original_language = "/src/assets/jp.png";
            } else if (this.store.movies[i].original_language === "es") {
              this.store.movies[i].original_language = "/src/assets/esp.webp";
            } else
              this.store.movies[i].original_language = "/src/assets/na.jpg";
          });
        })
        .catch((err) => {
          this.store.movies = [];
          this.store.tvseries = [];
        });
      if (data === "reset") {
        this.store.searchText = "";
      }
      axios
        .get("https://api.themoviedb.org/3/search/tv", {
          params: {
            api_key: "a3f5d45dfccef6d63637dff7ce41154f",
            query: this.store.searchText,
          },
        })
        .then((resp) => {
          this.store.tvseries = resp.data.results;
          this.store.tvseries.forEach((element, i) => {
            if (this.store.tvseries[i].original_language === "en") {
              this.store.tvseries[i].original_language = "/src/assets/en.png";
            } else if (this.store.tvseries[i].original_language === "fr") {
              this.store.tvseries[i].original_language = "/src/assets/fr.webp";
            } else if (this.store.tvseries[i].original_language === "it") {
              this.store.tvseries[i].original_language = "/src/assets/it.png";
            } else if (this.store.tvseries[i].original_language === "en") {
              this.store.tvseries[i].original_language = "/src/assets/de.png";
            } else if (this.store.tvseries[i].original_language === "ja") {
              this.store.tvseries[i].original_language = "/src/assets/jp.png";
            } else if (this.store.tvseries[i].original_language === "es") {
              this.store.tvseries[i].original_language = "/src/assets/es.webp";
            } else
              this.store.tvseries[i].original_language = "/src/assets/na.jpg";
          });
        })
        .catch((err) => {
          this.store.movies = [];
          this.store.tvseries = [];
        });
    },
  },
};
</script>

<template>
  <AppHeader @search="getMovie" />
  <AppMain />
  <AppFooter />
</template>

<style lang="scss">
@import "./style/global.scss";
</style>

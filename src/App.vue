<script>
import axios from "axios";
import { store } from "./store.js";

import AppCarousel from "./components/AppCarousel.vue";
import AppHeader from "./components/AppHeader.vue";
import AppIn from "./components/AppIn.vue";
export default {
  components: {
    AppHeader,
    AppIn,
    AppCarousel,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    getMovie(data = "") {
      // PER IL RESET DEI RISULTATI
      if (data === "reset") {
        this.store.searchText = "";
      }
      // RENDE I RISULTATI VISIBILI
      store.start = true;
      // CHIAMATA API FILM
      axios
        .get("https://api.themoviedb.org/3/search/movie", {
          params: {
            api_key: "a3f5d45dfccef6d63637dff7ce41154f",
            query: this.store.searchText,
            include_adult: store.adult,
          },
        })
        .then((resp) => {
          this.store.movies = resp.data.results;
        })
        .catch((err) => {
          store.start = false;
          this.store.movies = [];
          this.store.tvseries = [];
        });
      // CHIAMATA API SERIE TV
      axios
        .get("https://api.themoviedb.org/3/search/tv", {
          params: {
            api_key: "a3f5d45dfccef6d63637dff7ce41154f",
            query: this.store.searchText,
          },
        })
        .then((resp) => {
          this.store.tvseries = resp.data.results;
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
  <AppCarousel v-if="store.start" />
  <AppIn v-if="!store.start" />
</template>

<style lang="scss">
@import "./style/global.scss";
</style>

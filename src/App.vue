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
        })
        .catch((err) => {
          this.store.movies = [];
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

<style scoped lang="scss"></style>

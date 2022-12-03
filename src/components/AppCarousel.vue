<script>
import { store } from "../store.js";

import AppCard from "./AppCard.vue";
import AppHeader from "./AppHeader.vue";
export default {
  name: "AppCarosuel",
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
    prevImageMovie() {
      const last = this.store.movies.pop();
      this.store.movies = [last].concat(this.store.movies);
    },

    nextImageMovie() {
      const first = this.store.movies.shift();
      this.store.movies = this.store.movies.concat(first);
    },
    prevImageTv() {
      const last = this.store.tvseries.pop();
      this.store.tvseries = [last].concat(this.store.tvseries);
    },

    nextImageTv() {
      const first = this.store.tvseries.shift();
      this.store.tvseries = this.store.tvseries.concat(first);
    },
  },
};
</script>

<template>
  <main>
    <!-- SEZIONE FILM -->
    <section>
      <div class="carousel-container">
        <h2 class="filmTitle ms-5">FILM</h2>
        <div class="carousel-list">
          <div @click="prevImageMovie" class="prev">
            <font-awesome-icon icon="fa-solid fa-chevron-left" class="arrow" />
          </div>
          <div @click="nextImageMovie" class="next">
            <font-awesome-icon icon="fa-solid fa-chevron-right" class="arrow" />
          </div>
          <ul class="slider-content">
            <li v-for="movie in store.movies">
              <AppCard
                :title="movie.title"
                :originalTitle="movie.original_title"
                :originalLanguage="movie.original_language"
                :vote="movie.vote_average"
                :poster="movie.poster_path"
                :summary="movie.overview"
              />
            </li>
          </ul>
        </div>
      </div>
      <!-- SEZIONE SERIE TV -->
      <div class="carousel-container">
        <h2 class="ms-5">SERIE TV</h2>

        <div class="carousel-list">
          <div @click="prevImageTv" class="prev">
            <font-awesome-icon icon="fa-solid fa-chevron-left" class="arrow" />
          </div>
          <div @click="nextImageTv" class="next">
            <font-awesome-icon icon="fa-solid fa-chevron-right" class="arrow" />
          </div>
          <ul class="slider-content">
            <li v-for="tvserie in store.tvseries">
              <AppCard
                :title="tvserie.name"
                :originalTitle="tvserie.original_name"
                :originalLanguage="tvserie.original_language"
                :vote="tvserie.vote_average"
                :poster="tvserie.poster_path"
                :summary="tvserie.overview"
                :key="tvserie.name"
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped lang="scss">
main {
  overflow-x: auto;
  height: 100%;
  margin-top: 100px;
  color: #fff;
  background: linear-gradient(to top, #000000 50%, #dadbd4);
}

// CAROSELLO
.carousel-container {
  .filmTitle {
    color: black;
  }
  .carousel-list {
    overflow-x: auto;
    position: relative;

    &::-webkit-scrollbar {
      display: none;
    }
    .slider-content {
      padding-left: 0;
      display: flex;
      flex-wrap: nowrap;
      position: relative;

      li {
        list-style-type: none;
        flex: 0 0 auto;
        width: 50%;
        @include media-breakpoint-up(sm) {
          width: calc(100% / 2 - 1.25rem);
        }
        @include media-breakpoint-up(md) {
          width: calc(100% / 3 - 1.25rem);
        }
        @include media-breakpoint-up(lg) {
          width: calc(100% / 4 - 1.25rem);
        }
        @include media-breakpoint-up(xl) {
          width: calc(100% / 5 - 1.25rem);
        }

        cursor: pointer;
      }
    }
  }

  // BOTTONI
  .prev,
  .next {
    position: absolute;
    bottom: 0;
    top: 0;
    margin: auto;
    display: flex;
    align-items: center;
    cursor: pointer;
    background: rgba(0, 0, 0, 0.5);
    z-index: 10;
    background: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.5);
    }
    .arrow {
      color: #fff;
      padding: 12px;
      display: none;
    }
  }
  .next {
    right: 0;
  }
  .prev {
    left: 0;
  }

  &:hover {
    .prev .arrow,
    .next .arrow {
      display: block;
      font-size: 24px;
    }
  }
}
</style>

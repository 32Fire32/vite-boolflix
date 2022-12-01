<script>
import { store } from "../store.js";
import CountryFlag from "vue-country-flag-next";

export default {
  name: "AppCard",
  components: {
    CountryFlag,
  },
  props: {
    title: String,
    originalTitle: String,
    originalLanguage: String,
    vote: Number,
    poster: String,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    langFlag(lang) {
      if (lang == "en") {
        return "gb";
      }
      return lang;
    },
  },

  computed: {
    rateVote() {
      return Math.ceil(this.vote / 2);
    },
    // isFlag() {
    //   this.store.flags.forEach((flag) => {
    //     console.log(flag.indexOf(this.originalLanguage) != -1);
    //   });
    // },
  },
};
</script>

<template>
  <div class="cardMovie">
    <!-- IMMAGINE DI COPERTINA -->
    <div class="cover">
      <img
        class="poster"
        :src="`https://image.tmdb.org/t/p/w342${poster}`"
        :alt="originalTitle"
        v-if="poster != null"
      />
      <img
        class="poster_na"
        v-else
        src="/src/assets/na.jpg"
        :alt="originalTitle"
      />
    </div>
    <!-- SEZIONE INFO -->
    <div class="info flex-column justify-content-between align-items-center">
      <div>
        <h1 class="text-center">{{ title }}</h1>
      </div>
      <div class="text-center">
        <h4>Titolo originale:</h4>
        <h2>{{ originalTitle }}</h2>
      </div>
      <div class="d-flex">
        <!-- BANDIERA -->
        <h3>Lingua originale:</h3>
        <!-- <img
        v-if="isFlag === true"
        class="flag"
        :src="`/src/assets/${originalLanguage}.png`"
        :alt="originalTitle"
      />
      <img v-else class="flag" src="/src/assets/na.jpg" alt="na" /> -->
        <CountryFlag
          :country="langFlag(originalLanguage)"
          size="big"
          class="ms-2"
        />
      </div>
      <!-- VOTO STELLE -->
      <div class="voting text-center">
        <div class="d-flex stars mb-4">
          <font-awesome-icon icon="fa-solid fa-star" v-for="n in rateVote" />
        </div>
        <div>
          <h4 v-if="rateVote == 0">Nessun voto</h4>
          <h4 v-else>Voto: {{ vote }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.cardMovie {
  background-color: rgb(92, 92, 92);
  padding: 30px;
  margin: 10px;
  width: calc(100% / 3 - 20px);
  border: 5px solid black;
  .poster {
    border: 1px solid black;
    width: 100%;
  }
  .poster_na {
    margin-top: 100px;
    border: 1px solid black;
    width: 100%;
  }
}
.info {
  display: none;
  height: 100%;
  border: 1px solid black;
}

.cardMovie:hover .info {
  display: flex;
  cursor: pointer;
}
.cardMovie:hover .cover {
  display: none;
}

.flag {
  width: 50px;
}

.stars {
  color: rgb(235, 235, 91);
  font-size: 2rem;
}
</style>

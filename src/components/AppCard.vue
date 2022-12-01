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
    summary: String,
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
      <!-- ALTERNATIVA IN CASO DI COPERTINA MANCANTE -->
      <img
        class="poster_na"
        v-else
        src="/src/assets/na.jpg"
        :alt="originalTitle"
      />
    </div>
    <!-- SEZIONE INFO -->
    <div class="info flex-column align-items-center">
      <div class="text-center">
        <h3>{{ title }}</h3>
      </div>
      <div class="text-center" v-if="title != originalTitle">
        <h5>Titolo originale:</h5>
        <h4>{{ originalTitle }}</h4>
      </div>
      <div class="overview">
        <p>{{ summary }}</p>
      </div>
      <!-- BANDIERA -->
      <div class="d-flex align-items-center">
        <h5>Lingua originale:</h5>
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
      <div class="voting text-center mt-2">
        <div class="d-flex stars mb-2">
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
  padding: 10px;
  margin: 10px;
  width: 100%;
  border: 5px solid black;
  position: relative;
  box-shadow: 0px 0px 15px 12px rgb(0 0 0 / 20%);

  @include media-breakpoint-up(sm) {
    width: calc(100% / 1 - 20px);
  }
  @include media-breakpoint-up(md) {
    width: calc(100% / 2 - 20px);
  }
  @include media-breakpoint-up(xxl) {
    width: calc(100% / 4 - 20px);
  }
  .poster {
    border: 1px solid black;
    width: 100%;
  }
  .poster_na {
    margin-top: 20%;
    border: 1px solid black;
    width: 100%;
  }
  .cover {
    transition: opacity 1s;
  }
}
.info {
  display: none;
  width: 100%;
  height: 100%;
  border: 1px solid black;
  position: absolute;
  top: 0;
  right: 0;
  padding: 20px;
  overflow-y: scroll;
}

/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 0.3125rem #141922;
  border-radius: 0.625rem;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: var(--primary-color);
  border-radius: 0.625rem;
  height: 1.875rem;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: var(--primary-color);
}

.cardMovie:hover .info {
  display: flex;
  cursor: pointer;
}
.cardMovie:hover .cover {
  opacity: 0.1;
}

.flag {
  width: 50px;
}

.stars {
  color: rgb(235, 235, 91);
  font-size: 2rem;
}
</style>

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
    <div class="info flex-column align-items-center justify-content-between">
      <div class="title text-center p-2">
        <h5>{{ title }}</h5>
      </div>
      <div class="text-center" v-if="title != originalTitle">
        <span>Titolo originale:</span>
        <h5>{{ originalTitle }}</h5>
      </div>
      <div class="overview my-2">
        <p>{{ summary }}</p>
      </div>
      <div class="bottom d-flex align-items-center justify-content-between p-2">
        <!-- BANDIERA -->
        <div class="language d-flex align-items-center">
          <CountryFlag :country="langFlag(originalLanguage)" size="small" />
        </div>
        <!-- VOTO STELLE -->
        <div class="voting">
          <div class="d-flex stars align-items-center">
            <font-awesome-icon icon="fa-solid fa-star" v-for="n in rateVote" />
            <div class="vote">
              <span v-if="rateVote == 0">Nessun voto</span>
              <span v-else>{{ vote }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.cardMovie {
  margin: 0.3125rem;
  position: relative;
  font-family: "Open Sans", sans-serif;

  .poster {
    border: 0.0625rem solid black;
    width: 100%;
  }
  .poster_na {
    border: 0.0625rem solid black;
    width: 100%;
  }
  .cover {
    transition: all 1s;
  }
}
.info {
  display: none;
  width: 100%;
  height: 100%;
  border: 0.0625rem solid black;
  position: absolute;
  top: 0;
  right: 0;
  padding: 1.25rem;
  overflow-y: scroll;

  .title {
    background-color: rgb(88, 88, 88);
    width: 100%;
    border-bottom: 2px solid black;
  }
  .bottom {
    background-color: rgb(88, 88, 88);
    width: 100%;
    border-top: 2px solid black;
  }
}
.vote {
  margin-left: 0.625rem;
}

/* width */
::-webkit-scrollbar {
  width: 0.3125rem;
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
.fa-star {
  color: rgb(235, 235, 91);
}
</style>

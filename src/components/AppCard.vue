<script>
export default {
  name: "AppCard",
  props: {
    title: String,
    originalTitle: String,
    originalLanguage: String,
    vote: Number,
    poster: String,
  },
  data() {
    return {
      starCount: 0,
      rateCount: [2, 4, 6, 8, 10],
    };
  },
  methods: {
    // stars(item, array) {
    //   array.forEach((element) => {
    //     if (item >= element) {
    //       return true;
    //     }
    //   });
    // },
  },
  created() {
    this.starCount = Math.ceil(this.vote);
  },
};
</script>

<template>
  <div class="cardMovie">
    <div class="cover">
      <img
        class="poster"
        :src="`https://image.tmdb.org/t/p/w342${poster}`"
        :alt="originalTitle"
        v-if="poster != null"
      />
      <img
        v-else
        src="/src/assets/na.jpg"
        :alt="originalTitle"
        class="poster"
      />
    </div>
    <div class="info d-none">
      <h1>Titolo: {{ title }}</h1>
      <h2>Titolo originale: {{ originalTitle }}</h2>
      <h3>Lingua originale:</h3>
      <img :src="originalLanguage" :alt="originalTitle" />
      <div class="stars">
        <!-- <div v-for="rate in rateCount" v-if="stars(starCount, rateCount)">
      <i class="fa-solid fa-star"></i>
    </div> -->
        <div v-if="starCount >= 2"><i class="fa-solid fa-star"></i></div>
        <div v-if="starCount >= 4"><i class="fa-solid fa-star"></i></div>
        <div v-if="starCount >= 6"><i class="fa-solid fa-star"></i></div>
        <div v-if="starCount >= 8"><i class="fa-solid fa-star"></i></div>
        <div v-if="starCount >= 10"><i class="fa-solid fa-star"></i></div>
      </div>
      <h4>Voto: {{ starCount }}</h4>
    </div>
  </div>
</template>

<style scoped lang="scss">
.cardMovie {
  width: calc(100% / 3);
  img {
    width: 100%;
    object-fit: cover;
  }
}
.poster {
  width: 300px;
  border: 1px solid black;
}
.stars {
  color: rgb(235, 235, 91);
  font-size: 2rem;
}
</style>

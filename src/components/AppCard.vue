<script>
export default {
  name: "AppCard",
  props: {
    title: String,
    originalTitle: String,
    originalLanguage: String,
    vote: Number,
  },
};
</script>

<template>
  <h1>Titolo: {{ title }}</h1>
  <h2>Titolo originale: {{ originalTitle }}</h2>
  <h3>Lingua originale:</h3>
  <img :src="originalLanguage" alt="originalTitle" />
  <h4>Voto: {{ vote }}</h4>
</template>

<style scoped lang="scss">
img {
  width: 100px;
}
</style>

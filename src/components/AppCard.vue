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
  <h3>Lingua originale: {{ originalLanguage }}</h3>
  <h4>Voto: {{ vote }}</h4>
</template>

<style scoped lang="scss"></style>

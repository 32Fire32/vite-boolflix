<script>
import { store } from "../store.js";

export default {
  name: "AppHeader",
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <h1>Header</h1>
  <form @submit.prevent="$emit('search')">
    <input
      type="text"
      placeholder="Cerca il tuo film"
      v-model="store.searchText"
    />
    <button type="submit">Cerca</button>
    <button type="reset" @click="$emit('search', 'reset')">Reset</button>
  </form>
</template>

<style scoped lang="scss"></style>

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
  <header>
    <div
      class="container d-flex justify-content-between p-3 align-items-center"
    >
      <div class="logo">
        <h1>BOOLFIX</h1>
      </div>
      <form @submit.prevent="$emit('search')">
        <input
          type="text"
          placeholder="Cerca il tuo film"
          v-model="store.searchText"
        />
        <button type="submit">Cerca</button>
        <button type="reset" @click="$emit('search', 'reset')">Reset</button>
      </form>
    </div>
  </header>
</template>

<style scoped lang="scss">
header {
  background-color: black;
  color: var(--primary-color);
}
</style>

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
      <!-- FORM DI RICERCA -->
      <form @submit.prevent="$emit('search')">
        <input
          type="text"
          placeholder="Cerca il tuo film"
          v-model="store.searchText"
          required
        />
        <button type="submit">CERCA</button>
        <button type="reset" @click="$emit('search', 'reset')">RESET</button>
      </form>
    </div>
  </header>
</template>

<style scoped lang="scss">
header {
  position: sticky;
  background-color: black;
  color: var(--primary-color);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: 0px 0px 5px 2px rgb(0 0 0 / 20%);
  z-index: 10;

  button {
    margin: 0 10px;
    font-size: 1.3rem;
    font-weight: bold;
    color: var(--primary-color);
    border: none;
    background-color: inherit;
  }
}
</style>

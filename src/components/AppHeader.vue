<script>
import { store } from "../store.js";

export default {
  name: "AppHeader",
  data() {
    return {
      store,
    };
  },
  methods: {
    reload() {
      window.location.reload();
    },
    adultFilterOn() {
      console.log("child on");
      return (store.adult = false);
    },
    adultFilterOff() {
      console.log("child off");
      return (store.adult = true);
    },
  },
};
</script>

<template>
  <header>
    <div
      class="container-lg d-flex justify-content-between p-3 align-items-center"
    >
      <div class="logo" @click="reload">
        <h1>BOOLFIX</h1>
      </div>
      <!-- FORM DI RICERCA -->
      <form @submit.prevent="$emit('search')" class="d-flex align-items-center">
        <input
          type="text"
          placeholder="Cerca il tuo film"
          v-model="store.searchText"
          required
        />
        <button type="submit">
          <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="ms-1" />
        </button>
        <button type="reset" @click="$emit('search', 'reset')">
          <font-awesome-icon icon="fa-solid fa-arrow-rotate-left" />
        </button>
        <font-awesome-icon
          icon="fa-solid fa-child-reaching "
          class="ms-1 child-off"
          @click="adultFilterOn"
          v-if="store.adult"
        />
        <font-awesome-icon
          icon="fa-solid fa-child-reaching "
          class="ms-1 child-on"
          @click="adultFilterOff"
          v-else
        />
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
  box-shadow: 0rem 0rem 0.3125rem 0.125rem rgb(0 0 0 / 20%);
  z-index: 10;

  .logo {
    cursor: pointer;
    @include media-breakpoint-down(sm) {
      display: none;
    }
  }

  // PROTEZIONE MINORI
  .child-off {
    color: var(--primary-color);
    font-size: 1.4rem;
    padding: 0.3125rem;
  }

  .child-on {
    color: green;
    font-size: 1.4rem;
    border: 1px solid green;
    border-radius: 100%;
    padding: 0.3125rem 0.4375rem;
  }

  button {
    font-size: 1.3rem;
    font-weight: bold;
    color: var(--primary-color);
    border: none;
    background-color: inherit;
  }
}
</style>

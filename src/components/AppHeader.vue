<script>
import { store } from "./store";

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
  <form>
    <input type="text" />
    <button type="submit">Cerca</button>
  </form>
</template>

<style scoped lang="scss"></style>

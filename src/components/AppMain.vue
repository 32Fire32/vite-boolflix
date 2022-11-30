<script>
import { store } from "./store";

import AppCard from "./AppCard.vue";
export default {
  name: "AppMain",
  components: {
    AppCard,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <AppCard />
</template>

<style scoped lang="scss"></style>

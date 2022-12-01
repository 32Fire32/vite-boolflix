<script>
export default {
  name: "AppIn",
};
</script>

<template>
  <main>
    <div class="slogan d-flex flex-column">
      <div class="intro d-flex align-items-center">
        <h4>Search.</h4>
        <h3>Find.</h3>
        <h2>Enjoy.</h2>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.slogan {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    color: var(--primary-color);
  }
}
</style>

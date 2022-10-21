<template>
  <div id="app">
    <h1>Pokémon</h1>
    <Home />
  </div>
</template>

<script>
import Home from "../views/Home/Home.vue";

export default {
  name: "App",
  components: {
    Home,
  },
};
</script>

<style src="./style.scss" lang="scss"></style>

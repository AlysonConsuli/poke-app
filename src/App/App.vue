<template>
  <div id="app">
    <img src="../assets/images/pokemon.svg" alt="pokemon" />
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

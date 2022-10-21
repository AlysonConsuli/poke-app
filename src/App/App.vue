<template>
  <div id="app">
    <h1>Pokémon</h1>
    <Cards />
  </div>
</template>

<script>
import Cards from "../components/Cards/Cards.vue";

export default {
  name: "App",
  components: {
    Cards,
  },
};
</script>

<style src="./style.scss" lang="scss"></style>

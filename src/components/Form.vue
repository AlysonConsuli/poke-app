<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <p>
      <input
        placeholder="nome do pokemon"
        type="text"
        name="pokemon"
        v-model="pokemon"
      />
    </p>
    <button v-on:click="searchPokemon" type="submit">Pesquisar</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pokemon: "",
    };
  },
  methods: {
    searchPokemon() {
      if (this.pokemon.trim() === "") {
        return;
      }
      this.$emit("show-pokemon", {
        pokemon: this.pokemon,
      });
      this.pokemon = "";
    },
  },
};
</script>

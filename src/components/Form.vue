<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div v-on:keydown.enter="searchPokemon">
    <p>
      <input
        placeholder="pokemon name"
        type="text"
        name="name"
        v-model="name"
      />
    </p>
    <button @click="searchPokemon" type="submit">Search</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
    };
  },
  methods: {
    searchPokemon() {
      if (this.name.trim() === "") {
        return;
      }
      this.$emit("show-pokemon", {
        name: this.name,
      });
      this.name = "";
    },
  },
};
</script>

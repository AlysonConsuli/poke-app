<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <p>
      <input
        placeholder="pokemon name"
        type="text"
        name="name"
        v-model="name"
      />
    </p>
    <button v-on:click="searchPokemon" type="submit">Search</button>
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
    async searchPokemon() {
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

<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <p>
      <input
        placeholder="nome do pokemon"
        type="text"
        name="name"
        v-model="name"
      />
    </p>
    <button v-on:click="searchPokemon" type="submit">Pesquisar</button>
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

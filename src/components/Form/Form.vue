<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="form" v-on:keydown.enter="searchPokemon">
    <input placeholder="pokemon name" type="text" name="name" v-model="name" />
    <button @click="searchPokemon" type="submit" :disabled="disabled">
      <span v-if="!disabled">Search</span>
      <v-progress-circular
        v-else
        indeterminate
        size="18"
        width="2"
      ></v-progress-circular>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
    };
  },
  props: {
    disabled: Boolean,
  },
  methods: {
    searchPokemon() {
      if (this.name.trim() === "") {
        return;
      }
      this.$emit("show-pokemon", {
        name: this.name.trim().toLocaleLowerCase(),
      });
      this.name = "";
    },
  },
};
</script>

<style src="./style.scss" lang="scss" scoped></style>

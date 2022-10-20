<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <Form v-on:show-pokemon="showPokemons"></Form>
    <div v-for="(pokemon, index) in pokemons" :key="index">
      <span>
        <strong>{{ pokemon.name }}</strong>
      </span>
    </div>
  </div>
</template>

<script>
import Form from "./Form.vue";

export default {
  components: {
    Form,
  },
  data() {
    return {
      pokemons: [],
    };
  },
  methods: {
    showPokemons(name) {
      this.pokemons.push(name);
    },
  },
};
</script>

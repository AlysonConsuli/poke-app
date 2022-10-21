<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <Form v-on:show-pokemon="showPokemons"></Form>
    <div v-for="(pokemon, index) in pokemons" :key="index">
      <span>
        <strong>{{ pokemon }}</strong>
      </span>
    </div>
  </div>
</template>

<script>
import Form from "./Form.vue";
import axios from "axios";

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
    async showPokemons(pokemon) {
      try {
        this.pokemons.length = 0;
        const { data: specie } = await axios.get(
          `https://pokeapi.co/api/v2/pokemon-species/${pokemon.name}`,
        );
        const { data } = await axios.get(specie.evolution_chain.url);
        let evolutionChain = data.chain;
        while (evolutionChain) {
          this.pokemons.push(evolutionChain?.species.name);
          evolutionChain = evolutionChain?.evolves_to[0];
        }
      } catch (error) {
        alert(error?.response.data);
        console.log(error);
      }
    },
  },
};
</script>

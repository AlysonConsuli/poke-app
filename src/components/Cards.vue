<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <Form v-on:show-pokemon="showPokemons"></Form>
    <div v-for="(pokemon, index) in pokemons" :key="index">
      <img :src="pokemon.sprites.front_default" :alt="pokemon.name" />
      <span>
        <strong>{{ pokemon.name }}</strong>
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
      const URL = "https://pokeapi.co/api/v2";
      this.pokemons.length = 0;
      try {
        const { data: specie } = await axios.get(
          `${URL}/pokemon-species/${pokemon.name}`,
        );
        const { data: evolution } = await axios.get(specie.evolution_chain.url);
        let evolutionChain = evolution.chain;
        while (evolutionChain) {
          const name = evolutionChain?.species.name;
          const { data: pokemonData } = await axios.get(
            `${URL}/pokemon/${name}`,
          );
          this.pokemons.push(pokemonData);
          evolutionChain = evolutionChain?.evolves_to[0];
        }
        console.log(this.pokemons);
      } catch (error) {
        alert(error?.response.data);
        console.log(error);
      }
    },
  },
};
</script>
